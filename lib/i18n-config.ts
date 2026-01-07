export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    // NOTE: German ('de') was removed because translations are incomplete across 30+ files
    // Re-add 'de' once all components have German translations
} as const;

export type Locale = (typeof i18n)['locales'][number];
