import { ToolType } from '@/utils/types';

export interface ToolConfig {
  slug: string;
  tool: ToolType;
  title: string;
  description: string;
  keywords: string[];
}

export const TOOL_CONFIGS: ToolConfig[] = [
  {
    slug: 'delete-pdf-pages',
    tool: ToolType.DELETE,
    title: 'Delete PDF Pages',
    description:
      'Easily delete unwanted pages from your PDF files. Select multiple pages and remove them instantly. 100% free and secure - all processing happens in your browser.',
    keywords: ['delete PDF pages', 'remove PDF pages', 'PDF page remover'],
  },
  {
    slug: 'rotate-pdf',
    tool: ToolType.ROTATE,
    title: 'Rotate PDF',
    description:
      'Rotate PDF pages clockwise or counterclockwise. Fix page orientation instantly. Free, fast, and secure - your files never leave your device.',
    keywords: ['rotate PDF', 'PDF rotation', 'flip PDF pages'],
  },
  {
    slug: 'compress-pdf',
    tool: ToolType.COMPRESS,
    title: 'Compress PDF',
    description:
      'Reduce PDF file size while maintaining quality. Choose from good, balanced, or extreme compression. Free, secure, and fast compression in your browser.',
    keywords: ['compress PDF', 'reduce PDF size', 'PDF compressor'],
  },
  {
    slug: 'merge-pdf',
    tool: ToolType.MERGE,
    title: 'Merge PDF',
    description:
      'Combine multiple PDF files into one document. Drag and drop to reorder. Free, secure PDF merging - all processing happens locally.',
    keywords: ['merge PDF', 'combine PDF', 'join PDF files'],
  },
  {
    slug: 'split-pdf',
    tool: ToolType.SPLIT,
    title: 'Split PDF',
    description:
      'Split PDF into separate files by page range. Extract specific pages or split into individual pages. Free and secure.',
    keywords: ['split PDF', 'divide PDF', 'separate PDF pages'],
  },
  {
    slug: 'extract-pdf-pages',
    tool: ToolType.EXTRACT,
    title: 'Extract PDF Pages',
    description:
      'Extract specific pages from PDF documents. Create a new PDF with selected pages. Free, fast, and secure extraction.',
    keywords: ['extract PDF pages', 'PDF page extractor', 'pull PDF pages'],
  },
  {
    slug: 'crop-pdf',
    tool: ToolType.CROP,
    title: 'Crop PDF',
    description:
      'Crop PDF pages to remove unwanted margins and content. Precise cropping tools. Free, secure, and browser-based.',
    keywords: ['crop PDF', 'trim PDF', 'cut PDF margins'],
  },
  {
    slug: 'heic-to-pdf',
    tool: ToolType.HEIC_TO_PDF,
    title: 'HEIC to PDF Converter',
    description:
      'Convert HEIC (iPhone photos) to PDF format. Fast, free, and secure conversion in your browser. No uploads required.',
    keywords: ['HEIC to PDF', 'convert HEIC', 'iPhone photos to PDF'],
  },
  {
    slug: 'epub-to-pdf',
    tool: ToolType.EPUB_TO_PDF,
    title: 'EPUB to PDF Converter',
    description:
      'Convert EPUB ebooks to PDF format. Preserve formatting and layout. Free, secure conversion - no file uploads.',
    keywords: ['EPUB to PDF', 'convert ebook', 'EPUB converter'],
  },
  {
    slug: 'pdf-to-epub',
    tool: ToolType.PDF_TO_EPUB,
    title: 'PDF to EPUB Converter',
    description:
      'Convert PDF documents to EPUB ebook format. Perfect for e-readers. Free, secure, browser-based conversion.',
    keywords: ['PDF to EPUB', 'convert PDF to ebook', 'PDF to ebook'],
  },
  {
    slug: 'make-pdf-fillable',
    tool: ToolType.MAKE_FILLABLE,
    title: 'Make PDF Fillable',
    description:
      'Add fillable form fields to PDFs. Create text fields, checkboxes, and signature fields. Free, secure form creation.',
    keywords: ['make PDF fillable', 'PDF form creator', 'add form fields'],
  },
  {
    slug: 'sign-pdf',
    tool: ToolType.SIGN,
    title: 'Sign PDF',
    description:
      'Add your signature to PDF documents. Draw, type, or upload signature. Free, secure, browser-based signing.',
    keywords: ['sign PDF', 'PDF signature', 'digital signature'],
  },
  {
    slug: 'organize-pdf',
    tool: ToolType.ORGANIZE,
    title: 'Organize PDF Pages',
    description:
      'Reorder PDF pages by dragging and dropping. Arrange pages in any order. Free, secure page organization.',
    keywords: ['organize PDF', 'reorder PDF pages', 'rearrange PDF'],
  },
  {
    slug: 'pdf-to-word',
    tool: ToolType.PDF_TO_WORD,
    title: 'PDF to Word Converter',
    description:
      'Convert PDF to editable Word documents (DOCX). Preserve formatting and layout. Free, secure conversion.',
    keywords: ['PDF to Word', 'PDF to DOCX', 'convert PDF to Word'],
  },
  {
    slug: 'word-to-pdf',
    tool: ToolType.WORD_TO_PDF,
    title: 'Word to PDF Converter',
    description:
      'Convert Word documents (DOCX) to PDF format. Maintain formatting. Free, secure, browser-based conversion.',
    keywords: ['Word to PDF', 'DOCX to PDF', 'convert Word to PDF'],
  },
  {
    slug: 'make-pdf-non-editable',
    tool: ToolType.FLATTEN,
    title: 'Make PDF Non-Editable (Flatten)',
    description:
      'Flatten PDF to make it non-editable. Remove form fields and layers. Free, secure PDF flattening.',
    keywords: ['flatten PDF', 'make PDF non-editable', 'lock PDF content'],
  },
  {
    slug: 'pdf-page-remover',
    tool: ToolType.PDF_PAGE_REMOVER,
    title: 'PDF Page Remover',
    description:
      'Remove specific pages from PDF files. Select pages to delete. Free, fast, and secure page removal.',
    keywords: ['remove PDF pages', 'delete PDF pages', 'PDF page remover'],
  },
  {
    slug: 'cbr-to-pdf',
    tool: ToolType.CBR_TO_PDF,
    title: 'CBR to PDF Converter',
    description:
      'Convert CBR/CBZ comic book archives to PDF. Preserve image quality. Free, secure conversion.',
    keywords: ['CBR to PDF', 'comic book to PDF', 'CBZ to PDF'],
  },
  {
    slug: 'pdf-to-xml',
    tool: ToolType.PDF_TO_XML,
    title: 'PDF to XML Converter',
    description:
      'Extract text from PDF as XML format. Convert PDF data to structured XML. Free, secure conversion.',
    keywords: ['PDF to XML', 'convert PDF to XML', 'extract PDF data'],
  },
  {
    slug: 'xml-to-pdf',
    tool: ToolType.XML_TO_PDF,
    title: 'XML to PDF Converter',
    description:
      'Convert XML data to PDF documents. Create formatted PDFs from XML. Free, secure conversion.',
    keywords: ['XML to PDF', 'convert XML', 'XML to document'],
  },
  {
    slug: 'excel-to-pdf',
    tool: ToolType.EXCEL_TO_PDF,
    title: 'Excel to PDF Converter',
    description:
      'Convert Excel spreadsheets (XLSX) to PDF format. Preserve formatting and layout. Free, secure conversion.',
    keywords: ['Excel to PDF', 'XLSX to PDF', 'convert spreadsheet to PDF'],
  },
];

export function getToolConfig(slug: string): ToolConfig | undefined {
  return TOOL_CONFIGS.find((config) => config.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return TOOL_CONFIGS.map((config) => config.slug);
}
