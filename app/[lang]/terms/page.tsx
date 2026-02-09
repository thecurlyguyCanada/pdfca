import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/TermsPage';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { constructMetadata } from '@/lib/metadata';
import { SEO } from '@/components/SEO';

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
        title: lang === 'fr' ? "Conditions d'utilisation - pdfcanada.ca | Mentions Légales" : (lang === 'pt' ? 'Termos de Serviço - pdfcanada.ca | Aviso Legal' : 'Terms of Service - pdfcanada.ca | Usage Rights & Legal'),
        description: lang === 'fr'
            ? "Consultez nos conditions d'utilisation. En utilisant pdfcanada.ca, vous acceptez notre politique de traitement local et de sécurité."
            : (lang === 'pt'
                ? 'Leia nossos termos de serviço. Ao usar o pdfcanada.ca, você concorda com nossa política de processamento local e segurança.'
                : 'Read our terms of service. By using pdfcanada.ca, you agree to our local-first processing policy and security standards.'),
        path: '/terms',
        lang,
        keywords: lang === 'fr' ? ['conditions', 'légal', 'utilisation'] : (lang === 'pt' ? ['termos', 'legal', 'uso'] : ['terms', 'legal', 'usage rights', 'policies'])
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
            <SEO
                title={lang === 'fr' ? "Conditions d'utilisation" : (lang === 'pt' ? 'Termos de Serviço' : 'Terms of Service')}
                description={lang === 'fr' ? "Conditions d'utilisation de pdfcanada.ca" : (lang === 'pt' ? 'Termos de Serviço do pdfcanada.ca' : 'pdfcanada.ca Terms of Service')}
                lang={currentLang}
                canonicalPath="/terms"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Conditions' : (lang === 'pt' ? 'Termos' : 'Terms'), path: `/${lang}/terms` }
                ]}
            />
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
