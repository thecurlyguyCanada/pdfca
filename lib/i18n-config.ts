/** Languages the site publishes. Portuguese was retired in Nov 2026 (see lib/retired.ts); its strings
 *  stay in the type so the existing translation records keep compiling, but no /pt/ route is built. */
export type Locale = 'en' | 'fr' | 'pt';

export const i18n = {
    defaultLocale: 'en' as Locale,
    locales: ['en', 'fr'] as readonly Locale[],
} as const;
// Backward compatibility for existing code that uses Language type
export type Language = Locale;
