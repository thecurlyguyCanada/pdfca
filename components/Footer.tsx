
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
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white cursor-pointer" onClick={() => onNavigate('HOME')}>
                     <span className="text-lg font-bold">pdfcanada.ca</span>
                  </div>
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
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/delete-pdf-pages'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolDelete}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/rotate-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolRotate}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/organize-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolOrganize}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-page-remover'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfPageRemover}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/make-pdf-fillable'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolMakeFillable}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/make-pdf-non-editable'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolFlatten}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/crop-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolCrop}</button></li>
                  </ul>
               </div>

               {/* Column 3: Convert PDF */}
               <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-4">{t.footerConvertGroup}</p>
                  <ul className="space-y-3 text-sm">
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/word-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolWordToPdf}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-to-word'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfToWord}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/heic-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolHeic}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/epub-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolEpubToPdf}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/pdf-to-epub'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolPdfToEpub}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('TOOL_PAGE', '/cbr-to-pdf'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.toolCbrToPdf}</button></li>
                  </ul>
               </div>

               {/* Column 4: Resources */}
               <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-4">{t.footerGuidesGroup}</p>
                  <ul className="space-y-3 text-sm">
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('GUIDE_ULTIMATE', '/guides/ultimate-pdf-guide'); }} className="text-canada-red font-bold hover:underline transition-colors focus:outline-none">{t.ultimateGuide}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('HOW_TO', '/howto'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.navHowTo}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('SUPPORT', '/support'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.navSupport}</button></li>
                     <li><button onClick={() => { triggerHaptic('light'); onNavigate('SORRY', '/sorry'); }} className="hover:text-canada-red transition-colors focus:outline-none">{t.sorryPolicy}</button></li>
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

               <div className="flex items-center gap-6">
                  <button onClick={() => onNavigate('TERMS')} className="hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline">{t.termsService}</button>
                  <button onClick={() => onNavigate('PRIVACY')} className="hover:text-canada-red transition-colors focus:outline-none focus:text-canada-red focus:underline">{t.privacy}</button>
                  <span className="flex items-center gap-1">
                     {t.footerMade} <Heart size={10} className="text-canada-red fill-current" /> in 🇨🇦
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export const Footer = React.memo(FooterComponent);