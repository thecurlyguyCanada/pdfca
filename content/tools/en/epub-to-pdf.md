---
title: "EPUB to PDF Free: Clean Text PDF in Your Browser, No Upload (2026)"
h1: "How to Convert an EPUB to PDF"
lead: "Pick a DRM-free .epub and get a clean, printable text PDF a few seconds later. The book is unpacked and laid out inside your browser; nothing is uploaded."
description: "Convert an EPUB to a printable PDF for free in your browser. Text is set on letter-size pages at 11 points; a 300-page novel takes under 10 seconds. No upload."
answer: "Click Select File, choose a DRM-free .epub, then click Convert File. The tool unzips the book in your browser, pulls the text out of each chapter and lays it out on letter-size pages; the PDF downloads when it is done. It is free, with no account and no upload. The one limit that matters: the output is text only, so images, fonts and the publisher's styling are not carried across."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, use it as often as you like"]
  - ["Where the conversion happens", "In your browser tab. JSZip opens the EPUB and pdf-lib writes the PDF; nothing is sent to a server."]
  - ["Maximum file size", "No fixed cap. Text-only EPUBs are small (a novel is 0.3–2 MB); an illustrated 80 MB textbook will open but only its text is converted."]
  - ["Maximum length", "No set page limit. A 120,000-word book produces roughly 170–200 letter-size pages in a few seconds."]
  - ["Input", ".epub (EPUB 2 or EPUB 3) without DRM. Kobo, Adobe Digital Editions and Kindle-protected files cannot be opened."]
  - ["Output", "One PDF: letter size, 11-point Helvetica, about 85 characters per line and 46 lines per page. Text only; no images, no cover, no original fonts."]
  - ["What stays on your device", "The EPUB, the PDF and nothing else. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert an EPUB to PDF for free?"
    a: "Open the EPUB to PDF tool, click Select File, pick your .epub and click Convert File. The PDF downloads a few seconds later with the book's text laid out on letter-size pages. There is no charge, no sign-up and no watermark, and the EPUB itself never leaves your device."
  - q: "Does the PDF keep the images and formatting from my EPUB?"
    a: "No. This converter extracts the text from each chapter and sets it in a single 11-point font with standard margins. Cover art, illustrations, fonts, colours and most heading styles are dropped. It is built for reading and printing text, not for reproducing a designed layout."
  - q: "Can I convert a Kobo or Adobe Digital Editions book?"
    a: "Not if it still has DRM. A protected EPUB is encrypted inside the ZIP, so the tool either reports that it could not extract text or produces unreadable output. Only DRM-free files convert: Project Gutenberg downloads, Standard Ebooks, Humble Bundle books, your own manuscripts and many small-press purchases."
  - q: "Why are the chapters in the wrong order?"
    a: "The tool reads the chapter files in alphabetical order by file name rather than following the book's internal reading order. Most publishers name files so the two match (chapter01, chapter02), but some do not. If the order is wrong, rename the files inside the EPUB or rearrange the pages afterwards with Organize PDF."
  - q: "What page size does the PDF use?"
    a: "US Letter, 8.5 by 11 inches, with half-inch margins on every side. That fits every Canadian home and office printer without scaling. If you need A4, print the PDF to A4 from your viewer with fit-to-page turned on."
  - q: "Will accented French characters survive?"
    a: "Yes. Letters with accents, cedillas and the usual punctuation of French, Spanish, German and other Western European languages are supported by the standard font. Text in Greek, Cyrillic, Arabic or Chinese is not, and a book in those scripts will fail to convert."
  - q: "Can I convert an EPUB on my phone?"
    a: "Yes. The page works in Safari on iPhone and Chrome on Android, and a novel-length EPUB converts in a few seconds because only text is processed. Pick the file from the Files app or your Downloads folder; the PDF lands in the same place."
---
## How Do I Convert an EPUB to PDF for Free?

Two clicks and a short wait. On a laptop, a 300-page novel is finished in under ten seconds.

### Step 1: Click Select File and choose your .epub

Click **Select File** or drag the book onto the page. Only `.epub` files are accepted; a `.mobi`, `.azw3` or `.acsm` file will be refused at this step. If you have an `.acsm` file from a library or bookshop, that is a licence ticket rather than a book, and the [ACSM to PDF guide](/en/guides/acsm-to-pdf) explains what it is and what you can do with it.

### Step 2: Check that the book is DRM-free

This is the step people get wrong. The tool cannot tell you in advance whether a file is protected; it finds out when it tries to read the chapters. A book bought from Kobo, Google Play Books or a store that uses Adobe Digital Editions is almost always encrypted and will fail. A Project Gutenberg download, a Standard Ebooks file, a Humble Bundle purchase or a manuscript you exported from Scrivener or Vellum will work.

### Step 3: Click Convert File

Press **Convert File**. The page unzips the EPUB in memory, walks through every chapter file, strips the HTML tags and scripts, and types the remaining text onto letter-size pages. A progress state shows while this runs.

### Step 4: Download and open the PDF

The file downloads under the same name with a `.pdf` extension. Open it and scroll to the first chapter heading to check the order. Your `.epub` is untouched.

> **Tip:** If you only need part of a book, convert the whole thing, then pull the chapters you want with [Extract PDF Pages](/en/extract-pdf-pages). It is quicker than editing the EPUB.

## What Happens to My EPUB When I Convert It?

An EPUB is a ZIP archive with a fixed structure: a `mimetype` file, a `META-INF` folder, and a content folder full of XHTML chapters, CSS and images. This tool loads the ZIP into your browser's memory with the JSZip library, reads each `.html` and `.xhtml` entry as text, removes the `<head>`, `<script>` and `<style>` blocks, turns `<br>` and `</p>` into line breaks, and discards every other tag. What is left is the words.

pdf-lib then creates a new PDF document, embeds Helvetica at 11 points, and writes the text line by line with a 50-point margin, starting a new page when the current one is full. The result is handed to the browser as a download. No network request carries the book; open the browser's developer tools, choose the Network tab, convert, and you will see only the page's own scripts and a single anonymous page-view ping.

For readers in Canada this matters more than it might seem. Self-published authors send manuscripts here before they are released, teachers convert course readers that include licensed excerpts, and researchers convert theses that are still under embargo. None of that text is ever in anyone else's hands.

## Will My EPUB Look the Same as a PDF?

No, and it is better to know exactly what changes before you convert.

An EPUB is reflowable: the reader's device decides line length, font and page breaks. A PDF fixes all of those. This tool makes that decision for you with a single, plain layout. Here is what survives and what does not:

| Element in the EPUB | In the PDF | Notes |
|---|---|---|
| Body text, paragraphs | Kept | Paragraph breaks become blank lines; roughly 85 characters per line |
| Chapter headings | Kept as plain text | Same size as body text; no bold, no larger font |
| Bold, italics, small caps | Dropped | Everything is set in regular Helvetica |
| Cover image, illustrations, figures | Dropped | Only text is extracted |
| Publisher fonts and CSS | Dropped | The PDF uses one embedded standard font |
| Tables | Flattened | Cell text appears in reading order, separated by spaces |
| Table of contents (nav file) | Appears as a text list | The nav file is converted like any other chapter |
| Footnotes and endnotes | Kept as text | They appear where the publisher placed them, usually at the chapter end |
| Hyperlinks | Dropped | Link text remains; the link itself does not |
| Accented Latin characters | Kept | Greek, Cyrillic, Arabic and CJK scripts cause an error |

How long the PDF ends up depends on word count, not on the EPUB's file size:

| Book | Words | Pages in the PDF | Conversion time (2022 laptop) |
|---|---|---|---|
| Short story collection | 25,000 | 35–45 | 1–2 seconds |
| Typical novel | 90,000 | 130–160 | 3–6 seconds |
| Long non-fiction | 150,000 | 220–260 | 5–10 seconds |
| Illustrated textbook, 80 MB | 120,000 | 170–200 (text only) | 5–12 seconds, mostly spent unzipping |

If you need a designed, image-rich PDF, the right tool is the one the book was made in: export from Vellum, Atticus, InDesign or Calibre with the layout options you want. This tool is for the other case, where you want the words on paper or in a viewer quickly and privately.

## How Do I Convert an EPUB to PDF on iPhone, Android, Mac or Windows?

The page is the same on every device; only the file picker and the built-in alternatives change.

**iPhone and iPad.** Open the page in Safari and tap **Select File**; choose the `.epub` from the Files app. The PDF saves to Files → Downloads. Apple Books can open EPUBs directly, so if you only want to read, you do not need a PDF at all. Books cannot export to PDF, which is where this tool fits.

**Android.** Chrome opens the system file picker; EPUBs you downloaded will be in Downloads. Google Play Books reads DRM-free EPUBs natively if reading is all you need.

**Mac.** Preview does not open EPUB files. Apple Books does, but has no PDF export. Calibre is the full-featured desktop option (free, with every layout setting imaginable); it is the better choice when you need images and fonts, and this page is the faster choice when you need plain text in ten seconds without installing anything.

**Windows.** Windows has no built-in EPUB reader since Edge dropped support. Calibre or this page are the two practical routes; Microsoft Print to PDF will not help because nothing on the system opens the EPUB to print it.

**Chromebook.** Works as on any desktop Chrome. The download goes to Files → Downloads or Google Drive depending on your setting.

## When Should You Not Use This Tool?

- **The book has DRM.** Kobo, Adobe Digital Editions, Google Play and most library loans. The tool cannot and does not remove protection; it will fail or produce garbage. Whether you may remove DRM yourself is a legal question that depends on where you live, and it is outside what this page does.
- **You need the images.** Comics, children's books, cookbooks, manuals with diagrams and illustrated textbooks lose their pictures entirely. Use Calibre or the authoring tool instead.
- **You need the publisher's typography.** Poetry with careful line breaks, drop caps, small caps and multiple fonts are all flattened.
- **The text is not in a Latin script.** A book in Greek, Russian, Hebrew, Arabic, Hindi, Chinese, Japanese or Korean cannot be set in the standard font and the conversion stops with an error.
- **Chapter file names do not sort correctly.** Rarely, a publisher names files in a way that puts the epilogue before chapter one. Check the output; fix with [Organize PDF](/en/organize-pdf) if needed.
- **You want a reflowable file for an e-reader.** Keep the EPUB. Kobo, Kindle (via Send to Kindle) and Apple Books all read EPUB directly and let you change the font size, which a PDF never will.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| "Could not extract text from EPUB" | Check whether the book has DRM; try a Project Gutenberg file to confirm the tool works | Encrypted chapters contain no readable text, so there is nothing to lay out |
| The conversion stops with a font or encoding error | The book contains characters outside Western European Latin; convert with Calibre | The embedded standard font covers Latin-1 characters only |
| Chapters are out of order | Rearrange pages with Organize PDF, or rename files inside the EPUB with a ZIP tool | Files are read in alphabetical order, not in spine order |
| The table of contents appears as a list in the text | Delete those pages with Delete PDF Pages | The navigation file is treated as a chapter |
| No pictures in the PDF | Expected; use Calibre or the authoring tool for an illustrated PDF | This converter extracts text only |
| Headings look like ordinary paragraphs | Expected; add structure in a word processor if you need it | Heading tags are stripped along with the rest of the HTML |
| Nothing downloads on iPhone | Check Files → Downloads, and allow downloads for the site if Safari asks | iOS places browser downloads in the Files app rather than showing a bar |

## What Else Can I Do With an Ebook or a Long PDF?

- [PDF to EPUB](/en/pdf-to-epub) does the reverse: turns a text PDF into a reflowable ebook for Kobo or Kindle.
- [Delete PDF Pages](/en/delete-pdf-pages) removes the table-of-contents list or front matter from the converted file.
- [Extract PDF Pages](/en/extract-pdf-pages) pulls a single chapter out of the converted PDF.
- [Compress PDF](/en/compress-pdf) is rarely needed here, since a text-only PDF is already small, but it helps if you later add scanned pages.
- [Merge PDF](/en/merge-pdf) joins several converted books or adds a title page you made elsewhere.

## The Bottom Line

This converter does one job plainly: it opens a DRM-free EPUB in your browser, extracts the text, and sets it on letter-size pages you can print or read anywhere, in a few seconds and without uploading the book. It does not keep images, fonts or styling, and it cannot open protected books. For a quick, private, text-only PDF of a novel, a manuscript or a public-domain classic, it is the fastest route. For an illustrated or designed PDF, use Calibre or the tool the book was built in.
