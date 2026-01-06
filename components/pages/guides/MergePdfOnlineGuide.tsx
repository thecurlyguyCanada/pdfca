'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, Wifi, Shield, AppWindow } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `Merge PDF Online | Combine Files Free & Secure ${CURRENT_YEAR}`,
            desc: `Merge multiple PDF files online for free. Combine documents into one securely in your browser. No file limits, no uploads required.`
        },
        h1: "Merge PDF Online: Combine Files Securely",
        subtitle: "The safest way to combine multiple PDF documents into one single file using your web browser.",
        intro: "Looking to **merge PDF online** but worried about uploading your private contracts or personal documents? You're right to be cautious. Most tools upload your files to a server to merge them. Our [Online PDF Merger](/${lang}/merge-pdf) is different. It joins your pages together using your own computer's processor, right inside this window. **No uploads. No waits. No risk.**",

        sections: [
            {
                id: "how-it-works",
                title: "How Our Online Merger Works (and Why It's Safer)",
                content: `Traditional online tools act like a shipping service: you send them your files, they do the work, and send it back.
We act like a tool rental: we give you the "digital stapler" (our code) and you do the work yourself on your own desk (your browser).
- **Your Files Stay Put**: They never travel across the internet.
- **Strictly Confidential**: Since we never see your files, we can't leak them.
- **Lightning Fast**: No need to wait for uploads or downloads.`
            },
            {
                id: "step-by-step",
                title: "How to Combine PDFs Online",
                content: `1. **Go to Merger**: Visit our [Merge PDF Tool](/${lang}/merge-pdf).
2. **Add Files**: Drag and drop all the PDF files you want to combine.
3. **Reorder**: Drag the thumbnails to change the order (e.g., put the cover page first).
4. **Merge**: Click "Merge PDF". The browser will stitch them together instantly.
5. **Download**: Save your new combined document.`
            },
            {
                id: "capabilities",
                title: "What Can You Merge?",
                content: `Our online tool is powerful enough to handle:
- **Contracts**: Combine signed pages with terms and conditions.
- **Invoices**: Merge multiple receipts into a single expense report.
- **School Work**: Join different assignment parts into one submission.
- **E-Books**: Combine chapters into a full book.`
            },
            {
                id: "compatibility",
                title: "Works on All Devices",
                content: "Since it's a browser-based tool, you can merge PDFs online using your **iPhone, Android, Mac, or Windows PC**. No app installation is needed."
            }
        ],

        faq: [
            {
                q: "Is there a limit to how many files I can merge?",
                a: "There is no hard limit from us. You can merge dozens of files at once, limited only by your computer's memory (RAM)."
            },
            {
                q: "Can I reorder pages before merging?",
                a: "Yes! Our tool lets you visualize and drag-and-drop files to get the perfect sequence before fulfilling the merge."
            },
            {
                q: "Is it really free?",
                a: "Yes. We offer this tool for free to help you manage your documents without needing expensive software."
            },
            {
                q: "Is my data safe?",
                a: "Yes. As with all our tools, the processing happens locally. Your documents are never uploaded to our servers."
            }
        ],

        ctaTitle: "Combine Your PDFs Now",
        ctaButton: "Merge PDFs",
        ctaSubtext: "Simple • Secure • Instant",
    },
    fr: {
        seo: {
            title: `Fusionner PDF en Ligne | Combiner Fichiers Gratuit ${CURRENT_YEAR}`,
            desc: `Fusionner plusieurs fichiers PDF en ligne gratuitement. Combinez des documents en un seul en toute sécurité dans votre navigateur. Pas de limite de fichiers, aucun téléchargement requis.`
        },
        h1: "Fusionner PDF en Ligne : Combiner en Toute Sécurité",
        subtitle: "Le moyen le plus sûr de combiner plusieurs documents PDF en un seul fichier unique à l'aide de votre navigateur web.",
        intro: "Vous cherchez à **fusionner des PDF en ligne** mais vous vous inquiétez de télécharger vos contrats privés ou documents personnels ? Vous avez raison d'être prudent. La plupart des outils téléchargent vos fichiers sur un serveur pour les fusionner. Notre [Fusionneur PDF en Ligne](/${lang}/merge-pdf) est différent. Il assemble vos pages en utilisant le processeur de votre propre ordinateur, directement dans cette fenêtre. **Pas de téléchargements. Pas d'attente. Pas de risque.**",

        sections: [
            {
                id: "how-it-works",
                title: "Comment Fonctionne Notre Fusionneur (et Pourquoi C'est Plus Sûr)",
                content: `Les outils en ligne traditionnels agissent comme un service d'expédition : vous leur envoyez vos fichiers, ils font le travail et vous le renvoient.
Nous agissons comme une location d'outils : nous vous donnons l'agrafeuse numérique (notre code) et vous faites le travail vous-même sur votre propre bureau (votre navigateur).
- **Vos Fichiers Restent Ici** : Ils ne voyagent jamais sur internet.
- **Strictement Confidentiel** : Puisque nous ne voyons jamais vos fichiers, nous ne pouvons pas les divulguer.
- **Ultra Rapide** : Pas besoin d'attendre les téléchargements.`
            },
            {
                id: "step-by-step",
                title: "Comment Combiner des PDF en Ligne",
                content: `1. **Allez au Fusionneur** : Visitez notre [Outil Fusionner PDF](/${lang}/merge-pdf).
2. **Ajoutez des Fichiers** : Glissez et déposez tous les fichiers PDF que vous souhaitez combiner.
3. **Réorganisez** : Glissez les vignettes pour changer l'ordre (par exemple, mettez la page de garde en premier).
4. **Fusionnez** : Cliquez sur "Fusionner PDF". Le navigateur les assemblera instantanément.
5. **Sauvegardez** : Enregistrez votre nouveau document combiné.`
            },
            {
                id: "capabilities",
                title: "Que Pouvez-vous Fusionner ?",
                content: `Notre outil en ligne est assez puissant pour gérer :
- **Contrats** : Combinez les pages signées avec les conditions générales.
- **Factures** : Fusionnez plusieurs reçus en un seul rapport de dépenses.
- **Devoirs Scolaires** : Joignez différentes parties d'un devoir en une seule soumission.
- **E-Books** : Combinez des chapitres en un livre complet.`
            },
            {
                id: "compatibility",
                title: "Fonctionne sur Tous les Appareils",
                content: "Puisque c'est un outil basé sur le navigateur, vous pouvez fusionner des PDF en ligne en utilisant votre **iPhone, Android, Mac ou PC Windows**. Aucune installation d'application n'est nécessaire."
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite au nombre de fichiers que je peux fusionner ?",
                a: "Il n'y a pas de limite stricte de notre part. Vous pouvez fusionner des dizaines de fichiers à la fois, limité seulement par la mémoire (RAM) de votre ordinateur."
            },
            {
                q: "Puis-je réorganiser les pages avant de fusionner ?",
                a: "Oui ! Notre outil vous permet de visualiser et de glisser-déposer les fichiers pour obtenir la séquence parfaite avant de valider la fusion."
            },
            {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui. Nous offrons cet outil gratuitement pour vous aider à gérer vos documents sans avoir besoin de logiciels coûteux."
            },
            {
                q: "Mes données sont-elles en sécurité ?",
                a: "Oui. Comme pour tous nos outils, le traitement se fait localement. Vos documents ne sont jamais téléchargés sur nos serveurs."
            }
        ],

        ctaTitle: "Combinez Vos PDF Maintenant",
        ctaButton: "Fusionner PDF",
        ctaSubtext: "Simple • Sécurisé • Instantané",
    }
});

export const MergePdfOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/merge-pdf-online"
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-05"
                dateModified="2026-01-05"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment combiner plusieurs PDF en un seul gratuitement ?" : "How to combine multiple PDFs into one for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil de fusion de pdfcanada.ca. Il permet de combiner et réorganiser vos fichiers directement dans le navigateur."
                        : "Use pdfcanada.ca's merge tool. It allows you to combine and reorder files directly in the browser.",
                    tool: "Online PDF Merger",
                    steps: lang === 'fr'
                        ? ["Ajoutez les fichiers", "Réorganisez", "Fusionnez et Téléchargez"]
                        : ["Add files", "Reorder", "Merge & Download"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: lang === 'fr' ? '/fr/guides/merge-pdf' : '/guides/merge-pdf' },
                    { name: lang === 'fr' ? 'En Ligne' : 'Online', path: lang === 'fr' ? '/fr/guides/merge-pdf-online' : '/guides/merge-pdf-online' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Wifi size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', href: lang === 'fr' ? '/fr/guides/merge-pdf' : '/guides/merge-pdf' },
                    { name: lang === 'fr' ? 'En Ligne' : 'Online', href: lang === 'fr' ? '/fr/guides/merge-pdf-online' : '/guides/merge-pdf-online' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? "Questions Fréquentes" : "Common Questions"}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <Shield size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/merge-pdf`}
                            className="bg-white text-canada-red px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment fusionner plusieurs PDF en un seul (sécurisé) ?" : "How to merge multiple PDFs into one (secure)?"}
                        answer={lang === 'fr'
                            ? "Utilisez pdfcanada.ca pour une fusion locale. Les fichiers sont combinés dans le navigateur, assurant que vos documents privés ne sont jamais exposés."
                            : "Use pdfcanada.ca for local merging. Files are combined in-browser, ensuring your private documents are never exposed."}
                        toolName="Online PDF Merger"
                        steps={lang === 'fr'
                            ? ["Allez sur le fusionneur", "Glissez les PDF", "Fusionnez"]
                            : ["Go to merger", "Drag PDFs", "Merge"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/merge-pdf-online" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
