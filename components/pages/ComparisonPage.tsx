import React from 'react';
import { Scale, CheckCircle2, XCircle, Shield, Globe, Cpu, Server, Zap, Lock, Info } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';
import Link from 'next/link';

interface ComparisonPageProps {
    lang: Language;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    return (
        <PageLayout 
            title={isFr ? "Local vs Cloud : Lequel Choisir ?" : (isPt ? "Local vs Cloud: Qual Escolher?" : "Local vs. Cloud: The PDF Security Truth")}
            subtitle={isFr ? "Pourquoi le traitement local est l'étalon-or pour la confidentialité des documents" : (isPt ? "Por que o processamento local é o padrão ouro para privacidade de documentos" : "Why local-first processing is the gold standard for document privacy in 2026")}
            icon={<Scale size={32} />}
        >
            <div className="max-w-5xl mx-auto py-12 px-4">
                {/* Comparison Table */}
                <div className="overflow-hidden bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl mb-20">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                <th className="p-8 text-xl font-black">{isFr ? "Fonctionnalité" : "Feature"}</th>
                                <th className="p-8 text-xl font-black text-canada-red">{isFr ? "Local (PDF Canada)" : "Local (PDF Canada)"}</th>
                                <th className="p-8 text-xl font-black text-slate-400">{isFr ? "Cloud (Concurrents)" : "Cloud (Competitors)"}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr>
                                <td className="p-8 font-bold">{isFr ? "Transfert de Fichiers" : "File Transfer"}</td>
                                <td className="p-8 flex items-center gap-2 text-emerald-600 font-bold">
                                    <CheckCircle2 size={20} />
                                    {isFr ? "Aucun - Reste sur l'appareil" : "None - Stays on device"}
                                </td>
                                <td className="p-8 flex items-center gap-2 text-red-500">
                                    <XCircle size={20} />
                                    {isFr ? "Upload vers serveur distant" : "Uploaded to remote server"}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-bold">{isFr ? "Stockage des Données" : "Data Storage"}</td>
                                <td className="p-8 flex items-center gap-2 text-emerald-600 font-bold">
                                    <CheckCircle2 size={20} />
                                    {isFr ? "Mémoire vive (RAM) temporaire" : "Temporary RAM only"}
                                </td>
                                <td className="p-8 flex items-center gap-2 text-red-500">
                                    <XCircle size={20} />
                                    {isFr ? "Stocké sur disque (temporaire)" : "Stored on disk (temporary)"}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-bold">{isFr ? "Vitesse de Traitement" : "Processing Speed"}</td>
                                <td className="p-8 flex items-center gap-2 text-emerald-600 font-bold">
                                    <CheckCircle2 size={20} />
                                    {isFr ? "Instantané (Vitesse CPU)" : "Instant (CPU Speed)"}
                                </td>
                                <td className="p-8 flex items-center gap-2 text-slate-500">
                                    <Info size={20} />
                                    {isFr ? "Dépend de la connexion" : "Connection dependent"}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-bold">{isFr ? "Conformité PIPEDA" : "PIPEDA Compliance"}</td>
                                <td className="p-8 flex items-center gap-2 text-emerald-600 font-bold">
                                    <CheckCircle2 size={20} />
                                    {isFr ? "Native par conception" : "Native by design"}
                                </td>
                                <td className="p-8 flex items-center gap-2 text-slate-500">
                                    <Info size={20} />
                                    {isFr ? "Nécessite accords juridiques" : "Requires legal agreements"}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-bold">{isFr ? "Accès hors-ligne" : "Offline Access"}</td>
                                <td className="p-8 flex items-center gap-2 text-emerald-600 font-bold">
                                    <CheckCircle2 size={20} />
                                    {isFr ? "Oui (une fois chargé)" : "Yes (once loaded)"}
                                </td>
                                <td className="p-8 flex items-center gap-2 text-red-500">
                                    <XCircle size={20} />
                                    {isFr ? "Non - Requis Internet" : "No - Internet required"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Educational Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-black mb-6">{isFr ? "Le Risque du Cloud" : "The Cloud Risk"}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {isFr 
                                ? "Chaque fois que vous uploadez un PDF vers un service cloud, vous perdez le contrôle de vos données. Même les services les plus réputés peuvent subir des fuites de données, des erreurs de configuration de serveur ou des changements de politique de confidentialité."
                                : "Every time you upload a PDF to a cloud service, you relinquish control over your data. Even the most reputable services can suffer from data breaches, server misconfigurations, or changes in privacy policy."}
                        </p>
                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-800/30">
                            <h4 className="font-bold text-red-900 dark:text-red-400 mb-2 flex items-center gap-2">
                                <Shield size={18} />
                                {isFr ? "Documents Sensibles" : "Sensitive Documents"}
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-300">
                                {isFr ? "Les contrats, dossiers médicaux et documents financiers ne devraient JAMAIS être uploadés vers un serveur tiers si une alternative locale existe." : "Contracts, medical records, and financial documents should NEVER be uploaded to a third-party server if a local alternative exists."}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black mb-6">{isFr ? "L'Avantage Local" : "The Local Edge"}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {isFr 
                                ? "Grâce à WebAssembly (WASM), votre navigateur devient un moteur de traitement PDF puissant. Vos fichiers sont manipulés en mémoire locale et ne sont jamais transmis sur le réseau."
                                : "Thanks to WebAssembly (WASM), your browser becomes a powerful PDF processing engine. Your files are manipulated in local memory and are never transmitted over the network."}
                        </p>
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                            <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-2 flex items-center gap-2">
                                <Cpu size={18} />
                                {isFr ? "Souveraineté des Données" : "Data Sovereignty"}
                            </h4>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300">
                                {isFr ? "Vous gardez 100% de la propriété et du contrôle. Rien n'est stocké, rien n'est surveillé." : "You maintain 100% ownership and control. Nothing is stored, nothing is monitored."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-canada-red/5" />
                    <div className="relative z-10">
                        <Lock className="mx-auto mb-6 text-canada-red" size={48} />
                        <h2 className="text-3xl font-black mb-4">{isFr ? "Passez au Traitement Privé" : "Switch to Private Processing"}</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            {isFr ? "Arrêtez d'exposer vos données. Utilisez des outils qui respectent votre vie privée par défaut." : "Stop exposing your sensitive data. Start using tools that respect your privacy by default."}
                        </p>
                        <Link 
                            href={`/${lang}`}
                            className="inline-flex items-center gap-2 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            {isFr ? "Explorer nos outils" : "Explore Our Tools"}
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
