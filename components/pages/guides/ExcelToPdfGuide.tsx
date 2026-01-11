import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileSpreadsheet } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const ExcelToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'excel-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'Excel to PDF';

    const content = {
        en: {
            subtitle: "Convert Excel spreadsheets to professional PDFs",
            intro: `Convert your Excel workbooks (.xlsx, .xls) into secure, uneditable PDF documents. **${title}** ensures your tables, charts, and formatting remain exactly as you designed them, ready for sharing or printing.`,
            step1Title: "How to convert Excel to PDF",
            step1Content: `1.  **Select File**: Upload your Excel spreadsheet.\n2.  **Verify**: Our tool automatically handles page sizing and orientation.\n3.  **Convert**: Click "Convert" to transform your spreadsheet into a PDF.\n4.  **Download**: Save the finished document.`,
            featuresTitle: "Why use this tool?",
            featuresContent: `*   **Gridlines**: Preserves or hides gridlines based on print settings.\n*   **Privacy**: Local processing keeps financial data secure.\n*   **Formatting**: Maintains column widths and cell styles.`,
            faqTitle: "FAQ",
            faqContent: `**Will my formulas work in PDF?**\nNo, PDF is a static format. The values will be visible, but formulas are removed.\n\n**Can I convert multiple sheets?**\nYes, the tool converts all active sheets in the workbook.`
        },
        fr: {
            subtitle: "Convertissez des feuilles Excel en PDF professionnels",
            intro: `Transformez vos classeurs Excel (.xlsx, .xls) en documents PDF sécurisés. **${title}** garantit que vos tableaux, graphiques et formatages restent intacts.`,
            step1Title: "Comment convertir Excel en PDF",
            step1Content: `1.  **Sélectionner** : Téléchargez votre fichier Excel.\n2.  **Vérifier** : L'outil gère la mise en page.\n3.  **Convertir** : Cliquez sur "Convertir".\n4.  **Télécharger** : Enregistrez le document final.`,
            featuresTitle: "Pourquoi utiliser cet outil ?",
            featuresContent: `*   **Grilles** : Préserve les lignes de grille selon les paramètres.\n*   **Confidentialité** : Traitement local pour vos données financières.\n*   **Formatage** : Maintient les largeurs de colonnes.`,
            faqTitle: "FAQ",
            faqContent: `**Les formules fonctionnent-elles en PDF ?**\nNon, le PDF est statique. Les valeurs sont visibles, mais pas les formules.\n\n**Puis-je convertir plusieurs feuilles ?**\nOui, toutes les feuilles actives sont converties.`
        },
        pt: {
            subtitle: "Converta planilhas Excel para PDFs profissionais",
            intro: `Transforme suas planilhas Excel (.xlsx, .xls) em documentos PDF seguros. **${title}** garante que suas tabelas e gráficos permaneçam intactos.`,
            step1Title: "Como converter Excel para PDF",
            step1Content: `1.  **Selecionar**: Envie seu arquivo Excel.\n2.  **Verificar**: A ferramenta ajusta o layout.\n3.  **Converter**: Clique em "Converter".\n4.  **Baixar**: Salve o documento final.`,
            featuresTitle: "Por que usar?",
            featuresContent: `*   **Grades**: Mantém linhas de grade conforme configurações.\n*   **Privacidade**: Processamento local mantém dados seguros.\n*   **Formatação**: Mantém largura das colunas.`,
            faqTitle: "FAQ",
            faqContent: `**Fórmulas funcionam no PDF?**\nNão, PDF é estático. Apenas os valores são visíveis.\n\n**Converte várias abas?**\nSim, todas as abas ativas são convertidas.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileSpreadsheet className="w-6 h-6 text-canada-red" />}
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
