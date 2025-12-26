/**
 * Storage Configuration
 * Keys and settings for local storage and IndexedDB
 */

export const STORAGE_CONFIG = {
  // IndexedDB
  INDEXEDDB: {
    SESSION_KEY: 'vacymax_session',
    DATABASE_NAME: 'pdfcanada_db',
    VERSION: 1,
  },

  // LocalStorage keys
  LOCALSTORAGE: {
    THEME: 'pdfcanada_theme',
    LANGUAGE: 'pdfcanada_language',
    PREFERENCES: 'pdfcanada_preferences',
  },
} as const;

/**
 * Get storage key for a specific storage type
 */
export const getStorageKey = (type: 'session' | 'theme' | 'language' | 'preferences'): string => {
  switch (type) {
    case 'session':
      return STORAGE_CONFIG.INDEXEDDB.SESSION_KEY;
    case 'theme':
      return STORAGE_CONFIG.LOCALSTORAGE.THEME;
    case 'language':
      return STORAGE_CONFIG.LOCALSTORAGE.LANGUAGE;
    case 'preferences':
      return STORAGE_CONFIG.LOCALSTORAGE.PREFERENCES;
    default:
      throw new Error(`Unknown storage type: ${type}`);
  }
};
