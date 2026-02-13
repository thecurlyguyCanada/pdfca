import type { Metadata } from 'next';
import { HowToPage } from '@/components/pages/HowToPage';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { constructMetadata } from '@/lib/metadata';

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
        title: lang === 'fr' ? 'Comment Utiliser les Outils PDF - Guide de Sécurité | pdfcanada.ca' : (lang === 'pt' ? 'Como Usar Ferramentas PDF - Guia de Segurança | pdfcanada.ca' : 'How to Use PDF Tools - Step-by-Step Security Guide | pdfcanada.ca'),
        description: lang === 'fr'
            ? 'Comment Utiliser les Outils PDF - Apprenez à fusionner et convertir vos documents en sécurité. Traitement 100% local pour garantir la confidentialité. Essai.'
            : (lang === 'pt'
                ? 'Como Usar Ferramentas PDF - Aprenda a mesclar e converter documentos com segurança no navegador. Processamento 100% local para segurança total. Teste agora.'
                : 'How to Use PDF Tools - Learn to merge, split, and convert documents safely in your browser. 100% private, local-first processing ensures safety. Try it now.'),
        path: '/howto',
        lang
    });
}

export default async function HowToRoute({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    return (
        <>
            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main id="main-content" className="flex-grow">
                    <HowToPage lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
