
import { InvoiceData } from './types';

// Regex Patterns
const PATTERNS = {
    // Invoice ID: Keywords "Invoice" "Bill", "No", "Num", "#" followed by ID
    // Enhanced to handle more variations and formats
    id: /(?:Invoice|Bill|Rechnung|Facture|Receipt|Order)\s*(?:No\.?|Num(?:ber)?|#|ID|Number|Numéro|Nr\.?)?\s*[:.\-]?\s*([A-Za-z0-9\-\/]+)/i,

    // Date: YYYY-MM-DD, DD/MM/YYYY, MM/DD/YYYY, or "Oct 24, 2024"
    // Handles . - / separators with better word boundaries
    date: /\b(\d{4}[-.]\d{2}[-.]\d{2}|\d{1,2}[./-]\d{1,2}[./-]\d{2,4})\b/,

    // Total: "Total", "Amount Due", "Grand Total" followed by currency-like number
    // Enhanced to handle more variations including "incl. VAT", "excl. VAT"
    total: /(?:Total|Amount|Balance|Montant|Sum|Net|Grand Total|Gross Amount|Invoice Amount)\s*(?:Due|TTC|HT|incl\.?\s*VAT|excl\.?\s*VAT)?\s*[:.]?\s*(?:[$€£¥]\s*)?(\d{1,3}(?:[.,\s]\d{3})*(?:[.,]\d{2}))/i,

    // Currency Symbols - expanded to include more currencies
    currency: /[$€£¥₹₽]/,

    // Vendor/Company Name Pattern: Look for company type indicators
    companyIndicators: /\b(GMBH|GmbH|Inc\.?|LLC|Ltd\.?|Limited|Corp\.?|Corporation|AG|SA|SAS|SRL|BV|NV|Pty\.?\s*Ltd\.?|Co\.?\s*Ltd\.?)\b/i,

    // VAT/Tax Number - helps identify vendor section
    vatNumber: /(?:VAT|Tax|TVA|USt|MwSt)[\s\-]?(?:No\.?|ID|Number|Nr\.?)?\s*[:.]?\s*([A-Z]{2}\s*\d[\d\s]{7,})/i,

    // Common noise patterns to skip
    noisePhrases: /^(?:Page|Seite|Invoice|Bill|Receipt|Date|Customer|Terms|Payment|Bank|Account|IBAN|BIC|Swift)\b/i
};

/**
 * Helper function to clean and normalize text while preserving structure
 */
const preprocessText = (text: string): { cleanText: string; lines: string[] } => {
    // Split into lines first to preserve structure
    const lines = text
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);

    // Create a single-line version for pattern matching
    const cleanText = text.replace(/\s+/g, ' ').trim();

    return { cleanText, lines };
};

/**
 * Helper function to find the best vendor name from text lines
 */
const extractVendorName = (lines: string[], cleanText: string): string | undefined => {
    // Strategy 1: Look for lines with company indicators (GMBH, Inc., Ltd., etc.)
    for (const line of lines) {
        if (PATTERNS.companyIndicators.test(line)) {
            // Found a line with company indicator
            // Make sure it's not a noise line
            if (!PATTERNS.noisePhrases.test(line) &&
                !PATTERNS.date.test(line) &&
                line.length > 5 && line.length < 150) {
                return line;
            }
        }
    }

    // Strategy 2: Look in the first 10 lines for capitalized company names
    // Usually vendor info is at the top of the invoice
    const topLines = lines.slice(0, 10);
    for (const line of topLines) {
        // Skip lines that are clearly not vendor names
        if (PATTERNS.noisePhrases.test(line) ||
            PATTERNS.date.test(line) ||
            PATTERNS.id.test(line) ||
            line.match(/^\d+$/) || // Just numbers
            line.length < 3 ||
            line.length > 150) {
            continue;
        }

        // Look for lines with mostly uppercase or title case (typical for company names)
        const uppercaseRatio = (line.match(/[A-Z]/g) || []).length / line.length;
        if (uppercaseRatio > 0.3) { // At least 30% uppercase
            return line;
        }
    }

    // Strategy 3: Look for VAT number and take the line before it
    const vatMatch = cleanText.match(PATTERNS.vatNumber);
    if (vatMatch) {
        const vatIndex = cleanText.indexOf(vatMatch[0]);
        // Find the line before VAT in original lines
        let currentIndex = 0;
        for (let i = 0; i < lines.length - 1; i++) {
            currentIndex += lines[i].length;
            if (currentIndex > vatIndex) {
                // Previous line might be the vendor
                const candidateLine = lines[i - 1];
                if (candidateLine &&
                    candidateLine.length > 3 &&
                    candidateLine.length < 150 &&
                    !PATTERNS.noisePhrases.test(candidateLine)) {
                    return candidateLine;
                }
                break;
            }
        }
    }

    // Strategy 4: Fallback - first non-noise line in top section
    for (const line of topLines) {
        if (!PATTERNS.noisePhrases.test(line) &&
            !PATTERNS.date.test(line) &&
            !PATTERNS.id.test(line) &&
            line.length > 5 &&
            line.length < 150) {
            return line;
        }
    }

    return undefined;
};

export const parseInvoiceText = (text: string): InvoiceData => {
    const data: InvoiceData = { confidence: 0 };

    if (!text || text.trim().length === 0) {
        return data;
    }

    // Preprocess text and extract lines
    const { cleanText, lines } = preprocessText(text);

    // ID Parsing - Try to find the most specific invoice ID
    const idMatch = cleanText.match(PATTERNS.id);
    if (idMatch && idMatch[1]) {
        data.id = idMatch[1].trim();
        data.confidence += 0.25; // +25% confidence
    }

    // Date Parsing - Find the most relevant date (usually invoice date, not due date)
    const dateMatches = cleanText.matchAll(new RegExp(PATTERNS.date, 'g'));
    const dates = Array.from(dateMatches);
    if (dates.length > 0) {
        // Use the first date found (usually the invoice date)
        data.date = dates[0][1];
        data.confidence += 0.25; // +25% confidence
    }

    // Total Parsing - Find all matches and use the largest amount (likely the grand total)
    const totalMatches = cleanText.matchAll(new RegExp(PATTERNS.total, 'g'));
    const amounts: number[] = [];

    for (const match of totalMatches) {
        if (match[1]) {
            const normalized = normalizeAmount(match[1]);
            if (!isNaN(normalized)) {
                amounts.push(normalized);
            }
        }
    }

    if (amounts.length > 0) {
        // Take the largest amount as it's usually the grand total
        data.total = Math.max(...amounts);
        data.confidence += 0.25; // +25% confidence
    }

    // Detect Currency - Look for currency symbols throughout the document
    const currencyMatch = cleanText.match(PATTERNS.currency);
    if (currencyMatch) {
        data.currency = currencyMatch[0];
    } else {
        // Try to infer from country/language context
        if (cleanText.match(/\b(EUR|Euro|€)\b/i)) {
            data.currency = '€';
        } else if (cleanText.match(/\b(GBP|Pound|£)\b/i)) {
            data.currency = '£';
        } else {
            data.currency = '$'; // Default to USD
        }
    }

    // Vendor Detection - Use our enhanced extraction function
    const vendor = extractVendorName(lines, cleanText);
    if (vendor) {
        data.vendor = vendor;
        data.confidence += 0.25; // +25% confidence
    }

    // Cap confidence at 100%
    data.confidence = Math.min(data.confidence, 1.0);

    return data;
};

/**
 * Helper function to normalize amount strings to numbers
 */
const normalizeAmount = (rawAmount: string): number => {
    let normalized = rawAmount.trim();

    // Remove any spaces
    normalized = normalized.replace(/\s+/g, '');

    // Handle different number formats
    if (normalized.includes(',') && normalized.includes('.')) {
        // Both separators present
        if (normalized.indexOf(',') < normalized.indexOf('.')) {
            // Format: 1,234.56 (US/UK format)
            normalized = normalized.replace(/,/g, '');
        } else {
            // Format: 1.234,56 (European format)
            normalized = normalized.replace(/\./g, '').replace(',', '.');
        }
    } else if (normalized.includes(',')) {
        // Only comma present
        // Check if it's likely a decimal separator (e.g., 12,34) or thousands (e.g., 1,234)
        const parts = normalized.split(',');
        if (parts.length === 2 && parts[1].length === 2) {
            // Likely decimal: 12,34
            normalized = normalized.replace(',', '.');
        } else {
            // Likely thousands: 1,234 or 1,234,567
            normalized = normalized.replace(/,/g, '');
        }
    }

    return parseFloat(normalized);
};
