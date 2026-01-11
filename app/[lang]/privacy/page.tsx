import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/PrivacyPage';
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
        title: lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy',
        description: lang === 'fr'
            ? 'Découvrez comment nous protégeons votre vie privée. Le traitement local signifie que vos fichiers ne quittent jamais votre appareil.'
            : 'Learn how we protect your privacy. Local-first processing means your files never leave your device.',
        path: '/privacy',
        lang,
        keywords: ['privacy', 'security', 'PIPEDA', 'data protection']
    });
}

export default async function PrivacyRoute({
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
                    <PrivacyPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
