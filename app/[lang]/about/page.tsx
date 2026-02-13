import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
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
        title: lang === 'fr' ? 'À propos de pdfcanada.ca - Outils PDF Sécurisés et Privés | pdfcanada.ca' : (lang === 'pt' ? 'Sobre pdfcanada.ca - Ferramentas PDF Seguras e Privadas | pdfcanada.ca' : 'About pdfcanada.ca: Secure PDF Tools & Privacy-First Processing | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'À propos de pdfcanada.ca - Découvrez des outils PDF 100% privés avec traitement local. Pas d\'upload serveur, pas d\'inscription, conformité totale. Essayez maintenant.'
            : (lang === 'pt'
                ? 'Sobre pdfcanada.ca - Descubra ferramentas PDF 100% privadas com processamento local. Sem upload para servidor, sem cadastro, segurança total. Experimente agora.'
                : 'About pdfcanada.ca - Discover 100% private, local-first PDF tools optimized for security. No server uploads, no sign-ups, and PIPEDA compliant. Try it now.'),
        path: '/about',
        lang,
        keywords: lang === 'fr'
            ? ['à propos', 'mission', 'sécurité PDF', 'outils locaux', 'confidentialité']
            : (lang === 'pt' ? ['sobre nós', 'missão', 'ferramentas PDF seguras', 'privacidade'] : ['about us', 'mission', 'secure PDF tools', 'local PDF processing', 'privacy first'])
    });
}

export default async function AboutRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'À propos de nous' : (lang === 'pt' ? 'Sobre Nós' : 'About Us')}
                description={lang === 'fr' ? 'En savoir plus sur pdfcanada.ca' : (lang === 'pt' ? 'Saiba mais sobre pdfcanada.ca' : 'Learn more about pdfcanada.ca')}
                lang={currentLang}
                canonicalPath="/about"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'À propos' : (lang === 'pt' ? 'Sobre' : 'About'), path: `/${lang}/about` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <AboutPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
