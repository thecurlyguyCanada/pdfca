'use client';

import React from 'react';
import { FileCode, Database, CheckCircle, Info, ArrowRight, Zap, Code2, Server } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { AISnapshot } from '../../AISnapshot';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `PDF to XML Converter Guide | Extract Structured Data ${CURRENT_YEAR}`,
            desc: `Learn how to convert PDF documents to XML for data integration. Extract invoices, reports, and tables into structured XML formats for SAP/ERP.`
        },
        h1: "PDF to XML Conversion Guide",
        subtitle: "The bridge between human-readable documents and machine-readable data.",
        intro: "For developers and data scientists, **XML (eXtensible Markup Language)** is a powerful format for structured data. Converting PDF invoices, reports, or catalogues to XML allows for automated processing and seamless integration into ERP systems like SAP, Oracle, or Microsoft Dynamics.",

        quickAnswer: {
            question: "How to convert PDF to XML?",
            answer: "PDF to XML conversion usually involves parsing the document structure to extract text and tables into tagged elements. Tools like Adobe Acrobat Pro or specialized OCR parsers can export PDFs as XML.",
            tool: "PDF to XML",
            steps: ["Analyze PDF Structure", "Map Data Fields", "Export to XML"]
        },

        sections: [
            {
                id: 'why-xml',
                title: 'Why Convert PDF to XML?',
                content: `
Converting flat PDF documents to structured XML unlocks powerful automation capabilities:

*   **Automation:** Feed PDF invoice data directly into accounts payable systems without manual data entry.
*   **Hierarchical Data:** Unlike CSV, XML can represent nested data structures (e.g., an invoice header containing a list of line items, each with its own attributes).
*   **Standardization:** XML is the backbone of global e-invoicing standards like **UBL (Universal Business Language)** and **CII (Cross Industry Invoice)**.
*   **Interoperability:** XML is platform-independent, making it the perfect exchange format between different software systems.
                `
            },
            {
                id: 'methods',
                title: 'Methods to Convert PDF to XML',
                content: `
There are three main approaches to converting PDF documents to XML, depending on your needs:

#### 1. Acrobat Pro (Tagged XML)
Adobe Acrobat Pro offers a "Save As XML" feature.
*   **Pros:** Built-in standard tool.
*   **Cons:** Produces "Tagged XML" which often follows the visual layout rather than logical data structure. Requires manual tagging for good results.

#### 2. Template-Based Parsers (e.g., Docparser)
These tools allow you to define "zones" on your PDF (e.g., "the top right box is the Date").
*   **Pros:** Highly accurate for recurring documents like monthly invoices.
*   **Cons:** Setup time required for each new document layout.

#### 3. AI-Powered Extraction
Modern tools use Machine Learning to identify fields automatically (e.g., finding the "Total Amount" regardless of where it is on the page).
*   **Pros:** Zero setup, handles variable layouts.
*   **Cons:** Can be more expensive for high volumes.
                `
            },
            {
                id: 'ubl-standard',
                title: 'The UBL Standard for E-Invoicing',
                content: `
If you are converting invoices, you should target the **UBL (Universal Business Language)** XML standard.

UBL is an ISO standard (ISO/IEC 19845) adopted by governments worldwide (including Canada and the EU) for digital procurement. Converting a PDF invoice to UBL XML makes it legally valid for electronic exchange networks like Peppol.
                `
            }
        ],
        faq: [
            {
                q: "Is PDF to XML conversion accurate?",
                a: "It depends on the source PDF. 'Native' PDFs (created from Word/Excel) convert very accurately. Scanned PDFs require OCR (Optical Character Recognition) first, which may introduce errors in handwritten text."
            },
            {
                q: "Can I convert PDF tables to XML?",
                a: "Yes. XML is excellent for representing tables. Each row becomes a parent element (e.g., `<Item>`) with child elements for columns (e.g., `<Description>`, `<Price>`)."
            },
            {
                q: "What is the difference between HTML and XML exports?",
                a: "HTML is designed for *displaying* data in a browser (visual focus). XML is designed for *transporting* data between systems (structural focus)."
            }
        ],
        ctaTitle: "Enhance Your PDF Workflows",
        ctaBtn: "Explore PDF Tools",
        ctaSubtext: "Discover our suite of developer-friendly PDF tools."
    },
    fr: {
        seo: {
            title: `Convertisseur PDF en XML | Guide d'Extraction de Données ${CURRENT_YEAR}`,
            desc: `Apprenez à convertir des documents PDF en XML. Extrayez factures et tableaux en formats XML structurés pour SAP/ERP.`
        },
        h1: "Guide de Conversion PDF en XML",
        subtitle: "Le pont entre les documents lisibles par l'homme et les données machine.",
        intro: "Pour les développeurs et data scientists, **XML (eXtensible Markup Language)** est un format puissant pour les données structurées. Convertir des factures, rapports ou catalogues PDF en XML permet un traitement automatisé et une intégration fluide dans les systèmes ERP comme SAP, Oracle ou Microsoft Dynamics.",

        quickAnswer: {
            question: "Comment convertir PDF en XML ?",
            answer: "La conversion implique d'analyser la structure du document pour extraire texte et tableaux dans des éléments balisés. Des outils comme Adobe Acrobat Pro ou des parseurs OCR peuvent exporter des PDF en XML.",
            tool: "PDF en XML",
            steps: ["Analyser la Structure", "Mapper les Champs", "Exporter en XML"]
        },

        sections: [
            {
                id: 'why-xml',
                title: 'Pourquoi Convertir PDF en XML ?',
                content: `
Convertir des documents PDF plats en XML structuré débloque l'automatisation :

*   **Automatisation :** Alimentez les systèmes comptables directement avec les données de factures PDF.
*   **Données Hiérarchiques :** Contrairement au CSV, le XML peut représenter des structures imbriquées (ex: une facture avec plusieurs lignes d'articles).
*   **Standardisation :** Le XML est la base des normes mondiales de facturation électronique comme **UBL** et **CII**.
*   **Interopérabilité :** Le XML est indépendant de la plateforme, idéal pour l'échange de données.
                `
            },
            {
                id: 'methods',
                title: 'Méthodes de Conversion',
                content: `
Il existe trois approches principales :

#### 1. Acrobat Pro (XML Balisé)
Adobe Acrobat offre une fonction "Enregistrer sous XML".
*   **Pour :** Outil standard intégré.
*   **Contre :** Suit souvent la mise en page visuelle plutôt que logique. Nécessite un balisage manuel.

#### 2. Parseurs basés sur des modèles (ex: Docparser)
Définissez des "zones" sur votre PDF (ex: "la boîte en haut à droite est la Date").
*   **Pour :** Très précis pour les documents récurrents.
*   **Contre :** Temps de configuration requis pour chaque nouvelle mise en page.

#### 3. Extraction par IA
Les outils modernes utilisent le Machine Learning pour identifier les champs (ex: trouver le "Total" n'importe où).
*   **Pour :** Zéro configuration.
*   **Contre :** Peut être plus coûteux.
                `
            },
            {
                id: 'ubl-standard',
                title: 'Le Standard UBL pour la Facturation',
                content: `
Si vous convertissez des factures, visez le standard **UBL (Universal Business Language)**.

UBL est une norme ISO adoptée mondialement pour les approvisionnements numériques. Convertir une facture PDF en XML UBL la rend légalement valide pour les réseaux d'échange comme Peppol.
                `
            }
        ],
        faq: [
            {
                q: "La conversion est-elle précise ?",
                a: "Cela dépend de la source. Les PDF 'natifs' (créés depuis Word/Excel) sont très précis. Les PDF scannés nécessitent l'OCR (Reconnaissance Optique de Caractères) d'abord."
            },
            {
                q: "Puis-je convertir des tableaux PDF en XML ?",
                a: "Oui. Le XML est excellent pour représenter des tableaux. Chaque ligne devient un élément parent avec des éléments enfants pour les colonnes."
            },
            {
                q: "Différence entre exports HTML et XML ?",
                a: "L'HTML est conçu pour *afficher* des données (visuel). Le XML est conçu pour *transporter* des données (structurel)."
            }
        ],
        ctaTitle: "Améliorez vos Flux PDF",
        ctaBtn: "Explorer les Outils",
        ctaSubtext: "Découvrez notre suite d'outils PDF pour développeurs."
    },
    pt: {
        seo: {
            title: `Guia de Conversão PDF para XML | Extração de Dados ${CURRENT_YEAR}`,
            desc: `Aprenda como converter documentos PDF para XML. Extraia faturas e tabelas em formatos XML estruturados para SAP/ERP.`
        },
        h1: "Guia de Conversão PDF para XML",
        subtitle: "A ponte entre documentos legíveis por humanos e dados legíveis por máquina.",
        intro: "Para desenvolvedores e cientistas de dados, **XML (eXtensible Markup Language)** é um formato poderoso para dados estruturados. Converter faturas, relatórios ou catálogos PDF para XML permite processamento automatizado e integração perfeita em sistemas ERP como SAP, Oracle ou Microsoft Dynamics.",

        quickAnswer: {
            question: "Como converter PDF para XML?",
            answer: "A conversão geralmente envolve analisar a estrutura do documento para extrair texto e tabelas em elementos marcados. Ferramentas como Adobe Acrobat Pro ou parsers OCR especializados podem exportar PDFs como XML.",
            tool: "PDF para XML",
            steps: ["Analisar Estrutura", "Mapear Campos", "Exportar para XML"]
        },

        sections: [
            {
                id: 'why-xml',
                title: 'Por Que Converter PDF para XML?',
                content: `
Converter documentos PDF planos em XML estruturado desbloqueia a automação:

*   **Automação:** Alimente sistemas de contas a pagar diretamente com dados de faturas PDF sem entrada manual.
*   **Dados Hierárquicos:** Ao contrário do CSV, o XML pode representar estruturas de dados aninhadas (ex: um cabeçalho de fatura contendo uma lista de itens, cada um com seus atributos).
*   **Padronização:** XML é a espinha dorsal dos padrões globais de faturamento eletrônico como **UBL** e **CII**.
*   **Interoperabilidade:** XML é independente de plataforma, perfeito para troca de dados entre softwares.
                `
            },
            {
                id: 'methods',
                title: 'Métodos de Conversão',
                content: `
Existem três abordagens principais:

#### 1. Acrobat Pro (XML Marcado)
O Adobe Acrobat Pro oferece um recurso "Salvar como XML".
*   **Prós:** Ferramenta padrão integrada.
*   **Contras:** Produz "XML Marcado" que muitas vezes segue o layout visual em vez da estrutura lógica. Requer marcação manual.

#### 2. Parsers Baseados em Modelos (ex: Docparser)
Permitem definir "zonas" no seu PDF (ex: "a caixa superior direita é a Data").
*   **Prós:** Altamente preciso para documentos recorrentes.
*   **Contras:** Tempo de configuração necessário para cada novo layout.

#### 3. Extração com IA
Ferramentas modernas usam Machine Learning para identificar campos automaticamente.
*   **Prós:** Zero configuração.
*   **Contras:** Pode ser mais caro para altos volumes.
                `
            },
            {
                id: 'ubl-standard',
                title: 'O Padrão UBL para Faturamento Eletrônico',
                content: `
Se você está convertendo faturas, deve visar o padrão XML **UBL (Universal Business Language)**.

O UBL é um padrão ISO (ISO/IEC 19845) adotado por governos em todo o mundo para compras digitais. Converter uma fatura PDF para XML UBL a torna legalmente válida para redes de troca eletrônica.
                `
            }
        ],
        faq: [
            {
                q: "A conversão de PDF para XML é precisa?",
                a: "Depende da fonte. PDFs 'nativos' (criados no Word/Excel) convertem com muita precisão. PDFs digitalizados requerem OCR primeiro, o que pode introduzir erros."
            },
            {
                q: "Posso converter tabelas PDF para XML?",
                a: "Sim. O XML é excelente para representar tabelas. Cada linha se torna um elemento pai com elementos filhos para colunas."
            },
            {
                q: "Qual a diferença entre exportações HTML e XML?",
                a: "HTML é projetado para *exibir* dados (foco visual). XML é projetado para *transportar* dados (foco estrutural)."
            }
        ],
        ctaTitle: "Melhore Seus Fluxos PDF",
        ctaBtn: "Explorar Ferramentas",
        ctaSubtext: "Descubra nossa suíte de ferramentas para desenvolvedores."
    }
});

export const PdfToXmlGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "keywords": "PDF to XML, Convert PDF to XML, Data Extraction",
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<FileCode size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'PDF en XML' : 'PDF to XML', href: '#' }
            ]}
        >
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-xml"
                lang={lang}
                schema={schema}
                faqs={t.faq}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
            />

            <div className="w-full py-12">
                {/* Intro */}
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <MarkdownContent content={t.intro} />
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {t.sections.map((section: any) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}
                </div>

                <AISnapshot
                    question={t.quickAnswer.question}
                    answer={t.quickAnswer.answer}
                    toolName={t.quickAnswer.tool}
                    steps={t.quickAnswer.steps}
                    lang={lang}
                />

                {/* FAQ */}
                <div className="mt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Info className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl font-bold dark:text-white">FAQ</h2>
                    </div>
                    <div className="grid gap-6">
                        {t.faq.map((item: any, i: number) => (
                            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-lg mb-3 dark:text-white">{item.q}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <Database size={120} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 relative z-10">{t.ctaTitle}</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">{t.ctaSubtext}</p>
                    <Link href={`/${lang}/guides/ultimate-pdf-guide`} className="inline-flex items-center gap-2 bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white relative z-10">
                        {t.ctaBtn} <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="mt-20">
                    <AuthorBio lang={lang} />
                </div>
            </div>
        </PageLayout>
    );
};
