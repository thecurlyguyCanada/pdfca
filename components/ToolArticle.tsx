import React from 'react';
import Link from 'next/link';
import { CheckCircle, Lock } from 'lucide-react';
import type { Locale } from '@/lib/i18n-config';
import type { ToolArticle as ToolArticleData } from '@/lib/toolArticles';
import { MarkdownArticle, headingsOf } from './MarkdownArticle';
import { AUTHOR } from '@/config/author';

const STR = {
    en: { answer: 'The short answer', inThisGuide: 'In this guide', limits: 'Limits and what stays on your device', what: 'What', value: 'Value', faq: 'Frequently asked questions', updated: 'Updated', by: 'Written by', checked: 'Checked against the live tool on', about: 'About the author' },
    fr: { answer: 'La réponse courte', inThisGuide: 'Dans ce guide', limits: 'Limites et ce qui reste sur votre appareil', what: 'Quoi', value: 'Valeur', faq: 'Questions fréquentes', updated: 'Mis à jour le', by: 'Rédigé par', checked: 'Vérifié sur l\'outil en ligne le', about: 'À propos de l\'auteur' },
    pt: { answer: 'A resposta curta', inThisGuide: 'Neste guia', limits: 'Limites e o que fica no seu aparelho', what: 'O quê', value: 'Valor', faq: 'Perguntas frequentes', updated: 'Atualizado em', by: 'Escrito por', checked: 'Verificado na ferramenta em', about: 'Sobre o autor' },
};

export function formatDate(iso: string, lang: Locale) {
    const d = new Date(`${iso}T12:00:00Z`);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(lang === 'fr' ? 'fr-CA' : lang === 'pt' ? 'pt-BR' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function ToolArticle({ article, lang }: { article: ToolArticleData; lang: Locale }) {
    const s = STR[lang] || STR.en;
    const toc = headingsOf(article.body).filter((h) => h.level === 2);
    return (
        <article className="mt-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/Article">
            <div className="rounded-3xl border border-canada-red/20 bg-canada-red/5 p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-canada-red mb-2">{s.answer}</p>
                <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed">{article.meta.answer}</p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{s.by} <Link href={`/${lang}/about`} className="font-semibold text-gray-800 dark:text-gray-200 underline underline-offset-2">{AUTHOR.name}</Link> · {s.updated} <time dateTime={article.meta.updated}>{formatDate(article.meta.updated, lang)}</time></p>
            </div>

            {toc.length > 3 && (
                <nav aria-label={s.inThisGuide} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">{s.inThisGuide}</p>
                    <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm list-decimal pl-5 text-gray-700 dark:text-gray-300">{toc.map((h) => <li key={h.id}><a href={`#${h.id}`} className="hover:text-canada-red">{h.text}</a></li>)}</ol>
                </nav>
            )}

            <MarkdownArticle markdown={article.body} />

            {article.meta.limits.length > 0 && (
                <section className="mt-14" aria-labelledby="limits">
                    <h2 id="limits" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-5 flex items-center gap-3"><Lock className="text-canada-red" size={24} /> {s.limits}</h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"><tr><th className="px-4 py-3 font-bold">{s.what}</th><th className="px-4 py-3 font-bold">{s.value}</th></tr></thead>
                            <tbody>{article.meta.limits.map(([k, v]) => <tr key={k} className="border-t border-gray-100 dark:border-gray-800"><td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100 align-top">{k}</td><td className="px-4 py-3 text-gray-700 dark:text-gray-300">{v}</td></tr>)}</tbody>
                        </table>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> {s.checked} {formatDate(article.meta.updated, lang)}.</p>
                </section>
            )}

            {article.meta.faq.length > 0 && (
                <section className="mt-14" aria-labelledby="faq">
                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{s.faq}</h2>
                    <div className="space-y-5">{article.meta.faq.map((f) => (
                        <div key={f.q} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">{f.q}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
                        </div>
                    ))}</div>
                </section>
            )}

            <aside className="mt-14 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-canada-red text-white flex items-center justify-center font-bold text-xl shrink-0">{AUTHOR.initials}</div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{s.about}</p>
                    <p className="font-bold text-gray-900 dark:text-gray-100">{AUTHOR.name} · {AUTHOR.role[lang] || AUTHOR.role.en}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{AUTHOR.bio[lang] || AUTHOR.bio.en} <Link href={`/${lang}/about`} className="underline underline-offset-2">{lang === 'fr' ? 'En savoir plus' : 'More'}</Link>{AUTHOR.linkedin && <> · <a href={AUTHOR.linkedin} rel="me noopener" target="_blank" className="underline underline-offset-2">LinkedIn</a></>}</p>
                </div>
            </aside>
        </article>
    );
}
