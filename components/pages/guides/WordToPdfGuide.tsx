'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2 } from 'lucide-react';
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
            title: `How to Convert Word to PDF | Free & Secure ${CURRENT_YEAR} Tutorial | pdfcanada.ca`,
            desc: `Learn how to transform DOCX to PDF instantly. Our secure ${CURRENT_YEAR} guide shows you how to convert Word to PDF locally on your device without uploading sensitive files. No uploads, 100% private Canadian tool.`
        },
        h1: `How to Convert Word to PDF: The ${CURRENT_YEAR} Guide`,
        subtitle: "Create high-quality, locked-down PDF documents from your Word files instantly without leaving your browser.",

        intro: "Need to turn your **Word doc** into a professional-looking PDF? Whether you're sending a resume, an invoice, or a formal report, PDF is the standard for ensuring your formatting stays exactly as intended. Our **Word to PDF converter** handles the transition smoothly, and because it runs locally, you don't have to worry about your business or personal data being stored on a random server.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Converting Word to PDF",
                content: `Follow these simple steps to convert your Word document to PDF:
1. **Upload Your .docx File**: Click to browse or drag-and-drop your Word document into our converter. The file stays on your device—never uploaded to our servers.
2. **Automatic Conversion**: Our browser-based engine immediately begins processing your document, preserving formatting, fonts, images, and layout.
3. **Preview (Optional)**: Some converters show a preview—ours focuses on speed, but you can always open the result to verify.
4. **Download Your PDF**: Within seconds, your professional PDF is ready. Save it and share with confidence knowing the formatting is locked.
5. **Compare Quality**: Open both files side-by-side to ensure everything converted correctly, especially complex elements like tables, charts, or headers/footers.`
            },
            {
                id: "why-pdf",
                title: "Why You Should Always Send PDFs Instead of Word Files",
                content: `Word files are editable and their appearance can change depending on which version of Office the recipient is using, their operating system, or their installed fonts. PDFs eliminate these problems:
- **Format Locking**: What you see is exactly what they see. No shifting layouts, missing fonts, or broken formatting.
- **Universal Access**: Everyone can open a PDF on any device—Windows, Mac, Linux, iOS, Android—without needing Microsoft Office. Free PDF readers are built into modern browsers.
- **Security & Integrity**: It's much harder for someone to accidentally (or intentionally) change your text in a PDF. Great for contracts, resumes, and official documents.
- **Professional Appearance**: PDFs are the standard for business communications, job applications, and formal submissions. Sending a Word file can appear unprofessional in many contexts.
- **File Size Control**: PDFs are often smaller than Word documents, especially for image-heavy files, making them easier to email and faster to download.
- **Print Consistency**: PDFs ensure what you see on screen is exactly what prints, avoiding frustrating layout shifts during printing.`
            },
            {
                id: "local-first",
                title: "Local Conversion: Better for Your Privacy & Speed",
                content: `Most converters on the web are "Cloud Based," meaning your document is uploaded to their servers, converted remotely, and sent back. Our tool works fundamentally differently. It uses **in-browser processing** powered by modern JavaScript libraries to transform your .docx file into a PDF right on your device.

**Why This Matters:**
- **Privacy Protection**: Your confidential documents never leave your computer. No server logs, no data retention, no third-party access.
- **Faster Processing**: No upload/download wait times. Conversion happens instantly since it's all local.
- **Offline Capable**: Once loaded, our tool can work without an internet connection (though initial page load requires internet).
- **No File Size Limits**: Server-based tools often limit file sizes. Ours is only limited by your device's memory.

**Ideal For Sensitive Documents:**
- Legal Contracts & NDAs
- Medical Records & Health Information
- Confidential Resumes with Personal Details
- Company Financial Statements
- Tax Returns & CRA Submissions
- Academic Transcripts & Recommendation Letters`
            },
            {
                id: "use-cases",
                title: "Common Use Cases for Word to PDF Conversion",
                content: `**Job Applications**: Convert your resume and cover letter to PDF before submitting. This ensures hiring managers see your carefully formatted document exactly as intended, regardless of their system or software.

**Client Proposals**: Business proposals look more professional and polished in PDF format. The locked format prevents accidental editing and maintains your branding.

**Academic Submissions**: Many universities require PDF submissions for essays, theses, and dissertations. PDFs preserve citations, footnotes, and complex formatting.

**Legal & Contracts**: Lawyers and legal departments universally prefer PDFs for agreements, contracts, and official correspondence due to their immutability.

**Financial Reports**: Company reports, invoices, and financial statements should be in PDF to prevent tampering and ensure consistent viewing.

**Government Forms**: Service Canada, CRA, and provincial agencies often require PDF uploads for applications, permits, and official documents.

**Archival & Records**: Converting Word documents to PDF ensures long-term readability, as PDF is an ISO standard that will remain accessible for decades.`
            },
            {
                id: "best-practices",
                title: "Best Practices for Word to PDF Conversion",
                content: `**Before Converting:**
- Review your Word document for errors—spelling, grammar, formatting issues are permanent once converted.
- Ensure all images are high-quality and properly positioned.
- Check that headers, footers, and page numbers appear correctly.
- Verify hyperlinks work and point to the correct destinations.
- Remove track changes, comments, and hidden metadata that you don't want in the final PDF.

**For Best Results:**
- Use standard fonts (Arial, Times New Roman, Calibri) that convert reliably. Decorative or custom fonts may not embed properly.
- Keep formatting simple—complex layouts with text boxes and layered graphics can sometimes shift during conversion.
- Test conversion with a sample page first if your document is very long or complex.

**After Converting:**
- Always open and review the resulting PDF before sharing to ensure quality.
- Check that page breaks occur in appropriate places.
- Verify all images, charts, and tables rendered correctly.
- Test any embedded hyperlinks to ensure they still function.`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Conversion Issues",
                content: `**Problem: Fonts look different in the PDF**
**Solution**: The Word doc may use fonts not available in the PDF rendering engine. Stick to common system fonts, or embed custom fonts in your Word doc before converting.

**Problem: Images appear blurry or low quality**
**Solution**: Ensure images in your Word doc are high resolution. If images were compressed in Word (Compatibility Mode), save as a new .docx file in the latest format first.

**Problem: Page layout shifted or text wrapping changed**
**Solution**: Complex layouts with floating objects can shift. Try simplifying the layout, or use "In Line with Text" positioning for images instead of "Wrap Text."

**Problem: Conversion fails or takes a very long time**
**Solution**: Very large files (50+ MB) or those with hundreds of high-res images can overwhelm browser memory. Try compressing images in Word first, or split into smaller documents.

**Problem: Hyperlinks don't work in the PDF**
**Solution**: Ensure hyperlinks are properly formatted in Word. Right-click and verify the link address is correct before converting.`
            }
        ],

        faq: [
            {
                q: "Is this conversion tool really free?",
                a: "Yup! No limits, no credit cards, no hidden fees. Just polite Canadian service. Convert as many documents as you need, whenever you need."
            },
            {
                q: "Does it work on mobile devices?",
                a: "Absolutely. You can convert Word to PDF directly from your iPhone or Android browser, picking files from your local storage, iCloud, Google Drive, or OneDrive. The interface adapts to mobile screens for easy use on the go."
            },
            {
                q: "Can I convert older .doc files (not .docx)?",
                a: "Currently, we focus on the modern **.docx** format (Word 2007 and newer). If you have an older .doc file, we recommend opening it in Word, Google Docs, or LibreOffice and saving it as .docx before using our tool. This also ensures better compatibility."
            },
            {
                q: "Will my formatting stay exactly the same?",
                a: "In most cases, yes. Our converter preserves fonts, styles, images, tables, headers, footers, and page layout. However, very complex documents with advanced features (embedded objects, macros, custom fonts) may require minor adjustments. Always review the PDF before sharing."
            },
            {
                q: "Does conversion preserve hyperlinks and bookmarks?",
                a: "Yes! Hyperlinks, table of contents, and cross-references in your Word document are preserved as clickable links in the resulting PDF. Bookmarks and headings also convert to PDF bookmarks for easy navigation."
            },
            {
                q: "What's the maximum file size I can convert?",
                a: "Since conversion happens locally in your browser, the limit depends on your device's RAM. Most modern computers easily handle files up to 50-100MB. Phones may have lower limits. Very large documents may take longer to process."
            },
            {
                q: "Can I convert password-protected Word documents?",
                a: "You'll need to remove the password first. Open the document in Word, enter the password, then save a copy without password protection before converting to PDF. You can re-protect the PDF afterwards if needed."
            },
            {
                q: "Will the PDF be searchable and have selectable text?",
                a: "Yes! The PDF will contain searchable, selectable text just like your original Word document. This is different from scanning a printout—all text remains as text, not images."
            }
        ],

        ctaTitle: "Convert Your Document Now",
        ctaButton: "Start Word to PDF Conversion",
        ctaSubtext: "100% Free. Secure. Local."
    },
    fr: {
        seo: {
            title: `Convertir Word en PDF | Guide Sécurisé ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Découvrez comment transformer vos DOCX en PDF instantanément. Notre guide sécurisé ${CURRENT_YEAR} vous montre comment convertir localement sans risque pour vos données. Convertissez vos PDF professionnels de manière sécurisée dans votre navigateur. Aucun téléchargement, outil canadien 100% privé.`
        },
        h1: "Comment Convertir Word en PDF : La Méthode Professionnelle",
        subtitle: "Créez des documents PDF de haute qualité et verrouillés à partir de vos fichiers Word instantanément sans quitter votre navigateur.",

        intro: "Besoin de transformer votre **document Word** en PDF professionnel ? Que vous envoyiez un CV, une facture ou un rapport formel, le PDF est la norme pour garantir que votre formatage reste exactement comme prévu. Notre **convertisseur Word en PDF** gère la transition en douceur, et parce qu'il fonctionne localement, vous n'avez pas à vous soucier que vos données professionnelles ou personnelles soient stockées sur un serveur aléatoire.",

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Conversion de Word en PDF",
                content: `Suivez ces étapes simples pour convertir votre document Word en PDF :
1. **Téléchargez votre fichier .docx** : Cliquez pour parcourir ou glissez-déposez votre document Word dans notre convertisseur. Le fichier reste sur votre appareil—jamais téléchargé sur nos serveurs.
2. **Conversion automatique** : Notre moteur basé sur le navigateur commence immédiatement à traiter votre document, en préservant la mise en forme, les polices, les images et la mise en page.
3. **Aperçu (optionnel)** : Certains convertisseurs affichent un aperçu—le nôtre se concentre sur la vitesse, mais vous pouvez toujours ouvrir le résultat pour vérifier.
4. **Téléchargez votre PDF** : En quelques secondes, votre PDF professionnel est prêt. Enregistrez-le et partagez-le en toute confiance sachant que la mise en forme est verrouillée.
5. **Comparez la qualité** : Ouvrez les deux fichiers côte à côte pour vous assurer que tout a été converti correctement, en particulier les éléments complexes comme les tableaux, graphiques ou en-têtes/pieds de page.`
            },
            {
                id: "why-pdf",
                title: "Pourquoi Toujours Envoyer des PDF au Lieu de Fichiers Word",
                content: `Les fichiers Word sont modifiables et leur apparence peut changer selon la version d'Office utilisée par le destinataire, leur système d'exploitation ou leurs polices installées. Les PDF éliminent ces problèmes :
- **Verrouillage du Format** : Ce que vous voyez est exactement ce qu'ils voient. Aucun décalage de mise en page, aucune police manquante ou formatage cassé.
- **Accès Universel** : Tout le monde peut ouvrir un PDF sur n'importe quel appareil—Windows, Mac, Linux, iOS, Android—sans avoir besoin de Microsoft Office. Les lecteurs PDF gratuits sont intégrés aux navigateurs modernes.
- **Sécurité et Intégrité** : Il est beaucoup plus difficile pour quelqu'un de modifier accidentellement (ou intentionnellement) votre texte dans un PDF. Idéal pour les contrats, CV et documents officiels.
- **Apparence Professionnelle** : Les PDF sont la norme pour les communications d'affaires, les candidatures d'emploi et les soumissions formelles. Envoyer un fichier Word peut sembler non professionnel dans de nombreux contextes.
- **Contrôle de la Taille du Fichier** : Les PDF sont souvent plus petits que les documents Word, en particulier pour les fichiers riches en images, ce qui les rend plus faciles à envoyer par courriel et plus rapides à télécharger.
- **Cohérence d'Impression** : Les PDF garantissent que ce que vous voyez à l'écran est exactement ce qui s'imprime, évitant les décalages de mise en page frustrants lors de l'impression.`
            },
            {
                id: "local-first",
                title: "Conversion Locale : Meilleure pour Votre Confidentialité et Vitesse",
                content: `La plupart des convertisseurs sur le web sont "basés sur le cloud", ce qui signifie que votre document est téléchargé sur leurs serveurs, converti à distance et renvoyé. Notre outil fonctionne fondamentalement différemment. Il utilise le **traitement dans le navigateur** alimenté par des bibliothèques JavaScript modernes pour transformer votre fichier .docx en PDF directement sur votre appareil.

**Pourquoi C'est Important :**
- **Protection de la Confidentialité** : Vos documents confidentiels ne quittent jamais votre ordinateur. Aucun journal de serveur, aucune rétention de données, aucun accès tiers.
- **Traitement Plus Rapide** : Aucun temps d'attente de téléchargement/téléversement. La conversion se fait instantanément puisque tout est local.
- **Capable Hors Ligne** : Une fois chargé, notre outil peut fonctionner sans connexion Internet (bien que le chargement initial de la page nécessite Internet).
- **Aucune Limite de Taille de Fichier** : Les outils basés sur serveur limitent souvent les tailles de fichiers. Le nôtre n'est limité que par la mémoire de votre appareil.

**Idéal Pour les Documents Sensibles :**
- Contrats Juridiques et Accords de Confidentialité
- Dossiers Médicaux et Informations de Santé
- CV Confidentiels avec Détails Personnels
- États Financiers d'Entreprise
- Déclarations de Revenus et Soumissions à l'ARC
- Relevés de Notes Académiques et Lettres de Recommandation`
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants pour la Conversion Word en PDF",
                content: `**Candidatures d'Emploi** : Convertissez votre CV et lettre de motivation en PDF avant de les soumettre. Cela garantit que les responsables du recrutement voient votre document soigneusement formaté exactement comme prévu, quel que soit leur système ou logiciel.

**Propositions Clients** : Les propositions commerciales paraissent plus professionnelles et soignées au format PDF. Le format verrouillé empêche les modifications accidentelles et maintient votre image de marque.

**Soumissions Académiques** : De nombreuses universités exigent des soumissions en PDF pour les essais, thèses et mémoires. Les PDF préservent les citations, notes de bas de page et formatage complexe.

**Documents Juridiques et Contrats** : Les avocats et départements juridiques préfèrent universellement les PDF pour les accords, contrats et correspondance officielle en raison de leur immuabilité.

**Rapports Financiers** : Les rapports d'entreprise, factures et états financiers devraient être en PDF pour empêcher la falsification et garantir une visualisation cohérente.

**Formulaires Gouvernementaux** : Service Canada, l'ARC et les agences provinciales exigent souvent des téléchargements PDF pour les demandes, permis et documents officiels.

**Archivage et Dossiers** : Convertir les documents Word en PDF garantit la lisibilité à long terme, car le PDF est une norme ISO qui restera accessible pendant des décennies.`
            },
            {
                id: "best-practices",
                title: "Meilleures Pratiques pour la Conversion Word en PDF",
                content: `**Avant de Convertir :**
- Relisez votre document Word pour les erreurs—l'orthographe, la grammaire et les problèmes de formatage sont permanents une fois convertis.
- Assurez-vous que toutes les images sont de haute qualité et correctement positionnées.
- Vérifiez que les en-têtes, pieds de page et numéros de page apparaissent correctement.
- Vérifiez que les hyperliens fonctionnent et pointent vers les bonnes destinations.
- Supprimez le suivi des modifications, commentaires et métadonnées cachées que vous ne voulez pas dans le PDF final.

**Pour de Meilleurs Résultats :**
- Utilisez des polices standard (Arial, Times New Roman, Calibri) qui se convertissent de manière fiable. Les polices décoratives ou personnalisées peuvent ne pas s'intégrer correctement.
- Gardez le formatage simple—les mises en page complexes avec des zones de texte et des graphiques superposés peuvent parfois se déplacer lors de la conversion.
- Testez la conversion avec une page échantillon d'abord si votre document est très long ou complexe.

**Après la Conversion :**
- Ouvrez et examinez toujours le PDF résultant avant de le partager pour garantir la qualité.
- Vérifiez que les sauts de page se produisent aux endroits appropriés.
- Vérifiez que toutes les images, graphiques et tableaux se sont rendus correctement.
- Testez tous les hyperliens intégrés pour vous assurer qu'ils fonctionnent toujours.`
            },
            {
                id: "troubleshooting",
                title: "Dépannage des Problèmes de Conversion Courants",
                content: `**Problème : Les polices semblent différentes dans le PDF**
**Solution** : Le document Word peut utiliser des polices non disponibles dans le moteur de rendu PDF. Utilisez des polices système courantes, ou intégrez des polices personnalisées dans votre document Word avant de convertir.

**Problème : Les images apparaissent floues ou de mauvaise qualité**
**Solution** : Assurez-vous que les images de votre document Word sont en haute résolution. Si les images ont été compressées dans Word (Mode Compatibilité), enregistrez d'abord comme nouveau fichier .docx dans le format le plus récent.

**Problème : La mise en page a changé ou l'habillage du texte a changé**
**Solution** : Les mises en page complexes avec des objets flottants peuvent se déplacer. Essayez de simplifier la mise en page, ou utilisez le positionnement "Aligné sur le texte" pour les images au lieu de "Habillage du texte".

**Problème : La conversion échoue ou prend très longtemps**
**Solution** : Les fichiers très volumineux (50+ Mo) ou ceux avec des centaines d'images haute résolution peuvent submerger la mémoire du navigateur. Essayez de compresser les images dans Word d'abord, ou divisez en documents plus petits.

**Problème : Les hyperliens ne fonctionnent pas dans le PDF**
**Solution** : Assurez-vous que les hyperliens sont correctement formatés dans Word. Cliquez avec le bouton droit et vérifiez que l'adresse du lien est correcte avant de convertir.`
            }
        ],

        faq: [
            {
                q: "Cet outil de conversion est-il vraiment gratuit ?",
                a: "Oui ! Aucune limite, aucune carte de crédit, aucuns frais cachés. Juste un service canadien poli et courtois. Convertissez autant de documents que vous le souhaitez, quand vous le souhaitez."
            },
            {
                q: "Cela fonctionne-t-il sur les appareils mobiles ?",
                a: "Absolument. Vous pouvez convertir Word en PDF directement depuis votre navigateur iPhone ou Android, en sélectionnant des fichiers depuis votre stockage local, iCloud, Google Drive ou OneDrive. L'interface s'adapte aux écrans mobiles pour une utilisation facile en déplacement."
            },
            {
                q: "Puis-je convertir d'anciens fichiers .doc (pas .docx) ?",
                a: "Actuellement, nous nous concentrons sur le format moderne **.docx** (Word 2007 et plus récent). Si vous avez un ancien fichier .doc, nous recommandons de l'ouvrir dans Word, Google Docs ou LibreOffice et de l'enregistrer en .docx avant d'utiliser notre outil. Cela garantit également une meilleure compatibilité."
            },
            {
                q: "Mon formatage restera-t-il exactement le même ?",
                a: "Dans la plupart des cas, oui. Notre convertisseur préserve les polices, styles, images, tableaux, en-têtes, pieds de page et mise en page. Cependant, les documents très complexes avec des fonctionnalités avancées (objets intégrés, macros, polices personnalisées) peuvent nécessiter des ajustements mineurs. Examinez toujours le PDF avant de le partager."
            },
            {
                q: "La conversion préserve-t-elle les hyperliens et signets ?",
                a: "Oui ! Les hyperliens, table des matières et références croisées de votre document Word sont préservés comme liens cliquables dans le PDF résultant. Les signets et titres se convertissent également en signets PDF pour une navigation facile."
            },
            {
                q: "Quelle est la taille maximale de fichier que je peux convertir ?",
                a: "Puisque la conversion se fait localement dans votre navigateur, la limite dépend de la RAM de votre appareil. La plupart des ordinateurs modernes gèrent facilement des fichiers jusqu'à 50-100 Mo. Les téléphones peuvent avoir des limites inférieures. Les très gros documents peuvent prendre plus de temps à traiter."
            },
            {
                q: "Puis-je convertir des documents Word protégés par mot de passe ?",
                a: "Vous devrez d'abord retirer le mot de passe. Ouvrez le document dans Word, entrez le mot de passe, puis enregistrez une copie sans protection par mot de passe avant de convertir en PDF. Vous pouvez reprotéger le PDF par la suite si nécessaire."
            },
            {
                q: "Le PDF sera-t-il consultable et aura-t-il du texte sélectionnable ?",
                a: "Oui ! Le PDF contiendra du texte consultable et sélectionnable tout comme votre document Word original. C'est différent de scanner une impression—tout le texte reste du texte, pas des images."
            }
        ],

        ctaTitle: "Convertissez Votre Document Maintenant",
        ctaButton: "Commencer la Conversion Word en PDF",
        ctaSubtext: "100% Gratuit. Sécurisé. Local.",

        faqHeading: "Questions Courantes"
    }
});

export const WordToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/word-to-pdf"
                faqs={t.faq}
                lang={lang}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir Word en PDF gratuitement?" : "How do I convert Word to PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur Word en PDF de pdfcanada.ca. Téléchargez votre fichier .docx, notre moteur le convertit localement dans votre navigateur, puis téléchargez votre PDF professionnel. Vos documents ne quittent jamais votre appareil - idéal pour les CV, factures et documents juridiques."
                        : "Use pdfcanada.ca's Word to PDF converter. Upload your .docx file, our engine converts it locally in your browser, then download your professional PDF. Your documents never leave your device - ideal for resumes, invoices, and legal documents.",
                    tool: "Word to PDF Converter",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier Word (.docx)", "Conversion locale automatique", "Téléchargez votre PDF"]
                        : ["Upload your Word file (.docx)", "Automatic local conversion", "Download your PDF"]
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'Word to PDF', path: '/guides/word-to-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
                    { name: 'Word to PDF Guide', href: '#' }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={20} className="text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-canada-red rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-4xl font-black mb-6">{t.ctaTitle}</h2>
                        <p className="text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href="/${lang}/word-to-pdf"
                            className="bg-white text-canada-red px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir Word en PDF gratuitement?" : "How do I convert Word to PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur Word en PDF de pdfcanada.ca. Téléchargez votre fichier .docx, notre moteur le convertit localement dans votre navigateur, puis téléchargez votre PDF professionnel. Vos documents ne quittent jamais votre appareil - idéal pour les CV, factures et documents juridiques."
                            : "Use pdfcanada.ca's Word to PDF converter. Upload your .docx file, our engine converts it locally in your browser, then download your professional PDF. Your documents never leave your device - ideal for resumes, invoices, and legal documents."}
                        toolName="Word to PDF Converter"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier Word (.docx)", "Conversion locale automatique", "Téléchargez votre PDF"]
                            : ["Upload your Word file (.docx)", "Automatic local conversion", "Download your PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/word-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};


