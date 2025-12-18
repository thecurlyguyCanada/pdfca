export enum ToolType {
    DELETE = 'DELETE',
    ROTATE = 'ROTATE',
    HEIC_TO_PDF = 'HEIC_TO_PDF',
    EPUB_TO_PDF = 'EPUB_TO_PDF',
    PDF_TO_EPUB = 'PDF_TO_EPUB',
    MAKE_FILLABLE = 'MAKE_FILLABLE',
    OCR = 'OCR',
    ORGANIZE = 'ORGANIZE'
}

export enum AppState {
    HOME,
    SELECTING,
    PROCESSING,
    DONE,
    ERROR,
    EDITING_OCR,
    EDITING_FORM
}

export type CurrentView = 'HOME' | 'PRICING' | 'PRIVACY' | 'TERMS' | 'SORRY' | 'HOW_TO' | 'SUPPORT' | 'MAKE_FILLABLE_INFO' | 'TOOL_PAGE';
