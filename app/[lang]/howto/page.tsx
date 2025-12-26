import type { Metadata } from 'next';
import { HowToPage } from '@/components/pages/HowToPage';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { constructMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;

    return constructMetadata({
        title: lang === 'fr' ? 'Comment utiliser les outils PDF' : 'How to Use PDF Tools',
        description: lang === 'fr'
            ? 'Apprenez à utiliser nos outils PDF gratuits basés sur le navigateur avec nos instructions étape par étape.'
            : 'Learn how to use our free, browser-based PDF tools with our step-by-step instructions.',
        path: '/howto',
        lang
    });
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
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <HowToPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
