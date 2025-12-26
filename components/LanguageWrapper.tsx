'use client';

import React, { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Language } from '@/utils/i18n';

interface LanguageWrapperProps {
    initialLang: Language;
    children: (lang: Language, setLang: (lang: Language) => void) => React.ReactNode;
}

/**
 * LanguageWrapper - Client Component for language state management
 * 
 * This component wraps Server Components that need interactive language switching.
 * It manages the client-side language state and provides it through a render prop pattern.
 * 
 * Usage:
 * <LanguageWrapper initialLang={lang}>
 *   {(currentLang, setLang) => <YourComponent lang={currentLang} setLang={setLang} />}
 * </LanguageWrapper>
 */
export function LanguageWrapper({ initialLang, children }: LanguageWrapperProps) {
    const [lang, setLang] = useState<Language>(initialLang);

    const handleSetLang = useCallback((newLang: Language) => {
        setLang(newLang);
        // Optional: Update URL params for language persistence
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            if (newLang === 'en') {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', newLang);
            }
            window.history.replaceState({}, '', url.toString());
        }
    }, []);

    return <>{children(lang, handleSetLang)}</>;
}

interface HomeLayoutWrapperProps {
    initialLang: Language;
    children: React.ReactNode;
}

/**
 * HomeLayoutWrapper - Client Component that wraps Header and Footer with language state
 * 
 * Use this when you want the Header/Footer to have interactive language switching
 * while the main content remains a Server Component.
 */
export function HomeLayoutWrapper({ initialLang, children }: HomeLayoutWrapperProps) {
    const [lang, setLang] = useState<Language>(initialLang);

    const handleSetLang = useCallback((newLang: Language) => {
        setLang(newLang);
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            if (newLang === 'en') {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', newLang);
            }
            window.history.replaceState({}, '', url.toString());
            // Reload to get server-rendered content in new language
            window.location.reload();
        }
    }, []);

    const handleNavigate = useCallback(() => {
        // Navigation is handled by Next.js Link components
    }, []);

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={lang} setLang={handleSetLang} onNavigate={handleNavigate} />
                <main id="main-content" className="flex-grow">
                    {children}
                </main>
                <Footer lang={lang} onNavigate={handleNavigate} />
            </div>
        </>
    );
}
