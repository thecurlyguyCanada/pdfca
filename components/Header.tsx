import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { translations, Language } from '../utils/i18n';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onNavigate }) => {
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/95 backdrop-blur-md sticky top-0 z-50 border-t-4 border-t-canada-red border-b border-gray-100 shadow-sm"
        style={{ paddingTop: 'max(12px, var(--safe-area-inset-top))' }}
      >
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
          onClick={() => handleNavigate('HOME')}
        >
          <span className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">pdfcanada<span className="text-canada-red">.ca</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <button onClick={() => handleNavigate('HOW_TO')} className="hover:text-canada-red transition-colors py-2">{t.navHowTo}</button>
          <button onClick={() => handleNavigate('SUPPORT')} className="hover:text-canada-red transition-colors py-2">{t.navSupport}</button>
          <button onClick={() => handleNavigate('PRICING')} className="hover:text-canada-red transition-colors py-2">{t.navPricing}</button>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Toggle - Larger touch target */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-xs font-bold bg-gray-50 border border-gray-200 hover:border-canada-red/30 hover:text-canada-red text-gray-600 px-4 py-2.5 rounded-lg transition-all active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in" style={{ paddingBottom: 'var(--safe-area-inset-bottom)' }}>
          <nav className="flex flex-col p-4 gap-1">
            <button
              onClick={() => handleNavigate('HOW_TO')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              {t.navHowTo}
            </button>
            <button
              onClick={() => handleNavigate('SUPPORT')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              {t.navSupport}
            </button>
            <button
              onClick={() => handleNavigate('PRICING')}
              className="text-left text-lg font-medium text-gray-800 py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              {t.navPricing}
            </button>
          </nav>
        </div>
      )}
    </>
  );
};