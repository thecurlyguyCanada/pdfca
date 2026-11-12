---
title: "Rotate PDF Free: 90° Lossless, Saved for Good, No Upload"
h1: "Rotate PDF"
lead: "Turn the pages 90°, 180° or 270°, click Apply Rotation and download a file that opens the right way up everywhere. It runs in your browser."
description: "Rotate a PDF for free in your browser and save it: 90°, 180° or 270°, lossless, with the rotation stored in the file so it sticks."
answer: "Add the PDF, click Rotate All Right or Rotate All Left once per quarter turn (twice for 180°), check the degree badge on the thumbnails, then click Apply Rotation and download. The rotation is written into the file as a page attribute, so it is lossless and sticks in every viewer. It is free, nothing is uploaded, and your original is left as it was."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no daily limit"]
  - ["Where the rotation happens", "In your browser tab with pdf-lib. The file is never sent to a server."]
  - ["Maximum file size", "No fixed cap. 200 MB works on a laptop; keep it under 50–80 MB on a phone, because every page thumbnail is rendered in memory."]
  - ["Maximum pages", "No set maximum. Rotation itself takes under a second for 500 pages; drawing 500 thumbnails is what takes the time (5–10 seconds)."]
  - ["Angles", "90°, 180° and 270°, applied to every page with the Rotate All buttons. Each click adds a quarter turn to whatever rotation the page already has."]
  - ["Input", ".pdf only. A file that asks for a password must be unlocked first with Unlock PDF."]
  - ["Output", "One PDF named rotated_<your file>.pdf, identical content with an updated rotation attribute on each page. Nothing is re-rendered; the original is not modified."]
  - ["What stays on your device", "The source PDF, the rotated PDF and your settings. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I rotate a PDF and save it permanently?"
    a: "Add the file, click Rotate All Right or Rotate All Left until the thumbnails show the right orientation, then click Apply Rotation. The downloaded file carries the rotation inside it, so it opens the right way up in Acrobat, Preview, Chrome and on phones. Rotating in a viewer's View menu only changes what you see; this tool changes the file."
  - q: "Does rotating a PDF reduce its quality?"
    a: "No. The tool does not redraw the pages. It changes each page's Rotate attribute, a single number in the file, and every viewer applies it when drawing. Text stays selectable, images keep their resolution, and the file size changes by a few bytes at most."
  - q: "How do I rotate a PDF 180 degrees?"
    a: "Click Rotate All Right twice (or Rotate All Left twice; they meet at 180°). The badge on each thumbnail shows 180° before you apply. Three clicks in the same direction give 270°, which is the same as one click the other way."
  - q: "Can I rotate just one page of a PDF?"
    a: "The Rotate All buttons turn every page together. To fix a single sideways page in a long document, pull that page out with Extract PDF Pages, rotate it here, and put it back with Merge PDF; or, for a few pages scattered through a file, use Organize PDF to work page by page. For a whole scan that came out sideways, Rotate All is exactly right."
  - q: "Why does my PDF look rotated in one viewer but not another?"
    a: "Some viewers ignore the rotation attribute in rare cases, and some scanning apps store the image sideways and rely on the attribute to correct it. Applying a rotation here and saving sets the attribute explicitly, which resolves most of these inconsistencies. If a viewer still shows the page sideways after saving, that viewer is at fault."
  - q: "Can I rotate a password-protected PDF?"
    a: "Not until it is unlocked. A PDF that asks for a password when opened cannot be read by the engine; remove the password first with Unlock PDF, then rotate. A PDF that opens freely but restricts editing will usually rotate without an extra step."
  - q: "Is it safe to rotate confidential documents here?"
    a: "The file is read into your browser's memory, the rotation attribute is updated there, and the result is offered as a download from the same tab. No network request carries your document, which you can verify in your browser's developer tools under Network while rotating. Close the tab and the memory is released."
---
## How Do I Rotate a PDF and Save It for Free?

Four actions. Most people are done in under ten seconds, because rotation is one of the lightest edits a PDF can have.

### Step 1: Add the PDF

Click **Select File** or drag the file onto the drop zone. The tool renders a thumbnail of every page so you can see which way they face. A 20-page scan appears in two or three seconds.

### Step 2: Click Rotate All Right or Rotate All Left

Each click turns every page a quarter turn: one click for 90°, two for 180°, three for 270° (which is the same as one click the other way). A small badge on each thumbnail shows the pending angle, such as 90° or 180°, so you can see the result before anything is written. **Reset** clears the pending rotation if you lose track.

This is the step people get wrong. Think of the badge as "degrees clockwise from how the page is now". A scan that came out with its top on the left needs one click of Rotate All Right; a scan with its top on the right needs one click of Rotate All Left. If the whole document is upside down, click either button twice.

### Step 3: Click Apply Rotation

The engine updates the rotation attribute on every page and saves a new file called `rotated_<your file>.pdf`. This takes under a second even for hundreds of pages, because nothing is redrawn.

### Step 4: Open the download

Open it in your usual viewer and scroll. Every page should face the right way; if the viewer still shows it sideways, see the troubleshooting table below. Your original file is unchanged.

> **Tip:** Rotating with your viewer's View menu (View → Rotate in Acrobat, Preview or Chrome) changes only what you see in that window. Close it and the file is sideways again. Apply Rotation here changes the file itself.

## What Happens to My File When I Rotate It?

Every page in a PDF has an optional Rotate entry: 0, 90, 180 or 270. A viewer reads that number and turns the page as it draws it. This tool uses pdf-lib, a JavaScript PDF library loaded into the page, to read your file into the tab's memory, add your chosen angle to each page's existing Rotate value, and save the document again. The content streams, fonts and images are copied unchanged. That is why the operation is lossless and why the file size barely moves: a 50 MB scan becomes a 50 MB scan with one number changed per page.

There is no server in the process. You can confirm this in your browser's developer tools: open the Network tab and apply a rotation. You will see the page's own scripts and the PDF library load, one anonymous page-view request, and nothing while the rotation runs. No request carries your document.

Sideways PDFs are usually scans, and scans are usually the documents people least want to upload: a T4 photographed on a kitchen table, a signed consent form from a clinic, a landscape-oriented bank statement for an IRCC proof-of-funds package, or a notarized letter that the scanner fed in sideways. Fixing them in your own browser means there is no third party holding a copy, and nothing for a privacy law to govern.

## How Do I Rotate a PDF 90, 180 or 270 Degrees Without Losing Quality?

All three angles come from the same two buttons; the table shows how to reach each one and what you will see.

| You want | Clicks | Badge shows | Typical case |
|---|---|---|---|
| Quarter turn clockwise | Rotate All Right × 1 | 90° | Scan with its top on the left |
| Quarter turn counter-clockwise | Rotate All Left × 1 | 270° (or −90°) | Scan with its top on the right |
| Upside down to right way up | Either button × 2 | 180° | Document fed into the scanner feet first |
| Undo a pending rotation | Reset | none | You clicked one too many times |

Because the change is an attribute rather than a redraw, there is nothing to lose: the table below compares this with the alternatives people reach for.

| Method | Lossless? | Text stays selectable? | File size change | Time for 100 pages |
|---|---|---|---|---|
| This tool (rotation attribute) | Yes | Yes | a few bytes | under 1 second |
| Print to PDF rotated | No (re-rendered) | Usually | often larger | 30–90 seconds |
| Export each page as an image, rotate, rebuild | No | No | often much larger | several minutes |
| Viewer's View → Rotate | n/a (not saved) | n/a | none | instant, but temporary |

One honest limitation: the Rotate All buttons act on every page. If a 40-page file has three sideways pages, rotating all 40 is not what you want. The quickest route is to extract the three pages with [Extract PDF Pages](/en/extract-pdf-pages), rotate them here, delete the originals with [Delete PDF Pages](/en/delete-pdf-pages) and recombine with [Merge PDF](/en/merge-pdf). It takes about a minute. If you have many such pages, do the rotation in a desktop viewer that supports per-page rotation, then use this page only to save the file.

## How Do I Rotate a PDF on iPhone, Android, Mac or Windows?

**iPhone and iPad.** Open the tool in Safari, tap the drop zone and choose the file from Files. The Left and Right buttons sit in a bar at the bottom of the screen; tap once per quarter turn, then tap Apply Rotation. The download appears in Files → Downloads. iOS also lets you rotate a page in the Files app's markup view (tap the thumbnail, then the rotate control), which works for a single page and saves into the file.

**Android.** Chrome handles the picker and saves to Downloads. Android's built-in PDF viewers can rotate the view but generally do not save it; Google Drive's viewer is the same. Use this page when the rotation needs to stick.

**Mac.** Preview rotates well: select pages in the thumbnail sidebar, press Cmd-R (or Cmd-L), and save. It supports per-page rotation and is already installed. Use this page when you are not on your own Mac, or when you want to be certain nothing is re-rendered; Preview's save is also lossless for rotation.

**Windows.** Microsoft Edge, the default PDF viewer, has a Rotate button that turns the view and, in recent versions, can save the rotated file. If your Edge does not offer to save, this tool does. There is no other built-in option; Print to PDF re-renders the page.

**Chromebook.** Chrome's viewer rotates the view only. This page writes the rotation into the file; downloads go to the Downloads folder or Google Drive.

## When Should You Not Use This Tool?

- **Only some pages are sideways.** Rotate All turns everything. Use the extract-rotate-merge sequence above, or a desktop viewer with per-page rotation.
- **The page is skewed, not rotated.** A scan that is tilted 3° is not fixed by 90° steps. Rescan it, or use a scanner app with automatic deskew.
- **The content is sideways but the page is already rotated.** Some scanners write the image sideways and set Rotate to correct it; some viewers then double-correct. Apply a rotation here and check in two viewers; if they disagree, the file needs re-rendering, which [Compress PDF](/en/compress-pdf) in Balanced mode will do as a side effect.
- **Encrypted PDFs.** A file that needs a password to open must go through Unlock PDF first.
- **XFA forms.** Government and bank forms built with Adobe LiveCycle may ignore the page rotation attribute when rendering the form layer. Read [how to edit an XFA PDF](/en/guides/edit-xfa-pdf) before relying on the result.
- **Very large scans on a phone.** The rotation is cheap, but rendering 300 thumbnails is not. Use a laptop for files over about 50–80 MB.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| The pages rotated the wrong way | Open the original again and click the other button | Each button adds 90° in its own direction; three of one equals one of the other |
| The badge says 90° but the download looks unchanged | Open the download in a second viewer | A few viewers cache the first render; the attribute is set correctly in the file |
| Only some pages needed rotating and now all are turned | Extract the sideways pages, rotate them alone, merge back | The buttons act on every page |
| Apply Rotation is inactive | Click Rotate All at least once first | With no pending rotation there is nothing to apply |
| The badge shows 270° when I wanted −90° | They are the same angle | PDF stores rotation clockwise from 0 to 270 |
| Safari on iPhone reloads the tab | Use a laptop for files over 50–80 MB | Rendering every thumbnail exceeds the tab's memory budget |
| The file still opens sideways in one app | Check that app's own rotation setting, or re-render with Compress PDF (Balanced) | Some apps ignore the attribute; a re-rendered page is physically upright |

## What Should I Do After Rotating?

- [Organize PDF](/en/organize-pdf) to fix the page order once everything faces the right way.
- [Delete PDF Pages](/en/delete-pdf-pages) to drop the blank pages a sideways scan often includes.
- [Compress PDF](/en/compress-pdf) if the upright scan is still too large to email.
- [Merge PDF](/en/merge-pdf) to combine the rotated file with the rest of a package.
- [Sign PDF](/en/sign-pdf) to add a signature now that the page reads the right way up.

## The Bottom Line

Rotating a PDF is a one-number change per page, and that is exactly what this tool makes: it adds your 90°, 180° or 270° to each page's rotation attribute and saves, with no re-rendering, no quality loss and no upload. Preview on a Mac does the same job well, including per-page rotation; viewers' View menus do not save anything. Use this page when a whole scan came out sideways, when you are on Windows, Android or a borrowed machine, or when the document is one you would rather keep on your own device.
