'use client';

/**
 * Flatten PDF, two modes:
 *  - "forms": form fields and visual annotations become ordinary page content (via their appearance
 *    streams, which pdf-lib (re)generates where missing). Text stays selectable; links are kept.
 *  - "images": every page is rendered with pdf.js at 150 DPI, saved as JPEG (quality 0.85) and placed on a
 *    new page of the same displayed size. Nothing interactive survives; text is no longer selectable.
 * Everything runs in the browser.
 */
import React, { useCallback, useState } from 'react';
import { FileText, Layers, Image as ImageIcon, Loader2 } from 'lucide-react';
import type { PDFDocument as PDFDocumentType, PDFDict as PDFDictType, PDFRef as PDFRefType, PDFStream as PDFStreamType, PDFObject } from 'pdf-lib';
import {
    Panel, Dropzone, ErrorBox, PrimaryButton, SecondaryButton, ResultCard, formatBytes, pdfBlob, baseName,
    yieldToBrowser, openPdf, renderPage, loadPdfLib, readErrorMessage, PdfReadError,
} from './shared';

type Lang = 'en' | 'fr';
type Mode = 'forms' | 'images';

const STR = {
    en: {
        change: 'Choose another file',
        pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
        found: (f: number, a: number) => `${f} form field${f === 1 ? '' : 's'} · ${a} annotation${a === 1 ? '' : 's'} (comments, highlights, stamps…)`,
        nothingInteractive: 'No form fields or annotations found. “Flatten to images” still works if you want pages that can’t be edited as text.',
        reading: 'Reading the file…',
        modeLabel: 'How to flatten',
        formsTitle: 'Flatten forms and annotations',
        formsDesc: 'Filled-in values, comments and stamps become part of the page. Text stays selectable; file size barely changes.',
        imagesTitle: 'Flatten to images',
        imagesDesc: 'Each page becomes a picture (150 DPI). Removes everything interactive, but text can no longer be selected or searched, and the file is usually larger.',
        flatten: 'Flatten PDF',
        working: 'Flattening…',
        page: (i: number, n: number) => `Page ${i} of ${n}`,
        saving: 'Saving…',
        doneForms: (f: number, a: number) => `${f} form field${f === 1 ? '' : 's'} and ${a} annotation${a === 1 ? '' : 's'} flattened`,
        doneImages: (n: number) => `${n} page${n === 1 ? '' : 's'} converted to images`,
        failedFields: (names: string) => `These fields had no visible appearance and could not be drawn, so their values were dropped: ${names}`,
        keptAnnots: (n: number) => `${n} annotation${n === 1 ? '' : 's'} without a drawable appearance (or a file attachment) were left as they were.`,
        uncertain: (names: string) => `These fields contain characters the built-in font can’t draw, so their existing appearance was used. Check them in the result: ${names}`,
        linksKept: 'Links are kept and still clickable.',
        failed: 'Something went wrong while flattening this file. Nothing was saved.',
        notPdf: 'Please choose a PDF file.',
        suffix: '-flattened',
    },
    fr: {
        change: 'Choisir un autre fichier',
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        found: (f: number, a: number) => `${f} champ${f > 1 ? 's' : ''} de formulaire · ${a} annotation${a > 1 ? 's' : ''} (commentaires, surlignages, tampons…)`,
        nothingInteractive: 'Aucun champ de formulaire ni aucune annotation. L’option « Aplatir en images » fonctionne quand même si vous voulez des pages dont le texte ne peut pas être modifié.',
        reading: 'Lecture du fichier…',
        modeLabel: 'Méthode d’aplatissement',
        formsTitle: 'Aplatir les formulaires et les annotations',
        formsDesc: 'Les valeurs saisies, les commentaires et les tampons font désormais partie de la page. Le texte reste sélectionnable; la taille change à peine.',
        imagesTitle: 'Aplatir en images',
        imagesDesc: 'Chaque page devient une image (150 PPP). Tout élément interactif disparaît, mais le texte ne peut plus être sélectionné ni recherché, et le fichier est généralement plus lourd.',
        flatten: 'Aplatir le PDF',
        working: 'Aplatissement en cours…',
        page: (i: number, n: number) => `Page ${i} sur ${n}`,
        saving: 'Enregistrement…',
        doneForms: (f: number, a: number) => `${f} champ${f > 1 ? 's' : ''} et ${a} annotation${a > 1 ? 's' : ''} aplati${f + a > 1 ? 's' : ''}`,
        doneImages: (n: number) => `${n} page${n > 1 ? 's' : ''} converties en images`,
        failedFields: (names: string) => `Ces champs n’avaient aucune apparence visible et n’ont pas pu être dessinés; leurs valeurs ont été retirées : ${names}`,
        keptAnnots: (n: number) => `${n} annotation${n > 1 ? 's' : ''} sans apparence dessinable (ou pièce jointe) ${n > 1 ? 'ont été laissées' : 'a été laissée'} telle${n > 1 ? 's' : ''} quelle${n > 1 ? 's' : ''}.`,
        uncertain: (names: string) => `Ces champs contiennent des caractères que la police intégrée ne peut pas dessiner; leur apparence existante a été utilisée. Vérifiez-les dans le résultat : ${names}`,
        linksKept: 'Les liens sont conservés et restent cliquables.',
        failed: 'Une erreur s’est produite pendant l’aplatissement. Aucun fichier n’a été créé.',
        notPdf: 'Veuillez choisir un fichier PDF.',
        suffix: '-aplati',
    },
};

/** Annotation subtypes that are drawn from their appearance stream and then removed. */
const FLATTENABLE = new Set(['Widget', 'Text', 'FreeText', 'Line', 'Square', 'Circle', 'Polygon', 'PolyLine', 'Highlight', 'Underline', 'Squiggly', 'StrikeOut', 'Stamp', 'Caret', 'Ink', 'Watermark']);
const IMAGE_DPI = 150;
const JPEG_QUALITY = 0.85;
const MAX_SIDE_PX = 6000;

type Info = { pages: number; fields: number; annots: number };
type Done = { blob: Blob; name: string; mode: Mode; fields: number; annots: number; pages: number; failed: string[]; uncertain: string[]; kept: number; links: number };

function looksLikePdf(bytes: Uint8Array): boolean {
    return new TextDecoder('latin1').decode(bytes.subarray(0, 1024)).includes('%PDF-');
}

/** Count terminal fields and non-link, non-popup annotations (what the user thinks of as "interactive stuff"). */
async function inspect(doc: PDFDocumentType): Promise<Info> {
    const { PDFName, PDFDict, PDFArray } = await import('pdf-lib');
    let fields = 0;
    if (doc.catalog.lookupMaybe(PDFName.of('AcroForm'), PDFDict)) {
        try { fields = doc.getForm().getFields().length; } catch { fields = 0; }
    }
    let annots = 0;
    for (const page of doc.getPages()) {
        const arr = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
        if (!arr) continue;
        for (let i = 0; i < arr.size(); i++) {
            const d = arr.lookup(i);
            if (!(d instanceof PDFDict)) continue;
            const st = d.get(PDFName.of('Subtype'))?.toString().slice(1);
            if (st && st !== 'Widget' && st !== 'Link' && st !== 'Popup') annots++;
        }
    }
    return { pages: doc.getPageCount(), fields, annots };
}

async function flattenForms(doc: PDFDocumentType, onPage: (i: number, n: number) => Promise<void>) {
    const lib = await import('pdf-lib');
    const { PDFName, PDFDict, PDFArray, PDFRef, PDFStream, PDFNumber, PDFBool, StandardFonts, PDFTextField, PDFDropdown, PDFOptionList } = lib;
    const ctx = doc.context;
    const catalog = doc.catalog;
    const acroForm = catalog.lookupMaybe(PDFName.of('AcroForm'), PDFDict);
    const failed: string[] = [];
    const uncertain: string[] = [];
    let fieldCount = 0;
    const widgetFieldName = new Map<PDFDictType, string>();

    // 1. Make sure every field has an up-to-date appearance stream (pdf-lib can only flatten what has one).
    if (acroForm) {
        try {
            const form = doc.getForm();
            const fields = form.getFields();
            fieldCount = fields.length;
            const needAll = acroForm.lookup(PDFName.of('NeedAppearances')) === PDFBool.True;
            let font: Awaited<ReturnType<PDFDocumentType['embedFont']>> | null = null;
            for (const f of fields) {
                for (const w of f.acroField.getWidgets()) widgetFieldName.set(w.dict, f.getName());
                const textLike = f instanceof PDFTextField || f instanceof PDFDropdown || f instanceof PDFOptionList;
                let needs = false;
                try { needs = (needAll && textLike) || f.needsAppearancesUpdate(); } catch { needs = false; }
                if (!needs) continue;
                try {
                    if (!font) font = await doc.embedFont(StandardFonts.Helvetica);
                    f.defaultUpdateAppearances(font);
                } catch {
                    // e.g. a value with characters Helvetica (WinAnsi) can't encode: keep any existing appearance,
                    // but tell the user to check it (the old appearance may be stale or garbled).
                    uncertain.push(f.getName());
                }
            }
        } catch {
            // Unusual AcroForm pdf-lib can't model: fall through and flatten whatever widgets have appearances.
        }
    }

    const DR = acroForm?.lookupMaybe(PDFName.of('DR'), PDFDict);
    const num = (o: unknown, d = 0) => (o instanceof PDFNumber ? o.asNumber() : d);

    /** Pick the normal appearance stream of an annotation (respecting /AS for checkboxes and radios). */
    const appearanceOf = (annot: PDFDictType): { ref: PDFRefType; stream: PDFStreamType } | null => {
        const ap = annot.lookupMaybe(PDFName.of('AP'), PDFDict);
        if (!ap) return null;
        let n = ap.get(PDFName.of('N'));
        let nObj = n instanceof PDFRef ? ctx.lookup(n) : n;
        if (nObj instanceof PDFDict && !(nObj instanceof PDFStream)) {
            const as = annot.get(PDFName.of('AS'));
            const state = as instanceof lib.PDFName ? as : undefined;
            if (!state) return null;
            n = nObj.get(state);
            nObj = n instanceof PDFRef ? ctx.lookup(n) : n;
        }
        if (!(nObj instanceof PDFStream)) return null;
        const ref = n instanceof PDFRef ? n : ctx.register(nObj);
        return { ref, stream: nObj };
    };

    const removed = new Set<string>();
    const removedRefs: PDFRefType[] = [];
    let annotCount = 0;
    let kept = 0;
    let links = 0;
    const pages = doc.getPages();

    for (let p = 0; p < pages.length; p++) {
        const page = pages[p];
        const annots = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
        if (annots && annots.size()) {
            const keepList: PDFObject[] = [];
            const popups: { item: PDFObject; parent: unknown }[] = [];
            let pageNormalized = false;
            for (let i = 0; i < annots.size(); i++) {
                const item = annots.get(i);
                const dict = item instanceof PDFRef ? ctx.lookup(item) : item;
                if (!(dict instanceof PDFDict)) continue; // drop nulls / broken entries
                const subtype = dict.get(PDFName.of('Subtype'))?.toString().slice(1) ?? '';
                if (subtype === 'Popup') { popups.push({ item, parent: dict.get(PDFName.of('Parent')) }); continue; }
                if (subtype === 'Link') links++;
                if (!FLATTENABLE.has(subtype)) { keepList.push(item); if (subtype !== 'Link') kept++; continue; }
                const flags = num(dict.get(PDFName.of('F')));
                const invisible = (flags & 2) !== 0 || (flags & 32) !== 0; // Hidden or NoView
                const isWidget = subtype === 'Widget';
                const app = invisible ? null : appearanceOf(dict);
                if (!app) {
                    if (isWidget) {
                        // A widget nothing can be drawn for: remove it with the form; note it if it held a value.
                        const name = widgetFieldName.get(dict);
                        const v = dict.get(PDFName.of('V')) ?? (dict.lookupMaybe(PDFName.of('Parent'), PDFDict)?.get(PDFName.of('V')));
                        const vs = v?.toString() ?? '';
                        if (!invisible && name && vs && vs !== '()' && vs !== '<>' && vs !== '/Off' && !failed.includes(name)) failed.push(name);
                        if (item instanceof PDFRef) { removed.add(item.toString()); removedRefs.push(item); }
                        continue;
                    }
                    if (invisible) { keepList.push(item); kept++; continue; }
                    keepList.push(item); kept++; continue; // markup without appearance: leave it interactive
                }
                // Appearance streams that rely on the form's default resources get them explicitly.
                if (!app.stream.dict.has(PDFName.of('Resources')) && DR) app.stream.dict.set(PDFName.of('Resources'), DR);
                const rect = dict.lookupMaybe(PDFName.of('Rect'), PDFArray);
                if (rect && rect.size() === 4) {
                    const r = [0, 1, 2, 3].map((k) => num(rect.lookup(k)));
                    const rx1 = Math.min(r[0], r[2]), rx2 = Math.max(r[0], r[2]);
                    const ry1 = Math.min(r[1], r[3]), ry2 = Math.max(r[1], r[3]);
                    const bboxArr = app.stream.dict.lookupMaybe(PDFName.of('BBox'), PDFArray);
                    const bb = bboxArr && bboxArr.size() === 4 ? [0, 1, 2, 3].map((k) => num(bboxArr.lookup(k))) : [0, 0, rx2 - rx1, ry2 - ry1];
                    const mArr = app.stream.dict.lookupMaybe(PDFName.of('Matrix'), PDFArray);
                    const m = mArr && mArr.size() === 6 ? [0, 1, 2, 3, 4, 5].map((k) => num(mArr.lookup(k))) : [1, 0, 0, 1, 0, 0];
                    // PDF 32000-1 §12.5.5: map the Matrix-transformed BBox onto Rect.
                    const corners = [[bb[0], bb[1]], [bb[2], bb[1]], [bb[0], bb[3]], [bb[2], bb[3]]].map(([x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]);
                    const xs = corners.map((c) => c[0]), ys = corners.map((c) => c[1]);
                    const bx1 = Math.min(...xs), bx2 = Math.max(...xs), by1 = Math.min(...ys), by2 = Math.max(...ys);
                    const bw = bx2 - bx1, bh = by2 - by1;
                    if (bw > 0 && bh > 0 && rx2 > rx1 && ry2 > ry1) {
                        const sx = (rx2 - rx1) / bw, sy = (ry2 - ry1) / bh;
                        if (!pageNormalized) { page.node.normalize(); pageNormalized = true; }
                        const xName = page.node.newXObject('Flat', app.ref);
                        page.pushOperators(
                            lib.pushGraphicsState(),
                            lib.concatTransformationMatrix(sx, 0, 0, sy, rx1 - bx1 * sx, ry1 - by1 * sy),
                            lib.drawObject(xName),
                            lib.popGraphicsState(),
                        );
                    }
                }
                if (!isWidget) annotCount++;
                if (item instanceof PDFRef) { removed.add(item.toString()); removedRefs.push(item); }
            }
            for (const pp of popups) {
                const parentGone = pp.parent instanceof PDFRef ? removed.has(pp.parent.toString()) : true;
                if (parentGone) { if (pp.item instanceof PDFRef) removedRefs.push(pp.item); } else keepList.push(pp.item);
            }
            if (keepList.length) page.node.set(PDFName.of('Annots'), ctx.obj(keepList));
            else page.node.delete(PDFName.of('Annots'));
        }
        if (p % 10 === 9) await onPage(p + 1, pages.length);
    }

    // 2. Remove the form itself (fields, XFA) so nothing interactive is left behind.
    if (acroForm) {
        const fieldRefs: PDFRefType[] = [];
        const seen = new Set<string>();
        const walk = (arr: unknown) => {
            if (!(arr instanceof PDFArray)) return;
            for (let i = 0; i < arr.size(); i++) {
                const ref = arr.get(i);
                if (!(ref instanceof PDFRef) || seen.has(ref.toString())) continue;
                seen.add(ref.toString());
                fieldRefs.push(ref);
                const d = ctx.lookup(ref);
                if (d instanceof PDFDict) walk(d.lookup(PDFName.of('Kids')));
            }
        };
        walk(acroForm.lookup(PDFName.of('Fields')));
        const xfa = acroForm.get(PDFName.of('XFA'));
        const xfaObj = xfa instanceof PDFRef ? ctx.lookup(xfa) : xfa;
        if (xfaObj instanceof PDFArray) for (let i = 0; i < xfaObj.size(); i++) { const r = xfaObj.get(i); if (r instanceof PDFRef) ctx.delete(r); }
        if (xfa instanceof PDFRef) ctx.delete(xfa);
        acroForm.set(PDFName.of('Fields'), ctx.obj([]));
        const afRef = catalog.get(PDFName.of('AcroForm'));
        catalog.delete(PDFName.of('AcroForm'));
        if (afRef instanceof PDFRef) ctx.delete(afRef);
        for (const r of fieldRefs) ctx.delete(r);
    }
    for (const r of removedRefs) ctx.delete(r);

    return { fields: fieldCount, annots: annotCount, failed, uncertain: uncertain.filter((n) => !failed.includes(n)), kept, links };
}

export default function FlattenPdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [file, setFile] = useState<File | null>(null);
    const [bytes, setBytes] = useState<Uint8Array | null>(null);
    const [info, setInfo] = useState<Info | null>(null);
    const [mode, setMode] = useState<Mode>('forms');
    const [busy, setBusy] = useState(false);
    const [reading, setReading] = useState(false);
    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState<Done | null>(null);

    const reset = useCallback(() => {
        setFile(null); setBytes(null); setInfo(null); setError(''); setResult(null); setProgress(''); setBusy(false);
    }, []);

    const onFiles = useCallback(async (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setError(''); setResult(null); setFile(null); setBytes(null); setInfo(null);
        setReading(true);
        try {
            const data = new Uint8Array(await f.arrayBuffer());
            if (!looksLikePdf(data)) { setError(/\.pdf$/i.test(f.name) ? readErrorMessage(null, lang) : t.notPdf); return; }
            const doc = await loadPdfLib(data);
            let i: Info;
            try { i = await inspect(doc); } catch { throw new PdfReadError('damaged'); }
            if (i.pages === 0) throw new PdfReadError('damaged');
            setInfo(i); setBytes(data); setFile(f);
            if (i.fields === 0 && i.annots === 0) setMode('images');
            else setMode('forms');
        } catch (e) {
            const n = (e as { name?: string })?.name;
            setError(readErrorMessage(e instanceof PdfReadError || n === 'PasswordException' ? e : new PdfReadError('damaged'), lang));
        } finally {
            setReading(false);
        }
    }, [lang, t]);

    const run = useCallback(async () => {
        if (!bytes || !file) return;
        setError(''); setBusy(true); setProgress(t.working);
        await yieldToBrowser();
        const name = `${baseName(file.name)}${t.suffix}.pdf`;
        try {
            if (mode === 'forms') {
                const doc = await loadPdfLib(bytes);
                const r = await flattenForms(doc, async (i, n) => { setProgress(t.page(i, n)); await yieldToBrowser(); });
                setProgress(t.saving); await yieldToBrowser();
                const out = await doc.save({ updateFieldAppearances: false });
                setResult({ blob: pdfBlob(out), name, mode, fields: r.fields, annots: r.annots, pages: doc.getPageCount(), failed: r.failed, uncertain: r.uncertain, kept: r.kept, links: r.links });
            } else {
                const pdf = await openPdf(bytes);
                const { PDFDocument } = await import('pdf-lib');
                const out = await PDFDocument.create();
                const n = pdf.numPages;
                for (let i = 1; i <= n; i++) {
                    setProgress(t.page(i, n));
                    await yieldToBrowser();
                    const page = await pdf.getPage(i);
                    const vp = page.getViewport({ scale: 1 }); // displayed size in points (crop box, /Rotate applied)
                    let scale = IMAGE_DPI / 72;
                    const longest = Math.max(vp.width, vp.height) * scale;
                    if (longest > MAX_SIDE_PX) scale *= MAX_SIDE_PX / longest;
                    const canvas = await renderPage(pdf, i, scale);
                    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', JPEG_QUALITY));
                    canvas.width = 0; canvas.height = 0;
                    if (!blob) throw new Error('jpeg');
                    const img = await out.embedJpg(new Uint8Array(await blob.arrayBuffer()));
                    const np = out.addPage([vp.width, vp.height]);
                    np.drawImage(img, { x: 0, y: 0, width: vp.width, height: vp.height });
                }
                await pdf.destroy();
                setProgress(t.saving); await yieldToBrowser();
                const saved = await out.save();
                setResult({ blob: pdfBlob(saved), name, mode, fields: info?.fields ?? 0, annots: info?.annots ?? 0, pages: n, failed: [], uncertain: [], kept: 0, links: 0 });
            }
        } catch (e) {
            const n = (e as { name?: string })?.name;
            setError(e instanceof PdfReadError || n === 'PasswordException' || n === 'InvalidPDFException' ? readErrorMessage(e, lang) : t.failed);
        } finally {
            setBusy(false); setProgress('');
        }
    }, [bytes, file, mode, info, lang, t]);

    const option = (m: Mode, title: string, desc: string, Icon: typeof Layers) => (
        <label className={`flex gap-3 rounded-2xl border-2 p-4 cursor-pointer transition-colors ${mode === m ? 'border-canada-red bg-red-50/60 dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-800 hover:border-canada-red/50'}`}>
            <input type="radio" name="flatten-mode" value={m} checked={mode === m} onChange={() => setMode(m)} className="mt-1 h-5 w-5 accent-canada-red shrink-0" />
            <span className="min-w-0">
                <span className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100"><Icon className="h-4 w-4 text-canada-red" aria-hidden="true" />{title}</span>
                <span className="block mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</span>
            </span>
        </label>
    );

    return (
        <Panel>
            {!file && (
                <>
                    <Dropzone lang={lang} onFiles={onFiles} />
                    {reading && <p className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{t.reading}</p>}
                    <ErrorBox>{error}</ErrorBox>
                </>
            )}

            {file && info && !result && (
                <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                        <FileText className="h-6 w-6 text-canada-red shrink-0" aria-hidden="true" />
                        <div className="min-w-0 flex-1 basis-40">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{formatBytes(file.size, lang)} · {t.pages(info.pages)}</p>
                        </div>
                        <SecondaryButton onClick={reset} disabled={busy} className="w-full sm:w-auto">{t.change}</SecondaryButton>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        {info.fields === 0 && info.annots === 0 ? t.nothingInteractive : t.found(info.fields, info.annots)}
                    </p>

                    <fieldset className="space-y-3">
                        <legend className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{t.modeLabel}</legend>
                        {option('forms', t.formsTitle, t.formsDesc, Layers)}
                        {option('images', t.imagesTitle, t.imagesDesc, ImageIcon)}
                    </fieldset>

                    <ErrorBox>{error}</ErrorBox>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <PrimaryButton onClick={run} disabled={busy} className="w-full sm:w-auto">
                            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Layers className="h-4 w-4" aria-hidden="true" />}
                            {busy ? t.working : t.flatten}
                        </PrimaryButton>
                        {busy && progress && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{progress}</p>}
                    </div>
                </div>
            )}

            {result && (
                <>
                    <ResultCard
                        lang={lang}
                        blob={result.blob}
                        name={result.name}
                        note={result.mode === 'forms' ? t.doneForms(result.fields, result.annots) : t.doneImages(result.pages)}
                        onReset={reset}
                    />
                    <div className="mt-3 space-y-2 text-sm">
                        {result.mode === 'forms' && result.links > 0 && <p className="text-gray-600 dark:text-gray-400">{t.linksKept}</p>}
                        {result.kept > 0 && <p className="text-gray-600 dark:text-gray-400">{t.keptAnnots(result.kept)}</p>}
                        {result.uncertain.length > 0 && <p className="text-amber-800 dark:text-amber-300">{t.uncertain(result.uncertain.join(', '))}</p>}
                        {result.failed.length > 0 && <p className="text-amber-800 dark:text-amber-300">{t.failedFields(result.failed.join(', '))}</p>}
                    </div>
                </>
            )}
        </Panel>
    );
}
