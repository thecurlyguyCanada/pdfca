import { ToolType } from '@/utils/types';

export interface ToolConfig {
  slug: string;
  tool: ToolType;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  keywords: string[];
  keywordsFr: string[];
  accept?: string;
  i18nKey?: string;
}

export const TOOL_CONFIGS: ToolConfig[] = [
  {
    slug: 'delete-pdf-pages',
    i18nKey: 'delete',
    tool: ToolType.DELETE,
    title: 'Delete PDF Pages',
    titleFr: 'Supprimer Pages PDF',
    description: 'Easily delete unwanted pages from your PDF files. Select multiple pages and remove them instantly. 100% free and secure - all processing happens in your browser.',
    descriptionFr: 'Supprimez facilement les pages indésirables de vos fichiers PDF. Sélectionnez plusieurs pages et supprimez-les instantanément. 100% gratuit et sécurisé.',
    keywords: ['delete PDF pages', 'remove PDF pages', 'PDF page remover'],
    keywordsFr: ['supprimer pages PDF', 'retirer pages PDF', 'suppresseur pages PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'rotate-pdf',
    i18nKey: 'rotate',
    tool: ToolType.ROTATE,
    title: 'Rotate PDF',
    titleFr: 'Pivoter PDF',
    description: 'Rotate PDF pages clockwise or counterclockwise. Fix page orientation instantly. Free, fast, and secure - your files never leave your device.',
    descriptionFr: 'Faites pivoter les pages PDF dans le sens horaire ou antihoraire. Corrigez l\'orientation instantanément. Gratuit, rapide et sécurisé.',
    keywords: ['rotate PDF', 'PDF rotation', 'flip PDF pages'],
    keywordsFr: ['pivoter PDF', 'rotation PDF', 'tourner pages PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'compress-pdf',
    i18nKey: 'compress',
    tool: ToolType.COMPRESS,
    title: 'Compress PDF',
    titleFr: 'Compresser PDF',
    description: 'Reduce PDF file size while maintaining quality. Choose from good, balanced, or extreme compression. Free, secure, and fast compression in your browser.',
    descriptionFr: 'Réduisez la taille des fichiers PDF tout en maintenant la qualité. Choisissez entre compression légère, équilibrée ou extrême. Gratuit et sécurisé.',
    keywords: ['compress PDF', 'reduce PDF size', 'PDF compressor', 'convert pdf smaller'],
    keywordsFr: [
      'compresser PDF',
      'réduire taille PDF',
      'compresseur PDF',
      'convert pdf smaller',
      'compresser pdf gratuit',
      'réduire pdf en ligne',
      'diminuer taille pdf'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'merge-pdf',
    i18nKey: 'merge',
    tool: ToolType.MERGE,
    title: 'Merge PDF',
    titleFr: 'Fusionner PDF',
    description: 'Combine multiple PDF files into one document. Drag and drop to reorder. Free, secure PDF merging - all processing happens locally.',
    descriptionFr: 'Combinez plusieurs fichiers PDF en un seul document. Glissez-déposez pour réorganiser. Fusion PDF gratuite et sécurisée.',
    keywords: ['merge PDF', 'combine PDF', 'join PDF files'],
    keywordsFr: ['fusionner PDF', 'combiner PDF', 'joindre fichiers PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'split-pdf',
    i18nKey: 'split',
    tool: ToolType.SPLIT,
    title: 'Split PDF',
    titleFr: 'Diviser PDF',
    description: 'Split PDF into separate files by page range. Extract specific pages or split into individual pages. Free and secure.',
    descriptionFr: 'Divisez un PDF en fichiers séparés par plage de pages. Extrayez des pages spécifiques. Gratuit et sécurisé.',
    keywords: ['split PDF', 'divide PDF', 'separate PDF pages'],
    keywordsFr: ['diviser PDF', 'séparer PDF', 'extraire pages PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'extract-pdf-pages',
    i18nKey: 'extract',
    tool: ToolType.EXTRACT,
    title: 'Extract PDF Pages',
    titleFr: 'Extraire Pages PDF',
    description: 'Extract specific pages from PDF documents. Create a new PDF with selected pages. Free, fast, and secure extraction.',
    descriptionFr: 'Extrayez des pages spécifiques de documents PDF. Créez un nouveau PDF avec les pages sélectionnées. Gratuit et sécurisé.',
    keywords: ['extract PDF pages', 'PDF page extractor', 'pull PDF pages'],
    keywordsFr: ['extraire pages PDF', 'extracteur pages PDF', 'tirer pages PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'crop-pdf',
    i18nKey: 'crop',
    tool: ToolType.CROP,
    title: 'Crop PDF',
    titleFr: 'Recadrer PDF',
    description: 'Crop PDF pages to remove unwanted margins and content. Precise cropping tools. Free, secure, and browser-based.',
    descriptionFr: 'Recadrez les pages PDF pour supprimer les marges indésirables. Outils de recadrage précis. Gratuit et sécurisé.',
    keywords: ['crop PDF', 'trim PDF', 'cut PDF margins'],
    keywordsFr: ['recadrer PDF', 'rogner PDF', 'couper marges PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'heic-to-pdf',
    i18nKey: 'heic',
    tool: ToolType.HEIC_TO_PDF,
    title: 'HEIC to PDF',
    titleFr: 'HEIC vers PDF',
    description: 'Convert HEIC (iPhone photos) to PDF format. Fast, free, and secure conversion in your browser. No uploads required.',
    descriptionFr: 'Convertissez HEIC (photos iPhone) en format PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur.',
    keywords: ['HEIC to PDF', 'convert HEIC', 'iPhone photos to PDF'],
    keywordsFr: [
      // High volume primary keywords
      'convertir heic en pdf',
      'HEIC vers PDF',
      'convertir HEIC',
      'photos iPhone en PDF',
      'heic en pdf gratuit',
      'convertir photo heic en pdf',
      'heic vers pdf en ligne'
    ],
    accept: '.heic,.heif,image/heic,image/heif'
  },
  {
    slug: 'epub-to-pdf',
    i18nKey: 'epubToPdf',
    tool: ToolType.EPUB_TO_PDF,
    title: 'EPUB to PDF',
    titleFr: 'EPUB vers PDF',
    description: 'Convert EPUB ebooks to PDF format. Preserve formatting and layout. Free, secure conversion - no file uploads.',
    descriptionFr: 'Convertissez les ebooks EPUB en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
    keywords: ['EPUB to PDF', 'convert ebook', 'EPUB converter', 'convert epub to pdf'],
    keywordsFr: [
      // High volume primary keywords
      'convertir epub en pdf',
      'convert epub to pdf',
      'EPUB vers PDF',
      'convertir ebook',
      'convertisseur EPUB',
      'epub en pdf gratuit',
      'convertir fichier epub en pdf',
      'epub vers pdf en ligne'
    ],
    accept: '.epub,application/epub+zip'
  },
  {
    slug: 'pdf-to-epub',
    i18nKey: 'pdfToEpub',
    tool: ToolType.PDF_TO_EPUB,
    title: 'PDF to EPUB',
    titleFr: 'PDF vers EPUB',
    description: 'Convert PDF documents to EPUB ebook format. Perfect for e-readers. Free, secure, browser-based conversion.',
    descriptionFr: 'Convertissez des documents PDF en format ebook EPUB. Parfait pour les liseuses. Gratuit et sécurisé.',
    keywords: ['PDF to EPUB', 'convert PDF to ebook', 'PDF to ebook'],
    keywordsFr: ['PDF vers EPUB', 'convertir PDF en ebook', 'PDF en ebook'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-kindle',
    i18nKey: 'pdfToKindle',
    tool: ToolType.PDF_TO_KINDLE,
    title: 'PDF to Kindle',
    titleFr: 'PDF vers Kindle',
    description: 'Optimize PDFs for Kindle devices with enhanced EPUB conversion. Supports pop-up footnotes, reflowable text, and optimized margins. Private, local-first processing.',
    descriptionFr: 'Optimisez les PDF pour les appareils Kindle avec une conversion EPUB améliorée. Supporte les notes de bas de page surgissantes et le texte fluide. Traitement privé et local.',
    keywords: ['PDF to Kindle', 'Kindle converter', 'PDF to ebook Kindle', 'convert PDF for Kindle'],
    keywordsFr: ['PDF vers Kindle', 'convertisseur Kindle', 'PDF en ebook Kindle', 'convertir PDF pour Kindle'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'make-pdf-fillable',
    i18nKey: 'fillable',
    tool: ToolType.MAKE_FILLABLE,
    title: 'Make PDF Fillable',
    titleFr: 'Rendre PDF Modifiable',
    description: 'Add fillable form fields to PDFs. Create text fields, checkboxes, and signature fields. Free, secure form creation.',
    descriptionFr: 'Ajoutez des champs de formulaire modifiables aux PDF. Créez des champs texte, cases à cocher et signatures. Gratuit et sécurisé.',
    keywords: ['make PDF fillable', 'PDF form creator', 'add form fields'],
    keywordsFr: ['rendre PDF modifiable', 'créateur formulaire PDF', 'ajouter champs formulaire'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'sign-pdf',
    i18nKey: 'sign',
    tool: ToolType.SIGN,
    title: 'Sign PDF',
    titleFr: 'Signer PDF',
    description: 'Add your signature to PDF documents. Draw, type, or upload signature. Free, secure, browser-based signing.',
    descriptionFr: 'Ajoutez votre signature aux documents PDF. Dessinez, tapez ou téléchargez votre signature. Gratuit et sécurisé.',
    keywords: ['sign PDF', 'PDF signature', 'digital signature'],
    keywordsFr: ['signer PDF', 'signature PDF', 'signature numérique'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'organize-pdf',
    i18nKey: 'organizePdf',
    tool: ToolType.ORGANIZE,
    title: 'Organize PDF Pages',
    titleFr: 'Organiser Pages PDF',
    description: 'Reorder PDF pages by dragging and dropping. Arrange pages in any order. Free, secure page organization.',
    descriptionFr: 'Réorganisez les pages PDF par glisser-déposer. Arrangez les pages dans n\'importe quel ordre. Gratuit et sécurisé.',
    keywords: ['organize PDF', 'reorder PDF pages', 'rearrange PDF'],
    keywordsFr: ['organiser PDF', 'réorganiser pages PDF', 'réarranger PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-word',
    i18nKey: 'pdfToWord',
    tool: ToolType.PDF_TO_WORD,
    title: 'PDF to Word',
    titleFr: 'Convertir PDF en Word Gratuitement',
    description: 'Convert PDF to editable Word documents (DOCX). Preserve formatting and layout. Free, secure conversion.',
    descriptionFr: 'Comment convertir PDF en Word gratuitement. Convertissez vos fichiers PDF en documents Word modifiables (DOCX). Préservez le formatage. Gratuit, en ligne et sécurisé.',
    keywords: ['PDF to Word', 'PDF to DOCX', 'convert PDF to Word', 'free PDF converter'],
    keywordsFr: [
      // High volume primary keywords
      'convertir pdf',
      'convertir pdf en word',
      'convertir un pdf en word',
      'convertir pdf en word gratuit',
      'convertir un pdf en word gratuit',
      'convertir pdf en word gratuitement',
      'convertir gratuitement pdf en word',
      'convertir pdf en word en ligne gratuit',
      'convertir du pdf en word en ligne gratuit',
      'convertir pdf en word modifiable gratuit',
      'convertir un pdf en word gratuitement',
      'pdf word convertir gratuit',
      'pdf to word converter',
      'convert pdf to word',
      'convert pdf to word converter',
      'converter pdf to word',
      'convert pdf to word format',
      'pdf convert to word converter',
      'pdf to word word converter',
      'convertir pdf to word',
      'convertir pdf word',
      'convertir pdf a word',
      'convertir a pdf un word',
      'convert to word pdf',
      // Question format keywords
      'comment convertir pdf en word',
      'comment convertir un pdf en word',
      'comment convertir du pdf en word',
      'comment convertir un fichier pdf en word',
      'comment convertir des fichiers pdf en word',
      'comment convertir document pdf en word',
      'comment convertir un document pdf en word',
      'comment convertir pdf en word mac',
      'comment convertir pdf en word modifiable',
      // Additional variants
      'convertir fichier pdf en word gratuitement',
      'convertir fichier pdf',
      'pdf en word gratuit',
      'pdf vers word en ligne',
      'pdf converter',
      'pdf format converter',
      'a pdf converter',
      'converter pdf',
      'pdf convert',
      'convert pdf'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'word-to-pdf',
    i18nKey: 'wordToPdf',
    tool: ToolType.WORD_TO_PDF,
    title: 'Word to PDF',
    titleFr: 'Convertir Word en PDF Gratuitement',
    description: 'Convert Word documents (DOCX) to PDF format. Maintain formatting. Free, secure, browser-based conversion.',
    descriptionFr: 'Comment convertir Word en PDF gratuitement. Convertissez vos documents Word (DOCX) en format PDF. Maintenez le formatage. Gratuit, en ligne et sécurisé.',
    keywords: ['Word to PDF', 'DOCX to PDF', 'convert Word to PDF', 'free Word converter'],
    keywordsFr: [
      // High volume primary keywords
      'convertir word en pdf',
      'convertir en pdf',
      'convert word to pdf',
      'convert to pdf',
      'convertir en pdf gratuit',
      'convertir word en pdf gratuit',
      'convertir gratuitement word en pdf',
      'convertir word a pdf',
      'convertir un word en pdf',
      'convert to pdf format',
      'convertir fichier en pdf',
      'convertir un fichier en pdf',
      'convertir docx en pdf',
      'convertir doc en pdf',
      'convertir un document en pdf',
      'convertir en word en pdf',
      // Question format keywords
      'comment convertir document word en pdf',
      'comment convertir un document word en pdf',
      'comment convertir fichier word en pdf',
      'comment convertir un fichier word en pdf',
      'comment convertir un word en pdf',
      'comment convertir word en pdf',
      'comment convertir un document word en pdf gratuit',
      'comment convertir word en pdf mac',
      'comment convertir fichier word en pdf sur mac',
      // Additional variants
      'convertir un fichier word en pdf gratuitement',
      'word vers pdf gratuit',
      'word en pdf en ligne'
    ],
    accept: '.docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
  },
  {
    slug: 'make-pdf-non-editable',
    i18nKey: 'flatten',
    tool: ToolType.FLATTEN,
    title: 'Flatten PDF',
    titleFr: 'Aplatir PDF',
    description: 'Flatten PDF to make it non-editable. Remove form fields and layers. Free, secure PDF flattening.',
    descriptionFr: 'Aplatissez le PDF pour le rendre non modifiable. Supprimez les champs de formulaire et les calques. Gratuit et sécurisé.',
    keywords: ['flatten PDF', 'make PDF non-editable', 'lock PDF content'],
    keywordsFr: ['aplatir PDF', 'rendre PDF non modifiable', 'verrouiller contenu PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-page-remover',
    i18nKey: 'pdfPageRemover',
    tool: ToolType.PDF_PAGE_REMOVER,
    title: 'PDF Page Remover',
    titleFr: 'Suppresseur Pages PDF',
    description: 'Remove specific pages from PDF files. Select pages to delete. Free, fast, and secure page removal.',
    descriptionFr: 'Supprimez des pages spécifiques des fichiers PDF. Sélectionnez les pages à supprimer. Gratuit et sécurisé.',
    keywords: ['remove PDF pages', 'delete PDF pages', 'PDF page remover'],
    keywordsFr: ['supprimer pages PDF', 'effacer pages PDF', 'suppresseur pages PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'cbr-to-pdf',
    i18nKey: 'cbrToPdf',
    tool: ToolType.CBR_TO_PDF,
    title: 'CBR to PDF',
    titleFr: 'CBR vers PDF',
    description: 'Convert CBR/CBZ comic book archives to PDF. Preserve image quality. Free, secure conversion.',
    descriptionFr: 'Convertissez les archives de bandes dessinées CBR/CBZ en PDF. Préservez la qualité d\'image. Gratuit et sécurisé.',
    keywords: ['CBR to PDF', 'comic book to PDF', 'CBZ to PDF'],
    keywordsFr: ['CBR vers PDF', 'bande dessinée vers PDF', 'CBZ vers PDF'],
    accept: '.cbr,.cbz,.rar,.zip,application/x-cbr,application/x-cbz,application/vnd.comicbook+zip,application/vnd.comicbook+rar'
  },
  {
    slug: 'pdf-to-xml',
    i18nKey: 'pdfToXml',
    tool: ToolType.PDF_TO_XML,
    title: 'PDF to XML',
    titleFr: 'PDF vers XML',
    description: 'Extract text from PDF as XML format. Convert PDF data to structured XML. Free, secure conversion.',
    descriptionFr: 'Extrayez le texte du PDF au format XML. Convertissez les données PDF en XML structuré. Gratuit et sécurisé.',
    keywords: ['PDF to XML', 'convert PDF to XML', 'extract PDF data'],
    keywordsFr: ['PDF vers XML', 'convertir PDF en XML', 'extraire données PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'xml-to-pdf',
    i18nKey: 'xmlToPdf',
    tool: ToolType.XML_TO_PDF,
    title: 'XML to PDF',
    titleFr: 'XML vers PDF',
    description: 'Convert XML data to PDF documents. Create formatted PDFs from XML. Free, secure conversion.',
    descriptionFr: 'Convertissez les données XML en documents PDF. Créez des PDF formatés à partir de XML. Gratuit et sécurisé.',
    keywords: ['XML to PDF', 'convert XML', 'XML to document'],
    keywordsFr: ['XML vers PDF', 'convertir XML', 'XML vers document'],
    accept: '.xml,text/xml,application/xml'
  },
  {
    slug: 'excel-to-pdf',
    i18nKey: 'excelToPdf',
    tool: ToolType.EXCEL_TO_PDF,
    title: 'Excel to PDF',
    titleFr: 'Excel vers PDF',
    description: 'Convert Excel spreadsheets (XLSX) to PDF format. Preserve formatting and layout. Free, secure conversion.',
    descriptionFr: 'Convertissez les feuilles de calcul Excel (XLSX) en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
    keywords: ['Excel to PDF', 'XLSX to PDF', 'convert spreadsheet to PDF'],
    keywordsFr: [
      // High volume primary keywords
      'convertir excel en pdf',
      'Excel vers PDF',
      'XLSX vers PDF',
      'convertir feuille de calcul en PDF',
      'excel en pdf gratuit',
      'convertir fichier excel en pdf',
      'excel vers pdf en ligne'
    ],
    accept: '.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'
  },
  {
    slug: 'rtf-to-pdf',
    i18nKey: 'rtfToPdf',
    tool: ToolType.RTF_TO_PDF,
    title: 'RTF to PDF',
    titleFr: 'RTF vers PDF',
    description: 'Convert RTF (Rich Text Format) documents to PDF format. Preserve text formatting, styles, and layout. Free, secure, browser-based conversion.',
    descriptionFr: 'Convertissez les documents RTF (Rich Text Format) en format PDF. Préservez le formatage du texte, les styles et la mise en page. Gratuit et sécurisé.',
    keywords: ['RTF to PDF', 'convert RTF to PDF', 'Rich Text to PDF', 'RTF converter'],
    keywordsFr: ['RTF vers PDF', 'convertir RTF en PDF', 'texte enrichi vers PDF', 'convertisseur RTF'],
    accept: '.rtf,text/rtf,application/rtf'
  },
  {
    slug: 'invoice-ocr',
    i18nKey: 'invoiceOcr',
    tool: ToolType.INVOICE_OCR,
    title: 'Invoice OCR',
    titleFr: 'OCR Factures',
    description: 'Extract text, dates, and amounts from PDF invoices automatically. Export data to Excel/CSV. Private, local processing using AI.',
    descriptionFr: 'Extrayez automatiquement le texte, les dates et les montants des factures PDF. Exportez les données vers Excel/CSV. Traitement privé et local utilisant l\'IA.',
    keywords: ['invoice OCR', 'PDF invoice to Excel', 'extract invoice data', 'free invoice scanner'],
    keywordsFr: ['OCR facture', 'facture PDF vers Excel', 'extraire données facture', 'scanner facture gratuit'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'barcode-generator',
    i18nKey: 'barcode',
    tool: ToolType.BARCODE_GENERATOR,
    title: 'Code 128 Barcode Generator',
    titleFr: 'Générateur Code-Barres Code 128',
    description: 'Generate professional Code 128 barcodes instantly. Bulk barcode creation from Excel/CSV, add to PDFs, export as PNG/SVG. Support for Code 128A/B/C. Free, fast, and secure.',
    descriptionFr: 'Générez des codes-barres Code 128 professionnels instantanément. Création en masse depuis Excel/CSV, ajout aux PDF, export PNG/SVG. Support Code 128A/B/C. Gratuit et sécurisé.',
    keywords: ['code 128 barcode generator', 'bulk barcode generator', 'free barcode maker', 'barcode to pdf', 'excel to barcode', 'generate barcode online', 'code 128a', 'code 128b', 'code 128c'],
    keywordsFr: ['générateur code-barres code 128', 'générateur code-barres en masse', 'créateur code-barres gratuit', 'code-barres vers pdf', 'excel vers code-barres'],
    accept: '.xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv'
  },
  {
    slug: 'pdf-to-csv',
    i18nKey: 'pdftocsv',
    tool: ToolType.PDF_TO_CSV,
    title: 'PDF to CSV',
    titleFr: 'PDF vers CSV',
    description: 'Extract tables from bank statements and documents into CSV format. Smart multiline merging and local processing for maximum privacy.',
    descriptionFr: 'Extrayez les tableaux des relevés bancaires et documents au format CSV. Fusion multiligne intelligente et traitement local pour une confidentialité maximale.',
    keywords: ['PDF to CSV', 'bank statement to CSV', 'extract table from PDF', 'PDF to Excel converter'],
    keywordsFr: ['PDF vers CSV', 'relevé bancaire vers CSV', 'extraire tableau PDF', 'convertisseur PDF vers Excel'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-excel',
    i18nKey: 'pdftoexcel',
    tool: ToolType.PDF_TO_EXCEL,
    title: 'PDF to Excel',
    titleFr: 'PDF vers Excel',
    description: 'Convert PDF tables to Excel (XLSX) spreadsheets instantly. Preserve columns and formatting with local processing.',
    descriptionFr: 'Convertissez instantanément les tableaux PDF en feuilles de calcul Excel (XLSX). Préservez les colonnes et le formatage avec un traitement local.',
    keywords: ['PDF to Excel', 'PDF to XLSX', 'export PDF table to Excel'],
    keywordsFr: [
      // High volume primary keywords
      'convertir pdf en excel',
      'convert pdf to excel',
      'convert excel pdf to excel',
      'PDF vers Excel',
      'PDF vers XLSX',
      'exporter tableau PDF vers Excel',
      'convertir fichier pdf en excel',
      'pdf en excel gratuit',
      'pdf vers excel en ligne'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'analyze-pdf',
    i18nKey: 'analyzepdf',
    tool: ToolType.PHISHING_DETECTOR,
    title: 'Analyze PDF Security',
    titleFr: 'Analyser Sécurité PDF',
    description: 'Scan PDF for phishing links, malware, and scripts. View content safely without executing malicious code. 100% local analysis.',
    descriptionFr: 'Analysez les PDF pour détecter les liens d\'hameçonnage, les malwares et les scripts. Visualisez le contenu en toute sécurité sans exécuter de code malveillant. Analyse 100% locale.',
    keywords: ['analyze PDF', 'PDF security scan', 'detect phishing PDF', 'safe view PDF', 'malware scanner'],
    keywordsFr: ['analyser PDF', 'scan sécurité PDF', 'détecter hameçonnage PDF', 'vue sécurisée PDF', 'scanner malware'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'xrechnung-viewer',
    i18nKey: 'xrechnungViewer',
    tool: ToolType.XRECHNUNG_VIEWER,
    title: 'XRechnung Viewer',
    titleFr: 'Visualiseur XRechnung',
    description: 'View XRechnung (XML) invoices in a human-readable format. Free, secure, and client-side only viewer.',
    descriptionFr: 'Visualisez les factures XRechnung (XML) dans un format lisible. Visualiseur gratuit, sécurisé et 100% côté client.',
    keywords: ['XRechnung viewer', 'XML invoice viewer', 'read XRechnung', 'visualize XML invoice'],
    keywordsFr: ['visualiseur XRechnung', 'lire facture XML', 'visualiser facture XML'],
    accept: '.xml,text/xml,application/xml'
  },
  {
    slug: 'gif-to-pdf',
    i18nKey: 'gifToPdf',
    tool: ToolType.GIF_TO_PDF,
    title: 'GIF to PDF',
    titleFr: 'GIF en PDF',
    description: 'Convert GIF images to PDF documents. Static and animated GIFs supported (converts frames).',
    descriptionFr: 'Convertir des images GIF en documents PDF. Supports des GIFs animés (convertit les cadres).',
    keywords: ['gif to pdf', 'convert gif', 'image to pdf'],
    keywordsFr: ['gif en pdf', 'pdf pour gif', 'image en pdf'],
    accept: '.gif,image/gif'
  },
  {
    slug: 'aspx-to-pdf',
    i18nKey: 'aspxToPdf',
    tool: ToolType.ASPX_TO_PDF,
    title: 'ASPX to PDF',
    titleFr: 'ASPX en PDF',
    description: 'Convert ASPX source code files to PDF format for documentation or printing.',
    descriptionFr: 'Convertir les fichiers de code source ASPX en format PDF pour la documentation ou l\'impression.',
    keywords: ['aspx to pdf', 'convert aspx', 'code to pdf'],
    keywordsFr: ['html en code', 'aspx en pdf'],
    accept: '.aspx,text/plain,application/xml'
  },
  {
    slug: 'php-to-pdf',
    i18nKey: 'phpToPdf',
    tool: ToolType.PHP_TO_PDF,
    title: 'PHP to PDF',
    titleFr: 'PHP en PDF',
    description: 'Convert PHP source code files to PDF format for documentation or printing.',
    descriptionFr: 'Convertir les fichiers de code source PHP en format PDF pour la documentation ou l\'impression.',
    keywords: ['php to pdf', 'convert php', 'code to pdf', 'php source to pdf'],
    keywordsFr: ['php en pdf', 'code php en pdf', 'imprimer code php'],
    accept: '.php,text/x-php,application/x-php,text/plain'
  },
  // High-volume French keyword tools
  {
    slug: 'jpg-to-pdf',
    i18nKey: 'jpgToPdf',
    tool: ToolType.JPG_TO_PDF,
    title: 'JPG to PDF',
    titleFr: 'Convertir JPG en PDF Gratuitement',
    description: 'Convert JPG/JPEG images to PDF documents. Fast, free, and secure conversion in your browser. No uploads required.',
    descriptionFr: 'Convertissez vos images JPG/JPEG en documents PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur. Aucun téléchargement requis.',
    keywords: ['JPG to PDF', 'JPEG to PDF', 'convert JPG to PDF', 'image to PDF converter'],
    keywordsFr: [
      // High volume primary keywords (49,500+ searches)
      'convertir jpg en pdf',
      'convert jpg to pdf',
      'convertir jpg en pdf gratuit',
      'convertir jpg en pdf gratuitement',
      'pdf converter jpg to pdf',
      'convert jpg to pdf format',
      'convert from jpg to pdf format',
      // Additional variants
      'jpg en pdf gratuit',
      'jpg vers pdf en ligne',
      'convertir fichier jpg en pdf',
      'transformer jpg en pdf'
    ],
    accept: '.jpg,.jpeg,image/jpeg'
  },
  {
    slug: 'jpeg-to-pdf',
    i18nKey: 'jpegToPdf',
    tool: ToolType.JPEG_TO_PDF,
    title: 'JPEG to PDF',
    titleFr: 'Convertir JPEG en PDF Gratuitement',
    description: 'Convert JPEG images to PDF documents. Fast, free, and secure conversion in your browser.',
    descriptionFr: 'Convertissez vos images JPEG en documents PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur.',
    keywords: ['JPEG to PDF', 'convert JPEG to PDF', 'JPEG converter'],
    keywordsFr: [
      // High volume primary keywords (6,600+ searches)
      'convertir jpeg en pdf',
      'convert jpeg to pdf',
      'jpeg en pdf gratuit',
      'convertir fichier jpeg en pdf',
      'jpeg vers pdf en ligne'
    ],
    accept: '.jpg,.jpeg,image/jpeg'
  },
  {
    slug: 'png-to-pdf',
    i18nKey: 'pngToPdf',
    tool: ToolType.PNG_TO_PDF,
    title: 'PNG to PDF',
    titleFr: 'Convertir PNG en PDF Gratuitement',
    description: 'Convert PNG images to PDF documents. Preserve transparency and quality. Free, secure conversion.',
    descriptionFr: 'Convertissez vos images PNG en documents PDF. Préservez la transparence et la qualité. Gratuit et sécurisé.',
    keywords: ['PNG to PDF', 'convert PNG to PDF', 'PNG converter'],
    keywordsFr: [
      // High volume primary keywords (8,100+ searches)
      'convertir png en pdf',
      'convertir un png en pdf',
      'convertir png a pdf',
      'png en pdf gratuit',
      'convertir fichier png en pdf',
      'png vers pdf en ligne'
    ],
    accept: '.png,image/png'
  },
  {
    slug: 'image-to-pdf',
    i18nKey: 'imageToPdf',
    tool: ToolType.IMAGE_TO_PDF,
    title: 'Image to PDF',
    titleFr: 'Convertir Image en PDF Gratuitement',
    description: 'Convert any image (JPG, PNG, GIF, BMP, WebP) to PDF. Combine multiple images into one PDF. Free and secure.',
    descriptionFr: 'Convertissez n\'importe quelle image (JPG, PNG, GIF, BMP, WebP) en PDF. Combinez plusieurs images en un seul PDF. Gratuit et sécurisé.',
    keywords: ['image to PDF', 'convert image to PDF', 'photo to PDF', 'picture to PDF'],
    keywordsFr: [
      // High volume primary keywords (9,900+ searches)
      'convertir image en pdf',
      'convertir photo en pdf',
      'convertir une image en pdf',
      'convertir des images en pdf',
      'convertir une photo en pdf',
      'image en pdf gratuit',
      'photo en pdf gratuit',
      'convertir fichier image en pdf',
      'image vers pdf en ligne'
    ],
    accept: '.jpg,.jpeg,.png,.gif,.bmp,.webp,image/jpeg,image/png,image/gif,image/bmp,image/webp'
  },
  {
    slug: 'pdf-to-jpg',
    i18nKey: 'pdfToJpg',
    tool: ToolType.PDF_TO_JPG,
    title: 'PDF to JPG',
    titleFr: 'Convertir PDF en JPG Gratuitement',
    description: 'Convert PDF pages to JPG images. High quality conversion. Free, secure, and browser-based.',
    descriptionFr: 'Convertissez les pages PDF en images JPG. Conversion haute qualité. Gratuit, sécurisé et dans votre navigateur.',
    keywords: ['PDF to JPG', 'convert PDF to JPG', 'PDF to image', 'PDF to JPEG'],
    keywordsFr: [
      // High volume primary keywords (27,100+ searches)
      'convertir pdf en jpg',
      'convert pdf to jpg',
      'convert pdf document to jpg',
      'convert pdf file to jpg',
      'convert pdf to jpg format',
      'convertir un pdf en jpg',
      'convertir pdf jpg',
      'convert pdf na jpg',
      'convert a pdf to a jpg',
      // Additional variants
      'pdf en jpg gratuit',
      'pdf vers jpg en ligne',
      'convertir fichier pdf en jpg'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-png',
    i18nKey: 'pdfToPng',
    tool: ToolType.PDF_TO_PNG,
    title: 'PDF to PNG',
    titleFr: 'Convertir PDF en PNG Gratuitement',
    description: 'Convert PDF pages to PNG images with transparency support. High quality conversion.',
    descriptionFr: 'Convertissez les pages PDF en images PNG avec support de la transparence. Conversion haute qualité.',
    keywords: ['PDF to PNG', 'convert PDF to PNG', 'PDF to image PNG'],
    keywordsFr: [
      // High volume primary keywords (4,400+ searches)
      'convertir pdf en png',
      'convertir pdf a png',
      'pdf en png gratuit',
      'convertir fichier pdf en png',
      'pdf vers png en ligne'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-image',
    i18nKey: 'pdfToImage',
    tool: ToolType.PDF_TO_JPG,
    title: 'PDF to Image',
    titleFr: 'Convertir PDF en Image Gratuitement',
    description: 'Convert PDF pages to images (JPG/PNG). Extract images from PDF documents. Free and secure.',
    descriptionFr: 'Convertissez les pages PDF en images (JPG/PNG). Extrayez les images des documents PDF. Gratuit et sécurisé.',
    keywords: ['PDF to image', 'convert PDF to image', 'extract images from PDF'],
    keywordsFr: [
      // High volume primary keywords (2,400+ searches)
      'convertir pdf en image',
      'pdf en image gratuit',
      'extraire images pdf',
      'convertir fichier pdf en image'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-jpeg',
    i18nKey: 'pdfToJpeg',
    tool: ToolType.PDF_TO_JPG,
    title: 'PDF to JPEG',
    titleFr: 'Convertir PDF en JPEG Gratuitement',
    description: 'Convert PDF pages to JPEG images. High quality conversion with adjustable settings.',
    descriptionFr: 'Convertissez les pages PDF en images JPEG. Conversion haute qualité avec paramètres ajustables.',
    keywords: ['PDF to JPEG', 'convert PDF to JPEG', 'PDF JPEG converter'],
    keywordsFr: [
      // High volume primary keywords (12,100+ searches)
      'convertir pdf en jpeg',
      'convert pdf to jpeg',
      'convertir pdf jpeg',
      'pdf en jpeg gratuit',
      'convertir fichier pdf en jpeg',
      'pdf vers jpeg en ligne'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'odt-to-pdf',
    i18nKey: 'odtToPdf',
    tool: ToolType.ODT_TO_PDF,
    title: 'ODT to PDF',
    titleFr: 'Convertir ODT en PDF Gratuitement',
    description: 'Convert OpenDocument Text (ODT) files to PDF format. Preserve formatting from LibreOffice/OpenOffice documents.',
    descriptionFr: 'Convertissez les fichiers OpenDocument Text (ODT) en format PDF. Préservez le formatage des documents LibreOffice/OpenOffice.',
    keywords: ['ODT to PDF', 'convert ODT to PDF', 'OpenDocument to PDF', 'LibreOffice to PDF'],
    keywordsFr: [
      // High volume primary keywords (5,400+ searches)
      'convertir odt en pdf',
      'odt en pdf gratuit',
      'convertir fichier odt en pdf',
      'odt vers pdf en ligne',
      'libreoffice en pdf'
    ],
    accept: '.odt,application/vnd.oasis.opendocument.text'
  },
  {
    slug: 'pdf-to-ppt',
    i18nKey: 'pdfToPpt',
    tool: ToolType.PDF_TO_PPT,
    title: 'PDF to PowerPoint',
    titleFr: 'Convertir PDF en PowerPoint Gratuitement',
    description: 'Convert PDF documents to PowerPoint presentations (PPTX). Preserve slides and formatting.',
    descriptionFr: 'Convertissez les documents PDF en présentations PowerPoint (PPTX). Préservez les diapositives et le formatage.',
    keywords: ['PDF to PowerPoint', 'PDF to PPT', 'convert PDF to PPTX', 'PDF to slides'],
    keywordsFr: [
      // High volume primary keywords (3,600+ searches)
      'convertir pdf en ppt',
      'convertir pdf en powerpoint',
      'pdf en ppt gratuit',
      'pdf en powerpoint gratuit',
      'convertir fichier pdf en powerpoint',
      'pdf vers powerpoint en ligne'
    ],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'ppt-to-pdf',
    i18nKey: 'pptToPdf',
    tool: ToolType.PPT_TO_PDF,
    title: 'PowerPoint to PDF',
    titleFr: 'Convertir PowerPoint en PDF Gratuitement',
    description: 'Convert PowerPoint presentations (PPTX/PPT) to PDF format. Preserve slides and animations.',
    descriptionFr: 'Convertissez les présentations PowerPoint (PPTX/PPT) en format PDF. Préservez les diapositives et les animations.',
    keywords: ['PowerPoint to PDF', 'PPT to PDF', 'convert PPTX to PDF', 'slides to PDF'],
    keywordsFr: [
      // High volume primary keywords (2,400+ searches)
      'convertir ppt en pdf',
      'convertir powerpoint en pdf',
      'ppt en pdf gratuit',
      'powerpoint en pdf gratuit',
      'convertir fichier powerpoint en pdf',
      'powerpoint vers pdf en ligne'
    ],
    accept: '.pptx,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint'
  },
  {
    slug: 'pages-to-pdf',
    i18nKey: 'pagesToPdf',
    tool: ToolType.PAGES_TO_PDF,
    title: 'Pages to PDF',
    titleFr: 'Convertir Pages en PDF Gratuitement',
    description: 'Convert Apple Pages documents to PDF format. Extract content from .pages files. Free, secure, browser-based conversion.',
    descriptionFr: 'Convertissez les documents Apple Pages en format PDF. Extrayez le contenu des fichiers .pages. Gratuit, sécurisé et dans votre navigateur.',
    keywords: ['Pages to PDF', 'convert Pages to PDF', 'Apple Pages converter', 'iWork to PDF'],
    keywordsFr: [
      // High volume primary keywords (2,900+ searches)
      'convertir pages en pdf',
      'pages en pdf',
      'pages en pdf gratuit',
      'convertir fichier pages en pdf',
      'pages vers pdf en ligne',
      'apple pages en pdf',
      'convertir document pages en pdf'
    ],
    accept: '.pages,application/vnd.apple.pages'
  }
];

export function getToolConfig(slug: string): ToolConfig | undefined {
  return TOOL_CONFIGS.find((config) => config.slug === slug);
}

export function getLocalizedToolConfig(slug: string, lang: 'en' | 'fr'): { slug: string; title: string; description: string; keywords: string[] } | undefined {
  const config = TOOL_CONFIGS.find((c) => c.slug === slug);
  if (!config) return undefined;

  return {
    slug: config.slug,
    title: lang === 'fr' ? config.titleFr : config.title,
    description: lang === 'fr' ? config.descriptionFr : config.description,
    keywords: lang === 'fr' ? config.keywordsFr : config.keywords,
  };
}

export function getAllToolSlugs(): string[] {
  return TOOL_CONFIGS.map((config) => config.slug);
}
