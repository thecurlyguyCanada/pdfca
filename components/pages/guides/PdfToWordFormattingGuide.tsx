'use client';

import React from 'react';
import { Layout, Type, Image, FileText, CheckCircle, AlertTriangle, Settings, Zap } from 'lucide-react';
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
        seo_title: 'Convert PDF to Word without Losing Formatting | Best Format Preservation',
        seo_desc: 'Learn how to convert PDF to Word while keeping original formatting, fonts, images, and tables intact. The ultimate guide to accurate document conversion.',
        intro: `Converting a PDF to Word is easy—thousands of free tools do it. But **keeping the exact formatting**? That's the real challenge.

We've all seen converted documents where:
*   Images float off the page
*   paragraphs break in the middle of sentences
*   Tables turn into a jumbled mess of tab stops
*   Fonts get replaced by generic Times New Roman

This guide explains **why formatting breaks** and how to ensure your converted Word document (\`.docx\`) looks exactly like the original PDF.`,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'The "Lost in Translation" Problem',
                content: `To understand why conversion fails, you need to understand how PDF and Word think:

** The PDF Model(Fixed Layout)**
        A PDF is like a digital printout.It doesn't know what a "paragraph" or "header" is. It only knows coordinates: *Place the letter 'H' at x=50, y=100*. It's designed to look exactly the same on every device.

** The Word Model(Flow Layout)**
    Word documents are fluid.Text flows from line to line.If you change the margins, everything reflows.It understands structure: paragraphs, headers, tables, and columns.

** The Conversion Gap **
    When you convert PDF to Word, the software has to ** guess ** the structure.It has to look at a bunch of floating letters and decide: * "These look like a table," * or * "This looks like a header." *

        If the software guesses wrong, your formatting breaks.`
            },
            {
                id: 'common-issues',
                title: 'Common Formatting Nightmares',
                content: `** 1. Broken Tables **
    PDFs often draw tables using simple lines.Converters might interpret these as graphic objects rather than actual Word tables, making them impossible to edit.

** 2. Floating Text Boxes **
    Lazy converters use "text boxes" to position text exactly where it was in the PDF.This looks good initially, but makes the document ** impossible to edit **.If you add a sentence, the text won't push the next paragraph down—it will just overlap.

        ** 3. Font Substitution **
            If your PDF uses a font like "Helvetica Neue" and your PC doesn't have it, Word will substitute it (often with Arial or Calibri), changing line breaks and pagination.

                ** 4. Disappearing Images **
                    Layered images or transparent backgrounds can confuse converters, causing graphics to vanish or turn into black boxes.`
            },
            {
                id: 'how-to-preserve',
                title: 'How to Preserve Formatting Perfectly',
                content: `** Method 1: Using High - Fidelity Conversion(Recommended) **

    Our tool uses advanced reconstruction algorithms to bridge the gap between PDF and Word models.

** Step 1: Upload to pdfcanada.ca **
    Drag and drop your file.We support complex layouts including multi - column newsletters and forms.

** Step 2: Intelligent Analysis **
    Our system scans the document to identify:
* Real tables(not just lines)
    * Paragraph flows(linking separate lines)
        * Headers and footers
            * Lists and bullet points

                ** Step 3: Convert to DOCX **
                    We generate a standard Word file using native Word styles (Heading 1, Normal, etc.) rather than floating text boxes.

** Step 4: Download & Edit **
    Open the file in Word.You'll find it behaves like a document created in Word from scratch.

---

** Method 2: Optimize Before Converting **

    If you're creating the PDF yourself, follow these rules to ensure better conversion later:
        *   ** Embed Fonts:** Always check "Embed fonts" when saving as PDF.
*   ** Use Standard Styles:** Use Word's built-in Heading styles rather than just making text bold and large.
    *   ** Avoid Complex Overlays:** Don't stack text on top of images if possible.`
            },
            {
                id: 'comparison',
                title: 'Comparison: Basic vs. Advanced Conversion',
                content: `| Feature | Basic Converter | Advanced (Our Tool) |
|---------|-----------------|---------------------|
| **Text Handling** | Floating text boxes | Continuous paragraphs |
| **Tables** | Graphic lines or tabs | Real Excel-compatible tables |
| **Headers/Footers** | Part of normal text | Native Word headers |
| **Editability** | Low (Breaks easily) | High (Flows naturally) |
| **Images** | Often shifted | Anchored correctly |
| **Columns** | Tab stops | Section breaks & columns |`
            },
            {
                id: 'use-cases',
                title: 'When Formatting Matters Most',
                content: `**Legal Contracts**
Clause numbering and indentation must be preserved exactly to maintain legal validity and readability.

**Resumes & CVs**
Complex layouts with sidebars and skill bars need to remain intact for the document to look professional in Word.

**Academic Papers**
Footnotes, citations, and dual-column layouts are notoriously difficult to convert but essential for academic work.

**Financial Reports**
Tables with precise alignment of huge numbers are critical. A shifted decimal point or misaligned column renders the report useless.`
            },
            {
                id: 'troubleshooting',
                title: 'Troubleshooting Formatting Issues',
                content: `**Problem: The document looks right but is hard to edit.**
*Cause:* The converter used text boxes.
*Solution:* Use our tool which prioritizes flow-layout over fixed positioning.

**Problem: Weird symbols appear instead of text.**
*Cause:* Encoding issue or missing fonts.
*Solution:* Try to find the original font or use OCR if the text is garbled.

**Problem: Tables are split across pages.**
*Cause:* Word handles page breaks differently than PDF.
*Solution:* In Word, select the table row, go to Layout > Properties and uncheck "Allow row to break across pages."`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Will my fonts be preserved?**
Yes, if the font is embedded in the PDF and typically installed on Windows/Mac. If not, we map it to the closest visual equivalent.

**Can I convert scanned PDFs with formatting?**
Yes. Our OCR technology recognizes layout elements like columns and images even in scanned documents, reconstructing them in Word.

**Why do lines break in weird places?**
This happens when a converter interprets a line break as a paragraph break. Our tool uses AI to detect true paragraph endings.

**Is it safe to upload confidential documents?**
Absolutely. We process files locally or via secure encrypted channels and delete them immediately after conversion.

**Does this work with Google Docs?**
Yes. The output .docx file is fully compatible with Google Docs, LibreOffice, and Pages.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'PDF to Word Formatting'
        }
    },
    fr: {
        seo_title: 'Convertir PDF en Word avec Mise en Page | Meilleure Préservation du Format',
        seo_desc: 'Apprenez à convertir PDF en Word en gardant la mise en page originale, les polices et les tableaux. Le guide ultime pour une conversion précise.',
        intro: `Convertir un PDF en Word est facile—des milliers d'outils gratuits le font. Mais **garder la mise en page exacte** ? C'est le vrai défi.

Nous avons tous vu des documents convertis où :
*   Les images flottent hors de la page
*   Les paragraphes se brisent au milieu des phrases
*   Les tableaux deviennent un fouillis indéchiffrable
*   Les polices sont remplacées par du Times New Roman générique

Ce guide explique **pourquoi la mise en page se brise** et comment assurer que votre document Word (.docx) ressemble exactement au PDF original.`,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'Le Problème de "Traduction"',
                content: `Pour comprendre pourquoi la conversion échoue, il faut comprendre comment PDF et Word pensent :

**Le Modèle PDF (Mise en page fixe)**
Un PDF est comme une impression numérique. Il ne connaît pas les "paragraphes". Il ne connaît que les coordonnées.

**Le Modèle Word (Mise en page fluide)**
Les documents Word sont fluides. Le texte coule de ligne en ligne. Il comprend la structure : paragraphes, titres, tableaux.

**L'Écart de Conversion**
Lors de la conversion, le logiciel doit **deviner** la structure. S'il devine mal, votre mise en page casse.`
            },
            {
                id: 'common-issues',
                title: 'Cauchemars de Formatage Courants',
                content: `**1. Tableaux Cassés**
Les convertisseurs peuvent interpréter les tableaux comme de simples lignes graphiques, impossibles à éditer.

**2. Zones de Texte Flottantes**
Les mauvais convertisseurs utilisent des "zones de texte" pour tout positionner. Cela rend le document **impossible à éditer**.

**3. Substitution de Police**
Si votre PC n'a pas la police du PDF, Word la remplacera, modifiant les sauts de ligne.

**4. Images Disparues**
Les calques ou fonds transparents peuvent confondre les convertisseurs.`
            },
            {
                id: 'how-to-preserve',
                title: 'Comment Préserver la Mise en Page',
                content: `**Méthode 1 : Utiliser une Conversion Haute Fidélité**

Notre outil utilise des algorithmes avancés pour combler l'écart entre PDF et Word.

**Étape 1 : Téléversez sur pdfcanada.ca**
Nous supportons les mises en page complexes.

**Étape 2 : Analyse Intelligente**
Notre système identifie les vrais tableaux, les flux de paragraphes et les titres.

**Étape 3 : Convertir en DOCX**
Nous générons un fichier Word standard utilisant les styles natifs.

**Étape 4 : Télécharger et Éditer**
Ouvrez le fichier dans Word. Il se comporte comme un document natif.`
            },
            {
                id: 'comparison',
                title: 'Comparaison : Basique vs Avancé',
                content: `| Fonction | Convertisseur Basique | Avancé (Notre Outil) |
|----------|-----------------------|----------------------|
| **Texte** | Zones de texte | Paragraphes continus |
| **Tableaux** | Lignes graphiques | Vrais tableaux Excel |
| **Titres** | Texte normal | En-têtes Word natifs |
| **Éditabilité** | Faible | Élevée |`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Mes polices seront-elles préservées ?**
Oui, si la police est intégrée ou installée sur votre système.

**Puis-je convertir des PDF scannés avec mise en page ?**
Oui. Notre technologie OCR reconnait les éléments de mise en page.

**Est-ce sûr pour les documents confidentiels ?**
Absolument. Nous traitons les fichiers de manière sécurisée et les supprimons immédiatement.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'Formatage PDF vers Word'
        }
    },
    pt: {
        seo_title: 'Converter PDF para Word com Formatação | Preservação de Layout',
        seo_desc: 'Aprenda a converter PDF para Word mantendo a formatação original, fontes, imagens e tabelas. O guia definitivo para conversão precisa.',
        intro: `Converter um PDF para Word é fácil—milhares de ferramentas gratuitas fazem isso. Mas **manter a formatação exata**? Esse é o verdadeiro desafio.

Todos nós já vimos documentos convertidos onde:
*   Imagens flutuam para fora da página
*   Parágrafos quebram no meio de frases
*   Tabelas viram uma bagunça
*   Fontes são substituídas por Times New Roman genérico

Este guia explica **por que a formatação quebra** e como garantir que seu documento Word (.docx) pareça exatamente como o PDF original.`,
        sections: [
            {
                id: 'why-formatting-breaks',
                title: 'O Problema de "Tradução"',
                content: `Para entender por que a conversão falha, você precisa entender como PDF e Word pensam:

**O Modelo PDF (Layout Fixo)**
Um PDF é como uma impressão digital. Ele não conhece "parágrafos". Ele conhece apenas coordenadas.

**O Modelo Word (Layout Fluido)**
Documentos Word são fluidos. O texto flui de linha para linha. Ele entende estrutura: parágrafos, títulos, tabelas.

**A Lacuna de Conversão**
Ao converter, o software tem que **adivinhar** a estrutura. Se adivinhar errado, sua formatação quebra.`
            },
            {
                id: 'common-issues',
                title: 'Pesadelos de Formatação Comuns',
                content: `**1. Tabelas Quebradas**
Conversores podem interpretar tabelas como linhas gráficas simples, impossíveis de editar.

**2. Caixas de Texto Flutuantes**
Conversores ruins usam "caixas de texto" para posicionar tudo. Isso torna o documento **impossível de editar**.

**3. Substituição de Fonte**
Se o seu PC não tiver a fonte do PDF, o Word a substituirá, alterando as quebras de linha.

**4. Imagens Desaparecidas**
Camadas ou fundos transparentes podem confundir conversores.`
            },
            {
                id: 'how-to-preserve',
                title: 'Como Preservar a Formatação',
                content: `**Método 1: Usar Conversão de Alta Fidelidade**

Nossa ferramenta usa algoritmos avançados para preencher a lacuna entre PDF e Word.

**Passo 1: Envie para pdfcanada.ca**
Suportamos layouts complexos.

**Passo 2: Análise Inteligente**
Nosso sistema identifica tabelas reais, fluxos de parágrafos e títulos.

**Passo 3: Converter para DOCX**
Geramos um arquivo Word padrão usando estilos nativos.

**Passo 4: Baixar e Editar**
Abra o arquivo no Word. Ele se comporta como um documento nativo.`
            },
            {
                id: 'comparison',
                title: 'Comparação: Básico vs Avançado',
                content: `| Recurso | Conversor Básico | Avançado (Nossa Ferramenta) |
|---------|------------------|-----------------------------|
| **Texto** | Caixas de texto | Parágrafos contínuos |
| **Tabelas** | Linhas gráficas | Tabelas reais |
| **Títulos** | Texto normal | Cabeçalhos Word nativos |
| **Editabilidade** | Baixa | Alta |`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Minhas fontes serão preservadas?**
Sim, se a fonte estiver incorporada ou instalada no seu sistema.

**Posso converter PDFs escaneados com formatação?**
Sim. Nossa tecnologia OCR reconhece elementos de layout.

**É seguro para documentos confidenciais?**
Absolutamente. Processamos arquivos com segurança e os excluímos imediatamente.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'Formatação PDF para Word'
        }
    }
});

export const PdfToWordFormattingGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/pdf-to-word-formatting`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/pdf-to-word-formatting' : `/${lang}/guides/pdf-to-word-formatting` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Keep PDF Formatting in Word' : lang === 'fr' ? 'Garder la Mise en Page PDF' : 'Manter Formatação PDF'}
                subtitle={lang === 'en' ? 'Preserve layout, fonts, and images perfectly.' : lang === 'fr' ? 'Préservez parfaitement la mise en page, les polices et les images.' : 'Preserve layout, fontes e imagens perfeitamente.'}
                icon={<Layout size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/pdf-to-word-formatting' : `/${lang}/guides/pdf-to-word-formatting` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-word" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
                            <h3 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400 mb-4">
                                <AlertTriangle size={20} />
                                {lang === 'en' ? 'Common Issues' : lang === 'fr' ? 'Problèmes Courants' : 'Problemas Comuns'}
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>• {lang === 'en' ? 'Broken tables & lines' : lang === 'fr' ? 'Tableaux et lignes cassés' : 'Tabelas e linhas quebradas'}</li>
                                <li>• {lang === 'en' ? 'Uneditable text boxes' : lang === 'fr' ? 'Zones de texte ineditables' : 'Caixas de texto ineditáveis'}</li>
                                <li>• {lang === 'en' ? 'Missing images' : lang === 'fr' ? 'Images manquantes' : 'Imagens ausentes'}</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                            <h3 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-4">
                                <CheckCircle size={20} />
                                {lang === 'en' ? 'Our Solution' : lang === 'fr' ? 'Notre Solution' : 'Nossa Solução'}
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>• {lang === 'en' ? 'Native Word styles' : lang === 'fr' ? 'Styles Word natifs' : 'Estilos Word nativos'}</li>
                                <li>• {lang === 'en' ? 'Continuous paragraphs' : lang === 'fr' ? 'Paragraphes continus' : 'Parágrafos contínuos'}</li>
                                <li>• {lang === 'en' ? 'Font matching AI' : lang === 'fr' ? 'IA de correspondance de polices' : 'IA de correspondência de fontes'}</li>
                            </ul>
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
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/pdf-to-word-formatting`} category="convert" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

