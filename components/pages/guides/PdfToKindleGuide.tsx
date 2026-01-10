'use client';

import React from 'react';
import { Tablet, BookOpen, Smartphone } from 'lucide-react';
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
Reading PDFs on a **Kindle** or e-reader can be frustrating. The text is often too small, and zooming pans around the page instead of reflowing text. The solution? **Convert PDF to Kindle format (AZW3 or KFX)** or reflowable text.

This guide shows you how to optimize documents for the best reading experience on E-ink screens.
        `,
        sections: [
            {
                id: 'pdf-vs-kindle',
                title: 'The Problem: Fixed vs. Reflowable',
                content: `
*   **PDF:** A digital printout. Layout is frozen. On a small screen, you see a tiny full page.
*   **Kindle (MOBI/AZW3):** Like a web page. Text "reflows" to fit the screen size, allowing you to increase font size comfortably.
                `
            },
            {
                id: 'methods',
                title: 'Conversion Methods',
                content: `
1.  **Send to Kindle (Email):** Amazon's built-in tool. Send your PDF to your Kindle email address with the subject "Convert". Amazon will try to convert it for you.
2.  **Calibre (Best Tool):** The Swiss Army knife of e-books. Calibre (free software) allows detailed conversion settings, chapter detection, and metadata editing.
3.  **K2pdfopt:** A specialized tool for optimizing PDF for small screens without changing the format (smart cropping and reflowing of bitmaps).
                `
            }
        ]
    },
    fr: {
        intro: `
Lire des PDF sur un **Kindle** ou une liseuse peut être frustrant. Le texte est souvent trop petit et le zoom déplace la page au lieu de redistribuer le texte. La solution ? **Convertir PDF au format Kindle (AZW3 ou KFX)** ou texte redistribuable.

Ce guide vous montre comment optimiser les documents pour la meilleure expérience de lecture sur écrans E-ink.
        `,
        sections: [
            {
                id: 'pdf-vs-kindle',
                title: 'Le Problème : Fixe vs Redistribuable',
                content: `
*   **PDF :** Une impression numérique. La mise en page est figée. Sur un petit écran, vous voyez une page complète minuscule.
*   **Kindle (MOBI/AZW3) :** Comme une page web. Le texte "coule" pour s'adapter à la taille de l'écran, vous permettant d'augmenter la taille de la police confortablement.
                `
            },
            {
                id: 'methods',
                title: 'Méthodes de Conversion',
                content: `
1.  **Send to Kindle (Email) :** L'outil intégré d'Amazon. Envoyez votre PDF à votre adresse email Kindle avec le sujet "Convert". Amazon essaiera de le convertir pour vous.
2.  **Calibre (Meilleur Outil) :** Le couteau suisse des eBooks. Calibre (logiciel gratuit) permet des réglages de conversion détaillés, la détection de chapitres et l'édition de métadonnées.
3.  **K2pdfopt :** Un outil spécialisé pour optimiser les PDF pour petits écrans sans changer le format (recadrage intelligent et reflow de bitmaps).
                `
            }
        ]
    },
    pt: {
        intro: `
Ler PDFs em um **Kindle** ou e-reader pode ser frustrante. O texto geralmente é muito pequeno e o zoom move a página em vez de redistribuir o texto. A solução? **Converter PDF para o formato Kindle (AZW3 ou KFX)** ou texto redistribuível.

Este guia mostra como otimizar documentos para a melhor experiência de leitura em telas E-ink.
        `,
        sections: [
            {
                id: 'pdf-vs-kindle',
                title: 'O Problema: Fixo vs. Redistribuível',
                content: `
*   **PDF:** Uma impressão digital. O layout é congelado. Em uma tela pequena, você vê uma página inteira minúscula.
*   **Kindle (MOBI/AZW3):** Como uma página da web. O texto "flui" para se ajustar ao tamanho da tela, permitindo que você aumente o tamanho da fonte confortavelmente.
                `
            },
            {
                id: 'methods',
                title: 'Métodos de Conversão',
                content: `
1.  **Send to Kindle (Email):** A ferramenta integrada da Amazon. Envie seu PDF para o seu endereço de e-mail do Kindle com o assunto "Convert". A Amazon tentará convertê-lo para você.
2.  **Calibre (Melhor Ferramenta):** O canivete suíço dos e-books. O Calibre (software gratuito) permite configurações detalhadas de conversão, detecção de capítulos e edição de metadados.
3.  **K2pdfopt:** Uma ferramenta especializada para otimizar PDF para telas pequenas sem alterar o formato (recorte inteligente e refluxo de bitmaps).
                `
            }
        ]
    }
});

export const PdfToKindleGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Convert PDF to Kindle Guide' : lang === 'fr' ? 'Guide Convertir PDF pour Kindle' : 'Guia Converter PDF para Kindle'}
                description={lang === 'en' ? 'Optimize PDFs for Kindle reading. Convert to AZW3/MOBI.' : lang === 'fr' ? 'Optimisez les PDF pour la lecture Kindle. Convertissez en AZW3/MOBI.' : 'Otimize PDFs para leitura no Kindle. Converta para AZW3/MOBI.'}
                canonicalPath="/guides/pdf-to-kindle"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'PDF to Kindle' : lang === 'fr' ? 'PDF vers Kindle' : 'PDF para Kindle', path: lang === 'en' ? '/guides/pdf-to-kindle' : `/${lang}/guides/pdf-to-kindle` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF to Kindle' : lang === 'fr' ? 'PDF vers Kindle' : 'PDF para Kindle'}
                subtitle={lang === 'en' ? 'Read documents comfortably on your E-reader.' : lang === 'fr' ? 'Lisez des documents confortablement sur votre liseuse.' : 'Leia documentos confortavelmente no seu E-reader.'}
                icon={<Tablet size={32} />}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'To Kindle' : lang === 'fr' ? 'Vers Kindle' : 'Para Kindle', href: lang === 'en' ? '/guides/pdf-to-kindle' : `/${lang}/guides/pdf-to-kindle` }
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
