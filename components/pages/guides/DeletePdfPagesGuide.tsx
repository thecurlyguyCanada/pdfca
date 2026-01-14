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
import { ToolPromo } from '../../ToolPromo';

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
                We've all been there: you've downloaded a bank statement, government form, or ebook and realized there are 10 pages of irrelevant small print or blank sheets. Knowing <strong>how to delete pages from PDF</strong> is essential for keeping your documents clean and professional.
                <br /><br />
                Our tool makes it simple to <strong>remove PDF pages</strong> visually. No command lines, no expensive software—just a simple grid where you click what you don't want. Best of all, it happens locally on your device. <strong>That changes today.</strong>
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
                            Deleting pages doesn't need to be complicated. Our <strong>Delete PDF Pages tool</strong> is designed to be intuitive, functioning much like a physical light table where you can see all your pages at once.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Upload Your PDF</strong>: Drag and drop your file into our <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-medium">Delete PDF Pages tool</Link>. Deleting pages doesn't need an internet connection after the page loads, as processing is <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First</Link>.
                            </li>
                            <li className="pl-2">
                                <strong>Visual Selection</strong>: You'll see thumbnail previews of every page in your document. No more guessing which page is which.
                            </li>
                            <li className="pl-2">
                                <strong>Select Pages to Delete</strong>: Click once on any page thumbnail you want to remove. A red border or trash icon will indicate you've selected it for deletion. Click again to deselect if you change your mind.
                            </li>
                            <li className="pl-2">
                                <strong>Refine Your Selection</strong>: You can select multiple pages across different sections of the document. You'll see a counter showing exactly how many pages you've marked for removal.
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
                        <p><strong>Removing Confidential Pages Before Sharing</strong>: Your contract has salary information on page 7 that shouldn't be shared with certain stakeholders. Delete that page before distributing the rest of the contract.</p>
                        <p><strong>Cleaning Up Government Forms for CRA/Service Canada</strong>: Many government PDF forms include lengthy instructions and terms of service. Delete the instruction pages, keeping only the completed form pages for submission.</p>
                        <p><strong>Removing Cover Pages from Academic Papers</strong>: Journals often require submissions without cover pages. Delete the cover page while keeping your abstract, manuscript, and references intact.</p>
                        <p><strong>Eliminating Duplicate Pages</strong>: Your scanner accidentally scanned page 3 twice. Delete the duplicate to fix the document flow without re-scanning everything.</p>
                        <p><strong>Creating Custom Document Versions</strong>: You have a comprehensive proposal with optional add-on services. Create a basic version by deleting the add-on pages for clients who don't need them.</p>
                    </div>
                )
            },
            {
                id: "privacy-matters",
                title: "Why Local Processing Matters for Document Security",
                content: (
                    <>
                        <p className="mb-4">
                            When you search for &quot;delete pdf pages online,&quot; most results require you to upload your document to a cloud server. For a public cafeteria menu, that's fine. But for a <strong>legal contract, tax return, medical record, or confidential business document</strong>? It's a significant privacy risk.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is fundamentally different. We run the PDF processing engine <em>inside your web browser</em> using modern JavaScript libraries. This local-first approach means:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Your file <strong>never leaves your computer or device</strong>—it's processed entirely in your browser's memory.</li>
                            <li>No temporary copies are created on our servers. We literally can't see your documents.</li>
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
                        <li><strong>Preview Before Deleting</strong>: Always review the page thumbnails carefully to ensure you're deleting the correct pages. A quick double-check prevents accidentally removing important content.</li>
                        <li><strong>Keep Original Backups</strong>: Before deleting pages from important documents, save a copy of the original complete PDF. Once deleted, pages are permanently removed from the generated file.</li>
                        <li><strong>Delete in Logical Groups</strong>: If you're removing many pages, delete them in batches (e.g., all blank pages first, then all instruction pages) to stay organized.</li>
                        <li><strong>Check Page Numbering</strong>: Remember that deleting pages changes the physical page count but doesn't update printed page numbers in headers/footers. Page &quot;5 of 10&quot; will still say that even if the document is now only 8 pages.</li>
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
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: I can't find the page I want to delete</h4>
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
                a: "The size limit depends on your device's available memory. Most modern computers can handle merged PDFs up to several hundred megabytes. If you're experiencing issues with very large files, try merging fewer files at once."
            },
        ],
        faqHeading: "Questions & Answers",
        quickAnswer: {
            question: "How do I delete pages from a PDF for free online?",
            answer: "To delete PDF pages for free online, use pdfcanada.ca. Upload your PDF, select pages to remove, and click 'Delete'. It's the secure alternative to Adobe Reader and iLovePDF as everything stays on your device.",
            tool: "PDF Page Remover",
            steps: ["Upload your PDF file", "Click on pages to remove", "Download your cleaned PDF"]
        }
    },
    fr: {
        seo: {
            title: `Pdf supprimer une page online | Retirer des pages PDF gratuitement | pdfcanada.ca`,
            desc: `Besoin de supprimer une page PDF online gratuitement ? Notre guide ${CURRENT_YEAR} vous montre comment retirer des pages PDF en ligne sur Android, Windows ou Mac sans Adobe Reader.`
        },
        h1: "Comment Supprimer des Pages d'un PDF : Le Guide Complet",
        subtitle: "La méthode simple et sécurisée pour retirer les pages indésirables, vierges ou sensibles de vos documents.",

        intro: (
            <>
                Vous cherchez comment <strong>supprimer une page PDF online</strong> rapidement ? Nous y avons tous été confrontés : un relevé bancaire avec des pages inutiles ou un formulaire avec trop de petits caractères. Savoir <strong>comment supprimer des pages d'un PDF gratuitement</strong> est essentiel pour garder vos documents professionnels.
                <br /><br />
                Notre outil de type &quot;PDF supprimer une page free&quot; simplifie la <strong>suppression de page PDF en ligne</strong> de manière visuelle. Pas de logiciel lourd comme Adobe Reader, juste une interface simple. Le meilleur de tout ? C'est 100% local et sécurisé.
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
                                <strong>Téléchargez votre PDF</strong> : Glissez votre PDF directement dans la fenêtre du navigateur ou cliquez pour parcourir. Grâce à notre <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</Link>, le fichier s'ouvre instantanément—pas de barre de téléchargement, pas d'attente pour le traitement cloud.
                            </li>
                            <li className="pl-2">
                                <strong>Aperçu de toutes les pages</strong> : Vous verrez une grille de miniatures de pages montrant l'ensemble du document d'un coup d'œil. Cet aperçu visuel facilite l'identification exacte des pages à supprimer.
                            </li>
                            <li className="pl-2">
                                <strong>Sélectionnez les pages à supprimer</strong> : Cliquez simplement sur les pages que vous voulez retirer. Les pages sélectionnées seront surlignées (souvent en rouge ou avec un indicateur visuel), les marquant pour suppression.
                            </li>
                            <li className="pl-2">
                                <strong>Vérifiez votre sélection</strong> : Vérifiez bien que vous avez sélectionné les bonnes pages. Si vous avez accidentellement sélectionné la mauvaise page, cliquez dessus à nouveau pour la désélectionner.
                            </li>
                            <li className="pl-2">
                                <strong>Supprimez et générez</strong> : Cliquez sur le bouton <strong>&quot;Supprimer les pages sélectionnées&quot;</strong>. L'outil traite votre demande instantanément, créant un nouveau PDF sans les pages supprimées.
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
                        <p><strong>Remplacer une page PDF</strong> : Vous voulez changer une page par une autre ? La méthode la plus simple est de <strong>supprimer la page PDF</strong> obsolète ici, puis d'utiliser notre outil de fusion pour insérer la nouvelle page.</p>
                        <p><strong>Supprimer une page Word</strong> : Si vous avez converti un document Word en PDF et qu'une page est de trop, notre outil est plus rapide que de retourner dans Word. Importez le PDF et retirez la page instantanément.</p>
                        <p><strong>Suppression de pages vierges des scans</strong> : Le scan recto-verso crée souvent des pages vierges. Supprimez ces blancs indésirables pour un document plus propre.</p>
                        <p><strong>Extraction de sections pertinentes</strong> : Vous n'avez besoin que des pages 1-5 ? Supprimez les pages 6-50 pour ne partager que l'essentiel.</p>
                        <p><strong>Nettoyage de formulaires (ARC/Service Canada)</strong> : Retirez les pages d'instructions inutiles avant de soumettre vos documents officiels.</p>
                    </div>
                )
            },
            {
                id: "platforms",
                title: "Supprimer une page PDF sur Android, Windows et Mac",
                content: (
                    <>
                        <p className="mb-4">
                            Peu importe votre appareil, notre outil local s'adapte :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>PDF supprimer une page Android</strong> : Utilisez votre navigateur Chrome sur votre téléphone pour retirer des pages facilement sans installer d'application suspecte.</li>
                            <li><strong>Supprimer page PDF Windows</strong> : Évitez les logiciels lourds. Notre solution WebAssembly est plus rapide qu'Adobe Reader sur Windows 10 et 11.</li>
                            <li><strong>Alternative à iLovePDF</strong> : Contrairement aux sites comme iLovePDF ou SmallPDF, nous ne téléversons jamais votre fichier. Tout reste sur votre appareil, idéal pour les documents sensibles.</li>
                        </ul>
                        <p>
                            Après avoir nettoyé votre document, vous pouvez aussi <Link href={`/${lang}/guides/make-pdf-fillable`} className="text-canada-red hover:underline">numéroter les pages PDF</Link> ou ajouter des champs de texte si nécessaire.
                        </p>
                    </>
                )
            },
            {
                id: "privacy-matters",
                title: "Pourquoi le Traitement Local Compte pour la Sécurité",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous recherchez &quot;supprimer des pages PDF en ligne&quot;, la plupart des résultats exigent que vous téléchargiez votre document. Pour un <strong>contrat juridique, une déclaration de revenus ou un dossier médical</strong>, c'est un risque majeur.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> traite vos PDF <em>à l'intérieur de votre navigateur</em>. Vos fichiers ne quittent jamais votre Android, iPhone ou PC. C'est la garantie d'une confidentialité totale par conception.
                        </p>
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
                        <li><strong>Supprimez par groupes logiques</strong> : Si vous supprimez de nombreuses pages, supprimez-les par lots (par exemple, toutes les pages vierges d'abord, puis toutes les pages d'instructions) pour rester organisé.</li>
                        <li><strong>Vérifiez la numérotation des pages</strong> : Rappelez-vous que supprimer des pages change le nombre physique de pages mais ne met pas à jour les numéros de page imprimés dans les en-têtes/pieds de page. La page &quot;5 de 10&quot; dira toujours cela même si le document ne fait plus que 8 pages.</li>
                        <li><strong>Considérez l'organisation plutôt</strong> : Si vous avez besoin de pages dans un ordre différent plutôt que supprimées, utilisez notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline">outil d'organisation PDF</Link> de pdfcanada.ca pour les réarranger d'abord.</li>
                        <li><strong>Vérifiez le contenu après suppression</strong> : Après avoir supprimé des pages, ouvrez le PDF résultant et parcourez-le pour vous assurer que le document s'enchaîne toujours logiquement et qu'aucune page critique n'a été supprimée par erreur.</li>
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
                            <p className="text-yellow-800"><strong>Solution</strong> : Zoomez sur la grille de miniatures ou faites défiler soigneusement toutes les pages. Pour les très gros PDF, les miniatures sont petites—utilisez les étiquettes de numéro de page pour naviguer. Si nécessaire, ouvrez d'abord le PDF original dans un lecteur pour identifier le numéro de page exact.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : J'ai accidentellement supprimé les mauvaises pages</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Votre fichier original reste inchangé sur votre ordinateur. Téléchargez simplement le fichier original à nouveau et supprimez les bonnes pages. C'est pourquoi conserver des sauvegardes de documents importants est crucial.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le bouton de suppression est grisé</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Vous devez sélectionner au moins une page à supprimer avant que le bouton ne devienne actif. Cliquez sur les pages que vous voulez retirer et elles devraient se surligner, puis le bouton de suppression s'activera.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement est très lent avec les gros PDF</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les très gros PDF (200+ pages ou 100+ Mo) peuvent prendre du temps pour charger les miniatures et traiter. Fermez d'autres onglets du navigateur pour libérer de la mémoire. Pour les fichiers extrêmement volumineux, envisagez de diviser le PDF d'abord en utilisant notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">outil d'organisation</Link>.</p>
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
                q: "Comment supprimer des pages d'un PDF gratuitement sur Android ?",
                a: "Ouvrez pdfcanada.ca sur votre navigateur Android, sélectionnez votre fichier, touchez les pages à retirer et cliquez sur 'Supprimer'. C'est gratuit et ça ne nécessite aucune installation."
            },
            {
                q: "Puis-je supprimer une page PDF sur Windows sans Adobe Reader ?",
                a: "Oui ! Utilisez notre outil en ligne. C'est beaucoup plus léger et rapide qu'Adobe Pro, et tout aussi sécurisé grâce au traitement local."
            },
            {
                q: "Peut-on remplacer une page PDF avec cet outil ?",
                a: "Pour remplacer une page, supprimez d'abord la page indésirable ici, puis utilisez notre outil de fusion pour ajouter la nouvelle page à la place."
            },
            {
                q: "Quelle est la différence avec iLovePDF ou SmallPDF ?",
                a: "La sécurité ! Chez nous, votre PDF ne quitte jamais votre appareil. Sur iLovePDF, votre fichier est envoyé sur leurs serveurs."
            }
        ],

        ctaTitle: "Prêt à Nettoyer Votre PDF ?",
        ctaButton: "Supprimer les Pages",
        ctaSubtext: "Gratuit, Rapide et Sécurisé.",
        faqHeading: "Questions Fréquentes",
        quickAnswer: {
            question: "Comment supprimer des pages d'un PDF gratuitement online ?",
            answer: "Pour supprimer une page PDF online gratuitement, utilisez pdfcanada.ca. Téléchargez votre PDF, sélectionnez les pages à retirer et cliquez sur 'Supprimer'. C'est l'alternative sécurisée à Adobe Reader et iLovePDF car tout reste sur votre Android ou PC.",
            tool: "Suppression de Page PDF",
            steps: ["Choisissez votre PDF", "Cochez les pages à retirer", "Téléchargez le PDF nettoyé"]
        }
    },
    pt: {
        seo: {
            title: `Como Excluir Páginas PDF | Guia Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Saiba como remover páginas de PDF com segurança. Nosso guia definitivo de ${CURRENT_YEAR} mostra como excluir páginas localmente em qualquer dispositivo. Grátis e privado.`
        },
        h1: `Como Excluir Páginas de PDF: O Guia de ${CURRENT_YEAR}`,
        subtitle: "Um passo a passo completo sobre como remover páginas indesejadas, em branco ou sensíveis dos seus documentos—com segurança e de graça.",

        intro: (
            <>
                Todos nós já passamos por isso: você baixou um extrato bancário, formulário do governo ou ebook e percebeu que há 10 páginas de letras miúdas irrelevantes ou folhas em branco. Saber <strong>como excluir páginas de PDF</strong> é essencial para manter seus documentos limpos e profissionais.
                <br /><br />
                Nossa ferramenta torna simples <strong>remover páginas PDF</strong> visualmente. Sem linhas de comando, sem software caro—apenas uma grade simples onde você clica no que não quer. O melhor de tudo, acontece localmente no seu dispositivo. <strong>Isso muda hoje.</strong>
                <br /><br />
                Este guia mostrará exatamente como remover páginas de qualquer documento PDF usando <Link href="/" className="text-canada-red hover:underline font-medium">ferramentas modernas e locais</Link> que mantêm seus dados seguros no seu próprio dispositivo.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Removendo Páginas Indesejadas do Seu PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Excluir páginas não precisa ser complicado. Nossa <strong>ferramenta Excluir Páginas PDF</strong> é projetada para ser intuitiva, funcionando muito como uma mesa de luz física onde você pode ver todas as suas páginas de uma vez.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Envie Seu PDF</strong>: Arraste e solte seu arquivo em nossa <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline font-medium">ferramenta Excluir Páginas PDF</Link>. O processamento é <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First</Link>.
                            </li>
                            <li className="pl-2">
                                <strong>Seleção Visual</strong>: Você verá miniaturas de cada página. Sem adivinhação.
                            </li>
                            <li className="pl-2">
                                <strong>Selecione Páginas para Excluir</strong>: Clique uma vez em qualquer miniatura que deseja remover. Um ícone ou borda indicará a seleção. Clique novamente para desmarcar.
                            </li>
                            <li className="pl-2">
                                <strong>Refine Sua Seleção</strong>: Você pode selecionar várias páginas em diferentes seções. Verifique o contador.
                            </li>
                            <li className="pl-2">
                                <strong>Processar e Salvar</strong>: Clique no botão para gerar seu novo PDF. As páginas indesejadas são removidas instantaneamente.
                            </li>
                            <li className="pl-2">
                                <strong>Baixar PDF Limpo</strong>: Seu documento simplificado está pronto. As páginas são removidas da estrutura do arquivo.
                            </li>
                        </ol>
                        <p className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                            <em><strong>Dica Pro:</strong> Se você selecionar a página errada acidentalmente, apenas clique nela novamente para desmarcar.</em>
                        </p>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Cenários Comuns para Excluir Páginas PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Removendo Páginas em Branco</strong>: Digitalização frente e verso frequentemente cria páginas em branco. Exclua-as para um documento mais limpo.</p>
                        <p><strong>Extraindo Seções Relevantes</strong>: Recebeu um relatório de 50 páginas mas só precisa das primeiras 5? Exclua o resto para compartilhar apenas o essencial.</p>
                        <p><strong>Removendo Páginas Confidenciais</strong>: Seu contrato tem informações salariais que não devem ser compartilhadas? Exclua essa página antes de distribuir.</p>
                        <p><strong>Limpando Formulários do Governo</strong>: Remova páginas de instruções longas, mantendo apenas o formulário preenchido.</p>
                    </div>
                )
            },
            {
                id: "privacy-matters",
                title: "Por Que o Processamento Local Importa",
                content: (
                    <>
                        <p className="mb-4">
                            Quando você procura por "excluir páginas pdf online", a maioria exige upload. Para um <strong>contrato legal ou registro médico</strong>, é um risco de privacidade.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> é diferente. Executamos o motor de processamento <em>dentro do seu navegador</em>. Seus arquivos nunca saem do seu dispositivo.
                        </p>
                    </>
                )
            },
            {
                id: "best-practices",
                title: "Melhores Práticas",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Pré-visualize Antes de Excluir</strong>: Revise as miniaturas para garantir que está excluindo as páginas certas.</li>
                        <li><strong>Mantenha Backups</strong>: Salve uma cópia do original antes de excluir páginas de documentos importantes.</li>
                        <li><strong>Exclua em Grupos</strong>: Se remover muitas páginas, faça em lotes para se manter organizado.</li>
                        <li><strong>Verifique Numeração</strong>: Excluir páginas não atualiza números impressos nos rodapés.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problemas Comuns e Soluções",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Não encontro a página para excluir</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Use o zoom ou navegue pelos números das páginas nas miniaturas.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Exclui as páginas erradas</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Seu arquivo original está intacto. Envie novamente e repita o processo.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Botão de excluir cinza</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Selecione pelo menos uma página para ativar o botão.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Isso apaga permanentemente ou apenas oculta?",
                a: "O novo PDF tem as páginas completamente removidas da estrutura do arquivo. Seu arquivo original permanece intocado."
            },
            {
                q: "Posso desfazer após baixar?",
                a: "No novo arquivo, não. Mas seu arquivo original no computador permanece inalterado."
            },
            {
                q: "Existe limite de páginas?",
                a: "Sem limites! Exclua quantas quiser, desde que sobre pelo menos uma."
            },
            {
                q: "Funciona no celular?",
                a: "Sim! Funciona em todos os navegadores modernos, incluindo smartphones e tablets."
            }
        ],

        ctaTitle: "Pronto para Limpar Seu PDF?",
        ctaButton: "Excluir Páginas",
        ctaSubtext: "Grátis, Rápido e Seguro.",
        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como excluir páginas de um PDF de graça online?",
            answer: "Para excluir páginas de PDF grátis, use pdfcanada.ca. Envie seu PDF, selecione páginas para remover e clique em 'Excluir'. É a alternativa segura pois tudo fica no seu dispositivo.",
            tool: "Removedor de Páginas PDF",
            steps: ["Envie seu arquivo PDF", "Clique nas páginas para remover", "Baixe seu PDF limpo"]
        }
    }
});

export const DeletePdfPagesGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": t.quickAnswer.steps[0], "text": t.quickAnswer.steps[0] },
                { "@type": "HowToStep", "position": 2, "name": t.quickAnswer.steps[1], "text": t.quickAnswer.steps[1] },
                { "@type": "HowToStep", "position": 3, "name": t.quickAnswer.steps[2], "text": t.quickAnswer.steps[2] }
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
                    { name: lang === 'fr' ? 'Supprimer des pages PDF' : (lang === 'pt' ? 'Excluir Páginas PDF' : 'Delete PDF Pages'), path: `/${lang}/guides/delete-pdf-pages` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Trash2 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Supprimer des pages' : (lang === 'pt' ? 'Excluir Páginas' : 'Delete Pages'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <ToolPromo tool="delete-pdf-pages" lang={lang} />
                    <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none">
                        <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                            {t.intro}
                        </div>
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-100 dark:text-gray-800">{idx + 1}</span>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-xl">
                        <Zap className="mx-auto mb-4 sm:mb-6 opacity-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4">{t.ctaTitle}</h2>
                        <p className="text-white/80 mb-4 sm:mb-6 md:mb-8 font-medium text-sm sm:text-base">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/delete-pdf-pages`}
                            className="bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section aria-labelledby="faq-title">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            <h2 id="faq-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                {t.faqHeading}
                            </h2>
                        </div>
                        <div className="grid gap-3 sm:gap-4">
                            {t.faq && t.faq.map((item: any, i: number) => (
                                <details key={i} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-canada-red transition-all">
                                    <summary className="font-bold text-sm sm:text-base md:text-lg text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center group-open:text-canada-red">
                                        {item.q}
                                        <span className="text-gray-300 group-open:rotate-180 transition-transform text-sm sm:text-base">▼</span>
                                    </summary>
                                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-3 sm:pt-4">
                                        {item.a}
                                    </p>
                                </details>
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

                    <RelatedTools lang={lang} currentPath="/guides/delete-pdf-pages" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};

