'use client';

/**
 * Split PDF in half: cuts every page (as displayed) into two pages, for scanned books and two-up spreads.
 * Lossless: each page is copied twice with pdf-lib and each copy gets a MediaBox/CropBox covering one half.
 * Nothing is re-rendered, so text, vectors and image quality are untouched.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import type * as PdfJsLib from 'pdfjs-dist';
import type { PDFPage } from 'pdf-lib';
import { FileText, Scissors } from 'lucide-react';
import {
    Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, ResultCard,
    pdfBlob, baseName, yieldToBrowser, openPdf, thumbnail, loadPdfLib, readErrorMessage, PdfReadError, ui,
} from './shared';

/** Plain-language message for any failure: unexpected internal errors are reported as an unreadable file. */
function errorText(e: unknown, lang: 'en' | 'fr'): string {
    const name = (e as { name?: string })?.name;
    if (e instanceof PdfReadError || name === 'PasswordException' || name === 'InvalidPDFException') return readErrorMessage(e, lang);
    console.error(e);
    return ui(lang).damaged;
}

const STR = {
    en: {
        notPdf: 'This file isn’t a PDF. Choose a file that ends in .pdf.',
        pages: (n: number) => `${n} ${n === 1 ? 'page' : 'pages'}`,
        change: 'Change file',
        direction: 'Cut direction',
        vertical: 'Vertical cut',
        verticalHint: 'left | right',
        horizontal: 'Horizontal cut',
        horizontalHint: 'top / bottom',
        rtl: 'Right-to-left order',
        rtlHint: 'For Arabic, Hebrew or manga books: the right half comes first.',
        skipFirst: 'Don’t split the first page',
        skipLast: 'Don’t split the last page',
        skipHint: 'Book covers are often single pages.',
        position: 'Cut position',
        positionHint: 'Move the cut if the fold isn’t exactly in the middle.',
        resetMiddle: 'Back to the middle',
        preview: (p: number) => `Page ${p} preview. The red line shows where the cut will be; the numbers show the new page order.`,
        noPreview: 'No preview available for this file, but it can still be split.',
        nothing: 'With these options no page would be split. Untick “Don’t split the first page” or “Don’t split the last page”.',
        run: 'Split pages in half',
        reading: 'Reading the file…',
        progress: (i: number, n: number) => `Page ${i} of ${n}`,
        saving: 'Saving the new PDF…',
        done: (a: number, b: number) => `${a} → ${b} pages`,
        suffix: '-split-half.pdf',
    },
    fr: {
        notPdf: 'Ce fichier n’est pas un PDF. Choisissez un fichier qui se termine par .pdf.',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        change: 'Changer de fichier',
        direction: 'Sens de la coupe',
        vertical: 'Coupe verticale',
        verticalHint: 'gauche | droite',
        horizontal: 'Coupe horizontale',
        horizontalHint: 'haut / bas',
        rtl: 'Ordre de droite à gauche',
        rtlHint: 'Pour les livres en arabe, en hébreu ou les mangas : la moitié droite vient en premier.',
        skipFirst: 'Ne pas couper la première page',
        skipLast: 'Ne pas couper la dernière page',
        skipHint: 'La couverture d’un livre est souvent une page simple.',
        position: 'Position de la coupe',
        positionHint: 'Déplacez la coupe si le pli n’est pas exactement au milieu.',
        resetMiddle: 'Remettre au milieu',
        preview: (p: number) => `Aperçu de la page ${p}. La ligne rouge montre où la page sera coupée. Les chiffres indiquent l’ordre des nouvelles pages.`,
        noPreview: 'Aucun aperçu pour ce fichier, mais il peut quand même être coupé.',
        nothing: 'Avec ces options, aucune page ne serait coupée. Décochez « Ne pas couper la première page » ou « Ne pas couper la dernière page ».',
        run: 'Couper les pages en deux',
        reading: 'Lecture du fichier…',
        progress: (i: number, n: number) => `Page ${i} sur ${n}`,
        saving: 'Enregistrement du nouveau PDF…',
        done: (a: number, b: number) => `${a} → ${b} pages`,
        suffix: '-coupe.pdf',
    },
};

type Box = { x0: number; y0: number; x1: number; y1: number };
type Direction = 'vertical' | 'horizontal';

/** The visible area of a page in user space: CropBox clipped to MediaBox (normalised so x0 < x1, y0 < y1). */
function visibleBox(page: PDFPage): Box {
    const norm = (r: { x: number; y: number; width: number; height: number }): Box => ({
        x0: Math.min(r.x, r.x + r.width), y0: Math.min(r.y, r.y + r.height),
        x1: Math.max(r.x, r.x + r.width), y1: Math.max(r.y, r.y + r.height),
    });
    let m: Box;
    try { m = norm(page.getMediaBox()); } catch { m = { x0: 0, y0: 0, x1: 612, y1: 792 }; }
    let c: Box = m;
    try { c = norm(page.getCropBox()); } catch { /* no usable CropBox */ }
    const b = { x0: Math.max(m.x0, c.x0), y0: Math.max(m.y0, c.y0), x1: Math.min(m.x1, c.x1), y1: Math.min(m.y1, c.y1) };
    return b.x1 - b.x0 < 1 || b.y1 - b.y0 < 1 ? m : b;
}

/** /Rotate normalised to 0, 90, 180 or 270 (inherited values included). */
function rotationOf(page: PDFPage): number {
    const a = page.getRotation().angle || 0;
    return (((Math.round(a / 90) * 90) % 360) + 360) % 360;
}

/**
 * Map a rectangle given in DISPLAYED coordinates (origin at the displayed bottom-left, after /Rotate)
 * back to user space. /Rotate turns the page clockwise when shown.
 */
function displayedToUser(b: Box, rot: number, dx0: number, dy0: number, dx1: number, dy1: number): Box {
    const pt = (dx: number, dy: number): [number, number] => {
        switch (rot) {
            case 90: return [b.x1 - dy, b.y0 + dx];
            case 180: return [b.x1 - dx, b.y1 - dy];
            case 270: return [b.x0 + dy, b.y1 - dx];
            default: return [b.x0 + dx, b.y0 + dy];
        }
    };
    const [ax, ay] = pt(dx0, dy0);
    const [bx, by] = pt(dx1, dy1);
    return { x0: Math.min(ax, bx), y0: Math.min(ay, by), x1: Math.max(ax, bx), y1: Math.max(ay, by) };
}

/** The two halves of a page, in user space, in reading order (first, second). */
function halves(page: PDFPage, dir: Direction, cut: number, rtl: boolean): [Box, Box] {
    const b = visibleBox(page);
    const rot = rotationOf(page);
    const w = b.x1 - b.x0, h = b.y1 - b.y0;
    const W = rot % 180 ? h : w, H = rot % 180 ? w : h;
    if (dir === 'vertical') {
        const left = displayedToUser(b, rot, 0, 0, cut * W, H);
        const right = displayedToUser(b, rot, cut * W, 0, W, H);
        return rtl ? [right, left] : [left, right];
    }
    const top = displayedToUser(b, rot, 0, (1 - cut) * H, W, H);
    const bottom = displayedToUser(b, rot, 0, 0, W, (1 - cut) * H);
    return [top, bottom];
}

function OptionCard({ checked, onClick, title, hint, icon }: { checked: boolean; onClick: () => void; title: string; hint: string; icon: React.ReactNode }) {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={onClick}
            className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left min-h-[56px] transition-colors ${checked ? 'border-canada-red bg-red-50 dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-700 hover:border-canada-red/50'}`}
        >
            {icon}
            <span>
                <span className="block font-bold text-gray-900 dark:text-gray-100">{title}</span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">{hint}</span>
            </span>
        </button>
    );
}

function Check({ checked, onChange, label, hint }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
    return (
        <label className="flex items-start gap-3 cursor-pointer min-h-[40px] py-1">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-canada-red" />
            <span>
                <span className="block font-semibold text-gray-900 dark:text-gray-100">{label}</span>
                {hint && <span className="block text-sm text-gray-500 dark:text-gray-400">{hint}</span>}
            </span>
        </label>
    );
}

/** Small icon of a page with the cut drawn on it. */
function CutIcon({ dir }: { dir: Direction }) {
    return (
        <svg viewBox="0 0 40 30" className="h-8 w-10 shrink-0" aria-hidden="true">
            <rect x="1" y="1" width="38" height="28" rx="2" className="fill-white dark:fill-gray-800 stroke-gray-400" strokeWidth="1.5" />
            {dir === 'vertical'
                ? <line x1="20" y1="1" x2="20" y2="29" stroke="#E31837" strokeWidth="2" strokeDasharray="3 2" />
                : <line x1="1" y1="15" x2="39" y2="15" stroke="#E31837" strokeWidth="2" strokeDasharray="3 2" />}
        </svg>
    );
}

export default function SplitInHalf({ lang }: { lang: 'en' | 'fr' }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [dir, setDir] = useState<Direction>('vertical');
    const [rtl, setRtl] = useState(false);
    const [skipFirst, setSkipFirst] = useState(false);
    const [skipLast, setSkipLast] = useState(false);
    const [cut, setCut] = useState(50);
    const [thumb, setThumb] = useState<{ page: number; url: string } | null>(null);
    const [previewFailed, setPreviewFailed] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{ blob: Blob; name: string; pages: number } | null>(null);
    const bytesRef = useRef<Uint8Array | null>(null);
    const pdfRef = useRef<PdfJsLib.PDFDocumentProxy | null>(null);

    const reset = useCallback(() => {
        pdfRef.current?.destroy();
        pdfRef.current = null;
        bytesRef.current = null;
        setFile(null); setPageCount(0); setThumb(null); setPreviewFailed(false);
        setResult(null); setError(null); setBusy(null);
    }, []);

    useEffect(() => () => { pdfRef.current?.destroy(); }, []);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        reset();
        if (!/\.pdf$/i.test(f.name) && f.type !== 'application/pdf') { setError(t.notPdf); return; }
        setBusy(t.reading);
        try {
            const bytes = new Uint8Array(await f.arrayBuffer());
            const doc = await loadPdfLib(bytes);
            let count = 0;
            try { count = doc.getPageCount(); } catch { /* broken page tree */ }
            if (!count) throw new PdfReadError('damaged');
            bytesRef.current = bytes;
            try { pdfRef.current = await openPdf(bytes); } catch { setPreviewFailed(true); }
            setPageCount(count);
            setFile(f);
        } catch (e) {
            setError(errorText(e, lang));
        } finally {
            setBusy(null);
        }
    }, [lang, reset, t]);

    // Which page gets split first (that is the one worth previewing).
    const firstSplit = skipFirst ? 2 : 1;
    const lastSplit = skipLast ? pageCount - 1 : pageCount;
    const splitCount = Math.max(0, lastSplit - firstSplit + 1);
    const previewPage = splitCount > 0 ? firstSplit : 1;

    useEffect(() => {
        const pdf = pdfRef.current;
        if (!file || !pdf || thumb?.page === previewPage) return;
        let cancelled = false;
        thumbnail(pdf, previewPage, 560)
            .then((url) => { if (!cancelled) setThumb({ page: previewPage, url }); })
            .catch(() => { if (!cancelled) setPreviewFailed(true); });
        return () => { cancelled = true; };
    }, [file, previewPage, thumb?.page]);

    const run = useCallback(async () => {
        if (!bytesRef.current || !file) return;
        setError(null); setResult(null);
        setBusy(t.reading);
        try {
            const { PDFDocument, PDFName, PDFArray, PDFDict } = await import('pdf-lib');
            const src = await loadPdfLib(bytesRef.current);
            const n = src.getPageCount();
            const out = await PDFDocument.create();
            // Keep the document's own title/author etc.
            const title = src.getTitle(); if (title) out.setTitle(title);
            const author = src.getAuthor(); if (author) out.setAuthor(author);
            const subject = src.getSubject(); if (subject) out.setSubject(subject);
            const keywords = src.getKeywords(); if (keywords) out.setKeywords(keywords.split(/\s*[,;]\s*|\s+/).filter(Boolean));
            const creator = src.getCreator(); if (creator) out.setCreator(creator);

            const plan: { src: number; part: -1 | 0 | 1 }[] = [];
            for (let i = 0; i < n; i++) {
                const keep = (skipFirst && i === 0) || (skipLast && i === n - 1);
                if (keep) plan.push({ src: i, part: -1 });
                else plan.push({ src: i, part: 0 }, { src: i, part: 1 });
            }
            // One copyPages call: both copies of a page share the same content streams and images.
            const copied = await out.copyPages(src, plan.map((p) => p.src));
            const p = cut / 100;
            for (let k = 0; k < plan.length; k++) {
                const page = copied[k];
                const { part, src: si } = plan[k];
                if (part !== -1) {
                    const box = halves(page, dir, p, rtl)[part];
                    page.setMediaBox(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
                    page.setCropBox(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
                    for (const key of ['BleedBox', 'TrimBox', 'ArtBox']) page.node.delete(PDFName.of(key));
                    // Keep only the links/annotations that sit on this half (each copy gets its own array).
                    const annots = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
                    if (annots) {
                        const kept = out.context.obj([]);
                        for (let a = 0; a < annots.size(); a++) {
                            const ref = annots.get(a);
                            let keepIt = true;
                            try {
                                const dict = out.context.lookupMaybe(ref, PDFDict);
                                const rect = dict?.lookupMaybe(PDFName.of('Rect'), PDFArray)?.asRectangle();
                                if (rect) {
                                    const rx0 = Math.min(rect.x, rect.x + rect.width), rx1 = Math.max(rect.x, rect.x + rect.width);
                                    const ry0 = Math.min(rect.y, rect.y + rect.height), ry1 = Math.max(rect.y, rect.y + rect.height);
                                    keepIt = rx1 > box.x0 && rx0 < box.x1 && ry1 > box.y0 && ry0 < box.y1;
                                }
                            } catch { /* keep annotations we can't measure */ }
                            if (keepIt) kept.push(ref);
                        }
                        page.node.set(PDFName.of('Annots'), kept);
                    }
                }
                out.addPage(page);
                if (k % 10 === 0 || k === plan.length - 1) {
                    setBusy(t.progress(si + 1, n));
                    await yieldToBrowser();
                }
            }
            setBusy(t.saving);
            await yieldToBrowser();
            const bytes = await out.save();
            setResult({ blob: pdfBlob(bytes), name: baseName(file.name) + t.suffix, pages: plan.length });
        } catch (e) {
            setError(errorText(e, lang));
        } finally {
            setBusy(null);
        }
    }, [cut, dir, file, lang, rtl, skipFirst, skipLast, t]);

    // Any change of option makes an earlier result stale.
    useEffect(() => { setResult(null); }, [dir, rtl, skipFirst, skipLast, cut]);

    if (!file) {
        return (
            <Panel>
                <Dropzone lang={lang} onFiles={onFiles} />
                {busy && <p className="mt-4 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
                <ErrorBox>{error}</ErrorBox>
            </Panel>
        );
    }

    const firstLabel = dir === 'vertical' && rtl ? '2' : '1';
    const secondLabel = dir === 'vertical' && rtl ? '1' : '2';

    return (
        <Panel>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <FileText className="h-6 w-6 text-canada-red shrink-0" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.pages(pageCount)}</p>
                </div>
                <SecondaryButton onClick={reset} disabled={!!busy} className="min-h-[40px]">{t.change}</SecondaryButton>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-5">
                    <fieldset>
                        <legend className="font-bold text-gray-900 dark:text-gray-100 mb-2">{t.direction}</legend>
                        <div role="radiogroup" aria-label={t.direction} className="grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                            <OptionCard checked={dir === 'vertical'} onClick={() => setDir('vertical')} title={t.vertical} hint={t.verticalHint} icon={<CutIcon dir="vertical" />} />
                            <OptionCard checked={dir === 'horizontal'} onClick={() => setDir('horizontal')} title={t.horizontal} hint={t.horizontalHint} icon={<CutIcon dir="horizontal" />} />
                        </div>
                    </fieldset>

                    <div>
                        <label htmlFor="sih-cut" className="flex items-baseline justify-between gap-2 font-bold text-gray-900 dark:text-gray-100">
                            <span>{t.position}</span>
                            <span className="text-canada-red tabular-nums">{cut}{lang === 'fr' ? ' %' : '%'}</span>
                        </label>
                        <input
                            id="sih-cut"
                            type="range"
                            min={30}
                            max={70}
                            step={1}
                            value={cut}
                            onChange={(e) => setCut(Number(e.target.value))}
                            className="mt-2 w-full h-10 accent-canada-red cursor-pointer"
                        />
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t.positionHint}</p>
                            {cut !== 50 && (
                                <button type="button" onClick={() => setCut(50)} className="text-sm font-semibold text-canada-red underline min-h-[40px] shrink-0">{t.resetMiddle}</button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        {dir === 'vertical' && <Check checked={rtl} onChange={setRtl} label={t.rtl} hint={t.rtlHint} />}
                        <Check checked={skipFirst} onChange={setSkipFirst} label={t.skipFirst} />
                        <Check checked={skipLast} onChange={setSkipLast} label={t.skipLast} hint={t.skipHint} />
                    </div>
                </div>

                <div>
                    {thumb ? (
                        <figure>
                            <div className="relative mx-auto w-fit max-w-full border border-gray-300 dark:border-gray-700 shadow-sm bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={thumb.url} alt="" className="block max-w-full max-h-[420px] w-auto h-auto" />
                                {dir === 'vertical' ? (
                                    <>
                                        <div className="absolute inset-y-0 border-l-2 border-dashed border-canada-red" style={{ left: `${cut}%` }} aria-hidden="true" />
                                        <span className="absolute bottom-3 -translate-x-1/2 h-8 w-8 rounded-full bg-canada-red/90 text-white text-sm font-bold grid place-items-center" style={{ left: `${cut / 2}%` }} aria-hidden="true">{firstLabel}</span>
                                        <span className="absolute bottom-3 -translate-x-1/2 h-8 w-8 rounded-full bg-canada-red/90 text-white text-sm font-bold grid place-items-center" style={{ left: `${cut + (100 - cut) / 2}%` }} aria-hidden="true">{secondLabel}</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-x-0 border-t-2 border-dashed border-canada-red" style={{ top: `${cut}%` }} aria-hidden="true" />
                                        <span className="absolute right-3 -translate-y-1/2 h-8 w-8 rounded-full bg-canada-red/90 text-white text-sm font-bold grid place-items-center" style={{ top: `${cut / 2}%` }} aria-hidden="true">1</span>
                                        <span className="absolute right-3 -translate-y-1/2 h-8 w-8 rounded-full bg-canada-red/90 text-white text-sm font-bold grid place-items-center" style={{ top: `${cut + (100 - cut) / 2}%` }} aria-hidden="true">2</span>
                                    </>
                                )}
                            </div>
                            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">{t.preview(thumb.page)}</figcaption>
                        </figure>
                    ) : previewFailed ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.noPreview}</p>
                    ) : (
                        <div className="mx-auto aspect-[4/3] max-w-sm rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" aria-hidden="true" />
                    )}
                </div>
            </div>

            {splitCount === 0 && <ErrorBox>{t.nothing}</ErrorBox>}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <PrimaryButton onClick={run} disabled={!!busy || splitCount === 0}>
                    <Scissors className="h-5 w-5" aria-hidden="true" /> {t.run}
                </PrimaryButton>
                {busy && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
            </div>

            <ErrorBox>{error}</ErrorBox>
            {result && <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done(pageCount, result.pages)} />}
        </Panel>
    );
}
