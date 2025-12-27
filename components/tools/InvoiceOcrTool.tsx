'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Scan, FileSpreadsheet, Copy, Check, Loader2, RefreshCw, AlertTriangle } from 'lucide-react';
import { InvoiceData } from '@/utils/types';
import { extractInvoiceData, initPdfWorker } from '@/utils/pdfUtils';
import { triggerHaptic } from '@/utils/haptics';

interface InvoiceOcrToolProps {
    file: File;
    pdfJsDoc: any; // PDFDocumentProxy
    t: any; // Translations
}

export const InvoiceOcrTool: React.FC<InvoiceOcrToolProps> = ({ file, pdfJsDoc, t }) => {
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
                console.error("Preview render error", err);
            }
        };
        renderPreview();
    }, [pdfJsDoc]);

    const handleScan = async () => {
        setIsScanning(true);
        setError(null);
        try {
            // Ensure worker is ready
            await initPdfWorker();
            const result = await extractInvoiceData(file);
            setData(result);
            triggerHaptic('success');
        } catch (err) {
            console.error(err);
            setError("Failed to extract data. Please try again.");
            triggerHaptic('error');
        } finally {
            setIsScanning(false);
        }
    };

    const handleCopy = () => {
        if (!data) return;
        const text = `Vendor: ${data.vendor}\nDate: ${data.date}\nID: ${data.id}\nTotal: ${data.total}`;
        navigator.clipboard.writeText(text);
        triggerHaptic('light');
        alert("Copied to clipboard!");
    };

    const handleExportExcel = async () => {
        if (!data) return;
        try {
            // Dynamic import to keep bundle small
            const ExcelJS = (await import('exceljs')).default;
            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Invoices');

            sheet.columns = [
                { header: 'Date', key: 'date', width: 15 },
                { header: 'Invoice ID', key: 'id', width: 20 },
                { header: 'Vendor', key: 'vendor', width: 30 },
                { header: 'Total', key: 'total', width: 15 },
                { header: 'Currency', key: 'currency', width: 10 },
            ];

            sheet.addRow({
                date: data.date,
                id: data.id,
                vendor: data.vendor,
                total: data.total,
                currency: data.currency
            });

            // Browser download
            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `invoice_${data.id || 'scan'}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (e) {
            console.error("Excel export failed", e);
            alert("Export failed. Please try again.");
        }
    };

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-red-600">
                <AlertTriangle className="w-12 h-12 mb-4" />
                <p>{error}</p>
                <button onClick={handleScan} className="mt-4 px-4 py-2 bg-canada-red text-white rounded-lg">
                    Retry Scan
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

                {/* Tesseract Badge if needed */}
                {/* Could show overlay here */}
            </div>

            {/* Right: Data Form */}
            <div className="w-full lg:w-[400px] flex flex-col gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Scan className="text-canada-red" />
                            {t.invoiceOcr?.results || "Details"}
                        </h3>
                        {isScanning ? (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                                <Loader2 size={12} className="animate-spin" /> {t.invoiceOcr?.scanning || "Scanning..."}
                            </span>
                        ) : (
                            <div className="flex items-center gap-1">
                                <span className={`text-xs px-2 py-1 rounded-full text-white font-bold ${data?.confidence && data.confidence > 0.8 ? 'bg-green-500' : 'bg-orange-500'}`}>
                                    {data?.confidence ? Math.round(data.confidence * 100) : 0}% Conf.
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Fields */}
                    <div className="space-y-4 flex-1">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{t.invoiceOcr?.fieldVendor || "Vendor"}</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-medium"
                                value={data?.vendor || ''}
                                onChange={(e) => setData(prev => prev ? ({ ...prev, vendor: e.target.value }) : null)}
                                placeholder="Detected Vendor"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{t.invoiceOcr?.fieldId || "Invoice ID"}</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-lg"
                                value={data?.id || ''}
                                onChange={(e) => setData(prev => prev ? ({ ...prev, id: e.target.value }) : null)}
                                placeholder="INV-000"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{t.invoiceOcr?.fieldDate || "Date"}</label>
                                <input
                                    type="text"
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
                                    value={data?.date || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, date: e.target.value }) : null)}
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">{t.invoiceOcr?.fieldTotal || "Total"}</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-400">{data?.currency || '$'}</span>
                                    <input
                                        type="number"
                                        className="w-full p-3 pl-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-bold text-lg text-green-600"
                                        value={data?.total || ''}
                                        onChange={(e) => setData(prev => prev ? ({ ...prev, total: parseFloat(e.target.value) }) : null)}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <button
                            onClick={handleExportExcel}
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <FileSpreadsheet size={20} />
                            {t.invoiceOcr?.exportExcel || "Export to Excel"}
                        </button>

                        <div className="flex gap-3">
                            <button
                                onClick={handleCopy}
                                className="flex-1 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <Copy size={18} />
                                {t.invoiceOcr?.copyData || "Copy"}
                            </button>
                            <button
                                onClick={handleScan}
                                className="flex-1 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <RefreshCw size={18} />
                                {t.invoiceOcr?.newScan || "Rescan"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
