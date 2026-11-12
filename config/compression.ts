/**
 * Compression Configuration
 *
 * Three genuinely different levels:
 * - good:     lossless. pdf-lib re-saves the file with object streams and clears metadata.
 *             Text, links, form fields and images are untouched.
 * - balanced: every page is rendered by pdf.js at `dpi` and stored as one JPEG at `quality`.
 * - extreme:  same as balanced at a lower resolution and JPEG quality.
 *
 * The lossy levels can make a text-only PDF larger; the UI compares sizes and keeps the
 * original when the result is not smaller. Measured results are published on
 * content/tools/{en,fr}/compress-pdf.md; re-measure if you change these numbers.
 */

export type CompressionLevel = 'good' | 'balanced' | 'extreme';

export interface LosslessSettings {
  mode: 'lossless';
}

export interface RasterSettings {
  mode: 'raster';
  /** Render resolution in dots per inch (PDF user space is 72 per inch). */
  dpi: number;
  /** JPEG quality passed to canvas.toBlob, 0–1. */
  quality: number;
}

export type CompressionSettings = LosslessSettings | RasterSettings;

export const COMPRESSION_CONFIG: Record<CompressionLevel, CompressionSettings> = {
  good: { mode: 'lossless' },
  balanced: { mode: 'raster', dpi: 150, quality: 0.7 },
  extreme: { mode: 'raster', dpi: 100, quality: 0.45 },
};

/**
 * Largest canvas we render one page to, in pixels. Keeps oversized pages (posters, plans)
 * inside mobile Safari's canvas limit (~16.7 MP); such pages are rendered at a lower DPI.
 */
export const MAX_RENDER_PIXELS = 12_000_000;

/** Get compression settings by level */
export const getCompressionSettings = (level: CompressionLevel): CompressionSettings => {
  return COMPRESSION_CONFIG[level];
};

/** Levels that rasterize pages (and therefore support the grayscale option). */
export const isRasterLevel = (level: CompressionLevel): boolean => {
  return COMPRESSION_CONFIG[level].mode === 'raster';
};
