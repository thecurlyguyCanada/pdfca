---
title: "PDF to EPUB Converter: Free Reflowable Ebook, No Upload"
h1: "PDF to EPUB Converter"
lead: "Turn a text PDF into a reflowable EPUB 3 with chapters, pop-up footnotes and a cover, built entirely inside your browser. Nothing is uploaded."
description: "Convert a PDF to a reflowable EPUB for Kobo, Kindle or Apple Books, free and in your browser. Detects headings and footnotes; 300 pages take 20–60 seconds."
answer: "Choose your PDF, leave Reflowable EPUB selected, and click Convert File. The tool reads the text layer with pdf.js, finds headings and footnotes, removes running headers and page numbers, and packs the result into an EPUB 3 you can load on a Kobo, Kindle or phone. Free, no account, nothing uploaded. It needs a PDF with real text: scans, two-column papers and tables convert badly."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark"]
  - ["Where the conversion happens", "In your browser tab. pdf.js reads the PDF, JSZip builds the EPUB; no server is involved."]
  - ["Maximum file size", "No fixed cap. Text PDFs of 300 pages convert comfortably on a laptop; image-heavy files over ~100 MB are slow on phones because every picture is re-encoded."]
  - ["Maximum pages", "No set limit. 300 pages takes 20–60 seconds on a laptop; a 1,000-page reference book will work but may take several minutes."]
  - ["Input", ".pdf with a text layer. Scanned PDFs (images of pages) produce an EPUB with the cover and pictures but little or no text."]
  - ["Output", "One .epub (EPUB 3.0) with a single chapter file, a table of contents, embedded images as PNG and a cover rendered from page 1. The PDF is not modified."]
  - ["Alternate output", "Switch to Visual PDF to get a cropped, re-paginated PDF for a 6–10 inch e-reader screen instead of an EPUB."]
  - ["What stays on your device", "The PDF and the EPUB. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to EPUB for Kobo or Kindle?"
    a: "Select the PDF, keep Reflowable EPUB selected and click Convert File; the .epub downloads in under a minute for most books. Copy it to a Kobo over USB or with the Kobo app, or send it to a Kindle through Amazon's Send to Kindle email address or app, which accepts EPUB directly."
  - q: "Will the chapters and headings be detected?"
    a: "Usually, yes. A line is treated as a heading when its font is at least 15% larger than the body text or mostly bold and under 120 characters, and each one becomes an entry in the EPUB's table of contents. Books that mark chapters only with extra white space, with the same font size, will come out as one long chapter."
  - q: "Can I convert a scanned PDF to EPUB?"
    a: "Not usefully. A scan has no text layer, so the converter finds no words; you get a cover image and the page pictures but no reflowable text. The PDF needs to be OCRed first, in Acrobat, ABBYY or a scanner's own software, after which it converts normally."
  - q: "Does it keep the images?"
    a: "Most of them. Each embedded image is pulled out, re-encoded as PNG and placed in the text where it appeared on the page. Vector drawings, charts drawn with lines rather than pixels, and some unusual image encodings are skipped. The first page is also rendered as a JPEG and used as the cover."
  - q: "What happens to page numbers, running headers and footers?"
    a: "They are removed. Any line that repeats on more than 40% of the pages, and any line that is just a number or 'Page 12', is dropped so the book does not fill with stray headers. A chapter title that appears as a running header on every page of that chapter may be dropped too, which is a known trade-off."
  - q: "Why does my two-column PDF come out scrambled?"
    a: "The converter reads text from top to bottom and left to right across the whole page, so the two columns of a journal article are interleaved line by line. For two-column papers use the Visual PDF mode on this page instead, which detects the gutter and reads each column in turn as cropped images."
  - q: "Are footnotes supported?"
    a: "Yes, as EPUB 3 pop-up notes. Small text near the bottom of a page that starts with a number or a symbol such as * or † is treated as a footnote, moved to the back of the book, and linked from the superscript marker in the text. Kobo, Apple Books and recent Kindles show these as pop-ups; older readers show them as endnotes."
  - q: "Is the EPUB tagged with the right language?"
    a: "The EPUB's language tag is set to English regardless of the book's language. The text itself is unchanged, so a French PDF reads fine, but the reader's dictionary and hyphenation may default to English. You can change the tag with Calibre's metadata editor if that matters."
---
## How Do I Convert a PDF to EPUB for Free?

Five actions. For a 250-page novel with a proper text layer, expect to wait 15–40 seconds on a laptop.

### Step 1: Select your PDF

Click **Select File** or drop the PDF onto the page. The tool accepts `.pdf` only. If the document asks for a password when you open it, remove the password first in Acrobat Reader or Preview (File → Export with no password); an encrypted file cannot be read.

### Step 2: Choose Reflowable EPUB

An options card appears with two modes. **Reflowable EPUB** is selected by default and is the one this page is about: it produces an `.epub` whose text re-flows to any screen and font size. **Visual PDF** is the alternative for layouts that cannot be reflowed, described below.

### Step 3: Click Convert File

Press **Convert File**. The tool reads every page's text, measures the font sizes, decides which lines are headings, body, footnotes or page furniture, pulls out the images, renders page one as a cover and zips it all into an EPUB. The progress indicator runs the whole time; do not switch tabs on a phone, since the browser may suspend the page.

### Step 4: Download the .epub

The file downloads with the PDF's name and an `.epub` extension. The PDF's own title and author, if its metadata has them, become the book's title and author; otherwise the file name is used.

### Step 5: Load it on your reader

This is the step people skip, then wonder why the file looks wrong in a PDF viewer. An EPUB is not a PDF. Open it in Apple Books, Kobo, Calibre, Thorium or the Kindle app, or send it to a Kindle, and page through the first chapter to check the headings and paragraph breaks.

> **Tip:** Convert a 20-page excerpt first with [Extract PDF Pages](/en/extract-pdf-pages). If the headings and paragraphs look right, the full book will too; if not, you have saved a long wait.

## What Happens to My PDF While It Converts?

Everything runs inside the tab. pdf.js, the same engine Firefox uses to display PDFs, opens the file from memory and returns every text fragment with its position, font name and size. The tool groups fragments into lines, lines into paragraphs, and paragraphs into a single XHTML chapter. Images are drawn to a hidden canvas and saved as PNG. JSZip then writes the `mimetype`, `container.xml`, `content.opf`, `nav.xhtml` and `content.xhtml` files that make up an EPUB 3 package and hands you the ZIP as a download.

There is no server step because there is nothing a server would add. If you watch the Network tab in your browser's developer tools while converting, you see the page's own scripts and one anonymous page-view request, and no transfer the size of your PDF.

That is the point for anyone converting a manuscript under contract, a thesis before defence, a court bundle they want to read on a Kobo, or an out-of-print book they scanned and OCRed themselves. The text never exists anywhere but on the device in your hands.

## Will My Formatting Survive the Conversion?

Some of it, and the pattern is predictable. The converter works from the text layer, so anything expressed as text size, weight or position has a chance; anything expressed as page layout does not.

| In the PDF | In the EPUB | How it is decided |
|---|---|---|
| Body paragraphs | Kept, re-flowed | Lines are joined into a paragraph until a gap of 1.8 line-heights or a sentence end with a larger gap |
| Hyphenated line ends | Rejoined | A line ending in "-" is glued to the next line without the hyphen |
| Ligatures (fi, fl, ffi) | Expanded to plain letters | Avoids boxes on readers whose fonts lack the glyphs |
| Chapter titles and section heads | h1/h2/h3 with TOC entries | Font ≥1.15× body size, or mostly bold, and under 120 characters |
| Bold and italic words | Kept | Read from the font name (Bold, Black, Italic, Oblique) |
| Running headers and footers | Removed | Any line repeating on more than 40% of pages |
| Page numbers | Removed | Bare numbers and "Page N" lines |
| Footnotes | Moved to backmatter as pop-up notes | Small text in the bottom 40% of a page starting with a number or symbol |
| Embedded raster images | Kept as PNG, in place | Drawn to canvas; some encodings skipped |
| Vector charts, rules, boxes | Dropped | Not part of the text or image layers |
| Tables | Flattened to lines | Cells are read left to right as plain text |
| Two or more columns | Interleaved | Text is sorted by vertical position across the whole page |
| Cover | Page 1 rendered as JPEG | Set as the EPUB cover image |

What this means in practice, by document type:

| Document | Result | Recommendation |
|---|---|---|
| Novel or memoir exported from Word or InDesign | Very good; chapters, italics and paragraphs survive | Convert as is |
| Non-fiction with footnotes and section heads | Good; TOC and pop-up notes work | Check that short bold phrases were not mistaken for headings |
| Business report with tables and charts | Mixed; prose is fine, tables flatten, charts vanish | Read as PDF, or use Visual PDF mode |
| Two-column academic paper | Poor in Reflowable mode | Use Visual PDF mode |
| Scanned book without OCR | Cover and pictures only | OCR first |
| Government form or slip (T4, lease) | Not meaningful | Keep as PDF |

## Should I Choose Reflowable EPUB or Visual PDF?

The second option on the mode card exists because some documents cannot be reflowed without being ruined. **Visual PDF** does not extract text at all. It renders each page at double resolution, finds the edges of the printed area, trims the margins, checks for a two-column gutter, and slices the content into strips sized for an e-reader screen. You choose the target screen with a slider from 6 to 10 inches; 6 suits a basic Kindle or Kobo Clara, 7 a Paperwhite or Libra, 10 a Scribe or Kobo Elipsa. The output is a PDF of JPEG pages, usually larger than the original, with no selectable text.

Pick Reflowable EPUB for prose: novels, essays, reports, theses, anything you would happily read in one column with your own font size. Pick Visual PDF for journal articles, sheet music, textbooks with equations and diagrams, and anything where the arrangement on the page is the content. To get a Visual PDF onto a Kindle, email it to your @kindle.com address or use Amazon's Send to Kindle app; Amazon accepts both PDF and EPUB, and no longer accepts MOBI.

## How Do I Convert a PDF to EPUB on Mac, Windows, iPhone or Android?

**Mac.** The page works in Safari, Chrome and Firefox. Apple Books reads the resulting EPUB directly: double-click it. Calibre is the desktop alternative and offers far more control (heuristic processing, custom CSS, language tags) at the cost of installing it and learning its settings. For a quick, private conversion of a clean text PDF, this page is faster; for a library of hundreds of books, Calibre.

**Windows.** Same page in Edge, Chrome or Firefox. Windows has no built-in EPUB reader, so install Calibre, Thorium or the Kindle app to read the result. Converting here and reading in the Kindle app with Send to Kindle is the common pattern.

**iPhone and iPad.** Safari handles the conversion; a 200-page text PDF takes 30–90 seconds on a recent iPhone. Tap the downloaded file in Files and choose Books to open it. Keep image-heavy PDFs under about 50 MB on phones.

**Android.** Chrome converts, and Google Play Books, Moon+ Reader or the Kobo app open the EPUB. Phones with 3 GB of RAM or less should stick to text-only PDFs under about 50 MB.

**Chromebook.** Converts like a desktop; Google Play Books reads the result.

## When Should You Not Use This Tool?

- **Scanned PDFs without OCR.** No text layer means no text in the EPUB. OCR the file first.
- **Two-column or multi-column layouts** in Reflowable mode. Switch to Visual PDF.
- **Documents where tables carry the meaning**: financial statements, timetables, specification sheets. A flattened table is worse than no table.
- **Forms, slips and anything you must file.** A T4, a lease or an IRCC form is a fixed document; keep it as a PDF.
- **Heavily designed books**: cookbooks, art books, comics. Use the Visual PDF mode on this page or keep the PDF.
- **PDFs with XFA forms.** They contain almost no readable page text; see [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) for what they are.
- **Password-protected files.** Unlock them first.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The EPUB opens but is nearly empty | The PDF is a scan; OCR it first and convert again | The converter reads the text layer and a scan has none |
| Columns are interleaved line by line | Use Visual PDF mode | Text is sorted by height across the full page width |
| Short bold phrases became headings | Accept it, or edit the EPUB in Calibre | Any mostly-bold line under 120 characters is treated as a heading |
| Chapter titles are missing | They repeated as running headers on more than 40% of pages and were removed | Header removal is frequency-based |
| A paragraph is split in two or two are merged | Expected on PDFs with irregular spacing | Paragraph breaks are inferred from line gaps |
| Images are missing | Vector graphics and some encodings are not extracted | Only raster images reachable through the page's image objects are copied |
| Footnote links point to the wrong note | Happens when two chapters restart numbering at 1 | Notes are matched by their marker number |
| Reader shows English hyphenation on a French book | Change the language tag in Calibre | The EPUB language is set to en |
| Safari on iPhone reloads the page | Use a laptop or a smaller PDF | iOS limits a tab's memory and image re-encoding is heavy |

## What Else Can I Do With the EPUB or the PDF?

- [Crop PDF](/en/crop-pdf) trims fixed margins by hand when you want to keep the PDF but make it readable on a small screen.
- [EPUB to PDF](/en/epub-to-pdf) goes the other way, producing a plain text PDF from an EPUB.
- [Extract PDF Pages](/en/extract-pdf-pages) lets you test a chapter before converting the whole book.
- [Delete PDF Pages](/en/delete-pdf-pages) removes front matter, blank pages or an index before converting.
- [Rotate PDF](/en/rotate-pdf) straightens sideways scans before you OCR and convert them.

## The Bottom Line

A PDF with a real text layer and a single column converts into a usable EPUB here in under a minute: headings become chapters, footnotes become pop-ups, images come along, and the whole thing happens in your browser without an upload. Scans, tables and two-column layouts do not reflow well, and for those the Visual PDF mode or the original PDF is the better answer. Try a short excerpt first, then convert the book.
