/**
 * PDF Processing Configuration
 * Constants for PDF processing, rendering, and manipulation
 */

export const PDF_CONFIG = {
  // PDF.js Worker and Resources
  WORKER: {
    PATH: '/pdf.worker.min.mjs',
  },

  RESOURCES: {
    CMAPS_PATH: '/cmaps/',
    STANDARD_FONTS_PATH: '/standard_fonts/',
  },

  // Default Page Dimensions (Letter size in points)
  PAGE: {
    WIDTH: 612,
    HEIGHT: 792,
  },

  // Margins and Spacing
  LAYOUT: {
    MARGIN: 50,
    LINE_HEIGHT_OFFSET: 2,
    LINE_HEIGHT_OFFSET_LARGE: 4,
    LIST_BULLET_INDENT: 10,
  },

  // Typography
  TYPOGRAPHY: {
    DEFAULT_FONT_SIZE: 11,
    DEFAULT_FONT: 'Helvetica',
    MIN_HEADING_SIZE: 12,
    MAX_HEADING_SIZE: 24,
    HEADING_SIZE_DECREMENT: 2,
  },

  // Form Fields
  FORM: {
    CHECKBOX_SIZE_MULTIPLIER: 1.2,
    TEXT_FIELD_HEIGHT_OFFSET: 4,
    FIELD_HEIGHT_RATIO: 0.8,
    FIELD_PADDING_RATIO: 0.2,
    BORDER_COLORS: {
      LIGHT: { r: 0.9, g: 0.9, b: 0.9 },
      MEDIUM: { r: 0.8, g: 0.8, b: 0.8 },
      DARK: { r: 0.5, g: 0.5, b: 0.5 },
    },
  },

  // Rendering Settings
  RENDER: {
    DEFAULT_SCALE: 1.5,
    HIGH_QUALITY_SCALE: 2.0,
    MIN_SCALE: 1.0,
    DPI_TO_MM: 0.264583, // Conversion factor: pixels to millimeters
  },

  // Image Processing
  IMAGE: {
    DEFAULT_QUALITY: 0.85,
    HEIC_CONVERSION_QUALITY: 0.8,
    HIGH_QUALITY: 0.8,
    MEDIUM_QUALITY: 0.7,
    LOW_QUALITY: 0.4,
  },

  // Metadata
  METADATA: {
    TITLE: 'Document processed by pdfcanada.ca',
    AUTHOR: 'pdfcanada.ca',
    SUBJECT: 'PDF processed with free, privacy-focused Canadian PDF tools',
    KEYWORDS: ['PDF', 'Canada', 'Free PDF Tools', 'Privacy', 'pdfcanada.ca'],
    CREATOR: 'pdfcanada.ca - Free Canadian PDF Tools',
    PRODUCER: 'pdfcanada.ca',
  },
} as const;

/**
 * Calculate heading font size based on heading level (h1-h6)
 */
export const getHeadingFontSize = (level: number): number => {
  const { MIN_HEADING_SIZE, MAX_HEADING_SIZE, HEADING_SIZE_DECREMENT } = PDF_CONFIG.TYPOGRAPHY;
  return Math.max(MIN_HEADING_SIZE, MAX_HEADING_SIZE - (level * HEADING_SIZE_DECREMENT));
};

/**
 * Get line height based on font size
 */
export const getLineHeight = (fontSize: number, offset: number = PDF_CONFIG.LAYOUT.LINE_HEIGHT_OFFSET): number => {
  return fontSize + offset;
};
