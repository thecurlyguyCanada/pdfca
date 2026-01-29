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
        "@type": "WebPage",
        "name": t.seo.privacyTitle,
        "description": t.seo.privacyDesc,
        "url": "https://www.pdfcanada.ca/privacy",
        "inLanguage": lang === 'fr' ? 'fr-CA' : (lang === 'pt' ? 'pt-BR' : 'en-CA')
    };
    return (
        <>
            <SEO
                title={t.seo.privacyTitle}
                description={t.seo.privacyDesc}
                canonicalPath="/privacy"
                lang={lang}
                schema={privacySchema}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Confidentialité' : (lang === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'), path: `/${lang}/privacy` }
                ]}
            />
            <PageLayout
                title={t.privacyTitle}
                icon={<Shield size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: `/${lang}` },
                    { name: lang === 'fr' ? 'Confidentialité' : (lang === 'pt' ? 'Privacidade' : 'Privacy'), href: '#' }
                ]}
            >
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">{t.privacyEffectiveDate}</p>

                    <p className="mb-6">{t.privacyText1}</p>
                    <p className="mb-6">{t.privacyText2}</p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4 items-start mb-8">
                        <Shield className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">{t.privacyGuaranteeTitle}</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-400">{t.privacyGuaranteeText}</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyDataCollectionTitle}</h2>
                    <p className="mb-6">{t.privacyDataCollectionText}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyCookiesTitle}</h2>
                    <p className="mb-6">{t.privacyCookiesText}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyThirdPartyTitle}</h2>
                    <p className="mb-4">{t.privacyThirdPartyText1}</p>
                    <p className="mb-4">{t.privacyThirdPartyText2}</p>
                    <p className="mb-6">{t.privacyThirdPartyText3}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyYourRightsTitle}</h2>
                    <p className="mb-6">{t.privacyYourRightsText}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyChildrenTitle}</h2>
                    <p className="mb-6">{t.privacyChildrenText}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyContactTitle}</h2>
                    <p className="mb-6">{t.privacyContactText}</p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{t.privacyChangesTitle}</h2>
                    <p className="mb-6">{t.privacyChangesText}</p>
                </div>
            </PageLayout>
        </>
    );
};
