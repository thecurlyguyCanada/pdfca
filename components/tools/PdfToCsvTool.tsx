'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
    FileSpreadsheet,
    Table,
    Download,
    Settings2,
    RefreshCcw,
    CheckCircle2,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    FileText,
    Activity,
    Database,
    Clock,
    Shield
} from 'lucide-react';
import {
    extractTableFromPdf,
    mergeMultilineRows,
    normalizeFinancialData,
    downloadAsExcel,
    generateQBO,
    TableData
} from '@/utils/csvExtractor';
import { triggerHaptic } from '@/utils/haptics';
import { translations } from '@/utils/i18n';

interface PdfToCsvToolProps {
    file: File;
    t: typeof translations.en;
}

export const PdfToCsvTool: React.FC<PdfToCsvToolProps> = ({ file, t }) => {
    const [originalData, setOriginalData] = useState<TableData | null>(null);
    const [processedData, setProcessedData] = useState<TableData | null>(null);
    const [isExtracting, setIsExtracting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // UI States
    const [smartMerge, setSmartMerge] = useState(true);
    const [normalizeData, setNormalizeData] = useState(true);
    const [showOptions, setShowOptions] = useState(true);
    const [visibleRows, setVisibleRows] = useState(50); // Pagination for performance

    const handleExtraction = useCallback(async () => {
        setIsExtracting(true);
        setError(null);
        setProgress(0);

        try {
            const data = await extractTableFromPdf(file, (p) => {
                setProgress(p);
            });
            setOriginalData(data);
            triggerHaptic('success');
        } catch (err) {
            setError("We couldn't extract the table from this PDF. It might be an image, have a highly complex layout, or utilize unsupported fonts.");
            triggerHaptic('error');
        } finally {
            setIsExtracting(false);
        }
    }, [file]);

    useEffect(() => {
        handleExtraction();
    }, [handleExtraction]);

    // Apply processing whenever options change
    useEffect(() => {
        if (!originalData) return;

        // Wrap heavy processing in timeout to let UI breathe or use another worker
        // For now, these operations are fast enough on the main thread for mid-sized data
        const timer = setTimeout(() => {
            let data = { ...originalData };
            if (smartMerge) {
                data = mergeMultilineRows(data);
            }
            if (normalizeData) {
                data = normalizeFinancialData(data);
            }
            setProcessedData(data);
        }, 10);
        return () => clearTimeout(timer);
    }, [originalData, smartMerge, normalizeData]);

    const handleDownload = (format: 'csv' | 'xlsx' | 'qbo') => {
        if (!processedData) return;
        triggerHaptic('medium');

        if (format === 'qbo') {
            const qboContent = generateQBO(processedData);
            const blob = new Blob([qboContent], { type: 'application/vnd.intu.qbo' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = file.name.replace(/\.pdf$/i, '.qbo');
            link.click();
            URL.revokeObjectURL(url); // Clean up blob URL
        } else {
            downloadAsExcel(processedData, file.name.replace(/\.pdf$/i, `.${format}`), format);
        }
    };

    if (isExtracting) {
        return (
            <div className="flex flex-col items-center justify-center p-20 text-center animate-pulse">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 relative">
                    <Database className="text-canada-red animate-bounce" size={40} />
                    <RefreshCcw className="absolute text-canada-red/40 animate-spin" size={64} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter italic lowercase">{t.pdfToCsv?.analyzing || "analyzing spatial layout..."}</h3>
                <p className="text-gray-500 font-bold mt-2">{t.pdfToCsv?.mapping || "mapping columns and rows locally"}</p>

                {/* Progress Bar */}
                <div className="mt-8 w-64 h-2 bg-gray-100 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-canada-red transition-all duration-300 ease-out"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                </div>
                <p className="mt-2 text-xs font-mono text-gray-400">{Math.round(progress * 100)}%</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-100 text-canada-red rounded-full flex items-center justify-center mb-6">
                    <AlertCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.pdfToCsv?.extractionFailed || "Extraction Failed"}</h3>
                <p className="text-gray-600 mb-8">{error || t.pdfToCsv?.extractionError || "We couldn't extract the table from this PDF."}</p>
                <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-800 border border-blue-100 text-left">
                    <strong>Note:</strong> Some PDFs (like scanned receipts without OCR or graphical tables) are difficult to parse without manual intervention.
                </div>
                <button
                    onClick={handleExtraction}
                    className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                    {t.btnTryAgain || 'Try Again'}
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 md:p-6 shadow-sm z-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center shadow-sm">
                            <Table className="text-green-600" />
                        </div>
                        <div>
                            <h2 className="font-black text-xl text-gray-900 dark:text-white tracking-tight leading-none">
                                {processedData?.rows.length || 0} {t.pdfToCsv?.transactionsFound || "Transactions Found"}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 size={10} /> {Math.round((processedData?.confidence || 0) * 100)}% {t.pdfToCsv?.confidence || "Confidence"}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                    <Clock size={10} /> {t.pdfToCsv?.localProcessing || "Local Processing"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:flex items-center gap-3 w-full md:w-auto">
                        <button
                            onClick={() => handleDownload('xlsx')}
                            disabled={!processedData || processedData.rows.length === 0}
                            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 md:py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all active:scale-95 w-full md:w-auto"
                        >
                            <FileSpreadsheet size={20} /> Excel
                        </button>
                        <button
                            onClick={() => handleDownload('csv')}
                            disabled={!processedData || processedData.rows.length === 0}
                            className="bg-modern-neutral-900 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 md:py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 w-full md:w-auto"
                        >
                            <FileText size={20} /> CSV
                        </button>
                        <button
                            onClick={() => handleDownload('qbo')}
                            disabled={!processedData || processedData.rows.length === 0}
                            className="bg-canada-red hover:bg-canada-darkRed disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 md:py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 transition-all active:scale-95 w-full md:w-auto"
                        >
                            <Download size={20} /> QBO
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col md:flex-row overflow-hidden relative">
                {/* Options Panel - Floating / Desktop Sidebar */}
                <div className={`
                    ${showOptions ? 'w-full md:w-80' : 'w-0'} 
                    bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden flex flex-col z-10
                `}>
                    <div className="p-6 space-y-8 min-w-[320px]">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Settings2 size={14} /> {t.pdfToCsv?.extractionOptions || "Extraction Options"}
                                </h3>
                                <button
                                    onClick={() => setShowOptions(false)}
                                    className="md:hidden p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"
                                >
                                    <ChevronDown size={16} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-canada-red transition-all group">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-bold text-sm text-gray-900 dark:text-white">{t.pdfToCsv?.smartMerge || "Smart Multiline Merge"}</span>
                                        <span className="text-[10px] text-gray-500 max-w-[180px]">{t.pdfToCsv?.smartMergeDesc || "Joins wrapped descriptions into single rows"}</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={smartMerge}
                                        onChange={() => setSmartMerge(!smartMerge)}
                                        className="w-5 h-5 accent-canada-red"
                                    />
                                </label>

                                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-canada-red transition-all group">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-bold text-sm text-gray-900 dark:text-white">{t.pdfToCsv?.normalization || "Financial Normalization"}</span>
                                        <span className="text-[10px] text-gray-500 max-w-[180px]">{t.pdfToCsv?.normalizationDesc || "Standardizes dates and cleans currency symbols"}</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={normalizeData}
                                        onChange={() => setNormalizeData(!normalizeData)}
                                        className="w-5 h-5 accent-canada-red"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="bg-canada-red/5 p-4 rounded-2xl border border-canada-red/10">
                            <h4 className="text-[10px] font-black text-canada-red uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Activity size={12} /> {t.pdfToCsv?.aiInsight || "AI Insight"}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic font-medium">
                                "{t.pdfToCsv?.aiMessage || "Our spatial detector noticed this looks like a Bank Statement. We've automatically optimized column gutters for account reconciliation."}"
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowOptions(!showOptions)}
                    className="absolute bottom-6 right-6 md:left-[304px] md:bottom-auto md:top-6 z-30 p-3 bg-modern-neutral-900 text-white rounded-full shadow-2xl transition-all"
                >
                    {showOptions ? <ChevronDown className="md:rotate-90" /> : <Settings2 />}
                </button>

                {/* Main Table Preview */}
                <div className="flex-grow overflow-auto bg-gray-50 dark:bg-gray-950 p-4 md:p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-premium overflow-hidden border border-white dark:border-gray-800">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                                        <tr>
                                            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-12">#</th>
                                            {processedData?.headers.map((header, i) => (
                                                <th key={i} className="px-6 py-4 text-[10px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                        {processedData?.rows.slice(0, visibleRows).map((row, rowIdx) => (
                                            <tr key={rowIdx} className="hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-colors group">
                                                <td className="px-6 py-4 text-xs font-mono text-gray-400 border-r border-gray-50 dark:border-gray-800">{rowIdx + 1}</td>
                                                {processedData.headers.map((header, colIdx) => (
                                                    <td key={colIdx} className="px-6 py-4 min-w-[120px]">
                                                        <span className={`text-sm ${header.toLowerCase().includes('amount') || header.toLowerCase().includes('balance')
                                                            ? 'font-mono font-bold text-gray-900 dark:text-gray-100'
                                                            : 'text-gray-600 dark:text-gray-400'
                                                            }`}>
                                                            {row[header]}
                                                        </span>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                        {(!processedData || processedData.rows.length === 0) && (
                                            <tr>
                                                <td colSpan={100} className="p-12 text-center text-gray-400 italic">
                                                    {t.pdfToCsv?.uploadPrompt || "Upload a PDF to see transactions here"}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {processedData && processedData.rows.length > visibleRows && (
                                <div className="p-8 text-center bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-gray-500 text-sm mb-4">Showing {visibleRows} of {processedData.rows.length} rows</p>
                                    <button
                                        onClick={() => setVisibleRows(v => v + 50)}
                                        className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-8 py-2 rounded-full font-bold text-sm text-gray-700 dark:text-gray-200 hover:border-canada-red transition-all"
                                    >
                                        Load More Rows
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-4">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1.5"><Table size={12} /> Format: CSV/XLSX/QBO</span>
                                <span className="flex items-center gap-1.5"><Shield size={12} /> {t.pdfToCsv?.privacy || "Privacy: 100% Offline"}</span>
                            </div>
                            <p>{t.pdfToCsv?.poweredBy || "Powered by PDFCA Spatial Engine 2.0"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfToCsvTool;
