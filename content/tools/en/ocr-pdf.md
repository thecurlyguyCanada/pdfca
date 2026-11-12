---
title: "OCR PDF Free: Make a Scanned PDF Searchable, No Upload"
h1: "OCR PDF"
lead: "Turn a scanned PDF into one you can search, select and copy, in English and French. The scan looks exactly the same; the OCR runs in your browser and the file is never uploaded."
description: "OCR a scanned PDF for free in your browser. English and French text becomes searchable and copyable, the pages look the same, and the file is never uploaded."
answer: "Add the scanned PDF and click Make Searchable (OCR). Each page without text is read by an OCR engine running in your browser, in English and French, and an invisible text layer is laid over the original image. The download looks identical to your scan, but Ctrl+F, copy and paste, and screen readers now work. Pages that already have text are left alone, and the file never leaves your device."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the OCR happens", "In your browser tab, with Tesseract (the open-source OCR engine) compiled to WebAssembly. The PDF is never sent to a server."]
  - ["What is downloaded", "The first time, your browser fetches the OCR engine and the English and French language data (about 4 MB of language files) from the jsDelivr CDN. Your document is not part of that request. After that the files are cached."]
  - ["Languages", "English and French on every page, so bilingual documents such as CRA, Service Canada or Quebec government forms are read in one pass"]
  - ["Speed", "Roughly 1–5 seconds per page on a recent laptop for a typed letter-size page; dense pages and phones take longer. A progress line shows the page being read."]
  - ["Maximum file size", "No fixed cap. A 50-page scan is comfortable on a laptop; on a phone keep it under about 20 pages per run."]
  - ["Input", ".pdf only. Pages that already contain text are copied unchanged and skipped by the OCR."]
  - ["Output", "The same PDF with an invisible text layer on each scanned page, saved as filename_searchable.pdf. The page images are not re-compressed."]
  - ["Not supported", "Handwriting, and password-protected PDFs (remove the password in the app that created it first)"]
faq:
  - q: "How do I make a scanned PDF searchable for free?"
    a: "Open the OCR PDF tool, add the scan and click Make Searchable (OCR). Each scanned page is read in your browser and a hidden text layer is added under the same image, so the file looks identical but Ctrl+F, copy and paste now work. It is free, has no watermark and nothing is uploaded."
  - q: "Is my document uploaded anywhere?"
    a: "No. The OCR engine runs inside your browser tab. The first time you use it, the browser downloads the engine and the English and French language files from a public CDN, but your PDF is not part of that download and is never sent anywhere. You can watch the network tab in your browser's developer tools to confirm."
  - q: "Does OCR change how my PDF looks?"
    a: "No. The original page image stays exactly as it was; it is not re-rendered or re-compressed. The recognised text is added as an invisible layer positioned over each word, which is how searchable scans from office copiers work too. Printing the file gives the same result as before."
  - q: "Can it read French and bilingual documents?"
    a: "Yes. Every page is read with both English and French language models, so accents such as é, è and ç come out correctly and a bilingual government form is handled in one pass. On the French version of the page, French is tried first; the result is the same document either way."
  - q: "Why does it say my PDF already has text?"
    a: "The tool checks each page for an existing text layer first and skips pages that have one, because running OCR on a digital PDF only adds a second, worse copy of the text. If every page already has text, there is nothing to do and you get that message instead of a download. Try selecting a word in your PDF viewer to check."
  - q: "How accurate is the OCR?"
    a: "On a clean, straight scan of printed text at 200 dpi or more, nearly every word comes through. Accuracy drops with faxes, photos taken at an angle, small or faint print, tables with ruled lines and coloured backgrounds. Handwriting is not supported. Search for a few key words in the result before you rely on it."
  - q: "Can I OCR a photo of a document taken on my phone?"
    a: "Convert the photo to PDF first with JPG to PDF, then run it through OCR PDF. Hold the phone straight above the page in good light; a tilted or shadowed photo is the main cause of missed words. For several photos, convert each one and combine them with Merge PDF before the OCR."
  - q: "Will the searchable PDF be accepted by CRA or IRCC uploads?"
    a: "Yes, it is a normal PDF. The text layer adds only a few kilobytes per page, so the file stays close to its original size and well within the usual upload limits. A searchable file also lets you check that a scan is legible before you submit it, because the words you can search for are the words the OCR could read."
---
## How Do I Make a Scanned PDF Searchable?

Three steps, and for a typical 10-page letter-size scan the whole job takes under a minute on a laptop.

### Step 1: Add the scanned PDF

Click **Select File** or drag the PDF onto the drop zone. Thumbnails of the pages appear so you can confirm it is the right file. Nothing has been read yet at this point; the file is only loaded into the tab.

### Step 2: Click Make Searchable (OCR)

The first run downloads the OCR engine and the English and French language data, about 4 MB of language files plus the engine itself, so give it a few extra seconds. After that the files are cached by your browser.

The tool then works through the document page by page, and the overlay shows which page it is reading, for example "Reading page 4 of 12". For each page it:

1. Checks whether the page already has text. If it does, the page is copied as it is.
2. Renders a scanned page at about 250 dpi, which is enough for normal print without exhausting a phone's memory.
3. Reads it with Tesseract, using English and French together.
4. Lays the recognised words over the original page as invisible text, each word placed where it appears on the image.

### Step 3: Open the result

The download is named `<your file>_searchable.pdf`. Open it and press Ctrl+F (Cmd+F on a Mac) and search for a word you can see on the page. If the word highlights, the OCR found it. You can also drag across a paragraph and paste it into an email or a Word document.

> **Pro tip:** The step people skip is checking the result. Search for two or three words that matter, such as a name, an amount or a SIN-style reference number, before you send or archive the file. If a word is missing, the scan quality is the usual reason; see the troubleshooting table below.

## What Does OCR Actually Do to My PDF?

A scanned PDF is a set of pictures. Your viewer shows the picture of a page, but there are no letters in the file, which is why search finds nothing and copying selects the whole page as an image.

OCR (optical character recognition) reads the letters in the picture and adds them back to the file as text. This tool adds them in the way office scanners do: as an invisible layer that sits exactly over the printed words. You see the original scan; your viewer, search tools and screen readers see the text.

Three things this means in practice:

- **The scan is not altered.** The page image is not re-rendered or re-compressed, so signatures, stamps and photos keep their original quality.
- **The file barely grows.** The text layer is a few kilobytes per page.
- **Errors are invisible.** If the OCR misreads "8" as "B", you will not see it on the page. You will only notice when a search fails. That is why the check in step 3 matters.

| What you want to do | Scanned PDF before OCR | After OCR PDF |
|---|---|---|
| Find a word with Ctrl+F | Finds nothing | Finds the word on the page |
| Copy a paragraph | Copies an image or nothing | Copies the text |
| Screen reader | Reads nothing or "image" | Reads the text |
| Search the file from Windows or macOS | Not indexed | Indexed by content |
| Look and print | Original scan | Identical |
| File size | Original | Original plus a few KB per page |

## Which Documents Work Best, and Which Don't?

OCR quality depends far more on the scan than on the software. These are the cases that come up most often.

**Works well**

- Office scans of printed letters, invoices, statements and forms, at 200 dpi or higher.
- Bilingual Canadian government documents: CRA notices, Service Canada letters, Revenu Québec forms. English and French are read in the same pass.
- Book pages and articles scanned flat.

**Works, with errors to check**

- Faxes and old photocopies, where letters are broken or filled in.
- Tables with heavy ruled lines, where lines can be read as the letters l or I.
- Text on coloured or patterned backgrounds.
- Very small print, under about 8 points at 200 dpi.

**Does not work**

- Handwriting, including filled-in handwritten forms. The printed labels are read; the handwriting is not.
- Password-protected PDFs. Remove the password in the application that created the file, then try again.

## How Do I OCR a Phone Photo or a Stack of Pictures?

The tool reads PDFs, so photos need one step first.

1. Convert each photo with [JPG to PDF](/en/jpg-to-pdf). iPhone photos in HEIC format go through [HEIC to PDF](/en/heic-to-pdf).
2. If there are several pages, combine them in the right order with [Merge PDF](/en/merge-pdf).
3. Run the combined file through OCR PDF.

For the photo itself: hold the phone directly above the page rather than at an angle, use daylight or a bright room without your shadow on the paper, and fill the frame with the page. A straight, evenly lit photo gives results close to a flatbed scan. If a photo came out sideways, fix it with [Rotate PDF](/en/rotate-pdf) before the OCR, because text read at 90° is mostly missed.

## Is OCR in the Browser Private?

Yes, and it is worth knowing exactly what moves over the network.

- **Your PDF:** stays in the browser tab. It is read from your disk into memory, processed there and written back as a download.
- **The OCR engine and language data:** downloaded from the public jsDelivr CDN the first time you use the tool, then cached. The request asks for a fixed file, such as the French language model; it contains nothing about your document.
- **This site:** records an anonymous page view, not file names or contents.

That makes it suitable for documents most people would rather not upload to a converter: tax slips, bank statements, medical letters, immigration papers. If you want to confirm it yourself, open your browser's developer tools, switch to the Network tab and run the OCR; you will see the engine files load once and no upload.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| "This PDF already has selectable text" | Nothing to do; try selecting a word in your viewer | The tool skips pages that already have text |
| Search finds some words but not others | Rescan at 300 dpi, or straighten and re-photograph the page | Missed words are almost always blurred, tilted or faint |
| Accents come out wrong (e instead of é) | Check the scan is sharp; accents are the first detail lost in blur | Both French and English models run on every page |
| A sideways page returns nothing | Rotate the page with Rotate PDF, then run OCR again | The engine reads upright text |
| It is slow on my phone | Split the file and run 10–20 pages at a time | Each page is rendered and read in the phone's memory |
| Nothing happens on the first run | Wait for the engine download, or check the connection | The engine and language data load once, then stay cached |

## When Should You Not Use This Tool?

- **The PDF is already digital.** If you can select text in it, OCR adds nothing. To change the text, convert it with [PDF to Word](/en/pdf-to-word) instead.
- **You need editable text, not a searchable scan.** OCR PDF keeps the scan and adds a hidden layer. If you want to rewrite the content, copy the text out of the searchable result, or convert the result with PDF to Word.
- **The document is handwritten.** Browser OCR reads print, not handwriting.
- **You need a certified or legally verified transcript.** OCR text is a convenience layer; for court or translation work, the scanned image remains the record.

## The Bottom Line

OCR PDF turns a scan into a PDF you can search, copy from and have read aloud, in English and French, without uploading it and without changing how it looks. Add the file, click **Make Searchable (OCR)**, then search for two or three key words to check the result.

For photos, convert them with [JPG to PDF](/en/jpg-to-pdf) first. If the scan is too large to email, run it through [Compress PDF](/en/compress-pdf) **before** the OCR, not after: the stronger compression levels redraw each page as a new image, which would drop the text layer.
