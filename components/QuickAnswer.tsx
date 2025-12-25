import React from 'react';
import { Lightbulb } from 'lucide-react';

interface QuickAnswerProps {
  answer: string;
  lang?: 'en' | 'fr';
}

/**
 * QuickAnswer Component
 *
 * Displays a concise 40-60 word answer optimized for:
 * - AI search extraction (ChatGPT, Perplexity, Google AI Overviews)
 * - Featured snippets
 * - Voice search results
 *
 * 2026 SEO Best Practice: AI assistants prioritize concise, direct answers
 * at the top of pages for synthesis into AI-generated responses.
 */
export const QuickAnswer: React.FC<QuickAnswerProps> = ({ answer, lang = 'en' }) => {
  const heading = lang === 'fr' ? 'Réponse Rapide' : 'Quick Answer';

  return (
    <div
      className="quick-answer bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8 shadow-sm"
      role="complementary"
      aria-label={heading}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Lightbulb size={18} className="text-white" strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
            {heading}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
