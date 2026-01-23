'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GripVertical, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart, Layers, ArrowRight } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Combine PDF Files | Free & Secure ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to combine multiple PDF files into one document securely. Our ${CURRENT_YEAR} guide shows you how to combine PDFs locally in your browser. Fast & Private.`
        },
        h1: `How to Combine PDF Files into One (${CURRENT_YEAR} Guide)`,
        subtitle: "The ultimate guide to combining multiple documents into a single, unified PDF file.",

        intro: (
            <>
                <Image src="/images/guides/merge-pdf-guide.png" alt="Combining PDF files illustration" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                Need to send a single document instead of five attachments? <strong>Combining PDF files</strong> is an essential skill for professionals, students, and anyone managing digital paperwork.
                <br /><br />
                Whether you call it merging, joining, or combining, the result is the same: a clean, organized, single file. Our tool allows you to combine unlimited PDFs directly in your browser without uploading your sensitive data to the cloud.
            </>
        ),

        sections: [
            {
                id: "how-to-combine",
                title: "Step-by-Step: How to Combine PDFs",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Open the Tool</strong>: Navigate to our <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">Combine PDF tool</Link>. It works on Windows, Mac, and Mobile.
                        </li>
                        <li className="pl-2">
                            <strong>Select Your Files</strong>: Click "Select PDF files" or drag and drop the documents you want to combine. You can add more files at any time.
                        </li>
                        <li className="pl-2">
                            <strong>Arrange the Order</strong>: This is crucial. Drag the file thumbnails to put them in the exact order you want them to appear in the final combined document. The first file acts as the start of your new document.
                        </li>
                        <li className="pl-2">
                            <strong>Combine</strong>: Click the "Merge PDF" button. Our engine will stitch the files together instantly.
                        </li>
                        <li className="pl-2">
                            <strong>Download</strong>: Save your newly combined PDF to your device.
                        </li>
                    </ol>
                )
            },
            {
                id: "why-combine",
                title: "Why Combine PDFs Instead of Zipping?",
                content: (
                    <div className="space-y-4">
                        <p>You might be tempted to just put files in a ZIP folder, but combining them into a PDF is often better:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Seamless Reading</strong>: The recipient can scroll through the entire document without opening multiple files.</li>
                            <li><strong>Professional Presentation</strong>: A single file looks more organized and professional than a cluttered email attachment list.</li>
                            <li><strong>Printing</strong>: It's much easier to print one combined file than to open and print 10 separate receipts.</li>
                            <li><strong>Mobile Friendly</strong>: ZIP files can be hard to open on phones. A combined PDF opens instantly on any device.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "privacy-focus",
                title: "Secure Combining: No Uploads Required",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Your Documents Stay on Your Device
                        </h4>
                        <p className="mb-4">
                            Most "Combine PDF Online" tools require you to upload your files to their server. This creates a privacy risk.
                            <strong>pdfcanada.ca is different.</strong>
                        </p>
                        <p>
                            We use advanced browser technology to combine your files <em>locally</em> on your computer. Your insensitive contracts, medical records, or tax documents never leave your device.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Bank-level Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">No File Limits</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">GDPR/PIPEDA Compliant</span>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "scenarios",
                title: "Common Scenarios for Combining",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <FileText className="text-canada-red" size={20} />
                                Job Applications
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Combine your Cover Letter, Resume, and Reference List into one file named "FullName-Application.pdf". This ensures the recruiter sees everything.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <FileText className="text-canada-red" size={20} />
                                Invoices & Receipts
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Freelancers often need to submit a single expense report. Combine your main invoice with all supporting receipt PDFs.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <FileText className="text-canada-red" size={20} />
                                E-Books & Reports
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">If you wrote different chapters in separate Word docs and saved them as PDF, combine them now into the final book.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <FileText className="text-canada-red" size={20} />
                                School Projects
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Combine your essay, charts, and bibliography into one submission file for your professor.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "faq-section",
                title: "Combining FAQs",
                content: (
                    <div className="space-y-4">
                        <p><strong>Can I combine PDF and Word files together?</strong><br />
                            No, you must first convert your Word files to PDF using our <Link href={`/${lang}/word-to-pdf`} className="text-canada-red underline">Word to PDF tool</Link>, and then combine the resulting PDFs.</p>

                        <p><strong>Is there a size limit?</strong><br />
                            Since we process files locally, the limit is your computer's RAM. We've successfully combined files totaling over 1GB.</p>

                        <p><strong>How do I separate them later?</strong><br />
                            If you need to separate them again, use our <Link href={`/${lang}/split-pdf`} className="text-canada-red underline">Split PDF tool</Link> to extract pages.</p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "What is the difference between merging and combining PDFs?",
                a: "There is no difference! The terms 'merge', 'combine', and 'join' are used interchangeably. They all refer to the process of taking multiple PDF files and saving them as a single document."
            },
            {
                q: "Can I combine both landscape and portrait PDFs?",
                a: "Yes. Our tool respects the orientation of each individual page. Your combined PDF will contain a mix of landscape and portrait pages exactly as they were in the originals."
            },
            {
                q: "Does combining PDFs reduce quality?",
                a: "No. Our tool combines the underlying data structures without re-compressing images, so your quality stays exactly 100% the same as the originals."
            },
            {
                q: "How can I combine PDF files on iPhone?",
                a: "You can use this website on Safari. Just tap 'Select PDF files', choose files from your 'Files' app or 'iCloud Drive', and tap Merge. It works perfectly on mobile."
            }
        ],

        quickAnswer: {
            question: "How do I combine multiple PDF files?",
            answer: "Use the Combine PDF tool on pdfcanada.ca. Upload your files, drag to reorder them, and click 'Merge'. It's free and works on any device.",
            tool: "Combine PDF Tool",
            steps: ["Upload PDFs", "Arrange Order", "Download Combined File"]
        },

        ctaTitle: "Start Combining Today",
        ctaButton: "Combine PDFs Now",
        ctaSubtext: "No installation required. 100% Free.",
    },
    fr: {
        seo: {
            title: `Comment Combiner des Fichiers PDF | Guide ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à combiner plusieurs fichiers PDF en un seul document en toute sécurité. Notre guide ${CURRENT_YEAR} vous montre comment faire localement.`
        },
        h1: `Comment Combiner des Fichiers PDF (Guide ${CURRENT_YEAR})`,
        subtitle: "Le guide ultime pour regrouper plusieurs documents en un seul fichier PDF unifié.",

        intro: (
            <>
                <Image src="/images/guides/merge-pdf-guide.png" alt="Illustration combiner fichiers PDF" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                Besoin d'envoyer un seul document au lieu de cinq pièces jointes ? <strong>Combiner des fichiers PDF</strong> est une compétence essentielle pour les professionnels et les étudiants.
                <br /><br />
                Que vous appeliez cela fusionner, joindre ou combiner, le résultat est le même : un fichier propre et organisé. Notre outil vous permet de combiner un nombre illimité de PDF directement dans votre navigateur sans télécharger vos données.
            </>
        ),

        sections: [
            {
                id: "how-to-combine",
                title: "Étape par Étape : Comment Combiner des PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Ouvrez l'outil</strong> : Allez sur notre <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">outil Combiner PDF</Link>.
                        </li>
                        <li className="pl-2">
                            <strong>Sélectionnez vos fichiers</strong> : Cliquez ou glissez-déposez les documents à combiner.
                        </li>
                        <li className="pl-2">
                            <strong>Organisez l'ordre</strong> : Glissez les miniatures pour les mettre dans l'ordre exact souhaité.
                        </li>
                        <li className="pl-2">
                            <strong>Combinez</strong> : Cliquez sur le bouton "Fusionner PDF".
                        </li>
                        <li className="pl-2">
                            <strong>Téléchargez</strong> : Enregistrez votre nouveau PDF combiné.
                        </li>
                    </ol>
                )
            },
            {
                id: "privacy-focus",
                title: "Combinaison Sécurisée : Aucun Téléchargement",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Vos Documents Restent chez Vous
                        </h4>
                        <p className="mb-4">
                            La plupart des outils en ligne exigent que vous envoyiez vos fichiers sur leur serveur.
                            <strong>pdfcanada.ca est différent.</strong>
                        </p>
                        <p>
                            Nous utilisons une technologie avancée pour combiner vos fichiers <em>localement</em> sur votre ordinateur. Vos contrats et documents confidentiels ne quittent jamais votre appareil.
                        </p>
                    </div>
                )
            },
            {
                id: "scenarios",
                title: "Pourquoi Combiner ?",
                content: (
                    <div className="space-y-4">
                        <p>Combiner des fichiers est souvent mieux que de les zipper :</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Lecture Fluide</strong> : Le destinataire peut tout lire en un seul défilement.</li>
                            <li><strong>Professionnel</strong> : Un seul fichier fait plus pro qu'une liste de pièces jointes.</li>
                            <li><strong>Impression Facile</strong> : Imprimez tout le dossier en une seule fois.</li>
                        </ul>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Quelle est la différence entre fusionner et combiner ?",
                a: "Aucune ! Les termes sont interchangeables. Ils désignent tous deux le processus de regroupement de plusieurs fichiers PDF en un seul."
            },
            {
                q: "Puis-je combiner des PDF paysage et portrait ?",
                a: "Oui. Notre outil respecte l'orientation de chaque page individuelle."
            },
            {
                q: "Est-ce que combiner réduit la qualité ?",
                a: "Non. Notre outil combine les structures de données sans recompresser les images, la qualité reste à 100%."
            }
        ],

        quickAnswer: {
            question: "Comment combiner plusieurs fichiers PDF ?",
            answer: "Utilisez l'outil Combiner PDF sur pdfcanada.ca. Sélectionnez vos fichiers, ordonnez-les et cliquez sur 'Fusionner'.",
            tool: "Outil Combiner PDF",
            steps: ["Uploadez les PDF", "Organisez l'ordre", "Téléchargez"]
        },

        ctaTitle: "Commencez à Combiner",
        ctaButton: "Combiner PDF Maintenant",
        ctaSubtext: "Pas d'installation. 100% Gratuit.",
    },
    pt: {
        seo: {
            title: `Como Combinar Arquivos PDF | Guia ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda como combinar vários arquivos PDF em um único documento com segurança. Nosso guia de ${CURRENT_YEAR} mostra como fazer isso localmente.`
        },
        h1: `Como Combinar Arquivos PDF (Guia ${CURRENT_YEAR})`,
        subtitle: "O guia definitivo para agrupar vários documentos em um arquivo PDF unificado.",

        intro: (
            <>
                <Image src="/images/guides/merge-pdf-guide.png" alt="Ilustração combinar arquivos PDF" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                Precisa enviar um único documento em vez de cinco anexos? <strong>Combinar arquivos PDF</strong> é uma habilidade essencial.
                <br /><br />
                Seja chamando de mesclar, juntar ou combinar, o resultado é o mesmo: um arquivo limpo e organizado. Nossa ferramenta permite combinar PDFs ilimitados diretamente no seu navegador.
            </>
        ),

        sections: [
            {
                id: "how-to-combine",
                title: "Passo a Passo: Como Combinar PDFs",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Abra a Ferramenta</strong>: Vá para nossa <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">ferramenta Combinar PDF</Link>.
                        </li>
                        <li className="pl-2">
                            <strong>Selecione seus Arquivos</strong>: Clique ou arraste os documentos para combinar.
                        </li>
                        <li className="pl-2">
                            <strong>Organize a Ordem</strong>: Arraste as miniaturas para colocá-las na ordem exata desejada.
                        </li>
                        <li className="pl-2">
                            <strong>Combine</strong>: Clique no botão "Juntar PDF".
                        </li>
                        <li className="pl-2">
                            <strong>Baixe</strong>: Salve seu novo PDF combinado.
                        </li>
                    </ol>
                )
            },
            {
                id: "privacy-focus",
                title: "Combinação Segura: Sem Uploads",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Seus Documentos Ficam com Você
                        </h4>
                        <p className="mb-4">
                            A maioria das ferramentas online exige que você envie seus arquivos para o servidor deles.
                            <strong>pdfcanada.ca é diferente.</strong>
                        </p>
                        <p>
                            Usamos tecnologia avançada de navegador para combinar seus arquivos <em>localmente</em> no seu computador.
                        </p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Qual a diferença entre mesclar e combinar?",
                a: "Nenhuma! Os termos são intercambiáveis. Ambos se referem ao processo de agrupar vários arquivos PDF em um só."
            },
            {
                q: "Posso combinar PDFs paisagem e retrato?",
                a: "Sim. Nossa ferramenta respeita a orientação de cada página individual."
            }
        ],

        quickAnswer: {
            question: "Como combinar vários arquivos PDF?",
            answer: "Use a ferramenta Combinar PDF no pdfcanada.ca. Selecione seus arquivos, ordene-os e clique em 'Juntar'.",
            tool: "Ferramenta Combinar PDF",
            steps: ["Envie os PDFs", "Organize a Ordem", "Baixe"]
        },

        ctaTitle: "Comece a Combinar",
        ctaButton: "Combinar PDF Agora",
        ctaSubtext: "Sem instalação. 100% Grátis.",
    }
});

export const CombinePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath={`/${lang}/guides/combine-pdf`}
                faqs={t.faq}
                lang={lang}
                datePublished="2024-03-20"
                dateModified={new Date().toISOString().split('T')[0]}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Combiner PDF' : (lang === 'pt' ? 'Combinar PDF' : 'Combine PDF'), path: `/${lang}/guides/combine-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Layers size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Guide Combiner PDF' : (lang === 'pt' ? 'Guia Combinar PDF' : 'Combine PDF Guide'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <ToolPromo tool="merge-pdf" lang={lang} />
                    <section className="animate-fade-in">
                        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-canada-red/10 text-canada-red font-black text-xl sm:text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="text-center py-6 sm:py-8 md:py-12 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/merge-pdf`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Layers size={20} className="sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            FAQ
                        </h2>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            Also See
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/merge-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/split-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Diviser PDF' : (lang === 'pt' ? 'Guia Dividir PDF' : 'Split PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/organize-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Organiser PDF' : (lang === 'pt' ? 'Guia Organizar PDF' : 'Organize PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
