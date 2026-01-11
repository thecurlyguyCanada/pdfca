'use client';

import Link from 'next/link';
import React from 'react';
import { Monitor, Settings, FileText, CheckCircle, HelpCircle, Apple, Folder, MousePointer } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
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
            title: `How to Change Default PDF Viewer on Mac | ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to change your default PDF viewer on Mac from Preview to Adobe Acrobat, Chrome, or any other PDF reader. Step-by-step instructions for macOS Sonoma, Ventura & earlier.`
        },
        h1: `How to Change Default PDF Viewer on Mac (${CURRENT_YEAR})`,
        subtitle: "Set Adobe Acrobat, Chrome, or any PDF reader as your default — step-by-step for all macOS versions.",

        intro: (
            <>
                By default, macOS uses <strong>Preview</strong> to open PDF files. While Preview is a capable basic viewer, you might prefer a different application like <strong>Adobe Acrobat Reader</strong>, <strong>PDF Expert</strong>, or even your web browser for viewing PDFs.
                <br /><br />
                This guide shows you exactly how to change your default PDF viewer on Mac using the <strong>Get Info</strong> method — the most reliable way that works across all macOS versions including Sonoma, Ventura, Monterey, and earlier.
            </>
        ),

        sections: [
            {
                id: "method-get-info",
                title: "Method: Change Default PDF Viewer Using Get Info",
                content: (
                    <>
                        <p className="mb-4">
                            This is the official Apple method and works on <strong>all macOS versions</strong>. It permanently changes which app opens PDF files.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Find any PDF file</strong> on your Mac. You can use Finder to navigate to a folder containing a PDF, or search for one using Spotlight (Cmd + Space, then type &quot;.pdf&quot;).
                            </li>
                            <li className="pl-2">
                                <strong>Right-click (or Control-click)</strong> on the PDF file to open the context menu.
                            </li>
                            <li className="pl-2">
                                <strong>Select &quot;Get Info&quot;</strong> from the menu. You can also select the file and press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>.
                            </li>
                            <li className="pl-2">
                                <strong>Expand the &quot;Open with&quot; section</strong> by clicking the triangle next to it (if it's collapsed).
                            </li>
                            <li className="pl-2">
                                <strong>Click the dropdown menu</strong> showing the current default app (likely Preview) and select your preferred PDF viewer from the list — such as Adobe Acrobat Reader, PDF Expert, Skim, or your browser.
                            </li>
                            <li className="pl-2">
                                <strong>Click &quot;Change All...&quot;</strong> — this is the crucial step! This button applies your choice to <em>all</em> PDF files, not just this one.
                            </li>
                            <li className="pl-2">
                                <strong>Confirm the change</strong> by clicking &quot;Continue&quot; in the dialog that appears.
                            </li>
                        </ol>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                            <p className="text-green-800 dark:text-green-200">
                                <strong>Done!</strong> From now on, double-clicking any PDF file will open it in your chosen application instead of Preview.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "popular-viewers",
                title: "Popular PDF Viewers for Mac",
                content: (
                    <>
                        <p className="mb-4">Here are the most popular PDF viewers for Mac and what they're best for:</p>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Preview (Built-in)</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Apple's default viewer. Fast, lightweight, and handles basic annotations. Best for quick viewing and simple markup.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Free • Pre-installed</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Adobe Acrobat Reader</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Industry standard. Perfect for viewing PDFs exactly as intended, filling forms, and adding signatures. Best compatibility with complex PDFs.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Free version available</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">PDF Expert</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Mac-native app with advanced editing. Great for heavy PDF users who need to edit text, merge files, and annotate extensively.</p>
                                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Paid • One-time purchase</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Google Chrome / Microsoft Edge</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Built-in PDF viewing in browsers. Convenient if you frequently access PDFs from the web and want a unified experience.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Free</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skim</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Open-source reader designed for academic papers. Features like note-taking and citation support make it ideal for researchers and students.</p>
                                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Free • Open Source</span>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "switch-back-preview",
                title: "How to Switch Back to Preview",
                content: (
                    <>
                        <p className="mb-4">
                            Changed your mind? Here's how to restore Preview as your default PDF viewer:
                        </p>
                        <ol className="list-decimal pl-5 space-y-3 mb-6">
                            <li className="pl-2">Right-click on any PDF file</li>
                            <li className="pl-2">Select &quot;Get Info&quot; (or press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>)</li>
                            <li className="pl-2">In the &quot;Open with&quot; section, select <strong>Preview</strong> from the dropdown</li>
                            <li className="pl-2">Click &quot;Change All...&quot; and confirm</li>
                        </ol>
                        <p className="text-gray-600 dark:text-gray-400">
                            Preview will once again be your default PDF application.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">App not showing in the dropdown?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Click &quot;Other...&quot; at the bottom of the app list. Navigate to your Applications folder and select the PDF viewer you want. Make sure the app is properly installed in /Applications.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">&quot;Change All&quot; button is grayed out?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Make sure you've selected a different app than the current default. The button only activates when you've made a change.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Changes not sticking after restart?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Try resetting Launch Services. Open Terminal and run: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user</code></p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">PDFs still opening in Safari or browser?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">This is a browser setting, not a system setting. In Safari: Safari → Settings → General → uncheck &quot;Open safe files after downloading&quot;. In Chrome: Settings → Privacy and security → Site settings → Additional content settings → PDF documents → Select &quot;Download PDFs&quot;.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "browser-alternative",
                title: "Why Consider Browser-Based PDF Tools?",
                content: (
                    <>
                        <p className="mb-4">
                            While desktop PDF viewers are great for reading, they often fall short when you need to <strong>edit, merge, compress, or convert PDFs</strong>. That's where browser-based tools shine.
                        </p>
                        <div className="p-6 bg-gray-900 text-white rounded-2xl">
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <FileText size={20} className="text-canada-red" />
                                pdfcanada.ca — The Privacy-First Alternative
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Instead of installing heavy software, use our free online tools to merge, split, compress, and convert PDFs. Everything processes locally in your browser — your files never leave your Mac.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/en/merge-pdf" className="bg-canada-red hover:bg-canada-darkRed text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Merge PDFs
                                </Link>
                                <Link href="/en/compress-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Compress PDF
                                </Link>
                                <Link href="/en/split-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Split PDF
                                </Link>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "How do I change my default PDF viewer on Mac?",
                a: "Right-click any PDF file, select 'Get Info' (or press Cmd+I), expand 'Open with', choose your preferred app from the dropdown, then click 'Change All...' and confirm. This changes the default for all PDF files."
            },
            {
                q: "How do I change my default PDF viewer back to Preview?",
                a: "Follow the same steps: Right-click a PDF → Get Info → Open with → select Preview → Change All. Preview will become your default PDF app again."
            },
            {
                q: "Why won't my Mac open PDFs in Adobe Acrobat?",
                a: "You need to set Adobe Acrobat as the default using Get Info → Open with → Change All. Simply installing Adobe Acrobat doesn't automatically make it the default. macOS continues using Preview unless you explicitly change it."
            },
            {
                q: "Can I set different PDF viewers for different PDF files?",
                a: "Yes! If you skip clicking 'Change All', the change only applies to that specific file. However, managing different defaults per file can become confusing. Most users prefer one default app for all PDFs."
            },
            {
                q: "How do I make Chrome my default PDF viewer on Mac?",
                a: "In Get Info → Open with, click 'Other...', navigate to Applications, and select Google Chrome. Click 'Change All' to make Chrome open all PDF files. Note: Chrome must be set to open PDFs in browser (not download them) in its settings."
            },
            {
                q: "Does changing the default PDF viewer affect PDF editing?",
                a: "Yes. Different apps have different capabilities. Preview offers basic annotation, Adobe Acrobat Reader adds form filling and signatures, while PDF Expert and Adobe Acrobat Pro offer full editing. Choose based on your needs."
            },
            {
                q: "Why do PDFs still open in Safari instead of my default app?",
                a: "Safari has its own PDF handling. Go to Safari → Settings → General and uncheck 'Open safe files after downloading'. This makes Safari download PDFs instead of displaying them, allowing your default PDF app to handle them."
            },
            {
                q: "Is there a keyboard shortcut to change the default PDF app?",
                a: "Not directly, but you can quickly access Get Info by selecting a PDF file and pressing Cmd+I. From there, change the 'Open with' setting and click 'Change All'."
            }
        ],

        ctaTitle: "Need to Edit PDFs Without Installing Software?",
        ctaButton: "Try Our Free PDF Tools",
        ctaSubtext: "Merge, compress, split, and convert — all in your browser."
    },
    fr: {
        seo: {
            title: `Comment Changer le Lecteur PDF par Défaut sur Mac | Guide ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à changer votre lecteur PDF par défaut sur Mac de Preview à Adobe Acrobat, Chrome ou tout autre lecteur. Instructions étape par étape pour macOS Sonoma, Ventura et versions antérieures.`
        },
        h1: `Comment Changer le Lecteur PDF par Défaut sur Mac (${CURRENT_YEAR})`,
        subtitle: "Définissez Adobe Acrobat, Chrome ou tout lecteur PDF comme défaut — guide étape par étape pour toutes les versions de macOS.",

        intro: (
            <>
                Par défaut, macOS utilise <strong>Preview</strong> pour ouvrir les fichiers PDF. Bien que Preview soit un visualiseur de base capable, vous pourriez préférer une application différente comme <strong>Adobe Acrobat Reader</strong>, <strong>PDF Expert</strong>, ou même votre navigateur web pour visualiser les PDF.
                <br /><br />
                Ce guide vous montre exactement comment changer votre lecteur PDF par défaut sur Mac en utilisant la méthode <strong>Lire les informations</strong> — la méthode la plus fiable qui fonctionne sur toutes les versions de macOS, y compris Sonoma, Ventura, Monterey et antérieures.
            </>
        ),

        sections: [
            {
                id: "method-get-info",
                title: "Méthode : Changer le Lecteur PDF avec Lire les informations",
                content: (
                    <>
                        <p className="mb-4">
                            C'est la méthode officielle d'Apple qui fonctionne sur <strong>toutes les versions de macOS</strong>. Elle change de façon permanente quelle application ouvre les fichiers PDF.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Trouvez n'importe quel fichier PDF</strong> sur votre Mac. Vous pouvez utiliser le Finder pour naviguer vers un dossier contenant un PDF, ou en rechercher un avec Spotlight (Cmd + Espace, puis tapez &quot;.pdf&quot;).
                            </li>
                            <li className="pl-2">
                                <strong>Clic droit (ou Ctrl-clic)</strong> sur le fichier PDF pour ouvrir le menu contextuel.
                            </li>
                            <li className="pl-2">
                                <strong>Sélectionnez &quot;Lire les informations&quot;</strong> dans le menu. Vous pouvez aussi sélectionner le fichier et appuyer sur <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>.
                            </li>
                            <li className="pl-2">
                                <strong>Développez la section &quot;Ouvrir avec&quot;</strong> en cliquant sur le triangle à côté (s'il est réduit).
                            </li>
                            <li className="pl-2">
                                <strong>Cliquez sur le menu déroulant</strong> affichant l'application par défaut actuelle (probablement Preview) et sélectionnez votre lecteur PDF préféré dans la liste — comme Adobe Acrobat Reader, PDF Expert, Skim, ou votre navigateur.
                            </li>
                            <li className="pl-2">
                                <strong>Cliquez sur &quot;Tout modifier...&quot;</strong> — c'est l'étape cruciale ! Ce bouton applique votre choix à <em>tous</em> les fichiers PDF, pas seulement celui-ci.
                            </li>
                            <li className="pl-2">
                                <strong>Confirmez le changement</strong> en cliquant sur &quot;Continuer&quot; dans la boîte de dialogue qui apparaît.
                            </li>
                        </ol>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                            <p className="text-green-800 dark:text-green-200">
                                <strong>Terminé !</strong> Désormais, double-cliquer sur n'importe quel fichier PDF l'ouvrira dans l'application choisie au lieu de Preview.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "popular-viewers",
                title: "Lecteurs PDF Populaires pour Mac",
                content: (
                    <>
                        <p className="mb-4">Voici les lecteurs PDF les plus populaires pour Mac et leurs points forts :</p>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Preview (Intégré)</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Le visualiseur par défaut d'Apple. Rapide, léger et gère les annotations de base. Idéal pour la visualisation rapide et le marquage simple.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Gratuit • Préinstallé</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Adobe Acrobat Reader</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Standard de l'industrie. Parfait pour visualiser les PDF exactement comme prévu, remplir des formulaires et ajouter des signatures.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Version gratuite disponible</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">PDF Expert</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Application native Mac avec édition avancée. Excellent pour les utilisateurs intensifs de PDF qui doivent modifier du texte, fusionner des fichiers et annoter.</p>
                                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Payant • Achat unique</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Google Chrome / Microsoft Edge</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Visualisation PDF intégrée dans les navigateurs. Pratique si vous accédez fréquemment aux PDF depuis le web.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Gratuit</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skim</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Lecteur open-source conçu pour les articles académiques. Fonctionnalités comme la prise de notes le rendent idéal pour chercheurs et étudiants.</p>
                                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Gratuit • Open Source</span>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "switch-back-preview",
                title: "Comment Revenir à Preview",
                content: (
                    <>
                        <p className="mb-4">
                            Vous avez changé d'avis ? Voici comment restaurer Preview comme lecteur PDF par défaut :
                        </p>
                        <ol className="list-decimal pl-5 space-y-3 mb-6">
                            <li className="pl-2">Clic droit sur n'importe quel fichier PDF</li>
                            <li className="pl-2">Sélectionnez &quot;Lire les informations&quot; (ou appuyez sur <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>)</li>
                            <li className="pl-2">Dans la section &quot;Ouvrir avec&quot;, sélectionnez <strong>Preview</strong> dans le menu déroulant</li>
                            <li className="pl-2">Cliquez sur &quot;Tout modifier...&quot; et confirmez</li>
                        </ol>
                        <p className="text-gray-600 dark:text-gray-400">
                            Preview sera à nouveau votre application PDF par défaut.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Résolution des Problèmes Courants",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">L'application n'apparaît pas dans la liste ?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Cliquez sur &quot;Autre...&quot; en bas de la liste. Naviguez vers votre dossier Applications et sélectionnez le lecteur PDF souhaité. Assurez-vous que l'app est correctement installée dans /Applications.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Le bouton &quot;Tout modifier&quot; est grisé ?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Assurez-vous d'avoir sélectionné une application différente de celle par défaut actuelle. Le bouton ne s'active que lorsque vous avez effectué un changement.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Les changements ne persistent pas après redémarrage ?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Essayez de réinitialiser Launch Services. Ouvrez Terminal et exécutez la commande de réinitialisation du système de lancement.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Les PDF s'ouvrent toujours dans Safari ?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">C'est un paramètre du navigateur, pas du système. Dans Safari : Safari → Réglages → Général → décochez &quot;Ouvrir les fichiers sûrs après téléchargement&quot;.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "browser-alternative",
                title: "Pourquoi Considérer les Outils PDF en Ligne ?",
                content: (
                    <>
                        <p className="mb-4">
                            Bien que les lecteurs PDF de bureau soient excellents pour la lecture, ils sont souvent limités pour <strong>modifier, fusionner, compresser ou convertir des PDF</strong>. C'est là que les outils en ligne excellent.
                        </p>
                        <div className="p-6 bg-gray-900 text-white rounded-2xl">
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <FileText size={20} className="text-canada-red" />
                                pdfcanada.ca — L'Alternative Respectueuse de la Vie Privée
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Au lieu d'installer des logiciels lourds, utilisez nos outils gratuits en ligne pour fusionner, diviser, compresser et convertir des PDF. Tout est traité localement dans votre navigateur — vos fichiers ne quittent jamais votre Mac.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/fr/merge-pdf" className="bg-canada-red hover:bg-canada-darkRed text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Fusionner PDF
                                </Link>
                                <Link href="/fr/compress-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Compresser PDF
                                </Link>
                                <Link href="/fr/split-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Diviser PDF
                                </Link>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Comment changer mon lecteur PDF par défaut sur Mac ?",
                a: "Clic droit sur n'importe quel fichier PDF, sélectionnez 'Lire les informations' (ou Cmd+I), développez 'Ouvrir avec', choisissez votre app préférée, puis cliquez sur 'Tout modifier...' et confirmez."
            },
            {
                q: "Comment revenir à Preview comme lecteur par défaut ?",
                a: "Suivez les mêmes étapes : Clic droit sur un PDF → Lire les informations → Ouvrir avec → sélectionnez Preview → Tout modifier. Preview redeviendra votre application PDF par défaut."
            },
            {
                q: "Pourquoi mon Mac n'ouvre pas les PDF dans Adobe Acrobat ?",
                a: "Vous devez définir Adobe Acrobat comme défaut via Lire les informations → Ouvrir avec → Tout modifier. Installer Adobe Acrobat n'en fait pas automatiquement l'application par défaut."
            },
            {
                q: "Puis-je définir différents lecteurs pour différents fichiers PDF ?",
                a: "Oui ! Si vous ne cliquez pas sur 'Tout modifier', le changement ne s'applique qu'à ce fichier spécifique. Cependant, gérer différents défauts par fichier peut devenir confus."
            },
            {
                q: "Comment faire de Chrome mon lecteur PDF par défaut sur Mac ?",
                a: "Dans Lire les informations → Ouvrir avec, cliquez sur 'Autre...', naviguez vers Applications, et sélectionnez Google Chrome. Cliquez sur 'Tout modifier' pour que Chrome ouvre tous les fichiers PDF."
            },
            {
                q: "Changer le lecteur PDF par défaut affecte-t-il l'édition PDF ?",
                a: "Oui. Différentes applications ont différentes capacités. Preview offre des annotations de base, Adobe Acrobat Reader ajoute le remplissage de formulaires et les signatures, tandis que PDF Expert offre l'édition complète."
            },
            {
                q: "Pourquoi les PDF s'ouvrent-ils toujours dans Safari ?",
                a: "Safari a sa propre gestion des PDF. Allez dans Safari → Réglages → Général et décochez 'Ouvrir les fichiers sûrs après téléchargement'. Safari téléchargera alors les PDF au lieu de les afficher."
            },
            {
                q: "Y a-t-il un raccourci clavier pour changer l'app PDF par défaut ?",
                a: "Pas directement, mais vous pouvez rapidement accéder à Lire les informations en sélectionnant un fichier PDF et en appuyant sur Cmd+I. De là, changez le paramètre 'Ouvrir avec' et cliquez sur 'Tout modifier'."
            }
        ],

        ctaTitle: "Besoin de Modifier des PDF Sans Installer de Logiciel ?",
        ctaButton: "Essayez Nos Outils PDF Gratuits",
        ctaSubtext: "Fusionner, compresser, diviser et convertir — tout dans votre navigateur."
    },
    pt: {
        seo: {
            title: `Como Alterar o Visualizador de PDF Padrão no Mac | Guia ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda como alterar seu visualizador de PDF padrão no Mac do Preview para Adobe Acrobat, Chrome ou qualquer outro leitor. Instruções passo a passo para macOS Sonoma, Ventura e anteriores.`
        },
        h1: `Como Alterar o Visualizador de PDF Padrão no Mac (${CURRENT_YEAR})`,
        subtitle: "Defina Adobe Acrobat, Chrome ou qualquer leitor de PDF como padrão — passo a passo para todas as versões do macOS.",

        intro: (
            <>
                Por padrão, o macOS usa o <strong>Preview</strong> para abrir arquivos PDF. Embora o Preview seja um visualizador básico capaz, você pode preferir um aplicativo diferente como <strong>Adobe Acrobat Reader</strong>, <strong>PDF Expert</strong>, ou até mesmo seu navegador web para visualizar PDFs.
                <br /><br />
                Este guia mostra exatamente como alterar seu visualizador de PDF padrão no Mac usando o método <strong>Obter Informações</strong> — a maneira mais confiável que funciona em todas as versões do macOS, incluindo Sonoma, Ventura, Monterey e anteriores.
            </>
        ),

        sections: [
            {
                id: "method-get-info",
                title: "Método: Alterar Visualizador de PDF Usando Obter Informações",
                content: (
                    <>
                        <p className="mb-4">
                            Este é o método oficial da Apple e funciona em <strong>todas as versões do macOS</strong>. Ele altera permanentemente qual aplicativo abre arquivos PDF.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Encontre qualquer arquivo PDF</strong> no seu Mac. Você pode usar o Finder para navegar até uma pasta contendo um PDF, ou procurar por um usando o Spotlight (Cmd + Espaço, depois digite &quot;.pdf&quot;).
                            </li>
                            <li className="pl-2">
                                <strong>Clique com o botão direito (ou Control-clique)</strong> no arquivo PDF para abrir o menu de contexto.
                            </li>
                            <li className="pl-2">
                                <strong>Selecione &quot;Obter Informações&quot;</strong> no menu. Você também pode selecionar o arquivo e pressionar <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>.
                            </li>
                            <li className="pl-2">
                                <strong>Expanda a seção &quot;Abrir com&quot;</strong> clicando no triângulo ao lado (se estiver recolhido).
                            </li>
                            <li className="pl-2">
                                <strong>Clique no menu suspenso</strong> mostrando o aplicativo padrão atual (provavelmente Preview) e selecione seu visualizador de PDF preferido na lista — como Adobe Acrobat Reader, PDF Expert, Skim ou seu navegador.
                            </li>
                            <li className="pl-2">
                                <strong>Clique em &quot;Alterar Tudo...&quot;</strong> — este é o passo crucial! Este botão aplica sua escolha a <em>todos</em> os arquivos PDF, não apenas a este.
                            </li>
                            <li className="pl-2">
                                <strong>Confirme a alteração</strong> clicando em &quot;Continuar&quot; na caixa de diálogo que aparece.
                            </li>
                        </ol>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                            <p className="text-green-800 dark:text-green-200">
                                <strong>Pronto!</strong> A partir de agora, clicar duas vezes em qualquer arquivo PDF o abrirá no aplicativo escolhido em vez do Preview.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "popular-viewers",
                title: "Visualizadores de PDF Populares para Mac",
                content: (
                    <>
                        <p className="mb-4">Aqui estão os visualizadores de PDF mais populares para Mac e seus pontos fortes:</p>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Preview (Integrado)</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">O visualizador padrão da Apple. Rápido, leve e lida com anotações básicas. Melhor para visualização rápida e marcação simples.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Gratuito • Pré-instalado</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Adobe Acrobat Reader</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Padrão da indústria. Perfeito para visualizar PDFs exatamente como pretendido, preencher formulários e adicionar assinaturas.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Versão gratuita disponível</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">PDF Expert</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">App nativo do Mac com edição avançada. Ótimo para usuários intensivos de PDF que precisam editar texto, mesclar arquivos e anotar extensivamente.</p>
                                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Pago • Compra única</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Google Chrome / Microsoft Edge</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Visualização de PDF integrada nos navegadores. Conveniente se você acessa PDFs frequentemente da web.</p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Gratuito</span>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skim</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Leitor de código aberto projetado para artigos acadêmicos. Recursos como anotações tornam ideal para pesquisadores.</p>
                                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Gratuito • Código Aberto</span>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "switch-back-preview",
                title: "Como Voltar para o Preview",
                content: (
                    <>
                        <p className="mb-4">
                            Mudou de ideia? Veja como restaurar o Preview como seu visualizador de PDF padrão:
                        </p>
                        <ol className="list-decimal pl-5 space-y-3 mb-6">
                            <li className="pl-2">Clique com o botão direito em qualquer arquivo PDF</li>
                            <li className="pl-2">Selecione &quot;Obter Informações&quot; (ou pressione <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Cmd + I</kbd>)</li>
                            <li className="pl-2">Na seção &quot;Abrir com&quot;, selecione <strong>Preview</strong> no menu suspenso</li>
                            <li className="pl-2">Clique em &quot;Alterar Tudo...&quot; e confirme</li>
                        </ol>
                        <p className="text-gray-600 dark:text-gray-400">
                            O Preview será novamente seu aplicativo de PDF padrão.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Resolução de Problemas Comuns",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">O aplicativo não aparece na lista?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Clique em &quot;Outro...&quot; na parte inferior da lista. Navegue até sua pasta Aplicativos e selecione o visualizador de PDF desejado. Certifique-se de que o app esteja instalado corretamente em /Applications.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">O botão &quot;Alterar Tudo&quot; está desativado?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Certifique-se de ter selecionado um aplicativo diferente do padrão atual. O botão só é ativado quando você faz uma alteração.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">As alterações não persistem após reiniciar?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Tente redefinir o Launch Services via Terminal.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">PDFs ainda abrem no Safari?</h4>
                            <p className="text-yellow-800 dark:text-yellow-300">Isso é uma configuração do navegador. No Safari: Ajustes → Geral → desmarque &quot;Abrir arquivos seguros após download&quot;.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "browser-alternative",
                title: "Por que Considerar Ferramentas de PDF Baseadas em Navegador?",
                content: (
                    <>
                        <p className="mb-4">
                            Embora os visualizadores de PDF desktop sejam ótimos para leitura, eles geralmente são limitados para <strong>editar, mesclar, comprimir ou converter PDFs</strong>. É aí que as ferramentas online brilham.
                        </p>
                        <div className="p-6 bg-gray-900 text-white rounded-2xl">
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <FileText size={20} className="text-canada-red" />
                                pdfcanada.ca — A Alternativa Focada em Privacidade
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Em vez de instalar softwares pesados, use nossas ferramentas gratuitas online para mesclar, dividir, comprimir e converter PDFs. Tudo é processado localmente no seu navegador — seus arquivos nunca saem do seu Mac.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/pt/merge-pdf" className="bg-canada-red hover:bg-canada-darkRed text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Mesclar PDF
                                </Link>
                                <Link href="/pt/compress-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Comprimir PDF
                                </Link>
                                <Link href="/pt/split-pdf" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Dividir PDF
                                </Link>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Como altero meu visualizador de PDF padrão no Mac?",
                a: "Clique com o botão direito em qualquer PDF, selecione 'Obter Informações' (ou Cmd+I), expanda 'Abrir com', escolha seu app preferido e clique em 'Alterar Tudo...' e confirme."
            },
            {
                q: "Como volto a usar o Preview como padrão?",
                a: "Siga os mesmos passos: Clique direito no PDF → Obter Informações → Abrir com → selecione Preview → Alterar Tudo."
            },
            {
                q: "Por que meu Mac não abre PDFs no Adobe Acrobat?",
                a: "Você precisa definir o Adobe Acrobat como padrão via Obter Informações → Abrir com → Alterar Tudo. Apenas instalar não o torna padrão automaticamente."
            },
            {
                q: "Posso definir visualizadores diferentes para arquivos diferentes?",
                a: "Sim! Se você pular o 'Alterar Tudo', a mudança se aplica apenas àquele arquivo específico."
            },
            {
                q: "Como tornar o Chrome meu visualizador de PDF padrão?",
                a: "Em Obter Informações → Abrir com, clique em 'Outro...', navegue até Aplicativos e selecione Google Chrome. Clique em 'Alterar Tudo'."
            },
            {
                q: "Alterar o visualizador afeta a edição de PDF?",
                a: "Sim. O Preview tem anotações básicas, o Adobe Acrobat Reader permite preencher formulários, enquanto o PDF Expert oferece edição completa."
            },
            {
                q: "Por que os PDFs ainda abrem no Safari?",
                a: "O Safari tem seu próprio manipulador. Vá em Ajustes → Geral e desmarque 'Abrir arquivos seguros após download'."
            },
            {
                q: "Existe atalho de teclado para mudar o app padrão?",
                a: "Não diretamente, mas você pode acessar rapidamente Obter Informações com Cmd+I após selecionar o arquivo."
            }
        ],

        ctaTitle: "Precisa Editar PDFs Sem Instalar Software?",
        ctaButton: "Experimente Nossas Ferramentas Gratuitas",
        ctaSubtext: "Mesclar, comprimir, dividir e converter — tudo no seu navegador."
    }
});

export const ChangePdfViewerMacGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": lang === 'fr' ? "Trouver un fichier PDF" : "Find a PDF file", "text": lang === 'fr' ? "Localisez n'importe quel fichier PDF sur votre Mac." : "Locate any PDF file on your Mac." },
                { "@type": "HowToStep", "position": 2, "name": lang === 'fr' ? "Ouvrir Lire les informations" : "Open Get Info", "text": lang === 'fr' ? "Clic droit sur le fichier et sélectionnez 'Lire les informations' ou appuyez sur Cmd+I." : "Right-click the file and select 'Get Info' or press Cmd+I." },
                { "@type": "HowToStep", "position": 3, "name": lang === 'fr' ? "Sélectionner une nouvelle app" : "Select new app", "text": lang === 'fr' ? "Dans 'Ouvrir avec', choisissez votre lecteur PDF préféré dans le menu déroulant." : "In 'Open with', choose your preferred PDF viewer from the dropdown." },
                { "@type": "HowToStep", "position": 4, "name": lang === 'fr' ? "Appliquer à tous les PDF" : "Apply to all PDFs", "text": lang === 'fr' ? "Cliquez sur 'Tout modifier...' et confirmez pour changer le défaut pour tous les fichiers PDF." : "Click 'Change All...' and confirm to change the default for all PDF files." }
            ]
        },
        {
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2025-01-02",
            "dateModified": "2025-01-02",
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
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/change-pdf-viewer-mac"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment changer le lecteur PDF par défaut sur Mac ?" : "How do I change the default PDF viewer on Mac?",
                    answer: lang === 'fr'
                        ? "Clic droit sur un fichier PDF, sélectionnez 'Lire les informations' (Cmd+I), développez 'Ouvrir avec', choisissez votre app préférée, puis cliquez sur 'Tout modifier' et confirmez."
                        : "Right-click any PDF file, select 'Get Info' (Cmd+I), expand 'Open with', choose your preferred app, then click 'Change All' and confirm.",
                    tool: "macOS Get Info",
                    steps: lang === 'fr'
                        ? ["Trouver un fichier PDF", "Clic droit → Lire les informations", "Ouvrir avec → Sélectionner l'app", "Cliquer sur Tout modifier"]
                        : ["Find any PDF file", "Right-click → Get Info", "Open with → Select app", "Click Change All"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Changer Lecteur PDF Mac' : (lang === 'pt' ? 'Alterar Visualizador PDF Mac' : 'Change PDF Viewer Mac'), path: lang === 'fr' ? '/fr/guides/change-pdf-viewer-mac' : (lang === 'pt' ? '/pt/guides/change-pdf-viewer-mac' : '/guides/change-pdf-viewer-mac') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Apple size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Changer Lecteur PDF Mac' : (lang === 'pt' ? 'Alterar Visualizador PDF Mac' : 'Change PDF Viewer Mac'), href: '#' }
                ]}
            >
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {t.sections && t.sections.map((section: any) => (
                        <section key={section.id}>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <Folder className="mx-auto text-canada-red mb-2" size={24} />
                            <span className="text-xs font-bold">{lang === 'fr' ? 'Lire les infos' : 'Get Info'}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <Settings className="mx-auto text-canada-red mb-2" size={24} />
                            <span className="text-xs font-bold">{lang === 'fr' ? 'Ouvrir avec' : 'Open With'}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <MousePointer className="mx-auto text-canada-red mb-2" size={24} />
                            <span className="text-xs font-bold">{lang === 'fr' ? 'Tout modifier' : 'Change All'}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                            <CheckCircle className="mx-auto text-canada-red mb-2" size={24} />
                            <span className="text-xs font-bold">{lang === 'fr' ? 'Terminé !' : 'Done!'}</span>
                        </div>
                    </div>

                    <section className="bg-canada-red p-10 rounded-3xl text-center text-white">
                        <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}`}
                            className="bg-white text-canada-red px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block"
                        >
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 text-white/80">{t.ctaSubtext}</p>
                    </section>

                    {t.faq && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6">{lang === 'fr' ? "Foire Aux Questions" : "Frequently Asked Questions"}</h2>
                            <div className="space-y-4">
                                {t.faq.map((item: any, i: number) => (
                                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{item.q}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <AISnapshot
                        question={lang === 'fr' ? "Comment changer le lecteur PDF par défaut sur Mac ?" : "How do I change the default PDF viewer on Mac?"}
                        answer={lang === 'fr'
                            ? "Clic droit sur un fichier PDF, sélectionnez 'Lire les informations' (Cmd+I), développez 'Ouvrir avec', choisissez votre app préférée, puis cliquez sur 'Tout modifier' et confirmez."
                            : "Right-click any PDF file, select 'Get Info' (Cmd+I), expand 'Open with', choose your preferred app, then click 'Change All' and confirm."}
                        toolName="macOS Get Info"
                        steps={lang === 'fr'
                            ? ["Trouver un fichier PDF", "Clic droit → Lire les informations", "Ouvrir avec → Sélectionner l'app", "Cliquer sur Tout modifier"]
                            : ["Find any PDF file", "Right-click → Get Info", "Open with → Select app", "Click Change All"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/change-pdf-viewer-mac" category="all" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
