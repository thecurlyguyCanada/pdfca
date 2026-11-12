---
title: "Flatten PDF Free: Lock Form Fields and Comments, No Upload"
h1: "Flatten PDF Forms and Annotations"
lead: "Turn filled-in form fields, comments and stamps into a fixed part of the page, or turn every page into an image. It runs in your browser; nothing is uploaded."
description: "Flatten a PDF for free: filled form fields, comments and stamps become part of the page and text stays selectable, or convert pages to images. No upload."
answer: "Add the PDF, keep Flatten forms and annotations selected, and click Flatten PDF. A filled 5-page tax form was flattened in under a second in our tests: the typed answers, comments and stamps become part of the page, the fields can no longer be edited, text stays selectable and the size barely changes. Flatten to images goes further and turns each page into a 150 DPI picture, which removes everything interactive but makes the text unsearchable and the file usually much larger."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab, with pdf-lib and pdf.js. The PDF is never sent to a server."]
  - ["Modes", "Flatten forms and annotations (text stays selectable, size barely changes) or Flatten to images (150 DPI JPEG pages, text no longer selectable)"]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. Forms mode handled a 400-page file in 0.9 seconds in our tests. Images mode is heavier: a 400-page text report took 19 seconds and produced 165 MB, too much for most phones."]
  - ["Input", "One .pdf file. Password-protected PDFs must be opened and saved without the password first."]
  - ["Output", "yourfile-flattened.pdf in both modes. You click Download; your original is not changed."]
  - ["Kept (forms mode)", "Page content, selectable text including the filled-in values, links, bookmarks, document properties, page size and rotation"]
  - ["Removed (forms mode)", "Form fields, XFA form data, flattened annotations and their pop-up notes. Any digital signature is no longer valid."]
  - ["What stays on your device", "The original, the flattened file and your choices. The site records only an anonymous page view."]
  - ["Works offline?", "Mostly. The PDF engine loads when you add your file; the page renderer used by Flatten to images loads the first time you run that mode, so do that once while online."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I flatten a filled PDF form for free?"
    a: "Open Flatten PDF, add the filled form, leave Flatten forms and annotations selected and click Flatten PDF, then Download. The answers become part of the page, so they show in every viewer and can no longer be changed. It is free and the form never leaves your device."
  - q: "Will I still be able to select and search the text?"
    a: "Yes, in Flatten forms and annotations mode. The filled-in values are drawn as real text, so you can still search for a name or copy an amount. Flatten to images is different: every page becomes a picture and the text can no longer be selected or searched."
  - q: "Why is the file so much bigger after Flatten to images?"
    a: "Because each page becomes a 150 DPI JPEG picture, which is heavier than text. In our tests a letter page of text came out at about 170 to 410 KB, so a 247 KB, 120-page report grew to 36.5 MB. Scanned files, which are pictures already, can come out smaller."
  - q: "Does flattening remove comments and highlights?"
    a: "It keeps how they look and removes them as comments. Highlights, stamps, shapes and comment boxes are drawn into the page and deleted as annotations. Sticky notes that have no drawn appearance, and file attachments, are left as they were; the tool tells you how many."
  - q: "What happens to links and bookmarks?"
    a: "Both stay in Flatten forms and annotations mode: links remain clickable and bookmarks still work. Flatten to images builds a brand-new file from pictures of the pages, so links, bookmarks and document properties are all gone in that mode."
  - q: "Can I flatten a digitally signed PDF?"
    a: "You can, but the digital signature will no longer be valid, because the file has changed. The visible signature appearance is drawn into the page. If a signature must stay verifiable, flatten the form first and have it signed afterwards."
  - q: "Do French accents survive flattening?"
    a: "Yes. Values such as Jean-François Côté or Québec are redrawn correctly. Characters outside the built-in font, such as Chinese characters or emoji, keep the appearance the form already had, and the tool lists those fields by name so you can check them."
  - q: "Is flattening the same as making a PDF read-only?"
    a: "Not quite. Flattening removes the fields, so nobody can type over the answers with an ordinary viewer, but a full PDF editor can still change any page. To stop people opening the file at all, protect the flattened copy with a password."
---
## How Do I Flatten a PDF for Free?

Four steps, and in forms mode the work usually takes less than a second.

### Step 1: Add the PDF

Drop the file on **Drop your PDF here**, or click to choose it. The card shows the file name, the page count and what the tool found, for example "48 form fields · 2 annotations (comments, highlights, stamps…)". **Choose another file** swaps it. If nothing interactive is found, the card says so and pre-selects the images mode.

### Step 2: Choose how to flatten

Under **How to flatten**, pick one:

- **Flatten forms and annotations**: filled-in values, comments and stamps become part of the page. Text stays selectable and the file size barely changes. This is selected when the file has fields or annotations.
- **Flatten to images**: each page becomes a picture at 150 DPI. Everything interactive disappears, but the text can no longer be selected or searched, and the file is usually larger.

This is the step people get wrong. Flatten to images sounds more thorough, so it gets picked for a filled form that only needed forms mode, and the result is a file many times bigger (a 247 KB report grew to 36.5 MB in our tests) with no searchable text. Use images mode only when you need every trace of editable text gone.

### Step 3: Click Flatten PDF

The button reads "Flattening…", with "Page 4 of 12" in images mode, then "Saving…". The result card reports what happened, such as "48 form fields and 2 annotations flattened" or "12 pages converted to images", and adds a line when links were kept, when some notes were left alone, or when a field needs checking.

### Step 4: Download and check

Nothing downloads until you click **Download**. The file is named `yourfile-flattened.pdf`. Open it and click into a field that used to be fillable: nothing should happen, and the answer should still show.

## What Is the Difference Between the Two Modes?

| | Flatten forms and annotations | Flatten to images |
|---|---|---|
| Filled-in values | Drawn into the page as text | Part of a picture |
| Select, search, copy text | Yes | No (run OCR PDF afterwards if needed) |
| Links and bookmarks | Kept | Removed |
| File size | About the same | Usually much larger for text; scans can shrink |
| Speed, 400 pages | 0.9 seconds in our tests | 19 seconds in our tests |
| Quality | Unchanged, nothing re-rendered | 150 DPI JPEG, lossy |
| Sticky notes without an appearance | Left as they were | Not drawn |

In forms mode, the tool redraws each field's appearance where needed, paints every field and visible annotation onto its page exactly where it sat, then deletes the form and those annotations. Pages turned 90 or 180 degrees and cropped pages come out the same as before, which we checked by comparing renders.

Images mode renders each page as you see it on screen, crop and rotation included, and builds a new PDF from those pictures. Nothing from the old file survives except the look. If you need the text searchable again, run the result through [OCR PDF](/en/ocr-pdf).

## How Do I Flatten a Filled CRA or Service Canada Form?

Many federal and provincial forms are fillable PDFs. Once you have filled one in, flattening helps in two situations: the recipient's viewer shows blank boxes where your answers were, or you do not want the answers changed after you send it.

1. Fill the form in a PDF reader and save it.
2. Add the saved copy here, keep **Flatten forms and annotations**, and click **Flatten PDF**.
3. Open the result and scroll through every page; the answers should be in the boxes.

Check the field count on the card before you flatten. If it says 0 form fields on a form you clearly filled, the form is probably a pure XFA form, a format some older government forms use, where the fields live outside the page. Forms mode has nothing to draw in that case and drops the XFA data. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) for the way around it. Forms that combine both formats, as many tax forms do, flatten normally: a filled 5-page US tax form with 48 fields came out correct in our tests.

## Use Cases by Situation

### A filled government form going by email

A fillable form sent to an office can arrive with empty boxes if their viewer does not draw field values. Flattened, the answers are part of the page and show the same everywhere, on a phone, in a browser or printed.

### A contract with comments and stamps from a review

After a review in Acrobat or Preview, a contract carries highlights, comment boxes and an APPROVED stamp. Flattening fixes them into the page so they print reliably and can no longer be deleted one by one as comments.

### A form signed with a stamp or annotation

If a signature was added as an annotation in another app, flattening makes it part of the page. To sign first, use [Sign PDF](/en/sign-pdf), then flatten if the signed copy still has fillable fields.

### A watermarked copy that should stay watermarked

A text watermark can be removed by an editor. Run a file marked with [Watermark PDF](/en/watermark-pdf) through **Flatten to images** and the watermark becomes part of each page picture.

## When Should You Not Use This Tool?

- **When the recipient needs to keep filling the form.** Flattening removes the fields. Keep an unflattened copy; to build a new fillable form, use [Make PDF Fillable](/en/make-pdf-fillable).
- **When a digital signature must stay valid.** Any change to a signed file breaks the signature.
- **To shrink a file.** Forms mode keeps the size; images mode usually makes text files much bigger. Use [Compress PDF](/en/compress-pdf).
- **To hide information.** Flattening does not remove anything that is printed on the page. It only fixes what is there.
- **On a pure XFA form.** See the section above.
- **On a password-protected PDF.** Open it with its password in your reader, save or print an unprotected copy, then flatten that copy. Protect the result again with [Protect PDF](/en/protect-pdf) if needed.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| A field shows "?" or odd characters | Check the fields named in the result note and retype them in plain Latin characters if possible | Characters outside the built-in font cannot be redrawn, so the old appearance is kept |
| A field's value disappeared | Fill it again in a PDF reader, save, and flatten again | The result note lists fields that had a value but no visible appearance to draw |
| Sticky notes are still clickable | Use Flatten to images if they must go | Notes with no drawn appearance are left as they were in forms mode |
| The flattened file is huge | Use Flatten forms and annotations instead | Images mode stores each page as a 150 DPI picture |
| "0 form fields" on a filled form | See the XFA section above | Pure XFA forms keep their fields outside the page |
| "This PDF is password-protected" | Open it with the password in your reader, save an unprotected copy, then flatten | An encrypted file cannot be read until it is opened |
| Text can no longer be searched | Use forms mode, or run OCR PDF on the images result | Images mode turns text into pictures |

## The Bottom Line

Flatten PDF fixes filled-in answers, comments and stamps into the page in about a second, keeps the text selectable and the size about the same, all in your browser. Reach for Flatten to images only when every bit of editable text has to go, and expect a bigger, unsearchable file when you do.
