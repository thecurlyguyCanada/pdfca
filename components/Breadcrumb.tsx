import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '../utils/i18n';

interface BreadcrumbItem {
    name: string;
    path?: string;
    view?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    lang: Language;
    onNavigate?: (view: string, path?: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, lang, onNavigate }) => {
    const handleClick = (item: BreadcrumbItem, e: React.MouseEvent) => {
        if (item.view && onNavigate) {
            e.preventDefault();
            onNavigate(item.view, item.path);
        }
    };

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 flex-wrap">
            <button
                onClick={(e) => onNavigate && handleClick({ name: 'Home', view: 'HOME', path: '/' }, e)}
                className="flex items-center gap-1 text-gray-500 hover:text-canada-red transition-colors group"
                aria-label={lang === 'fr' ? 'Accueil' : 'Home'}
            >
                <Home size={16} className="group-hover:scale-110 transition-transform" />
                <span className="sr-only">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight size={14} className="text-gray-400" />
                    {index === items.length - 1 ? (
                        <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">
                            {item.name}
                        </span>
                    ) : (
                        <button
                            onClick={(e) => handleClick(item, e)}
                            className="text-gray-500 hover:text-canada-red transition-colors font-medium"
                        >
                            {item.name}
                        </button>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
