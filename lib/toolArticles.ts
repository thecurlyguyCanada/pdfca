import fs from 'node:fs';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import type { Locale } from './i18n-config';

/**
 * Long-form content for tool pages, one markdown file per tool and language in
 * content/tools/<lang>/<slug>.md. The frontmatter carries the SEO title and description, the
 * direct answer, the limits table, the FAQ and the last-checked date; the body is the article
 * (## headings phrased as the reader's questions, paragraphs, lists, tables).
 *
 * Read at build time only (server components and generateMetadata); never import from client code.
 */

export interface ToolArticleMeta {
    title: string;
    h1: string;
    lead: string;
    description: string;
    answer: string;
    updated: string; // YYYY-MM-DD
    limits: [string, string][];
    faq: { q: string; a: string }[];
    author?: string;
}

export interface ToolArticle {
    slug: string;
    lang: Locale;
    meta: ToolArticleMeta;
    body: string;
    words: number;
}

const ROOT = path.join(process.cwd(), 'content', 'tools');
const cache = new Map<string, ToolArticle | null>();

function parse(raw: string): { meta: Record<string, unknown>; body: string } {
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!m) return { meta: {}, body: raw };
    return { meta: (yamlLoad(m[1]) as Record<string, unknown>) || {}, body: m[2] };
}

export function getToolArticle(slug: string, lang: Locale): ToolArticle | null {
    const key = `${lang}/${slug}`;
    if (cache.has(key)) return cache.get(key)!;
    const file = path.join(ROOT, lang, `${slug}.md`);
    let out: ToolArticle | null = null;
    if (fs.existsSync(file)) {
        const { meta, body } = parse(fs.readFileSync(file, 'utf8'));
        const limits = Array.isArray(meta.limits) ? (meta.limits as unknown[]).map((r) => (Array.isArray(r) ? [String(r[0]), String(r[1])] : [String((r as any).label ?? ''), String((r as any).value ?? '')])) as [string, string][] : [];
        const faq = Array.isArray(meta.faq) ? (meta.faq as any[]).map((f) => ({ q: String(f.q ?? f.question ?? ''), a: String(f.a ?? f.answer ?? '') })).filter((f) => f.q && f.a) : [];
        const updated = meta.updated instanceof Date ? (meta.updated as Date).toISOString().slice(0, 10) : String(meta.updated ?? '');
        out = {
            slug,
            lang,
            meta: { title: String(meta.title ?? ''), h1: String(meta.h1 ?? meta.title ?? '').replace(/\s*\(\d{4}\)\s*$/, ''), lead: String(meta.lead ?? ''), description: String(meta.description ?? ''), answer: String(meta.answer ?? ''), updated, limits, faq, author: meta.author ? String(meta.author) : undefined },
            body: body.trim(),
            words: body.split(/\s+/).filter(Boolean).length,
        };
    }
    cache.set(key, out);
    return out;
}

export const hasToolArticle = (slug: string, lang: Locale) => getToolArticle(slug, lang) !== null;

/** Slugs that have an article in the given language. */
export function articleSlugs(lang: Locale): string[] {
    const dir = path.join(ROOT, lang);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3)).sort();
}

/** The numbered "### Step N: …" headings and their first paragraph, for HowTo structured data. */
export function articleSteps(article: ToolArticle): { name: string; text: string }[] {
    const lines = article.body.split('\n');
    const steps: { name: string; text: string }[] = [];
    for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(/^###\s+(?:Step|Étape)\s*\d+\s*[:.\u2013-]\s*(.+)$/i);
        if (!m) continue;
        let j = i + 1; while (j < lines.length && !lines[j].trim()) j++;
        const para: string[] = [];
        while (j < lines.length && lines[j].trim() && !/^#{2,3}\s/.test(lines[j])) para.push(lines[j++].trim());
        const text = para.join(' ').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        if (text) steps.push({ name: m[1].trim(), text });
    }
    return steps;
}
