'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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

    const parseUploadedFile = useCallback(async (f: File) => {
        setIsGenerating(true);
        try {
            if (f.name.endsWith('.csv')) {
                const text = await f.text();
                const lines = text.split('\n').filter(line => line.trim());
                const items: BarcodeItem[] = lines.map((line, idx) => ({
                    id: `${idx + 1}`,
                    text: line.split(',')[0].trim() // First column
                }));
                setBarcodeItems(items.length > 0 ? items : [{ id: '1', text: '' }]);
            } else if (f.name.endsWith('.xlsx') || f.name.endsWith('.xls')) {
                const ExcelJS = (await import('exceljs')).default;
                const workbook = new ExcelJS.Workbook();
                const arrayBuffer = await f.arrayBuffer();
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
            if (process.env.NODE_ENV === 'development') {
                console.error('File parsing error:', err);
            }
            alert(t.barcode?.errorFile || 'Failed to parse file. Please check the format.');
            triggerHaptic('error');
        } finally {
            setIsGenerating(false);
        }
    }, [t]);

    // Parse Excel/CSV file if provided
    useEffect(() => {
        if (file) {
            parseUploadedFile(file);
        }
    }, [file, parseUploadedFile]);

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
            if (process.env.NODE_ENV === 'development') {
                console.error('Barcode generation error:', err);
            }
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
            alert(t.barcode?.errorInvalid || 'Please enter valid start and end numbers (start ≤ end)');
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
            alert(t.barcode?.errorGenerate || 'Failed to generate barcode. Please check the input.');
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
                alert(t.barcode?.errorMinBarcodes || 'Please add at least one barcode');
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
            if (process.env.NODE_ENV === 'development') {
                console.error('PDF export error:', err);
            }
            alert(t.barcode?.errorExport || 'Failed to export PDF');
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
                    if (process.env.NODE_ENV === 'development') {
                        console.error('Copy failed:', err);
                    }
                }
            }
        });
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] dark:bg-gray-950 relative overflow-hidden">
            {/* Mesh Gradients Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-200/40 blur-[100px] animate-pulse" />
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200/40 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'SoftwareApplication',
                            name: 'Code 128 Barcode Generator',
                            applicationCategory: 'BusinessApplication',
                            offers: {
                                '@type': 'Offer',
                                price: '0',
                                priceCurrency: 'CAD'
                            },
                            operatingSystem: 'Web Browser',
                            description: 'Free online Code 128 barcode generator with bulk creation, multiple export formats (PNG, SVG, PDF), and advanced customization options',
                            featureList: [
                                'Generate Code 128, Code 128A, Code 128B, and Code 128C barcodes',
                                'Bulk barcode generation from sequences or Excel/CSV files',
                                'Export as PNG, SVG, or multi-page PDF',
                                'Customizable colors, sizes, and fonts',
                                '100% free with no watermarks'
                            ],
                            browserRequirements: 'Requires JavaScript. Works in Chrome, Firefox, Safari, Edge'
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'What is a Code 128 barcode?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Code 128 is a high-density linear barcode symbology that can encode all 128 ASCII characters. Developed in 1981, it\'s one of the most versatile 1D barcode formats available and is widely used in shipping, healthcare, retail, and manufacturing for its ability to store diverse data types efficiently.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Is this Code 128 barcode generator free to use?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes, our Code 128 barcode generator is completely free to use for personal and commercial purposes. You can generate unlimited barcodes, download them in multiple formats, and use them in your projects without any restrictions or watermarks.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'What file formats can I download the barcodes in?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Our generator supports three formats: PNG (raster image, great for digital use), SVG (vector format, scalable without quality loss, ideal for professional printing), and PDF (multi-page documents for bulk barcodes, perfect for printing multiple labels).'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Can I generate barcodes in bulk?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Absolutely! Switch to Bulk Generation mode to create multiple barcodes at once. You can generate sequential barcodes (e.g., 1-1000 with custom prefixes/suffixes) or upload an Excel/CSV file containing your barcode data. Export all barcodes as a single multi-page PDF for easy printing.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'What\'s the difference between Code 128, Code 128A, Code 128B, and Code 128C?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Code 128 (Auto) automatically selects the best character set for your data. Code 128A encodes uppercase letters, digits, and control characters. Code 128B encodes the full ASCII character set including upper/lowercase letters and symbols. Code 128C encodes only numeric pairs and is the most compact for number-only data.'
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Header */}
                <div className="relative mb-8 p-8 rounded-3xl overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-gray-800 shadow-xl shadow-indigo-500/5 group hover:shadow-indigo-500/10 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 text-white">
                                <Barcode className="w-10 h-10" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-2">
                                    {t.barcode?.title || 'Code 128 Barcode Generator'}
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                                    {t.barcode?.subtitle || 'Professional barcode generation with bulk support, multiple formats, and advanced customization'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex p-1 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    <button
                        onClick={() => setBulkMode(false)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${!bulkMode
                            ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-black/5'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                            }`}
                    >
                        <Barcode className="w-5 h-5" />
                        {t.barcode?.singleMode || 'Single/Manual'}
                    </button>
                    <button
                        onClick={() => setBulkMode(true)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${bulkMode
                            ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-black/5'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                            }`}
                    >
                        <Grid3x3 className="w-5 h-5" />
                        {t.barcode?.bulkMode || 'Bulk Generation'}
                    </button>
                </div>
            </div>

            {/* Bulk Sequence Generator */}
            {bulkMode && (
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-gray-800 rounded-3xl p-8 mb-8 shadow-xl shadow-gray-200/50 dark:shadow-black/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                            <Grid3x3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {t.barcode?.sequenceTitle || 'Generate Sequence'}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.prefixLabel || 'Prefix'}</label>
                            <input
                                type="text"
                                value={sequencePrefix}
                                onChange={(e) => setSequencePrefix(e.target.value)}
                                placeholder={t.barcode?.prefixPlaceholder || 'e.g., BC'}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.suffixLabel || 'Suffix'}</label>
                            <input
                                type="text"
                                value={sequenceSuffix}
                                onChange={(e) => setSequenceSuffix(e.target.value)}
                                placeholder={t.barcode?.suffixPlaceholder || 'e.g., -A'}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.startLabel || 'Start Number *'}</label>
                            <input
                                type="number"
                                value={sequenceStart}
                                onChange={(e) => setSequenceStart(e.target.value)}
                                placeholder={t.barcode?.startPlaceholder || '1'}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.endLabel || 'End Number *'}</label>
                            <input
                                type="number"
                                value={sequenceEnd}
                                onChange={(e) => setSequenceEnd(e.target.value)}
                                placeholder={t.barcode?.endPlaceholder || '100'}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>
                    </div>
                    <button
                        onClick={generateSequence}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        {t.barcode?.generateBtn || 'Generate Sequence'}
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                        {t.barcode?.sequenceExample || 'Example: Prefix "BC" + Numbers 1-100 + Suffix "A" = BC1A, BC2A, ... BC100A'}
                    </p>
                </div>
            )}

            {/* Settings Panel */}
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-gray-800 rounded-3xl p-8 mb-8 shadow-xl shadow-gray-200/50 dark:shadow-black/20">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-6 text-gray-900 dark:text-white">
                    <div className="p-2 bg-purple-100/50 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                        <Settings className="w-6 h-6" />
                    </div>
                    {t.barcode?.settingsTitle || 'Barcode Settings'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.formatLabel || 'Format'}</label>
                        <div className="relative">
                            <select
                                value={format}
                                onChange={(e) => setFormat(e.target.value as BarcodeFormat)}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-purple-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none appearance-none cursor-pointer"
                            >
                                <option value="CODE128">{t.barcode?.formatAuto || 'CODE128 (Auto)'}</option>
                                <option value="CODE128A">{t.barcode?.formatA || 'CODE128A (Uppercase)'}</option>
                                <option value="CODE128B">{t.barcode?.formatB || 'CODE128B (Mixed Case)'}</option>
                                <option value="CODE128C">{t.barcode?.formatC || 'CODE128C (Numeric Only)'}</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="barcode-width" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.widthLabel || 'Bar Width'}: {width}px</label>
                        <input
                            id="barcode-width"
                            type="range"
                            min="1"
                            max="5"
                            step="0.5"
                            value={width}
                            onChange={(e) => setWidth(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>
                    <div>
                        <label htmlFor="barcode-height" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.heightLabel || 'Height'}: {height}px</label>
                        <input
                            id="barcode-height"
                            type="range"
                            min="50"
                            max="200"
                            value={height}
                            onChange={(e) => setHeight(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>
                    <div>
                        <label htmlFor="barcode-fontsize" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.fontSizeLabel || 'Font Size'}: {fontSize}px</label>
                        <input
                            id="barcode-fontsize"
                            type="range"
                            min="10"
                            max="30"
                            value={fontSize}
                            onChange={(e) => setFontSize(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="barcode-bgcolor" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.bgColorLabel || 'Background Color'}</label>
                        <div className="flex items-center gap-3">
                            <input
                                id="barcode-bgcolor"
                                type="color"
                                value={background}
                                onChange={(e) => setBackground(e.target.value)}
                                className="w-12 h-12 rounded-xl border-2 border-white ring-1 ring-gray-200 cursor-pointer shadow-sm transition-transform active:scale-95"
                            />
                            <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">{background}</span>
                        </div>
                    </div>
                    <div className="group">
                        <label htmlFor="barcode-linecolor" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.barColorLabel || 'Bar Color'}</label>
                        <div className="flex items-center gap-3">
                            <input
                                id="barcode-linecolor"
                                type="color"
                                value={lineColor}
                                onChange={(e) => setLineColor(e.target.value)}
                                className="w-12 h-12 rounded-xl border-2 border-white ring-1 ring-gray-200 cursor-pointer shadow-sm transition-transform active:scale-95"
                            />
                            <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">{lineColor}</span>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50">
                        <input
                            type="checkbox"
                            id="displayValue"
                            checked={displayValue}
                            onChange={(e) => setDisplayValue(e.target.checked)}
                            className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 transition-colors cursor-pointer mr-3"
                        />
                        <label htmlFor="displayValue" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                            {t.barcode?.showTextLabel || 'Show Text Below Barcode'}
                        </label>
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">{t.barcode?.exportFormatLabel || 'Export Format'}</label>
                        <div className="relative">
                            <select
                                value={exportFormat}
                                onChange={(e) => setExportFormat(e.target.value as ExportFormat)}
                                className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-purple-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none appearance-none cursor-pointer"
                            >
                                <option value="PNG">{t.barcode?.exportPNG || 'PNG Image'}</option>
                                <option value="SVG">{t.barcode?.exportSVG || 'SVG Vector'}</option>
                                <option value="PDF">{t.barcode?.exportPDF || 'PDF Document'}</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barcode Items */}
            <div className="space-y-6 mb-8">
                {barcodeItems.map((item, index) => (
                    <div key={item.id} className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800 rounded-3xl p-6 shadow-xl shadow-gray-200/50 dark:shadow-black/20 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full flex-1">
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-1">
                                    {t.barcode?.inputLabel || `Barcode Data #${index + 1}`}
                                </label>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="relative flex-1 group/input">
                                        <input
                                            type="text"
                                            value={item.text}
                                            onChange={(e) => updateBarcodeText(item.id, e.target.value)}
                                            placeholder={t.barcode?.inputPlaceholder || 'Enter barcode data (e.g., BC123456789)'}
                                            aria-label={`Barcode data input ${index + 1}`}
                                            className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/50 rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-mono text-lg"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover/input:opacity-100 transition-opacity">
                                            <Barcode className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                    {!bulkMode && barcodeItems.length > 1 && (
                                        <button
                                            onClick={() => removeBarcodeItem(item.id)}
                                            aria-label={`Remove barcode ${index + 1}`}
                                            className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 hover:scale-105 active:scale-95 transition-all shadow-sm ring-1 ring-red-100 dark:ring-red-900/50"
                                        >
                                            <Trash2 className="w-6 h-6" />
                                        </button>
                                    )}
                                </div>
                                {item.text ? (
                                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center justify-center gap-6 group/canvas transition-colors hover:border-blue-300/50 dark:hover:border-blue-700/50">
                                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                                        <div className="relative z-10 p-4 bg-white rounded-lg shadow-sm">
                                            <canvas
                                                ref={(el) => {
                                                    if (el) {
                                                        canvasRefs.current[item.id] = el;
                                                        generateBarcode(item.text, item.id);
                                                    }
                                                }}
                                                className="max-w-full h-auto"
                                            />
                                        </div>

                                        <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 w-full sm:w-auto">
                                            <button
                                                onClick={() => handleExportSingle(item)}
                                                className="flex-1 sm:flex-none px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 hover:-translate-y-0.5 shadow-lg shadow-gray-200 dark:shadow-black/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                {t.barcode?.downloadBtn || 'Download'} {exportFormat}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(item)}
                                                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-medium border-2 transition-all flex items-center justify-center gap-2 ${copiedId === item.id
                                                    ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
                                                    : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                    }`}
                                            >
                                                {copiedId === item.id ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                                {copiedId === item.id ? (t.barcode?.copiedBtn || 'Copied!') : (t.barcode?.copyBtn || 'Copy')}
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-40 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-800/80 transition-colors">
                                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-3">
                                            <Barcode className="w-6 h-6 opacity-50" />
                                        </div>
                                        <p className="text-sm font-medium">Enter text to generate preview</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
                {!bulkMode && (
                    <button
                        onClick={addBarcodeItem}
                        className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl font-bold shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-lg hover:-translate-y-0.5 hover:ring-blue-400 transition-all duration-300"
                    >
                        <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <Plus className="w-5 h-5" />
                        </div>
                        {t.barcode?.addBtn || 'Add Another Barcode'}
                    </button>
                )}
                {barcodeItems.length > 1 && exportFormat === 'PDF' && (
                    <button
                        onClick={handleExportAllPDF}
                        disabled={isGenerating}
                        className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 transition-all duration-300 flex items-center gap-3"
                    >
                        {isGenerating ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <FilePdf className="w-5 h-5" />
                        )}
                        {t.barcode?.exportAllBtn || 'Export All as PDF'}
                        <span className="px-2 py-0.5 bg-white/20 rounded-lg text-sm">
                            {barcodeItems.filter(i => i.text).length}
                        </span>
                    </button>
                )}
            </div>

            {/* Info Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-l-4 border-blue-500 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                        <FileImage className="w-6 h-6" />
                    </div>
                    {t.barcode?.infoTitle || 'Code 128 Features:'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300"><strong>CODE128:</strong> {t.barcode?.infoAuto || 'Auto-selects best encoding'}</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300"><strong>CODE128A:</strong> {t.barcode?.infoA || 'Uppercase & control chars'}</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300"><strong>CODE128B:</strong> {t.barcode?.infoB || 'Full ASCII & lower/upper'}</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300"><strong>CODE128C:</strong> {t.barcode?.infoC || 'Numeric only (Compact)'}</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{t.barcode?.infoBulk || 'Bulk Seq / Excel Import'}</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{t.barcode?.infoExport || 'PNG, SVG, Multi-page PDF'}</span>
                    </div>
                </div>
            </div>

            {/* SEO Content Sections */}
            <div className="mt-8 space-y-8">
                {/* What is Code 128 */}
                <section className="bg-white border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Code 128 Barcode?</h2>
                    <p className="text-gray-700 mb-4">
                        Code 128 is a high-density linear barcode symbology defined in ISO/IEC 15417:2007 that can encode all 128 ASCII characters, including uppercase and lowercase letters, numbers, symbols, and control codes. Developed in 1981 by Computer Identics Corporation, Code 128 has become one of the most versatile and widely-used barcode formats in the world.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Unlike simpler barcode formats, Code 128 is structured into three character sets—Code 128A, Code 128B, and Code 128C—each optimized for different types of data. This unique structure allows Code 128 to automatically select the most efficient encoding method, making it ideal for applications requiring compact barcodes with diverse character requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-blue-50 p-4 rounded">
                            <h3 className="font-semibold mb-2 text-blue-900">Code 128A</h3>
                            <p className="text-sm text-gray-700">Uppercase letters, digits, and control characters. Ideal for industrial applications.</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded">
                            <h3 className="font-semibold mb-2 text-green-900">Code 128B</h3>
                            <p className="text-sm text-gray-700">Full ASCII including upper/lowercase letters and symbols. Perfect for general use.</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded">
                            <h3 className="font-semibold mb-2 text-purple-900">Code 128C</h3>
                            <p className="text-sm text-gray-700">Numeric pairs only. Most compact format for number-heavy data like serial numbers.</p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="bg-white border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Code 128 Barcode Use Cases & Applications</h2>
                    <p className="text-gray-700 mb-6">
                        Code 128 barcodes are used across numerous industries worldwide due to their versatility, high data density, and reliability. Here are the most common applications:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Shipping & Logistics</h3>
                            <p className="text-gray-700 text-sm">
                                Code 128 barcodes are essential in supply chain management for tracking shipping containers, packages, and pallets. They enable automated sorting, real-time tracking, and efficient delivery management. Major carriers like UPS, FedEx, and DHL rely on Code 128 for their shipment tracking systems.
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Healthcare & Pharmaceuticals</h3>
                            <p className="text-gray-700 text-sm">
                                Hospitals and medical facilities use Code 128 barcodes to track medications, medical equipment, and patient information. This helps minimize medication errors, verify patient identity, improve safety, and maintain accurate inventory of medical supplies and devices.
                            </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Retail & Inventory Management</h3>
                            <p className="text-gray-700 text-sm">
                                Retail stores utilize Code 128 for inventory control, stock level monitoring, product pricing, and faster checkout processes. The compact nature of Code 128 makes it perfect for labels on smaller items and allows retailers to encode detailed product information.
                            </p>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Manufacturing & Warehouse</h3>
                            <p className="text-gray-700 text-sm">
                                Manufacturing facilities use Code 128 for asset tracking, quality control, work-in-progress monitoring, and finished goods management. Warehouses rely on them for bin locations, picking operations, and inventory accuracy.
                            </p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Government & Document Management</h3>
                            <p className="text-gray-700 text-sm">
                                Government agencies use Code 128 for document tracking, public service identification, license management, and secure data encoding. The ability to encode diverse character sets makes it ideal for official documents.
                            </p>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-4">
                            <h3 className="font-semibold text-lg mb-2">Transportation & Ticketing</h3>
                            <p className="text-gray-700 text-sm">
                                Transportation systems use Code 128 for boarding passes, event tickets, parking permits, and access control. The high-density encoding allows storing passenger details, seat assignments, and validation codes efficiently.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How to Use */}
                <section className="bg-white border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Use This Code 128 Barcode Generator</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                            <div>
                                <h3 className="font-semibold mb-1">Choose Your Generation Mode</h3>
                                <p className="text-gray-700 text-sm">Select between <strong>Single/Manual</strong> mode for individual barcodes or <strong>Bulk Generation</strong> for creating multiple barcodes at once from sequences or uploaded files (CSV/Excel).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                            <div>
                                <h3 className="font-semibold mb-1">Configure Barcode Settings</h3>
                                <p className="text-gray-700 text-sm">Adjust format (CODE128/A/B/C), bar width, height, colors, and font size to match your requirements. The generator will auto-preview your changes in real-time.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                            <div>
                                <h3 className="font-semibold mb-1">Enter Your Barcode Data</h3>
                                <p className="text-gray-700 text-sm">Type or paste your data into the input field. The barcode will generate automatically as you type. For bulk mode, use the sequence generator or upload a file.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                            <div>
                                <h3 className="font-semibold mb-1">{t.barcode?.downloadTitle || 'Download or Copy'}</h3>
                                <p className="text-gray-700 text-sm">{t.barcode?.downloadDesc || 'Choose your export format (PNG, SVG, or PDF) and click Download. You can also copy individual barcodes to clipboard or export all barcodes as a multi-page PDF.'}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Benefits & Advantages of Code 128 Barcodes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">🎯 High Data Density</h3>
                            <p className="text-sm text-gray-700">Code 128 is the most compact 1D barcode format, encoding more data in less space compared to Code 39 or other legacy formats. This makes it ideal for small labels and space-constrained applications.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">🔤 Complete ASCII Support</h3>
                            <p className="text-sm text-gray-700">Encode all 128 ASCII characters including letters (upper/lowercase), numbers, symbols, and control codes. This versatility supports diverse data requirements from simple numbers to complex alphanumeric strings.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">✅ Industry Standard</h3>
                            <p className="text-sm text-gray-700">Widely adopted across shipping, healthcare, retail, and manufacturing industries. Compatible with virtually all barcode scanners and reading systems worldwide, ensuring reliable data capture.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">⚡ Automatic Optimization</h3>
                            <p className="text-sm text-gray-700">Code 128 Auto mode automatically selects the most efficient character set (A, B, or C) for your data, minimizing barcode length while maximizing readability and scan reliability.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">🔒 Built-in Error Detection</h3>
                            <p className="text-sm text-gray-700">Includes mandatory check digits for data validation, reducing scanning errors and improving accuracy. This is critical for applications where data integrity is essential.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h3 className="font-semibold text-blue-900 mb-2">🌐 Global Supply Chain Ready</h3>
                            <p className="text-sm text-gray-700">Forms the basis of GS1-128 (used in global supply chains), making it compatible with international shipping standards and logistics systems used by major carriers worldwide.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                What is a Code 128 barcode?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Code 128 is a high-density linear barcode symbology that can encode all 128 ASCII characters. Developed in 1981, it's one of the most versatile 1D barcode formats available and is widely used in shipping, healthcare, retail, and manufacturing for its ability to store diverse data types efficiently.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                How many characters can a Code 128 barcode hold?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                A Code 128 barcode can theoretically encode unlimited characters, but practical limits exist based on scanner capabilities and label size. Most applications use between 10-40 characters. The barcode length increases with more data, so very long strings may become difficult to print or scan reliably.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                What's the difference between Code 128, Code 128A, Code 128B, and Code 128C?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                <strong>Code 128 (Auto)</strong> automatically selects the best character set for your data. <strong>Code 128A</strong> encodes uppercase letters, digits, and control characters. <strong>Code 128B</strong> encodes the full ASCII character set including upper/lowercase letters and symbols. <strong>Code 128C</strong> encodes only numeric pairs and is the most compact for number-only data.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Can I use Code 128 barcodes for shipping labels?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Yes! Code 128 is the industry standard for shipping labels and is used by major carriers like UPS, FedEx, USPS, and DHL. Its high data density and ability to encode alphanumeric tracking numbers make it perfect for logistics and supply chain applications. GS1-128 (based on Code 128) is specifically designed for shipping applications.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                What file formats can I download the barcodes in?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Our generator supports three formats: <strong>PNG</strong> (raster image, great for digital use), <strong>SVG</strong> (vector format, scalable without quality loss, ideal for professional printing), and <strong>PDF</strong> (multi-page documents for bulk barcodes, perfect for printing multiple labels).
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Is this Code 128 barcode generator free to use?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Yes, our Code 128 barcode generator is completely free to use for personal and commercial purposes. You can generate unlimited barcodes, download them in multiple formats, and use them in your projects without any restrictions or watermarks.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Can I generate barcodes in bulk?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Absolutely! Switch to <strong>Bulk Generation</strong> mode to create multiple barcodes at once. You can generate sequential barcodes (e.g., 1-1000 with custom prefixes/suffixes) or upload an Excel/CSV file containing your barcode data. Export all barcodes as a single multi-page PDF for easy printing.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                What scanners can read Code 128 barcodes?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Code 128 barcodes are readable by virtually all modern barcode scanners including handheld laser scanners, CCD scanners, 2D imagers, and smartphone apps with barcode scanning capability. The widespread support makes Code 128 one of the most reliable choices for barcode applications.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                How do I choose the right bar width and height?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Bar width (X-dimension) affects how much space the barcode occupies—use 2-3px for standard applications. Height should be at least 15% of the barcode width, typically 100px or higher. For industrial/warehouse scanning from a distance, use wider bars (3-5px) and greater height (150-200px). Always test with your scanner before printing large quantities.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Can I customize the colors of the barcode?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Yes! You can customize both the background color and bar color. However, for maximum scan reliability, maintain high contrast—black bars on white background is recommended. Avoid light-colored bars or dark backgrounds as they may reduce scanner readability. Always test colored barcodes with your scanning equipment.
                            </p>
                        </details>

                        <details className="group border-b pb-4">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Why should I use Code 128 instead of Code 39?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Code 128 is more compact and efficient than Code 39, encoding the same data in approximately half the space. It also supports the full ASCII character set (128 characters) while Code 39 is limited to 43 characters. For modern applications, Code 128 is the superior choice due to its high density and versatility.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="font-semibold cursor-pointer text-lg hover:text-blue-600 transition">
                                Do Code 128 barcodes work with Excel and inventory systems?
                            </summary>
                            <p className="mt-3 text-gray-700 text-sm pl-4">
                                Yes! You can upload Excel (.xlsx, .xls) or CSV files to generate barcodes in bulk. Most inventory management systems, warehouse management systems (WMS), and enterprise resource planning (ERP) software support Code 128 barcodes for tracking assets, products, and shipments.
                            </p>
                        </details>
                    </div>
                </section>

                {/* Additional SEO Content */}
                <section className="bg-white border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Barcode Type</h3>
                            <ul className="text-sm space-y-2 text-gray-700">
                                <li><strong>Symbology:</strong> Code 128 (Linear/1D)</li>
                                <li><strong>Standard:</strong> ISO/IEC 15417:2007</li>
                                <li><strong>Year Developed:</strong> 1981</li>
                                <li><strong>Developer:</strong> Computer Identics Corporation</li>
                                <li><strong>Character Sets:</strong> Code Set A, B, and C</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Data Capacity</h3>
                            <ul className="text-sm space-y-2 text-gray-700">
                                <li><strong>Character Support:</strong> All 128 ASCII characters</li>
                                <li><strong>Maximum Length:</strong> Variable (limited by physical size)</li>
                                <li><strong>Typical Length:</strong> 10-40 characters</li>
                                <li><strong>Check Digit:</strong> Mandatory (built-in error detection)</li>
                                <li><strong>Density:</strong> High-density linear barcode</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BarcodeGeneratorTool;
