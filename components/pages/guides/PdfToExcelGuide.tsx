'use client';

import React from 'react';
import { Table, Database, FileSpreadsheet, Calculator, TrendingUp } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';
import { RelatedTools } from '../../RelatedTools';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo_title: 'Convert PDF to Excel Guide | Extract PDF Tables to Spreadsheet',
        seo_desc: 'Learn how to convert PDF tables to Excel (.xlsx) accurately. Extract data, preserve formatting, and save hours of manual data entry.',
        intro: `Data trapped in a PDF is useless for analysis. To calculate, sort, filter, or visualize it, you need it in **Excel**.

This comprehensive guide shows you how to convert PDF tables into editable Excel spreadsheets (.xlsx) accurately, preserving columns, rows, and formatting—without hours of manual data entry.

### Who Needs PDF to Excel Conversion?

*   **Accountants**: Extract financial statements and transaction records for analysis.
*   **Data Analysts**: Convert research reports and survey results into workable datasets.
*   **Sales Teams**: Pull pricing tables and product catalogs into Excel for comparison.
*   **HR Departments**: Extract employee data and payroll information.
*   **Researchers**: Convert academic tables and statistical data for further analysis.
*   **Business Owners**: Extract invoice data, expense reports, and financial summaries.`,
        sections: [
            {
                id: 'challenges',
                title: 'The Challenge with PDF Tables',
                content: `PDFs are designed for **viewing**, not **editing**. They draw lines and text on a page, but they don't understand the concept of "cells" or "columns."

**Why Copy-Paste Fails:**
When you copy a table from a PDF and paste into Excel, you typically get:
*   All data dumped into column A
*   Rows merged together
*   Numbers treated as text
*   Formatting completely lost
*   Hours of manual cleanup required

**The Root Problem:**
PDFs store tables as visual elements (lines, text boxes) positioned on a page. They don't contain structured data like Excel's rows and columns. Converting requires **spatial analysis** to detect the grid structure and reconstruct it as a proper spreadsheet.

**Common PDF Table Issues:**
| Problem | Impact |
|---------|--------|
| Merged cells | Data misalignment |
| Multi-line cells | Row splitting errors |
| Headers spanning columns | Column detection fails |
| Embedded images | Missing data |
| Rotated text | OCR required |
| Multiple tables per page | Extraction confusion |`
            },
            {
                id: 'solutions',
                title: 'Conversion Methods Compared',
                content: `**1. Excel's Built-In "Get Data" Feature**
*Available in*: Excel 2016+ (Windows/Mac)
*How to use*: Data → Get Data → From File → From PDF
*Pros*: No additional software needed
*Cons*: Limited accuracy, struggles with complex tables
*Best for*: Simple tables with clear grid lines

**2. Dedicated PDF to Excel Converters**
*Examples*: pdfcanada.ca, Adobe Acrobat, Smallpdf
*How it works*: Advanced spatial analysis detects cell boundaries
*Pros*: Higher accuracy, handles complex layouts
*Cons*: May require upload (privacy concern)
*Best for*: Complex tables, multi-page documents

**3. Copy-Paste via Word (Workaround)**
*How to use*: PDF → Word → Excel
*Pros*: Sometimes preserves structure better than direct paste
*Cons*: Time-consuming, inconsistent results
*Best for*: Small tables when other methods fail

**4. OCR (For Scanned PDFs)**
*When needed*: PDF is an image (scanned document)
*How it works*: Optical Character Recognition converts image to text
*Accuracy*: 85-98% depending on scan quality
*Best for*: Scanned invoices, bank statements, old documents

**Comparison Table:**
| Method | Accuracy | Speed | Privacy | Cost |
|--------|----------|-------|---------|------|
| Excel Get Data | 60-70% | Fast | ✅ Local | Free |
| Dedicated Converter | 85-95% | Fast | ⚠️ Varies | Free-Paid |
| Word Workaround | 50-60% | Slow | ✅ Local | Free |
| OCR Tools | 85-98% | Slow | ⚠️ Varies | Free-Paid |`
            },
            {
                id: 'how-to',
                title: 'How to Convert PDF to Excel',
                content: `**Method 1: Using Our Tool (Recommended)**

**Step 1: Upload Your PDF**
Click "Select PDF" or drag and drop. Your file is processed locally—nothing is uploaded to servers.

**Step 2: Preview Tables**
Our tool automatically detects tables. Review the preview to ensure correct detection.

**Step 3: Adjust Detection (If Needed)**
*   Select specific pages if the PDF has multiple pages
*   Choose which tables to extract if multiple tables exist
*   Adjust cell detection sensitivity for complex layouts

**Step 4: Convert**
Click "Convert to Excel" and wait for processing (typically 5-30 seconds).

**Step 5: Download**
Save the .xlsx file. Open in Excel, Google Sheets, or LibreOffice Calc.

**Step 6: Verify & Clean**
*   Check that numbers are formatted as numbers (not text)
*   Verify merged cells are correct
*   Adjust column widths for readability
*   Remove any extra blank rows/columns

---

**Method 2: Using Excel's Get Data Feature**

**Step 1: Open Excel**
Create a new workbook or open an existing one.

**Step 2: Navigate to Data Tab**
Click *Data* → *Get Data* → *From File* → *From PDF*

**Step 3: Select Your PDF**
Browse to your PDF file and click "Import."

**Step 4: Choose Table**
Excel will show detected tables. Select the one you want.

**Step 5: Load Data**
Click "Load" to import into Excel. Use "Transform Data" for advanced cleanup.

**Limitations:**
*   Only works with text-based PDFs (not scanned images)
*   Struggles with complex table layouts
*   May require significant manual cleanup`
            },
            {
                id: 'tips',
                title: 'Tips for Accurate Conversion',
                content: `**Before Converting:**
*   ✅ Use the highest quality PDF available
*   ✅ Ensure the PDF is text-based (not a scanned image)
*   ✅ Check that tables have clear gridlines or spacing
*   ✅ Remove password protection if present

**For Best Results:**
*   **Single table per page**: Split multi-table pages before converting
*   **Consistent formatting**: Tables with uniform cell sizes convert better
*   **Clear headers**: Ensure column headers are distinct from data rows
*   **No merged cells**: Unmerge cells in the PDF if possible (or fix after conversion)

**After Converting:**
*   **Format numbers**: Select number columns → Format as Number/Currency
*   **Remove duplicates**: Data → Remove Duplicates
*   **Freeze headers**: View → Freeze Panes → Freeze Top Row
*   **Apply filters**: Data → Filter (to enable column filtering)

**Handling Common Issues:**
| Issue | Solution |
|-------|----------|
| Numbers stored as text | Select column → Data → Text to Columns → Finish |
| Extra spaces | Use TRIM() function or Find & Replace |
| Date format wrong | Format Cells → Date → Choose format |
| Merged cells broken | Manually merge cells in Excel |
| Missing columns | Check if PDF had multi-line headers |`
            },
            {
                id: 'use-cases',
                title: 'Common Use Cases',
                content: `**Financial Analysis**
Extract bank statements, credit card transactions, and financial reports for budgeting and analysis in Excel.

**Invoice Processing**
Convert supplier invoices and billing statements into Excel for accounts payable tracking and reconciliation.

**Sales Data**
Pull pricing tables, product catalogs, and sales reports from PDF into Excel for comparison and forecasting.

**Research & Academia**
Extract statistical tables, survey results, and research data for further analysis and visualization.

**HR & Payroll**
Convert employee rosters, payroll summaries, and benefits tables for processing and reporting.

**Inventory Management**
Extract stock lists, product specifications, and pricing from supplier PDFs into Excel for inventory tracking.

**Real Estate**
Convert property listings, comparative market analyses, and rental income statements for financial modeling.

**Legal Discovery**
Extract evidence tables, exhibit lists, and case data from legal documents for analysis and presentation.`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `**100% Local Processing**
Our tool processes your PDF entirely in your browser using WebAssembly. Your financial data, customer lists, and sensitive tables never leave your device.

**Zero Data Retention**
We don't store your PDFs, extracted data, or any information about your documents. When you close the tab, everything is cleared from memory.

**No Account Required**
Convert PDFs to Excel immediately without creating an account or providing an email address.

**Comparison with Cloud Services:**
| Feature | pdfcanada.ca | Cloud Services |
|---------|-------------|----------------|
| File Upload | ❌ Never | ✅ Required |
| Data Storage | ❌ None | ⚠️ Often retained |
| Account Needed | ❌ No | ✅ Yes |
| Email Required | ❌ No | ✅ Yes |
| Privacy Risk | ✅ Minimal | ⚠️ Higher |

**Ideal for Sensitive Data:**
*   Financial statements
*   Customer lists
*   Payroll information
*   Proprietary pricing
*   Confidential research data`
            },
            {
                id: 'troubleshooting',
                title: 'Troubleshooting',
                content: `**Problem: Conversion produces gibberish**
*Solution*: The PDF is likely scanned (image-based). Use OCR first to convert to text-based PDF.

**Problem: All data lands in one column**
*Solution*: The table lacks clear structure. Try using "Text to Columns" in Excel (Data → Text to Columns → Delimited → Space/Tab).

**Problem: Numbers are treated as text**
*Solution*: Select the column → Data → Text to Columns → Finish. Or multiply by 1 to force number format.

**Problem: Some rows are missing**
*Solution*: The PDF may have multi-line cells. Check the original PDF and manually add missing rows.

**Problem: Headers are mixed with data**
*Solution*: Manually move header rows to the top, then freeze the top row.

**Problem: Conversion is very slow**
*Solution*: Large PDFs (50+ pages) take time. Try converting page-by-page or use desktop software for massive files.

**Problem: Merged cells cause misalignment**
*Solution*: Unmerge cells in Excel, then manually adjust data placement.

**Problem: Special characters are garbled**
*Solution*: Encoding issue. Try opening the Excel file with UTF-8 encoding or re-save the PDF with standard fonts.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**How do I convert PDF to Excel for free?**
Use pdfcanada.ca/pdf-to-excel. Upload your PDF, our tool extracts tables and converts them to .xlsx format instantly. No email or account required.

**Can I convert scanned PDFs to Excel?**
Yes, but you'll need OCR (Optical Character Recognition) first. Our tool includes OCR for scanned documents.

**Will formulas be preserved?**
No. PDFs don't store formulas—only the calculated results. You'll need to recreate formulas in Excel.

**How accurate is PDF to Excel conversion?**
For text-based PDFs with clear tables: 85-95% accuracy. For scanned PDFs: 85-98% depending on scan quality. Complex layouts may require manual cleanup.

**Can I convert multiple tables at once?**
Yes. Our tool detects all tables in the PDF and lets you choose which to convert.

**What file format is the output?**
.xlsx (Excel 2007+), compatible with Microsoft Excel, Google Sheets, and LibreOffice Calc.

**Is there a page or file size limit?**
No hard limit. Very large files (100+ pages or 50+ MB) may take longer to process.

**Can I edit the Excel file after conversion?**
Yes! The output is a fully editable Excel spreadsheet. You can modify data, add formulas, create charts, etc.

**Why do some cells have extra spaces?**
PDF-to-Excel conversion sometimes adds extra spaces. Use Find & Replace (Ctrl+H) to remove them, or use the TRIM() function.

**Can I convert password-protected PDFs?**
You'll need to remove the password first. Use our "Unlock PDF" tool, then convert to Excel.

**Does this work on Mac and mobile?**
Yes! Our tool works on any device with a modern browser (Chrome, Firefox, Safari, Edge).

**Is this tool really free?**
Yes, 100% free with no watermarks, usage limits, or hidden costs.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'PDF to Excel'
        },
        quickAnswer: {
            question: "How do I convert PDF to Excel for free?",
            answer: "Use pdfcanada.ca/pdf-to-excel. Upload your PDF, our tool extracts tables and converts them to .xlsx format instantly. No email required.",
            tool: "PDF to Excel",
            steps: ["Upload PDF", "Click Convert", "Download Excel file"]
        }
    },
    fr: {
        seo_title: 'Guide Convertir PDF en Excel | Extraire Tableaux PDF vers Feuille de Calcul',
        seo_desc: 'Apprenez à convertir des tableaux PDF en Excel (.xlsx) avec précision. Extrayez des données et économisez des heures de saisie manuelle.',
        intro: `Les données piégées dans un PDF sont inutiles pour l'analyse. Pour les calculer, trier ou visualiser, vous en avez besoin dans **Excel**.

Ce guide complet vous montre comment convertir des tableaux PDF en feuilles de calcul Excel modifiables (.xlsx) avec précision.

### Qui a besoin de conversion PDF vers Excel ?

*   **Comptables** : Extrayez des états financiers pour analyse.
*   **Analystes de données** : Convertissez des rapports de recherche en ensembles de données.
*   **Équipes commerciales** : Extrayez des tableaux de prix pour comparaison.
*   **Départements RH** : Extrayez des données d'employés.
*   **Chercheurs** : Convertissez des tableaux académiques pour analyse.`,
        sections: [
            {
                id: 'challenges',
                title: 'Le Défi avec les Tableaux PDF',
                content: `Les PDF sont conçus pour la **visualisation**, pas l'**édition**. Ils dessinent des lignes et du texte, mais ne comprennent pas les "cellules".

**Pourquoi le copier-coller échoue :**
*   Toutes les données dans la colonne A
*   Lignes fusionnées
*   Nombres traités comme du texte
*   Formatage perdu
*   Heures de nettoyage manuel`
            },
            {
                id: 'solutions',
                title: 'Méthodes de Conversion Comparées',
                content: `**1. Fonction "Récupérer des données" d'Excel**
*Disponible dans* : Excel 2016+
*Avantages* : Aucun logiciel supplémentaire
*Inconvénients* : Précision limitée

**2. Convertisseurs Dédiés**
*Avantages* : Précision élevée
*Inconvénients* : Peut nécessiter un téléversement

**3. Copier-Coller via Word**
*Avantages* : Parfois préserve mieux la structure
*Inconvénients* : Chronophage

**4. OCR (Pour PDF Scannés)**
*Précision* : 85-98%`
            },
            {
                id: 'how-to',
                title: 'Comment Convertir PDF en Excel',
                content: `**Étape 1** : Téléchargez votre PDF
**Étape 2** : Prévisualisez les tableaux
**Étape 3** : Ajustez la détection
**Étape 4** : Convertissez
**Étape 5** : Téléchargez le fichier .xlsx
**Étape 6** : Vérifiez et nettoyez`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Traitement 100% Local**
Votre PDF est traité dans votre navigateur. Vos données financières ne quittent jamais votre appareil.

**Zéro rétention de données**
Nous ne stockons pas vos PDF ou données extraites.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Comment convertir PDF en Excel gratuitement ?**
Utilisez pdfcanada.ca/fr/pdf-to-excel. Téléversez votre PDF, notre outil extrait les tableaux instantanément.

**Puis-je convertir des PDF scannés ?**
Oui, avec OCR. Notre outil inclut l'OCR.

**Quelle est la précision ?**
85-95% pour les PDF texte, 85-98% pour les scannés.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'PDF vers Excel'
        },
        quickAnswer: {
            question: "Comment convertir un PDF en Excel gratuitement ?",
            answer: "Utilisez pdfcanada.ca/fr/pdf-to-excel. Téléversez votre PDF, notre outil extrait les tableaux et les convertit en format .xlsx instantanément.",
            tool: "PDF vers Excel",
            steps: ["Téléversez le PDF", "Cliquez sur Convertir", "Téléchargez le fichier Excel"]
        }
    },
    pt: {
        seo_title: 'Guia Converter PDF para Excel | Extrair Tabelas PDF para Planilha',
        seo_desc: 'Aprenda a converter tabelas PDF para Excel (.xlsx) com precisão. Extraia dados e economize horas de entrada manual.',
        intro: `Dados presos em um PDF são inúteis para análise. Para calcular, classificar ou visualizar, você precisa deles no **Excel**.

Este guia abrangente mostra como converter tabelas PDF em planilhas Excel editáveis (.xlsx) com precisão.

### Quem precisa de conversão PDF para Excel?

*   **Contadores**: Extraia demonstrativos financeiros para análise.
*   **Analistas de dados**: Converta relatórios de pesquisa em conjuntos de dados.
*   **Equipes de vendas**: Extraia tabelas de preços para comparação.
*   **Departamentos de RH**: Extraia dados de funcionários.
*   **Pesquisadores**: Converta tabelas acadêmicas para análise.`,
        sections: [
            {
                id: 'challenges',
                title: 'O Desafio com Tabelas em PDF',
                content: `PDFs são projetados para **visualização**, não **edição**. Eles desenham linhas e texto, mas não entendem "células".

**Por que copiar-colar falha:**
*   Todos os dados na coluna A
*   Linhas mescladas
*   Números tratados como texto
*   Formatação perdida
*   Horas de limpeza manual`
            },
            {
                id: 'solutions',
                title: 'Métodos de Conversão Comparados',
                content: `**1. Recurso "Obter Dados" do Excel**
*Disponível em*: Excel 2016+
*Vantagens*: Nenhum software adicional
*Desvantagens*: Precisão limitada

**2. Conversores Dedicados**
*Vantagens*: Alta precisão
*Desvantagens*: Pode exigir upload

**3. Copiar-Colar via Word**
*Vantagens*: Às vezes preserva melhor a estrutura
*Desvantagens*: Demorado

**4. OCR (Para PDFs Escaneados)**
*Precisão*: 85-98%`
            },
            {
                id: 'how-to',
                title: 'Como Converter PDF para Excel',
                content: `**Passo 1**: Envie seu PDF
**Passo 2**: Visualize as tabelas
**Passo 3**: Ajuste a detecção
**Passo 4**: Converta
**Passo 5**: Baixe o arquivo .xlsx
**Passo 6**: Verifique e limpe`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**Processamento 100% Local**
Seu PDF é processado no navegador. Seus dados financeiros nunca saem do seu dispositivo.

**Zero retenção de dados**
Não armazenamos seus PDFs ou dados extraídos.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Como converter PDF para Excel grátis?**
Use pdfcanada.ca/pt/pdf-to-excel. Envie seu PDF, nossa ferramenta extrai tabelas instantaneamente.

**Posso converter PDFs escaneados?**
Sim, com OCR. Nossa ferramenta inclui OCR.

**Qual é a precisão?**
85-95% para PDFs de texto, 85-98% para escaneados.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'PDF para Excel'
        },
        quickAnswer: {
            question: "Como converter PDF para Excel grátis?",
            answer: "Use pdfcanada.ca/pt/pdf-to-excel. Envie seu PDF, nossa ferramenta extrai tabelas e converte para .xlsx instantaneamente.",
            tool: "PDF para Excel",
            steps: ["Envie o PDF", "Clique em Converter", "Baixe o arquivo Excel"]
        }
    }
});

export const PdfToExcelGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/pdf-to-excel`}
                lang={lang}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/pdf-to-excel' : `/${lang}/guides/pdf-to-excel` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF to Excel' : lang === 'fr' ? 'PDF vers Excel' : 'PDF para Excel'}
                subtitle={lang === 'en' ? 'Unlock your data. Convert tables to spreadsheets.' : lang === 'fr' ? 'Libérez vos données. Convertissez des tableaux en feuilles de calcul.' : 'Desbloqueie seus dados. Converta tabelas em planilhas.'}
                icon={<FileSpreadsheet size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/pdf-to-excel' : `/${lang}/guides/pdf-to-excel` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-excel" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/pdf-to-excel`} category="convert" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

