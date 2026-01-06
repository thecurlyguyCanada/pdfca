export interface GuideMetadata {
    slug: string;
    titleEn: string;
    titleFr: string;
    descEn: string;
    descFr: string;
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
        descEn: 'Combine multiple PDFs into a single document securely.',
        descFr: 'Combinez plusieurs PDF en un seul document en toute sécurité.',
        category: 'Editing',
        icon: '🔗'
    },
    {
        slug: 'split-pdf',
        titleEn: 'Split PDF Guide',
        titleFr: 'Guide Diviser PDF',
        descEn: 'Extract specific pages or split PDFs into individual files.',
        descFr: 'Extrayez des pages spécifiques ou divisez les PDF en fichiers individuels.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'compress-pdf',
        titleEn: 'Compress PDF Guide',
        titleFr: 'Guide Compresser PDF',
        descEn: 'Reduce PDF file size without losing quality.',
        descFr: 'Réduisez la taille des fichiers PDF sans perte de qualité.',
        category: 'Editing',
        icon: '📦'
    },
    {
        slug: 'rotate-pdf',
        titleEn: 'Rotate PDF Guide',
        titleFr: 'Guide Pivoter PDF',
        descEn: 'Rotate PDF pages to the correct orientation.',
        descFr: 'Faites pivoter les pages PDF vers la bonne orientation.',
        category: 'Editing',
        icon: '🔄'
    },
    {
        slug: 'delete-pdf-pages',
        titleEn: 'Delete PDF Pages',
        titleFr: 'Supprimer Pages PDF',
        descEn: 'Remove unwanted pages from your PDF documents.',
        descFr: 'Supprimez les pages indésirables de vos documents PDF.',
        category: 'Editing',
        icon: '🗑️'
    },
    {
        slug: 'organize-pdf',
        titleEn: 'Organize PDF Guide',
        titleFr: 'Guide Organiser PDF',
        descEn: 'Reorder and reorganize pages within your PDF.',
        descFr: 'Réorganisez et classez les pages de votre PDF.',
        category: 'Editing',
        icon: '📋'
    },
    {
        slug: 'crop-pdf',
        titleEn: 'Crop PDF Guide',
        titleFr: 'Guide Recadrer PDF',
        descEn: 'Trim margins and crop PDF pages visually.',
        descFr: 'Coupez les marges et recadrez les pages PDF visuellement.',
        category: 'Editing',
        icon: '✂️'
    },
    {
        slug: 'flatten-pdf',
        titleEn: 'Flatten PDF Guide',
        titleFr: 'Guide Aplatir PDF',
        descEn: 'Convert interactive forms to static content.',
        descFr: 'Convertissez les formulaires interactifs en contenu statique.',
        category: 'Editing',
        icon: '📄'
    },
    {
        slug: 'make-pdf-fillable',
        titleEn: 'Make PDF Fillable',
        titleFr: 'Rendre PDF Remplissable',
        descEn: 'Add interactive form fields to your PDFs.',
        descFr: 'Ajoutez des champs de formulaire interactifs à vos PDF.',
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
        descEn: 'Convert PDF documents to editable Word files.',
        descFr: 'Comment convertir un PDF en Word gratuitement. Guide complet pour convertir fichier PDF en Word modifiable, en ligne et sans logiciel.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'word-to-pdf',
        titleEn: 'Word to PDF Guide',
        titleFr: 'Comment Convertir Word en PDF Gratuitement',
        descEn: 'Convert Word documents to PDF format.',
        descFr: 'Comment convertir un document Word en PDF gratuitement. Guide pour convertir fichier Word en PDF en ligne, sans logiciel.',
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
    }
];

export const getGuidesByCategory = (category: GuideMetadata['category']) => {
    return ALL_GUIDES.filter(guide => guide.category === category);
};

export const getAllCategories = (): GuideMetadata['category'][] => {
    return ['Privacy & Security', 'Editing', 'Conversion', 'Advanced'];
};
