'use client';

import Link from 'next/link';
import React from 'react';
import { Trash2, Shield, Zap, HelpCircle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Delete PDF Pages | Free & Private ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to remove pages from PDF securely. Our definitive ${CURRENT_YEAR} guide shows you how to delete pages locally on any device without uploads. Free and private.`
        },
        h1: `How to Remove PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "A complete walkthrough on how to remove pages from a PDF—unwanted, blank, or sensitive—securely and for free.",

        intro: (
            <>
                Searching for a reliable <strong>PDF page remover</strong>? We've all been there: you scan a contract and realize page 3 is upside down, or you need to remove pages from a PDF to share only the executive summary with your team.
                <br /><br />
                In the past, knowing <strong>how to remove pages from a PDF</strong> required expensive software. Today, you can use our local-first tool to delete pages in seconds without risky uploads.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "How to Remove Pages from a PDF in Seconds",
                content: (
                    <>
                        <p className="mb-4">
                            Using a <strong>PDF page remover</strong> doesn't need to be complicated. Our tool is designed to be intuitive, letting you see all your pages and remove them with a single click.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Open the Remover</strong>: Use our <Link href="/" className="text-canada-red hover:underline font-medium">PDF Page Remover tool</Link>. Since it's local-first, it loads your document without uploading it to any server.
                            </li>
                            <li className="pl-2">
                                <strong>Select Pages</strong>: Click on the thumbnails representing the pages you want to remove. A trash icon will appear over the selected pages.
                            </li>
                            <li className="pl-2">
                                <strong>Download result</strong>: Click 'Remove Pages' and your updated PDF will be saved to your device immediately.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Safe & Secure PDF Page Removal",
                content: (
                    <>
                        <p className="mb-4">
                            When you search for <strong>how do I remove pages from a PDF</strong>, most results require you to upload your document to a cloud server. This is a massive privacy risk for sensitive documents.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is different. We process everything locally in your browser. Your files never leave your computer, ensuring 100% privacy and security.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "How to remove pages from a PDF for free?",
                a: "Simply use our PDF Page Remover tool! Upload your document, select the pages you want to delete, and download the new version. It's 100% free and happens locally in your browser."
            },
            {
                q: "How do I remove pages from a PDF on a Mac or PC?",
                a: "Our tool works in any modern browser. Whether you are on Windows or macOS, you can remove pages from a PDF without installing any software."
            }
        ],

        ctaTitle: "Ready to Use the PDF Page Remover?",
        ctaButton: "Start Removing Pages",
        ctaSubtext: "No account needed. 100% Free & Private."
    },
    fr: {
        seo: {
            title: `Comment Supprimer des Pages PDF | Guide Local ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à supprimer des pages de vos PDF en toute sécurité. Notre guide ${CURRENT_YEAR} vous montre comment retirer des pages localement sans téléchargement. Gratuit et privé.`
        },
        h1: "Suppresseur de Pages PDF : Le Guide Ultime",
        subtitle: "La méthode la plus simple pour retirer des pages d'un PDF, en toute sécurité.",

        intro: (
            <>
                Vous cherchez un <strong>suppresseur de pages PDF</strong> fiable ? Nous sommes tous passés par là : vous scannez un contrat et réalisez que la page 3 est à l'envers.
                <br /><br />
                Auparavant, savoir <strong>comment supprimer des pages d'un PDF</strong> nécessitait des logiciels coûteux. Aujourd'hui, vous pouvez le faire en quelques secondes.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Comment supprimer des pages d'un PDF en quelques secondes",
                content: (
                    <>
                        <p className="mb-4">
                            Utiliser un <strong>suppresseur de pages PDF</strong> ne devrait pas être compliqué. Notre outil est conçu pour être intuitif.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Ouvrez l'outil</strong></li>
                            <li className="pl-2"><strong>Sélectionnez les pages</strong></li>
                            <li className="pl-2"><strong>Téléchargez</strong></li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Comment supprimer des pages d'un PDF gratuitement ?",
                a: "Utilisez simplement notre suppresseur de pages PDF ! C'est 100% gratuit et sécurisé."
            }
        ],

        ctaTitle: "Prêt à utiliser le suppresseur de pages PDF ?",
        ctaButton: "Supprimer les pages",
        ctaSubtext: "Gratuit, rapide et sécurisé."
    }
});

export const PdfPageRemoverGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-page-remover"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-01-20"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I remove pages from a PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez le suppresseur de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les miniatures des pages à supprimer, puis cliquez 'Supprimer les pages'. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                        : "Use pdfcanada.ca's PDF Page Remover. Upload your PDF, click on the thumbnails of pages to remove, then click 'Remove Pages'. All processing happens locally in your browser - your files never leave your device.",
                    tool: "PDF Page Remover",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Sélectionnez les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                        : ["Upload your PDF file", "Select pages to remove", "Download your cleaned PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Suppresseur de Pages PDF' : 'PDF Page Remover', path: lang === 'fr' ? '/fr/guides/pdf-page-remover' : '/guides/pdf-page-remover' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Trash2 size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none italic border-l-4 border-canada-red pl-6 py-2 text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-4">
                                <span className="text-canada-red opacity-20 text-5xl font-black">0{idx + 1}</span>
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-3xl p-12 text-center text-white shadow-xl">
                        <Zap className="mx-auto mb-6 opacity-50" size={48} />
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <p className="text-white/80 mb-8 font-medium">{t.ctaSubtext}</p>
                        <Link href="/${lang}/pdf-page-remover"
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-canada-red" size={32} />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">F.A.Q.</h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
                                    <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I remove pages from a PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez le suppresseur de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les miniatures des pages à supprimer, puis cliquez 'Supprimer les pages'. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                            : "Use pdfcanada.ca's PDF Page Remover. Upload your PDF, click on the thumbnails of pages to remove, then click 'Remove Pages'. All processing happens locally in your browser - your files never leave your device."}
                        toolName="PDF Page Remover"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Sélectionnez les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                            : ["Upload your PDF file", "Select pages to remove", "Download your cleaned PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-page-remover" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};

export default PdfPageRemoverGuide;


