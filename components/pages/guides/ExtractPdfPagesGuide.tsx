'use client';

import Link from 'next/link';
import React from 'react';
import { Scissors, CheckCircle, Shield, Zap, Globe, Lock, Clock, ArrowRight, FileText, Files, Split, Download } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: "Extract PDF Pages Online Free | Split PDF Guide | pdfcanada.ca",
            desc: `Extract specific pages from PDF files for free. Our ${CURRENT_YEAR} guide shows how to pull pages from large PDFs securely without uploading to servers.`
        },
        h1: "How to Extract PDF Pages Online for Free",
        subtitle: "The complete guide to pulling specific pages from PDFs and creating smaller, focused documents.",

        intro: (
            <>
                Have a 100-page PDF but only need pages 5-10? Need to send a client just the relevant section of a contract? <strong>Extracting pages from a PDF</strong> lets you create smaller, more focused documents from larger files. Whether you're a lawyer isolating specific clauses, a student pulling chapters for study, or a business professional sharing just what's relevant, our <strong>free PDF page extractor</strong> makes it simple—select the pages you want, and download a new PDF containing only those pages.
            </>
        ),

        sections: [
            {
                id: "why-extract",
                title: "Why Extract Pages from a PDF?",
                content: (
                    <>
                        <p className="mb-6">
                            Large PDFs are common but not always practical. Here's why <strong>extracting specific pages</strong> is valuable:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400 flex items-center gap-2">
                                    <Download size={20} /> Reduce File Size
                                </h4>
                                <p className="text-sm">
                                    Email attachments have size limits. Extract only the pages you need and your file stays under the limit—no compression needed.
                                </p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400 flex items-center gap-2">
                                    <Lock size={20} /> Maintain Confidentiality
                                </h4>
                                <p className="text-sm">
                                    Don't share more than necessary. Extract only the pages relevant to your recipient, keeping sensitive information private.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-400 flex items-center gap-2">
                                    <Files size={20} /> Better Organization
                                </h4>
                                <p className="text-sm">
                                    Break down large reports into chapter files. Create separate PDFs for different sections or departments.
                                </p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-400 flex items-center gap-2">
                                    <Split size={20} /> Easier Review
                                </h4>
                                <p className="text-sm">
                                    Focus reviewers on specific content. Extract the relevant pages for faster review cycles and clearer feedback.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-4">
                            <h4 className="font-bold mb-3">Common Use Cases</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Legal</strong>: Extract specific clauses from contracts for client review</li>
                                <li><strong>Real estate</strong>: Pull signature pages from lease agreements</li>
                                <li><strong>Education</strong>: Extract chapters from textbooks for study guides</li>
                                <li><strong>Business</strong>: Isolate financial statements from annual reports</li>
                                <li><strong>Healthcare</strong>: Extract relevant medical records for referrals</li>
                                <li><strong>Government</strong>: Pull specific forms from large application packages</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Extract Pages from a PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Upload Your PDF</strong>: Click the upload area or drag and drop your PDF file. Our tool displays thumbnail previews of all pages so you can easily identify the ones you want.
                            </li>
                            <li>
                                <strong>Select Pages</strong>: Click on the pages you want to extract. You can:
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Click individual pages to select/deselect them</li>
                                    <li>Use shift-click to select a range of pages</li>
                                    <li>Enter page numbers directly (e.g., "1, 3-5, 8, 10-15")</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Preview Selection</strong>: Review your selected pages to ensure you've captured everything you need. The selection count shows how many pages will be in your extracted PDF.
                            </li>
                            <li>
                                <strong>Extract</strong>: Click the extract button. The tool creates a new PDF containing only your selected pages—processed entirely in your browser.
                            </li>
                            <li>
                                <strong>Download</strong>: Save your new, smaller PDF. The original file remains completely unchanged.
                            </li>
                        </ol>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2 flex items-center gap-2">
                                <Clock size={20} /> Processing Speed
                            </h4>
                            <p className="text-yellow-800 dark:text-yellow-300">
                                Extracting pages is fast—typically under 3 seconds regardless of how many pages you select. The speed depends on your device, not your internet connection.
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                            <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2">Pro Tip: Page Ranges</h4>
                            <p className="text-blue-800 dark:text-blue-300 text-sm">
                                Use the page range input for faster selection. Format examples:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm text-blue-800 dark:text-blue-300">
                                <li><code className="bg-blue-100 dark:bg-blue-800 px-2 rounded">1-5</code> — Pages 1 through 5</li>
                                <li><code className="bg-blue-100 dark:bg-blue-800 px-2 rounded">1, 3, 5</code> — Pages 1, 3, and 5 only</li>
                                <li><code className="bg-blue-100 dark:bg-blue-800 px-2 rounded">1-5, 10, 15-20</code> — Combination of ranges and individual pages</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "extract-vs-delete",
                title: "Extract vs Delete: What's the Difference?",
                content: (
                    <>
                        <p className="mb-6">
                            Our site offers both <strong>Extract Pages</strong> and <strong>Delete Pages</strong> tools. Here's when to use each:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400 flex items-center gap-2">
                                    <Scissors size={20} /> Extract Pages
                                </h4>
                                <p className="text-sm mb-3">Creates a new PDF containing <strong>only the pages you select</strong>.</p>
                                <p className="text-sm text-green-800 dark:text-green-300">
                                    <strong>Use when</strong>: You want a few specific pages from a large document.
                                </p>
                                <p className="text-sm italic mt-2">Example: Extract pages 5-10 from a 100-page report.</p>
                            </div>
                            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                                <h4 className="font-bold text-lg mb-3 text-red-900 dark:text-red-400 flex items-center gap-2">
                                    <FileText size={20} /> Delete Pages
                                </h4>
                                <p className="text-sm mb-3">Creates a new PDF with <strong>specified pages removed</strong>.</p>
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    <strong>Use when</strong>: You want most of the document but need to remove a few pages.
                                </p>
                                <p className="text-sm italic mt-2">Example: Remove pages 1-2 (cover pages) from a 50-page document.</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Both tools preserve the original file—they create new PDFs without modifying the uploaded document.
                        </p>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy & Security",
                content: (
                    <>
                        <p className="mb-4">
                            PDFs often contain sensitive information—contracts, medical records, financial statements. Our <strong>PDF page extractor</strong> is designed with privacy first:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border border-red-200 bg-red-50 dark:bg-red-900/20 rounded-xl">
                                <h4 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                    <Lock size={20} /> 100% Browser-Based
                                </h4>
                                <p className="text-sm">
                                    All processing happens in your browser using WebAssembly. Your PDF <strong>never leaves your device</strong>—no server uploads, no cloud storage, no data retention.
                                </p>
                            </div>
                            <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <h4 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                    <Shield size={20} /> PIPEDA Compliant
                                </h4>
                                <p className="text-sm">
                                    With zero data collection and local-only processing, our tool is inherently compliant with Canadian privacy law. Perfect for handling sensitive documents.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm">
                            This makes our tool safe for legal documents, medical records, HR files, and any confidential materials.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-2 text-orange-900 dark:text-orange-400">Problem: Can't see page thumbnails</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Large PDF files may take time to render thumbnails.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Wait for the loading indicator to complete</li>
                                    <li>For very large PDFs, thumbnails load progressively</li>
                                    <li>You can enter page numbers directly without waiting for thumbnails</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                <h4 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-400">Problem: Extracted PDF is larger than expected</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: PDFs may include shared resources used across multiple pages.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Use our compression tool after extraction to reduce file size</li>
                                    <li>Shared fonts and images may be included even if only used elsewhere</li>
                                    <li>For maximum size reduction, try "Extract + Compress" workflow</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-400">Problem: Page numbers in extracted PDF are wrong</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: The extracted PDF starts at page 1, not the original page numbers.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>This is expected behavior—extracted pages are renumbered starting at 1</li>
                                    <li>If you need original page numbers preserved, consider adding headers/footers before extraction</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-2 text-purple-900 dark:text-purple-400">Problem: Password-protected PDF won't open</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Document requires password to access.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Enter the PDF password when prompted</li>
                                    <li>If you don't know the password, contact the document owner</li>
                                    <li>We cannot bypass password protection</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "seo-keywords",
                title: "Related Searches",
                content: (
                    <>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            This guide covers: <strong>extract PDF pages</strong>, <strong>pull pages from PDF</strong>, <strong>PDF page extractor online</strong>, <strong>split PDF pages</strong>, <strong>extract specific pages from PDF</strong>, <strong>remove pages from PDF</strong>, <strong>PDF splitter free</strong>, <strong>select pages from PDF</strong>, <strong>create PDF from specific pages</strong>, <strong>separate PDF pages</strong>, <strong>PDF page extraction tool</strong>, <strong>save specific PDF pages</strong>, <strong>PDF extract pages online free</strong>, <strong>secure PDF extractor</strong>, and <strong>extract PDF pages Canada</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it free to extract pages from a PDF?",
                a: "Yes! Our PDF page extractor is 100% free with no hidden costs, usage limits, or watermarks. Extract pages from as many PDFs as you need."
            },
            {
                q: "Does extracting pages delete them from the original PDF?",
                a: "No! Your original file remains completely unchanged. We create a new PDF containing only your selected pages. Think of it as copying, not cutting."
            },
            {
                q: "Are my files uploaded to your servers?",
                a: "No. All processing happens locally in your browser. Your PDF never leaves your device, ensuring complete privacy for confidential documents."
            },
            {
                q: "Can I extract non-consecutive pages?",
                a: "Absolutely! You can select any combination of pages—consecutive ranges (5-10), individual pages (1, 5, 9), or mixed (1-3, 7, 15-20). Full flexibility."
            },
            {
                q: "What's the maximum file size I can process?",
                a: "Since processing happens locally, the limit depends on your device's memory. Most devices handle PDFs up to 100+ MB easily. Very large documents may process slower."
            },
            {
                q: "Will the extracted PDF maintain the original quality?",
                a: "Yes! We extract pages at full original quality. Images, fonts, and formatting are preserved exactly as they appear in the source document."
            },
            {
                q: "Can I reorder pages in the extracted PDF?",
                a: "The current extract tool keeps pages in their original order. If you need to reorder, use our 'Organize PDF' tool after extraction to rearrange pages."
            },
            {
                q: "Does it work with scanned PDFs?",
                a: "Yes! Scanned PDFs extract just like any other PDF. Each page (which is essentially an image) is included in the new document exactly as it appears."
            },
            {
                q: "Can I extract pages from a password-protected PDF?",
                a: "Yes, if you know the password. Enter it when prompted and you can then select and extract pages normally. We cannot bypass password protection."
            },
            {
                q: "How is this different from 'Split PDF'?",
                a: "Extract creates one PDF with your selected pages. Split divides a PDF into multiple separate files (e.g., each page as its own PDF, or split at specific page numbers). Use extract when you want a subset in one file."
            },
            {
                q: "Will hyperlinks in the extracted pages still work?",
                a: "Internal links pointing to pages outside your selection won't work (since those pages aren't included). External URL links remain functional."
            },
            {
                q: "Can I extract pages on my phone?",
                a: "Yes! Our tool works on any device with a modern browser—smartphones, tablets, laptops. The interface adapts to your screen size for easy page selection."
            }
        ],

        breadcrumb: {
            home: "Home",
            guides: "Guides"
        }
    },
    fr: {
        seo: {
            title: "Extraire pages PDF gratuit en ligne | Guide de séparation PDF | pdfcanada.ca",
            desc: `Extrayez des pages spécifiques de fichiers PDF gratuitement. Notre guide ${CURRENT_YEAR} montre comment tirer des pages de grands PDF en toute sécurité.`
        },
        h1: "Comment extraire des pages d'un PDF gratuitement en ligne",
        subtitle: "Le guide complet pour tirer des pages spécifiques de PDF et créer des documents plus petits et ciblés.",

        intro: (
            <>
                Vous avez un PDF de 100 pages mais n'avez besoin que des pages 5-10? <strong>L'extraction de pages d'un PDF</strong> vous permet de créer des documents plus petits et ciblés. Notre <strong>extracteur de pages PDF gratuit</strong> rend cela simple—sélectionnez les pages souhaitées et téléchargez un nouveau PDF.
            </>
        ),

        sections: [
            {
                id: "why-extract",
                title: "Pourquoi extraire des pages d'un PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Réduire la taille du fichier</h4>
                                <p className="text-sm">Les pièces jointes ont des limites de taille. Extrayez uniquement les pages nécessaires.</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Maintenir la confidentialité</h4>
                                <p className="text-sm">Ne partagez que les pages pertinentes, gardant les informations sensibles privées.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape: Extraire des pages d'un PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Téléchargez votre PDF</strong>: Glissez-déposez votre fichier PDF.</li>
                            <li><strong>Sélectionnez les pages</strong>: Cliquez sur les pages à extraire ou entrez les numéros de page.</li>
                            <li><strong>Aperçu</strong>: Vérifiez votre sélection.</li>
                            <li><strong>Extraire</strong>: Créez votre nouveau PDF.</li>
                            <li><strong>Télécharger</strong>: Enregistrez votre nouveau PDF plus petit.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Confidentialité et sécurité",
                content: (
                    <>
                        <p className="mb-4">
                            Tout le traitement se fait dans votre navigateur. Votre PDF <strong>ne quitte jamais votre appareil</strong>—aucun téléchargement serveur.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit d'extraire des pages d'un PDF?",
                a: "Oui! Notre extracteur est 100% gratuit sans coûts cachés ni limites."
            },
            {
                q: "L'extraction supprime-t-elle les pages de l'original?",
                a: "Non! Votre fichier original reste inchangé. Nous créons un nouveau PDF."
            },
            {
                q: "Mes fichiers sont-ils téléchargés sur vos serveurs?",
                a: "Non. Tout le traitement se fait localement dans votre navigateur."
            },
            {
                q: "Puis-je extraire des pages non consécutives?",
                a: "Absolument! Vous pouvez sélectionner n'importe quelle combinaison de pages."
            }
        ],

        breadcrumb: {
            home: "Accueil",
            guides: "Guides"
        }
    },
    pt: {
        seo: {
            title: "Extrair páginas PDF grátis online | Guia de divisão PDF | pdfcanada.ca",
            desc: `Extraia páginas específicas de arquivos PDF gratuitamente. Nosso guia ${CURRENT_YEAR} mostra como tirar páginas de PDFs grandes com segurança.`
        },
        h1: "Como extrair páginas de um PDF gratuitamente online",
        subtitle: "O guia completo para tirar páginas específicas de PDFs e criar documentos menores e focados.",

        intro: (
            <>
                Tem um PDF de 100 páginas mas só precisa das páginas 5-10? <strong>Extrair páginas de um PDF</strong> permite criar documentos menores e focados. Nosso <strong>extrator de páginas PDF gratuito</strong> torna isso simples—selecione as páginas desejadas e baixe um novo PDF.
            </>
        ),

        sections: [
            {
                id: "why-extract",
                title: "Por que extrair páginas de um PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Reduzir tamanho do arquivo</h4>
                                <p className="text-sm">Anexos de e-mail têm limites de tamanho. Extraia apenas as páginas necessárias.</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Manter confidencialidade</h4>
                                <p className="text-sm">Compartilhe apenas páginas relevantes, mantendo informações sensíveis privadas.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a passo: Extrair páginas de um PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Envie seu PDF</strong>: Arraste e solte seu arquivo PDF.</li>
                            <li><strong>Selecione as páginas</strong>: Clique nas páginas para extrair ou digite os números.</li>
                            <li><strong>Visualizar</strong>: Verifique sua seleção.</li>
                            <li><strong>Extrair</strong>: Crie seu novo PDF.</li>
                            <li><strong>Baixar</strong>: Salve seu novo PDF menor.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacidade e Segurança",
                content: (
                    <>
                        <p className="mb-4">
                            Todo o processamento acontece no seu navegador. Seu PDF <strong>nunca sai do seu dispositivo</strong>—sem upload para servidor.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "É grátis extrair páginas de um PDF?",
                a: "Sim! Nosso extrator é 100% gratuito sem custos ocultos ou limites."
            },
            {
                q: "Extrair páginas apaga-as do original?",
                a: "Não! Seu arquivo original permanece inalterado. Criamos um novo PDF."
            },
            {
                q: "Meus arquivos são enviados para seus servidores?",
                a: "Não. Todo o processamento acontece localmente no seu navegador."
            },
            {
                q: "Posso extrair páginas não consecutivas?",
                a: "Absolutamente! Você pode selecionar qualquer combinação de páginas."
            }
        ],

        breadcrumb: {
            home: "Início",
            guides: "Guias"
        }
    }
});

export const ExtractPdfPagesGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang)[lang] || getGuideContent(lang).en;
    const slug = 'extract-pdf-pages';

    return (
        <>
            <SEO
                title={content.seo.title}
                description={content.seo.desc}
                canonicalPath={`/${lang}/${slug}-guide`}
                lang={lang}
            />
            <PageLayout title={content.h1} subtitle={content.subtitle} icon={<Scissors size={32} />}>
                <article className="max-w-4xl mx-auto px-4 py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        <Link href={`/${lang}`} className="hover:text-canada-red">{content.breadcrumb.home}</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/guides`} className="hover:text-canada-red">{content.breadcrumb.guides}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 dark:text-white">Extract PDF Pages</span>
                    </nav>

                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-canada-red/10 rounded-2xl">
                                <Scissors className="w-8 h-8 text-canada-red" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    {content.h1}
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                                    {content.subtitle}
                                </p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {content.intro}
                        </p>
                    </header>

                    {/* AI Snapshot */}
                    <AISnapshot
                        lang={lang}
                        question={lang === 'fr' ? "Comment extraire des pages d'un PDF?" : (lang === 'pt' ? "Como extrair páginas de um PDF?" : "How do I extract pages from a PDF?")}
                        answer={lang === 'fr'
                            ? "Téléchargez votre PDF, sélectionnez les pages souhaitées, cliquez sur Extraire. Un nouveau PDF avec uniquement ces pages est créé dans votre navigateur."
                            : (lang === 'pt'
                                ? "Envie seu PDF, selecione as páginas desejadas, clique em Extrair. Um novo PDF com apenas essas páginas é criado no seu navegador."
                                : "Upload your PDF, select the pages you want, click Extract. A new PDF with only those pages is created right in your browser."
                            )
                        }
                        steps={lang === 'fr'
                            ? ["Téléchargez votre PDF", "Sélectionnez les pages", "Cliquez sur Extraire", "Téléchargez le nouveau PDF"]
                            : (lang === 'pt'
                                ? ["Envie seu PDF", "Selecione as páginas", "Clique em Extrair", "Baixe o novo PDF"]
                                : ["Upload your PDF", "Select the pages", "Click Extract", "Download the new PDF"]
                            )
                        }
                    />

                    {/* Tool Promo */}
                    <ToolPromo lang={lang} tool={slug} />

                    {/* Main Content Sections */}
                    {content.sections.map((section, index) => (
                        <section key={section.id} id={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-canada-red text-white text-sm font-bold">
                                    {index + 1}
                                </span>
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    {/* FAQ Section */}
                    <section id="faq" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {lang === 'fr' ? 'Questions fréquemment posées' : (lang === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions')}
                        </h2>
                        <div className="space-y-6">
                            {content.faq.map((item, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Author Bio */}
                    <AuthorBio lang={lang} />

                    {/* Related Tools */}
                    <RelatedTools
                        lang={lang}
                        currentPath={`/${lang}/${slug}-guide`}
                        category="organize"
                    />
                </article>
            </PageLayout>
        </>
    );
};
