/**
 * URL Configuration
 * Centralized URL management for the application
 */

export const URLS = {
  // Domain and base URLs
  DOMAIN: 'https://www.pdfcanada.ca',

  // Social media & Knowledge Graph sameAs links
  TWITTER: 'https://twitter.com/pdfcanada',
  GITHUB: 'https://github.com/thecurlyguyCanada/pdfca',

  // sameAs array for Knowledge Graph entity recognition
  SAME_AS: [
    'https://twitter.com/pdfcanada',
    'https://github.com/thecurlyguyCanada/pdfca',
  ],

  // Assets
  OG_IMAGE: '/og-image.png',
  ANDROID_ICON: '/android-chrome-512x512.png',

  // Payment (should be moved to environment variable in production)
  STRIPE_PAYMENT_LINK: 'https://buy.stripe.com/8wW28t4yIdCx2mE2ic6Zy04',
} as const;

/**
 * Get full URL by combining domain with path
 */
export const getFullUrl = (path: string): string => {
  const normalizedPath = path.charAt(0) === '/' ? path : `/${path}`;
  return `${URLS.DOMAIN}${normalizedPath}`;
};

/**
 * Get asset URL
 */
export const getAssetUrl = (assetPath: string): string => {
  return `${URLS.DOMAIN}${assetPath}`;
};
