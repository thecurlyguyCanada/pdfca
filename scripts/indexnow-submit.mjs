#!/usr/bin/env node
/**
 * Push every URL in the live sitemap to IndexNow (Bing, Yandex, Naver, Seznam) through the site's
 * own /api/indexnow route, 500 URLs a request.
 *
 *   node scripts/indexnow-submit.mjs                       # all sitemap URLs
 *   node scripts/indexnow-submit.mjs /en/merge-pdf /fr/merge-pdf   # specific paths
 *   SITE=https://preview.example node scripts/indexnow-submit.mjs
 *   DAYS=7 node scripts/indexnow-submit.mjs               # only pages whose sitemap lastmod is in the last 7 days
 *
 * Runs with DAYS=7 after every successful production deploy (.github/workflows/indexnow.yml). Sitemap lastmod
 * only changes when a page's facts change, so this pushes real updates, not the whole site each deploy.
 */
const SITE = process.env.SITE || 'https://www.pdfcanada.ca';
const args = process.argv.slice(2);

const DAYS = process.env.DAYS ? Number(process.env.DAYS) : null;

async function sitemapUrls() {
    const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
    const cutoff = DAYS ? Date.now() - DAYS * 86400000 : 0;
    return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
        .map((m) => ({ loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1], lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] }))
        .filter((u) => u.loc && (!DAYS || !u.lastmod || Date.parse(u.lastmod) >= cutoff))
        .map((u) => u.loc);
}

const urls = args.length ? args.map((p) => (p.startsWith('http') ? p : `${SITE}${p}`)) : await sitemapUrls();
console.log(`${urls.length} URLs`);
if (!urls.length) process.exit(0);
for (let i = 0; i < urls.length; i += 500) {
    const batch = urls.slice(i, i + 500);
    const res = await fetch(`${SITE}/api/indexnow`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ urls: batch }) });
    console.log(`batch ${i / 500 + 1}: HTTP ${res.status} ${await res.text().then((t) => t.slice(0, 200))}`);
}
