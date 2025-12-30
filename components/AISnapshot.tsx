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
        <div
            className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 my-8 shadow-sm relative overflow-hidden group"
            itemScope
            itemType="https://schema.org/Question"
        >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-100/30 w-24 h-24 rounded-full blur-2xl group-hover:bg-red-200/40 transition-colors" aria-hidden="true" />

            <div className="flex items-center gap-2 mb-4">
                <div className="bg-canada-red p-1.5 rounded-lg shadow-sm shadow-red-200">
                    <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-black text-canada-darkRed uppercase tracking-wider">{t.title}</span>
                <div className="ml-auto flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-full border border-red-100 backdrop-blur-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-black text-red-800 uppercase tracking-tight">{t.verified}</span>
                </div>
            </div>

            <div className="space-y-4 relative">
                <div className="ai-snapshot-answer">
                    <h3
                        className="text-lg font-black text-gray-900 mb-2 leading-snug"
                        itemProp="name"
                    >
                        {question}
                    </h3>
                    <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                    >
                        <p
                            className="text-gray-700 leading-relaxed text-[15px] font-medium"
                            itemProp="text"
                        >
                            {answer}
                        </p>
                    </div>
                </div>

                {steps && steps.length > 0 && (
                    <div className="bg-white/50 rounded-xl p-4 border border-red-50 backdrop-blur-sm">
                        <h4 className="text-xs font-black text-red-900 uppercase mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-canada-red rounded-full" />
                            {t.steps}
                        </h4>
                        <ol className="space-y-2.5">
                            {steps.map((step, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-600 items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-red-100 text-canada-red rounded-full flex items-center justify-center text-[10px] font-black">
                                        {i + 1}
                                    </span>
                                    <span className="leading-tight pt-0.5 font-medium">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};
