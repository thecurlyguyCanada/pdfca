'use client';

import Link from 'next/link';
import React from 'react';
import { Edit3, Scissors, Layers, Minimize2, Trash2 } from 'lucide-react';
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
            title: `PDF Editing Hub | Merge, Split, Compress & Edit PDF ${CURRENT_YEAR}`,
            desc: `The complete guide to PDF editing. Learn how to merge, split, compress, rotate, and modify PDFs. Free, secure, and browser-based tools.`
        },
        h1: "PDF Editing Hub",
        subtitle: "Take control of your documents. Modify, organize, and perfect your PDFs.",
        intro: "PDFs are famous for being hard to edit—that's by design. But sometimes you need to make changes. Whether you need to **combine multiple reports**, **remove a sensitive page**, or **shrink a file** to email it, our editing guides show you how to do it efficiently.\n\nWe prioritize **non-destructive** and **secure** editing. Our tools and guides help you modify your files without compromising their quality or your privacy.",
        categories: [
            {
                id: 'structure',
                title: "Structure & Organization",
                desc: "Change the page structure. Merge files, split documents, or reorder pages.",
                filter: (slug: string) => ['merge-pdf', 'merge-pdf-online', 'merge-large-pdfs', 'split-pdf', 'split-pdf-online', 'organize-pdf', 'delete-pdf-pages', 'pdf-page-remover'].includes(slug)
            },
            {
                id: 'optimization',
                title: "Size & Optimization",
                desc: "Make your files smaller and faster to share.",
                filter: (slug: string) => ['compress-pdf', 'compress-pdf-online', 'compress-pdf-no-quality-loss', 'flatten-pdf'].includes(slug)
            },
            {
                id: 'visuals',
                title: "Visual Adjustments",
                desc: "Fix orientation and layout issues.",
                filter: (slug: string) => ['rotate-pdf', 'crop-pdf', 'trim-pdf'].includes(slug)
            },
            {
                id: 'content',
                title: "Content Editing",
                desc: "Add interactions and content to your PDF.",
                filter: (slug: string) => ['make-pdf-fillable', 'insert-picture-in-pdf', 'sign-pdf'].includes(slug)
            }
        ]
    },
    fr: {
        seo: {
            title: `Hub d'Édition PDF | Fusionner, Diviser, Compresser & Éditer ${CURRENT_YEAR}`,
            desc: `Le guide complet pour l'édition de PDF. Apprenez à fusionner, diviser, compresser, faire pivoter et modifier des PDF. Outils gratuits et sécurisés.`
        },
        h1: "Hub d'Édition PDF",
        subtitle: "Prenez le contrôle de vos documents. Modifiez, organisez et perfectionnez vos PDF.",
        intro: "Les PDF sont connus pour être difficiles à modifier, c'est voulu. Mais parfois, vous devez faire des changements. Que vous ayez besoin de **combiner plusieurs rapports**, **supprimer une page sensible**, ou **réduire un fichier** pour l'envoyer par email, nos guides d'édition vous montrent comment le faire efficacement.\n\nNous privilégions l'édition **non destructive** et **sécurisée**. Nos outils et guides vous aident à modifier vos fichiers sans compromettre leur qualité ou votre vie privée.",
        categories: [
            {
                id: 'structure',
                title: "Structure & Organisation",
                desc: "Changez la structure des pages. Fusionnez, divisez ou réorganisez.",
                filter: (slug: string) => ['merge-pdf', 'merge-pdf-online', 'merge-large-pdfs', 'split-pdf', 'split-pdf-online', 'organize-pdf', 'delete-pdf-pages', 'pdf-page-remover'].includes(slug)
            },
            {
                id: 'optimization',
                title: "Taille & Optimisation",
                desc: "Rendez vos fichiers plus petits et plus rapides à partager.",
                filter: (slug: string) => ['compress-pdf', 'compress-pdf-online', 'compress-pdf-no-quality-loss', 'flatten-pdf'].includes(slug)
            },
            {
                id: 'visuals',
                title: "Ajustements Visuels",
                desc: "Corrigez l'orientation et la mise en page.",
                filter: (slug: string) => ['rotate-pdf', 'crop-pdf', 'trim-pdf'].includes(slug)
            },
            {
                id: 'content',
                title: "Édition de Contenu",
                desc: "Ajoutez des interactions et du contenu à votre PDF.",
                filter: (slug: string) => ['make-pdf-fillable', 'insert-picture-in-pdf', 'sign-pdf'].includes(slug)
            }
        ]
    },
    pt: {
        seo: {
            title: `Hub de Edição de PDF | Mesclar, Dividir, Comprimir e Editar PDF ${CURRENT_YEAR}`,
            desc: `O guia completo para edição de PDF. Aprenda como mesclar, dividir, comprimir, girar e modificar PDFs. Ferramentas gratuitas, seguras e baseadas em navegador.`
        },
        h1: "Hub de Edição de PDF",
        subtitle: "Assuma o controle de seus documentos. Modifique, organize e aperfeiçoe seus PDFs.",
        intro: "PDFs são famosos por serem difíceis de editar—isso é intencional. Mas às vezes você precisa fazer alterações. Seja para **combinar vários relatórios**, **remover uma página sensível** ou **reduzir um arquivo** para enviá-lo por e-mail, nossos guias de edição mostram como fazer isso de forma eficiente.\n\nPriorizamos a edição **não destrutiva** e **segura**. Nossas ferramentas e guias ajudam você a modificar seus arquivos sem comprometer a qualidade ou sua privacidade.",
        categories: [
            {
                id: 'structure',
                title: "Estrutura e Organização",
                desc: "Altere a estrutura da página. Mescle arquivos, divida documentos ou reordene páginas.",
                filter: (slug: string) => ['merge-pdf', 'merge-pdf-online', 'merge-large-pdfs', 'split-pdf', 'split-pdf-online', 'organize-pdf', 'delete-pdf-pages', 'pdf-page-remover'].includes(slug)
            },
            {
                id: 'optimization',
                title: "Tamanho e Otimização",
                desc: "Torne seus arquivos menores e mais rápidos para compartilhar.",
                filter: (slug: string) => ['compress-pdf', 'compress-pdf-online', 'compress-pdf-no-quality-loss', 'flatten-pdf'].includes(slug)
            },
            {
                id: 'visuals',
                title: "Ajustes Visuais",
                desc: "Corrija problemas de orientação e layout.",
                filter: (slug: string) => ['rotate-pdf', 'crop-pdf', 'trim-pdf'].includes(slug)
            },
            {
                id: 'content',
                title: "Edição de Conteúdo",
                desc: "Adicione interações e conteúdo ao seu PDF.",
                filter: (slug: string) => ['make-pdf-fillable', 'insert-picture-in-pdf', 'sign-pdf'].includes(slug)
            }
        ]
    }
});

export const PdfEditingHub: React.FC<HubProps> = ({ lang }) => {
    const content = getHubContent(lang);
    const t = (content as any)[lang] || (content as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-editing"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Édition' : 'Editing', path: lang === 'fr' ? '/fr/guides/pdf-editing' : '/guides/pdf-editing' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Edit3 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: t.h1, href: lang === 'fr' ? '/fr/guides/pdf-editing' : '/guides/pdf-editing' }
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
                                            <Edit3 size={24} />
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
                        <RelatedTools lang={lang} currentPath="/guides/pdf-editing" category="edit" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
