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
]);

/** Duplicate tool pages → the one that owns the intent. */
export const TOOL_REDIRECTS: Record<string, string> = {
    'pdf-to-jpeg': 'pdf-to-jpg',
    'jpeg-to-pdf': 'jpg-to-pdf',
    'pdf-page-remover': 'delete-pdf-pages',
};

export const isToolLive = (slug: string) => !RETIRED_TOOLS.has(slug) && !(slug in TOOL_REDIRECTS);

/** Hub pages under /guides/ that only linked to other guides → the guides index. */
export const HUB_GUIDES = new Set<string>(['pdf-conversions', 'pdf-editing', 'pdf-security', 'pdf-ocr-analysis']);

/** Off-topic download pages: live, noindex, not in the sitemap. */
export const NOINDEX_PAGES = new Set<string>(['surah-baqarah-pdf', 'surah-yasin-pdf']);

export const isGuideLive = (slug: string) => !RETIRED_GUIDES.has(slug) && !(slug in GUIDE_REDIRECTS) && !HUB_GUIDES.has(slug) && !RETIRED_TOOLS.has(slug) && !(slug in TOOL_REDIRECTS);
