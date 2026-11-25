export interface GuideMetadata {
    slug: string;
    titleEn: string;
    titleFr: string;
    titlePt?: string; // Optional: Portuguese title
    descEn: string;
    descFr: string;
    descPt?: string; // Optional: Portuguese description
    category: 'Privacy & Security' | 'Editing' | 'Conversion' | 'Advanced';
    icon: string;
}

export const ALL_GUIDES: GuideMetadata[] = [
    // Privacy & Security
    {
        slug: 'ultimate-pdf-guide',
        titleEn: 'Ultimate PDF Guide - Master all PDF Techniques | pdfcanada.ca',
        titleFr: 'Guide PDF Ultime - Maîtrisez toutes les techniques | pdfcanada.ca',
        descEn: 'Ultimate PDF Guide - Master document manipulation with our comprehensive manual. 100% private, local-first processing keeps your files safe. Read it now.',
        descFr: 'Guide PDF Ultime - Maîtrisez la manipulation de documents avec notre manuel complet. Traitement 100% local pour une sécurité totale. Lisez-le maintenant.',
        category: 'Privacy & Security',
        icon: '📚'
    },
    {
        slug: 'private-pdf-tools',
        titleEn: 'Private PDF Processing - Secure Online Tools | pdfcanada.ca',
        titleFr: 'Traitement PDF Privé - Outils en Ligne Sécurisés | pdfcanada.ca',
        descEn: 'Private PDF Processing - Learn why local browser tasks are the future of security. 100% private, local-first processing ensures data safety. Explore more.',
        descFr: 'Traitement PDF Privé - Découvrez pourquoi les tâches locales sont l\'avenir de la sécurité. Traitement 100% privé pour protéger vos données. En savoir plus.',
        category: 'Privacy & Security',
        icon: '🔒'
    },
    {
        slug: 'legal-pdf-tools',
        titleEn: 'Legal PDF Security - Secure Document Handling | pdfcanada.ca',
        titleFr: 'Sécurité PDF Juridique - Gestion des Documents | pdfcanada.ca',
        descEn: 'Legal PDF Security - Protect solicitor-client privilege with local tools. 100% private, local-first processing ensures your files stay safe. Try it for free.',
        descFr: 'Sécurité PDF Juridique - Protégez le secret professionnel avec des outils locaux. Traitement 100% local pour garantir la sécurité. Essai gratuit.',
        category: 'Privacy & Security',
        icon: '⚖️'
    },
    {
        slug: 'healthcare-pdf-security',
        titleEn: 'Healthcare PDF Compliance - Private Medical Docs | pdfcanada.ca',
        titleFr: 'Conformité PDF Santé - Documents Médicaux Privés | pdfcanada.ca',
        descEn: 'Healthcare PDF Compliance - HIPAA & PIPEDA tools for medical staff. 100% private, local-first processing keeps patient records secure. Try it now for free.',
        descFr: 'Conformité PDF Santé - Outils LPRPDE pour le personnel médical. Traitement 100% local pour sécuriser les dossiers patients. Essayez-le gratuitement.',
        category: 'Privacy & Security',
        icon: '🏥'
    },
    {
        slug: 'finance-pdf-security',
        titleEn: 'Finance PDF Security - Secure Tax & Bank Docs | pdfcanada.ca',
        titleFr: 'Sécurité PDF Finance - Documents Bancaires | pdfcanada.ca',
        descEn: 'Finance PDF Security - Process tax returns and bank statements safely. 100% private, local-first processing ensures your data stays safe. Start today.',
        descFr: 'Sécurité PDF Finance - Gérez vos déclarations fiscales et relevés bancaires. Traitement 100% local pour protéger vos données. Commencez aujourd\'hui.',
        category: 'Privacy & Security',
        icon: '💼'
    },

    {
        slug: 'pdf-accessibility-2026',
        titleEn: 'PDF Accessibility 2026 - WCAG 2.1 & ADA Compliance | pdfcanada.ca',
        titleFr: 'Accessibilité PDF 2026 - Conformité WCAG & ADA | pdfcanada.ca',
        descEn: 'PDF Accessibility 2026 - Master WCAG 2.1 Level AA and ADA Title II requirements. 100% private, local-first processing ensures compliance. Read our 2026 guide.',
        descFr: 'Accessibilité PDF 2026 - Maîtrisez les exigences WCAG 2.1 et ADA Title II. Traitement 100% local pour garantir la conformité. Lisez notre guide 2026.',
        category: 'Privacy & Security',
        icon: '♿'
    },
    // Editing
    {
        slug: 'merge-pdf',
        titleEn: 'Merge PDF Guide - Join Multiple Files Fast | pdfcanada.ca',
        titleFr: 'Guide Fusionner PDF - Joindre des Fichiers | pdfcanada.ca',
        titlePt: 'Guia Juntar PDF - Combinar Arquivos Rapidamente | pdfcanada.ca',
        descEn: 'Merge PDF Guide - Combine multiple documents into one unified file. 100% private, local-first processing ensures your files stay safe. Try it for free.',
        descFr: 'Guide Fusionner PDF - Combinez plusieurs documents en un seul fichier. Traitement 100% local pour garantir la sécurité des données. Essai gratuit.',
        descPt: 'Guia Juntar PDF - Combine vários documentos em um único arquivo. Processamento 100% local para garantir a segurança dos dados. Grátis e rápido.',
        category: 'Editing',
        icon: '🔗'
    },
    {
        slug: 'combine-pdf',
        titleEn: 'Combine PDF Files Guide - Simple File Joining | pdfcanada.ca',
        titleFr: 'Guide Combiner Fichiers PDF - Union de PDF | pdfcanada.ca',
        titlePt: 'Guia Combinar Arquivos PDF - Unir Documentos | pdfcanada.ca',
        descEn: 'Combine PDF Files Guide - Learn how to join documents into one unified file. 100% private, local-first processing ensures your data is safe. Try it now.',
        descFr: 'Guide Combiner Fichiers PDF - Apprenez à fusionner vos documents. Traitement 100% local pour garantir la confidentialité des données. Essayez-le.',
        descPt: 'Guia Combinar Arquivos PDF - Aprenda a unir seus documentos. Processamento 100% local para garantir a privacidade dos dados. Experimente agora.',
        category: 'Editing',
        icon: '🔗'
    },
    {
        slug: 'reduce-pdf-size',
        titleEn: 'Reduce PDF File Size Guide - Zip PDF Online | pdfcanada.ca',
        titleFr: 'Guide Réduire Taille PDF - Compresser en Ligne | pdfcanada.ca',
        titlePt: 'Guia Reduzir Tamanho PDF - Zipar PDF Grátis | pdfcanada.ca',
        descEn: 'Reduce PDF File Size Guide - Shrink documents for easy email and storage. 100% private, local-first processing keeps your files safe. Try it for free.',
        descFr: 'Guide Réduire Taille PDF - Allégez vos documents pour l\'envoi par mail. Traitement 100% local pour garantir la sécurité. Utilisez-le gratuitement.',
        descPt: 'Guia Reduzir Tamanho PDF - Diminua seus documentos para e-mail. Processamento 100% local para garantir a segurança. Use gratuitamente agora.',
        category: 'Editing',
        icon: '📉'
    },
    {
        slug: 'split-pdf',
        titleEn: 'Split PDF Guide - Extract Document Pages | pdfcanada.ca',
        titleFr: 'Guide Diviser PDF - Extraire des Pages | pdfcanada.ca',
        titlePt: 'Guia Dividir PDF - Extrair Páginas Online | pdfcanada.ca',
        descEn: 'Split PDF Guide - Extract specific pages or divide files into separate parts. 100% private, local-first processing ensures data safety. Try it for free.',
        descFr: 'Guide Diviser PDF - Extrayez des pages ou divisez vos fichiers. Traitement 100% local pour garantir la confidentialité des données. Essai gratuit.',
        descPt: 'Guia Dividir PDF - Extraia páginas ou divida seus arquivos. Processamento 100% local para garantir a privacidade dos dados. Grátis e rápido.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'compress-pdf',
        titleEn: 'Compress PDF Guide - Shrink Files Securely | pdfcanada.ca',
        titleFr: 'Guide Compresser PDF - Réduire sans Perte | pdfcanada.ca',
        titlePt: 'Guia Comprimir PDF - Reduzir sem Perder Qualidade | pdfcanada.ca',
        descEn: 'Compress PDF Guide - Reduce file size without losing document quality. 100% private, local-first processing ensures your files stay safe. Try it for free.',
        descFr: 'Guide Compresser PDF - Réduisez le poids de vos fichiers sans perte. Traitement 100% local pour garantir la sécurité. Utilisez-le gratuitement.',
        descPt: 'Guia Comprimir PDF - Reduza o tamanho dos seus arquivos sem perda. Processamento 100% local para garantir a segurança. Use grátis agora.',
        category: 'Editing',
        icon: '📦'
    },
    {
        slug: 'rotate-pdf',
        titleEn: 'Rotate PDF Guide - Change Page Orientation | pdfcanada.ca',
        titleFr: 'Guide Pivoter PDF - Changer l\'Orientation | pdfcanada.ca',
        titlePt: 'Guia Girar PDF - Mudar Orientação de Páginas | pdfcanada.ca',
        descEn: 'Rotate PDF Guide - Fix page orientation and save your documents correctly. 100% private, local-first processing keeps your files safe. Try it for free now.',
        descFr: 'Guide Pivoter PDF - Corrigez l\'orientation de vos pages facilement. Traitement 100% local pour une sécurité totale des données. Essayez-le gratuitement.',
        descPt: 'Guia Girar PDF - Corrija a orientação de suas páginas rapidamente. Processamento 100% local para segurança total dos dados. Experimente grátis agora.',
        category: 'Editing',
        icon: '🔄'
    },
    {
        slug: 'delete-pdf-pages',
        titleEn: 'Delete PDF Pages - Remove Unwanted Content | pdfcanada.ca',
        titleFr: 'Supprimer Pages PDF - Nettoyer vos Documents | pdfcanada.ca',
        titlePt: 'Excluir Páginas PDF - Remover Conteúdo Extra | pdfcanada.ca',
        descEn: 'Delete PDF Pages - Safely remove unwanted pages from any document. 100% private, local-first processing ensures your data stays safe. Try it for free today.',
        descFr: 'Supprimer Pages PDF - Retirez les pages inutiles en toute sécurité. Traitement 100% local pour protéger votre vie privée. Utilisez-le gratuitement.',
        descPt: 'Excluir Páginas PDF - Remova páginas indesejadas com segurança. Processamento 100% local para proteger sua privacidade. Use grátis hoje mesmo.',
        category: 'Editing',
        icon: '🗑️'
    },
    {
        slug: 'organize-pdf',
        titleEn: 'Organize PDF Guide - Reorder Document Pages | pdfcanada.ca',
        titleFr: 'Guide Organiser PDF - Trier les Pages | pdfcanada.ca',
        titlePt: 'Guia Organizar PDF - Reordenar Documentos | pdfcanada.ca',
        descEn: 'Organize PDF Guide - Reorder and manage pages within your documents easily. 100% private, local-first processing ensures your files stay safe. Try it now.',
        descFr: 'Guide Organiser PDF - Réorganisez et gérez vos pages facilement. Traitement 100% local pour garantir la sécurité des données. Essayez-le maintenant.',
        descPt: 'Guia Organizar PDF - Reordene e gerencie páginas com facilidade. Processamento 100% local para garantir a segurança dos dados. Experimente agora.',
        category: 'Editing',
        icon: '📋'
    },
    {
        slug: 'crop-pdf',
        titleEn: 'Crop PDF Guide - Trim Document Margins | pdfcanada.ca',
        titleFr: 'Guide Recadrer PDF - Ajuster les Marges | pdfcanada.ca',
        titlePt: 'Guia Cortar PDF - Ajustar Bordas Online | pdfcanada.ca',
        descEn: 'Crop PDF Guide - Trim margins and adjust page sizes visually. 100% private, local-first processing keeps your sensitive files safe. Try it for free today.',
        descFr: 'Guide Recadrer PDF - Ajustez les marges et la taille des pages. Traitement 100% local pour protéger vos fichiers sensibles. Utilisez-le gratuitement.',
        descPt: 'Guia Cortar PDF - Ajuste bordas e tamanhos de página visualmente. Processamento 100% local para proteger seus arquivos. Experimente grátis hoje.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'flatten-pdf',
        titleEn: 'Flatten PDF Guide - Secure Static Content | pdfcanada.ca',
        titleFr: 'Guide Aplatir PDF - Sécuriser les Contenus | pdfcanada.ca',
        titlePt: 'Guia Achatar PDF - Conteúdo Estático Seguro | pdfcanada.ca',
        descEn: 'Flatten PDF Guide - Convert interactive forms into secure static documents. 100% private, local-first processing ensures data safety. Start flattening now.',
        descFr: 'Guide Aplatir PDF - Sécurisez vos formulaires en contenu statique. Traitement 100% local pour garantir la confidentialité des données. Commencez ici.',
        descPt: 'Guia Achatar PDF - Proteja formulários como conteúdo estático. Processamento 100% local para garantir a segurança dos dados. Comece a achatar agora.',
        category: 'Editing',
        icon: '📄'
    },
    {
        slug: 'make-pdf-fillable',
        titleEn: 'Make PDF Fillable - Create Interactive Forms | pdfcanada.ca',
        titleFr: 'Rendre PDF Remplissable - Formulaires | pdfcanada.ca',
        titlePt: 'Tornar PDF Preenchível - Criar Formulários | pdfcanada.ca',
        descEn: 'Make PDF Fillable - Add interactive fields to any document easily. 100% private, local-first processing ensures your data stays safe. Try it for free now.',
        descFr: 'Rendre PDF Remplissable - Ajoutez des champs interactifs facilement. Traitement 100% local pour protéger vos données. Essayez-le gratuitement.',
        descPt: 'Tornar PDF Preenchível - Adicione campos interativos facilmente. Processamento 100% local para proteger seus dados. Experimente grátis agora.',
        category: 'Editing',
        icon: '📝'
    },
    {
        slug: 'edit-xfa-pdf',
        titleEn: 'XFA Form Cannot Be Edited? Open and Fill IRCC PDF Forms',
        titleFr: 'Formulaire XFA impossible à modifier : ouvrir un formulaire IRCC',
        descEn: 'XFA form shows “Please wait…” or cannot be edited in Acrobat? Open IRCC and other government forms in free Adobe Reader, not a browser, Preview or phone.',
        descFr: 'Formulaire XFA qui affiche « Please wait… » ou impossible à modifier? Ouvrez les formulaires d’IRCC dans Adobe Reader (gratuit), pas dans un navigateur.',
        category: 'Advanced',
        icon: '⚙️'
    },
    {
        slug: 'insert-picture-in-pdf',
        titleEn: 'Insert Picture Guide - Add Images to PDF | pdfcanada.ca',
        titleFr: 'Guide Insérer Image - Photos vers PDF | pdfcanada.ca',
        descEn: 'Insert Picture Guide - Add graphics and images to your documents safely. 100% private, local-first processing ensures your data is protected. Try it now.',
        descFr: 'Guide Insérer Image - Ajoutez des graphiques en toute sécurité. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        category: 'Editing',
        icon: '🖼️'
    },
    {
        slug: 'pdf-page-remover',
        titleEn: 'PDF Page Remover - Clean Documents Fast | pdfcanada.ca',
        titleFr: 'Suppresseur Pages PDF - Ménage Rapide | pdfcanada.ca',
        descEn: 'PDF Page Remover - Quickly delete individual pages from any file. 100% private, local-first processing keeps your documents safe. Use for free today.',
        descFr: 'Suppresseur Pages PDF - Effacez des pages rapidement. Traitement 100% local pour garantir la sécurité de vos documents. Utilisation gratuite.',
        category: 'Editing',
        icon: '🗑️'
    },

    // Conversion
    {
        slug: 'pdf-to-word',
        titleEn: 'PDF to Word Guide - Convert to Editable Docx | pdfcanada.ca',
        titleFr: 'Comment Convertir PDF en Word Gratuitement | pdfcanada.ca',
        titlePt: 'Como Converter PDF para Word Gratuitamente | pdfcanada.ca',
        descEn: 'PDF to Word Guide - Convert PDF documents to editable Word files easily. 100% private, local-first processing ensures your data stays safe. Try it for free.',
        descFr: 'Comment Convertir PDF en Word Gratuitement - Guide complet pour convertir vos fichiers sans effort. Traitement 100% local pour une sécurité totale. Essai.',
        descPt: 'Como Converter PDF para Word Gratuitamente - Guia completo para converter seus arquivos sem esforço. Processamento 100% local para segurança total. Teste.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'word-to-pdf',
        titleEn: 'Word to PDF Guide - Create High-Quality PDFs | pdfcanada.ca',
        titleFr: 'Comment Convertir Word en PDF Gratuitement | pdfcanada.ca',
        titlePt: 'Como Converter Word para PDF Gratuitamente | pdfcanada.ca',
        descEn: 'Word to PDF Guide - Convert any Word document into a high-quality PDF. 100% private, local-first processing ensures your files stay safe. Try it for free today.',
        descFr: 'Comment Convertir Word en PDF Gratuitement - Guide pour créer des PDF depuis Word. Traitement 100% local pour garantir la sécurité des données. Essai gratuit.',
        descPt: 'Como Converter Word para PDF Gratuitamente - Guia para criar PDFs a partir do Word. Processamento 100% local para garantir a segurança dos dados. Use grátis.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'heic-to-pdf',
        titleEn: 'HEIC to PDF Guide - Convert iPhone Photos | pdfcanada.ca',
        titleFr: 'Guide HEIC vers PDF - Photos iPhone | pdfcanada.ca',
        descEn: 'HEIC to PDF Guide - Convert iPhone HEIC photos to standard PDF format easily. 100% private, local-first processing ensures your photos stay safe. Try it now.',
        descFr: 'Guide HEIC vers PDF - Convertissez vos photos iPhone en PDF standard. Traitement 100% local pour garantir la confidentialité des photos. Essayez-le maintenant.',
        category: 'Conversion',
        icon: '📸'
    },
    {
        slug: 'pdf-to-epub',
        titleEn: 'PDF to EPUB Guide - Create eBooks for Kindle | pdfcanada.ca',
        titleFr: 'Guide PDF vers EPUB - Créer des eBooks | pdfcanada.ca',
        descEn: 'PDF to EPUB Guide - Convert PDF documents into eBook format for readers. 100% private, local-first processing ensures your data stays safe. Start converting.',
        descFr: 'Guide PDF vers EPUB - Convertissez vos PDF en format eBook pour liseuses. Traitement 100% local pour garantir la sécurité des données. Commencez ici.',
        category: 'Conversion',
        icon: '📚'
    },
    {
        slug: 'epub-to-pdf',
        titleEn: 'EPUB to PDF Guide - Convert eBooks to PDF | pdfcanada.ca',
        titleFr: 'Guide EPUB vers PDF - eBooks en PDF | pdfcanada.ca',
        descEn: 'EPUB to PDF Guide - Convert any eBook file into a standard PDF document. 100% private, local-first processing ensures your files stay safe. Try it for free.',
        descFr: 'Guide EPUB vers PDF - Convertissez vos fichiers eBook en PDF standard. Traitement 100% local pour garantir la sécurité des données. Utilisez-le gratuitement.',
        category: 'Conversion',
        icon: '📖'
    },
    {
        slug: 'cbr-to-pdf',
        titleEn: 'CBR to PDF Guide - Comic Book Converter | pdfcanada.ca',
        titleFr: 'Guide CBR vers PDF - BD en PDF | pdfcanada.ca',
        descEn: 'CBR to PDF Guide - Convert comic book archives into readable PDF documents. 100% private, local-first processing keeps your files safe. Start converting now.',
        descFr: 'Guide CBR vers PDF - Convertissez vos archives de BD en documents PDF. Traitement 100% local pour garantir la sécurité des données. Convertissez maintenant.',
        category: 'Conversion',
        icon: '📚'
    },
    {
        slug: 'email-to-pdf',
        titleEn: 'Email to PDF Guide - Save Emails Securely | pdfcanada.ca',
        titleFr: 'Guide Email vers PDF - Emails en Dossiers | pdfcanada.ca',
        descEn: 'Email to PDF Guide - Save and archive emails as secure PDF documents easily. 100% private, local-first processing ensures data safety. Try it for free now.',
        descFr: 'Guide Email vers PDF - Sauvegardez et archivez vos emails en toute sécurité. Traitement 100% local pour garantir la protection des données. Essai gratuit.',
        category: 'Conversion',
        icon: '📧'
    },
    {
        slug: 'rtf-to-pdf',
        titleEn: 'RTF to PDF Guide - Rich Text to PDF | pdfcanada.ca',
        titleFr: 'Guide RTF vers PDF - Texte Riche en PDF | pdfcanada.ca',
        descEn: 'RTF to PDF Guide - Convert Rich Text Format documents into standard PDFs. 100% private, local-first processing ensures your data stays safe. Try it for free.',
        descFr: 'Guide RTF vers PDF - Convertissez vos fichiers texte riche en PDF standard. Traitement 100% local pour garantir la sécurité des données. Utilisez-le gratuitement.',
        category: 'Conversion',
        icon: '📄'
    },

    // Advanced
    {
        slug: 'invoice-ocr',
        titleEn: 'Invoice OCR Guide - Extract Data from Bills | pdfcanada.ca',
        titleFr: 'Guide OCR Facture - Extraire des Données | pdfcanada.ca',
        descEn: 'Invoice OCR Guide - Extract text and automated data from invoice PDFs safely. 100% private, local-first processing keeps your finances safe. Start analyzing.',
        descFr: 'Guide OCR Facture - Extrayez les données de vos factures en toute sécurité. Traitement 100% local pour garantir la protection financière. Commencez ici.',
        category: 'Advanced',
        icon: '🧾'
    },
    {
        slug: 'trim-pdf',
        titleEn: 'Trim PDF Margins - Remove White Space Securely | pdfcanada.ca',
        titleFr: 'Rogner les Marges PDF - Supprimer le Vide | pdfcanada.ca',
        descEn: 'Trim PDF Margins - Permanently remove excess white space from your documents. 100% private, local-first processing ensures your data stays safe. Try it for free.',
        descFr: 'Rogner les Marges PDF - Supprimez l\'espace blanc de vos documents de façon permanente. Traitement 100% local pour garantir la sécurité. Essai gratuit.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'pdf-to-ubl',
        titleEn: 'PDF to UBL Converter - Free E-Invoice Tool | pdfcanada.ca',
        titleFr: 'Convertisseur PDF vers UBL - Facture Électronique | pdfcanada.ca',
        descEn: 'PDF to UBL Converter - Create UBL 2.1 XML e-invoices from any PDF bill for free. 100% private, local-first processing keeps finances safe. Start converting now.',
        descFr: 'Convertisseur PDF vers UBL - Créez des factures XML UBL 2.1 gratuitement. Traitement 100% local pour garantir la sécurité financière. Commencez maintenant.',
        category: 'Advanced',
        icon: '🧾'
    },
    {
        slug: 'gif-to-pdf',
        titleEn: 'GIF to PDF - Convert Animated Images | pdfcanada.ca',
        titleFr: 'GIF en PDF - Conversion d\'Images Animées | pdfcanada.ca',
        descEn: 'GIF to PDF - Convert your GIF images into standard PDF documents easily. 100% private, local-first processing ensures your photos stay safe. Try it for free now.',
        descFr: 'GIF en PDF - Convertissez vos images GIF en documents PDF standard. Traitement 100% local pour garantir la protection des images. Essayez-le gratuitement.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'aspx-to-pdf',
        titleEn: 'ASPX to PDF - Convert Web Forms to PDF | pdfcanada.ca',
        titleFr: 'ASPX en PDF - Conversion de Fichiers Code | pdfcanada.ca',
        descEn: 'ASPX to PDF - Securely convert ASPX source code and web forms to PDF. 100% private, local-first processing ensures your data stays safe. Try it for free today.',
        descFr: 'ASPX en PDF - Convertissez le code source ASPX en document PDF. Traitement 100% local pour garantir la sécurité totale des données. Essai gratuit.',
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'acsm-to-pdf',
        titleEn: 'ACSM to PDF: Open the eBook in Adobe Digital Editions (Free)',
        titleFr: 'ACSM en PDF : ouvrir le livre avec Adobe Digital Editions',
        descEn: 'An .acsm file is a download ticket, not the book. Open it in free Adobe Digital Editions with your Adobe ID to get the PDF or EPUB. No converter can do it.',
        descFr: 'Un fichier .acsm est un bon de téléchargement, pas le livre. Ouvrez-le dans Adobe Digital Editions (gratuit) pour obtenir le PDF ou l’EPUB. Aucun convertisseur ne le peut.',
        category: 'Conversion',
        icon: '🔑'
    },
    {
        slug: 'php-to-pdf',
        titleEn: 'PHP to PDF - Convert Source Code to PDF | pdfcanada.ca',
        titleFr: 'PHP en PDF - Code Source vers PDF | pdfcanada.ca',
        descEn: 'PHP to PDF - Convert PHP code files into professional PDF documents. 100% private, local-first processing ensures your source code is safe. Try it for free.',
        descFr: 'PHP en PDF - Transformez vos fichiers code PHP en documents PDF. Traitement 100% local pour garantir la sécurité du code source. Utilisez-le gratuitement.',
        category: 'Conversion',
        icon: '🐘'
    },
    {
        slug: 'pdf-to-word-online',
        titleEn: 'PDF to Word Online - Free Browser Converter | pdfcanada.ca',
        titleFr: 'Convertisseur PDF en Word en Ligne | pdfcanada.ca',
        descEn: 'PDF to Word Online - Convert documents in your browser without software. 100% private, local-first processing keeps your data safe. Try it for free now.',
        descFr: 'Convertisseur PDF en Word en Ligne - Changez vos fichiers sans logiciel. Traitement 100% local pour garantir la protection des données. Essayez-le gratuitement.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'compress-pdf-online',
        titleEn: 'Compress PDF Online - Tiny PDF Files | pdfcanada.ca',
        titleFr: 'Compresser PDF en Ligne - Fichiers Compacts | pdfcanada.ca',
        descEn: 'Compress PDF Online - Reduce file size without quality loss in your browser. 100% private, local-first processing ensures data safety. Try it for free today.',
        descFr: 'Compresser PDF en Ligne - Allégez vos fichiers sans perte de qualité. Traitement 100% local pour garantir la sécurité. Utilisez-le gratuitement aujourd\'hui.',
        category: 'Editing',
        icon: '📦'
    },
    {
        slug: 'merge-pdf-online',
        titleEn: 'Merge PDF Online - Combine Documents Fast | pdfcanada.ca',
        titleFr: 'Fusionner PDF en Ligne - Joindre des Fichiers | pdfcanada.ca',
        descEn: 'Merge PDF Online - Join multiple files into one PDF instantly in your browser. 100% private, local-first processing ensures your data stays safe. Try it for free.',
        descFr: 'Fusionner PDF en Ligne - Joignez vos fichiers instantanément. Traitement 100% local pour garantir la sécurité totale des données. Essayez-le gratuitement.',
        category: 'Editing',
        icon: '🔗'
    },
    // Hub Pages
    {
        slug: 'pdf-conversions',
        titleEn: 'PDF Conversion Hub - All Format Converters | pdfcanada.ca',
        titleFr: 'Hub de Conversion PDF - Tous les Formats | pdfcanada.ca',
        descEn: 'PDF Conversion Hub - Access all tools for Word, Excel, Images, and more. 100% private, local-first processing ensures your files stay safe. Start converting now.',
        descFr: 'Hub de Conversion PDF - Accédez à tous les outils pour Word, Excel et Images. Traitement 100% local pour garantir la sécurité. Commencez à convertir ici.',
        category: 'Conversion',
        icon: '🔄'
    },
    {
        slug: 'pdf-editing',
        titleEn: 'PDF Editing Hub - Master Document Editing | pdfcanada.ca',
        titleFr: 'Hub d\'Édition PDF - Maîtrisez l\'Édition | pdfcanada.ca',
        descEn: 'PDF Editing Hub - Learn how to merge, split, compress, and organize documents. 100% private, local-first processing keeps your data safe. Start editing now.',
        descFr: 'Hub d\'Édition PDF - Apprenez à fusionner, diviser et compresser vos docs. Traitement 100% local pour garantir la protection des données. Commencez ici.',
        category: 'Editing',
        icon: '✏️'
    },
    {
        slug: 'pdf-security',
        titleEn: 'PDF Security Hub - Protect Your Documents | pdfcanada.ca',
        titleFr: 'Hub de Sécurité PDF - Protéger vos Docs | pdfcanada.ca',
        descEn: 'PDF Security Hub - Learn about encryption, redaction, and compliance standards. 100% private, local-first processing ensures your files stay safe. Stay secure.',
        descFr: 'Hub de Sécurité PDF - Protection, chiffrement et normes de conformité. Traitement 100% local pour garantir la sécurité totale. Restez protégé.',
        category: 'Privacy & Security',
        icon: '🛡️'
    },
    {
        slug: 'pdf-ocr-analysis',
        titleEn: 'PDF OCR & Analysis - Extract Advanced Data | pdfcanada.ca',
        titleFr: 'OCR & Analyse PDF - Extraction de Données | pdfcanada.ca',
        descEn: 'PDF OCR & Analysis - Analyze structures and OCR scanned documents safely. 100% private, local-first processing ensures your data is protected. Start analyzing.',
        descFr: 'OCR & Analyse PDF - Analysez la structure et OCRisez vos documents scannés. Traitement 100% local pour garantir la sécurité totale. Commencez ici.',
        category: 'Advanced',
        icon: '🔍'
    },
    // Long-Tail Conversion
    {
        slug: 'pdf-to-word-offline',
        titleEn: 'PDF to Word Offline - Non-Internet Conversion | pdfcanada.ca',
        titleFr: 'PDF en Word Hors Ligne - Sans Internet | pdfcanada.ca',
        descEn: 'PDF to Word Offline - Convert documents locally in your browser without internet. 100% private, local-first processing keeps your files safe. Try it for free.',
        descFr: 'PDF en Word Hors Ligne - Convertissez vos documents localement sans connexion. Traitement 100% local pour garantir la sécurité totale. Essai gratuit.',
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'pdf-to-word-formatting',
        titleEn: 'PDF to Word Formatting - Preserve Layouts | pdfcanada.ca',
        titleFr: 'Formatage PDF en Word - Mise en Page | pdfcanada.ca',
        descEn: 'PDF to Word Formatting - Keep original fonts and layouts during conversion. 100% private, local-first processing ensures your files stay safe. Try it for free.',
        descFr: 'Formatage PDF en Word - Gardez vos polices et mises en page d\'origine. Traitement 100% local pour garantir la protection des données. Utilisez-le ici.',
        category: 'Conversion',
        icon: '🎨'
    },
    {
        slug: 'pdf-to-word-scanned',
        titleEn: 'Convert Scanned PDF to Word - Searchable Docx | pdfcanada.ca',
        titleFr: 'Convertir PDF Scanné en Word - OCR Docx | pdfcanada.ca',
        descEn: 'Convert Scanned PDF to Word - Use OCR to transform images into editable text. 100% private, local-first processing ensures data safety. Start converting now.',
        descFr: 'Convertir PDF Scanné en Word - Utilisez l\'OCR pour transformer vos images. Traitement 100% local pour garantir la sécurité des données. Commencez maintenant.',
        category: 'Conversion',
        icon: '📷'
    },
    {
        slug: 'pdf-to-excel',
        titleEn: 'PDF to Excel Guide - Extract Spreadsheet Data | pdfcanada.ca',
        titleFr: 'Guide PDF vers Excel - Données en Tableaux | pdfcanada.ca',
        descEn: 'PDF to Excel Guide - Extract tables and spreadsheet data from your PDFs safely. 100% private, local-first processing ensures your data stays safe. Try it now.',
        descFr: 'Guide PDF vers Excel - Extrayez vos tableaux et données en toute sécurité. Traitement 100% local pour garantir la protection des données. Essayez-le ici.',
        category: 'Conversion',
        icon: '📊'
    },
    {
        slug: 'pdf-to-csv',
        titleEn: 'PDF to CSV Guide - Comma Separated Values | pdfcanada.ca',
        titleFr: 'Guide PDF vers CSV - Valeurs Séparées | pdfcanada.ca',
        descEn: 'PDF to CSV Guide - Convert document tables into easy-to-use CSV files. 100% private, local-first processing ensures your data stays safe. Try it for free now.',
        descFr: 'Guide PDF vers CSV - Convertissez vos tableaux en fichiers CSV exploitables. Traitement 100% local pour garantir la protection des données. Essai gratuit.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'pdf-to-xml',
        titleEn: 'PDF to XML Guide - Structured Data Extraction | pdfcanada.ca',
        titleFr: 'Guide PDF vers XML - Données Structurées | pdfcanada.ca',
        descEn: 'PDF to XML Guide - Extract structured data from your documents into XML format. 100% private, local-first processing ensures data safety. Start extracting now.',
        descFr: 'Guide PDF vers XML - Extrayez vos données structurées en format XML. Traitement 100% local pour garantir la sécurité totale des données. Commencez ici.',
        category: 'Conversion',
        icon: '💾'
    },
    {
        slug: 'pdf-to-kindle',
        titleEn: 'PDF to Kindle Guide - Optimize for eBook Readers | pdfcanada.ca',
        titleFr: 'Guide PDF vers Kindle - Lecture Mobile | pdfcanada.ca',
        descEn: 'PDF to Kindle Guide - Optimize your documents for a perfect reading experience on Kindle. 100% private, local-first processing ensures safety. Try it for free.',
        descFr: 'Guide PDF vers Kindle - Optimisez vos documents pour les liseuses Amazon. Traitement 100% local pour garantir la sécurité des données. Utilisez-le ici.',
        category: 'Conversion',
        icon: '📱'
    },
    // Long-Tail Editing
    {
        slug: 'split-pdf-online',
        titleEn: 'Split PDF Online - Divide Large Documents | pdfcanada.ca',
        titleFr: 'Diviser PDF en Ligne - Séperer les Pages | pdfcanada.ca',
        descEn: 'Split PDF Online - Divide large files into smaller parts directly in your browser. 100% private, local-first processing keeps your files safe. Try it for free.',
        descFr: 'Diviser PDF en Ligne - Séparez vos gros fichiers directement dans le navigateur. Traitement 100% local pour garantir la sécurité. Essayez-le gratuitement.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'merge-large-pdfs',
        titleEn: 'Merge Large PDFs - Unlimited File Size Joining | pdfcanada.ca',
        titleFr: 'Fusionner Gros PDF - Sans Limite de Taille | pdfcanada.ca',
        descEn: 'Merge Large PDFs - Combine massive documents without any file size restrictions. 100% private, local-first processing ensures your data stays safe. Try it now.',
        descFr: 'Fusionner Gros PDF - Joignez des documents volumineux sans limites. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        category: 'Editing',
        icon: '🐘'
    },
    {
        slug: 'compress-pdf-no-quality-loss',
        titleEn: 'Compress PDF No Quality Loss - Sharp Documents | pdfcanada.ca',
        titleFr: 'Compresser PDF Sans Perte - Images Nettes | pdfcanada.ca',
        descEn: 'Compress PDF No Quality Loss - Shrink files while keeping all images perfectly sharp. 100% private, local-first processing ensures data safety. Try it for free.',
        descFr: 'Compresser PDF Sans Perte - Allégez vos fichiers en gardant une qualité pro. Traitement 100% local pour garantir la sécurité. Utilisez-le gratuitement.',
        category: 'Editing',
        icon: '💎'
    },
    {
        slug: 'sign-pdf',
        titleEn: 'Sign PDF Online - Add Electronic Signatures | pdfcanada.ca',
        titleFr: 'Signer PDF en Ligne - Signatures Numériques | pdfcanada.ca',
        descEn: 'Sign PDF Online - Add secure electronic signatures to your contracts instantly. 100% private, local-first processing ensures your documents stay safe. Try now.',
        descFr: 'Signer PDF en Ligne - Ajoutez vos signatures en toute sécurité. Traitement 100% local pour garantir la protection des données. Essayez maintenant.',
        category: 'Editing',
        icon: '✍️'
    },
    // Long-Tail Advanced
    {
        slug: 'analyze-pdf',
        titleEn: 'Analyze PDF Structure - Inspect Document Data | pdfcanada.ca',
        titleFr: 'Analyser Structure PDF - Inspecteur de Données | pdfcanada.ca',
        descEn: 'Analyze PDF Structure - Inspect internal objects, fonts, and hidden metadata safely. 100% private, local-first processing ensures your data stays safe. Try it.',
        descFr: 'Analyser Structure PDF - Inspectez les objets internes et les polices en sécurité. Traitement 100% local pour garantir la sécurité des données. Essayez-le.',
        category: 'Advanced',
        icon: '🔬'
    },
    {
        slug: 'barcode-generator',
        titleEn: 'PDF Barcode Generator - Create QR Codes Online | pdfcanada.ca',
        titleFr: 'Générateur Code-barres PDF - QR Codes en Ligne | pdfcanada.ca',
        descEn: 'PDF Barcode Generator - Create barcodes and QR codes for your documents instantly. 100% private, local-first processing ensures your data stays safe. Try it now.',
        descFr: 'Générateur Code-barres PDF - Créez des codes-barres et des QR codes instantanément. Traitement 100% local pour garantir la sécurité. Essayez-le maintenant.',
        category: 'Advanced',
        icon: '🏷️'
    },
    {
        slug: 'xrechnung-viewer',
        titleEn: 'XRechnung Viewer - Validate E-Invoice Data | pdfcanada.ca',
        titleFr: 'Visualiseur XRechnung - Valider les Factures | pdfcanada.ca',
        descEn: 'XRechnung Viewer - View and validate German e-invoice standards securely in your browser. 100% private, local-first processing ensures data safety. Try it now.',
        descFr: 'Visualiseur XRechnung - Affichez et validez les factures électroniques allemandes en sécurité. Traitement 100% local pour garantir la confidentialité. Essai.',
        category: 'Advanced',
        icon: '🇩🇪'
    },
    // New Guides - Image Tools
    {
        slug: 'image-to-pdf',
        titleEn: 'Image to PDF Guide - Convert Photos to PDF | pdfcanada.ca',
        titleFr: 'Guide Image vers PDF - Photos vers Document | pdfcanada.ca',
        titlePt: 'Guia Imagem para PDF - Converter Fotos Online | pdfcanada.ca',
        descEn: 'Image to PDF Guide - Convert JPG, PNG, and other images to PDF format easily. 100% private, local-first processing ensures your photos stay safe. Try it for free.',
        descFr: 'Guide Image vers PDF - Convertissez vos photos JPG et PNG en PDF facilement. Traitement 100% local pour garantir la sécurité des photos. Utilisez-le gratuitement.',
        descPt: 'Guia Imagem para PDF - Converta fotos JPG e PNG para PDF com facilidade. Processamento 100% local para garantir a segurança das fotos. Use grátis agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'jpg-to-pdf',
        titleEn: 'JPG to PDF Guide - Professional Case Conversion | pdfcanada.ca',
        titleFr: 'Guide JPG vers PDF - Conversion Professionnelle | pdfcanada.ca',
        titlePt: 'Guia JPG para PDF - Converter JPG Online | pdfcanada.ca',
        descEn: 'JPG to PDF Guide - Convert high-resolution JPG images to secure PDF documents. 100% private, local-first processing ensures data safety. Try it now for free.',
        descFr: 'Guide JPG vers PDF - Convertissez vos images JPG en documents PDF sécurisés. Traitement 100% local pour garantir la sécurité des données. Essayez-le gratuitement.',
        descPt: 'Guia JPG para PDF - Converta imagens JPG em documentos PDF com segurança. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'jpeg-to-pdf',
        titleEn: 'JPEG to PDF Guide - Fast Photo Conversion | pdfcanada.ca',
        titleFr: 'Guide JPEG vers PDF - Conversion de Photos | pdfcanada.ca',
        titlePt: 'Guia JPEG para PDF - Converter JPEG Online | pdfcanada.ca',
        descEn: 'JPEG to PDF Guide - Turn your JPEG photos into high-quality PDF files instantly. 100% private, local-first processing keeps your photos safe. Try it for free now.',
        descFr: 'Guide JPEG vers PDF - Transformez vos photos JPEG en fichiers PDF haute qualité. Traitement 100% local pour garantir la protection des photos. Essai gratuit.',
        descPt: 'Guia JPEG para PDF - Transforme suas fotos JPEG em arquivos PDF de alta qualidade. Processamento 100% local para garantir a segurança. Experimente grátis.',
        category: 'Conversion',
        icon: '📷'
    },
    {
        slug: 'png-to-pdf',
        titleEn: 'PNG to PDF Guide - Transparent Photo Converter | pdfcanada.ca',
        titleFr: 'Guide PNG vers PDF - Images avec Transparence | pdfcanada.ca',
        titlePt: 'Guia PNG para PDF - Converter PNG Online | pdfcanada.ca',
        descEn: 'PNG to PDF Guide - Convert transparent PNG images into standard PDF documents easily. 100% private, local-first processing ensures data safety. Try it for free.',
        descFr: 'Guide PNG vers PDF - Convertissez vos images PNG en documents PDF standard. Traitement 100% local pour garantir la sécurité des données. Essai gratuit.',
        descPt: 'Guia PNG para PDF - Converta imagens PNG em documentos PDF com facilidade. Processamento 100% local para garantir a segurança dos dados. Use grátis agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-image',
        titleEn: 'PDF to Image Guide - Save Pages as Pictures | pdfcanada.ca',
        titleFr: 'Guide PDF vers Image - Extraire des Photos | pdfcanada.ca',
        titlePt: 'Guia PDF para Imagem - Converter Páginas | pdfcanada.ca',
        descEn: 'PDF to Image Guide - Save document pages as standard image files (JPG/PNG). 100% private, local-first processing ensures your data stays safe. Try it for free.',
        descFr: 'Guide PDF vers Image - Enregistrez vos pages PDF sous forme d\'images standard. Traitement 100% local pour garantir la sécurité des données. Essai gratuit.',
        descPt: 'Guia PDF para Imagem - Salve as páginas do PDF como arquivos de imagem padrão. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-jpg',
        titleEn: 'PDF to JPG Guide - Export Pages to JPG | pdfcanada.ca',
        titleFr: 'Guide PDF vers JPG - Conversion d\'Images | pdfcanada.ca',
        titlePt: 'Guia PDF para JPG - Converter Páginas Online | pdfcanada.ca',
        descEn: 'PDF to JPG Guide - Export document pages as standard high-quality JPG images. 100% private, local-first processing ensures your data stays safe. Try it now.',
        descFr: 'Guide PDF vers JPG - Exportez vos pages PDF en images JPG haute qualité. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        descPt: 'Guia PDF para JPG - Exporte páginas PDF como imagens JPG de alta qualidade. Processamento 100% local para garantir a proteção dos dados. Experimente agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-png',
        titleEn: 'PDF to PNG Guide - High-Quality Extraction | pdfcanada.ca',
        titleFr: 'Guide PDF vers PNG - Images Transparentes | pdfcanada.ca',
        titlePt: 'Guia PDF para PNG - Extração de Imagens | pdfcanada.ca',
        descEn: 'PDF to PNG Guide - Extract high-quality PNG images from any PDF document easily. 100% private, local-first processing ensures your data stays safe. Try it now.',
        descFr: 'Guide PDF vers PNG - Extrayez des images PNG haute qualité de vos PDF. Traitement 100% local pour garantir la sécurité totale des données. Essayez-le maintenant.',
        descPt: 'Guia PDF para PNG - Extraia imagens PNG de alta qualidade de seus PDFs. Processamento 100% local para garantir a segurança total dos dados. Experimente agora.',
        category: 'Conversion',
        icon: '🖼️'
    },
    // New Guides - Office Tools
    {
        slug: 'excel-to-pdf',
        titleEn: 'Excel to PDF Guide - Fast Spreadsheet Conversion | pdfcanada.ca',
        titleFr: 'Guide Excel vers PDF - Tableaux en PDF | pdfcanada.ca',
        titlePt: 'Guia Excel para PDF - Planilhas Online | pdfcanada.ca',
        descEn: 'Excel to PDF Guide - Convert spreadsheets to professional PDF documents in your browser. 100% private, local-first processing ensures data safety. Try it now.',
        descFr: 'Guide Excel vers PDF - Convertissez vos feuilles de calcul en PDF facilement. Traitement 100% local pour garantir la sécurité des données. Essayez-le ici.',
        descPt: 'Guia Excel para PDF - Converta planilhas em documentos PDF com facilidade. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '📊'
    },
    {
        slug: 'ppt-to-pdf',
        titleEn: 'PPT to PDF Guide - Convert Presentation Slides | pdfcanada.ca',
        titleFr: 'Guide PPT vers PDF - Présentations en PDF | pdfcanada.ca',
        titlePt: 'Guia PPT para PDF - Slides em PDF Online | pdfcanada.ca',
        descEn: 'PPT to PDF Guide - Turn PowerPoint presentations into high-quality PDF slides instantly. 100% private, local-first processing ensures your data stays safe. Try.',
        descFr: 'Guide PPT vers PDF - Transformez vos présentations en diapositives PDF. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        descPt: 'Guia PPT para PDF - Transforme apresentações em slides PDF de alta qualidade. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '📽️'
    },
    {
        slug: 'pdf-to-ppt',
        titleEn: 'PDF to PPT Guide - Editable Presentation Online | pdfcanada.ca',
        titleFr: 'Guide PDF vers PPT - Diapositives Modifiables | pdfcanada.ca',
        titlePt: 'Guia PDF para PPT - Slides Powerpoint | pdfcanada.ca',
        descEn: 'PDF to PPT Guide - Convert any PDF document into editable PowerPoint slides safely. 100% private, local-first processing ensures your data stays safe. Try now.',
        descFr: 'Guide PDF vers PPT - Convertissez tout PDF en diapositives modifiables. Traitement 100% local pour garantir la sécurité des données. Essayez-le maintenant.',
        descPt: 'Guia PDF para PPT - Converta qualquer PDF em slides editáveis do Powerpoint. Processamento 100% local para garantir a segurança dos dados. Experimente agora.',
        category: 'Conversion',
        icon: '📽️'
    },
    {
        slug: 'odt-to-pdf',
        titleEn: 'ODT to PDF Guide - OpenOffice to PDF Online | pdfcanada.ca',
        titleFr: 'Guide ODT vers PDF - OpenDocument en PDF | pdfcanada.ca',
        titlePt: 'Guia ODT para PDF - Texto OpenOffice | pdfcanada.ca',
        descEn: 'ODT to PDF Guide - Convert OpenDocument Text files into professional PDFs easily. 100% private, local-first processing ensures your files stay safe. Try now.',
        descFr: 'Guide ODT vers PDF - Convertissez vos fichiers OpenDocument en PDF. Traitement 100% local pour garantir la sécurité des données. Essayez-le maintenant.',
        descPt: 'Guia ODT para PDF - Converta arquivos OpenDocument para PDF com facilidade. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'pages-to-pdf',
        titleEn: 'Pages to PDF Guide - Apple Docs to PDF Online | pdfcanada.ca',
        titleFr: 'Guide Pages vers PDF - Docs Apple en PDF | pdfcanada.ca',
        titlePt: 'Guia Pages para PDF - Documentos Apple | pdfcanada.ca',
        descEn: 'Pages to PDF Guide - Convert Apple Pages documents into standard PDF files easily. 100% private, local-first processing ensures your data stays safe. Try now.',
        descFr: 'Guide Pages vers PDF - Convertissez vos documents Apple Pages en PDF. Traitement 100% local pour garantir la sécurité des données. Essayez-le maintenant.',
        descPt: 'Guia Pages para PDF - Converta documentos Apple Pages para PDF com facilidade. Processamento 100% local para garantir a segurança dos dados. Grátis agora.',
        category: 'Conversion',
        icon: '🍎'
    },
    {
        slug: 'html-to-pdf',
        titleEn: 'HTML to PDF Guide - Web Code to PDF Online | pdfcanada.ca',
        titleFr: 'Guide HTML vers PDF - Code Web en PDF | pdfcanada.ca',
        titlePt: 'Guia HTML para PDF - Código Web Online | pdfcanada.ca',
        descEn: 'HTML to PDF Guide - Save HTML code and web files as high-quality PDFs safely. 100% private, local-first processing ensures your data is protected. Try now.',
        descFr: 'Guide HTML vers PDF - Enregistrez vos codes HTML en PDF haute qualité. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        descPt: 'Guia HTML para PDF - Salve código HTML e arquivos web como PDFs com segurança. Processamento 100% local para proteger seus dados. Experimente agora.',
        category: 'Conversion',
        icon: '🌐'
    },
    // New Guides - Utility
    {
        slug: 'extract-pdf-pages',
        titleEn: 'Extract PDF Pages Guide - Pick Document Pages | pdfcanada.ca',
        titleFr: 'Guide Extraire Pages PDF - Sélection | pdfcanada.ca',
        titlePt: 'Guia Extrair Páginas PDF - Escolher Páginas | pdfcanada.ca',
        descEn: 'Extract PDF Pages Guide - Create new documents from selected pages of any file. 100% private, local-first processing ensures your data stays safe. Try now.',
        descFr: 'Guide Extraire Pages PDF - Créez de nouveaux docs à partir de vos pages. Traitement 100% local pour garantir la sécurité des données. Essayez-le maintenant.',
        descPt: 'Guia Extrair Páginas PDF - Crie novos documentos das páginas selecionadas. Processamento 100% local para garantir a segurança dos dados. Experimente agora.',
        category: 'Editing',
        icon: '📄'
    },
    {
        slug: 'xml-to-pdf',
        titleEn: 'XML to PDF Guide - Visualize Data Documents | pdfcanada.ca',
        titleFr: 'Guide XML vers PDF - Visualiser les Données | pdfcanada.ca',
        titlePt: 'Guia XML para PDF - Visualizar Documentos | pdfcanada.ca',
        descEn: 'XML to PDF Guide - Transform your XML data into readable PDF documents safely. 100% private, local-first processing ensures your data stays safe. Try now.',
        descFr: 'Guide XML vers PDF - Transformez vos données XML en documents PDF. Traitement 100% local pour garantir la protection des données. Essayez-le maintenant.',
        descPt: 'Guia XML para PDF - Transforme seus dados XML em documentos PDF legíveis. Processamento 100% local para garantir a segurança dos dados. Experimente agora.',
        category: 'Conversion',
        icon: '⚙️'
    },
    {
        slug: 'avif-to-pdf',
        titleEn: "AVIF to PDF Guide - Modern Image Conversion | pdfcanada.ca",
        titleFr: "Guide AVIF vers PDF - Conversion d'Images | pdfcanada.ca",
        titlePt: "Guia AVIF para PDF - Conversor de Imagens | pdfcanada.ca",
        descEn: "AVIF to PDF Guide - Convert high-efficiency AVIF images to standard PDF docs. 100% private, local-first processing ensures your photos stay safe. Try it free.",
        descFr: "Guide AVIF vers PDF - Convertissez vos images AVIF en documents PDF. Traitement 100% local pour garantir la sécurité des photos. Utilisez-le gratuitement.",
        descPt: "Guia AVIF para PDF - Converta imagens AVIF em documentos PDF com segurança. Processamento 100% local para garantir a segurança das fotos. Use grátis agora.",
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'ipynb-to-pdf',
        titleEn: "IPYNB to PDF Guide - Jupyter Notebooks to PDF | pdfcanada.ca",
        titleFr: "Guide IPYNB vers PDF - Notebooks en PDF | pdfcanada.ca",
        titlePt: "Guia IPYNB para PDF - Jupyter para PDF | pdfcanada.ca",
        descEn: "IPYNB to PDF Guide - Convert Jupyter Notebooks to PDF while preserving code. 100% private, local-first processing ensures your data stays safe. Try it for free.",
        descFr: "Guide IPYNB vers PDF - Convertissez vos Jupyter Notebooks en PDF. Traitement 100% local pour garantir la sécurité totale des données. Essayez-le maintenant.",
        descPt: "Guia IPYNB para PDF - Converta Jupyter Notebooks em PDF preservando o código. Processamento 100% local para garantir a segurança dos dados. Use grátis agora.",
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'change-pdf-viewer-mac',
        titleEn: "Change PDF Viewer on Mac - macOS Settings | pdfcanada.ca",
        titleFr: "Changer le Lecteur PDF sur Mac - Guide macOS | pdfcanada.ca",
        titlePt: "Alterar Visualizador de PDF no Mac - macOS | pdfcanada.ca",
        descEn: "Change PDF Viewer on Mac - Guide to switching your default PDF app on macOS. 100% private, local-first processing info for secure viewing. Explore more.",
        descFr: "Changer le Lecteur PDF sur Mac - Apprenez à changer l'appli PDF par défaut. Traitement 100% local pour une lecture sécurisée. En savoir plus maintenant.",
        descPt: "Alterar Visualizador de PDF no Mac - Guia para trocar seu app PDF padrão. Processamento 100% local para leitura segura. Saiba mais agora mesmo.",
        category: 'Advanced',
        icon: '🖥️'
    },
    {
        slug: 'phishing-pdf-guide',
        titleEn: "Analyze PDF Security - Detect Phishing Links | pdfcanada.ca",
        titleFr: "Analyser la Sécurité PDF - Hameçonnage | pdfcanada.ca",
        titlePt: "Analisar Segurança PDF - Detectar Phishing | pdfcanada.ca",
        descEn: "Analyze PDF Security - Safely detect phishing links and malware in documents. 100% private, local-first processing ensures your data stays safe. Start now.",
        descFr: "Analyser la Sécurité PDF - Détectez l'hameçonnage et les malware sans risque. Traitement 100% local pour garantir la sécurité totale. Commencez ici.",
        descPt: "Analisar Segurança PDF - Detecte phishing e malware de forma segura. Processamento 100% local para garantir a segurança total. Comece a analisar agora.",
        category: 'Privacy & Security',
        icon: '🛡️'
    },
    {
        slug: 'financial-statement-pdf',
        titleEn: "Financial Statement PDF Guide - Business Reports | pdfcanada.ca",
        titleFr: "Guide des États Financiers PDF - Rapports Pro | pdfcanada.ca",
        titlePt: "Guia de PDF de Declarações Financeiras | pdfcanada.ca",
        descEn: "Financial Statement PDF Guide - Create BIR-compliant business reports safely. 100% private, local-first processing ensures your data stays safe. Try it today.",
        descFr: "Guide des États Financiers PDF - Créez des rapports pro conformes au BIR. Traitement 100% local pour garantir la sécurité totale. Essayez-le aujourd'hui.",
        descPt: "Guia de PDF de Declarações Financeiras - Crie relatórios pro com segurança. Processamento 100% local para garantir a segurança total. Use agora mesmo.",
        category: 'Advanced',
        icon: '📊'
    },
    {
        slug: 'pdf-to-jpeg',
        titleEn: "PDF to JPEG Guide - Export Document Images | pdfcanada.ca",
        titleFr: "PDF en JPEG - Conversion de Pages en Images | pdfcanada.ca",
        titlePt: "PDF para JPEG - Converter Páginas Online | pdfcanada.ca",
        descEn: "PDF to JPEG Guide - Convert PDF pages into high-quality JPEG images instantly. 100% private, local-first processing keeps your documents safe. Try it for free.",
        descFr: "PDF en JPEG - Exportez vos pages PDF en images JPEG haute qualité. Traitement 100% local pour garantir la sécurité des données. Utilisez-le gratuitement.",
        descPt: "PDF para JPEG - Converta páginas em imagens JPEG de alta qualidade. Processamento 100% local para garantir a segurança. Experimente grátis agora.",
        category: 'Conversion',
        icon: '📷'
    }
];

export const getGuidesByCategory = (category: GuideMetadata['category']) => {
    return ALL_GUIDES.filter(guide => guide.category === category);
};

export const getAllCategories = (): GuideMetadata['category'][] => {
    return ['Privacy & Security', 'Editing', 'Conversion', 'Advanced'];
};
