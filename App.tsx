import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, X, AlertCircle, CheckCircle2, Shield, Trash2, RotateCw, Image, BookOpen, ArrowLeft, ArrowRight, PenTool, RotateCcw, RefreshCcw, Info, ZoomIn, ZoomOut, GripVertical, Lock, Scissors, Search, Sparkles, Zap, Heart } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MapleLeaf } from './components/MapleLeaf';
import { RelatedTools } from './components/RelatedTools';
import { ToolInterface } from './components/ToolInterface'; // Will use lazy loading for this, but first checking if we can import directly or lazy
// Actually, we want code splitting, so:
const PricingPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.PricingPage })));
const PrivacyPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.PrivacyPage })));
const TermsPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.TermsPage })));
const SorryPolicyPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.SorryPolicyPage })));
const HowToPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.HowToPage })));
const SupportLocalPage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.SupportLocalPage })));
const MakePdfFillablePage = React.lazy(() => import('./components/StaticPages').then(module => ({ default: module.MakePdfFillablePage })));

const LazyToolInterface = React.lazy(() => import('./components/ToolInterface').then(module => ({ default: module.ToolInterface })));
import { loadPdfDocument, getPdfJsDocument, deletePagesFromPdf, rotatePdfPages, reorderPdfPages, convertHeicToPdf, convertPdfToEpub, convertEpubToPdf, formatFileSize, makePdfFillable, convertCbrToPdf, extractTextWithOcr, makeSearchablePdf, OcrProgress, convertPdfToWord, convertWordToPdf, flattenPdf, cropPdfPages, compressPdf, mergePdfs, splitPdf, convertPdfToXml, convertXmlToPdf, convertExcelToPdf } from './utils/pdfUtils';
import { translations, Language } from './utils/i18n';
import { SEO } from './components/SEO';
import { triggerHaptic } from './utils/haptics';
// Lazy load all guide components individually for proper code splitting
const UltimatePdfGuide = React.lazy(() => import('./components/pages/guides/UltimatePdfGuide').then(m => ({ default: m.UltimatePdfGuide })));
const DeletePdfPagesGuide = React.lazy(() => import('./components/pages/guides/DeletePdfPagesGuide').then(m => ({ default: m.DeletePdfPagesGuide })));
const RotatePdfGuide = React.lazy(() => import('./components/pages/guides/RotatePdfGuide').then(m => ({ default: m.RotatePdfGuide })));
const OcrPdfGuide = React.lazy(() => import('./components/pages/guides/OcrPdfGuide').then(m => ({ default: m.OcrPdfGuide })));
const HeicToPdfGuide = React.lazy(() => import('./components/pages/guides/HeicToPdfGuide').then(m => ({ default: m.HeicToPdfGuide })));
const EpubToPdfGuide = React.lazy(() => import('./components/pages/guides/EpubToPdfGuide').then(m => ({ default: m.EpubToPdfGuide })));
const PdfToEpubGuide = React.lazy(() => import('./components/pages/guides/PdfToEpubGuide').then(m => ({ default: m.PdfToEpubGuide })));
const OrganizePdfGuide = React.lazy(() => import('./components/pages/guides/OrganizePdfGuide').then(m => ({ default: m.OrganizePdfGuide })));
const MakeFillableGuide = React.lazy(() => import('./components/pages/guides/MakeFillableGuide').then(m => ({ default: m.MakeFillableGuide })));
const EmailToPdfGuide = React.lazy(() => import('./components/pages/guides/EmailToPdfGuide').then(m => ({ default: m.EmailToPdfGuide })));
const CbrToPdfGuide = React.lazy(() => import('./components/pages/guides/CbrToPdfGuide').then(m => ({ default: m.CbrToPdfGuide })));
const PdfToWordGuide = React.lazy(() => import('./components/pages/guides/PdfToWordGuide').then(m => ({ default: m.PdfToWordGuide })));
const WordToPdfGuide = React.lazy(() => import('./components/pages/guides/WordToPdfGuide').then(m => ({ default: m.WordToPdfGuide })));
const PdfPageRemoverGuide = React.lazy(() => import('./components/pages/guides/PdfPageRemoverGuide').then(module => ({ default: module.PdfPageRemoverGuide })));
const FlattenPdfGuide = React.lazy(() => import('./components/pages/guides/FlattenPdfGuide').then(module => ({ default: module.FlattenPdfGuide })));
const CropPdfGuide = React.lazy(() => import('./components/pages/guides/CropPdfGuide').then(module => ({ default: module.CropPdfGuide })));
const CompressPdfGuide = React.lazy(() => import('./components/pages/guides/CompressPdfGuide').then(module => ({ default: module.CompressPdfGuide })));
const MergePdfGuide = React.lazy(() => import('./components/pages/guides/MergePdfGuide').then(module => ({ default: module.MergePdfGuide })));
const EditXfaPdfGuide = React.lazy(() => import('./components/pages/guides/EditXfaPdfGuide').then(module => ({ default: module.EditXfaPdfGuide })));
const InsertPictureGuide = React.lazy(() => import('./components/pages/guides/InsertPictureGuide').then(module => ({ default: module.InsertPictureGuide })));
const AboutPage = React.lazy(() => import('./components/pages/AboutPage').then(module => ({ default: module.AboutPage })));


enum AppState {
  HOME,
  SELECTING,
  PROCESSING,
  DONE,
  ERROR
}

type CurrentView = 'HOME' | 'PRICING' | 'PRIVACY' | 'TERMS' | 'SORRY' | 'HOW_TO' | 'SUPPORT' | 'MAKE_FILLABLE_INFO' | 'TOOL_PAGE' | 'ABOUT' |
  'GUIDE_ULTIMATE' | 'GUIDE_DELETE_PAGES' | 'GUIDE_ROTATE' | 'GUIDE_OCR' | 'GUIDE_HEIC_TO_PDF' | 'GUIDE_EPUB_TO_PDF' | 'GUIDE_PDF_TO_EPUB' | 'GUIDE_ORGANIZE' | 'GUIDE_FILLABLE' | 'GUIDE_EMAIL_TO_PDF' | 'GUIDE_CBR_TO_PDF' |
  'GUIDE_PDF_TO_WORD' | 'GUIDE_WORD_TO_PDF' | 'GUIDE_PDF_PAGE_REMOVER' | 'GUIDE_FLATTEN' | 'GUIDE_CROP' | 'GUIDE_COMPRESS' | 'GUIDE_MERGE' | 'GUIDE_EDIT_XFA' | 'GUIDE_INSERT_PICTURE';

export enum ToolType {
  DELETE = 'DELETE',
  ROTATE = 'ROTATE',
  HEIC_TO_PDF = 'HEIC_TO_PDF',
  EPUB_TO_PDF = 'EPUB_TO_PDF',
  PDF_TO_EPUB = 'PDF_TO_EPUB',
  MAKE_FILLABLE = 'MAKE_FILLABLE',
  CBR_TO_PDF = 'CBR_TO_PDF',
  SIGN = 'SIGN',
  ORGANIZE = 'ORGANIZE',
  OCR = 'OCR',
  PDF_TO_WORD = 'PDF_TO_WORD',
  WORD_TO_PDF = 'WORD_TO_PDF',
  PDF_PAGE_REMOVER = 'PDF_PAGE_REMOVER',
  FLATTEN = 'FLATTEN',
  CROP = 'CROP',
  COMPRESS = 'COMPRESS',
  MERGE = 'MERGE',
  SPLIT = 'SPLIT',
  PDF_TO_XML = 'PDF_TO_XML',
  XML_TO_PDF = 'XML_TO_PDF',
  EXCEL_TO_PDF = 'EXCEL_TO_PDF'
}

// Helper to safely update history without crashing in sandboxed environments
const safePushState = (data: any, unused: string, url?: string | URL | null) => {
  if (typeof window !== 'undefined' && window.history) {
    try {
      window.history.pushState(data, unused, url);
    } catch (e) {
      console.debug('Navigation URL update suppressed due to environment restrictions.', e);
    }
  }
};

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<CurrentView>('HOME');
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [currentTool, setCurrentTool] = useState<ToolType | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]); // For multi-file tools like Merge
  const [searchTerm, setSearchTerm] = useState('');
  const [pageCount, setPageCount] = useState<number>(0);
  const [pdfJsDoc, setPdfJsDoc] = useState<any>(null);

  // Tool Specific State
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rotations, setRotations] = useState<Record<number, number>>({});
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const lastSelectedPageRef = useRef<number | null>(null);

  // New state for manual page range input
  const [pageRangeInput, setPageRangeInput] = useState<string>('');
  const pageRangeInputRef = useRef<HTMLInputElement>(null);

  // Async Operation Tracking to prevent race conditions
  const operationIdRef = useRef<number>(0);

  // Zoom Level: Granular (0.5 to 3.0)
  const [previewZoom, setPreviewZoom] = useState<number>(1.0);

  // Desktop mode detection
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string>('');
  const [errorKey, setErrorKey] = useState<keyof typeof translations['en'] | null>(null);
  // Revoke previous URL to prevent memory leaks when downloadUrl changes
  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  const [compressionLevel, setCompressionLevel] = useState<'good' | 'balanced' | 'extreme'>('balanced');
  const [processedSize, setProcessedSize] = useState<number | null>(null);

  // Cleanup pdfJsDoc when it changes or component unmounts to prevent memory leaks
  useEffect(() => {
    const docToCleanup = pdfJsDoc;
    return () => {
      if (docToCleanup) {
        try {
          docToCleanup.cleanup?.();
          docToCleanup.destroy?.();
        } catch (e) {
          console.debug('PDF.js cleanup failed', e);
        }
      }
    };
  }, [pdfJsDoc]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = translations[lang];

  // Routing Logic
  const syncStateFromUrl = () => {
    let path = window.location.pathname;

    // Detect language prefix
    let currentLang: Language = 'en';
    if (path.startsWith('/fr/') || path === '/fr') {
      currentLang = 'fr';
      path = path.replace(/^\/fr/, '') || '/';
    } else {
      currentLang = 'en';
    }
    setLang(currentLang);

    // Map paths to tools
    if (path === '/delete-pdf-pages') {
      setCurrentTool(ToolType.DELETE);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/rotate-pdf') {
      setCurrentTool(ToolType.ROTATE);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/heic-to-pdf') {
      setCurrentTool(ToolType.HEIC_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/epub-to-pdf') {
      setCurrentTool(ToolType.EPUB_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/pdf-to-epub') {
      setCurrentTool(ToolType.PDF_TO_EPUB);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/make-pdf-fillable') {
      setCurrentTool(ToolType.MAKE_FILLABLE);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/cbr-to-pdf') {
      setCurrentTool(ToolType.CBR_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/sign-pdf') {
      setCurrentTool(ToolType.SIGN);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/organize-pdf') {
      setCurrentTool(ToolType.ORGANIZE);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/ocr-pdf') {
      setCurrentTool(ToolType.OCR);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/pdf-to-word') {
      setCurrentTool(ToolType.PDF_TO_WORD);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/word-to-pdf') {
      setCurrentTool(ToolType.WORD_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/pdf-page-remover') {
      setCurrentTool(ToolType.PDF_PAGE_REMOVER);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/make-pdf-non-editable') {
      setCurrentTool(ToolType.FLATTEN);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/crop-pdf') {
      setCurrentTool(ToolType.CROP);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/compress-pdf') {
      setCurrentTool(ToolType.COMPRESS);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/merge-pdf') {
      setCurrentTool(ToolType.MERGE);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/split-pdf') {
      setCurrentTool(ToolType.SPLIT);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/pdf-to-xml') {
      setCurrentTool(ToolType.PDF_TO_XML);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/xml-to-pdf') {
      setCurrentTool(ToolType.XML_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/excel-to-pdf') {
      setCurrentTool(ToolType.EXCEL_TO_PDF);
      setView('TOOL_PAGE');
      setAppState(AppState.SELECTING);
    } else if (path === '/pricing') setView('PRICING');
    else if (path === '/privacy') setView('PRIVACY');
    else if (path === '/terms') setView('TERMS');
    else if (path === '/howto') setView('HOW_TO');
    else if (path === '/support') setView('SUPPORT');
    else if (path === '/how-to-make-a-pdf-fillable') setView('MAKE_FILLABLE_INFO');
    else if (path === '/sorry') setView('SORRY');
    else if (path === '/about') setView('ABOUT');
    else if (path === '/guides/ultimate-pdf-guide') setView('GUIDE_ULTIMATE');
    else if (path === '/guides/delete-pdf-pages') setView('GUIDE_DELETE_PAGES');
    else if (path === '/guides/rotate-pdf') setView('GUIDE_ROTATE');
    else if (path === '/guides/ocr-pdf') setView('GUIDE_OCR');
    else if (path === '/guides/heic-to-pdf') setView('GUIDE_HEIC_TO_PDF');
    else if (path === '/guides/epub-to-pdf') setView('GUIDE_EPUB_TO_PDF');
    else if (path === '/guides/pdf-to-epub') setView('GUIDE_PDF_TO_EPUB');
    else if (path === '/guides/organize-pdf') setView('GUIDE_ORGANIZE');
    else if (path === '/guides/make-pdf-fillable') setView('GUIDE_FILLABLE');
    else if (path === '/guides/email-to-pdf') setView('GUIDE_EMAIL_TO_PDF');
    else if (path === '/guides/cbr-to-pdf') setView('GUIDE_CBR_TO_PDF');
    else if (path === '/guides/pdf-to-word') setView('GUIDE_PDF_TO_WORD');
    else if (path === '/guides/word-to-pdf') setView('GUIDE_WORD_TO_PDF');
    else if (path === '/guides/pdf-page-remover') setView('GUIDE_PDF_PAGE_REMOVER');
    else if (path === '/guides/make-pdf-non-editable') setView('GUIDE_FLATTEN');

    else if (path === '/guides/crop-pdf') setView('GUIDE_CROP');
    else if (path === '/guides/compress-pdf') setView('GUIDE_COMPRESS');
    else if (path === '/guides/merge-pdf') setView('GUIDE_MERGE');
    else if (path === '/guides/edit-xfa-pdf') setView('GUIDE_EDIT_XFA');
    else if (path === '/guides/insert-picture-in-pdf') setView('GUIDE_INSERT_PICTURE');
    else if (path !== '/') {
      safePushState({}, '', currentLang === 'fr' ? '/fr/' : '/');
      setView('HOME');
      setAppState(AppState.HOME);
    } else {
      setView('HOME');
      setAppState(AppState.HOME);
      setCurrentTool(null);
    }
  };

  useEffect(() => {
    syncStateFromUrl();
    const handlePopState = () => {
      syncStateFromUrl();
    };

    // Zoom Handlers
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY;
        const zoomStep = 0.1;
        if (delta > 0) {
          setPreviewZoom(z => Math.max(0.5, z - zoomStep));
        } else {
          setPreviewZoom(z => Math.min(5.0, z + zoomStep));
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === '=' || e.key === '+') {
          e.preventDefault();
          setPreviewZoom(z => Math.min(5.0, z + 0.1));
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          setPreviewZoom(z => Math.max(0.5, z - 0.1));
        } else if (e.key === '0') {
          e.preventDefault();
          setPreviewZoom(1.0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup ObjectURL on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  // Sync selectedPages -> Input (only if input is not focused)
  useEffect(() => {
    if (document.activeElement === pageRangeInputRef.current) return;

    if (selectedPages.size === 0) {
      setPageRangeInput('');
      return;
    }

    const pages = Array.from(selectedPages).sort((a, b) => a - b);
    let rangeStr = '';
    let start = pages[0];
    let prev = pages[0];

    for (let i = 1; i < pages.length; i++) {
      if (pages[i] === prev + 1) {
        prev = pages[i];
      } else {
        rangeStr += (start === prev) ? `${start + 1}, ` : `${start + 1}-${prev + 1}, `;
        start = pages[i];
        prev = pages[i];
      }
    }
    rangeStr += (start === prev) ? `${start + 1}` : `${start + 1}-${prev + 1}`;
    setPageRangeInput(rangeStr);
  }, [selectedPages]);

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPageRangeInput(val);

    const newSelection = new Set<number>();
    if (!/^[0-9\s,-]*$/.test(val)) return;

    const parts = val.split(',');
    parts.forEach(part => {
      const range = part.trim();
      if (!range) return;

      if (range.includes('-')) {
        const [s, e] = range.split('-').map(str => parseInt(str.trim()));
        if (!isNaN(s) && !isNaN(e)) {
          const min = Math.min(s, e);
          const max = Math.max(s, e);
          for (let i = min; i <= max; i++) {
            if (i > 0 && i <= pageCount) newSelection.add(i - 1);
          }
        }
      } else {
        const num = parseInt(range);
        if (!isNaN(num) && num > 0 && num <= pageCount) {
          newSelection.add(num - 1);
        }
      }
    });

    setSelectedPages(newSelection);
  };

  const handleNavigation = (newView: CurrentView, path?: string) => {
    setView(newView);
    const prefix = lang === 'fr' ? '/fr' : '';

    if (newView === 'HOME') {
      setAppState(AppState.HOME);
      setCurrentTool(null);
      safePushState({}, '', `${prefix}/`);
    } else if (newView === 'TOOL_PAGE' && path) {
      // Handle tool page navigation - need to set currentTool and appState
      const toolPath = path.startsWith('/') ? path : `/${path}`;
      const tool = tools.find(t => t.path === toolPath);
      if (tool) {
        setCurrentTool(tool.id);
        setFile(null);
        setAppState(AppState.SELECTING);
        setSelectedPages(new Set());
        setRotations({});
        setPageRangeInput('');
        setFiles([]);
      }
      safePushState({}, '', `${prefix}${toolPath}`);
    } else if (path) {
      const finalPath = path.startsWith('/') ? path : `/${path}`;
      safePushState({}, '', `${prefix}${finalPath}`);
    }
    window.scrollTo(0, 0);
  };

  const tools = [
    { id: ToolType.DELETE, icon: Trash2, title: t.toolDelete, desc: t.toolDeleteDesc, accept: '.pdf', path: '/delete-pdf-pages' },
    { id: ToolType.PDF_PAGE_REMOVER, icon: Trash2, title: t.toolPdfPageRemover, desc: t.toolPdfPageRemoverDesc, accept: '.pdf', path: '/pdf-page-remover' },
    { id: ToolType.ROTATE, icon: RotateCw, title: t.toolRotate, desc: t.toolRotateDesc, accept: '.pdf', path: '/rotate-pdf' },
    { id: ToolType.FLATTEN, icon: Lock, title: t.toolFlatten, desc: t.toolFlattenDesc, accept: '.pdf', path: '/make-pdf-non-editable' },
    { id: ToolType.CROP, icon: Scissors, title: t.toolCrop, desc: t.toolCropDesc, accept: '.pdf', path: '/crop-pdf' },
    { id: ToolType.ORGANIZE, icon: GripVertical, title: t.toolOrganize, desc: t.toolOrganizeDesc, accept: '.pdf', path: '/organize-pdf' },
    { id: ToolType.MAKE_FILLABLE, icon: PenTool, title: t.toolMakeFillable, desc: t.toolMakeFillableDesc, accept: '.pdf', path: '/make-pdf-fillable' },
    { id: ToolType.HEIC_TO_PDF, icon: Image, title: t.toolHeic, desc: t.toolHeicDesc, accept: '.heic', path: '/heic-to-pdf' },
    { id: ToolType.EPUB_TO_PDF, icon: BookOpen, title: t.toolEpubToPdf, desc: t.toolEpubToPdfDesc, accept: '.epub', path: '/epub-to-pdf' },
    { id: ToolType.PDF_TO_EPUB, icon: FileText, title: t.toolPdfToEpub, desc: t.toolPdfToEpubDesc, accept: '.pdf', path: '/pdf-to-epub' },
    { id: ToolType.CBR_TO_PDF, icon: BookOpen, title: t.toolCbrToPdf, desc: t.toolCbrToPdfDesc, accept: '.cbr,.cbz', path: '/cbr-to-pdf' },
    { id: ToolType.SIGN, icon: PenTool, title: t.toolSign, desc: t.toolSignDesc, accept: '.pdf', path: '/sign-pdf' },
    { id: ToolType.PDF_TO_WORD, icon: FileText, title: t.toolPdfToWord, desc: t.toolPdfToWordDesc, accept: '.pdf', path: '/pdf-to-word' },
    { id: ToolType.WORD_TO_PDF, icon: FileText, title: t.toolWordToPdf, desc: t.toolWordToPdfDesc, accept: '.docx', path: '/word-to-pdf' },
    { id: ToolType.OCR, icon: FileText, title: t.toolOcr, desc: t.toolOcrDesc, accept: '.pdf', path: '/ocr-pdf' },
    { id: ToolType.COMPRESS, icon: Scissors, title: t.toolCompress, desc: t.toolCompressDesc, accept: '.pdf', path: '/compress-pdf' },
    { id: ToolType.MERGE, icon: GripVertical, title: t.toolMerge, desc: t.toolMergeDesc, accept: '.pdf', path: '/merge-pdf' },
    { id: ToolType.SPLIT, icon: Scissors, title: t.toolSplit, desc: t.toolSplitDesc, accept: '.pdf', path: '/split-pdf' },
    { id: ToolType.PDF_TO_XML, icon: FileText, title: t.toolPdfToXml, desc: t.toolPdfToXmlDesc, accept: '.pdf', path: '/pdf-to-xml' },
    { id: ToolType.XML_TO_PDF, icon: FileText, title: t.toolXmlToPdf, desc: t.toolXmlToPdfDesc, accept: '.xml', path: '/xml-to-pdf' },
    { id: ToolType.EXCEL_TO_PDF, icon: FileText, title: t.toolExcelToPdf, desc: t.toolExcelToPdfDesc, accept: '.xlsx,.xls', path: '/excel-to-pdf' },
  ];

  const selectTool = (toolId: ToolType) => {
    triggerHaptic('light');
    operationIdRef.current++; // Invalidate pending operations
    const tool = tools.find(t => t.id === toolId);
    setCurrentTool(toolId);
    setFile(null);
    setFiles([]);
    setAppState(AppState.SELECTING);
    setView('TOOL_PAGE');
    if (tool) {
      safePushState({}, '', tool.path);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      triggerHaptic('light'); // Feedback for file selection

      if (currentTool === ToolType.MERGE) {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
        // Set the first file as 'file' just for compatibility
        if (!file) setFile(newFiles[0]);
        setAppState(AppState.SELECTING);
      } else {
        processFile(e.target.files[0]);
      }
    }
  };

  const processFile = async (uploadedFile: File) => {
    // ... existing logic ...
    const fileName = uploadedFile.name.toLowerCase();
    const tool = tools.find(x => x.id === currentTool);

    if (tool) {
      const validExtensions = tool.accept.split(',').map(ext => ext.trim().toLowerCase());
      const isValid = validExtensions.some(ext => fileName.endsWith(ext));
      if (!isValid) {
        triggerHaptic('error'); // Error feedback
        setErrorKey('fileTypeErr');
        setAppState(AppState.ERROR);
        return;
      }
    }

    try {
      setAppState(AppState.PROCESSING);
      setErrorKey(null);
      setFile(uploadedFile);
      setAppState(AppState.PROCESSING);

      const opId = ++operationIdRef.current; // Start new op

      if (currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.SIGN || currentTool === ToolType.ORGANIZE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.FLATTEN || currentTool === ToolType.CROP || currentTool === ToolType.OCR) {
        try {
          const [pdfLibResult, pdfJsResult] = await Promise.allSettled([
            loadPdfDocument(uploadedFile),
            getPdfJsDocument(uploadedFile)
          ]);

          // Race condition check
          if (opId !== operationIdRef.current) return;

          if (pdfLibResult.status === 'fulfilled') {
            setPageCount(pdfLibResult.value.pageCount);
          } else {
            throw pdfLibResult.reason;
          }

          if (pdfJsResult.status === 'fulfilled') {
            setPdfJsDoc(pdfJsResult.value);
          } else {
            console.warn("Preview failed (PDF.js)", pdfJsResult.reason);
            setPdfJsDoc(null);
          }

          setSelectedPages(new Set());
          setRotations({});
          // Initialize page order for Organize tool
          if (pdfLibResult.status === 'fulfilled') {
            setPageOrder(Array.from({ length: pdfLibResult.value.pageCount }, (_, i) => i));
          }
          lastSelectedPageRef.current = null;
          setAppState(AppState.SELECTING);
        } catch (e: any) {
          if (opId !== operationIdRef.current) return; // Ignore errors from stale ops
          console.error("Failed to load PDF structure:", e);
          triggerHaptic('error'); // Error feedback
          if (e?.message?.toLowerCase().includes('password') || e?.name === 'PasswordException' || e?.message?.includes('encrypted')) {
            setErrorKey('passwordErr');
          } else if (e?.message?.includes('Invalid PDF structure') || e?.message?.includes('No PDF header found')) {
            setErrorKey('corruptPdfErr');
          } else {
            setErrorKey('readErr');
          }
          setAppState(AppState.ERROR);
        }
      } else {
        setAppState(AppState.SELECTING);
      }
    } catch (error: any) {
      console.error("General file processing error:", error);
      triggerHaptic('error');
      setErrorKey('readErr');
      setAppState(AppState.ERROR);
    }
  };

  const handleAction = async (processedBlob?: any) => {
    if (!file) return;

    try {
      setAppState(AppState.PROCESSING);

      const opId = ++operationIdRef.current; // Start new op

      let resultBlob: Blob | Uint8Array | null = processedBlob || null;
      let outName = file.name;

      if (!resultBlob) {
        switch (currentTool) {
          case ToolType.DELETE:
          case ToolType.PDF_PAGE_REMOVER: // Reuse same logic
            resultBlob = await deletePagesFromPdf(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_cleaned_eh.pdf');
            break;
          case ToolType.ROTATE:
            resultBlob = await rotatePdfPages(file, rotations);
            outName = file.name.replace('.pdf', '_rotated_eh.pdf');
            break;
          case ToolType.MAKE_FILLABLE:
            resultBlob = await makePdfFillable(file, Array.from(selectedPages), pdfJsDoc);
            outName = file.name.replace('.pdf', '_fillable_eh.pdf');
            break;
          case ToolType.HEIC_TO_PDF:
            resultBlob = await convertHeicToPdf(file);
            outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            break;
          case ToolType.EPUB_TO_PDF:
            resultBlob = await convertEpubToPdf(file);
            outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            break;
          case ToolType.PDF_TO_EPUB:
            resultBlob = await convertPdfToEpub(file);
            outName = file.name.replace('.pdf', '_converted_eh.epub');
            break;
          case ToolType.CBR_TO_PDF:
            resultBlob = await convertCbrToPdf(file);
            outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            break;
          case ToolType.SIGN:
            // Signing is typically handled by components/SignPdfTool calling onAction with processedBlob
            break;
          case ToolType.ORGANIZE:
            resultBlob = await reorderPdfPages(file, pageOrder);
            outName = file.name.replace('.pdf', '_organized_eh.pdf');
            break;
          case ToolType.OCR:
            // Defaulting to searchable PDF for now
            resultBlob = await makeSearchablePdf(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_searchable.pdf');
            break;
          case ToolType.PDF_TO_WORD:
            resultBlob = await convertPdfToWord(file);
            outName = file.name.replace('.pdf', '_converted_eh.docx');
            break;
          case ToolType.WORD_TO_PDF:
            resultBlob = await convertWordToPdf(file);
            outName = file.name.replace('.docx', '.pdf');
            break;
          case ToolType.FLATTEN:
            resultBlob = await flattenPdf(file);
            outName = file.name.replace('.pdf', '_flat.pdf');
            break;
          case ToolType.CROP:
            // Crop is handled via onAction callback with processed blob
            break;
          case ToolType.COMPRESS:
            resultBlob = await compressPdf(file, compressionLevel);
            outName = file.name.replace('.pdf', '_compressed.pdf');
            break;
          case ToolType.MERGE:
            if (files.length > 0) {
              resultBlob = await mergePdfs(files);
              outName = 'merged_document.pdf';
            }
            break;
          case ToolType.SPLIT:
            // Pass selected pages if any, otherwise it splits all
            resultBlob = await splitPdf(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_pages.zip');
            break;
          case ToolType.PDF_TO_XML:
            resultBlob = await convertPdfToXml(file);
            outName = file.name.replace('.pdf', '.xml');
            break;
          case ToolType.XML_TO_PDF:
            resultBlob = await convertXmlToPdf(file);
            outName = file.name.replace('.xml', '.pdf');
            break;
          case ToolType.EXCEL_TO_PDF:
            resultBlob = await convertExcelToPdf(file);
            outName = file.name.replace(/\.(xlsx|xls)$/, '.pdf');
            break;
        }
      } else if (currentTool === ToolType.SIGN) {
        outName = file.name.replace('.pdf', '_signed_eh.pdf');
      }

      if (opId !== operationIdRef.current) return; // Race condition check

      if (resultBlob) {
        const blob = resultBlob instanceof Blob ? resultBlob : new Blob([resultBlob as any], { type: 'application/octet-stream' });
        setProcessedSize(blob.size);
        // Revoke previous URL to prevent memory leaks
        if (downloadUrl) URL.revokeObjectURL(downloadUrl);
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setDownloadName(outName);
        setAppState(AppState.DONE);
        triggerHaptic('success'); // Success feedback
      }
    } catch (error: any) {
      console.error("Action execution failed:", error);
      triggerHaptic('error'); // Error feedback

      // Check for specific error messages from converters
      const errMsg = error?.message?.toLowerCase() || '';

      if (error?.message === "Could not extract text from EPUB") {
        setErrorKey('emptyEpubErr');
      } else if (errMsg.includes('rar') || errMsg.includes('cbr') || errMsg.includes('not supported')) {
        setErrorKey('conversionErr'); // RAR not supported in browser
      } else if (error?.name === 'PasswordException' || errMsg.includes('password')) {
        setErrorKey('passwordErr');
      } else if (errMsg.includes('no images found') || errMsg.includes('could not process')) {
        setErrorKey('conversionErr');
      } else {
        if (currentTool === ToolType.HEIC_TO_PDF || currentTool === ToolType.EPUB_TO_PDF ||
          currentTool === ToolType.CBR_TO_PDF || currentTool === ToolType.WORD_TO_PDF ||
          currentTool === ToolType.PDF_TO_WORD || currentTool === ToolType.OCR) {
          setErrorKey('conversionErr');
        } else {
          setErrorKey('genericError');
        }
      }
      setAppState(AppState.ERROR);
    }
  };

  const togglePageSelection = (e: React.MouseEvent, pageIndex: number) => {
    e.preventDefault();
    triggerHaptic('light'); // Selection feedback
    const isRange = e.shiftKey;

    if (currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.OCR) {
      setSelectedPages(prev => {
        const newSelection = new Set(prev);

        if (isRange && lastSelectedPageRef.current !== null) {
          const start = Math.min(lastSelectedPageRef.current, pageIndex);
          const end = Math.max(lastSelectedPageRef.current, pageIndex);
          for (let i = start; i <= end; i++) {
            newSelection.add(i);
          }
        } else {
          if (newSelection.has(pageIndex)) {
            newSelection.delete(pageIndex);
          } else {
            newSelection.add(pageIndex);
          }
          lastSelectedPageRef.current = pageIndex;
        }
        return newSelection;
      });
    } else if (currentTool === ToolType.ROTATE) {
      setRotations(prev => ({
        ...prev,
        [pageIndex]: ((prev[pageIndex] || 0) + 90) % 360
      }));
    }
  };

  const rotateAll = (direction: 'left' | 'right') => {
    triggerHaptic('light');
    const newRotations = { ...rotations };
    for (let i = 0; i < pageCount; i++) {
      const current = newRotations[i] || 0;
      const delta = direction === 'right' ? 90 : -90;
      newRotations[i] = (current + delta + 360) % 360;
    }
    setRotations(newRotations);
  };

  const resetRotations = () => {
    setRotations({});
  };

  const handleReset = () => {
    operationIdRef.current++; // Invalidate pending operations
    if (currentTool) {
      setFile(null);
      setFiles([]);
      setAppState(AppState.SELECTING);
      setPageCount(0);
      setPdfJsDoc(null); // Cleanup is handled by the useEffect above
      setSelectedPages(new Set());
      setRotations({});
      setPageOrder([]);
      lastSelectedPageRef.current = null;
      setPageRangeInput('');
      setProcessedSize(null);
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
      setErrorKey(null);
    } else {
      setAppState(AppState.HOME);
      setView('HOME');
      safePushState({}, '', '/');
    }
  };

  const handleSoftReset = () => {
    setFile(null);
    setFiles([]);
    setAppState(AppState.SELECTING);
    // Clean up pdfJsDoc to prevent memory leaks
    if (pdfJsDoc) {
      pdfJsDoc.cleanup?.();
      pdfJsDoc.destroy?.();
    }
    setPdfJsDoc(null);
    setPageCount(0);
    setSelectedPages(new Set());
    setRotations({});
    setPageOrder([]);
    // Revoke blob URL to free memory
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setDownloadUrl(null);
    lastSelectedPageRef.current = null;
    setPageRangeInput('');
    setProcessedSize(null);
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "pdfcanada.ca",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CAD"
    },
    "description": t.description,
    "featureList": tools.map(tool => tool.title).join(", "),
    "softwareRequirements": "Modern Web Browser",
    "author": {
      "@type": "Organization",
      "name": "pdfcanada.ca",
      "url": "https://www.pdfcanada.ca"
    }
  };

  const getToolContent = (tool: ToolType) => {
    switch (tool) {
      case ToolType.DELETE:
        return t.features.delete;
      case ToolType.PDF_PAGE_REMOVER:
        return t.features.pdfPageRemover;
      case ToolType.FLATTEN:
        return t.features.flatten;
      case ToolType.CROP:
        return t.features.crop;
      case ToolType.ROTATE:
        return t.features.rotate;
      case ToolType.HEIC_TO_PDF: return t.features.heic;
      case ToolType.EPUB_TO_PDF: return t.features.epubToPdf;
      case ToolType.PDF_TO_EPUB: return t.features.pdfToEpub;
      case ToolType.MAKE_FILLABLE: return t.features.fillable;
      case ToolType.CBR_TO_PDF: return t.features.cbrToPdf;
      case ToolType.SIGN: return t.features.sign;
      case ToolType.ORGANIZE: return t.features.organizePdf;
      case ToolType.PDF_TO_WORD: return t.features.pdfToWord;
      case ToolType.WORD_TO_PDF: return t.features.wordToPdf;
      case ToolType.OCR: return t.features.ocr;
      case ToolType.COMPRESS: return t.features.compress;
      case ToolType.MERGE: return t.features.merge;
      case ToolType.SPLIT: return t.features.split;
      case ToolType.PDF_TO_XML: return t.features.pdfToXml;
      case ToolType.XML_TO_PDF: return t.features.xmlToPdf;
      case ToolType.EXCEL_TO_PDF: return t.features.excelToPdf;
      default: return t.features.delete;
    }
  };


  // Removed renderToolInterface - using LazyToolInterface component now

  const renderToolInterface = () => {
    if (!currentTool) return null;

    return (
      <React.Suspense fallback={<div className="flex h-64 items-center justify-center"><div className="w-10 h-10 border-4 border-canada-red border-t-transparent rounded-full animate-spin"></div></div>}>
        <LazyToolInterface
          file={file}
          files={files}
          setFiles={setFiles}
          currentTool={currentTool}
          lang={lang}
          t={t}
          pageCount={pageCount}
          pdfJsDoc={pdfJsDoc}
          tools={tools}
          selectedPages={selectedPages}
          rotations={rotations}
          previewZoom={previewZoom}
          isDesktop={isDesktop}
          pageOrder={pageOrder}
          setPageOrder={setPageOrder}
          onFileSelect={() => { }}
          onAction={handleAction}
          onSoftReset={handleSoftReset}
          togglePageSelection={togglePageSelection}
          rotateAll={rotateAll}
          resetRotations={resetRotations}
          setPreviewZoom={setPreviewZoom}
          processFile={processFile}
          handleFileChange={handleFileChange}
          pageRangeInput={pageRangeInput}
          setPageRangeInput={setPageRangeInput}
          handleRangeInputChange={handleRangeInputChange}
          compressionLevel={compressionLevel}
          setCompressionLevel={setCompressionLevel}
        />
      </React.Suspense>
    );
  };



  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderHome = () => (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col items-center gap-16 md:gap-24 animate-fade-in relative z-10">

      {/* Hero Section - Premium 2026 Typography */}
      <div className="w-full max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <div className="inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-md border border-red-100/50 text-canada-darkRed px-6 py-2.5 rounded-full text-[10px] font-black shadow-sm mx-auto hover:scale-105 transition-all cursor-default tracking-[0.2em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span>{t.builtIn}</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-[1000] tracking-[-0.04em] text-gray-900 leading-[0.9] md:leading-[0.85]">
            {t.title.split(' ').map((word: string, i: number) => (
              <span key={i} className="inline-block hover:scale-[1.02] transition-transform duration-300 mr-[0.2em] last:mr-0">{word}</span>
            ))}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-canada-red to-[#FF4D4D] drop-shadow-sm inline-block mt-2">
              {t.subtitle}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-modern-neutral-500 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
            {t.description}
          </p>
        </div>

        {/* Search Bar - Minimalist Glass */}
        <div className="w-full max-w-2xl mx-auto relative group pt-4">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative flex items-center bg-white border border-gray-200/60 rounded-[2rem] shadow-bento group-focus-within:shadow-bento-hover p-2 transition-all group-focus-within:ring-8 group-focus-within:ring-red-500/5">
            <div className="pl-6 text-modern-neutral-400 group-focus-within:text-canada-red transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder={lang === 'en' ? "Search for a tool..." : "Rechercher un outil..."}
              className="w-full bg-transparent border-none focus:ring-0 p-4 text-lg font-bold text-modern-neutral-800 placeholder-modern-neutral-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-3 mr-2 bg-gray-50 hover:bg-red-50 text-modern-neutral-400 hover:text-canada-red rounded-full transition-all"
              >
                <X size={18} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tools Section - Bento Grid Layout */}
      <div className="w-full space-y-12">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-canada-red rounded-full shadow-lg shadow-red-500/20" />
            <h2 className="text-3xl font-black text-modern-neutral-800 tracking-tight lowercase italic">
              {searchTerm ? (lang === 'en' ? 'Results' : 'Résultats') : (lang === 'en' ? 'Quick Access' : 'Accès Rapide')}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-black tracking-widest text-modern-neutral-400 uppercase bg-gray-100/80 px-4 py-2 rounded-full border border-gray-200/50">
            <Zap size={14} className="text-yellow-500" />
            {filteredTools.length} {lang === 'en' ? 'Tools available' : 'Outils disponibles'}
          </div>
        </div>

        {appState === AppState.HOME ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
            {filteredTools.map((tool, idx) => (
              <button
                key={tool.id}
                onClick={() => selectTool(tool.id)}
                className={`
                  flex flex-col items-start text-left p-6 bg-white border border-gray-100 rounded-[2rem] 
                  hover:border-red-100 shadow-bento hover:shadow-bento-hover active:scale-[0.98] 
                  transition-all duration-500 group relative overflow-hidden active:shadow-inner
                  ${idx % 7 === 0 ? 'lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-white to-red-50/30' : ''}
                `}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/5 to-transparent rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-700" />

                <div className={`
                  p-4 rounded-2xl mb-6 shadow-sm group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10
                  ${idx % 7 === 0 ? 'bg-canada-red text-white shadow-red-500/20' : 'bg-gray-50 text-modern-neutral-400 group-hover:bg-red-50 group-hover:text-canada-red'}
                `}>
                  <tool.icon size={idx % 7 === 0 ? 32 : 24} strokeWidth={2.5} />
                </div>

                <div className="relative z-10 w-full">
                  <h3 className="font-black text-modern-neutral-800 text-lg mb-2 tracking-tight group-hover:text-canada-red transition-colors">{tool.title}</h3>
                  <p className="text-xs text-modern-neutral-500 font-bold leading-relaxed opacity-80 group-hover:opacity-100 line-clamp-2 md:line-clamp-none">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-auto pt-6 w-full flex justify-end opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight size={18} className="text-canada-red" />
                </div>
              </button>
            ))}

            {filteredTools.length === 0 && (
              <div className="col-span-full py-24 flex flex-col items-center text-center space-y-6 bg-white/40 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-gray-200 shadow-glass">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-modern-neutral-300">
                  <Search size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-modern-neutral-800 lowercase">{lang === 'en' ? 'No tools found...' : 'Aucun outil trouvé...'}</h3>
                  <p className="text-modern-neutral-500 font-medium">{lang === 'en' ? "Try searching for something else, eh?" : "Essayez une autre recherche, eh ?"}</p>
                </div>
                <button onClick={() => setSearchTerm('')} className="bg-modern-neutral-800 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all active:scale-95">Clear Search</button>
              </div>
            )}
          </div>
        ) : (
          /* Tool Interface Wrapper */
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-bento border border-white/60 overflow-hidden relative min-h-[500px] flex flex-col animate-slide-up">
              {/* Tool navigation can go here if needed */}
              {appState === AppState.SELECTING && renderToolInterface()}

              {/* Rendering Logic remains similarly structured */}
              {appState === AppState.PROCESSING && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-30 flex flex-col items-center justify-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-canada-red rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-red-500/30 animate-float">
                    <MapleLeaf className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-[1000] text-modern-neutral-900 mt-8 lowercase italic tracking-tighter">{t.working}...</h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Trust & Features Bento */}
      {appState === AppState.HOME && (
        <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 p-10 bg-gradient-to-br from-modern-neutral-900 to-modern-neutral-800 rounded-[3rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-modern-neutral-900/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red/10 blur-[100px] rounded-full group-hover:bg-canada-red/20 transition-all duration-1000" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                <Shield className="text-red-400" size={24} />
              </div>
              <h2 className="text-4xl font-black tracking-tight">{lang === 'en' ? 'Privacy by Design' : 'Confidentialité par Design'}</h2>
              <p className="text-modern-neutral-400 text-lg leading-relaxed max-w-xl">
                {t.seo.privacyDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-12 relative z-10">
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase">No Cloud Storage</div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase">Client-Side Processing</div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase">Bank-Grade Privacy</div>
            </div>
          </div>

          <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-bento flex flex-col justify-between group hover:shadow-bento-hover transition-all duration-500">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100 group-hover:scale-110 group-hover:rotate-12 transition-all">
                <Heart className="text-canada-red fill-canada-red" size={24} />
              </div>
              <h2 className="text-3xl font-black text-modern-neutral-800 tracking-tight">{lang === 'en' ? 'Love Local' : 'Amour Local'}</h2>
              <p className="text-modern-neutral-500 font-bold leading-relaxed">
                {lang === 'en' ? 'Made with maple syrup and code in Toronto, Ontario.' : 'Fait avec du sirop d\'érable et du code à Toronto, Ontario.'}
              </p>
            </div>
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-50" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-modern-neutral-400">10k+ Canadians</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFeaturePage = () => {
    if (!currentTool) return null;
    const content = getToolContent(currentTool);
    const tool = tools.find(t => t.id === currentTool);

    // List of tools that should use the full workspace layout when a file is currently active
    const isVisualTool = currentTool === ToolType.DELETE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.ROTATE ||
      currentTool === ToolType.ORGANIZE || currentTool === ToolType.MAKE_FILLABLE ||
      currentTool === ToolType.SIGN || currentTool === ToolType.OCR ||
      currentTool === ToolType.HEIC_TO_PDF || currentTool === ToolType.EPUB_TO_PDF ||
      currentTool === ToolType.PDF_TO_EPUB || currentTool === ToolType.CBR_TO_PDF ||
      currentTool === ToolType.PDF_TO_WORD || currentTool === ToolType.WORD_TO_PDF ||
      currentTool === ToolType.FLATTEN || currentTool === ToolType.CROP || currentTool === ToolType.COMPRESS || currentTool === ToolType.MERGE;

    // Check if we are in "Active Workspace" mode (file loaded)
    // Sign tool handles its own full-screen overlay, so we exclude it here if file is present
    const isActiveWorkspace = (file || (files && files.length > 0)) && isVisualTool;

    if (isActiveWorkspace) {
      return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 animate-fade-in min-h-[calc(100vh-80px)] flex flex-col">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex-1 flex flex-col relative min-h-[600px]">
            {/* Render Tool Interface directly here, full size */}
            {(appState === AppState.SELECTING || appState === AppState.PROCESSING) && (
              renderToolInterface()
            )}

            {/* Processing Overlay within Workspace */}
            {appState === AppState.PROCESSING && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-50 flex flex-col items-center justify-center p-8 animate-fade-in">
                <div className="w-24 h-24 bg-canada-red rounded-[3rem] flex items-center justify-center shadow-2xl shadow-red-500/30 animate-float">
                  <MapleLeaf className="w-14 h-14 text-white animate-pulse" />
                </div>
                <h3 className="text-3xl font-[1000] text-modern-neutral-900 mt-10 lowercase italic tracking-tighter">{t.working}...</h3>
                <p className="text-modern-neutral-500 font-bold mt-2 opacity-60 uppercase tracking-[0.2em] text-[10px]">{t.workingDesc}</p>
              </div>
            )}

            {/* Error State within Workspace */}
            {appState === AppState.ERROR && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative animate-fade-in z-50 bg-white">
                <div className="w-16 h-16 bg-red-100 text-canada-red rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.errorTitle}</h3>
                <p className="text-gray-500 mb-8 max-w-lg">
                  {(errorKey && typeof t[errorKey] === 'string') ? (t[errorKey] as string) : t.genericError}
                </p>
                <button onClick={handleReset} className="bg-gray-800 hover:bg-black active:bg-black text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 min-h-[48px]">
                  {t.backToHome}
                </button>
              </div>
            )}

            {/* Done State within Workspace */}
            {appState === AppState.DONE && downloadUrl && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center bg-gradient-to-br from-red-50/50 to-white animate-fade-in z-50">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.doneTitle}</h3>

                {processedSize && (
                  <div className="mb-6 p-4 bg-white rounded-2xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">
                      {currentTool === ToolType.COMPRESS ? (t.sizeReduced || "Size Reduced") : (t.processedSize || "Processed Size")}
                    </div>
                    {currentTool === ToolType.COMPRESS && file ? (
                      <>
                        <div className="text-3xl font-black text-green-600 mb-2">
                          -{Math.max(0, Math.round((1 - (processedSize / file.size)) * 100))}%
                        </div>
                        <div className="flex items-center justify-center gap-3 text-xs font-bold text-green-500/80">
                          <span>{formatFileSize(file.size)}</span>
                          <span className="opacity-50">→</span>
                          <span className="text-green-600">{formatFileSize(processedSize)}</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-2xl font-black text-gray-800 mb-1">
                        {formatFileSize(processedSize)}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-gray-500 mb-8 max-w-xs">{t.doneDesc}</p>
                <div className="space-y-3 w-full max-w-xs">
                  <a href={downloadUrl} download={downloadName} className="flex items-center justify-center gap-2 w-full bg-canada-red hover:bg-canada-darkRed active:bg-canada-darkRed text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-h-[48px]">
                    <Download size={20} /> {t.download}
                  </a>
                  <button onClick={handleReset} className="w-full bg-white border border-gray-200 hover:bg-gray-50 active:bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-medium transition-colors active:scale-95 min-h-[48px]">
                    {t.doAnother}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Default "Landing" Layout (Split View) for when no file is selected
    const toolSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": content.title,
      "description": content.desc,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CAD"
      },
      "featureList": tool?.title
    };

    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto px-6 py-12 md:py-20 gap-12 max-w-7xl animate-fade-in">
          <SEO
            title={content.title}
            description={content.desc}
            lang={lang}
            canonicalPath={tool?.path}
            schema={toolSchema}
            faqs={(content as any).faq?.map((f: any) => ({ q: f.question || f.q, a: f.answer || f.a }))}
            steps={content.steps?.map((step: string, i: number) => ({
              name: `Step ${i + 1}`,
              text: step,
              image: `https://www.pdfcanada.ca/og-image.png`
            }))}
            breadcrumbs={[
              { name: 'Home', path: '/' },
              { name: tool?.title || 'Tool', path: tool?.path || '/' }
            ]}
            price="0"
          />

          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <button
              onClick={() => handleNavigation('HOME')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider shadow-sm hover:text-canada-red hover:border-canada-red active:text-canada-red active:border-canada-red active:bg-red-50 active:scale-95 transition-all min-h-[44px]"
            >
              <ArrowLeft size={12} />
              {t.backToHome}
            </button>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              {content.h1}
            </h1>

            <p className="text-xl text-canada-red font-medium">
              {content.subtitle}
            </p>

            <div className="prose prose-lg text-gray-600 mx-auto md:mx-0">
              <p>{content.content}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-xl">
            <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col transition-all duration-300">

              {/* Tool Upload Interface */}
              {(appState === AppState.SELECTING || appState === AppState.PROCESSING) && (
                renderToolInterface()
              )}

              {/* We don't generally expect PROCESSING/ERROR/DONE here because file selection
                usually triggers the switch to 'isActiveWorkspace' layout, but if something fails
                immediately or we want to show it here, we keep basic fallbacks. */}
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="w-full max-w-7xl mx-auto px-6 pb-20">
          <RelatedTools
            lang={lang}
            onNavigate={handleNavigation}
            currentPath={tool?.path}
            category="all" // Or smarter category logic if desired
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-modern-neutral-800 selection:bg-red-100 selection:text-canada-red">

      {/* Dynamic Mesh Background - Fixed for whole page */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-white">
        <div className="absolute inset-0 bg-mesh-gradient animate-mesh bg-[length:200%_200%] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

        {/* Decorative Floating Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-red-400/5 rounded-full blur-[120px] animate-float mix-blend-multiply" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-orange-400/5 rounded-full blur-[120px] animate-float opacity-70 mix-blend-multiply" style={{ animationDelay: '-2s' }} />
      </div>

      <Header lang={lang} setLang={setLang} onNavigate={handleNavigation} />

      <main id="main-content" className="flex-grow flex flex-col relative">
        <React.Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-canada-red border-t-transparent rounded-full animate-spin"></div></div>}>
          {view === 'HOME' && (
            <>
              <SEO
                title={t.seo.homeTitle}
                description={t.seo.homeDesc}
                lang={lang}
                schema={softwareAppSchema}
                faqs={t.seo.homeFaq}
                price="0"
                breadcrumbs={[{ name: 'Home', path: '/' }]}
              />
              {renderHome()}
            </>
          )}
          {view === 'TOOL_PAGE' && renderFeaturePage()}
          {view === 'PRICING' && <PricingPage lang={lang} />}
          {view === 'PRIVACY' && <PrivacyPage lang={lang} />}
          {view === 'TERMS' && <TermsPage lang={lang} />}
          {view === 'SORRY' && <SorryPolicyPage lang={lang} />}
          {view === 'HOW_TO' && <HowToPage lang={lang} />}
          {view === 'SUPPORT' && <SupportLocalPage lang={lang} />}
          {view === 'MAKE_FILLABLE_INFO' && <MakePdfFillablePage lang={lang} />}
          {view === 'ABOUT' && <AboutPage lang={lang} onNavigate={handleNavigation} />}

          {/* Guides */}
          {view === 'GUIDE_ULTIMATE' && <UltimatePdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_DELETE_PAGES' && <DeletePdfPagesGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_ROTATE' && <RotatePdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_OCR' && <OcrPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_HEIC_TO_PDF' && <HeicToPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_EPUB_TO_PDF' && <EpubToPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_PDF_TO_EPUB' && <PdfToEpubGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_ORGANIZE' && <OrganizePdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_FILLABLE' && <MakeFillableGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_EMAIL_TO_PDF' && <EmailToPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_CBR_TO_PDF' && <CbrToPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_PDF_TO_WORD' && <PdfToWordGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_WORD_TO_PDF' && <WordToPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_PDF_PAGE_REMOVER' && <PdfPageRemoverGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_FLATTEN' && <FlattenPdfGuide lang={lang} onNavigate={handleNavigation} />}

          {view === 'GUIDE_CROP' && <CropPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_COMPRESS' && <CompressPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_MERGE' && <MergePdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_EDIT_XFA' && <EditXfaPdfGuide lang={lang} onNavigate={handleNavigation} />}
          {view === 'GUIDE_INSERT_PICTURE' && <InsertPictureGuide lang={lang} onNavigate={handleNavigation} />}
        </React.Suspense>
      </main>

      <Footer lang={lang} onNavigate={handleNavigation} />

      {/* Global Full-Screen Tool Overlay (e.g. Sign Tool) */}
      {currentTool === ToolType.SIGN && file && (appState === AppState.SELECTING || appState === AppState.PROCESSING) && (
        <div className="fixed inset-0 z-[100] bg-white w-full h-[100dvh] overflow-hidden overscroll-none flex flex-col items-stretch">
          {renderToolInterface()}

          {/* PROCESSING State in Full-Screen overlay */}
          {appState === AppState.PROCESSING && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-[110] flex flex-col items-center justify-center p-8 animate-fade-in">
              <div className="w-24 h-24 bg-canada-red rounded-[3rem] flex items-center justify-center shadow-2xl shadow-red-500/30 animate-float">
                <MapleLeaf className="w-14 h-14 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-[1000] text-modern-neutral-900 mt-10 lowercase italic tracking-tighter">{t.working}...</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;