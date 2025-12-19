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

    // History for Undo/Redo
    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

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

    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string) => {
        const id = `entry_${Date.now()}`;
        // Defaults: center of the current visible page or just page 0 for now
        // In a real app we'd find the visible page
        const newEntry: SignatureEntry = {
            id,
            pageIndex: 0,
            x: 0.1,
            y: 0.1,
            width: type === 'signature' || type === 'initials' ? 0.2 : 0.15,
            height: type === 'signature' || type === 'initials' ? 0.1 : 0.05,
            type,
            dataUrl,
            text: text || (type === 'date' ? new Date().toLocaleDateString() : '')
        };
        addToHistory([...entries, newEntry]);
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
        <div className="flex flex-col h-full bg-gray-100 flex-grow w-full relative">
            {/* Toolbar */}
            <div className="sticky top-0 z-50 bg-white border-b border-gray-200 p-2 md:p-3 shadow-md flex flex-wrap items-center justify-between gap-2 md:gap-4 overflow-x-auto">
                <div className="flex items-center gap-1 md:gap-2">
                    {/* Tool Selector */}
                    <div className="flex bg-gray-100 p-1 rounded-xl">
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

                    {/* Add Elements */}
                    <div className="relative">
                        <button
                            onClick={() => setShowSignaturesDropdown(!showSignaturesDropdown)}
                            className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-sm text-gray-700"
                        >
                            <PenTool size={18} className="text-canada-red" />
                            <span className="hidden sm:inline">Signatures</span>
                            <ChevronDown size={14} />
                        </button>

                        {showSignaturesDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] animate-scale-in">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Signatures</h4>
                                        <div className="space-y-2">
                                            {savedSignatures.map((sig, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => { addEntry('signature', sig); setShowSignaturesDropdown(false); }}
                                                    className="w-full h-12 border border-gray-100 rounded-lg hover:border-canada-red p-1 bg-gray-50 flex items-center justify-center transition-all"
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
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Initials</h4>
                                        <div className="space-y-2">
                                            {savedInitials.map((sig, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => { addEntry('initials', sig); setShowSignaturesDropdown(false); }}
                                                    className="w-full h-12 border border-gray-100 rounded-lg hover:border-canada-red p-1 bg-gray-50 flex items-center justify-center transition-all"
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

                    <button
                        onClick={() => addEntry('date')}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-sm text-gray-700"
                        title="Add Date"
                    >
                        <Calendar size={18} className="text-blue-600" />
                        <span className="hidden sm:inline">Date</span>
                    </button>

                    <button
                        onClick={() => addEntry('text', undefined, 'Text')}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-sm text-gray-700"
                        title="Add Text"
                    >
                        <Type size={18} className="text-green-600" />
                        <span className="hidden sm:inline">Text</span>
                    </button>

                    <button
                        onClick={() => addEntry('text', undefined, '✓')}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-canada-red transition-all font-bold text-sm text-gray-700"
                        title="Add Checkmark"
                    >
                        <CheckIcon size={18} className="text-purple-600" />
                        <span className="hidden sm:inline">Check</span>
                    </button>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                    {/* History */}
                    <div className="flex items-center gap-1 mr-2 invisible sm:visible">
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

                    {/* Zoom */}
                    <div className="flex items-center bg-gray-100 rounded-xl p-1">
                        <button
                            onClick={() => setPreviewZoom(Math.max(0.5, previewZoom - 0.2))}
                            className="p-2 text-gray-600 hover:text-gray-900"
                        >
                            <ZoomOut size={16} />
                        </button>
                        <span className="text-xs font-bold w-12 text-center text-gray-700 hidden xs:block">{Math.round(previewZoom * 100)}%</span>
                        <button
                            onClick={() => setPreviewZoom(Math.min(3.0, previewZoom + 0.2))}
                            className="p-2 text-gray-600 hover:text-gray-900"
                        >
                            <ZoomIn size={16} />
                        </button>
                    </div>

                    <button
                        onClick={() => onSign(entries)}
                        className="bg-canada-red text-white px-4 md:px-6 py-2 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:bg-canada-darkRed transition-all active:scale-95 text-sm"
                    >
                        {t.btnSign}
                    </button>
                </div>
            </div>

            {/* PDF View Area */}
            <div
                ref={containerRef}
                className={`flex-grow overflow-auto p-4 md:p-12 flex flex-col items-center gap-8 ${activeTool === 'pan' ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
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
                    />
                ))}
            </div>

            <SignatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSignatureSave}
                t={t}
                title={modalType === 'signature' ? t.addSignature : t.addInitials}
            />
        </div>
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
}

const PageRenderer: React.FC<PageRendererProps> = ({
    pageIndex,
    pdfJsDoc,
    zoom,
    entries,
    onEntryUpdate,
    onEntryDelete,
    activeTool
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

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
            className="relative shadow-2xl bg-white border border-gray-200"
            style={{
                width: pageSize.width || 600 * zoom,
                height: pageSize.height || 800 * zoom,
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
                        className="group"
                    >
                        <div className="w-full h-full relative cursor-move border-2 border-transparent hover:border-blue-400 p-1 flex items-center justify-center">
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

                            <button
                                onClick={() => onEntryDelete(entry.id)}
                                className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all shadow-md z-10"
                            >
                                <Trash2 size={12} />
                            </button>
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
