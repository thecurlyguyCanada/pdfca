---
title: "Add Image to PDF Free: Logo, Stamp or Photo, No Upload"
h1: "Add an Image to a PDF"
lead: "Choose a PDF and an image, tap the page where the image should go, size it, and download. It runs in your browser; nothing is uploaded."
description: "Add a logo, stamp, photo or signature image to any PDF page for free: drag, resize, set opacity, repeat on all pages. Transparency and forms kept, no upload."
answer: "Add your PDF, choose an image, tap the page where it should go, then drag it into place and resize it with the corner handle or the − and + buttons. Tick Apply to all pages for a logo on every page, then click Add image to PDF. A 400-page file took under a second in our tests. PNG transparency is kept, and the rest of the PDF (text, links, form fields, bookmarks) is left as it was."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab: pdf.js shows the pages, pdf-lib writes the file. Neither the PDF nor the image is sent to a server."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 32.5 MB photo PDF worked in our tests on a computer. On an older phone, very large files can make the tab reload."]
  - ["Pages", "No set maximum. Adding a logo to all 400 pages of a report took 0.93 seconds in our tests."]
  - ["Input", "One .pdf, plus PNG, JPG, WebP, GIF, BMP or AVIF images. HEIC images and password-protected PDFs are not accepted."]
  - ["Output", "One PDF named yourfile-with-image.pdf. Your original is not changed."]
  - ["Placement", "Tap to place, drag to move, corner handle or −/+ to resize, opacity 10–100 %, one page or all pages. Lands within 0.5 % of where you dropped it, also on rotated and cropped pages."]
  - ["Kept", "Selectable text, links, fillable form fields, comments, bookmarks and the document title. PNG transparency is kept."]
  - ["What stays on your device", "The PDF, the image and the result. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your PDF (the PDF engine loads with it)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I add an image to a PDF for free?"
    a: "Open the tool, add the PDF, click Choose an image, then tap the page where the image should go. Drag it into position, resize it with the corner handle, and click Add image to PDF, then Download. It is free, adds no watermark, and neither file is uploaded."
  - q: "How do I put my logo on every page of a PDF?"
    a: "Place the logo once on any page, then tick Apply to all pages. It is drawn at the same relative position and the same physical size on every page, including pages of a different size or orientation. The image is stored once, so a 120-page file grew by only about 4 KB."
  - q: "Will a PNG logo keep its transparent background?"
    a: "Yes. PNG files are embedded as they are, transparency included, so a logo or stamp with a transparent background sits on the page without a white box. The image card confirms it with Transparency is kept. A JPG has no transparency, so it always shows as a rectangle."
  - q: "Does adding an image break my form fields or links?"
    a: "No. The original pages are kept as they are and the image is drawn on top. In our tests a fillable W-4 kept all 54 form fields, and a file with bookmarks and a link kept both. Text stays selectable, because the pages are not turned into pictures."
  - q: "Can I put the image behind the text?"
    a: "No. The image is always drawn on top of the page content. To make a background logo or watermark show the text through it, lower the Opacity slider, or use Watermark PDF for a text watermark. Form fields and comments still appear above the image."
  - q: "Can I add a photo from my iPhone?"
    a: "Yes, if it is JPG or PNG; phone photos are turned upright automatically. HEIC photos cannot be opened here, so set the iPhone camera to Most Compatible, or export the photo as JPG first. The tool shows a message if you choose a HEIC file."
  - q: "Is this the same as signing a PDF?"
    a: "Not quite. You can place a scanned signature image here, and it will look signed. Sign PDF is built for that job, with drawing and typing options. Neither adds a digital certificate; whether an image of a signature is accepted depends on who receives the document."
  - q: "Will the image be in the right place on a rotated or cropped page?"
    a: "Yes. The tool converts your drop point using the same view the page is shown in, including page rotation and cropping. In automated tests on rotated, cropped and rotated-and-cropped pages, every image landed within 0.5 % of the page size and appeared upright."
---
## How Do I Add an Image to a PDF for Free?

Six steps. Writing the file takes under a second even for a few hundred pages; the time goes into placing the image where you want it.

### Step 1: Add your PDF

Drop the PDF on the drop zone or click it to choose a file. Page 1 appears on screen, usually within a second. The file name and size show above it, with **Change PDF** if you picked the wrong one. A password-protected file is refused right away with a message, before you do any work.

### Step 2: Choose an image

Click **Choose an image** and pick a logo, stamp, photo or signature: PNG, JPG, WebP, GIF and the other formats your browser can open. A card shows the thumbnail and the pixel size; for a PNG it adds "Transparency is kept." Use **Use another image** to add more; small thumbnails then let you pick which one the next tap places.

### Step 3: Tap the page where the image should go

This is the step people miss: choosing an image does not put it on the page. Tap or click the spot on the page where the image should be centred. It appears there at 30 % of the page width (smaller if that would make it too tall). Use the ‹ and › buttons to go to another page first; the counter reads "Page 2 of 5".

### Step 4: Move and resize it

The selected image has a red outline, a red × in the top-right corner to remove it, and a round red handle in the bottom-right corner. Drag the image to move it, drag the handle to resize it, or use **−** and **+** to shrink or enlarge it by 10 %. The proportions are always kept. With a keyboard, the arrow keys nudge the selected image by 1 % of the page (5 % with Shift).

### Step 5: Set opacity and choose the pages

The **Opacity** slider runs from 10 to 100 % (100 % by default). Lower it for a faint background logo. Tick **Apply to all pages** to repeat this placement on every page. The **Placed images** list shows each placement with its page ("Page 3" or "All pages") and opacity; tap a row to select it and jump to its page, or remove it.

### Step 6: Click Add image to PDF

The status line counts pages ("Page 12 of 40…"), then the result card shows the file name, size and how many images were placed. Click **Download**. The file is named after yours, for example `quote-2027-with-image.pdf`.

## What Happens to the Rest of My PDF?

Nothing. The tool opens your PDF, draws the image on top of the chosen pages and saves; it does not turn the pages into pictures. Text stays selectable and searchable, and links, fillable form fields, comments, bookmarks and the document title are kept. Form fields and comments still display above the image, so a logo placed over a field does not hide what is typed in it.

Each image is stored once, however many pages it appears on, and opacity is written as a PDF setting rather than baked into the pixels. How each image format is handled:

| Image you add | How it goes into the PDF | Transparency |
|---|---|---|
| JPG from a scanner or computer | Copied byte for byte, no recompression | None (JPG has none) |
| JPG phone photo taken sideways, or CMYK JPG | Redrawn upright with correct colours, saved as high-quality JPEG | None |
| PNG | Copied as is | Kept |
| WebP, GIF (first frame), BMP, AVIF | Converted to PNG, up to 4000 px on the long edge | Kept |
| HEIC | Not accepted; convert to JPG first | — |

Placement is precise on awkward pages too. A page that is stored sideways and displayed rotated, or a page with a crop box, is the classic case where an image ends up somewhere other than where you put it. Here the drop point is converted using the same view you see on screen, and the image is rotated to match the page. In automated tests on rotated, cropped and rotated-and-cropped pages, every image landed within 0.5 % of the page size of the drop point and appeared upright.

## How Do I Add a Logo, Stamp or Photo for Common Jobs?

### A company logo on every page of a quote or invoice

Use a PNG of the logo with a transparent background. Place it once in the top corner of page 1, size it, and tick **Apply to all pages**. It lands at the same relative spot and the same physical size on every page, including a landscape schedule in the middle of a portrait document. On a 400-page report this took 0.93 seconds in our tests.

### A scanned "Received" or "Paid" stamp

Stamp a blank sheet, scan or photograph it, and crop the image to the stamp in your phone's photo editor (this tool does not crop images). Place it on the page and lower the opacity to about 80 % so the text underneath still shows. For a stamp from a photo, a PNG with a transparent background looks most natural; a JPG brings its white rectangle with it.

### A photo on an application or registration form

Some forms have a box for a photo: a club membership, a building access card, a volunteer application. Place the photo in the box and resize it with the corner handle until it fits. Fillable fields on the form keep working. Check the instructions first: forms that require a printed, certified photo, such as passport applications, will not accept a placed image.

### A scanned signature on a letter

Place a photo or scan of your signature on the signature line and resize it to fit; a transparent PNG looks like ink rather than a pasted box. If you do not have an image of your signature yet, [Sign PDF](/en/sign-pdf) lets you draw or type one instead.

## When Should You Not Use This Tool?

- **You need text, not a picture.** For "Draft" or "Confidential" across each page, use [Watermark PDF](/en/watermark-pdf); for a signature you draw or type, use [Sign PDF](/en/sign-pdf).
- **The image must sit behind the text.** Images are always drawn on top. A lower opacity is the closest you can get.
- **You need to crop, rotate or remove the background of the image.** Do that in a photo editor first; this tool only resizes. The image is rotated only to follow the page.
- **You want to change or remove an image already in the PDF.** This tool adds images; it does not edit existing ones.
- **You want to turn photos into a new PDF.** Use [JPG to PDF](/en/jpg-to-pdf) to make a PDF from images.
- **The PDF is password-protected or the photo is HEIC.** Remove the password in the app that made the file, and convert HEIC photos to JPG.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| Tapping the page does nothing but show a message | Choose an image first, then tap the page | There is nothing to place until an image is chosen |
| The logo has a white box around it | Use a PNG with a transparent background | JPG files have no transparency |
| "HEIC photos can't be opened here" | Set the iPhone camera to Most Compatible, or export the photo as JPG | HEIC is not decoded by this tool |
| "This PDF is password-protected" | Remove the password in the app that made the file, then try again | The file cannot be edited while locked |
| The image hides part of the text | Lower the Opacity slider, or move the image | The image is always drawn on top of the page |
| A filled-in field shows over the image | Expected; move the image off the field | Form fields display above added images |
| The logo is too small on a large page | Drag the corner handle or press + | The default size is 30 % of the page width |
| Part of the image is cut off | Drag it back inside the page | Anything hanging past the page edge is clipped |

## The Bottom Line

Add Image to PDF puts a logo, stamp, photo or signature exactly where you tap, on one page or all of them, and leaves the rest of your PDF alone: text, links, form fields and bookmarks survive, PNG transparency is kept, and nothing is uploaded. It does not crop images, place them behind the text or open HEIC photos. Choose the PDF, choose the image, tap the page, and click Add image to PDF.
