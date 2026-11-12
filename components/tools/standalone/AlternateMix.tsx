'use client';

/**
 * Alternate & mix: interleaves the pages of two PDFs (front sides + back sides from a single-sided scanner)
 * into one document: F1, B1, F2, B2… Lossless page copy with pdf-lib (nothing is re-rendered).
 */
import { useCallback, useState } from 'react';
import { ArrowLeftRight, FileText, Layers, X, AlertTriangle } from 'lucide-react';
import {
    Dropzone, Panel, ErrorBox, PrimaryButton, SecondaryButton, ResultCard,
    pdfBlob, yieldToBrowser, loadPdfLib, readErrorMessage, PdfReadError, ui,
} from './shared';

const STR = {
    en: {
        front: 'Front sides (odd pages)',
        back: 'Back sides (even pages)',
        dropFront: 'Drop the front sides PDF',
        dropBack: 'Drop the back sides PDF',
        dropHint: 'or click to choose a file',
        notPdf: (name: string) => `“${name}” isn’t a PDF. Choose a file that ends in .pdf.`,
        pages: (n: number) => `${n} ${n === 1 ? 'page' : 'pages'}`,
        remove: 'Remove',
        swap: 'Swap front and back',
        reverse: 'Back sides are in reverse order',
        reverseHint: 'Leave this on if you scanned the back sides by turning the stack over: the scanner then gives them last page first.',
        orderLabel: 'New order',
        frontShort: 'Front',
        backShort: 'Back',
        pageShort: (n: number) => `p. ${n}`,
        more: (n: number) => `+ ${n} more`,
        unequal: (a: number, b: number, extra: number, which: 'front' | 'back') =>
            `The files don’t have the same number of pages (${a} front, ${b} back). The ${extra === 1 ? 'extra page' : `${extra} extra pages`} from the ${which === 'front' ? 'front sides' : 'back sides'} will be added at the end.`,
        run: 'Mix pages',
        reading: 'Reading the file…',
        progress: (i: number, n: number) => `Page ${i} of ${n}`,
        saving: 'Saving the new PDF…',
        done: (n: number) => `${n} pages`,
        outName: 'mixed.pdf',
    },
    fr: {
        front: 'Recto (pages impaires)',
        back: 'Verso (pages paires)',
        dropFront: 'Déposez le PDF des rectos',
        dropBack: 'Déposez le PDF des versos',
        dropHint: 'ou cliquez pour choisir un fichier',
        notPdf: (name: string) => `« ${name} » n’est pas un PDF. Choisissez un fichier qui se termine par .pdf.`,
        pages: (n: number) => `${n} page${n > 1 ? 's' : ''}`,
        remove: 'Retirer',
        swap: 'Inverser recto et verso',
        reverse: 'Les versos sont en ordre inverse',
        reverseHint: 'Laissez cette case cochée si vous avez numérisé les versos en retournant la pile : le numériseur les donne alors de la dernière à la première page.',
        orderLabel: 'Nouvel ordre',
        frontShort: 'Recto',
        backShort: 'Verso',
        pageShort: (n: number) => `p. ${n}`,
        more: (n: number) => `+ ${n} autre${n > 1 ? 's' : ''}`,
        unequal: (a: number, b: number, extra: number, which: 'front' | 'back') =>
            `Les fichiers n’ont pas le même nombre de pages (${a} recto${a > 1 ? 's' : ''}, ${b} verso${b > 1 ? 's' : ''}). ${extra === 1 ? 'La page en trop' : `Les ${extra} pages en trop`} ${which === 'front' ? 'des rectos' : 'des versos'} ${extra === 1 ? 'sera ajoutée' : 'seront ajoutées'} à la fin.`,
        run: 'Alterner les pages',
        reading: 'Lecture du fichier…',
        progress: (i: number, n: number) => `Page ${i} sur ${n}`,
        saving: 'Enregistrement du nouveau PDF…',
        done: (n: number) => `${n} pages`,
        outName: 'melange.pdf',
    },
};

type Slot = { file: File; bytes: Uint8Array; pages: number };
type Entry = { from: 0 | 1; page: number }; // page is 0-based in its source file

/** Plain-language message for any failure: unexpected internal errors are reported as an unreadable file. */
function errorText(e: unknown, lang: 'en' | 'fr'): string {
    const name = (e as { name?: string })?.name;
    if (e instanceof PdfReadError || name === 'PasswordException' || name === 'InvalidPDFException') return readErrorMessage(e, lang);
    console.error(e);
    return ui(lang).damaged;
}

/** F1, B1, F2, B2…; whatever is left over in the longer file follows at the end. */
function interleave(na: number, nb: number, reverseBacks: boolean): Entry[] {
    const out: Entry[] = [];
    for (let i = 0; i < Math.max(na, nb); i++) {
        if (i < na) out.push({ from: 0, page: i });
        if (i < nb) out.push({ from: 1, page: reverseBacks ? nb - 1 - i : i });
    }
    return out;
}

async function readSlot(file: File): Promise<Slot> {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const doc = await loadPdfLib(bytes);
    let pages = 0;
    try { pages = doc.getPageCount(); } catch { /* broken page tree */ }
    if (!pages) throw new PdfReadError('damaged');
    return { file, bytes, pages };
}

export default function AlternateMix({ lang }: { lang: 'en' | 'fr' }) {
    const t = STR[lang];
    const [slots, setSlots] = useState<[Slot | null, Slot | null]>([null, null]);
    const [reverse, setReverse] = useState(true);
    const [busy, setBusy] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{ blob: Blob; name: string; pages: number } | null>(null);

    const isPdf = (f: File) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf';

    const load = useCallback(async (which: 0 | 1, files: File[]) => {
        setError(null); setResult(null);
        // Two files dropped on one box: first is fronts, second is backs.
        const targets: [0 | 1, File][] = files.length >= 2 ? [[0, files[0]], [1, files[1]]] : [[which, files[0]]];
        for (const [slot, f] of targets) {
            if (!f) continue;
            if (!isPdf(f)) { setError(t.notPdf(f.name)); continue; }
            setBusy(t.reading);
            try {
                const s = await readSlot(f);
                setSlots((prev) => { const next: [Slot | null, Slot | null] = [prev[0], prev[1]]; next[slot] = s; return next; });
            } catch (e) {
                setError(`${f.name}: ${errorText(e, lang)}`);
            } finally {
                setBusy(null);
            }
        }
    }, [lang, t]);

    const remove = (which: 0 | 1) => {
        setResult(null); setError(null);
        setSlots((prev) => { const next: [Slot | null, Slot | null] = [prev[0], prev[1]]; next[which] = null; return next; });
    };
    const swap = () => { setResult(null); setSlots((prev) => [prev[1], prev[0]]); };

    const [a, b] = slots;
    const order = a && b ? interleave(a.pages, b.pages, reverse) : [];
    const extra = a && b ? Math.abs(a.pages - b.pages) : 0;

    const run = useCallback(async () => {
        if (!a || !b) return;
        setError(null); setResult(null);
        setBusy(t.reading);
        try {
            const { PDFDocument } = await import('pdf-lib');
            const docs = [await loadPdfLib(a.bytes), await loadPdfLib(b.bytes)];
            const out = await PDFDocument.create();
            const entries = interleave(a.pages, b.pages, reverse);
            // Copy each file's pages in one call (shared fonts/images are copied once), then add them in mixed order.
            const copied = await Promise.all([0, 1].map((k) => out.copyPages(docs[k], entries.filter((e) => e.from === k).map((e) => e.page))));
            const pos = [0, 0];
            for (let i = 0; i < entries.length; i++) {
                const e = entries[i];
                out.addPage(copied[e.from][pos[e.from]++]);
                if (i % 20 === 0 || i === entries.length - 1) {
                    setBusy(t.progress(i + 1, entries.length));
                    await yieldToBrowser();
                }
            }
            setBusy(t.saving);
            await yieldToBrowser();
            const bytes = await out.save();
            setResult({ blob: pdfBlob(bytes), name: t.outName, pages: entries.length });
        } catch (e) {
            setError(errorText(e, lang));
        } finally {
            setBusy(null);
        }
    }, [a, b, lang, reverse, t]);

    const slotBox = (which: 0 | 1) => {
        const s = slots[which];
        const title = which === 0 ? t.front : t.back;
        return (
            <section aria-label={title} className="min-w-0">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                {s ? (
                    <div className="flex items-center gap-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 px-4 py-4 min-h-[88px]">
                        <FileText className="h-7 w-7 text-canada-red shrink-0" aria-hidden="true" />
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 dark:text-gray-100 truncate" title={s.file.name}>{s.file.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400" data-testid={which === 0 ? 'front-count' : 'back-count'}>{t.pages(s.pages)}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => remove(which)}
                            disabled={!!busy}
                            aria-label={`${t.remove}: ${s.file.name}`}
                            className="h-10 w-10 shrink-0 grid place-items-center rounded-full text-gray-500 hover:text-canada-red hover:bg-red-50 dark:hover:bg-red-500/10"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                ) : (
                    <Dropzone lang={lang} multiple={which === 0} onFiles={(f) => load(which, f)} label={which === 0 ? t.dropFront : t.dropBack} hint={t.dropHint} />
                )}
            </section>
        );
    };

    const PREVIEW = 8;
    return (
        <Panel>
            <div className="grid gap-4 sm:grid-cols-2">
                {slotBox(0)}
                {slotBox(1)}
            </div>
            {(a || b) && (
                <div className="mt-3 flex justify-center">
                    <SecondaryButton onClick={swap} disabled={!!busy} className="min-h-[40px]">
                        <ArrowLeftRight className="h-4 w-4" aria-hidden="true" /> {t.swap}
                    </SecondaryButton>
                </div>
            )}

            <label className="mt-6 flex items-start gap-3 cursor-pointer min-h-[40px]">
                <input type="checkbox" checked={reverse} onChange={(e) => { setReverse(e.target.checked); setResult(null); }} className="mt-0.5 h-5 w-5 shrink-0 accent-canada-red" />
                <span>
                    <span className="block font-semibold text-gray-900 dark:text-gray-100">{t.reverse}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">{t.reverseHint}</span>
                </span>
            </label>

            {a && b && (
                <>
                    {extra > 0 && (
                        <p role="status" className="mt-4 flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-500/10 rounded-xl px-4 py-3">
                            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{t.unequal(a.pages, b.pages, extra, a.pages > b.pages ? 'front' : 'back')}</span>
                        </p>
                    )}
                    <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.orderLabel}</p>
                        <ol className="flex flex-wrap gap-1.5" data-testid="order-preview">
                            {order.slice(0, PREVIEW).map((e, i) => (
                                <li key={i} className={`rounded-lg px-2 py-1 text-xs font-semibold ${e.from === 0 ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : 'bg-red-50 text-canada-red dark:bg-red-500/10'}`}>
                                    {i + 1}. {e.from === 0 ? t.frontShort : t.backShort} {t.pageShort(e.page + 1)}
                                </li>
                            ))}
                            {order.length > PREVIEW && <li className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">{t.more(order.length - PREVIEW)}</li>}
                        </ol>
                    </div>
                </>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <PrimaryButton onClick={run} disabled={!a || !b || !!busy}>
                    <Layers className="h-5 w-5" aria-hidden="true" /> {t.run}
                </PrimaryButton>
                {busy && <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{busy}</p>}
            </div>

            <ErrorBox>{error}</ErrorBox>
            {result && <ResultCard lang={lang} blob={result.blob} name={result.name} note={t.done(result.pages)} />}
        </Panel>
    );
}
