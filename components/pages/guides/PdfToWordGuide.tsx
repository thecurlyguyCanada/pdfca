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
            title: "How to Convert PDF to Word | Free & Editable 2026 Guide | pdfcanada.ca",
            desc: "Learn how to make PDFs editable again. Our 2026 guide shows you how to convert PDF to Word securely and accurately using local-first tools. No signup needed."
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
            title: "Convertir PDF en Word | Guide Modifiable 2026 | pdfcanada.ca",
            desc: "Apprenez à rendre vos PDF modifiables. Notre guide 2026 vous montre comment convertir localement vos PDF en Word de manière précise et sécurisée sans inscription."
        },
        h1: "Comment Convertir un PDF en Word : Le Guide Pratique",
        subtitle: "Transformez vos PDF en lecture seule en documents modifiables sans installation de logiciel ni compromis sur la confidentialité.",

        intro: "Besoin de modifier un **document PDF** ? Nous sommes tous passés par là : vous avez un contrat, un CV ou un rapport qui nécessite une mise à jour rapide, mais vous n'avez que la version PDF. Notre **convertisseur PDF en Word** vous permet d'extraire le texte et le formatage de base dans un fichier **.docx** standard. Le meilleur ? Tout se passe entièrement dans votre navigateur, gardant vos documents canadiens sensibles en sécurité et à l'abri des serveurs étrangers.",

        sections: [
            {
                id: "why-word",
                title: "Pourquoi reconvertir un PDF en Word ?",
                content: `Les PDF sont excellents pour la visualisation, mais terribles pour l'édition. En convertissant en Word, vous gagnez la possibilité de :
- **Modifier le texte** : Corriger les fautes de frappe, mettre à jour les dates ou changer les noms dans les contrats.
- **Ajuster la mise en page** : Déplacer des images ou modifier les tailles de police dans les rapports.
- **Collaborer** : Envoyer un document Word est souvent plus facile pour les équipes qui utilisent la fonction "Suivi des modifications".`
            },
            {
                id: "how-it-works",
                title: "Comment Fonctionne Notre Conversion Locale",
                content: `La plupart des convertisseurs en ligne téléchargent votre fichier sur un serveur cloud, où il est traité et stocké. Chez pdfcanada.ca, nous utilisons une **technologie côté client**.

1. **Extraction Locale** : Notre moteur lit les caractères de texte directement depuis le PDF dans la mémoire de votre navigateur.
2. **Génération Docx** : Nous construisons une nouvelle chaîne de fichier Word et l'encapsulons dans un package .docx.
3. **Téléchargement Instantané** : Le fichier vous est renvoyé immédiatement. Vos données ne quittent jamais votre appareil.`
            },
            {
                id: "limitations",
                title: "À Quoi S'attendre (Formatage)",
                content: `Puisque nous traitons tout dans le navigateur pour maintenir votre confidentialité, les mises en page complexes comme les tableaux multi-colonnes ou les images superposées peuvent nécessiter un peu de retouche dans Word après la conversion. Cependant, pour les documents riches en texte, c'est le moyen le plus rapide et le plus sûr de récupérer votre contenu dans un état modifiable.`
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite de taille de fichier ?",
                a: "Puisque la conversion est locale, la limite dépend de la RAM de votre ordinateur. La plupart des documents standard jusqu'à 50 Mo se convertissent en quelques secondes !"
            },
            {
                q: "Dois-je m'inscrire ?",
                a: "Pas du tout, eh. Il suffit de télécharger, convertir et télécharger. Aucun courriel requis, aucune newsletter."
            },
            {
                q: "Puis-je convertir des PDF scannés en Word ?",
                a: "Pour les images scannées, nous recommandons d'utiliser d'abord notre **outil OCR** pour rendre le texte sélectionnable, puis de le convertir en Word."
            }
        ],

        ctaTitle: "Prêt à Modifier Votre Document ?",
        ctaButton: "Commencer la Conversion PDF en Word",
        ctaSubtext: "100% Gratuit. Sécurisé. Canadien.",

        faqHeading: "Questions Courantes"
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
