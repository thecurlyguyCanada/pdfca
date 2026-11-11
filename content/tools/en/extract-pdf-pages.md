---
title: "Extract Pages from a PDF Free: Pick Pages, Get One New PDF (2026)"
h1: "How to Extract Pages from a PDF into a New File"
lead: "Select the pages you need, click Extract Pages and download a new PDF containing only those pages. Runs in your browser; nothing is uploaded."
description: "Extract pages from a PDF for free in your browser: click thumbnails or type 3-7, 12, then Extract Pages. Nothing is uploaded."
answer: "Add the PDF, select the pages you want by clicking thumbnails or typing a range such as 3-7, 12, and click Extract Pages. A new PDF downloads containing only those pages, in document order, at full quality. It is free, there is no account or watermark, and the file never leaves your device. The original is not changed, so you can extract a different set from it a minute later."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the extraction happens", "In your browser tab with pdf-lib. No file is uploaded."]
  - ["Maximum file size", "No fixed cap. Extracting 10 pages from a 200 MB file works on a laptop; on a phone keep the source under 50–80 MB, since the thumbnail grid holds every page in memory."]
  - ["Maximum pages", "No set maximum for the source or the selection. Pulling 50 pages from a 600-page manual takes 2–3 seconds once the thumbnails have drawn."]
  - ["Page order", "Extracted pages keep their order in the original. Reorder afterwards with Organize PDF if you need a different sequence."]
  - ["Input", ".pdf only. A file that asks for a password must be unlocked first with Unlock PDF."]
  - ["Output", "One PDF named extracted_<your file>.pdf, containing only the selected pages with their fonts, images and links. The source file is not modified."]
  - ["What stays on your device", "The source PDF, the extracted PDF and your selection. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I extract certain pages from a PDF for free?"
    a: "Open the tool, add your PDF, click the thumbnails of the pages you want or type a range such as 3-7, 12 in the range box, and click Extract Pages. A new PDF with only those pages downloads at once. There is no fee, no sign-up and no watermark, and the extraction runs in your browser rather than on a server."
  - q: "What is the difference between extracting and splitting a PDF?"
    a: "Extract gives you one new PDF containing the pages you chose, kept together. Split gives you a separate one-page PDF for every page, packed in a ZIP. Use Extract for a chapter, a form or a set of exhibits that should stay in one file; use Split when every page is its own document, like a stack of invoices."
  - q: "Can I extract pages in a different order than the original?"
    a: "Not in this tool: the pages come out in the order they appear in the source, regardless of the order you clicked them. Extract first, then open the result in Organize PDF, which has a drag-and-drop grid for reordering. The two steps together take under a minute."
  - q: "Does extracting pages lower their quality?"
    a: "No. Each page is copied into the new document with its fonts, vector graphics and images intact. Nothing is re-rendered or compressed, so a 300-dpi scan stays at 300 dpi and text remains selectable and searchable."
  - q: "Can I extract pages from a password-protected PDF?"
    a: "Not until it is unlocked. A PDF that asks for a password when opened cannot be read by the engine; remove the password with Unlock PDF first, then extract. A PDF that opens without a password but restricts copying usually works without any extra step."
  - q: "Will links, bookmarks and form fields survive extraction?"
    a: "Links and form fields drawn on the extracted pages come with them. Links that pointed to pages you did not extract will point nowhere. The document outline (bookmarks) is not carried into the new file, because most of its entries would refer to missing pages."
  - q: "Is it safe to extract pages from confidential documents here?"
    a: "The file is read into your browser's memory, the pages are copied into a new document there, and the result is offered as a download from the same tab. No network request carries your document, which you can confirm in your browser's developer tools under Network. Close the tab and the memory is released."
  - q: "How many pages can I extract at once?"
    a: "As many as you like, from one page to all but one. The practical limit is memory for the source file, not the number of pages you select: a 600-page, 150 MB manual needs a laptop, while a 40-page report is fine on any phone."
---
## How Do I Extract Pages from a PDF for Free?

Four actions. For a typical job, pulling a 6-page section out of a 60-page report, it takes about twenty seconds.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The tool draws a thumbnail of every page. A 60-page text document appears in a second or two; a 200-page scan takes six to ten seconds to fill the grid.

### Step 2: Select the pages you want to keep

Click a thumbnail to select it; click again to deselect. For a run of pages, click the first, hold Shift and click the last. For scattered pages, type them in the range box, for example `3-7, 12, 15-16`, and the highlighted thumbnails update as you type. The counter shows how many pages are selected.

This is the step people get wrong: selected pages are the ones that go into the new file, not the ones that are removed. If you are selecting most of the document to get rid of a few pages, [Delete PDF Pages](/en/delete-pdf-pages) is the shorter route.

### Step 3: Click Extract Pages

The engine creates a new document, copies the selected pages into it in their original order and saves it as `extracted_<your file>.pdf`. Ten pages from a 100-page file take under a second; fifty pages from a 600-page manual take two or three seconds.

### Step 4: Check the result

Open the download and scroll. The pages should be exactly the ones you highlighted, in document order. Your original file has not been changed, so if you missed one, go back and extract again.

> **Tip:** The range box counts physical pages from 1. If your document's printed numbering starts on the third sheet, printed page 10 is physical page 12. Check the thumbnails, not the printed numbers.

## What Happens to My File When I Extract Pages?

The extraction is done by pdf-lib, a JavaScript PDF library that is loaded into the page when you open the tool. Your PDF is read with the browser's File API into the tab's memory. The engine creates an empty document, then for each selected page copies the page object and everything it references (fonts, images, annotations) into the new document, and serializes the result. The browser hands you the bytes as a download. There is no server, so no upload, no queue and no copy of your document anywhere but your own device.

You can verify this in your browser's developer tools: open the Network tab and run an extraction. You will see the page's scripts and the PDF library load, a single anonymous page-view request, and nothing while the extraction runs. No request carries your file.

The reason to care is the kind of document people extract from. A 40-page CRA notice where the bank only wants the summary page. An IRCC application where the sponsor needs the three pages that concern them and nothing about the rest of the family. A medical record where a new clinic needs the lab results, not the psychiatric history. An expense report where accounting wants the receipts, not the itinerary. Extracting on your own device means the pages you did not share were never anywhere they could be seen, and there is nothing for a privacy law to govern.

## How Do I Extract a Page Range or Scattered Pages into One PDF?

The range box accepts single pages and hyphenated ranges separated by commas, and you can mix it with clicking. Common patterns:

| What you need | Type or click | Result |
|---|---|---|
| One chapter, pages 23 to 41 | `23-41` | a 19-page PDF |
| The signature page and the schedule | `12, 30-32` | a 4-page PDF |
| Odd pages of a 10-page duplex scan | `1, 3, 5, 7, 9` | a 5-page PDF |
| Everything except pages 5 and 6 | click 1, Shift-click 4, click 7, Shift-click last | the rest, in order |
| The first and last page only | `1, 60` (for a 60-page file) | a 2-page PDF |

Two behaviours to plan around:

**Order is the document's, not yours.** Typing `30, 12` produces page 12 then page 30. To change the sequence, open the result in [Organize PDF](/en/organize-pdf), which exists for exactly this.

**Pages are copied, not moved.** The source keeps all its pages. To both pull pages out and remove them from the source, extract first, then run [Delete PDF Pages](/en/delete-pdf-pages) on the original with the same range.

How long the whole job takes depends on how heavy the source file is, because the grid has to render every page before you can select:

| Source document | Pages | Size | Thumbnails ready (2022 laptop) | Extraction |
|---|---|---|---|---|
| Lease agreement | 24 | 2 MB | 1 second | under 1 second |
| Scanned medical record | 120 | 60 MB | 5–8 seconds | 1 second |
| Technical manual | 600 | 150 MB | 20–40 seconds | 2–3 seconds |
| Course notes export | 300 | 15 MB | 8–12 seconds | 1–2 seconds |

The extracted file is roughly the size of its pages' share of the source, plus any fonts those pages use. Pulling 5 scanned pages from a 60 MB, 120-page scan gives a file of about 2.5 MB.

## How Do I Extract PDF Pages on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and pick the PDF from Files. Tap thumbnails to select; there is no Shift key, so use the range box for runs. The download goes to Files → Downloads. iOS has no native "extract pages" command, though you can open a PDF in Files, pick pages in the thumbnail sidebar and share them, which creates a new PDF of those pages. It works for a few pages at a time.

**Android.** Chrome's picker and Downloads folder handle it. Google Drive's viewer can "print" a page range to a new PDF, which achieves extraction for contiguous ranges but re-renders the pages; this tool copies them as they are. Keep source files under 50–80 MB on phones with 3 GB of RAM or less.

**Mac.** Preview does this well: select pages in the thumbnail sidebar and drag them to the desktop, or print the selection to PDF. Dragging creates a new PDF of exactly those pages at full quality. For scattered pages across a long document the range box here is quicker, but Preview is a fine answer if you are already on a Mac.

**Windows.** Printing a page range to Microsoft Print to PDF is the only built-in option. It handles contiguous ranges, re-renders the pages (text usually stays selectable, but file size and fonts can change) and cannot easily do scattered pages. This tool is the better choice for anything beyond a simple range.

**Chromebook.** Works as on desktop Chrome; the result saves to Downloads or Google Drive.

## When Should You Not Use This Tool?

- **You want one file per page.** Use [Split PDF](/en/split-pdf); Extract always produces one combined PDF.
- **You want to remove a few pages, not keep a few.** Use [Delete PDF Pages](/en/delete-pdf-pages); it is the same grid with the opposite meaning.
- **The order must change.** Extract keeps document order. Follow up with [Organize PDF](/en/organize-pdf).
- **Encrypted PDFs.** A file that needs a password to open must go through Unlock PDF first.
- **XFA forms.** Government and bank forms built with Adobe LiveCycle store their form in an XFA layer that refers to the full document; extracted pages may show the static artwork without the fields. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) first.
- **You need the bookmarks.** The outline is not carried over. Keep the original for navigation.
- **A 150 MB manual on a phone.** The grid renders every page before you can select. Use a laptop for heavy sources.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The wrong pages came out | Compare thumbnail positions with your range; printed page numbers may differ | The range box counts physical pages from 1 |
| Extract Pages is inactive | Select at least one page | The tool refuses to create an empty PDF |
| The pages are in the wrong order | Open the result in Organize PDF and drag | Extraction keeps document order by design |
| I got a ZIP instead of a PDF | You are on the Split tool; switch to Extract | Split produces one file per page, Extract produces one file |
| Thumbnails take a long time to appear | Wait; a 600-page file needs 20–40 seconds | Every page is rendered so you can see what you are selecting |
| A link in the extracted file goes nowhere | Expected if its target page was not extracted | Internal links point to pages by reference, and the page is gone |
| Safari on iPhone reloads the page | Use a laptop for sources over 50–80 MB | iOS limits tab memory and the grid exceeds it |

## What Should I Do With the Extracted Pages?

- [Organize PDF](/en/organize-pdf) to put the extracted pages in a new order.
- [Merge PDF](/en/merge-pdf) to combine the extract with pages from other documents.
- [Compress PDF](/en/compress-pdf) if the extract is a heavy scan that needs to fit an upload limit.
- [Rotate PDF](/en/rotate-pdf) to fix a sideways page before you send it.
- [Sign PDF](/en/sign-pdf) to sign the page you just pulled out.

## The Bottom Line

Extracting pages is the cleanest way to share part of a document: the pages you choose are copied, unchanged, into a new PDF, and everything else stays behind on your device. This tool does it in your browser, free, with a thumbnail grid, Shift-click and a range box for precise selection, and it never touches the original. Preview on a Mac does the same job well; Windows and Android have only re-rendering workarounds. Use this page when you need a specific set of pages, in one file, without the rest of the document going anywhere.
