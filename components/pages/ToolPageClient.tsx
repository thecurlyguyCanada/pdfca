'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ToolInterface } from '@/components/ToolInterface';
import { translations, Language } from '@/utils/i18n';
import { AppState, ToolType } from '@/utils/types';
import { UI_CONFIG } from '@/config/ui';
import { triggerHaptic } from '@/utils/haptics';
import type { ToolConfig } from '@/lib/toolConfig';

interface ToolPageClientProps {
  toolConfig: ToolConfig;
  lang: Language;
}

export function ToolPageClient({ toolConfig, lang }: ToolPageClientProps) {
  const currentTool = toolConfig.tool;
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
  const [errorKey, setErrorKey] = useState<keyof typeof translations['en'] | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<'good' | 'balanced' | 'extreme'>('balanced');
  const [processedSize, setProcessedSize] = useState<number | null>(null);
  const [pageRangeInput, setPageRangeInput] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastSelectedPageRef = useRef<number | null>(null);
  const pageRangeInputRef = useRef<HTMLInputElement>(null);
  const operationIdRef = useRef<number>(0);

  const t = translations[lang];

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
          console.debug('PDF.js cleanup failed', e);
        }
      }
    };
  }, [pdfJsDoc]);

  const onFileSelect = () => {
    fileInputRef.current?.click();
  };

  const onAction = async (processedBlob?: Blob | Uint8Array) => {
    console.log('[HANDLE ACTION] Called with file:', file, 'processedBlob:', processedBlob);
    if (!file) {
      console.error('[HANDLE ACTION] NO FILE! Returning early.');
      return;
    }

    try {
      console.log('[HANDLE ACTION] Setting state to PROCESSING for tool:', currentTool);
      setAppState(AppState.PROCESSING);

      const opId = ++operationIdRef.current;

      let resultBlob: Blob | Uint8Array | null = processedBlob || null;
      let outName = file.name;

      if (!resultBlob) {
        const {
          deletePagesFromPdf,
          rotatePdfPages,
          makePdfFillable,
          reorderPdfPages,
          convertPdfToEpub,
          convertEpubToPdf,
          flattenPdf,
          compressPdf,
          mergePdfs,
          splitPdf,
          extractPdfPages,
          convertPdfToXml,
          convertXmlToPdf
        } = await import('@/utils/corePdfUtils');

        switch (currentTool) {
          case ToolType.DELETE:
          case ToolType.PDF_PAGE_REMOVER:
            resultBlob = await deletePagesFromPdf(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_cleaned_eh.pdf');
            break;
          case ToolType.ROTATE:
            resultBlob = await rotatePdfPages(file, rotations);
            outName = file.name.replace('.pdf', '_rotated_eh.pdf');
            break;
          case ToolType.MAKE_FILLABLE:
            resultBlob = await makePdfFillable(file, Array.from(selectedPages), pdfJsDoc);
            outName = file.name.replace('.pdf', '_fillable_eh.pdf');
            break;
          case ToolType.HEIC_TO_PDF:
            {
              const { convertHeicToPdf } = await import('@/utils/heavyConversions');
              resultBlob = await convertHeicToPdf(file);
              outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            }
            break;
          case ToolType.EPUB_TO_PDF:
            resultBlob = await convertEpubToPdf(file);
            outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            break;
          case ToolType.PDF_TO_EPUB:
            resultBlob = await convertPdfToEpub(file);
            outName = file.name.replace('.pdf', '_converted_eh.epub');
            break;
          case ToolType.CBR_TO_PDF:
            {
              const { convertCbrToPdf } = await import('@/utils/heavyConversions');
              resultBlob = await convertCbrToPdf(file);
              outName = file.name.replace(/\.[^/.]+$/, "") + "_converted_eh.pdf";
            }
            break;
          case ToolType.ORGANIZE:
            resultBlob = await reorderPdfPages(file, pageOrder);
            outName = file.name.replace('.pdf', '_organized_eh.pdf');
            break;
          case ToolType.PDF_TO_WORD:
            {
              const { convertPdfToWord } = await import('@/utils/heavyConversions');
              resultBlob = await convertPdfToWord(file);
              outName = file.name.replace('.pdf', '_converted_eh.docx');
            }
            break;
          case ToolType.WORD_TO_PDF:
            {
              const { convertWordToPdf } = await import('@/utils/heavyConversions');
              resultBlob = await convertWordToPdf(file);
              outName = file.name.replace('.docx', '.pdf');
            }
            break;
          case ToolType.FLATTEN:
            resultBlob = await flattenPdf(file);
            outName = file.name.replace('.pdf', '_flat.pdf');
            break;
          case ToolType.COMPRESS:
            resultBlob = await compressPdf(file, compressionLevel);
            outName = file.name.replace('.pdf', '_compressed.pdf');
            break;
          case ToolType.MERGE:
            if (files.length > 0) {
              resultBlob = await mergePdfs(files);
              outName = 'merged_document.pdf';
            }
            break;
          case ToolType.SPLIT:
            resultBlob = await splitPdf(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_pages.zip');
            break;
          case ToolType.EXTRACT:
            resultBlob = await extractPdfPages(file, Array.from(selectedPages));
            outName = file.name.replace('.pdf', '_extracted_eh.pdf');
            break;
          case ToolType.PDF_TO_XML:
            resultBlob = await convertPdfToXml(file);
            outName = file.name.replace('.pdf', '.xml');
            break;
          case ToolType.XML_TO_PDF:
            resultBlob = await convertXmlToPdf(file);
            outName = file.name.replace('.xml', '.pdf');
            break;
          case ToolType.EXCEL_TO_PDF:
            {
              const { convertExcelToPdf } = await import('@/utils/heavyConversions');
              resultBlob = await convertExcelToPdf(file);
              outName = file.name.replace(/\.(xlsx|xls)$/, '.pdf');
            }
            break;
        }
      } else if (currentTool === ToolType.SIGN) {
        outName = file.name.replace('.pdf', '_signed_eh.pdf');
      }

      if (opId !== operationIdRef.current) return;

      if (resultBlob) {
        const blob = resultBlob instanceof Blob ? resultBlob : new Blob([resultBlob as any], { type: 'application/octet-stream' });
        setProcessedSize(blob.size);
        if (downloadUrl) URL.revokeObjectURL(downloadUrl);
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setDownloadName(outName);
        setAppState(AppState.DONE);
        triggerHaptic('success');
      }
    } catch (error: any) {
      console.error("Action execution failed:", error);
      triggerHaptic('error');

      const errMsg = error?.message?.toLowerCase() || '';

      if (error?.message === "Could not extract text from EPUB") {
        setErrorKey('emptyEpubErr');
      } else if (errMsg.includes('rar') || errMsg.includes('cbr') || errMsg.includes('not supported')) {
        setErrorKey('conversionErr');
      } else if (error?.name === 'PasswordException' || errMsg.includes('password')) {
        setErrorKey('passwordErr');
      } else if (errMsg.includes('no images found') || errMsg.includes('could not process')) {
        setErrorKey('conversionErr');
      } else {
        setErrorKey('genericError');
      }
      setAppState(AppState.ERROR);
      (window as any).__lastActionError = error?.message || String(error);
    }
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
    setErrorKey(null);
    setAppState(AppState.SELECTING);
  };

  const togglePageSelection = (e: React.MouseEvent, pageIndex: number) => {
    e.preventDefault();
    triggerHaptic('light');
    const isRange = e.shiftKey;

    if (currentTool === ToolType.DELETE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.PDF_PAGE_REMOVER) {
      setSelectedPages(prev => {
        const newSelection = new Set(prev);

        if (isRange && lastSelectedPageRef.current !== null) {
          const start = Math.min(lastSelectedPageRef.current, pageIndex);
          const end = Math.max(lastSelectedPageRef.current, pageIndex);
          for (let i = start; i <= end; i++) {
            newSelection.add(i);
          }
        } else {
          if (newSelection.has(pageIndex)) {
            newSelection.delete(pageIndex);
          } else {
            newSelection.add(pageIndex);
          }
          lastSelectedPageRef.current = pageIndex;
        }

        return newSelection;
      });
    }
  };

  const rotateAll = (direction: 'left' | 'right') => {
    triggerHaptic('light');
    setRotations(prev => {
      const newRotations: Record<number, number> = {};
      for (let i = 0; i < pageCount; i++) {
        const currentRotation = prev[i] || 0;
        newRotations[i] = direction === 'left'
          ? (currentRotation - 90 + 360) % 360
          : (currentRotation + 90) % 360;
      }
      return newRotations;
    });
  };

  const resetRotations = () => {
    setRotations({});
  };

  const processFile = async (uploadedFile: File) => {
    try {
      setAppState(AppState.PROCESSING);
      setErrorKey(null);
      setFile(uploadedFile);

      const opId = ++operationIdRef.current;

      if (currentTool === ToolType.DELETE || currentTool === ToolType.ROTATE || currentTool === ToolType.MAKE_FILLABLE || currentTool === ToolType.SIGN || currentTool === ToolType.ORGANIZE || currentTool === ToolType.PDF_PAGE_REMOVER || currentTool === ToolType.FLATTEN || currentTool === ToolType.CROP || currentTool === ToolType.SPLIT || currentTool === ToolType.EXTRACT || currentTool === ToolType.COMPRESS || currentTool === ToolType.PDF_TO_XML) {
        try {
          const { loadPdfDocument, getPdfJsDocument } = await import('@/utils/corePdfUtils');
          const [pdfLibResult, pdfJsResult] = await Promise.allSettled([
            loadPdfDocument(uploadedFile),
            getPdfJsDocument(uploadedFile)
          ]);

          if (opId !== operationIdRef.current) return;

          if (pdfLibResult.status === 'fulfilled') {
            setPageCount(pdfLibResult.value.pageCount);
          } else {
            throw pdfLibResult.reason;
          }

          if (pdfJsResult.status === 'fulfilled') {
            setPdfJsDoc(pdfJsResult.value);
          } else {
            console.warn("Preview failed (PDF.js)", pdfJsResult.reason);
            setPdfJsDoc(null);
          }

          setSelectedPages(new Set());
          setRotations({});
          if (pdfLibResult.status === 'fulfilled') {
            setPageOrder(Array.from({ length: pdfLibResult.value.pageCount }, (_, i) => i));
          }
          lastSelectedPageRef.current = null;
          setAppState(AppState.SELECTING);
        } catch (e: any) {
          if (opId !== operationIdRef.current) return;
          console.error("Failed to load PDF structure:", e);
          triggerHaptic('error');
          if (e?.message?.toLowerCase().includes('password') || e?.name === 'PasswordException' || e?.message?.includes('encrypted')) {
            setErrorKey('passwordErr');
          } else if (e?.message?.includes('Invalid PDF structure') || e?.message?.includes('No PDF header found')) {
            setErrorKey('corruptPdfErr');
          } else {
            setErrorKey('readErr');
          }
          setAppState(AppState.ERROR);
        }
      } else {
        setAppState(AppState.SELECTING);
      }
    } catch (error: any) {
      console.error("General file processing error:", error);
      triggerHaptic('error');
      setErrorKey('readErr');
      setAppState(AppState.ERROR);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageRangeInput(e.target.value);
  };

  return (
    <>
      <ToolInterface
        file={file}
        files={files}
        setFiles={setFiles}
        currentTool={currentTool}
        lang={lang}
        t={t}
        pageCount={pageCount}
        pdfJsDoc={pdfJsDoc}
        tools={[]}
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
      />

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="*/*"
      />
    </>
  );
}
