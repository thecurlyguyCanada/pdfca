import React from 'react';
import { FileText } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { GuideTemplate, GuideContent } from './GuideTemplate';

const contentMap: Record<string, GuideContent> = {
    en: {
        seoTitle: 'XRechnung Viewer Guide | Free German E-Invoice Viewer',
        seoDesc: 'View, validate, and understand German XRechnung e-invoices. Free online tool for ZUGFeRD and XRechnung invoice visualization.',
        title: 'XRechnung Viewer',
        subtitle: 'Validate and view standard German e-invoices with ease.',
        breadcrumbHome: 'Home',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'XRechnung',
        intro: `**XRechnung** is the German standard for electronic invoices (e-invoicing). Unlike regular PDF invoices, XRechnung is an XML-based format designed for automated processing by accounting systems.

Our free **XRechnung Viewer** transforms these machine-readable XML files into human-friendly documents you can review, validate, and understand.

### Who Needs This Tool?

*   **Accountants**: Review e-invoices from German suppliers.
*   **AP/AR Departments**: Validate incoming XRechnung invoices before processing.
*   **Government Contractors**: Work with mandatory XRechnung invoicing for public sector clients.
*   **ERP Administrators**: Debug XRechnung processing issues.
*   **Small Business Owners**: Understand e-invoices without specialized software.`,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'What is XRechnung?',
                content: `XRechnung is a structured data model based on the European Norm **EN 16931**. It was developed to enable fully automated invoice processing across the European Union.

**Key Characteristics:**
*   **Pure XML Format**: Unlike PDF invoices designed for human reading, XRechnung is designed for computers.
*   **Mandatory for German Public Sector**: All invoices to German federal authorities must be in XRechnung format.
*   **Standardized Fields**: Contains all required invoice information in a structured, predictable format.
*   **Machine-Readable**: Can be automatically processed without manual data entry.

**Why Use a Viewer?**
Since XRechnung is pure XML, you can't simply open it in a PDF reader. A viewer like ours renders the XML data into a readable layout, showing invoice details like:
*   Supplier and buyer information
*   Line items with prices and quantities
*   Tax calculations
*   Payment terms and bank details`
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs. XRechnung',
                content: `Both are German e-invoice standards, but they work differently:

**ZUGFeRD (Zentraler User Guide des Forums elektronische Rechnung Deutschland):**
*   **Hybrid Format**: A regular PDF with an XML file embedded inside
*   **Human + Machine Readable**: Open it in any PDF reader to see the visual invoice
*   **XML Attachment**: The structured data is attached for automated processing
*   **Multiple Profiles**: BASIC, COMFORT, EXTENDED (varying levels of detail)

**XRechnung:**
*   **Pure XML**: No PDF wrapper—just structured data
*   **Cannot Open in PDF Reader**: Requires a specialized viewer
*   **Government Standard**: Required for German public sector invoicing
*   **EN 16931 Compliant**: Follows European e-invoicing standard

**Which to Use?**
| Scenario | Format |
|----------|--------|
| Invoice to German government | XRechnung |
| Invoice to businesses | ZUGFeRD or XRechnung |
| Need human-readable PDF | ZUGFeRD |
| Maximum compatibility | ZUGFeRD (works everywhere) |`
            },
            {
                id: 'how-to',
                title: 'How to View XRechnung Files',
                content: `1.  **Upload Your File**: Click "Select File" or drag and drop your .xml file.

2.  **Automatic Validation**: Our tool validates the XRechnung against the official schema.

3.  **View Rendered Invoice**: See the invoice in a human-readable format with:
    *   Header information (invoice number, dates)
    *   Supplier and buyer details
    *   Line items with descriptions and amounts
    *   Tax breakdown
    *   Payment information

4.  **Download as PDF (Optional)**: Create a printable PDF version of the e-invoice.

**Pro Tip**: Our viewer displays validation warnings if the XRechnung has issues. Check these before processing in your accounting system.`
            },
            {
                id: 'validation',
                title: 'XRechnung Validation',
                content: `Our viewer performs schema validation to ensure your XRechnung is correctly formatted:

**What We Check:**
*   **Schema Compliance**: Does the XML match the XRechnung structure?
*   **Required Fields**: Are all mandatory fields present?
*   **Data Types**: Are dates, amounts, and codes formatted correctly?
*   **Code List Values**: Are tax codes and unit codes valid?

**Common Validation Issues:**
*   Missing buyer or seller identification
*   Invalid tax category codes
*   Malformed dates (should be YYYY-MM-DD)
*   Missing or incorrect currency codes`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `E-invoices contain sensitive financial information. Here's how we protect your data:

**Local Processing Only**
Your XRechnung files are processed entirely in your browser. We never upload invoice data to our servers.

**Zero Data Retention**
When you close the browser tab, all data is cleared. We don't log or store invoice information.

**PIPEDA & GDPR Considerations**
Our privacy-first approach is designed with Canadian and European privacy requirements in mind.

**Safe for Confidential Invoices:**
*   Government contracts
*   Financial statements
*   Supplier agreements
*   Client billing information`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**What file extensions are XRechnung?**
XRechnung files are typically .xml. Some may come as .xrechnung or attached to emails.

**Can I convert XRechnung to PDF?**
Yes, our viewer can render the e-invoice as a PDF for printing or archival.

**Is XRechnung mandatory?**
For invoices to German federal authorities, yes. For B2B invoicing, it's optional but increasingly common.

**What's the difference between XRechnung and Factur-X?**
Factur-X is the French equivalent of ZUGFeRD. All three (XRechnung, ZUGFeRD, Factur-X) follow EN 16931.

**Can I edit XRechnung files?**
This tool is for viewing and validation. To create or edit XRechnung, use invoicing software.

**Why does my XRechnung fail validation?**
Common issues include missing required fields, invalid codes, or incorrect date formats. Check the validation report.

**Is this tool really free?**
Yes, 100% free with no limits or watermarks.

**Do you support Peppol BIS?**
Yes, we can view invoices following the Peppol BIS Billing 3.0 standard.

**Can I batch process multiple files?**
Currently, files are processed one at a time.`
            }
        ]
    },
    fr: {
        seoTitle: 'Guide Visualiseur XRechnung | Visualiseur E-Factures Allemandes Gratuit',
        seoDesc: 'Visualisez, validez et comprenez les e-factures allemandes XRechnung. Outil gratuit pour ZUGFeRD et XRechnung.',
        title: 'Visualiseur XRechnung',
        subtitle: 'Validez et visualisez les e-factures allemandes standards facilement.',
        breadcrumbHome: 'Accueil',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'XRechnung',
        intro: `**XRechnung** est la norme allemande pour les factures électroniques (e-invoicing). Contrairement aux factures PDF ordinaires, XRechnung est un format XML conçu pour le traitement automatisé.

Notre **Visualiseur XRechnung** gratuit transforme ces fichiers XML en documents lisibles que vous pouvez examiner et valider.

### Qui a besoin de cet outil ?

*   **Comptables** : Examinez les e-factures de fournisseurs allemands.
*   **Départements AP/AR** : Validez les factures XRechnung entrantes.
*   **Contractants gouvernementaux** : Travaillez avec la facturation XRechnung obligatoire.
*   **Administrateurs ERP** : Déboguez les problèmes de traitement XRechnung.
*   **Propriétaires de PME** : Comprenez les e-factures sans logiciel spécialisé.`,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: "Qu'est-ce que XRechnung ?",
                content: `XRechnung est un modèle de données structuré basé sur la Norme Européenne **EN 16931**. Il a été développé pour permettre le traitement automatisé des factures dans l'UE.

**Caractéristiques principales :**
*   **Format XML pur** : Conçu pour les ordinateurs, pas les humains.
*   **Obligatoire pour le secteur public allemand** : Toutes les factures aux autorités fédérales allemandes.
*   **Champs standardisés** : Contient toutes les informations requises de manière structurée.

**Pourquoi utiliser un visualiseur ?**
Puisque XRechnung est du XML pur, vous ne pouvez pas l'ouvrir dans un lecteur PDF. Un visualiseur rend les données XML dans un format lisible.`
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs XRechnung',
                content: `Les deux sont des normes allemandes d'e-factures, mais fonctionnent différemment :

**ZUGFeRD :**
*   **Format hybride** : Un PDF régulier avec un fichier XML intégré
*   **Lisible par l'homme + machine** : Ouvrez-le dans n'importe quel lecteur PDF
*   **Pièce jointe XML** : Les données structurées sont attachées

**XRechnung :**
*   **XML pur** : Pas d'enveloppe PDF
*   **Impossible d'ouvrir dans un lecteur PDF** : Nécessite un visualiseur spécialisé
*   **Norme gouvernementale** : Requis pour la facturation du secteur public allemand`
            },
            {
                id: 'how-to',
                title: 'Comment visualiser les fichiers XRechnung',
                content: `1.  **Téléchargez votre fichier** : Cliquez sur « Sélectionner fichier » ou glissez-déposez votre .xml.

2.  **Validation automatique** : Notre outil valide le XRechnung contre le schéma officiel.

3.  **Visualisez la facture rendue** : Voyez la facture dans un format lisible.

4.  **Téléchargez en PDF** : Créez une version PDF imprimable.`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `Les e-factures contiennent des informations financières sensibles.

**Traitement local uniquement**
Vos fichiers sont traités dans votre navigateur. Nous ne téléchargeons jamais de données.

**Zéro rétention**
Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE et RGPD**
Notre approche respecte les exigences canadiennes et européennes.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Quelles extensions pour XRechnung ?**
Les fichiers XRechnung sont généralement .xml.

**Puis-je convertir XRechnung en PDF ?**
Oui, notre visualiseur peut rendre l'e-facture en PDF.

**XRechnung est-il obligatoire ?**
Pour les factures aux autorités fédérales allemandes, oui.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans limites ou filigranes.`
            }
        ]
    },
    pt: {
        seoTitle: 'Guia Visualizador XRechnung | Visualizador de E-Faturas Alemãs Grátis',
        seoDesc: 'Visualize, valide e entenda faturas eletrônicas alemãs XRechnung. Ferramenta online gratuita para ZUGFeRD e XRechnung.',
        title: 'Visualizador XRechnung',
        subtitle: 'Valide e visualize faturas eletrônicas alemãs padrão com facilidade.',
        breadcrumbHome: 'Início',
        breadcrumbGuides: 'Guias',
        breadcrumbTool: 'XRechnung',
        intro: `**XRechnung** é o padrão alemão para faturas eletrônicas (e-invoicing). Ao contrário de faturas PDF comuns, XRechnung é um formato baseado em XML projetado para processamento automatizado.

Nosso **Visualizador XRechnung** gratuito transforma esses arquivos XML legíveis por máquina em documentos amigáveis que você pode revisar e validar.

### Quem precisa desta ferramenta?

*   **Contadores**: Revise e-faturas de fornecedores alemães.
*   **Departamentos AP/AR**: Valide faturas XRechnung antes do processamento.
*   **Contratados governamentais**: Trabalhe com faturamento XRechnung obrigatório.
*   **Administradores ERP**: Depure problemas de processamento XRechnung.
*   **Proprietários de PME**: Entenda e-faturas sem software especializado.`,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'O que é XRechnung?',
                content: `XRechnung é um modelo de dados estruturado baseado na Norma Europeia **EN 16931**. Foi desenvolvido para permitir processamento automatizado de faturas na UE.

**Características principais:**
*   **Formato XML puro**: Projetado para computadores, não humanos.
*   **Obrigatório para setor público alemão**: Todas as faturas para autoridades federais alemãs.
*   **Campos padronizados**: Contém todas as informações necessárias de forma estruturada.

**Por que usar um visualizador?**
Como XRechnung é XML puro, você não pode abri-lo em um leitor de PDF. Um visualizador renderiza os dados XML em formato legível.`
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs. XRechnung',
                content: `Ambos são padrões alemães de e-fatura, mas funcionam diferentemente:

**ZUGFeRD:**
*   **Formato híbrido**: Um PDF regular com arquivo XML incorporado
*   **Legível por humano + máquina**: Abra em qualquer leitor PDF
*   **Anexo XML**: Dados estruturados são anexados

**XRechnung:**
*   **XML puro**: Sem envelope PDF
*   **Não abre em leitor PDF**: Requer visualizador especializado
*   **Padrão governamental**: Obrigatório para faturamento do setor público alemão`
            },
            {
                id: 'how-to',
                title: 'Como visualizar arquivos XRechnung',
                content: `1.  **Envie seu arquivo**: Clique em "Selecionar arquivo" ou arraste e solte seu .xml.

2.  **Validação automática**: Nossa ferramenta valida o XRechnung contra o schema oficial.

3.  **Visualize a fatura renderizada**: Veja a fatura em formato legível.

4.  **Baixe como PDF**: Crie uma versão PDF para impressão.`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `E-faturas contêm informações financeiras sensíveis.

**Processamento apenas local**
Seus arquivos são processados no navegador. Nunca enviamos dados.

**Zero retenção**
Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD e GDPR**
Nossa abordagem respeita exigências brasileiras e europeias.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Quais extensões para XRechnung?**
Arquivos XRechnung são geralmente .xml.

**Posso converter XRechnung para PDF?**
Sim, nosso visualizador pode renderizar a e-fatura em PDF.

**XRechnung é obrigatório?**
Para faturas a autoridades federais alemãs, sim.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem limites ou marcas d'água.`
            }
        ]
    }
};

export const XRechnungViewerGuide: React.FC<{ lang: Language }> = ({ lang }) => {
    const content = contentMap[lang] || contentMap.en;

    return (
        <GuideTemplate
            lang={lang}
            slug="xrechnung-viewer"
            icon={<FileText size={32} />}
            content={content}
        />
    );
};
