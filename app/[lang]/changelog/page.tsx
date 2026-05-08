import type { Metadata } from 'next';
import { ChangelogPage } from '@/components/pages/ChangelogPage';
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
        title: lang === 'fr' ? 'Journal des Modifications | pdfcanada.ca' : (lang === 'pt' ? 'Registro de Alterações | pdfcanada.ca' : 'Product Changelog | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Découvrez les dernières mises à jour, fonctionnalités et améliorations de sécurité sur pdfcanada.ca.'
            : (lang === 'pt'
                ? 'Descubra as últimas atualizações, recursos e melhorias de segurança no pdfcanada.ca.'
                : 'Stay informed about the latest updates, features, and security improvements on pdfcanada.ca.'),
        path: '/changelog',
        lang,
    });
}

export default async function ChangelogRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Changelog' : (lang === 'pt' ? 'Changelog' : 'Changelog')}
                description={lang === 'fr' ? 'Historique des mises à jour' : (lang === 'pt' ? 'Histórico de atualizações' : 'Update history')}
                lang={currentLang}
                canonicalPath="/changelog"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Changelog' : (lang === 'pt' ? 'Changelog' : 'Changelog'), path: `/${lang}/changelog` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <ChangelogPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
