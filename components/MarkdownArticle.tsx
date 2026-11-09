import React from 'react';
import Link from 'next/link';

/**
 * A small, dependency-free renderer for the markdown subset used in content/tools:
 * ## and ### headings, paragraphs, **bold**, *italic*, `code`, [links](/en/merge-pdf), - / 1. lists,
 * > blockquotes and pipe tables. Headings get ids so the "In this guide" list can link to them.
 */

export const slugify = (s: string) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9À-ɏ]+/g, '-').replace(/^-|-$/g, '');

function inline(text: string, key: string): React.ReactNode[] {
    const out: React.ReactNode[] = [];
    const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
    let last = 0; let i = 0; let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
        if (m.index > last) out.push(text.slice(last, m.index));
        const t = m[0];
        if (t.startsWith('**')) out.push(<strong key={`${key}-${i++}`}>{t.slice(2, -2)}</strong>);
        else if (t.startsWith('`')) out.push(<code key={`${key}-${i++}`} className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.92em]">{t.slice(1, -1)}</code>);
        else if (t.startsWith('*')) out.push(<em key={`${key}-${i++}`}>{t.slice(1, -1)}</em>);
        else {
            const lm = t.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
            const href = lm[2];
            out.push(href.startsWith('/') ? <Link key={`${key}-${i++}`} href={href} className="text-canada-red underline underline-offset-2 hover:no-underline">{lm[1]}</Link> : <a key={`${key}-${i++}`} href={href} rel="nofollow noopener" target="_blank" className="text-canada-red underline underline-offset-2 hover:no-underline">{lm[1]}</a>);
        }
        last = m.index + t.length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

export function headingsOf(md: string): { level: number; text: string; id: string }[] {
    return md.split('\n').filter((l) => /^#{2,3}\s/.test(l)).map((l) => { const level = l.startsWith('###') ? 3 : 2; const text = l.replace(/^#{2,3}\s+/, '').trim(); return { level, text, id: slugify(text) }; });
}

export function MarkdownArticle({ markdown }: { markdown: string }) {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const nodes: React.ReactNode[] = [];
    let i = 0; let k = 0;
    const next = () => `b${k++}`;
    while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i++; continue; }
        if (/^#{2,3}\s/.test(line)) {
            const level = line.startsWith('###') ? 3 : 2; const text = line.replace(/^#{2,3}\s+/, '').trim(); const stepNo = text.match(/^(?:Step|Étape)\s*(\d+)/i); const id = stepNo ? `step-${stepNo[1]}` : slugify(text);
            nodes.push(level === 2 ? <h2 key={next()} id={id} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-5 scroll-mt-28">{inline(text, id)}</h2> : <h3 key={next()} id={id} className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-9 mb-3 scroll-mt-28">{inline(text, id)}</h3>);
            i++; continue;
        }
        if (line.startsWith('|')) {
            const rows: string[] = [];
            while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
            const cells = (r: string) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
            const head = cells(rows[0]); const body = rows.slice(1).filter((r) => !/^\|?\s*:?-{2,}/.test(r)).map(cells);
            const key = next();
            nodes.push(
                <div key={key} className="overflow-x-auto my-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"><tr>{head.map((h, j) => <th key={j} className="px-4 py-3 font-bold">{inline(h, `${key}h${j}`)}</th>)}</tr></thead>
                        <tbody>{body.map((r, ri) => <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">{r.map((c, ci) => <td key={ci} className="px-4 py-3 align-top text-gray-700 dark:text-gray-300">{inline(c, `${key}r${ri}c${ci}`)}</td>)}</tr>)}</tbody>
                    </table>
                </div>,
            );
            continue;
        }
        if (/^\s*[-*]\s/.test(line) || /^\s*\d+\.\s/.test(line)) {
            const ordered = /^\s*\d+\.\s/.test(line); const items: string[] = [];
            while (i < lines.length && (/^\s*[-*]\s/.test(lines[i]) || /^\s*\d+\.\s/.test(lines[i]))) items.push(lines[i++].replace(/^\s*(?:[-*]|\d+\.)\s+/, ''));
            const key = next(); const cls = 'my-5 pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed';
            nodes.push(ordered ? <ol key={key} className={`${cls} list-decimal`}>{items.map((t, j) => <li key={j}>{inline(t, `${key}${j}`)}</li>)}</ol> : <ul key={key} className={`${cls} list-disc`}>{items.map((t, j) => <li key={j}>{inline(t, `${key}${j}`)}</li>)}</ul>);
            continue;
        }
        if (line.startsWith('>')) {
            const q: string[] = [];
            while (i < lines.length && lines[i].startsWith('>')) q.push(lines[i++].replace(/^>\s?/, ''));
            const key = next();
            nodes.push(<blockquote key={key} className="my-6 border-l-4 border-canada-red bg-red-50/60 dark:bg-red-950/20 rounded-r-2xl px-5 py-4 text-gray-800 dark:text-gray-200">{inline(q.join(' '), key)}</blockquote>);
            continue;
        }
        const p: string[] = [];
        while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|\||\s*[-*]\s|\s*\d+\.\s|>)/.test(lines[i])) p.push(lines[i++].trim());
        const key = next();
        nodes.push(<p key={key} className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed text-[1.05rem]">{inline(p.join(' '), key)}</p>);
    }
    return <>{nodes}</>;
}
