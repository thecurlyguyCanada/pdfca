import Link from 'next/link';
import React from 'react';
import { RotateCw, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Monitor, RefreshCcw } from 'lucide-react';
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
 title: `How to Rotate PDF Pages | Free & Permanent ${CURRENT_YEAR} Guide | pdfcanada.ca`,
 desc: `Fix upside-down PDFs forever. Our ${CURRENT_YEAR} guide teaches you how to rotate pages permanently in your browser. Secure local-first processing ensures your privacy.`
 },
 h1: "How to Rotate PDF Pages: The ${CURRENT_YEAR} Guide",
 subtitle: "The simple guide to fixing incorrectly oriented documents permanently.",

 intro: (
 <>
 We've all been there: you open an important scan and it's sideways. Or worse, the entire document is upside down. If you're looking to <Link href="/${lang}/rotate-pdf" className="text-canada-red hover:underline font-bold">rotate PDF online free</Link>, you've come to the right place.
 <br /><br />
 Unlike a standard PDF viewer where rotation is only temporary (it resets when you close the file), our tool updates the file structure so the orientation is fixed <strong>permanently</strong> for everyone who opens it.
 </>
 ),

 sections: [
 {
 id: "how-to",
 title: "Step-by-Step: Fixing PDF Orientation Permanently",
 content: (
 <>
 <p className="mb-4">
 Rotating pages permanently ensures everyone who opens your document sees the correct orientation, regardless of which PDF viewer or device they're using.
 </p>
 <ol className="list-decimal pl-5 space-y-4 mb-6">
 <li className="pl-2">
 <strong>Upload Your PDF</strong>: Drag and drop your misoriented file into our <Link href="/${lang}/rotate-pdf" className="text-canada-red hover:underline font-medium">Rotate PDF tool</Link>. Because we use <Link href="/${lang}/guides/ultimate-pdf-guide" className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First technology</Link>, processing begins instantly—no upload wait times.
 </li>
 <li className="pl-2">
 <strong>Preview Page Thumbnails</strong>: You'll see thumbnail previews of all pages. This makes it easy to identify which pages need rotation at a glance.
 </li>
 <li className="pl-2">
 <strong>Rotate Individual Pages</strong>: Click the clockwise or counterclockwise rotation buttons beneath each page thumbnail to rotate 90° increments. You can rotate pages 90°, 180°, or 270° as needed.
 </li>
 <li className="pl-2">
 <strong>Use Bulk Operations (Optional)</strong>: If all pages need the same rotation, use "Rotate All Pages" to apply the rotation to every page at once. This is perfect for documents scanned upside down.
 </li>
 <li className="pl-2">
 <strong>Review Your Changes</strong>: Double-check that each page is oriented correctly before finalizing. You can rotate pages multiple times until they're perfect.
 </li>
 <li className="pl-2">
 <strong>Download Fixed PDF</strong>: Click 'Process PDF' and your permanently rotated document downloads immediately. The orientation is saved in the file structure, not just displayed differently.
 </li>
 </ol>
 </>
 )
 },
 {
 id: "why-rotate",
 title: "Why Correct Orientation Matters for Professional Documents",
 content: (
 <>
 <p className="mb-4">
 Incorrect orientation isn't just a minor annoyance—it can have serious professional and practical consequences:
 </p>
 <div className="space-y-4">
 <div>
 <strong className="text-canada-red">Readability Issues</strong>: Sideways or upside-down documents are nearly impossible to read on mobile devices without constant zooming and rotating. This frustrates recipients and reflects poorly on your attention to detail.
 </div>
 <div>
 <strong className="text-canada-red">Professional Credibility</strong>: Sending a sideways contract to a client, employer, or government agency signals carelessness. In competitive job applications or business proposals, presentation quality matters.
 </div>
 <div>
 <strong className="text-canada-red">Printing Problems</strong>: Misoriented PDFs print incorrectly, wasting paper and ink. Recipients may struggle to configure their printer settings to compensate.
 </div>
 <div>
 <strong className="text-canada-red">Accessibility Barriers</strong>: Screen readers and assistive technologies can malfunction with incorrectly oriented documents, creating accessibility issues for people with disabilities.
 </div>
 <div>
 <strong className="text-canada-red">Archival Concerns</strong>: Documents stored in company archives or government databases should be properly oriented for long-term usability and searchability.
 </div>
 </div>
 </>
 )
 },
 {
 id: "use-cases",
 title: "Common Scenarios Requiring PDF Rotation",
 content: (
 <div className="space-y-4">
 <p><strong>Scanned Mixed-Orientation Documents</strong>: You scanned a stack of papers containing both portrait letters and landscape charts. Some pages came out sideways. Rotate only the landscape pages to match the rest of the document orientation.</p>
 <p><strong>Upside-Down Scanner Feeder Loads</strong>: You accidentally loaded an entire document upside down in the scanner feeder. Use "Rotate All 180°" to fix every page in one operation.</p>
 <p><strong>Tax Return Preparation</strong>: CRA forms and receipts scanned at different times may have inconsistent orientations. Rotate pages to create a professionally organized tax submission package.</p>
 <p><strong>Job Application Documents</strong>: Your resume is portrait but your portfolio samples scanned as landscape. Rotate portfolio pages to match your resume orientation before merging into one PDF.</p>
 <p><strong>Legal Document Exhibits</strong>: Court submissions often include exhibits (photos, diagrams, contracts) with various orientations. Rotate all exhibits to portrait for consistent presentation.</p>
 <p><strong>Academic Thesis Appendices</strong>: Your thesis is portrait, but appendix charts and graphs scanned as landscape. Rotate appendix pages to maintain consistent orientation throughout your submission.</p>
 <p><strong>Real Estate Listings</strong>: Property photos and floor plans may scan in different orientations. Rotate all images to portrait or landscape for a cohesive listing package.</p>
 </div>
 )
 },
 {
 id: "best-practices",
 title: "Best Practices for Rotating PDFs",
 content: (
 <ul className="list-disc pl-5 space-y-3">
 <li><strong>Preview Before Processing</strong>: Always review the thumbnail previews to ensure you're rotating the correct pages in the right direction. A quick double-check saves time.</li>
 <li><strong>Rotate in 90° Increments</strong>: PDFs support 90°, 180°, and 270° rotations. Avoid tools that offer arbitrary angles, as they may rasterize your pages and reduce quality.</li>
 <li><strong>Match Document Flow</strong>: Keep consistent orientation throughout each section. If your main text is portrait, rotate all landscape pages unless they're intentionally designed (like wide charts).</li>
 <li><strong>Test on Multiple Devices</strong>: After rotating, open the PDF on different devices (desktop, mobile, tablet) to verify the orientation displays correctly everywhere.</li>
 <li><strong>Keep Original Backups</strong>: Before rotating important documents, save a copy of the original in case you need to reference the pre-rotation version.</li>
 <li><strong>Consider Page Content</strong>: For pages with images or diagrams, ensure rotation doesn't make them harder to understand. Sometimes landscape orientation is intentional for wide content.</li>
 </ul>
 )
 },
 {
 id: "troubleshooting",
 title: "Common Rotation Issues and Solutions",
 content: (
 <div className="space-y-4">
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problem: Rotation resets when I open the PDF</h4>
 <p className="text-yellow-800"><strong>Solution</strong>: Your PDF viewer may be applying temporary rotation. Our tool permanently saves rotation into the PDF file structure. Try opening the rotated file in a different PDF viewer to confirm the rotation is saved.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problem: Text or images look blurry after rotation</h4>
 <p className="text-yellow-800"><strong>Solution</strong>: Proper PDF rotation (like ours) only changes orientation metadata and should never reduce quality. If content looks blurry, the original scan may have been low resolution. Rotation doesn't add or remove quality—it only changes the viewing angle.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problem: I rotated the wrong direction</h4>
 <p className="text-yellow-800"><strong>Solution</strong>: Simply upload the file again and rotate in the opposite direction. To fix a 90° clockwise rotation, apply a 270° clockwise rotation (or 90° counter-clockwise) to return to the original orientation.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problem: Some pages didn't rotate</h4>
 <p className="text-yellow-800"><strong>Solution</strong>: Review the page thumbnails to ensure you clicked the rotation button for each intended page. The tool only rotates pages you explicitly select. If using "Rotate All", verify that option successfully applied to every page.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problem: Landscape pages still look wrong after rotation</h4>
 <p className="text-yellow-800"><strong>Solution</strong>: Some content is intentionally designed in landscape orientation (wide charts, tables). Before rotating, consider whether the page was meant to be landscape. You can use our <Link href="/${lang}/organize-pdf" className="text-canada-red hover:underline font-semibold">Organize PDF tool</Link> to group landscape pages separately if needed.</p>
 </div>
 </div>
 )
 }
 ],

 faq: [
 {
 q: "Will rotating the PDF reduce the quality or make it blurry?",
 a: "No. Our tool only updates the orientation metadata within the PDF structure. The actual content—text, images, and graphics—remains completely unchanged. Rotation doesn't re-render or compress your pages, so quality stays identical to the original."
 },
 {
 q: "Can I rotate just one page in a multi-page PDF?",
 a: "Yes! You can select specific pages to rotate 90°, 180°, or 270° without affecting the rest of the file. This is perfect for documents with mixed-orientation content, like a report with landscape charts among portrait pages."
 },
 {
 q: "Is the rotation permanent, or will it reset when I reopen the PDF?",
 a: "The rotation is completely permanent. Unlike PDF viewers that temporarily rotate the display, our tool saves the new orientation directly into the PDF file structure. Anyone who opens your rotated PDF on any device or application will see the corrected orientation."
 },
 {
 q: "Can I rotate pages on my phone or tablet?",
 a: "Absolutely! Our rotate tool works on all modern browsers, including iOS Safari and Android Chrome. The touch interface makes it easy to tap rotation buttons on mobile devices. Processing happens locally on your device regardless of platform."
 },
 {
 q: "What if I rotated a page in the wrong direction?",
 a: "No problem! Simply upload the file again and rotate in the opposite direction. Since rotation happens in 90° increments, you can always correct a mistake. For example, if you rotated 90° clockwise by accident, rotate 270° clockwise (or 90° counterclockwise) to return to the original orientation."
 },
 {
 q: "Is there a limit to how many pages I can rotate?",
 a: "No. You can rotate PDFs with hundreds of pages without any restrictions. Since processing happens locally in your browser, the only limit is your device's available memory. Most modern computers handle even large multi-page documents easily."
 },
 {
 q: "Can I rotate password-protected PDFs?",
 a: "You'll need to unlock the PDF first. If you have the password, use a PDF viewer to open and save an unprotected copy, or use our Unlock PDF tool. Once unlocked, you can freely rotate pages. You can re-apply password protection after rotation if needed."
 },
 {
 q: "Will rotation affect printed page numbers or headers/footers?",
 a: "Rotation changes the orientation of the entire page, including any headers, footers, and page numbers printed on it. If a page has \"Page 5\" in the footer and you rotate it 180°, that footer text will also be upside down. Keep this in mind when rotating pages with printed text elements."
 }
 ],

 ctaTitle: "Ready to Fix Your PDF?",
 ctaButton: "Rotate PDF Now",
 ctaSubtext: "100% Free. No Watermarks."
 },
 fr: {
 seo: {
 title: `Comment Pivoter un PDF | Guide Orientation Permanente ${CURRENT_YEAR} | pdfcanada.ca`,
 desc: `Corrigez l'orientation de vos PDF définitivement. Notre guide ${CURRENT_YEAR} vous montre comment pivoter vos pages en toute sécurité localement sans jamais les télécharger.`
 },
 h1: "Comment faire pivoter et enregistrer l'orientation d'un PDF en ligne gratuitement",
 subtitle: "Le guide simple pour redresser vos documents mal orientés de façon permanente.",

 intro: (
 <>
 Nous y avons tous été confrontés : vous ouvrez un scan important et il est de côté. Ou pire, tout le document est à l'envers. Si vous cherchez à <Link href="/${lang}/rotate-pdf" className="text-canada-red hover:underline font-bold">pivoter un PDF en ligne</Link>, vous êtes au bon endroit.
 <br /><br />
 Contrairement à une visionneuse PDF standard où la rotation n'est que temporaire (elle se réinitialise à la fermeture du fichier), notre outil met à jour la structure du fichier afin que l'orientation soit fixée <strong>définitivement</strong> pour tous ceux qui l'ouvrent.
 </>
 ),

 sections: [
 {
 id: "how-to",
 title: "Étape par Étape : Correction Permanente de l'Orientation PDF",
 content: (
 <>
 <p className="mb-4">
 Faire pivoter les pages de façon permanente garantit que tous ceux qui ouvrent votre document voient l'orientation correcte, quel que soit le lecteur PDF ou l'appareil qu'ils utilisent.
 </p>
 <ol className="list-decimal pl-5 space-y-4 mb-6">
 <li className="pl-2">
 <strong>Téléchargez votre PDF</strong> : Glissez-déposez votre fichier mal orienté dans notre <Link href="/${lang}/rotate-pdf" className="text-canada-red hover:underline font-medium">outil de rotation PDF</Link>. Grâce à notre <Link href="/${lang}/guides/ultimate-pdf-guide" className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</Link>, le traitement commence instantanément—aucun temps d'attente de téléchargement.
 </li>
 <li className="pl-2">
 <strong>Aperçu des miniatures de pages</strong> : Vous verrez des aperçus miniatures de toutes les pages. Cela facilite l'identification des pages nécessitant une rotation d'un coup d'œil.
 </li>
 <li className="pl-2">
 <strong>Faites pivoter les pages individuelles</strong> : Cliquez sur les boutons de rotation dans le sens horaire ou antihoraire sous chaque miniature de page pour pivoter par incréments de 90°. Vous pouvez faire pivoter les pages de 90°, 180° ou 270° selon vos besoins.
 </li>
 <li className="pl-2">
 <strong>Utilisez les opérations groupées (optionnel)</strong> : Si toutes les pages nécessitent la même rotation, utilisez "Faire pivoter toutes les pages" pour appliquer la rotation à chaque page en une seule fois. C'est parfait pour les documents scannés à l'envers.
 </li>
 <li className="pl-2">
 <strong>Vérifiez vos modifications</strong> : Vérifiez bien que chaque page est correctement orientée avant de finaliser. Vous pouvez faire pivoter les pages plusieurs fois jusqu'à ce qu'elles soient parfaites.
 </li>
 <li className="pl-2">
 <strong>Téléchargez le PDF corrigé</strong> : Cliquez sur 'Traiter le PDF' et votre document avec rotation permanente se télécharge immédiatement. L'orientation est enregistrée dans la structure du fichier, pas seulement affichée différemment.
 </li>
 </ol>
 </>
 )
 },
 {
 id: "why-rotate",
 title: "Pourquoi l'Orientation Correcte est Importante pour les Documents Professionnels",
 content: (
 <>
 <p className="mb-4">
 Une orientation incorrecte n'est pas seulement un désagrément mineur—elle peut avoir de sérieuses conséquences professionnelles et pratiques :
 </p>
 <div className="space-y-4">
 <div>
 <strong className="text-canada-red">Problèmes de Lisibilité</strong> : Les documents de côté ou à l'envers sont presque impossibles à lire sur les appareils mobiles sans zoom et rotation constants. Cela frustre les destinataires et reflète mal votre attention aux détails.
 </div>
 <div>
 <strong className="text-canada-red">Crédibilité Professionnelle</strong> : Envoyer un contrat de côté à un client, employeur ou agence gouvernementale signale de la négligence. Dans les candidatures d'emploi compétitives ou les propositions commerciales, la qualité de présentation compte.
 </div>
 <div>
 <strong className="text-canada-red">Problèmes d'Impression</strong> : Les PDF mal orientés s'impriment incorrectement, gaspillant papier et encre. Les destinataires peuvent avoir du mal à configurer les paramètres de leur imprimante pour compenser.
 </div>
 <div>
 <strong className="text-canada-red">Barrières d'Accessibilité</strong> : Les lecteurs d'écran et technologies d'assistance peuvent mal fonctionner avec des documents incorrectement orientés, créant des problèmes d'accessibilité pour les personnes handicapées.
 </div>
 <div>
 <strong className="text-canada-red">Préoccupations d'Archivage</strong> : Les documents stockés dans les archives d'entreprise ou bases de données gouvernementales devraient être correctement orientés pour une utilisabilité et recherche à long terme.
 </div>
 </div>
 </>
 )
 },
 {
 id: "use-cases",
 title: "Scénarios Courants Nécessitant une Rotation PDF",
 content: (
 <div className="space-y-4">
 <p><strong>Documents scannés avec orientation mixte</strong> : Vous avez scanné une pile de papiers contenant à la fois des lettres portrait et des graphiques paysage. Certaines pages sont sorties de côté. Faites pivoter uniquement les pages paysage pour correspondre au reste de l'orientation du document.</p>
 <p><strong>Chargements de chargeur scanner à l'envers</strong> : Vous avez accidentellement chargé un document entier à l'envers dans le chargeur du scanner. Utilisez "Faire pivoter tout de 180°" pour corriger chaque page en une seule opération.</p>
 <p><strong>Préparation de déclaration de revenus</strong> : Les formulaires de l'ARC et reçus scannés à différents moments peuvent avoir des orientations incohérentes. Faites pivoter les pages pour créer un dossier de soumission fiscale organisé professionnellement.</p>
 <p><strong>Documents de candidature d'emploi</strong> : Votre CV est en portrait mais vos échantillons de portfolio ont été scannés en paysage. Faites pivoter les pages de portfolio pour correspondre à l'orientation de votre CV avant de les fusionner en un seul PDF.</p>
 <p><strong>Pièces de documents juridiques</strong> : Les soumissions judiciaires incluent souvent des pièces (photos, diagrammes, contrats) avec diverses orientations. Faites pivoter toutes les pièces en portrait pour une présentation cohérente.</p>
 <p><strong>Annexes de thèse académique</strong> : Votre thèse est en portrait, mais les graphiques et tableaux d'annexe ont été scannés en paysage. Faites pivoter les pages d'annexe pour maintenir une orientation cohérente tout au long de votre soumission.</p>
 <p><strong>Listes immobilières</strong> : Les photos de propriété et plans d'étage peuvent scanner dans différentes orientations. Faites pivoter toutes les images en portrait ou paysage pour un dossier de liste cohérent.</p>
 </div>
 )
 },
 {
 id: "best-practices",
 title: "Meilleures Pratiques pour Faire Pivoter les PDF",
 content: (
 <ul className="list-disc pl-5 space-y-3">
 <li><strong>Prévisualiser avant traitement</strong> : Examinez toujours les aperçus miniatures pour vous assurer que vous faites pivoter les bonnes pages dans la bonne direction. Une vérification rapide économise du temps.</li>
 <li><strong>Pivoter par incréments de 90°</strong> : Les PDF supportent les rotations de 90°, 180° et 270°. Évitez les outils qui offrent des angles arbitraires, car ils peuvent rastériser vos pages et réduire la qualité.</li>
 <li><strong>Faire correspondre le flux du document</strong> : Maintenez une orientation cohérente tout au long de chaque section. Si votre texte principal est en portrait, faites pivoter toutes les pages paysage sauf si elles sont intentionnellement conçues (comme des graphiques larges).</li>
 <li><strong>Tester sur plusieurs appareils</strong> : Après rotation, ouvrez le PDF sur différents appareils (bureau, mobile, tablette) pour vérifier que l'orientation s'affiche correctement partout.</li>
 <li><strong>Conserver des sauvegardes originales</strong> : Avant de faire pivoter des documents importants, enregistrez une copie de l'original au cas où vous auriez besoin de référencer la version pré-rotation.</li>
 <li><strong>Considérer le contenu de la page</strong> : Pour les pages avec images ou diagrammes, assurez-vous que la rotation ne les rend pas plus difficiles à comprendre. Parfois l'orientation paysage est intentionnelle pour le contenu large.</li>
 </ul>
 )
 },
 {
 id: "troubleshooting",
 title: "Problèmes de Rotation Courants et Solutions",
 content: (
 <div className="space-y-4">
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problème : La rotation se réinitialise quand j'ouvre le PDF</h4>
 <p className="text-yellow-800"><strong>Solution</strong> : Votre lecteur PDF peut appliquer une rotation temporaire. Notre outil enregistre de façon permanente la rotation dans la structure du fichier PDF. Essayez d'ouvrir le fichier pivoté dans un lecteur PDF différent pour confirmer que la rotation est enregistrée.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problème : Le texte ou les images semblent flous après rotation</h4>
 <p className="text-yellow-800"><strong>Solution</strong> : Une rotation PDF appropriée (comme la nôtre) change uniquement les métadonnées d'orientation et ne devrait jamais réduire la qualité. Si le contenu semble flou, le scan original était peut-être en basse résolution. La rotation n'ajoute ni ne supprime de qualité—elle change uniquement l'angle de vue.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problème : J'ai fait pivoter dans la mauvaise direction</h4>
 <p className="text-yellow-800"><strong>Solution</strong> : Téléchargez simplement le fichier à nouveau et faites pivoter dans la direction opposée. Pour corriger une rotation de 90° dans le sens horaire, appliquez une rotation de 270° dans le sens horaire (ou 90° dans le sens antihoraire) pour revenir à l'orientation originale.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problème : Certaines pages n'ont pas pivoté</h4>
 <p className="text-yellow-800"><strong>Solution</strong> : Examinez les miniatures de pages pour vous assurer que vous avez cliqué sur le bouton de rotation pour chaque page prévue. L'outil ne fait pivoter que les pages que vous sélectionnez explicitement. Si vous utilisez "Faire pivoter tout", vérifiez que cette option s'est appliquée avec succès à chaque page.</p>
 </div>
 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
 <h4 className="font-bold text-yellow-900 mb-2">Problème : Les pages paysage semblent toujours incorrectes après rotation</h4>
 <p className="text-yellow-800"><strong>Solution</strong> : Certains contenus sont intentionnellement conçus en orientation paysage (graphiques larges, tableaux). Avant de pivoter, considérez si la page était censée être en paysage. Vous pouvez utiliser notre <Link href="/${lang}/organize-pdf" className="text-canada-red hover:underline font-semibold">outil d'organisation PDF</Link> pour grouper les pages paysage séparément si nécessaire.</p>
 </div>
 </div>
 )
 }
 ],

 faq: [
 {
 q: "Est-ce que faire pivoter le PDF réduit la qualité ou le rend flou ?",
 a: "Non. Notre outil met uniquement à jour les métadonnées d'orientation dans la structure du PDF. Le contenu réel—texte, images et graphiques—reste complètement inchangé. La rotation ne refait pas le rendu ni ne compresse vos pages, donc la qualité reste identique à l'original."
 },
 {
 q: "Puis-je faire pivoter une seule page dans un PDF de plusieurs pages ?",
 a: "Oui ! Vous pouvez sélectionner des pages spécifiques à faire pivoter de 90°, 180° ou 270° sans affecter le reste du fichier. C'est parfait pour les documents avec du contenu d'orientation mixte, comme un rapport avec des graphiques paysage parmi des pages portrait."
 },
 {
 q: "La rotation est-elle permanente, ou se réinitialisera-t-elle quand je rouvrirai le PDF ?",
 a: "La rotation est complètement permanente. Contrairement aux lecteurs PDF qui font pivoter temporairement l'affichage, notre outil enregistre la nouvelle orientation directement dans la structure du fichier PDF. Quiconque ouvre votre PDF pivoté sur n'importe quel appareil ou application verra l'orientation corrigée."
 },
 {
 q: "Puis-je faire pivoter des pages sur mon téléphone ou ma tablette ?",
 a: "Absolument ! Notre outil de rotation fonctionne sur tous les navigateurs modernes, y compris iOS Safari et Android Chrome. L'interface tactile facilite l'appui sur les boutons de rotation sur les appareils mobiles. Le traitement se fait localement sur votre appareil quelle que soit la plateforme."
 },
 {
 q: "Que faire si j'ai fait pivoter une page dans la mauvaise direction ?",
 a: "Pas de problème ! Téléchargez simplement le fichier à nouveau et faites pivoter dans la direction opposée. Puisque la rotation se fait par incréments de 90°, vous pouvez toujours corriger une erreur. Par exemple, si vous avez fait pivoter de 90° dans le sens horaire par accident, faites pivoter de 270° dans le sens horaire (ou 90° dans le sens antihoraire) pour revenir à l'orientation originale."
 },
 {
 q: "Y a-t-il une limite au nombre de pages que je peux faire pivoter ?",
 a: "Non. Vous pouvez faire pivoter des PDF avec des centaines de pages sans aucune restriction. Puisque le traitement se fait localement dans votre navigateur, la seule limite est la mémoire disponible de votre appareil. La plupart des ordinateurs modernes gèrent facilement même les documents multipages volumineux."
 },
 {
 q: "Puis-je faire pivoter des PDF protégés par mot de passe ?",
 a: "Vous devrez d'abord déverrouiller le PDF. Si vous avez le mot de passe, utilisez un lecteur PDF pour ouvrir et enregistrer une copie non protégée, ou utilisez notre outil de déverrouillage PDF. Une fois déverrouillé, vous pouvez librement faire pivoter les pages. Vous pouvez réappliquer une protection par mot de passe après la rotation si nécessaire."
 },
 {
 q: "La rotation affectera-t-elle les numéros de page imprimés ou les en-têtes/pieds de page ?",
 a: "La rotation change l'orientation de la page entière, y compris tous les en-têtes, pieds de page et numéros de page imprimés dessus. Si une page a \"Page 5\" dans le pied de page et que vous la faites pivoter de 180°, ce texte de pied de page sera également à l'envers. Gardez cela à l'esprit lors de la rotation de pages avec des éléments de texte imprimés."
 }
 ],

 ctaTitle: "Prêt à redresser votre PDF ?",
 ctaButton: "Pivoter le PDF",
 ctaSubtext: "100% Gratuit. Pas de filigrane."
 }
});

export const RotatePdfGuide: React.FC<GuideProps> = ({ lang }) => {
 const guideContent = getGuideContent(lang);
 const t = guideContent[lang] || guideContent.en;

 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": t.h1,
 "description": t.seo.desc,
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Select PDF", "text": "Upload the PDF that needs rotation." },
 { "@type": "HowToStep", "position": 2, "name": "Rotate Pages", "text": "Click rotate buttons on specific pages or use Rotate All." },
 { "@type": "HowToStep", "position": 3, "name": "Save Changes", "text": "Process and download your corrected PDF." }
 ]
 },
 {
 "@type": "Article",
 "headline": t.h1,
 "description": t.seo.desc,
 "datePublished": "2024-02-15",
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
 }
 }
 ];

 return (
 <>
 <SEO
 title={t.seo.title}
 description={t.seo.desc}
 canonicalPath="/guides/rotate-pdf"
 faqs={t.faq}
 lang={lang}
 schema={schema}
 quickAnswer={{
 question: lang === 'fr' ? "Comment faire pivoter un PDF de façon permanente?" : "How do I rotate a PDF permanently?",
 answer: lang === 'fr'
 ? "Utilisez l'outil de rotation PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les boutons de rotation des pages individuelles ou utilisez 'Tout pivoter', puis téléchargez. L'orientation est fixée définitivement dans le fichier, pas seulement dans l'affichage."
 : "Use pdfcanada.ca's Rotate PDF tool. Upload your PDF, click rotate buttons on individual pages or use 'Rotate All', then download. The orientation is fixed permanently in the file, not just in the view.",
 tool: "PDF Rotation Tool",
 steps: lang === 'fr'
 ? ["Téléchargez votre fichier PDF", "Pivotez les pages individuellement ou toutes", "Téléchargez le PDF corrigé"]
 : ["Upload your PDF file", "Rotate pages individually or all", "Download corrected PDF"]
 }}
 breadcrumbs={[
 { name: 'Home', path: '/' },
 { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
 { name: 'Rotate PDF', path: '/guides/rotate-pdf' }
 ]}
 />
 <PageLayout
 title={t.h1}
 subtitle={t.subtitle}
 icon={<RotateCw size={32} />}
 breadcrumbs={[
 { name: 'Home', href: '/' },
 { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
 { name: 'Rotate PDF Guide', href: '#' }
 ]}
 >
 <div className="max-w-4xl mx-auto space-y-12">
 <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
 {t.intro}
 </p>

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
 <RefreshCcw className="mx-auto text-canada-red mb-2" />
 <span className="text-xs font-bold">90° CW</span>
 </div>
 <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
 <RefreshCcw className="mx-auto text-canada-red mb-2 -scale-x-100" />
 <span className="text-xs font-bold">90° CCW</span>
 </div>
 <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
 <Clock className="mx-auto text-canada-red mb-2" />
 <span className="text-xs font-bold">Permanent</span>
 </div>
 <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
 <Monitor className="mx-auto text-canada-red mb-2" />
 <span className="text-xs font-bold">Cross-Device</span>
 </div>
 </div>

 <section className="bg-canada-red p-10 rounded-3xl text-center text-white">
 <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
 <Link href="/${lang}/rotate-pdf"
 className="bg-white text-canada-red px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
 >
 {t.ctaButton}
 </Link>
 </section>

 {t.faq && (
 <section>
 <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
 <div className="space-y-4">
 {t.faq.map((item, i) => (
 <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
 <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{item.q}</h4>
 <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
 </div>
 ))}
 </div>
 </section>
 )}

 <AISnapshot
 question={lang === 'fr' ? "Comment faire pivoter un PDF de façon permanente?" : "How do I rotate a PDF permanently?"}
 answer={lang === 'fr'
 ? "Utilisez l'outil de rotation PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les boutons de rotation des pages individuelles ou utilisez 'Tout pivoter', puis téléchargez. L'orientation est fixée définitivement dans le fichier, pas seulement dans l'affichage."
 : "Use pdfcanada.ca's Rotate PDF tool. Upload your PDF, click rotate buttons on individual pages or use 'Rotate All', then download. The orientation is fixed permanently in the file, not just in the view."}
 toolName="PDF Rotation Tool"
 steps={lang === 'fr'
 ? ["Téléchargez votre fichier PDF", "Pivotez les pages individuellement ou toutes", "Téléchargez le PDF corrigé"]
 : ["Upload your PDF file", "Rotate pages individually or all", "Download corrected PDF"]}
 lang={lang}
 />

 <RelatedTools lang={lang} currentPath="/guides/rotate-pdf" category="edit" />

 <AuthorBio lang={lang} />
 </div>
 </PageLayout>
 </>
 );
};


