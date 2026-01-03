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
            title: `Convert PDF Bank Statements to CSV & Excel | Free & Secure ${CURRENT_YEAR}`,
            desc: `How to convert PDF bank statements to CSV, Excel, and QBO for free. Secure local extraction for TD, RBC, BMO, CIBC & more. PIPEDA compliant, no uploads.`
        },
        h1: `How to Convert PDF to CSV and Excel (${CURRENT_YEAR} Guide)`,
        subtitle: "The definitive guide to extracting bank statements and financial data without compromising privacy.",

        intro: (
            <>
                <div className="flex items-center gap-4 mb-8 p-6 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-800">
                    <Database className="text-canada-red shrink-0" size={32} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        &quot;Most tools upload your bank statements to the cloud. We don&apos;t. Everything is processed 100% locally on your computer.&quot;
                    </p>
                </div>
                Extracting data from <strong>PDF tables</strong> is notorious for breaking formatting. Whether you are an accountant reconciling <strong>bank statements</strong> or a business owner managing invoices, the transition from PDF to CSV often results in &quot;messy data&quot; where rows don&apos;t line up.
                <br /><br />
                At <strong>pdfcanada.ca</strong>, we’ve built a specialized <strong>Spatial Extraction Engine</strong> designed specifically for financial documents. In this guide, we&apos;ll show you how to transform complex PDFs into clean <strong>Excel, CSV, or QBO</strong> files in seconds.
            </>
        ),

        sections: [
            {
                id: "how-to-convert",
                title: "How to Convert PDF to CSV for Free (No Uploads)",
                content: (
                    <div className="space-y-4">
                        <p>Follow these steps to turn your PDF documents into structured data using our local-first tool:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Open the Tool:</strong> Navigate to the <Link href={`/${lang}/pdf-to-csv`} className="text-canada-red hover:underline font-bold">PDF to CSV converter</Link>.
                            </li>
                            <li>
                                <strong>Select Your File:</strong> Choose your bank statement, invoice, or report. Because of <strong>local processing</strong>, the data is analyzed instantly without waiting for a server upload.
                            </li>
                            <li>
                                <strong>Verify the Preview:</strong> Our engine shows you a real-time grid of the extracted rows. Use the <strong>&quot;Smart Merge&quot;</strong> toggle if your transaction descriptions span multiple lines.
                            </li>
                            <li>
                                <strong>Download your CSV/Excel:</strong> Click export. Your file is generated directly in the browser.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "bank-statements",
                title: "Optimized for Bank Statements (TD, RBC, BMO, CIBC)",
                content: (
                    <div className="space-y-4">
                        <p>Canadian banks often use a &quot;multi-line&quot; transaction layout that is a nightmare for standard converters. If you’ve ever tried to <strong>save a PDF bank statement as CSV</strong> and ended up with dates on one row and amounts on another, you know the frustration.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white mt-6 mb-2">Why our tool is better for accountants:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Smart Row Merging:</strong> We automatically detect when a transaction description (like &quot;AMAZON MKTPLACE TORONTO ON&quot;) wraps onto a second line and join them back together.</li>
                            <li><strong>Normalization:</strong> We strip out currency symbols ($, -) and normalize date formats so you can import them directly into software like <strong>XERO</strong> or <strong>FreshBooks</strong>.</li>
                            <li><strong>QBO (QuickBooks Online) Export:</strong> We are one of the few free tools that can export directly to <strong>WebConnect (.qbo)</strong> format, allowing you to &quot;feed&quot; your PDF history into QuickBooks as if it were a live bank link.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "privacy-audit",
                title: "The Security Advantage: PIPEDA & Local Processing",
                content: (
                    <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 border-l-8 border-canada-red">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-canada-red" size={24} />
                            <h4 className="text-xl font-bold">Your Privacy is Un-uploadable</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Financial data is the most sensitive information you own. When you use a standard &quot;Online PDF Converter,&quot; your account numbers, balances, and identity are sent to a cloud server.
                            <br /><br />
                            <strong>Our Canadian Commitment:</strong> We use WebAssembly (WASM) to run the extraction logic inside your browser tab. Your files never hit our servers. This makes our tool fully compliant with <strong>PIPEDA</strong> and ideal for handling legal and financial records.
                        </p>
                    </div>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting: Fixing &quot;Messy&quot; PDF Extraction",
                content: (
                    <div className="space-y-4 font-normal">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-xl">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-1">My columns are misaligned!</h4>
                            <p className="text-yellow-800 dark:text-yellow-300 text-sm">This usually happens if the PDF uses invisible table structures. Try toggling <strong>&quot;Normalize Data&quot;</strong> in our settings panel to re-calculate the column gutters.</p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded-xl">
                            <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-1">Is this tool using OCR?</h4>
                            <p className="text-blue-800 dark:text-blue-300 text-sm">No. We use <strong>Spatial Logic</strong>. This is 100% accurate for digital PDFs. If your PDF is a blurry scan from a physical printer, we recommend using our <Link href={`/${lang}/guides/invoice-ocr`} className="underline font-bold">OCR Tool</Link> instead.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "What is the best way to convert a PDF bank statement to Excel?",
                a: "The best way is to use a converter like pdfcanada.ca that supports 'Smart Merge.' This ensures that transactions spanning multiple lines in the PDF are combined into a single row in Excel, saving you hours of manual cleanup."
            },
            {
                q: "How can I extract data from a PDF for free without software?",
                a: "You can use our browser-based tool. It works on Mac, Windows, and Linux without installation. It leverages your device's own CPU to extract table data locally, making it free, fast, and private."
            },
            {
                q: "Is it safe to convert bank statements online?",
                a: "Only if the tool processes data locally. Standard online tools store your files on their servers. pdfcanada.ca uses local-only processing so your bank data never leaves your computer."
            },
            {
                q: "How do I turn a PDF into a CSV file for QuickBooks?",
                a: "Upload your PDF to our converter, audit the preview to ensure dates and amounts are correct, and then select the 'QBO' or 'CSV' export option. QBO is specifically designed for QuickBooks reconciliation."
            },
            {
                q: "Can I convert multi-page PDF tables into a single CSV?",
                a: "Yes! Our tool automatically scans every page of your PDF and compiles all detected table rows into one continuous CSV or XLSX file."
            }
        ],

        ctaTitle: "Stop Copying and Pasting.",
        ctaButton: "Extract PDF Data Now",
        ctaSubtext: "Free, Secure, and Canadian. 📖"
    },
    fr: {
        seo: {
            title: `Convertir Relevés Bancaires PDF en CSV et Excel | Gratuit ${CURRENT_YEAR}`,
            desc: `Comment convertir vos relevés bancaires PDF en CSV, Excel et QBO gratuitement. Extraction locale sécurisée pour banques canadiennes. Conforme à la LPRPDE.`
        },
        h1: `Comment Convertir un PDF en CSV et Excel (Guide ${CURRENT_YEAR})`,
        subtitle: "Le guide définitif pour extraire vos relevés bancaires et données financières en toute sécurité.",

        intro: (
            <>
                <div className="flex items-center gap-4 mb-8 p-6 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-800">
                    <Database className="text-canada-red shrink-0" size={32} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        &quot;La plupart des outils téléversent vos relevés bancaires sur le cloud. Pas nous. Tout est traité localement sur votre ordinateur.&quot;
                    </p>
                </div>
                L&apos;extraction de données à partir de <strong>tableaux PDF</strong> est réputée pour briser le formatage. Que vous soyez comptable en train de rapprocher des <strong>relevés bancaires</strong> ou propriétaire d&apos;entreprise gérant des factures, le passage du PDF au CSV entraîne souvent des données &quot;désordonnées&quot;.
                <br /><br />
                Chez <strong>pdfcanada.ca</strong>, nous avons conçu un moteur d&apos;<strong>extraction spatiale</strong> spécifiquement pour les documents financiers. Dans ce guide, nous vous montrerons comment transformer des PDF complexes en fichiers <strong>Excel, CSV ou QBO</strong> propres en quelques secondes.
            </>
        ),

        sections: [
            {
                id: "how-to-convert",
                title: "Comment convertir un PDF en CSV gratuitement",
                content: (
                    <div className="space-y-4">
                        <p>Suivez ces étapes pour transformer vos documents PDF en données structurées :</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Ouvrez l&apos;outil :</strong> Accédez au <Link href={`/${lang}/pdf-to-csv`} className="text-canada-red hover:underline font-bold">convertisseur PDF vers CSV</Link>.
                            </li>
                            <li>
                                <strong>Sélectionnez votre fichier :</strong> Choisissez votre relevé ou rapport. Grâce au <strong>traitement local</strong>, les données sont analysées instantanément.
                            </li>
                            <li>
                                <strong>Vérifiez l&apos;aperçu :</strong> Notre moteur affiche une grille en temps réel. Utilisez <strong>&quot;Smart Merge&quot;</strong> si les descriptions de vos transactions s&apos;étendent sur plusieurs lignes.
                            </li>
                            <li>
                                <strong>Téléchargez :</strong> Cliquez sur exporter. Votre fichier est généré directement dans le navigateur.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "bank-statements",
                title: "Optimisé pour les banques canadiennes (Desjardins, National, TD, RBC)",
                content: (
                    <div className="space-y-4">
                        <p>Les banques utilisent souvent une mise en page &quot;multi-lignes&quot; qui est un cauchemar pour les convertisseurs standards. Si vous avez déjà essayé de <strong>sauvegarder un relevé PDF en CSV</strong> pour finir avec les dates sur une ligne et les montants sur une autre, vous connaissez la frustration.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white mt-6 mb-2">Pourquoi notre outil est meilleur pour la comptabilité :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Fusion Intelligente :</strong> Nous détectons quand une description de transaction passe à la ligne et nous les fusionnons.</li>
                            <li><strong>Normalisation :</strong> Nous nettoyons les symboles monétaires et standardisons les dates pour une importation directe dans <strong>XERO</strong> ou <strong>QuickBooks</strong>.</li>
                            <li><strong>Export QBO :</strong> Un des rares outils gratuits capables d&apos;exporter directement au format <strong>QuickBooks (.qbo)</strong>.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "privacy-audit",
                title: "Sécurité et Confidentialité : Certifié Local",
                content: (
                    <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 border-l-8 border-canada-red">
                        <p className="text-gray-300 leading-relaxed">
                            Les données financières sont les plus sensibles. En utilisant notre outil, vos numéros de compte et soldes ne quittent jamais votre ordinateur. Nous sommes entièrement conformes aux normes <strong>LPRPDE</strong> du Canada car aucun fichier n&apos;est téléversé sur nos serveurs.
                        </p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Quelle est la meilleure façon de convertir un relevé bancaire PDF en Excel ?",
                a: "D&apos;utiliser un convertisseur local comme pdfcanada.ca qui supporte la 'Fusion Intelligente' pour garder vos transactions sur une seule ligne."
            },
            {
                q: "Est-ce sécuritaire de convertir des relevés bancaires en ligne ?",
                a: "Seulement si l&apos;outil traite les données localement. pdfcanada.ca n&apos;envoie jamais vos fichiers sur un serveur."
            },
            {
                q: "Puis-je convertir des PDF de plusieurs pages ?",
                a: "Oui, notre outil compile toutes les pages en un seul fichier CSV ou Excel continu."
            }
        ],

        ctaTitle: "Arrêtez le copier-coller.",
        ctaButton: "Extraire les données PDF",
        ctaSubtext: "Gratuit, sécurisé et canadien. 📖"
    }
});

export const PdfToCsvGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": t.h1,
        "description": t.seo.desc,
        "image": "https://www.pdfcanada.ca/og-image.png",
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        },
        "publisher": {
            "@type": "Organization",
            "name": "pdfcanada.ca",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.pdfcanada.ca/android-chrome-192x192.png"
            }
        },
        "datePublished": "2024-12-29",
        "dateModified": new Date().toISOString().split('T')[0],
        "about": {
            "@type": "SoftwareApplication",
            "name": "PDF to CSV Converter",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "CAD"
            }
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
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 sm:mb-14 md:mb-16">
                        {typeof t.intro === 'string' ? <MarkdownContent content={t.intro} /> : t.intro}
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
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-1 sm:w-2 h-6 sm:h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? (
                                        <MarkdownContent content={section.content} />
                                    ) : (
                                        section.content
                                    )}
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
                    <div className="my-16 sm:my-18 md:my-20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                            <Info className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                        </div>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">
                                        {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/pdf-to-csv`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
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
