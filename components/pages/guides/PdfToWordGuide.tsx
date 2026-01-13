'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `Convert PDF to Word | Editable Guide ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Learn how to make your PDFs editable. Our ${CURRENT_YEAR} guide shows you how to locally convert PDF to Word accurately and securely without signups.`
        },
        h1: "How to Convert PDF to Word: The Definitive Guide",
        subtitle: "Transform your read-only PDFs into editable documents without software installation or privacy compromises.",
        intro: "Need to edit a **PDF document**? We've all been there: you have a contract, resume, or report that needs a quick update, but you only have the PDF version. Our [PDF to Word converter](/${lang}/pdf-to-word) allows you to extract text and basic formatting into a standard **.docx** file. The best part? Everything happens entirely in your browser, keeping your sensitive Canadian documents safe and away from foreign servers.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Converting PDF to Editable Word",
                content: `Follow these simple steps to unlock your PDF for editing:
1. **Upload Your PDF File**: Click to browse or drag-and-drop your PDF document into our [PDF to Word converter](/${lang}/pdf-to-word). The file stays on your device—never uploaded to our servers.
2. **Automatic Text Extraction**: Our browser-based engine immediately begins extracting text, formatting, and basic layout information from your PDF.
3. **DOCX File Generation**: We construct a new Microsoft Word (.docx) file with the extracted content, preserving paragraph structure and basic styling where possible.
4. **Preview Quality (Optional)**: Once generated, you can open the file to verify the extraction quality before proceeding with edits.
5. **Download Your Editable File**: Within seconds, your editable .docx document is ready. Save it and begin making your changes in Word, Google Docs, or any compatible editor.
6. **Clean Up Formatting**: For complex PDFs, you may need to adjust tables, images, or multi-column layouts after conversion. Simple text documents usually require minimal cleanup.`
            },
            {
                id: "why-word",
                title: "Why Convert PDF back to Word?",
                content: `PDFs are excellent for viewing and sharing, but they're designed to be read-only. By converting to Word, you unlock powerful editing capabilities:
- **Edit Text Content**: Fix typos, update dates, change contact information, or revise entire paragraphs in contracts, reports, and forms.
- **Adjust Layout and Design**: Move images, resize charts, change font sizes, modify margins, and restructure sections without recreating the entire document.
- **Collaborate with Teams**: Word's "Track Changes" feature makes it easy for multiple people to review and suggest edits, which is impossible with static PDFs.
- **Repurpose Content**: Extract sections from long PDF reports to create new documents, presentations, or summaries.
- **Update Templates**: Convert PDF forms and templates to Word format so you can customize them for repeated use.
- **Accessibility**: Word documents can be more easily adapted for screen readers and accessibility tools compared to locked PDF formats.`
            },
            {
                id: "how-it-works",
                title: "How Our Local Conversion Works",
                content: `Most online converters upload your file to a cloud server, where it's processed, stored (sometimes indefinitely), and potentially accessed by third parties. At pdfcanada.ca, we use **client-side technology** that works fundamentally differently:

1. **Local Extraction**: Our PDF processing engine reads the text characters, fonts, and layout directly from the PDF in your browser's memory. No upload required.
2. **DOCX Generation**: We construct a new Word file structure using the extracted content and wrap it into a standards-compliant .docx package.
3. **Instant Download**: The file is served back to you immediately. Your sensitive data never leaves your device, never touches our servers.

**Why This Matters:**
- **Privacy Protection**: Confidential contracts, medical records, financial documents, and personal information remain 100% private.
- **Faster Processing**: No upload/download wait times. Conversion happens instantly.
- **Offline Capable**: Once the page loads, you can even disconnect from the internet and still convert files.
- **No File Size Restrictions**: Server-based tools often limit file sizes. Ours is only limited by your device's memory.`
            },
            {
                id: "use-cases",
                title: "Common Use Cases for PDF to Word Conversion",
                content: `**Editing Contracts and Agreements**: You received a PDF contract that needs minor changes before signing. Convert to Word, make your edits (with Track Changes), then convert back to PDF for signing.

**Updating Old Documents**: You have archived PDF reports from 2020 but need to extract sections for a new presentation. Convert to Word, copy the relevant paragraphs, and avoid retyping everything.

**Job Application Modifications**: A recruiter sent you a PDF job description, but you want to customize it for your own posting. Convert to Word, modify the requirements, and save as a new document.

**Government Form Completion**: Some CRA, Service Canada, or provincial forms are distributed as PDFs. Converting to Word lets you fill them out digitally with proper formatting before converting back to PDF for submission.

**Academic Paper Revisions**: Your thesis advisor marked up a PDF of your draft. Convert to Word, incorporate their feedback using Track Changes, and prepare the next version efficiently.

**Legal Document Review**: Lawyers often need to extract clauses from PDF case law or precedents. When you **format PDF to Word**, you can highlight relevant sections and insert them into new legal briefs easily.`
            },
            {
                id: "resume-rebuilding",
                title: "Resume Rebuilding",
                content: "You only have your old resume as a PDF. **Can you change a PDF back to Word**? Absolutely. Use our tool to update your work experience, skills, and contact information without retyping."
            },
            {
                id: "data-extraction",
                title: "Extracting Data Instead of Text?",
                content: (
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-800">
                        <p className="text-gray-800 dark:text-gray-200">
                            If you are converting a PDF just to get the numbers out (like bank statements or spreadsheets), Word might not be the best format.
                            <br /><br />
                            Check out our <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold">PDF to CSV Guide</Link> to learn how to extract structured data directly into Excel or CSV with 100% accuracy.
                        </p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Best Practices for PDF to Word Conversion",
                content: `**Before Converting:**
- Check if your PDF is text-based or scanned images. If scanned, use our OCR tool first to make the text selectable.
- Understand that complex layouts (multi-column newspapers, heavily designed brochures) may require significant formatting adjustments after conversion.
- Make a backup of your original PDF before converting, in case you need to reference the original layout.

**For Best Results:**
- Simple, text-heavy PDFs (reports, essays, contracts) convert most accurately with minimal cleanup needed.
- PDFs with standard fonts (Arial, Times New Roman, Calibri) maintain better formatting than those with decorative or embedded custom fonts.
- Single-column layouts convert better than multi-column designs. Expect to manually adjust complex column structures.
- Tables may require reformatting, especially if they span multiple pages or have merged cells.

**After Converting:**
- Always open and review the resulting .docx file before making extensive edits to understand what needs cleanup.
- Check that headings, paragraphs, and lists maintained their structure. Adjust styles if needed.
- Verify that images and charts are positioned correctly. You may need to manually reposition or resize them.
- Test any extracted tables by adding/removing rows to ensure the table structure is intact.
- Run a spell check—sometimes character encoding issues can introduce typos during conversion.`
            },
            {
                id: "troubleshooting",
                title: "Common Conversion Issues and Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Text is garbled or has strange characters</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: The PDF may use custom font encoding or embedded fonts that don't translate cleanly. Try copying and pasting the text manually, or use a different conversion tool for specialized documents.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Images are missing or pixelated</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Low-resolution images in the PDF will remain low-resolution in Word. If images are missing entirely, they may be vector graphics that didn't convert—you'll need to re-insert them manually.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Layout is completely broken with text scattered everywhere</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: The PDF likely uses complex positioning or text boxes. This is common in brochures and magazines. Consider manually retyping content or using the PDF as a visual reference while rebuilding in Word.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Tables are malformed or missing borders</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: PDF tables often convert imperfectly. After conversion, select the table in Word, go to Table Design, and reapply borders. You may need to merge or split cells to match the original layout.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problem: Conversion takes a very long time or fails</h4>
                            <p className="text-yellow-800"><strong>Solution</strong>: Very large PDFs (100+ pages or 50+ MB) can overwhelm browser memory. Try splitting the PDF into smaller sections using our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">Organize PDF tool</Link>, then convert each section separately.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Is there a file size limit for PDF to Word conversion?",
                a: "Since conversion happens locally in your browser, the limit depends on your computer's available RAM. Most standard documents up to 50-100MB convert smoothly in seconds. Very large files might take longer or require closing other browser tabs to free up memory."
            },
            {
                q: "Do I need to create an account or sign up?",
                a: "Not at all, eh. Just upload, convert, and download. No email required, no account creation, no newsletter signups. We believe in simple, straightforward tools without unnecessary barriers."
            },
            {
                q: "Can I convert scanned or image-based PDFs to Word?",
                a: "For scanned documents (images of text rather than actual selectable text), we recommend using our OCR (Optical Character Recognition) tool first to make the text selectable, and then converting to Word. Image-based PDFs without OCR will convert, but the result will be images embedded in a Word file, not editable text."
            },
            {
                q: "Will the converted Word document look exactly like the PDF?",
                a: "For simple, text-based PDFs, the conversion is usually very accurate with minimal formatting adjustments needed. However, complex layouts with multi-column text, advanced graphics, or custom fonts may require manual cleanup in Word after conversion. The more complex the original PDF design, the more post-conversion editing you may need."
            },
            {
                q: "Is it safe to convert confidential documents?",
                a: "Absolutely. Unlike cloud-based converters that upload your file to remote servers, our tool processes everything locally in your browser. Your confidential contracts, medical records, financial statements, and personal documents never leave your device, making this ideal for sensitive materials."
            },
            {
                q: "Can I edit the Word file immediately after conversion?",
                a: "Yes! The output is a standard .docx file that opens in Microsoft Word, Google Docs, LibreOffice, or any compatible word processor. You can start editing text, adjusting formatting, and making changes immediately. For complex documents, you may want to review the layout first and make formatting adjustments as needed."
            },
            {
                q: "What happens to hyperlinks and bookmarks during conversion?",
                a: "Most hyperlinks are preserved during conversion and remain clickable in the Word document. However, PDF-specific features like bookmarks may not translate perfectly. Always test links in the converted document before sharing."
            },
            {
                q: "Can I convert password-protected PDFs?",
                a: "You'll need to unlock the PDF first. If you have the password, use a PDF viewer to open and save an unprotected copy, or use our Unlock PDF tool. Once unlocked, you can convert it to Word. Password protection is removed during conversion—you can re-protect the Word file if needed."
            }
        ],

        ctaTitle: "Ready to Edit Your Document?",
        ctaButton: "Start PDF to Word Conversion",
        ctaSubtext: "100% Free. Secure. Canadian.",
        faqHeading: "Common Questions",
        quickAnswer: {
            question: "How do I convert PDF to Word for free?",
            answer: "Use pdfcanada.ca's PDF to Word converter. Upload your PDF, our engine extracts text and formatting locally in your browser, then download your editable .docx file. No signup needed.",
            tool: "PDF to Word Converter",
            steps: ["Upload your PDF file", "Local text extraction", "Download your Word file"]
        }
    },
    fr: {
        seo: {
            title: `Convertir PDF en Word | Guide Modifiable ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à rendre vos PDF modifiables. Notre guide ${CURRENT_YEAR} vous montre comment convertir localement vos PDF en Word de manière précise et sécurisée sans inscription.`
        },
        h1: "Comment Convertir un PDF en Word : Le Guide Pratique",
        subtitle: "Transformez vos PDF en lecture seule en documents modifiables sans installation de logiciel ni compromis sur la confidentialité.",
        intro: "Besoin de modifier un **document PDF** ? Nous sommes tous passés par là : vous avez un contrat, un CV ou un rapport qui nécessite une mise à jour rapide, mais vous n'avez que la version PDF. Notre **convertisseur PDF en Word** vous permet d'extraire le texte et le formatage de base dans un fichier **.docx** standard. Le meilleur ? Tout se passe entièrement dans votre navigateur, gardant vos documents canadiens sensibles en sécurité et à l'abri des serveurs étrangers.",

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Conversion de PDF en Word Modifiable",
                content: `Suivez ces étapes simples pour déverrouiller votre PDF et le rendre modifiable :
1. **Téléchargez votre fichier PDF** : Cliquez pour parcourir ou glissez-déposez votre document PDF dans notre [convertisseur PDF vers Word](/${lang}/pdf-to-word). Le fichier reste sur votre appareil—jamais téléchargé sur nos serveurs.
2. **Extraction automatique du texte** : Notre moteur basé sur le navigateur commence immédiatement à extraire le texte, le formatage et les informations de mise en page de base de votre PDF.
3. **Génération du fichier DOCX** : Nous construisons un nouveau fichier Microsoft Word (.docx) avec le contenu extrait, en préservant la structure des paragraphes et le style de base dans la mesure du possible.
4. **Aperçu de la qualité (optionnel)** : Une fois généré, vous pouvez ouvrir le fichier pour vérifier la qualité de l'extraction avant de procéder aux modifications.
5. **Téléchargez votre fichier modifiable** : En quelques secondes, votre document .docx modifiable est prêt. Enregistrez-le et commencez à apporter vos modifications dans Word, Google Docs ou tout éditeur compatible.
6. **Nettoyez le formatage** : Pour les PDF complexes, vous devrez peut-être ajuster les tableaux, images ou mises en page multi-colonnes après la conversion. Les documents texte simples nécessitent généralement un minimum de nettoyage.`
            },
            {
                id: "why-word",
                title: "Pourquoi Reconvertir un PDF en Word ?",
                content: `Les PDF sont excellents pour la visualisation et le partage, mais ils sont conçus pour être en lecture seule. En convertissant en Word, vous débloquez de puissantes capacités d'édition :
- **Modifier le contenu textuel** : Corriger les fautes de frappe, mettre à jour les dates, changer les coordonnées ou réviser des paragraphes entiers dans les contrats, rapports et formulaires.
- **Ajuster la mise en page et le design** : Déplacer des images, redimensionner des graphiques, changer les tailles de police, modifier les marges et restructurer des sections sans recréer tout le document.
- **Collaborer avec des équipes** : La fonction "Suivi des modifications" de Word facilite la révision et la suggestion de modifications par plusieurs personnes, ce qui est impossible avec des PDF statiques.
- **Réutiliser le contenu** : Extraire des sections de longs rapports PDF pour créer de nouveaux documents, présentations ou résumés.
- **Mettre à jour des modèles** : Convertir des formulaires et modèles PDF au format Word pour les personnaliser en vue d'une utilisation répétée.
- **Accessibilité** : Les documents Word peuvent être plus facilement adaptés aux lecteurs d'écran et aux outils d'accessibilité par rapport aux formats PDF verrouillés.`
            },
            {
                id: "how-it-works",
                title: "Comment Fonctionne Notre Conversion Locale",
                content: `La plupart des convertisseurs en ligne téléchargent votre fichier sur un serveur cloud, où il est traité, stocké (parfois indéfiniment) et potentiellement accessible par des tiers. Chez pdfcanada.ca, nous utilisons une **technologie côté client** qui fonctionne fondamentalement différemment :

1. **Extraction Locale** : Notre moteur de traitement PDF lit les caractères de texte, polices et mise en page directement depuis le PDF dans la mémoire de votre navigateur. Aucun téléchargement requis.
2. **Génération DOCX** : Nous construisons une nouvelle structure de fichier Word en utilisant le contenu extrait et l'encapsulons dans un package .docx conforme aux normes.
3. **Téléchargement Instantané** : Le fichier vous est renvoyé immédiatement. Vos données sensibles ne quittent jamais votre appareil, ne touchent jamais nos serveurs.

**Pourquoi C'est Important :**
- **Protection de la Confidentialité** : Les contrats confidentiels, dossiers médicaux, documents financiers et informations personnelles restent 100% privés.
- **Traitement Plus Rapide** : Aucun temps d'attente de téléchargement/téléversement. La conversion se fait instantanément.
- **Capable Hors Ligne** : Une fois la page chargée, vous pouvez même vous déconnecter d'Internet et continuer à convertir des fichiers.
- **Aucune Restriction de Taille de Fichier** : Les outils basés sur serveur limitent souvent les tailles de fichiers. Le nôtre n'est limité que par la mémoire de votre appareil.`
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants pour la Conversion PDF vers Word",
                content: `**Modification de Contrats et Accords** : Vous avez reçu un contrat PDF qui nécessite des modifications mineures avant la signature. Convertissez en Word, faites vos modifications (avec Suivi des modifications), puis reconvertissez en PDF pour la signature.

**Mise à Jour d'Anciens Documents** : Vous avez des rapports PDF archivés de 2020 mais devez extraire des sections pour une nouvelle présentation. Convertissez en Word, copiez les paragraphes pertinents et évitez de tout retaper.

**Modifications de Candidature d'Emploi** : Un recruteur vous a envoyé une description de poste en PDF, mais vous voulez la personnaliser pour votre propre affichage. Convertissez en Word, modifiez les exigences et enregistrez comme nouveau document.

**Remplissage de Formulaires Gouvernementaux** : Certains formulaires de l'ARC, Service Canada ou provinciaux sont distribués en PDF. La conversion en Word vous permet de les remplir numériquement avec un formatage approprié avant de les reconvertir en PDF pour soumission.

**Révisions de Travaux Académiques** : Votre directeur de thèse a annoté un PDF de votre brouillon. Convertissez en Word, intégrez ses commentaires en utilisant Suivi des modifications et préparez efficacement la prochaine version.

**Révision de Documents Juridiques** : Les avocats doivent souvent extraire des clauses de jurisprudence ou de précédents PDF. Convertissez en Word, surlignez les sections pertinentes et insérez-les dans de nouveaux mémoires juridiques.`
            },
            {
                id: "resume-rebuilding",
                title: "Reconstruction de CV",
                content: "Vous n'avez votre ancien CV qu'en PDF. Convertissez-le en Word pour pouvoir facilement mettre à jour votre expérience professionnelle, compétences et coordonnées."
            },
            {
                id: "data-extraction",
                title: "Extraire des Données plutôt que du Texte ?",
                content: (
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-800">
                        <p className="text-gray-800 dark:text-gray-200">
                            Si vous convertissez un PDF uniquement pour en extraire des chiffres (comme des relevés bancaires ou des tableaux), Word n&apos;est peut-être pas le meilleur format.
                            <br /><br />
                            Consultez notre <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold">Guide PDF vers CSV</Link> pour apprendre à extraire des données structurées directement dans Excel ou CSV avec une précision totale.
                        </p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Meilleures Pratiques pour la Conversion PDF vers Word",
                content: `**Avant de Convertir :**
- Vérifiez si votre PDF est basé sur du texte ou des images scannées. Si scanné, utilisez d'abord notre outil OCR pour rendre le texte sélectionnable.
- Comprenez que les mises en page complexes (journaux multi-colonnes, brochures très designées) peuvent nécessiter des ajustements de formatage importants après la conversion.
- Faites une sauvegarde de votre PDF original avant de convertir, au cas où vous auriez besoin de référencer la mise en page originale.

**For Best Results:**
- Les PDF simples, riches en texte (rapports, essais, contrats) se convertissent le plus précisément with minimal cleanup needed.
- Les PDF avec des polices standard (Arial, Times New Roman, Calibri) maintiennent un meilleur formatage que ceux avec des polices décoratives ou personnalisées intégrées.
- Les mises en page à une seule colonne se convertissent mieux que les designs multi-colonnes. Attendez-vous à ajuster manuellement les structures de colonnes complexes.
- Les tableaux peuvent nécessiter un reformatage, surtout s'ils s'étendent sur plusieurs pages ou ont des cellules fusionnées.

**Après la Conversion :**
- Ouvrez et examinez toujours le fichier .docx résultant avant d'effectuer des modifications importantes pour comprendre ce qui nécessite un nettoyage.
- Vérifiez que les titres, paragraphes et listes ont maintenu leur structure. Ajustez les styles si nécessaire.
- Vérifiez que les images et graphiques sont correctement positionnés. Vous devrez peut-être les repositionner ou redimensionner manuellement.
- Testez tous les tableaux extraits en ajoutant/supprimant des lignes pour vous assurer que la structure du tableau est intacte.
- Exécutez une vérification orthographique—parfois les problèmes d'encodage de caractères peuvent introduire des fautes de frappe lors de la conversion.`
            },
            {
                id: "troubleshooting",
                title: "Problèmes de Conversion Courants et Solutions",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Le texte est brouillé ou contient des caractères étranges</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Le PDF peut utiliser un encodage de police personnalisé ou des polices intégrées qui ne se traduisent pas proprement. Essayez de copier et coller le texte manuellement, ou utilisez un outil de conversion différent pour les documents spécialisés.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les images sont manquantes ou pixelisées</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les images basse résolution dans le PDF resteront basse résolution dans Word. Si les images sont complètement manquantes, elles peuvent être des graphiques vectoriels qui n'ont pas converti—vous devrez les réinsérer manuellement.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : La mise en page est complètement cassée avec du texte éparpillé partout</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Le PDF utilise probablement un positionnement complexe ou des zones de texte. C'est courant dans les brochures et magazines. Envisagez de retaper manuellement le contenu ou utilisez le PDF comme référence visuelle tout en reconstruisant dans Word.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : Les tableaux sont malformés ou les bordures sont manquantes</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les tableaux PDF se convertissent souvent imparfaitement. Après la conversion, sélectionnez le tableau dans Word, allez dans Conception de tableau et réappliquez les bordures. Vous devrez peut-être fusionner ou diviser des cellules pour correspondre à la mise en page originale.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problème : La conversion prend très longtemps ou échoue</h4>
                            <p className="text-yellow-800"><strong>Solution</strong> : Les très gros PDF (100+ pages ou 50+ Mo) peuvent submerger la mémoire du navigateur. Essayez de diviser le PDF en sections plus petites en utilisant notre <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">outil d'organisation PDF</Link>, puis convertissez chaque section séparément.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Y a-t-il une limite de taille de fichier PDF que je peux convertir ?",
                a: "Puisque la conversion se fait localement dans votre navigateur, la limite dépend de la RAM disponible de votre ordinateur. La plupart des documents standard jusqu'à 50-100 Mo se convertissent sans problème en quelques secondes. Les très gros fichiers peuvent prendre plus de temps ou nécessiter la fermeture d'autres onglets du navigateur pour libérer de la mémoire."
            },
            {
                q: "Dois-je créer un compte ou m'inscrire ?",
                a: "Pas du tout, eh. Il suffit de télécharger, convertir et télécharger. Aucun courriel requis, aucune création de compte, aucun abonnement à une newsletter. Nous croyons aux outils simples et directs sans barrières inutiles."
            },
            {
                q: "Puis-je convertir des PDF scannés ou basés sur des images en Word ?",
                a: "Pour les documents scannés (images de texte plutôt que du texte réellement sélectionnable), nous recommandons d'utiliser d'abord notre outil OCR (Reconnaissance Optique de Caractères) pour rendre le texte sélectionnable, puis de le convertir en Word. Les PDF basés sur des images sans OCR se convertiront, mais le résultat sera des images intégrées dans un fichier Word, pas du texte modifiable."
            },
            {
                q: "Le document Word converti ressemblera-t-il exactement au PDF ?",
                a: "Pour les PDF simples basés sur du texte, la conversion est généralement très précise with minimal cleanup needed. Cependant, les mises en page complexes avec du texte multi-colonnes, des graphics avancés ou des polices personnalisées peuvent nécessiter un nettoyage manuel dans Word après la conversion. Plus le design du PDF original est complexe, plus vous aurez besoin de modifications après la conversion."
            },
            {
                q: "Est-il sûr de convertir des documents confidentiels ?",
                a: "Absolument. Contrairement aux convertisseurs basés sur le cloud qui téléchargent votre fichier sur des serveurs distants, notre outil traite tout localement dans votre navigateur. Vos contrats confidentiels, dossiers médicaux, états financiers et documents personnels ne quittent jamais votre appareil, ce qui est idéal pour les matériaux sensibles."
            },
            {
                q: "Puis-je modifier le fichier Word immédiatement après la conversion ?",
                a: "Oui ! La sortie est un fichier .docx standard qui s'ouvre dans Microsoft Word, Google Docs, LibreOffice ou tout traitement de texte compatible. Vous pouvez commencer à modifier le texte, ajuster le formatage et apporter des modifications immédiatement. Pour les documents complexes, vous voudrez peut-être d'abord examiner la mise en page et effectuer les ajustements de formatage nécessaires."
            },
            {
                q: "Qu'advient-il des hyperliens et signets lors de la conversion ?",
                a: "La plupart des hyperliens sont préservés lors de la conversion et restent cliquables dans le document Word. Cependant, les fonctionnalités spécifiques au PDF comme les signets peuvent ne pas se traduire parfaitement. Testez toujours les liens dans le document converti avant de le partager."
            },
            {
                q: "Puis-je convertir des PDF protégés par mot de passe ?",
                a: "Vous devrez d'abord déverrouiller le PDF. Si vous avez le mot de passe, utilisez un lecteur PDF pour ouvrir et enregistrer une copie non protégée, ou utilisez notre outil de déverrouillage PDF. Une fois déverrouillé, vous pouvez le convertir en Word. La protection par mot de passe est supprimée lors de la conversion—vous pouvez reprotéger le fichier Word si nécessaire."
            }
        ],

        ctaTitle: "Prêt à Modifier Votre Document ?",
        ctaButton: "Commencer la Conversion PDF en Word",
        ctaSubtext: "100% Gratuit. Sécurisé. Canadien.",
        faqHeading: "Questions Fréquentes",
        quickAnswer: {
            question: "Comment convertir un PDF en Word gratuitement?",
            answer: "Utilisez le convertisseur PDF vers Word de pdfcanada.ca. Téléchargez votre PDF, notre moteur extrait le texte et le formatage localement dans votre navigateur, puis téléchargez votre fichier .docx éditable. Pas d'inscription requise.",
            tool: "Convertisseur PDF en Word",
            steps: ["Téléchargez votre fichier PDF", "Extraction locale du texte", "Téléchargez votre fichier Word"]
        }
    },
    pt: {
        seo: {
            title: `Converter PDF para Word | Guia Editável ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda como tornar seus PDFs editáveis. Nosso guia de ${CURRENT_YEAR} mostra como converter localmente PDF para Word com precisão e segurança sem cadastro.`
        },
        h1: "Como Converter PDF para Word: O Guia Definitivo",
        subtitle: "Transforme seus PDFs somente leitura em documentos editáveis sem instalação de software ou compromissos de privacidade.",
        intro: "Precisa editar um **documento PDF**? Todos nós já passamos por isso: você tem um contrato, currículo ou relatório que precisa de uma atualização rápida, mas só tem a versão em PDF. Nosso [conversor de PDF para Word](/${lang}/pdf-to-word) permite extrair texto e formatação básica para um arquivo **.docx** padrão. A melhor parte? Tudo acontece inteiramente no seu navegador, mantendo seus documentos sensíveis seguros.",

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Convertendo PDF para Word Editável",
                content: `Siga estes passos simples para desbloquear seu PDF para edição:
1. **Envie Seu Arquivo PDF**: Clique para navegar ou arraste e solte seu documento PDF no nosso [conversor de PDF para Word](/${lang}/pdf-to-word). O arquivo fica no seu dispositivo—nunca enviado para nossos servidores.
2. **Extração Automática de Texto**: Nosso motor baseado no navegador começa imediatamente a extrair texto, formatação e informações básicas de layout do seu PDF.
3. **Geração de Arquivo DOCX**: Construímos um novo arquivo Microsoft Word (.docx) com o conteúdo extraído, preservando a estrutura de parágrafos e estilo básico onde possível.
4. **Pré-visualizar Qualidade (Opcional)**: Uma vez gerado, você pode abrir o arquivo para verificar a qualidade da extração antes de prosseguir com as edições.
5. **Baixar Seu Arquivo Editável**: Em segundos, seu documento .docx editável está pronto. Salve-o e comece a fazer suas alterações no Word, Google Docs ou qualquer editor compatível.
6. **Limpar Formatação**: Para PDFs complexos, você pode precisar ajustar tabelas, imagens ou layouts de várias colunas após a conversão. Documentos de texto simples geralmente requerem limpeza mínima.`
            },
            {
                id: "why-word",
                title: "Por que Converter PDF de volta para Word?",
                content: `PDFs são excelentes para visualização e compartilhamento, mas são projetados para serem somente leitura. Ao converter para Word, você desbloqueia poderosos recursos de edição:
- **Editar Conteúdo de Texto**: Corrija erros de digitação, atualize datas, altere informações de contato ou revise parágrafos inteiros em contratos, relatórios e formulários.
- **Ajustar Layout e Design**: Mova imagens, redimensione gráficos, altere tamanhos de fonte, modifique margens e reestruture seções sem recriar todo o documento.
- **Colaborar com Equipes**: O recurso "Controlar Alterações" do Word facilita para várias pessoas revisar e sugerir edições, o que é impossível com PDFs estáticos.
- **Reutilizar Conteúdo**: Extraia seções de longos relatórios em PDF para criar novos documentos, apresentações ou resumos.
- **Atualizar Modelos**: Converta formulários e modelos em PDF para o formato Word para que você possa personalizá-los para uso repetido.
- **Acessibilidade**: Documentos do Word podem ser mais facilmente adaptados para leitores de tela e ferramentas de acessibilidade em comparação com formatos PDF bloqueados.`
            },
            {
                id: "how-it-works",
                title: "Como Funciona Nossa Conversão Local",
                content: `A maioria dos conversores online faz upload do seu arquivo para um servidor na nuvem, onde ele é processado, armazenado (às vezes indefinidamente) e potencialmente acessado por terceiros. No pdfcanada.ca, usamos **tecnologia client-side** que funciona de maneira fundamentalmente diferente:

1. **Extração Local**: Nosso motor de processamento de PDF lê os caracteres de texto, fontes e layout diretamente do PDF na memória do seu navegador. Nenhum upload necessário.
2. **Geração DOCX**: Construímos uma nova estrutura de arquivo Word usando o conteúdo extraído e o empacotamos em um pacote .docx compatível com os padrões.
3. **Download Instantâneo**: O arquivo é servido de volta para você imediatamente. Seus dados sensíveis nunca saem do seu dispositivo, nunca tocam nossos servidores.

**Por Que Isso Importa:**
- **Proteção de Privacidade**: Contratos confidenciais, registros médicos, documentos financeiros e informações pessoais permanecem 100% privados.
- **Processamento Mais Rápido**: Sem tempos de espera de upload/download. A conversão acontece instantaneamente.
- **Capacidade Offline**: Uma vez que a página carrega, você pode até desconectar da internet e continuar convertendo arquivos.
- **Sem Restrições de Tamanho de Arquivo**: Ferramentas baseadas em servidor frequentemente limitam o tamanho dos arquivos. O nosso é limitado apenas pela memória do seu dispositivo.`
            },
            {
                id: "use-cases",
                title: "Casos de Uso Comuns para Conversão de PDF para Word",
                content: `**Editando Contratos e Acordos**: Você recebeu um contrato em PDF que precisa de pequenas alterações antes de assinar. Converta para Word, faça suas edições (com Controlar Alterações) e depois converta de volta para PDF para assinatura.

**Atualizando Documentos Antigos**: Você tem relatórios em PDF arquivados de 2020, mas precisa extrair seções para uma nova apresentação. Converta para Word, copie os parágrafos relevantes e evite redigitar tudo.

**Modificações em Candidaturas de Emprego**: Um recrutador enviou uma descrição de trabalho em PDF, mas você quer personalizá-la para sua própria postagem. Converta para Word, modifique os requisitos e salve como um novo documento.

**Preenchimento de Formulários Governamentais**: Alguns formulários governamentais são distribuídos como PDFs. Converter para Word permite preenchê-los digitalmente com formatação adequada antes de converter de volta para PDF para envio.

**Revisões de Trabalhos Acadêmicos**: Seu orientador de tese marcou um PDF do seu rascunho. Converta para Word, incorpore o feedback usando Controlar Alterações e prepare a próxima versão eficientemente.

**Revisão de Documentos Legais**: Advogados frequentemente precisam extrair cláusulas de jurisprudência ou precedentes em PDF. Quando você **formata PDF para Word**, pode destacar seções relevantes e inseri-las em novos resumos jurídicos facilmente.`
            },
            {
                id: "resume-rebuilding",
                title: "Reconstrução de Currículo",
                content: "Você só tem seu currículo antigo em PDF. **Você pode transformar um PDF de volta para Word**? Absolutamente. Use nossa ferramenta para atualizar sua experiência de trabalho, habilidades e informações de contato sem redigitar."
            },
            {
                id: "data-extraction",
                title: "Extraindo Dados em vez de Texto?",
                content: (
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-800">
                        <p className="text-gray-800 dark:text-gray-200">
                            Se você está convertendo um PDF apenas para extrair os números (como extratos bancários ou planilhas), o Word pode não ser o melhor formato.
                            <br /><br />
                            Confira nosso <Link href={`/${lang}/guides/pdf-to-csv`} className="text-canada-red hover:underline font-bold">Guia PDF para CSV</Link> para aprender como extrair dados estruturados diretamente para Excel ou CSV com 100% de precisão.
                        </p>
                    </div>
                )
            },
            {
                id: "best-practices",
                title: "Melhores Práticas para Conversão de PDF para Word",
                content: `**Antes de Converter:**
- Verifique se seu PDF é baseado em texto ou imagens digitalizadas. Se digitalizado, use nossa ferramenta OCR primeiro para tornar o texto selecionável.
- Entenda que layouts complexos (jornais multi-colunas, brochuras muito desenhadas) podem exigir ajustes significativos de formatação após a conversão.
- Faça um backup do seu PDF original antes de converter, caso precise referenciar o layout original.

**Para Melhores Resultados:**
- PDFs simples e com muito texto (relatórios, ensaios, contratos) convertem com maior precisão e exigem limpeza mínima.
- PDFs com fontes padrão (Arial, Times New Roman, Calibri) mantêm melhor formatação do que aqueles com fontes decorativas ou personalizadas incorporadas.
- Layouts de coluna única convertem melhor do que designs multi-colunas. Espere ajustar manualmente estruturas de colunas complexas.
- Tabelas podem exigir reformatação, especialmente se se estenderem por várias páginas ou tiverem células mescladas.

**Após a Conversão:**
- Sempre abra e revise o arquivo .docx resultante antes de fazer edições extensas para entender o que precisa de limpeza.
- Verifique se títulos, parágrafos e listas mantiveram sua estrutura. Ajuste os estilos se necessário.
- Verifique se imagens e gráficos estão posicionados corretamente. Você pode precisar reposicioná-los ou redimensioná-los manualmente.
- Teste quaisquer tabelas extraídas adicionando/removendo linhas para garantir que a estrutura da tabela esteja intacta.
- Execute uma verificação ortográfica—às vezes problemas de codificação de caracteres podem introduzir erros de digitação durante a conversão.`
            },
            {
                id: "troubleshooting",
                title: "Problemas Comuns de Conversão e Soluções",
                content: (
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: O texto está truncado ou tem caracteres estranhos</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: O PDF pode usar codificação de fonte personalizada ou fontes incorporadas que não se traduzem claramente. Tente copiar e colar o texto manualmente ou use uma ferramenta de conversão diferente para documentos especializados.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Imagens estão faltando ou pixeladas</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Imagens de baixa resolução no PDF permanecerão de baixa resolução no Word. Se as imagens estiverem faltando completamente, elas podem ser gráficos vetoriais que não converteram—você precisará reinseri-las manualmente.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: O layout está completamente quebrado com texto espalhado</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: O PDF provavelmente usa posicionamento complexo ou caixas de texto. Isso é comum em brochuras e revistas. Considere redigitar manualmente o conteúdo ou usar o PDF como referência visual enquanto reconstrói no Word.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: Tabelas estão malformadas ou faltando bordas</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: Tabelas em PDF frequentemente convertem imperfeitamente. Após a conversão, selecione a tabela no Word, vá para Design de Tabela e reaplique as bordas. Você pode precisar mesclar ou dividir células para corresponder ao layout original.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <h4 className="font-bold text-yellow-900 mb-2">Problema: A conversão demora muito ou falha</h4>
                            <p className="text-yellow-800"><strong>Solução</strong>: PDFs muito grandes (100+ páginas ou 50+ MB) podem sobrecarregar a memória do navegador. Tente dividir o PDF em seções menores usando nossa <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-semibold">ferramenta Organizar PDF</Link> e, em seguida, converta cada seção separadamente.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Existe um limite de tamanho de arquivo para conversão de PDF para Word?",
                a: "Como a conversão acontece localmente no seu navegador, o limite depende da RAM disponível do seu computador. A maioria dos documentos padrão de até 50-100MB converte suavemente em segundos. Arquivos muito grandes podem demorar mais."
            },
            {
                q: "Preciso criar uma conta ou me inscrever?",
                a: "De jeito nenhum. Apenas envie, converta e baixe. Sem e-mail necessário, sem criação de conta, sem inscrições em boletins informativos. Acreditamos em ferramentas simples e diretas, sem barreiras desnecessárias."
            },
            {
                q: "Posso converter PDFs digitalizados ou baseados em imagens para Word?",
                a: "Para documentos digitalizados (imagens de texto em vez de texto selecionável real), recomendamos usar nossa ferramenta OCR (Reconhecimento Óptico de Caracteres) primeiro para tornar o texto selecionável e, em seguida, converter para Word. PDFs baseados em imagens sem OCR converterão, mas o resultado serão imagens incorporadas em um arquivo Word, não texto editável."
            },
            {
                q: "O documento Word convertido ficará exatamente igual ao PDF?",
                a: "Para PDFs simples baseados em texto, a conversão geralmente é muito precisa com necessidade mínima de ajustes de formatação. No entanto, layouts complexos com texto em várias colunas, gráficos avançados ou fontes personalizadas podem exigir limpeza manual no Word após a conversão."
            },
            {
                q: "É seguro converter documentos confidenciais?",
                a: "Absolutamente. Ao contrário de conversores baseados em nuvem que enviam seu arquivo para servidores remotos, nossa ferramenta processa tudo localmente no seu navegador. Seus contratos confidenciais, registros médicos, extratos financeiros e documentos pessoais nunca saem do seu dispositivo, tornando isso ideal para materiais sensíveis."
            },
            {
                q: "Posso editar o arquivo Word imediatamente após a conversão?",
                a: "Sim! A saída é um arquivo .docx padrão que abre no Microsoft Word, Google Docs, LibreOffice ou qualquer processador de texto compatível. Você pode começar a editar texto, ajustar formatação e fazer alterações imediatamente."
            },
            {
                q: "O que acontece com hiperlinks e marcadores durante a conversão?",
                a: "A maioria dos hiperlinks é preservada durante a conversão e permanece clicável no documento Word. No entanto, recursos específicos de PDF como marcadores podem não se traduzir perfeitamente. Sempre teste os links no documento convertido antes de compartilhar."
            },
            {
                q: "Posso converter PDFs protegidos por senha?",
                a: "Você precisará desbloquear o PDF primeiro. Se você tiver a senha, use um visualizador de PDF para abrir e salvar uma cópia desprotegida, ou use nossa ferramenta Desbloquear PDF. Uma vez desbloqueado, você pode convertê-lo para Word. A proteção por senha é removida durante a conversão."
            }
        ],

        ctaTitle: "Pronto para Editar seu Documento?",
        ctaButton: "Começar Conversão PDF para Word",
        ctaSubtext: "100% Grátis. Seguro. Canadense.",
        faqHeading: "Perguntas Comuns",
        quickAnswer: {
            question: "Como converto PDF para Word de graça?",
            answer: "Use o conversor de PDF para Word do pdfcanada.ca. Envie seu PDF, nosso motor extrai texto e formatação localmente no seu navegador, depois baixe seu arquivo .docx editável. Sem cadastro necessário.",
            tool: "Conversor PDF para Word",
            steps: ["Envie seu arquivo PDF", "Extração local de texto", "Baixe seu arquivo Word"]
        }
    },
});

export const PdfToWordGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-word"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-04-10"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'PDF vers Word' : (lang === 'pt' ? 'PDF para Word' : 'PDF to Word'), path: lang === 'fr' ? '/fr/guides/pdf-to-word' : (lang === 'pt' ? '/pt/guides/pdf-to-word' : '/guides/pdf-to-word') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Guide PDF vers Word' : lang === 'pt' ? 'Guia PDF para Word' : 'PDF to Word Guide', href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-word" lang={lang} />
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
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

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {t.faqHeading}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/pdf-to-word`}
                            className="inline-block bg-white text-canada-red px-6 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95 whitespace-normal max-w-full"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-word" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
