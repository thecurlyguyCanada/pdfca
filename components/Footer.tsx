
import React, { useMemo, useState } from 'react';
import { Heart, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';
import { MapleLeaf } from './MapleLeaf';

interface FooterProps {
   lang: Language;
   onNavigate: (view: any, path?: string) => void;
}

const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="border-b border-gray-200 dark:border-gray-800 md:border-none last:border-none">
         <button
            onClick={() => {
               setIsOpen(!isOpen);
               triggerHaptic('light');
            }}
            className="flex items-center justify-between w-full py-4 md:py-0 md:mb-4 md:cursor-default md:pointer-events-none group"
         >
            <p className="font-bold text-white group-active:text-canada-red transition-colors">{title}</p>
            <ChevronDown className={`w-5 h-5 text-modern-neutral-400 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} />
         </button>
         <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mb-0'} md:block`}>
            {children}
         </div>
      </div>
   );
};

const FooterComponent: React.FC<FooterProps> = ({ lang, onNavigate }) => {
   const t = translations[lang];
   const year = useMemo(() => new Date().getFullYear(), []);

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
                     <a href="/" className="inline-block group" onClick={(e) => { e.preventDefault(); onNavigate('HOME'); }}>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-canada-red rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                              <MapleLeaf className="w-6 h-6 text-white" />
                           </div>
                           <span className="text-2xl font-black tracking-tighter lowercase italic">pdfcanada.ca</span>
                        </div>
                     </a>
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
                        <li><a href="/delete-pdf-pages" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/delete-pdf-pages'); }} className="hover:text-white transition-colors">{t.toolDelete}</a></li>
                        <li><a href="/rotate-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/rotate-pdf'); }} className="hover:text-white transition-colors">{t.toolRotate}</a></li>
                        <li><a href="/compress-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/compress-pdf'); }} className="hover:text-white transition-colors">{t.toolCompress}</a></li>
                        <li><a href="/merge-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/merge-pdf'); }} className="hover:text-white transition-colors">{t.toolMerge}</a></li>
                        <li><a href="/split-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/split-pdf'); }} className="hover:text-white transition-colors">{t.toolSplit}</a></li>
                        <li><a href="/make-pdf-fillable" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/make-pdf-fillable'); }} className="hover:text-white transition-colors">{t.toolMakeFillable}</a></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 3: Convert Group */}
               <div className="lg:col-span-1">
                  <FooterSection title={t.footerConvertGroup}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><a href="/sign-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/sign-pdf'); }} className="hover:text-white transition-colors">{t.toolSign}</a></li>
                        <li><a href="/ocr-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/ocr-pdf'); }} className="hover:text-white transition-colors">{t.toolOcr}</a></li>
                        <li><a href="/word-to-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/word-to-pdf'); }} className="hover:text-white transition-colors">{t.toolWordToPdf}</a></li>
                        <li><a href="/pdf-to-word" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/pdf-to-word'); }} className="hover:text-white transition-colors">{t.toolPdfToWord}</a></li>
                        <li><a href="/heic-to-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/heic-to-pdf'); }} className="hover:text-white transition-colors">{t.toolHeic}</a></li>
                        <li><a href="/pdf-to-epub" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/pdf-to-epub'); }} className="hover:text-white transition-colors">{t.toolPdfToEpub}</a></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 4: Resources */}
               <div className="lg:col-span-1">
                  <FooterSection title={lang === 'fr' ? 'Ressources' : 'Resources'}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><a href="/guides/ultimate-pdf-guide" onClick={(e) => { e.preventDefault(); onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide'); }} className="text-white hover:text-canada-red transition-colors font-bold">{t.ultimateGuide}</a></li>
                        <li><a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('ABOUT', '/about'); }} className="hover:text-white transition-colors">{lang === 'fr' ? 'À Propos' : 'About Us'}</a></li>
                        <li><a href="/howto" onClick={(e) => { e.preventDefault(); onNavigate('HOW_TO', '/howto'); }} className="hover:text-white transition-colors">{t.navHowTo}</a></li>
                        <li><a href="/support" onClick={(e) => { e.preventDefault(); onNavigate('SUPPORT', '/support'); }} className="hover:text-white transition-colors">{t.navSupport}</a></li>
                        <li><a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('PRIVACY'); }} className="hover:text-white transition-colors">{t.privacy}</a></li>
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
                  <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('TERMS'); }} className="hover:text-white transition-colors">{t.termsService}</a>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('PRIVACY'); }} className="hover:text-white transition-colors">{t.privacy}</a>
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