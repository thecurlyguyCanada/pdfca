import type { Metadata } from 'next';
import Script from 'next/script';
import { HomePage } from '@/components/pages/HomePage';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
  description:
    'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
  alternates: {
    canonical: 'https://www.pdfcanada.ca/',
  },
};

// Server Component by default
export default function Page() {
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
      <HomePage />
    </>
  );
}
