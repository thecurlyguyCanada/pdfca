export enum ToolType {
    DELETE = 'DELETE',
    ROTATE = 'ROTATE',
    HEIC_TO_PDF = 'HEIC_TO_PDF',
    EPUB_TO_PDF = 'EPUB_TO_PDF',
    PDF_TO_EPUB = 'PDF_TO_EPUB',
    MAKE_FILLABLE = 'MAKE_FILLABLE',
    CBR_TO_PDF = 'CBR_TO_PDF',
    SIGN = 'SIGN',
    ORGANIZE = 'ORGANIZE',
    PDF_TO_WORD = 'PDF_TO_WORD',
    WORD_TO_PDF = 'WORD_TO_PDF',
    PDF_PAGE_REMOVER = 'PDF_PAGE_REMOVER',
    FLATTEN = 'FLATTEN',
    CROP = 'CROP',
    COMPRESS = 'COMPRESS',
    MERGE = 'MERGE',
    SPLIT = 'SPLIT',
    EXTRACT = 'EXTRACT',
    PDF_TO_XML = 'PDF_TO_XML',
    XML_TO_PDF = 'XML_TO_PDF',
    EXCEL_TO_PDF = 'EXCEL_TO_PDF',
    RTF_TO_PDF = 'RTF_TO_PDF',
    INVOICE_OCR = 'INVOICE_OCR',
    BARCODE_GENERATOR = 'BARCODE_GENERATOR',
    PDF_TO_CSV = 'PDF_TO_CSV',
    PDF_TO_EXCEL = 'PDF_TO_EXCEL',
    PHISHING_DETECTOR = 'PHISHING_DETECTOR',
    PDF_TO_KINDLE = 'PDF_TO_KINDLE',
    XRECHNUNG_VIEWER = 'XRECHNUNG_VIEWER',
    HTML_TO_PDF = 'HTML_TO_PDF',
    GIF_TO_PDF = 'GIF_TO_PDF',
    ASPX_TO_PDF = 'ASPX_TO_PDF',
    PHP_TO_PDF = 'PHP_TO_PDF',
    // Image conversion tools (high-volume French keywords)
    JPG_TO_PDF = 'JPG_TO_PDF',
    PDF_TO_JPG = 'PDF_TO_JPG',
    PNG_TO_PDF = 'PNG_TO_PDF',
    PDF_TO_PNG = 'PDF_TO_PNG',
    IMAGE_TO_PDF = 'IMAGE_TO_PDF',
    JPEG_TO_PDF = 'JPEG_TO_PDF',
    // Document conversion tools
    ODT_TO_PDF = 'ODT_TO_PDF',
    PDF_TO_PPT = 'PDF_TO_PPT',
    PPT_TO_PDF = 'PPT_TO_PDF',
    PAGES_TO_PDF = 'PAGES_TO_PDF',
    PDF_TO_UBL = 'PDF_TO_UBL'
}

export enum AppState {
    HOME,
    SELECTING,
    PROCESSING,
    DONE,
    ERROR,
    EDITING_FORM,
    PREVIEW,
    COMPLETE
}

export type CurrentView = 'HOME' | 'PRICING' | 'PRIVACY' | 'TERMS' | 'SORRY' | 'HOW_TO' | 'SUPPORT' | 'MAKE_FILLABLE_INFO' | 'TOOL_PAGE' | 'ABOUT' |
    'GUIDE_ULTIMATE' | 'GUIDE_DELETE_PAGES' | 'GUIDE_ROTATE' | 'GUIDE_HEIC_TO_PDF' | 'GUIDE_EPUB_TO_PDF' | 'GUIDE_PDF_TO_EPUB' | 'GUIDE_ORGANIZE' | 'GUIDE_FILLABLE' | 'GUIDE_EMAIL_TO_PDF' | 'GUIDE_CBR_TO_PDF' |
    'GUIDE_PDF_TO_WORD' | 'GUIDE_WORD_TO_PDF' | 'GUIDE_PDF_PAGE_REMOVER' | 'GUIDE_FLATTEN' | 'GUIDE_CROP' | 'GUIDE_COMPRESS' | 'GUIDE_MERGE' | 'GUIDE_EDIT_XFA' | 'GUIDE_INSERT_PICTURE' | 'GUIDE_SPLIT' | 'GUIDE_SIGN' | 'GUIDE_EXCEL_TO_PDF' | 'GUIDE_INVOICE_OCR' | 'GUIDE_BARCODE_GENERATOR' | 'GUIDE_PDF_TO_CSV' | 'GUIDE_PDF_TO_EXCEL';

export interface InvoiceLineItem {
    description?: string;
    quantity?: number;
    unitPrice?: number;
    amount?: number;
}

export interface InvoiceData {
    id?: string;
    date?: string; // Standard format YYYY-MM-DD
    total?: number;
    vendor?: string;
    currency?: string;
    subtotal?: number;
    tax?: number;
    dueDate?: string;
    poNumber?: string; // Purchase Order Number
    paymentTerms?: string;
    lineItems?: InvoiceLineItem[];
    confidence: number;
    fieldConfidence?: {
        vendor?: number;
        id?: number;
        date?: number;
        total?: number;
        subtotal?: number;
        tax?: number;
        dueDate?: number;
        poNumber?: number;
    };
}
