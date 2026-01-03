import Link from 'next/link';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    breadcrumbs?: { name: string; href: string }[];
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, icon, children, breadcrumbs }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 animate-fade-in">
        {breadcrumbs && (
            <nav className="flex mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-wrap">
                    {breadcrumbs.map((crumb, i) => (
                        <li key={i} className="inline-flex items-center">
                            {i > 0 && <span className="mx-1 sm:mx-2 text-gray-300">/</span>}
                            <Link
                                href={crumb.href}
                                className={`hover:text-canada-red transition-colors ${i === breadcrumbs.length - 1 ? 'font-bold text-gray-900 dark:text-gray-200' : ''}`}
                            >
                                {crumb.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        )}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-50 dark:bg-red-900/20 text-canada-red rounded-2xl mb-4 sm:mb-6 shadow-sm">
                {icon}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4">{title}</h1>
            {subtitle && <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
            {children}
        </div>
    </div>
);
