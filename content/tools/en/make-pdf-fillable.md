---
title: "Make a PDF Fillable Free: Auto-Detect Fields in Your Browser (2026)"
h1: "How to Make a PDF Fillable"
lead: "Turn the blank lines and checkboxes in a flat PDF into real form fields that anyone can type into. Detection and saving happen in your browser; nothing is uploaded."
description: "Make a flat PDF fillable for free in your browser: blank lines (____) become text fields and [ ] boxes become checkboxes in seconds. Opens in Acrobat Reader."
answer: "Upload the PDF, tick the pages that contain blanks, and click Auto-Detect & Fill. Every run of three or more underscores in the text becomes a text field and every [ ] or ☐ becomes a checkbox; the fillable copy downloads immediately and opens in Acrobat Reader, Preview, Chrome or Edge. Free, no account, nothing uploaded. It works on PDFs with a text layer, not on scans."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark"]
  - ["Where the fields are added", "In your browser tab. pdf.js finds the blanks; pdf-lib writes standard AcroForm fields. No upload."]
  - ["Maximum file size", "No fixed cap. Forms are usually small (under 5 MB); a 60-page, 40 MB document with embedded images works on a laptop and is slow on a phone."]
  - ["Maximum pages", "No set limit. Detection runs only on the pages you tick, so a 2-page form inside a 50-page package takes a second or two."]
  - ["Input", ".pdf with a text layer. Scanned forms and XFA forms are not detected (see below). Password-protected files must be unlocked first."]
  - ["What gets detected", "Runs of 3+ underscores (____) become text fields; [ ], [  ] and ☐ become checkboxes. Dotted lines, drawn rules and table cells are not detected."]
  - ["Output", "A new PDF named fillable_<name>.pdf with AcroForm fields. Existing fields are kept; the original is unchanged."]
  - ["What stays on your device", "The PDF, the fillable copy and your page selection. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded."]
faq:
  - q: "How do I make a PDF fillable for free?"
    a: "Open the tool, upload the PDF, tick the pages that have blank lines or boxes, and click Auto-Detect & Fill. The fillable copy downloads in a few seconds; open it in Acrobat Reader, Preview or Chrome and click a line to type. No account, no watermark, and the file never leaves your device."
  - q: "Can I draw my own fields where I want them?"
    a: "Not in this tool. It places fields only where it finds underscores or checkbox marks in the PDF's text. If your form uses drawn lines or empty table cells, the fastest fix is to open the source document, replace the lines with underscores, export to PDF again and re-run the tool. For hand-placed fields you need Acrobat Pro, PDFescape, LibreOffice Draw or a similar editor."
  - q: "Why did a huge text box appear over the whole page?"
    a: "That is the fallback. When a page you ticked has no underscores or checkbox marks, the tool adds one multi-line notes field covering the page inside the margins so it is still useful for annotations. If you did not want it, run the tool again with only the pages that actually contain blanks selected."
  - q: "Does it work on a scanned form?"
    a: "No. A scan is a picture; there is no text for the detector to read, so every ticked page gets the fallback notes box. Run the scan through OCR software first so the underscores exist as text, or recreate the form in Word with underscores and export it to PDF."
  - q: "Will the fields work in Adobe Acrobat Reader, Preview and Chrome?"
    a: "Yes. The fields are standard AcroForm text fields and checkboxes, the same kind Acrobat creates, so they work in Acrobat Reader, Mac Preview, Chrome, Edge, Firefox and most phone PDF apps. The filled-in values are saved in the PDF when the person saves the file."
  - q: "Can I make a CRA or government form fillable?"
    a: "If it was printed or flattened to a PDF with a text layer and uses underscores for blanks, yes. Many official forms are already fillable, and some (notably older ones) use XFA, which this tool cannot read; if the PDF shows a 'Please wait...' page in Chrome, it is XFA. Fill those in Acrobat Reader instead."
  - q: "Does the tool keep fields the PDF already has?"
    a: "Yes. The document's existing form is loaded and new fields are added to it, so a partly fillable form gains fields on the pages you ticked and keeps the ones it had. Field names are generated automatically (txt_0_1, chk_0_2), which matters only if you process the data with scripts."
---
## How Do I Make a PDF Fillable for Free?

Four actions, and the detection itself takes about a second per page.

### Step 1: Upload the flat PDF

Click **Select File** or drag the PDF onto the drop zone. The tool shows a thumbnail of every page. A "flat" PDF here means one where the blanks are just text: a lease with `Tenant name: ____________`, a consent form with `[ ] I agree`, an intake sheet exported from Word.

### Step 2: Select the pages to scan for fields

Under the heading **Select pages to scan for fields**, tick the pages that contain blanks, or use **Select All**. This is the step people get wrong: tick only pages that really have underscores or checkboxes. A page you tick that has none gets a single large notes field as a fallback, which is useful for a comments page and annoying on a cover letter.

### Step 3: Click Auto-Detect & Fill

Press **Auto-Detect & Fill**. For each ticked page the tool reads the text layer, finds every run of three or more underscores and every `[ ]` or `☐`, and places a text field or checkbox at exactly that position and width. Existing form fields in the PDF are kept.

### Step 4: Download and test it

The file downloads as `fillable_<original name>.pdf`. Open it in Acrobat Reader, Preview or Chrome, click the first blank and type. Tab moves between fields in the order they were found on the page. Your original is unchanged.

> **Tip:** Text fields take the width of the underscore run, so a 30-underscore line gives a field roughly 2.5 inches wide at 11-point type. Make blanks in the source document as long as the answers you expect.

## What Happens to My Document When It Is Made Fillable?

Two libraries do the work, and both run inside the tab. pdf.js reads the text of each selected page and reports every string with its position, width and height. pdf-lib opens the same bytes as an editable document, asks for its form (creating one if the PDF has none), and for each match creates a field and attaches it to the page at the reported coordinates. Text fields are drawn with a near-invisible border so the page looks as it did; checkboxes get a thin grey square 20% larger than the text height so they are easy to hit on a phone.

Then the document is serialized and offered as a download. No request carries your file; the Network tab of your browser's developer tools shows only the page's own assets and an anonymous page view.

Forms are, almost by definition, the documents that collect personal information: a residential lease with SIN and employer details, a medical consent form, a daycare registration sheet, a CRA authorization you printed to PDF. Making them fillable on your own machine means that information is never in a third party's storage, and there is nothing for PIPEDA or a provincial privacy law to apply to.

## Which Blanks Will Be Detected and Which Will Not?

Detection is rule-based and literal. Knowing the rules lets you prepare a document that converts perfectly on the first try.

| In the PDF text | Detected as | Field size | Notes |
|---|---|---|---|
| `___` (3 or more underscores) | Text field | Width of the run; height of the text plus 4 points | Works for `Name: ________` and full-width lines |
| `[ ]`, `[  ]` | Checkbox | 1.2 × text height, square | Spaces inside the brackets are fine |
| `☐` (U+2610 ballot box) | Checkbox | 1.2 × text height | Common in Word documents using Wingdings substitutes |
| `.......` dotted leaders | Not detected | — | Replace with underscores in the source |
| A drawn line (table border, rule) | Not detected | — | Lines are graphics, not text |
| An empty table cell | Not detected | — | Add underscores inside the cell |
| `( )` or `O` for radio-style choices | Not detected | — | Use `[ ]` instead; each becomes an independent checkbox |
| Underscores inside a scanned image | Not detected | — | OCR first |
| A page with no matches | One full-page multi-line notes field | Page minus 50-point margins | Placeholder text "Enter your notes here..." |

How long detection takes depends on how much text is on the selected pages, not on file size:

| Document | Pages ticked | Fields found | Time on a 2022 laptop |
|---|---|---|---|
| One-page volunteer sign-up sheet | 1 | 8–15 | under 1 second |
| 4-page residential lease printed from Word | 4 | 25–40 | 1–2 seconds |
| 12-page client intake package | 12 | 60–120 | 3–5 seconds |
| 30-page report with a 2-page feedback form at the end | 2 | 10–20 | 1 second |

## How Do I Make a Scanned Lease or a Printed Form Fillable?

The honest answer: not directly, and here is the workable path.

**A scan of a paper form.** The scanner produced an image. Run it through OCR (Acrobat's Recognize Text, ABBYY FineReader, or the OCR built into many scanner drivers) so that the printed underscores become text characters, then use this tool. OCR often reads a long blank line as a series of underscores or as nothing at all; check the result and expect to fix a few fields.

**A form you have as a Word, Pages or Google Docs file.** Do not scan it. Replace the drawn lines and tab leaders with underscores, use `[ ]` for every checkbox, export to PDF, and run this tool. This gives the cleanest result because every blank is real text at a known position.

**A CRA, Service Canada or provincial form.** Check first whether it is already fillable; most current forms are. If it opens in Chrome as a page saying "Please wait... If this message is not eventually replaced", it is an XFA form, which this tool cannot read and most browsers cannot display. The [XFA guide](/en/guides/edit-xfa-pdf) explains how to fill those in Acrobat Reader. If you printed an official form to PDF and lost the fields, the printed copy usually keeps underscores as text and converts well here.

**A form someone emailed you as a flat PDF.** Just run it. If a page comes back with a single huge notes box, that page's blanks are drawn lines rather than text; ask the sender for the original or type your answers into the notes box.

## How Do I Make a PDF Fillable on Mac, Windows, iPhone or Android?

**Mac.** The tool runs in Safari, Chrome or Firefox. Preview can fill fields but cannot create them, so the usual Mac route is this page, then Preview to fill. Acrobat Pro's Prepare Form does automatic detection too, with manual placement, for a subscription.

**Windows.** Edge, Chrome or Firefox. Windows has no built-in form designer. LibreOffice Writer can create form controls and export them as a fillable PDF if you are rebuilding the form from scratch, which is more work than converting an existing one here.

**iPhone and iPad.** Works in Safari; tap the thumbnails to select pages. The fillable PDF saves to Files → Downloads and opens in Files, Books or Acrobat Reader, where you can tap a field to type. Phones handle typical forms easily because detection touches only text, not images.

**Android.** Chrome handles it; Google's PDF viewer and Acrobat Reader fill the fields. Keep image-heavy files under about 50 MB on phones with limited memory.

**Chromebook.** Same as desktop Chrome, and Chrome's built-in viewer fills the result.

## When Should You Not Use This Tool?

- **The blanks are drawn lines, not underscores.** Nothing will be detected. Fix the source document or use a manual editor.
- **The form is a scan without OCR.** You will get a notes box per page and no real fields.
- **The PDF uses XFA.** It renders as a warning page in most viewers and has no readable text layer for the detector. See [how to edit an XFA PDF](/en/guides/edit-xfa-pdf).
- **You need specific field types**: dropdown lists, radio button groups, date pickers, calculated totals, digital signature fields or required-field validation. This tool creates text fields and checkboxes only.
- **You need named fields for data processing.** Names are generated (`txt_0_3`), not taken from the labels.
- **The file is password-protected.** Remove the password first in Acrobat Reader or Preview by re-saving the file without one.
- **The form will be signed.** Make it fillable first, fill it, then add the signature with [Sign PDF](/en/sign-pdf); signing flattens its image into the page.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| A page got one giant text box instead of fields | Re-run with only pages that contain underscores or [ ] ticked | The full-page notes box is the fallback for pages with no matches |
| No fields on a scanned form | OCR the scan, or rebuild the form with underscores in Word | Detection reads the text layer, and a scan has none |
| Field is shorter than the printed line | Lengthen the underscore run in the source and export again | Field width equals the width of the underscores |
| Text looks tiny or clipped inside a field | Type less, or widen the blank in the source | Field height follows the text height of the original line |
| Checkbox sits slightly off the box | Expected within a point or two; ignore it | The field is anchored to the text position of the bracket |
| Chrome shows "Please wait..." instead of the form | It is an XFA form; open it in Acrobat Reader | XFA forms are not rendered by browser PDF engines |
| The button is greyed out | Tick at least one page | Detection runs only on selected pages |
| Fields vanish after someone fills and saves on iPhone | Ask them to use Acrobat Reader or Files rather than a messaging app's preview | Some previews display but do not save field values |

## What Should I Do With the Fillable PDF?

- [Sign PDF](/en/sign-pdf) adds a drawn, typed or uploaded signature once the form is filled.
- [Merge PDF](/en/merge-pdf) combines the form with a cover letter or supporting documents into one package.
- [Delete PDF Pages](/en/delete-pdf-pages) removes instruction pages before sending the form out.
- [Compress PDF](/en/compress-pdf) shrinks a form with embedded logos or photos so it fits an email limit.
- [Organize PDF](/en/organize-pdf) puts the form pages in the right order before you send the package.

## The Bottom Line

If a PDF marks its blanks with underscores and `[ ]` boxes, this tool turns them into real, standard form fields in a couple of seconds, inside your browser, with no upload and no account. It does not detect drawn lines, scans or XFA, and it does not let you place fields by hand; for those, fix the source document or use a desktop editor. Tick the right pages, click Auto-Detect & Fill, and test the first field before you send it out.
