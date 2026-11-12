'use client';

/**
 * Split PDF by size: cuts a PDF into consecutive parts that each stay under a size limit.
 * Lossless: pages are copied as-is with pdf-lib (nothing is recompressed). Every part's size is the size
 * of the bytes actually saved, so a part is only over the limit when a single page alone is.
 * Search: guess how many pages fit from the bytes-per-page seen so far, then gallop and binary-search
 * the cut point with real saves. 1 MB = 1,000,000 bytes (the stricter reading of "MB").
 * Everything runs in the browser.
 */
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { FileText, Scissors, Loader2, Download, AlertTriangle } from 'lucide-react';
import type { PDFDocument as PDFDocumentType, PDFPage as PDFPageType } from 'pdf-lib';
import {
    Panel, Dropzone, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, formatBytes, pdfBlob, baseName,
    yieldToBrowser, loadPdfLib, readErrorMessage, downloadBlob, PdfReadError,
} from './shared';

type Lang = 'en' | 'fr';

const MB = 1_000_000;
const PRESETS: { mb: number; tag?: { en: string; fr: string } }[] = [
    { mb: 1 }, { mb: 2 },
    { mb: 4, tag: { en: 'IRCC', fr: 'IRCC' } },
    { mb: 5 }, { mb: 10 },
    { mb: 20, tag: { en: 'Outlook', fr: 'Outlook' } },
    { mb: 25, tag: { en: 'Gmail', fr: 'Gmail' } },
];

const STR = {
    en: {
        change: 'Choose another file',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        reading: 'Reading the file…',
        maxLabel: 'Maximum size per part',
        custom: 'Custom',
        customLabel: 'Custom size in MB',
        mbUnit: 'MB',
        badCustom: 'Enter a size between 0.1 and 2000 MB.',
        emailTip: 'Email services count attachments after encoding, which adds about a third. If a part is refused, pick the next smaller size.',
        split: 'Split PDF',
        working: 'Splitting…',
        progress: (done: number, total: number, parts: number) => `${done} of ${total} pages placed · ${parts} part${parts === 1 ? '' : 's'} so far`,
        saving: 'Preparing the download…',
        alreadySmall: (size: string, limit: string) => `This PDF is ${size}, already under ${limit}. No need to split it.`,
        partsTitle: (n: number) => `${n} part${n === 1 ? '' : 's'}`,
        colName: 'File',
        colPages: 'Pages',
        colSize: 'Size',
        pageRange: (a: number, b: number) => (a === b ? `p. ${a}` : `pp. ${a}–${b}`),
        zipNote: (n: number) => `ZIP with ${n} PDFs`,
        oneNote: 'Fits in one part after saving',
        downloadPart: (name: string) => `Download ${name}`,
        over: (pages: string, limit: string) => `Page ${pages} is bigger than ${limit} on its own, so it got its own part, which is still over the limit. Compress it first, then split again:`,
        overMany: (pages: string, limit: string) => `Pages ${pages} are each bigger than ${limit} on their own, so each got its own part, which is still over the limit. Compress the PDF first, then split again:`,
        compress: 'Compress PDF',
        sumNote: 'Parts can add up to more than the original: fonts and images shared by many pages are included in every part that uses them.',
        formsNote: 'Bookmarks and form fields are not carried over. Links between pages work only inside the same part.',
        failed: 'Something went wrong while splitting this file. Nothing was saved.',
        notPdf: 'Please choose a PDF file.',
        part: 'part',
        zipSuffix: '-split',
    },
    fr: {
        change: 'Choisir un autre fichier',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        reading: 'Lecture du fichier…',
        maxLabel: 'Taille maximale par partie',
        custom: 'Autre',
        customLabel: 'Taille personnalisée en Mo',
        mbUnit: 'Mo',
        badCustom: 'Entrez une taille entre 0,1 et 2000 Mo.',
        emailTip: 'Les services de courriel comptent la taille des pièces jointes après encodage, ce qui ajoute environ un tiers. Si une partie est refusée, choisissez la taille inférieure.',
        split: 'Diviser le PDF',
        working: 'Division en cours…',
        progress: (done: number, total: number, parts: number) => `${done} pages sur ${total} placées · ${parts} partie${parts > 1 ? 's' : ''} jusqu’ici`,
        saving: 'Préparation du téléchargement…',
        alreadySmall: (size: string, limit: string) => `Ce PDF fait ${size}, soit déjà moins de ${limit}. Inutile de le diviser.`,
        partsTitle: (n: number) => `${n} partie${n > 1 ? 's' : ''}`,
        colName: 'Fichier',
        colPages: 'Pages',
        colSize: 'Taille',
        pageRange: (a: number, b: number) => (a === b ? `p. ${a}` : `p. ${a} à ${b}`),
        zipNote: (n: number) => `ZIP de ${n} PDF`,
        oneNote: 'Tient en une seule partie après l’enregistrement',
        downloadPart: (name: string) => `Télécharger ${name}`,
        over: (pages: string, limit: string) => `La page ${pages} dépasse à elle seule ${limit}; elle forme donc sa propre partie, qui reste au-dessus de la limite. Compressez-la d’abord, puis divisez de nouveau :`,
        overMany: (pages: string, limit: string) => `Les pages ${pages} dépassent chacune à elles seules ${limit}; chacune forme donc sa propre partie, qui reste au-dessus de la limite. Compressez d’abord le PDF, puis divisez de nouveau :`,
        compress: 'Compresser un PDF',
        sumNote: 'Le total des parties peut dépasser la taille de l’original : les polices et images communes à plusieurs pages sont incluses dans chaque partie qui les utilise.',
        formsNote: 'Les signets et les champs de formulaire ne sont pas conservés. Les liens entre pages ne fonctionnent qu’à l’intérieur d’une même partie.',
        failed: 'Une erreur s’est produite pendant la division. Aucun fichier n’a été créé.',
        notPdf: 'Veuillez choisir un fichier PDF.',
        part: 'partie',
        zipSuffix: '-divise',
    },
};

type Part = { name: string; from: number; to: number; bytes: Uint8Array; over: boolean };
type Result = { parts: Part[]; blob: Blob; name: string; limit: number };

function looksLikePdf(bytes: Uint8Array): boolean {
    return new TextDecoder('latin1').decode(bytes.subarray(0, 1024)).includes('%PDF-');
}

function limitLabel(mb: number, lang: Lang) {
    const n = String(mb);
    return `${lang === 'fr' ? n.replace('.', ',') : n} ${lang === 'fr' ? 'Mo' : 'MB'}`;
}

/**
 * Prepare the source so copying a page doesn't drag other pages along: annotation /P back-references
 * and article beads are dropped, and internal link targets are replaced by the target's page index,
 * resolved again (or removed) per part.
 */
async function prepareSource(src: PDFDocumentType) {
    const { PDFName, PDFDict, PDFArray, PDFRef, PDFNumber } = await import('pdf-lib');
    const pages = src.getPages();
    const index = new Map<string, number>();
    pages.forEach((p, i) => index.set(p.ref.toString(), i));
    const swap = (arr: unknown) => {
        if (!(arr instanceof PDFArray) || arr.size() === 0) return;
        const first = arr.get(0);
        if (first instanceof PDFRef) {
            const i = index.get(first.toString());
            arr.set(0, PDFNumber.of(i ?? -1));
        }
    };
    for (const page of pages) {
        page.node.delete(PDFName.of('B'));
        const annots = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
        if (!annots) continue;
        for (let i = 0; i < annots.size(); i++) {
            const a = annots.lookup(i);
            if (!(a instanceof PDFDict)) continue;
            a.delete(PDFName.of('P'));
            if (a.get(PDFName.of('Subtype'))?.toString() !== '/Link') continue;
            swap(a.lookup(PDFName.of('Dest')));
            const act = a.lookupMaybe(PDFName.of('A'), PDFDict);
            if (act && act.get(PDFName.of('S'))?.toString() === '/GoTo') swap(act.lookup(PDFName.of('D')));
        }
    }
}

/** Re-point internal links copied into a part; links to pages outside the part are removed. */
async function fixLinks(pages: PDFPageType[], start: number) {
    const { PDFName, PDFDict, PDFArray, PDFNumber } = await import('pdf-lib');
    const resolve = (arr: unknown): boolean => {
        if (!(arr instanceof PDFArray) || arr.size() === 0) return true;
        const first = arr.get(0);
        if (!(first instanceof PDFNumber)) return true;
        const local = first.asNumber() - start;
        if (local < 0 || local >= pages.length) return false;
        arr.set(0, pages[local].ref);
        return true;
    };
    for (const page of pages) {
        const annots = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
        if (!annots) continue;
        for (let i = annots.size() - 1; i >= 0; i--) {
            const a = annots.lookup(i);
            if (!(a instanceof PDFDict) || a.get(PDFName.of('Subtype'))?.toString() !== '/Link') continue;
            let ok = resolve(a.lookup(PDFName.of('Dest')));
            const act = a.lookupMaybe(PDFName.of('A'), PDFDict);
            if (ok && act && act.get(PDFName.of('S'))?.toString() === '/GoTo') ok = resolve(act.lookup(PDFName.of('D')));
            if (!ok) annots.remove(i);
        }
    }
}

async function buildPart(src: PDFDocumentType, start: number, count: number): Promise<Uint8Array> {
    const { PDFDocument } = await import('pdf-lib');
    const doc = await PDFDocument.create({ updateMetadata: false });
    const idx = Array.from({ length: count }, (_, i) => start + i);
    const copied = await doc.copyPages(src, idx);
    copied.forEach((p) => doc.addPage(p));
    await fixLinks(copied, start);
    const title = src.getTitle(); if (title) doc.setTitle(title);
    const author = src.getAuthor(); if (author) doc.setAuthor(author);
    const subject = src.getSubject(); if (subject) doc.setSubject(subject);
    const creator = src.getCreator(); if (creator) doc.setCreator(creator);
    const producer = src.getProducer(); if (producer) doc.setProducer(producer);
    return doc.save({ useObjectStreams: true, addDefaultPage: false, updateFieldAppearances: false });
}

/** Greedy split: each part is the longest run of pages whose saved size is ≤ limit (or one page). */
async function splitBySize(src: PDFDocumentType, limit: number, fileSize: number, onProgress: (done: number, parts: number) => Promise<void>) {
    const n = src.getPageCount();
    const parts: { from: number; count: number; bytes: Uint8Array; over: boolean }[] = [];
    let perPage = fileSize / n; // refined from each finished part
    let start = 0;
    while (start < n) {
        const remaining = n - start;
        const cache = new Map<number, Uint8Array>();
        const size = async (count: number) => {
            let b = cache.get(count);
            if (!b) { b = await buildPart(src, start, count); cache.set(count, b); await yieldToBrowser(); }
            return b.length;
        };
        let lo = 0; // largest count known to fit
        let hi = remaining + 1; // smallest count known not to fit
        let guess = Math.max(1, Math.min(remaining, Math.floor((limit * 0.97) / Math.max(1, perPage))));
        // Gallop from the guess to bracket the cut point.
        if (await size(guess) <= limit) {
            lo = guess;
            while (lo < remaining) {
                const next = Math.min(remaining, Math.max(lo + 1, Math.ceil(lo * 1.25)));
                if (await size(next) <= limit) lo = next; else { hi = next; break; }
            }
        } else {
            hi = guess;
            while (hi > 1) {
                const next = Math.max(1, Math.floor(hi / 2));
                if (await size(next) <= limit) { lo = next; break; } else hi = next;
            }
        }
        // Binary search inside the bracket.
        while (hi - lo > 1) {
            const mid = Math.floor((lo + hi) / 2);
            if (await size(mid) <= limit) lo = mid; else hi = mid;
        }
        let count = lo;
        let over = false;
        if (count === 0) { count = 1; over = true; await size(1); }
        const bytes = cache.get(count)!;
        parts.push({ from: start, count, bytes, over });
        if (!over) perPage = bytes.length / count;
        start += count;
        cache.clear();
        await onProgress(start, parts.length);
    }
    return parts;
}

export default function SplitBySize({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [preset, setPreset] = useState<number | 'custom'>(4);
    const [custom, setCustom] = useState('3');
    const [reading, setReading] = useState(false);
    const [busy, setBusy] = useState(false);
    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [result, setResult] = useState<Result | null>(null);

    const reset = useCallback(() => {
        setFile(null); setBytes(null); setPageCount(0); setError(''); setInfo(''); setResult(null); setProgress(''); setBusy(false);
    }, []);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setError(''); setInfo(''); setResult(null); setFile(null); setBytes(null);
        setReading(true);
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            if (!looksLikePdf(data)) { setError(/\.pdf$/i.test(f.name) ? readErrorMessage(new PdfReadError('damaged'), lang) : t.notPdf); return; }
            const doc = await loadPdfLib(data);
            const n = doc.getPageCount();
            if (n === 0) throw new PdfReadError('damaged');
            setPageCount(n); setBytes(data); setFile(f);
        } catch (e) {
            const name = (e as { name?: string })?.name;
            setError(readErrorMessage(e instanceof PdfReadError || name === 'PasswordException' ? e : new PdfReadError('damaged'), lang));
        } finally {
            setReading(false);
        }
    }, [lang, t]);

    const customMb = parseFloat(custom.replace(',', '.'));
    const customOk = Number.isFinite(customMb) && customMb >= 0.1 && customMb <= 2000;
    const limitMb = preset === 'custom' ? customMb : preset;

    const run = useCallback(async () => {
        if (!bytes || !file) return;
        if (preset === 'custom' && !customOk) { setError(t.badCustom); return; }
        const limit = Math.floor(limitMb * MB);
        setError(''); setInfo(''); setResult(null);
        if (file.size <= limit) { setInfo(t.alreadySmall(formatBytes(file.size, lang, 1000), limitLabel(limitMb, lang))); return; }
        setBusy(true); setProgress(t.progress(0, pageCount, 0));
        await yieldToBrowser();
        try {
            const src = await loadPdfLib(bytes);
            await prepareSource(src);
            const raw = await splitBySize(src, limit, bytes.length, async (done, parts) => { setProgress(t.progress(done, pageCount, parts)); await yieldToBrowser(); });
            const base = baseName(file.name);
            const width = String(raw.length).length;
            const parts: Part[] = raw.map((p, i) => ({
                name: `${base}-${t.part}${String(i + 1).padStart(width, '0')}.pdf`,
                from: p.from + 1, to: p.from + p.count, bytes: p.bytes, over: p.over,
            }));
            let blob: Blob; let name: string;
            if (parts.length === 1) {
                blob = pdfBlob(parts[0].bytes); name = parts[0].name;
            } else {
                setProgress(t.saving); await yieldToBrowser();
                const JSZip = (await import('jszip')).default;
                const zip = new JSZip();
                for (const p of parts) zip.file(p.name, p.bytes);
                blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
                name = `${base}${t.zipSuffix}.zip`;
            }
            setResult({ parts, blob, name, limit: limitMb });
        } catch (e) {
            const n = (e as { name?: string })?.name;
            setError(e instanceof PdfReadError || n === 'PasswordException' ? readErrorMessage(e, lang) : t.failed);
        } finally {
            setBusy(false); setProgress('');
        }
    }, [bytes, file, preset, customOk, limitMb, pageCount, lang, t]);

    const chip = (active: boolean) => `min-h-[44px] rounded-full border px-4 text-sm font-semibold transition-colors ${active ? 'border-canada-red bg-canada-red text-white' : 'border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-canada-red hover:text-canada-red'}`;
    const overPages = result?.parts.filter((p) => p.over).map((p) => p.from) ?? [];

    return (
        <Panel>
            {!file && (
                <>
                    <Dropzone lang={lang} onFiles={onFiles} />
                    {reading && <p className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{t.reading}</p>}
                    <ErrorBox>{error}</ErrorBox>
                </>
            )}

            {file && !result && (
                <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                        <FileText className="h-6 w-6 text-canada-red shrink-0" aria-hidden="true" />
                        <div className="min-w-0 flex-1 basis-40">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{formatBytes(file.size, lang, 1000)} · {t.pages(pageCount)}</p>
                        </div>
                        <SecondaryButton onClick={reset} disabled={busy} className="w-full sm:w-auto">{t.change}</SecondaryButton>
                    </div>

                    <fieldset>
                        <legend className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{t.maxLabel}</legend>
                        <div className="flex flex-wrap gap-2" role="radiogroup">
                            {PRESETS.map((p) => (
                                <button key={p.mb} type="button" role="radio" aria-checked={preset === p.mb} disabled={busy} onClick={() => setPreset(p.mb)} className={chip(preset === p.mb)}>
                                    {limitLabel(p.mb, lang)}{p.tag ? <span className="font-normal opacity-80"> · {p.tag[lang]}</span> : null}
                                </button>
                            ))}
                            <button type="button" role="radio" aria-checked={preset === 'custom'} disabled={busy} onClick={() => setPreset('custom')} className={chip(preset === 'custom')}>{t.custom}</button>
                        </div>
                        {preset === 'custom' && (
                            <div className="mt-3 flex items-center gap-2">
                                <label htmlFor="split-size-custom" className="sr-only">{t.customLabel}</label>
                                <input id="split-size-custom" type="text" inputMode="decimal" value={custom} onChange={(e) => setCustom(e.target.value)} disabled={busy} aria-invalid={!customOk}
                                    className="w-28 min-h-[44px] rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 text-base text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-canada-red/40" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{t.mbUnit}</span>
                                {!customOk && <span className="text-sm text-red-700 dark:text-red-300">{t.badCustom}</span>}
                            </div>
                        )}
                        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{t.emailTip}</p>
                    </fieldset>

                    <ErrorBox>{error}</ErrorBox>
                    {info && <p className="rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-900 dark:text-blue-200 text-sm px-4 py-3" role="status">{info}</p>}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <PrimaryButton onClick={run} disabled={busy || (preset === 'custom' && !customOk)} className="w-full sm:w-auto">
                            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Scissors className="h-4 w-4" aria-hidden="true" />}
                            {busy ? t.working : t.split}
                        </PrimaryButton>
                        {busy && progress && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{progress}</p>}
                    </div>
                </div>
            )}

            {result && (
                <>
                    <ResultCard lang={lang} blob={result.blob} name={result.name} note={result.parts.length > 1 ? t.zipNote(result.parts.length) : t.oneNote} onReset={reset} base={1000} />

                    {overPages.length > 0 && (
                        <p role="alert" className="mt-4 flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-500/10 rounded-xl px-4 py-3">
                            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                            <span>
                                {(overPages.length === 1 ? t.over : t.overMany)(overPages.join(', '), limitLabel(result.limit, lang))}{' '}
                                <Link href={`/${lang}/compress-pdf`} className="font-semibold text-canada-red underline">{t.compress}</Link>
                            </span>
                        </p>
                    )}

                    <div className="mt-5">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{t.partsTitle(result.parts.length)}</h3>
                        <ul className="divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800">
                            {result.parts.map((p) => (
                                <li key={p.name} className="flex items-center gap-3 px-4 py-2">
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">{p.name}</p>
                                        <p className={`text-xs ${p.over ? 'text-amber-700 dark:text-amber-300 font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
                                            {t.pageRange(p.from, p.to)} · {formatBytes(p.bytes.length, lang, 1000)}{p.over ? ' ⚠' : ''}
                                        </p>
                                    </div>
                                    {result.parts.length > 1 && (
                                        <button type="button" onClick={() => downloadBlob(pdfBlob(p.bytes), p.name)} aria-label={t.downloadPart(p.name)} title={t.downloadPart(p.name)}
                                            className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-canada-red hover:text-canada-red">
                                            <Download className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{t.sumNote} {t.formsNote}</p>
                    </div>
                </>
            )}
        </Panel>
    );
}
