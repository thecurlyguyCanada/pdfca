import React, { useState, useRef, useEffect } from 'react';
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
    PenTool
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

    // History for Undo/Redo
    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set());
    const containerRef = useRef<HTMLDivElement>(null);

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
        if (historyStep > 0) {
            const step = historyStep - 1;
            setHistoryStep(step);
            setEntries(history[step]);
        }
    };

    const redo = () => {
        if (historyStep < history.length - 1) {
            const step = historyStep + 1;
            setHistoryStep(step);
            setEntries(history[step]);
        }
    };

    useEffect(() => {
        // Auto-fit zoom on mobile
        if (typeof window !== 'undefined' && window.innerWidth < 768 && previewZoom === 1.0) {
            setPreviewZoom(0.65);
        }
    }, []);

    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string, x?: number, y?: number, page?: number) => {
        const id = `entry_${Date.now()}`;

        // Find the "current" page (the first visible one)
        const currentPage = page !== undefined ? page : (visiblePages.size > 0 ? Math.min(...Array.from(visiblePages)) : 0);

        const newEntry: SignatureEntry = {
            id,
            pageIndex: currentPage,
            x: x !== undefined ? x : 0.1,
            y: y !== undefined ? y : 0.1,
            width: type === 'signature' || type === 'initials' ? 0.2 : 0.15,
            height: type === 'signature' || type === 'initials' ? 0.1 : 0.05,
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
        const newEntries = entries.filter(e => e.id !== id);
        addToHistory(newEntries);
    };

    const handleSignatureSave = (dataUrl: string) => {
        if (modalType === 'signature') {
            setSavedSignatures([...savedSignatures, dataUrl]);
            addEntry('signature', dataUrl);
        } else {
            setSavedInitials([...savedInitials, dataUrl]);
            addEntry('initials', dataUrl);
        }
    };

    return (
        <div className="flex flex-col flex-1 bg-gray-50 w-full relative overflow-hidden" style={{ touchAction: 'pan-y' }}>
            {/* Toolbar - More robust for both mobile and desktop */}
            <div className="sticky top-0 z-[60] bg-white/90 backdrop-blur-md border-b border-gray-200 p-2 md:p-3 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 overflow-visible">
                {/* Tools Group */}
                <div className="flex items-center gap-1.5 md:gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0 px-1">
                    {/* Tool Selector */}
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

                    <div className="w-px h-6 md:h-8 bg-gray-200 mx-0.5 shrink-0"></div>

                    {/* Add Signature/Initials Dropdown */}
                    <div className="relative shrink-0">
                        <button
                            onClick={() => setShowSignaturesDropdown(!showSignaturesDropdown)}
                            className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-xs md:text-sm text-gray-700 shadow-sm"
                        >
                            <PenTool size={20} className="text-canada-red" />
                            <span className="whitespace-nowrap">Sign</span>
                            <ChevronDown size={12} />
                        </button>

                        {showSignaturesDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[70] animate-scale-in">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Signatures</h4>
                                        <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                                            {savedSignatures.map((sig, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => { addEntry('signature', sig); setShowSignaturesDropdown(false); }}
                                                    className="w-full h-12 border border-gray-100 rounded-lg hover:border-canada-red p-1 bg-gray-50 flex items-center justify-center transition-all overflow-hidden"
                                                >
                                                    <img src={sig} alt="Signature" className="max-w-full max-h-full object-contain" />
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowSignaturesDropdown(false); }}
                                                className="w-full flex items-center gap-2 p-3 bg-red-50 text-canada-red rounded-xl font-bold hover:bg-canada-red hover:text-white transition-all text-sm"
                                            >
                                                <Plus size={18} /> {t.newSignature}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-50">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Initials</h4>
                                        <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                                            {savedInitials.map((sig, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => { addEntry('initials', sig); setShowSignaturesDropdown(false); }}
                                                    className="w-full h-12 border border-gray-100 rounded-lg hover:border-canada-red p-1 bg-gray-50 flex items-center justify-center transition-all overflow-hidden"
                                                >
                                                    <img src={sig} alt="Initials" className="max-w-full max-h-full object-contain" />
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowSignaturesDropdown(false); }}
                                                className="w-full flex items-center gap-2 p-3 bg-red-50 text-canada-red rounded-xl font-bold hover:bg-canada-red hover:text-white transition-all text-sm"
                                            >
                                                <Plus size={18} /> {t.newInitials}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Elements */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        <button
                            onClick={() => addEntry('date')}
                            className="p-2 md:px-3 md:py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-xs text-gray-700 shadow-sm flex items-center gap-1.5"
                            title="Add Date"
                        >
                            <Calendar size={20} className="text-blue-600" />
                            <span className="hidden sm:inline">Date</span>
                        </button>

                        <button
                            onClick={() => addEntry('text', undefined, 'Text')}
                            className="p-2 md:px-3 md:py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-xs text-gray-700 shadow-sm flex items-center gap-1.5"
                            title="Add Text"
                        >
                            <Type size={20} className="text-green-600" />
                            <span className="hidden sm:inline">Text</span>
                        </button>

                        <button
                            onClick={() => addEntry('text', undefined, '✓')}
                            className="p-2 md:px-3 md:py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-xs text-gray-700 shadow-sm flex items-center gap-1.5"
                            title="Add Checkmark"
                        >
                            <CheckIcon size={20} className="text-purple-600" />
                            <span className="hidden sm:inline">Check</span>
                        </button>
                    </div>
                </div>

                {/* Controls Group */}
                <div className="flex items-center justify-between md:justify-end gap-2 md:gap-4 w-full md:w-auto mt-1 md:mt-0">
                    {/* Zoom & History Combined on mobile */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 invisible md:visible w-0 md:w-auto overflow-hidden transition-all duration-300">
                            <button
                                onClick={undo}
                                disabled={historyStep === 0}
                                className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
                                title="Undo"
                            >
                                <Undo2 size={20} />
                            </button>
                            <button
                                onClick={redo}
                                disabled={historyStep === history.length - 1}
                                className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
                                title="Redo"
                            >
                                <Redo2 size={20} />
                            </button>
                        </div>

                        <div className="flex items-center bg-gray-100 rounded-xl p-1 shrink-0">
                            <button
                                onClick={() => setPreviewZoom(Math.max(0.5, previewZoom - 0.2))}
                                className="p-1.5 text-gray-600 hover:text-canada-red transition-colors"
                            >
                                <ZoomOut size={16} />
                            </button>
                            <span className="text-[10px] md:text-xs font-bold w-10 md:w-12 text-center text-gray-700">{Math.round(previewZoom * 100)}%</span>
                            <button
                                onClick={() => setPreviewZoom(Math.min(3.0, previewZoom + 0.2))}
                                className="p-1.5 text-gray-600 hover:text-canada-red transition-colors"
                            >
                                <ZoomIn size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Hidden Sign Button (triggered by ToolInterface footer) */}
                    <button
                        id="footer-sign-trigger"
                        onClick={() => onSign(entries)}
                        className="hidden"
                    />

                    {/* Visible Sign Button (only on desktop toolbar for quick access) */}
                    <button
                        onClick={() => onSign(entries)}
                        className="hidden md:flex bg-canada-red text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:bg-canada-darkRed transition-all active:scale-95 text-sm whitespace-nowrap items-center gap-2"
                    >
                        <PenTool size={16} />
                        {t.btnSign}
                    </button>
                </div>
            </div>

            {/* PDF View Area */}
            <div
                ref={containerRef}
                className={`flex-grow overflow-auto p-4 md:p-8 lg:p-12 flex flex-col items-center gap-8 ${activeTool === 'pan' ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} custom-scrollbar`}
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
                            // If we have a pending tool, add it. 
                            // For now, let's just make it easier to move existing selection?
                            // Actually, let's just support deselection on page click.
                            setSelectedEntryId(null);
                        }}
                    />
                ))}
                {/* Large space at bottom to ensure no overlap by floating UI */}
                <div className="h-64 md:h-32 shrink-0" />
            </div>

            <SignatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSignatureSave}
                t={t}
                title={modalType === 'signature' ? t.addSignature : t.addInitials}
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
        }, { threshold: 0.1 });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [onVisibilityChange]);

    useEffect(() => {
        if (!isVisible || !pdfJsDoc) return;

        const renderPage = async () => {
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
        };
        renderPage();
    }, [pdfJsDoc, pageIndex, zoom, isVisible]);

    return (
        <div
            ref={containerRef}
            className={`relative shadow-2xl bg-white border border-gray-200 ${activeTool === 'select' ? 'cursor-crosshair' : ''}`}
            style={{
                width: pageSize.width || 600 * zoom,
                height: pageSize.height || 800 * zoom,
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
                            onEntryUpdate(entry.id, {
                                x: d.x / pageSize.width,
                                y: d.y / pageSize.height
                            });
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
                        className={`group ${selectedEntryId === entry.id ? 'z-30' : 'z-20'}`}
                        onDragStart={() => onSelectEntry(entry.id)}
                        disableDragging={activeTool === 'pan'}
                        resizeHandleComponent={selectedEntryId === entry.id ? {
                            bottomRight: <div className="w-8 h-8 -mr-4 -mb-4 md:w-5 md:h-5 md:-mr-2.5 md:-mb-2.5 bg-white border-2 border-canada-red rounded-full shadow-lg transition-transform active:scale-125 flex items-center justify-center"><div className="w-2 h-2 bg-canada-red rounded-full" /></div>,
                            bottomLeft: <div className="w-8 h-8 -ml-4 -mb-4 md:w-5 md:h-5 md:-ml-2.5 md:-mb-2.5 bg-white border-2 border-canada-red rounded-full shadow-lg transition-transform active:scale-125 flex items-center justify-center"><div className="w-2 h-2 bg-canada-red rounded-full" /></div>,
                            topRight: <div className="w-8 h-8 -mr-4 -mt-4 md:w-5 md:h-5 md:-mr-2.5 md:-mt-2.5 bg-white border-2 border-canada-red rounded-full shadow-lg transition-transform active:scale-125 flex items-center justify-center"><div className="w-2 h-2 bg-canada-red rounded-full" /></div>,
                            topLeft: <div className="w-8 h-8 -ml-4 -mt-4 md:w-5 md:h-5 md:-ml-2.5 md:-mt-2.5 bg-white border-2 border-canada-red rounded-full shadow-lg transition-transform active:scale-125 flex items-center justify-center"><div className="w-2 h-2 bg-canada-red rounded-full" /></div>
                        } : {}}
                    >
                        <div
                            className={`w-full h-full relative cursor-move border-2 ${selectedEntryId === entry.id ? 'border-blue-500 shadow-xl scale-[1.02]' : 'border-transparent hover:border-blue-400'} p-1 flex items-center justify-center transition-all`}
                            style={{ touchAction: 'none' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelectEntry(entry.id);
                            }}
                        >
                            {entry.dataUrl ? (
                                <img src={entry.dataUrl} className="max-w-full max-h-full object-contain pointer-events-none" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-800 font-medium overflow-hidden whitespace-nowrap bg-blue-50/50">
                                    {entry.type === 'date' || entry.type === 'text' ? (
                                        <input
                                            type="text"
                                            value={entry.text}
                                            onChange={(e) => onEntryUpdate(entry.id, { text: e.target.value })}
                                            className="bg-transparent border-none outline-none text-center w-full"
                                            style={{ fontSize: Math.max(10, 16 * zoom) + 'px' }}
                                        />
                                    ) : entry.text}
                                </div>
                            )}

                            {selectedEntryId === entry.id && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); onEntryDelete(entry.id); onSelectEntry(null); }}
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 p-2.5 bg-red-600 text-white border border-red-700 rounded-xl shadow-2xl transition-all z-20 active:scale-90 flex items-center gap-2 font-bold text-xs"
                                    title="Delete"
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            )}
                        </div>
                    </Rnd>
                ))}
            </div>

            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="w-8 h-8 border-2 border-canada-red border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};
