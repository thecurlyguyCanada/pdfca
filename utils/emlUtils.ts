import { jsPDF } from 'jspdf';

export interface ParsedEmail {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    date: string;
    body: string;
    htmlBody?: string;
    attachments: EmailAttachment[];
}

export interface EmailAttachment {
    filename: string;
    contentType: string;
    size: number;
    data?: string; // base64 encoded
}

/**
 * Parse EML file content into structured email data
 */
export function parseEml(emlContent: string): ParsedEmail {
    const lines = emlContent.split(/\r?\n/);
    const headers: Record<string, string> = {};
    let bodyStartIndex = 0;
    let currentHeader = '';
    let currentValue = '';

    // Parse headers
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Empty line marks end of headers
        if (line === '' || line === '\r') {
            if (currentHeader) {
                headers[currentHeader.toLowerCase()] = currentValue.trim();
            }
            bodyStartIndex = i + 1;
            break;
        }

        // Continuation of previous header (starts with whitespace)
        if (line.startsWith(' ') || line.startsWith('\t')) {
            currentValue += ' ' + line.trim();
            continue;
        }

        // Save previous header
        if (currentHeader) {
            headers[currentHeader.toLowerCase()] = currentValue.trim();
        }

        // Parse new header
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            currentHeader = line.substring(0, colonIndex);
            currentValue = line.substring(colonIndex + 1).trim();
        }
    }

    // Get body content
    const bodyLines = lines.slice(bodyStartIndex);
    let body = '';
    let htmlBody: string | undefined;
    const attachments: EmailAttachment[] = [];

    const contentType = headers['content-type'] || 'text/plain';
    const boundary = extractBoundary(contentType);

    if (boundary) {
        // Multipart message
        const parts = parseMultipart(bodyLines.join('\n'), boundary);
        for (const part of parts) {
            const partContentType = part.headers['content-type'] || 'text/plain';
            const disposition = part.headers['content-disposition'] || '';

            if (disposition.includes('attachment') || (partContentType.startsWith('application/') && !partContentType.includes('text'))) {
                // Attachment
                const filename = extractFilename(disposition) || extractFilename(partContentType) || 'attachment';
                attachments.push({
                    filename,
                    contentType: partContentType.split(';')[0].trim(),
                    size: part.body.length,
                    data: part.body
                });
            } else if (partContentType.includes('text/html')) {
                htmlBody = decodeBody(part.body, part.headers['content-transfer-encoding']);
            } else if (partContentType.includes('text/plain')) {
                body = decodeBody(part.body, part.headers['content-transfer-encoding']);
            } else if (partContentType.includes('multipart/')) {
                // Nested multipart
                const nestedBoundary = extractBoundary(partContentType);
                if (nestedBoundary) {
                    const nestedParts = parseMultipart(part.body, nestedBoundary);
                    for (const nestedPart of nestedParts) {
                        const nestedContentType = nestedPart.headers['content-type'] || 'text/plain';
                        if (nestedContentType.includes('text/html')) {
                            htmlBody = decodeBody(nestedPart.body, nestedPart.headers['content-transfer-encoding']);
                        } else if (nestedContentType.includes('text/plain')) {
                            body = decodeBody(nestedPart.body, nestedPart.headers['content-transfer-encoding']);
                        }
                    }
                }
            }
        }
    } else {
        // Simple message
        body = decodeBody(bodyLines.join('\n'), headers['content-transfer-encoding']);
    }

    // If no plain text body but HTML exists, extract text from HTML
    if (!body && htmlBody) {
        body = stripHtml(htmlBody);
    }

    return {
        from: decodeHeader(headers['from'] || ''),
        to: decodeHeader(headers['to'] || ''),
        cc: headers['cc'] ? decodeHeader(headers['cc']) : undefined,
        bcc: headers['bcc'] ? decodeHeader(headers['bcc']) : undefined,
        subject: decodeHeader(headers['subject'] || '(No Subject)'),
        date: formatEmailDate(headers['date'] || ''),
        body: body.trim(),
        htmlBody,
        attachments
    };
}

function extractBoundary(contentType: string): string | null {
    const match = contentType.match(/boundary=["']?([^"';\s]+)["']?/i);
    return match ? match[1] : null;
}

function extractFilename(str: string): string | null {
    const match = str.match(/filename=["']?([^"';\s]+)["']?/i);
    return match ? match[1] : null;
}

interface MimePart {
    headers: Record<string, string>;
    body: string;
}

function parseMultipart(content: string, boundary: string): MimePart[] {
    const parts: MimePart[] = [];
    const boundaryMarker = '--' + boundary;
    const endMarker = boundaryMarker + '--';

    const sections = content.split(boundaryMarker);

    for (let i = 1; i < sections.length; i++) {
        let section = sections[i];
        if (section.startsWith('--')) continue; // End marker

        // Remove trailing end marker
        if (section.includes(endMarker)) {
            section = section.split(endMarker)[0];
        }

        const lines = section.split(/\r?\n/);
        const partHeaders: Record<string, string> = {};
        let bodyStart = 0;
        let currentHeader = '';
        let currentValue = '';

        // Skip leading empty line
        let startIdx = 0;
        if (lines[0] === '' || lines[0] === '\r') startIdx = 1;

        for (let j = startIdx; j < lines.length; j++) {
            const line = lines[j];
            if (line === '' || line === '\r') {
                if (currentHeader) {
                    partHeaders[currentHeader.toLowerCase()] = currentValue.trim();
                }
                bodyStart = j + 1;
                break;
            }
            if (line.startsWith(' ') || line.startsWith('\t')) {
                currentValue += ' ' + line.trim();
                continue;
            }
            if (currentHeader) {
                partHeaders[currentHeader.toLowerCase()] = currentValue.trim();
            }
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                currentHeader = line.substring(0, colonIndex);
                currentValue = line.substring(colonIndex + 1).trim();
            }
        }

        parts.push({
            headers: partHeaders,
            body: lines.slice(bodyStart).join('\n').trim()
        });
    }

    return parts;
}

function decodeBody(body: string, encoding?: string): string {
    if (!encoding) return body;

    encoding = encoding.toLowerCase().trim();

    if (encoding === 'base64') {
        try {
            return atob(body.replace(/\s/g, ''));
        } catch {
            return body;
        }
    }

    if (encoding === 'quoted-printable') {
        return decodeQuotedPrintable(body);
    }

    return body;
}

function decodeQuotedPrintable(str: string): string {
    return str
        .replace(/=\r?\n/g, '') // Soft line breaks
        .replace(/=([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function decodeHeader(header: string): string {
    // Decode RFC 2047 encoded words
    return header.replace(/=\?([^?]+)\?([BQbq])\?([^?]*)\?=/g, (_, charset, encoding, text) => {
        try {
            if (encoding.toUpperCase() === 'B') {
                return atob(text);
            } else if (encoding.toUpperCase() === 'Q') {
                return decodeQuotedPrintable(text.replace(/_/g, ' '));
            }
        } catch {
            return text;
        }
        return text;
    });
}

function formatEmailDate(dateStr: string): string {
    if (!dateStr) return 'Unknown Date';
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleString('en-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    } catch {
        return dateStr;
    }
}

function stripHtml(html: string): string {
    // Basic HTML stripping - remove tags and decode entities
    return html
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Convert parsed email to PDF
 */
export async function convertEmlToPdf(file: File): Promise<Blob> {
    const text = await file.text();
    const email = parseEml(text);

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let yPos = margin;
    const lineHeight = 6;

    // Helper to add text with word wrap
    const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        pdf.setTextColor(color[0], color[1], color[2]);

        const lines = pdf.splitTextToSize(text, contentWidth);
        for (const line of lines) {
            if (yPos > pageHeight - margin) {
                pdf.addPage();
                yPos = margin;
            }
            pdf.text(line, margin, yPos);
            yPos += lineHeight;
        }
    };

    const addHeaderRow = (label: string, value: string) => {
        if (!value) return;
        const labelWidth = 18;

        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(100, 100, 100);
        pdf.text(label + ':', margin, yPos);

        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(0, 0, 0);
        const valueLines = pdf.splitTextToSize(value, contentWidth - labelWidth);
        for (let i = 0; i < valueLines.length; i++) {
            if (yPos > pageHeight - margin) {
                pdf.addPage();
                yPos = margin;
            }
            pdf.text(valueLines[i], margin + labelWidth, yPos);
            if (i < valueLines.length - 1) yPos += lineHeight;
        }
        yPos += lineHeight;
    };

    // Title - Subject
    addText(email.subject, 16, true);
    yPos += 4;

    // Separator line
    pdf.setDrawColor(220, 38, 38); // canada-red
    pdf.setLineWidth(0.5);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 8;

    // Email headers
    addHeaderRow('From', email.from);
    addHeaderRow('To', email.to);
    if (email.cc) addHeaderRow('Cc', email.cc);
    addHeaderRow('Date', email.date);
    yPos += 4;

    // Another separator
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.2);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 8;

    // Body content
    addText(email.body || '(No content)', 11);

    // Attachments section
    if (email.attachments.length > 0) {
        yPos += 8;
        pdf.setDrawColor(200, 200, 200);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 8;

        addText('Attachments:', 12, true, [100, 100, 100]);
        yPos += 2;

        for (const attachment of email.attachments) {
            const sizeKb = (attachment.size / 1024).toFixed(1);
            addText(`• ${attachment.filename} (${sizeKb} KB)`, 10, false, [80, 80, 80]);
        }
    }

    // Footer
    yPos = pageHeight - 10;
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text(`Converted from EML by pdfcanada.ca • ${new Date().toLocaleDateString()}`, margin, yPos);

    return pdf.output('blob');
}
