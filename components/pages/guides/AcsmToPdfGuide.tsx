'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, Key, Shield } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { RelatedTools } from '../../RelatedTools';
import { AuthorBio } from '../../AuthorBio';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Convert ACSM to PDF | Detailed Guide ${CURRENT_YEAR}`,
            desc: `How to convert .acsm files to PDF. Step-by-step guide to unlocking your eBooks using Adobe Digital Editions. Free and easy tutorial.`
        },
        h1: "Convert ACSM to PDF",
        subtitle: "A quick guide to unlocking your protected eBooks.",
        intro: "Downloaded an eBook and got a strange .acsm file instead of a PDF? Don't worry. An .acsm file is just a license key, not the book itself. This guide explains exactly how to turn it into a readable PDF.",
        sections: [
            {
                id: "what-is-acsm",
                title: "What is an ACSM file?",
                content: (
                    <div className="space-y-4">
                        <p>An <strong>ACSM (Adobe Content Server Message)</strong> file is a tiny file that manages the download of your eBook. It tells a program authorized by Adobe (like Adobe Digital Editions) which book to download and ensures you have the rights to read it.</p>
                        <p>You cannot \"convert\" it directly with a generic online tool because it requires your personal Adobe ID to unlock the content.</p>
                    </div>
                )
            },
            {
                id: "how-to-convert",
                title: "How to Convert ACSM to PDF",
                content: (
                    <div className="space-y-4">
                        <p>To turn your ACSM file into a real PDF, follow these official steps:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Install Adobe Digital Editions (ADE):</strong> Download and install the free ADE software from Adobe's website.
                            </li>
                            <li>
                                <strong>Authorize Your Computer:</strong> Open ADE, go to <em>Help &gt; Authorize Computer</em>, and sign in with your Adobe ID. This links the book to you.
                            </li>
                            <li>
                                <strong>Open the ACSM File:</strong> Double-click your .acsm file. It should open automatically in ADE.
                            </li>
                            <li>
                                <strong>Download Completes:</strong> ADE will verify your license and download the actual PDF (or EPUB) eBook.
                            </li>
                            <li>
                                <strong>Find Your PDF:</strong> The standard PDF file is usually saved in:
                                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                    <li><strong>Windows:</strong> Documents\My Digital Editions</li>
                                    <li><strong>Mac:</strong> Documents/Digital Editions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "remove-drm",
                title: "Can I remove the DRM?",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <p>The PDF you get from Adobe Digital Editions is often DRM-protected, meaning it can only be opened on authorized devices. Removing this DRM to read on other devices (like a Kindle-compatible PDF reader) usually requires third-party tools like Calibre with specific plugins, but be aware of copyright laws in your jurisdiction.</p>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Why can't I use an online converter?",
                a: "Because the ACSM file is locked to your specific user account. An online server doesn't have your Adobe ID credentials to authorize the download."
            },
            {
                q: "Is Adobe Digital Editions free?",
                a: "Yes, it is free software provided by Adobe."
            }
        ],
        cta: "Need to Edit Your New PDF?",
        ctaBtn: "Explore PDF Tools"
    },
    fr: {
        seo: {
            title: `Convertir ACSM en PDF | Guide Détaillé ${CURRENT_YEAR}`,
            desc: `Comment convertir les fichiers .acsm en PDF. Guide étape par étape pour débloquer vos eBooks avec Adobe Digital Editions. Tutoriel gratuit.`
        },
        h1: "Convertir ACSM en PDF",
        subtitle: "Un guide rapide pour débloquer vos eBooks protégés.",
        intro: "Vous avez téléchargé un eBook et obtenu un fichier .acsm étrange au lieu d'un PDF ? Ne vous inquiétez pas. Un fichier .acsm est juste une clé de licence, pas le livre lui-même. Ce guide vous explique comment le transformer en PDF lisible.",
        sections: [
            {
                id: "what-is-acsm",
                title: "Qu'est-ce qu'un fichier ACSM ?",
                content: (
                    <div className="space-y-4">
                        <p>Un fichier <strong>ACSM (Adobe Content Server Message)</strong> est un petit fichier qui gère le téléchargement de votre eBook. Il indique à un programme autorisé par Adobe (comme Adobe Digital Editions) quel livre télécharger et vérifie que vous avez le droit de le lire.</p>
                        <p>Vous ne pouvez pas le \"convertir\" directement avec un outil en ligne générique car il nécessite votre identifiant Adobe personnel pour déverrouiller le contenu.</p>
                    </div>
                )
            },
            {
                id: "how-to-convert",
                title: "Comment Convertir ACSM en PDF",
                content: (
                    <div className="space-y-4">
                        <p>Pour transformer votre fichier ACSM en un vrai PDF, suivez ces étapes officielles :</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Installez Adobe Digital Editions (ADE) :</strong> Téléchargez et installez le logiciel gratuit ADE depuis le site d'Adobe.
                            </li>
                            <li>
                                <strong>Autorisez votre ordinateur :</strong> Ouvrez ADE, allez dans <em>Aide &gt; Autoriser l'ordinateur</em>, et connectez-vous avec votre identifiant Adobe.
                            </li>
                            <li>
                                <strong>Ouvrez le fichier ACSM :</strong> Double-cliquez sur votre fichier .acsm. Il devrait s'ouvrir automatiquement dans ADE.
                            </li>
                            <li>
                                <strong>Téléchargement terminé :</strong> ADE vérifiera votre licence et téléchargera le véritable eBook PDF (ou EPUB).
                            </li>
                            <li>
                                <strong>Trouvez votre PDF :</strong> Le fichier PDF standard est généralement enregistré dans :
                                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                    <li><strong>Windows :</strong> Documents\My Digital Editions</li>
                                    <li><strong>Mac :</strong> Documents/Digital Editions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "remove-drm",
                title: "Puis-je supprimer les DRM ?",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <p>Le PDF que vous obtenez d'Adobe Digital Editions est souvent protégé par DRM, ce qui signifie qu'il ne peut être ouvert que sur des appareils autorisés. Supprimer ce DRM pour le lire ailleurs nécessite généralement des outils tiers comme Calibre, mais attention aux lois sur le droit d'auteur.</p>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Pourquoi ne puis-je pas utiliser un convertisseur en ligne ?",
                a: "Parce que le fichier ACSM est verrouillé à votre compte utilisateur. Un serveur en ligne n'a pas vos identifiants Adobe pour autoriser le téléchargement."
            },
            {
                q: "Adobe Digital Editions est-il gratuit ?",
                a: "Oui, c'est un logiciel gratuit fourni par Adobe."
            }
        ],
        cta: "Besoin d'éditer votre nouveau PDF ?",
        ctaBtn: "Explorer les Outils PDF"
    }
});

export const AcsmToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": t.h1,
        "description": t.seo.desc,
        "image": "https://www.pdfcanada.ca/og-image.png",
        "datePublished": "2024-01-05",
        "dateModified": new Date().toISOString().split('T')[0],
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Key size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'ACSM en PDF' : 'ACSM to PDF', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/acsm-to-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl mb-12 border border-slate-200 dark:border-slate-800">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir un fichier ACSM en PDF ?" : "How to convert ACSM file to PDF?"}
                        answer={lang === 'fr' ? "Installez Adobe Digital Editions, autorisez votre ordinateur et ouvrez le fichier ACSM. Le logiciel téléchargera le PDF réel." : "Install Adobe Digital Editions, authorize your computer, and open the ACSM file. The software will download the actual PDF."}
                        toolName="ACSM Guide"
                        steps={lang === 'fr' ? ["Installer ADE", "Ouvrir ACSM", "Obtenir PDF"] : ["Install ADE", "Open ACSM", "Get PDF"]}
                        lang={lang}
                    />

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                        <div className="space-y-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-bold mb-2">{item.q}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}/ultimate-pdf-guide`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/acsm-to-pdf" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
