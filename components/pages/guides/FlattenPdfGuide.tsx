import React from 'react';
import { Lock, Shield, Zap, HelpCircle, FileText, CheckCircle } from 'lucide-react';
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
            title: "How to Flatten PDF Online | Secure & Non-Editable Guide | pdfcanada.ca",
            desc: "Protect your PDF from unauthorized edits. Our 2026 guide shows you how to flatten PDF pages securely in your browser. No uploads—processed entirely on your device."
        },
        h1: "How to Make a PDF Non-Editable: The Secure Way",
        subtitle: "Flatten your documents to prevent unwanted changes and protect your data—100% locally.",

        intro: (
            <>
                Need to share a document but want to ensure nobody can easily copy your text or change your numbers? Knowing <strong>how to make a PDF non-editable</strong> is essential for contracts, invoices, and sensitive forms.
                <br /><br />
                While many people think a standard PDF is "locked," most modern editors can easily select and modify text. This guide will show you how to truly <strong>flatten a PDF</strong> using our Canadian-made, privacy-first tool.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Flattening Your PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Our <strong>Make PDF Non-Editable</strong> tool uses a technique called "rasterization." It turns each page of your PDF into behind-the-scenes images, effectively baking the content into the page.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Select Your File</strong>: drag your PDF into our <button onClick={() => onNavigate('TOOL_PAGE', '/make-pdf-non-editable')} className="text-canada-red hover:underline font-medium">Non-Editable PDF tool</button>.
                            </li>
                            <li className="pl-2">
                                <strong>Automatic Processing</strong>: Our Canadian engine will render each page as a high-quality static image.
                            </li>
                            <li className="pl-2">
                                <strong>Download & Share</strong>: Once complete, download your flattened PDF. It will look exactly the same, but the text will be unselectable and uneditable.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "why-flatten",
                title: "Why Rasterization is Better than Passwords",
                content: (
                    <>
                        <p className="mb-4">
                            Standard PDF "owner passwords" are easy to bypass with online password removers. However, <strong>rasterization</strong> (flattening to image) is irreversible. Once a page is an image, the underlying text data is gone.
                        </p>
                        <p className="mb-4">
                            This is the most reliable way to ensure:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Your layout stays exactly the same on every device.</li>
                            <li>Nobody can copy-paste your text easily.</li>
                            <li>Sensitive metadata is stripped out.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Will my PDF still look high quality?",
                a: "Yes! We use a high-resolution rendering engine (2.0x scale) to ensure that your flat PDF looks crisp and professional when printed or viewed on a screen."
            },
            {
                q: "Is this tool free?",
                a: "Absolutely, eh! Like all tools on pdfcanada.ca, this is 100% free with no limits."
            },
            {
                q: "Can I undo the flattening?",
                a: "No. Because the tool converts text to pixels, you cannot 'un-flatten' it later. Always keep a copy of your original editable file just in case."
            }
        ],

        ctaTitle: "Ready to Protect Your PDF?",
        ctaButton: "Make PDF Non-Editable",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Rasterization?",
        whyDesc: "Converting pages to images is the ultimate way to lock your content. Unlike passwords, this cannot be reversed by hackers."
    },
    fr: {
        seo: {
            title: "Comment Aplatir un PDF | Guide Document Non-Éditable 2026 | pdfcanada.ca",
            desc: "Protégez vos PDF contre les modifications. Notre guide 2026 vous montre comment aplatir vos pages en toute sécurité localement pour empêcher toute sélection ou édition."
        },
        h1: "Comment Rendre un PDF Non-Modifiable : La Méthode Sécurisée",
        subtitle: "Aplatissez vos documents pour empêcher les modifications indésirables et protéger vos données — 100% localement.",

        intro: (
            <>
                Besoin de partager un document tout en vous assurant que personne ne peut copier votre texte ou modifier vos chiffres ? Savoir <strong>comment rendre un PDF non-modifiable</strong> est essentiel pour les contrats, les factures et les formulaires sensibles.
                <br /><br />
                Bien que beaucoup pensent qu'un PDF standard est « verrouillé », la plupart des éditeurs modernes peuvent facilement sélectionner et modifier le texte. Ce guide vous montrera comment vraiment <strong>aplatir un PDF</strong> avec notre outil canadien axé sur la confidentialité.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Aplatir Votre PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Notre outil <strong>Rendre PDF Non-Modifiable</strong> utilise une technique appelée « rastérisation ». Il transforme chaque page de votre PDF en images en arrière-plan, en intégrant efficacement le contenu dans la page.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Sélectionnez Votre Fichier</strong> : Glissez votre PDF dans notre <button onClick={() => onNavigate('TOOL_PAGE', '/make-pdf-non-editable')} className="text-canada-red hover:underline font-medium">outil PDF Non-Modifiable</button>.
                            </li>
                            <li className="pl-2">
                                <strong>Traitement Automatique</strong> : Notre moteur canadien rendra chaque page en une image statique de haute qualité.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez et Partagez</strong> : Une fois terminé, téléchargez votre PDF aplati. Il aura exactement la même apparence, mais le texte sera insélectionnable et non-modifiable.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "why-flatten",
                title: "Pourquoi la Rastérisation est Meilleure que les Mots de Passe",
                content: (
                    <>
                        <p className="mb-4">
                            Les « mots de passe propriétaire » PDF standard sont faciles à contourner avec des outils de suppression de mots de passe en ligne. Cependant, la <strong>rastérisation</strong> (aplatissement en image) est irréversible. Une fois qu'une page est une image, les données textuelles sous-jacentes ont disparu.
                        </p>
                        <p className="mb-4">
                            C'est le moyen le plus fiable pour garantir :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Votre mise en page reste exactement la même sur tous les appareils.</li>
                            <li>Personne ne peut facilement copier-coller votre texte.</li>
                            <li>Les métadonnées sensibles sont supprimées.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que mon PDF aura toujours une haute qualité ?",
                a: "Oui ! Nous utilisons un moteur de rendu haute résolution (échelle 2.0x) pour garantir que votre PDF aplati semble net et professionnel lors de l'impression ou de la visualisation à l'écran."
            },
            {
                q: "Est-ce que cet outil est gratuit ?",
                a: "Absolument, eh ! Comme tous les outils sur pdfcanada.ca, c'est 100% gratuit sans aucune limite."
            },
            {
                q: "Puis-je annuler l'aplatissement ?",
                a: "Non. Parce que l'outil convertit le texte en pixels, vous ne pouvez pas « dé-aplatir » plus tard. Gardez toujours une copie de votre fichier original modifiable au cas où."
            }
        ],

        ctaTitle: "Prêt à Protéger Votre PDF ?",
        ctaButton: "Rendre PDF Non-Modifiable",
        ctaSubtext: "Gratuit, Sécurisé et Canadien.",
        whyTitle: "Pourquoi la Rastérisation ?",
        whyDesc: "Convertir les pages en images est le moyen ultime de verrouiller votre contenu. Contrairement aux mots de passe, cela ne peut pas être inversé par des pirates."
    }
});

export const FlattenPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/make-pdf-non-editable"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-02-01"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment rendre un PDF non modifiable?" : "How do I make a PDF non-editable?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil d'aplatissement de pdfcanada.ca. Il 'rastérise' chaque page en image, rendant le texte non sélectionnable et non modifiable. C'est plus sûr qu'un mot de passe car c'est irréversible. Tout se fait localement."
                        : "Use pdfcanada.ca's flattening tool. It 'rasterizes' each page into an image, making text non-selectable and non-editable. This is safer than password protection because it's irreversible. All processing happens locally.",
                    tool: "PDF Flattening Tool",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre PDF", "Le traitement automatique aplatit chaque page", "Téléchargez votre PDF protégé"]
                        : ["Upload your PDF", "Automatic processing flattens each page", "Download your protected PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF Non-Modifiable' : 'Make PDF Non-Editable', path: lang === 'fr' ? '/fr/guides/make-pdf-non-editable' : '/guides/make-pdf-non-editable' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Lock size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    {/* Introduction */}
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {/* How to Guide Sections */}
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

                    {/* Rasterization Explanation */}
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
                                        <span>No text selection allowed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Annotation tools won't work</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Highest privacy via local processing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/make-pdf-non-editable')}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Lock size={24} />
                            {t.ctaButton}
                        </button>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    {/* FAQ Section */}
                    <section className="scroll-mt-24 animate-fade-in">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
                                <HelpCircle size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">F.A.Q.</h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
                                    <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment rendre un PDF non modifiable?" : "How do I make a PDF non-editable?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil d'aplatissement de pdfcanada.ca. Il 'rastérise' chaque page en image, rendant le texte non sélectionnable et non modifiable. C'est plus sûr qu'un mot de passe car c'est irréversible. Tout se fait localement."
                            : "Use pdfcanada.ca's flattening tool. It 'rasterizes' each page into an image, making text non-selectable and non-editable. This is safer than password protection because it's irreversible. All processing happens locally."}
                        toolName="PDF Flattening Tool"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre PDF", "Le traitement automatique aplatit chaque page", "Téléchargez votre PDF protégé"]
                            : ["Upload your PDF", "Automatic processing flattens each page", "Download your protected PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} onNavigate={onNavigate} currentPath="/guides/make-pdf-non-editable" category="edit" />

                    <AuthorBio lang={lang} onNavigate={onNavigate} />
                </div>
            </PageLayout>
        </>
    );
};
