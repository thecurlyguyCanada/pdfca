import React from 'react';
import { Shield } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const PrivacyPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const privacySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": t.seo.privacyTitle,
        "description": t.seo.privacyDesc,
        "url": "https://pdfcanada.ca/privacy",
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA'
    };
    return (
        <>
            <SEO title={t.seo.privacyTitle} description={t.seo.privacyDesc} canonicalPath="/privacy" schema={privacySchema} />
            <PageLayout title={t.privacyTitle} icon={<Shield size={32} />}>
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="mb-6">{t.privacyText1}</p>
                    <p className="mb-6">{t.privacyText2}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4 items-start">
                        <Shield className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Local Processing Guarantee</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-400">We do not operate backend servers for file processing. Everything happens right here in your browser using WebAssembly.</p>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
