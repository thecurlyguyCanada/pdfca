
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Scan, Code, Copy, Loader2, RefreshCw, AlertTriangle, Download, FileCode } from 'lucide-react';
import { InvoiceData } from '@/utils/types';
import { extractInvoiceData, initPdfWorker } from '@/utils/pdfUtils';
import { generateUBL } from '@/utils/ublGenerator';
import { triggerHaptic } from '@/utils/haptics';

interface PdfToUblToolProps {
    file: File;
    pdfJsDoc: any; // PDFDocumentProxy
    t: any; // Translations
}

export const PdfToUblTool: React.FC<PdfToUblToolProps> = ({ file, pdfJsDoc, t }) => {
    const [isScanning, setIsScanning] = useState(false);
    const [data, setData] = useState<InvoiceData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initial Scan
    useEffect(() => {
        handleScan();
    }, [file]);

    // Render Preview of Page 1
    useEffect(() => {
        if (!pdfJsDoc || !containerRef.current) return;

        const renderPreview = async () => {
            try {
                const page = await pdfJsDoc.getPage(1);
                const viewport = page.getViewport({ scale: 1 });

                // Fit to container width
                const containerWidth = containerRef.current?.clientWidth || 600;
                const scale = (containerWidth - 40) / viewport.width;
                const scaledViewport = page.getViewport({ scale });

                const canvas = document.createElement('canvas');
                canvas.width = scaledViewport.width;
                canvas.height = scaledViewport.height;

                const context = canvas.getContext('2d');
                if (context) {
                    await page.render({ canvasContext: context, viewport: scaledViewport }).promise;
                    setCanvasRef(canvas);
                }
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error("Preview render error", err);
                }
            }
        };
        renderPreview();
    }, [pdfJsDoc]);

    const handleScan = async () => {
        setIsScanning(true);
        setError(null);
        try {
            await initPdfWorker();
            const result = await extractInvoiceData(file);
            setData(result);
            triggerHaptic('success');
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.error(err);
            }
            setError("Failed to extract data. Please try again.");
            triggerHaptic('error');
        } finally {
            setIsScanning(false);
        }
    };

    const handleDownloadUBL = () => {
        if (!data) return;

        try {
            const ublXml = generateUBL(data);
            const blob = new Blob([ublXml], { type: 'application/xml;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `invoice_${data.id || 'ubl'}.xml`;
            a.click();
            window.URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (e) {
            console.error("UBL generation failed", e);
            alert("Failed to generate UBL XML. Please check your data.");
        }
    };

    const uiStrings = t.pdfToUbl || {
        uploadTitle: "Upload PDF Invoice",
        verifyTitle: "Verify Invoice Data",
        scanning: "Scanning...",
        vendor: "Vendor Name",
        invoiceId: "Invoice Number",
        date: "Date (YYYY-MM-DD)",
        dueDate: "Due Date",
        subtotal: "Subtotal",
        tax: "Tax",
        total: "Total",
        currency: "Currency",
        confidence: "Confidence",
        downloadUbl: "Download UBL XML",
        rescan: "Scan Another",
        verifyDesc: "Please review and correct the extracted data before generating the UBL XML.",
        successMsg: "UBL XML generated successfully!"
    };

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-red-600">
                <AlertTriangle className="w-12 h-12 mb-4" />
                <p>{error}</p>
                <button onClick={handleScan} className="mt-4 px-4 py-2 bg-canada-red text-white rounded-lg">
                    {t.btnTryAgain || "Retry Scan"}
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row h-full gap-6 p-4 md:p-6 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
            {/* Left: Preview */}
            <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-auto flex items-center justify-center min-h-[300px] shadow-inner relative">
                {canvasRef ? (
                    <img src={canvasRef.toDataURL()} alt="Invoice Preview" className="shadow-lg max-w-full h-auto" />
                ) : (
                    <Loader2 className="animate-spin text-gray-400" />
                )}
            </div>

            {/* Right: Data Verification Form */}
            <div className="w-full lg:w-[450px] flex flex-col gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                            <Code className="text-canada-red" />
                            {uiStrings.verifyTitle}
                        </h3>
                        {isScanning ? (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                                <Loader2 size={12} className="animate-spin" /> {uiStrings.scanning}
                            </span>
                        ) : (
                            <span className={`text-xs px-2 py-1 rounded-full text-white font-bold ${(data?.confidence ?? 0) > 0.8 ? 'bg-green-500' : 'bg-orange-500'}`}>
                                {data?.confidence ? Math.round(data.confidence * 100) : 0}% {uiStrings.confidence}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {uiStrings.verifyDesc}
                    </p>

                    {/* Scrollable Form Area */}
                    <div className="space-y-4 flex-1 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                        {/* Company Info */}
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.vendor}</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                value={data?.vendor || ''}
                                onChange={(e) => setData(prev => prev ? ({ ...prev, vendor: e.target.value }) : null)}
                                placeholder={uiStrings.vendor}
                            />
                        </div>

                        {/* Invoice Details */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.invoiceId}</label>
                                <input
                                    type="text"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-mono text-gray-900 dark:text-white"
                                    value={data?.id || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, id: e.target.value }) : null)}
                                    placeholder="INV-001"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.date}</label>
                                <input
                                    type="text"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                    value={data?.date || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, date: e.target.value }) : null)}
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.dueDate}</label>
                                <input
                                    type="text"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                    value={data?.dueDate || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, dueDate: e.target.value }) : null)}
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.currency}</label>
                                <input
                                    type="text"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                    value={data?.currency || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, currency: e.target.value }) : null)}
                                    placeholder="USD, EUR, CAD"
                                />
                            </div>
                        </div>

                        {/* Amounts */}
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.subtotal}</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                    value={data?.subtotal || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, subtotal: parseFloat(e.target.value) }) : null)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.tax}</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white"
                                    value={data?.tax || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, tax: parseFloat(e.target.value) }) : null)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{uiStrings.total}</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-green-600 dark:text-green-400"
                                    value={data?.total || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, total: parseFloat(e.target.value) }) : null)}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <button
                            onClick={handleDownloadUBL}
                            className="w-full py-3 bg-canada-red hover:bg-canada-darkRed text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                        >
                            <Download size={20} />
                            {uiStrings.downloadUbl}
                        </button>

                        <button
                            onClick={handleScan}
                            className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCw size={14} />
                            {uiStrings.rescan}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
