import React from 'react';
import { RotateCw, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Monitor, RefreshCcw } from 'lucide-react';
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
            title: "How to Rotate PDF Pages | Free & Permanent 2026 Guide | pdfcanada.ca",
            desc: "Fix upside-down PDFs forever. Our 2026 guide teaches you how to rotate pages permanently in your browser. Secure local-first processing ensures your privacy."
        },
        h1: "How to Rotate PDF Pages: The 2026 Guide",
        subtitle: "The simple guide to fixing incorrectly oriented documents permanently.",

        intro: (
            <>
                We've all been there: you open an important scan and it's sideways. Or worse, the entire document is upside down. If you're looking to <button onClick={() => onNavigate('TOOL_PAGE', '/rotate-pdf')} className="text-canada-red hover:underline font-bold">rotate PDF online free</button>, you've come to the right place.
                <br /><br />
                Unlike a standard PDF viewer where rotation is only temporary (it resets when you close the file), our tool updates the file structure so the orientation is fixed <strong>permanently</strong> for everyone who opens it.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "3 Easy Steps to Fix PDF Orientation",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Select Your PDF</strong>: Upload the file that needs fixing. Our <button onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First technology</button> processes it instantly.
                            </li>
                            <li className="pl-2">
                                <strong>Rotate Individual Pages</strong>: Click the rotate buttons on specific pages, or use "Rotate All" if the whole document is sideways.
                            </li>
                            <li className="pl-2">
                                <strong>Save Changes</strong>: Click 'Process PDF' and download your perfectly aligned document.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "why-rotate",
                title: "Why Rotation Matters",
                content: (
                    <>
                        Incorrect orientation isn't just a minor annoyance; it can be a professional liability.
                        <br /><br />
                        <strong>Readability</strong>: Sideways documents are impossible to read on mobile devices without constant zooming.
                        <br />
                        <strong>Professionalism</strong>: Sending a sideways contract to a client shows a lack of attention to detail.
                    </>
                )
            },
            {
                id: "scenarios",
                title: "Common Rotation Scenarios",
                content: (
                    <>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>The Mixed Scan</strong>: You scanned a stack of papers, but one landscape chart got scanned as portrait. You can rotate just that single page.</li>
                            <li><strong>The Wrong Way Up</strong>: You loaded the paper into the feeder upside down. Use "Rotate All 180°" to fix the entire batch in one click.</li>
                        </ul>
                        <p className="mt-4">
                            <em>Note: If the page is blurry or unreadable even after rotation, you might just want to <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline font-medium">delete it entirely</button>.</em>
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Will rotating the PDF reduce the quality?",
                a: "No. Our tool only updates the orientation metadata within the PDF. The quality of your text and images remains identical."
            },
            {
                q: "Can I rotate just one page in a PDF?",
                a: "Yes! You can select specific pages to rotate 90°, 180°, or 270° without affecting the rest of the file."
            }
        ],

        ctaTitle: "Ready to Fix Your PDF?",
        ctaButton: "Rotate PDF Now",
        ctaSubtext: "100% Free. No Watermarks."
    },
    fr: {
        seo: {
            title: "Comment Pivoter un PDF | Guide Orientation Permanente 2026 | pdfcanada.ca",
            desc: "Corrigez l'orientation de vos PDF définitivement. Notre guide 2026 vous montre comment pivoter vos pages en toute sécurité localement sans jamais les télécharger."
        },
        h1: "Comment faire pivoter et enregistrer l'orientation d'un PDF en ligne gratuitement",
        subtitle: "Le guide simple pour redresser vos documents mal orientés de façon permanente.",

        intro: (
            <>
                Nous y avons tous été confrontés : vous ouvrez un scan important et il est de côté. Ou pire, tout le document est à l'envers. Si vous cherchez à <button onClick={() => onNavigate('TOOL_PAGE', '/rotate-pdf')} className="text-canada-red hover:underline font-bold">pivoter un PDF en ligne</button>, vous êtes au bon endroit.
                <br /><br />
                Contrairement à une visionneuse PDF standard où la rotation n'est que temporaire (elle se réinitialise à la fermeture du fichier), notre outil met à jour la structure du fichier afin que l'orientation soit fixée <strong>définitivement</strong> pour tous ceux qui l'ouvrent.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "3 étapes faciles pour redresser un PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Sélectionnez votre PDF</strong> : Téléchargez le fichier qui doit être corrigé. Notre <button onClick={() => onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide')} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</button> le traite instantanément.
                            </li>
                            <li className="pl-2">
                                <strong>Pivotez des pages individuelles</strong> : Cliquez sur les boutons de rotation des pages spécifiques, ou utilisez "Tout faire pivoter" si tout le document est de côté.
                            </li>
                            <li className="pl-2">
                                <strong>Enregistrez les modifications</strong> : Cliquez sur 'Traiter le PDF' et téléchargez votre document parfaitement aligné.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "why-rotate",
                title: "Pourquoi la rotation est importante",
                content: (
                    <>
                        Une orientation incorrecte n'est pas seulement un désagrément mineur ; cela peut être un handicap professionnel.
                        <br /><br />
                        <strong>Lisibilité</strong> : Les documents de côté sont impossibles à lire sur les appareils mobiles sans zoom constant.
                        <br />
                        <strong>Professionnalisme</strong> : Envoyer un contrat de côté à un client montre un manque d'attention aux détails.
                    </>
                )
            },
            {
                id: "scenarios",
                title: "Scénarios de rotation courants",
                content: (
                    <>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Le scan mixte</strong> : Vous avez scanné une pile de papiers, mais un graphique en paysage a été scanné en portrait. Vous pouvez faire pivoter uniquement cette page.</li>
                            <li><strong>Le mauvais sens</strong> : Vous avez chargé le papier dans le chargeur à l'envers. Utilisez "Tout faire pivoter 180°" pour corriger tout le lot en un clic.</li>
                        </ul>
                        <p className="mt-4">
                            <em>Note : Si la page est floue ou illisible même après rotation, vous voudrez peut-être simplement <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline font-medium">la supprimer entièrement</button>.</em>
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que cela réduit la qualité ?",
                a: "Non. Notre outil met uniquement à jour les métadonnées d'orientation dans le PDF. La qualité de votre texte et de vos images reste identique."
            },
            {
                q: "Puis-je faire pivoter une seule page ?",
                a: "Oui ! Vous pouvez sélectionner des pages spécifiques à faire pivoter de 90°, 180° ou 270° sans affecter le reste du fichier."
            }
        ],

        ctaTitle: "Prêt à redresser votre PDF ?",
        ctaButton: "Pivoter le PDF",
        ctaSubtext: "100% Gratuit. Pas de filigrane."
    }
});

export const RotatePdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select PDF", "text": "Upload the PDF that needs rotation." },
                { "@type": "HowToStep", "position": 2, "name": "Rotate Pages", "text": "Click rotate buttons on specific pages or use Rotate All." },
                { "@type": "HowToStep", "position": 3, "name": "Save Changes", "text": "Process and download your corrected PDF." }
            ]
        },
        {
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-02-15",
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
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/rotate-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment faire pivoter un PDF de façon permanente?" : "How do I rotate a PDF permanently?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil de rotation PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les boutons de rotation des pages individuelles ou utilisez 'Tout pivoter', puis téléchargez. L'orientation est fixée définitivement dans le fichier, pas seulement dans l'affichage."
                        : "Use pdfcanada.ca's Rotate PDF tool. Upload your PDF, click rotate buttons on individual pages or use 'Rotate All', then download. The orientation is fixed permanently in the file, not just in the view.",
                    tool: "PDF Rotation Tool",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Pivotez les pages individuellement ou toutes", "Téléchargez le PDF corrigé"]
                        : ["Upload your PDF file", "Rotate pages individually or all", "Download corrected PDF"]
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Rotate PDF', path: '/guides/rotate-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<RotateCw size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'Rotate PDF Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto space-y-12">
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </p>

                    {t.sections && t.sections.map((section: any) => (
                        <section key={section.id}>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <RefreshCcw className="mx-auto text-canada-red mb-2" />
                            <span className="text-xs font-bold">90° CW</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <RefreshCcw className="mx-auto text-canada-red mb-2 -scale-x-100" />
                            <span className="text-xs font-bold">90° CCW</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <Clock className="mx-auto text-canada-red mb-2" />
                            <span className="text-xs font-bold">Permanent</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <Monitor className="mx-auto text-canada-red mb-2" />
                            <span className="text-xs font-bold">Cross-Device</span>
                        </div>
                    </div>

                    <section className="bg-canada-red p-10 rounded-3xl text-center text-white">
                        <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/rotate-pdf')}
                            className="bg-white text-canada-red px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            {t.ctaButton}
                        </button>
                    </section>

                    {t.faq && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {t.faq.map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{item.q}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <AISnapshot
                        question={lang === 'fr' ? "Comment faire pivoter un PDF de façon permanente?" : "How do I rotate a PDF permanently?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil de rotation PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les boutons de rotation des pages individuelles ou utilisez 'Tout pivoter', puis téléchargez. L'orientation est fixée définitivement dans le fichier, pas seulement dans l'affichage."
                            : "Use pdfcanada.ca's Rotate PDF tool. Upload your PDF, click rotate buttons on individual pages or use 'Rotate All', then download. The orientation is fixed permanently in the file, not just in the view."}
                        toolName="PDF Rotation Tool"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Pivotez les pages individuellement ou toutes", "Téléchargez le PDF corrigé"]
                            : ["Upload your PDF file", "Rotate pages individually or all", "Download corrected PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} onNavigate={onNavigate} currentPath="/guides/rotate-pdf" category="edit" />

                    <AuthorBio lang={lang} onNavigate={onNavigate} />
                </div>
            </PageLayout>
        </>
    );
};
