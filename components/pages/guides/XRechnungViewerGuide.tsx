'use client';

import React from 'react';
import { FileText, Database, Shield } from 'lucide-react';
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
**XRechnung** is the German standard for specific electronic invoices (e-invoicing). It is an XML-based format often embedded within or accompanying a PDF.

This guide explains how to visualize and validate these specialized invoice files.
        `,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'What is XRechnung?',
                content: `
XRechnung is a structured data model based on the European Norm EN 16931. Unlike a standard PDF invoice which is designed for humans to read, XRechnung is designed for computers to process automatically.
Using a "Viewer" allows a human to render this XML data in a readable PDF-like layout.
                `
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs. XRechnung',
                content: `
*   **ZUGFeRD:** A hybrid format. It's a regular PDF file with an XML file attached inside it. You can open it in any PDF reader.
*   **XRechnung:** Pure XML. You cannot open it in a PDF reader; you need a specialized viewer to render it.
                `
            }
        ]
    },
    fr: {
        intro: `
**XRechnung** est la norme allemande pour les factures électroniques spécifiques (e-invoicing). C'est un format basé sur XML souvent intégré ou accompagnant un PDF.

Ce guide explique comment visualiser et valider ces fichiers de factures spécialisés.
        `,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'Qu\'est-ce que XRechnung ?',
                content: `
XRechnung est un modèle de données structuré basé sur la Norme Européenne EN 16931. Contrairement à une facture PDF standard conçue pour être lue par des humains, XRechnung est conçu pour être traité automatiquement par des ordinateurs.
Utiliser un "Visualiseur" permet à un humain de rendre ces données XML dans une mise en page lisible de type PDF.
                `
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs XRechnung',
                content: `
*   **ZUGFeRD :** Un format hybride. C'est un fichier PDF régulier avec un fichier XML attaché à l'intérieur. Vous pouvez l'ouvrir dans n'importe quel lecteur PDF.
*   **XRechnung :** XML pur. Vous ne pouvez pas l'ouvrir dans un lecteur PDF ; vous avez besoin d'un visualiseur spécialisé pour le rendre.
                `
            }
        ]
    }
});

export const XRechnungViewerGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'XRechnung Viewer Guide' : 'Guide Visualiseur XRechnung'}
                description={lang === 'en' ? 'How to view and validate German XRechnung e-invoices.' : 'Comment visualiser et valider les e-factures allemandes XRechnung.'}
                canonicalPath="/guides/xrechnung-viewer"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: 'XRechnung', path: lang === 'fr' ? '/fr/guides/xrechnung-viewer' : '/guides/xrechnung-viewer' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'XRechnung Viewer' : 'Visualiseur XRechnung'}
                subtitle={lang === 'en' ? 'Validate and view standard German e-invoices.' : 'Validez et visualisez les e-factures allemandes standards.'}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: 'XRechnung', href: lang === 'fr' ? '/fr/guides/xrechnung-viewer' : '/guides/xrechnung-viewer' }
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
