---
title: "Compress PDF Free: Scans Up to 98% Smaller, No Upload"
h1: "Compress PDF"
lead: "Pick a level, click Compress PDF and see the before and after size. Scans shrink the most; text PDFs keep their text. Everything runs in your browser."
description: "Compress a PDF free in your browser. On our test scans Balanced cut 55–93% and Extreme 71–98%; text PDFs 7–17%. Grayscale option, no upload."
answer: "Add your PDF, pick Good, Balanced or Extreme and click Compress PDF. Good is lossless and took 7–17% off most of our digital test PDFs. Balanced and Extreme redraw each page as a JPEG: on our 200–300 DPI test scans they cut 55–93% and 87–98%. If the result is not smaller, the tool keeps your original and tells you. Nothing is uploaded."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab. pdf-lib rewrites the file; for Balanced and Extreme, pdf.js first draws each page on a canvas. Nothing is uploaded."]
  - ["Levels", "Good: lossless re-save, text stays selectable. Balanced: each page becomes a 150 DPI JPEG (quality 0.7). Extreme: 100 DPI JPEG (quality 0.45)."]
  - ["Grayscale", "Optional checkbox for Balanced and Extreme. Cut another 6–20% on colour photos and charts in our tests; no gain on black-and-white or grey pages."]
  - ["If the result is larger", "Your original is kept, nothing is downloaded, and the tool says so and suggests another level."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. Our largest test, a 43.1 MB 14-page scan, took 3 seconds at Balanced in desktop Chromium. Phones have less memory, so split very large files first."]
  - ["Speed", "Good took under 2 seconds on every test file. Balanced took 7 seconds on a 120-page text report and 13 seconds on a 66-page scan on our test machine."]
  - ["Input", ".pdf only. A password-protected file cannot be read; open it with its password and save an unprotected copy first."]
  - ["Output", "One PDF named compressed_<your file>.pdf with the same page count and page sizes. Your original is not changed."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How much smaller will my PDF get?"
    a: "It depends on what is inside. On our test files, scans made at 200–300 DPI got 55–93% smaller at Balanced and 71–98% at Extreme, and photo or screenshot PDFs 92–98%. Digital text PDFs got 7–17% smaller at Good, with one office export at 70%. The result screen shows the exact before and after size."
  - q: "Why did the tool say my PDF is already compact?"
    a: "Because the compressed copy came out larger than your file, so the tool kept your original. This happens with Balanced and Extreme on text PDFs: a JPEG of a page of text weighs far more than the text. Our 120-page text report went from 241 KB to 28 MB at Balanced. Use Good for text documents."
  - q: "Will compression make my PDF blurry?"
    a: "Good changes nothing visible. Balanced redraws pages at 150 DPI, which reads cleanly on screen and prints well at letter size. Extreme uses 100 DPI and low JPEG quality: body text stays readable on screen, but fine print, thin lines and signatures soften. Open the result and check a page with small print before you send it."
  - q: "Can I still select and search text after compressing?"
    a: "Only with Good. Balanced and Extreme turn every page into a picture, so text cannot be selected, searched or read by a screen reader, and links, bookmarks and form fields are dropped. If you need a small file that stays searchable, compress with Good and then split it or remove pages."
  - q: "Does the Grayscale option make a big difference?"
    a: "Only on colour pages. In our tests it took another 20% off a photo PDF (1.73 MB to 1.38 MB at Balanced) and 9–14% off reports and screenshots with colour charts. On scans that are already grey or black and white it changed nothing, because there was no colour to remove."
  - q: "Can I compress a PDF twice to make it smaller?"
    a: "It rarely helps. A second Balanced pass re-encodes JPEGs that are already JPEGs, so quality drops while the size barely moves. Compress the original once at a lower level instead, and if Extreme on the original is still too big, split the file by size or remove pages."
  - q: "Is it safe to compress tax, immigration or medical documents here?"
    a: "Yes, the file never leaves your device. It is read into your browser's memory, rewritten there and offered back as a download from the same tab. You can confirm it in your browser's developer tools under Network while compressing: no request carries the file. Closing the tab releases the memory."
---
## Which Compression Level Should I Pick?

Pick by what is inside the PDF, not by how small you want it. The three levels do different things, and the wrong one can make a file bigger.

| Level | What it does | Best for | Measured on our test files | Text selectable? |
|---|---|---|---|---|
| **Good** | Lossless re-save: packs objects into compressed streams, clears metadata | Word, Google Docs and bank PDFs, forms, anything with real text | 7–17% smaller on most digital PDFs; 0–0.5% on scans | Yes |
| **Balanced** | Redraws every page as a 150 DPI JPEG at quality 0.7 | Scans, phone photos, image-heavy reports you may print | 55–93% smaller on 200–300 DPI scans; 92–94% on photo pages | No |
| **Extreme** | Redraws every page as a 100 DPI JPEG at quality 0.45 | Upload limits where every kilobyte counts and the file is read on screen | 71–98% smaller on scans; 97–98% on photo pages | No |

Balanced is selected when the page opens. Two cases surprise people. First, a scan that was already made at 150 DPI barely shrinks at Balanced (our 10-page example went from 4.2 MB to 4.1 MB) because the page is redrawn at the same resolution; Extreme took it to 1.2 MB. Second, Balanced and Extreme make text PDFs much larger. The tool catches this: when the result is not smaller, you see "Your original is kept" with both sizes, and nothing is downloaded.

## How Much Smaller Did Our Test Files Get?

We ran 25 test PDFs through this page in desktop Chromium on November 12, 2026: scans, photo pages, office exports, a real IRS form and long text reports. These are the results for the main document types. "Larger" means the tool kept the original.

| Test file | Original | Good | Balanced | Extreme |
|---|---|---|---|---|
| 12-page text report | 24 KB | 21 KB (−13%) | Larger (2.7 MB) | Larger (1.1 MB) |
| 120-page text report | 241 KB | 214 KB (−12%) | Larger (28 MB) | Larger (12 MB) |
| 27-page LibreOffice export | 480 KB | 144 KB (−70%) | Larger (8 MB) | Larger (3.4 MB) |
| IRS W-4 form, 5 pages | 204 KB | Larger (208 KB) | Larger (1.8 MB) | Larger (744 KB) |
| 3-page scan, 200 DPI | 746 KB | 745 KB (0%) | 329 KB (−56%) | 97 KB (−87%) |
| 10-page scan, 200 DPI | 2.5 MB | 2.5 MB (0%) | 1.1 MB (−55%) | 342 KB (−87%) |
| 10-page grey scan, 200 DPI | 7.0 MB | 7.0 MB (0%) | 2.4 MB (−66%) | 812 KB (−89%) |
| 6-page colour scan, 300 DPI | 10.1 MB | 10.1 MB (0%) | 1.3 MB (−87%) | 454 KB (−96%) |
| 14-page colour scan, 300 DPI | 43.1 MB | 43.1 MB (0%) | 3.0 MB (−93%) | 1.0 MB (−98%) |
| 10-page grey scan, 150 DPI | 4.2 MB | 4.2 MB (0%) | 4.1 MB (−2%) | 1.2 MB (−71%) |
| 66-page black-and-white scan | 3.4 MB | 3.4 MB (−0.5%) | Larger (17.7 MB) | Larger (7.4 MB) |
| 8 full-page photos | 31.0 MB | 31.0 MB (0%) | 1.7 MB (−94%) | 640 KB (−98%) |
| 16-page report with photos and charts | 4.0 MB | 4.0 MB (0%) | 2.2 MB (−45%) | 916 KB (−78%) |

Times on our test machine: Good finished every file in under 2 seconds. Balanced took 3 seconds for the 43.1 MB scan, 7 seconds for the 120-page report and 13 seconds for the 66-page scan. Phones are slower; we did not time them.

## How Do Scanned, Searchable and Digital PDFs Compress Differently?

**Scanned PDFs** are one picture per page. If the scanner saved those pictures in colour or grey at 200–300 DPI, Balanced and Extreme shrink them dramatically, because the tool redraws them at a lower resolution. Good cannot help: it does not touch images. The exception is a black-and-white (1-bit) scan, the kind office copiers make in "text" mode: those are already stored very efficiently, and our 66-page example grew five times at Balanced. Keep those as they are, or split them.

**Searchable PDFs** are scans with an invisible text layer added by OCR. They compress like scans at Balanced and Extreme, but the text layer is lost, so the result is no longer searchable. If search matters, compress first with Balanced, then run [OCR PDF](/en/ocr-pdf) on the smaller file to add the text layer back.

**Digital PDFs** come straight from Word, Google Docs, LibreOffice, a bank or a government form. Their text is stored as text, which is already compact. Good is the only level that helps, usually by 7–17%, sometimes far more on exports from older software (70% on our LibreOffice file). Balanced made every text-only file in our tests larger, by 2 to 360 times; Extreme shrank only one, a nearly empty 2-page letter, by 7%.

## How Do I Compress a PDF to a Specific Size?

The tool works with levels, not a target-size box, so use these per-page figures from our scans to predict the result. At Balanced a scanned page came out at 110–410 KB; at Extreme, 30–125 KB. Multiply by your page count, and check the real size on the result screen.

### Under 2 MB

Balanced is usually enough for up to about 5 scanned pages. In our tests it took a 6-page 300 DPI colour scan from 10.1 MB to 1.3 MB, while 10- to 14-page scans landed between 1.1 and 3.0 MB. For those, Extreme got every one under 1.3 MB.

### Under 1 MB

Use Extreme for scans of up to about 10 pages: 6 of our 8 test scans went under 1 MB. The two that did not were the 14-page 300 DPI scan (1.0 MB, just over) and a 10-page scan already at 150 DPI (1.2 MB).

### Under 500 KB

Extreme on short scans: every test scan of 6 pages or fewer went under 500 KB (97 KB for 3 pages, 454 KB for 6 colour pages at 300 DPI), and so did one light 10-page scan (342 KB). For longer files, split them.

### Under 200 KB

Realistic for 1 to 3 scanned pages at Extreme: our 1-page scan came out at 33 KB and the 3-page one at 97 KB. A short digital text document is often already this small; use Good, which keeps it sharp.

If even Extreme is too big, do not compress again. [Split PDF by Size](/en/split-pdf-by-size) cuts the file into parts that each fit a limit, and [Delete PDF Pages](/en/delete-pdf-pages) removes blank backs and cover sheets.

## Should I Use the Grayscale Option?

Tick **Grayscale** when the colour does not matter and the pages contain colour photos, charts or highlighting. It removes colour from each redrawn page before the JPEG is made. In our tests it cut the output of the photo PDF from 1.73 MB to 1.38 MB at Balanced (another 20%), the report with colour charts by 9%, and screenshots by 14%. On scans that were already grey or black and white, it made no difference at all. It is greyed out for Good, which never changes images. Leave it off for anything where colour carries meaning: a stamp, a signature in blue ink, a colour-coded chart.

## What Are the Upload Limits, and Which Level Fits Each?

### Gmail (25 MB)

Gmail attaches files up to 25 MB; anything bigger becomes a Google Drive link. Most PDFs already fit. A large phone or office scan may not: our 43.1 MB 14-page scan came down to 3.0 MB at Balanced, which is plenty of room for other attachments.

### Outlook.com (20 MB)

Outlook.com caps attachments at 20 MB. Same advice as Gmail: Balanced for scans and photo PDFs, Good for everything else.

### Job portals and LinkedIn Easy Apply (2 MB)

LinkedIn Easy Apply accepts résumés up to 2 MB, and many applicant tracking systems cap uploads at 2 to 5 MB. A résumé exported from Word or Google Docs is almost always far below that; use Good so recruiters' software can still read the text. If you scanned a signed reference letter or a transcript, Balanced brings a few pages under 2 MB.

### IRCC applications (about 4 MB per document)

IRCC's online portals accept about 4 MB per document, so check the limit shown next to each upload slot. Scanned passports, police certificates and proof-of-funds statements are the usual problem. Balanced kept every 200–300 DPI test scan of 10 pages or fewer under 2.5 MB, and Extreme kept every test scan of 10 pages or fewer under 1.3 MB. Open the result and check that small print, stamps and signatures are legible before you upload.

### USCIS online filing (under 6 MB per file)

USCIS online filing requires each file to be under 6 MB. Balanced is the safe first choice for scanned evidence; if a long scan is still over, use [Split PDF by Size](/en/split-pdf-by-size) and upload the parts.

### WhatsApp (documents up to 2 GB)

WhatsApp sends documents up to 2 GB, so size rarely blocks a PDF there. Data does: a 43 MB scan costs the recipient 43 MB of mobile data. Balanced makes it a 3 MB download.

## What Happens to My File When I Compress It?

With Good, pdf-lib loads the PDF into your browser's memory, clears the title, author, subject, keywords, creator, producer and XMP metadata, and saves it again with object streams. Text, links, bookmarks and form fields are kept. With Balanced or Extreme, pdf.js, the engine Firefox uses to display PDFs, draws each page on an invisible canvas; the canvas becomes a JPEG and pdf-lib builds a new PDF with one JPEG per page, at the original page size.

The file never leaves your device. That matters for what Canadians compress most: T4 slips and receipts for the CRA, passport scans for IRCC, medical referrals. You can check it in your browser's developer tools under Network while you compress.

## When Should You Not Use This Tool?

- **Fillable forms you still need to fill or sign.** Balanced and Extreme drop form fields and digital signatures. Use Good, or fill and sign first.
- **Accessibility.** A redrawn PDF has no text, so screen readers cannot read it. Keep a Good copy for anyone who needs one.
- **Print-quality output.** 150 DPI suits a letter-size page; it does not suit a poster or a plan. Keep the original for printing.
- **Password-protected PDFs.** The tool cannot read them. Open the file with its password and save an unprotected copy first (in Chrome: Print, then Save as PDF).

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| Still too big after Extreme | Split it with Split PDF by Size, or delete pages | Fewer pages per file is the only lever left once quality is at its lowest |
| Still too big after Balanced | Run the original again with Extreme | Extreme output was about a third of Balanced on our scans |
| "Your original is kept" | Use Good for text PDFs; leave black-and-white scans as they are | Text and 1-bit scans are smaller than any JPEG of them |
| Balanced barely shrank a scan | Use Extreme | The scan was already near 150 DPI, so Balanced redrew it at the same resolution |
| Text can no longer be selected | Compress the original with Good, or run OCR PDF on the result | Balanced and Extreme turn pages into pictures |
| Small print or a signature is blurry | Use Balanced instead of Extreme | 150 DPI holds fine detail that 100 DPI softens |
| Form fields disappeared | Use Good, or fill and sign before compressing | Lossy levels rebuild the PDF from page pictures |
| "This PDF is password-protected" | Open it with the password, save an unprotected copy, compress that | An encrypted file cannot be read without its password |
