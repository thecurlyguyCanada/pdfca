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
      en: 'Delete PDF Pages',
      fr: 'Supprimer Pages PDF - Gratuit et Sécurisé',
      pt: 'Apagar Páginas PDF - Grátis e Seguro'
    },
    description: {
      en: 'Remove unwanted pages from PDF files securely. Processing happens locally in your browser - your files never leave your device. 100% free with no limits.',
      fr: 'Supprimez des pages de vos fichiers PDF en toute sécurité. Le traitement se fait localement dans votre navigateur. 100% gratuit, sans inscription.',
      pt: 'Remova páginas indesejadas de arquivos PDF com segurança. O processamento acontece localmente no seu navegador. 100% grátis, sem limites.'
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
      en: 'Rotate PDF',
      fr: 'Pivoter PDF - Rotation Permanente Gratuite',
      pt: 'Girar PDF - Rotação Permanente Grátis'
    },
    description: {
      en: 'Rotate PDF pages permanently. Fix upside-down PDFs instantly. Free, secure tool that works offline in your browser. No file size limits.',
      fr: 'Faites pivoter vos PDF de façon permanente. Corrigez l\'orientation des pages instantanément. Outil gratuit et sécurisé fonctionnant hors ligne.',
      pt: 'Gire páginas de PDF permanentemente. Corrija a orientação instantaneamente. Ferramenta grátis e segura que funciona offline.'
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
      en: 'Compress PDF',
      fr: 'Compresser PDF - Réduire la taille PDF',
      pt: 'Comprimir PDF - Reduzir Tamanho PDF'
    },
    description: {
      en: 'Compress PDF files to reduce file size without losing quality. Local processing ensures your documents stay private. Best free PDF compressor.',
      fr: 'Compressez vos fichiers PDF pour réduire leur taille sans perdre en qualité. Le traitement local garantit la confidentialité. Meilleur compresseur PDF gratuit.',
      pt: 'Comprima arquivos PDF para reduzir o tamanho sem perder qualidade. Processamento local garante privacidade. Melhor compressor de PDF grátis.'
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
      en: 'Merge PDF',
      fr: 'Fusionner PDF - Combiner des fichiers PDF',
      pt: 'Juntar PDF - Combinar Arquivos PDF'
    },
    description: {
      en: 'Combine multiple PDFs into one document securely. Reorder pages with drag & drop. No uploads required - 100% local PDF merger.',
      fr: 'Combinez plusieurs PDF en un seul document en toute sécurité. Réorganisez les pages par glisser-déposer. Aucun téléchargement requis - fusion 100% locale.',
      pt: 'Combine vários PDFs em um único documento segurança. Reordene páginas arrastando e soltando. Sem upload obrigatório - juntar PDF 100% local.'
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
      en: 'Split PDF',
      fr: 'Diviser PDF - Extraire des Pages',
      pt: 'Dividir PDF - Extrair Páginas'
    },
    description: {
      en: 'Split a PDF file into multiple documents or extract specific pages. Fast, free, and secure - files are processed on your device.',
      fr: 'Divisez un fichier PDF en plusieurs documents ou extrayez des pages spécifiques. Rapide, gratuit et sécurisé - fichiers traités sur votre appareil.',
      pt: 'Divida um arquivo PDF em vários documentos ou extraia páginas específicas. Rápido, grátis e seguro - arquivos processados no seu dispositivo.'
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
      en: 'Extract PDF Pages',
      fr: 'Extraire Pages PDF - Outil Gratuit',
      pt: 'Extrair Páginas PDF - Ferramenta Grátis'
    },
    description: {
      en: 'Extract specific pages from PDF documents. functionality Create a new PDF with just the pages you need. Free, fast, and secure extraction.',
      fr: 'Extrayez des pages spécifiques de documents PDF. Créez un nouveau PDF avec seulement les pages dont vous avez besoin. Gratuit et sécurisé.',
      pt: 'Extraia páginas específicas de documentos PDF. Crie um novo PDF apenas com as páginas que você precisa. Extração grátis e segura.'
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
      en: 'Crop PDF',
      fr: 'Recadrer PDF - Rogner les Marges',
      pt: 'Cortar PDF - Remover Margens'
    },
    description: {
      en: 'Crop PDF pages to remove unwanted margins and white space. Precise cropping tool for PDF documents. Free, secure, and browser-based.',
      fr: 'Recadrez les pages PDF pour supprimer les marges indésirables et les espaces blancs. Outil de recadrage précis. Gratuit et sécurisé.',
      pt: 'Corte páginas PDF para remover margens indesejadas e espaços em branco. Ferramenta de corte precisa. Grátis e seguro.'
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
      en: 'HEIC to PDF',
      fr: 'HEIC vers PDF - Photos iPhone en PDF',
      pt: 'HEIC para PDF - Fotos iPhone em PDF'
    },
    description: {
      en: 'Convert HEIC (iPhone photos) to PDF format instantly. Fast, free, and secure conversion in your browser. No uploads required - privacy first.',
      fr: 'Convertissez HEIC (photos iPhone) en format PDF instantanément. Conversion rapide, gratuite et sécurisée. Confidentialité totale.',
      pt: 'Converta fotos HEIC (iPhone) para formato PDF instantaneamente. Conversão rápida, grátis e segura no seu navegador. Privacidade total.'
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
      en: 'EPUB to PDF',
      fr: 'EPUB vers PDF - Convertir eBook en PDF',
      pt: 'EPUB para PDF - Converter eBook em PDF'
    },
    description: {
      en: 'Convert EPUB ebooks to PDF format instantly. Preserve formatting and layout for printing or reading. Free, secure conversion - no file uploads.',
      fr: 'Convertissez les ebooks EPUB en format PDF instantanément. Préservez la mise en page pour l\'impression ou la lecture. Gratuit et sécurisé - sans téléchargement.',
      pt: 'Converta ebooks EPUB para formato PDF instantaneamente. Preserve a formatação e layout para impressão ou leitura. Conversão grátis e segura - sem uploads.'
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
      en: 'PDF to EPUB',
      fr: 'PDF vers EPUB',
      pt: 'PDF para EPUB'
    },
    description: {
      en: 'Convert PDF documents to EPUB ebook format. Perfect for e-readers. Free, secure, browser-based conversion.',
      fr: 'Convertissez des documents PDF en format ebook EPUB. Parfait pour les liseuses. Gratuit et sécurisé.',
      pt: 'Converta documentos PDF para o formato ebook EPUB. Perfeito para e-readers. Conversão grátis, segura e baseada no navegador.'
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
      en: 'PDF to Kindle',
      fr: 'PDF vers Kindle - Optimiser pour Liseuse',
      pt: 'PDF para Kindle - Otimizar para Leitor'
    },
    description: {
      en: 'Optimize PDFs for Kindle devices. Converts PDF to enhanced EPUB/MOBI friendly formats. Smart reflow text and adjustable fonts. Private, local-first processing.',
      fr: 'Optimisez les PDF pour les appareils Kindle. Convertit les PDF en formats compatibles liseuse. Refonte intelligente du texte et polices ajustables. Traitement privé et local.',
      pt: 'Otimize PDFs para dispositivos Kindle. Converta PDF para formatos compatíveis com e-readers. Refluxo inteligente de texto e fontes ajustáveis. Processamento privado e local.'
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
      en: 'Make PDF Fillable',
      fr: 'Créer Formulaire PDF - Rendre PDF Modifiable',
      pt: 'Criar Formulário PDF - Tornar PDF Preenchível'
    },
    description: {
      en: 'Convert any PDF into a fillable form. Add text fields, checkboxes, and radio buttons. Free, secure, and easy-to-use form creator.',
      fr: 'Convertissez n\'importe quel PDF en formulaire remplissable. Ajoutez des champs texte, des cases à cocher. Créateur de formulaire gratuit, sécurisé et facile à utiliser.',
      pt: 'Converta qualquer PDF em um formulário preenchível. Adicione campos de texto e caixas de seleção. Criador de formulários grátis, seguro e fácil de usar.'
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
      en: 'Sign PDF',
      fr: 'Signer PDF - Signature Électronique Gratuite',
      pt: 'Assinar PDF - Assinatura Digital Grátis'
    },
    description: {
      en: 'Sign PDF documents online for free. Draw, type, or upload your signature. Secure, legally binding e-signatures without registration.',
      fr: 'Signez des documents PDF en ligne gratuitement. Dessinez, tapez ou téléchargez votre signature. Signature électronique sécurisée sans inscription.',
      pt: 'Assine documentos PDF online gratuitamente. Desenhe, digite ou envie sua assinatura. Assinatura eletrônica segura e sem registro. (e-CNPJ/e-CPF compatible via visual signature).'
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
      en: 'Organize PDF Pages',
      fr: 'Organiser Pages PDF - Classer et Trier',
      pt: 'Organizar Páginas PDF - Ordenar Arquivo'
    },
    description: {
      en: 'Reorder PDF pages, delete pages, or add blank pages. Drag and drop interface. Free, secure, and fully local organization.',
      fr: 'Réorganisez les pages PDF, supprimez des pages ou ajoutez des pages blanches. Interface glisser-déposer. Organisation gratuite, sécurisée et locale.',
      pt: 'Reordene páginas PDF, apague páginas ou adicione páginas em branco. Interface arrastar e soltar. Organização grátis, segura e totalmente local.'
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
      en: 'PDF to Word',
      fr: 'Convertir PDF en Word Gratuitement',
      pt: 'PDF para Word'
    },
    description: {
      en: 'Convert PDF to editable Word documents (DOCX). Preserve formatting and layout. Free, secure conversion.',
      fr: 'Comment convertir PDF en Word gratuitement. Convertissez vos fichiers PDF en documents Word modifiables (DOCX). Préservez le formatage. Gratuit, en ligne et sécurisé.',
      pt: 'Converta PDF para documentos Word (DOCX) editáveis. Preserve a formatação e o layout. Conversão grátis e segura.'
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
      en: 'Word to PDF',
      fr: 'Convertir Word en PDF Gratuitement',
      pt: 'Word para PDF'
    },
    description: {
      en: 'Convert Word documents (DOCX) to PDF format. Maintain formatting. Free, secure, browser-based conversion.',
      fr: 'Comment convertir Word en PDF gratuitement. Convertissez vos documents Word (DOCX) en format PDF. Maintenez le formatage. Gratuit, en ligne et sécurisé.',
      pt: 'Converta documentos Word (DOCX) para formato PDF. Mantenha a formatação. Conversão grátis, segura e no navegador.'
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
      en: 'Flatten PDF',
      fr: 'Aplatir PDF - Verrouiller le Contenu',
      pt: 'Aplanar PDF - Bloquear Conteúdo'
    },
    description: {
      en: 'Flatten PDF layers and form fields to make document non-editable. Prevent further changes. Free, secure, and permanent locking.',
      fr: 'Aplatissez les calques et champs de formulaire PDF pour rendre le document non modifiable. Empêchez les modifications futures. Verrouillage gratuit et sécurisé.',
      pt: 'Aplane camadas e campos de formulário PDF para tornar o documento não editável. Impeça alterações futuras. Bloqueio grátis e seguro.'
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
      en: 'PDF Page Remover',
      fr: 'Suppresseur Pages PDF - Outil Rapide',
      pt: 'Removedor de Páginas PDF - Ferramenta Rápida'
    },
    description: {
      en: 'Quickly remove specific pages from a PDF. Select and delete pages instantly. 100% Canadian privacy compliant - local processing.',
      fr: 'Supprimez rapidement des pages spécifiques d\'un PDF. Sélectionnez et supprimez instantanément. Conformité confidentialité canadienne 100%.',
      pt: 'Remova rapidamente páginas específicas de um PDF. Selecione e apague instantaneamente. 100% compatível com privacidade canadense.'
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
      en: 'CBR to PDF',
      fr: 'CBR vers PDF',
      pt: 'CBR para PDF'
    },
    description: {
      en: 'Convert CBR/CBZ comic book archives to PDF. Preserve image quality. Free, secure conversion.',
      fr: 'Convertissez les archives de bandes dessinées CBR/CBZ en PDF. Préservez la qualité d\'image. Gratuit et sécurisé.',
      pt: 'Converta arquivos de quadrinhos CBR/CBZ para PDF. Preserve a qualidade da imagem. Conversão grátis e segura.'
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
      en: 'PDF to XML',
      fr: 'PDF vers XML',
      pt: 'PDF para XML'
    },
    description: {
      en: 'Extract text from PDF as XML format. Convert PDF data to structured XML. Free, secure conversion.',
      fr: 'Extrayez le texte du PDF au format XML. Convertissez les données PDF en XML structuré. Gratuit et sécurisé.',
      pt: 'Extraia texto de PDF como formato XML. Converta dados PDF para XML estruturado. Conversão grátis e segura.'
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
      en: 'XML to PDF',
      fr: 'XML vers PDF',
      pt: 'XML para PDF'
    },
    description: {
      en: 'Convert XML data to PDF documents. Create formatted PDFs from XML. Free, secure conversion.',
      fr: 'Convertissez les données XML en documents PDF. Créez des PDF formatés à partir de XML. Gratuit et sécurisé.',
      pt: 'Converta dados XML para documentos PDF. Crie PDFs formatados a partir de XML. Conversão grátis e segura.'
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
      en: 'Excel to PDF',
      fr: 'Convertir Excel en PDF - Gratuit',
      pt: 'Excel para PDF - Converter Planilha'
    },
    description: {
      en: 'Convert Excel spreadsheets (XLSX/XLS) to PDF format. Preserve formatting, tables, and sheets. Free, secure, and private conversion.',
      fr: 'Convertissez des fichiers Excel (XLSX) en PDF tout en préservant la mise en page. Outil gratuit et sécurisé pour vos bilans et tableaux.',
      pt: 'Converta planilhas Excel (XLSX) para PDF preservando a formatação. Ferramenta grátis e segura para seus relatórios e tabelas.'
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
      en: 'RTF to PDF',
      fr: 'RTF vers PDF - Convertisseur Document',
      pt: 'RTF para PDF - Converter Documento'
    },
    description: {
      en: 'Convert RTF files to PDF format instantly. Maintain original text formatting and layout. Free, secure, and private conversion.',
      fr: 'Convertissez des fichiers RTF en PDF instantanément. Conservez la mise en forme du texte. Gratuit et privé.',
      pt: 'Converta arquivos RTF para PDF instantaneamente. Mantenha a formatação do texto original. Grátis e privado.'
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
      en: 'Invoice OCR',
      fr: 'OCR Factures - Extraction Données IA',
      pt: 'OCR de Faturas - Extração de Dados IA'
    },
    description: {
      en: 'Extract text, dates, and amounts from PDF invoices automatically. Export data to Excel/CSV. Private, local processing using AI - no cloud uploads.',
      fr: 'Extrayez automatiquement texte, dates et montants des factures PDF. Exportez vers Excel/CSV. Traitement privé et local par IA - sans cloud.',
      pt: 'Extraia texto, datas e valores de faturas PDF automaticamente. Exporte para Excel/CSV. Processamento privado e local usando IA - sem nuvem.'
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
      en: 'Code 128 Barcode Generator',
      fr: 'Générateur Code-Barres Code 128',
      pt: 'Gerador de Código de Barras Code 128'
    },
    description: {
      en: 'Generate professional Code 128 barcodes instantly. Bulk barcode creation from Excel/CSV, add to PDFs, export as PNG/SVG. Support for Code 128A/B/C. Free, fast, and secure.',
      fr: 'Générez des codes-barres Code 128 professionnels instantanément. Création en masse depuis Excel/CSV, ajout aux PDF, export PNG/SVG. Support Code 128A/B/C. Gratuit et sécurisé.',
      pt: 'Gere códigos de barras Code 128 profissionais instantanément. Criação em massa a partir de Excel/CSV, adicione a PDFs, exporte como PNG/SVG. Grátis e seguro.'
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
      en: 'PDF to CSV',
      fr: 'PDF vers CSV',
      pt: 'PDF para CSV'
    },
    description: {
      en: 'Extract tables from bank statements and documents into CSV format. Smart multiline merging and local processing for maximum privacy.',
      fr: 'Extrayez les tableaux des relevés bancaires et documents au format CSV. Fusion multiligne intelligente et traitement local pour une confidentialité maximale.',
      pt: 'Extraia tabelas de extratos bancários e documentos para formato CSV. Fusão multilinha inteligente e processamento local.'
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
      en: 'PDF to Excel',
      fr: 'Convertir PDF en Excel - Tableaux Editables',
      pt: 'PDF para Excel - Tabelas Editáveis'
    },
    description: {
      en: 'Convert PDF to Excel (XLSX) spreadsheets. Extract tables and data accurately. Free tool - files stay on your device.',
      fr: 'Convertissez PDF en Excel (XLSX). Extrayez les tableaux et données avec précision. Outil gratuit - vos fichiers restent sur votre appareil.',
      pt: 'Converta PDF para planilhas Excel (XLSX). Extraia tabelas e dados com precisão. Ferramenta grátis - arquivos ficam no seu dispositivo.'
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
      en: 'Analyze PDF Security',
      fr: 'Analyser Sécurité PDF - Détecteur Phishing',
      pt: 'Analisar Segurança de PDF - Detector Phishing'
    },
    description: {
      en: 'Scan PDF for phishing links, malware, and scripts. View content safely without executing malicious code. 100% local analysis sandbox.',
      fr: 'Analysez les PDF pour détecter liens d\'hameçonnage, malwares et scripts. Visualisez le contenu en sécurité sans exécuter de code. Sandbox 100% locale.',
      pt: 'Digitalize PDF em busca de links de phishing, malware e scripts. Visualize conteúdo com segurança sem executar código. Sandbox 100% local.'
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
      en: 'XRechnung Viewer',
      fr: 'Visualiseur XRechnung',
      pt: 'Visualizador XRechnung'
    },
    description: {
      en: 'View XRechnung (XML) invoices in a human-readable format. Free, secure, and client-side only viewer.',
      fr: 'Visualisez les factures XRechnung (XML) dans un format lisible. Visualiseur gratuit, sécurisé et 100% côté client.',
      pt: 'Visualize faturas XRechnung (XML) em formato legível. Visualizador 100% local, grátis e seguro.'
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
      en: 'GIF to PDF',
      fr: 'GIF en PDF',
      pt: 'GIF para PDF'
    },
    description: {
      en: 'Convert GIF images to PDF documents. Static and animated GIFs supported (converts frames).',
      fr: 'Convertir des images GIF en documents PDF. Supports des GIFs animés (convertit les cadres).',
      pt: 'Converta imagens GIF para documentos PDF. Suporta GIFs estáticos e animados (converte quadros). Conversão grátis.'
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
      en: 'ASPX to PDF',
      fr: 'ASPX en PDF',
      pt: 'ASPX para PDF'
    },
    description: {
      en: 'Convert ASPX source code files to PDF format for documentation or printing.',
      fr: 'Convertir les fichiers de code source ASPX en format PDF pour la documentation ou l\'impression.',
      pt: 'Converta arquivos de código fonte ASPX para formato PDF para documentação ou impressão.'
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
      en: 'PHP to PDF',
      fr: 'PHP en PDF',
      pt: 'PHP para PDF'
    },
    description: {
      en: 'Convert PHP source code files to PDF format for documentation or printing.',
      fr: 'Convertir les fichiers de code source PHP en format PDF pour la documentation ou l\'impression.',
      pt: 'Converta arquivos de código fonte PHP para formato PDF para documentação ou impressão.'
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
      en: 'ODT to PDF',
      fr: 'ODT vers PDF - LibreOffice en PDF',
      pt: 'ODT para PDF - LibreOffice em PDF'
    },
    description: {
      en: 'Convert ODT (OpenOffice/LibreOffice) files to PDF. Ensure your documents are readable everywhere. Free and secure.',
      fr: 'Convertissez des fichiers ODT (OpenOffice) en PDF. Assurez la lisibilité de vos documents partout. Gratuit et sécurisé.',
      pt: 'Converta arquivos ODT (OpenOffice) para PDF. Garanta que seus documentos sejam legíveis em qualquer lugar. Grátis e seguro.'
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
      en: 'JPG to PDF',
      fr: 'Convertir JPG en PDF - Gratuit et Rapide',
      pt: 'JPG para PDF - Converter Imagem em PDF'
    },
    description: {
      en: 'Convert JPG images to PDF format instantly. Combine multiple JPGs into one PDF. Free, secure, and no file limits - local processing.',
      fr: 'Convertissez des images JPG en format PDF instantanément. Combinez plusieurs JPG en un seul PDF. Gratuit, sécurisé et sans limite.',
      pt: 'Converta imagens JPG para formato PDF instantaneamente. Combine vários JPGs em um único PDF. Grátis, seguro e sem limites.'
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
      en: 'JPEG to PDF',
      fr: 'JPEG vers PDF - Conversion Photo',
      pt: 'JPEG para PDF - Conversão de Fotos'
    },
    description: {
      en: 'Convert JPEG images to high-quality PDF. Preserve original resolution. Free tool for photographers and designers.',
      fr: 'Convertissez des images JPEG en PDF haute qualité. Préservez la résolution originale. Outil gratuit pour photographes.',
      pt: 'Converta imagens JPEG para PDF de alta qualidade. Preserve a resolução original. Ferramenta grátis para fotos.'
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
      en: 'PNG to PDF',
      fr: 'PNG vers PDF - Images sans Perte',
      pt: 'PNG para PDF - Imagens sem Perda'
    },
    description: {
      en: 'Convert PNG images to PDF while preserving transparency and quality. Best field tool for screenshots and graphics. 100% free.',
      fr: 'Convertissez des PNG en PDF tout en préservant la transparence. Meilleur outil pour les captures d\'écran. 100% gratuit.',
      pt: 'Converta imagens PNG para PDF preservando transparência. Melhor ferramenta para capturas de tela. 100% grátis.'
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
      en: 'PDF to JPG',
      fr: 'PDF vers JPG',
      pt: 'PDF para JPG'
    },
    description: {
      en: 'Convert PDF pages to JPG images. Extract images from PDF. High quality, free, and secure.',
      fr: 'Convertissez les pages PDF en images JPG. Extrayez les images du PDF. Haute qualité, gratuit et sécurisé.',
      pt: 'Converta páginas PDF para imagens JPG. Extraia imagens de PDF. Alta qualidade, grátis e seguro.'
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
      en: 'PDF to PNG',
      fr: 'PDF vers PNG - Haute Qualité',
      pt: 'PDF para PNG - Alta Qualidade'
    },
    description: {
      en: 'Convert PDF pages into high-quality PNG images. Extract graphics with transparency support. Private and secure.',
      fr: 'Convertissez des pages PDF en images PNG haute qualité. Extrayez des graphiques avec support transparence. Privé et sécurisé.',
      pt: 'Converta páginas PDF em imagens PNG de alta qualidade. Extraia gráficos com suporte a transparência. Privado e seguro.'
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
      en: 'Image to PDF',
      fr: 'Image en PDF - Convertisseur Universel',
      pt: 'Imagem para PDF - Conversor Universal'
    },
    description: {
      en: 'Convert any image file (JPG, PNG, GIF, BMP, WebP, HEIC) to PDF. Drag & drop multiple images. Free, secure, and fast.',
      fr: 'Convertissez n\'importe quelle image (JPG, PNG, WebP) en PDF. Glissez-déposez plusieurs images. Gratuit, sécurisé et rapide.',
      pt: 'Converta qualquer arquivo de imagem (JPG, PNG, WebP) para PDF. Arraste e solte várias imagens. Grátis, seguro e rápido.'
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
      en: 'PDF to Image',
      fr: 'Convertir PDF en Image Gratuitement',
      pt: 'PDF para Imagem'
    },
    description: {
      en: 'Convert PDF pages to images (JPG/PNG). Extract images from PDF documents. Free and secure.',
      fr: 'Convertissez les pages PDF en images (JPG/PNG). Extrayez les images des documents PDF. Gratuit et sécurisé.',
      pt: 'Converta páginas PDF para imagens (JPG/PNG). Extraia imagens de documentos PDF. Grátis e seguro.'
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
      en: 'PDF to JPEG',
      fr: 'Convertir PDF en JPEG Gratuitement',
      pt: 'PDF para JPEG'
    },
    description: {
      en: 'Convert PDF pages to JPEG images. High quality conversion with adjustable settings.',
      fr: 'Convertissez les pages PDF en images JPEG. Conversion haute qualité avec paramètres ajustables.',
      pt: 'Converta páginas PDF para imagens JPEG. Conversão de alta qualidade com configurações ajustáveis.'
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
      en: 'PDF to UBL',
      fr: 'PDF vers UBL',
      pt: 'PDF para UBL'
    },
    description: {
      en: 'Convert PDF invoices to UBL 2.1 XML format. Extract vendor, date, and amounts automatically. Free, private, local processing.',
      fr: 'Convertissez les factures PDF en format XML UBL 2.1. Extrayez automatiquement le fournisseur, la date et les montants. Gratuit, privé, traitement local.',
      pt: 'Converta faturas PDF para o formato padrão UBL 2.1 (XML). Extraia dados automaticamente. Processamento local, grátis e privado.'
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
      en: 'PDF to PowerPoint',
      fr: 'Convertir PDF en PowerPoint - Slides Editables',
      pt: 'PDF para PowerPoint - Slides Editáveis'
    },
    description: {
      en: 'Convert PDF to PowerPoint (PPTX) presentations. Turn PDF pages into editable slides. Free and secure conversion.',
      fr: 'Convertissez des PDF en présentations PowerPoint (PPTX). Transformez les pages PDF en diapositives modifiables. Conversion gratuite et sécurisée.',
      pt: 'Converta PDF para apresentações PowerPoint (PPTX). Transforme páginas PDF em slides editáveis. Conversão grátis e segura.'
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
      en: 'PowerPoint to PDF',
      fr: 'Convertir PowerPoint en PDF - Gratuit',
      pt: 'PowerPoint para PDF - Converter PPT'
    },
    description: {
      en: 'Convert PowerPoint (PPT/PPTX) to PDF format. Save your slides as a secure PDF document. Free and private.',
      fr: 'Convertissez PowerPoint (PPT/PPTX) en format PDF. Enregistrez vos diapositives en document PDF sécurisé. Gratuit et privé.',
      pt: 'Converta PowerPoint (PPT/PPTX) para formato PDF. Salve seus slides como um documento PDF seguro. Grátis e privado.'
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
      en: 'Pages to PDF',
      fr: 'Convertir Pages en PDF Gratuitement',
      pt: 'Pages para PDF'
    },
    description: {
      en: 'Convert Apple Pages documents to PDF format. Extract content from .pages files. Free, secure, browser-based conversion.',
      fr: 'Convertissez les documents Apple Pages en format PDF. Extrayez le contenu des fichiers .pages. Gratuit, sécurisé et dans votre navigateur.',
      pt: 'Converta documentos Apple Pages para formato PDF. Visualize arquivos Pages no Windows/Android. Grátis e seguro.'
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
      en: 'HTML to PDF',
      fr: 'HTML en PDF',
      pt: 'HTML para PDF'
    },
    description: {
      en: 'Convert HTML files to PDF. Secure, local processing for Canadians. Save web pages as PDF documents.',
      fr: 'Convertir HTML en PDF. Traitement local sécurisé pour les Canadiens.',
      pt: 'Converta arquivos HTML para PDF. Processamento local seguro. Salve páginas da web como PDF.'
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
      en: 'OFX to Excel Converter',
      fr: 'Convertisseur OFX en Excel',
      pt: 'Converter OFX para Excel'
    },
    description: {
      en: 'Convert OFX bank statements to Excel instantly. Preview transactions, export to XLSX, CSV, QBO formats. 100% free and secure - all processing happens in your browser.',
      fr: 'Convertissez vos relevés bancaires OFX en Excel instantanément. Prévisualisez les transactions, exportez en XLSX, CSV, QBO. 100% gratuit et sécurisé.',
      pt: 'Converta extratos bancários OFX para Excel instantaneamente. Visualize transações, exporte para XLSX, CSV, QBO. 100% grátis e seguro - processamento local.'
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
      en: 'XML to PDF Converter',
      fr: 'Convertisseur XML en PDF',
      pt: 'Converter XML para PDF'
    },
    description: {
      en: 'Convert XML files to PDF instantly. Transform XML documents into readable PDF format. 100% free and secure - all processing happens in your browser.',
      fr: 'Convertissez vos fichiers XML en PDF instantanément. Transformez vos documents XML en format PDF lisible. 100% gratuit et sécurisé.',
      pt: 'Converta arquivos XML para PDF instantaneamente. Transforme documentos XML em formato PDF legível. 100% grátis e seguro - processamento local.'
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
      en: 'PDF to XML Converter',
      fr: 'Convertisseur PDF en XML',
      pt: 'Converter PDF para XML'
    },
    description: {
      en: 'Convert PDF files to XML format. Extract structured data from PDF documents. 100% free and secure - all processing happens in your browser.',
      fr: 'Convertissez vos fichiers PDF en format XML. Extrayez les données structurées des documents PDF. 100% gratuit et sécurisé.',
      pt: 'Converta arquivos PDF para formato XML. Extraia dados estruturados de documentos PDF. 100% grátis e seguro - processamento local.'
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
      en: 'ODG to PDF Converter',
      fr: 'Convertisseur ODG en PDF',
      pt: 'Converter ODG para PDF'
    },
    description: {
      en: 'Convert ODG files to PDF instantly. Transform LibreOffice Draw graphics to PDF format. 100% free and secure - all processing happens in your browser.',
      fr: 'Convertissez vos fichiers ODG en PDF instantanément. Transformez vos graphiques LibreOffice Draw en format PDF. 100% gratuit et sécurisé.',
      pt: 'Converta arquivos ODG para PDF instantaneamente. Transforme gráficos do LibreOffice Draw para formato PDF. 100% grátis e seguro - processamento local.'
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
      en: 'PDF to SVG',
      fr: 'PDF vers SVG',
      pt: 'PDF para SVG'
    },
    description: {
      en: 'Convert PDF pages to SVG vector graphics. Preserve scalability and quality at any size. Free, secure, browser-based conversion.',
      fr: 'Convertissez les pages PDF en graphiques vectoriels SVG. Préservez l\'évolutivité et la qualité à toute taille. Gratuit et sécurisé.',
      pt: 'Converta páginas PDF para gráficos vetoriais SVG. Preserve a escalabilidade e qualidade em qualquer tamanho. Grátis e seguro.'
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
      en: 'TIF to PDF',
      fr: 'TIF vers PDF',
      pt: 'TIF para PDF'
    },
    description: {
      en: 'Convert TIF/TIFF images to PDF documents. Preserve image quality. Free, secure, browser-based conversion.',
      fr: 'Convertissez les images TIF/TIFF en documents PDF. Préservez la qualité d\'image. Gratuit et sécurisé.',
      pt: 'Converta imagens TIF/TIFF para documentos PDF. Preserve a qualidade da imagem. Grátis e seguro.'
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
      en: 'Unlock PDF - Remove Password Online',
      fr: 'Déverrouiller PDF - Supprimer le Mot de Passe',
      pt: 'Desbloquear PDF - Remover Senha Online'
    },
    description: {
      en: 'Remove password protection from PDF files instantly. Unlock PDFs for editing, printing, and copying. Secure, local tool - no uploads required.',
      fr: 'Supprimez la protection par mot de passe des fichiers PDF instantanément. Déverrouillez les PDF pour l\'édition et l\'impression. Outil sécurisé et local.',
      pt: 'Remova a proteção por senha de arquivos PDF instantaneamente. Desbloqueie PDFs para edição e impressão. Ferramenta segura e local - sem uploads.'
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
      en: 'PDF Reader',
      fr: 'Lecteur PDF',
      pt: 'Leitor de PDF'
    },
    description: {
      en: 'View and read PDF documents online. Free PDF viewer with zoom, page navigation, and search. No installation required - works directly in your browser.',
      fr: 'Visualisez et lisez des documents PDF en ligne. Lecteur PDF gratuit avec zoom, navigation et recherche. Aucune installation requise.',
      pt: 'Visualize e leia documentos PDF online. Leitor de PDF grátis com zoom, navegação e busca. Sem instalação necessária.'
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
