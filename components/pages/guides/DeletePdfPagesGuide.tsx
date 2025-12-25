import React from 'react';
import { Trash2, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, MousePointer2, Smartphone, Monitor, Info, HelpCircle, FileText, MoveRight } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "How to Delete PDF Pages | Free & Private 2026 Guide | pdfcanada.ca",
            desc: "Learn how to remove pages from PDF securely. Our definitive 2026 guide shows you how to delete pages locally on any device without uploads. Free and private."
        },
        h1: "How to Delete PDF Pages: The 2026 Guide",
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
            title: "Comment Supprimer des Pages PDF | Guide Local 2026 | pdfcanada.ca",
            desc: "Apprenez à supprimer des pages de vos PDF en toute sécurité. Notre guide 2026 vous montre comment retirer des pages localement sans téléchargement. Gratuit et privé."
        },
        h1: "Comment Supprimer des Pages d'un PDF : Le Guide Complet",
        subtitle: "La méthode simple et sécurisée pour retirer les pages indésirables, vierges ou sensibles de vos documents.",

        intro: (
            <>
                Nous avons tous connu cette situation : vous scannez un contrat et réalisez que <strong>la page 3 est à l'envers</strong> ou contient des informations erronées. Ou peut-être avez-vous téléchargé un rapport de 50 pages alors que vous n'avez besoin que des 5 premières.
                <br /><br />
                Ce guide vous montrera exactement comment <strong>supprimer des pages d'un PDF</strong> en utilisant des outils qui traitent tout localement dans votre navigateur, gardant vos données sensibles en sécurité.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Nettoyer Votre PDF en Secondes",
                content: (
                    <>
                        <p className="mb-4">
                            Supprimer des pages ne devrait pas être compliqué. Notre outil est conçu pour être intuitif et rapide.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Sélectionnez votre fichier</strong> : Téléchargez votre PDF dans notre <button onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')} className="text-canada-red hover:underline font-medium">outil de suppression de pages</button>.
                            </li>
                            <li className="pl-2">
                                <strong>Identifiez les pages à supprimer</strong> : Vous verrez des miniatures de toutes les pages. Cliquez sur celles que vous voulez retirer.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez votre PDF nettoyé</strong> : Cliquez sur "Supprimer" et téléchargez votre nouveau document sans les pages indésirables.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants",
                content: (
                    <>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Documents scannés</strong> : Retirez les pages vierges ou mal scannées de vos documents numérisés.</li>
                            <li><strong>Rapports volumineux</strong> : Extrayez seulement les pages pertinentes d'un long rapport.</li>
                            <li><strong>Formulaires gouvernementaux</strong> : Supprimez les pages d'instructions inutiles avant de soumettre à l'ARC ou IRCC.</li>
                            <li><strong>Contrats</strong> : Retirez les annexes obsolètes ou les pages de signature vides.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Oui, absolument ! Comme tous nos outils, la suppression de pages est 100% gratuite sans aucune limite."
            },
            {
                q: "Puis-je récupérer les pages supprimées ?",
                a: "Non. Une fois le nouveau PDF créé, les pages supprimées sont définitivement retirées. Votre fichier original reste intact sur votre ordinateur, donc conservez-le si vous pensez avoir besoin de ces pages plus tard."
            },
            {
                q: "Est-ce que mes fichiers sont envoyés sur un serveur ?",
                a: "Jamais ! Tout le traitement se fait localement dans votre navigateur. Vos documents confidentiels ne quittent jamais votre appareil."
            }
        ],

        ctaTitle: "Prêt à Nettoyer Votre PDF ?",
        ctaButton: "Supprimer les Pages",
        ctaSubtext: "Gratuit, Rapide et Sécurisé."
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
                faqs={t.faq}
                lang={lang}
                schema={schema}
                datePublished="2024-01-15"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I delete pages from a PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil de suppression de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les pages à supprimer (elles deviennent rouges), puis cliquez sur 'Supprimer'. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                        : "Use pdfcanada.ca's Delete PDF Pages tool. Upload your PDF, click on pages you want to remove (they turn red), then click 'Delete Selected Pages'. All processing happens locally in your browser - your files never leave your device.",
                    tool: "PDF Page Remover",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Cliquez sur les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                        : ["Upload your PDF file", "Click on pages to remove", "Download your cleaned PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Supprimer des pages PDF' : 'Delete PDF Pages', path: lang === 'fr' ? '/fr/guides/delete-pdf-pages' : '/guides/delete-pdf-pages' }
                ]}
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

                    <AISnapshot
                        question="How do I delete pages from a PDF?"
                        answer="The best way to delete PDF pages is using a local-first tool that processes files directly in your browser. Select your PDF, click on the pages you want to remove, and download the cleaned document. No uploads required."
                        toolName="Delete PDF Pages"
                        steps={["Upload your PDF file", "Click pages to mark for deletion", "Download cleaned PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} onNavigate={onNavigate} currentPath="/guides/delete-pdf-pages" category="edit" />

                    <AuthorBio lang={lang} onNavigate={onNavigate} />
                </div>
            </PageLayout>
        </>
    );
};
