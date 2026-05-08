import {
    Shield, CloudOff, Laptop, Award, Sparkles, BookOpen,
    FileText, LayoutGrid, ShieldCheck, ArrowRight
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapleLeaf } from '@/components/MapleLeaf';
import Link from 'next/link';
import { translations, Language } from '@/utils/i18n';
import { getAllToolSlugs, getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

import { TOOL_ICONS } from '../ToolIcons';

export function HomePageServer({ lang }: Props) {
    const t = translations[lang];
    const toolSlugs = getAllToolSlugs();

    // Get localized tool names
    const tools = toolSlugs.map(slug => {
        const config = getLocalizedToolConfig(slug, lang);
        return {
            slug,
            title: config?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            Icon: TOOL_ICONS[slug] || Sparkles
        };
    });

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={lang} />

                <main id="main-content" className="flex-grow">
                    {/* Hero Section - Static & SEO Heavy */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm border border-canada-red/10 rounded-full text-canada-red-dark text-xs sm:text-sm font-black tracking-widest uppercase shadow-md mb-6 sm:mb-8">
                            <MapleLeaf className="w-4 h-4" />
                            <span>{t.builtIn}</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-gray-900 mb-4 sm:mb-6">
                            {t.title}
                        </h1>
                        <p className="text-2xl sm:text-3xl font-bold text-canada-red-dark max-w-4xl mx-auto mb-6">
                            {t.subtitle}
                        </p>

                        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-12">
                            {t.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                            {[
                                { icon: Shield, text: t.localProcessing },
                                { icon: CloudOff, text: t.noSignup },
                                { icon: Laptop, text: t.secure },
                                { icon: Award, text: t.guarantee },
                            ].map(({ icon: Icon, text }, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl text-gray-700 text-xs sm:text-sm font-semibold shadow-sm"
                                >
                                    <Icon size={16} className="text-canada-red" aria-hidden="true" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Value Prop Section */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {lang === 'fr' ? 'Outils PDF sécurisés fonctionnant localement dans votre navigateur' : (lang === 'pt' ? 'Ferramentas PDF seguras que funcionam localmente no seu navegador' : 'Secure PDF Tools That Work Locally in Your Browser')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {lang === 'fr' 
                                ? 'Contrairement à d\'autres services, pdfcanada.ca traite vos fichiers directement sur votre appareil. Vos documents ne sont jamais téléchargés sur nos serveurs, garantissant une confidentialité totale et une conformité à la LPRPDE (PIPEDA).'
                                : (lang === 'pt'
                                    ? 'Ao contrário de outros serviços, o pdfcanada.ca processa seus arquivos diretamente no seu dispositivo. Seus documentos nunca são enviados para nossos servidores, garantindo total privacidade.'
                                    : 'Unlike other services, pdfcanada.ca processes your files directly on your device. Your documents are never uploaded to our servers, ensuring total privacy and PIPEDA compliance.')}
                        </p>
                    </section>

                    {/* Most Popular Tools */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                            {lang === 'fr' ? 'Outils PDF les plus populaires' : (lang === 'pt' ? 'Ferramentas PDF mais populares' : 'Most Popular PDF Tools')}
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                            {['merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-word', 'sign-pdf'].map(slug => {
                                const tool = tools.find(t => t.slug === slug);
                                if (!tool) return null;
                                return (
                                    <li key={slug}>
                                        <Link
                                            href={`/${lang}/${slug}`}
                                            className="group bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-canada-red hover:shadow-xl transition-all duration-200 hover:scale-[1.02] block"
                                        >
                                            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-canada-red/10 rounded-xl flex items-center justify-center group-hover:bg-canada-red transition-all duration-200">
                                                    <tool.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-canada-red group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-canada-red transition-colors">
                                                    {tool.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    {/* Convert PDF Files */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50/50 rounded-3xl my-12">
                        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                            {lang === 'fr' ? 'Convertir des fichiers PDF' : (lang === 'pt' ? 'Converter arquivos PDF' : 'Convert PDF Files')}
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                            {['word-to-pdf', 'pdf-to-word', 'jpg-to-pdf', 'png-to-pdf', 'epub-to-pdf', 'heic-to-pdf', 'pdf-to-jpg', 'pdf-to-png', 'pdf-to-excel', 'pdf-to-csv'].map(slug => {
                                const tool = tools.find(t => t.slug === slug);
                                if (!tool) return null;
                                return (
                                    <li key={slug}>
                                        <Link
                                            href={`/${lang}/${slug}`}
                                            className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-canada-red transition-all"
                                        >
                                            <div className="flex items-center gap-3">
                                                <tool.Icon className="w-5 h-5 text-canada-red" />
                                                <span className="text-xs font-semibold text-gray-700 group-hover:text-canada-red">{tool.title}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    {/* Edit PDF Files */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                            {lang === 'fr' ? 'Modifier des fichiers PDF' : (lang === 'pt' ? 'Editar arquivos PDF' : 'Edit PDF Files')}
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                            {['delete-pdf-pages', 'rotate-pdf', 'organize-pdf', 'crop-pdf', 'make-pdf-non-editable', 'sign-pdf', 'make-pdf-fillable', 'analyze-pdf'].map(slug => {
                                const tool = tools.find(t => t.slug === slug);
                                if (!tool) return null;
                                return (
                                    <li key={slug}>
                                        <Link
                                            href={`/${lang}/${slug}`}
                                            className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-canada-red transition-all"
                                        >
                                            <div className="flex items-center gap-3">
                                                <tool.Icon className="w-5 h-5 text-canada-red" />
                                                <span className="text-xs font-semibold text-gray-700 group-hover:text-canada-red">{tool.title}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-zinc-900 text-white rounded-3xl my-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <MapleLeaf className="w-64 h-64 rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                        {lang === 'fr' ? 'Guides & Tutoriels' : (lang === 'pt' ? 'Guias & Tutoriais' : 'Guides & Tutorials')}
                                    </h2>
                                    <p className="text-zinc-400">
                                        {lang === 'fr' ? 'Apprenez à maîtriser vos documents PDF' : (lang === 'pt' ? 'Domine seus documentos PDF com nossos guias especializados' : 'Master your PDF documents with our expert guides')}
                                    </p>
                                </div>
                                <Link href={`/${lang}/guides`} className="text-canada-red font-bold hover:text-white flex items-center gap-2 transition-colors">
                                    {lang === 'fr' ? 'Voir tous les guides' : (lang === 'pt' ? 'Ver todos os guias' : 'View all guides')} <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { title: lang === 'fr' ? 'Guide Ultime PDF' : (lang === 'pt' ? 'Guia Definitivo PDF' : 'Ultimate PDF Guide'), desc: lang === 'fr' ? 'Le manuel complet pour tous les outils.' : (lang === 'pt' ? 'O manual completo para todas as ferramentas.' : 'The complete manual for all PDF tools.'), slug: 'ultimate-pdf-guide', icon: BookOpen },
                                    { title: lang === 'fr' ? 'Conversion vers Word' : (lang === 'pt' ? 'Guia PDF para Word' : 'PDF to Word Guide'), desc: lang === 'fr' ? 'Convertir documents scannés et natifs.' : (lang === 'pt' ? 'Converter documentos digitalizados e nativos.' : 'Convert scanned and native documents.'), slug: 'pdf-to-word', icon: FileText },
                                    { title: lang === 'fr' ? 'Fusionner des PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide'), desc: lang === 'fr' ? 'Combiner plusieurs fichiers en un seul.' : (lang === 'pt' ? 'Combine vários arquivos em um só.' : 'Combine multiple files into one.'), slug: 'merge-pdf', icon: LayoutGrid },
                                    { title: lang === 'fr' ? 'Sécurité & Privée' : (lang === 'pt' ? 'Guia de Segurança' : 'Security Guide'), desc: lang === 'fr' ? 'Protéger vos données sensibles.' : (lang === 'pt' ? 'Proteja seus dados sensíveis.' : 'Protect your sensitive data.'), slug: 'pdf-security', icon: ShieldCheck }
                                ].map((guide, i) => (
                                    <Link key={i} href={`/${lang}/guides/${guide.slug}`} className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-canada-red transition-all group">
                                        <div className="w-10 h-10 bg-canada-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-canada-red transition-colors">
                                            <guide.icon className="w-5 h-5 text-canada-red group-hover:text-white" />
                                        </div>
                                        <h3 className="font-bold mb-2 group-hover:text-canada-red">{guide.title}</h3>
                                        <p className="text-sm text-zinc-400">{guide.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Why Local PDF Processing Matters */}
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {lang === 'fr' ? 'Pourquoi le traitement local des PDF est important' : (lang === 'pt' ? 'Por que o processamento local de PDF é importante' : 'Why Local PDF Processing Matters')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                                    <Shield className="text-canada-red" /> {lang === 'fr' ? 'Confidentialité totale' : 'Privacy First'}
                                </h3>
                                <p className="text-gray-600">
                                    {lang === 'fr' 
                                        ? 'Vos fichiers ne quittent jamais votre navigateur. C\'est la garantie ultime que vos données sensibles restent privées.'
                                        : 'Your files never leave your browser. This is the ultimate guarantee that your sensitive data stays private.'}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                                    <Laptop className="text-canada-red" /> {lang === 'fr' ? 'Vitesse instantanée' : 'Zero Latency'}
                                </h3>
                                <p className="text-gray-600">
                                    {lang === 'fr'
                                        ? 'Sans téléchargement, le traitement commence immédiatement. C\'est plus rapide que n\'importe quel outil basé sur le cloud.'
                                        : 'Without the need to upload large files, processing starts instantly. It\'s faster than any cloud-based tool.'}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Secure PDF Tools for Canadian Users */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center bg-canada-red/5 rounded-3xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {lang === 'fr' ? 'Outils PDF sécurisés pour les utilisateurs canadiens' : (lang === 'pt' ? 'Ferramentas PDF seguras para usuários canadenses' : 'Secure PDF Tools for Canadian Users')}
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto" data-ai-summary="true">
                            {lang === 'fr'
                                ? 'pdfcanada.ca offre une suite complète d\'outils PDF gratuits qui fonctionnent entièrement dans votre navigateur. Conforme aux normes canadiennes PIPEDA (LPRPDE), nous garantissons que vos documents financiers, médicaux et personnels sont traités localement au Canada, sur votre propre matériel.'
                                : (lang === 'pt'
                                    ? 'O pdfcanada.ca oferece um conjunto completo de ferramentas PDF gratuitas que funcionam inteiramente no seu navegador. Processamento local no Canadá para sua total segurança.'
                                    : 'pdfcanada.ca offers a complete suite of free PDF tools that work entirely in your browser. Compliant with Canadian PIPEDA standards, we ensure your financial, medical, and personal documents are processed locally in Canada, on your own hardware.')}
                        </p>
                    </section>

                                        {/* Technical Proof & Verification - E-E-A-T Signal */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-canada-red/10 blur-[120px] rounded-full pointer-events-none" />
                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-canada-red/20 text-canada-red border border-canada-red/30 text-xs font-black uppercase tracking-widest mb-6">
                                        <ShieldCheck size={14} />
                                        <span>{lang === 'fr' ? 'Preuve Technique' : 'Technical Proof'}</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                                        {lang === 'fr' ? 'La Preuve est dans le Code' : 'The Proof is in the Code'}
                                    </h2>
                                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                        {lang === 'fr'
                                            ? 'pdfcanada.ca est construit sur une architecture "Local-First". Vos documents ne touchent jamais nos serveurs. Voici comment vous pouvez le vérifier vous-même.'
                                            : 'pdfcanada.ca is built on a "Local-First" architecture. Your documents never touch our servers. Here is how you can verify it yourself.'}
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { step: "1", text: lang === 'fr' ? "Ouvrez les 'Outils de développement' (F12)." : "Open your browser's 'Developer Tools' (F12)." },
                                            { step: "2", text: lang === 'fr' ? "Cliquez sur l'onglet 'Réseau'." : "Go to the 'Network' tab." },
                                            { step: "3", text: lang === 'fr' ? "Fusionnez ou compressez un fichier. Vous verrez que 0 octet de données de fichier est envoyé." : "Perform any PDF action. You will see 0 bytes of file data sent to any server." },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                                <span className="w-8 h-8 rounded-full bg-canada-red flex items-center justify-center font-bold text-sm shrink-0">{item.step}</span>
                                                <p className="text-sm font-medium text-slate-300">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-inner">
                                    <div className="flex items-center justify-between mb-8">
                                        <h4 className="font-bold text-xl">{lang === 'fr' ? 'Comparaison de Sécurité' : 'Security Comparison'}</h4>
                                        <Link href={`/${lang}/local-vs-cloud`} className="text-canada-red text-sm font-bold hover:underline flex items-center gap-1">
                                            {lang === 'fr' ? 'Voir le rapport' : 'Full Report'} <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                                                <span>{lang === 'fr' ? 'Confidentialité Locale' : 'Local Privacy'}</span>
                                                <span className="text-emerald-500">100%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-full" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                                                <span>{lang === 'fr' ? 'Confidentialité Cloud' : 'Cloud Privacy'}</span>
                                                <span className="text-red-500">0-40%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500 w-[30%]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-white">WASM</p>
                                            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Engine</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-emerald-500">PIPEDA</p>
                                            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Compliant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}

                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                            {lang === 'fr' ? 'Foire aux questions' : (lang === 'pt' ? 'Perguntas frequentes' : 'Frequently Asked Questions')}
                        </h2>
                        <div className="space-y-6">
                            {t.seo.homeFaq.map((faq: { q: string, a: string }, i: number) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.q}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </main>

                <Footer lang={lang} />
            </div>
        </>
    );
}
