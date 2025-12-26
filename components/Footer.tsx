'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';
import { MapleLeaf } from './MapleLeaf';

interface FooterProps {
   lang: Language;
   onNavigate?: (view: any, path?: string) => void;
}

const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="border-b border-modern-neutral-800 md:border-none last:border-none">
         <button
            onClick={() => {
               setIsOpen(!isOpen);
               triggerHaptic('light');
            }}
            className="flex items-center justify-between w-full py-4 md:py-0 md:mb-6 md:cursor-default md:pointer-events-none group"
            aria-expanded={isOpen}
         >
            <p className="font-bold text-white group-active:text-canada-red transition-colors text-base md:text-sm md:text-modern-neutral-500 md:uppercase md:tracking-widest">{title}</p>
            <ChevronDown className={`w-5 h-5 text-modern-neutral-400 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} />
         </button>
         <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] mb-6' : 'grid-rows-[0fr] md:grid-rows-[1fr] md:mb-0'}`}>
            <div className="overflow-hidden">
               {children}
            </div>
         </div>
      </div>
   );
};

const FooterComponent: React.FC<FooterProps> = ({ lang, onNavigate }) => {
   const t = translations[lang];
   const year = useMemo(() => new Date().getFullYear(), []);

   const handleNavigate = (view: any, path: string) => {
      if (onNavigate) {
         onNavigate(view, path);
      }
   };

   return (
      <footer className="mt-20 bg-modern-neutral-900 text-white selection:bg-red-500/30 selection:text-white relative overflow-hidden">
         {/* Decorative Mesh in Footer */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-canada-red to-transparent opacity-50" />
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-canada-red/10 blur-[120px] rounded-full pointer-events-none" />

         <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

               {/* Column 1: Brand & Purpose */}
               <div className="space-y-6 lg:col-span-2 pr-0 md:pr-12">
                  <div className="space-y-4">
                     <Link href="/" className="inline-block group" onClick={() => handleNavigate('HOME', '/')}>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-canada-red rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                              <MapleLeaf className="w-6 h-6 text-white" />
                           </div>
                           <span className="text-2xl font-black tracking-tighter lowercase italic">pdfcanada.ca</span>
                        </div>
                     </Link>
                     <p className="text-modern-neutral-400 text-lg leading-relaxed font-medium max-w-sm">
                        {t.footerBuilt}
                     </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-modern-neutral-300 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                     <MapPin size={12} className="text-canada-red" />
                     <span>Toronto &bull; Ontario &bull; Canada</span>
                  </div>
               </div>

               {/* Column 2: Edit Group */}
               <div className="lg:col-span-1">
                  <FooterSection title={t.footerEditGroup}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href="/delete-pdf-pages" className="hover:text-white transition-colors">{t.toolDelete}</Link></li>
                        <li><Link href="/rotate-pdf" className="hover:text-white transition-colors">{t.toolRotate}</Link></li>
                        <li><Link href="/compress-pdf" className="hover:text-white transition-colors">{t.toolCompress}</Link></li>
                        <li><Link href="/merge-pdf" className="hover:text-white transition-colors">{t.toolMerge}</Link></li>
                        <li><Link href="/split-pdf" className="hover:text-white transition-colors">{t.toolSplit}</Link></li>
                        <li><Link href="/make-pdf-fillable" className="hover:text-white transition-colors">{t.toolMakeFillable}</Link></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 3: Convert Group */}
               <div className="lg:col-span-1">
                  <FooterSection title={t.footerConvertGroup}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href="/sign-pdf" className="hover:text-white transition-colors">{t.toolSign}</Link></li>
                        <li><Link href="/word-to-pdf" className="hover:text-white transition-colors">{t.toolWordToPdf}</Link></li>
                        <li><Link href="/pdf-to-word" className="hover:text-white transition-colors">{t.toolPdfToWord}</Link></li>
                        <li><Link href="/heic-to-pdf" className="hover:text-white transition-colors">{t.toolHeic}</Link></li>
                        <li><Link href="/pdf-to-epub" className="hover:text-white transition-colors">{t.toolPdfToEpub}</Link></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 4: Resources */}
               <div className="lg:col-span-1">
                  <FooterSection title={lang === 'fr' ? 'Ressources' : 'Resources'}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href="/guides/ultimate-pdf-guide" className="text-white hover:text-canada-red transition-colors font-bold">{t.ultimateGuide}</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">{lang === 'fr' ? 'À Propos' : 'About Us'}</Link></li>
                        <li><Link href="/howto" className="hover:text-white transition-colors">{t.navHowTo}</Link></li>
                        <li><Link href="/support" className="hover:text-white transition-colors">{t.navSupport}</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link></li>
                     </ul>
                  </FooterSection>
               </div>
            </div>

            {/* Bottom Bar - Minimalist */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col md:flex-row items-center gap-6">
                  <p className="text-xs text-modern-neutral-400 font-bold">&copy; {year} pdfcanada.ca</p>

                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-modern-neutral-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-500/70" />
                        Privacy First
                     </div>
                     <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-modern-neutral-300">
                        <Heart className="w-3.5 h-3.5 text-canada-red/70" />
                        100% Free
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-modern-neutral-400">
                  <Link href="/terms" className="hover:text-white transition-colors">{t.termsService}</Link>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="flex items-center gap-2 group">
                     {t.footerMade} <MapleLeaf className="w-3.5 h-3.5 text-canada-red group-hover:animate-pulse" />
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export const Footer = React.memo(FooterComponent);