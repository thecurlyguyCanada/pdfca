import { MetadataRoute } from 'next';

// Use Edge Runtime for fastest delivery to crawlers
export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://www.pdfcanada.ca/sitemap.xml',
    };
}
