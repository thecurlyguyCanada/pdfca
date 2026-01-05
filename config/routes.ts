/**
 * Route Configuration
 * Centralized routing paths for the application
 */

export const ROUTES = {
  // Home
  HOME: '/',

  // PDF Tools
  DELETE_PDF_PAGES: '/delete-pdf-pages',
  ROTATE_PDF: '/rotate-pdf',
  COMPRESS_PDF: '/compress-pdf',
  MERGE_PDF: '/merge-pdf',
  SPLIT_PDF: '/split-pdf',
  EXTRACT_PDF_PAGES: '/extract-pdf-pages',
  CROP_PDF: '/crop-pdf',

  // Conversion Tools
  PDF_TO_XML: '/pdf-to-xml',
  XML_TO_PDF: '/xml-to-pdf',
  EXCEL_TO_PDF: '/excel-to-pdf',
  XRECHNUNG_VIEWER: '/xrechnung-viewer',
  GIF_TO_PDF: '/gif-to-pdf',
  ASPX_TO_PDF: '/aspx-to-pdf',
  PHP_TO_PDF: '/php-to-pdf',

  // Information Pages
  PRICING: '/pricing',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  HOWTO: '/howto',
  SUPPORT: '/support',
  ABOUT: '/about',
  SORRY: '/sorry',

  // Guides
  GUIDES: {
    ULTIMATE_PDF_GUIDE: '/guides/ultimate-pdf-guide',
    DELETE_PDF_PAGES: '/guides/delete-pdf-pages',
    ROTATE_PDF: '/guides/rotate-pdf',
    HEIC_TO_PDF: '/guides/heic-to-pdf',
    EPUB_TO_PDF: '/guides/epub-to-pdf',
    PDF_TO_EPUB: '/guides/pdf-to-epub',
    ORGANIZE_PDF: '/guides/organize-pdf',
    MAKE_PDF_FILLABLE: '/guides/make-pdf-fillable',
    EMAIL_TO_PDF: '/guides/email-to-pdf',
    CBR_TO_PDF: '/guides/cbr-to-pdf',
    PDF_TO_WORD: '/guides/pdf-to-word',
    WORD_TO_PDF: '/guides/word-to-pdf',
    PDF_PAGE_REMOVER: '/guides/pdf-page-remover',
    MAKE_PDF_NON_EDITABLE: '/guides/make-pdf-non-editable',
    CROP_PDF: '/guides/crop-pdf',
    COMPRESS_PDF: '/guides/compress-pdf',
    MERGE_PDF: '/guides/merge-pdf',
    EDIT_XFA_PDF: '/guides/edit-xfa-pdf',
    INSERT_PICTURE_IN_PDF: '/guides/insert-picture-in-pdf',
  },

  // Special
  HOW_TO_MAKE_PDF_FILLABLE: '/how-to-make-a-pdf-fillable',
} as const;

/**
 * Get all tool routes as an array
 */
export const getAllToolRoutes = (): string[] => {
  return [
    ROUTES.DELETE_PDF_PAGES,
    ROUTES.ROTATE_PDF,
    ROUTES.COMPRESS_PDF,
    ROUTES.MERGE_PDF,
    ROUTES.SPLIT_PDF,
    ROUTES.EXTRACT_PDF_PAGES,
    ROUTES.CROP_PDF,
    ROUTES.PDF_TO_XML,
    ROUTES.XML_TO_PDF,
    ROUTES.EXCEL_TO_PDF,
    ROUTES.XRECHNUNG_VIEWER,
  ];
};

/**
 * Get all guide routes as an array
 */
export const getAllGuideRoutes = (): string[] => {
  const guides = ROUTES.GUIDES;
  return [
    guides.ULTIMATE_PDF_GUIDE,
    guides.DELETE_PDF_PAGES,
    guides.ROTATE_PDF,
    guides.HEIC_TO_PDF,
    guides.EPUB_TO_PDF,
    guides.PDF_TO_EPUB,
    guides.ORGANIZE_PDF,
    guides.MAKE_PDF_FILLABLE,
    guides.EMAIL_TO_PDF,
    guides.CBR_TO_PDF,
    guides.PDF_TO_WORD,
    guides.WORD_TO_PDF,
    guides.PDF_PAGE_REMOVER,
    guides.MAKE_PDF_NON_EDITABLE,
    guides.CROP_PDF,
    guides.COMPRESS_PDF,
    guides.MERGE_PDF,
    guides.EDIT_XFA_PDF,
    guides.INSERT_PICTURE_IN_PDF,
  ];
};
