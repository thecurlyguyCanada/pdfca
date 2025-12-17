import { useEffect } from 'react';

/**
 * Hook that automatically applies dark/light theme based on system preference.
 * Listens for system preference changes and updates the document accordingly.
 */
export const useSystemTheme = () => {
    useEffect(() => {
        // Remove any stored theme preference to ensure system default is used
        localStorage.removeItem('theme');

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (isDark: boolean) => {
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        // Apply initial theme based on system preference
        applyTheme(mediaQuery.matches);

        // Listen for system preference changes
        const handleChange = (e: MediaQueryListEvent) => {
            applyTheme(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
};
