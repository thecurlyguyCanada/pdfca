import { NextRequest, NextResponse } from 'next/server';

/**
 * IndexNow API Route
 * Allows instant notification to search engines when content is updated.
 * 
 * Supported search engines:
 * - Bing (indexnow.org)
 * - Yandex (yandex.com)
 * - Naver (searchadvisor.naver.com)
 * - Seznam.cz (search.seznam.cz)
 * 
 * Usage: POST /api/indexnow with JSON body { urls: string[] }
 * 
 * @see https://www.indexnow.org/
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'pdfcanada-indexnow-key';
const SITE_HOST = 'www.pdfcanada.ca';

interface IndexNowRequest {
    host: string;
    key: string;
    keyLocation: string;
    urlList: string[];
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const urls: string[] = body.urls;

        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return NextResponse.json(
                { error: 'URLs array is required' },
                { status: 400 }
            );
        }

        // Limit to 10,000 URLs per request (IndexNow limit)
        const limitedUrls = urls.slice(0, 10000);

        const indexNowPayload: IndexNowRequest = {
            host: SITE_HOST,
            key: INDEXNOW_KEY,
            keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
            urlList: limitedUrls.map(url =>
                url.startsWith('http') ? url : `https://${SITE_HOST}${url}`
            ),
        };

        // Submit to IndexNow API (Bing endpoint)
        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(indexNowPayload),
        });

        if (response.ok || response.status === 202) {
            return NextResponse.json({
                success: true,
                message: `Submitted ${limitedUrls.length} URLs to IndexNow`,
                urls: limitedUrls,
            });
        }

        const errorText = await response.text();
        return NextResponse.json(
            { error: 'IndexNow submission failed', details: errorText },
            { status: response.status }
        );
    } catch (error) {
        console.error('IndexNow error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        service: 'IndexNow',
        description: 'Instant URL indexing notification for search engines',
        usage: 'POST with { urls: string[] } to submit URLs',
        documentation: 'https://www.indexnow.org/',
    });
}
