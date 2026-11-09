---
title: "Excel to PDF Free: One Page per Sheet in Your Browser (2026)"
h1: "How to Convert an Excel Spreadsheet to PDF"
lead: "Turn an .xlsx workbook into a PDF with each sheet laid out as a table. The conversion runs in your browser tab; the file is never uploaded."
description: "Convert an Excel .xlsx to PDF for free in your browser. Each sheet becomes a table on its own page, formulas show their values, nothing is uploaded."
answer: "Select the .xlsx, click Convert to PDF, and the PDF downloads a few seconds later. It is free, with no account and no upload: the workbook is read and drawn to PDF inside your browser. Every sheet becomes its own page, cells show their computed values, and column widths are set from the content. The limit to know: charts, images and cell colours are not drawn, and very wide sheets wrap rather than shrink to fit."
updated: 2026-11-09
limits:
  - ["Price", "Free, no account, no watermark, as many workbooks as you like"]
  - ["Where the conversion happens", "In your browser tab. A spreadsheet library reads the workbook and the PDF engine in the page draws the tables. Nothing is uploaded."]
  - ["Maximum file size", "No fixed cap; bounded by memory. A 5 MB workbook of 20,000 rows converts on a laptop in under 30 seconds. Keep workbooks under ~10 MB on a phone."]
  - ["Maximum rows and sheets", "No set maximum. A 500-row sheet makes about 12 PDF pages; 20 sheets of 100 rows take 5–10 seconds."]
  - ["Input", ".xlsx (Excel 2007 and later). The picker also lists .xls; the old binary format often fails to open, so save it as .xlsx first."]
  - ["Output", "One PDF, A4 portrait, one or more pages per sheet, each starting with the sheet's name. Formulas appear as their last calculated values. Your workbook is not modified."]
  - ["What stays on your device", "The workbook and the PDF. The site records only an anonymous page view."]
  - ["Works offline?", "Yes, once the page and the conversion library have loaded once."]
  - ["Browsers", "Current Chrome, Edge, Firefox and Safari; Safari on iOS and Chrome on Android"]
faq:
  - q: "How do I convert an Excel file to PDF for free?"
    a: "Open the Excel to PDF tool, select the .xlsx, click Convert to PDF and save the download. No charge, no account, no upload. If Excel is installed, its own File → Save As → PDF gives a print-faithful result with your colours and charts; this tool is for machines without Excel and for files that must not leave the device."
  - q: "Does every sheet in the workbook end up in the PDF?"
    a: "Yes, every worksheet is drawn, in workbook order, each starting on a new page with a heading that shows the sheet's name. If you only want one sheet, delete or move the others in a copy of the workbook before converting, or split the PDF afterwards with Split PDF."
  - q: "What happens to my formulas?"
    a: "Each cell shows the value Excel last calculated and saved in the file, so a SUM shows its total and a VLOOKUP shows its result. The formula text itself is not printed. If the workbook was saved by a tool that does not store calculated values, those cells may be blank; open and re-save it in Excel or LibreOffice first."
  - q: "Why are my charts and cell colours missing?"
    a: "The converter draws cell text in a plain grid: it does not render charts, pictures, cell fills, font colours or conditional formatting. For a dashboard or a chart-heavy report, export from Excel, Numbers or Google Sheets. For data tables, the plain grid is usually what a reader needs."
  - q: "My sheet has 30 columns. Will it fit on the page?"
    a: "The page is A4 portrait and columns share the width in proportion to their longest value, so 30 columns become very narrow and long values wrap onto several lines inside their cells. The data is all there but hard to read. Hide or delete columns you do not need, or export landscape from Excel for wide sheets."
  - q: "Is it safe to convert a payroll or budget workbook here?"
    a: "The workbook is read into your browser's memory and the PDF is built in the same tab; no request carries the file to a server. You can confirm it in your browser's developer tools under Network while converting. Salaries, SINs and account numbers in the sheet stay on your device."
  - q: "Can I convert a .csv or an old .xls file?"
    a: "Save it as .xlsx first. Old .xls binary workbooks are listed in the file picker but usually fail to open, and CSV is not accepted at all. Excel, LibreOffice Calc, Numbers and Google Sheets all save to .xlsx in two clicks, and the conversion then works normally."
  - q: "Are hidden rows and columns included?"
    a: "Hidden rows and columns are drawn like any other, because the converter reads cell values rather than print settings. Delete them in a copy of the workbook if they must not appear. The same applies to the print area: it is ignored, and the whole used range of each sheet is converted."
---
## How Do I Convert an Excel File to PDF for Free?

The tool needs one file and one click. The preparation that matters is in the workbook itself, because what you see in Excel (colours, hidden columns, print areas) is not what the converter sees (cell values in a grid).

### Step 1: Prepare the workbook

Open a copy and remove what should not be in the PDF: helper columns, scratch sheets, hidden rows with old data. Make sure the file is saved as .xlsx; an .xls from Excel 2003 should be re-saved with File → Save As → Excel Workbook. If a sheet is wider than about 12 columns, decide now which columns matter, because everything will be squeezed onto an A4 portrait page.

### Step 2: Select the file

Click **Select File** or drag the .xlsx onto the drop zone. The workbook is read into the tab's memory; no upload bar appears because there is no upload.

### Step 3: Click Convert to PDF

Press **Convert to PDF**. For each worksheet, the converter reads the used range cell by cell, takes each cell's displayed text, measures the longest value in every column to set the widths, and draws the rows with borders, wrapping long text within cells and starting a new page whenever the current one is full. Each sheet begins on a fresh page under a bold "Sheet: name" heading. A 200-row budget takes 2–3 seconds; a 20-sheet workbook of 5,000 rows takes 15–30 seconds.

### Step 4: Download and check the PDF

The PDF downloads with the workbook's name. Open it and look at the widest sheet first: if values wrap into three or four lines inside a cell, the sheet has too many columns for a portrait page, and the fix is in step 1.

### Step 5: Finish in the browser

Merge the result with a cover letter using [Merge PDF](/en/merge-pdf), pull a single sheet out with [Split PDF](/en/split-pdf), or add a signature with [Sign PDF](/en/sign-pdf) before sending.

> **Tip:** Put the sheet you want read first at the left of the tab bar in Excel. The PDF follows the workbook's sheet order, and reordering pages afterwards in [Organize PDF](/en/organize-pdf) is slower than dragging a tab.

## What Happens to My Workbook During the Conversion?

An .xlsx is a zip archive of XML parts: one for each sheet's cells, one for shared strings, one for styles. The page loads an open-source spreadsheet library that unpacks the archive and gives the converter each worksheet as rows of cells, where every cell carries both its stored value and the text Excel would display for it (the cached result for a formula, the formatted text for a date or currency). The PDF engine in the page then lays those rows out as bordered tables and writes a PDF Blob that the browser offers as a download.

Nothing is sent anywhere in that process. The file enters the tab through the browser's File API and the PDF leaves through a download. Open your browser's developer tools, select the Network tab and convert a workbook: you will see the page's own scripts (including the spreadsheet library the first time), one anonymous page-view request, and no request carrying your file.

Spreadsheets are where the numbers nobody wants leaked live: a payroll run with every employee's salary, a condo board budget, a small business's GST/HST working file, a personal net-worth tracker, a class list with student grades. Sending any of those to an online converter puts a copy on a server you do not control, often in another country. Converting them in the tab means the only copies are the ones on your own disk.

## What Converts Well, and What Doesn't?

The converter is a table renderer. It reproduces the text content of a sheet faithfully and ignores everything that is decoration or lives outside the cell grid.

| In the workbook | In the PDF | Notes |
|---|---|---|
| Cell text and numbers | Kept, in the displayed format | Dates and currency appear as Excel shows them, not as raw serial numbers |
| Formulas | Shown as their last calculated value | Formula text is not printed |
| Multiple sheets | Each on its own page(s), in workbook order, with the sheet name as a heading | Empty sheets still produce a heading page |
| Column widths | Proportional to the longest value in each column | Excel's set widths are not used |
| Long text in a cell | Wrapped onto several lines within the cell | Row height grows to fit |
| Row count | All rows in the used range, paginated | A header row is not repeated on each page |
| Cell borders | A single thin border around every cell | Your custom border styles are not reproduced |
| Cell fill colours, font colours, bold, font size | Not drawn; all text is 10-point in a standard font | Use Excel's export if formatting carries meaning |
| Merged cells | Content appears in the first cell of the merge; the rest are blank | Titles that span columns land in column A |
| Charts, pictures, shapes | Not rendered | Export from Excel or paste the chart into Word first |
| Conditional formatting, data bars, icons | Not drawn | The underlying values are kept |
| Hidden rows and columns | Drawn like visible ones | Delete them in a copy first |
| Print area, page breaks, landscape orientation | Ignored; output is A4 portrait | Export from Excel for print-layout control |
| Comments and notes | Not printed | Nothing to do |
| Macros (.xlsm) | Never executed; save as .xlsx to convert | The code is not carried into the PDF |

In practice: a price list, a transaction log, a class roster, an inventory count or an invoice register comes through as a clean, readable grid that is often easier to scan than the original. A dashboard, a Gantt chart built from coloured cells or a formatted financial statement with bold subtotals and indented lines loses the visual structure. For those, Excel's own export is the right tool.

How big the PDF gets depends on rows and columns, not on file size:

| Sheet | Approximate PDF pages | Time on a 2022 laptop |
|---|---|---|
| 40 rows × 6 columns (an invoice register) | 1 | under 1 second |
| 500 rows × 8 columns (a year of transactions) | 10–13 | 2–4 seconds |
| 5,000 rows × 10 columns (an inventory export) | 110–130 | 15–30 seconds |
| 12 sheets × 50 rows (a monthly budget workbook) | 12–15 | 2–4 seconds |

## How Do I Convert Excel to PDF on iPhone, Android, Mac or Windows?

Each platform has a native route if a spreadsheet app is installed. This tool covers the cases where there is none, or where the file should not pass through a cloud account.

**iPhone and iPad.** Open the page in Safari, tap the drop zone and choose the .xlsx from Files. The PDF saves to Files → Downloads. The native alternative is to open the file in Numbers and choose Export → PDF, which keeps colours and charts but requires the app; Excel for iOS can also print to PDF with a Microsoft account. The browser tool needs neither.

**Android.** Chrome handles the picker and saves to Downloads. Google Sheets can open the .xlsx and download it as PDF, but only after uploading it to Drive. Use the browser tool to keep the file on the phone.

**Mac.** Numbers (free) and Excel for Mac both export faithful PDFs, and any app can print with Save as PDF. Use this page when the Mac has no spreadsheet app, or when you want a plain grid without opening one.

**Windows.** Excel's File → Export → Create PDF/XPS or Microsoft Print to PDF reproduce colours, charts, landscape pages and print areas exactly. If Excel is not installed, LibreOffice Calc is a free alternative. This page is the no-install, no-upload option for data tables.

**Chromebook.** Google Sheets opens .xlsx files and downloads them as PDF, with the file passing through Google's servers. For a strictly local conversion use this page in Chrome; the PDF lands in Downloads.

## When Should You Not Use This Tool?

- **Workbooks whose formatting carries meaning.** Colour-coded schedules, heat maps, financial statements with bold totals and indented sub-lines. Export from Excel.
- **Anything with charts or images.** They are not drawn. If the chart is the point, paste it into Word and use [Word to PDF](/en/word-to-pdf), or export from the spreadsheet app.
- **Very wide sheets.** Beyond about 12–15 columns on a portrait page, values wrap and the table becomes hard to read. Hide columns first or export landscape from Excel.
- **Sheets that rely on a print area or repeated header rows.** The converter prints the whole used range and does not repeat headers on each page.
- **Old .xls and .csv files.** Save as .xlsx first; it takes seconds in any spreadsheet app.
- **Workbooks over roughly 50 MB.** A 200,000-row export produces thousands of PDF pages and may exhaust a browser tab's memory. Filter to the rows you need first.
- **Password-protected workbooks.** An encrypted .xlsx cannot be opened by the converter. Remove the password in Excel (File → Info → Protect Workbook) and save a copy.

## Troubleshooting

| Problem | Fix | Why it works |
|---|---|---|
| "Could not read the file" or nothing happens | Save the file as .xlsx in Excel, LibreOffice or Sheets and try again | Only the .xlsx package format is parsed; old .xls and CSV are not |
| Formula cells are blank in the PDF | Open the workbook in Excel, press F9 to recalculate, save, and reconvert | The converter prints cached values; files saved by some tools store formulas without results |
| Columns are very narrow and text wraps into many lines | Delete or hide-and-delete unneeded columns in a copy; split wide sheets into two | Widths are shared across an A4 portrait page in proportion to content |
| A title that spanned columns is in column A only | Accept it, or put the title in the sheet name so it appears in the page heading | Merged cells are read as their top-left cell |
| Dates show as five-digit numbers | Format the cells as a date in Excel and save before converting | The converter uses the cell's display text; an unformatted date has none |
| Colours, bold and fills are gone | Export from Excel if formatting matters | The converter draws plain text in a uniform grid |
| The PDF has an empty page with just a sheet name | Delete the empty worksheet in a copy of the workbook | Every worksheet produces at least a heading page |
| Hidden rows appear in the PDF | Delete them instead of hiding, in a copy | Visibility flags are not consulted; all cells in the used range are drawn |

## What Should I Do With the PDF Next?

- [Merge PDF](/en/merge-pdf) to put the tables behind a covering letter or report.
- [Split PDF](/en/split-pdf) to send one sheet's pages to one person and another's to someone else.
- [Compress PDF](/en/compress-pdf) if a very long export produced a file too big to email.
- [Sign PDF](/en/sign-pdf) to sign a statement of account before sending it.
- [PDF to Excel](/en/pdf-to-excel) for the reverse trip when a table arrives as a PDF.

## The Bottom Line

Excel to PDF in the browser gives you a plain, bordered table for every sheet in a workbook, with formulas shown as their values and nothing uploaded, in a few seconds and for free. It is the right choice for data tables on a machine without Excel, or for payroll, budget and tax workbooks that should not touch a server. It is the wrong choice for dashboards, charts and formatted statements, where Excel's own export preserves what the converter drops. Trim the columns, save as .xlsx, click Convert to PDF.
