'use client';

/**
 * Add page numbers: stamps "1", "Page 1", "Page 1 of 10" or "1 / 10" on each page with pdf-lib (Helvetica).
 * The original pages are kept as they are (text, links, bookmarks, form fields); only a small text drawing
 * is appended. Numbers are placed relative to the page AS DISPLAYED: /Rotate and crop-box offsets are
 * compensated so the number is upright at the displayed top or bottom.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import type * as PdfJsLib from 'pdfjs-dist';
import type { PDFPage } from 'pdf-lib';
import { FileText, Hash } from 'lucide-react';
import {
    Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, ResultCard,
    pdfBlob, baseName, yieldToBrowser, openPdf, thumbnail, loadPdfLib, readErrorMessage, PdfReadError, ui,
} from './shared';

type Pos = 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br';
type Fmt = 'n' | 'page' | 'pageOf' | 'slash';
type Colour = 'black' | 'grey';
type Box = { x0: number; y0: number; x1: number; y1: number };

const MARGINS = { small: 18, normal: 36, large: 54 } as const;
type MarginKey = keyof typeof MARGINS;

const STR = {
    en: {
        notPdf: 'This file isn’t a PDF. Choose a file that ends in .pdf.',
        pages: (n: number) => `${n} ${n === 1 ? 'page' : 'pages'}`,
        change: 'Change file',
        position: 'Position',
        pos: { tl: 'Top left', tc: 'Top centre', tr: 'Top right', bl: 'Bottom left', bc: 'Bottom centre', br: 'Bottom right' } as Record<Pos, string>,
        format: 'Format',
        fmt: (f: Fmt, n: number | string, total: number | string) =>
            f === 'n' ? `${n}` : f === 'page' ? `Page ${n}` : f === 'pageOf' ? `Page ${n} of ${total}` : `${n} / ${total}`,
        start: 'Start at number',
        first: 'First page to number',
        firstHint: 'Set to 2 to skip a cover page. Pages before it get no number.',
        size: 'Font size',
        margin: 'Margin',
        marginOpt: { small: 'Small', normal: 'Normal', large: 'Large' } as Record<MarginKey, string>,
        marginHint: { small: '¼ in', normal: '½ in', large: '¾ in' } as Record<MarginKey, string>,
        colour: 'Colour',
        colourOpt: { black: 'Black', grey: 'Grey' } as Record<Colour, string>,
        summary: (p0: number, p1: number, n0: number, n1: number) =>
            p0 === p1 ? `Page ${p0} will get the number ${n0}.` : `Pages ${p0} to ${p1} will be numbered ${n0} to ${n1}.`,
        preview: (p: number) => `Preview of page ${p}, the first numbered page`,
        noPreview: 'No preview available for this file, but numbers can still be added.',
        run: 'Add page numbers',
        reading: 'Reading the file…',
        progress: (i: number, n: number) => `Page ${i} of ${n}`,
        saving: 'Saving the new PDF…',
        done: (n: number) => `${n} ${n === 1 ? 'page' : 'pages'} numbered`,
        suffix: '-numbered.pdf',
    },
    fr: {
        notPdf: 'Ce fichier n’est pas un PDF. Choisissez un fichier qui se termine par .pdf.',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        change: 'Changer de fichier',
        position: 'Position',
        pos: { tl: 'En haut à gauche', tc: 'En haut au centre', tr: 'En haut à droite', bl: 'En bas à gauche', bc: 'En bas au centre', br: 'En bas à droite' } as Record<Pos, string>,
        format: 'Format',
        fmt: (f: Fmt, n: number | string, total: number | string) =>
            f === 'n' ? `${n}` : f === 'page' ? `Page ${n}` : f === 'pageOf' ? `Page ${n} de ${total}` : `${n} / ${total}`,
        start: 'Commencer au numéro',
        first: 'Première page à numéroter',
        firstHint: 'Mettez 2 pour sauter la page couverture. Les pages précédentes ne sont pas numérotées.',
        size: 'Taille du texte',
        margin: 'Marge',
        marginOpt: { small: 'Petite', normal: 'Normale', large: 'Grande' } as Record<MarginKey, string>,
        marginHint: { small: '0,6 cm', normal: '1,3 cm', large: '1,9 cm' } as Record<MarginKey, string>,
        colour: 'Couleur',
        colourOpt: { black: 'Noir', grey: 'Gris' } as Record<Colour, string>,
        summary: (p0: number, p1: number, n0: number, n1: number) =>
            p0 === p1 ? `La page ${p0} recevra le numéro ${n0}.` : `Les pages ${p0} à ${p1} seront numérotées de ${n0} à ${n1}.`,
        preview: (p: number) => `Aperçu de la page ${p}, la première page numérotée`,
        noPreview: 'Aucun aperçu pour ce fichier, mais les numéros peuvent quand même être ajoutés.',
        run: 'Ajouter les numéros de page',
        reading: 'Lecture du fichier…',
        progress: (i: number, n: number) => `Page ${i} sur ${n}`,
        saving: 'Enregistrement du nouveau PDF…',
        done: (n: number) => `${n} page${n > 1 ? 's' : ''} numérotée${n > 1 ? 's' : ''}`,
        suffix: '-numerote.pdf',
    },
};

const FORMATS: Fmt[] = ['n', 'page', 'pageOf', 'slash'];
const POSITIONS: Pos[] = ['tl', 'tc', 'tr', 'bl', 'bc', 'br'];

/** Plain-language message for any failure: unexpected internal errors are reported as an unreadable file. */
function errorText(e: unknown, lang: 'en' | 'fr'): string {
    const name = (e as { name?: string })?.name;
    if (e instanceof PdfReadError || name === 'PasswordException' || name === 'InvalidPDFException') return readErrorMessage(e, lang);
    console.error(e);
    return ui(lang).damaged;
}

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
 * A point given in DISPLAYED coordinates (origin at the displayed bottom-left, after /Rotate) mapped back to
 * user space. /Rotate turns the page clockwise when shown, so text drawn rotated by the same angle
 * (counter-clockwise in user space) reads upright on screen.
 */
function displayedToUser(b: Box, rot: number, dx: number, dy: number): [number, number] {
    switch (rot) {
        case 90: return [b.x1 - dy, b.y0 + dx];
        case 180: return [b.x1 - dx, b.y1 - dy];
        case 270: return [b.x0 + dy, b.y1 - dx];
        default: return [b.x0 + dx, b.y0 + dy];
    }
}

function clampInt(v: string, min: number, max: number, fallback: number): number {
    const n = parseInt(v, 10);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
}

function Segmented<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: { v: T; text: string; hint?: string }[]; onChange: (v: T) => void }) {
    return (
        <fieldset>
            <legend className="font-bold text-gray-900 dark:text-gray-100 mb-2">{label}</legend>
            <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
                {options.map((o) => (
                    <button
                        key={o.v}
                        type="button"
                        role="radio"
                        aria-checked={value === o.v}
                        onClick={() => onChange(o.v)}
                        className={`min-h-[40px] rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${value === o.v ? 'border-canada-red bg-red-50 text-canada-red dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-canada-red/50'}`}
                    >
                        {o.text}{o.hint && <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">({o.hint})</span>}
                    </button>
                ))}
            </div>
        </fieldset>
    );
}

/** A small page outline with the six positions as tap targets. */
function PositionPicker({ value, onChange, labels, legend }: { value: Pos; onChange: (p: Pos) => void; labels: Record<Pos, string>; legend: string }) {
    const btn = (p: Pos) => (
        <button
            key={p}
            type="button"
            role="radio"
            aria-checked={value === p}
            aria-label={labels[p]}
            title={labels[p]}
            onClick={() => onChange(p)}
            className="h-10 w-10 grid place-items-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
        >
            <span className={`block h-2.5 rounded-full transition-all ${value === p ? 'w-6 bg-canada-red' : 'w-4 bg-gray-300 dark:bg-gray-600'}`} />
        </button>
    );
    return (
        <fieldset>
            <legend className="font-bold text-gray-900 dark:text-gray-100 mb-2">{legend}</legend>
            <div className="flex items-center gap-4">
                <div role="radiogroup" aria-label={legend} className="w-[136px] h-[172px] rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 flex flex-col justify-between p-1 shrink-0">
                    <div className="flex justify-between">{(['tl', 'tc', 'tr'] as Pos[]).map(btn)}</div>
                    <div className="px-3 space-y-1.5" aria-hidden="true">
                        {[80, 95, 70, 90, 60].map((w, i) => <div key={i} className="h-1 rounded bg-gray-200 dark:bg-gray-700" style={{ width: `${w}%` }} />)}
                    </div>
                    <div className="flex justify-between">{(['bl', 'bc', 'br'] as Pos[]).map(btn)}</div>
                </div>
                <p className="text-sm font-semibold text-canada-red">{labels[value]}</p>
            </div>
        </fieldset>
    );
}

export default function AddPageNumbers({ lang }: { lang: 'en' | 'fr' }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [pos, setPos] = useState<Pos>('bc');
    const [fmt, setFmt] = useState<Fmt>('n');
    const [startStr, setStartStr] = useState('1');
    const [firstStr, setFirstStr] = useState('1');
    const [sizeStr, setSizeStr] = useState('11');
    const [margin, setMargin] = useState<MarginKey>('normal');
    const [colour, setColour] = useState<Colour>('black');
    const [thumb, setThumb] = useState<{ page: number; url: string; w: number; h: number } | null>(null);
    const [previewFailed, setPreviewFailed] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{ blob: Blob; name: string; numbered: number } | null>(null);
    const bytesRef = useRef<Uint8Array | null>(null);
    const pdfRef = useRef<PdfJsLib.PDFDocumentProxy | null>(null);

    const start = clampInt(startStr, 0, 99999, 1);
    const first = clampInt(firstStr, 1, Math.max(1, pageCount), 1);
    const size = clampInt(sizeStr, 6, 72, 11);
    const lastNumber = start + (pageCount - first);

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

    useEffect(() => {
        const pdf = pdfRef.current;
        if (!file || !pdf || thumb?.page === first) return;
        let cancelled = false;
        (async () => {
            try {
                const page = await pdf.getPage(first);
                const vp = page.getViewport({ scale: 1 });
                const url = await thumbnail(pdf, first, 480);
                if (!cancelled) setThumb({ page: first, url, w: vp.width, h: vp.height });
            } catch {
                if (!cancelled) setPreviewFailed(true);
            }
        })();
        return () => { cancelled = true; };
    }, [file, first, thumb?.page]);

    // Any change of option makes an earlier result stale.
    useEffect(() => { setResult(null); }, [pos, fmt, start, first, size, margin, colour]);

    const run = useCallback(async () => {
        if (!bytesRef.current || !file) return;
        setError(null); setResult(null);
        setBusy(t.reading);
        try {
            const { StandardFonts, rgb, degrees } = await import('pdf-lib');
            const doc = await loadPdfLib(bytesRef.current);
            const font = await doc.embedFont(StandardFonts.Helvetica);
            const color = colour === 'grey' ? rgb(0.42, 0.42, 0.42) : rgb(0, 0, 0);
            const pages = doc.getPages();
            const n = pages.length;
            const total = start + (n - first);
            const m = MARGINS[margin];
            const ascent = font.heightAtSize(size, { descender: false });
            for (let i = first - 1; i < n; i++) {
                const page = pages[i];
                const text = t.fmt(fmt, start + (i - (first - 1)), total);
                const b = visibleBox(page);
                const rot = rotationOf(page);
                const w = b.x1 - b.x0, h = b.y1 - b.y0;
                const W = rot % 180 ? h : w, H = rot % 180 ? w : h; // displayed size
                const tw = font.widthOfTextAtSize(text, size);
                // Keep the margin sensible on tiny pages.
                const mx = Math.min(m, Math.max(0, (W - tw) / 2));
                const my = Math.min(m, Math.max(0, (H - ascent) / 2));
                const col = pos[1];
                const dx = col === 'l' ? mx : col === 'r' ? W - mx - tw : (W - tw) / 2;
                const dy = pos[0] === 'b' ? my : H - my - ascent;
                const [x, y] = displayedToUser(b, rot, dx, dy);
                page.drawText(text, { x, y, size, font, color, rotate: degrees(rot) });
                if ((i - first + 1) % 10 === 0 || i === n - 1) {
                    setBusy(t.progress(i + 1, n));
                    await yieldToBrowser();
                }
            }
            setBusy(t.saving);
            await yieldToBrowser();
            const bytes = await doc.save();
            setResult({ blob: pdfBlob(bytes), name: baseName(file.name) + t.suffix, numbered: n - first + 1 });
        } catch (e) {
            setError(errorText(e, lang));
        } finally {
            setBusy(null);
        }
    }, [colour, file, first, fmt, lang, margin, pos, size, start, t]);

    if (!file) {
        return (
            <Panel>
                <Dropzone lang={lang} onFiles={onFiles} />
                {busy && <p className="mt-4 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
                <ErrorBox>{error}</ErrorBox>
            </Panel>
        );
    }

    const inputCls = 'mt-1 w-full min-h-[44px] rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 text-gray-900 dark:text-gray-100 focus:border-canada-red focus:outline-none focus:ring-2 focus:ring-canada-red/30';
    const previewText = t.fmt(fmt, start, lastNumber);
    const m = MARGINS[margin];

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
                <div className="space-y-5 min-w-0">
                    <PositionPicker value={pos} onChange={setPos} labels={t.pos} legend={t.position} />
                    <Segmented label={t.format} value={fmt} onChange={setFmt} options={FORMATS.map((f) => ({ v: f, text: lang === 'fr' ? `« ${t.fmt(f, 1, 10)} »` : t.fmt(f, 1, 10) }))} />
                    <div className="grid grid-cols-2 gap-3">
                        <label className="block">
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{t.start}</span>
                            <input type="number" inputMode="numeric" min={0} value={startStr} onChange={(e) => setStartStr(e.target.value)} onBlur={() => setStartStr(String(start))} className={inputCls} />
                        </label>
                        <label className="block">
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{t.first}</span>
                            <input type="number" inputMode="numeric" min={1} max={pageCount} value={firstStr} onChange={(e) => setFirstStr(e.target.value)} onBlur={() => setFirstStr(String(first))} className={inputCls} />
                        </label>
                    </div>
                    <p className="-mt-3 text-sm text-gray-500 dark:text-gray-400">{t.firstHint}</p>
                    <label className="block max-w-[50%] pr-1.5">
                        <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{t.size}</span>
                        <input type="number" inputMode="numeric" min={6} max={72} value={sizeStr} onChange={(e) => setSizeStr(e.target.value)} onBlur={() => setSizeStr(String(size))} className={inputCls} />
                    </label>
                    <Segmented label={t.margin} value={margin} onChange={setMargin} options={(Object.keys(MARGINS) as MarginKey[]).map((k) => ({ v: k, text: t.marginOpt[k], hint: t.marginHint[k] }))} />
                    <Segmented label={t.colour} value={colour} onChange={setColour} options={(['black', 'grey'] as Colour[]).map((c) => ({ v: c, text: t.colourOpt[c] }))} />
                </div>

                <div className="min-w-0">
                    {thumb ? (
                        <figure>
                            <div className="relative mx-auto w-fit max-w-full border border-gray-300 dark:border-gray-700 shadow-sm bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={thumb.url} alt="" className="block max-w-full max-h-[460px] w-auto h-auto" />
                                {/* Overlay sized by the image: container units (cqw) scale the number with the preview. */}
                                <div className="absolute inset-0 pointer-events-none" style={{ containerType: 'size' }} aria-hidden="true">
                                <span
                                    data-testid="number-preview"
                                    className="absolute whitespace-nowrap leading-none ring-2 ring-canada-red/40 rounded-sm"
                                    style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontSize: `${(size / thumb.w) * 100}cqw`,
                                        color: colour === 'grey' ? '#6b6b6b' : '#000',
                                        ...(pos[0] === 't' ? { top: `${(m / thumb.h) * 100}%` } : { bottom: `${(m / thumb.h) * 100}%` }),
                                        ...(pos[1] === 'l' ? { left: `${(m / thumb.w) * 100}%` } : pos[1] === 'r' ? { right: `${(m / thumb.w) * 100}%` } : { left: '50%', transform: 'translateX(-50%)' }),
                                    }}
                                >
                                    {previewText}
                                </span>
                                </div>
                            </div>
                            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">{t.preview(thumb.page)}</figcaption>
                        </figure>
                    ) : previewFailed ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.noPreview}</p>
                    ) : (
                        <div className="mx-auto aspect-[3/4] max-w-xs rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" aria-hidden="true" />
                    )}
                </div>
            </div>

            <p className="mt-6 text-sm text-gray-700 dark:text-gray-300" data-testid="summary">{t.summary(first, pageCount, start, lastNumber)}</p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <PrimaryButton onClick={run} disabled={!!busy}>
                    <Hash className="h-5 w-5" aria-hidden="true" /> {t.run}
                </PrimaryButton>
                {busy && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
            </div>

            <ErrorBox>{error}</ErrorBox>
            {result && <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done(result.numbered)} />}
        </Panel>
    );
}
