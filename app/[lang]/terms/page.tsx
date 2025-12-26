import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/TermsPage';
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
    const path = '/terms';

    const titles = {
        en: 'Terms of Service | pdfcanada.ca',
        fr: "Conditions d'utilisation | pdfcanada.ca",
    };

    return {
        title: titles[lang] || titles.en,
        description: 'Read our terms of service and usage conditions for pdfcanada.ca tools.',
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

export default async function TermsRoute({
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
                    <TermsPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
