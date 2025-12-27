'use client';

import Link from 'next/link';
import React from 'react';
import { Scissors, Shield, Zap, HelpCircle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: "How to Crop PDF Pages | Free Margin Adjustment Guide | pdfcanada.ca",
            desc: `Trim white space and focus on what matters. Our ${CURRENT_YEAR} guide shows you how to crop PDF pages securely on your device. No uploads, fast, and 100% private.`
        },
        h1: `How to Crop PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "Trim the fat and focus on your content—100% private and Canadian.",

        intro: (
            <>
                Whether you need to remove white space from a scan or adjust margins for printing, knowing <strong>how to crop PDF pages</strong> is a handy skill. Most professional editors charge a subscription for this, but at pdfcanada.ca, it's free, fast, and stays on your device.
            </>
        ),

        sections: [
            {
                id: "step-by-step",
                title: "Step-by-Step: Cropping Your PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Our <strong>PDF Crop tool</strong> is designed to be simple and secure. Here is how you use it:
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Select Your File</strong>: Upload your PDF to our <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-medium">Crop PDF tool</Link>.
                            </li>
                            <li className="pl-2">
                                <strong>Set Your Margins</strong>: Define the area you want to keep. Currently, our tool applies a professional 1-inch safe-crop automatically, with manual selectors coming soon!
                            </li>
                            <li className="pl-2">
                                <strong>Download</strong>: Click the button to save your new, perfectly-sized PDF.
                            </li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Does cropping reduce PDF quality?",
                a: "No, hoser! Cropping only changes the visible 'box' of the PDF (the CropBox). The underlying text and images remain at full quality."
            },
            {
                q: "Is it really free?",
                a: "You bet. 100% free, no watermarks, no signups. Just polite Canadian service."
            },
            {
                q: "Is my data safe?",
                a: "Yes. Unlike other sites that upload your file to a server, we crop your PDF locally in your browser. Your sensitive info never leaves your device."
            }
        ],

        ctaTitle: "Ready to trim your PDF?",
        ctaButton: "Crop My PDF Now",
        ctaSubtext: "Free, Secure, and Canadian."
    },
    fr: {
        seo: {
            title: `Comment Recadrer un PDF | Guide Ajustement Marges ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Supprimez les marges inutiles et concentrez-vous sur l'essentiel. Notre guide ${CURRENT_YEAR} vous montre comment recadrer vos PDF en toute sécurité et sans téléchargement.`
        },
        h1: "Comment Rogner un PDF : Guide Complet",
        subtitle: "Éliminez les marges indésirables et recadrez vos documents PDF avec précision.",

        intro: (
            <>
                Vous avez déjà eu un PDF avec d'énormes marges blanches qui gaspillent de l'espace à l'impression ? Ou peut-être avez-vous besoin de <strong>rogner un PDF</strong> pour vous concentrer sur une section spécifique d'un diagramme ou d'une carte.
                <br /><br />
                Notre <strong>outil de rognage PDF</strong> vous permet de définir des marges personnalisées ou de recadrer visuellement des zones spécifiques, le tout traité localement dans votre navigateur pour une confidentialité maximale.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Comment Rogner Vos Pages PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Téléchargez Votre PDF</strong> : Sélectionnez le fichier que vous souhaitez recadrer.
                            </li>
                            <li className="pl-2">
                                <strong>Définissez les Marges</strong> : Ajustez les valeurs de rognage pour le haut, le bas, la gauche et la droite, ou utilisez notre outil de sélection visuelle.
                            </li>
                            <li className="pl-2">
                                <strong>Appliquez et Téléchargez</strong> : Cliquez sur &quot;Rogner le PDF&quot; et enregistrez votre document optimisé.
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
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Supprimer les Marges Blanches</strong> : Parfait pour les documents scannés avec trop d'espace blanc.</li>
                            <li><strong>Extraire des Diagrammes</strong> : Isolez des graphiques ou des tableaux spécifiques d'un rapport plus large.</li>
                            <li><strong>Optimiser pour l'Impression</strong> : Réduisez la taille de la page pour économiser du papier et de l'encre.</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Le rognage supprime-t-il définitivement le contenu ?",
                a: "Oui. Le contenu en dehors de la zone rognée est supprimé du fichier final. Votre fichier original reste intact sur votre ordinateur."
            },
            {
                q: "Puis-je rogner des pages spécifiques uniquement ?",
                a: "Actuellement, le rognage s'applique à toutes les pages. Si vous devez rogner des pages spécifiques, nous recommandons d'utiliser d'abord notre outil de suppression de pages pour isoler les pages que vous souhaitez rogner."
            }
        ],

        ctaTitle: "Prêt à Recadrer Votre PDF ?",
        ctaButton: "Commencer le Rognage",
        ctaSubtext: "Gratuit, Rapide et Sécurisé.",

        faqHeading: "Questions Fréquentes"
    }
});

export const CropPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/crop-pdf"
                faqs={t.faq}
                lang={lang}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment rogner un PDF gratuitement?" : "How do I crop a PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil de rognage PDF de pdfcanada.ca. Téléchargez votre fichier, définissez les marges de rognage, puis téléchargez votre PDF recadré. Le traitement se fait entièrement dans votre navigateur."
                        : "Use pdfcanada.ca's PDF Crop tool. Upload your file, set crop margins, then download your cropped PDF. All processing happens locally in your browser.",
                    tool: "PDF Crop Tool",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Définissez les marges de rognage", "Téléchargez votre PDF recadré"]
                        : ["Upload your PDF file", "Set crop margins", "Download your cropped PDF"]
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Crop PDF', path: '/guides/crop-pdf' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scissors size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none italic border-l-4 border-canada-red pl-6 py-2">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-4">
                                <span className="text-canada-red opacity-20 text-5xl font-black">0{idx + 1}</span>
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-3xl p-12 text-center text-white shadow-xl">
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/crop-pdf`}
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                            <HelpCircle className="text-canada-red" size={32} />
                            Questions Fréquentes
                        </h2>
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
                        question={lang === 'fr' ? "Comment rogner un PDF gratuitement?" : "How do I crop a PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil de rognage PDF de pdfcanada.ca. Téléchargez votre fichier, définissez les marges de rognage, puis téléchargez votre PDF recadré. Le traitement se fait entièrement dans votre navigateur."
                            : "Use pdfcanada.ca's PDF Crop tool. Upload your file, set crop margins, then download your cropped PDF. All processing happens locally in your browser."}
                        toolName="PDF Crop Tool"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Définissez les marges de rognage", "Téléchargez votre PDF recadré"]
                            : ["Upload your PDF file", "Set crop margins", "Download your cropped PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/crop-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


