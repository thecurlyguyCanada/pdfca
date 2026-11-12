---
title: "Split PDF Pages in Half Free: Lossless, No Upload"
h1: "Split PDF Pages in Half"
lead: "Cut every page of a scanned book or two-up PDF into two single pages. The cut runs in your browser; nothing is uploaded."
description: "Split each PDF page into two for free: vertical or horizontal cut, adjustable from 30% to 70%, covers kept whole, right-to-left order. Lossless, no upload."
answer: "Add the PDF, choose a vertical or horizontal cut, check the red line on the preview, and click Split pages in half. A 200-page file became 400 pages in under a second in our tests. The cut is lossless: each half is a cropped copy of the original page, so text stays selectable and scans keep their quality, and the file stays about the same size. The hidden half is cropped away, not deleted, so this is not a redaction tool."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab, with pdf-lib. The PDF is never sent to a server."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 45 MB, 300 dpi scan split in half a second in our tests on a computer. On an older phone, very large scans can make the tab reload."]
  - ["Pages", "No set maximum. A 200-page file became 400 pages in 0.9 seconds in our tests."]
  - ["Input", "One .pdf file. Password-protected PDFs must be unlocked first."]
  - ["Output", "One PDF named yourfile-split-half.pdf, about the same size as the original. You click Download; nothing downloads by itself."]
  - ["Cut options", "Vertical (left | right) or horizontal (top / bottom), position 30% to 70%, right-to-left order, first and last page kept whole"]
  - ["Kept and not kept", "Kept: text, images, links, title and author. Not kept: bookmarks, fillable form fields, attachments."]
  - ["What stays on your device", "The original, the split file and your settings. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your file (the PDF engine loads with the first file)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I split a PDF page into two pages for free?"
    a: "Open the tool, add the PDF, leave Vertical cut selected for side-by-side pages, check that the red line on the preview sits on the fold, and click Split pages in half. Then click Download. It is free, with no account or watermark, and the file never leaves your device."
  - q: "Does splitting pages in half reduce the quality?"
    a: "No. Nothing is re-rendered or recompressed. Each new page is a copy of the original page with a crop box over one half, so text stays selectable and searchable, vector drawings stay sharp and scanned images keep their original resolution."
  - q: "Why is the split file not twice as big?"
    a: "Both halves of a page point to the same content inside the file, so the images and text are stored once, not twice. In our tests the size stayed about the same: a 45 MB scan went from 14 to 28 pages and stayed at 45 MB, and a 200-page file got slightly smaller."
  - q: "Is the other half of the page deleted?"
    a: "No. Each half is cropped, which tells viewers what to show, but the full original page is still inside the file. Anyone with a PDF editor can reset the crop and see the other half. If that half holds something private, do not rely on this tool to remove it."
  - q: "Can I keep the front and back covers as single pages?"
    a: "Yes. Tick Don’t split the first page and Don’t split the last page. Those pages are copied unchanged, in their place. Only the first and last page can be kept whole; any other single page in the middle of the file will be cut like the rest."
  - q: "How do I split an Arabic, Hebrew or manga book?"
    a: "Tick Right-to-left order before you split. The right half of each spread then becomes the first page and the left half the second, so the book reads in the right order. The option appears only for a vertical cut, since a horizontal cut always gives top, then bottom."
  - q: "What if the fold is not exactly in the middle of the scan?"
    a: "Drag the Cut position slider anywhere from 30% to 70% and watch the red line on the preview move. The same position is used for every page, so pick a spot that works for the whole book. Back to the middle resets it to 50%."
  - q: "Will my bookmarks and form fields survive the split?"
    a: "Bookmarks will not, and fillable form fields will not: the field boxes still show, but they can no longer be filled in. Links and other annotations stay on the half they sit on. Fill and flatten a form before splitting it if the answers must stay."
---
## How Do I Split PDF Pages in Half for Free?

Five steps, and for most files the cut itself takes less than a second.

### Step 1: Add the PDF

Drop the file on **Drop your PDF here**, or click to choose it. The card shows the file name and the page count, with **Change file** if you picked the wrong one. A preview of the first page appears below the options.

### Step 2: Choose the cut direction

Under **Cut direction**, pick **Vertical cut** (left | right) for a book scanned open, with two facing pages side by side. Pick **Horizontal cut** (top / bottom) for a sheet with two pages stacked one above the other, such as two half-letter forms on one scan. Vertical is selected when the page opens.

### Step 3: Check the red line on the preview

This is the step people skip. The preview draws a dashed red line where the cut will fall and two numbered badges that show which half becomes page 1 and which becomes page 2. On a flatbed scan the book's spine is rarely dead centre. If the line misses the fold, drag **Cut position** between 30% and 70% until it sits in the gutter. **Back to the middle** returns it to 50%.

One position applies to every page, so scroll through the original first if the book shifted on the glass partway through. Pick the position that suits most pages, or split the file into sections with [Split PDF](/en/split-pdf) and cut each section separately.

### Step 4: Set covers and reading order

Tick **Don’t split the first page** and **Don’t split the last page** when the covers were scanned as single pages; they are then copied unchanged. For Arabic, Hebrew or manga, tick **Right-to-left order** so the right half comes first. The badges on the preview swap to confirm it.

### Step 5: Click Split pages in half, then Download

A progress line counts the pages ("Page 12 of 40"), then the result card shows the new file name, its size and the page count change, for example "6 → 11 pages". Nothing downloads until you click **Download**. The file is named `yourfile-split-half.pdf`; your original is not touched.

## What Happens to the File When a Page Is Cut in Half?

Nothing is redrawn. The tool copies each page twice and gives each copy a crop box (and media box) that covers one half of the page as it is displayed on screen. That is why the result is lossless and why it is quick: a 200-page file became 400 pages in 0.9 seconds in our tests, and a 120-page report took 0.3 seconds.

It also explains the file size. Both copies of a page share the same text, drawings and images inside the file, so nothing is stored twice:

| Test file | Pages before → after | Size before | Size after |
|---|---|---|---|
| Scanned book spread | 6 → 12 | 170.9 KB | 170.1 KB |
| 300 dpi scan | 14 → 28 | 45.2 MB | 45.2 MB |
| 3.5 MB right-to-left scan | split in two | 3.55 MB | 3.53 MB |
| 120-page text report | doubled | 247 KB | 221 KB |
| 200-page document | 200 → 400 | 170 KB | 117 KB |

Rotated pages are handled: a page stored as portrait with a 90° rotation, which shows as landscape, is cut along the middle you actually see. Files that mix portrait and landscape pages are fine too; each page is cut along its own displayed middle. Pages with an existing crop are cut within the visible area.

What comes along: the page content, the text layer, images, links (each stays on the half it sits on), and the document title, author, subject and keywords. What does not: bookmarks, fillable form fields (the boxes still show but cannot be filled), attachments and tagged-PDF structure, because the output is a new document.

## Is the Other Half Really Gone?

No, and it matters for anything private. Cropping tells a PDF viewer which part of a page to show. The full original page, both halves, is still in the file, and a PDF editor can reset the crop box to reveal it. Deleting one of the two halves afterwards with [Delete PDF Pages](/en/delete-pdf-pages) does not fix this either, because the remaining half still points to the same full-page content.

If the hidden half contains something that must not be shared, such as the facing page of a passport or another person's details on a scanned spread, run the split file through [Compress PDF](/en/compress-pdf) at **Balanced**. Balanced redraws every page as an image of what is visible, so the cropped-away half is no longer in the file. The trade-off is that the text is no longer selectable.

## Which Settings Fit Which Scan?

| What you have | Cut direction | Other settings |
|---|---|---|
| Book or magazine scanned open, two facing pages per scan | Vertical | Skip first and last page if the covers are single |
| Slides or notes saved "2 pages per sheet" in landscape | Vertical | Usually none |
| Two half-letter pages stacked on one portrait sheet | Horizontal | Usually none |
| Arabic, Hebrew or manga volume | Vertical | Right-to-left order |
| Scan where the spine sits left of centre | Vertical | Cut position below 50%, checked on the preview |
| Mix of single pages and spreads in the middle | Split the spread section only | Use Split PDF first, then Merge PDF |

## Use Cases by Situation

### A library book scanned on a flatbed for a course

Campus scanners and library photocopiers save a book laid open as one wide page per spread. Splitting turns each spread into two portrait pages that read properly on a laptop, print one page per sheet, and can be searched if the scanner added a text layer. If it did not, run the split file through [OCR PDF](/en/ocr-pdf).

### Reading a scanned book on a phone, tablet or e-reader

A two-page spread shrunk to a 6-inch screen is unreadable. Cut in half, each page fills the screen in portrait. Tick the two cover options so the front and back covers are not sliced down the middle.

### A passport or booklet scanned open for an IRCC upload

A passport, record of landing or marriage booklet scanned open gives two pages on one image. Splitting gives single pages, but the file size stays about the same, so a scan over IRCC's usual 4 MB per document still needs [Compress PDF](/en/compress-pdf). Read the section above first: the facing page is cropped, not removed.

### An Arabic, Hebrew or manga book

Books that read right to left need the right half first. With **Right-to-left order** ticked, a 3.5 MB Arabic scan in our tests came out in the correct order, at 3.53 MB.

### Two forms or tickets printed on one letter sheet

Some offices print two half-page forms, receipts or tickets on one sheet. A **Horizontal cut** gives top, then bottom, as separate pages you can file or attach one at a time.

## When Should You Not Use This Tool?

- **To remove private content.** The hidden half stays in the file. Use Compress PDF at Balanced after splitting, as explained above, or delete the whole original page.
- **To crop margins or a dark scanner border.** Use [Crop PDF](/en/crop-pdf), which trims to any rectangle.
- **When the fold moves from page to page.** There is no per-page cut position and no automatic gutter detection. Split the file into sections and cut each one, or rescan with the book pressed flat.
- **When single pages are mixed in the middle.** Only the first and last page can be kept whole. Split out the spreads with [Split PDF](/en/split-pdf), cut them, then rejoin with [Merge PDF](/en/merge-pdf).
- **To straighten a skewed scan or remove the spine shadow.** The tool cuts straight; it does not deskew or clean.
- **When fillable fields or bookmarks must survive.** Neither is kept. Fill the form and flatten it with [Flatten PDF](/en/flatten-pdf) before splitting.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| The cut runs through text instead of the fold | Drag Cut position until the red line sits in the gutter | Scans are rarely centred; the slider moves the cut from 30% to 70% |
| Halves come out in the wrong order | Tick or untick Right-to-left order | With it ticked, the right half becomes the first page |
| The cover was cut in half | Tick Don’t split the first page (or last page) and split again | Covers are often single pages, not spreads |
| The button is greyed out with "With these options no page would be split" | Untick one of the skip options | On a one-page file, skipping the first or last page leaves nothing to cut |
| The split file is not smaller | Run it through Compress PDF | The cut copies pages as they are; it never shrinks images |
| "This PDF is password-protected" | Remove the password in the app that created the file, then try again | An encrypted file cannot be read until it is unlocked |
| Form fields cannot be filled any more | Fill and flatten the form first, then split | Fillable fields are not carried into the new document |
| No preview appears | Split anyway | The message "No preview available" only affects the thumbnail, not the cut |

## The Bottom Line

Split PDF Pages in Half cuts each page into two straight down (or across) the line you set, in your browser, without redrawing anything. The quality is untouched and the file stays about the same size. Check the red line on the preview, keep the covers whole, tick right-to-left for books that need it, and remember that the hidden half is cropped, not deleted.
