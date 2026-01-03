'use client';


import Link from 'next/link';
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
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: "How to Compress PDF Size | Free & Secure Size Reduction Guide | pdfcanada.ca",
            desc: `Make your files smaller without losing quality. Our ${CURRENT_YEAR} guide shows you how to optimize PDFs locally in your browser. No uploads, no loss of clarity, eh?`
        },
        h1: "How to Compress PDF Files: 3 Levels",
        subtitle: "Reduce file size without losing important details. Local, secure, and adjustable.",

        intro: (
            <>
                <img src="/images/guides/compress-pdf-guide.png" alt="Compressing PDF files illustration" className="w-full h-auto rounded-xl shadow-md mb-8" />
                Trying to email a large PDF only to have it bounce back? We've all been there. Whether it's a government application, a job submission, or a heavy report, large files are a hassle. Learning <strong>how to compress PDF online</strong> is the solution to file size limits and slow uploads.
                <br /><br />
                Our tool offers three smart levels of compression: <strong>Good</strong> (lossless optimization), <strong>Balanced</strong> (standard compression), and <strong>Extreme</strong> (maximum reduction). Best of all, it happens 100% on your device.
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
                                <strong>Upload Your PDF</strong>: Drag and drop your file into our <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-medium">Compress PDF tool</Link>. Because we use <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">Local-First technology</Link>, your file never leaves your device.
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
                id: "privacy-audit",
                title: "Privacy Audit: Your Data Safety",
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
                                    <h5 className="font-bold text-gray-900 dark:text-white">Client-Side Compression</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Our WebAssembly engine executes the compression algorithm locally. <strong>No data leaves your device.</strong></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Automatic Wipe</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Once you close the tab, the sandbox is destroyed. No trace remains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "levels",
                title: "Which Compression Level Should You Choose?",
                content: (
                    <div className="space-y-6">
                        <p>Different documents require different types of compression. Here's how to choose the right setting:</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                                <h3 className="font-bold text-blue-800 mb-2">Recommended Compression</h3>
                                <p className="text-sm text-blue-700">The best balance. Significantly reduces file size without visible quality loss. Ideal for emails and everyday use.</p>
                            </div>
                            <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                                <h3 className="font-bold text-red-800 mb-2">Extreme Compression</h3>
                                <p className="text-sm text-red-700">Maximum size reduction. Images will be lower quality, but the file will be as small as possible. Use for websites with strict upload limits.</p>
                            </div>
                            <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                                <h3 className="font-bold text-green-800 mb-2">Low Compression</h3>
                                <p className="text-sm text-green-700">Minimal size reduction but perfect image quality. Best for documents with high-resolution graphics or detailed photos.</p>
                            </div>
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
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: The file didn't shrink enough</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: If your PDF is mainly text, it might already be as small as it can get. If it contains images, try the &quot;Extreme Compression&quot; setting. Some PDFs are already optimized and won't shrink significantly further.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Images look blurry after compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: You likely used &quot;Extreme Compression&quot;. Switch to &quot;Recommended Compression&quot; to balance file size with visual clarity. If high-quality images are critical, use &quot;Low Compression&quot;.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: The tool is stuck or &quot;Processing&quot; forever</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Very large files (100MB+) can take a few minutes as all processing happens in your browser RAM. Ensure you have enough free memory by closing other browser tabs. If it takes more than 5 minutes, refresh and try again.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Still too large after compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: If 'Extreme' mode still doesn't meet your size requirement, consider splitting the document using our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">Split PDF tool</Link> or removing high-resolution images before compression.</p>
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
                a: "No! This is the core benefit of our tool. Compression happens entirely within your web browser. Your document is never uploaded to any server, keeping your sensitive data private and secure on your own device."
            },
            {
                q: "How much smaller will my PDF become?",
                a: "It depends on the compression level you choose. 'Recommended' compression is designed to be invisible to the human eye. 'Extreme' compression will significantly reduce file size but may result in slightly softer images. Text quality is generally unaffected."
            },
            {
                q: "Can I compress password-protected PDFs?",
                a: "You'll need to unlock the PDF first. If you have the password, use a PDF viewer to open and save an unprotected copy, or use our Unlock PDF tool. Once unlocked, you can freely compress it. You can re-apply password protection after compression if needed."
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
                a: "Most PDFs can be reduced by 40% to 80% if they contain many images. Text-only documents may see smaller gains (10-20%) as text is already highly efficient. Our tool displays the exact savings after processing."
            },
            {
                q: "Does compression remove metadata or hidden data?",
                a: "Yes! While file size changes, the PDF structure remains standard. The compressed file will open in any PDF viewer (Acrobat, Preview, Chrome, etc.) on any device without issues."
            }
        ],

        ctaTitle: "Ready to Optimize Your PDF?",
        ctaButton: "Optimize PDF Now",
        ctaSubtext: "Free, Secure, and Canadian.",
        whyTitle: "Why Local Processing?",
        whyDesc: "It's faster, safer, and more private.",
        whyList: [
            "No upload required",
            "Data stays on device",
            "Adjustable compression"
        ]
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
                Vous essayez d'envoyer un gros PDF par courriel et il vous revient ? Nous sommes tous passés par là. Qu'il s'agisse d'une demande gouvernementale, d'une candidature ou d'un rapport lourd, les gros fichiers sont un problème. Apprendre <strong>comment compresser un PDF en ligne</strong> est la solution aux limites de taille de fichier et aux téléchargements lents.
                <br /><br />
                Notre outil propose trois niveaux intelligents de compression : <strong>Bon</strong> (optimisation sans perte), <strong>Équilibré</strong> (compression standard) et <strong>Extrême</strong> (réduction maximale). Le meilleur de tout, c'est que cela se passe à 100 % sur votre appareil.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Compression de votre PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2">
                            <strong>Téléchargez votre PDF</strong> : Glissez-déposez votre fichier dans notre <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline font-medium">outil de compression PDF</Link>. Puisque nous utilisons la <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-canada-red hover:underline decoration-dash underline-offset-4">technologie Local-First</Link>, votre fichier ne quitte jamais votre appareil.
                        </li>
                        <li className="pl-2"><strong>Aperçu de la taille du fichier</strong> : Vous verrez la taille actuelle du fichier affichée. Cela vous aide à comprendre combien de compression vous pourriez avoir besoin.</li>
                        <li className="pl-2"><strong>Sélectionnez le niveau de compression</strong> : Choisissez entre <strong>Bon</strong> (sans perte), <strong>Équilibré</strong> (standard), ou <strong>Extrême</strong> (maximum) en fonction de vos exigences qualité vs. taille.</li>
                        <li className="pl-2"><strong>Traitement</strong> : Cliquez sur le bouton de compression. Le temps de traitement varie selon la taille du fichier et le niveau de compression sélectionné—généralement 2-10 secondes pour les documents standard.</li>
                        <li className="pl-2"><strong>Examinez les résultats</strong> : Voyez la nouvelle taille de fichier et le pourcentage de compression atteint avant de télécharger.</li>
                        <li className="pl-2"><strong>Téléchargez votre PDF</strong> : Enregistrez votre PDF optimisé et léger instantanément. Comparez avec l'original pour vous assurer que la qualité répond à vos besoins.</li>
                    </ol>
                )
            },
            {
                id: "privacy-audit",
                title: "Audit de Confidentialité : Sécurité des Données",
                content: (
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Shield className="text-green-500" size={24} />
                            Vérification du Cycle de Vie
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">1</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Chargement Local</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Les fichiers sont chargés dans le bac à sable mémoire sécurisé du navigateur.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">2</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Compression Client-Side</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Notre moteur WebAssembly compresse vos fichiers localement. <strong>Aucune donnée ne quitte votre appareil.</strong></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-green-600 dark:text-green-400">3</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white">Effacement Automatique</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Dès la fermeture de l&apos;onglet, tout est effacé. Aucune trace ne subsiste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "levels",
                title: "Comprendre les Niveaux de Compression",
                content: (
                    <div className="space-y-6">
                        <p>Différents documents nécessitent différents types de compression. Voici comment choisir le bon réglage :</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                                <h3 className="font-bold text-blue-800 mb-2">Compression Recommandée</h3>
                                <p className="text-sm text-blue-700">Le meilleur équilibre. Réduit considérablement la taille du fichier sans perte de qualité visible. Idéal pour les courriels et l'utilisation quotidienne.</p>
                            </div>
                            <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                                <h3 className="font-bold text-red-800 mb-2">Compression Extrême</h3>
                                <p className="text-sm text-red-700">Réduction maximale de la taille. Les images seront de qualité inférieure, mais le fichier sera le plus petit possible. Utilisez-le pour les sites web avec des limites de téléchargement strictes.</p>
                            </div>
                            <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                                <h3 className="font-bold text-green-800 mb-2">Faible Compression</h3>
                                <p className="text-sm text-green-700">Réduction minimale de la taille mais qualité d'image parfaite. Idéal pour les documents avec des graphiques haute résolution ou des photos détaillées.</p>
                            </div>
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
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le fichier n'a pas assez rétréci</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Si votre PDF contient principalement du texte, il est peut-être déjà aussi petit qu'il peut l'être. S'il contient des images, essayez le réglage « Compression Extrême ». Certains PDF sont déjà optimisés et n'auront pas de gain significatif.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les images sont floues après compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Vous avez probablement utilisé la « Compression Extrême ». Passez à la « Compression Recommandée » pour équilibrer la taille et la clarté visuelle. Si la qualité d'image est critique, utilisez la « Faible Compression ».</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le traitement prend très longtemps</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les gros PDF (100+ pages ou scans haute résolution) peuvent prendre du temps. Fermez d'autres onglets du navigateur pour libérer de la mémoire. Pour de très gros fichiers, envisagez de diviser et compresser par parties.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Toujours trop volumineux après compression</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Si le mode 'Extrême' ne répond toujours pas à votre exigence de taille, envisagez de diviser le document en utilisant notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">outil de division PDF</Link> ou de supprimer les images haute résolution avant la compression.</p>
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
                a: "Non ! C'est l'avantage principal de notre outil. La compression se fait entièrement dans votre navigateur. Votre document n'est jamais téléchargé sur un serveur, gardant vos données sensibles privées sur votre propre appareil."
            },
            {
                q: "De combien mon PDF sera-t-il réduit ?",
                a: "Cela dépend du niveau choisi. La compression « Recommandée » est conçue pour être invisible à l'œil humain. La compression « Extrême » réduira considérablement la taille mais pourra donner des images plus douces. Le texte n'est généralement pas affecté."
            },
            {
                q: "Puis-je compresser des PDF protégés par mot de passe ?",
                a: "Vous devrez d'abord déverrouiller le PDF. Si vous avez le mot de passe, utilisez un lecteur PDF pour enregistrer une copie sans mot de passe avant de compresser, ou utilisez notre outil de déverrouillage PDF. Une fois déverrouillé, vous pouvez le compresser librement. Vous pouvez réappliquer la protection par mot de passe après la compression si nécessaire."
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
                a: "La plupart des PDF peuvent être réduits de 40 % à 80 % s'ils contiennent beaucoup d'images. Les documents texte seuls verront des gains plus faibles car le texte est déjà très efficace."
            },
            {
                q: "La compression supprime-t-elle les métadonnées ou données cachées ?",
                a: "Oui ! Bien que la taille du fichier change, la structure du PDF reste standard. Le fichier compressé s'ouvrira dans n'importe quel lecteur PDF (Acrobat, Aperçu, Chrome, etc.) sur n'importe quel appareil sans problème."
            }
        ],

        ctaTitle: "Prêt à optimiser votre PDF ?",
        ctaButton: "Optimiser PDF maintenant",
        ctaSubtext: "Gratuit, sûr et canadien.",
        whyTitle: "Pourquoi le traitement local ?",
        whyDesc: "Le traitement local est plus rapide, plus sûr et plus privé.",
        whyList: [
            "Aucun téléchargement requis",
            "Les données restent sur l'appareil",
            "Compression ajustable"
        ]
    }
});

export const CompressPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang)[lang];
    const qa = translations[lang].features.compress.quickAnswer;
    const t = content;

    return (
        <div className="w-full px-4 py-12">
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
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: lang === 'fr' ? '/fr/guides/compress-pdf' : '/guides/compress-pdf' }
                ]}
            />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scissors size={32} />}>
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <section className="animate-fade-in">
                        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
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
                                    {t.whyList.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                                            {i === 2 ? (
                                                <BarChart className="text-canada-red mt-0.5 sm:mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                            ) : (
                                                <Zap className="text-canada-red mt-0.5 sm:mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                            )}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-6 sm:py-8 md:py-12 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/compress-pdf`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Scissors size={20} className="sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <RelatedTools lang={lang} currentPath="/guides/compress-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};


