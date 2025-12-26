import React, { useState } from 'react';
import {
    Languages,
    Sparkles,
    ChevronRight,
    Check,
    FileType,
    FileSearch,
    TextCursorInput,
    Zap,
    Globe,
    FileText,
    Settings2,
    Info,
    History,
    ShieldCheck
} from 'lucide-react';
import { PdfPageThumbnail } from './PdfPageThumbnail';

interface OcrToolProps {
    file: File | null;
    onClose: () => void;
    pdfJsDoc: any;
    pageCount: number;
    t: any;
    selectedPages: Set<number>;
    setSelectedPages: (pages: Set<number>) => void;
    onOcr: (mode: 'searchable' | 'text', languages: string[]) => void;
    isMobile: boolean;
}

const LANGUAGES = [
    { code: 'eng', name: 'English', flag: '🇨🇦' },
    { code: 'fra', name: 'Français', flag: '🇫🇷' },
    { code: 'spa', name: 'Español', flag: '🇪🇸' },
    { code: 'deu', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ita', name: 'Italiano', flag: '🇮🇹' },
    { code: 'por', name: 'Português', flag: '🇵🇹' },
    { code: 'chi_sim', name: '简体中文', flag: '🇨🇳' },
    { code: 'jpn', name: '日本語', flag: '🇯🇵' },
    { code: 'kor', name: '한국어', flag: '🇰🇷' }
];

export const OcrTool: React.FC<OcrToolProps> = ({
    file,
    onClose,
    pdfJsDoc,
    pageCount,
    t,
    selectedPages,
    setSelectedPages,
    onOcr,
    isMobile
}) => {
    const [mode, setMode] = useState<'searchable' | 'text'>('searchable');
    const [selectedLangs, setSelectedLangs] = useState<string[]>(['eng']);
    const [showLangPicker, setShowLangPicker] = useState(false);

    const toggleLang = (code: string) => {
        setSelectedLangs(prev =>
            prev.includes(code)
                ? (prev.length > 1 ? prev.filter(l => l !== code) : prev)
                : [...prev, code]
        );
    };

    const togglePage = (idx: number) => {
        const next = new Set(selectedPages);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        setSelectedPages(next);
    };

    const selectAll = () => {
        if (selectedPages.size === pageCount) setSelectedPages(new Set());
        else setSelectedPages(new Set(Array.from({ length: pageCount }, (_, i) => i)));
    };

    return (
        <div className="flex flex-col h-full bg-white overflow-hidden relative">
            {/* Premium Header Decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-canada-red to-purple-500 z-50 overflow-hidden">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ backgroundSize: '200% 100%' }} />
            </div>

            <div className="flex flex-col md:flex-row h-full">
                {/* Left: Thumbnail Selection */}
                <div className="flex-1 flex flex-col min-w-0 border-r border-gray-100 bg-gray-50/50">
                    <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                                <FileSearch size={22} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 tracking-tight">{t.selectPagesForOcr || 'Select Pages for OCR'}</h3>
                                <p className="text-xs text-gray-500 font-medium">{selectedPages.size === 0 ? t.btnSearchablePdfAll : `${selectedPages.size} pages selected`}</p>
                            </div>
                        </div>
                        <button
                            onClick={selectAll}
                            className="text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all active:scale-95"
                        >
                            {selectedPages.size === pageCount ? 'Deselect All' : 'Select All'}
                        </button>
                    </div>

                    <div className="flex-1 overflow-auto p-4 md:p-6 custom-scrollbar">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                            {Array.from({ length: pageCount }).map((_, idx) => (
                                <PdfPageThumbnail
                                    key={idx}
                                    pdfJsDoc={pdfJsDoc}
                                    pageIndex={idx}
                                    isSelected={selectedPages.has(idx)}
                                    mode="select"
                                    onClick={() => togglePage(idx)}
                                    width={isMobile ? 140 : 180}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: OCR Settings Bento Box */}
                <div className="w-full md:w-[380px] lg:w-[420px] bg-white border-t md:border-t-0 p-6 flex flex-col gap-6 overflow-auto custom-scrollbar shadow-2xl z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-canada-red/10 text-canada-red p-2 rounded-lg">
                            <Sparkles size={18} fill="currentColor" />
                        </div>
                        <span className="text-sm font-black text-canada-red uppercase tracking-widest">Neural Engine</span>
                    </div>

                    {/* Mode Selection */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 px-1">
                            <FileType size={14} /> Output Format
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setMode('searchable')}
                                className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group ${mode === 'searchable' ? 'border-blue-500 bg-blue-50/50 shadow-md shadow-blue-500/10' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mode === 'searchable' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    <FileText size={18} />
                                </div>
                                <span className="font-bold text-sm text-gray-800">Searchable PDF</span>
                                <span className="text-[10px] text-gray-500 font-medium leading-tight">Image + Text Layer</span>
                                {mode === 'searchable' && (
                                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white p-1 rounded-bl-lg shadow-lg">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                )}
                            </button>
                            <button
                                onClick={() => setMode('text')}
                                className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group ${mode === 'text' ? 'border-purple-500 bg-purple-50/50 shadow-md shadow-purple-500/10' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mode === 'text' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    <TextCursorInput size={18} />
                                </div>
                                <span className="font-bold text-sm text-gray-800">Text Only</span>
                                <span className="text-[10px] text-gray-500 font-medium leading-tight">Plain extraction</span>
                                {mode === 'text' && (
                                    <div className="absolute -top-1 -right-1 bg-purple-500 text-white p-1 rounded-bl-lg shadow-lg">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Language Selection */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 px-1">
                            <Globe size={14} /> AI Language Model
                        </label>
                        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-2">
                            <div className="flex flex-wrap gap-2 p-2">
                                {selectedLangs.map(lang => (
                                    <span key={lang} className="bg-white px-3 py-1.5 rounded-xl border border-blue-100 text-blue-700 text-sm font-bold flex items-center gap-1.5 shadow-sm">
                                        {LANGUAGES.find(l => l.code === lang)?.flag} {LANGUAGES.find(l => l.code === lang)?.name}
                                        <button onClick={() => toggleLang(lang)} className="hover:text-red-500 ml-1 opacity-50 hover:opacity-100">×</button>
                                    </span>
                                ))}
                                <button
                                    onClick={() => setShowLangPicker(!showLangPicker)}
                                    className="px-3 py-1.5 rounded-xl bg-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-300 transition-colors flex items-center gap-1"
                                >
                                    <Languages size={14} /> Add
                                </button>
                            </div>

                            {showLangPicker && (
                                <div className="p-2 border-t border-gray-100 max-h-[200px] overflow-auto">
                                    <div className="grid grid-cols-1 gap-1">
                                        {LANGUAGES.filter(l => !selectedLangs.includes(l.code)).map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => { toggleLang(lang.code); setShowLangPicker(false); }}
                                                className="flex items-center justify-between p-2.5 hover:bg-white hover:shadow-sm rounded-xl transition-all group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">{lang.flag}</span>
                                                    <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">{lang.name}</span>
                                                </div>
                                                <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-400" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quality Insights */}
                    <div className="mt-auto space-y-4 pt-4">
                        <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Zap size={64} fill="white" />
                            </div>
                            <h4 className="font-bold text-sm flex items-center gap-2 mb-1">
                                <Zap size={14} className="text-yellow-400" /> Parallel Processing
                            </h4>
                            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                Using a multi-core neural engine. Documents are enhanced with adaptive thresholding for maximum precision.
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                console.log('[OCR BUTTON] Clicked! Mode:', mode, 'Langs:', selectedLangs);
                                onOcr(mode, selectedLangs);
                            }}
                            className="w-full py-5 bg-canada-red text-white rounded-2xl font-black text-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                        >
                            <Sparkles size={24} className="animate-pulse" />
                            {mode === 'searchable' ? 'MAGIC SEARCHABLE PDF' : 'EXTRACT TEXT'}
                        </button>

                        <div className="flex items-center justify-center gap-2 opacity-50">
                            <ShieldCheck size={14} className="text-green-600" />
                            <span className="text-[10px] font-black uppercase tracking-tighter text-gray-500">Private & Local Processing</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-4 pointer-events-none opacity-5 flex items-center gap-2">
                <Globe size={48} />
                <Settings2 size={48} />
            </div>
        </div>
    );
};
