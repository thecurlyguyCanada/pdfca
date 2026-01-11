'use client';

import Link from 'next/link';
import React from 'react';
import { Scissors, Shield, Zap, HelpCircle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Crop PDF Pages ${CURRENT_YEAR} | Remove White Margins & Trim Documents | pdfcanada.ca`,
            desc: `Trim white space, remove margins, and crop PDF documents locally without uploads. Perfect for scanned documents, presentation slides, diagrams, blueprints, and ebooks. Auto-crop feature removes blank borders automatically. Free PDF cropping tool ${CURRENT_YEAR}.`
        },
        h1: `How to Crop PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "Trim the fat and focus on your content—100% private and Canadian.",

        intro: (
            <>
                Whether you need to <strong>remove white space from scanned documents</strong>, trim margins for printing, extract diagrams from technical manuals, or optimize ebooks for mobile devices, knowing <strong>how to crop PDF pages</strong> is essential. Most professional PDF editors like Adobe Acrobat charge expensive subscriptions ($15-30/month) for this basic feature. At pdfcanada.ca, cropping is completely free, processes locally on your device for maximum privacy, and requires no software installation or account signup.
            </>
        ),

        sections: [
            {
                id: "why-crop",
                title: "Why Crop PDF Documents?",
                content: (
                    <>
                        <p className="mb-4">
                            PDF cropping solves numerous real-world problems in document management, publishing, and archival workflows:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">1. Remove Excessive White Margins from Scanned Documents</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Scanner flatbeds and multifunction printers often capture the entire scan bed (8.5"×11" or A4), creating PDFs with huge white borders around the actual document. For double-sided scans, content may be offset to one side, leaving asymmetric margins that waste space when printed or viewed on tablets.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">2. Reduce File Size for Email and Web Publishing</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Removing white space reduces the physical page dimensions stored in the PDF. For image-based PDFs (scanned documents), smaller page dimensions mean smaller file sizes—critical when emailing documents with attachment limits (typically 10-25MB) or publishing to websites where load time matters.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-3">3. Extract Specific Regions from Technical Drawings and Maps</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Engineers, architects, and surveyors frequently need to isolate specific sections from large-format PDFs: a single floor plan from a multi-page architectural set, one circuit from an electrical schematic, or a specific region from a site survey map. Cropping creates focused documents for client review or construction teams.
                                </p>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3">4. Optimize Ebooks and Presentation Slides for Mobile Devices</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Academic PDFs, presentation slides, and technical manuals often have wide margins designed for 8.5"×11" printing. On smartphones and 6-7" tablets, these margins waste precious screen real estate. Cropping to content boundaries maximizes readability on mobile devices without requiring constant pinch-zooming.
                                </p>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                <h4 className="font-bold text-red-900 dark:text-red-300 mb-3">5. Standardize Page Sizes for Batch Printing</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    When merging PDFs from multiple sources (invoices, receipts, contracts), documents may have varying page sizes and margin configurations. Cropping to consistent dimensions ensures uniform printing without blank pages, misaligned content, or paper waste from oversized margins.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold text-slate-900 dark:text-slate-300 mb-3">6. Remove Scanner Artifacts and Border Noise</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Flatbed scanners often capture black borders, scan bed shadows, or edge artifacts along document edges. Cropping removes these visual defects, producing clean professional PDFs suitable for legal discovery, archival, or client presentation.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-it-works",
                title: "How PDF Cropping Actually Works (Technical Overview)",
                content: (
                    <>
                        <p className="mb-4">
                            Unlike image cropping (which deletes pixels), PDF cropping is <strong>non-destructive metadata editing</strong>. Understanding this distinction is crucial for preserving document quality and reverting changes if needed.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">The CropBox vs. MediaBox Distinction</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Every PDF page has multiple "bounding boxes" that define how it's displayed and printed:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>MediaBox</strong>: The physical page size (e.g., 8.5"×11"). This defines the canvas size.</li>
                                    <li><strong>CropBox</strong>: The visible region when viewing/printing. Cropping modifies this box.</li>
                                    <li><strong>BleedBox, TrimBox, ArtBox</strong>: Used by professional printers for commercial printing workflows.</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                                    When you crop a PDF, tools typically adjust the CropBox and optionally the MediaBox. The underlying content (text, images, vector graphics) remains unchanged—only the viewing window changes. This means cropping doesn't degrade quality the way image cropping does.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Auto-Crop vs. Manual Crop</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Modern PDF crop tools offer two approaches:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Auto-Crop</strong>: Analyzes page content to automatically detect and remove white margins. Algorithms scan for the bounding rectangle containing all non-white pixels, then apply uniform margins (e.g., 0.25" safety margin). Perfect for batch processing scanned documents.</li>
                                    <li><strong>Manual Crop</strong>: User defines exact crop rectangle by dragging handles or entering pixel/inch dimensions. Essential for extracting specific regions from diagrams or standardizing to exact page sizes (like 6"×9" for ebook publishing).</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "step-by-step",
                title: "Step-by-Step: Cropping Your PDF with pdfcanada.ca",
                content: (
                    <>
                        <p className="mb-4">
                            Our <strong>PDF Crop tool</strong> is designed for simplicity and privacy. All processing happens in your browser using WebAssembly—your files never touch our servers.
                        </p>

                        <div className="space-y-6 mb-6">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Step 1: Select Your PDF File</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Click "Select PDF" or drag-and-drop your document into the <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-medium">Crop PDF tool</Link>. Files are processed locally—no upload occurs. Works with scanned documents, ebooks, technical drawings, presentation slides, and any PDF format.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Step 2: Set Crop Margins</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Choose your cropping method:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Auto-Crop</strong>: Our algorithm detects content boundaries and applies a professional 0.5" safety margin automatically. Ideal for quickly removing scanner white space.</li>
                                    <li><strong>Custom Margins</strong>: Enter specific top/bottom/left/right margin values in inches or millimeters for precise control.</li>
                                    <li><strong>Visual Selector (Coming Soon)</strong>: Drag crop handles directly on the page preview to define custom regions.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Step 3: Preview and Download</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Review the cropped page preview to ensure correct dimensions. Click "Download Cropped PDF" to save your optimized document. The original file remains unchanged on your device—cropping creates a new file.
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                            <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Pro Tip: Batch Cropping Multiple Files</h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                If you have multiple PDFs with identical white margin issues (e.g., 50 scanned invoices from the same scanner), determine the optimal crop values for one document, then apply those exact values to all files sequentially. This ensures consistent formatting across your document set.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Common Cropping Scenarios & Best Practices",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Scanning Book Pages for Digital Library</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Challenge</strong>: Flatbed scanner captures book spine shadow, page edges, and 2-3" white margins on each side.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong>: Use auto-crop to detect text boundaries, then manually adjust if book page size varies. For bound books where left/right margins differ, crop each page individually or use page-specific crop values.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    Best Practice: Scan at 300 DPI, save as image PDF, crop to remove margins, then run OCR for searchable text.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Extracting Floor Plans from Architectural Blueprints</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Challenge</strong>: Multi-page architectural PDF contains site plan, elevations, sections, and floor plans. You need to extract just the second floor plan for contractor bidding.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong>: First, use a PDF split tool to extract that specific page. Then crop to the floor plan boundaries, removing title blocks, notes, and blank margins to create a focused 11"×17" or A3-sized sheet.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-3">Optimizing Academic PDFs for Kindle/Tablet Reading</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Challenge</strong>: Journal articles and textbook chapters have 1.5" margins designed for 8.5"×11" printing. On a 6" Kindle Paperwhite, content is tiny and requires constant zooming.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong>: Crop to text boundaries (typically 0.3" margins) to maximize content area. For two-column academic papers, consider cropping each column separately to create single-column flow.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    Advanced: After cropping, use a PDF compression tool to reduce image quality to 150 DPI (sufficient for e-readers), further reducing file size for faster page turns.
                                </p>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3">Standardizing Receipt Scans for Expense Reports</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Challenge</strong>: Receipts vary wildly in size: credit card slips are 2.25"×4", restaurant receipts are thermal rolls 3" wide, store receipts are 8.5" wide. Merged into a single expense PDF, pages are misaligned and waste paper when printing.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong>: Auto-crop each receipt to remove scanner white space, then use a "resize to fit" feature to standardize all pages to Letter size with content centered. This creates uniform expense reports for accounting.
                                </p>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                <h4 className="font-bold text-red-900 dark:text-red-300 mb-3">Removing Watermarks and Border Text (Ethical Considerations)</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Challenge</strong>: Downloaded PDF has a watermark or "DRAFT" text in the margin that you want to remove.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Ethical Boundary</strong>: Cropping can remove margin watermarks if they're outside the main content area. However, removing copyright notices, "CONFIDENTIAL" markings, or license watermarks may violate terms of use or copyright law. Only crop documents you have legal rights to modify.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    Note: Watermarks embedded within page content (not in margins) cannot be removed by cropping alone—you'd need redaction or image editing tools.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "quality",
                title: "Does Cropping Reduce PDF Quality?",
                content: (
                    <>
                        <p className="mb-4">
                            This is the most common question about PDF cropping, and the answer depends on what kind of cropping you're doing:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">✓ Non-Destructive Cropping (Most Common)</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Standard PDF cropping modifies the CropBox metadata—changing what portion of the page is visible—without altering underlying content. Text remains vector-quality searchable, images retain original resolution, and you can theoretically "un-crop" by resetting the CropBox to MediaBox dimensions. <strong>No quality loss occurs.</strong>
                                </p>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3">⚠ Destructive Cropping (Flattening/Rasterizing)</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Some tools offer a "flatten and crop" option that converts vector PDF pages to images (rasterization) before cropping. This permanently deletes content outside the crop area and converts text to pixels. Quality depends on rasterization DPI:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>150 DPI</strong>: Acceptable for e-readers but text looks slightly pixelated when zoomed</li>
                                    <li><strong>300 DPI</strong>: Standard for printing—indistinguishable from original to human eye</li>
                                    <li><strong>600 DPI</strong>: Professional printing quality, large file sizes</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Our Tool: Non-Destructive by Default</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    pdfcanada.ca's crop tool performs non-destructive metadata cropping. Your original text, images, and vector graphics remain at full quality. The cropped PDF is often <em>smaller</em> in file size (fewer pixels to render) without any visual degradation.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy & Security: Why Local Cropping Matters",
                content: (
                    <>
                        <p className="mb-4">
                            Most online PDF crop tools (CropPDF, Sejda, SmallPDF) require uploading your document to their servers for processing. This creates multiple security and privacy risks:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                <h4 className="font-bold text-red-900 dark:text-red-300 mb-3">1. Confidential Document Exposure</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    If you're cropping medical records, legal contracts, financial statements, or business plans, uploading to third-party servers exposes sensitive information. Even if services claim to delete files after processing, data breaches, government subpoenas, or employee access remain risks.
                                </p>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3">2. Metadata Mining for Advertising</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    "Free" online tools analyze uploaded documents to extract keywords, document types, and usage patterns for targeted advertising. Crop a real estate contract? Expect mortgage refinancing ads. Crop medical bills? Health insurance ads follow.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">✓ Our Solution: 100% Local Processing</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    pdfcanada.ca processes your PDF entirely in your browser using WebAssembly technology. This means:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>No Upload</strong>: Your file never leaves your device. No server receives, stores, or processes your document.</li>
                                    <li><strong>No Logs</strong>: We can't log filenames, content, or usage because we never see your files.</li>
                                    <li><strong>Instant Deletion</strong>: Close the browser tab and all data is immediately purged from RAM.</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                                    This local-first architecture is essential for legal professionals, healthcare workers, financial advisors, and anyone handling confidential documents.
                                </p>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Does cropping reduce PDF quality?",
                a: "No! PDF cropping is non-destructive—it changes the visible 'box' (CropBox metadata) without altering the underlying content. Text remains searchable at vector quality, images retain original resolution, and you could theoretically 'uncrop' by resetting the CropBox. Unlike image cropping (which deletes pixels), PDF cropping preserves 100% quality."
            },
            {
                q: "Can I crop specific pages only, or does it apply to all pages?",
                a: "Most tools (including ours currently) apply crop values to all pages uniformly. If you need to crop specific pages differently, first use a PDF split tool to separate those pages into individual files, crop each with appropriate values, then merge back together."
            },
            {
                q: "What's the difference between auto-crop and manual crop?",
                a: "Auto-crop analyzes page content to detect and remove white margins automatically—perfect for scanned documents with unknown margin sizes. Manual crop lets you specify exact top/bottom/left/right margins in inches or millimeters, giving precise control for standardizing page sizes or extracting specific regions."
            },
            {
                q: "Will cropping remove watermarks or headers/footers?",
                a: "Only if they're in the margin areas you're cropping away. Watermarks embedded within the main content area or headers/footers in the middle of pages cannot be removed by cropping—you'd need dedicated redaction or content removal tools for that."
            },
            {
                q: "Can I crop scanned PDFs and text PDFs?",
                a: "Yes, both! Cropping works on image-based PDFs (scans, photos converted to PDF) and text-based PDFs (Word exports, native PDFs). For scanned documents, cropping also reduces file size by eliminating white space pixels. For text PDFs, it simply adjusts the page dimensions."
            },
            {
                q: "Is cropping reversible if I crop too much?",
                a: "Not with our tool—once you download the cropped PDF, the crop is applied permanently. However, your original file remains unchanged on your device. We recommend keeping the original until you've verified the cropped version is correct. Advanced users can manually edit PDF metadata to adjust CropBox values later using tools like Adobe Acrobat Pro."
            },
            {
                q: "Why does my cropped PDF still have the same file size?",
                a: "If you're cropping a text-based PDF, file size may not decrease significantly because the underlying content (text, vector graphics) wasn't removed—only the visible page dimensions changed. For image-based PDFs (scans), cropping removes white space pixels and should reduce file size. To further reduce size, use a PDF compression tool after cropping."
            },
            {
                q: "Is it really free with no hidden charges?",
                a: "100% free, forever. No watermarks, no file size limits (within browser memory constraints, typically ~500MB), no subscription upsells, no account required. We're Canadian, polite, and believe PDF tools should be accessible to everyone."
            },
            {
                q: "Is my data safe when using your crop tool?",
                a: "Absolutely. Your PDF is processed entirely in your browser using WebAssembly—it never uploads to our servers. We can't see your files, log your activity, or access your content. When you close the browser tab, all data is immediately purged from RAM. This local-first approach is essential for confidential documents like medical records, legal contracts, or financial statements."
            }
        ],

        ctaTitle: "Ready to trim your PDF?",
        ctaButton: "Crop My PDF Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        faqHeading: "Frequently Asked Questions",
        quickAnswer: {
            question: "How do I crop a PDF for free?",
            answer: "Use pdfcanada.ca's PDF Crop tool. Upload your file, set crop margins, then download your cropped PDF. All processing happens locally in your browser.",
            tool: "PDF Crop Tool",
            steps: ["Upload your PDF file", "Set crop margins", "Download your cropped PDF"]
        }
    },
    fr: {
        seo: {
            title: `Comment Recadrer un PDF ${CURRENT_YEAR} | Supprimer Marges Blanches & Rogner Documents | pdfcanada.ca`,
            desc: `Supprimez marges blanches, recadrez documents PDF localement sans téléchargement. Parfait pour documents scannés, diapositives, diagrammes, plans architecturaux, livres numériques. Rognage automatique supprime bordures blanches. Outil PDF gratuit ${CURRENT_YEAR}.`
        },
        h1: `Comment Recadrer et Rogner un PDF : Guide ${CURRENT_YEAR}`,
        subtitle: "Éliminez les marges indésirables et optimisez vos documents PDF—100% privé et gratuit.",

        intro: (
            <>
                Que vous ayez besoin de <strong>supprimer les marges blanches de documents scannés</strong>, rogner les marges pour l'impression, extraire des diagrammes de manuels techniques ou optimiser des livres numériques pour appareils mobiles, savoir <strong>comment recadrer des pages PDF</strong> est essentiel. La plupart des éditeurs PDF professionnels comme Adobe Acrobat facturent des abonnements coûteux (20-40$/mois) pour cette fonctionnalité de base. Chez pdfcanada.ca, le rognage est complètement gratuit, traite localement sur votre appareil pour une confidentialité maximale, et ne nécessite aucune installation logicielle ni création de compte.
            </>
        ),

        sections: [
            {
                id: "pourquoi",
                title: "Pourquoi Recadrer des Documents PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            Le rognage PDF résout de nombreux problèmes réels dans la gestion documentaire, l'édition et l'archivage :
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">1. Supprimer les Marges Blanches Excessives des Documents Scannés</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Les scanners à plat et imprimantes multifonctions capturent souvent tout le lit de numérisation (8,5"×11" ou A4), créant des PDF avec d'énormes bordures blanches autour du document réel. Pour les numérisations recto-verso, le contenu peut être décalé d'un côté, laissant des marges asymétriques qui gaspillent l'espace lors de l'impression ou de la visualisation sur tablettes.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">2. Réduire la Taille de Fichier pour Courriel et Publication Web</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Supprimer l'espace blanc réduit les dimensions physiques de page stockées dans le PDF. Pour les PDF basés sur images (documents scannés), des dimensions de page plus petites signifient des tailles de fichier réduites—critique lors de l'envoi par courriel avec limites de pièce jointe (typiquement 10-25 Mo) ou publication web où le temps de chargement compte.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-3">3. Extraire des Régions Spécifiques de Plans Techniques et Cartes</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Ingénieurs, architectes et arpenteurs ont fréquemment besoin d'isoler des sections spécifiques de PDF grand format : un seul plan d'étage d'un ensemble architectural multi-pages, un circuit d'un schéma électrique, ou une région spécifique d'un plan de site. Le rognage crée des documents ciblés pour révision client ou équipes de construction.
                                </p>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3">4. Optimiser Livres Numériques et Diapositives pour Appareils Mobiles</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Les PDF académiques, diapositives de présentation et manuels techniques ont souvent de larges marges conçues pour l'impression 8,5"×11". Sur smartphones et tablettes 6-7", ces marges gaspillent un précieux espace d'écran. Rogner aux limites du contenu maximise la lisibilité sur appareils mobiles sans nécessiter de zoom constant.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "comment-ca-marche",
                title: "Comment Fonctionne le Rognage PDF (Aperçu Technique)",
                content: (
                    <>
                        <p className="mb-4">
                            Contrairement au rognage d'images (qui supprime des pixels), le rognage PDF est une <strong>édition de métadonnées non destructive</strong>. Comprendre cette distinction est crucial pour préserver la qualité des documents.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">La Distinction CropBox vs. MediaBox</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Chaque page PDF a plusieurs "boîtes englobantes" qui définissent comment elle est affichée et imprimée :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>MediaBox</strong> : La taille physique de la page (ex. 8,5"×11"). Cela définit la taille de la toile.</li>
                                    <li><strong>CropBox</strong> : La région visible lors de la visualisation/impression. Le rognage modifie cette boîte.</li>
                                    <li><strong>BleedBox, TrimBox, ArtBox</strong> : Utilisées par les imprimeurs professionnels pour les flux de travail d'impression commerciale.</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                                    Lorsque vous rognez un PDF, les outils ajustent typiquement la CropBox et optionnellement la MediaBox. Le contenu sous-jacent (texte, images, graphiques vectoriels) reste inchangé—seule la fenêtre de visualisation change. Cela signifie que le rognage ne dégrade pas la qualité comme le fait le rognage d'image.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Rognage Automatique vs. Rognage Manuel</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Les outils PDF modernes offrent deux approches :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Rognage Auto</strong> : Analyse le contenu de la page pour détecter et supprimer automatiquement les marges blanches. Les algorithmes scannent pour le rectangle englobant contenant tous les pixels non blancs, puis appliquent des marges uniformes (ex. marge de sécurité 0,25"). Parfait pour le traitement par lots de documents scannés.</li>
                                    <li><strong>Rognage Manuel</strong> : L'utilisateur définit le rectangle de rognage exact en faisant glisser des poignées ou en entrant des dimensions pixel/pouce. Essentiel pour extraire des régions spécifiques de diagrammes ou standardiser à des tailles de page exactes (comme 6"×9" pour l'édition de livres numériques).</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par Étape : Rogner Votre PDF avec pdfcanada.ca",
                content: (
                    <>
                        <p className="mb-4">
                            Notre <strong>outil de rognage PDF</strong> est conçu pour la simplicité et la confidentialité. Tout le traitement se fait dans votre navigateur en utilisant WebAssembly—vos fichiers ne touchent jamais nos serveurs.
                        </p>

                        <div className="space-y-6 mb-6">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Étape 1 : Sélectionnez Votre Fichier PDF</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Cliquez "Sélectionner PDF" ou glissez-déposez votre document dans l'outil de rognage PDF. Les fichiers sont traités localement—aucun téléchargement ne se produit. Fonctionne avec documents scannés, livres numériques, plans techniques, diapositives de présentation et tout format PDF.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Étape 2 : Définir les Marges de Rognage</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Choisissez votre méthode de rognage :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Rognage Automatique</strong> : Notre algorithme détecte les limites du contenu et applique une marge de sécurité professionnelle de 0,5" automatiquement. Idéal pour supprimer rapidement l'espace blanc du scanner.</li>
                                    <li><strong>Marges Personnalisées</strong> : Entrez des valeurs de marges spécifiques haut/bas/gauche/droite en pouces ou millimètres pour un contrôle précis.</li>
                                    <li><strong>Sélecteur Visuel (Bientôt Disponible)</strong> : Faites glisser les poignées de rognage directement sur l'aperçu de page pour définir des régions personnalisées.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Étape 3 : Aperçu et Téléchargement</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Révisez l'aperçu de la page rognée pour assurer les dimensions correctes. Cliquez "Télécharger PDF Rogné" pour sauvegarder votre document optimisé. Le fichier original reste inchangé sur votre appareil—le rognage crée un nouveau fichier.
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                            <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Astuce Pro : Rognage par Lots de Multiples Fichiers</h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Si vous avez plusieurs PDF avec des problèmes de marges blanches identiques (ex. 50 factures scannées du même scanner), déterminez les valeurs de rognage optimales pour un document, puis appliquez ces valeurs exactes à tous les fichiers séquentiellement. Cela assure un formatage cohérent à travers votre ensemble de documents.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Scénarios de Rognage Courants et Meilleures Pratiques",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Numérisation de Pages de Livres pour Bibliothèque Numérique</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Défi</strong> : Le scanner à plat capture l'ombre de la reliure du livre, les bords de page et 2-3" de marges blanches de chaque côté.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong> : Utilisez le rognage automatique pour détecter les limites du texte, puis ajustez manuellement si la taille de page du livre varie. Pour les livres reliés où les marges gauche/droite diffèrent, rognez chaque page individuellement ou utilisez des valeurs de rognage spécifiques à la page.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    Meilleure Pratique : Numérisez à 300 DPI, sauvegardez comme PDF image, rognez pour supprimer les marges, puis exécutez l'OCR pour texte recherchable.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">Extraction de Plans d'Étage de Plans Architecturaux</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Défi</strong> : Le PDF architectural multi-pages contient plan de site, élévations, sections et plans d'étage. Vous devez extraire uniquement le plan du deuxième étage pour soumission d'entrepreneur.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong> : D'abord, utilisez un outil de division PDF pour extraire cette page spécifique. Ensuite, rognez aux limites du plan d'étage, supprimant cartouches de titre, notes et marges blanches pour créer une feuille ciblée 11"×17" ou A3.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-3">Optimisation de PDF Académiques pour Lecture Kindle/Tablette</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Défi</strong> : Articles de revues et chapitres de manuels ont des marges de 1,5" conçues pour l'impression 8,5"×11". Sur un Kindle Paperwhite 6", le contenu est minuscule et nécessite un zoom constant.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    <strong>Solution</strong> : Rognez aux limites du texte (typiquement marges 0,3") pour maximiser la zone de contenu. Pour les articles académiques à deux colonnes, considérez rogner chaque colonne séparément pour créer un flux à colonne unique.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "confidentialite",
                title: "Confidentialité et Sécurité : Pourquoi le Rognage Local Est Important",
                content: (
                    <>
                        <p className="mb-4">
                            La plupart des outils de rognage PDF en ligne (CropPDF, Sejda, SmallPDF) nécessitent de télécharger votre document vers leurs serveurs pour traitement. Cela crée plusieurs risques de sécurité et de confidentialité :
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                <h4 className="font-bold text-red-900 dark:text-red-300 mb-3">1. Exposition de Documents Confidentiels</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Si vous rognez des dossiers médicaux, contrats juridiques, états financiers ou plans d'affaires, télécharger vers des serveurs tiers expose des informations sensibles. Même si les services prétendent supprimer les fichiers après traitement, les violations de données, assignations gouvernementales ou accès employés restent des risques.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">✓ Notre Solution : Traitement 100% Local</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    pdfcanada.ca traite votre PDF entièrement dans votre navigateur en utilisant la technologie WebAssembly. Cela signifie :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Aucun Téléchargement</strong> : Votre fichier ne quitte jamais votre appareil. Aucun serveur ne reçoit, stocke ou traite votre document.</li>
                                    <li><strong>Aucun Journal</strong> : Nous ne pouvons pas enregistrer les noms de fichiers, contenu ou utilisation car nous ne voyons jamais vos fichiers.</li>
                                    <li><strong>Suppression Instantanée</strong> : Fermez l'onglet du navigateur et toutes les données sont immédiatement purgées de la RAM.</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Le rognage réduit-il la qualité du PDF ?",
                a: "Non ! Le rognage PDF est non destructif—il change la 'boîte' visible (métadonnées CropBox) sans altérer le contenu sous-jacent. Le texte reste recherchable en qualité vectorielle, les images conservent leur résolution d'origine, et vous pourriez théoriquement 'dé-rogner' en réinitialisant la CropBox. Contrairement au rognage d'image (qui supprime des pixels), le rognage PDF préserve 100% de la qualité."
            },
            {
                q: "Puis-je rogner des pages spécifiques uniquement ou cela s'applique-t-il à toutes les pages ?",
                a: "La plupart des outils (incluant le nôtre actuellement) appliquent les valeurs de rognage uniformément à toutes les pages. Si vous devez rogner des pages spécifiques différemment, utilisez d'abord un outil de division PDF pour séparer ces pages en fichiers individuels, rognez chacun avec des valeurs appropriées, puis refusionnez."
            },
            {
                q: "Quelle est la différence entre rognage automatique et manuel ?",
                a: "Le rognage automatique analyse le contenu de la page pour détecter et supprimer automatiquement les marges blanches—parfait pour les documents scannés avec tailles de marges inconnues. Le rognage manuel vous permet de spécifier des marges exactes haut/bas/gauche/droite en pouces ou millimètres, donnant un contrôle précis pour standardiser les tailles de page ou extraire des régions spécifiques."
            },
            {
                q: "Le rognage supprimera-t-il les filigranes ou en-têtes/pieds de page ?",
                a: "Seulement s'ils sont dans les zones de marge que vous rognez. Les filigranes intégrés dans la zone de contenu principale ou les en-têtes/pieds de page au milieu des pages ne peuvent pas être supprimés par rognage—vous auriez besoin d'outils dédiés de caviardage ou de suppression de contenu pour cela."
            },
            {
                q: "Puis-je rogner des PDF scannés et des PDF texte ?",
                a: "Oui, les deux ! Le rognage fonctionne sur les PDF basés sur images (numérisations, photos converties en PDF) et les PDF basés sur texte (exports Word, PDF natifs). Pour les documents scannés, le rognage réduit également la taille du fichier en éliminant les pixels d'espace blanc. Pour les PDF texte, il ajuste simplement les dimensions de page."
            },
            {
                q: "Est-ce vraiment gratuit sans frais cachés ?",
                a: "100% gratuit, pour toujours. Aucun filigrane, aucune limite de taille de fichier (dans les contraintes de mémoire du navigateur, typiquement ~500 Mo), aucune montée en gamme d'abonnement, aucun compte requis. Nous sommes canadiens, polis et croyons que les outils PDF devraient être accessibles à tous."
            },
            {
                q: "Mes données sont-elles en sécurité lors de l'utilisation de votre outil de rognage ?",
                a: "Absolument. Votre PDF est traité entièrement dans votre navigateur en utilisant WebAssembly—il ne se télécharge jamais vers nos serveurs. Nous ne pouvons pas voir vos fichiers, enregistrer votre activité ou accéder à votre contenu. Lorsque vous fermez l'onglet du navigateur, toutes les données sont immédiatement purgées de la RAM. Cette approche locale d'abord est essentielle pour les documents confidentiels comme les dossiers médicaux, contrats juridiques ou états financiers."
            }
        ],

        ctaTitle: "Prêt à Recadrer Votre PDF ?",
        ctaButton: "Commencer le Rognage",
        ctaSubtext: "Gratuit, Rapide et Sécurisé.",
        faqHeading: "Questions Fréquentes",
        quickAnswer: {
            question: "Comment rogner un PDF gratuitement?",
            answer: "Utilisez l'outil de rognage PDF de pdfcanada.ca. Téléchargez votre fichier, définissez les marges de rognage, puis téléchargez votre PDF recadré. Le traitement se fait entièrement dans votre navigateur.",
            tool: "Outil de Rognage PDF",
            steps: ["Téléchargez votre fichier PDF", "Définissez les marges de rognage", "Téléchargez votre PDF recadré"]
        }
    },
    pt: {
        seo: {
            title: `Como Cortar PDF e Remover Margens | Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Corte espaço em branco e margens de documentos PDF localmente sem uploads. Perfeito para documentos digitalizados e ebooks. Ferramenta de corte gratuita ${CURRENT_YEAR}.`
        },
        h1: `Como Cortar Páginas PDF: Guia ${CURRENT_YEAR}`,
        subtitle: "Elimine o excesso e foque no seu conteúdo—100% privado e canadense.",

        intro: (
            <>
                Se você precisa <strong>remover espaço em branco de documentos digitalizados</strong>, cortar margens para impressão, extrair diagramas de manuais técnicos ou otimizar ebooks para dispositivos móveis, saber <strong>como cortar páginas PDF</strong> é essencial. A maioria dos editores profissionais como Adobe Acrobat cobram assinaturas caras ($15-30/mês) por este recurso básico. No pdfcanada.ca, o corte é totalmente gratuito, processado localmente no seu dispositivo para máxima privacidade, e não requer instalação de software ou conta.
            </>
        ),

        sections: [
            {
                id: "why-crop",
                title: "Por Que Cortar Documentos PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            O corte de PDF resolve inúmeros problemas reais na gestão de documentos e fluxos de arquivamento:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">1. Remover Margens Brancas Excessivas</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Scanners capturam todo o leito de digitalização (A4 ou Carta), criando PDFs com enormes bordas brancas. Conteúdo descentralizado desperdiça espaço.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-green-900 dark:text-green-300 mb-3">2. Reduzir Tamanho do Arquivo</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Remover espaço em branco reduz as dimensões físicas da página. Para digitalizações, isso significa tamanhos de arquivo menores para email.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-3">3. Extrair Regiões Específicas</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Engenheiros e arquitetos frequentemente precisam isolar seções específicas: uma planta baixa de um conjunto, ou um diagrama de um manual.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a Passo: Cortando Seu PDF com pdfcanada.ca",
                content: (
                    <>
                        <p className="mb-4">
                            Nossa <strong>ferramenta Cortar PDF</strong> é projetada para simplicidade e privacidade. Todo o processamento acontece no seu navegador.
                        </p>

                        <div className="space-y-6 mb-6">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Passo 1: Selecione Seu Arquivo PDF</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Clique em "Selecionar PDF" ou arraste seu documento para a <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-medium">ferramenta Cortar PDF</Link>.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Passo 2: Definir Margens de Corte</h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Escolha seu método:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Auto-Corte</strong>: Detecta limites de conteúdo e remove margens brancas automaticamente.</li>
                                    <li><strong>Margens Personalizadas</strong>: Insira valores específicos para controle preciso.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-canada-red">
                                <h4 className="font-bold text-lg mb-3">Passo 3: Pré-visualizar e Baixar</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Revise a prévia e clique em "Baixar PDF Cortado". O arquivo original permanece inalterado.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacidade e Segurança: Por Que Corte Local Importa",
                content: (
                    <>
                        <p className="mb-4">
                            A maioria das ferramentas online exige upload. O pdfcanada.ca processa seu PDF inteiramente no seu navegador usando WebAssembly.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Sem Upload</strong>: Seu arquivo nunca sai do seu dispositivo.</li>
                            <li><strong>Sem Logs</strong>: Não podemos ver seus arquivos.</li>
                            <li><strong>Exclusão Instantânea</strong>: Feche a aba e os dados somem.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Cortar reduz a qualidade do PDF?",
                a: "Não! O corte de PDF é não-destrutivo—apenas muda a 'caixa' visível (CropBox) sem alterar o conteúdo subjacente. A qualidade original é preservada."
            },
            {
                q: "Posso cortar páginas específicas?",
                a: "Atualmente aplicamos o corte a todas as páginas. Para páginas específicas, separe-as primeiro, corte e depois una novamente."
            },
            {
                q: "O corte removerá marcas d'água?",
                a: "Apenas se estiverem nas margens que você está cortando. Marcas no centro da página permanecerão."
            },
            {
                q: "É realmente gratuito?",
                a: "100% gratuito, para sempre. Sem marcas d'água, sem assinaturas."
            },
            {
                q: "Meus dados estão seguros?",
                a: "Absolutamente. Processamento local significa que nunca vemos seus arquivos. Ideal para documentos confidenciais."
            }
        ],

        ctaTitle: "Pronto para Cortar Seu PDF?",
        ctaButton: "Começar a Cortar",
        ctaSubtext: "Grátis, Seguro e Canadense.",
        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como cortar um PDF de graça?",
            answer: "Use a ferramenta Cortar PDF do pdfcanada.ca. Envie seu arquivo, defina as margens e baixe seu PDF cortado. Tudo acontece localmente no seu navegador.",
            tool: "Ferramenta Cortar PDF",
            steps: ["Envie seu arquivo PDF", "Defina margens de corte", "Baixe seu PDF cortado"]
        }
    }
});

export const CropPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/crop-pdf"
                faqs={t.faq}
                lang={lang}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', path: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Recadrer PDF' : lang === 'pt' ? 'Recortar PDF' : 'Crop PDF', path: lang === 'en' ? '/guides/crop-pdf' : `/${lang}/guides/crop-pdf` }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scissors size={32} />}>
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white flex items-center gap-3 sm:gap-4">
                                <span className="text-canada-red opacity-20 text-3xl sm:text-4xl md:text-5xl font-black">0{idx + 1}</span>
                                {section.title}
                            </h2>
                            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/crop-pdf`}
                            className="bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            {t.faqHeading}
                        </h2>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/crop-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


