---
title: "Crop a PDF Free: Trim Margins on One or All Pages, No Upload (2026)"
h1: "How to Crop a PDF and Trim the Margins"
lead: "Drag a crop box over the page, apply it to one page or every page, and download. The crop runs in your browser; nothing is uploaded."
description: "Crop a PDF for free in your browser: drag a box over the page, apply it to one page or all pages, preview, download. Trims margins without re-rendering."
answer: "Add the PDF, drag the handles of the crop box until it frames the part you want to keep, choose All Pages or Current Page, click Preview Crop to check, then Finalize Crop to download. The tool sets each page's crop box, so the result is instant and lossless. It is free and nothing is uploaded. One honest caveat: cropping hides the trimmed area but does not delete it from the file, so it is not a redaction tool."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the crop happens", "In your browser tab with pdf-lib; pdf.js draws the preview. No file is uploaded."]
  - ["Maximum file size", "No fixed cap. 200 MB files crop on a laptop; on a phone keep it under 50–80 MB, since the preview renders pages at screen resolution."]
  - ["Maximum pages", "No set maximum. Applying one crop box to 500 pages takes under a second; the preview renders one page at a time."]
  - ["Crop scope", "One box, applied either to the current page only or to every page. Different boxes on different pages need separate passes (extract, crop, merge)."]
  - ["Input", ".pdf only. A file that asks for a password must be unlocked first with Unlock PDF."]
  - ["Output", "One PDF with the page boxes set to your selection; content is not re-rendered, text stays selectable. The trimmed area is hidden, not removed. The original is not modified."]
  - ["What stays on your device", "The source PDF, the cropped PDF and your crop box. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I crop a PDF for free?"
    a: "Open the tool, add your PDF, drag the corners of the crop box over the first page until it frames what you want to keep, choose whether to apply it to all pages or just this one, click Preview Crop, then Finalize Crop. The cropped PDF downloads immediately. It is free, with no account or watermark, and the crop is done in your browser."
  - q: "Does cropping a PDF remove the content outside the box?"
    a: "No, and this matters. The tool sets the page's crop box and media box, which tells viewers what to display, but the text and images outside the box remain in the file. Someone with a PDF editor can reset the boxes and see them again. To actually remove content, delete the whole page with Delete PDF Pages, or rasterize the cropped file with Compress PDF in Balanced mode so only the visible area is kept as an image."
  - q: "Can I crop every page of a PDF at once?"
    a: "Yes. Draw the box on any page, select All Pages, and the same box is applied to every page. The box is stored as a percentage of the page, so it lands in the same relative position on a letter-size page and an A4 page. For pages with different layouts, crop them in separate passes."
  - q: "Can I crop only one page?"
    a: "Yes. Use the arrows to go to the page, draw the box and choose Current Page before you finalize. Only that page's boxes change; the rest of the document is untouched."
  - q: "Does cropping lower quality or change the file size?"
    a: "Neither. The page content is not redrawn; only the box coordinates change, so text stays selectable and images keep their resolution. File size changes by a few bytes. If you want the file to become smaller, cropping is not the tool; Compress PDF is."
  - q: "Can I undo a crop later?"
    a: "The original file on your device is unchanged, so you can always go back to it. The cropped file itself can be un-cropped by any PDF editor that can edit page boxes, because the content is still there; that is the flip side of the privacy caveat above."
  - q: "Can I crop a password-protected PDF?"
    a: "Not until it is unlocked. A PDF that asks for a password cannot be read by the engine; remove the password first with Unlock PDF, then crop. A PDF that opens freely but restricts editing usually crops without an extra step."
---
## How Do I Crop a PDF and Trim the Margins for Free?

Five actions. The slow part is deciding where the box goes; the crop itself is instant.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The first page appears at full width with a crop box already drawn, inset 10% from each edge. Use the arrows to move between pages and the zoom controls to see detail.

### Step 2: Position the crop box

Drag the box's edges and corners until it frames the part of the page you want to keep. The box is measured as a percentage of the page, so a box that keeps the middle 80% of a letter-size page keeps the middle 80% of an A4 page too. Zoom in to line up with a table border or a scan's edge.

This is the step people get wrong: the box marks what you keep, not what you remove. Everything outside it will be hidden.

### Step 3: Choose the scope

Select **All Pages** to apply the same box everywhere, or **Current Page** to crop only the page you are looking at. For a scan with uniform margins, All Pages is right. For a document whose first page has a letterhead and the rest do not, crop the first page alone, then run a second pass for the rest, or accept a box that works for both.

### Step 4: Click Preview Crop

The tool renders the cropped page so you can see exactly what a viewer will show. Check that nothing important sits on the edge: footers, page numbers and signature lines are the usual casualties.

### Step 5: Click Finalize Crop

The engine sets each page's boxes and saves a new file. Your original is unchanged.

> **Tip:** Cropping hides; it does not delete. If the margin contains something you need gone, such as a handwritten note or a fax header with a phone number, see the section on privacy below before you share the result.

## What Happens to My File When I Crop It?

Every page in a PDF has a media box (the full page) and an optional crop box (the part a viewer displays). This tool uses pdf-lib, a JavaScript PDF library loaded into the page, to read your file into the tab's memory, convert your percentage box into PDF points for each page, and set both the crop box and the media box to that rectangle. pdf.js, the same engine Firefox uses, renders the preview. The page's content stream, fonts and images are left exactly as they were. That is why the operation is instant and lossless, and also why it is not a redaction: the content outside the box is still in the file.

No server is involved. Open your browser's developer tools, choose the Network tab and finalize a crop. You will see the page's scripts and the two libraries load, one anonymous page-view request, and nothing during the crop. No request carries your document.

Why this matters for Canadian readers is twofold. First, the usual reason: scans of CRA correspondence, IRCC forms, medical records and leases stay on your own device, so there is nothing for a privacy law to govern. Second, the caveat specific to this tool. If you crop a fax header, a hospital's patient sticker or a margin note out of a page and then send the file, the recipient's viewer will not show it, but a PDF editor will. If the hidden content must not be recoverable, remove it properly:

- **Delete the whole page** with [Delete PDF Pages](/en/delete-pdf-pages) when the sensitive content is confined to pages you can spare.
- **Rasterize the cropped file.** Run the cropped PDF through [Compress PDF](/en/compress-pdf) on Balanced or Extreme. Those levels redraw each page as an image of the visible area only, so the hidden content is physically gone. Text becomes non-selectable, which is the trade-off.
- **Use a dedicated redaction tool** when you need to black out words inside the kept area; cropping cannot do that.

## How Do I Crop Scan Margins, Remove Headers or Fit a Page to a Screen?

Three common jobs and the box that solves each:

| Goal | Box to draw | Scope | What to check in the preview |
|---|---|---|---|
| Remove the black edges of a phone scan | Just inside the paper edge | All Pages | The paper edge is not visible on the last page |
| Cut a repeated letterhead or fax header | From below the header to the bottom | All Pages | The first body line is intact on every page |
| Make a two-column journal page readable on an e-reader | One column at a time | Current Page | Column edges; run a second pass for the other column |
| Trim white space around a chart for a slide | Tight around the chart | Current Page | Axis labels and legend are inside the box |
| Standardize scans with uneven margins | A box that fits the tightest page | All Pages | Nothing is clipped on the page with the largest content |

How cropping compares with the alternatives people reach for:

| Method | Lossless? | Text selectable after? | Hidden content recoverable? | Time for 50 pages |
|---|---|---|---|---|
| This tool (sets page boxes) | Yes | Yes | Yes | under 1 second |
| Crop, then Compress (Balanced) | No (re-rendered) | No | No | 10–20 seconds |
| Print to PDF with scaling | No | Usually | Depends on viewer | 30–60 seconds |
| Export pages as images, crop, rebuild | No | No | No | several minutes |

The size of the page changes with the crop: trimming 10% from each side of a letter-size page (8.5 × 11 in) gives a page of 6.8 × 8.8 in. Viewers will display it at the same zoom, so the content appears larger, which is often the point when reading on a tablet.

## How Do I Crop a PDF on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and pick the file from Files. Drag the box handles with a finger; pinch-zoom the page first if the handles are small. The download goes to Files → Downloads. iOS has no built-in PDF crop; the Files app's markup can draw on a page but not trim it.

**Android.** Chrome handles the picker and saves to Downloads. There is no native PDF crop on Android. Keep files under 50–80 MB on phones with 3 GB of RAM or less, because the preview renders each page at screen resolution.

**Mac.** Preview can crop: select the rectangle tool, draw a box, and choose Tools → Crop. It applies to one page at a time and, like this tool, sets the crop box without deleting content. For a 40-page scan with uniform margins, All Pages here is forty times faster than Preview.

**Windows.** Windows has no built-in PDF crop. Adobe Acrobat Reader (free) does not crop either; the paid Acrobat does. This page covers the gap.

**Chromebook.** Works as on desktop Chrome; downloads go to the Downloads folder or Google Drive.

## When Should You Not Use This Tool?

- **You need the trimmed content to be unrecoverable.** Cropping hides. Delete the page, rasterize with Compress PDF on Balanced, or use a redaction tool.
- **Pages need different boxes.** One box per pass. Either run several passes with Current Page, or extract the odd pages with [Extract PDF Pages](/en/extract-pdf-pages), crop them separately and recombine with [Merge PDF](/en/merge-pdf).
- **You want a smaller file.** Cropping does not reduce size. Use [Compress PDF](/en/compress-pdf).
- **The scan is skewed.** A tilted page cannot be straightened by a rectangular crop. Rescan with deskew, or accept a slightly larger box.
- **Encrypted PDFs.** A file that needs a password to open must go through Unlock PDF first.
- **XFA forms.** Government and bank forms built with Adobe LiveCycle draw their form layer independently of the page boxes and may ignore the crop. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) first.
- **Print production.** Printers want the media box and bleed left alone. Send the original, not a cropped copy.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The crop cut off a footer on later pages | Use the arrows to check the longest page before finalizing, and loosen the box | One box applies to every page; the preview shows only the page you are on |
| The crop did nothing visible in my viewer | Open the file in a second viewer | A few viewers ignore the crop box; this tool also sets the media box, which all viewers honour |
| I cropped the wrong page | Reopen the original and choose Current Page on the right page | The original is never modified |
| The handles are too small to drag on a phone | Zoom the page with the zoom controls first | Handles scale with the page |
| I wanted the content removed, not hidden | Run the cropped file through Compress PDF (Balanced) | Rasterizing keeps only the visible area |
| Safari on iPhone reloads the page | Use a laptop for files over 50–80 MB | iOS limits tab memory and the preview exceeds it |
| The page looks zoomed in after cropping | Expected: the page is smaller, so viewers scale it up | Viewers fit the crop box to the window |

## What Should I Do With the Cropped PDF?

- [Compress PDF](/en/compress-pdf) on Balanced to make the crop permanent by rasterizing, or on Good to shrink a text file.
- [Delete PDF Pages](/en/delete-pdf-pages) to remove pages that cropping could not fix.
- [Rotate PDF](/en/rotate-pdf) when the scan is sideways as well as badly framed.
- [Organize PDF](/en/organize-pdf) to reorder the pages once they are tidy.
- [PDF to JPG](/en/pdf-to-jpg) to turn a tightly cropped chart into an image for a slide.

## The Bottom Line

Cropping a PDF here is a one-step, lossless change to each page's boxes: draw a box, choose one page or all, preview, finalize. It is free, it runs in your browser, and it is the fastest way to trim scan margins or strip a repeated header from forty pages at once. Preview on a Mac does the same for one page at a time; Windows and phones have no built-in option. The one thing to remember is that cropping hides rather than deletes, so when the margin holds something that must not be recovered, follow up by deleting the page or rasterizing the file.
