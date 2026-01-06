'use client';

import Link from 'next/link';
import React from 'react';
import { Scan, FileSearch, Sparkles, Database } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { ALL_GUIDES } from '../../../lib/guideMetadata';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface HubProps {
    lang: Language;
}

const getHubContent = (lang: string) => ({
    en: {
        seo: {
            title: `PDF OCR & Analysis Hub | Extract Data & Text ${CURRENT_YEAR}`,
            desc: `Advanced guide to PDF data extraction. Learn about OCR, invoice parsing, UBL conversion, and analyzing PDF internals.`
        },
        h1: "PDF OCR & Analysis Hub",
        subtitle: "Go beyond viewing. Extract data, analyze structures, and automate workflows.",
        intro: "PDFs are more than just digital paper—they are containers for improved data. Our **OCR & Analysis** guides are designed for developers, accountants, and power users who need to get data *out* of PDFs.\n\nFrom **Optical Character Recognition (OCR)** to **UBL Invoice Conversion**, these advanced guides unlock the hidden potential of your documents.",
        categories: [
            {
                id: 'extraction',
                title: "Data Extraction",
                desc: "Pull text and table data from documents.",
                filter: (slug: string) => ['invoice-ocr', 'pdf-to-ubl', 'extract-pdf-images'].includes(slug)
            },
            {
                id: 'analysis',
                title: "Analysis & Internals",
                desc: "Inspect the underlying code and structure.",
                filter: (slug: string) => ['analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ]
    },
    fr: {
        seo: {
            title: `Hub OCR & Analyse PDF | Extraire Données & Texte ${CURRENT_YEAR}`,
            desc: `Guide avancé de l'extraction de données PDF. Apprenez le l'OCR, l'analyse de factures, la conversion UBL et l'analyse interne des PDF.`
        },
        h1: "Hub OCR & Analyse PDF",
        subtitle: "Allez au-delà de la visualisation. Extrayez des données, analysez des structures et automatisez des flux.",
        intro: "Les PDF sont plus que du papier numérique—ce sont des conteneurs pour des données améliorées. Nos guides **OCR & Analyse** sont conçus pour les développeurs, comptables et utilisateurs avancés qui ont besoin de sortir les données *des* PDF.\n\nDe la **Reconnaissance Optique de Caractères (OCR)** à la **Conversion de Factures UBL**, ces guides avancés débloquent le potentiel caché de vos documents.",
        categories: [
            {
                id: 'extraction',
                title: "Extraction de Données",
                desc: "Extrayez texte et tableaux des documents.",
                filter: (slug: string) => ['invoice-ocr', 'pdf-to-ubl', 'extract-pdf-images'].includes(slug)
            },
            {
                id: 'analysis',
                title: "Analyse & Internes",
                desc: "Inspectez le code sous-jacent et la structure.",
                filter: (slug: string) => ['analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ]
    }
});

export const PdfOcrAnalysisHub: React.FC<HubProps> = ({ lang }) => {
    const content = getHubContent(lang);
    const t = (content as any)[lang] || (content as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-ocr-analysis"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'OCR & Analyse' : 'OCR & Analysis', path: lang === 'fr' ? '/fr/guides/pdf-ocr-analysis' : '/guides/pdf-ocr-analysis' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Scan size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: t.h1, href: lang === 'fr' ? '/fr/guides/pdf-ocr-analysis' : '/guides/pdf-ocr-analysis' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.categories.map((category: any) => {
                            const categoryGuides = ALL_GUIDES.filter(g => category.filter(g.slug));
                            if (categoryGuides.length === 0) return null;

                            return (
                                <section key={category.id}>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-canada-red/10 rounded-lg text-canada-red">
                                            <Scan size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                            <p className="text-gray-500 dark:text-gray-400">{category.desc}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {categoryGuides.map((guide) => (
                                            <Link
                                                key={guide.slug}
                                                href={`/${lang}/guides/${guide.slug}`}
                                                className="group block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-canada-red hover:shadow-lg transition-all"
                                            >
                                                <div className="text-4xl mb-4">{guide.icon}</div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-canada-red transition-colors">
                                                    {lang === 'en' ? guide.titleEn : guide.titleFr}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {lang === 'en' ? guide.descEn : guide.descFr}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    <div className="mt-16">
                        <RelatedTools lang={lang} currentPath="/guides/pdf-ocr-analysis" category="advanced" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
