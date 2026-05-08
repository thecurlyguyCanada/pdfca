import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/pages/ComparisonPage';
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
        title: lang === 'fr' ? 'Local vs Cloud PDF : Pourquoi le Traitement Local est Plus Sûr | pdfcanada.ca' : (lang === 'pt' ? 'Local vs Cloud PDF: Por que o Processamento Local é Mais Seguro | pdfcanada.ca' : 'Local vs. Cloud PDF: Why Local Processing is More Secure | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Comparaison détaillée entre le traitement PDF local et cloud. Découvrez pourquoi le traitement dans le navigateur est la norme de sécurité en 2026.'
            : (lang === 'pt'
                ? 'Comparação detalhada entre processamento PDF local e na nuvem. Saiba por que o processamento no navegador é o padrão de segurança em 2026.'
                : 'Detailed comparison between local and cloud PDF processing. Learn why in-browser processing is the security standard for sensitive documents in 2026.'),
        path: '/local-vs-cloud',
        lang,
    });
}

export default async function ComparisonRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Local vs Cloud' : (lang === 'pt' ? 'Local vs Cloud' : 'Local vs. Cloud')}
                description={lang === 'fr' ? 'Comparaison de sécurité PDF' : (lang === 'pt' ? 'Comparação de segurança PDF' : 'PDF security comparison')}
                lang={currentLang}
                canonicalPath="/local-vs-cloud"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Local vs Cloud' : (lang === 'pt' ? 'Local vs Cloud' : 'Local vs. Cloud'), path: `/${lang}/local-vs-cloud` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <ComparisonPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
