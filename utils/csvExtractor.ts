import * as pdfjs from 'pdfjs-dist';
import { utils, write } from 'xlsx';

// Initialize PDF.js worker
if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export interface ExtractedRow {
    [key: string]: string;
}

export interface TableData {
    headers: string[];
    rows: ExtractedRow[];
    confidence: number;
}

interface TextItem {
    str: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

/**
 * Robust engine to extract tabular data from PDF using spatial clustering
 */
export async function extractTableFromPdf(file: File): Promise<TableData> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;

    let allTextItems: TextItem[] = [];
    const numPages = pdf.numPages;

    // 1. Extract raw text with coordinates for all pages
    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1.0 });

        const items: TextItem[] = textContent.items.map((item: any) => ({
            str: item.str,
            x: item.transform[4],
            y: viewport.height - item.transform[5], // Flip Y to standard top-down
            w: item.width,
            h: item.height
        }));

        allTextItems.push(...items);
    }

    if (allTextItems.length === 0) {
        return { headers: [], rows: [], confidence: 0 };
    }

    // 2. Spatial Clustering: Identify Rows (Y-axis)
    // Sort by Y, then X
    allTextItems.sort((a, b) => a.y - b.y || a.x - b.x);

    const rows: TextItem[][] = [];
    let currentRow: TextItem[] = [];
    let lastY = allTextItems[0].y;
    const yTolerance = 5; // Pixels

    for (const item of allTextItems) {
        if (Math.abs(item.y - lastY) > yTolerance) {
            if (currentRow.length > 0) rows.push(currentRow);
            currentRow = [];
            lastY = item.y;
        }
        currentRow.push(item);
    }
    if (currentRow.length > 0) rows.push(currentRow);

    // 3. Spatial Clustering: Identify Columns (X-axis)
    // Build a histogram of X coordinates to find "gutters"
    const columnFrequencies: { [key: number]: number } = {};
    allTextItems.forEach(item => {
        const roundedX = Math.round(item.x / 10) * 10;
        columnFrequencies[roundedX] = (columnFrequencies[roundedX] || 0) + 1;
    });

    const sortedX = Object.keys(columnFrequencies)
        .map(Number)
        .sort((a, b) => a - b);

    // Filter X clusters that appearing consistently
    const columnBoundaries = sortedX.filter(x => columnFrequencies[x] > numPages * 0.5);

    // 4. Transform clustered rows into structured data
    // For now, let's use a simple approach based on X proximity
    const processedRows: string[][] = rows.map(rowItems => {
        // Group items in a physical line by proximity or column boundaries
        const line: string[] = [];
        rowItems.sort((a, b) => a.x - b.x);

        let currentCell = rowItems[0].str;
        for (let i = 1; i < rowItems.length; i++) {
            const dist = rowItems[i].x - (rowItems[i - 1].x + rowItems[i - 1].w);
            if (dist < 15) { // Proximity merge
                currentCell += " " + rowItems[i].str;
            } else {
                line.push(currentCell.trim());
                currentCell = rowItems[i].str;
            }
        }
        line.push(currentCell.trim());
        return line;
    });

    // 5. Detect Headers (Heuristic: First row with most columns)
    let headerIdx = 0;
    let maxCols = 0;
    processedRows.slice(0, 10).forEach((row, idx) => {
        if (row.length > maxCols) {
            maxCols = row.length;
            headerIdx = idx;
        }
    });

    const headers = processedRows[headerIdx] || [];
    const dataRows = processedRows.slice(headerIdx + 1)
        .filter(row => row.length >= Math.floor(maxCols * 0.7)) // Filter outliers
        .map(row => {
            const obj: ExtractedRow = {};
            headers.forEach((h, i) => {
                obj[h] = row[i] || "";
            });
            return obj;
        });

    return {
        headers,
        rows: dataRows,
        confidence: 0.8 // Base confidence
    };
}

/**
 * Smart Multiline Merger
 * Merges rows where the second line is a continuation of the first (Descriptions)
 */
export function mergeMultilineRows(data: TableData): TableData {
    if (data.rows.length < 2) return data;

    const mergedRows: ExtractedRow[] = [];
    let pivot = { ...data.rows[0] };

    for (let i = 1; i < data.rows.length; i++) {
        const current = data.rows[i];

        // Heuristic: If current row has few columns populated and they are "texty" columns
        // while key columns (Date, Amount) are empty, it's likely a continuation.
        const populatedPaths = Object.keys(current).filter(k => current[k].trim() !== "");

        // Common continuation pattern: Only one column (usually description) is populated
        const isContinuation = populatedPaths.length === 1 &&
            (populatedPaths[0].toLowerCase().includes('desc') ||
                populatedPaths[0].toLowerCase().includes('memo') ||
                populatedPaths[0].toLowerCase().includes('payee'));

        if (isContinuation) {
            const key = populatedPaths[0];
            pivot[key] = (pivot[key] + " " + current[key]).trim();
        } else {
            mergedRows.push(pivot);
            pivot = { ...current };
        }
    }
    mergedRows.push(pivot);

    return { ...data, rows: mergedRows };
}

/**
 * Standardize Dates and Currencies
 */
export function normalizeFinancialData(data: TableData): TableData {
    return {
        ...data,
        rows: data.rows.map(row => {
            const newRow = { ...row };
            Object.keys(newRow).forEach(key => {
                const val = newRow[key].trim();
                const lowerKey = key.toLowerCase();

                // 1. Date Normalization (Generic)
                if (lowerKey.includes('date')) {
                    // Handle "Oct 12 2024", "12/10/24", etc.
                    const date = new Date(val);
                    if (!isNaN(date.getTime())) {
                        newRow[key] = date.toISOString().split('T')[0];
                    }
                }

                // 2. Currency Normalization
                if (lowerKey.includes('amount') || lowerKey.includes('balance') || lowerKey.includes('total')) {
                    // Handle ($1,234.56) -> -1234.56
                    let clean = val.replace(/[$,]/g, '');
                    if (clean.startsWith('(') && clean.endsWith(')')) {
                        clean = '-' + clean.substring(1, clean.length - 1);
                    }
                    newRow[key] = clean;
                }
            });
            return newRow;
        })
    };
}

/**
 * Export to CSV/Excel
 */
export function downloadAsExcel(data: TableData, filename: string = "converted_pdf.xlsx", format: 'xlsx' | 'csv' = 'xlsx') {
    const worksheet = utils.json_to_sheet(data.rows);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");

    if (format === 'csv') {
        const csv = utils.sheet_to_csv(worksheet);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename.replace('.xlsx', '.csv');
        link.click();
    } else {
        const buffer = write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

/**
 * Generate QBO (OFX) format
 */
export function generateQBO(data: TableData, bankName: string = "PDFCA Bank"): string {
    const now = new Date().toISOString().replace(/[-:T]/g, '').split('.')[0] + "[0:GMT]";

    let ofx = `OFXHEADER:100
DATA:OFXSGML
VERSION:102
SECURITY:NONE
ENCODING:USASCII
CHARSET:1252
COMPRESSION:NONE
OLDFILEUID:NONE
NEWFILEUID:NONE

<OFX>
<SIGNONMSGSRSV1>
<SONRS>
<STATUS><CODE>0</CODE><SEVERITY>INFO</SEVERITY></STATUS>
<DTSERVER>${now}</DTSERVER>
<LANGUAGE>ENG</LANGUAGE>
<FI><ORG>${bankName}</ORG><FID>3000</FID></FI>
<INTU.BID>3000</INTU.BID>
</SONRS>
</SIGNONMSGSRSV1>
<BANKMSGSRSV1>
<STMTTRNRS>
<TRNUID>1</TRNUID>
<STATUS><CODE>0</CODE><SEVERITY>INFO</SEVERITY></STATUS>
<STMTRS>
<CURDEF>CAD</CURDEF>
<BANKACCTFROM>
<BANKID>999999999</BANKID>
<ACCTID>123456789</ACCTID>
<ACCTTYPE>CHECKING</ACCTTYPE>
</BANKACCTFROM>
<BANKTRANLIST>
<DTSTART>${now}</DTSTART>
<DTEND>${now}</DTEND>
`;

    data.rows.forEach((row, i) => {
        // Map columns dynamically or use common names
        const date = row['Date'] || row['date'] || "";
        const amt = row['Amount'] || row['amount'] || "0";
        const memo = Object.values(row).join(' ').substring(0, 255);
        const name = (row['Description'] || row['desc'] || row['Payee'] || "Transaction").substring(0, 32);
        const fitid = `${date.replace(/-/g, '')}${amt.replace(/./g, '')}${i}`;

        ofx += `<STMTTRN>
<TRNTYPE>OTHER</TRNTYPE>
<DTPOSTED>${date.replace(/-/g, '')}120000[0:GMT]</DTPOSTED>
<TRNAMT>${amt}</TRNAMT>
<FITID>${fitid}</FITID>
<NAME>${name}</NAME>
<MEMO>${memo}</MEMO>
</STMTTRN>
`;
    });

    ofx += `</BANKTRANLIST>
<LEDGERBAL>
<BALAMT>0.00</BALAMT>
<DTASOF>${now}</DTASOF>
</LEDGERBAL>
</STMTRS>
</STMTTRNRS>
</BANKMSGSRSV1>
</OFX>`;

    return ofx;
}
