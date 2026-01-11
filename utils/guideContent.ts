import { Language } from './i18n';

export const getGuideContent = (lang: Language) => {
    return {
        en: {
            // Shared strings can go here
            processing: "Processing...",
            download: "Download",
        },
        fr: {
            processing: "Traitement...",
            download: "Télécharger",
        },
        pt: {
            processing: "Processando...",
            download: "Baixar",
        }
    };
};
