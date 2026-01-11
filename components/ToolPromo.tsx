'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TOOL_ICONS } from './ToolIcons';
import { getLocalizedToolConfig } from '@/lib/toolConfig';
import { Language } from '@/utils/i18n';

interface ToolPromoProps {
    lang: Language;
    tool: string; // The slug, e.g., 'merge-pdf'
}

export const ToolPromo: React.FC<ToolPromoProps> = ({ lang, tool }) => {
    const config = getLocalizedToolConfig(tool, lang);
    const Icon = TOOL_ICONS[tool] || Sparkles;

    if (!config) return null;

    const t = {
        en: {
            ready: "Ready to",
            launch: "Launch Tool",
            free: "Free • Secure • Private"
        },
        fr: {
            ready: "Prêt à",
            launch: "Lancer l'Outil",
            free: "Gratuit • Sécurisé • Privé"
        },
        pt: {
            ready: "Pronto para",
            launch: "Abrir Ferramenta",
            free: "Grátis • Seguro • Privado"
        }
    };

    const strings = t[lang as keyof typeof t] || t.en;

    return (
        <div className="w-full mb-12 animate-fade-in origin-top">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-gray-200 dark:shadow-none border border-white/10 text-white">

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red opacity-20 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-[100px] -ml-32 -mb-32 rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold tracking-widest uppercase mb-6 text-white/90">
                            <Sparkles size={12} className="text-yellow-400" />
                            {strings.free}
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                            {strings.ready} <span className="text-transparent bg-clip-text bg-gradient-to-r from-canada-red to-red-400">{config.title}</span>?
                        </h2>

                        <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                            {config.description}
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link
                            href={`/${lang}/${tool}`}
                            className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] active:scale-95"
                        >
                            <div className="w-8 h-8 flex items-center justify-center text-canada-red">
                                <Icon size={24} strokeWidth={2.5} />
                            </div>
                            <span>{strings.launch}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-slate-900" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};
