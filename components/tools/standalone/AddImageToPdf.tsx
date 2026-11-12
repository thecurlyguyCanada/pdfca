'use client';

/**
 * Add image to PDF: place one or more images (logo, stamp, photo, signature scan) on PDF pages.
 * Pages are shown as displayed (pdf.js viewport: /Rotate and CropBox applied). Placements are stored in
 * display coordinates (centre as a fraction of the displayed page, width in points) and converted to PDF user
 * space with the same viewport at export, then drawn with pdf-lib rotated by the page's /Rotate so the image
 * appears exactly where and how it was dropped. The original page content is kept as is (not re-rendered).
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';
import type * as PdfJsLib from 'pdfjs-dist';
import { ChevronLeft, ChevronRight, Minus, Plus, Trash2, X, ImagePlus, FileDown } from 'lucide-react';
import { Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, pdfBlob, baseName, yieldToBrowser, openPdf, loadPdfLib, readErrorMessage, formatBytes } from './shared';
import type { Lang } from './shared';

const STR = {
    en: {
        choosePdf: 'Drop your PDF here',
        chooseImage: 'Choose an image',
        chooseImageHint: 'Logo, stamp, photo or signature (PNG, JPG, WebP, GIF…)',
        anotherImage: 'Use another image',
        changePdf: 'Change PDF',
        notPdf: 'Please choose a PDF file.',
        badImage: (n: string) => `“${n}” could not be read as an image. Try a PNG or JPG.`,
        heic: 'HEIC photos can’t be opened here. Export the photo as JPG first (on iPhone: Settings › Camera › Formats › Most Compatible), then try again.',
        howTo: 'Tap or click the page to place the image. Drag it to move it; use the corner handle or − / + to resize.',
        needImage: 'Choose an image first, then tap the page to place it.',
        prev: 'Previous page',
        next: 'Next page',
        pageOf: (p: number, n: number) => `Page ${p} of ${n}`,
        smaller: 'Smaller',
        bigger: 'Bigger',
        opacity: 'Opacity',
        allPages: 'Apply to all pages',
        remove: 'Remove',
        placements: 'Placed images',
        noPlacements: 'Nothing placed yet.',
        onPage: (p: number) => `Page ${p}`,
        everyPage: 'All pages',
        create: 'Add image to PDF',
        working: (p: number, n: number) => `Page ${p} of ${n}…`,
        loading: 'Opening the PDF…',
        placed: (n: number) => `${n} image${n === 1 ? '' : 's'} placed`,
        suffix: '-with-image',
        transparencyKept: 'Transparency is kept.',
        placementLabel: (p: string) => `Placed image, ${p}. Arrow keys move it.`,
    },
    fr: {
        choosePdf: 'Déposez votre PDF ici',
        chooseImage: 'Choisir une image',
        chooseImageHint: 'Logo, tampon, photo ou signature (PNG, JPG, WebP, GIF…)',
        anotherImage: 'Utiliser une autre image',
        changePdf: 'Changer de PDF',
        notPdf: 'Veuillez choisir un fichier PDF.',
        badImage: (n: string) => `« ${n} » n’a pas pu être lu comme une image. Essayez un PNG ou un JPG.`,
        heic: 'Les photos HEIC ne peuvent pas être ouvertes ici. Exportez d’abord la photo en JPG (sur iPhone : Réglages › Appareil photo › Formats › Le plus compatible), puis réessayez.',
        howTo: 'Touchez ou cliquez sur la page pour placer l’image. Faites-la glisser pour la déplacer; utilisez la poignée du coin ou − / + pour la redimensionner.',
        needImage: 'Choisissez d’abord une image, puis touchez la page pour la placer.',
        prev: 'Page précédente',
        next: 'Page suivante',
        pageOf: (p: number, n: number) => `Page ${p} sur ${n}`,
        smaller: 'Plus petite',
        bigger: 'Plus grande',
        opacity: 'Opacité',
        allPages: 'Appliquer à toutes les pages',
        remove: 'Retirer',
        placements: 'Images placées',
        noPlacements: 'Aucune image placée pour l’instant.',
        onPage: (p: number) => `Page ${p}`,
        everyPage: 'Toutes les pages',
        create: 'Ajouter l’image au PDF',
        working: (p: number, n: number) => `Page ${p} sur ${n}…`,
        loading: 'Ouverture du PDF…',
        placed: (n: number) => `${n} image${n > 1 ? 's' : ''} placée${n > 1 ? 's' : ''}`,
        suffix: '-avec-image',
        transparencyKept: 'La transparence est conservée.',
        placementLabel: (p: string) => `Image placée, ${p}. Les flèches du clavier la déplacent.`,
    },
};

type Img = { id: number; name: string; kind: 'jpg' | 'png'; bytes: Uint8Array; url: string; w: number; h: number };
/** cx, cy: centre as a fraction of the page AS DISPLAYED; wPt: width in PDF points (display orientation). */
type Placement = { id: number; imgId: number; page: number | 'all'; cx: number; cy: number; wPt: number; opacity: number };
type PageSize = { w: number; h: number }; // displayed size in points (viewport at scale 1)

/* ------------------------------------------------------------------ image loading */

/** JPEG: EXIF orientation and number of colour components (CMYK JPEGs are re-encoded; pdf-lib can show them inverted). */
function jpegInfo(b: Uint8Array): { orientation: number; components: number } | null {
    if (b[0] !== 0xff || b[1] !== 0xd8) return null;
    let orientation = 1, components = 3, i = 2;
    while (i + 4 < b.length) {
        if (b[i] !== 0xff) { i++; continue; }
        const marker = b[i + 1];
        if (marker === 0xd9 || marker === 0xda) break;
        const len = (b[i + 2] << 8) | b[i + 3];
        if (marker === 0xe1 && b[i + 4] === 0x45 && b[i + 5] === 0x78 && b[i + 6] === 0x69 && b[i + 7] === 0x66) {
            const t = i + 10; // TIFF header
            const le = b[t] === 0x49;
            const u16 = (o: number) => (le ? b[o] | (b[o + 1] << 8) : (b[o] << 8) | b[o + 1]);
            const u32 = (o: number) => (le ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0 : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0);
            const ifd = t + u32(t + 4);
            const n = u16(ifd);
            for (let k = 0; k < n; k++) {
                const e = ifd + 2 + k * 12;
                if (e + 12 > b.length) break;
                if (u16(e) === 0x0112) orientation = u16(e + 8);
            }
        }
        if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) components = b[i + 9];
        i += 2 + len;
    }
    return { orientation, components };
}

const isPng = (b: Uint8Array) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47;

async function canvasEncode(file: Blob, type: 'image/png' | 'image/jpeg'): Promise<{ bytes: Uint8Array; w: number; h: number }> {
    let src: ImageBitmap | HTMLImageElement;
    try {
        src = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
        const url = URL.createObjectURL(file);
        try { const im = new Image(); im.src = url; await im.decode(); src = im; } finally { setTimeout(() => URL.revokeObjectURL(url), 1000); }
    }
    const w = 'naturalWidth' in src ? src.naturalWidth : src.width;
    const h = 'naturalHeight' in src ? src.naturalHeight : src.height;
    const k = Math.min(1, 4000 / Math.max(w, h)); // keep huge photos reasonable
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
    const ctx = c.getContext('2d') as CanvasRenderingContext2D;
    if (type === 'image/jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); }
    ctx.drawImage(src, 0, 0, c.width, c.height);
    if ('close' in src) src.close();
    const blob = await new Promise<Blob | null>((r) => c.toBlob(r, type, 0.92));
    const out = { bytes: new Uint8Array(await (blob as Blob).arrayBuffer()), w: c.width, h: c.height };
    c.width = 0; c.height = 0;
    return out;
}

async function loadImage(file: File, id: number): Promise<Img> {
    const raw = new Uint8Array(await file.arrayBuffer());
    let kind: 'jpg' | 'png';
    let bytes: Uint8Array;
    let w = 0, h = 0;
    const jp = jpegInfo(raw);
    if (jp && jp.orientation === 1 && jp.components !== 4) {
        kind = 'jpg'; bytes = raw; // embed the original JPEG untouched (no recompression)
    } else if (jp) {
        kind = 'jpg'; ({ bytes, w, h } = await canvasEncode(file, 'image/jpeg'));
    } else if (isPng(raw)) {
        kind = 'png'; bytes = raw; // original PNG, transparency kept
    } else {
        kind = 'png'; ({ bytes, w, h } = await canvasEncode(file, 'image/png')); // WebP, GIF, BMP, AVIF…: PNG keeps alpha
    }
    const url = URL.createObjectURL(new Blob([bytes as unknown as BlobPart], { type: kind === 'jpg' ? 'image/jpeg' : 'image/png' }));
    if (!w || !h) {
        const im = new Image(); im.src = url; await im.decode();
        w = im.naturalWidth; h = im.naturalHeight;
    }
    return { id, name: file.name, kind, bytes, url, w, h };
}

/* ------------------------------------------------------------------ component */

let uid = 1;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export default function AddImageToPdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [pdf, setPdf] = useState<PdfJsLib.PDFDocumentProxy | null>(null);
    const [sizes, setSizes] = useState<PageSize[]>([]);
    const [pageNo, setPageNo] = useState(1);
    const [images, setImages] = useState<Img[]>([]);
    const [currentImg, setCurrentImg] = useState<number | null>(null);
    const [placements, setPlacements] = useState<Placement[]>([]);
    const [selected, setSelected] = useState<number | null>(null);
    const [opacity, setOpacity] = useState(1);
    const [cssW, setCssW] = useState(0);
    const [busy, setBusy] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drag = useRef<{ id: number; mode: 'move' | 'resize'; sx: number; sy: number; cx: number; cy: number; wPt: number; left: number } | null>(null);

    // Release the pdf.js document and image object URLs when the tool unmounts (e.g. client-side navigation).
    const pdfRef = useRef<PdfJsLib.PDFDocumentProxy | null>(null);
    const imagesRef = useRef<Img[]>([]);
    useEffect(() => { pdfRef.current = pdf; }, [pdf]);
    useEffect(() => { imagesRef.current = images; }, [images]);
    useEffect(() => () => {
        if (pdfRef.current) void pdfRef.current.destroy();
        for (const im of imagesRef.current) URL.revokeObjectURL(im.url);
    }, []);

    const imgById = useCallback((id: number) => images.find((i) => i.id === id), [images]);
    const size = sizes[pageNo - 1];
    const k = size && cssW ? cssW / size.w : 1; // CSS px per point

    /* ---- open PDF */
    const openFile = async (files: File[]) => {
        const f = files.find((x) => /\.pdf$/i.test(x.name) || x.type === 'application/pdf');
        if (!f) { setError(t.notPdf); return; }
        setError(''); setResult(null); setBusy(t.loading);
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            await loadPdfLib(data); // refuses encrypted / damaged files up front
            const doc = await openPdf(data);
            const ss: PageSize[] = [];
            for (let p = 1; p <= doc.numPages; p++) {
                const pg = await doc.getPage(p);
                const vp = pg.getViewport({ scale: 1 });
                ss.push({ w: vp.width, h: vp.height });
                if (p % 50 === 0) await yieldToBrowser();
            }
            if (pdf) void pdf.destroy();
            setPdf(doc); setBytes(data); setFile(f); setSizes(ss); setPageNo(1); setPlacements([]); setSelected(null);
        } catch (e) {
            setError(readErrorMessage(e, lang));
        } finally {
            setBusy('');
        }
    };

    /* ---- add image */
    const addImage = async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setError('');
        if (/\.(heic|heif)$/i.test(f.name) || /hei[cf]/i.test(f.type)) { setError(t.heic); return; }
        try {
            const img = await loadImage(f, uid++);
            setImages((prev) => [...prev, img]);
            setCurrentImg(img.id);
        } catch {
            setError(t.badImage(f.name));
        }
    };

    /* ---- measure container */
    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setCssW(Math.min(el.clientWidth, 820)));
        ro.observe(el);
        setCssW(Math.min(el.clientWidth, 820));
        return () => ro.disconnect();
    }, [pdf]);

    /* ---- render current page */
    useEffect(() => {
        if (!pdf || !cssW || !size) return;
        let cancelled = false;
        let task: { cancel: () => void } | null = null;
        (async () => {
            const page = await pdf.getPage(pageNo);
            if (cancelled) return;
            const dpr = Math.min(2, window.devicePixelRatio || 1);
            const vp = page.getViewport({ scale: (cssW / size.w) * dpr });
            const c = canvasRef.current;
            if (!c) return;
            const off = document.createElement('canvas');
            off.width = Math.floor(vp.width); off.height = Math.floor(vp.height);
            const ctx = off.getContext('2d') as CanvasRenderingContext2D;
            ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, off.width, off.height);
            const rt = page.render({ canvasContext: ctx, viewport: vp });
            task = rt;
            try { await rt.promise; } catch { return; }
            if (cancelled) return;
            c.width = off.width; c.height = off.height;
            (c.getContext('2d') as CanvasRenderingContext2D).drawImage(off, 0, 0);
            off.width = 0; off.height = 0;
        })();
        return () => { cancelled = true; task?.cancel(); };
    }, [pdf, pageNo, cssW, size]);

    /* ---- placements */
    const update = (id: number, patch: Partial<Placement>) => { setResult(null); setPlacements((ps) => ps.map((p) => (p.id === id ? { ...p, ...patch } : p))); };
    const sel = placements.find((p) => p.id === selected) || null;

    const onPageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!size) return;
        if (currentImg == null) { setError(t.needImage); return; }
        const img = imgById(currentImg);
        if (!img) return;
        const r = e.currentTarget.getBoundingClientRect();
        const cx = clamp((e.clientX - r.left) / r.width, 0, 1);
        const cy = clamp((e.clientY - r.top) / r.height, 0, 1);
        // Default: 30 % of the page width, or less if that would be taller than 40 % of the page.
        let wPt = size.w * 0.3;
        if (wPt * (img.h / img.w) > size.h * 0.4) wPt = (size.h * 0.4 * img.w) / img.h;
        const p: Placement = { id: uid++, imgId: img.id, page: pageNo, cx, cy, wPt, opacity };
        setError(''); setResult(null);
        setPlacements((ps) => [...ps, p]);
        setSelected(p.id);
    };

    const startDrag = (e: ReactPointerEvent, p: Placement, mode: 'move' | 'resize') => {
        e.stopPropagation();
        e.preventDefault();
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setSelected(p.id);
        const leftPx = (p.cx * size.w - p.wPt / 2) * k;
        drag.current = { id: p.id, mode, sx: e.clientX, sy: e.clientY, cx: p.cx, cy: p.cy, wPt: p.wPt, left: leftPx };
    };
    const onDragMove = (e: ReactPointerEvent) => {
        const d = drag.current;
        if (!d || !size) return;
        const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
        if (d.mode === 'move') {
            update(d.id, { cx: clamp(d.cx + dx / (size.w * k), 0, 1), cy: clamp(d.cy + dy / (size.h * k), 0, 1) });
        } else {
            // Resize from the bottom-right corner, keeping the top-left corner and the aspect ratio.
            const p = placements.find((q) => q.id === d.id);
            const img = p && imgById(p.imgId);
            if (!p || !img) return;
            const aspect = img.h / img.w;
            const wPt = clamp(d.wPt + dx / k, 12, size.w * 2);
            const topPt = d.cy * size.h - (d.wPt * aspect) / 2;
            const leftPt = d.cx * size.w - d.wPt / 2;
            update(d.id, { wPt, cx: (leftPt + wPt / 2) / size.w, cy: (topPt + (wPt * aspect) / 2) / size.h });
        }
    };
    const endDrag = () => { drag.current = null; };

    const scaleSel = (f: number) => { if (sel && size) update(sel.id, { wPt: clamp(sel.wPt * f, 12, size.w * 2) }); };
    const onKey = (e: ReactKeyboardEvent, p: Placement) => {
        const step = e.shiftKey ? 0.05 : 0.01;
        const m: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
        if (m[e.key]) { e.preventDefault(); update(p.id, { cx: clamp(p.cx + m[e.key][0], 0, 1), cy: clamp(p.cy + m[e.key][1], 0, 1) }); }
        if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeP(p.id); }
    };
    const removeP = (id: number) => { setResult(null); setPlacements((ps) => ps.filter((p) => p.id !== id)); if (selected === id) setSelected(null); };

    /* ---- export */
    const create = async () => {
        if (!pdf || !bytes || !file || !placements.length) return;
        setError(''); setResult(null);
        try {
            const { degrees } = await import('pdf-lib');
            const doc = await loadPdfLib(bytes);
            const embedded = new Map<number, Awaited<ReturnType<typeof doc.embedPng>>>();
            for (const im of images) {
                if (!placements.some((p) => p.imgId === im.id)) continue;
                embedded.set(im.id, im.kind === 'jpg' ? await doc.embedJpg(im.bytes) : await doc.embedPng(im.bytes));
            }
            const pages = doc.getPages();
            for (let i = 0; i < pages.length; i++) {
                const list = placements.filter((p) => p.page === 'all' || p.page === i + 1);
                if (!list.length) continue;
                setBusy(t.working(i + 1, pages.length));
                const pjPage = await pdf.getPage(i + 1);
                const vp = pjPage.getViewport({ scale: 1 });
                const rot = ((pjPage.rotate % 360) + 360) % 360;
                for (const p of list) {
                    const im = imgById(p.imgId);
                    const emb = embedded.get(p.imgId);
                    if (!im || !emb) continue;
                    const w = p.wPt, h = (p.wPt * im.h) / im.w;
                    const left = p.cx * vp.width - w / 2;
                    const top = p.cy * vp.height - h / 2;
                    // The image's bottom-left corner as displayed, mapped to PDF user space (handles /Rotate and CropBox).
                    const [x, y] = vp.convertToPdfPoint(left, top + h);
                    pages[i].drawImage(emb, { x, y, width: w, height: h, rotate: degrees(rot), opacity: p.opacity });
                }
                if (i % 10 === 0) await yieldToBrowser();
            }
            const out = await doc.save();
            setResult({ blob: pdfBlob(out), name: `${baseName(file.name)}${t.suffix}.pdf` });
        } catch (e) {
            setError(readErrorMessage(e, lang));
        } finally {
            setBusy('');
        }
    };

    const reset = () => {
        if (pdf) void pdf.destroy();
        setPdf(null); setFile(null); setBytes(null); setSizes([]); setPlacements([]); setSelected(null); setResult(null); setError('');
    };

    /* ---- render */
    if (!pdf || !file) {
        return (
            <Panel>
                <Dropzone lang={lang} onFiles={(fs) => void openFile(fs)} label={t.choosePdf} />
                {busy && <p className="mt-3 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
                <ErrorBox>{error}</ErrorBox>
            </Panel>
        );
    }

    const onThisPage = placements.filter((p) => p.page === 'all' || p.page === pageNo);
    const cur = currentImg != null ? imgById(currentImg) : undefined;
    const navBtn = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-canada-red hover:text-canada-red disabled:opacity-30';

    return (
        <Panel>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="min-w-0 truncate text-sm font-bold text-gray-900 dark:text-gray-100">{file.name} <span className="font-normal text-gray-500">· {formatBytes(file.size, lang)}</span></p>
                <SecondaryButton onClick={reset}>{t.changePdf}</SecondaryButton>
            </div>

            {/* Image picker */}
            <div className="mt-4">
                {!cur ? (
                    <Dropzone lang={lang} onFiles={(fs) => void addImage(fs)} accept="image/*" label={t.chooseImage} hint={t.chooseImageHint} />
                ) : (
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 p-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[conic-gradient(#e5e7eb_25%,#fff_0_50%,#e5e7eb_0_75%,#fff_0)] bg-[length:12px_12px]">
                            <img src={cur.url} alt="" className="max-h-14 max-w-14 object-contain" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">{cur.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{cur.w} × {cur.h} px{cur.kind === 'png' ? ` · ${t.transparencyKept}` : ''}</p>
                        </div>
                        <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-canada-red hover:text-canada-red">
                            <ImagePlus className="h-4 w-4" aria-hidden="true" /> {t.anotherImage}
                            <input type="file" accept="image/*" className="sr-only" onChange={(e) => { const fs = Array.from(e.target.files ?? []); e.target.value = ''; void addImage(fs); }} />
                        </label>
                        {images.length > 1 && (
                            <div className="flex w-full flex-wrap gap-2">
                                {images.map((im) => (
                                    <button key={im.id} type="button" onClick={() => setCurrentImg(im.id)} aria-pressed={im.id === currentImg} title={im.name}
                                        className={`h-11 w-11 rounded-lg border-2 p-0.5 ${im.id === currentImg ? 'border-canada-red' : 'border-gray-200 dark:border-gray-700'}`}>
                                        <img src={im.url} alt={im.name} className="h-full w-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <ErrorBox>{error}</ErrorBox>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{t.howTo}</p>

            {/* Page navigation */}
            <div className="mt-3 flex items-center justify-center gap-3">
                <button type="button" className={navBtn} onClick={() => setPageNo((p) => Math.max(1, p - 1))} disabled={pageNo <= 1} aria-label={t.prev}><ChevronLeft className="h-5 w-5" /></button>
                <span className="min-w-28 text-center text-sm font-semibold text-gray-800 dark:text-gray-200" aria-live="polite">{t.pageOf(pageNo, sizes.length)}</span>
                <button type="button" className={navBtn} onClick={() => setPageNo((p) => Math.min(sizes.length, p + 1))} disabled={pageNo >= sizes.length} aria-label={t.next}><ChevronRight className="h-5 w-5" /></button>
            </div>

            {/* Page with placements */}
            <div ref={wrapRef} className="mt-3 w-full">
                {size && cssW > 0 && (
                    <div
                        data-testid="page-stage"
                        className="relative mx-auto select-none overflow-hidden border border-gray-300 dark:border-gray-700 bg-white shadow-sm cursor-crosshair"
                        style={{ width: cssW, height: size.h * k }}
                        onClick={onPageClick}
                    >
                        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
                        {onThisPage.map((p) => {
                            const im = imgById(p.imgId);
                            if (!im) return null;
                            const w = p.wPt * k, h = w * (im.h / im.w);
                            const isSel = p.id === selected;
                            return (
                                <div
                                    key={p.id}
                                    data-testid="placement"
                                    role="button"
                                    tabIndex={0}
                                    aria-label={t.placementLabel(p.page === 'all' ? t.everyPage : t.onPage(p.page))}
                                    className={`absolute cursor-move ${isSel ? 'outline outline-2 outline-canada-red' : 'outline outline-1 outline-dashed outline-gray-400/70'}`}
                                    style={{ left: p.cx * size.w * k - w / 2, top: p.cy * size.h * k - h / 2, width: w, height: h, touchAction: 'none' }}
                                    onPointerDown={(e) => startDrag(e, p, 'move')}
                                    onPointerMove={onDragMove}
                                    onPointerUp={endDrag}
                                    onPointerCancel={endDrag}
                                    onClick={(e) => e.stopPropagation()}
                                    onKeyDown={(e) => onKey(e, p)}
                                    onFocus={() => setSelected(p.id)}
                                >
                                    <img src={im.url} alt="" draggable={false} className="pointer-events-none h-full w-full" style={{ opacity: p.opacity }} />
                                    {isSel && (
                                        <>
                                            <button type="button" aria-label={t.remove} onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); removeP(p.id); }}
                                                className="absolute -right-4 -top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-canada-red text-white shadow">
                                                <X className="h-4 w-4" aria-hidden="true" />
                                            </button>
                                            <span
                                                data-testid="resize-handle"
                                                aria-hidden="true"
                                                className="absolute -bottom-4 -right-4 h-9 w-9 cursor-nwse-resize rounded-full border-4 border-white bg-canada-red shadow"
                                                style={{ touchAction: 'none' }}
                                                onPointerDown={(e) => startDrag(e, p, 'resize')}
                                                onPointerMove={onDragMove}
                                                onPointerUp={endDrag}
                                                onPointerCancel={endDrag}
                                            />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Selected placement controls */}
            {sel && (
                <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 p-3">
                    <div className="flex items-center gap-1">
                        <button type="button" className={navBtn} onClick={() => scaleSel(1 / 1.1)} aria-label={t.smaller} title={t.smaller}><Minus className="h-4 w-4" /></button>
                        <button type="button" className={navBtn} onClick={() => scaleSel(1.1)} aria-label={t.bigger} title={t.bigger}><Plus className="h-4 w-4" /></button>
                    </div>
                    <label className="flex min-h-10 flex-1 items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 min-w-48">
                        {t.opacity}
                        <input type="range" min={10} max={100} step={5} value={Math.round(sel.opacity * 100)} className="flex-1 accent-canada-red"
                            onChange={(e) => { const v = Number(e.target.value) / 100; setOpacity(v); update(sel.id, { opacity: v }); }} />
                        <span className="w-14 shrink-0 whitespace-nowrap text-right tabular-nums">{Math.round(sel.opacity * 100)} %</span>
                    </label>
                    <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        <input type="checkbox" className="h-5 w-5 accent-canada-red" checked={sel.page === 'all'} onChange={(e) => update(sel.id, { page: e.target.checked ? 'all' : pageNo })} />
                        {t.allPages}
                    </label>
                    <SecondaryButton onClick={() => removeP(sel.id)}><Trash2 className="h-4 w-4" aria-hidden="true" /> {t.remove}</SecondaryButton>
                </div>
            )}

            {/* List */}
            <div className="mt-4">
                <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.placements}</h2>
                {placements.length === 0 ? (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t.noPlacements}</p>
                ) : (
                    <ul className="mt-2 space-y-2">
                        {placements.map((p, i) => {
                            const im = imgById(p.imgId);
                            return (
                                <li key={p.id} className={`flex items-center gap-3 rounded-xl border p-2 ${p.id === selected ? 'border-canada-red' : 'border-gray-200 dark:border-gray-800'}`}>
                                    <button type="button" className="flex min-h-10 min-w-0 flex-1 items-center gap-3 text-left" onClick={() => { setSelected(p.id); if (p.page !== 'all') setPageNo(p.page); }}>
                                        {im && <img src={im.url} alt="" className="h-9 w-9 shrink-0 object-contain" />}
                                        <span className="min-w-0 truncate text-sm text-gray-800 dark:text-gray-200">#{i + 1} · {p.page === 'all' ? t.everyPage : t.onPage(p.page)} · {Math.round(p.opacity * 100)} %</span>
                                    </button>
                                    <button type="button" className={navBtn} onClick={() => removeP(p.id)} aria-label={`${t.remove} #${i + 1}`} title={t.remove}><Trash2 className="h-4 w-4" /></button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <PrimaryButton onClick={create} disabled={!placements.length || !!busy}><FileDown className="h-4 w-4" aria-hidden="true" /> {t.create}</PrimaryButton>
                {busy && <span className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</span>}
            </div>
            {result && <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.placed(placements.length)} onReset={reset} />}
        </Panel>
    );
}
