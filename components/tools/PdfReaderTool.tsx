'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Printer, FileText, Maximize2, Minimize2 } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

interface PdfReaderToolProps {
    file: File;
    pdfJsDoc: any;
    onClose: () => void;
    t: any;
}

export const PdfReaderTool: React.FC<PdfReaderToolProps> = ({ file, pdfJsDoc, onClose, t }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [zoom, setZoom] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isRendering, setIsRendering] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pdfJsDoc) {
            setPageCount(pdfJsDoc.numPages);
        }
    }, [pdfJsDoc]);

    const renderPage = useCallback(async (pageNum: number) => {
        if (!pdfJsDoc || !canvasRef.current) return;

        setIsRendering(true);
        try {
            const page = await pdfJsDoc.getPage(pageNum);
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (!context) return;

            // Calculate scale based on container width
            const containerWidth = containerRef.current?.clientWidth || 800;
            const viewport = page.getViewport({ scale: 1 });
            const scale = Math.min((containerWidth - 48) / viewport.width, 2) * zoom;
            const scaledViewport = page.getViewport({ scale });

            canvas.height = scaledViewport.height;
            canvas.width = scaledViewport.width;

            await page.render({
                canvasContext: context,
                viewport: scaledViewport,
            }).promise;
        } catch (error) {
            console.error('Error rendering page:', error);
        } finally {
            setIsRendering(false);
        }
    }, [pdfJsDoc, zoom]);

    useEffect(() => {
        renderPage(currentPage);
    }, [currentPage, renderPage]);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            setCurrentPage(page);
        }
    };

    const handleZoomIn = () => setZoom(z => Math.min(3, z + 0.25));
    const handleZoomOut = () => setZoom(z => Math.max(0.5, z - 0.25));
    const handleResetZoom = () => setZoom(1.0);

    const handleDownload = () => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handlePrint = () => {
        const url = URL.createObjectURL(file);
        const printWindow = window.open(url, '_blank');
        if (printWindow) {
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    };

    const toggleFullscreen = () => {
        if (!containerRef.current) return;

        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                goToPage(currentPage - 1);
            } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
                goToPage(currentPage + 1);
            } else if (e.key === 'Home') {
                goToPage(1);
            } else if (e.key === 'End') {
                goToPage(pageCount);
            } else if (e.key === '+' || e.key === '=') {
                handleZoomIn();
            } else if (e.key === '-') {
                handleZoomOut();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, pageCount]);

    return (
        <div ref={containerRef} className="flex flex-col h-full w-full bg-gray-100 dark:bg-gray-900">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                {/* File Info */}
                <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center shrink-0">
                        <FileText className="text-canada-red" size={20} />
                    </div>
                    <div className="min-w-0">
                        <h2 className="font-bold text-gray-900 dark:text-white truncate max-w-[150px] md:max-w-[300px]">{file.name}</h2>
                        <p className="text-xs text-gray-500">{pageCount} {t?.pages || 'pages'}</p>
                    </div>
                </div>

                {/* Page Navigation */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-1 px-2">
                        <input
                            type="number"
                            min={1}
                            max={pageCount}
                            value={currentPage}
                            onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
                            className="w-12 text-center border border-gray-200 dark:border-gray-600 rounded-lg py-1 bg-white dark:bg-gray-700 text-sm font-medium"
                        />
                        <span className="text-gray-500 text-sm">/ {pageCount}</span>
                    </div>
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage >= pageCount}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Zoom & Actions */}
                <div className="flex items-center gap-1">
                    <button onClick={handleZoomOut} disabled={zoom <= 0.5} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors">
                        <ZoomOut size={18} />
                    </button>
                    <button onClick={handleResetZoom} className="px-2 py-1 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        {Math.round(zoom * 100)}%
                    </button>
                    <button onClick={handleZoomIn} disabled={zoom >= 3} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors">
                        <ZoomIn size={18} />
                    </button>
                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-2" />
                    <button onClick={handlePrint} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title={t?.print || 'Print'}>
                        <Printer size={18} />
                    </button>
                    <button onClick={handleDownload} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title={t?.download || 'Download'}>
                        <Download size={18} />
                    </button>
                    <button onClick={toggleFullscreen} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title={t?.fullscreen || 'Fullscreen'}>
                        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </div>
            </div>

            {/* PDF Canvas */}
            <div className="flex-1 overflow-auto flex items-start justify-center p-6 bg-gray-200 dark:bg-gray-950">
                <div className="relative shadow-2xl">
                    {isRendering && (
                        <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center z-10">
                            <div className="w-8 h-8 border-4 border-canada-red/30 border-t-canada-red rounded-full animate-spin" />
                        </div>
                    )}
                    <canvas
                        ref={canvasRef}
                        className="bg-white shadow-lg"
                    />
                </div>
            </div>

            {/* Bottom Page Strip (Mobile) */}
            <div className="md:hidden flex items-center justify-center gap-4 p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl font-bold disabled:opacity-30 flex items-center justify-center gap-2"
                >
                    <ChevronLeft size={20} /> {t?.prev || 'Prev'}
                </button>
                <div className="text-center">
                    <span className="text-2xl font-black text-canada-red">{currentPage}</span>
                    <span className="text-gray-400"> / {pageCount}</span>
                </div>
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage >= pageCount}
                    className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl font-bold disabled:opacity-30 flex items-center justify-center gap-2"
                >
                    {t?.next || 'Next'} <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default PdfReaderTool;
