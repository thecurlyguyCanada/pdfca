'use client';

import Link from 'next/link';
import React from 'react';
import { Scale, Shield, Leaf, DollarSign, Globe, Lock, Zap, CheckCircle, XCircle, MapPin, Heart } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `iLovePDF vs pdfcanada.ca | ${CURRENT_YEAR} Comparison for Canadians`,
            desc: `Compare iLovePDF vs pdfcanada.ca for PDF tools. Discover why Canadians choose pdfcanada.ca for privacy, local processing, and free tools. Supporting Canadian users.`
        },
        h1: `iLovePDF vs pdfcanada.ca: The Best PDF Tool for Canadians in ${CURRENT_YEAR}`,
        subtitle: "A detailed comparison for Canadian users who value privacy, local data processing, and supporting Canadian alternatives.",

        intro: (
            <>
                Choosing between <strong>iLovePDF</strong> and <strong>pdfcanada.ca</strong>? While iLovePDF is a popular international platform, pdfcanada.ca offers a fundamentally different approach—one built on privacy-first principles and Canadian values.
                <br /><br />
                Here's everything you need to know to make the right choice for your PDF needs.
            </>
        ),

        sections: [
            {
                id: "quick-comparison",
                title: "Quick Comparison: iLovePDF vs pdfcanada.ca",
                content: (
                    <>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                        <th className="py-3 px-4 font-bold">Feature</th>
                                        <th className="py-3 px-4 font-bold text-center">pdfcanada.ca</th>
                                        <th className="py-3 px-4 font-bold text-center">iLovePDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Price</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">100% Free</span></td>
                                        <td className="py-3 px-4 text-center">Freemium ($7/mo Premium)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">File Upload to Server</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Never</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Required</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Local Browser Processing</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Yes</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> No</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Works Offline</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Yes</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> No</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">PIPEDA Compliance</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Automatic</td>
                                        <td className="py-3 px-4 text-center">Server-dependent</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">File Size Limit (Free)</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">Device RAM only</span></td>
                                        <td className="py-3 px-4 text-center">15-25 MB</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Daily Task Limits</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">Unlimited</span></td>
                                        <td className="py-3 px-4 text-center">Limited (free tier)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Account Required</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> No</td>
                                        <td className="py-3 px-4 text-center">For some features</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Data Stored on Server</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Never</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> 2 hours</td>
                                    </tr>
                                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Canadian-Made</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> <strong>Yes 🍁</strong></td>
                                        <td className="py-3 px-4 text-center">No (Spain)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy: The Core Difference",
                content: (
                    <>
                        <p className="mb-4">
                            The fundamental difference between <strong>iLovePDF and pdfcanada.ca</strong> is where your files are processed:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border-2 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-xl">
                                <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 text-lg flex items-center gap-2">
                                    <Shield size={20} /> pdfcanada.ca
                                </h3>
                                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> 100% local browser processing</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Files never leave your device</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Zero server storage</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Works completely offline</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Automatic PIPEDA compliance</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-xl">
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center gap-2">
                                    <Globe size={20} /> iLovePDF
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Files uploaded to servers</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Processing on remote infrastructure</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Files stored for 2 hours</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Requires internet connection</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Data leaves Canada (EU servers)</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-canada-red font-medium">
                            With pdfcanada.ca, there's nothing to breach—your documents never enter the cloud. For sensitive Canadian documents like tax forms, legal contracts, or medical records, this is essential.
                        </p>
                    </>
                )
            },
            {
                id: "canadian",
                title: "Why Choose Canadian? 🍁",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is proudly built in Canada, designed with Canadian privacy values and needs at its core.
                        </p>

                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl mb-6">
                            <h3 className="font-bold text-xl mb-2">🍁 Supporting Canadian Innovation</h3>
                            <p className="opacity-90">
                                When you choose pdfcanada.ca, you're supporting Canadian technology and keeping innovation close to home. We understand Canadian needs—from bilingual interfaces to documents for the CRA, IRCC, and provincial services.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><Leaf size={16} className="mt-0.5 shrink-0 text-green-600" /> Keeps tech jobs in Canada</li>
                                <li className="flex items-start gap-2"><Shield size={16} className="mt-0.5 shrink-0 text-canada-red" /> Data under Canadian jurisdiction</li>
                                <li className="flex items-start gap-2"><DollarSign size={16} className="mt-0.5 shrink-0 text-green-600" /> Strengthens Canadian economy</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><Globe size={16} className="mt-0.5 shrink-0 text-blue-600" /> Full French language support</li>
                                <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-canada-red" /> Built for Canadian document needs</li>
                                <li className="flex items-start gap-2"><Heart size={16} className="mt-0.5 shrink-0 text-pink-600" /> Community-focused development</li>
                            </ul>
                        </div>
                    </>
                )
            },
            {
                id: "pricing",
                title: "Price Comparison",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">pdfcanada.ca: Free Forever</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>$0 always</strong>: Every feature available for free</li>
                            <li><strong>No limits</strong>: Unlimited files, unlimited usage</li>
                            <li><strong>No account needed</strong>: Just use it</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">iLovePDF Pricing</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Free</strong>: Limited tasks, file size restrictions</li>
                            <li><strong>Premium ($7 USD/mo)</strong>: Higher limits, batch processing</li>
                            <li><strong>Business ($6/user/mo)</strong>: Team features</li>
                        </ul>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                            <p className="text-green-700 dark:text-green-300">
                                <strong>Save $84+ CAD/year</strong> by using pdfcanada.ca instead of iLovePDF Premium—plus get better privacy.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "verdict",
                title: "The Verdict",
                content: (
                    <>
                        <div className="bg-gray-900 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-3">🍁 For Canadians, the Choice is Clear</h3>
                            <p className="opacity-90 mb-4">
                                For everyday PDF tasks—merging, splitting, compressing, converting—<strong>pdfcanada.ca provides everything you need for free</strong>, with total privacy and Canadian values built in.
                            </p>
                            <p className="opacity-90">
                                Choose iLovePDF only if you specifically need OCR text extraction or their desktop app. For everything else, pdfcanada.ca is the smarter, more private choice.
                            </p>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            { q: "Is pdfcanada.ca really free?", a: "Yes! 100% free with no limits, watermarks, or premium tier." },
            { q: "How is pdfcanada.ca more private?", a: "Files process in your browser and never upload to a server. iLovePDF uploads files to their servers." },
            { q: "Is pdfcanada.ca Canadian?", a: "Yes! Built in Canada with bilingual support and Canadian privacy compliance." },
            { q: "Can I use pdfcanada.ca offline?", a: "Yes! Once loaded, it works without internet." },
            { q: "What about file size limits?", a: "pdfcanada.ca has no artificial limits—only your device's memory." }
        ],

        ctaTitle: "Try pdfcanada.ca Today",
        ctaButton: "Start Using Free PDF Tools",
        ctaSubtext: "Free Forever. No Uploads. Proudly Canadian. 🍁",
        quickAnswer: {
            question: "iLovePDF or pdfcanada.ca?",
            answer: "For Canadians: pdfcanada.ca. It's 100% free, completely private (no uploads), and Canadian-made.",
            tool: "PDF Tools Comparison",
            steps: ["Privacy first", "Free unlimited use", "Support Canadian tech"]
        }
    },
    fr: {
        seo: {
            title: `iLovePDF vs pdfcanada.ca | Comparaison ${CURRENT_YEAR} pour Canadiens`,
            desc: `Comparez iLovePDF et pdfcanada.ca. Découvrez pourquoi les Canadiens choisissent pdfcanada.ca pour la confidentialité et le traitement local.`
        },
        h1: `iLovePDF vs pdfcanada.ca : Le Meilleur Outil PDF pour les Canadiens`,
        subtitle: "Comparaison pour les Canadiens qui valorisent la confidentialité et le soutien aux alternatives canadiennes.",
        intro: (<>Comparez <strong>iLovePDF</strong> et <strong>pdfcanada.ca</strong> pour trouver le meilleur outil PDF pour vos besoins canadiens.</>),
        sections: [
            { id: "comparison", title: "Comparaison Rapide", content: (<><p className="mb-4"><strong>pdfcanada.ca</strong> : Gratuit, traitement local, pas de téléchargement serveur, fait au Canada 🍁</p><p><strong>iLovePDF</strong> : Freemium, téléchargement requis, serveurs en Espagne</p></>) },
            { id: "canadian", title: "Soutenir le Canada 🍁", content: (<><p>pdfcanada.ca est fièrement canadien avec support bilingue complet et conformité LPRPDE automatique.</p></>) }
        ],
        faq: [
            { q: "pdfcanada.ca est-il gratuit?", a: "Oui ! 100% gratuit sans limites." },
            { q: "pdfcanada.ca est-il canadien?", a: "Oui ! Construit au Canada avec support français complet." }
        ],
        ctaTitle: "Essayez pdfcanada.ca",
        ctaButton: "Commencer Gratuitement",
        ctaSubtext: "Gratuit. Sans Téléchargement. Fièrement Canadien. 🍁",
        quickAnswer: { question: "iLovePDF ou pdfcanada.ca?", answer: "Pour les Canadiens : pdfcanada.ca. Gratuit, privé, canadien.", tool: "Comparaison PDF", steps: ["Confidentialité", "Gratuit", "Canadien"] }
    },
    pt: {
        seo: {
            title: `iLovePDF vs pdfcanada.ca | Comparação ${CURRENT_YEAR} para Canadenses`,
            desc: `Compare iLovePDF e pdfcanada.ca para ferramentas PDF. Descubra por que canadenses escolhem pdfcanada.ca.`
        },
        h1: `iLovePDF vs pdfcanada.ca: A Melhor Ferramenta PDF para Canadenses`,
        subtitle: "Comparação para usuários canadenses que valorizam privacidade e apoio a alternativas canadenses.",
        intro: (<>Compare <strong>iLovePDF</strong> e <strong>pdfcanada.ca</strong> para encontrar a melhor ferramenta PDF.</>),
        sections: [
            { id: "comparison", title: "Comparação Rápida", content: (<><p className="mb-4"><strong>pdfcanada.ca</strong>: Grátis, processamento local, sem upload, feito no Canadá 🍁</p><p><strong>iLovePDF</strong>: Freemium, upload requerido, servidores na Espanha</p></>) },
            { id: "canadian", title: "Apoie o Canadá 🍁", content: (<><p>pdfcanada.ca é orgulhosamente canadense com suporte bilíngue e conformidade automática com privacidade.</p></>) }
        ],
        faq: [
            { q: "pdfcanada.ca é grátis?", a: "Sim! 100% grátis sem limites." },
            { q: "pdfcanada.ca é canadense?", a: "Sim! Feito no Canadá." }
        ],
        ctaTitle: "Experimente pdfcanada.ca",
        ctaButton: "Começar Grátis",
        ctaSubtext: "Grátis. Sem Uploads. Orgulhosamente Canadense. 🍁",
        quickAnswer: { question: "iLovePDF ou pdfcanada.ca?", answer: "Para canadenses: pdfcanada.ca. Grátis, privado, canadense.", tool: "Comparação PDF", steps: ["Privacidade", "Grátis", "Canadense"] }
    }
});

export const IlovepdfVsPdfcanadaGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/ilovepdf-vs-pdfcanada" faqs={t.faq} lang={lang} quickAnswer={t.quickAnswer} breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides/ultimate-pdf-guide' }, { name: 'iLovePDF vs pdfcanada.ca', path: '/guides/ilovepdf-vs-pdfcanada' }]} />
            <PageLayout title={t.h1} subtitle={t.subtitle} icon={<Scale size={32} />} breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/ultimate-pdf-guide' }, { name: 'iLovePDF vs pdfcanada.ca', href: '#' }]}>
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">{t.intro}</div>
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-canada-red/10 text-canada-red font-black text-xl">{idx + 1}</span><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2></div>
                                <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">{section.content}</div>
                            </section>
                        ))}
                    </div>
                    <div className="my-16"><h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-white">FAQ</h3><div className="grid gap-4">{t.faq.map((item: any, i: number) => (<div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"><h4 className="font-bold mb-2 text-gray-900 dark:text-white">{item.q}</h4><p className="text-gray-600 dark:text-gray-400">{item.a}</p></div>))}</div></div>
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-[2rem] text-center text-white shadow-2xl"><h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2><p className="text-lg mb-8 opacity-90">{t.ctaSubtext}</p><Link href="/" className="inline-block bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-lg">{t.ctaButton}</Link></div>
                    <AISnapshot question={t.quickAnswer.question} answer={t.quickAnswer.answer} toolName={t.quickAnswer.tool} steps={t.quickAnswer.steps} lang={lang} />
                    <RelatedTools lang={lang} currentPath="/guides/ilovepdf-vs-pdfcanada" category="other" />
                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
