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
        titleFr: 'Guide PDF vers Word',
        descEn: 'Convert PDF documents to editable Word files.',
        descFr: 'Convertissez des documents PDF en fichiers Word éditables.',
        category: 'Conversion',
        icon: '📄'
    },
    {
        slug: 'word-to-pdf',
        titleEn: 'Word to PDF Guide',
        titleFr: 'Guide Word vers PDF',
        descEn: 'Convert Word documents to PDF format.',
        descFr: 'Convertissez des documents Word au format PDF.',
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
    }
];

export const getGuidesByCategory = (category: GuideMetadata['category']) => {
    return ALL_GUIDES.filter(guide => guide.category === category);
};

export const getAllCategories = (): GuideMetadata['category'][] => {
    return ['Privacy & Security', 'Editing', 'Conversion', 'Advanced'];
};
