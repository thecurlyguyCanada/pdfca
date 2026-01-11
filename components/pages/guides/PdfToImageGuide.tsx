import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Image, FileImage, Layers } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string;
}

export const PdfToImageGuide: React.FC<Props> = ({ lang, slug = 'pdf-to-image' }) => {
    // Determine specific format based on slug
    const isJpg = slug.includes('jpg') || slug.includes('jpeg');
    const isPng = slug.includes('png');
    const formatName = isJpg ? 'JPG' : (isPng ? 'PNG' : 'Image');

    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || `PDF to ${formatName}`;

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: `The complete guide to converting PDF pages to ${formatName}`,
                intro: `Extract images from your PDF documents or convert entire pages to high-quality ${formatName} files. Our **${toolTitle}** tool runs entirely in your browser for maximum privacy and speed.\n\n### Use Cases\n\n*   **Social Media**: Convert PDF content into shareable images.\n*   **Presentations**: Extract slides or diagrams for use in PowerPoint.\n*   **Archives**: Save documents as universal image formats.`,
                step1Title: `How to convert PDF to ${formatName}`,
                step1Content: `Depending on your goal, you can convert whole pages or extract individual images:\n\n1.  **Upload PDF**: Click "Select PDF file" or drag your document.\n2.  **Choose Option**: Select "Convert Pages" (to turn each page into an image) or "Extract Images" (to find pictures inside the PDF).\n3.  **Process**: Click "Convert".\n4.  **Download**: Get your images as a ZIP file or individual downloads.`,
                step2Title: `Features & Quality`,
                step2Content: `*   **High Resolution**: We ensure crisp text and clear images.\n*   **Private Processing**: Files never leave your browser.\n*   **Batch Conversion**: Process long documents in seconds.`,
                faqTitle: "Frequently Asked Questions",
                faqContent: `**Is it free?**\nYes, unlimited conversions for free.\n\n**What is the difference between JPG and PNG?**\nJPG is better for photos (smaller size). PNG is better for text/diagrams (higher quality, no artifacts).\n\n**Can I convert password protected PDFs?**\nYes, you'll just need to enter the password first.`,
                breadGuides: "Guides",
                breadHome: "Home"
            },
            fr: {
                subtitle: `Le guide complet pour convertir des pages PDF en ${formatName}`,
                intro: `Extrayez des images de vos documents PDF ou convertissez des pages entières en fichiers ${formatName} de haute qualité. Notre outil **${toolTitle}** fonctionne entièrement dans votre navigateur pour une confidentialité maximale.\n\n### Cas d'utilisation\n\n*   **Réseaux Sociaux** : Convertissez du contenu PDF en images partageables.\n*   **Présentations** : Extrayez des diapositives pour PowerPoint.\n*   **Archives** : Sauvegardez des documents en formats image universels.`,
                step1Title: `Comment convertir PDF en ${formatName}`,
                step1Content: `Selon votre objectif, vous pouvez convertir des pages entières ou extraire des images :\n\n1.  **Téléchargez le PDF** : Cliquez sur "Sélectionner fichier PDF" ou glissez votre document.\n2.  **Choisissez l'option** : Sélectionnez "Convertir les pages" ou "Extraire les images".\n3.  **Traitez** : Cliquez sur "Convertir".\n4.  **Téléchargez** : Obtenez vos images en fichier ZIP ou téléchargements individuels.`,
                step2Title: `Fonctionnalités & Qualité`,
                step2Content: `*   **Haute Résolution** : Nous garantissons un texte net.\n*   **Traitement Privé** : Les fichiers ne quittent jamais votre navigateur.\n*   **Conversion Rapide** : Traitez de longs documents en quelques secondes.`,
                faqTitle: "Questions Fréquentes",
                faqContent: `**Est-ce gratuit ?**\nOui, conversions illimitées gratuitement.\n\n**Quelle différence entre JPG et PNG ?**\nJPG est mieux pour les photos. PNG est mieux pour le texte (meilleure qualité).\n\n**Puis-je convertir des PDF protégés ?**\nOui, il suffit d'entrer le mot de passe d'abord.`,
                breadGuides: "Guides",
                breadHome: "Accueil"
            },
            pt: {
                subtitle: `O guia completo para converter páginas PDF em ${formatName}`,
                intro: `Extraia imagens dos seus documentos PDF ou converta páginas inteiras em arquivos ${formatName} de alta qualidade. Nossa ferramenta **${toolTitle}** funciona inteiramente no navegador.\n\n### Casos de Uso\n\n*   **Redes Sociais**: Converta conteúdo PDF em imagens compartilháveis.\n*   **Apresentações**: Extraia slides para PowerPoint.\n*   **Arquivos**: Salve documentos como formatos de imagem universais.`,
                step1Title: `Como converter PDF para ${formatName}`,
                step1Content: `Dependendo do seu objetivo:\n\n1.  **Envie o PDF**: Clique em "Selecionar arquivo PDF".\n2.  **Escolha a Opção**: "Converter Páginas" ou "Extrair Imagens".\n3.  **Processe**: Clique em "Converter".\n4.  **Baixe**: Obtenha suas imagens em ZIP ou downloads individuais.`,
                step2Title: `Recursos e Qualidade`,
                step2Content: `*   **Alta Resolução**: Garantimos texto nítido.\n*   **Processamento Privado**: Arquivos nunca saem do navegador.\n*   **Rápido**: Processe documentos longos em segundos.`,
                faqTitle: "Perguntas Frequentes",
                faqContent: `**É gratuito?**\nSim, conversões ilimitadas.\n\n**Qual a diferença entre JPG e PNG?**\nJPG é melhor para fotos. PNG é melhor para texto (melhor qualidade).\n\n**Posso converter PDFs protegidos?**\nSim, basta inserir a senha primeiro.`,
                breadGuides: "Guias",
                breadHome: "Início"
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
    const Icon = isJpg ? Image : (isPng ? Layers : FileImage);

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Icon className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
