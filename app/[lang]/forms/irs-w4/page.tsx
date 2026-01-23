import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { W4FormPage } from '@/components/pages/forms/W4FormPage';

// Static generation
export const revalidate = 86400;

export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';
    const CURRENT_YEAR = new Date().getFullYear();

    const content = {
        en: {
            title: `IRS W-4 Form ${CURRENT_YEAR} | Free Fillable Template | pdfcanada.ca`,
            description: `Fill out IRS W-4 Employee's Withholding Certificate online. Free ${CURRENT_YEAR} printable template. Edit, sign, and download instantly. 50% cheaper than competitors.`,
        },
        fr: {
            title: `Formulaire IRS W-4 ${CURRENT_YEAR} | Modèle Remplissable Gratuit | pdfcanada.ca`,
            description: `Remplissez le formulaire IRS W-4 en ligne. Modèle imprimable ${CURRENT_YEAR}. Éditez, signez et téléchargez instantanément.`,
        },
        pt: {
            title: `Formulário IRS W-4 ${CURRENT_YEAR} | Modelo Preenchível Grátis | pdfcanada.ca`,
            description: `Preencha o formulário IRS W-4 online. Modelo ${CURRENT_YEAR} para impressão. Edite, assine e baixe instantaneamente.`,
        }
    };

    const meta = content[lang] || content.en;

    return {
        title: meta.title,
        description: meta.description,
        keywords: [
            'irs w-4 form',
            'w-4 form 2025',
            'w-4 form 2026',
            'w4 form pdf',
            'employee withholding certificate',
            'w-4 fillable',
            'w-4 printable',
            'irs w4 download',
            'w-4 form online',
            'federal tax withholding form'
        ],
        alternates: {
            canonical: `${baseUrl}/${lang}/forms/irs-w4`,
            languages: {
                'en-CA': `${baseUrl}/en/forms/irs-w4`,
                'fr-CA': `${baseUrl}/fr/forms/irs-w4`,
                'pt-BR': `${baseUrl}/pt/forms/irs-w4`,
                'x-default': `${baseUrl}/en/forms/irs-w4`,
            },
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${baseUrl}/${lang}/forms/irs-w4`,
            type: 'article',
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function IRSW4FormPage({
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
                    <Breadcrumb
                        lang={currentLang}
                        items={[
                            { name: 'Forms' },
                            { name: 'IRS W-4' }
                        ]}
                    />

                    <W4FormPage lang={currentLang} />
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}
