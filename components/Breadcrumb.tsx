import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '../utils/i18n';
import Link from 'next/link';

interface BreadcrumbItem {
    name: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    lang: Language;
}

export function Breadcrumb({ items, lang }: BreadcrumbProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm mb-6 flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"
        >
            <Link
                href={`/${lang}`}
                className="flex items-center gap-1 text-gray-500 hover:text-canada-red transition-colors"
                aria-label={lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home')}
            >
                <Home size={16} aria-hidden="true" />
                <span className="sr-only">{lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home')}</span>
            </Link>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight size={14} className="text-gray-400" aria-hidden="true" />
                    {index === items.length - 1 || !item.path ? (
                        <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">
                            {item.name}
                        </span>
                    ) : (
                        <Link
                            href={`/${lang}${item.path.startsWith('/') ? item.path : '/' + item.path}`}
                            className="text-gray-500 hover:text-canada-red transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}

export default Breadcrumb;
