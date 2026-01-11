'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Globe, CheckCircle, Info, Database, Lock, Search, FileText } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `Free PDF to UBL Converter | PDF to UBL XML | E-Invoices ${CURRENT_YEAR}`,
            desc: `Convert PDF invoices to UBL 2.1 XML format for free. Best PDF to UBL converter for e-invoicing. Support for Peppol, XRechnung basics, and "PDF naar UBL". 100% private.`
        },
        h1: `Free PDF to UBL Converter`,
        subtitle: "The complete guide to creating compliant UBL 2.1 XML invoices from your PDF documents.",

        intro: (
            <>
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-600 text-white rounded-xl">
                            <Database size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Ready to convert?</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Transform your invoice to UBL XML instantly.</p>
                        </div>
                    </div>
                    <Link href="/en/pdf-to-ubl" className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                        Go to Converter &rarr;
                    </Link>
                </div>

                In the modern digital economy, sending a simple PDF invoice is no longer sufficient for many transactions. Governments and large enterprises increasingly mandate **Electronic Invoicing (E-Invoicing)** using structured data formats like **UBL (Universal Business Language)**.

                At **pdfcanada.ca**, we provide a robust, **privacy-first solution** to automatically convert your human-readable PDF invoices into machine-readable UBL 2.1 XML files. Whether you are navigating **Peppol** requirements, looking for a **PDF naar UBL** solution, or simply need to modernize your billing, our tool has you covered.
            </>
        ),

        sections: [
            {
                id: "what-is-ubl-peppol",
                title: "Understanding UBL, Peppol, and E-Invoicing",
                content: `### What is UBL?

**UBL (Universal Business Language)** is a standard royalty-free library of standard electronic XML business documents developed by OASIS. Unlike a PDF, which is essentially a digital image of paper, UBL is **structured data**. This means a computer system can read the "Total Amount" directly without guessing where it is on the page.

UBL was designed to provide a common XML vocabulary for business documents such as invoices, purchase orders, and shipping notices. The key benefits include:

- **Interoperability**: Different systems can communicate seamlessly
- **Automation**: Reduces manual data entry and human error
- **Compliance**: Meets government e-invoicing mandates worldwide
- **Cost Savings**: Reduces processing time and paper costs

### The Role of Peppol & XRechnung

- **Peppol (Pan-European Public Procurement Online)**: A network protocol used primarily in Europe (and increasingly globally including Singapore, Australia, and New Zealand) for exchanging e-invoices. Peppol relies heavily on the **UBL BIS Billing 3.0** standard. Over 300,000 businesses worldwide use Peppol for B2B and B2G transactions.

- **XRechnung**: The specific German standard for e-invoicing, mandatory for all suppliers to federal government agencies since November 2020. It can be based on CII (Cross Industry Invoice) or UBL formats.

- **Factur-X / ZUGFeRD**: A hybrid format (PDF + embedded XML) used in France and Germany. It combines human-readable PDF with machine-readable XML data for maximum flexibility.

- **FatturaPA**: The Italian e-invoicing standard, mandatory for all B2B transactions in Italy.

Our tool generates **Standard UBL 2.1**, which serves as the foundational layer for most of these compliance frameworks. This means your converted files are ready for further validation against specific country requirements.`
            },
            {
                id: "privacy-security",
                title: "Why Local Conversion Matters for Financial Data",
                content: `When dealing with invoices, privacy is paramount. Your documents contain highly sensitive business data:

- **Vendor Tax IDs and Registration Numbers**
- **Client Names and Addresses**
- **Bank Account Details (IBAN, BIC/SWIFT)**
- **Transaction Values and Pricing**
- **Product or Service Descriptions**

### The Risks of Cloud-Based Converters

Most online converters ask you to upload your PDF to their cloud server. This creates several serious risks:

1. **Data Interception**: Files can be intercepted during upload over insecure connections.

2. **Data Retention**: Servers might store your invoice indefinitely for "quality improvement" or other purposes.

3. **Data Mining**: Free services often analyze your data for advertising insights or sell aggregated data to third parties.

4. **Compliance Violations**: Uploading client data to third-party servers may violate GDPR, PIPEDA, or industry-specific regulations like HIPAA.

5. **Security Breaches**: Cloud servers are attractive targets for hackers seeking financial data.

### The pdfcanada.ca Advantage

We use advanced **WebAssembly (WASM)** and browser-native OCR to process your PDF **entirely on your device**. Here's what this means:

- Your invoice **never leaves your computer**
- We physically **cannot see your data** - our servers receive nothing
- No data is logged, stored, or transmitted
- Works offline once the page is loaded
- Compliant with GDPR, PIPEDA, and data sovereignty requirements

This zero-upload architecture makes pdfcanada.ca the only truly private solution for converting sensitive financial documents.`
            },
            {
                id: "technical-mapping",
                title: "How It Works: From PDF to UBL Tags",
                content: `Our engine uses a sophisticated smart extraction layer to map visual text from your PDF to UBL XML tags. Here is what happens under the hood:

### Invoice Header Recognition

- **Supplier Identification**: We look for keywords like "IBAN", "VAT", "Tax ID", "GST/HST", and "From:" to identify the \`cac:AccountingSupplierParty\` element.

- **Customer Identification**: Keywords like "Bill To:", "Customer:", and "Ship To:" help map the \`cac:AccountingCustomerParty\`.

- **Document Metadata**: Invoice numbers, dates, and due dates are extracted and mapped to \`cbc:ID\`, \`cbc:IssueDate\`, and \`cbc:DueDate\`.

### Line Item Extraction

Tables are parsed using intelligent column detection to identify:

- Product descriptions → \`cbc:Name\`
- Quantities → \`cbc:InvoicedQuantity\`
- Unit prices → \`cbc:PriceAmount\`
- Line totals → \`cbc:LineExtensionAmount\`
- Tax rates → \`cac:TaxCategory\`

Each row becomes a complete \`cac:InvoiceLine\` element with all required sub-elements.

### Total Calculation & Validation

We mathematically verify that your invoice balances correctly:

- Sum of line items = \`cbc:LineExtensionAmount\`
- Tax calculations match declared \`cbc:TaxAmount\`
- Final total equals \`cbc:PayableAmount\`

This ensures that the XML output is not just valid code, but **mathematically accurate business data** that will pass automated validation checks.`
            },
            {
                id: "how-to",
                title: "Step-by-Step Conversion Guide",
                content: `### Step 1: Upload Your Invoice

Navigate to the **PDF to UBL Tool** and select your PDF invoice. The tool works best with native PDFs (created from Word, Excel, or accounting software) but includes OCR for scanned documents.

**Supported file types:**
- Native PDFs with embedded text (best accuracy)
- Scanned PDFs (uses OCR engine)
- Image files (PNG, JPG - converted via OCR)

### Step 2: Automatic Data Analysis

Our local AI scans the document structure using pattern recognition and natural language processing. It automatically identifies:

- **Invoice Date** → mapped to \`cbc:IssueDate\` in YYYY-MM-DD format
- **Due Date** → mapped to \`cbc:DueDate\`
- **Currency** → mapped to \`cbc:DocumentCurrencyCode\` (CAD, USD, EUR, etc.)
- **Invoice Number** → mapped to \`cbc:ID\`
- **Tax Registration Numbers** → mapped to appropriate party elements

### Step 3: Verification & Editing

Since UBL requires strict formatting (e.g., all dates must be **YYYY-MM-DD**, currency codes must be ISO 4217), we provide a comprehensive preview screen where you can:

- Review all extracted data fields
- Correct any misread or missing information
- Add optional elements not found in the PDF
- Validate tax calculations

This step ensures maximum accuracy before generating the final XML.

### Step 4: Download Valid XML

Click **Download** to receive your \`.xml\` file. The generated UBL 2.1 Invoice document includes:

- Complete namespace declarations
- All required and optional elements
- Proper encoding (UTF-8)
- Ready for import into accounting systems

You can now import this XML into accounting software like **Xero**, **QuickBooks**, **SAP**, or **Oracle**, or submit it via a **Peppol Access Point** for B2B/B2G transactions.`
            }
        ],

        faq: [
            {
                q: "Is the generated UBL compatible with Peppol?",
                a: "Our output follows the UBL 2.1 standard (Invoice-2). While it is technically compatible, for strict Peppol BIS 3.0 compliance, you should validate the XML against specific country rules (CIUS) before submission."
            },
            {
                q: "Can this convert scanned (image-based) PDFs?",
                a: "Yes! We include a browser-based OCR engine that can read text from scanned images, though native PDFs yield 100% accuracy."
            },
            {
                q: "Why is the XML file so small compared to the PDF?",
                a: "PDFs contain fonts, layout information, and graphics. The UBL XML contains only the pure data (text and numbers), making it highly efficient for storage and transmission."
            },
            {
                q: "Do you store my invoice data?",
                a: "No. Emphatically no. The conversion happens in your browser's memory. If you close the tab, the data is gone forever."
            },
            {
                q: "Is this tool free to use?",
                a: "Yes, it is completely free with no limits on the number of invoices you can convert."
            }
        ],

        quickAnswer: {
            question: "How to convert PDF invoice to UBL?",
            answer: "Use pdfcanada.ca's PDF to UBL tool. Upload your invoice, verify the extracted data, and download the UBL 2.1 XML file.",
            tool: "PDF to UBL Tool",
            steps: ["Upload PDF", "Verify Data", "Download UBL XML"]
        },
        ctaTitle: "Start Creating E-Invoices",
        ctaButton: "Convert PDF to UBL"
    },
    fr: {
        seo: {
            title: `Convertisseur PDF vers UBL Gratuit | Facture Électronique | PDF en UBL XML ${CURRENT_YEAR}`,
            desc: `Convertissez vos factures PDF au format UBL 2.1 XML gratuitement. Générez des factures électroniques conformes localement. Support Peppol et Factur-X. 100% privé.`
        },
        h1: `Convertisseur PDF vers UBL Gratuit`,
        subtitle: "Le guide complet pour créer des factures UBL 2.1 XML conformes à partir de vos documents PDF.",

        toolCta: {
            title: "Prêt à convertir ?",
            subtitle: "Transformez votre facture en XML UBL instantanément.",
            buttonText: "Aller au Convertisseur",
            link: "/fr/pdf-to-ubl"
        },

        intro: `Dans l'économie numérique actuelle, envoyer une simple facture PDF ne suffit plus. Les gouvernements et les grandes entreprises exigent de plus en plus la **Facturation Électronique** utilisant des formats de données structurés comme **UBL**.

Chez **pdfcanada.ca**, nous fournissons une solution **axée sur la confidentialité** pour convertir automatiquement vos factures PDF en fichiers XML UBL 2.1. Que vous naviguiez dans les exigences **Peppol**, cherchiez une solution pour **PDF vers UBL**, ou souhaitiez simplement moderniser votre facturation, notre outil est là pour vous.`,

        sections: [
            {
                id: "what-is-ubl-peppol",
                title: "Comprendre UBL, Peppol et la Facturation Électronique",
                content: `### Qu'est-ce que l'UBL ?
**UBL (Universal Business Language)** est une bibliothèque standard de documents commerciaux XML. Contrairement à un PDF, qui est une image numérique, l'UBL est constitué de **données structurées**. Un ordinateur peut lire le "Montant Total" directement sans deviner.

### Le rôle de Peppol et Factur-X
*   **Peppol :** Un réseau utilisé principalement en Europe pour l'échange de factures électroniques. Il repose sur le standard **UBL BIS Billing 3.0**.
*   **Factur-X :** Un format hybride (PDF + XML) utilisé en France et en Allemagne.
*   **XRechnung :** Le standard allemand spécifique.

Notre outil génère du **Standard UBL 2.1**, qui sert de base à la plupart de ces cadres de conformité.`
            },
            {
                id: "privacy-security",
                title: "Pourquoi la conversion locale est cruciale",
                content: `La confidentialité est primordiale pour les factures. Vos documents contiennent des données sensibles : **Identifiants Fiscaux**, **Adresses Clients**, et **Valeurs de Transaction**.

La plupart des convertisseurs en ligne vous demandent de téléverser votre PDF sur leur serveur cloud. Cela crée un risque d'interception ou de conservation des données.

**L'avantage pdfcanada.ca :**
Nous utilisons la technologie **WebAssembly (WASM)** pour traiter votre PDF **entièrement sur votre appareil**. Votre facture ne quitte jamais votre ordinateur.`
            },
            {
                id: "technical-mapping",
                title: "Comment ça marche : De PDF aux balises UBL",
                content: `Notre moteur utilise une extraction intelligente pour faire correspondre le texte visuel aux balises XML UBL :

*   **Identifiants Vendeur :** Nous repérons les mots-clés "TVA", "SIRET" pour identifier le \`cac:AccountingSupplierParty\`.
*   **Lignes de Facture :** Les tableaux sont analysés pour identifier les descriptions et prix, les convertissant en éléments \`cac:InvoiceLine\`.
*   **Calculs :** Nous vérifions mathématiquement que les totaux correspondent.

Cela garantit que la sortie XML est non seulement du code valide, mais des données commerciales exactes.`
            },
            {
                id: "how-to",
                title: "Guide de Conversion Étape par Étape",
                content: `### Étape 1 : Importez votre facture
Allez sur l'outil **PDF vers UBL** et sélectionnez votre facture. L'outil fonctionne mieux avec des PDF natifs mais inclut l'OCR pour les scans.

### Étape 2 : Analyse Automatique
Notre IA locale scanne la structure. Elle identifie la **Date de Facture** (mappée sur \`cbc:IssueDate\`) et la **Devise** (mappée sur \`cbc:DocumentCurrencyCode\`).

### Étape 3 : Vérification
Comme l'UBL exige un formatage strict (ex: dates AAAA-MM-JJ), nous fournissons un écran de prévisualisation pour corriger les champs avant de générer le XML.

### Étape 4 : Téléchargez le XML
Cliquez sur **Télécharger** pour recevoir votre fichier \`.xml\`. Vous pouvez maintenant l'importer dans votre logiciel comptable.`
            }
        ],

        faq: [
            {
                q: "Le fichier UBL est-il compatible avec Peppol ?",
                a: "Notre sortie suit la norme UBL 2.1. Bien qu'elle soit techniquement compatible, pour une conformité stricte Peppol BIS 3.0, vous devez valider le XML selon les règles spécifiques du pays avant soumission."
            },
            {
                q: "Cela fonctionne-t-il avec des PDF scannés ?",
                a: "Oui ! Nous incluons un moteur OCR qui peut lire le texte des images scannées."
            },
            {
                q: "Pourquoi le fichier XML est-il si petit ?",
                a: "Les PDF contiennent des polices et des graphiques. Le XML UBL ne contient que les données pures, ce qui le rend très efficace."
            },
            {
                q: "Stockez-vous mes données de facturation ?",
                a: "Non. Jamais. La conversion se fait dans la mémoire de votre navigateur. Si vous fermez l'onglet, les données disparaissent."
            },
            {
                q: "L'outil est-il gratuit ?",
                a: "Oui, il est entièrement gratuit et sans limite de nombre de conversions."
            }
        ],

        quickAnswer: {
            question: "Comment convertir un PDF en UBL XML ?",
            answer: "Utilisez l'outil PDF vers UBL de pdfcanada.ca. Importez votre facture, vérifiez les données et téléchargez le fichier XML UBL 2.1.",
            tool: "Outil PDF vers UBL",
            steps: ["Importez PDF", "Vérifiez Données", "Téléchargez XML"]
        },
        ctaTitle: "Créez vos Factures Électroniques",
        ctaButton: "Convertir PDF en UBL"
    },
    pt: {
        seo: {
            title: `Conversor PDF para UBL Gratuito | Fatura Eletrônica ${CURRENT_YEAR}`,
            desc: `Converta faturas PDF para o formato UBL 2.1 XML gratuitamente. Gere faturas eletrônicas compatíveis localmente no seu navegador. Suporte Peppol. 100% privado.`
        },
        h1: `Conversor PDF para UBL Gratuito`,
        subtitle: "O guia completo para criar faturas UBL 2.1 XML compatíveis a partir de seus PDFs.",

        toolCta: {
            title: "Pronto para converter?",
            subtitle: "Transforme sua fatura em UBL XML instantaneamente.",
            buttonText: "Ir para o Conversor",
            link: "/pt/pdf-to-ubl"
        },

        intro: `Na economia digital atual, enviar uma simples fatura em PDF não é mais suficiente. Governos e grandes empresas exigem cada vez mais o **Faturamento Eletrônico** usando formatos de dados estruturados como **UBL**.

No **pdfcanada.ca**, fornecemos uma solução **focada na privacidade** para converter automaticamente suas faturas PDF em arquivos XML UBL 2.1. Seja você navegando pelos requisitos do **Peppol** ou simplesmente modernizando seu faturamento, nossa ferramenta está aqui para ajudar.`,

        sections: [
            {
                id: "what-is-ubl-peppol",
                title: "Entendendo UBL, Peppol e Faturamento Eletrônico",
                content: `### O que é UBL?
**UBL (Universal Business Language)** é uma biblioteca padrão de documentos comerciais XML. Diferente de um PDF, que é uma imagem digital, o UBL é composto por **dados estruturados**. Um computador pode ler o "Valor Total" diretamente sem adivinhar.

### O papel do Peppol
*   **Peppol:** Um protocolo de rede usado principalmente na Europa (e globalmente) para troca de faturas eletrônicas. Baseia-se no padrão **UBL BIS Billing 3.0**.

Nossa ferramenta gera **Standard UBL 2.1**, que serve como a camada fundamental para a maioria desses quadros de conformidade.`
            },
            {
                id: "privacy-security",
                title: "Por que a conversão local é crucial",
                content: `A privacidade é fundamental para faturas. Seus documentos contêm dados sensíveis: **IDs Fiscais**, **Endereços de Clientes** e **Valores de Transação**.

A maioria dos conversores online pede para você enviar seu PDF para o servidor deles. Isso cria um risco de interceptação ou retenção de dados.

**A vantagem do pdfcanada.ca:**
Usamos tecnologia **WebAssembly (WASM)** para processar seu PDF **inteiramente no seu dispositivo**. Sua fatura nunca sai do seu computador.`
            },
            {
                id: "technical-mapping",
                title: "Como funciona: De PDF para tags UBL",
                content: `Nosso motor usa uma camada de extração inteligente para mapear texto visual para tags XML UBL:

*   **Reconhecimento de Fornecedor:** Identificamos palavras-chave como "CNPJ", "VAT" para identificar o \`cac:AccountingSupplierParty\`.
*   **Extração de Itens:** Tabelas são analisadas para identificar descrições e preços, convertendo-os em elementos \`cac:InvoiceLine\`.
*   **Cálculos:** Verificamos matematicamente se os totais correspondem.

Isso garante que a saída XML não seja apenas código válido, mas dados comerciais precisos.`
            },
            {
                id: "how-to",
                title: "Guia de Conversão Passo a Passo",
                content: `### Passo 1: Envie sua Fatura
Vá para a ferramenta **PDF para UBL** e selecione sua fatura. A ferramenta funciona melhor com PDFs nativos, mas inclui OCR para digitalizações.

### Passo 2: Análise Automática
Nossa IA local verifica a estrutura. Ela identifica a **Data da Fatura** (mapeada para \`cbc:IssueDate\`) e **Moeda** (mapeada para \`cbc:DocumentCurrencyCode\`).

### Passo 3: Verificação
Como o UBL exige formatação rigorosa (ex: datas AAAA-MM-DD), fornecemos uma tela de pré-visualização para corrigir campos antes de gerar o XML.

### Passo 4: Baixe o XML
Clique em **Baixar** para receber seu arquivo \`.xml\`. Você pode agora importá-lo em seu software de contabilidade.`
            }
        ],

        faq: [
            {
                q: "O arquivo UBL é compatível com Peppol?",
                a: "Nossa saída segue o padrão UBL 2.1. Embora seja tecnicamente compatível, para conformidade estrita com Peppol BIS 3.0, você deve validar o XML de acordo com as regras específicas do país."
            },
            {
                q: "Funciona com PDFs digitalizados?",
                a: "Sim! Incluímos um mecanismo OCR que pode ler texto de imagens digitalizadas."
            },
            {
                q: "Por que o arquivo XML é tão pequeno?",
                a: "PDFs contêm fontes e gráficos. O XML UBL contém apenas os dados puros, tornando-o muito eficiente."
            },
            {
                q: "Vocês armazenam meus dados?",
                a: "Não. Nunca. A conversão acontece na memória do seu navegador. Se você fechar a aba, os dados desaparecem."
            },
            {
                q: "A ferramenta é gratuita?",
                a: "Sim, é totalmente gratuita e sem limites no número de conversões."
            }
        ],

        quickAnswer: {
            question: "Como converter fatura PDF para UBL?",
            answer: "Use a ferramenta PDF para UBL do pdfcanada.ca. Envie sua fatura, verifique os dados e baixe o arquivo XML UBL 2.1.",
            tool: "Ferramenta PDF para UBL",
            steps: ["Enviar PDF", "Verificar Dados", "Baixar XML"]
        },
        ctaTitle: "Comece a Criar Faturas Eletrônicas",
        ctaButton: "Converter PDF para UBL"
    }
});

export const PdfToUblGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "operatingSystem": "Any",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<FileCode size={32} />}
            breadcrumbs={[
                {
                    name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home',
                    href: lang === 'en' ? '/' : `/${lang}`
                },
                {
                    name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides',
                    href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide`
                },
                {
                    name: lang === 'fr' ? 'PDF ver UBL' : lang === 'pt' ? 'PDF para UBL' : 'PDF to UBL',
                    href: '#'
                }
            ]}
        >
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-ubl"
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
                <div className="max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    {t.toolCta && (
                        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm not-prose">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-600 text-white rounded-xl">
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{t.toolCta.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.toolCta.subtitle}</p>
                                </div>
                            </div>
                            <Link href={t.toolCta.link} className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                                {t.toolCta.buttonText} &rarr;
                            </Link>
                        </div>
                    )}

                    <div className="prose prose-xl dark:prose-invert max-w-none">
                        <MarkdownContent content={t.intro as string} />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                        <Database className="text-canada-red mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">UBL 2.1</h3>
                        <p className="text-gray-500">{lang === 'fr' ? "Format standardisé." : lang === 'pt' ? "Formato padronizado." : "Standardized format."}</p>
                    </div>
                    <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                        <Globe className="text-canada-red mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">{lang === 'fr' ? "E-Invoicing" : lang === 'pt' ? "Faturamento" : "E-Invoicing"}</h3>
                        <p className="text-gray-500">{lang === 'fr' ? "Prêt pour l'automatisation." : lang === 'pt' ? "Pronto para automação." : "Ready for automation."}</p>
                    </div>
                    <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                        <Lock className="text-canada-red mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">{lang === 'fr' ? "100% Privé" : lang === 'pt' ? "100% Privado" : "100% Private"}</h3>
                        <p className="text-gray-500">{lang === 'fr' ? "Traitement local." : lang === 'pt' ? "Processamento local." : "Local processing."}</p>
                    </div>
                </div>

                <div className="space-y-16">
                    {t.sections.map((section: any) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}
                </div>

                <div className="my-20">
                    <div className="flex items-center gap-3 mb-10">
                        <Info className="text-canada-red" size={32} />
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                    </div>
                    <div className="grid gap-6">
                        {t.faq.map((item: any, i: number) => (
                            <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">
                                    {item.q}
                                </h4>
                                <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />
                </div>

                <div className="mt-20 bg-canada-red p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                    <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{t.ctaTitle}</h2>
                    <p className="text-lg md:text-xl mb-10 opacity-90">{t.subtitle}</p>
                    <Link href={`/${lang}/pdf-to-ubl`}
                        className="inline-block bg-white text-canada-red px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                    >
                        {t.ctaButton}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-ubl" category="advanced" />
                </div>

                <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-12">
                    <AuthorBio lang={lang} />
                </div>
            </div>
        </PageLayout>
    );
};
