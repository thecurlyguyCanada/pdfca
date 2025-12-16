import React from 'react';
import { translations, Language } from '../utils/i18n';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: any, path?: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ lang, setLang, onNavigate }) => {
  const t = translations[lang];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 border-t-4 border-t-canada-red border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-200">
      <div
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onNavigate('HOME')}
      >
        <span className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">pdfcanada<span className="text-canada-red">.ca</span></span>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
        <button onClick={() => onNavigate('HOW_TO')} className="hover:text-canada-red dark:hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline focus:underline-offset-4">{t.navHowTo}</button>
        <button onClick={() => onNavigate('SUPPORT')} className="hover:text-canada-red dark:hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline focus:underline-offset-4">{t.navSupport}</button>
        <button onClick={() => onNavigate('PRICING')} className="hover:text-canada-red dark:hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline focus:underline-offset-4">{t.navPricing}</button>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="text-xs font-bold bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-canada-red/30 hover:text-canada-red dark:hover:text-canada-red text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded transition-all focus:outline-none focus:ring-2 focus:ring-canada-red focus:ring-offset-1"
          aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
        >
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);