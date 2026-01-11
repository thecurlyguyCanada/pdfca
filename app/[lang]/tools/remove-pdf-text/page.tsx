import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import PdfWhiteout from '@/components/tools/PdfWhiteout';
import { PageLayout } from '@/components/PageLayout';
import { translations, Language } from '@/utils/i18n';
import { Eraser } from 'lucide-react';

export const metadata = {
    title: 'Remove Text from PDF | Whiteout PDF Tool',
    description: 'Easily cover and remove sensitive text from your PDF documents online without breaking formatting.',
};

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
