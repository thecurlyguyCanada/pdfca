---
title: "HEIC to PDF Free: iPhone Photos in 1–3 Seconds, No Upload (2026)"
h1: "How to Convert HEIC to PDF"
lead: "Convert an iPhone HEIC photo into a PDF that Windows, the CRA and any upload form will accept. The decoding runs in your browser; the photo stays on your device."
description: "Convert HEIC to PDF for free in your browser in 1–3 seconds per photo. The iPhone image is decoded locally, never uploaded, and the PDF opens on any Windows PC."
answer: "Click Select File, choose the .heic photo and click Convert File. The browser decodes Apple's HEIC format itself, which takes one to three seconds per photo, then wraps the picture in a one-page PDF that downloads automatically. It is free, there is no watermark and no account, and the photo never leaves your device. For several photos, convert each and combine them with Merge PDF."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the conversion happens", "In your browser tab. heic2any decodes the photo and pdf-lib writes the PDF; nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. Typical 2–5 MB iPhone HEICs are routine; 48-megapixel HEICs of 8–12 MB work on a laptop and take 5–10 seconds on a phone."]
  - ["Photos per conversion", "One HEIC file per run. A burst or multi-image HEIC produces one page per image. Combine several PDFs with Merge PDF."]
  - ["Input", ".heic and .heif (image/heic, image/heif) from iPhone, iPad and newer Android phones."]
  - ["Output", "A PDF with one page per image, sized to the photo's pixels. The photo is re-encoded as JPEG at quality 0.8 during decoding; the original HEIC is not modified."]
  - ["Speed", "1–3 seconds per 12-megapixel photo on a laptop, 3–8 seconds on a phone. The first conversion also loads the decoder, about 1 MB."]
  - ["Works offline?", "Yes, once the page and the decoder have loaded"]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert HEIC to PDF for free?"
    a: "Open the HEIC to PDF tool, click Select File, choose the photo and click Convert File. After one to three seconds of decoding, the PDF downloads automatically, free, with no watermark and no sign-up. The decoding happens in your browser, so the photo is never uploaded."
  - q: "Why won't Windows open my HEIC files?"
    a: "Windows 10 and 11 do not include the HEIF and HEVC codecs by default; Microsoft sells the HEVC extension in its Store, and without it Photos shows a blank thumbnail or an error. A PDF needs no codec, so converting once lets every Windows PC, and every colleague, open the picture."
  - q: "Does the CRA or IRCC accept HEIC?"
    a: "Government upload forms generally list PDF, JPG and PNG and reject other extensions, HEIC included. CRA My Account accepts PDF, JPG and PNG, with a size cap shown on the upload screen; IRCC prefers PDF. Converting a HEIC photo of a slip or a passport page to PDF is the usual fix."
  - q: "Will converting HEIC to PDF reduce the quality?"
    a: "Slightly, and not visibly for documents. The decoder outputs a JPEG at quality 0.8 before it is placed on the page, so a 12-megapixel photo stays 12 megapixels with faint JPEG compression in smooth areas. Text on a receipt, a slip or an ID card remains sharp. For gallery-quality prints, keep the original HEIC."
  - q: "Can I put several HEIC photos into one PDF?"
    a: "Not in one run; the tool converts one file at a time. Convert each photo, then open Merge PDF, add the PDFs, drag them into order and merge. Eight photos take about three minutes including the decoding. A single HEIC that holds a burst does produce one page per image automatically."
  - q: "How do I stop my iPhone from shooting HEIC?"
    a: "Go to Settings → Camera → Formats and choose Most Compatible; new photos are then saved as JPEG. Existing photos stay HEIC. Alternatively, Settings → Photos → Transfer to Mac or PC → Automatic converts to JPEG when you copy photos by cable. Neither changes photos already in the library."
  - q: "Why is the PDF larger than the HEIC?"
    a: "HEIC uses the HEVC video codec, which compresses photos to roughly half the size of a JPEG of the same quality. The PDF holds a JPEG, so a 2.5 MB HEIC typically becomes a 3–5 MB PDF. If a portal caps the size, run the result through Compress PDF."
  - q: "Is it safe to convert passport or ID photos here?"
    a: "The HEIC is read into your browser's memory, decoded there and written to a PDF there; no request carries the photo. You can confirm this in your browser's developer tools under Network while converting: only the page's scripts, the decoder and an anonymous page view are loaded. Close the tab and the data is gone."
---
## How Do I Convert HEIC to PDF for Free?

HEIC is the format every iPhone has shot by default since 2017. It is excellent for storage and poor for sharing: Windows needs a paid codec, many websites refuse the extension and most government upload forms list only PDF, JPG and PNG. This tool fixes that in four steps.

### Step 1: Select the HEIC photo

Click **Select File** or drag the photo onto the drop zone. The picker accepts `.heic` and `.heif`. On an iPhone, tap the drop zone and choose Photo Library; Safari hands the tool the original HEIC. On Windows, the file may show a blank thumbnail in Explorer because the system cannot render it; that is normal, and it still converts.

### Step 2: Click Convert File

The file appears in the tool but is not decoded yet; browsers other than Safari cannot even draw a HEIC thumbnail, so do not worry if the preview is blank. Press **Convert File** to start.

### Step 3: Wait for the decoder

The first time you convert, the page loads the HEIC decoder, a WebAssembly build of libheif packaged as heic2any, about 1 MB. It is cached after that. Decoding then runs on your device: one to three seconds for a 12-megapixel photo on a laptop, three to eight on a phone. The progress indicator stays on screen the whole time; nothing is stuck.

This is the step people get wrong. The pause is the decoding, not an upload. Watch the Network tab and you will see no traffic while it runs. Once decoded, the image is saved as a JPEG at quality 0.8, and pdf-lib creates a page exactly the photo's pixel size and places the picture on it. If the HEIC contains more than one image, as a burst does, each becomes its own page.

### Step 4: Download and repeat

The PDF downloads automatically, named after the photo with a `.pdf` extension. On iPhone it appears in Files → Downloads. Click **Process Another** for the next photo.

### Step 5: Combine the photos if you need one document

For a multi-page claim or a batch of receipts, convert each photo and then use [Merge PDF](/en/merge-pdf): add the PDFs, drag them into order, merge. You get one file with one photo per page.

> **Tip:** On an iPhone, rename or favourite the photos you need before you start. The Photos picker in Safari shows the library in date order, and finding the right receipt among 8,000 photos is the slow part.

## What Happens to My Photo When I Convert It?

Nothing leaves your device, which is less obvious for HEIC than for other formats because browsers cannot read HEIC on their own. Rather than send the file to a server that can, this page brings the decoder to the browser. heic2any wraps libheif, the open-source HEIF library, compiled to WebAssembly so it runs inside the tab. It reads the HEIC from memory, outputs a JPEG into memory, and pdf-lib builds the PDF from that, also in memory. The browser's File API handles the reading and a Blob handles the download.

To verify: open developer tools, select the Network tab and convert a photo. You will see the page's scripts, the decoder loading once, and an anonymous page-view ping. No request carries your picture.

The photos people convert here are the sensitive ones: passport pages for an IRCC application, a driver's licence for a rental, T4 slips photographed at the kitchen table, a dented bumper for an insurance claim, a child's prescription for a benefits form. A HEIC decoded on your device and closed with the tab cannot be stored, scanned or leaked by anyone else.

## Why Do Windows and Upload Portals Reject HEIC, and Does PDF Fix It?

HEIC stores each photo as a single frame of HEVC (H.265) video inside a HEIF container. That is why a 12-megapixel iPhone photo is 1.5–3 MB rather than the 3–5 MB a JPEG needs. It is also why so much software cannot open it: HEVC is covered by patent licences, so Microsoft ships Windows without the decoder and sells it separately, Chrome did not read HEIC for years, and web developers writing upload forms validate against the list they know, which is PDF, JPG and PNG.

A PDF sidesteps all of that. The image inside it is a plain JPEG, and PDF readers are on every machine. What you give up is the HEVC compression, so the file grows:

| Photo | HEIC size | PDF size after conversion | Decode time, 2022 laptop | Decode time, 2020 phone |
|---|---|---|---|---|
| 12 MP iPhone photo (4032×3024) | 1.5–3 MB | 3–5 MB | 1–2 s | 3–6 s |
| 12 MP photo in low light (more noise) | 2.5–4 MB | 4–6 MB | 1–2 s | 3–6 s |
| 24 MP iPhone 15/16 default | 2.5–4.5 MB | 5–8 MB | 2–3 s | 5–8 s |
| 48 MP ProRAW-adjacent HEIC Max | 8–12 MB | 12–20 MB | 3–5 s | 8–15 s, may fail on 3 GB RAM |
| Burst of 10 frames in one HEIC | 10–20 MB | 10 pages, 25–40 MB | 10–20 s | Use a laptop |
| Screenshot saved as HEIC | 0.5–1.5 MB | 1–2 MB | under 1 s | 1–2 s |

Where portals stand today:

- **CRA My Account.** Accepts PDF, JPG and PNG for submitted documents. HEIC is not on the list. Check the current size cap on the upload screen; it varies by form.
- **IRCC.** Online applications prefer PDF and list specific accepted types per document. A PDF of a passport photo page is the safe choice.
- **Insurance claims.** Most Canadian insurers' claim portals accept JPG, PNG and PDF. A PDF lets you send several damage photos as one file.
- **Employers and schools.** Blackboard, Brightspace and most HR systems accept PDF universally; HEIC support is unpredictable.

If the output is too large for a cap, run it through [Compress PDF](/en/compress-pdf). A 5 MB page compresses to roughly 500 KB–1 MB with the text on a slip still readable.

> **Tip:** If you only ever need JPEGs, Settings → Camera → Formats → Most Compatible makes the iPhone shoot JPEG from then on. It costs you about half again as much storage per photo, and it does nothing for photos already taken; those still need converting.

## How Do I Convert HEIC to PDF on iPhone, Windows, Mac or Android?

**iPhone and iPad.** Open the tool in Safari, tap **Select File**, choose Photo Library and pick the photo. Safari passes the original HEIC, decoding takes three to eight seconds, and the PDF lands in Files → Downloads. Apple's own route is Photos → Share → Print → pinch outward on the preview → Share → Save to Files; it produces a PDF scaled to Letter and needs no website, but takes six taps per photo. Another native trick: AirDrop or Mail converts HEIC to JPEG automatically when the recipient device needs it, which is why Mac users rarely notice the format.

**Windows 10 and 11.** This is where HEIC causes the most trouble. Photos shows a blank tile and offers to buy the HEVC extension. Skip that: open Chrome, Edge or Firefox, go to this page and convert. Drag files straight from Explorer onto the drop zone; the blank thumbnail does not matter. There is no built-in Windows path to PDF for a HEIC without the codec.

**Mac.** Preview opens HEIC natively and File → Export as PDF gives a one-page PDF at the photo's size. Use that if you are at a Mac. The web tool is useful on a Mac you do not control, or when you want the same steps as on your phone.

**Android.** Newer Samsung and Pixel phones can shoot HEIC too, and photos received from iPhone friends often arrive as HEIC. Chrome on Android runs the tool; the download goes to Downloads. Keep single photos under about 10 MB on phones with 3–4 GB of RAM, because decoding needs the full 48 MB uncompressed bitmap of a 12-megapixel frame plus working memory.

**Chromebook.** Works as on desktop Chrome. ChromeOS can display HEIC in the Gallery app but has no direct PDF export.

## When Should You Not Use This Tool?

- **You need the photo at its very best for printing.** The decode step writes a JPEG at quality 0.8. That is invisible on documents and fine for 4×6 prints, but for a large gallery print export the original from Photos at full quality instead.
- **You have a Live Photo and want the motion.** Only the still frame converts. PDF has no way to hold the video part.
- **You have 50 photos on a phone.** At three to eight seconds each plus a merge, that is a long session on a small screen. Transfer them to a laptop, or shoot in Most Compatible mode next time.
- **The file is a .heic video or a Live Photo bundle exported from a third-party app.** Some apps write unusual HEIF containers that the decoder does not recognize; the tool reports that the file could not be processed. Export as JPEG from the app and use [JPG to PDF](/en/jpg-to-pdf).
- **You need searchable text.** A photographed form stays a picture; converting adds no text layer.
- **The image is a Dolby Vision or 10-bit HDR HEIC and tone matters.** It converts, but the wide colour range is flattened to standard JPEG colour and bright skies look slightly duller.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| Nothing happens for several seconds after clicking Convert File | Wait; the indicator is the decoder working, not an upload | Decoding HEVC in WebAssembly takes 1–3 s per photo on a laptop and longer on a phone |
| "Could not process HEIC file" | Open the photo in Photos or Preview and export it as JPEG, then use JPG to PDF | Some third-party apps write HEIF containers the decoder does not support |
| The photo is sideways in the PDF | Run the PDF through Rotate PDF | A small number of HEICs carry a rotation flag the PDF page does not apply |
| Safari on iPhone reloads the page during conversion | Convert one photo at a time, or use a 24 MP photo rather than a 48 MP one | iOS limits a tab's memory, and decoding a 48 MP frame needs over 190 MB |
| Windows Explorer shows a blank thumbnail and I am not sure it is the right photo | Check the file's date and name in Explorer, drag it in, and open the PDF to confirm | Windows lacks the codec; the browser-side decoder does not |
| The PDF is twice the size of the HEIC | Expected; use Compress PDF if a portal caps the size | HEVC compresses about twice as well as the JPEG the PDF must contain |
| A burst produced a 10-page PDF | Open it in Delete PDF Pages and keep the frame you want | Multi-image HEICs produce one page per frame |

## What Should I Do With the Converted Photo?

- [Merge PDF](/en/merge-pdf) to combine several converted photos into one document, in the order you drag them.
- [Compress PDF](/en/compress-pdf) when the result is over a portal's size cap.
- [Rotate PDF](/en/rotate-pdf) if a photo came out sideways.
- [Delete PDF Pages](/en/delete-pdf-pages) to drop unwanted frames from a burst.
- [JPG to PDF](/en/jpg-to-pdf) for photos that are already JPEG, including everything shot in Most Compatible mode.

## The Bottom Line

HEIC is a storage format, not a sharing format, and the fix is to decode it once and wrap the result in a PDF that opens everywhere. This tool does the decoding in your browser with a WebAssembly build of libheif, takes one to three seconds per photo on a laptop, and never uploads the picture. The trade-offs are honest ones: the PDF is roughly twice the size of the HEIC and holds a quality-0.8 JPEG, which is invisible on slips, IDs and claim photos. Use Preview if you are on a Mac; use this page on Windows, on a phone, or whenever a CRA, IRCC or insurance form refuses the file.
