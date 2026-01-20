'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, Globe, Lock, Clock, ArrowRight, Apple, Monitor, Smartphone, Share2 } from 'lucide-react';
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
            title: "Convert Pages to PDF Online Free | Apple Pages to PDF Guide | pdfcanada.ca",
            desc: `Convert Apple Pages documents to PDF for free. Our ${CURRENT_YEAR} guide shows how to share Pages files with Windows and Android users without a Mac.`
        },
        h1: "How to Convert Pages to PDF Online for Free",
        subtitle: "The complete guide to converting Apple Pages documents to universally accessible PDF format.",

        intro: (
            <>
                Created a document in <strong>Apple Pages</strong> but need to share it with someone on Windows or Android? Apple Pages files (.pages) can't be opened on non-Apple devices without conversion. Our <strong>free Pages to PDF converter</strong> transforms your Mac documents into universally accessible PDFs that anyone can view—no Mac required. Whether you're a student submitting assignments, a business professional sharing proposals, or anyone needing cross-platform document compatibility, this guide shows you how.
            </>
        ),

        sections: [
            {
                id: "what-is-pages",
                title: "What is Apple Pages?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>Apple Pages</strong> is Apple's word processing application, part of the iWork productivity suite alongside Numbers (spreadsheets) and Keynote (presentations). It's free on all Apple devices—Mac, iPad, and iPhone—and produces high-quality documents with professional templates.
                        </p>
                        <p className="mb-4">
                            Pages files use the <strong>.pages</strong> extension, which is a package format containing XML data, images, and resources. While beautiful on Apple devices, this format creates challenges when sharing with non-Apple users.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-4">
                            <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                                <Apple size={20} /> The Cross-Platform Challenge
                            </h4>
                            <p className="text-blue-800 dark:text-blue-300">
                                While Pages is excellent for Mac users, .pages files <strong>cannot be opened directly</strong> on Windows PCs, Android devices, or Linux computers. Microsoft Word can't import them. This is why converting to PDF is essential for sharing documents across platforms.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Why Convert Pages to PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400 flex items-center gap-2">
                                    <Globe size={20} /> Universal Compatibility
                                </h4>
                                <p className="text-sm">
                                    PDFs can be opened on any device—Windows, Mac, Linux, Chrome OS, Android, iOS—using free PDF readers. Your recipient doesn't need Apple hardware or software.
                                </p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400 flex items-center gap-2">
                                    <Shield size={20} /> Preserve Formatting
                                </h4>
                                <p className="text-sm">
                                    PDF locks in your exact layout, fonts, and design. Unlike converting to Word (which may shift elements), PDF maintains visual fidelity perfectly.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-400 flex items-center gap-2">
                                    <Lock size={20} /> Professional Standard
                                </h4>
                                <p className="text-sm">
                                    PDF is the expected format for business documents, job applications, legal contracts, and official correspondence. Sending a .pages file looks unprofessional.
                                </p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-400 flex items-center gap-2">
                                    <Share2 size={20} /> Easy Sharing
                                </h4>
                                <p className="text-sm">
                                    Most online portals, email systems, and document management platforms accept PDF. Many explicitly reject .pages files or unknown formats.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-4">
                            <h4 className="font-bold mb-3">Common Use Cases</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Students</strong>: Submit assignments to school portals that require PDF</li>
                                <li><strong>Job seekers</strong>: Send resumes and cover letters to employers</li>
                                <li><strong>Business professionals</strong>: Share proposals, contracts, and reports</li>
                                <li><strong>Freelancers</strong>: Deliver documents to clients on Windows</li>
                                <li><strong>Anyone sharing</strong>: Email documents to Windows/Android users</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Convert Pages to PDF Online",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Upload Your Pages File</strong>: Click the upload area or drag and drop your .pages document. Our converter accepts files from Pages on Mac, iPad, and iPhone.
                            </li>
                            <li>
                                <strong>Processing</strong>: Our tool reads the Pages document structure, extracting text, images, tables, and formatting. This happens entirely in your browser—no server upload required.
                            </li>
                            <li>
                                <strong>Preview</strong>: Review the converted document to ensure all content renders correctly. Check that images, charts, and tables appear as expected.
                            </li>
                            <li>
                                <strong>Download PDF</strong>: Save your new PDF file. It's ready to share via email, upload to websites, or print—and anyone can open it.
                            </li>
                        </ol>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2 flex items-center gap-2">
                                <Clock size={20} /> Conversion Speed
                            </h4>
                            <p className="text-yellow-800 dark:text-yellow-300">
                                Most Pages documents convert in 3-5 seconds. Large documents with many high-resolution images may take longer. Processing speed depends on your device.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "alternatives",
                title: "Alternative Methods to Convert Pages to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            If you have access to a Mac or iCloud, there are built-in options:
                        </p>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using Pages on Mac</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm">
                                    <li>Open the document in Pages</li>
                                    <li>Go to <strong>File → Export To → PDF</strong></li>
                                    <li>Choose image quality and save location</li>
                                    <li>Click Export</li>
                                </ol>
                                <p className="text-sm mt-2 italic text-gray-600 dark:text-gray-400">
                                    Best for: Mac users who have Pages installed
                                </p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using iCloud.com (No Mac Required)</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm">
                                    <li>Go to <strong>icloud.com/pages</strong> in any browser</li>
                                    <li>Sign in with your Apple ID</li>
                                    <li>Upload your .pages file</li>
                                    <li>Open the document, click the wrench icon → Download a Copy → PDF</li>
                                </ol>
                                <p className="text-sm mt-2 italic text-gray-600 dark:text-gray-400">
                                    Best for: Apple ID users on Windows/Linux. Requires file upload to Apple servers.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="font-bold text-lg mb-2">Using Pages on iPhone/iPad</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm">
                                    <li>Open the document in Pages app</li>
                                    <li>Tap the three dots (⋯) menu</li>
                                    <li>Select <strong>Export → PDF</strong></li>
                                    <li>Choose where to save or share</li>
                                </ol>
                            </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mt-6">
                            <h4 className="font-bold text-red-900 dark:text-red-400 mb-2">Why Use Our Online Tool?</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 dark:text-red-300">
                                <li>No Mac or Apple device required</li>
                                <li>No Apple ID or iCloud account needed</li>
                                <li>Privacy-first: files stay on your device</li>
                                <li>Works on any device with a browser</li>
                                <li>Free with no usage limits</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy & Security",
                content: (
                    <>
                        <p className="mb-4">
                            Your documents may contain sensitive personal or business information. Our <strong>Pages to PDF converter</strong> processes everything locally:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border border-red-200 bg-red-50 dark:bg-red-900/20 rounded-xl">
                                <h4 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                    <Lock size={20} /> Browser-Based Processing
                                </h4>
                                <p className="text-sm">
                                    Your .pages files are converted entirely in your browser. They <strong>never leave your device</strong>—no server uploads, no cloud storage.
                                </p>
                            </div>
                            <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <h4 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                    <Shield size={20} /> No Apple ID Required
                                </h4>
                                <p className="text-sm">
                                    Unlike iCloud.com, our tool doesn't require you to sign in or authenticate. Complete anonymity for your conversions.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-bold text-lg mb-2 text-orange-900 dark:text-orange-400">Problem: Fonts look different in the PDF</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: The Pages document uses fonts not available in the converter.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Use standard system fonts (Helvetica, Arial, Georgia) in Pages before converting</li>
                                    <li>Apple-specific fonts like San Francisco may substitute with similar alternatives</li>
                                    <li>For exact font matching, export to PDF from Pages on Mac first</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                <h4 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-400">Problem: Charts or graphics don't appear correctly</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Complex Pages-specific elements may not convert perfectly.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Simple charts and shapes convert well</li>
                                    <li>Interactive elements (like data-driven charts) become static images</li>
                                    <li>If critical, recreate complex graphics in the PDF after conversion</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-400">Problem: Large file takes too long</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: Documents with many high-resolution images require more processing.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Wait for processing to complete—it happens locally, so speed depends on your device</li>
                                    <li>Consider reducing image sizes in Pages before converting</li>
                                    <li>Split very large documents into smaller sections</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold text-lg mb-2 text-purple-900 dark:text-purple-400">Problem: .pages file won't upload</h4>
                                <p className="text-sm mb-3"><strong>Cause</strong>: File might be corrupted or in an unsupported format version.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Ensure the file has a .pages extension (not .pages.zip)</li>
                                    <li>Try opening and re-saving in Pages to fix corruption</li>
                                    <li>Very old Pages format versions may not be supported</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "seo-keywords",
                title: "Related Searches",
                content: (
                    <>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            This guide covers: <strong>Pages to PDF converter</strong>, <strong>convert Pages to PDF online</strong>, <strong>Apple Pages to PDF</strong>, <strong>open Pages on Windows</strong>, <strong>.pages to PDF free</strong>, <strong>convert Pages file without Mac</strong>, <strong>Pages to PDF no iCloud</strong>, <strong>iWork to PDF converter</strong>, <strong>Mac document to PDF</strong>, <strong>Pages to PDF online free</strong>, <strong>open Pages on Android</strong>, <strong>convert Apple document to PDF</strong>, <strong>Pages to PDF without Apple ID</strong>, <strong>secure Pages converter</strong>, and <strong>Pages to PDF Canada</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is it free to convert Pages to PDF?",
                a: "Yes! Our Pages to PDF converter is 100% free with no hidden costs, usage limits, or watermarks. Convert as many documents as you need."
            },
            {
                q: "Do I need a Mac or Apple device?",
                a: "No! That's the whole point of our tool. You can convert .pages files on Windows, Linux, Android, Chrome OS—any device with a web browser. No Apple hardware or software required."
            },
            {
                q: "Do I need an Apple ID or iCloud account?",
                a: "No. Unlike Apple's iCloud.com conversion, our tool requires no sign-in or authentication. Simply upload your file and convert. Complete anonymity."
            },
            {
                q: "Are my files uploaded to your servers?",
                a: "No. All conversion happens locally in your browser. Your .pages files never leave your device, ensuring complete privacy for sensitive documents."
            },
            {
                q: "Will charts and tables convert correctly?",
                a: "Simple charts and tables convert well. Complex data-driven charts become static images. For best results with complex graphics, preview the PDF and adjust if needed."
            },
            {
                q: "Why do some fonts look different?",
                a: "Apple-specific fonts may substitute with similar alternatives since they're not available outside macOS/iOS. For exact font matching, use standard fonts (Arial, Helvetica, Georgia) in your Pages document."
            },
            {
                q: "Can I convert Pages files created on iPhone/iPad?",
                a: "Yes! Our converter handles .pages files from any Apple device—Mac, iPad, or iPhone. The file format is the same regardless of the device used to create it."
            },
            {
                q: "What about password-protected Pages documents?",
                a: "You'll need to remove password protection in Pages before converting. Our tool cannot bypass document passwords."
            },
            {
                q: "Can I convert multiple Pages files at once?",
                a: "Currently, we process one file at a time. You can quickly convert multiple files in succession without refreshing the page."
            },
            {
                q: "Why can't Windows open .pages files directly?",
                a: "Pages files use Apple's proprietary format that Microsoft and other platforms don't support. There's no official Windows version of Pages. Converting to PDF bridges this compatibility gap."
            },
            {
                q: "Will the PDF be editable?",
                a: "The resulting PDF preserves your content for viewing and printing, but it's not editable like the original Pages file. If you need to make changes, edit in Pages first, then convert again."
            },
            {
                q: "Can I convert to Word instead of PDF?",
                a: "Our tool specializes in PDF conversion. If you need an editable Word document, export as Word from Pages on Mac, or use iCloud.com's Pages (which offers Word export)."
            }
        ],

        breadcrumb: {
            home: "Home",
            guides: "Guides"
        }
    },
    fr: {
        seo: {
            title: "Convertir Pages en PDF gratuit en ligne | Apple Pages vers PDF | pdfcanada.ca",
            desc: `Convertissez des documents Apple Pages en PDF gratuitement. Notre guide ${CURRENT_YEAR} montre comment partager des fichiers Pages avec des utilisateurs Windows et Android.`
        },
        h1: "Comment convertir Pages en PDF gratuitement en ligne",
        subtitle: "Le guide complet pour convertir des documents Apple Pages en format PDF universellement accessible.",

        intro: (
            <>
                Vous avez créé un document dans <strong>Apple Pages</strong> mais devez le partager avec quelqu'un sur Windows ou Android? Les fichiers Apple Pages (.pages) ne peuvent pas être ouverts sur des appareils non-Apple. Notre <strong>convertisseur Pages en PDF gratuit</strong> transforme vos documents Mac en PDF accessibles à tous.
            </>
        ),

        sections: [
            {
                id: "what-is-pages",
                title: "Qu'est-ce qu'Apple Pages?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>Apple Pages</strong> est l'application de traitement de texte d'Apple, faisant partie de la suite iWork. Les fichiers Pages utilisent l'extension <strong>.pages</strong>, qui ne peut pas être ouverte sur Windows ou Android.
                        </p>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Pourquoi convertir Pages en PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Compatibilité universelle</h4>
                                <p className="text-sm">Les PDF peuvent être ouverts sur tout appareil—Windows, Mac, Linux, Android, iOS.</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Préserver la mise en forme</h4>
                                <p className="text-sm">Le PDF verrouille exactement votre mise en page, polices et design.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape: Convertir Pages en PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Téléchargez votre fichier Pages</strong>: Glissez-déposez votre document .pages.</li>
                            <li><strong>Traitement</strong>: Notre outil extrait le texte, images et tableaux.</li>
                            <li><strong>Aperçu</strong>: Vérifiez que tout le contenu s'affiche correctement.</li>
                            <li><strong>Télécharger PDF</strong>: Enregistrez votre nouveau fichier PDF.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Confidentialité et sécurité",
                content: (
                    <>
                        <p className="mb-4">
                            Notre convertisseur traite tout localement dans votre navigateur. Vos fichiers .pages <strong>ne quittent jamais votre appareil</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce gratuit de convertir Pages en PDF?",
                a: "Oui! Notre convertisseur est 100% gratuit sans coûts cachés ni limites."
            },
            {
                q: "Ai-je besoin d'un Mac ou appareil Apple?",
                a: "Non! Vous pouvez convertir des fichiers .pages sur Windows, Linux, Android—tout appareil avec un navigateur web."
            },
            {
                q: "Ai-je besoin d'un identifiant Apple?",
                a: "Non. Contrairement à iCloud.com, notre outil ne nécessite aucune connexion."
            },
            {
                q: "Mes fichiers sont-ils téléchargés sur vos serveurs?",
                a: "Non. Toute la conversion se fait localement dans votre navigateur."
            }
        ],

        breadcrumb: {
            home: "Accueil",
            guides: "Guides"
        }
    },
    pt: {
        seo: {
            title: "Converter Pages para PDF grátis online | Apple Pages para PDF | pdfcanada.ca",
            desc: `Converta documentos Apple Pages para PDF gratuitamente. Nosso guia ${CURRENT_YEAR} mostra como compartilhar arquivos Pages com usuários Windows e Android.`
        },
        h1: "Como converter Pages para PDF gratuitamente online",
        subtitle: "O guia completo para converter documentos Apple Pages em formato PDF universalmente acessível.",

        intro: (
            <>
                Criou um documento no <strong>Apple Pages</strong> mas precisa compartilhá-lo com alguém no Windows ou Android? Arquivos Apple Pages (.pages) não podem ser abertos em dispositivos não-Apple. Nosso <strong>conversor Pages para PDF gratuito</strong> transforma seus documentos Mac em PDFs acessíveis a todos.
            </>
        ),

        sections: [
            {
                id: "what-is-pages",
                title: "O que é Apple Pages?",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>Apple Pages</strong> é o aplicativo de processamento de texto da Apple, parte do pacote iWork. Arquivos Pages usam a extensão <strong>.pages</strong>, que não pode ser aberta no Windows ou Android.
                        </p>
                    </>
                )
            },
            {
                id: "why-convert",
                title: "Por que converter Pages para PDF?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-400">Compatibilidade universal</h4>
                                <p className="text-sm">PDFs podem ser abertos em qualquer dispositivo—Windows, Mac, Linux, Android, iOS.</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-400">Preservar formatação</h4>
                                <p className="text-sm">PDF mantém exatamente seu layout, fontes e design.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a passo: Converter Pages para PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Envie seu arquivo Pages</strong>: Arraste e solte seu documento .pages.</li>
                            <li><strong>Processamento</strong>: Nossa ferramenta extrai texto, imagens e tabelas.</li>
                            <li><strong>Visualizar</strong>: Verifique se todo o conteúdo aparece corretamente.</li>
                            <li><strong>Baixar PDF</strong>: Salve seu novo arquivo PDF.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacidade e Segurança",
                content: (
                    <>
                        <p className="mb-4">
                            Nosso conversor processa tudo localmente no seu navegador. Seus arquivos .pages <strong>nunca saem do seu dispositivo</strong>.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "É grátis converter Pages para PDF?",
                a: "Sim! Nosso conversor é 100% gratuito sem custos ocultos ou limites."
            },
            {
                q: "Preciso de um Mac ou dispositivo Apple?",
                a: "Não! Você pode converter arquivos .pages no Windows, Linux, Android—qualquer dispositivo com navegador web."
            },
            {
                q: "Preciso de um ID Apple?",
                a: "Não. Diferente do iCloud.com, nossa ferramenta não requer nenhum login."
            },
            {
                q: "Meus arquivos são enviados para seus servidores?",
                a: "Não. Toda a conversão acontece localmente no seu navegador."
            }
        ],

        breadcrumb: {
            home: "Início",
            guides: "Guias"
        }
    }
});

export const PagesToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang)[lang] || getGuideContent(lang).en;
    const slug = 'pages-to-pdf';

    return (
        <>
            <SEO
                title={content.seo.title}
                description={content.seo.desc}
                canonicalPath={`/${lang}/${slug}-guide`}
                lang={lang}
            />
            <PageLayout title={content.h1} subtitle={content.subtitle} icon={<FileText size={32} />}>
                <article className="max-w-4xl mx-auto px-4 py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        <Link href={`/${lang}`} className="hover:text-canada-red">{content.breadcrumb.home}</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/guides`} className="hover:text-canada-red">{content.breadcrumb.guides}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 dark:text-white">Pages to PDF</span>
                    </nav>

                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-canada-red/10 rounded-2xl">
                                <FileText className="w-8 h-8 text-canada-red" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    {content.h1}
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                                    {content.subtitle}
                                </p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {content.intro}
                        </p>
                    </header>

                    {/* AI Snapshot */}
                    <AISnapshot
                        lang={lang}
                        question={lang === 'fr' ? "Comment convertir Pages en PDF?" : (lang === 'pt' ? "Como converter Pages para PDF?" : "How do I convert Pages to PDF?")}
                        answer={lang === 'fr'
                            ? "Téléchargez votre fichier .pages, notre outil le convertit en PDF dans votre navigateur. Aucun Mac, identifiant Apple ou téléchargement serveur requis."
                            : (lang === 'pt'
                                ? "Envie seu arquivo .pages, nossa ferramenta o converte para PDF no seu navegador. Sem Mac, ID Apple ou upload para servidor necessário."
                                : "Upload your .pages file, our tool converts it to PDF right in your browser. No Mac, Apple ID, or server upload required."
                            )
                        }
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier Pages", "Traitement automatique", "Aperçu du document", "Téléchargez le PDF"]
                            : (lang === 'pt'
                                ? ["Envie seu arquivo Pages", "Processamento automático", "Visualize o documento", "Baixe o PDF"]
                                : ["Upload your Pages file", "Automatic processing", "Preview the document", "Download the PDF"]
                            )
                        }
                    />

                    {/* Tool Promo */}
                    <ToolPromo lang={lang} tool={slug} />

                    {/* Main Content Sections */}
                    {content.sections.map((section, index) => (
                        <section key={section.id} id={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-canada-red text-white text-sm font-bold">
                                    {index + 1}
                                </span>
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    {/* FAQ Section */}
                    <section id="faq" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {lang === 'fr' ? 'Questions fréquemment posées' : (lang === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions')}
                        </h2>
                        <div className="space-y-6">
                            {content.faq.map((item, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Author Bio */}
                    <AuthorBio lang={lang} />

                    {/* Related Tools */}
                    <RelatedTools
                        lang={lang}
                        currentPath={`/${lang}/${slug}-guide`}
                        category="convert"
                    />
                </article>
            </PageLayout>
        </>
    );
};
