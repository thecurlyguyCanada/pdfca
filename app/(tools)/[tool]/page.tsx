import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { ToolPageClient } from '@/components/pages/ToolPageClient';
import { getToolConfig, getAllToolSlugs } from '@/lib/toolConfig';
import { generateSoftwareApplicationSchema, generateBreadcrumbSchema } from '@/lib/structuredData';
import { Language } from '@/utils/i18n';

// Static generation with ISR - revalidate every hour
// Note: Cannot use Edge Runtime with generateStaticParams in Next.js 15
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getAllToolSlugs();
  return slugs.map((tool) => ({ tool }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const config = getToolConfig(tool);

  if (!config) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: `https://www.pdfcanada.ca/${config.slug}`,
    },
    openGraph: {
      title: `${config.title} | pdfcanada.ca`,
      description: config.description,
      url: `https://www.pdfcanada.ca/${config.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.title} | pdfcanada.ca`,
      description: config.description,
    },
  };
}

export default async function ToolPage({
  params,
  searchParams,
}: {
  params: Promise<{ tool: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const [{ tool }, { lang = 'en' }] = await Promise.all([params, searchParams]);
  const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;
  const config = getToolConfig(tool);

  if (!config) {
    notFound();
  }

  // Generate structured data
  const softwareSchema = generateSoftwareApplicationSchema(config);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.pdfcanada.ca' },
    { name: config.title, url: `https://www.pdfcanada.ca/${config.slug}` },
  ]);

  // Server Component - renders static shell
  return (
    <>
      <Script
        id={`schema-software-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id={`schema-breadcrumb-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ToolPageClient toolConfig={config} lang={currentLang} />
    </>
  );
}
