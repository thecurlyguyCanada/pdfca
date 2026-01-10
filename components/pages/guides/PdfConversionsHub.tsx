'use client';

import Link from 'next/link';
import React from 'react';
import { RefreshCw, FileText, Image as ImageIcon, BookOpen, Shield } from 'lucide-react';
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
            title: `PDF Conversion Hub | Convert PDF to Word, Excel, JPG ${CURRENT_YEAR}`,
            desc: `The ultimate guide to PDF conversions. Learn how to convert PDF to Word, Excel, PowerPoint, JPG, and more. Free, secure, and local tutorials.`
        },
        h1: "PDF Conversion Hub",
        subtitle: "Master the art of file conversion. Turn any document into a PDF and back again.",
        intro: "Welcome to the most comprehensive resource for **PDF conversions** on the web. Whether you're trying to edit a locked PDF by converting it to Word, or archiving your emails as secure PDF documents, we have a guide for you.\n\nOur philosophy is simple: **keep it local**. All our guides focus on tools and methods that respect your privacy, processing files directly on your device whenever possible.",
        categories: [
            {
                id: 'pdf-to-office',
                title: "PDF to Office (Word, Excel, etc.)",
                desc: "Unlock your data. Convert read-only PDFs into editable Office documents.",
                filter: (slug: string) => ['pdf-to-word', 'pdf-to-word-online', 'pdf-to-word-offline', 'pdf-to-word-formatting', 'pdf-to-word-scanned', 'pdf-to-excel', 'pdf-to-csv'].includes(slug)
            },
            {
                id: 'office-to-pdf',
                title: "Office Documents to PDF",
                desc: "Create professional, shareable documents from your drafts.",
                filter: (slug: string) => ['word-to-pdf', 'rtf-to-pdf', 'email-to-pdf'].includes(slug)
            },
            {
                id: 'developer',
                title: "Developer & Data Formats",
                desc: "Convert code files and structured data (XML, UBL).",
                filter: (slug: string) => ['pdf-to-xml', 'pdf-to-ubl', 'aspx-to-pdf', 'php-to-pdf'].includes(slug)
            },
            {
                id: 'images',
                title: "Images & PDF",
                desc: "Handle visual content. Convert photos, scans, and graphics.",
                filter: (slug: string) => ['heic-to-pdf', 'gif-to-pdf', 'insert-picture-in-pdf'].includes(slug)
            },
            {
                id: 'ebooks',
                title: "E-Books & Specialized Formats",
                desc: "Convert books and comics for your favorite e-reader.",
                filter: (slug: string) => ['pdf-to-epub', 'epub-to-pdf', 'cbr-to-pdf', 'acsm-to-pdf', 'pdf-to-kindle'].includes(slug)
            }
        ]
    },
    fr: {
        seo: {
            title: `Hub de Conversion PDF | Convertir PDF en Word, Excel, JPG ${CURRENT_YEAR}`,
            desc: `Le guide ultime des conversions PDF. Apprenez à convertir PDF en Word, Excel, PowerPoint, JPG et plus. Tutoriels gratuits, sécurisés et locaux.`
        },
        h1: "Hub de Conversion PDF",
        subtitle: "Maîtrisez l'art de la conversion de fichiers. Transformez n'importe quel document en PDF et vice versa.",
        intro: "Bienvenue sur la ressource la plus complète pour les **conversions PDF** sur le web. Que vous essayiez de modifier un PDF verrouillé en le convertissant en Word, ou d'archiver vos emails en documents PDF sécurisés, nous avons un guide pour vous.\n\nNotre philosophie est simple : **restez local**. Tous nos guides se concentrent sur des outils et des méthodes qui respectent votre vie privée, traitant les fichiers directement sur votre appareil lorsque cela est possible.",
        categories: [
            {
                id: 'pdf-to-office',
                title: "PDF vers Office (Word, Excel, etc.)",
                desc: "Libérez vos données. Convertissez des PDF en lecture seule en documents Office modifiables.",
                filter: (slug: string) => ['pdf-to-word', 'pdf-to-word-online', 'pdf-to-word-offline', 'pdf-to-word-formatting', 'pdf-to-word-scanned', 'pdf-to-excel', 'pdf-to-csv'].includes(slug)
            },
            {
                id: 'office-to-pdf',
                title: "Documents Office vers PDF",
                desc: "Créez des documents professionnels et partageables à partir de vos brouillons.",
                filter: (slug: string) => ['word-to-pdf', 'rtf-to-pdf', 'email-to-pdf'].includes(slug)
            },
            {
                id: 'developer',
                title: "Formats Développeur & Données",
                desc: "Convertissez fichiers de code et données structurées (XML, UBL).",
                filter: (slug: string) => ['pdf-to-xml', 'pdf-to-ubl', 'aspx-to-pdf', 'php-to-pdf'].includes(slug)
            },
            {
                id: 'images',
                title: "Images & PDF",
                desc: "Gérez le contenu visuel. Convertissez photos, scans et graphiques.",
                filter: (slug: string) => ['heic-to-pdf', 'gif-to-pdf', 'insert-picture-in-pdf'].includes(slug)
            },
            {
                id: 'ebooks',
                title: "E-Books & Formats Spécialisés",
                desc: "Convertissez livres et bandes dessinées pour votre liseuse préférée.",
                filter: (slug: string) => ['pdf-to-epub', 'epub-to-pdf', 'cbr-to-pdf', 'acsm-to-pdf', 'pdf-to-kindle'].includes(slug)
            }
        ]
    },
    pt: {
        seo: {
            title: `Hub de Conversão de PDF | Converter PDF para Word, Excel, JPG ${CURRENT_YEAR}`,
            desc: `O guia definitivo para conversões de PDF. Aprenda como converter PDF para Word, Excel, PowerPoint, JPG e mais. Tutoriais gratuitos, seguros e locais.`
        },
        h1: "Hub de Conversão de PDF",
        subtitle: "Domine a arte da conversão de arquivos. Transforme qualquer documento em PDF e vice-versa.",
        intro: "Bem-vindo ao recurso mais abrangente para **conversões de PDF** na web. Se você está tentando editar um PDF bloqueado convertendo-o para Word, ou arquivando seus e-mails como documentos PDF seguros, temos um guia para você.\n\nNossa filosofia é simples: **mantenha local**. Todos os nossos guias focam em ferramentas e métodos que respeitam sua privacidade, processando arquivos diretamente no seu dispositivo sempre que possível.",
        categories: [
            {
                id: 'pdf-to-office',
                title: "PDF para Office (Word, Excel, etc.)",
                desc: "Desbloqueie seus dados. Converta PDFs somente leitura em documentos Office editáveis.",
                filter: (slug: string) => ['pdf-to-word', 'pdf-to-word-online', 'pdf-to-word-offline', 'pdf-to-word-formatting', 'pdf-to-word-scanned', 'pdf-to-excel', 'pdf-to-csv'].includes(slug)
            },
            {
                id: 'office-to-pdf',
                title: "Documentos Office para PDF",
                desc: "Crie documentos profissionais e compartilháveis a partir de seus rascunhos.",
                filter: (slug: string) => ['word-to-pdf', 'rtf-to-pdf', 'email-to-pdf'].includes(slug)
            },
            {
                id: 'developer',
                title: "Desenvolvedor e Formatos de Dados",
                desc: "Converta arquivos de código e dados estruturados (XML, UBL).",
                filter: (slug: string) => ['pdf-to-xml', 'pdf-to-ubl', 'aspx-to-pdf', 'php-to-pdf'].includes(slug)
            },
            {
                id: 'images',
                title: "Imagens e PDF",
                desc: "Gerencie conteúdo visual. Converta fotos, digitalizações e gráficos.",
                filter: (slug: string) => ['heic-to-pdf', 'gif-to-pdf', 'insert-picture-in-pdf'].includes(slug)
            },
            {
                id: 'ebooks',
                title: "E-Books e Formatos Especializados",
                desc: "Converta livros e quadrinhos para seu e-reader favorito.",
                filter: (slug: string) => ['pdf-to-epub', 'epub-to-pdf', 'cbr-to-pdf', 'acsm-to-pdf', 'pdf-to-kindle'].includes(slug)
            }
        ]
    }
});

export const PdfConversionsHub: React.FC<HubProps> = ({ lang }) => {
    const content = getHubContent(lang);
    const t = (content as any)[lang] || (content as any).en;

    // Helper to find guide by slug
    const findGuide = (slug: string) => ALL_GUIDES.find(g => g.slug === slug);

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-conversions"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Conversions' : 'Conversions', path: lang === 'fr' ? '/fr/guides/pdf-conversions' : '/guides/pdf-conversions' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<RefreshCw size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: t.h1, href: lang === 'fr' ? '/fr/guides/pdf-conversions' : '/guides/pdf-conversions' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.categories.map((category: any) => {
                            // Get guides for this category
                            const categoryGuides = ALL_GUIDES.filter(g => category.filter(g.slug));
                            if (categoryGuides.length === 0) return null;

                            return (
                                <section key={category.id}>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-canada-red/10 rounded-lg text-canada-red">
                                            <RefreshCw size={24} />
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
                        <RelatedTools lang={lang} currentPath="/guides/pdf-conversions" category="convert" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
