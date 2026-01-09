'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Globe, Server } from 'lucide-react';
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
            title: `Convert PHP to PDF | Archive Source Code ${CURRENT_YEAR}`,
            desc: `Convert PHP source code to PDF for documentation. Clean syntax formatting for print and archival. 100% private and secure.`
        },
        h1: "Convert PHP to PDF",
        subtitle: "Create professional documentation from your PHP source code.",
        intro: "Need to print your PHP code for a code review, documentation, or physical backup? Our PHP to PDF converter transforms your raw .php files into clean, readable PDF documents with proper formatting.",
        sections: [
            {
                id: "how-it-works",
                title: "How It Works",
                content: (
                    <div className="space-y-4">
                        <p>This tool reads your PHP source code files and renders them onto PDF pages using a monospaced font. It preserves your line breaks and indentation, making it perfect for reading code offline.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Why convert PHP to PDF?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Code Reviews:</strong> Annotate physical copies of your code.</li>
                            <li><strong>Documentation:</strong> Attach source code appendices to technical reports.</li>
                            <li><strong>Archival:</strong> Create a long-term, unchangeable record of your project state.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "How to Convert PHP to PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Upload PHP File:</strong> Drag and drop your .php file into the tool.</li>
                        <li><strong>Processing:</strong> The tool formats your code text.</li>
                        <li><strong>Download:</strong> Your PDF documentation is ready instantly.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Does this execute the PHP code?",
                a: "No. This tool treats your PHP file as text. It converts the *source code* itself to PDF, it does not run the script or render the output."
            },
            {
                q: "Is my code secure?",
                a: "Yes. The conversion happens entirely in your browser. Your source code is never uploaded to any server."
            }
        ],
        cta: "Document Your Code",
        ctaBtn: "Convert PHP to PDF"
    },
    fr: {
        seo: {
            title: `Convertir PHP en PDF | Archiver Code Source ${CURRENT_YEAR}`,
            desc: `Convertissez le code source PHP en PDF pour la documentation. Formatage propre pour impression et archivage. 100% privé.`
        },
        h1: "Convertir PHP en PDF",
        subtitle: "Créez une documentation professionnelle à partir de votre code PHP.",
        intro: "Besoin d'imprimer votre code PHP pour une revue ou une documentation ? Notre convertisseur PHP en PDF transforme vos fichiers .php bruts en documents PDF lisibles.",
        sections: [
            {
                id: "how-it-works",
                title: "Comment ça marche",
                content: (
                    <div className="space-y-4">
                        <p>Cet outil lit vos fichiers source PHP et les affiche sur des pages PDF avec une police à chasse fixe. Il préserve vos sauts de ligne et votre indentation.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Pourquoi convertir PHP en PDF ?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Revues de Code :</strong> Annotez des copies physiques.</li>
                            <li><strong>Documentation :</strong> Ajoutez des annexes de code aux rapports.</li>
                            <li><strong>Archivage :</strong> Créez un enregistrement immuable de votre projet.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Comment Convertir PHP en PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Téléverser :</strong> Glissez-déposez votre fichier .php.</li>
                        <li><strong>Traitement :</strong> L'outil formate votre texte.</li>
                        <li><strong>Télécharger :</strong> Votre documentation PDF est prête.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Est-ce que cela exécute le code PHP ?",
                a: "Non. Cet outil traite votre fichier PHP comme du texte. Il convertit le *code source* en PDF, il n'exécute pas le script."
            },
            {
                q: "Mon code est-il sécurisé ?",
                a: "Oui. La conversion se fait entièrement dans votre navigateur. Votre code source n'est jamais envoyé sur un serveur."
            }
        ],
        cta: "Documenter Votre Code",
        ctaBtn: "Convertir PHP en PDF"
    }
});

export const PhpToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

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
                { name: lang === 'fr' ? 'PHP en PDF' : 'PHP to PDF', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/php-to-pdf" lang={lang} schema={schema} />

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
                        question={lang === 'fr' ? "Comment convertir un fichier PHP en PDF ?" : "How to convert PHP file to PDF?"}
                        answer={lang === 'fr' ? "Utilisez l'outil PHP en PDF de pdfcanada.ca pour convertir votre code source en documentation PDF." : "Use the PHP to PDF tool on pdfcanada.ca to convert your source code into PDF documentation."}
                        toolName="PHP to PDF"
                        steps={lang === 'fr' ? ["Ouvrir l'outil", "Sélectionner le PHP", "Télécharger"] : ["Open Tool", "Select PHP", "Download"]}
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
                    <Link href={`/${lang}/php-to-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/php-to-pdf" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
