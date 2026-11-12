/**
 * Self-hosted heavy browser assets, copied into public/vendor by scripts/copy-vendor.mjs (postinstall,
 * predev, prebuild). Versioned folders, cached as immutable in next.config.ts. No third-party CDN is
 * involved, so "works offline once loaded" is literally true. The copy script fails the build if these
 * versions drift from node_modules.
 */
export const PDFJS_VERSION = '4.10.38';
export const TESSERACT_VERSION = '7.0.0';

export const PDFJS_WORKER = `/vendor/pdfjs-${PDFJS_VERSION}/pdf.worker.min.mjs`;
export const PDFJS_CMAPS = '/cmaps/';
export const PDFJS_FONTS = '/standard_fonts/';

export const TESSERACT_WORKER = `/vendor/tesseract-${TESSERACT_VERSION}/worker.min.js`;
export const TESSERACT_CORE = `/vendor/tesseract-${TESSERACT_VERSION}/core`;
export const TESSDATA = '/vendor/tessdata-4.0.0_best_int';
