---
title: "PDF to PNG Converter: Lossless Pages at 144 DPI, Free"
h1: "PDF to PNG Converter"
lead: "Render every page of a PDF as a lossless PNG and download the set as a ZIP. The pages are drawn in your browser; the file never leaves your device."
description: "Convert a PDF to PNG for free in your browser: each page is rendered losslessly at 144 DPI (1224×1584 px for Letter) and zipped. Crisp text, no upload, no account."
answer: "Click Select File, choose the PDF and click Convert File. Each page is drawn at twice its nominal size, about 144 DPI, and saved as a lossless PNG, so text edges, thin lines and flat colours stay perfectly crisp. All pages download together in one ZIP. It is free, has no watermark or account, and the rendering happens inside your browser tab; nothing is uploaded."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the rendering happens", "In your browser tab, using pdf.js to draw pages and JSZip to bundle them. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. A 60-page slide deck converts on a laptop in under a minute; on a phone keep it under about 20 pages, because PNGs are larger than JPGs and the ZIP is held in memory."]
  - ["Pages", "All pages are converted, one PNG each. Use Extract PDF Pages first to convert a subset."]
  - ["Input", ".pdf (application/pdf). Encrypted files must be unlocked first."]
  - ["Output", "A ZIP named <file>_images.zip with <file>_page_1.png, _page_2.png and so on, rendered at 2× (144 DPI for a standard page), lossless, white background. The PDF is unchanged."]
  - ["Resolution", "Fixed at 2× the page's point size: Letter becomes 1224×1584 px, A4 1190×1684 px, a 16:9 slide 1920×1080 px."]
  - ["Works offline?", "Yes, once the page has loaded"]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to PNG for free?"
    a: "Open the PDF to PNG tool, click Select File, choose the PDF and click Convert File. Every page is rendered to a lossless PNG and the set downloads as a single ZIP. There is no charge, no watermark and no account, and the rendering runs in your browser rather than on a server."
  - q: "Is PDF to PNG lossless?"
    a: "The PNG encoding is lossless: whatever is drawn on the canvas is stored pixel for pixel, with no JPEG-style artefacts around text or lines. The rendering itself is a rasterization at 144 DPI, so vector shapes and fonts are sampled into pixels at that resolution. Zoom past 100% and you see pixels, not blur."
  - q: "Will the PNG have a transparent background?"
    a: "No. The renderer paints the page white before drawing, as a PDF viewer does, so every PNG has an opaque white background even where the PDF page itself had no fill. If you need a transparent cut-out of a logo or diagram, remove the white in an image editor afterwards, or export the graphic from its source app."
  - q: "What resolution are the PNGs?"
    a: "Twice the page's point dimensions, which is 144 pixels per inch: 1224×1584 for Letter, 1190×1684 for A4, 1920×1080 for a 16:9 slide. That is exactly a high-density phone or Retina screen, so slides and diagrams look native when inserted into documents or posted online."
  - q: "PDF to PNG or PDF to JPG, which should I use?"
    a: "PNG for slides, diagrams, flowcharts, tables, screenshots and any page where crisp text and clean lines matter or you plan to edit the image. JPG for scanned pages and photo-heavy pages, where PNG files balloon to 3–6 MB per page for no visible gain. Both render at the same 144 DPI."
  - q: "How large will the PNG files be?"
    a: "A text-only Letter page is about 300 KB–1 MB, a slide with charts 400 KB–2 MB, and a scanned or photographic page 2–6 MB. A 30-slide deck gives a ZIP around 15–40 MB. If that is too big, PDF to JPG produces the same pages at a fifth of the size."
  - q: "Can I convert only one page?"
    a: "Run the PDF through Extract PDF Pages first to isolate the page, then convert the one-page result here; the ZIP will hold one PNG. For a handful of pages out of fifty, it is usually quicker to convert everything and keep what you need."
  - q: "Is the PDF uploaded to a server?"
    a: "No. pdf.js, the renderer inside Firefox, runs in your browser tab, draws each page onto an off-screen canvas and exports it as PNG in memory; JSZip then builds the ZIP in memory. Open the Network tab in your browser's developer tools during a conversion and you will see no request carrying the file."
---
## How Do I Convert a PDF to PNG for Free?

PNG is the format for pages that are mostly lines, text and flat colour: slide decks, architectural diagrams, flowcharts, tables, wireframes, forms. It stores those without the smearing JPEG introduces, and it is what Word, PowerPoint, Google Docs, Notion and every web CMS expect when you paste an image. Four steps.

### Step 1: Select the PDF

Click **Select File** or drag the PDF onto the drop zone. The tool reads the file and shows the page count. A PDF that asks for a password to open has to have that password removed first, in the app that made it or a desktop viewer; the renderer cannot draw what it cannot open.

### Step 2: Trim the document if you only need some pages

Every page is converted; there is no checkbox list. For three slides out of sixty, pull them out with [Extract PDF Pages](/en/extract-pdf-pages) and convert that short PDF. PNGs are large, so converting sixty pages you do not need means a 40 MB ZIP and a minute of waiting for nothing.

### Step 3: Click Convert File

Press **Convert File**. pdf.js draws each page onto a canvas at twice its point size, with a white background, and the canvas is exported as a PNG. Rendering is fast, 0.2–0.5 seconds a page on a laptop; PNG encoding adds a little more than JPEG does because every pixel is kept. A 20-slide deck finishes in 10–20 seconds.

### Step 4: Download the ZIP

One file arrives, `<name>_images.zip`, containing `<name>_page_1.png`, `<name>_page_2.png` and so on in page order. Double-click to open it on Windows or macOS; on iPhone, tap it in Files → Downloads and iOS unpacks it. Press **Process Another** for another PDF.

> **Tip:** When you paste a converted slide into PowerPoint or Google Slides, set its width to the slide width and it lands pixel-perfect: a 16:9 slide rendered here is 1920×1080, the same aspect ratio as the slide you are pasting into.

## What Happens to My PDF When I Convert It?

The page uses pdf.js, Mozilla's open-source PDF renderer, loaded into your tab. Your file is read into memory with the browser's File API. For each page, pdf.js parses the content stream and draws it onto an HTML canvas that is never shown on screen, exactly the way Firefox would draw it in a viewer. The canvas is exported to PNG with the browser's own encoder, each PNG is added to a ZIP that JSZip assembles in memory, and the finished ZIP is handed to the browser as a Blob to download.

Nothing in that chain talks to a server. Open developer tools, choose the Network tab and convert a file: the page's scripts and an anonymous page-view ping load, and no request carries the PDF or any page image.

Diagrams and slides are often the least public documents a person has: a pitch deck before funding, architectural drawings for a permit application, a flowchart of an internal process, a lab's figure before publication. They are rendered on your device, held in your tab, and gone when you close it.

## Will the Text Stay Crisp, and Will the Background Be Transparent?

**Crisp: yes.** PNG stores every pixel exactly as rendered. JPEG works by dividing the image into 8×8 blocks and discarding fine detail inside each one, which is why black text on white develops a faint grey halo and thin lines turn soft. None of that happens here: a one-pixel rule stays one pixel, a 9-point label stays legible, and a flat blue bar stays one blue.

**Transparent: no.** The renderer fills the page with white before drawing, exactly as a PDF viewer does. The PNG is opaque. A PDF page has no concept of a transparent background to preserve, so a "transparent PDF to PNG" is really a request to cut a graphic out of a page, which is an image-editing step after conversion.

What you trade for crispness is size, and the gap depends entirely on what is on the page:

| Page content | Pixels at 144 DPI | PNG size | Same page as JPG (quality 0.92) | Better choice |
|---|---|---|---|---|
| Text-only Letter page | 1224×1584 | 300 KB–1 MB | 150–400 KB | PNG if text must be perfect; JPG for bulk |
| Slide with chart and title (16:9) | 1920×1080 | 400 KB–2 MB | 250–600 KB | PNG |
| Flowchart or wiring diagram | 1224×1584 | 200 KB–1.2 MB | 300–700 KB | PNG, often smaller too |
| Table of numbers | 1224×1584 | 250 KB–900 KB | 300–600 KB | PNG |
| Scanned letter | 1224×1584 | 2–4 MB | 400–900 KB | JPG |
| Full-page photo | 1224×1584 | 3–6 MB | 600 KB–1.5 MB | JPG |

Flat colour and sharp edges compress extremely well in PNG, sometimes better than JPEG. Noise does not: a scan carries paper texture in every pixel, and PNG dutifully keeps all of it. That is the whole decision in one line: PNG for things that were drawn, JPG for things that were photographed. The same pages at the same 144 DPI are available from [PDF to JPG](/en/pdf-to-jpg).

On resolution, 2× was chosen because it is the pixel density of modern screens. A page rendered at 144 DPI inserted into a document at its physical size looks native on a Retina MacBook, an iPad and a 4K monitor. For print, 144 DPI is acceptable at original size and visibly soft when enlarged; press work wants 300 DPI from a desktop tool.

> **Tip:** Rendering bakes in everything visible, including filled form fields, stamps and signatures. If you need a form to be uneditable but still a PDF, run the PNGs back through JPG to PDF or use a flatten step; if an image is fine, you are already done.

## How Do I Convert a PDF to PNG on Mac, Windows, iPhone or Android?

**Mac.** Preview can export the current page as PNG with File → Export → Format: PNG and lets you choose the resolution, but only one page at a time. For a single diagram at 300 DPI, Preview is the better tool. For every slide in a deck, this page is faster by a wide margin.

**Windows.** There is no built-in PDF-to-PNG export. Snipping Tool captures a page at screen resolution, usually 96 DPI and cropped by hand; fine for a quick paste into Teams, not for a document. This tool renders every page at a consistent 144 DPI with exact edges.

**iPhone and iPad.** Open the tool in Safari, tap **Select File** and pick the PDF from Files. The ZIP saves to Files → Downloads; tap it and iOS extracts a folder of PNGs that you can save to Photos or drag into Keynote. Keep PDFs under about 20 pages on a phone: each PNG is held in memory until the ZIP is built, and 20 slide PNGs are 10–30 MB.

**Android.** Chrome's picker opens Files; the ZIP lands in Downloads and the Files app extracts it. Phones with 4 GB of RAM or more handle 30–40 pages.

**Chromebook.** Works as on desktop Chrome. Files opens ZIPs natively, and the PNGs paste straight into Google Slides.

## When Should You Not Use This Tool?

- **The PDF is scanned or photographic.** PNG will give you 2–6 MB per page with no visible benefit. Use [PDF to JPG](/en/pdf-to-jpg).
- **You need a transparent background.** The output is opaque white. Export the graphic from the app that made it, or cut it out afterwards.
- **You need vector output.** PNG is pixels. If a designer wants the logo or chart as a scalable shape, send the PDF itself; most design tools open PDFs as vectors.
- **You need editable text or tables.** Use [PDF to Word](/en/pdf-to-word) or [PDF to Excel](/en/pdf-to-excel) instead; a PNG of a table is a picture of numbers.
- **The file is encrypted.** Remove the open password in a desktop viewer first.
- **You have 200 pages on a phone.** The ZIP is assembled in memory and PNGs are large. Use a laptop, or split the document with [Split PDF](/en/split-pdf) and convert 20 pages at a time.
- **You need 300 DPI for print.** Render in Acrobat, Affinity or a command-line tool with a DPI setting.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The background is white, I expected transparent | Remove the white in an image editor, or export from the source app | The renderer paints the page white before drawing, as viewers do |
| The ZIP is 60 MB for a 15-page file | The pages are scans or photos; use PDF to JPG instead | PNG keeps every pixel of paper texture and photo noise |
| Convert File does nothing on a protected PDF | Remove the open password in a desktop viewer, then convert | pdf.js cannot render encrypted pages |
| Fine lines in a diagram look slightly thicker or thinner than in the PDF | Expected at 144 DPI; for print, render at 300 DPI in a desktop app | Hairlines are snapped to whole pixels when rasterized |
| Pages are blank or a form is empty | Check for XFA forms; print the PDF to a standard PDF first | XFA form layers are not drawn by the renderer |
| Safari on iPhone reloads during conversion | Split the PDF into parts of 15–20 pages | iOS limits tab memory and every PNG is held until the ZIP is finished |
| page_10.png sorts before page_2.png | Sort by date modified, or rename with two-digit numbers | Alphabetical sorting does not understand numbers |

## What Else Can I Do With a PDF or Its Pages?

- [PDF to JPG](/en/pdf-to-jpg) for the same pages as smaller JPEGs, the right call for scans and photos.
- [Extract PDF Pages](/en/extract-pdf-pages) to convert only the pages you want.
- [Split PDF](/en/split-pdf) to cut a long deck into parts a phone can handle.
- [PDF to PPT](/en/pdf-to-ppt) if the goal is to get slides back into PowerPoint rather than as images.
- [JPG to PDF](/en/jpg-to-pdf) to wrap images, including these PNGs, back into a PDF.

## The Bottom Line

PDF to PNG is for pages that were drawn rather than photographed: slides, diagrams, tables, forms. This tool renders each one losslessly at 144 DPI in your browser with pdf.js, 1224×1584 pixels for a Letter page or 1920×1080 for a slide, and bundles the set into a ZIP without uploading anything. The background is white, not transparent, and files run 300 KB–2 MB a page for drawn content. For scans and photos switch to PDF to JPG; for a single page at 300 DPI, Preview on a Mac is the quicker route.
