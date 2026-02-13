import { PricingPage } from '@/components/pages/PricingPage';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Language } from '@/utils/i18n';

import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;

    return constructMetadata({
        title: lang === 'fr' ? 'Tarification des Outils PDF - Simple et Transparent | pdfcanada.ca' : 'PDF Tools Pricing - Free & Transparent Access | pdfcanada.ca',
        description: lang === 'fr'
            ? 'Tarification des Outils PDF - Accédez aux fonctions premium en toute sécurité. Traitement 100% local, gratuit pour la plupart des outils. Voir les plans.'
            : 'PDF Tools Pricing - Access premium PDF features with 100% private, local-first processing. Most tools are free forever with no sign-up required. View plans.',
        path: '/pricing',
        lang
    });
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }];
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <div className="min-h-screen flex flex-col">
            <Header lang={currentLang} />
            <main id="main-content" className="flex-grow">
                <PricingPage lang={currentLang} />
            </main>
            <Footer lang={currentLang} />
        </div>
    );
}
