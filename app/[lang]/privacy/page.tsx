import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/PrivacyPage';
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
        title: lang === 'fr' ? 'Politique de Confidentialité - pdfcanada.ca | Protection des Données & PIPEDA' : (lang === 'pt' ? 'Política de Privacidade - pdfcanada.ca | Proteção de Dados' : 'Privacy Policy - pdfcanada.ca | Data Protection & PIPEDA'),
        description: lang === 'fr'
            ? 'Vos fichiers ne quittent jamais votre appareil. pdfcanada.ca utilise le traitement local par navigateur pour garantir une confidentialité totale. Conforme à la LPRPDE.'
            : (lang === 'pt'
                ? 'Seus arquivos nunca saem do seu dispositivo. pdfcanada.ca usa processamento local no navegador para garantir total privacidade. Seguro e gratuito.'
                : 'Your files never leave your device. pdfcanada.ca uses local browser-based processing to ensure complete privacy. PIPEDA compliant and 100% secure.'),
        path: '/privacy',
        lang,
        keywords: lang === 'fr' ? ['confidentialité', 'sécurité', 'protection', 'LPRPDE', 'traitement local'] : (lang === 'pt' ? ['privacidade', 'segurança', 'proteção', 'processamento local'] : ['privacy', 'security', 'PIPEDA', 'data protection', 'local processing', 'secure pdf'])
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
            <SEO
                title={lang === 'fr' ? 'Politique de Confidentialité' : (lang === 'pt' ? 'Política de Privacidade' : 'Privacy Policy')}
                description={lang === 'fr' ? 'Politique de confidentialité de pdfcanada.ca' : (lang === 'pt' ? 'Política de Privacidade do pdfcanada.ca' : 'pdfcanada.ca Privacy Policy')}
                lang={currentLang}
                canonicalPath="/privacy"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Confidentialité' : (lang === 'pt' ? 'Privacidade' : 'Privacy'), path: `/${lang}/privacy` }
                ]}
            />
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
