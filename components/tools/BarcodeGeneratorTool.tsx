'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Barcode, Download, Copy, Check, Loader2, FileSpreadsheet, Plus, Trash2, Settings, Grid3x3, FileImage, FileText as FilePdf } from 'lucide-react';
import { triggerHaptic } from '@/utils/haptics';
import JsBarcode from 'jsbarcode';
import { PDFDocument, rgb } from 'pdf-lib';

interface BarcodeItem {
    id: string;
    text: string;
    title1?: string;
    title2?: string;
    footer?: string;
    printQty?: number;
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
    const [sequenceTitle1, setSequenceTitle1] = useState<string>('');
    const [sequenceTitle2, setSequenceTitle2] = useState<string>('');
    const [sequenceFooter, setSequenceFooter] = useState<string>('');
    const [sequenceStep, setSequenceStep] = useState<string>('1');
    const [sequenceRepeat, setSequenceRepeat] = useState<string>('1');

    // Label configuration for printing
    const [showLabelConfig, setShowLabelConfig] = useState(false);
    const [labelColumns, setLabelColumns] = useState<number>(3);
    const [labelRows, setLabelRows] = useState<number>(8);
    const [pageTopMargin, setPageTopMargin] = useState<number>(1.27);
    const [pageLeftMargin, setPageLeftMargin] = useState<number>(0.90);
    const [labelTopMargin, setLabelTopMargin] = useState<number>(0);
    const [labelLeftMargin, setLabelLeftMargin] = useState<number>(0);
    const [rowSpacing, setRowSpacing] = useState<number>(0.37);
    const [columnSpacing, setColumnSpacing] = useState<number>(0.90);
    const [paperWidth, setPaperWidth] = useState<number>(21.59); // Letter size in cm
    const [paperHeight, setPaperHeight] = useState<number>(27.94);

    const canvasRefs = useRef<{ [key: string]: HTMLCanvasElement }>({});
    const [copiedId, setCopiedId] = useState<string | null>(null);

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
                const items: BarcodeItem[] = lines.slice(1).map((line, idx) => {
                    const columns = line.split(',').map(c => c.trim());
                    return {
                        id: `${idx + 1}`,
                        text: columns[0] || '',
                        printQty: columns[1] ? parseInt(columns[1]) : 1,
                        title1: columns[2] || '',
                        title2: columns[3] || '',
                        footer: columns[4] || '',
                    };
                });
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
                        const barcodeValue = row.getCell(1).value?.toString().trim();
                        if (barcodeValue) {
                            items.push({
                                id: `${rowNumber - 1}`,
                                text: barcodeValue,
                                printQty: parseInt(row.getCell(2).value?.toString() || '1'),
                                title1: row.getCell(3).value?.toString().trim() || '',
                                title2: row.getCell(4).value?.toString().trim() || '',
                                footer: row.getCell(5).value?.toString().trim() || '',
                            });
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

    const updateBarcodeItem = (id: string, field: keyof BarcodeItem, value: any) => {
        setBarcodeItems(barcodeItems.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const generateSequence = () => {
        const start = parseInt(sequenceStart);
        const end = parseInt(sequenceEnd);
        const step = parseInt(sequenceStep) || 1;
        const repeat = parseInt(sequenceRepeat) || 1;

        if (isNaN(start) || isNaN(end) || start > end) {
            alert('Please enter valid start and end numbers (start ≤ end)');
            return;
        }

        if (step <= 0) {
            alert('Step must be greater than 0');
            return;
        }

        const items: BarcodeItem[] = [];
        for (let i = start; i <= end; i += step) {
            // Generate 'repeat' copies of each barcode
            for (let r = 0; r < repeat; r++) {
                const paddedNumber = String(i).padStart(sequenceStart.length, '0');
                items.push({
                    id: `${i}-${r}`,
                    text: `${sequencePrefix}${paddedNumber}${sequenceSuffix}`,
                    title1: sequenceTitle1,
                    title2: sequenceTitle2,
                    footer: sequenceFooter,
                    printQty: 1
                });
            }
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

            // Convert cm to points (1 cm = 28.35 points)
            const cmToPoints = (cm: number) => cm * 28.35;

            const pageWidthPt = cmToPoints(paperWidth);
            const pageHeightPt = cmToPoints(paperHeight);
            const topMarginPt = cmToPoints(pageTopMargin);
            const leftMarginPt = cmToPoints(pageLeftMargin);
            const rowSpacingPt = cmToPoints(rowSpacing);
            const columnSpacingPt = cmToPoints(columnSpacing);

            // Calculate label dimensions
            const availableWidth = pageWidthPt - (2 * leftMarginPt) - ((labelColumns - 1) * columnSpacingPt);
            const availableHeight = pageHeightPt - (2 * topMarginPt) - ((labelRows - 1) * rowSpacingPt);
            const labelWidth = availableWidth / labelColumns;
            const labelHeight = availableHeight / labelRows;

            let currentPage = pdfDoc.addPage([pageWidthPt, pageHeightPt]);
            let currentRow = 0;
            let currentCol = 0;

            // Expand items based on printQty
            const expandedItems: BarcodeItem[] = [];
            validItems.forEach(item => {
                const qty = item.printQty || 1;
                for (let i = 0; i < qty; i++) {
                    expandedItems.push(item);
                }
            });

            for (const item of expandedItems) {
                // Generate barcode image
                const canvas = document.createElement('canvas');
                const tempId = `temp-${item.id}`;
                canvasRefs.current[tempId] = canvas;

                const success = generateBarcode(item.text, tempId);
                if (!success) continue;

                const imgData = canvas.toDataURL('image/png');
                const pngImage = await pdfDoc.embedPng(imgData);

                // Calculate position on page
                const x = leftMarginPt + (currentCol * (labelWidth + columnSpacingPt)) + cmToPoints(labelLeftMargin);
                const y = pageHeightPt - topMarginPt - (currentRow + 1) * (labelHeight + rowSpacingPt) + cmToPoints(labelTopMargin);

                // Scale barcode to fit label
                const barcodeMaxWidth = labelWidth - (2 * cmToPoints(labelLeftMargin));
                const barcodeMaxHeight = labelHeight * 0.6; // Reserve space for titles/footer
                const scale = Math.min(barcodeMaxWidth / canvas.width, barcodeMaxHeight / canvas.height);
                const barcodeWidth = canvas.width * scale;
                const barcodeHeight = canvas.height * scale;

                // Center barcode in label
                const barcodeX = x + (labelWidth - barcodeWidth) / 2;
                let currentY = y + labelHeight - barcodeHeight - 20;

                // Draw titles above barcode
                if (item.title1) {
                    currentPage.drawText(item.title1, {
                        x: x + labelWidth / 2 - (item.title1.length * 3),
                        y: currentY + barcodeHeight + 25,
                        size: 10,
                        color: rgb(0, 0, 0),
                    });
                }
                if (item.title2) {
                    currentPage.drawText(item.title2, {
                        x: x + labelWidth / 2 - (item.title2.length * 3),
                        y: currentY + barcodeHeight + 12,
                        size: 8,
                        color: rgb(0, 0, 0),
                    });
                }

                // Draw barcode
                currentPage.drawImage(pngImage, {
                    x: barcodeX,
                    y: currentY,
                    width: barcodeWidth,
                    height: barcodeHeight,
                });

                // Draw footer below barcode
                if (item.footer) {
                    currentPage.drawText(item.footer, {
                        x: x + labelWidth / 2 - (item.footer.length * 3),
                        y: currentY - 15,
                        size: 8,
                        color: rgb(0, 0, 0),
                    });
                }

                delete canvasRefs.current[tempId];

                // Move to next position
                currentCol++;
                if (currentCol >= labelColumns) {
                    currentCol = 0;
                    currentRow++;
                }

                // Create new page if needed
                if (currentRow >= labelRows) {
                    currentPage = pdfDoc.addPage([pageWidthPt, pageHeightPt]);
                    currentRow = 0;
                    currentCol = 0;
                }
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `barcodes-labels-${expandedItems.length}.pdf`;
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
            <div className="mb-6 flex gap-4">
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
                            <label className="block text-sm font-medium mb-1">Seq From *</label>
                            <input
                                type="text"
                                value={sequenceStart}
                                onChange={(e) => setSequenceStart(e.target.value)}
                                placeholder="01"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Seq To *</label>
                            <input
                                type="text"
                                value={sequenceEnd}
                                onChange={(e) => setSequenceEnd(e.target.value)}
                                placeholder="16"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Prefix Code (Optional)</label>
                            <input
                                type="text"
                                value={sequencePrefix}
                                onChange={(e) => setSequencePrefix(e.target.value)}
                                placeholder="e.g., 3212345"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Suffix Code (Optional)</label>
                            <input
                                type="text"
                                value={sequenceSuffix}
                                onChange={(e) => setSequenceSuffix(e.target.value)}
                                placeholder="e.g., B"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Barcode Title 1 (Optional)</label>
                            <input
                                type="text"
                                value={sequenceTitle1}
                                onChange={(e) => setSequenceTitle1(e.target.value)}
                                placeholder="Title A01"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Barcode Title 2 (Optional)</label>
                            <input
                                type="text"
                                value={sequenceTitle2}
                                onChange={(e) => setSequenceTitle2(e.target.value)}
                                placeholder="Title B01"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Step</label>
                            <input
                                type="number"
                                value={sequenceStep}
                                onChange={(e) => setSequenceStep(e.target.value)}
                                placeholder="1"
                                min="1"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Repeat</label>
                            <input
                                type="number"
                                value={sequenceRepeat}
                                onChange={(e) => setSequenceRepeat(e.target.value)}
                                placeholder="1"
                                min="1"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium mb-1">Barcode Footer (Optional)</label>
                            <input
                                type="text"
                                value={sequenceFooter}
                                onChange={(e) => setSequenceFooter(e.target.value)}
                                placeholder="Footer text"
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
                        Example: Prefix "3212345" + Numbers 01-16 (Step 1, Repeat 1) + Suffix "B" = 321234501B, 321234502B, ... 321234516B
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

            {/* Label Configuration Panel */}
            <div className="bg-white border rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Print Label Settings
                    </h3>
                    <button
                        onClick={() => setShowLabelConfig(!showLabelConfig)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm font-medium"
                    >
                        {showLabelConfig ? 'Hide' : 'Show'} Settings
                    </button>
                </div>

                {showLabelConfig && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Columns</label>
                            <input
                                type="number"
                                value={labelColumns}
                                onChange={(e) => setLabelColumns(parseInt(e.target.value))}
                                min="1"
                                max="10"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Rows</label>
                            <input
                                type="number"
                                value={labelRows}
                                onChange={(e) => setLabelRows(parseInt(e.target.value))}
                                min="1"
                                max="20"
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Paper Width (cm)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={paperWidth}
                                onChange={(e) => setPaperWidth(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Paper Height (cm)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={paperHeight}
                                onChange={(e) => setPaperHeight(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Page Top Margin (cm)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={pageTopMargin}
                                onChange={(e) => setPageTopMargin(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Page Left Margin (cm)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={pageLeftMargin}
                                onChange={(e) => setPageLeftMargin(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Row Spacing (cm)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={rowSpacing}
                                onChange={(e) => setRowSpacing(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Column Spacing (cm)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={columnSpacing}
                                onChange={(e) => setColumnSpacing(parseFloat(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2 lg:col-span-4 mt-2 p-3 bg-blue-50 rounded border border-blue-100">
                            <p className="text-xs text-gray-600">
                                <strong>Current Layout:</strong> {labelColumns} columns × {labelRows} rows = {labelColumns * labelRows} labels per page
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Barcode Items */}
            <div className="space-y-4 mb-6">
                {barcodeItems.map((item, index) => (
                    <div key={item.id} className="bg-white border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-medium mb-1 text-gray-600">Barcode Value *</label>
                                        <div className="flex gap-2">
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
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium mb-1 text-gray-600">Title 1 (Optional)</label>
                                        <input
                                            type="text"
                                            value={item.title1 || ''}
                                            onChange={(e) => updateBarcodeItem(item.id, 'title1', e.target.value)}
                                            placeholder="e.g., Title A01"
                                            className="w-full border rounded px-3 py-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium mb-1 text-gray-600">Title 2 (Optional)</label>
                                        <input
                                            type="text"
                                            value={item.title2 || ''}
                                            onChange={(e) => updateBarcodeItem(item.id, 'title2', e.target.value)}
                                            placeholder="e.g., Title B01"
                                            className="w-full border rounded px-3 py-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium mb-1 text-gray-600">Footer (Optional)</label>
                                        <input
                                            type="text"
                                            value={item.footer || ''}
                                            onChange={(e) => updateBarcodeItem(item.id, 'footer', e.target.value)}
                                            placeholder="Footer text"
                                            className="w-full border rounded px-3 py-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium mb-1 text-gray-600">Print Qty</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.printQty || 1}
                                            onChange={(e) => updateBarcodeItem(item.id, 'printQty', parseInt(e.target.value))}
                                            className="w-full border rounded px-3 py-2"
                                        />
                                    </div>
                                </div>
                                {item.text && (
                                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded">
                                        {item.title1 && (
                                            <div className="text-sm font-semibold text-gray-900 mb-1">{item.title1}</div>
                                        )}
                                        {item.title2 && (
                                            <div className="text-xs font-medium text-gray-700 mb-2">{item.title2}</div>
                                        )}
                                        <canvas
                                            ref={(el) => {
                                                if (el) {
                                                    canvasRefs.current[item.id] = el;
                                                    generateBarcode(item.text, item.id);
                                                }
                                            }}
                                        />
                                        {item.footer && (
                                            <div className="text-xs text-gray-600 mt-2">{item.footer}</div>
                                        )}
                                        {item.printQty && item.printQty > 1 && (
                                            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-2 font-medium">
                                                Print Qty: {item.printQty}
                                            </div>
                                        )}
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
