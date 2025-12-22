
import React from 'react';
import { Scissors, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart } from 'lucide-react';
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
            title: "How to Compress PDF Size | Free & Secure Size Reduction Guide | pdfcanada.ca",
            desc: "Make your files smaller without losing quality. Our 2026 guide shows you how to optimize PDFs locally in your browser. No uploads, no loss of clarity, eh?"
        },
        h1: "How to Compress PDF Files: 3 Levels",
        subtitle: "Reduce file size without losing important details. Local, secure, and adjustable.",

        intro: (
            <>
                Sending large PDF files via email or uploading them to government portals can be a headache due to size limits. Knowing <strong>how to compress a PDF</strong> effectively is a crucial skill.
                <br /><br />
                Our tool offers three smart levels of compression: <strong>Good</strong> (lossless optimization), <strong>Balanced</strong> (standard compression), and <strong>Extreme</strong> (maximum reduction). best of all, it happens 100% on your device.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Compressing Your PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Upload</strong>: Drag your large file into our <button onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')} className="text-canada-red hover:underline font-medium">Compress PDF tool</button>.
                            </li>
                            <li className="pl-2">
                                <strong>Select Level</strong>: Choose between <strong>Good</strong>, <strong>Balanced</strong>, or <strong>Extreme</strong> based on your needs.
                            </li>
                            <li className="pl-2">
                                <strong>Download</strong>: Save your optimized, lightweight PDF instantly.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "levels",
                title: "Which Level Should You Choose?",
                content: (
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Good (Lossless)</h3>
                            <p className="text-sm text-green-700">Best for important docs where quality and selectable text matter most. Removes invisible metadata.</p>
                        </div>
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Balanced</h3>
                            <p className="text-sm text-blue-700">The sweet spot. Re-renders content at 150 DPI. Perfect for sharing standard documents.</p>
                        </div>
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">Extreme</h3>
                            <p className="text-sm text-red-700">Maximum crunch. Re-renders at 96 DPI. Use this when file size is the only thing that matters.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Will my text remain selectable?",
                a: "Only in 'Good' mode. In 'Balanced' and 'Extreme' modes, we re-render pages as images to achieve higher compression, which flattens the text."
            },
            {
                q: "Is it safe to compress sensitive docs here?",
                a: "Yes! Unlike other sites, we don't upload your file to a server. Compression happens right inside your browser using your computer's power."
            }
        ],

        ctaTitle: "Ready to Shrink That File?",
        ctaButton: "Compress PDF Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Local Compression?",
        whyDesc: "Processing locally means no upload wait times and zero privacy risks. It's faster and safer."
    },
    fr: {
        seo: {
            title: "Comment Compresser un PDF | Guide Réduction Taille 2026 | pdfcanada.ca",
            desc: "Réduisez la taille de vos fichiers sans perte de qualité. Notre guide 2026 vous montre comment optimiser vos PDF localement. Pas de téléchargement, pas de perte, eh ?"
        },
        h1: "Comment compresser des fichiers PDF : 3 Niveaux",
        subtitle: "Réduisez la taille sans perdre les détails importants.",

        intro: (
            <>
                Envoyer de gros fichiers PDF par courriel peut être un casse-tête. Savoir <strong>comment compresser un PDF</strong> efficacement est essentiel.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Téléchargez</strong> votre fichier.</li>
                        <li className="pl-2"><strong>Sélectionnez le niveau</strong> (Bon, Équilibré, Extrême).</li>
                        <li className="pl-2"><strong>Téléchargez</strong> votre fichier optimisé.</li>
                    </ol>
                )
            },
            {
                id: "levels",
                title: "Quel niveau choisir ?",
                content: (
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Bon</h3>
                            <p className="text-sm text-green-700">Idéal pour garder le texte sélectionnable.</p>
                        </div>
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Équilibré</h3>
                            <p className="text-sm text-blue-700">Le compromis parfait pour le partage.</p>
                        </div>
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">Extrême</h3>
                            <p className="text-sm text-red-700">Compression maximale pour les très gros fichiers.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Le texte restera-t-il sélectionnable ?",
                a: "Seulement en mode 'Bon'. Les autres modes convertissent les pages en images pour réduire la taille."
            }
        ],

        ctaTitle: "Prêt à réduire ce fichier ?",
        ctaButton: "Compresser PDF Maintenant",
        ctaSubtext: "Gratuit, sûr et canadien.",
        whyTitle: "Pourquoi local ?",
        whyDesc: "Le traitement local signifie aucun temps d'attente et aucun risque pour la confidentialité."
    }
});

export const CompressPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/compress-pdf"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: t.h1, path: `/guides/compress-pdf` }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scissors size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-canada-red/10 text-canada-red font-black text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-gray-900 text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red opacity-10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <Shield className="text-canada-red" size={32} />
                                    {t.whyTitle}
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    {t.whyDesc}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>No upload required</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Data stays on device</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BarChart className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Adjustable compression</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Scissors size={24} />
                            {t.ctaButton}
                        </button>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>
                </div>
            </PageLayout>
        </>
    );
};
