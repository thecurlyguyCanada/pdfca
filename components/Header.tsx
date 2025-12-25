import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';
import { MapleLeaf } from './MapleLeaf';

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
        className="flex items-center justify-between px-6 md:px-10 py-5 bg-modern-glass/60 backdrop-blur-2xl sticky top-4 z-[60] border border-modern-glassBorder shadow-glass mx-4 md:mx-auto max-w-7xl rounded-[2.5rem] transition-all duration-500 hover:shadow-premium group/header"
        style={{ marginTop: 'max(16px, var(--safe-area-inset-top))' }}
      >
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer group transition-all active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('HOME');
          }}
          aria-label="pdfcanada.ca Home"
        >
          <div className="w-12 h-12 bg-canada-red rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-red-500/10 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20" />
            <MapleLeaf className="w-7 h-7 text-white relative z-10" />
          </div>
          <span className="text-2xl font-[1000] text-gray-900 tracking-tighter decoration-canada-red transition-all">
            pdfcanada<span className="text-canada-red">.ca</span>
          </span>
        </a>

        {/* Desktop Nav - High End */}
        <nav className="hidden lg:flex gap-1 items-center bg-gray-100/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('HOME'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-400 hover:text-gray-900 transition-all uppercase tracking-[0.15em] relative group">
            {lang === 'en' ? 'Tools' : 'Outils'}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-all duration-300 shadow-sm" />
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('ABOUT'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-400 hover:text-gray-900 transition-all uppercase tracking-[0.15em] relative group">
            {lang === 'en' ? 'About' : 'À Propos'}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-all duration-300 shadow-sm" />
          </a>
          <a href="/howto" onClick={(e) => { e.preventDefault(); handleNavigate('HOW_TO'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-400 hover:text-gray-900 transition-all uppercase tracking-[0.15em] relative group">
            {t.navHowTo}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-all duration-300 shadow-sm" />
          </a>
          <a href="/support" onClick={(e) => { e.preventDefault(); handleNavigate('SUPPORT'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-400 hover:text-gray-900 transition-all uppercase tracking-[0.15em] relative group">
            {t.navSupport}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-all duration-300 shadow-sm" />
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Toggle - Premium Glass Pill */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setLang(lang === 'en' ? 'fr' : 'en');
            }}
            className="text-[11px] font-black bg-white/40 hover:bg-white border border-white/60 px-6 py-3 rounded-full transition-all active:scale-95 flex items-center gap-4 shadow-glass hover:shadow-premium group/lang"
            aria-label={lang === 'en' ? "Changer la langue en français" : "Switch language to English"}
          >
            <span className={`${lang === 'en' ? 'text-canada-red' : 'text-modern-neutral-600'} transition-colors`}>EN</span>
            <div className="w-px h-3 bg-gray-300 group-hover/lang:h-4 transition-all" />
            <span className={`${lang === 'fr' ? 'text-canada-red' : 'text-modern-neutral-600'} transition-colors`}>FR</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-3.5 rounded-2xl bg-white/60 border border-white/50 hover:bg-white shadow-glass transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-canada-red" /> : <Menu size={20} className="text-gray-900" />}
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