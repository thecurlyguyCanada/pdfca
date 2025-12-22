import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
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
    FileText,
    Layout,
    Maximize,
    Minimize,
    ChevronLeft,
    ChevronRight,
    Settings,
    Download
} from 'lucide-react';
import { SignatureModal } from './SignatureModal';
import { PdfPageThumbnail } from './PdfPageThumbnail';
import { SignatureEntry, formatFileSize } from '../utils/pdfUtils';
import { triggerHaptic } from '../utils/haptics';
import { useSwipe } from '../hooks/useSwipe';

// ===== PAGE RENDERER =====

interface PageRendererProps {
    pageIndex: number;
    pdfJsDoc: any;
    zoom: number;
    displayZoom: number;
    entries: SignatureEntry[];
    onEntryUpdate: (id: string, updates: Partial<SignatureEntry>) => void;
    onEntryDelete: (id: string) => void;
    onHistoryCommit: () => void;
    activeTool: 'pan' | 'select';
    onVisibilityChange: (isVisible: boolean) => void;
    selectedEntryId: string | null;
    onSelectEntry: (id: string | null) => void;
    isMobile: boolean;
    onPageClick?: () => void;
    t: any;
}

const PageRendererBase: React.FC<PageRendererProps> = ({
    pageIndex,
    pdfJsDoc,
    zoom,
    displayZoom,
    entries,
    onEntryUpdate,
    onEntryDelete,
    onHistoryCommit,
    activeTool,
    onVisibilityChange,
    selectedEntryId,
    onSelectEntry,
    isMobile,
    onPageClick,
    t
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [baseSize, setBaseSize] = useState({ width: 612, height: 792 });
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Get actual page dimensions once
    useEffect(() => {
        if (!pdfJsDoc) return;
        const getBaseSize = async () => {
            try {
                const page = await pdfJsDoc.getPage(pageIndex + 1);
                const viewport = page.getViewport({ scale: 1.0 });
                setBaseSize({ width: viewport.width, height: viewport.height });
            } catch (e) {
                console.error("Failed to get page size", e);
            }
        };
        getBaseSize();
    }, [pdfJsDoc, pageIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const visible = entry.isIntersecting;
            setIsVisible(visible);
            onVisibilityChange(visible);
        }, { threshold: 0.05, rootMargin: '200px' });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [onVisibilityChange]);

    // Memoize pageSize to prevent object recreation on every render
    const pageSize = useMemo(() => ({
        width: baseSize.width * displayZoom,
        height: baseSize.height * displayZoom
    }), [baseSize.width, baseSize.height, displayZoom]);

    useEffect(() => {
        if (!isVisible || !pdfJsDoc) return;

        let renderTask: any = null;
        let cancelled = false;

        const renderPage = async () => {
            try {
                const page = await pdfJsDoc.getPage(pageIndex + 1);
                if (cancelled) return;

                const viewport = page.getViewport({ scale: zoom });
                const canvas = canvasRef.current;
                if (!canvas || cancelled) return;

                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const context = canvas.getContext('2d');
                if (!context) return;

                renderTask = page.render({ canvasContext: context, viewport });
                await renderTask.promise;
            } catch (err: any) {
                // Ignore cancellation errors
                if (err?.name !== 'RenderingCancelledException') {
                    console.error("Error rendering page", pageIndex, err);
                }
            }
        };
        renderPage();

        return () => {
            cancelled = true;
            if (renderTask) {
                renderTask.cancel();
            }
        };
    }, [pdfJsDoc, pageIndex, zoom, isVisible]);

    const handleContainerClick = (e: React.MouseEvent) => {
        onPageClick?.();
        if (activeTool === 'select') {
            onSelectEntry(null);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-sm ring-1 ring-black/5"
            style={{
                width: pageSize.width,
                height: pageSize.height,
                minWidth: pageSize.width,
                minHeight: pageSize.height
            }}
            onClick={handleContainerClick}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Entries - only interactive in select mode */}
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
                        if (activeTool !== 'select') return;
                        e.stopPropagation();
                        onSelectEntry(entry.id);
                        onPageClick?.();
                    }}
                    onDragStop={(_, d) => {
                        const x = Math.max(0, Math.min(d.x, pageSize.width - entry.width * pageSize.width));
                        const y = Math.max(0, Math.min(d.y, pageSize.height - entry.height * pageSize.height));
                        onEntryUpdate(entry.id, { x: x / pageSize.width, y: y / pageSize.height });
                        onHistoryCommit();
                    }}
                    onResizeStart={(e) => {
                        if (activeTool !== 'select') return;
                        e.stopPropagation();
                        onSelectEntry(entry.id);
                        onPageClick?.();
                    }}
                    onResizeStop={(_, __, ref, ___, position) => {
                        onEntryUpdate(entry.id, {
                            width: ref.offsetWidth / pageSize.width,
                            height: ref.offsetHeight / pageSize.height,
                            x: position.x / pageSize.width,
                            y: position.y / pageSize.height
                        });
                        onHistoryCommit();
                    }}
                    bounds="parent"
                    lockAspectRatio={entry.type === 'signature' || entry.type === 'initials'}
                    className={`absolute ${selectedEntryId === entry.id ? 'z-30' : 'z-20'} ${activeTool === 'pan' ? 'pointer-events-none' : 'pointer-events-auto'}`}
                    disableDragging={activeTool !== 'select'}
                    dragHandleClassName="entry-drag-handle"
                    enableResizing={activeTool === 'select' && selectedEntryId === entry.id ? {
                        top: true, right: true, bottom: true, left: true,
                        topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
                    } : false}
                    enableUserSelectHack={false}
                    resizeHandleStyles={{
                        topLeft: { width: isMobile ? 48 : 12, height: isMobile ? 48 : 12, top: isMobile ? -24 : -6, left: isMobile ? -24 : -6, background: '#3b82f6', borderRadius: '50%', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 100, cursor: 'nwse-resize', touchAction: 'none' },
                        topRight: { width: isMobile ? 48 : 12, height: isMobile ? 48 : 12, top: isMobile ? -24 : -6, right: isMobile ? -24 : -6, background: '#3b82f6', borderRadius: '50%', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 100, cursor: 'nesw-resize', touchAction: 'none' },
                        bottomLeft: { width: isMobile ? 48 : 12, height: isMobile ? 48 : 12, bottom: isMobile ? -24 : -6, left: isMobile ? -24 : -6, background: '#3b82f6', borderRadius: '50%', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 100, cursor: 'nesw-resize', touchAction: 'none' },
                        bottomRight: { width: isMobile ? 48 : 12, height: isMobile ? 48 : 12, bottom: isMobile ? -24 : -6, right: isMobile ? -24 : -6, background: '#3b82f6', borderRadius: '50%', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 100, cursor: 'nwse-resize', touchAction: 'none' },
                        top: { display: 'none' },
                        right: { display: 'none' },
                        bottom: { display: 'none' },
                        left: { display: 'none' },
                    }}
                >
                    <div
                        className={`entry-drag-handle w-full h-full border-2 ${selectedEntryId === entry.id ? 'border-blue-500 bg-blue-500/5 shadow-md' : 'border-transparent hover:border-blue-300'} flex items-center justify-center cursor-move transition-all duration-150`}
                        onPointerDown={(e) => {
                            if (activeTool !== 'select') return;
                            onSelectEntry(entry.id);
                        }}
                    >
                        {entry.dataUrl ? (
                            <img src={entry.dataUrl} className="w-full h-full object-contain pointer-events-none select-none" alt="" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-blue-50/50 rounded overflow-hidden">
                                {entry.type === 'date' || entry.type === 'text' ? (
                                    <input
                                        type="text"
                                        value={entry.text}
                                        onChange={(e) => onEntryUpdate(entry.id, { text: e.target.value })}
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-transparent border-none outline-none text-center w-full h-full text-gray-800 font-medium p-1"
                                        style={{ fontSize: Math.max(12, 16 * zoom) + 'px' }}
                                    />
                                ) : (
                                    <span className="text-gray-800 font-medium select-none">{entry.text}</span>
                                )}
                            </div>
                        )}
                    </div>

                    {selectedEntryId === entry.id && (
                        <button
                            onPointerDown={(e) => e.stopPropagation()}
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onEntryDelete(entry.id);
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onEntryDelete(entry.id);
                            }}
                            className={`absolute ${isMobile ? '-bottom-16' : '-top-14'} left-1/2 -translate-x-1/2 px-4 py-3 bg-red-600 text-white rounded-xl shadow-lg flex items-center gap-2 text-sm font-bold active:scale-95 transition-all z-[100] min-h-[44px] whitespace-nowrap cursor-pointer`}
                        >
                            <Trash2 size={16} /> {t.btnDeleteEntry}
                        </button>
                    )}
                </Rnd>
            ))}

            {!isVisible && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 gap-3">
                    <div className="w-10 h-10 border-4 border-canada-red border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-gray-400 font-medium">{t.loadingPage}</span>
                </div>
            )}
        </div>
    );
};
const PageRenderer = React.memo(PageRendererBase);

// ===== THUMBNAIL ITEM =====
interface ThumbnailItemProps {
    idx: number;
    activePage: number;
    scrollToPage: (idx: number) => void;
    pdfJsDoc: any;
    t: any;
}
const ThumbnailItemBase: React.FC<ThumbnailItemProps> = ({ idx, activePage, scrollToPage, pdfJsDoc, t }) => (
    <div
        onClick={() => scrollToPage(idx)}
        className={`relative cursor-pointer group rounded-lg transition-shadow duration-200 ${activePage === idx ? 'ring-2 ring-canada-red bg-white shadow-md font-bold text-canada-red' : 'hover:bg-gray-100 border border-transparent hover:border-gray-200'}`}
    >
        <PdfPageThumbnail
            pdfJsDoc={pdfJsDoc}
            pageIndex={idx}
            isSelected={activePage === idx}
            onClick={() => scrollToPage(idx)}
            width={160}
            mode="none"
        />
        <div className="text-center text-[10px] mt-1 font-medium">{t.pageNumber?.replace('{number}', String(idx + 1))}</div>
    </div>
);
const ThumbnailItem = React.memo(ThumbnailItemBase);

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

    // Layout State
    const [isMobile, setIsMobile] = useState(false);
    const [showThumbnails, setShowThumbnails] = useState(true);
    const [showToolsSidebar, setShowToolsSidebar] = useState(true);
    const [activePage, setActivePage] = useState(0);

    // Mobile States
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isPinching, setIsPinching] = useState(false);

    // History
    const [history, setHistory] = useState<SignatureEntry[][]>([[]]);
    const [historyStep, setHistoryStep] = useState(0);

    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    const touchStartDist = useRef<number>(0);
    const startZoom = useRef<number>(1);
    const [debouncedZoom, setDebouncedZoom] = useState(previewZoom);

    // Debounce zoom updates for PDF rendering to prevent glitching/lag
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedZoom(previewZoom);
        }, 300);
        return () => clearTimeout(timer);
    }, [previewZoom]);

    const vibrate = useCallback((ms: number = 10) => {
        if (ms > 40) triggerHaptic('success');
        else if (ms > 15) triggerHaptic('medium');
        else triggerHaptic('light');
    }, []);

    const swipeHandlers = useSwipe({
        onSwipeDown: () => {
            triggerHaptic('medium');
            onClose();
        }
    });

    // Auto-deselect when switching to pan mode
    const handleToolChange = useCallback((tool: 'pan' | 'select') => {
        if (tool === 'pan') {
            setSelectedEntryId(null);
        }
        setActiveTool(tool);
        vibrate(10);
    }, [vibrate]);

    const activePageRef = useRef(0);
    const visibilityTimerRef = useRef<any>(null);

    const reportVisibility = useCallback((idx: number, isVisible: boolean) => {
        setVisiblePages(prev => {
            const next = new Set(prev);
            if (isVisible) next.add(idx);
            else next.delete(idx);
            return next;
        });

        // Update activePage for both mobile and desktop
        if (isVisible && activePageRef.current !== idx) {
            activePageRef.current = idx;

            if (visibilityTimerRef.current) clearTimeout(visibilityTimerRef.current);

            visibilityTimerRef.current = setTimeout(() => {
                if (activePageRef.current === idx) {
                    setActivePage(idx);
                }
            }, 150);
        }
    }, []);

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
            if (mobile) {
                setShowThumbnails(false);
                setShowToolsSidebar(false);
            } else {
                setShowThumbnails(window.innerWidth > 1024);
                setShowToolsSidebar(true);
            }
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initial Zoom Fit
    useEffect(() => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const padding = isMobile ? 32 : 80;
            const availableWidth = containerWidth - padding;
            const newZoom = Math.min(isMobile ? 1.0 : 1.2, Math.max(0.5, availableWidth / 612));
            setPreviewZoom(newZoom);
        }
    }, [isMobile, setPreviewZoom]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                setIsPinching(true);
                touchStartDist.current = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
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
                setPreviewZoom(Math.min(2.5, Math.max(0.4, startZoom.current * scale)));
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

    const scrollToPage = useCallback((pageIndex: number) => {
        const pageElement = document.getElementById(`pdf-page-${pageIndex}`);
        if (pageElement) {
            pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActivePage(pageIndex);
        }
    }, [setActivePage]);

    const addEntry = (type: SignatureEntry['type'], dataUrl?: string, text?: string) => {
        vibrate(20);
        const id = `entry_${Date.now()}`;
        // On desktop, add to currently active page
        const targetPage = isMobile ? (visiblePages.size > 0 ? Math.min(...Array.from(visiblePages)) : 0) : activePage;

        // Different sizes for different entry types
        const getSizeForType = () => {
            switch (type) {
                case 'signature': return { width: 0.28, height: 0.1 };
                case 'initials': return { width: 0.12, height: 0.08 };
                case 'date': return { width: 0.2, height: 0.04 };
                case 'text': return { width: 0.15, height: 0.04 };
                default: return { width: 0.2, height: 0.06 };
            }
        };
        const size = getSizeForType();

        const newEntry: SignatureEntry = {
            id,
            pageIndex: targetPage,
            x: 0.35,
            y: 0.35,
            width: size.width,
            height: size.height,
            type,
            dataUrl,
            text: text || (type === 'date' ? new Date().toLocaleDateString() : '')
        };
        addToHistory([...entries, newEntry]);
        setSelectedEntryId(id);
        setShowBottomSheet(false);
        setShowSignaturesDropdown(false);
    };

    const updateEntry = useCallback((id: string, updates: Partial<SignatureEntry>) => {
        setEntries(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
    }, []);

    // Use ref to avoid stale closure in commitToHistory
    const historyStepRef = useRef(historyStep);
    useEffect(() => { historyStepRef.current = historyStep; }, [historyStep]);

    // Helper to commit current state to history (call on mouseUp/resizeStop)
    const commitToHistory = useCallback(() => {
        setEntries(currentEntries => {
            setHistory(prevHistory => {
                const step = historyStepRef.current;
                const newHistory = prevHistory.slice(0, step + 1);
                const updatedHistory = [...newHistory, currentEntries].slice(-50);
                setHistoryStep(updatedHistory.length - 1);
                return updatedHistory;
            });
            return currentEntries;
        });
    }, []);

    const removeEntry = useCallback((id: string) => {
        vibrate(10);
        setEntries(prev => {
            const filtered = prev.filter(e => e.id !== id);
            // Commit immediately with the new state
            setHistory(prevHistory => {
                const step = historyStepRef.current;
                const newHistory = prevHistory.slice(0, step + 1);
                const updatedHistory = [...newHistory, filtered].slice(-50);
                setHistoryStep(updatedHistory.length - 1);
                return updatedHistory;
            });
            return filtered;
        });
        setSelectedEntryId(null);
    }, [vibrate]);

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
            if (showSignaturesDropdown) setShowSignaturesDropdown(false);
        };
        if (showSignaturesDropdown) {
            setTimeout(() => document.addEventListener('click', handleClickOutside), 50);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showSignaturesDropdown]);

    // === RENDER HELPERS ===

    const renderThumbnailSidebar = () => (
        <div className={`hidden md:flex flex-col flex-shrink-0 border-r border-gray-200 bg-gray-50/50 transition-all duration-300 ${showThumbnails ? 'w-48' : 'w-0 overflow-hidden'}`}>
            <div className="p-3 font-semibold text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100 flex justify-between items-center">
                <span>{t.pages} ({pageCount})</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar" ref={thumbnailContainerRef}>
                {Array.from({ length: pageCount }).map((_, idx) => (
                    <ThumbnailItem
                        key={idx}
                        idx={idx}
                        activePage={activePage}
                        scrollToPage={scrollToPage}
                        pdfJsDoc={pdfJsDoc}
                        t={t}
                    />
                ))}
            </div>
        </div>
    );

    const renderToolsSidebar = () => (
        <div className={`hidden md:flex flex-col flex-shrink-0 border-l border-gray-200 bg-white transition-all duration-300 ${showToolsSidebar ? 'w-72' : 'w-0 overflow-hidden'}`}>
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">{t.signTools}</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* Signature Section */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                        <PenTool size={12} /> {t.signatures}
                    </h4>
                    <div className="space-y-2">
                        <button
                            onClick={() => { setModalType('signature'); setIsModalOpen(true); }}
                            className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-gray-300 text-canada-red hover:bg-red-50 hover:border-red-200 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Plus size={16} />
                            </div>
                            <span className="font-semibold text-sm">{t.createNewSignature}</span>
                        </button>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {savedSignatures.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('signature', sig)} className="h-20 border border-gray-100 rounded-xl p-2 bg-gray-50 hover:border-canada-red hover:bg-white hover:shadow-sm transition-all flex items-center justify-center">
                                    <img src={sig} className="max-w-full max-h-full object-contain" alt="Signature" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Initials Section */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                        <Type size={12} /> {t.initials}
                    </h4>
                    <div className="space-y-2">
                        <button
                            onClick={() => { setModalType('initials'); setIsModalOpen(true); }}
                            className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-gray-300 text-canada-red hover:bg-red-50 hover:border-red-200 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Plus size={16} />
                            </div>
                            <span className="font-semibold text-sm">{t.createNewInitials}</span>
                        </button>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {savedInitials.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('initials', sig)} className="h-20 border border-gray-100 rounded-xl p-2 bg-gray-50 hover:border-canada-red hover:bg-white hover:shadow-sm transition-all flex items-center justify-center">
                                    <img src={sig} className="max-w-full max-h-full object-contain" alt="Initial" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Standard Tools */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">{t.annotation}</h4>
                    <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => addEntry('date')} className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm text-gray-600 transition-all">
                            <Calendar size={20} className="text-blue-500" />
                            <span className="text-[10px] font-bold">{t.date}</span>
                        </button>
                        <button onClick={() => addEntry('text', undefined, 'Text')} className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm text-gray-600 transition-all">
                            <Type size={20} className="text-purple-500" />
                            <span className="text-[10px] font-bold">{t.text}</span>
                        </button>
                        <button onClick={() => addEntry('text', undefined, '✓')} className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm text-gray-600 transition-all">
                            <CheckIcon size={20} className="text-green-500" />
                            <span className="text-[10px] font-bold">{t.check}</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
                <button onClick={() => onSign(entries)} className="w-full bg-canada-red text-white py-3 rounded-xl font-bold shadow-lg shadow-red-500/20 hover:bg-canada-darkRed hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                    {t.btnSign}
                </button>
            </div>
        </div>
    );


    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen w-screen bg-gray-100 overflow-hidden">

            {/* ===== DESKTOP HEADER (Top Bar) ===== */}
            <div className={`hidden md:flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shadow-sm z-20 shrink-0 h-14`}>
                <div className="flex items-center gap-4">
                    {/* Toggle Sidebar Buttons */}
                    <div className="flex items-center gap-1 text-gray-400">
                        <button onClick={() => setShowThumbnails(!showThumbnails)} className={`p-1.5 rounded hover:bg-gray-100 transition-colors ${showThumbnails ? 'text-canada-red' : ''}`} title="Toggle Thumbnails">
                            <Layout size={18} />
                        </button>
                    </div>

                    <div className="h-6 w-px bg-gray-200" />

                    {/* File Info */}
                    <div className="flex items-center gap-2">
                        <FileText size={18} className="text-canada-red" />
                        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">{file?.name}</span>
                    </div>

                    <div className="h-6 w-px bg-gray-200" />

                    {/* Editor Modes */}
                    <div className="flex bg-gray-100/50 rounded-lg p-0.5">
                        <button
                            onClick={() => setActiveTool('pan')}
                            className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold transition-all ${activeTool === 'pan' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Hand size={14} /> {t.pan}
                        </button>
                        <button
                            onClick={() => setActiveTool('select')}
                            className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold transition-all ${activeTool === 'select' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <MousePointer2 size={14} /> {t.select}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Undo Redo */}
                    <div className="flex items-center gap-1">
                        <button onClick={undo} disabled={historyStep === 0} className="p-1.5 text-gray-500 hover:text-gray-900 rounded disabled:opacity-30"><Undo2 size={18} /></button>
                        <button onClick={redo} disabled={historyStep === history.length - 1} className="p-1.5 text-gray-500 hover:text-gray-900 rounded disabled:opacity-30"><Redo2 size={18} /></button>
                    </div>

                    <div className="h-6 w-px bg-gray-200" />

                    {/* Zoom */}
                    <div className="flex items-center gap-2">
                        <button onClick={() => setPreviewZoom(Math.max(0.25, previewZoom - 0.25))} className="p-1 text-gray-500 hover:bg-gray-100 rounded"><ZoomOut size={16} /></button>
                        <span className="text-xs font-bold w-10 text-center">{Math.round(previewZoom * 100)}%</span>
                        <button onClick={() => setPreviewZoom(Math.min(3, previewZoom + 0.25))} className="p-1 text-gray-500 hover:bg-gray-100 rounded"><ZoomIn size={16} /></button>
                    </div>

                    <button
                        onClick={() => setShowToolsSidebar(!showToolsSidebar)}
                        className={`ml-2 p-1.5 rounded transition-all ${showToolsSidebar ? 'bg-gray-100 text-canada-red' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        <Settings size={18} />
                    </button>

                    <button onClick={onClose} className="p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors ml-2">
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* ===== DESKTOP WORKSPACE GRID ===== */}
            <div className="flex-1 flex overflow-hidden relative">

                {/* 1. Left Sidebar (Thumbnails) */}
                {renderThumbnailSidebar()}

                {/* 2. Main Canvas Area */}
                <div
                    ref={scrollContainerRef}
                    className="flex-1 bg-gray-200/50 overflow-auto flex flex-col items-center relative mobile-canvas-container"
                    style={{
                        cursor: activeTool === 'pan' ? 'grab' : 'default',
                        scrollBehavior: isPinching ? 'auto' : 'smooth',
                        WebkitOverflowScrolling: 'touch',
                        touchAction: activeTool === 'pan' ? 'pan-x pan-y' : 'auto'
                    }}
                >
                    <div className="py-8 px-8 min-h-full flex flex-col items-center gap-6 mobile-content-inner">
                        {Array.from({ length: pageCount }).map((_, idx) => (
                            <div key={idx} id={`pdf-page-${idx}`} className="relative group/page">
                                {/* Page Number Tag (Desktop) */}
                                <div className="absolute top-2 -left-10 text-xs text-gray-400 font-medium hidden md:block">
                                    {idx + 1}
                                </div>
                                <PageRenderer
                                    pageIndex={idx}
                                    pdfJsDoc={pdfJsDoc}
                                    zoom={debouncedZoom}
                                    displayZoom={previewZoom}
                                    entries={entries.filter(e => e.pageIndex === idx)}
                                    onEntryUpdate={updateEntry}
                                    onEntryDelete={removeEntry}
                                    onHistoryCommit={commitToHistory}
                                    activeTool={activeTool}
                                    onVisibilityChange={(isVisible: boolean) => reportVisibility(idx, isVisible)}
                                    selectedEntryId={selectedEntryId}
                                    onSelectEntry={setSelectedEntryId}
                                    isMobile={isMobile}
                                    onPageClick={() => setActivePage(idx)}
                                    t={t}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Right Sidebar (Tools) */}
                {renderToolsSidebar()}

            </div>

            {/* ========================================================================= */}
            {/* ======================= MOBILE LAYOUT OVERRIDES ========================= */}
            {/* ========================================================================= */}



            {/* Mobile Header */}
            <div
                className="flex md:hidden items-center justify-between w-full px-3 py-2.5 bg-white/95 backdrop-blur-sm border-b border-gray-100 shrink-0 fixed top-0 left-0 right-0 z-50 touch-none"
                style={{ paddingTop: 'max(10px, env(safe-area-inset-top))' }}
                {...swipeHandlers}
            >
                <button
                    onClick={() => { triggerHaptic('medium'); onClose(); }}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 active:bg-gray-100"
                >
                    <X size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => { triggerHaptic('light'); scrollToPage(Math.max(0, activePage - 1)); }}
                        disabled={activePage === 0}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 active:bg-gray-100 disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex flex-col items-center min-w-[60px]">
                        <span className="font-bold text-gray-800 text-sm">{t.pageNumber?.replace('{number}', String(activePage + 1))}</span>
                        <span className="text-[10px] text-gray-400">{t.of} {pageCount}</span>
                    </div>
                    <button
                        onClick={() => { triggerHaptic('light'); scrollToPage(Math.min(pageCount - 1, activePage + 1)); }}
                        disabled={activePage === pageCount - 1}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 active:bg-gray-100 disabled:opacity-30"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                <button
                    onClick={() => { triggerHaptic('success'); onSign(entries); }}
                    className="text-canada-red font-bold text-sm px-4 py-2 rounded-xl active:bg-red-50"
                >
                    {t.done}
                </button>
            </div>

            {/* Mobile Scroll Padding Overrides */}
            <style>{`
                @media (max-width: 768px) {
                    .mobile-content-inner {
                        padding-top: 70px !important;
                        padding-bottom: 140px !important;
                    }
                }
            `}</style>

            <div
                className={`md:hidden fixed left-3 right-3 bg-white rounded-2xl shadow-xl border border-gray-100 z-[80] flex items-center justify-around py-3 transition-all duration-300 ${showBottomSheet ? 'translate-y-[150%]' : 'translate-y-0'}`}
                style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
                <button onClick={() => handleToolChange('pan')} className={`flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-colors ${activeTool === 'pan' ? 'text-canada-red bg-red-50' : 'text-gray-400 active:bg-gray-100'}`}>
                    <Hand size={22} strokeWidth={activeTool === 'pan' ? 2.5 : 2} />
                    <span className="text-[10px] font-bold">{t.pan}</span>
                </button>
                <button onClick={() => handleToolChange('select')} className={`flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-colors ${activeTool === 'select' ? 'text-canada-red bg-red-50' : 'text-gray-400 active:bg-gray-100'}`}>
                    <MousePointer2 size={22} strokeWidth={activeTool === 'select' ? 2.5 : 2} />
                    <span className="text-[10px] font-bold">{t.edit}</span>
                </button>
                <div className="relative -top-6">
                    <button onClick={toggleSignMenu} className="bg-canada-red text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40 active:scale-95 border-4 border-white">
                        <Plus size={30} />
                    </button>
                </div>
                <button onClick={undo} disabled={historyStep === 0} className="flex flex-col items-center gap-1 px-5 py-2 rounded-xl text-gray-400 disabled:opacity-30 active:bg-gray-100">
                    <Undo2 size={22} />
                    <span className="text-[10px] font-bold">{t.undo}</span>
                </button>
                <button onClick={redo} disabled={historyStep === history.length - 1} className="flex flex-col items-center gap-1 px-5 py-2 rounded-xl text-gray-400 disabled:opacity-30 active:bg-gray-100">
                    <Redo2 size={22} />
                    <span className="text-[10px] font-bold">{t.redo}</span>
                </button>
            </div>

            {/* Mobile Bottom Sheet */}
            {showBottomSheet && (
                <div className="fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm animate-fade-in" onClick={() => setShowBottomSheet(false)} />
            )}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-[100] transition-transform duration-300 ${showBottomSheet ? 'translate-y-0' : 'translate-y-full'} max-h-[75vh] overflow-y-auto`}>
                <div className="sticky top-0 bg-white pt-3 pb-2 border-b border-gray-100 z-10">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
                </div>
                <div className="p-5 space-y-6 pb-[max(48px,env(safe-area-inset-bottom)+24px)]">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">{t.signatures}</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => { setModalType('signature'); setIsModalOpen(true); setShowBottomSheet(false); }} className="flex flex-col items-center justify-center gap-2 p-4 bg-red-100 text-canada-darkRed rounded-2xl font-bold border border-red-200 active:scale-95 h-32 shadow-sm">
                                <Plus size={28} /> {t.newSignature}
                            </button>
                            {savedSignatures.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('signature', sig)} className="border border-gray-100 rounded-2xl p-3 bg-white active:border-canada-red active:scale-95 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                    <img src={sig} className="max-w-full max-h-full object-contain" alt="Saved signature" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">{t.initials}</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => { setModalType('initials'); setIsModalOpen(true); setShowBottomSheet(false); }} className="flex flex-col items-center justify-center gap-2 p-4 bg-red-100 text-canada-darkRed rounded-2xl font-bold border border-red-200 active:scale-95 h-32 shadow-sm">
                                <Plus size={28} /> {t.newInitials}
                            </button>
                            {savedInitials.map((sig, i) => (
                                <button key={i} onClick={() => addEntry('initials', sig)} className="border border-gray-100 rounded-2xl p-3 bg-white active:border-canada-red active:scale-95 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                    <img src={sig} className="max-w-full max-h-full object-contain" alt="Saved initials" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">{t.quickAdd}</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => addEntry('date')} className="flex flex-col items-center justify-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-2xl font-bold border border-blue-100 active:scale-95 h-20 shadow-sm">
                                <Calendar size={22} /> {t.todaysDate}
                            </button>
                            <button onClick={() => addEntry('text', undefined, 'Your text here')} className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 text-gray-600 rounded-2xl font-bold border border-gray-200 active:scale-95 h-20 shadow-sm">
                                <Type size={22} /> {t.textField}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <SignatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSignatureSave}
                t={t}
                title={modalType === 'signature' ? t.addSignature : t.addInitials}
                defaultTab={modalType === 'initials' ? 'type' : 'draw'}
            />

            <button id="footer-sign-trigger" onClick={() => onSign(entries)} className="hidden" />
        </div>
    );
};

// ===== PAGE RENDERER =====


