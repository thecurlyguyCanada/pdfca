'use client';

import Link from 'next/link';
import React from 'react';
import { GripVertical, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { Lock, Monitor } from 'lucide-react';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Merge PDF & Images | Free & Secure ${CURRENT_YEAR} Universal Merger | pdfcanada.ca`,
            desc: `Combine multiple PDF files and images (JPG, PNG, WebP, AVIF) into one professional document securely. 100% local processing in your browser. No uploads, total privacy.`
        },
        h1: `Merge PDF & Images into One (${CURRENT_YEAR} Universal Guide)`,
        subtitle: "The ultimate tool for combining documents and images into a single, organized PDF file.",

        intro: `Keeping track of multiple related files is a challenge for every professional. Whether you have 
        **multiple PDF reports**, several **scanned JPG receipts**, or **modern AVIF images**, you need a way to 
        bundle them together.
        
        Our **Universal Merger** is built specifically for Canadians who need to combine document types for 
        **CRA submissions**, **IRCC applications**, or professional portfolios — all while ensuring 
        your data never leaves your device.`,

        sections: [
            {
                id: "universal-merge",
                title: "What is a Universal Merger?",
                content: `Unlike traditional mergers that only handle PDF files, our tool allows you to mix and match:
                
- **Standard PDFs**: Perfect for multi-page reports and official forms.
- **Images (JPG, PNG)**: Great for passport scans or photo ID.
- **Modern Formats (AVIF, WebP)**: High-quality, low-size images often found on modern websites.
- **Mobile Photos (HEIC)**: Directly combine photos from your iPhone into your document package.`
            },
            {
                id: "how-to",
                title: "Step-by-Step: Combining Everything",
                content: `1. **Drag & Drop**: Visit our [Merge PDF & Images Tool](https://www.pdfcanada.ca/en/merge-pdf) and drop all your files — PDFs and images — into the dropzone.
2. **Visual Reordering**: Each file appears as a high-definition thumbnail. Drag them into your desired sequence.
3. **Unified Processing**: Click **Merge**. Our engine renders images into PDF pages and joins them with your existing PDF documents in one seamless operation.
4. **Instant Download**: Save your single, professional PDF. No watermark, no quality loss.`
            },
            {
                id: "canadian-compliance",
                title: "Canadian Compliance & Privacy (PIPEDA)",
                content: `In Canada, the **Personal Information Protection and Electronic Documents Act (PIPEDA)** 
                mandates strict handling of personal data. 
                
                Most online "Merge" tools upload your documents to servers in the USA or overseas. **pdfcanada.ca does not.**
                
                Every merge operation happens in your browser's local memory. Your passport scans, tax slips, 
                and private photos stay on your machine. This is the **sorry-free guarantee** we provide 
                to every Canadian user.`
            },
            {
                id: "best-practices",
                title: "Best Practices for Merged Documents",
                content: `- **Naming**: If you have many files, name them with numbers (e.g., *01_Cover.pdf*, *02_Scan.jpg*) before uploading.
- **Orientation**: If you're merging landscape charts with portrait text, our tool handles both, but you can use our [Rotate Tool](https://www.pdfcanada.ca/en/rotate-pdf) for standardization.
- **File Size**: Merging many high-resolution photos can create a large file. Use our [Compress Tool](https://www.pdfcanada.ca/en/compress-pdf) if you reach email size limits.`
            }
        ],

        faq: [
            {
                q: "Can I merge a PDF with a JPG image?",
                a: "Yes! Our tool is a universal merger. You can upload any combination of PDFs and common image formats to create a single unified PDF document."
            },
            {
                q: "Is there a limit on the number of files I can merge?",
                a: "There is no hard limit, but performance depends on your device memory. Most modern laptops can comfortably merge 50+ files at once."
            },
            {
                q: "Does this work for Government of Canada portals?",
                a: "Absolutely. Our output is standardized PDF/A compatible, making it ideal for the CRA, IRCC, and Service Canada portals."
            }
        ],

        ctaTitle: "Ready to Combine Your Documents?",
        ctaButton: "Merge PDFs & Images Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Privacy-Locked Merging",
        whyDesc: "Your files never leave your device. We use local WebAssembly processing for zero-risk merging."
    },
    fr: {
        seo: {
            title: `Fusionner PDF et Images | Outil Universel Gratuit ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Combinez plusieurs fichiers PDF et des images (JPG, PNG, WebP, AVIF) en un seul document professionnel. Traitement local 100% sécurisé.`
        },
        h1: "Fusionner PDF et Images (Guide Universel)",
        subtitle: "L'outil ultime pour combiner documents et images en un seul fichier PDF organisé.",

        intro: `Gérer plusieurs types de fichiers est un défi quotidien. Que vous ayez 
        **plusieurs rapports PDF**, des **reçus numérisés en JPG**, ou des **images AVIF modernes**, vous avez besoin d'un moyen de 
        les regrouper.
        
        Notre **Fusionneur Universel** est conçu spécifiquement pour les Canadiens qui doivent combiner des documents pour 
        les **soumissions à l'ARC**, les **demandes à l'IRCC**, ou des portfolios professionnels — tout en garantissant 
        que vos données ne quittent jamais votre appareil.`,

        sections: [
            {
                id: "fusion-universelle",
                title: "Qu'est-ce qu'un Fusionneur Universel ?",
                content: `Contrairement aux outils traditionnels qui ne traitent que les PDF, notre outil vous permet de mélanger :
                
- **PDF Standards** : Idéal pour les rapports multi-pages et les formulaires officiels.
- **Images (JPG, PNG)** : Parfait pour les scans de passeports ou de cartes d'identité.
- **Formats Modernes (AVIF, WebP)** : Images de haute qualité et faible taille.
- **Photos Mobiles (HEIC)** : Combinez directement les photos de votre iPhone dans votre dossier.`
            },
            {
                id: "comment-faire",
                title: "Étape par Étape : Tout Combiner",
                content: `1. **Glisser-Déposer** : Visitez notre [Outil de Fusion PDF & Images](https://www.pdfcanada.ca/fr/merge-pdf) et déposez tous vos fichiers.
2. **Réorganisation Visuelle** : Chaque fichier apparaît sous forme de miniature. Glissez-les dans l'ordre souhaité.
3. **Traitement Unifié** : Cliquez sur **Fusionner**. Notre moteur transforme les images en pages PDF et les intègre à vos documents existants.
4. **Téléchargement Instantané** : Enregistrez votre PDF professionnel unique. Pas de filigrane, aucune perte de qualité.`
            },
            {
                id: "conformite-canadienne",
                title: "Conformité et Confidentialité au Canada (LPRPDE)",
                content: `Au Canada, la **Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)** 
                exige une manipulation stricte des données. 
                
                Chaque opération de fusion se déroule dans la mémoire locale de votre navigateur. Vos scans de passeport, feuillets d'impôt 
                et photos privées restent sur votre machine. C'est la **garantie sans souci** que nous offrons.`
            }
        ],

        faq: [
            {
                q: "Puis-je fusionner un PDF avec une image JPG ?",
                a: "Oui ! Notre outil est universel. Vous pouvez combiner n'importe quel mélange de PDF et de formats d'images courants."
            },
            {
                q: "Y a-t-il une limite au nombre de fichiers ?",
                a: "Il n'y a pas de limite stricte, cela dépend de la mémoire de votre appareil. La plupart des ordinateurs peuvent fusionner plus de 50 fichiers à la fois."
            }
        ],

        ctaTitle: "Prêt à Combiner Vos Documents ?",
        ctaButton: "Fusionner PDF et Images Maintenant",
        ctaSubtext: "Gratuit, Sécurisé et Canadien.",
        whyTitle: "Fusion Verrouillée pour la Confidentialité",
        whyDesc: "Vos fichiers ne quittent jamais votre appareil. Nous utilisons le traitement WebAssembly local pour une fusion sans risque."
    }
});

export const MergePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/merge-pdf"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-02-15"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment fusionner des PDF gratuitement?" : "How do I merge PDF files for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil de fusion PDF de pdfcanada.ca. Téléchargez vos fichiers PDF, glissez-déposez pour les réorganiser dans l'ordre souhaité, puis cliquez sur 'Fusionner'. Vos fichiers sont combinés localement - jamais envoyés sur un serveur."
                        : "Use pdfcanada.ca's Merge PDF tool. Upload your PDF files, drag-and-drop to reorder them, then click 'Merge'. Your files are combined locally - never sent to a server.",
                    tool: "PDF Merger",
                    steps: lang === 'fr'
                        ? ["Téléchargez vos fichiers PDF", "Réorganisez par glisser-déposer", "Cliquez sur Fusionner", "Téléchargez votre PDF combiné"]
                        : ["Upload your PDF files", "Reorder via drag-and-drop", "Click Merge", "Download your combined PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: lang === 'fr' ? '/fr/guides/merge-pdf' : '/guides/merge-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<GripVertical size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Guide Fusionner PDF' : 'Merge PDF Guide', href: lang === 'fr' ? '/fr/guides/merge-pdf' : '/guides/merge-pdf' }
                ]}
            >
                <div className="w-full space-y-16 text-gray-700 dark:text-gray-300">
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            <MarkdownContent content={t.intro} />
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-canada-red/10 text-canada-red font-black text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <section className="bg-gray-900 text-white rounded-2xl md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-canada-red opacity-10 blur-[80px] -mr-16 md:-mr-32 -mt-16 md:-mt-32 rounded-full"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
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
                                        <span>{lang === 'fr' ? "Fichiers illimités" : "Unlimited files"}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>{lang === 'fr' ? "Réorganisation par glisser-déposer" : "Drag & drop reordering"}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BarChart className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>{lang === 'fr' ? "100% Privé" : "100% Private"}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/merge-pdf`}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <GripVertical size={24} />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment fusionner des PDF gratuitement?" : "How do I merge PDF files for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil de fusion PDF de pdfcanada.ca. Téléchargez vos fichiers PDF, glissez-déposez pour les réorganiser dans l'ordre souhaité, puis cliquez sur 'Fusionner'. Vos fichiers sont combinés localement - jamais envoyés sur un serveur."
                            : "Use pdfcanada.ca's Merge PDF tool. Upload your PDF files, drag-and-drop to reorder them, then click 'Merge'. Your files are combined locally - never sent to a server."}
                        toolName="PDF Merger"
                        steps={lang === 'fr'
                            ? ["Téléchargez vos fichiers PDF", "Réorganisez par glisser-déposer", "Cliquez sur Fusionner", "Téléchargez votre PDF combiné"]
                            : ["Upload your PDF files", "Reorder via drag-and-drop", "Click Merge", "Download your combined PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/merge-pdf" category="organize" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


