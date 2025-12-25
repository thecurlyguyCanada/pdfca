import React from 'react';
import { Mail, CheckCircle, Shield, Zap, ArrowRight, Printer, Smartphone, Monitor } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { AISnapshot } from '../../AISnapshot';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "How to Save Email as PDF | Free & Secure 2026 Guide | pdfcanada.ca",
            desc: "Keep important emails as secure PDF files. Our 2026 guide shows you how to convert Outlook, Gmail, and Windows Mail to PDF locally and for free. Secure & Private."
        },
        h1: "How to Save Email as PDF: The 2026 Guide",
        subtitle: "The complete guide to archiving your important correspondence instantly.",
        intro: (
            <>
                Saving an email as a PDF is more than just a tech trick; it's a necessity for legal records, expense reports, and offline backups. Unlike taking a screenshot, converting an email to a PDF preserves the text, links, and formatting in a professional document that anyone can open.
                <br /><br />
                Whether you use <strong>Gmail</strong>, <strong>Outlook</strong>, or an <strong>iPhone</strong>, this guide will show you exactly how to turn that message into a permanent portable document file.
            </>
        ),
        sections: [
            {
                id: "gmail",
                title: "How to Save a Gmail Email as PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Gmail has a built-in feature to "Print to PDF" that is quick and universally available on all browsers.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Open the Email</strong>: Click on the email you wish to save.</li>
                            <li className="pl-2"><strong>Click the 'More' Icon</strong>: Look for the three dots (⋮) in the top-right corner of the email container (not the browser window).</li>
                            <li className="pl-2"><strong>Select 'Print'</strong>: This will open a print dialog preview.</li>
                            <li className="pl-2"><strong>Change Destination</strong>: In the print window, change the printer from your physical printer to <strong>"Save as PDF"</strong>.</li>
                            <li className="pl-2"><strong>Save</strong>: Click save and choose a location on your computer.</li>
                        </ol>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                            <strong>Pro Tip:</strong> Removing graphics or background colors in the print settings can make the PDF cleaner and easier to read.
                        </div>
                    </>
                )
            },
            {
                id: "outlook",
                title: "How to Save Outlook Emails as PDF",
                content: (
                    <>
                        <p className="mb-4">
                            For Outlook users (both Web and Desktop app), the process relies on the print driver.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Outlook Web (Outlook.com)</h4>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Open message &gt; Click the three dots (...) &gt; Select <strong>Print</strong>.</li>
                                    <li>In the new window, click <strong>Print</strong> again at the top.</li>
                                    <li>Set destination to <strong>"Save as PDF"</strong>.</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Outlook Desktop App</h4>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Go to <strong>File &gt; Print</strong>.</li>
                                    <li>Under "Printer", select <strong>"Microsoft Print to PDF"</strong>.</li>
                                    <li>Click <strong>Print</strong>. You will be prompted to name your file and choose a save location.</li>
                                </ol>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "mobile",
                title: "Save Email as PDF on iPhone (iOS)",
                content: (
                    <>
                        <p className="mb-4">
                            Your iPhone has a hidden "Print gesture" that instantly converts emails to PDFs.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Open the <strong>Mail app</strong> and tap the email.</li>
                            <li className="pl-2">Tap the <strong>Reply/Forward button</strong> (curved arrow) at the bottom.</li>
                            <li className="pl-2">Scroll down and tap <strong>Print</strong>.</li>
                            <li className="pl-2">
                                <strong>The Secret Step:</strong> On the "Printer Options" screen, you will see a preview of the document. <strong>Pinch outwards</strong> (zoom in) on the preview image.
                            </li>
                            <li className="pl-2">It is now a PDF! Tap the <strong>Share icon</strong> (top right) and choose "Save to Files".</li>
                        </ol>
                    </>
                )
            },
            {
                id: "next-steps",
                title: "What to do with your new PDF?",
                content: (
                    <>
                        <p className="mb-4">
                            Now that you have your email saved as a PDF, you might need to clean it up.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-canada-red font-bold">•</span>
                                <div>
                                    <strong>Remove Blank Pages:</strong> Printers often add blank pages to emails. Use our <button onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Delete Pages Tool</button> to remove them.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-canada-red font-bold">•</span>
                                <div>
                                    <strong>Private & Secure:</strong> Since text emails are sensitive, always avoid uploading them to unauthorized servers. All tools on <strong>pdfcanada.ca</strong> run locally on your device for maximum privacy.
                                </div>
                            </li>
                        </ul>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Can I save multiple emails as one PDF?",
                a: "Directly from Gmail or Outlook, no. You would need to save each email as a PDF individually, and then use a 'Merge PDF' tool to combine them."
            },
            {
                q: "Do attachments get saved in the PDF?",
                a: "No. The 'Print to PDF' function only captures the body of the email. Attachments remain separate files."
            },
            {
                q: "Is this secure?",
                a: "Yes. Using the 'Print to PDF' feature on your computer keeps the data entirely local. No content is sent to any third-party conversion server."
            }
        ],
        ctaTitle: "Need to Clean Up Your Saved Emails?",
        ctaButton: "Remove Unwanted Pages",
        ctaSubtext: "Free, Local, and Private."
    },
    fr: {
        seo: {
            title: "Enregistrer Courriel en PDF | Guide Sécurisé 2026 | pdfcanada.ca",
            desc: "Conservez vos courriels importants sous forme de fichiers PDF sécurisés. Notre guide 2026 vous montre comment convertir sans risque vos courriels Outlook ou Gmail."
        },
        h1: "Comment Enregistrer un Courriel en PDF",
        subtitle: "Le guide complet pour archiver instantanément votre correspondance importante.",
        intro: (
            <>
                Enregistrer un courriel en PDF est plus qu'une simple astuce technique; c'est une nécessité pour les dossiers juridiques, les notes de frais et les sauvegardes hors ligne. Contrairement à une capture d'écran, la conversion d'un courriel en PDF préserve le texte, les liens et la mise en forme dans un document professionnel.
                <br /><br />
                Que vous utilisiez <strong>Gmail</strong>, <strong>Outlook</strong> ou un <strong>iPhone</strong>, ce guide vous montrera exactement comment transformer ce message en fichier portable permanent.
            </>
        ),
        sections: [
            {
                id: "gmail",
                title: "Enregistrer un courriel Gmail en PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Gmail dispose d'une fonction « Imprimer au format PDF » rapide et universelle.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Ouvrez le courriel</strong> : Cliquez sur le message à sauvegarder.</li>
                            <li className="pl-2"><strong>Cliquez sur l'icône « Plus »</strong> : Cherchez les trois points (⋮) dans le coin supérieur droit du courriel.</li>
                            <li className="pl-2"><strong>Sélectionnez « Imprimer »</strong> : Cela ouvrira un aperçu.</li>
                            <li className="pl-2"><strong>Changez la destination</strong> : Dans la fenêtre d'impression, remplacez l'imprimante par <strong>« Enregistrer au format PDF »</strong>.</li>
                            <li className="pl-2"><strong>Enregistrez</strong> : Choisissez l'emplacement sur votre ordinateur.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "outlook",
                title: "Enregistrer des courriels Outlook en PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Pour les utilisateurs Outlook, le processus repose sur le pilote d'impression.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Outlook Web (Outlook.com)</h4>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Ouvrez le message &gt; Cliquez sur les trois points (...) &gt; <strong>Imprimer</strong>.</li>
                                    <li>Dans la nouvelle fenêtre, cliquez à nouveau sur <strong>Imprimer</strong> en haut.</li>
                                    <li>Réglez la destination sur <strong>« Enregistrer au format PDF »</strong>.</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Application Bureau Outlook</h4>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Allez dans <strong>Fichier &gt; Imprimer</strong>.</li>
                                    <li>Sous « Imprimante », choisissez <strong>« Microsoft Print to PDF »</strong>.</li>
                                    <li>Cliquez sur <strong>Imprimer</strong> et choisissez où sauvegarder le fichier.</li>
                                </ol>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "mobile",
                title: "Enregistrer en PDF sur iPhone (iOS)",
                content: (
                    <>
                        <p className="mb-4">
                            Votre iPhone possède un « geste » caché qui convertit instantanément les courriels.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Ouvrez l'app <strong>Mail</strong> et touchez le courriel.</li>
                            <li className="pl-2">Touchez le <strong>bouton Répondre/Transférer</strong> (flèche courbe) en bas.</li>
                            <li className="pl-2">Faites défiler et touchez <strong>Imprimer</strong>.</li>
                            <li className="pl-2">
                                <strong>L'astuce secrète :</strong> Sur l'écran des options, vous verrez un aperçu. <strong>Écartez deux doigts</strong> (zoom avant) sur l'image de l'aperçu.
                            </li>
                            <li className="pl-2">C'est maintenant un PDF ! Touchez l'icône <strong>Partager</strong> et choisissez « Enregistrer dans Fichiers ».</li>
                        </ol>
                    </>
                )
            },
            {
                id: "next-steps",
                title: "Que faire avec votre nouveau PDF ?",
                content: (
                    <>
                        <p className="mb-4">
                            Une fois votre courriel sauvegardé, vous voudrez peut-être le nettoyer.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-canada-red font-bold">•</span>
                                <div>
                                    <strong>Supprimer les pages blanches :</strong> L'impression ajoute souvent des pages vides. Utilisez notre <button onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Outil de suppression de pages</button>.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-canada-red font-bold">•</span>
                                <div>
                                    <strong>Privé et Sécurisé :</strong> Évitez de télécharger vos courriels sur des serveurs tiers. Tous les outils de <strong>pdfcanada.ca</strong> fonctionnent localement.
                                </div>
                            </li>
                        </ul>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Puis-je enregistrer plusieurs courriels en un seul PDF ?",
                a: "Pas directement. Vous devez enregistrer chaque courriel individuellement, puis utiliser un outil de fusion PDF."
            },
            {
                q: "Les pièces jointes sont-elles incluses ?",
                a: "Non. La fonction « Imprimer en PDF » ne capture que le corps du texte. Les pièces jointes restent séparées."
            },
            {
                q: "Est-ce sécurisé ?",
                a: "Oui. L'utilisation de la fonction native de votre ordinateur garde les données entièrement locales."
            }
        ],
        ctaTitle: "Besoin de nettoyer vos PDF ?",
        ctaButton: "Supprimer les pages inutiles",
        ctaSubtext: "Gratuit, Local et Privé."
    }
});

export const EmailToPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const quickAnswerData = {
        question: lang === 'fr' ? "Comment enregistrer un courriel en PDF?" : "How do I save an email as PDF?",
        answer: lang === 'fr'
            ? "Gmail/Outlook: Ouvrez le courriel → Cliquez sur les trois points → Sélectionnez 'Imprimer' → Changez la destination en 'Enregistrer au format PDF' → Sauvegardez. iPhone: Ouvrez le courriel → Appuyez sur Répondre → Imprimer → Écartez deux doigts sur l'aperçu → Partagez et sauvegardez."
            : "Gmail/Outlook: Open email → Click three dots → Select 'Print' → Change destination to 'Save as PDF' → Save. iPhone: Open email → Tap Reply → Print → Pinch outward on preview → Share and save.",
        steps: lang === 'fr'
            ? ["Ouvrez le courriel dans Gmail/Outlook/Mail", "Sélectionnez Imprimer", "Choisissez 'Enregistrer au format PDF'", "Sauvegardez le fichier"]
            : ["Open the email in Gmail/Outlook/Mail", "Select Print", "Choose 'Save as PDF'", "Save the file"]
    };

    const schema = [
        {
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Open Email", "text": "Open the email in Gmail, Outlook, or Apple Mail." },
                { "@type": "HowToStep", "position": 2, "name": "Select Print", "text": "Navigate to the print options." },
                { "@type": "HowToStep", "position": 3, "name": "Choose Save as PDF", "text": "Select 'Save as PDF' from the printer list and save the file." }
            ]
        },
        {
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-06-01",
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
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/email-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={quickAnswerData}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Email to PDF', path: '/guides/email-to-pdf' }
                ]}
            />
            <AISnapshot
                lang={lang}
                question={quickAnswerData.question}
                answer={quickAnswerData.answer}
                steps={quickAnswerData.steps}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Mail size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'Email to PDF', onClick: () => { } }
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
                                    {section.id === 'gmail' && <Mail size={28} className="text-canada-red" />}
                                    {section.id === 'outlook' && <Monitor size={28} className="text-blue-600" />}
                                    {section.id === 'mobile' && <Smartphone size={28} className="text-gray-800 dark:text-gray-200" />}
                                    {!['gmail', 'outlook', 'mobile'].includes(section.id) && <CheckCircle size={28} className="text-green-600" />}
                                    {section.title}
                                </h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Pro Tip Box */}
                    <div className="my-20 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 border border-gray-100 dark:border-gray-800">
                        <div className="bg-canada-red p-6 rounded-3xl shrink-0">
                            <Printer size={48} className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">Why "Print to PDF"?</h4>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                Most operating systems (Windows, macOS, iOS, Android) treat PDF creation as a type of "printing". By using the print dialog, you trick the computer into "printing" the digital file onto your hard drive instead of a piece of paper.
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Questions & Answers</h3>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {t.faq.map((item: any, i: number) => (
                                <details key={i} className="group py-6 cursor-pointer">
                                    <summary className="text-xl font-bold flex justify-between items-center group-hover:text-canada-red transition-all text-gray-900 dark:text-white">
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
                    <div className="mt-20 bg-canada-red p-12 rounded-[3.5rem] text-center shadow-2xl shadow-red-500/20 text-white">
                        <h2 className="text-3xl font-black mb-6">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')}
                            className="bg-white text-canada-red px-12 py-4 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-all text-wrap"
                        >
                            {t.ctaButton}
                        </button>
                        <p className="mt-6 text-sm opacity-80 font-medium">{t.ctaSubtext}</p>
                    </div>

                    <RelatedTools lang={lang} onNavigate={onNavigate} currentPath="/guides/email-to-pdf" category="convert" />

                    <AuthorBio lang={lang} onNavigate={onNavigate} />
                </div>
            </PageLayout>
        </div>
    );
};
