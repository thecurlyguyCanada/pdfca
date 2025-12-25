import React, { useState, useEffect } from 'react';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
        className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-[60] will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      >
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('HOME');
          }}
          aria-label="pdfcanada.ca Home"
        >
          <div className="w-12 h-12 bg-canada-red rounded-[1.25rem] flex items-center justify-center">
            <MapleLeaf className="w-7 h-7 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-[1000] text-gray-900 tracking-tighter decoration-canada-red">
            pdfcanada<span className="text-canada-red">.ca</span>
          </span>
        </a>

        {/* Desktop Nav - High End */}
        <nav className="hidden md:flex gap-1 items-center bg-gray-100 p-1 rounded-full border border-gray-200">
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('HOME'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-600 hover:text-gray-900 hover:bg-white uppercase tracking-[0.15em]">
            {lang === 'en' ? 'Tools' : 'Outils'}
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('ABOUT'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-600 hover:text-gray-900 hover:bg-white uppercase tracking-[0.15em]">
            {lang === 'en' ? 'About' : 'À Propos'}
          </a>
          <a href="/howto" onClick={(e) => { e.preventDefault(); handleNavigate('HOW_TO'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-600 hover:text-gray-900 hover:bg-white uppercase tracking-[0.15em]">
            {t.navHowTo}
          </a>
          <a href="/support" onClick={(e) => { e.preventDefault(); handleNavigate('SUPPORT'); }} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-600 hover:text-gray-900 hover:bg-white uppercase tracking-[0.15em]">
            {t.navSupport}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle - Premium Glass Pill */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setLang(lang === 'en' ? 'fr' : 'en');
            }}
            className="text-[11px] font-black bg-white/40 hover:bg-white border border-white/60 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-4 shadow-sm"
            aria-label={lang === 'en' ? "Changer la langue en français" : "Switch language to English"}
          >
            <span className={`${lang === 'en' ? 'text-canada-red' : 'text-modern-neutral-600'}`}>EN</span>
            <div className="w-px h-3 bg-gray-300" />
            <span className={`${lang === 'fr' ? 'text-canada-red' : 'text-modern-neutral-600'}`}>FR</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-3.5 rounded-2xl bg-white/60 border border-white/50 hover:bg-white shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-canada-red" /> : <Menu size={20} className="text-gray-900" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[70] shadow-xl overflow-y-auto"
            style={{
              paddingTop: 'max(88px, calc(var(--safe-area-inset-top) + 88px))',
              paddingBottom: 'var(--safe-area-inset-bottom)',
            }}
          >
            <nav className="flex flex-col p-6 gap-2">
              <button
                onClick={() => handleNavigate('HOME')}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-all min-h-[60px] flex items-center border border-transparent hover:border-gray-200"
              >
                {lang === 'en' ? 'All Tools' : 'Tous les Outils'}
              </button>
              <button
                onClick={() => handleNavigate('ABOUT')}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-all min-h-[60px] flex items-center border border-transparent hover:border-gray-200"
              >
                {lang === 'en' ? 'About Us' : 'À Propos'}
              </button>
              <button
                onClick={() => handleNavigate('HOW_TO')}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-all min-h-[60px] flex items-center border border-transparent hover:border-gray-200"
              >
                {t.navHowTo}
              </button>
              <button
                onClick={() => handleNavigate('SUPPORT')}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-all min-h-[60px] flex items-center border border-transparent hover:border-gray-200"
              >
                {t.navSupport}
              </button>
              <button
                onClick={() => handleNavigate('PRICING')}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 active:bg-red-50 active:text-canada-red transition-all min-h-[60px] flex items-center border border-transparent hover:border-gray-200"
              >
                {t.navPricing}
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};