import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
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
        title: lang === 'fr' ? 'À propos de nous' : 'About Us',
        description: lang === 'fr'
            ? 'En savoir plus sur pdfcanada.ca, notre mission et notre engagement à fournir des outils PDF gratuits, sécurisés et locaux.'
            : 'Learn more about pdfcanada.ca, our mission, and our commitment to providing free, secure, and local-first PDF tools.',
        path: '/about',
        lang,
        keywords: lang === 'fr'
            ? ['à propos', 'mission', 'sécurité PDF']
            : ['about us', 'mission', 'secure PDF tools']
    });
}

export default async function AboutRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <AboutPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
