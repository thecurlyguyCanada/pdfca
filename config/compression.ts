/**
 * Compression Configuration
 * Settings for PDF compression levels
 */

export type CompressionLevel = 'good' | 'balanced' | 'extreme';

export const COMPRESSION_CONFIG = {
  good: {
    scale: 1.5,
    quality: 0.7,
    dpi: 150,
    description: 'Good quality, moderate file size reduction',
  },
  balanced: {
    scale: 1.5,
    quality: 0.7,
    dpi: 150,
    description: 'Balanced quality and file size',
  },
  extreme: {
    scale: 1.0,
    quality: 0.4,
    dpi: 96,
    description: 'Maximum file size reduction, lower quality',
  },
} as const;

/**
 * Get compression settings by level
 */
export const getCompressionSettings = (level: CompressionLevel) => {
  return COMPRESSION_CONFIG[level];
};

/**
 * Get scale factor for compression level
 */
export const getCompressionScale = (level: CompressionLevel): number => {
  return COMPRESSION_CONFIG[level].scale;
};

/**
 * Get quality factor for compression level
 */
export const getCompressionQuality = (level: CompressionLevel): number => {
  return COMPRESSION_CONFIG[level].quality;
};
