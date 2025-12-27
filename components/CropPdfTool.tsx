'use client';
import { logger } from '@/utils/logger';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rnd } from 'react-rnd';
import { X, ChevronLeft, ChevronRight, Check, Crop, Eye, Undo2, ZoomIn, ZoomOut } from 'lucide-react';
import { formatFileSize } from '../utils/pdfUtils';
import { triggerHaptic } from '../utils/haptics';

interface CropPdfToolProps {
    file: File | null;
    onClose: () => void;
    pdfJsDoc: any;
    pageCount: number;
    t: any;
    onCrop: (margins: { top: number, bottom: number, left: number, right: number }, pageIndices?: number[]) => void;
    zoom: number;
    setZoom: (zoom: number) => void;
}

export const CropPdfTool: React.FC<CropPdfToolProps> = ({
    file,
    onClose,
    pdfJsDoc,
    pageCount,
    t,
    onCrop,
    zoom,
    setZoom
}) => {
    const [activePage, setActivePage] = useState(0);
    const [applyToAll, setApplyToAll] = useState(true);
    const [cropBox, setCropBox] = useState({ x: 10, y: 10, width: 80, height: 80 }); // Percentages
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // Preview Mode State
    const [showPreview, setShowPreview] = useState(false);
    const [previewCropBox, setPreviewCropBox] = useState(cropBox);

    // Page Rendering State
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
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

    // Render Original Page
    useEffect(() => {
        if (!pdfJsDoc || !canvasRef.current || containerSize.width === 0) return;

        let renderTask: any = null;
        let cancelled = false;

        const renderPage = async () => {
            try {
                const page = await pdfJsDoc.getPage(activePage + 1);
                if (cancelled) return;

                const viewport = page.getViewport({ scale: 1 });

                // Calculate scale - use smaller scale in preview mode to fit both canvases
                const availableWidth = showPreview ? (containerSize.width - 80) / 2 : containerSize.width - 48;
                const scaleX = availableWidth / viewport.width;
                const scaleY = (containerSize.height - 48) / viewport.height;
                const baseScale = Math.min(scaleX, scaleY);
                const scale = baseScale * zoom;

                const scaledViewport = page.getViewport({ scale });

                const canvas = canvasRef.current;
                if (!canvas || cancelled) return;

                canvas.width = scaledViewport.width;
                canvas.height = scaledViewport.height;
                canvas.style.width = `${scaledViewport.width}px`;
                canvas.style.height = `${scaledViewport.height}px`;
                const context = canvas.getContext('2d');
                if (!context) return;

                renderTask = page.render({ canvasContext: context, viewport: scaledViewport });
                await renderTask.promise;
            } catch (error: any) {
                if (error?.name !== 'RenderingCancelledException') {
                    logger.error("Error rendering page for crop:", error);
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
    }, [pdfJsDoc, activePage, containerSize, zoom, showPreview]);

    // Render Cropped Preview Page
    useEffect(() => {
        if (!showPreview || !pdfJsDoc || !previewCanvasRef.current || containerSize.width === 0) return;

        let renderTask: any = null;
        let cancelled = false;

        const renderCroppedPreview = async () => {
            try {
                const page = await pdfJsDoc.getPage(activePage + 1);
                if (cancelled) return;

                const viewport = page.getViewport({ scale: 1 });

                // Calculate the cropped area in PDF coordinates
                const cropLeft = (previewCropBox.x / 100) * viewport.width;
                const cropTop = (previewCropBox.y / 100) * viewport.height;
                const cropWidth = (previewCropBox.width / 100) * viewport.width;
                const cropHeight = (previewCropBox.height / 100) * viewport.height;

                // Scale to fit available space
                const availableWidth = (containerSize.width - 80) / 2;
                const scaleX = availableWidth / cropWidth;
                const scaleY = (containerSize.height - 48) / cropHeight;
                const baseScale = Math.min(scaleX, scaleY);
                const scale = baseScale * zoom;

                const canvas = previewCanvasRef.current;
                if (!canvas || cancelled) return;

                canvas.width = cropWidth * scale;
                canvas.height = cropHeight * scale;
                canvas.style.width = `${cropWidth * scale}px`;
                canvas.style.height = `${cropHeight * scale}px`;
                const context = canvas.getContext('2d');
                if (!context) return;

                // Render full page to offscreen canvas first
                const offscreenCanvas = document.createElement('canvas');
                const fullViewport = page.getViewport({ scale });
                offscreenCanvas.width = fullViewport.width;
                offscreenCanvas.height = fullViewport.height;
                const offscreenContext = offscreenCanvas.getContext('2d');
                if (!offscreenContext) return;

                renderTask = page.render({ canvasContext: offscreenContext, viewport: fullViewport });
                await renderTask.promise;

                if (cancelled) return;

                // Draw only the cropped portion
                context.drawImage(
                    offscreenCanvas,
                    cropLeft * scale, cropTop * scale, cropWidth * scale, cropHeight * scale,
                    0, 0, cropWidth * scale, cropHeight * scale
                );
            } catch (error: any) {
                if (error?.name !== 'RenderingCancelledException') {
                    logger.error("Error rendering cropped preview:", error);
                }
            }
        };
        renderCroppedPreview();

        return () => {
            cancelled = true;
            if (renderTask) {
                renderTask.cancel();
            }
        };
    }, [showPreview, pdfJsDoc, activePage, containerSize, zoom, previewCropBox]);

    const handlePreviewCrop = () => {
        triggerHaptic('medium');
        setPreviewCropBox({ ...cropBox });
        setShowPreview(true);
    };

    const handleUndoPreview = () => {
        triggerHaptic('light');
        setShowPreview(false);
    };

    const handleFinalizeCrop = () => {
        triggerHaptic('success');
        const margins = {
            left: previewCropBox.x,
            top: previewCropBox.y,
            right: 100 - (previewCropBox.x + previewCropBox.width),
            bottom: 100 - (previewCropBox.y + previewCropBox.height),
            usePercentage: true
        };
        onCrop(margins, applyToAll ? undefined : [activePage]);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-gray-100 flex flex-col animate-fade-in">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0 shadow-sm z-20">
                <div className="flex items-center gap-3">
                    <button onClick={showPreview ? handleUndoPreview : onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        {showPreview ? <Undo2 size={24} className="text-gray-600" /> : <X size={24} className="text-gray-600" />}
                    </button>
                    <div>
                        <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                            <Crop size={20} className="text-canada-red" />
                            {showPreview ? (t.cropPreview || "Crop Preview") : (t.cropTool || "Crop PDF")}
                        </h2>
                        <p className="text-xs text-gray-500">{file?.name}</p>
                    </div>
                </div>

                {showPreview ? (
                    <button
                        onClick={handleFinalizeCrop}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                    >
                        <Check size={18} /> <span className="hidden md:inline">{t.btnFinalize || "Finalize Crop"}</span><span className="md:hidden">Finalize</span>
                    </button>
                ) : (
                    <button
                        onClick={handlePreviewCrop}
                        className="bg-canada-red hover:bg-canada-darkRed text-white px-5 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                    >
                        <Eye size={18} /> <span className="hidden md:inline">{t.btnPreviewCrop || "Preview Crop"}</span><span className="md:hidden">Preview</span>
                    </button>
                )}
            </div>

            {/* Main Canvas Area */}
            <div className="flex-1 overflow-auto relative flex items-center justify-center bg-gray-200/80 p-4 md:p-8 gap-6" ref={containerRef}>

                {showPreview ? (
                    /* PREVIEW MODE: Side-by-side comparison */
                    <>
                        {/* Before (Original) */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full">{t.before || "Before"}</span>
                            <div className="relative shadow-xl shadow-black/10 rounded-sm overflow-hidden border-2 border-gray-300">
                                <canvas ref={canvasRef} className="block bg-white" />
                                {/* Show crop outline */}
                                <div
                                    className="absolute border-2 border-dashed border-red-500 pointer-events-none"
                                    style={{
                                        left: `${previewCropBox.x}%`,
                                        top: `${previewCropBox.y}%`,
                                        width: `${previewCropBox.width}%`,
                                        height: `${previewCropBox.height}%`
                                    }}
                                />
                            </div>
                        </div>

                        {/* After (Cropped) */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-bold text-green-600 uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">{t.after || "After"}</span>
                            <div className="relative shadow-2xl shadow-black/20 rounded-sm overflow-hidden border-2 border-green-500">
                                <canvas ref={previewCanvasRef} className="block bg-white" />
                            </div>
                        </div>
                    </>
                ) : (
                    /* CROP SELECTION MODE */
                    <div className="relative shadow-2xl shadow-black/20 my-auto">
                        <canvas ref={canvasRef} className="block rounded-sm bg-white" />

                        {/* Overlay Crop Box */}
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
                                        if (!canvasRef.current) return;
                                        setCropBox(prev => ({
                                            ...prev,
                                            x: (d.x / canvasRef.current!.width) * 100,
                                            y: (d.y / canvasRef.current!.height) * 100
                                        }));
                                    }}
                                    onResizeStop={(e, direction, ref, delta, position) => {
                                        if (!canvasRef.current) return;
                                        setCropBox({
                                            width: (ref.offsetWidth / canvasRef.current!.width) * 100,
                                            height: (ref.offsetHeight / canvasRef.current!.height) * 100,
                                            x: (position.x / canvasRef.current!.width) * 100,
                                            y: (position.y / canvasRef.current!.height) * 100
                                        });
                                    }}
                                    bounds="parent"
                                    className="z-10 border-2 border-canada-red shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"
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
                )}
            </div>

            {/* Bottom Controls */}
            <div className="bg-white border-t border-gray-200 p-4 shrink-0 pb-[max(16px,env(safe-area-inset-bottom))]">
                <div className="max-w-3xl mx-auto flex flex-col gap-4">

                    {/* Page Navigation & Zoom */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
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

                        {/* Zoom Controls */}
                        <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-1">
                            <button
                                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                                className="p-2 hover:bg-white hover:shadow-sm rounded-md transition-all active:scale-95"
                                title="Zoom Out"
                            >
                                <ZoomOut size={20} className="text-gray-600" />
                            </button>
                            <span className="text-xs font-bold text-gray-600 w-12 text-center">{Math.round(zoom * 100)}%</span>
                            <button
                                onClick={() => setZoom(Math.min(3.0, zoom + 0.1))}
                                className="p-2 hover:bg-white hover:shadow-sm rounded-md transition-all active:scale-95"
                                title="Zoom In"
                            >
                                <ZoomIn size={20} className="text-gray-600" />
                            </button>
                            <button
                                onClick={() => setZoom(1.0)}
                                className="px-2 py-1 text-[10px] font-bold text-gray-500 hover:text-canada-red transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Settings - Only show in crop selection mode */}
                    {!showPreview && (
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
                    )}

                    {/* Preview Mode Info */}
                    {showPreview && (
                        <div className="flex items-center justify-center gap-3 bg-green-50 p-3 rounded-xl border border-green-200">
                            <Eye size={18} className="text-green-600" />
                            <span className="text-sm font-medium text-green-700">
                                {t.previewModeInfo || "Review the crop result. Click Finalize to apply or ← to go back and adjust."}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

