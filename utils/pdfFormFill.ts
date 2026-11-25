/**
 * Fill PDF form: reads the AcroForm fields of a PDF and writes values into them, in the browser.
 *
 * Uses @cantoo/pdf-lib (the pdf-lib fork already used by Protect PDF) because it can open PDFs that carry only an
 * owner password, which is how many government fillable forms are distributed (Ontario's forms repository, for
 * one: AES-128, "filling form fields" allowed, "changing the document" not). Plain pdf-lib refuses those files.
 * Such a file is filled only when its permissions allow form filling, and the filled copy is saved without
 * encryption: re-encrypting with the fork garbled field names on a real Ontario form (Nov 2026 test), and a
 * filled form that won't open is worse than one without the author's edit restriction.
 *
 * XFA: a form whose only content is XFA (dynamic, e.g. IRCC forms) cannot be filled here and is reported as such.
 * A hybrid form (XFA plus a full set of AcroForm fields) is filled through its AcroForm fields; the XFA layer is
 * removed so every viewer shows the values (with XFA present, Adobe Reader would show the XFA data instead).
 */
import type { PDFDocument as PDFDocumentT, PDFField as PDFFieldT, PDFFont as PDFFontT } from '@cantoo/pdf-lib';

export type FieldKind = 'text' | 'multiline' | 'checkbox' | 'radio' | 'dropdown' | 'optionlist' | 'button' | 'signature';
export type FieldValue = string | boolean | string[];

export interface WidgetBox { page: number; x: number; y: number; w: number; h: number } // fractions of the page (0–1, top-left origin)

export interface FormFieldInfo {
    name: string;          // fully qualified field name (unique key)
    label: string;         // tooltip (/TU) when the form has one, else a readable version of the name
    kind: FieldKind;
    pages: number[];       // 1-based pages the field's widgets are on
    boxes: WidgetBox[];
    readOnly: boolean;
    required: boolean;
    maxLength?: number;
    comb?: boolean;
    options?: string[];    // radio export values, dropdown / list options
    multiSelect?: boolean;
    editable?: boolean;    // combo box that accepts free text
    value: FieldValue;     // current value in the file
}

export interface FormInspection {
    pageCount: number;
    fields: FormFieldInfo[];
    /** 'hybrid': XFA plus usable AcroForm fields (fillable here, XFA removed); 'only': fields exist only in XFA, or nothing to fill (not fillable here). */
    xfa: 'none' | 'hybrid' | 'only';
    /** The catalog asks for XFA rendering: the pages are only a placeholder ("Please wait…", "requires Adobe Reader 8"). */
    needsRendering: boolean;
    encrypted: boolean;
    /** The file's permissions forbid changing the document (flattening would change it). */
    noModify: boolean;
}

export class FormFillError extends Error {
    constructor(public kind: 'damaged' | 'password' | 'fill-not-allowed') { super(kind); }
}

type Lib = typeof import('@cantoo/pdf-lib');
let libPromise: Promise<Lib> | null = null;
const loadLib = () => (libPromise ??= import('@cantoo/pdf-lib'));

/** Encryption info read without decrypting. P is the permission bit field (PDF 32000-1 Table 22). */
async function readEncryption(lib: Lib, bytes: Uint8Array): Promise<{ encrypted: boolean; P: number; R: number }> {
    let raw: PDFDocumentT;
    try {
        raw = await lib.PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
    } catch {
        throw new FormFillError('damaged');
    }
    const enc = raw.context.lookup(raw.context.trailerInfo.Encrypt);
    if (!(enc instanceof lib.PDFDict)) return { encrypted: false, P: -1, R: 0 };
    const num = (k: string, d: number) => { const v = enc.lookup(lib.PDFName.of(k)); return v instanceof lib.PDFNumber ? v.asNumber() : d; };
    return { encrypted: true, P: num('P', -1), R: num('R', 2) };
}

/** Open the document; encrypted files are tried with the empty open password (owner-password-only files). */
async function openDoc(lib: Lib, bytes: Uint8Array, encrypted: boolean): Promise<PDFDocumentT> {
    let doc: PDFDocumentT;
    try {
        doc = await lib.PDFDocument.load(bytes, encrypted ? { password: '', updateMetadata: false } : { updateMetadata: false });
    } catch {
        throw new FormFillError(encrypted ? 'password' : 'damaged');
    }
    if (encrypted) {
        // After decryption the old cross-reference streams (they carry /Encrypt) remain as unparsed objects; written
        // back out they break the file for pdf-lib. Nothing references them, so drop them.
        for (const [ref, obj] of doc.context.enumerateIndirectObjects()) {
            if (obj instanceof lib.PDFInvalidObject) doc.context.delete(ref);
        }
        const enc = doc.context.trailerInfo.Encrypt;
        if (enc instanceof lib.PDFRef) doc.context.delete(enc);
        doc.context.trailerInfo.Encrypt = undefined;
    }
    return doc;
}

/** Font size from a /DA string ("/Helv 0 Tf 0 g" → 0); undefined when absent. */
function daFontSize(da: string | undefined): number | undefined {
    const m = da?.match(/(-?\d+(?:\.\d+)?)\s+Tf/);
    return m ? parseFloat(m[1]) : undefined;
}

/** Largest size (12 → 6 pt) at which `text`, word-wrapped, fits a box. pdf-lib's own "auto" size for multiline
 *  fields ignores the height and produced 87 pt text in a 100 pt box when tested. */
function fitMultiline(font: PDFFontT, text: string, width: number, height: number): number {
    for (let size = 12; size > 6; size -= 0.5) {
        const lineH = font.heightAtSize(size) * 1.15;
        let lines = 0;
        for (const para of text.split(/\r?\n/)) {
            let line = '';
            lines++;
            for (const word of para.split(' ')) {
                const next = line ? `${line} ${word}` : word;
                if (font.widthOfTextAtSize(next, size) > width && line) { lines++; line = word; } else line = next;
            }
        }
        if (lines * lineH <= height) return size;
    }
    return 6;
}

const decodeText = (lib: Lib, o: unknown): string => {
    if (o instanceof lib.PDFString || o instanceof lib.PDFHexString) return o.decodeText();
    return '';
};

/** "form1[0].page1[0].sectionA[0].lastName[0]" → "last Name"; "Line_101_Amount" → "Line 101 Amount". */
export function readableName(name: string): string {
    const last = name.split('.').filter(Boolean).pop() ?? name;
    const s = last.replace(/\[\d+\]/g, '').replace(/[_#]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, ' ').trim();
    return s || name;
}

function kindOf(lib: Lib, f: PDFFieldT): FieldKind | null {
    if (f instanceof lib.PDFTextField) return f.isMultiline() ? 'multiline' : 'text';
    if (f instanceof lib.PDFCheckBox) return 'checkbox';
    if (f instanceof lib.PDFRadioGroup) return 'radio';
    if (f instanceof lib.PDFDropdown) return 'dropdown';
    if (f instanceof lib.PDFOptionList) return 'optionlist';
    if (f instanceof lib.PDFButton) return 'button';
    if (f instanceof lib.PDFSignature) return 'signature';
    return null;
}

function currentValue(lib: Lib, f: PDFFieldT): FieldValue {
    try {
        if (f instanceof lib.PDFTextField) return f.getText() ?? '';
        if (f instanceof lib.PDFCheckBox) return f.isChecked();
        if (f instanceof lib.PDFRadioGroup) return f.getSelected() ?? '';
        if (f instanceof lib.PDFDropdown) return f.getSelected()[0] ?? '';
        if (f instanceof lib.PDFOptionList) return f.getSelected();
    } catch { /* unusual value object: treat as empty */ }
    return '';
}

/** Where each widget sits, as fractions of its page's crop box, top-left origin (for highlighting on a thumbnail). */
function widgetBoxes(lib: Lib, doc: PDFDocumentT, f: PDFFieldT, pageIndexByRef: Map<string, number>): { pages: number[]; boxes: WidgetBox[] } {
    const pages = new Set<number>();
    const boxes: WidgetBox[] = [];
    const docPages = doc.getPages();
    for (const w of f.acroField.getWidgets()) {
        let idx: number | undefined;
        const pRef = w.dict.get(lib.PDFName.of('P'));
        if (pRef instanceof lib.PDFRef) idx = pageIndexByRef.get(pRef.toString());
        if (idx === undefined) {
            const ref = doc.context.getObjectRef(w.dict);
            if (ref) {
                const page = doc.findPageForAnnotationRef(ref);
                if (page) idx = docPages.indexOf(page);
            }
        }
        if (idx === undefined || idx < 0) continue;
        pages.add(idx + 1);
        const page = docPages[idx];
        if (page.getRotation().angle % 360 !== 0) continue; // a box on a rotated page would need a transform; skip the highlight
        try {
            const r = w.getRectangle();
            const cb = page.getCropBox();
            if (cb.width <= 0 || cb.height <= 0 || r.width <= 0 || r.height <= 0) continue;
            boxes.push({
                page: idx + 1,
                x: (r.x - cb.x) / cb.width,
                y: 1 - (r.y + r.height - cb.y) / cb.height,
                w: r.width / cb.width,
                h: r.height / cb.height,
            });
        } catch { /* no usable /Rect */ }
    }
    return { pages: [...pages].sort((a, b) => a - b), boxes };
}

export async function inspectForm(bytes: Uint8Array): Promise<FormInspection> {
    const lib = await loadLib();
    const { encrypted, P, R } = await readEncryption(lib, bytes);
    if (encrypted) {
        // Filling is allowed when bit 9 (fill forms, R ≥ 3) or bit 6 (annotations and forms) is set.
        const canFill = (P & 32) !== 0 || (R >= 3 && (P & 256) !== 0);
        const doc = await openDoc(lib, bytes, true); // throws 'password' when an open password is needed
        if (!canFill) throw new FormFillError('fill-not-allowed');
        return describe(lib, doc, true, (P & 8) === 0);
    }
    const doc = await openDoc(lib, bytes, false);
    return describe(lib, doc, false, false);
}

function describe(lib: Lib, doc: PDFDocumentT, encrypted: boolean, noModify: boolean): FormInspection {
    const { PDFName, PDFDict, PDFBool } = lib;
    const pageCount = doc.getPageCount();
    if (pageCount === 0) throw new FormFillError('damaged');
    const acro = doc.catalog.lookupMaybe(PDFName.of('AcroForm'), PDFDict);
    const hasXfa = !!acro?.get(PDFName.of('XFA'));
    const needsRendering = doc.catalog.lookup(PDFName.of('NeedsRendering')) === PDFBool.True;
    const fields: FormFieldInfo[] = [];
    if (acro && !needsRendering) {
        const pageIndexByRef = new Map<string, number>();
        doc.getPages().forEach((p, i) => pageIndexByRef.set(p.ref.toString(), i));
        let all: PDFFieldT[] = [];
        // getForm() strips XFA from the in-memory document; this copy is only read, never saved.
        try { all = doc.getForm().getFields(); } catch { all = []; }
        for (const f of all) {
            const kind = kindOf(lib, f);
            if (!kind) continue;
            const { pages, boxes } = widgetBoxes(lib, doc, f, pageIndexByRef);
            if (pages.length === 0) continue; // a field with no widget on any page can't be seen or filled
            const tu = decodeText(lib, f.acroField.dict.lookup(PDFName.of('TU')));
            const info: FormFieldInfo = {
                name: f.getName(),
                label: tu.trim() || readableName(f.getName()),
                kind, pages, boxes,
                readOnly: f.isReadOnly(),
                required: f.isRequired(),
                value: currentValue(lib, f),
            };
            if (f instanceof lib.PDFTextField) {
                const m = f.getMaxLength();
                if (m !== undefined) info.maxLength = m;
                info.comb = f.isCombed();
            } else if (f instanceof lib.PDFRadioGroup) {
                info.options = f.getOptions();
            } else if (f instanceof lib.PDFDropdown) {
                info.options = f.getOptions();
                info.editable = f.isEditable();
                info.multiSelect = false;
            } else if (f instanceof lib.PDFOptionList) {
                info.options = f.getOptions();
                info.multiSelect = f.isMultiselect();
            }
            fields.push(info);
        }
    }
    const fillable = fields.some((f) => f.kind !== 'button' && f.kind !== 'signature');
    const xfa: FormInspection['xfa'] = !hasXfa && !needsRendering ? 'none' : fillable && !needsRendering ? 'hybrid' : 'only';
    // Fields in page order, then row by row (tops within 1% of the page height count as one row), left to right,
    // so the list reads like the form: "Last name, First name, Middle name" rather than by a 0.5 pt difference.
    const firstBox = (f: FormFieldInfo) => f.boxes.find((b) => b.page === f.pages[0]);
    fields.sort((a, b) => {
        if (a.pages[0] !== b.pages[0]) return a.pages[0] - b.pages[0];
        const ba = firstBox(a), bb = firstBox(b);
        if (!ba || !bb) return 0;
        return Math.abs(ba.y - bb.y) > 0.01 ? ba.y - bb.y : ba.x - bb.x;
    });
    return { pageCount, fields, xfa, needsRendering, encrypted, noModify };
}

/** The code points standard Helvetica (WinAnsi) can draw: é, œ, « », ’ and € yes; Ł, CJK, emoji no. */
let charsetPromise: Promise<Set<number>> | null = null;
export async function helveticaCharset(): Promise<Set<number>> {
    if (!charsetPromise) {
        charsetPromise = (async () => {
            const lib = await loadLib();
            const doc = await lib.PDFDocument.create();
            const font = await doc.embedFont(lib.StandardFonts.Helvetica);
            return new Set(font.getCharacterSet());
        })();
    }
    return charsetPromise;
}

export function unsupportedChars(text: string, charset: Set<number>): string[] {
    const bad = new Set<string>();
    for (const ch of text) {
        const cp = ch.codePointAt(0)!;
        if (ch === '\n' || ch === '\r' || ch === '\t') continue;
        if (!charset.has(cp)) bad.add(ch);
    }
    return [...bad];
}

export interface FillResult { bytes: Uint8Array; written: number; skipped: string[] }

/**
 * Write `values` (only the fields the user changed) and save. Appearances are regenerated with Helvetica for the
 * changed fields; untouched fields keep the appearance the form shipped with.
 */
export async function fillForm(bytes: Uint8Array, values: Record<string, FieldValue>, opts: { flatten: boolean }): Promise<FillResult> {
    const lib = await loadLib();
    const { encrypted } = await readEncryption(lib, bytes);
    const doc = await openDoc(lib, bytes, encrypted);
    const form = doc.getForm(); // removes an XFA layer, if any, so viewers use the AcroForm values written below
    const font: PDFFontT = await doc.embedFont(lib.StandardFonts.Helvetica);
    const skipped: string[] = [];
    let written = 0;
    for (const [name, value] of Object.entries(values)) {
        let f: PDFFieldT | undefined;
        try { f = form.getField(name); } catch { f = undefined; }
        if (!f || f.isReadOnly()) { skipped.push(name); continue; }
        try {
            if (f instanceof lib.PDFTextField) {
                let s = String(value ?? '');
                if (!f.isMultiline()) s = s.replace(/\r?\n/g, ' ');
                const max = f.getMaxLength();
                if (max !== undefined && [...s].length > max) s = [...s].slice(0, max).join('');
                f.setText(s === '' ? undefined : s);
                if (f.isMultiline() && s && !daFontSize(f.acroField.getDefaultAppearance())) {
                    const r = f.acroField.getWidgets()[0]?.getRectangle();
                    if (r) { try { f.setFontSize(fitMultiline(font, s, r.width - 6, r.height - 4)); } catch { /* no /DA to edit */ } }
                }
            } else if (f instanceof lib.PDFCheckBox) {
                if (value === true) f.check(); else f.uncheck();
            } else if (f instanceof lib.PDFRadioGroup) {
                if (typeof value === 'string' && value) f.select(value); else f.clear();
            } else if (f instanceof lib.PDFDropdown) {
                const v = Array.isArray(value) ? value[0] : String(value ?? '');
                if (v) f.select(v); else f.clear();
            } else if (f instanceof lib.PDFOptionList) {
                const vs = (Array.isArray(value) ? value : [String(value ?? '')]).filter(Boolean);
                if (vs.length) f.select(vs); else f.clear();
            } else { skipped.push(name); continue; }
            written++;
        } catch {
            skipped.push(name);
        }
    }
    // Regenerate appearances for the fields changed above (pdf-lib marks them dirty). Per field, so one bad
    // field (an unusual widget, a character Helvetica lacks) doesn't stop the rest.
    let stale = false;
    for (const f of form.getFields()) {
        try {
            if (f.needsAppearancesUpdate()) f.defaultUpdateAppearances(font);
        } catch {
            stale = true;
            if (!skipped.includes(f.getName()) && f.getName() in values) skipped.push(f.getName());
        }
    }
    // A value is set but its old appearance remains: ask viewers to redraw fields from their values.
    if (stale && !opts.flatten) form.acroForm.dict.set(lib.PDFName.of('NeedAppearances'), lib.PDFBool.True);
    if (opts.flatten) form.flatten({ updateFieldAppearances: false });
    // No object streams: with them, the fork dropped every widget of a decrypted Ontario form on save (Nov 2026 test).
    const out = await doc.save({ updateFieldAppearances: false, useObjectStreams: false });
    return { bytes: out, written, skipped };
}
