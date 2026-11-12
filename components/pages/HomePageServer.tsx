import { Shield, CloudOff, Laptop, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapleLeaf } from '@/components/MapleLeaf';
import { Language } from '@/utils/i18n';
import { isToolLive } from '@/lib/retired';
import { TOOL_GROUPS } from '@/lib/toolGroups';
import { TOOL_ICONS } from '../ToolIcons';
import { HOME_FAQ } from '@/lib/homeFaq';

interface Props {
    lang: Language;
}

/**
 * The homepage is the hub (playbook "Site Architecture"): an H1 that says what searchers type, then every
 * live tool grouped by job with one plain line each, so the page links to everything.
 */
const STR = {
    en: {
        badge: 'Built for Canadians, by Canadians',
        h1: 'Free PDF Tools: Compress, Merge, Split, OCR — Nothing Uploaded',
        lead: 'Every tool runs inside your browser. Your file never leaves your device, there is no account, and nothing is stamped on the result.',
        chips: ['Processed on your device', 'No sign-up, no watermark', 'English and French'],
        hubTitle: 'Every PDF tool, grouped by job',
        hubLead: 'Pick the job. Each tool page lists its real limits, the step people most often get wrong, and what to do when the result isn’t what you expected.',
        proofTitle: 'How can I check that my file isn’t uploaded?',
        proofLead: 'You don’t have to take our word for it. Three steps, any browser:',
        proof: ['Open your browser’s developer tools (F12, or right-click → Inspect).', 'Choose the Network tab and keep it open.', 'Run any tool. You will see the page’s own code load, and no request that carries your file.'],
        security: 'How the site handles files',
        whyTitle: 'Why a PDF tool that doesn’t upload?',
        why: [
            { h: 'Private by design', p: 'Tax slips, passports, IRCC forms, bank statements and contracts are exactly the files people compress and merge. Here they are read into your browser tab and never sent to a server, so there is no copy for anyone to store or leak.' },
            { h: 'No waiting on uploads', p: 'A 40 MB scan doesn’t have to travel to a server and back. Work starts the moment you pick the file, and once a tool page has loaded it keeps working without a connection.' },
        ],
        faq: 'Frequently asked questions',
        guides: 'Guides',
    },
    fr: {
        badge: 'Conçu au Canada, pour les Canadiens',
        h1: 'Outils PDF gratuits : compresser, fusionner, diviser, OCR — sans envoi',
        lead: 'Chaque outil fonctionne dans votre navigateur. Votre fichier ne quitte jamais votre appareil, sans compte, et rien n’est ajouté au résultat.',
        chips: ['Traité sur votre appareil', 'Sans inscription ni filigrane', 'En français et en anglais'],
        hubTitle: 'Tous les outils PDF, classés par tâche',
        hubLead: 'Choisissez la tâche. Chaque page d’outil indique ses limites réelles, l’étape où l’on se trompe le plus souvent et quoi faire si le résultat ne convient pas.',
        proofTitle: 'Comment vérifier que mon fichier n’est pas envoyé ?',
        proofLead: 'Inutile de nous croire sur parole. Trois étapes, dans n’importe quel navigateur :',
        proof: ['Ouvrez les outils de développement (F12, ou clic droit → Inspecter).', 'Choisissez l’onglet Réseau et laissez-le ouvert.', 'Utilisez n’importe quel outil. Vous verrez le code de la page se charger, et aucune requête contenant votre fichier.'],
        security: 'Comment le site traite les fichiers',
        whyTitle: 'Pourquoi un outil PDF sans envoi ?',
        why: [
            { h: 'Confidentiel par conception', p: 'Feuillets d’impôt, passeports, formulaires d’IRCC, relevés bancaires et contrats : ce sont justement les fichiers qu’on compresse et qu’on fusionne. Ici, ils sont lus dans votre onglet et jamais envoyés à un serveur.' },
            { h: 'Aucune attente', p: 'Un balayage de 40 Mo n’a pas à faire l’aller-retour vers un serveur. Le traitement commence dès que vous choisissez le fichier et continue sans connexion une fois la page chargée.' },
        ],
        faq: 'Foire aux questions',
        guides: 'Guides',
    },
};

const POPULAR = ['compress-pdf', 'merge-pdf', 'split-pdf', 'pdf-to-word', 'ocr-pdf', 'sign-pdf'];

export function HomePageServer({ lang }: Props) {
    const l = lang === 'fr' ? 'fr' : 'en';
    const s = STR[l];
    const groups = TOOL_GROUPS.map((g) => ({ ...g, tools: g.tools.filter((tool) => isToolLive(tool.slug)) }));
    const nameOf = (slug: string) => groups.flatMap((g) => g.tools).find((x) => x.slug === slug)?.name[l] ?? slug;

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={lang} />

                <main id="main-content" className="flex-grow">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 sm:pt-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-canada-red/10 rounded-full text-canada-red-dark text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-sm mb-4 sm:mb-6">
                            <MapleLeaf className="w-4 h-4" />
                            <span>{s.badge}</span>
                        </div>
                        <h1 className="hero-title text-3xl sm:text-6xl font-black tracking-tight leading-[1.05] text-gray-900 mb-5 max-w-5xl mx-auto">{s.h1}</h1>
                        <p className="hero-desc text-base sm:text-xl text-zinc-600 max-w-3xl mx-auto font-medium leading-relaxed mb-6">{s.lead}</p>
                        <div className="hidden sm:flex flex-wrap justify-center gap-2 mb-8">
                            {[Shield, CloudOff, Laptop].map((Icon, i) => (
                                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gray-100 rounded-2xl text-gray-700 text-sm font-semibold shadow-sm">
                                    <Icon size={16} className="text-canada-red" aria-hidden="true" /> {s.chips[i]}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {POPULAR.filter(isToolLive).map((slug) => {
                                const Icon = TOOL_ICONS[slug] || Sparkles;
                                return (
                                    <Link
                                        key={slug}
                                        href={`/${l}/${slug}`}
                                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${slug === 'compress-pdf' ? 'bg-canada-red text-white hover:bg-canada-red-dark' : 'bg-white border border-gray-200 text-gray-800 hover:border-canada-red hover:text-canada-red'}`}
                                    >
                                        <Icon size={16} aria-hidden="true" /> {nameOf(slug)}
                                    </Link>
                                );
                            })}
                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-labelledby="all-tools">
                        <h2 id="all-tools" className="text-3xl font-bold text-gray-900 mb-2">{s.hubTitle}</h2>
                        <p className="text-gray-600 max-w-3xl mb-10">{s.hubLead}</p>
                        <div className="grid gap-12">
                            {groups.map((g) => (
                                <div key={g.id} id={g.id} className="scroll-mt-28">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{g.name[l]}</h3>
                                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {g.tools.map((tool) => {
                                            const Icon = TOOL_ICONS[tool.slug] || Sparkles;
                                            return (
                                                <li key={tool.slug}>
                                                    <Link href={`/${l}/${tool.slug}`} className="group flex gap-3 h-full p-4 bg-white/90 rounded-2xl border border-gray-100 hover:border-canada-red hover:shadow-md transition-all">
                                                        <Icon className="w-6 h-6 shrink-0 text-canada-red mt-0.5" aria-hidden="true" />
                                                        <span>
                                                            <span className="block font-bold text-gray-900 group-hover:text-canada-red">{tool.name[l]}</span>
                                                            <span className="block text-sm text-gray-600">{tool.short[l]}</span>
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canada-red/20 text-red-200 border border-canada-red/30 text-xs font-black uppercase tracking-widest mb-5">
                                <ShieldCheck size={14} aria-hidden="true" />
                                <span>{s.security}</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-black mb-3">{s.proofTitle}</h2>
                            <p className="text-slate-300 mb-6">{s.proofLead}</p>
                            <ol className="grid gap-3">
                                {s.proof.map((step, i) => (
                                    <li key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <span className="w-8 h-8 rounded-full bg-canada-red flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
                                        <span className="text-sm sm:text-base text-slate-200">{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <Link href={`/${l}/security`} className="mt-6 inline-flex items-center gap-1 text-red-300 font-bold hover:text-white">
                                {s.security} <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                        </div>
                    </section>

                    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">{s.whyTitle}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {s.why.map((w) => (
                                <div key={w.h} className="p-6 bg-white/90 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{w.h}</h3>
                                    <p className="text-gray-600 leading-relaxed">{w.p}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-labelledby="faq">
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mb-8">{s.faq}</h2>
                        <div className="space-y-4">
                            {HOME_FAQ[l].map((faq, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-sm text-gray-500">
                            <Link href={`/${l}/guides`} className="underline underline-offset-2 hover:text-canada-red">{s.guides}</Link>
                        </p>
                    </section>
                </main>

                <Footer lang={lang} />
            </div>
        </>
    );
}
