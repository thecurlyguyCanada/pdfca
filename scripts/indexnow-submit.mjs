#!/usr/bin/env node
/**
 * Push every URL in the live sitemap to IndexNow (Bing, Yandex, Naver, Seznam) through the site's
 * own /api/indexnow route, 500 URLs a request.
 *
 *   node scripts/indexnow-submit.mjs                       # all sitemap URLs
 *   node scripts/indexnow-submit.mjs /en/merge-pdf /fr/merge-pdf   # specific paths
 *   SITE=https://preview.example node scripts/indexnow-submit.mjs
 */
const SITE = process.env.SITE || 'https://www.pdfcanada.ca';
const args = process.argv.slice(2);

async function sitemapUrls() {
    const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urls = args.length ? args.map((p) => (p.startsWith('http') ? p : `${SITE}${p}`)) : await sitemapUrls();
console.log(`${urls.length} URLs`);
for (let i = 0; i < urls.length; i += 500) {
    const batch = urls.slice(i, i + 500);
    const res = await fetch(`${SITE}/api/indexnow`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ urls: batch }) });
    console.log(`batch ${i / 500 + 1}: HTTP ${res.status} ${await res.text().then((t) => t.slice(0, 200))}`);
}
