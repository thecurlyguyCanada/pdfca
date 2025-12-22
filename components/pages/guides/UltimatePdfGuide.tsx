import React from 'react';
import { BookOpen, Shield, Zap, Lock, Globe, CheckCircle, ArrowRight, FileText, Trash2, RotateCw, Image, Search, MousePointer2, Settings, Users, Cpu, Accessibility, Globe2, Heart, PenTool, Mail } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "Ultimate 2026 Guide to PDF Tools | Master Your Documents | pdfcanada.ca",
            desc: "Master PDF management with our definitive 2026 guide. Learn how to edit, merge, and convert PDFs securely using local-first tools. No uploads, 100% private."
        },
        h1: "The Ultimate Guide to Modern PDF Management (2026 Edition)",
        subtitle: "A comprehensive deep-dive into editing, converting, and securing your PDF documents without expensive software.",

        sections: [
            {
                id: "intro",
                title: "Introduction: Why PDFs Still Rule the World",
                content: (
                    <>
                        In the rapidly evolving landscape of digital communication, the Portable Document Format (PDF) remains an unshakeable cornerstone. Created by Adobe in the early 1990s, the PDF was designed to solve a single, critical problem: how to share documents that look exactly the same on every device.
                        <br /><br />
                        Today, billions of PDFs are created every year. However, while the format has remained stable, our requirements have grown. We need to <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline decoration-dashed">delete pages</button>, sign contracts, and convert formats.
                        <br /><br />
                        This guide serves as a beacon for anyone looking to navigate these tasks without falling into the "subscription trap." We'll explore how modern technology allows for <strong>free PDF tools online</strong> that are faster and more secure than their desktop ancestors.
                    </>
                )
            },
            {
                id: "privacy-revolution",
                title: "The Privacy Revolution: Local-First Processing",
                content: (
                    <>
                        For years, using an "online PDF editor" meant uploading your private files to a stranger's server. This created a massive vulnerability for sensitive documents like tax filings or medical records.
                        <br /><br />
                        <strong>pdfcanada.ca</strong> is built on a "Local-First" philosophy. We use WebAssembly to run the PDF engine <em>inside your browser</em>.
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
                        Our <button onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Delete PDF Pages Tool</button> allows you to see the entire document structure at a glance. You can click to select and remove pages instantly.
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
                        Using a dedicated <button onClick={() => onNavigate('GUIDE_ROTATE', '/guides/rotate-pdf')} className="text-canada-red hover:underline font-bold">Rotate PDF Tool</button> fixes this permanently. This updates the file's metadata, ensuring the recipient sees exactly what you see.
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
                        <strong>HEIC to PDF</strong>: If you're struggling to open iPhone photos on Windows, our <button onClick={() => onNavigate('GUIDE_HEIC_TO_PDF', '/guides/heic-to-pdf')} className="text-canada-red hover:underline font-bold">HEIC Converter</button> bridges that gap securely.
                        <br /><br />
                        <strong>eBook Conversion</strong>: Need to read a PDF on a small screen? Converting <button onClick={() => onNavigate('TOOL_PAGE', '/pdf-to-epub')} className="text-canada-red hover:underline">PDF to EPUB</button> allows the text to reflow comfortably on your e-reader.
                    </>
                )
            },
            {
                id: "ocr-search",
                title: "Unlocking Text: The Power of OCR",
                content: (
                    <>
                        A scanned PDF is often just a "container for images." The computer sees pixels, not words.
                        <br /><br />
                        <strong>Optical Character Recognition (OCR)</strong> creates a transparent text layer over your scan. By using our <button onClick={() => onNavigate('GUIDE_OCR', '/guides/ocr-pdf')} className="text-canada-red hover:underline font-bold">OCR PDF Tool</button>, you can make any scanned document searchable (Ctrl+F) and copy-pasteable.
                    </>
                )
            },
            {
                id: "interactive-pdfs",
                title: "Interactive Documents: Fillable Forms",
                content: (
                    <>
                        Static documents are a relic. If you need a client to provide info, don't make them print and scan.
                        <br /><br />
                        Learning to <button onClick={() => onNavigate('GUIDE_FILLABLE', '/guides/make-pdf-fillable')} className="text-canada-red hover:underline font-bold">make PDFs fillable</button> transforms a flat document into a powerful data-gathering tool with text fields and checkboxes.
                    </>
                )
            },
            {
                id: "canadian-identity",
                title: "The 'Polite Canadian' Philosophy",
                content: (
                    <>
                        Why "pdfcanada.ca"? In a world of global tech giants, there is value in local, niche services.
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
                q: "What makes pdfcanada.ca different?",
                a: "Unlike major services, we use 'Local-First' processing. Your files never upload to a server; editing happens entirely in your browser's memory."
            },
            {
                q: "Is there a limit to file size?",
                a: "Since processing is done on your hardware, we don't enforce arbitrary server limits. You can process larger files than most cloud tools allow."
            }
        ],

        cta: "Ready to take control of your documents?",
        ctaBtn: "Explore All Tools",
        related: "More Resources"
    },
    fr: {
        seo: {
            title: "Guide Ultime 2026 des Outils PDF | Maîtrisez vos Documents | pdfcanada.ca",
            desc: "Maîtrisez la gestion des PDF avec notre guide définitif 2026. Apprenez à éditer, fusionner et convertir vos PDF en toute sécurité sans jamais les télécharger."
        },
        h1: "Le Guide Ultime de la Gestion Moderne des PDF (Édition 2026)",
        subtitle: "Un plongeon complet dans l'édition, la conversion et la sécurisation de vos documents PDF sans logiciel coûteux.",

        sections: [
            {
                id: "intro",
                title: "Introduction : Pourquoi le PDF domine toujours le monde",
                content: (
                    <>
                        Dans le paysage numérique d'aujourd'hui, le format PDF reste une pierre angulaire inébranlable. Créé par Adobe au début des années 90, le PDF a été conçu pour résoudre un problème critique : comment partager des documents qui apparaissent exactement de la même manière sur n'importe quel appareil.
                        <br /><br />
                        Aujourd'hui, des milliards de PDF sont créés chaque année. Cependant, nos exigences ont grandi. Nous devons <button onClick={() => onNavigate('GUIDE_DELETE_PAGES', '/guides/delete-pdf-pages')} className="text-canada-red hover:underline decoration-dashed">supprimer des pages</button>, signer des contrats et convertir des formats.
                        <br /><br />
                        Ce guide sert de phare à quiconque cherche à naviguer dans ces tâches sans tomber dans le "piège de l'abonnement". Nous explorerons comment la technologie moderne permet des <strong>outils PDF gratuits en ligne</strong> qui sont plus rapides et plus sécurisés que leurs ancêtres de bureau.
                    </>
                )
            },
            {
                id: "privacy-revolution",
                title: "La Révolution de la Confidentialité : Traitement Local",
                content: (
                    <>
                        Pendant des années, utiliser un "éditeur PDF en ligne" signifiait télécharger vos fichiers privés sur le serveur d'un inconnu. Cela créait une vulnérabilité massive pour des documents sensibles comme les déclarations fiscales ou les dossiers médicaux.
                        <br /><br />
                        <strong>pdfcanada.ca</strong> est construit sur une philosophie "Local-First". Nous utilisons WebAssembly pour faire tourner le moteur PDF <em>à l'intérieur de votre navigateur</em>.
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
                        Notre <button onClick={() => onNavigate('TOOL_PAGE', '/delete-pdf-pages')} className="text-canada-red hover:underline font-bold">Outil de Suppression de Pages</button> vous permet de voir toute la structure du document d'un coup d'œil. Vous pouvez cliquer pour sélectionner et supprimer des pages instantanément.
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
                        Utiliser un <button onClick={() => onNavigate('GUIDE_ROTATE', '/guides/rotate-pdf')} className="text-canada-red hover:underline font-bold">Outil de Rotation PDF</button> dédié corrige cela définitivement. Cela met à jour les métadonnées du fichier, garantissant que le destinataire voit exactement ce que vous voyez.
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
                        <strong>HEIC vers PDF</strong> : Si vous avez du mal à ouvrir des photos iPhone sur Windows, notre <button onClick={() => onNavigate('GUIDE_HEIC_TO_PDF', '/guides/heic-to-pdf')} className="text-canada-red hover:underline font-bold">Convertisseur HEIC</button> comble cette lacune en toute sécurité.
                        <br /><br />
                        <strong>Conversion eBook</strong> : Besoin de lire un PDF sur un petit écran ? Convertir <button onClick={() => onNavigate('TOOL_PAGE', '/pdf-to-epub')} className="text-canada-red hover:underline">PDF en EPUB</button> permet au texte de se redistribuer confortablement sur votre liseuse.
                    </>
                )
            },
            {
                id: "ocr-search",
                title: "Débloquer le Texte : La Puissance de l'OCR",
                content: (
                    <>
                        Un PDF scanné est souvent juste un "conteneur d'images". L'ordinateur voit des pixels, pas des mots.
                        <br /><br />
                        <strong>La Reconnaissance Optique de Caractères (OCR)</strong> crée une couche de texte transparente sur votre scan. En utilisant notre <button onClick={() => onNavigate('GUIDE_OCR', '/guides/ocr-pdf')} className="text-canada-red hover:underline font-bold">Outil OCR PDF</button>, vous pouvez rendre n'importe quel document scanné consultable (Ctrl+F) et copiable.
                    </>
                )
            },
            {
                id: "interactive-pdfs",
                title: "Documents Interactifs : Formulaires Remplissables",
                content: (
                    <>
                        Les documents statiques sont une relique. Si vous avez besoin qu'un client fournisse des infos, ne les faites pas imprimer et scanner.
                        <br /><br />
                        Apprendre à <button onClick={() => onNavigate('GUIDE_FILLABLE', '/guides/make-pdf-fillable')} className="text-canada-red hover:underline font-bold">créer des PDF remplissables</button> transforme un document plat en un puissant outil de collecte de données avec champs de texte et cases à cocher.
                    </>
                )
            },
            {
                id: "canadian-identity",
                title: "La Philosophie du 'Canadien Poli'",
                content: (
                    <>
                        Pourquoi "pdfcanada.ca" ? Dans un monde de géants technologiques mondiaux, il y a de la valeur dans les services locaux de niche.
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
                q: "Qu'est-ce qui rend pdfcanada.ca différent ?",
                a: "Contrairement aux services majeurs, nous utilisons un traitement 'Local-First'. Vos fichiers ne sont jamais téléchargés sur un serveur ; l'édition se fait entièrement dans la mémoire de votre navigateur."
            },
            {
                q: "Y a-t-il une limite de taille de fichier ?",
                a: "Puisque le traitement est effectué sur votre matériel, nous n'imposons pas de limites arbitraires de serveur. Vous pouvez traiter des fichiers plus volumineux que la plupart des outils cloud ne le permettent."
            }
        ],

        cta: "Prêt à prendre le contrôle de vos documents ?",
        ctaBtn: "Voir tous les outils",
        related: "Plus de ressources"
    }
});

export const UltimatePdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const guideContent = getGuideContent(onNavigate);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "datePublished": "2024-01-15",
        "dateModified": "2026-01-01",
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca",
            "url": "https://pdfcanada.ca"
        },
        "publisher": {
            "@type": "Organization",
            "name": "pdfcanada.ca",
            "logo": {
                "@type": "ImageObject",
                "url": "https://pdfcanada.ca/android-chrome-512x512.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://pdfcanada.ca${lang === 'fr' ? '/fr' : ''}/guides/ultimate-pdf-guide`
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
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: 'Home', onClick: () => onNavigate('HOME') },
                    { name: 'Ultimate Guide', onClick: () => { } }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">

                    {/* Table of Contents */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/30 mb-16">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                            <MousePointer2 size={16} /> Table of Contents
                        </h3>
                        <nav className="grid md:grid-cols-2 gap-y-3 gap-x-12">
                            {t.sections.map((section: any, idx: number) => (
                                <a
                                    key={section.id}
                                    href={"#" + section.id}
                                    className="text-gray-600 dark:text-gray-400 hover:text-canada-red dark:hover:text-canada-red transition-all flex items-center gap-3 group"
                                >
                                    <span className="text-xs font-mono text-gray-400 group-hover:text-canada-red transition-colors">0{idx + 1}.</span>
                                    <span className="border-b border-transparent group-hover:border-canada-red/30">{section.title}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mb-20 py-8 border-y border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Shield size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">100% Private</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Globe size={20} className="text-canada-red" />
                            <span className="text-sm font-medium">Local Processing</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-24">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24 group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-canada-red transition-colors">
                                        <span className="text-2xl font-black text-gray-400 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-32">
                        <h2 className="text-4xl font-black mb-12">{t.faqTitle}</h2>
                        <div className="grid gap-6">
                            {t.faqs.map((faq: any, i: number) => (
                                <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                                    <h5 className="text-xl font-bold mb-4">{faq.q}</h5>
                                    <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Guides */}
                    <div className="mt-32 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">{t.related}</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: 'Delete PDF Pages', path: '/guides/delete-pdf-pages', icon: Trash2, view: 'GUIDE_DELETE_PAGES' },
                                { name: 'Rotate PDF Guide', path: '/guides/rotate-pdf', icon: RotateCw, view: 'GUIDE_ROTATE' },
                                { name: 'HEIC to PDF Transfer', path: '/guides/heic-to-pdf', icon: Image, view: 'GUIDE_HEIC_TO_PDF' },
                                { name: 'OCR & Text Extraction', path: '/guides/ocr-pdf', icon: Search, view: 'GUIDE_OCR' },
                                { name: 'Fillable Form Creation', path: '/guides/make-pdf-fillable', icon: PenTool, view: 'GUIDE_FILLABLE' },
                                { name: 'Organize & Reorder', path: '/guides/organize-pdf', icon: MousePointer2, view: 'GUIDE_ORGANIZE' },
                                { name: 'Save Email as PDF', path: '/guides/email-to-pdf', icon: Mail, view: 'GUIDE_EMAIL_TO_PDF' },
                                { name: 'Convert Comics to PDF', path: '/guides/cbr-to-pdf', icon: BookOpen, view: 'GUIDE_CBR_TO_PDF' },
                                { name: 'Insert Picture in PDF', path: '/guides/insert-picture-in-pdf', icon: Image, view: 'GUIDE_INSERT_PICTURE' }
                            ].map((guide: any, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => onNavigate(guide.view, guide.path)}
                                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-transparent hover:border-canada-red hover:bg-white dark:hover:bg-gray-900 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <guide.icon className="text-canada-red" size={20} />
                                        <span className="font-bold text-gray-900 dark:text-white">{guide.name}</span>
                                    </div>
                                    <ArrowRight className="text-gray-300 group-hover:text-canada-red group-hover:translate-x-1 transition-all" size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 bg-canada-red p-12 rounded-[3rem] text-center text-white">
                        <h2 className="text-4xl font-black mb-8">{t.cta}</h2>
                        <button onClick={() => onNavigate('HOME')} className="bg-white text-canada-red px-12 py-4 rounded-full font-black text-xl">
                            {t.ctaBtn}
                        </button>
                    </div>

                </div>
            </PageLayout>
        </div>
    );
};
