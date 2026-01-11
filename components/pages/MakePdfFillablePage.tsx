import React from 'react';
import { PenTool } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const MakePdfFillablePage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const steps = [
        { name: t.upload, text: t.fillableStep1 },
        { name: t.select, text: t.fillableStep2 },
        { name: t.fillify, text: t.fillableStep3 },
        { name: t.download, text: t.fillableStep4 }
    ];

    return (
        <>
            <SEO
                title={t.seo.fillableTitle}
                description={t.seo.fillableDesc}
                canonicalPath="/how-to-make-a-pdf-fillable"
                lang={lang}
                steps={steps}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Rendre un PDF remplissable' : lang === 'pt' ? 'Como Tornar um PDF Preenchível' : 'How to Make a PDF Fillable', path: lang === 'en' ? '/how-to-make-a-pdf-fillable' : `/${lang}/how-to-make-a-pdf-fillable` }
                ]}
            />
            <PageLayout title={t.fillablePageTitle} subtitle={t.fillablePageSubtitle} icon={<PenTool size={32} />}>
                <div className="space-y-8 text-gray-700 dark:text-gray-300">
                    <p className="text-lg font-medium">{t.fillableIntro}</p>

                    <div className="grid gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600 flex gap-4">
                            <div className="bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">1</div>
                            <div><h3 className="font-bold text-gray-900 dark:text-gray-100">{t.upload}</h3><p>{t.fillableStep1}</p></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600 flex gap-4">
                            <div className="bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">2</div>
                            <div><h3 className="font-bold text-gray-900 dark:text-gray-100">{t.select}</h3><p>{t.fillableStep2}</p></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600 flex gap-4">
                            <div className="bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">3</div>
                            <div><h3 className="font-bold text-gray-900 dark:text-gray-100">{t.fillify}</h3><p>{t.fillableStep3}</p></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600 flex gap-4">
                            <div className="bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">4</div>
                            <div><h3 className="font-bold text-gray-900 dark:text-gray-100">{t.download}</h3><p>{t.fillableStep4}</p></div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-6 rounded-xl">
                        <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">{t.fillableWhy}</h4>
                        <p className="text-blue-800 dark:text-blue-400">{t.fillableWhyText}</p>
                        <p className="text-blue-800 dark:text-blue-400 mt-2 font-semibold">{t.fillableProTip}</p>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
