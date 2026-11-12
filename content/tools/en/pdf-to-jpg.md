---
title: "PDF to JPG Converter: Every Page at 144 DPI, Free, No Upload"
h1: "PDF to JPG Converter"
lead: "Render every page of a PDF as a JPG image and download them together in a ZIP. The rendering runs in your browser; the PDF never leaves your device."
description: "Convert a PDF to JPG for free in your browser: each page becomes a 144 DPI JPEG (1224×1584 px for Letter), zipped together. No upload, no account, no watermark."
answer: "Click Select File, choose the PDF and click Convert File. The tool draws each page at twice its nominal size, about 144 DPI, saves it as a JPEG at quality 0.92 and packs all the pages into one ZIP that downloads automatically. It is free with no watermark or account, and the PDF is rendered inside your browser tab rather than uploaded anywhere."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the rendering happens", "In your browser tab, using pdf.js to draw pages and JSZip to pack them. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. A 100-page, 50 MB PDF converts on a laptop in about a minute; on a phone, keep it under roughly 30 pages or split the PDF first."]
  - ["Pages", "All pages are converted, one JPG each. There is no page picker; use Extract PDF Pages first to convert only some."]
  - ["Input", ".pdf (application/pdf). Password-protected files must be unlocked first."]
  - ["Output", "A ZIP named <file>_images.zip containing <file>_page_1.jpg, _page_2.jpg and so on, rendered at 2× (144 DPI for a standard page), JPEG quality 0.92. The PDF is unchanged."]
  - ["Resolution", "Fixed at 2× the page's point size: a Letter page becomes 1224×1584 px, A4 becomes 1190×1684 px."]
  - ["Works offline?", "Yes, once the page has loaded"]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to JPG for free?"
    a: "Open the PDF to JPG tool, click Select File, pick the PDF and click Convert File. Every page is rendered to a JPEG and the set downloads as one ZIP file within a few seconds for a short document. There is no charge, no watermark and no account, and the PDF is processed in your browser."
  - q: "What resolution are the JPGs?"
    a: "Each page is drawn at twice its nominal size, which works out to 144 DPI for a standard page: 1224×1584 pixels for Letter and 1190×1684 for A4. That is sharp on any screen, fine for a slide or social post, and adequate for printing at the original size. For 300 DPI print work, a desktop tool is the better choice."
  - q: "Can I convert just one page?"
    a: "The tool converts every page, so for one page use Extract PDF Pages first to pull that page into its own PDF, then convert it here. The ZIP will then hold a single JPG. Alternatively, convert the whole file and keep only the page you need from the ZIP."
  - q: "Why do I get a ZIP instead of an image?"
    a: "Because a PDF usually has several pages and a browser can only trigger one download per action, the tool packs all the JPGs into one ZIP built with JSZip. Even a one-page PDF arrives as a ZIP with one file inside. Double-click it on Windows or macOS to open it; on iPhone, tap it in Files."
  - q: "Should I choose PDF to JPG or PDF to PNG?"
    a: "JPG for pages with photos, scans or anything headed to email, social media or a website, because the files are five to ten times smaller. PNG for slides, diagrams, screenshots and pages where you need text edges perfectly crisp or will edit the image later. Both tools render at the same 144 DPI."
  - q: "Is the text in the JPG selectable?"
    a: "No. A JPG is a picture of the page, so text becomes pixels and cannot be selected, searched or copied. If you need editable text, use PDF to Word instead. Converting to JPG is the right move when you want the page to look identical everywhere and not be edited."
  - q: "Is my PDF uploaded anywhere?"
    a: "No. pdf.js, the same engine Firefox uses to display PDFs, runs in your browser tab, draws each page onto an invisible canvas, and the canvas is saved as a JPEG in memory. You can watch the Network tab in your browser's developer tools during a conversion and see that no request carries the file."
  - q: "How big will the JPGs be?"
    a: "At 144 DPI and quality 0.92, a text-only Letter page is about 150–400 KB, a page with charts 300–700 KB, and a scanned or photo page 600 KB–1.5 MB. A 20-page text report gives a ZIP of roughly 4–8 MB. The ZIP itself adds almost nothing because JPEGs do not compress further."
---
## How Do I Convert a PDF to JPG for Free?

You want pages as pictures: to post a report page on LinkedIn, drop a form into a PowerPoint, send one page to someone who cannot open PDFs, or upload a single slip to a portal that wants an image. The tool renders every page and hands you a ZIP. Four steps.

### Step 1: Select the PDF

Click **Select File** or drag the PDF onto the drop zone. The tool reads the file and shows the page count. If the PDF asks for a password to open, stop here: the renderer cannot draw encrypted pages. Remove the password in the app that created the file, or re-save it from a desktop viewer, then come back.

### Step 2: Decide whether you need every page

There is no page picker: all pages are converted. For a 300-page manual you only need one page from, run the PDF through [Extract PDF Pages](/en/extract-pdf-pages) first and convert the one-page result. For 5 to 50 pages, convert everything and delete the extras from the ZIP; it is faster.

This is the step people skip, then wait two minutes for 200 pages they did not want.

### Step 3: Click Convert File

Press **Convert File**. pdf.js opens the document, draws each page onto a canvas at twice its point size, and saves the canvas as a JPEG at quality 0.92. A text page takes 0.2–0.5 seconds on a laptop; a page with a full-bleed photo about a second. The progress indicator runs the whole time.

### Step 4: Open the ZIP

The download is one file, `<name>_images.zip`, containing `<name>_page_1.jpg`, `<name>_page_2.jpg` and so on, numbered in page order. Windows and macOS open ZIPs with a double-click; on iPhone, tap it in Files → Downloads and iOS unpacks it into a folder. Press **Process Another** for the next PDF.

> **Tip:** The JPG names sort correctly only up to page 9 in some file managers (page_10 lands before page_2). Sort by date modified instead, or rename in bulk if the order matters for an upload.

## What Happens to My PDF When I Convert It?

The rendering engine is pdf.js, the open-source library Mozilla built to display PDFs inside Firefox. This page loads it into your tab. When you choose a file, the browser's File API reads the PDF into memory; pdf.js parses it and, for each page, draws the content onto an off-screen HTML canvas the way a viewer would draw it on screen. The canvas is exported to JPEG, the JPEG is added to a ZIP assembled by JSZip in memory, and the finished ZIP is offered as a download through a Blob.

Every step is local. To see for yourself, open your browser's developer tools, pick the Network tab, and convert. The page's scripts and an anonymous page-view ping load; no request carries the PDF or the images.

That matters for what people turn into images: a notice of assessment page to prove income to a landlord, one page of a lease, a prescription to send to a pharmacy that only takes photos, a signed consent form for a school. The document is drawn on your device and the pictures are built there; close the tab and nothing remains.

## What Resolution and File Size Will the JPGs Have?

The tool renders at a fixed scale of 2×, meaning each PDF point becomes two pixels. PDF pages are measured at 72 points per inch, so 2× is 144 pixels per inch. There is no DPI selector; the value was chosen as the point where text is sharp on every screen, including a phone held close, while keeping a page under a megabyte.

| Page | Points | JPG pixels at 2× (144 DPI) | Text page | Chart or slide page | Scanned or photo page |
|---|---|---|---|---|---|
| Letter (8.5×11 in) | 612×792 | 1224×1584 | 150–400 KB | 300–700 KB | 600 KB–1.5 MB |
| A4 | 595×842 | 1190×1684 | 150–400 KB | 300–700 KB | 600 KB–1.5 MB |
| Legal (8.5×14 in) | 612×1008 | 1224×2016 | 200–500 KB | 400–900 KB | 800 KB–2 MB |
| 16:9 slide (13.33×7.5 in) | 960×540 | 1920×1080 | 100–300 KB | 250–600 KB | 500 KB–1.2 MB |
| Tabloid (11×17 in) | 792×1224 | 1584×2448 | 300–700 KB | 600 KB–1.2 MB | 1.2–2.5 MB |

How 144 DPI compares with the usual alternatives:

- **72 DPI (1×)** is what a viewer draws at 100% zoom on an older monitor. Text looks soft on a phone and pixelated when zoomed. Too low for anything but a thumbnail.
- **144 DPI (2×, this tool)** matches a Retina or high-density phone screen exactly. Social media posts, slides, Word and PowerPoint insertions, email previews and most portal uploads are served well. Printed at original size it is acceptable; small 8-point footnotes are legible but not crisp.
- **300 DPI** is the print standard. A Letter page becomes 2550×3300 pixels and 1–4 MB as a JPEG. If you are sending pages to a print shop, render from a desktop app at 300 DPI instead.

JPEG quality 0.92 is near the top of the scale: compression artefacts are invisible on photos and barely detectable on sharp black text at 200% zoom. If you need pixel-perfect text or transparency, use [PDF to PNG](/en/pdf-to-png), which renders the same pages losslessly at the same size; the files are two to five times larger.

A whole-document estimate: a 20-page text report gives a ZIP of 4–8 MB; a 20-page scanned contract 12–30 MB; a 40-slide deck 10–25 MB.

> **Tip:** Rendering flattens everything. Form fields, comments, stamps and signatures are baked into the image exactly as they appear on screen, which makes PDF to JPG a quick way to produce an uneditable copy of a filled form.

## How Do I Convert a PDF to JPG on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the tool in Safari, tap **Select File** and choose the PDF from Files. The ZIP saves to Files → Downloads; tap it once and iOS extracts a folder of JPGs you can save to Photos. iOS has no built-in PDF-to-image export, but a screenshot of a page in Books or Files is an acceptable one-off at screen resolution. Keep PDFs under about 30 pages on a phone; each rendered page briefly needs 6–8 MB of canvas memory.

**Android.** Chrome's picker opens Files; the ZIP goes to Downloads and the Files app extracts it. Phones with 3–4 GB of RAM handle 30–50 pages comfortably.

**Mac.** Preview can export a PDF as JPEG with File → Export → Format: JPEG, but one page at a time; it exports only the page currently shown. For a single page, Preview is quickest and lets you set the DPI. For a whole document, this tool is far faster.

**Windows.** There is no built-in PDF-to-JPG export. Windows Snipping Tool captures a page at screen resolution, which is fine for a quick share. For a full document at consistent 144 DPI, use this page.

**Chromebook.** Works as on desktop Chrome. The Files app opens ZIPs natively.

## When Should You Not Use This Tool?

- **You need editable text.** A JPG is pixels. Use [PDF to Word](/en/pdf-to-word) to get text you can change, or copy text straight out of the PDF.
- **You need 300 DPI for commercial printing.** The fixed 144 DPI is for screens. Render from Acrobat, Affinity or a command-line tool for press work.
- **You want to extract the original embedded photos** at their native resolution. This tool draws the page, not the photo inside it; a 20-megapixel photo placed on a Letter page comes out at 1224×1584. Desktop tools can pull the original image object.
- **The PDF is encrypted.** Remove the open password in a desktop viewer first; the renderer cannot draw pages it cannot read.
- **You have 500 pages on a phone.** Memory and time both become a problem. Use a laptop, or split the file with [Split PDF](/en/split-pdf) and convert in sections.
- **You need transparency or lossless detail.** JPEG has neither. Use [PDF to PNG](/en/pdf-to-png).

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The download is a ZIP, not a picture | Open the ZIP; the JPGs are inside, one per page | A browser can trigger one download per click, so pages are bundled |
| Text in the JPG looks soft when printed | Print at original size, not enlarged; for print-quality output, render at 300 DPI in a desktop app | 144 DPI is tuned for screens |
| Convert File fails on a protected PDF | Remove the open password in a desktop viewer, then convert | pdf.js cannot render encrypted pages without the password |
| Pages are blank or missing content | Check whether the PDF uses XFA forms; print it to a standard PDF first | XFA form layers are not drawn by the renderer; see the XFA guide |
| Safari reloads the tab on a long PDF | Split the PDF into 20–30 page parts and convert each | iOS limits tab memory, and each page needs a few MB of canvas while rendering |
| Pages sort in the wrong order on my computer | Sort by date modified or rename page_1 to page_01 | Alphabetical sorting puts page_10 before page_2 |
| Colours look slightly flatter than in the PDF | Normal for CMYK-heavy print PDFs | Rendering to canvas converts colours to screen RGB |

## What Else Can I Do With a PDF or Its Pages?

- [PDF to PNG](/en/pdf-to-png) for lossless page images with crisp text, better for slides and diagrams.
- [Extract PDF Pages](/en/extract-pdf-pages) to pull out only the pages you want before converting.
- [Split PDF](/en/split-pdf) to break a long file into parts a phone can handle.
- [JPG to PDF](/en/jpg-to-pdf) to go the other way and wrap images back into a PDF.
- [Compress PDF](/en/compress-pdf) when you want a smaller PDF rather than images.

## The Bottom Line

PDF to JPG is a rendering job: draw each page, save the picture. This tool does it in your browser with pdf.js at 144 DPI and JPEG quality 0.92, packs every page into a ZIP and never uploads the file. For a 20-page report expect 4–8 MB, 1224×1584 pixels per page, in under 20 seconds on a laptop. Reach for PDF to PNG when text edges or transparency matter, for Extract PDF Pages when you only want one page, and for a desktop app only when a printer asks for 300 DPI.
