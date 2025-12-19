import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, X, AlertCircle, CheckCircle2, Shield, Trash2, RotateCw, Image, BookOpen, ArrowLeft, PenTool, RotateCcw, RefreshCcw, Info, ZoomIn, ZoomOut } from 'lucide-react';
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
import { loadPdfDocument, getPdfJsDocument, deletePagesFromPdf, rotatePdfPages, convertHeicToPdf, convertPdfToEpub, convertEpubToPdf, formatFileSize, makePdfFillable, convertCbrToPdf } from './utils/pdfUtils';
import { translations, Language } from './utils/i18n';
import { SEO } from './components/SEO';
import {
  UltimatePdfGuide,
  DeletePdfPagesGuide,
  RotatePdfGuide,
  OcrPdfGuide,
  HeicToPdfGuide,
  EpubToPdfGuide,
  PdfToEpubGuide,
  OrganizePdfGuide,
  MakeFillableGuide,
  EmailToPdfGuide,
  CbrToPdfGuide
} from './components/Guides';

enum AppState {
  HOME,
  SELECTING,
  PROCESSING,
  DONE,
  ERROR
}

type CurrentView = 'HOME' | 'PRICING' | 'PRIVACY' | 'TERMS' | 'SORRY' | 'HOW_TO' | 'SUPPORT' | 'MAKE_FILLABLE_INFO' | 'TOOL_PAGE' |
  'GUIDE_ULTIMATE' | 'GUIDE_DELETE_PAGES' | 'GUIDE_ROTATE' | 'GUIDE_OCR' | 'GUIDE_HEIC_TO_PDF' | 'GUIDE_EPUB_TO_PDF' | 'GUIDE_PDF_TO_EPUB' | 'GUIDE_ORGANIZE' | 'GUIDE_FILLABLE' | 'GUIDE_EMAIL_TO_PDF' | 'GUIDE_CBR_TO_PDF';

export enum ToolType {
  DELETE = 'DELETE',
  ROTATE = 'ROTATE',
  HEIC_TO_PDF = 'HEIC_TO_PDF',
  EPUB_TO_PDF = 'EPUB_TO_PDF',
  PDF_TO_EPUB = 'PDF_TO_EPUB',
  MAKE_FILLABLE = 'MAKE_FILLABLE',
  CBR_TO_PDF = 'CBR_TO_PDF'
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
  const [pageCount, setPageCount] = useState<number>(0);
  const [pdfJsDoc, setPdfJsDoc] = useState<any>(null);

  // Tool Specific State
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rotations, setRotations] = useState<Record<number, number>>({});
  const lastSelectedPageRef = useRef<number | null>(null);

  // New state for manual page range input
  const [pageRangeInput, setPageRangeInput] = useState<string>('');
  const pageRangeInputRef = useRef<HTMLInputElement>(null);

  // Zoom Level: Granular (0.5 to 3.0)
  const [previewZoom, setPreviewZoom] = useState<number>(1.0);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string>('');
  const [errorKey, setErrorKey] = useState<keyof typeof translations['en'] | null>(null);

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
    { id: ToolType.ROTATE, icon: RotateCw, title: t.toolRotate, desc: t.toolRotateDesc, accept: '.pdf', path: '/rotate-pdf' },
    { id: ToolType.MAKE_FILLABLE, icon: PenTool, title: t.toolMakeFillable, desc: t.toolMakeFillableDesc, accept: '.pdf', path: '/make-pdf-fillable' },
    { id: ToolType.HEIC_TO_PDF, icon: Image, title: t.toolHeic, desc: t.toolHeicDesc, accept: '.heic', path: '/heic-to-pdf' },
    { id: ToolType.EPUB_TO_PDF, icon: BookOpen, title: t.toolEpubToPdf, desc: t.toolEpubToPdfDesc, accept: '.epub', path: '/epub-to-pdf' },
    { id: ToolType.PDF_TO_EPUB, icon: FileText, title: t.toolPdfToEpub, desc: t.toolPdfToEpubDesc, accept: '.pdf', path: '/pdf-to-epub' },
    { id: ToolType.CBR_TO_PDF, icon: BookOpen, title: "CBR to PDF", desc: "Convert Comic Book archives (CBR, CBZ) to PDF.", accept: '.cbr,.cbz', path: '/cbr-to-pdf' },
  ];

  const selectTool = (toolId: ToolType) => {
    const tool = tools.find(t => t.id === toolId);
    setCurrentTool(toolId);
    setFile(null);
    setAppState(AppState.SELECTING);
    setView('TOOL_PAGE');
    if (tool) {
      safePushState({}, '', tool.path);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = async (uploadedFile: File) => {
    const fileName = uploadedFile.name.toLowerCase();
    const tool = tools.find(x => x.id === currentTool);

    if (tool) {
      const validExtensions = tool.accept.split(',').map(ext => ext.trim().toLowerCase());
      const isValid = validExtensions.some(ext => fileName.endsWith(ext));
      if (!isValid) {
        setErrorKey('fileTypeErr');
        setAppState(AppState.ERROR);
        return;
      }
    }

    try {
      setAppState(AppState.PROCESSING);
      setErrorKey(null);
      setFile(uploadedFile);

      if (currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE) {
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
          lastSelectedPageRef.current = null;
          setAppState(AppState.SELECTING);
        } catch (e: any) {
          console.error("Failed to load PDF structure:", e);
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
      setErrorKey('readErr');
      setAppState(AppState.ERROR);
    }
  };

  const handleAction = async () => {
    if (!file) return;

    try {
      setAppState(AppState.PROCESSING);

      let resultBlob: Blob | Uint8Array | null = null;
      let outName = file.name;

      switch (currentTool) {
        case ToolType.DELETE:
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
      }

      if (resultBlob) {
        const blob = resultBlob instanceof Blob ? resultBlob : new Blob([resultBlob as any], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setDownloadName(outName);
        setAppState(AppState.DONE);
      }
    } catch (error: any) {
      console.error("Action execution failed:", error);

      if (error?.message === "Could not extract text from EPUB") {
        setErrorKey('emptyEpubErr');
      } else if (error?.name === 'PasswordException' || error?.message?.toLowerCase().includes('password')) {
        setErrorKey('passwordErr');
      } else {
        if (currentTool === ToolType.HEIC_TO_PDF || currentTool === ToolType.EPUB_TO_PDF) {
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
    const isRange = e.shiftKey;

    if (currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE) {
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
      setAppState(AppState.SELECTING);
      setPageCount(0);
      setPdfJsDoc(null);
      setSelectedPages(new Set());
      setRotations({});
      lastSelectedPageRef.current = null;
      setPageRangeInput('');
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
    setAppState(AppState.SELECTING);
    setDownloadUrl(null);
    lastSelectedPageRef.current = null;
    setPageRangeInput('');
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
      case ToolType.DELETE: return t.features.delete;
      case ToolType.ROTATE: return t.features.rotate;
      case ToolType.HEIC_TO_PDF: return t.features.heic;
      case ToolType.EPUB_TO_PDF: return t.features.epubToPdf;
      case ToolType.PDF_TO_EPUB: return t.features.pdfToEpub;
      case ToolType.MAKE_FILLABLE: return t.features.fillable;
      case ToolType.CBR_TO_PDF: return t.features.cbrToPdf;
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
          currentTool={currentTool}
          t={t}
          pageCount={pageCount}
          pdfJsDoc={pdfJsDoc}
          tools={tools}
          selectedPages={selectedPages}
          rotations={rotations}
          previewZoom={previewZoom}
          onFileSelect={() => { }} // Not used?
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
        />
      </React.Suspense>
    );
  };



  const renderHome = () => (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-canada-red text-xs font-bold uppercase tracking-wider shadow-sm">
            <MapleLeaf className="w-4 h-4" />
            {t.builtIn}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-sm">
            {t.title} <span className="text-canada-red">{t.subtitle}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            {t.description}
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-lg p-4 flex items-start gap-3 text-left shadow-sm">
              <Shield className="w-5 h-5 text-canada-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{t.localProcessing}</h4>
                <p className="text-gray-600 text-xs mt-1">
                  {t.localProcessingDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Dashboard / Tool */}
        <div className="w-full md:w-1/2 max-w-xl">
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col transition-all duration-300">

            {/* --- DASHBOARD: SELECT TOOL --- */}
            {appState === AppState.HOME && (
              <div className="p-8 h-full bg-gray-50/30 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  Select a Tool <span className="text-lg font-normal text-gray-400">eh?</span>
                </h2>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {tools.map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => selectTool(tool.id)}
                      className="flex flex-col items-center md:items-start p-4 md:p-5 bg-white border border-gray-200 rounded-2xl hover:border-canada-red hover:shadow-lg hover:shadow-red-500/10 active:scale-95 active:border-canada-red active:shadow-lg active:shadow-red-500/10 transition-all text-center md:text-left group"
                    >
                      <div className="p-2 md:p-3 bg-red-50 text-canada-red rounded-xl mb-2 md:mb-3 group-hover:bg-canada-red group-hover:text-white group-active:bg-canada-red group-active:text-white transition-colors">
                        <tool.icon size={20} className="md:w-6 md:h-6" />
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight">{tool.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-1 hidden md:block">{tool.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* --- TOOL INTERFACE (SELECTING) --- */}
            {appState === AppState.SELECTING && (
              <>
                <div className="absolute top-4 left-4 z-20">
                  {!file && (
                    <button onClick={handleReset} className="flex items-center gap-1 text-gray-500 hover:text-gray-800 active:text-canada-red text-sm font-medium bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm hover:shadow active:shadow-md border border-transparent hover:border-gray-200 active:border-canada-red/30 transition-all active:scale-95">
                      <ArrowLeft size={16} /> {t.backToHome}
                    </button>
                  )}
                </div>
                {renderToolInterface()}
              </>
            )}

            {/* --- PROCESSING --- */}
            {appState === AppState.PROCESSING && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 animate-fade-in">
                <div className="animate-spin text-canada-red mb-4">
                  <MapleLeaf className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t.working}</h3>
                <p className="text-gray-500 mt-2">{t.workingDesc}</p>
              </div>
            )}

            {/* --- DONE --- */}
            {appState === AppState.DONE && downloadUrl && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center bg-gradient-to-br from-red-50/50 to-white animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.doneTitle}</h3>
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

            {appState === AppState.ERROR && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative animate-fade-in">
                <button onClick={handleReset} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 active:text-canada-red p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full active:bg-gray-100 transition-colors">
                  <X size={24} />
                </button>
                <div className="w-16 h-16 bg-red-100 text-canada-red rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.errorTitle}</h3>
                <p className="text-gray-500 mb-8">
                  {(errorKey && typeof t[errorKey] === 'string') ? (t[errorKey] as string) : t.genericError}
                </p>
                <button onClick={handleReset} className="bg-gray-800 hover:bg-black active:bg-black text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 min-h-[48px]">
                  {t.backToHome}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust / Privacy Section (Below Hero) */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">{t.builtIn}</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{t.seo.privacyDesc}</p>
      </div>
    </div>
  );

  const renderFeaturePage = () => {
    if (!currentTool) return null;
    const content = getToolContent(currentTool);
    const tool = tools.find(t => t.id === currentTool);

    return (
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 py-12 md:py-20 gap-12">
        <SEO
          title={content.title}
          description={content.desc}
          lang={lang}
          canonicalPath={tool?.path}
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

            {(appState === AppState.SELECTING || appState === AppState.PROCESSING) && (
              renderToolInterface()
            )}

            {/* ERROR State in Tool Page */}
            {appState === AppState.ERROR && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative animate-fade-in">
                <div className="w-16 h-16 bg-red-100 text-canada-red rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.errorTitle}</h3>
                <p className="text-gray-500 mb-8">
                  {(errorKey && typeof t[errorKey] === 'string') ? (t[errorKey] as string) : t.genericError}
                </p>
                <button onClick={handleReset} className="bg-gray-800 hover:bg-black active:bg-black text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 min-h-[48px]">
                  {t.backToHome}
                </button>
              </div>
            )}

            {/* DONE State in Tool Page */}
            {appState === AppState.DONE && downloadUrl && (
              <div className="flex flex-col h-full items-center justify-center p-10 text-center bg-gradient-to-br from-red-50/50 to-white animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.doneTitle}</h3>
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
        </React.Suspense>
      </main>

      <Footer lang={lang} onNavigate={handleNavigation} />
    </div>
  );
}

export default App;