import React from 'react';
import { Trash2, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, MousePointer2, Smartphone, Monitor, Info, HelpCircle, FileText, MoveRight } from 'lucide-react';
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
            title: "How to Delete Pages from PDF (Free & Private) | pdfcanada.ca",
            desc: "The definitive 2025 guide to removing pages from PDFs. Learn how to delete pages securely on any device without uploading your files."
        },
        h1: "How to Delete Pages from a PDF: The Definitive Guide",
        subtitle: "A complete walkthrough on removing unwanted, blank, or sensitive pages from your documents—securely and for free.",

        intro: (
            <>
                We've all been there: you scan a contract and realize <strong>page 3 is upside down</strong> or blurry. Or maybe you've downloaded a 50-page board report, but you only need to share the executive summary with your team.
                <br /><br />
                In the past, solving this required expensive software like Adobe Acrobat or risky online tools that forced you to upload your private data to a remote server. <strong>That changes today.</strong>
                <br /><br />
                This guide will show you exactly how to remove pages from any PDF document using <button onClick={() => onNavigate('HOME')} className="text-canada-red hover:underline font-medium">modern, local-first tools</button> that keep your data safe on your own device.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Removing Pages in Seconds",
                content: (
                    <>
                        <p className="mb-4">
                            Deleting pages doesn't need to be complicated. Our <strong>Delete PDF Pages tool</strong> is designed to be intuitive, functioning much like a physical light table where you can see all your pages at once.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Select Your File</strong>: Drag your PDF directly onto the browser window. Because we use <button onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First technology</button>, the file opens instantly—no upload bar, no waiting.
                            </li>
                            <li className="pl-2">
                                <strong>Identify the Culprits</strong>: You'll see a grid of page thumbnails. Simply click on the pages you want to remove. They will turn red, indicating they are marked for deletion.
                            </li>
                            <li className="pl-2">
                                <strong>Export and Save</strong>: Once you've selected all the unwanted pages, click the <strong>"Delete Selected Pages"</strong> button. Your new, clean PDF will be generated immediately.
                            </li>
                        </ol>
                        <p>
                            <em><strong>Pro Tip:</strong> If you accidentally select the wrong page, just click it again to unselect it.</em>
                        </p>
                    </>
                )
            },
            {
                id: "privacy-matters",
                title: "Why 'No Upload' Matters for Security",
                content: (
                    <>
                        <p className="mb-4">
                            When you search for "delete pdf pages online," most results require you to upload your document to a cloud server. For a cafeteria menu, that's fine. But for a <strong>legal contract, tax return, or medical record</strong>? It's a massive risk.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is different. We run the PDF processing engine <em>inside your web browser</em>. This means:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Your file <strong>never leaves your computer</strong>.</li>
                            <li>No temporary copies are created on our servers.</li>
                            <li>You can even turn off your Wi-Fi after the page loads, and the tool will still work perfectly.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Does this perform a 'destructive' delete?",
                a: "Yes and no. The new file you download has the pages completely removed—they are not just hidden. However, your original file on your computer remains untouched."
            },
            {
                q: "Can I undo a deletion?",
                a: "Since the tool runs locally, you can simply refresh the page to start over with your original file."
            }
        ],

        ctaTitle: "Ready to Clean Up Your PDF?",
        ctaButton: "Start Deleting Pages",
        ctaSubtext: "No account needed. 100% Free & Private.",

        supportingSections: [
            {
                title: "A Note on Page Numbers",
                content: "Remember: when you delete pages, the physical page count changes, but any printed page numbers (like 'Page 5 of 10') on the footer of the document will remain the same."
            }
        ]
    },
    fr: {
        seo: {
            title: "Supprimer des Pages PDF (Privé & Sécurisé) | pdfcanada.ca",
            desc: "Le guide définitif 2025 pour supprimer des pages de PDF. Apprenez à nettoyer vos documents en toute sécurité sans téléchargement."
        },
        h1: "Comment Supprimer des Pages d'un PDF : Le Guide Complet",
        subtitle: "La méthode simple pour retirer les pages indésirables, vierges ou sensibles de vos documents.",

        intro: (
            <>
                Nous avons tous connu cette situation : vous scannez un contrat et réalisez que <strong>la page 3 est à l'envers</strong>. Ou peut-être avez-vous téléchargé un rapport de 50 pages.
                <br /><br />
                Ce guide vous montrera exactement comment nettoyer vos documents en utilisant des outils locaux qui gardent vos données en sécurité.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Nettoyer en Secondes",
                content: (
                    <>
                        <p className="mb-4">
                            Supprimer des pages ne devrait pas être compliqué. Notre outil est conçu pour être intuitif.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Sélectionnez votre fichier</strong></li>
                            <li className="pl-2"><strong>Identifiez les pages</strong></li>
                            <li className="pl-2"><strong>Téléchargez</strong></li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Oui, comme toujours chez nous."
            }
        ],

        ctaTitle: "Prêt à nettoyer votre PDF ?",
        ctaButton: "Supprimer les pages",
        ctaSubtext: "Gratuit, rapide et sécurisé."
    }
});

export const DeletePdfPagesGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select File", "text": "Upload your PDF document to the tool locally." },
                { "@type": "HowToStep", "position": 2, "name": "Select Pages", "text": "Identify and click the pages you want to remove." },
                { "@type": "HowToStep", "position": 3, "name": "Remove and Download", "text": "Finalize the deletion and download the new file." }
            ]
        }
    ];

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/delete-pdf-pages"
                lang={lang}
                schema={schema}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Trash2 size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-black text-gray-100 dark:text-gray-800">{idx + 1}</span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-3xl p-12 text-center text-white shadow-xl">
                        <Zap className="mx-auto mb-6 opacity-50" size={48} />
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <p className="text-white/80 mb-8 font-medium">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')}
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </button>
                    </section>

                    <section aria-labelledby="faq-title">
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-canada-red" size={32} />
                            <h2 id="faq-title" className="text-3xl font-bold text-gray-900 dark:text-white">Questions & Answers</h2>
                        </div>
                        <div className="grid gap-4">
                            {t.faq && t.faq.map((item: any, i: number) => (
                                <details key={i} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-canada-red transition-all">
                                    <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center group-open:text-canada-red">
                                        {item.q}
                                        <span className="text-gray-300 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                                        {item.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </PageLayout>
        </>
    );
};
