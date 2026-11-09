---
title: "PDF to PowerPoint Free: 1 Slide per Page in Your Browser (2026)"
h1: "How to Convert a PDF to PowerPoint"
lead: "Turn a PDF into a .pptx with one slide per page so you can present it in PowerPoint, Keynote or Google Slides. The conversion runs in your browser; nothing is uploaded."
description: "Convert a PDF to a PowerPoint .pptx for free in your browser: each page becomes one slide rendered as a sharp picture. Nothing uploaded; text not editable."
answer: "Select the PDF, click Convert File, and a .pptx downloads with one slide per page. Each slide holds a high-resolution picture of the page, not editable text boxes, so this is for presenting a PDF, not rewriting it. It is free, there is no account or watermark, and the PDF is rendered inside your browser tab rather than on a server."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no limit on conversions"]
  - ["Where the conversion happens", "In your browser tab: pdf.js draws each page, JSZip assembles the .pptx. No file is uploaded."]
  - ["Maximum file size", "No fixed cap. The output is larger than the input because every page becomes a PNG: a 40-page text PDF of 2 MB turns into a 10–25 MB deck. Keep PDFs under about 60 pages on a phone."]
  - ["Pages", "Every page is converted, one slide each. There is no page picker; extract the pages you want first."]
  - ["Input", ".pdf only. Password-protected PDFs must be unlocked first."]
  - ["Output", "A .pptx (PowerPoint 2007 and later, Keynote, Google Slides, LibreOffice). 4:3 slides, each filled by a PNG rendered at 2× scale. Text is not editable. Your PDF is not changed."]
  - ["What stays on your device", "The PDF, the page images and the finished deck. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page and the PDF engine have loaded."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to PowerPoint for free?"
    a: "Open the tool, choose the PDF with Select File or drag it in, and click Convert File. A .pptx with one slide per page downloads within seconds. No account, no watermark, and the pages are rendered in your own browser rather than sent to a server."
  - q: "Can I edit the text after converting?"
    a: "No. Each slide contains a single picture of the PDF page, so the words are pixels, not text boxes. You can add new text boxes, arrows and notes on top, reorder and delete slides, but you cannot retype a sentence. To get editable text out of a PDF, use PDF to Word and paste from there."
  - q: "Why are my slides squashed or stretched?"
    a: "The tool makes 4:3 slides (10 by 7.5 inches) and stretches each page image to fill the slide. A PDF exported from a 4:3 deck lands perfectly; a portrait letter page or a 16:9 deck is distorted. In PowerPoint, select the picture and use Reset Picture & Size to restore its proportions, then resize it by a corner handle."
  - q: "Does the converter work with a scanned PDF?"
    a: "Yes, and the result is the same as for any other PDF: a picture of each scanned page on its own slide. Since a scan is already a picture, nothing is lost in the process beyond the fixed 2× render scale."
  - q: "Can I convert only some pages?"
    a: "Not in this tool, which converts the whole document. Run the PDF through Extract PDF Pages or Split PDF first, then convert the shorter file. Alternatively convert everything and delete the extra slides in PowerPoint."
  - q: "Will the .pptx open in Google Slides and Keynote?"
    a: "Yes. The file is a standard Office Open XML package with one picture per slide and a blank layout, which every modern presentation app reads. Upload it to Google Drive and open with Slides, or double-click it on a Mac to open in Keynote."
  - q: "Why is the PowerPoint so much bigger than the PDF?"
    a: "A PDF stores text as compact font instructions; the deck stores each page as a lossless PNG of roughly 1,224 by 1,584 pixels. A text page that weighed 40 KB in the PDF becomes 200–600 KB as an image. Compress the pictures inside PowerPoint (File → Compress Pictures) if the deck needs to be emailed."
  - q: "Is it safe to convert a confidential PDF here?"
    a: "The PDF is read into your browser's memory, rendered to images there and packed into the .pptx there. No request carries the document to a server, which you can verify in the Network panel of your browser's developer tools. Close the tab and the memory is released."
---
## How Do I Convert a PDF to PowerPoint for Free?

The whole process is one upload and one click. Before you start, be clear about what you are getting: a deck of pictures, one per page, that you can present and annotate but not retype.

### Step 1: Select the PDF

Click **Select File** or drag the PDF onto the drop zone. The file is read into memory; no slide is built until you press the button.

### Step 2: Trim the PDF first if you only need part of it

The tool converts every page. A 120-page annual report becomes 120 slides and a very heavy deck. If you need the ten pages with the charts, run the file through [Extract PDF Pages](/en/extract-pdf-pages) first. This is the step most people skip and then regret when they open a 60 MB .pptx.

### Step 3: Click Convert File

Press **Convert File**. The engine draws page 1 at twice its nominal size to an off-screen canvas, saves it as a PNG, places that PNG on a blank slide, and repeats for every page. On a laptop a 20-page text PDF takes 3–6 seconds; a 20-page scan with full-page images takes 10–20 seconds.

### Step 4: Open the deck and fix proportions if needed

The .pptx downloads with the same name as your PDF. Open it in PowerPoint, Keynote or Google Slides. Slides are 4:3 and the page image is stretched to fill them, so a portrait page looks compressed. Select the picture, choose **Reset Picture & Size** (PowerPoint) or drag a corner handle while holding Shift, and the page snaps back to its real shape.

### Step 5: Build on top

Add a title slide, draw boxes and arrows over the figures you want to highlight, add speaker notes. Everything you add is normal editable PowerPoint content; only the page picture beneath is fixed.

> **Tip:** If the deck will be shown on a 16:9 screen, change the slide size in PowerPoint (Design → Slide Size → Widescreen) before you reset the picture proportions, so the page sits centred with dark margins rather than being cropped.

## What Happens to My PDF During the Conversion?

Two open-source libraries do the work, both loaded into the page and both running in your tab. pdf.js, the engine Firefox uses to display PDFs, renders each page to an invisible canvas. JSZip then writes the parts of a PowerPoint file by hand: the content-types list, the presentation manifest, one slide XML file per page, and a `media` folder with the PNGs. A .pptx is a ZIP archive with a fixed folder layout, so that is literally all a PowerPoint file is.

Nothing in that chain talks to a server. The requests you would see in your browser's Network panel are the page assets, the pdf.js script and its character maps, and one anonymous page view. The PDF, the page images and the finished deck exist only in your browser's memory and in the download.

For Canadian readers this is the difference between presenting a client's financial statements, a hospital's internal report or an IRCC case file from a PDF, and handing a copy of that document to a converter service whose retention policy you have not read. The file never leaves your laptop, so there is nothing for a privacy law to govern.

## Will the Text Be Editable in PowerPoint?

No, and it is worth understanding why rather than hoping a different setting fixes it.

A PDF does not store paragraphs. It stores drawing instructions: put this glyph at this coordinate, in this font, at this size. Reconstructing paragraphs, bullet lists and text boxes from those coordinates is a difficult guessing exercise, and the tools that attempt it (Acrobat's export, Microsoft's import in recent Word versions) still produce decks that need an hour of tidying. This tool deliberately does not try. It renders the page faithfully as a picture and leaves it at that, which means what you see in PowerPoint is exactly what you saw in the PDF.

| What you want to do with the deck | Does the picture-per-slide approach work? | What to do instead |
|---|---|---|
| Present a PDF report at a meeting | Yes, that is what it is for | Nothing; add a title slide and go |
| Annotate figures with arrows and callouts | Yes; draw on top of the picture | Nothing |
| Reorder, remove or duplicate pages as slides | Yes; slides are independent | Nothing |
| Fix a typo in the body text | No; the text is pixels | Cover the typo with a white box and a text box, or fix the source and reconvert |
| Reuse the PDF's bullet points as your own slide text | No | Run [PDF to Word](/en/pdf-to-word), copy the text, paste into PowerPoint |
| Edit a chart's numbers | No; charts in PDFs are already flattened | Rebuild the chart with Insert → Chart from the source data |
| Change fonts or the colour scheme | No | Recreate the slides, or use the picture as a tracing reference |

The honest summary: this is the right tool when the PDF is the finished product and you need to show it slide by slide. It is the wrong tool when the PDF is raw material for a new deck.

## How Big Will the PowerPoint Be, and How Long Does It Take?

Every page becomes a lossless PNG of about 1,224 × 1,584 pixels for a letter page, which is why the deck is always larger than the PDF.

| Source PDF | Pages | PDF size | Approximate .pptx size | Time on a 2022 laptop | Time on a 2020 phone |
|---|---|---|---|---|---|
| Text-only report, white background | 20 | 0.5–1 MB | 5–10 MB | 3–6 s | 8–15 s |
| Exported slide deck, coloured backgrounds | 30 | 3–8 MB | 15–30 MB | 6–12 s | 20–40 s |
| Scanned contract, grey page texture | 40 | 20–40 MB | 30–50 MB | 15–30 s | may reload the tab |
| Brochure with full-bleed photos | 12 | 10–20 MB | 12–25 MB | 5–10 s | 15–30 s |

PNG compresses flat colour very well and photographic texture poorly, so white text pages are cheap and scans are expensive. If the deck has to go by email, open it in PowerPoint and use **File → Compress Pictures** with the 150 ppi setting, which usually halves the size with no visible change on a projector.

## How Do I Convert a PDF to PowerPoint on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Safari handles decks up to 30–40 pages comfortably. The .pptx lands in Files → Downloads; tap it to preview, or open it in Keynote or the PowerPoint app. Keynote's own import has no PDF option, so the browser tool fills a real gap on iOS.

**Android.** Chrome saves the deck to Downloads. Google Slides, Microsoft PowerPoint and WPS Office all open it. Phones with 3 GB of RAM should stay under about 40 pages.

**Mac.** Keynote cannot open a PDF directly, but you can drag a PDF page onto a Keynote slide as an image, one page at a time. For three pages, do that; for thirty, use this tool and open the result in Keynote or PowerPoint.

**Windows.** PowerPoint for Microsoft 365 has **Insert → Pictures** for a single page image, and no bulk PDF import. Acrobat Pro exports to PowerPoint with text reconstruction if you have a subscription; expect to tidy the layout afterwards.

**Google Slides.** Slides cannot import a PDF. Convert here, upload the .pptx to Drive, and open with Slides; it keeps one picture per slide exactly as built.

## When Should You Not Use This Tool?

- **You need editable text.** Use [PDF to Word](/en/pdf-to-word) and copy from the document, or Acrobat's export if you own it.
- **The PDF is locked with a password.** pdf.js cannot render it. Remove the password you know with Unlock PDF first.
- **The PDF has hundreds of pages.** A 300-page deck is unusable and the .pptx would be several hundred megabytes. Extract the pages you will actually present.
- **Exact proportions matter and you cannot fix them afterwards.** The slides are 4:3 and the picture is stretched. Google Slides and Keynote both let you reset a picture's aspect ratio, but if the deck goes straight to someone who will only press Play, convert with [PDF to JPG](/en/pdf-to-jpg) and place the images on correctly sized slides yourself.
- **You need the slides to be light.** Each page is a lossless PNG. Compress pictures in PowerPoint after converting, or accept the size.
- **The PDF contains XFA forms.** Dynamic forms render as a blank page in browser engines; see [how to edit an XFA PDF](/en/guides/edit-xfa-pdf).

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| Slides look stretched or squashed | Select the picture → Reset Picture & Size, then resize by a corner | The tool fills a 4:3 slide regardless of the page's shape |
| The deck is huge | File → Compress Pictures at 150 ppi in PowerPoint | Each slide is a lossless PNG; compression recodes them as JPEG |
| I cannot click into the text | Expected; add a text box on top | The slide holds a picture, not text |
| Some pages are blank | Check for an XFA form layer or a password | Both prevent the renderer from drawing the page |
| Safari reloads during conversion | Convert fewer pages or use a laptop | iOS limits a tab's memory and restarts it when exceeded |
| PowerPoint reports the file needs repair | Reconvert; if it persists, open in Google Slides and re-export | A download that was interrupted leaves a truncated ZIP |

## What Else Can I Do With a PDF I Want to Present?

- [PDF to JPG](/en/pdf-to-jpg) when you want the page images themselves to drop into an existing deck.
- [PDF to Word](/en/pdf-to-word) when you need the words, not the look.
- [Extract PDF Pages](/en/extract-pdf-pages) to cut the document down before converting.
- [Compress PDF](/en/compress-pdf) to shrink a scanned source before rendering it.

## The Bottom Line

This converter turns a PDF into a .pptx with one high-resolution picture per page, inside your browser, free, with nothing uploaded. It is the right choice when you need to present or annotate a finished PDF in PowerPoint, Keynote or Google Slides, and it works on a phone where no native option exists. It is the wrong choice when you need to edit the words; for that, go through PDF to Word. Trim the PDF first, click Convert File, and reset the picture proportions when you open the deck.
