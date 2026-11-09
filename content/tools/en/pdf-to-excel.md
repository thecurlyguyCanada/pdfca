---
title: "PDF to Excel Free: Tables to XLSX in Your Browser, No Upload (2026)"
h1: "How to Convert a PDF Table to Excel"
lead: "Pull the rows and columns out of a text PDF into an .xlsx you can sort and sum. Extraction runs in your browser; nothing is uploaded."
description: "Convert PDF tables to an Excel .xlsx for free in your browser. Works on statements, invoices and reports saved as text PDFs; scans are not read. Nothing uploaded."
answer: "Select the PDF, choose Preview & Edit or Quick Convert, and download the .xlsx. It is free, there is no account, and the PDF stays on your device: the text positions are read and the spreadsheet is written inside your browser tab. It works on PDFs that were generated from software (bank statements, invoices, reports) and not on scanned pages, which contain no text to extract."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, no limit on conversions"]
  - ["Where the extraction happens", "In a Web Worker inside your browser tab: pdf.js reads text positions, SheetJS writes the .xlsx. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap; bounded by memory. A 60-page statement (2–5 MB) is routine on a laptop and fine on a phone. Keep text PDFs under ~40 MB on a phone."]
  - ["Maximum pages", "No set maximum. 1–20 pages extract in 2–6 seconds; 200 pages of dense tables can take 30–60 seconds."]
  - ["Input", ".pdf with selectable text. Scanned or photographed tables are images and return no rows."]
  - ["Output", "One .xlsx with a single sheet holding every detected row from every page, headers in row 1. CSV and QBO are also offered. The PDF is not modified."]
  - ["What stays on your device", "The PDF, the extracted rows and the downloaded file. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page has loaded"]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert a PDF to Excel for free?"
    a: "Open the PDF to Excel tool, select the PDF, pick Quick Convert for an immediate .xlsx or Preview & Edit to check the rows first, and download. There is no charge, no sign-up and no upload. The result opens in Excel, Google Sheets, Numbers and LibreOffice Calc."
  - q: "Why did my PDF come back with no rows or 'Extraction Failed'?"
    a: "Almost always because the PDF is a scan. Try selecting text in your PDF viewer; if you cannot, the pages are images and there is no text to extract. Run the file through an OCR tool to create a searchable PDF, then convert that. The same message appears for PDFs that contain prose but no table-like rows."
  - q: "Will the numbers be real numbers in Excel, or text?"
    a: "Turn on Financial Normalization and amount, balance and total columns have their dollar signs and thousands separators removed, with bracketed negatives such as (45.00) rewritten as -45.00, so Excel treats them as numbers. Dates in columns named date are rewritten as YYYY-MM-DD. Without that option, values are written as they appear in the PDF."
  - q: "Does it handle a statement where descriptions wrap onto two lines?"
    a: "Yes, with Smart Multiline Merge, which is on by default. When a row contains only a description and no date or amount, it is treated as the continuation of the row above and joined to it. Turn the option off for tables where a single-cell row is legitimate, such as a notes column."
  - q: "Does each PDF page become its own sheet?"
    a: "No. Every row detected on every page is stacked into one sheet, so a 12-page statement comes out as one continuous table you can sort and total. If you need pages separated, extract the page ranges first with Extract PDF Pages and convert each one."
  - q: "Is it safe to convert a bank statement or a T4 here?"
    a: "The PDF is read in your browser's memory inside a Web Worker, and the spreadsheet is built in the same tab; no request carries your file to a server. You can confirm this in your browser's developer tools under Network while converting. Account numbers, SINs and balances stay on your device."
  - q: "What if I need a CSV instead of an Excel file?"
    a: "The download step offers CSV alongside XLSX, and any spreadsheet app will also save the .xlsx as CSV: File → Save As in Excel, File → Download in Google Sheets, File → Export To in Numbers. Use CSV for imports into accounting software, and XLSX when you want to keep working in a spreadsheet."
  - q: "Can it read a table that has merged header cells?"
    a: "Partly. The extractor works from where text sits on the page, so a header that spans two columns is assigned to one of them and the other column gets a generic name. The data rows underneath are usually correct. Rename the headers in row 1 after opening the file; it takes a few seconds."
---
## How Do I Convert a PDF Table to Excel for Free?

The tool has one decision point, Preview & Edit versus Quick Convert, and two options that matter for financial tables. Here is the full sequence.

### Step 1: Check that the table is text, not a picture

Open the PDF and try to select a number in the table. If it highlights, you have a text PDF (anything exported from online banking, QuickBooks, SAP, a point-of-sale system or Excel itself) and the extraction will work. If nothing selects, the table is a scan and this tool will return no rows. OCR the file first, or retype it; there is no way around that.

### Step 2: Select the PDF

Click **Select File** or drag the PDF onto the drop zone. The file is read into memory and the extractor begins analysing the spatial layout: where each piece of text sits, which pieces share a baseline (a row) and which share a left edge (a column). A progress indicator runs while pages are processed.

### Step 3: Choose Preview & Edit or Quick Convert

When analysis finishes you are asked how to proceed. **Quick Convert** downloads the .xlsx immediately with the default options. **Preview & Edit** shows the detected rows in a grid first, with a confidence score and totals for credits and debits, so you can see whether columns landed correctly before you download. Use Preview & Edit the first time you convert a new kind of document; use Quick Convert once you know it works.

### Step 4: Set the extraction options

Two toggles sit above the preview. **Smart Multiline Merge** (on by default) joins a description that wrapped to a second line back onto its transaction row. **Financial Normalization** strips dollar signs and commas from amount columns, turns (123.45) into -123.45, and rewrites dates as YYYY-MM-DD. Switch normalization on for anything you plan to sum; leave it off if you need the original text exactly as printed.

This is where most wrong results come from: a table with a legitimate one-cell row (a subtotal label, a section heading) gets merged into the row above when Smart Multiline Merge is on. If a row has vanished in the preview, turn the toggle off and look again.

### Step 5: Download as XLSX

Click **XLSX** to download the spreadsheet (CSV and QBO are next to it). The file is named after your PDF. Open it, check that row 1 holds the headers and that the last row of the last page is present, then sort, filter or total as you normally would.

> **Tip:** Delete cover pages, terms-and-conditions pages and advertising inserts with [Delete PDF Pages](/en/delete-pdf-pages) before converting a statement. Pages without a table add stray rows of prose that you would otherwise have to clean out of the sheet.

## What Happens to My PDF During the Extraction?

The work runs in a Web Worker, a background thread inside your browser tab, so the page stays responsive while a long PDF is processed. pdf.js opens the file and, for each page, returns every text item with its x and y coordinates, width and font size. The extractor groups items that share a vertical position into rows and items that line up horizontally into columns, decides which row is the header, and produces a table of strings. Smart Multiline Merge and Financial Normalization are applied to that table in the tab. Finally SheetJS, an open-source spreadsheet library, writes the rows into a workbook with one sheet and hands the browser an .xlsx Blob to download.

Nothing in that chain talks to a server. The PDF enters the tab through the browser's File API and the .xlsx leaves through a download; if you open developer tools on the Network tab while converting, you will see the page's scripts and fonts, one anonymous page-view request, and no request carrying your file.

That matters because the PDFs people convert to Excel are the financial ones: a year of chequing statements for a mortgage application, credit-card statements for an expense audit, a T4 or T5 summary, invoices from a supplier, a CRA instalment history, a brokerage statement. An online converter that uploads those keeps a copy on a server you cannot see. Here, when the tab closes, the only copies are the ones in your Downloads folder.

## Which PDF Tables Convert Cleanly, and Which Don't?

Extraction quality depends on how the PDF was made and how regular the table is. The pattern is simple: software-generated tables with one line per row convert well; anything designed for a human eye rather than a machine converts partly.

| Source of the PDF | Typical result | Cleanup needed |
|---|---|---|
| Bank or credit-card statement downloaded from online banking | All transactions in order; descriptions merged; amounts as numbers with normalization on | Delete header and footer rows that repeat on each page; 1–2 minutes |
| Invoice or purchase order from accounting software | Line items correct; totals block may land as extra rows | Trim the totals rows; under a minute |
| Table exported from Excel or Google Sheets to PDF | Near-exact: headers, columns and values in place | Set number formats |
| Report with a table per page and prose between | Table rows plus some sentences as single-cell rows | Filter out rows with only one populated cell |
| Table with wrapped text in several columns | Rows split; merge only rejoins description-type columns | Manual rejoin for the other columns |
| Table with merged header cells or two header rows | Data correct; headers assigned to one column each | Rename row 1 |
| Columns separated only by colour bands, no gaps | Adjacent columns may fuse into one | Use Text to Columns in Excel on a delimiter |
| Scanned or photographed statement | No rows; Extraction Failed | OCR first, then convert |
| Right-to-left or rotated pages | Columns out of order | Rotate with Rotate PDF first |

As a rule of thumb, a 12-page bank statement of 300 transactions takes 4–8 seconds to extract and about three minutes to tidy into a sheet you can pivot. The same statement typed by hand takes an hour and a half, and the retyping error rate on amounts is what you are avoiding.

If a CSV is what your bookkeeping software wants rather than an Excel workbook, you do not need a separate tool: the download step offers CSV directly, and Excel, Numbers and Google Sheets will each save the .xlsx as CSV from their File menu.

## How Do I Convert PDF to Excel on iPhone, Android, Mac or Windows?

The extractor is the same on every device. Differences are in picking the file and in what you already have installed.

**iPhone and iPad.** Open the page in Safari, tap the drop zone and choose the statement from Files. The .xlsx lands in Files → Downloads and opens in Numbers (free), Excel for iOS or Google Sheets. A 60-page statement is fine on a recent iPhone. iOS has no built-in table extraction; Numbers can open a PDF only as an image.

**Android.** Chrome handles the picker; the file saves to Downloads and opens in Sheets or Excel for Android. Phones with 3 GB of RAM or more handle 100-page statements.

**Mac.** Preview cannot extract tables, and Numbers has no PDF import. Excel for Mac also lacks the PDF import that the Windows version has. This page is the practical option on a Mac unless you own Acrobat Pro, whose Export to Spreadsheet is good on complex tables.

**Windows.** Excel for Microsoft 365 has Data → Get Data → From File → From PDF, which detects tables and lets you choose one. It is strong on multi-table reports and worth using if you have it. It does not merge wrapped descriptions, and the file goes through Power Query, so for a quick statement conversion the browser tool is faster; for a 40-table annual report, Excel's importer is better.

**Chromebook.** Works in Chrome; the .xlsx opens in Google Sheets from Downloads or Drive. Sheets' own File → Import does not read PDFs.

## When Should You Not Use This Tool?

- **Scanned statements.** The most common failure. OCR the PDF first with Acrobat, your scanner's software or an OCR app, then convert the searchable result.
- **Tables where layout carries meaning.** Indented sub-accounts in a trial balance, bracketed columns in a financial statement, or a schedule with cells that span rows. The data comes out; the hierarchy does not.
- **PDFs that mix many different tables.** A 90-page annual report with 40 tables of different shapes produces one long sheet in which the header row only fits the first table. Extract the pages you need with [Extract PDF Pages](/en/extract-pdf-pages) and convert each range.
- **Forms rather than tables.** A T1 return or a mortgage application has labelled boxes, not rows and columns. Convert it with [PDF to Word](/en/pdf-to-word) if you need the text.
- **Password-protected statements.** Some banks lock PDFs with your date of birth or account number. Remove the password with Unlock PDF first.
- **Formulas and formatting.** The output holds values only. Nothing in a PDF records how a total was computed, so the sheet has no formulas; add them yourself.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| Extraction Failed, or zero transactions found | Check whether text selects in the PDF; OCR it if not | Scanned pages have no text items for the extractor to position |
| Two columns are fused into one cell | Open the .xlsx and use Data → Text to Columns with a space or a custom delimiter | Columns with no horizontal gap in the PDF cannot be separated by position |
| A transaction is missing but its description is glued to the previous row | Turn off Smart Multiline Merge and reconvert | A row with only a description is treated as a continuation; disabling merge keeps it separate |
| Amounts are left-aligned and SUM gives 0 | Turn on Financial Normalization, or in Excel select the column and use Data → Text to Columns → Finish | The values are stored as text until currency symbols and commas are removed |
| Dates appear as text in several formats | Turn on Financial Normalization | Recognizable dates are rewritten as YYYY-MM-DD, which every spreadsheet reads as a date |
| Page headers like "Statement period" appear as rows every 40 lines | Sort by the date column, then delete the block of non-date rows | Repeated page furniture is text too; sorting groups it so one deletion removes it |
| Negative amounts show as (45.00) | Turn on Financial Normalization | Bracketed values are rewritten with a leading minus sign |
| Rows are in the wrong order on landscape pages | Run the PDF through Rotate PDF so pages are upright, then convert | Row detection assumes text baselines run left to right across an upright page |

## What Should I Do With the Spreadsheet?

- [Excel to PDF](/en/excel-to-pdf) once you have cleaned and totalled the data and need to send it back as a fixed document.
- [Extract PDF Pages](/en/extract-pdf-pages) to isolate the pages that hold the table before converting a long report.
- [Delete PDF Pages](/en/delete-pdf-pages) to drop cover and terms pages from a statement first.
- [PDF to Word](/en/pdf-to-word) when the document is mostly text and the table is incidental.

## The Bottom Line

PDF to Excel turns the text positions in a software-generated PDF into rows and columns, merges wrapped descriptions, optionally cleans amounts and dates into numbers, and writes a one-sheet .xlsx, all inside your browser. On bank statements, invoices and exported tables it saves an hour of retyping per few hundred rows and leaves no copy of your financial data anywhere but your own Downloads folder. It cannot read scans, and it flattens hierarchical layouts. Check that the text selects, use Preview & Edit the first time, and switch on Financial Normalization before you sum anything.
