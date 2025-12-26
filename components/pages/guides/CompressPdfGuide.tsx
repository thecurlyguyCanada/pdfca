
import React from 'react';
import { Scissors, Shield, Zap, HelpCircle, FileText, CheckCircle, BarChart } from 'lucide-react';
import { translations, Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
}

const getGuideContent = (onNavigate: (view: any, path?: string) => void) => ({
    en: {
        seo: {
            title: "How to Compress PDF Size | Free & Secure Size Reduction Guide | pdfcanada.ca",
            desc: `Make your files smaller without losing quality. Our ${CURRENT_YEAR} guide shows you how to optimize PDFs locally in your browser. No uploads, no loss of clarity, eh?`
        },
        h1: "How to Compress PDF Files: 3 Levels",
        subtitle: "Reduce file size without losing important details. Local, secure, and adjustable.",

        intro: (
            <>
                Sending large PDF files via email or uploading them to government portals can be a headache due to size limits. Knowing <strong>how to compress a PDF</strong> effectively is a crucial skill.
                <br /><br />
                Our tool offers three smart levels of compression: <strong>Good</strong> (lossless optimization), <strong>Balanced</strong> (standard compression), and <strong>Extreme</strong> (maximum reduction). best of all, it happens 100% on your device.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Compressing Your PDF",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Upload Your File</strong>: Drag and drop your large PDF into our <button onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')} className="text-canada-red hover:underline font-medium">Compress PDF tool</button>, or click to browse. Files are processed entirely in your browser—never uploaded to a server.
                            </li>
                            <li className="pl-2">
                                <strong>Preview File Size</strong>: You'll see the current file size displayed. This helps you understand how much compression you might need.
                            </li>
                            <li className="pl-2">
                                <strong>Select Compression Level</strong>: Choose between <strong>Good</strong> (lossless), <strong>Balanced</strong> (standard), or <strong>Extreme</strong> (maximum) based on your quality vs. size requirements.
                            </li>
                            <li className="pl-2">
                                <strong>Process</strong>: Click the compress button. Processing time varies based on file size and selected compression level—typically 2-10 seconds for standard documents.
                            </li>
                            <li className="pl-2">
                                <strong>Review Results</strong>: See the new file size and compression percentage achieved before downloading.
                            </li>
                            <li className="pl-2">
                                <strong>Download</strong>: Save your optimized, lightweight PDF instantly. Compare with the original to ensure quality meets your needs.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "levels",
                title: "Which Compression Level Should You Choose?",
                content: (
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Good (Lossless)</h3>
                            <p className="text-sm text-green-700 mb-3">Best for important docs where quality and selectable text matter most. Removes invisible metadata, unused fonts, and duplicate resources.</p>
                            <p className="text-xs text-green-600 font-semibold">✓ Selectable text preserved</p>
                            <p className="text-xs text-green-600 font-semibold">✓ No quality loss</p>
                            <p className="text-xs text-green-600 font-semibold">✓ 10-30% reduction typical</p>
                        </div>
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Balanced</h3>
                            <p className="text-sm text-blue-700 mb-3">The sweet spot. Re-renders content at 150 DPI. Perfect for sharing standard documents, emailing reports, and general use.</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ Still readable on screen</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ Printable quality</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ 50-70% reduction typical</p>
                        </div>
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">Extreme</h3>
                            <p className="text-sm text-red-700 mb-3">Maximum crunch. Re-renders at 96 DPI. Use this when file size is the only thing that matters and quality can be sacrificed.</p>
                            <p className="text-xs text-red-600 font-semibold">✓ Smallest possible size</p>
                            <p className="text-xs text-red-600 font-semibold">✓ Good for archives</p>
                            <p className="text-xs text-red-600 font-semibold">✓ 70-90% reduction typical</p>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "When You Need to Compress PDFs",
                content: (
                    <div className="space-y-4">
                        <p><strong>Email Attachment Limits</strong>: Most email providers limit attachments to 10-25MB. Compress oversized reports, presentations, or scanned documents to fit within these limits.</p>
                        <p><strong>Website Upload Requirements</strong>: Many government portals (like Service Canada, CRA), university applications, and job portals have strict file size limits (often 5-10MB). Compression ensures your documents meet these requirements.</p>
                        <p><strong>Cloud Storage Optimization</strong>: Reduce your cloud storage footprint by compressing archived documents, old invoices, and reference materials you need to keep but rarely access.</p>
                        <p><strong>Faster Page Loading</strong>: If you're hosting PDFs on a website, smaller files mean faster loading times and better user experience, especially on mobile devices.</p>
                        <p><strong>Bandwidth Savings</strong>: When sharing documents with colleagues or clients, smaller files download faster and use less data—particularly important for remote teams or mobile users.</p>
                        <p><strong>Large Scan Batches</strong>: Scanned documents (especially color scans at high DPI) can be enormous. Compression makes them manageable without noticeable quality loss for on-screen viewing.</p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Best Practices for PDF Compression",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Start with 'Balanced' for Most Uses</strong>: This level provides the best trade-off between file size reduction and maintained quality for typical business and personal documents.</li>
                        <li><strong>Use 'Good' for Legal or Archival Documents</strong>: When document integrity is critical (contracts, legal filings, official records), stick with lossless compression to preserve every detail.</li>
                        <li><strong>Reserve 'Extreme' for Size-Critical Situations</strong>: Only use maximum compression when you absolutely must meet a file size limit and quality is secondary.</li>
                        <li><strong>Test Before Mass Processing</strong>: Compress one sample document at different levels and review the quality before batch-processing similar files.</li>
                        <li><strong>Keep Original Copies</strong>: Always retain uncompressed originals of important documents. Compression is generally one-way—you can't restore lost quality later.</li>
                        <li><strong>Consider Your Audience's Needs</strong>: Will recipients print the document? View on mobile? Quality requirements vary by use case.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Common Compression Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: File didn't compress much</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Your PDF may already be optimized. PDFs with mostly text compress less than image-heavy files. Try 'Balanced' or 'Extreme' for more reduction, but expect quality loss.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Text is blurry after compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: You likely used 'Balanced' or 'Extreme' modes which rasterize pages. Use 'Good' mode instead to keep text sharp and selectable.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Processing takes a very long time</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Large PDFs (100+ pages or high-resolution scans) can take time. Close other browser tabs to free up memory. For very large files, consider splitting and compressing in parts.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Still too large after compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: If 'Extreme' mode still doesn't meet your size requirement, consider splitting the document using our <button onClick={() => onNavigate('TOOL_PAGE', '/organize-pdf')} className="text-canada-red hover:underline font-semibold">Split PDF tool</button> or removing high-resolution images before compression.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Will my text remain selectable after compression?",
                a: "Only in 'Good' (lossless) mode. In 'Balanced' and 'Extreme' modes, we re-render pages as images to achieve higher compression, which flattens the text into the image. Choose 'Good' mode if you need to preserve text selection and copy-paste functionality."
            },
            {
                q: "Is it safe to compress sensitive documents here?",
                a: "Yes! Unlike other sites, we don't upload your file to a server. Compression happens right inside your browser using your computer's power. Your sensitive documents never leave your device, making this ideal for confidential business reports, medical records, or personal financial documents."
            },
            {
                q: "How much smaller will my PDF become?",
                a: "It depends on the content and compression level. 'Good' mode typically reduces files by 10-30%, 'Balanced' by 50-70%, and 'Extreme' by 70-90%. Image-heavy PDFs compress more than text-heavy ones. Scanned documents often see the most dramatic size reductions."
            },
            {
                q: "Can I compress password-protected PDFs?",
                a: "You'll need to remove the password first. Use a PDF viewer to save an unprotected copy, or use our Unlock PDF tool. Then you can compress the unlocked file and re-protect it afterwards if needed."
            },
            {
                q: "Will compression reduce print quality?",
                a: "'Good' mode preserves full print quality. 'Balanced' mode (150 DPI) is suitable for standard office printing. 'Extreme' mode (96 DPI) may show degradation when printed, especially for images and fine details. For professional printing, stick with 'Good' or original files."
            },
            {
                q: "Can I compress a PDF multiple times?",
                a: "Yes, but with diminishing returns and quality loss. Each compression cycle (especially in 'Balanced' or 'Extreme') reduces quality further. It's better to use a higher compression level once rather than compressing multiple times."
            },
            {
                q: "What's the maximum file size I can compress?",
                a: "The limit depends on your device's available RAM. Most modern computers can handle files up to 200-300MB. Very large files may process slowly or fail on devices with limited memory. For huge files, try splitting them first."
            },
            {
                q: "Does compression remove metadata or hidden data?",
                a: "Yes! All compression modes remove unnecessary metadata, which can include hidden personal information like author names, creation dates, and software details. This is a privacy benefit in addition to size reduction."
            }
        ],

        ctaTitle: "Ready to Shrink That File?",
        ctaButton: "Compress PDF Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Local Compression?",
        whyDesc: "Processing locally means no upload wait times and zero privacy risks. It's faster and safer."
    },
    fr: {
        seo: {
            title: `Comment Compresser un PDF | Guide Réduction Taille ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Réduisez la taille de vos fichiers sans perte de qualité. Notre guide ${CURRENT_YEAR} vous montre comment optimiser vos PDF localement. Pas de téléchargement, pas de perte, eh ?`
        },
        h1: "Comment compresser des fichiers PDF : 3 Niveaux",
        subtitle: "Réduisez la taille sans perdre les détails importants.",

        intro: (
            <>
                Envoyer de gros fichiers PDF par courriel peut être un casse-tête en raison des limites de taille. Savoir <strong>comment compresser un PDF</strong> efficacement est une compétence essentielle.
                <br /><br />
                Notre outil offre trois niveaux intelligents de compression : <strong>Bon</strong> (optimisation sans perte), <strong>Équilibré</strong> (compression standard), et <strong>Extrême</strong> (réduction maximale). Le meilleur ? Tout se passe à 100% sur votre appareil.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Compression de votre PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Téléchargez votre fichier</strong> : Glissez-déposez votre PDF volumineux dans notre <button onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')} className="text-canada-red hover:underline font-medium">outil de compression PDF</button>, ou cliquez pour parcourir. Les fichiers sont traités entièrement dans votre navigateur—jamais téléchargés sur un serveur.</li>
                        <li className="pl-2"><strong>Aperçu de la taille du fichier</strong> : Vous verrez la taille actuelle du fichier affichée. Cela vous aide à comprendre combien de compression vous pourriez avoir besoin.</li>
                        <li className="pl-2"><strong>Sélectionnez le niveau de compression</strong> : Choisissez entre <strong>Bon</strong> (sans perte), <strong>Équilibré</strong> (standard), ou <strong>Extrême</strong> (maximum) en fonction de vos exigences qualité vs. taille.</li>
                        <li className="pl-2"><strong>Traitement</strong> : Cliquez sur le bouton de compression. Le temps de traitement varie selon la taille du fichier et le niveau de compression sélectionné—généralement 2-10 secondes pour les documents standard.</li>
                        <li className="pl-2"><strong>Examinez les résultats</strong> : Voyez la nouvelle taille de fichier et le pourcentage de compression atteint avant de télécharger.</li>
                        <li className="pl-2"><strong>Téléchargez</strong> : Enregistrez votre PDF optimisé et léger instantanément. Comparez avec l'original pour vous assurer que la qualité répond à vos besoins.</li>
                    </ol>
                )
            },
            {
                id: "levels",
                title: "Quel niveau de compression choisir ?",
                content: (
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                            <h3 className="font-bold text-green-800 mb-2">Bon (Sans Perte)</h3>
                            <p className="text-sm text-green-700 mb-3">Idéal pour les documents importants où la qualité et le texte sélectionnable comptent le plus. Supprime les métadonnées invisibles, les polices inutilisées et les ressources dupliquées.</p>
                            <p className="text-xs text-green-600 font-semibold">✓ Texte sélectionnable préservé</p>
                            <p className="text-xs text-green-600 font-semibold">✓ Aucune perte de qualité</p>
                            <p className="text-xs text-green-600 font-semibold">✓ Réduction typique de 10-30%</p>
                        </div>
                        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                            <h3 className="font-bold text-blue-800 mb-2">Équilibré</h3>
                            <p className="text-sm text-blue-700 mb-3">Le juste milieu. Restitue le contenu à 150 DPI. Parfait pour partager des documents standard, envoyer des rapports par courriel et un usage général.</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ Toujours lisible à l'écran</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ Qualité imprimable</p>
                            <p className="text-xs text-blue-600 font-semibold">✓ Réduction typique de 50-70%</p>
                        </div>
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">Extrême</h3>
                            <p className="text-sm text-red-700 mb-3">Compression maximale. Restitue à 96 DPI. Utilisez ceci quand la taille du fichier est la seule priorité et que la qualité peut être sacrifiée.</p>
                            <p className="text-xs text-red-600 font-semibold">✓ Taille minimale possible</p>
                            <p className="text-xs text-red-600 font-semibold">✓ Bon pour les archives</p>
                            <p className="text-xs text-red-600 font-semibold">✓ Réduction typique de 70-90%</p>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "Quand compresser vos PDF",
                content: (
                    <div className="space-y-4">
                        <p><strong>Limites de pièces jointes par courriel</strong> : La plupart des fournisseurs de courriel limitent les pièces jointes à 10-25 Mo. Compressez les rapports surdimensionnés, présentations ou documents scannés pour respecter ces limites.</p>
                        <p><strong>Exigences de téléchargement de sites Web</strong> : De nombreux portails gouvernementaux (comme Service Canada, ARC), candidatures universitaires et portails d'emploi ont des limites strictes de taille de fichier (souvent 5-10 Mo). La compression garantit que vos documents répondent à ces exigences.</p>
                        <p><strong>Optimisation du stockage cloud</strong> : Réduisez votre empreinte de stockage cloud en compressant les documents archivés, anciennes factures et matériaux de référence que vous devez conserver mais rarement consulter.</p>
                        <p><strong>Chargement de page plus rapide</strong> : Si vous hébergez des PDF sur un site Web, des fichiers plus petits signifient des temps de chargement plus rapides et une meilleure expérience utilisateur, surtout sur les appareils mobiles.</p>
                        <p><strong>Économies de bande passante</strong> : Lors du partage de documents avec des collègues ou clients, des fichiers plus petits se téléchargent plus rapidement et utilisent moins de données—particulièrement important pour les équipes à distance ou les utilisateurs mobiles.</p>
                        <p><strong>Lots de scans volumineux</strong> : Les documents scannés (en particulier les scans couleur à haute résolution) peuvent être énormes. La compression les rend gérables sans perte de qualité notable pour la visualisation à l'écran.</p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Meilleures pratiques pour la compression PDF",
                content: (
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Commencez avec 'Équilibré' pour la plupart des usages</strong> : Ce niveau offre le meilleur compromis entre réduction de taille de fichier et maintien de la qualité pour les documents commerciaux et personnels typiques.</li>
                        <li><strong>Utilisez 'Bon' pour les documents juridiques ou d'archives</strong> : Lorsque l'intégrité du document est critique (contrats, dépôts juridiques, dossiers officiels), restez avec la compression sans perte pour préserver chaque détail.</li>
                        <li><strong>Réservez 'Extrême' pour les situations critiques de taille</strong> : N'utilisez la compression maximale que lorsque vous devez absolument respecter une limite de taille de fichier et que la qualité est secondaire.</li>
                        <li><strong>Testez avant le traitement de masse</strong> : Compressez un document échantillon à différents niveaux et examinez la qualité avant de traiter par lot des fichiers similaires.</li>
                        <li><strong>Conservez les copies originales</strong> : Conservez toujours les originaux non compressés de documents importants. La compression est généralement à sens unique—vous ne pouvez pas restaurer la qualité perdue plus tard.</li>
                        <li><strong>Considérez les besoins de votre audience</strong> : Les destinataires imprimeront-ils le document ? Visualiseront-ils sur mobile ? Les exigences de qualité varient selon le cas d'usage.</li>
                    </ul>
                )
            },
            {
                id: "troubleshooting",
                title: "Problèmes courants de compression et solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le fichier ne s'est pas beaucoup compressé</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Votre PDF peut déjà être optimisé. Les PDF contenant principalement du texte se compressent moins que les fichiers riches en images. Essayez 'Équilibré' ou 'Extrême' pour plus de réduction, mais attendez-vous à une perte de qualité.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le texte est flou après la compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Vous avez probablement utilisé les modes 'Équilibré' ou 'Extrême' qui rastérisent les pages. Utilisez plutôt le mode 'Bon' pour garder le texte net et sélectionnable.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement prend très longtemps</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les gros PDF (100+ pages ou scans haute résolution) peuvent prendre du temps. Fermez d'autres onglets du navigateur pour libérer de la mémoire. Pour de très gros fichiers, envisagez de diviser et compresser par parties.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Toujours trop volumineux après compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Si le mode 'Extrême' ne répond toujours pas à votre exigence de taille, envisagez de diviser le document en utilisant notre <button onClick={() => onNavigate('TOOL_PAGE', '/organize-pdf')} className="text-canada-red hover:underline font-semibold">outil de division PDF</button> ou de supprimer les images haute résolution avant la compression.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Le texte restera-t-il sélectionnable après la compression ?",
                a: "Seulement en mode 'Bon' (sans perte). En modes 'Équilibré' et 'Extrême', nous restituons les pages sous forme d'images pour obtenir une compression plus élevée, ce qui aplatit le texte dans l'image. Choisissez le mode 'Bon' si vous devez préserver la sélection de texte et la fonctionnalité copier-coller."
            },
            {
                q: "Est-il sûr de compresser des documents sensibles ici ?",
                a: "Oui ! Contrairement à d'autres sites, nous ne téléchargeons pas votre fichier sur un serveur. La compression se fait directement dans votre navigateur en utilisant la puissance de votre ordinateur. Vos documents sensibles ne quittent jamais votre appareil, ce qui est idéal pour les rapports commerciaux confidentiels, dossiers médicaux ou documents financiers personnels."
            },
            {
                q: "De combien mon PDF sera-t-il réduit ?",
                a: "Cela dépend du contenu et du niveau de compression. Le mode 'Bon' réduit généralement les fichiers de 10-30%, 'Équilibré' de 50-70%, et 'Extrême' de 70-90%. Les PDF riches en images se compressent plus que ceux riches en texte. Les documents scannés voient souvent les réductions de taille les plus spectaculaires."
            },
            {
                q: "Puis-je compresser des PDF protégés par mot de passe ?",
                a: "Vous devrez d'abord retirer le mot de passe. Utilisez un lecteur PDF pour enregistrer une copie non protégée, ou utilisez notre outil de déverrouillage PDF. Ensuite, vous pouvez compresser le fichier déverrouillé et le reprotéger ensuite si nécessaire."
            },
            {
                q: "La compression réduira-t-elle la qualité d'impression ?",
                a: "Le mode 'Bon' préserve la qualité d'impression complète. Le mode 'Équilibré' (150 DPI) convient pour l'impression de bureau standard. Le mode 'Extrême' (96 DPI) peut montrer une dégradation lors de l'impression, en particulier pour les images et les détails fins. Pour l'impression professionnelle, restez avec le mode 'Bon' ou les fichiers originaux."
            },
            {
                q: "Puis-je compresser un PDF plusieurs fois ?",
                a: "Oui, mais avec des rendements décroissants et une perte de qualité. Chaque cycle de compression (surtout en modes 'Équilibré' ou 'Extrême') réduit davantage la qualité. Il vaut mieux utiliser un niveau de compression plus élevé une fois plutôt que de compresser plusieurs fois."
            },
            {
                q: "Quelle est la taille maximale de fichier que je peux compresser ?",
                a: "La limite dépend de la RAM disponible de votre appareil. La plupart des ordinateurs modernes peuvent gérer des fichiers jusqu'à 200-300 Mo. Les très gros fichiers peuvent se traiter lentement ou échouer sur les appareils avec une mémoire limitée. Pour les fichiers énormes, essayez de les diviser d'abord."
            },
            {
                q: "La compression supprime-t-elle les métadonnées ou données cachées ?",
                a: "Oui ! Tous les modes de compression suppriment les métadonnées inutiles, qui peuvent inclure des informations personnelles cachées comme les noms d'auteurs, dates de création et détails du logiciel. C'est un avantage de confidentialité en plus de la réduction de taille."
            }
        ],

        ctaTitle: "Prêt à réduire ce fichier ?",
        ctaButton: "Compresser PDF Maintenant",
        ctaSubtext: "Gratuit, sûr et canadien.",
        whyTitle: "Pourquoi local ?",
        whyDesc: "Le traitement local signifie aucun temps d'attente et aucun risque pour la confidentialité."
    }
});

export const CompressPdfGuide: React.FC<GuideProps> = ({ lang, onNavigate }) => {
    const content = getGuideContent(onNavigate)[lang];
    const qa = translations[lang].features.compress.quickAnswer;
    const t = content;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <SEO
                title={content.seo.title}
                description={content.seo.desc}
                canonicalPath={lang === 'fr' ? '/fr/guides/compress-pdf' : '/guides/compress-pdf'}
                lang={lang}
                author={{
                    name: "pdfcanada.ca Team",
                    url: "https://www.pdfcanada.ca/about"
                }}
                quickAnswer={qa}
                faqs={t.faq.map(f => ({ q: f.q, a: f.a }))}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: 'Compress PDF', path: lang === 'fr' ? '/fr/guides/compress-pdf' : '/guides/compress-pdf' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scissors size={32} />}>
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {qa && (
                        <AISnapshot
                            lang={lang}
                            question={qa.question}
                            answer={qa.answer}
                            steps={qa.steps}
                        />
                    )}

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
                                        <span>No upload required</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Data stays on device</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BarChart className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Adjustable compression</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <button
                            onClick={() => onNavigate('TOOL_PAGE', '/compress-pdf')}
                            className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Scissors size={24} />
                            {t.ctaButton}
                        </button>
                        <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <RelatedTools lang={lang} onNavigate={onNavigate} currentPath="/guides/compress-pdf" category="edit" />

                    <AuthorBio lang={lang} onNavigate={onNavigate} />
                </div>
            </PageLayout>
        </div>
    );
};
