import React from 'react';
import { History, Zap, Shield, Sparkles, RefreshCcw, CheckCircle2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';

interface ChangelogPageProps {
    lang: Language;
}

export const ChangelogPage: React.FC<ChangelogPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    const updates = [
        {
            date: `May ${CURRENT_YEAR}`,
            title: isFr ? "Mise à jour SEO et Architecture de Hubs" : "SEO & Hub Architecture Update",
            type: "Major",
            changes: [
                isFr ? "Lancement de nouveaux hubs thématiques pour la conversion et l'édition." : "Launched new topical hubs for Conversion, Editing, Security, and Business tools.",
                isFr ? "Optimisation des performances de rendu côté serveur pour une indexation plus rapide." : "Optimized server-side rendering performance for faster indexing.",
                isFr ? "Amélioration du maillage interne contextuel dans les guides experts." : "Enhanced contextual internal linking across expert guides."
            ]
        },
        {
            date: `April ${CURRENT_YEAR}`,
            title: isFr ? "Amélioration de l'OCR et de la Sécurité" : "OCR & Security Enhancements",
            type: "Feature",
            changes: [
                isFr ? "Amélioration de la précision de l'OCR pour les factures canadiennes." : "Improved OCR accuracy for Canadian invoices and receipts.",
                isFr ? "Mise à jour des bibliothèques WebAssembly pour un traitement local plus rapide." : "Updated WebAssembly libraries for 20% faster local processing.",
                isFr ? "Renforcement de la conformité PIPEDA avec de nouveaux audits de non-upload." : "Hardened PIPEDA compliance with new zero-upload verification protocols."
            ]
        },
        {
            date: `March ${CURRENT_YEAR}`,
            title: isFr ? "Expansion Multilingue" : "Multilingual Expansion",
            type: "Internal",
            changes: [
                isFr ? "Lancement complet des versions Française et Portugaise." : "Full launch of French and Portuguese localized versions.",
                isFr ? "Nouveau système de guides experts pour l'accessibilité PDF." : "New expert guide system for PDF accessibility and WCAG compliance.",
                isFr ? "Optimisation du mode sombre sur l'ensemble du site." : "Dark mode optimization across all tool interfaces."
            ]
        }
    ];

    return (
        <PageLayout 
            title={isFr ? "Journal des Modifications" : (isPt ? "Registro de Alterações" : "Product Changelog")}
            subtitle={isFr ? "Suivez l'évolution et les améliorations de nos outils" : (isPt ? "Acompanhe a evolução e melhorias de nossas ferramentas" : "Stay up to date with the latest features and security updates")}
            icon={<History size={32} />}
        >
            <div className="max-w-4xl mx-auto py-12 px-4">
                <div className="space-y-12">
                    {updates.map((update, i) => (
                        <div key={i} className="relative pl-12 border-l-2 border-slate-200 dark:border-slate-800">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-canada-red border-4 border-white dark:border-gray-950 shadow-sm" />
                            
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                                    {update.date}
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                                    {update.title}
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md uppercase tracking-tighter ${
                                        update.type === 'Major' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                                    }`}>
                                        {update.type}
                                    </span>
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {update.changes.map((change, j) => (
                                    <li key={j} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                                        {change}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/30 text-center">
                    <Sparkles className="text-blue-600 mx-auto mb-4" size={32} />
                    <h4 className="font-bold text-xl mb-2">{isFr ? "Toujours en mouvement" : "Always Improving"}</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                        {isFr 
                            ? "Nous mettons à jour pdfcanada.ca presque chaque semaine pour garantir les meilleures performances et la sécurité la plus stricte."
                            : "We update pdfcanada.ca almost weekly to ensure peak performance and the strictest security standards for Canadian users."}
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};
