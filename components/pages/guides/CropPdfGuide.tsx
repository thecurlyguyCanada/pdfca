import React from 'react';
import { Scissors, Shield, Zap, HelpCircle } from 'lucide-react';
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
            title: "How to Crop PDF Pages Online (Free & Secure) | pdfcanada.ca",
            desc: "Learn how to crop PDF pages and adjust margins for free. Our Canadian-made tool helps you trim PDF white space locally in your browser."
        },
        h1: "How to Crop PDF Pages",
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
                                <strong>Select Your File</strong>: upload your PDF to our <button onClick={() => onNavigate('TOOL_PAGE', '/crop-pdf')} className="text-canada-red hover:underline font-medium">Crop PDF tool</button>.
                            </li>
                            <li className="pl-2">
                                <strong>Set Your Margins</strong>: define the area you want to keep. Currently, our tool applies a professional 1-inch safe-crop automatically, with manual selectors coming soon!
                            </li>
                            <li className="pl-2">
                                <strong>Download</strong>: click the button to save your new, perfectly-sized PDF.
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
            title: "Comment recadrer des pages PDF (Gratuit) | pdfcanada.ca",
            desc: "Apprenez à recadrer des pages PDF et à ajuster les marges gratuitement. Notre outil canadien vous aide à ajuster vos PDF localement."
        },
        h1: "Comment recadrer des pages PDF",
        subtitle: "Ajustez vos marges et concentrez-vous sur l'essentiel.",

        intro: (
            <>
                Besoin de supprimer des espaces blancs sur un scan ? Recadrer un PDF est facile avec nos outils canadiens gratuits et sécurisés.
            </>
        ),

        sections: [
            {
                id: "step-by-step",
                title: "Étape par Étape : Recadrer votre PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Sélectionnez votre fichier</strong></li>
                            <li className="pl-2"><strong>Ajustez les marges</strong></li>
                            <li className="pl-2"><strong>Téléchargez</strong></li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Oui, c'est 100% gratuit et sans inscription."
            }
        ],

        ctaTitle: "Prêt à recadrer votre PDF ?",
        ctaButton: "Recadrer mon PDF",
        ctaSubtext: "Gratuit, sécurisé et canadien."
    }
});

export const CropPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/crop-pdf"
                lang={lang}
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
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/crop-pdf')}
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </button>
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
                </div>
            </PageLayout>
        </>
    );
};
