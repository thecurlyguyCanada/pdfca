'use client';

import React from 'react';
import { Tablet, BookOpen, Smartphone, Mail, Settings, FileText, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';
import { RelatedTools } from '../../RelatedTools';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo_title: 'Convert PDF to Kindle (AZW3, KFX) | Best Settings for E-Readers',
        seo_desc: 'Learn how to read PDFs comfortably on Kindle without zooming. Convert PDF to reflowable AZW3, EPUB, or KFX format for the best experience.',
        intro: `Reading a standard PDF on a **Kindle** or e-reader is often a miserable experience.

Because PDFs have a fixed layout, the text is tiny on a 6-inch screen. You have to pinch and zoom for every line, scrolling left and right.

The solution is to **convert PDF to a reflowable format** like AZW3 or KFX. This allows you to:
*   Increase font size
*   Change font style
*   Use "Whispersync" across devices
*   Read comfortably without panning

This guide covers the best free methods to transform your documents for E-ink screens.`,
        sections: [
            {
                id: 'formats',
                title: 'Which Format is Best for Kindle?',
                content: `**1. PDF (Poor)** -> *Avoid if possible.*
Fixed layout. Good for comics or technical manuals, terrible for novels.

**2. MOBI (Obsolete)** -> *Old standard.*
Supported by old Kindles but limited formatting options. Amazon is phasing this out.

**3. AZW3 (Great)** -> *Standard Reflowable.*
Allows custom fonts and bold text functionality. Best for side-loading via USB.

**4. KFX (Best)** -> *Modern Standard.*
Supports advanced typesetting (hyphenation, ligatures). Best for the newest Paperwhite and Oasis devices.`
            },
            {
                id: 'method-1-email',
                title: 'Method 1: "Send to Kindle" (Easiest)',
                content: `Amazon has a built-in conversion service.

1.  Find your **Send-to-Kindle Email Address** (in Settings > Your Account on the device).
2.  Open your email client (Gmail, Outlook).
3.  Attach your PDF file.
4.  **Crucial Step:** Set the subject line to **"Convert"**.
5.  Send the email.

**Pros:** Wireless delivery.
**Cons:** Sometimes the conversion is messy; images might vanish.`
            },
            {
                id: 'method-2-tool',
                title: 'Method 2: Online Converter (Fastest)',
                content: `If you want to sideload via USB or email doesn't work, use our free tool.

1.  **Upload** your PDF to pdfcanada.ca.
2.  Choose **"to Word"** or **"to EPUB"** (Kindle now supports EPUB via Send-to-Kindle).
3.  **Process** the file.
4.  **Download** and transfer to your device via USB cable (into the "documents" folder).`
            },
            {
                id: 'troubleshooting',
                title: 'Common Conversion Issues',
                content: `**Issue: Line breaks appear in the middle of sentences.**
*Cause:* The PDF has hard line breaks.
*Fix:* Use a "Heuristic Processing" option in advanced tools like Calibre to detect and remove false line breaks.

**Issue: Charts and tables are messed up.**
*Cause:* Reflowable formats hate complex tables.
*Fix:* Use **k2pdfopt** (specialized software) to optimize the PDF for small screens *without* converting it to text. It basically "shops" the PDF into small mobile-friendly chunks.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Why doesn't my Kindle cover art show up?**
This is a known Amazon bug with sideloaded books. You often need to reconnect the device to Calibre or use the "Email" method to get covers working.

**Can I convert DRM-protected PDFs?**
No. Our tools only work on DRM-free documents. You cannot legally strip DRM from purchased textbooks.

**Is AZW3 better than MOBI?**
Yes, absolutely. AZW3 supports bolder fonts and better spacing. Always choose AZW3 over MOBI for text-heavy books.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'PDF to Kindle'
        }
    },
    fr: {
        seo_title: 'Convertir PDF pour Kindle (AZW3, KFX) | Réglages Optimaux',
        seo_desc: 'Apprenez à lire des PDF confortablement sur Kindle sans zoomer. Convertissez PDF en format redistribuable AZW3, EPUB ou KFX.',
        intro: `Lire un PDF standard sur un **Kindle** est souvent une expérience misérable.

Parce que les PDF ont une mise en page fixe, le texte est minuscule sur un écran de 6 pouces. Vous devez zoomer pour chaque ligne.

La solution est de **convertir le PDF en un format redistribuable** comme AZW3 ou KFX. Cela vous permet de :
*   Augmenter la taille de la police
*   Changer le style de police
*   Lire confortablement sans défilement horizontal

Ce guide couvre les meilleures méthodes gratuites pour transformer vos documents.`,
        sections: [
            {
                id: 'formats',
                title: 'Quel Format est le Meilleur ?',
                content: `**1. PDF (Mauvais)**
Mise en page fixe. Terrible pour les romans.

**2. AZW3 (Super)**
Permet les polices personnalisées. Idéal pour le transfert USB.

**3. KFX (Meilleur)**
Supporte la césure avancée. Idéal pour les appareils récents.`
            },
            {
                id: 'method-1-email',
                title: 'Méthode 1 : "Send to Kindle" (Facile)',
                content: `Amazon a un service de conversion intégré.

1.  Trouvez votre **Email Kindle** (dans Paramètres).
2.  Envoyez un email avec votre PDF en pièce jointe.
3.  **Crucial :** Mettez le sujet **"Convert"**.

**Avantages :** Sans fil.
**Inconvénients :** Parfois désordonné.`
            },
            {
                id: 'method-2-tool',
                title: 'Méthode 2 : Convertisseur en Ligne',
                content: `Utilisez notre outil gratuit.

1.  **Téléversez** votre PDF.
2.  convertissez en **Word** ou **EPUB**.
3.  **Téléchargez** et transférez via USB.`
            },
            {
                id: 'troubleshooting',
                title: 'Problèmes Courants',
                content: `**Problème : Sauts de ligne au milieu des phrases.**
*Cause:* Le PDF a des sauts de ligne durs.
*Solution:* Utilisez un traitement heuristique.

**Problème : Tableaux cassés.**
*Solution:* Les formats redistribuables gèrent mal les tableaux complexes. Gardez-les en PDF ou utilisez le mode paysage.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Pourquoi la couverture ne s'affiche pas ?**
Bug connu avec les livres transférés par USB.

**AZW3 est-il mieux que MOBI ?**
Oui, absolument. Toujours choisir AZW3 pour le texte.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'PDF vers Kindle'
        }
    },
    pt: {
        seo_title: 'Converter PDF para Kindle (AZW3, KFX) | Melhores Configurações',
        seo_desc: 'Aprenda a ler PDFs confortavelmente no Kindle sem zoom. Converta PDF para formato redistribuível AZW3, EPUB ou KFX.',
        intro: `Ler um PDF padrão em um **Kindle** é frequentemente uma experiência miserável.

Porque os PDFs têm um layout fixo, o texto é minúsculo em uma tela de 6 polegadas. Você tem que fazer pinça e zoom para cada linha.

A solução é **converter PDF para um formato redistribuível** como AZW3 ou KFX. Isso permite:
*   Aumentar o tamanho da fonte
*   Mudar o estilo da fonte
*   Ler confortavelmente sem rolagem horizontal

Este guia cobre os melhores métodos gratuitos para transformar seus documentos.`,
        sections: [
            {
                id: 'formats',
                title: 'Qual Formato é o Melhor?',
                content: `**1. PDF (Ruim)**
Layout fixo. Terrível para romances.

**2. AZW3 (Ótimo)**
Permite fontes personalizadas. Ideal para transferência USB.

**3. KFX (Melhor)**
Suporta tipografia avançada. Ideal para dispositivos recentes.`
            },
            {
                id: 'method-1-email',
                title: 'Método 1: "Send to Kindle" (Fácil)',
                content: `A Amazon tem um serviço de conversão integrado.

1.  Encontre seu **E-mail Kindle** (nas Configurações).
2.  Envie um e-mail com seu PDF em anexo.
3.  **Crucial:** Coloque o assunto **"Convert"**.

**Prós:** Sem fio.
**Contras:** Às vezes bagunçado.`
            },
            {
                id: 'method-2-tool',
                title: 'Método 2: Conversor Online',
                content: `Use nossa ferramenta gratuita.

1.  **Envie** seu PDF.
2.  Converta para **Word** ou **EPUB**.
3.  **Baixe** e transfira via USB.`
            },
            {
                id: 'troubleshooting',
                title: 'Problemas Comuns',
                content: `**Problema: Quebras de linha no meio de frases.**
*Causa:* O PDF tem quebras de linha duras.
*Solução:* Use processamento heurístico.

**Problema: Tabelas quebradas.**
*Solução:* Formatos redistribuíveis lidam mal com tabelas complexas. Mantenha em PDF ou use modo paisagem.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Por que a capa não aparece?**
Bug conhecido com livros transferidos via USB.

**AZW3 é melhor que MOBI?**
Sim, absolutamente. Sempre escolha AZW3 para texto.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'PDF para Kindle'
        }
    }
});

export const PdfToKindleGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/pdf-to-kindle`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/pdf-to-kindle' : `/${lang}/guides/pdf-to-kindle` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF onto Kindle Guide' : lang === 'fr' ? 'Guide PDF vers Kindle' : 'Guia PDF para Kindle'}
                subtitle={lang === 'en' ? 'Read easily on E-ink screens.' : lang === 'fr' ? 'Lisez facilement sur écrans E-ink.' : 'Leia facilmente em telas E-ink.'}
                icon={<Tablet size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/pdf-to-kindle' : `/${lang}/guides/pdf-to-kindle` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-word" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="flex-1 p-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl relative bg-white dark:bg-gray-900">
                            <Smartphone className="mx-auto md:mx-0 w-12 h-12 text-gray-400 mb-4" />
                            <p className="font-bold text-gray-900 dark:text-white mb-2">
                                {lang === 'en' ? 'PDF on Kindle' : lang === 'fr' ? 'PDF sur Kindle' : 'PDF no Kindle'}
                            </p>
                            <div className="text-xs text-gray-500 border border-gray-300 p-2 rounded">
                                <p className="mb-1">This is tiny text</p>
                                <p className="mb-1">Hard to read</p>
                                <p>Zooming is slow</p>
                            </div>
                        </div>
                        <div className="text-canada-red font-bold text-xl flex flex-col items-center gap-1">
                            <Settings size={24} />
                            <span>Convert</span>
                        </div>
                        <div className="flex-1 p-6 border-2 border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                            <BookOpen className="mx-auto md:mx-0 w-12 h-12 text-blue-600 mb-4" />
                            <p className="font-bold text-gray-900 dark:text-white mb-2">
                                {lang === 'en' ? 'AZW3/EPUB' : lang === 'fr' ? 'AZW3/EPUB' : 'AZW3/EPUB'}
                            </p>
                            <div className="text-lg text-gray-800 p-2 font-serif leading-relaxed">
                                <p>Perfectly sizable text that fits the screen.</p>
                            </div>
                        </div>
                    </div>

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/pdf-to-kindle`} category="convert" />
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/reduce-pdf-size`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Réduire Taille PDF' : (lang === 'pt' ? 'Guia Reduzir Tamanho PDF' : 'Reduce PDF Size Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-epub`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers EPUB' : (lang === 'pt' ? 'Guia PDF para EPUB' : 'PDF to EPUB Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/split-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Diviser PDF' : (lang === 'pt' ? 'Guia Dividir PDF' : 'Split PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
