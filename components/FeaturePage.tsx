import React from 'react';
import { translations } from '../utils/i18n';
import { ArrowLeft } from 'lucide-react';
import { SEO } from './SEO';
import { ToolType } from '../utils/types';

interface FeaturePageProps {
    tool: {
        id: ToolType;
        path: string;
    };
    content: {
        title: string;
        desc: string;
        h1: string;
        subtitle: string;
        content: string;
        steps?: string[];
        faq?: { question: string; answer: string }[];
    };
    lang: 'en' | 'fr';
    t: typeof translations['en'];
    onNavigateHome: () => void;
    toolSchemas?: any[];
    children: React.ReactNode;
}

export const FeaturePage: React.FC<FeaturePageProps> = ({
    tool,
    content,
    lang,
    t,
    onNavigateHome,
    toolSchemas,
    children
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 py-12 md:py-20 gap-12">
            <SEO
                title={content.title}
                description={content.desc}
                lang={lang}
                canonicalPath={tool.path}
                ogType="website"
                schema={toolSchemas}
            />

            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                <button
                    onClick={onNavigateHome}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider shadow-sm hover:text-canada-red hover:border-canada-red transition-all"
                >
                    <ArrowLeft size={12} />
                    {t.backToHome}
                </button>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                    {content.h1}
                </h1>

                <p className="text-xl text-canada-red font-medium">
                    {content.subtitle}
                </p>

                <div className="prose prose-lg text-gray-600 mx-auto md:mx-0">
                    {content.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))}

                    {content.steps && (
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.navHowTo}</h3>
                            <div className="space-y-4">
                                {content.steps.map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-canada-red flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                        <p className="pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {content.faq && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-6">
                                {content.faq.map((item, i) => (
                                    <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h4>
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full md:w-1/2 max-w-xl">
                <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col transition-all duration-300">
                    {children}
                </div>
            </div>
        </div>
    );
};
