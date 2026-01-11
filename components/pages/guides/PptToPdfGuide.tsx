import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Presentation } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const PptToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'ppt-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'PowerPoint to PDF';

    const content = {
        en: {
            subtitle: "Save presentations as PDF handouts",
            intro: `Convert PowerPoint presentations (.pptx, .ppt) to PDF format seamlessly. Ideal for sharing lecture notes, business proposals, or handouts without worrying about font compatibility or layout shifts.`,
            step1Title: "How to convert PPT to PDF",
            step1Content: `1.  **Upload**: Select your PowerPoint file.\n2.  **Process**: Our tool captures each slide as a PDF page.\n3.  **Download**: Get your PDF file instantly.`,
            featuresTitle: "Key Benefits",
            featuresContent: `*   **Layout Safety**: Fonts and images won't move.\n*   **Universal View**: Anyone can open a PDF, no PowerPoint needed.\n*   **Small Size**: Often smaller than original PPT files.`,
            faqTitle: "FAQ",
            faqContent: `**Do animations work?**\nNo, PDF is a static document format. Animations are flattened.\n**Are notes included?**\nTypically only the slides themselves are converted.`
        },
        fr: {
            subtitle: "Enregistrez vos présentations en PDF",
            intro: `Convertissez des présentations PowerPoint (.pptx, .ppt) en PDF sans problème. Idéal pour partager des notes de cours ou des propositions commerciales.`,
            step1Title: "Comment convertir PPT en PDF",
            step1Content: `1.  **Télécharger** : Sélectionnez votre fichier PowerPoint.\n2.  **Traiter** : Chaque diapositive devient une page PDF.\n3.  **Télécharger** : Obtenez votre fichier instantanément.`,
            featuresTitle: "Avantages",
            featuresContent: `*   **Mise en page** : Les polices et images ne bougent pas.\n*   **Vue Universelle** : Tout le monde peut ouvrir un PDF.\n*   **Taille Réduite** : Souvent plus léger que le PPT original.`,
            faqTitle: "FAQ",
            faqContent: `**Les animations fonctionnent-elles ?**\nNon, le PDF est statique.\n**Les notes sont-elles incluses ?**\nGénéralement non, seules les diapositives le sont.`
        },
        pt: {
            subtitle: "Salve apresentações como PDF",
            intro: `Converta apresentações PowerPoint (.pptx, .ppt) para PDF facilmente. Ideal para compartilhar notas de aula ou propostas comerciais.`,
            step1Title: "Como converter PPT para PDF",
            step1Content: `1.  **Enviar**: Selecione seu arquivo PowerPoint.\n2.  **Processar**: Cada slide vira uma página PDF.\n3.  **Baixar**: Obtenha seu arquivo instantaneamente.`,
            featuresTitle: "Benefícios",
            featuresContent: `*   **Layout Seguro**: Fontes e imagens não se movem.\n*   **Visão Universal**: Qualquer um pode abrir um PDF.\n*   **Tamanho Menor**: Geralmente mais leve que o PPT original.`,
            faqTitle: "FAQ",
            faqContent: `**Animações funcionam?**\nNão, PDF é estático.\n**As notas são incluídas?**\nGeralmente não, apenas os slides.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Presentation className="w-6 h-6 text-canada-red" />}
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
