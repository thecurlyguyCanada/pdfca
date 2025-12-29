import React from 'react';
import { Info, Shield, Heart, Users } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const AboutUsPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const aboutT = t.aboutPage;

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": t.seo.aboutTitle,
        "description": t.seo.aboutDesc,
        "url": `https://pdfcanada.ca/${lang}/about`,
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA'
    };

    return (
        <>
            <SEO
                title={t.seo.aboutTitle}
                description={t.seo.aboutDesc}
                canonicalPath="/about"
                lang={lang}
                schema={aboutSchema}
            />
            <PageLayout title={aboutT.title} icon={<Info size={32} />}>
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-8">
                        {aboutT.subtitle}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                            <Heart className="text-red-500" /> {aboutT.mission}
                        </h2>
                        <p>{aboutT.missionText}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                            <Info className="text-blue-500" /> {aboutT.story}
                        </h2>
                        <p>{aboutT.storyText}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-6">
                            <Shield className="text-green-500" /> {aboutT.values}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{aboutT.value1Title}</h3>
                                <p className="text-sm">{aboutT.value1Text}</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{aboutT.value2Title}</h3>
                                <p className="text-sm">{aboutT.value2Text}</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{aboutT.value3Title}</h3>
                                <p className="text-sm">{aboutT.value3Text}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </PageLayout>
        </>
    );
};
