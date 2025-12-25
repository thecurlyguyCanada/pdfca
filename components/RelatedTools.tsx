import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../utils/i18n';

interface RelatedTool {
    name: string;
    path: string;
    view?: string;
}

interface RelatedToolsProps {
    lang: Language;
    onNavigate: (view: any, path?: string) => void;
    currentPath?: string;
    category?: 'edit' | 'convert' | 'organize' | 'all';
}

const getTools = (lang: Language) => ({
    edit: [
        { name: lang === 'fr' ? 'Supprimer Pages PDF' : 'Delete PDF Pages', path: '/delete-pdf-pages', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Pivoter PDF' : 'Rotate PDF', path: '/rotate-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Recadrer PDF' : 'Crop PDF', path: '/crop-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: '/compress-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Aplatir PDF' : 'Flatten PDF', path: '/make-pdf-non-editable', view: 'TOOL_PAGE' },
    ],
    organize: [
        { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: '/merge-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Diviser PDF' : 'Split PDF', path: '/split-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Organiser PDF' : 'Organize PDF', path: '/organize-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Signer PDF' : 'Sign PDF', path: '/sign-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Rendre Modifiable' : 'Make Fillable', path: '/make-pdf-fillable', view: 'TOOL_PAGE' },
    ],
    convert: [
        { name: lang === 'fr' ? 'PDF vers Word' : 'PDF to Word', path: '/pdf-to-word', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'Word vers PDF' : 'Word to PDF', path: '/word-to-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'HEIC vers PDF' : 'HEIC to PDF', path: '/heic-to-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'EPUB vers PDF' : 'EPUB to PDF', path: '/epub-to-pdf', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'PDF vers EPUB' : 'PDF to EPUB', path: '/pdf-to-epub', view: 'TOOL_PAGE' },
        { name: lang === 'fr' ? 'OCR PDF' : 'OCR PDF', path: '/ocr-pdf', view: 'TOOL_PAGE' },
    ],
});

const getGuides = (lang: Language) => [
    { name: lang === 'fr' ? 'Guide Ultime PDF' : 'Ultimate PDF Guide', path: '/guides/ultimate-pdf-guide', view: 'GUIDE_ULTIMATE' },
    { name: lang === 'fr' ? 'Supprimer Pages' : 'Delete Pages', path: '/guides/delete-pdf-pages', view: 'GUIDE_DELETE_PAGES' },
    { name: lang === 'fr' ? 'Compresser PDF' : 'Compress PDF', path: '/guides/compress-pdf', view: 'GUIDE_COMPRESS' },
    { name: lang === 'fr' ? 'Fusionner PDF' : 'Merge PDF', path: '/guides/merge-pdf', view: 'GUIDE_MERGE' },
    { name: lang === 'fr' ? 'Pivoter PDF' : 'Rotate PDF', path: '/guides/rotate-pdf', view: 'GUIDE_ROTATE' },
];

export const RelatedTools: React.FC<RelatedToolsProps> = ({ lang, onNavigate, currentPath, category = 'all' }) => {
    const allTools = getTools(lang);
    const guides = getGuides(lang);

    // Get tools based on category, excluding current path
    let tools: RelatedTool[] = [];
    if (category === 'all') {
        tools = [...allTools.edit, ...allTools.organize, ...allTools.convert];
    } else {
        tools = allTools[category];
    }

    // Exclude current path and limit to 6
    const filteredTools = tools.filter(t => t.path !== currentPath).slice(0, 6);
    const filteredGuides = guides.filter(g => g.path !== currentPath).slice(0, 4);

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

    const t = content[lang] || content.en;

    return (
        <section className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            {/* Related Tools */}
            <div className="mb-12">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{t.toolsTitle}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{t.toolsSubtitle}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredTools.map((tool, i) => (
                        <button
                            key={i}
                            onClick={() => onNavigate(tool.view || 'TOOL_PAGE', tool.path)}
                            className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-canada-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-left group"
                        >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-canada-red text-sm flex items-center gap-2">
                                {tool.name}
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                        </button>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => onNavigate('HOME')}
                        className="text-sm text-canada-red hover:text-canada-darkRed font-medium transition-colors"
                    >
                        {t.viewAll} →
                    </button>
                </div>
            </div>

            {/* Related Guides */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.guidesTitle}</h3>
                <div className="flex flex-wrap gap-3">
                    {filteredGuides.map((guide, i) => (
                        <button
                            key={i}
                            onClick={() => onNavigate(guide.view, guide.path)}
                            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-canada-red text-sm text-gray-600 dark:text-gray-400 hover:text-canada-red transition-all"
                        >
                            {guide.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedTools;
