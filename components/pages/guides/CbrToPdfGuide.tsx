'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, FileText, Download, Shield, Zap, CheckCircle, Info, ArrowRight, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR, translations } from '../../../utils/i18n';
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
            title: "How to Convert CBR to PDF | Free Comic Book Conversion Guide | pdfcanada.ca",
            desc: `Read your comics on any device. Our ${CURRENT_YEAR} guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device.`
        },
        h1: "How to Convert CBR/CBZ to PDF",
        subtitle: "The definitive guide to taking your digital comics anywhere.",
        intro: (
            <>
                If you are a digital comic enthusiast, you have likely encountered <strong>CBR</strong> and <strong>CBZ</strong> files. While these formats are perfect for dedicated comic readers, they can be difficult to open on standard devices like tablets or work computers.
                <br /><br />
                The solution? <strong>Convert CBR to PDF</strong>. This guide will show you how to transform your comic archives into universal PDF documents without compromising your privacy or downloading bulky software.
            </>
        ),

        // AEO Quick Answer Box - AI-optimized direct answer
        quickAnswer: {
            question: "How do I convert CBR to PDF?",
            answer: "To convert CBR to PDF: 1) Open pdfcanada.ca/cbr-to-pdf, 2) Select your CBR or CBZ file, 3) Wait for automatic extraction (2-5 seconds), 4) Download your PDF. The conversion happens entirely in your browser—no file uploads, no software installation required.",
            time: "10-30 seconds",
            cost: "Free",
            privacy: "100% local processing"
        },

        // At-a-Glance Summary for quick scanning
        atGlance: {
            title: "CBR to PDF Conversion: At a Glance",
            items: [
                { label: "What", value: "Convert comic book archives (CBR/CBZ) to universal PDF format" },
                { label: "Why", value: "Read comics on any device without special apps" },
                { label: "Time", value: "10-30 seconds for typical files" },
                { label: "Cost", value: "100% free, no account required" },
                { label: "Privacy", value: "Files never leave your device" },
                { label: "Quality", value: "Lossless—original artwork preserved" }
            ]
        },
        sections: [
            {
                id: "what-is-cbr",
                title: "What are CBR and CBZ files?",
                content: (
                    <>
                        <p className="mb-4">
                            Before converting, it is helpful to understand what these files actually are. They are essentially collections of images (usually JPG or PNG) bundled into an archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">These are .RAR archives renamed to .CBR. They require specific software to unpack.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">These are .ZIP archives renamed to .CBZ. They are more common and easier to handle natively.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Why convert Comics to PDF?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Universal Compatibility:</strong> PDFs open on any device—Phone, Kindle, Mac, or PC—without extra apps.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Easier Sharing:</strong> Sending a PDF is simpler than explaining how to install a CBR reader to your friends.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Searchable Library:</strong> PDFs are easier to organize and index in standard document management systems.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Converting to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Using our local tool is safer than &quot;cloud&quot; converters because your comics never leave your computer. This is important as comic files are often quite large.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Select Your Comic</h4>
                                    <p>Go to our <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">CBR to PDF Tool</Link> and choose your file.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Wait for Extraction</h4>
                                    <p>Our tool will unpack the images (JPG/PNG) directly in your browser memory. This usually takes just a few seconds.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Download the PDF</h4>
                                    <p>Once compiled, click the download button. You now have a high-quality PDF version of your comic!</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "optimization",
                title: "Optimization Tips",
                content: (
                    <>
                        <p className="mb-4">
                            Comic files can result in very large PDFs. Here is how to keep them manageable:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Resolution:</strong> If your original CBR images are 4K, your PDF will be massive. Standard 1080p width is usually plenty for reading.</li>
                            <li><strong>Local Security:</strong> Always use a tool that processes locally (like <strong>pdfcanada.ca</strong>) to avoid data harvesting and long upload queues.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: `Popular Use Cases for CBR to PDF Conversion in ${CURRENT_YEAR}`,
                content: (
                    <>
                        <p className="mb-6">
                            Converting comic archives to PDF opens up numerous possibilities for readers, collectors, and professionals:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">E-Reader Compatibility</h4>
                                <p className="text-sm">Read on Kindle, Kobo, or any tablet without special apps. Perfect for commutes and travel.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">Easy Sharing</h4>
                                <p className="text-sm">Send comics to friends via email or messaging apps. No special software required to view.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">Digital Library Management</h4>
                                <p className="text-sm">Organize collections with Calibre or standard file systems. Add metadata and tags easily.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">Professional Publishing</h4>
                                <p className="text-sm">Self-publishers need PDFs for printing and digital distribution platforms.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <>
                        <div className="space-y-4">
                            <div className="border-l-4 border-canada-red pl-4">
                                <h4 className="font-bold mb-2">Problem: Conversion Failed</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Cause:</strong> Corrupted archive or password protection.</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Solution:</strong> Verify file integrity. Remove password protection before converting.</p>
                            </div>
                            <div className="border-l-4 border-canada-red pl-4">
                                <h4 className="font-bold mb-2">Problem: Pages in Wrong Order</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Cause:</strong> Incorrect file naming (1.jpg, 10.jpg, 2.jpg).</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Solution:</strong> Rename with leading zeros (001.jpg, 002.jpg, 010.jpg).</p>
                            </div>
                            <div className="border-l-4 border-canada-red pl-4">
                                <h4 className="font-bold mb-2">Problem: PDF Too Large</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Cause:</strong> High-resolution source images.</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Solution:</strong> Use our <Link href={`/${lang}/compress-pdf`} className="text-canada-red underline">Compress PDF tool</Link> after conversion.</p>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        // Comparison Table for AI/AEO - structured data
        comparisonTable: {
            title: "CBR to PDF Conversion Methods Compared",
            headers: ["Method", "Privacy", "Speed", "Quality", "Cost", "Installation"],
            rows: [
                ["pdfcanada.ca (Browser)", "100% Local ✅", "Instant", "Lossless", "Free", "None"],
                ["Calibre (Desktop)", "Local ✅", "Fast", "Lossless", "Free", "Required"],
                ["Online Converters", "Upload ⚠️", "Slow", "Variable", "Freemium", "None"],
                ["Adobe Acrobat", "Local ✅", "Fast", "Good", "$20+/mo", "Required"]
            ]
        },

        // Reader Compatibility Table
        readerCompatibility: {
            title: "Comic Reader App Compatibility",
            description: "How different reading apps handle CBR vs PDF formats",
            apps: [
                { name: "Kindle", cbr: "❌ Not supported", pdf: "✅ Full support", notes: "PDF is the only comic format on Kindle" },
                { name: "Apple Books", cbr: "❌ Not supported", pdf: "✅ Full support", notes: "Perfect for iPad comic reading" },
                { name: "Google Play Books", cbr: "❌ Not supported", pdf: "✅ Full support", notes: "Cloud sync across devices" },
                { name: "CDisplayEx", cbr: "✅ Native", pdf: "✅ Supported", notes: "Best dedicated comic reader for Windows" },
                { name: "Chunky (iOS)", cbr: "✅ Native", pdf: "✅ Supported", notes: "Popular iOS comic reader" },
                { name: "Perfect Viewer (Android)", cbr: "✅ Native", pdf: "✅ Supported", notes: "Best Android comic reader" }
            ]
        },

        // Best Practices Section
        bestPractices: {
            title: "Best Practices for CBR to PDF Conversion",
            dos: [
                "Use CBZ format when possible (better compatibility than CBR)",
                "Verify page order before converting large collections",
                "Keep original CBR files as backup",
                "Use local tools to protect copyright and privacy",
                "Compress PDFs if file size is a concern (after conversion)"
            ],
            donts: [
                "Don't upload copyrighted comics to unknown servers",
                "Don't delete originals until you've verified the PDF quality",
                "Don't ignore file naming conventions (use 001, 002, not 1, 2)",
                "Don't convert password-protected archives without unlocking first"
            ]
        },

        // Technical Deep Dive for SEO
        technicalSection: {
            title: "Technical Deep Dive: How CBR to PDF Conversion Works",
            content: `Understanding the conversion process helps you troubleshoot issues and optimize results.

**Step 1: Archive Extraction**
CBR files are RAR archives; CBZ files are ZIP archives. Our WebAssembly-based extractor runs in your browser's sandboxed environment, unpacking the compressed images into memory.

**Step 2: Image Analysis**
Each extracted image is analyzed for:
- Dimensions (width × height in pixels)
- Color space (RGB, CMYK, grayscale)
- File format (JPEG, PNG, WebP)
- Embedded metadata (EXIF data, color profiles)

**Step 3: Page Ordering**
Images are sorted alphanumerically based on filename. This is why proper naming (001.jpg, 002.jpg) is crucial for correct page order.

**Step 4: PDF Assembly**
Using pdf-lib (a JavaScript PDF library), images are:
- Embedded directly without recompression (preserving quality)
- Sized to fit standard page dimensions
- Assembled into a multi-page PDF document

**Step 5: Download Generation**
The completed PDF is converted to a downloadable Blob, triggering your browser's download dialog. The file never touches any external server.

**Why Local Processing Matters:**
Comic files are often 50-500MB. Uploading to a server means:
- Long wait times (limited by your upload speed)
- Privacy risks (your files on unknown servers)
- Potential copyright concerns

Local processing eliminates all these issues.`
        },

        faq: [
            {
                q: "Is there a file size limit for CBR to PDF conversion?",
                a: "Since the conversion happens on your own hardware, we do not enforce arbitrary server limits. If your browser can handle the memory (typically up to 500MB-1GB depending on your device), we can convert it. For very large files, close other browser tabs to free up RAM."
            },
            {
                q: "Will the image quality drop during conversion?",
                a: "No. Our tool embeds the original images from the archive directly into the PDF without re-compressing them, preserving 100% of the original artwork quality. What you see in the CBR is exactly what you get in the PDF."
            },
            {
                q: "Does this work for manga and right-to-left reading?",
                a: "Yes! The tool extracts images in the order they appear in the archive, preserving the original page sequence. Whether it's Western comics, manga, or manhwa, the reading flow is maintained perfectly."
            },
            {
                q: "Can I convert multiple CBR files at once?",
                a: "Currently, our web tool processes one file at a time for optimal browser performance. However, you can queue multiple files by selecting them one after another. For batch conversion of entire collections, consider using desktop tools like Calibre."
            },
            {
                q: "What's the difference between CBR and CBZ files?",
                a: "CBR files are RAR archives (.rar renamed to .cbr), while CBZ files are ZIP archives (.zip renamed to .cbz). CBZ files are more common and easier to create since ZIP is supported natively by all operating systems. Both work equally well with our converter."
            },
            {
                q: "How do I fix pages that are in the wrong order?",
                a: "This happens when images inside the archive aren't named correctly (e.g., 1.jpg, 10.jpg, 2.jpg sorts as 1, 10, 2). Extract the CBR, rename all images with leading zeros (001.jpg, 002.jpg, etc.), re-zip as CBZ, and convert again."
            },
            {
                q: "Can I password-protect the converted PDF?",
                a: "Our CBR to PDF converter creates standard, unprotected PDFs. To add password protection, use a PDF security tool after conversion. Many free PDF editors (including Adobe Acrobat Reader) offer password protection features."
            },
            {
                q: "Why is my converted PDF so large?",
                a: "PDF file size directly reflects the total size of images in your CBR archive. High-resolution scans (4K, 300DPI) create large PDFs. To reduce size, use our Compress PDF tool after conversion, or resize source images to 1920px width before creating the CBR."
            },
            {
                q: "Is this tool safe for my personal comic collection?",
                a: "Absolutely. All conversion happens locally in your browser using WebAssembly. Your comic files never leave your device, never touch our servers, and are never uploaded anywhere. This ensures complete privacy for your personal collection."
            },
            {
                q: "Can I convert CBR to EPUB instead of PDF?",
                a: "For image-heavy content like comics, PDF is the better choice as it preserves the exact visual layout. EPUB is designed for reflowable text and doesn't handle sequential images as well. Stick with PDF for comics and graphic novels."
            }
        ],
        ctaTitle: "Ready to convert your comics?",
        ctaButton: "Start CBR to PDF",
        ctaSubtext: "Free, Fast, and Locally Processed."
    },
    fr: {
        seo: {
            title: `Convertir CBR en PDF | Guide BD ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Lisez vos bandes dessinées partout. Notre guide ${CURRENT_YEAR} vous montre comment convertir CBR/CBZ en PDF en toute sécurité localement sans jamais les télécharger.`
        },
        h1: "Comment Convertir CBR/CBZ en PDF",
        subtitle: "Le guide définitif pour emporter vos bandes dessinées partout.",
        intro: (
            <>
                Si vous êtes un amateur de bandes dessinées numériques, vous avez probablement rencontré les fichiers <strong>CBR</strong> et <strong>CBZ</strong>. Bien que ces formats soient parfaits pour les lecteurs de BD dédiés, ils peuvent être difficiles à ouvrir sur des appareils standards comme les tablettes ou les ordinateurs de travail.
                <br /><br />
                La solution ? <strong>Convertir CBR en PDF</strong>. Ce guide vous montrera comment transformer vos archives de BD en documents PDF universels sans compromettre votre vie privée ni télécharger de logiciels encombrants.
            </>
        ),
        sections: [
            {
                id: "what-is-cbr",
                title: "Qu'est-ce que les fichiers CBR et CBZ ?",
                content: (
                    <>
                        <p className="mb-4">
                            Avant de convertir, il est utile de comprendre ce que sont réellement ces fichiers. Ce sont essentiellement des collections d'images (généralement JPG ou PNG) regroupées dans une archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">Ce sont des archives .RAR renommées en .CBR. Elles nécessitent un logiciel spécifique pour être décompressées.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">Ce sont des archives .ZIP renommées en .CBZ. Elles sont plus courantes et plus faciles à manipuler nativement.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Pourquoi convertir des BD en PDF ?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Compatibilité Universelle :</strong> Les PDF s'ouvrent sur n'importe quel appareil sans applications supplémentaires.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Partage Simplifié :</strong> Envoyer un PDF est plus simple que d'expliquer comment installer un lecteur CBR à vos amis.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Bibliothèque Recherchable :</strong> Les PDF sont plus faciles à organiser et à indexer dans les systèmes de gestion de documents.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape : Conversion en PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Utiliser notre outil local est plus sûr que les convertisseurs « cloud » car vos BD ne quittent jamais votre ordinateur. C'est important car les fichiers BD sont souvent volumineux.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Sélectionnez votre BD</h4>
                                    <p>Allez sur notre <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">Outil CBR en PDF</Link> et choisissez votre fichier.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Attendez l'extraction</h4>
                                    <p>Notre outil décompressera les images (JPG/PNG) directement dans la mémoire de votre navigateur.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Téléchargez le PDF</h4>
                                    <p>Une fois compilé, cliquez sur le bouton de téléchargement. Vous avez maintenant une version PDF haute qualité de votre BD !</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Y a-t-il une limite de taille ?",
                a: "Comme la conversion se fait sur votre matériel, nous n'imposons pas de limites de serveur. Si votre navigateur peut gérer la mémoire, nous pouvons convertir."
            },
            {
                q: "La qualité va-t-elle baisser ?",
                a: "Non. Notre outil intègre les images originales de l'archive directement dans le PDF sans les compresser à nouveau."
            }
        ],
        ctaTitle: "Prêt à convertir vos BD ?",
        ctaButton: "Démarrer CBR en PDF",
        ctaSubtext: "Gratuit, Rapide et Traité Localement."
    }
});

export const CbrToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;
    const qa = translations[lang].features.cbrToPdf.quickAnswer;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select Comic", "text": "Select your CBR or CBZ file." },
                { "@type": "HowToStep", "position": 2, "name": "Wait for Extraction", "text": "Wait for image extraction in browser memory." },
                { "@type": "HowToStep", "position": 3, "name": "Download PDF", "text": "Download your compiled PDF." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-06-15",
            "dateModified": "2025-12-24",
            "author": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "url": "https://www.pdfcanada.ca"
            },
            "publisher": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.pdfcanada.ca/android-chrome-512x512.png"
                }
            }
        }
    ];

    return (
        <div className="bg-white dark:bg-black">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/cbr-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: qa.question,
                    answer: qa.answer,
                    tool: qa.tool,
                    steps: qa.steps
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'CBR to PDF', path: '/guides/cbr-to-pdf' }
                ]}
            />

            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
                    { name: 'CBR to PDF', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    {/* Intro */}
                    <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert mb-12 sm:mb-14 md:mb-16 max-w-none text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {/* Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-14 md:pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-3xl sm:text-4xl font-black mb-8 sm:mb-10 md:mb-12 flex items-center gap-3 sm:gap-4">
                            <Info className="text-canada-red" size={28} />
                            FAQ
                        </h2>
                        <div className="grid gap-4 sm:gap-5 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                                        <span className="text-canada-red font-black">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl shadow-red-500/20">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform hidden md:block">
                            <Zap size={120} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 relative z-10 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-red-100 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl relative z-10">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/cbr-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 rounded-full font-black text-base sm:text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 relative z-10"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    {/* Navigation to other guides */}
                    <div className="mt-24 text-center">
                        <Link href={`/${lang}/guides/ultimate-pdf-guide`}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-canada-red font-bold transition-colors group"
                        >
                            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Back to Ultimate PDF Guide
                        </Link>
                    </div>

                    <AISnapshot
                        question={qa.question}
                        answer={qa.answer}
                        toolName={qa.tool}
                        steps={qa.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/cbr-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};


