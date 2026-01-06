'use client';

import React from 'react';
import { FileCode, Database } from 'lucide-react';
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
For developers and data scientists, **XML (eXtensible Markup Language)** is a powerful format for structured data. Converting PDF invoices, reports, or catalogues to XML allows for automated processing and integration into other systems.

This guide explains how to extract structured hierarchy from flat PDF documents.
        `,
        sections: [
            {
                id: 'why-xml',
                title: 'Why Convert to XML?',
                content: `
*   **Automation:** Feed PDF invoice data directly into SAP or ERP systems.
*   **Structure:** Unlike CSV, XML can represent nested data (e.g., an invoice with multiple line lines).
*   **Standardization:** Use standards like UBL (Universal Business Language) for e-invoicing.
                `
            },
            {
                id: 'tools',
                title: 'Tools for PDF to XML',
                content: `
1.  **Adobe Acrobat Pro:** Has simple XML export, but structure is often generic ("Tagged XML").
2.  **Specialized Parser (e.g., Docparser):** Define rules to map PDF zones to XML tags (e.g., "The text in this box is <InvoiceDate>").
3.  **PDF to UBL Tools:** Specific tools for standardized e-invoice conversion.
                `
            }
        ]
    },
    fr: {
        intro: `
Pour les développeurs et data scientists, **XML (eXtensible Markup Language)** est un format puissant pour les données structurées. Convertir des factures, rapports ou catalogues PDF en XML permet un traitement automatisé et l'intégration dans d'autres systèmes.

Ce guide explique comment extraire une hiérarchie structurée de documents PDF plats.
        `,
        sections: [
            {
                id: 'why-xml',
                title: 'Pourquoi Convertir en XML ?',
                content: `
*   **Automatisation :** Alimentez les systèmes SAP ou ERP directement avec les données de facture PDF.
*   **Structure :** Contrairement au CSV, le XML peut représenter des données imbriquées (ex: une facture avec plusieurs lignes).
*   **Standardisation :** Utilisez des normes comme UBL (Universal Business Language) pour la facturation électronique.
                `
            },
            {
                id: 'tools',
                title: 'Outils pour PDF vers XML',
                content: `
1.  **Adobe Acrobat Pro :** Export XML simple, mais la structure est souvent générique ("XML Balisé").
2.  **Parseur Spécialisé (ex: Docparser) :** Définissez des règles pour mapper les zones PDF aux balises XML (ex: "Le texte dans cette boîte est <DateFacture>").
3.  **Outils PDF vers UBL :** Outils spécifiques pour la conversion standardisée de factures électroniques.
                `
            }
        ]
    }
});

export const PdfToXmlGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'PDF to XML Converter Guide' : 'Guide Convertisseur PDF en XML'}
                description={lang === 'en' ? 'Extract structured data from PDF to XML for automation.' : 'Extrayez des données structurées de PDF vers XML pour l\'automatisation.'}
                canonicalPath="/guides/pdf-to-xml"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'PDF vers XML' : 'PDF to XML', path: lang === 'fr' ? '/fr/guides/pdf-to-xml' : '/guides/pdf-to-xml' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF to XML' : 'PDF en XML'}
                subtitle={lang === 'en' ? 'Extract structured data for enterprise systems.' : 'Extrayez des données structurées pour les systèmes d\'entreprise.'}
                icon={<FileCode size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'To XML' : 'Vers XML', href: lang === 'fr' ? '/fr/guides/pdf-to-xml' : '/guides/pdf-to-xml' }
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
