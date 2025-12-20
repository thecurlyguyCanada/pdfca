import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rnd } from 'react-rnd';
import {
    X,
    Plus,
    Type,
    Calendar,
    Check as CheckIcon,
    Trash2,
    Hand,
    MousePointer2,
    ChevronDown,
    Undo2,
    Redo2,
    ZoomIn,
    ZoomOut,
    PenTool,
    FileText
} from 'lucide-react';
import { SignatureModal } from './SignatureModal';
import { SignatureEntry, formatFileSize } from '../utils/pdfUtils';

interface SignPdfToolProps {
    file: File | null;
    onClose: () => void;
    pdfJsDoc: any;
    pageCount: number;
    t: any;
    onSign: (entries: SignatureEntry[]) => void;
    previewZoom: number;
    setPreviewZoom: (zoom: number) => void;
}

export const SignPdfTool: React.FC<SignPdfToolProps> = ({
    file,
    onClose,
    pdfJsDoc,
    pageCount,
    t,
    onSign,
    previewZoom,
    setPreviewZoom
}) => {
    const [entries, setEntries] = useState<SignatureEntry[]>([]);
    const [activeTool, setActiveTool] = useState<'pan' | 'select'>('select');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'signature' | 'initials'>('signature');
    const [savedSignatures, setSavedSignatures] = useState<string[]>([]);
    const [savedInitials, setSavedInitials] = useState<string[]>([]);
    const [showSignaturesDropdown, setShowSignaturesDropdown] = useState(false);
    const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

    const [isMobile, setIsMobile] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isPinching, setIsPinching] = useState(false);

    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const touchStartDist = useRef<number>(0);
    const startZoom = useRef<number>(1);

    const vibrate = (ms: number = 10) => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(ms);
        }
    };

    const reportVisibility = (idx: number, isVisible: boolean) => {
        setVisiblePages(prev => {
            const next = new Set(prev);
            if (isVisible) next.add(idx);
            else next.delete(idx);
            return next;
        });
    };

    const addToHistory = (newEntries: SignatureEntry[]) => {
        const newHistory = history.slice(0, historyStep + 1);
        newHistory.push(newEntries);
        setHistory(newHistory);
        setHistoryStep(newHistory.length - 1);
        setEntries(newEntries);
    };

    const undo = () => {
        vibrate(15);
        if (historyStep > 0) {
            const step = historyStep - 1;
            setHistoryStep(step);
            setEntries(history[step]);
        }
    };

    const redo = () => {
        vibrate(15);
        if (historyStep < history.length - 1) {
            const step = historyStep + 1;
            setHistoryStep(step);
            setEntries(history[step]);
        }
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile && previewZoom === 1.0) {
            const targetWidth = window.innerWidth - 32;
            const newZoom = Math.min(0.65, targetWidth / 612);
            setPreviewZoom(newZoom);
        }
    }, [isMobile]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                setIsPinching(true);
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                touchStartDist.current = dist;
                startZoom.current = previewZoom;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2 && touchStartDist.current > 0) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const scale = dist / touchStartDist.current;
                const newZoom = Math.min(2.5, Math.max(0.4, startZoom.current * scale));
                setPreviewZoom(newZoom);
            }
        };

        const handleTouchEnd = () => {
            touchStartDist.current = 0;
            setIsPinching(false);
        };

        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [previewZoom, setPreviewZoom]);

    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string) => {
        vibrate(20);
        const id = `entry_${Date.now()}`;
        const currentPage = visiblePages.size > 0 ? Math.min(...Array.from(visiblePages)) : 0;

        const newEntry: SignatureEntry = {
            id,
            pageIndex: currentPage,
            x: 0.3,
            y: 0.3,
            width: type === 'signature' || type === 'initials' ? 0.3 : 0.2,
            height: type === 'signature' || type === 'initials' ? 0.1 : 0.04,
            type,
            dataUrl,
            text: text || (type === 'date' ? new Date().toLocaleDateString() : '')
        };
        addToHistory([...entries, newEntry]);
        setSelectedEntryId(id);
        setShowBottomSheet(false);
        setShowSignaturesDropdown(false);
    };

    const updateEntry = (id: string, updates: Partial<SignatureEntry>) => {
        const newEntries = entries.map(e => e.id === id ? { ...e, ...updates } : e);
        addToHistory(newEntries);
    };

    const removeEntry = (id: string) => {
        vibrate(10);
        const newEntries = entries.filter(e => e.id !== id);
        addToHistory(newEntries);
        setSelectedEntryId(null);
    };

    const handleSignatureSave = (dataUrl: string) => {
        vibrate(50);
        if (modalType === 'signature') {
            setSavedSignatures([...savedSignatures, dataUrl]);
            addEntry('signature', dataUrl);
        } else {
            setSavedInitials([...savedInitials, dataUrl]);
            addEntry('initials', dataUrl);
        }
    };

    const toggleSignMenu = () => {
        vibrate();
        if (isMobile) {
            setShowBottomSheet(!showBottomSheet);
        } else {
            setShowSignaturesDropdown(!showSignaturesDropdown);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            if (showSignaturesDropdown) {
                setShowSignaturesDropdown(false);
            }
        };
        if (showSignaturesDropdown) {
            setTimeout(() => document.addEventListener('click', handleClickOutside), 50);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showSignaturesDropdown]);

    // Mobile bottom sheet
    const renderBottomSheet = () => (
        <>
            {showBottomSheet && (
                <div className="fixed inset-0 bg-black/50 z-[90]" onClick={() => setShowBottomSheet(false)} />
            )}
            <div
                className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-[100] transition-transform duration-300 ${showBottomSheet ? 'translate-y-0' : 'translate-y-full'} max-h-[70vh] overflow-y-auto`}
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
            >
                <div className="sticky top-0 bg-white pt-3 pb-2 border-b border-gray-100">
                    <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto" />
                </div>
                <div className="p-4 space-y-5">
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Signatures</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 h-24"
                            >
                                <Plus size={22} /> New Signature
                            </button>
                            {savedSignatures.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('signature', sig)} className="border border-gray-200 rounded-xl p-2 bg-white active:border-canada-red h-24 flex items-center justify-center">
                                    <img src={sig} alt="Signature" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Initials</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 h-24"
                            >
                                <Plus size={22} /> New Initials
                            </button>
                            {savedInitials.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('initials', sig)} className="border border-gray-200 rounded-xl p-2 bg-white active:border-canada-red h-24 flex items-center justify-center">
                                    <img src={sig} alt="Initials" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Quick Add</h4>
                        <div className="flex gap-3">
                            <button onClick={() => addEntry('date')} className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95">
                                <Calendar size={18} /> Date
                            </button>
                            <button onClick={() => addEntry('text', undefined, 'Text')} className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95">
                                <Type size={18} /> Text
                            </button>
                            <button onClick={() => addEntry('text', undefined, '✓')} className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95">
                                <CheckIcon size={18} /> Check
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="flex flex-col flex-1 bg-gray-100 w-full h-full relative overflow-hidden">

            {/* ===== DESKTOP HEADER ===== */}
            <div className="hidden md:block bg-white border-b border-gray-200 shrink-0">
                {/* File Info Row */}
                <div className="px-6 py-3 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-50 text-canada-red rounded-lg flex items-center justify-center">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">{file?.name || 'Document.pdf'}</h3>
                            <span className="text-xs text-gray-500">{file ? formatFileSize(file.size) : '0 KB'}</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                        <X size={20} />
                    </button>
                </div>

                {/* Toolbar Row */}
                <div className="px-6 py-2 flex items-center gap-3 overflow-x-auto">
                    {/* Pan/Select Toggle */}
                    <div className="flex bg-gray-100 rounded-lg p-0.5 shrink-0">
                        <button
                            onClick={() => setActiveTool('pan')}
                            className={`flex items-center justify-center w-9 h-9 rounded-md transition-all ${activeTool === 'pan' ? 'bg-white shadow-sm text-canada-red' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Hand size={18} />
                        </button>
                        <button
                            onClick={() => setActiveTool('select')}
                            className={`flex items-center justify-center w-9 h-9 rounded-md transition-all ${activeTool === 'select' ? 'bg-white shadow-sm text-canada-red' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <MousePointer2 size={18} />
                        </button>
                    </div>

                    <div className="w-px h-6 bg-gray-200 shrink-0" />

                    {/* Sign Dropdown */}
                    <div className="relative shrink-0">
                        <button
                            onClick={(e) => { e.stopPropagation(); toggleSignMenu(); }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${showSignaturesDropdown ? 'bg-red-50 text-canada-red' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <PenTool size={16} />
                            Sign
                            <ChevronDown size={14} className={`transition-transform ${showSignaturesDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {showSignaturesDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-[70]" onClick={(e) => e.stopPropagation()}>
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Signatures</h4>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <button onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="flex flex-col items-center gap-1 py-3 border border-dashed border-gray-300 rounded-lg hover:border-canada-red text-canada-red">
                                        <Plus size={18} />
                                        <span className="text-xs font-bold">New</span>
                                    </button>
                                    {savedSignatures.map((sig, i) => (
                                        <button key={i} onClick={() => addEntry('signature', sig)} className="py-2 border border-gray-100 rounded-lg hover:border-canada-red bg-gray-50 flex items-center justify-center h-14">
                                            <img src={sig} className="max-w-full max-h-full object-contain" alt="" />
                                        </button>
                                    ))}
                                </div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Initials</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="flex flex-col items-center gap-1 py-3 border border-dashed border-gray-300 rounded-lg hover:border-canada-red text-canada-red">
                                        <Plus size={18} />
                                        <span className="text-xs font-bold">New</span>
                                    </button>
                                    {savedInitials.map((sig, i) => (
                                        <button key={i} onClick={() => addEntry('initials', sig)} className="py-2 border border-gray-100 rounded-lg hover:border-canada-red bg-gray-50 flex items-center justify-center h-14">
                                            <img src={sig} className="max-w-full max-h-full object-contain" alt="" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Tools */}
                    <button onClick={() => addEntry('date')} className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 shrink-0" title="Date">
                        <Calendar size={18} />
                    </button>
                    <button onClick={() => addEntry('text', undefined, 'Text')} className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 shrink-0" title="Text">
                        <Type size={18} />
                    </button>
                    <button onClick={() => addEntry('text', undefined, '✓')} className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 shrink-0" title="Check">
                        <CheckIcon size={18} />
                    </button>

                    <div className="w-px h-6 bg-gray-200 shrink-0" />

                    {/* Undo/Redo */}
                    <button onClick={undo} disabled={historyStep === 0} className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 shrink-0">
                        <Undo2 size={18} />
                    </button>
                    <button onClick={redo} disabled={historyStep === history.length - 1} className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 shrink-0">
                        <Redo2 size={18} />
                    </button>

                    <div className="w-px h-6 bg-gray-200 shrink-0" />

                    {/* Zoom */}
                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-1 shrink-0">
                        <button onClick={() => setPreviewZoom(Math.max(0.25, previewZoom - 0.25))} className="w-7 h-7 flex items-center justify-center rounded text-gray-600 hover:bg-gray-200">
                            <ZoomOut size={16} />
                        </button>
                        <span className="text-sm font-medium text-gray-700 w-12 text-center">{Math.round(previewZoom * 100)}%</span>
                        <button onClick={() => setPreviewZoom(Math.min(3, previewZoom + 0.25))} className="w-7 h-7 flex items-center justify-center rounded text-gray-600 hover:bg-gray-200">
                            <ZoomIn size={16} />
                        </button>
                    </div>

                    <div className="flex-1" />

                    {/* Sign Button */}
                    <button onClick={() => onSign(entries)} className="bg-canada-red text-white py-2 px-5 rounded-lg font-bold shadow-md hover:bg-canada-darkRed active:scale-95 transition-all shrink-0">
                        {t.btnSign}
                    </button>
                </div>
            </div>

            {/* ===== MOBILE HEADER ===== */}
            <div className="flex md:hidden items-center justify-between w-full px-3 py-2.5 bg-white border-b border-gray-100 shrink-0">
                <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500">
                    <X size={22} />
                </button>
                <span className="font-bold text-gray-800 text-sm">Sign PDF</span>
                <button onClick={() => onSign(entries)} className="text-canada-red font-bold text-sm px-3 py-1.5">
                    Done
                </button>
            </div>

            {/* ===== PDF SCROLL AREA ===== */}
            <div
                ref={scrollContainerRef}
                className={`flex-1 overflow-auto flex flex-col items-center gap-6 bg-gray-100 ${isPinching ? 'overflow-hidden' : ''}`}
                style={{
                    padding: '24px 16px',
                    paddingBottom: isMobile ? '100px' : '40px',
                    touchAction: isPinching ? 'none' : 'auto',
                    cursor: activeTool === 'pan' ? 'grab' : 'default'
                }}
            >
                {Array.from({ length: pageCount }).map((_, idx) => (
                    <PageRenderer
                        key={idx}
                        pageIndex={idx}
                        pdfJsDoc={pdfJsDoc}
                        zoom={previewZoom}
                        entries={entries.filter(e => e.pageIndex === idx)}
                        onEntryUpdate={updateEntry}
                        onEntryDelete={removeEntry}
                        activeTool={activeTool}
                        onVisibilityChange={(v) => reportVisibility(idx, v)}
                        selectedEntryId={selectedEntryId}
                        onSelectEntry={setSelectedEntryId}
                        isMobile={isMobile}
                    />
                ))}
            </div>

            {/* ===== MOBILE BOTTOM BAR ===== */}
            <div
                className={`md:hidden fixed left-3 right-3 bg-white rounded-2xl shadow-lg border border-gray-100 z-[80] flex items-center justify-around py-2 transition-all ${showBottomSheet ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
                <button onClick={() => { vibrate(); setActiveTool('pan'); }} className={`flex flex-col items-center gap-0.5 px-4 py-1 ${activeTool === 'pan' ? 'text-canada-red' : 'text-gray-400'}`}>
                    <Hand size={20} strokeWidth={activeTool === 'pan' ? 2.5 : 2} />
                    <span className="text-[9px] font-semibold">Pan</span>
                </button>

                <button onClick={() => { vibrate(); setActiveTool('select'); }} className={`flex flex-col items-center gap-0.5 px-4 py-1 ${activeTool === 'select' ? 'text-canada-red' : 'text-gray-400'}`}>
                    <MousePointer2 size={20} strokeWidth={activeTool === 'select' ? 2.5 : 2} />
                    <span className="text-[9px] font-semibold">Edit</span>
                </button>

                <div className="relative -top-4">
                    <button onClick={toggleSignMenu} className="bg-canada-red text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95">
                        <Plus size={26} />
                    </button>
                </div>

                <button onClick={undo} disabled={historyStep === 0} className="flex flex-col items-center gap-0.5 px-4 py-1 text-gray-400 disabled:opacity-30">
                    <Undo2 size={20} />
                    <span className="text-[9px] font-semibold">Undo</span>
                </button>

                <button onClick={redo} disabled={historyStep === history.length - 1} className="flex flex-col items-center gap-0.5 px-4 py-1 text-gray-400 disabled:opacity-30">
                    <Redo2 size={20} />
                    <span className="text-[9px] font-semibold">Redo</span>
                </button>
            </div>

            {renderBottomSheet()}

            <SignatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSignatureSave}
                t={t}
                title={modalType === 'signature' ? t.addSignature : t.addInitials}
            />

            <button id="footer-sign-trigger" onClick={() => onSign(entries)} className="hidden" />
        </div>
    );
};

// ===== PAGE RENDERER =====

interface PageRendererProps {
    pageIndex: number;
    pdfJsDoc: any;
    zoom: number;
    entries: SignatureEntry[];
    onEntryUpdate: (id: string, updates: Partial<SignatureEntry>) => void;
    onEntryDelete: (id: string) => void;
    activeTool: 'pan' | 'select';
    onVisibilityChange: (isVisible: boolean) => void;
    selectedEntryId: string | null;
    onSelectEntry: (id: string | null) => void;
    isMobile: boolean;
}

const PageRenderer: React.FC<PageRendererProps> = ({
    pageIndex,
    pdfJsDoc,
    zoom,
    entries,
    onEntryUpdate,
    onEntryDelete,
    activeTool,
    onVisibilityChange,
    selectedEntryId,
    onSelectEntry,
    isMobile
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const visible = entry.isIntersecting;
            setIsVisible(visible);
            onVisibilityChange(visible);
        }, { threshold: 0.01, rootMargin: '100px' });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [onVisibilityChange]);

    useEffect(() => {
        if (!isVisible || !pdfJsDoc) return;

        const renderPage = async () => {
            try {
                const page = await pdfJsDoc.getPage(pageIndex + 1);
                const viewport = page.getViewport({ scale: zoom });
                setPageSize({ width: viewport.width, height: viewport.height });

                const canvas = canvasRef.current;
                if (canvas) {
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    const context = canvas.getContext('2d');
                    if (context) {
                        await page.render({ canvasContext: context, viewport }).promise;
                    }
                }
            } catch (err) {
                console.error("Error rendering page", pageIndex, err);
            }
        };
        renderPage();
    }, [pdfJsDoc, pageIndex, zoom, isVisible]);

    return (
        <div
            ref={containerRef}
            className="relative bg-white shadow-lg rounded"
            style={{
                width: pageSize.width || 612 * zoom,
                height: pageSize.height || 792 * zoom,
                minWidth: pageSize.width || 612 * zoom,
                minHeight: pageSize.height || 792 * zoom
            }}
            onClick={(e) => {
                if (activeTool === 'select') {
                    onSelectEntry(null);
                }
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Entries - only interactive in select mode */}
            {activeTool === 'select' && pageSize.width > 0 && entries.map(entry => (
                <Rnd
                    key={entry.id}
                    size={{
                        width: entry.width * pageSize.width,
                        height: entry.height * pageSize.height
                    }}
                    position={{
                        x: entry.x * pageSize.width,
                        y: entry.y * pageSize.height
                    }}
                    onDragStart={(e) => {
                        e.stopPropagation();
                        onSelectEntry(entry.id);
                    }}
                    onDragStop={(_, d) => {
                        const x = Math.max(0, Math.min(d.x, pageSize.width - entry.width * pageSize.width));
                        const y = Math.max(0, Math.min(d.y, pageSize.height - entry.height * pageSize.height));
                        onEntryUpdate(entry.id, { x: x / pageSize.width, y: y / pageSize.height });
                    }}
                    onResizeStop={(_, __, ref, ___, position) => {
                        onEntryUpdate(entry.id, {
                            width: ref.offsetWidth / pageSize.width,
                            height: ref.offsetHeight / pageSize.height,
                            x: position.x / pageSize.width,
                            y: position.y / pageSize.height
                        });
                    }}
                    bounds="parent"
                    lockAspectRatio={entry.type === 'signature' || entry.type === 'initials'}
                    className={`absolute ${selectedEntryId === entry.id ? 'z-30' : 'z-20'}`}
                    enableResizing={selectedEntryId === entry.id ? {
                        top: true, right: true, bottom: true, left: true,
                        topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
                    } : false}
                    resizeHandleStyles={{
                        topLeft: { width: 12, height: 12, top: -6, left: -6, background: '#dc2626', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
                        topRight: { width: 12, height: 12, top: -6, right: -6, background: '#dc2626', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
                        bottomLeft: { width: 12, height: 12, bottom: -6, left: -6, background: '#dc2626', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
                        bottomRight: { width: 12, height: 12, bottom: -6, right: -6, background: '#dc2626', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
                    }}
                >
                    <div
                        className={`w-full h-full border-2 ${selectedEntryId === entry.id ? 'border-blue-500' : 'border-transparent hover:border-blue-300'} flex items-center justify-center cursor-move`}
                        style={{ touchAction: 'none' }}
                        onClick={(e) => { e.stopPropagation(); onSelectEntry(entry.id); }}
                    >
                        {entry.dataUrl ? (
                            <img src={entry.dataUrl} className="w-full h-full object-contain pointer-events-none" alt="" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-blue-50/50 rounded">
                                {entry.type === 'date' || entry.type === 'text' ? (
                                    <input
                                        type="text"
                                        value={entry.text}
                                        onChange={(e) => onEntryUpdate(entry.id, { text: e.target.value })}
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-transparent border-none outline-none text-center w-full h-full text-gray-800 font-medium"
                                        style={{ fontSize: Math.max(12, 16 * zoom) + 'px' }}
                                    />
                                ) : (
                                    <span className="text-gray-800 font-medium">{entry.text}</span>
                                )}
                            </div>
                        )}

                        {selectedEntryId === entry.id && (
                            <button
                                onClick={(e) => { e.stopPropagation(); onEntryDelete(entry.id); }}
                                className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-600 text-white rounded-md shadow-lg flex items-center gap-1 text-xs font-bold"
                            >
                                <Trash2 size={12} /> Delete
                            </button>
                        )}
                    </div>
                </Rnd>
            ))}

            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-8 h-8 border-4 border-canada-red border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
};
