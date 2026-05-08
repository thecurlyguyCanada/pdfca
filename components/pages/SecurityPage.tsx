import React from 'react';
import { ShieldCheck, Lock, Eye, Zap, Cpu, FileCheck, ShieldAlert, Globe, ServerOff, CheckCircle2, Terminal, ArrowRight } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';
import Link from 'next/link';

interface SecurityPageProps {
    lang: Language;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    return (
        <PageLayout 
            title={isFr ? "Sécurité et Confidentialité" : (isPt ? "Segurança e Privacidade" : "Security & Privacy Architecture")}
            subtitle={isFr ? "Comment nous protégeons vos documents avec le traitement local" : (isPt ? "Como protegemos seus documentos com processamento local" : "How we protect your documents using local-first processing")}
            icon={<ShieldCheck size={32} />}
        >
            <div className="max-w-4xl mx-auto py-12 px-4">
                {/* Trust Hero */}
                <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white mb-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-widest mb-8 border border-blue-500/30">
                            <Lock size={14} />
                            <span>Zero-Upload Policy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            Your Documents <span className="text-blue-400">Never Leave</span> Your Device.
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Traditional PDF tools upload your sensitive files to cloud servers. PDFCanada.ca uses WebAssembly (WASM) to process everything directly in your browser.
                        </p>
                    </div>
                </div>

                {/* Technical Deep Dive */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-4">
                        <Terminal className="text-blue-600" size={32} />
                        The Technical Proof
                    </h2>
                    
                    <div className="grid gap-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex gap-6 items-start">
                                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 shrink-0">
                                    <Cpu size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Client-Side WebAssembly (WASM)</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                        We use high-performance WebAssembly binaries that run in your browser's sandboxed environment. This allows us to perform complex PDF manipulations (merging, splitting, OCR) using your computer's local CPU power instead of our servers.
                                    </p>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl font-mono text-sm text-slate-500">
                                        // Verification: Open Network tab in DevTools.<br/>
                                        // You will see 0.0 KB of document data uploaded.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex gap-6 items-start">
                                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600 shrink-0">
                                    <ServerOff size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">No Server-Side Storage</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Because the processing happens in your RAM, there is no "temp folder" on a remote server where your files could be leaked or hacked. Once you close the tab, the document data is gone forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="mb-20 bg-blue-50 dark:bg-blue-900/10 rounded-[3rem] p-12 border border-blue-100 dark:border-blue-800/30">
                    <div className="text-center mb-12">
                        <Globe className="text-blue-600 mx-auto mb-4" size={48} />
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Canadian Privacy Standards</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={18} />
                                PIPEDA Compliant
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Our architecture exceeds the Personal Information Protection and Electronic Documents Act (PIPEDA) requirements by ensuring we never collect the data we process.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={18} />
                                No Data Tracking
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We do not use third-party analytics that "scrape" your page content. We respect your digital sovereignty.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Verification Steps */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black mb-8 text-center">How to Verify Our Claims</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl items-start">
                            <div className="bg-slate-200 dark:bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                            <p className="text-slate-700 dark:text-slate-300">Open your browser's <strong>Developer Tools</strong> (F12 or Cmd+Option+I).</p>
                        </div>
                        <div className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl items-start">
                            <div className="bg-slate-200 dark:bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                            <p className="text-slate-700 dark:text-slate-300">Click on the <strong>Network</strong> tab.</p>
                        </div>
                        <div className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl items-start">
                            <div className="bg-slate-200 dark:bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                            <p className="text-slate-700 dark:text-slate-300">Perform any PDF action (Merge, Compress, etc.). You will see that <strong>no POST requests</strong> are sent to our servers containing your file data.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-xl">
                    <ShieldAlert className="mx-auto mb-6 text-red-400 animate-pulse" size={48} />
                    <h3 className="text-2xl font-bold mb-4">Security is a Feature, Not an Afterthought.</h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        PDFCanada.ca is built for legal, financial, and healthcare professionals who cannot risk uploading client data to the cloud.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            href={`/${lang}/guides/private-pdf-tools`}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Learn More about Private Tools
                            <ArrowRight size={18} />
                        </Link>
                        <Link 
                            href={`/${lang}/local-vs-cloud`}
                            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            {isFr ? 'Comparer Local vs Cloud' : 'Local vs Cloud Comparison'}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
