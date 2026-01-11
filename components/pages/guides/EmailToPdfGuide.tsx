'use client';

import Link from 'next/link';
import React from 'react';
import { Mail, CheckCircle, Shield, Zap, ArrowRight, Printer, Smartphone, Monitor, FileCheck, AlertTriangle, Scale, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { AISnapshot } from '../../AISnapshot';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `How to Save Email as PDF | Outlook, Gmail, iPhone & Android Guide ${CURRENT_YEAR}`,
            desc: `The ultimate ${CURRENT_YEAR} guide to saving emails as PDF. Covers New Outlook, Gmail, Apple Mail, iPhone, and Android. Includes legal admissibility tips and batch processing hacks.`
        },
        h1: `How to Save Email as PDF: The Ultimate ${CURRENT_YEAR} Mega-Guide`,
        subtitle: "A comprehensive technical guide to archiving correspondence on any device.",
        intro: (
            <>
                Saving an email as a PDF is a critical skill for legal professionals, administrative assistants, and anyone who needs a permanent record of digital correspondence. Unlike screenshots, a <strong>PDF (Portable Document Format)</strong> preserves the metadata, timestamps, hyperlinks, and vector text of the original message, making it the industry standard for archiving.
                <br /><br />
                Whether you are using the <strong>New Outlook for Windows</strong>, <strong>Gmail on Android</strong>, or <strong>Apple Mail on macOS</strong>, this guide covers every possible method. We also dive deep into <strong>legal admissibility</strong>, <strong>PDF/A standards</strong>, and <strong>batch processing workflows</strong>.
            </>
        ),
        sections: [
            {
                id: "gmail",
                title: "Method 1: Gmail (Desktop & Web)",
                content: (
                    <>
                        <p className="mb-4">
                            Gmail's "Print to PDF" functionality is robust but hidden behind a specific icon.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Open the specific email</strong> you want to convert. Do not just select it from the inbox list.</li>
                            <li className="pl-2"><strong>Find the &quot;More&quot; icon</strong>: Click the three vertical dots (⋮) located in the <em>top-right corner of the email container</em>. <span className="text-red-500 font-bold">Warning:</span> Do not click the browser's print button; this will print the entire interface including sidebars.</li>
                            <li className="pl-2">Select <strong>Print</strong> from the dropdown menu. A new window or tab will open with a clean view of the conversation.</li>
                            <li className="pl-2">In the print dialog destination, select <strong>&quot;Save as PDF&quot;</strong> (Chrome/Edge) or <strong>&quot;Microsoft Print to PDF&quot;</strong> (Windows).</li>
                            <li className="pl-2"><strong>Click Save</strong> and choose your local directory.</li>
                        </ol>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                            <strong>Key Tip for Threads:</strong> If you want to save the entire conversation history, ensure you click the print icon for the <em>conversation</em> (top right) rather than an individual message.
                        </div>
                    </>
                )
            },
            {
                id: "new-outlook",
                title: "Method 2: The \"New Outlook\" for Windows",
                content: (
                    <>
                        <p className="mb-4">
                            Microsoft's "New Outlook" (2024+) has changed the UI significantly. The old "File &gt; Print" menu is gone.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Open the email in the reading pane.</li>
                            <li className="pl-2">Click the <strong>three horizontal dots (...)</strong> in the top-right corner of the message header (next to the Reply/Forward buttons).</li>
                            <li className="pl-2">Select <strong>Print</strong>. A preview page will appear.</li>
                            <li className="pl-2">Click the <strong>Print</strong> button at the top of this preview.</li>
                            <li className="pl-2">In the system dialog, set the Printer to <strong>&quot;Microsoft Print to PDF&quot;</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "classic-outlook",
                title: "Method 3: Classic Outlook (Desktop)",
                content: (
                    <>
                        <p className="mb-4">
                            For enterprise users on Classic Outlook (Office 365 / 2019 / 2016):
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Select the email.</li>
                            <li className="pl-2">Go to <strong>File &gt; Print</strong>.</li>
                            <li className="pl-2">Under Printer, choose <strong>Microsoft Print to PDF</strong>.</li>
                            <li className="pl-2">Click <strong>Print Options</strong> if you need to include attachments (Note: This physically prints attachments; it often fails to merge them into the PDF see our FAQ).</li>
                        </ol>
                    </>
                )
            },
            {
                id: "mac",
                title: "Method 4: Mac (Apple Mail & Outlook)",
                content: (
                    <>
                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Apple Mail</h4>
                        <ol className="list-decimal pl-5 space-y-4 mb-8">
                            <li className="pl-2">Open the message.</li>
                            <li className="pl-2">Select <strong>File &gt; Export as PDF...</strong> in the menu bar. This is a direct feature not found on Windows!</li>
                            <li className="pl-2">Choose your save location.</li>
                        </ol>

                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Outlook for Mac</h4>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Open the email.</li>
                            <li className="pl-2">Press <strong>Command + P</strong>.</li>
                            <li className="pl-2">Click the <strong>PDF</strong> dropdown button in the bottom-left corner of the print dialog.</li>
                            <li className="pl-2">Select <strong>Save as PDF</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "ios",
                title: "Method 5: iPhone & iPad (The \"Pinch\" Trick)",
                content: (
                    <>
                        <p className="mb-4">
                            iOS has a hidden gesture that turns any print preview into a PDF file.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Open the email in the Mail app.</li>
                            <li className="pl-2">Tap the <strong>Reply/Forward arrow</strong>.</li>
                            <li className="pl-2">Scroll down and tap <strong>Print</strong>.</li>
                            <li className="pl-2">
                                <strong>The Secret Step:</strong> In the print preview screen, place two fingers on the page image and <strong>pinch outwards</strong> (like zooming in).
                            </li>
                            <li className="pl-2">The preview will snap into full-screen mode. It is now a PDF.</li>
                            <li className="pl-2">Tap the <strong>Share</strong> icon (top right) and select <strong>Save to Files</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "android",
                title: "Method 6: Android (Gmail App)",
                content: (
                    <>
                        <p className="mb-4">
                            Android's native print spooler handles PDF conversion seamlessly.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Open the email in the Gmail app.</li>
                            <li className="pl-2">Tap the <strong>three dots</strong> in the top-right corner of the email body.</li>
                            <li className="pl-2">Tap <strong>Print</strong>.</li>
                            <li className="pl-2">At the top of the screen, tap the dropdown that says "Select a printer" and choose <strong>Save as PDF</strong>.</li>
                            <li className="pl-2">Tap the round <strong>PDF download icon</strong> to save it to your Downloads folder.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "legal-archiving",
                title: "Legal Admissibility & PDF/A Standards",
                content: (
                    <>
                        <div className="flex items-start gap-4 mb-6">
                            <Scale className="w-12 h-12 text-canada-red shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Why Screenshots Are Not Enough</h4>
                                <p>
                                    Courts often reject screenshots because they are easily forged and lack metadata. A PDF exported directly from an email client contains <strong>header metadata</strong> (From, To, Date, Subject) that is harder to falsify.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FileCheck className="w-12 h-12 text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">The PDF/A Standard</h4>
                                <p>
                                    For long-term archiving (10+ years), consider converting your saved PDFs to <strong>PDF/A</strong> (Archive) format. This ensures that the document will remain readable in future software updates by embedding all fonts and color profiles.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "automation",
                title: "Automation Corner: Power Automate",
                content: (
                    <>
                        <p className="mb-4">
                            For users asking about <em>"save email as pdf power automate"</em>: Yes, Microsoft Power Automate can automatically save incoming emails as PDFs to OneDrive.
                        </p>
                        <p className="mb-4">
                            However, this requires a <strong>Premium License</strong> and complex flow configuration (&quot;When a new email arrives&quot; &rarr; &quot;Export to file&quot; &rarr; &quot;Create file&quot;). For most individuals and small businesses, the manual methods described above are faster, free, and less prone to errors.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertTriangle className="text-amber-600" /> Images Not Loading?
                                </h4>
                                <p>
                                    If your PDF has empty boxes instead of images, check your email client's privacy settings. You must click <strong>"Download Pictures"</strong> or "Always show images from this sender" <em>before</em> generating the PDF. The print driver captures the screen exactly as it looks.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Text Cut Off / Right Margin Issues</h4>
                                <p>
                                    This happens when an email contains a wide image or HTML table. To fix this:
                                </p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>In the print dialog, change <strong>Layout</strong> to <strong>Landscape</strong>.</li>
                                    <li>Or, change <strong>Scale</strong> from "Default" to <strong>"Fit to printable area"</strong> or <strong>"Custom (80%)"</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faqTitle: "Frequently Asked Questions (FAQ) - Mega Edition",
        faq: [
            {
                q: "Can I save an email AND its attachments into one PDF?",
                a: "The 'Print to PDF' feature DOES NOT include attachments automatically. It only saves the email body. To include attachments, you must save them separately and then use a Merge PDF tool to combine them with the email PDF."
            },
            {
                q: "How do I save a Gmail thread (multiple emails) as one PDF?",
                a: "In Gmail, if you click the print icon for the specific email, it saves only that one. If you click the print icon at the very top right of the conversation view, it will print/save the entire thread history into a single scrolling PDF."
            },
            {
                q: "Is a PDF copy of an email admissible in court?",
                a: "Generally, yes, and it is preferred over screenshots. A proper PDF export preserves header metadata (sender, recipient, timestamps) which is crucial for authentication in legal discovery."
            },
            {
                q: "How can I batch save multiple emails as PDF at once?",
                a: "Most webmail clients (Gmail/Outlook Web) do not support batch export. Desktop clients like Outlook can print multiple selected emails, but they will save as separate files or one giant continuous file depending on settings. For true batch conversion, specialized third-party software is usually required."
            },
            {
                q: "How do I remove the header/footer (URL, Date) from the PDF?",
                a: "In the Chrome/Edge print preview, look for 'More settings' and uncheck the 'Headers and footers' box. This removes the timestamp and page URL from the top and bottom of the page."
            },
            {
                q: "Why is my PDF file size so huge?",
                a: "Emails often contain high-resolution tracking pixels or unoptimized logos. You can use our Compress PDF tool to reduce the file size by 50-80% without losing text clarity."
            },
            {
                q: "How do I save email as PDF on Android without an app?",
                a: "Use the Gmail app's native 'Print' function. Tap the three dots > Print > Select 'Save as PDF' from the printer dropdown. No extra app needed."
            },
            {
                q: "Can I automate saving emails to PDF?",
                a: "Yes, using tools like Microsoft Power Automate or Zapier, but these typically require paid subscriptions. For free users, the manual method is best."
            },
            {
                q: "How do I save Outlook email as PDF on Mac?",
                a: "You can use Command+P and select 'Save as PDF' from the PDF dropdown menu in the print dialog. This is built into macOS."
            },
            {
                q: "Does 'Save as PDF' notify the sender?",
                a: "No. Saving or printing an email is a strictly local action. The sender receives no notification that you have archived their message."
            }
        ],
        ctaTitle: "Tired of Messy Email PDFs?",
        ctaButton: "Clean Up & Merge PDFs",
        ctaSubtext: "100% Free, Secure, and Local.",
        quickAnswer: {
            question: "How do I save an email as PDF?",
            answer: "Open email → Click three dots (or File > Print) → Select 'Print' → Change destination to 'Save as PDF' → Save. Works on Gmail, Outlook, iOS, and Android.",
            steps: ["Open the email", "Select Print", "Choose 'Save as PDF'", "Save the file"]
        }
    },
    fr: {
        seo: {
            title: `Enregistrer Courriel en PDF | Guide Sécurisé ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Conservez vos courriels importants sous forme de fichiers PDF sécurisés. Notre guide ${CURRENT_YEAR} vous montre comment convertir sans risque vos courriels Outlook ou Gmail.`
        },
        h1: "Comment Enregistrer un Courriel en PDF",
        subtitle: "Le guide complet pour archiver instantanément votre correspondance importante.",
        intro: (
            <>
                Enregistrer un courriel en PDF est plus qu'une simple astuce technique; c'est une nécessité pour les dossiers juridiques, les notes de frais et les sauvegardes hors ligne. Contrairement à une capture d'écran, la conversion d'un courriel en PDF préserve le texte, les liens et la mise en forme dans un document professionnel.
                <br /><br />
                Que vous utilisiez <strong>Gmail</strong>, <strong>Outlook</strong> ou un <strong>iPhone</strong>, ce guide vous montrera exactement comment transformer ce message en fichier portable permanent.
            </>
        ),
        sections: [
            {
                id: "gmail",
                title: "Méthode 1 : Gmail (Bureau et Web)",
                content: (
                    <>
                        <p className="mb-4">
                            La fonction « Imprimer au format PDF » de Gmail est robuste mais cachée.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Ouvrez le courriel spécifique</strong> que vous souhaitez convertir.</li>
                            <li className="pl-2"><strong>Trouvez l'icône « Plus »</strong> : Cliquez sur les trois points verticaux (⋮) situés dans le <em>coin supérieur droit du conteneur du courriel</em>. <span className="text-red-500 font-bold">Attention :</span> Ne cliquez pas sur le bouton d'impression du navigateur.</li>
                            <li className="pl-2">Sélectionnez <strong>Imprimer</strong> dans le menu. Une nouvelle fenêtre s'ouvrira avec une vue épurée.</li>
                            <li className="pl-2">Dans la destination, sélectionnez <strong>« Enregistrer au format PDF »</strong> (Chrome) ou <strong>« Microsoft Print to PDF »</strong> (Windows).</li>
                            <li className="pl-2"><strong>Cliquez sur Enregistrer</strong> et choisissez votre dossier local.</li>
                        </ol>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                            <strong>Astuce pour les Fils de discussion :</strong> Pour sauvegarder toute la conversation, assurez-vous de cliquer sur l'icône d'impression de la <em>conversation</em> (en haut à droite) plutôt que sur un message individuel.
                        </div>
                    </>
                )
            },
            {
                id: "new-outlook",
                title: "Méthode 2 : Le « Nouvel Outlook » pour Windows",
                content: (
                    <>
                        <p className="mb-4">
                            Le « Nouvel Outlook » de Microsoft (2024+) a modifié l'interface. Le menu « Fichier &gt; Imprimer » a disparu.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Ouvrez le courriel dans le volet de lecture.</li>
                            <li className="pl-2">Cliquez sur les <strong>trois points horizontaux (...)</strong> dans le coin supérieur droit de l'en-tête du message.</li>
                            <li className="pl-2">Sélectionnez <strong>Imprimer</strong>. Un aperçu apparaîtra.</li>
                            <li className="pl-2">Cliquez sur le bouton <strong>Imprimer</strong> en haut de cet aperçu.</li>
                            <li className="pl-2">Dans le dialogue système, réglez l'imprimante sur <strong>« Microsoft Print to PDF »</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "classic-outlook",
                title: "Méthode 3 : Outlook Classique (Bureau)",
                content: (
                    <>
                        <p className="mb-4">
                            Pour les utilisateurs d'entreprise sur Outlook Classique (Office 365 / 2019) :
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Sélectionnez le courriel.</li>
                            <li className="pl-2">Allez dans <strong>Fichier &gt; Imprimer</strong>.</li>
                            <li className="pl-2">Sous Imprimante, choisissez <strong>Microsoft Print to PDF</strong>.</li>
                            <li className="pl-2">Cliquez sur <strong>Imprimer</strong>. Options permet parfois d'inclure les pièces jointes, mais elles s'impriment souvent mal.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "mac",
                title: "Méthode 4 : Mac (Apple Mail et Outlook)",
                content: (
                    <>
                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Apple Mail</h4>
                        <ol className="list-decimal pl-5 space-y-4 mb-8">
                            <li className="pl-2">Ouvrez le message.</li>
                            <li className="pl-2">Sélectionnez <strong>Fichier &gt; Exporter au format PDF...</strong> dans la barre de menu. C'est une fonction directe exclusive au Mac !</li>
                            <li className="pl-2">Choisissez votre emplacement de sauvegarde.</li>
                        </ol>

                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Outlook pour Mac</h4>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Ouvrez le courriel.</li>
                            <li className="pl-2">Appuyez sur <strong>Command + P</strong>.</li>
                            <li className="pl-2">Cliquez sur le bouton <strong>PDF</strong> en bas à gauche du dialogue d'impression.</li>
                            <li className="pl-2">Sélectionnez <strong>Enregistrer au format PDF</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "ios",
                title: "Méthode 5 : iPhone et iPad (L'astuce du « Pincement »)",
                content: (
                    <>
                        <p className="mb-4">
                            iOS possède un geste caché qui transforme tout aperçu d'impression en fichier PDF.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Ouvrez le courriel dans l'app Mail.</li>
                            <li className="pl-2">Touchez la <strong>flèche Répondre/Transférer</strong>.</li>
                            <li className="pl-2">Faites défiler et touchez <strong>Imprimer</strong>.</li>
                            <li className="pl-2">
                                <strong>L'étape secrète :</strong> Dans l'écran d'aperçu, placez deux doigts sur l'image de la page et <strong>écartez-les</strong> (comme pour zoomer).
                            </li>
                            <li className="pl-2">L'aperçu passe en plein écran. C'est maintenant un PDF.</li>
                            <li className="pl-2">Touchez l'icône <strong>Partager</strong> (en haut à droite) et sélectionnez <strong>Enregistrer dans Fichiers</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "android",
                title: "Méthode 6 : Android (App Gmail)",
                content: (
                    <>
                        <p className="mb-4">
                            Le spouleur d'impression natif d'Android gère la conversion PDF sans effort.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Ouvrez le courriel dans l'app Gmail.</li>
                            <li className="pl-2">Touchez les <strong>trois points</strong> dans le coin supérieur du corps du courriel.</li>
                            <li className="pl-2">Touchez <strong>Imprimer</strong>.</li>
                            <li className="pl-2">En haut, dans le menu déroulant « Sélectionner une imprimante », choisissez <strong>Enregistrer au format PDF</strong>.</li>
                            <li className="pl-2">Touchez l'icône ronde <strong>PDF</strong> pour sauvegarder dans vos Téléchargements.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "legal-archiving",
                title: "Admissibilité Juridique et Normes PDF/A",
                content: (
                    <>
                        <div className="flex items-start gap-4 mb-6">
                            <Scale className="w-12 h-12 text-canada-red shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Pourquoi les captures d'écran ne suffisent pas</h4>
                                <p>
                                    Les tribunaux rejettent souvent les captures d'écran car elles sont facilement falsifiables et manquent de métadonnées. Un PDF exporté directement contient les <strong>métadonnées d'en-tête</strong> (De, À, Date, Objet) qui sont plus difficiles à falsifier.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FileCheck className="w-12 h-12 text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">La Norme PDF/A</h4>
                                <p>
                                    Pour l'archivage à long terme (10 ans et plus), envisagez de convertir vos PDF en format <strong>PDF/A</strong> (Archive). Cela garantit que le document restera lisible dans les futurs logiciels en incorporant toutes les polices.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "automation",
                title: "Coin Automatisation : Power Automate",
                content: (
                    <>
                        <p className="mb-4">
                            Pour ceux qui demandent <em>« Power Automate save email as pdf »</em> : Oui, Microsoft Power Automate peut sauvegarder automatiquement les courriels entrants sur OneDrive.
                        </p>
                        <p className="mb-4">
                            Cependant, cela nécessite une <strong>Licence Premium</strong> et une configuration complexe. Pour la plupart des particuliers et PME, les méthodes manuelles décrites ci-dessus sont plus rapides, gratuites et moins sujettes aux erreurs.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Dépannage des Problèmes Courants",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertTriangle className="text-amber-600" /> Images manquantes ?
                                </h4>
                                <p>
                                    Si votre PDF a des cases vides au lieu d'images, vérifiez les paramètres de confidentialité de votre courriel. Vous devez cliquer sur <strong>« Télécharger les images »</strong> ou « Toujours afficher les images » <em>avant</em> de générer le PDF.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Texte coupé / Marge droite</h4>
                                <p>
                                    Cela arrive quand un courriel contient une image large. Pour corriger :
                                </p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Dans le dialogue d'impression, changez la <strong>Disposition</strong> en <strong>Paysage</strong>.</li>
                                    <li>Ou changez l'<strong>Échelle</strong> de « Par défaut » à <strong>« Ajuster à la zone d'impression »</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faqTitle: "Foire Aux Questions (FAQ) - Édition Complète",
        faq: [
            {
                q: "Puis-je enregistrer un courriel ET ses pièces jointes en un seul PDF ?",
                a: "La fonction « Imprimer en PDF » n'inclut PAS les pièces jointes automatiquement. Elle ne sauvegarde que le corps du courriel. Pour inclure les pièces jointes, vous devez les sauvegarder séparément puis utiliser un outil de Fusion PDF pour les combiner."
            },
            {
                q: "Comment sauvegarder un fil de discussion Gmail en un seul PDF ?",
                a: "Dans Gmail, si vous cliquez sur l'icône d'impression du message, cela ne sauvegarde que celui-là. Si vous cliquez sur l'icône d'impression tout en haut à droite de la conversation, cela sauvegardera tout l'historique en un seul PDF continu."
            },
            {
                q: "Une copie PDF d'un courriel est-elle admissible au tribunal ?",
                a: "Généralement, oui, et c'est préférable aux captures d'écran. Un export PDF propre préserve les métadonnées d'en-tête (expéditeur, date) qui sont cruciales pour l'authentification lors de la communication de la preuve."
            },
            {
                q: "Comment sauvegarder plusieurs courriels en PDF à la fois (par lots) ?",
                a: "La plupart des webmails (Gmail/Outlook Web) ne supportent pas l'export par lots. Les clients bureau comme Outlook peuvent imprimer plusieurs courriels sélectionnés, mais cela crée souvent des fichiers séparés. Des logiciels tiers sont généralement requis pour le traitement de masse."
            },
            {
                q: "Comment retirer l'en-tête/pied de page (URL, Date) du PDF ?",
                a: "Dans l'aperçu Chrome/Edge, cherchez « Plus de paramètres » et décochez la case « En-têtes et pieds de page ». Cela retire l'URL et la date en haut et en bas de la page."
            },
            {
                q: "Pourquoi la taille de mon fichier PDF est-elle si énorme ?",
                a: "Les courriels contiennent souvent des pixels de suivi haute résolution ou des logos non optimisés. Vous pouvez utiliser notre outil Compresser PDF pour réduire la taille de 50-80 % sans perdre la clarté du texte."
            },
            {
                q: "Comment enregistrer un courriel en PDF sur Android sans application ?",
                a: "Utilisez la fonction « Imprimer » native de l'app Gmail. Touchez les trois points > Imprimer > Sélectionnez « Enregistrer au format PDF ». Aucune app supplémentaire n'est requise."
            },
            {
                q: "Puis-je automatiser la sauvegarde des courriels ?",
                a: "Oui, avec des outils comme Power Automate, mais cela nécessite souvent des abonnements payants. Pour les utilisateurs gratuits, la méthode manuelle reste la meilleure."
            },
            {
                q: "Comment enregistrer un courriel Outlook en PDF sur Mac ?",
                a: "Vous pouvez utiliser commande+P et sélectionner « Enregistrer au format PDF » dans le menu déroulant PDF du dialogue d'impression. C'est intégré à macOS."
            },
            {
                q: "L'expéditeur sait-il que j'ai enregistré en PDF ?",
                a: "Non. Enregistrer ou imprimer un courriel est une action strictement locale. L'expéditeur ne reçoit aucune notification."
            }
        ],
        ctaTitle: "Fatigué des PDF désordonnés ?",
        ctaButton: "Nettoyer et Fusionner les PDF",
        ctaSubtext: "100 % Gratuit, Sécurisé et Local.",
        quickAnswer: {
            question: "Comment enregistrer un courriel en PDF?",
            answer: "Ouvrez le courriel → Cliquez sur les trois points (ou Fichier > Imprimer) → Sélectionnez 'Imprimer' → Changez la destination en 'Enregistrer au format PDF' → Sauvegardez. Fonctionne sur Gmail, Outlook, iOS et Android.",
            steps: ["Ouvrez le courriel", "Sélectionnez Imprimer", "Choisissez 'Enregistrer au format PDF'", "Sauvegardez le fichier"]
        }
    },
    pt: {
        seo: {
            title: `Como Salvar E-mail como PDF | Guia Outlook, Gmail, iPhone e Android ${CURRENT_YEAR}`,
            desc: `O guia definitivo de ${CURRENT_YEAR} para salvar e-mails como PDF. Cobre Novo Outlook, Gmail, Apple Mail, iPhone e Android. Dicas legais e processamento em lote.`
        },
        h1: `Como Salvar E-mail como PDF: O Super Guia ${CURRENT_YEAR}`,
        subtitle: "Um guia técnico completo para arquivar correspondências em qualquer dispositivo.",
        intro: (
            <>
                Salvar um e-mail como PDF é uma habilidade crítica para profissionais jurídicos, assistentes administrativos e qualquer pessoa que precise de um registro permanente. Diferente de capturas de tela, um <strong>PDF (Portable Document Format)</strong> preserva metadados, carimbos de data, links e texto vetorial da mensagem original.
                <br /><br />
                Seja usando o <strong>Novo Outlook para Windows</strong>, <strong>Gmail no Android</strong> ou <strong>Apple Mail no macOS</strong>, este guia cobre todos os métodos. Também abordamos <strong>admissibilidade legal</strong>, <strong>padrões PDF/A</strong> e <strong>fluxos de trabalho em lote</strong>.
            </>
        ),
        sections: [
            {
                id: "gmail",
                title: "Método 1: Gmail (Desktop e Web)",
                content: (
                    <>
                        <p className="mb-4">
                            A funcionalidade "Imprimir para PDF" do Gmail é robusta, mas escondida.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Abra o e-mail específico</strong> que deseja converter. Não selecione apenas na lista.</li>
                            <li className="pl-2"><strong>Encontre o ícone &quot;Mais&quot;</strong>: Clique nos três pontos verticais (⋮) no <em>canto superior direito do e-mail</em>. <span className="text-red-500 font-bold">Aviso:</span> Não use o botão imprimir do navegador.</li>
                            <li className="pl-2">Selecione <strong>Imprimir</strong> no menu suspenso. Uma nova janela limpa abrirá.</li>
                            <li className="pl-2">No destino, selecione <strong>&quot;Salvar como PDF&quot;</strong> (Chrome/Edge) ou <strong>&quot;Microsoft Print to PDF&quot;</strong>.</li>
                            <li className="pl-2"><strong>Clique em Salvar</strong> e escolha seu diretório local.</li>
                        </ol>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                            <strong>Dica para Conversas Completas:</strong> Para salvar todo o histórico, clique no ícone de impressão da <em>conversa</em> (canto superior direito geral) em vez da mensagem individual.
                        </div>
                    </>
                )
            },
            {
                id: "new-outlook",
                title: "Método 2: O \"Novo Outlook\" para Windows",
                content: (
                    <>
                        <p className="mb-4">
                            O "Novo Outlook" da Microsoft mudou significativamente a interface. O antigo menu "Arquivo &gt; Imprimir" sumiu.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Abra o e-mail no painel de leitura.</li>
                            <li className="pl-2">Clique nos <strong>três pontos horizontais (...)</strong> no canto superior direito do cabeçalho da mensagem.</li>
                            <li className="pl-2">Selecione <strong>Imprimir</strong>. Uma prévia aparecerá.</li>
                            <li className="pl-2">Clique no botão <strong>Imprimir</strong> no topo desta prévia.</li>
                            <li className="pl-2">No diálogo do sistema, defina a Impressora como <strong>&quot;Microsoft Print to PDF&quot;</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "classic-outlook",
                title: "Método 3: Outlook Clássico (Desktop)",
                content: (
                    <>
                        <p className="mb-4">
                            Para usuários corporativos no Outlook Clássico (Office 365 / 2019 / 2016):
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Selecione o e-mail.</li>
                            <li className="pl-2">Vá em <strong>Arquivo &gt; Imprimir</strong>.</li>
                            <li className="pl-2">Em Impressora, escolha <strong>Microsoft Print to PDF</strong>.</li>
                            <li className="pl-2">Clique em <strong>Opções de Impressão</strong> se precisar incluir anexos (Nota: Isso imprime fisicamente os anexos; geralmente falha ao mesclar no PDF).</li>
                        </ol>
                    </>
                )
            },
            {
                id: "mac",
                title: "Método 4: Mac (Apple Mail e Outlook)",
                content: (
                    <>
                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Apple Mail</h4>
                        <ol className="list-decimal pl-5 space-y-4 mb-8">
                            <li className="pl-2">Abra a mensagem.</li>
                            <li className="pl-2">Selecione <strong>Arquivo &gt; Exportar como PDF...</strong> na barra de menu. Recurso nativo do Mac!</li>
                            <li className="pl-2">Escolha o local para salvar.</li>
                        </ol>

                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Outlook para Mac</h4>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Abra o e-mail.</li>
                            <li className="pl-2">Pressione <strong>Command + P</strong>.</li>
                            <li className="pl-2">Clique no botão <strong>PDF</strong> no canto inferior esquerdo do diálogo.</li>
                            <li className="pl-2">Selecione <strong>Salvar como PDF</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "ios",
                title: "Método 5: iPhone e iPad (O Truque da \"Pinça\")",
                content: (
                    <>
                        <p className="mb-4">
                            O iOS tem um gesto oculto que transforma qualquer prévia de impressão em arquivo PDF.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">Abra o e-mail no app Mail.</li>
                            <li className="pl-2">Toque na <strong>seta Responder/Encaminhar</strong>.</li>
                            <li className="pl-2">Role para baixo e toque em <strong>Imprimir</strong>.</li>
                            <li className="pl-2">
                                <strong>O Passo Secreto:</strong> Na tela de prévia, coloque dois dedos na imagem da página e <strong>faça o movimento de pinça para fora</strong> (como ampliar).
                            </li>
                            <li className="pl-2">A prévia abrirá em tela cheia. Agora é um PDF.</li>
                            <li className="pl-2">Toque no ícone <strong>Compartilhar</strong> (topo direito) e selecione <strong>Salvar em Arquivos</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "android",
                title: "Método 6: Android (App Gmail)",
                content: (
                    <>
                        <p className="mb-4">
                            O sistema de impressão nativo do Android lida com conversão PDF perfeitamente.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="pl-2">Abra o e-mail no app Gmail.</li>
                            <li className="pl-2">Toque nos <strong>três pontos</strong> no canto superior do corpo do e-mail.</li>
                            <li className="pl-2">Toque em <strong>Imprimir</strong>.</li>
                            <li className="pl-2">No topo, no menu "Selecionar impressora", escolha <strong>Salvar como PDF</strong>.</li>
                            <li className="pl-2">Toque no ícone redondo <strong>PDF</strong> para salvar na pasta Downloads.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "legal-archiving",
                title: "Admissibilidade Legal e Padrões PDF/A",
                content: (
                    <>
                        <div className="flex items-start gap-4 mb-6">
                            <Scale className="w-12 h-12 text-canada-red shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Por que Capturas de Tela Não Bastam</h4>
                                <p>
                                    Fóruns legais frequentemente rejeitam prints pois são facilmente falsificados e faltam metadados. Um PDF exportado diretamente contém <strong>metadados de cabeçalho</strong> (De, Para, Data, Assunto) mais difíceis de fraudar.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FileCheck className="w-12 h-12 text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">O Padrão PDF/A</h4>
                                <p>
                                    Para arquivamento a longo prazo (10+ anos), considere converter seus PDFs salvos para o formato <strong>PDF/A</strong> (Arquivo). Isso garante que o documento permaneça legível no futuro incorporando todas as fontes.
                                </p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "automation",
                title: "Canto da Automação: Power Automate",
                content: (
                    <>
                        <p className="mb-4">
                            Para quem pergunta sobre <em>"Power Automate salvar email como pdf"</em>: Sim, o Microsoft Power Automate pode salvar e-mails automaticamente no OneDrive.
                        </p>
                        <p className="mb-4">
                            Porém, isso requer uma <strong>Licença Premium</strong> e configuração complexa. Para a maioria das pessoas e PMEs, os métodos manuais acima são mais rápidos, grátis e menos propensos a erros.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Solução de Problemas Comuns",
                content: (
                    <>
                        <div className="space-y-6">
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertTriangle className="text-amber-600" /> Imagens Não Carregam?
                                </h4>
                                <p>
                                    Se seu PDF tem caixas vazias em vez de imagens, verifique as configurações de privacidade do seu e-mail. Você deve clicar em <strong>"Baixar Imagens"</strong> ou "Sempre mostrar imagens" <em>antes</em> de gerar o PDF.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Texto Cortado / Margem Direita</h4>
                                <p>
                                    Isso acontece quando um e-mail contém uma imagem larga ou tabela HTML. Para corrigir:
                                </p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>No diálogo de impressão, mude o <strong>Layout</strong> para <strong>Paisagem</strong>.</li>
                                    <li>Ou mude a <strong>Escala</strong> de "Padrão" para <strong>"Ajustar à área de impressão"</strong> ou "Personalizado (80%)".</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faqTitle: "Perguntas Frequentes (FAQ) - Edição Completa",
        faq: [
            {
                q: "Posso salvar um e-mail E seus anexos num único PDF?",
                a: "A função 'Imprimir para PDF' NÃO inclui anexos automaticamente. Ela salva apenas o corpo do e-mail. Para incluir anexos, você deve salvá-los separadamente e usar nossa ferramenta Mesclar PDF para combinar tudo."
            },
            {
                q: "Como salvar uma conversa inteira do Gmail em um PDF?",
                a: "No Gmail, clique no ícone de impressão no topo direito da visualização da conversa (não no e-mail individual). Isso salvará todo o histórico em um único PDF de rolagem."
            },
            {
                q: "Uma cópia PDF de e-mail é admissível no tribunal?",
                a: "Geralmente sim, e é preferida sobre capturas de tela. Um PDF exportado corretamente preserva metadados essenciais para autenticação em processos legais."
            },
            {
                q: "Como salvar vários e-mails como PDF de uma vez (em lote)?",
                a: "A maioria dos webmails não suporta isso nativamente. Clientes Desktop como Outlook podem imprimir vários e-mails selecionados, mas o resultado varia. Softwares de terceiros geralmente são necessários para conversão em massa eficiente."
            },
            {
                q: "Como remover cabeçalho/rodapé (URL, Data) do PDF?",
                a: "Na prévia do Chrome/Edge, procure 'Mais definições' e desmarque 'Cabeçalhos e rodapés'. Isso remove a URL e data do topo e rodapé da página."
            },
            {
                q: "Por que meu arquivo PDF ficou tão grande?",
                a: "E-mails frequentemente contêm pixels de rastreamento ou imagens não otimizadas. Use nossa ferramenta Comprimir PDF para reduzir o tamanho em 50-80% sem perder clareza de texto."
            },
            {
                q: "Como salvar e-mail como PDF no Android sem app?",
                a: "Use a função nativa do app Gmail. Toque nos três pontos > Imprimir > Selecione 'Salvar como PDF'. Nenhum app extra necessário."
            },
            {
                q: "Posso automatizar o salvamento de e-mails?",
                a: "Sim, com Power Automate ou Zapier, mas geralmente requer assinaturas pagas. Para usuários gratuitos, o método manual é o mais confiável."
            },
            {
                q: "Como salvar e-mail do Outlook como PDF no Mac?",
                a: "Use Command+P e selecione 'Salvar como PDF' no menu suspenso PDF da caixa de diálogo. É nativo do macOS."
            },
            {
                q: "O remetente sabe que salvei como PDF?",
                a: "Não. Salvar ou imprimir é uma ação estritamente local. O remetente não recebe notificação."
            }
        ],
        ctaTitle: "Cansado de PDFs bagunçados?",
        ctaButton: "Limpar e Mesclar PDFs",
        ctaSubtext: "100% Grátis, Seguro e Local.",
        quickAnswer: {
            question: "Como salvar um e-mail como PDF?",
            answer: "Abra o e-mail → Clique nos três pontos (ou Arquivo > Imprimir) → Selecione 'Imprimir' → Mude o destino para 'Salvar como PDF' → Salve. Funciona no Gmail, Outlook, iOS e Android.",
            steps: ["Abra o e-mail", "Selecione Imprimir", "Escolha 'Salvar como PDF'", "Salve o arquivo"]
        }
    }
});

export const EmailToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = [
        {
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": t.quickAnswer ? t.quickAnswer.steps.map((step: string, i: number) => ({
                "@type": "HowToStep",
                "position": i + 1,
                "name": `Step ${i + 1}`,
                "text": step
            })) : []
        },
        {
            "@type": "FAQPage",
            "mainEntity": t.faq.map((f: any) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                }
            }))
        },
        {
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-06-01",
            "dateModified": "2025-12-28",
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
            }
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/email-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'en' ? '/' : "/${lang}" },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Courriel en PDF' : 'Email to PDF', path: lang === 'fr' ? '/fr/guides/email-to-pdf' : '/guides/email-to-pdf' }
                ]}
            />

            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Mail size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'en' ? '/' : "/${lang}" },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Courriel en PDF' : 'Email to PDF', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 border-l-4 border-canada-red pl-4 sm:pl-6 py-2 mb-12 sm:mb-14 md:mb-16 font-medium">
                        {t.intro}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12 sm:space-y-16 md:space-y-20">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id}>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-gray-900 dark:text-white">
                                    {section.id === 'gmail' && <Mail size={28} className="text-canada-red" />}
                                    {section.id === 'new-outlook' && <Monitor size={28} className="text-blue-500" />}
                                    {section.id === 'classic-outlook' && <Monitor size={28} className="text-blue-700" />}
                                    {section.id === 'mac' && <Monitor size={28} className="text-gray-600" />}
                                    {section.id === 'ios' && <Smartphone size={28} className="text-gray-900 dark:text-gray-100" />}
                                    {section.id === 'android' && <Smartphone size={28} className="text-green-600" />}
                                    {section.id === 'legal-archiving' && <Scale size={28} className="text-indigo-600" />}
                                    {section.id === 'automation' && <Zap size={28} className="text-amber-500" />}
                                    {section.id === 'troubleshooting' && <AlertTriangle size={28} className="text-amber-600" />}
                                    {section.title}
                                </h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-gray-900 dark:text-white">{t.faqTitle}</h3>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {t.faq.map((item: any, i: number) => (
                                <details key={i} className="group py-4 sm:py-5 md:py-6 cursor-pointer">
                                    <summary className="text-lg sm:text-xl font-bold flex justify-between items-center group-hover:text-canada-red transition-all text-gray-900 dark:text-white">
                                        {item.q}
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <div className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 pr-8 sm:pr-12 leading-relaxed">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3.5rem] text-center shadow-2xl shadow-red-500/20 text-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/delete-pdf-pages`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 rounded-full font-black text-base sm:text-lg shadow-lg hover:scale-105 transition-all"
                        >
                            {t.ctaButton}
                        </Link>
                        <p className="mt-6 text-sm opacity-80 font-medium">{t.ctaSubtext}</p>
                    </div>

                    <AISnapshot
                        lang={lang}
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        steps={t.quickAnswer.steps}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/email-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
