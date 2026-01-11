'use client';

import Link from 'next/link';
import React from 'react';
import { FileSpreadsheet, FileText, Calculator, QrCode, Merge, Download, TrendingUp, Shield, CheckCircle, BookOpen, BarChart3, FileCheck, Calendar, AlertTriangle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { ActionLink } from '../../ActionLink';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Financial Statement PDF Guide Philippines ${CURRENT_YEAR} | Templates & BIR Tools`,
            desc: `Complete guide to Philippines Financial Statements (${CURRENT_YEAR}). Download Balance Sheet & Income Statement examples, view BIR/SEC requirements, and use free PDF tools for audited statements.`
        },
        h1: `Financial Statement PDF Guide: Philippines Edition (${CURRENT_YEAR})`,
        subtitle: "The definitive guide for Filipino businesses, accountants, and students. Create, convert, and manage BIR-compliant financial statements.",

        // AEO Quick Answer Box - Optimized for "what is financial statement" (2.4K vol)
        quickAnswer: {
            question: "What is a complete set of financial statements in the Philippines?",
            answer: "In the Philippines, a complete set of financial statements (FS) strictly compliant with PFRS includes 5 components: 1) Statement of Financial Position (Balance Sheet), 2) Statement of Comprehensive Income (Income Statement), 3) Statement of Changes in Equity, 4) Statement of Cash Flows, and 5) Notes to Financial Statements. These must be submitted annually to the BIR (Bureau of Internal Revenue) and SEC (for corporations).",
            steps: ["Prepare Trial Balance", "Draft Statement of Financial Position", "Create Income Statement", "Compile Notes to FS", "Save as PDF"]
        },

        toolsHeading: "Essential PDF Tools for Finance",
        toolsSubheading: "Free, secure tools to manage your financial documents without uploading files.",
        tools: [
            {
                id: 'pdf-to-excel',
                title: 'PDF to Excel',
                desc: 'Extract tables from audited financial statements into editable Excel files.',
                icon: FileSpreadsheet,
                link: '/pdf-to-excel',
                color: 'from-green-500 to-emerald-600'
            },
            {
                id: 'invoice-ocr',
                title: 'Invoice OCR',
                desc: 'Digitize receipts and invoices for your accounting records instantly.',
                icon: FileText,
                link: '/invoice-ocr',
                color: 'from-blue-500 to-indigo-600'
            },
            {
                id: 'merge-pdf',
                title: 'Merge Reports',
                desc: 'Combine Balance Sheet, Income Statement, and Notes into one PDF file.',
                icon: Merge,
                link: '/merge-pdf',
                color: 'from-purple-500 to-violet-600'
            },
            {
                id: 'barcode',
                title: 'Barcode Generator',
                desc: 'Create QR codes for digital tracking of physical documents.',
                icon: QrCode,
                link: '/barcode-generator',
                color: 'from-orange-500 to-red-600'
            }
        ],

        // Main content sections with Markdown formatting
        sections: [
            {
                id: 'financial-statement-basics',
                title: 'Financial Statement Examples & Components',
                content: `
A **financial statement** is the report card of a business. In the Philippines, understanding these documents is crucial not just for internal decisions but for strict compliance with the Bureau of Internal Revenue (BIR) and the Securities and Exchange Commission (SEC).

### High-Volume Keywords Overview
Many business owners search for a **financial statement example** or **financial statement sample** to guide their preparation. Below, we break down the 5 mandatory components required by Philippine Financial Reporting Standards (PFRS).

#### 1. Statement of Financial Position (Balance Sheet)
Often called the **balance sheet**, this statement typically has the highest search volume ("statement of financial position" - 8.1K, "balance sheet" - 320+). It represents your company's financial health at a specific point in time.

**Formula:**  
*> Assets = Liabilities + Equity*

**Key Elements:**
- **Current Assets**: Cash, Accounts Receivable, Inventory
- **Non-Current Assets**: Property, Plant, and Equipment (PPE)
- **Liabilities**: Payables, Loans
- **Equity**: Share Capital, Retained Earnings

> **Pro Tip:** For BIR compliance, ensure your assets match your depreciation schedules submitted.

#### 2. Statement of Comprehensive Income (Income Statement)
Commonly known as the **income statement**, this reports your financial performance over a period. It details how net income is transformed into profit or loss.

**Common Line Items:**
- **Revenue/Sales**: Gross earnings from goods or services.
- **Cost of Sales**: Direct costs of producing goods.
- **Operating Expenses**: Rent, salaries, utilities.

#### 3. Statement of Cash Flows
Shows the movement of cash in and out of the business. It is categorized into three activities:
- **Operating**: Cash from main business activities.
- **Investing**: Cash for purchasing assets like equipment.
- **Financing**: Cash from loans or owners' capital.

#### 4. Statement of Changes in Equity
Detals changes in the owner's interest in the company during the period, including:
- Additional investments
- Dividends paid
- Net income/loss for the year

#### 5. Notes to Financial Statements
*(High SEO Value: "notes to financial statements" - 1.6K searches)*
Often overlooked, the **Notes to Financial Statements** are mandatory. They provide the narrative explanation for the numbers in the other four statements. 

**What must be included?**
- Summary of significant accounting policies (e.g., how you calculate depreciation).
- Breakdowns of large line items (e.g., list of "Other Operating Expenses").
- Disclosures of risks and uncertainties.
`
            },
            {
                id: 'audited-statements',
                title: 'Audited Financial Statements in the Philippines',
                content: `
When do you need **audited financial statements**? 

According to the BIR and SEC, companies must submit FS audited by an independent CPA if they meet specific thresholds.

### BIR Thresholds for Mandatory Audit
Under the implementation of the TRAIN Law and CREATE Law updates:
- **Gross Quarterly Sales/Earnings > ₱3,000,000**: Mandatory CPA Audit.
- **Gross Annual Sales < ₱3,000,000**: Optional audit; can submit unaudited FS (sworn definition).

*(Search Volume for "audited financial statements bir": 590/mo)*

### The "Am I Compliance Ready?" Checklist
Use this quick checklist before you file:
- [ ] **Bookkeeping Complete**: All journals and ledgers are closed.
- [ ] **Trial Balance Balanced**: Debits equal Credits.
- [ ] **Adjusting Entries Posted**: Depreciation, accruals, and deferrals recorded.
- [ ] **CPA Signature**: Independent auditor has signed (if >₱3M sales).
- [ ] **Statement of Management Responsibility**: Signed by the President/Owner.
- [ ] **Tax Returns Filed**: Income Tax Return (ITR) matches figures in FS.
`
            },
            {
                id: 'filing-guide',
                title: 'How to File: BIR & SEC Requirements',
                content: `
Once your **financial statement example PDF** is ready, filing is the next step.

### 1. BIR Submission (eAFS)
The BIR now uses the **eAFS (Electronic Audited Financial Statements)** system.
- **File Format**: PDF only.
- **Naming Convention**: Strict rules apply (e.g., Tin-Year-FormType.pdf).
- **Deadline**: Typically **April 15** for calendar year entries.

### 2. SEC Submission (e-FAST)
For corporations, use the **SEC Electronic Filing and Submission Tool (e-FAST)**.
- **Format**: AllFS (Audited Financial Statement), GIS (General Information Sheet).
- **Schedule**: Based on the last digit of your SEC registration number.

> **Warning:** Late filing penalties in the Philippines are cumulative. Mark your calendars!

### Tax Calendar: Key Deadlines
| Document | Deadline |
|----------|----------|
| **BIR Form 1701 (Self-Employed)** | April 15 |
| **BIR Form 1702 (Corporations)** | April 15 |
| **Audited FS (to SEC)** | April - May (Check SEC Schedule) |
| **1st Quarter ITR** | May 15 |
`
            }
        ],

        blogSection: {
            title: "Financial Resources & Guides",
            subtitle: "Deep dives into accounting topics for Philippine businesses.",
            articles: [
                {
                    title: "How to Create a Financial Statement",
                    summary: "Step-by-step guide for beginners on drafting your first Statement of Financial Position and Income Statement for a small business.",
                    readTime: "8 min read",
                    topics: ["Accounting 101", "Tutorial"]
                },
                {
                    title: "Understanding PFRS for SMEs",
                    summary: "A simplified explanation of the Philippine Financial Reporting Standards for Small and Medium Enterprises.",
                    readTime: "6 min read",
                    topics: ["Compliance", "Standards"]
                },
                {
                    title: "Digital Signatures for SEC Documents",
                    summary: "Learn how to validly sign your financial documents digitally for e-FAST submission.",
                    readTime: "4 min read",
                    topics: ["Technology", "Legal"]
                },
                {
                    title: "Best Free PDF Tools for Accountants",
                    summary: "Top rated tools to merge, convert, and secure client financial records without cost.",
                    readTime: "5 min read",
                    topics: ["Tools", "Productivity"]
                }
            ]
        },

        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                q: "What is the difference between specific Financial Statements?",
                a: "The Statement of Financial Position (Balance Sheet) shows what you own and owe at a single point in time. The Income Statement shows your performance (profit/loss) over a period of time. Cash Flow shows actual cash movement."
            },
            {
                q: "Do I really need an accountant for my small business?",
                a: "If your gross annual sales are below ₱3,000,000, you are not strictly required to have an audited statement by a CPA, but hiring a bookkeeper is highly recommended to ensure your tax returns match your records."
            },
            {
                q: "Can I use Excel for financial statements?",
                a: "Yes, you should draft them in Excel. However, for submission to BIR (eAFS) and SEC (e-FAST), they must be converted to PDF format. Use our 'Excel to PDF' tool for this."
            },
            {
                q: "What are 'Notes to Financial Statements'?",
                a: "These are text explanations attached to your number-heavy reports. They explain accounting methods used (like how you calculate depreciation) and give details on large numbers (breakdown of 'Miscellaneous Expenses'). They are mandatory."
            }
        ]
    },
    // Adding French placeholder to satisfy TS, though English is primary target
    fr: {
        seo: {
            title: "Guide des États Financiers PDF Philippines | Modèles Gratuits",
            desc: "Guide complet pour les états financiers aux Philippines. Modèles, outils PDF et conformité BIR."
        },
        h1: "Guide des États Financiers PDF (Philippines)",
        subtitle: "Le guide définitif pour les entreprises philippines.",
        quickAnswer: {
            question: "Qu'est-ce qu'un état financier complet?",
            answer: "Aux Philippines, un jeu complet comprend : Bilan, Compte de résultat, Flux de trésorerie, Variation des capitaux propres et Notes annexes.",
            steps: ["Préparer la balance", "Créer le bilan", "Rédiger les notes", "Convertir en PDF"]
        },
        toolsHeading: "Outils PDF Essentiels",
        toolsSubheading: "Outils gratuits pour gérer vos documents financiers.",
        tools: [],
        sections: [],
        blogSection: { title: "", subtitle: "", articles: [] },
        faqTitle: "FAQ",
        faqs: []
    },
    pt: {
        seo: {
            title: `Guia de PDF de Declarações Financeiras Filipinas ${CURRENT_YEAR} | Modelos e Ferramentas BIR`,
            desc: `Guia completo para Declarações Financeiras das Filipinas (${CURRENT_YEAR}). Baixe exemplos de Balanço e DRE, veja requisitos BIR/SEC e use ferramentas PDF gratuitas.`
        },
        h1: `Guia de PDF de Declarações Financeiras: Edição Filipinas (${CURRENT_YEAR})`,
        subtitle: "O guia definitivo para empresas filipinas, contadores e estudantes. Crie, converta e gerencie declarações financeiras compatíveis com BIR.",
        quickAnswer: {
            question: "O que é um conjunto completo de declarações financeiras nas Filipinas?",
            answer: "Nas Filipinas, um conjunto completo de declarações financeiras (FS) estritamente compatível com PFRS inclui 5 componentes: 1) Balanço Patrimonial, 2) Demonstração de Resultados, 3) Demonstração das Mutações do Patrimônio Líquido, 4) Fluxo de Caixa e 5) Notas Explicativas. Estes devem ser submetidos anualmente ao BIR e SEC.",
            steps: ["Preparar Balancete", "Elaborar Balanço", "Criar DRE", "Compilar Notas", "Salvar como PDF"]
        },
        toolsHeading: "Ferramentas PDF Essenciais para Finanças",
        toolsSubheading: "Ferramentas gratuitas e seguras para gerenciar seus documentos financeiros sem fazer upload de arquivos.",
        tools: [
            {
                id: 'pdf-to-excel',
                title: 'PDF para Excel',
                desc: 'Extraia tabelas de declarações financeiras auditadas para arquivos Excel editáveis.',
                icon: FileSpreadsheet,
                link: '/pdf-to-excel',
                color: 'from-green-500 to-emerald-600'
            },
            {
                id: 'invoice-ocr',
                title: 'OCR de Faturas',
                desc: 'Digitalize recibos e faturas para seus registros contábeis instantaneamente.',
                icon: FileText,
                link: '/invoice-ocr',
                color: 'from-blue-500 to-indigo-600'
            },
            {
                id: 'merge-pdf',
                title: 'Mesclar Relatórios',
                desc: 'Combine Balanço, DRE e Notas em um único arquivo PDF.',
                icon: Merge,
                link: '/merge-pdf',
                color: 'from-purple-500 to-violet-600'
            },
            {
                id: 'barcode',
                title: 'Gerador de Código de Barras',
                desc: 'Crie códigos QR para rastreamento digital de documentos físicos.',
                icon: QrCode,
                link: '/barcode-generator',
                color: 'from-orange-500 to-red-600'
            }
        ],
        sections: [
            {
                id: 'financial-statement-basics',
                title: 'Exemplos de Declarações Financeiras e Componentes',
                content: `
Uma **declaração financeira** é o boletim escolar de uma empresa. Compreender estes documentos é crucial para a conformidade com o Bureau of Internal Revenue (BIR) e a Securities and Exchange Commission (SEC).

### 1. Declaração de Posição Financeira (Balanço Patrimonial)
Muitas vezes chamado de **balanço patrimonial**, representa a saúde financeira da sua empresa em um momento específico.

**Fórmula:**  
*> Ativos = Passivos + Patrimônio Líquido*

### 2. Demonstração de Resultados Abrangentes (DRE)
Relata seu desempenho financeiro durante um período. Detalha como a receita líquida é transformada em lucro ou prejuízo.

### 3. Demonstração dos Fluxos de Caixa
Mostra o movimento de dinheiro dentro e fora da empresa (Operacional, Investimento, Financiamento).

### 4. Demonstração das Mutações do Patrimônio Líquido
Detalha as mudanças no interesse do proprietário na empresa durante o período.

### 5. Notas às Demonstrações Financeiras
Obrigatórias. Fornecem a explicação narrativa para os números nas outras quatro declarações.
`
            },
            {
                id: 'audited-statements',
                title: 'Declarações Financeiras Auditadas nas Filipinas',
                content: `
Quando você precisa de **declarações financeiras auditadas**? 
De acordo com o BIR e SEC, empresas devem submeter FS auditadas por um CPA independente se atenderem a limites específicos (ex: Vendas Brutas > ₱3.000.000).
`
            },
            {
                id: 'filing-guide',
                title: 'Como Arquivar: Requisitos BIR e SEC',
                content: `
### 1. Submissão BIR (eAFS)
O BIR agora usa o sistema **eAFS (Electronic Audited Financial Statements)**.
- **Formato**: Apenas PDF.
- **Prazo**: Normalmente **15 de abril**.

### 2. Submissão SEC (e-FAST)
Para corporações, use o **SEC Electronic Filing and Submission Tool (e-FAST)**.
`
            }
        ],
        blogSection: {
            title: "Recursos Financeiros e Guias",
            subtitle: "Mergulhos profundos em tópicos de contabilidade.",
            articles: [
                {
                    title: "Como Criar uma Declaração Financeira",
                    summary: "Guia passo a passo para iniciantes.",
                    readTime: "8 min de leitura",
                    topics: ["Contabilidade", "Tutorial"]
                },
                {
                    title: "Entendendo PFRS para PMEs",
                    summary: "Explicação simplificada dos padrões filipinos.",
                    readTime: "6 min de leitura",
                    topics: ["Conformidade", "Padrões"]
                }
            ]
        },
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Qual a diferença entre Declarações Financeiras específicas?",
                a: "O Balanço mostra o que você possui e deve. a DRE mostra seu desempenho ao longo do tempo."
            },
            {
                q: "Eu realmente preciso de um contador?",
                a: "Se suas vendas anuais forem inferiores a ₱3.000.000, você não é estritamente obrigado a ter auditoria, mas um guarda-livros é recomendado."
            },
            {
                q: "Posso usar Excel?",
                a: "Sim, rascunhe em Excel, mas converta para PDF para submissão ao BIR/SEC."
            }
        ]
    }
});

export const FinancialStatementPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const content = getGuideContent(lang);
    const t = content[lang] || content['en'];
    const isEnglish = lang === 'en';

    // Fallback content for French structure to prevent crash if empty
    if (!isEnglish && t.sections.length === 0) {
        const enContent = getGuideContent('en').en;
        t.tools = enContent.tools;
        t.sections = enContent.sections;
        t.blogSection = enContent.blogSection;
        t.faqs = enContent.faqs;
    }

    const qa = t.quickAnswer;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                lang={lang}
                canonicalPath="/guides/financial-statement-pdf"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    "headline": t.h1,
                    "description": t.seo.desc,
                    "author": {
                        "@type": "Organization",
                        "name": "PDFCanada"
                    },
                    "datePublished": "2024-03-15",
                    "dateModified": new Date().toISOString().split('T')[0],
                    "audience": {
                        "@type": "Audience",
                        "audienceType": "Business Owners, Accountants, Finance Students in Philippines"
                    },
                    "about": [
                        { "@type": "Thing", "name": "Financial Statements" },
                        { "@type": "Thing", "name": "Balance Sheet" },
                        { "@type": "Thing", "name": "Income Statement" },
                        { "@type": "Thing", "name": "BIR Compliance" }
                    ]
                }}
                quickAnswer={{
                    question: qa.question,
                    answer: qa.answer,
                    steps: qa.steps
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides' },
                    { name: 'Financial Statement PDF', path: '/guides/financial-statement-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BarChart3 size={32} />}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Guides', href: '/guides' },
                    { name: 'Financial Statement PDF', href: '#' }
                ]}
            >
                <div className="w-full py-8 space-y-20">

                    {/* TOOL SECTION - TOP (PRIORITY LAYOUT) */}
                    <div className="animate-fade-in">
                        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-gray-700 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <div className="text-center mb-10 relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                                    <Shield className="text-blue-600 dark:text-blue-400" size={16} />
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Free PDF Tools for PH Business</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">{t.toolsHeading}</h2>
                                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.toolsSubheading}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                                {t.tools.map((tool: any, idx: number) => (
                                    <div key={tool.id} className="group">
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                                                <tool.icon className="text-white" size={28} />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tool.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{tool.desc}</p>
                                            <ActionLink
                                                href={`/${lang}${tool.link}`}
                                                ariaLabel={`Use ${tool.title} tool for financial statements`}
                                                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:gap-3 transition-all"
                                            >
                                                Use Tool
                                                <Download size={16} />
                                            </ActionLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* GUIDE CONTENT - MIDDLE */}
                    <div className="space-y-16">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-8 bg-canada-red rounded-full" />
                                    <h2 className="text-3xl font-black text-gray-900 dark:text-white">{section.title}</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/50 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* INTERACTIVE PRO TIPS */}
                    <section className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 p-8 rounded-3xl">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="text-amber-600 dark:text-amber-400 shrink-0 mt-1" size={32} />
                            <div>
                                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Pro Tip: Avoid "Return-to-Sender"</h3>
                                <p className="text-amber-800 dark:text-amber-400">
                                    The most common reason for SEC rejection is missing pages in the PDF file.
                                    Always check that your <strong>Auditor's Report</strong> and **Statement of Management Responsibility** are attached before merging.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* BLOG SECTION - BOTTOM */}
                    <section className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                                <BookOpen className="text-purple-600 dark:text-purple-400" size={16} />
                                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Learning Resources</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">{t.blogSection.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.blogSection.subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {t.blogSection.articles.map((article: any, idx: number) => (
                                <article key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-canada-red/30 dark:hover:border-canada-red/30 transition-all group shadow-md hover:shadow-lg">
                                    <div className="flex items-start gap-2 mb-3">
                                        <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">{article.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{article.summary}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                                            <Calendar size={14} />
                                            {article.readTime}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {article.topics.slice(0, 2).map((topic: string, i: number) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <div className="my-16 sm:my-24 md:my-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black mb-4">{t.faqTitle}</h2>
                            <p className="text-gray-500 dark:text-gray-400">Common questions about financial reporting in the Philippines.</p>
                        </div>
                        <div className="grid gap-4 max-w-3xl mx-auto">
                            {t.faqs.map((faq: any, i: number) => (
                                <div key={i} className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                                    <h5 className="text-lg md:text-xl font-bold mb-3 flex items-start gap-3">
                                        <span className="bg-canada-red/10 text-canada-red rounded-lg p-1 text-sm shrink-0 mt-1">Q</span>
                                        {faq.q}
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-10">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <AISnapshot
                        question={qa.question}
                        answer={qa.answer}
                        toolName="Financial Statement PDF"
                        steps={qa.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/financial-statement-pdf" category="organize" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
