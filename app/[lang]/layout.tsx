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

export const metadata: Metadata = {
    metadataBase: new URL('https://www.pdfcanada.ca'),
    title: {
        default: 'Free PDF Tools Canada | Online & Secure No-Upload Service | pdfcanada.ca',
        template: '%s | pdfcanada.ca',
    },
    description:
        'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
    applicationName: 'pdfcanada.ca',
    authors: [{ name: 'pdfcanada.ca', url: 'https://www.pdfcanada.ca' }],
    generator: 'Next.js',
    keywords: [
        'PDF tools Canada',
        'free PDF editor',
        'merge PDF',
        'split PDF',
        'compress PDF',
        'PDF converter',
        'secure PDF tools',
        'PIPEDA compliant',
        'privacy-first PDF',
        'no-upload PDF tools',
        'how to edit PDF for free',
        'convertir PDF gratuit',
        'PDF privacy Canada',
        'local PDF processing'
    ],
    referrer: 'strict-origin-when-cross-origin',
    creator: 'pdfcanada.ca',
    publisher: 'pdfcanada.ca',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    // verification: {
    //     google: 'google-site-verification=placeholder',
    //     other: {
    //         'msvalidate.01': 'placeholder_bing'
    //     }
    // },
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
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
        ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        alternateLocale: 'fr_CA',
        url: 'https://www.pdfcanada.ca/',
        siteName: 'pdfcanada.ca',
        title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
        description:
            'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'pdfcanada.ca - Free Online PDF Tools',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@pdfcanada',
        creator: '@pdfcanada',
        title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
        description:
            'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser.',
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: 'https://www.pdfcanada.ca/',
        languages: {
            'en-CA': 'https://www.pdfcanada.ca/en',
            'fr-CA': 'https://www.pdfcanada.ca/fr',
            'x-default': 'https://www.pdfcanada.ca/en',
        },
    },
    category: 'technology',
};

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
