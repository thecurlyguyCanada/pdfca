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
    const steps = [t.howtoStep1, t.howtoStep2, t.howtoStep3, t.howtoStep4];
    const howtoSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.howtoTitle,
        "description": t.seo.howtoDesc,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "text": step
        }))
    };
    return (
        <>
            <SEO title={t.seo.howtoTitle} description={t.seo.howtoDesc} canonicalPath="/howto" schema={howtoSchema} />
            <PageLayout title={t.howtoTitle} icon={<HelpCircle size={32} />}>
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
