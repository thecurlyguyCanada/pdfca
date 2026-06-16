import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';
import { getAllHubSlugs, getHubConfig } from '@/lib/hubConfig';
import { getToolConfig } from '@/lib/toolConfig';
import { Language, translations } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { TOOL_ICONS } from '@/components/ToolIcons';
import { Sparkles, ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
    const slugs = getAllHubSlugs();
    const params: { lang: Locale; hub: string }[] = [];

    i18n.locales.forEach(lang => {
        slugs.forEach(hub => {
            params.push({ lang, hub });
        });
    });

    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale; hub: string }>;
}): Promise<Metadata> {
    const { lang, hub } = await params;
    const config = getHubConfig(hub);

    if (!config) {
        return { title: 'Not Found' };
    }

    const title = config.title[lang] || config.title['en'];
    const description = config.description[lang] || config.description['en'];
    const baseUrl = 'https://www.pdfcanada.ca';
    const path = `/tools/${hub}`;

    return {
        title,
        description,
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
            description,
            url: `${baseUrl}/${lang}${path}`,
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description,
        }
    };
}

export default async function HubPage({
    params,
}: {
    params: Promise<{ lang: Locale; hub: string }>;
}) {
    const { lang, hub } = await params;
    const currentLang = lang as Language;
    const hubConfig = getHubConfig(hub);

    if (!hubConfig) {
        notFound();
    }

    const title = hubConfig.title[currentLang] || hubConfig.title['en'];
    const description = hubConfig.description[currentLang] || hubConfig.description['en'];

    const breadcrumbs = [
        { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
        { name: title, path: `/${lang}/tools/${hub}` },
    ];

    const spokes = hubConfig.spokes.map(slug => {
        const config = getToolConfig(slug);
        return {
            slug,
            title: config?.title[currentLang] || slug,
            description: config?.description[currentLang] || '',
            Icon: TOOL_ICONS[slug] || Sparkles
        };
    });

    return (
        <>
            <SEO
                title={title}
                description={description}
                lang={currentLang}
                canonicalPath={`/${lang}/tools/${hub}`}
                breadcrumbs={breadcrumbs}
            />

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[{ name: title }]}
                    />

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
                        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </section>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {spokes.map((tool) => (
                                <Link 
                                    key={tool.slug} 
                                    href={`/${lang}/${tool.slug}`}
                                    className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-canada-red hover:shadow-2xl transition-all duration-300 flex flex-col"
                                >
                                    <div className="w-16 h-16 bg-canada-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-canada-red transition-colors duration-300">
                                        <tool.Icon className="w-8 h-8 text-canada-red group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-canada-red">
                                        {tool.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                                        {tool.description}
                                    </p>
                                    <div className="flex items-center text-canada-red font-bold text-sm">
                                        {currentLang === 'fr' ? 'Ouvrir l\'outil' : (currentLang === 'pt' ? 'Abrir ferramenta' : 'Open Tool')} 
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Topical Authority Content Section */}
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {currentLang === 'fr' ? 'Pourquoi choisir nos outils?' : (currentLang === 'pt' ? 'Por que escolher nossas ferramentas?' : 'Why Choose Our PDF Tools?')}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {currentLang === 'fr' 
                                    ? 'Tous nos outils sont conçus avec une approche locale unique. Contrairement aux services cloud traditionnels, pdfcanada.ca exécute tout le code de traitement directement dans votre navigateur web.'
                                    : 'All our tools are built with a unique local-first approach. Unlike traditional cloud services, pdfcanada.ca runs all processing code directly in your web browser.'}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8 mt-12">
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-gray-900 mb-2">{currentLang === 'fr' ? 'Confidentialité Totale' : '100% Privacy'}</h4>
                                    <p className="text-sm text-gray-500">{currentLang === 'fr' ? 'Vos documents ne quittent jamais votre ordinateur.' : 'Your documents never leave your computer, ensuring total data sovereignty.'}</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-gray-900 mb-2">{currentLang === 'fr' ? 'Performance WASM' : 'WASM Performance'}</h4>
                                    <p className="text-sm text-gray-500">{currentLang === 'fr' ? 'Traitement ultra-rapide grâce au WebAssembly.' : 'Blazing fast processing powered by high-performance WebAssembly.'}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}
