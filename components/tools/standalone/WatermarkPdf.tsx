'use client';

export default function WatermarkPdf({ lang }: { lang: 'en' | 'fr' }) {
    return <p className="text-sm text-gray-500">{lang === 'fr' ? 'Bientôt.' : 'Coming soon.'}</p>;
}
