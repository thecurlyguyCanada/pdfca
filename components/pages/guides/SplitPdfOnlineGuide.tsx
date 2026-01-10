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
    },
    pt: {
        intro: `
Arquivos PDF grandes são difíceis de manusear. Se você tem um relatório de 500 páginas e precisa apenas do capítulo 3, ou digitalizou uma pilha de recibos e quer separá-los, **dividir** é a resposta.

Este guia mostra como dividir arquivos PDF online com segurança.
        `,
        sections: [
            {
                id: 'split-methods',
                title: 'Maneiras de Dividir um PDF',
                content: `
1.  **Extrair Páginas:** Selecione números de páginas específicos (ex: "1-5, 10") para criar um novo PDF contendo apenas essas páginas.
2.  **Dividir em Arquivos Individuais:** Transforme um PDF de 10 páginas em 10 arquivos PDF separados de 1 página.
3.  **Dividir por Intervalo:** Quebre um documento em pedaços iguais (ex: a cada 5 páginas).
                `
            },
            {
                id: 'how-to',
                title: 'Como Dividir Online',
                content: `
1.  Vá para nossa ferramenta **Dividir PDF**.
2.  Arraste e solte seu arquivo.
3.  Clique nos ícones de "tesoura" entre as páginas ou selecione as páginas que deseja extrair.
4.  Baixe seus novos arquivos menores.
*Dica Profissional:* Use nossa ferramenta local para máxima privacidade. Dividindo contratos sensíveis? Não faça upload deles!
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
                title={lang === 'en' ? 'Split PDF Online Guide' : lang === 'fr' ? 'Guide Diviser PDF en Ligne' : 'Guia Dividir PDF Online'}
                description={lang === 'en' ? 'How to split PDF pages online. Extract pages or divide documents.' : lang === 'fr' ? 'Comment diviser des pages PDF en ligne. Extrayez des pages ou divisez des documents.' : 'Como dividir páginas PDF online. Extraia páginas ou divida documentos.'}
                canonicalPath="/guides/split-pdf-online"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'Split PDF' : lang === 'fr' ? 'Diviser PDF' : 'Dividir PDF', path: lang === 'en' ? '/guides/split-pdf-online' : `/${lang}/guides/split-pdf-online` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Split PDF Online' : lang === 'fr' ? 'Diviser PDF en Ligne' : 'Dividir PDF Online'}
                subtitle={lang === 'en' ? 'Extract pages or divide documents into parts.' : lang === 'fr' ? 'Extrayez des pages ou divisez des documents en parties.' : 'Extraia páginas ou divida documentos em partes.'}
                icon={<Scissors size={32} />}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'Split Online' : lang === 'fr' ? 'Diviser en Ligne' : 'Dividir Online', href: lang === 'en' ? '/guides/split-pdf-online' : `/${lang}/guides/split-pdf-online` }
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
