#!/usr/bin/env node
/**
 * Lints content/tools/<lang>/<slug>.md: frontmatter fields, title rule, word count, FAQ count,
 * limits table, internal links that resolve to live pages, and no claims the product can't back.
 * Exit code 1 on any failure. Run: npm run content:check
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
const liveGuides = ['acsm-to-pdf', 'edit-xfa-pdf', 'change-pdf-viewer-mac'];
const BANNED = [/unlimited file size/i, /no file size limit/i, /military[- ]grade/i, /HIPAA[- ]compliant/i, /PIPEDA[- ]compliant/i, /AI[- ]powered/i, /guarantee/i, /100% accurate/i, /fastest in the world/i, /#1 /i];

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
        if ([...title].length > 70) fail(id, `title ${[...title].length} chars (max 70): ${title}`);
        if (!/\d|\bfree\b|\bgratuit|\bno\b|\bsans\b|\bsecond|\bmin|\bbrowser|\bnavigateur|\bdevice|\bappareil|\bonline|\ben ligne/i.test(title.slice(0, 52))) fail(id, `title has no answer/number in the first 50 chars: ${title}`);
        const d = String(meta.description || ''); if (d.length < 110 || d.length > 165) fail(id, `description ${d.length} chars (110–165)`);
        if (String(meta.answer || '').split(/\s+/).length < 20) fail(id, 'answer under 20 words');
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(meta.updated instanceof Date ? meta.updated.toISOString().slice(0, 10) : meta.updated))) fail(id, `updated not YYYY-MM-DD: ${meta.updated}`);
        if (!Array.isArray(meta.limits) || meta.limits.length < 5) fail(id, `limits table needs ≥5 rows (${meta.limits?.length ?? 0})`);
        if (!Array.isArray(meta.faq) || meta.faq.length < 6 || meta.faq.length > 8) fail(id, `faq needs 6–8 questions (${meta.faq?.length ?? 0})`);
        for (const f of meta.faq || []) if (!f.q || !f.a || String(f.a).split(/\s+/).length < 15) fail(id, `faq answer too short: ${f.q}`);
        const wc = body.split(/\s+/).filter(Boolean).length; words.push(wc);
        if (wc < 1400 || wc > 2700) fail(id, `body ${wc} words (1,400–2,700)`);
        const h2 = [...body.matchAll(/^## (.+)$/gm)].map((x) => x[1]);
        if (h2.length < 6) fail(id, `only ${h2.length} H2s (min 6)`);
        if (h2.filter((h) => /\?$/.test(h.trim())).length < Math.ceil(h2.length / 2)) fail(id, 'fewer than half the H2s are questions');
        if (!/^\|/m.test(body)) fail(id, 'no table in body');
        for (const [, href] of body.matchAll(/\]\((\/[^)]+)\)/g)) {
            const mm = href.match(/^\/(en|fr)\/(?:guides\/)?([a-z0-9-]+)\/?$/);
            if (!mm) { if (!/^\/(en|fr)(\/(about|guides|tools\/remove-pdf-text|security|pricing|howto))?\/?$/.test(href)) fail(id, `link not a live page: ${href}`); continue; }
            const [, l, s] = mm; const isGuide = href.includes('/guides/');
            if (l !== lang) fail(id, `link to other language: ${href}`);
            if (isGuide ? !liveGuides.includes(s) : !liveTools.includes(s)) fail(id, `link to retired/unknown page: ${href}`);
        }
        for (const re of BANNED) if (re.test(body) || re.test(JSON.stringify(meta))) fail(id, `banned claim ${re}`);
        if (/\/pt\/|portugu/i.test(body)) fail(id, 'mentions Portuguese');
    }
}
const avg = words.length ? Math.round(words.reduce((a, b) => a + b, 0) / words.length) : 0;
console.log(`${files} files, avg ${avg} words, ${failures} failure(s)`);
process.exit(failures ? 1 : 0);
