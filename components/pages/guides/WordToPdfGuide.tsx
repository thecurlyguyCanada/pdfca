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
            title: "How to Convert Word to PDF | Free & Secure 2026 Tutorial | pdfcanada.ca",
            desc: "Learn how to transform DOCX to PDF instantly. Our secure 2026 guide shows you how to convert Word to PDF locally on your device without uploading sensitive files. No uploads, 100% private Canadian tool."
        },
        h1: "How to Convert Word to PDF: The 2026 Guide",
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
            title: "Convertir Word en PDF | Guide Sécurisé 2026 | pdfcanada.ca",
            desc: "Découvrez comment transformer vos DOCX en PDF instantanément. Notre guide sécurisé 2026 vous montre comment convertir localement sans risque pour vos données. Convertissez vos PDF professionnels de manière sécurisée dans votre navigateur. Aucun téléchargement, outil canadien 100% privé."
        },
        h1: "Comment Convertir Word en PDF : La Méthode Professionnelle",
        subtitle: "Créez des documents PDF de haute qualité et verrouillés à partir de vos fichiers Word instantanément sans quitter votre navigateur.",

        intro: "Besoin de transformer votre **document Word** en PDF professionnel ? Que vous envoyiez un CV, une facture ou un rapport formel, le PDF est la norme pour garantir que votre formatage reste exactement comme prévu. Notre **convertisseur Word en PDF** gère la transition en douceur, et parce qu'il fonctionne localement, vous n'avez pas à vous soucier que vos données professionnelles ou personnelles soient stockées sur un serveur aléatoire.",

        sections: [
            {
                id: "why-pdf",
                title: "Pourquoi Toujours Envoyer un PDF ?",
                content: `Les fichiers Word sont modifiables et leur apparence peut changer selon la version d'Office utilisée par le destinataire. Les PDF sont supérieurs car :
- **Verrouillage du Format** : Ce que vous voyez est exactement ce qu'ils voient.
- **Accès Universel** : Tout le monde peut ouvrir un PDF, mais tout le monde n'a pas Microsoft Word.
- **Sécurité** : Il est beaucoup plus difficile pour quelqu'un de modifier accidentellement (ou intentionnellement) votre texte dans un PDF.`
            },
            {
                id: "local-first",
                title: "Conversion Locale : Meilleure pour Votre Confidentialité",
                content: `La plupart des convertisseurs sur le web sont "basés sur le cloud", ce qui signifie que votre document est téléchargé sur leurs ordinateurs. Notre outil fonctionne différemment. Il utilise le **traitement dans le navigateur** pour transformer votre fichier .docx en PDF. C'est nettement plus sûr pour :
- **Documents Juridiques**
- **Dossiers Médicaux**
- **CV Sensibles**
- **Finances d'Entreprise**`
            }
        ],

        faq: [
            {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui ! Aucune limite, aucune carte de crédit. Juste un service canadien poli."
            },
            {
                q: "Cela fonctionne-t-il sur mobile ?",
                a: "Absolument. Vous pouvez convertir Word en PDF directement depuis votre navigateur iPhone ou Android, en sélectionnant des fichiers depuis votre stockage ou iCloud."
            },
            {
                q: "Puis-je convertir des fichiers .doc ?",
                a: "Actuellement, nous nous concentrons sur le format moderne **.docx**. Si vous avez un ancien fichier .doc, nous recommandons de l'enregistrer en .docx dans Word (ou Google Docs) avant d'utiliser notre outil."
            }
        ],

        ctaTitle: "Convertissez Votre Document Maintenant",
        ctaButton: "Commencer la Conversion Word en PDF",
        ctaSubtext: "100% Gratuit. Sécurisé. Local.",

        faqHeading: "Questions Courantes"
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
                faqs={t.faq}
                lang={lang}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Word to PDF', path: '/guides/word-to-pdf' }
                ]}
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
