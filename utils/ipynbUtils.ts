
import { jsPDF } from 'jspdf';

/**
 * Parses .ipynb JSON content
 */
export const parseIpynb = (content: string) => {
    try {
        const notebook = JSON.parse(content);
        return notebook.cells || [];
    } catch (e) {
        console.error('Failed to parse IPYNB:', e);
        return [];
    }
};

/**
 * Converts IPYNB cells to PDF blob
 * Using a simplified approach for the initial implementation:
 * 1. Create a jsPDF instance
 * 2. Iterate through cells
 * 3. Render Markdown as text
 * 4. Render Code as indented text
 * 5. Render Output text and images
 */
export const convertIpynbToPdf = async (file: File): Promise<Blob> => {
    const content = await file.text();
    const cells = parseIpynb(content);

    const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;

    const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
            return true;
        }
        return false;
    };

    /**
     * Renders a block of text with basic Markdown formatting (Bold, Italic)
     * Handles splitting text into lines and checking for page breaks.
     */
    const renderStyledText = (text: string, xUrl: number, fontSize: number, fontName: string = 'helvetica', color: number[] = [0, 0, 0]) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);

        const lineHeight = (fontSize * 0.3527) * 1.3;

        // Tokenize by style delimiters
        // Bold: **text** or __text__
        // Italic: *text* or _text_
        // Code: `text`

        // Simple line splitting first
        const words = text.split(/(\s+)/);
        let currentLine = "";
        let currentLineWidth = 0;

        const printLine = (line: string) => {
            checkPageBreak(lineHeight);

            // Basic regex-based formatting for the whole line (simplified)
            // Ideally we would parse tokens and render them one by one, but for this simplified version:
            // We will strip markdown chars and use normal font for now, 
            // OR checks for fully bold lines.
            // A full rich-text renderer token-by-token is very complex without a library.
            // We will implement a simplified version:
            // 1. Check if line starts with ### (Header) -> handled by caller
            // 2. Bold/Italic rendering for inline text is tricky in standard jsPDF without HTML.
            // Strategy: Render plain text but clean up the markers.

            // CLEAN UP MARKDOWN SYMBOLS FOR DISPLAY
            const cleanLine = line
                .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
                .replace(/\*(.*?)\*/g, '$1')     // Italic
                .replace(/`(.*?)`/g, '$1');      // Code

            doc.setFont(fontName, 'normal');
            if (/\*\*(.*?)\*\*/.test(line)) doc.setFont(fontName, 'bold'); // Heuristic: if line contains bold marker, bold the line (simplification)

            doc.text(cleanLine, xUrl, y + (fontSize * 0.3527));
            y += lineHeight;
        };

        let tempLine = "";
        for (const word of words) {
            // Calculate width of clean word
            const cleanWord = word.replace(/[\*_`]/g, '');
            const w = doc.getStringUnitWidth(cleanWord) * fontSize / doc.internal.scaleFactor;

            if (currentLineWidth + w > contentWidth) {
                printLine(currentLine);
                currentLine = word;
                currentLineWidth = w;
            } else {
                currentLine += word;
                currentLineWidth += w;
            }
        }
        if (currentLine) printLine(currentLine);
    };

    const renderMarkdown = (source: string) => {
        const lines = source.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Headers
            if (line.startsWith('# ')) {
                checkPageBreak(12);
                y += 2;
                renderStyledText(line.replace('# ', ''), margin, 18, 'helvetica-bold');
                y += 2;
            } else if (line.startsWith('## ')) {
                checkPageBreak(10);
                y += 2;
                renderStyledText(line.replace('## ', ''), margin, 16, 'helvetica-bold');
                y += 2;
            } else if (line.startsWith('### ')) {
                checkPageBreak(8);
                renderStyledText(line.replace('### ', ''), margin, 14, 'helvetica-bold');
            } else if (line.startsWith('- ') || line.startsWith('* ')) {
                // List item
                renderStyledText('• ' + line.substring(2), margin + 5, 11);
            } else {
                // Regular Text
                if (line.trim()) {
                    renderStyledText(line, margin, 11);
                }
            }
        }
        y += 3;
    };

    for (const cell of cells) {
        if (cell.cell_type === 'markdown') {
            const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
            if (source.trim()) {
                renderMarkdown(source);
            }
        } else if (cell.cell_type === 'code') {
            // Input code wrapper
            const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
            if (source.trim()) {
                const codeLines = source.split('\n');
                const codeSize = 9;
                const codeLineHeight = (codeSize * 0.3527) * 1.3;
                const totalCodeHeight = (codeLines.length * codeLineHeight) + 4;

                checkPageBreak(totalCodeHeight);

                // Background Box
                doc.setFillColor(248, 248, 248);
                doc.setDrawColor(230, 230, 230);
                doc.rect(margin - 2, y, contentWidth + 4, totalCodeHeight, 'FD');

                // Render Code
                doc.setFont('courier', 'normal');
                doc.setFontSize(codeSize);
                doc.setTextColor(50, 50, 50);

                let codeY = y + 2 + (codeSize * 0.3527);
                for (const line of codeLines) {
                    doc.text(line, margin, codeY);
                    codeY += codeLineHeight;
                }

                y += totalCodeHeight + 2;
            }

            // Outputs
            if (cell.outputs && cell.outputs.length > 0) {
                for (const output of cell.outputs) {
                    // Text Output
                    if (output.text || (output.data && output.data['text/plain'])) {
                        const rawText = output.text || output.data['text/plain'];
                        const text = Array.isArray(rawText) ? rawText.join('') : rawText;

                        doc.setFont('courier', 'normal');
                        doc.setFontSize(8);
                        doc.setTextColor(80, 80, 80);

                        const lines = doc.splitTextToSize(text, contentWidth);
                        const lineHeight = 3.5; // mm

                        checkPageBreak(lines.length * lineHeight);

                        lines.forEach((line: string) => {
                            checkPageBreak(lineHeight);
                            doc.text(line, margin, y + 2.5);
                            y += lineHeight;
                        });
                        y += 2;
                    }

                    // Image Output
                    const imgData = output.data ? (output.data['image/png'] || output.data['image/jpeg']) : null;
                    if (imgData) {
                        try {
                            // Ensure Base64 prefix
                            const base64 = imgData.startsWith('data:image') ? imgData : `data:image/png;base64,${imgData.trim()}`;

                            // Load image synchronously-ish to get dimensions with timeout
                            const img = new Image();
                            await Promise.race([
                                new Promise((resolve, reject) => {
                                    img.onload = resolve;
                                    img.onerror = reject;
                                    img.src = base64;
                                }),
                                new Promise((_, reject) => setTimeout(() => reject(new Error('Image load timeout')), 5000))
                            ]);

                            let imgW = img.width * 0.264583; // px to mm
                            let imgH = img.height * 0.264583;

                            // Scale down if too big
                            if (imgW > contentWidth) {
                                const ratio = contentWidth / imgW;
                                imgW = contentWidth;
                                imgH = imgH * ratio;
                            }

                            checkPageBreak(imgH + 5);
                            doc.addImage(base64, 'PNG', margin, y, imgW, imgH);
                            y += imgH + 5;
                        } catch (e) {
                            console.warn('Failed to render output image', e);
                        }
                    }
                }
            }
        }
        y += 2; // Spacing between cells
    }

    return doc.output('blob');
};
