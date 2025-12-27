'use client';

import Link from 'next/link';
import React from 'react';
import { Trash2, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, MousePointer2, Smartphone, Monitor, Info, HelpCircle, FileText, MoveRight } from 'lucide-react';
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
            title: `How to Delete PDF Pages | Free & Private ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to remove pages from PDF securely. Our definitive ${CURRENT_YEAR} guide shows you how to delete pages locally on any device without uploads. Free and private.`
        },
        h1: `How to Delete PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "A complete walkthrough on removing unwanted, blank, or sensitive pages from your documents—securely and for free.",

        intro: (
            <>
                We&apos;ve all been there: you&apos;ve downloaded a bank statement, government form, or ebook and realized there are 10 pages of irrelevant small print or blank sheets. Knowing <strong>how to delete pages from PDF</strong> is essential for keeping your documents clean and professional.
                <br /><br />
                Our tool makes it simple to <strong>remove PDF pages</strong> visually. No command lines, no expensive software—just a simple grid where you click what you don&apos;t want. Best of all, it happens locally on your device. <strong>That changes today.</strong>
                <br /><br />
                This guide will show you exactly how to remove pages from any PDF document using <Link href="/" className="text-canada-red hover:underline font-medium">modern, local-first tools</Link> that keep your data safe on your own device.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Removing Unwanted Pages from Your PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Deleting pages doesn&apos;t need to be complicated. Our <strong>Delete PDF Pages tool</strong> is designed to be intuitive, functioning much like a physical light table where you can see all your pages at once.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Upload Your PDF</strong>: Drag and drop your file into our <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-medium">Delete PDF Pages tool</Link>. Deleting pages doesn&apos;t need an internet connection after the page loads, as processing is <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First</Link>.
                            </li>
                            <li className="pl-2">
                                <strong>Visual Selection</strong>: You&apos;ll see thumbnail previews of every page in your document. No more guessing which page is which.
                            </li>
                            <li className="pl-2">
                                <strong>Select Pages to Delete</strong>: Click once on any page thumbnail you want to remove. A red border or trash icon will indicate you&apos;ve selected it for deletion. Click again to deselect if you change your mind.
                            </li>
                            <li className="pl-2">
                                <strong>Refine Your Selection</strong>: You can select multiple pages across different sections of the document. You&apos;ll see a counter showing exactly how many pages you&apos;ve marked for removal.
                            </li>
                            <li className="pl-2">
                                <strong>Process and Save</strong>: Click the button to generate your new, slimmed-down PDF. The unwanted pages are stripped out, and your new document is ready for download instantly.
                            </li>
                            <li className="pl-2">
                                <strong>Download Clean PDF</strong>: Your streamlined document is ready immediately. The deleted pages are completely removed from the file structure, not just hidden.
                            </li>
                        </ol>
                        <p className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                            <em><strong>Pro Tip:</strong> If you accidentally select the wrong page, just click it again to unselect it. You can select and deselect as many times as needed before clicking Delete.</em>
                        </p>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Common Scenarios for Deleting PDF Pages",
                content: (
                    <div className="space-y-4">
                        <p><strong>Removing Blank Pages from Scans</strong>: Double-sided scanning often creates blank pages when one side of a sheet is empty. Delete these unwanted blanks to create a cleaner, more professional document.</p>
                        <p><strong>Extracting Relevant Sections from Long Reports</strong>: You received a 50-page board report but only need pages 1-5 (executive summary) for your team. Delete pages 6-50 to share just the relevant information.</p>
                        <p><strong>Removing Confidential Pages Before Sharing</strong>: Your contract has salary information on page 7 that shouldn&apos;t be shared with certain stakeholders. Delete that page before distributing the rest of the contract.</p>
                        <p><strong>Cleaning Up Government Forms for CRA/Service Canada</strong>: Many government PDF forms include lengthy instructions and terms of service. Delete the instruction pages, keeping only the completed form pages for submission.</p>
                        <p><strong>Removing Cover Pages from Academic Papers</strong>: Journals often require submissions without cover pages. Delete the cover page while keeping your abstract, manuscript, and references intact.</p>
                        <p><strong>Eliminating Duplicate Pages</strong>: Your scanner accidentally scanned page 3 twice. Delete the duplicate to fix the document flow without re-scanning everything.</p>
                        <p><strong>Creating Custom Document Versions</strong>: You have a comprehensive proposal with optional add-on services. Create a basic version by deleting the add-on pages for clients who don&apos;t need them.</p>
                    </div>
                )
            },
            {
                id: "privacy-matters",
                title: "Why Local Processing Matters for Document Security",
                content: (
                    <>
                        <p className="mb-4">
                            When you search for &quot;delete pdf pages online,&quot; most results require you to upload your document to a cloud server. For a public cafeteria menu, that&apos;s fine. But for a <strong>legal contract, tax return, medical record, or confidential business document</strong>? It&apos;s a significant privacy risk.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is fundamentally different. We run the PDF processing engine <em>inside your web browser</em> using modern JavaScript libraries. This local-first approach means:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Your file <strong>never leaves your computer or device</strong>—it&apos;s processed entirely in your browser&apos;s memory.</li>
                            <li>No temporary copies are created on our servers. We literally can&apos;t see your documents.</li>
                            <li>You can even turn off your Wi-Fi after the page loads, and the tool will still work perfectly.</li>
                            <li>Ideal for sensitive documents: tax returns (CRA submissions), medical records, legal contracts, NDAs, financial statements, and HR documents.</li>
                            <li>No data retention, no server logs, no third-party access—complete privacy by design.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "best-practices",
                title: "Best Practices for Deleting PDF Pages",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Preview Before Deleting</strong>: Always review the page thumbnails carefully to ensure you&apos;re deleting the correct pages. A quick double-check prevents accidentally removing important content.</li>
                        <li><strong>Keep Original Backups</strong>: Before deleting pages from important documents, save a copy of the original complete PDF. Once deleted, pages are permanently removed from the generated file.</li>
                        <li><strong>Delete in Logical Groups</strong>: If you&apos;re removing many pages, delete them in batches (e.g., all blank pages first, then all instruction pages) to stay organized.</li>
                        <li><strong>Check Page Numbering</strong>: Remember that deleting pages changes the physical page count but doesn&apos;t update printed page numbers in headers/footers. Page &quot;5 of 10&quot; will still say that even if the document is now only 8 pages.</li>
                        <li><strong>Consider Organizing Instead</strong>: If you need pages in a different order rather than deleted, use our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline">Organize PDF tool</Link> to rearrange them first.</li>
                        <li><strong>Verify Content After Deletion</strong>: After deleting pages, open the resulting PDF and skim through to ensure the document still flows logically and no critical pages were removed by mistake.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Common Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: I can&apos;t find the page I want to delete</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Zoom in on the thumbnail grid or scroll carefully through all pages. For very large PDFs, the thumbnails are small—use the page number labels to navigate. If needed, open the original PDF in a viewer to identify the exact page number first.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: I accidentally deleted the wrong pages</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Your original file remains unchanged on your computer. Simply upload the original file again and delete the correct pages. This is why keeping backups of important documents is crucial.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: The delete button is grayed out</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: You must select at least one page to delete before the button becomes active. Click on the pages you want to remove and they should highlight, then the delete button will enable.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Processing is very slow with large PDFs</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Very large PDFs (200+ pages or 100+ MB) can take time to load thumbnails and process. Close other browser tabs to free up memory. For extremely large files, consider splitting the PDF first using our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">Organize tool</Link>.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Can I undo a page deletion?</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Once you download the edited PDF, the deletion is permanent in that new file. However, your original PDF file remains untouched. If you need deleted pages back, simply work from the original file again.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Does this perform a 'destructive' delete, or are pages just hidden?",
                a: "The new PDF you download has the selected pages completely removed from the file structure—they are not just hidden or marked as deleted. However, your original file on your computer remains completely untouched, so you always have a backup."
            },
            {
                q: "Can I undo a deletion after downloading the edited PDF?",
                a: "Once you download the new PDF, the deleted pages are permanently removed from that file. However, since the tool runs locally, your original PDF file remains unchanged on your computer. You can always go back to the original if you need those pages again."
            },
            {
                q: "Is there a limit to how many pages I can delete?",
                a: "No limit! You can delete as many pages as you want, from a single page to hundreds. Just remember you need to keep at least one page—you can't delete everything and create an empty PDF."
            },
            {
                q: "Will the quality of remaining pages be affected?",
                a: "No. Deleting pages doesn't compress, re-render, or modify the remaining pages in any way. The pages you keep maintain 100% of their original quality, formatting, and content."
            },
            {
                q: "Can I delete pages from password-protected PDFs?",
                a: "You'll need to unlock the PDF first. If you know the password, use a PDF viewer to save an unprotected copy, or use our Unlock PDF tool. Once unlocked, you can freely delete pages. You can re-apply password protection to the edited file afterwards if needed."
            },
            {
                q: "What happens to page numbers after deletion?",
                a: "The physical page count changes (a 10-page document becomes 8 pages after deleting 2), but printed page numbers in headers/footers remain unchanged. If page 5 says \"Page 5 of 10\" in the footer, it will still display that text even after other pages are deleted."
            },
            {
                q: "Can I delete non-consecutive pages (e.g., pages 2, 5, and 9)?",
                a: "Absolutely! You can select any combination of pages to delete, whether they're consecutive or scattered throughout the document. Just click on each page you want to remove, and they'll all be deleted when you process the file."
            },
            {
                q: "Does this work on mobile devices?",
                a: "Yes! Our delete pages tool works on all modern browsers, including smartphones and tablets. The interface adapts to touchscreens, making it easy to tap and select pages for deletion. Processing happens locally on your device regardless of platform."
            }
        ],

        ctaTitle: "Ready to Clean Up Your PDF?",
        ctaButton: "Start Deleting Pages",
        ctaSubtext: "No account needed. 100% Free & Private.",

        supportingSections: [
            {
                title: "A Note on Page Numbers",
                content: "Remember: when you delete pages, the physical page count changes, but any printed page numbers (like 'Page 5 of 10') on the footer of the document will remain the same."
            },
            {
                q: "How large can my merged PDF be?",
                a: "The size limit depends on your device&apos;s available memory. Most modern computers can handle merged PDFs up to several hundred megabytes. If you&apos;re experiencing issues with very large files, try merging fewer files at once."
            },
        ]
    },
    fr: {
        seo: {
            title: `Comment Supprimer des Pages PDF | Guide Local ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à supprimer des pages de vos PDF en toute sécurité. Notre guide ${CURRENT_YEAR} vous montre comment retirer des pages localement sans téléchargement. Gratuit et privé.`
        },
        h1: "Comment Supprimer des Pages d'un PDF : Le Guide Complet",
        subtitle: "La méthode simple et sécurisée pour retirer les pages indésirables, vierges ou sensibles de vos documents.",

        intro: (
            <>
                Nous y avons tous été confrontés : vous avez téléchargé un relevé bancaire, un formulaire gouvernemental ou un livre électronique et vous avez réalisé qu&apos;il y a 10 pages de petits caractères non pertinents ou de feuilles blanches. Savoir <strong>comment supprimer des pages d&apos;un PDF</strong> est essentiel pour garder vos documents propres et professionnels.
                <br /><br />
                Notre outil simplifie la <strong>suppression de pages PDF</strong> de manière visuelle. Pas de lignes de commande, pas de logiciels coûteux—juste une grille simple où vous cliquez sur ce que vous ne voulez pas. Le meilleur de tout, cela se fait localement sur votre appareil. <strong>Cela change aujourd&apos;hui.</strong>
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Suppression des Pages Indésirables de Votre PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Supprimer des pages ne devrait pas être compliqué. Notre <strong>outil de suppression de pages PDF</strong> est conçu pour être intuitif, fonctionnant un peu comme une table lumineuse physique où vous pouvez voir toutes vos pages à la fois.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Téléchargez votre PDF</strong> : Glissez votre PDF directement dans la fenêtre du navigateur ou cliquez pour parcourir. Grâce à notre <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</Link>, le fichier s&apos;ouvre instantanément—pas de barre de téléchargement, pas d&apos;attente pour le traitement cloud.
                            </li>
                            <li className="pl-2">
                                <strong>Aperçu de toutes les pages</strong> : Vous verrez une grille de miniatures de pages montrant l&apos;ensemble du document d&apos;un coup d&apos;œil. Cet aperçu visuel facilite l&apos;identification exacte des pages à supprimer.
                            </li>
                            <li className="pl-2">
                                <strong>Sélectionnez les pages à supprimer</strong> : Cliquez simplement sur les pages que vous voulez retirer. Les pages sélectionnées seront surlignées (souvent en rouge ou avec un indicateur visuel), les marquant pour suppression.
                            </li>
                            <li className="pl-2">
                                <strong>Vérifiez votre sélection</strong> : Vérifiez bien que vous avez sélectionné les bonnes pages. Si vous avez accidentellement sélectionné la mauvaise page, cliquez dessus à nouveau pour la désélectionner.
                            </li>
                            <li className="pl-2">
                                <strong>Supprimez et générez</strong> : Cliquez sur le bouton <strong>&quot;Supprimer les pages sélectionnées&quot;</strong>. L&apos;outil traite votre demande instantanément, créant un nouveau PDF sans les pages supprimées.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez le PDF nettoyé</strong> : Votre document allégé est prêt immédiatement. Les pages supprimées sont complètement retirées de la structure du fichier, pas seulement cachées.
                            </li>
                        </ol>
                        <p className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                            <em><strong>Conseil Pro :</strong> Si vous sélectionnez accidentellement la mauvaise page, cliquez simplement dessus à nouveau pour la désélectionner. Vous pouvez sélectionner et désélectionner autant de fois que nécessaire avant de cliquer sur Supprimer.</em>
                        </p>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Scénarios Courants pour Supprimer des Pages PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Suppression de pages vierges des scans</strong> : Le scan recto-verso crée souvent des pages vierges quand un côté d&apos;une feuille est vide. Supprimez ces blancs indésirables pour créer un document plus propre et professionnel.</p>
                        <p><strong>Extraction de sections pertinentes de longs rapports</strong> : Vous n&apos;avez besoin que des pages 1-5 (résumé exécutif) pour votre équipe. Supprimez les pages 6-50 pour partager uniquement les informations pertinentes.</p>
                        <p><strong>Suppression de pages confidentielles avant partage</strong> : Votre contrat a des informations salariales à la page 7 qui ne devraient pas être partagées avec certaines parties prenantes. Supprimez cette page avant de distribuer le reste du contrat.</p>
                        <p><strong>Nettoyage de formulaires gouvernementaux pour l&apos;ARC/Service Canada</strong> : De nombreux formulaires PDF gouvernementaux incluent de longues instructions et conditions d&apos;utilisation. Supprimez les pages d&apos;instructions, en gardant uniquement les pages de formulaire complétées pour la soumission.</p>
                        <p><strong>Suppression de pages de couverture de travaux académiques</strong> : Les revues exigent souvent des soumissions sans pages de couverture. Supprimez la page de couverture tout en gardant votre résumé, manuscrit et références intacts.</p>
                        <p><strong>Élimination de pages en double</strong> : Votre scanner a accidentellement scanné la page 3 deux fois. Supprimez le doublon pour corriger le flux du document sans tout rescanner.</p>
                        <p><strong>Création de versions personnalisées de documents</strong> : Vous avez une proposition complète avec des services optionnels supplémentaires. Créez une version de base en supprimant les pages supplémentaires pour les clients qui n&apos;en ont pas besoin.</p>
                    </div>
                )
            },
            {
                id: "privacy-matters",
                title: "Pourquoi le Traitement Local Compte pour la Sécurité des Documents",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous recherchez &quot;supprimer des pages PDF en ligne&quot;, la plupart des résultats exigent que vous téléchargiez votre document sur un serveur cloud. Pour un menu de cafétéria publique, c&apos;est acceptable. Mais pour un <strong>contrat juridique, déclaration de revenus, dossier médical ou document commercial confidentiel</strong> ? C&apos;est un risque significatif pour la confidentialité.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> est fondamentalement différent. Nous exécutons le moteur de traitement PDF <em>à l&apos;intérieur de votre navigateur web</em> en utilisant des bibliothèques JavaScript modernes. Cette approche locale signifie :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Votre fichier <strong>ne quitte jamais votre ordinateur ou appareil</strong>—il est traité entièrement dans la mémoire de votre navigateur.</li>
                            <li>Aucune copie temporaire n&apos;est créée sur nos serveurs. Nous ne pouvons littéralement pas voir vos documents.</li>
                            <li>Vous pouvez même éteindre votre Wi-Fi après le chargement de la page, et l&apos;outil fonctionnera toujours parfaitement.</li>
                            <li>Idéal pour les documents sensibles : déclarations de revenus (soumissions ARC), dossiers médicaux, contrats juridiques, accords de confidentialité, états financiers et documents RH.</li>
                            <li>Aucune rétention de données, aucun journal de serveur, aucun accès tiers—confidentialité complète par conception.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "best-practices",
                title: "Meilleures Pratiques pour Supprimer des Pages PDF",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Prévisualisez avant de supprimer</strong> : Examinez toujours attentivement les miniatures de pages pour vous assurer que vous supprimez les bonnes pages. Une double vérification rapide évite de supprimer accidentellement du contenu important.</li>
                        <li><strong>Conservez des sauvegardes originales</strong> : Avant de supprimer des pages de documents importants, enregistrez une copie du PDF complet original. Une fois supprimées, les pages sont définitivement retirées du fichier généré.</li>
                        <li><strong>Supprimez par groupes logiques</strong> : Si vous supprimez de nombreuses pages, supprimez-les par lots (par exemple, toutes les pages vierges d&apos;abord, puis toutes les pages d&apos;instructions) pour rester organisé.</li>
                        <li><strong>Vérifiez la numérotation des pages</strong> : Rappelez-vous que supprimer des pages change le nombre physique de pages mais ne met pas à jour les numéros de page imprimés dans les en-têtes/pieds de page. La page &quot;5 de 10&quot; dira toujours cela même si le document ne fait plus que 8 pages.</li>
                        <li><strong>Considérez l&apos;organisation plutôt</strong> : Si vous avez besoin de pages dans un ordre différent plutôt que supprimées, utilisez notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline">outil d&apos;organisation PDF</Link> de pdfcanada.ca pour les réarranger d&apos;abord.</li>
                        <li><strong>Vérifiez le contenu après suppression</strong> : Après avoir supprimé des pages, ouvrez le PDF résultant et parcourez-le pour vous assurer que le document s&apos;enchaîne toujours logiquement et qu&apos;aucune page critique n&apos;a été supprimée par erreur.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problèmes Courants et Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Je ne trouve pas la page que je veux supprimer</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Zoomez sur la grille de miniatures ou faites défiler soigneusement toutes les pages. Pour les très gros PDF, les miniatures sont petites—utilisez les étiquettes de numéro de page pour naviguer. Si nécessaire, ouvrez d&apos;abord le PDF original dans un lecteur pour identifier le numéro de page exact.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : J&apos;ai accidentellement supprimé les mauvaises pages</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Votre fichier original reste inchangé sur votre ordinateur. Téléchargez simplement le fichier original à nouveau et supprimez les bonnes pages. C&apos;est pourquoi conserver des sauvegardes de documents importants est crucial.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le bouton de suppression est grisé</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Vous devez sélectionner au moins une page à supprimer avant que le bouton ne devienne actif. Cliquez sur les pages que vous voulez retirer et elles devraient se surligner, puis le bouton de suppression s&apos;activera.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement est très lent avec les gros PDF</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les très gros PDF (200+ pages ou 100+ Mo) peuvent prendre du temps pour charger les miniatures et traiter. Fermez d&apos;autres onglets du navigateur pour libérer de la mémoire. Pour les fichiers extrêmement volumineux, envisagez de diviser le PDF d&apos;abord en utilisant notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">outil d&apos;organisation</Link>.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Puis-je annuler une suppression de page ?</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Une fois que vous téléchargez le PDF édité, la suppression est permanente dans ce nouveau fichier. Cependant, votre fichier PDF original reste intact. Si vous avez besoin des pages supprimées, travaillez simplement à nouveau à partir du fichier original.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que cela effectue une suppression 'destructive', ou les pages sont-elles simplement cachées ?",
                a: "Le nouveau PDF que vous téléchargez a les pages sélectionnées complètement retirées de la structure du fichier—elles ne sont pas simplement cachées ou marquées comme supprimées. Cependant, votre fichier original sur votre ordinateur reste complètement intact, donc vous avez toujours une sauvegarde."
            },
            {
                q: "Puis-je annuler une suppression après avoir téléchargé le PDF édité ?",
                a: "Une fois que vous téléchargez le nouveau PDF, les pages supprimées sont définitivement retirées de ce fichier. Cependant, puisque l&apos;outil fonctionne localement, votre fichier PDF original reste inchangé sur votre ordinateur. Vous pouvez toujours revenir à l&apos;original si vous avez besoin de ces pages à nouveau."
            },
            {
                q: "Y a-t-il une limite au nombre de pages que je peux supprimer ?",
                a: "Aucune limite ! Vous pouvez supprimer autant de pages que vous le souhaitez, d&apos;une seule page à des centaines. Rappelez-vous simplement que vous devez conserver au moins une page—vous ne pouvez pas tout supprimer et créer un PDF vide."
            },
            {
                q: "La qualité des pages restantes sera-t-elle affectée ?",
                a: "Non. La suppression de pages ne compresse pas, ne refait pas le rendu ni ne modifie les pages restantes de quelque manière que ce soit. Les pages que vous conservez maintiennent 100% de leur qualité originale, formatage et contenu."
            },
            {
                q: "Puis-je supprimer des pages de PDF protégés par mot de passe ?",
                a: "Vous devrez d&apos;abord déverrouiller le PDF. Si vous connaissez le mot de passe, utilisez un lecteur PDF pour enregistrer une copie non protégée, ou utilisez notre outil de déverrouillage PDF. Une fois déverrouillé, vous pouvez librement supprimer des pages. Vous pouvez réappliquer une protection par mot de passe au fichier édité par la suite si nécessaire."
            },
            {
                q: "Qu&apos;arrive-t-il aux numéros de page après suppression ?",
                a: "Le nombre physique de pages change (un document de 10 pages devient 8 pages après suppression de 2), mais les numéros de page imprimés dans les en-têtes/pieds de page restent inchangés. Si la page 5 dit &quot;Page 5 de 10&quot; dans le pied de page, elle affichera toujours ce texte même après suppression d&apos;autres pages."
            },
            {
                q: "Puis-je supprimer des pages non consécutives (par exemple, les pages 2, 5 et 9) ?",
                a: "Absolument ! Vous pouvez sélectionner n&apos;importe quelle combinaison de pages à supprimer, qu&apos;elles soient consécutives ou dispersées dans tout le document. Cliquez simplement sur chaque page que vous voulez retirer, et elles seront toutes supprimées lorsque vous traitez le fichier."
            },
            {
                q: "Cela fonctionne-t-il sur les appareils mobiles ?",
                a: "Oui ! Notre outil de suppression de pages fonctionne sur tous les navigateurs modernes, y compris les smartphones et tablettes. L&apos;interface s&apos;adapte aux écrans tactiles, facilitant l&apos;appui et la sélection de pages pour suppression. Le traitement se fait localement sur votre appareil quelle que soit la plateforme."
            }
        ],

        ctaTitle: "Prêt à Nettoyer Votre PDF ?",
        ctaButton: "Supprimer les Pages",
        ctaSubtext: "Gratuit, Rapide et Sécurisé."
    }
});

export const DeletePdfPagesGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select File", "text": "Upload your PDF document to the tool locally." },
                { "@type": "HowToStep", "position": 2, "name": "Select Pages", "text": "Identify and click the pages you want to remove." },
                { "@type": "HowToStep", "position": 3, "name": "Remove and Download", "text": "Finalize the deletion and download the new file." }
            ]
        }
    ];

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/delete-pdf-pages"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                datePublished="2024-01-15"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I delete pages from a PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l&apos;outil de suppression de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les pages à supprimer (elles deviennent rouges), puis cliquez sur &apos;Supprimer&apos;. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                        : "Use pdfcanada.ca&apos;s Delete PDF Pages tool. Upload your PDF, click on pages you want to remove (they turn red), then click &apos;Delete Selected Pages&apos;. All processing happens locally in your browser - your files never leave your device.",
                    tool: "PDF Page Remover",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Cliquez sur les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                        : ["Upload your PDF file", "Click on pages to remove", "Download your cleaned PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Supprimer des pages PDF' : 'Delete PDF Pages', path: lang === 'fr' ? '/fr/guides/delete-pdf-pages' : '/guides/delete-pdf-pages' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Trash2 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Supprimer des pages' : 'Delete Pages', href: lang === 'fr' ? '/fr/guides/delete-pdf-pages' : '/guides/delete-pdf-pages' }
                ]}
            >
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-black text-gray-100 dark:text-gray-800">{idx + 1}</span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-3xl p-12 text-center text-white shadow-xl">
                        <Zap className="mx-auto mb-6 opacity-50" size={48} />
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <p className="text-white/80 mb-8 font-medium">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/delete-pdf-pages`}
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section aria-labelledby="faq-title">
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-canada-red" size={32} />
                            <h2 id="faq-title" className="text-3xl font-bold text-gray-900 dark:text-white">
                                {lang === 'fr' ? "Questions Fréquentes" : "Questions & Answers"}
                            </h2>
                        </div>
                        <div className="grid gap-4">
                            {t.faq && t.faq.map((item: any, i: number) => (
                                <details key={i} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-canada-red transition-all">
                                    <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center group-open:text-canada-red">
                                        {item.q}
                                        <span className="text-gray-300 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                                        {item.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I delete pages from a PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez l&apos;outil de suppression de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les pages à supprimer (elles deviennent rouges), puis cliquez sur &apos;Supprimer&apos;. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                            : "Use pdfcanada.ca&apos;s Delete PDF Pages tool. Upload your PDF, click on pages you want to remove (they turn red), then click &apos;Delete Selected Pages&apos;. All processing happens locally in your browser - your files never leave your device."}
                        toolName="PDF Page Remover"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Cliquez sur les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                            : ["Upload your PDF file", "Click on pages to remove", "Download your cleaned PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/delete-pdf-pages" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};

