'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GripVertical, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart, ArrowRight } from 'lucide-react';
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
            title: `How to Merge PDF Files | Free & Secure ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to combine multiple PDF files into one securely. Our ${CURRENT_YEAR} guide shows you how to merge PDFs locally in your browser without uploads. Fast & Private.`
        },
        h1: `How to Merge PDF Files into One (${CURRENT_YEAR} Guide)`,
        subtitle: "The easiest way to combine multiple documents into a single, organized PDF file.",

        intro: (
            <>
                <Image src="/images/guides/merge-pdf-guide.png" alt="Merging PDF files illustration" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                Keeping track of multiple related PDF files can be a nightmare. Whether it's invoices, receipts, or chapters of a report, <strong>merging multiple PDF files into one</strong> keeps everything organized and professional.
                <br /><br />
                Our merge tool lets you combine several PDFs into one, reorder them exactly how you want, and save them as a single document—all without needing Adobe Acrobat or uploading anything to a server.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Combining PDFs",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Select Files</strong>: Click to upload or drag multiple PDF files into our <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">Merge PDF tool</Link>. You can select multiple files at once using Ctrl (Windows) or Cmd (Mac) when browsing.
                        </li>
                        <li className="pl-2">
                            <strong>Preview Thumbnails</strong> : Once uploaded, you'll see thumbnail previews of each file's first page, making it easy to identify which document is which.
                        </li>
                        <li className="pl-2">
                            <strong>Reorder</strong>: Drag and drop the files to arrange them in the correct order. The file at the top will become the first pages of your merged document.
                        </li>
                        <li className="pl-2">
                            <strong>Remove Unwanted Files</strong>: Made a mistake? Click the X button on any file to remove it from the merge queue without starting over.
                        </li>
                        <li className="pl-2">
                            <strong>Merge</strong>: Click the &quot;Merge PDF&quot; button to combine them instantly. Processing happens in your browser, so larger files may take a few seconds.
                        </li>
                        <li className="pl-2">
                            <strong>Download</strong>: Save your new, single document. The merged file will retain the original quality of all source documents.
                        </li>
                    </ol>
                )
            },
            {
                id: "privacy-audit",
                title: "Privacy Audit: Where do your files go?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8">
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
                                    <h5 className="font-bold text-gray-900 dark:text-white">Client-Side Processing</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Our WebAssembly engine executes the merge operation using your computer&apos;s CPU. <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline">0 bytes are sent to any server.</Link></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Automatic Wipe</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Once you close the tab, the browser&apos;s memory is cleared. No trace of your document remains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "Real-World Use Cases for Merging PDFs",
                content: (
                    <div className="space-y-4">
                        <p><strong>Tax Season Preparation</strong>: Combine all your T4 slips, receipts, charitable donation receipts, and expense reports into one organized PDF for easy submission to the CRA (Canada Revenue Agency) or your accountant.</p>
                        <p><strong>Job Applications</strong>: Merge your resume, cover letter, reference letters, and portfolio samples into a single professional package that hiring managers can easily review.</p>
                        <p><strong>Legal Documentation</strong>: Assemble all contracts, amendments, supporting documents, and correspondence into one complete legal file for court submissions or record-keeping.</p>
                        <p><strong>Academic Work</strong>: Combine research papers, bibliography, appendices, and supporting charts into a single thesis or dissertation document.</p>
                        <p><strong>Business Proposals</strong>: Merge executive summary, project timeline, budget breakdown, and team bios into one cohesive proposal document.</p>
                        <p><strong>Real Estate Transactions</strong>: Consolidate inspection reports, property disclosures, appraisals, and closing documents into one comprehensive file.</p>
                        <p><strong>Medical Records</strong> : Combine test results, doctor's notes, prescription history, and insurance forms for complete medical documentation.</p>
                    </div>
                )
            },
            {
                id: "tips",
                title: "Pro Tips for Merging",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Order Matters</h3>
                            <p className="text-sm text-blue-700">The file at the top of the list will be the first pages of your new PDF. Make sure to arrange them chronologically or logically before merging.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Compress After Merging</h3>
                            <p className="text-sm text-green-700">Merging many files can create a large PDF. Use our <Link href={`/${lang}/compress-pdf`} className="underline">Compress tool</Link> afterwards if the file is too big to email.</p>
                        </div>
                        <div className="p-4 border border-purple-200 bg-purple-50 rounded-xl">
                            <h3 className="font-bold text-purple-800 mb-2">Rename Before Uploading</h3>
                            <p className="text-sm text-purple-700">Give your source files descriptive names (like &quot;01-Cover.pdf&quot;, &quot;02-Resume.pdf&quot;) to make ordering easier during the merge process.</p>
                        </div>
                        <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">Preview First Pages</h3>
                            <p className="text-sm text-orange-700">Use the thumbnail previews to verify each file is correct before merging. This saves time compared to opening each merged PDF section separately.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "platforms",
                title: "How to Merge PDF Files on Mac and Windows",
                content: (
                    <div className="space-y-4">
                        <p>One of the most common questions is how to merge files depending on your device. Whether you are using a <strong>Macbook Air</strong>, a <strong>Windows 10/11 desktop</strong>, or a mobile phone, our tool works universally.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white">On Windows:</h4>
                        <p>No need to search for &quot;how to merge pdf files windows&quot; software. Just use our web-based tool. It uses your browser&apos;s local memory to process the merge, making it faster than many installed apps.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white">On Mac:</h4>
                        <p>While you can use Preview, many people search for &quot;how to merge pdf files on a mac&quot; for a more intuitive drag-and-drop experience. Our tool provides a clear visual interface that works perfectly in Safari or Chrome on macOS.</p>
                    </div>
                )
            },
            {
                id: "no-acrobat",
                title: "How to Merge PDF Files Without Acrobat",
                content: (
                    <div className="space-y-4">
                        <p>Many users want to know <strong>how to merge pdf documents without Adobe Acrobat</strong> because of the expensive subscription costs. Our tool is a 100% free alternative that preserves professional quality.</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Free Forever:</strong> No &quot;Pro&quot; version required to combine files.</li>
                            <li><strong>No Sign-up:</strong> Start merging immediately without an account.</li>
                            <li><strong>Privacy:</strong> Unlike many &quot;Merge PDF Online&quot; tools, we don&apos;t ever see your files.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Best Practices for Professional Results",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Consistent Orientation</strong>: Ensure all PDFs have the same orientation (portrait or landscape) before merging, or use our <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline">Rotate tool</Link> first to standardize them.</li>
                        <li><strong>Similar Page Sizes</strong>: While you can merge PDFs of different sizes, having consistent page dimensions (like all Letter or all A4) creates a more professional-looking result.</li>
                        <li><strong>Quality Check</strong>: Review each source PDF individually before merging to ensure there are no blank pages, corrupted content, or unwanted materials.</li>
                        <li><strong>Logical Organization</strong>: Arrange documents in a logical flow - typically chronological order, or from general information to specific details.</li>
                        <li><strong>File Size Awareness</strong>: Be mindful of email attachment limits (typically 10-25MB). If your merged file exceeds this, consider compression or splitting into multiple files.</li>
                        <li><strong>Backup Originals</strong>: Always keep copies of your original separate PDFs before merging, in case you need to make changes later.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Common Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Merge button is grayed out</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: You need at least 2 PDF files to merge. Upload additional files and the button will activate.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Processing is very slow</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Large files or many files can take time to process locally. Try closing other browser tabs to free up memory, or merge in smaller batches.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Merged PDF is too large to email</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Use our <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-semibold">Compress PDF tool</Link> to reduce the file size while maintaining reasonable quality.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Pages are in wrong orientation</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Use our <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-semibold">Rotate PDF tool</Link> on the merged file or on individual source files before merging.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "How do I merge 2 pdf files into 1?",
                a: "Simply upload both files to our tool, arrange them in the order you want, and click 'Merge PDF'. This is the fastest way to combine two documents into a single file for free."
            },
            {
                q: "How to merge multiple pdf files into one pdf using this tool?",
                a: "You can upload up to 50 files at once. Our grid view lets you see all your documents, reorder them by dragging, and then join them into one continuous PDF file with a single click."
            },
            {
                q: "Is there a limit to how many files I can merge?",
                a: "No! You can add as many files as your browser memory allows. We recommend doing 10-20 at a time for the best performance. For very large batches (50+ files), consider merging in groups and then combining those merged files."
            },
            {
                q: "Can I merge password-protected files?",
                a: "You'll need to unlock them first. If you have the password, you can use a PDF viewer to save a copy without the password before merging, or use our Unlock PDF tool to remove the password protection."
            },
            {
                q: "Will merging reduce the quality of my PDFs?",
                a: "No. Our merge tool preserves 100% of the original quality. Text remains selectable, images stay sharp, and all formatting is maintained exactly as it was in the source files."
            },
            {
                q: "Can I merge PDFs of different page sizes?",
                a: "Yes! You can merge PDFs with different page sizes (like Letter and A4, or portrait and landscape). Each page will retain its original dimensions in the merged document."
            },
            {
                q: "What happens to bookmarks and links when I merge?",
                a: "Bookmarks and internal links from the original PDFs are preserved in the merged file. However, bookmark organization may need adjustment as all bookmarks are combined at the root level."
            },
            {
                q: "How large can my merged PDF be?",
                a: "The size limit depends on your device's available memory. Most modern computers can handle merged PDFs up to several hundred megabytes. If you're experiencing issues with very large files, try merging fewer files at once."
            },
            {
                q: "Can I merge PDFs on my phone or tablet?",
                a: "Yes! Our merge tool works on all modern browsers, including mobile devices. However, processing large files on mobile may be slower due to limited memory compared to desktop computers."
            },
            {
                q: "Is there a way to add page numbers to the merged PDF?",
                a: "Our merge tool combines files as-is. To add page numbers, you would need to use a separate PDF editing tool after merging. Consider adding page numbers to individual files before merging for better control."
            },
            {
                q: "Can I search for text across all merged files?",
                a: "Yes! Once combined into a single PDF, you can use the standard search function (Ctrl+F or Cmd+F) to find words across all the merged pages instantly. Perfect for research and legal discovery."
            }
        ],

        faqHeading: "Frequently Asked Questions",
        quickAnswer: {
            question: "How do I merge PDF files?",
            answer: "Use pdfcanada.ca's Merge PDF tool. Select multiple files, arrange them in order, and click 'Merge PDF'. It's free and secure.",
            tool: "Merge PDF Tool",
            steps: ["Select PDF files", "Reorder pages", "Download merged PDF"]
        },

        ctaTitle: "Ready to Get Organized?",
        ctaButton: "Merge PDFs Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Merge Locally?",
        whyDesc: "Your files are merged directly in your browser. This means they are never sent to a remote server, ensuring confidential documents stay confidential."
    },
    fr: {
        seo: {
            title: `Comment Fusionner des PDF | Guide Sécurisé ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Découvrez comment fusionner plusieurs PDF en toute sécurité dans votre navigateur avec notre guide ${CURRENT_YEAR}. Combinez vos documents sans téléchargement—100% privé.`
        },
        h1: "Comment Fusionner des Fichiers PDF : Le Guide Complet",
        subtitle: "Combinez plusieurs documents PDF en un seul fichier organisé et professionnel.",

        intro: (
            <>
                Gérer plusieurs fichiers PDF peut être un cauchemar. Qu'il s'agisse de factures pour votre déclaration de revenus, de reçus de dépenses, ou de chapitres d'un rapport, <strong>les fusionner en un seul PDF</strong> permet de rester organisé et professionnel.
                <br /><br />
                Notre outil de fusion vous permet de combiner un nombre illimité de fichiers, de les réorganiser exactement comme vous le souhaitez, et de les enregistrer en un seul document — le tout sans jamais télécharger vos fichiers sur un serveur externe.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Comment Fusionner vos PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Sélectionnez vos fichiers</strong> : Cliquez pour télécharger ou faites glisser plusieurs fichiers PDF dans notre <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">outil de fusion PDF</Link>. Vous pouvez sélectionner plusieurs fichiers en une fois avec Ctrl (Windows) ou Cmd (Mac).</li>
                        <li className="pl-2"><strong>Aperçus miniatures</strong> : Une fois téléchargés, vous verrez des miniatures de la première page de chaque fichier, facilitant l'identification de chaque document.</li>
                        <li className="pl-2"><strong>Réorganisez l'ordre</strong> : Glissez et déposez les fichiers pour les arranger dans l'ordre souhaité. Le fichier en haut deviendra les premières pages de votre document fusionné.</li>
                        <li className="pl-2"><strong>Retirez les fichiers indésirables</strong> : Erreur ? Cliquez sur le bouton X sur n'importe quel fichier pour le retirer de la file sans tout recommencer.</li>
                        <li className="pl-2"><strong>Fusionnez</strong> : Cliquez sur le bouton &quot;Fusionner PDF&quot; pour combiner instantanément tous vos fichiers. Le traitement se fait dans votre navigateur, donc les fichiers volumineux peuvent prendre quelques secondes.</li>
                        <li className="pl-2"><strong>Téléchargez</strong> : Enregistrez votre nouveau document unique. Le fichier fusionné conservera la qualité originale de tous les documents sources.</li>
                    </ol>
                )
            },
            {
                id: "privacy-audit",
                title: "Audit de Confidentialité : Où vont vos fichiers ?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Shield className="text-green-500" size={24} />
                            Vérification du Cycle de Vie des Données (<Link href={`/${lang}/guides/private-pdf-tools`} className="hover:text-green-500 underline">En savoir plus</Link>)
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
                                    <h5 className="font-bold text-gray-900 dark:text-white">Traitement Client-Side</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Our WebAssembly engine executes the merge operation using your computer&apos;s CPU. <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline">0 bytes are sent to any server.</Link></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Effacement Automatique</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Une fois que vous fermez l&apos;onglet, la mémoire du navigateur est effacée. Aucune trace de votre document ne reste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Réels pour la Fusion de PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Préparation de la Saison des Impôts</strong> : Combinez tous vos feuillets T4, reçus, reçus de dons de charité et rapports de dépenses en un seul PDF organisé pour une soumission facile à l'ARC (Agence du revenu du Canada) ou à votre comptable.</p>
                        <p><strong>Candidatures d'Emploi</strong> : Fusionnez votre CV, lettre de motivation, lettres de référence et échantillons de portfolio en un seul dossier professionnel que les recruteurs peuvent facilement consulter.</p>
                        <p><strong>Documentation Juridique</strong> : Assemblez tous les contrats, amendements, documents justificatifs et correspondance en un seul dossier juridique complet pour les soumissions au tribunal ou la tenue de dossiers.</p>
                        <p><strong>Travaux Académiques</strong> : Combinez articles de recherche, bibliographie, annexes et graphiques de support en un seul document de thèse ou de mémoire.</p>
                        <p><strong>Propositions Commerciales</strong> : Fusionnez le résumé exécutif, le calendrier du projet, la répartition budgétaire et les biographies de l'équipe en un seul document de proposition cohérent.</p>
                        <p><strong>Transactions Immobilières</strong> : Consolidez rapports d'inspection, divulgations de propriété, évaluations et documents de clôture en un seul fichier complet.</p>
                        <p><strong>Dossiers Médicaux</strong> : Combinez résultats de tests, notes du médecin, historique de prescriptions et formulaires d'assurance pour une documentation médicale complète.</p>
                    </div>
                )
            },
            {
                id: "tips",
                title: "Conseils de Pro pour la Fusion",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">L'ordre compte</h3>
                            <p className="text-sm text-blue-700">Le fichier en haut de la liste sera les premières pages de votre nouveau PDF. Assurez-vous de les organiser de manière chronologique ou logique avant de fusionner.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Compressez après fusion</h3>
                            <p className="text-sm text-green-700">Fusionner de nombreux fichiers peut créer un PDF volumineux. Utilisez notre <Link href={`/${lang}/compress-pdf`} className="underline">outil de compression</Link> par la suite si le fichier est trop gros pour être envoyé par courriel.</p>
                        </div>
                        <div className="p-4 border border-purple-200 bg-purple-50 rounded-xl">
                            <h3 className="font-bold text-purple-800 mb-2">Renommez avant de télécharger</h3>
                            <p className="text-sm text-purple-700">Donnez à vos fichiers sources des noms descriptifs (comme &quot;01-Couverture.pdf&quot;, &quot;02-CV.pdf&quot;) pour faciliter la mise en ordre pendant le processus de fusion.</p>
                        </div>
                        <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">Prévisualisez les premières pages</h3>
                            <p className="text-sm text-orange-700">Utilisez les aperçus miniatures pour vérifier que chaque fichier est correct avant de fusionner. Cela économise du temps comparé à l'ouverture de chaque section PDF fusionnée séparément.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Meilleures Pratiques pour des Résultats Professionnels",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Orientation cohérente</strong> : Assurez-vous que tous les PDF ont la même orientation (portrait ou paysage) avant de fusionner, ou utilisez d'abord notre <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline">outil de rotation</Link> pour les standardiser.</li>
                        <li><strong>Tailles de page similaires</strong> : Bien que vous puissiez fusionner des PDF de tailles différentes, avoir des dimensions de page cohérentes (comme tout Lettre ou tout A4) crée un résultat plus professionnel.</li>
                        <li><strong>Vérification de qualité</strong> : Examinez chaque PDF source individuellement avant de fusionner pour vous assurer qu'il n'y a pas de pages blanches, de contenu corrompu ou de matériaux indésirables.</li>
                        <li><strong>Organisation logique</strong> : Organisez les documents dans un flux logique - généralement par ordre chronologique, ou de l'information générale aux détails spécifiques.</li>
                        <li><strong>Conscience de la taille du fichier</strong> : Soyez conscient des limites de pièces jointes par courriel (généralement 10-25 Mo). Si votre fichier fusionné dépasse cette limite, envisagez la compression ou la division en plusieurs fichiers.</li>
                        <li><strong>Sauvegarde des originaux</strong> : Conservez toujours des copies de vos PDF séparés originaux avant de fusionner, au cas où vous devriez apporter des modifications ultérieurement.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problèmes Courants et Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le bouton de fusion est grisé</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Vous avez besoin d'au moins 2 fichiers PDF pour fusionner. Téléchargez des fichiers supplémentaires et le bouton s'activera.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement est très lent</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les fichiers volumineux ou nombreux peuvent prendre du temps à traiter localement. Essayez de fermer d'autres onglets du navigateur pour libérer de la mémoire, ou fusionnez par plus petits lots.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le PDF fusionné est trop volumineux pour être envoyé par courriel</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Utilisez notre <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-semibold">outil de compression PDF</Link> pour réduire la taille du fichier tout en maintenant une qualité raisonnable.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les pages ont une mauvaise orientation</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Utilisez notre <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-semibold">outil de rotation PDF</Link> sur le fichier fusionné ou sur les fichiers sources individuels avant de fusionner.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite au nombre de fichiers que je peux fusionner ?",
                a: "Non ! Vous pouvez ajouter autant de fichiers que la mémoire de votre navigateur le permet. Nous recommandons de fusionner 10-20 fichiers à la fois pour des performances optimales. Pour de très gros lots (50+ fichiers), envisagez de fusionner par groupes puis de combiner ces fichiers fusionnés."
            },
            {
                q: "Puis-je fusionner des fichiers protégés par mot de passe ?",
                a: "Vous devrez d'abord les déverrouiller. Si vous avez le mot de passe, vous pouvez utiliser un lecteur PDF pour enregistrer une copie sans mot de passe avant de fusionner, ou utilisez notre outil de déverrouillage PDF pour retirer la protection."
            },
            {
                q: "La fusion réduira-t-elle la qualité de mes PDF ?",
                a: "Non. Notre outil de fusion préserve 100% de la qualité originale. Le texte reste sélectionnable, les images restent nettes, et tout le formatage est maintenu exactement comme dans les fichiers sources."
            },
            {
                q: "Puis-je fusionner des PDF de tailles de page différentes ?",
                a: "Oui ! Vous pouvez fusionner des PDF avec différentes tailles de page (comme Lettre et A4, ou portrait et paysage). Chaque page conservera ses dimensions originales dans le document fusionné."
            },
            {
                q: "Qu'advient-il des signets et des liens lorsque je fusionne ?",
                a: "Les signets et les liens internes des PDF originaux sont préservés dans le fichier fusionné. Cependant, l'organisation des signets peut nécessiter un ajustement car tous les signets sont combinés au niveau racine."
            },
            {
                q: "Quelle peut être la taille de mon PDF fusionné ?",
                a: "La limite de taille dépend de la mémoire disponible de votre appareil. La plupart des ordinateurs modernes peuvent gérer des PDF fusionnés jusqu'à plusieurs centaines de mégaoctets. Si vous rencontrez des problèmes avec de très gros fichiers, essayez de fusionner moins de fichiers à la fois."
            },
            {
                q: "Puis-je fusionner des PDF sur mon téléphone ou ma tablette ?",
                a: "Oui ! Notre outil de fusion fonctionne sur tous les navigateurs modernes, y compris les appareils mobiles. Cependant, le traitement de gros fichiers sur mobile peut être plus lent en raison de la mémoire limitée par rapport aux ordinateurs de bureau."
            },
            {
                q: "Y a-t-il un moyen d'ajouter des numéros de page au PDF fusionné ?",
                a: "Notre outil de fusion combine les fichiers tels quels. Pour ajouter des numéros de page, vous auriez besoin d'utiliser un outil d'édition PDF séparé après la fusion. Envisagez d'ajouter des numéros de page aux fichiers individuels avant de fusionner pour un meilleur contrôle."
            },
            {
                q: "Puis-je rechercher du texte dans l'ensemble des fichiers fusionnés ?",
                a: "Oui ! Une fois combinés en un seul PDF, vous pouvez utiliser la fonction de recherche standard (Ctrl+F ou Cmd+F) pour trouver des mots dans toutes les pages instantanément. Idéal pour la recherche et les dossiers juridiques."
            }
        ],

        faqHeading: "Questions Fréquentes",
        quickAnswer: {
            question: "Comment fusionner des fichiers PDF ?",
            answer: "Utilisez l'outil Fusionner PDF de pdfcanada.ca. Sélectionnez plusieurs fichiers, organisez-les et cliquez sur 'Fusionner'. C'est gratuit et sécurisé.",
            tool: "Outil Fusionner PDF",
            steps: ["Sélectionnez les fichiers PDF", "Réorganisez les pages", "Téléchargez le PDF fusionné"]
        },

        ctaTitle: "Prêt à Vous Organiser ?",
        ctaButton: "Fusionner PDF Maintenant",
        ctaSubtext: "Gratuit, Sécurisé et Canadien.",
        whyTitle: "Pourquoi la Fusion Locale ?",
        whyDesc: "Vos fichiers sont fusionnés directement dans votre navigateur. Cela signifie qu'ils ne sont jamais envoyés sur un serveur distant, garantissant que vos documents confidentiels restent confidentiels."
    },
    pt: {
        seo: {
            title: `Como Juntar Arquivos PDF | Guia Gratuito e Seguro ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda como combinar vários arquivos PDF em um só com segurança. Nosso guia de ${CURRENT_YEAR} mostra como juntar PDFs localmente no seu navegador sem uploads. Rápido e Privado.`
        },
        h1: `Como Juntar Arquivos PDF em Um (Guia ${CURRENT_YEAR})`,
        subtitle: "A maneira mais fácil de combinar vários documentos em um único arquivo PDF organizado.",

        intro: (
            <>
                <Image src="/images/guides/merge-pdf-guide.png" alt="Ilustração de juntar arquivos PDF" width={800} height={450} className="w-full h-auto rounded-xl shadow-md mb-8" />
                Manter o controle de vários arquivos PDF relacionados pode ser um pesadelo. Seja faturas, recibos ou capítulos de um relatório, <strong>juntar vários arquivos PDF em um</strong> mantém tudo organizado e profissional.
                <br /><br />
                Nossa ferramenta de junção permite combinar vários PDFs em um, reordená-los exatamente como você deseja e salvá-los como um único documento—tudo sem precisar do Adobe Acrobat ou fazer upload de nada para um servidor.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Combinando PDFs",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Selecione Arquivos</strong>: Clique para enviar ou arraste vários arquivos PDF para nossa <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">ferramenta Juntar PDF</Link>. Você pode selecionar vários arquivos de uma vez usando Ctrl (Windows) ou Cmd (Mac) ao navegar.
                        </li>
                        <li className="pl-2">
                            <strong>Pré-visualize Miniaturas</strong>: Uma vez carregados, você verá pré-visualizações em miniatura da primeira página de cada arquivo, facilitando a identificação de qual documento é qual.
                        </li>
                        <li className="pl-2">
                            <strong>Reordenar</strong>: Arraste e solte os arquivos para organizá-los na ordem correta. O arquivo no topo se tornará as primeiras páginas do seu documento mesclado.
                        </li>
                        <li className="pl-2">
                            <strong>Remover Arquivos Indesejados</strong>: Cometeu um erro? Clique no botão X em qualquer arquivo para removê-lo da fila de mesclagem sem começar de novo.
                        </li>
                        <li className="pl-2">
                            <strong>Juntar</strong>: Clique no botão &quot;Juntar PDF&quot; para combiná-los instantaneamente. O processamento acontece no seu navegador, então arquivos maiores podem levar alguns segundos.
                        </li>
                        <li className="pl-2">
                            <strong>Baixar</strong>: Salve seu novo documento único. O arquivo mesclado manterá a qualidade original de todos os documentos de origem.
                        </li>
                    </ol>
                )
            },
            {
                id: "privacy-audit",
                title: "Auditoria de Privacidade: Para onde vão seus arquivos?",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8">
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
                                    <h5 className="font-bold text-gray-900 dark:text-white">Processamento Cliente-Side</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Nosso motor WebAssembly executa a operação de junção usando a CPU do seu computador. <Link href={`/${lang}/guides/private-pdf-tools`} className="text-canada-red hover:underline">0 bytes são enviados para qualquer servidor.</Link></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Limpeza Automática</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Assim que você fecha a aba, a memória do navegador é limpa. Nenhum traço do seu documento permanece.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "Casos de Uso Reais para Juntar PDFs",
                content: (
                    <div className="space-y-4">
                        <p><strong>Preparação para Impostos</strong>: Combine todos os seus comprovantes T4, recibos, comprovantes de doação e relatórios de despesas em um PDF organizado para fácil envio à CRA ou ao seu contador.</p>
                        <p><strong>Candidaturas de Emprego</strong>: Junte seu currículo, carta de apresentação, cartas de referência e amostras de portfólio em um único pacote profissional que os gerentes de contratação podem revisar facilmente.</p>
                        <p><strong>Documentação Legal</strong>: Reúna todos os contratos, emendas, documentos de suporte e correspondência em um arquivo legal completo para submissões judiciais ou manutenção de registros.</p>
                        <p><strong>Trabalho Acadêmico</strong>: Combine artigos de pesquisa, bibliografia, apêndices e gráficos de suporte em um único documento de tese ou dissertação.</p>
                        <p><strong>Propostas de Negócios</strong>: Junte o resumo executivo, cronograma do projeto, detalhamento do orçamento e biografias da equipe em um documento de proposta coeso.</p>
                        <p><strong>Transações Imobiliárias</strong>: Consolide relatórios de inspeção, divulgações de propriedade, avaliações e documentos de fechamento em um arquivo abrangente.</p>
                        <p><strong>Registros Médicos</strong>: Combine resultados de exames, notas médicas, histórico de prescrições e formulários de seguro para documentação médica completa.</p>
                    </div>
                )
            },
            {
                id: "tips",
                title: "Dicas Profissionais para Juntar",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">A Ordem Importa</h3>
                            <p className="text-sm text-blue-700">O arquivo no topo da lista será as primeiras páginas do seu novo PDF. Certifique-se de organizá-los cronologicamente ou logicamente antes de juntar.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Comprima Após Juntar</h3>
                            <p className="text-sm text-green-700">Juntar muitos arquivos pode criar um PDF grande. Use nossa <Link href={`/${lang}/compress-pdf`} className="underline">ferramenta de Comprimir</Link> depois se o arquivo for muito grande para enviar por e-mail.</p>
                        </div>
                        <div className="p-4 border border-purple-200 bg-purple-50 rounded-xl">
                            <h3 className="font-bold text-purple-800 mb-2">Renomeie Antes de Enviar</h3>
                            <p className="text-sm text-purple-700">Dê aos seus arquivos de origem nomes descritivos (como &quot;01-Capa.pdf&quot;, &quot;02-Curriculo.pdf&quot;) para facilitar a ordenação durante o processo de junção.</p>
                        </div>
                        <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">Pré-visualize as Primeiras Páginas</h3>
                            <p className="text-sm text-orange-700">Use as pré-visualizações em miniatura para verificar se cada arquivo está correto antes de juntar. Isso economiza tempo em comparação com a abertura de cada seção de PDF mesclada separadamente.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "platforms",
                title: "Como Juntar Arquivos PDF no Mac e Windows",
                content: (
                    <div className="space-y-4">
                        <p>Uma das perguntas mais comuns é como juntar arquivos dependendo do seu dispositivo. Se você está usando um <strong>Macbook Air</strong>, um <strong>desktop Windows 10/11</strong> ou um celular, nossa ferramenta funciona universalmente.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white">No Windows:</h4>
                        <p>Não há necessidade de procurar por software &quot;como juntar arquivos pdf windows&quot;. Apenas use nossa ferramenta baseada na web. Ela usa a memória local do seu navegador para processar a fusão, tornando-a mais rápida do que muitos aplicativos instalados.</p>
                        <h4 className="font-bold text-gray-900 dark:text-white">No Mac:</h4>
                        <p>Embora você possa usar o Preview, muitas pessoas procuram &quot;como juntar arquivos pdf no mac&quot; para uma experiência de arrastar e soltar mais intuitiva. Nossa ferramenta fornece uma interface visual clara que funciona perfeitamente no Safari ou Chrome no macOS.</p>
                    </div>
                )
            },
            {
                id: "no-acrobat",
                title: "Como Juntar Arquivos PDF Sem Acrobat",
                content: (
                    <div className="space-y-4">
                        <p>Muitos usuários querem saber <strong>como juntar documentos pdf sem Adobe Acrobat</strong> por causa dos altos custos de assinatura. Nossa ferramenta é uma alternativa 100% gratuita que preserva a qualidade profissional.</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Grátis para Sempre:</strong> Nenhuma versão &quot;Pro&quot; necessária para combinar arquivos.</li>
                            <li><strong>Sem Cadastro:</strong> Comece a juntar imediatamente sem uma conta.</li>
                            <li><strong>Privacidade:</strong> Ao contrário de muitas ferramentas &quot;Juntar PDF Online&quot;, nós nunca vemos seus arquivos.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Melhores Práticas para Resultados Profissionais",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Orientação Consistente</strong>: Garanta que todos os PDFs tenham a mesma orientação (retrato ou paisagem) antes de juntar, ou use nossa <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline">ferramenta de Girar</Link> primeiro para padronizá-los.</li>
                        <li><strong>Tamanhos de Página Semelhantes</strong>: Embora você possa juntar PDFs de tamanhos diferentes, ter dimensões de página consistentes (como tudo Carta ou tudo A4) cria um resultado mais profissional.</li>
                        <li><strong>Verificação de Qualidade</strong>: Revise cada PDF de origem individualmente antes de juntar para garantir que não haja páginas em branco, conteúdo corrompido ou materiais indesejados.</li>
                        <li><strong>Organização Lógica</strong>: Organize os documentos em um fluxo lógico - tipicamente ordem cronológica, ou de informações gerais para detalhes específicos.</li>
                        <li><strong>Consciência do Tamanho do Arquivo</strong>: Esteja ciente dos limites de anexo de e-mail (geralmente 10-25MB). Se seu arquivo mesclado exceder isso, considere compressão ou divisão em vários arquivos.</li>
                        <li><strong>Backup dos Originais</strong>: Sempre mantenha cópias de seus PDFs originais separados antes de juntar, caso precise fazer alterações mais tarde.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problemas Comuns e Soluções",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Botão de juntar está cinza</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Você precisa de pelo menos 2 arquivos PDF para juntar. Envie arquivos adicionais e o botão será ativado.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Processamento é muito lento</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Arquivos grandes ou muitos arquivos podem levar tempo para processar localmente. Tente fechar outras abas do navegador para liberar memória, ou junte em lotes menores.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: PDF juntado é muito grande para enviar por e-mail</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Use nossa <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-semibold">ferramenta de Comprimir PDF</Link> para reduzir o tamanho do arquivo mantendo uma qualidade razoável.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Páginas estão na orientação errada</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Use nossa <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-semibold">ferramenta de Girar PDF</Link> no arquivo mesclado ou nos arquivos de origem individuais antes de juntar.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Como faço para juntar 2 arquivos pdf em 1?",
                a: "Simplesmente envie ambos os arquivos para nossa ferramenta, organize-os na ordem que deseja e clique em 'Juntar PDF'. Esta é a maneira mais rápida de combinar dois documentos em um único arquivo gratuitamente."
            },
            {
                q: "Como juntar vários arquivos pdf em um pdf usando esta ferramenta?",
                a: "Você pode enviar até 50 arquivos de uma vez. Nossa visualização em grade permite ver todos os seus documentos, reordená-los arrastando e depois juntá-los em um arquivo PDF contínuo com um único clique."
            },
            {
                q: "Existe um limite de quantos arquivos posso juntar?",
                a: "Não! Você pode adicionar tantos arquivos quanto a memória do seu navegador permitir. Recomendamos fazer 10-20 de cada vez para o melhor desempenho. Para lotes muito grandes (50+ arquivos), considere juntar em grupos e depois combinar esses arquivos fundidos."
            },
            {
                q: "Posso juntar arquivos protegidos por senha?",
                a: "Você precisará desbloqueá-los primeiro. Se você tiver a senha, pode usar um visualizador de PDF para salvar uma cópia sem a senha antes de juntar, ou use nossa ferramenta de Desbloquear PDF para remover a proteção."
            },
            {
                q: "A fusão reduzirá a qualidade dos meus PDFs?",
                a: "Não. Nossa ferramenta de fusão preserva 100% da qualidade original. O texto permanece selecionável, as imagens ficam nítidas e toda a formatação é mantida exatamente como estava nos arquivos de origem."
            },
            {
                q: "Posso juntar PDFs de tamanhos de página diferentes?",
                a: "Sim! Você pode juntar PDFs com tamanhos de página diferentes (como Carta e A4, ou retrato e paisagem). Cada página manterá suas dimensões originais no documento mesclado."
            },
            {
                q: "O que acontece com marcadores e links quando eu junto?",
                a: "Marcadores e links internos dos PDFs originais são preservados no arquivo mesclado. No entanto, a organização dos marcadores pode precisar de ajuste, pois todos os marcadores são combinados no nível raiz."
            },
            {
                q: "Qual tamanho meu PDF juntado pode ter?",
                a: "O limite de tamanho depende da memória disponível do seu dispositivo. A maioria dos computadores modernos pode lidar com PDFs mesclados de até várias centenas de megabytes. Se você estiver tendo problemas com arquivos muito grandes, tente juntar menos arquivos de uma vez."
            },
            {
                q: "Posso juntar PDFs no meu celular ou tablet?",
                a: "Sim! Nossa ferramenta de fusão funciona em todos os navegadores modernos, incluindo dispositivos móveis. No entanto, processar arquivos grandes no celular pode ser mais lento devido à memória limitada em comparação com computadores desktop."
            },
            {
                q: "Existe uma maneira de adicionar números de página ao PDF juntado?",
                a: "Nossa ferramenta de fusão combina os arquivos como estão. Para adicionar números de página, você precisaria usar uma ferramenta de edição de PDF separada após a fusão. Considere adicionar números de página aos arquivos individuais antes de juntar para melhor controle."
            },
            {
                q: "Posso pesquisar texto em todos os arquivos juntados?",
                a: "Sim! Uma vez combinados em um único PDF, você pode usar a função de pesquisa padrão (Ctrl+F ou Cmd+F) para encontrar palavras em todas as páginas instantaneamente. Perfeito para pesquisa e descoberta legal."
            }
        ],

        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como juntar arquivos PDF?",
            answer: "Use a ferramenta Juntar PDF do pdfcanada.ca. Selecione vários arquivos, organize-os e clique em 'Juntar PDF'. É grátis e seguro.",
            tool: "Ferramenta Juntar PDF",
            steps: ["Selecione arquivos PDF", "Baixe o PDF junto"]
        },

        ctaTitle: "Pronto para se Organizar?",
        ctaButton: "Juntar PDFs Agora",
        ctaSubtext: "Grátis, Seguro e Canadense.",
        whyTitle: "Por que Junção Local?",
        whyDesc: "Seus arquivos são mesclados diretamente no seu navegador. Isso significa que eles nunca são enviados para um servidor remoto, garantindo que seus documentos confidenciais permaneçam confidenciais."
    }
});

export const MergePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/merge-pdf"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-02-15"
                dateModified="2026-01-14"
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Fusionner PDF' : (lang === 'pt' ? 'Juntar PDF' : 'Merge PDF'), path: `/${lang}/guides/merge-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<GripVertical size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide'), href: '#' }
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

                    <section className="bg-gray-900 text-white rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-canada-red opacity-10 blur-[80px] -mr-24 sm:-mr-32 -mt-24 sm:-mt-32 rounded-full"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <Shield className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                                    {t.whyTitle}
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                    {t.whyDesc}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <ul className="space-y-3 sm:space-y-4">
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                                        <Zap className="text-canada-red mt-0.5 sm:mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{lang === 'fr' ? "Fichiers illimités" : "Unlimited files"}</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                                        <Zap className="text-canada-red mt-0.5 sm:mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{lang === 'fr' ? "Réorganisation par glisser-déposer" : "Drag & drop reordering"}</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                                        <BarChart className="text-canada-red mt-0.5 sm:mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{lang === 'fr' ? "100% Privé" : "100% Private"}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-6 sm:py-8 md:py-12 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/merge-pdf`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <GripVertical size={20} className="sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            {t.faqHeading}
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

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/merge-pdf" category="organize" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/combine-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Combiner PDF' : (lang === 'pt' ? 'Guia Combinar PDF' : 'Combine PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/organize-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Organiser PDF' : (lang === 'pt' ? 'Guia Organizar PDF' : 'Organize PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/split-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Diviser PDF' : (lang === 'pt' ? 'Guia Dividir PDF' : 'Split PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/delete-pdf-pages`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Supprimer Pages' : (lang === 'pt' ? 'Guia Excluir Páginas' : 'Delete PDF Pages Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


