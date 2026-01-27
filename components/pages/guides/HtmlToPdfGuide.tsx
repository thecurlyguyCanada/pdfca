'use client';

import Link from 'next/link';
import React from 'react';
import { Code, CheckCircle, Shield, Zap, Globe, Lock, Clock, ArrowRight, FileText, Monitor, Smartphone, Layout } from 'lucide-react';
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
            title: "Convert HTML to PDF Online Free | Save Web Pages as PDF | pdfcanada.ca",
            desc: `Convert HTML files and web pages to PDF for free. Our ${CURRENT_YEAR} guide shows you how to save HTML documents as PDFs securely without uploading to servers.`
        },
        h1: "How to Convert HTML to PDF Online for Free",
        subtitle: "The complete guide to saving web pages and HTML files as professional PDF documents.",

        intro: (
            <>
                Need to save a <strong>web page as a PDF</strong> or convert an <strong>HTML file to PDF</strong> for offline reading, printing, or archiving? Whether you're a web developer saving documentation, a researcher archiving articles, or a business professional preserving important web content, our <strong>free HTML to PDF converter</strong> renders your HTML exactly as a browser would—capturing CSS styles, images, and layout—then saves it as a clean PDF document.
            </>
        ),

        sections: [
            {
                id: "what-is-html",
                title: "What is HTML and Why Convert to PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>HTML (HyperText Markup Language)</strong> is the standard language for creating web pages. Every website you visit is built using HTML combined with CSS (for styling) and JavaScript (for interactivity). While HTML is perfect for displaying content in browsers, there are many situations where PDF is a better choice:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400 flex items-center gap-2">
                                    <Globe size={20} /> Offline Access
                                </h4>
                                <p className="text-sm">
                                    PDFs work without internet connection. Save important articles, documentation, or receipts for offline access anywhere.
                                </p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400 flex items-center gap-2">
                                    <Lock size={20} /> Permanent Record
                                </h4>
                                <p className="text-sm">
                                    Web pages can change or disappear. PDF creates a permanent snapshot that preserves content exactly as it appeared.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-400 flex items-center gap-2">
                                    <FileText size={20} /> Print-Ready
                                </h4>
                                <p className="text-sm">
                                    PDFs are designed for printing. Convert web pages to PDF for consistent, professional printouts without browser headers.
                                </p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-400 flex items-center gap-2">
                                    <Shield size={20} /> Legal Documentation
                                </h4>
                                <p className="text-sm">
                                    For legal purposes, a PDF of a web page provides timestamped evidence of content. Useful for terms of service, online transactions, or copyright matters.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-4">
                            <h4 className="font-bold mb-3">Common Use Cases</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Web developers</strong>: Save HTML templates, documentation, or email signatures as PDF</li>
                                <li><strong>Researchers</strong>: Archive online articles, studies, and references</li>
                                <li><strong>E-commerce</strong>: Save order confirmations, receipts, and invoices</li>
                                <li><strong>Legal/Compliance</strong>: Document terms of service, privacy policies, web content for records</li>
                                <li><strong>Education</strong>: Save course materials, tutorials, and online resources</li>
                                <li><strong>Marketing</strong>: Archive campaign landing pages and competitor websites</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Convert HTML to PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Upload Your HTML File</strong>: Click the upload area or drag and drop your .html or .htm file. Our converter accepts standard HTML files with inline CSS, external stylesheet references, and embedded images (using base64 encoding or relative paths).
                            </li>
                            <li>
                                <strong>Preview the Render</strong>: Our engine renders the HTML exactly as a browser would, applying CSS styles and displaying images. Check the preview to ensure everything looks correct.
                            </li>
                            <li>
                                <strong>Adjust Settings (Optional)</strong>: Configure page size (A4, Letter, Legal), orientation (portrait or landscape), and margins to suit your needs.
                            </li>
                            <li>
                                <strong>Convert to PDF</strong>: Click the convert button. The HTML is rendered and converted to PDF entirely in your browser—no server upload required.
                            </li>
                            <li>
                                <strong>Download Your PDF</strong>: Save the generated PDF file. It's ready for sharing, printing, or archiving.
                            </li>
                        </ol>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2 flex items-center gap-2">
                                <Clock size={20} /> Conversion Speed
                            </h4>
                            <p className="text-yellow-800 dark:text-yellow-300">
                                Simple HTML pages convert in under 2 seconds. Complex pages with many images or intricate CSS may take 5-10 seconds depending on your device's processing power.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "features",
                title: "HTML to PDF Conversion Features",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <Layout size={20} className="text-blue-500" /> Full CSS Support
                                </h4>
                                <p className="mb-2">Our converter supports modern CSS including:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Flexbox and Grid layouts</li>
                                    <li>Custom fonts (Google Fonts, web fonts)</li>
                                    <li>CSS variables and calculations</li>
                                    <li>Media queries (print stylesheet support)</li>
                                    <li>Gradients, shadows, and borders</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Image Handling</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Embedded base64 images are fully supported</li>
                                    <li>SVG graphics render correctly</li>
                                    <li>Background images from CSS are captured</li>
                                    <li>External images (if accessible) are fetched and embedded</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Page Configuration</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li><strong>Page sizes</strong>: A4, Letter, Legal, Tabloid, custom dimensions</li>
                                    <li><strong>Orientation</strong>: Portrait or Landscape</li>
                                    <li><strong>Margins</strong>: Adjustable top, bottom, left, right margins</li>
                                    <li><strong>Scale</strong>: Fit content to page width</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Hyperlink Preservation</h4>
                                <p className="text-sm">
                                    Links in your HTML remain clickable in the PDF. Both external URLs and anchor links are preserved, making the PDF interactive and navigable.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy & Security: Browser-Based Processing",
                content: (
                    <>
                        <p className="mb-4">
                            Our HTML to PDF converter processes everything locally in your browser. This is crucial for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>HTML files containing sensitive business information</li>
                            <li>Internal documentation or company templates</li>
                            <li>Financial reports or invoices</li>
                            <li>Personal correspondence or private web content</li>
                        </ul>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border border-red-200 bg-red-50 dark:bg-red-900/20 rounded-xl">
                                <h4 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                    <Lock size={20} /> 100% Local Processing
                                </h4>
                                <p className="text-sm">
                                    Your HTML files are rendered and converted entirely in your browser using WebAssembly. They <strong>never leave your device</strong>.
                                </p>
                            </div>
                            <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <h4 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                    <Shield size={20} /> No Data Collection
                                </h4>
                                <p className="text-sm">
                                    We don't see, store, or analyze your content. Zero data collection means complete privacy for confidential documents.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "alternatives",
                title: "Alternative Methods to Convert HTML to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            There are several ways to save HTML as PDF. Here's how our tool compares:
                        </p>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Browser Print to PDF</h4>
                                <p className="text-sm mb-2">In Chrome, Firefox, or Edge: Press <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Ctrl+P</code> (or <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Cmd+P</code> on Mac) and select "Save as PDF"</p>
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                    <strong>Pros</strong>: Works for any webpage. <strong>Cons</strong>: Includes browser headers/footers, limited formatting control, requires opening page in browser first.
                                </p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Command Line Tools (wkhtmltopdf, Puppeteer)</h4>
                                <code className="block bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-sm mb-2">
                                    wkhtmltopdf input.html output.pdf
                                </code>
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                    <strong>Pros</strong>: Good for automation and batch processing. <strong>Cons</strong>: Requires installation, technical knowledge.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Online URL-to-PDF Services</h4>
                                <p className="text-sm mb-2">Services that convert URLs directly to PDF.</p>
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                    <strong>Pros</strong>: Convenient for live webpages. <strong>Cons</strong>: Privacy concerns (content is sent to servers), may not work for authenticated pages.
                                </p>
                            </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mt-6">
                            <h4 className="font-bold text-red-900 dark:text-red-400 mb-2">Why Use Our Tool?</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 dark:text-red-300">
                                <li>Privacy-first: Files stay on your device</li>
                                <li>No software installation needed</li>
                                <li>Works on any device with a browser</li>
                                <li>Free with no usage limits</li>
                                <li>Clean output without browser artifacts</li>
                            </ul>
                        </div>
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
                                <h4 className="font-bold text-lg mb-2 text-orange-900 dark:text-orange-400">Problem: CSS styles not appearing in PDF</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: External stylesheets or CSS files not loading.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Inline your CSS within <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;style&gt;</code> tags in the HTML file</li>
                                    <li>Ensure CSS file paths are correct relative to the HTML file</li>
                                    <li>Use a print stylesheet: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@media print</code></li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                <h4 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-400">Problem: Images not appearing</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: External image URLs can't be fetched or paths are broken.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Convert images to base64 and embed directly in HTML</li>
                                    <li>Ensure image paths are correct relative to HTML file location</li>
                                    <li>For external images, check that URLs are accessible</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-400">Problem: Content is cut off or overflowing</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Page size doesn't match content dimensions.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Use print-specific CSS: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">page-break-before</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">page-break-after</code></li>
                                    <li>Set explicit widths to prevent overflow</li>
                                    <li>Choose landscape orientation for wide content</li>
                                    <li>Adjust margins if content is being clipped</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-2 text-purple-900 dark:text-purple-400">Problem: Fonts look different in PDF</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Custom fonts not loading properly.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Use Google Fonts with embedded <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;link&gt;</code> tags</li>
                                    <li>Provide fallback fonts in CSS: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-family: 'Open Sans', Arial, sans-serif</code></li>
                                    <li>Use web-safe fonts for maximum compatibility</li>
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
                            This guide covers: <strong>HTML to PDF converter</strong>, <strong>convert HTML to PDF online</strong>, <strong>save web page as PDF</strong>, <strong>HTML to PDF free</strong>, <strong>convert webpage to PDF</strong>, <strong>HTML file to PDF</strong>, <strong>save HTML as PDF</strong>, <strong>web page to PDF converter</strong>, <strong>HTML to PDF without upload</strong>, <strong>browser-based PDF converter</strong>, <strong>HTML to PDF with CSS</strong>, <strong>convert HTML email to PDF</strong>, <strong>HTML template to PDF</strong>, <strong>print HTML to PDF</strong>, <strong>HTML to PDF online free no sign up</strong>, and <strong>secure HTML converter Canada</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it free to convert HTML to PDF?",
                a: "Yes! Our HTML to PDF converter is 100% free with no hidden costs, usage limits, or watermarks. Convert as many HTML files as you need without restrictions."
            },
            {
                q: "Can I convert a URL/webpage directly to PDF?",
                a: "Currently, our tool accepts HTML file uploads (.html, .htm). For live URLs, you can: 1) Save the webpage as HTML first (Ctrl+S in browser), then upload that file, or 2) Use your browser's Print to PDF feature (Ctrl+P → Save as PDF). We focus on file uploads to maintain complete privacy—URL conversion would require sending data to servers."
            },
            {
                q: "Are my HTML files uploaded to your servers?",
                a: "No. All conversion happens locally in your browser using WebAssembly. Your HTML files never leave your device—they're processed entirely on your computer, ensuring complete privacy for confidential content."
            },
            {
                q: "Does it support CSS styling?",
                a: "Yes! Our converter renders HTML with full CSS support including Flexbox, Grid, custom fonts, gradients, shadows, and media queries. For best results, inline your CSS or ensure stylesheet paths are correct relative to your HTML file."
            },
            {
                q: "Will images in my HTML appear in the PDF?",
                a: "Yes, images are supported. For best results: 1) Use base64-encoded images embedded in the HTML, 2) Ensure image file paths are correct relative to the HTML file, 3) For external images, verify the URLs are accessible. SVG graphics also render correctly."
            },
            {
                q: "Can I set custom page sizes?",
                a: "Yes, you can choose from standard sizes (A4, Letter, Legal) or set custom dimensions. You can also select portrait or landscape orientation and adjust margins to suit your needs."
            },
            {
                q: "Do links remain clickable in the PDF?",
                a: "Yes! Hyperlinks in your HTML are preserved in the PDF. Both external URLs and internal anchor links remain clickable, making the PDF interactive and navigable."
            },
            {
                q: "Can I convert HTML with JavaScript?",
                a: "Our converter renders static HTML and CSS. Dynamic content generated by JavaScript at runtime may not be captured. For JavaScript-heavy pages, first let the page fully load in a browser, then save as HTML and convert. Alternatively, use browser Developer Tools to capture the rendered DOM."
            },
            {
                q: "What about email HTML templates?",
                a: "Yes, HTML email templates convert perfectly. Since email templates typically use inline CSS and table layouts for compatibility, they render reliably. This is great for archiving email designs or creating PDF versions of newsletters."
            },
            {
                q: "Can I convert multiple HTML files at once?",
                a: "Currently, the tool processes one file at a time. You can quickly convert multiple files in succession without refreshing the page. For batch conversion of many files, command-line tools like wkhtmltopdf or Puppeteer are more suitable."
            },
            {
                q: "Why do fonts look different in my PDF?",
                a: "This happens when custom fonts aren't loading properly. To fix: 1) Use Google Fonts with embedded link tags, 2) Specify fallback fonts in CSS, 3) For maximum compatibility, use web-safe fonts like Arial, Georgia, or Times New Roman."
            },
            {
                q: "How do I prevent content from being cut off between pages?",
                a: "Use CSS page break properties: 'page-break-before: always' to start a new page, 'page-break-inside: avoid' to keep an element on one page. Also ensure fixed widths don't exceed page dimensions after margins are applied."
            }
        ],

        breadcrumb: {
            home: "Home",
            guides: "Guides"
        }
    },
    fr: {
        seo: {
            title: "Convertir HTML en PDF gratuit en ligne | Enregistrer pages web en PDF | pdfcanada.ca",
            desc: `Convertissez des fichiers HTML et des pages web en PDF gratuitement. Notre guide ${CURRENT_YEAR} vous montre comment enregistrer des documents HTML en PDF en toute sécurité.`
        },
        h1: "Comment convertir HTML en PDF gratuitement en ligne",
        subtitle: "Le guide complet pour enregistrer des pages web et des fichiers HTML en documents PDF professionnels.",

        intro: (
            <>
                Besoin d'enregistrer une <strong>page web en PDF</strong> ou de convertir un <strong>fichier HTML en PDF</strong> pour la lecture hors ligne, l'impression ou l'archivage? Notre <strong>convertisseur HTML en PDF gratuit</strong> rend votre HTML exactement comme un navigateur le ferait, puis l'enregistre en PDF.
            </>
        ),

        sections: [
            {
                id: "what-is-html",
                title: "Qu'est-ce que HTML et pourquoi convertir en PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>HTML</strong> est le langage standard pour créer des pages web. Bien qu'il soit parfait pour afficher du contenu dans les navigateurs, le PDF est souvent préférable pour l'accès hors ligne, l'archivage permanent et l'impression professionnelle.
                        </p>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape: Convertir HTML en PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Téléchargez votre fichier HTML</strong>: Cliquez sur la zone de téléchargement ou glissez-déposez votre fichier .html.</li>
                            <li><strong>Aperçu du rendu</strong>: Vérifiez que tout s'affiche correctement.</li>
                            <li><strong>Configurez les paramètres</strong>: Choisissez la taille de page, l'orientation et les marges.</li>
                            <li><strong>Convertir</strong>: Le HTML est converti en PDF dans votre navigateur.</li>
                            <li><strong>Télécharger</strong>: Enregistrez votre PDF.</li>
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
                            Notre convertisseur traite tout localement dans votre navigateur. Vos fichiers HTML <strong>ne quittent jamais votre appareil</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit de convertir HTML en PDF?",
                a: "Oui! Notre convertisseur est 100% gratuit sans coûts cachés ni limites."
            },
            {
                q: "Puis-je convertir une URL directement?",
                a: "Actuellement, notre outil accepte les fichiers HTML. Pour les URL, enregistrez d'abord la page en HTML (Ctrl+S), puis téléchargez ce fichier."
            },
            {
                q: "Mes fichiers sont-ils téléchargés sur vos serveurs?",
                a: "Non. Toute la conversion se fait localement dans votre navigateur."
            },
            {
                q: "Le CSS est-il supporté?",
                a: "Oui! Notre convertisseur supporte CSS complet incluant Flexbox, Grid et polices personnalisées."
            }
        ],

        breadcrumb: {
            home: "Accueil",
            guides: "Guides"
        }
    },
    pt: {
        seo: {
            title: "Converter HTML para PDF grátis online | Salvar páginas web como PDF | pdfcanada.ca",
            desc: `Converta arquivos HTML e páginas web para PDF gratuitamente. Nosso guia ${CURRENT_YEAR} mostra como salvar documentos HTML como PDFs com segurança.`
        },
        h1: "Como converter HTML para PDF gratuitamente online",
        subtitle: "O guia completo para salvar páginas web e arquivos HTML como documentos PDF profissionais.",

        intro: (
            <>
                Precisa salvar uma <strong>página web como PDF</strong> ou converter um <strong>arquivo HTML para PDF</strong> para leitura offline, impressão ou arquivamento? Nosso <strong>conversor HTML para PDF gratuito</strong> renderiza seu HTML exatamente como um navegador faria e salva como PDF.
            </>
        ),

        sections: [
            {
                id: "what-is-html",
                title: "O que é HTML e por que converter para PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>HTML</strong> é a linguagem padrão para criar páginas web. Embora seja perfeito para exibir conteúdo em navegadores, o PDF é frequentemente preferível para acesso offline, arquivamento permanente e impressão profissional.
                        </p>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a passo: Converter HTML para PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Envie seu arquivo HTML</strong>: Clique na área de upload ou arraste e solte seu arquivo .html.</li>
                            <li><strong>Visualize a renderização</strong>: Verifique se tudo aparece corretamente.</li>
                            <li><strong>Configure as opções</strong>: Escolha tamanho da página, orientação e margens.</li>
                            <li><strong>Converter</strong>: O HTML é convertido para PDF no seu navegador.</li>
                            <li><strong>Baixar</strong>: Salve seu PDF.</li>
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
                            Nosso conversor processa tudo localmente no seu navegador. Seus arquivos HTML <strong>nunca saem do seu dispositivo</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "É grátis converter HTML para PDF?",
                a: "Sim! Nosso conversor é 100% gratuito sem custos ocultos ou limites."
            },
            {
                q: "Posso converter uma URL diretamente?",
                a: "Atualmente, nossa ferramenta aceita arquivos HTML. Para URLs, primeiro salve a página como HTML (Ctrl+S), depois envie esse arquivo."
            },
            {
                q: "Meus arquivos são enviados para seus servidores?",
                a: "Não. Toda a conversão acontece localmente no seu navegador."
            }
        ],

        breadcrumb: {
            home: "Início",
            guides: "Guias"
        }
    }
});

export const HtmlToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang)[lang] || getGuideContent(lang).en;
    const slug = 'html-to-pdf';

    return (
        <>
            <SEO
                title={content.seo.title}
                description={content.seo.desc}
                canonicalPath={`/${lang}/${slug}-guide`}
                lang={lang}
            />
            <PageLayout title={content.h1} subtitle={content.subtitle} icon={<Code size={32} />}>
                <article className="max-w-4xl mx-auto px-4 py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        <Link href={`/${lang}`} className="hover:text-canada-red">{content.breadcrumb.home}</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/guides`} className="hover:text-canada-red">{content.breadcrumb.guides}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 dark:text-white">HTML to PDF</span>
                    </nav>

                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-canada-red/10 rounded-2xl">
                                <Code className="w-8 h-8 text-canada-red" />
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
                        question={lang === 'fr' ? "Comment convertir HTML en PDF?" : (lang === 'pt' ? "Como converter HTML para PDF?" : "How do I convert HTML to PDF?")}
                        answer={lang === 'fr'
                            ? "Téléchargez votre fichier .html, notre outil le rend et le convertit en PDF dans votre navigateur. Aucun téléchargement serveur requis."
                            : (lang === 'pt'
                                ? "Envie seu arquivo .html, nossa ferramenta o renderiza e converte para PDF no seu navegador. Sem upload para servidor."
                                : "Upload your .html file, our tool renders it and converts to PDF right in your browser. No server upload required."
                            )
                        }
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier HTML", "Aperçu du rendu", "Cliquez sur Convertir", "Téléchargez le PDF"]
                            : (lang === 'pt'
                                ? ["Envie seu arquivo HTML", "Visualize a renderização", "Clique em Converter", "Baixe o PDF"]
                                : ["Upload your HTML file", "Preview the render", "Click Convert", "Download the PDF"]
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

                    {/* Also See */}
                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/word-to-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Word vers PDF' : (lang === 'pt' ? 'Guia Word para PDF' : 'Word to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/pdf-to-word-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Word' : (lang === 'pt' ? 'Guia PDF para Word' : 'PDF to Word Guide')}
                            </Link>
                            <Link href={`/${lang}/compress-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/pages-to-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Pages vers PDF' : (lang === 'pt' ? 'Guia Pages para PDF' : 'Pages to PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    {/* Related Tools */}
                    <RelatedTools
                        lang={lang}
                        currentPath={`/${lang}/${slug}-guide`}
                        category="convert"
                    />
                </article>
            </PageLayout>
        </>
    );
};
