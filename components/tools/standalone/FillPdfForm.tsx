'use client';

/**
 * Fill PDF form: lists the AcroForm fields of a PDF (text, multiline, checkbox, radio, dropdown, list), lets the
 * user type values next to a thumbnail of each page with the active field outlined, and saves <name>-filled.pdf,
 * optionally flattened. XFA-only forms, files with an open password and files with no fields get a clear message
 * instead. The PDF work lives in utils/pdfFormFill.ts; everything runs in the browser.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type * as PdfJsLib from 'pdfjs-dist';
import { FileText, Loader2, PenLine, Search, Lock, AlertTriangle, Info } from 'lucide-react';
import {
    Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, formatBytes, pdfBlob, baseName,
    yieldToBrowser, openPdf, thumbnail, ui, type Lang,
} from './shared';
import {
    inspectForm, fillForm, helveticaCharset, unsupportedChars, FormFillError,
    type FormInspection, type FormFieldInfo, type FieldValue,
} from '@/utils/pdfFormFill';

const STR = {
    en: {
        notPdf: 'This file isn’t a PDF. Choose a file that ends in .pdf.',
        reading: 'Reading the form…',
        change: 'Choose another file',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        fieldsFound: (n: number) => `${n} field${n === 1 ? '' : 's'} to fill`,
        password: 'This PDF needs a password to open. Open it with the password in your PDF reader, save a copy without one, then add that copy here.',
        fillNotAllowed: 'The author of this PDF has turned off form filling in its security settings, so this tool won’t change it. Ask the sender for a fillable copy.',
        noFieldsTitle: 'This PDF has no fillable fields',
        noFields: 'It is a flat document: there is nothing to type into. Two ways forward:',
        noFieldsFillable: ['Make PDF Fillable', 'adds fields where the form has blanks (underscores, boxes).'],
        noFieldsSign: ['Sign PDF', 'lets you place a signature, initials or a date anywhere on the page.'],
        xfaTitle: 'This is an XFA form: fill it in Adobe Acrobat Reader',
        xfaDynamic: 'Its fields live only in the XFA layer (Adobe LiveCycle), and what you see in a browser is a placeholder page such as “Please wait…” or “requires Adobe Reader 8 or higher”. Browser tools, this one included, can’t fill XFA. Open the file in the free Adobe Acrobat Reader on a computer. IRCC forms work this way.',
        xfaNoFields: 'It was made with Adobe’s XFA format and has no standard (AcroForm) fields this tool can fill. If the form has fields in Adobe Acrobat Reader, fill it there.',
        xfaGuide: 'How to open and fill an XFA form',
        hybrid: 'This form also has an XFA layer (Adobe LiveCycle). Its standard fields are filled here and the XFA layer is removed from the copy, so every viewer shows your answers; the form’s own scripts, Validate button and barcode won’t run. If the organization asked for Adobe Reader (IRCC, for example), use Adobe Reader instead.',
        encrypted: 'This form is locked against editing except for filling in fields. The filled copy is saved without that lock.',
        filter: 'Find a field',
        noMatch: 'No field matches.',
        page: (n: number) => `Page ${n}`,
        alsoOn: (p: string) => `also on page ${p}`,
        readOnly: 'read-only',
        required: 'required',
        chars: (n: number, max: number) => `${n}/${max}`,
        comb: (max: number) => `${max} boxes, one character each`,
        yes: 'Checked',
        noChoice: '— none —',
        multiHint: 'Several can be chosen.',
        badChars: (c: string) => `These characters can’t be drawn by the form font and must be removed or replaced: ${c}`,
        signature: 'Signature field: this tool doesn’t sign. Use Sign PDF after filling.',
        signLink: 'Sign PDF',
        changed: (n: number) => n === 0 ? 'No field changed yet.' : `${n} field${n === 1 ? '' : 's'} changed`,
        flatten: 'Flatten after filling',
        flattenHint: 'Answers become part of the page and can no longer be edited. Leave off if the recipient may need to correct something.',
        flattenLocked: 'Not available: this form’s security settings don’t allow changes other than filling in fields.',
        save: 'Save filled PDF',
        saving: 'Saving…',
        failed: 'Something went wrong while saving. Nothing was downloaded. Try again, or try another copy of the form.',
        fixFirst: 'Fix the highlighted fields first.',
        done: (n: number, flat: boolean) => `${n} field${n === 1 ? '' : 's'} filled${flat ? ', flattened' : ''}`,
        skipped: (s: string) => `These fields could not be written and kept their previous value: ${s}`,
        editAgain: 'Edit answers',
        thumbAlt: (n: number) => `Page ${n} of the form`,
        suffix: '-filled',
    },
    fr: {
        notPdf: 'Ce fichier n’est pas un PDF. Choisissez un fichier qui se termine par .pdf.',
        reading: 'Lecture du formulaire…',
        change: 'Choisir un autre fichier',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        fieldsFound: (n: number) => `${n} champ${n > 1 ? 's' : ''} à remplir`,
        password: 'Ce PDF demande un mot de passe à l’ouverture. Ouvrez-le avec le mot de passe dans votre lecteur PDF, enregistrez une copie sans mot de passe, puis ajoutez cette copie ici.',
        fillNotAllowed: 'L’auteur de ce PDF a désactivé le remplissage des formulaires dans ses paramètres de sécurité; l’outil ne le modifiera donc pas. Demandez une copie remplissable à l’expéditeur.',
        noFieldsTitle: 'Ce PDF n’a aucun champ remplissable',
        noFields: 'C’est un document plat : il n’y a rien où taper. Deux solutions :',
        noFieldsFillable: ['Rendre un PDF remplissable', 'ajoute des champs là où le formulaire a des blancs (traits, cases).'],
        noFieldsSign: ['Signer un PDF', 'permet de placer une signature, des initiales ou une date n’importe où sur la page.'],
        xfaTitle: 'C’est un formulaire XFA : remplissez-le dans Adobe Acrobat Reader',
        xfaDynamic: 'Ses champs n’existent que dans la couche XFA (Adobe LiveCycle), et le navigateur n’affiche qu’une page d’attente comme « Please wait… » ou « requires Adobe Reader 8 or higher ». Les outils de navigateur, celui-ci compris, ne peuvent pas remplir le XFA. Ouvrez le fichier dans Adobe Acrobat Reader, gratuit, sur un ordinateur. Les formulaires d’IRCC fonctionnent ainsi.',
        xfaNoFields: 'Il a été créé avec le format XFA d’Adobe et n’a aucun champ standard (AcroForm) que l’outil peut remplir. Si le formulaire a des champs dans Adobe Acrobat Reader, remplissez-le là.',
        xfaGuide: 'Comment ouvrir et remplir un formulaire XFA',
        hybrid: 'Ce formulaire contient aussi une couche XFA (Adobe LiveCycle). Ses champs standards sont remplis ici et la couche XFA est retirée de la copie, pour que tous les lecteurs affichent vos réponses; les scripts du formulaire, son bouton de validation et son code-barres ne fonctionneront pas. Si l’organisme demande Adobe Reader (IRCC, par exemple), utilisez plutôt Adobe Reader.',
        encrypted: 'Ce formulaire est verrouillé contre toute modification autre que le remplissage des champs. La copie remplie est enregistrée sans ce verrou.',
        filter: 'Trouver un champ',
        noMatch: 'Aucun champ ne correspond.',
        page: (n: number) => `Page ${n}`,
        alsoOn: (p: string) => `aussi en page ${p}`,
        readOnly: 'lecture seule',
        required: 'obligatoire',
        chars: (n: number, max: number) => `${n}/${max}`,
        comb: (max: number) => `${max} cases, un caractère par case`,
        yes: 'Coché',
        noChoice: '— aucun —',
        multiHint: 'Plusieurs choix possibles.',
        badChars: (c: string) => `La police du formulaire ne peut pas dessiner ces caractères; retirez-les ou remplacez-les : ${c}`,
        signature: 'Champ de signature : cet outil ne signe pas. Utilisez Signer un PDF après le remplissage.',
        signLink: 'Signer un PDF',
        changed: (n: number) => n === 0 ? 'Aucun champ modifié pour l’instant.' : `${n} champ${n > 1 ? 's' : ''} modifié${n > 1 ? 's' : ''}`,
        flatten: 'Aplatir après le remplissage',
        flattenHint: 'Les réponses font partie de la page et ne peuvent plus être modifiées. Laissez décoché si le destinataire peut avoir à corriger quelque chose.',
        flattenLocked: 'Non disponible : les paramètres de sécurité de ce formulaire n’autorisent que le remplissage des champs.',
        save: 'Enregistrer le PDF rempli',
        saving: 'Enregistrement…',
        failed: 'Un problème est survenu pendant l’enregistrement. Rien n’a été téléchargé. Réessayez ou essayez une autre copie du formulaire.',
        fixFirst: 'Corrigez d’abord les champs signalés.',
        done: (n: number, flat: boolean) => `${n} champ${n > 1 ? 's' : ''} rempli${n > 1 ? 's' : ''}${flat ? ', aplati' : ''}`,
        skipped: (s: string) => `Ces champs n’ont pas pu être écrits et gardent leur valeur précédente : ${s}`,
        editAgain: 'Modifier les réponses',
        thumbAlt: (n: number) => `Page ${n} du formulaire`,
        suffix: '-filled',
    },
};

const MAX_THUMB_PAGES = 60;
const looksLikePdf = (b: Uint8Array) => new TextDecoder('latin1').decode(b.subarray(0, 1024)).includes('%PDF-');
const same = (a: FieldValue, b: FieldValue) => JSON.stringify(a) === JSON.stringify(b);
const fillable = (f: FormFieldInfo) => f.kind !== 'button';

/** Long tooltips ("Section A: About the Applicant. Mailing Address. City") → main label + context. */
function splitLabel(label: string): { main: string; context: string } {
    if (label.length <= 60) return { main: label, context: '' };
    const parts = label.split(/(?<=[.:?])\s+(?=\S)/);
    if (parts.length < 2) return { main: label, context: '' };
    const main = parts.pop()!.replace(/[.:]\s*$/, '');
    return { main, context: parts.join(' ') };
}

type Result = { blob: Blob; name: string; written: number; skipped: string[]; flattened: boolean };

export default function FillPdfForm({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [info, setInfo] = useState<FormInspection | null>(null);
    const [values, setValues] = useState<Record<string, FieldValue>>({});
    const [reading, setReading] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState<Result | null>(null);
    const [flatten, setFlatten] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState<string | null>(null);
    const [thumbs, setThumbs] = useState<Record<number, string>>({});
    const [charset, setCharset] = useState<Set<number> | null>(null);
    const pdfRef = useRef<PdfJsLib.PDFDocumentProxy | null>(null);
    const runId = useRef(0);

    const closePdf = useCallback(() => {
        const p = pdfRef.current;
        pdfRef.current = null;
        if (p) void p.destroy();
    }, []);
    useEffect(() => closePdf, [closePdf]);
    useEffect(() => { void helveticaCharset().then(setCharset).catch(() => setCharset(null)); }, []);

    const reset = useCallback(() => {
        runId.current++;
        closePdf();
        setFile(null); setBytes(null); setInfo(null); setValues({}); setError(''); setResult(null);
        setFlatten(false); setQuery(''); setActive(null); setThumbs({}); setBusy(false);
    }, [closePdf]);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        reset();
        const id = runId.current;
        setReading(true);
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            if (!looksLikePdf(data)) { setError(/\.pdf$/i.test(f.name) ? ui(lang).damaged : t.notPdf); return; }
            const i = await inspectForm(data);
            if (id !== runId.current) return;
            const initial: Record<string, FieldValue> = {};
            for (const fl of i.fields) initial[fl.name] = fl.value;
            setInfo(i); setBytes(data); setFile(f); setValues(initial);
            // Page thumbnails (pdf.js), only for pages that carry fields, in order.
            if (i.xfa === 'only' || !i.fields.some(fillable)) return;
            const pages = [...new Set(i.fields.filter(fillable).flatMap((x) => x.pages))].sort((a, b) => a - b).slice(0, MAX_THUMB_PAGES);
            try {
                const pdf = await openPdf(data);
                if (id !== runId.current) { void pdf.destroy(); return; }
                pdfRef.current = pdf;
                for (const p of pages) {
                    if (id !== runId.current) return;
                    const url = await thumbnail(pdf, p, 240);
                    if (id !== runId.current) return;
                    setThumbs((prev) => ({ ...prev, [p]: url }));
                    await yieldToBrowser();
                }
            } catch { /* thumbnails are a nicety; the form still works without them */ }
        } catch (e) {
            if (id !== runId.current) return;
            if (e instanceof FormFillError) setError(e.kind === 'password' ? t.password : e.kind === 'fill-not-allowed' ? t.fillNotAllowed : ui(lang).damaged);
            else setError(ui(lang).damaged);
        } finally {
            if (id === runId.current) setReading(false);
        }
    }, [lang, t, reset]);

    const fields = useMemo(() => (info ? info.fields.filter(fillable) : []), [info]);
    const changed = useMemo(() => {
        const out: Record<string, FieldValue> = {};
        for (const f of fields) if (!f.readOnly && f.kind !== 'signature' && !same(values[f.name], f.value)) out[f.name] = values[f.name];
        return out;
    }, [fields, values]);
    const changedCount = Object.keys(changed).length;

    const badChars = useCallback((f: FormFieldInfo): string[] => {
        if (!charset) return [];
        const v = values[f.name];
        if (f.kind === 'text' || f.kind === 'multiline' || (f.kind === 'dropdown' && f.editable)) return typeof v === 'string' ? unsupportedChars(v, charset) : [];
        return [];
    }, [charset, values]);
    const invalid = useMemo(() => fields.filter((f) => f.name in changed && badChars(f).length > 0).map((f) => f.name), [fields, changed, badChars]);

    const q = query.trim().toLowerCase();
    const shown = useMemo(() => (q ? fields.filter((f) => f.label.toLowerCase().includes(q) || f.name.toLowerCase().includes(q)) : fields), [fields, q]);
    const byPage = useMemo(() => {
        const m = new Map<number, FormFieldInfo[]>();
        for (const f of shown) { const p = f.pages[0]; if (!m.has(p)) m.set(p, []); m.get(p)!.push(f); }
        return [...m.entries()].sort((a, b) => a[0] - b[0]);
    }, [shown]);

    const set = (name: string, v: FieldValue) => setValues((prev) => ({ ...prev, [name]: v }));

    const save = useCallback(async () => {
        if (!bytes || !file || !info) return;
        if (invalid.length) { setError(t.fixFirst); return; }
        setError(''); setBusy(true);
        await yieldToBrowser();
        try {
            const doFlatten = flatten && !info.noModify;
            const r = await fillForm(bytes, changed, { flatten: doFlatten });
            const labelOf = (n: string) => fields.find((f) => f.name === n)?.label ?? n;
            setResult({ blob: pdfBlob(r.bytes), name: `${baseName(file.name)}${t.suffix}.pdf`, written: r.written, skipped: r.skipped.map(labelOf), flattened: doFlatten });
        } catch {
            setError(t.failed);
        } finally {
            setBusy(false);
        }
    }, [bytes, file, info, invalid, flatten, changed, fields, t]);

    const inputCls = 'w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-canada-red/50 disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:bg-gray-800';

    const renderField = (f: FormFieldInfo) => {
        const id = `ff-${f.name}`;
        const v = values[f.name];
        const { main, context } = splitLabel(f.label);
        const disabled = f.readOnly || busy;
        const bad = badChars(f);
        const others = f.pages.slice(1);
        const head = (
            <span className="block">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{main}</span>
                {f.required && <span className="ml-1 text-canada-red" title={t.required} aria-label={t.required}>*</span>}
                {f.readOnly && <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400"><Lock className="h-3 w-3" aria-hidden="true" />{t.readOnly}</span>}
                {context && <span className="block text-xs text-gray-500 dark:text-gray-400">{context}</span>}
                {others.length > 0 && <span className="block text-xs text-gray-500 dark:text-gray-400">{t.alsoOn(others.join(', '))}</span>}
            </span>
        );
        const focus = { onFocus: () => setActive(f.name) };
        let control: ReactNode = null;
        if (f.kind === 'text' || f.kind === 'multiline') {
            const s = typeof v === 'string' ? v : '';
            control = (
                <>
                    {f.kind === 'multiline'
                        ? <textarea id={id} rows={3} value={s} maxLength={f.maxLength} disabled={disabled} onChange={(e) => set(f.name, e.target.value)} {...focus} className={inputCls} aria-invalid={bad.length > 0} />
                        : <input id={id} type="text" value={s} maxLength={f.maxLength} disabled={disabled} onChange={(e) => set(f.name, e.target.value)} {...focus} className={`${inputCls} ${f.comb ? 'font-mono tracking-[0.3em]' : ''}`} aria-invalid={bad.length > 0} />}
                    {f.maxLength !== undefined && <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{f.comb ? t.comb(f.maxLength) : t.chars([...s].length, f.maxLength)}</span>}
                </>
            );
        } else if (f.kind === 'checkbox') {
            return (
                <label key={f.name} htmlFor={id} className={`flex items-start gap-3 rounded-xl px-2 py-2 ${active === f.name ? 'bg-red-50/60 dark:bg-red-500/10' : ''}`}>
                    <input id={id} type="checkbox" checked={v === true} disabled={disabled} onChange={(e) => set(f.name, e.target.checked)} {...focus} className="mt-1 h-5 w-5 accent-canada-red shrink-0" />
                    {head}
                </label>
            );
        } else if (f.kind === 'radio') {
            control = (
                <div role="radiogroup" aria-labelledby={`${id}-l`} className="flex flex-wrap gap-x-5 gap-y-2">
                    {(f.options ?? []).map((o) => (
                        <label key={o} className="inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                            <input type="radio" name={id} value={o} checked={v === o} disabled={disabled} onChange={() => set(f.name, o)} {...focus} className="h-4 w-4 accent-canada-red" />
                            {o}
                        </label>
                    ))}
                    {!f.readOnly && typeof v === 'string' && v !== '' && (
                        <button type="button" onClick={() => set(f.name, '')} className="text-xs text-gray-500 underline hover:text-canada-red">{t.noChoice}</button>
                    )}
                </div>
            );
        } else if (f.kind === 'dropdown') {
            const s = typeof v === 'string' ? v : '';
            control = f.editable ? (
                <>
                    <input id={id} type="text" list={`${id}-dl`} value={s} disabled={disabled} onChange={(e) => set(f.name, e.target.value)} {...focus} className={inputCls} aria-invalid={bad.length > 0} />
                    <datalist id={`${id}-dl`}>{(f.options ?? []).map((o) => <option key={o} value={o} />)}</datalist>
                </>
            ) : (
                <select id={id} value={s} disabled={disabled} onChange={(e) => set(f.name, e.target.value)} {...focus} className={inputCls}>
                    <option value="">{t.noChoice}</option>
                    {s && !(f.options ?? []).includes(s) && <option value={s}>{s}</option>}
                    {(f.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            );
        } else if (f.kind === 'optionlist') {
            const arr = Array.isArray(v) ? v : [];
            control = f.multiSelect ? (
                <div className="space-y-1">
                    {(f.options ?? []).map((o) => (
                        <label key={o} className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                            <input type="checkbox" checked={arr.includes(o)} disabled={disabled} onChange={(e) => set(f.name, e.target.checked ? [...arr, o] : arr.filter((x) => x !== o))} {...focus} className="h-4 w-4 accent-canada-red" />
                            {o}
                        </label>
                    ))}
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{t.multiHint}</span>
                </div>
            ) : (
                <select id={id} value={arr[0] ?? ''} disabled={disabled} onChange={(e) => set(f.name, e.target.value ? [e.target.value] : [])} {...focus} className={inputCls}>
                    <option value="">{t.noChoice}</option>
                    {(f.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            );
        } else if (f.kind === 'signature') {
            control = <p className="text-sm text-gray-600 dark:text-gray-400">{t.signature} <a href={`/${lang}/sign-pdf`} className="font-bold text-canada-red underline">{t.signLink}</a></p>;
        }
        return (
            <div key={f.name} className={`rounded-xl px-2 py-2 ${active === f.name ? 'bg-red-50/60 dark:bg-red-500/10' : ''}`}>
                {f.kind === 'radio' || f.kind === 'signature' || (f.kind === 'optionlist' && f.multiSelect)
                    ? <span id={`${id}-l`} className="mb-1.5 block text-sm">{head}</span>
                    : <label htmlFor={id} className="mb-1.5 block text-sm">{head}</label>}
                {control}
                {bad.length > 0 && <p className="mt-1 text-xs text-red-700 dark:text-red-300">{t.badChars(bad.join(' '))}</p>}
            </div>
        );
    };

    const activeField = active ? fields.find((f) => f.name === active) : undefined;
    const fillableCount = fields.filter((f) => f.kind !== 'signature').length;

    return (
        <Panel>
            {!file && (
                <>
                    <Dropzone lang={lang} onFiles={onFiles} />
                    {reading && <p className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{t.reading}</p>}
                    <ErrorBox>{error}</ErrorBox>
                </>
            )}

            {file && info && (
                <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                        <FileText className="h-6 w-6 text-canada-red shrink-0" aria-hidden="true" />
                        <div className="min-w-0 flex-1 basis-40">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {formatBytes(file.size, lang)} · {t.pages(info.pageCount)}{info.xfa !== 'only' && fillableCount > 0 ? ` · ${t.fieldsFound(fillableCount)}` : ''}
                            </p>
                        </div>
                        <SecondaryButton onClick={reset} disabled={busy} className="w-full sm:w-auto">{t.change}</SecondaryButton>
                    </div>

                    {info.xfa === 'only' ? (
                        <div className="rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-900/20 p-4 md:p-5 text-sm text-gray-800 dark:text-gray-200">
                            <p className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100"><AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />{t.xfaTitle}</p>
                            <p className="mt-2">{info.needsRendering ? t.xfaDynamic : t.xfaNoFields}</p>
                            <p className="mt-3"><a href={`/${lang}/guides/edit-xfa-pdf`} className="font-bold text-canada-red underline">{t.xfaGuide}</a></p>
                        </div>
                    ) : fillableCount === 0 ? (
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-4 md:p-5 text-sm text-gray-800 dark:text-gray-200">
                            <p className="font-bold text-gray-900 dark:text-gray-100">{t.noFieldsTitle}</p>
                            <p className="mt-2">{t.noFields}</p>
                            <ul className="mt-2 space-y-1.5 list-disc pl-5">
                                <li><a href={`/${lang}/make-pdf-fillable`} className="font-bold text-canada-red underline">{t.noFieldsFillable[0]}</a> {t.noFieldsFillable[1]}</li>
                                <li><a href={`/${lang}/sign-pdf`} className="font-bold text-canada-red underline">{t.noFieldsSign[0]}</a> {t.noFieldsSign[1]}</li>
                            </ul>
                        </div>
                    ) : result ? (
                        <>
                            <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done(result.written, result.flattened)} onReset={reset} />
                            {result.skipped.length > 0 && <p className="text-sm text-amber-800 dark:text-amber-300">{t.skipped(result.skipped.join(', '))}</p>}
                            {!result.flattened && <SecondaryButton onClick={() => setResult(null)}><PenLine className="h-4 w-4" aria-hidden="true" />{t.editAgain}</SecondaryButton>}
                        </>
                    ) : (
                        <>
                            {info.xfa === 'hybrid' && (
                                <p className="flex items-start gap-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" /><span>{t.hybrid} <a href={`/${lang}/guides/edit-xfa-pdf`} className="font-bold underline">{t.xfaGuide}</a></span>
                                </p>
                            )}
                            {info.encrypted && (
                                <p className="flex items-start gap-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-sm text-blue-900 dark:text-blue-200">
                                    <Info className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" /><span>{t.encrypted}</span>
                                </p>
                            )}

                            {fields.length > 8 && (
                                <label className="relative block">
                                    <span className="sr-only">{t.filter}</span>
                                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                                    <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.filter} className={`${inputCls} pl-9`} />
                                </label>
                            )}
                            {shown.length === 0 && <p className="text-sm text-gray-500 dark:text-gray-400">{t.noMatch}</p>}

                            <div className="space-y-6">
                                {byPage.map(([page, list]) => (
                                    <section key={page} className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)]" aria-label={t.page(page)}>
                                        <div className="md:sticky md:top-24 self-start">
                                            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{t.page(page)}</p>
                                            {thumbs[page] && (
                                                <div className="relative hidden md:block w-[180px] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={thumbs[page]} alt={t.thumbAlt(page)} className="block w-full h-auto" />
                                                    {activeField?.boxes.filter((b) => b.page === page).map((b, i) => (
                                                        <span key={i} aria-hidden="true" className="absolute border-2 border-canada-red bg-canada-red/15 rounded-sm"
                                                            style={{ left: `${b.x * 100}%`, top: `${b.y * 100}%`, width: `${Math.max(b.w * 100, 2)}%`, height: `${Math.max(b.h * 100, 1.5)}%` }} />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-2 min-w-0">{list.map(renderField)}</div>
                                    </section>
                                ))}
                            </div>

                            <div className="sticky bottom-0 -mx-4 md:-mx-8 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 px-4 md:px-8 py-4 space-y-3">
                                <label className={`flex items-start gap-3 ${info.noModify ? 'opacity-60' : 'cursor-pointer'}`}>
                                    <input type="checkbox" checked={flatten && !info.noModify} disabled={info.noModify || busy} onChange={(e) => setFlatten(e.target.checked)} className="mt-1 h-5 w-5 accent-canada-red shrink-0" />
                                    <span className="text-sm">
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">{t.flatten}</span>
                                        <span className="block text-gray-600 dark:text-gray-400">{info.noModify ? t.flattenLocked : t.flattenHint}</span>
                                    </span>
                                </label>
                                <ErrorBox>{error}</ErrorBox>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                    <PrimaryButton onClick={save} disabled={busy || changedCount === 0 || invalid.length > 0} className="w-full sm:w-auto">
                                        {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <PenLine className="h-4 w-4" aria-hidden="true" />}
                                        {busy ? t.saving : t.save}
                                    </PrimaryButton>
                                    <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{invalid.length ? t.fixFirst : t.changed(changedCount)}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </Panel>
    );
}
