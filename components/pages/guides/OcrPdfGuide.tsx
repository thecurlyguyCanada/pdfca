import React from 'react';
import { ScanLine, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Search, FileText } from 'lucide-react';
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
            title: "How to OCR PDF Online | Free Guide to Searchable Documents | pdfcanada.ca",
            desc: "Unlock text in your scanned PDFs. Our 2026 guide shows you how to use high-accuracy OCR locally on your device. No uploads—keep your data 100% private."
        },
        h1: "How to OCR PDF: The 2026 Guide",
        subtitle: "Unlock the hidden text in your scanned documents with advanced Optical Character Recognition.",

        intro: (
            <>
                Have you ever tried to select text in a scanned document only to realize it's just an image? This is where <strong>OCR (Optical Character Recognition)</strong> comes in.
                <br /><br />
                Our guide explains how to transform flat images into <strong>searchable PDF</strong> documents. Whether you need to <strong>convert scanned PDF to text</strong> or find a specific word in an old invoice, modern technology makes it possible without compromising your privacy.
            </>
        ),

        sections: [
            {
                id: "what-is-ocr",
                title: "What is OCR for PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            L'OCR signifie reconnaissance optique de caractères. C'est une technologie qui « lit » les pixels d'une image et identifie les caractères alphanumériques.
                        </p>
                        <p className="mb-4">
                            En exécutant l'<strong>OCR sur un PDF</strong>, vous créez une couche invisible de texte réel sur l'image originale. Cela signifie :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li><strong>Searchability</strong>: You can use <code className="bg-gray-100 px-1 rounded">Ctrl+F</code> to find keywords.</li>
                            <li><strong>Selectability</strong>: You can copy and paste text from the document.</li>
                            <li><strong>Accessibility</strong>: Screen readers can finally read the content.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "How to Make a PDF Searchable",
                content: (
                    <>
                        <p className="mb-4">
                            Making a PDF searchable is a three-step process that used to require expensive desktop software:
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Identify the file</strong>: Ensure your PDF is a "scanned" image (where you can't select text).
                            </li>
                            <li className="pl-2">
                                <strong>Run Recognition</strong>: Use an <button onClick={() => onNavigate('HOME')} className="text-canada-red hover:underline font-bold">OCR tool</button> that supports your document's language.
                            </li>
                            <li className="pl-2">
                                <strong>Validate results</strong>: After processing, test the search function in your browser or PDF viewer.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Local-First Privacy for Scans",
                content: (
                    <>
                        <p className="mb-4">
                            Scanned documents often contain highly sensitive information: bank statements, identity cards, or legal contracts. Uploading these to a random "free OCR" website is a major security risk.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                            <strong>pdfcanada.ca</strong> advocates for local processing. We recommend tools that use <em>Tesseract.js</em> to run the engine inside your browser, so your scans <strong>never touch a server</strong>.
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it safe to use OCR tools online?",
                a: "Only if the tool processes files locally. pdfcanada.ca uses 'Local-First' technology to ensure your sensitive scans remain on your own machine."
            },
            {
                q: "I need to delete some pages before running OCR.",
                a: (
                    <>
                        If your scan contains blank or unwanted pages, use our <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Delete PDF Pages Tool</button> first to clean it up and speed up the OCR process.
                    </>
                )
            }
        ],

        ctaTitle: "Ready to Unlock Your Documents?",
        ctaButton: "Explore Tools",
        ctaSubtext: "Free, Secure, Locally Processed."
    },
    fr: {
        seo: {
            title: "Comment Utiliser l'OCR PDF | Guide Texte Consultable 2026 | pdfcanada.ca",
            desc: "Déverrouillez le texte de vos PDF numérisés. Notre guide 2026 vous montre comment utiliser l'OCR localement. Sans téléchargement—gardez vos données 100% privées."
        },
        h1: "Le Guide Ultime de l'OCR : Rendre vos PDF Consultables",
        subtitle: "Déverrouillez le texte caché dans vos documents numérisés grâce à la reconnaissance optique de caractères.",

        intro: (
            <>
                Avez-vous déjà essayé de sélectionner du texte dans un document scanné pour réaliser que ce n'est qu'une image ? C'est là que l'<strong>OCR (Reconnaissance Optique de Caractères)</strong> intervient.
                <br /><br />
                Notre guide vous explique comment transformer des images plates en documents <strong>PDF consultables</strong>. Que vous ayez besoin de <strong>convertir un PDF scanné en texte</strong> ou de trouver un mot spécifique dans une vieille facture, la technologie moderne le permet sans compromettre votre vie privée.
            </>
        ),

        sections: [
            {
                id: "what-is-ocr",
                title: "Qu'est-ce que l'OCR pour PDF ?",
                content: (
                    <>
                        <p className="mb-4">
                            L'OCR signifie reconnaissance optique de caractères. C'est une technologie qui « lit » les pixels d'une image et identifie les caractères alphanumériques.
                        </p>
                        <p className="mb-4">
                            En exécutant l'<strong>OCR sur un PDF</strong>, vous créez une couche invisible de texte réel sur l'image originale. Cela signifie :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Recherche</strong> : Vous pouvez utiliser <code className="bg-gray-100 px-1 rounded">Ctrl+F</code> pour trouver des mots-clés.</li>
                            <li><strong>Sélection</strong> : Vous pouvez copier et coller le texte du document.</li>
                            <li><strong>Accessibilité</strong> : Les lecteurs d'écran peuvent enfin lire le contenu.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Confidentialité de vos scans",
                content: (
                    <>
                        <p className="mb-4">
                            Les documents scannés contiennent souvent des informations sensibles : relevés bancaires, cartes d'identité ou contrats légaux.
                        </p>
                        <p>
                            <strong>pdfcanada.ca</strong> privilégie le traitement local. Nous recommandons des outils qui font tourner le moteur à l'intérieur de votre navigateur, afin que vos scans <strong>ne quittent jamais votre ordinateur</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce sûr d'utiliser l'OCR en ligne ?",
                a: "Seulement si l'outil traite les fichiers localement. pdfcanada.ca garantit que vos scans restent sur votre machine."
            },
            {
                q: "Je dois supprimer des pages avant l'OCR.",
                a: (
                    <>
                        Si votre scan contient des pages inutiles, utilisez notre <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Outil de Suppression de Pages</button> en premier.
                    </>
                )
            }
        ],

        ctaTitle: "Prêt à déverrouiller vos documents ?",
        ctaButton: "Voir les outils",
        ctaSubtext: "Gratuit, sécurisé, traité localement."
    }
});

export const OcrPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "datePublished": "2024-03-15",
        "dateModified": "2026-01-01",
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
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/ocr-pdf"
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'OCR Guide', path: '/guides/ocr-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<ScanLine size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'OCR Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 border-l-4 border-canada-red pl-6 py-2 mb-16 font-medium">
                        {t.intro}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id}>
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                    <Search size={28} className="text-canada-red" /> {section.title}
                                </h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Fun Fact / Tech Detail */}
                    <div className="my-20 bg-gray-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl">
                        <div className="bg-canada-red p-6 rounded-3xl shrink-0 animate-pulse-subtle">
                            <Zap size={48} className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <Globe size={24} className="text-canada-red" /> Did You Know?
                            </h4>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our recommended OCR engine is powered by <strong>Tesseract.js</strong>, a port of the world's most famous OCR engine. This means the complex computations happen 100% on your device, keeping your private scans private.
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Questions & Answers</h3>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {t.faq.map((item: any, i: number) => (
                                <details key={i} className="group py-6 cursor-pointer">
                                    <summary className="text-xl font-bold flex justify-between items-center group-hover:text-canada-red transition-all">
                                        {item.q}
                                        <ArrowRight size={20} className="text-gray-300 group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <div className="mt-4 text-lg text-gray-600 dark:text-gray-400 pr-12 leading-relaxed">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 text-center shadow-sm">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('HOME')}
                            className="bg-canada-red text-white px-12 py-4 rounded-full font-black text-lg shadow-xl shadow-red-500/20 hover:scale-105 transition-all"
                        >
                            {t.ctaButton}
                        </button>
                        <p className="mt-4 text-sm text-gray-400 font-medium">{t.ctaSubtext}</p>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
