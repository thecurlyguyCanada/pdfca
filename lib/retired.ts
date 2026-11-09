/**
 * Pages retired after the Google August 2026 spam update (18–21 Aug 2026).
 *
 * The site lost ~98% of Google impressions in that week while Bing was unaffected, which points at an
 * algorithmic spam demotion, not a technical fault. The patterns Google would have scored: 438 URLs made of
 * 146 pages × 3 languages where Portuguese mostly fell back to English, 78 thin templated "guides" with several
 * doorway variants per intent (merge-pdf / merge-pdf-online / combine-pdf / merge-large-pdfs), vertical-fluff
 * hubs, and off-topic Quran PDF download pages carrying two thirds of the clicks.
 *
 * - RETIRED_GUIDES → 410 Gone (no replacement page).
 * - GUIDE_REDIRECTS → 308 to the one page that owns the intent.
 * - NOINDEX_PAGES → stay live for existing visitors, out of the sitemap and robots:noindex, until they move
 *   to their own domain.
 * - RETIRED_LOCALES → whole language trees returned as 410.
 */

export const RETIRED_LOCALES = ['pt'] as const;

export const RETIRED_GUIDES = new Set<string>([
    // "pillar" hubs and vertical fluff with no tool behind them
    'ultimate-pdf-guide',
    'private-pdf-tools',
    'legal-pdf-tools',
    'pdf-accessibility-2026',
    'healthcare-pdf-security',
    'finance-pdf-security',
    'financial-statement-pdf',
    'google-classroom-student-guide',
    // guides for converters that do not exist as tools and never earned a click
    'email-to-pdf',
    'insert-picture-in-pdf',
    'trim-pdf',
    'flatten-pdf',
    'ocr-pdf',
    'avif-to-pdf',
    'ipynb-to-pdf',
]);

/** Doorway variants → the canonical guide for that intent. */
export const GUIDE_REDIRECTS: Record<string, string> = {
    'combine-pdf': 'merge-pdf',
    'merge-pdf-online': 'merge-pdf',
    'merge-large-pdfs': 'merge-pdf',
    'reduce-pdf-size': 'compress-pdf',
    'compress-pdf-online': 'compress-pdf',
    'compress-pdf-no-quality-loss': 'compress-pdf',
    'split-pdf-online': 'split-pdf',
    'pdf-to-word-online': 'pdf-to-word',
    'pdf-to-word-offline': 'pdf-to-word',
    'pdf-to-word-formatting': 'pdf-to-word',
    'pdf-to-word-scanned': 'pdf-to-word',
    'pdf-page-remover': 'delete-pdf-pages',
    'jpeg-to-pdf': 'jpg-to-pdf',
    'pdf-to-jpeg': 'pdf-to-jpg',
    'pdf-whiteout': 'remove-pdf-text',
};

/** Tools with no measurable demand in Canada and no traffic in six months → 410. Their guides go with them. */
export const RETIRED_TOOLS = new Set<string>([
    'xrechnung-viewer', 'pdf-to-ubl', 'analyze-pdf', 'pdf-to-xml', 'xml-to-pdf', 'odt-to-pdf', 'gif-to-pdf', 'rtf-to-pdf',
    'tif-to-pdf', 'pdf-to-svg', 'cbr-to-pdf', 'odg-to-pdf', 'make-pdf-non-editable', 'invoice-ocr', 'pdf-reader',
    // Second cut (Nov 2026): off-core converters a focused PDF-tools site does not need. The code-to-PDF pair
    // earned ~70 clicks in six months; the rest earned none.
    'barcode-generator', 'aspx-to-pdf', 'php-to-pdf', 'ofx-to-excel', 'pages-to-pdf', 'html-to-pdf', 'pdf-to-kindle', 'pdf-to-csv',
    // Verified broken while writing the guides (Nov 2026): unlock-pdf ignores the password and writes files that
    // stay encrypted; ppt-to-pdf dumps text runs and stretches images instead of rendering slides. A page that
    // fails on every real file is worse than no page. Bring them back when the tools work.
    'unlock-pdf', 'ppt-to-pdf',
]);

/** Duplicate tool pages → the one that owns the intent. */
export const TOOL_REDIRECTS: Record<string, string> = {
    'pdf-to-jpeg': 'pdf-to-jpg',
    'jpeg-to-pdf': 'jpg-to-pdf',
    'pdf-page-remover': 'delete-pdf-pages',
    // One image→PDF page and one PDF→image page, like the competitors that rank: jpg-to-pdf accepts every
    // image format; pdf-to-jpg explains when to pick PNG and links to pdf-to-png.
    'image-to-pdf': 'jpg-to-pdf',
    'png-to-pdf': 'jpg-to-pdf',
    'pdf-to-image': 'pdf-to-jpg',
};

export const isToolLive = (slug: string) => !RETIRED_TOOLS.has(slug) && !(slug in TOOL_REDIRECTS);

/**
 * Guides folded into their tool page (the article now lives under the tool, one URL per intent).
 * Value = path after the language prefix. Standalone guides without a tool (acsm-to-pdf,
 * edit-xfa-pdf, change-pdf-viewer-mac) stay as guides.
 */
export const GUIDE_TO_TOOL: Record<string, string> = {
    'compress-pdf': '/compress-pdf',
    'crop-pdf': '/crop-pdf',
    'delete-pdf-pages': '/delete-pdf-pages',
    'epub-to-pdf': '/epub-to-pdf',
    'excel-to-pdf': '/excel-to-pdf',
    'extract-pdf-pages': '/extract-pdf-pages',
    'heic-to-pdf': '/heic-to-pdf',
    'image-to-pdf': '/jpg-to-pdf',
    'jpg-to-pdf': '/jpg-to-pdf',
    'make-pdf-fillable': '/make-pdf-fillable',
    'merge-pdf': '/merge-pdf',
    'organize-pdf': '/organize-pdf',
    'pdf-to-epub': '/pdf-to-epub',
    'pdf-to-excel': '/pdf-to-excel',
    'pdf-to-image': '/pdf-to-jpg',
    'pdf-to-jpg': '/pdf-to-jpg',
    'pdf-to-png': '/pdf-to-png',
    'pdf-to-ppt': '/pdf-to-ppt',
    'pdf-to-word': '/pdf-to-word',
    'png-to-pdf': '/jpg-to-pdf',
    'ppt-to-pdf': '/ppt-to-pdf',
    'remove-pdf-text': '/tools/remove-pdf-text',
    'rotate-pdf': '/rotate-pdf',
    'sign-pdf': '/sign-pdf',
    'split-pdf': '/split-pdf',
    'word-to-pdf': '/word-to-pdf',
};

/** Hub pages under /guides/ that only linked to other guides → the guides index. */
export const HUB_GUIDES = new Set<string>(['pdf-conversions', 'pdf-editing', 'pdf-security', 'pdf-ocr-analysis']);

/** Whole pages a focused tool site does not need: a pricing page for a free product, a changelog, a US tax form,
 *  thin "hub" category pages and comparison filler. 410 in every language. */
export const RETIRED_PATHS = new Set<string>([
    'pricing', 'changelog', 'compatibility', 'local-vs-cloud', 'howto', 'forms/irs-w4', 'forms',
    'tools/pdf-converter-tools', 'tools/pdf-editing-tools', 'tools/secure-pdf-tools', 'tools/business-pdf-tools',
]);

/** Off-topic download pages: live, noindex, not in the sitemap. */
export const NOINDEX_PAGES = new Set<string>(['surah-baqarah-pdf', 'surah-yasin-pdf']);

export const isGuideLive = (slug: string) => !RETIRED_GUIDES.has(slug) && !(slug in GUIDE_REDIRECTS) && !(slug in GUIDE_TO_TOOL) && !HUB_GUIDES.has(slug) && !RETIRED_TOOLS.has(slug) && !(slug in TOOL_REDIRECTS);
