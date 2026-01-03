'use client';

import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Shield, Edit3, RefreshCw, Sparkles } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { ALL_GUIDES, getAllCategories, GuideMetadata } from '../../lib/guideMetadata';

interface GuidesIndexPageProps {
    lang: Language;
}

export const GuidesIndexPage: React.FC<GuidesIndexPageProps> = ({ lang }) => {
    const [selectedCategory, setSelectedCategory] = useState<GuideMetadata['category'] | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = getAllCategories();

    const filteredGuides = useMemo(() => {
        let guides = ALL_GUIDES;

        // Filter by category
        if (selectedCategory !== 'All') {
            guides = guides.filter(g => g.category === selectedCategory);
        }

        // Filter by search
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            guides = guides.filter(g =>
                (lang === 'en' ? g.titleEn : g.titleFr).toLowerCase().includes(query) ||
                (lang === 'en' ? g.descEn : g.descFr).toLowerCase().includes(query)
            );
        }

        return guides;
    }, [selectedCategory, searchQuery, lang]);

    const getCategoryIcon = (category: GuideMetadata['category'] | 'All') => {
        switch (category) {
            case 'Privacy & Security': return <Shield className="w-4 h-4" />;
            case 'Editing': return <Edit3 className="w-4 h-4" />;
            case 'Conversion': return <RefreshCw className="w-4 h-4" />;
            case 'Advanced': return <Sparkles className="w-4 h-4" />;
            default: return <BookOpen className="w-4 h-4" />;
        }
    };

    const getCategoryLabel = (category: GuideMetadata['category'] | 'All') => {
        if (category === 'All') return lang === 'en' ? 'All Guides' : 'Tous les Guides';
        return category;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-canada-red/5 via-white to-blue-50 dark:from-canada-red/10 dark:via-gray-950 dark:to-blue-950/20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-6 py-20 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-canada-red to-gray-900 dark:from-white dark:via-canada-red dark:to-white bg-clip-text text-transparent">
                            {lang === 'en' ? 'PDF Guides & Tutorials' : 'Guides & Tutoriels PDF'}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                            {lang === 'en'
                                ? 'Master every PDF task with our comprehensive guides. From basic editing to advanced security.'
                                : 'Maîtrisez chaque tâche PDF avec nos guides complets. De l\'édition de base à la sécurité avancée.'}
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto mb-12">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder={lang === 'en' ? 'Search guides...' : 'Rechercher des guides...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-canada-red focus:outline-none transition-colors text-lg"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => setSelectedCategory('All')}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${selectedCategory === 'All'
                                        ? 'bg-canada-red text-white shadow-lg shadow-red-500/30'
                                        : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-800 hover:border-canada-red'
                                    }`}
                            >
                                {getCategoryIcon('All')}
                                {getCategoryLabel('All')}
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${selectedCategory === category
                                            ? 'bg-canada-red text-white shadow-lg shadow-red-500/30'
                                            : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-800 hover:border-canada-red'
                                        }`}
                                >
                                    {getCategoryIcon(category)}
                                    {getCategoryLabel(category)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Guides Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {filteredGuides.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            {lang === 'en' ? 'No guides found.' : 'Aucun guide trouvé.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGuides.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/${lang}/guides/${guide.slug}`}
                                className="group relative bg-white dark:bg-gray-900 rounded-3xl border-2 border-gray-100 dark:border-gray-800 p-8 hover:border-canada-red hover:shadow-xl hover:shadow-canada-red/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                    {guide.icon}
                                </div>

                                {/* Category Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-600 dark:text-gray-400 mb-4">
                                    {getCategoryIcon(guide.category)}
                                    {guide.category}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-canada-red transition-colors">
                                    {lang === 'en' ? guide.titleEn : guide.titleFr}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {lang === 'en' ? guide.descEn : guide.descFr}
                                </p>

                                {/* Arrow Indicator */}
                                <div className="mt-6 flex items-center gap-2 text-canada-red font-bold text-sm group-hover:gap-4 transition-all">
                                    {lang === 'en' ? 'Read Guide' : 'Lire le Guide'}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
