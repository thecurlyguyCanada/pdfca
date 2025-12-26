/**
 * Heavy Conversion Utilities
 *
 * This module contains PDF conversion functions that use large libraries (500KB+).
 * It's designed to be dynamically imported only when these conversions are needed,
 * preventing heavy libraries from being loaded on initial page load.
 *
 * Heavy libraries used here:
 * - heic2any (500KB+) - HEIC image conversion
 * - mammoth + jsPDF (800KB+) - Word to PDF conversion
 * - docx (500KB+) - PDF to Word conversion
 * - xlsx + jsPDF (1MB+) - Excel to PDF conversion
 * - jszip (200KB+) - CBR/CBZ/ZIP handling
 */

export {
  convertHeicToPdf,
  convertCbrToPdf,
  convertPdfToWord,
  convertWordToPdf,
  convertExcelToPdf
} from './pdfUtils';
