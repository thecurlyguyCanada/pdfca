import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileCode } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string;
}

export const PdfToSvgGuide: React.FC<Props> = ({ lang, slug = 'pdf-to-svg' }) => {
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || 'PDF to SVG';

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: 'Convert PDF pages to scalable vector graphics',
                intro: `Transform your PDF documents into SVG (Scalable Vector Graphics) format. SVG files maintain perfect quality at any zoom level, making them ideal for web graphics, print design, and responsive layouts.\n\n### Why SVG?\n\n*   **Infinite Scalability**: Vector graphics scale without losing quality.\n*   **Web-Friendly**: SVG is natively supported by all modern browsers.\n*   **Editable**: SVG files can be edited in vector graphics software.`,
                step1Title: 'How to convert PDF to SVG',
                step1Content: `Converting your PDF to SVG is simple:\n\n1.  **Upload PDF**: Click "Select PDF file" or drag your document.\n2.  **Process**: Click "Convert" to start the conversion.\n3.  **Download**: Get your SVG files packaged in a ZIP archive.\n\nEach page of your PDF becomes a separate SVG file.`,
                step2Title: 'Features & Quality',
                step2Content: `*   **High Resolution**: Pages are rendered at 2x scale for crisp output.\n*   **Private Processing**: Files never leave your browser.\n*   **Batch Conversion**: All pages converted in one click.`,
                faqTitle: 'Frequently Asked Questions',
                faqContent: `**Is it free?**\nYes, unlimited conversions for free.\n\n**What can I do with SVG files?**\nUse them on websites, in design software like Illustrator or Figma, or for high-quality printing.\n\n**Are the SVG files editable?**\nThe SVG contains an embedded high-quality image of the PDF page. For fully editable vectors, specialized PDF-to-vector software is recommended.`,
                breadGuides: 'Guides',
                breadHome: 'Home'
            },
            fr: {
                subtitle: 'Convertissez les pages PDF en graphiques vectoriels',
                intro: `Transformez vos documents PDF en format SVG (Scalable Vector Graphics). Les fichiers SVG conservent une qualité parfaite à n'importe quel niveau de zoom.\n\n### Pourquoi SVG ?\n\n*   **Évolutivité Infinie** : Les graphiques vectoriels s'adaptent sans perte de qualité.\n*   **Compatible Web** : SVG est supporté nativement par tous les navigateurs modernes.\n*   **Éditable** : Les fichiers SVG peuvent être modifiés dans des logiciels de graphisme vectoriel.`,
                step1Title: 'Comment convertir PDF en SVG',
                step1Content: `La conversion de votre PDF en SVG est simple :\n\n1.  **Téléchargez le PDF** : Cliquez sur "Sélectionner fichier PDF".\n2.  **Traitez** : Cliquez sur "Convertir".\n3.  **Téléchargez** : Obtenez vos fichiers SVG dans une archive ZIP.`,
                step2Title: 'Fonctionnalités & Qualité',
                step2Content: `*   **Haute Résolution** : Pages rendues à échelle 2x.\n*   **Traitement Privé** : Les fichiers ne quittent jamais votre navigateur.\n*   **Conversion par Lot** : Toutes les pages converties en un clic.`,
                faqTitle: 'Questions Fréquentes',
                faqContent: `**Est-ce gratuit ?**\nOui, conversions illimitées gratuitement.\n\n**Que puis-je faire avec les fichiers SVG ?**\nUtilisez-les sur des sites web, dans des logiciels de design comme Illustrator ou Figma.\n\n**Les fichiers SVG sont-ils éditables ?**\nLe SVG contient une image haute qualité de la page PDF. Pour des vecteurs entièrement éditables, un logiciel spécialisé est recommandé.`,
                breadGuides: 'Guides',
                breadHome: 'Accueil'
            },
            pt: {
                subtitle: 'Converta páginas PDF para gráficos vetoriais',
                intro: `Transforme seus documentos PDF em formato SVG (Scalable Vector Graphics). Arquivos SVG mantêm qualidade perfeita em qualquer nível de zoom.\n\n### Por que SVG?\n\n*   **Escalabilidade Infinita**: Gráficos vetoriais escalam sem perder qualidade.\n*   **Compatível com Web**: SVG é suportado nativamente por todos os navegadores modernos.\n*   **Editável**: Arquivos SVG podem ser editados em software de gráficos vetoriais.`,
                step1Title: 'Como converter PDF para SVG',
                step1Content: `Converter seu PDF para SVG é simples:\n\n1.  **Envie o PDF**: Clique em "Selecionar arquivo PDF".\n2.  **Processe**: Clique em "Converter".\n3.  **Baixe**: Obtenha seus arquivos SVG em um arquivo ZIP.`,
                step2Title: 'Recursos e Qualidade',
                step2Content: `*   **Alta Resolução**: Páginas renderizadas em escala 2x.\n*   **Processamento Privado**: Arquivos nunca saem do navegador.\n*   **Conversão em Lote**: Todas as páginas convertidas em um clique.`,
                faqTitle: 'Perguntas Frequentes',
                faqContent: `**É gratuito?**\nSim, conversões ilimitadas gratuitamente.\n\n**O que posso fazer com arquivos SVG?**\nUse-os em sites, em software de design como Illustrator ou Figma.\n\n**Os arquivos SVG são editáveis?**\nO SVG contém uma imagem de alta qualidade da página PDF. Para vetores totalmente editáveis, software especializado é recomendado.`,
                breadGuides: 'Guias',
                breadHome: 'Início'
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: toolTitle,
            seoDesc: content.subtitle,
            title: toolTitle,
            subtitle: content.subtitle,
            breadcrumbHome: content.breadHome,
            breadcrumbGuides: content.breadGuides,
            breadcrumbTool: toolTitle,
            intro: content.intro,
            sections: [
                {
                    id: 'how-to',
                    title: content.step1Title,
                    content: content.step1Content
                },
                {
                    id: 'features',
                    title: content.step2Title,
                    content: content.step2Content
                },
                {
                    id: 'faq',
                    title: content.faqTitle,
                    content: content.faqContent
                }
            ]
        };
    };

    const guideContent = getLocalContent(lang);

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileCode className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
