
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

    const addText = (text: string, options: { font?: string, style?: string, size?: number, color?: number[] } = {}) => {
        const font = options.font || 'helvetica';
        const style = options.style || 'normal';
        const size = options.size || 10;
        const color = options.color || [0, 0, 0];

        doc.setFont(font, style);
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);

        const lines = doc.splitTextToSize(text, contentWidth);
        const lineHeight = (size * 0.3527) * 1.2; // Convert pt to mm and add spacing

        lines.forEach((line: string) => {
            checkPageBreak(lineHeight);
            doc.text(line, margin, y + (size * 0.3527)); // Adjust for baseline
            y += lineHeight;
        });

        y += 2; // Extra padding between blocks
    };

    for (const cell of cells) {
        if (cell.cell_type === 'markdown') {
            const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
            if (source.trim()) {
                addText(source, { size: 11, style: 'normal' });
            }
        } else if (cell.cell_type === 'code') {
            // Input code
            const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
            if (source.trim()) {
                doc.setFillColor(245, 245, 245);
                const codeLines = source.split('\n');
                const codeSize = 9;
                const codeLineHeight = (codeSize * 0.3527) * 1.2;
                const totalCodeHeight = (codeLines.length * codeLineHeight) + 4;

                checkPageBreak(totalCodeHeight);
                doc.rect(margin - 2, y, contentWidth + 4, totalCodeHeight, 'F');
                y += 2;

                addText(source, { font: 'courier', size: codeSize, color: [50, 50, 50] });
                y += 2;
            }

            // Outputs
            if (cell.outputs && cell.outputs.length > 0) {
                for (const output of cell.outputs) {
                    if (output.output_type === 'stream' || output.output_type === 'execute_result' || output.output_type === 'display_data') {
                        if (output.text) {
                            const text = Array.isArray(output.text) ? output.text.join('') : output.text;
                            addText(text, { font: 'courier', size: 8, color: [100, 100, 100] });
                        }

                        if (output.data) {
                            // Handle text/plain
                            if (output.data['text/plain']) {
                                const text = Array.isArray(output.data['text/plain']) ? output.data['text/plain'].join('') : output.data['text/plain'];
                                addText(text, { font: 'courier', size: 8, color: [100, 100, 100] });
                            }

                            // Handle images (image/png or image/jpeg)
                            const imgData = output.data['image/png'] || output.data['image/jpeg'];
                            if (imgData) {
                                try {
                                    const base64 = `data:image/png;base64,${imgData.trim()}`;
                                    // We need to get image dimensions. Simplified for now.
                                    const img = new Image();
                                    await new Promise((resolve) => {
                                        img.onload = resolve;
                                        img.src = base64;
                                    });

                                    let imgW = img.width * 0.264583; // px to mm approx
                                    let imgH = img.height * 0.264583;

                                    if (imgW > contentWidth) {
                                        const ratio = contentWidth / imgW;
                                        imgW = contentWidth;
                                        imgH = imgH * ratio;
                                    }

                                    checkPageBreak(imgH + 10);
                                    doc.addImage(base64, 'PNG', margin, y, imgW, imgH);
                                    y += imgH + 5;
                                } catch (e) {
                                    console.error('Failed to add image to PDF:', e);
                                }
                            }
                        }
                    }
                }
            }
        }
        y += 5; // Spacing between cells
    }

    return doc.output('blob');
};
