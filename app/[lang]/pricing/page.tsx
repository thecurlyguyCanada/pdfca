import { PricingPage } from '@/components/pages/PricingPage';
import { Locale, i18n } from '@/lib/i18n-config';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Language } from '@/utils/i18n';
import { SEO } from '@/components/SEO';

import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;

    return constructMetadata({
        title: lang === 'fr' ? 'Tarification des Outils PDF - Simple et Transparent | pdfcanada.ca' : (lang === 'pt' ? 'Preços das Ferramentas PDF - Simples e Transparente | pdfcanada.ca' : 'PDF Tools Pricing - Free & Transparent Access | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Tarification des Outils PDF - Accédez aux fonctions premium en toute sécurité. Traitement 100% local, gratuit pour la plupart des outils. Voir les plans.'
            : (lang === 'pt'
                ? 'Preços das Ferramentas PDF - Acesse recursos premium com segurança. Processamento 100% local, grátis para a maioria das ferramentas. Ver planos.'
                : 'PDF Tools Pricing - Access premium PDF features with 100% private, local-first processing. Most tools are free forever with no sign-up required. View plans.'),
        path: '/pricing',
        lang
    });
}

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const currentLang = lang as Language;

    const seoTitle = lang === 'fr' ? 'Tarifs' : (lang === 'pt' ? 'Preços' : 'Pricing');
    const seoDesc = lang === 'fr' 
        ? 'Tarification des outils pdfcanada.ca' 
        : (lang === 'pt' ? 'Preços das ferramentas pdfcanada.ca' : 'Pricing of pdfcanada.ca tools');

    return (
        <>
            <SEO
                title={seoTitle}
                description={seoDesc}
                lang={currentLang}
                canonicalPath={`/${lang}/pricing`}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: seoTitle, path: `/${lang}/pricing` }
                ]}
            />
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <PricingPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
