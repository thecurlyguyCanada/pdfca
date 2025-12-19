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
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf');
    pdfjsLib = pdfjs.default || pdfjs;
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

export const initPdfWorker = async () => {
  if (!workerInitialized && typeof window !== 'undefined') {
    const pdfjs = await getPdfJs();
    if (pdfjs.GlobalWorkerOptions) {
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
  const arrayBuffer = await file.arrayBuffer();

  const doc = await PDFDocument.create();
  const images: { data: Uint8Array, name: string }[] = [];

  if (isZip) {
    const zip = new JSZip();
    const content = await zip.loadAsync(file);
    const fileNames: string[] = [];
    content.forEach((path) => {
      if (/\.(jpg|jpeg|png|webp)$/i.test(path)) {
        fileNames.push(path);
      }
    });
    fileNames.sort();

    for (const name of fileNames) {
      const data = await content.file(name)?.async("uint8array");
      if (data) images.push({ data, name });
    }
  } else {
    try {
      // @ts-ignore
      const { createExtractorFromData } = await import('unrar-js');
      const extractor = await createExtractorFromData(new Uint8Array(arrayBuffer));
      const list = extractor.getFileList();
      const fileHeaders = [...list.fileHeaders].filter(h => /\.(jpg|jpeg|png|webp)$/i.test(h.name));
      fileHeaders.sort((a, b) => a.name.localeCompare(b.name));

      const extracted = extractor.extract({ files: fileHeaders.map(h => h.name) });
      for (const item of extracted.files) {
        if (item.extraction) {
          images.push({ data: item.extraction, name: item.fileHeader.name });
        }
      }
    } catch (e) {
      console.error("CBR extraction failed", e);
      throw new Error("Could not extract images from CBR/RAR file. Make sure it is a valid archive.");
    }
  }

  if (images.length === 0) {
    throw new Error("No images found in the archive.");
  }

  for (const img of images) {
    try {
      let embeddedImg;
      if (/\.(jpg|jpeg)$/i.test(img.name)) {
        embeddedImg = await doc.embedJpg(img.data);
      } else if (/\.png$/i.test(img.name)) {
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

  return await doc.save();
};

// Re-export formatFileSize from lightweight utils for backward compatibility
export { formatFileSize } from './formatUtils';
