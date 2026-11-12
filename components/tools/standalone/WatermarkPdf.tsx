'use client';

/**
 * Watermark PDF: draws a text watermark (Helvetica-Bold, a standard PDF font, WinAnsi characters only)
 * on top of the page content with pdf-lib. The layout is computed in the page's DISPLAYED space (crop box
 * after /Rotate) and mapped back to PDF user space, so "centered" and "45°" mean what the user sees.
 * The live preview draws the very same layout over a pdf.js thumbnail. Everything runs in the browser.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { FileText, Stamp, Loader2 } from 'lucide-react';
import type * as PdfJsLib from 'pdfjs-dist';
import type { PDFFont } from 'pdf-lib';
import {
    Panel, Dropzone, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, formatBytes, pdfBlob, baseName,
    yieldToBrowser, loadPdfLib, readErrorMessage, openPdf, thumbnail, PdfReadError,
} from './shared';

type Lang = 'en' | 'fr';
type Angle = 'diagonal' | 'horizontal';
type Colour = 'grey' | 'red' | 'blue';
type LayoutMode = 'center' | 'tile';

const COLOURS: Record<Colour, { rgb: [number, number, number]; css: string }> = {
    grey: { rgb: [0.45, 0.45, 0.45], css: 'rgb(115,115,115)' },
    red: { rgb: [0.85, 0.1, 0.16], css: 'rgb(217,26,41)' },
    blue: { rgb: [0.1, 0.3, 0.75], css: 'rgb(26,77,191)' },
};

const STR = {
    en: {
        presets: ['DRAFT', 'CONFIDENTIAL', 'COPY', 'SAMPLE'],
        change: 'Choose another file',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        reading: 'Reading the file…',
        textLabel: 'Watermark text',
        customPlaceholder: 'Or type your own text',
        sizeLabel: 'Text size',
        fit: 'Fit to page',
        fixed: 'Fixed size',
        pt: 'pt',
        opacity: (n: number) => `Opacity: ${n}%`,
        angleLabel: 'Angle',
        diagonal: 'Diagonal (45°)',
        horizontal: 'Horizontal',
        colourLabel: 'Colour',
        colours: { grey: 'Grey', red: 'Red', blue: 'Blue' } as Record<Colour, string>,
        layoutLabel: 'Layout',
        center: 'Once, centred',
        tile: 'Tiled pattern',
        pagesLabel: 'Pages',
        allPages: 'All pages',
        rangePages: 'Only these pages',
        rangePlaceholder: 'e.g. 1-3, 5',
        badRange: (n: number) => `Enter pages between 1 and ${n}, for example 1-3, 5.`,
        preview: (p: number) => `Preview of page ${p}`,
        unsupported: (chars: string) => `These characters can’t be drawn with the built-in PDF font and will be left out: ${chars}`,
        noText: 'Enter the watermark text (letters, numbers and common accented characters).',
        apply: 'Add watermark',
        working: 'Adding watermark…',
        page: (i: number, n: number) => `Page ${i} of ${n}`,
        saving: 'Saving…',
        done: (n: number) => `Watermark added to ${n} page${n === 1 ? '' : 's'}`,
        honest: 'Good to know: a text watermark is a separate layer that someone with a PDF editor can remove. To bake it into the page, run the result through',
        flattenLink: 'Flatten PDF',
        honestEnd: '(“Flatten to images”).',
        failed: 'Something went wrong while adding the watermark. Nothing was saved.',
        notPdf: 'Please choose a PDF file.',
        suffix: '-watermarked',
    },
    fr: {
        presets: ['BROUILLON', 'CONFIDENTIEL', 'COPIE', 'SPÉCIMEN'],
        change: 'Choisir un autre fichier',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        reading: 'Lecture du fichier…',
        textLabel: 'Texte du filigrane',
        customPlaceholder: 'Ou tapez votre propre texte',
        sizeLabel: 'Taille du texte',
        fit: 'Ajuster à la page',
        fixed: 'Taille fixe',
        pt: 'pt',
        opacity: (n: number) => `Opacité : ${n} %`,
        angleLabel: 'Angle',
        diagonal: 'Diagonale (45°)',
        horizontal: 'Horizontal',
        colourLabel: 'Couleur',
        colours: { grey: 'Gris', red: 'Rouge', blue: 'Bleu' } as Record<Colour, string>,
        layoutLabel: 'Disposition',
        center: 'Une fois, centré',
        tile: 'Motif répété',
        pagesLabel: 'Pages',
        allPages: 'Toutes les pages',
        rangePages: 'Seulement ces pages',
        rangePlaceholder: 'p. ex. 1-3, 5',
        badRange: (n: number) => `Entrez des pages entre 1 et ${n}, par exemple 1-3, 5.`,
        preview: (p: number) => `Aperçu de la page ${p}`,
        unsupported: (chars: string) => `Ces caractères ne peuvent pas être dessinés avec la police PDF intégrée et seront omis : ${chars}`,
        noText: 'Entrez le texte du filigrane (lettres, chiffres et caractères accentués courants).',
        apply: 'Ajouter le filigrane',
        working: 'Ajout du filigrane…',
        page: (i: number, n: number) => `Page ${i} sur ${n}`,
        saving: 'Enregistrement…',
        done: (n: number) => `Filigrane ajouté à ${n} page${n > 1 ? 's' : ''}`,
        honest: 'À savoir : un filigrane texte est une couche distincte qu’une personne munie d’un éditeur PDF peut retirer. Pour l’intégrer à la page, passez le résultat dans l’outil',
        flattenLink: 'Aplatir un PDF',
        honestEnd: '(« Aplatir en images »).',
        failed: 'Une erreur s’est produite pendant l’ajout du filigrane. Aucun fichier n’a été créé.',
        notPdf: 'Veuillez choisir un fichier PDF.',
        suffix: '-filigrane',
    },
};

type Opts = { size: 'fit' | number; angle: Angle; layout: LayoutMode };
type Placed = { size: number; theta: number; width: number; items: { x: number; y: number }[] };

/**
 * Layout in displayed space (origin bottom-left, y up). Returns the font size, the angle and the
 * baseline-start point of every copy of the text. widthAt1 = text width at size 1; cap = cap height ratio.
 */
function layout(widthAt1: number, cap: number, W: number, H: number, o: Opts): Placed {
    const theta = o.angle === 'diagonal' ? Math.PI / 4 : 0;
    const cos = Math.cos(theta), sin = Math.sin(theta);
    let size: number;
    if (o.size !== 'fit') size = o.size;
    else if (o.layout === 'center') {
        // Largest size whose rotated text box fits inside 90% of the page.
        size = Math.min((0.9 * W) / (widthAt1 * cos + cap * sin), (0.9 * H) / (widthAt1 * sin + cap * cos));
    } else {
        size = Math.max(10, Math.min(60, (0.35 * Math.min(W, H)) / widthAt1));
    }
    size = Math.max(1, size);
    const w = widthAt1 * size, h = cap * size;
    const toPage = (u: number, v: number) => ({ x: W / 2 + u * cos - v * sin, y: H / 2 + u * sin + v * cos });
    const items: { x: number; y: number }[] = [];
    if (o.layout === 'center') {
        items.push(toPage(-w / 2, -h / 2));
    } else {
        const stepX = w + Math.max(2 * h, 0.5 * w);
        const stepY = h * 3.2;
        const D = Math.hypot(W, H) / 2 + w;
        const rows = Math.ceil(D / stepY), cols = Math.ceil(D / stepX) + 1;
        for (let j = -rows; j <= rows; j++) {
            const shift = (j & 1) ? stepX / 2 : 0;
            for (let i = -cols; i <= cols; i++) {
                const cu = i * stepX + shift, cv = j * stepY;
                const c = toPage(cu, cv);
                // Keep copies whose centre is within reach of the page (others would be invisible).
                if (c.x < -w / 2 || c.x > W + w / 2 || c.y < -w / 2 || c.y > H + w / 2) continue;
                items.push(toPage(cu - w / 2, cv - h / 2));
            }
        }
        if (items.length > 400) items.length = 400;
    }
    return { size, theta, width: w, items };
}

/** "1-3, 5, 8-" → zero-based indices; null when invalid. */
function parseRange(s: string, n: number): number[] | null {
    const out = new Set<number>();
    const parts = s.split(/[,;]+/).map((p) => p.trim()).filter(Boolean);
    if (!parts.length) return null;
    for (const p of parts) {
        const m = p.match(/^(\d+)?\s*[-–]\s*(\d+)?$|^(\d+)$/);
        if (!m) return null;
        let a: number, b: number;
        if (m[3]) { a = b = parseInt(m[3], 10); } else {
            if (!m[1] && !m[2]) return null;
            a = m[1] ? parseInt(m[1], 10) : 1; b = m[2] ? parseInt(m[2], 10) : n;
        }
        if (a < 1 || b > n || a > b) return null;
        for (let i = a; i <= b; i++) out.add(i - 1);
    }
    return Array.from(out).sort((x, y) => x - y);
}

function looksLikePdf(bytes: Uint8Array): boolean {
    return new TextDecoder('latin1').decode(bytes.subarray(0, 1024)).includes('%PDF-');
}

/** Split text into what Helvetica-Bold (WinAnsi) can draw and the characters it can't. */
function sanitize(font: PDFFont | null, raw: string): { text: string; bad: string[] } {
    const clean = raw.replace(/\s+/g, ' ').trim();
    if (!font) return { text: clean, bad: [] };
    let text = '';
    const bad: string[] = [];
    for (const ch of Array.from(clean)) {
        try { font.widthOfTextAtSize(ch, 10); font.encodeText(ch); text += ch; } catch { if (!bad.includes(ch)) bad.push(ch); }
    }
    return { text: text.replace(/\s+/g, ' ').trim(), bad };
}

export default function WatermarkPdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [font, setFont] = useState<PDFFont | null>(null);
    const [preset, setPreset] = useState<number | null>(0);
    const [custom, setCustom] = useState('');
    const [sizeMode, setSizeMode] = useState<'fit' | 'fixed'>('fit');
    const [fixedSize, setFixedSize] = useState(72);
    const [opacity, setOpacity] = useState(25);
    const [angle, setAngle] = useState<Angle>('diagonal');
    const [colour, setColour] = useState<Colour>('grey');
    const [layoutMode, setLayoutMode] = useState<LayoutMode>('center');
    const [pagesMode, setPagesMode] = useState<'all' | 'range'>('all');
    const [range, setRange] = useState('');
    const [thumb, setThumb] = useState<{ url: string; W: number; H: number; page: number } | null>(null);
    const [reading, setReading] = useState(false);
    const [busy, setBusy] = useState(false);
    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState<{ blob: Blob; name: string; pages: number } | null>(null);
    const pdfRef = useRef<PdfJsLib.PDFDocumentProxy | null>(null);

    useEffect(() => () => { pdfRef.current?.destroy(); pdfRef.current = null; }, []);

    const reset = useCallback(() => {
        pdfRef.current?.destroy(); pdfRef.current = null;
        setFile(null); setBytes(null); setPageCount(0); setThumb(null); setError(''); setResult(null); setProgress(''); setBusy(false);
    }, []);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setError(''); setResult(null); setFile(null); setBytes(null); setThumb(null);
        pdfRef.current?.destroy(); pdfRef.current = null;
        setReading(true);
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            if (!looksLikePdf(data)) { setError(/\.pdf$/i.test(f.name) ? readErrorMessage(new PdfReadError('damaged'), lang) : t.notPdf); return; }
            const doc = await loadPdfLib(data);
            const n = doc.getPageCount();
            if (n === 0) throw new PdfReadError('damaged');
            const { PDFDocument, StandardFonts } = await import('pdf-lib');
            const scratch = await PDFDocument.create();
            setFont(await scratch.embedFont(StandardFonts.HelveticaBold));
            pdfRef.current = await openPdf(data);
            setPageCount(n); setBytes(data); setFile(f);
        } catch (e) {
            const name = (e as { name?: string })?.name;
            setError(readErrorMessage(e instanceof PdfReadError || name === 'PasswordException' ? e : new PdfReadError('damaged'), lang));
        } finally {
            setReading(false);
        }
    }, [lang, t]);

    const rawText = preset !== null ? t.presets[preset] : custom;
    const { text, bad } = useMemo(() => sanitize(font, rawText), [font, rawText]);
    const selected = useMemo(() => (pagesMode === 'all' ? Array.from({ length: pageCount }, (_, i) => i) : parseRange(range, pageCount)), [pagesMode, range, pageCount]);
    const previewPage = selected && selected.length ? selected[0] + 1 : 1;
    const opts: Opts = useMemo(() => ({ size: sizeMode === 'fit' ? 'fit' : Math.max(6, Math.min(400, fixedSize || 72)), angle, layout: layoutMode }), [sizeMode, fixedSize, angle, layoutMode]);

    // Thumbnail of the first watermarked page (as displayed).
    useEffect(() => {
        const pdf = pdfRef.current;
        if (!pdf || !file) return;
        let cancelled = false;
        (async () => {
            try {
                const page = await pdf.getPage(previewPage);
                const vp = page.getViewport({ scale: 1 });
                const url = await thumbnail(pdf, previewPage, 420);
                if (!cancelled) setThumb({ url, W: vp.width, H: vp.height, page: previewPage });
            } catch { /* preview is best effort */ }
        })();
        return () => { cancelled = true; };
    }, [file, previewPage]);

    const preview = useMemo(() => {
        if (!thumb || !font || !text) return null;
        const placed = layout(font.widthOfTextAtSize(text, 1), font.heightAtSize(1, { descender: false }), thumb.W, thumb.H, opts);
        return placed;
    }, [thumb, font, text, opts]);

    const run = useCallback(async () => {
        if (!bytes || !file || !text || !selected || !selected.length) return;
        setError(''); setBusy(true); setProgress(t.working);
        await yieldToBrowser();
        try {
            const lib = await import('pdf-lib');
            const doc = await loadPdfLib(bytes);
            const f = await doc.embedFont(lib.StandardFonts.HelveticaBold);
            const widthAt1 = f.widthOfTextAtSize(text, 1);
            const cap = f.heightAtSize(1, { descender: false });
            const [r, g, b] = COLOURS[colour].rgb;
            const pages = doc.getPages();
            // One shared ExtGState for the opacity, and one Form XObject per distinct displayed page size:
            // the watermark is drawn once in displayed coordinates and placed on each page with a matrix
            // that undoes /Rotate and the crop-box origin. Keeps big documents small.
            const ctx = doc.context;
            const gsRef = ctx.register(ctx.obj({ Type: 'ExtGState', ca: opacity / 100, CA: opacity / 100 }));
            const encoded = f.encodeText(text);
            const forms = new Map<string, ReturnType<typeof ctx.register>>();
            const formFor = (W: number, H: number) => {
                const key = `${W.toFixed(2)}x${H.toFixed(2)}`;
                const hit = forms.get(key);
                if (hit) return hit;
                const placed = layout(widthAt1, cap, W, H, opts);
                const cos = Math.cos(placed.theta), sin = Math.sin(placed.theta);
                const ops = [lib.setGraphicsState('GS'), lib.setFillingRgbColor(r, g, b), lib.beginText(), lib.setFontAndSize('F', placed.size)];
                for (const it of placed.items) {
                    ops.push(lib.setTextMatrix(cos, sin, -sin, cos, it.x, it.y), lib.showText(encoded));
                }
                ops.push(lib.endText());
                const stream = ctx.formXObject(ops, {
                    BBox: ctx.obj([0, 0, W, H]),
                    Resources: ctx.obj({ Font: ctx.obj({ F: f.ref }), ExtGState: ctx.obj({ GS: gsRef }) }),
                });
                const ref = ctx.register(stream);
                forms.set(key, ref);
                return ref;
            };
            for (let k = 0; k < selected.length; k++) {
                const idx = selected[k];
                if (k % 10 === 0) { setProgress(t.page(k + 1, selected.length)); await yieldToBrowser(); }
                const page = pages[idx];
                const box = page.getCropBox(); // falls back to the media box
                const rot = (((page.getRotation().angle % 360) + 360) % 360);
                const quarter = Math.round(rot / 90) % 4;
                const W = quarter % 2 ? box.height : box.width;
                const H = quarter % 2 ? box.width : box.height;
                // Displayed (X, Y) → user space for /Rotate 0, 90, 180, 270 (clockwise display rotation).
                const m: [number, number, number, number, number, number] =
                    quarter === 1 ? [0, 1, -1, 0, box.x + box.width, box.y]
                        : quarter === 2 ? [-1, 0, 0, -1, box.x + box.width, box.y + box.height]
                            : quarter === 3 ? [0, -1, 1, 0, box.x, box.y + box.height]
                                : [1, 0, 0, 1, box.x, box.y];
                const name = page.node.newXObject('Watermark', formFor(W, H));
                page.pushOperators(lib.pushGraphicsState(), lib.concatTransformationMatrix(...m), lib.drawObject(name), lib.popGraphicsState());
            }
            setProgress(t.saving); await yieldToBrowser();
            const out = await doc.save();
            setResult({ blob: pdfBlob(out), name: `${baseName(file.name)}${t.suffix}.pdf`, pages: selected.length });
        } catch (e) {
            const n = (e as { name?: string })?.name;
            setError(e instanceof PdfReadError || n === 'PasswordException' ? readErrorMessage(e, lang) : t.failed);
        } finally {
            setBusy(false); setProgress('');
        }
    }, [bytes, file, text, selected, colour, opacity, opts, lang, t]);

    const chip = (active: boolean) => `min-h-[44px] rounded-full border px-4 text-sm font-semibold transition-colors ${active ? 'border-canada-red bg-canada-red text-white' : 'border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-canada-red hover:text-canada-red'}`;
    const label = 'block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200';
    const input = 'min-h-[44px] rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 text-base text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-canada-red/40';
    const rangeBad = pagesMode === 'range' && range.trim() !== '' && !selected;
    const canRun = !!text && !!selected && selected.length > 0 && !busy;

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
                            <p className="text-sm text-gray-500 dark:text-gray-400">{formatBytes(file.size, lang)} · {t.pages(pageCount)}</p>
                        </div>
                        <SecondaryButton onClick={reset} disabled={busy} className="w-full sm:w-auto">{t.change}</SecondaryButton>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,300px)]">
                        <div className="space-y-5 min-w-0">
                            <div>
                                <span className={label}>{t.textLabel}</span>
                                <div className="flex flex-wrap gap-2">
                                    {t.presets.map((p, i) => (
                                        <button key={p} type="button" aria-pressed={preset === i} onClick={() => setPreset(i)} className={chip(preset === i)}>{p}</button>
                                    ))}
                                </div>
                                <input type="text" value={custom} maxLength={80} placeholder={t.customPlaceholder} aria-label={t.customPlaceholder}
                                    onChange={(e) => { setCustom(e.target.value); setPreset(e.target.value ? null : 0); }}
                                    onFocus={() => { if (custom) setPreset(null); }}
                                    className={`${input} mt-3 w-full ${preset === null ? 'border-canada-red' : ''}`} />
                                {bad.length > 0 && <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">{t.unsupported(bad.join(' '))}</p>}
                                {!text && <p className="mt-2 text-sm text-red-700 dark:text-red-300">{t.noText}</p>}
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <span className={label}>{t.sizeLabel}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <button type="button" aria-pressed={sizeMode === 'fit'} onClick={() => setSizeMode('fit')} className={chip(sizeMode === 'fit')}>{t.fit}</button>
                                        <button type="button" aria-pressed={sizeMode === 'fixed'} onClick={() => setSizeMode('fixed')} className={chip(sizeMode === 'fixed')}>{t.fixed}</button>
                                    </div>
                                    {sizeMode === 'fixed' && (
                                        <div className="mt-2 flex items-center gap-2">
                                            <input type="number" min={6} max={400} value={fixedSize} onChange={(e) => setFixedSize(parseInt(e.target.value, 10) || 0)} aria-label={t.fixed} className={`${input} w-24`} />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{t.pt}</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="wm-opacity" className={label}>{t.opacity(opacity)}</label>
                                    <input id="wm-opacity" type="range" min={5} max={100} step={5} value={opacity} onChange={(e) => setOpacity(parseInt(e.target.value, 10))} className="w-full h-10 accent-canada-red" />
                                </div>
                                <div>
                                    <span className={label}>{t.angleLabel}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <button type="button" aria-pressed={angle === 'diagonal'} onClick={() => setAngle('diagonal')} className={chip(angle === 'diagonal')}>{t.diagonal}</button>
                                        <button type="button" aria-pressed={angle === 'horizontal'} onClick={() => setAngle('horizontal')} className={chip(angle === 'horizontal')}>{t.horizontal}</button>
                                    </div>
                                </div>
                                <div>
                                    <span className={label}>{t.colourLabel}</span>
                                    <div className="flex flex-wrap gap-2">
                                        {(Object.keys(COLOURS) as Colour[]).map((c) => (
                                            <button key={c} type="button" aria-pressed={colour === c} onClick={() => setColour(c)} className={`${chip(colour === c)} inline-flex items-center gap-2`}>
                                                <span className="h-3 w-3 rounded-full border border-white/70" style={{ background: COLOURS[c].css }} aria-hidden="true" />{t.colours[c]}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className={label}>{t.layoutLabel}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <button type="button" aria-pressed={layoutMode === 'center'} onClick={() => setLayoutMode('center')} className={chip(layoutMode === 'center')}>{t.center}</button>
                                        <button type="button" aria-pressed={layoutMode === 'tile'} onClick={() => setLayoutMode('tile')} className={chip(layoutMode === 'tile')}>{t.tile}</button>
                                    </div>
                                </div>
                                <div>
                                    <span className={label}>{t.pagesLabel}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <button type="button" aria-pressed={pagesMode === 'all'} onClick={() => setPagesMode('all')} className={chip(pagesMode === 'all')}>{t.allPages}</button>
                                        <button type="button" aria-pressed={pagesMode === 'range'} onClick={() => setPagesMode('range')} className={chip(pagesMode === 'range')}>{t.rangePages}</button>
                                    </div>
                                    {pagesMode === 'range' && (
                                        <input type="text" value={range} onChange={(e) => setRange(e.target.value)} placeholder={t.rangePlaceholder} aria-label={t.rangePages} aria-invalid={rangeBad} className={`${input} mt-2 w-full ${rangeBad ? 'border-red-400' : ''}`} />
                                    )}
                                    {rangeBad && <p className="mt-1 text-sm text-red-700 dark:text-red-300">{t.badRange(pageCount)}</p>}
                                </div>
                            </div>
                        </div>

                        <figure className="min-w-0">
                            <div className="relative mx-auto w-full max-w-[300px] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white shadow-sm">
                                {thumb ? (
                                    <>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={thumb.url} alt="" className="block w-full h-auto" />
                                        {preview && (
                                            <svg viewBox={`0 0 ${thumb.W} ${thumb.H}`} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                                                {preview.items.map((it, i) => {
                                                    const x = it.x, y = thumb.H - it.y;
                                                    const deg = (-preview.theta * 180) / Math.PI;
                                                    return (
                                                        <text key={i} x={x} y={y} transform={`rotate(${deg} ${x} ${y})`} fontFamily="Helvetica, Arial, sans-serif" fontWeight="bold"
                                                            fontSize={preview.size} textLength={preview.width} lengthAdjust="spacingAndGlyphs" fill={COLOURS[colour].css} fillOpacity={opacity / 100}>{text}</text>
                                                    );
                                                })}
                                            </svg>
                                        )}
                                    </>
                                ) : (
                                    <div className="aspect-[3/4] animate-pulse bg-gray-100 dark:bg-gray-800" />
                                )}
                            </div>
                            {thumb && <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">{t.preview(thumb.page)}</figcaption>}
                        </figure>
                    </div>

                    <ErrorBox>{error}</ErrorBox>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <PrimaryButton onClick={run} disabled={!canRun} className="w-full sm:w-auto">
                            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Stamp className="h-4 w-4" aria-hidden="true" />}
                            {busy ? t.working : t.apply}
                        </PrimaryButton>
                        {busy && progress && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{progress}</p>}
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t.honest} <Link href={`/${lang}/flatten-pdf`} className="font-semibold text-canada-red underline">{t.flattenLink}</Link> {t.honestEnd}
                    </p>
                </div>
            )}

            {result && (
                <>
                    <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done(result.pages)} onReset={reset} />
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                        {t.honest} <Link href={`/${lang}/flatten-pdf`} className="font-semibold text-canada-red underline">{t.flattenLink}</Link> {t.honestEnd}
                    </p>
                </>
            )}
        </Panel>
    );
}
