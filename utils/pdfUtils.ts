// Dynamic imports for heavy libraries - only loaded when needed
// This prevents loading ~2MB of JS on the landing page

let pdfjsLib: any = null;
let workerInitialized = false;

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
  const docx = await import('docx');
  return docx;
};

// Lazy load mammoth
const getMammoth = async () => {
  const mammoth = await import('mammoth');
  return mammoth;
};

// Lazy load jsPDF
const getJsPdf = async () => {
  const mod = await import('jspdf');
  return (mod as any).jsPDF || mod.default || mod;
};

export const initPdfWorker = async () => {
  if (!workerInitialized && typeof window !== 'undefined') {
    const pdfjs = await getPdfJs();
    if (pdfjs.GlobalWorkerOptions) {
      // Use the bundled worker from the CDN or a local path
      // Setting it to a local path that we know exists in public/
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
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

export const loadPdfDocument = async (file: File): Promise<{ doc: any; pageCount: number }> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await file.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  return { doc, pageCount: doc.getPageCount() };
};

export const deletePagesFromPdf = async (originalFile: File, pageIndicesToDelete: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);

  const sortedIndices = [...pageIndicesToDelete].sort((a, b) => b - a);

  sortedIndices.forEach((index) => {
    if (index >= 0 && index < doc.getPageCount()) {
      doc.removePage(index);
    }
  });

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

  return await doc.save();
};

export const reorderPdfPages = async (originalFile: File, newOrder: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const sourceDoc = await PDFDocument.load(arrayBuffer);
  const newDoc = await PDFDocument.create();

  // Copy pages in the new order
  for (const pageIndex of newOrder) {
    if (pageIndex >= 0 && pageIndex < sourceDoc.getPageCount()) {
      const [copiedPage] = await newDoc.copyPages(sourceDoc, [pageIndex]);
      newDoc.addPage(copiedPage);
    }
  }

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

  return await doc.save();
};

export const convertHeicToPdf = async (file: File): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const heic2any = await getHeic2Any();

  const convertedBlobOrBlobs = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.8
  });

  const blobs = Array.isArray(convertedBlobOrBlobs) ? convertedBlobOrBlobs : [convertedBlobOrBlobs];

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
  }

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
  }

  if (doc.getPageCount() === 0) {
    throw new Error("Could not process any images from the archive.");
  }

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

  const worker = await (Tesseract as any).createWorker(langString);

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

  return await doc.save();
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

    // Sort all by Y and add to sections
    const sortedElements = pageElements.sort((a, b) => a.y - b.y).map(e => e.element);
    sections.push({
      properties: { page: { size: { width: viewport.width * 20, height: viewport.height * 20 } } },
      children: sortedElements
    });
  }

  const doc = new Document({ sections: sections });
  return await Packer.toBlob(doc);
};

export const convertWordToPdf = async (file: File): Promise<Blob> => {
  const mammoth = await getMammoth();
  const jsPDF = await getJsPdf();
  const arrayBuffer = await file.arrayBuffer();

  const result = await mammoth.convertToHtml({ arrayBuffer });
  const html = result.value;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxLineWidth = pageWidth - margin * 2;
  const lineHeight = 7;

  let y = margin;

  // Split by paragraph-like tags
  const paragraphs = html.split(/<\/p>|<\/li>|<\/h[1-6]>/);

  paragraphs.forEach((p) => {
    if (!p.trim()) return;

    // Clean up starting tags
    const cleanP = p.replace(/<p>|<li>|<h[1-6][^>]*>/g, '').trim();
    if (!cleanP) return;

    // Split into segments (tags vs text)
    const segments = cleanP.split(/(<[^>]+>)/g);

    let currentX = margin;
    let isBold = false;
    let isItalic = false;

    // Process segments to build a line-wrapped list of styled fragments
    // For simplicity in a browser environment, we render word by word if needed
    const words = cleanP.split(/(\s+)/);

    // Reset formatting for new paragraph
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    // We'll use a more advanced approach: process all segments and handle wrapping
    const styledFragments: { text: string, bold: boolean, italic: boolean }[] = [];
    segments.forEach(seg => {
      if (seg === '<strong>' || seg === '<b>') isBold = true;
      else if (seg === '</strong>' || seg === '</b>') isBold = false;
      else if (seg === '<em>' || seg === '<i>') isItalic = true;
      else if (seg === '</em>' || seg === '</i>') isItalic = false;
      else if (!seg.startsWith('<')) {
        styledFragments.push({ text: seg, bold: isBold, italic: isItalic });
      }
    });

    // Render styled fragments with wrapping
    styledFragments.forEach(frag => {
      doc.setFont("helvetica", frag.bold && frag.italic ? "bolditalic" : frag.bold ? "bold" : frag.italic ? "italic" : "normal");

      const words = frag.text.split(/(\s+)/);
      words.forEach(word => {
        if (!word) return;
        const wordWidth = doc.getTextWidth(word);

        if (currentX + wordWidth > pageWidth - margin && word.trim()) {
          y += lineHeight;
          currentX = margin;

          if (y > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
        }

        doc.text(word, currentX, y);
        currentX += wordWidth;
      });
    });

    y += lineHeight * 1.5; // Paragraph spacing
    currentX = margin;

    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  });

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

    // Convert to JPEG to keep file size reasonable
    const imageUri = canvas.toDataURL('image/jpeg', 0.85);
    const image = await newPdfDoc.embedJpg(imageUri);

    // Cleanup canvas to prevent memory leaks
    canvas.width = 0;
    canvas.height = 0;

    const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);
    newPage.drawImage(image, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });
  }

  return await newPdfDoc.save();
};

export const cropPdfPages = async (originalFile: File, margins: { top: number, bottom: number, left: number, right: number }, pageIndices?: number[]): Promise<Uint8Array> => {
  const { PDFDocument } = await getPdfLib();
  const arrayBuffer = await originalFile.arrayBuffer();
  const doc = await PDFDocument.load(arrayBuffer);
  const pages = doc.getPages();

  pages.forEach((page, index) => {
    // If specific pages are requested, skip if this page is not in the list
    if (pageIndices && !pageIndices.includes(index)) return;

    const { width, height } = page.getSize();

    // Default to points if not specified, or handle percentages if we want to be fancy later
    // For now, let's assume they are absolute points (72 = 1 inch)

    const cropX = margins.left;
    const cropY = margins.bottom;
    const cropWidth = width - margins.left - margins.right;
    const cropHeight = height - margins.top - margins.bottom;

    if (cropWidth > 0 && cropHeight > 0) {
      // In PDF, (0,0) is bottom-left.
      // We set both CropBox (viewable area) and MediaBox (actual physical area)
      // to ensure consistent behavior across all PDF viewers.
      page.setCropBox(cropX, cropY, cropWidth, cropHeight);
      page.setMediaBox(cropX, cropY, cropWidth, cropHeight);
    }
  });

  return await doc.save();
};


