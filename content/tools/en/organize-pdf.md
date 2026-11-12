---
title: "Organize PDF Pages Free: Drag to Reorder, No Upload"
h1: "Organize PDF Pages"
lead: "Drag page thumbnails into the order you want and click Save. The new sequence is written in your browser; nothing is uploaded."
description: "Reorder PDF pages for free in your browser: drag thumbnails into a new order and click Save. Pages copied as-is, no quality loss, original untouched. No upload."
answer: "Add your PDF, drag the page thumbnails in the grid until they sit in the order you want, then click Save. A new PDF downloads with the pages in that sequence, copied without any change in quality. It is free, there is no account or watermark, and the file never leaves your device. The original stays as it was, so you can try a different order a minute later."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the reordering happens", "In your browser tab with pdf-lib. No file is uploaded."]
  - ["Maximum file size", "No fixed cap. 200 MB files work on a laptop; on a phone keep it under 50–80 MB, because the grid renders every page thumbnail in memory."]
  - ["Maximum pages", "No set maximum. Reordering 300 pages saves in 2–3 seconds; dragging in a 300-thumbnail grid is the slow part, so for very long files move only the pages that are out of place."]
  - ["What you can change", "Page order only. Rotation and deletion are separate tools (Rotate PDF, Delete PDF Pages); run them before or after."]
  - ["Input", ".pdf only. A file that asks for a password must be unlocked first."]
  - ["Output", "One PDF named organized_<your file>.pdf, with every page copied in the new order at original quality. The source file is not modified."]
  - ["What stays on your device", "The source PDF, the reordered PDF and your arrangement. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I reorder PDF pages for free?"
    a: "Open the tool, add the PDF, and drag the thumbnails in the grid until they read in the order you want; the position number under each one updates as you go. Click Save and the reordered PDF downloads. There is no fee, no sign-up and no watermark, and the work is done in your browser."
  - q: "Does reordering pages change their quality?"
    a: "No. Each page is copied into a new document exactly as it was, including fonts, images and vector graphics. Nothing is re-rendered or compressed, so file size stays about the same and text remains selectable."
  - q: "Can I move several pages at once?"
    a: "Not as a group; the grid moves one thumbnail per drag. For a block of pages that must move together, such as an appendix that belongs at the front, it is faster to extract the block with Extract PDF Pages and merge it back in the right place with Merge PDF. For a handful of misplaced pages, dragging them one by one is quick."
  - q: "How do I interleave odd and even pages from a two-sided scan?"
    a: "If your scanner produced all the odd pages followed by all the even pages, open the file here and drag each even page into its slot: page 2 goes after page 1, page 4 after page 3, and so on. For a 10-sheet document that is five drags. For a 50-sheet document, extract the two halves first so you can see them side by side."
  - q: "Can I rotate or delete pages while reordering?"
    a: "Not in this tool; it changes order only. Use Rotate PDF for a sideways page and Delete PDF Pages for one you want gone, before or after reordering. Each takes a few seconds and none of them re-renders the pages, so the sequence does not matter for quality."
  - q: "Will bookmarks and links still work after reordering?"
    a: "Links drawn on a page travel with it and still point to the page they targeted, wherever it now sits. The document outline (bookmarks) is not carried into the reordered file, because its entries refer to page positions that have changed."
  - q: "Can I reorder pages in a password-protected PDF?"
    a: "Not until it is unlocked. A PDF that asks for a password to open cannot be read by the engine; remove the password with a tool that knows it, then reorder. A PDF that opens freely but restricts editing usually works without an extra step."
  - q: "Is it safe to reorder confidential documents here?"
    a: "The file is read into your browser's memory, the pages are copied into a new document there, and the result is offered as a download from the same tab. No network request carries your document, which you can confirm in your browser's developer tools under Network. Close the tab and the memory is released."
---
## How Do I Reorder PDF Pages for Free?

Three actions, plus however long it takes you to drag. Fixing two swapped pages in a 20-page report takes about ten seconds.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The tool renders every page as a thumbnail in a grid, each with its current position number underneath. A 20-page document appears in a second; a 150-page scan takes five to eight seconds.

### Step 2: Drag the pages into order

Press and hold a thumbnail, drag it to its new spot, and release. The other pages shift to make room and the position numbers update. On a desktop, the zoom controls above the grid make thumbnails bigger when you need to read a heading, or smaller when you want to see sixty pages at once.

This is the step people get wrong: the final document follows the grid left to right, top to bottom. Scan the position numbers before saving, not the thumbnails, because two similar-looking pages are easy to confuse at small size.

### Step 3: Click Save

The engine copies each page into a new document in the order shown and downloads it as `organized_<your file>.pdf`. Twenty pages save in under a second; three hundred in two or three. Your original is unchanged.

> **Tip:** On a phone, press and hold for a moment before dragging; a quick swipe scrolls the grid instead of lifting the page.

## What Happens to My File When I Reorder It?

The reordering is done by pdf-lib, a JavaScript PDF library loaded into the page when you open the tool. Your PDF is read with the browser's File API into the tab's memory. When you click Save, the engine creates a new empty document, walks your arrangement from first to last, and copies each page object, with its fonts, images and annotations, into the new document in that order. The bytes are handed to the browser as a download. Nothing is sent anywhere, so there is no upload step and no queue.

You can check this in your browser's developer tools: open the Network tab and save a reordered file. You will see the page's scripts and the PDF library load, a single anonymous page-view request, and nothing while the save runs. No request carries your document.

The documents people reorder are usually assembled from several sources and often private: a mortgage application where the broker wants the notice of assessment before the pay stubs, an IRCC package whose checklist dictates a strict order, a patient chart scanned out of sequence, a court filing where the exhibits must follow the affidavit. Because the file never leaves your device, there is no third party holding a copy and nothing for a privacy law to govern.

## How Do I Fix a Scan That Came Out in the Wrong Order?

A few patterns account for most reordering jobs, and the grid handles each differently:

| Problem | Drags needed | Faster alternative for long files |
|---|---|---|
| Two pages swapped | 1 | none needed |
| One page scanned last that belongs first | 1 | none needed |
| Reverse order (last page first) throughout | n−1 for n pages | extract in reverse ranges and merge |
| Odd pages then even pages (two-sided scan) | n/2 | extract halves, then merge and interleave |
| Appendix at the front instead of the back | one per appendix page | extract the appendix, merge it after the body |
| Chapters out of sequence | one per page in each chapter | extract each chapter, merge in order |

For anything over about 15 drags, the extract-and-merge route is quicker: [Extract PDF Pages](/en/extract-pdf-pages) pulls each block out in document order, [Merge PDF](/en/merge-pdf) puts the blocks back in the sequence you choose, and this tool finishes with any single-page corrections. That combination also handles the case where a block must move as a unit.

How long the parts take on a 2022 laptop:

| Document | Pages | Size | Grid ready | Save |
|---|---|---|---|---|
| Lease with signature page in the wrong place | 18 | 1.5 MB | under 1 second | under 1 second |
| Two-sided scan, odd then even | 40 | 20 MB | 2–3 seconds | 1 second |
| Thesis with chapters out of order | 160 | 12 MB | 4–6 seconds | 1–2 seconds |
| Scanned patient chart | 300 | 90 MB | 10–15 seconds | 2–3 seconds |

File size after saving is within a few percent of the original; pages are copied, not re-encoded, so a 90 MB scan stays about 90 MB.

## How Do I Reorder PDF Pages on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and pick the file from Files. The grid shows two thumbnails per row; press and hold a page, then drag. The download appears in Files → Downloads. iOS can also reorder natively: open the PDF in Files, show the thumbnail sidebar and drag pages there. It works well for a few pages; the larger grid here is easier for twenty or more.

**Android.** Chrome's picker and Downloads folder handle it. Press and hold a thumbnail to lift it. Android has no built-in page reordering; Google Drive's viewer cannot do it either. Keep files under 50–80 MB on phones with 3 GB of RAM or less.

**Mac.** Preview reorders pages by dragging in the thumbnail sidebar, and it is already installed. The sidebar is a single column, so a 100-page document means a lot of scrolling; this page's grid shows dozens of pages at once, which is the main reason to use it on a Mac.

**Windows.** Windows has no built-in way to reorder PDF pages. Printing a page range to Microsoft Print to PDF cannot change order. A tool like this one, or a desktop editor, is required.

**Chromebook.** Works as on desktop Chrome; the result saves to Downloads or Google Drive.

## When Should You Not Use This Tool?

- **A block of pages has to move together.** Dragging one at a time is tedious beyond a dozen pages. Extract the block, then merge.
- **Pages need rotating or deleting too.** This tool changes order only. Use [Rotate PDF](/en/rotate-pdf) and [Delete PDF Pages](/en/delete-pdf-pages); they take seconds each.
- **You are combining files, not reordering one.** [Merge PDF](/en/merge-pdf) orders whole files; use it first, then come back here for page-level fixes.
- **The outline must survive.** Bookmarks are not carried into the reordered file. Keep the original if you rely on them.
- **Encrypted PDFs.** A file that needs a password to open must be unlocked first with a tool that knows the password.
- **XFA forms.** Government and bank forms built with Adobe LiveCycle store their form in an XFA layer tied to page positions; reordering can break the form. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) first.
- **300-page scans on a phone.** The grid renders every thumbnail. Use a laptop for heavy files.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| Dragging scrolls the page instead of moving the thumbnail | Press and hold for a moment before moving, especially on touch screens | A short hold distinguishes a drag from a scroll |
| The saved file is in the original order | Make sure you dropped the page, then click Save after rearranging | The order is captured when you click Save, not while dragging |
| Two pages look identical and I moved the wrong one | Zoom the grid and read the position numbers | Numbers track position; thumbnails only show appearance |
| Save is slow on a long file | Wait a few seconds; 300 pages take 2–3 seconds | Each page is copied with its resources |
| Bookmarks are gone | Expected; keep the original for navigation | The outline refers to page positions that have changed |
| Safari on iPhone reloads the page | Use a laptop for files over 50–80 MB | iOS limits tab memory and a large grid exceeds it |
| A page I dragged snapped back | Drop it fully inside the grid, not on the edge | Drops outside the grid are cancelled |

## What Should I Do After Reordering?

- [Rotate PDF](/en/rotate-pdf) to straighten a sideways page now that it is in the right place.
- [Delete PDF Pages](/en/delete-pdf-pages) to drop the blank or duplicate pages you noticed while dragging.
- [Merge PDF](/en/merge-pdf) to combine the reordered file with others into one package.
- [Compress PDF](/en/compress-pdf) if the finished scan is too large to send.
- [Sign PDF](/en/sign-pdf) to sign the package once the pages are in order.

## The Bottom Line

Reordering PDF pages is a copy in a new sequence, and that is all this tool does: render the pages so you can see them, let you drag them into place, and write a new file with every page intact. It is free, runs in your browser, and handles two swapped pages in ten seconds or a 300-page chart in a few minutes. Preview on a Mac and the Files app on iOS can do the same with a single-column sidebar; Windows and Android have nothing built in. For long moves, pair it with Extract and Merge; for everything else, drag, check the numbers, and click Save.
