'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { Upload, Download, Eraser, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';
import { initPdfWorker } from '../../utils/pdfUtils';

interface Selection {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default function PdfWhiteout() {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [currPage, setCurrPage] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.5);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [selection, setSelection] = useState<Selection | null>(null);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
    const [renderTrigger, setRenderTrigger] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isApplying, setIsApplying] = useState<boolean>(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const renderIdRef = useRef<number>(0); // For race condition prevention

    // Initialize worker on mount
    useEffect(() => {
        initPdfWorker().catch(console.error);
    }, []);

    // Clear selection when page changes
    useEffect(() => {
        setSelection(null);
    }, [currPage]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPdfFile(file);
            setIsLoading(true);

            try {
                const buffer = await file.arrayBuffer();
                setPdfBytes(new Uint8Array(buffer));

                await initPdfWorker();
                const pdfjsLib = await import('pdfjs-dist');
                const pdf = await pdfjsLib.getDocument(new Uint8Array(buffer)).promise;
                setNumPages(pdf.numPages);
                setCurrPage(1);
                setSelection(null);
                // Clean up pdf.js document
                await pdf.destroy();
            } catch (error) {
                console.error("Error loading PDF:", error);
                alert("Failed to load PDF. Please try again.");
                setPdfFile(null);
                setPdfBytes(null);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Handle drag and drop
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;
        if (files && files[0] && files[0].type === 'application/pdf') {
            // Create a synthetic event to reuse handleFileChange logic
            const file = files[0];
            setPdfFile(file);
            setIsLoading(true);

            try {
                const buffer = await file.arrayBuffer();
                setPdfBytes(new Uint8Array(buffer));

                await initPdfWorker();
                const pdfjsLib = await import('pdfjs-dist');
                const pdf = await pdfjsLib.getDocument(new Uint8Array(buffer)).promise;
                setNumPages(pdf.numPages);
                setCurrPage(1);
                setSelection(null);
                await pdf.destroy();
            } catch (error) {
                console.error("Error loading PDF:", error);
                alert("Failed to load PDF. Please try again.");
                setPdfFile(null);
                setPdfBytes(null);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const renderPage = async () => {
        if (!pdfBytes || !canvasRef.current) return;

        // Race condition prevention: increment render ID and capture it
        const currentRenderId = ++renderIdRef.current;

        try {
            await initPdfWorker();
            const pdfjsLib = await import('pdfjs-dist');
            const loadingTask = pdfjsLib.getDocument(pdfBytes);
            const pdf = await loadingTask.promise;

            // Check if this render is still valid (no newer render started)
            if (currentRenderId !== renderIdRef.current) {
                await pdf.destroy();
                return;
            }

            const page = await pdf.getPage(currPage);
            const viewport = page.getViewport({ scale });
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (context && currentRenderId === renderIdRef.current) {
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };

                await page.render(renderContext).promise;

                // Draw selection overlay (only if render is still valid)
                if (selection && currentRenderId === renderIdRef.current) {
                    context.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    context.fillRect(selection.x, selection.y, selection.width, selection.height);
                    context.strokeStyle = '#dc2626';
                    context.lineWidth = 2;
                    context.strokeRect(selection.x, selection.y, selection.width, selection.height);
                }
            }

            // Clean up pdf.js document to prevent memory leak
            await pdf.destroy();
        } catch (error) {
            console.error('Error rendering PDF:', error);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        renderPage();
    }, [pdfBytes, currPage, scale, selection, renderTrigger]);

    const getMousePos = (e: React.MouseEvent) => {
        if (!canvasRef.current) return { x: 0, y: 0 };
        const rect = canvasRef.current.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!pdfBytes) return;
        const pos = getMousePos(e);
        setStartPos(pos);
        setIsDragging(true);
        setSelection({ x: pos.x, y: pos.y, width: 0, height: 0 });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !startPos) return;
        const pos = getMousePos(e);

        setSelection({
            x: Math.min(startPos.x, pos.x),
            y: Math.min(startPos.y, pos.y),
            width: Math.abs(pos.x - startPos.x),
            height: Math.abs(pos.y - startPos.y)
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setStartPos(null);
        // Clear selection if it's too small (accidental click)
        if (selection && (selection.width < 5 || selection.height < 5)) {
            setSelection(null);
        }
    };

    const applyWhiteout = async () => {
        if (!pdfBytes || !selection) return;

        setIsApplying(true);
        try {
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const page = pdfDoc.getPages()[currPage - 1];
            const { width: pageWidth, height: pageHeight } = page.getSize();
            const rotation = page.getRotation().angle;

            // Canvas coordinates (scaled)
            const canvasX = selection.x / scale;
            const canvasY = selection.y / scale;
            const canvasW = selection.width / scale;
            const canvasH = selection.height / scale;

            // Convert canvas coordinates to PDF coordinates based on rotation
            let pdfX: number, pdfY: number, pdfWidth: number, pdfHeight: number;

            if (rotation === 0) {
                // Standard orientation: canvas top-left -> PDF bottom-left
                pdfX = canvasX;
                pdfY = pageHeight - (canvasY + canvasH);
                pdfWidth = canvasW;
                pdfHeight = canvasH;
            } else if (rotation === 90) {
                // Page rotated 90° clockwise
                pdfX = canvasY;
                pdfY = canvasX;
                pdfWidth = canvasH;
                pdfHeight = canvasW;
            } else if (rotation === 180) {
                // Page rotated 180°
                pdfX = pageWidth - (canvasX + canvasW);
                pdfY = canvasY;
                pdfWidth = canvasW;
                pdfHeight = canvasH;
            } else if (rotation === 270) {
                // Page rotated 270° clockwise (90° counter-clockwise)
                pdfX = pageHeight - (canvasY + canvasH);
                pdfY = pageWidth - (canvasX + canvasW);
                pdfWidth = canvasH;
                pdfHeight = canvasW;
            } else {
                // Fallback for non-standard rotations
                pdfX = canvasX;
                pdfY = pageHeight - (canvasY + canvasH);
                pdfWidth = canvasW;
                pdfHeight = canvasH;
            }

            page.drawRectangle({
                x: pdfX,
                y: pdfY,
                width: pdfWidth,
                height: pdfHeight,
                color: rgb(1, 1, 1),
            });

            const newPdfBytes = await pdfDoc.save();
            setPdfBytes(newPdfBytes);
            setSelection(null);
            setRenderTrigger(prev => prev + 1);

        } catch (error) {
            console.error('Error applying whiteout:', error);
            alert('Failed to apply whiteout.');
        } finally {
            setIsApplying(false);
        }
    };

    const downloadPdf = () => {
        if (!pdfBytes) return;
        // Use .buffer and cast to ArrayBuffer for strict TS Blob compatibility
        const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `whiteout-${pdfFile?.name || 'document.pdf'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const resetFile = () => {
        setPdfFile(null);
        setPdfBytes(null);
        setSelection(null);
        setNumPages(0);
        setCurrPage(1);
    };

    return (
        <div className="flex flex-col items-center w-full min-h-[600px] bg-gray-50/50 p-4 md:p-8">

            {/* Upload State */}
            {!pdfBytes && (
                <div className="w-full max-w-xl text-center py-20">
                    <label
                        className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-gray-300 rounded-[2.5rem] cursor-pointer bg-white hover:bg-gray-50 hover:border-red-200 transition-all shadow-sm group"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400 group-hover:text-red-500 transition-colors">
                            {isLoading ? (
                                <Loader2 className="w-10 h-10 animate-spin mb-6" />
                            ) : (
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                    <Upload className="w-10 h-10" />
                                </div>
                            )}
                            <p className="mb-2 text-xl font-bold text-gray-700">
                                {isLoading ? 'Loading PDF...' : 'Click to upload PDF'}
                            </p>
                            <p className="text-sm">or drag and drop your file here</p>
                        </div>
                        <input type="file" className="hidden" accept=".pdf,application/pdf" onChange={handleFileChange} disabled={isLoading} />
                    </label>
                </div>
            )}

            {/* Editor State */}
            {pdfBytes && (
                <div className="w-full max-w-6xl animate-fade-in space-y-4">

                    {/* Toolbar */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4 sticky top-4 z-20">
                        <div className="flex items-center gap-4">
                            <button onClick={resetFile} className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-lg transition-colors" title="Close/Reset">
                                <X size={20} />
                            </button>

                            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

                            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                <button disabled={currPage <= 1} onClick={() => setCurrPage(p => p - 1)} className="p-1.5 hover:bg-white rounded-md disabled:opacity-30 transition-all shadow-sm">
                                    <ChevronLeft size={18} />
                                </button>
                                <span className="text-xs font-bold w-20 text-center">{currPage} / {numPages}</span>
                                <button disabled={currPage >= numPages} onClick={() => setCurrPage(p => p + 1)} className="p-1.5 hover:bg-white rounded-md disabled:opacity-30 transition-all shadow-sm">
                                    <ChevronRight size={18} />
                                </button>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                <button onClick={() => setScale(s => Math.max(0.5, s - 0.25))} className="p-1.5 hover:bg-white rounded-md transition-all shadow-sm"><ZoomOut size={18} /></button>
                                <span className="text-xs font-bold w-12 text-center">{Math.round(scale * 100)}%</span>
                                <button onClick={() => setScale(s => Math.min(3.0, s + 0.25))} className="p-1.5 hover:bg-white rounded-md transition-all shadow-sm"><ZoomIn size={18} /></button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={applyWhiteout}
                                disabled={!selection || isApplying}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${selection && !isApplying
                                    ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/20 active:scale-95'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {isApplying ? <Loader2 size={18} className="animate-spin" /> : <Eraser size={18} />}
                                {isApplying ? 'Applying...' : 'Apply Whiteout'}
                            </button>

                            <button
                                onClick={downloadPdf}
                                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg hover:shadow-gray-900/20 active:scale-95"
                            >
                                <Download size={18} />
                                Download
                            </button>
                        </div>
                    </div>

                    {/* Canvas Container */}
                    <div
                        className="relative w-full overflow-auto bg-gray-200/50 rounded-3xl border border-gray-200 min-h-[500px] flex justify-center p-8 shadow-inner"
                        ref={containerRef}
                        onMouseLeave={handleMouseUp}
                    >
                        <canvas
                            ref={canvasRef}
                            className="bg-white shadow-xl cursor-crosshair transition-shadow"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                        />

                        {/* Hints */}
                        {isDragging && (
                            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pointer-events-none z-50">
                                Release to select area
                            </div>
                        )}
                        {!isDragging && !selection && (
                            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-xl backdrop-blur-md pointer-events-none z-50 flex items-center gap-2">
                                <Eraser size={14} className="text-red-500" />
                                Draw a box over text to remove
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
