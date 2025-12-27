import type { Metadata } from 'next';
import Script from 'next/script';
import { HomePageServer } from '@/components/pages/HomePageServer';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/structuredData';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';

// Static generation with ISR
export const revalidate = 3600;

// Pre-generate for both locales
export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

const metadata = {
    en: {
        title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
        description: 'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
    },
    fr: {
        title: 'Outils PDF Gratuits Canada | Service en Ligne Sécurisé Sans Téléchargement',
        description: 'Les Outils PDF Canadiens Polis. 100% gratuits et sécurisés. Fusionnez, compressez, divisez et convertissez vos PDF directement dans votre navigateur. Aucun téléchargement—vos fichiers ne quittent jamais votre appareil.',
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';
    const content = metadata[lang] || metadata.en;

    return {
        title: content.title,
        description: content.description,
        keywords: lang === 'fr'
            ? ['outils PDF gratuits', 'fusionner PDF', 'compresser PDF', 'diviser PDF', 'convertir PDF', 'Canada', 'sécurisé', 'sans téléchargement']
            : ['free PDF tools', 'merge PDF', 'compress PDF', 'split PDF', 'convert PDF', 'Canada', 'secure', 'no upload'],
        authors: [{ name: 'pdfcanada.ca', url: baseUrl }],
        creator: 'pdfcanada.ca',
        publisher: 'pdfcanada.ca',
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: `${baseUrl}/${lang}`,
            languages: {
                'en-CA': `${baseUrl}/en`,
                'fr-CA': `${baseUrl}/fr`,
                'x-default': `${baseUrl}/en`,
            },
        },
        openGraph: {
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
            alternateLocale: lang === 'fr' ? 'en_CA' : 'fr_CA',
            url: `${baseUrl}/${lang}`,
            siteName: 'pdfcanada.ca',
            title: content.title,
            description: content.description,
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: lang === 'fr' ? 'Outils PDF Gratuits Canada' : 'Free PDF Tools Canada',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: content.title,
            description: content.description,
            images: [`${baseUrl}/og-image.png`],
            creator: '@pdfcanada',
        },
        category: 'technology',
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;

    const websiteSchema = generateWebsiteSchema();
    const orgSchema = generateOrganizationSchema();
    const businessSchema = generateLocalBusinessSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: lang === 'fr' ? 'Accueil' : 'Home', url: `https://www.pdfcanada.ca/${lang}` }
    ]);

    return (
        <>
            <Script
                id="schema-website"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="schema-organization"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <Script
                id="schema-business"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
            />
            <Script
                id="schema-breadcrumb"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <HomePageServer lang={currentLang} />
        </>
    );
}
