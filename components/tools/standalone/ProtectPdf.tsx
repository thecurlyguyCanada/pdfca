'use client';

/**
 * Protect PDF: adds an open password with @cantoo/pdf-lib (a pdf-lib fork with encryption).
 * Cipher: AES-256 (standard security handler /V 5 /R 6, ISO 32000-2), the library default and its
 * strongest option. The owner password is a random 32-byte value that is never shown, so the
 * "allow printing / copying" choices are not lifted by simply re-entering the open password.
 * Everything runs in the browser.
 */
import React, { useCallback, useState } from 'react';
import { Eye, EyeOff, FileText, Lock, Loader2 } from 'lucide-react';
import { Panel, Dropzone, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, formatBytes, pdfBlob, baseName, yieldToBrowser } from './shared';

type Lang = 'en' | 'fr';

const STR = {
    en: {
        title: 'Add a password to your PDF',
        intro: 'Anyone who opens the file will need this password. Your file stays on your device.',
        password: 'Password',
        confirm: 'Confirm password',
        show: 'Show password',
        hide: 'Hide password',
        mismatch: 'The two passwords don’t match.',
        empty: 'Enter a password.',
        hintShort: (n: number) => `${n} character${n === 1 ? '' : 's'} — very short and easy to guess. Use at least 8, ideally 12 or more.`,
        hintOk: (n: number) => `${n} characters — acceptable. 12 or more is better.`,
        hintGood: (n: number) => `${n} characters — good length. Longer passwords are harder to guess.`,
        hintTip: 'Tip: a phrase of 3–4 unrelated words is long and easy to remember.',
        permissions: 'Permissions after opening',
        allowPrint: 'Allow printing',
        allowCopy: 'Allow copying text',
        permNote: 'Respected by Adobe Acrobat, browsers and most PDF readers. Some programs ignore them; the password itself is what keeps the file private.',
        warning: 'Write your password down. We never see or store it, so we cannot recover it or open the file for you if you forget it.',
        protect: 'Protect PDF',
        working: 'Encrypting…',
        reading: 'Reading the file…',
        change: 'Choose another file',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        already: 'This PDF is already protected with a password or restrictions. Open it with its password in your PDF reader, save or print an unprotected copy, then add a new password here.',
        damaged: 'This file could not be read as a PDF. It may be damaged or not a PDF.',
        notPdf: 'Please choose a PDF file.',
        pdfa: 'This file is marked as PDF/A (archival), and PDF/A files cannot be encrypted.',
        failed: 'Something went wrong while encrypting this file. Nothing was saved.',
        done: 'Protected with AES-256',
        suffix: '-protected',
    },
    fr: {
        title: 'Ajouter un mot de passe à votre PDF',
        intro: 'Toute personne qui ouvre le fichier devra entrer ce mot de passe. Votre fichier reste sur votre appareil.',
        password: 'Mot de passe',
        confirm: 'Confirmez le mot de passe',
        show: 'Afficher le mot de passe',
        hide: 'Masquer le mot de passe',
        mismatch: 'Les deux mots de passe ne correspondent pas.',
        empty: 'Entrez un mot de passe.',
        hintShort: (n: number) => `${n} caractère${n > 1 ? 's' : ''} — très court et facile à deviner. Utilisez-en au moins 8, idéalement 12 ou plus.`,
        hintOk: (n: number) => `${n} caractères — acceptable. 12 ou plus, c’est mieux.`,
        hintGood: (n: number) => `${n} caractères — bonne longueur. Plus un mot de passe est long, plus il est difficile à deviner.`,
        hintTip: 'Astuce : une phrase de 3 ou 4 mots sans lien entre eux est longue et facile à retenir.',
        permissions: 'Autorisations après l’ouverture',
        allowPrint: 'Autoriser l’impression',
        allowCopy: 'Autoriser la copie du texte',
        permNote: 'Respectées par Adobe Acrobat, les navigateurs et la plupart des lecteurs PDF. Certains logiciels les ignorent : c’est le mot de passe qui protège vraiment le fichier.',
        warning: 'Notez votre mot de passe. Nous ne le voyons jamais et ne le conservons pas : nous ne pourrons ni le récupérer ni ouvrir le fichier pour vous si vous l’oubliez.',
        protect: 'Protéger le PDF',
        working: 'Chiffrement en cours…',
        reading: 'Lecture du fichier…',
        change: 'Choisir un autre fichier',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        already: 'Ce PDF est déjà protégé par un mot de passe ou des restrictions. Ouvrez-le avec son mot de passe dans votre lecteur PDF, enregistrez ou imprimez une copie non protégée, puis ajoutez un nouveau mot de passe ici.',
        damaged: 'Ce fichier n’a pas pu être lu comme un PDF. Il est peut-être endommagé ou ce n’est pas un PDF.',
        notPdf: 'Veuillez choisir un fichier PDF.',
        pdfa: 'Ce fichier est marqué PDF/A (archivage), et les fichiers PDF/A ne peuvent pas être chiffrés.',
        failed: 'Une erreur s’est produite pendant le chiffrement. Aucun fichier n’a été créé.',
        done: 'Protégé avec AES-256',
        suffix: '-protege',
    },
};

/** Random owner password (never shown): keeps the printing/copying restrictions meaningful. */
function randomOwnerPassword(): string {
    const b = new Uint8Array(32);
    crypto.getRandomValues(b);
    return Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}

function looksLikePdf(bytes: Uint8Array): boolean {
    const head = new TextDecoder('latin1').decode(bytes.subarray(0, 1024));
    return head.includes('%PDF-');
}

export default function ProtectPdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [allowPrint, setAllowPrint] = useState(true);
    const [allowCopy, setAllowCopy] = useState(true);
    const [busy, setBusy] = useState<'' | 'reading' | 'working'>('');
    const [error, setError] = useState('');
    const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);

    const reset = useCallback(() => {
        setFile(null); setBytes(null); setPageCount(0); setPw(''); setPw2(''); setShowPw(false);
        setError(''); setResult(null); setBusy('');
    }, []);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setError(''); setResult(null); setFile(null); setBytes(null);
        setBusy('reading');
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            if (!looksLikePdf(data)) { setError(/\.pdf$/i.test(f.name) ? t.damaged : t.notPdf); return; }
            const { PDFDocument } = await import('@cantoo/pdf-lib');
            let doc;
            try {
                doc = await PDFDocument.load(data, { ignoreEncryption: true, updateMetadata: false });
            } catch {
                setError(t.damaged); return;
            }
            if (doc.isEncrypted) { setError(t.already); return; }
            setPageCount(doc.getPageCount());
            setBytes(data);
            setFile(f);
        } catch {
            setError(t.damaged);
        } finally {
            setBusy('');
        }
    }, [t]);

    const mismatch = pw2.length > 0 && pw !== pw2;
    const canProtect = !!bytes && pw.length > 0 && pw === pw2 && !busy;

    const protect = useCallback(async () => {
        if (!bytes || !file) return;
        if (!pw) { setError(t.empty); return; }
        if (pw !== pw2) { setError(t.mismatch); return; }
        setError(''); setBusy('working');
        await yieldToBrowser();
        try {
            const { PDFDocument } = await import('@cantoo/pdf-lib');
            const doc = await PDFDocument.load(bytes, { updateMetadata: false });
            try {
                doc.encrypt({
                    userPassword: pw,
                    ownerPassword: randomOwnerPassword(),
                    algorithm: 'AES-256',
                    permissions: {
                        printing: allowPrint ? 'highResolution' : false,
                        copying: allowCopy,
                        // Everything not offered in the UI stays allowed.
                        modifying: true,
                        annotating: true,
                        fillingForms: true,
                        contentAccessibility: true,
                        documentAssembly: true,
                    },
                });
            } catch (e) {
                setError(/PDF\/A/.test(String((e as Error)?.message)) ? t.pdfa : t.failed);
                return;
            }
            const out = await doc.save();
            if (!out || out.length < 64) { setError(t.failed); return; }
            setResult({ blob: pdfBlob(out), name: `${baseName(file.name)}${t.suffix}.pdf` });
        } catch {
            setError(t.failed);
        } finally {
            setBusy('');
        }
    }, [bytes, file, pw, pw2, allowPrint, allowCopy, t]);

    const n = pw.length;
    const hint = n === 0 ? '' : n < 8 ? t.hintShort(n) : n < 12 ? t.hintOk(n) : t.hintGood(n);
    const hintColor = n < 8 ? 'text-amber-700 dark:text-amber-300' : n < 12 ? 'text-gray-600 dark:text-gray-400' : 'text-green-700 dark:text-green-400';

    const inputCls = 'w-full min-h-[44px] rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-2.5 pr-12 text-base text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-canada-red/40 focus:border-canada-red';

    return (
        <Panel>
            {!file && (
                <>
                    <Dropzone lang={lang} onFiles={onFiles} />
                    {busy === 'reading' && <p className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{t.reading}</p>}
                    <ErrorBox>{error}</ErrorBox>
                </>
            )}

            {file && !result && (
                <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                        <FileText className="h-6 w-6 text-canada-red shrink-0" aria-hidden="true" />
                        <div className="min-w-0 flex-1 basis-40">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{formatBytes(file.size, lang)} · {t.pages(pageCount)}</p>
                        </div>
                        <SecondaryButton onClick={reset} disabled={!!busy} className="w-full sm:w-auto">{t.change}</SecondaryButton>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2"><Lock className="h-5 w-5 text-canada-red" aria-hidden="true" />{t.title}</h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.intro}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="protect-pw" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{t.password}</label>
                            <div className="relative">
                                <input id="protect-pw" type={showPw ? 'text' : 'password'} autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} className={inputCls} />
                                <button type="button" onClick={() => setShowPw((s) => !s)} aria-label={showPw ? t.hide : t.show} title={showPw ? t.hide : t.show} className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-lg text-gray-500 hover:text-canada-red">
                                    {showPw ? <EyeOff className="h-5 w-5" aria-hidden="true" /> : <Eye className="h-5 w-5" aria-hidden="true" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="protect-pw2" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{t.confirm}</label>
                            <input id="protect-pw2" type={showPw ? 'text' : 'password'} autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} aria-invalid={mismatch} className={`${inputCls} ${mismatch ? 'border-red-400' : ''}`} />
                        </div>
                    </div>
                    <div aria-live="polite" className="-mt-2 space-y-1 text-sm">
                        {hint && <p className={hintColor}>{hint}</p>}
                        {n > 0 && n < 12 && <p className="text-gray-500 dark:text-gray-400">{t.hintTip}</p>}
                        {mismatch && <p className="text-red-700 dark:text-red-300">{t.mismatch}</p>}
                    </div>

                    <fieldset className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                        <legend className="px-1 text-sm font-semibold text-gray-800 dark:text-gray-200">{t.permissions}</legend>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                            <label className="flex items-center gap-3 min-h-[44px] cursor-pointer text-gray-800 dark:text-gray-200">
                                <input type="checkbox" checked={allowPrint} onChange={(e) => setAllowPrint(e.target.checked)} className="h-5 w-5 accent-canada-red" />
                                {t.allowPrint}
                            </label>
                            <label className="flex items-center gap-3 min-h-[44px] cursor-pointer text-gray-800 dark:text-gray-200">
                                <input type="checkbox" checked={allowCopy} onChange={(e) => setAllowCopy(e.target.checked)} className="h-5 w-5 accent-canada-red" />
                                {t.allowCopy}
                            </label>
                        </div>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{t.permNote}</p>
                    </fieldset>

                    <p className="rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-200 text-sm px-4 py-3">{t.warning}</p>

                    <ErrorBox>{error}</ErrorBox>

                    <PrimaryButton onClick={protect} disabled={!canProtect} className="w-full sm:w-auto">
                        {busy === 'working' ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{t.working}</> : <><Lock className="h-4 w-4" aria-hidden="true" />{t.protect}</>}
                    </PrimaryButton>
                </div>
            )}

            {result && (
                <>
                    <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done} onReset={reset} />
                    <p className="mt-3 text-sm text-amber-800 dark:text-amber-300">{t.warning}</p>
                </>
            )}
        </Panel>
    );
}
