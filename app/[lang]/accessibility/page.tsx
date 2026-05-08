import type { Metadata } from 'next';
import { AccessibilityPage } from '@/components/pages/AccessibilityPage';
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
        title: lang === 'fr' ? 'Déclaration d\'Accessibilité | pdfcanada.ca' : (lang === 'pt' ? 'Declaração de Acessibilidade | pdfcanada.ca' : 'Accessibility Statement | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Engagement de pdfcanada.ca envers l\'accessibilité web et la conformité WCAG 2.1.'
            : (lang === 'pt'
                ? 'Compromisso do pdfcanada.ca com a acessibilidade web e conformidade com WCAG 2.1.'
                : 'Learn about pdfcanada.ca\'s commitment to web accessibility and WCAG 2.1 compliance.'),
        path: '/accessibility',
        lang,
    });
}

export default async function AccessibilityRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Accessibilité' : (lang === 'pt' ? 'Acessibilidade' : 'Accessibility')}
                description={lang === 'fr' ? 'Déclaration d\'accessibilité web' : (lang === 'pt' ? 'Declaração de acessibilidade web' : 'Web accessibility statement')}
                lang={currentLang}
                canonicalPath="/accessibility"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Accessibilité' : (lang === 'pt' ? 'Acessibilidade' : 'Accessibility'), path: `/${lang}/accessibility` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <AccessibilityPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
