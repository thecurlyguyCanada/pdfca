import React from 'react';
import { AlertTriangle, Heart } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const SorryPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    return (
        <>
            <SEO title={t.seo.sorryTitle} description={t.seo.sorryDesc} canonicalPath="/sorry" />
            <PageLayout title={t.sorryTitle} icon={<AlertTriangle size={32} />}>
                <div className="text-center space-y-8">
                    <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">{t.sorryText1}</p>
                    <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl inline-block text-left mx-auto">
                        <ul className="space-y-4 text-canada-red font-medium">
                            <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList1}</li>
                            <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList2}</li>
                            <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList3}</li>
                        </ul>
                    </div>
                    <div className="pt-8 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-400">Signed, The Management</p>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
