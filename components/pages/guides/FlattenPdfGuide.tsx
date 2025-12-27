'use client';

import Link from 'next/link';
import React from 'react';
import { Lock, Shield, Zap, HelpCircle, FileText, CheckCircle } from 'lucide-react';
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
            title: "How to Flatten PDF Online | Secure & Non-Editable Guide | pdfcanada.ca",
            desc: `Protect your PDF from unauthorized edits. Our ${CURRENT_YEAR} guide shows you how to flatten PDF pages securely in your browser. No uploads—processed entirely on your device.`
        },
        h1: "How to Make a PDF Non-Editable: The Secure Way",
        subtitle: "Flatten your documents to prevent unwanted changes and protect your data—100% locally.",

        intro: (
            <>
                Need to share a document but want to ensure nobody can easily copy your text or change your numbers? Knowing <strong>how to make a PDF non-editable</strong> is essential for contracts, invoices, and sensitive forms.
                <br /><br />
                While many people think a standard PDF is &quot;locked,&quot; most modern editors can easily select and modify text. This guide will show you how to truly <strong>flatten a PDF</strong> using our Canadian-made, privacy-first tool.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Flattening Your PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Our <strong>Make PDF Non-Editable</strong> tool uses a technique called &quot;rasterization.&quot; It turns each page of your PDF into behind-the-scenes images, effectively baking the content into the page.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Select Your File</strong>: Drag your PDF into our <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline font-medium">Non-Editable PDF tool</Link>. You can select files directly from your computer, cloud storage, or even scan documents from your phone.
                            </li>
                            <li className="pl-2">
                                <strong>Preview Your Document</strong>: Before processing, you&apos;ll see a preview of your PDF to confirm it&apos;s the correct file. This prevents accidentally flattening the wrong document.
                            </li>
                            <li className="pl-2">
                                <strong>Choose Quality Settings</strong>: Our tool defaults to high-quality 2.0x resolution rendering, ensuring crisp text and sharp images even when printed or zoomed.
                            </li>
                            <li className="pl-2">
                                <strong>Automatic Processing</strong>: Our Canadian-made engine will render each page as a high-quality static image. The process typically takes 2-5 seconds per page depending on complexity.
                            </li>
                            <li className="pl-2">
                                <strong>Verify Results</strong>: Once flattened, preview the output to ensure all content appears correctly. Check that charts, tables, and images maintain their clarity.
                            </li>
                            <li className="pl-2">
                                <strong>Download & Share</strong>: Download your flattened PDF. It will look exactly the same, but the text will be unselectable and uneditable—perfect for protecting sensitive information.
                            </li>
                            <li className="pl-2">
                                <strong>Keep Your Original</strong>: Always save a copy of your original editable PDF before flattening, as the process cannot be reversed.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Real-World Applications for Flattening PDFs",
                content: (
                    <div className="space-y-4">
                        <p><strong>Government Form Submissions</strong>: When submitting filled forms to Service Canada, CRA, or IRCC, flattening ensures your entered data cannot be altered by intermediaries or during transmission.</p>
                        <p><strong>Legal Contracts and Agreements</strong>: Before sending final contracts to clients or partners, flatten them to prevent unauthorized modifications to terms, dates, or signatures.</p>
                        <p><strong>Financial Reports and Invoices</strong>: Protect invoice amounts, payment terms, and financial data from tampering by converting editable fields into permanent images.</p>
                        <p><strong>Academic Transcripts and Certificates</strong>: Universities and colleges can flatten official transcripts to prevent grade alterations or forgery attempts.</p>
                        <p><strong>Architectural Drawings and Plans</strong>: Flatten technical drawings before sharing with contractors to prevent unauthorized modifications to measurements or specifications.</p>
                        <p><strong>Medical Records and Prescriptions</strong>: Healthcare providers can flatten patient records to maintain data integrity and prevent unauthorized alterations to medical histories.</p>
                        <p><strong>Employment Offer Letters</strong>: HR departments can flatten offer letters to ensure salary figures and job titles cannot be modified after sending.</p>
                    </div>
                )
            },
            {
                id: "why-flatten",
                title: "Why Rasterization is Better than Passwords",
                content: (
                    <>
                        <p className="mb-4">
                            Standard PDF &quot;owner passwords&quot; are easy to bypass with online password removers and third-party tools. However, <strong>rasterization</strong> (flattening to image) is irreversible. Once a page is an image, the underlying text data is gone permanently.
                        </p>
                        <p className="mb-4">
                            This is the most reliable way to ensure:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Your layout stays exactly the same on every device and PDF reader.</li>
                            <li>Nobody can copy-paste your text easily using standard selection tools.</li>
                            <li>Sensitive metadata (author names, edit history, document properties) is stripped out.</li>
                            <li>Form fields become static images that cannot be re-edited or cleared.</li>
                            <li>Digital signatures and stamps are permanently embedded into the page.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "tips",
                title: "Best Practices for Flattening PDFs",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Always Keep Originals</h3>
                            <p className="text-sm text-blue-700">Never delete your source file. Flattening is permanent—you won&apos;t be able to edit text or correct typos later, so maintain an editable backup.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Check Before Flattening</h3>
                            <p className="text-sm text-green-700">Proofread carefully before processing. Once flattened, correcting even simple spelling errors requires starting over with the original file.</p>
                        </div>
                        <div className="p-4 border border-purple-200 bg-purple-50 rounded-xl">
                            <h3 className="font-bold text-purple-800 mb-2">Quality for Print vs Screen</h3>
                            <p className="text-sm text-purple-700">Use high-resolution settings if the document will be printed. Screen-only PDFs can use standard quality to reduce file size.</p>
                        </div>
                        <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">Combine with Compression</h3>
                            <p className="text-sm text-orange-700">Flattened PDFs can be large. Use our <Link href={`/${lang}/compress-pdf`} className="underline">Compress tool</Link> afterwards to reduce file size for email.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Professional Document Security Tips",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Verify Completeness</strong>: Ensure all required signatures, dates, and fields are filled before flattening. Missing information cannot be added later.</li>
                        <li><strong>Test Readability</strong>: After flattening, zoom to 200% and verify that small text remains crisp and readable, especially in contracts or legal documents.</li>
                        <li><strong>Remove Sensitive Layers</strong>: If your PDF has hidden layers or comments, use our <Link href={`/${lang}/flatten-pdf`} className="text-canada-red hover:underline">redaction tools</Link> before flattening to prevent information leakage.</li>
                        <li><strong>Consistent File Naming</strong> : Name flattened files clearly (e.g., &quot;Contract_FINAL_NonEditable.pdf&quot;) to distinguish them from working copies.</li>
                        <li><strong>Archive Strategy</strong>: Store both editable and flattened versions in separate folders. Use the editable version for updates and the flat version for distribution.</li>
                        <li><strong>Accessibility Considerations</strong>: Remember that flattened PDFs lose text-to-speech capabilities. Keep an accessible version for users who need screen readers.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Common Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Text looks blurry after flattening</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Increase the resolution quality setting to 3.0x or higher. Lower quality settings may make small fonts appear fuzzy when viewed at high zoom levels.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: File size increased dramatically</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : L&apos;aplatissement crée des calques d&apos;image qui peuvent être plus volumineux que le texte. Utilisez notre <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-semibold">outil de compression</Link> avec une qualité moyenne pour réduire la taille de 40-60%.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Colors look different after flattening</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: This can happen with specific color profiles. Ensure your original PDF uses standard RGB or CMYK color spaces for consistent rendering.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Processing is taking a long time</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Large documents (50+ pages) or complex graphics may take several minutes. Close other browser tabs to free up memory. Consider flattening in smaller batches if urgent.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Can&apos;t search text in flattened PDF</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : This is expected—flattening removes searchable text. If you need searchability, consider password protection instead. Or use OCR after flattening to restore search capability.</p>
                        </div>
                    </div >
                )
            }
        ],

        faq: [
            {
                q: "Will my PDF still look high quality?",
                a: "Yes! We use a high-resolution rendering engine (2.0x scale by default, adjustable up to 4.0x) to ensure that your flattened PDF looks crisp and professional when printed or viewed on a screen. Text, charts, and images maintain their clarity. For documents that will be printed at large sizes or professional quality, consider using the highest quality setting."
            },
            {
                q: "Is this tool free?",
                a: "Absolutely, eh? Like all tools on pdfcanada.ca, this is 100% free with no limits, no watermarks, and no signup required. You can flatten unlimited PDFs of any size, and all processing happens locally on your device for maximum privacy."
            },
            {
                q: "Can I undo the flattening?",
                a: "No. Because the tool converts text to pixels, you cannot 'un-flatten' it later. Flattening is a one-way, irreversible process. Always keep a copy of your original editable file before flattening. We recommend creating a backup folder with both the original and flattened versions clearly labeled."
            },
            {
                q: "How large of a file can I flatten?",
                a: "There's no artificial file size limit since all processing happens on your device. The practical limit depends on your computer's available memory (RAM). Most modern computers can handle PDFs up to 100-200MB easily. Very large documents may take longer to process or require closing other applications to free up memory."
            },
            {
                q: "Can I flatten password-protected PDFs?",
                a: "You'll need to remove the password first before flattening. If you own the PDF and know the password, use our Unlock PDF tool first, then flatten the unprotected version. This ensures you can open and process the document properly."
            },
            {
                q: "Is my data safe when using this tool?",
                a: "Yes—absolutely! Unlike cloud-based PDF services, our flattening tool processes everything locally in your browser using WebAssembly technology. Your sensitive documents never leave your device, are never uploaded to our servers, and are never stored anywhere. When you close your browser tab, all traces of your PDF are gone. This is the safest way to protect confidential Canadian government forms, legal contracts, or financial documents."
            },
            {
                q: "Does flattening work on mobile devices?",
                a: "Yes! Our tool works on modern mobile browsers including Safari (iOS), Chrome, and Firefox on Android. However, processing speed depends on your device's capabilities. Smartphones may take longer for large documents compared to desktop computers due to limited processing power and memory."
            },
            {
                q: "What's the difference between flattening and password protection?",
                a: "Password protection locks the file but the underlying text remains selectable and can be unlocked with password-removal tools available online. Flattening converts content to images, making it permanently non-editable and non-selectable—much more secure. For maximum security, you can flatten a PDF and then add password protection as well."
            }
        ],

        ctaTitle: "Ready to Protect Your PDF?",
        ctaButton: "Make PDF Non-Editable",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Rasterization?",
        whyDesc: "Converting pages to images is the ultimate way to lock your content. Unlike passwords, this cannot be reversed by hackers."
    },
    fr: {
        seo: {
            title: `Comment Aplatir un PDF | Guide Document Non-Éditable ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Protégez vos PDF contre les modifications. Notre guide ${CURRENT_YEAR} vous montre comment aplatir vos pages en toute sécurité localement pour empêcher toute sélection ou édition.`
        },
        h1: "Comment Rendre un PDF Non-Modifiable : La Méthode Sécurisée",
        subtitle: "Aplatissez vos documents pour empêcher les modifications indésirables et protéger vos données — 100% localement.",

        intro: (
            <>
                Besoin de partager un document tout en vous assurant que personne ne peut copier votre texte ou modifier vos chiffres ? Savoir <strong>comment rendre un PDF non-modifiable</strong> est essentiel pour les contrats, les factures et les formulaires sensibles.
                <br /><br />
                Bien que beaucoup pensent qu&apos;un PDF standard est &quot;verrouillé&quot;, la plupart des éditeurs modernes peuvent facilement sélectionner et modifier le texte. Ce guide vous montrera comment vraiment <strong>aplatir un PDF</strong> avec notre outil canadien axé sur la confidentialité.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Aplatir Votre PDF",
                content: (
                    <>
                        <p className="mb-4">
                            Notre outil <strong>Rendre PDF Non-Modifiable</strong> utilise une technique appelée « rastérisation ». Il transforme chaque page de votre PDF en images en arrière-plan, en intégrant efficacement le contenu dans la page.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Sélectionnez Votre Fichier</strong> : Glissez votre PDF dans notre <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline font-medium">outil PDF Non-Modifiable</Link>. Vous pouvez sélectionner des fichiers directement depuis votre ordinateur, stockage cloud, ou même numériser des documents depuis votre téléphone.
                            </li>
                            <li className="pl-2">
                                <strong>Prévisualisez Votre Document</strong> : Avant le traitement, vous verrez un aperçu de votre PDF pour confirmer qu&apos;il s&apos;agit du bon fichier. Cela évite d&apos;aplatir accidentellement le mauvais document.
                            </li>
                            <li className="pl-2">
                                <strong>Choisissez les Paramètres de Qualité</strong> : Notre outil utilise par défaut un rendu haute qualité 2.0x, garantissant un texte net et des images claires même lors de l&apos;impression ou du zoom.
                            </li>
                            <li className="pl-2">
                                <strong>Traitement Automatique</strong> : Notre moteur canadien rendra chaque page en une image statique de haute qualité. Le processus prend généralement 2-5 secondes par page selon la complexité.
                            </li>
                            <li className="pl-2">
                                <strong>Vérifiez les Résultats</strong> : Une fois aplati, prévisualisez la sortie pour vous assurer que tout le contenu apparaît correctement. Vérifiez que les graphiques, tableaux et images conservent leur clarté.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez et Partagez</strong> : Téléchargez votre PDF aplati. Il aura exactement la même apparence, mais le texte sera insélectionnable et non-modifiable—parfait pour protéger les informations sensibles.
                            </li>
                            <li className="pl-2">
                                <strong>Conservez Votre Original</strong> : Sauvegardez toujours une copie de votre PDF original modifiable avant l&apos;aplatissement, car le processus ne peut pas être inversé.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Applications Réelles pour l'Aplatissement de PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Soumissions de Formulaires Gouvernementaux</strong> : Lors de la soumission de formulaires remplis à Service Canada, l&apos;ARC ou IRCC, l&apos;aplatissement garantit que vos données saisies ne peuvent pas être modifiées par des intermédiaires ou pendant la transmission.</p>
                        <p><strong>Contrats et Accords Juridiques</strong> : Avant d&apos;envoyer des contrats finaux à des clients ou partenaires, aplatissez-les pour empêcher les modifications non autorisées des termes, dates ou signatures.</p>
                        <p><strong>Rapports Financiers et Factures</strong> : Protégez les montants de factures, les conditions de paiement et les données financières contre la falsification en convertissant les champs modifiables en images permanentes.</p>
                        <p><strong>Relevés Académiques et Certificats</strong> : Les universités et collèges peuvent aplatir les relevés officiels pour empêcher les modifications de notes ou les tentatives de falsification.</p>
                        <p><strong>Plans et Dessins Architecturaux</strong> : Aplatissez les dessins techniques avant de les partager avec les entrepreneurs pour empêcher les modifications non autorisées des mesures ou spécifications.</p>
                        <p><strong>Dossiers Médicaux et Ordonnances</strong> : Les prestataires de soins de santé peuvent aplatir les dossiers des patients pour maintenir l&apos;intégrité des données et empêcher les modifications non autorisées des historiques médicaux.</p>
                        <p><strong>Lettres d&apos;Offre d&apos;Emploi</strong> : Les départements RH peuvent aplatir les lettres d&apos;offre pour garantir que les chiffres de salaire et les titres de poste ne peuvent pas être modifiés après l&apos;envoi.</p>
                    </div>
                )
            },
            {
                id: "why-flatten",
                title: "Pourquoi la Rastérisation est Meilleure que les Mots de Passe",
                content: (
                    <>
                        <p className="mb-4">
                            Les « mots de passe propriétaire » PDF standard sont faciles à contourner avec des outils de suppression de mots de passe en ligne et des outils tiers. Cependant, la <strong>rastérisation</strong> (aplatissement en image) est irréversible. Une fois qu&apos;une page est une image, les données textuelles sous-jacentes ont disparu définitivement.
                        </p>
                        <p className="mb-4">
                            C&apos;est le moyen le plus fiable pour garantir :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li>Votre mise en page reste exactement la même sur tous les appareils et lecteurs PDF.</li>
                            <li>Personne ne peut facilement copier-coller votre texte à l&apos;aide d&apos;outils de sélection standard.</li>
                            <li>Les métadonnées sensibles (noms d&apos;auteurs, historique d&apos;édition, propriétés du document) sont supprimées.</li>
                            <li>Les champs de formulaire deviennent des images statiques qui ne peuvent pas être réédités ou effacés.</li>
                            <li>Les signatures numériques et tampons sont définitivement intégrés dans la page.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "tips",
                title: "Meilleures Pratiques pour l'Aplatissement de PDF",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Conservez Toujours les Originaux</h3>
                            <p className="text-sm text-blue-700">Ne supprimez jamais votre fichier source. L&apos;aplatissement est permanent—vous ne pourrez pas éditer le texte ou corriger les fautes plus tard, donc maintenez une sauvegarde modifiable.</p>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Vérifiez Avant d&apos;Aplatir</h3>
                            <p className="text-sm text-green-700">Relisez attentivement avant le traitement. Une fois aplati, corriger même de simples fautes d&apos;orthographe nécessite de recommencer avec le fichier original.</p>
                        </div>
                        <div className="p-4 border border-purple-200 bg-purple-50 rounded-xl">
                            <h3 className="font-bold text-purple-800 mb-2">Qualité pour Impression vs Écran</h3>
                            <p className="text-sm text-purple-700">Utilisez des paramètres haute résolution si le document sera imprimé. Les PDF uniquement pour écran peuvent utiliser une qualité standard pour réduire la taille du fichier.</p>
                        </div>
                        <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">Combinez avec la Compression</h3>
                            <p className="text-sm text-orange-700">Les PDF aplatis peuvent être volumineux. Utilisez notre <Link href={`/${lang}/compress-pdf`} className="underline">outil de compression</Link> ensuite pour réduire la taille pour l&apos;envoi par courriel.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Conseils Professionnels de Sécurité des Documents",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Vérifiez l&apos;Exhaustivité</strong> : Assurez-vous que toutes les signatures, dates et champs requis sont remplis avant l&apos;aplatissement. Les informations manquantes ne peuvent pas être ajoutées plus tard.</li>
                        <li><strong>Testez la Lisibilité</strong> : Après l&apos;aplatissement, zoomez à 200% et vérifiez que le petit texte reste net et lisible, en particulier dans les contrats ou documents juridiques.</li>
                        <li><strong>Supprimez les Calques Sensibles</strong> : Si votre PDF a des calques cachés ou des commentaires, utilisez nos <Link href={`/${lang}/flatten-pdf`} className="text-canada-red hover:underline">outils de caviardage</Link> avant l&apos;aplatissement pour empêcher les fuites d&apos;informations.</li>
                        <li><strong>Nommage de Fichier Cohérent</strong> : Nommez clairement les fichiers aplatis (par ex., &quot;Contrat_FINAL_NonModifiable.pdf&quot;) pour les distinguer des copies de travail.</li>
                        <li><strong>Stratégie d&apos;Archivage</strong> : Stockez les versions modifiables et aplaties dans des dossiers séparés. Utilisez la version modifiable pour les mises à jour et la version plate pour la distribution.</li>
                        <li><strong>Considérations d&apos;Accessibilité</strong> : Rappelez-vous que les PDF aplatis perdent les capacités de synthèse vocale. Conservez une version accessible pour les utilisateurs qui ont besoin de lecteurs d&apos{9}écran.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problèmes Courants et Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le texte semble flou après l&apos;aplatissement</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Augmentez le paramètre de qualité de résolution à 3.0x ou plus. Les paramètres de qualité inférieure peuvent rendre les petites polices floues lors d&apos;un zoom élevé.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : La taille du fichier a augmenté considérablement</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : L&apos;aplatissement crée des calques d&apos;image qui peuvent être plus volumineux que le texte. Utilisez notre <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-semibold">outil de compression</Link> avec une qualité moyenne pour réduire la taille de 40-60%.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les couleurs semblent différentes après l&apos;aplatissement</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Cela peut se produire avec des profils de couleur spécifiques. Assurez-vous que votre PDF original utilise des espaces colorimétriques RVB ou CMJN standard pour un rendu cohérent.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement prend beaucoup de temps</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les documents volumineux (50+ pages) ou les graphiques complexes peuvent prendre plusieurs minutes. Fermez d&apos;autres onglets du navigateur pour libérer de la mémoire. Envisagez l&apos;aplatissement par lots plus petits si urgent.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Impossible de rechercher du texte dans le PDF aplati</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : C&apos;est normal—l&apos;aplatissement supprime le texte recherchable. Si vous avez besoin de la recherche, envisagez la protection par mot de passe à la place. Ou utilisez l&apos;OCR après l&apos;aplatissement pour restaurer la capacité de recherche.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Est-ce que mon PDF aura toujours une haute qualité ?",
                a: "Oui ! Nous utilisons un moteur de rendu haute résolution (échelle 2.0x) pour garantir que votre PDF aplati semble net et professionnel lors de l'impression ou de la visualisation à l'écran."
            },
            {
                q: "Est-ce que cet outil est gratuit ?",
                a: "Absolument, eh ! Comme tous les outils sur pdfcanada.ca, c&apos;est 100% gratuit sans aucune limite."
            },
            {
                q: "Puis-je annuler l&apos;aplatissement ?",
                a: "Non. Parce que l&apos;outil convertit le texte en pixels, vous ne pouvez pas « dé-aplatir » plus tard. Gardez toujours une copie de votre fichier original modifiable au cas où."
            }
        ],

        ctaTitle: "Prêt à Protéger Votre PDF ?",
        ctaButton: "Rendre PDF Non-Modifiable",
        ctaSubtext: "Gratuit, Sécurisé et Canadien.",
        whyTitle: "Pourquoi la Rastérisation ?",
        whyDesc: "Convertir les pages en images est le moyen ultime de verrouiller votre contenu. Contrairement aux mots de passe, cela ne peut pas être inversé par des pirates."
    }
});

export const FlattenPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/make-pdf-non-editable"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-02-01"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment rendre un PDF non modifiable?" : "How do I make a PDF non-editable?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil d'aplatissement de pdfcanada.ca. Il 'rastérise' chaque page en image, rendant le texte non sélectionnable et non modifiable. C'est plus sûr qu'un mot de passe car c'est irréversible. Tout se fait localement."
                        : "Use pdfcanada.ca's flattening tool. It 'rasterizes' each page into an image, making text non-selectable and non-editable. This is safer than password protection because it's irreversible. All processing happens locally.",
                    tool: "PDF Flattening Tool",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre PDF", "Le traitement automatique aplatit chaque page", "Téléchargez votre PDF protégé"]
                        : ["Upload your PDF", "Automatic processing flattens each page", "Download your protected PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF Non-Modifiable' : 'Make PDF Non-Editable', path: lang === 'fr' ? '/fr/guides/make-pdf-non-editable' : '/guides/make-pdf-non-editable' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Lock size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    {/* Introduction */}
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {/* How to Guide Sections */}
                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-canada-red/10 text-canada-red font-black text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    {/* Rasterization Explanation */}
                    <section className="bg-gray-900 text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red opacity-10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <Shield className="text-canada-red" size={32} />
                                    {t.whyTitle}
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    {t.whyDesc}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>No text selection allowed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Annotation tools won&apos;t work</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Highest privacy via local processing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/make-pdf-non-editable`}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Lock size={24} />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    {/* FAQ Section */}
                    <section className="scroll-mt-24 animate-fade-in">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
                                <HelpCircle size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">F.A.Q.</h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
                                    <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment rendre un PDF non modifiable?" : "How do I make a PDF non-editable?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil d'aplatissement de pdfcanada.ca. Il 'rastérise' chaque page en image, rendant le texte non sélectionnable et non modifiable. C'est plus sûr qu'un mot de passe car c'est irréversible. Tout se fait localement."
                            : "Use pdfcanada.ca's flattening tool. It 'rasterizes' each page into an image, making text non-selectable and non-editable. This is safer than password protection because it's irreversible. All processing happens locally."}
                        toolName="PDF Flattening Tool"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre PDF", "Le traitement automatique aplatit chaque page", "Téléchargez votre PDF protégé"]
                            : ["Upload your PDF", "Automatic processing flattens each page", "Download your protected PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/make-pdf-non-editable" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


