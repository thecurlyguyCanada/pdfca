import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileText } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const OdtToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'odt-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'ODT to PDF';

    const content = {
        en: {
            subtitle: "Convert OpenDocument Text to PDF",
            intro: `Convert ODT files from LibreOffice or OpenOffice to the universal PDF format. **${title}** ensures your open-source documents are viewable on any device.`,
            step1Title: "How to convert ODT to PDF",
            step1Content: `1.  **Upload File**: Select your .odt document.\n2.  **Convert**: We process the file instantly.\n3.  **Download**: Save your new PDF.`,
            featuresTitle: "Why convert?",
            featuresContent: `*   **Compatibility**: Share with users who don't have OpenOffice.\n*   **Security**: Prevent accidental edits to your document.`,
            faqTitle: "FAQ",
            faqContent: `**Is LibreOffice required?**\nNo, our tool handles the conversion in the browser.`
        },
        fr: {
            subtitle: "Convertir OpenDocument Text en PDF",
            intro: `Convertissez des fichiers ODT de LibreOffice ou OpenOffice au format PDF universel. **${title}** rend vos documents lisibles partout.`,
            step1Title: "Comment convertir ODT en PDF",
            step1Content: `1.  **Télécharger** : Sélectionnez votre document .odt.\n2.  **Convertir** : Traitement instantané.\n3.  **Télécharger** : Enregistrez votre PDF.`,
            featuresTitle: "Pourquoi convertir ?",
            featuresContent: `*   **Compatibilité** : Partagez avec ceux qui n'ont pas OpenOffice.\n*   **Sécurité** : Empêchez les modifications accidentelles.`,
            faqTitle: "FAQ",
            faqContent: `**LibreOffice est-il requis ?**\nNon, notre outil gère la conversion.`
        },
        pt: {
            subtitle: "Converter OpenDocument Text para PDF",
            intro: `Converta arquivos ODT do LibreOffice ou OpenOffice para o formato universal PDF. **${title}** torna seus documentos legíveis em qualquer lugar.`,
            step1Title: "Como converter ODT para PDF",
            step1Content: `1.  **Enviar**: Selecione seu documento .odt.\n2.  **Converter**: Processamento instantâneo.\n3.  **Baixar**: Salve seu PDF.`,
            featuresTitle: "Por que converter?",
            featuresContent: `*   **Compatibilidade**: Compartilhe com quem não tem OpenOffice.\n*   **Segurança**: Previna edições acidentais.`,
            faqTitle: "FAQ",
            faqContent: `**LibreOffice é necessário?**\nNão, nossa ferramenta gerencia a conversão.`
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
