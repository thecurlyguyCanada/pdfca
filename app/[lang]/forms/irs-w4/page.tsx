import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { W4FormPage } from '@/components/pages/forms/W4FormPage';

// Static generation
// Static generation
export const dynamic = 'force-static';

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
            title: `IRS W-4 Form PDF - Secure Employee Withholding Online | pdfcanada.ca`,
            description: `IRS W-4 Form PDF - Fill and download your Employee's Withholding Certificate safely in your browser. 100% private, local-first processing keeps tax data safe.`,
        },
        fr: {
            title: `Formulaire IRS W-4 PDF - Retenue d'Impôt Sécurisée | pdfcanada.ca`,
            description: `Formulaire IRS W-4 PDF - Remplissez et téléchargez votre certificat de retenue d'impôt en sécurité. Traitement 100% local pour garantir la sécurité des données.`,
        },
        pt: {
            title: `Formulário IRS W-4 PDF - Retenção de Imposto Segura | pdfcanada.ca`,
            description: `Formulário IRS W-4 PDF - Preencha e baixe seu certificado de retenção de imposto com segurança. Processamento 100% local para garantir a segurança dos dados.`,
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
