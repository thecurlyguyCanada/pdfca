'use client';

import Link from 'next/link';
import React from 'react';
import { Landmark, TrendingUp, PieChart, Lock, DollarSign, FileText, Smartphone, ShieldCheck } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Secure PDF Compression for Tax & Finance | pdfcanada.ca`,
            desc: `Compress bank statements and tax returns securely. No server uploads means your financial data stays safe.`
        },
        h1: `Financial Data Security: Compressing Tax & Bank Documents`,
        subtitle: "How to reduce file sizes for CRA portal uploads without risking identity theft.",

        intro: (
            <>
                Tax season brings a common headache: <strong>"File Too Large."</strong> You try to upload your supporting documents to the CRA or IRS portal, and they are rejected.
                <br /><br />
                The temptation is to Google "Free PDF Compress" and use the first result. <strong>Don't do it.</strong>
                <br /><br />
                Your tax return contains your logic, your Social Insurance Number (SIN), your address, and your income. Handing this to an anonymous server is a recipe for identity theft.
            </>
        ),

        sections: [
            {
                id: "identity-theft",
                title: "The Identity Theft Vector",
                content: (
                    <>
                        Financial PDFs are the "Gold Standard" for identity thieves. They provide a complete profile to open fraudulent credit lines in your name.
                        <br /><br />
                        <strong>The Server Risk:</strong> Even legitimate cloud services have been breached. If your tax return is sitting in a temporary cache on a compromised server, you are vulnerable.
                    </>
                )
            },
            {
                id: "secure-compression",
                title: "Secure Local Compression",
                content: (
                    <>
                        <strong>pdfcanada.ca</strong> solves this with <strong>Client-Side Compression</strong>.
                        <br /><br />
                        Our engine loads deeply optimized compression algorithms into your browser. When you compress a file:
                        1. Your private keys never leave your device.
                        2. The unencrypted content is visible <strong>only to you</strong>.
                        3. The compressed file is written directly to your Downloads folder.
                    </>
                )
            },
            {
                id: "finance-tips",
                title: "Tips for Accountants",
                content: (
                    <>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Lock className="text-green-500 mt-1" size={20} />
                                <div>
                                    <strong>Client Trust:</strong> Tell your clients you use "Local-Only" tools. It's a competitive advantage for your firm.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="text-blue-500 mt-1" size={20} />
                                <div>
                                    <strong>Speed:</strong> Compressing a 50MB Quickbooks report happens instantly, without waiting for uploads.
                                </div>
                            </li>
                        </ul>
                    </>
                )
            }
        ],

        cta: "Compress Safely",
        ctaBtn: "Optimize Finance Docs",
        related: "Finance Tools"
    },
    fr: {
        seo: {
            title: `Compression PDF Sécurisée pour Impôts & Finances | pdfcanada.ca`,
            desc: `Compressez vos relevés bancaires et déclarations d'impôts en toute sécurité. Pas d'envoi = pas de vol de données.`
        },
        h1: `Sécurité Financière : Compresser Impôts & Banque`,
        subtitle: "Comment réduire la taille des fichiers pour l'ARC sans risquer le vol d'identité.",

        intro: (
            <>
                La saison des impôts apporte un mal de tête : <strong>"Fichier Trop Volumineux."</strong>
                <br /><br />
                La tentation est de chercher "Compresser PDF Gratuit" et d'utiliser le premier lien. <strong>Ne le faites pas.</strong>
                <br /><br />
                Votre déclaration contient votre NAS, votre adresse et vos revenus. Donner cela à un serveur anonyme est une recette pour le vol d'identité.
            </>
        ),

        sections: [
            {
                id: "identity-theft",
                title: "Le Vecteur du Vol d'Identité",
                content: (
                    <>
                        Les PDF financiers sont l'étalon-or pour les voleurs.
                        <br /><br />
                        <strong>Le Risque Serveur :</strong> Même les services légitimes sont piratés. Si votre déclaration traîne dans un cache temporaire, vous êtes vulnérable.
                    </>
                )
            },
            {
                id: "secure-compression",
                title: "Compression Locale Sécurisée",
                content: (
                    <>
                        <strong>pdfcanada.ca</strong> résout cela avec la <strong>Compression Côté Client</strong>.
                        <br /><br />
                        Notre moteur charge des algorithmes optimisés dans votre navigateur.
                        1. Vos clés privées ne partent jamais.
                        2. Le contenu non chiffré est visible <strong>seulement par vous</strong>.
                    </>
                )
            },
            {
                id: "finance-tips",
                title: "Conseils pour Comptables",
                content: (
                    <>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Lock className="text-green-500 mt-1" size={20} />
                                <div>
                                    <strong>Confiance Client :</strong> Dites à vos clients que vous utilisez des outils "Locaux Uniquement".
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="text-blue-500 mt-1" size={20} />
                                <div>
                                    <strong>Vitesse :</strong> Compresser un rapport Quickbooks de 50 Mo est instantané.
                                </div>
                            </li>
                        </ul>
                    </>
                )
            }
        ],

        cta: "Compressez Sûrement",
        ctaBtn: "Optimiser Docs Finances",
        related: "Outils Finance"
    }
});

export const FinancePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Financial Professionals"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Landmark size={32} />}
            breadcrumbs={[
                { name: 'Home', href: '/' },
                { name: 'Finance', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/finance-pdf-security" lang={lang} schema={schema} />

            <div className="max-w-4xl mx-auto py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-green-50 dark:bg-green-900/10 rounded-3xl mb-12 border border-green-100 dark:border-green-900">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.id === "identity-theft" && <Lock className="text-red-500" />}
                                {section.id === "secure-compression" && <ShieldCheck className="text-green-500" />}
                                {section.id === "finance-tips" && <PieChart className="text-blue-500" />}
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-green-600 text-white rounded-[2rem] p-12 text-center shadow-xl shadow-green-500/20">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}`} className="inline-block bg-white text-green-600 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-8 text-center">{t.related}</h4>
                    <RelatedTools lang={lang} currentPath="/guides/finance-pdf-security" category="organize" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
