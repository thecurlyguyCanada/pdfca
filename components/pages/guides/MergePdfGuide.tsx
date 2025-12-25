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
            title: "How to Merge PDF Files | Free & Secure 2026 Guide | pdfcanada.ca",
            desc: "Learn how to combine multiple PDF files into one securely. Our 2026 guide shows you how to merge PDFs locally in your browser without uploads. Fast & Private."
        },
        h1: "How to Merge PDF Files: The 2026 Guide",
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
            title: "Comment Fusionner des PDF | Guide Sécurisé 2026 | pdfcanada.ca",
            desc: "Découvrez comment fusionner plusieurs PDF en toute sécurité dans votre navigateur avec notre guide 2026. Combinez vos documents sans téléchargement—100% privé."
        },
        h1: "Comment Fusionner des Fichiers PDF : Le Guide Complet",
        subtitle: "Combinez plusieurs documents PDF en un seul fichier organisé et professionnel.",

        intro: (
            <>
                Gérer plusieurs fichiers PDF peut être un cauchemar. Qu'il s'agisse de factures pour votre déclaration de revenus, de reçus de dépenses, ou de chapitres d'un rapport, <strong>les fusionner en un seul PDF</strong> permet de rester organisé et professionnel.
                <br /><br />
                Notre outil de fusion vous permet de combiner un nombre illimité de fichiers, de les réorganiser exactement comme vous le souhaitez, et de les enregistrer en un seul document — le tout sans jamais télécharger vos fichiers sur un serveur externe.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Comment Fusionner vos PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Sélectionnez vos fichiers</strong> : Cliquez pour télécharger ou faites glisser plusieurs fichiers PDF dans notre <button onClick={() => onNavigate('TOOL_PAGE', '/merge-pdf')} className="text-canada-red hover:underline font-medium">outil de fusion PDF</button>.</li>
                        <li className="pl-2"><strong>Réorganisez l'ordre</strong> : Glissez et déposez les fichiers pour les arranger dans l'ordre souhaité. Le premier fichier sera au début du document final.</li>
                        <li className="pl-2"><strong>Fusionnez</strong> : Cliquez sur le bouton "Fusionner PDF" pour combiner instantanément tous vos fichiers.</li>
                        <li className="pl-2"><strong>Téléchargez</strong> : Enregistrez votre nouveau document unique, prêt à être partagé ou archivé.</li>
                    </ol>
                )
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants pour la Fusion de PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Déclarations de Revenus</strong> : Combinez tous vos T4, reçus et documents de dépenses en un seul fichier pour l'ARC (Agence du revenu du Canada).</p>
                        <p><strong>Rapports d'Entreprise</strong> : Fusionnez les sections créées par différentes équipes en un document professionnel unique.</p>
                        <p><strong>Portfolios</strong> : Créez un portfolio PDF complet en combinant votre CV, lettres de recommandation et échantillons de travail.</p>
                        <p><strong>Documents Juridiques</strong> : Assemblez tous les formulaires, contrats et pièces justificatives en un seul dossier.</p>
                    </div>
                )
            },
            {
                id: "tips",
                title: "Conseils de Pro pour la Fusion",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">L'ordre compte</h3>
                            <p className="text-sm text-blue-700">Le fichier en haut de la liste apparaîtra en premier dans le document final. Arrangez-les logiquement ou chronologiquement.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Compressez après</h3>
                            <p className="text-sm text-green-700">Si le fichier final est trop volumineux pour l'envoyer par courriel, utilisez notre <button onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')} className="underline">outil de compression</button> pour réduire sa taille.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite au nombre de fichiers que je peux fusionner ?",
                a: "Non ! Vous pouvez ajouter autant de fichiers que la mémoire de votre navigateur le permet. Nous recommandons de fusionner 10-20 fichiers à la fois pour des performances optimales."
            },
            {
                q: "Puis-je fusionner des fichiers protégés par mot de passe ?",
                a: "Vous devrez d'abord les déverrouiller. Si vous avez le mot de passe, vous pouvez utiliser un lecteur PDF pour enregistrer une copie sans mot de passe avant de fusionner."
            },
            {
                q: "La qualité des images et du texte sera-t-elle réduite ?",
                a: "Non. Nous fusionnons les PDF sans re-compression ni perte de qualité. Votre contenu conserve sa qualité d'origine."
            }
        ],

        ctaTitle: "Prêt à Vous Organiser ?",
        ctaButton: "Fusionner PDF Maintenant",
        ctaSubtext: "Gratuit, Sécurisé et Canadien.",
        whyTitle: "Pourquoi la Fusion Locale ?",
        whyDesc: "Vos fichiers sont fusionnés directement dans votre navigateur. Cela signifie qu'ils ne sont jamais envoyés sur un serveur distant, garantissant que vos documents confidentiels restent confidentiels."
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
                faqs={t.faq}
                lang={lang}
                datePublished="2024-02-15"
                dateModified="2025-12-24"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: lang === 'fr' ? '/fr/guides/merge-pdf' : '/guides/merge-pdf' }
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
