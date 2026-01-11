import React from 'react';
import { FileText } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const TermsPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const termsSchema = {
        "@type": "WebPage",
        "name": t.seo.termsTitle,
        "description": t.seo.termsDesc,
        "url": "https://www.pdfcanada.ca/terms",
        "inLanguage": lang === 'fr' ? 'fr-CA' : (lang === 'pt' ? 'pt-BR' : 'en-CA')
    };
    return (
        <>
            <SEO
                title={t.seo.termsTitle}
                description={t.seo.termsDesc}
                canonicalPath="/terms"
                lang={lang}
                schema={termsSchema}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? "Conditions d'utilisation" : (lang === 'pt' ? 'Termos de Serviço' : 'Terms of Service'), path: `/${lang}/terms` }
                ]}
            />
            <PageLayout
                title={t.termsTitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: `/${lang}` },
                    { name: lang === 'fr' ? 'Conditions' : (lang === 'pt' ? 'Termos' : 'Terms'), href: '#' }
                ]}
            >
                <div className="space-y-6 text-gray-600 dark:text-gray-400">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 shrink-0">1</div>
                        <p className="pt-1">{t.termsText1}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 shrink-0">2</div>
                        <p className="pt-1">{t.termsText2}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 shrink-0">3</div>
                        <p className="pt-1">{t.termsText3}</p>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
