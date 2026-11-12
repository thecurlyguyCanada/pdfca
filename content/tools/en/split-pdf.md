---
title: "Split PDF Free: One File per Page, No Upload"
h1: "Split PDF"
lead: "Pick the pages you want, click Split PDF and get each one as its own file in a ZIP. The split runs in your browser; nothing is uploaded."
description: "Split a PDF into separate pages for free in your browser. Pick all pages or a range like 1, 3-5, 8; each page becomes its own PDF in a ZIP. No upload."
answer: "Open the split tool, add your PDF, then either leave every page selected or type a range such as 1, 3-5, 8 to pick specific pages. Click Split PDF and a ZIP file downloads with one PDF per page, named after the original. It is free, there is no watermark and no account, and the file never leaves your device because the split happens in your browser tab. If you want the chosen pages in a single PDF instead, use Extract PDF Pages."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the split happens", "In your browser tab with pdf-lib; the ZIP is packed by JSZip in the same tab. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. A 150–200 MB PDF splits on a laptop with 8 GB of RAM; keep it under about 40–60 MB on a phone because the ZIP needs memory too."]
  - ["Maximum pages", "No set maximum. A 300-page file produces 300 one-page PDFs in roughly 10–20 seconds on a laptop; 1,000 pages works but takes a minute or more."]
  - ["Input", ".pdf only. Password-protected files must be unlocked first with Unlock PDF."]
  - ["Output", "A ZIP archive containing one PDF per selected page, named filename_page_001.pdf and so on. Your original file is untouched."]
  - ["What stays on your device", "The source PDF, the ZIP and your page selection. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded; the libraries are cached in the tab."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I split a PDF into separate pages for free?"
    a: "Add the PDF to the split tool, leave all pages selected and click Split PDF. A ZIP downloads with every page as its own one-page PDF, numbered in order. There is no fee, no sign-up and no watermark, and the work is done inside your browser rather than on a server."
  - q: "Can I split a PDF by page range, like pages 5 to 10?"
    a: "Yes. Type 5-10 in the page range box, or click the thumbnails, and only those pages are split out. Each page still becomes a separate file inside the ZIP. If you want pages 5 to 10 kept together in one new PDF, use Extract PDF Pages instead; the two tools share the same selection controls."
  - q: "Why do I get a ZIP file instead of PDFs?"
    a: "Because a browser can only hand you one download at a time without a prompt for each file, the tool bundles the one-page PDFs into a single ZIP. Double-click the ZIP on Windows or macOS to open it; on iPhone, tap it in Files and iOS unpacks it into a folder."
  - q: "Does splitting lower the quality of the pages?"
    a: "No. Each page is copied into a new document exactly as it was, including fonts, vector graphics and embedded images. Nothing is re-rendered or re-compressed, so a 300-dpi scan stays a 300-dpi scan and selectable text stays selectable."
  - q: "How many pages can I split at once?"
    a: "There is no page limit in the tool. The practical ceiling is memory: every one-page PDF is held in the tab until the ZIP is built, so a 1,000-page, 100 MB file needs a laptop rather than a phone. On a phone, stay under roughly 40–60 MB or split the file in two rounds."
  - q: "Can I split a password-protected PDF?"
    a: "Not directly. If the PDF asks for a password when you open it, the engine cannot read its pages. Remove the password first with Unlock PDF, then split. A PDF that opens without a password but blocks printing or copying usually splits without any extra step."
  - q: "Will bookmarks, links and form fields survive the split?"
    a: "Links and form fields drawn on a page travel with that page. Bookmarks that point across pages and the document outline do not survive, because each output file contains only one page. If you need the outline, keep the original and split a copy."
  - q: "Is it safe to split confidential documents here?"
    a: "The file is read into your browser's memory, split there and zipped there. No network request carries it, which you can confirm in your browser's developer tools under Network while the split runs. Close the tab and the data is released."
---
## How Do I Split a PDF into Separate Pages for Free?

Five actions, and for a typical 20-page document the whole thing takes under ten seconds.

### Step 1: Add the PDF

Click **Select File** or drag the PDF onto the drop zone. The tool reads the file into memory and draws a thumbnail of every page. A 40-page scan at 30 MB takes two or three seconds to render; a long text document appears almost at once.

### Step 2: Decide which pages to split out

By default every page is selected, which means "give me each page as its own file". If you only want some of them, you have two controls:

- **Click thumbnails** to toggle individual pages. Hold Shift and click a second page to select the whole run between them.
- **Type a range** in the page box, for example `1, 3-5, 8`. The selection updates as you type, so you can see the highlighted thumbnails match before you commit.

This is the step people get wrong: selected pages are the ones that will be split out, not the ones that will be left behind. If you select pages 3 to 5, the ZIP contains three files, one for each of those pages, and nothing else.

### Step 3: Check the count

The interface shows how many pages are selected. If the number does not match what you expect, clear the range box and start again; a stray comma or a range such as `5-3` is ignored rather than flagged.

### Step 4: Click Split PDF

The engine creates a new one-page document for every selected page, copies the page across, and adds it to a ZIP. The progress indicator runs while that happens. A 20-page file is done before you can read this sentence; 300 pages take ten to twenty seconds on a laptop.

### Step 5: Open the ZIP

The download is named `split_<your file>.zip`. Inside are files named `<your file>_page_001.pdf`, `_page_002.pdf` and so on, zero-padded so they sort correctly in any file manager. Your original PDF has not been changed.

> **Tip:** If what you really want is a single new PDF made of several pages, this is the wrong tool. [Extract PDF Pages](/en/extract-pdf-pages) uses the same thumbnails and range box but writes one combined file instead of a ZIP.

## What Happens to My File When I Split It?

The split is done by pdf-lib, a JavaScript PDF library that is loaded into the page the first time you use the tool. Your PDF is read with the browser's File API into the tab's memory. For each selected page, pdf-lib creates a fresh document, copies that page's content, fonts and images into it and serializes it to bytes. JSZip, another library running in the same tab, collects those byte arrays into an archive, and the browser offers the archive as a download. No server is involved at any point, which is why there is no upload progress bar and no queue.

You do not have to take that on trust. Open your browser's developer tools, select the Network tab, and run a split. You will see the page's own scripts and the two libraries load, plus a single anonymous page-view request, and then nothing while the split runs. No request carries your document.

For Canadian readers that distinction is practical, not theoretical. People split PDFs to send one page of a CRA notice of assessment to a mortgage broker, to pull a single T4 out of a payroll bundle, to separate an IRCC application into the forms a sponsor needs, or to send one lab result page from a referral package. A file that never leaves your laptop cannot be retained by a third party, so there is nothing for a privacy law to govern.

## How Do I Split a PDF by Page Range or into Chapters?

The range box accepts single pages and hyphenated ranges separated by commas. A few patterns cover most real jobs:

| What you want | Type this | What you get |
|---|---|---|
| Every page as its own file | leave all selected | N one-page PDFs |
| Only the signature page of a 12-page contract | `12` | one file |
| Pages 3 to 5 as separate files | `3-5` | three files |
| The cover plus the appendix of a report | `1, 40-48` | ten files |
| Odd pages only from a 10-page scan | `1, 3, 5, 7, 9` | five files |

Two things the tool does not do, so you can plan around them:

**It does not split every N pages into multi-page chunks.** If you need a 90-page manual cut into three 30-page files, run [Extract PDF Pages](/en/extract-pdf-pages) three times with `1-30`, `31-60` and `61-90`. Each run takes a few seconds.

**It does not keep selected pages together.** Every page in the selection becomes its own file. That is the right behaviour for invoices, receipts and slide handouts, where each page is a document in its own right, and the wrong one for chapters, which is again where Extract comes in.

How long a split takes depends mostly on page count and image weight:

| Document | Pages | Size | Laptop (2022) | Phone (2020) |
|---|---|---|---|---|
| Text-only report | 20 | 1 MB | under 2 s | 2–4 s |
| Scanned statements | 60 | 25 MB | 4–8 s | 15–30 s |
| Photo-heavy catalogue | 150 | 120 MB | 15–30 s | may run out of memory |
| Slide handout | 300 | 30 MB | 10–20 s | 40–90 s |

The ZIP is usually a little larger than the original, not smaller, because each one-page file carries its own copy of any shared fonts. A 5 MB document with an embedded font on every page can produce a 7–8 MB ZIP. That is expected, and [Compress PDF](/en/compress-pdf) is the fix if size matters.

## How Do I Split a PDF on iPhone, Android, Mac or Windows?

The page is the same everywhere; what changes is how you choose the file and where the ZIP lands.

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and pick the PDF from Files. Tap thumbnails to select pages (there is no Shift key, so use the range box for long runs). The ZIP saves to Files → Downloads; tap it once and iOS expands it into a folder of PDFs. Apple's Files app has no built-in split, although you can open a PDF in Preview-style quick look, long-press a page thumbnail and share just that page, which works for one page at a time.

**Android.** Chrome handles the picker and saves the ZIP to Downloads. Most file managers open ZIPs directly. Phones with 3 GB of RAM or less should stay under about 40–60 MB per split, because the source file, every one-page copy and the ZIP are all in memory at once.

**Mac.** Preview can do this without a website: open the PDF, show thumbnails, drag a page to the desktop and it becomes a one-page PDF. For two or three pages that is faster than any tool. For 50 pages it is 50 drags, and this page is the better option.

**Windows.** There is no built-in split. Printing a page range to Microsoft Print to PDF produces a single multi-page file, not separate pages, so for one-file-per-page output you need this tool or a desktop app.

**Chromebook.** Works as on any desktop Chrome. The ZIP opens in the Files app, which can browse inside archives without extracting them.

## When Should You Not Use This Tool?

- **You want several pages in one new file.** Use [Extract PDF Pages](/en/extract-pdf-pages). Split always produces one file per page.
- **The PDF asks for a password.** The engine cannot open it. Run it through Unlock PDF first.
- **You need the document outline or bookmarks preserved.** One-page files have no outline to carry. Keep the original for navigation and split a copy for distribution.
- **XFA forms.** Some older government and bank forms built in Adobe LiveCycle store their form in an XFA layer. Pages will split, but the interactive form may not render in the pieces. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) before you rely on the output.
- **Very large files on a phone.** A 200 MB, 400-page scan needs the original plus 400 copies plus a ZIP in memory. Use a laptop, or split the file in halves with Extract first.
- **Recurring batch jobs.** If you split the same report every Monday, a desktop tool with a command line will save you time; this page is built for one-off and occasional work.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The ZIP has every page even though I picked some | Check that the thumbnails are highlighted; clear the range box and retype it | An empty or unparseable selection falls back to "all pages" |
| The download is a ZIP and I wanted PDFs | Double-click (Windows/macOS) or tap (iOS/Android) the ZIP to unpack it | The browser can only deliver one download without prompting per file |
| Pages are numbered 001, 002 but my document starts at page 7 | The numbers are positions in the file, not printed page numbers | The tool counts physical pages; printed numbers are just ink on the page |
| Safari on iPhone reloads the page mid-split | Split fewer pages at a time or use a laptop | iOS gives each tab a memory budget and reloads it when exceeded |
| The split button does nothing | Wait for thumbnails to finish rendering, then click again | The button is active once the engine has parsed the file |
| A page comes out blank in its own file | Open the original at that page; if it is blank there too, delete it with Delete PDF Pages | Splitting copies exactly what is on the page, including nothing |
| The one-page files are bigger than expected | Normal for documents with embedded fonts; compress if needed | Each file carries its own copy of the shared font data |

## What Should I Do With the Split Pages?

- [Extract PDF Pages](/en/extract-pdf-pages) when you need a run of pages kept together in one PDF rather than one file each.
- [Merge PDF](/en/merge-pdf) to put a subset of the pieces back together in a new order.
- [Delete PDF Pages](/en/delete-pdf-pages) if the goal was only to remove a few pages; it is one step instead of split-then-merge.
- [Compress PDF](/en/compress-pdf) to shrink a heavy scanned page before emailing it.
- [Organize PDF](/en/organize-pdf) to reorder pages inside one document without splitting at all.

## The Bottom Line

Splitting a PDF is a copy operation: take each chosen page, put it in its own document, and hand the pieces back. This tool does exactly that in your browser, for free, with a thumbnail grid and a range box so you can pick pages precisely, and it packs the results into a ZIP because that is the only way a browser can give you fifty downloads at once. Preview on a Mac is quicker for one or two pages; a desktop app is the answer for scheduled batch jobs. For everything in between, add the file, select the pages, and click Split PDF.
