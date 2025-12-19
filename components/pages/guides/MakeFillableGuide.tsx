import React from 'react';
import { PenTool, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, FileText, CheckSquare, PencilLine } from 'lucide-react';
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
            title: "Make PDF Fillable Online Free | Create PDF Forms Without Acrobat | pdfcanada.ca",
            desc: "Learn how to make a PDF fillable for free. Create interactive PDF forms, add text fields, checkboxes, and signatures online. Secure, local, and no signup."
        },
        h1: "How to Make a PDF Fillable Online for Free",
        subtitle: "The definitive guide to transforming flat documents into interactive, professional PDF forms.",

        intro: (
            <>
                Tired of asking clients to print, hand-sign, and scan documents back to you? You need to <strong>make your PDF fillable</strong>. Whether you're a small business owner in Toronto or a student in Vancouver, creating <strong>interactive PDF forms</strong> is essential for a modern workflow. Our <strong>free PDF form creator</strong> allows you to add text fields, checkboxes, and signature placeholders to any document without needing expensive software like Adobe Acrobat.
            </>
        ),

        sections: [
            {
                id: "what-is-fillable",
                title: "What is a Fillable PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            A fillable PDF (also known as an interactive PDF form) contains fields that users can interact with directly. Instead of being a static image of a document, it includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Text Input Fields</strong>: For names, dates, and detailed responses.</li>
                            <li><strong>Checkboxes</strong>: For multi-choice selections.</li>
                            <li><strong>Digital Signature Fields</strong>: For capturing authorization.</li>
                        </ul>
                        <p>
                            Using a <strong>fillable PDF creator online</strong> ensures that your documents are easy to complete and look professional on any device.
                        </p>
                    </>
                )
            },
            {
                id: "how-to",
                title: "3 Steps to Create Fillable PDF Forms",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-4">
                            <li><strong>Upload Your File</strong>: Select the PDF you want to make interactive using our local-first uploader.</li>
                            <li><strong>Add Fields</strong>: Drag and drop text fields and checkboxes onto the document. Our tool is optimized for <strong>Canadian government forms</strong> and business contracts.</li>
                            <li><strong>Save and Share</strong>: Click 'Process PDF' to download your new, interactive version.</li>
                        </ol>
                        <p>
                            This is the most <strong>secure way to make a PDF fillable</strong> because we process all edits locally in your browser.
                        </p>
                    </>
                )
            },
            {
                id: "benefits",
                title: "Why Use Our Free PDF Form Filler?",
                content: (
                    <>
                        <p className="mb-4">
                            Most "free" tools online either watermark your files or force you to sign up for a subscription. At pdfcanada.ca, we offer a truly <strong>free PDF editor for forms</strong> with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Privacy Focus</strong>: Your sensitive business data stays on your machine.</li>
                            <li><strong>No Account Needed</strong>: Start editing instantly.</li>
                            <li><strong>Mobile Friendly</strong>: Create or fill out forms on your phone or tablet.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it free to make a PDF fillable on this site?",
                a: "Yes! There are no hidden costs, limits, or watermarks. It is 100% free."
            },
            {
                q: "Can I add a signature field to my PDF?",
                a: "Absolutely. Our tool allows you to place signature placeholders so your recipients know exactly where to sign."
            },
            {
                q: "Do I need to download software?",
                a: "No. Our tool works entirely in your web browser (Chrome, Safari, Firefox, Edge) using advanced WebAssembly technology."
            }
        ],

        ctaTitle: "Start Creating Your Form Now",
        ctaButton: "Make PDF Fillable",
        ctaSubtext: "Free forever. Secure and local."
    },
    fr: {
        seo: {
            title: "Rendre un PDF Remplissable Gratuitement | Créer des Formulaires PDF | pdfcanada.ca",
            desc: "Apprenez comment rendre un PDF remplissable gratuitement. Créez des formulaires interactifs, ajoutez des champs de texte et des cases à cocher en ligne."
        },
        h1: "Comment Rendre un PDF Remplissable en Ligne Gratuitement",
        subtitle: "Le guide définitif pour transformer vos documents statiques en formulaires PDF interactifs et professionnels.",

        intro: (
            <>
                Vous en avez assez de demander à vos clients d'imprimer et de numériser des documents ? Vous devez <strong>rendre votre PDF remplissable</strong>. Notre outil gratuit vous permet d'ajouter des champs de texte et des cases à cocher en toute sécurité.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "3 étapes pour créer des formulaires PDF remplissables",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-4">
                            <li><strong>Téléversez votre fichier</strong> : Sélectionnez le PDF via notre outil sécurisé.</li>
                            <li><strong>Ajoutez des champs</strong> : Glissez-déposez des champs de texte et des cases à cocher.</li>
                            <li><strong>Enregistrez</strong> : Téléchargez votre version interactive instantanément.</li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Oui, totalement gratuit et sans frais cachés."
            }
        ],

        ctaTitle: "Commencez à créer votre formulaire maintenant",
        ctaButton: "Rendre le PDF remplissable",
        ctaSubtext: "Gratuit pour toujours. Sécurisé et local."
    }
});

export const MakeFillableGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Upload File", "text": "Select the PDF you want to make interactive." },
                { "@type": "HowToStep", "position": 2, "name": "Add Fields", "text": "Drag and drop text fields and checkboxes onto the document." },
                { "@type": "HowToStep", "position": 3, "name": "Save and Share", "text": "Click Process PDF to download your interactive version." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-05-15",
            "dateModified": "2025-01-10",
            "author": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "url": "https://pdfcanada.ca"
            },
            "publisher": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://pdfcanada.ca/android-chrome-512x512.png"
                }
            }
        }
    ];

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/make-pdf-fillable"
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Make PDF Fillable', path: '/guides/make-pdf-fillable' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<PenTool size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'Make Fillable Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto space-y-12">
                    <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                        {t.intro}
                    </p>

                    {/* Content */}
                    <div className="space-y-16">
                        {t.sections && t.sections.map((section) => (
                            <section key={section.id}>
                                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-canada-red rounded-full"></div>
                                    {section.title}
                                </h2>
                                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Visual Pro Tip */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                        <div className="flex items-start gap-4">
                            <Zap size={32} className="text-yellow-400 shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold mb-2">Pro Tip: Auto-Detection</h4>
                                <p className="opacity-90 leading-relaxed">
                                    When creating forms, use underscore lines (e.g., Name: __________) or square brackets (e.g., [ ]) in your original document. Modern tools often use AI to detect these patterns and suggest field placements automatically!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <section className="bg-canada-red p-12 rounded-[2.5rem] text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <p className="mb-8 text-white/80 font-medium">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/make-pdf-fillable')}
                            className="bg-white text-canada-red px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg"
                        >
                            {t.ctaButton}
                        </button>
                    </section>

                    {/* FAQ */}
                    {t.faq && (
                        <section className="bg-gray-50 dark:bg-gray-900/50 p-10 rounded-3xl">
                            <h2 className="text-2xl font-black mb-8 text-center tracking-tight uppercase">Solutions to Common Problems</h2>
                            <div className="grid gap-6">
                                {t.faq.map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{item.q}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </PageLayout>
        </>
    );
};
