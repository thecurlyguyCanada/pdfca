import type { Metadata } from 'next';
import { SecurityPage } from '@/components/pages/SecurityPage';
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
        title: lang === 'fr' ? 'Architecture de Sécurité PDF - Pas d\'Upload | pdfcanada.ca' : (lang === 'pt' ? 'Arquitetura de Segurança PDF - Sem Upload | pdfcanada.ca' : 'PDF Security Architecture: Why Zero-Upload Matters | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Découvrez comment pdfcanada.ca protège vos fichiers avec le traitement WebAssembly local. Pas d\'upload, pas de stockage serveur, confidentialité totale.'
            : (lang === 'pt'
                ? 'Descubra como o pdfcanada.ca protege seus arquivos com processamento local WebAssembly. Sem upload, sem armazenamento em servidor, privacidade total.'
                : 'Technical deep dive into how pdfcanada.ca protects your files using local-first WebAssembly processing. No uploads, no server storage, total privacy.'),
        path: '/security',
        lang,
    });
}

export default async function SecurityRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <SEO
                title={lang === 'fr' ? 'Sécurité' : (lang === 'pt' ? 'Segurança' : 'Security')}
                description={lang === 'fr' ? 'Architecture de sécurité technique' : (lang === 'pt' ? 'Arquitetura de segurança técnica' : 'Technical security architecture')}
                lang={currentLang}
                canonicalPath="/security"
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Sécurité' : (lang === 'pt' ? 'Segurança' : 'Security'), path: `/${lang}/security` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <SecurityPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
