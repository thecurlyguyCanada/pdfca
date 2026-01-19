import { PDF_CONFIG, getHeadingFontSize, getLineHeight } from '../config/pdf';
import { getCompressionScale, getCompressionQuality } from '../config/compression';
import type { CompressionLevel } from '../config/compression';
import { InvoiceData } from './types';
import { parseInvoiceText } from './invoiceParsers';


let pdfjsLib: any = null;
let workerInitialized = false;

import type { PDFDocument } from 'pdf-lib';
import type { jsPDF } from 'jspdf';

export interface FormField {
  id: string;
  type: 'text' | 'checkbox' | 'signature';
  x: number;
  y: number;
  width: number;
  height: number;
  page: number;
  name?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  value?: string | boolean;
}

// Lazy load PDF.js
const getPdfJs = async () => {
  if (!pdfjsLib) {
    // pdfjs-dist v4+ uses ES modules with named exports
    // The module object itself contains getDocument, GlobalWorkerOptions, etc.
    pdfjsLib = await import('pdfjs-dist');
  }
  return pdfjsLib;
};


// Lazy load pdf-lib
const getPdfLib = async () => {
  const pdfLib = await import('pdf-lib');
  return pdfLib;
};

// Lazy load JSZip
const getJSZip = async () => {
  const JSZip = await import('jszip');
  return JSZip.default || JSZip;
};

// Lazy load heic2any
const getHeic2Any = async () => {
  const heic2any = await import('heic2any');
  return heic2any.default;
};

// Lazy load unrar-js
const getUnrar = async () => {
  try {
    const unrar = await import('unrar-js');
    return unrar;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load unrar-js:', error);
    }
    throw new Error('ERR_LIB_LOAD_FAILED_UNRAR');
  }
};

// Lazy load docx
const getDocx = async () => {
  try {
    const docx = await import('docx');
    return docx;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load docx library:', error);
    }
    throw new Error('ERR_LIB_LOAD_FAILED_DOCX');
  }
};

// Lazy load mammoth
const getMammoth = async () => {
  try {
    const mammoth = await import('mammoth');
    return mammoth;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load mammoth library:', error);
    }
    throw new Error('ERR_LIB_LOAD_FAILED_MAMMOTH');
  }
};

// Lazy load jsPDF
const getJsPdf = async () => {
  try {
    const mod = await import('jspdf');
    return (mod as any).jsPDF || mod.default || mod;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load jspdf library:', error);
    }
    throw new Error('ERR_LIB_LOAD_FAILED_JSPDF');
  }
};

const getExcelJs = async () => {
  try {
    const ExcelJS = await import('exceljs');
    return ExcelJS;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load exceljs library:', error);
    }
    throw new Error('ERR_LIB_LOAD_FAILED_EXCELJS');
  }
};

// Lazy load rtf.js
const getRtfJs = async () => {
  try {
    const rtfjs = await import('rtf.js');
    return rtfjs.RTFJS;
  } catch (error) {
    console.error('Failed to load rtf.js library:', error);
    throw new Error('ERR_LIB_LOAD_FAILED_RTFJS');
  }
};

export const initPdfWorker = async () => {
  if (!workerInitialized && typeof window !== 'undefined') {
    const pdfjs = await getPdfJs();
    if (pdfjs.GlobalWorkerOptions) {
      // Use the bundled worker from the CDN or a local path
      // Setting it to a local path that we know exists in public/
      pdfjs.GlobalWorkerOptions.workerSrc = PDF_CONFIG.WORKER.PATH;
      workerInitialized = true;
    }
  }
};

export const getPdfJsDocument = async (file: File) => {
  try {
    await initPdfWorker();
    const pdfjs = await getPdfJs();
    const arrayBuffer = await file.arrayBuffer();

    const loadingTask = pdfjs.getDocument({
      data: new Uint8Array(arrayBuffer),
      cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
      cMapPacked: true,
      standardFontDataUrl: PDF_CONFIG.RESOURCES.STANDARD_FONTS_PATH,
    });

    return loadingTask.promise;
  } catch (error) {
    throw error;
  }
};

export const loadPdfDocument = async (file: File): Promise<{ doc: PDFDocument; pageCount: number }> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await file.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  return { doc, pageCount: doc.getPageCount() };
};

export const deletePagesFromPdf = async (originalFile: File, pageIndicesToDelete: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);

  const totalPages = doc.getPageCount();
  const sortedIndices = [...pageIndicesToDelete].sort((a, b) => b - a);

  // Validate: ensure we don't delete all pages
  const validIndices = sortedIndices.filter(index => index >= 0 && index < totalPages);
  if (validIndices.length >= totalPages) {
    throw new Error('Cannot delete all pages from PDF. At least one page must remain.');
  }

  validIndices.forEach((index) => {
    doc.removePage(index);
  });

  addPdfMetadata(doc, 'PDF with Pages Deleted');
  return await doc.save();
};

export const rotatePdfPages = async (originalFile: File, rotations: Record<number, number>): Promise<Uint8Array> => {
  const { PDFDocument, degrees } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  const pages = doc.getPages();

  pages.forEach((page: any, index: number) => {
    const rotationToAdd = rotations[index] || 0;
    if (rotationToAdd !== 0) {
      const currentRotation = page.getRotation().angle;
      page.setRotation(degrees(currentRotation + rotationToAdd));
    }
  });

  addPdfMetadata(doc, 'Rotated PDF');
  return await doc.save();
};

export const reorderPdfPages = async (originalFile: File, newOrder: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const sourceDoc = await PDFDocument.load(arrayBuffer);

  // Fallback to original order if newOrder is empty
  const order = (newOrder && newOrder.length > 0) ? newOrder : sourceDoc.getPageIndices();

  const newDoc = await PDFDocument.create();

  // Copy pages in the new order
  for (const pageIndex of order) {
    if (pageIndex >= 0 && pageIndex < sourceDoc.getPageCount()) {
      const [copiedPage] = await newDoc.copyPages(sourceDoc, [pageIndex]);
      newDoc.addPage(copiedPage);
    }
  }

  addPdfMetadata(newDoc, 'Reorganized PDF');
  return await newDoc.save();
};

export const makePdfFillable = async (originalFile: File, pageIndicesToFill: number[], existingPdfJsDoc?: any): Promise<Uint8Array> => {
  await initPdfWorker();
  const { PDFDocument, rgb } = await getPdfLib();
  const pdfjs = await getPdfJs();

  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  const form = doc.getForm();

  const pdfJsDoc = existingPdfJsDoc || await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  try {

    let fieldCount = 0;
    const timestamp = Date.now();

    for (const pageIndex of pageIndicesToFill) {
      if (pageIndex < 0 || pageIndex >= doc.getPageCount()) continue;

      const pdfLibPage = doc.getPage(pageIndex);
      const { width: pageWidth, height: pageHeight } = pdfLibPage.getSize();

      let pageHasFields = false;

      try {
        const pdfJsPage = await pdfJsDoc.getPage(pageIndex + 1);
        const textContent = await pdfJsPage.getTextContent();

        for (const item of textContent.items as any[]) {
          const str = item?.str || '';
          if (!str) continue;

          if (/__{3,}/.test(str)) {
            if (!item.transform) continue;
            const tx = item.transform[4];
            const ty = item.transform[5];
            const w = item.width || 0;
            const h = item.height || item.transform[3] || 12;

            const fieldName = `txt_${pageIndex}_${fieldCount++}`;
            const textField = form.createTextField(fieldName);

            textField.addToPage(pdfLibPage, {
              x: tx,
              y: ty - 2,
              width: w,
              height: h + 4,
              borderColor: rgb(0.9, 0.9, 0.9),
              borderWidth: 0,
            });

            pageHasFields = true;
          }
          else if (/\[\s*\]/.test(str) || /☐/.test(str)) {
            if (!item.transform) continue;
            const tx = item.transform[4];
            const ty = item.transform[5];
            const size = (item.height || item.transform[3] || 12) * 1.2;

            const fieldName = `chk_${pageIndex}_${fieldCount++}`;
            const checkBox = form.createCheckBox(fieldName);
            checkBox.addToPage(pdfLibPage, {
              x: tx,
              y: ty,
              width: size,
              height: size,
              borderColor: rgb(0.5, 0.5, 0.5),
              borderWidth: 1,
            });
            pageHasFields = true;
          }
        }
      } catch (e) {
        console.warn(`Smart detection failed for page ${pageIndex}, falling back to manual mode.`, e);
      }

      if (!pageHasFields) {
        const margin = PDF_CONFIG.LAYOUT.MARGIN;
        const textField = form.createTextField(`notes_${pageIndex}_${timestamp}`);

        textField.addToPage(pdfLibPage, {
          x: margin,
          y: margin,
          width: pageWidth - (margin * 2),
          height: pageHeight - (margin * 2),
          borderWidth: 1,
          borderColor: rgb(0.8, 0.8, 0.8),
        });

        textField.enableMultiline();
        textField.setText("Enter your notes here...");
      }
    }

  } finally {
    if (!existingPdfJsDoc && pdfJsDoc) {
      // Only destroy if we created it locally
      await pdfJsDoc.destroy();
    }
  }

  return await doc.save();
};

export interface SignatureEntry {
  id: string;
  pageIndex: number;
  x: number; // 0 to 1 (percentage of page width)
  y: number; // 0 to 1 (percentage of page height, from TOP)
  width: number; // percentage of page width
  height: number; // percentage of page height
  dataUrl?: string; // For images (signatures/initials)
  type: 'signature' | 'initials' | 'text' | 'date';
  text?: string; // For text/date
}

export const signPdf = async (originalFile: File, signatureEntries: SignatureEntry[]): Promise<Uint8Array> => {
  /* import from lib */
  const { PDFDocument: PDFLibDoc, rgb, StandardFonts, degrees } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFLibDoc.load(arrayBuffer);
  const pages = doc.getPages();
  const helveticaFont = await doc.embedFont(StandardFonts.Helvetica);

  for (const entry of signatureEntries) {
    if (entry.pageIndex < 0 || entry.pageIndex >= pages.length) continue;

    const page = pages[entry.pageIndex];
    const { width: pageWidth, height: pageHeight } = page.getSize();
    const rotation = page.getRotation().angle;

    // Calculate coords based on rotation
    let x, y, width, height;

    if (rotation === 0) {
      x = entry.x * pageWidth;
      y = (1 - entry.y - entry.height) * pageHeight;
      width = entry.width * pageWidth;
      height = entry.height * pageHeight;
    } else if (rotation === 90) {
      // Visual Width = PDF Height; Visual Height = PDF Width
      // Visual (0,0) [TL] -> PDF (0,0) [BL]
      // Visual X+ (Right) -> PDF Y+ (Up)
      // Visual Y+ (Down) -> PDF X+ (Right)
      x = (1 - entry.y - entry.height) * pageWidth;
      y = entry.x * pageHeight;
      width = entry.height * pageWidth;  // Swapped dimensions
      height = entry.width * pageHeight;
    } else if (rotation === 180) {
      // Visual Width = PDF Width; Visual Height = PDF Height
      // Visual (0,0) [TL] -> PDF (W, H) [TR]
      // Visual X+ -> PDF X-
      // Visual Y+ -> PDF Y-
      x = (1 - entry.x - entry.width) * pageWidth;
      y = entry.y * pageHeight; // (1 - (1 - y - h)) * H ?? No.
      // PDF Y=0 is Bottom. Visual Y=0 is Top.
      // At 180, Visual Top is PDF Bottom (0).
      // So y_visual (from Top) maps to y_pdf (from Bottom).
      // y_pdf = y_visual * H
      width = entry.width * pageWidth;
      height = entry.height * pageHeight;
    } else if (rotation === 270) {
      // Visual Width = PDF Height; Visual Height = PDF Width
      // Visual (0,0) [TL] -> PDF (W, H) [TR]
      // Visual X+ -> PDF Y-
      // Visual Y+ -> PDF X-
      x = entry.y * pageWidth;
      y = (1 - entry.x - entry.width) * pageHeight;
      width = entry.height * pageWidth;
      height = entry.width * pageHeight;
    } else {
      // Fallback for weird rotations
      x = entry.x * pageWidth;
      y = (1 - entry.y - entry.height) * pageHeight;
      width = entry.width * pageWidth;
      height = entry.height * pageHeight;
    }

    if (entry.type === 'signature' || entry.type === 'initials' || (entry.type === 'text' && !entry.text && entry.dataUrl)) {
      if (!entry.dataUrl) continue;

      try {
        // Fetch with timeout to prevent hanging
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        const imageBytes = await fetch(entry.dataUrl, { signal: controller.signal })
          .then(res => res.arrayBuffer())
          .finally(() => clearTimeout(timeout));
        let image;

        // Detect format from data URL or try both
        const isPng = entry.dataUrl.includes('image/png');
        const isJpg = entry.dataUrl.includes('image/jpeg') || entry.dataUrl.includes('image/jpg');

        if (isPng) {
          image = await doc.embedPng(imageBytes);
        } else if (isJpg) {
          image = await doc.embedJpg(imageBytes);
        } else {
          // WebP or unknown format - try PNG first (canvas exports often use PNG)
          try {
            image = await doc.embedPng(imageBytes);
          } catch {
            // Fallback to JPG
            try {
              image = await doc.embedJpg(imageBytes);
            } catch (e) {
              console.warn('Could not embed signature image - unsupported format');
              continue;
            }
          }
        }

        page.drawImage(image, {
          x,
          y,
          width,
          height,
        });
      } catch (e) {
        console.error("Failed to embed signature image", e);
        throw new Error(`Failed to embed signature image for ${entry.type}. Please parse a valid image.`);
      }
    } else if (entry.type === 'text' || entry.type === 'date') {
      const text = entry.text || '';
      // Approximate font size to fit height
      const fontSize = height * 0.8;

      page.drawText(text, {
        x,
        y: y + (height * 0.2), // Adjust for baseline
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
    }
  }

  addPdfMetadata(doc, 'Signed PDF');
  return await doc.save();
};

export const convertHeicToPdf = async (file: File): Promise<Blob> => {
  const { PDFDocument } = await getPdfLib();
  const heic2any = await getHeic2Any();

  /* heic2any returns a Blob or Blob[] */
  const blobs: Blob[] = [];

  try {
    const convertedBlobOrBlobs = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: PDF_CONFIG.IMAGE.HEIC_CONVERSION_QUALITY
    });

    if (Array.isArray(convertedBlobOrBlobs)) {
      blobs.push(...convertedBlobOrBlobs);
    } else {
      blobs.push(convertedBlobOrBlobs);
    }
  } catch (error) {
    console.error("HEIC conversion failed:", error);
    throw new Error("Could not process HEIC file. The file might be corrupted or in an unsupported format.");
  }

  // Yield to UI loop if heavy processing happened
  await new Promise(resolve => setTimeout(resolve, 0));

  const doc = await PDFDocument.create();

  for (const blob of blobs) {
    const arrayBuffer = await blob.arrayBuffer();
    const image = await doc.embedJpg(arrayBuffer);
    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });

    // Prevent UI freeze during multi-page processing
    if (blobs.length > 1) await new Promise(resolve => setTimeout(resolve, 0));
  }

  addPdfMetadata(doc, 'HEIC to PDF Conversion');
  return new Blob([await doc.save() as any], { type: 'application/pdf' });
};

export const convertPdfToEpub = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  try {

    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const metadata = await pdf.getMetadata();
    const pdfInfo = (metadata?.info as any) || {};
    const docTitle = pdfInfo.Title || file.name.replace(/\.[^/.]+$/, "");
    const docAuthor = pdfInfo.Author || "PDFCanada.ca";

    interface TextItem {
      str: string;
      x: number;
      y: number;
      width: number;
      height: number;
      fontSize: number;
      fontName: string;
      isBold: boolean;
      isItalic: boolean;
    }

    interface ImageItem {
      id: string;
      data: Uint8Array;
      y: number;
      width: number;
      height: number;
    }

    interface ProcessedPage {
      lines: TextItem[][];
      images: ImageItem[];
      footnotes: { id: string; content: string; key: string }[];
      headings: { level: number; text: string; id: string }[];
    }

    const processedPages: ProcessedPage[] = [];
    const allLinesContents: string[] = [];
    const allImages: ImageItem[] = [];

    // Helper for mode calculation
    const getMode = (arr: number[]) => {
      const counts: Record<number, number> = {};
      arr.forEach(v => counts[v] = (counts[v] || 0) + 1);
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      return sorted.length > 0 ? parseInt(sorted[0][0]) : 12;
    };

    const allFontSizes: number[] = [];

    // 1. Initial Extraction
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const viewport = page.getViewport({ scale: 1.0 });

      const items: TextItem[] = textContent.items.map((item: any) => {
        const fs = Math.abs(item.transform[0] || item.transform[3]);
        const fname = (item.fontName || '').toLowerCase();
        allFontSizes.push(Math.round(fs));
        return {
          str: item.str,
          x: item.transform[4],
          y: item.transform[5],
          width: item.width,
          height: item.height || fs,
          fontSize: fs,
          fontName: item.fontName || '',
          isBold: fname.includes('bold') || fname.includes('black') || fname.includes('heavy'),
          isItalic: fname.includes('italic') || fname.includes('oblique')
        };
      });

      // --- Image Extraction ---
      const pageImages: ImageItem[] = [];
      const operatorList = await page.getOperatorList();
      let transform = [1, 0, 0, 1, 0, 0];
      const transformStack: any[] = [];
      const OPS = (pdfjs as any).OPS || { transform: 11, save: 12, restore: 13, paintImageXObject: 85, paintInlineImageXObject: 82 };

      for (let opIdx = 0; opIdx < operatorList.fnArray.length; opIdx++) {
        const fn = operatorList.fnArray[opIdx];
        const args = operatorList.argsArray[opIdx];
        if (fn === OPS.transform) {
          const m = args;
          const [a, b, c, d, e, f] = transform;
          transform = [a * m[0] + c * m[1], b * m[0] + d * m[1], a * m[2] + c * m[3], b * m[2] + d * m[3], a * m[4] + c * m[5] + e, b * m[4] + d * m[5] + f];
        } else if (fn === OPS.save) {
          transformStack.push([...transform]);
        } else if (fn === OPS.restore) {
          transform = transformStack.pop() || [1, 0, 0, 1, 0, 0];
        } else if (fn === OPS.paintImageXObject || fn === OPS.paintInlineImageXObject) {
          const imgId = args[0];
          try {
            const img = await page.objs.get(imgId);
            if (img) {
              const width = Math.sqrt(transform[0] ** 2 + transform[1] ** 2);
              const height = Math.sqrt(transform[2] ** 2 + transform[3] ** 2);
              const y = transform[5];

              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              try {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  const imageData = ctx.createImageData(img.width, img.height);
                  if (img.data.length === img.width * img.height * 3) {
                    for (let k = 0, l = 0; k < img.data.length; k += 3, l += 4) {
                      imageData.data[l] = img.data[k]; imageData.data[l + 1] = img.data[k + 1]; imageData.data[l + 2] = img.data[k + 2]; imageData.data[l + 3] = 255;
                    }
                  } else { imageData.data.set(img.data); }
                  ctx.putImageData(imageData, 0, 0);
                  const dataUrl = canvas.toDataURL('image/png');
                  const bytes = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));
                  const imageItem = { id: `img_${allImages.length}`, data: bytes, y, width, height };
                  pageImages.push(imageItem);
                  allImages.push(imageItem);
                }
              } finally {
                canvas.width = 0; canvas.height = 0;
              }
            }
          } catch (err) { console.warn("Image extraction failed", err); }
        }
      }

      // Group into lines
      const lines: TextItem[][] = [];
      items.sort((a, b) => b.y - a.y || a.x - b.x);
      let currentLine: TextItem[] = [];
      items.forEach(item => {
        if (currentLine.length === 0) {
          currentLine.push(item);
        } else {
          const last = currentLine[currentLine.length - 1];
          if (Math.abs(item.y - last.y) < 3) {
            currentLine.push(item);
          } else {
            lines.push(currentLine.sort((a, b) => a.x - b.x));
            currentLine = [item];
          }
        }
      });
      if (currentLine.length > 0) lines.push(currentLine.sort((a, b) => a.x - b.x));

      processedPages.push({ lines, images: pageImages, footnotes: [], headings: [] });
      lines.forEach(l => allLinesContents.push(l.map(i => i.str.trim()).join(' ')));
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const bodyFontSize = getMode(allFontSizes);

    // 2. Identify Recurring Headers/Footers
    const lineFrequencies: Record<string, number> = {};
    allLinesContents.forEach(content => {
      if (content.trim().length > 3) {
        lineFrequencies[content] = (lineFrequencies[content] || 0) + 1;
      }
    });

    const recurringLines = new Set(
      Object.entries(lineFrequencies)
        .filter(([content, count]) => count > pdf.numPages * 0.4)
        .map(([content]) => content)
    );

    // 3. Process Pages
    let fullHtml = "";
    const globalFootnotes: { id: string; content: string; key: string }[] = [];
    const tocEntries: { level: number; text: string; id: string }[] = [];
    let headingCounter = 1;

    const ligatures: Record<string, string> = {
      '\uFB00': 'ff', '\uFB01': 'fi', '\uFB02': 'fl', '\uFB03': 'ffi', '\uFB04': 'ffl', '\u00A0': ' ',
    };

    const cleanText = (text: string) => {
      let cleaned = text;
      Object.entries(ligatures).forEach(([lig, rep]) => {
        cleaned = cleaned.split(lig).join(rep);
      });
      return cleaned.replace(/\s+/g, ' ');
    };

    const commonAbbreviations = new Set(['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'St.', 'Ave.', 'Ltd.', 'Inc.', 'e.g.', 'i.e.', 'vs.', 'vol.', 'p.', 'pp.', 'cf.', 'viz.', 'et al.']);

    for (let pIdx = 0; pIdx < processedPages.length; pIdx++) {
      const page = processedPages[pIdx];
      let pageHtml = "";

      const elements: { type: 'text' | 'image' | 'head' | 'foot'; data: any; y: number }[] = [];

      page.images.forEach(img => elements.push({ type: 'image', data: img, y: img.y }));

      const filteredLines = page.lines.filter(line => {
        const content = line.map(i => i.str.trim()).join(' ');
        const isPageNum = /^\d+$/.test(content.trim()) || /^Page \d+$/.test(content.trim());
        return !recurringLines.has(content) && !isPageNum;
      });

      filteredLines.forEach((line, lIdx) => {
        if (line.length === 0) return; // Safety check for empty lines
        const lineText = cleanText(line.map(i => i.str).join(' '));
        const avgFontSize = line.reduce((acc, i) => acc + i.fontSize, 0) / line.length;
        const isMostlyBold = line.filter(i => i.isBold).length > line.length * 0.5;

        if ((avgFontSize > bodyFontSize * 1.15 || isMostlyBold) && lineText.length < 120) {
          elements.push({ type: 'head', data: { text: lineText.trim(), level: avgFontSize > bodyFontSize * 1.4 ? 1 : (avgFontSize > bodyFontSize * 1.25 ? 2 : 3), line }, y: line[0].y });
        } else if (lIdx > filteredLines.length * 0.6 && (avgFontSize < bodyFontSize * 0.95 || /^\s*(\d+|[*†‡§])[\.\s)]/.test(lineText))) {
          elements.push({ type: 'foot', data: { text: lineText.trim() }, y: line[0].y });
        } else {
          elements.push({ type: 'text', data: { line, text: lineText }, y: line[0].y });
        }
      });

      elements.sort((a, b) => b.y - a.y);

      let currentParagraphContent = "";
      const bodyLineHeight = bodyFontSize * 1.4;

      elements.forEach((el, elIdx) => {
        if (el.type === 'image') {
          if (currentParagraphContent) { pageHtml += `<p>${currentParagraphContent.trim()}</p>`; currentParagraphContent = ""; }
          pageHtml += `<div class="image-wrapper"><img src="images/${el.data.id}.png" alt="Illustration" /></div>`;
        } else if (el.type === 'head') {
          if (currentParagraphContent) { pageHtml += `<p>${currentParagraphContent.trim()}</p>`; currentParagraphContent = ""; }
          const id = `heading_${headingCounter++}`;
          pageHtml += `<h${el.data.level} id="${id}">${escapeHtml(el.data.text)}</h${el.data.level}>`;
          tocEntries.push({ level: el.data.level, text: el.data.text, id });
        } else if (el.type === 'foot') {
          if (currentParagraphContent) { pageHtml += `<p>${currentParagraphContent.trim()}</p>`; currentParagraphContent = ""; }
          const match = el.data.text.match(/^\s*(\d+|[*†‡§]+)/);
          const key = match ? match[1] : `p${pIdx}_${globalFootnotes.length}`;
          globalFootnotes.push({ id: `note_${key}_${globalFootnotes.length}`, content: el.data.text, key });
        } else {
          let lineProcessed = "";
          el.data.line.forEach((item: TextItem) => {
            let itemText = escapeHtml(cleanText(item.str));
            if (item.isBold) itemText = `<strong>${itemText}</strong>`;
            if (item.isItalic) itemText = `<em>${itemText}</em>`;

            if (item.fontSize < bodyFontSize * 0.85 && /^(\d+|[*†‡§]+)$/.test(item.str.trim())) {
              const refId = `ref_${item.str.trim()}_${pIdx}_${elIdx}`;
              lineProcessed += `<a href="#note_${item.str.trim()}" id="${refId}" epub:type="noteref" class="footnote-ref">${itemText}</a>`;
            } else { lineProcessed += itemText; }
          });

          const nextEl = elements[elIdx + 1];
          const isLastWordAbbr = commonAbbreviations.has(currentParagraphContent.trim().split(' ').pop() || "");

          // Intelligent Merging: Check for paragraph break
          let shouldBreak = false;
          if (!nextEl) {
            shouldBreak = true;
          } else if (nextEl.type !== 'text') {
            shouldBreak = true;
          } else {
            const gap = Math.abs(el.y - nextEl.y);
            const isPunctuation = /[.!?]$/.test(lineProcessed.trim());
            if (gap > bodyLineHeight * 1.8) {
              shouldBreak = true; // Large gap
            } else if (isPunctuation && gap > bodyLineHeight * 1.2 && !isLastWordAbbr) {
              shouldBreak = true; // End of sentence with moderate gap
            }
          }

          if (lineProcessed.trim().endsWith('-')) {
            currentParagraphContent += lineProcessed.trim().slice(0, -1);
          } else {
            currentParagraphContent += lineProcessed + " ";
          }

          if (shouldBreak) {
            if (currentParagraphContent.trim()) {
              pageHtml += `<p>${currentParagraphContent.trim()}</p>`;
            }
            currentParagraphContent = "";
          }
        }
      });

      if (currentParagraphContent.trim()) { pageHtml += `<p>${currentParagraphContent.trim()}</p>`; currentParagraphContent = ""; }
      fullHtml += pageHtml;
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const footnoteMap: Record<string, string[]> = {};
    globalFootnotes.forEach(fn => {
      if (!footnoteMap[fn.key]) footnoteMap[fn.key] = [];
      footnoteMap[fn.key].push(fn.id);

      // Find the actual ID used for the first reference to this footnote to create a backlink
      const backlinkMatch = fullHtml.match(new RegExp(`id="(ref_${fn.key.replace(/[*†‡§]/g, '\\$&')}_\\d+_\\d+)"`));
      if (backlinkMatch) {
        (fn as any).backlinkId = backlinkMatch[1];
      }
    });

    Object.entries(footnoteMap).forEach(([key, ids]) => {
      const regex = new RegExp(`href="#note_${key.replace(/[*†‡§]/g, '\\$&')}"`, 'g');
      fullHtml = fullHtml.replace(regex, `href="#${ids[0]}"`);
    });

    // 4. Generate Cover Image (Page 1)
    let coverData: Uint8Array | null = null;
    try {
      const firstPage = await pdf.getPage(1);
      const scale = 1.5;
      const viewport = firstPage.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        await firstPage.render({ canvasContext: ctx, viewport }).promise;
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        coverData = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));
      }
    } catch (err) { console.warn("Cover generation failed", err); }

    const zip = new JSZip();
    zip.file("mimetype", "application/epub+zip", { compression: "STORE" });
    zip.folder("META-INF")?.file("container.xml", `<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>`);

    const oebps = zip.folder("OEBPS");
    const imagesFolder = oebps?.folder("images");
    allImages.forEach(img => imagesFolder?.file(`${img.id}.png`, img.data));
    if (coverData) imagesFolder?.file("cover.jpg", coverData);

    const footnoteHtml = globalFootnotes.map(fn => `<aside id="${fn.id}" epub:type="footnote" class="footnote"><p>${escapeHtml(fn.content)} <a href="#${(fn as any).backlinkId || 'content'}">&#8617;</a></p></aside>`).join('\n');

    oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en"><head><title>${escapeHtml(docTitle)}</title><style>body { font-family: sans-serif; line-height: 1.5; padding: 5%; color: #000; background: #fff; } p { margin: 1em 0; text-align: justify; hyphens: auto; } h1, h2, h3 { color: #333; margin-top: 2em; } .footnote-ref { vertical-align: super; font-size: 0.7em; text-decoration: none; color: blue; } .footnote { font-size: 0.9em; border-top: 1px solid #ccc; margin-top: 2em; padding-top: 1em; } .image-wrapper { text-align: center; margin: 2em 0; } .image-wrapper img { max-width: 100%; height: auto; }</style></head><body><section epub:type="bodymatter">${fullHtml}</section><section epub:type="backmatter"><hr/>${footnoteHtml}</section></body></html>`);

    const tocList = tocEntries.map(e => `<li><a href="content.xhtml#${e.id}">${escapeHtml(e.text)}</a></li>`).join('\n');
    oebps?.file("nav.xhtml", `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops"><head><title>Table of Contents</title></head><body><nav epub:type="toc" id="toc"><h1>Table of Contents</h1><ol>${tocList || '<li><a href="content.xhtml">Main Content</a></li>'}</ol></nav></body></html>`);

    const imageManifest = allImages.map(img => `<item id="${img.id}" href="images/${img.id}.png" media-type="image/png"/>`).join('\n');
    const coverManifest = coverData ? '<item id="cover-image" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>' : '';

    oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?><package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="3.0"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="bookid">urn:uuid:${Math.random().toString(36).substring(2)}</dc:identifier><dc:title>${escapeHtml(docTitle)}</dc:title><dc:language>en</dc:language><dc:creator>${escapeHtml(docAuthor)}</dc:creator><meta property="dcterms:modified">${new Date().toISOString().split('.')[0]}Z</meta>${coverData ? '<meta name="cover" content="cover-image"/>' : ''}</metadata><manifest><item id="content" href="content.xhtml" media-type="application/xhtml+xml"/><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>${imageManifest}${coverManifest}</manifest><spine><itemref idref="content"/></spine></package>`);

    try {
      return await zip.generateAsync({ type: "blob" });
    } finally {
      if (pdf) await pdf.destroy();
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const convertEpubToPdf = async (file: File): Promise<Blob> => {
  const { PDFDocument, StandardFonts } = await getPdfLib();
  const JSZip = await getJSZip();

  const zip = new JSZip();
  const content = await zip.loadAsync(file);

  let textContent = "";

  const htmlFiles: string[] = [];
  content.forEach((relativePath: string) => {
    if (relativePath.endsWith(".html") || relativePath.endsWith(".xhtml")) {
      htmlFiles.push(relativePath);
    }
  });

  htmlFiles.sort();

  for (const path of htmlFiles) {
    const html = await content.file(path)?.async("string");
    if (html) {
      let cleanHtml = html
        .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "")
        .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, "")
        .replace(/<head\b[^>]*>([\s\S]*?)<\/head>/gim, "");

      const text = cleanHtml
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/p>/gi, "\n\n")
        .replace(/<[^>]*>/g, ' ')
        .replace(/[ \t]+/g, ' ')
        .trim();
      textContent += text + "\n\n";
    }
  }

  if (!textContent.trim()) {
    throw new Error("Could not extract text from EPUB");
  }

  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);

  const fontSize = PDF_CONFIG.TYPOGRAPHY.DEFAULT_FONT_SIZE;
  const margin = PDF_CONFIG.LAYOUT.MARGIN;
  const charsPerLine = 85;

  let page = doc.addPage();
  const { width: pageWidth, height: pageHeight } = page.getSize();
  let y = pageHeight - margin;

  const paragraphs = textContent.split('\n');

  for (const paragraph of paragraphs) {
    // Yield to UI loop
    await new Promise(resolve => setTimeout(resolve, 0));

    const trimmedPara = paragraph.trim();
    if (!trimmedPara) {
      y -= getLineHeight(fontSize, PDF_CONFIG.LAYOUT.LINE_HEIGHT_OFFSET);
      continue;
    }

    const words = trimmedPara.split(/\s+/);
    let currentLine = "";

    for (const word of words) {
      if ((currentLine + " " + word).length > charsPerLine) {
        if (y < margin + fontSize) {
          page = doc.addPage();
          y = pageHeight - margin;
        }
        page.drawText(currentLine.trim(), { x: margin, y, size: fontSize, font });
        y -= getLineHeight(fontSize, PDF_CONFIG.LAYOUT.LINE_HEIGHT_OFFSET_LARGE);

        if (word.length > charsPerLine) {
          let remaining = word;
          while (remaining.length > charsPerLine) {
            if (y < margin + fontSize) {
              page = doc.addPage();
              y = pageHeight - margin;
            }
            page.drawText(remaining.substring(0, charsPerLine), { x: margin, y, size: fontSize, font });
            y -= getLineHeight(fontSize, PDF_CONFIG.LAYOUT.LINE_HEIGHT_OFFSET_LARGE);
            remaining = remaining.substring(charsPerLine);
          }
          currentLine = remaining;
        } else {
          currentLine = word;
        }
      } else {
        currentLine += (currentLine === "" ? "" : " ") + word;
      }
    }

    if (currentLine.trim()) {
      if (y < margin + fontSize) {
        page = doc.addPage();
        y = pageHeight - margin;
      }
      page.drawText(currentLine.trim(), { x: margin, y, size: fontSize, font });
      y -= getLineHeight(fontSize, PDF_CONFIG.LAYOUT.LINE_HEIGHT_OFFSET_LARGE);
    }
  }

  addPdfMetadata(doc, 'EPUB to PDF Conversion');
  return new Blob([await doc.save() as any], { type: 'application/pdf' });
};

export const convertCbrToPdf = async (file: File): Promise<Blob> => {
  const { PDFDocument } = await getPdfLib();
  const JSZip = await getJSZip();

  const fileName = file.name.toLowerCase();
  const isZip = fileName.endsWith('.cbz') || fileName.endsWith('.zip');
  const isRar = fileName.endsWith('.cbr') || fileName.endsWith('.rar');

  const doc = await PDFDocument.create();
  const images: { data: Uint8Array, name: string }[] = [];

  if (isZip) {
    const zip = new JSZip();
    const content = await zip.loadAsync(file);
    const fileNames: string[] = [];
    content.forEach((path) => {
      if (/\.(jpg|jpeg|png)$/i.test(path)) {
        fileNames.push(path);
      }
    });
    fileNames.sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    for (const name of fileNames) {
      const data = await content.file(name)?.async("uint8array");
      if (data) images.push({ data, name });
    }
  } else if (isRar) {
    try {
      const unrar = await getUnrar();
      const arrayBuffer = await file.arrayBuffer();
      const extractor = await unrar.createExtractorFromData(new Uint8Array(arrayBuffer));

      const list = extractor.getFileList();
      // Sort explicitly if possible or just collect and sort
      const entries = [];
      for (const entry of list) {
        if (!entry.fileHeader.flags.directory && /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.fileHeader.name)) {
          entries.push(entry);
        }
      }

      // Sort by name
      entries.sort((a, b) => a.fileHeader.name.localeCompare(b.fileHeader.name, undefined, { numeric: true, sensitivity: 'base' }));

      for (const entry of entries) {
        const extraction = extractor.extract({ files: [entry.fileHeader.name] });
        if (extraction.files[0]?.extraction) {
          images.push({ name: entry.fileHeader.name, data: extraction.files[0].extraction });
        }
      }
    } catch (e) {
      console.error("CBR Extraction failed", e);
      throw new Error("Failed to process CBR file. It might be encrypted or invalid.");
    }
  } else {
    throw new Error("Unsupported archive format. Please use .cbz or .zip files.");
  }

  if (images.length === 0) {
    throw new Error("No images found in the archive.");
  }

  for (const img of images) {
    try {
      let embeddedImg;
      const nameLower = img.name.toLowerCase();

      if (nameLower.endsWith('.jpg') || nameLower.endsWith('.jpeg')) {
        embeddedImg = await doc.embedJpg(img.data);
      } else if (nameLower.endsWith('.png')) {
        embeddedImg = await doc.embedPng(img.data);
      } else {
        continue;
      }

      if (embeddedImg) {
        const page = doc.addPage([embeddedImg.width, embeddedImg.height]);
        page.drawImage(embeddedImg, {
          x: 0,
          y: 0,
          width: embeddedImg.width,
          height: embeddedImg.height,
        });
      }
    } catch (e) {
      console.warn(`Failed to embed image ${img.name}`, e);
    }

    // Yield to avoid freezing during large comic conversion
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  if (doc.getPageCount() === 0) {
    throw new Error("Could not process any images from the archive.");
  }

  addPdfMetadata(doc, 'CBR/CBZ to PDF Conversion');
  return new Blob([await doc.save() as any], { type: 'application/pdf' });
};

/**
 * Add SEO-friendly metadata to PDF documents
 * Improves searchability and attribution when users share generated PDFs
 */
const addPdfMetadata = (doc: PDFDocument, title?: string) => {
  doc.setTitle(title || PDF_CONFIG.METADATA.TITLE);
  doc.setAuthor(PDF_CONFIG.METADATA.AUTHOR);
  doc.setSubject(PDF_CONFIG.METADATA.SUBJECT);
  doc.setKeywords([...PDF_CONFIG.METADATA.KEYWORDS]);
  doc.setCreator(PDF_CONFIG.METADATA.CREATOR);
  doc.setProducer(PDF_CONFIG.METADATA.PRODUCER);
};

// Re-export formatFileSize from lightweight utils for backward compatibility
export { formatFileSize } from './formatUtils';

export const convertPdfToWord = async (file: File): Promise<Blob> => {
  const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, ImageRun, BorderStyle } = await getDocx();
  const pdfjs = await getPdfJs();
  await initPdfWorker();

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
    standardFontDataUrl: PDF_CONFIG.RESOURCES.STANDARD_FONTS_PATH,
  });

  const pdf = await loadingTask.promise;
  try {
    const sections: any[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.0 });
      const textContent = await page.getTextContent();
      const items = textContent.items as any[];

      // --- Image Extraction ---
      const operatorList = await page.getOperatorList();
      const images: any[] = [];
      let transform = [1, 0, 0, 1, 0, 0];
      const transformStack: any[] = [];

      // OPS mapping for standard PDF.js (constants might vary, using literals from common versions)
      // transform: 11, save: 12, restore: 13, paintImageXObject: 85, paintInlineImageXObject: 82
      const OPS = (pdfjs as any).OPS || { transform: 11, save: 12, restore: 13, paintImageXObject: 85, paintInlineImageXObject: 82 };

      for (let opIdx = 0; opIdx < operatorList.fnArray.length; opIdx++) {
        const fn = operatorList.fnArray[opIdx];
        const args = operatorList.argsArray[opIdx];

        if (fn === OPS.transform) {
          const m = args;
          const [a, b, c, d, e, f] = transform;
          transform = [
            a * m[0] + c * m[1],
            b * m[0] + d * m[1],
            a * m[2] + c * m[3],
            b * m[2] + d * m[3],
            a * m[4] + c * m[5] + e,
            b * m[4] + d * m[5] + f
          ];
        } else if (fn === OPS.save) {
          transformStack.push([...transform]);
        } else if (fn === OPS.restore) {
          transform = transformStack.pop() || [1, 0, 0, 1, 0, 0];
        } else if (fn === OPS.paintImageXObject || fn === OPS.paintInlineImageXObject) {
          const imgId = args[0];
          try {
            const img = await page.objs.get(imgId);
            if (img) {
              // Calculate real dimensions and position
              const width = Math.sqrt(transform[0] ** 2 + transform[1] ** 2);
              const height = Math.sqrt(transform[2] ** 2 + transform[3] ** 2);
              const x = transform[4];
              const y = viewport.height - (transform[5] + height); // Convert to top-based Y

              // Convert raw data to array buffer (heuristic for RGB/RGBA)
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                const imageData = ctx.createImageData(img.width, img.height);
                if (img.data.length === img.width * img.height * 3) {
                  for (let k = 0, l = 0; k < img.data.length; k += 3, l += 4) {
                    imageData.data[l] = img.data[k];
                    imageData.data[l + 1] = img.data[k + 1];
                    imageData.data[l + 2] = img.data[k + 2];
                    imageData.data[l + 3] = 255;
                  }
                } else {
                  imageData.data.set(img.data);
                }
                ctx.putImageData(imageData, 0, 0);
                const dataUrl = canvas.toDataURL('image/png');
                const bytes = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));

                images.push({ data: bytes, width, height, x, y });

                // Cleanup
                canvas.width = 0;
                canvas.height = 0;
              }
            }
          } catch (err) { console.warn("Image extraction failed", err); }
        }
      }

      // --- Table Detection ---
      // Group items by Y coordinate
      const yGroups: { [y: number]: any[] } = {};
      const tolerance = 5;
      items.forEach(item => {
        const y = item.transform[5];
        let matchedY = Object.keys(yGroups).find(gy => Math.abs(Number(gy) - y) < tolerance);
        if (!matchedY) yGroups[y] = [item];
        else yGroups[Number(matchedY)].push(item);
      });

      const sortedYs = Object.keys(yGroups).map(Number).sort((a, b) => b - a);
      const tableBlocks: any[] = [];
      let currentTable: any[] = [];

      // Heuristic: adjacent lines with multiple items and similar column breaks are likely tables
      // Disabled for stability: formatting text paragraphs often triggers false positives.
      // Future improvement: Use stricter column alignment checks.
      /* 
      sortedYs.forEach((y, idx) => {
        const rowItems = yGroups[y].sort((a, b) => a.transform[4] - b.transform[4]);
        if (rowItems.length > 1) {
          currentTable.push({ y, items: rowItems });
        } else {
          if (currentTable.length > 1) tableBlocks.push([...currentTable]);
          currentTable = [];
        }
      });
      if (currentTable.length > 1) tableBlocks.push(currentTable);
      */

      // --- Compilation ---
      const pageElements: any[] = [];
      const usedYsInTables = new Set(tableBlocks.flatMap(t => t.map((r: any) => r.y)));

      // Add Tables
      tableBlocks.forEach(block => {
        const rows = block.map((row: any) => {
          // Simple cell division - this is a basic split, ideally should use grid lines
          const cells = row.items.map((item: any) => {
            const fontName = item.fontName?.toLowerCase() || '';
            return new TableCell({
              children: [new Paragraph({
                children: [new TextRun({
                  text: item.str,
                  size: Math.round(Math.abs(item.transform[0] || item.transform[3]) * 2),
                  bold: fontName.includes('bold'),
                  italics: fontName.includes('italic')
                })]
              })],
              width: { size: (item.width || 50) * 20, type: WidthType.DXA }
            });
          });
          return new TableRow({ children: cells });
        });

        pageElements.push({
          y: viewport.height - (block[0].y + 20),
          element: new Table({
            rows: rows,
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
            }
          })
        });
      });

      // Add Images
      images.forEach(img => {
        pageElements.push({
          y: img.y,
          element: new Paragraph({
            children: [new ImageRun({
              data: img.data,
              transformation: { width: img.width, height: img.height }
            } as any)],
            alignment: AlignmentType.CENTER
          })
        });
      });

      // Add Text (paragraphs not in tables)
      sortedYs.forEach(y => {
        if (usedYsInTables.has(y)) return;
        const rowItems = yGroups[y].sort((a, b) => a.transform[4] - b.transform[4]);

        const runs = rowItems.map(item => {
          const text = item.str;
          if (!text.trim() && text !== ' ') return null;

          const fontName = item.fontName?.toLowerCase() || '';
          return new TextRun({
            text: text,
            size: Math.round(Math.abs(item.transform[0] || item.transform[3]) * 2),
            bold: fontName.includes('bold') || fontName.includes('700'),
            italics: fontName.includes('italic') || fontName.includes('oblique')
          });
        }).filter(Boolean) as any[];

        if (runs.length > 0) {
          pageElements.push({
            y: viewport.height - y,
            element: new Paragraph({ children: runs, spacing: { after: 120 } })
          });
        }
      });

      // Explicit cleanup for images if any operator logic used a temporary canvas
      // (None currently in the loop besides the one inside paintImageXObject logic)

      // Sort all by Y and add to sections
      const sortedElements = pageElements.sort((a, b) => a.y - b.y).map(e => e.element);
      sections.push({
        properties: { page: { size: { width: viewport.width * 20, height: viewport.height * 20 } } },
        children: sortedElements
      });

      // Yield to avoid freezing
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const doc = new Document({ sections: sections });
    return await Packer.toBlob(doc);
  } finally {
    if (pdf) await pdf.destroy();
  }
};

export const convertWordToPdf = async (file: File): Promise<Blob> => {
  const mammoth = await getMammoth();
  const jsPDF = await getJsPdf();
  const arrayBuffer = await file.arrayBuffer();

  // Configure mammoth to preserve images
  const result = await mammoth.convertToHtml({ arrayBuffer });
  const html = result.value;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;

  let y = margin;
  let currentX = margin;

  const container = document.createElement('div');
  container.innerHTML = html;

  // Helper to check page bounds
  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const processNode = async (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text.trim() && text !== ' ') return;

      const words = text.split(/(\s+)/);
      for (const word of words) {
        if (!word) continue;
        const wordWidth = doc.getTextWidth(word);

        if (currentX + wordWidth > pageWidth - margin && word.trim()) {
          y += lineHeight;
          currentX = margin;
          checkPageBreak(lineHeight);
        }

        doc.text(word, currentX, y);
        currentX += wordWidth;
      }

    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const tagName = el.tagName.toLowerCase();

      const prevFont = doc.getFont();
      const prevFontSize = doc.getFontSize();

      // Handle Blocks
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'li'].includes(tagName)) {
        if (currentX > margin) { // Finish previous line
          y += lineHeight * 1.5;
          currentX = margin;
        }
        checkPageBreak(lineHeight);
      }

      // Styles
      if (tagName.startsWith('h')) {
        doc.setFont("helvetica", "bold");
        const headingLevel = parseInt(tagName[1]) || 1;
        doc.setFontSize(Math.max(12, 24 - (headingLevel * 2)));
        y += 4; // Extra space before heading
      } else if (tagName === 'strong' || tagName === 'b') {
        doc.setFont("helvetica", "bold");
      } else if (tagName === 'em' || tagName === 'i') {
        doc.setFont("helvetica", "italic");
      }

      // Lists
      if (tagName === 'li') {
        currentX = margin + 10;
        doc.text('•', margin, y);
      }

      // Images
      if (tagName === 'img') {
        const src = (el as HTMLImageElement).src;
        if (src && src.startsWith('data:image')) {
          try {
            // Create an image element to get dimensions
            await new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                let imgW = img.width * 0.264583; // px to mm approx (72dpi vs 96dpi)
                let imgH = img.height * 0.264583;

                // Constrain to page width
                const maxWidth = pageWidth - (margin * 2);
                if (imgW > maxWidth) {
                  const ratio = maxWidth / imgW;
                  imgW = maxWidth;
                  imgH = imgH * ratio;
                }

                checkPageBreak(imgH + 10);
                doc.addImage(src, 'JPEG', margin, y, imgW, imgH);
                y += imgH + 10;
                resolve();
              };
              img.onerror = () => resolve();
              img.src = src;
            });
          } catch (e) { console.warn("Failed to add image", e); }
        }
      } else {
        // Recurse for non-images
        const childNodes = Array.from(el.childNodes);
        for (const child of childNodes) {
          await processNode(child);
        }
      }

      // Restore Styles
      doc.setFont(prevFont.fontName, prevFont.fontStyle);
      doc.setFontSize(prevFontSize);

      // Block spacing after
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'li'].includes(tagName)) {
        y += lineHeight * 0.5;
      }
    }
  };

  // Process all body children
  const bodyNodes = Array.from(container.childNodes);
  for (const node of bodyNodes) {
    await processNode(node);
    // Yield to UI
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return doc.output('blob');
};

export const convertRtfToPdf = async (file: File): Promise<Blob> => {
  const RTFJS = await getRtfJs();
  const jsPDF = await getJsPdf();

  const arrayBuffer = await file.arrayBuffer();

  // Parse RTF to HTML using rtf.js
  RTFJS.loggingEnabled(false);
  const rtfDoc = new RTFJS.Document(arrayBuffer, {});
  const htmlElements = await rtfDoc.render();

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;

  let y = margin;
  let currentX = margin;

  // Convert HTML elements to container
  const container = document.createElement('div');
  container.append(...htmlElements);

  // Helper to check page bounds
  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const processNode = async (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text.trim() && text !== ' ') return;

      const words = text.split(/(\s+)/);
      for (const word of words) {
        if (!word) continue;
        const wordWidth = doc.getTextWidth(word);

        if (currentX + wordWidth > pageWidth - margin && word.trim()) {
          y += lineHeight;
          currentX = margin;
          checkPageBreak(lineHeight);
        }

        doc.text(word, currentX, y);
        currentX += wordWidth;
      }

    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const tagName = el.tagName.toLowerCase();

      const prevFont = doc.getFont();
      const prevFontSize = doc.getFontSize();

      // Handle Blocks
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'li'].includes(tagName)) {
        if (currentX > margin) { // Finish previous line
          y += lineHeight * 1.5;
          currentX = margin;
        }
        checkPageBreak(lineHeight);
      }

      // Styles
      if (tagName.startsWith('h')) {
        doc.setFont("helvetica", "bold");
        const headingLevel = parseInt(tagName[1]) || 1;
        doc.setFontSize(Math.max(12, 24 - (headingLevel * 2)));
        y += 4; // Extra space before heading
      } else if (tagName === 'strong' || tagName === 'b') {
        doc.setFont("helvetica", "bold");
      } else if (tagName === 'em' || tagName === 'i') {
        doc.setFont("helvetica", "italic");
      }

      // Lists
      if (tagName === 'li') {
        currentX = margin + 10;
        doc.text('•', margin, y);
      }

      // Images
      if (tagName === 'img') {
        const src = (el as HTMLImageElement).src;
        if (src && src.startsWith('data:image')) {
          try {
            await new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                let imgW = img.width * 0.264583; // px to mm approx (72dpi vs 96dpi)
                let imgH = img.height * 0.264583;

                // Constrain to page width
                const maxWidth = pageWidth - (margin * 2);
                if (imgW > maxWidth) {
                  const ratio = maxWidth / imgW;
                  imgW = maxWidth;
                  imgH = imgH * ratio;
                }

                checkPageBreak(imgH + 10);
                doc.addImage(src, 'JPEG', margin, y, imgW, imgH);
                y += imgH + 10;
                resolve();
              };
              img.onerror = () => resolve();
              img.src = src;
            });
          } catch (e) { console.warn("Failed to add image", e); }
        }
      } else {
        // Recurse for non-images
        const childNodes = Array.from(el.childNodes);
        for (const child of childNodes) {
          await processNode(child);
        }
      }

      // Restore Styles
      doc.setFont(prevFont.fontName, prevFont.fontStyle);
      doc.setFontSize(prevFontSize);

      // Block spacing after
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'li'].includes(tagName)) {
        y += lineHeight * 0.5;
      }
    }
  };

  // Process all body children
  const bodyNodes = Array.from(container.childNodes);
  for (const node of bodyNodes) {
    await processNode(node);
    // Yield to UI
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return doc.output('blob');
};

export const flattenPdf = async (file: File): Promise<Uint8Array> => {
  const pdfjs = await getPdfJs();
  const { PDFDocument } = await getPdfLib();

  const arrayBuffer = await file.arrayBuffer();
  // We need to use the worker for rendering
  await initPdfWorker();
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
    standardFontDataUrl: PDF_CONFIG.RESOURCES.STANDARD_FONTS_PATH,
  });
  const pdf = await loadingTask.promise;

  const newPdfDoc = await PDFDocument.create();

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 }); // 2.0 is a good balance for quality/size

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      console.error(`Failed to get 2D context for page ${i}`);
      continue;
    }
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;

    // Yield to main thread to avoid freezing UI on large documents
    await new Promise(resolve => setTimeout(resolve, 0));

    // Convert to JPEG to keep file size reasonable
    const imageUri = canvas.toDataURL('image/jpeg', 0.85);
    const image = await newPdfDoc.embedJpg(imageUri);

    // Cleanup canvas to prevent memory leaks
    canvas.width = 0;
    canvas.height = 0;

    const originalViewport = page.getViewport({ scale: 1.0 });
    const newPage = newPdfDoc.addPage([originalViewport.width, originalViewport.height]);
    newPage.drawImage(image, {
      x: 0,
      y: 0,
      width: originalViewport.width,
      height: originalViewport.height,
    });
  }

  addPdfMetadata(newPdfDoc, 'Flattened PDF');
  return await newPdfDoc.save();
};

export const cropPdfPages = async (
  originalFile: File,
  margins: { top: number, bottom: number, left: number, right: number, usePercentage?: boolean },
  pageIndices?: number[]
): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  const pages = doc.getPages();

  pages.forEach((page, index) => {
    // If specific pages are requested, skip if this page is not in the list
    if (pageIndices && !pageIndices.includes(index)) return;

    const { width, height } = page.getSize();

    let cropX, cropY, cropWidth, cropHeight;

    if (margins.usePercentage) {
      cropX = (margins.left / 100) * width;
      cropY = (margins.bottom / 100) * height;
      cropWidth = width - ((margins.left + margins.right) / 100) * width;
      cropHeight = height - ((margins.top + margins.bottom) / 100) * height;
    } else {
      cropX = margins.left;
      cropY = margins.bottom;
      cropWidth = width - margins.left - margins.right;
      cropHeight = height - margins.top - margins.bottom;
    }

    if (cropWidth > 0 && cropHeight > 0) {
      // In PDF, (0,0) is bottom-left.
      page.setCropBox(cropX, cropY, cropWidth, cropHeight);
      page.setMediaBox(cropX, cropY, cropWidth, cropHeight);
    }
  });

  addPdfMetadata(doc, 'Cropped PDF');
  return await doc.save();
};



// Compress PDF: Multi-level compression
export const compressPdf = async (file: File, level: 'good' | 'balanced' | 'extreme'): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const pdfjs = await getPdfJs();
  await initPdfWorker();

  const arrayBuffer = await file.arrayBuffer();

  // Level 1: "Good" - Metadata stripping and stream compression (Lossless-ish)
  if (level === 'good') {
    const doc = await PDFDocument.load(arrayBuffer);
    // Remove metadata
    doc.setTitle('');
    doc.setAuthor('');
    doc.setSubject('');
    doc.setKeywords([]);
    doc.setProducer('');
    doc.setCreator('');

    // Attempt to remove obscure metadata if possible (pdf-lib limited here, but we do what we can)
    // The main saving comes from useObjectStreams: true
    return await doc.save({ useObjectStreams: true });
  }

  // Level 2 & 3: Re-rendering (Lossy)
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
    standardFontDataUrl: PDF_CONFIG.RESOURCES.STANDARD_FONTS_PATH,
  });
  const pdf = await loadingTask.promise;
  const newPdfDoc = await PDFDocument.create();

  // Settings based on level
  const scale = getCompressionScale(level as CompressionLevel); // 1.0 = ~72-96 DPI, 1.5 = ~108-144 DPI
  const quality = getCompressionQuality(level as CompressionLevel);

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) continue;

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;

    // Yield to avoid freezing
    await new Promise(resolve => setTimeout(resolve, 0));

    // Compress content to JPEG
    const imageUri = canvas.toDataURL('image/jpeg', quality);
    const image = await newPdfDoc.embedJpg(imageUri);

    // Cleanup
    canvas.width = 0;
    canvas.height = 0;

    // Add page matching original dimensions (scaling the image)
    const originalViewport = page.getViewport({ scale: 1.0 });
    const newPage = newPdfDoc.addPage([originalViewport.width, originalViewport.height]);

    newPage.drawImage(image, {
      x: 0,
      y: 0,
      width: originalViewport.width,
      height: originalViewport.height,
    });
  }

  addPdfMetadata(newPdfDoc, 'Compressed PDF');
  return await newPdfDoc.save({ useObjectStreams: true });
};

export const mergePdfs = async (files: File[]): Promise<Uint8Array> => {
  const pdfLib = await getPdfLib();
  const { PDFDocument } = pdfLib;

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
      // Yield to event loop to prevent UI freezing
      await new Promise(resolve => setTimeout(resolve, 0));
    } catch (error) {
      console.error(`Error merging file ${file.name}:`, error);
      throw new Error(`Failed to merge file "${file.name}". It might be corrupted or password protected.`);
    }
  }

  addPdfMetadata(mergedPdf, 'Merged PDF');
  return await mergedPdf.save();
};

// Split PDF: Separate a PDF into individual pages, returned as a ZIP
export const splitPdf = async (file: File, pageIndices?: number[]): Promise<Blob> => {
  const { PDFDocument } = await getPdfLib();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const sourceDoc = await PDFDocument.load(arrayBuffer);
  const totalPages = sourceDoc.getPageCount();

  if (totalPages === 0) {
    throw new Error('PDF has no pages to split.');
  }

  // Determine which pages to split
  const pagesToProcess = (pageIndices && pageIndices.length > 0)
    ? pageIndices.sort((a, b) => a - b)
    : Array.from({ length: totalPages }, (_, i) => i);

  const zip = new JSZip();
  const baseName = file.name.replace(/\.pdf$/i, '');

  for (const pageIndex of pagesToProcess) {
    if (pageIndex < 0 || pageIndex >= totalPages) continue;

    const newDoc = await PDFDocument.create();
    const [copiedPage] = await newDoc.copyPages(sourceDoc, [pageIndex]);
    newDoc.addPage(copiedPage);

    addPdfMetadata(newDoc, `${baseName} - Page ${pageIndex + 1}`);
    const pdfBytes = await newDoc.save();
    const pageNum = String(pageIndex + 1).padStart(3, '0');
    zip.file(`${baseName}_page_${pageNum}.pdf`, pdfBytes);

    // Yield to avoid freezing
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return await zip.generateAsync({ type: 'blob' });
};

// Extract PDF Pages: Extract selected pages into a new PDF
export const extractPdfPages = async (file: File, pageIndices: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  const arrayBuffer = await file.arrayBuffer();
  const sourceDoc = await PDFDocument.load(arrayBuffer);
  const totalPages = sourceDoc.getPageCount();

  if (totalPages === 0) {
    throw new Error('PDF has no pages to extract.');
  }

  if (!pageIndices || pageIndices.length === 0) {
    throw new Error('Please select at least one page to extract.');
  }

  // Validate and filter page indices
  const validIndices = pageIndices
    .filter(index => index >= 0 && index < totalPages)
    .sort((a, b) => a - b);

  if (validIndices.length === 0) {
    throw new Error('No valid pages selected for extraction.');
  }

  const newDoc = await PDFDocument.create();

  // Copy selected pages to new document
  for (const pageIndex of validIndices) {
    const [copiedPage] = await newDoc.copyPages(sourceDoc, [pageIndex]);
    newDoc.addPage(copiedPage);

    // Yield to avoid freezing
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  addPdfMetadata(newDoc, `Extracted Pages from ${file.name}`);
  return await newDoc.save();
};

// PDF to XML: Extract PDF content into structured XML
export const convertPdfToXml = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  try {
    const escapeXml = (unsafe: string) => {
      return unsafe
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F]/g, "") // Remove invalid XML chars
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };

    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<document>\n';
    xmlContent += `  <metadata>\n`;
    xmlContent += `    <filename>${escapeXml(file.name)}</filename>\n`;
    xmlContent += `    <pageCount>${pdf.numPages}</pageCount>\n`;
    xmlContent += `    <exportDate>${new Date().toISOString()}</exportDate>\n`;
    xmlContent += `  </metadata>\n`;
    xmlContent += '  <pages>\n';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const viewport = page.getViewport({ scale: 1.0 });

      xmlContent += `    <page number="${i}" width="${viewport.width.toFixed(2)}" height="${viewport.height.toFixed(2)}">\n`;

      for (const item of textContent.items as any[]) {
        if (item.str && item.str.trim()) {
          const x = (item.transform && item.transform.length > 4) ? item.transform[4].toFixed(2) : '0';
          const y = (item.transform && item.transform.length > 5) ? item.transform[5].toFixed(2) : '0';
          const fontSize = (item.transform && item.transform.length > 0) ? item.transform[0].toFixed(2) : '12';
          xmlContent += `      <text x="${x}" y="${y}" fontSize="${fontSize}">${escapeXml(item.str)}</text>\n`;
        }
      }

      xmlContent += `    </page>\n`;

      // Yield to event loop
      if (i % 5 === 0) await new Promise(resolve => setTimeout(resolve, 0));
    }

    xmlContent += '  </pages>\n';
    xmlContent += '</document>';

    return new Blob([xmlContent], { type: 'application/xml' });
  } finally {
    if (pdf) await pdf.destroy();
  }
};

// XML to PDF: Convert structured XML into a PDF document
export const convertXmlToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument, StandardFonts, rgb } = await getPdfLib();

  const xmlText = await file.text();

  // Parse XML using DOMParser
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Invalid XML file. Please check the XML syntax.');
  }

  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);

  // Try to find pages in the XML
  const pages = xmlDoc.querySelectorAll('page');

  if (pages.length > 0) {
    // Structured XML with page elements
    for (const pageEl of pages) {
      const width = parseFloat(pageEl.getAttribute('width') || '612');
      const height = parseFloat(pageEl.getAttribute('height') || '792');
      const pdfPage = doc.addPage([width, height]);

      const textElements = pageEl.querySelectorAll('text');
      for (const textEl of textElements) {
        const x = parseFloat(textEl.getAttribute('x') || '50');
        const y = parseFloat(textEl.getAttribute('y') || '700');
        const fontSize = parseFloat(textEl.getAttribute('fontSize') || '12');
        const text = textEl.textContent || '';

        if (text.trim()) {
          pdfPage.drawText(text, {
            x,
            y,
            size: Math.min(fontSize, 72), // Cap font size
            font,
            color: rgb(0, 0, 0),
          });
        }
      }
    }
  } else {
    // Simple XML - just extract all text content
    const allText = xmlDoc.documentElement.textContent || '';
    const lines = allText.split('\n').filter(line => line.trim());

    if (lines.length === 0) {
      throw new Error('No text content found in XML file.');
    }

    const fontSize = 11;
    const margin = 50;
    const lineHeight = fontSize + 4;

    let page = doc.addPage();
    const { width: pageWidth, height: pageHeight } = page.getSize();
    let y = pageHeight - margin;

    for (const line of lines) {
      if (y < margin) {
        page = doc.addPage();
        y = pageHeight - margin;
      }

      // Word wrap long lines
      const maxCharsPerLine = Math.floor((pageWidth - 2 * margin) / (fontSize * 0.5));
      const wrappedLines = [];
      let remaining = line;

      while (remaining.length > maxCharsPerLine) {
        let breakPoint = remaining.lastIndexOf(' ', maxCharsPerLine);
        if (breakPoint === -1) breakPoint = maxCharsPerLine;
        wrappedLines.push(remaining.substring(0, breakPoint).trim());
        remaining = remaining.substring(breakPoint).trim();
      }
      if (remaining.trim()) wrappedLines.push(remaining.trim());

      for (const wLine of wrappedLines) {
        if (y < margin) {
          page = doc.addPage();
          y = pageHeight - margin;
        }
        page.drawText(wLine, { x: margin, y, size: fontSize, font, color: rgb(0, 0, 0) });
        y -= lineHeight;
      }
    }
  }

  addPdfMetadata(doc, 'XML to PDF Conversion');
  return await doc.save();
};

export const convertExcelToPdf = async (file: File): Promise<Blob> => {
  const ExcelJS = await getExcelJs();
  const jsPDF = await getJsPdf();
  const arrayBuffer = await file.arrayBuffer();

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const cellPadding = 2;
  const fontSize = 10;

  workbook.worksheets.forEach((worksheet: any, index: number) => {
    if (index > 0) doc.addPage();

    const sheetName = worksheet.name;
    // Convert worksheet to 2D array
    const data: any[][] = [];
    worksheet.eachRow((row: any) => {
      const rowData: any[] = [];
      row.eachCell({ includeEmpty: true }, (cell: any) => {
        rowData.push(cell.text || cell.value || '');
      });
      data.push(rowData);
    });

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Sheet: ' + sheetName, margin, margin + 5);

    doc.setFontSize(fontSize);
    doc.setFont('helvetica', 'normal');

    let y = margin + 15;
    const colCount = Math.max(...data.map((r: any[]) => (r ? r.length : 0)), 1);

    // Calculate max widths based on content
    const colMaxChars = new Array(colCount).fill(5); // Minimum 5 chars width
    data.forEach(row => {
      if (!row) return;
      row.forEach((cell, i) => {
        const text = String(cell || '');
        if (text.length > colMaxChars[i]) colMaxChars[i] = text.length;
      });
    });

    const totalChars = colMaxChars.reduce((a, b) => a + b, 0);
    const usableWidth = pageWidth - margin * 2;
    const colWidths = colMaxChars.map(chars => (chars / totalChars) * usableWidth);

    data.forEach((row) => {
      if (!row) return;
      let x = margin;
      let maxHeight = 0;

      row.forEach((cell: any, i: number) => {
        const text = cell !== null && cell !== undefined ? String(cell) : '';
        const currentColWidth = colWidths[i];
        const lines = doc.splitTextToSize(text, currentColWidth - cellPadding * 2);
        const cellHeight = lines.length * (fontSize * 0.5) + cellPadding * 2;
        if (cellHeight > maxHeight) maxHeight = cellHeight;
      });

      if (y + maxHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }

      row.forEach((cell: any, i: number) => {
        const text = cell !== null && cell !== undefined ? String(cell) : '';
        const currentColWidth = colWidths[i];
        const lines = doc.splitTextToSize(text, currentColWidth - cellPadding * 2);
        doc.rect(x, y, currentColWidth, maxHeight);
        doc.text(lines, x + cellPadding, y + cellPadding + (fontSize * 0.4));
        x += currentColWidth;
      });

      y += maxHeight;
    });
  });

  return doc.output('blob');
};

export const extractInvoiceData = async (file: File): Promise<InvoiceData> => {
  try {
    // 1. Try Text Extraction with PDF.js
    const pdfJs = await getPdfJs();
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfJs.getDocument({ data: arrayBuffer }).promise;

    try {
      // Parse first page only for invoice data usually
      const page = await pdf.getPage(1);
      const textContent = await page.getTextContent();
      const textItems = textContent.items.map((item: any) => item.str).join(' ');

      if (textItems.length > 50) {
        // Sufficient text found, use it
        return parseInvoiceText(textItems);
      }

      // 2. Scanned PDF -> OCR with Tesseract

      // Render page to canvas for image input
      const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for better OCR
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Failed to create canvas context');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport: viewport }).promise;

      const imageBlob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve));
      if (!imageBlob) throw new Error("Failed to render PDF page for OCR");

      // Load Tesseract dynamically
      const Tesseract = await import('tesseract.js');

      // Use createWorker for better lifecycle control
      const worker = await Tesseract.createWorker('eng');

      try {
        const ret = await worker.recognize(imageBlob);
        const ocrText = ret.data.text;
        await worker.terminate();
        return parseInvoiceText(ocrText);
      } catch (err) {
        await worker.terminate();
        throw err;
      }
    } finally {
      if (pdf) await pdf.destroy();
    }
  } catch (error) {
    console.error('Invoice extraction failed:', error);
    throw new Error('Failed to extract invoice data');
  }
};

export const convertPdfToCsv = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  try {
    let csvContent = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const items = textContent.items.map((it: any) => ({
        str: it.str,
        x: it.transform[4],
        y: it.transform[5]
      }));

      items.sort((a: any, b: any) => b.y - a.y || a.x - b.x);

      let currentY = -1;
      let currentRow: string[] = [];
      items.forEach((it: any) => {
        if (it.str.trim().length === 0) return;
        if (currentY !== -1 && Math.abs(it.y - currentY) > 5) {
          if (currentRow.length > 0) {
            csvContent += currentRow.map(s => `"${s.replace(/"/g, '""')}"`).join(',') + "\n";
          }
          currentRow = [];
        }
        currentY = it.y;
        currentRow.push(it.str.trim());
      });
      if (currentRow.length > 0) {
        csvContent += currentRow.map(s => `"${s.replace(/"/g, '""')}"`).join(',') + "\n";
      }
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    return new Blob([csvContent], { type: 'text/csv' });
  } finally {
    if (pdf) await pdf.destroy();
  }
};

export const convertPdfToExcel = async (file: File): Promise<Blob> => {
  const ExcelJS = await getExcelJs();
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Extracted Data');

  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  let rowIdx = 1;
  try {
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const items = textContent.items.map((it: any) => ({
        str: it.str,
        x: it.transform[4],
        y: it.transform[5]
      }));

      items.sort((a: any, b: any) => b.y - a.y || a.x - b.x);

      let currentY = -1;
      let currentRow: string[] = [];
      items.forEach((it: any) => {
        if (it.str.trim().length === 0) return;
        if (currentY !== -1 && Math.abs(it.y - currentY) > 5) {
          if (currentRow.length > 0) {
            sheet.addRow(currentRow);
            rowIdx++;
          }
          currentRow = [];
        }
        currentY = it.y;
        currentRow.push(it.str.trim());
      });
      if (currentRow.length > 0) {
        sheet.addRow(currentRow);
        rowIdx++;
      }
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const buffer = await workbook.xlsx.writeBuffer();
    return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  } finally {
    if (pdf) await pdf.destroy();
  }
};

export const analyzePdfSecurity = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  const findings: { type: string, detail: string, severity: 'Low' | 'Medium' | 'High' }[] = [];
  try {
    // Metadata check
    const metadata = await pdf.getMetadata();
    const info = (metadata?.info as any) || {};
    findings.push({ type: 'Document Metadata', detail: `Producer: ${info.Producer || 'N/A'}, Creator: ${info.Creator || 'N/A'}`, severity: 'Low' });

    // JavaScript Check
    try {
      const scripts = await (pdf as any).getJavaScript();
      if (scripts && scripts.length > 0) {
        findings.push({ type: 'JavaScript Detected', detail: `This PDF contains ${scripts.length} embedded scripts. JavaScript can be used for malicious actions.`, severity: 'High' });
      }
    } catch (e) {
      console.warn("JS extraction failed", e);
    }

    // Link Analysis
    let suspiciousLinks = 0;
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const annotations = await page.getAnnotations();
      annotations.forEach((anno: any) => {
        if (anno.subtype === 'Link' && anno.url) {
          const url = anno.url.toLowerCase();
          if (url.startsWith('javascript:') || url.includes('bit.ly') || url.includes('t.co') || url.includes('tinyurl')) {
            suspiciousLinks++;
            findings.push({ type: 'Suspicious Link', detail: `Possibly deceptive or shortened URL on page ${i}: ${anno.url}`, severity: 'Medium' });
          }
        }
      });
      // Yield every 10 pages
      if (i % 10 === 0) await new Promise(resolve => setTimeout(resolve, 0));
    }

    // Visual report generation
    const { jsPDF } = await getJsPdf();
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setTextColor(227, 24, 55); // Canada Red
    doc.text('PDF Security Analysis Report', 20, 20);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`File: ${file.name}`, 20, 30);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 35);
    doc.text(`Powered by pdfcanada.ca - 100% Local Privacy`, 20, 40);

    let y = 60;
    findings.forEach((f) => {
      if (y > 270) { doc.addPage(); y = 20; }

      doc.setFontSize(12);
      const color = f.severity === 'High' ? [255, 0, 0] : (f.severity === 'Medium' ? [255, 128, 0] : [0, 150, 0]);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(`[${f.severity}] ${f.type}`, 20, y);

      doc.setFontSize(10);
      doc.setTextColor(50);
      const splitDetail = doc.splitTextToSize(f.detail, 170);
      doc.text(splitDetail, 25, y + 5);

      y += 10 + (splitDetail.length * 5);
    });

    if (findings.length === 1) {
      doc.setTextColor(0, 150, 0);
      doc.text("No significant security threats detected.", 20, y);
    }

    return doc.output('blob');
  } finally {
    if (pdf) await pdf.destroy();
  }
};

/**
 * Visual Kindle Optimization (K2PdfOpt Style)
 * Handles smart cropping, column detection, and re-pagination for E-ink screens.
 */
export const optimizePdfForKindleVisual = async (file: File, screenSize: number = 6): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const { jsPDF } = await getJsPdf();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  try {
    // Target dimensions for Kindle (approx in points)
    const targetWidth = 300 + (screenSize - 4) * 75; // 6" -> 450, 7" -> 525, 10" -> 750
    const targetHeight = targetWidth * 1.33;

    const outputDoc = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: [targetWidth, targetHeight]
    });

    let pageAdded = false;
    const sharedCanvas = document.createElement('canvas');

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 2.0;
      const viewport = page.getViewport({ scale });
      const textContent = await page.getTextContent();

      let minX = viewport.width, minY = viewport.height, maxX = 0, maxY = 0;
      let hasContent = false;

      // 1. Content Area Detection
      if (textContent.items.length > 0) {
        textContent.items.forEach((it: any) => {
          if (it.str.trim()) {
            const x = it.transform[4] * scale;
            const y = viewport.height - it.transform[5] * scale;
            const w = it.width * scale;
            const h = it.height * scale;
            minX = Math.min(minX, x);
            minY = Math.min(minY, y - h);
            maxX = Math.max(maxX, x + w);
            maxY = Math.max(maxY, y);
            hasContent = true;
          }
        });
      }

      // Fallback for scanned pages (pixel analysis)
      if (!hasContent) {
        const tempScale = 0.5;
        const tempViewport = page.getViewport({ scale: tempScale });
        sharedCanvas.width = tempViewport.width;
        sharedCanvas.height = tempViewport.height;
        const ctx = sharedCanvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          await page.render({ canvasContext: ctx, viewport: tempViewport }).promise;
          const imgData = ctx.getImageData(0, 0, sharedCanvas.width, sharedCanvas.height).data;

          let pMinX = sharedCanvas.width, pMinY = sharedCanvas.height, pMaxX = 0, pMaxY = 0;
          for (let py = 0; py < sharedCanvas.height; py += 4) {
            for (let px = 0; px < sharedCanvas.width; px += 4) {
              const idx = (py * sharedCanvas.width + px) * 4;
              if (imgData[idx] < 245 || imgData[idx + 1] < 245 || imgData[idx + 2] < 245) {
                pMinX = Math.min(pMinX, px);
                pMinY = Math.min(pMinY, py);
                pMaxX = Math.max(pMaxX, px);
                pMaxY = Math.max(pMaxY, py);
                hasContent = true;
              }
            }
          }
          if (hasContent) {
            minX = (pMinX / tempScale) * scale;
            minY = (pMinY / tempScale) * scale;
            maxX = (pMaxX / tempScale) * scale;
            maxY = (pMaxY / tempScale) * scale;
          }
        }
      }

      if (!hasContent) continue;

      // Padding
      const p = 15;
      minX = Math.max(0, minX - p);
      minY = Math.max(0, minY - p);
      maxX = Math.min(viewport.width, maxX + p);
      maxY = Math.min(viewport.height, maxY + p);

      const contentWidth = maxX - minX;
      const contentHeight = maxY - minY;

      // 2. Column Detection Logic
      const strips = 20;
      const stripWidth = contentWidth / strips;
      const occupancy = new Array(strips).fill(0);

      textContent.items.forEach((it: any) => {
        const x = it.transform[4] * scale;
        const w = it.width * scale;
        const startStrip = Math.floor((x - minX) / stripWidth);
        const endStrip = Math.floor((x + w - minX) / stripWidth);
        for (let s = Math.max(0, startStrip); s <= Math.min(strips - 1, endStrip); s++) {
          occupancy[s]++;
        }
      });

      const avgOcc = occupancy.reduce((a, b) => a + b, 0) / strips;
      const thresh = Math.max(1, avgOcc * 0.1);

      let columnGapStart = -1;
      let maxGapWidth = 0;
      let currentGapStart = -1;

      for (let s = 5; s < strips - 5; s++) {
        if (occupancy[s] <= thresh) {
          if (currentGapStart === -1) currentGapStart = s;
        } else {
          if (currentGapStart !== -1) {
            const gapWidth = s - currentGapStart;
            if (gapWidth > maxGapWidth) {
              maxGapWidth = gapWidth;
              columnGapStart = currentGapStart;
            }
            currentGapStart = -1;
          }
        }
      }

      const hasTwoColumns = maxGapWidth >= 2;
      const midX = minX + (columnGapStart + maxGapWidth / 2) * stripWidth;

      // 3. Sub-region Processing
      const processRegion = async (rx: number, ry: number, rw: number, rh: number) => {
        const hScale = targetWidth / rw;
        const chunkH_Source = targetHeight / hScale;

        let currentY = ry;
        while (currentY < ry + rh) {
          const actualChunkH = Math.min(chunkH_Source, (ry + rh) - currentY);

          if (pageAdded) outputDoc.addPage([targetWidth, targetHeight]);
          pageAdded = true;

          sharedCanvas.width = rw * 2;
          sharedCanvas.height = actualChunkH * 2;
          const ctx = sharedCanvas.getContext('2d');

          if (ctx) {
            await page.render({
              canvasContext: ctx,
              viewport: page.getViewport({
                scale: (rw * 2) / (rw / scale),
                offsetX: -rx * ((rw * 2) / rw),
                offsetY: -currentY * ((rw * 2) / rw)
              })
            }).promise;

            const imgData = sharedCanvas.toDataURL('image/jpeg', 0.9);
            outputDoc.addImage(imgData, 'JPEG', 0, 0, targetWidth, actualChunkH * hScale);
          }

          currentY += actualChunkH * 0.95;
        }
      };

      if (hasTwoColumns) {
        await processRegion(minX, minY, midX - minX, contentHeight);
        await processRegion(midX, minY, maxX - midX, contentHeight);
      } else {
        await processRegion(minX, minY, contentWidth, contentHeight);
      }

      // Cleanup page resources
      (page as any).cleanup?.();
      sharedCanvas.height = 0;

      // Yield to avoid freezing
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    return outputDoc.output('blob');
  } finally {
    if (pdf) await pdf.destroy();
  }
};

export const convertGifToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  // Create an image element to load the GIF
  const img = new Image();
  const url = URL.createObjectURL(file);

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });

  // Draw to canvas to get a static frame (first frame)
  // Note: Full animated GIF support to multiple PDF pages requires complex decoding not native to browser/pdf-lib
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error("Could not create canvas context");

  ctx.drawImage(img, 0, 0);

  // Get as JPEG
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
  const bytes = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));

  const doc = await PDFDocument.create();
  const jpgImage = await doc.embedJpg(bytes);
  const page = doc.addPage([jpgImage.width, jpgImage.height]);
  page.drawImage(jpgImage, {
    x: 0,
    y: 0,
    width: jpgImage.width,
    height: jpgImage.height,
  });

  URL.revokeObjectURL(url);
  addPdfMetadata(doc, 'GIF to PDF Conversion');
  return await doc.save();
};

// Generic code to PDF converter
const convertCodeToPdf = async (file: File, title: string): Promise<Uint8Array> => {
  const { PDFDocument, StandardFonts, rgb } = await getPdfLib();
  const text = await file.text();

  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Courier);
  const fontSize = 10;
  const lineHeight = 12;
  const margin = 50;

  const page = doc.addPage();
  const { width, height } = page.getSize();
  const maxLineWidth = width - (margin * 2);

  const lines = text.split(/\r?\n/);
  let currentY = height - margin;
  let currentPage = page;

  const addNewPage = () => {
    currentPage = doc.addPage();
    currentY = height - margin;
  };

  for (const line of lines) {
    if (line.length === 0) {
      currentY -= lineHeight;
      if (currentY < margin) addNewPage();
      continue;
    }

    let remainingLine = line;
    while (remainingLine.length > 0) {
      if (currentY < margin) addNewPage();

      const charWidth = fontSize * 0.6;
      const charsPerLine = Math.floor(maxLineWidth / charWidth);

      const chunk = remainingLine.slice(0, charsPerLine);
      remainingLine = remainingLine.slice(charsPerLine);

      currentPage.drawText(chunk, {
        x: margin,
        y: currentY,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0),
      });

      currentY -= lineHeight;
    }
  }

  addPdfMetadata(doc, title);
  return await doc.save();
};

export const convertAspxToPdf = async (file: File): Promise<Uint8Array> => {
  return convertCodeToPdf(file, 'ASPX to PDF Conversion');
};

export const convertPhpToPdf = async (file: File): Promise<Uint8Array> => {
  return convertCodeToPdf(file, 'PHP to PDF Conversion');
};

// JPG/JPEG to PDF conversion
export const convertJpgToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  const arrayBuffer = await file.arrayBuffer();
  const doc = await PDFDocument.create();

  const image = await doc.embedJpg(arrayBuffer);
  const page = doc.addPage([image.width, image.height]);
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: image.width,
    height: image.height,
  });

  addPdfMetadata(doc, 'JPG to PDF Conversion');
  return await doc.save();
};

// Alias for JPEG (same as JPG)
export const convertJpegToPdf = convertJpgToPdf;

// PNG to PDF conversion
export const convertPngToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  const arrayBuffer = await file.arrayBuffer();
  const doc = await PDFDocument.create();

  const image = await doc.embedPng(arrayBuffer);
  const page = doc.addPage([image.width, image.height]);
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: image.width,
    height: image.height,
  });

  addPdfMetadata(doc, 'PNG to PDF Conversion');
  return await doc.save();
};

// Generic Image to PDF conversion (supports JPG, PNG, GIF, BMP, WebP)
export const convertImageToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  const fileType = file.type.toLowerCase();
  const fileName = file.name.toLowerCase();

  // Determine image format
  const isJpeg = fileType === 'image/jpeg' || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg');
  const isPng = fileType === 'image/png' || fileName.endsWith('.png');

  const doc = await PDFDocument.create();

  if (isJpeg) {
    const arrayBuffer = await file.arrayBuffer();
    const image = await doc.embedJpg(arrayBuffer);
    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  } else if (isPng) {
    const arrayBuffer = await file.arrayBuffer();
    const image = await doc.embedPng(arrayBuffer);
    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  } else {
    // For GIF, BMP, WebP - convert to JPEG via canvas
    const img = new Image();
    const url = URL.createObjectURL(file);

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Could not create canvas context");

    ctx.drawImage(img, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const bytes = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));

    const image = await doc.embedJpg(bytes);
    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

    URL.revokeObjectURL(url);
  }

  addPdfMetadata(doc, 'Image to PDF Conversion');
  return await doc.save();
};

// PDF to JPG conversion - exports each page as a JPG image in a ZIP
export const convertPdfToJpg = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  const zip = new JSZip();
  const baseName = file.name.replace(/\.[^/.]+$/, '');

  try {
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 2.0; // High quality
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error("Could not create canvas context");

      await page.render({ canvasContext: ctx, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      const base64Data = dataUrl.split(',')[1];

      zip.file(`${baseName}_page_${i}.jpg`, base64Data, { base64: true });

      // Cleanup canvas
      canvas.width = 0;
      canvas.height = 0;

      // Yield to UI
      if (pdf.numPages > 1) await new Promise(resolve => setTimeout(resolve, 0));
    }

    return await zip.generateAsync({ type: 'blob' });
  } finally {
    await pdf.destroy();
  }
};

// Alias for PDF to JPEG (same as JPG)
export const convertPdfToJpeg = convertPdfToJpg;

// PDF to PNG conversion - exports each page as a PNG image in a ZIP
export const convertPdfToPng = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  const zip = new JSZip();
  const baseName = file.name.replace(/\.[^/.]+$/, '');

  try {
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 2.0; // High quality
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error("Could not create canvas context");

      await page.render({ canvasContext: ctx, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/png');
      const base64Data = dataUrl.split(',')[1];

      zip.file(`${baseName}_page_${i}.png`, base64Data, { base64: true });

      // Cleanup canvas
      canvas.width = 0;
      canvas.height = 0;

      // Yield to UI
      if (pdf.numPages > 1) await new Promise(resolve => setTimeout(resolve, 0));
    }

    return await zip.generateAsync({ type: 'blob' });
  } finally {
    await pdf.destroy();
  }
};

// ODT to PDF conversion (OpenDocument Text)
// ODT files are ZIP archives containing XML content
export const convertOdtToPdf = async (file: File): Promise<Blob> => {
  const JSZip = await getJSZip();
  const jsPDF = await getJsPdf();

  const arrayBuffer = await file.arrayBuffer();

  // ODT is a ZIP file - extract content.xml
  const zip = await JSZip.loadAsync(arrayBuffer);
  const contentXml = await zip.file('content.xml')?.async('string');

  if (!contentXml) {
    throw new Error('Invalid ODT file: content.xml not found');
  }

  // Parse XML to extract text content
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(contentXml, 'text/xml');

  // Extract text from text:p and text:h elements (paragraphs and headings)
  // Try multiple selector approaches for cross-browser compatibility
  const paragraphs: string[] = [];

  // Method 1: Try getElementsByTagNameNS for proper namespace handling
  const textNs = 'urn:oasis:names:tc:opendocument:xmlns:text:1.0';
  const pElements = xmlDoc.getElementsByTagNameNS(textNs, 'p');
  const hElements = xmlDoc.getElementsByTagNameNS(textNs, 'h');

  for (let i = 0; i < pElements.length; i++) {
    const text = pElements[i].textContent?.trim();
    if (text) paragraphs.push(text);
  }
  for (let i = 0; i < hElements.length; i++) {
    const text = hElements[i].textContent?.trim();
    if (text) paragraphs.push(text);
  }

  // Method 2: If no text found, try regex fallback on raw XML
  if (paragraphs.length === 0) {
    const textMatches = contentXml.match(/<text:p[^>]*>([\s\S]*?)<\/text:p>/g);
    if (textMatches) {
      textMatches.forEach(match => {
        const text = match.replace(/<[^>]+>/g, '').trim();
        if (text) paragraphs.push(text);
      });
    }
  }

  // Method 3: Last resort - extract all text between tags
  if (paragraphs.length === 0) {
    const allText = contentXml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (allText) paragraphs.push(allText);
  }

  const fullText = paragraphs.join('\n\n');

  // Create PDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const maxWidth = pageWidth - (margin * 2);

  const lines = doc.splitTextToSize(fullText, maxWidth);

  let y = margin;
  const lineHeight = 14;
  const pageHeight = doc.internal.pageSize.getHeight();

  for (const line of lines) {
    if (y + lineHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += lineHeight;
  }

  return doc.output('blob');
};

// PDF to PowerPoint conversion
export const convertPdfToPpt = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();

  // We'll create a PPTX with images of each PDF page
  // Using pptxgenjs-lite approach with manual construction
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  const zip = new JSZip();
  const baseName = file.name.replace(/\.[^/.]+$/, '');

  try {
    // Collect page images
    const pageImages: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 2.0;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error("Could not create canvas context");

      await page.render({ canvasContext: ctx, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/png');
      pageImages.push(dataUrl.split(',')[1]);

      canvas.width = 0;
      canvas.height = 0;

      if (pdf.numPages > 1) await new Promise(resolve => setTimeout(resolve, 0));
    }

    // Build PPTX structure
    // [Content_Types].xml
    let contentTypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    contentTypes += '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">';
    contentTypes += '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>';
    contentTypes += '<Default Extension="xml" ContentType="application/xml"/>';
    contentTypes += '<Default Extension="png" ContentType="image/png"/>';
    contentTypes += '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>';

    for (let i = 1; i <= pageImages.length; i++) {
      contentTypes += `<Override PartName="/ppt/slides/slide${i}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`;
    }
    contentTypes += '<Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>';
    contentTypes += '<Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>';
    contentTypes += '</Types>';
    zip.file('[Content_Types].xml', contentTypes);

    // _rels/.rels
    let rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    rels += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    rels += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>';
    rels += '</Relationships>';
    zip.file('_rels/.rels', rels);

    // ppt/presentation.xml
    let presentation = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    presentation += '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">';
    presentation += '<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>';
    presentation += '<p:sldIdLst>';
    for (let i = 1; i <= pageImages.length; i++) {
      presentation += `<p:sldId id="${255 + i}" r:id="rId${i + 1}"/>`;
    }
    presentation += '</p:sldIdLst>';
    presentation += '<p:sldSz cx="9144000" cy="6858000" type="screen4x3"/>';
    presentation += '</p:presentation>';
    zip.file('ppt/presentation.xml', presentation);

    // ppt/_rels/presentation.xml.rels
    let presRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    presRels += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    presRels += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>';
    for (let i = 1; i <= pageImages.length; i++) {
      presRels += `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i}.xml"/>`;
    }
    presRels += '</Relationships>';
    zip.file('ppt/_rels/presentation.xml.rels', presRels);

    // Slide master and layout (minimal)
    const slideMaster = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld><p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst></p:sldMaster>';
    zip.file('ppt/slideMasters/slideMaster1.xml', slideMaster);

    const slideMasterRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/></Relationships>';
    zip.file('ppt/slideMasters/_rels/slideMaster1.xml.rels', slideMasterRels);

    const slideLayout = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" type="blank"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld></p:sldLayout>';
    zip.file('ppt/slideLayouts/slideLayout1.xml', slideLayout);

    const slideLayoutRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/></Relationships>';
    zip.file('ppt/slideLayouts/_rels/slideLayout1.xml.rels', slideLayoutRels);

    // Create slides with images
    for (let i = 0; i < pageImages.length; i++) {
      const slideNum = i + 1;

      // Add image to media folder
      zip.file(`ppt/media/image${slideNum}.png`, pageImages[i], { base64: true });

      // Slide XML with image
      let slide = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
      slide += '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">';
      slide += '<p:cSld><p:spTree>';
      slide += '<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>';
      slide += '<p:grpSpPr/>';
      slide += '<p:pic>';
      slide += '<p:nvPicPr><p:cNvPr id="2" name="Image"/><p:cNvPicPr/><p:nvPr/></p:nvPicPr>';
      slide += '<p:blipFill><a:blip r:embed="rId2"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>';
      slide += '<p:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="9144000" cy="6858000"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr>';
      slide += '</p:pic>';
      slide += '</p:spTree></p:cSld></p:sld>';
      zip.file(`ppt/slides/slide${slideNum}.xml`, slide);

      // Slide rels
      let slideRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
      slideRels += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
      slideRels += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>';
      slideRels += `<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image${slideNum}.png"/>`;
      slideRels += '</Relationships>';
      zip.file(`ppt/slides/_rels/slide${slideNum}.xml.rels`, slideRels);
    }

    return await zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
  } finally {
    await pdf.destroy();
  }
};

// PowerPoint to PDF conversion
export const convertPptToPdf = async (file: File): Promise<Blob> => {
  const JSZip = await getJSZip();
  const jsPDF = await getJsPdf();

  const arrayBuffer = await file.arrayBuffer();
  let zip;
  try {
    zip = await JSZip.loadAsync(arrayBuffer);
  } catch {
    throw new Error('Invalid PowerPoint file: unable to read file structure');
  }

  // Find slides
  const slideFiles: string[] = [];
  zip.forEach((relativePath) => {
    if (relativePath.match(/ppt\/slides\/slide\d+\.xml$/)) {
      slideFiles.push(relativePath);
    }
  });

  if (slideFiles.length === 0) {
    throw new Error('Invalid PowerPoint file: no slides found');
  }

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [960, 540] // 16:9 aspect ratio
  });

  // Sort slides by number
  slideFiles.sort((a, b) => {
    const numA = parseInt(a.match(/slide(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/slide(\d+)/)?.[1] || '0');
    return numA - numB;
  });

  let isFirstPage = true;

  for (const slidePath of slideFiles) {
    if (!isFirstPage) {
      doc.addPage([960, 540], 'landscape');
    }
    isFirstPage = false;

    // Try to extract text from slide
    const slideXml = await zip.file(slidePath)?.async('string');
    if (slideXml) {
      // Basic text extraction from PPTX XML
      const textMatches = slideXml.match(/<a:t>([^<]*)<\/a:t>/g);
      if (textMatches) {
        let y = 50;
        for (const match of textMatches) {
          const text = match.replace(/<\/?a:t>/g, '');
          if (text.trim()) {
            doc.text(text, 50, y);
            y += 20;
          }
        }
      }
    }

    // Try to find and embed images
    const slideNum = slidePath.match(/slide(\d+)/)?.[1];
    if (slideNum) {
      const relsPath = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
      const relsXml = await zip.file(relsPath)?.async('string');

      if (relsXml) {
        const imageMatches = relsXml.match(/Target="\.\.\/media\/([^"]+)"/g);
        if (imageMatches && imageMatches.length > 0) {
          for (const imgMatch of imageMatches) {
            const imgName = imgMatch.match(/media\/([^"]+)/)?.[1];
            if (imgName) {
              const imgData = await zip.file(`ppt/media/${imgName}`)?.async('base64');
              if (imgData) {
                const imgType = imgName.toLowerCase().endsWith('.png') ? 'PNG' : 'JPEG';
                try {
                  doc.addImage(`data:image/${imgType.toLowerCase()};base64,${imgData}`, imgType, 0, 0, 960, 540);
                } catch {
                  // Image embedding failed, continue
                }
              }
            }
          }
        }
      }
    }
  }

  return doc.output('blob');
};

// Apple Pages to PDF conversion
export const convertPagesToPdf = async (file: File): Promise<Blob> => {
  const JSZip = await getJSZip();
  const jsPDF = await getJsPdf();

  const arrayBuffer = await file.arrayBuffer();
  let zip;
  try {
    zip = await JSZip.loadAsync(arrayBuffer);
  } catch {
    throw new Error('Invalid Pages file: unable to read file structure');
  }

  // Try to find the QuickLook preview PDF (most Pages files include this)
  const previewPdfFile = zip.file('QuickLook/Preview.pdf');
  if (previewPdfFile) {
    const pdfData = await previewPdfFile.async('arraybuffer');
    return new Blob([pdfData], { type: 'application/pdf' });
  }

  // Fallback: Try to find thumbnail and create a basic PDF
  const thumbnailFile = zip.file('QuickLook/Thumbnail.jpg') || zip.file('QuickLook/thumbnail.jpg');
  if (thumbnailFile) {
    const imgData = await thumbnailFile.async('base64');
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    try {
      doc.addImage(`data:image/jpeg;base64,${imgData}`, 'JPEG', 0, 0, 595, 842);
      return doc.output('blob');
    } catch {
      // Continue to next fallback
    }
  }

  // Fallback: Look for any images in the Data folder and create a PDF from them
  const imageFiles: string[] = [];
  zip.forEach((relativePath) => {
    if (relativePath.match(/\.(jpg|jpeg|png|gif)$/i) && relativePath.includes('Data/')) {
      imageFiles.push(relativePath);
    }
  });

  if (imageFiles.length > 0) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    let isFirstPage = true;
    for (const imgPath of imageFiles) {
      const imgFile = zip.file(imgPath);
      if (imgFile) {
        const imgData = await imgFile.async('base64');
        const ext = imgPath.split('.').pop()?.toLowerCase();
        const imgType = ext === 'png' ? 'PNG' : 'JPEG';

        if (!isFirstPage) {
          doc.addPage('a4', 'portrait');
        }
        isFirstPage = false;

        try {
          doc.addImage(`data:image/${ext};base64,${imgData}`, imgType, 20, 20, 555, 800);
        } catch {
          // Image embedding failed, continue
        }
      }
    }

    if (!isFirstPage) {
      return doc.output('blob');
    }
  }

  throw new Error('Unable to convert Pages file: No preview PDF or extractable content found. Please export as PDF from Apple Pages directly.');
};

// PDF to SVG conversion - exports each page as an SVG in a ZIP
export const convertPdfToSvg = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapUrl: PDF_CONFIG.RESOURCES.CMAPS_PATH,
    cMapPacked: true,
  }).promise;

  const zip = new JSZip();
  const baseName = file.name.replace(/\.[^/.]+$/, '');

  try {
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 2.0; // High quality
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error("Could not create canvas context");

      await page.render({ canvasContext: ctx, viewport }).promise;

      // Convert canvas to PNG data URL, then embed in SVG
      const dataUrl = canvas.toDataURL('image/png');

      // Create SVG with embedded image for vector-like scalability
      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="${viewport.width}" height="${viewport.height}" 
     viewBox="0 0 ${viewport.width} ${viewport.height}">
  <title>Page ${i}</title>
  <image width="${viewport.width}" height="${viewport.height}" xlink:href="${dataUrl}"/>
</svg>`;

      zip.file(`${baseName}_page_${i}.svg`, svgContent);

      // Cleanup canvas
      canvas.width = 0;
      canvas.height = 0;

      // Yield to UI
      if (pdf.numPages > 1) await new Promise(resolve => setTimeout(resolve, 0));
    }

    return await zip.generateAsync({ type: 'blob' });
  } finally {
    await pdf.destroy();
  }
};

// TIF/TIFF to PDF conversion
export const convertTifToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();

  // Create image element to load the TIF
  const img = new Image();
  const url = URL.createObjectURL(file);

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error('Failed to load TIF image. Your browser may not support this TIFF format directly.'));
    img.src = url;
  });

  // Draw to canvas to get image data
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error("Could not create canvas context");

  ctx.drawImage(img, 0, 0);

  // Get as JPEG for better PDF compatibility
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
  const bytes = Uint8Array.from(atob(dataUrl.split(',')[1]), c => c.charCodeAt(0));

  const doc = await PDFDocument.create();
  const jpgImage = await doc.embedJpg(bytes);
  const page = doc.addPage([jpgImage.width, jpgImage.height]);
  page.drawImage(jpgImage, {
    x: 0,
    y: 0,
    width: jpgImage.width,
    height: jpgImage.height,
  });

  URL.revokeObjectURL(url);
  canvas.width = 0;
  canvas.height = 0;

  addPdfMetadata(doc, 'TIF to PDF Conversion');
  return await doc.save();
};
