---
title: "PHP to PDF Free: Open a .php or .aspx Download as a PDF"
h1: "PHP to PDF: Open a Statement Saved as .php or .aspx"
lead: "Your bank statement, bill or form downloaded as statement.php or GetDocument.aspx instead of a PDF? Drop it here: if a PDF is inside, you get it back as a .pdf in one click. Real PHP code is printed to PDF instead."
description: "Statement or bill saved as .php or .aspx? It is usually a PDF with the wrong name. Drop it here to get the .pdf back, or print PHP code to PDF. Free, no upload."
answer: "A .php or .aspx file you downloaded from a bank, utility or government site is usually already a PDF that your browser named after the web page that sent it. Drop it above and the tool checks the first bytes: if a PDF is inside, it saves the same file as .pdf, byte for byte. If the file is real PHP or ASPX source code, it prints the code to a PDF instead. Nothing is uploaded."
updated: 2026-11-25
limits:
  - ["Price", "Free, no account, no limit on the number of files"]
  - ["Where it runs", "In your browser tab. The file is read with the File API and never sent to a server."]
  - ["Files it accepts", ".php, .aspx, .asp, .ashx, .jsp, .cgi, .do, .txt and files with no extension"]
  - ["When a PDF is inside", "The PDF is saved unchanged from its %PDF- header on, under the same name ending in .pdf. Pages, text, signatures and form fields are untouched."]
  - ["When the file is source code", "Each line is printed in Courier 10 pt on Letter pages with 50 pt margins; long lines wrap, tabs become four spaces"]
  - ["What it cannot do", "Run PHP or ASPX code, or show the web page a script would have produced. Characters outside Western European text print as ?"]
  - ["Works offline?", "Yes, once the page has loaded"]
faq:
  - q: "Why did my bank statement download as a .php file?"
    a: "The web page that sends the statement is a PHP or ASPX script. When the server does not tell the browser what to call the file, the browser uses the last part of the address, such as statement.php, even though the content is a normal PDF."
  - q: "Can I just rename the file from .php to .pdf?"
    a: "Yes, if a PDF is inside, renaming is all it needs, and this page does exactly that for you. Renaming by hand is harder on phones and on computers that hide file extensions, which is why most people end up searching for a converter."
  - q: "How do I know whether the .php file is a PDF?"
    a: "Drop it on this page. The tool looks for the %PDF- signature that every PDF starts with. If it finds it in the first 1,024 bytes, you get the PDF back; if not, the file is text, usually source code or a web page."
  - q: "The PDF I got shows code or an error message. What happened?"
    a: "The download was not a PDF. Most often the session had expired and the site sent back a login or error page instead of the statement. Sign in again, download the document once more, and drop the new file here."
  - q: "Does this convert ASPX files too?"
    a: "Yes. .aspx, .asp, .ashx, .jsp and .cgi downloads are handled the same way as .php: if a PDF is inside it is saved as a .pdf, otherwise the text is printed to a PDF."
  - q: "Is it safe to open a bank statement on this page?"
    a: "The file never leaves your device. The page reads it in your browser tab, checks its first bytes and hands the result back as a download. You can confirm in your browser's developer tools that no request carries the file."
  - q: "Can it run my PHP code and save the result as a PDF?"
    a: "No. Running PHP needs a web server with PHP installed. To save what a PHP page shows, open it in your browser and use Print, then Save as PDF. This tool prints the source code itself."
---
## Why does a statement download as .php or .aspx?

Many bank, utility, payroll and government portals send documents through a script: the address ends in something like `statement.php?id=…` or `GetDocument.aspx`. The server sends back a normal PDF, but it is supposed to add a header that names the file (for example `releve-2026-10.pdf`). When that header is missing or malformed, the browser falls back on the last part of the address and saves the PDF as `statement.php`. Some phone browsers and download managers do this more often than desktop browsers.

Nothing is wrong with the document itself. The bytes are a PDF; only the name is wrong. Your computer looks at the extension, sees `.php`, and offers a code editor or nothing at all instead of your PDF reader.

| What you see | What it usually is | What this page does |
|---|---|---|
| `statement.php`, `invoice.php`, `download.php` from a bank or supplier | A PDF with the wrong extension | Saves it as `statement.pdf`, unchanged |
| `GetDocument.aspx`, `ViewPDF.aspx` from a portal | A PDF with the wrong extension | Saves it as `GetDocument.pdf`, unchanged |
| A file with no extension at all | Often a PDF | Saves it with `.pdf` added |
| A `.php` file you or a developer wrote | PHP source code | Prints the code to a PDF, line by line |
| A small `.php` file that opens as a web page | A login or error page sent instead of the document | Prints the HTML as text; download the document again |

## How do I open a .php file as a PDF?

### Step 1: Drop the file on this page

Click the drop zone or drag the downloaded file onto it. On a phone, choose the file from your Downloads folder. The file is read in your browser; it is not uploaded.

### Step 2: Let the tool check what is inside

Every PDF starts with the five characters `%PDF-`. The tool reads the first 1,024 bytes, the window PDF readers themselves accept, and looks for that signature. If it is there, the file is a PDF and nothing needs converting.

### Step 3: Download the .pdf

The result keeps the original name with `.pdf` at the end, so `statement.php` becomes `statement.pdf`. Open it in any PDF reader. If the file turned out to be source code, the download is a PDF of the code instead. To keep a year of statements together, [merge the PDFs](/en/merge-pdf) into one file.

## Can I fix it by renaming the file myself?

Yes, if the file is a PDF inside, changing `.php` to `.pdf` is the whole fix. The tool exists because renaming is awkward in practice:

- **Windows:** File Explorer hides extensions by default. In File Explorer choose **View**, then **Show**, then **File name extensions**, then rename the file and confirm the warning.
- **Mac:** select the file, choose **File**, then **Get Info**, and edit **Name & Extension**; confirm with **Use .pdf**.
- **iPhone and Android:** the Files apps let you rename, but some hide the extension or keep the old one.

Renaming never converts anything. If the file is not a PDF inside, renaming it to `.pdf` gives you a file every reader refuses to open, which is why checking the first bytes first saves time.

## What if the file is real PHP source code?

Developers, students and reviewers sometimes need PHP code on paper or in a PDF: for an assignment, a code review, an appendix or an archive. When no PDF signature is found, the tool prints the file as plain text:

- Courier 10 pt, which keeps indentation and columns aligned
- Letter pages with 50 pt margins, a new page whenever one fills up
- Long lines wrapped at the margin, tabs expanded to four spaces
- Characters the Courier font cannot show, such as emoji or Asian scripts, printed as `?`

The code is not run and not syntax-highlighted. To save the page a PHP script produces, open that page in your browser and use **Print**, then **Save as PDF**.

## What if it doesn't work?

| Problem | Likely cause | Fix |
|---|---|---|
| The PDF shows HTML code or "session expired" text | The site sent a login or error page instead of the document | Sign in again, download the document once more, drop the new file |
| The file is only a few KB and has no pages | The download was cut off or blocked | Download again on a stable connection, or try another browser |
| The PDF asks for a password | The bank protects statements with a password | Use the password the bank gives (often a date of birth or account digits) |
| The download is a .zip, .xlsx or .csv named .php | The site sent another kind of file | Rename it to its real type; for a spreadsheet, open the CSV or XLSX directly |
| Emoji or non-Latin characters in printed code show as ? | They are outside the Courier font's Western European character set | Keep the original file for the exact text; the PDF is for reading |
