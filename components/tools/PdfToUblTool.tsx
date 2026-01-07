'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
    Scan, Code, Copy, Loader2, RefreshCw, AlertTriangle, Download,
    FileCode, Calculator, Building, User, Calendar, DollarSign,
    Plus, Trash, ChevronDown, ChevronRight, CheckCircle2, History
} from 'lucide-react';
import { InvoiceData, InvoiceLineItem } from '@/utils/types';
import { extractInvoiceData, initPdfWorker } from '@/utils/pdfUtils';
import { generateUBL } from '@/utils/ublGenerator';
import { triggerHaptic } from '@/utils/haptics';

interface PdfToUblToolProps {
    file: File;
    pdfJsDoc: any; // PDFDocumentProxy
    t: any; // Translations
}

// Helper: Format Currency
const formatCurrency = (amount: number, currency = 'USD') => {
    try {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
    } catch {
        return `${currency} ${amount.toFixed(2)}`;
    }
};

export const PdfToUblTool: React.FC<PdfToUblToolProps> = ({ file, pdfJsDoc, t }) => {
    // --- State ---
    const [isScanning, setIsScanning] = useState(false);
    const [data, setData] = useState<InvoiceData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<'details' | 'items'>('details');

    // UI State for Accordions
    const [sections, setSections] = useState({
        general: true,
        parties: true,
        totals: true
    });

    // --- Computed Values ---
    const calculated = useMemo(() => {
        if (!data?.lineItems) return { subtotal: 0, tax: 0, total: 0 };

        const subtotal = data.lineItems.reduce((acc, item) => acc + (item.amount || 0), 0);
        const tax = data.tax || 0; // Tax is usually invoice-level, but could be item-level. Using invoice level for now.
        // If we had item level tax, we'd sum it here.

        return {
            subtotal,
            tax,
            total: subtotal + tax
        };
    }, [data]);

    const isValid = useMemo(() => {
        if (!data) return false;
        // Basic validation: needs Vendor, Date, Total > 0
        return !!data.vendor && !!data.date && (data.total || 0) > 0;
    }, [data]);

    // --- Handlers ---

    const handleScan = useCallback(async () => {
        setIsScanning(true);
        setError(null);
        try {
            await initPdfWorker();
            const result = await extractInvoiceData(file);

            // Initialize Line Items if missing (World Class UX: Don't leave it empty)
            if (!result.lineItems || result.lineItems.length === 0) {
                // Infer a single line item from subtotal
                const impliedSubtotal = result.subtotal || result.total || 0;
                result.lineItems = [{
                    description: "Services / Products",
                    quantity: 1,
                    unitPrice: impliedSubtotal,
                    amount: impliedSubtotal
                }];
            }

            // Init Customer fields if empty
            if (!result.customerName) {
                result.customerName = "My Company"; // Placeholder
            }

            setData(result);
            triggerHaptic('success');
        } catch (err) {
            console.error(err);
            setError(t.pdfToUbl?.scanError || "Failed to extract invoice data. Please verify the PDF.");
            triggerHaptic('error');
        } finally {
            setIsScanning(false);
        }
    }, [file, t]);

    // Initial Scan
    useEffect(() => {
        handleScan();
    }, [handleScan]);

    // Render Preview
    useEffect(() => {
        if (!pdfJsDoc || !containerRef.current) return;
        let cancelled = false;
        let renderTask: any = null;

        const renderPreview = async () => {
            try {
                const page = await pdfJsDoc.getPage(1);
                if (cancelled) return;
                const viewport = page.getViewport({ scale: 1.5 }); // Higher quality
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const context = canvas.getContext('2d');
                if (context && !cancelled) {
                    renderTask = page.render({ canvasContext: context, viewport });
                    await renderTask.promise;
                    if (!cancelled) setCanvasRef(canvas);
                }
            } catch (err) { console.error(err); }
        };
        renderPreview();
        return () => { cancelled = true; if (renderTask) renderTask.cancel(); };
    }, [pdfJsDoc]);

    const handleDownload = () => {
        if (!data) return;
        try {
            const xml = generateUBL(data);
            const blob = new Blob([xml], { type: 'application/xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `invoice_${data.id || 'ubl'}.xml`;
            a.click();
            URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (e) {
            alert("Error generating UBL");
        }
    };

    // --- Line Item Logic ---
    const addLineItem = () => {
        if (!data) return;
        const newItem: InvoiceLineItem = { description: "", quantity: 1, unitPrice: 0, amount: 0 };
        setData({ ...data, lineItems: [...(data.lineItems || []), newItem] });
    };

    const removeLineItem = (index: number) => {
        if (!data || !data.lineItems) return;
        const newItems = [...data.lineItems];
        newItems.splice(index, 1);
        setData({ ...data, lineItems: newItems });
    };

    const updateLineItem = (index: number, field: keyof InvoiceLineItem, value: any) => {
        if (!data || !data.lineItems) return;
        const newItems = [...data.lineItems];
        const item = { ...newItems[index], [field]: value };

        // Auto-calc amount
        if (field === 'quantity' || field === 'unitPrice') {
            item.amount = (item.quantity || 0) * (item.unitPrice || 0);
        }

        newItems[index] = item;

        // Auto-update Invoice Subtotal if it matches calculated
        // This is a "Smart" feature: if user edits items, we update the main totals to match
        const newSubtotal = newItems.reduce((sum, i) => sum + (i.amount || 0), 0);

        setData({
            ...data,
            lineItems: newItems,
            subtotal: newSubtotal,
            total: newSubtotal + (data.tax || 0)
        });
    };

    const ui = t.pdfToUbl || {
        title: "UBL 2.1 Generator",
        vendor: "Vendor Details",
        customer: "Customer Details",
        invoice: "Invoice Data",
        items: "Line Items",
        totals: "Totals & Tax",
        download: "Download UBL XML",
        scan: "Rescan PDF"
    };

    if (error) return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-red-600 bg-red-50 rounded-xl m-4 border border-red-100">
            <AlertTriangle className="w-12 h-12 mb-4" />
            <p className="font-bold">{error}</p>
            <button onClick={handleScan} className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition">Try Again</button>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row h-full bg-gray-50 overflow-hidden" ref={containerRef}>
            {/* Left: Preview (Glassmorphism Header) */}
            <div className="w-full lg:w-1/2 bg-gray-200/80 backdrop-blur-sm relative flex flex-col items-center justify-start overflow-hidden border-r border-gray-300">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-xs font-bold text-gray-600 flex items-center gap-2">
                    <FileCode size={14} className="text-canada-red" />
                    PDF Source
                </div>
                <div className="flex-1 w-full overflow-auto p-8 flex justify-center bg-gray-200/50">
                    {canvasRef ? (
                        <img
                            src={canvasRef.toDataURL()}
                            alt="Invoice"
                            className="shadow-2xl rounded-sm max-w-[95%] h-auto object-contain transition-all duration-500 ease-out"
                            style={{ opacity: isScanning ? 0.5 : 1, filter: isScanning ? 'blur(2px)' : 'none' }}
                        />
                    ) : (
                        <Loader2 className="animate-spin text-gray-400 mt-20" size={40} />
                    )}
                </div>

                {/* Scanning Overlay */}
                {isScanning && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[2px] z-20">
                        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl">
                            <Loader2 className="animate-spin text-canada-red mb-3" size={32} />
                            <p className="text-sm font-bold text-gray-700">Analyzing Invoice Structure...</p>
                            <p className="text-xs text-gray-500 mt-1">Extracting Line Items & Tax Data</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Right: Data Editor (World Class UI) */}
            <div className="w-full lg:w-1/2 flex flex-col bg-white h-full shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-10">
                {/* Header tool bar */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-canada-red/10 p-2 rounded-lg">
                            <Code className="text-canada-red" size={20} />
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-gray-900 leading-tight">{ui.title}</h2>
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${isValid ? 'bg-green-500' : 'bg-orange-500'}`} />
                                <span className="text-xs text-gray-500 font-medium">{isValid ? 'Ready to Export' : 'Incomplete Data'}</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleScan} className="p-2 hover:bg-gray-50 rounded-full text-gray-400 hover:text-gray-700 transition" title={ui.scan}>
                        <RefreshCw size={18} />
                    </button>
                </div>

                {/* Content Tabs */}
                <div className="flex border-b border-gray-100 px-6 shrink-0">
                    <button
                        onClick={() => setActiveTab('details')}
                        className={`py-3 mr-6 text-sm font-bold border-b-2 transition-colors ${activeTab === 'details' ? 'border-canada-red text-canada-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Invoice Details
                    </button>
                    <button
                        onClick={() => setActiveTab('items')}
                        className={`py-3 mr-6 text-sm font-bold border-b-2 transition-colors ${activeTab === 'items' ? 'border-canada-red text-canada-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Line Items ({data?.lineItems?.length || 0})
                    </button>
                </div>

                {/* Scrollable Form */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-gray-50/30">
                    {data && activeTab === 'details' && (
                        <div className="space-y-6 max-w-2xl mx-auto">
                            {/* General Info */}
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-4">
                                <div className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wide opacity-70 mb-2">
                                    <FileCode size={14} /> General Information
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500">Invoice Number</label>
                                        <input
                                            value={data.id || ''}
                                            onChange={e => setData({ ...data, id: e.target.value })}
                                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono focus:ring-2 focus:ring-canada-red/20 focus:border-canada-red outline-none transition-all"
                                            placeholder="INV-001"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500">Currency</label>
                                        <select
                                            value={data.currency || 'USD'}
                                            onChange={e => setData({ ...data, currency: e.target.value })}
                                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold focus:ring-2 focus:ring-canada-red/20 outline-none"
                                        >
                                            {['USD', 'EUR', 'CAD', 'GBP', 'AUD', 'JPY'].map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500">Issue Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                                            <input
                                                value={data.date || ''}
                                                onChange={e => setData({ ...data, date: e.target.value })}
                                                className="w-full pl-8 p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-canada-red/20 outline-none"
                                                placeholder="YYYY-MM-DD"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500">Due Date</label>
                                        <div className="relative">
                                            <History className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                                            <input
                                                value={data.dueDate || ''}
                                                onChange={e => setData({ ...data, dueDate: e.target.value })}
                                                className="w-full pl-8 p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-canada-red/20 outline-none"
                                                placeholder="YYYY-MM-DD"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Parties */}
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wide opacity-70">
                                        <Building size={14} /> Parties involved
                                    </div>
                                </div>

                                {/* Vendor */}
                                <div className="space-y-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
                                    <div className="flex items-center gap-2 text-blue-800 text-xs font-bold uppercase">
                                        <span className="bg-blue-100 px-1.5 py-0.5 rounded text-[10px]">Supplier</span>
                                        Vendor Details
                                    </div>
                                    <input
                                        value={data.vendor || ''}
                                        onChange={e => setData({ ...data, vendor: e.target.value })}
                                        className="w-full p-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Vendor Name"
                                    />
                                    {/* Placeholder for future Tax ID support if added to types */}
                                </div>

                                {/* Customer */}
                                <div className="space-y-3 p-3 bg-green-50/50 rounded-lg border border-green-100/50">
                                    <div className="flex items-center gap-2 text-green-800 text-xs font-bold uppercase">
                                        <span className="bg-green-100 px-1.5 py-0.5 rounded text-[10px]">Customer</span>
                                        Client Details (You)
                                    </div>
                                    <input
                                        value={data.customerName || ''}
                                        onChange={e => setData({ ...data, customerName: e.target.value })}
                                        className="w-full p-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-green-500 transition-colors"
                                        placeholder="Your Company Name"
                                    />
                                    <input
                                        value={data.customerTaxId || ''}
                                        onChange={e => setData({ ...data, customerTaxId: e.target.value })}
                                        className="w-full p-2 bg-white border border-gray-200 rounded-lg text-sm font-mono outline-none focus:border-green-500 transition-colors"
                                        placeholder="VAT / Tax ID"
                                    />
                                </div>
                            </div>

                            {/* Totals Summary */}
                            <div className="bg-gray-900 text-white p-5 rounded-xl shadow-lg space-y-4">
                                <div className="flex items-center justify-between opacity-80 text-sm font-bold uppercase tracking-wide">
                                    <span className="flex items-center gap-2"><DollarSign size={14} /> Total Amounts</span>
                                    <Calculator size={14} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Subtotal</span>
                                        <input
                                            type="number"
                                            value={data.subtotal || 0}
                                            onChange={e => setData({ ...data, subtotal: parseFloat(e.target.value), total: (parseFloat(e.target.value) + (data.tax || 0)) })}
                                            className="bg-transparent text-right w-32 border-b border-gray-700 focus:border-white outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Tax</span>
                                        <input
                                            type="number"
                                            value={data.tax || 0}
                                            onChange={e => setData({ ...data, tax: parseFloat(e.target.value), total: ((data.subtotal || 0) + parseFloat(e.target.value)) })}
                                            className="bg-transparent text-right w-32 border-b border-gray-700 focus:border-white outline-none"
                                        />
                                    </div>
                                    <div className="h-px bg-gray-700 my-2" />
                                    <div className="flex justify-between font-bold text-xl text-green-400">
                                        <span>Total</span>
                                        <span>{formatCurrency(data.total || 0, data.currency)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {data && activeTab === 'items' && (
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                    <h3 className="font-bold text-gray-700">{ui.items}</h3>
                                    <button onClick={addLineItem} className="text-xs flex items-center gap-1 bg-canada-red text-white px-3 py-1.5 rounded-full font-bold hover:bg-canada-darkRed transition">
                                        <Plus size={12} /> Add Item
                                    </button>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {(data.lineItems || []).map((item, idx) => (
                                        <div key={idx} className="p-4 hover:bg-gray-50 transition-colors group">
                                            <div className="flex gap-4 items-start mb-2">
                                                <div className="flex-1">
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Description</label>
                                                    <input
                                                        value={item.description || ''}
                                                        onChange={e => updateLineItem(idx, 'description', e.target.value)}
                                                        className="w-full p-2 bg-white border border-gray-200 rounded font-medium text-sm focus:border-canada-red outline-none"
                                                        placeholder="Item description"
                                                    />
                                                </div>
                                                <button onClick={() => removeLineItem(idx)} className="mt-6 text-gray-300 hover:text-red-500 transition p-1">
                                                    <Trash size={16} />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div>
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Qty</label>
                                                    <input
                                                        type="number"
                                                        value={item.quantity || 0}
                                                        onChange={e => updateLineItem(idx, 'quantity', parseFloat(e.target.value))}
                                                        className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-center"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Price</label>
                                                    <input
                                                        type="number"
                                                        value={item.unitPrice || 0}
                                                        onChange={e => updateLineItem(idx, 'unitPrice', parseFloat(e.target.value))}
                                                        className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-right"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Amount</label>
                                                    <div className="w-full p-2 bg-gray-50 border border-transparent rounded text-sm text-right font-bold text-gray-700">
                                                        {item.amount?.toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {(!data.lineItems || data.lineItems.length === 0) && (
                                        <div className="p-8 text-center text-gray-400 italic">
                                            No line items. Add one to start.
                                        </div>
                                    )}
                                </div>
                                {/* Footer total check */}
                                <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Calculated Items Total:</span>
                                    <span className={`font-bold ${Math.abs(calculated.subtotal - (data.subtotal || 0)) > 0.05 ? 'text-orange-500' : 'text-green-600'}`}>
                                        {formatCurrency(calculated.subtotal, data.currency)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Action */}
                <div className="p-6 border-t border-gray-100 bg-white shrink-0">
                    <button
                        onClick={handleDownload}
                        disabled={!isValid}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${isValid
                                ? 'bg-canada-red hover:bg-canada-darkRed text-white hover:scale-[1.01] active:scale-[0.99]'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <Download size={20} />
                        {ui.download}
                    </button>
                    {!isValid && (
                        <p className="text-center text-xs text-orange-500 mt-2">Please fill in Vendor, Date, and at least one item/amount.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PdfToUblTool;
