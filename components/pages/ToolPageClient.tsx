'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ToolInterface } from '@/components/ToolInterface';
import { RelatedTools } from '@/components/RelatedTools';
import { translations, Language } from '@/utils/i18n';
import { AppState } from '@/utils/types';
import { UI_CONFIG } from '@/config/ui';
import type { ToolConfig } from '@/lib/toolConfig';

interface ToolPageClientProps {
  toolConfig: ToolConfig;
}

export function ToolPageClient({ toolConfig }: ToolPageClientProps) {
  const [lang, setLang] = useState<Language>('en');
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

  // TODO: Implement all the handlers from App.tsx
  // For now, create stub handlers
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
    // TODO: Implement page selection logic
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
    // TODO: Implement rotation logic
    console.log('Rotating', direction);
  };

  const resetRotations = () => {
    setRotations({});
  };

  const processFile = async (file: File) => {
    // TODO: Implement file processing
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
    // TODO: Implement range parsing logic
  };

  const handleNavigate = () => {
    // Navigation handled by Next.js routing
  };

  return (
    <>
      <div className="mesh-bg" />
      <div className="min-h-screen flex flex-col">
        <Header lang={lang} setLang={setLang} onNavigate={handleNavigate} />

        <Breadcrumb
          lang={lang}
          items={[
            { name: toolConfig.title }
          ]}
          onNavigate={handleNavigate}
        />

        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

          <RelatedTools lang={lang} onNavigate={handleNavigate} currentPath={`/${toolConfig.slug}`} />
        </main>

        <Footer lang={lang} onNavigate={handleNavigate} />
      </div>

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
