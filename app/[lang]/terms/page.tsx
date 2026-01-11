import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/TermsPage';
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
        title: lang === 'fr' ? "Conditions d'utilisation" : (lang === 'pt' ? 'Termos de Serviço' : 'Terms of Service'),
        description: lang === 'fr'
            ? "Consultez nos conditions d'utilisation et les modalités de service pour les outils pdfcanada.ca."
            : (lang === 'pt'
                ? 'Leia nossos termos de serviço e condições de uso das ferramentas pdfcanada.ca.'
                : 'Read our terms of service and usage conditions for pdfcanada.ca tools.'),
        path: '/terms',
        lang
    });
}

export default async function TermsRoute({
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
                    <TermsPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
