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
    Search,
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

    // Mobile specific state
    const [isMobile, setIsMobile] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isPinching, setIsPinching] = useState(false);

    // History for Undo/Redo
    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Pinch zoom refs
    const touchStartDist = useRef<number>(0);
    const startZoom = useRef<number>(1);

    // Haptics helper
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

    // Check mobile on mount
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-fit zoom on mobile
    useEffect(() => {
        if (isMobile && previewZoom === 1.0) {
            const targetWidth = window.innerWidth - 32;
            const newZoom = Math.min(0.65, targetWidth / 612);
            setPreviewZoom(newZoom);
        }
    }, [isMobile]);

    // Native touch event listeners for pinch-to-zoom
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


    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string, x?: number, y?: number, page?: number) => {
        vibrate(20);
        const id = `entry_${Date.now()}`;
        const currentPage = page !== undefined ? page : (visiblePages.size > 0 ? Math.min(...Array.from(visiblePages)) : 0);

        const newEntry: SignatureEntry = {
            id,
            pageIndex: currentPage,
            x: x !== undefined ? x : 0.1,
            y: y !== undefined ? y : 0.1,
            width: type === 'signature' || type === 'initials' ? 0.25 : 0.2,
            height: type === 'signature' || type === 'initials' ? 0.1 : 0.05,
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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (showSignaturesDropdown) {
                setShowSignaturesDropdown(false);
            }
        };
        if (showSignaturesDropdown) {
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 100);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showSignaturesDropdown]);

    // Render Bottom Sheet (Mobile)
    const renderBottomSheet = () => (
        <>
            {showBottomSheet && (
                <div
                    className="fixed inset-0 bg-black/50 z-[90]"
                    onClick={() => setShowBottomSheet(false)}
                />
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
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Signatures</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 transition-transform h-24"
                            >
                                <Plus size={22} /> New Signature
                            </button>
                            {savedSignatures.map((sig, i) => (
                                <button
                                    key={i}
                                    onClick={() => { addEntry('signature', sig); }}
                                    className="border border-gray-200 rounded-xl p-2 bg-white active:border-canada-red active:scale-95 transition-all h-24 flex items-center justify-center"
                                >
                                    <img src={sig} alt="Signature" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Initials</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 transition-transform h-24"
                            >
                                <Plus size={22} /> New Initials
                            </button>
                            {savedInitials.map((sig, i) => (
                                <button
                                    key={i}
                                    onClick={() => { addEntry('initials', sig); }}
                                    className="border border-gray-200 rounded-xl p-2 bg-white active:border-canada-red active:scale-95 transition-all h-24 flex items-center justify-center"
                                >
                                    <img src={sig} alt="Initials" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Quick Add</h4>
                        <div className="flex gap-3">
                            <button
                                onClick={() => addEntry('date')}
                                className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95 transition-transform"
                            >
                                <Calendar size={18} /> Date
                            </button>
                            <button
                                onClick={() => addEntry('text', undefined, 'Text')}
                                className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95 transition-transform"
                            >
                                <Type size={18} /> Text
                            </button>
                            <button
                                onClick={() => addEntry('text', undefined, '✓')}
                                className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-gray-700 font-medium active:scale-95 transition-transform"
                            >
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

            {/* ========== DESKTOP HEADER ========== */}
            <div className="hidden md:block bg-white border-b border-gray-200">
                {/* File Info Row */}
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 text-canada-red rounded-xl flex items-center justify-center shadow-sm">
                            <FileText size={22} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">{file?.name || 'Document.pdf'}</h3>
                            <span className="text-sm text-gray-500">{file ? formatFileSize(file.size) : '0 KB'}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Toolbar Row */}
                <div className="border-t border-gray-100 bg-gray-50/50">
                    <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">

                        {/* Navigation Toggle */}
                        <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                            <button
                                onClick={() => setActiveTool('pan')}
                                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${activeTool === 'pan' ? 'bg-gray-100 text-canada-red' : 'text-gray-400 hover:text-gray-600'}`}
                                title="Pan Tool"
                            >
                                <Hand size={20} strokeWidth={activeTool === 'pan' ? 2.5 : 2} />
                            </button>
                            <button
                                onClick={() => setActiveTool('select')}
                                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${activeTool === 'select' ? 'bg-gray-100 text-canada-red' : 'text-gray-400 hover:text-gray-600'}`}
                                title="Select Tool"
                            >
                                <MousePointer2 size={20} strokeWidth={activeTool === 'select' ? 2.5 : 2} />
                            </button>
                        </div>

                        <div className="w-px h-8 bg-gray-200" />

                        {/* Sign Dropdown */}
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); toggleSignMenu(); }}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${showSignaturesDropdown ? 'bg-red-50 border-red-200 text-canada-red' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 shadow-sm'}`}
                            >
                                <PenTool size={18} className={showSignaturesDropdown ? 'text-canada-red' : 'text-gray-500'} />
                                Sign
                                <ChevronDown size={14} className={`transition-transform ${showSignaturesDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showSignaturesDropdown && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-[70]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Signatures</h4>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <button onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="flex flex-col items-center gap-1 h-18 py-3 border border-dashed border-gray-300 rounded-lg hover:border-canada-red hover:bg-red-50/30 text-canada-red transition-all">
                                            <Plus size={20} />
                                            <span className="text-xs font-bold">New</span>
                                        </button>
                                        {savedSignatures.map((sig, i) => (
                                            <button key={i} onClick={() => addEntry('signature', sig)} className="h-18 py-2 border border-gray-100 rounded-lg hover:border-canada-red transition-all flex items-center justify-center bg-gray-50">
                                                <img src={sig} className="max-w-full max-h-12 object-contain" alt="" />
                                            </button>
                                        ))}
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Initials</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="flex flex-col items-center gap-1 h-18 py-3 border border-dashed border-gray-300 rounded-lg hover:border-canada-red hover:bg-red-50/30 text-canada-red transition-all">
                                            <Plus size={20} />
                                            <span className="text-xs font-bold">New</span>
                                        </button>
                                        {savedInitials.map((sig, i) => (
                                            <button key={i} onClick={() => addEntry('initials', sig)} className="h-18 py-2 border border-gray-100 rounded-lg hover:border-canada-red transition-all flex items-center justify-center bg-gray-50">
                                                <img src={sig} className="max-w-full max-h-12 object-contain" alt="" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Insert Tools */}
                        <div className="flex items-center gap-1.5">
                            <button onClick={() => addEntry('date')} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm text-gray-600 transition-all" title="Add Date">
                                <Calendar size={20} />
                            </button>
                            <button onClick={() => addEntry('text', undefined, 'Text')} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm text-gray-600 transition-all" title="Add Text">
                                <Type size={20} />
                            </button>
                            <button onClick={() => addEntry('text', undefined, '✓')} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm text-gray-600 transition-all" title="Add Check">
                                <CheckIcon size={20} />
                            </button>
                        </div>

                        <div className="w-px h-8 bg-gray-200" />

                        {/* Undo/Redo */}
                        <div className="flex items-center gap-1">
                            <button onClick={undo} disabled={historyStep === 0} className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all" title="Undo">
                                <Undo2 size={20} />
                            </button>
                            <button onClick={redo} disabled={historyStep === history.length - 1} className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all" title="Redo">
                                <Redo2 size={20} />
                            </button>
                        </div>

                        <div className="w-px h-8 bg-gray-200" />

                        {/* Zoom */}
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm">
                            <Search size={16} className="text-gray-400" />
                            <span className="text-sm font-medium text-gray-700 w-12 text-center">{Math.round(previewZoom * 100)}%</span>
                            <div className="flex items-center gap-1 border-l border-gray-200 pl-2 ml-1">
                                <button onClick={() => setPreviewZoom(Math.max(0.25, previewZoom - 0.25))} className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-lg font-bold">−</button>
                                <button onClick={() => setPreviewZoom(Math.min(3, previewZoom + 0.25))} className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-lg font-bold">+</button>
                            </div>
                        </div>

                        <div className="flex-1" />

                        {/* Sign Button */}
                        <button
                            onClick={() => onSign(entries)}
                            className="bg-canada-red text-white py-2.5 px-6 rounded-xl font-bold shadow-md shadow-red-500/20 hover:bg-canada-darkRed hover:shadow-lg active:scale-95 transition-all"
                        >
                            {t.btnSign}
                        </button>
                    </div>
                </div>
            </div>

            {/* ========== MOBILE HEADER ========== */}
            <div className="flex md:hidden items-center justify-between w-full px-3 py-2.5 bg-white border-b border-gray-100 sticky top-0 z-[60]">
                <button
                    onClick={onClose}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 active:bg-gray-100"
                >
                    <X size={22} />
                </button>

                <span className="font-bold text-gray-800 text-sm">Sign PDF</span>

                <button
                    onClick={() => onSign(entries)}
                    className="text-canada-red font-bold text-sm px-3 py-1.5 active:opacity-70"
                >
                    Done
                </button>
            </div>

            {/* ========== PDF SCROLL AREA ========== */}
            <div
                ref={scrollContainerRef}
                className={`flex-1 overflow-auto flex flex-col items-center gap-6 custom-scrollbar bg-gray-100 ${isPinching ? 'overflow-hidden' : ''}`}
                style={{
                    paddingTop: '24px',
                    paddingBottom: isMobile ? '100px' : '40px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    touchAction: isPinching ? 'none' : 'pan-y'
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

            {/* ========== MOBILE BOTTOM BAR ========== */}
            <div
                className={`md:hidden fixed left-3 right-3 bg-white rounded-2xl shadow-lg border border-gray-100 z-[80] flex items-center justify-around py-2 transition-all duration-300 ${showBottomSheet ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100'}`}
                style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
                <button
                    onClick={() => { vibrate(); setActiveTool('pan'); }}
                    className={`flex flex-col items-center gap-0.5 px-4 py-1 ${activeTool === 'pan' ? 'text-canada-red' : 'text-gray-400'}`}
                >
                    <Hand size={20} strokeWidth={activeTool === 'pan' ? 2.5 : 2} />
                    <span className="text-[9px] font-semibold">Pan</span>
                </button>

                <button
                    onClick={() => { vibrate(); setActiveTool('select'); }}
                    className={`flex flex-col items-center gap-0.5 px-4 py-1 ${activeTool === 'select' ? 'text-canada-red' : 'text-gray-400'}`}
                >
                    <MousePointer2 size={20} strokeWidth={activeTool === 'select' ? 2.5 : 2} />
                    <span className="text-[9px] font-semibold">Edit</span>
                </button>

                {/* Floating Add Button */}
                <div className="relative -top-4">
                    <button
                        onClick={toggleSignMenu}
                        className="bg-canada-red text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                    >
                        <Plus size={26} />
                    </button>
                </div>

                <button
                    onClick={undo}
                    disabled={historyStep === 0}
                    className="flex flex-col items-center gap-0.5 px-4 py-1 text-gray-400 disabled:opacity-30"
                >
                    <Undo2 size={20} />
                    <span className="text-[9px] font-semibold">Undo</span>
                </button>

                <button
                    onClick={redo}
                    disabled={historyStep === history.length - 1}
                    className="flex flex-col items-center gap-0.5 px-4 py-1 text-gray-400 disabled:opacity-30"
                >
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

            <button
                id="footer-sign-trigger"
                onClick={() => onSign(entries)}
                className="hidden"
            />
        </div>
    );
};

// ========== PAGE RENDERER COMPONENT ==========

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

    const handleEntryDrag = useCallback((entryId: string, d: { x: number; y: number }, entryWidth: number, entryHeight: number) => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(3);
        const x = Math.max(0, Math.min(d.x, pageSize.width - entryWidth));
        const y = Math.max(0, Math.min(d.y, pageSize.height - entryHeight));
        onEntryUpdate(entryId, {
            x: x / pageSize.width,
            y: y / pageSize.height
        });
    }, [pageSize, onEntryUpdate]);

    return (
        <div
            ref={containerRef}
            className="relative bg-white shadow-lg rounded-sm ring-1 ring-black/5"
            style={{
                width: pageSize.width || 612 * zoom,
                height: pageSize.height || 792 * zoom,
                minWidth: pageSize.width || 612 * zoom,
                minHeight: pageSize.height || 792 * zoom
            }}
            onClick={() => {
                if (activeTool === 'select') {
                    onSelectEntry(null);
                }
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Entries Overlay */}
            <div className={`absolute inset-0 ${activeTool === 'pan' ? 'pointer-events-none' : ''}`}>
                {pageSize.width > 0 && entries.map(entry => (
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
                            handleEntryDrag(entry.id, d, entry.width * pageSize.width, entry.height * pageSize.height);
                        }}
                        onResizeStop={(_, __, ref, ___, position) => {
                            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(3);
                            onEntryUpdate(entry.id, {
                                width: ref.offsetWidth / pageSize.width,
                                height: ref.offsetHeight / pageSize.height,
                                x: position.x / pageSize.width,
                                y: position.y / pageSize.height
                            });
                        }}
                        bounds="parent"
                        lockAspectRatio={entry.type === 'signature' || entry.type === 'initials'}
                        className={`${selectedEntryId === entry.id ? 'z-30' : 'z-20'}`}
                        disableDragging={activeTool === 'pan'}
                        enableResizing={activeTool === 'select' && selectedEntryId === entry.id}
                        resizeHandleStyles={{
                            bottomRight: { width: isMobile ? 28 : 14, height: isMobile ? 28 : 14, right: isMobile ? -14 : -7, bottom: isMobile ? -14 : -7 },
                            bottomLeft: { width: isMobile ? 28 : 14, height: isMobile ? 28 : 14, left: isMobile ? -14 : -7, bottom: isMobile ? -14 : -7 },
                            topRight: { width: isMobile ? 28 : 14, height: isMobile ? 28 : 14, right: isMobile ? -14 : -7, top: isMobile ? -14 : -7 },
                            topLeft: { width: isMobile ? 28 : 14, height: isMobile ? 28 : 14, left: isMobile ? -14 : -7, top: isMobile ? -14 : -7 },
                        }}
                        resizeHandleComponent={selectedEntryId === entry.id ? {
                            bottomRight: <div className="w-full h-full bg-canada-red rounded-full border-2 border-white shadow-md" />,
                            bottomLeft: <div className="w-full h-full bg-canada-red rounded-full border-2 border-white shadow-md" />,
                            topRight: <div className="w-full h-full bg-canada-red rounded-full border-2 border-white shadow-md" />,
                            topLeft: <div className="w-full h-full bg-canada-red rounded-full border-2 border-white shadow-md" />
                        } : {}}
                    >
                        <div
                            className={`w-full h-full relative border-2 ${selectedEntryId === entry.id ? 'border-blue-500' : 'border-transparent'} flex items-center justify-center`}
                            style={{ touchAction: 'none' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelectEntry(entry.id);
                            }}
                        >
                            {entry.dataUrl ? (
                                <img src={entry.dataUrl} className="w-full h-full object-contain pointer-events-none select-none" alt="" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-blue-50/30 rounded">
                                    {entry.type === 'date' || entry.type === 'text' ? (
                                        <input
                                            type="text"
                                            value={entry.text}
                                            onChange={(e) => onEntryUpdate(entry.id, { text: e.target.value })}
                                            onClick={(e) => e.stopPropagation()}
                                            className="bg-transparent border-none outline-none text-center w-full h-full text-gray-800 font-medium"
                                            style={{ fontSize: Math.max(10, 14 * zoom) + 'px' }}
                                        />
                                    ) : (
                                        <span className="text-gray-800 font-medium">{entry.text}</span>
                                    )}
                                </div>
                            )}

                            {selectedEntryId === entry.id && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); onEntryDelete(entry.id); }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-red-600 text-white rounded-lg shadow-lg z-50 active:scale-95 flex items-center gap-1"
                                >
                                    <Trash2 size={14} />
                                    <span className="text-xs font-bold">Delete</span>
                                </button>
                            )}
                        </div>
                    </Rnd>
                ))}
            </div>

            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-8 h-8 border-3 border-canada-red border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
};
