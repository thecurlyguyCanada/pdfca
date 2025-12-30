
import { InvoiceData } from './types';

/**
 * Maps currency symbols/codes to ISO 4217 codes
 */
const mapCurrency = (rawCurrency?: string): string => {
    if (!rawCurrency) return 'USD'; // Default

    const normalized = rawCurrency.toUpperCase().trim();

    // Symbols
    if (normalized.includes('$')) return 'USD';
    if (normalized.includes('€') || normalized.includes('EUR')) return 'EUR';
    if (normalized.includes('£') || normalized.includes('GBP')) return 'GBP';
    if (normalized.includes('¥') || normalized.includes('JPY')) return 'JPY';
    if (normalized.includes('CAD') || normalized.includes('C$')) return 'CAD';
    if (normalized.includes('AUD') || normalized.includes('RP')) return 'AUD';

    // Validation for 3-letter codes
    if (/^[A-Z]{3}$/.test(normalized)) {
        return normalized;
    }

    return 'USD'; // Fallback
};

/**
 * Escapes special characters for XML
 */
const escapeXml = (unsafe?: string | number): string => {
    if (unsafe === undefined || unsafe === null) return '';
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};

/**
 * Formats date to YYYY-MM-DD
 */
const formatDate = (dateStr?: string): string => {
    if (!dateStr) {
        return new Date().toISOString().split('T')[0];
    }
    // Try to normalize to YYYY-MM-DD
    // If we assume the input from invoiceParser is somewhat raw
    // This part assumes standard formats or pass-through if already standard
    return escapeXml(dateStr);
};

/**
 * Generates random UUID
 */
const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

/**
 * Generates UBL 2.1 XML string from Invoice Data
 */
export const generateUBL = (data: InvoiceData): string => {
    const currency = mapCurrency(data.currency);
    const invoiceId = escapeXml(data.id || 'INV-' + Date.now());
    const issueDate = formatDate(data.date);
    const dueDate = formatDate(data.dueDate);
    const vendorName = escapeXml(data.vendor || 'Unknown Vendor');

    // Calculate tax exclusive amount if not present, assuming simple logic or fallback
    const taxAmount = data.tax || 0;
    const totalAmount = data.total || 0;
    const subtotalAmount = data.subtotal || (totalAmount - taxAmount);

    const lineItemsXml = data.lineItems && data.lineItems.length > 0
        ? data.lineItems.map((item, index) => `
    <cac:InvoiceLine>
        <cbc:ID>${index + 1}</cbc:ID>
        <cbc:InvoicedQuantity unitCode="EA">${item.quantity || 1}</cbc:InvoicedQuantity>
        <cbc:LineExtensionAmount currencyID="${currency}">${((item.amount || 0)).toFixed(2)}</cbc:LineExtensionAmount>
        <cac:Item>
            <cbc:Name>${escapeXml(item.description || 'Item')}</cbc:Name>
        </cac:Item>
        <cac:Price>
            <cbc:PriceAmount currencyID="${currency}">${((item.unitPrice || 0)).toFixed(2)}</cbc:PriceAmount>
        </cac:Price>
    </cac:InvoiceLine>`).join('')
        : `
    <cac:InvoiceLine>
        <cbc:ID>1</cbc:ID>
        <cbc:InvoicedQuantity unitCode="EA">1</cbc:InvoicedQuantity>
        <cbc:LineExtensionAmount currencyID="${currency}">${subtotalAmount.toFixed(2)}</cbc:LineExtensionAmount>
        <cac:Item>
            <cbc:Name>Invoice Services</cbc:Name>
        </cac:Item>
        <cac:Price>
            <cbc:PriceAmount currencyID="${currency}">${subtotalAmount.toFixed(2)}</cbc:PriceAmount>
        </cac:Price>
    </cac:InvoiceLine>`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
    xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
    xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
    <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
    <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0</cbc:CustomizationID>
    <cbc:ProfileID>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</cbc:ProfileID>
    <cbc:ID>${invoiceId}</cbc:ID>
    <cbc:IssueDate>${issueDate}</cbc:IssueDate>
    <cbc:DueDate>${dueDate}</cbc:DueDate>
    <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
    <cbc:DocumentCurrencyCode>${currency}</cbc:DocumentCurrencyCode>
    
    <cac:AccountingSupplierParty>
        <cac:Party>
            <cac:PartyName>
                <cbc:Name>${vendorName}</cbc:Name>
            </cac:PartyName>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>${vendorName}</cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingSupplierParty>
    
    <cac:AccountingCustomerParty>
        <cac:Party>
            <cac:PartyName>
                <cbc:Name>Unknown Customer</cbc:Name>
            </cac:PartyName>
        </cac:Party>
    </cac:AccountingCustomerParty>

    <cac:TaxTotal>
        <cbc:TaxAmount currencyID="${currency}">${taxAmount.toFixed(2)}</cbc:TaxAmount>
        <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="${currency}">${subtotalAmount.toFixed(2)}</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="${currency}">${taxAmount.toFixed(2)}</cbc:TaxAmount>
            <cac:TaxCategory>
                <cbc:ID>S</cbc:ID>
                <cbc:Percent>0</cbc:Percent>
                <cac:TaxScheme>
                    <cbc:ID>VAT</cbc:ID>
                </cac:TaxScheme>
            </cac:TaxCategory>
        </cac:TaxSubtotal>
    </cac:TaxTotal>

    <cac:LegalMonetaryTotal>
        <cbc:LineExtensionAmount currencyID="${currency}">${subtotalAmount.toFixed(2)}</cbc:LineExtensionAmount>
        <cbc:TaxExclusiveAmount currencyID="${currency}">${subtotalAmount.toFixed(2)}</cbc:TaxExclusiveAmount>
        <cbc:TaxInclusiveAmount currencyID="${currency}">${totalAmount.toFixed(2)}</cbc:TaxInclusiveAmount>
        <cbc:PayableAmount currencyID="${currency}">${totalAmount.toFixed(2)}</cbc:PayableAmount>
    </cac:LegalMonetaryTotal>
${lineItemsXml}
</Invoice>`;
};
