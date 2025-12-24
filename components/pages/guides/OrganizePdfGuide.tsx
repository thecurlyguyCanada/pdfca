import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Move, Smartphone, Monitor, MousePointer2, GripVertical } from 'lucide-react';
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
            title: "How to Organize PDF Pages | Free Drag-and-Drop Guide | pdfcanada.ca",
            desc: "Reorder your PDF document exactly how you want. Our 2026 guide shows you how to rearrange pages securely on your device. No uploads, fast, and 100% private."
        },
        h1: "How to Organize and Reorder PDF Pages: The 2026 Guide",
        subtitle: "The easiest, most secure way to shuffle and move pages in your PDF document with drag-and-drop simplicity.",

        intro: "Got a document that's all out of order? Maybe you scanned pages in the wrong sequence, or you need to move an appendix to the front of a report. Knowing how to **organize PDF pages online** is a critical skill for creating professional documents. Our **free PDF page organizer** allows you to visually **reorder PDF pages** using a simple drag-and-drop interface. No complicated menus, just your document, exactly how you want it, processed locally on your device for maximum privacy.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Reorder Your PDF in Seconds",
                content: `Using our **reorder PDF pages free** tool is intuitive, designed to feel just like moving physical papers on a desk:

1. **Upload Your File**: Select your PDF. Our local engine opens it instantly (no waiting for uploads!).
2. **Drag and Drop**: You'll see a grid of page thumbnails. Simply click and hold a page, then move it to its new position.
3. **Save Your Work**: Once the order is perfect, click **'Save Organized PDF'**. A new copy is generated immediately with your new sequence.`
            },
            {
                id: "privacy",
                title: "Local-First Security: Your Files Never Leave Your Browser",
                content: `At pdfcanada.ca, we believe your documents are private. Unlike other tools that upload your files to remote servers, our organizer runs entirely **inside your web browser**. 

- **No Uploads**: Your sensitive documents never touch our servers.
- **Secure Processing**: Everything happens in your device's RAM.
- **Instant Speed**: No network latency or queue times.`
            },
            {
                id: "mobile",
                title: "Organize PDFs on the Go: iPhone & Android Support",
                content: `Need to fix a document order while on a commute? Our site is fully responsive and optimized for touch. You can **drag and drop PDF pages** on your smartphone just as easily as on a desktop. No apps to install, just pure productivity in your mobile browser.`
            }
        ],

        faq: [
            {
                q: "Can I move pages between different PDF files?",
                a: "Currently, this tool supports reordering pages within a single PDF. If you need to combine files, stay tuned—we're working on a merge tool, eh!"
            },
            {
                q: "What happens to the original file?",
                a: "Nothing! Your original file remains untouched on your machine. We create a completely new PDF with the reordered pages for you to download."
            },
            {
                q: "Does this work with large documents?",
                a: "Yes! Since processing is local, the limit is simply your device's memory. You can organize dozens of pages without the timeouts common in cloud-based tools."
            }
        ],

        ctaTitle: "Fixed Your Document Order Now",
        ctaButton: "Start Organizing PDF",
        ctaSubtext: "Fast, Free, and 100% Private Local Processing."
    },
    fr: {
        seo: {
            title: "Comment Organiser vos PDF | Guide Glisser-Déposer 2026 | pdfcanada.ca",
            desc: "Réorganisez les pages de vos PDF exactement comme vous le souhaitez. Notre guide 2026 vous montre comment faire en toute sécurité et localement sans téléchargement."
        },
        h1: "Comment Réorganiser les Pages PDF : Le Guide Complet",
        subtitle: "Glisser-déposer pour réarranger, reordonner et perfectionner la structure de vos documents PDF.",

        intro: "Avez-vous déjà eu un PDF où les pages sont dans le mauvais ordre ? Peut-être que la page de titre est à la fin, ou que les annexes sont mélangées dans le corps du document. Notre **outil de réorganisation PDF** vous permet de réarranger les pages par simple glisser-déposer, le tout traité localement pour une confidentialité maximale.",

        sections: [
            {
                id: "how-to",
                title: "Comment Réorganiser Vos Pages PDF",
                content: `**Étape 1** : Téléchargez votre PDF dans notre outil de réorganisation.

**Étape 2** : Vous verrez des miniatures de toutes les pages. Cliquez et faites glisser les pages pour les réarranger dans l'ordre souhaité.

**Étape 3** : Une fois satisfait de la nouvelle structure, cliquez sur "Traiter le PDF" pour télécharger votre document réorganisé.`
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants",
                content: `**Documents Scannés Mélangés** : Il arrive que les scanners mélangent l'ordre des pages. Remettez-les dans le bon ordre en quelques secondes.

**Fusion de Plusieurs PDF** : Si vous avez fusionné plusieurs fichiers et que l'ordre n'est pas correct, réorganisez facilement les sections.

**Présentation Professionnelle** : Assurez-vous que votre table des matières, introduction et conclusion sont dans le bon ordre avant de partager.`
            },
            {
                id: "benefits",
                title: "Pourquoi Utiliser Notre Outil de Réorganisation",
                content: `**Interface Visuelle** : Voyez toutes vos pages en un coup d'œil et réarrangez-les intuitivement.

**Traitement Local** : Contrairement aux services cloud, vos documents ne sont jamais téléchargés sur nos serveurs.

**Aucune Limite** : Réorganisez des PDF de n'importe quelle taille sans restrictions.`
            }
        ],

        faq: [
            {
                q: "Puis-je supprimer des pages en même temps que je réorganise ?",
                a: "Actuellement, notre outil se concentre sur la réorganisation. Pour supprimer des pages, utilisez d'abord notre outil de suppression de pages, puis réorganisez si nécessaire."
            },
            {
                q: "Le fichier réorganisé aura-t-il la même qualité ?",
                a: "Oui ! Nous ne re-compressons ni ne modifions vos pages. Elles conservent leur qualité et leur contenu d'origine."
            },
            {
                q: "Y a-t-il une limite au nombre de pages ?",
                a: "Non. Puisque le traitement est local, vous pouvez réorganiser des PDF de centaines de pages tant que votre navigateur peut les gérer."
            }
        ],

        ctaTitle: "Prêt à Réorganiser Votre PDF ?",
        ctaButton: "Commencer la Réorganisation",
        ctaSubtext: "Gratuit, Rapide et Sécurisé."
    }
});

export const OrganizePdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Upload", "text": "Select your file. Each page appears as a movable thumbnail." },
                { "@type": "HowToStep", "position": 2, "name": "Drag and Drop", "text": "Click and hold a page thumbnail, then move it to its new position." },
                { "@type": "HowToStep", "position": 3, "name": "Save", "text": "Click Organize PDF and download your reordered file." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-05-01",
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
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.pdfcanada.ca${lang === 'fr' ? '/fr' : ''}/guides/organize-pdf`
            }
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/organize-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Organize PDF', path: '/guides/organize-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Move size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Guides', onClick: () => onNavigate('GUIDE_ULTIMATE') },
                    { name: 'Organize PDF Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-[2rem] border border-amber-200 dark:border-amber-800 flex gap-6 mb-16">
                        <Zap className="text-amber-600 shrink-0" size={28} />
                        <p className="text-lg text-amber-900 dark:text-amber-300">
                            <strong>Insider Tip:</strong> You can combine this tool with our 'Delete Pages' tool to perfectly curate your final document before sharing. Perfect for clean board reports!
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                    <CheckCircle size={24} className="text-canada-red" /> {section.title}
                                </h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Features Tiles */}
                    <div className="grid md:grid-cols-3 gap-8 my-24">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <GripVertical className="text-canada-red mx-auto mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-3">Drag & Drop</h3>
                            <p className="text-gray-500">Visual interface makes reordering intuitive and fast.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Shield className="text-canada-red mx-auto mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-3">100% Private</h3>
                            <p className="text-gray-500">Files never leave your browser. Local processing only.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Zap className="text-canada-red mx-auto mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-3">Instant Save</h3>
                            <p className="text-gray-500">Generate your new PDF in milliseconds, not minutes.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-24">
                        <h3 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-xl font-black mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                                        <MousePointer2 size={24} className="text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <section className="bg-canada-red p-16 rounded-[3.5rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-4xl font-black mb-6">{t.ctaTitle}</h2>
                        <p className="text-xl mb-12 opacity-90">{t.ctaSubtext}</p>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/organize-pdf')}
                            className="bg-white text-canada-red px-14 py-5 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            {t.ctaButton}
                        </button>
                    </section>
                </div>
            </PageLayout>
        </div>
    );
};
