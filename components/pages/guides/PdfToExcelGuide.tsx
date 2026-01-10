'use client';

import React from 'react';
import { Table, Database, FileSpreadsheet } from 'lucide-react';
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
Data trapped in a PDF is useless. To analyze it, calculate it, or sort it, you need it in **Excel**.

This guide shows you how to convert PDF tables into editable Excel spreadsheets (\`.xlsx\`) accurately, preserving columns and rows.
        `,
        sections: [
            {
                id: 'challenges',
                title: 'The Challenge with PDF Tables',
                content: `
PDFs draw lines and text, but they don't understand "cells". A simple copy-paste often results in all data landing in a single column (A1), requiring hours of cleanup.
                `
            },
            {
                id: 'solutions',
                title: 'Conversion Methods',
                content: `
1.  **Excel's "Get Data" Feature:** Modern versions of Excel (2016+) can import PDFs directly via the *Data > Get Data > From File > From PDF* menu.
2.  **Dedicated Converters:** Tools built for PDF-to-Excel use spatial analysis to detect the grid structure and place data in the correct cells.
3.  **Copy-Paste with Word:** Sometimes pasting into Word first, then copying to Excel, preserves structure better than direct pasting.
                `
            }
        ],
        faqHeading: "FAQ",
        quickAnswer: {
            question: "How do I convert PDF to Excel for free?",
            answer: "Use pdfcanada.ca/pdf-to-excel. Upload your PDF, our tool extracts tables and converts them to .xlsx format instantly. No email required.",
            tool: "PDF to Excel",
            steps: ["Upload PDF", "Click Convert", "Download Excel file"]
        }
    },
    fr: {
        intro: `
Les données piégées dans un PDF sont inutiles. Pour les analyser, les calculer ou les trier, vous en avez besoin dans **Excel**.

Ce guide vous montre comment convertir des tableaux PDF en feuilles de calcul Excel modifiables (\`.xlsx\`) avec précision, en préservant colonnes et lignes.
        `,
        sections: [
            {
                id: 'challenges',
                title: 'Le Défi avec les Tableaux PDF',
                content: `
Les PDF dessinent des lignes et du texte, mais ne comprennent pas les "cellules". Un simple copier-coller entraîne souvent le déversement de toutes les données dans une seule colonne (A1), nécessitant des heures de nettoyage.
                `
            },
            {
                id: 'solutions',
                title: 'Méthodes de Conversion',
                content: `
1.  **Fonction "Récupérer des données" d'Excel :** Les versions modernes d'Excel (2016+) peuvent importer des PDF directement via le menu *Données > Récupérer des données > À partir d'un fichier > À partir d'un PDF*.
2.  **Convertisseurs Dédiés :** Les outils conçus pour PDF-vers-Excel utilisent l'analyse spatiale pour détecter la structure de grille et placer les données dans les bonnes cellules.
3.  **Copier-Coller avec Word :** Parfois, coller dans Word d'abord, puis copier vers Excel, préserve mieux la structure que le collage direct.
                `
            }
        ],
        faqHeading: "FAQ",
        quickAnswer: {
            question: "Comment convertir un PDF en Excel gratuitement ?",
            answer: "Utilisez pdfcanada.ca/fr/pdf-to-excel. Téléversez votre PDF, notre outil extrait les tableaux et les convertit en format .xlsx instantanément.",
            tool: "PDF vers Excel",
            steps: ["Téléversez le PDF", "Cliquez sur Convertir", "Téléchargez le fichier Excel"]
        }
    },
    pt: {
        intro: `
Dados presos em um PDF são inúteis. Para analisá-los, calculá-los ou classificá-los, você precisa deles no **Excel**.

Este guia mostra como converter tabelas PDF em planilhas Excel editáveis (\`.xlsx\`) com precisão, preservando colunas e linhas.
        `,
        sections: [
            {
                id: 'challenges',
                title: 'O Desafio com Tabelas em PDF',
                content: `
PDFs desenham linhas e texto, mas não entendem "células". Um simples copiar e colar geralmente resulta em todos os dados caindo em uma única coluna (A1), exigindo horas de limpeza.
                `
            },
            {
                id: 'solutions',
                title: 'Métodos de Conversão',
                content: `
1.  **Recurso "Obter Dados" do Excel:** Versões modernas do Excel (2016+) podem importar PDFs diretamente via menu *Dados > Obter Dados > De Arquivo > De PDF*.
2.  **Conversores Dedicados:** Ferramentas feitas para PDF-para-Excel usam análise espacial para detectar a estrutura de grade e colocar dados nas células corretas.
3.  **Copiar-Colar com Word:** Às vezes, colar no Word primeiro, depois copiar para o Excel, preserva a estrutura melhor do que colar diretamente.
                `
            }
        ],
        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como converter PDF para Excel grátis?",
            answer: "Use pdfcanada.ca/pt/pdf-to-excel. Envie seu PDF, nossa ferramenta extrai tabelas e converte para .xlsx instantaneamente.",
            tool: "PDF para Excel",
            steps: ["Envie o PDF", "Clique em Converter", "Baixe o arquivo Excel"]
        }
    }
});

export const PdfToExcelGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Convert PDF to Excel Guide' : 'Guide Convertir PDF en Excel'}
                description={lang === 'en' ? 'Extract PDF tables to Excel accurately. Save hours of data entry.' : 'Extrayez les tableaux PDF vers Excel avec précision. Économisez des heures de saisie.'}
                canonicalPath="/guides/pdf-to-excel"
                lang={lang}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'PDF vers Excel' : 'PDF to Excel', path: lang === 'fr' ? '/fr/guides/pdf-to-excel' : '/guides/pdf-to-excel' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF to Excel' : 'PDF en Excel'}
                subtitle={lang === 'en' ? 'Unlock your data. Convert tables to spreadsheets.' : 'Libérez vos données. Convertissez des tableaux en feuilles de calcul.'}
                icon={<FileSpreadsheet size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'To Excel' : lang === 'pt' ? 'Para Excel' : 'Vers Excel', href: '#' }
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
