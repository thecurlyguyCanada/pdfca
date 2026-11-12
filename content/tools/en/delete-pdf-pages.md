---
title: "Delete PDF Pages Free: Remove Pages Online, No Upload"
h1: "Delete PDF Pages"
lead: "Click the pages you want gone, press Remove Pages and download the shorter file. The pages are removed in your browser; nothing is uploaded."
description: "Delete pages from a PDF for free in your browser: click thumbnails or type 2, 5-7, click Remove Pages and download. Pages are fully removed. No upload."
answer: "Add your PDF, click the thumbnails of the pages you want to remove (hold Shift to select a run, or type 2, 5-7 in the range box), then click Remove Pages. The new PDF downloads in a second or two with those pages gone from the file, not just hidden. It is free, nothing is uploaded, and your original stays as it was. The only hard rule is that at least one page must remain."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the deletion happens", "In your browser tab, using pdf-lib. The file is never sent to a server."]
  - ["Maximum file size", "No fixed cap. 200 MB files work on a laptop; on a phone, 50–80 MB is a sensible ceiling because every page thumbnail is rendered in memory."]
  - ["Maximum pages", "No set maximum. A 500-page file shows 500 thumbnails and deletes in 2–4 seconds; the slow part is rendering the grid, not the deletion."]
  - ["Pages you can delete", "Any number, in any combination, as long as one page remains. Deleting every page is refused."]
  - ["Input", ".pdf only. Files that ask for a password must go through Unlock PDF first."]
  - ["Output", "One PDF named trimmed_<your file>.pdf with the chosen pages removed from the file structure. The remaining pages are untouched; the original file is not modified."]
  - ["What stays on your device", "The source PDF, the trimmed PDF and your selection. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I delete a page from a PDF for free?"
    a: "Open the tool, add the PDF, click the thumbnail of the page you want to remove so it shows the trash marker, and click Remove Pages. The shorter PDF downloads immediately. There is no fee, no account and no watermark, and the deletion runs inside your browser rather than on a server."
  - q: "Are the deleted pages really gone, or just hidden?"
    a: "They are gone. The engine removes the page objects from the document's page tree before saving, so a viewer cannot show them and a search cannot find them. Content that was shared between pages, such as an embedded font, stays because other pages still need it; that is normal and carries no page content."
  - q: "Can I delete multiple pages at once?"
    a: "Yes. Click as many thumbnails as you like, hold Shift and click a second thumbnail to select every page between the two, or type a list such as 2, 5-7, 12 in the range box. The counter shows how many pages are marked before you commit."
  - q: "Can I undo after downloading?"
    a: "Not inside the downloaded file, but you do not need to: the tool never changes your original, which is still on your device exactly as it was. Open the original again and redo the deletion with the right pages. Before you download, you can click a marked thumbnail a second time to unmark it."
  - q: "Does deleting pages reduce the file size?"
    a: "Usually by roughly the share of pages removed, if the pages carried their own images. Dropping 5 scanned pages from a 20-page, 20 MB scan saves about 5 MB. Deleting text pages from a document with one large embedded font saves little, because the font is shared by the pages that remain."
  - q: "Why does the page count in my viewer not match the thumbnails?"
    a: "The tool counts physical pages in the file; your viewer may display printed page numbers that start at a different value, such as a report whose cover is unnumbered and whose first chapter begins on page 3. Use the thumbnail positions, not the printed numbers, when typing a range."
  - q: "Can I delete pages from a password-protected PDF?"
    a: "Not until it is unlocked. A PDF that asks for a password to open cannot be read by the engine; remove the password with Unlock PDF first, then delete. A PDF that opens freely but restricts printing or copying usually works without any extra step."
  - q: "Is it safe to delete pages from confidential documents here?"
    a: "The file is read into your browser's memory, the pages are removed there, and the result is offered as a download from the same tab. No request carries your document, which you can confirm in your browser's developer tools under Network. Close the tab and the memory is released."
---
## How Do I Delete Pages from a PDF for Free?

Four actions. For a 30-page document the whole thing takes about fifteen seconds, most of it deciding which pages to drop.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The tool renders a thumbnail of every page so you can see what you are deleting, not just a page number. A 30-page text document appears in a second; a 100-page scan takes four or five seconds to fill the grid.

### Step 2: Mark the pages to remove

Click a thumbnail and it is marked with a trash indicator. Click it again to unmark it. For a run of pages, click the first, hold Shift and click the last; every page between them is marked. For pages scattered through a long file, type them in the range box, for example `2, 5-7, 12`, and the grid updates as you type.

This is the step people get wrong, in two ways. First, marked pages are the ones that will be removed, not kept; if you want to keep three pages out of forty, [Extract PDF Pages](/en/extract-pdf-pages) is the faster route. Second, ranges count physical pages from 1, so if your report's printed numbering starts on the third sheet, "page 10" in the range box is the sheet printed as page 8.

### Step 3: Check the count

The badge shows how many pages are selected. Zoom the grid if thumbnails are too small to tell a blank page from a nearly blank one; the zoom controls sit above the grid.

### Step 4: Click Remove Pages

The engine removes the marked pages from the document and saves a new file named `trimmed_<your file>.pdf`. Deleting 5 pages from a 30-page file takes under a second; deleting 200 pages from a 500-page file takes two or three seconds. Your original is unchanged.

> **Tip:** Deleting every page is refused, because an empty PDF is not a valid document. If you find yourself marking all but one page, you want Extract PDF Pages, not Delete.

## What Happens to My File When I Delete Pages?

The work is done by pdf-lib, a JavaScript PDF library loaded into the page when you open the tool. Your file is read with the browser's File API into the tab's memory. The engine walks the list of marked pages from last to first (so the indices do not shift as it goes), removes each page object from the document's page tree, and serializes the document again. The browser hands you the bytes as a download. There is no server, so there is no upload, no queue and no copy of your file anywhere but your own device.

If you want evidence rather than assurance, open your browser's developer tools, choose the Network tab and delete a page. You will see the page's scripts and the PDF library load, a single anonymous page-view request, and nothing while the deletion runs. No request carries your PDF.

Deleting pages is often the moment a document becomes sensitive: the pages you remove are the ones you do not want someone to see. Canadians use this to strip a SIN-bearing cover sheet before forwarding a CRA letter, remove other family members' pages from a shared IRCC package, drop the pages of a medical record that are not relevant to a new specialist, or take the payment details out of a lease before giving a copy to a roommate. Because the file never leaves your device, there is nothing for a privacy law to govern and no third party to trust.

## How Do I Remove Blank, Duplicate or Sensitive Pages Quickly?

The thumbnail grid is the tool for all three, but each has its own pattern.

**Blank pages from a double-sided scan.** Scanners that duplex a single-sided original produce a blank even page after every real one. Type the even pages, `2, 4, 6, 8…`, in the range box, then glance at the grid to confirm every marked thumbnail really is blank; a page with only a footer looks blank at small size. Zoom in before you commit.

**Duplicates.** Office copiers often scan a page twice when sheets stick together. Look for two identical thumbnails side by side and mark the second one.

**Sensitive pages before sharing.** Mark the pages, remove them, then open the trimmed file and search for a word that only appeared on the removed pages. If the search finds nothing, the content is gone.

How long each job takes:

| Job | Pages in file | Pages removed | Time to mark | Time to process |
|---|---|---|---|---|
| Drop a cover sheet | 12 | 1 | 2 seconds | under 1 second |
| Remove blank backs from a duplex scan | 40 | 20 | 10 seconds with a range | 1 second |
| Cut two chapters from a manual | 180 | 60 | 15 seconds with Shift-click | 1–2 seconds |
| Remove other people's pages from a package | 300 | 240 | 30 seconds | 2–4 seconds |

Note the last row: when you are removing most of a document, Extract PDF Pages lets you pick the handful you keep instead, which is quicker and less error-prone.

The trimmed file is usually smaller by about the proportion of pages removed if those pages had their own images. Scanned pages each carry their own image, so removing half the pages of a 20 MB scan gives a file near 10 MB. Text pages share fonts, so deleting them saves less than you might expect.

## How Do I Delete PDF Pages on iPhone, Android, Mac or Windows?

The page works the same everywhere; the built-in alternatives differ.

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and choose a file from Files. Tap thumbnails to mark pages; there is no Shift key, so use the range box for long runs. The download lands in Files → Downloads. iOS can also do this natively: open the PDF in Files, tap the thumbnail sidebar, long-press a page and choose Delete. That is fine for one or two pages; the grid here is faster for a dozen.

**Android.** Chrome's file picker and Downloads folder handle it. On phones with 3 GB of RAM or less, keep files under 50–80 MB; the grid renders every thumbnail in memory. Android has no built-in page deletion, though Google Drive's viewer can print a page range to a new PDF, which achieves the same thing indirectly.

**Mac.** Preview deletes pages well: show thumbnails, select pages with Cmd-click and press Delete, then save. It is installed and free. This page adds a range box and a bigger grid, which matter when the file has 200 pages.

**Windows.** Windows has no built-in page deletion. Printing a page range to Microsoft Print to PDF works as a workaround for contiguous ranges but is clumsy for scattered pages, and it re-renders the document. This tool keeps the pages byte-for-byte.

**Chromebook.** Works as on desktop Chrome; files save to Downloads or Google Drive.

## When Should You Not Use This Tool?

- **You want to keep a few pages, not remove many.** Use [Extract PDF Pages](/en/extract-pdf-pages); marking 3 pages to keep is quicker than marking 97 to delete.
- **The information you want gone is on a page you need.** Deleting a page removes everything on it. To hide part of a page you need a redaction tool, which is a different job; [Crop PDF](/en/crop-pdf) hides margins but does not remove the underlying content.
- **Encrypted PDFs.** A file that needs a password to open must be unlocked with Unlock PDF first.
- **XFA forms.** Some government and bank forms built with Adobe LiveCycle keep their form in an XFA layer; deleting pages can leave the form layer referring to pages that no longer exist. Flatten or print to PDF first, or read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf).
- **Bookmarks that must stay accurate.** The outline is kept, but bookmarks that pointed at deleted pages will point nowhere or at the wrong page. Re-check them in your viewer.
- **Hundreds of files with the same page to remove.** A desktop tool with a command line does repetitive jobs better; this page is for one file at a time.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The wrong page disappeared | Reopen the original and count thumbnail positions, not printed numbers | The range box counts physical pages from 1 |
| Remove Pages is greyed out | Mark at least one page, and leave at least one unmarked | The tool refuses to produce an empty PDF |
| A marked page will not unmark | Click it again; on a phone, tap once and wait for the indicator | Each click toggles the page; a double tap toggles it twice |
| Thumbnails are too small to judge | Use the zoom buttons above the grid | Thumbnails render at a higher resolution when zoomed |
| The trimmed file is barely smaller | Expected for text pages; run Compress PDF if size matters | Fonts and resources are shared by the remaining pages |
| Safari on iPhone reloads the page | Use a laptop, or split the file first | iOS limits tab memory, and a 400-thumbnail grid exceeds it |
| Download does not appear | Check the browser's download list or Files → Downloads | Some browsers block automatic downloads until allowed |

## What Should I Do With the Trimmed PDF?

- [Extract PDF Pages](/en/extract-pdf-pages) when it is easier to pick the pages you keep.
- [Organize PDF](/en/organize-pdf) to change the order of the remaining pages.
- [Compress PDF](/en/compress-pdf) if the shorter file is still too large to email.
- [Merge PDF](/en/merge-pdf) to combine the trimmed file with others into one package.
- [Rotate PDF](/en/rotate-pdf) to fix a sideways scan while you are at it.

## The Bottom Line

Deleting PDF pages is a small, precise job: show every page, mark the ones to go, remove them from the file, save. This tool does it in your browser, free, with a thumbnail grid, Shift-click and a range box so you can mark one page or two hundred, and it removes the pages from the file rather than hiding them. Preview on a Mac and the Files app on iOS are fine for a page or two; use this page when there are many, when you need a range, or when you would rather the document never left your device.
