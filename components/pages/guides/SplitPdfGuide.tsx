'use client';

import Link from 'next/link';
import React from 'react';
import { Split, Shield, Zap, CheckCircle, Info, ArrowRight, Laptop, Smartphone, Server, Globe, Lock, AlertTriangle } from 'lucide-react';
import { Language, CURRENT_YEAR, translations } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Free PDF Splitter Online | Secure & Private Tool ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `The best free PDF splitter online. Split PDF pages, extract ranges, and separate files locally. No uploads, 100% private. Works on Windows, Mac, and Mobile.`
        },
        h1: `The Ultimate Free PDF Splitter Guide (${CURRENT_YEAR})`,
        subtitle: "How to split PDF pages, extract specific ranges, and separate documents securely without uploading your files.",

        intro: `Are you looking for a **free PDF splitter** that actually keeps your documents private? You've found it. Whether you need to extract a single page from a large contract, separate a 100-page report into individual chapters, or simply break a PDF into smaller chunks for emailing, having a reliable **pdf splitter online** is essential.

Unlike other tools that force you to upload your sensitive data to their servers, **pdfcanada.ca** offers a **pdf splitter software** solution that runs entirely in your browser. This means you get the speed of a desktop application with the convenience of an online tool—all while your data stays safely on your device.

In this mega-guide, we'll cover everything you need to know about splitting PDFs, from choosing the **best free pdf splitter** to advanced techniques for legal and real estate professionals.`,

        // AEO Quick Answer Box - AI-optimized direct answer
        quickAnswer: {
            question: "How do I split a PDF into separate pages?",
            answer: "To split a PDF: 1) Go to pdfcanada.ca/split-pdf, 2) Upload your PDF file, 3) Select pages to extract or choose 'Split All', 4) Click 'Split PDF', 5) Download your files. Processing is instant and 100% local—your files never leave your device.",
            time: "5-15 seconds",
            cost: "Free forever",
            privacy: "100% offline processing"
        },

        // At-a-Glance Summary
        atGlance: {
            title: "PDF Splitting: At a Glance",
            items: [
                { label: "What", value: "Extract specific pages or split PDFs into individual files" },
                { label: "Why", value: "Share specific sections, reduce file size, organize documents" },
                { label: "Time", value: "5-15 seconds for most PDFs" },
                { label: "Cost", value: "Free with no limits, no account required" },
                { label: "Privacy", value: "Local processing—files never uploaded" },
                { label: "Works On", value: "Windows, Mac, iOS, Android, any browser" }
            ]
        },

        // Industry Use Cases for AEO
        industryUseCases: {
            title: "Who Uses PDF Splitters?",
            cases: [
                {
                    industry: "Legal Professionals",
                    icon: "⚖️",
                    useCase: "Extract signature pages from contracts, separate exhibits from case files, share specific clauses with clients",
                    benefit: "Maintain client confidentiality with local processing"
                },
                {
                    industry: "Real Estate Agents",
                    icon: "🏠",
                    useCase: "Extract disclosure pages, separate buyer and seller documents, send signing pages via DocuSign",
                    benefit: "Speed up closings by sharing only relevant pages"
                },
                {
                    industry: "Healthcare",
                    icon: "🏥",
                    useCase: "Separate patient records, extract lab results, organize medical imaging reports",
                    benefit: "HIPAA-compliant local processing protects patient data"
                },
                {
                    industry: "Education",
                    icon: "📚",
                    useCase: "Extract chapters from textbooks, create study guides, separate exam sections",
                    benefit: "Students save on printing by extracting needed pages"
                },
                {
                    industry: "Finance",
                    icon: "💰",
                    useCase: "Extract specific months from statements, separate tax documents, organize invoices",
                    benefit: "Protect sensitive financial data with offline processing"
                }
            ]
        },

        sections: [
            {
                id: "why-split",
                title: "Why You Need a Local PDF Splitter",
                content: `Most people search for a **pdf splitter free** of charge, but they often overlook privacy. When you use a typical **online pdf splitter**, the process usually looks like this:
1. You upload your file to a remote server.
2. The server processes the split.
3. You download the result.

**The Problem:** Your file sits on someone else's server. For legal documents, medical records, or financial statements, this is a major risk.

**The Privacy-First Solution:** Our **free pdf document splitter** uses specialized WebAssembly technology. This allows your browser (Chrome, Safari, Edge) to act as the software. **No upload required.** You get a **pdf page splitter** that is faster, safer, and works even when you're offline.`
            },
            {
                id: "privacy-audit",
                title: "Privacy Audit: Where do your files go?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 not-prose">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Shield className="text-green-500" size={24} />
                            Data Lifecycle Verification
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">1</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Local Loading</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Files are read from your disk into your browser&apos;s dedicated memory sandbox.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">2</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Client-Side Splitting</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Our WebAssembly engine splits the PDF pages locally. <strong>0 bytes are sent to any server.</strong></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Automatic Wipe</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Once you close the tab, the sandbox is cleared. No trace of your document remains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-to",
                title: "How to Use Our Free PDF Splitter Online",
                content: `Using our **pdf file splitter** is incredibly simple. Here is a step-by-step guide to separating your pages:

### Step 1: select Your File
Go to our [Split PDF Tool](/${lang}/split-pdf). Click 'Select PDF' or drag and drop your file. Because we are a **pdf splitter online free** of uploads, large files (100MB+) open instantly.

### Step 2: Choose Your Split Method
You have two powerful options:
*   **Extract Specific Pages:** Great for grabbing just the cover page or a specific clause (e.g., "1, 3, 5-10").
*   **Split into Single Pages:** Ideal for turning a scanned stack of invoices into individual files.

### Step 3: Download
Click 'Split PDF'. Your new files are generated instantly on your device. No waiting for server downloads.`
            },
            {
                id: "comparison",
                title: "Comparison: Online vs. Offline vs. Professional Software",
                content: `Is a **free online pdf splitter** better than paid software? Let's compare.`
            },
            {
                id: "use-cases",
                title: "Industry Workflows",
                content: `### ⚖️ Legal Professionals
Lawyers often need a **pdf splitter software** to break down massive case files (often 500+ pages) into manageable exhibits. Our tool ensures client privilege is maintained since no data leaves the firm's computer.

### 🏠 Real Estate Agents
Agents use our **pdf page splitter** to extract just the signature pages from long purchase agreements to send to clients. Speed is key here—no logins, no watermarks.

### 🏥 Medical & Academic
Researchers and doctors use our **free pdf splitter** to separate patient records or extract specific chapters from medical journals without violating privacy regulations like HIPAA or PIPEDA.`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting & Power Tips",
                content: `**Q: My PDF is password protected.**
A: Most **pdf splitter online** tools fail here. You must remove the password first using our [Unlock PDF](/${lang}/unlock-pdf) tool (if you have the permission) before splitting.

**Q: The file is too big (500MB+).**
A: This is where our local-first **pdf splitter software** shines. Because we don't upload, we can handle massive engineering blueprints or ebooks that would crash a standard server-based converter.`
            },
            {
                id: "os-guides",
                title: "How to Split PDF on Different Devices",
                content: `### Split PDF Windows 10 & 11
While you can use "Print to PDF" to extract pages, it's clunky and often loses quality. Our tool works as a **pdf splitter online** directly in Edge or Chrome, giving you a native-app feel without the installation.

### Split PDF Mac
Preview is a decent **pdf page splitter**, but it can be confusing to re-save groups of pages. Our drag-and-drop interface offers a more intuitive alternative for macOS users.

### Mobile: Split PDF Android & iPhone
Need to split a file on the go? Most mobile apps are ad-heavy. Our **free pdf document splitter** is responsive and works perfectly in mobile Safari and Chrome, allowing you to **separate pdf pages online** right from your phone.`
            }
        ],

        comparisonTable: {
            title: "The Ultimate Splitter Showdown",
            headers: ["Feature", "pdfcanada.ca", "Adobe Acrobat Pro", "Generic Online Tools"],
            rows: [
                ["Cost", "Free", "$20+/month", "Free (usually)"],
                ["Privacy", "100% Local (No Upload)", "Local", "Uploaded to Server ⚠️"],
                ["Speed", "Instant", "Fast", "Slow (Upload/Download)"],
                ["No Watermarks", "✅", "✅", "❌ (Often limited)"],
                ["Works Offline", "✅ (PWA)", "✅", "❌"],
                ["Installation", "No", "Yes (Heavy)", "No"]
            ]
        },

        faq: [
            {
                q: "What is the best free PDF splitter?",
                a: "For privacy and speed, a browser-based local tool like pdfcanada.ca is the best option. It combines the convenience of an online tool with the security of offline software, running entirely in your browser without uploading files."
            },
            {
                q: "Is there a PDF splitter software I can use offline?",
                a: "Yes! Once you load our page, our application is cached in your browser. You can actually disconnect your internet and still use our pdf splitter free of connection issues. It works like desktop software."
            },
            {
                q: "Can I split PDF pages free without watermarks?",
                a: "Absolutely. We do not add any watermarks to your documents. You get clean, professional-quality files every time, completely free with no 'Pro' upsells or hidden limitations."
            },
            {
                q: "How do I separate PDF pages online on my phone?",
                a: "Open pdfcanada.ca/split-pdf on your mobile browser. Select your file, tap the pages you want to extract, and tap split. It's the easiest way to split pdf on Android or iOS without installing any apps."
            },
            {
                q: "Is it safe to use an online PDF splitter?",
                a: "It depends. If the tool uploads your file to a server, there is always a risk. That's why we built a local-first tool. With us, 'Online' just means 'in the browser', not 'on a server'. Your files never leave your device."
            },
            {
                q: "Can I extract specific page ranges like pages 1, 5-10, 15?",
                a: "Yes! Our splitter supports flexible page ranges. You can enter '1, 5-10, 15' to extract those exact pages into a single PDF, or split them into individual files. Perfect for grabbing specific sections from large documents."
            },
            {
                q: "Why won't my password-protected PDF split?",
                a: "Protected PDFs must be unlocked first. Use our Unlock PDF tool to remove the password (you'll need to know the password), then split the document. Some PDFs have restrictions even if they don't ask for a password when opening."
            },
            {
                q: "How do I split a PDF into individual pages?",
                a: "Select 'Split into Single Pages' mode. Our tool will automatically separate every page into its own PDF file. Great for invoices, receipts, or any scanned document stack that needs to be organized."
            },
            {
                q: "What's the maximum file size I can split?",
                a: "Since splitting happens locally in your browser, there's no server-imposed limit. Your limit is your device's RAM. Most computers handle 200MB+ files easily. For very large files (500MB+), close other browser tabs first."
            },
            {
                q: "Will splitting affect the quality of my PDF?",
                a: "No, splitting preserves 100% of the original quality. We don't re-compress or modify images. The extracted pages are byte-for-byte identical to the originals—just in separate files."
            }
        ],

        ctaTitle: "Ready to Split Your PDF?",
        ctaButton: "Split PDF Now",
        ctaSubtext: "No installation. No uploads. 100% Free."
    },
    fr: {
        seo: {
            title: `Diviser PDF Gratuit en Ligne | Outil Sécurisé ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Le meilleur outil pour diviser PDF gratuit en ligne. Extrayez des pages et séparez vos fichiers localement. Sans téléchargement, 100% privé. Windows, Mac et Mobile.`
        },
        h1: `Le Guide Ultime pour Diviser un PDF (${CURRENT_YEAR})`,
        subtitle: "Comment séparer les pages d'un PDF, extraire des plages spécifiques et diviser des documents en toute sécurité sans envoyer vos fichiers.",

        intro: `Vous cherchez un moyen de **diviser un PDF** gratuitement tout en gardant vos documents privés ? Vous l'avez trouvé. Que vous ayez besoin d'extraire une seule page d'un contrat, de séparer un rapport de 100 pages en chapitres, ou simplement de découper un PDF pour l'envoi par courriel, un bon outil de **division PDF** est essentiel.

Contrairement aux autres outils qui vous obligent à télécharger vos données sensibles sur leurs serveurs, **pdfcanada.ca** offre une solution logicielle qui s'exécute entièrement dans votre navigateur. Cela signifie que vous obtenez la rapidité d'une application de bureau avec la commodité d'un outil en ligne — tout en gardant vos données en sécurité sur votre appareil.

Dans ce méga-guide, nous couvrirons tout ce que vous devez savoir, du choix du **meilleur outil de division PDF gratuit** aux techniques avancées pour les professionnels.`,

        sections: [
            {
                id: "why-split",
                title: "Pourquoi un outil de division local est essentiel",
                content: `La plupart des gens cherchent à **diviser PDF gratuit**, mais négligent souvent la confidentialité. Avec un outil classique :
1. Vous téléchargez votre fichier sur un serveur distant.
2. Le serveur traite la division.
3. Vous téléchargez le résultat.

**Le problème :** Votre fichier reste sur le serveur de quelqu'un d'autre. Pour des documents juridiques ou médicaux, c'est un risque majeur.

**La solution :** Notre outil utilise la technologie WebAssembly. Votre navigateur agit comme le logiciel. **Aucun téléchargement requis.** C'est plus rapide, plus sûr et fonctionne même hors ligne.`
            },
            {
                id: "privacy-audit",
                title: "Audit de Confidentialité : Où vont vos fichiers ?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 not-prose">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Shield className="text-green-500" size={24} />
                            Vérification du Cycle de Vie
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">1</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Chargement Local</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Les fichiers sont lus à partir de votre disque dans le bac à sable mémoire dédié de votre navigateur.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">2</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Division Client-Side</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Notre moteur WebAssembly divise les pages localement. <strong>0 octets ne sont envoyés à aucun serveur.</strong></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Effacement Automatique</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Dès la fermeture de l&apos;onglet, tout est effacé. Aucune trace de votre document ne reste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-to",
                title: "Comment utiliser notre outil de division PDF",
                content: `Utiliser notre **séparateur de PDF** est incroyablement simple :

### Étape 1 : Sélectionnez votre fichier
Allez sur notre [Outil de Division PDF](/${lang}/split-pdf). Cliquez ou glissez-déposez votre fichier.

### Étape 2 : Choisissez votre méthode
*   **Extraire des pages spécifiques :** Parfait pour garder juste la couverture ou une clause spécifique.
*   **Diviser en pages uniques :** Idéal pour séparer des factures scannées en vrac.

### Étape 3 : Téléchargez
Cliquez sur 'Diviser'. Vos nouveaux fichiers sont générés instantanément.`
            },
            {
                id: "comparison",
                title: "Comparaison : En ligne vs Logiciel Pro",
                content: `Est-ce qu'un outil gratuit en ligne vaut un logiciel payant ?`
            },
            {
                id: "use-cases",
                title: "Usages Professionnels",
                content: `### ⚖️ Juridique
Les avocats doivent souvent **diviser des fichiers PDF** massifs pour les tribunaux. Notre outil garantit le secret professionnel car aucune donnée ne quitte l'ordinateur.

### 🏠 Immobilier
Les agents utilisent notre outil pour extraire les pages de signature des longs contrats d'achat.

### 🏥 Médical & Académique
Les chercheurs et médecins l'utilisent pour séparer les dossiers patients sans violer les règles de confidentialité.`
            },
            {
                id: "troubleshooting",
                title: "Dépannage & Astuces",
                content: `**Q : Mon PDF est protégé par mot de passe.**
R : Vous devez d'abord retirer le mot de passe avec notre outil [Déverrouiller PDF](/${lang}/unlock-pdf).

**Q : Le fichier est trop gros.**
R : Grâce à notre technologie locale, nous pouvons traiter des plans d'ingénierie massifs sans faire planter le navigateur.`
            },
            {
                id: "os-guides",
                title: "Diviser PDF sur différents appareils",
                content: `### Windows
Oubliez "Imprimer en PDF". Notre outil fonctionne comme une application native directement dans Edge ou Chrome.

### Mac
Aperçu (Preview) est correct, mais notre interface glisser-déposer est souvent plus intuitive pour réorganiser.

### Mobile (Android & iPhone)
La plupart des applis sont remplies de pubs. Notre site est réactif et fonctionne parfaitement sur Safari mobile et Chrome.`
            }
        ],

        comparisonTable: {
            title: "Le Comparatif Ultime",
            headers: ["Fonctionnalité", "pdfcanada.ca", "Adobe Acrobat Pro", "Outils en ligne génériques"],
            rows: [
                ["Coût", "Gratuit", "20$+/mois", "Gratuit (souvent)"],
                ["Confidentialité", "100% Local (Sans envoi)", "Local", "Envoyé sur serveur ⚠️"],
                ["Vitesse", "Instantanée", "Rapide", "Lent (Envoi/Réception)"],
                ["Sans Filigrane", "✅", "✅", "❌ (Souvent limité)"],
                ["Hors ligne", "✅ (PWA)", "✅", "❌"],
                ["Installation", "Non", "Oui (Lourd)", "Non"]
            ]
        },

        faq: [
            {
                q: "Quel est le meilleur outil pour diviser un PDF ?",
                a: "Pour la confidentialité et la vitesse, un outil local comme pdfcanada.ca est la meilleure option. Il combine la commodité d'un outil en ligne avec la sécurité d'un logiciel hors ligne."
            },
            {
                q: "Puis-je l'utiliser hors ligne ?",
                a: "Oui ! Une fois la page chargée, notre application est mise en cache dans votre navigateur et fonctionne sans connexion internet. C'est comme un logiciel de bureau."
            },
            {
                q: "Est-ce gratuit et sans filigrane ?",
                a: "Absolument. Nous n'ajoutons aucun filigrane à vos documents. Vous obtenez des fichiers de qualité professionnelle, complètement gratuits sans limitations cachées."
            },
            {
                q: "Comment diviser un PDF sur téléphone ?",
                a: "Ouvrez pdfcanada.ca/split-pdf sur votre navigateur mobile. Sélectionnez votre fichier, touchez les pages à extraire, et touchez diviser. C'est la méthode la plus simple sur Android et iOS."
            },
            {
                q: "Puis-je extraire des plages de pages spécifiques ?",
                a: "Oui ! Vous pouvez entrer '1, 5-10, 15' pour extraire ces pages exactes dans un seul PDF, ou les diviser en fichiers individuels. Parfait pour récupérer des sections spécifiques de longs documents."
            },
            {
                q: "Pourquoi mon PDF protégé ne se divise pas ?",
                a: "Les PDF protégés doivent d'abord être déverrouillés. Utilisez notre outil Déverrouiller PDF (vous devez connaître le mot de passe), puis divisez le document."
            },
            {
                q: "Comment diviser un PDF en pages individuelles ?",
                a: "Sélectionnez le mode 'Diviser en pages uniques'. Notre outil séparera automatiquement chaque page en son propre fichier PDF. Idéal pour les factures scannées."
            },
            {
                q: "Quelle est la taille maximale de fichier ?",
                a: "Puisque la division se fait localement, il n'y a pas de limite serveur. Votre limite est la RAM de votre appareil. La plupart des ordinateurs gèrent facilement des fichiers de 200 Mo+."
            },
            {
                q: "La division affecte-t-elle la qualité ?",
                a: "Non, la division préserve 100% de la qualité originale. Nous ne recompressons pas les images. Les pages extraites sont identiques aux originales."
            },
            {
                q: "Est-ce sécuritaire d'utiliser un outil en ligne ?",
                a: "Avec nous, 'en ligne' signifie 'dans le navigateur', pas 'sur un serveur'. Vos fichiers ne quittent jamais votre appareil, garantissant une confidentialité totale."
            }
        ],

        ctaTitle: "Prêt à diviser votre PDF ?",
        ctaButton: "Diviser PDF Maintenant",
        ctaSubtext: "Sans installation. Sans téléchargement. 100% Gratuit."
    },
    pt: {
        seo: {
            title: `Dividir PDF Grátis Online | Ferramenta Segura ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `O melhor divisor de PDF grátis online. Separe páginas, extraia intervalos e divida arquivos localmente. Sem uploads, 100% privado. Funciona no Windows, Mac e Mobile.`
        },
        h1: `O Guia Definitivo para Dividir PDF (${CURRENT_YEAR})`,
        subtitle: "Como separar páginas de PDF, extrair intervalos específicos e dividir documentos com segurança sem fazer upload.",

        intro: `Você está procurando um **separador de PDF grátis** que realmente mantém seus documentos privados? Você encontrou. Seja para extrair uma única página de um contrato, separar um relatório de 100 páginas em capítulos individuais ou apenas dividir um PDF para e-mail, ter um **divisor de PDF online** confiável é essencial.

Ao contrário de outras ferramentas que forçam você a fazer upload de seus dados sensíveis para os servidores deles, **pdfcanada.ca** oferece uma solução de **software de divisão de PDF** que roda inteiramente no seu navegador. Isso significa que você tem a velocidade de um aplicativo de desktop com a conveniência de uma ferramenta online—tudo enquanto seus dados ficam seguros no seu dispositivo.

Neste mega-guia, cobriremos tudo o que você precisa saber sobre dividir PDFs, desde escolher o **melhor separador de PDF grátis** até técnicas avançadas para profissionais.`,

        quickAnswer: {
            question: "Como divido um PDF em páginas separadas?",
            answer: "Para dividir um PDF: 1) Vá para pdfcanada.ca/pt/split-pdf, 2) Envie seu arquivo PDF, 3) Selecione as páginas para extrair ou escolha 'Dividir Tudo', 4) Clique em 'Dividir PDF', 5) Baixe seus arquivos. O processamento é instantâneo e 100% local—seus arquivos nunca saem do seu dispositivo.",
            time: "5-15 segundos",
            cost: "Grátis para sempre",
            privacy: "Processamento 100% offline",
            tool: "Dividir PDF",
            steps: [
                { name: "Selecionar PDF", text: "Escolha o arquivo PDF do seu dispositivo." },
                { name: "Escolher Intervalo", text: "Selecione páginas específicas ou extraia todas individualmente." },
                { name: "Baixar", text: "Salve seus arquivos PDF separados instantaneamente." }
            ]
        },

        sections: [
            {
                id: "why-split",
                title: "Por que você precisa de um Divisor de PDF Local",
                content: `A maioria das pessoas procura por um **divisor de pdf grátis**, mas muitas vezes ignoram a privacidade. Quando você usa um **divisor de pdf online** típico, o processo geralmente é assim:
1. Você faz upload do seu arquivo para um servidor remoto.
2. O servidor processa a divisão.
3. Você baixa o resultado.

**O Problema:** Seu arquivo fica no servidor de outra pessoa. Para documentos legais, registros médicos ou extratos financeiros, isso é um grande risco.

**A Solução Privacy-First:** Nosso **separador de documentos pdf grátis** usa tecnologia WebAssembly especializada. Isso permite que seu navegador (Chrome, Safari, Edge) aja como o software. **Nenhum upload necessário.** Você obtém um **divisor de páginas pdf** que é mais rápido, mais seguro e funciona até mesmo offline.`
            },
            {
                id: "privacy-audit",
                title: "Auditoria de Privacidade: Para onde vão seus arquivos?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 not-prose">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Shield className="text-green-500" size={24} />
                            Verificação do Ciclo de Vida de Dados
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">1</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Carregamento Local</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Os arquivos são lidos do seu disco para a memória segura do navegador.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">2</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Divisão Cliente-Side</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Nosso motor WebAssembly divide as páginas localmente. <strong>0 bytes são enviados para qualquer servidor.</strong></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Limpeza Automática</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Assim que você fecha a aba, a sandbox é limpa. Nenhum traço do seu documento permanece.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-to",
                title: "Como Usar Nosso Divisor de PDF Grátis Online",
                content: `Usar nosso **separador de arquivos pdf** é incrivelmente simples:

### Passo 1: Selecione seu Arquivo
Vá para nossa [Ferramenta de Dividir PDF](/${lang}/split-pdf). Clique ou arraste e solte seu arquivo.

### Passo 2: Escolha seu Método
*   **Extrair Páginas Específicas:** Ótimo para pegar apenas a capa ou uma cláusula específica (ex: "1, 3, 5-10").
*   **Dividir em Páginas Únicas:** Ideal para separar uma pilha de faturas digitalizadas.

### Passo 3: Baixar
Clique em 'Dividir PDF'. Seus novos arquivos são gerados instantaneamente.`
            },
            {
                id: "comparison",
                title: "Comparação: Online vs. Offline vs. Software Profissional",
                content: `Um **divisor de pdf online grátis** é melhor que um software pago? Vamos comparar.`
            },
            {
                id: "use-cases",
                title: "Fluxos de Trabalho da Indústria",
                content: `### ⚖️ Profissionais Jurídicos
Advogados frequentemente precisam de um **software divisor de pdf** para separar arquivos de casos massivos. Nosso ferramenta garante que o sigilo do cliente seja mantido.

### 🏠 Agentes Imobiliários
Agentes usam nosso **separador de páginas pdf** para extrair apenas as páginas de assinatura de longos contratos de compra.

### 🏥 Médico e Acadêmico
Pesquisadores e médicos usam nosso **divisor de pdf grátis** para separar registros de pacientes sem violar regulamentos de privacidade.`
            },
            {
                id: "troubleshooting",
                title: "Solução de Problemas e Dicas",
                content: `**P: Meu PDF é protegido por senha.**
R: A maioria dos **divisores de pdf online** falha aqui. Você deve remover a senha primeiro usando nossa ferramenta [Desbloquear PDF](/${lang}/unlock-pdf).

**P: O arquivo é muito grande (500MB+).**
R: É aqui que nosso **software divisor de pdf** local brilha. Porque não fazemos upload, podemos lidar com plantas de engenharia massivas.`
            },
            {
                id: "os-guides",
                title: "Como Dividir PDF em Diferentes Dispositivos",
                content: `### Windows
Esqueça "Imprimir para PDF". Nossa ferramenta funciona como um aplicativo nativo diretamente no Edge ou Chrome.

### Mac
O Preview é decente, mas nossa interface de arrastar e soltar oferece uma alternativa mais intuitiva.

### Mobile (Android & iPhone)
Precisa dividir um arquivo em movimento? Nosso **separador de documentos pdf grátis** é responsivo e funciona perfeitamente no Safari móvel e Chrome.`
            }
        ],

        comparisonTable: {
            title: "O Confronto Final de Separadores",
            headers: ["Recurso", "pdfcanada.ca", "Adobe Acrobat Pro", "Ferramentas Online Genéricas"],
            rows: [
                ["Custo", "Grátis", "$20+/mês", "Grátis (geralmente)"],
                ["Privacidade", "100% Local (Sem Upload)", "Local", "Enviado para Servidor ⚠️"],
                ["Velocidade", "Instantâneo", "Rápido", "Lento (Envio/Recebimento)"],
                ["Sem Marca d'água", "✅", "✅", "❌ (Frequentemente limitado)"],
                ["Funciona Offline", "✅ (PWA)", "✅", "❌"],
                ["Instalação", "Não", "Sim (Pesado)", "Não"]
            ]
        },

        faq: [
            {
                q: "Qual é o melhor divisor de PDF grátis?",
                a: "Para privacidade e velocidade, uma ferramenta local baseada em navegador como pdfcanada.ca é a melhor opção. Combina a conveniência online com a segurança offline."
            },
            {
                q: "Posso usar offline?",
                a: "Sim! Uma vez que a página carrega, nossa aplicação é armazenada em cache no seu navegador. Você pode desconectar a internet e continuar usando."
            },
            {
                q: "É grátis e sem marca d'água?",
                a: "Absolutamente. Não adicionamos marcas d'água aos seus documentos. Você obtém arquivos de qualidade profissional, totalmente grátis."
            },
            {
                q: "Como divido um PDF no celular?",
                a: "Abra pdfcanada.ca/pt/split-pdf no seu navegador móvel. Selecione seu arquivo, toque nas páginas para extrair e toque em dividir."
            },
            {
                q: "Posso extrair intervalos de páginas específicos?",
                a: "Sim! Você pode digitar '1, 5-10, 15' para extrair essas páginas exatas em um único PDF ou dividi-las individualmente."
            },
            {
                q: "Por que meu PDF protegido não divide?",
                a: "PDFs protegidos devem ser desbloqueados primeiro. Use nossa ferramenta Desbloquear PDF (você precisará da senha) antes de dividir."
            },
            {
                q: "Como divido um PDF em páginas individuais?",
                a: "Selecione o modo 'Dividir em Páginas Únicas'. Nossa ferramenta separará automaticamente cada página em seu próprio arquivo PDF."
            },
            {
                q: "Qual é o tamanho máximo do arquivo?",
                a: "Como a divisão acontece localmente, não há limite de servidor. Seu limite é a RAM do seu dispositivo. A maioria lida facilmente com 200MB+."
            },
            {
                q: "A divisão afeta a qualidade?",
                a: "Não, preserva 100% da qualidade original. Não re-comprimimos imagens. As páginas extraídas são idênticas às originais."
            },
            {
                q: "É seguro usar um divisor de PDF online?",
                a: "Depende. Se a ferramenta faz upload, há risco. Conosco, 'Online' significa 'no navegador'. Seus arquivos nunca saem do seu dispositivo."
            }
        ],

        ctaTitle: "Pronto para Dividir seu PDF?",
        ctaButton: "Dividir PDF Agora",
        ctaSubtext: "Sem instalação. Sem upload. 100% Grátis."
    }
});

const LABELS = {
    fr: {
        privacy: { title: "100% Privé", desc: "Aucun fichier n'est envoyé sur nos serveurs." },
        instant: { title: "Instantané", desc: "Traitement local ultra-rapide." },
        anywhere: { title: "Partout", desc: "Windows, Mac, iPhone & Android." },
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            split: 'Diviser PDF'
        }
    },
    pt: {
        privacy: { title: "100% Privado", desc: "Nenhum arquivo é enviado para nossos servidores." },
        instant: { title: "Instantâneo", desc: "Processamento local ultra-rápido." },
        anywhere: { title: "Em Qualquer Lugar", desc: "Windows, Mac, iPhone e Android." },
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            split: 'Dividir PDF'
        }
    },
    en: {
        privacy: { title: "100% Private", desc: "No files are ever sent to our servers." },
        instant: { title: "Instant", desc: "Blazing fast local processing." },
        anywhere: { title: "Anywhere", desc: "Works on Windows, Mac, iPhone & Android." },
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            split: 'Split PDF'
        }
    }
};

export const SplitPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;
    const qa = translations[lang].features.split.quickAnswer;
    const labels = LABELS[lang as keyof typeof LABELS] || LABELS.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Select PDF", "text": "Choose the PDF file you want to split from your device." },
            { "@type": "HowToStep", "position": 2, "name": "Choose Range", "text": "Select specific pages or extract all pages individually." },
            { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Save your separated PDF files instantly." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/split-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: qa.question,
                    answer: qa.answer,
                    tool: qa.tool,
                    steps: qa.steps
                }}
                breadcrumbs={[
                    { name: labels.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: labels.breadcrumbs.guides, path: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: labels.breadcrumbs.split, path: lang === 'en' ? '/guides/split-pdf' : `/${lang}/guides/split-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Split size={32} />}
                breadcrumbs={[
                    { name: labels.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: labels.breadcrumbs.guides, href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: labels.breadcrumbs.split, href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="split-pdf" lang={lang} />
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Features Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Lock className="text-canada-red mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{labels.privacy.title}</h3>
                            <p className="text-sm sm:text-base text-gray-500">{labels.privacy.desc}</p>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Zap className="text-canada-red mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{labels.instant.title}</h3>
                            <p className="text-sm sm:text-base text-gray-500">{labels.instant.desc}</p>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm sm:col-span-2 md:col-span-1">
                            <Globe className="text-canada-red mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{labels.anywhere.title}</h3>
                            <p className="text-sm sm:text-base text-gray-500">{labels.anywhere.desc}</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? <MarkdownContent content={section.content} /> : section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <section className="my-12 sm:my-18 md:my-24 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-800 shadow-lg">
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8 border-b border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center">{t.comparisonTable.title}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white dark:bg-black text-sm sm:text-base">
                                <thead>
                                    <tr>
                                        {t.comparisonTable.headers.map((header: string, i: number) => (
                                            <th key={i} className={`p-3 sm:p-4 md:p-6 font-bold text-sm sm:text-base md:text-lg border-b border-gray-100 dark:border-gray-800 ${i === 1 ? 'bg-canada-red/5 text-canada-red' : ''}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.comparisonTable.rows.map((row: string[], i: number) => (
                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                            {row.map((cell: string, j: number) => (
                                                <td key={j} className={`p-3 sm:p-4 md:p-6 border-b border-gray-100 dark:border-gray-800 text-sm sm:text-base ${j === 1 ? 'font-bold bg-canada-red/5' : 'text-gray-600 dark:text-gray-400'}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                            <Info className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                        </div>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">
                                        {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/split-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={qa.question}
                        answer={qa.answer}
                        toolName={qa.tool}
                        steps={qa.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/split-pdf" category="organize" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
