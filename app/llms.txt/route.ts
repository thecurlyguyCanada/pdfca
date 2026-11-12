import { TOOL_GROUPS } from '@/lib/toolGroups';
import { isToolLive } from '@/lib/retired';

export const dynamic = 'force-static';

const SITE = 'https://www.pdfcanada.ca';

/** llms.txt generated from the homepage hub registry, so it can never list a page that doesn't exist. */
export function GET() {
    const lines = [
        '# pdfcanada.ca',
        '',
        '> Free PDF tools for Canadians, in English and French, that run entirely in the browser. Files are processed locally with pdf-lib, pdf.js and Tesseract and are never uploaded to a server. No account, no watermark. The practical size limit is the device\'s memory.',
        '',
    ];
    for (const g of TOOL_GROUPS) {
        const tools = g.tools.filter((t) => isToolLive(t.slug));
        if (!tools.length) continue;
        lines.push(`## ${g.name.en}`, '');
        for (const t of tools) lines.push(`- [${t.name.en}](${SITE}/en/${t.slug}): ${t.short.en}. French: ${SITE}/fr/${t.slug}`);
        lines.push('');
    }
    lines.push('## About', '', `- [About](${SITE}/en/about): who builds the site and how pages are written.`, `- [Security](${SITE}/en/security): how files are handled and how to verify nothing is uploaded.`, `- [Privacy](${SITE}/en/privacy)`, '');
    return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
