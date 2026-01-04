'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { FileText, X, Shield, RotateCw, Info, ZoomIn, ZoomOut, GripVertical, RotateCcw, RefreshCcw, Image as ImageIcon, BookOpen, Plus, Search, FileSearch } from 'lucide-react';

// Lazy load large/interactive components
// Lazy load large/interactive components
const SignPdfTool = dynamic(() => import('./SignPdfTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});
const CropPdfTool = dynamic(() => import('./CropPdfTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});
const InvoiceOcrTool = dynamic(() => import('./tools/InvoiceOcrTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});
const BarcodeGeneratorTool = dynamic(() => import('./tools/BarcodeGeneratorTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});
const PdfToCsvTool = dynamic(() => import('./tools/PdfToCsvTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});
const PhishingDetectorTool = dynamic(() => import('./tools/PhishingDetectorTool'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center p-20"><RefreshCcw className="animate-spin text-canada-red" /></div>
});


import { closestCenter, KeyboardSensor, useSensor, useSensors, DragEndEvent, MouseSensor, TouchSensor, DndContext } from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates, useSortable, rectSortingStrategy, verticalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PdfPageThumbnail } from './PdfPageThumbnail';
import { formatFileSize, signPdf, SignatureEntry, cropPdfPages } from '../utils/pdfUtils';
import { ToolType } from '../utils/types';
import { triggerHaptic } from '../utils/haptics';
import { useSwipe } from '../hooks/useSwipe';

interface ToolInterfaceProps {
    // ... existing props
    file: File | null;
    files?: File[];
    setFiles?: React.Dispatch<React.SetStateAction<File[]>>;
    currentTool: ToolType;
    lang: string;
    t: any;
    pageCount: number;
    pdfJsDoc: any;
    tools: any[];
    selectedPages: Set<number>;
    rotations: { [key: number]: number };
    previewZoom: number;
    isDesktop: boolean;
    pageOrder: number[];
    setPageOrder: React.Dispatch<React.SetStateAction<number[]>>;
    onFileSelect: () => void;
    onAction: (processedBlob?: Blob | Uint8Array) => void;
    onSoftReset: () => void;
    togglePageSelection: (e: any, idx: number) => void;
    setSelectedPages: React.Dispatch<React.SetStateAction<Set<number>>>;
    rotateAll: (direction: 'left' | 'right') => void;
    resetRotations: () => void;
    setPreviewZoom: React.Dispatch<React.SetStateAction<number>>;
    processFile: (file: File) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pageRangeInput: string;
    setPageRangeInput: (val: string) => void;
    handleRangeInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    compressionLevel?: 'good' | 'balanced' | 'extreme';
    setCompressionLevel?: (level: 'good' | 'balanced' | 'extreme') => void;
    kindleMode?: 'reflow' | 'visual';
    setKindleMode?: (mode: 'reflow' | 'visual') => void;
    kindleScreenSize?: number;
    setKindleScreenSize?: (size: number) => void;
}

// ... SortableThumbnail component ...
const SortableThumbnail: React.FC<{
    id: string;
    pageIndex: number;
    pdfJsDoc: any;
    width: number;
    position: number;
}> = ({ id, pageIndex, pdfJsDoc, width, position }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 1,
        opacity: isDragging ? 0.8 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}
            className={`relative cursor-grab active:cursor-grabbing touch-none ${isDragging ? 'scale-105 shadow-2xl z-50' : 'z-1'}`}
        >
            <div className="absolute top-2 left-2 z-10 w-8 h-8 bg-canada-red text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                {position}
            </div>
            {/* Enlarged Drag Handle for Mobile */}
            <div className="absolute inset-0 z-20 md:hidden" role="button" aria-label="Drag to reorder" />

            <div className="absolute top-2 right-2 z-10 p-2 bg-white/95 rounded-xl shadow-sm border border-gray-100 hidden md:flex cursor-grab active:cursor-grabbing">
                <GripVertical size={18} className="text-gray-400" />
            </div>

            <div className="block active:scale-[0.98] transition-transform">
                <PdfPageThumbnail
                    pdfJsDoc={pdfJsDoc}
                    pageIndex={pageIndex}
                    isSelected={false}
                    onClick={() => { }}
                    mode="none"
                    width={width}
                />
            </div>
        </div>
    );
};

const SortableFileItem: React.FC<{
    file: File;
    id: string;
    onRemove: (id: string) => void;
}> = ({ file, id, onRemove }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        touchAction: 'none'
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 select-none mb-3 ${isDragging ? 'shadow-lg border-canada-red/50 z-50 relative' : ''}`}>
            <GripVertical className="text-gray-400 cursor-grab active:cursor-grabbing shrink-0" size={20} />
            <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-canada-red shrink-0">
                <FileText size={24} />
            </div>
            <div className="flex-1 min-w-0 text-left">
                <p className="font-medium truncate text-gray-900 dark:text-white max-w-[200px] md:max-w-md">{file.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onRemove(id); }} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 rounded-lg transition-colors shrink-0" onPointerDown={e => e.stopPropagation()}>
                <X size={20} />
            </button>
        </div>
    );
};

export const ToolInterface: React.FC<ToolInterfaceProps> = ({
    file,
    files,
    setFiles,
    currentTool,
    lang,
    t,
    pageCount,
    pdfJsDoc,
    tools,
    selectedPages,
    rotations,
    previewZoom,
    isDesktop,
    pageOrder,
    setPageOrder,
    onFileSelect,
    onAction,
    onSoftReset,
    togglePageSelection,
    rotateAll,
    resetRotations,
    setPreviewZoom,
    processFile,
    handleFileChange,
    pageRangeInput,
    setPageRangeInput,
    handleRangeInputChange,
    compressionLevel,
    setCompressionLevel,
    setSelectedPages,
    kindleMode,
    setKindleMode,
    kindleScreenSize,
    setKindleScreenSize,
}) => {
    // dnd-kit sensors for drag and drop
    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    // Swipe handler for closing the tool
    const swipeHandlers = useSwipe({
        onSwipeDown: () => {
            // Only trigger if we are at the very top of the page/container to avoid conflicting with scrolling
            if (window.scrollY < 10) {
                triggerHaptic('medium');
                onSoftReset();
            }
        }
    });

    const handlePageDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = pageOrder.findIndex((p) => `page-${p}` === active.id);
            const newIndex = pageOrder.findIndex((p) => `page-${p}` === over.id);
            setPageOrder(arrayMove(pageOrder, oldIndex, newIndex));
        }
    };

    const handleFileDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id && files && setFiles) {
            setFiles((items) => {
                const oldIndex = items.findIndex((_, i) => `file-${i}` === active.id);
                const newIndex = items.findIndex((_, i) => `file-${i}` === over.id);
                if (oldIndex !== -1 && newIndex !== -1) {
                    return arrayMove(items, oldIndex, newIndex);
                }
                return items;
            });
            triggerHaptic('medium');
        }
    };

    const removeFile = (id: string) => {
        if (files && setFiles) {
            const index = parseInt(id.replace('file-', ''));
            const newFiles = [...files];
            newFiles.splice(index, 1);
            setFiles(newFiles);
            if (newFiles.length === 0) {
                onSoftReset();
            }
        }
    };
    // Desktop mode: use larger base thumbnail size for better visibility
    const baseThumbnailWidth = isDesktop ? 280 : 160;
    const minThumbnailWidth = isDesktop ? 180 : 100;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const pageRangeInputRef = useRef<HTMLInputElement>(null);

    // Tool type checks - must be declared before use
    const isPageSelectionTool = currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.SPLIT || currentTool === ToolType.EXTRACT;
    const isSignTool = currentTool === ToolType.SIGN;
    const isCropTool = currentTool === ToolType.CROP;
    const isOrganizeTool = currentTool === ToolType.ORGANIZE;
    const isCompressTool = currentTool === ToolType.COMPRESS;
    const isInvoiceTool = currentTool === ToolType.INVOICE_OCR;
    const isBarcodeTool = currentTool === ToolType.BARCODE_GENERATOR;
    const isCsvTool = currentTool === ToolType.PDF_TO_CSV || currentTool === ToolType.PDF_TO_EXCEL;
    const isPhishingTool = currentTool === ToolType.PHISHING_DETECTOR;

    if (!file && (!files || files.length === 0) && !isBarcodeTool) {
        const tool = tools.find(t => t.id === currentTool);
        return (
            <div
                className={`flex-grow flex flex-col items-center justify-center p-8 md:p-20 text-center cursor-pointer group m-4 md:m-8 rounded-[3rem] bg-white/${isDesktop ? '95' : '60'} border-2 border-dashed border-gray-200/50 hover:border-canada-red/40 transition-all duration-700 active:scale-[0.99] relative overflow-hidden group/drop shadow-bento hover:shadow-bento-hover`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        processFile(e.dataTransfer.files[0]);
                    }
                }}
                onClick={() => fileInputRef.current?.click()}
            >
                {/* Dynamic Background Glow - Disabled on Desktop */}
                {!isDesktop && <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover/drop:from-red-500/5 group-hover/drop:to-orange-500/5 transition-all duration-1000 pointer-events-none" />}
                {!isDesktop && <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/5 blur-[60px] rounded-full group-hover:bg-red-500/10 transition-all duration-1000" />}

                <div className={`relative z-10 w-28 h-28 md:w-36 md:h-36 bg-white/${isDesktop ? '100' : '90'} rounded-[2.5rem] shadow-premium flex items-center justify-center mb-10 group-hover/drop:scale-105 transition-all duration-500 border border-white/60`}>
                    <div className="text-canada-red">
                        {tool && <tool.icon size={56} strokeWidth={1.5} />}
                    </div>
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-5xl font-[1000] text-modern-neutral-900 tracking-tighter lowercase italic leading-none">{tool?.title}</h3>
                        <p className="text-modern-neutral-600 font-bold max-w-sm mx-auto leading-relaxed text-sm md:text-base">
                            {t.uploadDesc} <br />
                            <span className="text-canada-red font-black text-[10px] tracking-[0.2em] uppercase mt-2 inline-block">({tool?.accept})</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-4">
                        <div className={`flex items-center gap-2.5 text-[10px] font-black tracking-widest text-modern-neutral-600 uppercase bg-white/${isDesktop ? '100' : '80'} px-4 py-2 rounded-full border border-white/60 shadow-sm`}>
                            <Shield size={14} className="text-red-600/60" />
                            {t.processedLocally}
                        </div>
                    </div>
                </div>

                <div className="mt-14 group-hover/drop:translate-y-[-8px] transition-transform duration-700">
                    <div className="bg-modern-neutral-900 hover:bg-black text-white px-14 py-6 rounded-full font-black text-lg shadow-2xl shadow-modern-neutral-900/20 flex items-center gap-4 transition-all">
                        <Plus size={24} strokeWidth={4} />
                        {t.selectFile}
                    </div>
                </div>

                <input
                    type="file"
                    accept={tool?.accept}
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </div>
        );
    }


    if (currentTool === ToolType.MERGE && files && files.length > 0) {
        return (
            <div className="w-full max-w-4xl mx-auto px-6 pb-32 animate-fade-in">
                <div className="text-center py-12 md:py-16">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/${isDesktop ? '100' : '80'} border border-white/40 shadow-premium mb-6`}>
                        <GripVertical size={16} className="text-canada-red" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase">{t.reorderFiles || (lang === 'en' ? 'Reorder Files' : 'Réorganiser')}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-[1000] text-gray-900 tracking-tighter mb-4">{t.toolMerge}</h2>
                    <p className="text-gray-600 font-medium max-w-md mx-auto">{t.toolMergeDesc}</p>
                </div>

                <div className="space-y-4">
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleFileDragEnd}>
                        <SortableContext items={files.map((_, i) => `file-${i}`)} strategy={verticalListSortingStrategy}>
                            <div className="grid gap-4">
                                {files.map((f, i) => (
                                    <div key={`file-${i}-${f.name}`} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                                        <SortableFileItem
                                            key={`file-${i}`}
                                            id={`file-${i}`}
                                            file={f}
                                            onRemove={removeFile}
                                        />
                                    </div>
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full bg-white/${isDesktop ? '90' : '60'} border-2 border-dashed border-gray-200 hover:border-canada-red/40 rounded-[2rem] p-8 flex flex-col items-center gap-3 transition-all group mt-8`}
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-105 transition-all">
                            <Plus className="text-canada-red" size={24} strokeWidth={3} />
                        </div>
                        <span className="font-black text-gray-400 group-hover:text-canada-red transition-colors uppercase tracking-widest text-xs">{t.addMorePdfs || 'Add more PDFs'}</span>
                        <input type="file" multiple accept=".pdf" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                    </button>
                </div>

                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-[70]">
                    <div className={`bg-white/${isDesktop ? '100' : '95'} border border-modern-glassBorder p-4 rounded-[2.5rem] shadow-glass flex gap-3 animate-slide-up`}>
                        <button
                            onClick={onSoftReset}
                            className="flex-1 px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
                        >
                            {t.btnCancel || 'Cancel'}
                        </button>
                        <button
                            onClick={() => onAction()}
                            disabled={files.length < 2}
                            className="flex-[2] px-8 py-4 rounded-full bg-canada-red text-white font-bold text-sm uppercase tracking-widest hover:bg-canada-darkRed transition-all active:scale-95 disabled:opacity-30 disabled:grayscale shadow-xl shadow-red-500/10"
                        >
                            {t.toolMerge}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    let headerText = '';

    if (currentTool === ToolType.DELETE || currentTool === ToolType.PDF_PAGE_REMOVER) headerText = t.selectPagesHeader;
    else if (currentTool === ToolType.ROTATE) headerText = t.toolRotateInfo || 'Click pages to rotate or use controls above.';
    else if (currentTool === ToolType.MAKE_FILLABLE) headerText = t.selectPagesToFill;
    else if (currentTool === ToolType.SPLIT) headerText = t.toolSplitDesc || 'PDF will be split into individual pages.';
    else if (currentTool === ToolType.EXTRACT) headerText = t.selectPagesHeader;

    return (
        <div className={`flex flex-col overflow-hidden ${isSignTool || isInvoiceTool || isBarcodeTool || isCsvTool ? 'h-full w-full' : 'h-[calc(100dvh-64px)] md:h-auto md:min-h-[600px]'}`}>
            {/* Header - Hide for Sign Tool (it has its own custom floating header) */}
            {!isSignTool && !isInvoiceTool && !isBarcodeTool && !isCsvTool && !isPhishingTool && (
                <div
                    className="p-3 md:p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm touch-none"
                    {...swipeHandlers} // Attach swipe to header specifically
                >
                    <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 md:w-10 md:h-10 bg-red-100 text-canada-red rounded-lg flex items-center justify-center shrink-0">
                            <FileText size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-gray-800 truncate text-sm md:text-base max-w-[140px] md:max-w-[200px]">{file?.name}</h3>
                            <p className="text-xs text-gray-500 flex items-center gap-2">
                                <span>{file ? formatFileSize(file.size) : ''}</span>
                            </p>
                        </div>
                    </div>
                    <button onClick={onSoftReset} className="text-gray-600 hover:text-gray-800 active:text-canada-red p-3 hover:bg-gray-100 active:bg-red-50 rounded-full transition-colors active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0" aria-label="Remove file">
                        <X size={20} />
                    </button>
                </div>
            )}

            {/* Content Area */}
            <div className={`flex-grow ${isSignTool || isInvoiceTool || isBarcodeTool || isCsvTool || isPhishingTool ? 'overflow-hidden' : 'overflow-auto'} bg-gray-50 custom-scrollbar flex flex-col items-stretch w-full relative`}>
                {isBarcodeTool ? (
                    <BarcodeGeneratorTool
                        file={file || undefined}
                        t={t}
                    />
                ) : isInvoiceTool && file ? (
                    <InvoiceOcrTool
                        file={file}
                        pdfJsDoc={pdfJsDoc}
                        t={t}
                    />
                ) : isCsvTool && file ? (
                    <PdfToCsvTool
                        file={file}
                        t={t}
                    />
                ) : isPhishingTool && file ? (
                    <PhishingDetectorTool
                        file={file}
                    />
                ) : isPageSelectionTool ? (
                    <div className="p-4 md:p-6 w-full">
                        <div className="w-full mb-4 z-10 py-2">
                            {(currentTool === ToolType.DELETE || currentTool === ToolType.PDF_PAGE_REMOVER) && (
                                <div className="w-full max-w-2xl mx-auto mb-6 transition-all duration-300">
                                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl mb-4 text-sm flex items-start gap-2 border border-blue-100 shadow-sm">
                                        <Info size={18} className="mt-0.5 shrink-0" />
                                        <p>{t.deletePagesInfo}</p>
                                    </div>

                                    <div className="flex items-center justify-between mb-3 px-1">
                                        <span className="font-bold text-gray-900">{t.totalPages}: <span className="text-canada-red">{pageCount}</span></span>
                                        {selectedPages.size > 0 && (
                                            <span className="text-xs font-bold bg-canada-red text-white px-3 py-1.5 rounded-full shadow-sm animate-pulse">
                                                {selectedPages.size} {t.selected}
                                            </span>
                                        )}
                                    </div>

                                    {/* Quick Actions for Mobile */}
                                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                                        <button
                                            onClick={() => {
                                                triggerHaptic('light');
                                                const allPages = new Set(Array.from({ length: pageCount }, (_, i) => i));
                                                setSelectedPages(allPages);
                                            }}
                                            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 active:scale-95 active:bg-red-50 transition-all text-xs font-bold text-gray-600 whitespace-nowrap min-h-[40px]"
                                        >
                                            {t.selectAll || 'All'}
                                        </button>
                                        <button
                                            onClick={() => { triggerHaptic('light'); setSelectedPages(new Set()); }}
                                            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400 active:scale-95 active:bg-gray-50 transition-all text-xs font-bold text-gray-600 whitespace-nowrap min-h-[40px]"
                                        >
                                            {t.selectNone || 'None'}
                                        </button>
                                        <button
                                            onClick={() => {
                                                triggerHaptic('light');
                                                const oddPages = new Set(Array.from({ length: pageCount }, (_, i) => i).filter(i => i % 2 === 0));
                                                setSelectedPages(oddPages);
                                            }}
                                            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 active:scale-95 active:bg-red-50 transition-all text-xs font-bold text-gray-600 whitespace-nowrap min-h-[40px]"
                                        >
                                            {t.selectOdd || 'Odd'}
                                        </button>
                                        <button
                                            onClick={() => {
                                                triggerHaptic('light');
                                                const evenPages = new Set(Array.from({ length: pageCount }, (_, i) => i).filter(i => i % 2 === 1));
                                                setSelectedPages(evenPages);
                                            }}
                                            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 active:scale-95 active:bg-red-50 transition-all text-xs font-bold text-gray-600 whitespace-nowrap min-h-[40px]"
                                        >
                                            {t.selectEven || 'Even'}
                                        </button>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700 px-1">{t.pagesToRemove}:</label>
                                        <input
                                            ref={pageRangeInputRef}
                                            type="text"
                                            inputMode="text"
                                            autoComplete="off"
                                            autoCorrect="off"
                                            spellCheck="false"
                                            value={pageRangeInput}
                                            onChange={handleRangeInputChange}
                                            className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-canada-red focus:border-canada-red outline-none transition-all shadow-sm text-base text-gray-800 placeholder-gray-400 min-h-[52px]"
                                            placeholder="e.g. 1, 3-5, 8"
                                        />
                                    </div>
                                </div>
                            )}



                            {currentTool === ToolType.ROTATE && (
                                <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide sticky top-0 bg-gray-50/95 pt-2">
                                    <button onClick={() => rotateAll('left')} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 hover:text-canada-red active:scale-95 active:border-canada-red active:text-canada-red active:bg-red-50 transition-all text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap min-h-[44px]">
                                        <RotateCcw size={16} /> <span className="hidden sm:inline">{t.rotateAllLeft}</span><span className="sm:hidden">Left</span>
                                    </button>
                                    <button onClick={() => rotateAll('right')} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 hover:text-canada-red active:scale-95 active:border-canada-red active:text-canada-red active:bg-red-50 transition-all text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap min-h-[44px]">
                                        <RotateCw size={16} /> <span className="hidden sm:inline">{t.rotateAllRight}</span><span className="sm:hidden">Right</span>
                                    </button>
                                    <button onClick={resetRotations} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400 hover:text-gray-900 active:scale-95 active:border-gray-400 active:text-gray-900 active:bg-gray-50 transition-all text-xs md:text-sm font-medium text-gray-600 whitespace-nowrap min-h-[44px]">
                                        <RefreshCcw size={16} /> <span className="hidden sm:inline">{t.resetRotations}</span><span className="sm:hidden">Reset</span>
                                    </button>
                                </div>
                            )}

                            {currentTool === ToolType.MAKE_FILLABLE && (
                                <div className="flex justify-between items-center sticky top-0 bg-gray-50/95 py-2">
                                    <p className="text-sm font-medium text-gray-600">
                                        {headerText}
                                    </p>
                                    <span className="text-xs font-bold bg-canada-red text-white px-2 py-1 rounded-full shadow-sm">
                                        {selectedPages.size} {t.selected}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Global Utilities (Zoom) */}
                        <div className="w-full flex justify-end px-2 mb-2">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex items-center p-1 gap-0.5" role="group" aria-label="Zoom controls">
                                <button
                                    onClick={() => { triggerHaptic('light'); setPreviewZoom(z => Math.max(0.5, z - 0.1)); }}
                                    disabled={previewZoom <= 0.5}
                                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-900 active:bg-gray-100 active:text-canada-red rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    title="Zoom Out (Ctrl + -)"
                                    aria-label="Zoom out"
                                >
                                    <ZoomOut size={18} />
                                </button>
                                <span className="text-xs font-mono w-12 text-center text-gray-700 font-medium" aria-live="polite">{Math.round(previewZoom * 100)}%</span>
                                <button
                                    onClick={() => { triggerHaptic('light'); setPreviewZoom(z => Math.min(5.0, z + 0.1)); }}
                                    disabled={previewZoom >= 5.0}
                                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-900 active:bg-gray-100 active:text-canada-red rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    title="Zoom In (Ctrl + +)"
                                    aria-label="Zoom in"
                                >
                                    <ZoomIn size={18} />
                                </button>
                                <div className="w-px h-6 bg-gray-200 mx-1" aria-hidden="true"></div>
                                <button
                                    onClick={() => setPreviewZoom(1.0)}
                                    className="text-xs font-bold px-3 py-2 min-h-[44px] flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 rounded-lg text-gray-600 hover:text-gray-800 active:text-gray-900 transition-colors"
                                    title="Reset Zoom (Ctrl + 0)"
                                    aria-label="Reset zoom to 100%"
                                >
                                    100%
                                </button>
                            </div>
                        </div>

                        <div
                            className={`grid gap-3 md:gap-4 lg:gap-6 transition-all duration-300 w-full ${isDesktop ? 'p-2' : ''}`}
                            style={{
                                gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(minThumbnailWidth, baseThumbnailWidth * previewZoom)}px, 1fr))`
                            }}
                        >
                            {Array.from({ length: pageCount }).map((_, idx) => (
                                <PdfPageThumbnail
                                    key={idx}
                                    pdfJsDoc={pdfJsDoc}
                                    pageIndex={idx}
                                    isSelected={selectedPages.has(idx)}
                                    rotation={rotations[idx] || 0}
                                    mode={
                                        currentTool === ToolType.DELETE || currentTool === ToolType.PDF_PAGE_REMOVER
                                            ? 'delete'
                                            : currentTool === ToolType.MAKE_FILLABLE
                                                ? 'select'
                                                : 'rotate'
                                    }
                                    onClick={(e) => togglePageSelection(e, idx)}
                                    width={baseThumbnailWidth * previewZoom}
                                />
                            ))}
                        </div>
                    </div>
                ) : isSignTool ? (
                    <SignPdfTool
                        file={file}
                        onClose={onSoftReset}
                        pdfJsDoc={pdfJsDoc}
                        pageCount={pageCount}
                        t={t}
                        previewZoom={previewZoom}
                        setPreviewZoom={setPreviewZoom}
                        onSign={async (entries) => {
                            if (!file) return;
                            try {
                                const signedPdf = await signPdf(file, entries);
                                onAction(signedPdf);
                            } catch (e) {
                                if (process.env.NODE_ENV === 'development') {
                                    console.error("Signing failed", e);
                                }
                            }
                        }}
                    />
                ) : isOrganizeTool ? (
                    <div className="p-4 md:p-6 w-full">
                        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-4 text-sm flex items-start gap-2 border border-blue-100 shadow-sm">
                            <GripVertical size={18} className="mt-0.5 shrink-0" />
                            <p>{t.dragToReorder || 'Drag pages to reorder them. Click & hold, then drag to a new position.'}</p>
                        </div>
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handlePageDragEnd}>
                            <SortableContext items={pageOrder.map(p => `page-${p}`)} strategy={rectSortingStrategy}>
                                <div
                                    className={`grid gap-4 md:gap-6 transition-all duration-300 w-full ${isDesktop ? 'p-2' : 'p-4 pb-20'}`}
                                    style={{
                                        gridTemplateColumns: `repeat(auto-fill, minmax(${isDesktop ? Math.max(minThumbnailWidth, baseThumbnailWidth * previewZoom) : 140}px, 1fr))`
                                    }}
                                >
                                    {pageOrder.map((pageIdx, position) => (
                                        <SortableThumbnail
                                            key={`page-${pageIdx}`}
                                            id={`page-${pageIdx}`}
                                            pageIndex={pageIdx}
                                            pdfJsDoc={pdfJsDoc}
                                            width={baseThumbnailWidth * previewZoom}
                                            position={position + 1}
                                        />
                                    ))}
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                ) : isCropTool ? (
                    <CropPdfTool
                        file={file}
                        onClose={onSoftReset}
                        pdfJsDoc={pdfJsDoc}
                        pageCount={pageCount}
                        t={t}
                        zoom={previewZoom}
                        setZoom={setPreviewZoom}
                        onCrop={async (margins, pageIndices) => {
                            if (!file) return;
                            try {
                                const croppedPdf = await cropPdfPages(file, margins, pageIndices);
                                onAction(croppedPdf);
                            } catch (e) {
                                if (process.env.NODE_ENV === 'development') {
                                    console.error("Cropping failed", e);
                                }
                            }
                        }}

                    />
                ) : isCompressTool ? (
                    <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 md:p-8 w-full">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-canada-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/20">
                                    <Search size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">{t.toolCompress || "Compression Level"}</h3>
                                <p className="text-sm text-gray-500">{t.selectCompression || "Choose how much to reduce file size"}</p>
                            </div>

                            <div className="grid grid-cols-1 gap-3 md:gap-4">
                                <button
                                    onClick={() => { triggerHaptic('light'); setCompressionLevel && setCompressionLevel('good'); }}
                                    className={`p-5 md:p-6 rounded-2xl border-2 text-left transition-all active:scale-[0.98] min-h-[88px] flex items-center gap-4 ${compressionLevel === 'good' ? 'border-canada-red bg-red-50 shadow-lg shadow-red-500/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${compressionLevel === 'good' ? 'bg-canada-red text-white' : 'bg-gray-200 text-gray-500'}`}>
                                        <FileSearch size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-black text-gray-900 text-base md:text-lg">{t.compressGood || 'Good Quality'}</div>
                                        <div className="text-xs md:text-sm text-gray-500 mt-0.5">{t.compressGoodDesc || 'Best quality, selectable text preserved'}</div>
                                        <div className="text-[10px] font-bold text-green-600 mt-1 uppercase tracking-wider">~10-30% smaller</div>
                                    </div>
                                    {compressionLevel === 'good' && <div className="w-6 h-6 bg-canada-red rounded-full flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-white rounded-full" /></div>}
                                </button>

                                <button
                                    onClick={() => { triggerHaptic('light'); setCompressionLevel && setCompressionLevel('balanced'); }}
                                    className={`p-5 md:p-6 rounded-2xl border-2 text-left transition-all active:scale-[0.98] min-h-[88px] flex items-center gap-4 ${compressionLevel === 'balanced' ? 'border-canada-red bg-red-50 shadow-lg shadow-red-500/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${compressionLevel === 'balanced' ? 'bg-canada-red text-white' : 'bg-gray-200 text-gray-500'}`}>
                                        <FileSearch size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-black text-gray-900 text-base md:text-lg flex items-center gap-2">
                                            {t.compressBalanced || 'Balanced'}
                                            <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full uppercase">Recommended</span>
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-500 mt-0.5">{t.compressBalancedDesc || 'Good quality, optimized for sharing'}</div>
                                        <div className="text-[10px] font-bold text-orange-600 mt-1 uppercase tracking-wider">~40-60% smaller</div>
                                    </div>
                                    {compressionLevel === 'balanced' && <div className="w-6 h-6 bg-canada-red rounded-full flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-white rounded-full" /></div>}
                                </button>

                                <button
                                    onClick={() => { triggerHaptic('light'); setCompressionLevel && setCompressionLevel('extreme'); }}
                                    className={`p-5 md:p-6 rounded-2xl border-2 text-left transition-all active:scale-[0.98] min-h-[88px] flex items-center gap-4 ${compressionLevel === 'extreme' ? 'border-canada-red bg-red-50 shadow-lg shadow-red-500/10' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${compressionLevel === 'extreme' ? 'bg-canada-red text-white' : 'bg-gray-200 text-gray-500'}`}>
                                        <FileSearch size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-black text-gray-900 text-base md:text-lg">{t.compressExtreme || 'Maximum Compression'}</div>
                                        <div className="text-xs md:text-sm text-gray-500 mt-0.5">{t.compressExtremeDesc || 'Smallest size, images may lose detail'}</div>
                                        <div className="text-[10px] font-bold text-red-600 mt-1 uppercase tracking-wider">~70-90% smaller</div>
                                    </div>
                                    {compressionLevel === 'extreme' && <div className="w-6 h-6 bg-canada-red rounded-full flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-white rounded-full" /></div>}
                                </button>
                            </div>

                            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Info size={16} className="text-gray-400 shrink-0" />
                                    <p className="text-xs text-gray-500">
                                        {compressionLevel === 'good' && (t.compressGoodInfo || "Optimizes metadata and streams. Text remains selectable and searchable.")}
                                        {compressionLevel === 'balanced' && (t.compressBalancedInfo || "Re-renders pages at 150 DPI. Great for email attachments and web sharing.")}
                                        {compressionLevel === 'extreme' && (t.compressExtremeInfo || "Aggressive 96 DPI rendering. Best for archiving when file size matters most.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (currentTool === ToolType.PDF_TO_EPUB || currentTool === ToolType.PDF_TO_KINDLE) ? (
                    <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 md:p-8 w-full">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-canada-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/20">
                                    <BookOpen size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">{t.kindleSettings || "Kindle Optimization"}</h3>
                                <p className="text-sm text-gray-500">{t.kindleSettingsDesc || "Choose how your PDF is optimized for Kindle"}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <button
                                    onClick={() => { triggerHaptic('light'); setKindleMode && setKindleMode('reflow'); }}
                                    className={`p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] flex flex-col gap-3 ${kindleMode === 'reflow' ? 'border-canada-red bg-red-50 shadow-lg shadow-red-500/10' : 'border-gray-100 bg-gray-50/50'}`}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <div className={`p-2 rounded-lg ${kindleMode === 'reflow' ? 'bg-canada-red text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            <FileText size={20} />
                                        </div>
                                        {kindleMode === 'reflow' && <div className="w-5 h-5 bg-canada-red rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full" /></div>}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{t.reflowableMode || "Reflowable EPUB"}</div>
                                        <div className="text-xs text-gray-500 mt-1">{t.reflowableDesc || "Best for text-heavy books. Change fonts & sizes."}</div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => { triggerHaptic('light'); setKindleMode && setKindleMode('visual'); }}
                                    className={`p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] flex flex-col gap-3 ${kindleMode === 'visual' ? 'border-canada-red bg-red-50 shadow-lg shadow-red-500/10' : 'border-gray-100 bg-gray-50/50'}`}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <div className={`p-2 rounded-lg ${kindleMode === 'visual' ? 'bg-canada-red text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            <Search size={20} />
                                        </div>
                                        {kindleMode === 'visual' && <div className="w-5 h-5 bg-canada-red rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full" /></div>}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{t.visualMode || "Visual PDF"}</div>
                                        <div className="text-xs text-gray-500 mt-1">{t.visualDesc || "Smart cropping for complex layouts & columns."}</div>
                                    </div>
                                </button>
                            </div>

                            {kindleMode === 'visual' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-center justify-between px-1">
                                        <label className="text-sm font-bold text-gray-700">{t.kindleScreenSize || "Target Screen Size"}</label>
                                        <span className="text-sm font-black text-canada-red bg-red-50 px-3 py-1 rounded-full border border-red-100">{kindleScreenSize}"</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="6"
                                        max="10"
                                        step="1"
                                        value={kindleScreenSize}
                                        onChange={(e) => { triggerHaptic('light'); setKindleScreenSize && setKindleScreenSize(parseInt(e.target.value)); }}
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-canada-red"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 px-1 uppercase tracking-wider">
                                        <span>Kindle (6")</span>
                                        <span>Paperwhite (7")</span>
                                        <span>Scribe (10")</span>
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-3">
                                <Info size={16} className="text-canada-red shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {kindleMode === 'reflow'
                                        ? (t.reflowInfo || "Your PDF will be converted to a reflowable EPUB 3.0 file. Perfect for adjusting font size and reading on any Kindle device.")
                                        : (t.visualInfo || "K2PdfOpt-style optimization: We'll detect columns, crop margins, and re-paginate content to fit your Kindle screen without zooming.")
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex-grow flex flex-col items-center justify-center h-full text-center max-w-sm mx-auto p-6 w-full">
                        <div className="w-16 h-16 bg-red-100 text-canada-red rounded-2xl flex items-center justify-center mb-4">
                            {currentTool === ToolType.HEIC_TO_PDF && <ImageIcon size={32} />}
                            {currentTool === ToolType.EPUB_TO_PDF && <BookOpen size={32} />}
                            {currentTool === ToolType.CBR_TO_PDF && <BookOpen size={32} />}
                            {(currentTool === ToolType.PDF_TO_WORD || currentTool === ToolType.WORD_TO_PDF || currentTool === ToolType.XML_TO_PDF || currentTool === ToolType.EXCEL_TO_PDF) && <FileText size={32} />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{t.btnConvert}</h3>
                        <p className="text-gray-500 mb-6">
                            {t.readyToConvertDesc?.replace('{fileName}', file?.name || '')}
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Action - Hidden for Sign Tool as it has its own sidebar/modal actions */}
            {isSignTool || isCropTool || isCsvTool || isPhishingTool ? null : (
                <div
                    className="p-3 md:p-4 border-t border-gray-100 bg-white"
                    style={{ paddingBottom: 'max(12px, calc(env(safe-area-inset-bottom) + 12px))' }}
                >
                    <button
                        onClick={() => {
                            triggerHaptic('medium'); // Haptic for primary action
                            onAction();
                        }}
                        disabled={(currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.EXTRACT) && selectedPages.size === 0}
                        className={`
                  w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-base min-h-[56px] active:scale-[0.98]
                  ${(currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.EXTRACT) && selectedPages.size === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-canada-red text-white hover:bg-canada-darkRed hover:shadow-red-500/30 active:bg-canada-darkRed active:shadow-red-500/40'
                            }
              `}
                    >
                        {currentTool === ToolType.DELETE && t.btnRemove}
                        {currentTool === ToolType.PDF_PAGE_REMOVER && (t.btnRemove || "Remove Pages")}
                        {currentTool === ToolType.ROTATE && t.btnRotate}
                        {currentTool === ToolType.FLATTEN && (t.btnFlatten || "Make Non-Editable")}
                        {currentTool === ToolType.MAKE_FILLABLE && t.btnMakeFillable}
                        {currentTool === ToolType.ORGANIZE && (t.btnSave || 'Save Organized PDF')}
                        {currentTool === ToolType.SPLIT && (t.btnSplit || "Split PDF")}
                        {currentTool === ToolType.EXTRACT && (t.btnExtract || "Extract Pages")}
                        {currentTool === ToolType.COMPRESS && (t.btnCompress || "Compress PDF")}
                        {currentTool === ToolType.PDF_TO_XML && (t.btnConvert || "Convert to XML")}
                        {currentTool === ToolType.XML_TO_PDF && (t.btnConvert || "Convert to PDF")}
                        {currentTool === ToolType.EXCEL_TO_PDF && (t.btnConvert || "Convert to PDF")}
                        {(currentTool as any === ToolType.HEIC_TO_PDF || currentTool as any === ToolType.EPUB_TO_PDF || currentTool as any === ToolType.PDF_TO_EPUB || currentTool as any === ToolType.CBR_TO_PDF || currentTool as any === ToolType.PDF_TO_WORD || currentTool as any === ToolType.WORD_TO_PDF) && t.btnConvert}
                    </button>
                </div>
            )}
        </div>
    );
};
