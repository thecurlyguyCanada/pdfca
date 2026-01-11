import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Image, FileImage, Layers, Camera } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string; // Optional slug override if reused for specific formats
}

export const ImageToPdfGuide: React.FC<Props> = ({ lang, slug = 'image-to-pdf' }) => {
    // Determine specific format based on slug if needed, or generic "Image"
    const isJpg = slug.includes('jpg') || slug.includes('jpeg');
    const isPng = slug.includes('png');
    const formatName = isJpg ? 'JPG' : (isPng ? 'PNG' : 'Image');

    // Get tool config for proper naming
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || `${formatName} to PDF`;

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: `The detailed guide to converting ${formatName} files to PDF`,
                intro: `Convert your ${formatName} images to professional PDF documents in seconds. Whether you're archiving photos, creating a portfolio, or sending documents, our **${toolTitle}** tool ensures high-quality results without any watermarks.\n\n### Why convert ${formatName} to PDF?\n\n*   **Universal Compatibility**: PDFs look the same on every device.\n*   **Compact size**: Easier to share via email or apps.\n*   **Professional finish**: Perfect for reports and official documents.`,
                step1Title: `How to convert ${formatName} to PDF`,
                step1Content: `Follow these simple steps to transform your images:\n\n1.  **Select your files**: Click the **Select ${formatName} files** button or drag and drop your images directly into the tool.\n2.  **Adjust order (optional)**: If you're combining multiple images, drag them to rearrange the order.\n3.  **Convert**: Click the "Convert" button. We'll instantly process your files.\n4.  **Download**: Save your new PDF document to your device.`,
                step2Title: `Advanced Features`,
                step2Content: `Our tool goes beyond simple conversion:\n\n*   **Batch Processing**: Convert multiple ${formatName} images into a single PDF file.\n*   **Security First**: All processing happens locally in your browser. Your photos never leave your device.\n*   **Quality Preservation**: We maintain the visual quality of your original images while optimizing the PDF file size.`,
                faqTitle: "Frequently Asked Questions",
                faqContent: `**Is this tool free?**\nYes, completely free with no daily limits.\n\n**Are my photos safe?**\nAbsolutely. Unlike other converters, we process files locally on your device. No data is ever uploaded to our servers.\n\n**Can I convert multiple images at once?**\nYes, you can upload and merge multiple ${formatName} files into one PDF document.`,
                breadGuides: "Guides",
                breadHome: "Home"
            },
            fr: {
                subtitle: `Le guide détaillé pour convertir des fichiers ${formatName} en PDF`,
                intro: `Convertissez vos images ${formatName} en documents PDF professionnels en quelques secondes. Que vous archiviez des photos, créiez un portfolio ou envoyiez des documents, notre outil **${toolTitle}** garantit des résultats de haute qualité sans aucun filigrane.\n\n### Pourquoi convertir ${formatName} en PDF ?\n\n*   **Compatibilité universelle** : Les PDF s'affichent partout de la même façon.\n*   **Taille compacte** : Plus facile à partager par email.\n*   **Finition professionnelle** : Parfait pour les rapports et documents officiels.`,
                step1Title: `Comment convertir ${formatName} en PDF`,
                step1Content: `Suivez ces étapes simples pour transformer vos images :\n\n1.  **Sélectionnez vos fichiers** : Cliquez sur le bouton ou glissez-déposez vos images directement.\n2.  **Ajustez l'ordre** : Si vous combinez plusieurs images, faites-les glisser pour réorganiser.\n3.  **Convertissez** : Cliquez sur le bouton "Convertir".\n4.  **Téléchargez** : Enregistrez votre nouveau document PDF.`,
                step2Title: `Fonctionnalités Avancées`,
                step2Content: `Notre outil va au-delà de la simple conversion :\n\n*   **Traitement par lot** : Convertissez plusieurs images ${formatName} en un seul fichier PDF.\n*   **Sécurité d'abord** : Tout le traitement se fait localement. Vos photos ne quittent jamais votre appareil.\n*   **Préservation de la qualité** : Nous maintenons la qualité visuelle de vos originaux.`,
                faqTitle: "Questions Fréquentes",
                faqContent: `**Est-ce gratuit ?**\nOui, totalement gratuit et sans limites.\n\n**Mes photos sont-elles en sécurité ?**\nAbsolument. Contrairement aux autres convertisseurs, nous traitons les fichiers localement. Aucune donnée n'est envoyée sur nos serveurs.\n\n**Puis-je convertir plusieurs images ?**\nOui, vous pouvez fusionner plusieurs fichiers ${formatName} en un seul PDF.`,
                breadGuides: "Guides",
                breadHome: "Accueil"
            },
            pt: {
                subtitle: `O guia detalhado para converter arquivos ${formatName} em PDF`,
                intro: `Converta suas imagens ${formatName} em documentos PDF profissionais em segundos. Seja para arquivar fotos, criar portfólios ou enviar documentos, nossa ferramenta **${toolTitle}** garante resultados de alta qualidade.\n\n### Por que converter ${formatName} para PDF?\n\n*   **Compatibilidade Universal**: PDFs aparecem iguais em todos os dispositivos.\n*   **Tamanho Compacto**: Mais fácil de compartilhar por e-mail.\n*   **Acabamento Profissional**: Perfeito para relatórios e documentos oficiais.`,
                step1Title: `Como converter ${formatName} para PDF`,
                step1Content: `Siga estes passos simples:\n\n1.  **Selecione seus arquivos**: Clique no botão ou arraste e solte suas imagens.\n2.  **Ajuste a ordem**: Se combinar várias imagens, arraste para reordenar.\n3.  **Converta**: Clique no botão "Converter".\n4.  **Baixe**: Salve seu novo documento PDF.`,
                step2Title: `Recursos Avançados`,
                step2Content: `Nossa ferramenta vai além do básico:\n\n*   **Processamento em Lote**: Converta várias imagens ${formatName} em um único PDF.\n*   **Segurança Primeiro**: Todo processamento é local. Suas fotos nunca saem do seu dispositivo.\n*   **Preservação da Qualidade**: Mantemos a qualidade visual dos seus originais.`,
                faqTitle: "Perguntas Frequentes",
                faqContent: `**É gratuito?**\nSim, totalmente gratuito e sem limites.\n\n**Minhas fotos estão seguras?**\nAbsolutamente. Processamos arquivos localmente no seu dispositivo. Nenhum dado é enviado aos nossos servidores.\n\n**Posso converter várias imagens?**\nSim, você pode combinar vários arquivos ${formatName} em um único PDF.`,
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
    const Icon = isJpg ? Image : (isPng ? Layers : Camera);

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Icon className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
