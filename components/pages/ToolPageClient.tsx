'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ToolInterface } from '@/components/ToolInterface';
import { translations, Language } from '@/utils/i18n';
import { AppState, ToolType } from '@/utils/types';
import { UI_CONFIG } from '@/config/ui';
import type { ToolConfig } from '@/lib/toolConfig';
import {
  getPdfJsDocument,
  rotatePdfPages,
  deletePagesFromPdf,
  extractPdfPages,
  reorderPdfPages,
  mergePdfs,
  splitPdf,
  compressPdf,
  flattenPdf,
  makePdfFillable,
  initPdfWorker,
  convertHeicToPdf,
  convertPdfToEpub,
  convertEpubToPdf,
  convertCbrToPdf,
  convertPdfToWord,
  convertWordToPdf,
  convertPdfToXml,
  convertXmlToPdf,
  convertExcelToPdf,
  convertRtfToPdf,
  convertPdfToCsv,
  convertPdfToExcel,
  optimizePdfForKindleVisual,
  convertImageToPdf,
  convertPdfToAvifZip
} from '@/utils/pdfUtils';

interface ToolPageClientProps {
  toolConfig: ToolConfig;
  lang: Language;
}

export function ToolPageClient({ toolConfig, lang }: ToolPageClientProps) {
  const [appState, setAppState] = useState<AppState>(AppState.SELECTING);
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pdfJsDoc, setPdfJsDoc] = useState<any>(null);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rotations, setRotations] = useState<Record<number, number>>({});
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [previewZoom, setPreviewZoom] = useState<number>(1.0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string>('');
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<'good' | 'balanced' | 'extreme'>('balanced');
  const [processedSize, setProcessedSize] = useState<number | null>(null);
  const [pageRangeInput, setPageRangeInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [kindleMode, setKindleMode] = useState<'reflow' | 'visual'>('reflow');
  const [kindleScreenSize, setKindleScreenSize] = useState<number>(6);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastSelectedPageRef = useRef<number | null>(null);

  const t = translations[lang] as any; // Cast to any to allow dynamic key access

  // Initialize worker once
  useEffect(() => {
    initPdfWorker().catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
    });
  }, []);

  // Desktop detection
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= UI_CONFIG.BREAKPOINTS.LG);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Cleanup download URL
  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  // Cleanup PDF.js document
  useEffect(() => {
    const docToCleanup = pdfJsDoc;
    return () => {
      if (docToCleanup) {
        try {
          docToCleanup.cleanup?.();
          docToCleanup.destroy?.();
        } catch (e) {
          // console.debug('PDF.js cleanup failed', e);
        }
      }
    };
  }, [pdfJsDoc]);

  const onFileSelect = () => {
    fileInputRef.current?.click();
  };

  const processFile = useCallback(async (selectedFile: File) => {
    setIsProcessing(true);
    setErrorKey(null);
    setErrorMessage(null);
    try {
      // Special handling for non-PDF files that need conversion
      const toolType = toolConfig.tool;
      const isConversionTool = [
        ToolType.HEIC_TO_PDF,
        ToolType.EPUB_TO_PDF,
        ToolType.CBR_TO_PDF,
        ToolType.WORD_TO_PDF,
        ToolType.XML_TO_PDF,
        ToolType.EXCEL_TO_PDF,
        ToolType.RTF_TO_PDF,
        ToolType.IMAGE_TO_PDF
      ].includes(toolType);

      if (isConversionTool) {
        // For conversion tools, we just set the file and moving to processing state is handled by UI
        // We don't try to load it as a PDF yet
        setFile(selectedFile);
        setFiles([selectedFile]);
        setAppState(AppState.PREVIEW);
        setIsProcessing(false);
        return;
      }

      // For PDF tools, load the document
      if (selectedFile.type !== 'application/pdf' && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
        throw new Error('Please upload a valid PDF file.');
      }

      const doc = await getPdfJsDocument(selectedFile);
      setPdfJsDoc(doc);
      setPageCount(doc.numPages);
      setFile(selectedFile);

      // If it's merge tool, append to files array
      if (toolType === ToolType.MERGE) {
        setFiles(prev => [...prev, selectedFile]);
      } else {
        setFiles([selectedFile]);
      }

      // Initialize page order
      const order = Array.from({ length: doc.numPages }, (_, i) => i);
      setPageOrder(order);

      setAppState(AppState.PREVIEW);
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      if (err instanceof Error) setErrorMessage(err.message);
      setErrorKey('errorGeneric'); // Simplified error handling
    } finally {
      setIsProcessing(false);
    }
  }, [toolConfig.tool]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      // Handle multiple files for Merge
      if (toolConfig.tool === ToolType.MERGE || toolConfig.tool === ToolType.IMAGE_TO_PDF) {
        Array.from(selectedFiles).forEach(f => processFile(f));
      } else {
        processFile(selectedFiles[0]);
      }
    }
    // Reset input
    e.target.value = '';
  };

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageRangeInput(e.target.value);
    // Parse range and update selectedPages
    const value = e.target.value;
    const newSelected = new Set<number>();
    const parts = value.split(',');

    parts.forEach(part => {
      const range = part.trim().split('-').map(Number);
      if (range.length === 2) {
        const [start, end] = range;
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= pageCount) newSelected.add(i - 1);
          }
        }
      } else if (range.length === 1) {
        const page = range[0];
        if (!isNaN(page) && page >= 1 && page <= pageCount) {
          newSelected.add(page - 1);
        }
      }
    });
    setSelectedPages(newSelected);
  };

  const togglePageSelection = (e: any, idx: number) => {
    const isShift = e.shiftKey;

    setSelectedPages(prev => {
      const newSet = new Set(prev);

      if (isShift && lastSelectedPageRef.current !== null) {
        const start = Math.min(lastSelectedPageRef.current, idx);
        const end = Math.max(lastSelectedPageRef.current, idx);
        const shouldAdd = !prev.has(idx); // Determine if we are adding or removing based on the clicked item

        for (let i = start; i <= end; i++) {
          if (shouldAdd) newSet.add(i);
          else newSet.delete(i);
        }
      } else {
        if (newSet.has(idx)) {
          newSet.delete(idx);
        } else {
          newSet.add(idx);
        }
      }
      return newSet;
    });

    lastSelectedPageRef.current = idx;
  };

  const rotateAll = (direction: 'left' | 'right') => {
    setRotations(prev => {
      const newRotations = { ...prev };
      for (let i = 0; i < pageCount; i++) {
        const current = newRotations[i] || 0;
        newRotations[i] = (current + (direction === 'right' ? 90 : -90)) % 360;
      }
      return newRotations;
    });
  };

  const resetRotations = () => {
    setRotations({});
  };

  const onSoftReset = () => {
    setFile(null);
    setFiles([]);
    setPageCount(0);
    setPdfJsDoc(null);
    setSelectedPages(new Set());
    setRotations({});
    setPageOrder([]);
    setDownloadUrl(null);
    setDownloadName('');
    setDownloadName('');
    setErrorKey(null);
    setErrorMessage(null);
    setAppState(AppState.SELECTING);
    setPageRangeInput('');
  };

  const onAction = async (processedBlobData?: Blob | Uint8Array) => {
    if (!file && !files.length) return;
    setIsProcessing(true); // Should trigger a global loading state if we had one

    try {
      let resultBlob: Blob | Uint8Array;
      let outputName = file ? file.name : 'document.pdf';

      // Use provided blob if available (from Sign or Crop tools)
      if (processedBlobData) {
        resultBlob = processedBlobData;
        outputName = `processed_${file?.name || 'document.pdf'}`;
      } else {
        // Perform action based on tool type
        const primaryFile = file!;

        switch (toolConfig.tool) {
          case ToolType.ROTATE:
            // Convert rotations map to numbers
            resultBlob = await rotatePdfPages(primaryFile, rotations);
            outputName = `rotated_${primaryFile.name}`;
            break;

          case ToolType.DELETE:
          case ToolType.PDF_PAGE_REMOVER:
            resultBlob = await deletePagesFromPdf(primaryFile, Array.from(selectedPages));
            outputName = `trimmed_${primaryFile.name}`;
            break;

          case ToolType.ORGANIZE:
            resultBlob = await reorderPdfPages(primaryFile, pageOrder);
            outputName = `organized_${primaryFile.name}`;
            break;

          case ToolType.MERGE:
            if (files.length < 2) throw new Error('Need at least 2 files to merge');
            // Sort files based on UI order if needed, but current UI sorts `files` array directly
            resultBlob = await mergePdfs(files);
            outputName = `merged_${files.length}_files.pdf`;
            break;

          case ToolType.SPLIT:
            // Returns a ZIP blob
            resultBlob = await splitPdf(primaryFile, Array.from(selectedPages));
            outputName = `split_${primaryFile.name.replace('.pdf', '')}.zip`;
            break;

          case ToolType.EXTRACT:
            resultBlob = await extractPdfPages(primaryFile, Array.from(selectedPages));
            outputName = `extracted_${primaryFile.name}`;
            break;

          case ToolType.COMPRESS:
            resultBlob = await compressPdf(primaryFile, compressionLevel);
            outputName = `compressed_${primaryFile.name}`;
            break;

          case ToolType.FLATTEN:
            resultBlob = await flattenPdf(primaryFile);
            outputName = `flattened_${primaryFile.name}`;
            break;

          case ToolType.MAKE_FILLABLE:
            resultBlob = await makePdfFillable(primaryFile, Array.from(selectedPages), pdfJsDoc);
            outputName = `fillable_${primaryFile.name}`;
            break;

          case ToolType.HEIC_TO_PDF:
            resultBlob = await convertHeicToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.(heic|heif)$/i, '.pdf');
            break;

          case ToolType.IMAGE_TO_PDF:
            resultBlob = await convertImageToPdf(files);
            outputName = primaryFile.name.replace(/\.(jpg|jpeg|png|webp|gif|avif)$/i, '.pdf');
            break;

          case ToolType.PDF_TO_IMAGE:
            resultBlob = await convertPdfToAvifZip(primaryFile, Array.from(selectedPages));
            outputName = primaryFile.name.replace(/\.pdf$/i, '_images.zip');
            break;

          case ToolType.EPUB_TO_PDF:
            resultBlob = await convertEpubToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.epub$/i, '.pdf');
            break;

          case ToolType.PDF_TO_EPUB:
          case ToolType.PDF_TO_KINDLE:
            if (kindleMode === 'visual') {
              resultBlob = await optimizePdfForKindleVisual(primaryFile, kindleScreenSize);
              outputName = `kindle_${primaryFile.name}`;
            } else {
              // Returns a ZIP blob (epub is zip)
              resultBlob = await convertPdfToEpub(primaryFile);
              outputName = primaryFile.name.replace(/\.pdf$/i, '.epub');
            }
            break;

          case ToolType.CBR_TO_PDF:
            resultBlob = await convertCbrToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.(cbr|cbz|rar|zip)$/i, '.pdf');
            break;

          case ToolType.PDF_TO_WORD:
            resultBlob = await convertPdfToWord(primaryFile);
            outputName = primaryFile.name.replace(/\.pdf$/i, '.docx');
            break;

          case ToolType.WORD_TO_PDF:
            resultBlob = await convertWordToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.(docx|doc)$/i, '.pdf');
            break;

          case ToolType.PDF_TO_XML:
            resultBlob = await convertPdfToXml(primaryFile);
            outputName = primaryFile.name.replace(/\.pdf$/i, '.xml');
            break;

          case ToolType.XML_TO_PDF:
            resultBlob = await convertXmlToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.xml$/i, '.pdf');
            break;

          case ToolType.EXCEL_TO_PDF:
            resultBlob = await convertExcelToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.(xlsx|xls)$/i, '.pdf');
            break;

          case ToolType.RTF_TO_PDF:
            resultBlob = await convertRtfToPdf(primaryFile);
            outputName = primaryFile.name.replace(/\.rtf$/i, '.pdf');
            break;

          case ToolType.PDF_TO_CSV:
            resultBlob = await convertPdfToCsv(primaryFile);
            outputName = primaryFile.name.replace(/\.pdf$/i, '.csv');
            break;


          case ToolType.PDF_TO_EXCEL:
            resultBlob = await convertPdfToExcel(primaryFile);
            outputName = primaryFile.name.replace(/\.pdf$/i, '.xlsx');
            break;

          default:
            throw new Error('Tool conversion not implemented yet');
        }
      }

      // Create download
      const url = URL.createObjectURL(new Blob([resultBlob as any]));
      setDownloadUrl(url);
      setDownloadName(outputName);
      if (files.length > 0) {
        setProcessedSize(resultBlob instanceof Uint8Array ? resultBlob.byteLength : (resultBlob as Blob).size);
      }
      setAppState(AppState.COMPLETE);

      // Auto-trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = outputName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Action failed:', error);
      }
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      setErrorKey('errorGeneric');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <ToolInterface
        file={file}
        files={files}
        setFiles={setFiles}
        currentTool={toolConfig.tool}
        lang={lang}
        t={t}
        pageCount={pageCount}
        pdfJsDoc={pdfJsDoc}
        tools={[toolConfig]}
        selectedPages={selectedPages}
        rotations={rotations}
        previewZoom={previewZoom}
        isDesktop={isDesktop}
        pageOrder={pageOrder}
        setPageOrder={setPageOrder}
        onFileSelect={onFileSelect}
        onAction={onAction}
        onSoftReset={onSoftReset}
        togglePageSelection={togglePageSelection}
        setSelectedPages={setSelectedPages}
        rotateAll={rotateAll}
        resetRotations={resetRotations}
        setPreviewZoom={setPreviewZoom}
        processFile={processFile}
        handleFileChange={handleFileChange}
        pageRangeInput={pageRangeInput}
        setPageRangeInput={setPageRangeInput}
        handleRangeInputChange={handleRangeInputChange}
        compressionLevel={compressionLevel}
        setCompressionLevel={setCompressionLevel}
        kindleMode={kindleMode}
        setKindleMode={setKindleMode}
        kindleScreenSize={kindleScreenSize}
        setKindleScreenSize={setKindleScreenSize}
      />

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept={toolConfig.accept}
        multiple={toolConfig.tool === ToolType.MERGE}
      />

      {/* Error Overlay */}
      {errorKey && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in">
            <div className="text-red-500 mb-4 font-bold text-lg">Error</div>
            <p className="text-gray-600 mb-6">{errorMessage || t[errorKey] || 'An error occurred while processing your file.'}</p>
            <button
              onClick={() => { setErrorKey(null); setErrorMessage(null); }}
              className="w-full bg-canada-red text-white font-bold py-3 rounded-xl hover:bg-canada-darkRed transition-colors"
            >
              {t.btnTryAgain || 'Try Again'}
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-canada-red border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-lg font-bold text-gray-800 animate-pulse">{t.processing || 'Processing...'}</p>
        </div>
      )}
    </>
  );
}
