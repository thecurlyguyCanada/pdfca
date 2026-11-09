---
title: "Sign a PDF Free: Draw, Type or Upload, Nothing Uploaded (2026)"
h1: "How to Sign a PDF Electronically"
lead: "Draw, type or upload your signature, drop it on the page with initials and today's date, and download the signed PDF. Everything stays in your browser."
description: "Sign a PDF for free in your browser: draw, type or upload a signature, add initials and the date, and download in seconds. The file never leaves your device."
answer: "Upload the PDF, click Create New Signature and draw it, type it or upload a photo of it, then drag it onto the signature line and resize. Add initials, today's date or a text note the same way and click Finish & Download. The signature is stamped into the page as an image. Free, no account, nothing uploaded. It is an electronic signature, not a certificate-based digital signature."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, sign as many documents as you need"]
  - ["Where the signing happens", "In your browser tab. pdf.js shows the pages; pdf-lib stamps the signature into the file. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap. A 30-page contract is instant; 100+ page scanned bundles over ~100 MB are slow to preview on phones."]
  - ["Maximum pages and signatures", "No set limit. Sign and initial every page of a 60-page lease in one session; each page renders as you open it."]
  - ["Input", ".pdf only. Password-protected files must be unlocked first; XFA forms are not supported."]
  - ["Signature types", "Draw with mouse, finger or stylus; type in a script font; upload a PNG or JPG. Plus initials, today's date, free text and a check mark."]
  - ["Output", "A new PDF with the signature image and text drawn into the page content (flattened). The original file is unchanged."]
  - ["What kind of signature", "An electronic signature image. Not a cryptographic digital signature with a certificate; no signing authority or audit trail is involved."]
  - ["Works offline?", "Yes, once the page has loaded; the script font for typed signatures loads with the page."]
faq:
  - q: "How do I sign a PDF for free without Adobe?"
    a: "Upload the PDF here, click Create New Signature, draw or type your name, drag the signature onto the line and click Finish & Download. The signed PDF downloads in a second or two. There is no account, no watermark and no trial clock, and the document is processed entirely in your browser."
  - q: "Is this a legally valid signature in Canada?"
    a: "For most everyday private documents, an electronic signature like this one is recognized under Canada's federal and provincial electronic commerce laws, provided the parties agree to sign electronically and the signature can be tied to the signer. Some documents are excluded or have extra rules, including wills, certain powers of attorney, some land-registry documents and documents a court or registry says must be signed in a specific way. Check the requirements of whoever is receiving the document; this page is not legal advice."
  - q: "What is the difference between this and a digital signature?"
    a: "This tool places an image of your signature on the page, the electronic equivalent of signing with a pen. A digital signature uses a cryptographic certificate to prove who signed and that the file was not changed afterwards, and shows a blue ribbon in Acrobat. If a bank, a court, a notary or a government portal asks for a digital or certificate-based signature, you need Acrobat, a Notarius or Entrust certificate, or a signing service, not this page."
  - q: "Can I sign on my phone with my finger?"
    a: "Yes. On iPhone and Android the Draw tab accepts your finger or a stylus; the page scrolls with a pan tool so you do not accidentally mark the page. Turn the phone sideways for a wider drawing area and sign larger than you need, since you can shrink the result on the page."
  - q: "Can I add my initials to every page and the date?"
    a: "Yes. Create New Initials opens the same editor set to the Type tab, and the Date button drops today's date in a text box you can move and resize. Each page is handled separately, so navigate with the thumbnails and add initials where they are needed."
  - q: "Can someone remove the signature after I send the file?"
    a: "The signature is drawn into the page content, not added as a removable annotation or form field, so it cannot be deleted with a click in a viewer. Like any flattened content it could be edited out with a PDF editor, which is also true of a scanned ink signature. If tamper-evidence matters, a certificate-based digital signature is the right tool."
  - q: "Is my signature saved anywhere?"
    a: "No. The drawn or typed signature exists as an image in your browser's memory while the page is open and is discarded when you close the tab. It is not stored on a server or in your browser for next time, so you draw it again for the next document."
  - q: "Does the signature stay sharp when printed?"
    a: "Drawn and typed signatures are captured at high resolution and look crisp at normal sizes. Uploaded photos are only as sharp as the picture you upload; a 1,000-pixel-wide crop of a signature on white paper prints well, a tiny screenshot does not. Keep the signature under about a third of the page width."
---
## How Do I Sign a PDF for Free?

Six actions. Once you have drawn your signature, each additional document takes about a minute.

### Step 1: Upload the document

Click **Select File** or drop the PDF onto the page. The first page appears full-size with a strip of page thumbnails beside it (below it on phones). If the file asks for a password, re-save it without one in Acrobat Reader or Preview first.

### Step 2: Create your signature

In the **Sign Tools** panel click **Create New Signature**. The editor has three tabs:

- **Draw**: sign with a mouse, trackpad, finger or stylus. Use the clear button and try again as often as you like.
- **Type**: enter your name and it is rendered in a flowing script font.
- **Upload**: choose a PNG or JPG. A photo of your signature on white paper, cropped close, works best; a PNG with a transparent background works better still.

Click the confirm button and the signature appears on the current page.

### Step 3: Place and resize it

Drag the signature onto the signature line. Use the corner handle to resize; the proportions are kept. Switch between **Pan** (scrolls the page without placing anything) and **Select** (moves and resizes items) from the toolbar. This is the step people rush: zoom in with the zoom controls to check the signature sits on the line and does not cover printed text.

### Step 4: Add initials, the date or text

**Create New Initials** opens the same editor on the Type tab. In the **Annotation** group, **Date** drops today's date, **Text** adds an editable text box (click it to type), and **Check** adds a check mark for "I agree" boxes. Every item can be moved, resized, deleted, and undone with the **Undo** and **Redo** buttons.

### Step 5: Repeat on other pages

Click a thumbnail to open another page. A long lease or purchase agreement often needs initials on every page and a full signature on the last; each page keeps its own items.

### Step 6: Click Finish & Download

Press **Finish & Download**. The tool draws every signature image and text item into its page and hands you the signed PDF. Open it and check the placements before sending. Your original is unchanged.

> **Tip:** Sign larger than you need in the Draw tab and shrink on the page. A signature drawn small and enlarged looks jagged; one drawn large and reduced looks like ink.

## What Happens to My Contract While I Sign It?

The PDF is read into memory with the browser's File API. pdf.js renders each page you open to a canvas for the preview; nothing is rendered on a server. Your drawn signature is captured from the drawing canvas as a PNG, a typed signature is rendered to a PNG in the script font, and an uploaded picture is read as-is.

When you click **Finish & Download**, pdf-lib opens the same bytes, embeds each signature image once, and calls a draw-image operation on the page at the position and size you chose, converting from the on-screen coordinates to PDF points and correcting for rotated pages. Dates and text are drawn with the standard Helvetica font. The document is then saved and offered as a download. In the Network tab of your browser's developer tools you will see the page's scripts, the script font, and one anonymous page view; the contract itself never appears in any request.

That is the appropriate standard for what people sign: offers of employment with salary figures, residential leases with SIN and references, separation agreements, consent forms for a child's school trip, and IRCC forms that must be signed by hand or electronically before upload. None of it is retained by anyone but you.

## Is an Electronic Signature from This Tool Legally Valid in Canada?

In general terms, yes for most private agreements, with exceptions you should know about. This section is general information, not legal advice.

What this tool produces is an **electronic signature**: a visible mark you intend as your signature, placed on the document. Canada's federal law (the electronic documents part of PIPEDA) and every province's electronic commerce or transactions legislation (Ontario's Electronic Commerce Act, Quebec's Act to establish a legal framework for information technology, BC's Electronic Transactions Act, and their counterparts) recognize that a signature requirement can generally be met electronically when the parties have agreed, expressly or by conduct, to deal electronically.

| Document | Electronic signature image generally accepted? | What to check |
|---|---|---|
| Residential lease, commercial lease | Yes | Some landlords or provincial standard forms specify a method |
| Employment offer, NDA, contractor agreement | Yes | Company policy may require a platform with an audit trail |
| Sales contract, invoice approval, purchase order | Yes | Counterparty's acceptance |
| Consent forms (school, medical, photo release) | Usually | The organization's own rules |
| IRCC and most federal forms submitted online | Usually, for scanned or e-signed PDFs | The form's instructions; some still require wet ink |
| Wills, codicils, testamentary trusts | Generally no, or special rules | Province-specific; several require witnesses in defined ways |
| Powers of attorney | Varies by province | Many require witnesses or specific formalities |
| Land transfer and registry documents | Often requires a lawyer's certified electronic process | Provincial land registry rules |
| Documents requiring notarization or commissioning | Follow the notary's process | The notary or commissioner's requirements |

The second distinction is between this **electronic signature** and a **digital signature**. A digital signature is a cryptographic operation with a certificate issued to you by a certificate authority. It proves identity and detects later changes to the file; Acrobat displays it with a validation panel. This tool does not create one, does not record an audit trail, and does not time-stamp. If the receiving party asks for a "certified", "digital" or "qualified" signature, or for a signing platform record, use Acrobat with a certificate, a Canadian provider such as Notarius, or a hosted signing service. For a lease between you and a landlord who has agreed to sign by email, the image is what both of you expect.

## How Do I Sign a PDF on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the page in Safari and choose the PDF from Files. The layout switches to a mobile view with a bottom sheet for tools; pinch to zoom and use the pan tool to move around. Sign with your finger or an Apple Pencil in the Draw tab. The signed file saves to Files → Downloads. Apple's own Markup in Files can also add a saved signature, and it is a fine choice for a single signature; this page adds typed signatures, initials, dates and text, and never stores the signature.

**Android.** Chrome works the same way; a stylus on a Samsung tablet gives the best drawn result. The download goes to the Downloads folder.

**Mac.** Preview can sign PDFs using the trackpad or camera and stores the signature in Preview; it is already installed and good. Use this page when you also need initials on every page, a date stamp, a typed signature, or when you prefer that nothing be stored.

**Windows.** Edge's PDF viewer can draw on a PDF but has no signature or date tools; Acrobat Reader's Fill & Sign is free and works well but asks for an Adobe account to save signatures. This page is the no-account route.

**Chromebook.** Works in Chrome with a touchscreen or stylus; files save to Downloads or Drive.

## When Should You Not Use This Tool?

- **A certificate-based digital signature is required.** Banks, courts, some government portals and most notaries. This tool cannot produce one.
- **You need an audit trail or multiple signers with tracking.** Use a signing platform; here, you pass the signed PDF along yourself.
- **The PDF is an XFA form.** It will not render correctly in the browser. See [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) and sign it in Acrobat Reader.
- **The file is password-protected.** Unlock it first.
- **The document must be witnessed or notarized**, or is a will or land-registry document. Follow the required process.
- **You want to fill form fields first.** Fill them in a viewer, save, then sign here; or make a flat form fillable with [Make PDF Fillable](/en/make-pdf-fillable) before filling. Signing does not fill fields.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The page scrolls instead of moving my signature | Switch from Pan to Select in the toolbar | Pan is for navigation; Select moves items |
| My drawn signature is jagged | Draw larger in the editor, then shrink on the page | The drawing is captured at the canvas size you draw on |
| The uploaded photo has a grey box around it | Crop tightly or convert to a transparent PNG | The whole image is placed, background included |
| Signature appears in the wrong place on a landscape scan | Place it visually and check the download; re-place if needed | Rotated pages are mapped to visual coordinates, but some scans store rotation oddly |
| The download fails after adding a Check mark | Delete the check mark and add a Text item with an "X" instead | The standard font used for text items cannot encode the ✓ symbol in some files |
| Typed signature shows a plain font in the preview | Wait a moment; the script font loads with the page | The font must load before the first typed signature is rendered |
| Initials are needed on 40 pages | Create them once, then add them from the Initials panel on each page | The signature and initials you created remain available for the whole session |
| Nothing downloads on iPhone | Look in Files → Downloads, and allow downloads for the site if asked | iOS puts browser downloads in Files instead of showing a bar |

## What Should I Do Before or After Signing?

- [Make PDF Fillable](/en/make-pdf-fillable) turns a flat form's blank lines into fields you can type into before you sign.
- [Merge PDF](/en/merge-pdf) joins the signed agreement with its schedules or a cover letter.
- [Compress PDF](/en/compress-pdf) shrinks a signed scan so it fits a portal's upload limit.
- [Extract PDF Pages](/en/extract-pdf-pages) pulls just the signature page out to send back to the other party.
- [Delete PDF Pages](/en/delete-pdf-pages) removes instruction pages from the package before signing.

## The Bottom Line

This tool puts a drawn, typed or uploaded signature, plus initials, a date and notes, onto any page of a PDF and flattens them into the file, free and without the document leaving your browser. It produces an electronic signature of the kind most Canadian private contracts accept, not a certificate-based digital signature, so check what the recipient requires for wills, land documents and anything a court or bank will rely on. Draw it large, place it with the Select tool, zoom to check, and click Finish & Download.
