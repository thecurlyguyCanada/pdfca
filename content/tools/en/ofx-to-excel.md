---
title: "OFX to Excel or CSV Free, in Your Browser (QFX Too)"
h1: "OFX to Excel and CSV Converter"
lead: "Open the .ofx or .qfx file your bank gave you as an Excel sheet or a CSV: one row per transaction, real dates, numeric amounts. The file is read in your browser and never uploaded."
description: "Convert an OFX or QFX bank download to Excel or CSV for free, in your browser. Works with Desjardins and Tangerine exports. Nothing is uploaded, no account."
answer: "Select your .ofx or .qfx file, check the transactions in the preview, and click Excel (or CSV, QBO, QIF). You get one row per transaction with Date, Description, Memo, Amount, Type and Reference columns; dates are real Excel dates and amounts are numbers you can sum. It is free, needs no account, and the bank file is read inside your browser tab, never uploaded."
updated: 2026-11-25
limits:
  - ["Price", "Free, no account, no limit on the number of files"]
  - ["Where the conversion runs", "In your browser tab. The OFX text is parsed in JavaScript and the .xlsx is written with ExcelJS on your device. Nothing is sent to a server."]
  - ["Files it reads", ".ofx, .qfx and .qbo; OFX 1.x (SGML, the older 'OFXHEADER:100' files) and OFX 2.x (XML). Bank accounts (chequing, savings) and credit card statements."]
  - ["Files it does not read", "Investment and brokerage statements (INVSTMTRS blocks), PDF statements, CSV files (open those directly in Excel)"]
  - ["Excel output", "One sheet named Transactions: Date, Description, Memo, Amount, Type, Reference. Dates are Excel dates (yyyy-mm-dd), amounts are numbers, header row frozen."]
  - ["Other outputs", "CSV (UTF-8 with BOM so accents survive), QBO for QuickBooks (accents folded to plain letters, as its ASCII header requires), QIF for Quicken-style imports"]
  - ["Several accounts in one file", "A selector lists each account (type and last four digits); each export covers the selected account"]
  - ["File size", "No fixed cap. OFX is plain text, so even thousands of transactions make a small file that converts in under a second."]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "How do I convert an OFX file to Excel?"
    a: "Download your transactions from online banking in OFX (often labelled Microsoft Money) or QFX (Quicken), open this page, select the file and click Excel. The workbook downloads with one row per transaction, dates in the first column and amounts as numbers. Nothing is installed and nothing is uploaded."
  - q: "Does it work with QFX files from Quicken downloads?"
    a: "Yes. A QFX file is an OFX file with a few extra Intuit tags and a different extension, so the converter reads it the same way. QBO files for QuickBooks are also OFX inside and open too. The extra Intuit tags are ignored."
  - q: "Which Canadian banks give you an OFX file?"
    a: "Desjardins' help pages list OFX and CSV for AccèsD transaction downloads, and Tangerine lists QFX (Quicken), Microsoft Money and CSV. National Bank's business online banking lists QBO, OFX and QFX. For other banks, look for Download transactions in online banking and pick the Quicken or Microsoft Money option."
  - q: "Can Excel open an OFX file without converting it?"
    a: "Not in a useful way. Excel has no OFX importer. OFX 2.x files are XML, so Power Query can load them, but you get nested tables to expand by hand. OFX 1.x files, which many banks still produce, are SGML with unclosed tags and fail as XML."
  - q: "Will French payee names with accents come through correctly?"
    a: "Yes. Older OFX files are often written in the Windows-1252 character set; the converter detects that and decodes accents such as é, è and ç correctly. The CSV export starts with a byte-order mark so Excel shows those accents when you double-click the file."
  - q: "Is it safe to convert my bank file on a website?"
    a: "On this page the file is read by JavaScript inside your browser tab and the spreadsheet is generated there too. No request carries your transactions; you can check the Network tab of your browser's developer tools while converting. Account numbers and balances stay on your device."
  - q: "Why are my credit card purchases negative?"
    a: "The converter copies each amount with the sign your bank wrote in the file. In OFX, purchases on a credit card are normally written as negative amounts and payments as positive ones, from the cardholder's point of view. Multiply the column by -1 in Excel if you prefer charges positive."
---
## How do I convert an OFX file to Excel?

The whole job takes about a minute, most of it inside your online banking. The converter itself is a single file selection and one click.

### Step 1: Download the transactions from your bank as OFX or QFX

In online banking, find the page that downloads transaction history (it is usually separate from the PDF statements page). Choose the account, the date range and the file format. Banks rarely label the format "OFX"; they name the program it was made for. **Microsoft Money** means OFX, **Quicken** means QFX, **QuickBooks** means QBO. Any of the three works here. If the only choices are PDF and CSV, take the CSV, which already opens in Excel without any conversion.

### Step 2: Select the file on this page

Click **Select OFX File** or drag the file onto the drop zone. The file is read as text in your browser. The converter detects whether it is the older SGML form (it starts with `OFXHEADER:100`) or the newer XML form (it starts with `<?xml` or `<?OFX`), works out the character set so accented names stay readable, and finds every bank and credit card account inside.

### Step 3: Check the preview

A table shows every transaction with its date, description, amount and a Credit or Debit badge. Above it, four boxes give the total credits, total debits, net change and the date range. Compare the date range with what you asked the bank for: if it is shorter, the bank's export was limited, not the conversion. If the file holds several accounts, a selector appears; choose the one you want.

### Step 4: Download Excel, CSV, QBO or QIF

Click **Excel** for an .xlsx workbook, **CSV** for a plain text file that any spreadsheet or accounting tool accepts, **QBO** for QuickBooks, or **QIF** for older personal-finance software. The download is named after your file, so `releve.ofx` becomes `releve.xlsx`. Click **New File** to convert another account.

> **Tip:** Download each account separately from your bank when you can. A file per account keeps the spreadsheets clean, and the Reference column makes it easy to spot a transaction that appears in two downloads with overlapping dates.

## Which Canadian banks export OFX, QFX or CSV?

What each bank offers changes when it redesigns online banking, so this table only lists what the bank's own help pages said when we checked in November 2026. Where we could not confirm a format from the bank itself, the table says so instead of guessing.

| Bank | Formats listed by the bank | Where to find it (bank's wording) |
|---|---|---|
| Desjardins (AccèsD, personal) | OFX, CSV | Sign in from a web browser, open the **Search transactions** tab, choose **download your transaction history**, then pick the period, accounts or credit cards and the format. Not available in the mobile app. |
| Tangerine | QFX (Quicken), Microsoft Money (OFX), Excel CSV | On the tangerine.ca website (not the app): **Transactions**, then **Download Transactions** |
| CIBC | Download is offered per money-management program; CIBC's page does not name the file formats | From the Online Banking home page, under **More**, select **Download Transactions**, then the account, date range and software |
| National Bank (business online banking) | PDF, CSV, QBO/OFX/QFX | Select the account, filter if needed, click **Export** and choose the format |
| National Bank personal, RBC, TD, BMO, Scotiabank and others | Not confirmed from the bank's own help pages | Look for **Download transactions** in online banking and a Quicken, Microsoft Money or spreadsheet option |

Two patterns hold across banks. First, transaction downloads usually cover a limited window, often the last months rather than years, so archive downloads as you go if you need a full tax year. Second, the PDF monthly statement and the transaction download are different documents: the statement is the official record, the download is the data. If you only have PDF statements, use [PDF to Excel](/en/pdf-to-excel) instead.

## What does the Excel file look like?

Here is what the converter writes, column for column. The rows below are an example, not real data; your file will have your bank's descriptions.

| Date | Description | Memo | Amount | Type | Reference |
|---|---|---|---|---|---|
| 2026-11-03 | Hydro-Québec | | -45.67 | DEBIT | 202611030001 |
| 2026-11-04 | Paie employeur | Dépôt direct | 1500.00 | CREDIT | 202611040002 |
| 2026-11-06 | Épicerie | Paiement par carte | -82.14 | DEBIT | 202611060003 |

- **Date** comes from the transaction's posted date (`DTPOSTED`) and is stored as a real Excel date shown as yyyy-mm-dd, so you can sort, filter by month and build pivot tables. The time and time zone the bank adds are dropped.
- **Description** is the payee name (`NAME`, or `PAYEE` if the bank uses that; if both are missing, the memo).
- **Memo** is the bank's extra detail, when it gives one.
- **Amount** is a number, negative for money out and positive for money in, exactly as the bank wrote it. A decimal comma such as `-45,67`, which some French-language exports use, is read as -45.67.
- **Type** is CREDIT or DEBIT, from the bank's transaction type and the sign of the amount.
- **Reference** is the bank's unique transaction ID (`FITID`). It is what accounting software uses to avoid importing the same transaction twice.

The CSV export has the same information in a slightly different order: Date, Description, Amount, Type, Memo, Reference.

## OFX, QFX, QBO, QIF or CSV: which one do I need?

The formats look interchangeable in a download menu, but they are made for different programs.

| Format | What it is | Pick it when |
|---|---|---|
| OFX | Open Financial Exchange, the industry standard for bank data; labelled "Microsoft Money" by many banks | You want the file this converter reads best |
| QFX | OFX with Intuit tags, labelled "Quicken" | Your bank offers no plain OFX |
| QBO | OFX with Intuit tags for QuickBooks Web Connect | You import into QuickBooks |
| QIF | An older plain-text format from Quicken | Your software imports QIF but not OFX |
| CSV | Comma-separated text, one row per line | You work in a spreadsheet, or your bookkeeping app imports CSV |
| XLSX | An Excel workbook | You will sort, total, chart or send the file to someone |

If your bank offers CSV and you only want a spreadsheet, the bank's CSV is already enough. The reasons to download OFX anyway: it carries the unique transaction ID, it has one consistent structure across banks, and you can turn it into every other format here.

## Why can't Excel open an OFX file directly?

Excel has no OFX importer. Double-clicking an .ofx file either opens it as one long column of tags or does nothing useful. The newer OFX 2.x files are XML, so Excel's Power Query can load them, but you get a tree of nested tables (signon, statement, transaction list, transaction) to expand one by one. The older OFX 1.x files, which many Canadian banks still produce, are SGML: tags such as `<TRNAMT>-45.67` are not closed, so every XML importer rejects them.

The converter reads both forms the same way and flattens them to one row per transaction, which is the shape you actually want in a spreadsheet.

## What happens to my bank data during the conversion?

The file never leaves your device. The browser hands the file to the page through the File API, the page's JavaScript reads it as text, and the parser pulls out the accounts and transactions with plain text matching. When you click Excel, ExcelJS, an open-source library loaded into the page, builds the workbook in memory and the browser saves it to your Downloads folder.

There is no upload step at any point, which you can verify: open your browser's developer tools (F12), choose the Network tab, convert a file, and look for a request that carries it. There is none. The site records an anonymous page view, not file contents.

That matters more for this tool than for most. A transaction download carries your account number, your balance, every payee and every amount for months. Some online converters process files on a server; this one does not.

## What do people use the spreadsheet for?

### Self-employment and rental income at tax time

Freelancers and landlords sort a year of transactions to fill in the CRA's T2125 (business income) or T776 (rental income), or Revenu Québec's TP-80. Filter the Description column by payee, total the Amount column, and you have each expense category. Keep the receipts; the spreadsheet is your working file, not proof.

### Monthly budgeting

Add a Category column next to Description, fill it once per payee, and a pivot table by month and category shows where the money goes. Real Excel dates make the monthly grouping one click.

### Sending transactions to an accountant or bookkeeper

Many accountants prefer a spreadsheet or a QBO file to twelve PDF statements. Export CSV for bookkeeping software that imports CSV, or QBO for QuickBooks. If you email the file, consider [protecting a PDF version with a password](/en/protect-pdf) or sending it through a secure portal instead.

### Proof of income or expenses

For a rental application or a mortgage file, export the months asked for, delete unrelated rows, and turn the sheet into a PDF with [Excel to PDF](/en/excel-to-pdf). Lenders may still ask for the bank's official PDF statements; the spreadsheet is a summary.

## What if the file doesn't convert?

| Problem | Likely cause | Fix |
|---|---|---|
| "This file is not an OFX/QFX statement" | The file is a CSV, a PDF statement or an HTML page saved by mistake | Open a CSV directly in Excel; convert a PDF statement with PDF to Excel; download again choosing OFX, Microsoft Money or Quicken |
| "Contains no bank or credit card account" | An investment or brokerage file (holdings and trades) | Not supported: this tool reads bank and credit card statements only. Ask your brokerage for a CSV. |
| Accents look like Ã© in the CSV | An older Excel opened the CSV as ANSI | Use the Excel download, or in Excel choose Data, From Text/CSV, and pick UTF-8 (65001) |
| The date column shows ##### | The column is too narrow for the date | Double-click the border between the column letters to widen it |
| Fewer transactions than expected | The bank's download covers a limited period | Check the date range box in the preview; download older periods separately |
| The same transaction appears twice after combining files | Two downloads with overlapping dates | Select the data, then Data, Remove Duplicates on the Reference column |
| Only one account in the export | The file holds several accounts and one is selected | Choose the other account in the selector and export again |
