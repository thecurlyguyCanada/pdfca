'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Download, Eye, Volume2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, X } from 'lucide-react';
import { Language, translations } from '@/utils/i18n';

interface PdfViewerProps {
    pdfUrl: string;
    title: string;
    lang: Language;
    onDownload?: () => void;
}

/**
 * PDF Viewer Component
 * Uses PDF.js to render PDFs with controls for navigation, zoom, download
 */
export function PdfViewer({ pdfUrl, title, lang }: PdfViewerProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const pdfDocRef = useRef<any>(null);

    const t = translations[lang];

    // Load PDF.js and render
    useEffect(() => {
        let cancelled = false;

        async function loadPdf() {
            try {
                setIsLoading(true);
                setError(null);

                // Dynamic import of PDF.js
                const pdfjs = await import('pdfjs-dist');

                // Set worker
                if (!pdfjs.GlobalWorkerOptions.workerSrc) {
                    pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
                }

                const loadingTask = pdfjs.getDocument(pdfUrl);
                const pdf = await loadingTask.promise;

                if (cancelled) return;

                pdfDocRef.current = pdf;
                setNumPages(pdf.numPages);
                setIsLoading(false);

                // Render first page
                renderPage(1, pdf);
            } catch (err) {
                if (!cancelled) {
                    setError('Failed to load PDF. Please try again.');
                    setIsLoading(false);
                }
            }
        }

        loadPdf();

        return () => {
            cancelled = true;
        };
    }, [pdfUrl]);

    // Render a specific page
    const renderPage = async (pageNum: number, pdf?: any) => {
        const pdfDoc = pdf || pdfDocRef.current;
        if (!pdfDoc || !canvasRef.current) return;

        try {
            const page = await pdfDoc.getPage(pageNum);
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (!context) return;

            const viewport = page.getViewport({ scale: scale * 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;
        } catch (err) {
            console.error('Error rendering page:', err);
        }
    };

    // Re-render on page or scale change
    useEffect(() => {
        if (pdfDocRef.current && !isLoading) {
            renderPage(currentPage);
        }
    }, [currentPage, scale, isLoading]);

    // Navigation handlers
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Zoom handlers
    const zoomIn = () => setScale(Math.min(scale + 0.25, 3));
    const zoomOut = () => setScale(Math.max(scale - 0.25, 0.5));

    // Download handler
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
        link.click();
    };

    // Text-to-speech (basic implementation)
    const handleListen = async () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        // Note: Full TTS would require extracting text from PDF
        // This is a placeholder that speaks the title
        const utterance = new SpeechSynthesisUtterance(
            lang === 'fr'
                ? `Lecture de ${title}. Cette fonctionnalité nécessite une extraction de texte avancée.`
                : `Reading ${title}. Full audio reading requires advanced text extraction.`
        );
        utterance.lang = lang === 'fr' ? 'fr-FR' : 'en-US';
        utterance.onend = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
    };

    // Toggle fullscreen
    const toggleFullscreen = () => {
        if (!document.fullscreenElement && containerRef.current) {
            containerRef.current.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };



    return (
        <div ref={containerRef} className="w-full">
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-canada-red hover:text-canada-red transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label={t.download}
                >
                    <Download className="w-5 h-5" />
                    {t.download}
                </button>

                <button
                    onClick={toggleFullscreen}
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label={t.viewOnline}
                >
                    <Eye className="w-5 h-5" />
                    {t.viewOnline}
                </button>

                <button
                    onClick={handleListen}
                    className={`flex items-center gap-2 px-6 py-3 bg-white border-2 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${isSpeaking
                        ? 'border-green-500 text-green-500 bg-green-50'
                        : 'border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500'
                        }`}
                    aria-label={t.listenAudio}
                >
                    <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    {t.listenAudio}
                </button>
            </div>

            {/* PDF Viewer Container */}
            <div className="bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                    {/* Page Navigation */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage <= 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium text-gray-600 min-w-[100px] text-center">
                            {t.page} {currentPage} {t.of} {numPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage >= numPages}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Next page"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Zoom Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={zoomOut}
                            disabled={scale <= 0.5}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-colors"
                            aria-label="Zoom out"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium text-gray-600 min-w-[60px] text-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            onClick={zoomIn}
                            disabled={scale >= 3}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-colors"
                            aria-label="Zoom in"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Fullscreen toggle for toolbar */}
                    {isFullscreen && (
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Exit fullscreen"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Canvas Area */}
                <div className="relative min-h-[500px] max-h-[80vh] overflow-auto flex justify-center items-start p-4 bg-gray-200">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-10 h-10 text-canada-red animate-spin" />
                                <p className="text-gray-600 font-medium">{t.loading}</p>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                            <div className="text-center">
                                <p className="text-red-500 font-medium mb-2">{t.error}</p>
                                <p className="text-gray-500 text-sm">{error}</p>
                            </div>
                        </div>
                    )}

                    <canvas
                        ref={canvasRef}
                        className="shadow-lg bg-white max-w-full"
                        style={{ display: isLoading || error ? 'none' : 'block' }}
                    />
                </div>
            </div>
        </div>
    );
}
