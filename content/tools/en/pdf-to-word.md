---
title: "PDF to Word Free: Editable DOCX in Your Browser, No Upload (2026)"
h1: "How to Convert a PDF to an Editable Word Document"
lead: "Turn a text-based PDF into a .docx you can edit in Word or Google Docs. The conversion runs in your browser; the file is never uploaded."
description: "Convert a PDF to an editable Word (.docx) file for free in your browser. Text, headings and simple tables carry over; scanned PDFs need OCR first. No upload."
answer: "Select your PDF, click Convert File, and a .docx downloads a few seconds later. It is free, there is no account and no watermark, and the PDF never leaves your device because the text extraction and the Word file are both built inside your browser tab. The one limit that matters: the PDF must contain real text. A scanned PDF has none, so it comes out with nothing to edit."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no cap on conversions"]
  - ["Where the conversion happens", "In your browser tab. pdf.js reads the text; the docx library writes the Word file. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap; bounded by memory. A 100-page, 20 MB text PDF converts comfortably on a laptop. Keep it under ~30 MB on a phone."]
  - ["Maximum pages", "No set maximum. 1–50 pages finish in a few seconds; 300 pages can take 20–40 seconds while each page is read."]
  - ["Input", ".pdf only, and it must contain selectable text. Scanned pages are images and yield no editable text."]
  - ["Output", "One .docx file that opens in Word, Google Docs, LibreOffice and Pages. Your PDF is not modified."]
  - ["What stays on your device", "The PDF, the .docx and nothing else. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and the conversion library has been fetched the first time."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to Word for free without Adobe?"
    a: "Open the PDF to Word tool, select the PDF, click Convert File and save the .docx. There is no charge, no sign-up and no watermark. Acrobat's Export PDF does a better job on complex layouts, but for a letter, résumé, contract or report made of ordinary text, this is enough."
  - q: "Why is my converted Word document empty?"
    a: "The PDF is almost certainly a scan: each page is a picture, not text, so there is nothing to extract. Try selecting a word in your PDF viewer. If you cannot, run the file through an OCR tool first, then convert the OCR'd PDF. The same thing happens with PDFs exported as outlines from design software."
  - q: "Will the Word file look exactly like the PDF?"
    a: "Not exactly. Paragraphs, bold and italic, font sizes, simple tables and embedded images come through. Multi-column layouts, text boxes, footnotes anchored to the page and decorative fonts do not survive intact. Expect a clean single-column document that needs a few minutes of tidying for anything designed in InDesign or Canva."
  - q: "Does it keep tables from the PDF?"
    a: "Simple tables with aligned columns are detected and rebuilt as real Word tables with borders. Tables with merged header cells, nested tables or wrapped text inside cells usually come out as plain lines or as a table with the wrong number of columns. For tabular data you plan to calculate with, PDF to Excel is the better route."
  - q: "Is it safe to convert a contract or a CRA notice here?"
    a: "The PDF is read into your browser's memory and the Word file is assembled there, so no network request carries the document. You can watch the Network tab in your browser's developer tools during the conversion and see that only page assets load. Close the tab and both files are gone from memory."
  - q: "Can I convert a password-protected PDF to Word?"
    a: "Not while it still asks for a password to open. Remove the protection with Unlock PDF first, then convert. PDFs that only restrict printing or copying (an owner password) often convert without any extra step, because the text itself is not encrypted against reading."
  - q: "Which program opens the .docx it produces?"
    a: "Any modern word processor: Microsoft Word 2007 or later, Google Docs, LibreOffice Writer, Apple Pages and the Word mobile apps. The file is a standard Office Open XML package, so nothing proprietary is needed. If Word opens it in Protected View, click Enable Editing."
  - q: "How long does a 50-page PDF take to convert?"
    a: "Usually 3–8 seconds on a laptop made in the last five years, and 10–20 seconds on a mid-range phone. Each page is read and laid out in turn, so time scales with pages rather than megabytes; a 50-page text PDF of 2 MB and one of 15 MB with photos take about the same."
---
## How Do I Convert a PDF to Word for Free?

The whole process is one file in, one file out, with no settings to get wrong. What decides the result is the PDF you start with, so step 1 includes a ten-second check.

### Step 1: Check that your PDF has real text

Open the PDF in any viewer and try to highlight a sentence with your mouse. If the text selects word by word, you have a text PDF and the conversion will work. If a blue box covers the whole page or nothing selects, you have a scan, and you need OCR before this tool can help. This is the step most people skip, and it explains nearly every "empty document" complaint.

### Step 2: Select the PDF

Click **Select File** or drag the PDF onto the drop zone. Only one file is converted at a time; for a batch, convert them one after another, or [merge the PDFs](/en/merge-pdf) first and split the Word document afterwards.

### Step 3: Click Convert File

Press **Convert File**. The page reads each PDF page in turn, pulls out the text runs with their position, size and font name, detects lines that look like table rows, collects embedded images, and then writes a .docx. A 10-page letter finishes in about a second; a 100-page report takes 8–15 seconds on a laptop.

### Step 4: Download and open the .docx

The Word file downloads with the same name as the PDF and a .docx extension. Open it in Word, Google Docs or LibreOffice. The page size matches the PDF (Letter stays Letter, A4 stays A4).

### Step 5: Tidy what did not survive

Spend two minutes on the result before you start editing: delete stray blank paragraphs at page breaks, re-join any heading that landed on two lines, and check tables. The next section tells you exactly what to expect.

> **Tip:** If you only need to edit one section of a long PDF, use [Extract PDF Pages](/en/extract-pdf-pages) to pull out those pages first. A 6-page extract converts cleaner and faster than a 200-page manual, and you avoid tidying pages you will never touch.

## What Happens to My PDF During the Conversion?

Two open-source libraries do the work, and both run inside the browser tab. pdf.js, the same engine Firefox uses to display PDFs, parses your file and returns every piece of text with its coordinates, font and size. The docx library then takes those pieces and builds a Word document in memory: paragraphs, text runs with bold and italic flags, tables for aligned rows, and image runs for any pictures found on the page. The finished package is handed to the browser as a download.

No server is involved at any point. The PDF is read with the browser's File API into the tab's memory, and the .docx is a Blob created in the same tab. If you open your browser's developer tools, choose Network and run a conversion, you will see the page's scripts and fonts load, an anonymous page-view ping, and nothing else. There is no request large enough to be your document.

That matters for what Canadians convert most often: a CRA notice of assessment that needs a paragraph quoted in a letter, an IRCC form letter, a lease that needs one clause changed, a résumé saved years ago only as a PDF, a doctor's letter that must be retyped for an insurer. None of it leaves your laptop, so there is no copy on a server to be retained, breached or used to train anything. Close the tab and the memory is released.

## Will My Formatting Survive the Conversion?

Mostly, for documents made of running text; partly, for anything designed on a page grid. The converter rebuilds the document from text positions, so it is good at what positions describe well (paragraphs, sizes, emphasis) and weak at what they do not (reading order across columns, floating boxes, decorative layout).

| Element in the PDF | What arrives in Word | What to do about it |
|---|---|---|
| Body paragraphs | Kept, with line breaks removed within a paragraph | Nothing |
| Headings | Kept at their original font size, bold if the PDF font was bold | Apply Word heading styles if you want a table of contents |
| Bold and italic | Kept when the PDF font name says Bold, Italic or Oblique | Check emphasis on fonts with unusual names |
| Font faces | Not embedded; Word substitutes its default | Pick the font once in Word and apply it to all text |
| Simple tables (aligned columns, one line per cell) | Rebuilt as a bordered Word table | Fix column widths |
| Tables with merged cells or wrapped text | Often flattened to lines, or given too many columns | Convert the page with PDF to Excel instead |
| Embedded images (logos, photos) | Extracted and placed as centred pictures | Drag to the right position |
| Multi-column text | Columns are read as one flow and may interleave | Convert a single-column version, or cut and paste |
| Headers, footers, page numbers | Appear as ordinary paragraphs at the top and bottom of each page | Delete them or move them into Word's header |
| Hyperlinks | Link text is kept; the clickable link is not | Re-add links in Word |
| Form fields, annotations, comments | Dropped | Use Make PDF Fillable to work with forms |
| Scanned pages | No text; the scan may appear as a picture, or the page may be empty | OCR the PDF first |

The honest summary: a 12-page contract, a résumé, a university essay or a letter from a government department will come through needing minor cleanup. A brochure, an annual report with sidebars, or a magazine spread will come through as readable text in the wrong order, and you are better off retyping the layout in Word using the converted text as your source.

## How Do I Convert PDF to Word on iPhone, Android, Mac or Windows?

The page is identical on every platform; only the file picker and the place the .docx lands change.

**iPhone and iPad.** Open the page in Safari, tap the drop zone and choose the PDF from Files (Mail attachments can be saved to Files first). The .docx goes to Files → Downloads, and opens in Pages, Word for iOS or Google Docs. Apple has no built-in PDF-to-Word; Pages can open PDFs only as images, so the browser tool is the practical option. Keep PDFs under about 30 MB on a phone.

**Android.** Chrome handles the file picker and saves to Downloads. Word for Android and Google Docs both open the result. Phones with 3–4 GB of RAM convert a 100-page text PDF without trouble.

**Mac.** Preview cannot export to Word. Word for Mac can open a PDF directly (File → Open) and rebuild it, which is good on simple layouts and worth trying if you already own Word. For a quick, private conversion without opening Word, use this page.

**Windows.** Word 2013 and later can open a PDF directly and will ask to convert it; the results are comparable to this tool on plain documents and sometimes better on tables. Microsoft Edge has no export-to-Word. If you do not have Word installed, this page gives you a .docx that LibreOffice or Google Docs will open.

**Chromebook.** Works in Chrome as on a desktop; the .docx saves to Downloads or Drive and opens straight in Google Docs, which is the natural editor on that platform.

## When Should You Not Use This Tool?

- **Scanned PDFs.** No text means no conversion. Run OCR first (Acrobat, your scanner's software, or an OCR app) and then convert the searchable PDF.
- **Designed layouts.** Brochures, posters, infographics and multi-column newsletters lose their arrangement. Ask for the original InDesign, Canva or Publisher file instead.
- **PDFs with fillable forms.** Field values and the fields themselves are dropped. If you need to fill the form, use [Make PDF Fillable](/en/make-pdf-fillable) or fill it in a PDF viewer.
- **Mathematical and scientific papers.** Equations set in specialist fonts come through as scattered symbols. Convert for the prose, not the formulas.
- **Documents where exact pagination is legally meaningful.** A converted contract reflows, so page references in the original no longer match. Keep the PDF as the record and use the Word file only for drafting.
- **Very large PDFs on a phone.** A 500-page, 80 MB manual needs memory a phone tab may not have. Use a laptop or extract the chapter you need.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The .docx opens but is blank or shows only pictures | Check whether text selects in the PDF; if not, OCR the file and convert again | Scanned pages contain images, not characters, so there is no text to extract |
| Every line is its own paragraph | In Word, select the text and use Find and Replace to swap paragraph marks (^p) for spaces within affected sections | The PDF stored each line as a separate positioned string with no paragraph markers |
| Text from two columns is mixed together | Crop the PDF to one column with Crop PDF, convert, then repeat for the other column | The converter reads left-to-right across the page, so cropping restores a single reading order |
| Accented French characters show as boxes or wrong letters | Open the .docx in Word and change the font to one that includes those glyphs, such as Calibri or Arial | The PDF's font was not embedded in the .docx; a substitute font is being used |
| Fonts look different from the PDF | Select all and apply the font you want | Font files cannot be copied out of a PDF; only the names and sizes carry over |
| The conversion stops partway on a long file | Close other tabs, or extract 50 pages at a time | Each page's text and images are held in memory until the .docx is written |
| Word says the file is corrupt | Re-download; if it repeats, convert a smaller page range | A download interrupted by the browser leaves a truncated .docx package |

## What Else Can I Do With the Document?

- [Word to PDF](/en/word-to-pdf) when you have finished editing and need to send the result as a PDF again.
- [PDF to Excel](/en/pdf-to-excel) when the pages are mostly tables and you want numbers you can sum, not text you can edit.
- [Extract PDF Pages](/en/extract-pdf-pages) to convert only the section you need to edit.
- [Make PDF Fillable](/en/make-pdf-fillable) when what you actually need is to type into a form, not rewrite it.

## The Bottom Line

PDF to Word works well on the documents most people need to edit: letters, contracts, essays, résumés and reports made of ordinary paragraphs, with simple tables and a logo or two. It runs in your browser, so a CRA notice or a medical letter never leaves your device, and it costs nothing. Check that the text selects in the PDF before you start; if it does not, OCR comes first. For brochures and page-grid layouts, use the converted text as raw material rather than expecting a finished document.
