import React from 'react';
import { BookOpen, FileText, Download, Shield, Zap, CheckCircle, Info, ArrowRight, MousePointer2 } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "How to Convert CBR to PDF | Free Comic Book Conversion Guide | pdfcanada.ca",
            desc: "Read your comics on any device. Our 2026 guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device."
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
                            Using our local tool is safer than "cloud" converters because your comics never leave your computer. This is important as comic files are often quite large.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Select Your Comic</h4>
                                    <p>Go to our <button onClick={() => onNavigate('TOOL_PAGE', '/cbr-to-pdf')} className="text-canada-red hover:underline font-medium">CBR to PDF Tool</button> and choose your file.</p>
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
            }
        ],
        faq: [
            {
                q: "Is there a file size limit?",
                a: "Since the conversion happens on your own hardware, we do not enforce arbitrary server limits. If your browser can handle the memory, we can convert it."
            },
            {
                q: "Will the image quality drop?",
                a: "No. Our tool embeds the original images from the archive directly into the PDF without re-compressing them, preserving the original artwork quality."
            },
            {
                q: "Does this work for manga?",
                a: "Yes! The tool extracts images in the order they appear in the archive, so whether it is a Western comic or Manga, the flow is preserved."
            }
        ],
        ctaTitle: "Ready to convert your comics?",
        ctaButton: "Start CBR to PDF",
        ctaSubtext: "Free, Fast, and Locally Processed."
    },
    fr: {
        seo: {
            title: "Convertir CBR en PDF | Guide BD 2026 | pdfcanada.ca",
            desc: "Lisez vos bandes dessinées partout. Notre guide 2026 vous montre comment convertir CBR/CBZ en PDF en toute sécurité localement sans jamais les télécharger."
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
                                    <p>Allez sur notre <button onClick={() => onNavigate('TOOL_PAGE', '/cbr-to-pdf')} className="text-canada-red hover:underline font-medium">Outil CBR en PDF</button> et choisissez votre fichier.</p>
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

export const CbrToPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

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
            "dateModified": "2024-12-24",
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
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide') },
                    { name: 'CBR to PDF', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-12 px-6">
                    {/* Intro */}
                    <div className="prose prose-lg dark:prose-invert mb-16 max-w-none text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {/* Sections */}
                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24">
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="mt-24 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
                            <Info className="text-canada-red" size={36} />
                            FAQ
                        </h2>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                                        <span className="text-canada-red font-black">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className="text-gray-600 dark:text-gray-400 pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-24 bg-canada-red rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                            <Zap size={120} />
                        </div>
                        <h2 className="text-4xl font-black mb-4 relative z-10">{t.ctaTitle}</h2>
                        <p className="text-red-100 mb-8 text-xl relative z-10">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/cbr-to-pdf')}
                            className="bg-white text-canada-red px-12 py-4 rounded-full font-black text-xl shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 relative z-10"
                        >
                            {t.ctaButton}
                        </button>
                    </div>

                    {/* Navigation to other guides */}
                    <div className="mt-24 text-center">
                        <button
                            onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-canada-red font-bold transition-colors group"
                        >
                            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Back to Ultimate PDF Guide
                        </button>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
