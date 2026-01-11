'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, Locale } from '@/lib/i18n-config';
import { triggerHaptic } from '@/utils/haptics';

interface LanguageSelectorProps {
    currentLang: Locale;
    mobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, mobile = false }) => {
    const pathname = usePathname();

    const getSwitchPath = (targetLang: Locale) => {
        if (!pathname) return `/${targetLang}`;
        const segments = pathname.split('/');
        // Check if the first segment is a locale (segments[0] is empty string for /path)
        if (i18n.locales.includes(segments[1] as Locale)) {
            segments[1] = targetLang;
        } else {
            // If no locale present (e.g. root), prepend it (though middleware handles this usually)
            segments.splice(1, 0, targetLang);
        }
        return segments.join('/');
    };

    if (mobile) {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-500 px-4">Language / Langue</span>
                <div className="flex gap-2 px-4 overflow-x-auto pb-2">
                    {i18n.locales.map((locale) => (
                        <Link
                            key={locale}
                            href={getSwitchPath(locale)}
                            onClick={() => triggerHaptic('light')}
                            className={`px-4 py-2 rounded-xl text-sm font-bold border ${currentLang === locale
                                ? 'bg-canada-red text-white border-canada-red'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {locale.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="text-[11px] font-black bg-white/40 md:bg-white hover:bg-white border border-white/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-[background-color,transform] duration-150 active:scale-95 flex items-center shadow-glass hover:shadow-premium group/lang">
            {i18n.locales.map((locale, index) => (
                <React.Fragment key={locale}>
                    <Link
                        href={getSwitchPath(locale)}
                        onClick={() => triggerHaptic('light')}
                        className={`px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-colors ${currentLang === locale
                            ? 'text-canada-red cursor-default'
                            : 'text-modern-neutral-700 hover:text-gray-900 hover:bg-gray-100/50'
                            }`}
                    >
                        {locale.toUpperCase()}
                    </Link>
                    {index < i18n.locales.length - 1 && (
                        <div className="w-px h-3 bg-gray-300 mx-0.5" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
