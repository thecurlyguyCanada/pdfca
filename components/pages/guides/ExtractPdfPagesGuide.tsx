import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { ArrowUpRightFromSquare } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const ExtractPdfPagesGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'extract-pdf-pages';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'Extract PDF Pages';

    const content = {
        en: {
            subtitle: "Create new PDFs from specific pages",
            intro: `Pull specific pages out of a large PDF to create a new, smaller document. **${title}** lets you select exactly which pages you want to keep and saves them as a separate file.`,
            step1Title: "How to extract pages",
            step1Content: `1.  **Upload**: Select your PDF.\n2.  **Select**: Click the pages you want to extract.\n3.  **Extract**: Click the button to create your new PDF.\n4.  **Download**: Save the extracted file.`,
            featuresTitle: "Why extract pages?",
            featuresContent: `*   **Email Size**: Send only relevant pages.\n*   **Confidentiality**: removing sensitive pages before sharing.\n*   **Organization**: Break down large reports.`,
            faqTitle: "FAQ",
            faqContent: `**Does this delete pages from the original?**\nNo, your original file remains untouched. We create a copy.`
        },
        fr: {
            subtitle: "Créez de nouveaux PDF à partir de pages spécifiques",
            intro: `Extrayez des pages spécifiques d'un grand PDF pour créer un nouveau document. **${title}** vous permet de sélectionner exactement les pages que vous voulez garder.`,
            step1Title: "Comment extraire des pages",
            step1Content: `1.  **Télécharger** : Sélectionnez votre PDF.\n2.  **Sélectionner** : Cliquez sur les pages à extraire.\n3.  **Extraire** : Créez votre nouveau PDF.\n4.  **Télécharger** : Enregistrez le fichier.`,
            featuresTitle: "Pourquoi extraire ?",
            featuresContent: `*   **Taille Email** : Envoyez seulement les pages pertinentes.\n*   **Confidentialité** : Retirez les pages sensibles.\n*   **Organisation** : Découpez les gros rapports.`,
            faqTitle: "FAQ",
            faqContent: `**Cela supprime-t-il les pages de l'original ?**\nNon, votre fichier original reste intact. Nous créons une copie.`
        },
        pt: {
            subtitle: "Crie novos PDFs de páginas específicas",
            intro: `Retire páginas específicas de um PDF grande para criar um novo documento. **${title}** permite selecionar exatamente quais páginas você deseja manter.`,
            step1Title: "Como extrair páginas",
            step1Content: `1.  **Enviar**: Selecione seu PDF.\n2.  **Selecionar**: Clique nas páginas que deseja extrair.\n3.  **Extrair**: Crie seu novo PDF.\n4.  **Baixar**: Salve o arquivo.`,
            featuresTitle: "Por que extrair?",
            featuresContent: `*   **Tamanho de E-mail**: Envie apenas páginas relevantes.\n*   **Confidencialidade**: Remova páginas sensíveis.\n*   **Organização**: Divida relatórios grandes.`,
            faqTitle: "FAQ",
            faqContent: `**Isso apaga páginas do original?**\nNão, seu arquivo original permanece intacto. Criamos uma cópia.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<ArrowUpRightFromSquare className="w-6 h-6 text-canada-red" />}
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
