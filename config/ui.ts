/**
 * UI Configuration
 * User interface constants and settings
 */

export const UI_CONFIG = {
  // Zoom settings
  ZOOM: {
    MIN: 0.5,
    MAX: 5.0,
    DEFAULT: 1.0,
    STEP: 0.1,
  },

  // Responsive breakpoints (matching Tailwind defaults)
  BREAKPOINTS: {
    SM: 640,    // Mobile
    MD: 768,    // Tablet
    LG: 1024,   // Desktop
    XL: 1280,   // Large desktop
    '2XL': 1536, // Extra large desktop
  },

  // Safe area insets for mobile devices
  SAFE_AREA: {
    TOP: 'max(16px, var(--safe-area-inset-top))',
    BOTTOM: 'max(16px, var(--safe-area-inset-bottom))',
  },

  // Animation durations (in milliseconds)
  ANIMATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
} as const;

/**
 * Check if current viewport width is desktop
 */
export const isDesktop = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth >= UI_CONFIG.BREAKPOINTS.LG;
};

/**
 * Check if current viewport width is mobile
 */
export const isMobile = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth < UI_CONFIG.BREAKPOINTS.MD;
};

/**
 * Check if current viewport width is tablet
 */
export const isTablet = (): boolean => {
  return typeof window !== 'undefined' &&
         window.innerWidth >= UI_CONFIG.BREAKPOINTS.MD &&
         window.innerWidth < UI_CONFIG.BREAKPOINTS.LG;
};
