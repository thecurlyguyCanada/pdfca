import React from 'react';
import { Image, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2 } from 'lucide-react';
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
            title: "Convert HEIC to PDF Free Online | iPhone Photos to PDF | pdfcanada.ca",
            desc: "Convert HEIC to PDF for free. Learn how to convert iPhone photos (HEIC) to PDF on Windows, Mac, and Mobile. High quality, secure, and no upload required."
        },
        h1: "How to Convert HEIC to PDF Online for Free",
        subtitle: "The simplest, most secure way to transform your iPhone photos into professional PDF documents.",

        intro: (
            <>
                Are you struggling with <strong>HEIC files</strong>? High Efficiency Image Coding (HEIC) is the standard format for photos on iPhones, but it can be a nightmare to share with Windows users or upload to government portals.
                <br /><br />
                Whether you need to <strong>convert HEIC to PDF on Windows</strong>, <strong>convert HEIC to PDF on Mac</strong>, or simply want a <strong>free HEIC to PDF converter</strong> that respects your privacy, you're in the right place.
            </>
        ),

        sections: [
            {
                id: "what-is-heic",
                title: "What is HEIC and Why Convert to PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            HEIC is Apple's version of the High Efficiency Image File format. While it's great for saving storage space, it lacks the universal compatibility of a PDF. By choosing to <strong>convert HEIC to PDF</strong>, you ensure:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li><strong>Universal Viewing</strong>: Anyone can open a PDF on any device.</li>
                            <li><strong>Professional Formatting</strong>: Perfect for submitting receipts, IDs, or homework.</li>
                            <li><strong>Combined Files</strong>: You can turn multiple photos into a single, multi-page PDF document.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "3 Easy Steps to Convert HEIC to PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Wondering <strong>how to convert HEIC to PDF</strong>? Our <button onClick={() => onNavigate('TOOL_PAGE', '/heic-to-pdf')} className="text-canada-red hover:underline font-bold">HEIC to PDF tool</button> makes it effortless:
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Select Your Photos</strong>: Click 'Select File' and pick your .HEIC images.</li>
                            <li className="pl-2"><strong>Arrange (Optional)</strong>: If you've selected multiple, they will appear in order.</li>
                            <li className="pl-2"><strong>Convert and Save</strong>: Click 'Convert to PDF' and your file will be generated instantly in your browser.</li>
                        </ol>
                        <p className="text-sm italic text-gray-500">
                            This is the most secure method because your photos never leave your device.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "How to convert HEIC to PDF on iPhone?",
                a: "Just visit pdfcanada.ca on your iPhone, select your HEIC photos from your library, and our browser tool will convert them to a PDF instantly."
            },
            {
                q: "Can I combine multiple HEIC files?",
                a: (
                    <>
                        Yes! Our converter allows you to select multiple images at once. If you need to reorder them later, you can also use our <button onClick={() => onNavigate('GUIDE_ORGANIZE', '/guides/organize-pdf')} className="text-canada-red hover:underline font-bold">Organize PDF Guide</button> to learn how to rearrange pages.
                    </>
                )
            }
        ],

        ctaTitle: "Ready to Convert Your Photos?",
        ctaButton: "Convert HEIC Now",
        ctaSubtext: "100% Free. No Signup. Privacy Guaranteed."
    },
    fr: {
        seo: {
            title: "Convertir HEIC en PDF Gratuit | Photos iPhone vers PDF | pdfcanada.ca",
            desc: "Convertissez HEIC en PDF gratuitement. Apprenez comment transformer vos photos iPhone (HEIC) en PDF sur Windows, Mac et Mobile."
        },
        h1: "Comment Convertir HEIC en PDF Gratuitement",
        subtitle: "La façon la plus simple et sécurisée de transformer vos photos iPhone en documents PDF professionnels.",

        intro: (
            <>
                Vous avez des problèmes avec les fichiers <strong>HEIC</strong> ? Le format High Efficiency Image Coding (HEIC) est le standard d'Apple, mais il est souvent incompatible avec Windows ou les portails administratifs.
                <br /><br />
                Que vous souhaitiez <strong>convertir HEIC en PDF sur Windows</strong> ou <strong>Mac</strong>, notre outil gratuit respecte votre vie privée en traitant tout localement.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "3 étapes simples pour convertir HEIC en PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Sélectionnez vos photos</strong> : Choisissez vos fichiers .HEIC.</li>
                            <li className="pl-2"><strong>Traitement local</strong> : Notre outil les convertit sans aucun téléversement.</li>
                            <li className="pl-2"><strong>Téléchargez</strong> : Récupérez votre PDF instantanément.</li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Comment convertir sur iPhone ?",
                a: "Visitez pdfcanada.ca directement sur votre téléphone et suivez les mêmes étapes."
            }
        ],

        ctaTitle: "Prêt à convertir vos photos ?",
        ctaButton: "Convertir HEIC maintenant",
        ctaSubtext: "100% Gratuit. Sans inscription."
    }
});

export const HeicToPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select Photos", "text": "Choose your HEIC images from your device." },
                { "@type": "HowToStep", "position": 2, "name": "Arrange Order", "text": "Optionally arrange the order of multiple images." },
                { "@type": "HowToStep", "position": 3, "name": "Convert and Save", "text": "Click Convert to PDF and download your file." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-03-01",
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
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/heic-to-pdf"
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'HEIC to PDF', path: '/guides/heic-to-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Image size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'HEIC to PDF Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        {t.intro}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
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
                            <p className="text-gray-500">Local browser processing. Your photos never leave your device.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Zap className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Instant Speed</h3>
                            <p className="text-gray-500">No server wait times. Conversion happens in milliseconds.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Smartphone className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                            <p className="text-gray-500">Designed to work perfectly on iPhone and Android browsers.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={20} className="text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-canada-red rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-4xl font-black mb-6">{t.ctaTitle}</h2>
                        <p className="text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/heic-to-pdf')}
                            className="bg-white text-canada-red px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </button>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
