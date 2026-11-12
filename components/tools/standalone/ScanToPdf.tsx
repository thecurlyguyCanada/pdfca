'use client';

/**
 * Scan to PDF: phone photos (or any images) → one PDF. Photos are decoded with EXIF orientation applied,
 * downscaled to a 2000 px long edge, optionally cleaned up (grayscale / black & white document with an
 * adaptive, lighting-independent threshold), re-encoded as JPEG (q 0.8) and placed on Letter, A4 or
 * photo-sized pages. No edge detection or perspective correction. Everything stays in the browser.
 */
import { useEffect, useState } from 'react';
import { Camera, ImagePlus, RotateCw, Trash2, ArrowUp, ArrowDown, FileDown } from 'lucide-react';
import { Dropzone, Panel, ErrorBox, PrimaryButton, ResultCard, pdfBlob, yieldToBrowser } from './shared';
import type { Lang } from './shared';

const STR = {
    en: {
        takePhoto: 'Take photo',
        takeAnother: 'Take another photo',
        choose: 'Choose photos',
        chooseHint: 'or drop images here (JPG, PNG, WebP…)',
        addMore: 'Add photos',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        page: 'Page',
        rotate: 'Rotate 90°',
        del: 'Delete',
        up: 'Move up',
        down: 'Move down',
        enhancement: 'Enhancement',
        color: 'Original colour',
        gray: 'Grayscale',
        bw: 'Black & white document',
        enhanceNote: 'Applies to all pages. The previews show the result.',
        pageSize: 'Page size',
        fit: 'Fit to photo',
        letter: 'Letter',
        a4: 'A4',
        create: 'Create PDF',
        working: (p: number, n: number) => `Processing page ${p} of ${n}…`,
        decoding: (p: number, n: number) => `Reading photo ${p} of ${n}…`,
        heic: (name: string) => `“${name}” is a HEIC/HEIF photo, which this browser cannot open.`,
        heicFix: 'Use HEIC to PDF instead, or set your iPhone camera to “Most Compatible” (JPG).',
        heicLink: 'Open HEIC to PDF',
        notImage: (name: string) => `“${name}” is not an image this browser can read, so it was skipped.`,
        resultNote: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        nextSteps: 'Want to search or copy the text?',
        ocr: 'Make it searchable with OCR PDF',
        tooBig: 'File too big to email?',
        compress: 'Compress PDF',
        noEdge: 'Tip: photograph the page flat, filling the frame, in even light. There is no automatic cropping or straightening.',
        failed: 'Something went wrong while creating the PDF. Try fewer or smaller photos.',
        filePrefix: 'scan',
    },
    fr: {
        takePhoto: 'Prendre une photo',
        takeAnother: 'Prendre une autre photo',
        choose: 'Choisir des photos',
        chooseHint: 'ou déposez des images ici (JPG, PNG, WebP…)',
        addMore: 'Ajouter des photos',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        page: 'Page',
        rotate: 'Pivoter de 90°',
        del: 'Supprimer',
        up: 'Monter',
        down: 'Descendre',
        enhancement: 'Amélioration',
        color: 'Couleur d’origine',
        gray: 'Niveaux de gris',
        bw: 'Document noir et blanc',
        enhanceNote: 'S’applique à toutes les pages. Les aperçus montrent le résultat.',
        pageSize: 'Format de page',
        fit: 'Ajusté à la photo',
        letter: 'Lettre',
        a4: 'A4',
        create: 'Créer le PDF',
        working: (p: number, n: number) => `Traitement de la page ${p} sur ${n}…`,
        decoding: (p: number, n: number) => `Lecture de la photo ${p} sur ${n}…`,
        heic: (name: string) => `« ${name} » est une photo HEIC/HEIF que ce navigateur ne peut pas ouvrir.`,
        heicFix: 'Utilisez plutôt l’outil HEIC en PDF, ou réglez l’appareil photo de votre iPhone sur « Le plus compatible » (JPG).',
        heicLink: 'Ouvrir HEIC en PDF',
        notImage: (name: string) => `« ${name} » n’est pas une image lisible par ce navigateur; le fichier a été ignoré.`,
        resultNote: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        nextSteps: 'Besoin de chercher ou de copier le texte?',
        ocr: 'Rendez-le interrogeable avec OCR PDF',
        tooBig: 'Fichier trop lourd pour un courriel?',
        compress: 'Compresser le PDF',
        noEdge: 'Conseil : photographiez la page à plat, en remplissant le cadre, sous un éclairage uniforme. Il n’y a pas de recadrage ni de redressement automatique.',
        failed: 'Un problème est survenu pendant la création du PDF. Essayez avec moins de photos ou des photos plus petites.',
        filePrefix: 'numerisation',
    },
};

type Mode = 'color' | 'gray' | 'bw';
type Size = 'fit' | 'letter' | 'a4';
type ScanPage = { id: number; name: string; src: Blob; w: number; h: number; thumb: HTMLCanvasElement; rot: number };

const MAX_EDGE = 2000;
const THUMB_EDGE = 420;
const JPEG_Q = 0.8;

/* ------------------------------------------------------------------ decoding */

class HeicError extends Error {}

async function decode(file: File): Promise<ImageBitmap | HTMLImageElement> {
    try {
        return await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
        // Fallback: <img> (applies EXIF orientation by default in current browsers).
        const url = URL.createObjectURL(file);
        try {
            const img = new Image();
            img.src = url;
            await img.decode();
            return img;
        } catch {
            if (/\.(heic|heif)$/i.test(file.name) || /hei[cf]/i.test(file.type)) throw new HeicError(file.name);
            throw new Error(file.name);
        } finally {
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
    }
}

function drawScaled(src: CanvasImageSource, sw: number, sh: number, maxEdge: number): HTMLCanvasElement {
    const k = Math.min(1, maxEdge / Math.max(sw, sh));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(sw * k));
    c.height = Math.max(1, Math.round(sh * k));
    const ctx = c.getContext('2d') as CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, c.width, c.height); // flatten PNG transparency onto white
    ctx.drawImage(src, 0, 0, c.width, c.height);
    return c;
}

const toBlob = (c: HTMLCanvasElement, type: string, q?: number) => new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('encode'))), type, q));

/* ------------------------------------------------------------------ processing */

/** Rotate (multiples of 90°) into a new canvas. */
function rotated(src: CanvasImageSource, w: number, h: number, rot: number): HTMLCanvasElement {
    const c = document.createElement('canvas');
    const swap = rot % 180 !== 0;
    c.width = swap ? h : w;
    c.height = swap ? w : h;
    const ctx = c.getContext('2d') as CanvasRenderingContext2D;
    ctx.translate(c.width / 2, c.height / 2);
    ctx.rotate((rot * Math.PI) / 180);
    ctx.drawImage(src, -w / 2, -h / 2, w, h);
    return c;
}

/**
 * Grayscale: luminance + 1–99 % contrast stretch (skipped for flat graphics).
 * Black & white document: each pixel is compared with the mean brightness of its neighbourhood (window ≈ 1/8 of
 * the short side, via an integral image), so shadows and uneven lighting don't matter; a narrow soft band keeps
 * text edges smooth instead of jagged.
 */
function enhance(c: HTMLCanvasElement, mode: Mode) {
    if (mode === 'color') return;
    const w = c.width, h = c.height, n = w * h;
    const ctx = c.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    const g = new Uint8ClampedArray(n);
    const hist = new Uint32Array(256);
    for (let i = 0, p = 0; i < n; i++, p += 4) {
        const v = (d[p] * 77 + d[p + 1] * 150 + d[p + 2] * 29) >> 8;
        g[i] = v; hist[v]++;
    }
    const out = new Uint8ClampedArray(n);
    if (mode === 'gray') {
        let lo = 0, hi = 255, acc = 0;
        for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc > n * 0.01) { lo = v; break; } }
        acc = 0;
        for (let v = 255; v >= 0; v--) { acc += hist[v]; if (acc > n * 0.01) { hi = v; break; } }
        // Only stretch real photos of paper; flat graphics (one dominant colour) are left as plain grayscale.
        if (hi - lo < 80) { lo = 0; hi = 255; }
        const span = hi - lo;
        for (let i = 0; i < n; i++) out[i] = ((g[i] - lo) * 255) / span;
    } else {
        const W = w + 1;
        const integ = new Float64Array(W * (h + 1));
        for (let y = 0; y < h; y++) {
            let row = 0;
            for (let x = 0; x < w; x++) {
                row += g[y * w + x];
                integ[(y + 1) * W + x + 1] = integ[y * W + x + 1] + row;
            }
        }
        const r = Math.max(6, Math.round(Math.min(w, h) / 16));
        const LO = 0.70, HI = 0.86;
        const boxMean = (x: number, y: number, rr: number) => {
            const x0 = Math.max(0, x - rr), x1 = Math.min(w, x + rr + 1), y0 = Math.max(0, y - rr), y1 = Math.min(h, y + rr + 1);
            return (integ[y1 * W + x1] - integ[y0 * W + x1] - integ[y1 * W + x0] + integ[y0 * W + x0]) / ((x1 - x0) * (y1 - y0));
        };
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                // 3×3 mean as the pixel value (removes sensor noise / JPEG grain), neighbourhood mean as the local paper level.
                const v = boxMean(x, y, 1) / Math.max(1, boxMean(x, y, r));
                out[y * w + x] = v >= HI ? 255 : v <= LO ? 0 : ((v - LO) / (HI - LO)) * 255;
            }
        }
    }
    for (let i = 0, p = 0; i < n; i++, p += 4) { d[p] = d[p + 1] = d[p + 2] = out[i]; d[p + 3] = 255; }
    ctx.putImageData(img, 0, 0);
}

function previewUrl(pg: ScanPage, mode: Mode): string {
    const c = rotated(pg.thumb, pg.thumb.width, pg.thumb.height, pg.rot);
    enhance(c, mode);
    const url = c.toDataURL('image/jpeg', 0.85);
    c.width = 0; c.height = 0;
    return url;
}

/* ------------------------------------------------------------------ PDF */

const SIZES: Record<Exclude<Size, 'fit'>, [number, number]> = { letter: [612, 792], a4: [595.28, 841.89] };
const MARGIN = 18; // 0.25 in

function pageBox(size: Size, iw: number, ih: number): { pw: number; ph: number; x: number; y: number; w: number; h: number } {
    if (size === 'fit') {
        // Photo-sized page with an 11 in long edge, no margin.
        const k = 792 / Math.max(iw, ih);
        return { pw: iw * k, ph: ih * k, x: 0, y: 0, w: iw * k, h: ih * k };
    }
    let [pw, ph] = SIZES[size];
    if (iw > ih) [pw, ph] = [ph, pw]; // landscape photo → landscape page
    const k = Math.min((pw - 2 * MARGIN) / iw, (ph - 2 * MARGIN) / ih);
    const w = iw * k, h = ih * k;
    return { pw, ph, x: (pw - w) / 2, y: (ph - h) / 2, w, h };
}

function todayName(prefix: string) {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, '0');
    return `${prefix}-${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}.pdf`;
}

/* ------------------------------------------------------------------ component */

let nextId = 1;

export default function ScanToPdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [pages, setPages] = useState<ScanPage[]>([]);
    const [mode, setMode] = useState<Mode>('color');
    const [size, setSize] = useState<Size>('letter');
    const [previews, setPreviews] = useState<Record<number, string>>({});
    const [busy, setBusy] = useState('');
    const [error, setError] = useState('');
    const [heic, setHeic] = useState<string[]>([]);
    const [result, setResult] = useState<{ blob: Blob; name: string; pages: number } | null>(null);

    // Recompute previews whenever pages, rotation or enhancement change (thumbnails are small, so this is quick).
    useEffect(() => {
        let cancelled = false;
        (async () => {
            const next: Record<number, string> = {};
            for (const pg of pages) {
                if (cancelled) return;
                next[pg.id] = previewUrl(pg, mode);
                await yieldToBrowser();
            }
            if (!cancelled) setPreviews(next);
        })();
        return () => { cancelled = true; };
    }, [pages, mode]);

    const addFiles = async (files: File[]) => {
        setError(''); setResult(null);
        const heicNames: string[] = [];
        const bad: string[] = [];
        const added: ScanPage[] = [];
        for (let i = 0; i < files.length; i++) {
            const f = files[i];
            setBusy(t.decoding(i + 1, files.length));
            try {
                const bmp = await decode(f);
                const sw = 'naturalWidth' in bmp ? bmp.naturalWidth : bmp.width;
                const sh = 'naturalHeight' in bmp ? bmp.naturalHeight : bmp.height;
                const big = drawScaled(bmp, sw, sh, MAX_EDGE);
                const thumb = drawScaled(big, big.width, big.height, THUMB_EDGE);
                if ('close' in bmp) bmp.close();
                const src = await toBlob(big, 'image/jpeg', 0.92);
                added.push({ id: nextId++, name: f.name, src, w: big.width, h: big.height, thumb, rot: 0 });
                big.width = 0; big.height = 0;
            } catch (e) {
                if (e instanceof HeicError) heicNames.push(f.name); else bad.push(f.name);
            }
            await yieldToBrowser();
        }
        setBusy('');
        setHeic(heicNames);
        if (bad.length) setError(bad.map((n) => t.notImage(n)).join(' '));
        if (added.length) setPages((prev) => [...prev, ...added]);
    };

    const update = (fn: (p: ScanPage[]) => ScanPage[]) => { setResult(null); setPages(fn); };
    const rotate = (id: number) => update((ps) => ps.map((p) => (p.id === id ? { ...p, rot: (p.rot + 90) % 360 } : p)));
    const remove = (id: number) => update((ps) => ps.filter((p) => p.id !== id));
    const move = (i: number, dir: -1 | 1) => update((ps) => {
        const j = i + dir;
        if (j < 0 || j >= ps.length) return ps;
        const c = ps.slice(); [c[i], c[j]] = [c[j], c[i]]; return c;
    });

    const create = async () => {
        if (!pages.length) return;
        setError(''); setResult(null);
        try {
            const { PDFDocument } = await import('pdf-lib');
            const doc = await PDFDocument.create();
            for (let i = 0; i < pages.length; i++) {
                setBusy(t.working(i + 1, pages.length));
                await yieldToBrowser();
                const pg = pages[i];
                const bmp = await createImageBitmap(pg.src);
                const c = rotated(bmp, pg.w, pg.h, pg.rot);
                bmp.close();
                enhance(c, mode);
                const jpg = new Uint8Array(await (await toBlob(c, 'image/jpeg', JPEG_Q)).arrayBuffer());
                const box = pageBox(size, c.width, c.height);
                c.width = 0; c.height = 0;
                const img = await doc.embedJpg(jpg);
                const page = doc.addPage([box.pw, box.ph]);
                page.drawImage(img, { x: box.x, y: box.y, width: box.w, height: box.h });
            }
            doc.setTitle(todayName(t.filePrefix).replace(/\.pdf$/, ''));
            doc.setCreator('pdfcanada.ca');
            const bytes = await doc.save();
            setResult({ blob: pdfBlob(bytes), name: todayName(t.filePrefix), pages: pages.length });
        } catch {
            setError(t.failed);
        } finally {
            setBusy('');
        }
    };

    const reset = () => { setPages([]); setResult(null); setError(''); setHeic([]); };

    const pill = (active: boolean) => `min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active ? 'border-canada-red bg-canada-red text-white' : 'border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-canada-red'}`;
    const iconBtn = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-canada-red hover:text-canada-red disabled:opacity-30';

    return (
        <Panel>
            {/* Camera: a plain label+input so mobile opens the camera directly. */}
            <label className={`flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl bg-canada-red px-6 font-extrabold text-white hover:bg-canada-red-dark transition-colors ${pages.length ? 'py-4 text-lg' : 'py-6 text-xl'}`}>
                <Camera className="h-7 w-7" aria-hidden="true" />
                {pages.length ? t.takeAnother : t.takePhoto}
                <input type="file" accept="image/*" capture="environment" multiple className="sr-only"
                    onChange={(e) => { const fs = Array.from(e.target.files ?? []); e.target.value = ''; if (fs.length) void addFiles(fs); }} />
            </label>
            <div className="mt-3">
                {pages.length === 0 ? (
                    <Dropzone lang={lang} onFiles={(fs) => void addFiles(fs)} accept="image/*,.heic,.heif" multiple label={t.choose} hint={t.chooseHint} />
                ) : (
                    <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 min-h-11 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-canada-red hover:text-canada-red">
                        <ImagePlus className="h-4 w-4" aria-hidden="true" /> {t.choose}
                        <input type="file" accept="image/*,.heic,.heif" multiple className="sr-only"
                            onChange={(e) => { const fs = Array.from(e.target.files ?? []); e.target.value = ''; if (fs.length) void addFiles(fs); }} />
                    </label>
                )}
            </div>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{t.noEdge}</p>

            {heic.length > 0 && (
                <div role="alert" className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                    {heic.map((n) => <p key={n}>{t.heic(n)}</p>)}
                    <p className="mt-1">{t.heicFix} <a className="font-bold text-canada-red underline" href={`/${lang}/heic-to-pdf`}>{t.heicLink}</a></p>
                </div>
            )}
            <ErrorBox>{error}</ErrorBox>

            {pages.length > 0 && (
                <>
                    <h2 className="mt-6 text-sm font-bold text-gray-700 dark:text-gray-300">{t.pages(pages.length)}</h2>
                    <ol className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {pages.map((pg, i) => (
                            <li key={pg.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-2 bg-white dark:bg-gray-900">
                                <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                                    {previews[pg.id]
                                        ? <img src={previews[pg.id]} alt={`${t.page} ${i + 1}`} className="max-h-full max-w-full object-contain shadow-sm" />
                                        : <span className="h-6 w-6 animate-spin rounded-full border-2 border-canada-red border-t-transparent" aria-hidden="true" />}
                                </div>
                                <p className="mt-1 text-center text-xs font-bold text-gray-700 dark:text-gray-300">{t.page} {i + 1}</p>
                                <div className="mt-1 flex flex-wrap justify-center gap-1">
                                    <button type="button" className={iconBtn} onClick={() => rotate(pg.id)} aria-label={`${t.rotate} (${t.page} ${i + 1})`} title={t.rotate}><RotateCw className="h-4 w-4" /></button>
                                    <button type="button" className={iconBtn} onClick={() => move(i, -1)} disabled={i === 0} aria-label={`${t.up} (${t.page} ${i + 1})`} title={t.up}><ArrowUp className="h-4 w-4" /></button>
                                    <button type="button" className={iconBtn} onClick={() => move(i, 1)} disabled={i === pages.length - 1} aria-label={`${t.down} (${t.page} ${i + 1})`} title={t.down}><ArrowDown className="h-4 w-4" /></button>
                                    <button type="button" className={`${iconBtn} hover:!border-red-600 hover:!text-red-600`} onClick={() => remove(pg.id)} aria-label={`${t.del} (${t.page} ${i + 1})`} title={t.del}><Trash2 className="h-4 w-4" /></button>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <fieldset className="mt-6">
                        <legend className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.enhancement}</legend>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {(['color', 'gray', 'bw'] as const).map((m) => (
                                <button key={m} type="button" aria-pressed={mode === m} className={pill(mode === m)} onClick={() => { setResult(null); setMode(m); }}>{t[m]}</button>
                            ))}
                        </div>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{t.enhanceNote}</p>
                    </fieldset>
                    <fieldset className="mt-4">
                        <legend className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.pageSize}</legend>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {(['fit', 'letter', 'a4'] as const).map((s) => (
                                <button key={s} type="button" aria-pressed={size === s} className={pill(size === s)} onClick={() => { setResult(null); setSize(s); }}>{t[s]}</button>
                            ))}
                        </div>
                    </fieldset>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <PrimaryButton onClick={create} disabled={!!busy}><FileDown className="h-4 w-4" aria-hidden="true" /> {t.create}</PrimaryButton>
                    </div>
                </>
            )}
            {busy && <p className="mt-3 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}

            {result && (
                <>
                    <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.resultNote(result.pages)} onReset={reset} />
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        {t.nextSteps} <a className="font-semibold text-canada-red underline" href={`/${lang}/ocr-pdf`}>{t.ocr}</a>.{' '}
                        {t.tooBig} <a className="font-semibold text-canada-red underline" href={`/${lang}/compress-pdf`}>{t.compress}</a>.
                    </p>
                </>
            )}
        </Panel>
    );
}
