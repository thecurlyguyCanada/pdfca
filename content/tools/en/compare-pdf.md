---
title: "Compare Two PDFs Free: Word-by-Word Differences, No Upload"
h1: "Compare Two PDFs and See What Changed"
lead: "Drop in the original and the changed version, click Compare, and read every added, removed or replaced word. Both files stay in your browser."
description: "Compare two PDFs word by word for free: added, removed and replaced text, flagged numbers, dates and negations, and an HTML report. Nothing is uploaded."
answer: "Put the original PDF in the Original box, the new version in the Changed box, and click Compare. Two 50-page documents took about 1.2 seconds in our tests. You get every added, removed or replaced word, with changed amounts, dates and negations (not, never, sans, pas) flagged, plus a downloadable HTML report. It compares text only: layout, image and formatting changes are not detected, and scanned PDFs need OCR first."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab: pdf.js reads the text and the comparison runs in a Web Worker. Neither file is sent to a server."]
  - ["What it compares", "The words on the pages. Layout, images, fonts, colours, positions, comments and form-field values are not compared."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 400-page file against a 150-page file took 3.3 seconds on a laptop in our tests. Phones were not measured; very large files on an older phone can make the tab reload."]
  - ["Pages", "Page counts may differ. Inserted or deleted whole pages are matched first, so they show as one change."]
  - ["Input", "Two .pdf files with selectable text. Scans need OCR PDF first; password-protected files must be unlocked first."]
  - ["Output", "On-screen results, plus an optional report named comparison-original-vs-changed.html. Your PDFs are not modified."]
  - ["Flags", "Numbers and amounts, dates, and added or removed negations, in English and French"]
  - ["What stays on your device", "Both PDFs, the extracted text and the report. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your first file (the PDF engine loads with it)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I compare two PDF files for differences for free?"
    a: "Open Compare PDF, drop the older file in the Original box and the newer one in the Changed box, and click Compare. Removed words show in red and struck through, added words in green. It is free, needs no account, and neither file leaves your device."
  - q: "Does it detect changes in layout, images or formatting?"
    a: "No. The tool compares the text only, so a moved logo, a new photo, bold type, a different font or colour, or a paragraph shifted down the page is not reported. If the words are the same, it tells you no text differences were found and that layout and images were not compared."
  - q: "Can I compare a scanned PDF?"
    a: "Not directly. A scan is a picture of text, so there are no words to compare and the tool says so. Run the scan through OCR PDF first to add a text layer, then compare the searchable file. Check a few OCR words first, because OCR misreads show up as changes."
  - q: "What do the Number, Date and Negation flags mean?"
    a: "They mark the changes most likely to matter in a contract. Number marks a changed amount, percentage, quantity or clause number; Date marks a changed date such as March 31 or 12 novembre 2026; Negation marks a not, never, without, pas, sans or aucun that was added or removed."
  - q: "How long does a comparison take?"
    a: "About a second for typical documents. In our tests a 2-page contract took 0.5 seconds, two 50-page documents about 1.2 seconds, and a 400-page report against a 150-page version 3.3 seconds, all including the time to read the text out of both files."
  - q: "Are my contracts uploaded anywhere?"
    a: "No. Both PDFs are read in your browser tab, and the comparison runs in a background worker inside that same tab. No network request carries the files or their text, and the report is built locally. You can check this in your browser's developer tools under Network."
  - q: "Does it detect paragraphs that were moved?"
    a: "No. A paragraph moved from page 2 to page 5 appears as removed in one place and added in the other. The text itself is unchanged, so read both blocks side by side before concluding that a clause was deleted."
  - q: "Can I share the results with my lawyer or a colleague?"
    a: "Yes. Download report saves a single HTML file with every change in a table and the inline view with context. It has no scripts or outside resources, so it opens in any browser, attaches to an email, and prints cleanly."
---
## How Do I Compare Two PDFs for Free?

Five steps. For a typical contract or lease, the result is on screen in about a second.

### Step 1: Put the older file in the Original box

The tool shows two drop zones side by side: **Original** and **Changed**. Drop the earlier version, the one you already read or signed, on **Original**, or click the zone to choose it. The file name and size appear once it is loaded; tap the zone again to choose a different file.

Shortcut: drop both PDFs on the **Original** zone at once and the first fills Original, the second fills Changed.

### Step 2: Put the new version in the Changed box

This is the step people get backwards. The direction matters: words that are only in Original are reported as removed (red, struck through), words that are only in Changed as added (green). Swap the files and a new clause looks like a deleted one. If the landlord or employer sent you the revision, that file goes in **Changed**.

### Step 3: Click Compare

The status line shows each file being read, for example "Reading “lease-2027.pdf”: page 12 of 50", then "Comparing the words…". The **Summary** card then shows the words added and removed, the number of changes and how many are flagged, the pages compared, and the time the comparison itself took.

### Step 4: Read the flagged changes first

Turn on **Only flagged changes** to see just the changes marked **Number**, **Date** or **Negation**. On a contract, these are the ones that change what you owe, when, and whether you may or may not do something. Then turn the filter off and read the rest.

Two views are available. **Inline view** (the default) shows each change with 12 words of context on either side, with the unchanged stretches collapsed. **Changes list** shows one row per change, with the page, the type (Added, Removed or Replaced) and the before and after text. **Show full text** displays the whole changed document with its changes marked, if you want to read it straight through.

### Step 5: Download the report

**Download report** saves a single `.html` file named after both documents, such as `comparison-lease-2026-vs-lease-2027.html`. It holds the summary, a numbered table of every change with its page and flags, and the inline view. Flagged rows have a red left border so they stand out when printed.

> **Tip:** The on-screen list stops at 500 changes and the inline view at 300 blocks, to keep the page responsive. The report always contains every change.

## What Does Compare PDF Detect, and What Does It Miss?

The tool reads the words on each page, the way your PDF viewer's search does, and compares the two word sequences. Anything that is not text is invisible to it. The note under the drop zones says this, and it is worth taking literally:

| Change between the two versions | Detected? |
|---|---|
| A word, sentence or clause added, removed or reworded | Yes, word by word |
| An amount, percentage or date changed | Yes, and flagged Number or Date |
| "not", "never", "pas", "sans" added or removed | Yes, and flagged Negation |
| A whole page inserted or deleted | Yes, as one change |
| Punctuation changed ("notice." to "notice,") | Yes; punctuation stays attached to the word |
| Straight vs curly quotes, « » vs " ", ligatures (ﬁ vs fi) | Ignored, treated as the same |
| A paragraph moved elsewhere | Shown as removed in one place and added in another |
| Bold, italics, font, size or colour | No |
| Logo, photo, chart or signature image | No |
| Text shifted on the page, new margins | No |
| Values typed into form fields, comments, sticky notes | No |

So use it for "did the wording change?", which is usually the question before you sign. Do not use it for "does the brochure still look right?".

Some PDFs store text in an order that differs from the reading order: multi-column layouts, tables and running headers are common culprits. The comparison follows the order stored in the file, so a table that was rebuilt can show more changes than a person would count, even when the visible content looks similar.

## How Are Numbers, Dates and Negations Flagged?

Every change is checked, along with the four words around it, for three kinds of content.

**Number.** Any changed word containing a digit that is not part of a date: amounts such as $4,500.00 or 1 250,00 $, percentages, quantities, clause numbers. A rent increase, a change from 30 to 45 days, or an interest rate moving from 1.5% to 2% all carry this flag.

**Date.** ISO dates (2026-11-12), numeric dates (12/11/2026), English dates (November 12, 2026; Nov. 12; 12 November 2026) and French dates (12 novembre 2026, 1er janvier 2028, with or without accents). A month name on its own is not treated as a date, so the verb "may" is not flagged.

**Negation.** Words that flip a sentence's meaning, added or removed: not, no, never, without, cannot and any word ending in n't in English; ne, n', pas, non, jamais, aucun, aucune and sans in French. "The tenant may sublet" becoming "The tenant may not sublet" is a one-word change, and this flag is what keeps it from hiding among dozens of reworded sentences.

In our English test contract, the tool found 8 changes and flagged 7, including $4,500.00 to $5,200.00, 30 to 45 days, 1.5% to 2%, March 31 to June 30, an added "not" and a removed "never". In the French test pair, all 9 changes were flagged, including « est » becoming « n'est pas » and « 60 jours » becoming « avant le 1er janvier 2028 ».

## How Do I Check a Lease, Offer or Amendment Before Signing?

The pattern is the same each time: the version you agreed to goes in Original, the version you are asked to sign goes in Changed, and you read the flagged changes before anything else.

### A lease renewal from your landlord

Your landlord emails a "same as last year" lease for the new term. Compare it with last year's signed copy. The rent, the start and end dates and the deposit show as Number and Date flags; a new clause about pets, smoking or subletting shows as added text, with a Negation flag if it says what you may not do. If the old lease exists only on paper, scan it with [Scan to PDF](/en/scan-to-pdf) and make it searchable with [OCR PDF](/en/ocr-pdf) first.

### A revised employment offer

After you negotiate salary or vacation, the employer sends a new offer letter. Compare it with the first one to confirm the salary and start date changed the way you agreed, and that nothing else moved: probation length, notice period, a non-solicitation or non-compete clause, the vacation weeks.

### A contract amendment from a supplier or client

Amendments are often a full re-issue of the contract "with the changes discussed". Comparing the re-issue with the signed original shows every difference, including the ones nobody discussed. Download the report and attach it to your reply, so the other side sees exactly which lines you are asking about.

### The French and English versions of your own drafts

The tool works the same on French documents: dates such as « 1er janvier 2028 », amounts such as « 1 250,00 $ » and negations such as « ne… pas » are all flagged. It compares two versions in the same language; it does not compare a French document with its English translation.

## How Do I Compare a Scanned PDF?

You add text to it first. A scanned page is a picture, so there are no words to compare. When a file has fewer than about three words per page, the tool stops and says it has no selectable text, with an **Open OCR PDF** button.

1. Open [OCR PDF](/en/ocr-pdf) and run the scan through it. The result looks identical but has an invisible text layer.
2. Search the OCR result for two or three words you can see on the page, such as a name or an amount, to confirm they were read correctly.
3. Compare the searchable file with the other version.

Expect more noise than with two digital files. Every word the OCR misread, an "8" read as "B" or a smudged comma, shows up as a change. Read the flagged changes against the paper original before relying on them.

## How Fast Is It, and How Big Can the Files Be?

Fast enough that file size rarely matters on a computer. The tool first matches identical pages, so pages that did not change cost almost nothing, and then compares the remaining text word by word with a Myers diff, the same family of algorithm used by programmers' version-control tools.

Measured on a laptop, in Chromium, including the time to read the text from both files:

| Files compared | Result | Time |
|---|---|---|
| 2-page contract, two versions | 8 changes, 7 flagged | 0.5 s |
| Two 50-page documents, about 27,000 words each | 20 changes, all flagged | 1.1–1.4 s |
| 120-page report vs the same report missing page 61 | 1 change, page 61 | 1.7 s |
| 400-page report vs a 150-page version | 2 changes | 3.3 s |
| Two unrelated documents (120 and 27 pages) | Page-by-page fallback, 2,378 changes | 4.5 s |

The "Compared in" time on the Summary card counts only the word comparison, which is usually a few hundredths of a second; reading the PDFs takes most of the time.

When two documents are too different to line up, the tool falls back to comparing them page by page and shows a notice. At that point the result mostly tells you the files are not two versions of the same document.

Phones were not part of these measurements. The work is the same, so expect it to be slower, and keep very large files for a computer.

## When Should You Not Use This Tool?

- **You need to see visual changes.** A redesigned brochure, a moved signature block, a replaced logo, a new chart: none of these are detected. Open both files side by side in your viewer, or export the pages as images with [PDF to JPG](/en/pdf-to-jpg) and look at them.
- **The documents are scans you have not OCR'd.** There is nothing to compare until the text layer exists.
- **You need to compare form-field answers.** Values typed into fillable fields, and comments or sticky notes, are not part of the page text the tool reads.
- **You need tracked changes to accept or reject.** The tool reports differences; it does not edit either file. For a document you will keep editing, convert it with [PDF to Word](/en/pdf-to-word) and use your word processor's compare feature.
- **You have more than two versions.** Compare them in pairs: version 1 with 2, then 2 with 3.
- **The text is Chinese, Japanese or another language written without spaces.** Words are split on spaces, so such text compares in long chunks and the result is coarse.
- **The file is password-protected.** Remove the password in the application that created it, then compare.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| "has no selectable text" | Run the file through OCR PDF, then compare the result | Scans and photos contain images of words, not words |
| "This PDF is password-protected" | Remove the password in the app that made the file, then try again | The text cannot be read until the file is unlocked |
| Additions show as removals | Swap the files: older in Original, newer in Changed | Direction decides what counts as added or removed |
| "No text differences found" but the files look different | The change is in layout, images or formatting | Only the words are compared |
| A whole section shows as removed and added | Check whether the paragraph was moved rather than changed | Moved text is not detected as a move |
| "compared page by page" notice | Confirm you chose two versions of the same document | Very different files cannot be aligned word by word |
| Many tiny changes in a table | Read the table in both PDFs; the text order inside it changed | Tables and columns are compared in the file's internal text order |
| The list stops at 500 changes | Download the report | The screen is capped; the report holds every change |

## The Bottom Line

Compare PDF answers one question well: did the words change, and where? It finds every added, removed or replaced word, flags the amounts, dates and negations that matter most in a lease, offer or amendment, and gives you a report you can send, all in about a second and without uploading either file. It does not see layout, images or formatting, and scans need [OCR PDF](/en/ocr-pdf) first. Put the old version in Original, the new one in Changed, and read the flagged changes before you sign.
