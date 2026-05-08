import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';
import { GUIDE_MAP, getAllGuideSlugs, GUIDE_TOOL_MAPPING } from '@/lib/guideConfig';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ALL_GUIDES } from '@/lib/guideMetadata';
import { URLS, getAssetUrl } from '@/config/urls';
import { generateArticleSchema } from '@/lib/structuredData';

// ISR: Revalidate every hour
// Note: Cannot use Edge Runtime with generateStaticParams in Next.js 15
// Note: Cannot use Edge Runtime with generateStaticParams in Next.js 15
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
    const slugs = getAllGuideSlugs();
    const params: { lang: Locale; slug: string }[] = [];

    i18n.locales.forEach(lang => {
        slugs.forEach(slug => {
            params.push({ lang, slug });
        });
    });

    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';
    const path = `/guides/${slug}`;

    const guideMeta = ALL_GUIDES.find(g => g.slug === slug);
    const isPt = lang === 'pt';
    const isFr = lang === 'fr';

    const title = guideMeta
        ? (isPt ? (guideMeta.titlePt || guideMeta.titleEn) : (isFr ? guideMeta.titleFr : guideMeta.titleEn))
        : (slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') + ' | Guide');

    const description = guideMeta
        ? (isPt ? (guideMeta.descPt || guideMeta.descEn) : (isFr ? guideMeta.descFr : guideMeta.descEn))
        : `Learn more about ${slug.replace(/-/g, ' ')} with our comprehensive guide on pdfcanada.ca.`;

    const ogImage = getAssetUrl(URLS.OG_IMAGE);

    return {
        title: `${title} | pdfcanada.ca`,
        description: description,
        alternates: {
            canonical: `${baseUrl}/${lang}${path}`,
            languages: {
                'en-CA': `${baseUrl}/en${path}`,
                'fr-CA': `${baseUrl}/fr${path}`,
                'pt-BR': `${baseUrl}/pt${path}`,
                'x-default': `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title: title,
            description: description,
            url: `${baseUrl}/${lang}${path}`,
            siteName: 'pdfcanada.ca',
            locale: isPt ? 'pt_BR' : (isFr ? 'fr_CA' : 'en_CA'),
            type: 'article',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [ogImage],
        },
    };
}

export default async function GuidePage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug } = await params;
    const currentLang = lang as Language;
    const GuideComponent = GUIDE_MAP[slug];

    if (!GuideComponent) {
        notFound();
    }

    // Get guide metadata for SEO
    const guideMeta = ALL_GUIDES.find(g => g.slug === slug);
    const isPt = lang === 'pt';
    const isFr = lang === 'fr';

    const title = guideMeta
        ? (isPt ? (guideMeta.titlePt || guideMeta.titleEn) : (isFr ? guideMeta.titleFr : guideMeta.titleEn))
        : slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

    const description = guideMeta
        ? (isPt ? (guideMeta.descPt || guideMeta.descEn) : (isFr ? guideMeta.descFr : guideMeta.descEn))
        : `Learn more about ${slug.replace(/-/g, ' ')} with our comprehensive guide.`;

    // Breadcrumbs for SEO
    const breadcrumbs = [
        { name: isPt ? 'Início' : (isFr ? 'Accueil' : 'Home'), path: `/${lang}` },
        { name: isPt ? 'Guias' : (isFr ? 'Guides' : 'Guides'), path: `/${lang}/guides` },
        { name: title, path: `/${lang}/guides/${slug}` },
    ];

    // Generate Article schema
    const articleSchema = generateArticleSchema({
        title,
        description,
        slug,
        lang: currentLang,
    });

    return (
        <>
            <SEO
                title={title}
                description={description}
                lang={currentLang}
                canonicalPath={`/${lang}/guides/${slug}`}
                ogType="article"
                breadcrumbs={breadcrumbs}
                schema={articleSchema}
            />
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main className="flex-grow">
                    {/* Strategic Tool Link at the Top */}
                    {(() => {
                        const toolSlug = GUIDE_TOOL_MAPPING[slug];
                        if (!toolSlug) return null;
                        
                        const isFr = lang === 'fr';
                        const isPt = lang === 'pt';
                        
                        return (
                            <div className="max-w-4xl mx-auto px-4 mt-8">
                                <Link 
                                    href={`/${lang}/${toolSlug}`}
                                    className="flex items-center justify-between p-4 bg-canada-red/5 border border-canada-red/20 rounded-2xl group hover:bg-canada-red transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-canada-red rounded-xl flex items-center justify-center text-white">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-wider text-canada-red group-hover:text-white/80">
                                                {isFr ? 'Outil Recommandé' : (isPt ? 'Ferramenta Recomendada' : 'Recommended Tool')}
                                            </span>
                                            <span className="font-bold text-slate-900 group-hover:text-white">
                                                {isFr ? `Utiliser l'outil ${title}` : (isPt ? `Usar ferramenta ${title}` : `Use the ${title} Tool Now`)}
                                            </span>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-canada-red group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                        );
                    })()}

                    <GuideComponent lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
