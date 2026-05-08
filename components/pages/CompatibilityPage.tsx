import React from 'react';
import { Globe, CheckCircle2, AlertTriangle, Monitor, Smartphone, Tablet, Terminal, Zap } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';

interface CompatibilityPageProps {
    lang: Language;
}

export const CompatibilityPage: React.FC<CompatibilityPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    const browsers = [
        { name: "Google Chrome", version: "88+", status: "Full Support" },
        { name: "Mozilla Firefox", version: "85+", status: "Full Support" },
        { name: "Microsoft Edge", version: "88+", status: "Full Support" },
        { name: "Apple Safari", version: "14+", status: "Full Support" },
        { name: "Opera", version: "74+", status: "Full Support" }
    ];

    return (
        <PageLayout 
            title={isFr ? "Compatibilité Navigateur" : (isPt ? "Compatibilidade de Navegador" : "Browser Compatibility")}
            subtitle={isFr ? "Vérifiez si votre navigateur supporte notre technologie de traitement local" : (isPt ? "Verifique se o seu navegador suporta nossa tecnologia de processamento local" : "Ensure your browser supports our high-performance WebAssembly tools")}
            icon={<Globe size={32} />}
        >
            <div className="max-w-4xl mx-auto py-12 px-4">
                {/* Tech Requirement */}
                <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30 mb-12">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                        <Terminal size={24} className="text-blue-600" />
                        {isFr ? "Exigence Technique : WebAssembly" : "Technical Requirement: WebAssembly"}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        {isFr 
                            ? "Nos outils utilisent WebAssembly (WASM) pour traiter les PDF directement dans votre navigateur. Presque tous les navigateurs modernes supportent cette technologie depuis 2017."
                            : "Our tools use WebAssembly (WASM) to process PDFs directly in your browser. Almost all modern browsers have supported this technology since 2017."}
                    </p>
                </div>

                {/* Desktop Support */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <Monitor size={28} className="text-slate-900 dark:text-white" />
                        Desktop Browsers
                    </h2>
                    <div className="grid gap-4">
                        {browsers.map((browser, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center font-bold">
                                        {browser.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{browser.name}</h4>
                                        <p className="text-xs text-slate-500">Version {browser.version}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                    <CheckCircle2 size={16} />
                                    {browser.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mobile Support */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <Smartphone size={28} className="text-slate-900 dark:text-white" />
                        Mobile Browsers
                    </h2>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {isFr 
                                ? "PDF Canada fonctionne sur les versions récentes d'iOS (Safari) et Android (Chrome/Firefox). Notez que le traitement de très gros fichiers peut être limité par la mémoire vive (RAM) de votre appareil mobile."
                                : "PDF Canada works on recent versions of iOS (Safari) and Android (Chrome/Firefox). Note that processing very large files may be limited by your mobile device's RAM."}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                                <Zap className="text-yellow-500" size={20} />
                                <span className="font-bold text-sm">iOS 14+ Support</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                                <Zap className="text-yellow-500" size={20} />
                                <span className="font-bold text-sm">Android 9+ Support</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Warning */}
                <div className="p-8 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-800/30">
                    <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                        <AlertTriangle size={20} />
                        {isFr ? "Navigateurs non supportés" : "Unsupported Browsers"}
                    </h4>
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                        {isFr 
                            ? "Internet Explorer n'est pas supporté car il ne possède pas les capacités WebAssembly nécessaires. Nous recommandons de passer à Microsoft Edge ou Google Chrome."
                            : "Internet Explorer is not supported as it lacks the necessary WebAssembly capabilities. We recommend upgrading to Microsoft Edge or Google Chrome."}
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};
