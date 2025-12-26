import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
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
    const path = '/about';

    const titles = {
        en: 'About Us | pdfcanada.ca',
        fr: 'À propos de nous | pdfcanada.ca',
    };

    const descriptions = {
        en: 'Learn more about pdfcanada.ca, our mission, and our commitment to providing free, secure, and local-first PDF tools.',
        fr: 'En savoir plus sur pdfcanada.ca, notre mission et notre engagement à fournir des outils PDF gratuits, sécurisés et locaux.',
    };

    return {
        title: titles[lang] || titles.en,
        description: descriptions[lang] || descriptions.en,
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

export default async function AboutRoute({
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
                    <AboutPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
