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
}

export const TOOL_CONFIGS: ToolConfig[] = [
  {
    slug: 'delete-pdf-pages',
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
    tool: ToolType.COMPRESS,
    title: 'Compress PDF',
    titleFr: 'Compresser PDF',
    description: 'Reduce PDF file size while maintaining quality. Choose from good, balanced, or extreme compression. Free, secure, and fast compression in your browser.',
    descriptionFr: 'Réduisez la taille des fichiers PDF tout en maintenant la qualité. Choisissez entre compression légère, équilibrée ou extrême. Gratuit et sécurisé.',
    keywords: ['compress PDF', 'reduce PDF size', 'PDF compressor'],
    keywordsFr: ['compresser PDF', 'réduire taille PDF', 'compresseur PDF'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'merge-pdf',
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
    tool: ToolType.HEIC_TO_PDF,
    title: 'HEIC to PDF',
    titleFr: 'HEIC vers PDF',
    description: 'Convert HEIC (iPhone photos) to PDF format. Fast, free, and secure conversion in your browser. No uploads required.',
    descriptionFr: 'Convertissez HEIC (photos iPhone) en format PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur.',
    keywords: ['HEIC to PDF', 'convert HEIC', 'iPhone photos to PDF'],
    keywordsFr: ['HEIC vers PDF', 'convertir HEIC', 'photos iPhone en PDF'],
    accept: '.heic,.heif,image/heic,image/heif'
  },
  {
    slug: 'epub-to-pdf',
    tool: ToolType.EPUB_TO_PDF,
    title: 'EPUB to PDF',
    titleFr: 'EPUB vers PDF',
    description: 'Convert EPUB ebooks to PDF format. Preserve formatting and layout. Free, secure conversion - no file uploads.',
    descriptionFr: 'Convertissez les ebooks EPUB en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
    keywords: ['EPUB to PDF', 'convert ebook', 'EPUB converter'],
    keywordsFr: ['EPUB vers PDF', 'convertir ebook', 'convertisseur EPUB'],
    accept: '.epub,application/epub+zip'
  },
  {
    slug: 'pdf-to-epub',
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
    slug: 'make-pdf-fillable',
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
    tool: ToolType.PDF_TO_WORD,
    title: 'PDF to Word',
    titleFr: 'PDF vers Word',
    description: 'Convert PDF to editable Word documents (DOCX). Preserve formatting and layout. Free, secure conversion.',
    descriptionFr: 'Convertissez PDF en documents Word modifiables (DOCX). Préservez le formatage et la mise en page. Gratuit et sécurisé.',
    keywords: ['PDF to Word', 'PDF to DOCX', 'convert PDF to Word'],
    keywordsFr: ['PDF vers Word', 'PDF vers DOCX', 'convertir PDF en Word'],
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'word-to-pdf',
    tool: ToolType.WORD_TO_PDF,
    title: 'Word to PDF',
    titleFr: 'Word vers PDF',
    description: 'Convert Word documents (DOCX) to PDF format. Maintain formatting. Free, secure, browser-based conversion.',
    descriptionFr: 'Convertissez les documents Word (DOCX) en format PDF. Maintenez le formatage. Gratuit et sécurisé.',
    keywords: ['Word to PDF', 'DOCX to PDF', 'convert Word to PDF'],
    keywordsFr: ['Word vers PDF', 'DOCX vers PDF', 'convertir Word en PDF'],
    accept: '.docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
  },
  {
    slug: 'make-pdf-non-editable',
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
    tool: ToolType.EXCEL_TO_PDF,
    title: 'Excel to PDF',
    titleFr: 'Excel vers PDF',
    description: 'Convert Excel spreadsheets (XLSX) to PDF format. Preserve formatting and layout. Free, secure conversion.',
    descriptionFr: 'Convertissez les feuilles de calcul Excel (XLSX) en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
    keywords: ['Excel to PDF', 'XLSX to PDF', 'convert spreadsheet to PDF'],
    keywordsFr: ['Excel vers PDF', 'XLSX vers PDF', 'convertir feuille de calcul en PDF'],
    accept: '.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'
  },
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
