import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ToolPageClient } from '@/components/pages/ToolPageClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedTools } from '@/components/RelatedTools';
import { SEO } from '@/components/SEO';
import { getToolConfig, getAllToolSlugs } from '@/lib/toolConfig';
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

    const title = lang === 'fr' ? config.titleFr : config.title;
    const description = lang === 'fr' ? config.descriptionFr : config.description;
    const keywords = lang === 'fr' ? config.keywordsFr : config.keywords;

    const baseUrl = 'https://www.pdfcanada.ca';
    const path = `/${tool}`;

    return {
        title: title,
        description: description,
        keywords: keywords,
        alternates: {
            canonical: `${baseUrl}/${lang}${path}`,
            languages: {
                'en-CA': `${baseUrl}/en${path}`,
                'fr-CA': `${baseUrl}/fr${path}`,
                'x-default': `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: `${title} | pdfcanada.ca`,
            description: description,
            url: `${baseUrl}/${lang}${path}`,
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | pdfcanada.ca`,
            description: description,
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

    const localizedConfig = {
        ...config,
        title: lang === 'fr' ? config.titleFr : config.title,
        description: lang === 'fr' ? config.descriptionFr : config.description,
    };

    // Breadcrumbs for SEO component
    const breadcrumbs = [
        { name: lang === 'fr' ? 'Accueil' : 'Home', path: `/${lang}` },
        { name: localizedConfig.title, path: `/${lang}/${config.slug}` },
    ];

    return (
        <>
            <SEO
                title={localizedConfig.title}
                description={localizedConfig.description}
                lang={currentLang}
                canonicalPath={`/${lang}/${config.slug}`}
                breadcrumbs={breadcrumbs}
                price="0"
            />

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[{ name: localizedConfig.title }]}
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

