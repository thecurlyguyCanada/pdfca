import React from 'react';
import { GripVertical, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart } from 'lucide-react';
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
            title: "How to Merge PDF Files Online | Combine PDFs Free | pdfcanada.ca",
            desc: "Learn how to combine multiple PDF files into one document securely in your browser. Rearrange pages and merge instantly with no size limits."
        },
        h1: "How to Merge PDF Files",
        subtitle: "Combine multiple documents into a single, organized PDF file.",

        intro: (
            <>
                Keeping track of multiple related PDF files can be a nightmare. Whether it's invoices, receipts, or chapters of a report, <strong>merging them into a single PDF</strong> keeps everything organized and professional.
                <br /><br />
                Our merge tool lets you combine unlimited files, reorder them exactly how you want, and save them as one document—all without uploading anything to a server.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Combining PDFs",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Select Files</strong>: Click to upload or drag multiple PDF files into our <button onClick={() => onNavigate('TOOL_PAGE', '/merge-pdf')} className="text-canada-red hover:underline font-medium">Merge PDF tool</button>.
                        </li>
                        <li className="pl-2">
                            <strong>Reorder</strong>: Drag and drop the files to arrange them in the correct order.
                        </li>
                        <li className="pl-2">
                            <strong>Merge</strong>: Click the "Merge PDF" button to combine them instantly.
                        </li>
                        <li className="pl-2">
                            <strong>Download</strong>: Save your new, single document.
                        </li>
                    </ol>
                )
            },
            {
                id: "tips",
                title: "Pro Tips for Merging",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Order Matters</h3>
                            <p className="text-sm text-blue-700">The file at the top of the list will be the first pages of your new PDF. Make sure to arrange them chronologically or logically.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Compress After Merging</h3>
                            <p className="text-sm text-green-700">Merging many files can create a large PDF. Use our <button onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')} className="underline">Compress tool</button> afterwards if the file is too big to email.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Is there a limit to how many files I can merge?",
                a: "No! You can add as many files as your browser memory allows. We recommend doing 10-20 at a time for the best performance."
            },
            {
                q: "Can I merge password-protected files?",
                a: "You'll need to unlock them first. If you have the password, you can use a PDF viewer to save a copy without the password before merging."
            }
        ],

        ctaTitle: "Ready to Get Organized?",
        ctaButton: "Merge PDFs Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Merge Locally?",
        whyDesc: "Your files are merged directly in your browser. This means they are never sent to a remote server, ensuring confidential documents stay confidential."
    },
    fr: {
        seo: {
            title: "Comment fusionner des fichiers PDF en ligne | pdfcanada.ca",
            desc: "Apprenez à combiner plusieurs fichiers PDF en un seul document en toute sécurité. Réorganisez les pages et fusionnez instantanément."
        },
        h1: "Comment fusionner des fichiers PDF",
        subtitle: "Combinez plusieurs documents en un seul fichier organisé.",

        intro: (
            <>
                Gérer plusieurs fichiers PDF peut être un cauchemar. Qu'il s'agisse de factures, de reçus ou de chapitres, <strong>les fusionner en un seul PDF</strong> permet de rester organisé.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Sélectionnez</strong> vos fichiers via notre <button onClick={() => onNavigate('TOOL_PAGE', '/merge-pdf')} className="text-canada-red hover:underline font-medium">outil de fusion</button>.</li>
                        <li className="pl-2"><strong>Réorganisez</strong> l'ordre par glisser-déposer.</li>
                        <li className="pl-2"><strong>Cliquez sur 'Fusionner'</strong> pour combiner.</li>
                        <li className="pl-2"><strong>Téléchargez</strong> votre nouveau document unique.</li>
                    </ol>
                )
            },
            {
                id: "tips",
                title: "Conseils de Pro",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">L'ordre compte</h3>
                            <p className="text-sm text-blue-700">Le fichier en haut de la liste apparaîtra en premier. Arrangez-les logiquement.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Compressez après</h3>
                            <p className="text-sm text-green-700">Si le fichier final est trop gros, utilisez ensuite notre outil de compression.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite de fichiers ?",
                a: "Non ! Tant que votre navigateur le supporte. Nous recommandons 10-20 à la fois pour la rapidité."
            }
        ],

        ctaTitle: "Prêt à vous organiser ?",
        ctaButton: "Fusionner PDF Maintenant",
        ctaSubtext: "Gratuit, sûr et canadien.",
        whyTitle: "Pourquoi local ?",
        whyDesc: "Vos fichiers sont fusionnés directement dans votre navigateur. Aucune donnée n'est envoyée sur un serveur."
    }
});

export const MergePdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/merge-pdf"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: t.h1, path: `/guides/merge-pdf` }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<GripVertical size={32} />}>
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
                                        <span>Unlimited files</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Drag & drop reordering</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BarChart className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>100% Private</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/merge-pdf')}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <GripVertical size={24} />
                            {t.ctaButton}
                        </button>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>
                </div>
            </PageLayout>
        </>
    );
};
