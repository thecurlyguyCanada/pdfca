import React from 'react';
import { Shield, CloudOff, Laptop, Award, Sparkles, Zap, Heart, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapleLeaf } from '@/components/MapleLeaf';
import Link from 'next/link';
import { translations, Language } from '@/utils/i18n';
import { getAllToolSlugs, getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export function HomePageServer({ lang }: Props) {
    const t = translations[lang];
    const toolSlugs = getAllToolSlugs();

    // Get localized tool names
    const tools = toolSlugs.map(slug => {
        const config = getLocalizedToolConfig(slug, lang);
        return {
            slug,
            title: config?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
    });

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={lang} />

                <main id="main-content" className="flex-grow">
                    {/* Hero Section - Static & SEO Heavy */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm border border-canada-red/10 rounded-full text-canada-red-dark text-xs sm:text-sm font-black tracking-widest uppercase shadow-md mb-6 sm:mb-8">
                            <MapleLeaf className="w-4 h-4" />
                            <span>{t.builtIn}</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-gray-900 mb-4 sm:mb-6">
                            {t.title}<br />
                            <span className="bg-gradient-to-r from-canada-red via-[#e31837] to-[#ff4d4d] bg-clip-text text-transparent block mt-3 sm:mt-4">
                                {t.subtitle}
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-12">
                            {t.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                            {[
                                { icon: Shield, text: t.localProcessing },
                                { icon: CloudOff, text: t.noSignup },
                                { icon: Laptop, text: t.secure },
                                { icon: Award, text: t.guarantee },
                            ].map(({ icon: Icon, text }, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl text-gray-700 text-xs sm:text-sm font-semibold shadow-sm"
                                >
                                    <Icon size={16} className="text-canada-red" aria-hidden="true" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Tools Grid */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                            {t.selectToolTitle}
                        </h2>

                        <nav aria-label={lang === 'fr' ? 'Outils PDF disponibles' : 'Available PDF tools'}>
                            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                {tools.map(({ slug, title }) => (
                                    <li key={slug}>
                                        <Link
                                            href={`/${lang}/${slug}`}
                                            className="group bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-canada-red hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] block"
                                        >
                                            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-canada-red/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-canada-red group-hover:scale-110 transition-all duration-200">
                                                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-canada-red group-hover:text-white transition-colors" aria-hidden="true" />
                                                </div>
                                                <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-canada-red transition-colors">
                                                    {title}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Value Props */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: Zap,
                                    title: t.hpFastTitle || 'Lightning Fast',
                                    desc: t.hpFastDesc || 'Process files instantly in your browser',
                                },
                                {
                                    icon: Heart,
                                    title: t.hpFreeTitle || '100% Free',
                                    desc: t.hpFreeDesc || 'No hidden costs, no subscriptions',
                                },
                                {
                                    icon: Users,
                                    title: t.hpPrivacyTitle || 'Privacy First',
                                    desc: t.hpPrivacyDesc || 'Your files never leave your device',
                                },
                            ].map(({ icon: Icon, title, desc }, idx) => (
                                <article
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-canada-red/10 rounded-2xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-canada-red" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{desc}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* SEO Text Block */}
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            {lang === 'fr' ? 'Outils PDF Canadiens Gratuits' : 'Free Canadian PDF Tools'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed" data-ai-summary="true">
                            {lang === 'fr'
                                ? 'pdfcanada.ca offre une suite complète d\'outils PDF gratuits qui fonctionnent entièrement dans votre navigateur. Fusionnez, divisez, compressez, convertissez et signez des PDF sans jamais télécharger vos fichiers sur un serveur. Tous les traitements se font localement sur votre appareil, garantissant une confidentialité totale de vos documents. Conforme aux normes canadiennes PIPEDA.'
                                : 'pdfcanada.ca offers a complete suite of free PDF tools that work entirely in your browser. Merge, split, compress, convert, and sign PDFs without ever uploading your files to a server. All processing happens locally on your device, ensuring complete privacy of your documents. Compliant with Canadian PIPEDA standards.'}
                        </p>
                    </section>
                </main>

                <Footer lang={lang} />
            </div>
        </>
    );
}
