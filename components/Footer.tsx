'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, MapPin, ChevronDown, BookOpen, Zap, Scissors, Eye } from 'lucide-react';
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
            <p className="font-bold text-white group-active:text-canada-red transition-colors text-base md:text-sm md:text-modern-neutral-300 md:uppercase md:tracking-widest">{title}</p>
            <ChevronDown className={`w-5 h-5 text-modern-neutral-300 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} />
         </button>
         <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] mb-6' : 'grid-rows-[0fr] md:grid-rows-[1fr] md:mb-0'}`}>
            <div className="overflow-hidden">
               {children}
            </div>
         </div>
      </div>
   );
};

const FooterComponent: React.FC<FooterProps> = ({ lang }) => {
   const t = translations[lang];
   const year = useMemo(() => new Date().getFullYear(), []);

   return (
      <footer className="mt-20 bg-modern-neutral-900 text-white selection:bg-red-500/30 selection:text-white relative overflow-hidden">
         {/* Decorative Mesh in Footer */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-canada-red to-transparent opacity-50" />
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-canada-red/10 blur-[120px] rounded-full pointer-events-none" />

         <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

               {/* Column 1: Brand & Purpose */}
               <div className="space-y-6 lg:col-span-2 pr-0 md:pr-12">
                  <div className="space-y-4">
                     <Link href={`/${lang}`} className="inline-block group">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-canada-red rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                              <MapleLeaf className="w-6 h-6 text-white" />
                           </div>
                           <span className="text-2xl font-black tracking-tighter lowercase italic">pdfcanada.ca</span>
                        </div>
                     </Link>
                     <p className="text-modern-neutral-300 text-lg leading-relaxed font-medium max-w-sm">
                        {t.footerBuilt}
                     </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-modern-neutral-200 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                     <MapPin size={12} className="text-canada-red" />
                     <span>Toronto &bull; Ontario &bull; Canada</span>
                  </div>
               </div>

               {/* Column 2: All PDF Tools */}
               <div className="lg:col-span-1">
                  <FooterSection title={t.footerEditGroup}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href={`/${lang}/delete-pdf-pages`} className="hover:text-white transition-colors">{t.toolDelete}</Link></li>
                        <li><Link href={`/${lang}/rotate-pdf`} className="hover:text-white transition-colors">{t.toolRotate}</Link></li>
                        <li><Link href={`/${lang}/compress-pdf`} className="hover:text-white transition-colors">{t.toolCompress}</Link></li>
                        <li><Link href={`/${lang}/merge-pdf`} className="hover:text-white transition-colors">{t.toolMerge}</Link></li>
                        <li><Link href={`/${lang}/split-pdf`} className="hover:text-white transition-colors">{t.toolSplit}</Link></li>
                        <li><Link href={`/${lang}/extract-pdf-pages`} className="hover:text-white transition-colors">{t.toolExtract}</Link></li>
                        <li><Link href={`/${lang}/make-pdf-fillable`} className="hover:text-white transition-colors">{t.toolMakeFillable}</Link></li>
                        <li><Link href={`/${lang}/sign-pdf`} className="hover:text-white transition-colors">{t.toolSign}</Link></li>
                        <li><Link href={`/${lang}/organize-pdf`} className="hover:text-white transition-colors">{t.toolOrganize}</Link></li>
                        <li><Link href={`/${lang}/flatten-pdf`} className="hover:text-white transition-colors">{t.toolFlatten}</Link></li>
                        <li><Link href={`/${lang}/crop-pdf`} className="hover:text-white transition-colors">{t.toolCrop}</Link></li>
                        <li><Link href={`/${lang}/invoice-ocr`} className="hover:text-white transition-colors font-bold text-canada-red">{t.toolInvoiceOcr}</Link></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 3: Editing Guides */}
               <div className="lg:col-span-1">
                  <FooterSection title={lang === 'fr' ? 'Hubs & Guides' : 'Guide Hubs'}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href={`/${lang}/guides/ultimate-pdf-guide`} className="text-white hover:text-canada-red transition-colors font-bold flex items-center gap-2"><BookOpen size={14} /> {t.ultimateGuide}</Link></li>
                        <li className="pt-2 mt-2 border-t border-white/10"></li>
                        <li><Link href={`/${lang}/guides/pdf-conversions`} className="hover:text-white transition-colors flex items-center gap-2"><Zap size={14} /> {lang === 'fr' ? 'Conversion' : 'Conversions'}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-editing`} className="hover:text-white transition-colors flex items-center gap-2"><Scissors size={14} /> {lang === 'fr' ? 'Édition' : 'Editing'}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-security`} className="hover:text-white transition-colors flex items-center gap-2"><ShieldCheck size={14} /> {lang === 'fr' ? 'Sécurité' : 'Security'}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-ocr-analysis`} className="hover:text-white transition-colors flex items-center gap-2"><Eye size={14} /> {lang === 'fr' ? 'OCR & Analyse' : 'OCR & Analysis'}</Link></li>
                        <li className="pt-2 mt-2 border-t border-white/10"><Link href={`/${lang}/guides`} className="text-canada-red hover:text-white transition-colors font-bold flex items-center gap-2">{lang === 'en' ? 'View All Guides →' : 'Voir Tous les Guides →'}</Link></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 4: Format Guides */}
               <div className="lg:col-span-1">
                  <FooterSection title={t.footerFormatGroup}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href={`/${lang}/guides/word-to-pdf`} className="hover:text-white transition-colors">{t.wordToPdfGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-to-word`} className="hover:text-white transition-colors">{t.pdfToWordGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/heic-to-pdf`} className="hover:text-white transition-colors">{t.heicToPdfGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-to-epub`} className="hover:text-white transition-colors">{t.pdfToEpubGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/epub-to-pdf`} className="hover:text-white transition-colors">{t.epubToPdfGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/cbr-to-pdf`} className="hover:text-white transition-colors">{t.cbrToPdfGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/email-to-pdf`} className="hover:text-white transition-colors">{t.emailToPdfGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/insert-picture-in-pdf`} className="hover:text-white transition-colors">{t.insertPictureGuide}</Link></li>
                        <li><Link href={`/${lang}/guides/pdf-page-remover`} className="hover:text-white transition-colors">{t.pageRemoverGuide}</Link></li>
                     </ul>
                  </FooterSection>
               </div>

               {/* Column 5: Resources */}
               <div className="lg:col-span-1">
                  <FooterSection title={lang === 'fr' ? 'Ressources' : 'Resources'}>
                     <ul className="space-y-3.5 text-sm font-medium text-modern-neutral-300">
                        <li><Link href={`/${lang}/about`} className="hover:text-white transition-colors">{lang === 'fr' ? 'À Propos' : 'About Us'}</Link></li>
                        <li><Link href={`/${lang}/howto`} className="hover:text-white transition-colors">{t.navHowTo}</Link></li>
                        <li><Link href={`/${lang}/support`} className="hover:text-white transition-colors">{t.navSupport}</Link></li>
                        <li><Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{t.privacy}</Link></li>
                        <li><Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{t.termsService}</Link></li>
                        <li><Link href={`/${lang}/pricing`} className="hover:text-white transition-colors">{lang === 'fr' ? 'Tarification' : 'Pricing'}</Link></li>
                        {/* Security & Privacy Guides */}
                        <li className="pt-3 mt-3 border-t border-white/10">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-modern-neutral-500 mb-2 block">{lang === 'fr' ? 'Sécurité' : 'Security'}</span>
                        </li>
                        <li><Link href={`/${lang}/guides/private-pdf-tools`} className="hover:text-white transition-colors">{lang === 'fr' ? 'Outils PDF Privés' : 'Private PDF Tools'}</Link></li>
                        <li><Link href={`/${lang}/guides/finance-pdf-security`} className="hover:text-white transition-colors">{lang === 'fr' ? 'PDF Finance' : 'Finance PDF Security'}</Link></li>
                        <li><Link href={`/${lang}/guides/legal-pdf-tools`} className="hover:text-white transition-colors">{lang === 'fr' ? 'PDF Juridique' : 'Legal PDF Security'}</Link></li>
                        <li><Link href={`/${lang}/guides/healthcare-pdf-security`} className="hover:text-white transition-colors">{lang === 'fr' ? 'PDF Santé' : 'Healthcare PDF'}</Link></li>
                        <li className="pt-3 mt-3 border-t border-white/10">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-modern-neutral-500 mb-2 block">{lang === 'fr' ? 'Téléchargements' : 'Downloads'}</span>
                        </li>
                        <li><Link href={`/${lang}/surah-baqarah-pdf`} className="hover:text-white transition-colors font-semibold text-green-400">{lang === 'fr' ? 'Sourate Baqarah PDF' : 'Surah Baqarah PDF'}</Link></li>
                        <li><Link href={`/${lang}/surah-yasin-pdf`} className="hover:text-white transition-colors font-semibold text-emerald-400">{lang === 'fr' ? 'Sourate Yasin PDF' : 'Surah Yasin PDF'}</Link></li>
                     </ul>
                  </FooterSection>
               </div>
            </div>

            {/* Bottom Bar - Minimalist */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col md:flex-row items-center gap-6">
                  <p className="text-xs text-modern-neutral-300 font-bold" suppressHydrationWarning>&copy; {year} pdfcanada.ca</p>

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

               <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-modern-neutral-300">
                  <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{t.termsService}</Link>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{t.privacy}</Link>
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