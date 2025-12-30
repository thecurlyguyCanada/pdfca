import React from 'react';
import { Info, Shield, Heart, Users, CheckCircle2, Cpu, Lock, Globe } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { SEO } from '../SEO';
import { PageLayout } from '../PageLayout';
import { AuthorBio, getAuthorSchema } from '../AuthorBio';

interface PageProps {
    lang: Language;
}

export const AboutUsPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const aboutT = t.aboutPage;

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": getAuthorSchema(),
        "name": t.seo.aboutTitle,
        "description": t.seo.aboutDesc,
        "url": `https://pdfcanada.ca/${lang}/about`,
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
        "publisher": getAuthorSchema()
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
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-12 text-center">
                        {aboutT.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                                <Heart className="text-canada-red" /> {aboutT.mission}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {aboutT.missionText}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                                <Users className="text-blue-500" /> {aboutT.story}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {aboutT.storyText}
                            </p>
                        </section>
                    </div>

                    {/* Trust Section - Strong E-A-T Signal */}
                    <section className="mb-20 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] p-10 md:p-16 border border-gray-100 dark:border-gray-800">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 text-center">
                            {aboutT.trustTitle}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Shield className="text-green-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{aboutT.trust1Title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{aboutT.trust1Text}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Lock className="text-canada-red" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{aboutT.trust2Title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{aboutT.trust2Text}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <CheckCircle2 className="text-blue-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{aboutT.trust3Title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{aboutT.trust3Text}</p>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-6">
                                <Cpu className="text-purple-500" /> {aboutT.techTitle}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {aboutT.techText}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['WebAssembly', 'WASM', 'jspdf', 'pdf-lib', 'Tesseract.js', 'React'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-mono text-gray-500">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-6">
                                <Globe className="text-green-500" /> {aboutT.values}
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: aboutT.value1Title, text: aboutT.value1Text },
                                    { title: aboutT.value2Title, text: aboutT.value2Text },
                                    { title: aboutT.value3Title, text: aboutT.value3Text }
                                ].map((v, i) => (
                                    <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4">
                                        <div className="w-8 h-8 shrink-0 bg-canada-red/10 rounded-lg flex items-center justify-center text-canada-red font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">{v.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{v.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Author/Team section for E-A-T */}
                    <div className="pt-16 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </>
    );
};
