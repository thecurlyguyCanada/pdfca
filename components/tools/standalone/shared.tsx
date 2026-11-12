'use client';

/**
 * Shared building blocks for the self-contained tools in this folder (playbook wave 3). Each tool is a
 * default-exported component taking { lang } and owning its whole UI: drop zone, options, progress,
 * result and download. Everything runs in the browser; nothing is uploaded.
 */
import React, { useCallback, useState } from 'react';
import type { DragEvent, ReactNode } from 'react';
import { UploadCloud, AlertTriangle, Download } from 'lucide-react';
import type * as PdfJsLib from 'pdfjs-dist';
import { PDFJS_WORKER, PDFJS_CMAPS, PDFJS_FONTS } from '@/config/vendor';

export type Lang = 'en' | 'fr';
export const asLang = (l: string): Lang => (l === 'fr' ? 'fr' : 'en');

const UI = {
    en: { drop: 'Drop your PDF here', drops: 'Drop your PDFs here', browse: 'or click to choose a file', browses: 'or click to choose files', download: 'Download', again: 'Start over', encrypted: 'This PDF is password-protected. Remove the password first, then try again.', damaged: 'This file could not be read as a PDF. It may be damaged or not a PDF.' },
    fr: { drop: 'Déposez votre PDF ici', drops: 'Déposez vos PDF ici', browse: 'ou cliquez pour choisir un fichier', browses: 'ou cliquez pour choisir des fichiers', download: 'Télécharger', again: 'Recommencer', encrypted: 'Ce PDF est protégé par un mot de passe. Retirez d’abord le mot de passe, puis réessayez.', damaged: 'Ce fichier n’a pas pu être lu comme un PDF. Il est peut-être endommagé.' },
};
export const ui = (lang: Lang) => UI[lang];

export function Dropzone({ lang, onFiles, accept = '.pdf,application/pdf', multiple = false, label, hint, capture }: {
    lang: Lang; onFiles: (files: File[]) => void; accept?: string; multiple?: boolean; label?: string; hint?: string; capture?: 'environment' | 'user';
}) {
    const [drag, setDrag] = useState(false);
    const t = ui(lang);
    const onDrop = useCallback((e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDrag(false);
        if (e.dataTransfer.files?.length) onFiles(Array.from(e.dataTransfer.files));
    }, [onFiles]);
    return (
        <label
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
            className={`flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed px-4 py-10 md:py-14 text-center cursor-pointer transition-colors ${drag ? 'border-canada-red bg-red-50 dark:bg-red-500/10' : 'border-gray-300 dark:border-gray-700 hover:border-canada-red/60 bg-white/70 dark:bg-gray-900/60'}`}
        >
            <UploadCloud className="h-10 w-10 text-canada-red" aria-hidden="true" />
            <span className="font-bold text-gray-900 dark:text-gray-100">{label ?? (multiple ? t.drops : t.drop)}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{hint ?? (multiple ? t.browses : t.browse)}</span>
            <input
                type="file"
                accept={accept}
                multiple={multiple}
                {...(capture ? { capture } : {})}
                className="sr-only"
                onChange={(e) => { if (e.target.files?.length) onFiles(Array.from(e.target.files)); e.target.value = ''; }}
            />
        </label>
    );
}

export function Panel({ children }: { children: ReactNode }) {
    return <div className="rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 shadow-sm p-4 md:p-8">{children}</div>;
}

export function ErrorBox({ children }: { children: ReactNode }) {
    if (!children) return null;
    return (
        <p role="alert" className="mt-4 flex items-start gap-2 text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-500/10 rounded-xl px-4 py-3">
            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" /> <span>{children}</span>
        </p>
    );
}

export function PrimaryButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="button" {...props} className={`inline-flex items-center justify-center gap-2 rounded-full bg-canada-red text-white px-7 py-3 font-bold hover:bg-canada-red-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${props.className ?? ''}`}>
            {children}
        </button>
    );
}

export function SecondaryButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="button" {...props} className={`inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-canada-red hover:text-canada-red disabled:opacity-40 transition-colors ${props.className ?? ''}`}>
            {children}
        </button>
    );
}

/** A finished file: name, size and a Download button (never auto-downloads, so the user sees the result first). */
export function ResultCard({ lang, blob, name, note, onReset }: { lang: Lang; blob: Blob; name: string; note?: ReactNode; onReset?: () => void }) {
    const t = ui(lang);
    return (
        <div className="mt-6 rounded-2xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/20 p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div className="min-w-0">
                <p className="font-bold text-gray-900 dark:text-gray-100 truncate">{name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{formatBytes(blob.size, lang)}{note ? <> · {note}</> : null}</p>
            </div>
            <div className="flex gap-2 shrink-0">
                <PrimaryButton onClick={() => downloadBlob(blob, name)}><Download className="h-4 w-4" aria-hidden="true" /> {t.download}</PrimaryButton>
                {onReset && <SecondaryButton onClick={onReset}>{t.again}</SecondaryButton>}
            </div>
        </div>
    );
}

export function formatBytes(bytes: number, lang: Lang = 'en'): string {
    const unit = lang === 'fr' ? { kb: 'Ko', mb: 'Mo' } : { kb: 'KB', mb: 'MB' };
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} ${unit.kb}`;
    const mb = (bytes / (1024 * 1024)).toFixed(bytes < 10 * 1024 * 1024 ? 2 : 1);
    return `${lang === 'fr' ? mb.replace('.', ',') : mb} ${unit.mb}`;
}

export function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export const pdfBlob = (bytes: Uint8Array) => new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
export const baseName = (name: string) => name.replace(/\.[^.]+$/, '');
export const yieldToBrowser = () => new Promise((r) => setTimeout(r, 0));

let pdfjsPromise: Promise<typeof PdfJsLib> | null = null;
export function loadPdfjs(): Promise<typeof PdfJsLib> {
    if (!pdfjsPromise) {
        pdfjsPromise = import('pdfjs-dist').then((pdfjs) => {
            pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
            return pdfjs;
        });
    }
    return pdfjsPromise;
}

/** Open with pdf.js (self-hosted worker, cMaps, fonts). Passes a copy, since pdf.js transfers the buffer. */
export async function openPdf(data: ArrayBuffer | Uint8Array, password?: string): Promise<PdfJsLib.PDFDocumentProxy> {
    const pdfjs = await loadPdfjs();
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    return pdfjs.getDocument({ data: bytes.slice(), password, cMapUrl: PDFJS_CMAPS, cMapPacked: true, standardFontDataUrl: PDFJS_FONTS, isEvalSupported: false }).promise;
}

/** Render a page (as displayed, including its /Rotate) to a canvas on white. */
export async function renderPage(pdf: PdfJsLib.PDFDocumentProxy, pageNumber: number, scale: number): Promise<HTMLCanvasElement> {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.floor(viewport.width));
    canvas.height = Math.max(1, Math.floor(viewport.height));
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport }).promise;
    page.cleanup();
    return canvas;
}

/** Render a page to a small PNG data URL for previews. */
export async function thumbnail(pdf: PdfJsLib.PDFDocumentProxy, pageNumber: number, maxWidth = 240): Promise<string> {
    const page = await pdf.getPage(pageNumber);
    const vp = page.getViewport({ scale: 1 });
    const canvas = await renderPage(pdf, pageNumber, maxWidth / vp.width);
    const url = canvas.toDataURL('image/png');
    canvas.width = 0; canvas.height = 0;
    return url;
}

export class PdfReadError extends Error {
    constructor(public kind: 'encrypted' | 'damaged') { super(kind); }
}

/** Load with pdf-lib, refusing encrypted files (pdf-lib can't decrypt; ignoreEncryption would write garbage). */
export async function loadPdfLib(data: ArrayBuffer | Uint8Array) {
    const { PDFDocument } = await import('pdf-lib');
    let doc;
    try {
        doc = await PDFDocument.load(data, { ignoreEncryption: true, updateMetadata: false });
    } catch {
        throw new PdfReadError('damaged');
    }
    if (doc.isEncrypted) throw new PdfReadError('encrypted');
    return doc;
}

export function readErrorMessage(e: unknown, lang: Lang): string {
    const t = ui(lang);
    if (e instanceof PdfReadError) return e.kind === 'encrypted' ? t.encrypted : t.damaged;
    const name = (e as { name?: string })?.name;
    if (name === 'PasswordException') return t.encrypted;
    if (name === 'InvalidPDFException') return t.damaged;
    return e instanceof Error && e.message ? e.message : t.damaged;
}
