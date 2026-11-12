'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

/**
 * Renders one of the self-contained tools. Each is its own dynamic import, so a page downloads only
 * its own tool's code.
 */
function Loading() {
    return <div className="min-h-64 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-gray-800 animate-pulse" aria-hidden="true" />;
}

type ToolProps = { lang: 'en' | 'fr' };

const TOOLS: Record<string, ComponentType<ToolProps>> = {
    'compare-pdf': dynamic(() => import('./ComparePdf'), { loading: Loading }),
    'scan-to-pdf': dynamic(() => import('./ScanToPdf'), { loading: Loading }),
    'add-image-to-pdf': dynamic(() => import('./AddImageToPdf'), { loading: Loading }),
    'split-pdf-by-size': dynamic(() => import('./SplitBySize'), { loading: Loading }),
    'split-pdf-in-half': dynamic(() => import('./SplitInHalf'), { loading: Loading }),
    'add-page-numbers': dynamic(() => import('./AddPageNumbers'), { loading: Loading }),
    'watermark-pdf': dynamic(() => import('./WatermarkPdf'), { loading: Loading }),
    'protect-pdf': dynamic(() => import('./ProtectPdf'), { loading: Loading }),
    'flatten-pdf': dynamic(() => import('./FlattenPdf'), { loading: Loading }),
    'alternate-mix-pdf': dynamic(() => import('./AlternateMix'), { loading: Loading }),
};

export const STANDALONE_SLUGS = Object.keys(TOOLS);

export default function StandaloneTool({ slug, lang }: { slug: string; lang: string }) {
    const Tool = TOOLS[slug];
    if (!Tool) return null;
    return <Tool lang={lang === 'fr' ? 'fr' : 'en'} />;
}
