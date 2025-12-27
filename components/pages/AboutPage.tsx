import React from 'react';
import { Heart, Zap, Shield, Users, Globe, CheckCircle, MapPin, Target, ArrowRight, Leaf } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

import Link from 'next/link';

interface AboutPageProps {
    lang: Language;
}

const getContent = () => ({
    en: {
        seo: {
            title: "About PDFCanada.ca | Our Story & Mission | Free Canadian PDF Tools",
            desc: "PDFCanada.ca was built in Canada to make PDFs effortless. Learn about our founder's story, our privacy-first mission, and why we created free, fast PDF tools for Canadians."
        },
        h1: "About PDFCanada.ca",
        subtitle: "Built in Canada to Make PDFs Effortless",
        intro: "PDFCanada.ca was created with a simple belief: working with PDFs should be easy, fast, and accessible — not expensive or frustrating.",
        introSub: "In a world where PDFs power everything from schoolwork and job applications to business contracts and government forms, the tools to manage them shouldn't slow people down. That's why PDFCanada.ca exists.",

        founderTitle: "The Founder's Story",
        founderIntro: "PDFCanada.ca began as a personal solution to a very common problem.",
        founderStory: "The platform was built by someone who spent years working closely with digital documents — across projects, businesses, and real-world workflows where PDFs were unavoidable. Day after day, the same frustrations kept appearing:",
        frustrations: [
            "PDF tools that locked basic features behind subscriptions",
            "Converters that broke formatting or failed entirely",
            "Software that required downloads, installs, or sign-ups",
            "Unclear privacy practices for sensitive files"
        ],
        founderConclusion: "What should have taken seconds often turned into wasted time and unnecessary costs. Instead of accepting that as \"just the way it is,\" the decision was made to build something better — a clean, reliable PDF platform that actually respects users.",
        founderOrigin: "PDFCanada.ca started as a small internal tool — built to solve real problems, not to sell upgrades. Over time, it evolved into a public platform so others wouldn't have to deal with the same frustrations.",

        whyTitle: "Why PDFCanada.ca Was Created",
        whyIntro: "The vision was never to compete with bloated enterprise software. The goal was much simpler:",
        whyPoints: [
            "Do one thing well",
            "Keep tools fast and intuitive",
            "Remove barriers like forced accounts and paywalls",
            "Treat user data with care and transparency"
        ],
        whyConclusion: "PDFCanada.ca is built for people who just want to get things done — without tutorials, installations, or hidden catches.",

        differentTitle: "What Makes PDFCanada.ca Different",
        differentiators: [
            {
                icon: "globe",
                title: "Built With Canadian Users in Mind",
                desc: "From students and job seekers to small businesses and professionals, the platform reflects how documents are actually used every day in Canada."
            },
            {
                icon: "zap",
                title: "Simple, Efficient Tools",
                desc: "Upload, convert, download — no unnecessary steps. The interface stays clean so the work stays simple."
            },
            {
                icon: "shield",
                title: "Privacy-First by Design",
                desc: "Files are processed securely and automatically removed after completion. Your documents remain yours."
            },
            {
                icon: "target",
                title: "Built From Real Experience",
                desc: "Every tool on PDFCanada.ca exists because it solves a real problem encountered firsthand — not because it looks good on a feature list."
            }
        ],

        missionTitle: "Our Mission",
        missionText: "To remove friction from everyday document tasks.",
        missionSub: "Whether you're converting PDFs to Word, merging files, splitting pages, or turning images into PDFs, PDFCanada.ca aims to be the tool you trust when accuracy and speed matter.",

        futureTitle: "Looking Ahead",
        futureIntro: "PDFCanada.ca continues to grow with a clear focus:",
        futurePoints: [
            "More practical PDF tools",
            "Faster and more accurate conversions",
            "A smoother experience across all devices"
        ],
        futureConclusion: "The platform will always stay grounded in its original purpose: simple tools built for real people, not upsells.",

        thanksTitle: "Thank You for Using PDFCanada.ca",
        thanksText: "PDFCanada.ca exists because one frustrating problem turned into a commitment to build something better — and because thousands of users rely on it every day.",
        thanksSub: "If you're here, you're part of that journey.",

        ctaTitle: "Ready to Get Started?",
        ctaButton: "Explore Our Tools"
    },
    fr: {
        seo: {
            title: "À Propos de PDFCanada.ca | Notre Histoire & Mission | Outils PDF Canadiens Gratuits",
            desc: "PDFCanada.ca a été créé au Canada pour rendre les PDF simples. Découvrez l'histoire de notre fondateur, notre mission axée sur la confidentialité et pourquoi nous avons créé des outils PDF gratuits et rapides pour les Canadiens."
        },
        h1: "À Propos de PDFCanada.ca",
        subtitle: "Créé au Canada pour Simplifier les PDF",
        intro: "PDFCanada.ca a été créé avec une conviction simple : travailler avec des PDF devrait être facile, rapide et accessible — pas coûteux ou frustrant.",
        introSub: "Dans un monde où les PDF alimentent tout, des devoirs scolaires aux demandes d'emploi, en passant par les contrats commerciaux et les formulaires gouvernementaux, les outils pour les gérer ne devraient pas vous ralentir. C'est pourquoi PDFCanada.ca existe.",

        founderTitle: "L'Histoire du Fondateur",
        founderIntro: "PDFCanada.ca a commencé comme une solution personnelle à un problème très courant.",
        founderStory: "La plateforme a été créée par quelqu'un qui a passé des années à travailler étroitement avec des documents numériques — à travers des projets, des entreprises et des flux de travail réels où les PDF étaient inévitables. Jour après jour, les mêmes frustrations apparaissaient :",
        frustrations: [
            "Des outils PDF qui verrouillent les fonctionnalités de base derrière des abonnements",
            "Des convertisseurs qui cassent le formatage ou échouent complètement",
            "Des logiciels qui nécessitent des téléchargements, des installations ou des inscriptions",
            "Des pratiques de confidentialité floues pour les fichiers sensibles"
        ],
        founderConclusion: "Ce qui aurait dû prendre des secondes se transformait souvent en temps perdu et en coûts inutiles. Au lieu d'accepter cela comme « la façon dont les choses sont », la décision a été prise de construire quelque chose de mieux — une plateforme PDF propre et fiable qui respecte vraiment les utilisateurs.",
        founderOrigin: "PDFCanada.ca a commencé comme un petit outil interne — construit pour résoudre de vrais problèmes, pas pour vendre des mises à niveau. Au fil du temps, il a évolué vers une plateforme publique pour que d'autres n'aient pas à faire face aux mêmes frustrations.",

        whyTitle: "Pourquoi PDFCanada.ca a été Créé",
        whyIntro: "La vision n'a jamais été de concurrencer les logiciels d'entreprise surchargés. L'objectif était beaucoup plus simple :",
        whyPoints: [
            "Bien faire une chose",
            "Garder les outils rapides et intuitifs",
            "Supprimer les barrières comme les comptes obligatoires et les paywalls",
            "Traiter les données des utilisateurs avec soin et transparence"
        ],
        whyConclusion: "PDFCanada.ca est conçu pour les personnes qui veulent simplement accomplir leurs tâches — sans tutoriels, installations ou pièges cachés.",

        differentTitle: "Ce qui Rend PDFCanada.ca Différent",
        differentiators: [
            {
                icon: "globe",
                title: "Conçu pour les Utilisateurs Canadiens",
                desc: "Des étudiants et chercheurs d'emploi aux petites entreprises et professionnels, la plateforme reflète comment les documents sont réellement utilisés chaque jour au Canada."
            },
            {
                icon: "zap",
                title: "Outils Simples et Efficaces",
                desc: "Télécharger, convertir, télécharger — pas d'étapes inutiles. L'interface reste propre pour que le travail reste simple."
            },
            {
                icon: "shield",
                title: "Confidentialité d'Abord par Conception",
                desc: "Les fichiers sont traités de manière sécurisée et automatiquement supprimés après traitement. Vos documents restent les vôtres."
            },
            {
                icon: "target",
                title: "Construit à Partir d'une Expérience Réelle",
                desc: "Chaque outil sur PDFCanada.ca existe parce qu'il résout un vrai problème rencontré de première main — pas parce qu'il a l'air bien sur une liste de fonctionnalités."
            }
        ],

        missionTitle: "Notre Mission",
        missionText: "Supprimer les frictions des tâches documentaires quotidiennes.",
        missionSub: "Que vous convertissiez des PDF en Word, fusionniez des fichiers, divisiez des pages ou transformiez des images en PDF, PDFCanada.ca vise à être l'outil de confiance lorsque la précision et la vitesse comptent.",

        futureTitle: "Regard vers l'Avenir",
        futureIntro: "PDFCanada.ca continue de croître avec un focus clair :",
        futurePoints: [
            "Plus d'outils PDF pratiques",
            "Des conversions plus rapides et plus précises",
            "Une expérience plus fluide sur tous les appareils"
        ],
        futureConclusion: "La plateforme restera toujours ancrée dans son objectif original : des outils simples construits pour de vraies personnes, pas pour des ventes incitatives.",

        thanksTitle: "Merci d'Utiliser PDFCanada.ca",
        thanksText: "PDFCanada.ca existe parce qu'un problème frustrant s'est transformé en un engagement à construire quelque chose de mieux — et parce que des milliers d'utilisateurs comptent dessus chaque jour.",
        thanksSub: "Si vous êtes ici, vous faites partie de ce voyage.",

        ctaTitle: "Prêt à Commencer ?",
        ctaButton: "Découvrir Nos Outils"
    }
});

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'globe': return Globe;
        case 'zap': return Zap;
        case 'shield': return Shield;
        case 'target': return Target;
        default: return CheckCircle;
    }
};

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
    const content = getContent();
    const t = content[lang] || content.en;
    const baseUrl = 'https://www.pdfcanada.ca';
    const path = `/${lang}/about`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": t.h1,
        "description": t.seo.desc,
        "url": `https://www.pdfcanada.ca${lang === 'fr' ? '/fr' : ''}/about`,
        "mainEntity": {
            "@type": "Organization",
            "name": "PDFCanada.ca",
            "url": "https://www.pdfcanada.ca",
            "logo": "https://www.pdfcanada.ca/android-chrome-512x512.png",
            "foundingDate": "2024",
            "foundingLocation": {
                "@type": "Place",
                "name": "Canada"
            },
            "description": t.intro,
            "sameAs": [
                "https://www.pdfcanada.ca"
            ]
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/about"
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'À Propos' : 'About', path: lang === 'fr' ? '/fr/about' : '/about' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Leaf size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'À Propos' : 'About', href: lang === 'fr' ? '/fr/about' : '/about' }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">

                    {/* Introduction */}
                    <section className="mb-20">
                        <p className="text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium mb-6">
                            {t.intro}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t.introSub}
                        </p>
                    </section>

                    {/* Founder's Story */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-canada-red/10 rounded-2xl flex items-center justify-center">
                                <Heart className="text-canada-red" size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white">{t.founderTitle}</h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p className="font-medium text-gray-700 dark:text-gray-300">{t.founderIntro}</p>
                            <p>{t.founderStory}</p>

                            <ul className="space-y-3 my-8">
                                {t.frustrations.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span className="text-red-800 dark:text-red-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p>{t.founderConclusion}</p>
                            <p className="italic border-l-4 border-canada-red pl-6 py-2 bg-gray-50 dark:bg-gray-900 rounded-r-xl">
                                {t.founderOrigin}
                            </p>
                        </div>
                    </section>

                    {/* Why Created */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">{t.whyTitle}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t.whyIntro}</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {t.whyPoints.map((point, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-900/30">
                                    <CheckCircle className="text-green-600 shrink-0" size={24} />
                                    <span className="font-medium text-green-800 dark:text-green-300">{point}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400">{t.whyConclusion}</p>
                    </section>

                    {/* What Makes Different */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10">{t.differentTitle}</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {t.differentiators.map((item, i) => {
                                const IconComponent = getIcon(item.icon);
                                return (
                                    <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                                        <IconComponent className="text-canada-red mb-4" size={32} />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Mission */}
                    <section className="mb-20 bg-canada-red rounded-[3rem] p-12 text-center text-white">
                        <Target className="mx-auto mb-6 opacity-80" size={48} />
                        <h2 className="text-3xl font-black mb-4">{t.missionTitle}</h2>
                        <p className="text-2xl font-bold mb-6 opacity-90">{t.missionText}</p>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">{t.missionSub}</p>
                    </section>

                    {/* Looking Ahead */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">{t.futureTitle}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{t.futureIntro}</p>

                        <ul className="space-y-3 mb-8">
                            {t.futurePoints.map((point, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-gray-700 dark:text-gray-300">
                                    <ArrowRight className="text-canada-red shrink-0" size={20} />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-gray-600 dark:text-gray-400 italic">{t.futureConclusion}</p>
                    </section>

                    {/* Thank You */}
                    <section className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 text-center border border-blue-100 dark:border-blue-800/30">
                        <Users className="mx-auto mb-6 text-blue-600" size={48} />
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">{t.thanksTitle}</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t.thanksText}</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{t.thanksSub}</p>
                    </section>

                    {/* Popular Tools - Internal Linking */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">
                            {lang === 'fr' ? 'Nos Outils Populaires' : 'Our Popular Tools'}
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                            {lang === 'fr'
                                ? 'Découvrez les outils que des milliers de Canadiens utilisent chaque jour pour gérer leurs PDF.'
                                : 'Explore the tools thousands of Canadians use every day to manage their PDFs.'}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: '/merge-pdf' },
                                { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: '/compress-pdf' },
                                { name: lang === 'fr' ? 'Diviser PDF' : 'Split PDF', path: '/split-pdf' },
                                { name: lang === 'fr' ? 'Supprimer Pages' : 'Delete Pages', path: '/delete-pdf-pages' },
                                { name: lang === 'fr' ? 'Pivoter PDF' : 'Rotate PDF', path: '/rotate-pdf' },
                                { name: lang === 'fr' ? 'Signer PDF' : 'Sign PDF', path: '/sign-pdf' },
                                { name: lang === 'fr' ? 'PDF vers Word' : 'PDF to Word', path: '/pdf-to-word' },
                                { name: lang === 'fr' ? 'Word vers PDF' : 'Word to PDF', path: '/word-to-pdf' },
                            ].map((tool, i) => (
                                <Link
                                    key={i}
                                    href={`/${lang}${tool.path}`}
                                    className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-canada-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-center group"
                                >
                                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-canada-red text-sm">
                                        {tool.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link
                                href={`/${lang}/guides/ultimate-pdf-guide`}
                                className="inline-flex items-center gap-2 text-canada-red hover:text-canada-darkRed font-bold transition-colors"
                            >
                                {lang === 'fr' ? 'Voir le Guide Ultime PDF →' : 'View Ultimate PDF Guide →'}
                            </Link>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.ctaTitle}</h2>
                        <Link
                            href={`/${lang}`}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            {t.ctaButton}
                            <ArrowRight size={24} />
                        </Link>
                    </section>
                </div>
            </PageLayout>
        </div>
    );
};
