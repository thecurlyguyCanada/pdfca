import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Language } from '../utils/i18n';
import { isToolLive } from '../lib/retired';
import { RELATED, groupOf, hubName, hubShort } from '../lib/toolGroups';

/**
 * 3–4 truly related tools (lib/toolGroups.ts RELATED) and a link back to the tool's group on the
 * homepage hub — the playbook's internal-linking rule. No filler lists of unrelated tools or guides.
 */
interface RelatedToolsProps {
    lang: Language;
    currentPath?: string;
    relatedSlugs?: string[];
    category?: string;
}

const content = {
    en: { title: 'Related tools', subtitle: 'What people usually do next', more: 'More tools in', all: 'All PDF tools' },
    fr: { title: 'Outils connexes', subtitle: 'Ce qu’on fait souvent ensuite', more: 'Plus d’outils :', all: 'Tous les outils PDF' },
};

export function RelatedTools({ lang, currentPath, relatedSlugs }: RelatedToolsProps) {
    const l = lang === 'fr' ? 'fr' : 'en';
    const t = content[l];
    const slug = (currentPath || '').replace(/^\//, '');
    const slugs = (RELATED[slug] || relatedSlugs || ['compress-pdf', 'merge-pdf', 'pdf-to-word', 'sign-pdf']).filter((s) => isToolLive(s) && hubName(s, l)).slice(0, 4);
    const group = groupOf(slug);
    if (slugs.length === 0) return null;

    return (
        <section className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800" aria-labelledby="related-tools">
            <h2 id="related-tools" className="text-2xl font-black text-gray-900 dark:text-white mb-2">{t.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{t.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {slugs.map((s) => (
                    <Link
                        key={s}
                        href={`/${l}/${s}`}
                        className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-canada-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-left group"
                    >
                        <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-canada-red text-sm flex items-center gap-2">
                            {hubName(s, l)}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{hubShort(s, l)}</span>
                    </Link>
                ))}
            </div>
            <p className="mt-6 text-sm">
                {group ? (
                    <Link href={`/${l}#${group.id}`} className="text-canada-red hover:text-canada-darkRed font-medium">
                        {t.more} {l === 'fr' ? group.name.fr : group.name.en} →
                    </Link>
                ) : (
                    <Link href={`/${l}`} className="text-canada-red hover:text-canada-darkRed font-medium">{t.all} →</Link>
                )}
            </p>
        </section>
    );
}
