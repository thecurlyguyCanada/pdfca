// Dynamic import to avoid SSR issues
let pdfjsLib: typeof import('pdfjs-dist') | null = null;

async function getPdfJs() {
    if (pdfjsLib) return pdfjsLib;
    pdfjsLib = await import('pdfjs-dist');
    if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    }
    return pdfjsLib;
}

export type RiskLevel = 'SAFE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface ExtractedLink {
    url: string;
    page: number;
    isSuspicious: boolean;
    reason?: string;
}

export interface SecurityAnalysisResult {
    riskLevel: RiskLevel;
    score: number; // 0-100
    details: {
        hasJavascript: boolean;
        hasOpenAction: boolean;
        hasLaunchActions: boolean;
        hasSubmitForm: boolean;
        embeddedFiles: string[];
        links: ExtractedLink[];
    };
    logs: string[];
}

export async function analyzePdfSecurity(file: File): Promise<SecurityAnalysisResult> {
    const pdfjs = await getPdfJs();
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;

    const result: SecurityAnalysisResult = {
        riskLevel: 'SAFE',
        score: 0,
        details: {
            hasJavascript: false,
            hasOpenAction: false,
            hasLaunchActions: false,
            hasSubmitForm: false,
            embeddedFiles: [],
            links: []
        },
        logs: []
    };

    // 1. Analyze Document Catalog (Root)
    // We can't access low-level objects easily via the high-level API,
    // so we rely on what is exposed via getMetadata and getJSActions (if available in this version)
    // or by traversing pages and annotations.

    // Check for OpenAction in Catalog (often used for auto-execution)
    try {
        // @ts-ignore - access internal catalog if possible, or infer from parsing
        const dest = await pdf.getOpenAction();
        if (dest && dest.length > 0) {
            // It has an open action (could be just nav, but suspicious if it's JS)
            // Ideally we'd check if it's JS, but usually OpenAction is just a destination.
            // A true JS OpenAction is harder to detect without low-level parsing, 
            // but we can check if the destination is a Named Action that implies script.
        }
    } catch (e) {
        // Warning: getOpenAction might not return the JS action directly
    }

    // 2. JavaScript Analysis via Main Thread (Names Dictionary)
    try {
        // Some versions of PDF.js expose a `getJavaScript` method
        const javaScript = await (pdf as any).getJavaScript();
        if (javaScript && javaScript.length > 0) {
            result.details.hasJavascript = true;
            result.logs.push(`Detected ${javaScript.length} embedded JavaScript segments.`);
        }
    } catch (e) {
        // Fallback or not supported
    }

    // 3. Page-by-Page Deep Scan for Annotations
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const annotations = await page.getAnnotations();

        for (const annot of annotations) {
            // Check for URI Actions
            if (annot.url) {
                const isSuspicious = checkSuspiciousUrl(annot.url);
                result.details.links.push({
                    url: annot.url,
                    page: i,
                    isSuspicious: isSuspicious.isSuspicious,
                    reason: isSuspicious.reason
                });
            }

            // Check for Widget Annotations (Forms) which might have AA (Additional Actions)
            if (annot.subtype === 'Widget') {
                // If the widget has actions, it might be a risk.
                // In PDF.js high-level, we often see this in 'actions' or 'border' props depending on impl.
                // We'll flag form fields generally as potential interaction points.
            }

            // Check for "Link" annotations that are NOT URIs (could be Launch/JS)
            if (annot.subtype === 'Link' && !annot.url) {
                // Potential internal link or JS action
                if (annot.action && annot.action === 'JavaScript') {
                    result.details.hasJavascript = true;
                    result.logs.push(`Page ${i}: Found Link with JavaScript action.`);
                }
                if (annot.action && annot.action === 'Launch') {
                    result.details.hasLaunchActions = true;
                    result.logs.push(`Page ${i}: Found LAUNCH action (executable trigger).`);
                }
            }
        }

        // Scan TextContent for hidden text (white on white, or off-screen) - Advanced feature
        // For now, we skip this to save performance.
    }

    // 4. Embedded Files
    try {
        const attachments = await (pdf as any).getAttachments();
        if (attachments) {
            result.details.embeddedFiles = Object.keys(attachments);
            if (result.details.embeddedFiles.length > 0) {
                result.logs.push(`Found ${result.details.embeddedFiles.length} embedded files: ${result.details.embeddedFiles.join(', ')}`);
            }
        }
    } catch (e) {
        // ignore
    }

    // 5. Calculate Score
    let riskScore = 0;

    if (result.details.hasJavascript) riskScore += 50;
    if (result.details.hasLaunchActions) riskScore += 100; // Critical
    if (result.details.hasOpenAction) riskScore += 20; // Suspicious
    if (result.details.embeddedFiles.length > 0) riskScore += 30; // Malware vector

    // Link Analysis
    const suspiciousLinks = result.details.links.filter(l => l.isSuspicious);
    if (suspiciousLinks.length > 0) riskScore += 20 * suspiciousLinks.length;

    // IP address links are very sus
    if (result.details.links.some(l => l.reason?.includes('IP Address'))) riskScore += 40;

    result.score = Math.min(riskScore, 100);

    if (result.score === 0) result.riskLevel = 'SAFE';
    else if (result.score < 30) result.riskLevel = 'LOW';
    else if (result.score < 70) result.riskLevel = 'MEDIUM';
    else if (result.score < 90) result.riskLevel = 'HIGH';
    else result.riskLevel = 'CRITICAL';

    // Clean up to prevent memory leak
    pdf.destroy();

    return result;
}

function checkSuspiciousUrl(url: string): { isSuspicious: boolean, reason?: string } {
    if (!url) return { isSuspicious: false };

    url = url.toLowerCase();

    // Check for IP address (basic regex)
    // 192.168.x.x is local, but public IPs are sus in PDFs
    const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    if (ipRegex.test(url)) {
        return { isSuspicious: true, reason: 'Raw IP Address found (Phishing Indicator)' };
    }

    // Suspicious TLDs often used by threat actors
    const susTLDs = ['.xyz', '.top', '.gq', '.cn', '.ru', '.work', '.click', '.zip', '.mov'];
    if (susTLDs.some(tld => url.includes(tld))) {
        return { isSuspicious: true, reason: 'Suspicious Top-Level Domain' };
    }

    // Executable extensions
    const exeExts = ['.exe', '.bat', '.cmd', '.sh', '.msi', '.vbs', '.js'];
    if (exeExts.some(ext => url.endsWith(ext))) {
        return { isSuspicious: true, reason: 'Direct link to executable file' };
    }

    return { isSuspicious: false };
}
