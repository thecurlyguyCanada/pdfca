import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { ToolPageClient } from '@/components/pages/ToolPageClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedTools } from '@/components/RelatedTools';
import { getToolConfig, getAllToolSlugs } from '@/lib/toolConfig';
import { generateSoftwareApplicationSchema, generateBreadcrumbSchema, generateFAQSchema, generateToolFAQs } from '@/lib/structuredData';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';

// Static generation with ISR - revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = getAllToolSlugs();
    const params: { lang: Locale; tool: string }[] = [];

    i18n.locales.forEach(lang => {
        slugs.forEach(tool => {
            params.push({ lang, tool });
        });
    });

    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale; tool: string }>;
}): Promise<Metadata> {
    const { lang, tool } = await params;
    const config = getToolConfig(tool);

    if (!config) {
        return {
            title: 'Tool Not Found',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pdfcanada.ca';
    const path = `/${tool}`;

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        alternates: {
            canonical: `${baseUrl}/${lang}${path}`,
            languages: {
                'en-CA': `${baseUrl}/en${path}`,
                'fr-CA': `${baseUrl}/fr${path}`,
                'x-default': `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: `${config.title} | pdfcanada.ca`,
            description: config.description,
            url: `${baseUrl}/${lang}${path}`,
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
            siteName: 'pdfcanada.ca',
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: `${config.title} - Free PDF Tool Canada`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${config.title} | pdfcanada.ca`,
            description: config.description,
            images: [`${baseUrl}/og-image.png`],
            site: '@pdfcanada',
            creator: '@pdfcanada',
        },
    };
}

export default async function ToolPage({
    params,
}: {
    params: Promise<{ lang: Locale; tool: string }>;
}) {
    const { lang, tool } = await params;
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;
    const config = getToolConfig(tool);

    if (!config) {
        notFound();
    }

    // Generate structured data
    const softwareSchema = generateSoftwareApplicationSchema(config);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: lang === 'fr' ? 'Accueil' : 'Home', url: `https://www.pdfcanada.ca/${lang}` },
        { name: config.title, url: `https://www.pdfcanada.ca/${lang}/${config.slug}` },
    ]);
    const faqSchema = generateFAQSchema(generateToolFAQs(config.slug, config.title));

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
            {faqSchema && (
                <Script
                    id={`schema-faq-${config.slug}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[{ name: config.title }]}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <ToolPageClient toolConfig={config} lang={currentLang} />

                        <div className="mt-20">
                            <RelatedTools lang={currentLang} currentPath={`/${config.slug}`} />
                        </div>
                    </div>
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}
