#!/usr/bin/env node
/**
 * Lints content/tools/<lang>/<slug>.md: frontmatter fields, title rule, word count, FAQ count,
 * limits table, internal links that resolve to live pages, and no claims the product can't back. Also checks
 * that every live tool has an article in every language, sits in a homepage hub group and has 3–4 related tools.
 * Exit code 1 on any failure. Runs in prebuild, so a broken page fails the build. Run: npm run content:check
 */
import fs from 'node:fs';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';

const ROOT = path.resolve('content/tools');
const LANGS = ['en', 'fr'];
const retired = fs.readFileSync('lib/retired.ts', 'utf8');
const toolConfig = fs.readFileSync('lib/toolConfig.ts', 'utf8');
const block = (name, endName) => retired.slice(retired.indexOf(`export const ${name}`), retired.indexOf(`export const ${endName}`));
const retiredTools = new Set([...block('RETIRED_TOOLS', 'TOOL_REDIRECTS').matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]));
const redirectedTools = new Set([...block('TOOL_REDIRECTS', 'isToolLive').matchAll(/'([a-z0-9-]+)': '/g)].map((m) => m[1]));
const liveTools = [...new Set([...toolConfig.matchAll(/slug: '([a-z0-9-]+)'/g)].map((m) => m[1]))].filter((s) => !retiredTools.has(s) && !redirectedTools.has(s));
const RETIRED_PATHS = new Set([...block('RETIRED_PATHS', 'NOINDEX_PAGES').matchAll(/'([a-z0-9/-]+)'/g)].map((m) => m[1]));
const STATIC_PAGES = new Set(['about', 'contact', 'privacy', 'terms', 'security', 'accessibility', 'guides', 'tools/remove-pdf-text']);
const liveGuides = ['acsm-to-pdf', 'edit-xfa-pdf', 'change-pdf-viewer-mac'];
const BANNED = [/unlimited file size/i, /no file size limit/i, /military[- ]grade/i, /HIPAA[- ]compliant/i, /PIPEDA[- ]compliant/i, /AI[- ]powered/i, /guarantee/i, /100% accurate/i, /fastest in the world/i, /#1 /i];

// Specific small jobs (playbook: "split in half, add page numbers can run 500–800") get a shorter range than the
// head-term tools; pdfcanada's floor stays higher because its pages carry Canadian specifics.
const SMALL = new Set(['split-pdf-in-half', 'alternate-mix-pdf', 'add-page-numbers', 'watermark-pdf', 'protect-pdf', 'flatten-pdf', 'split-pdf-by-size', 'add-image-to-pdf']);
const groups = fs.readFileSync('lib/toolGroups.ts', 'utf8');
const hubSlugs = new Set([...groups.slice(0, groups.indexOf('export const hubName')).matchAll(/slug: '([a-z0-9-]+)'/g)].map((m) => m[1]));
const relatedBlock = groups.slice(groups.indexOf('export const RELATED'));
const related = Object.fromEntries([...relatedBlock.matchAll(/'([a-z0-9-]+)': \[([^\]]*)\]/g)].map((m) => [m[1], [...m[2].matchAll(/'([a-z0-9-]+)'/g)].map((x) => x[1])]));

let failures = 0; let files = 0; const words = [];
const fail = (f, msg) => { failures++; console.log(`✗ ${f}: ${msg}`); };

for (const lang of LANGS) {
    const dir = path.join(ROOT, lang);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
        files++;
        const id = `${lang}/${file}`; const slug = file.slice(0, -3);
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!m) { fail(id, 'no frontmatter'); continue; }
        let meta; try { meta = yamlLoad(m[1]); } catch (e) { fail(id, `yaml: ${e.message.split('\n')[0]}`); continue; }
        const body = m[2];
        if (!liveTools.includes(slug)) fail(id, 'slug is not a live tool');
        for (const k of ['title', 'description', 'h1', 'lead', 'answer', 'updated', 'limits', 'faq']) if (meta[k] == null) fail(id, `missing ${k}`);
        const title = String(meta.title || '');
        if ([...title].length > 62) fail(id, `title ${[...title].length} chars (max 62): ${title}`);
        if (!/\d|\bfree\b|\bgratuit|\bno\b|\bsans\b|\bsecond|\bmin|\bbrowser|\bnavigateur|\bdevice|\bappareil|\bonline|\ben ligne/i.test(title.slice(0, 52))) fail(id, `title has no answer/number in the first 50 chars: ${title}`);
        const d = String(meta.description || ''); if (d.length < 110 || d.length > 165) fail(id, `description ${d.length} chars (110–165)`);
        if (String(meta.answer || '').split(/\s+/).length < 20) fail(id, 'answer under 20 words');
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(meta.updated instanceof Date ? meta.updated.toISOString().slice(0, 10) : meta.updated))) fail(id, `updated not YYYY-MM-DD: ${meta.updated}`);
        if (!Array.isArray(meta.limits) || meta.limits.length < 5) fail(id, `limits table needs ≥5 rows (${meta.limits?.length ?? 0})`);
        if (!Array.isArray(meta.faq) || meta.faq.length < 6 || meta.faq.length > 8) fail(id, `faq needs 6–8 questions (${meta.faq?.length ?? 0})`);
        for (const f of meta.faq || []) if (!f.q || !f.a || String(f.a).split(/\s+/).length < 15) fail(id, `faq answer too short: ${f.q}`);
        const wc = body.split(/\s+/).filter(Boolean).length; words.push(wc);
        const [minW, maxW, minH2] = SMALL.has(slug) ? [800, 2000, 4] : [1400, 2700, 6];
        if (wc < minW || wc > maxW) fail(id, `body ${wc} words (${minW}–${maxW})`);
        const h2 = [...body.matchAll(/^## (.+)$/gm)].map((x) => x[1]);
        if (h2.length < minH2) fail(id, `only ${h2.length} H2s (min ${minH2})`);
        if ((body.match(/^### /gm) || []).length < (SMALL.has(slug) ? 2 : 3)) fail(id, 'too few ### use-case/step sections');
        if (!/^\|\s*(Problem|Problème)/m.test(body)) fail(id, 'no troubleshooting table (header starting "| Problem" / "| Problème")');
        if (h2.filter((h) => /\?$/.test(h.trim())).length < Math.ceil(h2.length / 2)) fail(id, 'fewer than half the H2s are questions');
        if (!/^\|/m.test(body)) fail(id, 'no table in body');
        // Order matters: retired pages first, then live static pages, then tools and guides.
        for (const [, rawHref] of body.matchAll(/\]\((\/[^)]+)\)/g)) {
            const href = rawHref.replace(/#.*$/, '');
            const lm = href.match(/^\/(en|fr)(?=\/|$)/);
            if (!lm) { fail(id, `link without a language prefix: ${rawHref}`); continue; }
            if (lm[1] !== lang) fail(id, `link to other language: ${rawHref}`);
            const rest = href.slice(3).replace(/^\/|\/$/g, '');
            if (RETIRED_PATHS.has(rest)) { fail(id, `link to a retired page: ${rawHref}`); continue; }
            if (rest === '' || STATIC_PAGES.has(rest)) continue;
            const mm = rest.match(/^(guides\/)?([a-z0-9-]+)$/);
            if (!mm) { fail(id, `link not a live page: ${rawHref}`); continue; }
            if (mm[1] ? !liveGuides.includes(mm[2]) : !liveTools.includes(mm[2])) fail(id, `link to retired/unknown page: ${rawHref}`);
        }
        for (const re of BANNED) if (re.test(body) || re.test(JSON.stringify(meta))) fail(id, `banned claim ${re}`);
        if (/\/pt\/|portugu/i.test(body)) fail(id, 'mentions Portuguese');
    }
}
for (const slug of liveTools) {
    for (const lang of LANGS) if (!fs.existsSync(path.join(ROOT, lang, `${slug}.md`))) fail(`${lang}/${slug}.md`, 'live tool has no article');
    if (!hubSlugs.has(slug)) fail(`lib/toolGroups.ts`, `live tool ${slug} is missing from the homepage hub`);
    const r = related[slug] || [];
    if (r.length < 3 || r.length > 4) fail('lib/toolGroups.ts', `${slug} needs 3–4 RELATED tools (${r.length})`);
    for (const x of r) if (!liveTools.includes(x)) fail('lib/toolGroups.ts', `${slug} RELATED → ${x} is not live`);
}
for (const slug of hubSlugs) if (!liveTools.includes(slug)) fail('lib/toolGroups.ts', `hub lists ${slug}, which is not live`);

const avg = words.length ? Math.round(words.reduce((a, b) => a + b, 0) / words.length) : 0;
console.log(`${files} files, avg ${avg} words, ${failures} failure(s)`);
process.exit(failures ? 1 : 0);
