import { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getAllGuideSlugs } from '@/lib/guideConfig';
import { i18n, Locale } from '@/lib/i18n-config';
import { getToolArticle } from '@/lib/toolArticles';

const baseUrl = 'https://www.pdfcanada.ca';

// Static pages that should be in sitemap
const staticPages = ['about', 'contact', 'privacy', 'terms', 'security', 'accessibility', 'tools/remove-pdf-text'];

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
    languages['x-default'] = path === '' ? `${baseUrl}/${i18n.defaultLocale}` : `${baseUrl}/${i18n.defaultLocale}${path.startsWith('/') ? path : `/${path}`}`;

    return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const tools = Array.from(new Set(getAllToolSlugs()));
    const guides = getAllGuideSlugs();

    // Honest lastmod (playbook): tool pages use their article's `updated` date; the homepage uses the newest
    // tool date; other pages carry the date they last changed. Never the build time, which changes every deploy.
    const lastModified = new Date('2026-11-12T12:00:00Z');
    const toolDates = tools.flatMap((slug) => i18n.locales.map((l) => getToolArticle(slug, l)?.meta.updated)).filter(Boolean) as string[];
    const newest = toolDates.length ? new Date(`${toolDates.sort().slice(-1)[0]}T12:00:00Z`) : lastModified;

    const routes: SitemapEntry[] = [];

    // Homepage
    i18n.locales.forEach(locale => {
        routes.push({
            url: `${baseUrl}/${locale}`,
            lastModified: newest,
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

    // Tool pages: lastmod is the article's checked date when the page has one
    tools.forEach((slug) => {
        i18n.locales.forEach(locale => {
            const article = getToolArticle(slug, locale);
            routes.push({
                url: `${baseUrl}/${locale}/${slug}`,
                lastModified: article?.meta.updated ? new Date(`${article.meta.updated}T12:00:00Z`) : lastModified,
                changeFrequency: 'weekly',
                priority: 0.9,
                alternates: getAlternates(`/${slug}`),
            });
        });
    });

    // Guide pages
    guides.forEach((slug) => {
        // Higher priority for Pillar Hubs and Master Guide
        const priority = 0.7;
        const changeFrequency = 'monthly' as const;

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
