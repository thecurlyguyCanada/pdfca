'use client';

import React from 'react';
import { Type, Layout, CheckCircle, AlertTriangle } from 'lucide-react';
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
Converting a PDF to Word is easy, but **keeping the formatting** is hard. We've all seen converted documents where images float off the page, fonts break, and tables turn into gibberish.

This guide explains **how to preserve formatting** during PDF to Word conversion.
        `,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'Why Formatting Breaks?',
                content: `
PDFs are fixed-layout documents. They don't know that "Title" is a header; they just know text is at position (x, y). Word is flow-based. Translating between them requires interpretation.
*   **Complex Layouts:** Columns and floating images are hard to interpret.
*   **Missing Fonts:** If your PC doesn't have the PDF's font, it gets substituted.
                `
            },
            {
                id: 'tips',
                title: 'Tips for Perfect Conversion',
                content: `
1.  **Use High-Quality Originals:** Avoid scanning copies of copies.
2.  **Match Fonts:** Ensure you have the fonts used in the PDF installed.
3.  **Avoid Complex Graphics:** If possible, simplify the document before converting.
4.  **Use Premium Tools:** Paid tools like Adobe or specialized OCR engines usually handle layout better than free basic converters.
                `
            }
        ]
    },
    fr: {
        intro: `
Convertir un PDF en Word est facile, mais **garder la mise en page** est difficile. Nous avons tous vu des documents convertis où les images flottent hors de la page, les polices se brisent et les tableaux deviennent charabia.

Ce guide explique **comment préserver la mise en page** lors de la conversion PDF en Word.
        `,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'Pourquoi la Mise en Page Casse ?',
                content: `
Les PDF sont des documents à mise en page fixe. Ils ne savent pas que "Titre" est un en-tête ; ils savent juste que le texte est à la position (x, y). Word est basé sur le flux. Traduire entre eux nécessite une interprétation.
*   **Mises en page complexes :** Les colonnes et les images flottantes sont difficiles à interpréter.
*   **Polices manquantes :** Si votre PC n'a pas la police du PDF, elle est remplacée.
                `
            },
            {
                id: 'tips',
                title: 'Conseils pour une Conversion Parfaite',
                content: `
1.  **Utilisez des Originaux de Haute Qualité :** Évitez de scanner des copies de copies.
2.  **Correspondance des Polices :** Assurez-vous d'avoir les polices utilisées dans le PDF installées.
3.  **Évitez les Graphiques Complexes :** Si possible, simplifiez le document avant de convertir.
4.  **Utilisez des Outils Premium :** Les outils payants comme Adobe ou les moteurs OCR spécialisés gèrent généralement mieux la mise en page que les convertisseurs basiques gratuits.
                `
            }
        ]
    },
    pt: {
        intro: `
Converter um PDF para Word é fácil, mas **manter a formatação** é difícil. Todos nós já vimos documentos convertidos onde imagens flutuam para fora da página, fontes quebram e tabelas viram algaravia.

Este guia explica **como preservar a formatação** durante a conversão de PDF para Word.
        `,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'Por Que a Formatação Quebra?',
                content: `
PDFs são documentos de layout fixo. Eles não sabem que "Título" é um cabeçalho; eles apenas sabem que o texto está na posição (x, y). O Word é baseado em fluxo. Traduzir entre eles requer interpretação.
*   **Layouts Complexos:** Colunas e imagens flutuantes são difíceis de interpretar.
*   **Fontes Ausentes:** Se o seu PC não tiver a fonte do PDF, ela será substituída.
                `
            },
            {
                id: 'tips',
                title: 'Dicas para uma Conversão Perfeita',
                content: `
1.  **Use Originais de Alta Qualidade:** Evite digitalizar cópias de cópias.
2.  **Combine Fontes:** Garanta que você tenha as fontes usadas no PDF instaladas.
3.  **Evite Gráficos Complexos:** Se possível, simplifique o documento antes de converter.
4.  **Use Ferramentas Premium:** Ferramentas pagas como Adobe ou motores OCR especializados geralmente lidam com layout melhor do que conversores básicos gratuitos.
                `
            }
        ]
    }
});

export const PdfToWordFormattingGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Best PDF to Word Converter with Formatting' : lang === 'fr' ? 'Meilleur Convertisseur PDF en Word avec Mise en Page' : 'Melhor Conversor PDF para Word com Formatação'}
                description={lang === 'en' ? 'How to secure PDF to Word conversion keeping original formatting, fonts, and layout.' : lang === 'fr' ? 'Comment sécuriser la conversion PDF en Word en gardant la mise en page, les polices et le format.' : 'Como garantir a conversão de PDF para Word mantendo formatação original, fontes e layout.'}
                canonicalPath="/guides/pdf-to-word-formatting"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'PDF Formatting' : lang === 'fr' ? 'Formatage PDF' : 'Formatação PDF', path: lang === 'en' ? '/guides/pdf-to-word-formatting' : `/${lang}/guides/pdf-to-word-formatting` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Keep PDF Formatting in Word' : lang === 'fr' ? 'Garder la Mise en Page PDF dans Word' : 'Manter Formatação PDF no Word'}
                subtitle={lang === 'en' ? 'Preserve layout, fonts, and images during conversion.' : lang === 'fr' ? 'Préservez la mise en page, les polices et les images pendant la conversion.' : 'Preserve layout, fontes e imagens durante a conversão.'}
                icon={<Layout size={32} />}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'Formatting Guide' : lang === 'fr' ? 'Guide Formatage' : 'Guia Formatação', href: lang === 'en' ? '/guides/pdf-to-word-formatting' : `/${lang}/guides/pdf-to-word-formatting` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <MarkdownContent content={t.intro} />

                    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
                            <h3 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400 mb-4">
                                <AlertTriangle size={20} />
                                {lang === 'en' ? 'Common Issues' : lang === 'fr' ? 'Problèmes Courants' : 'Problemas Comuns'}
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>• {lang === 'en' ? 'Broken tables' : lang === 'fr' ? 'Tableaux cassés' : 'Tabelas quebradas'}</li>
                                <li>• {lang === 'en' ? 'Missing custom fonts' : lang === 'fr' ? 'Polices personnalisées manquantes' : 'Fontes personalizadas ausentes'}</li>
                                <li>• {lang === 'en' ? 'Shifted paragraphs' : lang === 'fr' ? 'Paragraphes décalés' : 'Parágrafos deslocados'}</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                            <h3 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-4">
                                <CheckCircle size={20} />
                                {lang === 'en' ? 'Our Solution' : lang === 'fr' ? 'Notre Solution' : 'Nossa Solução'}
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>• {lang === 'en' ? 'Intelligent layout detection' : lang === 'fr' ? 'Détection intelligente de mise en page' : 'Detecção inteligente de layout'}</li>
                                <li>• {lang === 'en' ? 'Font matching' : lang === 'fr' ? 'Correspondance de polices' : 'Correspondência de fontes'}</li>
                                <li>• {lang === 'en' ? 'Table reconstruction' : lang === 'fr' ? 'Reconstruction de tableaux' : 'Reconstrução de tabelas'}</li>
                            </ul>
                        </div>
                    </div>

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
