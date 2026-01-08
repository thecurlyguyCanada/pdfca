'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Language } from '@/utils/i18n';
import { RefreshCcw } from 'lucide-react';

// Dynamically import PdfViewer to avoid SSR issues
const PdfViewer = dynamic(
    () => import('@/components/PdfViewer').then(mod => mod.PdfViewer),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center min-h-[400px] bg-gray-100 rounded-2xl">
                <RefreshCcw className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
        )
    }
);

interface SurahBaqarahContentProps {
    lang: Language;
}

export function SurahBaqarahContent({ lang }: SurahBaqarahContentProps) {
    // PDF URL - will be served from /public/pdfs/
    const pdfUrl = '/pdfs/surah-baqarah.pdf';

    const title = lang === 'fr'
        ? 'Sourate Al-Baqarah'
        : 'Surah Al-Baqarah';

    return (
        <PdfViewer
            pdfUrl={pdfUrl}
            title={title}
            lang={lang}
        />
    );
}
