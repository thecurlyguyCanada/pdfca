---
title: "Watermark PDF Free: Add DRAFT or CONFIDENTIAL, No Upload"
h1: "Add a Text Watermark to a PDF"
lead: "Stamp DRAFT, CONFIDENTIAL or your own text across the pages of a PDF, with a live preview. It runs in your browser; nothing is uploaded."
description: "Add a text watermark to a PDF for free: DRAFT, CONFIDENTIAL or your own words, diagonal or tiled, opacity, colour and pages. Live preview, no upload."
answer: "Add the PDF, pick DRAFT or type your own text, adjust size, opacity, angle, colour and layout while the preview updates, and click Add watermark. A 400-page report was watermarked in under a second in our tests, and the file size barely changed. French accents work; emoji and Chinese or Arabic characters are left out with a warning. The watermark is a separate text layer that a PDF editor can remove, so run the result through Flatten PDF if it must stay."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no daily cap, and no watermark of ours on your file"]
  - ["Where it runs", "In your browser tab, with pdf-lib (drawing) and pdf.js (preview). The PDF is never sent to a server."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 45 MB scan was watermarked in 0.3 seconds in our tests on a computer. On an older phone, very large files can make the tab reload."]
  - ["Pages", "All pages or a list such as 1-3, 5. A 400-page report took 0.9 seconds in our tests."]
  - ["Text", "One line, up to 80 characters, in Helvetica Bold. Latin letters with French accents, digits, common punctuation and € work; emoji, Chinese, Japanese and Arabic characters are left out."]
  - ["Options", "Fit to page or a fixed size (6–400 pt), opacity 5–100%, diagonal (45°) or horizontal, grey, red or blue, once centred or tiled"]
  - ["Input", "One .pdf file. Password-protected PDFs must be opened and saved without the password first."]
  - ["Output", "yourfile-watermarked.pdf, about the same size as the original. You click Download; your original is not changed."]
  - ["What stays on your device", "The original, the watermarked file and your settings. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your file (the PDF engine loads with the first file)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I add a watermark to a PDF for free?"
    a: "Open Watermark PDF, add the file, keep DRAFT or type your own text, check the preview and click Add watermark, then Download. It is free, with no account and no extra branding, and the file never leaves your device while the watermark is added."
  - q: "Can the watermark be removed?"
    a: "Yes, by someone with a PDF editor, because it is a separate text layer on top of the page. To bake it into the page, run the watermarked file through Flatten PDF and choose Flatten to images; the text then becomes part of each page picture."
  - q: "Can I use French accents or bilingual text?"
    a: "Yes. Accented capitals such as É, À and Ç draw correctly, so BROUILLON, SPÉCIMEN or DRAFT / BROUILLON all work. Characters outside the built-in PDF font, such as emoji or Chinese characters, are listed under the text box and left out of the watermark."
  - q: "Can I watermark only some pages?"
    a: "Yes. Choose Only these pages and type a list such as 1-3, 5, or an open range such as 8- for page 8 to the end. The preview shows the first page you selected, and the other pages are left exactly as they were."
  - q: "Will the watermark cover my text?"
    a: "It is drawn on top of the page, but at the default opacity of 25% the text underneath stays easy to read. Lower the opacity for dense pages, or raise it to 100% for a solid stamp. Form fields, if any, still display above the watermark."
  - q: "Can I add a logo or image as a watermark?"
    a: "No, this tool adds text only. To place a logo, stamp or signature image on pages, use Add Image to PDF, which positions a picture where you want it on the page."
  - q: "Does the watermark make the file bigger?"
    a: "Hardly. The watermark is stored once per page size and reused on every page, so a 400-page report with a tiled pattern went from 370 KB to 317 KB in our tests, and a 45.2 MB scan came out at 43.1 MB."
  - q: "Why does DRAFT show up when I copy text from the PDF?"
    a: "Because the watermark is real text, not a picture. Most viewers include it when you search or copy text from the page. If that matters, flatten the file to images after watermarking, keeping in mind the text then cannot be selected at all."
---
## How Do I Add a Watermark to a PDF for Free?

Five steps. The preview updates as you change each option, and the watermark itself takes about a second for a long document.

### Step 1: Add the PDF

Drop the file on **Drop your PDF here**, or click to choose it. The card shows the file name and page count, with **Choose another file** to swap it. A preview of the first page appears with DRAFT already drawn on it.

### Step 2: Choose the text

Under **Watermark text**, pick **DRAFT** (the default), **CONFIDENTIAL**, **COPY** or **SAMPLE**, or type your own in **Or type your own text**, up to 80 characters on one line. If you type a character the built-in font cannot draw, such as an emoji, a line lists it ("These characters can’t be drawn with the built-in PDF font and will be left out") and the rest of your text is used.

### Step 3: Set size, opacity, angle, colour and layout

- **Text size**: **Fit to page** (default) makes the text as large as fits; **Fixed size** takes 6 to 400 pt.
- **Opacity**: a slider from 5% to 100%, at 25% to start.
- **Angle**: **Diagonal (45°)**, reading bottom-left to top-right, or **Horizontal**.
- **Colour**: **Grey**, **Red** or **Blue**.
- **Layout**: **Once, centred** or **Tiled pattern**, which repeats the text in staggered rows across the whole page.

### Step 4: Choose the pages

**All pages** is selected. **Only these pages** takes a list such as `1-3, 5` or an open range such as `8-`. This is the step people miss: the preview shows the first page you selected, so if your cover should stay clean, type `2-` and check that the preview moved to page 2.

### Step 5: Click Add watermark, then Download

The button reads "Adding watermark…" with a page counter, then the result card says, for example, "Watermark added to 12 pages". Nothing downloads until you click **Download**. The file is named `yourfile-watermarked.pdf`.

## Which Layout Fits Which Document?

| What you need | Text | Layout and angle | Opacity |
|---|---|---|---|
| Mark a draft for review | DRAFT | Once, centred, diagonal | 20–30% |
| Show a document is confidential | CONFIDENTIAL | Once, centred, diagonal, red | 20–30% |
| Discourage reuse of an ID copy | Your own sentence with purpose and date | Tiled pattern, diagonal | 25–40% |
| A sample that cannot be cropped clean | SAMPLE | Tiled pattern | 15–25% |
| A copy mark across a printed form | COPY | Once, centred, horizontal | 30–50% |

The watermark is placed as the page appears on screen, so it sits centred and upright on rotated pages, landscape pages and cropped pages alike. We measured it within a few points of the visible centre on pages rotated 0, 90, 180 and 270 degrees.

## Can Someone Remove a PDF Watermark?

Yes, and the tool says so under the button. The watermark is real text drawn on top of each page, in one shared layer. Anyone with a PDF editor can select that layer and delete it, the same way they could delete any other object.

To make it much harder, run the watermarked file through [Flatten PDF](/en/flatten-pdf) and choose **Flatten to images**. Each page becomes a picture with the watermark part of it, so there is no separate layer left to delete. The trade-off is that the text is no longer selectable and the file usually gets larger. For a scan, which is a picture already, there is little to lose.

A watermark discourages misuse and shows the status of a document. It does not stop someone from reading or sharing it. To control who can open the file, protect it with [Protect PDF](/en/protect-pdf) after watermarking.

## How Do I Watermark a Bilingual Document?

Federal and Quebec documents are often bilingual, and a draft should say so in both languages. Type `DRAFT / BROUILLON` in the custom box: the slash, the space and accented capitals are all supported, and the line stays well under 80 characters. Fit to page then sizes it so both words fit diagonally on the page.

For a French-only document, `BROUILLON`, `CONFIDENTIEL`, `COPIE` and `SPÉCIMEN` are the presets on the French version of this page, and the É in SPÉCIMEN draws correctly.

## Use Cases by Situation

### A copy of your ID for a landlord or a new employer

When a rental application or an onboarding form asks for a copy of your driver's licence or passport, watermark it with its purpose and the date, for example `COPY FOR RENTAL APPLICATION – 2026-11`, using **Tiled pattern** so it cannot be cropped out. Then flatten it to images so the mark stays.

### A draft policy circulated to a committee

A board or committee reviewing a draft by-law or policy needs to know at a glance which version is not final. DRAFT, once, centred, diagonal at 25% keeps the text readable.

### A sample chapter or portfolio piece

A tiled SAMPLE at low opacity lets people read the work while making the copy useless as a clean final version.

### Confidential pages inside a longer report

Mark only the pages that need it with **Only these pages**, for example `12-18`, and leave the rest of the report untouched.

## When Should You Not Use This Tool?

- **When the watermark must be permanent.** Flatten to images afterwards, as explained above.
- **For a logo or image watermark.** Use [Add Image to PDF](/en/add-image-to-pdf).
- **For text behind the page content.** The watermark is drawn on top; lower the opacity instead.
- **For Chinese, Japanese, Arabic or emoji text.** Those characters are left out.
- **For page numbers.** Use [Add Page Numbers](/en/add-page-numbers).
- **On a password-protected PDF.** Open it with its password in your reader, save or print an unprotected copy, then watermark that copy.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| Some characters are missing from the watermark | Replace them with Latin letters or remove them | Only characters in the built-in PDF font can be drawn |
| The Add watermark button is greyed out | Type at least one letter or number the font supports, or fix the page list | The button stays off with no drawable text or an invalid page range |
| "Enter pages between 1 and 12, for example 1-3, 5." | Use page numbers that exist in the file | The list included a page outside the document |
| The watermark hides the text | Lower the opacity to 15–25% | It is drawn on top of the page |
| Someone removed the watermark | Flatten to images after watermarking | A text layer can be deleted in an editor |
| "This PDF is password-protected" | Open it with the password, save an unprotected copy, then watermark | An encrypted file cannot be read until it is opened |

## The Bottom Line

Watermark PDF puts DRAFT, CONFIDENTIAL or your own words on the pages you choose, with a live preview, in about a second and without changing the file size much. It handles French accents and rotated pages, and it is honest about the limit: a text watermark can be removed, so flatten the result to images when it has to stay.
