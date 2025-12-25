import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onNavigate }) => {
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (view: string) => {
    triggerHaptic('light');
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-canada-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>
      <header
        className="flex items-center justify-between px-5 md:px-8 py-4 bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]"
        style={{ paddingTop: 'max(16px, var(--safe-area-inset-top))' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-canada-red/20 to-transparent" />

        <a
          href="/"
          className="flex items-center gap-2 cursor-pointer group transition-all active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('HOME');
          }}
          aria-label="pdfcanada.ca Home"
        >
          <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">
            pdfcanada<span className="text-canada-red group-hover:animate-pulse">.ca</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-500">
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('HOME'); }} className="hover:text-canada-red active:text-canada-red transition-all relative group py-2">
            {lang === 'en' ? 'All Tools' : 'Tous les Outils'}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-canada-red transition-all group-hover:w-full" />
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('ABOUT'); }} className="hover:text-canada-red active:text-canada-red transition-all relative group py-2">
            {lang === 'en' ? 'About' : 'À Propos'}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-canada-red transition-all group-hover:w-full" />
          </a>
          <a href="/howto" onClick={(e) => { e.preventDefault(); handleNavigate('HOW_TO'); }} className="hover:text-canada-red active:text-canada-red transition-all relative group py-2">
            {t.navHowTo}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-canada-red transition-all group-hover:w-full" />
          </a>
          <a href="/support" onClick={(e) => { e.preventDefault(); handleNavigate('SUPPORT'); }} className="hover:text-canada-red active:text-canada-red transition-all relative group py-2">
            {t.navSupport}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-canada-red transition-all group-hover:w-full" />
          </a>
          <a href="/pricing" onClick={(e) => { e.preventDefault(); handleNavigate('PRICING'); }} className="hover:text-canada-red active:text-canada-red transition-all relative group py-2">
            {t.navPricing}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-canada-red transition-all group-hover:w-full" />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Toggle - Premium Pill */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setLang(lang === 'en' ? 'fr' : 'en');
            }}
            className="text-xs font-black bg-gray-100/50 hover:bg-red-50 hover:text-canada-red border border-transparent hover:border-red-100 px-5 py-2.5 rounded-full transition-all active:scale-95 flex items-center gap-2 shadow-sm"
            aria-label={lang === 'en' ? "Changer la langue en français" : "Switch language to English"}
          >
            <span className={lang === 'en' ? 'text-canada-red' : 'text-gray-400'}>EN</span>
            <div className="w-px h-3 bg-gray-300" />
            <span className={lang === 'fr' ? 'text-canada-red' : 'text-gray-400'}>FR</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all active:scale-95 border border-gray-200/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} className="text-canada-red" /> : <Menu size={22} className="text-gray-700" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in" style={{ paddingBottom: 'var(--safe-area-inset-bottom)' }}>
          <nav className="flex flex-col p-4 gap-1">
            <button
              onClick={() => handleNavigate('HOME')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-colors min-h-[56px]"
            >
              {lang === 'en' ? 'All Tools' : 'Tous les Outils'}
            </button>
            <button
              onClick={() => handleNavigate('ABOUT')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-colors min-h-[56px]"
            >
              {lang === 'en' ? 'About Us' : 'À Propos'}
            </button>
            <button
              onClick={() => handleNavigate('HOW_TO')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-colors min-h-[56px]"
            >
              {t.navHowTo}
            </button>
            <button
              onClick={() => handleNavigate('SUPPORT')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-colors min-h-[56px]"
            >
              {t.navSupport}
            </button>
            <button
              onClick={() => handleNavigate('PRICING')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-colors min-h-[56px]"
            >
              {t.navPricing}
            </button>
          </nav>
        </div>
      )}
    </>
  );
};