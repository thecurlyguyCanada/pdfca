---
title: "Split PDF by Size Free: Parts Under 4 MB for IRCC, No Upload"
h1: "Split PDF by File Size"
lead: "Pick a maximum size, such as 4 MB for IRCC or 20 MB for Outlook, and cut your PDF into parts that each fit. It runs in your browser; nothing is uploaded."
description: "Split a PDF into parts under a size limit for free: 4 MB for IRCC, 20 MB Outlook, 25 MB Gmail or your own. Lossless, every part measured, no upload."
answer: "Add the PDF, pick a maximum size per part (4 MB is selected, for IRCC), and click Split PDF. A 46.6 MB, 200-page scan became 12 parts under 4 MB in 1.4 seconds in our tests. Each part is saved and measured before it is kept, so every part really is under the limit, counting 1 MB as 1,000,000 bytes. Pages are copied as they are, with no loss of quality. The one exception: a single page bigger than the limit gets its own part and a warning, and needs Compress PDF."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab, with pdf-lib, plus JSZip to bundle the parts. The PDF is never sent to a server."]
  - ["Size presets", "1, 2, 4 (IRCC), 5, 10, 20 (Outlook) and 25 MB (Gmail), or Custom from 0.1 to 2,000 MB. 1 MB counts as 1,000,000 bytes, the stricter reading."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 46.6 MB, 200-page scan split in 1.4 seconds in our tests on a computer. On an older phone, very large files can make the tab reload."]
  - ["Pages", "No set maximum. A 400-page report split in 3.4 seconds in our tests."]
  - ["Input", "One .pdf file. Password-protected PDFs must be opened and saved without the password first."]
  - ["Output", "yourfile-part1.pdf, yourfile-part2.pdf… in one yourfile-split.zip, or each part on its own. A file that fits in one part downloads as a single PDF."]
  - ["Quality", "Lossless: pages, fonts and images are copied byte for byte. Nothing is recompressed."]
  - ["Not carried into the parts", "Bookmarks, fillable form fields, attachments, and links that point to a page in another part"]
  - ["What stays on your device", "The original, the parts and your settings. The site records only an anonymous page view."]
  - ["Works offline?", "Mostly. The PDF engine loads when you add your file and the ZIP builder the first time you get two or more parts, so run one split while online."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I split a PDF into smaller files by size for free?"
    a: "Open Split PDF by Size, add the file, pick a maximum size per part such as 4 MB, and click Split PDF. Download the ZIP or each part on its own. It is free, with no account and no watermark, and the PDF never leaves your device."
  - q: "Is every part really under the limit I chose?"
    a: "Yes, with one exception. Each candidate part is actually saved and measured, and the tool keeps the longest run of pages whose saved size fits. The exception is a single page bigger than the limit on its own: it gets its own part, marked with a warning."
  - q: "Does a megabyte mean 1,000,000 or 1,048,576 bytes here?"
    a: "The limit uses 1,000,000 bytes, the stricter of the two, so a part passes whichever definition the website you upload to uses. The parts list shows sizes the way your computer does, so a part under 4 MB shows as 3.81 MB or less."
  - q: "Does splitting by size reduce quality?"
    a: "No. Pages are copied exactly as they are, with the same fonts and images, checked byte for byte in our tests. Splitting never shrinks a page; if a page is too big on its own, Compress PDF is the tool that trades quality for size."
  - q: "Why do the parts add up to more than the original file?"
    a: "Fonts and images shared by many pages are stored once in the original but must be included in every part that uses them. The total can therefore be larger. It can also be smaller, because unused data is dropped: a 369 KB report became three parts totalling 270 KB."
  - q: "What happens to bookmarks, form fields and links?"
    a: "Bookmarks and fillable form fields are not carried over; fields still show what was typed in them but can no longer be edited. Links between pages work only when both pages land in the same part; links pointing to another part are removed."
  - q: "Can I choose exactly where each part starts?"
    a: "No. This tool decides the cut points from the size limit and keeps pages in order. To split at chapters or chosen page numbers, use Split PDF, which cuts by page ranges instead of by size."
  - q: "Will a 25 MB part go through Gmail?"
    a: "Probably not. Email services count attachments after encoding, which adds about a third, so a 25 MB file becomes roughly 33 MB in the message. For Gmail, a custom size of about 18 MB keeps each encoded attachment under the 25 MB limit."
---
## How Do I Split a PDF by Size for Free?

Four steps. The split itself usually takes a second or two, even for a large scan.

### Step 1: Add the PDF

Drop the file on **Drop your PDF here**, or click to choose it. The card shows the file name, size and page count, with **Choose another file** to swap it. If the file is already under the limit you choose, the tool says so, for example "This PDF is 24 KB, already under 1 MB. No need to split it."

### Step 2: Choose the maximum size per part

Under **Maximum size per part**, pick a preset: **1 MB**, **2 MB**, **4 MB · IRCC** (selected when the page opens), **5 MB**, **10 MB**, **20 MB · Outlook** or **25 MB · Gmail**. For anything else, pick **Custom** and type a number between 0.1 and 2000; both "1.5" and "1,5" work.

This is the step people get wrong for email. The tip under the chips explains why: email services count attachments after encoding, which adds about a third. A part exactly at the email limit will bounce. Pick the next smaller preset, or a custom size about three quarters of the limit.

### Step 3: Click Split PDF

The button reads "Splitting…" and a progress line counts the work, for example "40 of 200 pages placed · 3 parts so far". Then "Preparing the download…" while the parts are bundled.

### Step 4: Check the parts list and download

The result card shows `yourfile-split.zip` ("ZIP with 12 PDFs") with a **Download** button. Below it, every part is listed with its name, pages and size, for example "pp. 1–17 · 3.72 MB", and its own download button, which is handy when a portal wants one file per upload. Parts are numbered `yourfile-part1.pdf`, `yourfile-part2.pdf` and so on (`part01` once there are ten or more). If the whole file fits in one part after saving, you get a single PDF, no ZIP.

## How Does It Make Sure Each Part Fits?

A size limit cannot be met by guessing from page counts, because one photo page can weigh more than fifty text pages. So the tool measures. For each part it estimates how many pages should fit, builds that part as a real PDF and checks its saved size, then adds or removes pages until it finds the longest run of pages that still fits. Every part you download is the actual file that was measured.

Pages stay in their original order and are copied byte for byte: no recompression, no change in quality. The document title and author are copied into every part. Here is what that gave on our test files:

| File | Limit | Result |
|---|---|---|
| 200-page scan, 46.6 MB | 4 MB | 12 parts, each just under 4 MB, in 1.4 seconds |
| 10.6 MB colour scan, 6 pages | 5 MB | 3 parts of 2 pages, about 3.5 MB each |
| 4.2 MB report, 16 pages | 1 MB | 8 parts of 2 pages, about 525 KB each |
| 45.2 MB scan at 300 dpi, 14 pages | 4 MB | 14 one-page parts, about 3.2 MB each, in 1.5 seconds |
| 32.5 MB photo PDF, 8 pages | 2 MB | 8 one-page parts, all over 2 MB, with a warning |

The last row is the exception. When a single page is bigger than the limit by itself, splitting cannot help: that page gets its own part, the row is marked in amber, and a warning such as "Page 7 is bigger than 4 MB on its own" links to [Compress PDF](/en/compress-pdf). Compress the file, then split again.

## How Do I Split a PDF for IRCC's 4 MB Limit?

IRCC's online application usually accepts files of up to about 4 MB per document, and scanned bank statements, passports or employment records easily pass that.

1. Keep **4 MB · IRCC** selected and click **Split PDF**.
2. Check the upload slot first. If it accepts several files, upload the parts in order; the numbering keeps them straight.
3. If the slot accepts only one file, splitting is the wrong tool. Compress the document instead, so one file fits.

Since each part is under 4,000,000 bytes, it passes the limit whether the portal counts in decimal or binary megabytes. A 200-page scan of 46.6 MB became 12 parts between 3.73 and 3.98 million bytes in our tests.

## Use Cases by Situation

### A long PDF over Outlook.com's 20 MB attachment limit

Pick **20 MB · Outlook**, or better a custom 15 MB to allow for encoding. Send each part in its own email; two parts in one message count together against the limit.

### Six months of statements for a mortgage broker

Bank statements downloaded as one large PDF often exceed a broker's portal or email limit. Split at 10 MB and send the parts in order, named part1, part2 and so on.

### A scanned document for a job portal with a 2 MB cap

Many application portals cap uploads at 2 MB. If the parts come out as single pages flagged over the limit, the scan resolution is the problem; compress it first.

### A tribunal or court filing with a per-file limit

Electronic filing systems often set a maximum per file. Split at that number and check that each part starts where you expect, since the cut points follow size, not section breaks.

## When Should You Not Use This Tool?

- **When the portal takes only one file.** Splitting gives you several. Use [Compress PDF](/en/compress-pdf) to make one file smaller.
- **To cut at chapters or chosen pages.** Use [Split PDF](/en/split-pdf), which splits by page ranges.
- **When a single page is over the limit.** The tool never shrinks pages. Compress first.
- **When bookmarks or fillable fields matter.** Neither carries into the parts.
- **To rejoin parts later.** That is [Merge PDF](/en/merge-pdf).
- **On a password-protected PDF.** Open it with its password in your reader, save or print an unprotected copy, then split that copy.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| A part is marked in amber with a warning | Compress the PDF, then split again | That page alone is bigger than the limit; splitting cannot shrink a page |
| An email bounced even though the part fits the limit | Choose a smaller size, about three quarters of the email limit | Attachments grow by about a third when encoded for email |
| The parts add up to more than the original | Nothing to fix; or compress the original before splitting | Shared fonts and images are copied into every part that uses them |
| Bookmarks or form fields are missing in the parts | Keep the original for those; fill and flatten forms before splitting | Bookmarks and fields are not carried into the parts |
| "Enter a size between 0.1 and 2000 MB." | Type a number in that range | Custom sizes outside 0.1 to 2,000 MB are refused |
| "This PDF is password-protected" | Open it with the password in your reader, save an unprotected copy, then split | An encrypted file cannot be read until it is opened |
| "already under" message | Upload the file as it is | It already fits the limit you chose |

## The Bottom Line

Split PDF by Size cuts a PDF into consecutive parts that each fit a limit you choose, measures every part before it keeps it, and copies pages without any loss, all in your browser. Allow for email encoding, check whether the upload slot takes more than one file, and compress first when a single page is too big.
