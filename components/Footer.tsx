
import React, { useMemo } from 'react';
import { Heart, ShieldCheck, MapPin } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { triggerHaptic } from '../utils/haptics';

interface FooterProps {
   lang: Language;
   onNavigate: (view: any, path?: string) => void;
}

const FooterComponent: React.FC<FooterProps> = ({ lang, onNavigate }) => {
   const t = translations[lang];
   const year = useMemo(() => new Date().getFullYear(), []);

   return (
      <footer className="mt-auto bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t-4 border-canada-red transition-colors duration-200">
         <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">

               {/* Column 1: Brand */}
               <div className="space-y-4 lg:col-span-1">
                  <a href="/" className="flex items-center gap-2 text-gray-900 dark:text-white cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate('HOME'); }}>
                     <span className="text-lg font-bold">pdfcanada.ca</span>
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                     {t.footerBuilt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded w-fit shadow-sm">
                     <MapPin size={12} className="text-canada-red" />
                     <span>Toronto, Ontario</span>
                  </div>
               </div>

               {/* Column 2: Edit & Optimize */}
               <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-4">{t.footerEditGroup}</p>
                  <ul className="space-y-3 text-sm">
                     <li><a href="/delete-pdf-pages" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/delete-pdf-pages'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolDelete}</a></li>
                     <li><a href="/rotate-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/rotate-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolRotate}</a></li>
                     <li><a href="/organize-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/organize-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolOrganize}</a></li>
                     <li><a href="/pdf-page-remover" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-page-remover'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfPageRemover}</a></li>
                     <li><a href="/make-pdf-fillable" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/make-pdf-fillable'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolMakeFillable}</a></li>
                     <li><a href="/make-pdf-non-editable" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/make-pdf-non-editable'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolFlatten}</a></li>
                     <li><a href="/crop-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/crop-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolCrop}</a></li>
                  </ul>
               </div>

               {/* Column 3: Convert PDF */}
               <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-4">{t.footerConvertGroup}</p>
                  <ul className="space-y-3 text-sm">
                     <li><a href="/word-to-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/word-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolWordToPdf}</a></li>
                     <li><a href="/pdf-to-word" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-to-word'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfToWord}</a></li>
                     <li><a href="/heic-to-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/heic-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolHeic}</a></li>
                     <li><a href="/epub-to-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/epub-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolEpubToPdf}</a></li>
                     <li><a href="/pdf-to-epub" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-to-epub'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfToEpub}</a></li>
                     <li><a href="/cbr-to-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('TOOL_PAGE', '/cbr-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolCbrToPdf}</a></li>
                  </ul>
               </div>

               {/* Column 4: Resources */}
               <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-4">{t.footerGuidesGroup}</p>
                  <ul className="space-y-3 text-sm">
                     <li><a href="/guides/ultimate-pdf-guide" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide'); }} className="text-canada-red font-bold hover:underline transition-colors focus:outline-none">{t.ultimateGuide}</a></li>
                     <li><a href="/guides/edit-xfa-pdf" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('GUIDE_EDIT_XFA', '/guides/edit-xfa-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.editXfaGuide}</a></li>
                     <li><a href="/howto" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('HOW_TO', '/howto'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.navHowTo}</a></li>
                     <li><a href="/support" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('SUPPORT', '/support'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.navSupport}</a></li>
                     <li><a href="/sorry" onClick={(e) => { e.preventDefault(); triggerHaptic('light'); onNavigate('SORRY', '/sorry'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.sorryPolicy}</a></li>
                  </ul>
               </div>

               {/* Column 5: Safety & Tagline */}
               <div className="flex flex-col items-start gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 w-full shadow-sm">
                     <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck className="text-green-600" size={20} />
                        <span className="font-bold text-gray-900 dark:text-white text-sm">{t.secure || 'Secure Processing'}</span>
                     </div>
                     <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t.footerPrivacyNotice}
                     </p>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                     "{t.footerTagline}"
                  </p>
               </div>

            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
               <p>&copy; {year} pdfcanada.ca. {t.footerRights}</p>

               <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('TERMS'); }} className="hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline py-2 min-h-[44px]">{t.termsService}</a>
                  <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('PRIVACY'); }} className="hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline py-2 min-h-[44px]">{t.privacy}</a>
                  <span className="flex items-center gap-1 py-2">
                     {t.footerMade} <Heart size={10} className="text-canada-red fill-current" /> in 🇨🇦
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export const Footer = React.memo(FooterComponent);