---
title: "Compress PDF to 2 MB Free: 40–90% Smaller, No Upload (2026)"
h1: "Compress a PDF to Under 2 MB"
lead: "Pick a quality level, click Compress PDF and download a smaller file. Scans and photo PDFs shrink 40–90%; everything runs in your browser."
description: "Compress a PDF to under 2 MB for free in your browser. Three quality levels; scans shrink 40–90%, text PDFs 5–15%. No upload, no account, no watermark."
answer: "Add your PDF, choose Good, Balanced or Extreme, click Compress PDF and download the result. Good keeps text selectable and trims 5–15%; Balanced and Extreme re-render each page as a JPEG and cut scanned or photo-heavy files by 40–90%, which is what gets a 10 MB scan under 2 MB. It is free, nothing is uploaded, and the tool offers quality levels rather than a target size, so check the result and try the next level if it is still too big."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the compression happens", "In your browser tab. pdf-lib rewrites the file; in Balanced and Extreme, pdf.js renders each page to a canvas first. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. 100–150 MB compresses on a laptop with 8 GB of RAM; on a phone keep it under about 30–40 MB because every page is rendered to an image in memory."]
  - ["Maximum pages", "No set maximum. Balanced and Extreme take roughly 0.1–0.3 seconds per page on a laptop, so a 200-page scan takes 30–60 seconds."]
  - ["Quality levels", "Good (lossless rewrite, text stays selectable), Balanced (pages re-rendered at the level labelled 150 DPI, JPEG quality 0.7), Extreme (96 DPI, JPEG quality 0.4). There is no target-size input."]
  - ["Input", ".pdf only. Password-protected files must be unlocked first with Unlock PDF."]
  - ["Output", "One PDF named compressed_<your file>.pdf, same page sizes and count. In Balanced and Extreme the text is no longer selectable. Your original is not changed."]
  - ["What stays on your device", "The source PDF, the compressed PDF and the level you chose. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I compress a PDF to under 2 MB for free?"
    a: "Add the file, choose Balanced, click Compress PDF and look at the size of the download. A 5–15 MB scanned document usually lands between 1 and 2 MB. If it is still over, run the original again with Extreme, which roughly halves the Balanced result. Text-only PDFs are a different case: they are already small, and Good is the right level."
  - q: "Will compression make my PDF blurry?"
    a: "Good does not touch the images or text at all, so there is no visible change. Balanced re-renders pages at the level the tool labels 150 DPI with JPEG quality 0.7, which reads cleanly on screen and prints acceptably at letter size. Extreme drops to 96 DPI and quality 0.4; text is still readable but small print and fine lines soften, so use it for files that only need to be viewed on a screen."
  - q: "Why did my text PDF barely shrink, or even get bigger?"
    a: "Text and vector graphics are already compact, so Good can only remove a few percent of overhead. Balanced and Extreme convert each page into a JPEG photograph of itself, and a JPEG of a full page of text is often larger than the text was. For text PDFs, use Good, and if the file is still too big, the weight is probably in a few embedded images or an unneeded appendix."
  - q: "Can I still select and search text after compressing?"
    a: "Only with Good. Balanced and Extreme flatten every page into an image, so the text becomes pixels and cannot be selected, searched or read aloud by a screen reader. If you need a small file that stays searchable, compress with Good, then remove pages or split the document rather than rasterizing it."
  - q: "Does compressing remove metadata from my PDF?"
    a: "Good clears the title, author, subject, keywords, creator and producer fields as part of the rewrite. Balanced and Extreme build a brand-new document from page images, so none of the original metadata, bookmarks, links or form fields carry over. Hidden layers and comments are also gone, which is sometimes exactly what you want before sending a file out."
  - q: "Can I compress a PDF several times to make it smaller?"
    a: "You can, but a second Balanced or Extreme pass re-encodes JPEGs that are already JPEGs, so quality drops further while the size barely moves. Compress the original once at the level you need. If Extreme on the original is still too large, the fix is fewer pages, not another pass."
  - q: "Is it safe to compress tax or medical documents here?"
    a: "The file is read into your browser's memory, rewritten or re-rendered there, and offered back as a download from the same tab. No network request carries it, which you can confirm in your browser's developer tools under Network while compressing. Close the tab and the memory is released."
  - q: "What is the maximum PDF size I can compress?"
    a: "There is no server limit because there is no server. On a laptop, 100–150 MB files compress without trouble; the ceiling is your device's memory, since Balanced and Extreme hold a rendered image of each page while they work. On a phone, 30–40 MB is a safer limit, or split the file first and compress the halves."
---
## How Do I Compress a PDF to Under 2 MB for Free?

Most email systems cap attachments at 20–25 MB, but the limits that actually bite are smaller: 2 MB on many job-application portals, 4 MB per file on IRCC's online applications, 1 MB for some insurance and benefits uploads, 500 KB for a few scholarship forms. This tool gets a scanned or photo-heavy PDF under those limits in about five steps.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The tool shows the file name and its current size, which is the number you are trying to beat.

### Step 2: Choose a level

Three options appear under **Select Compression Level**:

- **Good** rewrites the file losslessly: it packs the internal objects into compressed streams and clears the metadata fields. Text stays selectable. Expect 5–15% off most files, sometimes more on PDFs exported by older software.
- **Balanced** renders every page to an image at the level the tool labels 150 DPI and stores it as a JPEG at quality 0.7. This is the level that turns a 10 MB scan into 1–2 MB. Text becomes part of the image and is no longer selectable.
- **Extreme** does the same at 96 DPI and JPEG quality 0.4. Roughly half the size of Balanced again, with visibly softer small print.

This is the decision people get wrong. If your file is a Word export or a bank statement with real text, Balanced and Extreme can make it larger, not smaller, because a JPEG of a page of text is heavier than the text itself. Start with Good for text documents and with Balanced for anything scanned or photographed.

### Step 3: Click Compress PDF

Good finishes in a second or two regardless of page count. Balanced and Extreme render page by page, about 0.1–0.3 seconds each on a 2022 laptop, so a 40-page scan takes 5–12 seconds and a 200-page one takes 30–60 seconds. The page yields between pages, so the tab does not freeze.

### Step 4: Check the size

The download is named `compressed_<your file>.pdf`. Compare its size to the limit you are aiming for. If it is still over, go back to the original file (not the compressed one) and try the next level down.

### Step 5: Open it before you send it

Scroll to a page with small print or a signature. If Extreme has made something unreadable, use Balanced and remove pages instead; see the next section.

> **Tip:** Compress the original every time. Running Balanced on a file that has already been through Balanced re-encodes JPEGs that are already JPEGs: quality drops, size barely changes.

## What Happens to My File When I Compress It?

Two different things, depending on the level. With Good, pdf-lib loads the PDF into your browser's memory, clears the document information fields and saves it again with object streams enabled, which is a lossless re-packing of the file's internal structure. With Balanced or Extreme, pdf.js, the same engine Firefox uses to display PDFs, draws each page onto an invisible canvas in the tab; the canvas is encoded as a JPEG at the chosen quality, and pdf-lib builds a new document with one JPEG per page at the original page dimensions. The result is handed to you as a download from the same tab.

In neither case does the file leave your device. There is no upload step because there is no server doing the work. You can check this yourself: open your browser's developer tools, choose Network, and compress a file. You will see the page's scripts and the PDF libraries load, one anonymous page-view request, and nothing else while the compression runs.

That is the point for the documents Canadians compress most: scanned T4s and T2202s for a tax return, proof-of-funds statements and passport scans for an IRCC application, a 30 MB photographed lease for a landlord-tenant board filing, or a specialist's referral package with imaging attached. A file that is never uploaded cannot be stored, scanned or leaked by anyone else, so there is nothing for a privacy law to govern.

## How Do I Get a PDF Under 2 MB (or 1 MB, or 500 KB)?

The tool offers quality levels, not a target-size box, so the way to hit a specific limit is to know roughly what each level does to each kind of file and pick accordingly. The table below is what to expect; your file will vary with page count and how dense the scans are.

| Document type | Starting size | Good | Balanced | Extreme |
|---|---|---|---|---|
| Word or Google Docs export, 10 pages of text | 300 KB | 250–290 KB | 1–2 MB (larger) | 500 KB–1 MB (larger) |
| Bank statement PDF, 6 pages, real text | 800 KB | 650–760 KB | 1–1.5 MB (larger) | 400–700 KB |
| Phone-scanned letter, 4 pages | 8 MB | 7–7.5 MB | 600 KB–1.2 MB | 300–600 KB |
| Office-scanner PDF at 300 dpi, 20 pages | 25 MB | 22–24 MB | 2.5–4 MB | 1.2–2 MB |
| Slide deck with photos, 40 slides | 15 MB | 12–14 MB | 2–3.5 MB | 1–1.8 MB |
| Photo-heavy real-estate listing, 12 pages | 40 MB | 35–38 MB | 2–3 MB | 1–1.5 MB |

Reading the table for the three common targets:

**Under 2 MB.** Balanced gets any scan of up to about 10–15 pages there. A longer scan needs Extreme, or Balanced plus fewer pages.

**Under 1 MB.** Extreme on scans of up to about 10 pages. For text PDFs, Good plus removing pages is the only route that keeps them readable.

**Under 500 KB.** Realistic for a one- to three-page scan on Extreme, or a short text document on Good. Beyond that you are trading legibility for size.

When the smallest level still will not fit, change the input rather than compressing again:

1. **Remove pages you do not need.** Cover sheets, blank backs of double-sided scans and duplicate copies are the usual culprits. [Delete PDF Pages](/en/delete-pdf-pages) takes a few seconds and often saves more than a compression level does.
2. **Split the document.** A portal that allows 2 MB per file usually allows several files. [Split PDF](/en/split-pdf) or [Extract PDF Pages](/en/extract-pdf-pages) turns one 6 MB file into three uploads that each pass.
3. **Rescan at a lower setting.** A scanner set to 600 dpi colour produces 4–6 MB per page; 200 dpi greyscale produces 200–400 KB per page and is still perfectly legible for forms. If you still have the paper, this beats any compressor.
4. **Photograph less.** Phone scans at full resolution are 3–5 MB each. Most scanning apps have a "small" or "medium" output option that gets a page to under 1 MB before it becomes a PDF.

## How Do I Compress a PDF on iPhone, Android, Mac or Windows?

The tool is the same page on every device, but the built-in alternatives differ a great deal.

**iPhone and iPad.** Open the page in Safari, tap the drop zone and choose the file from Files. Balanced on a 20-page scan takes 15–40 seconds on a recent iPhone. Keep files under about 30–40 MB; iOS reloads a tab that uses too much memory, and each rendered page is held while the tool works. The download appears in Files → Downloads. iOS itself has no compress option, though the Notes and Files scanners both let you pick a smaller output size at scan time.

**Android.** Chrome handles the picker and saves to Downloads. Phones with 3–4 GB of RAM should stay under 30 MB per file or split first. Google Drive's scanner offers a quality slider when you scan, which is the better place to save space.

**Mac.** Preview can export with the Reduce File Size Quartz filter (File → Export → Quartz Filter). It is already installed and free; its weakness is that it uses one fixed, fairly aggressive setting, which can turn a clean 300-dpi scan to mush. This page gives you two lossy levels and a lossless one, and lets you compare.

**Windows.** Windows has no built-in PDF compressor. Printing to Microsoft Print to PDF re-renders the document but rarely reduces size meaningfully. A tool like this one or a desktop app is required.

**Chromebook.** Works as on desktop Chrome. Files save to Downloads or Google Drive depending on your setting.

## When Should You Not Use This Tool?

- **You need the text to stay selectable or searchable and Good is not enough.** Balanced and Extreme rasterize the pages. Use Good, then remove pages or split; or, if the weight is in a few large images, a desktop editor that can downsample individual images without flattening text is the right tool.
- **Accessibility matters.** A rasterized PDF has no text layer, so screen readers cannot read it. Keep an uncompressed or Good-level copy for anyone who needs it.
- **Fillable forms, signatures and links.** Balanced and Extreme build a new document from page images, so form fields, digital signatures, bookmarks and hyperlinks are dropped. Compress with Good, or compress before you sign and fill in.
- **The PDF asks for a password.** It cannot be read. Remove the password with Unlock PDF first.
- **Print-quality output.** 150 DPI is fine for a letter-size page read at arm's length; it is not fine for a poster, a plan or anything that will be enlarged. Keep the original for printing.
- **A 150 MB file on a phone.** Rendering every page to an image needs memory the phone does not have. Use a laptop, or split the file first.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The file got bigger | Use Good instead of Balanced or Extreme | Text pages are smaller as text than as JPEGs |
| Still over 2 MB after Extreme | Delete unneeded pages or split into two files | Fewer pages is the only lever left once the quality is at its lowest |
| I can no longer select or search the text | Compress the original again with Good | Good is the only level that keeps the text layer |
| Small print is blurry | Use Balanced rather than Extreme | 150 DPI holds 8-point type; 96 DPI does not |
| Form fields or signature disappeared | Use Good, or sign and fill after compressing | Lossy levels build a new document from images, without the form layer |
| Safari on iPhone reloads the tab | Split the file or use a laptop | iOS limits a tab's memory and rendering pages exceeds it |
| The page seems frozen on a long scan | Wait; a 200-page scan takes 30–60 seconds | Each page is rendered in turn and the tool yields between pages |

## What Else Can Shrink a PDF?

- [Delete PDF Pages](/en/delete-pdf-pages) removes the pages that are making the file heavy, with no loss on the ones you keep.
- [Split PDF](/en/split-pdf) turns one over-limit file into several that each pass a per-file cap.
- [Extract PDF Pages](/en/extract-pdf-pages) pulls out just the pages a form actually asks for.
- [Crop PDF](/en/crop-pdf) trims margins, which does not reduce file size but does make a page easier to read at a lower DPI.
- [Merge PDF](/en/merge-pdf) to combine files after compressing, so that a 2 MB cap on one upload becomes a single compliant bundle.

## The Bottom Line

PDF compression is really two different jobs. Good is a lossless repack that keeps text selectable and takes 5–15% off; Balanced and Extreme turn each page into a JPEG and take 40–90% off scans and photo-heavy files, which is what gets a 10 MB document under a 2 MB portal limit. Pick Good for text, Balanced for scans, Extreme only when Balanced is still too big, and compress the original rather than compressing twice. When even Extreme will not fit, remove pages or split the file instead of trading away legibility.
