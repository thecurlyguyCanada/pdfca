'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Move, Smartphone, Monitor, MousePointer2, GripVertical } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: "How to Organize PDF Pages | Free Drag-and-Drop Guide | pdfcanada.ca",
            desc: `Reorder your PDF document exactly how you want. Our ${CURRENT_YEAR} guide shows you how to rearrange pages securely on your device. No uploads, fast, and 100% private.`
        },
        h1: `How to Organize and Reorder PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "The easiest, most secure way to shuffle and move pages in your PDF document with drag-and-drop simplicity.",

        intro: "Got a document that's all out of order? Maybe you scanned pages in the wrong sequence, or you need to move an appendix to the front of a report. Knowing how to **organize PDF pages online** is a critical skill for creating professional documents. Our **free PDF page organizer** allows you to visually **reorder PDF pages** using a simple drag-and-drop interface. No complicated menus, just your document, exactly how you want it, processed locally on your device for maximum privacy.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Reordering PDF Pages with Drag-and-Drop",
                content: `Using our **reorder PDF pages free** tool is intuitive, designed to feel just like moving physical papers on a desk:

1. **Upload Your PDF File**: Select your PDF document by clicking to browse or dragging it onto the browser window. Our local engine opens it instantly—no waiting for cloud uploads, no progress bars.
2. **Preview Page Thumbnails**: You'll see a visual grid of all page thumbnails, displaying the entire document at a glance. This overview makes it easy to identify which pages need rearranging.
3. **Drag and Drop to Reorder**: Click and hold any page thumbnail, then drag it to its new position in the sequence. Other pages automatically shift to make room. You can move pages one at a time or rearrange multiple sections.
4. **Visual Feedback**: As you drag, you'll see real-time indicators showing where the page will be placed when you release. This prevents accidental misplacements.
5. **Review the New Order**: Double-check that the sequence is correct. Page numbers update dynamically as you reorder, making it easy to verify the final arrangement.
6. **Save Organized PDF**: Once the order is perfect, click **'Save Organized PDF'** or **'Process PDF'**. A new copy with your custom page sequence is generated immediately and ready to download.`
            },
            {
                id: "use-cases",
                title: "Common Scenarios for Reordering PDF Pages",
                content: (
                    <div className="space-y-4">
                        <p><strong>Fixing Scanner Mistakes</strong>: You scanned a stack of papers but some pages went through in the wrong order. Reorder them to match the original sequence without rescanning everything.</p>
                        <p><strong>Repositioning Cover Pages</strong>: Your scan started with page 1 instead of the cover page. Move the cover page to the front where it belongs.</p>
                        <p><strong>Organizing Merged Documents</strong>: You merged multiple PDFs using our <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline">Merge PDF tool</Link>, but the sections are out of order. Rearrange them into a logical flow.</p>
                        <p><strong>Academic Paper Structure</strong>: Your thesis requires a specific order: abstract, acknowledgments, table of contents, chapters, appendices, references. Reorder scanned sections to match your university's formatting requirements.</p>
                        <p><strong>Legal Document Exhibits</strong>: Court submissions often require exhibits in a specific numbered order (Exhibit A, B, C). Reorder pages to match the required sequence for filing.</p>
                        <p><strong>Business Proposal Customization</strong>: You want the executive summary and pricing at the front for some clients, but at the back for others. Reorder pages to create custom versions without recreating the entire proposal.</p>
                        <p><strong>Tax Return Organization for CRA</strong>: Assemble receipts, T4 slips, and forms in the order required by the CRA for easier processing and faster assessment.</p>
                    </div>
                )
            },
            {
                id: "privacy",
                title: "Local-First Security: Your Files Never Leave Your Browser",
                content: `At pdfcanada.ca, we believe your documents are private. Unlike other tools that upload your files to remote servers for processing, our organizer runs entirely **inside your web browser** using modern JavaScript PDF libraries.

**Why This Matters:**
- **No Uploads**: Your sensitive documents never touch our servers. Everything stays on your device.
- **Secure Processing**: All page reordering happens in your device's RAM. No temporary files created on remote servers.
- **Instant Speed**: No network latency, no queue times, no bandwidth limitations. Processing is immediate.
- **Offline Capable**: Once the page loads, you can even disconnect from the internet and continue working.
- **Ideal for Confidential Documents**: Perfect for legal contracts, medical records, financial statements, tax returns, HR documents, and any sensitive materials.
- **No Data Retention**: Since we never receive your files, there's nothing to store, log, or potentially leak.`
            },
            {
                id: "mobile",
                title: "Organize PDFs on the Go: iPhone & Android Support",
                content: `Need to fix a document order while on a commute or working remotely? Our site is fully responsive and optimized for touch interfaces. You can **drag and drop PDF pages** on your smartphone or tablet just as easily as on a desktop.

**Mobile Features:**
- Touch-friendly interface with large tap targets for selecting and moving pages
- Pinch-to-zoom on page thumbnails to verify content before reordering
- Swipe gestures for quick navigation through long documents
- Full drag-and-drop support on iOS Safari and Android Chrome
- No apps to install—works directly in your mobile browser
- Same privacy and local processing as desktop—files never leave your device`
            },
            {
                id: "best-practices",
                title: "Best Practices for Organizing PDF Pages",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Plan the Structure First</strong>: Before reordering, write down or mentally map out the desired sequence. This prevents confusion with large documents containing many pages.</li>
                        <li><strong>Work in Sections</strong>: For long documents, organize related pages into logical sections first (intro, body, conclusion, appendices), then arrange within each section.</li>
                        <li><strong>Keep Original Backups</strong>: Save a copy of the original page order before reorganizing, especially for important documents. This lets you reference or restore the original if needed.</li>
                        <li><strong>Use Page Content Previews</strong>: Click on thumbnails to enlarge them if you're unsure what content is on each page. This prevents accidentally moving the wrong pages.</li>
                        <li><strong>Check Page Numbering</strong>: Remember that reordering changes physical sequence but doesn't update printed page numbers in headers/footers. Page &quot;5&quot; will still say &quot;5&quot; even if you move it to position 10.</li>
                        <li><strong>Combine with Other Tools</strong>: Use our <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline">Delete Pages tool</Link> to remove unwanted pages before organizing, creating a cleaner final document.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Common Reordering Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Pages won't drag or move</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Ensure you're clicking and holding on the page thumbnail itself, not the surrounding white space. On mobile, try a long-press gesture. If the issue persists, refresh the page and reload your PDF.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Pages moved to the wrong position</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Simply drag the page again to the correct position. You can reorder as many times as needed before clicking &quot;Save&quot;. The interface allows unlimited adjustments before finalizing.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Can't see page content clearly in thumbnails</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Use your browser's zoom feature (Ctrl/Cmd +) to enlarge thumbnails, or on mobile, use pinch-to-zoom. Some tools also offer a preview mode—click a thumbnail to see a larger version.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Organized PDF downloads with pages still in wrong order</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Make sure you clicked &quot;Save&quot; or &quot;Process&quot; after reordering. The changes only apply when you generate the new PDF. Also verify you're opening the newly downloaded file, not the original.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Very large PDFs are slow to reorder</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Large PDFs (100+ pages or 50+ MB) can be memory-intensive. Close other browser tabs to free up RAM. Consider splitting very large files into smaller sections, organizing each separately, then merging them back together.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Can I move pages between different PDF files?",
                a: "Currently, this tool supports reordering pages within a single PDF. If you need to combine multiple files and then rearrange them, use our Merge PDF tool to combine them first, then use the Organize tool to reorder the pages in the merged document."
            },
            {
                q: "What happens to my original file when I reorder pages?",
                a: "Nothing! Your original file remains completely untouched on your machine. We create a completely new PDF with the reordered pages for you to download. The original stays exactly as it was, so you always have a backup."
            },
            {
                q: "Does this work with large documents?",
                a: "Yes! Since processing happens locally in your browser, the limit is simply your device's available memory. You can organize PDFs with dozens or even hundreds of pages without the timeouts and file size restrictions common in cloud-based tools. Most modern computers handle large documents easily."
            },
            {
                q: "Will reordering affect the quality of my pages?",
                a: "No. Reordering only changes the sequence of pages—it doesn't compress, re-render, or modify the actual page content. Every page maintains 100% of its original quality, formatting, images, and text."
            },
            {
                q: "Can I reorder password-protected PDFs?",
                a: "You'll need to unlock the PDF first before reordering. If you know the password, use a PDF viewer to open and save an unprotected copy, or use our Unlock PDF tool. Once unlocked, you can freely reorganize pages. You can re-apply password protection after organizing if needed."
            },
            {
                q: "Does the tool work on mobile devices?",
                a: "Absolutely! Our organize tool is fully optimized for touchscreens. You can drag and drop pages on iPhone, iPad, and Android devices just as easily as on desktop. The interface adapts to mobile screens for easy page manipulation on the go."
            },
            {
                q: "What happens to page numbers after I reorder?",
                a: "Physical page positions change (page 5 might move to position 2), but printed page numbers in headers/footers remain unchanged. If a page has &quot;5&quot; printed on it, it will still display &quot;5&quot; even if you move it to a different position in the document sequence."
            },
            {
                q: "Can I undo changes if I make a mistake?",
                a: "Before clicking 'Save' or 'Process', you can drag pages as many times as needed to correct mistakes. Once you download the reorganized PDF, that order is permanent in the new file. However, your original file remains unchanged, so you can always start over from the original if needed."
            }
        ],

        ctaTitle: "Fixed Your Document Order Now",
        ctaButton: "Start Organizing PDF",
        ctaSubtext: "Fast, Free, and 100% Private Local Processing."
    },
    fr: {
        seo: {
            title: `Comment Organiser vos PDF | Guide Glisser-Déposer ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Réorganisez les pages de vos PDF exactement comme vous le souhaitez. Notre guide ${CURRENT_YEAR} vous montre comment faire en toute sécurité et localement sans téléchargement.`
        },
        h1: "Comment Réorganiser les Pages PDF : Le Guide Complet",
        subtitle: "Glisser-déposer pour réarranger, reordonner et perfectionner la structure de vos documents PDF.",

        intro: "Avez-vous déjà eu un PDF où les pages sont dans le mauvais ordre ? Peut-être que la page de titre est à la fin, ou que les annexes sont mélangées dans le corps du document. Notre **outil de réorganisation PDF** vous permet de réarranger les pages par simple glisser-déposer, le tout traité localement pour une confidentialité maximale.",

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Réorganisation des Pages PDF par Glisser-Déposer",
                content: `Utiliser notre **outil gratuit de réorganisation de pages PDF** est intuitif, conçu pour ressembler au déplacement de feuilles de papier physiques sur un bureau :

1. **Téléchargez votre fichier PDF** : Sélectionnez votre document PDF en cliquant pour parcourir ou en le glissant dans la fenêtre du navigateur. Notre moteur local l'ouvre instantanément—pas d'attente pour les téléchargements cloud, pas de barres de progression.
2. **Aperçu des miniatures de pages** : Vous verrez une grille visuelle de toutes les miniatures de pages, affichant l'ensemble du document d'un coup d'œil. Cet aperçu facilite l'identification des pages nécessitant un réarrangement.
3. **Glissez-déposez pour réorganiser** : Cliquez et maintenez n'importe quelle miniature de page, puis faites-la glisser vers sa nouvelle position dans la séquence. Les autres pages se décalent automatiquement pour faire de la place. Vous pouvez déplacer les pages une à la fois ou réarranger plusieurs sections.
4. **Retour visuel** : Pendant que vous faites glisser, vous verrez des indicateurs en temps réel montrant où la page sera placée lorsque vous la relâcherez. Cela évite les erreurs de placement accidentelles.
5. **Vérifiez le nouvel ordre** : Vérifiez bien que la séquence est correcte. Les numéros de page se mettent à jour dynamiquement pendant que vous réorganisez, facilitant la vérification de l'arrangement final.
6. **Enregistrez le PDF organisé** : Une fois l'ordre parfait, cliquez sur **'Enregistrer le PDF organisé'** ou **'Traiter le PDF'**. Une nouvelle copie avec votre séquence de pages personnalisée est générée immédiatement et prête à télécharger.`
            },
            {
                id: "use-cases",
                title: "Scénarios Courants pour Réorganiser les Pages PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Correction d'erreurs de scanner</strong> : Vous avez scanné une pile de papiers mais certaines pages sont passées dans le mauvais ordre. Réorganisez-les pour correspondre à la séquence originale sans tout rescanner.</p>
                        <p><strong>Repositionnement des pages de couverture</strong> : Votre scan a commencé avec la page 1 au lieu de la page de couverture. Déplacez la page de couverture à l'avant où elle devrait être.</p>
                        <p><strong>Organisation de documents fusionnés</strong> : Vous avez fusionné plusieurs PDF en utilisant notre <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline">outil de fusion PDF</Link>, mais les sections sont dans le désordre. Réarrangez-les dans un flux logique.</p>
                        <p><strong>Structure de travaux académiques</strong> : Votre thèse nécessite un ordre spécifique : résumé, remerciements, table des matières, chapitres, annexes, références. Réorganisez les sections scannées pour correspondre aux exigences de formatage de votre université.</p>
                        <p><strong>Pièces de documents juridiques</strong> : Les soumissions judiciaires exigent souvent des pièces dans un ordre numéroté spécifique (Pièce A, B, C). Réorganisez les pages pour correspondre à la séquence requise pour le dépôt.</p>
                        <p><strong>Personnalisation de propositions commerciales</strong> : Vous voulez le résumé exécutif et la tarification au début pour certains clients, mais à la fin pour d'autres. Réorganisez les pages pour créer des versions personnalisées sans recréer toute la proposition.</p>
                        <p><strong>Organisation de déclaration de revenus pour l'ARC</strong> : Assemblez les reçus, feuillets T4 et formulaires dans l'ordre requis par l'ARC pour un traitement plus facile et une évaluation plus rapide.</p>
                    </div>
                )
            },
            {
                id: "privacy",
                title: "Sécurité Locale Prioritaire : Vos Fichiers Ne Quittent Jamais Votre Navigateur",
                content: `Chez pdfcanada.ca, nous croyons que vos documents sont privés. Contrairement à d'autres outils qui téléchargent vos fichiers sur des serveurs distants pour traitement, notre organisateur fonctionne entièrement **à l'intérieur de votre navigateur web** en utilisant des bibliothèques PDF JavaScript modernes.

**Pourquoi C'est Important :**
- **Pas de Téléchargements** : Vos documents sensibles ne touchent jamais nos serveurs. Tout reste sur votre appareil.
- **Traitement Sécurisé** : Toute réorganisation de pages se fait dans la RAM de votre appareil. Aucun fichier temporaire créé sur des serveurs distants.
- **Vitesse Instantanée** : Pas de latence réseau, pas de temps d'attente, pas de limitations de bande passante. Le traitement est immédiat.
- **Capable Hors Ligne** : Une fois la page chargée, vous pouvez même vous déconnecter d'Internet et continuer à travailler.
- **Idéal pour les Documents Confidentiels** : Parfait pour les contrats juridiques, dossiers médicaux, états financiers, déclarations de revenus, documents RH et tout matériel sensible.
- **Aucune Rétention de Données** : Puisque nous ne recevons jamais vos fichiers, il n'y a rien à stocker, enregistrer ou potentiellement divulguer.`
            },
            {
                id: "mobile",
                title: "Organisez les PDF en Déplacement : Support iPhone et Android",
                content: `Besoin de corriger l'ordre d'un document pendant un trajet ou en travaillant à distance ? Notre site est entièrement responsive et optimisé pour les interfaces tactiles. Vous pouvez **glisser-déposer des pages PDF** sur votre smartphone ou tablette aussi facilement que sur un ordinateur de bureau.

**Fonctionnalités Mobiles :**
- Interface tactile avec de grandes zones tactiles pour sélectionner et déplacer les pages
- Pincement pour zoomer sur les miniatures de pages pour vérifier le contenu avant réorganisation
- Gestes de balayage pour une navigation rapide dans les longs documents
- Support complet du glisser-déposer sur iOS Safari et Android Chrome
- Aucune application à installer—fonctionne directement dans votre navigateur mobile
- Même confidentialité et traitement local que sur ordinateur—les fichiers ne quittent jamais votre appareil`
            },
            {
                id: "best-practices",
                title: "Meilleures Pratiques pour Organiser les Pages PDF",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Planifiez d'abord la structure</strong> : Avant de réorganiser, notez ou cartographiez mentalement la séquence désirée. Cela évite la confusion avec les gros documents contenant de nombreuses pages.</li>
                        <li><strong>Travaillez par sections</strong> : Pour les longs documents, organisez d'abord les pages liées en sections logiques (intro, corps, conclusion, annexes), puis arrangez au sein de chaque section.</li>
                        <li><strong>Conservez des sauvegardes originales</strong> : Enregistrez une copie de l'ordre de pages original avant de réorganiser, surtout pour les documents importants. Cela vous permet de référencer ou restaurer l'original si nécessaire.</li>
                        <li><strong>Utilisez les aperçus de contenu de page</strong> : Cliquez sur les miniatures pour les agrandir si vous n'êtes pas sûr du contenu de chaque page. Cela évite de déplacer accidentellement les mauvaises pages.</li>
                        <li><strong>Vérifiez la numérotation des pages</strong> : Rappelez-vous que la réorganisation change la séquence physique mais ne met pas à jour les numéros de page imprimés dans les en-têtes/pieds de page. La page &quot;5&quot; dira toujours &quot;5&quot; même si vous la déplacez en position 10.</li>
                        <li><strong>Combine avec d'autres outils</strong> : Utilisez notre <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline">outil de suppression de pages</Link> pour retirer les pages indésirables avant d'organiser, créant un document final plus propre.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problèmes de Réorganisation Courants et Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les pages ne se font pas glisser ou déplacer</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Assurez-vous de cliquer et maintenir sur la miniature de page elle-même, pas sur l'espace blanc environnant. Sur mobile, essayez un geste d'appui prolongé. Si le problème persiste, rafraîchissez la page et rechargez votre PDF.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les pages se sont déplacées vers la mauvaise position</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Faites simplement glisser la page à nouveau vers la position correcte. Vous pouvez réorganiser autant de fois que nécessaire avant de cliquer sur &quot;Enregistrer&quot;. L'interface permet des ajustements illimités avant finalisation.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le contenu des pages n'est pas clairement visible dans les miniatures</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Utilisez la fonction de zoom de votre navigateur (Ctrl/Cmd +) pour agrandir les miniatures, ou sur mobile, utilisez le pincement pour zoomer. Certains outils offrent également un mode aperçu—cliquez sur une miniature pour voir une version plus grande.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le PDF organisé se télécharge avec des pages toujours dans le mauvais ordre</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Assurez-vous d'avoir cliqué sur &quot;Enregistrer&quot; ou &quot;Traiter&quot; après la réorganisation. Les modifications ne s'appliquent que lorsque vous générez le nouveau PDF. Vérifiez également que vous ouvrez le fichier nouvellement téléchargé, pas l'original.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les très gros PDF sont lents à réorganiser</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les gros PDF (100+ pages ou 50+ Mo) peuvent être gourmands en mémoire. Fermez d'autres onglets du navigateur pour libérer de la RAM. Envisagez de diviser les très gros fichiers en sections plus petites, d'organiser chacune séparément, puis de les fusionner à nouveau.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Puis-je déplacer des pages entre différents fichiers PDF ?",
                a: "Actuellement, cet outil prend en charge la réorganisation de pages au sein d'un seul PDF. Si vous devez combiner plusieurs fichiers puis les réarranger, utilisez notre outil de fusion PDF pour les combiner d'abord, puis utilisez l'outil d'organisation pour réorganiser les pages du document fusionné."
            },
            {
                q: "Qu'arrive-t-il à mon fichier original lorsque je réorganise les pages ?",
                a: "Rien ! Votre fichier original reste complètement intact sur votre machine. Nous créons un PDF complètement nouveau avec les pages réorganisées que vous téléchargez. L'original reste exactement comme il était, donc vous avez toujours une sauvegarde."
            },
            {
                q: "Cela fonctionne-t-il avec les gros documents ?",
                a: "Oui ! Puisque le traitement se fait localement dans votre navigateur, la limite est simplement la mémoire disponible de votre appareil. Vous pouvez organiser des PDF avec des dizaines ou même des centaines de pages sans les délais d'attente et restrictions de taille de fichier communs aux outils basés sur le cloud. La plupart des ordinateurs modernes gèrent facilement les gros documents."
            },
            {
                q: "La réorganisation affectera-t-elle la qualité de mes pages ?",
                a: "Non. La réorganisation change uniquement la séquence des pages—elle ne compresse pas, ne refait pas le rendu ni ne modifie le contenu réel des pages. Chaque page maintient 100% de sa qualité originale, formatage, images et texte."
            },
            {
                q: "Puis-je réorganiser des PDF protégés par mot de passe ?",
                a: "Vous devrez d'abord déverrouiller le PDF avant de le réorganiser. Si vous connaissez le mot de passe, utilisez un lecteur PDF pour ouvrir et enregistrer une copie non protégée, ou utilisez notre outil de déverrouillage PDF. Une fois déverrouillé, vous pouvez librement réorganiser les pages. Vous pouvez réappliquer une protection par mot de passe après organisation si nécessaire."
            },
            {
                q: "L'outil fonctionne-t-il sur les appareils mobiles ?",
                a: "Absolument ! Notre outil d'organisation est entièrement optimisé pour les écrans tactiles. Vous pouvez glisser-déposer des pages sur iPhone, iPad et appareils Android aussi facilement que sur ordinateur de bureau. L'interface s'adapte aux écrans mobiles pour une manipulation facile des pages en déplacement."
            },
            {
                q: "Qu'arrive-t-il aux numéros de page après réorganisation ?",
                a: "Les positions physiques des pages changent (la page 5 peut se déplacer en position 2), mais les numéros de page imprimés dans les en-têtes/pieds de page restent inchangés. Si une page a &quot;5&quot; imprimé dessus, elle affichera toujours &quot;5&quot; même si vous la déplacez vers une position différente dans la séquence du document."
            },
            {
                q: "Puis-je annuler les modifications si je fais une erreur ?",
                a: "Avant de cliquer sur 'Enregistrer' ou 'Traiter', vous pouvez faire glisser les pages autant de fois que nécessaire pour corriger les erreurs. Une fois que vous téléchargez le PDF réorganisé, cet ordre est permanent dans le nouveau fichier. Cependant, votre fichier original reste inchangé, donc vous pouvez toujours recommencer à partir de l'original si nécessaire."
            }
        ],

        ctaTitle: "Prêt à Réorganiser Votre PDF ?",
        ctaButton: "Commencer la Réorganisation",
        ctaSubtext: "Gratuit, Rapide et Sécurisé."
    }
});

export const OrganizePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Upload", "text": "Select your file. Each page appears as a movable thumbnail." },
                { "@type": "HowToStep", "position": 2, "name": "Drag and Drop", "text": "Click and hold a page thumbnail, then move it to its new position." },
                { "@type": "HowToStep", "position": 3, "name": "Save", "text": "Click Organize PDF and download your reordered file." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-05-01",
            "dateModified": "2025-12-24",
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
                "@id": `https://www.pdfcanada.ca${lang === 'fr' ? '/fr' : ''}/guides/organize-pdf`
            }
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/organize-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment réorganiser les pages d'un PDF gratuitement?" : "How do I reorder PDF pages for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil d'organisation PDF de pdfcanada.ca. Téléchargez votre PDF, glissez-déposez les miniatures de pages pour les réarranger, puis téléchargez votre PDF réorganisé. Interface visuelle intuitive, traitement 100% local."
                        : "Use pdfcanada.ca's Organize PDF tool. Upload your PDF, drag-and-drop page thumbnails to rearrange, then download your reordered PDF. Visual intuitive interface, 100% local processing.",
                    tool: "PDF Page Organizer",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Glissez-déposez pour réorganiser les pages", "Téléchargez le PDF réorganisé"]
                        : ["Upload your PDF file", "Drag-and-drop to reorder pages", "Download reordered PDF"]
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Organize PDF', path: '/guides/organize-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Move size={32} />}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
                    { name: 'Organize PDF Guide', href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
                        <Zap className="text-amber-600 shrink-0 w-6 h-6 sm:w-7 sm:h-7" />
                        <p className="text-sm sm:text-base md:text-lg text-amber-900 dark:text-amber-300">
                            <strong>Insider Tip:</strong> You can combine this tool with our <Link href={`/${lang}/delete-pdf-pages`} className="underline decoration-dashed hover:decoration-solid hover:text-amber-800">'Delete Pages' tool</Link> to perfectly curate your final document before sharing. Perfect for clean board reports!
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-10 sm:space-y-16 md:space-y-20">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                                    <CheckCircle size={20} className="text-canada-red sm:w-6 sm:h-6" /> {section.title}
                                </h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? (
                                        <MarkdownContent content={section.content} />
                                    ) : (
                                        section.content
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Features Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-12 sm:my-18 md:my-24">
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <GripVertical className="text-canada-red mx-auto mb-3 sm:mb-4 md:mb-6 w-8 h-8 sm:w-10 sm:h-10" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Drag & Drop</h3>
                            <p className="text-sm sm:text-base text-gray-500">Visual interface makes reordering intuitive and fast.</p>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Shield className="text-canada-red mx-auto mb-3 sm:mb-4 md:mb-6 w-8 h-8 sm:w-10 sm:h-10" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">100% Private</h3>
                            <p className="text-sm sm:text-base text-gray-500">Files never leave your browser. Local processing only.</p>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center sm:col-span-2 md:col-span-1">
                            <Zap className="text-canada-red mx-auto mb-3 sm:mb-4 md:mb-6 w-8 h-8 sm:w-10 sm:h-10" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Instant Save</h3>
                            <p className="text-sm sm:text-base text-gray-500">Generate your new PDF in milliseconds, not minutes.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-12 sm:my-18 md:my-24">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 md:mb-12 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-900 rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-black mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3 text-gray-900 dark:text-white">
                                        <MousePointer2 size={18} className="text-canada-red sm:w-6 sm:h-6" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        <MarkdownContent content={item.a} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <section className="bg-canada-red p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/organize-pdf`}
                            className="bg-white text-canada-red px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 lg:px-14 rounded-full font-black text-base sm:text-lg md:text-xl lg:text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment réorganiser les pages d'un PDF gratuitement?" : "How do I reorder PDF pages for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil d'organisation PDF de pdfcanada.ca. Téléchargez votre PDF, glissez-déposez les miniatures de pages pour les réarranger, puis téléchargez votre PDF réorganisé. Interface visuelle intuitive, traitement 100% local."
                            : "Use pdfcanada.ca's Organize PDF tool. Upload your PDF, drag-and-drop page thumbnails to rearrange, then download your reordered PDF. Visual intuitive interface, 100% local processing."}
                        toolName="PDF Page Organizer"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Glissez-déposez pour réorganiser les pages", "Téléchargez le PDF réorganisé"]
                            : ["Upload your PDF file", "Drag-and-drop to reorder pages", "Download reordered PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/organize-pdf" category="organize" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};


