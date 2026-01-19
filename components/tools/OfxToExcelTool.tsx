'use client';

import React, { useState, useCallback, useRef, useMemo } from 'react';
import {
    FileSpreadsheet,
    Download,
    Upload,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    TrendingDown,
    Calendar,
    DollarSign,
    Shield,
    RefreshCw,
    ChevronDown
} from 'lucide-react';
import {
    parseOFX,
    calculateStats,
    transactionsToCSV,
    transactionsToQBO,
    transactionsToQIF,
    OFXData,
    OFXAccount,
    OFXTransaction
} from '@/utils/ofxParser';
import { triggerHaptic } from '@/utils/haptics';

interface OfxToExcelToolProps {
    lang?: 'en' | 'fr' | 'pt';
}

const translations = {
    en: {
        title: 'OFX to Excel',
        subtitle: 'Convert bank statements instantly',
        dropzone: 'Drop your OFX file here or click to upload',
        selectFile: 'Select OFX File',
        processing: 'Processing...',
        transactions: 'transactions',
        totalCredits: 'Total Credits',
        totalDebits: 'Total Debits',
        netChange: 'Net Change',
        dateRange: 'Date Range',
        account: 'Account',
        selectAccount: 'Select Account',
        exportExcel: 'Excel',
        exportCSV: 'CSV',
        exportQBO: 'QBO',
        exportQIF: 'QIF',
        privacy: '100% Local Processing',
        noTransactions: 'No transactions found',
        date: 'Date',
        description: 'Description',
        amount: 'Amount',
        type: 'Type',
        credit: 'Credit',
        debit: 'Debit',
        newFile: 'New File',
        downloadAll: 'Download',
    },
    fr: {
        title: 'OFX vers Excel',
        subtitle: 'Convertissez vos relevés bancaires instantanément',
        dropzone: 'Déposez votre fichier OFX ici ou cliquez pour télécharger',
        selectFile: 'Sélectionner fichier OFX',
        processing: 'Traitement en cours...',
        transactions: 'transactions',
        totalCredits: 'Total Crédits',
        totalDebits: 'Total Débits',
        netChange: 'Variation Nette',
        dateRange: 'Période',
        account: 'Compte',
        selectAccount: 'Sélectionner le compte',
        exportExcel: 'Excel',
        exportCSV: 'CSV',
        exportQBO: 'QBO',
        exportQIF: 'QIF',
        privacy: 'Traitement 100% Local',
        noTransactions: 'Aucune transaction trouvée',
        date: 'Date',
        description: 'Description',
        amount: 'Montant',
        type: 'Type',
        credit: 'Crédit',
        debit: 'Débit',
        newFile: 'Nouveau Fichier',
        downloadAll: 'Télécharger',
    },
    pt: {
        title: 'OFX para Excel',
        subtitle: 'Converta extratos bancários instantaneamente',
        dropzone: 'Solte seu arquivo OFX aqui ou clique para enviar',
        selectFile: 'Selecionar arquivo OFX',
        processing: 'Processando...',
        transactions: 'transações',
        totalCredits: 'Total de Créditos',
        totalDebits: 'Total de Débitos',
        netChange: 'Variação Líquida',
        dateRange: 'Período',
        account: 'Conta',
        selectAccount: 'Selecionar conta',
        exportExcel: 'Excel',
        exportCSV: 'CSV',
        exportQBO: 'QBO',
        exportQIF: 'QIF',
        privacy: 'Processamento 100% Local',
        noTransactions: 'Nenhuma transação encontrada',
        date: 'Data',
        description: 'Descrição',
        amount: 'Valor',
        type: 'Tipo',
        credit: 'Crédito',
        debit: 'Débito',
        newFile: 'Novo Arquivo',
        downloadAll: 'Baixar',
    },
};

export const OfxToExcelTool: React.FC<OfxToExcelToolProps> = ({ lang = 'pt' }) => {
    const t = translations[lang] || translations.pt;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [ofxData, setOfxData] = useState<OFXData | null>(null);
    const [selectedAccountIdx, setSelectedAccountIdx] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState('');

    const selectedAccount = useMemo(() => {
        return ofxData?.accounts[selectedAccountIdx] || null;
    }, [ofxData, selectedAccountIdx]);

    const stats = useMemo(() => {
        if (!selectedAccount) return null;
        return calculateStats(selectedAccount.transactions);
    }, [selectedAccount]);

    const handleFile = useCallback(async (file: File) => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);
        setFileName(file.name);
        triggerHaptic('light');

        try {
            const content = await file.text();
            const data = parseOFX(content);

            if (data.accounts.length === 0) {
                throw new Error('No accounts found in OFX file');
            }

            setOfxData(data);
            setSelectedAccountIdx(0);
            triggerHaptic('success');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to parse OFX file');
            triggerHaptic('error');
        } finally {
            setIsProcessing(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleExport = useCallback(async (format: 'xlsx' | 'csv' | 'qbo' | 'qif') => {
        if (!selectedAccount) return;
        triggerHaptic('medium');

        let content: string | Uint8Array;
        let mimeType: string;
        let extension: string;

        switch (format) {
            case 'csv':
                content = transactionsToCSV(selectedAccount.transactions);
                mimeType = 'text/csv';
                extension = 'csv';
                break;
            case 'qbo':
                content = transactionsToQBO(selectedAccount);
                mimeType = 'application/vnd.intu.qbo';
                extension = 'qbo';
                break;
            case 'qif':
                content = transactionsToQIF(selectedAccount.transactions);
                mimeType = 'application/qif';
                extension = 'qif';
                break;
            case 'xlsx':
            default:
                // Generate proper Excel file using ExcelJS
                const ExcelJS = (await import('exceljs')).default;
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Transactions');

                // Add header row
                worksheet.columns = [
                    { header: 'Date', key: 'date', width: 12 },
                    { header: 'Description', key: 'name', width: 40 },
                    { header: 'Memo', key: 'memo', width: 30 },
                    { header: 'Amount', key: 'amount', width: 15 },
                    { header: 'Type', key: 'type', width: 10 }
                ];

                // Add data rows
                selectedAccount.transactions.forEach(trn => {
                    worksheet.addRow({
                        date: trn.date,
                        name: trn.name,
                        memo: trn.memo || '',
                        amount: trn.amount,
                        type: trn.type
                    });
                });

                // Style header row
                worksheet.getRow(1).font = { bold: true };

                const buffer = await workbook.xlsx.writeBuffer();
                content = new Uint8Array(buffer as ArrayBuffer);
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                extension = 'xlsx';
                break;
        }

        const blob = new Blob([content as BlobPart], { type: mimeType });
        const url = URL.createObjectURL(blob);
        try {
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName.replace(/\.(ofx|qfx)$/i, `.${extension}`);
            a.click();
        } finally {
            URL.revokeObjectURL(url);
        }
    }, [selectedAccount, fileName]);

    const reset = useCallback(() => {
        setOfxData(null);
        setError(null);
        setFileName('');
        // Reset file input to allow re-uploading same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, []);

    // Upload State
    if (!ofxData && !isProcessing) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-start p-4 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                        {t.title}
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {t.subtitle}
                    </p>
                </div>

                <div className="w-full max-w-2xl">
                    <div
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                            relative cursor-pointer border-2 border-dashed rounded-3xl p-8 md:p-12
                            flex flex-col items-center justify-center transition-all duration-300
                            min-h-[280px] md:min-h-[320px]
                            ${isDragging
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 scale-[1.02]'
                                : 'border-gray-300 hover:border-green-500/50 bg-white dark:bg-gray-900'
                            }
                        `}
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <FileSpreadsheet size={40} className="text-green-600" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-4 font-medium">
                            {t.dropzone}
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-105 active:scale-95">
                            {t.selectFile}
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".ofx,.qfx"
                            className="hidden"
                            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                        />
                    </div>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 flex items-center gap-3">
                            <AlertCircle className="text-red-600 shrink-0" size={20} />
                            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500 dark:text-gray-400">
                        <Shield size={16} className="text-green-600" />
                        <span>{t.privacy}</span>
                    </div>
                </div>
            </div>
        );
    }

    // Processing State
    if (isProcessing) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
                <RefreshCw size={48} className="text-green-600 animate-spin mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">{t.processing}</p>
            </div>
        );
    }

    // Results State
    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 md:p-6 shadow-sm z-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h2 className="font-black text-xl text-gray-900 dark:text-white tracking-tight leading-none">
                                {selectedAccount?.transactions.length || 0} {t.transactions}
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">{fileName}</p>
                        </div>
                    </div>

                    {/* Account Selector */}
                    {ofxData && ofxData.accounts.length > 1 && (
                        <div className="relative">
                            <select
                                value={selectedAccountIdx}
                                onChange={(e) => setSelectedAccountIdx(Number(e.target.value))}
                                className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 pr-10 font-medium text-sm"
                            >
                                {ofxData.accounts.map((acc, idx) => (
                                    <option key={idx} value={idx}>
                                        {acc.accountType} - ****{acc.accountId?.slice(-4) || '****'}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    )}

                    {/* Export Buttons */}
                    <div className="grid grid-cols-2 md:flex items-center gap-2">
                        <button
                            onClick={() => handleExport('xlsx')}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all active:scale-95"
                        >
                            <FileSpreadsheet size={18} /> {t.exportExcel}
                        </button>
                        <button
                            onClick={() => handleExport('csv')}
                            className="bg-gray-900 hover:bg-black text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            <Download size={18} /> {t.exportCSV}
                        </button>
                        <button
                            onClick={() => handleExport('qbo')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            {t.exportQBO}
                        </button>
                        <button
                            onClick={reset}
                            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            <Upload size={18} /> {t.newFile}
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            {stats && (
                <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 border border-green-100 dark:border-green-800">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingUp size={16} className="text-green-600" />
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{t.totalCredits}</span>
                            </div>
                            <p className="text-xl md:text-2xl font-black text-green-700 dark:text-green-400">
                                ${stats.totalCredits.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-4 border border-red-100 dark:border-red-800">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingDown size={16} className="text-red-600" />
                                <span className="text-xs font-bold text-red-600 uppercase tracking-wide">{t.totalDebits}</span>
                            </div>
                            <p className="text-xl md:text-2xl font-black text-red-700 dark:text-red-400">
                                ${stats.totalDebits.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-1">
                                <DollarSign size={16} className="text-gray-600 dark:text-gray-400" />
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">{t.netChange}</span>
                            </div>
                            <p className={`text-xl md:text-2xl font-black ${stats.netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {stats.netChange >= 0 ? '+' : ''}${stats.netChange.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-1">
                                <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">{t.dateRange}</span>
                            </div>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                {stats.dateRange.start} → {stats.dateRange.end}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Transaction Table */}
            <div className="flex-grow overflow-auto p-4 md:p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 dark:bg-gray-800/50">
                                    <tr>
                                        <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">#</th>
                                        <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.date}</th>
                                        <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.description}</th>
                                        <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">{t.amount}</th>
                                        <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.type}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                    {selectedAccount?.transactions.map((trn, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-4 py-3 text-xs font-mono text-gray-400">{idx + 1}</td>
                                            <td className="px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-400">{trn.date}</td>
                                            <td className="px-4 py-3">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[300px]">{trn.name}</p>
                                                {trn.memo && <p className="text-xs text-gray-500 truncate max-w-[300px]">{trn.memo}</p>}
                                            </td>
                                            <td className={`px-4 py-3 text-sm font-mono font-bold text-right ${trn.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {trn.amount >= 0 ? '+' : ''}{trn.amount.toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${trn.type === 'CREDIT'
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                    }`}>
                                                    {trn.type === 'CREDIT' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                                    {trn.type === 'CREDIT' ? t.credit : t.debit}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!selectedAccount || selectedAccount.transactions.length === 0) && (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-gray-400 italic">
                                                {t.noTransactions}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfxToExcelTool;
