import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
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
        title: lang === 'fr' ? 'Contactez-nous | pdfcanada.ca' : (lang === 'pt' ? 'Contate-nos | pdfcanada.ca' : 'Contact Us | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Besoin d\'aide ? Contactez l\'équipe de pdfcanada.ca pour toute question sur nos outils PDF sécurisés.'
            : (lang === 'pt'
                ? 'Precisa de ajuda? Entre em contato com a equipe do pdfcanada.ca para qualquer dúvida sobre nossas ferramentas PDF seguras.'
                : 'Need help? Contact the pdfcanada.ca team for support, partnerships, or inquiries about our secure PDF tools.'),
        path: '/contact',
        lang,
    });
}

export default async function ContactRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Contact' : (lang === 'pt' ? 'Contato' : 'Contact')}
                description={lang === 'fr' ? 'Contactez pdfcanada.ca' : (lang === 'pt' ? 'Contate pdfcanada.ca' : 'Contact pdfcanada.ca')}
                lang={currentLang}
                canonicalPath="/contact"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Contact' : (lang === 'pt' ? 'Contato' : 'Contact'), path: `/${lang}/contact` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <ContactPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
