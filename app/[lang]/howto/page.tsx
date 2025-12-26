import type { Metadata } from 'next';
import { HowToPage } from '@/components/pages/HowToPage';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';
    const path = '/howto';

    const titles = {
        en: 'How to Use PDF Tools | Step-by-Step Guide | pdfcanada.ca',
        fr: 'Comment utiliser les outils PDF | Guide étape par étape | pdfcanada.ca',
    };

    return {
        title: titles[lang] || titles.en,
        description: 'Learn how to use our free, browser-based PDF tools with our step-by-step instructions.',
        alternates: {
            canonical: `${baseUrl}/${lang}${path}`,
            languages: {
                'en-CA': `${baseUrl}/en${path}`,
                'fr-CA': `${baseUrl}/fr${path}`,
                'x-default': `${baseUrl}/en${path}`,
            },
        },
    };
}

export default async function HowToRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main className="flex-grow">
                    <HowToPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
