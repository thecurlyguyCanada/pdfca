import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileText } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const PdfToPptGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'pdf-to-ppt';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'PDF to PowerPoint';

    const content = {
        en: {
            subtitle: "Convert PDF documents into editable slides",
            intro: `Turn your PDF documents back into editable PowerPoint presentations. **${title}** intelligently detects headings and layout structures to recreate slides.`,
            step1Title: "How to convert PDF to PPT",
            step1Content: `1.  **Upload**: Choose your PDF file.\n2.  **Convert**: The tool processes pages into slides.\n3.  **Download**: Save as .pptx file.`,
            featuresTitle: "Why convert back?",
            featuresContent: `*   **Editability**: Change text and images in PowerPoint.\n*   **Reusability**: Use old PDF content in new presentations.`,
            faqTitle: "FAQ",
            faqContent: `**Is text editable?**\nYes, where possible we reconstruct text boxes.\n**Will it look identical?**\nWe strive for accuracy, but complex layouts may need minor adjustments.`
        },
        fr: {
            subtitle: "Convertissez des documents PDF en diapositives modifiables",
            intro: `Transformez vos documents PDF en présentations PowerPoint modifiables. **${title}** détecte les titres et la structure.`,
            step1Title: "Comment convertir PDF en PPT",
            step1Content: `1.  **Télécharger** : Choisissez votre fichier PDF.\n2.  **Convertir** : L'outil crée des diapositives.\n3.  **Télécharger** : Enregistrez en .pptx.`,
            featuresTitle: "Pourquoi convertir ?",
            featuresContent: `*   **Modifiable** : Changez le texte dans PowerPoint.\n*   **Réutilisation** : Utilisez du vieux contenu PDF.`,
            faqTitle: "FAQ",
            faqContent: `**Le texte est-il modifiable ?**\nOui, nous reconstruisons les zones de texte.\n**Sera-t-il identique ?**\nNous visons la précision, mais des ajustements mineurs peuvent être nécessaires.`
        },
        pt: {
            subtitle: "Converta documentos PDF em slides editáveis",
            intro: `Transforme seus documentos PDF em apresentações PowerPoint editáveis. **${title}** detecta títulos e estrutura.`,
            step1Title: "Como converter PDF para PPT",
            step1Content: `1.  **Enviar**: Escolha seu arquivo PDF.\n2.  **Converter**: A ferramenta cria slides.\n3.  **Baixar**: Salve como .pptx.`,
            featuresTitle: "Por que converter?",
            featuresContent: `*   **Editável**: Altere texto no PowerPoint.\n*   **Reuso**: Use conteúdo antigo de PDF.`,
            faqTitle: "FAQ",
            faqContent: `**O texto é editável?**\nSim, reconstruímos caixas de texto.\n**Ficará idêntico?**\nBuscamos precisão, mas ajustes menores podem ser necessários.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileText className="w-6 h-6 text-canada-red" />}
            content={{
                seoTitle: title,
                seoDesc: t.subtitle,
                title: title,
                subtitle: t.subtitle,
                breadcrumbHome: lang === 'pt' ? 'Início' : (lang === 'fr' ? 'Accueil' : 'Home'),
                breadcrumbGuides: lang === 'pt' ? 'Guias' : 'Guides',
                breadcrumbTool: title,
                intro: t.intro,
                sections: [
                    { id: 'steps', title: t.step1Title, content: t.step1Content },
                    { id: 'features', title: t.featuresTitle, content: t.featuresContent },
                    { id: 'faq', title: t.faqTitle, content: t.faqContent }
                ]
            }}
        />
    );
};
