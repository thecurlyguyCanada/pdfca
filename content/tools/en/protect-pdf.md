---
title: "Protect PDF with a Password Free: AES-256, No Upload"
h1: "Protect PDF with a Password"
lead: "Add a password that anyone must type to open your PDF. The encryption runs in your browser; the file and the password never leave your device."
description: "Password-protect a PDF for free with AES-256 encryption. Optional no-print and no-copy settings, form fields kept, about a second, nothing uploaded."
answer: "Add the PDF, type a password twice, choose whether to allow printing and copying, and click Protect PDF. A typical file is encrypted in under two seconds with AES-256, the strongest method in the PDF standard, and you download a copy named yourfile-protected.pdf. Pages, form fields and links are untouched. The password is never sent or stored anywhere, so if you forget it, nobody can recover it or open the file for you."
updated: 2026-11-12
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where it runs", "In your browser tab, with an open-source pdf-lib library that adds encryption. Neither the PDF nor the password is sent to a server."]
  - ["Encryption", "AES-256 with a 256-bit key, the PDF 2.0 standard security handler (revision 6). Current PDF readers open it; readers from before about 2010 may not."]
  - ["Maximum file size", "No fixed cap; your device's memory is the limit. A 45 MB, 14-page scan was encrypted in 3.9 seconds in our tests on a computer. On an older phone, very large files can make the tab reload."]
  - ["Pages", "No set maximum. A 400-page file was encrypted in under a second in our tests."]
  - ["Input", "One .pdf file that is not already protected by a password or restrictions"]
  - ["Output", "yourfile-protected.pdf, about the same size as the original (a 209 KB form came out at 229 KB). You click Download; your original is not changed."]
  - ["Permissions", "Allow printing and Allow copying text, both on by default. Editing, comments and form filling stay allowed."]
  - ["What stays on your device", "The PDF, the encrypted copy and the password. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded and you have added your file (the encryption engine loads with the first file)."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I password-protect a PDF for free?"
    a: "Open Protect PDF, add the file, type the password in Password and again in Confirm password, and click Protect PDF. Then click Download. It is free, with no account and no watermark, and the file and the password stay on your device the whole time."
  - q: "How strong is the encryption?"
    a: "It is AES-256, the strongest encryption the PDF standard defines, the same method Acrobat uses for its highest setting. The weak point is the password, not the cipher: a short or common password can be guessed by software, so use 12 characters or more, ideally a phrase of several unrelated words."
  - q: "What happens if I forget the password?"
    a: "Nothing can be done with the protected copy. We never see or store the password, so we cannot recover it or open the file for you. Keep your unprotected original somewhere safe; the tool never changes it, so you can protect it again with a new password."
  - q: "Do the no-printing and no-copying options really stop people?"
    a: "Partly. Acrobat, the viewers built into browsers and most PDF readers respect them, but some programs ignore them once the file is open. Treat them as a polite request; the open password is what actually keeps the file private."
  - q: "Can I change the password or the permissions later?"
    a: "Not on the protected copy. The tool sets a random owner password that nobody, including you, ever sees, so the printing and copying choices cannot be overridden. To change anything, run your unprotected original through the tool again with the new settings."
  - q: "Does the person I send it to need special software?"
    a: "No. Any current PDF reader asks for the password and opens the file: Acrobat Reader, the viewers in Chrome, Edge, Firefox and Safari, and the built-in apps on phones. Only readers from before about 2010 may fail to open AES-256 files."
  - q: "Why does it say my PDF is already protected?"
    a: "The file already has a password or restrictions, and the tool will not stack a second layer on top. Open it with its password in your PDF reader, save or print an unprotected copy, then add your new password to that copy here."
  - q: "Is my password sent anywhere?"
    a: "No. The encryption runs inside your browser tab with JavaScript, so the password and the file stay in your device's memory. You can watch the Network tab in your browser's developer tools while you protect a file: no request carries either one."
---
## How Do I Password-Protect a PDF for Free?

Five steps. For an ordinary document the encryption itself takes about a second.

### Step 1: Add the PDF

Drop the file on **Drop your PDF here**, or click to choose it. The card shows the file name, its size and the page count, with **Choose another file** if you picked the wrong one. If the PDF already has a password or restrictions, you get a message saying so instead; see the troubleshooting table below.

### Step 2: Type the password twice

Enter it in **Password** and again in **Confirm password**. The eye button (**Show password**) reveals both fields so you can check for typos. Under the box, a line tells you how long the password is: under 8 characters is flagged as very short, 8 to 11 as acceptable, and 12 or more as a good length. It is a length check, not a promise about strength. If the two entries differ, you see "The two passwords don’t match." and the button stays greyed out.

A phrase of three or four unrelated words, such as *maple kettle orbit seven*, is long, hard to guess and easy to read out over the phone. Accented letters work too, but if the recipient will type the password on a phone, plain letters and digits save trouble.

### Step 3: Decide on printing and copying

Under **Permissions after opening**, **Allow printing** and **Allow copying text** are both ticked. Untick one to ask readers not to print or copy. Leave them ticked if the recipient needs to print the file to sign it, or to paste figures into a spreadsheet.

### Step 4: Write the password down

This is the step people skip. The tool shows the warning before and after you protect the file, for a reason: the password is not stored anywhere, so a forgotten password means a file nobody can open. Note it in your password manager before you click, and keep the unprotected original.

### Step 5: Click Protect PDF, then Download

The button reads "Encrypting…" for a moment, then the result card shows the new file name, its size and **Protected with AES-256**. Nothing downloads until you click **Download**. The copy is named `yourfile-protected.pdf`.

Open the download once before you send it. Your reader should ask for the password, and the pages should appear after you type it.

## What Does the Password Actually Protect?

The password you type is the open password. Without it, the file is unreadable: the content is encrypted with AES-256 under the PDF 2.0 standard security handler, and a reader cannot show a single page until it gets the right password.

The printing and copying choices work differently. In a PDF, permissions are enforced by the reader, not by the encryption. That is why the tool generates a second, random owner password that is never shown or saved. If the owner password were the same as the one you type, most readers would give full rights to anyone who opens the file and your choices would mean nothing.

| Setting | What it does | How firm it is |
|---|---|---|
| Open password | Encrypts the content; nothing displays without it | As firm as the password is long |
| Allow printing (unticked) | Asks readers to disable printing | Respected by Acrobat and browser viewers; some programs ignore it |
| Allow copying text (unticked) | Asks readers to disable text selection and copying | Same as printing |
| Editing, comments, form filling | Always left allowed | Not configurable here |

Everything else in the file stays as it was: text, images, links, bookmarks, form fields (all 54 fields of a tax form survived in our tests) and document properties. Nothing is recompressed, so the size barely moves. The file is re-saved, so it is not byte-for-byte identical to the original.

## How Do I Send the Password Safely?

Send the file and the password by different routes. If the PDF goes by email, send the password by text message, say it on a call, or agree on it in person. A password in the same email as the attachment protects nothing if that mailbox is read by the wrong person.

Do not put the password in the file name or the email subject. For files you exchange often with the same person, such as a bookkeeper, agree on a phrase once and reuse it for that relationship only.

## Use Cases by Situation

### T4 slips and receipts going to your accountant

At tax time, a T1 package often travels by email: T4 and T5 slips, RRSP receipts, childcare receipts, a notice of assessment. Each one carries your SIN. Merge the pages with [Merge PDF](/en/merge-pdf), protect the result, and give the accountant the password by phone.

### A rental application for a landlord

Landlords ask for pay stubs, an employment letter and sometimes a credit report. Protecting the package means a forwarded email or a shared office inbox does not expose it. If you send ID, consider adding "COPY FOR RENTAL APPLICATION" with [Watermark PDF](/en/watermark-pdf) before protecting it.

### A signed lease or contract stored on a shared computer

A family computer, a USB key or a shared drive is where documents get seen by accident. A protected copy can sit in a shared folder without anyone reading it by mistake. Keep the unprotected original somewhere only you can reach.

### A filled form that should not be edited or printed

If you fill a form and want the answers fixed before you protect it, run it through [Flatten PDF](/en/flatten-pdf) first, then protect the flattened copy. Untick Allow printing if the recipient should only read it on screen.

## When Should You Not Use This Tool?

- **For uploads to a government portal.** IRCC, CRA My Account and similar portals are already secure channels, and the officer on the other end has no password. Upload the unprotected file.
- **To hide part of a document.** The password is all or nothing: whoever has it sees every page. Remove pages they should not see with [Delete PDF Pages](/en/delete-pdf-pages) before you protect the file.
- **When no-print or no-copy must hold.** Those settings are requests to the reader. If it truly matters, do not send the file.
- **On a PDF/A archival file.** The PDF/A standard forbids encryption, so the tool refuses it with a message.
- **When you need certificate encryption or a password you can change later.** There is no owner password to choose and no certificate option; a desktop PDF editor does those.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| "This PDF is already protected with a password or restrictions" | Open it in your PDF reader with its password, save or print an unprotected copy, then protect that copy | The tool does not add a second layer of protection to an encrypted file |
| The Protect PDF button stays grey | Make sure both password fields match exactly; use Show password to compare | The button stays off until both entries are identical and not empty |
| The recipient's reader will not open the file | Ask them to open it in a current browser or Acrobat Reader | Readers from before about 2010 do not support AES-256 |
| The recipient can still print | Their program ignores permissions; the password is the real protection | Permissions are enforced by the reader, not by the encryption |
| "This file is marked as PDF/A (archival)" | Send it unprotected through a secure channel, or save a non-archival copy first | PDF/A files cannot be encrypted |
| You forgot the password | Protect the unprotected original again with a new password | The password is not stored anywhere, so the protected copy cannot be opened |

## The Bottom Line

Protect PDF puts a real AES-256 open password on your file in about a second, inside your browser, with no upload and no account. Choose a long password, write it down, send it separately from the file, and treat the no-print and no-copy options as a courtesy rather than a lock.
