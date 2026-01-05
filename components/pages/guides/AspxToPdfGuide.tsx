'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Shield, Zap } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { RelatedTools } from '../../RelatedTools';
import { AuthorBio } from '../../AuthorBio';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `ASPX to PDF Converter | Print Source Code ${CURRENT_YEAR}`,
            desc: `Convert ASP.NET (ASPX) source files to printable PDF documentation. Clean code formatting, 100% private and secure.`
        },
        h1: "Convert ASPX to PDF",
        subtitle: "Create readable documentation from your source code files.",
        intro: "Need to document your ASP.NET project or print your code for review? Our ASPX to PDF tool converts code files into clean, monospace-formatted PDF documents perfect for reading and archiving.",
        sections: [
            {
                id: "how-it-works",
                title: "How It Works",
                content: (
                    <div className="space-y-4">
                        <p>The tool reads your text-based .aspx source files and formats them onto PDF pages using a code-friendly font (Courier). It wraps long lines and paginates your code automatically.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Clean Formatting:</strong> Preserves indentation and structure.</li>
                            <li><strong>Secure:</strong> Code is processed locally, never sent to a server.</li>
                            <li><strong>Fast Documentation:</strong> Turn codebases into PDFs in seconds.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "How to Convert ASPX to PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Select File:</strong> Choose your .aspx file.</li>
                        <li><strong>Convert:</strong> The tool generates a PDF version of your code.</li>
                        <li><strong>Save:</strong> Download the documentation.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Does this execute the ASPX code?",
                a: "No. This tool converts the *source code text* into a PDF document. It does not run or render the web application."
            },
            {
                q: "Can I convert other code files?",
                a: "Yes, you can upload other text-based code files if they are supported by the file picker, or rename them."
            }
        ],
        cta: "Archive Your Code",
        ctaBtn: "Convert ASPX to PDF"
    },
    fr: {
        seo: {
            title: `Convertisseur ASPX en PDF | Imprimer Code Source ${CURRENT_YEAR}`,
            desc: `Convertissez des fichiers sources ASP.NET (ASPX) en documentation PDF imprimable. Formatage de code propre, 100% privé.`
        },
        h1: "Convertir ASPX en PDF",
        subtitle: "Créez une documentation lisible à partir de vos fichiers source.",
        intro: "Besoin de documenter votre projet ASP.NET ? Notre outil ASPX en PDF convertit vos fichiers de code en documents PDF propres et formatés.",
        sections: [
            {
                id: "how-it-works",
                title: "Comment ça marche",
                content: (
                    <div className="space-y-4">
                        <p>L'outil lit vos fichiers source .aspx et les formate sur des pages PDF en utilisant une police adaptée au code. Il gère les sauts de ligne et la pagination automatiquement.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Avantages :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Formatage Propre :</strong> Préserve l'indentation.</li>
                            <li><strong>Sécurisé :</strong> Le code est traité localement.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Comment Convertir ASPX en PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Sélectionner :</strong> Choisissez votre fichier .aspx.</li>
                        <li><strong>Convertir :</strong> L'outil génère le PDF.</li>
                        <li><strong>Sauvegarder :</strong> Téléchargez la documentation.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Est-ce que cela exécute le code ASPX ?",
                a: "Non. Cet outil convertit le *texte du code source* en document PDF. Il n'exécute pas l'application web."
            },
            {
                q: "Puis-je convertir d'autres fichiers ?",
                a: "Oui, la plupart des fichiers texte fonctionnent."
            }
        ],
        cta: "Archiver Votre Code",
        ctaBtn: "Convertir ASPX en PDF"
    }
});

export const AspxToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "applicationCategory": "DeveloperTool",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<FileCode size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'ASPX en PDF' : 'ASPX to PDF', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/aspx-to-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl mb-12 border border-slate-200 dark:border-slate-800">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir du code ASPX en PDF ?" : "How to convert ASPX code to PDF?"}
                        answer={lang === 'fr' ? "Utilisez l'outil ASPX en PDF de pdfcanada.ca." : "Use the ASPX to PDF tool on pdfcanada.ca."}
                        toolName="ASPX to PDF"
                        steps={lang === 'fr' ? ["Ouvrir l'outil", "Sélectionner le fichier", "Télécharger"] : ["Open Tool", "Select File", "Download"]}
                        lang={lang}
                    />

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                        <div className="space-y-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-bold mb-2">{item.q}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}/aspx-to-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/aspx-to-pdf" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
