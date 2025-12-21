import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rnd } from 'react-rnd';
import { X, ChevronLeft, ChevronRight, Check, Crop, Layers, FileText } from 'lucide-react';
import { formatFileSize } from '../utils/pdfUtils';
import { triggerHaptic } from '../utils/haptics';

interface CropPdfToolProps {
    file: File | null;
    onClose: () => void;
    pdfJsDoc: any;
    pageCount: number;
    t: any;
    onCrop: (margins: { top: number, bottom: number, left: number, right: number }, pageIndices?: number[]) => void;
}

export const CropPdfTool: React.FC<CropPdfToolProps> = ({
    file,
    onClose,
    pdfJsDoc,
    pageCount,
    t,
    onCrop
}) => {
    const [activePage, setActivePage] = useState(0);
    const [applyToAll, setApplyToAll] = useState(true);
    const [cropBox, setCropBox] = useState({ x: 10, y: 10, width: 80, height: 80 }); // Percentages
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // Page Rendering State
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initial load and resize handler
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setContainerSize({ width: clientWidth, height: clientHeight });
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // Render Page
    useEffect(() => {
        if (!pdfJsDoc || !canvasRef.current || containerSize.width === 0) return;

        const renderPage = async () => {
            try {
                const page = await pdfJsDoc.getPage(activePage + 1);
                const viewport = page.getViewport({ scale: 1 });

                // Calculate scale to fit container while maintaining aspect ratio
                const scaleX = (containerSize.width - 48) / viewport.width; // 24px padding on each side
                const scaleY = (containerSize.height - 48) / viewport.height;
                const scale = Math.min(scaleX, scaleY, 1.5); // Max zoom 1.5x

                const scaledViewport = page.getViewport({ scale });

                const canvas = canvasRef.current;
                if (canvas) {
                    canvas.width = scaledViewport.width;
                    canvas.height = scaledViewport.height;
                    const context = canvas.getContext('2d');
                    if (context) {
                        await page.render({ canvasContext: context, viewport: scaledViewport }).promise;
                    }
                }
            } catch (error) {
                console.error("Error rendering page for crop:", error);
            }
        };
        renderPage();
    }, [pdfJsDoc, activePage, containerSize]); // Re-render when page or container size changes

    const handleCropAction = () => {
        triggerHaptic('medium');

        // Calculate Margins based on cropBox percentages
        // margins are in points usually, but we need to pass relative factors or let backend handle it?
        // My backend cropPdfPages takes absolute points. I need to know the page size to calculate points?
        // Actually, my updated cropPdfPages takes margins (top, bottom, left, right).
        // AND it calculates them relative to the MEDIA BOX of the page.
        // So I need to pass margins in POINTS (72 dpi).
        // Wait, if I pass percentages, the backend logic I wrote:
        // const currentWidth = mediaBox.width;
        // const currentHeight = mediaBox.height;
        // cropBox.x = mediaBox.x + margins.left;
        // ...
        // If I pass absolute points from the frontend, I assume a standard size? No.
        // I should probably update `cropPdfPages` to accept percentages OR calculate points here based on the CURRENT rendered page size?
        // "Current rendered page" might be different from the actual PDF page size.
        // It's safer to pass PERCENTAGES or RATIOS to the backend and let the backend apply them to the actual page dimensions.
        // BUT, the current `cropPdfPages` expects POINTS (implied by "72 points = 1 inch" in UI).
        // Let's stick to the current implementation: I will get the actual page size from PDFJS here, calculate the points, and pass those.

        // However, if "Apply to All" is checked, and pages are different sizes, absolute points margins (e.g. 1 inch from left) is safer than percentages (e.g. 10% from left) which might cut off text on narrow pages?
        // Usually, margins are absolute physical distances (e.g. cut 1 inch off header).
        // Let's stick to absolute points.

        pdfJsDoc.getPage(activePage + 1).then((page: any) => {
            const viewport = page.getViewport({ scale: 1.0 }); // Raw PDF points
            const { width, height } = viewport;

            const margins = {
                left: (cropBox.x / 100) * width,
                top: (cropBox.y / 100) * height,
                right: width - ((cropBox.x + cropBox.width) / 100) * width,
                bottom: height - ((cropBox.y + cropBox.height) / 100) * height
            };

            onCrop(margins, applyToAll ? undefined : [activePage]);
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col animate-fade-in">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0 shadow-sm z-20">
                <div className="flex items-center gap-3">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} className="text-gray-600" />
                    </button>
                    <div>
                        <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                            <Crop size={20} className="text-canada-red" /> {t.cropTool || "Crop PDF"}
                        </h2>
                        <p className="text-xs text-gray-500">{file?.name}</p>
                    </div>
                </div>

                <button
                    onClick={handleCropAction}
                    className="bg-canada-red hover:bg-canada-darkRed text-white px-5 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                >
                    <Check size={18} /> <span className="hidden md:inline">{t.btnCrop || "Crop Tool"}</span><span className="md:hidden">Crop</span>
                </button>
            </div>

            {/* Main Canvas Area */}
            <div className="flex-1 overflow-hidden relative flex flex-col items-center justify-center bg-gray-200/80 p-4 md:p-8" ref={containerRef}>

                <div className="relative shadow-2xl shadow-black/20" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <canvas ref={canvasRef} className="block rounded-sm bg-white" />

                    {/* Overlay Crop Box */}
                    {/* We need to position this ABSOLUTELY over the canvas. Rnd needs a parent. */}
                    {/* The canvas is self-sized. We can put Rnd inside a div that matches canvas size. */}
                    {canvasRef.current && (
                        <div
                            className="absolute inset-0"
                            style={{
                                width: canvasRef.current.style.width || canvasRef.current.width,
                                height: canvasRef.current.style.height || canvasRef.current.height
                            }}
                        >
                            <Rnd
                                default={{
                                    x: 0, y: 0, width: '80%', height: '80%'
                                }}
                                position={{
                                    x: (cropBox.x / 100) * canvasRef.current.width,
                                    y: (cropBox.y / 100) * canvasRef.current.height
                                }}
                                size={{
                                    width: (cropBox.width / 100) * canvasRef.current.width,
                                    height: (cropBox.height / 100) * canvasRef.current.height
                                }}
                                onDragStop={(e, d) => {
                                    setCropBox(prev => ({
                                        ...prev,
                                        x: (d.x / canvasRef.current!.width) * 100,
                                        y: (d.y / canvasRef.current!.height) * 100
                                    }));
                                }}
                                onResizeStop={(e, direction, ref, delta, position) => {
                                    setCropBox({
                                        width: (parseInt(ref.style.width) / canvasRef.current!.width) * 100, // This might be tricky if Rnd sets px
                                        height: (parseInt(ref.style.height) / canvasRef.current!.height) * 100, // ref.offsetWidth is safer
                                        x: (position.x / canvasRef.current!.width) * 100,
                                        y: (position.y / canvasRef.current!.height) * 100
                                    });
                                    // Better to use ref.offsetWidth / maxWidth
                                    setCropBox({
                                        width: (ref.offsetWidth / canvasRef.current!.width) * 100,
                                        height: (ref.offsetHeight / canvasRef.current!.height) * 100,
                                        x: (position.x / canvasRef.current!.width) * 100,
                                        y: (position.y / canvasRef.current!.height) * 100
                                    });
                                }}
                                bounds="parent"
                                className="z-10 border-2 border-canada-red shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" // The shadow hack creates the "dimmed" effect outside!
                                enableUserSelectHack={false}
                                resizeHandleStyles={{
                                    topLeft: { width: isMobile ? 48 : 24, height: isMobile ? 48 : 24, top: isMobile ? -24 : -12, left: isMobile ? -24 : -12, background: '#dc2626', borderRadius: '50%', border: '2px solid white', cursor: 'nwse-resize' },
                                    topRight: { width: isMobile ? 48 : 24, height: isMobile ? 48 : 24, top: isMobile ? -24 : -12, right: isMobile ? -24 : -12, background: '#dc2626', borderRadius: '50%', border: '2px solid white', cursor: 'nesw-resize' },
                                    bottomLeft: { width: isMobile ? 48 : 24, height: isMobile ? 48 : 24, bottom: isMobile ? -24 : -12, left: isMobile ? -24 : -12, background: '#dc2626', borderRadius: '50%', border: '2px solid white', cursor: 'nesw-resize' },
                                    bottomRight: { width: isMobile ? 48 : 24, height: isMobile ? 48 : 24, bottom: isMobile ? -24 : -12, right: isMobile ? -24 : -12, background: '#dc2626', borderRadius: '50%', border: '2px solid white', cursor: 'nwse-resize' },
                                }}
                            >
                                {/* Grid lines for thirds */}
                                <div className="w-full h-full flex flex-col border border-white/20">
                                    <div className="flex-1 border-b border-white/20 flex">
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1"></div>
                                    </div>
                                    <div className="flex-1 border-b border-white/20 flex">
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1"></div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1 border-r border-white/20"></div>
                                        <div className="flex-1"></div>
                                    </div>
                                </div>
                            </Rnd>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="bg-white border-t border-gray-200 p-4 shrink-0 pb-[max(16px,env(safe-area-inset-bottom))]">
                <div className="max-w-3xl mx-auto flex flex-col gap-4">

                    {/* Page Navigation */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setActivePage(p => Math.max(0, p - 1))}
                            disabled={activePage === 0}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <span className="font-bold text-gray-700">Page {activePage + 1} / {pageCount}</span>

                        <button
                            onClick={() => setActivePage(p => Math.min(pageCount - 1, p + 1))}
                            disabled={activePage === pageCount - 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Settings */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-6 w-full md:w-auto justify-center">
                            <label className="flex items-center gap-2 cursor-pointer group select-none">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${applyToAll ? 'bg-canada-red border-canada-red' : 'border-gray-400 bg-white'}`}>
                                    {applyToAll && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                                </div>
                                <input type="checkbox" checked={applyToAll} onChange={() => setApplyToAll(true)} className="hidden" />
                                <span className={`text-sm font-medium ${applyToAll ? 'text-gray-900' : 'text-gray-500'}`}>All Pages</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group select-none">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${!applyToAll ? 'bg-canada-red border-canada-red' : 'border-gray-400 bg-white'}`}>
                                    {!applyToAll && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                                </div>
                                <input type="checkbox" checked={!applyToAll} onChange={() => setApplyToAll(false)} className="hidden" />
                                <span className={`text-sm font-medium ${!applyToAll ? 'text-gray-900' : 'text-gray-500'}`}>Current Page</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
