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
            subtitle: "Converter arquivo XML em PDF online grátis",
            intro: `Precisa **converter XML para PDF**? Transforme dados XML estruturados em um documento PDF legível. **${title}** permite converter arquivo XML em PDF, renderizando árvores XML ou notas fiscais eletrônicas em um layout limpo e profissional. Nossa ferramenta online gratuita processa tudo localmente no seu navegador.`,
            step1Title: "Como transformar XML em PDF",
            step1Content: `**Como converter um arquivo XML em PDF:**\n\n1.  **Selecione o arquivo**: Envie seu arquivo .xml clicando no botão ou arrastando.\n2.  **Formate automaticamente**: Nossa ferramenta aplica estilos ao XML automaticamente.\n3.  **Baixe o PDF**: Salve o resultado como PDF.\n\n**Dica:** Para converter XML em PDF grátis, use nossa ferramenta online que não requer instalação.`,
            featuresTitle: "Casos de Uso para Converter XML para PDF",
            featuresContent: `*   **Notas Fiscais**: Abra arquivo XML de NFe e converta para PDF legível.\n*   **Documentação Técnica**: Imprima arquivos de configuração XML.\n*   **Arquivamento**: Transforme XML em PDF para guardar snapshots de dados.\n*   **Compartilhamento**: Converta XML para PDF para enviar a clientes que não leem XML.`,
            faqTitle: "Perguntas Frequentes",
            faqContent: `**Como converter XML em PDF online?**\nUse nossa ferramenta gratuita. Basta fazer upload do arquivo XML e baixar o PDF.\n\n**Posso converter XML de nota fiscal em PDF?**\nSim! Nossa ferramenta suporta arquivos XML de NFe e outros formatos fiscais.\n\n**O conversor de XML para PDF é gratuito?**\nSim, 100% grátis e processado localmente no seu navegador.`
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
