import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../utils/i18n';

interface AISnapshotProps {
    lang: Language;
    question: string;
    answer: string;
    steps?: string[];
    toolName?: string;
}

export const AISnapshot: React.FC<AISnapshotProps> = ({ lang, question, answer, steps, toolName }) => {
    const t = {
        en: {
            title: "AI Snapshot",
            summary: "Direct Answer",
            steps: "Quick Steps",
            verified: "Verified Answer"
        },
        fr: {
            title: "Aperçu IA",
            summary: "Réponse Directe",
            steps: "Étapes Rapides",
            verified: "Réponse Vérifiée"
        }
    }[lang];

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 my-8 shadow-sm relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-indigo-100/30 w-24 h-24 rounded-full blur-2xl group-hover:bg-indigo-200/40 transition-colors" />

            <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-indigo-900 uppercase tracking-wider">{t.title}</span>
                <div className="ml-auto flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-full border border-indigo-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-tight">{t.verified}</span>
                </div>
            </div>

            <div className="space-y-4 relative">
                <div className="ai-snapshot-answer">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {question}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-[15px]">
                        {answer}
                    </p>
                </div>

                {steps && steps.length > 0 && (
                    <div className="bg-white/50 rounded-xl p-4 border border-indigo-50">
                        <h4 className="text-xs font-bold text-indigo-900 uppercase mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                            {t.steps}
                        </h4>
                        <ol className="space-y-2.5">
                            {steps.map((step, i) => (
                                <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-[10px] font-bold">
                                        {i + 1}
                                    </span>
                                    <span className="leading-tight pt-0.5">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};
