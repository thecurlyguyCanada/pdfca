import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pdfcanada.ca'),
  title: {
    default: 'Free PDF Tools Canada | Online & Secure No-Upload Service | pdfcanada.ca',
    template: '%s | pdfcanada.ca',
  },
  description:
    'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant, serving all Canadian provinces and territories.',
  applicationName: 'pdfcanada.ca',
  authors: [{ name: 'pdfcanada.ca' }],
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
  ],
  referrer: 'strict-origin-when-cross-origin',
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
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.pdfcanada.ca/',
    siteName: 'pdfcanada.ca',
    title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
    description:
      'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'pdfcanada.ca - Free Online PDF Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pdfcanada',
    creator: '@pdfcanada',
    title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
    description:
      'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.pdfcanada.ca/',
    languages: {
      'en-CA': 'https://www.pdfcanada.ca/',
      'fr-CA': 'https://www.pdfcanada.ca/fr/',
    },
  },
  other: {
    'ai-content-declaration': 'human-generated',
    'geo.region': 'CA',
    'geo.placename': 'Canada',
    'geo.position': '56.1304;-106.3468',
    'ICBM': '56.1304, -106.3468',
    compliance: 'PIPEDA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-inter">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
