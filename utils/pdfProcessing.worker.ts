import * as pdfjs from 'pdfjs-dist';
// xlsx import removed as it is not used in the worker

// Initialize PDF.js worker
// In a web worker, we might need to point to the external CDN script directly or bundle it.
// For simplicity in this environment, we'll try the CDN approach which worked in the main thread.
if (typeof self !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
}

interface TextItem {
    str: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

self.onmessage = async (e: MessageEvent) => {
    const { fileBuffer, strategy } = e.data;

    try {
        const loadingTask = pdfjs.getDocument({ data: fileBuffer });
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;
        let allTextItems: TextItem[] = [];

        // Chunked processing to allow progress updates
        const chunkSize = 5;
        for (let i = 1; i <= numPages; i += chunkSize) {
            const chunkPromises = [];
            for (let j = 0; j < chunkSize && (i + j) <= numPages; j++) {
                chunkPromises.push(processPage(pdf, i + j));
            }

            const chunkResults = await Promise.all(chunkPromises);
            chunkResults.forEach(items => allTextItems.push(...items));

            // Report progress
            const progress = Math.min((i + chunkSize - 1) / numPages, 1);
            self.postMessage({ type: 'progress', value: progress });
        }

        // Clustering and Extraction Logic
        const tableData = extractTableData(allTextItems, numPages);

        self.postMessage({ type: 'complete', data: tableData });

    } catch (error) {
        self.postMessage({ type: 'error', error: (error as Error).message });
    }
};

async function processPage(pdf: any, pageNum: number): Promise<TextItem[]> {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const viewport = page.getViewport({ scale: 1.0 });

    // Use a simplified object structure to save memory
    return textContent.items.map((item: any) => ({
        str: item.str,
        x: Math.round(item.transform[4] * 10) / 10, // Round to 1 decimal for better clustering
        y: Math.round((viewport.height - item.transform[5]) * 10) / 10,
        w: Math.round(item.width * 10) / 10,
        h: Math.round(item.height * 10) / 10
    }));
}

function extractTableData(allTextItems: TextItem[], numPages: number) {
    if (allTextItems.length === 0) return { headers: [], rows: [], confidence: 0 };

    // 1. Spatial Clustering: Identify Rows (Y-axis)
    // Sort by Y, then X - using efficient sort
    allTextItems.sort((a, b) => a.y - b.y || a.x - b.x);

    const rows: TextItem[][] = [];
    let currentRow: TextItem[] = [];
    let lastY = allTextItems[0].y;
    const yTolerance = 5;

    for (const item of allTextItems) {
        if (Math.abs(item.y - lastY) > yTolerance) {
            if (currentRow.length > 0) rows.push(currentRow);
            currentRow = [];
            lastY = item.y;
        }
        currentRow.push(item);
    }
    if (currentRow.length > 0) rows.push(currentRow);

    // 2. Spatial Clustering: Identify Columns (X-axis)
    // Build histogram
    const columnFrequencies: { [key: number]: number } = {};
    for (const item of allTextItems) {
        const roundedX = Math.round(item.x / 10) * 10;
        columnFrequencies[roundedX] = (columnFrequencies[roundedX] || 0) + 1;
    }

    const sortedX = Object.keys(columnFrequencies)
        .map(Number)
        .sort((a, b) => a - b);

    // Heuristic: Columns must appear on at least 30% of pages to be valid columns
    // This reduces noise from one-off text elements
    // const columnBoundaries = sortedX.filter(x => columnFrequencies[x] > numPages * 0.3);

    // 3. Transform clustered rows
    const processedRows = rows.map(rowItems => {
        const line: string[] = [];
        if (rowItems.length === 0) return line; // Safety check

        rowItems.sort((a, b) => a.x - b.x);

        let currentCell = rowItems[0].str;
        for (let i = 1; i < rowItems.length; i++) {
            const dist = rowItems[i].x - (rowItems[i - 1].x + rowItems[i - 1].w);
            // Dynamic proximity based on height (font size)
            // Reduced to 0.5 to prevent merging of distinct columns in tight layouts
            const proximity = rowItems[i].h * 0.5;

            if (dist < proximity) {
                currentCell += " " + rowItems[i].str;
            } else {
                line.push(currentCell.trim());
                currentCell = rowItems[i].str;
            }
        }
        line.push(currentCell.trim());
        return line;
    });

    // 4. Header Detection
    let headerIdx = 0;
    let maxCols = 0;
    // Look at first 20 rows max
    const scanDepth = Math.min(processedRows.length, 20);

    for (let i = 0; i < scanDepth; i++) {
        const len = processedRows[i].length;
        if (len > maxCols) {
            maxCols = len;
            headerIdx = i;
        }
    }

    const headers = processedRows[headerIdx] || [];

    // Optimization: Pre-allocate mapped rows array
    const dataRows = [];
    const headerLen = headers.length;

    for (let i = headerIdx + 1; i < processedRows.length; i++) {
        const row = processedRows[i];
        if (row.length < Math.floor(maxCols * 0.5)) continue; // Skip strictly malformed rows

        const obj: any = {};
        for (let j = 0; j < headerLen; j++) {
            obj[headers[j]] = row[j] || "";
        }
        dataRows.push(obj);
    }

    return {
        headers,
        rows: dataRows,
        confidence: 0.85
    };
}
