'use client';

export default function AlternateMix({ lang }: { lang: 'en' | 'fr' }) {
    return <p className="text-sm text-gray-500">{lang === 'fr' ? 'Bientôt.' : 'Coming soon.'}</p>;
}
