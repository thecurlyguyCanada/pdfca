import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import PdfWhiteout from '@/components/tools/PdfWhiteout';
import { PageLayout } from '@/components/PageLayout';
import { translations, Language } from '@/utils/i18n';
import { Eraser } from 'lucide-react';

import type { Metadata } from 'next';
import { Locale } from '@/lib/i18n-config';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';

    const content = {
        en: {
            title: 'Remove Text from PDF - Secure Whiteout PDF Tool | pdfcanada.ca',
            description: 'Remove Text from PDF - Easily cover and remove sensitive text from PDF documents online. 100% private, local-first processing keeps your data safe. Free tool.',
        },
        fr: {
            title: 'Supprimer du texte d\'un PDF - Outil de masquage sécurisé | pdfcanada.ca',
            description: 'Supprimer du texte d\'un PDF - Masquez facilement les informations sensibles. Traitement 100% local, vos fichiers ne quittent jamais votre appareil. Gratuit.',
        },
        pt: {
            title: 'Remover Texto de PDF - Ferramenta de Whiteout Segura | pdfcanada.ca',
            description: 'Remover Texto de PDF - Oculte e remova facilmente texto sensível de seus documentos PDF online. Processamento 100% local para segurança total. Grátis.',
        }
    };

    const meta = content[lang] || content.en;

    return {
        title: meta.title,
        description: meta.description,
        keywords: [
            'remove text from pdf',
            'whiteout pdf',
            'pdf whiteout tool',
            'mask pdf text',
            'redact pdf online free',
            'hide sensitive info in pdf',
            'pdf text remover',
            'edit pdf text safely'
        ],
        alternates: {
            canonical: `${baseUrl}/${lang}/tools/remove-pdf-text`,
            languages: {
                'en-CA': `${baseUrl}/en/tools/remove-pdf-text`,
                'fr-CA': `${baseUrl}/fr/tools/remove-pdf-text`,
                'pt-BR': `${baseUrl}/pt/tools/remove-pdf-text`,
                'x-default': `${baseUrl}/en/tools/remove-pdf-text`,
            },
        },
    };
}

export default async function RemovePdfTextPage({ params }: { params: Promise<{ lang: string }> }) {
    // In Next.js 15+, params is a Promise
    const resolvedParams = await params;
    const lang = resolvedParams.lang;
    const currentLang = (['en', 'fr'].includes(lang) ? lang : 'en') as Language;
    const t = translations[currentLang];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header lang={currentLang} />

            <main className="flex-grow pt-24 pb-20">
                <PageLayout
                    title={currentLang === 'en' ? "Remove Text from PDF" : "Supprimer du Texte PDF"}
                    icon={<Eraser className="w-8 h-8 md:w-10 md:h-10 text-canada-red" />}
                    breadcrumbs={[
                        { name: t.builtIn, href: `/${currentLang}` },
                        { name: currentLang === 'en' ? "Whiteout Tool" : "Outil Whiteout", href: `/${currentLang}/tools/remove-pdf-text` }
                    ]}
                >
                    <div className="text-center mb-8">
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {currentLang === 'en'
                                ? 'Select any text area to "white it out". Perfect for removing sensitive information from forms or applications without changing the layout.'
                                : 'Sélectionnez une zone de texte pour la "blanchir". Parfait pour supprimer des informations sensibles sans modifier la mise en page.'}
                        </p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-premium overflow-hidden border border-gray-100">
                        <PdfWhiteout lang={currentLang} />
                    </div>
                </PageLayout>
            </main>

            <Footer lang={currentLang} />
        </div>
    );
}
