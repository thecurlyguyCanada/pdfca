import type { Metadata } from 'next';

import { HomePageServer } from '@/components/pages/HomePageServer';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structuredData';
import { Language, translations } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { SEO } from '@/components/SEO';

// Static generation with ISR
export const revalidate = 3600;

// Pre-generate for both locales
export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

const metadata: Record<string, { title: string; description: string }> = {
    en: {
        title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
        description: 'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
    },
    fr: {
        title: 'Outils PDF Gratuits Canada | Service en Ligne Sécurisé Sans Téléchargement',
        description: 'Les Outils PDF Canadiens Polis. 100% gratuits et sécurisés. Fusionnez, compressez, divisez et convertissez vos PDF directement dans votre navigateur. Aucun téléchargement—vos fichiers ne quittent jamais votre appareil.',
    },
    de: {
        title: 'Kostenlose PDF-Tools Kanada | Online & Sicher Ohne Upload',
        description: 'Die höflichen kanadischen PDF-Tools. 100% kostenlos und sicher. PDFs direkt im Browser zusammenführen, komprimieren, teilen und konvertieren. Kein Upload—Ihre Dateien verlassen nie Ihr Gerät.',
    },
};

import { URLS } from '@/config/urls';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = URLS.DOMAIN;
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
        // verification: {
        //     google: 'google-site-verification=placeholder',
        // },
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
    const t = translations[currentLang];

    // Prepare FAQs with enhanced schema
    const faqs = t.seo.homeFaq.map(faq => ({
        q: faq.q,
        a: faq.a,
        // Add HowTo steps for process-related FAQs
        ...(faq.q.includes('merge') && {
            howTo: [
                { name: 'Select Files', text: 'Choose the PDF files you want to merge' },
                { name: 'Arrange Order', text: 'Drag and drop files to set the merge order' },
                { name: 'Download Result', text: 'Click merge and download your combined PDF' }
            ]
        }),
        ...(faq.q.includes('convert') && {
            howTo: [
                { name: 'Upload PDF', text: 'Select the PDF file you want to convert' },
                { name: 'Process Conversion', text: 'Our tool extracts text and structure automatically' },
                { name: 'Download Word File', text: 'Save the converted .docx file to your device' }
            ]
        })
    }));

    return (
        <>
            <SEO
                title={t.seo.homeTitle}
                description={t.seo.homeDesc}
                lang={currentLang}
                canonicalPath={`/${lang}`}
                faqs={faqs}
                breadcrumbs={[
                    { name: currentLang === 'fr' ? 'Accueil' : 'Home', path: `/${lang}` }
                ]}
            />
            <HomePageServer lang={currentLang} />
        </>
    );
}
