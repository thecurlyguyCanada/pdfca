import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import PdfWhiteout from '@/components/tools/PdfWhiteout';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';
import { SocialShare } from '@/components/SocialShare';
import { RelatedTools } from '@/components/RelatedTools';
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
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${baseUrl}/${lang}/tools/remove-pdf-text`,
            type: 'website',
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function RemovePdfTextPage({ params }: { params: Promise<{ lang: string }> }) {
    // In Next.js 15+, params is a Promise
    const resolvedParams = await params;
    const lang = resolvedParams.lang;
    const currentLang = (['en', 'fr', 'pt'].includes(lang) ? lang : 'en') as Language;
    const t = translations[currentLang];

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
    const meta = content[currentLang] || content.en;

    return (
        <>
            <SEO
                title={meta.title}
                description={meta.description}
                lang={currentLang}
                canonicalPath={`/${currentLang}/tools/remove-pdf-text`}
                breadcrumbs={[
                    { name: currentLang === 'fr' ? 'Accueil' : (currentLang === 'pt' ? 'Início' : 'Home'), path: `/${currentLang}` },
                    { name: currentLang === 'en' ? 'Remove Text from PDF' : (currentLang === 'pt' ? 'Remover Texto de PDF' : 'Supprimer du Texte PDF'), path: `/${currentLang}/tools/remove-pdf-text` }
                ]}
                price="0"
                featureList={currentLang === 'en' ? [
                    'Remove text from PDF safely',
                    'Privacy-first local processing',
                    'Secure whiteout PDF tool',
                    'No server uploads'
                ] : (currentLang === 'pt' ? [
                    'Remover texto de PDF com segurança',
                    'Processamento local privado',
                    'Ferramenta de whiteout de PDF segura',
                    'Sem uploads para o servidor'
                ] : [
                    'Supprimer du texte PDF en toute sécurité',
                    'Traitement local privé',
                    'Outil de masquage PDF sécurisé',
                    'Sans chargement serveur'
                ])}
            />

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[
                            { name: currentLang === 'en' ? 'Tools' : (currentLang === 'pt' ? 'Ferramentas' : 'Outils'), path: `/tools` },
                            { name: currentLang === 'en' ? 'Remove Text' : (currentLang === 'pt' ? 'Remover Texto' : 'Supprimer Texte') }
                        ]}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 dark:bg-red-900/20 text-canada-red rounded-3xl mb-6 shadow-sm">
                                <Eraser className="w-8 h-8 text-canada-red" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                                {currentLang === 'en' ? "Remove Text from PDF" : (currentLang === 'pt' ? "Remover Texto de PDF" : "Supprimer du Texte PDF")}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {currentLang === 'en'
                                    ? 'Select any text area to "white it out". Perfect for removing sensitive information from forms or applications without changing the layout.'
                                    : (currentLang === 'pt'
                                        ? 'Selecione qualquer área de texto para "apagá-la". Perfeito para remover informações confidenciais de formulários ou aplicativos sem alterar o layout.'
                                        : 'Sélectionnez une zone de texte pour la "blanchir". Parfait pour supprimer des informations sensibles sans modifier la mise en page.')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-premium overflow-hidden border border-gray-100 dark:border-gray-800">
                            <PdfWhiteout lang={currentLang} />
                        </div>

                        {/* Social Share */}
                        <div className="mt-8 flex justify-center">
                            <SocialShare
                                url={`https://www.pdfcanada.ca/${currentLang}/tools/remove-pdf-text`}
                                title={meta.title}
                                lang={currentLang}
                            />
                        </div>

                        {/* Related Tools */}
                        <div className="mt-20">
                            <RelatedTools 
                                lang={currentLang} 
                                currentPath="/tools/remove-pdf-text" 
                                relatedSlugs={['delete-pdf-pages', 'rotate-pdf', 'compress-pdf', 'merge-pdf', 'split-pdf']}
                            />
                        </div>
                    </div>
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}
