
import { InvoiceData } from './types';

// Regex Patterns
const PATTERNS = {
    // Invoice ID: Keywords "Invoice" "Bill", "No", "Num", "#" followed by ID
    // Updated pattern to be more flexible with separators
    id: /(?:Invoice|Bill|Rechnung|Facture)\s*(?:No\.?|Num|#|ID|Number|Numéro)\s*[:.]?\s*([A-Za-z0-9\-\/]+)/i,

    // Date: YYYY-MM-DD, DD/MM/YYYY, MM/DD/YYYY, or "Oct 24, 2024"
    // Handles . - / separators
    date: /\b(\d{4}[-.]\d{2}[-.]\d{2}|\d{1,2}[./-]\d{1,2}[./-]\d{2,4})\b/,

    // Total: "Total", "Amount Due", "Grand Total" followed by currency-like number
    // Looks for number with 2 decimal places near keywords
    total: /(?:Total|Amount|Balance|Montant|Net|Grand Total)\s*(?:Due|TTC|HT)?\s*[:]?\s*(?:[$€£]\s*)?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/i,

    // Currency Symbols
    currency: /[$€£¥]/
};

export const parseInvoiceText = (text: string): InvoiceData => {
    const data: InvoiceData = { confidence: 0 };

    if (!text || text.trim().length === 0) {
        return data;
    }

    // Normalize text (remove excess whitespace) but keep newlines for context
    const cleanText = text.replace(/\s+/g, ' ');

    // ID Parsing
    const idMatch = cleanText.match(PATTERNS.id);
    if (idMatch && idMatch[1]) {
        data.id = idMatch[1];
        data.confidence += 0.3; // +30% confidence
    }

    // Date Parsing
    const dateMatch = cleanText.match(PATTERNS.date);
    if (dateMatch && dateMatch[1]) {
        data.date = dateMatch[1];
        data.confidence += 0.3; // +30% confidence
    }

    // Total Parsing
    // We try to find the LAST occurrence of a total-like pattern, as "Grand Total" is usually at the bottom
    // However, regex match usually finds first. Let's try to search the whole string.
    // A simple approach is finding matches and taking the largest one associated with a generic "total" keyword
    const totalMatch = cleanText.match(PATTERNS.total);
    if (totalMatch && totalMatch[1]) {
        // Normalize number (remove commas/spaces, ensure dot decimal)
        // Example: "1,234.56" -> "1234.56", "1.234,56" -> "1234.56" (Need heuristics or locale)
        // For now, assume dot decimal if both exist, or standard international format
        let rawTotal = totalMatch[1];

        // Simple heuristic: if it has ',' and '.'
        if (rawTotal.includes(',') && rawTotal.includes('.')) {
            if (rawTotal.indexOf(',') < rawTotal.indexOf('.')) {
                // 1,234.56 -> remove comma
                rawTotal = rawTotal.replace(/,/g, '');
            } else {
                // 1.234,56 -> remove dot, replace comma with dot
                rawTotal = rawTotal.replace(/\./g, '').replace(',', '.');
            }
        } else if (rawTotal.includes(',')) {
            // 1,234 or 12,34
            // If 2 decimals, likely comma is decimal separator? Or thousands?
            // Hard to say. Let's assume EN-US default for now (comma = thousand) unless it looks like small number
            // This is a known hard problem without locale.
            rawTotal = rawTotal.replace(/,/g, '');
        }

        const parsedAmount = parseFloat(rawTotal);
        if (!isNaN(parsedAmount)) {
            data.total = parsedAmount;
            data.confidence += 0.3; // +30% confidence
        }
    }

    // Detect Currency
    const currencyMatch = cleanText.match(PATTERNS.currency);
    if (currencyMatch) {
        data.currency = currencyMatch[0];
    } else {
        data.currency = '$'; // Default
    }

    // Vendor Heuristic: First non-date, non-id line (simplified)
    // In real implementation, splitting by newline is better than cleanText
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 3);
    if (lines.length > 0) {
        // Skip lines that look like dates or IDs
        for (const line of lines) {
            if (!line.match(PATTERNS.date) && !line.match(PATTERNS.id) && !line.includes('Invoice')) {
                data.vendor = line;
                data.confidence += 0.1;
                break;
            }
        }
    }

    // Cap confidence
    data.confidence = Math.min(data.confidence, 1.0);

    return data;
};
