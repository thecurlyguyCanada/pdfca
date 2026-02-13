import { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getAllGuideSlugs } from '@/lib/guideConfig';
import { i18n, Locale } from '@/lib/i18n-config';

const baseUrl = 'https://www.pdfcanada.ca';

// Static pages that should be in sitemap
const staticPages = ['about', 'howto', 'privacy', 'terms', 'pricing', 'surah-baqarah-pdf', 'surah-yasin-pdf', 'forms/irs-w4', 'tools/remove-pdf-text'];

interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    alternates?: {
        languages: Record<string, string>;
    };
}

// Helper to generate alternate links for all locales
function getAlternates(path: string) {
    const languages: Record<string, string> = {};
    i18n.locales.forEach(locale => {
        // Construct the URL: baseUrl + /locale + path (path should start with / if not empty)
        // path is expected to be e.g. "/about" or "/guides/slug" or "" for home
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        // For homepage (empty path), it becomes /en, /fr, etc.
        // For others, it becomes /en/about, etc.
        const url = path === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}${cleanPath}`;

        // Key format: simple 'en', 'fr', 'pt' or specific 'en-CA' etc.
        // Using 'x-default' pointing to 'en'
        languages[`${locale}-CA`] = url; // Targetting Canada specifically based on domain
        languages[locale] = url; // Fallback for the language globally
    });
    languages['x-default'] = `${baseUrl}/${i18n.defaultLocale}${path.startsWith('/') ? path : `/${path}`}`;

    return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const tools = getAllToolSlugs();
    const guides = getAllGuideSlugs();

    // Generic last modified date for this build
    const lastModified = new Date();

    const routes: SitemapEntry[] = [];

    // Homepage
    i18n.locales.forEach(locale => {
        routes.push({
            url: `${baseUrl}/${locale}`,
            lastModified,
            changeFrequency: 'daily',
            priority: 1,
            alternates: getAlternates(''),
        });
    });

    // Static pages
    staticPages.forEach((page) => {
        i18n.locales.forEach(locale => {
            routes.push({
                url: `${baseUrl}/${locale}/${page}`,
                lastModified,
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: getAlternates(`/${page}`),
            });
        });
    });

    // Guides index page
    i18n.locales.forEach(locale => {
        routes.push({
            url: `${baseUrl}/${locale}/guides`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
            alternates: getAlternates('/guides'),
        });
    });

    // Tool pages
    tools.forEach((slug) => {
        i18n.locales.forEach(locale => {
            routes.push({
                url: `${baseUrl}/${locale}/${slug}`,
                lastModified,
                changeFrequency: 'weekly',
                priority: 0.9,
                alternates: getAlternates(`/${slug}`),
            });
        });
    });

    // Guide pages
    guides.forEach((slug) => {
        // Higher priority for Pillar Hubs and Master Guide
        const isHub = ['ultimate-pdf-guide', 'pdf-conversions', 'pdf-editing', 'pdf-security', 'pdf-ocr-analysis'].includes(slug);
        const priority = isHub ? 0.9 : 0.7;
        const changeFrequency = isHub ? 'weekly' : 'monthly';

        i18n.locales.forEach(locale => {
            routes.push({
                url: `${baseUrl}/${locale}/guides/${slug}`,
                lastModified,
                changeFrequency,
                priority,
                alternates: getAlternates(`/guides/${slug}`),
            });
        });
    });

    return routes;
}
