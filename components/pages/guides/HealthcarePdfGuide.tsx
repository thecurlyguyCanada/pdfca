'use client';

import Link from 'next/link';
import React from 'react';
import { Stethoscope, HeartPulse, ShieldCheck, Activity, FileCheck, Lock, UserCheck } from 'lucide-react';
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
            title: `HIPAA/PIPEDA Compliant PDF Tools for Healthcare | pdfcanada.ca`,
            desc: `Securely process patient records, medical history, and insurance forms without data leaving your device. Compliant by design.`
        },
        h1: `Healthcare Data Security: Processing Patient PDFs Safely`,
        subtitle: "A guide for clinics, doctors, and researchers on managing medical records without violating HIPAA or PIPEDA.",

        intro: (
            <>
                In healthcare, data privacy isn't just best practice—it's the law. Violating <strong>HIPAA</strong> (US) or <strong>PIPEDA</strong> (Canada) can result in massive fines and loss of license.
                <br /><br />
                The biggest risk? <strong>Third-party processors.</strong> Every time you upload a patient record to a cloud converter, you are creating a data custody chain that you cannot control.
                <br /><br />
                <strong>pdfcanada.ca</strong> offers a clinical-grade solution: processing tools that run entirely offline in your browser, ensuring patient data never touches the open internet.
            </>
        ),

        sections: [
            {
                id: "compliance-gap",
                title: "The Compliance Gap",
                content: (
                    <>
                        Most cloud PDF tools are <strong>not</strong> Business Associate Agreement (BAA) compliant. They store temporary copies of files on shared servers.
                        <br /><br />
                        If a cloud tool's server is breached, *you* are liable for the patient data leak.
                        <br /><br />
                        <strong>The Offline Advantage:</strong> By processing files locally via WebAssembly, our tool acts like software installed on your secure hospital terminal. No data transmission means no interception risk.
                    </>
                )
            },
            {
                id: "clinical-use-cases",
                title: "Clinical Use Cases",
                content: (
                    <>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                    <FileCheck size={20} /> Record Consolidation
                                </h4>
                                <p className="text-sm">Merging lab results, specialist letters, and intake forms into a single patient PDF for EMR upload.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                    <UserCheck size={20} /> Anonymization
                                </h4>
                                <p className="text-sm">Removing specific pages containing PII (Personally Identifiable Information) before sharing case studies for research.</p>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        cta: "Secure Patient Data",
        ctaBtn: "Start Safe Processing",
        related: "Clinical Tools"
    },
    fr: {
        seo: {
            title: `Outils PDF Conformes HIPAA/LPRPDE pour la Santé | pdfcanada.ca`,
            desc: `Traitez en toute sécurité les dossiers des patients, l'historique médical et les formulaires d'assurance sans que les données ne quittent votre appareil.`
        },
        h1: `Sécurité des Données de Santé : Gérer les PDF Patients`,
        subtitle: "Un guide pour les cliniques, médecins et chercheurs sur la gestion des dossiers médicaux sans violer la LPRPDE.",

        intro: (
            <>
                Dans la santé, la confidentialité n'est pas juste une bonne pratique, c'est la loi. Violer la <strong>LPRPDE/PIPEDA</strong> peut entraîner des amendes massives.
                <br /><br />
                Le plus grand risque ? <strong>Les processeurs tiers.</strong> Chaque fois que vous envoyez un dossier patient dans le cloud, vous créez une chaîne de possession incontrôlable.
                <br /><br />
                <strong>pdfcanada.ca</strong> offre une solution de grade clinique : des outils qui fonctionnent entièrement hors ligne dans votre navigateur.
            </>
        ),

        sections: [
            {
                id: "compliance-gap",
                title: "L'Écart de Conformité",
                content: (
                    <>
                        La plupart des outils cloud ne sont <strong>pas</strong> conformes. Ils stockent des copies temporaires sur des serveurs partagés.
                        <br /><br />
                        Si le serveur d'un outil cloud est piraté, *vous* êtes responsable de la fuite.
                        <br /><br />
                        <strong>L'Avantage Hors-Ligne :</strong> En traitant les fichiers localement, notre outil agit comme un logiciel installé sur votre terminal hôpital sécurisé. Aucune transmission signifie aucun risque d'interception.
                    </>
                )
            },
            {
                id: "clinical-use-cases",
                title: "Cas d'Usage Clinique",
                content: (
                    <>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                    <FileCheck size={20} /> Consolidation
                                </h4>
                                <p className="text-sm">Fusionner les résultats de labo et lettres de spécialistes en un seul PDF pour le DME.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                    <UserCheck size={20} /> Anonymisation
                                </h4>
                                <p className="text-sm">Supprimer les pages contenant des infos personnelles (PII) avant de partager des études de cas.</p>
                            </div>
                        </div>
                    </>
                )
            }
        ],

        cta: "Sécurisez les Données Patients",
        ctaBtn: "Commencer le Traitement Sûr",
        related: "Outils Cliniques"
    }
});

export const HealthcarePdfGuide: React.FC<GuideProps> = ({ lang }) => {
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
            "audienceType": "Healthcare Professionals"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Stethoscope size={32} />}
            breadcrumbs={[
                { name: 'Home', href: '/' },
                { name: 'Health', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/healthcare-pdf-security" lang={lang} schema={schema} />

            <div className="max-w-4xl mx-auto py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl mb-12 border border-blue-100 dark:border-blue-900">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.id === "compliance-gap" && <ShieldCheck className="text-green-500" />}
                                {section.id === "clinical-use-cases" && <Activity className="text-blue-500" />}
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-600 text-white rounded-[2rem] p-12 text-center shadow-xl shadow-blue-500/20">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}`} className="inline-block bg-white text-blue-600 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-8 text-center">{t.related}</h4>
                    <RelatedTools lang={lang} currentPath="/guides/healthcare-pdf-security" category="all" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
