'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';
import { MapleLeaf } from './MapleLeaf';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
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

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-canada-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>
      <header
        className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 bg-white/95 md:bg-white sticky top-4 z-[60] border border-modern-glassBorder shadow-glass mx-3 sm:mx-4 md:mx-auto max-w-7xl rounded-[1.75rem] sm:rounded-[2.5rem] transition-shadow duration-200 hover:shadow-premium group/header will-change-[box-shadow]"
        style={{ marginTop: 'max(16px, var(--safe-area-inset-top))' }}
      >
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 cursor-pointer group transition-transform active:scale-95"
          aria-label="pdfcanada.ca Home"
        >
          <div className="w-12 h-12 bg-canada-red rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-red-500/10 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20" />
            <MapleLeaf className="w-7 h-7 text-white relative z-10" />
          </div>
          <span className="text-xl sm:text-2xl font-[1000] text-gray-900 tracking-tighter decoration-canada-red">
            pdfcanada<span className="text-canada-red">.ca</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center bg-gray-100 p-1 rounded-full border border-gray-200/50">
          <Link href={`/${lang}`} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-800 hover:text-gray-900 transition-colors duration-150 uppercase tracking-[0.15em] relative group">
            {t.navTools}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-colors duration-150 shadow-sm" />
          </Link>
          <Link href={`/${lang}/guides`} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-800 hover:text-gray-900 transition-colors duration-150 uppercase tracking-[0.15em] relative group">
            {t.navGuides}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-colors duration-150 shadow-sm" />
          </Link>
          <Link href={`/${lang}/about`} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-800 hover:text-gray-900 transition-colors duration-150 uppercase tracking-[0.15em] relative group">
            {t.navAbout}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-colors duration-150 shadow-sm" />
          </Link>
          <Link href={`/${lang}/howto`} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-800 hover:text-gray-900 transition-colors duration-150 uppercase tracking-[0.15em] relative group">
            {t.navHowTo}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-colors duration-150 shadow-sm" />
          </Link>
          <Link href={`/${lang}/support`} className="px-6 py-2 rounded-full text-[11px] font-black text-gray-800 hover:text-gray-900 transition-colors duration-150 uppercase tracking-[0.15em] relative group">
            {t.navSupport}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full -z-10 transition-colors duration-150 shadow-sm" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSelector currentLang={lang} />

          <button
            onClick={() => {
              triggerHaptic('light');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-3.5 rounded-2xl bg-white/60 border border-white/50 hover:bg-white shadow-glass active:scale-95"
            aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
          >
            {mobileMenuOpen ? <X size={20} className="text-canada-red" /> : <Menu size={20} className="text-gray-900" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[70] shadow-2xl animate-slide-in-right overflow-y-auto"
            style={{
              paddingTop: 'max(24px, var(--safe-area-inset-top))',
              paddingBottom: 'var(--safe-area-inset-bottom)',
            }}
          >
            {/* Close Button at the top of mobile menu */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <span className="text-lg font-bold text-gray-900">{lang === 'en' ? 'Menu' : 'Menu'}</span>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all"
                aria-label={t.menuClose}
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-2 pt-4">
              <LanguageSelector currentLang={lang} mobile={true} />

              <div className="h-4" /> {/* Spacer */}

              <Link
                href={`/${lang}`}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 flex items-center border border-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navTools}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 flex items-center border border-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navAbout}
              </Link>
              <Link
                href={`/${lang}/howto`}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 flex items-center border border-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navHowTo}
              </Link>
              <Link
                href={`/${lang}/support`}
                className="text-left text-lg font-semibold text-gray-800 py-4 px-5 rounded-2xl hover:bg-gray-50 flex items-center border border-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navSupport}
              </Link>
              <Link
                href={`/${lang}/guides`}
                className="text-left text-lg font-semibold text-canada-red py-4 px-5 rounded-2xl hover:bg-red-50 flex items-center border border-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navGuides}
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
