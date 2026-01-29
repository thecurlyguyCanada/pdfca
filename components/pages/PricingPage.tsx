import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';

interface PageProps {
    lang: Language;
}

export const PricingPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const pricingSchema = {
        "@type": "Product",
        "name": "pdfcanada.ca PDF Tools",
        "description": t.seo.pricingDesc,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CAD",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <>
            <SEO
                title={t.seo.pricingTitle}
                description={t.seo.pricingDesc}
                canonicalPath="/pricing"
                lang={lang}
                ogType="product"
                schema={pricingSchema}
                faqs={t.pricingPage.faq.map((item: { question: string, answer: string }) => ({ q: item.question, a: item.answer }))}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Tarification' : lang === 'pt' ? 'Preços' : 'Pricing', path: lang === 'en' ? '/pricing' : `/${lang}/pricing` }
                ]}
            />
            <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t.pricingTitle}</h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">{t.pricingSubtitle}</p>
                    <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 prose dark:prose-invert">
                        <p>{t.pricingPage.content}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Free Tier */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border-2 border-gray-100 dark:border-gray-800 hover:border-canada-red/30 transition-all">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t.freePlan}</h3>
                        <div className="text-4xl font-bold text-canada-red mb-6">{t.freeCost}</div>
                        <ul className="space-y-4">
                            {[t.freeFeature1, t.freeFeature2, t.freeFeature3, t.freeFeature4].map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-8 bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-xl font-bold hover:bg-black dark:hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                            Start Now
                        </button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-900 rounded-3xl p-8 shadow-lg border-2 border-canada-red/20 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-canada-red text-white text-xs font-bold px-3 py-1 rounded-full">MOST POLITE</div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t.enterprisePlan}</h3>
                        <div className="text-4xl font-bold text-canada-red mb-6">{t.enterpriseCost}</div>
                        <ul className="space-y-4">
                            {[t.enterpriseFeature1, t.enterpriseFeature2, t.enterpriseFeature3].map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <CheckCircle2 className="text-canada-red shrink-0" size={20} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-8 bg-canada-red text-white py-3 rounded-xl font-bold hover:bg-canada-darkRed transition-all focus:outline-none focus:ring-2 focus:ring-canada-red focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                            Contact Sales (Jk it&apos;s free)
                        </button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">Common Questions</h2>
                    <div className="space-y-6">
                        {t.pricingPage.faq.map((item: { question: string, answer: string }, i: number) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">{item.question}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
