import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Language } from '../utils/i18n';
import { ALL_GUIDES, GuideMetadata } from '../lib/guideMetadata';

interface RelatedTool {
    name: string;
    path: string;
    entity: string;  // Entity-rich description for title/aria
}

interface RelatedToolsProps {
    lang: Language;
    currentPath?: string;
    category?: 'edit' | 'convert' | 'organize' | 'security' | 'advanced' | 'all';
}

const getTools = (lang: Language) => ({
    edit: [
        { name: lang === 'fr' ? 'Supprimer Pages PDF' : (lang === 'pt' ? 'Excluir Páginas PDF' : 'Delete PDF Pages'), path: '/delete-pdf-pages', entity: lang === 'fr' ? 'Outil de suppression de pages PDF gratuit' : (lang === 'pt' ? 'Ferramenta gratuita de exclusão de páginas PDF' : 'Free PDF page deletion tool') },
        { name: lang === 'fr' ? 'Pivoter PDF' : (lang === 'pt' ? 'Girar PDF' : 'Rotate PDF'), path: '/rotate-pdf', entity: lang === 'fr' ? 'Outil de rotation PDF en ligne' : (lang === 'pt' ? 'Ferramenta de rotação de PDF online' : 'Online PDF rotation tool') },
        { name: lang === 'fr' ? 'Recadrer PDF' : (lang === 'pt' ? 'Cortar PDF' : 'Crop PDF'), path: '/crop-pdf', entity: lang === 'fr' ? 'Outil de recadrage PDF gratuit' : (lang === 'pt' ? 'Ferramenta gratuita de corte de PDF' : 'Free PDF cropping tool') },
        { name: lang === 'fr' ? 'Compresser PDF' : (lang === 'pt' ? 'Comprimir PDF' : 'Compress PDF'), path: '/compress-pdf', entity: lang === 'fr' ? 'Outil de compression PDF' : (lang === 'pt' ? 'Ferramenta de compressão de PDF' : 'PDF compression tool') },
        { name: lang === 'fr' ? 'Aplatir PDF' : (lang === 'pt' ? 'Achatar PDF' : 'Flatten PDF'), path: '/make-pdf-non-editable', entity: lang === 'fr' ? 'Convertisseur PDF en image' : (lang === 'pt' ? 'Conversor de PDF para imagem' : 'PDF to image converter') },
    ],
    organize: [
        { name: lang === 'fr' ? 'Fusionner PDF' : (lang === 'pt' ? 'Juntar PDF' : 'Merge PDF'), path: '/merge-pdf', entity: lang === 'fr' ? 'Outil de fusion de fichiers PDF' : (lang === 'pt' ? 'Ferramenta de fusão de arquivos PDF' : 'PDF file merge tool') },
        { name: lang === 'fr' ? 'Diviser PDF' : (lang === 'pt' ? 'Dividir PDF' : 'Split PDF'), path: '/split-pdf', entity: lang === 'fr' ? 'Outil de division PDF' : (lang === 'pt' ? 'Ferramenta de divisão de PDF' : 'PDF splitting tool') },
        { name: lang === 'fr' ? 'Organiser PDF' : (lang === 'pt' ? 'Organizar PDF' : 'Organize PDF'), path: '/organize-pdf', entity: lang === 'fr' ? 'Outil de réorganisation de pages PDF' : (lang === 'pt' ? 'Ferramenta de organização de páginas PDF' : 'PDF page organizer tool') },
        { name: lang === 'fr' ? 'Signer PDF' : (lang === 'pt' ? 'Assinar PDF' : 'Sign PDF'), path: '/sign-pdf', entity: lang === 'fr' ? 'Signature électronique PDF' : (lang === 'pt' ? 'Assinatura eletrônica de PDF' : 'PDF electronic signature tool') },
        { name: lang === 'fr' ? 'Rendre Modifiable' : (lang === 'pt' ? 'Tornar Preenchível' : 'Make Fillable'), path: '/make-pdf-fillable', entity: lang === 'fr' ? 'Créateur de formulaires PDF' : (lang === 'pt' ? 'Criador de formulários PDF' : 'PDF form creator tool') },
    ],
    convert: [
        { name: lang === 'fr' ? 'PDF vers Word' : (lang === 'pt' ? 'PDF para Word' : 'PDF to Word'), path: '/pdf-to-word', entity: lang === 'fr' ? 'Convertisseur PDF en Word DOCX' : (lang === 'pt' ? 'Conversor de PDF para Word DOCX' : 'PDF to Word DOCX converter') },
        { name: lang === 'fr' ? 'Word vers PDF' : (lang === 'pt' ? 'Word para PDF' : 'Word to PDF'), path: '/word-to-pdf', entity: lang === 'fr' ? 'Convertisseur Word DOCX en PDF' : (lang === 'pt' ? 'Conversor de Word DOCX para PDF' : 'Word DOCX to PDF converter') },
        { name: lang === 'fr' ? 'Excel vers PDF' : (lang === 'pt' ? 'Excel para PDF' : 'Excel to PDF'), path: '/excel-to-pdf', entity: lang === 'fr' ? 'Convertisseur Excel en PDF' : (lang === 'pt' ? 'Conversor de Excel para PDF' : 'Excel to PDF converter') },
        { name: lang === 'fr' ? 'HEIC vers PDF' : (lang === 'pt' ? 'HEIC para PDF' : 'HEIC to PDF'), path: '/heic-to-pdf', entity: lang === 'fr' ? 'Convertisseur photos iPhone HEIC en PDF' : (lang === 'pt' ? 'Conversor de fotos HEIC do iPhone para PDF' : 'iPhone HEIC photo to PDF converter') },
        { name: lang === 'fr' ? 'EPUB vers PDF' : (lang === 'pt' ? 'EPUB para PDF' : 'EPUB to PDF'), path: '/epub-to-pdf', entity: lang === 'fr' ? 'Convertisseur ebook EPUB en PDF' : (lang === 'pt' ? 'Conversor de ebook EPUB para PDF' : 'EPUB ebook to PDF converter') },
        { name: lang === 'fr' ? 'PDF vers EPUB' : (lang === 'pt' ? 'PDF para EPUB' : 'PDF to EPUB'), path: '/pdf-to-epub', entity: lang === 'fr' ? 'Convertisseur PDF en ebook EPUB' : (lang === 'pt' ? 'Conversor de PDF para ebook EPUB' : 'PDF to EPUB ebook converter') },
        { name: lang === 'fr' ? 'PDF vers XML' : (lang === 'pt' ? 'PDF para XML' : 'PDF to XML'), path: '/pdf-to-xml', entity: lang === 'fr' ? 'Extracteur de données PDF en XML' : (lang === 'pt' ? 'Extrator de dados PDF para XML' : 'PDF to XML data extractor') },
        { name: lang === 'fr' ? 'XML vers PDF' : (lang === 'pt' ? 'XML para PDF' : 'XML to PDF'), path: '/xml-to-pdf', entity: lang === 'fr' ? 'Convertisseur XML en PDF' : (lang === 'pt' ? 'Conversor de XML para PDF' : 'XML to PDF converter') },
        { name: lang === 'fr' ? 'OCR Factures' : (lang === 'pt' ? 'OCR de Faturas' : 'Invoice OCR'), path: '/invoice-ocr', entity: lang === 'fr' ? 'Extracteur de données de facturation PDF' : (lang === 'pt' ? 'Extrator de dados de faturamento PDF' : 'PDF invoice data extractor') },
    ],
});

const content = {
    en: {
        toolsTitle: 'Related Tools',
        toolsSubtitle: 'Explore more free PDF tools',
        guidesTitle: 'Helpful Guides',
        viewAll: 'View All Tools',
        exploreGuides: 'Explore Guides'
    },
    fr: {
        toolsTitle: 'Outils Connexes',
        toolsSubtitle: 'Découvrez plus d\'outils PDF gratuits',
        guidesTitle: 'Guides Utiles',
        viewAll: 'Voir Tous les Outils',
        exploreGuides: 'Explorer les Guides'
    },
    pt: {
        toolsTitle: 'Ferramentas Relacionadas',
        toolsSubtitle: 'Explore mais ferramentas PDF gratuitas',
        guidesTitle: 'Guias Úteis',
        viewAll: 'Ver Todas as Ferramentas',
        exploreGuides: 'Explorar Guias'
    }
};

export function RelatedTools({ lang, currentPath, category = 'all' }: RelatedToolsProps) {
    const allTools = getTools(lang);

    // Determine relevant guide category based on tool category
    let guideCategory: GuideMetadata['category'] | 'All' = 'All';
    if (category === 'edit' || category === 'organize') guideCategory = 'Editing';
    if (category === 'convert') guideCategory = 'Conversion';
    if (category === 'security') guideCategory = 'Privacy & Security';
    if (category === 'advanced') guideCategory = 'Advanced';

    // Get tools
    let tools: RelatedTool[] = [];
    if (category === 'all') {
        tools = [...allTools.edit, ...allTools.organize, ...allTools.convert];
    } else if (category === 'security') {
        // Map to relevant security tools
        tools = [...allTools.edit, ...allTools.organize];
    } else if (category === 'advanced') {
        tools = [...allTools.convert];
    } else {
        tools = allTools[category as keyof ReturnType<typeof getTools>] || [];
    }

    // Get Guides from Metadata
    let relevantGuides = ALL_GUIDES;
    if (guideCategory !== 'All') {
        const catGuides = ALL_GUIDES.filter(g => g.category === guideCategory);
        // Fill with others if less than 8
        const otherGuides = ALL_GUIDES.filter(g => g.category !== guideCategory);
        relevantGuides = [...catGuides, ...otherGuides];
    } else {
        // For 'all', prioritize Hubs first
        const hubs = ALL_GUIDES.filter(g => g.slug.includes('-hub') || g.slug === 'ultimate-pdf-guide');
        const others = ALL_GUIDES.filter(g => !g.slug.includes('-hub') && g.slug !== 'ultimate-pdf-guide');
        relevantGuides = [...hubs, ...others];
    }

    const filteredTools = tools.filter(t => t.path !== currentPath).slice(0, 6);

    const filteredGuides = relevantGuides
        .filter(g => !currentPath?.includes(g.slug))
        .slice(0, 8); // Updated to 8

    const t = (content as any)[lang] || content.en;

    return (
        <section className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800" style={{ minHeight: '400px' }}>
            <div className="mb-12">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{t.toolsTitle}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{t.toolsSubtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredTools.map((tool, i) => (
                        <Link
                            key={i}
                            href={`/${lang}${tool.path}`}
                            title={tool.entity}
                            className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-canada-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-left group"
                        >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-canada-red text-sm flex items-center gap-2">
                                {tool.name}
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href={`/${lang}`}
                        className="text-sm text-canada-red hover:text-canada-darkRed font-medium transition-colors"
                    >
                        {t.viewAll} →
                    </Link>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.guidesTitle}</h3>
                <div className="flex flex-wrap gap-3">
                    {filteredGuides.map((guide, i) => (
                        <Link
                            key={i}
                            href={`/${lang}/guides/${guide.slug}`}
                            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-canada-red text-sm text-gray-600 dark:text-gray-400 hover:text-canada-red transition-all flex items-center gap-2"
                        >
                            <span>{lang === 'fr' ? guide.titleFr : (lang === 'pt' && guide.titlePt ? guide.titlePt : guide.titleEn)}</span>
                        </Link>
                    ))}
                    <Link
                        href={`/${lang}/guides`}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 font-bold text-sm text-canada-red hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        {t.exploreGuides} →
                    </Link>
                </div>
            </div>
        </section>
    );
}
