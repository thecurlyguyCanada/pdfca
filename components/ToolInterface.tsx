import React, { useRef } from 'react';
import { Trash2, PenTool, ScanLine, Move, RotateCw, RotateCcw, RefreshCcw, ZoomOut, ZoomIn, Image, BookOpen, FileText } from 'lucide-react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import { ToolType } from '../utils/types';
import { translations } from '../utils/i18n';
import { PdfPageThumbnail } from './PdfPageThumbnail';
import { SortablePdfPageThumbnail } from './SortablePdfPageThumbnail';
import { FileProcessor } from './FileProcessor';

// We need to define the tool interface prop structure clearly
interface ToolInterfaceProps {
    file: File | null;
    currentTool: ToolType;
    t: typeof translations['en'];

    // State
    pageCount: number;
    pdfJsDoc: any;
    items: number[];
    selectedPages: Set<number>;
    rotations: Record<number, number>;
    previewZoom: number;

    // Actions
    onFileSelect: (file: File) => void;
    onAction: () => void;
    onSoftReset: () => void; // "X" button

    togglePageSelection: (e: React.MouseEvent, pageIndex: number) => void;
    rotateAll: (direction: 'left' | 'right') => void;
    resetRotations: () => void;
    setPreviewZoom: (zoom: number | ((prev: number) => number)) => void;

    // DND
    sensors: any;
    handleDragEnd: (event: any) => void;

    // Tool Config (from App usually)
    tools: { id: ToolType; icon: any; title: string; desc: string; accept: string; }[];
}

export const ToolInterface: React.FC<ToolInterfaceProps> = ({
    file,
    currentTool,
    t,
    pageCount,
    pdfJsDoc,
    items,
    selectedPages,
    rotations,
    previewZoom,
    onFileSelect,
    onAction,
    onSoftReset,
    togglePageSelection,
    rotateAll,
    resetRotations,
    setPreviewZoom,
    sensors,
    handleDragEnd,
    tools
}) => {
    const currentToolConfig = tools.find(t => t.id === currentTool);

    // If no file, show the Upload Processor
    if (!file) {
        return (
            <FileProcessor
                tool={currentToolConfig}
                t={t}
                onFileSelect={onFileSelect}
            />
        );
    }

    const isVisualTool = currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.OCR || currentTool === ToolType.ORGANIZE;

    // Determine Header Text
    let headerText = '';
    if (currentTool === ToolType.DELETE) headerText = t.selectPagesHeader;
    else if (currentTool === ToolType.ROTATE) headerText = ''; // Custom toolbar
    else if (currentTool === ToolType.MAKE_FILLABLE) headerText = t.selectPagesToFill;
    else if (currentTool === ToolType.OCR) headerText = t.selectPagesForOcr;
    else if (currentTool === ToolType.ORGANIZE) headerText = "Drag pages to reorder";

    // Action Button Logic
    const isActionDisabled = (currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.OCR) && selectedPages.size === 0;

    return (
        <div className="flex flex-col h-[600px]">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 text-canada-red rounded-lg flex items-center justify-center shrink-0">
                        <FileText size={20} />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-gray-800 truncate max-w-[200px]">{file.name}</h3>
                        <p className="text-xs text-gray-500 flex items-center gap-2">
                            <span>{Math.round(file.size / 1024)} KB</span>
                        </p>
                    </div>
                </div>
                <button onClick={onSoftReset} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Trash2 size={20} /> {/* Using Trash/X as 'Remove File' icon */}
                </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6 bg-gray-50 custom-scrollbar flex flex-col items-center">

                {isVisualTool ? (
                    <>
                        <div className="w-full mb-4 sticky top-0 bg-gray-50/95 backdrop-blur-sm z-10 py-2">
                            {currentTool === ToolType.ROTATE || currentTool === ToolType.ORGANIZE ? (
                                // Custom Toolbar for Rotate OR ORGANIZE
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    {currentTool === ToolType.ROTATE && (
                                        <>
                                            <button onClick={() => rotateAll('left')} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 hover:text-canada-red transition-all text-sm font-medium text-gray-700">
                                                <RotateCcw size={16} /> {t.rotateAllLeft}
                                            </button>
                                            <button onClick={() => rotateAll('right')} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-canada-red/50 hover:text-canada-red transition-all text-sm font-medium text-gray-700">
                                                <RotateCw size={16} /> {t.rotateAllRight}
                                            </button>
                                            <button onClick={resetRotations} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400 hover:text-gray-900 transition-all text-sm font-medium text-gray-500">
                                                <RefreshCcw size={16} /> {t.resetRotations}
                                            </button>
                                            <div className="w-px h-6 bg-gray-300 mx-1"></div>
                                        </>
                                    )}

                                    <button onClick={() => setPreviewZoom(z => Math.max(0.5, z - 0.25))} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600" title="Zoom Out">
                                        <ZoomOut size={16} />
                                    </button>
                                    <button onClick={() => setPreviewZoom(z => Math.min(3, z + 0.25))} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600" title="Zoom In">
                                        <ZoomIn size={16} />
                                    </button>
                                </div>
                            ) : (
                                // Standard Header for Delete/Fillable/OCR
                                <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <p className="text-sm font-medium text-gray-600">
                                            {headerText}
                                        </p>
                                        {(currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.OCR) && (
                                            <span className="text-xs font-bold bg-canada-red text-white px-2 py-1 rounded-full shadow-sm">
                                                {selectedPages.size} {t.selected}
                                            </span>
                                        )}
                                    </div>

                                    {/* Zoom Controls Shared */}
                                    <div className="flex items-center gap-1 bg-gray-50 rounded-lg border border-gray-200 p-1">
                                        <button onClick={() => setPreviewZoom(z => Math.max(0.5, z - 0.25))} className="p-1 hover:bg-white rounded transition-colors text-gray-500">
                                            <ZoomOut size={14} />
                                        </button>
                                        <span className="text-xs font-mono w-8 text-center text-gray-400">{Math.round(previewZoom * 100)}%</span>
                                        <button onClick={() => setPreviewZoom(z => Math.min(3, z + 0.25))} className="p-1 hover:bg-white rounded transition-colors text-gray-500">
                                            <ZoomIn size={14} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 w-full">
                            {currentTool === ToolType.ORGANIZE ? (
                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                    <SortableContext items={items} strategy={rectSortingStrategy}>
                                        {items.map((pageIndex) => (
                                            <SortablePdfPageThumbnail
                                                key={pageIndex}
                                                id={pageIndex.toString()}
                                                pdfJsDoc={pdfJsDoc}
                                                pageIndex={pageIndex}
                                                width={200 * previewZoom}
                                            />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                            ) : (
                                Array.from({ length: pageCount }).map((_, idx) => (
                                    <div key={idx} style={{ width: 'fit-content' }}>
                                        <PdfPageThumbnail
                                            pdfJsDoc={pdfJsDoc}
                                            pageIndex={idx}
                                            isSelected={selectedPages.has(idx)}
                                            rotation={rotations[idx] || 0}
                                            mode={currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.OCR ? 'delete' : 'rotate'} // 'delete' mode enables selection styling
                                            onClick={(e) => togglePageSelection(e, idx)}
                                            width={200 * previewZoom}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center max-w-sm">
                        <div className="w-16 h-16 bg-red-100 text-canada-red rounded-2xl flex items-center justify-center mb-4">
                            {currentTool === ToolType.HEIC_TO_PDF && <Image size={32} />}
                            {currentTool === ToolType.EPUB_TO_PDF && <BookOpen size={32} />}
                            {currentTool === ToolType.PDF_TO_EPUB && <FileText size={32} />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{t.btnConvert}</h3>
                        <p className="text-gray-500 mb-6">
                            Ready to convert <strong>{file.name}</strong>. This might take a few moments depending on the file size, eh.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Action */}
            <div className="p-4 border-t border-gray-100 bg-white">
                <button
                    onClick={onAction}
                    disabled={isActionDisabled}
                    className={`
            w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2
            ${isActionDisabled
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-canada-red hover:bg-canada-darkRed text-white shadow-red-500/30 hover:-translate-y-0.5'}
          `}
                >
                    {currentTool === ToolType.DELETE && (
                        <>
                            <Trash2 size={20} />
                            {selectedPages.size === 0 ? t.selectPagesHeader : `${t.btnRemove} ${selectedPages.size}`}
                        </>
                    )}
                    {currentTool === ToolType.MAKE_FILLABLE && (
                        <>
                            <PenTool size={20} />
                            {selectedPages.size === 0 ? t.selectPagesToFill : `${t.btnMakeFillable}`}
                        </>
                    )}
                    {currentTool === ToolType.OCR && (
                        <>
                            <ScanLine size={20} />
                            {selectedPages.size === 0 ? t.selectPagesForOcr : `${t.btnSearchablePdf}`}
                        </>
                    )}
                    {currentTool === ToolType.ORGANIZE && (
                        <>
                            <Move size={20} />
                            Save Organized PDF
                        </>
                    )}
                    {currentTool === ToolType.ROTATE && <><RotateCw size={20} /> {t.btnRotate}</>}
                    {(currentTool === ToolType.HEIC_TO_PDF || currentTool === ToolType.EPUB_TO_PDF || currentTool === ToolType.PDF_TO_EPUB) && (
                        <>{t.btnConvert}</>
                    )}
                </button>
            </div>
        </div>
    );
};
