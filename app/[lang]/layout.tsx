import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';
import { i18n, type Locale } from '@/lib/i18n-config';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Optimized font loading with next/font - no render blocking
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    preload: true,
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

// Viewport config for mobile optimization
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
    ],
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';

    const title = {
        en: 'Free PDF Tools Canada | Online & Secure No-Upload Service | pdfcanada.ca',
        fr: 'Outils PDF Gratuits Canada | Service en Ligne Sécurisé | pdfcanada.ca',
        pt: 'Ferramentas PDF Gratuitas | Serviço Online Seguro | pdfcanada.ca'
    };

    const description = {
        en: 'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
        fr: 'Les Outils PDF Canadiens Polis. 100% gratuits et sécurisés. Fusionnez, compressez et convertissez vos PDF directement dans votre navigateur. Aucun téléchargement. Respectueux de la vie privée.',
        pt: 'Ferramentas PDF Canadenses. 100% grátis e seguro. Junte, comprima e converta PDFs diretamente no seu navegador. Sem uploads. Privacidade em primeiro lugar.'
    };

    const keywords = {
        en: [
            'PDF tools Canada', 'free PDF editor', 'merge PDF', 'split PDF', 'compress PDF',
            'PDF converter', 'secure PDF tools', 'PIPEDA compliant', 'privacy-first PDF',
            'no-upload PDF tools', 'local PDF processing'
        ],
        fr: [
            'outils PDF Canada', 'éditeur PDF gratuit', 'fusionner PDF', 'diviser PDF',
            'compresser PDF', 'convertisseur PDF', 'outils PDF sécurisés', 'conforme PIPEDA',
            'PDF sans téléchargement', 'traitement PDF local'
        ],
        pt: [
            'ferramentas PDF online', 'editor PDF grátis', 'juntar PDF', 'dividir PDF',
            'comprimir PDF', 'converter PDF', 'PDF seguro', 'sem upload',
            'processamento local PDF'
        ]
    };

    // Construct self-referencing canonical based on current route if possible,
    // but layout doesn't know the full path segment easily.
    // Ideally, we provide a SAFE default that doesn't point to root if we are deep.
    // However, since we can't easily know the path here, we will OMIT specific canonical/alternate links
    // and rely on page.tsx to generate them correctly.
    // Providing a WRONG canonical (root) is worse than providing none (letting Google decide or having page.tsx handle it).

    return {
        metadataBase: new URL(baseUrl),
        title: {
            default: title[lang] || title['en'],
            template: `%s | pdfcanada.ca`,
        },
        description: description[lang] || description['en'],
        applicationName: 'pdfcanada.ca',
        authors: [{ name: 'pdfcanada.ca', url: baseUrl }],
        generator: 'Next.js',
        keywords: keywords[lang] || keywords['en'],
        referrer: 'strict-origin-when-cross-origin',
        creator: 'pdfcanada.ca',
        publisher: 'pdfcanada.ca',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
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
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/favicon.svg', type: 'image/svg+xml' },
                { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
                { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
                { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            ],
            apple: [
                { url: '/apple-touch-icon.png', sizes: '180x180' },
            ],
        },
        manifest: '/site.webmanifest',
        openGraph: {
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
            url: `${baseUrl}/${lang}`,
            siteName: 'pdfcanada.ca',
            title: title[lang] || title['en'],
            description: description[lang] || description['en'],
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'pdfcanada.ca',
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@pdfcanada',
            creator: '@pdfcanada',
            title: title[lang] || title['en'],
            description: description[lang] || description['en'],
            images: ['/og-image.png'],
        },
        category: 'technology',
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang} className={inter.variable} suppressHydrationWarning>
            <head>
                {/* DNS prefetch for external resources */}
                <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
                {/* Preconnect for critical third parties */}
                <link rel="preconnect" href="https://va.vercel-scripts.com" crossOrigin="anonymous" />
                {/* RSS and JSON Feed autodiscovery */}
                <link rel="alternate" type="application/rss+xml" title="pdfcanada.ca - PDF Guides RSS" href="https://www.pdfcanada.ca/feed.xml" />
                <link rel="alternate" type="application/feed+json" title="pdfcanada.ca - PDF Guides JSON" href="https://www.pdfcanada.ca/feed.json" />
            </head>
            <body className={`${inter.className} antialiased`} suppressHydrationWarning>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
