'use client';

import React from 'react';
import { Minimize2, Image, Search } from 'lucide-react';
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
Compressing a PDF usually means sacrificing quality. Images get blurry, and text can become jagged. But it doesn't have to be that way. **Lossless compression** allows you to reduce file size while keeping the document looking exactly the same.

This guide explains how to shrink files without ruining them.
        `,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Lossy vs. Lossless',
                content: `
*   **Lossy (Standard):** Deletes data to save space. Reduces image resolution (e.g., 300dpi -> 72dpi). Good for email, bad for printing.
*   **Lossless (High Quality):** Reorganizes data to be more efficient without deleting pixel information. Removes metadata, unused fonts, and redundant objects.
                `
            },
            {
                id: 'how-to',
                title: 'How to Compress Losslessly',
                content: `
1.  **Remove Metadata:** PDFs contain hidden data like edit history and thumbnails. Removing this saves space without touching page content.
2.  **Optimize Fonts:** Subset fonts to only include the characters actually used in the document (e.g., if you only use 'A', don't embed the whole alphabet).
3.  **Clean Structure:** Remove invisible objects and optimize the internal object tree (Linearization / Fast Web View).
                `
            }
        ]
    },
    fr: {
        intro: `
Compresser un PDF signifie généralement sacrifier la qualité. Les images deviennent floues et le texte peut devenir crénelé. Mais ce n'est pas une fatalité. **La compression sans perte** vous permet de réduire la taille du fichier tout en gardant le document exactement identique.

Ce guide explique comment réduire les fichiers sans les ruiner.
        `,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Avec Perte vs Sans Perte',
                content: `
*   **Avec Perte (Standard) :** Supprime des données pour gagner de la place. Réduit la résolution d'image (ex: 300dpi -> 72dpi). Bon pour l'email, mauvais pour l'impression.
*   **Sans Perte (Haute Qualité) :** Réorganise les données pour être plus efficace sans supprimer d'information pixel. Supprime les métadonnées, polices inutilisées et objets redondants.
                `
            },
            {
                id: 'how-to',
                title: 'Comment Compresser Sans Perte',
                content: `
1.  **Supprimer les Métadonnées :** Les PDF contiennent des données cachées comme l'historique d'édition et les miniatures. Supprimer cela gagne de la place sans toucher au contenu de la page.
2.  **Optimiser les Polices :** Sous-ensembler les polices pour inclure uniquement les caractères réellement utilisés dans le document (ex: si vous n'utilisez que 'A', n'intégrez pas tout l'alphabet).
3.  **Nettoyer la Structure :** Supprimez les objets invisibles et optimisez l'arbre d'objets interne (Linéarisation / Fast Web View).
                `
            }
        ]
    },
    pt: {
        intro: `
Comprimir um PDF geralmente significa sacrificar a qualidade. As imagens ficam borradas e o texto pode ficar serrilhado. Mas não precisa ser assim. A **compressão sem perdas** permite reduzir o tamanho do arquivo mantendo o documento exatamente igual.

Este guia explica como reduzir arquivos sem arruiná-los.
        `,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Com Perda vs. Sem Perda',
                content: `
*   **Com Perda (Padrão):** Exclui dados para economizar espaço. Reduz a resolução da imagem (ex: 300dpi -> 72dpi). Bom para e-mail, ruim para impressão.
*   **Sem Perda (Alta Qualidade):** Reorganiza os dados para ser mais eficiente sem excluir informações de pixel. Remove metadados, fontes não utilizadas e objetos redundantes.
                `
            },
            {
                id: 'how-to',
                title: 'Como Comprimir Sem Perdas',
                content: `
1.  **Remover Metadados:** PDFs contêm dados ocultos como histórico de edição e miniaturas. Remover isso economiza espaço sem tocar no conteúdo da página.
2.  **Otimizar Fontes:** Subconjunto de fontes para incluir apenas os caracteres realmente usados no documento (ex: se você usa apenas 'A', não incorpore todo o alfabeto).
3.  **Limpar Estrutura:** Remova objetos invisíveis e otimize a árvore de objetos interna (Linearização / Fast Web View).
                `
            }
        ]
    }
});

export const CompressPdfNoQualityLossGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'fr' ? 'Compresser PDF Sans Perdre de Qualité' : (lang === 'pt' ? 'Comprimir PDF Sem Perder Qualidade' : 'Compress PDF Without Losing Quality')}
                description={lang === 'fr' ? 'Comment réduire la taille du fichier PDF tout en maintenant des images et du texte de haute qualité.' : (lang === 'pt' ? 'Como reduzir o tamanho do arquivo PDF mantendo imagens e texto de alta qualidade.' : 'How to reduce PDF file size while maintaining high quality images and text.')}
                canonicalPath="/guides/compress-pdf-no-quality-loss"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides' : (lang === 'pt' ? '/pt/guides' : '/guides') },
                    { name: lang === 'fr' ? 'Compression Sans Perte' : (lang === 'pt' ? 'Compressão Sem Perdas' : 'Lossless Compression'), path: lang === 'fr' ? '/fr/guides/compress-pdf-no-quality-loss' : (lang === 'pt' ? '/pt/guides/compress-pdf-no-quality-loss' : '/guides/compress-pdf-no-quality-loss') }
                ]}
            />
            <PageLayout
                title={lang === 'fr' ? 'Compresser PDF Sans Perte' : (lang === 'pt' ? 'Comprimir PDF Sem Perdas' : 'Compress PDF No Quality Loss')}
                subtitle={lang === 'fr' ? 'Réduisez les fichiers tout en les gardant nets pour l\'impression.' : (lang === 'pt' ? 'Reduza arquivos mantendo-os nítidos para impressão.' : 'Shrink files while keeping them sharp for printing.')}
                icon={<Minimize2 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides' : (lang === 'pt' ? '/pt/guides' : '/guides') },
                    { name: lang === 'fr' ? 'Sans Perte' : (lang === 'pt' ? 'Sem Perdas' : 'Lossless'), href: lang === 'fr' ? '/fr/guides/compress-pdf-no-quality-loss' : (lang === 'pt' ? '/pt/guides/compress-pdf-no-quality-loss' : '/guides/compress-pdf-no-quality-loss') }
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
