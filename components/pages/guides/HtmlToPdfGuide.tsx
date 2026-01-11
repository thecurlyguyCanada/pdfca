import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Code } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const HtmlToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'html-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'HTML to PDF';

    const content = {
        en: {
            subtitle: "Save web pages and HTML files as PDF",
            intro: `Convert HTML files or code into clean, printable PDF documents. **${title}** renders your HTML exactly as a browser would, capturing CSS styles and images.`,
            step1Title: "How to convert HTML to PDF",
            step1Content: `1.  **Select**: Upload your .html or .htm file.\n2.  **Process**: Our engine renders the page.\n3.  **Download**: Save the PDF version.`,
            featuresTitle: "Features",
            featuresContent: `*   **CSS Support**: Full styling support.\n*   **Offline**: Convert saved webpages.\n*   **Privacy**: Browser-based rendering.`,
            faqTitle: "FAQ",
            faqContent: `**Can I convert a URL?**\nCurrently this tool supports file uploads (.html). For URLs, use "Print to PDF" in your browser.`
        },
        fr: {
            subtitle: "Enregistrez des pages web en PDF",
            intro: `Convertissez des fichiers HTML ou du code en documents PDF propres. **${title}** rend votre HTML exactement comme un navigateur.`,
            step1Title: "Comment convertir HTML en PDF",
            step1Content: `1.  **Sélectionner** : Téléchargez votre fichier .html.\n2.  **Traiter** : Notre moteur rend la page.\n3.  **Télécharger** : Enregistrez la version PDF.`,
            featuresTitle: "Fonctionnalités",
            featuresContent: `*   **Support CSS** : Styles complets.\n*   **Hors ligne** : Convertissez des pages sauvegardées.\n*   **Confidentialité** : Rendu dans le navigateur.`,
            faqTitle: "FAQ",
            faqContent: `**Puis-je convertir une URL ?**\nActuellement, cet outil supporte les fichiers (.html). Pour les URL, utilisez "Imprimer en PDF".`
        },
        pt: {
            subtitle: "Salve páginas web como PDF",
            intro: `Converta arquivos HTML ou código em documentos PDF limpos. **${title}** renderiza seu HTML exatamente como um navegador faria.`,
            step1Title: "Como converter HTML para PDF",
            step1Content: `1.  **Selecionar**: Envie seu arquivo .html.\n2.  **Processar**: Nosso motor renderiza a página.\n3.  **Baixar**: Salve a versão PDF.`,
            featuresTitle: "Recursos",
            featuresContent: `*   **Suporte CSS**: Estilos completos.\n*   **Offline**: Converta páginas salvas.\n*   **Privacidade**: Renderização no navegador.`,
            faqTitle: "FAQ",
            faqContent: `**Posso converter uma URL?**\nAtualmente suportamos arquivos (.html). Para URLs, use "Imprimir para PDF" no navegador.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Code className="w-6 h-6 text-canada-red" />}
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
