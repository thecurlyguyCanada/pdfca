'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Barcode, Download, Copy, Check, Loader2, FileSpreadsheet, Plus, Trash2, Settings, Grid3x3, FileImage, FileText as FilePdf } from 'lucide-react';
import { triggerHaptic } from '@/utils/haptics';
import JsBarcode from 'jsbarcode';
import { PDFDocument, rgb } from 'pdf-lib';

interface BarcodeItem {
    id: string;
    text: string;
    error?: string;
}

interface BarcodeGeneratorToolProps {
    file?: File;
    t: any; // Translations
}

type BarcodeFormat = 'CODE128' | 'CODE128A' | 'CODE128B' | 'CODE128C';
type ExportFormat = 'PNG' | 'SVG' | 'PDF';

export const BarcodeGeneratorTool: React.FC<BarcodeGeneratorToolProps> = ({ file, t }) => {
    const [barcodeItems, setBarcodeItems] = useState<BarcodeItem[]>([
        { id: '1', text: '' }
    ]);
    const [format, setFormat] = useState<BarcodeFormat>('CODE128');
    const [width, setWidth] = useState<number>(2);
    const [height, setHeight] = useState<number>(100);
    const [displayValue, setDisplayValue] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(20);
    const [textMargin, setTextMargin] = useState<number>(2);
    const [background, setBackground] = useState<string>('#FFFFFF');
    const [lineColor, setLineColor] = useState<string>('#000000');
    const [exportFormat, setExportFormat] = useState<ExportFormat>('PNG');
    const [isGenerating, setIsGenerating] = useState(false);
    const [bulkMode, setBulkMode] = useState(false);
    const [sequenceStart, setSequenceStart] = useState<string>('');
    const [sequenceEnd, setSequenceEnd] = useState<string>('');
    const [sequencePrefix, setSequencePrefix] = useState<string>('');
    const [sequenceSuffix, setSequenceSuffix] = useState<string>('');
    const canvasRefs = useRef<{ [key: string]: HTMLCanvasElement }>({});
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Parse Excel/CSV file if provided
    useEffect(() => {
        if (file) {
            parseUploadedFile(file);
        }
    }, [file]);

    const parseUploadedFile = async (file: File) => {
        setIsGenerating(true);
        try {
            if (file.name.endsWith('.csv')) {
                const text = await file.text();
                const lines = text.split('\n').filter(line => line.trim());
                const items: BarcodeItem[] = lines.map((line, idx) => ({
                    id: `${idx + 1}`,
                    text: line.split(',')[0].trim() // First column
                }));
                setBarcodeItems(items.length > 0 ? items : [{ id: '1', text: '' }]);
            } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                const ExcelJS = (await import('exceljs')).default;
                const workbook = new ExcelJS.Workbook();
                const arrayBuffer = await file.arrayBuffer();
                await workbook.xlsx.load(arrayBuffer);
                const worksheet = workbook.worksheets[0];
                const items: BarcodeItem[] = [];

                worksheet.eachRow((row, rowNumber) => {
                    if (rowNumber > 1) { // Skip header
                        const firstCell = row.getCell(1);
                        const value = firstCell.value?.toString().trim();
                        if (value) {
                            items.push({ id: `${rowNumber - 1}`, text: value });
                        }
                    }
                });
                setBarcodeItems(items.length > 0 ? items : [{ id: '1', text: '' }]);
            }
            triggerHaptic('success');
        } catch (err) {
            console.error('File parsing error:', err);
            alert('Failed to parse file. Please check the format.');
            triggerHaptic('error');
        } finally {
            setIsGenerating(false);
        }
    };

    const validateBarcodeText = (text: string, format: BarcodeFormat): boolean => {
        if (!text) return false;

        switch (format) {
            case 'CODE128':
                // Can encode all 128 ASCII characters
                return /^[\x00-\x7F]+$/.test(text);
            case 'CODE128A':
                // Uppercase letters and control characters
                return /^[A-Z0-9 \-\.\/\+\%\$]+$/.test(text);
            case 'CODE128B':
                // Upper and lowercase letters
                return /^[\x20-\x7F]+$/.test(text);
            case 'CODE128C':
                // Numeric only (pairs of digits)
                return /^[0-9]+$/.test(text) && text.length % 2 === 0;
            default:
                return true;
        }
    };

    const generateBarcode = (text: string, canvasId: string): boolean => {
        if (!text) return false;

        const canvas = canvasRefs.current[canvasId];
        if (!canvas) return false;

        try {
            JsBarcode(canvas, text, {
                format: format,
                width: width,
                height: height,
                displayValue: displayValue,
                fontSize: fontSize,
                textMargin: textMargin,
                background: background,
                lineColor: lineColor,
                margin: 10,
            });
            return true;
        } catch (err) {
            console.error('Barcode generation error:', err);
            return false;
        }
    };

    const addBarcodeItem = () => {
        const newId = `${Date.now()}`;
        setBarcodeItems([...barcodeItems, { id: newId, text: '' }]);
    };

    const removeBarcodeItem = (id: string) => {
        if (barcodeItems.length > 1) {
            setBarcodeItems(barcodeItems.filter(item => item.id !== id));
        }
    };

    const updateBarcodeText = (id: string, text: string) => {
        setBarcodeItems(barcodeItems.map(item =>
            item.id === id ? { ...item, text, error: undefined } : item
        ));
    };

    const generateSequence = () => {
        const start = parseInt(sequenceStart);
        const end = parseInt(sequenceEnd);

        if (isNaN(start) || isNaN(end) || start > end) {
            alert('Please enter valid start and end numbers (start ≤ end)');
            return;
        }

        const items: BarcodeItem[] = [];
        for (let i = start; i <= end; i++) {
            items.push({
                id: `${i}`,
                text: `${sequencePrefix}${i}${sequenceSuffix}`
            });
        }
        setBarcodeItems(items);
        setBulkMode(false);
        triggerHaptic('success');
    };

    const handleExportSingle = async (item: BarcodeItem) => {
        const canvas = canvasRefs.current[item.id];
        if (!canvas) return;

        const success = generateBarcode(item.text, item.id);
        if (!success) {
            alert('Failed to generate barcode. Please check the input.');
            return;
        }

        if (exportFormat === 'PNG') {
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `barcode-${item.text}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                }
            });
        } else if (exportFormat === 'SVG') {
            const svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            JsBarcode(svgCanvas, item.text, {
                format: format,
                width: width,
                height: height,
                displayValue: displayValue,
                fontSize: fontSize,
                textMargin: textMargin,
                background: background,
                lineColor: lineColor,
                margin: 10,
            });
            const svgData = new XMLSerializer().serializeToString(svgCanvas);
            const blob = new Blob([svgData], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `barcode-${item.text}.svg`;
            a.click();
            URL.revokeObjectURL(url);
        }
        triggerHaptic('success');
    };

    const handleExportAllPDF = async () => {
        setIsGenerating(true);
        try {
            const validItems = barcodeItems.filter(item => item.text.trim());
            if (validItems.length === 0) {
                alert('Please add at least one barcode');
                return;
            }

            const pdfDoc = await PDFDocument.create();

            for (const item of validItems) {
                const canvas = document.createElement('canvas');
                const tempId = `temp-${item.id}`;
                canvasRefs.current[tempId] = canvas;

                const success = generateBarcode(item.text, tempId);
                if (!success) continue;

                const imgData = canvas.toDataURL('image/png');
                const pngImage = await pdfDoc.embedPng(imgData);
                const page = pdfDoc.addPage([canvas.width + 40, canvas.height + 40]);

                page.drawImage(pngImage, {
                    x: 20,
                    y: 20,
                    width: canvas.width,
                    height: canvas.height,
                });

                delete canvasRefs.current[tempId];
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `barcodes-${validItems.length}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (err) {
            console.error('PDF export error:', err);
            alert('Failed to export PDF');
            triggerHaptic('error');
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = async (item: BarcodeItem) => {
        const canvas = canvasRefs.current[item.id];
        if (!canvas) return;

        generateBarcode(item.text, item.id);

        canvas.toBlob(async (blob) => {
            if (blob) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob })
                    ]);
                    setCopiedId(item.id);
                    setTimeout(() => setCopiedId(null), 2000);
                    triggerHaptic('light');
                } catch (err) {
                    console.error('Copy failed:', err);
                }
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 mb-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Barcode className="w-8 h-8" />
                    <h1 className="text-2xl sm:text-3xl font-bold">Code 128 Barcode Generator</h1>
                </div>
                <p className="text-blue-100">
                    Professional barcode generation with bulk support, multiple formats, and advanced customization
                </p>
            </div>

            {/* Bulk Mode Toggle */}
            <div className="mb-6 flex flex-wrap gap-4">
                <button
                    onClick={() => setBulkMode(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                        !bulkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    <Barcode className="w-5 h-5" />
                    Single/Manual
                </button>
                <button
                    onClick={() => setBulkMode(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                        bulkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    <Grid3x3 className="w-5 h-5" />
                    Bulk Generation
                </button>
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
                >
                    <FileSpreadsheet className="w-5 h-5" />
                    Upload Excel/CSV
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    className="hidden"
                    onChange={(e) => {
                        const uploadedFile = e.target.files?.[0];
                        if (uploadedFile) {
                            parseUploadedFile(uploadedFile);
                            setBulkMode(true);
                        }
                    }}
                />
            </div>

            {/* Bulk Sequence Generator */}
            {bulkMode && (
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Grid3x3 className="w-5 h-5" />
                        Generate Sequence
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Prefix (Optional)</label>
                            <input
                                type="text"
                                value={sequencePrefix}
                                onChange={(e) => setSequencePrefix(e.target.value)}
                                placeholder="e.g., BC"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Suffix (Optional)</label>
                            <input
                                type="text"
                                value={sequenceSuffix}
                                onChange={(e) => setSequenceSuffix(e.target.value)}
                                placeholder="e.g., -A"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Start Number *</label>
                            <input
                                type="number"
                                value={sequenceStart}
                                onChange={(e) => setSequenceStart(e.target.value)}
                                placeholder="1"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">End Number *</label>
                            <input
                                type="number"
                                value={sequenceEnd}
                                onChange={(e) => setSequenceEnd(e.target.value)}
                                placeholder="100"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    </div>
                    <button
                        onClick={generateSequence}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Generate Sequence
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                        Example: Prefix "BC" + Numbers 1-100 + Suffix "A" = BC1A, BC2A, ... BC100A
                    </p>
                </div>
            )}

            {/* Settings Panel */}
            <div className="bg-white border rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Barcode Settings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Format</label>
                        <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value as BarcodeFormat)}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="CODE128">CODE128 (Auto)</option>
                            <option value="CODE128A">CODE128A (Uppercase)</option>
                            <option value="CODE128B">CODE128B (Mixed Case)</option>
                            <option value="CODE128C">CODE128C (Numeric Only)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Bar Width: {width}px</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.5"
                            value={width}
                            onChange={(e) => setWidth(parseFloat(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Height: {height}px</label>
                        <input
                            type="range"
                            min="50"
                            max="200"
                            value={height}
                            onChange={(e) => setHeight(parseInt(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Font Size: {fontSize}px</label>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            value={fontSize}
                            onChange={(e) => setFontSize(parseInt(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Background Color</label>
                        <input
                            type="color"
                            value={background}
                            onChange={(e) => setBackground(e.target.value)}
                            className="w-full h-10 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Bar Color</label>
                        <input
                            type="color"
                            value={lineColor}
                            onChange={(e) => setLineColor(e.target.value)}
                            className="w-full h-10 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="displayValue"
                            checked={displayValue}
                            onChange={(e) => setDisplayValue(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="displayValue" className="text-sm font-medium">
                            Show Text Below Barcode
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Export Format</label>
                        <select
                            value={exportFormat}
                            onChange={(e) => setExportFormat(e.target.value as ExportFormat)}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="PNG">PNG Image</option>
                            <option value="SVG">SVG Vector</option>
                            <option value="PDF">PDF Document</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Barcode Items */}
            <div className="space-y-4 mb-6">
                {barcodeItems.map((item, index) => (
                    <div key={item.id} className="bg-white border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-1">
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        value={item.text}
                                        onChange={(e) => updateBarcodeText(item.id, e.target.value)}
                                        placeholder="Enter barcode data (e.g., BC123456789)"
                                        className="flex-1 border rounded px-3 py-2"
                                    />
                                    {!bulkMode && barcodeItems.length > 1 && (
                                        <button
                                            onClick={() => removeBarcodeItem(item.id)}
                                            className="px-3 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                                {item.text && (
                                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded">
                                        <canvas
                                            ref={(el) => {
                                                if (el) {
                                                    canvasRefs.current[item.id] = el;
                                                    generateBarcode(item.text, item.id);
                                                }
                                            }}
                                        />
                                        <div className="flex gap-2 mt-4">
                                            <button
                                                onClick={() => handleExportSingle(item)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                Download {exportFormat}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(item)}
                                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition flex items-center gap-2"
                                            >
                                                {copiedId === item.id ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                                {copiedId === item.id ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
                {!bulkMode && (
                    <button
                        onClick={addBarcodeItem}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Add Another Barcode
                    </button>
                )}
                {barcodeItems.length > 1 && exportFormat === 'PDF' && (
                    <button
                        onClick={handleExportAllPDF}
                        disabled={isGenerating}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50"
                    >
                        {isGenerating ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <FilePdf className="w-5 h-5" />
                        )}
                        Export All as PDF ({barcodeItems.filter(i => i.text).length} barcodes)
                    </button>
                )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h4 className="font-semibold mb-2">Code 128 Features:</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                    <li>• <strong>CODE128:</strong> Auto-selects best encoding for your data</li>
                    <li>• <strong>CODE128A:</strong> Uppercase letters and control characters</li>
                    <li>• <strong>CODE128B:</strong> Full ASCII (uppercase, lowercase, symbols)</li>
                    <li>• <strong>CODE128C:</strong> Numeric only (most compact for numbers)</li>
                    <li>• Bulk generation from sequences or Excel/CSV files</li>
                    <li>• Export as PNG, SVG, or multi-page PDF</li>
                    <li>• Customizable colors, sizes, and fonts</li>
                </ul>
            </div>
        </div>
    );
};
