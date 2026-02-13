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
        title: lang === 'fr' ? 'Politique de Confidentialité - Outils PDF Sécurisés | pdfcanada.ca' : (lang === 'pt' ? 'Política de Privacidade - Ferramentas PDF Seguras | pdfcanada.ca' : 'Privacy Policy - Secure PDF Processing Standards | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Politique de Confidentialité - Découvrez comment pdfcanada.ca assure la protection des données avec un traitement 100% local. Conforme LPRPDE. En savoir plus.'
            : (lang === 'pt'
                ? 'Política de Privacidade - Saiba como o pdfcanada.ca garante a proteção de dados com processamento 100% local. Seguro e privado. Leia mais agora.'
                : 'Privacy Policy - Learn how PDF Canada ensures complete data protection with 100% private, local-first processing. PIPEDA compliant and secure. Read more.'),
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
