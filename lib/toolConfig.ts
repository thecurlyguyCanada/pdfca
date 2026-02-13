import { ToolType } from '@/utils/types';
import { Locale } from './i18n-config';

export interface ToolConfig {
  slug: string;
  tool: ToolType;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: Record<Locale, string[]>;
  accept?: string;
  i18nKey?: string;
  featureList?: Record<Locale, string[]>;
}

export const TOOL_CONFIGS: ToolConfig[] = [
  {
    slug: 'delete-pdf-pages',
    i18nKey: 'delete',
    tool: ToolType.DELETE,
    title: {
      en: 'Delete PDF Pages - Free & Secure Page Remover | pdfcanada.ca',
      fr: 'Supprimer des Pages PDF - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Apagar Páginas PDF - Ferramenta Grátis e Segura | pdfcanada.ca'
    },
    description: {
      en: 'Delete PDF Pages - Remove unwanted pages from your PDF files instantly. 100% private, local-first processing ensures your documents stay secure. Try it for free.',
      fr: 'Supprimer des pages PDF - Retirez les pages inutiles de vos fichiers PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Essai gratuit.',
      pt: 'Apagar páginas PDF - Remova páginas indesejadas de arquivos PDF com segurança. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis.'
    },
    keywords: {
      en: [
        'delete PDF pages', 'remove PDF pages', 'PDF page remover',
        'how to remove pages from pdf', 'delete pages from pdf online free',
        'remove page from pdf free', 'pdf page deleter', 'delete pdf page'
      ],
      fr: [
        'supprimer pages PDF', 'retirer pages PDF', 'suppresseur pages PDF',
        'comment supprimer des pages d\'un pdf', 'enlever page pdf',
        'effacer pages pdf', 'supprimer page pdf en ligne gratuit'
      ],
      pt: [
        'apagar páginas pdf', 'remover páginas pdf', 'excluir páginas pdf',
        'como apagar paginas do pdf', 'remover folha do pdf',
        'excluir folhas pdf', 'tirar paginas do pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'rotate-pdf',
    i18nKey: 'rotate',
    tool: ToolType.ROTATE,
    title: {
      en: 'Rotate PDF - Free & Permanent Page Rotation | pdfcanada.ca',
      fr: 'Pivoter un PDF - Rotation Permanente Gratuite | pdfcanada.ca',
      pt: 'Girar PDF - Rotação Permanente Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Rotate PDF - Fix orientation and rotate PDF pages permanently. 100% private, local-first processing ensures your files never leave your device. Try it for free.',
      fr: 'Pivoter un PDF - Changez l\'orientation de vos pages PDF en toute sécurité. Traitement 100% local : vos fichiers restent sur votre appareil. Gratuit et rapide.',
      pt: 'Girar PDF - Corrija a orientação e gire páginas de PDF permanentemente. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'rotate PDF', 'PDF rotation', 'flip PDF pages',
        'rotate pdf and save', 'rotate pdf 90 degrees',
        'turn pdf pages', 'fix upside down pdf'
      ],
      fr: [
        'pivoter PDF', 'rotation PDF', 'tourner pages PDF',
        'faire pivoter un pdf', 'tourner pdf',
        'enregistrer pdf rotation', 'rotation pdf en ligne'
      ],
      pt: [
        'girar pdf', 'rotação pdf', 'virar páginas pdf',
        'como girar pdf', 'rodar pdf', 'rotacionar pdf',
        'girar pdf e salvar'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'compress-pdf',
    i18nKey: 'compress',
    tool: ToolType.COMPRESS,
    title: {
      en: 'Compress PDF - Free & Secure File Size Reducer | pdfcanada.ca',
      fr: 'Compresser un PDF - Réducteur de Taille Gratuit | pdfcanada.ca',
      pt: 'Comprimir PDF - Redutor de Tamanho Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Compress PDF - Quickly shrink your PDF files without losing quality. 100% private, local-first processing ensures your documents stay secure. Try it now for free.',
      fr: 'Compresser un PDF - Réduisez le poids de vos PDF sans perte de qualité. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'Comprimir PDF - Reduza o tamanho do seu PDF sem perder qualidade. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'compress PDF', 'reduce PDF size', 'PDF compressor', 'convert pdf smaller',
        'shrink pdf file', 'compress pdf online free', 'reduce pdf file size',
        'pdf optimizer', 'make pdf smaller'
      ],
      fr: [
        'compresser PDF', 'réduire taille PDF', 'compresseur PDF',
        'convert pdf smaller', 'compresser pdf gratuit',
        'réduire pdf en ligne', 'diminuer taille pdf',
        'réduire poids pdf', 'alléger pdf', 'compresser fichier pdf'
      ],
      pt: [
        'comprimir pdf', 'reduzir tamanho pdf', 'compressor pdf',
        'diminuir pdf', 'comprimir pdf online',
        'diminuir tamanho arquivo pdf', 'compactar pdf',
        'reduzir peso pdf'
      ]
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Reduce PDF size by up to 90%', 'Three compression levels', 'Maintain document quality', 'Batch compression support'],
      fr: ['Réduisez la taille PDF jusqu\'à 90%', 'Trois niveaux de compression', 'Maintenez la qualité qualité', 'Support compression par lot'],
      pt: ['Reduza tamanho PDF até 90%', 'Três níveis de compressão', 'Mantenha qualidade documento', 'Suporte compressão em lote']
    }
  },
  {
    slug: 'merge-pdf',
    i18nKey: 'merge',
    tool: ToolType.MERGE,
    title: {
      en: 'Merge PDF - Free & Secure Document Combiner | pdfcanada.ca',
      fr: 'Fusionner des PDF - Combiner des Fichiers Gratuitement | pdfcanada.ca',
      pt: 'Juntar PDF - Combinar Arquivos PDF Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Merge PDF - Securely combine multiple PDF files into one document. 100% private, local-first processing ensures your files never leave your device. Try it for free.',
      fr: 'Fusionner des PDF - Combinez vos fichiers PDF en un seul document. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sans limite.',
      pt: 'Juntar PDF - Combine vários arquivos PDF em um único documento. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'merge PDF', 'combine PDF', 'join PDF files', 'murg pdf',
        'merge pdf files free', 'combine pdf files',
        'pdf merger online', 'join pdfs together'
      ],
      fr: [
        'fusionner PDF', 'combiner PDF', 'joindre fichiers PDF',
        'assembler pdf', 'regrouper pdf', 'fusionner plusieurs pdf',
        'coller pdf', 'mettre ensemble pdf'
      ],
      pt: [
        'juntar pdf', 'combinar pdf', 'unir pdf', 'mesclar pdf',
        'agrupar pdf', 'juntar arquivos pdf', 'unificar pdf'
      ]
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Combine unlimited PDFs', 'Drag and drop reordering', 'Client-side merging', 'No file size limits'],
      fr: ['Combinez PDFs illimités', 'Réorganisation glisser-déposer', 'Fusion côté client', 'Aucune limite de taille'],
      pt: ['Combine PDFs ilimitados', 'Reordenação arrastar e soltar', 'Fusão lado do cliente', 'Sem limites de tamanho']
    }
  },
  {
    slug: 'split-pdf',
    i18nKey: 'split',
    tool: ToolType.SPLIT,
    title: {
      en: 'Split PDF - Free & Secure Document Splitter | pdfcanada.ca',
      fr: 'Diviser un PDF - Séparer des Pages Gratuitement | pdfcanada.ca',
      pt: 'Dividir PDF - Separar Páginas Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Split PDF - Divide PDF files into separate pages or extract ranges. 100% private, local-first processing ensures your documents stay secure. Try it now for free.',
      fr: 'Diviser un PDF - Séparez vos pages PDF en plusieurs documents. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et instantané.',
      pt: 'Dividir PDF - Separe um arquivo PDF em vários documentos ou extraia páginas. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'split PDF', 'divide PDF', 'separate PDF pages', 'pdf to pdf split',
        'split pdf pages', 'extract pages from pdf',
        'cut pdf in half', 'separate pdf files'
      ],
      fr: [
        'diviser PDF', 'séparer PDF', 'extraire pages PDF',
        'découper pdf', 'fractionner pdf', 'couper pdf',
        'scinder pdf', 'séparer les pages d\'un pdf'
      ],
      pt: [
        'dividir pdf', 'separar pdf', 'extrair páginas pdf',
        'cortar pdf', 'facionar pdf', 'separar folhas pdf',
        'quebrar pdf em partes'
      ]
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Split by page ranges', 'Extract individual pages', 'Instant local processing', 'Secure splitting'],
      fr: ['Diviser par plages de pages', 'Extraire pages individuelles', 'Traitement local instantané', 'Division sécurisée'],
      pt: ['Dividir por intervalos', 'Extrair páginas individuais', 'Processamento local instantâneo', 'Divisão segura']
    }
  },
  {
    slug: 'extract-pdf-pages',
    i18nKey: 'extract',
    tool: ToolType.EXTRACT,
    title: {
      en: 'Extract PDF Pages - Free & Secure Page Extractor | pdfcanada.ca',
      fr: 'Extraire des Pages PDF - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Extrair Páginas PDF - Ferramenta Grátis e Segura | pdfcanada.ca'
    },
    description: {
      en: 'Extract PDF Pages - Pull specific pages from any PDF into a new file. 100% private, local-first processing ensures your documents stay secure. Try it now for free.',
      fr: 'Extraire des pages PDF - Récupérez des pages spécifiques de vos PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'Extrair páginas PDF - Retire páginas específicas de documentos PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'extract PDF pages', 'PDF page extractor', 'pull PDF pages',
        'save one page of pdf', 'extract pages from pdf online',
        'download specific pages from pdf'
      ],
      fr: [
        'extraire pages PDF', 'extracteur pages PDF', 'tirer pages PDF',
        'enregistrer une page pdf', 'extraire une page d\'un pdf',
        'récupérer page pdf'
      ],
      pt: [
        'extrair páginas pdf', 'extrator páginas pdf', 'retirar páginas pdf',
        'salvar uma pagina do pdf', 'tirar pagina do pdf',
        'separar paginas pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'crop-pdf',
    i18nKey: 'crop',
    tool: ToolType.CROP,
    title: {
      en: 'Crop PDF - Free & Secure Margin Trimmer | pdfcanada.ca',
      fr: 'Recadrer un PDF - Rogner les Marges Gratuitement | pdfcanada.ca',
      pt: 'Cortar PDF - Remover Margens Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Crop PDF - Easily trim PDF margins and remove unwanted white space. 100% private, local-first processing ensures your files stay secure. Try it for free now.',
      fr: 'Recadrer un PDF - Supprimez les marges inutiles de vos fichiers PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'Cortar PDF - Remova margens indesejadas de páginas PDF facilmente. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'crop PDF', 'trim PDF', 'cut PDF margins',
        'remove white space from pdf', 'crop pdf pages online',
        'change pdf page size'
      ],
      fr: [
        'recadrer PDF', 'rogner PDF', 'couper marges PDF',
        'enlever marges pdf', 'recadrer fichier pdf',
        'rogner page pdf'
      ],
      pt: [
        'cortar pdf', 'recortar pdf', 'aparar pdf',
        'remover margens pdf', 'cortar arquivo pdf',
        'diminuir margem pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'heic-to-pdf',
    i18nKey: 'heic',
    tool: ToolType.HEIC_TO_PDF,
    title: {
      en: 'HEIC to PDF - Free & Secure iPhone Photo Converter | pdfcanada.ca',
      fr: 'HEIC vers PDF - Convertir Photos iPhone Gratuitement | pdfcanada.ca',
      pt: 'HEIC para PDF - Converter Fotos iPhone Grátis | pdfcanada.ca'
    },
    description: {
      en: 'HEIC to PDF - Convert iPhone HEIC photos to high-quality PDF. 100% private, local-first processing ensures your photos stay on your device. Try it for free.',
      fr: 'HEIC vers PDF - Convertissez vos photos iPhone en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'HEIC para PDF - Converta fotos iPhone para formato PDF com qualidade. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'HEIC to PDF', 'convert HEIC', 'iPhone photos to PDF', 'convert heic to pdf',
        'heic file to pdf', 'convert iphone photo to pdf', 'apple image to pdf'
      ],
      fr: [
        'convertir heic en pdf', 'HEIC vers PDF', 'convertir HEIC',
        'photos iPhone en PDF', 'heic en pdf gratuit',
        'convertir photo heic en pdf', 'heic vers pdf en ligne',
        'image iphone en pdf'
      ],
      pt: [
        'converter heic para pdf', 'heic para pdf', 'fotos iphone para pdf',
        'heic em pdf online', 'converter foto iphone pdf',
        'imagem apple para pdf'
      ]
    },
    accept: '.heic,.heif,image/heic,image/heif'
  },
  {
    slug: 'epub-to-pdf',
    i18nKey: 'epubToPdf',
    tool: ToolType.EPUB_TO_PDF,
    title: {
      en: 'EPUB to PDF - Free & Secure eBook Converter | pdfcanada.ca',
      fr: 'EPUB vers PDF - Convertir eBook en PDF Gratuitement | pdfcanada.ca',
      pt: 'EPUB para PDF - Converter eBook em PDF Grátis | pdfcanada.ca'
    },
    description: {
      en: 'EPUB to PDF - Change your EPUB ebooks to high-quality PDF format. 100% private, local-first processing ensures your books stay secure. Try it now for free.',
      fr: 'EPUB vers PDF - Changez vos ebooks EPUB en format PDF de qualité. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'EPUB para PDF - Transforme seus ebooks EPUB para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'EPUB to PDF', 'convert ebook', 'EPUB converter', 'convert epub to pdf',
        'ebook to pdf converter', 'turn epub into pdf', 'print epub'
      ],
      fr: [
        'convertir epub en pdf', 'convert epub to pdf', 'EPUB vers PDF',
        'convertir ebook', 'convertisseur EPUB', 'epub en pdf gratuit',
        'convertir fichier epub en pdf', 'epub vers pdf en ligne',
        'imprimer epub'
      ],
      pt: [
        'converter epub para pdf', 'epub para pdf', 'converter ebook para pdf',
        'epub em pdf online', 'transformar epub em pdf',
        'imprimir arquivo epub'
      ]
    },
    accept: '.epub,application/epub+zip'
  },
  {
    slug: 'pdf-to-epub',
    i18nKey: 'pdfToEpub',
    tool: ToolType.PDF_TO_EPUB,
    title: {
      en: 'PDF to EPUB - Free & Secure eBook Generator | pdfcanada.ca',
      fr: 'PDF vers EPUB - Créer un eBook Gratuitement | pdfcanada.ca',
      pt: 'PDF para EPUB - Criar eBook Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to EPUB - Convert PDF documents to EPUB for better e-reading. 100% private, local-first processing ensures your files stay secure. Try it now for free.',
      fr: 'PDF vers EPUB - Convertissez vos PDF en format ebook EPUB. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sans limites.',
      pt: 'PDF para EPUB - Converta documentos PDF para o formato ebook EPUB. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to EPUB', 'convert PDF to ebook', 'PDF to ebook'],
      fr: ['PDF vers EPUB', 'convertir PDF en ebook', 'PDF en ebook'],
      pt: ['pdf para epub', 'converter pdf para ebook', 'pdf em ebook']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-kindle',
    i18nKey: 'pdfToKindle',
    tool: ToolType.PDF_TO_KINDLE,
    title: {
      en: 'PDF to Kindle - Free & Secure eReader Optimization | pdfcanada.ca',
      fr: 'PDF vers Kindle - Optimiser pour Liseuse Gratuitement | pdfcanada.ca',
      pt: 'PDF para Kindle - Otimizar para Leitor Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to Kindle - Optimize PDF files for Kindle with smart reflow. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'PDF vers Kindle - Optimisez vos fichiers PDF pour Kindle par IA. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'PDF para Kindle - Otimize seus arquivos PDF para Kindle com IA. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'PDF to Kindle', 'Kindle converter', 'PDF to ebook Kindle', 'convert PDF for Kindle',
        'send pdf to kindle', 'read pdf on kindle', 'optimize pdf for kindle'
      ],
      fr: [
        'PDF vers Kindle', 'convertisseur Kindle', 'PDF en ebook Kindle', 'convertir PDF pour Kindle',
        'lire pdf sur kindle', 'envoyer pdf vers kindle', 'format kindle'
      ],
      pt: [
        'pdf para kindle', 'converter kindle', 'pdf ebook kindle', 'converter pdf para kindle',
        'ler pdf no kindle', 'enviar pdf para kindle', 'formato kindle'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'make-pdf-fillable',
    i18nKey: 'fillable',
    tool: ToolType.MAKE_FILLABLE,
    title: {
      en: 'Make PDF Fillable - Free & Secure Form Creator | pdfcanada.ca',
      fr: 'Créer Formulaire PDF - Rendre PDF Modifiable Gratuitement | pdfcanada.ca',
      pt: 'Criar Formulário PDF - Tornar PDF Preenchível Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Make PDF Fillable - Create fillable PDF forms with fields and markers. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'Rendre un PDF modifiable - Créez des formulaires PDF remplissables. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et simple.',
      pt: 'Tornar PDF preenchível - Crie formulários PDF preenchíveis com campos. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'make PDF fillable', 'PDF form creator', 'add form fields',
        'create fillable pdf free', 'pdf form builder', 'edit pdf form'
      ],
      fr: [
        'rendre PDF modifiable', 'créateur formulaire PDF', 'ajouter champs formulaire',
        'créer pdf remplissable', 'faire un formulaire pdf', 'formulaire pdf interactif'
      ],
      pt: [
        'criar pdf preenchível', 'criador formulário pdf', 'adicionar campos formulário',
        'fazer pdf preenchivel', 'criar formulario pdf gratis', 'editar formulario pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'sign-pdf',
    i18nKey: 'sign',
    tool: ToolType.SIGN,
    title: {
      en: 'Sign PDF - Free & Secure e-Signature Tool | pdfcanada.ca',
      fr: 'Signer un PDF - Signature Électronique Gratuite | pdfcanada.ca',
      pt: 'Assinar PDF - Assinatura Digital Online Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Sign PDF - Securely draw, type, or upload your signature to sign PDF documents. 100% private, local-first processing ensures your files never leave your device. Try it for free.',
      fr: 'Signer un PDF - Signez vos documents PDF en toute sécurité. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Signature gratuite et rapide.',
      pt: 'Assinar PDF - Desenhe ou envie sua assinatura para assinar documentos PDF. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'sign PDF', 'PDF signature', 'digital signature',
        'sign pdf online free', 'electronic signature', 'esign pdf',
        'fill and sign pdf'
      ],
      fr: [
        'signer PDF', 'signature PDF', 'signature numérique',
        'signer pdf en ligne', 'signature électronique gratuite',
        'parapher pdf'
      ],
      pt: [
        'assinar pdf', 'assinatura pdf', 'assinatura digital',
        'assinar pdf online', 'assinatura eletronica gratis',
        'rubricar pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'organize-pdf',
    i18nKey: 'organizePdf',
    tool: ToolType.ORGANIZE,
    title: {
      en: 'Organize PDF Pages - Free & Secure Page Sorter | pdfcanada.ca',
      fr: 'Organiser des Pages PDF - Classer et Trier Gratuitement | pdfcanada.ca',
      pt: 'Organizar Páginas PDF - Ordenar Arquivo Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Organize PDF Pages - Securely reorder, rotate, and delete PDF pages in one view. 100% private, local-first processing ensures your files stay secure. Try it for free now.',
      fr: 'Organiser des pages PDF - Réordonnez et gérez vos pages PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Simple et gratuit.',
      pt: 'Organizar páginas PDF - Reordene e gerencie as páginas do seu documento PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'organize PDF', 'reorder PDF pages', 'rearrange PDF',
        'sort pdf pages', 'move pdf pages', 'pdf organizer free'
      ],
      fr: [
        'organiser PDF', 'réorganiser pages PDF', 'réarranger PDF',
        'trier pages pdf', 'classer pdf', 'gestionnaire de pages pdf'
      ],
      pt: [
        'organizar pdf', 'reordenar páginas pdf', 'rearranjar pdf',
        'ordenar pdf', 'mover paginas pdf', 'organizador de pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-word',
    i18nKey: 'pdfToWord',
    tool: ToolType.PDF_TO_WORD,
    title: {
      en: 'PDF to Word - Free & Secure DOCX Converter | pdfcanada.ca',
      fr: 'Convertir un PDF en Word - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'PDF para Word - Conversor Grátis e Seguro | pdfcanada.ca'
    },
    description: {
      en: 'PDF to Word - Convert PDF to editable Word documents (DOCX) accurately. 100% private, local-first processing ensures your documents stay secure. Try it for free now.',
      fr: 'Convertir un PDF en Word - Transformez vos PDF en Word modifiable. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'PDF para Word - Converta seus arquivos PDF para Word (DOCX) editáveis. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to Word', 'PDF to DOCX', 'convert PDF to Word', 'free PDF converter'],
      fr: [
        // High volume primary keywords
        'convertir pdf',
        'convertir pdf en word',
        'convertir un pdf en word',
        'convertir pdf en word gratuit',
        'convertir un pdf en word gratuit',
        'convertir pdf en word gratuitement',
        'convertir gratuitement pdf en word',
        'convertir pdf en word en ligne gratuit',
        'convertir du pdf en word en ligne gratuit',
        'convertir pdf en word modifiable gratuit',
        'convertir un pdf en word gratuitement',
        'pdf word convertir gratuit',
        'pdf to word converter',
        'convert pdf to word',
        'convert pdf to word converter',
        'converter pdf to word',
        'convert pdf to word format',
        'pdf convert to word converter',
        'pdf to word word converter',
        'convertir pdf to word',
        'convertir pdf word',
        'convertir pdf a word',
        'convertir a pdf un word',
        'convert to word pdf',
        // Question format keywords
        'comment convertir pdf en word',
        'comment convertir un pdf en word',
        'comment convertir du pdf en word',
        'comment convertir un fichier pdf en word',
        'comment convertir des fichiers pdf en word',
        'comment convertir document pdf en word',
        'comment convertir un document pdf en word',
        'comment convertir pdf en word mac',
        'comment convertir pdf en word modifiable',
        // Additional variants
        'convertir fichier pdf en word gratuitement',
        'convertir fichier pdf',
        'pdf en word gratuit',
        'pdf vers word en ligne',
        'pdf converter',
        'pdf format converter',
        'a pdf converter',
        'converter pdf',
        'pdf convert',
        'convert pdf'
      ],
      pt: [
        'pdf para word',
        'converter pdf em word',
        'converter pdf para docx',
        'pdf em word gratis',
        'converter pdf word online'
      ]
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Convert PDF to editable DOCX', 'Preserve formatting and layout', 'Extract text accurately', 'Works with scanned PDFs'],
      fr: ['Convertir PDF en DOCX modifiable', 'Préserver formatage et mise en page', 'Extraire texte avec précision', 'Fonctionne avec PDF scannés'],
      pt: ['Converter PDF para DOCX editável', 'Preservar formatação e layout', 'Extrair texto com precisão', 'Funciona com PDFs digitalizados']
    }
  },
  {
    slug: 'word-to-pdf',
    i18nKey: 'wordToPdf',
    tool: ToolType.WORD_TO_PDF,
    title: {
      en: 'Word to PDF - Free & Secure DOCX Converter | pdfcanada.ca',
      fr: 'Convertir Word en PDF - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Word para PDF - Conversor Grátis e Seguro | pdfcanada.ca'
    },
    description: {
      en: 'Word to PDF - Securely convert Word documents to high-quality PDF format. 100% private, local-first processing ensures your files stay on your device. Try it for free now.',
      fr: 'Convertir Word en PDF - Convertissez vos documents Word en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'Word para PDF - Converta documentos Word para o formato PDF com qualidade. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['Word to PDF', 'DOCX to PDF', 'convert Word to PDF', 'free Word converter'],
      fr: [
        // High volume primary keywords
        'convertir word en pdf',
        'convertir en pdf',
        'convert word to pdf',
        'convert to pdf',
        'convertir en pdf gratuit',
        'convertir word en pdf gratuit',
        'convertir gratuitement word en pdf',
        'convertir word a pdf',
        'convertir un word en pdf',
        'convert to pdf format',
        'convertir fichier en pdf',
        'convertir un fichier en pdf',
        'convertir docx en pdf',
        'convertir doc en pdf',
        'convertir un document en pdf',
        'convertir en word en pdf',
        // Question format keywords
        'comment convertir document word en pdf',
        'comment convertir un document word en pdf',
        'comment convertir fichier word en pdf',
        'comment convertir un fichier word en pdf',
        'comment convertir un word en pdf',
        'comment convertir word en pdf',
        'comment convertir un document word en pdf gratuit',
        'comment convertir word en pdf mac',
        'comment convertir fichier word en pdf sur mac',
        // Additional variants
        'convertir un fichier word en pdf gratuitement',
        'word vers pdf gratuit',
        'word en pdf en ligne'
      ],
      pt: [
        'word para pdf',
        'converter word em pdf',
        'docx para pdf',
        'word em pdf gratis',
        'converter docx para pdf'
      ]
    },
    accept: '.docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
  },
  {
    slug: 'make-pdf-non-editable',
    i18nKey: 'flatten',
    tool: ToolType.FLATTEN,
    title: {
      en: 'Flatten PDF - Free & Secure Content Locking | pdfcanada.ca',
      fr: 'Aplatir un PDF - Verrouiller le Contenu Gratuitement | pdfcanada.ca',
      pt: 'Aplanar PDF - Bloquear Conteúdo Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Flatten PDF - Lock PDF form fields and layers to make content non-editable. 100% private, local-first processing ensures your files stay secure. Try it now for free.',
      fr: 'Aplatir un PDF - Verrouillez vos formulaires PDF de façon permanente. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'Aplanar PDF - Bloqueie campos de formulário e camadas de PDF com segurança. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'flatten PDF', 'make PDF non-editable', 'lock PDF content',
        'merge pdf layers', 'prevent pdf editing', 'flat pdf'
      ],
      fr: [
        'aplatir PDF', 'rendre PDF non modifiable', 'verrouiller contenu PDF',
        'fusionner calques pdf', 'bloquer modification pdf', 'pdf plat'
      ],
      pt: [
        'aplanar pdf', 'tornar pdf não editável', 'bloquear pdf',
        'juntar camadas pdf', 'impedir edição pdf', 'pdf plano'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-page-remover',
    i18nKey: 'pdfPageRemover',
    tool: ToolType.PDF_PAGE_REMOVER,
    title: {
      en: 'PDF Page Remover - Free & Secure Page Deleter | pdfcanada.ca',
      fr: 'Suppresseur de Pages PDF - Outil Gratuit et Rapide | pdfcanada.ca',
      pt: 'Removedor de Páginas PDF - Ferramenta Grátis e Rápida | pdfcanada.ca'
    },
    description: {
      en: 'PDF Page Remover - Select and delete specific pages from your PDF instantly. 100% private, local-first processing ensures your files stay secure. Try it now for free.',
      fr: 'Suppresseur de pages PDF - Sélectionnez et supprimez vos pages PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'Removedor de páginas PDF - Selecione e exclua páginas do seu PDF rapidamente. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'remove PDF pages', 'delete PDF pages', 'PDF page remover',
        'remove pages from pdf canada', 'delete pdf pages canada',
        'pdf page remover canada', 'erase pdf pages'
      ],
      fr: [
        'supprimer pages PDF', 'effacer pages PDF', 'suppresseur pages PDF',
        'enlever page pdf', 'retirer pages pdf'
      ],
      pt: [
        'remover páginas pdf', 'apagar páginas pdf', 'removedor páginas pdf',
        'tirar paginas pdf', 'excluir folhas pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'cbr-to-pdf',
    i18nKey: 'cbrToPdf',
    tool: ToolType.CBR_TO_PDF,
    title: {
      en: 'CBR to PDF - Free & Secure Comic Book Converter | pdfcanada.ca',
      fr: 'CBR vers PDF - Convertir BD en PDF Gratuitement | pdfcanada.ca',
      pt: 'CBR para PDF - Converter Quadrinhos em PDF Grátis | pdfcanada.ca'
    },
    description: {
      en: 'CBR to PDF - Convert CBR and CBZ comic archives to high-quality PDF. 100% private, local-first processing ensures your files stay on your device. Try it for free now.',
      fr: 'CBR vers PDF - Convertissez vos archives BD CBR/CBZ en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et haute qualité.',
      pt: 'CBR para PDF - Converta seus quadrinhos CBR/CBZ para PDF de alta qualidade. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['CBR to PDF', 'comic book to PDF', 'CBZ to PDF'],
      fr: ['CBR vers PDF', 'bande dessinée vers PDF', 'CBZ vers PDF'],
      pt: ['cbr para pdf', 'quadrinhos para pdf', 'cbz para pdf']
    },
    accept: '.cbr,.cbz,.rar,.zip,application/x-cbr,application/x-cbz,application/vnd.comicbook+zip,application/vnd.comicbook+rar'
  },
  {
    slug: 'pdf-to-xml',
    i18nKey: 'pdfToXml',
    tool: ToolType.PDF_TO_XML,
    title: {
      en: 'PDF to XML - Free & Secure Data Extractor | pdfcanada.ca',
      fr: 'PDF vers XML - Extraction de Données Sécurisée | pdfcanada.ca',
      pt: 'PDF para XML - Extração de Dados Segura | pdfcanada.ca'
    },
    description: {
      en: 'PDF to XML - Securely extract structured XML data from PDF documents. 100% private, local-first processing ensures your data stays on your device. Try it for free now.',
      fr: 'PDF vers XML - Extrayez vos données PDF au format XML structuré. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'PDF para XML - Extraia seus dados de PDF para o formato XML estruturado. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to XML', 'convert PDF to XML', 'extract PDF data'],
      fr: ['PDF vers XML', 'convertir PDF en XML', 'extraire données PDF'],
      pt: ['pdf para xml', 'converter pdf em xml', 'extrair dados pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'xml-to-pdf',
    i18nKey: 'xmlToPdf',
    tool: ToolType.XML_TO_PDF,
    title: {
      en: 'XML to PDF - Free & Secure Document Generator | pdfcanada.ca',
      fr: 'XML vers PDF - Générateur de Documents Sécurisé | pdfcanada.ca',
      pt: 'XML para PDF - Gerador de Documentos Seguro | pdfcanada.ca'
    },
    description: {
      en: 'XML to PDF - Securely convert XML data into readable PDF documents. 100% private, local-first processing ensures your data stays on your device. Try it for free now.',
      fr: 'XML vers PDF - Générez vos documents PDF à partir de données XML. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'XML para PDF - Converta seus dados XML para documentos PDF legíveis. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['XML to PDF', 'convert XML', 'XML to document'],
      fr: ['XML vers PDF', 'convertir XML', 'XML vers document'],
      pt: ['xml para pdf', 'converter xml', 'xml para documento']
    },
    accept: '.xml,text/xml,application/xml'
  },
  {
    slug: 'excel-to-pdf',
    i18nKey: 'excelToPdf',
    tool: ToolType.EXCEL_TO_PDF,
    title: {
      en: 'Excel to PDF - Free & Secure Spreadsheet Converter | pdfcanada.ca',
      fr: 'Excel en PDF - Convertisseur de Tableaux Gratuit | pdfcanada.ca',
      pt: 'Excel para PDF - Conversor de Planilhas Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Excel to PDF - Securely turn Excel spreadsheets into professional PDFs. 100% private, local-first processing ensures your data stays on your device. Try it for free.',
      fr: 'Excel vers PDF - Convertissez vos tableaux Excel en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'Excel para PDF - Converta suas planilhas Excel para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'Excel to PDF', 'XLSX to PDF', 'convert spreadsheet to PDF',
        'convert excel to pdf free', 'save excel as pdf',
        'turn excel into pdf', 'xls to pdf converter'
      ],
      fr: [
        'convertir excel en pdf', 'excel en pdf', 'xlsx en pdf',
        'convertir tableau excel pdf', 'transformer excel en pdf',
        'enregistrer excel sous pdf', 'feuille excel en pdf'
      ],
      pt: [
        'excel para pdf', 'converter excel em pdf', 'xlsx para pdf',
        'planilha para pdf', 'salvar excel como pdf',
        'transformar excel em pdf', 'converter xls para pdf'
      ]
    },
    accept: '.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'
  },
  {
    slug: 'rtf-to-pdf',
    i18nKey: 'rtfToPdf',
    tool: ToolType.RTF_TO_PDF,
    title: {
      en: 'RTF to PDF - Free & Secure Rich Text Converter | pdfcanada.ca',
      fr: 'RTF vers PDF - Convertisseur de Document Sécurisé | pdfcanada.ca',
      pt: 'RTF para PDF - Conversor de Documento Seguro | pdfcanada.ca'
    },
    description: {
      en: 'RTF to PDF - Securely convert RTF files to PDF while preserving formatting. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'RTF vers PDF - Convertissez vos fichiers RTF en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'RTF para PDF - Converta arquivos RTF para o formato PDF com qualidade. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['RTF to PDF', 'convert RTF to PDF', 'Rich Text to PDF', 'RTF converter', 'file rtf to pdf'],
      fr: ['RTF vers PDF', 'convertir RTF en PDF', 'texte enrichi vers PDF', 'fichier rtf en pdf'],
      pt: ['rtf para pdf', 'converter rtf', 'texto rico para pdf', 'arquivo rtf para pdf']
    },
    accept: '.rtf,text/rtf,application/rtf'
  },
  {
    slug: 'invoice-ocr',
    i18nKey: 'invoiceOcr',
    tool: ToolType.INVOICE_OCR,
    title: {
      en: 'Invoice OCR - Free & Secure AI Data Extraction | pdfcanada.ca',
      fr: 'OCR de Facture - Extraction IA Gratuite et Sécurisée | pdfcanada.ca',
      pt: 'OCR de Fatura - Extração IA Grátis e Segura | pdfcanada.ca'
    },
    description: {
      en: 'Invoice OCR - Extract text, dates, and amounts from PDF invoices with AI. 100% private, local-first processing ensures your data stays secure. Try it for free now.',
      fr: 'OCR de facture - Extrayez vos données de factures par IA. Traitement 100% local : vos données ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'OCR de fatura - Extraia dados de faturas automaticamente usando IA. Processamento 100% local: seus dados nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'invoice OCR', 'PDF invoice to Excel', 'extract invoice data',
        'free invoice scanner', 'ai invoice processing', 'pdf data extraction'
      ],
      fr: [
        'OCR facture', 'facture PDF vers Excel', 'extraire données facture',
        'scanner facture gratuit', 'traitement facture ia', 'extraction données pdf'
      ],
      pt: [
        'ocr faturas', 'fatura pdf para excel', 'extrair dados fatura',
        'scanner fatura', 'processamento fatura ia', 'extração dados pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'barcode-generator',
    i18nKey: 'barcode',
    tool: ToolType.BARCODE_GENERATOR,
    title: {
      en: 'Barcode Generator - Free & Secure QR/Barcode Creator | pdfcanada.ca',
      fr: 'Générateur de Code-Barres - Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Gerador de Código de Barras - Grátis e Seguro | pdfcanada.ca'
    },
    description: {
      en: 'Barcode Generator - Create professional Code 128 barcodes and QR codes. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'Générateur de code-barres - Créez des codes-barres et QR codes professionnels. Traitement 100% local : vos données restent privées. Gratuit et simple.',
      pt: 'Gerador de código de barras - Crie códigos de barras e QR codes profissionais. Processamento 100% local: seus dados ficam seguros. Grátis e fácil.'
    },
    keywords: {
      en: ['code 128 barcode generator', 'bulk barcode generator', 'free barcode maker', 'barcode to pdf', 'excel to barcode', 'generate barcode online', 'code 128a', 'code 128b', 'code 128c'],
      fr: ['générateur code-barres code 128', 'générateur code-barres en masse', 'créateur code-barres gratuit', 'code-barres vers pdf', 'excel vers code-barres'],
      pt: ['gerador código de barras', 'criar código de barras', 'gerador barcode', 'excel para código de barras']
    },
    accept: '.xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv'
  },
  {
    slug: 'pdf-to-csv',
    i18nKey: 'pdftocsv',
    tool: ToolType.PDF_TO_CSV,
    title: {
      en: 'PDF to CSV - Free & Secure Bank Statement Converter | pdfcanada.ca',
      fr: 'PDF vers CSV - Extraction de Tableaux Sécurisée | pdfcanada.ca',
      pt: 'PDF para CSV - Extração de Tabelas Segura | pdfcanada.ca'
    },
    description: {
      en: 'PDF to CSV - Extract tables from bank statements and PDFs into CSV format. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'PDF vers CSV - Extrayez vos tableaux PDF au format CSV. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'PDF para CSV - Extraia tabelas de PDFs para o formato CSV. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to CSV', 'bank statement to CSV', 'extract table from PDF', 'PDF to Excel converter'],
      fr: ['PDF vers CSV', 'relevé bancaire vers CSV', 'extraire tableau PDF', 'convertisseur PDF vers Excel'],
      pt: ['pdf para csv', 'extrato bancário para csv', 'extrair tabela pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-excel',
    i18nKey: 'pdftoexcel',
    tool: ToolType.PDF_TO_EXCEL,
    title: {
      en: 'PDF to Excel - Free & Secure Table Extractor | pdfcanada.ca',
      fr: 'Convertir un PDF en Excel - Tableaux Editables | pdfcanada.ca',
      pt: 'PDF para Excel - Tabelas Editáveis Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to Excel - Securely extract tables and data from PDF into Excel (XLSX). 100% private, local-first processing ensures your data stays secure. Try it for free.',
      fr: 'PDF vers Excel - Convertissez vos PDF en feuilles Excel modifiables. Traitement 100% local : vos fichiers restent sur votre appareil. Gratuit et précis.',
      pt: 'PDF para Excel - Converta seus PDFs em planilhas Excel editáveis. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'PDF to Excel', 'PDF to XLSX', 'export PDF table to Excel',
        'convert pdf to excel free', 'pdf to xls converter',
        'extract data from pdf to excel'
      ],
      fr: [
        'convertir pdf en excel', 'pdf en excel', 'pdf vers xlsx',
        'extraire tableau pdf excel', 'convertisseur pdf excel gratuit',
        'transformer pdf en excel', 'fichier pdf en excel'
      ],
      pt: [
        'pdf para excel', 'converter pdf em excel', 'pdf para xlsx',
        'transformar pdf em excel', 'extrair tabela pdf para excel',
        'conversor pdf excel gratis'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'analyze-pdf',
    i18nKey: 'analyzepdf',
    tool: ToolType.PHISHING_DETECTOR,
    title: {
      en: 'Analyze PDF - Free & Secure AI Phishing Detector | pdfcanada.ca',
      fr: 'Analyser la Sécurité PDF - Détecteur de Phishing IA | pdfcanada.ca',
      pt: 'Analisar Segurança PDF - Detector de Phishing IA | pdfcanada.ca'
    },
    description: {
      en: 'Analyze PDF - Scan PDF files for phishing links and malware with AI. 100% private, local-first processing ensures your privacy is protected. Try it for free.',
      fr: 'Analyser un PDF - Détectez les liens suspects et malwares par IA. Traitement 100% local : votre sécurité est assurée. Gratuit et instantané.',
      pt: 'Analisar PDF - Detecte links de phishing e malware em PDFs usando IA. Processamento 100% local: sua privacidade é protegida. Grátis e seguro.'
    },
    keywords: {
      en: [
        'analyze PDF', 'PDF security scan', 'detect phishing PDF',
        'safe view PDF', 'malware scanner', 'check pdf for virus',
        'pdf link checker'
      ],
      fr: [
        'analyser PDF', 'scan sécurité PDF', 'détecter hameçonnage PDF',
        'vue sécurisée PDF', 'scanner malware', 'vérifier virus pdf',
        'vérificateur liens pdf'
      ],
      pt: [
        'analisar PDF', 'varredura de segurança PDF', 'detectar phishing PDF',
        'visualização segura PDF', 'scanner de malware', 'verificar virus pdf',
        'verificador links pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'xrechnung-viewer',
    i18nKey: 'xrechnungViewer',
    tool: ToolType.XRECHNUNG_VIEWER,
    title: {
      en: 'XRechnung Viewer - Free & Secure E-Invoice Visualizer | pdfcanada.ca',
      fr: 'Visualiseur XRechnung - Facture Électronique Sécurisée | pdfcanada.ca',
      pt: 'Visualizador XRechnung - Fatura Eletrônica Segura | pdfcanada.ca'
    },
    description: {
      en: 'XRechnung Viewer - Securely view XRechnung XML invoices in a readable format. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'Visualiseur XRechnung - Lisez vos factures XML en format clair. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et conforme.',
      pt: 'Visualizador XRechnung - Leia suas faturas XML em formato legível. Processamento 100% local: seus dados financeiros ficam seguros. Grátis e seguro.'
    },
    keywords: {
      en: ['XRechnung viewer', 'XML invoice viewer', 'read XRechnung', 'visualize XML invoice'],
      fr: ['visualiseur XRechnung', 'lire facture XML', 'visualiser facture XML'],
      pt: ['visualizador xrechnung', 'ler fatura xml', 'visualizar nota fiscal xml']
    },
    accept: '.xml,text/xml,application/xml'
  },
  {
    slug: 'gif-to-pdf',
    i18nKey: 'gifToPdf',
    tool: ToolType.GIF_TO_PDF,
    title: {
      en: 'GIF to PDF - Free & Secure Animated Image Converter | pdfcanada.ca',
      fr: 'GIF vers PDF - Convertisseur d\'Images Gratuit | pdfcanada.ca',
      pt: 'GIF para PDF - Conversor de Imagens Grátis | pdfcanada.ca'
    },
    description: {
      en: 'GIF to PDF - Securely convert static and animated GIFs into PDF documents. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'GIF vers PDF - Convertissez vos images GIF en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'GIF para PDF - Converta suas imagens GIF para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['gif to pdf', 'convert gif', 'image to pdf'],
      fr: ['gif en pdf', 'pdf pour gif', 'image en pdf'],
      pt: ['gif para pdf', 'converter gif', 'imagem para pdf']
    },
    accept: '.gif,image/gif'
  },
  {
    slug: 'aspx-to-pdf',
    i18nKey: 'aspxToPdf',
    tool: ToolType.ASPX_TO_PDF,
    title: {
      en: 'ASPX to PDF - Free & Secure Source Code Converter | pdfcanada.ca',
      fr: 'ASPX en PDF - Documentation de Code Sécurisée | pdfcanada.ca',
      pt: 'ASPX para PDF - Documentação de Código Segura | pdfcanada.ca'
    },
    description: {
      en: 'ASPX to PDF - Convert ASPX source code files to PDF for documentation. 100% private, local-first processing ensures your code stays secure. Try it now for free.',
      fr: 'ASPX vers PDF - Convertissez vos fichiers ASPX en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'ASPX para PDF - Converta seus arquivos de código ASPX para PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['aspx to pdf', 'convert aspx', 'code to pdf'],
      fr: ['html en code', 'aspx en pdf'],
      pt: ['aspx para pdf', 'imprimir código aspx']
    },
    accept: '.aspx,text/plain,application/xml'
  },
  {
    slug: 'php-to-pdf',
    i18nKey: 'phpToPdf',
    tool: ToolType.PHP_TO_PDF,
    title: {
      en: 'PHP to PDF - Free & Secure Code to PDF Converter | pdfcanada.ca',
      fr: 'PHP en PDF - Documentation de Code Sécurisée | pdfcanada.ca',
      pt: 'PHP para PDF - Documentação de Código Segura | pdfcanada.ca'
    },
    description: {
      en: 'PHP to PDF - Convert PHP source code into PDF documentation instantly. 100% private, local-first processing ensures your code stays secure. Try it now for free.',
      fr: 'PHP vers PDF - Convertissez votre code source PHP en PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et automatique.',
      pt: 'PHP para PDF - Converta seu código fonte PHP para formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['php to pdf', 'convert php', 'code to pdf', 'php source to pdf'],
      fr: ['php en pdf', 'code php en pdf', 'imprimer code php'],
      pt: ['php para pdf', 'imprimir código php']
    },
    accept: '.php,text/x-php,application/x-php,text/plain'
  },
  {
    slug: 'odt-to-pdf',
    i18nKey: 'odtToPdf',
    tool: ToolType.ODT_TO_PDF,
    title: {
      en: 'ODT to PDF - Free & Secure LibreOffice Converter | pdfcanada.ca',
      fr: 'ODT vers PDF - LibreOffice en PDF Gratuitement | pdfcanada.ca',
      pt: 'ODT para PDF - LibreOffice em PDF Grátis | pdfcanada.ca'
    },
    description: {
      en: 'ODT to PDF - Convert LibreOffice ODT files to high-quality PDF format. 100% private, local-first processing ensures your documents stay secure. Try it now for free.',
      fr: 'ODT vers PDF - Convertissez vos fichiers LibreOffice en PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'ODT para PDF - Converta seus arquivos LibreOffice para PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['ODT to PDF', 'OpenOffice to PDF', 'LibreOffice to PDF', 'convert ODT', 'odt file to pdf'],
      fr: ['ODT vers PDF', 'OpenOffice vers PDF', 'LibreOffice vers PDF', 'convertir ODT', 'fichier odt en pdf'],
      pt: ['odt para pdf', 'openoffice para pdf', 'libreoffice para pdf', 'converter odt', 'arquivo odt para pdf']
    },
    accept: '.odt,application/vnd.oasis.opendocument.text'
  },
  // High-volume French keyword tools
  {
    slug: 'jpg-to-pdf',
    i18nKey: 'jpgToPdf',
    tool: ToolType.JPG_TO_PDF,
    title: {
      en: 'JPG to PDF - Free & Secure Image to PDF Converter | pdfcanada.ca',
      fr: 'Convertir un JPG en PDF - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'JPG para PDF - Conversor de Imagem Grátis | pdfcanada.ca'
    },
    description: {
      en: 'JPG to PDF - Securely convert JPG images into high-quality PDF documents. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'JPG vers PDF - Convertissez vos images JPG en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sans limite.',
      pt: 'JPG para PDF - Converta suas imagens JPG para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'JPG to PDF', 'JPEG to PDF', 'convert JPG to PDF', 'image to PDF converter',
        'jpg to pdf converter free', 'combine jpg to pdf', 'photos to pdf',
        'turn picture into pdf'
      ],
      fr: [
        'convertir jpg en pdf', 'jpg en pdf', 'photo en pdf',
        'image en pdf', 'convertir image en pdf',
        'transformer jpg en pdf', 'assembler jpg en pdf',
        'jpg vers pdf gratuit', 'logiciel convertisseur jpg pdf'
      ],
      pt: [
        'jpg para pdf', 'converter jpg em pdf', 'foto para pdf',
        'imagem para pdf', 'transformar foto em pdf',
        'juntar jpg em pdf', 'converter imagem para pdf'
      ]
    },
    accept: '.jpg,.jpeg,image/jpeg'
  },
  {
    slug: 'jpeg-to-pdf',
    i18nKey: 'jpegToPdf',
    tool: ToolType.JPEG_TO_PDF,
    title: {
      en: 'JPEG to PDF - Free & Secure High-Quality Converter | pdfcanada.ca',
      fr: 'JPEG vers PDF - Conversion Photo Gratuite | pdfcanada.ca',
      pt: 'JPEG para PDF - Conversão de Fotos Grátis | pdfcanada.ca'
    },
    description: {
      en: 'JPEG to PDF - Transform JPEG photos into professional PDF documents. 100% private, local-first processing ensures your images stay secure. Try it now for free.',
      fr: 'JPEG vers PDF - Convertissez vos photos JPEG en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et haute qualité.',
      pt: 'JPEG para PDF - Converta suas fotos JPEG para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['JPEG to PDF', 'convert JPEG', 'photos to PDF', 'jpeg converter', 'save jpeg as pdf'],
      fr: ['JPEG vers PDF', 'convertir JPEG', 'photos vers PDF', 'image jpeg en pdf'],
      pt: ['jpeg para pdf', 'converter jpeg', 'fotos para pdf', 'salvar jpeg como pdf']
    },
    accept: '.jpg,.jpeg,image/jpeg'
  },
  {
    slug: 'png-to-pdf',
    i18nKey: 'pngToPdf',
    tool: ToolType.PNG_TO_PDF,
    title: {
      en: 'PNG to PDF - Free & Secure Screenshot Converter | pdfcanada.ca',
      fr: 'PNG vers PDF - Images sans Perte Gratuitement | pdfcanada.ca',
      pt: 'PNG para PDF - Imagens sem Perda Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PNG to PDF - Convert PNG images and screenshots to high-quality PDF. 100% private, local-first processing ensures your files stay secure. Try it now for free.',
      fr: 'PNG vers PDF - Convertissez vos images PNG en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sans perte.',
      pt: 'PNG para PDF - Converta suas imagens PNG para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PNG to PDF', 'convert PNG', 'image to PDF', 'screenshot to pdf'],
      fr: ['PNG vers PDF', 'convertir PNG', 'image vers PDF', 'capture d\'écran en pdf'],
      pt: ['png para pdf', 'converter png', 'imagem png para pdf', 'print para pdf']
    },
    accept: '.png,image/png'
  },
  {
    slug: 'pdf-to-jpg',
    i18nKey: 'pdfToJpg',
    tool: ToolType.PDF_TO_JPG,
    title: {
      en: 'PDF to JPG - Free & Secure Page to Image Converter | pdfcanada.ca',
      fr: 'PDF vers JPG - Conversion Gratuite et Sécurisée | pdfcanada.ca',
      pt: 'PDF para JPG - Conversão Grátis e Segura | pdfcanada.ca'
    },
    description: {
      en: 'PDF to JPG - Securely convert PDF pages into high-quality JPG images. 100% private, local-first processing ensures your documents stay safe. Try it for free now.',
      fr: 'PDF vers JPG - Convertissez vos pages PDF en images JPG. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et haute qualité.',
      pt: 'PDF para JPG - Converta suas páginas PDF em imagens JPG. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to JPG', 'convert PDF to image', 'PDF to picture'],
      fr: ['PDF vers JPG', 'convertir PDF en image', 'PDF en photo'],
      pt: ['pdf para jpg', 'converter pdf em imagem', 'extrair jpg de pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-png',
    i18nKey: 'pdfToPng',
    tool: ToolType.PDF_TO_PNG,
    title: {
      en: 'PDF to PNG - Free & Secure Transparent Image Converter | pdfcanada.ca',
      fr: 'PDF vers PNG - Haute Qualité et Gratuit | pdfcanada.ca',
      pt: 'PDF para PNG - Alta Qualidade e Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to PNG - Convert PDF pages into high-quality PNG images securely. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'PDF vers PNG - Convertissez vos pages PDF en images PNG. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et transparent.',
      pt: 'PDF para PNG - Converta suas páginas PDF em imagens PNG. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to PNG', 'convert PDF to PNG', 'extract PNG from PDF', 'save pdf as png', 'turn pdf into image'],
      fr: ['PDF vers PNG', 'convertir PDF en PNG', 'extraire PNG du PDF', 'enregistrer pdf en png'],
      pt: ['pdf para png', 'converter pdf em png', 'extrair png de pdf', 'salvar pdf como png']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'image-to-pdf',
    i18nKey: 'imageToPdf',
    tool: ToolType.IMAGE_TO_PDF,
    title: {
      en: 'Image to PDF - Free & Secure Universal Image Converter | pdfcanada.ca',
      fr: 'Image en PDF - Convertisseur Universel Gratuit | pdfcanada.ca',
      pt: 'Imagem para PDF - Conversor Universal Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Image to PDF - Securely convert any image (JPG, PNG, WebP) to PDF. 100% private, local-first processing ensures your files stay on your device. Try it for free now.',
      fr: 'Image vers PDF - Convertissez vos photos en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et universel.',
      pt: 'Imagem para PDF - Converta suas fotos em documentos PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'image to PDF', 'convert image to PDF', 'photo to PDF', 'picture to PDF',
        'convert picture to pdf', 'turn photos into pdf', 'make pdf from images'
      ],
      fr: [
        'convertir image en pdf', 'photo en pdf', 'image vers pdf',
        'transformer photo en pdf', 'créer pdf avec images',
        'convertisseur image pdf gratuit'
      ],
      pt: [
        'imagem para pdf', 'converter imagem', 'fotos para pdf',
        'foto em pdf', 'transformar imagem em pdf',
        'criar pdf de fotos'
      ]
    },
    accept: '.jpg,.jpeg,.png,.gif,.bmp,.webp,.avif,image/jpeg,image/png,image/gif,image/bmp,image/webp,image/avif'
  },

  {
    slug: 'pdf-to-image',
    i18nKey: 'pdfToImage',
    tool: ToolType.PDF_TO_JPG,
    title: {
      en: 'PDF to Image - Free & Secure Document to Image Converter | pdfcanada.ca',
      fr: 'Convertir un PDF en Image - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'PDF para Imagem - Conversor de Documento Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to Image - Securely save PDF pages as high-quality JPG or PNG images. 100% private, local-first processing ensures your files stay safe. Try it for free now.',
      fr: 'PDF vers image - Enregistrez vos pages PDF en format JPG ou PNG. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'PDF para imagem - Salve páginas de PDF como imagens JPG ou PNG. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to image', 'convert PDF to image', 'extract images from PDF'],
      fr: [
        // High volume primary keywords (2,400+ searches)
        'convertir pdf en image',
        'pdf en image gratuit',
        'extraire images pdf',
        'convertir fichier pdf en image'
      ],
      pt: [
        'pdf para imagem',
        'converter pdf em imagem',
        'extrair imagens pdf'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-jpeg',
    i18nKey: 'pdfToJpeg',
    tool: ToolType.PDF_TO_JPG,
    title: {
      en: 'PDF to JPEG - Free & Secure Document to JPEG Converter | pdfcanada.ca',
      fr: 'Convertir un PDF en JPEG - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'PDF para JPEG - Conversor de Documento Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to JPEG - Securely convert PDF pages into high-quality JPEG images. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'PDF vers JPEG - Convertissez vos pages PDF en images JPEG. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'PDF para JPEG - Converta suas páginas PDF em imagens JPEG. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to JPEG', 'convert PDF to JPEG', 'PDF JPEG converter'],
      fr: [
        // High volume primary keywords (12,100+ searches)
        'convertir pdf en jpeg',
        'convert pdf to jpeg',
        'convertir pdf jpeg',
        'pdf en jpeg gratuit',
        'convertir fichier pdf en jpeg',
        'pdf vers jpeg en ligne'
      ],
      pt: [
        'pdf para jpeg',
        'converter pdf em jpeg',
        'pdf jpeg'
      ]
    },
    accept: '.pdf,application/pdf'
  },

  {
    slug: 'pdf-to-ubl',
    i18nKey: 'pdfToUbl',
    tool: ToolType.PDF_TO_UBL,
    title: {
      en: 'PDF to UBL - Free & Secure E-Invoice Generator | pdfcanada.ca',
      fr: 'PDF vers UBL - Générateur de Factures Sécurisé | pdfcanada.ca',
      pt: 'PDF para UBL - Gerador de Faturas Seguro | pdfcanada.ca'
    },
    description: {
      en: 'PDF to UBL - Convert PDF invoices to UBL 2.1 XML format for e-invoicing. 100% private, local-first processing ensures your data stays secure. Try it now for free.',
      fr: 'PDF vers UBL - Convertissez vos factures PDF en format XML UBL 2.1. Traitement 100% local : vos fichiers restent sur votre appareil. Gratuit et conforme.',
      pt: 'PDF para UBL - Converta faturas PDF para o padrão UBL 2.1 (XML). Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to UBL', 'convert PDF to UBL', 'invoice to UBL', 'UBL converter'],
      fr: ['PDF vers UBL', 'convertir PDF en UBL', 'facture vers UBL', 'convertisseur UBL'],
      pt: ['pdf para ubl', 'fatura ubl', 'converter fatura', 'peppol']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-to-ppt',
    i18nKey: 'pdfToPpt',
    tool: ToolType.PDF_TO_PPT,
    title: {
      en: 'PDF to PowerPoint - Free & Secure PPTX Converter | pdfcanada.ca',
      fr: 'PDF vers PowerPoint - Slides Editables | pdfcanada.ca',
      pt: 'PDF para PowerPoint - Slides Editáveis Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to PowerPoint - Securely turn PDF pages into editable PowerPoint slides (PPTX). 100% private, local-first processing ensures your files stay safe. Try it for free.',
      fr: 'PDF vers PowerPoint - Transformez vos PDF en slides PowerPoint modifiables. Traitement 100% local : vos fichiers restent sur votre appareil. Gratuit et rapide.',
      pt: 'PDF para PowerPoint - Converta seus PDFs em slides PowerPoint editáveis. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'PDF to PowerPoint', 'PDF to PPT', 'convert PDF to PPTX',
        'PDF to slides', 'turn pdf into powerpoint',
        'pdf to ppt converter free'
      ],
      fr: [
        'convertir pdf en powerpoint', 'pdf en ppt', 'pdf en diapositives',
        'convertisseur pdf powerpoint gratuit', 'transformer pdf en ppt',
        'pdf vers pptx'
      ],
      pt: [
        'pdf para powerpoint', 'converter pdf em ppt', 'pdf para slides',
        'pdf para pptx', 'transformar pdf em powerpoint',
        'conversor pdf ppt gratis'
      ]
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'ppt-to-pdf',
    i18nKey: 'pptToPdf',
    tool: ToolType.PPT_TO_PDF,
    title: {
      en: 'PowerPoint to PDF - Free & Secure Slides Converter | pdfcanada.ca',
      fr: 'PowerPoint en PDF - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'PowerPoint para PDF - Conversor de Slides Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PowerPoint to PDF - Securely convert PPT/PPTX presentations to high-quality PDF. 100% private, local-first processing ensures your slides stay safe. Try it for free.',
      fr: 'PowerPoint vers PDF - Convertissez vos fichiers PowerPoint en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'PowerPoint para PDF - Converta seus slides PowerPoint para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'PowerPoint to PDF', 'PPT to PDF', 'convert PPTX to PDF',
        'slides to PDF', 'save powerpoint as pdf', 'ppt converter'
      ],
      fr: [
        'convertir powerpoint en pdf', 'ppt en pdf', 'diaporama en pdf',
        'enregistrer ppt en pdf', 'convertisseur powerpoint pdf gratuit',
        'fichier ppt en pdf'
      ],
      pt: [
        'powerpoint para pdf', 'ppt para pdf', 'converter slides em pdf',
        'salvar ppt como pdf', 'conversor powerpoint para pdf',
        'arquivo ppt para pdf'
      ]
    },
    accept: '.pptx,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint'
  },
  {
    slug: 'pages-to-pdf',
    i18nKey: 'pagesToPdf',
    tool: ToolType.PAGES_TO_PDF,
    title: {
      en: 'Pages to PDF - Free & Secure Apple Pages Converter | pdfcanada.ca',
      fr: 'Pages en PDF - Convertisseur Apple Pages Gratuit | pdfcanada.ca',
      pt: 'Pages para PDF - Conversor Apple Pages Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Pages to PDF - Securely convert Apple Pages documents to PDF format. 100% private, local-first processing ensures your files stay on your device. Try it for free.',
      fr: 'Pages vers PDF - Convertissez vos documents Apple Pages en format PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'Pages para PDF - Converta seus documentos Apple Pages para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['Pages to PDF', 'convert Pages to PDF', 'Apple Pages converter', 'iWork to PDF'],
      fr: [
        // High volume primary keywords (2,900+ searches)
        'convertir pages en pdf',
        'pages en pdf',
        'pages en pdf gratuit',
        'convertir fichier pages en pdf',
        'pages vers pdf en ligne',
        'apple pages en pdf',
        'convertir document pages en pdf'
      ],
      pt: [
        'pages para pdf',
        'converter pages',
        'apple pages em pdf'
      ]
    },
    accept: '.pages,application/vnd.apple.pages'
  },
  {
    slug: 'html-to-pdf',
    i18nKey: 'htmlToPdf',
    tool: ToolType.HTML_TO_PDF,
    title: {
      en: 'HTML to PDF - Free & Secure Web Page Converter | pdfcanada.ca',
      fr: 'HTML en PDF - Enregistrer une Page Web Gratuitement | pdfcanada.ca',
      pt: 'HTML para PDF - Salvar Página Web em PDF Grátis | pdfcanada.ca'
    },
    description: {
      en: 'HTML to PDF - Securely convert HTML files and web pages into high-quality PDF. 100% private, local-first processing ensures your data stays safe. Try it for free.',
      fr: 'HTML vers PDF - Convertissez vos pages web et fichiers HTML en PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'HTML para PDF - Converta suas páginas web e arquivos HTML para PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e rápido.'
    },
    keywords: {
      en: [
        'html to pdf',
        'html to pdf canada',
        'convert html to pdf',
        'save webpage as pdf',
        'pdf html to pdf',
        'secure html to pdf'
      ],
      fr: ['html en pdf', 'html en pdf canada'],
      pt: ['html para pdf', 'converter html', 'salvar web como pdf']
    },
    accept: '.html,.htm,text/html'
  },
  {
    slug: 'ofx-to-excel',
    i18nKey: 'ofxToExcel',
    tool: ToolType.OFX_TO_EXCEL,
    title: {
      en: 'OFX to Excel - Free & Secure Bank Statement Converter | pdfcanada.ca',
      fr: 'Convertir un OFX en Excel - Outil Gratuit et Sécurisé | pdfcanada.ca',
      pt: 'Converter OFX para Excel - Extrato Bancário Grátis | pdfcanada.ca'
    },
    description: {
      en: 'OFX to Excel - Securely convert OFX bank statements to Excel (XLSX). 100% private, local-first processing ensures your banking data stays safe. Try it now for free.',
      fr: 'OFX vers Excel - Convertissez vos relevés bancaires OFX en Excel. Traitement 100% local : vos données ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'OFX para Excel - Converta seus extratos bancários OFX para o formato Excel. Processamento 100% local: seus dados nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['ofx to excel', 'ofx converter', 'convert ofx file', 'ofx to csv', 'open ofx file', 'bank statement converter'],
      fr: ['ofx en excel', 'convertisseur ofx', 'fichier ofx', 'relevé bancaire excel'],
      pt: ['ofx para excel', 'converter ofx', 'abrir arquivo ofx', 'ofx para csv', 'extrato bancário excel', 'conversor ofx online', 'como abrir ofx no excel']
    },
    featureList: {
      en: [
        'Preview transactions before export',
        'Multi-account OFX support',
        'Export to Excel, CSV, QBO, QIF',
        'Smart date normalization',
        'Balance & statistics dashboard',
        '100% client-side processing'
      ],
      fr: [
        'Prévisualisez les transactions',
        'Support multi-comptes OFX',
        'Export Excel, CSV, QBO, QIF',
        'Normalisation des dates',
        'Tableau de bord statistiques',
        'Traitement 100% local'
      ],
      pt: [
        'Visualize transações antes de exportar',
        'Suporte a múltiplas contas OFX',
        'Exporte para Excel, CSV, QBO, QIF',
        'Normalização inteligente de datas',
        'Dashboard de saldo e estatísticas',
        'Processamento 100% local'
      ]
    },
    accept: '.ofx,.qfx,application/x-ofx'
  },
  {
    slug: 'xml-to-pdf',
    i18nKey: 'xmlToPdf',
    tool: ToolType.XML_TO_PDF,
    title: {
      en: 'XML to PDF - Free & Secure Document Generator | pdfcanada.ca',
      fr: 'XML vers PDF - Générateur de Documents Sécurisé | pdfcanada.ca',
      pt: 'XML para PDF - Gerador de Documentos Seguro | pdfcanada.ca'
    },
    description: {
      en: 'XML to PDF - Securely convert XML data into readable PDF documents. 100% private, local-first processing ensures your documents stay safe. Try it now for free.',
      fr: 'XML vers PDF - Générez vos documents PDF à partir de données XML. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'XML para PDF - Converta seus dados XML para documentos PDF legíveis. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['xml to pdf', 'convert xml to pdf', 'xml file to pdf', 'transform xml to pdf', 'xml converter', 'xml to pdf converter', 'ooxml to pdf'],
      fr: ['xml en pdf', 'convertir xml en pdf', 'fichier xml en pdf', 'transformer xml en pdf', 'convertisseur xml'],
      pt: [
        'converter xml em pdf',
        'converter xml para pdf',
        'transformar xml em pdf',
        'xml para pdf',
        'conversor xml para pdf',
        'conversor de xml para pdf',
        'converte xml em pdf',
        'converte xml para pdf',
        'arquivo xml para pdf',
        'arquivo xml em pdf',
        'como converter xml em pdf',
        'xml para pdf online',
        'converter xml para pdf online',
        'xml para pdf converter online',
        'converter xml em pdf online',
        'converter arquivo xml para pdf',
        'converter arquivo xml em pdf',
        'como transformar xml em pdf',
        'como transformar um xml em pdf',
        'como transformar arquivo xml em pdf',
        'transformar arquivo xml em pdf',
        'transformar arquivo xml para pdf',
        'como converter arquivo xml para pdf',
        'como converter arquivo xml em pdf',
        'como converter um arquivo xml em pdf',
        'como converter um arquivo xml para pdf',
        'converter xml em pdf grátis',
        'transformar xml em pdf grátis',
        'transformar xml em pdf gratuito',
        'conversor xml em pdf',
        'conversor de xml em pdf',
        'xml converter pdf',
        'converter xml pdf',
        'xml pra pdf',
        'de xml para pdf',
        'conversão xml para pdf',
        'imprimir xml em pdf',
        'abrir arquivo xml em pdf',
        'ooxml to pdf'
      ]
    },
    featureList: {
      en: ['Instant XML to PDF conversion', 'Preserves structure', '100% browser-based', 'No file upload'],
      fr: ['Conversion XML en PDF instantanée', 'Préserve la structure', '100% navigateur', 'Sans téléchargement'],
      pt: ['Conversão XML para PDF instantânea', 'Preserva estrutura', '100% no navegador', 'Sem upload de arquivo']
    },
    accept: '.xml,application/xml,text/xml'
  },
  {
    slug: 'pdf-to-xml',
    i18nKey: 'pdfToXml',
    tool: ToolType.PDF_TO_XML,
    title: {
      en: 'PDF to XML - Free & Secure Data Extractor | pdfcanada.ca',
      fr: 'PDF vers XML - Extraction de Données Sécurisée | pdfcanada.ca',
      pt: 'PDF para XML - Extração de Dados Segura | pdfcanada.ca'
    },
    description: {
      en: 'PDF to XML - Securely extract structured XML data from PDF documents. 100% private, local-first processing ensures your data stays safe. Try it for free now.',
      fr: 'PDF vers XML - Extrayez vos données PDF au format XML structuré. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et sécurisé.',
      pt: 'PDF para XML - Extraia seus dados de PDF para o formato XML estruturado. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'pdf to xml',
        'convert pdf to xml',
        'pdf file to xml',
        'pdf to xml converter',
        'extract xml from pdf',
        'save pdf as xml',
        'pdf to ubl',
        'convert pdf to ubl',
        'convert pdf to peppol bis billing 3.0',
        'ubl 2.1 invoice generator',
        'pdf to xml invoice free',
        'electronic invoicing mandate canada',
        'xrechnung generator free',
        'zugferd pdf conversion',
        'extract invoice data to xml'
      ],
      fr: [
        'pdf en xml',
        'convertir pdf en xml',
        'fichier pdf en xml',
        'convertisseur pdf en xml',
        'pdf vers ubl',
        'générer facture ubl gratuit',
        'pdf vers chorus pro',
        'factur-x gratuit',
        'conversion facture électronique obligatoire',
        'convertir facture pdf en xml'
      ],
      pt: [
        'converter pdf em xml',
        'converter pdf para xml',
        'pdf para xml',
        'conversor pdf para xml',
        'conversor pdf em xml',
        'converte pdf em xml',
        'converte pdf para xml',
        'conversão pdf para xml',
        'converter pdf em xml gratuito',
        'converter pdf para xml gratuito',
        'converter pdf em xml grátis',
        'converter pdf para xml online',
        'converter pdf em xml online',
        'pdf para xml online',
        'pdf para xml converter',
        'pdf para xml converter online',
        'pdf para xml grátis',
        'como converter pdf em xml',
        'como converter pdf para xml',
        'transformar pdf em xml',
        'transforma pdf em xml',
        'transformar pdf para xml',
        'transformar pdf em xml grátis',
        'convert pdf to xml format',
        'converter arquivo pdf em xml',
        'converter arquivo pdf para xml',
        'converter de pdf para xml',
        'ilovepdf pdf para xml',
        'transformar pdf em xml ilovepdf',
        'converter pdf para xml ilovepdf',
        'gerador xml ubl grátis',
        'converter pdf para fatura eletrônica',
        'peppol portugal pdf'
      ]
    },
    featureList: {
      en: ['Extract structured XML', 'Maintains document hierarchy', '100% browser-based', 'No file upload'],
      fr: ['Extraction XML structuré', 'Préserve la hiérarchie', '100% navigateur', 'Sans téléchargement'],
      pt: ['Extração XML estruturada', 'Mantém hierarquia do documento', '100% no navegador', 'Sem upload de arquivo']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'odg-to-pdf',
    i18nKey: 'odgToPdf',
    tool: ToolType.ODG_TO_PDF,
    title: {
      en: 'ODG to PDF - Free & Secure LibreOffice Draw Converter | pdfcanada.ca',
      fr: 'ODG vers PDF - Convertir Dessin LibreOffice Gratuitement | pdfcanada.ca',
      pt: 'ODG para PDF - Converter Desenho LibreOffice Grátis | pdfcanada.ca'
    },
    description: {
      en: 'ODG to PDF - Securely convert ODG files to PDF while preserving vector quality. 100% private, local-first processing ensures your files stay safe. Try it for free.',
      fr: 'ODG vers PDF - Convertissez vos fichiers ODG en format PDF de qualité. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'ODG para PDF - Converta seus arquivos ODG para o formato PDF vetorial. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'odg to pdf',
        'convert odg to pdf',
        'odg to pdf converter',
        'convert odg file to pdf',
        'online odg to pdf',
        'how to convert odg to pdf',
        'convert odg to pdf online free',
        'convert odg to pdf without software',
        'open odg file as pdf',
        'export odg to pdf',
        'what is an odg file',
        'how to open odg file',
        'odg file not opening',
        'odg vs pdf',
        'best odg to pdf converter'
      ],
      fr: [
        'odg vers pdf',
        'convertir odg en pdf',
        'convertisseur odg en pdf',
        'fichier odg en pdf',
        'convertir un fichier odg en pdf',
        'comment convertir odg en pdf',
        'convertir odg en pdf en ligne',
        'convertir odg en pdf gratuitement',
        'convertir odg en pdf sans logiciel',
        'exporter odg en pdf',
        'quest-ce quun fichier odg',
        'comment ouvrir un fichier odg',
        'fichier odg ne souvre pas',
        'différence entre odg et pdf',
        'meilleur convertisseur odg en pdf'
      ],
      pt: [
        'odg para pdf',
        'converter odg para pdf',
        'conversor odg para pdf',
        'converter arquivo odg para pdf',
        'transformar odg em pdf',
        'como converter odg para pdf',
        'converter odg para pdf online',
        'converter odg para pdf grátis',
        'converter odg para pdf sem instalar programa',
        'exportar odg para pdf',
        'o que é arquivo odg',
        'como abrir arquivo odg',
        'arquivo odg não abre',
        'diferença entre odg e pdf',
        'melhor conversor odg para pdf'
      ]
    },
    featureList: {
      en: ['Instant ODG to PDF conversion', 'Preserves vector graphics', '100% browser-based', 'No software installation'],
      fr: ['Conversion ODG en PDF instantanée', 'Préserve les graphiques vectoriels', '100% navigateur', 'Sans installation'],
      pt: ['Conversão ODG para PDF instantânea', 'Preserva gráficos vetoriais', '100% no navegador', 'Sem instalar programa']
    },
    accept: '.odg,application/vnd.oasis.opendocument.graphics'
  },
  {
    slug: 'pdf-to-svg',
    i18nKey: 'pdfToSvg',
    tool: ToolType.PDF_TO_SVG,
    title: {
      en: 'PDF to SVG - Free & Secure Vector Graphics Converter | pdfcanada.ca',
      fr: 'PDF vers SVG - Images Vectorielles Gratuitement | pdfcanada.ca',
      pt: 'PDF para SVG - Gráficos Vetoriais Grátis | pdfcanada.ca'
    },
    description: {
      en: 'PDF to SVG - Securely transform PDF pages into scalable SVG vector graphics. 100% private, local-first processing ensures your files stay safe. Try it for free.',
      fr: 'PDF vers SVG - Convertissez vos pages PDF en graphiques vectoriels SVG. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et précis.',
      pt: 'PDF para SVG - Converta suas páginas PDF em gráficos vetoriais SVG. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to SVG', 'convert PDF to SVG', 'PDF to vector', 'extract SVG from PDF', 'PDF SVG converter'],
      fr: ['PDF vers SVG', 'convertir PDF en SVG', 'PDF en vecteur', 'convertisseur PDF SVG'],
      pt: ['pdf para svg', 'converter pdf em svg', 'pdf para vetor', 'conversor pdf svg']
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Convert PDF to scalable vectors', 'Preserve quality at any size', '100% browser-based', 'Download as ZIP'],
      fr: ['Convertir PDF en vecteurs', 'Préserver la qualité', '100% navigateur', 'Télécharger en ZIP'],
      pt: ['Converter PDF para vetores', 'Preservar qualidade', '100% no navegador', 'Baixar como ZIP']
    }
  },
  {
    slug: 'tif-to-pdf',
    i18nKey: 'tifToPdf',
    tool: ToolType.TIF_TO_PDF,
    title: {
      en: 'TIF to PDF - Free & Secure High-Resolution Converter | pdfcanada.ca',
      fr: 'TIF vers PDF - Conversion d\'Images Gratuitement | pdfcanada.ca',
      pt: 'TIF para PDF - Conversão de Imagens Grátis | pdfcanada.ca'
    },
    description: {
      en: 'TIF to PDF - Securely convert TIF/TIFF images into high-quality PDF documents. 100% private, local-first processing ensures your files stay safe. Try it for free.',
      fr: 'TIF vers PDF - Convertissez vos images TIFF en documents PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'TIF para PDF - Converta suas imagens TIFF para o formato PDF. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: ['TIF to PDF', 'TIFF to PDF', 'convert TIF to PDF', 'TIF converter', 'TIFF converter'],
      fr: ['TIF vers PDF', 'TIFF vers PDF', 'convertir TIF en PDF', 'convertisseur TIF', 'convertisseur TIFF'],
      pt: ['tif para pdf', 'tiff para pdf', 'converter tif em pdf', 'conversor tif', 'conversor tiff']
    },
    accept: '.tif,.tiff,image/tiff',
    featureList: {
      en: ['Convert TIF/TIFF to PDF', 'Preserve image quality', '100% browser-based', 'Multi-page TIFF support'],
      fr: ['Convertir TIF/TIFF en PDF', 'Préserver la qualité', '100% navigateur', 'Support TIFF multi-pages'],
      pt: ['Converter TIF/TIFF para PDF', 'Preservar qualidade', '100% no navegador', 'Suporte TIFF multi-páginas']
    }
  },
  {
    slug: 'unlock-pdf',
    i18nKey: 'unlockPdf',
    tool: ToolType.UNLOCK_PDF,
    title: {
      en: 'Unlock PDF - Free & Secure Password Remover | pdfcanada.ca',
      fr: 'Déverrouiller un PDF - Supprimer le Mot de Passe | pdfcanada.ca',
      pt: 'Desbloquear PDF - Remover Senha Online Grátis | pdfcanada.ca'
    },
    description: {
      en: 'Unlock PDF - Securely remove password protection and restrictions from PDF files. 100% private, local-first processing ensures your files stay safe. Try it for free.',
      fr: 'Déverrouiller un PDF - Supprimez la protection par mot de passe de vos PDF. Traitement 100% local : vos fichiers ne quittent jamais votre appareil. Gratuit et rapide.',
      pt: 'Desbloquear PDF - Remova a proteção por senha de arquivos PDF com segurança. Processamento 100% local: seus arquivos nunca saem do dispositivo. Grátis e seguro.'
    },
    keywords: {
      en: [
        'unlock PDF', 'remove PDF password', 'PDF password remover',
        'unprotect PDF', 'decrypt PDF', 'PDF unlocker',
        'remove security from pdf', 'unlock secured pdf'
      ],
      fr: [
        'déverrouiller PDF', 'supprimer mot de passe PDF', 'déprotéger PDF',
        'décrypter PDF', 'déverrouilleur PDF',
        'enlever protection pdf', 'ouvrir pdf protégé'
      ],
      pt: [
        'desbloquear pdf', 'remover senha pdf', 'desproteger pdf',
        'descriptografar pdf', 'desbloqueador pdf',
        'tirar senha pdf', 'quebrar senha pdf'
      ]
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['Remove owner passwords', 'Enable editing and printing', '100% browser-based', 'Your files stay private'],
      fr: ['Supprimer mots de passe propriétaire', 'Activer édition et impression', '100% navigateur', 'Vos fichiers restent privés'],
      pt: ['Remover senhas de proprietário', 'Habilitar edição e impressão', '100% no navegador', 'Seus arquivos ficam privados']
    }
  },
  {
    slug: 'pdf-reader',
    i18nKey: 'pdfReader',
    tool: ToolType.PDF_READER,
    title: {
      en: 'Free PDF Reader - Secure & Fast Online Document Viewer | pdfcanada.ca',
      fr: 'Lecteur PDF Gratuit - Visionneuse Sécurisée | pdfcanada.ca',
      pt: 'Leitor PDF Grátis - Visualizador Seguro | pdfcanada.ca'
    },
    description: {
      en: 'Free PDF Reader - Securely view and read PDF documents in your browser. 100% private, local-first processing ensures your files stay safe. Try it for free now.',
      fr: 'Lecteur PDF gratuit - Lisez vos documents PDF en toute sécurité. Traitement 100% local : vos fichiers ne sont jamais téléchargés. Gratuit et rapide.',
      pt: 'Leitor PDF grátis - Visualize e leia documentos PDF com segurança. Processamento 100% local: seus arquivos nunca saem do seu dispositivo. Grátis e leve.'
    },
    keywords: {
      en: ['PDF reader', 'PDF viewer', 'read PDF online', 'view PDF', 'open PDF', 'PDF reader online', 'free PDF viewer'],
      fr: ['lecteur PDF', 'visionneuse PDF', 'lire PDF en ligne', 'voir PDF', 'ouvrir PDF', 'lecteur PDF gratuit'],
      pt: ['leitor pdf', 'visualizador pdf', 'ler pdf online', 'ver pdf', 'abrir pdf', 'leitor pdf grátis']
    },
    accept: '.pdf,application/pdf',
    featureList: {
      en: ['View PDFs in browser', 'Zoom and page navigation', 'Print and download', '100% private - no uploads'],
      fr: ['Voir PDF dans le navigateur', 'Zoom et navigation', 'Imprimer et télécharger', '100% privé - sans téléchargement'],
      pt: ['Ver PDF no navegador', 'Zoom e navegação', 'Imprimir e baixar', '100% privado - sem uploads']
    }
  }
];

export function getToolConfig(slug: string): ToolConfig | undefined {
  return TOOL_CONFIGS.find((config) => config.slug === slug);
}

export function getLocalizedToolConfig(slug: string, lang: Locale): { slug: string; title: string; description: string; keywords: string[] } | undefined {
  const config = TOOL_CONFIGS.find((c) => c.slug === slug);
  if (!config) return undefined;

  return {
    slug: config.slug,
    title: config.title[lang] || config.title['en'],
    description: config.description[lang] || config.description['en'],
    keywords: config.keywords[lang] || config.keywords['en'],
  };
}

export function getAllToolSlugs(): string[] {
  return TOOL_CONFIGS.map((config) => config.slug);
}
