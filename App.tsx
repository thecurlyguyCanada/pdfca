import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, X, AlertCircle, CheckCircle2, Shield, Trash2, RotateCw, Image, BookOpen, ArrowLeft, ArrowRight, PenTool, RotateCcw, RefreshCcw, Info, ZoomIn, ZoomOut, GripVertical, Lock, Scissors } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MapleLeaf } from './components/MapleLeaf';
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
import { loadPdfDocument, getPdfJsDocument, deletePagesFromPdf, rotatePdfPages, reorderPdfPages, convertHeicToPdf, convertPdfToEpub, convertEpubToPdf, formatFileSize, makePdfFillable, convertCbrToPdf, extractTextWithOcr, makeSearchablePdf, OcrProgress, convertPdfToWord, convertWordToPdf, flattenPdf, cropPdfPages, compressPdf, mergePdfs, splitPdf, convertPdfToXml, convertXmlToPdf } from './utils/pdfUtils';
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


enum AppState {
  HOME,
  SELECTING,
  PROCESSING,
  DONE,
  ERROR
}

type CurrentView = 'HOME' | 'PRICING' | 'PRIVACY' | 'TERMS' | 'SORRY' | 'HOW_TO' | 'SUPPORT' | 'MAKE_FILLABLE_INFO' | 'TOOL_PAGE' |
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
  XML_TO_PDF = 'XML_TO_PDF'
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
  const [pageCount, setPageCount] = useState<number>(0);
  const [pdfJsDoc, setPdfJsDoc] = useState<any>(null);

  // Tool Specific State
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rotations, setRotations] = useState<Record<number, number>>({});
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [cropMargins, setCropMargins] = useState<{ top: number, bottom: number, left: number, right: number }>({ top: 72, bottom: 72, left: 72, right: 72 });
  const lastSelectedPageRef = useRef<number | null>(null);

  // New state for manual page range input
  const [pageRangeInput, setPageRangeInput] = useState<string>('');
  const pageRangeInputRef = useRef<HTMLInputElement>(null);

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

  // Compression Level
  const [compressionLevel, setCompressionLevel] = useState<'good' | 'balanced' | 'extreme'>('balanced');
  const [processedSize, setProcessedSize] = useState<number | null>(null);

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
    } else if (path === '/pricing') setView('PRICING');
    else if (path === '/privacy') setView('PRIVACY');
    else if (path === '/terms') setView('TERMS');
    else if (path === '/howto') setView('HOW_TO');
    else if (path === '/support') setView('SUPPORT');
    else if (path === '/how-to-make-a-pdf-fillable') setView('MAKE_FILLABLE_INFO');
    else if (path === '/sorry') setView('SORRY');
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
    { id: ToolType.ORGANIZE, icon: GripVertical, title: t.organizePdf, desc: t.organizePdfDesc, accept: '.pdf', path: '/organize-pdf' },
    { id: ToolType.MAKE_FILLABLE, icon: PenTool, title: t.toolMakeFillable, desc: t.toolMakeFillableDesc, accept: '.pdf', path: '/make-pdf-fillable' },
    { id: ToolType.HEIC_TO_PDF, icon: Image, title: t.toolHeic, desc: t.toolHeicDesc, accept: '.heic', path: '/heic-to-pdf' },
    { id: ToolType.EPUB_TO_PDF, icon: BookOpen, title: t.toolEpubToPdf, desc: t.toolEpubToPdfDesc, accept: '.epub', path: '/epub-to-pdf' },
    { id: ToolType.PDF_TO_EPUB, icon: FileText, title: t.toolPdfToEpub, desc: t.toolPdfToEpubDesc, accept: '.pdf', path: '/pdf-to-epub' },
    { id: ToolType.CBR_TO_PDF, icon: BookOpen, title: "CBR to PDF", desc: "Convert Comic Book archives (CBR, CBZ) to PDF.", accept: '.cbr,.cbz', path: '/cbr-to-pdf' },
    { id: ToolType.SIGN, icon: PenTool, title: t.toolSign, desc: t.toolSignDesc, accept: '.pdf', path: '/sign-pdf' },
    { id: ToolType.PDF_TO_WORD, icon: FileText, title: t.toolPdfToWord, desc: t.toolPdfToWordDesc, accept: '.pdf', path: '/pdf-to-word' },
    { id: ToolType.WORD_TO_PDF, icon: FileText, title: t.toolWordToPdf, desc: t.toolWordToPdfDesc, accept: '.docx', path: '/word-to-pdf' },
    { id: ToolType.OCR, icon: FileText, title: t.toolOcr || 'OCR PDF', desc: t.toolOcrDesc || 'Make scanned PDFs searchable with OCR.', accept: '.pdf', path: '/ocr-pdf' },
    { id: ToolType.COMPRESS, icon: Scissors, title: t.toolCompress || 'Compress PDF', desc: t.toolCompressDesc || 'Reduce file size while maintaining quality.', accept: '.pdf', path: '/compress-pdf' },
    { id: ToolType.MERGE, icon: GripVertical, title: t.toolMerge || 'Merge PDF', desc: t.toolMergeDesc || 'Combine multiple PDFs into one.', accept: '.pdf', path: '/merge-pdf' },
    { id: ToolType.SPLIT, icon: Scissors, title: 'Split PDF', desc: 'Separate PDF into individual pages.', accept: '.pdf', path: '/split-pdf' },
    { id: ToolType.PDF_TO_XML, icon: FileText, title: 'PDF to XML', desc: 'Extract PDF content into structured XML.', accept: '.pdf', path: '/pdf-to-xml' },
    { id: ToolType.XML_TO_PDF, icon: FileText, title: 'XML to PDF', desc: 'Convert XML data into a PDF document.', accept: '.xml', path: '/xml-to-pdf' },
  ];

  const selectTool = (toolId: ToolType) => {
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

      if (currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.SIGN || currentTool === ToolType.ORGANIZE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.FLATTEN || currentTool === ToolType.CROP || currentTool === ToolType.OCR) {
        try {
          const [pdfLibResult, pdfJsResult] = await Promise.allSettled([
            loadPdfDocument(uploadedFile),
            getPdfJsDocument(uploadedFile)
          ]);

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
            resultBlob = await cropPdfPages(file, cropMargins);
            outName = file.name.replace('.pdf', '_cropped.pdf');
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
            resultBlob = await splitPdf(file);
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
        }
      } else if (currentTool === ToolType.SIGN) {
        outName = file.name.replace('.pdf', '_signed_eh.pdf');
      }

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
    if (currentTool) {
      setFile(null);
      setFiles([]);
      setAppState(AppState.SELECTING);
      setPageCount(0);
      setPdfJsDoc(null);
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
      "url": "https://pdfcanada.ca"
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
          cropMargins={cropMargins}
          setCropMargins={setCropMargins}
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



  const renderHome = () => (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col items-center gap-10 md:gap-14 animate-fade-in">

      {/* Hero Section - Centered & Simplified */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 bg-red-100 text-canada-darkRed px-4 py-1.5 rounded-full text-sm font-bold shadow-sm mx-auto">
          <MapleLeaf className="w-4 h-4" />
          {t.builtIn}
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
          {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-canada-red to-red-600">{t.subtitle}</span>
        </h1>

        <p className="hero-desc text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>

        <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
          <Shield className="w-4 h-4 text-canada-red" />
          <span>{t.localProcessingDesc}</span>
        </div>
      </div>

      {/* Main Tool Grid - Direct Access */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px bg-gray-200 w-12 md:w-24"></div>
          <h2 className="text-xl font-bold text-gray-800 text-center">Select a Tool <span className="font-normal text-gray-500">eh?</span></h2>
          <div className="h-px bg-gray-200 w-12 md:w-24"></div>
        </div>

        {appState === AppState.HOME ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => selectTool(tool.id)}
                className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-canada-red hover:shadow-xl hover:shadow-red-500/10 active:scale-[0.98] transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 bg-red-100 text-canada-darkRed rounded-xl mb-4 group-hover:bg-canada-red group-hover:text-white transition-colors relative z-10 shadow-sm">
                  <tool.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 relative z-10">{tool.title}</h3>
                <p className="text-sm text-gray-500 relative z-10 leading-snug">{tool.desc}</p>
              </button>
            ))}
          </div>
        ) : (
          /* Active Tool Container (Centered) */
          <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col transition-all duration-500 animate-in fade-in slide-in-from-bottom-8">
            {/* --- TOOL INTERFACE (SELECTING) --- */}
            {appState === AppState.SELECTING && (
              <>
                <div className="absolute top-6 left-6 z-20">
                  {!file && (
                    <button onClick={handleReset} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 active:text-canada-red text-sm font-bold bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-300 transition-all active:scale-95">
                      <ArrowLeft size={18} /> {t.backToHome}
                    </button>
                  )}
                </div>
                {!(currentTool === ToolType.SIGN && file) && renderToolInterface()}
              </>
            )}

            {/* --- PROCESSING --- */}
            {appState === AppState.PROCESSING && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 animate-fade-in">
                <div className="animate-spin text-canada-red mb-6">
                  <MapleLeaf className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.working}</h3>
                <p className="text-gray-500">{t.workingDesc}</p>
              </div>
            )}

            {/* --- DONE --- */}
            {appState === AppState.DONE && downloadUrl && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center bg-gradient-to-br from-red-50/50 to-white animate-fade-in">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce shadow-lg shadow-green-200">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">{t.doneTitle}</h3>

                {currentTool === ToolType.COMPRESS && processedSize && file && (
                  <div className="mb-8 p-6 bg-white rounded-2xl border border-green-100 shadow-sm w-full max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-xs font-black text-green-700 uppercase tracking-wider mb-2">
                      {t.sizeReduced || "Size Reduced"}
                    </div>
                    <div className="text-4xl font-black text-green-600 mb-3">
                      -{Math.max(0, Math.round((1 - (processedSize / file.size)) * 100))}%
                    </div>
                    <div className="flex items-center justify-center gap-3 text-sm font-bold text-gray-400">
                      <span className="line-through">{formatFileSize(file.size)}</span>
                      <ArrowRight size={14} />
                      <span className="text-green-600">{formatFileSize(processedSize)}</span>
                    </div>
                  </div>
                )}

                <p className="text-gray-500 mb-10 max-w-xs mx-auto leading-relaxed">{t.doneDesc}</p>
                <div className="space-y-4 w-full max-w-xs mx-auto">
                  <a href={downloadUrl} download={downloadName} className="flex items-center justify-center gap-3 w-full bg-canada-red hover:bg-canada-darkRed active:bg-canada-darkRed text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-500/30 transition-all hover:-translate-y-1 active:translate-y-0 active:scale-95 text-lg">
                    <Download size={24} /> {t.download}
                  </a>
                  <button onClick={handleReset} className="w-full bg-white border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 active:bg-gray-100 text-gray-600 px-8 py-3 rounded-full font-bold transition-all active:scale-95">
                    {t.doAnother}
                  </button>
                </div>
              </div>
            )}

            {/* Error State within Workspace */}
            {appState === AppState.ERROR && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative animate-fade-in z-50 bg-white">
                <button onClick={handleReset} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <X size={24} />
                </button>
                <div className="w-20 h-20 bg-red-100 text-canada-darkRed rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.errorTitle}</h3>
                <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
                  {(errorKey && typeof t[errorKey] === 'string') ? (t[errorKey] as string) : t.genericError}
                </p>
                <button onClick={handleReset} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 shadow-lg">
                  {t.backToHome}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Testimonials & Trust Section */}
      {appState === AppState.HOME && (
        <div className="w-full max-w-5xl mx-auto mt-16 space-y-12">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-canada-red" />
              <span className="text-sm font-bold text-gray-700">Privacy First</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <MapleLeaf className="w-5 h-5 text-canada-red" />
              <span className="text-sm font-bold text-gray-700">Proudly Canadian</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <Lock className="w-5 h-5 text-canada-red" />
              <span className="text-sm font-bold text-gray-700">No Upload Required</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-gray-700">100% Free</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What Our Users Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
                <p className="text-gray-600 italic mb-4">"Finally, a PDF tool that doesn't ask for my email or upload my documents. Fast, free, and actually private!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 text-canada-red rounded-full flex items-center justify-center font-bold">S</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Sarah M.</p>
                    <p className="text-xs text-gray-500">Small Business Owner, Toronto</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
                <p className="text-gray-600 italic mb-4">"I use the Merge PDF tool every week for my reports. It's so much faster than Adobe and completely free."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">J</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">James K.</p>
                    <p className="text-xs text-gray-500">Project Manager, Vancouver</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
                <p className="text-gray-600 italic mb-4">"The privacy focus is exactly what I needed for handling client documents. Local processing is a game changer."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">M</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Maria L.</p>
                    <p className="text-xs text-gray-500">Lawyer, Montreal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Message */}
          <div className="text-center space-y-3 pt-4">
            <h2 className="text-2xl font-bold text-gray-900">{t.builtIn}</h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">{t.seo.privacyDesc}</p>
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
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-8 animate-fade-in">
                <div className="animate-spin text-canada-red mb-4">
                  <MapleLeaf className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t.working}</h3>
                <p className="text-gray-500 mt-2">{t.workingDesc}</p>
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

                {currentTool === ToolType.COMPRESS && processedSize && file && (
                  <div className="mb-6 p-4 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-sm font-black text-green-700 uppercase tracking-wider mb-1">
                      {t.sizeReduced || "Size Reduced"}
                    </div>
                    <div className="text-3xl font-black text-green-600 mb-2">
                      -{Math.max(0, Math.round((1 - (processedSize / file.size)) * 100))}%
                    </div>
                    <div className="flex items-center justify-center gap-3 text-xs font-bold text-green-500/80">
                      <span>{formatFileSize(file.size)}</span>
                      <span className="opacity-50">→</span>
                      <span className="text-green-600">{formatFileSize(processedSize)}</span>
                    </div>
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
      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto px-6 py-12 md:py-20 gap-12 max-w-7xl animate-fade-in">
        <SEO
          title={content.title}
          description={content.desc}
          lang={lang}
          canonicalPath={tool?.path}
          schema={toolSchema}
          steps={content.steps?.map((step: string, i: number) => ({
            name: `Step ${i + 1}`,
            text: step,
            image: `https://pdfcanada.ca/og-image.png`
          }))}
          price="0"
          rating={4.8}
          reviewCount={1245}
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
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Header lang={lang} setLang={setLang} onNavigate={handleNavigation} />

      <main className="flex-grow flex flex-col">
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
                rating={4.8}
                reviewCount={1245}
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
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-[110] flex flex-col items-center justify-center p-8 animate-fade-in">
              <div className="animate-spin text-canada-red mb-4">
                <MapleLeaf className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{t.working}</h3>
              <p className="text-gray-500 mt-2">{t.workingDesc}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;