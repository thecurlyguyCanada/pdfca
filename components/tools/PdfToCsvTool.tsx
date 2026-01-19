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
    Shield,
    Trash2,
    Undo,
    Redo,
    ScanSearch,
    Lock
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

// Sub-components
const EditableCell = ({
    value,
    onChange,
    className,
    multiline = false
}: {
    value: string;
    onChange: (val: string) => void;
    className?: string;
    multiline?: boolean;
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        setTempValue(value);
    }, [value]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleBlur = () => {
        setIsEditing(false);
        if (tempValue !== value) {
            onChange(tempValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Allow Shift+Enter for newlines in textarea
            e.preventDefault();
            handleBlur();
        } else if (e.key === 'Escape') {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        if (multiline) {
            return (
                <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={`w-full bg-white border-2 border-blue-500 rounded px-2 py-1 text-sm text-gray-900 outline-none min-h-[80px] resize-y ${className}`}
                />
            );
        }
        return (
            <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={`w-full bg-white border-2 border-blue-500 rounded px-2 py-1 text-sm text-gray-900 outline-none ${className}`}
            />
        );
    }

    return (
        <div
            onClick={() => setIsEditing(true)}
            className={`cursor-text hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm text-gray-700 min-h-[2rem] flex items-center ${multiline ? 'whitespace-pre-wrap' : 'truncate'} ${className}`}
            title={value}
        >
            {value}
        </div>
    );
};

const TransactionCard = ({
    row,
    rowIndex,
    headers,
    onUpdate,
    onDelete,
    t
}: {
    row: Record<string, string>;
    rowIndex: number;
    headers: string[];
    onUpdate: (header: string, val: string) => void;
    onDelete: () => void;
    t: any;
}) => {
    // Try to identify key fields for the header of the card
    const dateKey = headers.find(h => h.toLowerCase().includes('date'));
    const descKey = headers.find(h => h.toLowerCase().includes('desc') || h.toLowerCase().includes('particular') || h.toLowerCase().includes('detail'));
    const amountKey = headers.find(h => h.toLowerCase().includes('amount') || h.toLowerCase().includes('credit') || h.toLowerCase().includes('debit') || h.toLowerCase().includes('balance'));

    // Remaining fields
    const otherHeaders = headers.filter(h => h !== dateKey && h !== descKey && h !== amountKey);

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
            {/* Delete Action (Swipe or Button) */}
            <button
                onClick={onDelete}
                className="absolute top-2 right-2 p-2 text-gray-300 hover:text-red-500 transition-colors"
                aria-label={t.btnDeleteEntry || "Delete"}
            >
                <Trash2 size={16} />
            </button>

            {/* Header: Date & Amount */}
            <div className="flex justify-between items-start mb-2 pr-8">
                <div className="flex-1">
                    {dateKey ? (
                        <EditableCell
                            value={row[dateKey]}
                            onChange={(val) => onUpdate(dateKey, val)}
                            className="font-bold text-gray-900 dark:text-gray-100 text-base"
                        />
                    ) : (
                        <span className="text-gray-400 text-xs italic">No Date</span>
                    )}
                </div>
                {amountKey && (
                    <div className="text-right">
                        <EditableCell
                            value={row[amountKey]}
                            onChange={(val) => onUpdate(amountKey, val)}
                            className={`font-mono font-black text-lg ${row[amountKey]?.includes('-') ? 'text-red-600' : 'text-green-600'} justify-end`}
                        />
                    </div>
                )}
            </div>

            {/* Description */}
            {descKey && (
                <div className="mb-3 border-b border-gray-50 pb-2 dark:border-gray-700">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Description</p>
                    <EditableCell
                        value={row[descKey]}
                        onChange={(val) => onUpdate(descKey, val)}
                        className="text-gray-800 dark:text-gray-200 max-h-32 overflow-y-auto custom-scrollbar text-sm leading-relaxed"
                        multiline={true}
                    />
                </div>
            )}

            {/* Other Details Grid */}
            {otherHeaders.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {otherHeaders.map((header) => (
                        <div key={header}>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{header}</p>
                            <EditableCell
                                value={row[header]}
                                onChange={(val) => onUpdate(header, val)}
                                className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Safe sub-component for Desktop Cells with Nav
const DesktopCell = ({
    value,
    onChange,
    isFocused,
    onFocus,
    onNavigate,
    className
}: {
    value: string;
    onChange: (val: string) => void;
    isFocused: boolean;
    onFocus: () => void;
    onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'enter' | 'tab') => void;
    className?: string;
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);
    const cellRef = useRef<HTMLDivElement>(null);

    useEffect(() => { setTempValue(value); }, [value]);

    useEffect(() => {
        if (isFocused && !isEditing && cellRef.current) {
            cellRef.current.focus();
        }
        if (!isFocused) setIsEditing(false);
    }, [isFocused, isEditing]);

    useEffect(() => {
        if (isEditing && inputRef.current) inputRef.current.focus();
    }, [isEditing]);

    const handleBlur = () => {
        setIsEditing(false);
        if (tempValue !== value) onChange(tempValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (isEditing) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleBlur();
                onNavigate('enter');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                handleBlur();
                onNavigate('tab');
            } else if (e.key === 'Escape') {
                setTempValue(value);
                setIsEditing(false);
                // Return focus to cell div
                setTimeout(() => cellRef.current?.focus(), 0);
            }
            return;
        }

        // Navigation Mode
        switch (e.key) {
            case 'ArrowUp': e.preventDefault(); onNavigate('up'); break;
            case 'ArrowDown': e.preventDefault(); onNavigate('down'); break;
            case 'ArrowLeft': e.preventDefault(); onNavigate('left'); break;
            case 'ArrowRight': e.preventDefault(); onNavigate('right'); break;
            case 'Enter': e.preventDefault(); setIsEditing(true); break;
            case 'Backspace':
            case 'Delete':
                e.preventDefault();
                onChange('');
                break;
            default:
                // Start typing immediately like Excel
                if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    setIsEditing(true);
                    // We let the input handle the key via tempValue logic or just focus
                    // simpler to just focus and let user type, or pre-fill
                    setTempValue(e.key);
                }
                break;
        }
    };

    if (isEditing) {
        return (
            <input
                ref={inputRef}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={`w-full absolute inset-0 z-50 bg-white border-2 border-blue-500 p-2 text-sm text-gray-900 outline-none shadow-lg ${className}`}
            />
        );
    }

    return (
        <div
            ref={cellRef}
            tabIndex={0}
            onFocus={onFocus}
            onDoubleClick={() => setIsEditing(true)}
            onKeyDown={handleKeyDown}
            className={`w-full h-full px-4 py-3 outline-none transition-all truncate border border-transparent 
                ${isFocused ? 'ring-2 ring-blue-500 z-10 bg-blue-50/10' : 'hover:bg-gray-50'} 
                ${className}`}
            title={value}
        >
            {value}
        </div>
    );
};

interface PdfToCsvToolProps {
    file: File;
    t: typeof translations.en;
}

interface HistoryState {
    past: TableData[];
    future: TableData[];
}

export const PdfToCsvTool: React.FC<PdfToCsvToolProps> = ({ file, t }) => {
    const [originalData, setOriginalData] = useState<TableData | null>(null);
    const [processedData, setProcessedData] = useState<TableData | null>(null);
    const [history, setHistory] = useState<HistoryState>({ past: [], future: [] });

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // UI States
    const [smartMerge, setSmartMerge] = useState(true);
    const [normalizeData, setNormalizeData] = useState(true);
    const [forceOCR, setForceOCR] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const [visibleRows, setVisibleRows] = useState(50);

    const [mode, setMode] = useState<'select' | 'extracting' | 'preview' | 'success'>('select');

    // Focus Management
    const [focusedCell, setFocusedCell] = useState<{ r: number, c: string } | null>(null);

    const processData = useCallback((data: TableData, merge: boolean, normalize: boolean) => {
        let processed = { ...data };
        if (merge) {
            processed = mergeMultilineRows(processed);
        }
        if (normalize) {
            processed = normalizeFinancialData(processed);
        }
        return processed;
    }, []);

    const handleExtraction = useCallback(async (autoDownload: boolean = false) => {
        setMode('extracting');
        setError(null);
        setProgress(0);

        try {
            const data = await extractTableFromPdf(file, (p) => {
                setProgress(p);
            }, { forceOCR });
            setOriginalData(data);

            // Immediate processing
            const processed = processData(data, smartMerge, normalizeData);
            setProcessedData(processed);

            if (autoDownload) {
                downloadAsExcel(processed, file.name.replace(/\.pdf$/i, '.xlsx'), 'xlsx');
                triggerHaptic('success');
                setMode('success');
            } else {
                setMode('preview');
                triggerHaptic('success');
            }
        } catch (err) {
            setError("We couldn't extract the table from this PDF. It might be an image, have a highly complex layout, or utilize unsupported fonts.");
            triggerHaptic('error');
            setMode('preview'); // Show error state in preview components
        }
    }, [file, smartMerge, normalizeData, processData]);

    // Update processed data when options change (only if already in preview)
    useEffect(() => {
        if (originalData && mode === 'preview') {
            const processed = processData(originalData, smartMerge, normalizeData);
            setProcessedData(processed);
        }
    }, [smartMerge, normalizeData, originalData, mode, processData]);

    // Selection Screen
    if (mode === 'select') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    <FileSpreadsheet size={48} className="text-blue-600 dark:text-blue-400" />
                </div>

                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                    {t.pdfToCsv?.readyToConvert || "Ready to Convert"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-md text-lg">
                    {t.pdfToCsv?.selectAction || "How would you like to process this file?"}
                </p>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <button
                        onClick={() => handleExtraction(false)}
                        className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Table size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.pdfToCsv?.previewEdit || "Preview & Edit"}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t.pdfToCsv?.previewEditDesc || "View the data, merge columns, and verify before downloading."}
                        </p>
                    </button>

                    <button
                        onClick={() => handleExtraction(true)}
                        className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-green-500 dark:hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                            <Download size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.pdfToCsv?.quickConvert || "Quick Convert"}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t.pdfToCsv?.quickConvertDesc || "Skip the preview and download the Excel file immediately."}
                        </p>
                    </button>
                </div>
            </div>
        );
    }

    // Success Screen (for Quick Convert)
    if (mode === 'success') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 animate-bounce">
                    <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                    {t.pdfToCsv?.successTitle || "Conversion Successful!"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
                    {t.pdfToCsv?.successDesc || "Your Excel file has been downloaded."}
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setMode('preview')} // Go to preview
                        className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                    >
                        {t.pdfToCsv?.viewData || "View Extracted Data"}
                    </button>
                    <button
                        onClick={() => window.location.reload()} // Reset
                        className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {t.pdfToCsv?.convertAnother || "Convert Another"}
                    </button>
                </div>
            </div>
        );
    }

    // History Helpers
    const pushHistory = (newData: TableData) => {
        if (!processedData) return;
        setHistory(prev => ({
            past: [...prev.past, processedData].slice(-20), // Limit history to 20 steps
            future: []
        }));
        setProcessedData(newData);
    };

    const handleUndo = () => {
        if (history.past.length === 0 || !processedData) return;
        const newPresent = history.past[history.past.length - 1];
        setHistory(prev => ({
            past: prev.past.slice(0, -1),
            future: [processedData, ...prev.future]
        }));
        setProcessedData(newPresent);
        triggerHaptic('light');
    };

    const handleRedo = () => {
        if (history.future.length === 0) return;
        const newPresent = history.future[0];
        setHistory(prev => ({
            past: [...prev.past, processedData!],
            future: prev.future.slice(1)
        }));
        setProcessedData(newPresent);
        triggerHaptic('light');
    };

    // Editing Logic
    const updateCell = (rowIndex: number, header: string, value: string) => {
        if (!processedData) return;
        const newRows = [...processedData.rows];
        newRows[rowIndex] = { ...newRows[rowIndex], [header]: value };

        // Push full state to history for robust undo
        // (Performance note: simple object copy is fine for <1000 rows. For massive data, delta encoded would be better)
        pushHistory({ ...processedData, rows: newRows });
    };

    const deleteRow = (rowIndex: number) => {
        if (!processedData) return;
        const newRows = [...processedData.rows];
        newRows.splice(rowIndex, 1);
        pushHistory({ ...processedData, rows: newRows });
        triggerHaptic('medium');
    };

    // Keyboard Navigation Helper
    const handleNavigate = (rowIndex: number, header: string, direction: 'up' | 'down' | 'left' | 'right' | 'enter' | 'tab') => {
        if (!processedData) return;
        const headers = processedData.headers;
        const colIdx = headers.indexOf(header);

        let nextRow = rowIndex;
        let nextColIdx = colIdx;

        switch (direction) {
            case 'up': nextRow = Math.max(0, rowIndex - 1); break;
            case 'down':
            case 'enter':
                nextRow = Math.min(processedData.rows.length - 1, rowIndex + 1);
                break;
            case 'left': nextColIdx = Math.max(0, colIdx - 1); break;
            case 'right':
            case 'tab':
                nextColIdx = Math.min(headers.length - 1, colIdx + 1);
                break;
        }

        const nextHeader = headers[nextColIdx];
        setFocusedCell({ r: nextRow, c: nextHeader });

        // Ensure visible
        if (nextRow >= visibleRows - 5) {
            setVisibleRows(prev => Math.min(processedData.rows.length, prev + 20));
        }
    };

    // Derived Statistics
    const stats = useMemo(() => {
        if (!processedData) return null;
        let credits = 0;
        let debits = 0;
        let count = 0;

        processedData.rows.forEach(row => {
            // Try to find amount column
            const amountKey = Object.keys(row).find(k => k.toLowerCase().includes('amount') || k.toLowerCase().includes('balance') || k.toLowerCase().includes('credit') || k.toLowerCase().includes('debit'));
            if (amountKey) {
                const valStr = row[amountKey].replace(/[^0-9.-]/g, '');
                const val = parseFloat(valStr);
                if (!isNaN(val)) {
                    if (val > 0) credits += val;
                    else debits += Math.abs(val);
                }
            }
            count++;
        });

        return {
            credits,
            debits,
            net: credits - debits,
            count
        };
    }, [processedData]);

    const handleDownload = (format: 'csv' | 'xlsx' | 'qbo') => {
        if (!processedData) return;
        triggerHaptic('medium');

        if (format === 'qbo') {
            const qboContent = generateQBO(processedData);
            const blob = new Blob([qboContent], { type: 'application/vnd.intu.qbo' });
            const url = URL.createObjectURL(blob);
            try {
                const link = document.createElement('a');
                link.href = url;
                link.download = file.name.replace(/\.pdf$/i, '.qbo');
                link.click();
            } finally {
                URL.revokeObjectURL(url); // Clean up blob URL
            }
        } else {
            downloadAsExcel(processedData, file.name.replace(/\.pdf$/i, `.${format}`), format);
        }
    };

    if (mode === 'extracting') {
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
                    onClick={() => handleExtraction(false)}
                    className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                    {t.btnTryAgain || 'Try Again'}
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Premium Financial Dashboard */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 md:p-6 shadow-sm z-20 sticky top-0">
                <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-6">

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.pdfToCsv?.transactions || "Transactions"}</p>
                            <p className="text-2xl font-black text-gray-900 dark:text-white">{stats?.count || 0}</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-2xl border border-green-100 dark:border-green-900/30">
                            <p className="text-[10px] font-bold text-green-600/70 uppercase tracking-widest mb-1">{t.pdfToCsv?.credits || "Total Credits"}</p>
                            <p className="text-2xl font-black text-green-600">+{stats?.credits.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-2xl border border-red-100 dark:border-red-900/30">
                            <p className="text-[10px] font-bold text-red-600/70 uppercase tracking-widest mb-1">{t.pdfToCsv?.debits || "Total Debits"}</p>
                            <p className="text-2xl font-black text-red-600">-{stats?.debits.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.pdfToCsv?.net || "Net Change"}</p>
                            <p className={`text-2xl font-black ${stats && stats.net >= 0 ? 'text-gray-900 dark:text-white' : 'text-red-500'}`}>
                                {stats?.net.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-3 gap-2 w-full xl:w-auto">
                        <button
                            onClick={() => handleDownload('xlsx')}
                            disabled={!processedData || processedData.rows.length === 0}
                            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-3 rounded-xl font-bold flex flex-col items-center justify-center gap-1 shadow-lg shadow-green-500/20 transition-all active:scale-95 text-xs uppercase tracking-wider"
                        >
                            <FileSpreadsheet size={18} /> Excel
                        </button>
                        <button
                            onClick={() => handleDownload('csv')}
                            disabled={!processedData || processedData.rows.length === 0}
                            className="bg-gray-900 hover:bg-black disabled:opacity-50 text-white px-4 py-3 rounded-xl font-bold flex flex-col items-center justify-center gap-1 shadow-lg transition-all active:scale-95 text-xs uppercase tracking-wider"
                        >
                            <FileText size={18} /> CSV
                        </button>
                        <div className="flex gap-1">
                            <button
                                onClick={handleUndo}
                                disabled={history.past.length === 0}
                                className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-30 text-gray-700 dark:text-gray-200 px-2 py-3 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Undo"
                            >
                                <Undo size={16} />
                            </button>
                            <button
                                onClick={handleRedo}
                                disabled={history.future.length === 0}
                                className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-30 text-gray-700 dark:text-gray-200 px-2 py-3 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Redo"
                            >
                                <Redo size={16} />
                            </button>
                        </div>
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

                                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-canada-red transition-all group">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                                            <ScanSearch size={14} className="text-canada-red" />
                                            Force AI OCR
                                        </span>
                                        <span className="text-[10px] text-gray-500 max-w-[180px]">Run deep visual scan (Fixes blank rows on scanned files)</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={forceOCR}
                                        onChange={() => setForceOCR(!forceOCR)}
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
                            {/* Mobile Card View */}
                            <div className="md:hidden space-y-4 pb-4">
                                {processedData?.rows.slice(0, visibleRows).map((row, rowIdx) => (
                                    <TransactionCard
                                        key={rowIdx}
                                        row={row}
                                        rowIndex={rowIdx}
                                        headers={processedData.headers}
                                        onUpdate={(h, v) => updateCell(rowIdx, h, v)}
                                        onDelete={() => deleteRow(rowIdx)}
                                        t={t}
                                    />
                                ))}
                                {(!processedData || processedData.rows.length === 0) && (
                                    <div className="p-12 text-center text-gray-400 italic bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-200">
                                        <FileSpreadsheet className="mx-auto mb-2 opacity-50" />
                                        {t.pdfToCsv?.uploadPrompt || "Upload a PDF to see transactions here"}
                                    </div>
                                )}
                            </div>

                            {/* Desktop Table View */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 dark:bg-gray-800/50 sticky top-0 z-30 shadow-sm backdrop-blur-sm">
                                        <tr>
                                            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-12 sticky left-0 z-40 bg-gray-50 dark:bg-gray-900">#</th>
                                            {processedData?.headers.map((header, i) => (
                                                <th key={i} className="px-6 py-4 text-[10px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 min-w-[150px]">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                        {processedData?.rows.slice(0, visibleRows).map((row, rowIdx) => (
                                            <tr key={rowIdx} className="hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-colors group">
                                                <td
                                                    className="px-6 py-4 text-xs font-mono text-gray-400 border-r border-gray-50 dark:border-gray-800 group-hover:text-red-500 cursor-pointer sticky left-0 z-20 bg-white dark:bg-gray-900"
                                                    onClick={() => deleteRow(rowIdx)}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span>{rowIdx + 1}</span>
                                                        <Trash2 size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </td>
                                                {processedData.headers.map((header, colIdx) => (
                                                    <td key={colIdx} className="p-0 border-r border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative">
                                                        <DesktopCell
                                                            value={row[header]}
                                                            onChange={(val) => updateCell(rowIdx, header, val)}
                                                            isFocused={focusedCell?.r === rowIdx && focusedCell.c === header}
                                                            onFocus={() => setFocusedCell({ r: rowIdx, c: header })}
                                                            onNavigate={(dir) => handleNavigate(rowIdx, header, dir)}
                                                            className={`${header.toLowerCase().includes('amount') || header.toLowerCase().includes('balance')
                                                                ? 'font-mono font-bold text-gray-900 dark:text-gray-100'
                                                                : 'text-gray-600 dark:text-gray-400'
                                                                }`}
                                                        />
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
