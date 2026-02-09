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
        title: lang === 'fr' ? 'À propos de pdfcanada.ca - Outils PDF Locaux Gratuits et Sécurisés' : (lang === 'pt' ? 'Sobre pdfcanada.ca - Ferramentas PDF Locais Gratuitas e Seguras' : 'About pdfcanada.ca - Free & Secure Local PDF Tools'),
        description: lang === 'fr'
            ? 'Découvrez pdfcanada.ca : Outils PDF 100% gratuits et privés. Vos fichiers sont traités localement sur votre appareil. Aucune inscription, aucun téléchargement requis.'
            : (lang === 'pt'
                ? 'Conheça o pdfcanada.ca: Ferramentas PDF 100% gratuitas e privadas. Seus arquivos são processados localmente no seu dispositivo. Sem cadastro, sem upload.'
                : 'Learn about pdfcanada.ca: 100% free and private PDF tools. Your files are processed locally on your device. No sign-up, no server uploads required.'),
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
