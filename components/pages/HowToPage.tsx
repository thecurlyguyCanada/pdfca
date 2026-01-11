import React from 'react';
import { HelpCircle } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const HowToPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const steps = [
        { name: 'Select Tool', text: t.howtoStep1 },
        { name: 'Upload PDF', text: t.howtoStep2 },
        { name: 'Edit/Process', text: t.howtoStep3 },
        { name: 'Download', text: t.howtoStep4 }
    ];

    return (
        <>
            <SEO
                title={t.seo.howtoTitle}
                description={t.seo.howtoDesc}
                canonicalPath="/howto"
                lang={lang}
                steps={steps}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: lang === 'fr' ? 'Comment Utiliser' : (lang === 'pt' ? 'Como Usar' : 'How To'), path: `/${lang}/howto` }
                ]}
            />
            <PageLayout
                title={t.howtoTitle}
                icon={<HelpCircle size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: `/${lang}` },
                    { name: lang === 'fr' ? 'Guide' : (lang === 'pt' ? 'Como Usar' : 'How To'), href: '#' }
                ]}
            >
                <div className="grid gap-6">
                    {[t.howtoStep1, t.howtoStep2, t.howtoStep3, t.howtoStep4].map((step, i) => (
                        <div key={i} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600">
                            <span className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-sm font-bold text-canada-red mr-4">
                                {i + 1}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{step}</span>
                        </div>
                    ))}
                </div>
            </PageLayout>
        </>
    );
};
