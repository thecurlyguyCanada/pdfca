'use client';

import Link from 'next/link';
import React from 'react';
import { FileImage, Shield, Zap, Lock, Smartphone, Monitor, ArrowRight, CheckCircle, MousePointer2 } from 'lucide-react';
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

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `How to Convert PNG to PDF | Free ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Convert PNG images to PDF documents for free. Our ${CURRENT_YEAR} tutorial shows you how to transform PNG files to PDF securely in your browser without uploading.`
        },
        h1: `How to Convert PNG to PDF: The Complete ${CURRENT_YEAR} Guide`,
        subtitle: "Transform your PNG images into professional PDF documents with ease. Free, secure, and works on any device.",

        intro: (
            <>
                Need to convert a <strong>PNG image to PDF</strong>? Whether you're preparing documents for work, school, or personal use, our free <strong>PNG to PDF converter</strong> makes the process simple and secure.
                <br /><br />
                PNG (Portable Network Graphics) files are excellent for high-quality images with transparency, but PDF is the universal format for sharing and printing documents. Our tool converts your PNG files to PDF instantly, right in your browser, without ever uploading your images to a server.
            </>
        ),

        sections: [
            {
                id: "what-is-png",
                title: "Understanding PNG and Why Convert to PDF",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>PNG (Portable Network Graphics)</strong> is a popular image format known for its lossless compression and support for transparent backgrounds. However, there are several reasons why you might need to <strong>convert PNG to PDF</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Universal compatibility</strong>: PDF files open consistently on every device, operating system, and browser</li>
                            <li><strong>Professional presentation</strong>: PDFs look more polished for business documents, reports, and official submissions</li>
                            <li><strong>Printing reliability</strong>: PDFs maintain exact formatting and resolution when printed</li>
                            <li><strong>Multi-page documents</strong>: Combine multiple PNG images into a single, organized PDF file</li>
                            <li><strong>Email attachments</strong>: PDFs are widely accepted and often have smaller file sizes than raw images</li>
                            <li><strong>Archival purposes</strong>: PDF/A format ensures long-term document preservation</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">PNG vs PDF: Key Differences</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="py-2 pr-4 font-bold">Feature</th>
                                        <th className="py-2 pr-4 font-bold">PNG</th>
                                        <th className="py-2 font-bold">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Purpose</td>
                                        <td className="py-2 pr-4">Image format</td>
                                        <td className="py-2">Document format</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Transparency</td>
                                        <td className="py-2 pr-4">Supported</td>
                                        <td className="py-2">Preserved when converting</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Multi-page</td>
                                        <td className="py-2 pr-4">No</td>
                                        <td className="py-2">Yes</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Searchable text</td>
                                        <td className="py-2 pr-4">No</td>
                                        <td className="py-2">Optional (with OCR)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">Printing</td>
                                        <td className="py-2 pr-4">Resolution-dependent</td>
                                        <td className="py-2">Consistent output</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "step-by-step",
                title: "How to Convert PNG to PDF: Step-by-Step",
                content: (
                    <>
                        <p className="mb-4">
                            Converting <strong>PNG files to PDF</strong> on pdfcanada.ca is quick and straightforward. Follow these steps:
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Open the Converter</strong>: Navigate to pdfcanada.ca's PNG to PDF converter tool. No account or download required.
                            </li>
                            <li className="pl-2">
                                <strong>Select Your PNG Files</strong>: Click "Choose Files" or drag-and-drop your PNG images directly into the browser. You can select multiple files at once.
                            </li>
                            <li className="pl-2">
                                <strong>Arrange Your Pages</strong>: If converting multiple PNGs, drag thumbnails to reorder them. This determines the page order in your final PDF.
                            </li>
                            <li className="pl-2">
                                <strong>Convert to PDF</strong>: Click the "Convert" button. Processing happens locally in your browser within seconds.
                            </li>
                            <li className="pl-2">
                                <strong>Download Your PDF</strong>: Once complete, click "Download" to save your new PDF document to your device.
                            </li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Platform-Specific Instructions</h3>
                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">On Windows</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Open Chrome, Edge, or Firefox and go to pdfcanada.ca</li>
                            <li>Click "Choose Files" and navigate to your PNG location (Downloads, Desktop, OneDrive)</li>
                            <li>Hold Ctrl to select multiple PNG files simultaneously</li>
                            <li>Click "Convert" and save the PDF to your preferred folder</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">On Mac</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Open Safari, Chrome, or Firefox and visit pdfcanada.ca</li>
                            <li>Drag PNG files directly from Finder into the browser window</li>
                            <li>Hold Cmd to select multiple files from different locations</li>
                            <li>Download the converted PDF to your Mac</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">On iPhone or iPad</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Open Safari and navigate to pdfcanada.ca</li>
                            <li>Tap "Choose Files" and select from Photos, Files, or iCloud Drive</li>
                            <li>Use the share button to save the PDF to Files or send via email</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">On Android</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Open Chrome and go to pdfcanada.ca</li>
                            <li>Tap "Choose Files" and browse your Gallery or Downloads folder</li>
                            <li>The converted PDF saves directly to your Downloads folder</li>
                        </ul>
                    </>
                )
            },
            {
                id: "batch-conversion",
                title: "Batch Conversion: Multiple PNGs to One PDF",
                content: (
                    <>
                        <p className="mb-4">
                            One of the most powerful features of our <strong>PNG to PDF converter</strong> is the ability to combine multiple images into a single document. This is ideal for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Photo albums</strong>: Compile vacation photos, event pictures, or family memories into one shareable PDF</li>
                            <li><strong>Document scanning</strong>: Merge scanned receipt images or multi-page contracts into a single file</li>
                            <li><strong>Presentations</strong>: Convert slide exports or diagram screenshots into a portable PDF deck</li>
                            <li><strong>Product catalogs</strong>: Create organized product image collections for clients</li>
                            <li><strong>Insurance claims</strong>: Bundle damage photos or evidence images for submissions</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">How Batch Conversion Works</h3>
                        <ol className="list-decimal pl-5 space-y-2 mb-6">
                            <li>Select all your PNG files at once (Ctrl+Click on Windows, Cmd+Click on Mac)</li>
                            <li>Drag thumbnails to arrange pages in your preferred order</li>
                            <li>Click "Convert" to generate a single multi-page PDF</li>
                            <li>Download your organized document</li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Performance Expectations</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>1-10 PNG files</strong>: Instant conversion (under 1 second)</li>
                            <li><strong>10-30 PNG files</strong>: 1-3 seconds on modern devices</li>
                            <li><strong>30-50 PNG files</strong>: 3-5 seconds depending on file sizes</li>
                            <li><strong>50+ PNG files</strong>: May take longer on mobile devices; desktop recommended for large batches</li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "100% Private: Your Images Stay on Your Device",
                content: (
                    <>
                        <p className="mb-4">
                            When you <strong>convert PNG to PDF</strong> on pdfcanada.ca, your files never leave your device. We use WebAssembly and JavaScript-based processing to handle conversions entirely within your browser.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Why Local Processing Matters</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Zero upload risk</strong>: Your images are not transmitted to any server, eliminating data breach concerns</li>
                            <li><strong>No data retention</strong>: Since nothing is uploaded, nothing is stored or logged on our end</li>
                            <li><strong>Works offline</strong>: After the page loads, you can convert files even without internet connectivity</li>
                            <li><strong>Instant processing</strong>: No waiting for uploads or downloads from remote servers</li>
                            <li><strong>PIPEDA compliant</strong>: Automatic compliance with Canadian privacy laws</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Ideal for Sensitive Documents</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Financial documents and bank statements</li>
                            <li>Legal contracts and signed documents</li>
                            <li>Medical records and prescriptions</li>
                            <li>Personal identification (passport, driver's license scans)</li>
                            <li>Confidential business materials</li>
                            <li>Private family photos</li>
                        </ul>
                    </>
                )
            },
            {
                id: "quality",
                title: "Maintaining Image Quality During Conversion",
                content: (
                    <>
                        <p className="mb-4">
                            When you <strong>convert PNG to PDF</strong>, maintaining image quality is essential for professional results. Our tool preserves your original resolution without compression artifacts.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Quality Preservation</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Lossless embedding</strong>: PNG pixel data is embedded directly without re-compression</li>
                            <li><strong>Resolution maintained</strong>: A 3000x2000 pixel PNG stays 3000x2000 in the PDF</li>
                            <li><strong>Transparency preserved</strong>: PNG transparency is retained in the resulting PDF</li>
                            <li><strong>Color accuracy</strong>: Original color profiles (sRGB, Adobe RGB) are maintained</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">File Size Considerations</h3>
                        <p className="mb-4">
                            PNG files are already efficiently compressed. When converted to PDF:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Single PNG (2 MB)</strong>: Results in approximately 2-3 MB PDF</li>
                            <li><strong>Ten PNGs (20 MB total)</strong>: Results in approximately 22-25 MB PDF</li>
                            <li><strong>PDF overhead</strong>: Expect a small increase due to PDF structure data</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Reducing File Size After Conversion</h3>
                        <p className="mb-4">
                            If your PDF is too large for email or upload limits:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Use our <Link href="/compress-pdf" className="text-canada-red hover:underline">PDF compression tool</Link> after conversion</li>
                            <li>Resize large PNGs before conversion if you don't need full resolution</li>
                            <li>Consider converting to JPG first if transparency isn't needed</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Common Use Cases for PNG to PDF Conversion",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Business and Professional</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Logo submissions</strong>: Convert PNG logos to PDF for vendor portals and business registrations</li>
                            <li><strong>Screenshot documentation</strong>: Create PDF reports from application or website screenshots</li>
                            <li><strong>Design proofs</strong>: Share design mockups and graphics with clients in PDF format</li>
                            <li><strong>Infographics</strong>: Convert complex PNG infographics to printable PDF posters</li>
                            <li><strong>Chart exports</strong>: Transform exported charts and graphs into shareable documents</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Education and Research</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Assignment submissions</strong>: Convert diagrams, flowcharts, or artwork for course uploads</li>
                            <li><strong>Research figures</strong>: Package scientific figures and data visualizations for papers</li>
                            <li><strong>Presentation handouts</strong>: Create PDF handouts from slide exports</li>
                            <li><strong>Certificate images</strong>: Convert achievement graphics to printable certificates</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Government and Official Documents</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>CRA submissions</strong>: Convert supporting documents to PDF for tax filings</li>
                            <li><strong>IRCC applications</strong>: Prepare photos and scanned documents for immigration forms</li>
                            <li><strong>Legal evidence</strong>: Package screenshot evidence for court or legal proceedings</li>
                            <li><strong>Permit applications</strong>: Submit required graphics and plans as PDFs</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Personal Use</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Photo books</strong>: Create printable photo albums from PNG images</li>
                            <li><strong>Recipe collections</strong>: Compile recipe screenshots into organized PDF cookbooks</li>
                            <li><strong>Travel documents</strong>: Bundle confirmation screenshots and itineraries</li>
                            <li><strong>Social media archives</strong>: Save important posts and images as PDF records</li>
                        </ul>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting PNG to PDF Conversion",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">PNG Files Won't Upload</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>File too large</strong>: Very large PNG files (50+ MB) may timeout. Resize or compress the image first.</li>
                            <li><strong>Corrupted file</strong>: Try opening the PNG in an image editor and re-saving it.</li>
                            <li><strong>Wrong format</strong>: Ensure the file is actually a PNG (not a renamed JPG or other format).</li>
                            <li><strong>Browser issues</strong>: Clear your browser cache or try a different browser (Chrome, Firefox, Safari, Edge).</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Converted PDF Looks Wrong</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Image appears cropped</strong>: Check if your PNG has unusual dimensions. Very wide or tall images may be scaled to fit standard page sizes.</li>
                            <li><strong>Colors look off</strong>: This can occur with images using non-standard color profiles. Try converting to sRGB before PDF conversion.</li>
                            <li><strong>Transparency issues</strong>: Some PDF viewers don't display transparency correctly. The PDF itself is correct; try a different viewer.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Performance Issues</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Conversion is slow</strong>: Large batches or high-resolution images take longer. Close other browser tabs to free up memory.</li>
                            <li><strong>Browser crashes</strong>: Your device may not have enough RAM for very large files. Try converting fewer images at a time.</li>
                            <li><strong>Mobile performance</strong>: For large conversions, use a desktop computer for better performance.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">File Size Issues</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>PDF too large to email</strong>: Use our PDF compression tool after conversion, or resize images before converting.</li>
                            <li><strong>Upload limits</strong>: Many portals have file size limits (5-10 MB). Compress your PDF or split into multiple documents.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "How do I convert PNG to PDF for free?",
                a: "Visit pdfcanada.ca, click 'Choose Files' to select your PNG images, arrange them if needed, then click 'Convert' and download your PDF. Completely free with no watermarks or limits."
            },
            {
                q: "Can I convert multiple PNG files to one PDF?",
                a: "Yes! Select multiple PNG files at once, drag thumbnails to arrange the page order, and convert them into a single multi-page PDF document."
            },
            {
                q: "Will converting PNG to PDF reduce image quality?",
                a: "No. Our converter embeds your PNG images at their original resolution without compression. The quality remains exactly the same as your source files."
            },
            {
                q: "Is my PNG file uploaded to a server?",
                a: "No. All processing happens locally in your browser using WebAssembly technology. Your images never leave your device, ensuring complete privacy."
            },
            {
                q: "Does PNG to PDF conversion preserve transparency?",
                a: "Yes! PNG transparency is preserved during conversion. The transparent areas will appear correctly in PDF viewers that support transparency."
            },
            {
                q: "How do I convert PNG to PDF on iPhone?",
                a: "Open Safari, go to pdfcanada.ca, tap 'Choose Files', select your PNGs from Photos or Files, tap 'Convert', and download or share your PDF."
            },
            {
                q: "Can I convert PNG to PDF on Android?",
                a: "Yes! Open Chrome on your Android device, visit pdfcanada.ca, select your PNG images, convert, and the PDF will save to your Downloads folder."
            },
            {
                q: "What's the maximum file size for PNG conversion?",
                a: "There's no hard limit, but very large files (50+ MB) may slow processing. For best performance, keep individual PNG files under 20 MB."
            },
            {
                q: "How do I arrange pages when converting multiple PNGs?",
                a: "After selecting your files, drag the thumbnail previews to reorder them. The order shown is the order pages will appear in your final PDF."
            },
            {
                q: "Can I convert PNG screenshots to PDF?",
                a: "Absolutely! Screenshots saved as PNG convert perfectly to PDF. Great for documenting software, creating tutorials, or archiving important information."
            },
            {
                q: "Does this work offline?",
                a: "Yes! Once the page loads, conversion works offline because all processing happens in your browser. Perfect for areas with limited connectivity."
            },
            {
                q: "How do I reduce PDF file size after converting from PNG?",
                a: "Use our PDF compression tool after conversion. You can also resize your PNG images before conversion if you don't need full resolution."
            },
            {
                q: "Can I convert PNG to PDF on Windows 10 or 11?",
                a: "Yes! Open any modern browser (Chrome, Edge, Firefox), go to pdfcanada.ca, select your PNG files, and convert. No software installation needed."
            },
            {
                q: "Why is my converted PDF larger than the original PNG?",
                a: "PDF files include additional structure and metadata. The image quality is unchanged, but expect a small file size increase (typically 10-20%)."
            },
            {
                q: "Can I password-protect my converted PDF?",
                a: "After converting PNG to PDF, use our PDF encryption tool to add password protection. This secures sensitive documents for sharing."
            },
            {
                q: "What browsers support PNG to PDF conversion?",
                a: "All modern browsers work: Chrome, Firefox, Safari, Edge, and Opera. We recommend keeping your browser updated for best performance."
            },
            {
                q: "Can I convert PNG to PDF for printing?",
                a: "Yes! PDFs maintain print quality perfectly. Use high-resolution PNG images (300 DPI or higher) for professional print results."
            },
            {
                q: "Is there a limit on how many PNGs I can convert?",
                a: "No artificial limits. Your device's memory is the only constraint. Desktop computers can handle hundreds of images; mobile devices may perform better with smaller batches."
            },
            {
                q: "Can I convert PNG to searchable PDF?",
                a: "Our basic converter creates image-based PDFs. For searchable text, convert the PNG to PDF first, then use an OCR tool to add text recognition."
            },
            {
                q: "Why choose pdfcanada.ca for PNG to PDF conversion?",
                a: "We offer 100% free conversion with no watermarks, complete privacy through local processing, batch conversion support, and work on all devices without software installation."
            }
        ],

        ctaTitle: "Ready to Convert Your PNG Files?",
        ctaButton: "Start PNG to PDF Conversion",
        ctaSubtext: "100% Free. No Signup. Proudly Canadian and Privacy-First.",
        quickAnswer: {
            question: "How do I convert PNG to PDF for free?",
            answer: "Go to pdfcanada.ca, select your PNG files, arrange them if needed, click Convert, and download your PDF. No uploads, no signup, completely free.",
            tool: "PNG to PDF Converter",
            steps: ["Select your PNG files", "Arrange the page order", "Click Convert", "Download your PDF"]
        }
    },
    fr: {
        seo: {
            title: `Comment Convertir PNG en PDF | Guide Gratuit ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Convertissez des images PNG en documents PDF gratuitement. Notre tutoriel ${CURRENT_YEAR} vous montre comment transformer vos fichiers PNG en PDF en toute sécurité dans votre navigateur.`
        },
        h1: `Comment Convertir PNG en PDF : Le Guide Complet ${CURRENT_YEAR}`,
        subtitle: "Transformez vos images PNG en documents PDF professionnels. Gratuit, sécurisé et fonctionne sur tous les appareils.",

        intro: (
            <>
                Besoin de convertir une <strong>image PNG en PDF</strong> ? Que ce soit pour le travail, l'école ou un usage personnel, notre <strong>convertisseur PNG en PDF</strong> gratuit rend le processus simple et sécurisé.
                <br /><br />
                Les fichiers PNG (Portable Network Graphics) sont excellents pour les images de haute qualité avec transparence, mais le PDF est le format universel pour le partage et l'impression de documents. Notre outil convertit vos fichiers PNG en PDF instantanément, directement dans votre navigateur, sans jamais télécharger vos images sur un serveur.
            </>
        ),

        sections: [
            {
                id: "what-is-png",
                title: "Comprendre le PNG et Pourquoi Convertir en PDF",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>PNG (Portable Network Graphics)</strong> est un format d'image populaire connu pour sa compression sans perte et son support des arrière-plans transparents. Cependant, il existe plusieurs raisons de <strong>convertir PNG en PDF</strong> :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Compatibilité universelle</strong> : Les fichiers PDF s'ouvrent de manière cohérente sur tous les appareils, systèmes d'exploitation et navigateurs</li>
                            <li><strong>Présentation professionnelle</strong> : Les PDF sont plus élégants pour les documents commerciaux, rapports et soumissions officielles</li>
                            <li><strong>Fiabilité d'impression</strong> : Les PDF maintiennent le formatage et la résolution exacts lors de l'impression</li>
                            <li><strong>Documents multi-pages</strong> : Combinez plusieurs images PNG en un seul fichier PDF organisé</li>
                            <li><strong>Pièces jointes par email</strong> : Les PDF sont largement acceptés et ont souvent des tailles de fichier plus petites</li>
                            <li><strong>Archivage</strong> : Le format PDF/A assure la préservation à long terme des documents</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">PNG vs PDF : Différences Clés</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="py-2 pr-4 font-bold">Caractéristique</th>
                                        <th className="py-2 pr-4 font-bold">PNG</th>
                                        <th className="py-2 font-bold">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Objectif</td>
                                        <td className="py-2 pr-4">Format d'image</td>
                                        <td className="py-2">Format de document</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Transparence</td>
                                        <td className="py-2 pr-4">Supportée</td>
                                        <td className="py-2">Préservée lors de la conversion</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Multi-pages</td>
                                        <td className="py-2 pr-4">Non</td>
                                        <td className="py-2">Oui</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Texte recherchable</td>
                                        <td className="py-2 pr-4">Non</td>
                                        <td className="py-2">Optionnel (avec OCR)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">Impression</td>
                                        <td className="py-2 pr-4">Dépend de la résolution</td>
                                        <td className="py-2">Sortie cohérente</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "step-by-step",
                title: "Comment Convertir PNG en PDF : Étape par Étape",
                content: (
                    <>
                        <p className="mb-4">
                            Convertir des <strong>fichiers PNG en PDF</strong> sur pdfcanada.ca est rapide et simple. Suivez ces étapes :
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Ouvrez le Convertisseur</strong> : Accédez à l'outil de conversion PNG en PDF sur pdfcanada.ca. Aucun compte ni téléchargement requis.
                            </li>
                            <li className="pl-2">
                                <strong>Sélectionnez Vos Fichiers PNG</strong> : Cliquez sur "Choisir des fichiers" ou glissez-déposez vos images PNG directement dans le navigateur. Vous pouvez sélectionner plusieurs fichiers à la fois.
                            </li>
                            <li className="pl-2">
                                <strong>Organisez Vos Pages</strong> : Si vous convertissez plusieurs PNG, faites glisser les miniatures pour les réorganiser. Cela détermine l'ordre des pages dans votre PDF final.
                            </li>
                            <li className="pl-2">
                                <strong>Convertissez en PDF</strong> : Cliquez sur le bouton "Convertir". Le traitement se fait localement dans votre navigateur en quelques secondes.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez Votre PDF</strong> : Une fois terminé, cliquez sur "Télécharger" pour enregistrer votre nouveau document PDF sur votre appareil.
                            </li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Instructions par Plateforme</h3>
                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Sur Windows</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Ouvrez Chrome, Edge ou Firefox et allez sur pdfcanada.ca</li>
                            <li>Cliquez sur "Choisir des fichiers" et naviguez vers vos PNG (Téléchargements, Bureau, OneDrive)</li>
                            <li>Maintenez Ctrl pour sélectionner plusieurs fichiers PNG simultanément</li>
                            <li>Cliquez sur "Convertir" et enregistrez le PDF dans votre dossier préféré</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Sur Mac</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Ouvrez Safari, Chrome ou Firefox et visitez pdfcanada.ca</li>
                            <li>Glissez les fichiers PNG directement depuis le Finder dans la fenêtre du navigateur</li>
                            <li>Maintenez Cmd pour sélectionner plusieurs fichiers de différents emplacements</li>
                            <li>Téléchargez le PDF converti sur votre Mac</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Sur iPhone ou iPad</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Ouvrez Safari et naviguez vers pdfcanada.ca</li>
                            <li>Appuyez sur "Choisir des fichiers" et sélectionnez depuis Photos, Fichiers ou iCloud Drive</li>
                            <li>Utilisez le bouton de partage pour enregistrer le PDF dans Fichiers ou l'envoyer par email</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Sur Android</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Ouvrez Chrome et allez sur pdfcanada.ca</li>
                            <li>Appuyez sur "Choisir des fichiers" et parcourez votre Galerie ou dossier Téléchargements</li>
                            <li>Le PDF converti s'enregistre directement dans votre dossier Téléchargements</li>
                        </ul>
                    </>
                )
            },
            {
                id: "batch-conversion",
                title: "Conversion par Lots : Plusieurs PNG en Un Seul PDF",
                content: (
                    <>
                        <p className="mb-4">
                            L'une des fonctionnalités les plus puissantes de notre <strong>convertisseur PNG en PDF</strong> est la capacité de combiner plusieurs images en un seul document. Idéal pour :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Albums photos</strong> : Compilez photos de vacances, photos d'événements ou souvenirs de famille en un seul PDF partageable</li>
                            <li><strong>Numérisation de documents</strong> : Fusionnez des images de reçus numérisés ou des contrats multi-pages en un seul fichier</li>
                            <li><strong>Présentations</strong> : Convertissez des exports de diapositives ou des captures d'écran de diagrammes en un PDF portable</li>
                            <li><strong>Catalogues produits</strong> : Créez des collections d'images de produits organisées pour les clients</li>
                            <li><strong>Réclamations d'assurance</strong> : Regroupez les photos de dommages ou les images de preuves pour les soumissions</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Comment Fonctionne la Conversion par Lots</h3>
                        <ol className="list-decimal pl-5 space-y-2 mb-6">
                            <li>Sélectionnez tous vos fichiers PNG à la fois (Ctrl+Clic sur Windows, Cmd+Clic sur Mac)</li>
                            <li>Faites glisser les miniatures pour organiser les pages dans votre ordre préféré</li>
                            <li>Cliquez sur "Convertir" pour générer un seul PDF multi-pages</li>
                            <li>Téléchargez votre document organisé</li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Performances Attendues</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>1-10 fichiers PNG</strong> : Conversion instantanée (moins d'une seconde)</li>
                            <li><strong>10-30 fichiers PNG</strong> : 1-3 secondes sur les appareils modernes</li>
                            <li><strong>30-50 fichiers PNG</strong> : 3-5 secondes selon les tailles de fichiers</li>
                            <li><strong>50+ fichiers PNG</strong> : Peut prendre plus de temps sur mobile; ordinateur de bureau recommandé pour les gros lots</li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "100% Privé : Vos Images Restent sur Votre Appareil",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous <strong>convertissez PNG en PDF</strong> sur pdfcanada.ca, vos fichiers ne quittent jamais votre appareil. Nous utilisons WebAssembly et un traitement basé sur JavaScript pour gérer les conversions entièrement dans votre navigateur.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Pourquoi le Traitement Local Est Important</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Aucun risque de téléchargement</strong> : Vos images ne sont transmises à aucun serveur, éliminant les préoccupations de violation de données</li>
                            <li><strong>Aucune conservation de données</strong> : Comme rien n'est téléchargé, rien n'est stocké ou enregistré de notre côté</li>
                            <li><strong>Fonctionne hors ligne</strong> : Après le chargement de la page, vous pouvez convertir des fichiers même sans connexion Internet</li>
                            <li><strong>Traitement instantané</strong> : Pas d'attente pour les téléchargements vers ou depuis des serveurs distants</li>
                            <li><strong>Conforme à LPRPDE</strong> : Conformité automatique avec les lois canadiennes sur la vie privée</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Idéal pour les Documents Sensibles</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Documents financiers et relevés bancaires</li>
                            <li>Contrats juridiques et documents signés</li>
                            <li>Dossiers médicaux et ordonnances</li>
                            <li>Pièces d'identité personnelles (passeport, permis de conduire numérisés)</li>
                            <li>Documents commerciaux confidentiels</li>
                            <li>Photos de famille privées</li>
                        </ul>
                    </>
                )
            },
            {
                id: "quality",
                title: "Maintenir la Qualité d'Image Pendant la Conversion",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous <strong>convertissez PNG en PDF</strong>, maintenir la qualité d'image est essentiel pour des résultats professionnels. Notre outil préserve votre résolution d'origine sans artefacts de compression.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Préservation de la Qualité</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Intégration sans perte</strong> : Les données de pixels PNG sont intégrées directement sans recompression</li>
                            <li><strong>Résolution maintenue</strong> : Un PNG de 3000x2000 pixels reste 3000x2000 dans le PDF</li>
                            <li><strong>Transparence préservée</strong> : La transparence PNG est conservée dans le PDF résultant</li>
                            <li><strong>Précision des couleurs</strong> : Les profils de couleurs d'origine (sRGB, Adobe RGB) sont maintenus</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Considérations sur la Taille de Fichier</h3>
                        <p className="mb-4">
                            Les fichiers PNG sont déjà efficacement compressés. Lors de la conversion en PDF :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>PNG unique (2 Mo)</strong> : Résulte en environ 2-3 Mo de PDF</li>
                            <li><strong>Dix PNG (20 Mo au total)</strong> : Résulte en environ 22-25 Mo de PDF</li>
                            <li><strong>Surcharge PDF</strong> : Attendez-vous à une légère augmentation due aux données de structure PDF</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Réduire la Taille de Fichier Après Conversion</h3>
                        <p className="mb-4">
                            Si votre PDF est trop volumineux pour les limites d'email ou de téléchargement :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Utilisez notre outil de compression PDF après la conversion</li>
                            <li>Redimensionnez les grands PNG avant la conversion si vous n'avez pas besoin de la pleine résolution</li>
                            <li>Envisagez de convertir d'abord en JPG si la transparence n'est pas nécessaire</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants pour la Conversion PNG en PDF",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Affaires et Professionnel</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Soumissions de logos</strong> : Convertissez les logos PNG en PDF pour les portails fournisseurs et les enregistrements d'entreprise</li>
                            <li><strong>Documentation par captures d'écran</strong> : Créez des rapports PDF à partir de captures d'écran d'applications ou de sites web</li>
                            <li><strong>Épreuves de design</strong> : Partagez des maquettes de design et des graphiques avec les clients au format PDF</li>
                            <li><strong>Infographies</strong> : Convertissez des infographies PNG complexes en affiches PDF imprimables</li>
                            <li><strong>Exports de graphiques</strong> : Transformez les graphiques et diagrammes exportés en documents partageables</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Éducation et Recherche</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Soumissions de devoirs</strong> : Convertissez diagrammes, organigrammes ou œuvres d'art pour les téléchargements de cours</li>
                            <li><strong>Figures de recherche</strong> : Compilez figures scientifiques et visualisations de données pour les articles</li>
                            <li><strong>Documents de présentation</strong> : Créez des documents PDF à partir d'exports de diapositives</li>
                            <li><strong>Images de certificats</strong> : Convertissez les graphiques de récompenses en certificats imprimables</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Gouvernement et Documents Officiels</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Soumissions à l'ARC</strong> : Convertissez les documents justificatifs en PDF pour les déclarations fiscales</li>
                            <li><strong>Demandes IRCC</strong> : Préparez photos et documents numérisés pour les formulaires d'immigration</li>
                            <li><strong>Preuves juridiques</strong> : Compilez les preuves par captures d'écran pour les procédures judiciaires</li>
                            <li><strong>Demandes de permis</strong> : Soumettez les graphiques et plans requis en PDF</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Usage Personnel</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Albums photos</strong> : Créez des albums photos imprimables à partir d'images PNG</li>
                            <li><strong>Collections de recettes</strong> : Compilez des captures d'écran de recettes en livres de cuisine PDF organisés</li>
                            <li><strong>Documents de voyage</strong> : Regroupez les captures d'écran de confirmation et les itinéraires</li>
                            <li><strong>Archives de réseaux sociaux</strong> : Sauvegardez les publications et images importantes en archives PDF</li>
                        </ul>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Dépannage de la Conversion PNG en PDF",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Les Fichiers PNG ne se Téléchargent Pas</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Fichier trop volumineux</strong> : Les fichiers PNG très volumineux (50+ Mo) peuvent expirer. Redimensionnez ou compressez l'image d'abord.</li>
                            <li><strong>Fichier corrompu</strong> : Essayez d'ouvrir le PNG dans un éditeur d'images et de le réenregistrer.</li>
                            <li><strong>Mauvais format</strong> : Assurez-vous que le fichier est bien un PNG (pas un JPG renommé ou autre format).</li>
                            <li><strong>Problèmes de navigateur</strong> : Videz le cache de votre navigateur ou essayez un autre navigateur (Chrome, Firefox, Safari, Edge).</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Le PDF Converti a un Problème</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>L'image apparaît recadrée</strong> : Vérifiez si votre PNG a des dimensions inhabituelles. Les images très larges ou hautes peuvent être mises à l'échelle pour s'adapter aux tailles de page standard.</li>
                            <li><strong>Les couleurs semblent différentes</strong> : Cela peut se produire avec des images utilisant des profils de couleurs non standard. Essayez de convertir en sRGB avant la conversion en PDF.</li>
                            <li><strong>Problèmes de transparence</strong> : Certains lecteurs PDF n'affichent pas correctement la transparence. Le PDF lui-même est correct; essayez un autre lecteur.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Problèmes de Performance</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>La conversion est lente</strong> : Les gros lots ou les images haute résolution prennent plus de temps. Fermez les autres onglets du navigateur pour libérer de la mémoire.</li>
                            <li><strong>Le navigateur plante</strong> : Votre appareil n'a peut-être pas assez de RAM pour les très gros fichiers. Essayez de convertir moins d'images à la fois.</li>
                            <li><strong>Performance mobile</strong> : Pour les grandes conversions, utilisez un ordinateur de bureau pour de meilleures performances.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Problèmes de Taille de Fichier</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>PDF trop volumineux pour l'email</strong> : Utilisez notre outil de compression PDF après la conversion, ou redimensionnez les images avant de convertir.</li>
                            <li><strong>Limites de téléchargement</strong> : De nombreux portails ont des limites de taille de fichier (5-10 Mo). Compressez votre PDF ou divisez-le en plusieurs documents.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Comment convertir PNG en PDF gratuitement ?",
                a: "Visitez pdfcanada.ca, cliquez sur 'Choisir des fichiers' pour sélectionner vos images PNG, organisez-les si nécessaire, puis cliquez sur 'Convertir' et téléchargez votre PDF. Entièrement gratuit sans filigrane ni limites."
            },
            {
                q: "Puis-je convertir plusieurs fichiers PNG en un seul PDF ?",
                a: "Oui ! Sélectionnez plusieurs fichiers PNG à la fois, faites glisser les miniatures pour organiser l'ordre des pages, et convertissez-les en un document PDF multi-pages unique."
            },
            {
                q: "La conversion PNG en PDF réduit-elle la qualité de l'image ?",
                a: "Non. Notre convertisseur intègre vos images PNG à leur résolution d'origine sans compression. La qualité reste exactement la même que vos fichiers sources."
            },
            {
                q: "Mon fichier PNG est-il téléchargé sur un serveur ?",
                a: "Non. Tout le traitement se fait localement dans votre navigateur grâce à la technologie WebAssembly. Vos images ne quittent jamais votre appareil, assurant une confidentialité totale."
            },
            {
                q: "La conversion PNG en PDF préserve-t-elle la transparence ?",
                a: "Oui ! La transparence PNG est préservée pendant la conversion. Les zones transparentes apparaîtront correctement dans les lecteurs PDF qui supportent la transparence."
            },
            {
                q: "Comment convertir PNG en PDF sur iPhone ?",
                a: "Ouvrez Safari, allez sur pdfcanada.ca, appuyez sur 'Choisir des fichiers', sélectionnez vos PNG depuis Photos ou Fichiers, appuyez sur 'Convertir', et téléchargez ou partagez votre PDF."
            },
            {
                q: "Puis-je convertir PNG en PDF sur Android ?",
                a: "Oui ! Ouvrez Chrome sur votre appareil Android, visitez pdfcanada.ca, sélectionnez vos images PNG, convertissez, et le PDF s'enregistrera dans votre dossier Téléchargements."
            },
            {
                q: "Quelle est la taille de fichier maximale pour la conversion PNG ?",
                a: "Il n'y a pas de limite stricte, mais les fichiers très volumineux (50+ Mo) peuvent ralentir le traitement. Pour de meilleures performances, gardez les fichiers PNG individuels sous 20 Mo."
            },
            {
                q: "Comment organiser les pages lors de la conversion de plusieurs PNG ?",
                a: "Après avoir sélectionné vos fichiers, faites glisser les aperçus miniatures pour les réorganiser. L'ordre affiché est l'ordre dans lequel les pages apparaîtront dans votre PDF final."
            },
            {
                q: "Puis-je convertir des captures d'écran PNG en PDF ?",
                a: "Absolument ! Les captures d'écran enregistrées en PNG se convertissent parfaitement en PDF. Idéal pour documenter des logiciels, créer des tutoriels ou archiver des informations importantes."
            },
            {
                q: "Cela fonctionne-t-il hors ligne ?",
                a: "Oui ! Une fois la page chargée, la conversion fonctionne hors ligne car tout le traitement se fait dans votre navigateur. Parfait pour les zones avec une connectivité limitée."
            },
            {
                q: "Pourquoi mon PDF converti est-il plus volumineux que le PNG original ?",
                a: "Les fichiers PDF incluent une structure et des métadonnées supplémentaires. La qualité de l'image est inchangée, mais attendez-vous à une légère augmentation de la taille du fichier (généralement 10-20%)."
            },
            {
                q: "Puis-je protéger par mot de passe mon PDF converti ?",
                a: "Après avoir converti PNG en PDF, utilisez notre outil de cryptage PDF pour ajouter une protection par mot de passe. Cela sécurise les documents sensibles pour le partage."
            },
            {
                q: "Quels navigateurs supportent la conversion PNG en PDF ?",
                a: "Tous les navigateurs modernes fonctionnent : Chrome, Firefox, Safari, Edge et Opera. Nous recommandons de garder votre navigateur à jour pour de meilleures performances."
            },
            {
                q: "Puis-je convertir PNG en PDF pour l'impression ?",
                a: "Oui ! Les PDF maintiennent parfaitement la qualité d'impression. Utilisez des images PNG haute résolution (300 DPI ou plus) pour des résultats d'impression professionnels."
            },
            {
                q: "Y a-t-il une limite au nombre de PNG que je peux convertir ?",
                a: "Pas de limites artificielles. La mémoire de votre appareil est la seule contrainte. Les ordinateurs de bureau peuvent gérer des centaines d'images; les appareils mobiles peuvent mieux fonctionner avec des lots plus petits."
            },
            {
                q: "Pourquoi choisir pdfcanada.ca pour la conversion PNG en PDF ?",
                a: "Nous offrons une conversion 100% gratuite sans filigrane, une confidentialité totale grâce au traitement local, le support de la conversion par lots, et fonctionnons sur tous les appareils sans installation de logiciel."
            }
        ],

        ctaTitle: "Prêt à Convertir Vos Fichiers PNG ?",
        ctaButton: "Démarrer la Conversion PNG en PDF",
        ctaSubtext: "100% Gratuit. Aucune Inscription. Fièrement Canadien et Privé.",
        quickAnswer: {
            question: "Comment convertir PNG en PDF gratuitement?",
            answer: "Allez sur pdfcanada.ca, sélectionnez vos fichiers PNG, organisez-les si besoin, cliquez sur Convertir et téléchargez votre PDF. Aucun téléchargement sur serveur, aucune inscription, totalement gratuit.",
            tool: "Convertisseur PNG en PDF",
            steps: ["Sélectionnez vos fichiers PNG", "Organisez l'ordre des pages", "Cliquez sur Convertir", "Téléchargez votre PDF"]
        }
    },
    pt: {
        seo: {
            title: `Como Converter PNG para PDF | Guia Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Converta imagens PNG para documentos PDF gratuitamente. Nosso tutorial de ${CURRENT_YEAR} mostra como transformar arquivos PNG em PDF com segurança no seu navegador sem uploads.`
        },
        h1: `Como Converter PNG para PDF: O Guia Completo de ${CURRENT_YEAR}`,
        subtitle: "Transforme suas imagens PNG em documentos PDF profissionais. Grátis, seguro e funciona em qualquer dispositivo.",

        intro: (
            <>
                Precisa converter uma <strong>imagem PNG para PDF</strong>? Seja para trabalho, escola ou uso pessoal, nosso <strong>conversor PNG para PDF</strong> gratuito torna o processo simples e seguro.
                <br /><br />
                Arquivos PNG (Portable Network Graphics) são excelentes para imagens de alta qualidade com transparência, mas o PDF é o formato universal para compartilhamento e impressão de documentos. Nossa ferramenta converte seus arquivos PNG para PDF instantaneamente, diretamente no seu navegador, sem nunca enviar suas imagens para um servidor.
            </>
        ),

        sections: [
            {
                id: "what-is-png",
                title: "Entendendo PNG e Por Que Converter para PDF",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>PNG (Portable Network Graphics)</strong> é um formato de imagem popular conhecido por sua compressão sem perdas e suporte a fundos transparentes. No entanto, existem várias razões para <strong>converter PNG para PDF</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Compatibilidade universal</strong>: Arquivos PDF abrem consistentemente em todos os dispositivos, sistemas operacionais e navegadores</li>
                            <li><strong>Apresentação profissional</strong>: PDFs parecem mais polidos para documentos comerciais, relatórios e submissões oficiais</li>
                            <li><strong>Confiabilidade de impressão</strong>: PDFs mantêm formatação e resolução exatas quando impressos</li>
                            <li><strong>Documentos multi-páginas</strong>: Combine múltiplas imagens PNG em um único arquivo PDF organizado</li>
                            <li><strong>Anexos de email</strong>: PDFs são amplamente aceitos e frequentemente têm tamanhos menores que imagens brutas</li>
                            <li><strong>Arquivamento</strong>: O formato PDF/A garante preservação de documentos a longo prazo</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">PNG vs PDF: Principais Diferenças</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="py-2 pr-4 font-bold">Característica</th>
                                        <th className="py-2 pr-4 font-bold">PNG</th>
                                        <th className="py-2 font-bold">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Propósito</td>
                                        <td className="py-2 pr-4">Formato de imagem</td>
                                        <td className="py-2">Formato de documento</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Transparência</td>
                                        <td className="py-2 pr-4">Suportada</td>
                                        <td className="py-2">Preservada na conversão</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Multi-páginas</td>
                                        <td className="py-2 pr-4">Não</td>
                                        <td className="py-2">Sim</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 pr-4">Texto pesquisável</td>
                                        <td className="py-2 pr-4">Não</td>
                                        <td className="py-2">Opcional (com OCR)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">Impressão</td>
                                        <td className="py-2 pr-4">Depende da resolução</td>
                                        <td className="py-2">Saída consistente</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "step-by-step",
                title: "Como Converter PNG para PDF: Passo a Passo",
                content: (
                    <>
                        <p className="mb-4">
                            Converter <strong>arquivos PNG para PDF</strong> no pdfcanada.ca é rápido e simples. Siga estes passos:
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Abra o Conversor</strong>: Acesse a ferramenta de conversão PNG para PDF em pdfcanada.ca. Nenhuma conta ou download necessário.
                            </li>
                            <li className="pl-2">
                                <strong>Selecione Seus Arquivos PNG</strong>: Clique em "Escolher arquivos" ou arraste e solte suas imagens PNG diretamente no navegador. Você pode selecionar múltiplos arquivos de uma vez.
                            </li>
                            <li className="pl-2">
                                <strong>Organize Suas Páginas</strong>: Se estiver convertendo vários PNGs, arraste as miniaturas para reordená-las. Isso determina a ordem das páginas no seu PDF final.
                            </li>
                            <li className="pl-2">
                                <strong>Converta para PDF</strong>: Clique no botão "Converter". O processamento acontece localmente no seu navegador em segundos.
                            </li>
                            <li className="pl-2">
                                <strong>Baixe Seu PDF</strong>: Quando concluído, clique em "Download" para salvar seu novo documento PDF no seu dispositivo.
                            </li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Instruções por Plataforma</h3>
                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">No Windows</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Abra Chrome, Edge ou Firefox e vá para pdfcanada.ca</li>
                            <li>Clique em "Escolher arquivos" e navegue até seus PNGs (Downloads, Área de Trabalho, OneDrive)</li>
                            <li>Segure Ctrl para selecionar múltiplos arquivos PNG simultaneamente</li>
                            <li>Clique em "Converter" e salve o PDF na sua pasta preferida</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">No Mac</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Abra Safari, Chrome ou Firefox e visite pdfcanada.ca</li>
                            <li>Arraste arquivos PNG diretamente do Finder para a janela do navegador</li>
                            <li>Segure Cmd para selecionar múltiplos arquivos de diferentes locais</li>
                            <li>Baixe o PDF convertido para seu Mac</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">No iPhone ou iPad</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Abra o Safari e navegue para pdfcanada.ca</li>
                            <li>Toque em "Escolher arquivos" e selecione de Fotos, Arquivos ou iCloud Drive</li>
                            <li>Use o botão de compartilhamento para salvar o PDF em Arquivos ou enviar por email</li>
                        </ul>

                        <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">No Android</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Abra o Chrome e vá para pdfcanada.ca</li>
                            <li>Toque em "Escolher arquivos" e navegue pela sua Galeria ou pasta Downloads</li>
                            <li>O PDF convertido salva diretamente na sua pasta Downloads</li>
                        </ul>
                    </>
                )
            },
            {
                id: "batch-conversion",
                title: "Conversão em Lote: Múltiplos PNGs em Um PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Uma das funcionalidades mais poderosas do nosso <strong>conversor PNG para PDF</strong> é a capacidade de combinar múltiplas imagens em um único documento. Ideal para:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Álbuns de fotos</strong>: Compile fotos de férias, fotos de eventos ou memórias familiares em um PDF compartilhável</li>
                            <li><strong>Digitalização de documentos</strong>: Mescle imagens de recibos digitalizados ou contratos multi-páginas em um único arquivo</li>
                            <li><strong>Apresentações</strong>: Converta exports de slides ou capturas de tela de diagramas em um PDF portátil</li>
                            <li><strong>Catálogos de produtos</strong>: Crie coleções organizadas de imagens de produtos para clientes</li>
                            <li><strong>Reclamações de seguro</strong>: Agrupe fotos de danos ou imagens de evidências para submissões</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Como Funciona a Conversão em Lote</h3>
                        <ol className="list-decimal pl-5 space-y-2 mb-6">
                            <li>Selecione todos os seus arquivos PNG de uma vez (Ctrl+Clique no Windows, Cmd+Clique no Mac)</li>
                            <li>Arraste as miniaturas para organizar as páginas na sua ordem preferida</li>
                            <li>Clique em "Converter" para gerar um único PDF multi-páginas</li>
                            <li>Baixe seu documento organizado</li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Expectativas de Desempenho</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>1-10 arquivos PNG</strong>: Conversão instantânea (menos de 1 segundo)</li>
                            <li><strong>10-30 arquivos PNG</strong>: 1-3 segundos em dispositivos modernos</li>
                            <li><strong>30-50 arquivos PNG</strong>: 3-5 segundos dependendo do tamanho dos arquivos</li>
                            <li><strong>50+ arquivos PNG</strong>: Pode demorar mais em dispositivos móveis; computador desktop recomendado para lotes grandes</li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "100% Privado: Suas Imagens Ficam no Seu Dispositivo",
                content: (
                    <>
                        <p className="mb-4">
                            Quando você <strong>converte PNG para PDF</strong> no pdfcanada.ca, seus arquivos nunca saem do seu dispositivo. Usamos WebAssembly e processamento baseado em JavaScript para lidar com conversões inteiramente no seu navegador.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Por Que o Processamento Local Importa</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Zero risco de upload</strong>: Suas imagens não são transmitidas para nenhum servidor, eliminando preocupações com violação de dados</li>
                            <li><strong>Sem retenção de dados</strong>: Como nada é enviado, nada é armazenado ou registrado do nosso lado</li>
                            <li><strong>Funciona offline</strong>: Após carregar a página, você pode converter arquivos mesmo sem conexão de internet</li>
                            <li><strong>Processamento instantâneo</strong>: Sem espera por uploads ou downloads de servidores remotos</li>
                            <li><strong>Conformidade com privacidade</strong>: Conformidade automática com leis canadenses de privacidade</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Ideal para Documentos Sensíveis</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Documentos financeiros e extratos bancários</li>
                            <li>Contratos legais e documentos assinados</li>
                            <li>Registros médicos e prescrições</li>
                            <li>Identificação pessoal (passaporte, carteira de motorista digitalizados)</li>
                            <li>Materiais comerciais confidenciais</li>
                            <li>Fotos de família privadas</li>
                        </ul>
                    </>
                )
            },
            {
                id: "quality",
                title: "Mantendo a Qualidade da Imagem Durante a Conversão",
                content: (
                    <>
                        <p className="mb-4">
                            Quando você <strong>converte PNG para PDF</strong>, manter a qualidade da imagem é essencial para resultados profissionais. Nossa ferramenta preserva sua resolução original sem artefatos de compressão.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Preservação de Qualidade</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Incorporação sem perdas</strong>: Dados de pixels PNG são incorporados diretamente sem recompressão</li>
                            <li><strong>Resolução mantida</strong>: Um PNG de 3000x2000 pixels permanece 3000x2000 no PDF</li>
                            <li><strong>Transparência preservada</strong>: A transparência PNG é mantida no PDF resultante</li>
                            <li><strong>Precisão de cores</strong>: Perfis de cores originais (sRGB, Adobe RGB) são mantidos</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Considerações sobre Tamanho de Arquivo</h3>
                        <p className="mb-4">
                            Arquivos PNG já são eficientemente comprimidos. Quando convertidos para PDF:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>PNG único (2 MB)</strong>: Resulta em aproximadamente 2-3 MB de PDF</li>
                            <li><strong>Dez PNGs (20 MB no total)</strong>: Resulta em aproximadamente 22-25 MB de PDF</li>
                            <li><strong>Sobrecarga do PDF</strong>: Espere um pequeno aumento devido aos dados de estrutura do PDF</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Reduzindo o Tamanho do Arquivo Após Conversão</h3>
                        <p className="mb-4">
                            Se seu PDF estiver muito grande para limites de email ou upload:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Use nossa ferramenta de compressão PDF após a conversão</li>
                            <li>Redimensione PNGs grandes antes da conversão se você não precisar da resolução total</li>
                            <li>Considere converter para JPG primeiro se a transparência não for necessária</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Casos de Uso Comuns para Conversão PNG para PDF",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Negócios e Profissional</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Submissões de logos</strong>: Converta logos PNG para PDF para portais de fornecedores e registros empresariais</li>
                            <li><strong>Documentação por capturas de tela</strong>: Crie relatórios PDF a partir de capturas de tela de aplicativos ou sites</li>
                            <li><strong>Provas de design</strong>: Compartilhe mockups de design e gráficos com clientes em formato PDF</li>
                            <li><strong>Infográficos</strong>: Converta infográficos PNG complexos em cartazes PDF imprimíveis</li>
                            <li><strong>Exports de gráficos</strong>: Transforme gráficos exportados em documentos compartilháveis</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Educação e Pesquisa</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Submissões de trabalhos</strong>: Converta diagramas, fluxogramas ou obras de arte para uploads de cursos</li>
                            <li><strong>Figuras de pesquisa</strong>: Compile figuras científicas e visualizações de dados para artigos</li>
                            <li><strong>Materiais de apresentação</strong>: Crie documentos PDF a partir de exports de slides</li>
                            <li><strong>Imagens de certificados</strong>: Converta gráficos de conquistas em certificados imprimíveis</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Governo e Documentos Oficiais</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Submissões fiscais</strong>: Converta documentos de apoio para PDF para declarações de impostos</li>
                            <li><strong>Solicitações de imigração</strong>: Prepare fotos e documentos digitalizados para formulários de imigração</li>
                            <li><strong>Evidências legais</strong>: Compile evidências de capturas de tela para processos judiciais</li>
                            <li><strong>Solicitações de licenças</strong>: Submeta gráficos e planos necessários como PDFs</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Uso Pessoal</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Álbuns de fotos</strong>: Crie álbuns de fotos imprimíveis a partir de imagens PNG</li>
                            <li><strong>Coleções de receitas</strong>: Compile capturas de tela de receitas em livros de receitas PDF organizados</li>
                            <li><strong>Documentos de viagem</strong>: Agrupe capturas de tela de confirmação e itinerários</li>
                            <li><strong>Arquivos de redes sociais</strong>: Salve posts e imagens importantes como registros PDF</li>
                        </ul>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Solução de Problemas da Conversão PNG para PDF",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Arquivos PNG Não Carregam</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Arquivo muito grande</strong>: Arquivos PNG muito grandes (50+ MB) podem expirar. Redimensione ou comprima a imagem primeiro.</li>
                            <li><strong>Arquivo corrompido</strong>: Tente abrir o PNG em um editor de imagens e salvá-lo novamente.</li>
                            <li><strong>Formato errado</strong>: Certifique-se de que o arquivo é realmente um PNG (não um JPG renomeado ou outro formato).</li>
                            <li><strong>Problemas de navegador</strong>: Limpe o cache do seu navegador ou tente um navegador diferente (Chrome, Firefox, Safari, Edge).</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">O PDF Convertido Parece Errado</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Imagem aparece cortada</strong>: Verifique se seu PNG tem dimensões incomuns. Imagens muito largas ou altas podem ser redimensionadas para caber em tamanhos de página padrão.</li>
                            <li><strong>Cores parecem diferentes</strong>: Isso pode ocorrer com imagens usando perfis de cores não padrão. Tente converter para sRGB antes da conversão para PDF.</li>
                            <li><strong>Problemas de transparência</strong>: Alguns visualizadores de PDF não exibem transparência corretamente. O PDF em si está correto; tente um visualizador diferente.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Problemas de Desempenho</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Conversão está lenta</strong>: Lotes grandes ou imagens de alta resolução demoram mais. Feche outras abas do navegador para liberar memória.</li>
                            <li><strong>Navegador trava</strong>: Seu dispositivo pode não ter RAM suficiente para arquivos muito grandes. Tente converter menos imagens de cada vez.</li>
                            <li><strong>Desempenho móvel</strong>: Para conversões grandes, use um computador desktop para melhor desempenho.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Problemas de Tamanho de Arquivo</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>PDF muito grande para email</strong>: Use nossa ferramenta de compressão PDF após a conversão, ou redimensione imagens antes de converter.</li>
                            <li><strong>Limites de upload</strong>: Muitos portais têm limites de tamanho de arquivo (5-10 MB). Comprima seu PDF ou divida em múltiplos documentos.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Como converter PNG para PDF de graça?",
                a: "Visite pdfcanada.ca, clique em 'Escolher arquivos' para selecionar suas imagens PNG, organize-as se necessário, clique em 'Converter' e baixe seu PDF. Totalmente grátis sem marca d'água ou limites."
            },
            {
                q: "Posso converter vários arquivos PNG em um PDF?",
                a: "Sim! Selecione vários arquivos PNG de uma vez, arraste as miniaturas para organizar a ordem das páginas e converta-os em um único documento PDF de várias páginas."
            },
            {
                q: "A conversão PNG para PDF reduz a qualidade da imagem?",
                a: "Não. Nosso conversor incorpora suas imagens PNG na resolução original sem compressão. A qualidade permanece exatamente a mesma dos seus arquivos fonte."
            },
            {
                q: "Meu arquivo PNG é enviado para um servidor?",
                a: "Não. Todo o processamento acontece localmente no seu navegador usando tecnologia WebAssembly. Suas imagens nunca saem do seu dispositivo, garantindo privacidade total."
            },
            {
                q: "A conversão PNG para PDF preserva a transparência?",
                a: "Sim! A transparência PNG é preservada durante a conversão. As áreas transparentes aparecerão corretamente em visualizadores de PDF que suportam transparência."
            },
            {
                q: "Como converter PNG para PDF no iPhone?",
                a: "Abra o Safari, vá para pdfcanada.ca, toque em 'Escolher arquivos', selecione seus PNGs de Fotos ou Arquivos, toque em 'Converter', e baixe ou compartilhe seu PDF."
            },
            {
                q: "Posso converter PNG para PDF no Android?",
                a: "Sim! Abra o Chrome no seu dispositivo Android, visite pdfcanada.ca, selecione suas imagens PNG, converta, e o PDF salvará na sua pasta Downloads."
            },
            {
                q: "Qual é o tamanho máximo de arquivo para conversão PNG?",
                a: "Não há limite rígido, mas arquivos muito grandes (50+ MB) podem desacelerar o processamento. Para melhor desempenho, mantenha arquivos PNG individuais abaixo de 20 MB."
            },
            {
                q: "Como organizar páginas ao converter vários PNGs?",
                a: "Após selecionar seus arquivos, arraste as visualizações em miniatura para reordená-las. A ordem mostrada é a ordem em que as páginas aparecerão no seu PDF final."
            },
            {
                q: "Posso converter capturas de tela PNG para PDF?",
                a: "Absolutamente! Capturas de tela salvas como PNG convertem perfeitamente para PDF. Ótimo para documentar software, criar tutoriais ou arquivar informações importantes."
            },
            {
                q: "Funciona offline?",
                a: "Sim! Uma vez que a página carrega, a conversão funciona offline porque todo o processamento acontece no seu navegador. Perfeito para áreas com conectividade limitada."
            },
            {
                q: "Por que meu PDF convertido é maior que o PNG original?",
                a: "Arquivos PDF incluem estrutura e metadados adicionais. A qualidade da imagem não muda, mas espere um pequeno aumento no tamanho do arquivo (tipicamente 10-20%)."
            },
            {
                q: "Posso proteger meu PDF convertido com senha?",
                a: "Após converter PNG para PDF, use nossa ferramenta de criptografia PDF para adicionar proteção por senha. Isso protege documentos sensíveis para compartilhamento."
            },
            {
                q: "Quais navegadores suportam conversão PNG para PDF?",
                a: "Todos os navegadores modernos funcionam: Chrome, Firefox, Safari, Edge e Opera. Recomendamos manter seu navegador atualizado para melhor desempenho."
            },
            {
                q: "Posso converter PNG para PDF para impressão?",
                a: "Sim! PDFs mantêm perfeitamente a qualidade de impressão. Use imagens PNG de alta resolução (300 DPI ou maior) para resultados de impressão profissionais."
            },
            {
                q: "Há limite de quantos PNGs posso converter?",
                a: "Sem limites artificiais. A memória do seu dispositivo é a única restrição. Computadores desktop podem lidar com centenas de imagens; dispositivos móveis podem funcionar melhor com lotes menores."
            },
            {
                q: "Por que escolher pdfcanada.ca para conversão PNG para PDF?",
                a: "Oferecemos conversão 100% grátis sem marca d'água, privacidade total através de processamento local, suporte a conversão em lote, e funcionamos em todos os dispositivos sem instalação de software."
            }
        ],

        ctaTitle: "Pronto para Converter Seus Arquivos PNG?",
        ctaButton: "Iniciar Conversão PNG para PDF",
        ctaSubtext: "100% Grátis. Sem Cadastro. Orgulhosamente Canadense e Privado.",
        quickAnswer: {
            question: "Como converter PNG para PDF de graça?",
            answer: "Vá para pdfcanada.ca, selecione seus arquivos PNG, organize-os se necessário, clique em Converter e baixe seu PDF. Sem uploads para servidor, sem cadastro, totalmente grátis.",
            tool: "Conversor PNG para PDF",
            steps: ["Selecione seus arquivos PNG", "Organize a ordem das páginas", "Clique em Converter", "Baixe seu PDF"]
        }
    }
});

export const PngToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Select PNG Files", "text": "Choose your PNG images from your device or drag and drop them into the converter." },
            { "@type": "HowToStep", "position": 2, "name": "Arrange Pages", "text": "Drag thumbnails to reorder pages in your desired sequence." },
            { "@type": "HowToStep", "position": 3, "name": "Convert to PDF", "text": "Click the convert button to process the images locally and generate your PDF." },
            { "@type": "HowToStep", "position": 4, "name": "Download PDF", "text": "Download your completed PDF document to your device." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/png-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'PNG en PDF' : (lang === 'pt' ? 'PNG para PDF' : 'PNG to PDF'), path: lang === 'fr' ? '/fr/guides/png-to-pdf' : (lang === 'pt' ? '/pt/guides/png-to-pdf' : '/guides/png-to-pdf') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileImage size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'PNG en PDF' : (lang === 'pt' ? 'PNG para PDF' : 'PNG to PDF'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="png-to-pdf" lang={lang} />

                    <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                        {t.intro}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-canada-red/10 text-canada-red font-black text-xl sm:text-2xl">
                                        {idx + 1}
                                    </span>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                                </div>
                                <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Features Tiles */}
                    <div className="grid md:grid-cols-3 gap-8 my-20">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Lock className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">100% Private</h3>
                            <p className="text-gray-500">Local browser processing. Your images never leave your device.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Zap className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Instant Speed</h3>
                            <p className="text-gray-500">No server wait times. Conversion happens in milliseconds.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Monitor className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Any Device</h3>
                            <p className="text-gray-500">Works on Windows, Mac, iPhone, iPad, and Android browsers.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? 'Questions Fréquentes' : (lang === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions')}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5 text-canada-red" /> {item.q}
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
                        <Link href={`/${lang}/png-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/png-to-pdf" category="convert" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/image-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Image vers PDF' : (lang === 'pt' ? 'Guia Imagem para PDF' : 'Image to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/jpg-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide JPG vers PDF' : (lang === 'pt' ? 'Guia JPG para PDF' : 'JPG to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/heic-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide HEIC vers PDF' : (lang === 'pt' ? 'Guia HEIC para PDF' : 'HEIC to PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
