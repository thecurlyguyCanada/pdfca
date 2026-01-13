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
      fr: 'Supprimer Pages PDF',
      pt: 'Apagar Páginas PDF'
    },
    description: {
      en: 'Easily delete unwanted pages from your PDF files. Select multiple pages and remove them instantly. 100% free and secure - all processing happens in your browser.',
      fr: 'Supprimez facilement les pages indésirables de vos fichiers PDF. Sélectionnez plusieurs pages et supprimez-les instantanément. 100% gratuit et sécurisé.',
      pt: 'Apague facilmente páginas indesejadas dos seus arquivos PDF. Selecione páginas e remova-as instantaneamente. 100% grátis e seguro.'
    },
    keywords: {
      en: ['delete PDF pages', 'remove PDF pages', 'PDF page remover'],
      fr: ['supprimer pages PDF', 'retirer pages PDF', 'suppresseur pages PDF'],
      pt: ['apagar páginas pdf', 'remover páginas pdf', 'excluir páginas pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'rotate-pdf',
    i18nKey: 'rotate',
    tool: ToolType.ROTATE,
    title: {
      en: 'Rotate PDF',
      fr: 'Pivoter PDF',
      pt: 'Girar PDF'
    },
    description: {
      en: 'Rotate PDF pages clockwise or counterclockwise. Fix page orientation instantly. Free, fast, and secure - your files never leave your device.',
      fr: 'Faites pivoter les pages PDF dans le sens horaire ou antihoraire. Corrigez l\'orientation instantanément. Gratuit, rapide et sécurisé.',
      pt: 'Gire páginas PDF no sentido horário ou anti-horário. Corrija a orientação instantaneamente. Grátis, rápido e seguro.'
    },
    keywords: {
      en: ['rotate PDF', 'PDF rotation', 'flip PDF pages'],
      fr: ['pivoter PDF', 'rotation PDF', 'tourner pages PDF'],
      pt: ['girar pdf', 'rotação pdf', 'virar páginas pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'compress-pdf',
    i18nKey: 'compress',
    tool: ToolType.COMPRESS,
    title: {
      en: 'Compress PDF',
      fr: 'Compresser PDF',
      pt: 'Comprimir PDF'
    },
    description: {
      en: 'Reduce PDF file size while maintaining quality. Choose from good, balanced, or extreme compression. Free, secure, and fast compression in your browser.',
      fr: 'Réduisez la taille des fichiers PDF tout en maintenant la qualité. Choisissez entre compression légère, équilibrée ou extrême. Gratuit et sécurisé.',
      pt: 'Reduza o tamanho do arquivo PDF mantendo a qualidade. Escolha compressão leve, equilibrada ou extrema. Grátis e seguro.'
    },
    keywords: {
      en: ['compress PDF', 'reduce PDF size', 'PDF compressor', 'convert pdf smaller'],
      fr: [
        'compresser PDF',
        'réduire taille PDF',
        'compresseur PDF',
        'convert pdf smaller',
        'compresser pdf gratuit',
        'réduire pdf en ligne',
        'diminuer taille pdf'
      ],
      pt: [
        'comprimir pdf',
        'reduzir tamanho pdf',
        'compressor pdf',
        'diminuir pdf',
        'comprimir pdf online'
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
      fr: 'Fusionner PDF',
      pt: 'Juntar PDF'
    },
    description: {
      en: 'Combine multiple PDF files into one document. Drag and drop to reorder. Free, secure PDF merging - all processing happens locally.',
      fr: 'Combinez plusieurs fichiers PDF en un seul document. Glissez-déposez pour réorganiser. Fusion PDF gratuite et sécurisée.',
      pt: 'Combine vários arquivos PDF em um único documento. Arraste e solte para reordenar. Fusão de PDF grátis e segura.'
    },
    keywords: {
      en: ['merge PDF', 'combine PDF', 'join PDF files', 'murg pdf'],
      fr: ['fusionner PDF', 'combiner PDF', 'joindre fichiers PDF'],
      pt: ['juntar pdf', 'combinar pdf', 'unir pdf', 'mesclar pdf']
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
      fr: 'Diviser PDF',
      pt: 'Dividir PDF'
    },
    description: {
      en: 'Split PDF into separate files by page range. Extract specific pages or split into individual pages. Free and secure.',
      fr: 'Divisez un PDF en fichiers séparés par plage de pages. Extrayez des pages spécifiques. Gratuit et sécurisé.',
      pt: 'Divida PDF em arquivos separados por intervalo de páginas. Extraia páginas específicas. Grátis e seguro.'
    },
    keywords: {
      en: ['split PDF', 'divide PDF', 'separate PDF pages', 'pdf to pdf split'],
      fr: ['diviser PDF', 'séparer PDF', 'extraire pages PDF'],
      pt: ['dividir pdf', 'separar pdf', 'extrair páginas pdf']
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
      fr: 'Extraire Pages PDF',
      pt: 'Extrair Páginas PDF'
    },
    description: {
      en: 'Extract specific pages from PDF documents. Create a new PDF with selected pages. Free, fast, and secure extraction.',
      fr: 'Extrayez des pages spécifiques de documents PDF. Créez un nouveau PDF avec les pages sélectionnées. Gratuit et sécurisé.',
      pt: 'Extraia páginas específicas de documentos PDF. Crie um novo PDF com as páginas selecionadas. Extração grátis e segura.'
    },
    keywords: {
      en: ['extract PDF pages', 'PDF page extractor', 'pull PDF pages'],
      fr: ['extraire pages PDF', 'extracteur pages PDF', 'tirer pages PDF'],
      pt: ['extrair páginas pdf', 'extrator páginas pdf', 'retirar páginas pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'crop-pdf',
    i18nKey: 'crop',
    tool: ToolType.CROP,
    title: {
      en: 'Crop PDF',
      fr: 'Recadrer PDF',
      pt: 'Cortar PDF'
    },
    description: {
      en: 'Crop PDF pages to remove unwanted margins and content. Precise cropping tools. Free, secure, and browser-based.',
      fr: 'Recadrez les pages PDF pour supprimer les marges indésirables. Outils de recadrage précis. Gratuit et sécurisé.',
      pt: 'Corte páginas PDF para remover margens indesejadas. Ferramentas de corte precisas. Grátis e seguro.'
    },
    keywords: {
      en: ['crop PDF', 'trim PDF', 'cut PDF margins'],
      fr: ['recadrer PDF', 'rogner PDF', 'couper marges PDF'],
      pt: ['cortar pdf', 'recortar pdf', 'aparar pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'heic-to-pdf',
    i18nKey: 'heic',
    tool: ToolType.HEIC_TO_PDF,
    title: {
      en: 'HEIC to PDF',
      fr: 'HEIC vers PDF',
      pt: 'HEIC para PDF'
    },
    description: {
      en: 'Convert HEIC (iPhone photos) to PDF format. Fast, free, and secure conversion in your browser. No uploads required.',
      fr: 'Convertissez HEIC (photos iPhone) en format PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur.',
      pt: 'Converta fotos HEIC (iPhone) para formato PDF. Conversão rápida, grátis e segura no seu navegador. Nenhum upload necessário.'
    },
    keywords: {
      en: ['HEIC to PDF', 'convert HEIC', 'iPhone photos to PDF', 'convert heic to pdf'],
      fr: [
        'convertir heic en pdf',
        'HEIC vers PDF',
        'convertir HEIC',
        'photos iPhone en PDF',
        'heic en pdf gratuit',
        'convertir photo heic en pdf',
        'heic vers pdf en ligne'
      ],
      pt: [
        'converter heic para pdf',
        'heic para pdf',
        'fotos iphone para pdf',
        'heic em pdf online'
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
      fr: 'EPUB vers PDF',
      pt: 'EPUB para PDF'
    },
    description: {
      en: 'Convert EPUB ebooks to PDF format. Preserve formatting and layout. Free, secure conversion - no file uploads.',
      fr: 'Convertissez les ebooks EPUB en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
      pt: 'Converta ebooks EPUB para formato PDF. Preserve a formatação e o layout. Conversão grátis e segura sem upload de arquivos.'
    },
    keywords: {
      en: ['EPUB to PDF', 'convert ebook', 'EPUB converter', 'convert epub to pdf'],
      fr: [
        'convertir epub en pdf',
        'convert epub to pdf',
        'EPUB vers PDF',
        'convertir ebook',
        'convertisseur EPUB',
        'epub en pdf gratuit',
        'convertir fichier epub en pdf',
        'epub vers pdf en ligne'
      ],
      pt: [
        'converter epub para pdf',
        'epub para pdf',
        'converter ebook para pdf',
        'epub em pdf online'
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
      fr: 'PDF vers Kindle',
      pt: 'PDF para Kindle'
    },
    description: {
      en: 'Optimize PDFs for Kindle devices with enhanced EPUB conversion. Supports pop-up footnotes, reflowable text, and optimized margins. Private, local-first processing.',
      fr: 'Optimisez les PDF pour les appareils Kindle avec une conversion EPUB améliorée. Supporte les notes de bas de page surgissantes et le texte fluide. Traitement privé et local.',
      pt: 'Otimize PDFs para dispositivos Kindle com conversão EPUB aprimorada. Suporta notas de rodapé pop-up e texto fluido. Processamento privado e local.'
    },
    keywords: {
      en: ['PDF to Kindle', 'Kindle converter', 'PDF to ebook Kindle', 'convert PDF for Kindle'],
      fr: ['PDF vers Kindle', 'convertisseur Kindle', 'PDF en ebook Kindle', 'convertir PDF pour Kindle'],
      pt: ['pdf para kindle', 'converter kindle', 'pdf ebook kindle', 'converter pdf para kindle']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'make-pdf-fillable',
    i18nKey: 'fillable',
    tool: ToolType.MAKE_FILLABLE,
    title: {
      en: 'Make PDF Fillable',
      fr: 'Rendre PDF Modifiable',
      pt: 'Criar PDF Preenchível'
    },
    description: {
      en: 'Add fillable form fields to PDFs. Create text fields, checkboxes, and signature fields. Free, secure form creation.',
      fr: 'Ajoutez des champs de formulaire modifiables aux PDF. Créez des champs texte, cases à cocher et signatures. Gratuit et sécurisé.',
      pt: 'Adicione campos de formulário preenchíveis a PDFs. Crie campos de texto, caixas de seleção e assinaturas. Grátis e seguro.'
    },
    keywords: {
      en: ['make PDF fillable', 'PDF form creator', 'add form fields'],
      fr: ['rendre PDF modifiable', 'créateur formulaire PDF', 'ajouter champs formulaire'],
      pt: ['criar pdf preenchível', 'criador formulário pdf', 'adicionar campos formulário']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'sign-pdf',
    i18nKey: 'sign',
    tool: ToolType.SIGN,
    title: {
      en: 'Sign PDF',
      fr: 'Signer PDF',
      pt: 'Assinar PDF'
    },
    description: {
      en: 'Add your signature to PDF documents. Draw, type, or upload signature. Free, secure, browser-based signing.',
      fr: 'Ajoutez votre signature aux documents PDF. Dessinez, tapez ou téléchargez votre signature. Gratuit et sécurisé.',
      pt: 'Adicione sua assinatura a documentos PDF. Desenhe, digite ou faça upload da assinatura. Grátis e seguro no navegador.'
    },
    keywords: {
      en: ['sign PDF', 'PDF signature', 'digital signature'],
      fr: ['signer PDF', 'signature PDF', 'signature numérique'],
      pt: ['assinar pdf', 'assinatura pdf', 'assinatura digital']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'organize-pdf',
    i18nKey: 'organizePdf',
    tool: ToolType.ORGANIZE,
    title: {
      en: 'Organize PDF Pages',
      fr: 'Organiser Pages PDF',
      pt: 'Organizar Páginas PDF'
    },
    description: {
      en: 'Reorder PDF pages by dragging and dropping. Arrange pages in any order. Free, secure page organization.',
      fr: 'Réorganisez les pages PDF par glisser-déposer. Arrangez les pages dans n\'importe quel ordre. Gratuit et sécurisé.',
      pt: 'Reordene páginas PDF arrastando e soltando. Organize as páginas em qualquer ordem. Grátis e seguro.'
    },
    keywords: {
      en: ['organize PDF', 'reorder PDF pages', 'rearrange PDF'],
      fr: ['organiser PDF', 'réorganiser pages PDF', 'réarranger PDF'],
      pt: ['organizar pdf', 'reordenar páginas pdf', 'rearranjar pdf']
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
      fr: 'Aplatir PDF',
      pt: 'Aplanar PDF'
    },
    description: {
      en: 'Flatten PDF to make it non-editable. Remove form fields and layers. Free, secure PDF flattening.',
      fr: 'Aplatissez le PDF pour le rendre non modifiable. Supprimez les champs de formulaire et les calques. Gratuit et sécurisé.',
      pt: 'Aplane o PDF para torná-lo não editável. Remova campos de formulário e camadas. Aplanamento de PDF grátis e seguro.'
    },
    keywords: {
      en: ['flatten PDF', 'make PDF non-editable', 'lock PDF content'],
      fr: ['aplatir PDF', 'rendre PDF non modifiable', 'verrouiller contenu PDF'],
      pt: ['aplanar pdf', 'tornar pdf não editável', 'bloquear pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'pdf-page-remover',
    i18nKey: 'pdfPageRemover',
    tool: ToolType.PDF_PAGE_REMOVER,
    title: {
      en: 'PDF Page Remover',
      fr: 'Suppresseur Pages PDF',
      pt: 'Removedor de Páginas PDF'
    },
    description: {
      en: 'Remove specific pages from PDF files. Select pages to delete. 100% Canadian privacy compliant - files never leave your device.',
      fr: 'Supprimez des pages spécifiques des fichiers PDF. Sélectionnez les pages à supprimer. Gratuit et sécurisé.',
      pt: 'Remova páginas específicas de arquivos PDF. Selecione páginas para apagar. 100% compatível com privacidade canadense - arquivos nunca saem do dispositivo.'
    },
    keywords: {
      en: ['remove PDF pages', 'delete PDF pages', 'PDF page remover', 'remove pages from pdf canada', 'delete pdf pages canada', 'pdf page remover canada', 'erase pdf pages'],
      fr: ['supprimer pages PDF', 'effacer pages PDF', 'suppresseur pages PDF'],
      pt: ['remover páginas pdf', 'apagar páginas pdf', 'removedor páginas pdf']
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
      fr: 'Excel vers PDF',
      pt: 'Excel para PDF'
    },
    description: {
      en: 'Convert Excel spreadsheets (XLSX) to PDF format. Preserve formatting and layout. Free, secure conversion.',
      fr: 'Convertissez les feuilles de calcul Excel (XLSX) en format PDF. Préservez le formatage et la mise en page. Gratuit et sécurisé.',
      pt: 'Converta planilhas Excel (XLSX) para formato PDF. Preserve a formatação e o layout. Conversão grátis e segura.'
    },
    keywords: {
      en: ['Excel to PDF', 'XLSX to PDF', 'convert spreadsheet to PDF'],
      fr: [
        // High volume primary keywords
        'convertir excel en pdf',
        'Excel vers PDF',
        'XLSX vers PDF',
        'convertir feuille de calcul en PDF',
        'excel en pdf gratuit',
        'convertir fichier excel en pdf',
        'excel vers pdf en ligne'
      ],
      pt: [
        'excel para pdf',
        'converter excel em pdf',
        'xlsx para pdf',
        'planilha para pdf',
        'converter excel pdf online'
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
      fr: 'RTF vers PDF',
      pt: 'RTF para PDF'
    },
    description: {
      en: 'Convert RTF (Rich Text Format) documents to PDF format. Preserve text formatting, styles, and layout. Free, secure, browser-based conversion.',
      fr: 'Convertissez les documents RTF (Rich Text Format) en format PDF. Préservez le formatage du texte, les styles et la mise en page. Gratuit et sécurisé.',
      pt: 'Converta documentos RTF para formato PDF. Mantenha formatação de texto e estilos. Conversão grátis e segura no navegador.'
    },
    keywords: {
      en: ['RTF to PDF', 'convert RTF to PDF', 'Rich Text to PDF', 'RTF converter'],
      fr: ['RTF vers PDF', 'convertir RTF en PDF', 'texte enrichi vers PDF', 'convertisseur RTF'],
      pt: ['rtf para pdf', 'converter rtf', 'texto rico para pdf', 'rtf em pdf']
    },
    accept: '.rtf,text/rtf,application/rtf'
  },
  {
    slug: 'invoice-ocr',
    i18nKey: 'invoiceOcr',
    tool: ToolType.INVOICE_OCR,
    title: {
      en: 'Invoice OCR',
      fr: 'OCR Factures',
      pt: 'OCR de Faturas'
    },
    description: {
      en: 'Extract text, dates, and amounts from PDF invoices automatically. Export data to Excel/CSV. Private, local processing using AI.',
      fr: 'Extrayez automatiquement le texte, les dates et les montants des factures PDF. Exportez les données vers Excel/CSV. Traitement privé et local utilisant l\'IA.',
      pt: 'Extraia texto, datas e valores de faturas PDF automaticamente. Exporte dados para Excel/CSV. Processamento privado e local usando IA.'
    },
    keywords: {
      en: ['invoice OCR', 'PDF invoice to Excel', 'extract invoice data', 'free invoice scanner'],
      fr: ['OCR facture', 'facture PDF vers Excel', 'extraire données facture', 'scanner facture gratuit'],
      pt: ['ocr faturas', 'fatura pdf para excel', 'extrair dados fatura', 'scanner fatura']
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
      fr: 'PDF vers Excel',
      pt: 'PDF para Excel'
    },
    description: {
      en: 'Convert PDF tables to Excel (XLSX) spreadsheets instantly. Preserve columns and formatting with local processing.',
      fr: 'Convertissez instantanément les tableaux PDF en feuilles de calcul Excel (XLSX). Préservez les colonnes et le formatage avec un traitement local.',
      pt: 'Converta tabelas PDF para planilhas Excel (XLSX) instantaneamente. Preserve colunas e formatação com processamento local.'
    },
    keywords: {
      en: ['PDF to Excel', 'PDF to XLSX', 'export PDF table to Excel'],
      fr: [
        // High volume primary keywords
        'convertir pdf en excel',
        'convert pdf to excel',
        'convert excel pdf to excel',
        'PDF vers Excel',
        'PDF vers XLSX',
        'exporter tableau PDF vers Excel',
        'convertir fichier pdf en excel',
        'pdf en excel gratuit',
        'pdf vers excel en ligne'
      ],
      pt: [
        'pdf para excel',
        'converter pdf em excel',
        'pdf para xlsx',
        'exportar tabela pdf excel'
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
      fr: 'Analyser Sécurité PDF',
      pt: 'Analisar Segurança de PDF'
    },
    description: {
      en: 'Scan PDF for phishing links, malware, and scripts. View content safely without executing malicious code. 100% local analysis.',
      fr: 'Analysez les PDF pour détecter les liens d\'hameçonnage, les malwares et les scripts. Visualisez le contenu en toute sécurité sans exécuter de code malveillant. Analyse 100% locale.',
      pt: 'Digitalize PDF em busca de links de phishing, malware e scripts. Visualize o conteúdo com segurança sem executar código malicioso. Análise 100% local.'
    },
    keywords: {
      en: ['analyze PDF', 'PDF security scan', 'detect phishing PDF', 'safe view PDF', 'malware scanner'],
      fr: ['analyser PDF', 'scan sécurité PDF', 'détecter hameçonnage PDF', 'vue sécurisée PDF', 'scanner malware'],
      pt: ['analisar PDF', 'varredura de segurança PDF', 'detectar phishing PDF', 'visualização segura PDF', 'scanner de malware']
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
      fr: 'ODT vers PDF',
      pt: 'ODT para PDF'
    },
    description: {
      en: 'Convert OpenOffice/LibreOffice (ODT) documents to PDF format. Preserve formatting. Free, secure conversion.',
      fr: 'Convertissez les documents OpenOffice/LibreOffice (ODT) en format PDF. Préservez le formatage. Gratuit et sécurisé.',
      pt: 'Converta documentos OpenOffice/LibreOffice (ODT) para formato PDF. Preserve a formatação. Conversão grátis e segura.'
    },
    keywords: {
      en: ['ODT to PDF', 'OpenOffice to PDF', 'LibreOffice to PDF', 'convert ODT'],
      fr: ['ODT vers PDF', 'OpenOffice vers PDF', 'LibreOffice vers PDF', 'convertir ODT'],
      pt: ['odt para pdf', 'openoffice para pdf', 'libreoffice para pdf', 'converter odt']
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
      fr: 'Convertir JPG en PDF Gratuitement',
      pt: 'JPG para PDF'
    },
    description: {
      en: 'Convert JPG/JPEG images to PDF documents. Fast, free, and secure conversion in your browser. No uploads required.',
      fr: 'Convertissez vos images JPG/JPEG en documents PDF. Conversion rapide, gratuite et sécurisée dans votre navigateur. Aucun téléchargement requis.',
      pt: 'Converta imagens JPG/JPEG para documentos PDF. Conversão rápida, grátis e segura no seu navegador. Nenhum upload necessário.'
    },
    keywords: {
      en: ['JPG to PDF', 'JPEG to PDF', 'convert JPG to PDF', 'image to PDF converter'],
      fr: [
        // High volume primary keywords (49,500+ searches)
        'convertir jpg en pdf',
        'convert jpg to pdf',
        'convertir jpg en pdf gratuit',
        'convertir jpg en pdf gratuitement',
        'pdf converter jpg to pdf',
        'convert jpg to pdf format',
        'convert from jpg to pdf format',
        // Additional variants
        'jpg en pdf gratuit',
        'jpg vers pdf en ligne',
        'convertir fichier jpg en pdf',
        'transformer jpg en pdf'
      ],
      pt: [
        'jpg para pdf',
        'converter jpg',
        'imagem para pdf',
        'jpeg para pdf',
        'converter jpg pdf gratis'
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
      fr: 'JPEG vers PDF',
      pt: 'JPEG para PDF'
    },
    description: {
      en: 'Convert JPEG images to PDF format. Maintain image quality. Free, secure conversion.',
      fr: 'Convertissez les images JPEG en format PDF. Maintenez la qualité de l\'image. Gratuit et sécurisé.',
      pt: 'Converta imagens JPEG para formato PDF. Mantenha a qualidade da imagem. Conversão grátis e segura.'
    },
    keywords: {
      en: ['JPEG to PDF', 'convert JPEG', 'photos to PDF'],
      fr: ['JPEG vers PDF', 'convertir JPEG', 'photos vers PDF'],
      pt: ['jpeg para pdf', 'converter jpeg', 'fotos para pdf']
    },
    accept: '.jpg,.jpeg,image/jpeg'
  },
  {
    slug: 'png-to-pdf',
    i18nKey: 'pngToPdf',
    tool: ToolType.PNG_TO_PDF,
    title: {
      en: 'PNG to PDF',
      fr: 'PNG vers PDF',
      pt: 'PNG para PDF'
    },
    description: {
      en: 'Convert PNG images to PDF format. Preserve transparency and quality. Free, secure conversion.',
      fr: 'Convertissez les images PNG en format PDF. Préservez la transparence et la qualité. Gratuit et sécurisé.',
      pt: 'Converta imagens PNG para formato PDF. Preserve a transparência e qualidade. Grátis e seguro.'
    },
    keywords: {
      en: ['PNG to PDF', 'convert PNG', 'image to PDF'],
      fr: ['PNG vers PDF', 'convertir PNG', 'image vers PDF'],
      pt: ['png para pdf', 'converter png', 'imagem png para pdf']
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
      fr: 'PDF vers PNG',
      pt: 'PDF para PNG'
    },
    description: {
      en: 'Convert PDF pages to PNG images. Ideal for high-quality drafts. Free and secure.',
      fr: 'Convertissez les pages PDF en images PNG. Idéal pour des brouillons de haute qualité. Gratuit et sécurisé.',
      pt: 'Converta páginas PDF para imagens PNG. Ideal para rascunhos de alta qualidade. Grátis e seguro.'
    },
    keywords: {
      en: ['PDF to PNG', 'convert PDF to PNG', 'extract PNG from PDF'],
      fr: ['PDF vers PNG', 'convertir PDF en PNG', 'extraire PNG du PDF'],
      pt: ['pdf para png', 'converter pdf em png', 'extrair png de pdf']
    },
    accept: '.pdf,application/pdf'
  },
  {
    slug: 'image-to-pdf',
    i18nKey: 'imageToPdf',
    tool: ToolType.IMAGE_TO_PDF,
    title: {
      en: 'Image to PDF',
      fr: 'Convertir Image en PDF Gratuitement',
      pt: 'Imagem para PDF'
    },
    description: {
      en: 'Convert any image (JPG, PNG, GIF, BMP, WebP) to PDF. Combine multiple images into one PDF. Free and secure.',
      fr: 'Convertissez n\'importe quelle image (JPG, PNG, GIF, BMP, WebP) en PDF. Combinez plusieurs images en un seul PDF. Gratuit et sécurisé.',
      pt: 'Converta qualquer arquivo de imagem (JPG, PNG, GIF, BMP, WebP) para PDF. Combine várias imagens em um PDF. Grátis e seguro.'
    },
    keywords: {
      en: ['image to PDF', 'convert image to PDF', 'photo to PDF', 'picture to PDF'],
      fr: [
        // High volume primary keywords (9,900+ searches)
        'convertir image en pdf',
        'convertir photo en pdf',
        'convertir une image en pdf',
        'convertir des images en pdf',
        'convertir une photo en pdf',
        'image en pdf gratuit',
        'photo en pdf gratuit',
        'convertir fichier image en pdf',
        'image vers pdf en ligne'
      ],
      pt: [
        'imagem para pdf',
        'converter imagem',
        'fotos para pdf',
        'converter foto em pdf'
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
      fr: 'Convertir PDF en PowerPoint Gratuitement',
      pt: 'PDF para PowerPoint'
    },
    description: {
      en: 'Convert PDF documents to PowerPoint presentations (PPTX). Preserve slides and formatting.',
      fr: 'Convertissez les documents PDF en présentations PowerPoint (PPTX). Préservez les diapositives et le formatage.',
      pt: 'Converta documentos PDF para apresentações PowerPoint (PPTX). Preserve slides e formatação.'
    },
    keywords: {
      en: ['PDF to PowerPoint', 'PDF to PPT', 'convert PDF to PPTX', 'PDF to slides'],
      fr: [
        // High volume primary keywords (3,600+ searches)
        'convertir pdf en ppt',
        'convertir pdf en powerpoint',
        'pdf en ppt gratuit',
        'pdf en powerpoint gratuit',
        'convertir fichier pdf en powerpoint',
        'pdf vers powerpoint en ligne'
      ],
      pt: [
        'pdf para powerpoint',
        'converter pdf em ppt',
        'pdf para slide',
        'pdf para pptx'
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
      fr: 'Convertir PowerPoint en PDF Gratuitement',
      pt: 'PowerPoint para PDF'
    },
    description: {
      en: 'Convert PowerPoint presentations (PPTX/PPT) to PDF format. Preserve slides and animations.',
      fr: 'Convertissez les présentations PowerPoint (PPTX/PPT) en format PDF. Préservez les diapositives et les animations.',
      pt: 'Converta apresentações PowerPoint (PPTX/PPT) para formato PDF. Preserve slides e animações.'
    },
    keywords: {
      en: ['PowerPoint to PDF', 'PPT to PDF', 'convert PPTX to PDF', 'slides to PDF'],
      fr: [
        // High volume primary keywords (2,400+ searches)
        'convertir ppt en pdf',
        'convertir powerpoint en pdf',
        'ppt en pdf gratuit',
        'powerpoint en pdf gratuit',
        'convertir fichier powerpoint en pdf',
        'powerpoint vers pdf en ligne'
      ],
      pt: [
        'powerpoint para pdf',
        'ppt para pdf',
        'converter slide em pdf'
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
      en: ['pdf to xml', 'convert pdf to xml', 'pdf file to xml', 'pdf to xml converter', 'extract xml from pdf', 'save pdf as xml'],
      fr: ['pdf en xml', 'convertir pdf en xml', 'fichier pdf en xml', 'convertisseur pdf en xml'],
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
        'converter pdf para xml ilovepdf'
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
