import React, { useRef } from 'react';
import { Download, FileText, X, AlertCircle, CheckCircle2, Shield, Trash2, RotateCw, Image, BookOpen, ArrowLeft, PenTool, RotateCcw, RefreshCcw, Info, ZoomIn, ZoomOut } from 'lucide-react';
import { PdfPageThumbnail } from './PdfPageThumbnail';
import { formatFileSize } from '../utils/pdfUtils';
import { ToolType } from '../App';
import { SignPdfTool } from './SignPdfTool';
import { signPdf, SignatureEntry } from '../utils/pdfUtils';

interface ToolInterfaceProps {
    file: File | null;
    currentTool: ToolType;
    t: any;
    pageCount: number;
    pdfJsDoc: any;
    tools: any[];
    selectedPages: Set<number>;
    rotations: { [key: number]: number };
    previewZoom: number;
    onFileSelect: () => void;
    onAction: () => void;
    onSoftReset: () => void;
    togglePageSelection: (e: any, idx: number) => void;
    rotateAll: (direction: 'left' | 'right') => void;
    resetRotations: () => void;
    setPreviewZoom: React.Dispatch<React.SetStateAction<number>>;
    processFile: (file: File) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pageRangeInput: string;
    setPageRangeInput: (val: string) => void;
    handleRangeInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToolInterface: React.FC<ToolInterfaceProps> = ({
    file,
    currentTool,
    t,
    pageCount,
    pdfJsDoc,
    tools,
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
    processFile,
    handleFileChange,
    pageRangeInput,
    setPageRangeInput,
    handleRangeInputChange
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const pageRangeInputRef = useRef<HTMLInputElement>(null);

    if (!file) {
        const tool = tools.find(t => t.id === currentTool);
        return (
            <div
                className="flex-grow flex flex-col items-center justify-center p-6 md:p-10 text-center cursor-pointer hover:bg-gray-50 transition-colors group border-2 border-dashed border-transparent hover:border-canada-red/20 m-2 md:m-4 rounded-2xl md:rounded-3xl active:scale-[0.99]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        processFile(e.dataTransfer.files[0]);
                    }
                }}
                onClick={() => fileInputRef.current?.click()}
            >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {tool && <tool.icon size={28} className="md:w-8 md:h-8" />}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{tool?.title}</h3>
                <p className="text-sm md:text-base text-gray-500 mb-2">{t.uploadDesc} ({tool?.accept})</p>

                <div className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500 mb-6 md:mb-8">
                    <Shield size={12} /> {t.processedLocally}
                </div>

                <button className="w-full max-w-xs bg-canada-red hover:bg-canada-darkRed active:bg-canada-darkRed text-white px-6 md:px-8 py-4 rounded-full font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/40 active:shadow-red-500/50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-base min-h-[56px]">
                    {t.selectFile}
                </button>
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

    const isVisualTool = currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.SIGN;
    const isPageSelectionTool = currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE;
    const isSignTool = currentTool === ToolType.SIGN || (currentTool as string) === 'SIGN';

    let headerText = '';
    if (currentTool === ToolType.DELETE) headerText = t.selectPagesHeader;
    else if (currentTool === ToolType.ROTATE) headerText = '';
    else if (currentTool === ToolType.MAKE_FILLABLE) headerText = t.selectPagesToFill;

    return (
        <div className={`flex flex-col overflow-hidden ${isSignTool ? 'h-full w-full' : 'h-[calc(100dvh-64px)] md:h-auto md:min-h-[600px]'}`}>
            {/* Header - Hide for Sign Tool (it has its own custom floating header) */}
            {!isSignTool && (
                <div className="p-3 md:p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 md:w-10 md:h-10 bg-red-100 text-canada-red rounded-lg flex items-center justify-center shrink-0">
                            <FileText size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-gray-800 truncate text-sm md:text-base max-w-[180px] md:max-w-[200px]">{file.name}</h3>
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
            <div className={`flex-grow ${isSignTool ? 'overflow-hidden' : 'overflow-auto'} bg-gray-50 custom-scrollbar flex flex-col items-stretch w-full relative`}>
                {isPageSelectionTool ? (
                    <div className="p-4 md:p-6 w-full">
                        <div className="w-full mb-4 z-10 py-2">
                            {currentTool === ToolType.DELETE && (
                                <div className="w-full max-w-2xl mx-auto mb-6 transition-all duration-300">
                                    <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-4 text-sm flex items-start gap-2 border border-blue-100 shadow-sm">
                                        <Info size={18} className="mt-0.5 shrink-0" />
                                        <p>{t.deletePagesInfo}</p>
                                    </div>

                                    <div className="flex items-center justify-between mb-2 px-1">
                                        <span className="font-medium text-gray-700">{t.totalPages}: {pageCount}</span>
                                        {selectedPages.size > 0 && (
                                            <span className="text-xs font-bold bg-canada-red text-white px-2 py-1 rounded-full shadow-sm">
                                                {selectedPages.size} {t.selected}
                                            </span>
                                        )}
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
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-canada-red focus:border-transparent outline-none transition-all shadow-sm text-base text-gray-800 placeholder-gray-400"
                                            placeholder="e.g. 3-5, 8-9"
                                        />
                                    </div>
                                </div>
                            )}

                            {currentTool === ToolType.ROTATE && (
                                <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide sticky top-0 bg-gray-50/95 backdrop-blur-sm pt-2">
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
                                <div className="flex justify-between items-center sticky top-0 bg-gray-50/95 backdrop-blur-sm py-2">
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
                                    onClick={() => setPreviewZoom(z => Math.max(0.5, z - 0.1))}
                                    disabled={previewZoom <= 0.5}
                                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-900 active:bg-gray-100 active:text-canada-red rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    title="Zoom Out (Ctrl + -)"
                                    aria-label="Zoom out"
                                >
                                    <ZoomOut size={18} />
                                </button>
                                <span className="text-xs font-mono w-12 text-center text-gray-700 font-medium" aria-live="polite">{Math.round(previewZoom * 100)}%</span>
                                <button
                                    onClick={() => setPreviewZoom(z => Math.min(5.0, z + 0.1))}
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
                            className="grid gap-3 md:gap-4 transition-all duration-300 w-full"
                            style={{
                                gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(120, 200 * previewZoom)}px, 1fr))`
                            }}
                        >
                            {Array.from({ length: pageCount }).map((_, idx) => (
                                <PdfPageThumbnail
                                    key={idx}
                                    pdfJsDoc={pdfJsDoc}
                                    pageIndex={idx}
                                    isSelected={selectedPages.has(idx)}
                                    rotation={rotations[idx] || 0}
                                    mode={currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE ? 'delete' : 'rotate'}
                                    onClick={(e) => togglePageSelection(e, idx)}
                                    width={200 * previewZoom}
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
                                (onAction as any)(signedPdf);
                            } catch (e) {
                                console.error("Signing failed", e);
                            }
                        }}
                    />
                ) : (
                    <div className="flex-grow flex flex-col items-center justify-center h-full text-center max-w-sm mx-auto p-6 w-full">
                        <div className="w-16 h-16 bg-red-100 text-canada-red rounded-2xl flex items-center justify-center mb-4">
                            {currentTool === ToolType.HEIC_TO_PDF && <Image size={32} />}
                            {currentTool === ToolType.EPUB_TO_PDF && <BookOpen size={32} />}
                            {currentTool === ToolType.PDF_TO_EPUB && <FileText size={32} />}
                            {currentTool === ToolType.CBR_TO_PDF && <BookOpen size={32} />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{t.btnConvert}</h3>
                        <p className="text-gray-500 mb-6">
                            Ready to convert <strong>{file.name}</strong>. This might take a few moments depending on the file size, eh.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Action - Hidden for Sign Tool as it has its own sidebar/modal actions */}
            {isSignTool ? null : (
                <div
                    className="p-3 md:p-4 border-t border-gray-100 bg-white"
                    style={{ paddingBottom: 'max(12px, calc(var(--safe-area-inset-bottom) + 12px))' }}
                >
                    <button
                        onClick={() => {
                            if (isSignTool) {
                                // Find the sign button inside SignPdfTool or trigger its save
                                const btn = document.getElementById('footer-sign-trigger');
                                if (btn) btn.click();
                            } else {
                                onAction();
                            }
                        }}
                        disabled={(currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE) && selectedPages.size === 0}
                        className={`
                        w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-base min-h-[56px] active:scale-[0.98]
                        ${(currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE) && selectedPages.size === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-canada-red text-white hover:bg-canada-darkRed hover:shadow-red-500/30 active:bg-canada-darkRed active:shadow-red-500/40'
                            }
                    `}
                    >
                        {currentTool === ToolType.DELETE && t.btnRemove}
                        {currentTool === ToolType.ROTATE && t.btnRotate}
                        {currentTool === ToolType.MAKE_FILLABLE && t.btnMakeFillable}
                        {currentTool === ToolType.SIGN && t.btnSign}
                        {(currentTool === ToolType.HEIC_TO_PDF || currentTool === ToolType.EPUB_TO_PDF || currentTool === ToolType.PDF_TO_EPUB || currentTool === ToolType.CBR_TO_PDF) && t.btnConvert}
                    </button>
                </div>
            )}
        </div>
    );
};
