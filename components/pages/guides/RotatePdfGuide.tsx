'use client';

import Link from 'next/link';
import React from 'react';
import { RotateCw, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Monitor, RefreshCcw } from 'lucide-react';
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
            title: `How to Rotate PDF Pages | Free & Permanent ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Fix upside-down PDFs forever. Our ${CURRENT_YEAR} guide teaches you how to rotate pages permanently in your browser. Secure local-first processing ensures your privacy.`
        },
        h1: `How to Rotate PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "The simple guide to fixing incorrectly oriented documents permanently.",

        intro: (
            <>
                We've all been there: you open an important scan and it's sideways. Or worse, the entire document is upside down. If you're looking to <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-bold">rotate PDF online free</Link>, you've come to the right place.
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
                                <strong>Upload Your PDF</strong>: Drag and drop your misoriented file into our <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-medium">Rotate PDF tool</Link>. Because we use <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First technology</Link> (<Link href={`/${lang}/guides/private-pdf-tools`} className="text-xs text-gray-400 hover:text-gray-600">Privacy Guide</Link>), processing begins instantly—no upload wait times.
                            </li>
                            <li className="pl-2">
                                <strong>Preview Page Thumbnails</strong>: You'll see thumbnail previews of all pages. This makes it easy to identify which pages need rotation at a glance.
                            </li>
                            <li className="pl-2">
                                <strong>Rotate Individual Pages</strong>: Click the clockwise or counterclockwise rotation buttons beneath each page thumbnail to rotate 90° increments. You can rotate pages 90°, 180°, or 270° as needed.
                            </li>
                            <li className="pl-2">
                                <strong>Use Bulk Operations (Optional)</strong>: If all pages need the same rotation, use &quot;Rotate All Pages&quot; to apply the rotation to every page at once. This is perfect for documents scanned upside down.
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
                        <p><strong>Upside-Down Scanner Feeder Loads</strong>: You accidentally loaded an entire document upside down in the scanner feeder. Use &quot;Rotate All 180°&quot; to fix every page in one operation.</p>
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
                            <p className="text-yellow-800"><strong>Solution</strong>: Review the page thumbnails to ensure you clicked the rotation button for each intended page. The tool only rotates pages you explicitly select. If using &quot;Rotate All&quot;, verify that option successfully applied to every page.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Landscape pages still look wrong after rotation</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Some content is intentionally designed in landscape orientation (wide charts, tables). Before rotating, consider whether the page was meant to be landscape. You can use our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">Organize PDF tool</Link> to group landscape pages separately if needed.</p>
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
        ctaSubtext: "100% Free. No Watermarks.",
        features: {
            cw: "90° CW",
            ccw: "90° CCW",
            permanent: "Permanent",
            crossDevice: "Cross-Device"
        },
        faqHeading: "Frequently Asked Questions",
        quickAnswer: {
            question: "How do I rotate PDF pages permanently?",
            answer: "Use pdfcanada.ca's Rotate PDF tool. Upload your file, click rotate buttons (left/right) on specific pages or use 'Rotate All', then download. The new orientation is saved permanently in the file.",
            tool: "Rotate PDF",
            steps: ["Upload PDF", "Rotate pages left/right", "Download fixed PDF"]
        }
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
                Nous y avons tous été confrontés : vous ouvrez un scan important et il est de côté. Ou pire, tout le document est à l'envers. Si vous cherchez à <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-bold">pivoter un PDF en ligne</Link>, vous êtes au bon endroit.
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
                                <strong>Téléchargez votre PDF</strong> : Glissez-déposez votre fichier mal orienté dans notre <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-medium">outil de rotation PDF</Link>. Grâce à notre <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie locale</Link> (<Link href={`/${lang}/guides/private-pdf-tools`} className="text-xs text-gray-400 hover:text-gray-600">Confidentialité</Link>), le traitement commence instantanément—aucun temps d'attente de téléchargement.
                            </li>
                            <li className="pl-2">
                                <strong>Aperçu des miniatures de pages</strong> : Vous verrez des aperçus miniatures de toutes les pages. Cela facilite l'identification des pages nécessitant une rotation d'un coup d'œil.
                            </li>
                            <li className="pl-2">
                                <strong>Faites pivoter les pages individuelles</strong> : Cliquez sur les boutons de rotation dans le sens horaire ou antihoraire sous chaque miniature de page pour pivoter par incréments de 90°. Vous pouvez faire pivoter les pages de 90°, 180° ou 270° selon vos besoins.
                            </li>
                            <li className="pl-2">
                                <strong>Utilisez les opérations groupées (optionnel)</strong> : Si toutes les pages nécessitent la même rotation, utilisez &quot;Faire pivoter toutes les pages&quot; pour appliquer la rotation à chaque page en une seule fois. C'est parfait pour les documents scannés à l'envers.
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
                            L'orientation incorrecte n'est pas seulement un désagrément mineur—elle peut avoir de sérieuses conséquences professionnelles et pratiques :
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
                        <p><strong>Chargements de chargeur scanner à l'envers</strong> : Vous avez accidentellement chargé un document entier à l'envers dans le chargeur du scanner. Utilisez &quot;Faire pivoter tout de 180°&quot; pour corriger chaque page en une seule opération.</p>
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
                            <p className="text-yellow-800"><strong>Solution</strong> : Examinez les miniatures de pages pour vous assurer que vous avez cliqué sur le bouton de rotation pour chaque page prévue. L'outil ne fait pivoter que les pages que vous sélectionnez explicitement. Si vous utilisez &quot;Faire pivoter tout&quot;, vérifiez que cette option s'est appliquée avec succès à chaque page.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les pages paysage semblent toujours incorrectes après rotation</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Certains contenus sont intentionnellement conçus en orientation paysage (graphiques larges, tableaux). Avant de pivoter, considérez si la page était censée être en paysage. Vous pouvez utiliser notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">outil d'organisation PDF</Link> pour grouper les pages paysage séparément si nécessaire.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que la qualité du PDF diminue après rotation ?",
                a: "Non. Notre outil modifie uniquement les métadonnées de rotation du fichier PDF sans compresser ni modifier le contenu visuel original."
            },
            {
                q: "Comment faire pivoter une seule page dans un PDF ?",
                a: "Dans notre interface, chaque page possède ses propres boutons de rotation. Cliquez simplement sur l'icône de rotation sur la vignette de la page spécifique."
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
        ctaSubtext: "100% Gratuit. Pas de filigrane.",
        features: {
            cw: "90° Horaire",
            ccw: "90° Anti",
            permanent: "Permanent",
            crossDevice: "Multi-Appareils"
        },
        faqHeading: "Foire Aux Questions",
        quickAnswer: {
            question: "Comment faire pivoter les pages PDF en permanence ?",
            answer: "Utilisez l'outil de rotation PDF de pdfcanada.ca. Téléchargez votre fichier, cliquez sur les boutons de rotation (gauche/droite) sur des pages spécifiques, puis téléchargez. La nouvelle orientation est enregistrée de façon permanente.",
            tool: "Pivoter PDF",
            steps: ["Télécharger le PDF", "Pivoter les pages", "Télécharger le PDF corrigé"]
        }
    },
    pt: {
        seo: {
            title: `Como Girar Páginas PDF | Guia Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Corrija PDFs de cabeça para baixo para sempre. Nosso guia de ${CURRENT_YEAR} ensina como girar páginas permanentemente no seu navegador. Processamento local seguro garante sua privacidade.`
        },
        h1: `Como Girar Páginas PDF: O Guia de ${CURRENT_YEAR}`,
        subtitle: "O guia simples para corrigir documentos orientados incorretamente de forma permanente.",

        intro: (
            <>
                Todos nós já passamos por isso: você abre uma digitalização importante e ela está de lado. Ou pior, o documento inteiro está de cabeça para baixo. Se você está procurando <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-bold">girar PDF online grátis</Link>, você veio ao lugar certo.
                <br /><br />
                Ao contrário de um visualizador de PDF padrão onde a rotação é apenas temporária (ela reinicia quando você fecha o arquivo), nossa ferramenta atualiza a estrutura do arquivo para que a orientação seja corrigida <strong>permanentemente</strong> para todos que o abrirem.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Corrigindo Orientação de PDF Permanentemente",
                content: (
                    <>
                        <p className="mb-4">
                            Girar páginas permanentemente garante que todos que abrirem seu documento vejam a orientação correta, independentemente de qual visualizador de PDF ou dispositivo estejam usando.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Envie Seu PDF</strong>: Arraste e solte seu arquivo mal orientado em nossa <Link href={`/${lang}/rotate-pdf`} className="text-canada-red hover:underline font-medium">ferramenta Girar PDF</Link>. Porque usamos <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">tecnologia Local-First</Link> (<Link href={`/${lang}/guides/private-pdf-tools`} className="text-xs text-gray-400 hover:text-gray-600">Guia de Privacidade</Link>), o processamento começa instantaneamente.
                            </li>
                            <li className="pl-2">
                                <strong>Pré-visualizar Miniaturas</strong>: Você verá miniaturas de todas as páginas. Isso facilita identificar quais páginas precisam de rotação num relance.
                            </li>
                            <li className="pl-2">
                                <strong>Girar Páginas Individuais</strong>: Clique nos botões de rotação horário ou anti-horário abaixo de cada miniatura para girar em incrementos de 90°. Você pode girar 90°, 180° ou 270°.
                            </li>
                            <li className="pl-2">
                                <strong>Usar Operações em Lote (Opcional)</strong>: Se todas as páginas precisarem da mesma rotação, use "Girar Todas as Páginas" para aplicar a rotação a cada página de uma vez.
                            </li>
                            <li className="pl-2">
                                <strong>Revise Suas Mudanças</strong>: Verifique se cada página está orientada corretamente antes de finalizar.
                            </li>
                            <li className="pl-2">
                                <strong>Baixar PDF Corrigido</strong>: Clique em 'Processar PDF' e seu documento permanentemente girado é baixado imediatamente. A orientação é salva na estrutura do arquivo.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "why-rotate",
                title: "Por Que a Orientação Correta Importa",
                content: (
                    <>
                        <p className="mb-4">
                            Orientação incorreta não é apenas um pequeno aborrecimento—pode ter sérias consequências profissionais:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <strong className="text-canada-red">Problemas de Leitura</strong>: Documentos de lado são quase impossíveis de ler em dispositivos móveis sem zoom constante.
                            </div>
                            <div>
                                <strong className="text-canada-red">Credibilidade Profissional</strong>: Enviar um contrato de lado para um cliente sinaliza descuido.
                            </div>
                            <div>
                                <strong className="text-canada-red">Problemas de Impressão</strong>: PDFs mal orientados imprimem incorretamente, desperdiçando papel e tinta.
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Cenários Comuns",
                content: (
                    <div className="space-y-4">
                        <p><strong>Digitalizações Mistas</strong>: Você digitalizou uma pilha de papéis contendo cartas em retrato e gráficos em paisagem. Algumas páginas saíram de lado. Gire apenas as páginas em paisagem.</p>
                        <p><strong>Scanner de Cabeça para Baixo</strong>: Você acidentalmente carregou um documento inteiro de cabeça para baixo. Use "Girar Tudo 180°" para corrigir.</p>
                        <p><strong>Candidaturas de Emprego</strong>: Seu currículo é retrato mas seu portfólio é paisagem. Gire as páginas do portfólio para corresponder.</p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Melhores Práticas",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Pré-visualize Antes</strong>: Sempre revise as miniaturas para garantir que está girando as páginas certas.</li>
                        <li><strong>Gire em Incrementos de 90°</strong>: Evite ângulos arbitrários que podem reduzir a qualidade.</li>
                        <li><strong>Mantenha o Fluxo</strong>: Mantenha orientação consistente em cada seção.</li>
                        <li><strong>Teste em Vários Dispositivos</strong>: Abra o PDF em diferentes dispositivos para verificar a orientação.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problemas Comuns e Soluções",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: A rotação reinicia quando abro o PDF</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Seu visualizador pode estar aplicando rotação temporária. Nossa ferramenta salva a rotação permanentemente. Tente outro visualizador.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Texto ou imagens parecem borrados</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Rotação adequada não reduz qualidade. Se parece borrado, a digitalização original pode ter baixa resolução.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Girei na direção errada</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Envie novamente e gire na direção oposta. 90° horário errado? Gire 270° horário para corrigir.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "A qualidade do PDF diminui após girar?",
                a: "Não. Nossa ferramenta modifica apenas os metadados de rotação sem comprimir ou modificar o conteúdo visual original."
            },
            {
                q: "Posso girar apenas uma página?",
                a: "Sim! Você pode selecionar páginas específicas para girar 90°, 180° ou 270° sem afetar o resto do arquivo."
            },
            {
                q: "A rotação é permanente?",
                a: "Sim. A rotação é salva diretamente na estrutura do arquivo PDF. Qualquer pessoa que abrir seu PDF verá a orientação corrigida."
            },
            {
                q: "Posso girar páginas no celular?",
                a: "Absolutamente! Funciona em iOS Safari e Android Chrome com interface de toque."
            },
            {
                q: "Existe limite de páginas?",
                a: "Não. Você pode girar PDFs com centenas de páginas, limitado apenas pela memória do seu dispositivo."
            },
            {
                q: "Posso girar PDFs com senha?",
                a: "Você precisará desbloquear primeiro. Use nossa ferramenta Desbloquear PDF se souber a senha."
            }
        ],

        ctaTitle: "Pronto para Corrigir Seu PDF?",
        ctaButton: "Girar PDF Agora",
        ctaSubtext: "100% Grátis. Sem Marca d'água.",
        features: {
            cw: "90° Horário",
            ccw: "90° Anti",
            permanent: "Permanente",
            crossDevice: "Multi-Disp."
        },
        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como girar páginas PDF permanentemente?",
            answer: "Use a ferramenta Girar PDF do pdfcanada.ca. Envie seu arquivo, clique nos botões de girar nas páginas ou use 'Girar Tudo', depois baixe. A nova orientação é salva permanentemente.",
            tool: "Girar PDF",
            steps: ["Envie o PDF", "Gire as páginas", "Baixe o PDF corrigido"]
        }
    }
});

export const RotatePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": t.quickAnswer.steps[0], "text": t.sections[0].content.props.children[1].props.children[0].props.children[1] },
                { "@type": "HowToStep", "position": 2, "name": t.quickAnswer.steps[1], "text": t.sections[0].content.props.children[1].props.children[2].props.children[1] },
                { "@type": "HowToStep", "position": 3, "name": t.quickAnswer.steps[2], "text": t.sections[0].content.props.children[1].props.children[5].props.children[1] }
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
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', path: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Pivoter PDF' : lang === 'pt' ? 'Girar PDF' : 'Rotate PDF', path: lang === 'fr' ? '/fr/guides/rotate-pdf' : '/guides/rotate-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<RotateCw size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Guide Pivoter PDF' : 'Rotate PDF Guide', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-10 md:space-y-12">
                    <div className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {t.sections && t.sections.map((section: any) => (
                        <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{section.title}</h2>
                            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                            <RefreshCcw className="mx-auto text-canada-red mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xs font-bold">{t.features.cw}</span>
                        </div>
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                            <RefreshCcw className="mx-auto text-canada-red mb-1 sm:mb-2 -scale-x-100 w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xs font-bold">{t.features.ccw}</span>
                        </div>
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                            <Clock className="mx-auto text-canada-red mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xs font-bold">{t.features.permanent}</span>
                        </div>
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                            <Monitor className="mx-auto text-canada-red mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xs font-bold">{t.features.crossDevice}</span>
                        </div>
                    </div>

                    <section className="bg-canada-red p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center text-white">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/rotate-pdf`}
                            className="bg-white text-canada-red px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    {t.faq && (
                        <section>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">{t.faqHeading}</h2>
                            <div className="space-y-3 sm:space-y-4">
                                {t.faq.map((item: any, i: number) => (
                                    <div key={i} className="bg-white dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">{item.q}</h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/rotate-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
