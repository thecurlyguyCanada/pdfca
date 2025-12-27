'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ToolInterface } from '@/components/ToolInterface';
import { translations, Language } from '@/utils/i18n';
import { AppState } from '@/utils/types';
import { UI_CONFIG } from '@/config/ui';
import type { ToolConfig } from '@/lib/toolConfig';

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
    // TODO: Implement processing logic
    console.log('Processing...', processedBlob);
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

  const togglePageSelection = (e: any, idx: number) => {
    setSelectedPages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  const rotateAll = (direction: 'left' | 'right') => {
    console.log('Rotating', direction);
  };

  const resetRotations = () => {
    setRotations({});
  };

  const processFile = async (file: File) => {
    console.log('Processing file:', file.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
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
        currentTool={toolConfig.tool}
        lang={lang}
        t={t}
        pageCount={pageCount}
        pdfJsDoc={pdfJsDoc}
        tools={[]} // TODO: Pass actual tools array
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
