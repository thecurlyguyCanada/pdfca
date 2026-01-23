'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Scissors, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart, HardDrive, ArrowRight, Minimize2, Laptop, Smartphone, Mail, Globe, Lock } from 'lucide-react';
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
            title: `How to Reduce PDF File Size (Ultimate ${CURRENT_YEAR} Guide) | pdfcanada.ca`,
            desc: `The complete guide to reducing PDF file size. Learn technical methods, compression types, and how to shrink documents by 90% securely without uploads.`
        },
        h1: `How to Reduce PDF File Size: The Ultimate Guide`,
        subtitle: "A comprehensive deep-dive into shrinking PDF documents for email, portals, and archives without losing professional quality.",

        intro: (
            <>
                <Image src="/images/guides/compress-pdf-guide.png" alt="Deep dive into PDF file size reduction" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                "File size exceeds limit."
                <br /><br />
                It is the digital equivalent of hitting a brick wall. You have spent hours perfecting your portfolio, finalizing a legal contract, or scanning tax documents, only to find that the receiving server—be it Gmail, Outlook, or a government portal—refuses to accept your file.
                <br /><br />
                In ${CURRENT_YEAR}, high-resolution cameras and modern software create stunningly detailed PDFs, but they also create massive file footprints. A single scanned page can easily exceed 5MB. When you need to send a 20-page document, you face a significant problem.
                <br /><br />
                This guide is not just a quick fix; it is a comprehensive resource on <strong>how to reduce PDF file size</strong> professionally. We will explore the technical reasons why PDFs get bloated, the difference between "lossless" and "lossy" reduction, and how to safely shrink confidential documents without ever uploading them to a cloud server.
            </>
        ),

        sections: [
            {
                id: "technical-deep-dive",
                title: "Anatomy of a Heavy PDF: Why Is Your File So Big?",
                content: (
                    <div className="space-y-6">
                        <p>To effectively reduce a file size, you must first understand what consumes the space. A PDF container is like a suitcase; its weight depends on what you pack inside. Here are the primary offenders:</p>

                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    1. Raster Images (The #1 Culprit)
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    When you scan a document or add photos, they are stored as grids of pixels (raster data). A standard A4 page scanned at 300 DPI (dots per inch) in color contains over 8 million pixels. Uncompressed, this single page could be 25MB. Even with standard JPEG encoding, it can remain heavy if the quality setting is set to "High."
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    2. Embedded Fonts
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    To ensure your document looks the same on every computer, PDFs "embed" font files. If you use standard fonts like Arial or Helvetica, this is negligible. However, if you use multiple custom typefaces, the PDF might carry the full character set for each font—including bold, italic, and bold-italic variations—adding megabytes of silent weight.
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    3. Hidden Metadata & Objects
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Professional PDF software often saves "edit history," "thumbnails," "comments," and "bookmarks." You might not see them on the printed page, but they exist in the code. We have seen 10MB files that were effectively blank pages but contained thousands of hidden, deleted revision objects.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-reduction-works",
                title: "How Our Reduction Engine Works",
                content: (
                    <div className="space-y-4">
                        <p>
                            When you use our <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-bold">Reduce PDF Size Tool</Link>, we don't just "zip" the file. We perform a sophisticated restructuring operation known as <strong>Resampling and optimization</strong>. This happens entirely in your browser using WebAssembly technology. For very large documents, you might also consider <Link href={`/${lang}/guides/split-pdf`} className="text-canada-red hover:underline decoration-dash underline-offset-4">splitting the PDF</Link> first.
                        </p>
                        <h4 className="font-bold mt-4">The Optimization Process:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Downsampling:</strong> We intelligently reduce the pixel count of images. For a computer screen, you rarely need more than 144 DPI (dots per inch). If your PDF contains 600 DPI scans meant for high-end printing, we reduce that density, cutting file size by up to 75% instantly.</li>
                            <li><strong>Re-encoding:</strong> We convert outdated image formats (like uncompressed TIFF) into modern, highly efficient JPEG or Flate streams.</li>
                            <li><strong>Stream Stripping:</strong> We identify and remove unused objects, clearing out the "digital dust" hidden in the file structure.</li>
                            <li><strong>Font Subsetting:</strong> If you only use the letters "A, B, and C" from a custom font, we remove the rest of the alphabet from the embedded file.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "choosing-level",
                title: "Choosing the Right Reduction Level",
                content: (
                    <div className="space-y-6">
                        <p>One size does not fit all. Reducing a legal contract requires a different approach than shrinking a personal receipt. Here is our expert breakdown of when to use each mode:</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-green-200 bg-green-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-green-800 text-lg mb-2">Level 1: Good (Lossless)</h3>
                                <div className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-4">Best For: Legal & Official</div>
                                <p className="text-green-900 text-sm leading-relaxed">
                                    <strong>How it works:</strong> Removes metadata and re-compresses streams without touching pixel data.
                                    <br /><br />
                                    <strong>Use case:</strong> Contracts, Invoices, Tax Forms, and medical records where text sharpness is legally required.
                                </p>
                            </div>

                            <div className="border border-blue-200 bg-blue-50 p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-blue-800 text-lg mb-2">Level 2: Balanced</h3>
                                <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-4">Best For: Email & Web</div>
                                <p className="text-blue-900 text-sm leading-relaxed">
                                    <strong>How it works:</strong> Downsamples images to 150 DPI and applies mild JPEG compression.
                                    <br /><br />
                                    <strong>Use case:</strong> Resumes, School Assignments, Presentation Decks, and general business correspondence.
                                </p>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-red-800 text-lg mb-2">Level 3: Extreme</h3>
                                <div className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-4">Best For: "Emergency" Uploads</div>
                                <p className="text-red-900 text-sm leading-relaxed">
                                    <strong>How it works:</strong> Aggressive downsampling to 72/96 DPI and stronger compression.
                                    <br /><br />
                                    <strong>Use case:</strong> Viewing on mobile phones, archiving old records, or forcing a huge file into a tiny 2MB portal limit.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "security-warning",
                title: "The Privacy Critical Warning",
                content: (
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                            <Lock className="text-yellow-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-yellow-900 mb-2">Server-Side vs. Client-Side Processing</h3>
                                <p className="text-yellow-800 mb-4">
                                    Searching for "Free PDF Compressor" brings up hundreds of tools. <strong>99% of them are unsafe for sensitive data.</strong>
                                    Most tools work by uploading your document to a remote server. Their server processes the file and sends it back.
                                    This means your bank statement, ID card, or employee contract exists on a stranger's computer, often in a different legal jurisdiction.
                                </p>
                                <p className="text-yellow-800 font-bold">
                                    pdfcanada.ca is different.
                                </p>
                                <p className="text-yellow-800 mt-2">
                                    We use <strong>Client-Side Technology</strong>. The code that reduces your PDF travels to <em>your</em> browser.
                                    The actual reduction happens on <em>your</em> computer's CPU. Your file never travels over the internet.
                                    For lawyers, doctors, and privacy-conscious Canadians, this is the only acceptable way to use online tools.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "os-native-methods",
                title: "Native OS Methods (Without Online Tools)",
                content: (
                    <div className="space-y-6">
                        <p>Before using any online tool, you can try built-in methods on your computer. They are often less effective than our dedicated engine but are good for quick fixes.</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Mac Users (Preview App)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Open your PDF in <strong>Preview</strong>.</li>
                                    <li>Go to <strong>File {'>'} Export</strong>.</li>
                                    <li>Click on the <strong>Quartz Filter</strong> dropdown menu.</li>
                                    <li>Select <strong>Reduce File Size</strong>.</li>
                                    <li>Save the file.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limit:</strong> The default Mac filter is very aggressive and often makes text blurry. It's an "Extreme" setting with no adjustment.
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Windows Users (Print to PDF)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Open the PDF in Chrome or Edge.</li>
                                    <li>Press <strong>Ctrl + P</strong> (Print).</li>
                                    <li>Change the printer to <strong>"Microsoft Print to PDF"</strong>.</li>
                                    <li>Click Print and save as a new file.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limit:</strong> This "flattens" the file. You will lose bookmarks, links, and fillable forms, but it often shrinks size significantly.
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "glossary",
                title: "Glossary: Compression vs. Re-creation vs. Zipping",
                content: (
                    <div className="space-y-4">
                        <p>There are three ways to make a file smaller. Knowing the difference saves you headaches.</p>
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">1. Compression (Resampling)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>What it is:</strong> Reducing the quality of images inside the PDF.
                                    <br /><strong>Pros:</strong> Drastic size reduction. Text remains sharp.
                                    <br /><strong>Cons:</strong> Images become pixelated if overdone.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">2. Flattening (Print-to-PDF)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>What it is:</strong> Merging all layers (text, images, forms) into a single "picture" of a page.
                                    <br /><strong>Pros:</strong> "Locks" the document from editing. Removes hidden data.
                                    <br /><strong>Cons:</strong> You can no longer select text or click links.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">3. Zipping (Archiving)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>What it is:</strong> Putting the PDF inside a .zip container.
                                    <br /><strong>Pros:</strong> Lossless. Good for sending bundles of files.
                                    <br /><strong>Cons:</strong> The recipient must "unzip" it to view. Doesn't actually shrink PDF data much.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "sustainability",
                title: "Digital Sustainability: The Invisible Benefit",
                content: (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-green-600" size={28} />
                            <h4 className="text-xl font-bold text-green-900 dark:text-green-100">Reduce Files, Reduce Carbon</h4>
                        </div>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            Every gigabyte stored in a cloud data center consumes electricity 24/7/365. Every megabyte sent via email travels through dozens of routers, each using power.
                        </p>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                            <li className="flex items-center gap-2">
                                <CheckCircle size={16} />
                                <strong>Data Centers:</strong> Reducing a 20MB file to 2MB saves 90% of the storage energy required for that file, forever.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle size={16} />
                                <strong>Bandwidth:</strong> Smaller files load faster on mobile networks, saving battery life for both sender and receiver.
                            </li>
                        </ul>
                        <p className="mt-4 text-sm font-bold text-green-700 dark:text-green-300">
                            By regularly compressing your digital archives, you contribute to a leaner, greener internet.
                        </p>
                    </div>
                )
            },
            {
                id: "pre-send-checklist",
                title: "The Ultimate Pre-Send Checklist",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                        <p className="mb-4">Before you attach that file to an email, run through this 5-second audit to avoid embarrassment:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Visual Check:</strong> Zoom to 100%. Is the text clear? If it's blurry, you used too much compression.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Size & Limit:</strong> Is it actually under the limit? (e.g., 20MB for Gmail). Don't guess; check the file properties.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Interactive Elements:</strong> Did flattening break your links or form fields? Click them to verify.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Metadata Scrub:</strong> Did you remove hidden comments or track changes? (Our 'Lossless' mode handles this).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Browser Test:</strong> Open the file in Chrome/Edge. If it looks good there, it's safe to send.</span>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "troubleshooting-limits",
                title: "Troubleshooting: When Reduction Fails",
                content: (
                    <div className="space-y-4">
                        <p>Sometimes you press "Compress" and the file size barely changes. Why?</p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li><strong>The "Already Optimized" File:</strong> If a file has predominantly text (vector data) and no images, it is already extremely efficient. You cannot compress pure text much further than it already is.</li>
                            <li><strong>The "Zip" Misconception:</strong> PDFs are already compressed containers. Zipping a PDF rarely saves space because the internal data streams are already deflated.</li>
                            <li><strong>Corrupt Structure:</strong> Sometimes a PDF is just broken internally. Opening it in Chrome and choosing "Print to PDF" can sometimes re-write the structure, fixing the errors and allowing for proper compression afterwards.</li>
                        </ul>
                        <p className="mt-4 font-bold">Pro Tip: Pre-Processing for Maximum Gains</p>
                        <p>If you absolutely must shrink a file and the standard tool isn't enough, try this workflow:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Use our <Link href={`/${lang}/pdf-page-remover`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Delete Pages Tool</Link> to remove ANY unnecessary content (covers, blank pages).</li>
                            <li>Convert images to B&W before creating the PDF (color data takes up 3x the space of grayscale).</li>
                            <li>Finally, run the <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-bold">Reduce Tool</Link> on "Extreme" mode.</li>
                            <li>If the file is still too large, use the <Link href={`/${lang}/guides/split-pdf`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Split PDF Tool</Link> to divide it into smaller parts.</li>
                        </ol>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Why do email providers like Outlook and Gmail have file size limits?",
                a: "Email was never designed to be a file transfer protocol. Large attachments clog mail servers and consume massive bandwidth. The 25MB standard limit helps keep the global email infrastructure stable. For files larger than 25MB, you must reduce them or use a cloud link (like Google Drive)."
            },
            {
                q: "What is the difference between DPI and PPI in PDF reduction?",
                a: "DPI (Dots Per Inch) and PPI (Pixels Per Inch) are often used interchangeably. In PDF reduction, this refers to pixel density. A 300 DPI image is print-quality. A 72 DPI image is 'screen' quality. By reducing an image from 300 to 72 DPI, you reduce the pixel count (and file size) by a factor of roughly 16x, which is why reduction is so effective on scanned documents."
            },
            {
                q: "Will reducing file size remove my digital signature?",
                a: "It might. Digital signatures rely on a precise, byte-perfect calculation of the file's contents. Because reduction essentially re-writes the whole file structure and changes image data, it breaks this calculation, invalidating the signature. <strong>Always reduce your file BEFORE signing it.</strong>"
            },
            {
                q: "Can I reduce a portfolio PDF without ruining the photos?",
                a: "Yes, but be careful. Use the 'Good' or 'Balanced' setting. Do not use 'Extreme'. 'Balanced' is specifically tuned to keep images looking sharp on standard monitors while discarding data that the human eye can't perceive at normal viewing distances."
            },
            {
                q: "Why is the reduction taking so long?",
                a: "Since we process the file locally on your device for security, the speed depends on your computer's CPU, not your internet connection. A complex 50-page architectural blueprint with thousands of vector lines forces your browser to work hard. It might take 10-20 seconds for complex files."
            },
            {
                q: "Does this tool work on mobile devices (iPhone/Android)?",
                a: "Yes! Modern smartphones have powerful processors. Our tool works perfectly in Safari on iOS and Chrome on Android. It is often the easiest way to shrink a photo you just took of a document before uploading it to a website."
            },
            {
                q: "Is there a daily limit to how many files I can reduce?",
                a: "No. Unlike other 'freemium' services that cap you at 2 files per hour, pdfcanada.ca is unlimited. Because the processing is done by your own hardware, it costs us almost nothing to let you use it as much as you want. Enjoy!"
            }
        ],

        quickAnswer: {
            question: "How to reduce PDF file size for government uploads?",
            answer: "Most portals (CRA, IRCC) require files under 4MB. 1) Upload your document to pdfcanada.ca/compress-pdf. 2) Select 'Extreme' compression if your file is over 10MB, or 'Balanced' if it's smaller. 3) Download and check the size. If it's still too big, split the file into two parts.",
            tool: "Reduce PDF",
            steps: ["Upload", "Select Mode", "Download"]
        },

        ctaTitle: "Shrink Your Documents Securely",
        ctaButton: "Start Reducing Now",
        ctaSubtext: "No signup. No limits. 100% Client-Side.",
    },
    fr: {
        seo: {
            title: `Comment Réduire la Taille d'un PDF (Guide Ultime ${CURRENT_YEAR}) | pdfcanada.ca`,
            desc: `Le guide complet pour réduire la taille des fichiers PDF. Apprenez les méthodes techniques et comment réduire les documents de 90% sans téléchargement.`
        },
        h1: `Comment Réduire la Taille d'un PDF : Le Guide Ultime`,
        subtitle: "Une analyse complète pour réduire vos documents PDF pour les courriels, les portails et les archives sans perdre en qualité professionnelle.",

        intro: (
            <>
                <Image src="/images/guides/compress-pdf-guide.png" alt="Analyse approfondie de la réduction de taille PDF" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                "La taille du fichier dépasse la limite."
                <br /><br />
                C'est l'équivalent numérique de heurter un mur de briques. Vous avez passé des heures à perfectionner votre portfolio, à finaliser un contrat légal ou à scanner des documents fiscaux, pour découvrir que le serveur de réception—que ce soit Gmail, Outlook ou un portail gouvernemental—refuse d'accepter votre fichier.
                <br /><br />
                En ${CURRENT_YEAR}, les caméras haute résolution et les logiciels modernes créent des PDF incroyablement détaillés, mais ils créent aussi des empreintes de fichiers massives. Une seule page scannée peut facilement dépasser 5 Mo. Lorsque vous devez envoyer un document de 20 pages, vous faites face à un problème majeur.
                <br /><br />
                Ce guide n'est pas seulement une solution rapide ; c'est une ressource complète sur <strong>comment réduire la taille d'un fichier PDF</strong> professionnellement. Nous explorerons les raisons techniques pour lesquelles les PDF gonflent, la différence entre la réduction "sans perte" et "avec perte", et comment réduire en toute sécurité des documents confidentiels sans jamais les envoyer sur un serveur cloud.
            </>
        ),

        sections: [
            {
                id: "technical-deep-dive",
                title: "Anatomie d'un PDF Lourd : Pourquoi Votre Fichier est-il si Gros ?",
                content: (
                    <div className="space-y-6">
                        <p>Pour réduire efficacement une taille de fichier, vous devez d'abord comprendre ce qui consomme de l'espace. Un conteneur PDF est comme une valise ; son poids dépend de ce que vous mettez à l'intérieur. Voici les principaux coupables :</p>

                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    1. Images Raster (Le coupable n°1)
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorsque vous scannez un document ou ajoutez des photos, elles sont stockées sous forme de grilles de pixels (données raster). Une page A4 standard scannée à 300 DPI (points par pouce) en couleur contient plus de 8 millions de pixels. Non compressée, cette seule page pourrait peser 25 Mo.
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    2. Polices Intégrées
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Pour garantir que votre document s'affiche de la même manière sur chaque ordinateur, les PDF "intègrent" les fichiers de police. Si vous utilisez plusieurs polices personnalisées, le PDF peut transporter le jeu de caractères complet pour chaque police, ajoutant des mégaoctets de poids silencieux.
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    3. Métadonnées et Objets Cachés
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Les logiciels PDF professionnels enregistrent souvent l'historique des modifications, les vignettes et les commentaires. Bien qu'invisibles sur la page imprimée, ils existent dans le code, ajoutant parfois un poids inutile considérable.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-reduction-works",
                title: "Comment Fonctionne Notre Moteur de Réduction",
                content: (
                    <div className="space-y-4">
                        <p>
                            Lorsque vous utilisez notre <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-bold">Outil de Réduction PDF</Link>, nous ne nous contentons pas de "zipper" le fichier. Nous effectuons une opération de restructuration sophistiquée appelée <strong>Rééchantillonnage et optimisation</strong>. Cela se passe entièrement dans votre navigateur grâce à la technologie WebAssembly. Pour les très gros documents, vous pouvez aussi envisager de <Link href={`/${lang}/guides/split-pdf`} className="text-canada-red hover:underline decoration-dash underline-offset-4">diviser le PDF</Link> d'abord.
                        </p>
                        <h4 className="font-bold mt-4">Le Processus d'Optimisation :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Sous-échantillonnage :</strong> Nous réduisons intelligemment le nombre de pixels des images. Pour un écran, vous avez rarement besoin de plus de 144 DPI. Réduire cette densité peut diminuer la taille du fichier de 75 % instantanément.</li>
                            <li><strong>Ré-encodage :</strong> Nous convertissons les formats d'image obsolètes (comme TIFF non compressé) en flux JPEG ou Flate modernes et très efficaces.</li>
                            <li><strong>Nettoyage de Flux :</strong> Nous identifions et supprimons les objets inutilisés, nettoyant la "poussière numérique" cachée dans la structure du fichier.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "choosing-level",
                title: "Choisir le Bon Niveau de Réduction",
                content: (
                    <div className="space-y-6">
                        <p>Une taille unique ne convient pas à tous. Réduire un contrat légal nécessite une approche différente de celle d'un reçu personnel. Voici notre analyse d'expert :</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-green-200 bg-green-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-green-800 text-lg mb-2">Niveau 1 : Bon (Sans Perte)</h3>
                                <div className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-4">Idéal Pour : Juridique & Officiel</div>
                                <p className="text-green-900 text-sm leading-relaxed">
                                    <strong>Comment ça marche :</strong> Supprime les métadonnées sans toucher aux données des pixels.
                                    <br /><br />
                                    <strong>Cas d'usage :</strong> Contrats, Factures, Formulaires Fiscaux où la netteté du texte est requise.
                                </p>
                            </div>

                            <div className="border border-blue-200 bg-blue-50 p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-blue-800 text-lg mb-2">Niveau 2 : Équilibré</h3>
                                <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-4">Idéal Pour : Email & Web</div>
                                <p className="text-blue-900 text-sm leading-relaxed">
                                    <strong>Comment ça marche :</strong> Sous-échantillonne les images à 150 DPI avec une compression JPEG légère.
                                    <br /><br />
                                    <strong>Cas d'usage :</strong> CVs, Devoirs Scolaires, Présentations et correspondance professionnelle.
                                </p>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-red-800 text-lg mb-2">Niveau 3 : Extrême</h3>
                                <div className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-4">Urgence Seulement</div>
                                <p className="text-red-900 text-sm leading-relaxed">
                                    <strong>Comment ça marche :</strong> Sous-échantillonnage agressif à 72/96 DPI.
                                    <br /><br />
                                    <strong>Cas d'usage :</strong> Consultation sur mobile, archivage ancien, ou limites strictes de portails.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "security-warning",
                title: "Avertissement Critique de Confidentialité",
                content: (
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                            <Lock className="text-yellow-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-yellow-900 mb-2">Traitement Serveur vs Client</h3>
                                <p className="text-yellow-800 mb-4">
                                    La plupart des outils "Compresseur PDF Gratuit" fonctionnent en envoyant votre fichier sur un serveur distant.
                                    <strong>C'est un risque de sécurité</strong> pour vos relevés bancaires ou contrats.
                                </p>
                                <p className="text-yellow-800 mt-2">
                                    pdfcanada.ca est différent. Nous utilisons la <strong>Technologie Client-Side</strong>. Le code voyage vers <em>votre</em> navigateur.
                                    La réduction réelle se produit sur le processeur de <em>votre</em> ordinateur. Votre fichier ne voyage jamais sur Internet.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "os-native-methods",
                title: "Méthodes Natives (Sans Outils en Ligne)",
                content: (
                    <div className="space-y-6">
                        <p>Avant d'utiliser un outil en ligne, vous pouvez essayer les méthodes intégrées. Elles sont souvent moins efficaces mais pratiques pour des solutions rapides.</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Utilisateurs Mac (Aperçu)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Ouvrez votre PDF dans <strong>Aperçu</strong>.</li>
                                    <li>Allez à <strong>Fichier {'>'} Exporter</strong>.</li>
                                    <li>Cliquez sur le menu <strong>Filtre Quartz</strong>.</li>
                                    <li>Sélectionnez <strong>Reduce File Size</strong>.</li>
                                    <li>Enregistrez.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limite :</strong> Le filtre Mac par défaut est très agressif et rend souvent le texte flou.
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Utilisateurs Windows (Print to PDF)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Ouvrez le PDF dans Chrome ou Edge.</li>
                                    <li>Appuyez sur <strong>Ctrl + P</strong> (Imprimer).</li>
                                    <li>Changez l'imprimante pour <strong>"Microsoft Print to PDF"</strong>.</li>
                                    <li>Imprimez et enregistrez.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limite :</strong> Cela "aplatit" le fichier. Vous perdrez les signets et les liens, mais cela réduit souvent la taille.
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "glossary",
                title: "Glossaire : Compression vs Création vs Zipping",
                content: (
                    <div className="space-y-4">
                        <p>Il existe trois façons de réduire un fichier. Connaître la différence vous évite des maux de tête.</p>
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">1. Compression (Rééchantillonnage)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>C'est quoi :</strong> Réduire la qualité des images dans le PDF.
                                    <br /><strong>Avantages :</strong> Réduction drastique. Le texte reste net.
                                    <br /><strong>Inconvénients :</strong> Les images deviennent pixélisées si excessif.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">2. Aplatissement (Print-to-PDF)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>C'est quoi :</strong> Fusionner tous les calques en une seule "image" de page.
                                    <br /><strong>Avantages :</strong> "Verrouille" le document. Supprime les données cachées.
                                    <br /><strong>Inconvénients :</strong> Perte de sélection de texte et de liens.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">3. Zipping (Archivage)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>C'est quoi :</strong> Mettre le PDF dans un conteneur .zip.
                                    <br /><strong>Avantages :</strong> Sans perte. Bon pour envoyer des lots.
                                    <br /><strong>Inconvénients :</strong> Le destinataire doit "dézipper". Ne réduit pas vraiment les données PDF.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "sustainability",
                title: "Durabilité Numérique : L'Avantage Invisible",
                content: (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-green-600" size={28} />
                            <h4 className="text-xl font-bold text-green-900 dark:text-green-100">Réduire Fichiers, Réduire Carbone</h4>
                        </div>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            Chaque gigaoctet stocké consomme de l'électricité 24/7. Chaque mégaoctet envoyé voyage via des douzaines de routeurs.
                        </p>
                        <p className="mt-4 text-sm font-bold text-green-700 dark:text-green-300">
                            En compressant régulièrement vos archives, vous contribuez à un internet plus vert.
                        </p>
                    </div>
                )
            },
            {
                id: "pre-send-checklist",
                title: "La Liste de Vérification Avant Envoi",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                        <p className="mb-4">Avant de joindre ce fichier à un email, effectuez cet audit de 5 secondes pour éviter tout problème :</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Contrôle Visuel :</strong> Zoomez à 100%. Le texte est-il clair ? S'il est flou, la compression est trop forte.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Taille & Limite :</strong> Est-il sous la limite ? (ex: 20 Mo pour Gmail). Vérifiez les propriétés.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Éléments Interactifs :</strong> L'aplatissement a-t-il cassé vos liens ? Cliquez pour vérifier.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Nettoyage Métadonnées :</strong> Avez-vous supprimé les commentaires cachés ? (Notre mode 'Sans Perte' le fait).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Test Navigateur :</strong> Ouvrez le fichier dans Chrome. S'il s'affiche bien, il est prêt à l'envoi.</span>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "troubleshooting-limits",
                title: "Dépannage : Quand la Réduction Échoue",
                content: (
                    <div className="space-y-4">
                        <p>Parfois, vous appuyez sur "Compresser" et la taille du fichier change à peine. Pourquoi ?</p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li><strong>Le Fichier "Déjà Optimisé" :</strong> Si un fichier contient principalement du texte (données vectorielles) et aucune image, il est déjà optimisé. On ne peut pas compresser le texte pur beaucoup plus.</li>
                            <li><strong>La Structure Corrompue :</strong> Parfois, un PDF est simplement brisé en interne. L'ouvrir dans Chrome et choisir "Imprimer en PDF" peut parfois réécrire la structure, corrigeant les erreurs.</li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Pourquoi les fournisseurs d'emails ont-ils des limites de taille ?",
                a: "L'email n'a jamais été conçu pour le transfert de gros fichiers. Les grosses pièces jointes saturent les serveurs. La limite standard de 25 Mo aide à maintenir la stabilité de l'infrastructure mondiale."
            },
            {
                q: "La réduction de la taille supprimera-t-elle ma signature numérique ?",
                a: "Probablement. Les signatures numériques reposent sur un calcul précis du contenu du fichier. Comme la réduction réécrit la structure, elle brise ce calcul, invalidant la signature. <strong>Réduisez toujours votre fichier AVANT de le signer.</strong>"
            },
            {
                q: "Pourquoi la réduction prend-elle du temps ?",
                a: "Comme nous traitons le fichier localement pour la sécurité, la vitesse dépend du processeur de votre ordinateur, pas de votre connexion internet. Un plan architectural complexe peut prendre 10-20 secondes."
            },
            {
                q: "Est-ce que cela fonctionne sur mobile ?",
                a: "Oui ! Les smartphones modernes ont des processeurs puissants. Notre outil fonctionne parfaitement sur Safari (iOS) et Chrome (Android)."
            }
        ],

        quickAnswer: {
            question: "Comment réduire PDF pour les portails gouvernementaux ?",
            answer: "Les portails exigent souvent moins de 4 Mo. 1) Uploadez sur pdfcanada.ca. 2) Sélectionnez 'Extrême' si > 10 Mo, ou 'Équilibré'. 3) Téléchargez et vérifiez la taille. Si c'est encore trop gros, divisez le fichier.",
            tool: "Réduire PDF",
            steps: ["Uploader", "Sélectionner Mode", "Télécharger"]
        },

        ctaTitle: "Réduisez Vos Documents en Toute Sécurité",
        ctaButton: "Commencer la Réduction",
        ctaSubtext: "Sans inscription. Sans limites. 100% Client-Side.",
    },
    pt: {
        seo: {
            title: `Como Reduzir Tamanho de PDF (Guia Definitivo ${CURRENT_YEAR}) | pdfcanada.ca`,
            desc: `O guia completo para reduzir o tamanho de arquivos PDF. Aprenda métodos técnicos e como diminuir documentos em 90% sem upload.`
        },
        h1: `Como Reduzir Tamanho de PDF: O Guia Definitivo`,
        subtitle: "Uma análise profunda de como diminuir documentos PDF para e-mail, portais e arquivos sem perder qualidade profissional.",

        intro: (
            <>
                <Image src="/images/guides/compress-pdf-guide.png" alt="Análise profunda de redução de tamanho PDF" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                "O tamanho do arquivo excede o limite."
                <br /><br />
                É o equivalente digital de bater em uma parede. Você passou horas aperfeiçoando seu portfólio ou finalizando um contrato, apenas para descobrir que o servidor de recebimento recusa seu arquivo.
                <br /><br />
                Em ${CURRENT_YEAR}, câmeras de alta resolução criam PDFs incrivelmente detalhados, mas também massivos. Uma única página digitalizada pode exceder 5MB.
                <br /><br />
                Este guia não é apenas uma solução rápida; é um recurso abrangente sobre <strong>como reduzir o tamanho do arquivo PDF</strong> profissionalmente. Exploraremos as razões técnicas pelas quais os PDFs incham e como diminuir documentos confidenciais com segurança, sem nunca enviá-los para um servidor em nuvem.
            </>
        ),

        sections: [
            {
                id: "technical-deep-dive",
                title: "Anatomia de um PDF Pesado: Por que seu Arquivo é Tão Grande?",
                content: (
                    <div className="space-y-6">
                        <p>Para reduzir efetivamente o tamanho, você precisa entender o que consome espaço. Um contêiner PDF é como uma mala; seu peso depende do que você coloca dentro:</p>

                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    1. Imagens Raster (O maior culpado)
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Quando você digitaliza um documento, ele é armazenado como grades de pixels. Uma página A4 digitalizada a 300 DPI em cores contém mais de 8 milhões de pixels. Descompactada, essa única página pode pesar 25MB.
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    2. Fontes Incorporadas
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Para garantir que seu documento tenha a mesma aparência em todos os computadores, os PDFs "incorporam" arquivos de fonte. Se você usar muitas fontes personalizadas, o PDF pode carregar o conjunto completo de caracteres, adicionando peso inútil.
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2 mb-2">
                                    3. Metadados e Objetos Ocultos
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Softwares PDF profissionais salvam histórico de edições, miniaturas e comentários. Embora invisíveis na página impressa, eles existem no código, inflando o arquivo.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-reduction-works",
                title: "Como Funciona Nosso Motor de Redução",
                content: (
                    <div className="space-y-4">
                        <p>
                            Ao usar nossa <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-bold">Ferramenta de Redução PDF</Link>, realizamos uma reestruturação sofisticada chamada <strong>Reamostragem e Otimização</strong>, inteiramente no seu navegador via WebAssembly. Para documentos muito grandes, você também pode considerar <Link href={`/${lang}/guides/split-pdf`} className="text-canada-red hover:underline decoration-dash underline-offset-4">dividir o PDF</Link> primeiro.
                        </p>
                        <h4 className="font-bold mt-4">O Processo de Otimização:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Downsampling:</strong> Reduzimos a contagem de pixels das imagens. Para tela, você raramente precisa de mais de 144 DPI. Reduzir essa densidade pode diminuir o tamanho do arquivo em 75% instantaneamente.</li>
                            <li><strong>Re-codificação:</strong> Convertemos formatos de imagem antigos em fluxos JPEG ou Flate modernos e eficientes.</li>
                            <li><strong>Limpeza de Fluxo:</strong> Removemos objetos não utilizados, limpando a "poeira digital" da estrutura do arquivo.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "choosing-level",
                title: "Escolhendo o Nível de Redução Correto",
                content: (
                    <div className="space-y-6">
                        <p>Um tamanho não serve para todos. Reduzir um contrato legal requer uma abordagem diferente de reduzir um recibo pessoal:</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-green-200 bg-green-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-green-800 text-lg mb-2">Nível 1: Bom (Sem Perdas)</h3>
                                <div className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-4">Melhor Para: Jurídico & Oficial</div>
                                <p className="text-green-900 text-sm leading-relaxed">
                                    <strong>Como funciona:</strong> Remove metadados sem tocar nos dados de pixel.
                                    <br /><br />
                                    <strong>Uso:</strong> Contratos, Faturas, Formulários Fiscais onde a nitidez é exigida.
                                </p>
                            </div>

                            <div className="border border-blue-200 bg-blue-50 p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-blue-800 text-lg mb-2">Nível 2: Equilibrado</h3>
                                <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-4">Melhor Para: Email & Web</div>
                                <p className="text-blue-900 text-sm leading-relaxed">
                                    <strong>Como funciona:</strong> Downsampling para 150 DPI com compressão JPEG suave.
                                    <br /><br />
                                    <strong>Uso:</strong> Currículos, Trabalhos Escolares, Apresentações.
                                </p>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-red-800 text-lg mb-2">Nível 3: Extremo</h3>
                                <div className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-4">Apenas Emergência</div>
                                <p className="text-red-900 text-sm leading-relaxed">
                                    <strong>Como funciona:</strong> Downsampling agressivo para 72/96 DPI.
                                    <br /><br />
                                    <strong>Uso:</strong> Visualização no celular ou limites estritos de portais.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "security-warning",
                title: "Aviso Crítico de Privacidade",
                content: (
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                            <Lock className="text-yellow-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-yellow-900 mb-2">Processamento no Servidor vs. Cliente</h3>
                                <p className="text-yellow-800 mb-4">
                                    A maioria das ferramentas "Compressor PDF Grátis" funciona enviando seu arquivo para um servidor remoto.
                                    <strong>Isso é um risco de segurança</strong>.
                                </p>
                                <p className="text-yellow-800 mt-2">
                                    O pdfcanada.ca é diferente. Usamos <strong>Tecnologia Client-Side</strong>. O código viaja para <em>seu</em> navegador.
                                    A redução acontece no <em>seu</em> computador. Seu arquivo nunca viaja pela internet.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "os-native-methods",
                title: "Métodos Nativos (Sem Ferramentas Online)",
                content: (
                    <div className="space-y-6">
                        <p>Antes de usar qualquer ferramenta online, você pode tentar os métodos integrados. Eles costumam ser menos eficazes, mas bons para soluções rápidas.</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Usuários Mac (App Preview)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Abra o PDF no <strong>Preview</strong>.</li>
                                    <li>Vá para <strong>Arquivo {'>'} Exportar</strong>.</li>
                                    <li>Clique no menu <strong>Filtro Quartz</strong>.</li>
                                    <li>Selecione <strong>Reduce File Size</strong>.</li>
                                    <li>Salve.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limite:</strong> O filtro padrão do Mac é muito agressivo e muitas vezes deixa o texto desfocado.
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
                                <h4 className="font-bold flex items-center gap-2 mb-4">
                                    <Laptop size={20} className="text-gray-600" />
                                    Usuários Windows (Print to PDF)
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>Abra o PDF no Chrome ou Edge.</li>
                                    <li>Pressione <strong>Ctrl + P</strong> (Imprimir).</li>
                                    <li>Mude a impressora para <strong>"Microsoft Print to PDF"</strong>.</li>
                                    <li>Imprima e salve.</li>
                                </ol>
                                <div className="mt-4 text-xs bg-orange-100 p-2 rounded text-orange-800 border border-orange-200">
                                    <strong>Limite:</strong> Isso "achata" o arquivo. Você perderá favoritos e links, mas muitas vezes reduz o tamanho.
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "glossary",
                title: "Glossário: Compressão vs. Achatamento vs. Zipping",
                content: (
                    <div className="space-y-4">
                        <p>Existem três maneiras de diminuir um arquivo. Conhecer a diferença evita dores de cabeça.</p>
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">1. Compressão (Reamostragem)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>O que é:</strong> Reduzir a qualidade das imagens dentro do PDF.
                                    <br /><strong>Prós:</strong> Redução drástica. O texto permanece nítido.
                                    <br /><strong>Contras:</strong> Imagens ficam pixeladas se exagerado.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">2. Achatamento (Print-to-PDF)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>O que é:</strong> Mesclar todas as camadas em uma única "foto" da página.
                                    <br /><strong>Prós:</strong> "Trava" o documento. Remove dados ocultos.
                                    <br /><strong>Contras:</strong> Você perde seleção de texto e links.
                                </p>
                            </div>
                            <div className="py-4">
                                <h5 className="font-bold text-lg mb-1">3. Zipping (Arquivamento)</h5>
                                <p className="text-gray-600 dark:text-gray-400">
                                    <strong>O que é:</strong> Colocar o PDF dentro de um contêiner .zip.
                                    <br /><strong>Prós:</strong> Sem perdas. Bom para enviar pacotes.
                                    <br /><strong>Contras:</strong> O destinatário deve "descompactar". Não reduz muito os dados do PDF.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "sustainability",
                title: "Sustentabilidade Digital: O Benefício Invisível",
                content: (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-green-600" size={28} />
                            <h4 className="text-xl font-bold text-green-900 dark:text-green-100">Reduzir Arquivos, Reduzir Carbono</h4>
                        </div>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            Cada gigabyte armazenado consome eletricidade 24/7. Cada megabyte enviado viaja por dezenas de roteadores.
                        </p>
                        <p className="mt-4 text-sm font-bold text-green-700 dark:text-green-300">
                            Ao comprimir regularmente seus arquivos, você contribui para uma internet mais verde.
                        </p>
                    </div>
                )
            },
            {
                id: "pre-send-checklist",
                title: "A Lista de Verificação Pré-Envio",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                        <p className="mb-4">Antes de anexar esse arquivo a um e-mail, faça esta auditoria de 5 segundos:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Verificação Visual:</strong> Zoom em 100%. O texto está claro? Se estiver desfocado, muita compressão foi usada.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Tamanho & Limite:</strong> Está abaixo do limite? (ex: 20MB para Gmail). Verifique as propriedades.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Elementos Interativos:</strong> O achatamento quebrou seus links? Clique para verificar.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Limpeza de Metadados:</strong> Você removeu comentários ocultos? (Nosso modo 'Sem Perdas' faz isso).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-canada-red shrink-0 mt-1" size={18} />
                                <span><strong>Teste no Navegador:</strong> Abra o arquivo no Chrome. Se parecer bom, é seguro enviar.</span>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "troubleshooting-limits",
                title: "Solução de Problemas: Quando a Redução Falha",
                content: (
                    <div className="space-y-4">
                        <p>Às vezes você clica em "Comprimir" e o tamanho do arquivo quase não muda. Por quê?</p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li><strong>Arquivo "Já Otimizado":</strong> Se um arquivo tem principalmente texto e nenhuma imagem, ele já é extremamente eficiente. Não se pode comprimir muito mais.</li>
                            <li><strong>Estrutura Corrompida:</strong> Às vezes, um PDF está quebrado internamente. Abri-lo no Chrome e escolher "Imprimir para PDF" pode consertar os erros.</li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Por que provedores de e-mail têm limites de tamanho?",
                a: "O e-mail não foi projetado para transferência de arquivos grandes. O limite padrão de 25MB ajuda a manter a estabilidade da infraestrutura global."
            },
            {
                q: "A redução de tamanho removerá minha assinatura digital?",
                a: "Provavelmente. Assinaturas digitais dependem de um cálculo preciso do conteúdo do arquivo. Como a redução reescreve a estrutura, ela quebra esse cálculo. <strong>Sempre reduza seu arquivo ANTES de assiná-lo.</strong>"
            },
            {
                q: "Por que a redução demora tanto?",
                a: "Como processamos o arquivo localmente para segurança, a velocidade depende do processador do seu computador, não da internet. Um plano complexo pode levar 10-20 segundos."
            },
            {
                q: "Isso funciona em dispositivos móveis?",
                a: "Sim! Smartphones modernos têm processadores poderosos. Nossa ferramenta funciona perfeitamente no Safari (iOS) e Chrome (Android)."
            }
        ],

        quickAnswer: {
            question: "Como reduzir PDF para portais do governo?",
            answer: "Portais geralmente exigem menos de 4MB. 1) Envie para pdfcanada.ca. 2) Selecione 'Extremo' se > 10MB, ou 'Equilibrado'. 3) Baixe e verifique o tamanho.",
            tool: "Reduzir PDF",
            steps: ["Enviar", "Selecionar Modo", "Baixar"]
        },

        ctaTitle: "Reduza seus Documentos com Segurança",
        ctaButton: "Começar Redução",
        ctaSubtext: "Sem cadastro. Sem limites. 100% Client-Side.",
    }
});

export const ReducePdfSizeGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath={`/${lang}/guides/reduce-pdf-size`}
                faqs={t.faq}
                lang={lang}
                datePublished="2024-03-21"
                dateModified={new Date().toISOString().split('T')[0]}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Réduire PDF' : (lang === 'pt' ? 'Reduzir PDF' : 'Reduce PDF'), path: `/${lang}/guides/reduce-pdf-size` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Minimize2 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Guide Réduire PDF' : (lang === 'pt' ? 'Guia Reduzir PDF' : 'Reduce PDF Guide'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <ToolPromo tool="compress-pdf" lang={lang} />
                    <section className="animate-fade-in">
                        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
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

                    <section className="text-center py-6 sm:py-8 md:py-12 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/compress-pdf`}
                            aria-label={t.ctaButton}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Minimize2 size={20} className="sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            FAQ
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

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/delete-pdf-pages`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Supprimer Pages' : (lang === 'pt' ? 'Guia Excluir Páginas' : 'Delete Pages Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
