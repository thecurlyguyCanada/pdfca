'use client';

import Link from 'next/link';
import React from 'react';
import { Scale, Gavel, Shield, Briefcase, FileText, Lock, Globe, AlertTriangle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Secure PDF Tools for Legal Professionals (Privilege Protected) | pdfcanada.ca`,
            desc: `The only PDF toolkit designed for Canadian lawyers that guarantees 100% Solicitor-Client Privilege. No uploads, no servers, full data sovereignty.`
        },
        h1: `Digital Sovereignty for Lawyers: The Safe Way to Manage PDFs`,
        subtitle: "How to merge, split, and redact client files without ever uploading them to the cloud.",

        intro: (
            <>
                For legal professionals, <strong>confidentiality is not optional</strong> &ndash; it is the foundation of your practice.
                <br /><br />
                Yet, unsecure habits are rampant. When you upload a client's affidavit to a "Free Online PDF Merger," you are potentially waiving <strong>Solicitor-Client Privilege</strong> by handing data to a third party.
                <br /><br />
                We built <strong>pdfcanada.ca</strong> as a "Zero-Trust" solution. Your files are processed locally on your machine, ensuring you maintain absolute chain of custody over your eviudence.
            </>
        ),

        sections: [
            {
                id: "privilege-risk",
                title: "The 'Cloud' Risk to Privilege",
                content: (
                    <>
                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border-l-4 border-red-500 mb-6 font-medium text-red-900 dark:text-red-200">
                            "Lawyers must take reasonable steps to ensure that their use of technology does not unwittingly expose client data."
                            <div className="text-sm mt-2 opacity-75">&minus; Law Society Guidelines (General Principle)</div>
                        </div>
                        When you use Adobe Creative Cloud or generic online tools, your files travel to servers (often in the US). This subjects them to:
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>The CLOUD Act:</strong> US law enforcement can compel service providers to hand over data, regardless of where it is stored.</li>
                            <li><strong>Data Breaches:</strong> Centralized servers are honeypots for hackers targeting law firms.</li>
                            <li><strong>Metadata Mining:</strong> Third parties analyzing your document types to map your case strategy.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "local-solution",
                title: "The Local-First Solution",
                content: (
                    <>
                        Our tools run via <strong>WebAssembly</strong> directly in your browser.
                        <br /><br />
                        This means:
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>No Uploads:</strong> Files never leave your computer's RAM.</li>
                            <li><strong>No Logs:</strong> We have no server logs because we have no server processing your files.</li>
                            <li><strong>Zero Footprint:</strong> Close the tab, and the processing environment is instantly wiped.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "workflows",
                title: "Common Legal Workflows",
                content: (
                    <>
                        <h4 className="font-bold text-lg mb-2">1. Exhibit Compiling (Merging)</h4>
                        Combine 50+ affidavits, emails, and scanned images into a single Court Record.
                        <br /><br />
                        <h4 className="font-bold text-lg mb-2">2. Redaction Preparation (Flattening)</h4>
                        "Flatten" a PDF before applying redactions to ensure layers cannot be peeled back by opposing counsel.
                        <br /><br />
                        <h4 className="font-bold text-lg mb-2">3. Extracting Signature Pages (Splitting)</h4>
                        Instantly pull signature pages from 100-page contracts to email to clients for execution.
                    </>
                )
            }
        ],

        cta: "Protect Your Clients",
        ctaBtn: "Use Secure Legal Tools",
        related: "Ethical Tools"
    },
    fr: {
        seo: {
            title: `Outils PDF Sécurisés pour Avocats (Secret Professionnel) | pdfcanada.ca`,
            desc: `La suite PDF conçue pour les avocats canadiens garantissant 100% du secret professionnel. Aucun envoi, aucun serveur, souveraineté des données.`
        },
        h1: `Souveraineté Numérique pour Avocats : Gérer les PDF en Sécurité`,
        subtitle: "Comment fusionner, diviser et expurger les dossiers clients sans jamais les envoyer dans le cloud.",

        intro: (
            <>
                Pour les professionnels du droit, la <strong>confidentialité n'est pas une option</strong> &ndash; c'est le fondement de votre pratique.
                <br /><br />
                Pourtant, les pratiques non sécurisées sont courantes. Lorsque vous téléchargez l'affidavit d'un client sur un "Fusionneur PDF en ligne gratuit", vous risquez de briser le <strong>Secret Professionnel</strong> en confiant les données à un tiers.
                <br /><br />
                Nous avons construit <strong>pdfcanada.ca</strong> comme une solution "Zero-Trust". Vos fichiers sont traités localement sur votre machine, assurant une chaîne de possession absolue sur vos preuves.
            </>
        ),

        sections: [
            {
                id: "privilege-risk",
                title: "Le Risque 'Cloud' pour le Secret Pro",
                content: (
                    <>
                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border-l-4 border-red-500 mb-6 font-medium text-red-900 dark:text-red-200">
                            "Les avocats doivent prendre des mesures raisonnables pour s'assurer que leur utilisation de la technologie n'expose pas involontairement les données des clients."
                            <div className="text-sm mt-2 opacity-75">&minus; Principes des Barreaux Canadiens</div>
                        </div>
                        Lorsque vous utilisez Adobe Creative Cloud ou des outils génériques, vos fichiers voyagent vers des serveurs (souvent aux USA). Cela les expose à :
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Le CLOUD Act :</strong> La justice américaine peut forcer les fournisseurs à livrer les données.</li>
                            <li><strong>Fuites de Données :</strong> Les serveurs centralisés sont des cibles pour les pirates visant les cabinets.</li>
                            <li><strong>Minage de Métadonnées :</strong> Des tiers analysant vos types de documents pour cartographier votre stratégie.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "local-solution",
                title: "La Solution Local-First",
                content: (
                    <>
                        Nos outils fonctionnent via <strong>WebAssembly</strong> directement dans votre navigateur.
                        <br /><br />
                        Cela signifie :
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Aucun Envoi :</strong> Les fichiers ne quittent jamais la RAM de votre ordinateur.</li>
                            <li><strong>Aucun Journal :</strong> Nous n'avons pas de logs car nous n'avons pas de serveur de traitement.</li>
                            <li><strong>Zéro Trace :</strong> Fermez l'onglet, et l'environnement est instantanément effacé.</li>
                        </ul>
                    </>
                )
            },
            {
                id: "workflows",
                title: "Flux de Travail Juridiques",
                content: (
                    <>
                        <h4 className="font-bold text-lg mb-2">1. Compilation de Pièces (Fusion)</h4>
                        Combinez 50+ affidavits et scans en un seul Dossier de Tribunal.
                        <br /><br />
                        <h4 className="font-bold text-lg mb-2">2. Préparation à l'Expurgation (Aplatir)</h4>
                        "Aplatissez" un PDF avant d'appliquer des biffures pour assurer que les calques ne peuvent pas être retirés par la partie adverse.
                        <br /><br />
                        <h4 className="font-bold text-lg mb-2">3. Extraction de Signatures (Division)</h4>
                        Extrayez instantanément les pages de signature des contrats de 100 pages.
                    </>
                )
            }
        ],

        cta: "Protégez Vos Clients",
        ctaBtn: "Outils Juridiques Sécurisés",
        related: "Outils Éthiques"
    }
});

export const LegalPdfGuide: React.FC<GuideProps> = ({ lang }) => {
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
            "audienceType": "Legal Professionals"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Scale size={32} />}
            breadcrumbs={[
                { name: 'Home', href: '/' },
                { name: 'Legal', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/legal-pdf-tools" lang={lang} schema={schema} />

            <div className="max-w-4xl mx-auto py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl mb-12 border border-slate-200 dark:border-slate-800">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.id === "privilege-risk" && <AlertTriangle className="text-red-500" />}
                                {section.id === "local-solution" && <Shield className="text-green-500" />}
                                {section.id === "workflows" && <Briefcase className="text-blue-500" />}
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-8 text-center">{t.related}</h4>
                    <RelatedTools lang={lang} currentPath="/guides/legal-pdf-tools" category="organize" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
