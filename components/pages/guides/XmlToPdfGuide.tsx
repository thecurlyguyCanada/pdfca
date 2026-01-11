import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileCode } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const XmlToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'xml-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'XML to PDF';

    const content = {
        en: {
            subtitle: "Convert XML data to readable PDF",
            intro: `Transform structured XML data into a human-readable PDF document. **${title}** renders XML trees or invoices into a clean layout.`,
            step1Title: "How to convert XML to PDF",
            step1Content: `1.  **Select**: Upload your .xml file.\n2.  **Format**: Our engine applies basic styling to the XML structure.\n3.  **Download**: Save as PDF.`,
            featuresTitle: "Use Cases",
            featuresContent: `*   **Invoicing**: View e-invoices (like UBL) in readable format.\n*   **Documentation**: Print configuration files.\n*   **Archiving**: Save data snapshots.`,
            faqTitle: "FAQ",
            faqContent: `**Do you support XSLT?**\nCurrently we apply a standard formatting, not custom XSLT.`
        },
        fr: {
            subtitle: "Convertir des données XML en PDF lisible",
            intro: `Transformez des données XML structurées en document PDF lisible. **${title}** rend les arbres XML ou les factures dans une mise en page propre.`,
            step1Title: "Comment convertir XML en PDF",
            step1Content: `1.  **Sélectionner** : Téléchargez votre fichier .xml.\n2.  **Formater** : Notre moteur applique un style de base.\n3.  **Télécharger** : Enregistrez en PDF.`,
            featuresTitle: "Cas d'utilisation",
            featuresContent: `*   **Facturation** : Voir les e-factures (comme UBL).\n*   **Documentation** : Imprimer les fichiers de config.\n*   **Archivage** : Sauvegarder des instantanés de données.`,
            faqTitle: "FAQ",
            faqContent: `**Supportez-vous XSLT ?**\nActuellement nous appliquons un formatage standard.`
        },
        pt: {
            subtitle: "Converter dados XML para PDF legível",
            intro: `Transforme dados XML estruturados em um documento PDF legível. **${title}** renderiza árvores XML ou faturas em um layout limpo.`,
            step1Title: "Como converter XML para PDF",
            step1Content: `1.  **Selecionar**: Envie seu arquivo .xml.\n2.  **Formatar**: Aplicamos estilos básicos.\n3.  **Baixar**: Salve como PDF.`,
            featuresTitle: "Casos de Uso",
            featuresContent: `*   **Faturamento**: Visualize faturas eletrônicas.\n*   **Documentação**: Imprima arquivos de configuração.\n*   **Arquivamento**: Salve snapshots de dados.`,
            faqTitle: "FAQ",
            faqContent: `**Suporta XSLT?**\nAtualmente aplicamos uma formatação padrão.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileCode className="w-6 h-6 text-canada-red" />}
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
