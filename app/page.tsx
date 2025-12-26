import type { Metadata } from 'next';
import Script from 'next/script';
import { HomePageServer } from '@/components/pages/HomePageServer';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structuredData';
import { Language } from '@/utils/i18n';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
  description:
    'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
  alternates: {
    canonical: 'https://www.pdfcanada.ca/',
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = 'en' } = await searchParams;
  const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;

  const websiteSchema = generateWebsiteSchema();
  const orgSchema = generateOrganizationSchema();
  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomePageServer lang={currentLang} />
    </>
  );
}
