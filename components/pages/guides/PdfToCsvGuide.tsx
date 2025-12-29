'use client';

import Link from 'next/link';
import React from 'react';
import {
    FileSpreadsheet,
    Shield,
    Zap,
    CheckCircle,
    Info,
    ArrowRight,
    Database,
    Lock,
    Search,
    Download,
    Table,
    RefreshCcw,
    Activity,
    Clock,
    DollarSign
} from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Free PDF to CSV Converter | Convert Bank Statements to Excel ${CURRENT_YEAR}`,
            desc: `Convert PDF to CSV and Excel for free. Our secure local converter extracts tables from bank statements and financial documents with 100% privacy. No uploads required.`
        },
        h1: `Free PDF to CSV Converter (${CURRENT_YEAR})`,
        subtitle: "The definitive guide to extracting tabular data from PDFs securely and accurately.",

        intro: `Extracting data from PDF tables is notoriously frustrating. Whether you're dealing with **bank statements**, **invoices**, or **financial reports**, copying and pasting often leads to broken rows and misaligned columns. 

At **pdfcanada.ca**, we've developed a high-fidelity **PDF to CSV engine** that operates entirely in your browser. Unlike other converters that upload your sensitive financial documents to the cloud, our tool processes everything locally. This means your data never leaves Canada—or even your computer. 

In this guide, we'll explore how to use our **free PDF table extractor** to turn complex documents into clean, ready-to-use CSV and Excel files.`,

        sections: [
            {
                id: "how-it-works",
                title: "How Our Spatial Extraction Engine Works",
                content: `Most PDF converters use simple text-stripping methods that fail when lines wrap or columns are close together. Our **Spatial Detection Engine 2.0** uses advanced heuristics to understand document layout:

1.  **Coordinate Mapping:** We map the exact (X, Y) coordinates of every character on the page.
2.  **Y-Axis Grouping:** We group text bits into rows based on vertical proximity, handling multi-line descriptions with "Smart Merge" logic.
3.  **X-Axis Histogramming:** We detect vertical gutters (white space between columns) to accurately segment data even without visible table borders.
4.  **Data Harmonization:** We automatically clean currency symbols ($), separators (,), and normalize date formats for seamless Excel import.

### Why Logic-Based Extraction Beats OCR
While **OCR (Optical Character Recognition)** is great for scanned images, most modern PDFs are "digitally born." Using spatial logic instead of raw OCR allows us to:
- Preserve selectable text quality
- Maintain 100% accuracy for numbers
- Process files 10x faster than traditional AI vision models`
            },
            {
                id: "step-by-step",
                title: "How to Convert PDF to CSV in 3 Simple Steps",
                content: `Converting your files is designed to be a "sorry-free" experience.

### Step 1: Upload Your PDF
Navigate to our [PDF to CSV Tool](/${lang}/pdf-to-csv). Select your bank statement or report. Since we use **local processing**, even 50-page documents load instantly because there is no upload wait time.

### Step 2: Audit with Interactive Preview
Once the engine analyzes your file, you'll see a live grid. 
- **Smart Merge:** Toggle this to join multi-line transaction descriptions.
- **Normalize Data:** Toggle this to strip currency symbols and fix date formats (e.g., converting "JAN 15" to "2025-01-15").

### Step 3: Export to Your Format
Choose your preferred output:
- **CSV:** Best for simple data imports.
- **Excel (.xlsx):** Best for analysis, pivot tables, and accounting.
- **QBO (QuickBooks):** Optimized specifically for importing directly into accounting software.`
            },
            {
                id: "bank-statements",
                title: "Optimized for Canadian Bank Statements",
                content: `Canadian banks (TD, RBC, Scotiabank, BMO, CIBC) often use complex multi-line layouts for transaction descriptions. Our tool is specifically tuned for these formats.

### Common Issues We Solve:
*   **Wrapped Descriptions:** When a transaction description spans two lines, we merge them into one row.
*   **Date Alignment:** We ensure the date stays associated with the correct transaction amount.
*   **Header Removal:** We automatically strip out repeated page headers and footers to give you a clean list of data.

> [!TIP]
> If you are an accountant or bookkeeper, use the **QBO Export** feature. It converts your PDF bank statement into a format that QuickBooks and Xero can "read" as if it were a direct bank feed.`
            },
            {
                id: "privacy",
                title: "100% Private: Your Data Stays on Your Device",
                content: `In the world of finance, privacy isn't just a feature—it's a requirement. Most **online PDF converters** are data-harvesting machines.

**At pdfcanada.ca:**
- **No Cloud Storage:** We never see your files.
- **PIPEDA Compliant:** Our "zero-upload" architecture exceeds Canadian privacy standards.
- **Offline Capable:** Once the page loads, you can actually disconnect your internet and the conversion still works.

### The Risk of Cloud Converters
When you upload a bank statement to a standard cloud converter, you may be exposing:
- Account numbers
- Full names and home addresses
- Spending habits and sensitive transactions
- Balance information

By using our **local PDF to Excel** tool, you eliminate these risks entirely.`
            }
        ],

        faq: [
            {
                q: "Is there a limit on the number of rows I can extract?",
                a: "No! Because we process files locally on your computer, there is no server-side limit. Whether your PDF has 10 transactions or 10,000, our engine can handle it."
            },
            {
                q: "What bank formats are supported?",
                a: "We support statements from all major Canadian and US banks, including TD, RBC, CIBC, RBC, Scotiabank, Tangerine, and HSBC. The tool also works for credit card statements (Visa, Mastercard, Amex)."
            },
            {
                q: "Can this convert scanned PDFs?",
                a: "This version is optimized for digital PDFs (non-scanned). For scanned documents, we recommend using our Invoice OCR tool which is designed for image-to-text conversion."
            },
            {
                q: "Does it work with multi-page PDFs?",
                a: "Yes. Our engine scans all pages in the document and compiles them into a single continuous table for export."
            }
        ],

        ctaTitle: "Ready to Stop Manual Entry?",
        ctaButton: "Convert PDF to CSV Now",
        ctaSubtext: "100% Free. 100% Private. 100% Canadian."
    },
    fr: {
        seo: {
            title: `Convertisseur PDF vers CSV Gratuit | Relevés Bancaires en Excel ${CURRENT_YEAR}`,
            desc: `Convertissez vos PDF en CSV et Excel gratuitement. Notre moteur local sécurisé extrait les tableaux des relevés bancaires avec une confidentialité totale.`
        },
        h1: `Convertisseur PDF vers CSV Gratuit (${CURRENT_YEAR})`,
        subtitle: "Le guide ultime pour extraire vos données tabulaires en toute sécurité.",

        intro: `L'extraction de données à partir de tableaux PDF est souvent frustrante. Que ce soit pour des **relevés bancaires** ou des **rapports financiers**, le copier-coller brise souvent les lignes et décale les colonnes.

Chez **pdfcanada.ca**, nous avons développé un moteur d'extraction local qui traite tout dans votre navigateur. Vos données financières ne quittent jamais votre ordinateur.`,

        sections: [
            {
                id: "how-to",
                title: "Comment convertir un PDF en CSV en 3 étapes",
                content: `### Étape 1 : Téléversez le PDF
Sélectionnez votre relevé bancaire. Le chargement est instantané car il n'y a pas de téléversement vers un serveur.

### Étape 2 : Vérifiez l'aperçu
Utilisez le "Smart Merge" pour fusionner les descriptions sur plusieurs lignes et la "Normalisation" pour nettoyer les montants.

### Étape 3 : Exportez
Choisissez entre **CSV**, **Excel** ou **QBO** (pour QuickBooks).`
            },
            {
                id: "privacy",
                title: "Confidentialité Totale",
                content: `Pourquoi nous choisir ? 
- **Aucun envoi sur le cloud** : Vos fichiers restent privés.
- **Conformité LPRPDE** : Nous dépassons les normes de protection de la vie privée.
- **Traitement local** : C'est votre ordinateur qui travaille, pas nos serveurs.`
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Oui, comme tous nos outils, c'est 100% gratuit et sans limites."
            },
            {
                q: "Quelles banques sont supportées ?",
                a: "Toutes les grandes banques canadiennes (TD, RBC, Desjardins, etc.) et les cartes de crédit."
            }
        ],

        ctaTitle: "Prêt à gagner du temps ?",
        ctaButton: "Essayer PDF vers CSV",
        ctaSubtext: "Gratuit. Privé. Canadien."
    }
});

export const PdfToCsvGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CAD"
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-csv"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir un relevé bancaire PDF en CSV ?" : "How to convert PDF bank statement to CSV?",
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur local de pdfcanada.ca. Glissez votre fichier et téléchargez les données en format CSV ou Excel sans téléversement."
                        : "Use pdfcanada.ca's local converter. Drag your file and download the data in CSV or Excel format without any server uploads.",
                    tool: "PDF to CSV Tool",
                    steps: lang === 'fr'
                        ? ["Importez le PDF", "Fusionnez les lignes", "Exportez en CSV"]
                        : ["Upload PDF", "Merge Rows", "Export to CSV"],
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF vers CSV' : 'PDF to CSV', path: lang === 'fr' ? '/fr/guides/pdf-to-csv' : '/guides/pdf-to-csv' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileSpreadsheet size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF vers CSV' : 'PDF to CSV', href: '#' }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Stats/Highlights */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="p-8 bg-green-50 dark:bg-green-900/10 rounded-[2rem] border border-green-100 dark:border-green-800 shadow-sm">
                            <Table className="text-green-600 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{lang === 'fr' ? "Précision" : "High Precision"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Moteur spatial détectant les colonnes sans bordures." : "Spatial engine detects columns even without borders."}</p>
                        </div>
                        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] border border-blue-100 dark:border-blue-800 shadow-sm">
                            <Lock className="text-blue-600 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{lang === 'fr' ? "Confidentialité" : "Privacy First"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Traitement 100% local. Aucune donnée n'est envoyée." : "100% local processing. No data is ever sent."}</p>
                        </div>
                        <div className="p-8 bg-red-50 dark:bg-red-900/10 rounded-[2rem] border border-red-100 dark:border-red-800 shadow-sm">
                            <DollarSign className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{lang === 'fr' ? "Comptabilité" : "Accountant Ready"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Export QBO pour QuickBooks et Xero." : "QBO export for QuickBooks and Xero."}</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24">
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Interactive Snapshot */}
                    <AISnapshot
                        question={lang === 'fr' ? "Comment extraire les données bancaires d'un PDF ?" : "How to extract bank data from a PDF?"}
                        answer={lang === 'fr'
                            ? "Utilisez pdfcanada.ca. Le convertisseur analyse la structure spatiale du PDF pour recréer le tableau en format CSV ou Excel instantanément."
                            : "Use pdfcanada.ca. The converter analyzes the PDF's spatial structure to recreate the table in CSV or Excel format instantly."}
                        toolName="PDF to CSV Tool"
                        steps={lang === 'fr'
                            ? ["Ouvrez le fichier", "Activer Smart Merge", "Téléchargez l'Excel"]
                            : ["Open File", "Enable Smart Merge", "Download Excel"]}
                        lang={lang}
                    />

                    {/* FAQ */}
                    <div className="my-20">
                        <div className="flex items-center gap-3 mb-10">
                            <Info className="text-canada-red" size={32} />
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                    <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">
                                        {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-canada-red p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-lg md:text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/pdf-to-csv`}
                            className="inline-block bg-white text-canada-red px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-csv" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
