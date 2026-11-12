---
title: "Alternate and Mix PDF Free: Interleave Front and Back Scans"
h1: "Alternate and Mix PDF Pages"
lead: "Combine a PDF of front sides and a PDF of back sides into one document in the right order: front 1, back 1, front 2, back 2. It runs in your browser; nothing is uploaded."
description: "Interleave front and back scans into one PDF for free: reversed back sides handled, unequal page counts flagged, lossless page copy, nothing uploaded."
answer: "Drop the front sides PDF in the left box and the back sides PDF in the right box, check the New order preview, and click Mix pages. The result, mixed.pdf, alternates front 1, back 1, front 2, back 2. Back sides are in reverse order is on by default, which is right when you turned the stack over to scan the backs. Pages are copied without loss; 320 pages took under half a second in our tests. Nothing is uploaded."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab, with pdf-lib. Neither file is sent to a server."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. Two scans totalling 53 MB mixed in 0.4 seconds in our tests on a computer. On an older phone, very large scans can make the tab reload."]
  - ["Pages", "No set maximum. 200 + 120 pages became one 320-page file in 0.45 seconds in our tests."]
  - ["Input", "Exactly two .pdf files: front sides and back sides. The same file can go in both boxes."]
  - ["Output", "One PDF named mixed.pdf. Its size is the two inputs added together. You click Download; nothing downloads by itself."]
  - ["Order options", "Back sides reversed (on by default) or in order; Swap front and back"]
  - ["Kept and not kept", "Kept: page content, text, images, links, rotation and page size. Not kept: bookmarks, title and author, fillable form fields, attachments."]
  - ["What stays on your device", "Both originals, the mixed file and your settings. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your files (the PDF engine loads with the first file)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I combine separate front and back scans into one PDF?"
    a: "Put the front sides PDF in the Front sides box and the back sides PDF in the Back sides box, leave Back sides are in reverse order ticked if you flipped the stack to scan the backs, check the New order chips, and click Mix pages. Then click Download to save mixed.pdf."
  - q: "Why is Back sides are in reverse order on by default?"
    a: "Because that is what a single-sided feeder produces. When you turn the whole stack over and feed it again, the last sheet goes through first, so the back sides arrive last page first. The tool reads that file from its end. Untick it if your back sides are already in page order."
  - q: "What happens if the two files have different page counts?"
    a: "Pages alternate while both files have pages, then the extra pages of the longer file are added at the end. An amber warning tells you how many, for example 5 front and 4 back. A mismatch usually means a blank page was skipped by the scanner, so check before you send."
  - q: "Does mixing reduce the quality of the scans?"
    a: "No. Each page is copied as it is, with nothing redrawn or recompressed, so scans keep their resolution and digital text stays selectable. The output size is simply the two files added together; run it through Compress PDF afterwards if it is too large to upload."
  - q: "Can I mix more than two PDFs, or take two pages at a time?"
    a: "No. The tool takes exactly two files and alternates one page from each. For three or more files, or a custom pattern, merge them with Merge PDF and arrange the pages by hand in Organize PDF."
  - q: "I put the files in the wrong boxes. Do I have to start over?"
    a: "No. Click Swap front and back and the two files change places. The New order chips update straight away, so you can see the change before you click Mix pages."
  - q: "Will the scanner's blank back pages be removed?"
    a: "No. The tool cannot detect blank pages. Keep every back side when scanning, so the two files line up, then remove the blanks from the mixed file with Delete PDF Pages."
  - q: "Are my documents uploaded to mix them?"
    a: "No. Both files are read into your browser's memory, the new PDF is built there, and you save it with the Download button. No network request carries your pages, and closing the tab clears them from memory."
---
## How Do I Alternate Front and Back Pages for Free?

Five steps. The mixing itself takes well under a second for most documents.

### Step 1: Add the front sides

Drop the PDF of the front sides (pages 1, 3, 5 and so on) on **Drop the front sides PDF** in the box titled **Front sides (odd pages)**, or click to choose it. The box shows the file name and page count, with an ✕ to remove it.

### Step 2: Add the back sides

Drop the PDF of the back sides on **Drop the back sides PDF** in **Back sides (even pages)**. Shortcut: select both files at once and drop them on the front box; the first goes to Front, the second to Back. If they land the wrong way round, click **Swap front and back**.

### Step 3: Decide whether the back sides are reversed

**Back sides are in reverse order** is ticked when the page opens. Leave it on if you scanned the backs by turning the whole stack over and feeding it again: the scanner then gives them last page first. Untick it if the back sides are already in page order, for example because you turned each sheet over by hand on a flatbed or a phone.

### Step 4: Check the New order chips

This is the step people get wrong. Under **New order**, the first eight pages of the result are listed, for example "1. Front p. 1 · 2. Back p. 5 · 3. Front p. 2 · 4. Back p. 4", then "+ N more". With five sheets and the reverse option on, page 2 of the result should be back page 5 of the second file, because that file starts at the last sheet. If the chips do not match how you scanned, change the option now rather than after downloading.

### Step 5: Click Mix pages, then Download

The button stays disabled until both files are loaded. A progress line counts the pages, then the result card shows `mixed.pdf`, its size and the page count. Click **Download** to save it. Your two originals are not changed.

## Should "Back Sides Are in Reverse Order" Be On or Off?

It depends only on how the back sides were scanned:

| How you scanned the back sides | Order of the back sides file | Setting |
|---|---|---|
| Single-sided document feeder: turned the whole stack over and fed it again | Last sheet first | On (default) |
| Flatbed: turned each sheet over in place, starting from sheet 1 | Sheet 1 first | Off |
| Phone scanning app: flipped each sheet in order | Sheet 1 first | Off |
| Phone: turned the stack over and photographed from the top down | Last sheet first | On |
| Two separate documents to interleave, such as English and French versions | In order | Off |

If you are not sure, leave it on, look at the New order chips and open the first two pages of the result. A wrong setting is obvious at page 2: the back of the last sheet appears where the back of the first should be.

## What Happens When the Page Counts Don’t Match?

The tool alternates pages while both files still have pages, then adds the leftover pages of the longer file at the end, in the order the setting gives them. An amber warning appears before you mix, for example: "The files don’t have the same number of pages (5 front, 4 back). The extra page from the front sides will be added at the end."

That is exactly right for one common case: a last sheet printed on one side only, whose blank back you did not scan. Five fronts and four backs come out as F1 B1 F2 B2 F3 B3 F4 B4 F5.

It is wrong for another: a scanner that skips blank pages automatically. If a sheet in the middle had a blank back and the scanner dropped it, every back after that point shifts by one. Switch off blank-page removal in the scanner settings, scan both sides of every sheet, mix, and then remove blanks with [Delete PDF Pages](/en/delete-pdf-pages).

## How Do I Scan a Double-Sided Document With a Single-Sided Scanner?

1. Put the stack face up in the feeder and scan it. That is your front sides file.
2. Take the stack out of the output tray, turn the whole stack over without reshuffling it, and scan it again. That is your back sides file.
3. Mix the two here with **Back sides are in reverse order** ticked.

Keep the scanner's blank-page skipping off for both passes. Save both scans as PDF; if your scanner saved images, convert them with [JPG to PDF](/en/jpg-to-pdf) first. Using a phone instead of a scanner? [Scan to PDF](/en/scan-to-pdf) can capture each side, and you mix the two files afterwards.

## Use Cases by Situation

### A double-sided lease or contract on a single-sided office scanner

Many office and home multifunction printers feed only one side. Scan the signed lease face up, flip the stack, scan again, and mix: you get the pages in reading order without rescanning sheet by sheet.

### Double-sided documents for an IRCC application

Police certificates, transcripts and translated civil documents are often printed on both sides. Mix the two passes into one file per document. The result is the two scans added together, so check it against IRCC's usual limit of about 4 MB per document and run it through [Compress PDF](/en/compress-pdf) if it is over.

### Statements and slips for a CRA upload

Bank statements and notices printed double-sided can go into CRA My Account (or Represent a Client) as one file per document once mixed. If a statement ends on a single-sided page, the extra page warning is expected.

### An English and a French version, page by page

Have the same notice or handout in both official languages, one PDF each? Put the English file in Front and the French file in Back, untick the reverse option, and the result alternates English page 1, French page 1, and so on. That is handy for a bilingual review copy.

### Two sets of pages from a phone

If you photographed all the fronts first, then all the backs, the two files mix the same way. Whether the reverse option is on depends on the order you photographed the backs; the table above covers both cases.

## Alternate and Mix, Merge PDF or Organize PDF?

| Job | Use |
|---|---|
| Two files, alternate one page from each | Alternate and Mix PDF |
| Several files, one after another | [Merge PDF](/en/merge-pdf) |
| Any custom order, page by page | [Organize PDF](/en/organize-pdf) |
| Three or more files interleaved, or two pages at a time | Merge PDF, then Organize PDF |

## When Should You Not Use This Tool?

- **Your scanner already scans both sides.** A duplex scan is in order already; there is nothing to interleave.
- **You need blank pages removed automatically.** The tool does not detect blanks. Remove them afterwards with Delete PDF Pages.
- **More than two inputs, or a pattern other than one-and-one.** Use Merge PDF and then Organize PDF.
- **Bookmarks, the document title or fillable fields must survive.** None of them is kept: form fields still show but can no longer be filled.
- **A file is password-protected.** Remove the password in the app that created it, then mix.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| Page 2 is the back of the last sheet | Untick Back sides are in reverse order and mix again | Your back sides were already in page order |
| Every back page is one sheet off | Rescan with blank-page skipping turned off | A skipped blank back shifts all the backs after it |
| Fronts and backs are swapped | Click Swap front and back | The files went into the wrong boxes |
| Mix pages is greyed out | Add a file to both boxes | The button needs a front file and a back file |
| Amber warning about extra pages | Check whether a page is missing from one scan | The leftover pages go at the end, which is right only for a one-sided last sheet |
| "This PDF is password-protected" | Remove the password in the app that created the file | An encrypted file cannot be read until it is unlocked |
| The mixed file is too big to upload | Run it through Compress PDF | Pages are copied as they are, so the size is both files added together |
| Form fields cannot be filled any more | Fill and flatten the form first, then mix | Fillable fields are not carried into the new document |

## The Bottom Line

Alternate and Mix PDF turns two single-sided scans into one double-sided document in reading order, in your browser and without touching image quality. Scan the fronts, flip the stack, scan the backs, leave the reverse option on, and check the New order chips before you click Mix pages.
