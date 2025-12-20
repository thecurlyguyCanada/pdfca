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
            title: "Convert Word to PDF Free Online | Docx to PDF | pdfcanada.ca",
            desc: "Learn how to convert Word documents (.docx) to professional PDF files securely in your browser. No uploads, 100% private Canadian tool."
        },
        h1: "How to Convert Word to PDF: The Professional Way",
        subtitle: "Create high-quality, locked-down PDF documents from your Word files instantly without leaving your browser.",

        intro: "Need to turn your **Word doc** into a professional-looking PDF? Whether you're sending a resume, an invoice, or a formal report, PDF is the standard for ensuring your formatting stays exactly as intended. Our **Word to PDF converter** handles the transition smoothly, and because it runs locally, you don't have to worry about your business or personal data being stored on a random server.",

        sections: [
            {
                id: "why-pdf",
                title: "Why Should You Always Send a PDF?",
                content: `Word files are editable and their appearance can change depending on which version of Office the recipient is using. PDFs are superior because:
- **Format Locking**: What you see is exactly what they see.
- **Universal Access**: Everyone can open a PDF, but not everyone has Microsoft Word.
- **Security**: It's much harder for someone to accidentally (or intentionally) change your text in a PDF.`
            },
            {
                id: "local-first",
                title: "Local Conversion: Better for Your Privacy",
                content: `Most converters on the web are "Cloud Based," meaning your document is uploaded to their computers. Our tool works differently. It uses **in-browser processing** to transform your .docx file into a PDF. This is significantly safer for:
- **Legal Documents**
- **Medical Records**
- **Sensitive Resumes**
- **Company Financials**`
            }
        ],

        faq: [
            {
                q: "Is it really free?",
                a: "Yup! No limits, no credit cards. Just polite Canadian service."
            },
            {
                q: "Does it work on mobile?",
                a: "Absolutely. You can convert Word to PDF directly from your iPhone or Android browser, picking files from your storage or iCloud."
            },
            {
                q: "Can I convert .doc files?",
                a: "Currently, we focus on the modern **.docx** format. If you have an older .doc file, we recommend saving it as .docx in Word first (or Google Docs) before using our tool."
            }
        ],

        ctaTitle: "Convert Your Document Now",
        ctaButton: "Start Word to PDF Conversion",
        ctaSubtext: "100% Free. Secure. Local."
    },
    fr: {
        seo: {
            title: "Convertir Word en PDF Gratuit | Docx en PDF | pdfcanada.ca",
            desc: "Apprenez à convertir vos documents Word (.docx) en fichiers PDF professionnels en toute sécurité dans votre navigateur."
        },
        h1: "Comment Convertir un Word en PDF",
        subtitle: "Créez des PDF professionnels à partir de vos fichiers Word instantanément.",

        intro: "Transformez vos **fichiers Word** en PDF de haute qualité. Que ce soit pour un CV ou une facture, le PDF garantit que votre mise en forme reste intacte. Notre convertisseur fonctionne localement pour une confidentialité totale.",

        sections: [
            {
                id: "why-pdf-fr",
                title: "Pourquoi envoyer un PDF ?",
                content: `Le PDF verrouille votre mise en forme et est lisible sur tous les appareils sans nécessiter Microsoft Word.`
            }
        ],

        faq: [
            {
                q: "C'est gratuit ?",
                a: "Oui, comme toujours chez nous, c'est totalement gratuit."
            }
        ],

        ctaTitle: "Convertissez votre document maintenant",
        ctaButton: "Convertir Word en PDF",
        ctaSubtext: "Privé, gratuit et rapide."
    }
});

export const WordToPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/word-to-pdf"
                lang={lang}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'Word to PDF Guide', onClick: () => { } }
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
                            onClick={() => onNavigate('TOOL_PAGE', '/word-to-pdf')}
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
