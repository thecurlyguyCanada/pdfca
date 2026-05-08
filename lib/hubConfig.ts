import { Language } from '@/utils/i18n';

export interface HubConfig {
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string[]>;
  spokes: string[]; // slugs of tools
}

export const HUB_CONFIGS: HubConfig[] = [
  {
    slug: 'pdf-converter-tools',
    title: {
      en: 'PDF Converter Tools - Free & Secure Online Conversion | pdfcanada.ca',
      fr: 'Outils de Conversion PDF - Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Ferramentas de Conversão PDF - Grátis e Seguro | pdfcanada.ca'
    },
    description: {
      en: 'Convert PDF to Word, JPG, Excel, and more. Free, secure, local-first PDF converter tools for Canadian users. No uploads, no signup, no watermarks.',
      fr: 'Convertissez vos PDF en Word, JPG, Excel et plus. Outils de conversion PDF gratuits, sécurisés et locaux pour les Canadiens.',
      pt: 'Converta PDF para Word, JPG, Excel e muito mais. Ferramentas de conversão PDF grátis e seguras.'
    },
    keywords: {
      en: ['pdf converter', 'convert pdf to word', 'free online pdf converter', 'secure pdf conversion', 'canadian pdf tools'],
      fr: ['convertisseur pdf', 'convertir pdf en word', 'convertisseur pdf gratuit', 'conversion pdf sécurisée'],
      pt: ['conversor pdf', 'converter pdf para word', 'conversor pdf grátis', 'conversão pdf segura']
    },
    spokes: ['pdf-to-word', 'word-to-pdf', 'jpg-to-pdf', 'png-to-pdf', 'pdf-to-jpg', 'pdf-to-png', 'epub-to-pdf', 'heic-to-pdf', 'pdf-to-excel', 'pdf-to-csv', 'pdf-to-ppt', 'ppt-to-pdf', 'html-to-pdf', 'xml-to-pdf', 'pdf-to-xml', 'gif-to-pdf', 'aspx-to-pdf', 'php-to-pdf', 'odt-to-pdf', 'pages-to-pdf']
  },
  {
    slug: 'pdf-editing-tools',
    title: {
      en: 'PDF Editing Tools - Merge, Split, & Edit PDF Locally | pdfcanada.ca',
      fr: 'Outils d\'Édition PDF - Fusionner et Diviser en Ligne | pdfcanada.ca',
      pt: 'Ferramentas de Edição PDF - Juntar e Dividir PDF | pdfcanada.ca'
    },
    description: {
      en: 'Merge, split, rotate, and delete PDF pages securely in your browser. Fast, free, and local-first PDF editor for Canadian businesses and students.',
      fr: 'Fusionnez, divisez, pivotez et supprimez des pages PDF en toute sécurité dans votre navigateur. Éditeur PDF gratuit et local.',
      pt: 'Junte, divida, gire e apague páginas PDF com segurança no seu navegador. Editor PDF grátis e local.'
    },
    keywords: {
      en: ['pdf editor', 'merge pdf', 'split pdf', 'edit pdf online free', 'canadian pdf editor'],
      fr: ['éditeur pdf', 'fusionner pdf', 'diviser pdf', 'éditer pdf en ligne'],
      pt: ['editor pdf', 'juntar pdf', 'dividir pdf', 'editar pdf online']
    },
    spokes: ['merge-pdf', 'split-pdf', 'delete-pdf-pages', 'rotate-pdf', 'crop-pdf', 'organize-pdf', 'make-pdf-non-editable', 'sign-pdf', 'make-pdf-fillable']
  },
  {
    slug: 'secure-pdf-tools',
    title: {
      en: 'Secure PDF Tools - 100% Private Browser-Based PDF Utility | pdfcanada.ca',
      fr: 'Outils PDF Sécurisés - Confidentialité Totale en Ligne | pdfcanada.ca',
      pt: 'Ferramentas PDF Seguras - Privacidade Total Online | pdfcanada.ca'
    },
    description: {
      en: 'The most secure PDF tools in Canada. Local processing means your files never leave your device. Sign, analyze, and protect PDFs without cloud uploads.',
      fr: 'Les outils PDF les plus sécurisés au Canada. Le traitement local garantit que vos fichiers restent sur votre appareil.',
      pt: 'As ferramentas PDF mais seguras do Canadá. Processamento local garante privacidade total dos seus documentos.'
    },
    keywords: {
      en: ['secure pdf', 'private pdf tools', 'pipeda compliant pdf', 'safe pdf editor', 'canadian pdf security'],
      fr: ['pdf sécurisé', 'outils pdf privés', 'sécurité pdf canada'],
      pt: ['pdf seguro', 'ferramentas pdf privadas', 'segurança pdf']
    },
    spokes: ['analyze-pdf', 'sign-pdf', 'make-pdf-non-editable', 'encrypt-pdf', 'protect-pdf']
  },
  {
    slug: 'business-pdf-tools',
    title: {
      en: 'PDF Tools for Business - OCR, Invoices, & Data Extraction | pdfcanada.ca',
      fr: 'Outils PDF pour Entreprises - OCR et Facturation | pdfcanada.ca',
      pt: 'Ferramentas PDF para Empresas - OCR e Faturas | pdfcanada.ca'
    },
    description: {
      en: 'Streamline your workflow with business-grade PDF tools. Extract data from invoices, convert to UBL, and generate barcodes locally and securely.',
      fr: 'Optimisez votre flux de travail avec des outils PDF professionnels. Extraction de données de factures et conversion UBL.',
      pt: 'Otimize seu fluxo de trabalho com ferramentas PDF profissionais. Extração de dados de faturas e conversão UBL.'
    },
    keywords: {
      en: ['business pdf tools', 'invoice ocr', 'pdf to ubl', 'xml to pdf', 'barcode generator', 'canadian business tools'],
      fr: ['outils pdf entreprise', 'ocr facture', 'pdf vers ubl', 'générateur code-barres'],
      pt: ['ferramentas pdf negócios', 'ocr faturas', 'pdf para ubl', 'gerador de código de barras']
    },
    spokes: ['pdf-to-excel', 'pdf-to-csv', 'invoice-ocr', 'xrechnung-viewer', 'pdf-to-ubl', 'xml-to-pdf', 'barcode-generator', 'ofx-to-excel']
  }
];

export function getHubConfig(slug: string): HubConfig | undefined {
  return HUB_CONFIGS.find(h => h.slug === slug);
}

export function getAllHubSlugs(): string[] {
  return HUB_CONFIGS.map(h => h.slug);
}
