import { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getAllGuideSlugs } from '@/lib/guideConfig';

const baseUrl = 'https://www.pdfcanada.ca';

// Static pages that should be in sitemap
const staticPages = ['about', 'howto', 'support', 'privacy', 'terms', 'pricing'];

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

    const routes: SitemapEntry[] = [];

    // Homepage with alternates
    routes.push({
        url: `${baseUrl}/en`,
        lastModified: new Date('2026-01-01'),
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
        lastModified: new Date('2026-01-01'),
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

    // Static pages with alternates (one entry per page, not per locale)
    staticPages.forEach((page) => {
        routes.push({
            url: `${baseUrl}/en/${page}`,
            lastModified: new Date('2026-01-01'),
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
        routes.push({
            url: `${baseUrl}/fr/${page}`,
            lastModified: new Date('2026-01-01'),
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

    // Guides index page
    routes.push({
        url: `${baseUrl}/en/guides`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
            languages: {
                'en-CA': `${baseUrl}/en/guides`,
                'fr-CA': `${baseUrl}/fr/guides`,
                'x-default': `${baseUrl}/en/guides`,
            },
        },
    });
    routes.push({
        url: `${baseUrl}/fr/guides`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
            languages: {
                'en-CA': `${baseUrl}/en/guides`,
                'fr-CA': `${baseUrl}/fr/guides`,
                'x-default': `${baseUrl}/en/guides`,
            },
        },
    });

    // Tool pages with alternates (explicit en/fr entries)
    tools.forEach((slug) => {
        routes.push({
            url: `${baseUrl}/en/${slug}`,
            lastModified: new Date('2026-01-01'),
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
        routes.push({
            url: `${baseUrl}/fr/${slug}`,
            lastModified: new Date('2026-01-01'),
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

    // Guide pages with alternates (explicit en/fr entries)
    guides.forEach((slug) => {
        routes.push({
            url: `${baseUrl}/en/guides/${slug}`,
            lastModified: new Date('2026-01-01'),
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
        routes.push({
            url: `${baseUrl}/fr/guides/${slug}`,
            lastModified: new Date('2026-01-01'),
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

    return routes;
}
