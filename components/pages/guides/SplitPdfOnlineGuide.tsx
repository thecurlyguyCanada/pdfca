'use client';

import React from 'react';
import { Scissors, Layers, File } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        intro: `
Big PDF files are unwieldy. Whether you have a 500-page report and only need chapter 3, or you scanned a stack of receipts and want to separate them, **splitting** is the answer.

This guide shows you how to safe split PDF files online.
        `,
        sections: [
            {
                id: 'split-methods',
                title: 'Ways to Split a PDF',
                content: `
1.  **Extract Pages:** Select specific page numbers (e.g., "1-5, 10") to create a new PDF containing only those pages.
2.  **Split into Individual Files:** Turn a 10-page PDF into 10 separate 1-page PDF files.
3.  **Split by Range:** Break a document into equal chunks (e.g., every 5 pages).
                `
            },
            {
                id: 'how-to',
                title: 'How to Split Online',
                content: `
1.  Go to our **Split PDF** tool.
2.  Drag and drop your file.
3.  Click on the "scissor" icons between pages or select the pages you want to extract.
4.  Download your new smaller files.
*Pro Tip:* Use our local tool for maximum privacy. Splitting sensitive contracts? Don't upload them!
                `
            }
        ]
    },
    fr: {
        intro: `
Les gros fichiers PDF sont peu maniables. Que vous ayez un rapport de 500 pages et n'ayez besoin que du chapitre 3, ou que vous ayez scanné une pile de reçus et vouliez les séparer, **diviser** est la réponse.

Ce guide vous montre comment diviser des fichiers PDF en ligne en toute sécurité.
        `,
        sections: [
            {
                id: 'split-methods',
                title: 'Façons de Diviser un PDF',
                content: `
1.  **Extraire des Pages :** Sélectionnez des numéros de pages spécifiques (ex: "1-5, 10") pour créer un nouveau PDF contenant uniquement ces pages.
2.  **Diviser en Fichiers Individuels :** Transformez un PDF de 10 pages en 10 fichiers PDF séparés d'une page.
3.  **Diviser par Plage :** Brisez un document en morceaux égaux (ex: toutes les 5 pages).
                `
            },
            {
                id: 'how-to',
                title: 'Comment Diviser en Ligne',
                content: `
1.  Allez sur notre outil **Diviser PDF**.
2.  Glissez et déposez votre fichier.
3.  Cliquez sur les icônes "ciseaux" entre les pages ou sélectionnez les pages à extraire.
4.  Téléchargez vos nouveaux fichiers plus petits.
*Conseil Pro :* Utilisez notre outil local pour une confidentialité maximale. Vous divisez des contrats sensibles ? Ne les téléversez pas !
                `
            }
        ]
    }
});

export const SplitPdfOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Split PDF Online Guide' : 'Guide Diviser PDF en Ligne'}
                description={lang === 'en' ? 'How to split PDF pages online. Extract pages or divide documents.' : 'Comment diviser des pages PDF en ligne. Extrayez des pages ou divisez des documents.'}
                canonicalPath="/guides/split-pdf-online"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Diviser PDF' : 'Split PDF', path: lang === 'fr' ? '/fr/guides/split-pdf-online' : '/guides/split-pdf-online' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Split PDF Online' : 'Diviser PDF en Ligne'}
                subtitle={lang === 'en' ? 'Extract pages or divide documents into parts.' : 'Extrayez des pages ou divisez des documents en parties.'}
                icon={<Scissors size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'Split Online' : 'Diviser en Ligne', href: lang === 'fr' ? '/fr/guides/split-pdf-online' : '/guides/split-pdf-online' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <MarkdownContent content={t.intro} />

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
