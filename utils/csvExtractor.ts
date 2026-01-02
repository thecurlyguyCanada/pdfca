import { utils, write } from 'xlsx';

export interface ExtractedRow {
    [key: string]: string;
}

export interface TableData {
    headers: string[];
    rows: ExtractedRow[];
    confidence: number;
}

// Reuse worker instance to avoid spawn overhead
let worker: Worker | null = null;

export function extractTableFromPdf(file: File, onProgress?: (p: number) => void): Promise<TableData> {
    return new Promise((resolve, reject) => {
        if (!worker) {
            worker = new Worker(new URL('./pdfProcessing.worker.ts', import.meta.url));
        }

        const handleMessage = (e: MessageEvent) => {
            const { type, data, value, error } = e.data;
            if (type === 'progress') {
                onProgress?.(value);
            } else if (type === 'complete') {
                worker?.removeEventListener('message', handleMessage);
                resolve(data);
            } else if (type === 'error') {
                worker?.removeEventListener('message', handleMessage);
                reject(new Error(error));
            }
        };

        worker.addEventListener('message', handleMessage);

        file.arrayBuffer().then(buffer => {
            worker?.postMessage({
                fileBuffer: buffer,
                strategy: 'spatial'
            }, [buffer]); // Transferable
        });
    });
}

/**
 * Smart Multiline Merger
 * Merges rows where the second line is a continuation of the first (Descriptions)
 */
export function mergeMultilineRows(data: TableData): TableData {
    if (data.rows.length < 2) return data;

    const mergedRows: ExtractedRow[] = [];
    let pivot = { ...data.rows[0] };

    const rows = data.rows;
    const len = rows.length;

    for (let i = 1; i < len; i++) {
        const current = rows[i];

        // Heuristic: If current row has few columns populated and they are "texty" columns
        // while key columns (Date, Amount) are empty, it's likely a continuation.
        const keys = Object.keys(current);
        let populatedKey = null;
        let populatedCount = 0;

        for (const k of keys) {
            if (current[k].trim() !== "") {
                populatedCount++;
                populatedKey = k;
            }
        }

        const isContinuation = populatedCount === 1 && populatedKey &&
            (populatedKey.toLowerCase().includes('desc') ||
                populatedKey.toLowerCase().includes('memo') ||
                populatedKey.toLowerCase().includes('payee'));

        if (isContinuation && populatedKey) {
            pivot[populatedKey] = (pivot[populatedKey] + " " + current[populatedKey]).trim();
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
    // Process in place to avoid cloning if possible, but map is safer for React state immutability
    const newRows = data.rows.map(row => {
        const newRow = { ...row };
        const keys = Object.keys(newRow);

        for (const key of keys) {
            const val = newRow[key].trim();
            if (!val) continue;

            const lowerKey = key.toLowerCase();

            // 1. Date Normalization (Generic)
            if (lowerKey.includes('date')) {
                const date = new Date(val);
                if (!isNaN(date.getTime())) {
                    // Use local time components to avoid UTC off-by-one errors
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    newRow[key] = `${year}-${month}-${day}`;
                }
            }

            // 2. Currency Normalization
            if (lowerKey.includes('amount') || lowerKey.includes('balance') || lowerKey.includes('total')) {
                let clean = val.replace(/[$,]/g, '');
                if (clean.startsWith('(') && clean.endsWith(')')) {
                    clean = '-' + clean.substring(1, clean.length - 1);
                }
                newRow[key] = clean;
            }
        }
        return newRow;
    });

    return { ...data, rows: newRows };
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
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename.replace('.xlsx', '.csv');
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
    } else {
        const buffer = write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
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
        const fitid = `${date.replace(/-/g, '')}${amt.replace(/\./g, '')}${i}`;

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
