import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/assets/'],
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://www.pdfcanada.ca/sitemap.xml',
    };
}
