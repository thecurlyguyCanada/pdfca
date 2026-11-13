'use client';

/**
 * Compare PDF: extracts the text of two PDFs with pdf.js, tokenises it into words and runs a word-level
 * Myers diff (linear-space, middle-snake) in a Web Worker so the page stays responsive. Changes are
 * flagged when they touch numbers/amounts, dates or negations. Text only: layout, images and formatting
 * are not compared. Everything runs in the browser.
 */
import { useCallback, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { GitCompare, Download, Hash, CalendarDays, Ban, Info } from 'lucide-react';
import { Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, formatBytes, downloadBlob, baseName, yieldToBrowser, openPdf, readErrorMessage, ui, UserFacingError } from './shared';
import type { Lang } from './shared';

const STR = {
    en: {
        original: 'Original',
        changed: 'Changed',
        tapToChange: 'Tap to choose a different file',
        compare: 'Compare',
        textOnly: 'Compares the text only. Layout, image and formatting changes (fonts, colours, positions) are not detected.',
        notPdf: 'Please choose a PDF file.',
        reading: (which: string, p: number, n: number) => `Reading “${which}”: page ${p} of ${n}`,
        comparing: 'Comparing the words…',
        scanned: (name: string) => `“${name}” has no selectable text (it looks like a scan or a photo), so there is nothing to compare.`,
        scannedFix: 'Make it searchable first with OCR PDF, then compare again.',
        ocrLink: 'Open OCR PDF',
        summary: 'Summary',
        added: 'words added',
        removed: 'words removed',
        changes: 'changes',
        pagesCompared: (a: number, b: number) => (a === b ? `${a} pages compared` : `${a} pages vs ${b} pages compared`),
        flaggedCount: (n: number) => `${n} flagged`,
        identical: 'No text differences found. The words in both PDFs are the same (layout and images were not compared).',
        onlyFlagged: 'Only flagged changes',
        fullText: 'Show full text',
        tabInline: 'Inline view',
        tabList: 'Changes list',
        number: 'Number',
        date: 'Date',
        negation: 'Negation',
        addedLabel: 'Added',
        removedLabel: 'Removed',
        replacedLabel: 'Replaced',
        page: 'Page',
        pageShort: 'p.',
        unchanged: (n: number) => `${n.toLocaleString('en-CA')} unchanged words`,
        downloadReport: 'Download report',
        reportNote: 'A single .html file you can open in any browser, email or print.',
        startOver: 'Start over',
        noFlagged: 'No flagged changes. Turn off the filter to see all changes.',
        showingFirst: (n: number, total: number) => `Showing the first ${n} of ${total} changes. The report contains all of them.`,
        coarse: 'These documents are very different, so they were compared page by page. Results may show whole passages as replaced.',
        speed: (s: string) => `Compared in ${s} s`,
        legendRemoved: 'removed',
        legendAdded: 'added',
        reportTitle: 'PDF comparison report',
        reportGenerated: 'Generated',
        reportBy: 'Made in your browser with pdfcanada.ca. Text-only comparison: layout, images and formatting were not compared.',
        before: 'Before',
        after: 'After',
        thPage: 'Page',
        thType: 'Type',
        thFlags: 'Flags',
        reportPrefix: 'comparison',
        details: 'Details',
    },
    fr: {
        original: 'Original',
        changed: 'Version modifiée',
        tapToChange: 'Touchez pour choisir un autre fichier',
        compare: 'Comparer',
        textOnly: 'Compare le texte seulement. Les changements de mise en page, d’images ou de mise en forme (polices, couleurs, positions) ne sont pas détectés.',
        notPdf: 'Veuillez choisir un fichier PDF.',
        reading: (which: string, p: number, n: number) => `Lecture de « ${which} » : page ${p} sur ${n}`,
        comparing: 'Comparaison des mots…',
        scanned: (name: string) => `« ${name} » ne contient pas de texte sélectionnable (on dirait une numérisation ou une photo), il n’y a donc rien à comparer.`,
        scannedFix: 'Rendez-le d’abord interrogeable avec l’outil OCR PDF, puis comparez de nouveau.',
        ocrLink: 'Ouvrir OCR PDF',
        summary: 'Résumé',
        added: 'mots ajoutés',
        removed: 'mots supprimés',
        changes: 'changements',
        pagesCompared: (a: number, b: number) => (a === b ? `${a} pages comparées` : `${a} pages et ${b} pages comparées`),
        flaggedCount: (n: number) => `${n} signalé${n > 1 ? 's' : ''}`,
        identical: 'Aucune différence de texte. Les mots des deux PDF sont identiques (la mise en page et les images n’ont pas été comparées).',
        onlyFlagged: 'Changements signalés seulement',
        fullText: 'Afficher tout le texte',
        tabInline: 'Vue intégrée',
        tabList: 'Liste des changements',
        number: 'Nombre',
        date: 'Date',
        negation: 'Négation',
        addedLabel: 'Ajout',
        removedLabel: 'Suppression',
        replacedLabel: 'Remplacement',
        page: 'Page',
        pageShort: 'p.',
        unchanged: (n: number) => `${n.toLocaleString('fr-CA')} mots inchangés`,
        downloadReport: 'Télécharger le rapport',
        reportNote: 'Un seul fichier .html à ouvrir dans n’importe quel navigateur, à envoyer par courriel ou à imprimer.',
        startOver: 'Recommencer',
        noFlagged: 'Aucun changement signalé. Désactivez le filtre pour voir tous les changements.',
        showingFirst: (n: number, total: number) => `Affichage des ${n} premiers changements sur ${total}. Le rapport les contient tous.`,
        coarse: 'Ces documents sont très différents : ils ont été comparés page par page. Des passages entiers peuvent apparaître comme remplacés.',
        speed: (s: string) => `Comparé en ${s.replace('.', ',')} s`,
        legendRemoved: 'supprimé',
        legendAdded: 'ajouté',
        reportTitle: 'Rapport de comparaison PDF',
        reportGenerated: 'Créé le',
        reportBy: 'Créé dans votre navigateur avec pdfcanada.ca. Comparaison du texte seulement : la mise en page, les images et la mise en forme n’ont pas été comparées.',
        before: 'Avant',
        after: 'Après',
        thPage: 'Page',
        thType: 'Type',
        thFlags: 'Signalements',
        reportPrefix: 'comparaison',
        details: 'Détails',
    },
};
type T = typeof STR.en;

/* ------------------------------------------------------------------ text extraction */

type DocText = { name: string; tokens: string[]; pageOf: Int32Array; numPages: number };

type TextItemLike = { str: string; transform: number[]; width: number; height: number; hasEOL?: boolean };

async function extractText(file: File, onPage: (p: number, n: number) => void): Promise<DocText> {
    const pdf = await openPdf(await file.arrayBuffer());
    const n = pdf.numPages;
    const tokens: string[] = [];
    const pages: number[] = [];
    try {
        for (let p = 1; p <= n; p++) {
            onPage(p, n);
            const page = await pdf.getPage(p);
            const tc = await page.getTextContent();
            let s = '';
            let lastY: number | null = null;
            let lastEnd = 0;
            for (const raw of tc.items) {
                if (!('str' in raw)) continue;
                const it = raw as TextItemLike;
                const x = it.transform[4];
                const y = it.transform[5];
                const h = Math.abs(it.transform[3]) || it.height || 10;
                if (lastY !== null) {
                    if (Math.abs(y - lastY) > h * 0.5) s += '\n';
                    else if (x - lastEnd > h * 0.2) s += ' ';
                }
                s += it.str;
                if (it.hasEOL) { s += '\n'; lastY = null; } else { lastY = y; lastEnd = x + it.width; }
            }
            for (const w of s.split(/\s+/)) {
                if (w) { tokens.push(w); pages.push(p); }
            }
            page.cleanup();
            if (p % 5 === 0) await yieldToBrowser();
        }
    } finally {
        void pdf.destroy();
    }
    return { name: file.name, tokens, pageOf: Int32Array.from(pages), numPages: n };
}

/* ------------------------------------------------------------------ diff (runs in a worker) */

/**
 * Linear-space Myers diff (middle-snake bisection, after diff-match-patch) on integer token ids.
 * Returns matchA: for each index of A, the matched index in B or -1. Throws 'budget' if the work
 * exceeds the step budget. Self-contained (no outside references) so it can be stringified into a Worker.
 */
function diffCore(A: Int32Array, B: Int32Array, budget: number): Int32Array {
    const N = A.length, M = B.length;
    const matchA = new Int32Array(N).fill(-1);
    const size = N + M + 4;
    const v1 = new Int32Array(size), v2 = new Int32Array(size);
    let steps = 0;
    const stack: number[] = [0, N, 0, M];
    while (stack.length) {
        let b1 = stack.pop() as number, b0 = stack.pop() as number, a1 = stack.pop() as number, a0 = stack.pop() as number;
        while (a0 < a1 && b0 < b1 && A[a0] === B[b0]) { matchA[a0] = b0; a0++; b0++; }
        while (a0 < a1 && b0 < b1 && A[a1 - 1] === B[b1 - 1]) { a1--; b1--; matchA[a1] = b1; }
        if (a0 === a1 || b0 === b1) continue;
        const n = a1 - a0, m = b1 - b0;
        const maxD = Math.ceil((n + m) / 2);
        const off = maxD, vlen = 2 * maxD;
        v1.fill(-1, 0, vlen + 2); v2.fill(-1, 0, vlen + 2);
        v1[off + 1] = 0; v2[off + 1] = 0;
        const delta = n - m;
        const front = delta % 2 !== 0;
        let k1s = 0, k1e = 0, k2s = 0, k2e = 0;
        let sx = -1, sy = -1;
        outer: for (let d = 0; d < maxD; d++) {
            for (let k1 = -d + k1s; k1 <= d - k1e; k1 += 2) {
                const k1o = off + k1;
                let x1 = (k1 === -d || (k1 !== d && v1[k1o - 1] < v1[k1o + 1])) ? v1[k1o + 1] : v1[k1o - 1] + 1;
                let y1 = x1 - k1;
                while (x1 < n && y1 < m && A[a0 + x1] === B[b0 + y1]) { x1++; y1++; }
                v1[k1o] = x1;
                if (x1 > n) k1e += 2;
                else if (y1 > m) k1s += 2;
                else if (front) {
                    const k2o = off + delta - k1;
                    if (k2o >= 0 && k2o < vlen && v2[k2o] !== -1) {
                        if (x1 >= n - v2[k2o]) { sx = x1; sy = y1; break outer; }
                    }
                }
            }
            for (let k2 = -d + k2s; k2 <= d - k2e; k2 += 2) {
                const k2o = off + k2;
                let x2 = (k2 === -d || (k2 !== d && v2[k2o - 1] < v2[k2o + 1])) ? v2[k2o + 1] : v2[k2o - 1] + 1;
                let y2 = x2 - k2;
                while (x2 < n && y2 < m && A[a0 + n - x2 - 1] === B[b0 + m - y2 - 1]) { x2++; y2++; }
                v2[k2o] = x2;
                if (x2 > n) k2e += 2;
                else if (y2 > m) k2s += 2;
                else if (!front) {
                    const k1o = off + delta - k2;
                    if (k1o >= 0 && k1o < vlen && v1[k1o] !== -1) {
                        const x1 = v1[k1o];
                        const y1 = off + x1 - k1o;
                        if (x1 >= n - x2) { sx = x1; sy = y1; break outer; }
                    }
                }
            }
            steps += 2 * d + 2;
            if (steps > budget) throw new Error('budget');
        }
        if (sx < 0) continue; // nothing in common
        // Push right half first so the left half is processed first (order does not matter for matchA).
        stack.push(a0 + sx, a1, b0 + sy, b1);
        stack.push(a0, a0 + sx, b0, b0 + sy);
    }
    return matchA;
}

const WORKER_SRC = `const diffCore = ${diffCore.toString()};
self.onmessage = (e) => {
  const { A, B, budget } = e.data;
  try { const m = diffCore(A, B, budget); self.postMessage({ ok: true, m }, [m.buffer]); }
  catch (err) { self.postMessage({ ok: false, error: String(err && err.message || err) }); }
};`;

function runDiff(A: Int32Array, B: Int32Array, budget: number): Promise<Int32Array | null> {
    return new Promise((resolve) => {
        let worker: Worker | null = null;
        let url = '';
        try {
            url = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' }));
            worker = new Worker(url);
        } catch {
            worker = null;
        }
        if (!worker) {
            // Fallback: main thread.
            try { resolve(diffCore(A, B, budget)); } catch { resolve(null); }
            if (url) URL.revokeObjectURL(url);
            return;
        }
        const w = worker;
        w.onmessage = (e: MessageEvent<{ ok: boolean; m?: Int32Array }>) => {
            w.terminate(); URL.revokeObjectURL(url);
            resolve(e.data.ok && e.data.m ? e.data.m : null);
        };
        w.onerror = () => {
            w.terminate(); URL.revokeObjectURL(url);
            try { resolve(diffCore(A, B, budget)); } catch { resolve(null); }
        };
        w.postMessage({ A, B, budget });
    });
}

/* ------------------------------------------------------------------ flags */

type Flag = 'number' | 'date' | 'negation';
type Hunk = { a0: number; a1: number; b0: number; b1: number; flags: Flag[]; pageA: number; pageB: number };

const MONTHS = 'january|february|march|april|may|june|july|august|september|october|november|december|sept|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec|janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre|janv|févr|fevr|avr|juil|déc';
const M = `(?<!\\p{L})(?:${MONTHS})(?!\\p{L})\\.?`;
const ORD = '(?:er|re|st|nd|rd|th)?';
const DATE_RE = new RegExp([
    '(?<!\\d)\\d{4}-\\d{1,2}-\\d{1,2}(?!\\d)',
    '(?<!\\d)\\d{1,2}[/.\\-]\\d{1,2}[/.\\-]\\d{2,4}(?!\\d)',
    `(?<!\\d)\\d{1,2}${ORD}\\s+${M}(?:,?\\s+\\d{4})?`,
    `${M}\\s+\\d{1,2}${ORD}(?!\\d)(?:,?\\s+\\d{4})?`,
    `${M}\\s+\\d{4}(?!\\d)`,
].join('|'), 'giu');

const NEG_WORDS = new Set(['not', 'no', 'never', 'without', 'cannot', 'ne', 'pas', 'non', 'jamais', 'aucun', 'aucune', 'sans']);
function isNegation(tok: string): boolean {
    const w = tok.toLowerCase().replace(/^[^\p{L}']+|[^\p{L}']+$/gu, '').replace(/’/g, "'");
    if (!w) return false;
    if (NEG_WORDS.has(w)) return true;
    if (/n't$/.test(w)) return true;
    if (/^n'\p{L}/u.test(w)) return true; // n'est, n'a, n'y…
    return false;
}

/** Token indices in [s,e) covered by a date expression (looking a few words around the change). */
function dateCovered(tokens: string[], s: number, e: number): Set<number> {
    const covered = new Set<number>();
    if (e <= s) return covered;
    const from = Math.max(0, s - 4), to = Math.min(tokens.length, e + 4);
    const starts: number[] = [];
    let str = '';
    for (let i = from; i < to; i++) { if (i > from) str += ' '; starts.push(str.length); str += tokens[i]; }
    DATE_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = DATE_RE.exec(str))) {
        const ms = m.index, me = m.index + m[0].length;
        for (let k = 0; k < starts.length; k++) {
            const ts = starts[k], te = ts + tokens[from + k].length;
            const idx = from + k;
            if (te > ms && ts < me && idx >= s && idx < e) covered.add(idx);
        }
        if (m[0].length === 0) DATE_RE.lastIndex++;
    }
    return covered;
}

function flagsFor(A: string[], a0: number, a1: number, B: string[], b0: number, b1: number): Flag[] {
    const out: Flag[] = [];
    const dA = dateCovered(A, a0, a1), dB = dateCovered(B, b0, b1);
    let num = false, neg = false;
    for (let i = a0; i < a1; i++) { if (!dA.has(i) && /\d/.test(A[i])) num = true; if (isNegation(A[i])) neg = true; }
    for (let i = b0; i < b1; i++) { if (!dB.has(i) && /\d/.test(B[i])) num = true; if (isNegation(B[i])) neg = true; }
    if (num) out.push('number');
    if (dA.size || dB.size) out.push('date');
    if (neg) out.push('negation');
    return out;
}

/* ------------------------------------------------------------------ comparison */

type Result = {
    A: DocText; B: DocText; hunks: Hunk[];
    added: number; removed: number; coarse: boolean; ms: number;
};

/**
 * Cosmetic clean-up: a pure deletion or insertion can often slide over equal tokens ("payment payment" →
 * "payment $9,999" is a delete + insert two words apart). Slide it right when that makes it touch the
 * next change, so the two read as one replacement. Mutates matchA; keeps it a valid, minimal match.
 */
function slideMatches(m: Int32Array, ia: Int32Array, ib: Int32Array) {
    const N = m.length, NB = ib.length;
    let i = 0, j = 0;
    while (i < N) {
        if (m[i] === j) { i++; j++; continue; }
        let a1 = i; while (a1 < N && m[a1] === -1) a1++;
        const b1 = a1 < N ? m[a1] : NB;
        if (a1 > i && b1 === j) {
            // Pure deletion A[i, a1) followed by equal tokens from (a1, j).
            let s = 0;
            while (a1 + s < N && m[a1 + s] === j + s && ia[i + s] === ia[a1 + s]) s++;
            const touches = a1 + s < N ? m[a1 + s] !== j + s : j + s < NB;
            if (s > 0 && touches) {
                for (let k = 0; k < s; k++) { m[i + k] = j + k; m[a1 + k] = -1; }
                i += s; j += s;
                continue;
            }
        } else if (a1 === i && b1 > j) {
            // Pure insertion B[j, b1) before A[i], which matches B[b1].
            let s = 0;
            while (i + s < N && m[i + s] === b1 + s && ib[j + s] === ib[b1 + s]) s++;
            const touches = i + s < N ? m[i + s] !== b1 + s : b1 + s < NB;
            if (s > 0 && touches) {
                for (let k = 0; k < s; k++) m[i + k] = j + k;
                i += s; j += s;
                continue;
            }
        }
        i = a1; j = b1;
    }
}

function hunksFromMatch(A: DocText, B: DocText, matchA: Int32Array, offA = 0, offB = 0, endA = A.tokens.length, endB = B.tokens.length): Hunk[] {
    const hunks: Hunk[] = [];
    let i = offA, j = offB;
    while (i < endA || j < endB) {
        if (i < endA && matchA[i - offA] === j) { i++; j++; continue; }
        const a0 = i, b0 = j;
        while (i < endA || j < endB) {
            if (i < endA && matchA[i - offA] === -1) { i++; continue; }
            if (j < endB && (i >= endA || matchA[i - offA] > j)) { j++; continue; }
            break;
        }
        hunks.push(makeHunk(A, B, a0, i, b0, j));
    }
    return hunks;
}

function makeHunk(A: DocText, B: DocText, a0: number, a1: number, b0: number, b1: number): Hunk {
    const pa = A.tokens.length ? A.pageOf[Math.min(a1 > a0 ? a0 : Math.max(0, a0 - 1), A.tokens.length - 1)] : 1;
    const pb = B.tokens.length ? B.pageOf[Math.min(b1 > b0 ? b0 : Math.max(0, b0 - 1), B.tokens.length - 1)] : 1;
    return { a0, a1, b0, b1, flags: flagsFor(A.tokens, a0, a1, B.tokens, b0, b1), pageA: pa, pageB: pb };
}

function tokenIds(A: string[], B: string[]): [Int32Array, Int32Array] {
    const map = new Map<string, number>();
    const id = (w: string) => {
        const k = w.normalize('NFKC').replace(/[’‘]/g, "'").replace(/[“”«»]/g, '"');
        let v = map.get(k);
        if (v === undefined) { v = map.size; map.set(k, v); }
        return v;
    };
    return [Int32Array.from(A, id), Int32Array.from(B, id)];
}

const GAP_BUDGET = 60_000_000; // ≈1 s of work in the worker on this machine class
const PAGE_BUDGET = 4_000_000;

/** Small problems run inline (a worker costs more to start than the diff); big ones in a worker. */
async function diffRange(ia: Int32Array, ib: Int32Array, budget: number): Promise<Int32Array | null> {
    if (ia.length + ib.length < 6000) {
        try { return diffCore(ia, ib, budget); } catch { return null; }
    }
    return runDiff(ia.slice(), ib.slice(), budget);
}

function pageStarts(pageOf: Int32Array, numPages: number): Int32Array {
    // starts[p-1] = first token index of page p; starts[numPages] = total.
    const starts = new Int32Array(numPages + 1);
    let k = 0;
    for (let p = 1; p <= numPages; p++) {
        while (k < pageOf.length && pageOf[k] < p) k++;
        starts[p - 1] = k;
    }
    starts[numPages] = pageOf.length;
    return starts;
}

/**
 * 1) Diff the sequence of page fingerprints, so identical pages (and inserted/deleted pages) are matched for
 *    free. 2) Word-level Myers diff inside each run of unmatched pages (whole document when text reflowed).
 * 3) If a run is too different to diff within budget, compare its pages pairwise by position.
 */
async function compareDocs(A: DocText, B: DocText): Promise<Result> {
    const t0 = performance.now();
    const [ia, ib] = tokenIds(A.tokens, B.tokens);
    const sa = pageStarts(A.pageOf, A.numPages), sb = pageStarts(B.pageOf, B.numPages);
    const fp = new Map<string, number>();
    const fingerprint = (ids: Int32Array, starts: Int32Array, p: number) => {
        const key = Array.prototype.join.call(ids.subarray(starts[p], starts[p + 1]), ',');
        let v = fp.get(key); if (v === undefined) { v = fp.size; fp.set(key, v); }
        return v;
    };
    const PA = Int32Array.from({ length: A.numPages }, (_, p) => fingerprint(ia, sa, p));
    const PB = Int32Array.from({ length: B.numPages }, (_, p) => fingerprint(ib, sb, p));
    let pageMatch: Int32Array;
    try { pageMatch = diffCore(PA, PB, 50_000_000); } catch { pageMatch = new Int32Array(A.numPages).fill(-1); }

    const matchA = new Int32Array(ia.length).fill(-1);
    let coarse = false;
    const solveGap = async (pa0: number, pa1: number, pb0: number, pb1: number) => {
        const as = sa[pa0], ae = sa[pa1], bs = sb[pb0], be = sb[pb1];
        if (ae === as || be === bs) return;
        const m = await diffRange(ia.subarray(as, ae), ib.subarray(bs, be), GAP_BUDGET);
        if (m) { for (let k = 0; k < m.length; k++) if (m[k] >= 0) matchA[as + k] = m[k] + bs; return; }
        coarse = true;
        const n = Math.min(pa1 - pa0, pb1 - pb0);
        for (let k = 0; k < n; k++) {
            const xs = sa[pa0 + k], xe = sa[pa0 + k + 1], ys = sb[pb0 + k], ye = sb[pb0 + k + 1];
            if (xe === xs || ye === ys) continue;
            const mm = await diffRange(ia.subarray(xs, xe), ib.subarray(ys, ye), PAGE_BUDGET);
            if (mm) for (let q = 0; q < mm.length; q++) if (mm[q] >= 0) matchA[xs + q] = mm[q] + ys;
            if (k % 10 === 9) await yieldToBrowser();
        }
    };
    let pa = 0, pb = 0;
    while (pa < A.numPages || pb < B.numPages) {
        if (pa < A.numPages && pageMatch[pa] === pb) {
            for (let k = 0; k < sa[pa + 1] - sa[pa]; k++) matchA[sa[pa] + k] = sb[pb] + k;
            pa++; pb++; continue;
        }
        const ga = pa;
        while (pa < A.numPages && pageMatch[pa] === -1) pa++;
        const gb = pb;
        pb = pa < A.numPages ? pageMatch[pa] : B.numPages;
        await solveGap(ga, pa, gb, pb);
    }
    slideMatches(matchA, ia, ib);
    const hunks = hunksFromMatch(A, B, matchA);
    let added = 0, removed = 0;
    for (const h of hunks) { added += h.b1 - h.b0; removed += h.a1 - h.a0; }
    return { A, B, hunks, added, removed, coarse, ms: performance.now() - t0 };
}

/* ------------------------------------------------------------------ view model */

const CTX = 12;
type Block = { from: number; to: number; hunkIdx: number[] }; // B-token range [from,to)

function buildBlocks(r: Result, full: boolean, onlyFlagged: boolean): Block[] {
    const { hunks } = r;
    const nB = r.B.tokens.length;
    if (!hunks.length) return [];
    if (full) return [{ from: 0, to: nB, hunkIdx: hunks.map((_, i) => i) }];
    const blocks: Block[] = [];
    let cur: Block | null = null;
    hunks.forEach((h, i) => {
        if (cur && h.b0 - hunks[cur.hunkIdx[cur.hunkIdx.length - 1]].b1 <= 2 * CTX) {
            cur.hunkIdx.push(i);
            cur.to = Math.min(nB, h.b1 + CTX);
        } else {
            if (cur) blocks.push(cur);
            cur = { from: Math.max(0, h.b0 - CTX), to: Math.min(nB, h.b1 + CTX), hunkIdx: [i] };
        }
    });
    if (cur) blocks.push(cur);
    return onlyFlagged ? blocks.filter((b) => b.hunkIdx.some((i) => hunks[i].flags.length)) : blocks;
}

const kindOf = (h: Hunk): 'added' | 'removed' | 'replaced' => (h.a1 === h.a0 ? 'added' : h.b1 === h.b0 ? 'removed' : 'replaced');
const pageLabel = (t: T, h: Hunk) => (h.pageA === h.pageB ? `${t.page} ${h.pageA}` : `${t.page} ${h.pageA} → ${h.pageB}`);
const clip = (s: string, n = 220) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

function FlagBadges({ flags, t }: { flags: Flag[]; t: T }) {
    if (!flags.length) return null;
    const meta: Record<Flag, { label: string; icon: ReactNode; cls: string }> = {
        number: { label: t.number, icon: <Hash className="h-3 w-3" aria-hidden="true" />, cls: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200' },
        date: { label: t.date, icon: <CalendarDays className="h-3 w-3" aria-hidden="true" />, cls: 'bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-200' },
        negation: { label: t.negation, icon: <Ban className="h-3 w-3" aria-hidden="true" />, cls: 'bg-purple-100 text-purple-900 dark:bg-purple-500/20 dark:text-purple-200' },
    };
    return (
        <span className="inline-flex flex-wrap gap-1 align-middle">
            {flags.map((f) => (
                <span key={f} className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${meta[f].cls}`}>{meta[f].icon}{meta[f].label}</span>
            ))}
        </span>
    );
}

function BlockView({ r, block, full, t }: { r: Result; block: Block; full: boolean; t: T }) {
    const A = r.A.tokens, B = r.B.tokens;
    const parts: ReactNode[] = [];
    let pos = block.from;
    const equal = (s: number, e: number, key: string) => {
        if (e <= s) return;
        if (!full) { parts.push(<span key={key}>{B.slice(s, e).join(' ')} </span>); return; }
        // Full text: insert page markers where the changed document's page changes.
        let k = s;
        while (k < e) {
            let q = k; const p = r.B.pageOf[k];
            while (q < e && r.B.pageOf[q] === p) q++;
            if (k === 0 || r.B.pageOf[k - 1] !== p) parts.push(<span key={`${key}-p${k}`} className="block mt-4 mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">— {t.page} {p} —</span>);
            parts.push(<span key={`${key}-${k}`}>{B.slice(k, q).join(' ')} </span>);
            k = q;
        }
    };
    block.hunkIdx.forEach((hi) => {
        const h = r.hunks[hi];
        equal(pos, h.b0, `e${hi}`);
        if (h.a1 > h.a0) parts.push(<del key={`d${hi}`} className="bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-200 line-through decoration-2 rounded px-0.5">{A.slice(h.a0, h.a1).join(' ')}</del>);
        if (h.a1 > h.a0 && h.b1 > h.b0) parts.push(' ');
        if (h.b1 > h.b0) parts.push(<ins key={`i${hi}`} className="bg-green-100 dark:bg-green-500/20 text-green-900 dark:text-green-200 no-underline rounded px-0.5">{B.slice(h.b0, h.b1).join(' ')}</ins>);
        if (h.flags.length) parts.push(<span key={`f${hi}`}> <FlagBadges flags={h.flags} t={t} /></span>);
        parts.push(' ');
        pos = h.b1;
    });
    equal(pos, block.to, 'tail');
    const first = r.hunks[block.hunkIdx[0]];
    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-3 md:p-4">
            {!full && <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">{pageLabel(t, first)}</p>}
            <p className="text-[15px] leading-7 text-gray-800 dark:text-gray-200 break-words">
                {!full && block.from > 0 && '… '}{parts}{!full && block.to < B.length && ' …'}
            </p>
        </div>
    );
}

/* ------------------------------------------------------------------ report */

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

function buildReport(r: Result, t: T, lang: Lang): string {
    const A = r.A.tokens, B = r.B.tokens;
    const flagLabel: Record<Flag, string> = { number: t.number, date: t.date, negation: t.negation };
    const badges = (h: Hunk) => h.flags.map((f) => `<span class="b b-${f}">${esc(flagLabel[f])}</span>`).join(' ');
    const typeLabel = (h: Hunk) => ({ added: t.addedLabel, removed: t.removedLabel, replaced: t.replacedLabel }[kindOf(h)]);
    const flagged = r.hunks.filter((h) => h.flags.length).length;
    const rows = r.hunks.map((h, i) => `<tr${h.flags.length ? ' class="fl"' : ''}><td>${i + 1}</td><td>${esc(pageLabel(t, h))}</td><td>${esc(typeLabel(h))}</td><td>${h.a1 > h.a0 ? `<del>${esc(A.slice(h.a0, h.a1).join(' '))}</del>` : ''}</td><td>${h.b1 > h.b0 ? `<ins>${esc(B.slice(h.b0, h.b1).join(' '))}</ins>` : ''}</td><td>${badges(h)}</td></tr>`).join('\n');
    const blocks = buildBlocks(r, false, false).map((bl) => {
        let pos = bl.from;
        let html = bl.from > 0 ? '… ' : '';
        for (const hi of bl.hunkIdx) {
            const h = r.hunks[hi];
            html += esc(B.slice(pos, h.b0).join(' ')) + ' ';
            if (h.a1 > h.a0) html += `<del>${esc(A.slice(h.a0, h.a1).join(' '))}</del> `;
            if (h.b1 > h.b0) html += `<ins>${esc(B.slice(h.b0, h.b1).join(' '))}</ins> `;
            if (h.flags.length) html += badges(h) + ' ';
            pos = h.b1;
        }
        html += esc(B.slice(pos, bl.to).join(' ')) + (bl.to < B.length ? ' …' : '');
        return `<div class="blk"><div class="pg">${esc(pageLabel(t, r.hunks[bl.hunkIdx[0]]))}</div><p>${html}</p></div>`;
    }).join('\n');
    const date = new Date().toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA');
    return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.reportTitle)} – ${esc(r.A.name)} / ${esc(r.B.name)}</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1f2937;max-width:1000px;margin:0 auto;padding:24px 16px;line-height:1.5;background:#fff}
h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:28px 0 10px}
.meta{color:#6b7280;font-size:14px}.files{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}
.file{border:1px solid #e5e7eb;border-radius:12px;padding:10px 12px;font-size:14px}.file b{display:block;color:#6b7280;font-size:12px;text-transform:uppercase}
.stats{display:flex;flex-wrap:wrap;gap:12px}.stat{border:1px solid #e5e7eb;border-radius:12px;padding:10px 14px;min-width:120px}.stat strong{display:block;font-size:22px}
.plus{color:#15803d}.minus{color:#b91c1c}
table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #e5e7eb;padding:6px 8px;text-align:left;vertical-align:top}th{background:#f9fafb}
tr.fl td:first-child{border-left:3px solid #E31837}
del{background:#fee2e2;color:#991b1b;text-decoration:line-through;text-decoration-thickness:2px;border-radius:3px;padding:0 2px}
ins{background:#dcfce7;color:#14532d;text-decoration:none;border-radius:3px;padding:0 2px}
.b{display:inline-block;border-radius:999px;padding:0 8px;font-size:11px;font-weight:700}.b-number{background:#fef3c7;color:#78350f}.b-date{background:#dbeafe;color:#1e3a8a}.b-negation{background:#f3e8ff;color:#581c87}
.blk{border:1px solid #e5e7eb;border-radius:12px;padding:10px 14px;margin:10px 0}.blk p{margin:4px 0 0}.pg{font-size:12px;font-weight:700;color:#6b7280}
.note{font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:32px;padding-top:12px}
@media print{.blk,tr{break-inside:avoid}}
.tw{overflow-x:auto}@media (max-width:600px){.files{grid-template-columns:1fr}th,td{padding:4px}}
</style></head><body>
<h1>${esc(t.reportTitle)}</h1>
<div class="meta">${esc(t.reportGenerated)} ${esc(date)}</div>
<div class="files"><div class="file"><b>${esc(t.original)}</b>${esc(r.A.name)} (${r.A.numPages} p.)</div><div class="file"><b>${esc(t.changed)}</b>${esc(r.B.name)} (${r.B.numPages} p.)</div></div>
<h2>${esc(t.summary)}</h2>
<div class="stats"><div class="stat"><strong class="plus">+${r.added}</strong>${esc(t.added)}</div><div class="stat"><strong class="minus">−${r.removed}</strong>${esc(t.removed)}</div><div class="stat"><strong>${r.hunks.length}</strong>${esc(t.changes)} · ${esc(t.flaggedCount(flagged))}</div><div class="stat"><strong>${Math.max(r.A.numPages, r.B.numPages)}</strong>${esc(t.pagesCompared(r.A.numPages, r.B.numPages))}</div></div>
${r.coarse ? `<p>${esc(t.coarse)}</p>` : ''}
${r.hunks.length ? `<h2>${esc(t.tabList)}</h2>
<div class="tw"><table><thead><tr><th>#</th><th>${esc(t.thPage)}</th><th>${esc(t.thType)}</th><th>${esc(t.before)}</th><th>${esc(t.after)}</th><th>${esc(t.thFlags)}</th></tr></thead><tbody>
${rows}
</tbody></table></div>
<h2>${esc(t.tabInline)}</h2>
${blocks}` : `<p>${esc(t.identical)}</p>`}
<p class="note">${esc(t.reportBy)}</p>
</body></html>`;
}

/* ------------------------------------------------------------------ component */

const LIST_CAP = 500;
const BLOCK_CAP = 300;

export default function ComparePdf({ lang }: { lang: Lang }) {
    const t = STR[lang];
    const [fileA, setFileA] = useState<File | null>(null);
    const [fileB, setFileB] = useState<File | null>(null);
    const [busy, setBusy] = useState(false);
    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');
    const [scanned, setScanned] = useState<string[]>([]);
    const [result, setResult] = useState<Result | null>(null);
    const [onlyFlagged, setOnlyFlagged] = useState(false);
    const [full, setFull] = useState(false);
    const [tab, setTab] = useState<'inline' | 'list'>('inline');
    const runId = useRef(0);

    const isPdf = (f: File) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf';
    const pick = useCallback((which: 'a' | 'b') => (files: File[]) => {
        // A new file cancels any compare still running, so its result can't land under the new names.
        runId.current++; setBusy(false); setProgress('');
        setError(''); setScanned([]); setResult(null);
        const pdfs = files.filter(isPdf);
        if (!pdfs.length) { setError(t.notPdf); return; }
        if (which === 'a') { setFileA(pdfs[0]); if (pdfs[1]) setFileB(pdfs[1]); }
        else setFileB(pdfs[0]);
    }, [t]);

    const run = async () => {
        if (!fileA || !fileB) return;
        const id = ++runId.current;
        setBusy(true); setError(''); setScanned([]); setResult(null);
        try {
            const read = (f: File) => extractText(f, (p, n) => { if (id === runId.current) setProgress(t.reading(f.name, p, n)); })
                .catch((e) => { throw new UserFacingError(`${f.name}${lang === 'fr' ? ' : ' : ': '}${readErrorMessage(e, lang)}`); });
            const A = await read(fileA);
            const B = await read(fileB);
            const sc: string[] = [];
            if (A.tokens.length < A.numPages * 3) sc.push(A.name);
            if (B.tokens.length < B.numPages * 3) sc.push(B.name);
            if (sc.length) { if (id === runId.current) setScanned(sc); return; }
            setProgress(t.comparing);
            await yieldToBrowser();
            const r = await compareDocs(A, B);
            if (id !== runId.current) return;
            setResult(r);
        } catch (e) {
            if (id === runId.current) setError(readErrorMessage(e, lang));
        } finally {
            if (id === runId.current) { setBusy(false); setProgress(''); }
        }
    };

    const reset = () => { runId.current++; setFileA(null); setFileB(null); setResult(null); setError(''); setScanned([]); setBusy(false); setOnlyFlagged(false); setFull(false); };

    const blocks = useMemo(() => (result ? buildBlocks(result, full, onlyFlagged && !full) : []), [result, full, onlyFlagged]);
    const listHunks = useMemo(() => (result ? result.hunks.map((h, i) => ({ h, i })).filter(({ h }) => !onlyFlagged || h.flags.length) : []), [result, onlyFlagged]);
    const flaggedTotal = result ? result.hunks.filter((h) => h.flags.length).length : 0;

    const downloadReport = () => {
        if (!result) return;
        const html = buildReport(result, t, lang);
        const name = `${t.reportPrefix}-${baseName(result.A.name)}-vs-${baseName(result.B.name)}.html`.replace(/[\\/:*?"<>|]+/g, '-');
        downloadBlob(new Blob([html], { type: 'text/html;charset=utf-8' }), name);
    };

    const fileZone = (which: 'a' | 'b') => {
        const f = which === 'a' ? fileA : fileB;
        return (
            <div>
                <p className="mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{which === 'a' ? t.original : t.changed}</p>
                <Dropzone
                    lang={lang}
                    onFiles={pick(which)}
                    multiple={which === 'a'}
                    label={f ? f.name : ui(lang).drop}
                    hint={f ? `${formatBytes(f.size, lang)} · ${t.tapToChange}` : ui(lang).browse}
                />
            </div>
        );
    };

    return (
        <Panel>
            <div className="grid gap-4 sm:grid-cols-2">
                {fileZone('a')}
                {fileZone('b')}
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Info className="h-4 w-4 mt-0.5 shrink-0 text-canada-red" aria-hidden="true" />{t.textOnly}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
                <PrimaryButton onClick={run} disabled={!fileA || !fileB || busy}><GitCompare className="h-4 w-4" aria-hidden="true" /> {t.compare}</PrimaryButton>
                {(fileA || fileB) && !busy && <SecondaryButton onClick={reset}>{t.startOver}</SecondaryButton>}
                {busy && <span className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{progress}</span>}
            </div>
            <ErrorBox>{error}</ErrorBox>
            {scanned.length > 0 && (
                <div role="alert" className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                    {scanned.map((n) => <p key={n}>{t.scanned(n)}</p>)}
                    <p className="mt-1">{t.scannedFix} <a href={`/${lang}/ocr-pdf`} className="font-bold text-canada-red underline">{t.ocrLink}</a></p>
                </div>
            )}

            {result && (
                <div className="mt-8">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{t.summary}</h2>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Stat value={`+${result.added.toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA')}`} label={t.added} cls="text-green-700 dark:text-green-400" />
                        <Stat value={`−${result.removed.toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA')}`} label={t.removed} cls="text-red-700 dark:text-red-400" />
                        <Stat value={String(result.hunks.length)} label={`${t.changes} · ${t.flaggedCount(flaggedTotal)}`} />
                        <Stat value={String(Math.max(result.A.numPages, result.B.numPages))} label={t.pagesCompared(result.A.numPages, result.B.numPages)} />
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{t.speed((result.ms / 1000).toFixed(2))}</p>
                    {result.coarse && <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">{t.coarse}</p>}

                    <div className="mt-5 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">{t.reportNote}</p>
                        <PrimaryButton onClick={downloadReport} className="shrink-0"><Download className="h-4 w-4" aria-hidden="true" /> {t.downloadReport}</PrimaryButton>
                    </div>

                    {result.hunks.length === 0 ? (
                        <p className="mt-6 rounded-xl bg-green-50 dark:bg-green-900/20 px-4 py-3 text-sm text-green-900 dark:text-green-200">{t.identical}</p>
                    ) : (
                        <>
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                <div className="inline-flex rounded-full border border-gray-300 dark:border-gray-700 p-1" role="tablist">
                                    {(['inline', 'list'] as const).map((k) => (
                                        <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                                            className={`min-h-10 rounded-full px-4 text-sm font-semibold ${tab === k ? 'bg-canada-red text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {k === 'inline' ? t.tabInline : t.tabList}
                                        </button>
                                    ))}
                                </div>
                                <label className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 cursor-pointer px-2">
                                    <input type="checkbox" className="h-5 w-5 accent-canada-red" checked={onlyFlagged} onChange={(e) => { setOnlyFlagged(e.target.checked); if (e.target.checked) setFull(false); }} />
                                    {t.onlyFlagged}
                                </label>
                                {tab === 'inline' && (
                                    <label className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 cursor-pointer px-2">
                                        <input type="checkbox" className="h-5 w-5 accent-canada-red" checked={full} onChange={(e) => { setFull(e.target.checked); if (e.target.checked) setOnlyFlagged(false); }} />
                                        {t.fullText}
                                    </label>
                                )}
                            </div>
                            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <del className="bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-200 line-through px-1 rounded">{t.legendRemoved}</del>{' '}
                                <ins className="bg-green-100 dark:bg-green-500/20 text-green-900 dark:text-green-200 no-underline px-1 rounded">{t.legendAdded}</ins>
                            </p>

                            {tab === 'inline' ? (
                                <div className="mt-3 space-y-3">
                                    {blocks.length === 0 && <p className="text-sm text-gray-600 dark:text-gray-400">{t.noFlagged}</p>}
                                    {blocks.slice(0, BLOCK_CAP).map((b, i) => {
                                        const prevTo = i > 0 ? blocks[i - 1].to : 0;
                                        const gap = b.from - prevTo;
                                        return (
                                            <div key={`${b.from}-${b.hunkIdx[0]}`}>
                                                {!full && !onlyFlagged && gap > 0 && <p className="text-center text-xs text-gray-400 mb-3">··· {t.unchanged(gap)} ···</p>}
                                                <BlockView r={result} block={b} full={full} t={t} />
                                            </div>
                                        );
                                    })}
                                    {blocks.length > BLOCK_CAP && <p className="text-sm text-gray-600 dark:text-gray-400">{t.showingFirst(BLOCK_CAP, blocks.length)}</p>}
                                </div>
                            ) : (
                                <ol className="mt-3 divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800">
                                    {listHunks.length === 0 && <li className="p-4 text-sm text-gray-600 dark:text-gray-400">{t.noFlagged}</li>}
                                    {listHunks.slice(0, LIST_CAP).map(({ h, i }) => {
                                        const kind = kindOf(h);
                                        return (
                                            <li key={i} className="p-3 md:p-4 text-sm">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="font-bold text-gray-900 dark:text-gray-100">#{i + 1}</span>
                                                    <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:text-gray-300">{pageLabel(t, h)}</span>
                                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{kind === 'added' ? t.addedLabel : kind === 'removed' ? t.removedLabel : t.replacedLabel}</span>
                                                    <FlagBadges flags={h.flags} t={t} />
                                                </div>
                                                <p className="mt-1 break-words leading-6">
                                                    {h.a1 > h.a0 && <del className="bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-200 line-through decoration-2 rounded px-0.5">{clip(result.A.tokens.slice(h.a0, h.a1).join(' '))}</del>}
                                                    {h.a1 > h.a0 && h.b1 > h.b0 && <span className="text-gray-400"> → </span>}
                                                    {h.b1 > h.b0 && <ins className="bg-green-100 dark:bg-green-500/20 text-green-900 dark:text-green-200 no-underline rounded px-0.5">{clip(result.B.tokens.slice(h.b0, h.b1).join(' '))}</ins>}
                                                </p>
                                            </li>
                                        );
                                    })}
                                    {listHunks.length > LIST_CAP && <li className="p-4 text-sm text-gray-600 dark:text-gray-400">{t.showingFirst(LIST_CAP, listHunks.length)}</li>}
                                </ol>
                            )}
                        </>
                    )}
                </div>
            )}
        </Panel>
    );
}

function Stat({ value, label, cls = 'text-gray-900 dark:text-gray-100' }: { value: string; label: string; cls?: string }) {
    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-3">
            <p className={`text-2xl font-extrabold ${cls}`}>{value}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{label}</p>
        </div>
    );
}
