---
title: "JPG to PDF Free: Photos, PNG, WEBP & HEIC to One PDF, No Upload (2026)"
h1: "How to Convert JPG and Other Images to PDF"
lead: "Turn a photo, scan, screenshot or iPhone picture into a PDF at full quality, then combine several into one file. Everything runs in your browser; nothing is uploaded."
description: "Convert JPG, PNG, WEBP or HEIC images to PDF for free in your browser in about 2 seconds each, then merge them into one ordered PDF. No upload, no watermark."
answer: "Click Select File, choose the image and click Convert File; a one-page PDF sized to the picture downloads a moment later. JPG and PNG are embedded without re-compression, so quality is identical to the original. To put several photos in one document, convert each and combine them with Merge PDF. It is free, has no watermark, and the images never leave your device."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the conversion happens", "In your browser tab, using pdf-lib. No image is sent to a server."]
  - ["Maximum file size", "No fixed cap. A 48-megapixel, 15 MB JPEG or a 25 MB PNG converts on a laptop; on an older phone keep single images under about 15–20 MB."]
  - ["Images per conversion", "One image per run. For a multi-page PDF, convert each image and combine the PDFs with Merge PDF, which lets you drag them into order."]
  - ["Input", "JPG/JPEG on this page; PNG, WEBP, GIF, BMP and AVIF through the same engine; HEIC via the HEIC to PDF tool."]
  - ["Output", "A one-page PDF whose page matches the image's pixel dimensions. JPG and PNG pixels are copied as-is; WEBP, GIF, BMP and AVIF are re-encoded as JPEG at quality 0.9. Originals are never modified."]
  - ["Page size and margins", "The page equals the image, with no margins. For Letter or A4 with margins, choose Fit to page when printing, or print the image to PDF from your photo viewer."]
  - ["Works offline?", "Yes, once the page has loaded"]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I turn a JPG into a PDF for free?"
    a: "Open the tool, click Select File, pick the photo and click Convert File. The PDF downloads automatically within a second or two, free and without a watermark. The file is built by a PDF library running inside your browser, so there is no upload and no account."
  - q: "How do I combine several photos into one PDF?"
    a: "Convert each image here, then open Merge PDF, add the resulting PDFs, drag the thumbnails into the order you want and click Merge PDFs. Each photo becomes one page. Ten receipts take about two minutes from start to finish, and the order is whatever you dragged."
  - q: "Does converting JPG or PNG to PDF lose quality?"
    a: "No. JPEG data is embedded byte for byte and PNG pixels are stored with lossless Flate compression, so neither is re-compressed. A 4032×3024 photo stays 4032×3024 with the same pixels. WEBP, GIF, BMP and AVIF are the exception: they are decoded and saved as JPEG at quality 0.9, which is visually close to the original."
  - q: "What happens to a PNG's transparent background?"
    a: "A PNG keeps its transparency as a soft mask, so transparent areas show the viewer's page colour, which is white in Acrobat, Preview, Chrome and Edge. A transparent WEBP or GIF is different: it is flattened through a JPEG step and transparent areas come out black. Save those as PNG first if the background matters."
  - q: "Can I convert iPhone HEIC photos here?"
    a: "Use the dedicated HEIC to PDF tool, which decodes Apple's HEIC format in the browser and produces the same kind of PDF. iPhones shoot HEIC by default, and most Windows PCs and government upload forms cannot read it, so converting to PDF is the usual fix. The iPhone-specific details are on that page."
  - q: "Why is my photo sideways in the PDF?"
    a: "Phone cameras often store the picture sideways and rely on a rotation flag in the EXIF data to display it upright. The PDF page uses the raw pixel orientation and ignores the flag. Run the result through Rotate PDF, or rotate the photo in your gallery app and export it before converting."
  - q: "Can I choose Letter or A4 and add margins?"
    a: "Not inside the tool: the page is made the same size as the image, with no margins, so nothing is cropped or scaled. When you print, pick Fit to page and the photo lands centred on Letter or A4 with the printer's margins. If you need a true Letter-sized PDF with margins, print the image to PDF from Photos or Preview instead."
  - q: "Will the CRA or IRCC accept the PDF?"
    a: "CRA My Account accepts PDF, JPG and PNG uploads, so either works there; check the size cap shown on the upload screen. IRCC document uploads favour PDF, and a photo wrapped as a PDF meets that requirement without altering the picture. Insurance claim portals usually accept both as well."
---
## How Do I Convert a JPG or Photo to PDF for Free?

Three clicks per image, and on most devices under two seconds. There are no settings because the tool does one thing: it wraps your picture in a PDF page without touching the pixels.

### Step 1: Click Select File

Click **Select File** or drag the image onto the drop zone. This page takes `.jpg` and `.jpeg`; the same engine behind it handles PNG, WEBP, GIF, BMP and AVIF, and iPhone HEIC photos go through [HEIC to PDF](/en/heic-to-pdf). If the picker greys a file out, the extension is not one this page accepts.

### Step 2: Check the orientation in the preview

A thumbnail appears. Look at it now, before converting. Phone photos often display upright in your gallery but are stored sideways with a rotation flag, and that flag is not applied to the PDF page. If the thumbnail is on its side, rotate and re-export the photo first, or plan to fix the PDF with [Rotate PDF](/en/rotate-pdf).

### Step 3: Click Convert File

Press **Convert File**. The engine reads the file, creates a page the exact pixel size of the image and places the picture on it. A 12-megapixel photo takes well under a second on a laptop and one to two seconds on a mid-range phone.

### Step 4: Find the download

The PDF downloads automatically with the image's name and a `.pdf` extension. On a desktop it lands in Downloads; on iPhone, Safari puts it in Files → Downloads. Click **Process Another** for the next image.

### Step 5: Combine several images into one PDF

The tool converts one image per run, so a stack of receipts or a four-page handwritten assignment becomes four PDFs. Open [Merge PDF](/en/merge-pdf), add them all, drag the thumbnails into the order you want and merge. You get one document with one image per page, and you control the sequence.

> **Tip:** Number the image files before you start (01-hydro.jpg, 02-parking.jpg, 03-fuel.jpg). The PDFs inherit the names, so sorting in the merge step takes seconds.

## What Happens to My Photos When I Convert Them?

Nothing leaves your device. The page loads pdf-lib, an open-source PDF library written in JavaScript, into your browser tab once. When you pick a file, the browser's File API reads it into memory. pdf-lib builds a new PDF document in that same memory, embeds the image, writes the bytes to a Blob and hands it to the browser as a download.

No server is in the chain because none is needed; a PDF is a container, and a JPEG or PNG is already a valid thing to put inside one. If you prefer proof to promises, open your browser's developer tools, choose the Network tab and convert a photo. You will see the page's scripts load and one anonymous page-view ping. No request carries your image.

That matters more for photos than for most documents. The images people convert here are pictures of passports, driver's licences, T4 slips, pay stubs, prescriptions, rental damage and car accidents for an insurance claim. A cloud converter holds that picture on someone else's disk for hours or days; this one never has it. Close the tab and the memory is released.

## Which Image Formats Work, and Does Each One Keep Its Quality?

The answer depends on the format, because the engine takes two different paths.

**JPG/JPEG and PNG are copied, not re-encoded.** The JPEG stream goes into the PDF byte for byte, so the PDF shows exactly the pixels your camera or scanner produced. PNG pixels are decoded and stored with Flate, the same lossless compression PNG uses, and the alpha channel becomes a PDF soft mask, so a cut-out logo or signature keeps its transparency. Transparent areas show the viewer's page colour, which is white in Acrobat, Preview, Chrome and Edge, and may look grey in a dark-mode viewer.

**WEBP, GIF, BMP and AVIF are decoded by the browser and saved as JPEG at quality 0.9.** That is visually close to the original for photos and web graphics. Two consequences follow: an animated GIF or AVIF contributes only its first frame, and any transparent area is flattened to black, because JPEG has no alpha channel. If a transparent WEBP sticker or GIF needs a white background, open it in any image editor, export it as PNG and convert that instead.

**HEIC** is Apple's camera format. It needs a separate decoder, so it has its own page: [HEIC to PDF](/en/heic-to-pdf) covers the iPhone settings, decoding time and why Windows and upload portals reject the format.

| Format | How the engine handles it | Quality | Transparency | Typical source |
|---|---|---|---|---|
| JPG / JPEG | Embedded as-is | Identical to original | Not applicable | Phone photos, scans, receipts |
| PNG | Decoded, stored losslessly (Flate) | Identical to original | Kept; shows white in most viewers | Screenshots, charts, logos, signatures |
| WEBP | Decoded, re-saved as JPEG 0.9 | Near-identical | Becomes black | Images saved from websites |
| GIF | First frame, re-saved as JPEG 0.9 | Near-identical, still only | Becomes black | Old web graphics, memes |
| BMP | Re-saved as JPEG 0.9 | Near-identical, far smaller | Not applicable | Windows Paint, old scanners |
| AVIF | Re-saved as JPEG 0.9 (needs a browser that decodes AVIF) | Near-identical | Becomes black | Newer web downloads |
| HEIC / HEIF | Separate tool, decoded in the browser | Re-encoded as JPEG | Not applicable | iPhone and iPad photos |

The practical rule: keep photos as JPEG, keep screenshots and anything with sharp edges as PNG, and convert everything else to one of those two if the result has to be perfect.

## How Big Will the PDF Be, and What Page Size Does It Get?

A JPG or PNG converted here produces a PDF about the size of the original, because the image data is reused. The page dimensions follow the image: one pixel becomes one PDF point, and there are 72 points to an inch.

| Source image | Pixel size | Image size | PDF size | Page size in the PDF |
|---|---|---|---|---|
| 12 MP phone photo (iPhone 13, Pixel 7) | 4032×3024 | 3–5 MB | 3–5 MB | 56×42 in, zooms to fit |
| 48 MP phone photo, full resolution | 8064×6048 | 10–15 MB | 10–15 MB | 112×84 in |
| Flatbed scan of a Letter page at 300 DPI | 2550×3300 | 1–2.5 MB | 1–2.5 MB | 35×46 in |
| Receipt cropped in a scanner app | 1200×2400 | 300–800 KB | 300–800 KB | 17×33 in |
| Phone screenshot (PNG) | 1179×2556 | 0.5–2 MB | 0.5–2.5 MB | 16×35 in |
| Chart exported from Excel (PNG) | 1200×800 | 50–200 KB | 60–250 KB | 17×11 in landscape |

Two things follow from the page-size column.

**Printing.** A 56-inch page is valid, and every viewer zooms it to the window, but a printer has to be told what to do with it. Tick **Fit to page** or **Scale to fit** in the print dialog and the photo lands centred on Letter or A4 inside the printer's margins. If you need a PDF that is itself Letter-sized with white margins, print the image to PDF from Photos (Windows) or Preview (Mac) instead; that path re-renders the image, which is acceptable for a photo and slightly soft for small receipt text.

**Merging.** Pages keep their own sizes when merged, so photo pages show as larger thumbnails than Letter-sized pages beside them. Viewers handle it; it only looks odd in the thumbnail strip.

**File size.** The PDF is never smaller than the image. If the result is over an email cap (usually 20–25 MB) or a portal limit, run it through [Compress PDF](/en/compress-pdf) afterwards. That re-encodes the picture at a lower quality, so do it deliberately: a 4 MB receipt photo compresses to about 400–800 KB and stays legible.

> **Tip:** For a document rather than a photo, scanning at 300 DPI in greyscale gives a sharper, smaller file than a 12-megapixel colour photo of the same page, and the PDF prints at true size.

## How Do I Convert Images to PDF on iPhone, Android, Mac or Windows?

The page is the same everywhere; the file picker and the built-in alternatives differ.

**iPhone and iPad.** Open the tool in Safari, tap **Select File** and choose Photo Library or Files. iPhones shoot HEIC by default, so most camera photos belong in [HEIC to PDF](/en/heic-to-pdf); screenshots are PNG and JPEGs you received by message or email work here. The download lands in Files → Downloads. Apple's built-in route is Photos → Share → Print → pinch outward on the preview → Share → Save to Files, which works but takes six taps and scales the photo onto a Letter page.

**Android.** Chrome's picker opens Files or Photos; downloads go to the Downloads folder. Google Photos has no PDF export, but the share sheet's Print → Save as PDF does the same six-tap dance. Phones with 3 GB of RAM or less should keep single images under about 15–20 MB.

**Mac.** Preview opens any JPG or PNG, and File → Export as PDF produces a one-page PDF at the photo's size, the same result as this tool. If Preview is open, use it. The web tool is handy on a borrowed Mac, or when you want identical steps on every device.

**Windows.** Open the image in Photos, press Ctrl+P and choose Microsoft Print to PDF. That path scales the image onto Letter or A4 with margins and re-renders it, so fine text softens slightly. This tool keeps the original pixels; Print to PDF is the choice when a fixed paper size matters more.

**Chromebook.** Works as on any desktop Chrome; the PDF saves to Downloads or Google Drive depending on your settings.

## When Should You Not Use This Tool?

- **You need text you can search or copy.** A photo of a page stays a photo inside the PDF. This tool adds no text layer; use the original document's app to export a real PDF when you can.
- **You need Letter or A4 pages with margins inside the PDF.** The page matches the image. Print to PDF from your photo viewer if paper size matters more than pixel fidelity.
- **You have 40 images to combine on a phone.** One conversion plus one merge is fine for ten; for forty, do it on a laptop or use a scanner app that batches pages natively.
- **The image is a transparent WEBP or GIF and the background matters.** It will come out black. Export it as PNG first.
- **The photo is a CMYK JPEG from a print workflow.** Camera and phone JPEGs are RGB and embed fine; press-ready CMYK files may display with shifted colours in some viewers. Export an RGB copy first.
- **You want one page per image and a cover sheet.** Export the cover as its own PDF and add it first in Merge PDF; this tool cannot insert text pages.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The photo is sideways or upside down in the PDF | Run the PDF through Rotate PDF, or rotate and re-export the photo first | The PDF uses the stored pixel orientation and ignores the camera's EXIF rotation flag |
| The file picker will not select my image | Check the extension; use the tool for that format rather than renaming | This page is limited to .jpg/.jpeg; a HEIC or WEBP with a photo icon is still not a JPEG |
| A transparent sticker has a black background | Export it as PNG and convert that | WEBP and GIF go through a JPEG step, which has no alpha channel; PNG keeps transparency |
| The PDF is 12 MB and the portal rejects it | Open it in Compress PDF and choose a medium level | The converter never shrinks the image; compression is a separate step |
| Printing gives a tiny photo in one corner, or a cropped one | Choose Fit to page or Scale to fit in the print dialog | The page is the photo's pixel size in points, far larger than Letter paper |
| Convert File seems to do nothing on a phone | Wait a few seconds; try an image under 15–20 MB | Reading a large file into memory on a low-RAM phone takes time, and very large files can exceed the tab's limit |
| Merged PDF shows photo pages as much bigger thumbnails | Expected; or print to PDF at Letter size before merging | Pages keep their own sizes when merged |

## What Else Can I Do With the Images or the PDF?

- [Merge PDF](/en/merge-pdf) to combine several converted images into one document, in the order you drag them.
- [HEIC to PDF](/en/heic-to-pdf) for iPhone and iPad photos, which this page cannot decode.
- [Compress PDF](/en/compress-pdf) when the result exceeds an email or upload limit.
- [Rotate PDF](/en/rotate-pdf) to fix a sideways photo after conversion.
- [Organize PDF](/en/organize-pdf) to reorder or delete pages in the merged result.
- [PDF to JPG](/en/pdf-to-jpg) to go the other way and pull pages out of a PDF as images.

## The Bottom Line

Converting an image to PDF is a wrapping operation, and this tool treats it that way: a JPG or PNG goes into a one-page PDF unchanged, in about two seconds, in your browser, with no upload and no watermark; WEBP, GIF, BMP and AVIF are re-saved as high-quality JPEG along the way, and HEIC has its own page. Watch three things: orientation, fixed with Rotate PDF; file size, reduced with Compress PDF only when a portal demands it; and page size, handled by Fit to page when you print. For several photos, convert each one and use Merge PDF to put them in order.
