'use client';

import Link from 'next/link';
import React from 'react';
import { Shield, Lock, FileKey, EyeOff } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { ALL_GUIDES } from '../../../lib/guideMetadata';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface HubProps {
    lang: Language;
}

const getHubContent = (lang: string) => ({
    en: {
        seo: {
            title: `PDF Security & Privacy Hub | Protect & Secure PDF ${CURRENT_YEAR}`,
            desc: `The definitive guide to PDF security. Learn about password protection, local processing, legal compliance, and how to secure your documents.`
        },
        h1: "PDF Security Hub",
        subtitle: "Protect your sensitive data. Industry-leading security guides for professionals.",
        intro: "In an era of data breaches and cloud surveillance, **document security is paramount**. Whether you are a lawyer protecting client privilege, a doctor handling patient records, or just someone who wants to keep their taxes private, these guides are for you.\n\nWe specialize in **local-first security**. Unlike other sites, we advocate for and build tools that verify NO data leaves your device.",
        categories: [
            {
                id: 'core-security',
                title: "Core Security",
                desc: "Essential protection for every user.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Industry Specific",
                desc: "Compliance guides for regulated sectors.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Security Actions",
                desc: "Active measures to secure your files.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ]
    },
    fr: {
        seo: {
            title: `Hub de Sécurité PDF | Protéger & Sécuriser PDF ${CURRENT_YEAR}`,
            desc: `Le guide définitif de la sécurité PDF. Apprenez-en plus sur la protection par mot de passe, le traitement local, la conformité légale et comment sécuriser vos documents.`
        },
        h1: "Hub de Sécurité PDF",
        subtitle: "Protégez vos données sensibles. Guides de sécurité de pointe pour les professionnels.",
        intro: "À une époque de violations de données et de surveillance cloud, **la sécurité des documents est primordiale**. Que vous soyez avocat protégeant le secret professionnel, médecin gérant les dossiers des patients, ou simplement quelqu'un qui veut garder ses impôts privés, ces guides sont pour vous.\n\nNous nous spécialisons dans la **sécurité locale d'abord**. Contrairement à d'autres sites, nous préconisons et construisons des outils qui vérifient qu'AUCUNE donnée ne quitte votre appareil.",
        categories: [
            {
                id: 'core-security',
                title: "Sécurité Essentielle",
                desc: "Protection essentielle pour chaque utilisateur.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Spécifique à l'Industrie",
                desc: "Guides de conformité pour les secteurs réglementés.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Actions de Sécurité",
                desc: "Mesures actives pour sécuriser vos fichiers.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ]
    },
    pt: {
        seo: {
            title: `Hub de Segurança e Privacidade PDF | Proteger e Segurar PDF ${CURRENT_YEAR}`,
            desc: `O guia definitivo para segurança de PDF. Aprenda sobre proteção por senha, processamento local, conformidade legal e como proteger seus documentos.`
        },
        h1: "Hub de Segurança PDF",
        subtitle: "Proteja seus dados sensíveis. Guias de segurança líderes da indústria para profissionais.",
        intro: "Em uma era de violações de dados e vigilância na nuvem, **a segurança de documentos é fundamental**. Seja você um advogado protegendo o sigilo do cliente, um médico lidando com registros de pacientes ou apenas alguém que deseja manter seus impostos privados, esses guias são para você.\n\nNós nos especializamos em **segurança local em primeiro lugar**. Ao contrário de outros sites, defendemos e construímos ferramentas que verificam que NENHUM dado sai do seu dispositivo.",
        categories: [
            {
                id: 'core-security',
                title: "Segurança Essencial",
                desc: "Proteção essencial para cada usuário.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Específico da Indústria",
                desc: "Guias de conformidade para setores regulamentados.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Ações de Segurança",
                desc: "Medidas ativas para proteger seus arquivos.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ]
    }
});

export const PdfSecurityHub: React.FC<HubProps> = ({ lang }) => {
    const content = getHubContent(lang);
    const t = (content as any)[lang] || (content as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-security"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides' : (lang === 'pt' ? '/pt/guides' : '/guides') },
                    { name: lang === 'fr' ? 'Sécurité' : (lang === 'pt' ? 'Segurança' : 'Security'), path: lang === 'fr' ? '/fr/guides/pdf-security' : (lang === 'pt' ? '/pt/guides/pdf-security' : '/guides/pdf-security') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Shield size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.h1, href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.categories.map((category: any) => {
                            const categoryGuides = ALL_GUIDES.filter(g => category.filter(g.slug));
                            if (categoryGuides.length === 0) return null;

                            return (
                                <section key={category.id}>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-canada-red/10 rounded-lg text-canada-red">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                            <p className="text-gray-500 dark:text-gray-400">{category.desc}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {categoryGuides.map((guide) => (
                                            <Link
                                                key={guide.slug}
                                                href={`/${lang}/guides/${guide.slug}`}
                                                className="group block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-canada-red hover:shadow-lg transition-all"
                                            >
                                                <div className="text-4xl mb-4">{guide.icon}</div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-canada-red transition-colors">
                                                    {lang === 'en' ? guide.titleEn : guide.titleFr}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {lang === 'en' ? guide.descEn : guide.descFr}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    <div className="mt-16">
                        <RelatedTools lang={lang} currentPath="/guides/pdf-security" category="security" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
