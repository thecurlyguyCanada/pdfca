export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
// Backward compatibility for existing code that uses Language type
export type Language = Locale;
