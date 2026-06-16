import { Metadata } from 'next';
import { i18n, Locale } from './i18n-config';

interface MetadataOptions {
    title: string;
    description: string;
    path: string;
    lang: Locale;
    image?: string;
    keywords?: string[];
    noIndex?: boolean;
}

const BASE_URL = 'https://www.pdfcanada.ca';

/**
 * Enhanced Metadata Generator for pdfcanada.ca
 * Handles OpenGraph, Twitter, and localized alternates for all routes.
 */
export function constructMetadata({
    title,
    description,
    path,
    lang,
    image = '/og-image.png',
    keywords = [],
    noIndex = false,
}: MetadataOptions): Metadata {
    const cleanTitle = title.endsWith(' | pdfcanada.ca') ? title.slice(0, -15) : title;
    const displayTitle = `${cleanTitle} | pdfcanada.ca`;

    const fullUrl = `${BASE_URL}/${lang}${path === '/' ? '' : path}`;

    // Clean path for alternates (remove leading slash if root)
    const cleanPath = path === '/' ? '' : path;

    // Dynamically generate alternates matching merge-pdf page structure
    const languages = {
        'en-CA': `${BASE_URL}/en${cleanPath}`,
        'fr-CA': `${BASE_URL}/fr${cleanPath}`,
        'pt-BR': `${BASE_URL}/pt${cleanPath}`,
        'x-default': `${BASE_URL}/en${cleanPath}`,
    };

    // Format locale for OpenGraph (e.g., en_CA, fr_CA, pt_BR)
    const underscoreLocale = lang === 'pt' ? 'pt_BR' : `${lang}_CA`;

    return {
        title: displayTitle,
        description,
        keywords: [
            ...keywords,
            'PDF Canada',
            'free PDF tools',
            'secure PDF processing',
            'PIPEDA compliant',
        ],
        alternates: {
            canonical: fullUrl,
            languages,
        },
        openGraph: {
            title: displayTitle,
            description,
            url: fullUrl,
            siteName: 'pdfcanada.ca',
            locale: underscoreLocale,
            type: 'website',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: displayTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: displayTitle,
            description,
            images: [image],
            site: '@pdfcanada',
            creator: '@pdfcanada',
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
