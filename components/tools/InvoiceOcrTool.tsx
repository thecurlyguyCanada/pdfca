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
    const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set(['vendor', 'id', 'date', 'total']));

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

    const toggleFieldSelection = (field: string) => {
        setSelectedFields(prev => {
            const newSet = new Set(prev);
            if (newSet.has(field)) {
                newSet.delete(field);
            } else {
                newSet.add(field);
            }
            return newSet;
        });
    };

    const toggleAllFields = () => {
        if (selectedFields.size === 4) {
            setSelectedFields(new Set());
        } else {
            setSelectedFields(new Set(['vendor', 'id', 'date', 'total']));
        }
    };

    const handleCopy = () => {
        if (!data) return;
        const fields: string[] = [];
        if (selectedFields.has('vendor') && data.vendor) fields.push(`Vendor: ${data.vendor}`);
        if (selectedFields.has('id') && data.id) fields.push(`Invoice ID: ${data.id}`);
        if (selectedFields.has('date') && data.date) fields.push(`Date: ${data.date}`);
        if (selectedFields.has('total') && data.total) fields.push(`Total: ${data.currency || '$'}${data.total}`);

        if (fields.length === 0) {
            alert("Please select at least one field to copy!");
            return;
        }

        const text = fields.join('\n');
        navigator.clipboard.writeText(text);
        triggerHaptic('light');
        alert("Copied to clipboard!");
    };

    const handleExportExcel = async () => {
        if (!data) return;

        if (selectedFields.size === 0) {
            alert("Please select at least one field to export!");
            return;
        }

        try {
            // Dynamic import to keep bundle small
            const ExcelJS = (await import('exceljs')).default;
            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Invoices');

            // Build columns based on selected fields
            const columns: any[] = [];
            const rowData: any = {};

            if (selectedFields.has('date')) {
                columns.push({ header: 'Date', key: 'date', width: 15 });
                rowData.date = data.date;
            }
            if (selectedFields.has('id')) {
                columns.push({ header: 'Invoice ID', key: 'id', width: 20 });
                rowData.id = data.id;
            }
            if (selectedFields.has('vendor')) {
                columns.push({ header: 'Vendor', key: 'vendor', width: 30 });
                rowData.vendor = data.vendor;
            }
            if (selectedFields.has('total')) {
                columns.push({ header: 'Total', key: 'total', width: 15 });
                columns.push({ header: 'Currency', key: 'currency', width: 10 });
                rowData.total = data.total;
                rowData.currency = data.currency;
            }

            sheet.columns = columns;
            sheet.addRow(rowData);

            // Style header row
            sheet.getRow(1).font = { bold: true };
            sheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE5E7EB' }
            };

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

                    {/* Field Selection Toggle */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Fields to Export</span>
                        <button
                            onClick={toggleAllFields}
                            className="text-xs font-bold text-canada-red hover:text-canada-darkRed transition-colors px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                            {selectedFields.size === 4 ? 'Deselect All' : 'Select All'}
                        </button>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4 flex-1">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    checked={selectedFields.has('vendor')}
                                    onChange={() => toggleFieldSelection('vendor')}
                                    className="w-4 h-4 text-canada-red border-gray-300 rounded focus:ring-canada-red cursor-pointer"
                                />
                                {t.invoiceOcr?.fieldVendor || "Vendor"}
                            </label>
                            <input
                                type="text"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-medium"
                                value={data?.vendor || ''}
                                onChange={(e) => setData(prev => prev ? ({ ...prev, vendor: e.target.value }) : null)}
                                placeholder="Detected Vendor"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    checked={selectedFields.has('id')}
                                    onChange={() => toggleFieldSelection('id')}
                                    className="w-4 h-4 text-canada-red border-gray-300 rounded focus:ring-canada-red cursor-pointer"
                                />
                                {t.invoiceOcr?.fieldId || "Invoice ID"}
                            </label>
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
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 mb-1">
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.has('date')}
                                        onChange={() => toggleFieldSelection('date')}
                                        className="w-4 h-4 text-canada-red border-gray-300 rounded focus:ring-canada-red cursor-pointer"
                                    />
                                    {t.invoiceOcr?.fieldDate || "Date"}
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
                                    value={data?.date || ''}
                                    onChange={(e) => setData(prev => prev ? ({ ...prev, date: e.target.value }) : null)}
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 mb-1">
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.has('total')}
                                        onChange={() => toggleFieldSelection('total')}
                                        className="w-4 h-4 text-canada-red border-gray-300 rounded focus:ring-canada-red cursor-pointer"
                                    />
                                    {t.invoiceOcr?.fieldTotal || "Total"}
                                </label>
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
                            disabled={selectedFields.size === 0}
                            className={`w-full py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                                selectedFields.size === 0
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                                    : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg active:scale-95'
                            }`}
                        >
                            <FileSpreadsheet size={20} />
                            {t.invoiceOcr?.exportExcel || "Export to Excel"}
                        </button>

                        <div className="flex gap-3">
                            <button
                                onClick={handleCopy}
                                disabled={selectedFields.size === 0}
                                className={`flex-1 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
                                    selectedFields.size === 0
                                        ? 'bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                                        : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 active:scale-95'
                                }`}
                            >
                                <Copy size={18} />
                                {t.invoiceOcr?.copyData || "Copy"}
                            </button>
                            <button
                                onClick={handleScan}
                                className="flex-1 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 active:scale-95"
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
