import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2 } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "Convert PDF to Word Free Online | PDF to Docx | pdfcanada.ca",
            desc: "The definitive guide to converting PDF to editable Word documents. Learn how to transform static PDFs into flexible Docx files securely and locally."
        },
        h1: "How to Convert PDF to Word: The Polite Guide",
        subtitle: "Turn those read-only PDFs into editable documents without any software installation or data privacy concerns.",

        intro: "Need to make changes to a **PDF document**? We've all been there: you have a contract, a resume, or a report that needs a quick update, but you only have the PDF version. Our **PDF to Word converter** allows you to extract text and basic formatting into a standard **.docx** file. Best of all, it happens entirely in your browser, keeping your sensitive Canadian documents safe and sound from foreign servers.",

        sections: [
            {
                id: "why-word",
                title: "Why Convert PDF back to Word?",
                content: `PDFs are great for viewing, but terrible for editing. By converting to Word, you gain the ability to:
- **Edit Text**: Fix typos, update dates, or change names in contracts.
- **Adjust Layout**: Move images or change font sizes in reports.
- **Collaborate**: Sending a Word doc is often easier for teams to review using "Track Changes".`
            },
            {
                id: "how-it-works",
                title: "How Our Local Conversion Works",
                content: `Most online converters upload your file to a cloud server, where it's processed and stored. At pdfcanada.ca, we use **client-side technology**. 
                
1. **Local Extraction**: Our engine reads the text characters directly from the PDF in your browser's memory.
2. **Docx Generation**: We build a new Word file string and wrap it into a .docx package.
3. **Instant Download**: The file is served back to you immediately. Your data never leaves your device.`
            },
            {
                id: "limitations",
                title: "What to Expect (Formatting)",
                content: `Since we process everything in the browser to maintain your privacy, complex layouts like multi-column tables or overlapping images might require a bit of touch-up in Word after conversion. However, for text-heavy documents, it's the fastest and most secure way to get your content back into an editable state.`
            }
        ],

        faq: [
            {
                q: "Is there a limit to the file size?",
                a: "Since the conversion is local, the limit depends on your computer's RAM. Most standard documents up to 50MB convert in seconds!"
            },
            {
                q: "Do I need to sign up?",
                a: "No way, eh. Just upload, convert, and download. No email required, no newsletters."
            },
            {
                q: "Can I convert scanned PDFs to Word?",
                a: "For scanned images, we recommend using our **OCR tool** first to make the text selectable, and then converting to Word."
            }
        ],

        ctaTitle: "Ready to Edit Your Document?",
        ctaButton: "Start PDF to Word Conversion",
        ctaSubtext: "100% Free. Secure. Canadian."
    },
    fr: {
        seo: {
            title: "Convertir PDF en Word Gratuit | PDF en Docx | pdfcanada.ca",
            desc: "Le guide définitif pour convertir vos PDF en documents Word modifiables. Apprenez à transformer vos fichiers en Docx localement."
        },
        h1: "Comment Convertir un PDF en Word",
        subtitle: "Rendez vos documents à nouveau modifiables, simplement et sécuriséement.",

        intro: "Besoin de modifier un **document PDF** ? Que ce soit pour un contrat ou un rapport, notre **convertisseur PDF en Word** extrait le contenu dans un fichier **.docx**. Tout se passe dans votre navigateur, garantissant que vos documents canadiens restent privés.",

        sections: [
            {
                id: "why-word-fr",
                title: "Pourquoi revenir au format Word ?",
                content: `Le PDF est idéal pour la consultation, mais difficile à modifier. Le passage en Word vous permet de corriger des erreurs, de mettre à jour des dates ou de reformater le contenu facilement.`
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit ?",
                a: "Absolument. Comme tous nos outils, c'est 100% gratuit au Canada."
            }
        ],

        ctaTitle: "Prêt à modifier votre document ?",
        ctaButton: "Convertir PDF en Word maintenant",
        ctaSubtext: "Rapide, gratuit et privé."
    }
});

export const PdfToWordGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-word"
                lang={lang}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'PDF to Word Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={20} className="text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-canada-red rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-4xl font-black mb-6">{t.ctaTitle}</h2>
                        <p className="text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/pdf-to-word')}
                            className="bg-white text-canada-red px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </button>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
