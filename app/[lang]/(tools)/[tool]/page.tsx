import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

import { ToolPageClient } from '@/components/pages/ToolPageClient';
import StandaloneTool from '@/components/tools/standalone/StandaloneTool';
import { STANDALONE_TOOLS } from '@/lib/standaloneTools';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedTools } from '@/components/RelatedTools';
import { SEO } from '@/components/SEO';
import { SocialShare } from '@/components/SocialShare';
import { getToolConfig, getAllToolSlugs } from '@/lib/toolConfig';
import { isToolLive } from '@/lib/retired';
import { articleSteps, getToolArticle } from '@/lib/toolArticles';
import { ToolArticle } from '@/components/ToolArticle';
import { AUTHOR } from '@/config/author';
import { Language, translations } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';

// Static generation with ISR - revalidate every hour
// Static generation - force static, no dynamic params permitted
export const dynamic = 'force-static';
export const dynamicParams = false;

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
    const config = isToolLive(tool) ? getToolConfig(tool) : undefined;

    if (!config) {
        return {
            title: 'Tool Not Found',
        };
    }

    // The long-form article (content/tools/<lang>/<slug>.md) owns the title and description when it exists.
    const article = getToolArticle(tool, lang);
    const title = article?.meta.title || config.title[lang] || config.title['en'];
    const description = article?.meta.description || config.description[lang] || config.description['en'];
    const keywords = config.keywords[lang] || config.keywords['en'];

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
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
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
    const currentLang = lang as Language;
    const config = isToolLive(tool) ? getToolConfig(tool) : undefined;

    if (!config) {
        notFound();
    }

    const article = getToolArticle(tool, lang);
    const localizedConfig = {
        title: article?.meta.title || config.title[lang] || config.title['en'],
        description: article?.meta.description || config.description[lang] || config.description['en'],
    };
    const shortTitle = (config.title[lang] || config.title['en']).split(/\s[-|–]\s/)[0].trim();

    const featureList = config.featureList?.[currentLang] || config.featureList?.['en'];

    // Breadcrumbs for SEO component
    const breadcrumbs = [
        { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
        { name: shortTitle, path: `/${lang}/${config.slug}` },
    ];

    // Get tool-specific FAQs from i18n
    const t = translations[currentLang];
    const toolKey = config.i18nKey || tool.replace(/-/g, '');
    // en uses top-level keys, fr/pt might be nested but should be flattened to match en.
    // For now, access via any to allow dynamic lookup on TranslationStructure
    const toolContent = (t as any)[toolKey];
    const legacyFaqs = toolContent?.faq || [];
    // Article FAQs replace the short i18n ones when the article exists.
    const toolFaqs = article ? article.meta.faq.map((f) => ({ question: f.q, answer: f.a })) : legacyFaqs;

    // Prepare FAQs with enhanced schema including HowTo steps
    const faqs = toolFaqs.map((faq: any) => ({
        q: faq.question,
        a: faq.answer,
        // Add HowTo steps for process-oriented FAQs
        ...(toolContent?.steps && {
            howTo: toolContent.steps.map((step: string, idx: number) => ({
                name: `Step ${idx + 1}`,
                text: step
            }))
        })
    }));

    return (
        <>
            <SEO
                title={localizedConfig.title}
                description={localizedConfig.description}
                lang={currentLang}
                canonicalPath={`/${lang}/${config.slug}`}
                breadcrumbs={breadcrumbs}
                price="0"
                faqs={faqs}
                featureList={featureList}
                author={{ name: AUTHOR.name, url: AUTHOR.url, type: 'Person' }}
                dateModified={article?.meta.updated}
                steps={article ? articleSteps(article) : undefined}
            />

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[{ name: shortTitle }]}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <header className="text-center max-w-3xl mx-auto mb-8">
                            <h1 className="hero-title text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-gray-100">{article?.meta.h1 || shortTitle}</h1>
                            <p className="hero-desc mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{article?.meta.lead || localizedConfig.description}</p>
                        </header>
                        <Suspense fallback={
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-canada-red"></div>
                            </div>
                        }>
                            {STANDALONE_TOOLS.has(config.slug)
                                ? <div className="max-w-4xl mx-auto"><StandaloneTool slug={config.slug} lang={currentLang} /></div>
                                : <ToolPageClient toolConfig={config} lang={currentLang} />}
                        </Suspense>

                        {article && <ToolArticle article={article} lang={lang} />}

                        {/* Expert Guide Link - only while a tool still has a separate guide */}
                        {!article && config.guideSlug && (
                            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                            {currentLang === 'fr' ? 'Besoin d\'aide ?' : (currentLang === 'pt' ? 'Precisa de ajuda?' : 'Need Expert Help?')}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {currentLang === 'fr' 
                                                ? `Consultez notre guide complet sur comment utiliser ${localizedConfig.title}.` 
                                                : (currentLang === 'pt' 
                                                    ? `Veja nosso guia completo sobre como usar ${localizedConfig.title}.`
                                                    : `Read our comprehensive guide on how to master ${localizedConfig.title}.`)}
                                        </p>
                                    </div>
                                </div>
                                <Link 
                                    href={`/${lang}/guides/${config.guideSlug}`}
                                    className="bg-white dark:bg-slate-900 text-blue-600 border border-blue-200 dark:border-blue-800 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 group whitespace-nowrap"
                                >
                                    {currentLang === 'fr' ? 'Voir le Guide Expert' : (currentLang === 'pt' ? 'Ver Guia Especialista' : 'View Expert Guide')}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )}

                        {/* Social Share - Bing SEO: Social signals are a ranking factor */}
                        <div className="mt-8 flex justify-center">
                            <SocialShare
                                url={`https://www.pdfcanada.ca/${lang}/${config.slug}`}
                                title={localizedConfig.title}
                                lang={currentLang}
                            />
                        </div>

                        {/* Tool-specific FAQs (legacy; the article renders its own) */}
                        {!article && toolFaqs.length > 0 && (
                            <div className="mt-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
                                    {currentLang === 'fr' ? 'Questions Fréquentes' : (currentLang === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions')}
                                </h2>
                                <div className="space-y-6">
                                    {toolFaqs.map((faq: any, i: number) => (
                                        <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3">{faq.question}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-20">
                            <RelatedTools 
                                lang={currentLang} 
                                currentPath={`/${config.slug}`} 
                                relatedSlugs={config.relatedSlugs}
                            />
                        </div>
                    </div>
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}

