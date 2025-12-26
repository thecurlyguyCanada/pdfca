import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Language } from '../utils/i18n';

interface RelatedTool {
    name: string;
    path: string;
}

interface RelatedToolsProps {
    lang: Language;
    currentPath?: string;
    category?: 'edit' | 'convert' | 'organize' | 'all';
}

const getTools = (lang: Language) => ({
    edit: [
        { name: lang === 'fr' ? 'Supprimer Pages PDF' : 'Delete PDF Pages', path: '/delete-pdf-pages' },
        { name: lang === 'fr' ? 'Pivoter PDF' : 'Rotate PDF', path: '/rotate-pdf' },
        { name: lang === 'fr' ? 'Recadrer PDF' : 'Crop PDF', path: '/crop-pdf' },
        { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: '/compress-pdf' },
        { name: lang === 'fr' ? 'Aplatir PDF' : 'Flatten PDF', path: '/make-pdf-non-editable' },
    ],
    organize: [
        { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: '/merge-pdf' },
        { name: lang === 'fr' ? 'Diviser PDF' : 'Split PDF', path: '/split-pdf' },
        { name: lang === 'fr' ? 'Organiser PDF' : 'Organize PDF', path: '/organize-pdf' },
        { name: lang === 'fr' ? 'Signer PDF' : 'Sign PDF', path: '/sign-pdf' },
        { name: lang === 'fr' ? 'Rendre Modifiable' : 'Make Fillable', path: '/make-pdf-fillable' },
    ],
    convert: [
        { name: lang === 'fr' ? 'PDF vers Word' : 'PDF to Word', path: '/pdf-to-word' },
        { name: lang === 'fr' ? 'Word vers PDF' : 'Word to PDF', path: '/word-to-pdf' },
        { name: lang === 'fr' ? 'Excel vers PDF' : 'Excel to PDF', path: '/excel-to-pdf' },
        { name: lang === 'fr' ? 'HEIC vers PDF' : 'HEIC to PDF', path: '/heic-to-pdf' },
        { name: lang === 'fr' ? 'EPUB vers PDF' : 'EPUB to PDF', path: '/epub-to-pdf' },
        { name: lang === 'fr' ? 'PDF vers EPUB' : 'PDF to EPUB', path: '/pdf-to-epub' },
        { name: lang === 'fr' ? 'PDF vers XML' : 'PDF to XML', path: '/pdf-to-xml' },
        { name: lang === 'fr' ? 'XML vers PDF' : 'XML to PDF', path: '/xml-to-pdf' },
    ],
});

const getGuides = (lang: Language) => [
    { name: lang === 'fr' ? 'Guide Ultime PDF' : 'Ultimate PDF Guide', path: '/guides/ultimate-pdf-guide' },
    { name: lang === 'fr' ? 'Supprimer Pages' : 'Delete Pages', path: '/guides/delete-pdf-pages' },
    { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: '/guides/compress-pdf' },
    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: '/guides/merge-pdf' },
    { name: lang === 'fr' ? 'Pivoter PDF' : 'Rotate PDF', path: '/guides/rotate-pdf' },
];

const content = {
    en: {
        toolsTitle: 'Related Tools',
        toolsSubtitle: 'Explore more free PDF tools',
        guidesTitle: 'Helpful Guides',
        viewAll: 'View All Tools'
    },
    fr: {
        toolsTitle: 'Outils Connexes',
        toolsSubtitle: 'Découvrez plus d\'outils PDF gratuits',
        guidesTitle: 'Guides Utiles',
        viewAll: 'Voir Tous les Outils'
    }
};

export function RelatedTools({ lang, currentPath, category = 'all' }: RelatedToolsProps) {
    const allTools = getTools(lang);
    const guides = getGuides(lang);

    let tools: RelatedTool[] = [];
    if (category === 'all') {
        tools = [...allTools.edit, ...allTools.organize, ...allTools.convert];
    } else {
        tools = allTools[category];
    }

    const filteredTools = tools.filter(t => t.path !== currentPath).slice(0, 6);
    const filteredGuides = guides.filter(g => g.path !== currentPath).slice(0, 4);

    const t = content[lang] || content.en;

    return (
        <section className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-12">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{t.toolsTitle}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{t.toolsSubtitle}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredTools.map((tool, i) => (
                        <Link
                            key={i}
                            href={`/${lang}${tool.path}`}
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
                            href={`/${lang}${guide.path}`}
                            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-canada-red text-sm text-gray-600 dark:text-gray-400 hover:text-canada-red transition-all"
                        >
                            {guide.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RelatedTools;
