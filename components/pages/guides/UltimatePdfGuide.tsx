'use client';

import Link from 'next/link';
import React from 'react';
import { Split, BookOpen, Shield, Zap, Lock, Globe, CheckCircle, ArrowRight, FileText, Trash2, RotateCw, Image, Search, MousePointer2, Settings, Users, Cpu, Accessibility, Globe2, Heart, PenTool, Mail } from 'lucide-react';
import { Language, CURRENT_YEAR, translations } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Ultimate ${CURRENT_YEAR} Guide to PDF Tools | Master Your Documents | pdfcanada.ca`,
            desc: `Master PDF management with our definitive ${CURRENT_YEAR} guide. Learn how to edit, merge, and convert PDFs securely using local-first tools. No uploads, 100% private.`
        },
        h1: `The Ultimate Guide to Modern PDF Management (${CURRENT_YEAR} Edition)`,
        subtitle: "A comprehensive deep-dive into editing, converting, and securing your PDF documents without expensive software.",

        // AEO Quick Answer Box
        quickAnswer: {
            question: "What are the best free PDF tools?",
            answer: "The best free PDF tools in 2026 are local-first, browser-based solutions like pdfcanada.ca. They offer editing, merging, splitting, compressing, converting, OCR, and signing—all without uploading your files to any server. This provides faster processing, complete privacy, and no file size limits.",
            time: "Varies by tool (5-60 seconds)",
            cost: "100% free, no account needed",
            privacy: "Local processing—files never leave your device"
        },

        // At-a-Glance Summary
        atGlance: {
            title: "PDF Mastery: At a Glance",
            items: [
                { label: "Tools Available", value: "20+ free PDF tools" },
                { label: "Best For", value: "Students, professionals, small businesses" },
                { label: "Privacy", value: "100% local processing—no uploads" },
                { label: "Cost", value: "Free forever, no hidden fees" },
                { label: "Platform", value: "Works on any device with a browser" },
                { label: "Speed", value: "Instant processing (no upload wait)" }
            ]
        },

        // All Tools Matrix for AEO
        toolsMatrix: {
            title: "Complete PDF Toolkit Overview",
            categories: [
                {
                    name: "Edit & Organize",
                    tools: [
                        { name: "Delete Pages", desc: "Remove unwanted pages", time: "5s" },
                        { name: "Rotate PDF", desc: "Fix page orientation", time: "3s" },
                        { name: "Reorder Pages", desc: "Rearrange page sequence", time: "10s" },
                        { name: "Crop PDF", desc: "Trim page margins", time: "5s" }
                    ]
                },
                {
                    name: "Combine & Split",
                    tools: [
                        { name: "Merge PDF", desc: "Combine multiple PDFs", time: "5-15s" },
                        { name: "Split PDF", desc: "Extract specific pages", time: "5s" },
                        { name: "Insert Pages", desc: "Add pages to existing PDF", time: "5s" }
                    ]
                },
                {
                    name: "Convert",
                    tools: [
                        { name: "PDF to Word", desc: "Extract editable text", time: "10-30s" },
                        { name: "PDF to EPUB", desc: "E-reader format", time: "15-45s" },
                        { name: "Images to PDF", desc: "Create PDF from photos", time: "5-15s" },
                        { name: "HEIC to PDF", desc: "iPhone photos to PDF", time: "5s" }
                    ]
                },
                {
                    name: "Optimize & Secure",
                    tools: [
                        { name: "Compress PDF", desc: "Reduce file size", time: "5-20s" },
                        { name: "Protect PDF", desc: "Add password", time: "3s" },
                        { name: "Unlock PDF", desc: "Remove password", time: "3s" },
                        { name: "OCR PDF", desc: "Make searchable", time: "30-120s" }
                    ]
                }
            ]
        },

        sections: [
            {
                id: "intro",
                title: "Introduction: Why PDFs Still Rule the World",
                content: (
                    <>
                        In the rapidly evolving landscape of digital communication, the Portable Document Format (PDF) remains an unshakeable cornerstone. Created by Adobe in the early 1990s, the PDF was designed to solve a single, critical problem: how to share documents that look exactly the same on every device.
                        <br /><br />
                        Today, billions of PDFs are created every year. However, while the format has remained stable, our requirements have grown. We need to <Link href={`/${lang}/guides/delete-pdf-pages`} className="text-canada-red hover:underline decoration-dashed">delete pages</Link>, sign contracts, and convert formats.
                        <br /><br />
                        This guide serves as a beacon for anyone looking to navigate these tasks without falling into the &quot;subscription trap.&quot; We'll explore how modern technology allows for <strong>free PDF tools online</strong> that are faster and more secure than their desktop ancestors.
                    </>
                )
            },
            {
                id: "ecosystem",
                title: "The PDF Ecosystem: 4 Pillars of Mastery",
                content: (
                    <>
                        To master PDF management, it helps to understand the four main categories of tools available to you. We have organized our resources into central hubs for each:
                        <br /><br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <Link href={`/${lang}/guides/pdf-conversions`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">1. Conversion Hub</h4>
                                <p className="text-sm text-gray-600">Convert PDF to Word, Excel, PowerPoint, Images, and e-book formats.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-editing`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">2. Editing Hub</h4>
                                <p className="text-sm text-gray-600">Merge, split, compress, rotate, delete pages, and crop documents.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-security`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">3. Security Hub</h4>
                                <p className="text-sm text-gray-600">Protect, unlock, and redact sensitive information using local encryption.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-ocr-analysis`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">4. OCR & Analysis</h4>
                                <p className="text-sm text-gray-600">Extract text from scans, analyze metadata, and generate barcodes.</p>
                            </Link>
                        </div>
                    </>
                )
            },
            {
                id: "privacy-revolution",
                title: "The Privacy Revolution: Local-First Processing",
                content: (
                    <>
                        For years, using an &quot;online PDF editor&quot; meant uploading your private files to a stranger's server. This created a massive vulnerability for sensitive documents like tax filings or medical records.
                        <br /><br />
                        <strong>pdfcanada.ca</strong> is built on a &quot;Local-First&quot; philosophy. We use WebAssembly to run the PDF engine <em>inside your browser</em>.
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Zero Uploading</strong>: Your document never leaves your RAM.</li>
                            <li><strong>Physical Isolation</strong>: Even if our servers vanished, the tool would still work on your loaded page.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "deleting-pages",
                title: "Efficiency 101: Deleting and Reordering Pages",
                content: (
                    <>
                        Whether it's a 200-page report where you only need the summary, or a scanned contract with ghost pages, knowing how to <strong>delete PDF pages</strong> is a massive time-saver.
                        <br /><br />
                        Our <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-bold">Delete PDF Pages Tool</Link> allows you to see the entire document structure at a glance. You can click to select and remove pages instantly.
                    </>
                )
            },
            {
                id: "rotation-fix",
                title: "The Scan Struggle: Mastering PDF Rotation",
                content: (
                    <>
                        We've all been there: you open a PDF, and it's sideways. Standard viewers might let you rotate the <em>view</em>, but they rarely let you save the change.
                        <br /><br />
                        Using a dedicated <Link href={`/${lang}/guides/rotate-pdf`} className="text-canada-red hover:underline font-bold">Rotate PDF Tool</Link> fixes this permanently. This updates the file's metadata, ensuring the recipient sees exactly what you see.
                    </>
                )
            },
            {
                id: "conversion-magic",
                title: "Conversion Magic: HEIC, EPUB, and Beyond",
                content: (
                    <>
                        The world of digital formats is messy. iPhones use HEIC, Kindles want EPUBs, and businesses demand PDFs.
                        <br /><br />
                        <strong>HEIC to PDF</strong>: If you&apos;re struggling to open iPhone photos on Windows, our <Link href={`/${lang}/guides/heic-to-pdf`} className="text-canada-red hover:underline font-bold">HEIC Converter</Link> bridges that gap securely.
                        <br /><br />
                        <strong>eBook Conversion</strong>: Need to read a PDF on a small screen? Converting <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">PDF to EPUB</Link> allows the text to reflow comfortably on your e-reader.
                    </>
                )
            },
            {
                id: "financial-data",
                title: "Financial Data: PDF to CSV and Excel",
                content: (
                    <>
                        For accountants and small business owners, the biggest hurdle is <strong>extracting bank statement data</strong>. Typing transactions manually is prone to error and incredibly slow.
                        <br /><br />
                        Our <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold text-lg underline decoration-canada-red/30">PDF to CSV Guide</Link> explains how to use our spatial extraction engine to turn messy bank statements into structured data for QuickBooks or Excel. This is particularly useful for reconciling years of paper records in minutes.
                    </>
                )
            },
            {
                id: "ocr-search",
                title: "Unlocking Text: The Power of OCR",
                content: (
                    <>
                        A scanned PDF is often just a &quot;container for images.&quot; The computer sees pixels, not words.
                        <br /><br />
                        <strong>Optical Character Recognition (OCR)</strong> creates a transparent text layer over your scan. By using our <Link href={`/${lang}/guides/invoice-ocr`} className="text-canada-red hover:underline font-bold">OCR PDF Tool</Link>, you can make any scanned document searchable (Ctrl+F) and copy-pasteable.
                    </>
                )
            },
            {
                id: "interactive-pdfs",
                title: "Interactive Documents: Fillable Forms",
                content: (
                    <>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h4 className="font-bold text-canada-red mb-2 italic">Pro Tip:</h4>
                            Static documents are a relic. If you need a client to provide info, don't make them print and scan.
                        </div>
                        <br /><br />
                        Learning to <Link href={`/${lang}/guides/make-pdf-fillable`} className="text-canada-red hover:underline font-bold">make PDFs fillable</Link> transforms a flat document into a powerful data-gathering tool with text fields and checkboxes.
                    </>
                )
            },
            {
                id: "canadian-identity",
                title: "The 'Polite Canadian' Philosophy",
                content: (
                    <>
                        Why &quot;pdfcanada.ca&quot;? In a world of global tech giants, there is value in local, niche services.
                        <br /><br />
                        We prioritize <strong>Utility over Profit</strong> and <strong>Privacy as a Right</strong>. By providing free Canadian PDF tools, we aim to support students and small businesses who just want to get their tasks done safely.
                    </>
                )
            },
            {
                id: "conclusion",
                title: "Conclusion: Empowering Your Digital Workspace",
                content: (
                    <>
                        Mastering the PDF is about choosing tools that respect your time and data.
                        <br /><br />
                        The power that used to require a $500 license is now available for free in your browser. Next time you need to edit a doc, remember that the secure way is right here, processed locally on your own machine.
                    </>
                )
            }
        ],

        faqTitle: "Frequently Asked Questions about PDF Tools",
        faqs: [
            {
                q: "What makes pdfcanada.ca different from other PDF tools?",
                a: (
                    <>
                        Unlike major services, we use 'Local-First' processing. Your files never upload to a server; editing happens entirely in your browser's memory. This means faster processing, complete <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline decoration-dashed">privacy</Link>, and no file size limits.
                    </>
                )
            },
            {
                q: "Is there a limit to file size I can process?",
                a: "Since processing is done on your hardware, we don't enforce arbitrary server limits. You can process larger files than most cloud tools allow—typically up to your device's available RAM (usually 100-500MB for most computers)."
            },
            {
                q: "Do I need to create an account to use these tools?",
                a: "No. No account, no email, no login required. Just visit the tool you need and start working immediately. We believe in friction-free productivity."
            },
            {
                q: "Can I use these PDF tools on my phone or tablet?",
                a: "Absolutely. All our tools are fully responsive and work on iOS (iPhone/iPad), Android phones and tablets. The mobile experience is optimized for touch with easy-to-tap buttons and drag-and-drop support."
            },
            {
                q: "Are these tools really 100% free?",
                a: "Yes, completely free with no hidden fees, no 'Pro' version upsells, no watermarks, and no daily usage limits. We're supported by minimal, non-intrusive ads and built on the 'Polite Canadian' philosophy of providing genuine value."
            },
            {
                q: "How do I edit a scanned PDF that I can't select text from?",
                a: (
                    <>
                        Use our <Link href={`/${lang}/invoice-ocr`} className="text-canada-red hover:underline font-bold">OCR (Optical Character Recognition) tool</Link>. It analyzes the scanned images and creates a searchable, selectable text layer over your document. After OCR, you can copy text, search with Ctrl+F, and use other editing tools.
                    </>
                )
            },
            {
                q: "Can I merge multiple PDFs into one document?",
                a: (
                    <>
                        Yes, our <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-bold">Merge PDF tool</Link> lets you combine unlimited PDFs into a single file. Just drag and drop your files, arrange them in the order you want, and click merge. The result is a single, combined PDF document.
                    </>
                )
            },
            {
                q: "What's the best format to convert my PDF to for e-readers?",
                a: (
                    <>
                        For e-readers like Kindle or Kobo, <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">convert to EPUB format</Link>. EPUB allows the text to reflow based on screen size and font preferences, providing a much better reading experience than viewing a fixed-layout PDF.
                    </>
                )
            },
            {
                q: "Can I password-protect my PDF after editing?",
                a: "Yes, use our Protect PDF tool to add password encryption to your document. You can set a password required to open the file and/or restrict printing, copying, and editing."
            },
            {
                q: "How do I remove a password from a PDF I own?",
                a: "Use our Unlock PDF tool. You'll need to know the current password. Once entered, we can remove the protection and save a new, unlocked version. This is useful when you've inherited old documents or forgotten your own passwords."
            }
        ],

        cta: "Ready to take control of your documents?",
        ctaBtn: "Explore All Tools",
        related: "More Resources"
    },
    fr: {
        seo: {
            title: `Guide Ultime ${CURRENT_YEAR} des Outils PDF | Maîtrisez vos Documents | pdfcanada.ca`,
            desc: `Maîtrisez la gestion des PDF avec notre guide définitif ${CURRENT_YEAR}. Apprenez à éditer, fusionner et convertir vos PDF en toute sécurité sans jamais les télécharger.`
        },
        h1: `Le Guide Ultime de la Gestion Moderne des PDF (Édition ${CURRENT_YEAR})`,
        subtitle: "Un plongeon complet dans l'édition, la conversion et la sécurisation de vos documents PDF sans logiciel coûteux.",

        sections: [
            {
                id: "intro",
                title: "Introduction : Pourquoi le PDF domine toujours le monde",
                content: (
                    <>
                        Dans le paysage numérique d'aujourd'hui, le format PDF reste une pierre angulaire inébranlable. Créé par Adobe au début des années 90, le PDF a été conçu pour résoudre un problème critique : how to share documents that appear exactly the same on any device.
                        <br /><br />
                        Aujourd'hui, des milliards de PDF sont créés chaque année. Cependant, nos exigences ont grandi. Nous devons <Link href={`/${lang}/guides/delete-pdf-pages`} className="text-canada-red hover:underline decoration-dashed">supprimer des pages</Link>, signer des contrats et convertir des formats.
                        <br /><br />
                        Ce guide sert de phare à quiconque cherche à naviguer dans ces tâches sans tomber dans le &quot;piège de l'abonnement&quot;. Nous explorerons comment la technologie moderne permet des <strong>outils PDF gratuits en ligne</strong> qui sont plus rapides et plus sécurisés que leurs ancêtres de bureau.
                    </>
                )
            },
            {
                id: "ecosystem",
                title: "L'Écosystème PDF : 4 Piliers de Maîtrise",
                content: (
                    <>
                        Pour maîtriser la gestion PDF, il est utile de comprendre les quatre catégories principales d'outils à votre disposition. Nous avons organisé nos ressources en hubs centraux :
                        <br /><br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <Link href={`/${lang}/guides/pdf-conversions`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">1. Hub de Conversion</h4>
                                <p className="text-sm text-gray-600">Convertir PDF en Word, Excel, PowerPoint, Images et formats ebook.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-editing`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">2. Hub d'Édition</h4>
                                <p className="text-sm text-gray-600">Fusionner, diviser, compresser, pivoter, supprimer des pages et recadrer.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-security`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">3. Hub de Sécurité</h4>
                                <p className="text-sm text-gray-600">Protéger, déverrouiller et biffer les informations sensibles.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-ocr-analysis`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">4. OCR & Analyse</h4>
                                <p className="text-sm text-gray-600">Extraire du texte des scans, analyser les métadonnées et codes-barres.</p>
                            </Link>
                        </div>
                    </>
                )
            },
            {
                id: "privacy-revolution",
                title: "La Révolution de la Confidentialité : Traitement Local",
                content: (
                    <>
                        Pendant des années, utiliser un &quot;éditeur PDF en ligne&quot; signifiait télécharger vos fichiers privés sur le serveur d'un inconnu. Cela créait une vulnérabilité massive pour des documents sensibles comme les déclarations fiscales ou les dossiers médicaux.
                        <br /><br />
                        <strong>pdfcanada.ca</strong> est construit sur une philosophie &quot;Local-First&quot;. Nous utilisons WebAssembly pour faire tourner le moteur PDF <em>à l'intérieur de votre navigateur</em>.
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Zéro Téléchargement</strong> : Votre document ne quitte jamais votre RAM.</li>
                            <li><strong>Isolation Physique</strong> : Même si nos serveurs disparaissaient, l'outil fonctionnerait toujours sur votre page chargée.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "deleting-pages",
                title: "Efficacité 101 : Supprimer et Réorganiser des Pages",
                content: (
                    <>
                        Que ce soit un rapport de 200 pages dont vous n'avez besoin que du résumé, ou un contrat scanné avec des pages fantômes, savoir comment <strong>supprimer des pages PDF</strong> est un gain de temps énorme.
                        <br /><br />
                        Notre <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-bold">Outil de Suppression de Pages</Link> vous permet de voir toute la structure du document d'un coup d'œil. Vous pouvez cliquer pour sélectionner et supprimer des pages instantanément.
                    </>
                )
            },
            {
                id: "rotation-fix",
                title: "La Lutte du Scan : Maîtriser la Rotation PDF",
                content: (
                    <>
                        Nous y avons tous été confrontés : vous ouvrez un PDF et il est de côté. Les visionneuses standard peuvent vous laisser faire pivoter la <em>vue</em>, mais elles vous laissent rarement enregistrer le changement.
                        <br /><br />
                        Utiliser un <Link href={`/${lang}/guides/rotate-pdf`} className="text-canada-red hover:underline font-bold">Outil de Rotation PDF</Link> dédié corrige cela définitivement. Cela met à jour les métadonnées du fichier, garantissant que le destinataire voit exactement ce que vous voyez.
                    </>
                )
            },
            {
                id: "conversion-magic",
                title: "Magie de Conversion : HEIC, EPUB et Au-delà",
                content: (
                    <>
                        Le monde des formats numériques est désordonné. Les iPhones utilisent HEIC, les Kindles veulent des EPUB, et les entreprises exigent des PDF.
                        <br /><br />
                        <strong>HEIC en PDF</strong> : Si vous avez du mal à ouvrir des photos iPhone sur Windows, notre <Link href={`/${lang}/guides/heic-to-pdf`} className="text-canada-red hover:underline font-bold">Convertisseur HEIC</Link> comble cet écart en toute sécurité.
                        <br /><br />
                        <strong>Conversion eBook</strong> : Besoin de lire un PDF sur un petit écran ? Convertir <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">PDF en EPUB</Link> permet au texte de s&apos;adapter confortablement sur votre liseuse.
                    </>
                )
            },
            {
                id: "financial-data",
                title: "Données Financières : PDF en CSV et Excel",
                content: (
                    <>
                        Pour les comptables et propriétaires d&apos;entreprise, le plus grand défi est l&apos;<strong>extraction des relevés bancaires</strong>. La saisie manuelle est source d&apos;erreurs et extrêmement lente.
                        <br /><br />
                        Notre <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold text-lg underline decoration-canada-red/30">Guide PDF vers CSV</Link> explique comment utiliser notre moteur d&apos;extraction spatiale pour transformer des relevés bancaires PDF en données structurées pour QuickBooks ou Excel.
                    </>
                )
            },
            {
                id: "ocr-search",
                title: "Débloquer le Texte : La Puissance de l'OCR",
                content: (
                    <>
                        Un PDF scanné est souvent juste un &quot;conteneur d'images&quot;. L'ordinateur voit des pixels, pas des mots.
                        <br /><br />
                        <strong>La Reconnaissance Optique de Caractères (OCR)</strong> crée une couche de texte transparente sur votre scan. En utilisant notre <Link href={`/${lang}/guides/invoice-ocr`} className="text-canada-red hover:underline font-bold">Outil OCR PDF</Link>, vous pouvez rendre n'importe quel document scanné consultable (Ctrl+F) et copiable.
                    </>
                )
            },
            {
                id: "interactive-pdfs",
                title: "Documents Interactifs : Formulaires Remplissables",
                content: (
                    <>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h4 className="font-bold text-canada-red mb-2 italic">Conseil Pro:</h4>
                            Les documents statiques sont une relique. Si vous avez besoin qu'un client fournisse des infos, ne les faites pas imprimer et scanner.
                        </div>
                        <br /><br />
                        Apprendre à <Link href={`/${lang}/guides/make-pdf-fillable`} className="text-canada-red hover:underline font-bold">créer des PDF remplissables</Link> transforme un document plat en un puissant outil de collecte de données avec champs de texte et cases à cocher.
                    </>
                )
            },
            {
                id: "canadian-identity",
                title: "La Philosophie du 'Canadien Poli'",
                content: (
                    <>
                        Pourquoi &quot;pdfcanada.ca&quot; ? Dans un monde de géants technologiques mondiaux, il y a de la valeur dans les services locaux de niche.
                        <br /><br />
                        Nous privilégions <strong>l'Utilité sur le Profit</strong> et la <strong>Confidentialité comme un Droit</strong>. En fournissant des outils PDF canadiens gratuits, nous visons à soutenir les étudiants et les petites entreprises qui veulent juste accomplir leurs tâches en toute sécurité.
                    </>
                )
            },
            {
                id: "conclusion",
                title: "Conclusion : Autonomiser Votre Espace de Travail Numérique",
                content: (
                    <>
                        Maîtriser le PDF consiste à choisir des outils qui respectent votre temps et vos données.
                        <br /><br />
                        La puissance qui nécessitait auparavant une licence de 500 $ est maintenant disponible gratuitement dans votre navigateur. La prochaine fois que vous devez éditer un doc, rappelez-vous que la méthode sécurisée est juste ici, traitée localement sur votre propre machine.
                    </>
                )
            }
        ],

        faqTitle: "Questions Fréquentes sur les Outils PDF",
        faqs: [
            {
                q: "Qu'est-ce qui rend pdfcanada.ca différent des autres outils PDF ?",
                a: (
                    <>
                        Contrairement aux services majeurs, nous utilisons un traitement 'Local-First'. Vos fichiers ne sont jamais téléchargés sur un serveur ; l'édition se fait entièrement dans la mémoire de votre navigateur. Cela signifie un traitement plus rapide, une <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline decoration-dashed">confidentialité totale</Link> et aucune limite de taille de fichier.
                    </>
                )
            },
            {
                q: "Y a-t-il une limite de taille de fichier ?",
                a: "Puisque le traitement est effectué sur votre matériel, nous n'imposons pas de limites arbitraires de serveur. Vous pouvez traiter des fichiers plus volumineux que la plupart des outils cloud—généralement jusqu'à la RAM disponible de votre appareil."
            },
            {
                q: "Dois-je créer un compte pour utiliser ces outils ?",
                a: "Non. Aucun compte, aucun courriel, aucune connexion requis. Visitez simplement l'outil dont vous avez besoin et commencez à travailler immédiatement. Nous croyons en la productivité sans friction."
            },
            {
                q: "Puis-je utiliser ces outils PDF sur mon téléphone ou tablette ?",
                a: "Absolument. Tous nos outils sont entièrement réactifs et fonctionnent sur iOS (iPhone/iPad), téléphones et tablettes Android. L'expérience mobile est optimisée pour le tactile."
            },
            {
                q: "Ces outils sont-ils vraiment 100% gratuits ?",
                a: "Oui, complètement gratuits sans frais cachés, sans version 'Pro', sans filigranes et sans limites d'utilisation quotidienne. Nous sommes basés sur la philosophie du 'Canadien Poli' de fournir une valeur véritable."
            },
            {
                q: "Comment éditer un PDF scanné dont je ne peux pas sélectionner le texte ?",
                a: (
                    <>
                        Utilisez notre <Link href={`/${lang}/invoice-ocr`} className="text-canada-red hover:underline font-bold">outil OCR (Reconnaissance Optique de Caractères)</Link>. Il analyse les images scannées et crée une couche de texte consultable et sélectionnable sur votre document.
                    </>
                )
            },
            {
                q: "Puis-je fusionner plusieurs PDF en un seul document ?",
                a: (
                    <>
                        Oui, notre <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-bold">outil Fusionner PDF</Link> vous permet de combiner des PDF illimités en un seul fichier. Glissez-déposez vos fichiers, arrangez-les dans l'ordre souhaité, et cliquez fusionner.
                    </>
                )
            },
            {
                q: "Quel est le meilleur format pour convertir mon PDF pour les liseuses ?",
                a: (
                    <>
                        Pour les liseuses comme Kindle ou Kobo, <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">convertissez en format EPUB</Link>. L'EPUB permet au texte de s'adapter en fonction de la taille de l'écran et des préférences de police.
                    </>
                )
            },
            {
                q: "Puis-je protéger mon PDF par mot de passe après l'édition ?",
                a: "Oui, utilisez notre outil Protéger PDF pour ajouter un chiffrement par mot de passe à votre document. Vous pouvez définir un mot de passe requis pour ouvrir le fichier."
            },
            {
                q: "Comment supprimer un mot de passe d'un PDF que je possède ?",
                a: "Utilisez notre outil Déverrouiller PDF. Vous devrez connaître le mot de passe actuel. Une fois entré, nous pouvons supprimer la protection et enregistrer une nouvelle version déverrouillée."
            }
        ],

        cta: "Prêt à prendre le contrôle de vos documents?",
        ctaBtn: "Voir tous les outils",
        related: "Plus de ressources"
    },
    pt: {
        seo: {
            title: `Guia Definitivo ${CURRENT_YEAR} de Ferramentas PDF | Domine Seus Documentos | pdfcanada.ca`,
            desc: `Domine o gerenciamento de PDF com nosso guia definitivo de ${CURRENT_YEAR}. Aprenda a editar, fundir e converter PDFs com segurança usando ferramentas locais. Sem uploads, 100% privado.`
        },
        h1: `O Guia Definitivo para Gerenciamento Moderno de PDF (Edição ${CURRENT_YEAR})`,
        subtitle: "Um mergulho abrangente em edição, conversão e segurança de seus documentos PDF sem software caro.",

        sections: [
            {
                id: "intro",
                title: "Introdução: Por Que PDFs Ainda Dominam o Mundo",
                content: (
                    <>
                        No cenário de comunicação digital em rápida evolução, o formato PDF (Portable Document Format) permanece uma pedra angular inabalável. Criado pela Adobe no início dos anos 90, o PDF foi projetado para resolver um único problema crítico: como compartilhar documentos que parecem exatamente iguais em qualquer dispositivo.
                        <br /><br />
                        Hoje, bilhões de PDFs são criados todos os anos. No entanto, embora o formato tenha permanecido estável, nossos requisitos cresceram. Precisamos <Link href={`/${lang}/guides/delete-pdf-pages`} className="text-canada-red hover:underline decoration-dashed">apagar páginas</Link>, assinar contratos e converter formatos.
                        <br /><br />
                        Este guia serve como um farol para qualquer pessoa que queira navegar nessas tarefas sem cair na "armadilha da assinatura". Exploraremos como a tecnologia moderna permite <strong>ferramentas de PDF gratuitas online</strong> que são mais rápidas e seguras do que seus ancestrais de desktop.
                    </>
                )
            },
            {
                id: "ecosystem",
                title: "O Ecossistema PDF: 4 Pilares de Maestria",
                content: (
                    <>
                        Para dominar o gerenciamento de PDF, ajuda entender as quatro principais categorias de ferramentas disponíveis para você. Organizamos nossos recursos em hubs centrais para cada um:
                        <br /><br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <Link href={`/${lang}/guides/pdf-conversions`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">1. Hub de Conversão</h4>
                                <p className="text-sm text-gray-600">Converta PDF para Word, Excel, PowerPoint, Imagens e formatos de e-book.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-editing`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">2. Hub de Edição</h4>
                                <p className="text-sm text-gray-600">Fundir, dividir, comprimir, girar, apagar páginas e cortar documentos.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-security`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">3. Hub de Segurança</h4>
                                <p className="text-sm text-gray-600">Proteger, desbloquear e redigir informações sensíveis usando criptografia local.</p>
                            </Link>
                            <Link href={`/${lang}/guides/pdf-ocr-analysis`} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-canada-red hover:shadow-lg transition-all group">
                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-canada-red mb-2">4. OCR e Análise</h4>
                                <p className="text-sm text-gray-600">Extrair texto de digitalizações, analisar metadados e gerar códigos de barras.</p>
                            </Link>
                        </div>
                    </>
                )
            },
            {
                id: "privacy-revolution",
                title: "A Revolução da Privacidade: Processamento Local-First",
                content: (
                    <>
                        Por anos, usar um "editor de PDF online" significava fazer upload de seus arquivos privados para o servidor de um estranho. Isso criou uma enorme vulnerabilidade para documentos sensíveis como declarações fiscais ou registros médicos.
                        <br /><br />
                        <strong>pdfcanada.ca</strong> é construído sobre uma filosofia "Local-First". Usamos WebAssembly para rodar o motor de PDF <em>dentro do seu navegador</em>.
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Zero Upload</strong>: Seu documento nunca sai da sua RAM.</li>
                            <li><strong>Isolamento Físico</strong>: Mesmo se nossos servidores desaparecessem, a ferramenta ainda funcionaria na sua página carregada.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "deleting-pages",
                title: "Eficiência 101: Apagando e Reordenando Páginas",
                content: (
                    <>
                        Seja um relatório de 200 páginas onde você só precisa do resumo, ou um contrato digitalizado com páginas fantasmas, saber como <strong>apagar páginas PDF</strong> é uma enorme economia de tempo.
                        <br /><br />
                        Nossa <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-bold">Ferramenta de Apagar Páginas PDF</Link> permite que você veja toda a estrutura do documento de relance. Você pode clicar para selecionar e remover páginas instantaneamente.
                    </>
                )
            },
            {
                id: "rotation-fix",
                title: "A Luta do Scanner: Dominando a Rotação de PDF",
                content: (
                    <>
                        Todos nós já passamos por isso: você abre um PDF e ele está de lado. Visualizadores padrão podem deixar você girar a <em>visualização</em>, mas raramente deixam você salvar a alteração.
                        <br /><br />
                        Usar uma <Link href={`/${lang}/guides/rotate-pdf`} className="text-canada-red hover:underline font-bold">Ferramenta Girar PDF</Link> dedicada corrige isso permanentemente. Isso atualiza os metadados do arquivo, garantindo que o destinatário veja exatamente o que você vê.
                    </>
                )
            },
            {
                id: "conversion-magic",
                title: "Magia da Conversão: HEIC, EPUB e Mais",
                content: (
                    <>
                        O mundo dos formatos digitais é bagunçado. iPhones usam HEIC, Kindles querem EPUBs, e empresas exigem PDFs.
                        <br /><br />
                        <strong>HEIC para PDF</strong>: Se você está lutando para abrir fotos de iPhone no Windows, nosso <Link href={`/${lang}/guides/heic-to-pdf`} className="text-canada-red hover:underline font-bold">Conversor HEIC</Link> preenche essa lacuna com segurança.
                        <br /><br />
                        <strong>Conversão de eBook</strong>: Precisa ler um PDF em uma tela pequena? Converter <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">PDF para EPUB</Link> permite que o texto se reajuste confortavelmente no seu e-reader.
                    </>
                )
            },
            {
                id: "financial-data",
                title: "Dados Financeiros: PDF para CSV e Excel",
                content: (
                    <>
                        Para contadores e proprietários de pequenas empresas, o maior obstáculo é <strong>extrair dados de extratos bancários</strong>. Digitar transações manualmente é propenso a erros e incrivelmente lento.
                        <br /><br />
                        Nosso <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold text-lg underline decoration-canada-red/30">Guia PDF para CSV</Link> explica como usar nosso motor de extração espacial para transformar extratos bancários PDF bagunçados em dados estruturados para QuickBooks ou Excel.
                    </>
                )
            },
            {
                id: "ocr-search",
                title: "Desbloqueando Texto: O Poder do OCR",
                content: (
                    <>
                        Um PDF digitalizado é muitas vezes apenas um "contêiner para imagens". O computador vê pixels, não palavras.
                        <br /><br />
                        <strong>Reconhecimento Óptico de Caracteres (OCR)</strong> cria uma camada de texto transparente sobre sua digitalização. Usando nossa <Link href={`/${lang}/guides/invoice-ocr`} className="text-canada-red hover:underline font-bold">Ferramenta OCR PDF</Link>, você pode tornar qualquer documento digitalizado pesquisável (Ctrl+F) e copiável.
                    </>
                )
            },
            {
                id: "interactive-pdfs",
                title: "Documentos Interativos: Formulários Preenchíveis",
                content: (
                    <>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h4 className="font-bold text-canada-red mb-2 italic">Dica Pro:</h4>
                            Documentos estáticos são uma relíquia. Se você precisa que um cliente forneça informações, não o faça imprimir e digitalizar.
                        </div>
                        <br /><br />
                        Aprender a <Link href={`/${lang}/guides/make-pdf-fillable`} className="text-canada-red hover:underline font-bold">criar PDFs preenchíveis</Link> transforma um documento plano em uma poderosa ferramenta de coleta de dados com campos de texto e caixas de seleção.
                    </>
                )
            },
            {
                id: "canadian-identity",
                title: "A Filosofia do 'Canadense Educado'",
                content: (
                    <>
                        Por que "pdfcanada.ca"? Em um mundo de gigantes tecnológicos globais, há valor em serviços locais de nicho.
                        <br /><br />
                        Priorizamos <strong>Utilidade sobre Lucro</strong> e <strong>Privacidade como um Direito</strong>. Ao fornecer ferramentas de PDF canadenses gratuitas, visamos apoiar estudantes e pequenas empresas que apenas querem realizar suas tarefas com segurança.
                    </>
                )
            },
            {
                id: "conclusion",
                title: "Conclusão: Empoderando Seu Espaço de Trabalho Digital",
                content: (
                    <>
                        Dominar o PDF é sobre escolher ferramentas que respeitam seu tempo e dados.
                        <br /><br />
                        O poder que costumava exigir uma licença de $500 agora está disponível gratuitamente no seu navegador. Da próxima vez que precisar editar um documento, lembre-se de que a maneira segura está bem aqui, processada localmente na sua própria máquina.
                    </>
                )
            }
        ],

        faqTitle: "Perguntas Frequentes sobre Ferramentas PDF",
        faqs: [
            {
                q: "O que torna o pdfcanada.ca diferente de outras ferramentas PDF?",
                a: (
                    <>
                        Ao contrário dos grandes serviços, usamos processamento 'Local-First'. Seus arquivos nunca são enviados para um servidor; a edição acontece inteiramente na memória do seu navegador. Isso significa processamento mais rápido, total <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline decoration-dashed">privacidade</Link>, e sem limites de tamanho de arquivo.
                    </>
                )
            },
            {
                q: "Existe um limite para o tamanho do arquivo que posso processar?",
                a: "Como o processamento é feito no seu hardware, não impomos limites arbitrários de servidor. Você pode processar arquivos maiores do que a maioria das ferramentas em nuvem permite—tipicamente até a RAM disponível do seu dispositivo."
            },
            {
                q: "Preciso criar uma conta para usar essas ferramentas?",
                a: "Não. Sem conta, sem e-mail, sem login necessário. Apenas visite a ferramenta que você precisa e comece a trabalhar imediatamente. Acreditamos em produtividade sem atrito."
            },
            {
                q: "Posso usar essas ferramentas PDF no meu celular ou tablet?",
                a: "Absolutamente. Todas as nossas ferramentas são totalmente responsivas e funcionam em iOS (iPhone/iPad), celulares e tablets Android. A experiência móvel é otimizada para toque."
            },
            {
                q: "Essas ferramentas são realmente 100% gratuitas?",
                a: "Sim, completamente gratuitas sem taxas ocultas, sem versão 'Pro', sem marcas d'água e sem limites de uso diário. Somos apoiados pela filosofia do 'Canadense Educado' de fornecer valor genuíno."
            },
            {
                q: "Como editar um PDF digitalizado do qual não consigo selecionar texto?",
                a: (
                    <>
                        Use nossa <Link href={`/${lang}/invoice-ocr`} className="text-canada-red hover:underline font-bold">ferramenta OCR (Reconhecimento Óptico de Caracteres)</Link>. Ela analisa as imagens digitalizadas e cria uma camada de texto pesquisável e selecionável sobre o seu documento.
                    </>
                )
            },
            {
                q: "Posso fundir vários PDFs em um único documento?",
                a: (
                    <>
                        Sim, nossa <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-bold">ferramenta Fundir PDF</Link> permite combinar PDFs ilimitados em um único arquivo. Arraste e solte seus arquivos, organize-os na ordem desejada e clique em fundir.
                    </>
                )
            },
            {
                q: "Qual é o melhor formato para converter meu PDF para e-readers?",
                a: (
                    <>
                        Para e-readers como Kindle ou Kobo, <Link href={`/${lang}/pdf-to-epub`} className="text-canada-red hover:underline">converta para o formato EPUB</Link>. O EPUB permite que o texto se reajuste com base no tamanho da tela e preferências de fonte.
                    </>
                )
            },
            {
                q: "Posso proteger meu PDF com senha após a edição?",
                a: "Sim, use nossa ferramenta Proteger PDF para adicionar criptografia por senha ao seu documento. Você pode definir uma senha necessária para abrir o arquivo."
            },
            {
                q: "Como remover uma senha de um PDF que possuo?",
                a: "Use nossa ferramenta Desbloquear PDF. Você precisará saber a senha atual. Uma vez inserida, podemos remover a proteção e salvar uma nova versão desbloqueada."
            }
        ],

        cta: "Pronto para assumir o controle dos seus documentos?",
        ctaBtn: "Explorar Todas as Ferramentas",
        related: "Mais Recursos",

        // At-a-Glance Summary (Portuguese)
        atGlance: {
            title: "Maestria em PDF: Resumo",
            items: [
                { label: "Ferramentas Disponíveis", value: "20+ ferramentas PDF grátis" },
                { label: "Melhor Para", value: "Estudantes, profissionais, pequenas empresas" },
                { label: "Privacidade", value: "Processamento 100% local — sem uploads" },
                { label: "Custo", value: "Grátis para sempre, sem taxas ocultas" },
                { label: "Plataforma", value: "Funciona em qualquer dispositivo com navegador" },
                { label: "Velocidade", value: "Processamento instantâneo (sem espera de upload)" }
            ]
        }
    }
});

export const UltimatePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;
    const qa = translations[lang].ultimateGuide.quickAnswer;

    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": t.h1,
        "description": t.seo.desc,
        "proficiencyLevel": "Beginner to Advanced",
        "about": [
            { "@type": "Thing", "name": "Document Management" },
            { "@type": "Thing", "name": "PDF Conversion" },
            { "@type": "Thing", "name": "Data Privacy" }
        ],
        "datePublished": "2024-01-15",
        "dateModified": "2026-01-14",
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
            "@id": `https://www.pdfcanada.ca${lang === 'en' ? '' : '/' + lang}/guides/ultimate-pdf-guide`
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/ultimate-pdf-guide"
                lang={lang}
                schema={schema}
                faqs={t.faqs}
                quickAnswer={{
                    question: qa.question,
                    answer: qa.answer,
                    steps: qa.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guide Ultime PDF' : lang === 'pt' ? 'Guia Definitivo de PDF' : 'Ultimate PDF Guide', path: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guide Ultime' : lang === 'pt' ? 'Guia Definitivo' : 'Ultimate Guide', href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">

                    {/* At a Glance Summary - NEW */}
                    {'atGlance' in t && t.atGlance && (
                        <div className="bg-gradient-to-br from-canada-red/5 to-canada-red/10 dark:from-canada-red/10 dark:to-canada-red/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-canada-red/20 mb-8 sm:mb-12 md:mb-16">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-widest text-canada-red mb-4 sm:mb-6 flex items-center gap-2">
                                <Zap size={18} className="shrink-0" />
                                {t.atGlance.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                                {t.atGlance.items.map((item: any, idx: number) => (
                                    <div key={idx} className="bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-xl shadow-sm">
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                                        <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Table of Contents */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-blue-100 dark:border-blue-800/30 mb-8 sm:mb-12 md:mb-16">
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center gap-2">
                            <MousePointer2 size={16} /> {lang === 'fr' ? 'Table des matières' : lang === 'pt' ? 'Índice' : 'Table of Contents'}
                        </h3>
                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-6 sm:gap-x-12">
                            {t.sections.map((section: any, idx: number) => (
                                <a
                                    key={section.id}
                                    href={"#" + section.id}
                                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-canada-red dark:hover:text-canada-red transition-all flex items-center gap-2 sm:gap-3 group py-1"
                                >
                                    <span className="text-xs font-mono text-gray-400 group-hover:text-canada-red transition-colors">0{idx + 1}.</span>
                                    <span className="border-b border-transparent group-hover:border-canada-red/30">{section.title}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20 py-4 sm:py-6 md:py-8 border-y border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Shield size={18} className="text-canada-red sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">{lang === 'fr' ? '100% Privé' : lang === 'pt' ? '100% Privado' : '100% Private'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Globe size={18} className="text-canada-red sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">{lang === 'fr' ? 'Traitement Local' : lang === 'pt' ? 'Processamento Local' : 'Local Processing'}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 sm:space-y-16 md:space-y-24">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24 group">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                                    <div className="bg-gray-100 dark:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-canada-red transition-colors">
                                        <span className="text-lg sm:text-xl md:text-2xl font-black text-gray-400 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-24 md:my-32">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 md:mb-12">{t.faqTitle}</h2>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faqs.map((faq: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl sm:rounded-3xl">
                                    <h5 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">{faq.q}</h5>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.cta}</h2>
                        <Link href={`/${lang}`} className="inline-block bg-white text-canada-red px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all">
                            {t.ctaBtn}
                        </Link>
                    </div>

                    <AISnapshot
                        question={qa.question}
                        answer={qa.answer}
                        toolName={qa.tool}
                        steps={qa.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/ultimate-pdf-guide" category="all" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/pdf-editing`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Édition PDF' : (lang === 'pt' ? 'Guia Edição de PDF' : 'PDF Editing Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-security`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Shield size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Sécurité PDF' : (lang === 'pt' ? 'Guia Segurança PDF' : 'PDF Security Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-conversions`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Conversions PDF' : (lang === 'pt' ? 'Guia Conversões PDF' : 'PDF Conversions Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-csv`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers CSV' : (lang === 'pt' ? 'Guia PDF para CSV' : 'PDF to CSV Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />

                </div>
            </PageLayout>
        </div>
    );
};

