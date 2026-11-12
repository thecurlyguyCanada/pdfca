---
title: "Merge PDF Files Free: Combine 2–50 PDFs, No Upload"
h1: "Merge PDF Files"
lead: "Drop in two or more PDFs, drag them into order and download one file. Everything runs in your browser; nothing is uploaded."
description: "Merge 2 to 50 PDF files into one for free, in about 10 seconds, without uploading anything. Drag to reorder, keep original quality, no account or watermark."
answer: "Add your PDFs with the button or by dragging them onto the page, drag the thumbnails into the order you want, and click Merge PDFs. The combined file downloads to your device a few seconds later. It is free, there is no watermark, no account, and the files never leave your computer: the merge runs inside your browser tab. The practical limit is your device's memory, not a file count."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the merge happens", "In your browser tab, using pdf-lib. No file is uploaded to any server."]
  - ["Maximum file size", "No fixed cap. It is bounded by your device's memory: a combined 200 MB is routine on a laptop, 50–80 MB is a safer ceiling on an older phone."]
  - ["Number of files", "No set maximum. 50 files or 1,000 pages merge without trouble; beyond that, merge in two batches."]
  - ["Input", ".pdf only. Convert images or Word files first with JPG to PDF or Word to PDF, then merge."]
  - ["Output", "One PDF, pages in the order you set, original resolution and fonts kept. Your source files are not changed."]
  - ["What stays on your device", "The source files, the merged file and your ordering. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded. You can switch off Wi-Fi and still merge."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I merge two PDF files into one for free?"
    a: "Open the merge tool, add both files, drag the second one below the first if it is not already there, and click Merge PDFs. The single combined PDF downloads immediately. There is no charge, no sign-up and no watermark, and the two originals stay untouched on your device."
  - q: "Can I merge PDFs without Adobe Acrobat?"
    a: "Yes. Acrobat's Combine Files feature needs a paid subscription; this tool does the same job in the browser using the open-source pdf-lib library. Acrobat is still the better choice if you need to merge hundreds of files on a schedule or apply Bates numbering."
  - q: "Does merging reduce the quality of my PDF?"
    a: "No. Merging copies the pages as they are, including fonts, vector graphics and embedded images, so nothing is re-compressed. If the merged file is too big to email, run it through Compress PDF afterwards, which is where any quality trade-off would happen."
  - q: "Can I put the pages in a specific order?"
    a: "Yes. After adding the files, drag the thumbnails into the order you want; the merged PDF follows that order exactly. To reorder individual pages inside a file, use Organize PDF on the merged result."
  - q: "Is it safe to merge confidential documents here?"
    a: "The files are read into your browser's memory and the merged PDF is built there too; no network request carries your document. You can confirm this in your browser's developer tools under Network while merging. Close the tab and the files are gone."
  - q: "Why does the merged file open with the wrong page size?"
    a: "The merge keeps every page at its original size, so a letter-size scan followed by an A4 export will show two sizes in the viewer. That is expected; use Crop PDF or re-export the odd file at the right size before merging if a uniform size matters."
  - q: "How many PDF files can I merge at once?"
    a: "There is no set limit in the tool. The ceiling is memory: 50 files or around 1,000 pages merge comfortably on a laptop. On a phone, keep the total under about 50–80 MB or merge in two rounds."
  - q: "Can I merge a password-protected PDF?"
    a: "Not directly. A PDF that asks for a password to open has to be unlocked first; use Unlock PDF with the password you know, then merge. PDFs with only an owner password (printing or copying restricted) usually merge without any extra step."
---
## How Do I Merge PDF Files into One for Free?

The whole job takes four actions and, on a normal laptop, under ten seconds for a handful of files.

### Step 1: Add your PDFs

Click **Select files** or drag the PDFs straight onto the drop zone. You can add them all at once with Ctrl/Cmd-click in the file picker, or add more later; nothing is processed yet, so the order you add them in does not matter.

### Step 2: Put them in order

Each file appears as a thumbnail. Drag the thumbnails left or right until they read in the order you want the final document to flow. The first thumbnail becomes page 1 of the result.

This is the step people skip. The tool merges in the order shown, not the order you selected the files in, and not alphabetically. Check the strip before you click.

### Step 3: Remove anything that does not belong

Hover a thumbnail and use the remove control to drop a file you added by mistake. If a file has pages you do not want, merge first and then open the result in [Delete PDF Pages](/en/delete-pdf-pages); it is faster than editing each source.

### Step 4: Click Merge PDFs

The button reads the files, copies every page into a new document and hands the browser a download. A 20-page, 5 MB result appears almost instantly; a 300-page, 150 MB bundle can take 10–30 seconds on a laptop while the progress indicator runs.

### Step 5: Check the download

The merged PDF lands in your Downloads folder with a new name. Open it, scroll to the join between files, and confirm the order. Your original files are unchanged.

> **Tip:** Name the output before you merge by renaming the first file; most viewers display the file name, not the PDF's internal title.

## What Happens to My File When I Merge It?

Nothing leaves your device. The page loads a JavaScript PDF engine (pdf-lib) once, then your files are read into the tab's memory with the browser's File API. The merge creates a brand-new PDF object in memory, copies the pages across, serializes it and offers it as a download. There is no upload step because there is no server doing the work.

If you want to verify that rather than take it on trust: open your browser's developer tools, choose the Network tab, and merge. You will see the page's own scripts and fonts load, and a single anonymous page-view ping, and nothing else. No request carries your PDF.

That matters for the documents Canadians merge most: CRA notices of assessment, T4 and T5 slips, IRCC immigration packages, medical referrals and legal disclosures. A file that never leaves your laptop cannot be retained, scanned for advertising or leaked from someone else's storage. Close the tab and the memory is released.

## How Do I Merge PDFs in a Specific Order or Add a Cover Page?

The thumbnail strip is the only control you need, but two patterns come up often enough to spell out.

**A cover page or table of contents first.** Export the cover as its own one-page PDF (Word, Pages and Google Docs all do this), add it with the rest, and drag it to the far left. It becomes page 1.

**Alternating files.** If you have a scan of the odd pages and a scan of the even pages, merging them gives you all odd pages then all even pages. Merge them, then use [Organize PDF](/en/organize-pdf) to interleave; it has a page-level grid for exactly this.

**Forty receipts for an expense claim.** Add them all, sort by dragging in date order, merge, then run [Compress PDF](/en/compress-pdf) so the result fits an email limit.

How long it takes depends on page count and image weight, not on the number of files:

| What you are merging | Typical total size | Time on a 2022 laptop | Time on a 2020 phone |
|---|---|---|---|
| 5 text-only PDFs, 40 pages | 1–3 MB | under 2 seconds | 2–4 seconds |
| 12 scanned letters, 60 pages | 20–40 MB | 3–6 seconds | 8–15 seconds |
| 3 photo-heavy reports, 200 pages | 100–150 MB | 10–25 seconds | may fail on 2 GB RAM phones |
| 50 one-page invoices | 5–15 MB | 3–5 seconds | 6–12 seconds |

The result is never smaller than the sum of its parts, because pages are copied as-is. If you need a smaller file, compression is a separate step.

## How Do I Merge PDFs on iPhone, Android, Mac or Windows?

The tool is the same page everywhere; what differs is how you pick files.

**iPhone and iPad.** Open the page in Safari, tap the drop zone, and choose from Files or Photos (photos are not PDFs; convert them with [JPG to PDF](/en/jpg-to-pdf) first). iOS lets you select several files at once in the Files picker. The download appears in Files → Downloads. Apple's own shortcut is to select PDFs in Files, long-press and choose Create PDF, which also works and needs no website; it does not let you reorder before combining.

**Android.** Chrome handles multi-select in the file picker. Downloads go to the Downloads folder. Phones with 2–3 GB of RAM should keep merges under about 50–80 MB.

**Mac.** Preview can merge: open the first PDF, show thumbnails, and drag other PDFs into the sidebar. It is a good tool and already installed. This page is faster when you have many files, because you can see and reorder all of them at once.

**Windows.** Windows has no built-in merge. Printing several documents to Microsoft Print to PDF produces separate files, so a tool like this one, or a desktop app, is required.

**Chromebook.** Works as on any desktop Chrome; files save to the Downloads folder or Google Drive depending on your setting.

## When Should You Not Use This Tool?

Be clear about what a browser merge cannot do.

- **Encrypted PDFs that require a password to open.** The engine cannot read them. Remove the password with Unlock PDF first.
- **PDFs with XFA forms** (some government and bank forms built in older Adobe tools). They merge, but the interactive form layer may not survive. Flatten or print them to PDF first, or read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf).
- **Very large bundles on a phone.** A 300 MB merge needs that much memory plus headroom; a mid-range phone will reload the tab. Use a laptop or merge in batches.
- **Mixed page sizes that must be uniform.** Merging keeps each page's size. Fix sizes before merging.
- **Hundreds of files on a schedule.** A desktop tool with a command line or a watched folder is the right answer for recurring batch jobs.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The button does nothing | Wait for the progress indicator; on large files the engine is still reading | Reading 100 MB+ into memory takes several seconds before the merge starts |
| Pages are in the wrong order | Drag the thumbnails and merge again | The merge follows the strip, not the selection order |
| The merged file is huge | Run it through Compress PDF | Merging never recompresses images; compression is a separate step |
| Safari on iPhone reloads the page | Merge fewer files per round, or use a laptop | iOS gives a tab limited memory and reloads it when exceeded |
| A file was skipped | Check whether it asks for a password when opened | Encrypted files cannot be read until unlocked |
| Download does not appear | Check the browser's download bar or Files → Downloads on iOS | Some browsers block automatic downloads until you allow them for the site |

## What Should I Do With the Merged PDF?

- [Compress PDF](/en/compress-pdf) when the result is over an email limit (most are 20–25 MB).
- [Organize PDF](/en/organize-pdf) to reorder, rotate or interleave individual pages.
- [Delete PDF Pages](/en/delete-pdf-pages) to drop blank or duplicate pages at the joins.
- [Sign PDF](/en/sign-pdf) to add a signature to the combined package before sending.
- [Split PDF](/en/split-pdf) to do the reverse and pull a section back out later.

## The Bottom Line

Merging PDFs is a local operation: read pages, copy pages, write one file. This tool does exactly that inside your browser, free, with drag-to-reorder and no upload, and it handles 50 files or 1,000 pages on an ordinary laptop. Preview on a Mac is a fine alternative for two or three files; Acrobat is the answer for scheduled batch jobs. For everything in between, add your files, check the order, and click Merge PDFs.
