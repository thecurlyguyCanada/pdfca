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
    ChevronUp
} from 'lucide-react';
import { SignatureModal } from './SignatureModal';
import { SignatureEntry } from '../utils/pdfUtils';

interface SignPdfToolProps {
    pdfJsDoc: any;
    pageCount: number;
    t: any;
    onSign: (entries: SignatureEntry[]) => void;
    previewZoom: number;
    setPreviewZoom: (zoom: number) => void;
}

export const SignPdfTool: React.FC<SignPdfToolProps> = ({
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

    // History for Undo/Redo
    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set());
    const containerRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // Smart Zoom Calculation on init
            if (mobile && previewZoom === 1.0 && containerRef.current) {
                // Aim to fit width with some padding
                const screenWidth = window.innerWidth;
                const targetWidth = screenWidth - 32; // 16px padding each side
                // Assuming standard letter width ~600px at 100% (approx)
                // We'll let the page renderer report size, but for start let's guess 0.6
                // Better: set a slightly lower zoom to ensure visibility
                setPreviewZoom(Math.min(0.8, targetWidth / 600));
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // --- Pinch to Zoom Logic ---
    const touchStartDist = useRef<number>(0);
    const startZoom = useRef<number>(1);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            touchStartDist.current = dist;
            startZoom.current = previewZoom;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchStartDist.current > 0) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const scale = dist / touchStartDist.current;
            const newZoom = Math.min(3.0, Math.max(0.4, startZoom.current * scale)); // Allow slightly wider processing range

            // Throttle zoom updates slightly for performance if needed, 
            // but React 18 batching handles this reasonably well.
            setPreviewZoom(newZoom);
        }
    };

    const handleTouchEnd = () => {
        touchStartDist.current = 0;
    };


    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string, x?: number, y?: number, page?: number) => {
        vibrate(20);
        const id = `entry_${Date.now()}`;
        const currentPage = page !== undefined ? page : (visiblePages.size > 0 ? Math.min(...Array.from(visiblePages)) : 0);

        const newEntry: SignatureEntry = {
            id,
            pageIndex: currentPage,
            x: x !== undefined ? x : 0.1,
            y: y !== undefined ? y : 0.1,
            width: type === 'signature' || type === 'initials' ? 0.25 : 0.2, // Slightly larger defaults for mobile
            height: type === 'signature' || type === 'initials' ? 0.12 : 0.06,
            type,
            dataUrl,
            text: text || (type === 'date' ? new Date().toLocaleDateString() : '')
        };
        addToHistory([...entries, newEntry]);
        setSelectedEntryId(id);
    };

    const updateEntry = (id: string, updates: Partial<SignatureEntry>) => {
        const newEntries = entries.map(e => e.id === id ? { ...e, ...updates } : e);
        addToHistory(newEntries);
    };

    const removeEntry = (id: string) => {
        vibrate(10);
        const newEntries = entries.filter(e => e.id !== id);
        addToHistory(newEntries);
    };

    const handleSignatureSave = (dataUrl: string) => {
        vibrate(50); // Stronger vibration on successful creation
        if (modalType === 'signature') {
            setSavedSignatures([...savedSignatures, dataUrl]);
            addEntry('signature', dataUrl);
        } else {
            setSavedInitials([...savedInitials, dataUrl]);
            addEntry('initials', dataUrl);
        }
    };

    // UI Helpers
    const toggleSignMenu = () => {
        vibrate();
        if (isMobile) {
            setShowBottomSheet(!showBottomSheet);
        } else {
            setShowSignaturesDropdown(!showSignaturesDropdown);
        }
    };

    // Render Bottom Sheet for Mobile
    const renderBottomSheet = () => (
        <>
            {showBottomSheet && (
                <div className="fixed inset-0 bg-black/50 z-[90] animate-fade-in" onClick={() => setShowBottomSheet(false)} />
            )}
            <div className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-[100] transition-transform duration-300 transform ${showBottomSheet ? 'translate-y-0' : 'translate-y-full'} max-h-[80vh] overflow-y-auto`}>
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-3" />
                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Signatures</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 transition-transform h-24"
                            >
                                <Plus size={24} /> {t.newSignature}
                            </button>
                            {savedSignatures.map((sig, i) => (
                                <button
                                    key={i}
                                    onClick={() => { addEntry('signature', sig); setShowBottomSheet(false); }}
                                    className="border border-gray-100 rounded-xl p-2 bg-white active:border-canada-red active:scale-95 transition-all h-24 flex items-center justify-center"
                                >
                                    <img src={sig} alt="Signature" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Initials</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowBottomSheet(false); }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-red-50 text-canada-red rounded-xl font-bold border border-red-100 active:scale-95 transition-transform h-24"
                            >
                                <Plus size={24} /> {t.newInitials}
                            </button>
                            {savedInitials.map((sig, i) => (
                                <button
                                    key={i}
                                    onClick={() => { addEntry('initials', sig); setShowBottomSheet(false); }}
                                    className="border border-gray-100 rounded-xl p-2 bg-white active:border-canada-red active:scale-95 transition-all h-24 flex items-center justify-center"
                                >
                                    <img src={sig} alt="Initials" className="max-w-full max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions in Bottom Sheet too */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Adds</h4>
                        <div className="flex gap-3">
                            <button onClick={() => { addEntry('date'); setShowBottomSheet(false); }} className="flex-1 p-3 bg-blue-50 text-blue-700 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95">
                                <Calendar size={18} /> Date
                            </button>
                            <button onClick={() => { addEntry('text', undefined, 'Text'); setShowBottomSheet(false); }} className="flex-1 p-3 bg-green-50 text-green-700 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95">
                                <Type size={18} /> Text
                            </button>
                        </div>
                    </div>

                    <div className="h-4" /> {/* Spacer */}
                </div>
            </div>
        </>
    );

    return (
        <div
            className="flex flex-col flex-1 bg-gray-50 w-full relative overflow-hidden"
            style={{ touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Top Bar - Minimal on Mobile */}
            <div className={`sticky top-0 z-[60] bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 shadow-sm flex items-center justify-between transition-transform duration-300 ${isMobile && activeTool === 'pan' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>

                {/* Desktop Toolbar Content (Visible only on md+) */}
                <div className="hidden md:flex items-center gap-3 w-full">
                    <div className="flex bg-gray-100 p-1 rounded-xl shrink-0">
                        <button
                            onClick={() => setActiveTool('pan')}
                            className={`p-2 rounded-lg transition-all ${activeTool === 'pan' ? 'bg-white text-canada-red shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                            title={t.pan}
                        >
                            <Hand size={20} />
                        </button>
                        <button
                            onClick={() => setActiveTool('select')}
                            className={`p-2 rounded-lg transition-all ${activeTool === 'select' ? 'bg-white text-canada-red shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                            title={t.select}
                        >
                            <MousePointer2 size={20} />
                        </button>
                    </div>
                    <div className="w-px h-8 bg-gray-200 mx-1"></div>

                    <button
                        onClick={toggleSignMenu}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-sm text-gray-700 shadow-sm relative"
                    >
                        <PenTool size={20} className="text-canada-red" />
                        <span>Sign</span>
                        <ChevronDown size={12} />

                        {/* Desktop Dropdown */}
                        {!isMobile && showSignaturesDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[70] animate-scale-in text-left cursor-default" onClick={e => e.stopPropagation()}>
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Signatures</h4>
                                <div className="space-y-2 mb-4">
                                    {savedSignatures.map((sig, i) => (
                                        <div key={i} onClick={() => { addEntry('signature', sig); setShowSignaturesDropdown(false); }} className="cursor-pointer border border-gray-100 hover:border-canada-red rounded-lg p-1 bg-gray-50 h-10 flex items-center justify-center">
                                            <img src={sig} className="max-h-full" />
                                        </div>
                                    ))}
                                    <button onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="w-full text-center text-xs font-bold text-canada-red py-2 hover:underline">+ New Signature</button>
                                </div>

                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Initials</h4>
                                <div className="space-y-2">
                                    {savedInitials.map((sig, i) => (
                                        <div key={i} onClick={() => { addEntry('initials', sig); setShowSignaturesDropdown(false); }} className="cursor-pointer border border-gray-100 hover:border-canada-red rounded-lg p-1 bg-gray-50 h-10 flex items-center justify-center">
                                            <img src={sig} className="max-h-full" />
                                        </div>
                                    ))}
                                    <button onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowSignaturesDropdown(false); }} className="w-full text-center text-xs font-bold text-canada-red py-2 hover:underline">+ New Initials</button>
                                </div>
                            </div>
                        )}
                    </button>

                    <button onClick={() => addEntry('date')} title="Add Date" className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50"><Calendar size={20} /></button>
                    <button onClick={() => addEntry('text', undefined, 'Text')} title="Add Text" className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50"><Type size={20} /></button>
                    <button onClick={() => addEntry('text', undefined, '✓')} title="Add Check" className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50"><CheckIcon size={20} /></button>

                    <div className="flex-1"></div>

                    <div className="flex items-center gap-2">
                        <button onClick={undo} disabled={historyStep === 0} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-30"><Undo2 size={20} /></button>
                        <button onClick={redo} disabled={historyStep === history.length - 1} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-30"><Redo2 size={20} /></button>
                        <div className="flex items-center bg-gray-100 rounded-xl p-1">
                            <button onClick={() => setPreviewZoom(Math.max(0.5, previewZoom - 0.2))} className="p-1 px-2 hover:text-canada-red"><ZoomOut size={16} /></button>
                            <span className="text-xs font-bold w-8 text-center">{Math.round(previewZoom * 100)}%</span>
                            <button onClick={() => setPreviewZoom(Math.min(3.0, previewZoom + 0.2))} className="p-1 px-2 hover:text-canada-red"><ZoomIn size={16} /></button>
                        </div>
                        <button onClick={() => onSign(entries)} className="bg-canada-red text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:bg-canada-darkRed flex items-center gap-2 text-sm">
                            <PenTool size={16} /> {t.btnSign}
                        </button>
                    </div>
                </div>

                {/* Mobile Header Content */}
                <div className="flex md:hidden items-center justify-between w-full">
                    <span className="font-bold text-gray-800 text-sm">Editing PDF</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{Math.round(previewZoom * 100)}%</span>
                        <button onClick={() => onSign(entries)} className="bg-canada-red text-white px-4 py-1.5 rounded-lg font-bold text-xs shadow-md shadow-red-500/20">
                            Done
                        </button>
                    </div>
                </div>
            </div>

            {/* PDF View Area - Flex grow to take space, custom scrollbar */}
            <div
                ref={containerRef}
                className={`flex-grow overflow-auto p-4 md:p-8 flex flex-col items-center gap-6 ${activeTool === 'pan' ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} custom-scrollbar pb-32 md:pb-12`}
                style={{ overflowX: 'auto', overflowY: 'auto' }}
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
                        onPageClick={(x, y) => {
                            if (isMobile) {
                                // In mobile, tapping page usually means deselect
                                setSelectedEntryId(null);
                            } else {
                                setSelectedEntryId(null);
                            }
                        }}
                    />
                ))}
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[80] flex items-center justify-around pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${showBottomSheet ? 'translate-y-full' : 'translate-y-0'}`}>
                <button
                    onClick={() => { vibrate(); setActiveTool('pan'); }}
                    className={`flex flex-col items-center gap-1 p-3 w-full ${activeTool === 'pan' ? 'text-canada-red font-bold' : 'text-gray-400 font-medium'}`}
                >
                    <Hand size={24} strokeWidth={activeTool === 'pan' ? 3 : 2} />
                    <span className="text-[10px]">Pan</span>
                </button>

                <button
                    onClick={() => { vibrate(); setActiveTool('select'); }}
                    className={`flex flex-col items-center gap-1 p-3 w-full ${activeTool === 'select' ? 'text-canada-red font-bold' : 'text-gray-400 font-medium'}`}
                >
                    <MousePointer2 size={24} strokeWidth={activeTool === 'select' ? 3 : 2} />
                    <span className="text-[10px]">Select</span>
                </button>

                <div className="relative -top-6">
                    <button
                        onClick={toggleSignMenu}
                        className="bg-canada-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40 active:scale-95 transition-transform"
                    >
                        <Plus size={32} />
                    </button>
                </div>

                <button
                    onClick={undo}
                    disabled={historyStep === 0}
                    className="flex flex-col items-center gap-1 p-3 w-full text-gray-400 font-medium disabled:opacity-30 active:text-gray-600"
                >
                    <Undo2 size={24} />
                    <span className="text-[10px]">Undo</span>
                </button>

                <button
                    onClick={redo}
                    disabled={historyStep === history.length - 1}
                    className="flex flex-col items-center gap-1 p-3 w-full text-gray-400 font-medium disabled:opacity-30 active:text-gray-600"
                >
                    <Redo2 size={24} />
                    <span className="text-[10px]">Redo</span>
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

            {/* Hidden footer trigger for external submit if needed */}
            <button
                id="footer-sign-trigger"
                onClick={() => onSign(entries)}
                className="hidden"
            />
        </div >
    );
};

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
    onPageClick?: (x: number, y: number) => void;
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
    onPageClick
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                onVisibilityChange(true);
            } else {
                onVisibilityChange(false);
            }
        }, { threshold: 0.05, rootMargin: '200px' }); // Load earlier
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
            className={`relative shadow-lg bg-white ${activeTool === 'select' ? 'cursor-crosshair' : ''} transition-shadow duration-300`}
            style={{
                width: pageSize.width || 600 * zoom,
                height: pageSize.height || 800 * zoom,
                minWidth: pageSize.width || 600 * zoom, // Prevent flex shrinking
                minHeight: pageSize.height || 800 * zoom
            }}
            onClick={(e) => {
                if (activeTool === 'select') {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    onPageClick?.(x, y);
                    onSelectEntry(null);
                }
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Interaction Overlay */}
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
                        onDragStop={(_, d) => {
                            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(5);
                            // Constrain to page bounds
                            const x = Math.max(0, Math.min(d.x, pageSize.width - (entry.width * pageSize.width)));
                            const y = Math.max(0, Math.min(d.y, pageSize.height - (entry.height * pageSize.height)));

                            onEntryUpdate(entry.id, {
                                x: x / pageSize.width,
                                y: y / pageSize.height
                            });
                        }}
                        onResizeStop={(_, __, ref, ___, position) => {
                            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(5);
                            onEntryUpdate(entry.id, {
                                width: ref.offsetWidth / pageSize.width,
                                height: ref.offsetHeight / pageSize.height,
                                x: position.x / pageSize.width,
                                y: position.y / pageSize.height
                            });
                        }}
                        bounds="parent"
                        lockAspectRatio={entry.type === 'signature' || entry.type === 'initials'}
                        className={`group ${selectedEntryId === entry.id ? 'z-30' : 'z-20'}`}
                        onDragStart={() => onSelectEntry(entry.id)}
                        disableDragging={activeTool === 'pan'}
                        resizeHandleComponent={selectedEntryId === entry.id ? {
                            // Enhanced touch targets (invisible larger click area, visible small dot)
                            bottomRight: <div className="w-12 h-12 -mr-6 -mb-6 md:w-6 md:h-6 md:-mr-3 md:-mb-3 bg-transparent flex items-center justify-center"><div className="w-4 h-4 md:w-2.5 md:h-2.5 bg-canada-red rounded-full shadow-md border-2 border-white" /></div>,
                            bottomLeft: <div className="w-12 h-12 -ml-6 -mb-6 md:w-6 md:h-6 md:-ml-3 md:-mb-3 bg-transparent flex items-center justify-center"><div className="w-4 h-4 md:w-2.5 md:h-2.5 bg-canada-red rounded-full shadow-md border-2 border-white" /></div>,
                            topRight: <div className="w-12 h-12 -mr-6 -mt-6 md:w-6 md:h-6 md:-mr-3 md:-mt-3 bg-transparent flex items-center justify-center"><div className="w-4 h-4 md:w-2.5 md:h-2.5 bg-canada-red rounded-full shadow-md border-2 border-white" /></div>,
                            topLeft: <div className="w-12 h-12 -ml-6 -mt-6 md:w-6 md:h-6 md:-ml-3 md:-mt-3 bg-transparent flex items-center justify-center"><div className="w-4 h-4 md:w-2.5 md:h-2.5 bg-canada-red rounded-full shadow-md border-2 border-white" /></div>
                        } : {}}
                    >
                        <div
                            className={`w-full h-full relative cursor-move border-2 ${selectedEntryId === entry.id ? 'border-blue-500 shadow-xl' : 'border-transparent hover:border-blue-400'} p-0.5 flex items-center justify-center transition-all`}
                            style={{ touchAction: 'none' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelectEntry(entry.id);
                            }}
                        >
                            {entry.dataUrl ? (
                                <img src={entry.dataUrl} className="w-full h-full object-contain pointer-events-none select-none" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-800 font-medium overflow-hidden whitespace-nowrap bg-blue-50/50 rounded-sm">
                                    {entry.type === 'date' || entry.type === 'text' ? (
                                        <input
                                            type="text"
                                            value={entry.text}
                                            onChange={(e) => onEntryUpdate(entry.id, { text: e.target.value })}
                                            className="bg-transparent border-none outline-none text-center w-full h-full p-1"
                                            style={{ fontSize: Math.max(12, 16 * zoom) + 'px' }}
                                        />
                                    ) : entry.text}
                                </div>
                            )}

                            {selectedEntryId === entry.id && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); onEntryDelete(entry.id); onSelectEntry(null); }}
                                    className="absolute -top-14 left-1/2 -translate-x-1/2 p-2 bg-red-600 text-white rounded-full shadow-lg z-50 active:scale-95 flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-3 md:py-1.5 md:rounded-lg"
                                >
                                    <Trash2 size={20} className="md:w-4 md:h-4" /> <span className="hidden md:inline ml-1 text-xs font-bold">Delete</span>
                                </button>
                            )}
                        </div>
                    </Rnd>
                ))}
            </div>

            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 z-10">
                    <div className="w-10 h-10 border-4 border-canada-red border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};
