import { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getAllGuideSlugs } from '@/lib/guideConfig';
import { i18n, Locale } from '@/lib/i18n-config';

const baseUrl = 'https://www.pdfcanada.ca';

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
        lastModified: new Date(),
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
        lastModified: new Date(),
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
                lastModified: new Date(),
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
                lastModified: new Date(),
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
                lastModified: new Date(),
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
