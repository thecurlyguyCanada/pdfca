'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, Globe, Lock, Clock, ArrowRight, FileType, Monitor, Smartphone } from 'lucide-react';
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
            title: "Convert ODT to PDF Online Free | LibreOffice to PDF Guide | pdfcanada.ca",
            desc: `Convert OpenDocument Text (.odt) files to PDF for free. Our ${CURRENT_YEAR} guide shows you how to convert LibreOffice and OpenOffice documents securely without uploading to servers.`
        },
        h1: "How to Convert ODT to PDF Online for Free",
        subtitle: "The complete guide to converting OpenDocument Text files to universally compatible PDF format.",

        intro: (
            <>
                Need to share a <strong>LibreOffice Writer</strong> or <strong>OpenOffice document</strong> with someone who doesn't have these applications installed? Converting <strong>ODT to PDF</strong> is the solution. Whether you're a student submitting assignments, a business professional sharing contracts, or a government employee distributing forms, our <strong>free ODT to PDF converter</strong> ensures your open-source documents are viewable on any device without requiring special software.
            </>
        ),

        sections: [
            {
                id: "what-is-odt",
                title: "What is an ODT File?",
                content: (
                    <>
                        <p className="mb-4">
                            An <strong>ODT file</strong> (OpenDocument Text) is a word processing document format created by the <strong>OASIS open standards consortium</strong>. It's the default format for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>LibreOffice Writer</strong>: The most popular free word processor</li>
                            <li><strong>Apache OpenOffice Writer</strong>: The original open-source office suite</li>
                            <li><strong>Google Docs</strong>: Can export documents as ODT</li>
                            <li><strong>Microsoft Word</strong>: Can open and save ODT files (with some compatibility issues)</li>
                            <li><strong>Calligra Words</strong>: KDE's word processor for Linux</li>
                        </ul>
                        <p className="mb-4">
                            The ODT format is part of the <strong>OpenDocument Format (ODF)</strong> standard, which is an ISO-certified international standard (ISO/IEC 26300). Many governments, including parts of the Canadian federal government, have adopted ODF for document interchange to ensure long-term accessibility and vendor neutrality.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-4">
                            <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                                <FileType size={20} /> ODT vs DOCX
                            </h4>
                            <p className="text-blue-800 dark:text-blue-300">
                                While both are modern document formats, ODT is an open standard (free to implement without licensing fees), while DOCX is Microsoft's proprietary format. ODT files are smaller and more future-proof, but DOCX has better compatibility with Microsoft Office features like macros and advanced formatting.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Why Convert ODT to PDF?",
                content: (
                    <>
                        <p className="mb-6">
                            While ODT is a great format for editing documents, PDF is the universal standard for sharing final versions. Here's why <strong>converting ODT to PDF</strong> is essential:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400 flex items-center gap-2">
                                    <Globe size={20} /> Universal Compatibility
                                </h4>
                                <p className="text-sm">
                                    PDFs can be opened on any device—Windows, Mac, Linux, iOS, Android—without needing LibreOffice or OpenOffice installed. Every modern web browser can display PDFs natively.
                                </p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400 flex items-center gap-2">
                                    <Lock size={20} /> Document Integrity
                                </h4>
                                <p className="text-sm">
                                    PDF preserves your exact formatting, fonts, and layout. Unlike ODT files that may render differently in various applications, PDFs look identical everywhere.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-400 flex items-center gap-2">
                                    <Shield size={20} /> Prevent Accidental Edits
                                </h4>
                                <p className="text-sm">
                                    When you share an ODT file, recipients can easily modify the content. PDF protects your document from unintended changes—perfect for contracts, official letters, and final reports.
                                </p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-400 flex items-center gap-2">
                                    <FileText size={20} /> Professional Appearance
                                </h4>
                                <p className="text-sm">
                                    Sending a PDF signals professionalism. Job applications, invoices, proposals, and official correspondence are expected in PDF format in most business contexts.
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-4">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2">Common Use Cases</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-800 dark:text-yellow-300">
                                <li>Submitting assignments to professors or online portals that require PDF</li>
                                <li>Sharing business proposals with clients who use Microsoft Office</li>
                                <li>Archiving documents for long-term storage</li>
                                <li>Printing documents with guaranteed layout consistency</li>
                                <li>Uploading documents to government portals that only accept PDF</li>
                                <li>Sharing resumes and cover letters with employers</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Convert ODT to PDF Online",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Upload Your ODT File</strong>: Click the upload area or drag and drop your .odt document. Our converter accepts files from LibreOffice Writer, Apache OpenOffice Writer, and any application that exports to ODT format. The file loads instantly in your browser—no server upload required.
                            </li>
                            <li>
                                <strong>Preview Your Document</strong>: Our tool displays a preview of your document so you can verify the content before conversion. Check that all text, images, tables, and formatting appear correctly.
                            </li>
                            <li>
                                <strong>Click Convert</strong>: Press the conversion button to transform your ODT to PDF. The process happens entirely in your browser using advanced WebAssembly technology—your document never leaves your device.
                            </li>
                            <li>
                                <strong>Download Your PDF</strong>: Once conversion is complete (typically under 3 seconds), click the download button to save your new PDF file. The original ODT remains unchanged.
                            </li>
                        </ol>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-6">
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <Clock size={20} /> Conversion Time
                            </h4>
                            <p className="text-sm">
                                Most ODT files convert in under 3 seconds. Larger documents with many images may take 5-10 seconds. Since processing happens locally on your device, conversion speed depends on your computer's performance rather than internet connection speed.
                            </p>
                        </div>
                        <p className="mb-4">
                            <strong>Pro tip</strong>: If you're converting multiple ODT files, you can process them one after another without refreshing the page. Each file downloads independently.
                        </p>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy & Security: Your Documents Stay Private",
                content: (
                    <>
                        <p className="mb-4">
                            Unlike most online converters that upload your files to remote servers, our <strong>ODT to PDF converter</strong> processes everything locally in your browser. This is crucial when working with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Confidential business documents</li>
                            <li>Personal financial records</li>
                            <li>Legal contracts and agreements</li>
                            <li>Academic papers before publication</li>
                            <li>Government forms with sensitive information</li>
                        </ul>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border border-red-200 bg-red-50 dark:bg-red-900/20 rounded-xl">
                                <h4 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                    <Lock size={20} /> Zero Server Upload
                                </h4>
                                <p className="text-sm">
                                    Your ODT files are processed entirely in your browser using WebAssembly. They <strong>never leave your device</strong>—not uploaded to our servers, not stored in any cloud, not accessible to anyone but you.
                                </p>
                            </div>
                            <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <h4 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                    <Shield size={20} /> PIPEDA Compliant
                                </h4>
                                <p className="text-sm">
                                    As a Canadian service, we take privacy seriously. Local processing means <strong>zero data collection</strong>, zero retention, and zero risk of data breaches. Perfect for PIPEDA compliance.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-4">
                            <h4 className="font-bold mb-3">How We Compare to Other Converters</h4>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-300 dark:border-gray-600">
                                            <th className="text-left py-2 px-3">Feature</th>
                                            <th className="text-left py-2 px-3">Typical Cloud Converter</th>
                                            <th className="text-left py-2 px-3 bg-green-100 dark:bg-green-900/30">pdfcanada.ca</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-2 px-3 font-medium">File uploaded to server</td>
                                            <td className="py-2 px-3">✗ Yes</td>
                                            <td className="py-2 px-3 bg-green-50 dark:bg-green-900/20">✓ Never</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-2 px-3 font-medium">Data retention</td>
                                            <td className="py-2 px-3">✗ Hours to days</td>
                                            <td className="py-2 px-3 bg-green-50 dark:bg-green-900/20">✓ None (RAM only)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-2 px-3 font-medium">Works offline</td>
                                            <td className="py-2 px-3">✗ No</td>
                                            <td className="py-2 px-3 bg-green-50 dark:bg-green-900/20">✓ Yes (after load)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 font-medium">Account required</td>
                                            <td className="py-2 px-3">✗ Usually</td>
                                            <td className="py-2 px-3 bg-green-50 dark:bg-green-900/20">✓ No signup</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "alternatives",
                title: "Alternative Methods to Convert ODT to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            While our online tool is the fastest option, here are other ways to convert ODT files to PDF:
                        </p>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using LibreOffice Writer (Desktop)</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm">
                                    <li>Open your ODT file in LibreOffice Writer</li>
                                    <li>Go to <strong>File → Export as PDF</strong></li>
                                    <li>Configure PDF options (image quality, security settings)</li>
                                    <li>Click Export and choose save location</li>
                                </ol>
                                <p className="text-sm mt-2 italic text-gray-600 dark:text-gray-400">
                                    Best for: Users who already have LibreOffice installed and need advanced PDF options
                                </p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using Google Docs (Cloud)</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm">
                                    <li>Upload ODT file to Google Drive</li>
                                    <li>Open with Google Docs</li>
                                    <li>Go to <strong>File → Download → PDF Document</strong></li>
                                </ol>
                                <p className="text-sm mt-2 italic text-gray-600 dark:text-gray-400">
                                    Best for: Users without LibreOffice who have a Google account. Note: File is uploaded to Google servers.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using Command Line (Linux/Mac)</h4>
                                <code className="block bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-sm mb-2">
                                    libreoffice --headless --convert-to pdf document.odt
                                </code>
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                    Best for: Batch converting many files or automation scripts
                                </p>
                            </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mt-6">
                            <h4 className="font-bold text-red-900 dark:text-red-400 mb-2">Why Choose Our Online Tool?</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 dark:text-red-300">
                                <li>No software installation required</li>
                                <li>Works on any device with a browser</li>
                                <li>Faster than opening LibreOffice for a single conversion</li>
                                <li>Privacy-first: files never leave your device</li>
                                <li>Free with no limits or watermarks</li>
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
                                <h4 className="font-bold text-lg mb-2 text-orange-900 dark:text-orange-400">Problem: Fonts look different in the PDF</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: The ODT file uses fonts that aren't embedded in the document.</p>
                                <p className="text-sm font-medium mb-2"><strong>Solutions</strong>:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>In LibreOffice, embed fonts before saving: <strong>File → Properties → Fonts → Embed fonts in document</strong></li>
                                    <li>Use widely available fonts like Arial, Times New Roman, or Liberation fonts</li>
                                    <li>Convert on a computer that has the same fonts installed</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                <h4 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-400">Problem: Images are blurry or low quality</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Original images in the ODT were low resolution.</p>
                                <p className="text-sm font-medium mb-2"><strong>Solutions</strong>:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Use higher resolution images (at least 150 DPI for print, 72 DPI for screen)</li>
                                    <li>Check that images weren't compressed when inserted into LibreOffice</li>
                                    <li>Replace low-quality images with originals before converting</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-400">Problem: Page layout is different than expected</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Complex formatting or page size differences.</p>
                                <p className="text-sm font-medium mb-2"><strong>Solutions</strong>:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Verify page size in LibreOffice: <strong>Format → Page → Paper format</strong></li>
                                    <li>Check margins are set correctly</li>
                                    <li>Preview the document in LibreOffice's Print Preview before converting</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-2 text-purple-900 dark:text-purple-400">Problem: Hyperlinks don't work in the PDF</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Links weren't properly formatted in the ODT file.</p>
                                <p className="text-sm font-medium mb-2"><strong>Solutions</strong>:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Ensure links are inserted as hyperlinks (not just blue text)</li>
                                    <li>In LibreOffice: Select text → <strong>Insert → Hyperlink</strong></li>
                                    <li>Test links in the ODT before converting</li>
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
                            This guide covers: <strong>ODT to PDF converter</strong>, <strong>convert ODT to PDF online</strong>, <strong>LibreOffice to PDF</strong>, <strong>OpenOffice to PDF converter</strong>, <strong>free ODT converter</strong>, <strong>ODT to PDF free no sign up</strong>, <strong>OpenDocument to PDF</strong>, <strong>convert odt to pdf without LibreOffice</strong>, <strong>ODT to PDF online free</strong>, <strong>LibreOffice Writer export PDF</strong>, <strong>ODF to PDF converter</strong>, <strong>secure ODT converter</strong>, <strong>private document converter</strong>, <strong>open source document to PDF</strong>, <strong>convert writer document to PDF</strong>, and <strong>ODT file converter Canada</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it free to convert ODT to PDF on this site?",
                a: "Yes! Our ODT to PDF converter is 100% free with no hidden costs, usage limits, or watermarks. Unlike other online converters that restrict you after a few conversions or require paid subscriptions, pdfcanada.ca offers unlimited free conversions forever."
            },
            {
                q: "Do I need LibreOffice or OpenOffice installed?",
                a: "No. Our online converter handles the ODT to PDF conversion entirely in your web browser. You don't need any software installed—just upload your .odt file and download the PDF. This makes it perfect for computers where you can't install software, like work computers or public terminals."
            },
            {
                q: "Are my files uploaded to your servers?",
                a: "No. All conversion happens locally in your browser using WebAssembly technology. Your ODT files never leave your device—they're not uploaded to our servers, not stored anywhere online, and not accessible to anyone but you. This ensures complete privacy for confidential documents."
            },
            {
                q: "Will the formatting be preserved in the PDF?",
                a: "Yes, our converter maintains your document's formatting including fonts, images, tables, page layout, headers, footers, and paragraph styles. For best results, use common fonts or embed fonts in your ODT file before converting."
            },
            {
                q: "Can I convert multiple ODT files at once?",
                a: "Currently, our tool processes one file at a time. However, you can quickly convert multiple files in succession without refreshing the page. Each converted PDF downloads independently. For batch conversion of many files, consider using LibreOffice's command-line converter."
            },
            {
                q: "What's the maximum file size I can convert?",
                a: "Since processing happens locally in your browser, the limit depends on your device's available memory. Most computers can handle ODT files up to 50-100 MB without issues. For very large documents with many images, ensure you have sufficient RAM available."
            },
            {
                q: "Will hyperlinks in my ODT document work in the PDF?",
                a: "Yes, hyperlinks are preserved during conversion. Both external URLs and internal document links (like table of contents entries) will remain clickable in the resulting PDF. Ensure links were properly inserted using LibreOffice's Insert → Hyperlink function."
            },
            {
                q: "Can I convert ODT files on my phone or tablet?",
                a: "Absolutely! Our converter works on any device with a modern web browser—including iPhone, iPad, Android phones and tablets. The responsive interface adapts to your screen size, making mobile conversion seamless."
            },
            {
                q: "Why do my fonts look different in the PDF?",
                a: "This typically happens when your ODT uses fonts that aren't standard system fonts. To fix this: 1) Embed fonts in LibreOffice (File → Properties → Fonts → Embed fonts), 2) Use widely available fonts like Arial or Liberation fonts, or 3) Convert on a device that has the same fonts installed."
            },
            {
                q: "Can I password-protect the PDF after conversion?",
                a: "The ODT to PDF converter creates standard, unprotected PDFs. To add password protection, use our separate PDF password protection tool after conversion, or set security options when converting through LibreOffice Desktop."
            },
            {
                q: "Does the converter support ODT files with complex tables?",
                a: "Yes, tables with merged cells, borders, colors, and nested content are preserved during conversion. Very complex spreadsheet-style tables may have minor formatting differences—preview the PDF to verify layout."
            },
            {
                q: "What about mathematical equations and formulas?",
                a: "Mathematical content created with LibreOffice Math (equations, formulas) is converted to the PDF. The equations appear as images, so they'll look correct but won't be editable. For best results, ensure equations render properly in LibreOffice before converting."
            }
        ],

        breadcrumb: {
            home: "Home",
            guides: "Guides"
        }
    },
    fr: {
        seo: {
            title: "Convertir ODT en PDF gratuit en ligne | Guide LibreOffice vers PDF | pdfcanada.ca",
            desc: `Convertissez vos fichiers OpenDocument Text (.odt) en PDF gratuitement. Notre guide ${CURRENT_YEAR} vous montre comment convertir des documents LibreOffice et OpenOffice en toute sécurité sans téléchargement vers des serveurs.`
        },
        h1: "Comment convertir ODT en PDF gratuitement en ligne",
        subtitle: "Le guide complet pour convertir des fichiers OpenDocument Text en format PDF universellement compatible.",

        intro: (
            <>
                Besoin de partager un document <strong>LibreOffice Writer</strong> ou <strong>OpenOffice</strong> avec quelqu'un qui n'a pas ces applications installées? La conversion <strong>ODT en PDF</strong> est la solution. Que vous soyez étudiant, professionnel ou employé gouvernemental, notre <strong>convertisseur ODT en PDF gratuit</strong> garantit que vos documents open-source sont visibles sur tout appareil.
            </>
        ),

        sections: [
            {
                id: "what-is-odt",
                title: "Qu'est-ce qu'un fichier ODT?",
                content: (
                    <>
                        <p className="mb-4">
                            Un fichier <strong>ODT</strong> (OpenDocument Text) est un format de document de traitement de texte créé par le consortium OASIS. C'est le format par défaut pour <strong>LibreOffice Writer</strong> et <strong>Apache OpenOffice Writer</strong>.
                        </p>
                        <p className="mb-4">
                            Le format ODT fait partie de la norme internationale ISO/IEC 26300. De nombreux gouvernements, y compris des parties du gouvernement fédéral canadien, ont adopté l'ODF pour assurer l'accessibilité à long terme.
                        </p>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Pourquoi convertir ODT en PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Compatibilité universelle</h4>
                                <p className="text-sm">Les PDF peuvent être ouverts sur n'importe quel appareil sans nécessiter LibreOffice ou OpenOffice.</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Intégrité du document</h4>
                                <p className="text-sm">Le PDF préserve exactement votre mise en forme, vos polices et votre mise en page.</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-400">Prévenir les modifications</h4>
                                <p className="text-sm">Le PDF protège votre document contre les modifications non intentionnelles.</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-400">Apparence professionnelle</h4>
                                <p className="text-sm">L'envoi d'un PDF signale le professionnalisme dans les contextes commerciaux.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape: Convertir ODT en PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Téléchargez votre fichier ODT</strong>: Cliquez sur la zone de téléchargement ou glissez-déposez votre document .odt.</li>
                            <li><strong>Aperçu</strong>: Vérifiez que tout le contenu s'affiche correctement.</li>
                            <li><strong>Convertir</strong>: Appuyez sur le bouton de conversion. Le processus se déroule entièrement dans votre navigateur.</li>
                            <li><strong>Télécharger</strong>: Enregistrez votre nouveau fichier PDF.</li>
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
                            Notre convertisseur traite tout localement dans votre navigateur. Vos fichiers <strong>ne quittent jamais votre appareil</strong>—ils ne sont pas téléchargés sur nos serveurs, pas stockés dans le cloud.
                        </p>
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                            <h4 className="font-bold text-green-800 dark:text-green-400 mb-3">Conforme LPRPDE</h4>
                            <p className="text-sm">Le traitement local signifie zéro collecte de données, zéro rétention et zéro risque de violation.</p>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit de convertir ODT en PDF?",
                a: "Oui! Notre convertisseur est 100% gratuit sans coûts cachés, limites ou filigranes."
            },
            {
                q: "Ai-je besoin de LibreOffice installé?",
                a: "Non. Notre convertisseur en ligne gère la conversion entièrement dans votre navigateur web."
            },
            {
                q: "Mes fichiers sont-ils téléchargés sur vos serveurs?",
                a: "Non. Toute la conversion se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil."
            },
            {
                q: "La mise en forme sera-t-elle préservée?",
                a: "Oui, notre convertisseur maintient la mise en forme de votre document, y compris les polices, images, tableaux et mise en page."
            }
        ],

        breadcrumb: {
            home: "Accueil",
            guides: "Guides"
        }
    },
    pt: {
        seo: {
            title: "Converter ODT para PDF grátis online | Guia LibreOffice para PDF | pdfcanada.ca",
            desc: `Converta arquivos OpenDocument Text (.odt) para PDF gratuitamente. Nosso guia ${CURRENT_YEAR} mostra como converter documentos LibreOffice e OpenOffice com segurança.`
        },
        h1: "Como converter ODT para PDF gratuitamente online",
        subtitle: "O guia completo para converter arquivos OpenDocument Text para formato PDF universalmente compatível.",

        intro: (
            <>
                Precisa compartilhar um documento do <strong>LibreOffice Writer</strong> ou <strong>OpenOffice</strong> com alguém que não tem esses aplicativos instalados? A conversão de <strong>ODT para PDF</strong> é a solução. Nosso <strong>conversor ODT para PDF gratuito</strong> garante que seus documentos open-source sejam visíveis em qualquer dispositivo.
            </>
        ),

        sections: [
            {
                id: "what-is-odt",
                title: "O que é um arquivo ODT?",
                content: (
                    <>
                        <p className="mb-4">
                            Um arquivo <strong>ODT</strong> (OpenDocument Text) é um formato de documento de processamento de texto criado pelo consórcio OASIS. É o formato padrão para <strong>LibreOffice Writer</strong> e <strong>Apache OpenOffice Writer</strong>.
                        </p>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Por que converter ODT para PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Compatibilidade universal</h4>
                                <p className="text-sm">PDFs podem ser abertos em qualquer dispositivo sem precisar de LibreOffice ou OpenOffice.</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Integridade do documento</h4>
                                <p className="text-sm">PDF preserva exatamente sua formatação, fontes e layout.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a passo: Converter ODT para PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Envie seu arquivo ODT</strong>: Clique na área de upload ou arraste e solte seu documento .odt.</li>
                            <li><strong>Visualizar</strong>: Verifique se todo o conteúdo aparece corretamente.</li>
                            <li><strong>Converter</strong>: Pressione o botão de conversão. O processo acontece inteiramente no seu navegador.</li>
                            <li><strong>Baixar</strong>: Salve seu novo arquivo PDF.</li>
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
                            Nosso conversor processa tudo localmente no seu navegador. Seus arquivos <strong>nunca saem do seu dispositivo</strong>—não são enviados para nossos servidores, não são armazenados em nenhuma nuvem.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "É grátis converter ODT para PDF?",
                a: "Sim! Nosso conversor é 100% gratuito sem custos ocultos, limites ou marcas d'água."
            },
            {
                q: "Preciso ter o LibreOffice instalado?",
                a: "Não. Nosso conversor online lida com a conversão inteiramente no seu navegador web."
            },
            {
                q: "Meus arquivos são enviados para seus servidores?",
                a: "Não. Toda a conversão acontece localmente no seu navegador. Seus arquivos nunca saem do seu dispositivo."
            }
        ],

        breadcrumb: {
            home: "Início",
            guides: "Guias"
        }
    }
});

export const OdtToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang)[lang] || getGuideContent(lang).en;
    const slug = 'odt-to-pdf';

    return (
        <>
            <SEO
                title={content.seo.title}
                description={content.seo.desc}
                canonicalPath={`/${lang}/${slug}-guide`}
                lang={lang}
            />
            <PageLayout title={content.h1} subtitle={content.subtitle} icon={<FileText size={32} />}>
                <article className="max-w-4xl mx-auto px-4 py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        <Link href={`/${lang}`} className="hover:text-canada-red">{content.breadcrumb.home}</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/guides`} className="hover:text-canada-red">{content.breadcrumb.guides}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 dark:text-white">ODT to PDF</span>
                    </nav>

                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-canada-red/10 rounded-2xl">
                                <FileText className="w-8 h-8 text-canada-red" />
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
                        question={lang === 'fr' ? "Comment convertir ODT en PDF?" : (lang === 'pt' ? "Como converter ODT para PDF?" : "How do I convert ODT to PDF?")}
                        answer={lang === 'fr'
                            ? "Téléchargez votre fichier .odt, notre outil le convertit instantanément en PDF dans votre navigateur. Aucun téléchargement serveur, aucune inscription requise."
                            : (lang === 'pt'
                                ? "Envie seu arquivo .odt, nossa ferramenta o converte instantaneamente para PDF no seu navegador. Sem upload para servidor, sem cadastro necessário."
                                : "Upload your .odt file, our tool instantly converts it to PDF right in your browser. No server upload, no signup required."
                            )
                        }
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier ODT", "Aperçu du document", "Cliquez sur Convertir", "Téléchargez le PDF"]
                            : (lang === 'pt'
                                ? ["Envie seu arquivo ODT", "Visualize o documento", "Clique em Converter", "Baixe o PDF"]
                                : ["Upload your ODT file", "Preview the document", "Click Convert", "Download the PDF"]
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
                        category="convert"
                    />
                </article>
            </PageLayout>
        </>
    );
};
