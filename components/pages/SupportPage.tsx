import React from 'react';
import { Coffee } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';

interface PageProps {
    lang: Language;
}

export const SupportPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const supportSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "pdfcanada.ca",
        "url": "https://pdfcanada.ca",
        "description": translations[lang].seo.supportDesc,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressCountry": "CA"
        },
        "mainEntity": t.supportPage.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };
    return (
        <>
            <SEO title={translations[lang].seo.supportTitle} description={translations[lang].seo.supportDesc} canonicalPath="/support" schema={supportSchema} />
            <PageLayout title={translations[lang].navSupport} icon={<Coffee size={32} />}>
                <div className="text-center text-gray-600 dark:text-gray-400 space-y-8">
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                        {t.supportPage.content}
                    </p>
                    <p>
                        If you like what we do, tell a friend. That's the Canadian way.
                    </p>
                    <div className="pt-8">
                        <a href="https://buy.stripe.com/8x228t4yIdCx2mE2ic6Zy04" target="_blank" rel="noopener noreferrer" className="inline-block bg-canada-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-canada-darkRed transition-colors">
                            {t.timbitsButton} ☕
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 text-left max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {t.supportPage.faq.map((item, i) => (
                            <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-100 dark:border-gray-600">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">{item.question}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
