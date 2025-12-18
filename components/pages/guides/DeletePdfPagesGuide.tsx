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
        h1: "How to Delete Pages from a PDF: The definitive Guide",
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
                            <li>You can even turn off your Wi-Fi after the page loads, and the tool will still work perfecty.</li>
                        </ul>
                        <p>
                            This is the gold standard for <button onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')} className="text-canada-red hover:underline font-medium">secure document management</button> in 2025.
                        </p>
                    </>
                )
            },
            {
                id: "scenarios",
                title: "Real-World Scenarios: When to Delete",
                content: (
                    <>
                        <p className="mb-4">
                            Deleting pages isn't just about fixing mistakes. It's a powerful way to repurpose content. Here are common scenarios where this tool shines:
                        </p>
                        <div className="grid gap-4 mt-6">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">The "Clean Scan"</h4>
                                <p className="text-sm">
                                    Scanner feeds often jam or pull two pages at once, resulting in a blank or half-scanned page. Use the tool to surgically remove these errors without rescanning the whole packet.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">The "Client-Ready" Report</h4>
                                <p className="text-sm">
                                    You have a 50-page internal document with budget breakdowns. Before sending it to a client, delete the internal financial pages to create a polished, external-facing version.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-purple-500 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">The eBook Sample</h4>
                                <p className="text-sm">
                                    Authors can take their full manuscript PDF and delete everything except the first three chapters to create a free sample for marketing.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "mobile",
                title: "Deleting Pages on iPhone & Android",
                content: (
                    <>
                        <p className="mb-4">
                            Mobile PDF editing used to require expensive apps that nagged you for a subscription. With our responsive web tool, you don't need to install anything.
                        </p>
                        <p className="mb-4">
                            Simply navigate to this page on Chrome (Android) or Safari (iOS). The interface adapts to touch, letting you <strong>tap to trash</strong> any page you don't want. It's the fastest way to clean up a PDF receipt or ticket while on the go.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Does this perform a 'destructive' delete?",
                a: "Yes and no. The new file you download has the pages completely removed—they are not just hidden. However, your original file on your computer remains untouched. We always create a new copy."
            },
            {
                q: "Can I undo a deletion?",
                a: "Since the tool runs locally, you can simply refresh the page to start over with your original file. Once you download the edited version, those pages are gone from that specific copy."
            },
            {
                q: "I need to reorder pages, not just delete them.",
                a: (
                    <>
                        If you need to shuffle pages around (like moving an appendix to the front), check out our dedicated <button onClick={() => onNavigate('GUIDE_ORGANIZE', '/guides/organize-pdf')} className="text-canada-red hover:underline font-bold">Organize PDF Tool</button>. It allows for drag-and-drop reordering.
                    </>
                )
            }
        ],

        ctaTitle: "Ready to Clean Up Your PDF?",
        ctaButton: "Start Deleting Pages",
        ctaSubtext: "No account needed. 100% Free & Private.",

        supportingSections: [
            {
                title: "A Note on Page Numbers",
                content: "Remember: when you delete pages, the physical page count changes, but any printed page numbers (like 'Page 5 of 10') on the footer of the document will remain the same. If strict pagination is required, you may need to re-number your document using a PDF editor after deletion."
            }
        ]
    },
    fr: {
        seo: {
            title: "Supprimer des Pages PDF (Privé & Sécurisé) | pdfcanada.ca",
            desc: "Le guide définitif 2025 pour supprimer des pages de PDF. Apprenez à nettoyer vos documents en toute sécurité sur n'importe quel appareil sans téléchargement."
        },
        h1: "Comment Supprimer des Pages d'un PDF : Le Guide Complet",
        subtitle: "La méthode simple pour retirer les pages indésirables, vierges ou sensibles de vos documents.",

        intro: (
            <>
                Nous avons tous connu cette situation : vous scannez un contrat et réalisez que <strong>la page 3 est à l'envers</strong>. Ou peut-être avez-vous téléchargé un rapport de 50 pages, mais vous n'avez besoin que du résumé exécutif pour votre équipe.
                <br /><br />
                Par le passé, résoudre ce problème nécessitait des logiciels coûteux comme Adobe Acrobat ou des outils en ligne risqués qui vous obligeaient à télécharger vos données privées sur un serveur distant. <strong>Cela change aujourd'hui.</strong>
                <br /><br />
                Ce guide vous montrera exactement comment nettoyer vos documents en utilisant des <button onClick={() => onNavigate('HOME')} className="text-canada-red hover:underline font-medium">outils modernes et locaux</button> qui gardent vos données en sécurité sur votre propre appareil.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Nettoyer en Secondes",
                content: (
                    <>
                        <p className="mb-4">
                            Supprimer des pages ne devrait pas être compliqué. Notre <strong>Outil de Suppression de Pages</strong> est conçu pour être intuitif, fonctionnant comme une table lumineuse où vous voyez tout d'un coup.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Sélectionnez votre fichier</strong> : Glissez votre PDF directement sur la fenêtre. Grâce à notre <button onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</button>, le fichier s'ouvre instantanément.
                            </li>
                            <li className="pl-2">
                                <strong>Identifiez les coupables</strong> : Cliquez sur les miniatures des pages à supprimer. Elles deviendront rouges, indiquant qu'elles sont marquées pour la suppression.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez</strong> : Cliquez sur le bouton <strong>"Supprimer les pages sélectionnées"</strong> pour obtenir votre nouveau PDF propre immédiatement.
                            </li>
                        </ol>
                        <p>
                            <em><strong>Astuce Pro :</strong> Si vous sélectionnez accidentellement la mauvaise page, cliquez simplement dessus à nouveau pour la désélectionner.</em>
                        </p>
                    </>
                )
            },
            {
                id: "privacy-matters",
                title: "Pourquoi le 'Sans Téléchargement' est Crucial",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous cherchez "supprimer pages pdf en ligne", la plupart des résultats exigent que vous téléchargiez votre document sur un serveur cloud. Pour un menu de cafétéria, c'est bien. Mais pour un <strong>contrat légal, une déclaration fiscale ou un dossier médical</strong> ? C'est un risque énorme.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> est différent. Nous faisons tourner le moteur PDF <em>à l'intérieur de votre navigateur web</em>. Cela signifie :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Votre fichier <strong>ne quitte jamais votre ordinateur</strong>.</li>
                            <li>Aucune copie temporaire n'est créée sur nos serveurs.</li>
                            <li>Vous pouvez même couper votre Wi-Fi après le chargement de la page, et l'outil fonctionnera toujours parfaitement.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "scenarios",
                title: "Scénarios Réels : Quand Supprimer ?",
                content: (
                    <>
                        <p className="mb-4">
                            Supprimer des pages n'est pas seulement pour corriger des erreurs. Voici des scénarios courants où cet outil excelle :
                        </p>
                        <div className="grid gap-4 mt-6">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Le "Scan Propre"</h4>
                                <p className="text-sm">
                                    Les scanneurs avalent souvent deux pages à la fois. Utilisez l'outil pour retirer chirurgicalement ces erreurs sans tout rescaner.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Le Rapport Client</h4>
                                <p className="text-sm">
                                    Vous avez un document interne de 50 pages avec des données budgétaires. Supprimez les pages confidentielles avant de l'envoyer au client.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "mobile",
                title: "Sur iPhone et Android",
                content: (
                    <>
                        <p className="mb-4">
                            L'édition de PDF sur mobile nécessitait auparavant des applications coûteuses. Avec notre outil web réactif, vous n'avez besoin de rien installer.
                        </p>
                        <p className="mb-4">
                            Ouvrez simplement cette page sur Chrome ou Safari. L'interface s'adapte au tactile, vous permettant de <strong>toucher pour supprimer</strong> n'importe quelle page indésirable.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que cela supprime définitivement les pages ?",
                a: "Oui et non. Le nouveau fichier que vous téléchargez a les pages complètement retirées. Cependant, votre fichier original sur votre ordinateur reste intact. Nous créons toujours une nouvelle copie."
            },
            {
                q: "Puis-je annuler une suppression ?",
                a: "Comme l'outil fonctionne localement, rafraîchissez simplement la page pour recommencer avec votre fichier original."
            },
            {
                q: "Je dois réorganiser les pages, pas seulement les supprimer.",
                a: (
                    <>
                        Pour réorganiser l'ordre des pages (comme déplacer une annexe au début), utilisez notre <button onClick={() => onNavigate('GUIDE_ORGANIZE', '/guides/organize-pdf')} className="text-canada-red hover:underline font-bold">Outil Organiser PDF</button>.
                    </>
                )
            }
        ],

        ctaTitle: "Prêt à nettoyer votre PDF ?",
        ctaButton: "Supprimer les pages",
        ctaSubtext: "Gratuit, rapide et sécurisé. Aucune inscription.",

        supportingSections: [
            {
                title: "Une note sur les numéros de page",
                content: "Rappelez-vous : quand vous supprimez des pages, le nombre total change, mais les numéros imprimés (comme 'Page 5 sur 10') resteront les mêmes sur le papier."
            }
        ]
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

                    {/* Intro */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <nav className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                            <MousePointer2 size={16} /> Jump to Section
                        </h3>
                        <div className="grid md:grid-cols-2 gap-2">
                            {t.sections.map((s: any) => (
                                <a key={s.id} href={`#${s.id}`} className="text-sm hover:text-canada-red transition-colors flex items-center gap-2">
                                    <ArrowRight size={12} className="text-canada-red/50" /> {s.title}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Content Sections */}
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

                    {/* Device & Platform Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <Monitor className="text-blue-500" />
                            <span className="text-xs font-bold">Windows</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <Monitor className="text-gray-500" />
                            <span className="text-xs font-bold">macOS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <Smartphone className="text-green-500" />
                            <span className="text-xs font-bold">iPhone</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <Smartphone className="text-orange-500" />
                            <span className="text-xs font-bold">Android</span>
                        </div>
                    </div>

                    {/* CTA Section */}
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

                    {/* Supporting Info */}
                    {t.supportingSections && t.supportingSections.map((s, i) => (
                        <section key={i} className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                            <div className="flex items-center gap-3 mb-4">
                                <Info className="text-blue-600" />
                                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">{s.title}</h3>
                            </div>
                            <p className="text-blue-800 dark:text-blue-400 leading-relaxed">{s.content}</p>
                        </section>
                    ))}

                    {/* FAQ */}
                    <section aria-labelledby="faq-title">
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-canada-red" size={32} />
                            <h2 id="faq-title" className="text-3xl font-bold text-gray-900 dark:text-white">Questions & Answers</h2>
                        </div>
                        <div className="grid gap-4">
                            {t.faq && t.faq.map((item, i) => (
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

                    {/* Footer Nav Links */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                            <Globe size={16} /> Localized in Canada 🇨🇦
                        </div>
                        <button
                            onClick={() => onNavigate('HOME')}
                            className="flex items-center gap-2 text-canada-red font-bold hover:gap-4 transition-all"
                        >
                            Back to Tools <MoveRight size={18} />
                        </button>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
