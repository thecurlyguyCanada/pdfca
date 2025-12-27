import { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getAllGuideSlugs } from '@/lib/guideConfig';
import { i18n, Locale } from '@/lib/i18n-config';

// Use Edge Runtime for fastest sitemap delivery to crawlers
export const runtime = 'edge';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pdfcanada.ca';

// Dynamic lastModified dates - updates with each build for freshness signals to crawlers
const BUILD_DATE = new Date();
const LAST_MODIFIED_HOMEPAGE = BUILD_DATE;
const LAST_MODIFIED_TOOLS = BUILD_DATE;
const LAST_MODIFIED_GUIDES = BUILD_DATE;
const LAST_MODIFIED_STATIC = BUILD_DATE;

// Static pages that should be in sitemap
const staticPages = ['about', 'howto', 'support', 'privacy', 'terms'];

interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    alternates?: {
        languages: Record<string, string>;
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const tools = getAllToolSlugs();
    const guides = getAllGuideSlugs();
    const locales = i18n.locales;

    const routes: SitemapEntry[] = [];

    // Homepage with alternates
    routes.push({
        url: `${baseUrl}/en`,
        lastModified: LAST_MODIFIED_HOMEPAGE,
        changeFrequency: 'daily',
        priority: 1,
        alternates: {
            languages: {
                'en-CA': `${baseUrl}/en`,
                'fr-CA': `${baseUrl}/fr`,
                'x-default': `${baseUrl}/en`,
            },
        },
    });

    routes.push({
        url: `${baseUrl}/fr`,
        lastModified: LAST_MODIFIED_HOMEPAGE,
        changeFrequency: 'daily',
        priority: 1,
        alternates: {
            languages: {
                'en-CA': `${baseUrl}/en`,
                'fr-CA': `${baseUrl}/fr`,
                'x-default': `${baseUrl}/en`,
            },
        },
    });

    // Static pages with alternates
    staticPages.forEach((page) => {
        locales.forEach((lang) => {
            routes.push({
                url: `${baseUrl}/${lang}/${page}`,
                lastModified: LAST_MODIFIED_STATIC,
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: {
                    languages: {
                        'en-CA': `${baseUrl}/en/${page}`,
                        'fr-CA': `${baseUrl}/fr/${page}`,
                        'x-default': `${baseUrl}/en/${page}`,
                    },
                },
            });
        });
    });

    // Tool pages with alternates
    tools.forEach((slug) => {
        locales.forEach((lang) => {
            routes.push({
                url: `${baseUrl}/${lang}/${slug}`,
                lastModified: LAST_MODIFIED_TOOLS,
                changeFrequency: 'weekly',
                priority: 0.9,
                alternates: {
                    languages: {
                        'en-CA': `${baseUrl}/en/${slug}`,
                        'fr-CA': `${baseUrl}/fr/${slug}`,
                        'x-default': `${baseUrl}/en/${slug}`,
                    },
                },
            });
        });
    });

    // Guide pages with alternates
    guides.forEach((slug) => {
        locales.forEach((lang) => {
            routes.push({
                url: `${baseUrl}/${lang}/guides/${slug}`,
                lastModified: LAST_MODIFIED_GUIDES,
                changeFrequency: 'monthly',
                priority: 0.8,
                alternates: {
                    languages: {
                        'en-CA': `${baseUrl}/en/guides/${slug}`,
                        'fr-CA': `${baseUrl}/fr/guides/${slug}`,
                        'x-default': `${baseUrl}/en/guides/${slug}`,
                    },
                },
            });
        });
    });

    return routes;
}
