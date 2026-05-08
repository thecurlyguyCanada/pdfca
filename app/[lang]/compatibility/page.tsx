import type { Metadata } from 'next';
import { CompatibilityPage } from '@/components/pages/CompatibilityPage';
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
        title: lang === 'fr' ? 'Compatibilité Navigateur | pdfcanada.ca' : (lang === 'pt' ? 'Compatibilidade de Navegador | pdfcanada.ca' : 'Browser Compatibility | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Vérifiez si votre navigateur est compatible avec les outils PDF locaux de pdfcanada.ca.'
            : (lang === 'pt'
                ? 'Verifique se o seu navegador é compatível com as ferramentas PDF locais do pdfcanada.ca.'
                : 'Check if your browser is compatible with pdfcanada.ca\'s local-first PDF tools.'),
        path: '/compatibility',
        lang,
    });
}

export default async function CompatibilityRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Compatibilité' : (lang === 'pt' ? 'Compatibilidade' : 'Compatibility')}
                description={lang === 'fr' ? 'Compatibilité navigateur technique' : (lang === 'pt' ? 'Compatibilidade técnica' : 'Technical browser compatibility')}
                lang={currentLang}
                canonicalPath="/compatibility"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Compatibilité' : (lang === 'pt' ? 'Compatibilidade' : 'Compatibility'), path: `/${lang}/compatibility` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <CompatibilityPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
