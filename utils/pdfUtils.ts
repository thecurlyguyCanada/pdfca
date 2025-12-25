// Dynamic imports for heavy libraries - only loaded when needed
// This prevents loading ~2MB of JS on the landing page

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
    const mod = await import('pdfjs-dist');
    pdfjsLib = mod.default || mod;
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
  return JSZip.default;
};

// Lazy load heic2any
const getHeic2Any = async () => {
  const heic2any = await import('heic2any');
  return heic2any.default;
};

// Lazy load Tesseract.js for OCR
const getTesseract = async () => {
  const mod = await import('tesseract.js');
  return mod.default || mod;
};

// Lazy load docx
const getDocx = async () => {
  try {
    const docx = await import('docx');
    return docx;
  } catch (error) {
    console.error('Failed to load docx library:', error);
    throw new Error('ERR_LIB_LOAD_FAILED_DOCX');
  }
};

// Lazy load mammoth
const getMammoth = async () => {
  try {
    const mammoth = await import('mammoth');
    return mammoth;
  } catch (error) {
    console.error('Failed to load mammoth library:', error);
    throw new Error('ERR_LIB_LOAD_FAILED_MAMMOTH');
  }
};

// Lazy load jsPDF
const getJsPdf = async () => {
  try {
    const mod = await import('jspdf');
    return (mod as any).jsPDF || mod.default || mod;
  } catch (error) {
    console.error('Failed to load jspdf library:', error);
    throw new Error('ERR_LIB_LOAD_FAILED_JSPDF');
  }
};

const getXlsx = async () => {
  try {
    const xlsx = await import('xlsx');
    return xlsx;
  } catch (error) {
    console.error('Failed to load xlsx library:', error);
    throw new Error('ERR_LIB_LOAD_FAILED_XLSX');
  }
};

export const initPdfWorker = async () => {
  if (!workerInitialized && typeof window !== 'undefined') {
    const pdfjs = await getPdfJs();
    if (pdfjs.GlobalWorkerOptions) {
      // Use the bundled worker from the CDN or a local path
      // Setting it to a local path that we know exists in public/
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
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
      cMapUrl: '/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: '/standard_fonts/',
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
    cMapUrl: '/cmaps/',
    cMapPacked: true,
  }).promise;

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
      const margin = 50;
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
  const { PDFDocument, rgb, StandardFonts } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  const pages = doc.getPages();
  const helveticaFont = await doc.embedFont(StandardFonts.Helvetica);

  for (const entry of signatureEntries) {
    if (entry.pageIndex < 0 || entry.pageIndex >= pages.length) continue;

    const page = pages[entry.pageIndex];
    const { width: pageWidth, height: pageHeight } = page.getSize();

    // Convert percentage to actual PDF points
    const x = entry.x * pageWidth;
    const y = (1 - entry.y - entry.height) * pageHeight; // Flip Y for PDF-lib (0,0 is bottom-left)
    const width = entry.width * pageWidth;
    const height = entry.height * pageHeight;

    if (entry.type === 'signature' || entry.type === 'initials' || (entry.type === 'text' && !entry.text && entry.dataUrl)) {
      if (!entry.dataUrl) continue;

      try {
        const imageBytes = await fetch(entry.dataUrl).then(res => res.arrayBuffer());
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

export const convertHeicToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const heic2any = await getHeic2Any();

  /* heic2any returns a Blob or Blob[] */
  const blobs: Blob[] = [];

  try {
    const convertedBlobOrBlobs = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: 0.8
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
  return await doc.save();
};

export const convertPdfToEpub = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const JSZip = await getJSZip();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items
      .filter((item: any) => typeof item.str === 'string')
      .map((item: any) => escapeHtml(item.str));
    fullText += `<h2>Page ${i}</h2><p>${strings.join(' ')}</p><hr/>`;
  }

  const zip = new JSZip();
  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });

  zip.folder("META-INF")?.file("container.xml", `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

  const oebps = zip.folder("OEBPS");
  oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Converted PDF</title></head>
<body>${fullText}</body>
</html>`);

  oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>Converted PDF</dc:title>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="content"/>
  </spine>
</package>`);

  oebps?.file("toc.ncx", `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:12345"/></head>
  <docTitle><text>Converted PDF</text></docTitle>
  <navMap>
    <navPoint id="navPoint-1" playOrder="1">
      <navLabel><text>Content</text></navLabel>
      <content src="content.xhtml"/>
    </navPoint>
  </navMap>
</ncx>`);

  return await zip.generateAsync({ type: "blob" });
};

export const convertEpubToPdf = async (file: File): Promise<Uint8Array> => {
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

  const fontSize = 11;
  const margin = 50;
  const charsPerLine = 85;

  let page = doc.addPage();
  const { width: pageWidth, height: pageHeight } = page.getSize();
  let y = pageHeight - margin;

  const paragraphs = textContent.split('\n');

  for (const paragraph of paragraphs) {
    const trimmedPara = paragraph.trim();
    if (!trimmedPara) {
      y -= (fontSize + 2);
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
        y -= (fontSize + 4);

        if (word.length > charsPerLine) {
          let remaining = word;
          while (remaining.length > charsPerLine) {
            if (y < margin + fontSize) {
              page = doc.addPage();
              y = pageHeight - margin;
            }
            page.drawText(remaining.substring(0, charsPerLine), { x: margin, y, size: fontSize, font });
            y -= (fontSize + 4);
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
      y -= (fontSize + 4);
    }
  }

  addPdfMetadata(doc, 'EPUB to PDF Conversion');
  return await doc.save();
};

export const convertCbrToPdf = async (file: File): Promise<Uint8Array> => {
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
    fileNames.sort();

    for (const name of fileNames) {
      const data = await content.file(name)?.async("uint8array");
      if (data) images.push({ data, name });
    }
  } else if (isRar) {
    // RAR extraction requires Node.js APIs not available in browser
    throw new Error("RAR/CBR files are not supported in browser. Please convert to CBZ (ZIP) format first.");
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
  return await doc.save();
};

// OCR: Extract text from PDF pages
export interface OcrProgress {
  page: number;
  totalPages: number;
  status: string;
  progress: number;
}

export const extractTextWithOcr = async (
  file: File,
  pageIndices: number[],
  languages: string[] = ['eng'],
  onProgress?: (progress: OcrProgress) => void
): Promise<string> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const Tesseract = await getTesseract();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

  let fullText = '';
  const langString = languages.join('+');

  // Create worker once
  const worker = await (Tesseract as any).createWorker(langString, 1, {
    logger: (m: any) => {
      // Internal progress is handled per page in the loop below
    }
  });

  const indicesToProcess = pageIndices.length > 0
    ? pageIndices
    : Array.from({ length: pdf.numPages }, (_, i) => i);

  try {
    for (let i = 0; i < indicesToProcess.length; i++) {
      const pageIndex = indicesToProcess[i];
      if (pageIndex < 0 || pageIndex >= pdf.numPages) continue;

      onProgress?.({
        page: i + 1,
        totalPages: indicesToProcess.length,
        status: `Processing page ${i + 1} of ${indicesToProcess.length}...`,
        progress: (i / indicesToProcess.length) * 100
      });

      const page = await pdf.getPage(pageIndex + 1);
      const viewport = page.getViewport({ scale: 2.0 });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;

      await page.render({ canvasContext: ctx, viewport }).promise;

      const { data: { text } } = await worker.recognize(canvas);
      fullText += `--- Page ${pageIndex + 1} ---\n${text}\n\n`;

      // Explicit cleanup
      canvas.width = 0;
      canvas.height = 0;
    }
  } finally {
    await worker.terminate();
  }

  onProgress?.({
    page: indicesToProcess.length,
    totalPages: indicesToProcess.length,
    status: 'Complete!',
    progress: 100
  });

  return fullText;
};

// OCR: Create searchable PDF with invisible text layer
export const makeSearchablePdf = async (
  file: File,
  pageIndices: number[],
  languages: string[] = ['eng'],
  onProgress?: (progress: OcrProgress) => void
): Promise<Uint8Array> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();
  const { PDFDocument, rgb } = await getPdfLib();
  const Tesseract = await getTesseract();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const doc = await PDFDocument.load(arrayBuffer);
  const langString = languages.join('+');

  let worker = await (Tesseract as any).createWorker(langString);

  const indicesToProcess = pageIndices.length > 0
    ? pageIndices
    : Array.from({ length: pdf.numPages }, (_, i) => i);

  try {
    for (let i = 0; i < indicesToProcess.length; i++) {
      const pageIndex = indicesToProcess[i];
      if (pageIndex < 0 || pageIndex >= pdf.numPages) continue;

      onProgress?.({
        page: i + 1,
        totalPages: indicesToProcess.length,
        status: `OCR processing page ${i + 1}...`,
        progress: (i / indicesToProcess.length) * 100
      });

      const pdfJsPage = await pdf.getPage(pageIndex + 1);
      const viewport = pdfJsPage.getViewport({ scale: 2.0 });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;

      await pdfJsPage.render({ canvasContext: ctx, viewport }).promise;

      const result = await worker.recognize(canvas);

      const pdfLibPage = doc.getPage(pageIndex);
      const { width: pageWidth, height: pageHeight } = pdfLibPage.getSize();
      const scaleX = pageWidth / viewport.width;
      const scaleY = pageHeight / viewport.height;

      const words = (result.data as any).words as any[];
      for (const word of words) {
        if (!word.text.trim()) continue;

        const bbox = word.bbox;
        const x = bbox.x0 * scaleX;
        // Improved Y positioning: Tesseract bbox y1 is the bottom of the word in canvas coords (top-down)
        // PDF coords are bottom-up. So pageHeight - (bbox.y1 * scaleY) is the baseline/bottom.
        const y = pageHeight - (bbox.y1 * scaleY);
        // Ensure font size is reasonable
        const fontSize = Math.max(2, (bbox.y1 - bbox.y0) * scaleY * 0.8);

        pdfLibPage.drawText(word.text, {
          x,
          y: y + (fontSize * 0.1), // Slight adjustment for baseline
          size: fontSize,
          color: rgb(0, 0, 0),
          opacity: 0,
        });
      }

      // Explicit cleanup
      canvas.width = 0;
      canvas.height = 0;

      // Yield to UI loop
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  } finally {
    await worker.terminate();
    worker = null;
  }

  onProgress?.({
    page: indicesToProcess.length,
    totalPages: indicesToProcess.length,
    status: 'Complete!',
    progress: 100
  });

  addPdfMetadata(doc, 'Searchable PDF with OCR');
  return await doc.save();
};

/**
 * Add SEO-friendly metadata to PDF documents
 * Improves searchability and attribution when users share generated PDFs
 */
const addPdfMetadata = (doc: PDFDocument, title?: string) => {
  doc.setTitle(title || 'Document processed by pdfcanada.ca');
  doc.setAuthor('pdfcanada.ca');
  doc.setSubject('PDF processed with free, privacy-focused Canadian PDF tools');
  doc.setKeywords(['PDF', 'Canada', 'Free PDF Tools', 'Privacy', 'pdfcanada.ca']);
  doc.setCreator('pdfcanada.ca - Free Canadian PDF Tools');
  doc.setProducer('pdfcanada.ca');
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
    cMapUrl: '/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: '/standard_fonts/',
  });

  const pdf = await loadingTask.promise;
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
        doc.setFontSize(Math.max(12, 24 - (parseInt(tagName[1]) * 2)));
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
    cMapUrl: '/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: '/standard_fonts/',
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
    cMapUrl: '/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: '/standard_fonts/',
  });
  const pdf = await loadingTask.promise;
  const newPdfDoc = await PDFDocument.create();

  // Settings based on level
  const scale = level === 'extreme' ? 1.0 : 1.5; // 1.0 = ~72-96 DPI, 1.5 = ~108-144 DPI
  const quality = level === 'extreme' ? 0.4 : 0.7;

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
  try {
    const pdfLib = await getPdfLib();
    const { PDFDocument } = pdfLib;

    // Create a new document
    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      // Load the source PDF
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);

      // Copy all pages
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());

      // Add pages to the new document
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    // Save the merged PDF
    addPdfMetadata(mergedPdf, 'Merged PDF');
    return await mergedPdf.save();
  } catch (error) {
    console.error('Error in mergePdfs:', error);
    throw new Error('Failed to merge PDFs. One of the files might be corrupted or password protected.');
  }
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

// PDF to XML: Extract PDF content into structured XML
export const convertPdfToXml = async (file: File): Promise<Blob> => {
  await initPdfWorker();
  const pdfjs = await getPdfJs();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

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
        const x = item.transform ? item.transform[4].toFixed(2) : '0';
        const y = item.transform ? item.transform[5].toFixed(2) : '0';
        const fontSize = item.transform ? item.transform[0].toFixed(2) : '12';
        xmlContent += `      <text x="${x}" y="${y}" fontSize="${fontSize}">${escapeXml(item.str)}</text>\n`;
      }
    }

    xmlContent += `    </page>\n`;
  }

  xmlContent += '  </pages>\n';
  xmlContent += '</document>';

  return new Blob([xmlContent], { type: 'application/xml' });
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
  const XLSX = await getXlsx();
  const jsPDF = await getJsPdf();
  const arrayBuffer = await file.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const cellPadding = 2;
  const fontSize = 10;

  workbook.SheetNames.forEach((sheetName: string, index: number) => {
    if (index > 0) doc.addPage();

    const worksheet = workbook.Sheets[sheetName];
    // raw: false ensures dates and numbers are formatted as text (e.g. "2023-12-25" instead of 45285)
    const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false, dateNF: 'yyyy-mm-dd' });

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
