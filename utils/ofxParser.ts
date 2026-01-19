/**
 * OFX Parser - Client-side Open Financial Exchange file parser
 * Supports both SGML (OFX 1.x) and XML (OFX 2.x) formats
 */

export interface OFXTransaction {
    date: string;           // ISO format YYYY-MM-DD
    amount: number;         // Positive for credits, negative for debits
    type: 'CREDIT' | 'DEBIT' | 'OTHER';
    name: string;           // Payee/Payer name
    memo: string;
    fitId: string;          // Financial Institution Transaction ID
    checkNum?: string;
    refNum?: string;
}

export interface OFXAccount {
    bankId: string;
    accountId: string;
    accountType: 'CHECKING' | 'SAVINGS' | 'CREDITCARD' | 'OTHER';
    currency: string;
    transactions: OFXTransaction[];
    balance?: number;
    balanceDate?: string;
}

export interface OFXData {
    accounts: OFXAccount[];
    serverDate?: string;
    language?: string;
}

/**
 * Parse OFX date format (YYYYMMDDHHMMSS) to ISO date
 */
function parseOFXDate(dateStr: string): string {
    if (!dateStr) return '';
    // Remove timezone info if present (e.g., [GMT-3:BRT])
    const cleaned = dateStr.replace(/\[.*\]/, '').trim();
    if (cleaned.length >= 8) {
        // Validate format is YYYYMMDD (8 digits)
        if (!/^\d{8}/.test(cleaned)) return dateStr;

        const year = cleaned.substring(0, 4);
        const month = cleaned.substring(4, 6);
        const day = cleaned.substring(6, 8);

        // Basic validation: year 1900-2100, month 01-12, day 01-31
        const y = parseInt(year, 10);
        const m = parseInt(month, 10);
        const d = parseInt(day, 10);

        if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) {
            return dateStr;
        }

        return `${year}-${month}-${day}`;
    }
    return dateStr;
}

/**
 * Extract value between SGML tags (OFX 1.x format)
 */
function extractSGMLValue(content: string, tag: string): string {
    const regex = new RegExp(`<${tag}>([^<\\n\\r]*)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

/**
 * Extract value between XML tags (OFX 2.x format)
 */
function extractXMLValue(content: string, tag: string): string {
    const regex = new RegExp(`<${tag}>([^<]*)</${tag}>`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

/**
 * Detect if OFX is XML-based (2.x) or SGML-based (1.x)
 */
function isXMLFormat(content: string): boolean {
    return content.includes('<?xml') || content.includes('<?OFX');
}

/**
 * Parse a single STMTTRN (statement transaction) block
 */
function parseTransaction(block: string, isXML: boolean): OFXTransaction {
    const extract = isXML ? extractXMLValue : extractSGMLValue;

    const trnType = extract(block, 'TRNTYPE').toUpperCase();
    const amount = parseFloat(extract(block, 'TRNAMT')) || 0;

    let type: 'CREDIT' | 'DEBIT' | 'OTHER' = 'OTHER';
    if (trnType === 'CREDIT' || trnType === 'DEP' || trnType === 'INT' || amount > 0) {
        type = 'CREDIT';
    } else if (trnType === 'DEBIT' || trnType === 'CHECK' || trnType === 'PAYMENT' || amount < 0) {
        type = 'DEBIT';
    }

    return {
        date: parseOFXDate(extract(block, 'DTPOSTED')),
        amount: amount,
        type: type,
        name: extract(block, 'NAME') || extract(block, 'PAYEE') || extract(block, 'MEMO') || 'Unknown',
        memo: extract(block, 'MEMO') || '',
        fitId: extract(block, 'FITID') || '',
        checkNum: extract(block, 'CHECKNUM') || undefined,
        refNum: extract(block, 'REFNUM') || undefined,
    };
}

/**
 * Parse bank account statement (STMTRS or CCSTMTRS)
 */
function parseAccountStatement(block: string, isXML: boolean, type: 'bank' | 'creditcard'): OFXAccount | null {
    const extract = isXML ? extractXMLValue : extractSGMLValue;

    // Extract account info
    let bankId = '';
    let accountId = '';
    let accountType: OFXAccount['accountType'] = 'OTHER';

    if (type === 'bank') {
        bankId = extract(block, 'BANKID');
        accountId = extract(block, 'ACCTID');
        const acctType = extract(block, 'ACCTTYPE').toUpperCase();
        if (acctType === 'CHECKING') accountType = 'CHECKING';
        else if (acctType === 'SAVINGS') accountType = 'SAVINGS';
    } else {
        accountId = extract(block, 'ACCTID');
        accountType = 'CREDITCARD';
    }

    if (!accountId) return null;

    // Extract currency
    const currency = extract(block, 'CURDEF') || 'USD';

    // Extract balance
    const balanceStr = extract(block, 'BALAMT');
    const balance = balanceStr && !isNaN(parseFloat(balanceStr)) ? parseFloat(balanceStr) : undefined;
    const balanceDate = parseOFXDate(extract(block, 'DTASOF'));

    // Extract transactions
    const transactions: OFXTransaction[] = [];
    const trnRegex = /<STMTTRN>([\s\S]*?)(?:<\/STMTTRN>|(?=<STMTTRN>|<\/BANKTRANLIST>|<\/CCSTMTTRNRS>|$))/gi;
    let match;

    while ((match = trnRegex.exec(block)) !== null) {
        const trn = parseTransaction(match[1], isXML);
        if (trn.fitId || trn.date) {
            transactions.push(trn);
        }
    }

    return {
        bankId,
        accountId,
        accountType,
        currency,
        transactions,
        balance,
        balanceDate,
    };
}

/**
 * Main parser function - parses OFX file content
 */
export function parseOFX(content: string): OFXData {
    const isXML = isXMLFormat(content);
    const accounts: OFXAccount[] = [];

    // Parse bank statements (STMTRS)
    const bankRegex = /<STMTRS>([\s\S]*?)(?:<\/STMTRS>|(?=<STMTRS>|<CCSTMTRS>|$))/gi;
    let match;

    while ((match = bankRegex.exec(content)) !== null) {
        const account = parseAccountStatement(match[1], isXML, 'bank');
        if (account) accounts.push(account);
    }

    // Parse credit card statements (CCSTMTRS)
    const ccRegex = /<CCSTMTRS>([\s\S]*?)(?:<\/CCSTMTRS>|(?=<CCSTMTRS>|<STMTRS>|$))/gi;

    while ((match = ccRegex.exec(content)) !== null) {
        const account = parseAccountStatement(match[1], isXML, 'creditcard');
        if (account) accounts.push(account);
    }

    return {
        accounts,
        serverDate: parseOFXDate(extractSGMLValue(content, 'DTSERVER')),
        language: extractSGMLValue(content, 'LANGUAGE') || 'ENG',
    };
}

/**
 * Calculate account statistics
 */
export function calculateStats(transactions: OFXTransaction[]) {
    let totalCredits = 0;
    let totalDebits = 0;
    let minDate = '';
    let maxDate = '';

    for (const trn of transactions) {
        if (trn.amount > 0) {
            totalCredits += trn.amount;
        } else {
            totalDebits += Math.abs(trn.amount);
        }

        if (!minDate || trn.date < minDate) minDate = trn.date;
        if (!maxDate || trn.date > maxDate) maxDate = trn.date;
    }

    return {
        totalCredits,
        totalDebits,
        netChange: totalCredits - totalDebits,
        transactionCount: transactions.length,
        dateRange: { start: minDate, end: maxDate },
    };
}

/**
 * Convert transactions to CSV string
 */
export function transactionsToCSV(transactions: OFXTransaction[]): string {
    const headers = ['Date', 'Description', 'Amount', 'Type', 'Memo', 'Reference'];
    const rows = transactions.map(t => [
        t.date,
        `"${t.name.replace(/"/g, '""')}"`,
        t.amount.toFixed(2),
        t.type,
        `"${t.memo.replace(/"/g, '""')}"`,
        t.fitId
    ]);

    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

/**
 * Generate QBO (QuickBooks) format
 */
export function transactionsToQBO(account: OFXAccount): string {
    const now = new Date();
    const dateStr = now.toISOString().replace(/[-:T]/g, '').substring(0, 14);

    let qbo = `OFXHEADER:100
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
<STATUS><CODE>0<SEVERITY>INFO</STATUS>
<DTSERVER>${dateStr}
<LANGUAGE>ENG
</SONRS>
</SIGNONMSGSRSV1>
<BANKMSGSRSV1>
<STMTTRNRS>
<TRNUID>1
<STATUS><CODE>0<SEVERITY>INFO</STATUS>
<STMTRS>
<CURDEF>${account.currency}
<BANKACCTFROM>
<BANKID>${account.bankId || '000000000'}
<ACCTID>${account.accountId}
<ACCTTYPE>${account.accountType}
</BANKACCTFROM>
<BANKTRANLIST>
<DTSTART>${account.transactions.length > 0 ? (account.transactions[0]?.date?.replace(/-/g, '') || dateStr) : dateStr}
<DTEND>${account.transactions.length > 0 ? (account.transactions[account.transactions.length - 1]?.date?.replace(/-/g, '') || dateStr) : dateStr}
`;

    for (const t of account.transactions) {
        qbo += `<STMTTRN>
<TRNTYPE>${t.type}
<DTPOSTED>${t.date.replace(/-/g, '')}
<TRNAMT>${t.amount.toFixed(2)}
<FITID>${t.fitId}
<NAME>${t.name}
${t.memo ? `<MEMO>${t.memo}` : ''}
</STMTTRN>
`;
    }

    qbo += `</BANKTRANLIST>
${account.balance !== undefined ? `<LEDGERBAL><BALAMT>${account.balance.toFixed(2)}<DTASOF>${account.balanceDate?.replace(/-/g, '') || dateStr}</LEDGERBAL>` : ''}
</STMTRS>
</STMTTRNRS>
</BANKMSGSRSV1>
</OFX>`;

    return qbo;
}

/**
 * Generate QIF (Quicken Interchange Format)
 */
export function transactionsToQIF(transactions: OFXTransaction[], accountType: string = 'Bank'): string {
    let qif = `!Type:${accountType}\n`;

    for (const t of transactions) {
        // Skip transactions without dates or invalid format
        if (!t.date || !t.date.includes('-')) {
            continue;
        }
        // Date comes in YYYY-MM-DD format, convert to MM/DD/YYYY for QIF
        const dateParts = t.date.split('-');
        if (dateParts.length !== 3) continue;
        const [year, month, day] = dateParts;
        qif += `D${month}/${day}/${year}\n`;
        qif += `T${t.amount.toFixed(2)}\n`;
        qif += `P${t.name}\n`;
        if (t.memo) qif += `M${t.memo}\n`;
        if (t.checkNum) qif += `N${t.checkNum}\n`;
        qif += `^\n`;
    }

    return qif;
}
