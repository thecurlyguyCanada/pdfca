import type { Locale } from './i18n-config';

/**
 * The homepage hub: every live tool, grouped by job, with one plain line each (playbook "Internal
 * links": Organize, Convert from PDF, Convert to PDF, Edit and Sign, Optimize, Scan and OCR).
 * scripts/check-content.mjs fails the build if a live tool is missing here or a slug here is not live.
 */

type L = { en: string; fr: string };

export interface HubTool {
    slug: string;
    name: L;
    short: L;
}

export interface ToolGroup {
    id: string;
    name: L;
    tools: HubTool[];
}

export const TOOL_GROUPS: ToolGroup[] = [
    {
        id: 'optimize',
        name: { en: 'Optimize and secure', fr: 'Optimiser et sécuriser' },
        tools: [
            { slug: 'compress-pdf', name: { en: 'Compress PDF', fr: 'Compresser un PDF' }, short: { en: 'Shrink a PDF for email, IRCC and job portals', fr: 'Réduire un PDF pour un courriel, IRCC ou un portail' } },
            { slug: 'protect-pdf', name: { en: 'Protect PDF', fr: 'Protéger un PDF' }, short: { en: 'Add a password needed to open the file', fr: 'Ajouter un mot de passe à l’ouverture' } },
            { slug: 'flatten-pdf', name: { en: 'Flatten PDF', fr: 'Aplatir un PDF' }, short: { en: 'Lock form fields and annotations into the page', fr: 'Figer les champs et annotations dans la page' } },
            { slug: 'compare-pdf', name: { en: 'Compare PDF', fr: 'Comparer des PDF' }, short: { en: 'See every changed word, number and date', fr: 'Voir chaque mot, nombre et date modifiés' } },
        ],
    },
    {
        id: 'organize',
        name: { en: 'Organize', fr: 'Organiser' },
        tools: [
            { slug: 'merge-pdf', name: { en: 'Merge PDF', fr: 'Fusionner des PDF' }, short: { en: 'Combine several PDFs into one file', fr: 'Combiner plusieurs PDF en un seul fichier' } },
            { slug: 'split-pdf', name: { en: 'Split PDF', fr: 'Diviser un PDF' }, short: { en: 'Split by page ranges or into single pages', fr: 'Diviser par plages de pages ou page par page' } },
            { slug: 'split-pdf-by-size', name: { en: 'Split PDF by Size', fr: 'Diviser un PDF par taille' }, short: { en: 'Cut a PDF into parts under an upload limit', fr: 'Couper un PDF en parties sous une limite de taille' } },
            { slug: 'split-pdf-in-half', name: { en: 'Split PDF Pages in Half', fr: 'Couper les pages PDF en deux' }, short: { en: 'Turn two-page book scans into single pages', fr: 'Séparer les doubles pages numérisées' } },
            { slug: 'alternate-mix-pdf', name: { en: 'Alternate and Mix PDF', fr: 'Alterner et mélanger des PDF' }, short: { en: 'Interleave front and back scans into one PDF', fr: 'Intercaler recto et verso dans un seul PDF' } },
            { slug: 'organize-pdf', name: { en: 'Organize PDF', fr: 'Organiser un PDF' }, short: { en: 'Reorder pages by dragging thumbnails', fr: 'Réordonner les pages par glisser-déposer' } },
            { slug: 'delete-pdf-pages', name: { en: 'Delete PDF Pages', fr: 'Supprimer des pages PDF' }, short: { en: 'Remove the pages you don’t need', fr: 'Retirer les pages inutiles' } },
            { slug: 'extract-pdf-pages', name: { en: 'Extract PDF Pages', fr: 'Extraire des pages PDF' }, short: { en: 'Save chosen pages as a new PDF', fr: 'Enregistrer certaines pages dans un nouveau PDF' } },
            { slug: 'rotate-pdf', name: { en: 'Rotate PDF', fr: 'Pivoter un PDF' }, short: { en: 'Turn sideways or upside-down pages and save', fr: 'Redresser les pages et enregistrer' } },
        ],
    },
    {
        id: 'convert-from',
        name: { en: 'Convert from PDF', fr: 'Convertir depuis un PDF' },
        tools: [
            { slug: 'pdf-to-word', name: { en: 'PDF to Word', fr: 'PDF vers Word' }, short: { en: 'Turn a PDF into an editable .docx', fr: 'Transformer un PDF en .docx modifiable' } },
            { slug: 'pdf-to-excel', name: { en: 'PDF to Excel', fr: 'PDF vers Excel' }, short: { en: 'Pull tables and rows into a spreadsheet', fr: 'Extraire tableaux et lignes dans un chiffrier' } },
            { slug: 'pdf-to-jpg', name: { en: 'PDF to JPG', fr: 'PDF vers JPG' }, short: { en: 'Turn each page into a JPG image', fr: 'Transformer chaque page en image JPG' } },
            { slug: 'pdf-to-png', name: { en: 'PDF to PNG', fr: 'PDF vers PNG' }, short: { en: 'Sharp, lossless PNG images of each page', fr: 'Des images PNG nettes, sans perte' } },
            { slug: 'pdf-to-ppt', name: { en: 'PDF to PowerPoint', fr: 'PDF vers PowerPoint' }, short: { en: 'One slide per PDF page', fr: 'Une diapositive par page' } },
            { slug: 'pdf-to-epub', name: { en: 'PDF to EPUB', fr: 'PDF vers EPUB' }, short: { en: 'Reflowable e-book for readers and phones', fr: 'Livre numérique pour liseuses et téléphones' } },
        ],
    },
    {
        id: 'convert-to',
        name: { en: 'Convert to PDF', fr: 'Convertir en PDF' },
        tools: [
            { slug: 'jpg-to-pdf', name: { en: 'JPG to PDF', fr: 'JPG vers PDF' }, short: { en: 'Turn JPG, PNG or other images into one PDF', fr: 'Transformer des images JPG ou PNG en un PDF' } },
            { slug: 'word-to-pdf', name: { en: 'Word to PDF', fr: 'Word vers PDF' }, short: { en: 'Convert a .docx file to PDF', fr: 'Convertir un fichier .docx en PDF' } },
            { slug: 'excel-to-pdf', name: { en: 'Excel to PDF', fr: 'Excel vers PDF' }, short: { en: 'Print a spreadsheet to a clean PDF', fr: 'Transformer un chiffrier en PDF' } },
            { slug: 'heic-to-pdf', name: { en: 'HEIC to PDF', fr: 'HEIC vers PDF' }, short: { en: 'iPhone photos straight to PDF', fr: 'Photos d’iPhone directement en PDF' } },
            { slug: 'epub-to-pdf', name: { en: 'EPUB to PDF', fr: 'EPUB vers PDF' }, short: { en: 'Print an e-book to a fixed-layout PDF', fr: 'Transformer un livre numérique en PDF' } },
        ],
    },
    {
        id: 'edit-sign',
        name: { en: 'Edit and sign', fr: 'Modifier et signer' },
        tools: [
            { slug: 'sign-pdf', name: { en: 'Sign PDF', fr: 'Signer un PDF' }, short: { en: 'Draw or type a signature and place it', fr: 'Dessiner ou taper une signature et la placer' } },
            { slug: 'add-image-to-pdf', name: { en: 'Add Image to PDF', fr: 'Ajouter une image à un PDF' }, short: { en: 'Place a logo, stamp or photo on a page', fr: 'Placer un logo, un tampon ou une photo' } },
            { slug: 'add-page-numbers', name: { en: 'Add Page Numbers', fr: 'Numéroter les pages' }, short: { en: 'Number every page in the format you choose', fr: 'Numéroter chaque page dans le format choisi' } },
            { slug: 'watermark-pdf', name: { en: 'Watermark PDF', fr: 'Filigrane PDF' }, short: { en: 'Stamp DRAFT or CONFIDENTIAL across pages', fr: 'Apposer BROUILLON ou CONFIDENTIEL sur les pages' } },
            { slug: 'crop-pdf', name: { en: 'Crop PDF', fr: 'Recadrer un PDF' }, short: { en: 'Trim margins off pages', fr: 'Rogner les marges des pages' } },
            { slug: 'make-pdf-fillable', name: { en: 'Make PDF Fillable', fr: 'Rendre un PDF remplissable' }, short: { en: 'Add form fields people can type into', fr: 'Ajouter des champs de formulaire' } },
        ],
    },
    {
        id: 'scan-ocr',
        name: { en: 'Scan and OCR', fr: 'Numériser et OCR' },
        tools: [
            { slug: 'scan-to-pdf', name: { en: 'Scan to PDF', fr: 'Numériser en PDF' }, short: { en: 'Use your phone camera to scan paper into a PDF', fr: 'Numériser du papier avec la caméra du téléphone' } },
            { slug: 'ocr-pdf', name: { en: 'OCR PDF', fr: 'OCR PDF' }, short: { en: 'Make a scanned PDF searchable and copyable', fr: 'Rendre un PDF numérisé consultable' } },
        ],
    },
];

export const hubName = (slug: string, lang: Locale): string | undefined => {
    for (const g of TOOL_GROUPS) for (const t of g.tools) if (t.slug === slug) return lang === 'fr' ? t.name.fr : t.name.en;
    return undefined;
};

export const hubShort = (slug: string, lang: Locale): string | undefined => {
    for (const g of TOOL_GROUPS) for (const t of g.tools) if (t.slug === slug) return lang === 'fr' ? t.short.fr : t.short.en;
    return undefined;
};

export const groupOf = (slug: string) => TOOL_GROUPS.find((g) => g.tools.some((t) => t.slug === slug));

/** 3–4 truly related tools per live tool, most useful first (playbook "Internal links"). */
export const RELATED: Record<string, string[]> = {
    'compress-pdf': ['split-pdf-by-size', 'ocr-pdf', 'merge-pdf', 'split-pdf'],
    'protect-pdf': ['flatten-pdf', 'watermark-pdf', 'sign-pdf'],
    'flatten-pdf': ['protect-pdf', 'sign-pdf', 'make-pdf-fillable', 'compress-pdf'],
    'compare-pdf': ['ocr-pdf', 'pdf-to-word', 'merge-pdf'],
    'merge-pdf': ['split-pdf', 'compress-pdf', 'organize-pdf', 'alternate-mix-pdf'],
    'split-pdf': ['split-pdf-by-size', 'extract-pdf-pages', 'merge-pdf', 'split-pdf-in-half'],
    'split-pdf-by-size': ['compress-pdf', 'split-pdf', 'merge-pdf'],
    'split-pdf-in-half': ['split-pdf', 'crop-pdf', 'scan-to-pdf'],
    'alternate-mix-pdf': ['merge-pdf', 'organize-pdf', 'scan-to-pdf'],
    'organize-pdf': ['rotate-pdf', 'delete-pdf-pages', 'merge-pdf'],
    'delete-pdf-pages': ['extract-pdf-pages', 'organize-pdf', 'split-pdf'],
    'extract-pdf-pages': ['split-pdf', 'delete-pdf-pages', 'merge-pdf'],
    'rotate-pdf': ['organize-pdf', 'crop-pdf', 'scan-to-pdf'],
    'pdf-to-word': ['ocr-pdf', 'word-to-pdf', 'pdf-to-excel'],
    'pdf-to-excel': ['ocr-pdf', 'pdf-to-word', 'excel-to-pdf'],
    'pdf-to-jpg': ['pdf-to-png', 'jpg-to-pdf', 'extract-pdf-pages'],
    'pdf-to-png': ['pdf-to-jpg', 'crop-pdf', 'jpg-to-pdf'],
    'pdf-to-ppt': ['pdf-to-jpg', 'pdf-to-word', 'compress-pdf'],
    'pdf-to-epub': ['epub-to-pdf', 'pdf-to-word', 'ocr-pdf'],
    'jpg-to-pdf': ['scan-to-pdf', 'heic-to-pdf', 'compress-pdf', 'pdf-to-jpg'],
    'word-to-pdf': ['pdf-to-word', 'merge-pdf', 'compress-pdf'],
    'excel-to-pdf': ['pdf-to-excel', 'merge-pdf', 'compress-pdf'],
    'heic-to-pdf': ['jpg-to-pdf', 'scan-to-pdf', 'compress-pdf'],
    'epub-to-pdf': ['pdf-to-epub', 'compress-pdf', 'split-pdf'],
    'sign-pdf': ['flatten-pdf', 'add-image-to-pdf', 'make-pdf-fillable'],
    'add-image-to-pdf': ['sign-pdf', 'watermark-pdf', 'jpg-to-pdf'],
    'add-page-numbers': ['merge-pdf', 'watermark-pdf', 'organize-pdf'],
    'watermark-pdf': ['protect-pdf', 'flatten-pdf', 'add-page-numbers'],
    'crop-pdf': ['rotate-pdf', 'split-pdf-in-half', 'pdf-to-png'],
    'make-pdf-fillable': ['sign-pdf', 'flatten-pdf', 'protect-pdf'],
    'scan-to-pdf': ['ocr-pdf', 'compress-pdf', 'jpg-to-pdf', 'alternate-mix-pdf'],
    'ocr-pdf': ['scan-to-pdf', 'pdf-to-word', 'compare-pdf', 'compress-pdf'],
};
