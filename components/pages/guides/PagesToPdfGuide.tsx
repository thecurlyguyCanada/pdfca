import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileText } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const PagesToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'pages-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'Pages to PDF';

    const content = {
        en: {
            subtitle: "Convert Apple Pages documents to neutral PDF",
            intro: `Share your Apple Pages documents with Windows and Android users by converting them to PDF. **${title}** makes your macOS documents universally accessible without losing formatting.`,
            step1Title: "How to convert Pages to PDF",
            step1Content: `1.  **Upload**: Select your .pages file.\n2.  **Convert**: We render the Pages document.\n3.  **Download**: Save the resulting PDF.`,
            featuresTitle: "Why use this tool?",
            featuresContent: `*   **Cross-platform**: View Pages docs on Windows.\n*   **No Mac Needed**: Convert without accessing a MacBook.\n*   **Free**: No need to buy iWork.`,
            faqTitle: "FAQ",
            faqContent: `**Do I need a Mac?**\nNo, this tool works in any browser.\n**Are charts preserved?**\nYes, we maintain the visual integrity of charts and tables.`
        },
        fr: {
            subtitle: "Convertir documents Apple Pages en PDF neutre",
            intro: `Partagez vos documents Apple Pages avec les utilisateurs Windows et Android en les convertissant en PDF. **${title}** rend vos documents macOS accessibles universellement.`,
            step1Title: "Comment convertir Pages en PDF",
            step1Content: `1.  **Télécharger** : Sélectionnez votre fichier .pages.\n2.  **Convertir** : Nous rendons le document.\n3.  **Télécharger** : Enregistrez le PDF.`,
            featuresTitle: "Pourquoi utiliser cet outil ?",
            featuresContent: `*   **Multiplateforme** : Voir docs Pages sur Windows.\n*   **Pas de Mac requis** : Convertissez sans MacBook.\n*   **Gratuit** : Pas besoin d'acheter iWork.`,
            faqTitle: "FAQ",
            faqContent: `**Ai-je besoin d'un Mac ?**\nNon, cet outil fonctionne dans tout navigateur.\n**Les graphiques sont-ils préservés ?**\nOui, nous maintenons l'intégrité visuelle.`
        },
        pt: {
            subtitle: "Converter documentos Apple Pages para PDF",
            intro: `Compartilhe seus documentos Apple Pages com usuários Windows e Android convertendo-os para PDF. **${title}** torna seus documentos macOS acessíveis universalmente.`,
            step1Title: "Como converter Pages para PDF",
            step1Content: `1.  **Enviar**: Selecione seu arquivo .pages.\n2.  **Converter**: Renderizamos o documento.\n3.  **Baixar**: Salve o PDF resultante.`,
            featuresTitle: "Por que usar?",
            featuresContent: `*   **Multiplataforma**: Veja docs Pages no Windows.\n*   **Sem Mac**: Converta sem um MacBook.\n*   **Grátis**: Sem necessidade de comprar iWork.`,
            faqTitle: "FAQ",
            faqContent: `**Preciso de um Mac?**\nNão, funciona em qualquer navegador.\n**Gráficos são preservados?**\nSim, mantemos a integridade visual.`
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
