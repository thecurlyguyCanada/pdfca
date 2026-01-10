'use client';

import React from 'react';
import { QrCode, ScanLine, Tag } from 'lucide-react';
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
Adding **Barcodes** or **QR Codes** to PDFs is essential for inventory management, event tickets, and shipping labels.

This guide explains how to generate vector-based codes that remain scannable at any print size.
        `,
        sections: [
            {
                id: 'barcode-types',
                title: 'Common Code Types',
                content: `
*   **QR Code (2D):** Popular for URLs, WiFi passwords, and vCards. High capacity.
*   **Code 128 (1D):** Standard alphanumeric barcode used in logistics and shipping.
*   **UPC/EAN:** Retail product codes (numbers only).
                `
            },
            {
                id: 'vector-importance',
                title: 'Why Use Vector Barcodes?',
                content: `
Never paste a blurry JPEG barcode into a PDF! If printed on a low-res printer or resized, it might span multiple print dots and become unscannable. Always use **vector** (SVG/PDF command) barcodes to ensure lines are crisp and scannable by any reader.
                `
            }
        ]
    },
    fr: {
        intro: `
Ajouter des **Codes-barres** ou **QR Codes** aux PDF est essentiel pour la gestion d'inventaire, les billets d'événements et les étiquettes d'expédition.

Ce guide explique comment générer des codes vectoriels qui restent scannables à n'importe quelle taille d'impression.
        `,
        sections: [
            {
                id: 'barcode-types',
                title: 'Types de Codes Courants',
                content: `
*   **QR Code (2D) :** Populaire pour les URL, mots de passe WiFi et vCards. Haute capacité.
*   **Code 128 (1D) :** Code-barres alphanumérique standard utilisé dans la logistique.
*   **UPC/EAN :** Codes produits de détail (chiffres seulement).
                `
            },
            {
                id: 'vector-importance',
                title: 'Pourquoi Utiliser des Codes-barres Vectoriels ?',
                content: `
Ne collez jamais un code-barres JPEG flou dans un PDF ! Si imprimé sur une imprimante basse résolution ou redimensionné, il peut s'étaler et devenir illisible. Utilisez toujours des codes-barres **vectoriels** (commandes SVG/PDF) pour garantir que les lignes sont nettes et lisibles par n'importe quel lecteur.
                `
            }
        ]
    },
    pt: {
        intro: `
Adicionar **Códigos de Barras** ou **QR Codes** em PDFs é essencial para gestão de inventário, ingressos de eventos e etiquetas de envio.

Este guia explica como gerar códigos baseados em vetores que permanecem escaneáveis em qualquer tamanho de impressão.
        `,
        sections: [
            {
                id: 'barcode-types',
                title: 'Tipos Comuns de Código',
                content: `
*   **QR Code (2D):** Popular para URLs, senhas WiFi e vCards. Alta capacidade.
*   **Code 128 (1D):** Código de barras alfanumérico padrão usado em logística e transporte.
*   **UPC/EAN:** Códigos de produtos de varejo (apenas números).
                `
            },
            {
                id: 'vector-importance',
                title: 'Por que Usar Códigos de Barras Vetoriais?',
                content: `
Nunca cole um código de barras JPEG borrado em um PDF! Se impresso em uma impressora de baixa resolução ou redimensionado, ele pode abranger vários pontos de impressão e tornar-se ilegível. Sempre use códigos de barras **vetoriais** (comando SVG/PDF) para garantir que as linhas sejam nítidas e escaneáveis por qualquer leitor.
                `
            }
        ]
    }
});

export const BarcodeGeneratorGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'PDF Barcode & QR Code Guide' : 'Guide Code-barres & QR Code PDF'}
                description={lang === 'en' ? 'How to add scannable vector barcodes and QR codes to PDFs.' : 'Comment ajouter des codes-barres et QR codes vectoriels scannables aux PDF.'}
                canonicalPath="/guides/barcode-generator"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Générateur Code-barres' : 'Barcode Generator', path: lang === 'fr' ? '/fr/guides/barcode-generator' : '/guides/barcode-generator' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Generate PDF Barcodes' : 'Générer Codes-barres PDF'}
                subtitle={lang === 'en' ? 'Add scannable codes to your documents.' : 'Ajoutez des codes scannables à vos documents.'}
                icon={<QrCode size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'Barcode' : 'Code-barres', href: lang === 'fr' ? '/fr/guides/barcode-generator' : '/guides/barcode-generator' }
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
