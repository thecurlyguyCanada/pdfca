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
        titleEn: 'Ultimate PDF Guide',
        titleFr: 'Guide PDF Ultime',
        descEn: 'Master PDF manipulation with our comprehensive guide covering all essential techniques.',
        descFr: 'Maîtrisez la manipulation PDF avec notre guide complet couvrant toutes les techniques essentielles.',
        category: 'Privacy & Security',
        icon: '📚'
    },
    {
        slug: 'private-pdf-tools',
        titleEn: 'Private PDF Processing',
        titleFr: 'Traitement PDF Privé',
        descEn: 'Why local browser processing is the future of secure PDF tools.',
        descFr: 'Pourquoi le traitement local dans le navigateur est l\'avenir des outils PDF sécurisés.',
        category: 'Privacy & Security',
        icon: '🔒'
    },
    {
        slug: 'legal-pdf-tools',
        titleEn: 'Legal PDF Security',
        titleFr: 'Sécurité PDF Juridique',
        descEn: 'Protect solicitor-client privilege with local-only PDF processing.',
        descFr: 'Protégez le secret professionnel avec le traitement PDF local uniquement.',
        category: 'Privacy & Security',
        icon: '⚖️'
    },
    {
        slug: 'healthcare-pdf-security',
        titleEn: 'Healthcare PDF Compliance',
        titleFr: 'Conformité PDF Santé',
        descEn: 'HIPAA/PIPEDA compliant PDF tools for medical professionals.',
        descFr: 'Outils PDF conformes HIPAA/LPRPDE pour professionnels de santé.',
        category: 'Privacy & Security',
        icon: '🏥'
    },
    {
        slug: 'finance-pdf-security',
        titleEn: 'Finance PDF Security',
        titleFr: 'Sécurité PDF Finance',
        descEn: 'Secure compression and processing for tax returns and bank statements.',
        descFr: 'Compression et traitement sécurisés pour déclarations fiscales et relevés bancaires.',
        category: 'Privacy & Security',
        icon: '💼'
    },

    // Editing
    {
        slug: 'merge-pdf',
        titleEn: 'Merge PDF Guide',
        titleFr: 'Guide Fusionner PDF',
        titlePt: 'Guia Juntar PDF',
        descEn: 'Combine multiple PDFs into a single document securely.',
        descFr: 'Combinez plusieurs PDF en un seul document en toute sécurité.',
        descPt: 'Combine vários PDFs em um único documento com segurança.',
        category: 'Editing',
        icon: '🔗'
    },
    {
        slug: 'combine-pdf',
        titleEn: 'Combine PDF Files Guide',
        titleFr: 'Guide Combiner Fichiers PDF',
        titlePt: 'Guia Combinar Arquivos PDF',
        descEn: 'Learn how to combine PDF files into one unified document.',
        descFr: 'Apprenez à combiner des fichiers PDF en un seul document unifié.',
        descPt: 'Aprenda como combinar arquivos PDF em um único documento unificado.',
        category: 'Editing',
        icon: '🔗'
    },
    {
        slug: 'reduce-pdf-size',
        titleEn: 'Reduce PDF File Size Guide',
        titleFr: 'Guide Réduire Taille PDF',
        titlePt: 'Guia Reduzir Tamanho PDF',
        descEn: 'Learn how to significantly reduce PDF file size for email and uploads.',
        descFr: 'Apprenez à réduire considérablement la taille des fichiers PDF pour les courriels.',
        descPt: 'Aprenda como reduzir significativamente o tamanho do arquivo PDF para e-mails.',
        category: 'Editing',
        icon: '📉'
    },
    {
        slug: 'split-pdf',
        titleEn: 'Split PDF Guide',
        titleFr: 'Guide Diviser PDF',
        titlePt: 'Guia Dividir PDF',
        descEn: 'Extract specific pages or split PDFs into individual files.',
        descFr: 'Extrayez des pages spécifiques ou divisez les PDF en fichiers individuels.',
        descPt: 'Extraia páginas específicas ou divida PDFs em arquivos individuais.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'compress-pdf',
        titleEn: 'Compress PDF Guide',
        titleFr: 'Guide Compresser PDF',
        titlePt: 'Guia Comprimir PDF',
        descEn: 'Reduce PDF file size without losing quality.',
        descFr: 'Réduisez la taille des fichiers PDF sans perte de qualité.',
        descPt: 'Reduza o tamanho do arquivo PDF sem perder qualidade.',
        category: 'Editing',
        icon: '📦'
    },
    {
        slug: 'rotate-pdf',
        titleEn: 'Rotate PDF Guide',
        titleFr: 'Guide Pivoter PDF',
        titlePt: 'Guia Girar PDF',
        descEn: 'Rotate PDF pages to the correct orientation.',
        descFr: 'Faites pivoter les pages PDF vers la bonne orientation.',
        descPt: 'Gire páginas PDF para a orientação correta.',
        category: 'Editing',
        icon: '🔄'
    },
    {
        slug: 'delete-pdf-pages',
        titleEn: 'Delete PDF Pages',
        titleFr: 'Supprimer Pages PDF',
        titlePt: 'Excluir Páginas PDF',
        descEn: 'Remove unwanted pages from your PDF documents.',
        descFr: 'Supprimez les pages indésirables de vos documents PDF.',
        descPt: 'Remova páginas indesejadas dos seus documentos PDF.',
        category: 'Editing',
        icon: '🗑️'
    },
    {
        slug: 'organize-pdf',
        titleEn: 'Organize PDF Guide',
        titleFr: 'Guide Organiser PDF',
        titlePt: 'Guia Organizar PDF',
        descEn: 'Reorder and reorganize pages within your PDF.',
        descFr: 'Réorganisez et classez les pages de votre PDF.',
        descPt: 'Reorganize e ordene páginas dentro do seu PDF.',
        category: 'Editing',
        icon: '📋'
    },
    {
        slug: 'crop-pdf',
        titleEn: 'Crop PDF Guide',
        titleFr: 'Guide Recadrer PDF',
        titlePt: 'Guia Cortar PDF',
        descEn: 'Trim margins and crop PDF pages visually.',
        descFr: 'Coupez les marges et recadrez les pages PDF visuellement.',
        descPt: 'Corte margens e recorte páginas PDF visualmente.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'flatten-pdf',
        titleEn: 'Flatten PDF Guide',
        titleFr: 'Guide Aplatir PDF',
        titlePt: 'Guia Achatar PDF',
        descEn: 'Convert interactive forms to static content.',
        descFr: 'Convertissez les formulaires interactifs en contenu statique.',
        descPt: 'Converta formulários interativos em conteúdo estático.',
        category: 'Editing',
        icon: '📄'
    },
    {
        slug: 'make-pdf-fillable',
        titleEn: 'Make PDF Fillable',
        titleFr: 'Rendre PDF Remplissable',
        titlePt: 'Tornar PDF Preenchível',
        descEn: 'Add interactive form fields to your PDFs.',
        descFr: 'Ajoutez des champs de formulaire interactifs à vos PDF.',
        descPt: 'Adicione campos de formulário interativos aos seus PDFs.',
        category: 'Editing',
        icon: '📝'
    },
    {
        slug: 'edit-xfa-pdf',
        titleEn: 'Edit XFA PDF Guide',
        titleFr: 'Guide Éditer XFA PDF',
        descEn: 'Work with complex XFA form PDFs.',
        descFr: 'Travaillez avec des formulaires XFA complexes.',
        category: 'Advanced',
        icon: '⚙️'
    },
    {
        slug: 'insert-picture-in-pdf',
        titleEn: 'Insert Picture Guide',
        titleFr: 'Guide Insérer Image',
        descEn: 'Add images and graphics to your PDF documents.',
        descFr: 'Ajoutez des images et graphiques à vos documents PDF.',
        category: 'Editing',
        icon: '🖼️'
    },
    {
        slug: 'pdf-page-remover',
        titleEn: 'PDF Page Remover',
        titleFr: 'Suppresseur Pages PDF',
        descEn: 'Quick tool to remove specific pages from PDFs.',
        descFr: 'Outil rapide pour supprimer des pages spécifiques des PDF.',
        category: 'Editing',
        icon: '🗑️'
    },

    // Conversion
    {
        slug: 'pdf-to-word',
        titleEn: 'PDF to Word Guide',
        titleFr: 'Comment Convertir PDF en Word Gratuitement',
        titlePt: 'Como Converter PDF para Word Gratuitamente',
        descEn: 'Convert PDF documents to editable Word files.',
        descFr: 'Comment convertir un PDF en Word gratuitement. Guide complet pour convertir fichier PDF en Word modifiable, en ligne et sans logiciel.',
        descPt: 'Como converter PDF para Word gratuitamente. Guia completo para converter arquivo PDF em Word editável.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'word-to-pdf',
        titleEn: 'Word to PDF Guide',
        titleFr: 'Comment Convertir Word en PDF Gratuitement',
        titlePt: 'Como Converter Word para PDF Gratuitamente',
        descEn: 'Convert Word documents to PDF format.',
        descFr: 'Comment convertir un document Word en PDF gratuitement. Guide pour convertir fichier Word en PDF en ligne, sans logiciel.',
        descPt: 'Como converter documento Word em PDF gratuitamente. Guia para converter arquivo Word em PDF online.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'heic-to-pdf',
        titleEn: 'HEIC to PDF Guide',
        titleFr: 'Guide HEIC vers PDF',
        descEn: 'Convert iPhone photos (HEIC) to PDF.',
        descFr: 'Convertissez des photos iPhone (HEIC) en PDF.',
        category: 'Conversion',
        icon: '📸'
    },
    {
        slug: 'pdf-to-epub',
        titleEn: 'PDF to EPUB Guide',
        titleFr: 'Guide PDF vers EPUB',
        descEn: 'Convert PDFs to eBook format for readers.',
        descFr: 'Convertissez des PDF au format eBook pour liseuses.',
        category: 'Conversion',
        icon: '📚'
    },
    {
        slug: 'epub-to-pdf',
        titleEn: 'EPUB to PDF Guide',
        titleFr: 'Guide EPUB vers PDF',
        descEn: 'Convert eBooks to PDF format.',
        descFr: 'Convertissez des eBooks au format PDF.',
        category: 'Conversion',
        icon: '📖'
    },
    {
        slug: 'cbr-to-pdf',
        titleEn: 'CBR to PDF Guide',
        titleFr: 'Guide CBR vers PDF',
        descEn: 'Convert comic book archives to PDF.',
        descFr: 'Convertissez des archives de bandes dessinées en PDF.',
        category: 'Conversion',
        icon: '📚'
    },
    {
        slug: 'email-to-pdf',
        titleEn: 'Email to PDF Guide',
        titleFr: 'Guide Email vers PDF',
        descEn: 'Save emails as PDF documents.',
        descFr: 'Sauvegardez des emails en documents PDF.',
        category: 'Conversion',
        icon: '📧'
    },
    {
        slug: 'rtf-to-pdf',
        titleEn: 'RTF to PDF Guide',
        titleFr: 'Guide RTF vers PDF',
        descEn: 'Convert Rich Text Format to PDF.',
        descFr: 'Convertissez le format Rich Text en PDF.',
        category: 'Conversion',
        icon: '📄'
    },

    // Advanced
    {
        slug: 'invoice-ocr',
        titleEn: 'Invoice OCR Guide',
        titleFr: 'Guide OCR Facture',
        descEn: 'Extract text and data from invoice PDFs automatically.',
        descFr: 'Extrayez texte et données des factures PDF automatiquement.',
        category: 'Advanced',
        icon: '🧾'
    },
    {
        slug: 'trim-pdf',
        titleEn: 'Trim PDF Margins',
        titleFr: 'Rogner les Marges PDF',
        descEn: 'Remove excess white margins from PDF documents permanently.',
        descFr: 'Supprimez les marges blanches excessives de vos documents PDF de façon permanente.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'pdf-to-ubl',
        titleEn: 'PDF to UBL Converter',
        titleFr: 'Convertisseur PDF vers UBL',
        descEn: 'Convert PDF invoices to UBL 2.1 XML e-invoices for free.',
        descFr: 'Convertissez vos factures PDF au format UBL 2.1 XML gratuitement.',
        category: 'Advanced',
        icon: '🧾'
    },
    {
        slug: 'gif-to-pdf',
        titleEn: 'GIF to PDF',
        titleFr: 'GIF en PDF',
        descEn: 'Convert GIF images to PDF format.',
        descFr: 'Convertissez des images GIF au format PDF.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'aspx-to-pdf',
        titleEn: 'ASPX to PDF',
        titleFr: 'ASPX en PDF',
        descEn: 'Convert ASPX code files to PDF.',
        descFr: 'Convertissez des fichiers code ASPX en PDF.',
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'acsm-to-pdf',
        titleEn: 'ACSM to PDF',
        titleFr: 'ACSM en PDF',
        descEn: 'Guide to converting .acsm license files to PDF.',
        descFr: 'Guide pour convertir fichiers de licence .acsm en PDF.',
        category: 'Conversion',
        icon: '🔑'
    },
    {
        slug: 'php-to-pdf',
        titleEn: 'PHP to PDF',
        titleFr: 'PHP en PDF',
        descEn: 'Convert PHP source code to PDF.',
        descFr: 'Convertir le code source PHP en PDF.',
        category: 'Conversion',
        icon: '🐘'
    },
    {
        slug: 'pdf-to-word-online',
        titleEn: 'PDF to Word Online Converter',
        titleFr: 'Convertisseur PDF en Word en Ligne',
        descEn: 'Convert PDF to Word online for free. Step-by-step guide to secure browser-based conversion.',
        descFr: 'Convertissez PDF en Word en ligne gratuitement. Guide étape par étape pour conversion sécurisée.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'compress-pdf-online',
        titleEn: 'Compress PDF Online',
        titleFr: 'Compresser PDF en Ligne',
        descEn: 'Best way to compress PDF online without losing quality. Free and secure tool.',
        descFr: 'Meilleur moyen de compresser PDF en ligne sans perte de qualité. Outil gratuit et sécurisé.',
        category: 'Editing',
        icon: '📦'
    },
    {
        slug: 'merge-pdf-online',
        titleEn: 'Merge PDF Online',
        titleFr: 'Fusionner PDF en Ligne',
        descEn: 'How to merge PDF files online properly. Combine documents securely in your browser.',
        descFr: 'Comment fusionner des fichiers PDF en ligne correctement. Combinez des documents en toute sécurité.',
        category: 'Editing',
        icon: '🔗'
    },
    // Hub Pages
    {
        slug: 'pdf-conversions',
        titleEn: 'PDF Conversion Hub',
        titleFr: 'Hub de Conversion PDF',
        descEn: 'The complete guide to PDF conversions. Convert to/from Word, Excel, Images, and more.',
        descFr: 'Le guide complet des conversions PDF. Convertissez vers/depuis Word, Excel, Images, et plus.',
        category: 'Conversion',
        icon: '🔄'
    },
    {
        slug: 'pdf-editing',
        titleEn: 'PDF Editing Hub',
        titleFr: 'Hub d\'Édition PDF',
        descEn: 'Master PDF editing. Merge, split, compress, and organize your documents.',
        descFr: 'Maîtrisez l\'édition PDF. Fusionnez, divisez, compressez et organisez vos documents.',
        category: 'Editing',
        icon: '✏️'
    },
    {
        slug: 'pdf-security',
        titleEn: 'PDF Security Hub',
        titleFr: 'Hub de Sécurité PDF',
        descEn: 'Protect your documents. Learn about encryption, redaction, and compliance.',
        descFr: 'Protégez vos documents. Apprenez le chiffrement, la rédaction et la conformité.',
        category: 'Privacy & Security',
        icon: '🛡️'
    },
    {
        slug: 'pdf-ocr-analysis',
        titleEn: 'PDF OCR & Analysis',
        titleFr: 'OCR & Analyse PDF',
        descEn: 'Advanced PDF tools. Extract data, analyze structure, and OCR scanned docs.',
        descFr: 'Outils PDF avancés. Extrayez des données, analysez la structure et OCRisez des docs scannés.',
        category: 'Advanced',
        icon: '🔍'
    },
    // Long-Tail Conversion
    {
        slug: 'pdf-to-word-offline',
        titleEn: 'PDF to Word Offline',
        titleFr: 'PDF en Word Hors Ligne',
        descEn: 'Convert PDF to Word locally without internet.',
        descFr: 'Convertir PDF en Word localement sans internet.',
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'pdf-to-word-formatting',
        titleEn: 'PDF to Word Formatting',
        titleFr: 'Formatage PDF en Word',
        descEn: 'Keep original layout and fonts during conversion.',
        descFr: 'Conserver la mise en page et les polices lors de la conversion.',
        category: 'Conversion',
        icon: '🎨'
    },
    {
        slug: 'pdf-to-word-scanned',
        titleEn: 'Convert Scanned PDF to Word',
        titleFr: 'Convertir PDF Scanné en Word',
        descEn: 'Use OCR to convert scanned documents to editable text.',
        descFr: 'Utilisez l\'OCR pour convertir des documents scannés en texte modifiable.',
        category: 'Conversion',
        icon: '📷'
    },
    {
        slug: 'pdf-to-excel',
        titleEn: 'PDF to Excel Guide',
        titleFr: 'Guide PDF vers Excel',
        descEn: 'Extract tables and data from PDF to Excel spreadsheets.',
        descFr: 'Extrayez tableaux et données de PDF vers feuilles Excel.',
        category: 'Conversion',
        icon: '📊'
    },
    {
        slug: 'pdf-to-csv',
        titleEn: 'PDF to CSV Guide',
        titleFr: 'Guide PDF vers CSV',
        descEn: 'Convert PDF tables to Comma Separated Values.',
        descFr: 'Convertissez les tableaux PDF en valeurs séparées par des virgules.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'pdf-to-xml',
        titleEn: 'PDF to XML Guide',
        titleFr: 'Guide PDF vers XML',
        descEn: 'Extract structured data from PDF to XML format.',
        descFr: 'Extrayez des données structurées de PDF vers format XML.',
        category: 'Conversion',
        icon: '💾'
    },
    {
        slug: 'pdf-to-kindle',
        titleEn: 'PDF to Kindle Guide',
        titleFr: 'Guide PDF vers Kindle',
        descEn: 'Optimize PDFs for reading on Kindle devices.',
        descFr: 'Optimisez les PDF pour la lecture sur appareils Kindle.',
        category: 'Conversion',
        icon: '📱'
    },
    // Long-Tail Editing
    {
        slug: 'split-pdf-online',
        titleEn: 'Split PDF Online',
        titleFr: 'Diviser PDF en Ligne',
        descEn: 'Split large PDF documents into smaller files in your browser.',
        descFr: 'Divisez de gros documents PDF en fichiers plus petits dans votre navigateur.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'merge-large-pdfs',
        titleEn: 'Merge Large PDFs',
        titleFr: 'Fusionner Gros PDF',
        descEn: 'Combine huge PDF files without file size limits.',
        descFr: 'Combinez de gros fichiers PDF sans limite de taille.',
        category: 'Editing',
        icon: '🐘'
    },
    {
        slug: 'compress-pdf-no-quality-loss',
        titleEn: 'Compress PDF No Quality Loss',
        titleFr: 'Compresser PDF Sans Perte',
        descEn: 'Reduce file size while keeping images sharp.',
        descFr: 'Réduisez la taille du fichier tout en gardant les images nettes.',
        category: 'Editing',
        icon: '💎'
    },
    {
        slug: 'sign-pdf',
        titleEn: 'Sign PDF Online',
        titleFr: 'Signer PDF en Ligne',
        descEn: 'Add electronic signatures to your contracts.',
        descFr: 'Ajoutez des signatures électroniques à vos contrats.',
        category: 'Editing',
        icon: '✍️'
    },
    // Long-Tail Advanced
    {
        slug: 'analyze-pdf',
        titleEn: 'Analyze PDF Structure',
        titleFr: 'Analyser Structure PDF',
        descEn: 'Inspect internal PDF objects, fonts, and metadata.',
        descFr: 'Inspectez les objets, polices et métadonnées internes du PDF.',
        category: 'Advanced',
        icon: '🔬'
    },
    {
        slug: 'barcode-generator',
        titleEn: 'PDF Barcode Generator',
        titleFr: 'Générateur Code-barres PDF',
        descEn: 'Create barcodes and QR codes for your PDFs.',
        descFr: 'Créez des codes-barres et QR codes pour vos PDF.',
        category: 'Advanced',
        icon: '🏷️'
    },
    {
        slug: 'xrechnung-viewer',
        titleEn: 'XRechnung Viewer',
        titleFr: 'Visualiseur XRechnung',
        descEn: 'View and validate German e-invoice standards.',
        descFr: 'Visualisez et validez les normes de facture électronique allemandes.',
        category: 'Advanced',
        icon: '🇩🇪'

    },
    // New Guides - Image Tools
    {
        slug: 'image-to-pdf',
        titleEn: 'Image to PDF Guide',
        titleFr: 'Guide Image vers PDF',
        titlePt: 'Guia Imagem para PDF',
        descEn: 'Convert generic image files to PDF format.',
        descFr: 'Convertir des fichiers image génériques au format PDF.',
        descPt: 'Converta arquivos de imagem genéricos para o formato PDF.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'jpg-to-pdf',
        titleEn: 'JPG to PDF Guide',
        titleFr: 'Guide JPG vers PDF',
        titlePt: 'Guia JPG para PDF',
        descEn: 'Convert JPG images to PDF documents.',
        descFr: 'Convertir des images JPG en documents PDF.',
        descPt: 'Converta imagens JPG em documentos PDF.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'jpeg-to-pdf',
        titleEn: 'JPEG to PDF Guide',
        titleFr: 'Guide JPEG vers PDF',
        titlePt: 'Guia JPEG para PDF',
        descEn: 'Convert JPEG photos to PDF.',
        descFr: 'Convertir des photos JPEG en PDF.',
        descPt: 'Converta fotos JPEG para PDF.',
        category: 'Conversion',
        icon: '📷'
    },
    {
        slug: 'png-to-pdf',
        titleEn: 'PNG to PDF Guide',
        titleFr: 'Guide PNG vers PDF',
        titlePt: 'Guia PNG para PDF',
        descEn: 'Convert PNG images with transparency to PDF.',
        descFr: 'Convertir des images PNG avec transparence en PDF.',
        descPt: 'Converta imagens PNG com transparência para PDF.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-image',
        titleEn: 'PDF to Image Guide',
        titleFr: 'Guide PDF vers Image',
        titlePt: 'Guia PDF para Imagem',
        descEn: 'Convert PDF pages to image files.',
        descFr: 'Convertir des pages PDF en fichiers image.',
        descPt: 'Converta páginas de PDF para arquivos de imagem.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-jpg',
        titleEn: 'PDF to JPG Guide',
        titleFr: 'Guide PDF vers JPG',
        titlePt: 'Guia PDF para JPG',
        descEn: 'Save PDF pages as standard JPG images.',
        descFr: 'Enregistrer des pages PDF comme images JPG standard.',
        descPt: 'Salve páginas de PDF como imagens JPG padrão.',
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'pdf-to-png',
        titleEn: 'PDF to PNG Guide',
        titleFr: 'Guide PDF vers PNG',
        titlePt: 'Guia PDF para PNG',
        descEn: 'Extract high-quality PNGs from PDF.',
        descFr: 'Extraire des PNG de haute qualité depuis un PDF.',
        descPt: 'Extraia PNGs de alta qualidade de PDFs.',
        category: 'Conversion',
        icon: '🖼️'
    },
    // New Guides - Office Tools
    {
        slug: 'excel-to-pdf',
        titleEn: 'Excel to PDF Guide',
        titleFr: 'Guide Excel vers PDF',
        titlePt: 'Guia Excel para PDF',
        descEn: 'Convert spreadsheets to PDF documents.',
        descFr: 'Convertir des feuilles de calcul en documents PDF.',
        descPt: 'Converta planilhas em documentos PDF.',
        category: 'Conversion',
        icon: '📊'
    },
    {
        slug: 'ppt-to-pdf',
        titleEn: 'PPT to PDF Guide',
        titleFr: 'Guide PPT vers PDF',
        titlePt: 'Guia PPT para PDF',
        descEn: 'Convert presentations to PDF slides.',
        descFr: 'Convertir des présentations en diapositives PDF.',
        descPt: 'Converta apresentações em slides PDF.',
        category: 'Conversion',
        icon: '📽️'
    },
    {
        slug: 'pdf-to-ppt',
        titleEn: 'PDF to PPT Guide',
        titleFr: 'Guide PDF vers PPT',
        titlePt: 'Guia PDF para PPT',
        descEn: 'Convert PDF to editable PowerPoint slides.',
        descFr: 'Convertir PDF en diapositives PowerPoint modifiables.',
        descPt: 'Converta PDF para slides PowerPoint editáveis.',
        category: 'Conversion',
        icon: '📽️'
    },
    {
        slug: 'odt-to-pdf',
        titleEn: 'ODT to PDF Guide',
        titleFr: 'Guide ODT vers PDF',
        titlePt: 'Guia ODT para PDF',
        descEn: 'Convert OpenDocument Text files to PDF.',
        descFr: 'Convertir des fichiers OpenDocument Text en PDF.',
        descPt: 'Converta arquivos OpenDocument Text para PDF.',
        category: 'Conversion',
        icon: '📝'
    },
    {
        slug: 'pages-to-pdf',
        titleEn: 'Pages to PDF Guide',
        titleFr: 'Guide Pages vers PDF',
        titlePt: 'Guia Pages para PDF',
        descEn: 'Convert Apple Pages documents to PDF.',
        descFr: 'Convertir des documents Apple Pages en PDF.',
        descPt: 'Converta documentos Apple Pages para PDF.',
        category: 'Conversion',
        icon: '🍎'
    },
    {
        slug: 'html-to-pdf',
        titleEn: 'HTML to PDF Guide',
        titleFr: 'Guide HTML vers PDF',
        titlePt: 'Guia HTML para PDF',
        descEn: 'Save HTML files and code as PDF.',
        descFr: 'Enregistrer des fichiers HTML et du code en PDF.',
        descPt: 'Salve arquivos HTML e código como PDF.',
        category: 'Conversion',
        icon: '🌐'
    },
    // New Guides - Utility
    {
        slug: 'extract-pdf-pages',
        titleEn: 'Extract PDF Pages Guide',
        titleFr: 'Guide Extraire Pages PDF',
        titlePt: 'Guia Extrair Páginas PDF',
        descEn: 'Create new PDFs from selected pages.',
        descFr: 'Créer de nouveaux PDF à partir de pages sélectionnées.',
        descPt: 'Crie novos PDFs a partir de páginas selecionadas.',
        category: 'Editing',
        icon: '📄'
    },
    {
        slug: 'xml-to-pdf',
        titleEn: 'XML to PDF Guide',
        titleFr: 'Guide XML vers PDF',
        titlePt: 'Guia XML para PDF',
        descEn: 'Visualize XML data as a PDF document.',
        descFr: 'Visualiser des données XML en tant que document PDF.',
        descPt: 'Visualize dados XML como um documento PDF.',
        category: 'Conversion',
        icon: '⚙️'
    },
    {
        slug: 'avif-to-pdf',
        titleEn: "How to Convert AVIF to PDF & PDF to AVIF",
        titleFr: "Comment Convertir AVIF en PDF et PDF en AVIF",
        titlePt: "Como Converter AVIF para PDF e PDF para AVIF",
        descEn: "Convert modern AVIF images to PDF or PDF to AVIF for maximum compatibility. Secure local conversion.",
        descFr: "Convertissez des images AVIF modernes en PDF ou des PDF en AVIF. Conversion locale sécurisée.",
        descPt: "Converta imagens AVIF modernas para PDF ou PDF para AVIF. Conversão local segura.",
        category: 'Conversion',
        icon: '🖼️'
    },
    {
        slug: 'ipynb-to-pdf',
        titleEn: "Convert IPYNB to PDF | Jupyter Notebook Converter",
        titleFr: "Convertir IPYNB en PDF | Convertisseur Jupyter",
        titlePt: "Converter IPYNB para PDF | Conversor Jupyter",
        descEn: "Free, secure tool to convert Jupyter Notebooks (.ipynb) to PDF. Preserves code and privacy.",
        descFr: "Outil gratuit pour convertir des Jupyter Notebooks (.ipynb) en PDF. Préserve le code et la confidentialité.",
        descPt: "Ferramenta gratuita para converter Jupyter Notebooks (.ipynb) para PDF. Preserva código e privacidade.",
        category: 'Conversion',
        icon: '💻'
    },
    {
        slug: 'change-pdf-viewer-mac',
        titleEn: "How to Change Default PDF Viewer on Mac",
        titleFr: "Comment Changer le Lecteur PDF par Défaut sur Mac",
        titlePt: "Como Alterar o Visualizador de PDF Padrão no Mac",
        descEn: "Step-by-step guide to change your default PDF viewer from Preview to Adobe Acrobat or others on macOS.",
        descFr: "Guide étape par étape pour changer votre lecteur PDF par défaut de Preview vers Adobe Acrobat sur macOS.",
        descPt: "Guia passo a passo para alterar seu visualizador de PDF padrão do Preview para Adobe Acrobat no macOS.",
        category: 'Advanced',
        icon: '🖥️'
    },
    {
        slug: 'phishing-pdf-guide',
        titleEn: "Analyze PDF Security & Detect Phishing",
        titleFr: "Analyser la Sécurité PDF et Détecter l'Hameçonnage",
        titlePt: "Analisar Segurança PDF e Detectar Phishing",
        descEn: "Safely analyze suspicious PDF attachments for phishing links and malware without opening them.",
        descFr: "Analysez en toute sécurité les pièces jointes PDF suspectes pour détecter l'hameçonnage sans les ouvrir.",
        descPt: "Analise com segurança anexos PDF suspeitos em busca de phishing e malware sem abri-los.",
        category: 'Privacy & Security',
        icon: '🛡️'
    },
    {
        slug: 'financial-statement-pdf',
        titleEn: "Financial Statement PDF Guide: Philippines Edition",
        titleFr: "Guide des États Financiers PDF (Édition Philippines)",
        titlePt: "Guia de PDF de Declarações Financeiras: Edição Filipinas",
        descEn: "Definitive guide for Filipino businesses on creating and converting BIR-compliant financial statements.",
        descFr: "Guide définitif pour les entreprises philippines sur la création d'états financiers conformes au BIR.",
        descPt: "Guia definitivo para empresas filipinas sobre como criar declarações financeiras compatíveis com BIR.",
        category: 'Advanced',
        icon: '📊'
    },
    {
        slug: 'pdf-to-jpeg',
        titleEn: "PDF to JPEG | Convert PDF Pages to Images",
        titleFr: "PDF en JPEG | Convertir les Pages PDF en Images",
        titlePt: "PDF para JPEG | Converter Páginas PDF em Imagens",
        descEn: "Convert PDF pages into high-quality JPEG images. Free and secure local extraction.",
        descFr: "Convertissez des pages PDF en images JPEG de haute qualité. Extraction locale gratuite.",
        descPt: "Converta páginas PDF em imagens JPEG de alta qualidade. Extração local gratuita.",
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
