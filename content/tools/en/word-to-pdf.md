---
title: "Word to PDF Free: Convert DOCX in Your Browser, No Upload (2026)"
h1: "How to Convert a Word Document to PDF"
lead: "Turn a .docx into a PDF that opens the same everywhere. The conversion runs in your browser tab, so the document is never uploaded."
description: "Convert a Word .docx to PDF for free in your browser in a few seconds, nothing uploaded. Text, headings, lists and images carry over; save .doc files as .docx first."
answer: "Select the .docx, click Convert File, and the PDF downloads a few seconds later. It is free, with no account, no watermark and no upload: the document is read and rendered to PDF inside your browser. The limit to know about is the input format. Only .docx converts; an old .doc file must be re-saved as .docx in Word, LibreOffice or Google Docs first."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, convert as many files as you like"]
  - ["Where the conversion happens", "In your browser tab. mammoth.js turns the .docx into HTML and the PDF engine in the page draws it. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap; bounded by memory. A 40-page .docx with a dozen photos (15–25 MB) converts on a laptop. Keep it under ~20 MB on a phone."]
  - ["Maximum pages", "No set maximum. 1–30 pages take under 5 seconds; a 200-page thesis may take 20–40 seconds while text is laid out line by line."]
  - ["Input", ".docx (Word 2007 and later). The picker also lists .doc, but the old binary format is not read; save it as .docx first."]
  - ["Output", "One PDF, A4 pages, standard fonts. Your Word file is not modified."]
  - ["What stays on your device", "The .docx and the PDF. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page and the conversion library have loaded once."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert Word to PDF for free without Microsoft Word?"
    a: "Open the Word to PDF tool, select the .docx, click Convert File and save the PDF. You do not need Word, Acrobat or an account, and nothing is uploaded. If you do have Word or LibreOffice installed, their own Save as PDF gives the most faithful layout; this tool is for when you do not, or when the document must not leave your device."
  - q: "Why can't I convert my .doc file?"
    a: "The .doc format from Word 97–2003 is a binary format that the browser library does not read; only the XML-based .docx is supported. Open the file in Word, LibreOffice or Google Docs, choose Save As or Download, pick Word (.docx), and convert that copy. The conversion takes seconds and loses nothing."
  - q: "Will the PDF look exactly like my Word document?"
    a: "Close on a plain document, not identical on a designed one. The browser cannot use the fonts installed on your computer, so text is set in a standard PDF font and line breaks can shift by a word or two. Headings, bold, italic, lists and inline images come through; headers, footers, page numbers and text boxes generally do not."
  - q: "What happens to tracked changes and comments?"
    a: "Tracked insertions are treated as accepted text and appear in the PDF; deletions are dropped; comments are not printed. If a reviewer's edits must not appear, open the document in Word, reject or accept them deliberately, and save a clean copy before converting."
  - q: "Is it safe to convert a confidential document here?"
    a: "The .docx is read into browser memory, converted to HTML, and drawn into a PDF in the same tab; no request carries the file to a server. Open your browser's developer tools on the Network tab while converting and you will see only page assets load. This is why the tool is suitable for a signed offer letter, a medical note or an immigration cover letter."
  - q: "Does the PDF keep my page breaks and page numbers?"
    a: "Manual page breaks are not honoured; the text flows and new pages start when the current one is full. Page numbers that live in a Word footer are not drawn. If exact pagination matters, such as a form that says page 2 of 3, export from Word itself or add the numbers after conversion in a PDF editor."
  - q: "Can I convert several Word files into one PDF?"
    a: "Convert each .docx separately, then combine the PDFs with Merge PDF. Both steps run in the browser and the whole job takes under a minute for a handful of files. Converting first and merging second also lets you check each PDF before it goes into the bundle."
---
## How Do I Convert a Word Document to PDF for Free?

Four clicks, no settings. The two things worth checking before you start are the file extension and whether the document relies on fonts, headers or text boxes that a browser cannot reproduce.

### Step 1: Confirm the file is a .docx

Look at the extension. If it ends in .docx, carry on. If it ends in .doc, the tool cannot read it: open the file in Word (File → Save As → Word Document), in LibreOffice (File → Save As → Word 2007-365) or in Google Docs (File → Download → Microsoft Word) and use the new .docx. This is the step that trips most people, because the file picker lists both extensions.

### Step 2: Select the document

Click **Select File** or drag the .docx onto the drop zone. One document converts at a time. The file is read into the tab's memory immediately; nothing is sent anywhere.

### Step 3: Click Convert File

Press **Convert File**. The document is unpacked, its paragraphs, headings, lists and images are translated into HTML, and the PDF engine draws that HTML onto A4 pages, starting a new page whenever the current one is full. A 3-page cover letter takes about a second; a 60-page report with photos takes 8–15 seconds on a laptop.

### Step 4: Download and check the PDF

The PDF downloads with the document's name and a .pdf extension. Open it and page through once, paying attention to line breaks near the bottom of pages and to any place the original had a header, footer or sidebar. The "what converts well" table below tells you what to look for.

### Step 5: Finish the job in the browser

If the PDF is going to someone who must sign it, open it in [Sign PDF](/en/sign-pdf). If it is one of several documents, combine them with [Merge PDF](/en/merge-pdf). If photos pushed it over an email limit, run [Compress PDF](/en/compress-pdf).

> **Tip:** Before converting, set the document's font to a common one (Arial, Times New Roman or Calibri) and accept all tracked changes. Both take ten seconds in Word and remove the two most frequent surprises in the output.

## What Happens to My Document During the Conversion?

A .docx is a zip archive of XML files. The page loads mammoth.js, an open-source library whose job is to read that archive and produce clean HTML: headings become heading tags, Word lists become list items, bold and italic runs become emphasis, and embedded pictures become inline images. That HTML is never displayed; it is walked element by element by the PDF engine in the page, which measures each word against the page width, wraps lines, and starts new pages as needed. The result is a PDF Blob that the browser offers as a download.

All of that happens in your tab. The document is read with the browser's File API and the PDF is written to memory in the same process; there is no server rendering step and no upload. If you want proof rather than a promise, open your browser's developer tools, select Network, and convert a document. You will see the page's own scripts load (including the conversion library the first time), one anonymous page-view request, and nothing carrying your file.

The practical reason this matters: Word documents are where Canadians keep their drafts of things that are not yet public. An offer letter with a salary in it, a statutory declaration for IRCC, a separation agreement, a reference letter for a tenant, a medical note for an employer. Converting any of those on a server leaves a copy you do not control. Converting them here leaves nothing once the tab closes.

## What Converts Well, and What Doesn't?

The conversion goes through HTML, so what survives is what HTML describes well: text structure. What is lost is page geometry: anything positioned on the page rather than in the flow of text.

| In the Word document | In the PDF | Notes |
|---|---|---|
| Body text, paragraphs | Kept, re-wrapped to the page width | Line breaks may differ from Word by a word or two |
| Headings (Heading 1–6 styles) | Kept, bold, sized by level | Custom heading colours are not reproduced |
| Bold, italic | Kept | Underline and strikethrough are not drawn |
| Bulleted and numbered lists | Kept as indented items | Multi-level numbering is flattened to one level |
| Inline images and photos | Kept, scaled to fit the page width | Images are re-encoded as JPEG; transparency becomes white |
| Fonts | Replaced by a standard PDF font (Helvetica family) | Your installed fonts cannot be read by the browser |
| Headers, footers, page numbers | Not drawn | Add page numbers afterwards if required |
| Manual page breaks and section breaks | Ignored; pages break when full | Insert a blank paragraph run if you need a forced break |
| Tables | Cell text is kept in reading order; borders and column layout are not | Export tables from Word or Excel to PDF for exact grids |
| Text boxes, shapes, WordArt | Usually dropped | Convert the content to normal paragraphs first |
| Tracked changes | Insertions appear as normal text; deletions vanish | Accept or reject changes deliberately before converting |
| Comments | Not printed | Nothing to do |
| Footnotes and endnotes | Appear as text at the end, not at the foot of the page | Fine for reading, not for citation style |
| Hyperlinks | Link text is kept; not clickable | Write the URL out in full if the reader must follow it |
| Landscape pages, custom margins | Everything is A4 portrait with fixed margins | Use Word's own export for landscape tables |

What this means in practice: a résumé, cover letter, essay, meeting minutes, letter of employment or plain contract comes through readable and correctly ordered, in a standard font. A newsletter with a three-column layout, a form built from text boxes, or a report whose tables carry the meaning will lose structure. For those, Word's own Save as PDF is the right tool, and the browser converter is the right tool for everything that must stay private and does not depend on page design.

## How Do I Convert Word to PDF on iPhone, Android, Mac or Windows?

Every platform already has a way to do this if Word, Pages or Google Docs is installed. This tool fills the gaps: no Office installed, a machine you do not control, or a document that must not be uploaded to Google or Microsoft servers.

**iPhone and iPad.** Open the page in Safari, tap the drop zone and pick the .docx from Files. The PDF appears in Files → Downloads. The built-in alternative is to open the .docx in Pages (free) and choose Export → PDF, which keeps fonts and headers; use the browser tool when you do not want to install Pages or the document came from Mail and you just want a PDF now.

**Android.** Chrome handles the picker and saves to Downloads. Google Docs on Android can also open a .docx and share it as PDF, but that uploads the document to Drive first. If that matters, the browser tool keeps it on the phone.

**Mac.** Word for Mac and Pages both export to PDF with full fidelity, and the macOS print dialog has Save as PDF for anything that opens. Use this page when the Mac has none of those apps, or when you want a PDF without launching anything.

**Windows.** Word's File → Save As → PDF, or Microsoft Print to PDF from any application, produce exact layouts. If Word is not installed, LibreOffice is a free download that also exports PDF. This page is the no-install option and the no-upload option.

**Chromebook.** Google Docs opens .docx files and downloads them as PDF, but the file goes to Google's servers in the process. For a local-only conversion, use this page in Chrome; the PDF lands in Downloads.

## When Should You Not Use This Tool?

- **Old .doc files.** The binary format is not read. Save as .docx first; it takes seconds in any word processor.
- **Documents with headers, footers or page numbering that must appear.** They are not drawn. Export from Word, Pages or LibreOffice instead.
- **Forms and layouts built from text boxes or tables.** The grid is lost. Export from the original application, or rebuild the form with [Make PDF Fillable](/en/make-pdf-fillable) after you have a PDF.
- **Documents that depend on a specific typeface.** Brand guidelines, wedding invitations, anything where the font is the point. The browser cannot embed your installed fonts.
- **Landscape pages or Letter-size output.** Output is A4 portrait. A Letter-size document for a Canadian or US office should be exported from Word with the right page size.
- **Legal documents where pagination is referenced.** "See clause 7 on page 4" may no longer be on page 4 after reflow.
- **Macro-enabled .docm files.** Save them as .docx first; macros are never executed and never carried into the PDF.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| "Could not read the file" or nothing happens | Check the extension; re-save .doc, .rtf or .odt as .docx and try again | Only the .docx package format is parsed |
| The PDF uses a different font | Choose a standard font in Word before converting, or export from Word if the typeface matters | Fonts installed on your computer are not available to the browser |
| Page numbers and the letterhead are missing | Put the letterhead text in the body of the first page, or add the header afterwards in a PDF editor | Header and footer regions are not part of the document flow that is converted |
| A table came out as a column of text | Convert the table separately with Excel to PDF, or export from Word | Cell structure is not reproduced; only the text inside the cells |
| The PDF is much larger than the .docx | Run it through Compress PDF | Photos are re-encoded at full size when placed on the page |
| A deleted sentence from Track Changes appears | Accept all changes in Word (Review → Accept All) and reconvert | Tracked insertions are converted as ordinary text and pending deletions are not applied |
| The last line of a page is cut or a heading is stranded at the bottom | Add a blank line before the heading in Word and reconvert | The engine breaks pages when the current one fills; it does not keep headings with the following paragraph |

## What Should I Do With the PDF Next?

- [Sign PDF](/en/sign-pdf) to add your signature before sending a letter or agreement.
- [Merge PDF](/en/merge-pdf) to combine the converted document with scans or other PDFs into one file.
- [Compress PDF](/en/compress-pdf) when photos have pushed the PDF past an email limit.
- [Make PDF Fillable](/en/make-pdf-fillable) to turn a converted form into one that others can type into.
- [PDF to Word](/en/pdf-to-word) to go the other way when you receive a PDF you need to edit.

## The Bottom Line

Word to PDF in the browser is for the cases Word's own export does not cover: no Office installed, a borrowed computer, or a document too sensitive to send through Google Docs or an online converter. It handles the text, headings, lists and pictures of an ordinary .docx in a few seconds, with nothing uploaded and nothing to pay. It does not reproduce headers, footers, text boxes or your fonts, and it does not read old .doc files. If the layout is the point, export from Word; if privacy or convenience is the point, use this.
