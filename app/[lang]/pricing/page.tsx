import { PricingPage } from '@/components/pages/PricingPage';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Language } from '@/utils/i18n';

export const metadata: Metadata = {
    title: 'Pricing | pdfcanada.ca',
    description: 'Simple, transparent pricing. Most features are free forever.',
    alternates: {
        canonical: '/pricing'
    }
};

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
