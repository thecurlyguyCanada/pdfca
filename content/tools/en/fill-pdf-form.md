---
title: "Fill PDF Form Online Free: Type Into Any Fillable PDF"
h1: "Fill a PDF Form Online, Free"
lead: "Type your answers into the fields of a fillable PDF, tick its boxes and pick from its lists, then save the filled copy. Everything happens in your browser; the form is never uploaded."
description: "Fill a PDF form online, free: text, checkboxes, radio buttons and lists, French accents included. Save or flatten the filled copy. Nothing is uploaded."
answer: "Add the PDF, type into the fields the tool lists page by page, and click Save filled PDF to download yourform-filled.pdf. It works on standard fillable PDFs (AcroForm): text boxes, multi-line boxes, checkboxes, radio buttons, dropdowns and lists. In our tests a 3-page Ontario government form with 46 fields opened in under half a second and every answer, accents included, read back correctly. XFA-only forms, such as IRCC's, cannot be filled here; the tool says so and points you to Adobe Reader."
updated: 2026-11-25
limits:
  - ["Price", "Free, no account, no watermark, no daily cap"]
  - ["Where the work happens", "In your browser tab, with pdf-lib and pdf.js. The form is never sent to a server."]
  - ["Field types filled", "Text, multi-line text, checkbox, radio group, dropdown (including ones that accept typed text), single or multiple-choice list"]
  - ["Not filled", "Push buttons (Print, Reset), digital signature fields (use Sign PDF), read-only fields (shown, but locked), fields that exist only in an XFA layer"]
  - ["Input", "One .pdf. Forms locked only against editing (no open password) are accepted when they allow form filling. A PDF that asks for a password to open must be opened and saved without it first."]
  - ["Output", "yourform-filled.pdf, fillable or flattened. You click Download; the original is not changed."]
  - ["Characters", "Everything in Western European text: é è à ç ê ô ï, Œ œ, « », ’ and €. Characters outside that set (Ł, Chinese, emoji) are flagged before you save."]
  - ["File size", "No fixed cap; your device's memory is the limit. A 1.3 MB, 3-page government form with 46 fields read in about 0.4 seconds and saved in about 0.3 seconds in our tests."]
  - ["What stays on your device", "The form, your answers and the filled file. The site records only an anonymous page visit."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari on desktop; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I fill a PDF form online for free?"
    a: "Open Fill PDF Form, add the PDF, type your answers into the fields listed under each page, tick the boxes you need, and click Save filled PDF, then Download. There is no account and no watermark, and the form never leaves your device, which matters for tax and immigration paperwork."
  - q: "Why does the tool say my PDF has no fillable fields?"
    a: "Because the PDF has no form fields, only printed lines and boxes. That is common for scanned forms and for forms saved with Print to PDF. Use Make PDF Fillable to add fields where the blanks are, or Sign PDF to place text, a date and a signature anywhere on the page."
  - q: "Can I fill an IRCC form with this tool?"
    a: "No. IRCC application forms are XFA forms, a format browser tools cannot fill, and IRCC asks for Adobe Acrobat Reader on a computer. When you add an XFA-only form, the tool tells you and links to our guide on opening and filling XFA forms in Adobe Reader."
  - q: "Will French accents show correctly in the filled form?"
    a: "Yes. Names like Hélène Gagné-Lévesque, Côté or Québec are written with the right characters, and we checked them by reading the filled files back with two different PDF engines. Characters the form font cannot draw, such as Ł or Chinese characters, are flagged before you save so nothing prints as a blank box."
  - q: "Can the person I send it to still edit my answers?"
    a: "Yes, if you leave Flatten after filling unticked: the fields stay fillable, which is what most offices expect when they may need to correct something. Tick Flatten after filling and the answers become part of the page; ordinary readers can no longer change them."
  - q: "Is it safe to fill a tax or government form here?"
    a: "The form is opened and saved inside your browser tab; there is no upload step and no copy kept on a server. You can check it in your browser's developer tools: the Network tab shows no request carrying the file while you fill and save it."
  - q: "Why are some fields greyed out?"
    a: "They are read-only: the form's author locked them, often for a signature line to sign by hand, an office-use box or a calculated total. The tool shows them so you can see the whole form, but does not change them."
  - q: "Does the filled PDF keep the original's security settings?"
    a: "Not all of them. Many government forms are locked against editing except form filling. The tool fills those when filling is allowed and saves the filled copy without the editing lock; it says so before you save. Forms that require a password to open are not accepted."
---
## How Do I Fill a PDF Form Online for Free?

Four steps. For a typical government form, reading it and saving it each take well under a second.

### Step 1: Add the form

Drop the PDF on **Drop your PDF here** or click to choose it. The card shows the file name, size, page count and how many fields there are to fill, for example "3 pages · 43 fields to fill". If the form cannot be filled here, the card says why instead: no fields, an XFA form, a password needed to open it, or filling turned off by the author.

### Step 2: Type your answers

Fields are listed page by page, in the order they appear on the page. On a computer, a thumbnail of each page sits beside its fields, and the field you are typing in is outlined in red on it, so you can see which box "Line 3" or "Unit Number" is. Government forms often have long built-in descriptions; the tool shows the last part ("Last Name or Single Name") in bold and the rest ("Section A: About the Applicant...") underneath.

A form with more than eight fields gets a **Find a field** box: type "postal" or "SIN" to jump straight to it.

### Step 3: Choose whether to flatten

**Flatten after filling** is off by default. Off, the recipient gets a form that is still fillable. On, the answers are drawn into the page and the fields are removed. The option is unavailable on forms whose security settings allow filling but no other change, and the tool says so.

### Step 4: Save and check

Click **Save filled PDF**. The result card shows the name, `yourform-filled.pdf`, the size and how many fields were written. Nothing downloads until you click **Download**. Open the file in the PDF reader you normally use and scroll through it before you send it. **Edit answers** takes you back to the form with everything you typed still there.

## What Does the Tool Do With Each Kind of Field?

| Field type | What you see | What is written |
|---|---|---|
| Text | A text box; a counter such as 12/30 when the form sets a maximum length | The text, cut at the form's maximum length |
| Multi-line text | A larger box that accepts line breaks | The text with its line breaks, at the form's font size; when the form says "auto", 12 pt or smaller to fit the box |
| Comb (one character per box) | A spaced text box and "9 boxes, one character each" | One character per box, as the form defines |
| Checkbox | A checkbox | Checked or unchecked, with the form's own check mark |
| Radio group | One button per choice, plus a way to clear it | The chosen value |
| Dropdown | A list; a text box with suggestions if the form accepts typed values | The selected or typed value |
| List | A list, or checkboxes when several can be chosen | The selected value or values |
| Read-only | Shown greyed out with a lock | Nothing; it keeps its value |
| Signature | A note pointing to Sign PDF | Nothing |
| Push button (Print, Reset) | Not listed | Nothing |

Only the fields you change are rewritten. A field you did not touch keeps exactly the appearance the form came with. A field you did change is redrawn with Helvetica at the size the form asks for.

## Can I Fill Canadian Government PDF Forms Here?

It depends on how the form was built, not on which department published it. There are two kinds.

**Standard fillable forms (AcroForm).** The fields are part of the PDF, and almost every reader can fill them, this tool included. Many fillable forms are built this way, sometimes with an XFA layer added on top.

**XFA forms.** Built with Adobe LiveCycle, they keep their fields in a separate XFA layer. A dynamic XFA form shows only a placeholder page in a browser, such as "Please wait..." or "The document you are trying to load requires Adobe Reader 8 or higher." Immigration, Refugees and Citizenship Canada (IRCC) forms are XFA, and IRCC asks for Adobe Acrobat Reader on a computer. Browser tools, this one included, cannot fill XFA. The tool recognizes these forms and sends you to [how to open and fill an XFA form](/en/guides/edit-xfa-pdf) instead of pretending to fill them.

What we found when we tested forms from Ontario's Central Forms Repository in November 2026:

- **Form 11342E (Request for a Name Change to a Single Name)**: 3 pages, 46 fields (36 text boxes, 7 checkboxes, 3 buttons), 2 of them read-only signature lines and 21 with a maximum length. It is locked against editing except form filling and carries both kinds of form. All 41 editable fields were filled with French test text and read back correctly in two PDF engines.
- **Three other Ontario forms** were dynamic XFA, showing only the "requires Adobe Reader 8 or higher" page. The tool reports them as XFA.

For CRA forms such as the T1235, add the copy you downloaded: within a second the tool shows its fields or tells you it is XFA. Either way, nothing is uploaded and nothing is lost by trying.

### Hybrid forms: what changes

When a form has both standard fields and an XFA layer, the tool fills the standard fields and removes the XFA layer from the filled copy. That is what makes your answers appear in every viewer: with the XFA layer still there, Adobe Reader would typically show the XFA data, not your answers. The trade-off is that the form's own scripts, its **Validate** button and any barcode no longer run. The tool shows this warning before you save. If the organization asked you to use Adobe Reader, use Adobe Reader.

## Should I Flatten the Filled Form Before Sending It?

Usually not. Leave it fillable when:

- the office may need to correct or complete something;
- an online portal reads the field values (some upload systems do);
- you will sign it afterwards with a digital signature.

Flatten it when:

- the recipient's viewer shows empty boxes where your answers were;
- the answers should not be changed after you send it;
- you are sending it to be printed.

You can also fill now and flatten later with [Flatten PDF](/en/flatten-pdf), which also fixes comments and stamps into the page. To add a signature, initials or today's date, use [Sign PDF](/en/sign-pdf) on the filled copy. To keep a copy private on a shared computer, [protect it with a password](/en/protect-pdf).

**Printing.** Print the filled copy from your usual PDF reader. If a printer drops your answers, flatten the copy and print that.

## Use Cases by Situation

### A rental application or consent form in French

A landlord or school sends a fillable PDF. Type the answers with accents as usual (Hélène, rue Saint-André, Québec) and save. The names come out as typed, not as boxes or question marks.

### A form with a 9-box SIN or postal code field

Comb fields allow one character per box and a fixed number of boxes. The counter shows how many are left; the tool will not write more than the form allows.

### A long form you fill over two sittings

Save the filled copy, then add that copy here next time: your earlier answers are already in the fields, and you only change what is missing.

### A scanned form with no fields

The tool tells you there is nothing to fill. Use [Make PDF Fillable](/en/make-pdf-fillable) if the form has underscores or boxes, or place text where you need it with [Sign PDF](/en/sign-pdf).

## When Should You Not Use This Tool?

- **For IRCC and other XFA forms.** Use Adobe Acrobat Reader on a computer.
- **When the form must keep its scripts and barcode.** Some forms calculate totals or build a barcode in Adobe Reader. This tool writes the values you type; it does not run the form's calculations.
- **To sign.** Signature fields are left alone. Fill first, then sign.
- **On a PDF that needs a password to open.** Open it in your reader with the password, save a copy without it, then fill that copy.

## Troubleshooting

| Problem | Fix | Why |
|---|---|---|
| "This PDF has no fillable fields" | Use Make PDF Fillable or Sign PDF | The PDF only has printed lines, not form fields |
| "This is an XFA form" | Open it in Adobe Acrobat Reader on a computer | XFA fields live outside the page, where browser tools cannot reach |
| "This PDF needs a password to open" | Open it with the password, save a copy without one, add that copy | The file cannot be read without its open password |
| A field is greyed out | Nothing to fix; the author locked it | Read-only fields are shown but not changed |
| Red note about characters that can't be drawn | Replace the flagged characters (Ł → L, for example) | The form font covers Western European characters only |
| Answers are missing in the recipient's viewer | Save again with Flatten after filling ticked | Some viewers do not draw field values |
| Totals did not update | Calculate them yourself and type the result | Form scripts do not run here |
| "Flatten after filling" is greyed out | Send it fillable, or ask for an unlocked copy | The form's security settings allow filling only |

## The Bottom Line

If your PDF has real form fields, this is the quickest way to fill it: add it, type, save, with French accents handled and nothing uploaded. If it is an XFA form such as IRCC's, the tool tells you in a second and points you to Adobe Reader instead of producing a file that looks filled and is not.
