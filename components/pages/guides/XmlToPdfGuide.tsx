import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileCode } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const XmlToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'xml-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'XML to PDF';

    const content = {
        en: {
            subtitle: "Convert XML data files to readable, professional PDF documents instantly",
            intro: `Need to view or share XML data in a human-readable format? Our free **${title}** tool transforms structured XML files into clean, professionally formatted PDF documents. Whether you're working with e-invoices (UBL/ZUGFeRD), configuration files, or data exports, PDF makes your XML content accessible to anyone.

XML (Extensible Markup Language) is powerful for data storage and exchange, but it's not designed for human reading. Converting XML to PDF creates a document that's easy to review, print, and share—even with people who don't have technical tools to parse XML.

### Who Needs This Tool?

*   **Accountants & Finance Teams**: View and print e-invoices in UBL, ZUGFeRD, or Factur-X format.
*   **Developers & IT Professionals**: Document configuration files and API responses.
*   **Data Analysts**: Create readable reports from XML data exports.
*   **Compliance Officers**: Archive XML records in a universally accessible format.
*   **Government & Legal**: Convert official XML documents to shareable PDFs.`,

            step1Title: "How to Convert XML to PDF Online",
            step1Content: `Follow these simple steps to transform your XML data into a readable PDF document:

1.  **Upload Your File**: Click the "Select File" button or drag and drop your .xml file into the upload area.

2.  **Automatic Formatting**: Our tool automatically applies clean styling to your XML structure, making it readable.

3.  **Preview the Output**: Review how your XML data will appear in the PDF. Elements are properly indented and structured.

4.  **Click Convert**: Press the "Convert to PDF" button. The conversion happens instantly in your browser.

5.  **Download Your PDF**: Once complete, click "Download" to save your formatted PDF document.

**Pro Tip**: For e-invoices (UBL/ZUGFeRD), our tool intelligently extracts and displays key fields like invoice number, dates, amounts, and line items in a business-friendly format.`,

            step2Title: "Features & Benefits",
            step2Content: `Our XML to PDF converter offers powerful features for professional results:

*   **Intelligent Formatting**: XML elements are properly indented with syntax highlighting for readability.
*   **E-Invoice Support**: Special handling for UBL, ZUGFeRD, and Factur-X invoice formats.
*   **Clean Typography**: Monospace fonts for code with proper spacing and line breaks.
*   **Large File Support**: Handle XML files with thousands of elements efficiently.
*   **100% Private Processing**: Your XML data never leaves your browser—ideal for sensitive business data.
*   **No Installation Required**: Works entirely in your web browser.
*   **Preserve Structure**: Hierarchical XML structure is visually represented with proper nesting.
*   **No Watermarks**: Your output is completely clean and professional.
*   **Free & Unlimited**: Convert as many XML files as you need, no signup required.`,

            step3Title: "Privacy & Security",
            step3Content: `Your business data deserves maximum protection. Here's how we keep your XML files secure:

**Local-First Processing**
Unlike cloud-based converters that upload your files to remote servers, our tool processes everything directly in your web browser. Your XML data never leaves your device.

**Zero Data Retention**
We don't store, cache, or log any of your XML content. When you close the browser tab, all data is immediately cleared from memory.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements—critical for financial and business documents.

**Ideal for Sensitive Documents:**
*   Financial invoices and statements
*   Configuration files with credentials
*   Customer data exports
*   API responses with PII`,

            step4Title: "Common Use Cases",
            step4Content: `**E-Invoice Viewing (UBL/ZUGFeRD)**
Convert electronic invoices (Peppol, XRechnung, ZUGFeRD) to readable PDFs for review and archival.

**Configuration Documentation**
Transform server configs, application settings, and infrastructure definitions into printable documentation.

**Data Export Reports**
Convert XML data exports from databases and applications into formatted reports.

**API Response Documentation**
Create readable documentation from XML API responses for development reference.

**Compliance & Archival**
Archive XML records in PDF format for long-term storage and regulatory compliance.

**Client-Friendly Sharing**
Share XML data with non-technical stakeholders in an accessible PDF format.`,

            step5Title: "Troubleshooting Common Issues",
            step5Content: `**Problem: XML parsing error**
*Solution*: Ensure your XML file is well-formed (matching opening/closing tags). Use an XML validator if needed.

**Problem: Special characters display incorrectly**
*Solution*: Our tool supports UTF-8 encoding. If your file uses a different encoding, convert it to UTF-8 first.

**Problem: The PDF is too long/complex**
*Solution*: For very large XML files, consider extracting only the sections you need before converting.

**Problem: Invoice fields aren't extracted properly**
*Solution*: Ensure your e-invoice follows standard UBL or ZUGFeRD schema. Custom XML formats show raw structure instead.

**Problem: The conversion seems slow**
*Solution*: Very large XML files (10+ MB) may take longer. Close other browser tabs to free up memory.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**What XML formats are supported?**
We support any well-formed XML file. Special optimization exists for e-invoice formats (UBL 2.1, ZUGFeRD 2.0, Factur-X).

**Do you support XSLT transformations?**
Currently, we apply a standard formatting style. Custom XSLT stylesheets are not supported yet.

**Can I convert XML to other formats?**
This tool creates PDF output. For XML to Excel or CSV, check our other conversion tools.

**How are XML namespaces handled?**
Namespaces are displayed in the output but formatted for readability.

**Will the PDF preserve the exact XML structure?**
Yes, the hierarchical structure is preserved with proper indentation to show parent-child relationships.

**Can I convert e-invoices from European standards?**
Yes! We support Peppol BIS, XRechnung, Factur-X, and other UBL-based invoice formats.

**Is there a file size limit?**
No hard limit, but very large files (50+ MB) may be slow to process in the browser.

**Can I batch convert multiple XML files?**
Currently, files are converted one at a time.

**Will my XML attributes be visible?**
Yes, both elements and attributes are displayed in the PDF output.

**Is this tool really free?**
Yes, 100% free with no hidden costs, watermarks, or usage limits.

**Do you support XML with embedded CDATA?**
Yes, CDATA sections are properly handled and displayed.

**Can I convert XML Schema (XSD) files?**
Yes, XSD files are technically XML and can be converted to PDF for documentation purposes.`
        },
        fr: {
            subtitle: "Convertissez des fichiers de données XML en documents PDF lisibles et professionnels instantanément",
            intro: `Besoin de visualiser ou partager des données XML dans un format lisible ? Notre outil gratuit **${title}** transforme les fichiers XML structurés en documents PDF propres et professionnels. Que vous travailliez avec des e-factures (UBL/ZUGFeRD), des fichiers de configuration ou des exports de données, le PDF rend votre contenu XML accessible à tous.

XML (Extensible Markup Language) est puissant pour le stockage et l'échange de données, mais il n'est pas conçu pour la lecture humaine. Convertir XML en PDF crée un document facile à examiner, imprimer et partager.

### Qui a besoin de cet outil ?

*   **Comptables et équipes financières** : Visualisez et imprimez des e-factures au format UBL ou ZUGFeRD.
*   **Développeurs et professionnels IT** : Documentez les fichiers de configuration.
*   **Analystes de données** : Créez des rapports lisibles à partir d'exports XML.
*   **Responsables conformité** : Archivez les enregistrements XML dans un format accessible.
*   **Gouvernement et juridique** : Convertissez des documents XML officiels en PDF partageables.`,

            step1Title: "Comment convertir XML en PDF en ligne",
            step1Content: `Suivez ces étapes simples :

1.  **Téléchargez votre fichier** : Cliquez sur « Sélectionner un fichier » ou glissez-déposez votre fichier .xml.

2.  **Formatage automatique** : Notre outil applique automatiquement un style propre à votre structure XML.

3.  **Prévisualisez la sortie** : Les éléments sont correctement indentés et structurés.

4.  **Cliquez sur Convertir** : La conversion se fait instantanément.

5.  **Téléchargez votre PDF** : Enregistrez votre document PDF formaté.

**Conseil** : Pour les e-factures, notre outil extrait intelligemment les champs clés.`,

            step2Title: "Fonctionnalités et avantages",
            step2Content: `Notre convertisseur XML vers PDF offre des fonctionnalités puissantes :

*   **Formatage intelligent** : Les éléments XML sont correctement indentés.
*   **Support e-factures** : Traitement spécial pour les formats UBL et ZUGFeRD.
*   **Typographie propre** : Polices monospace avec espacement approprié.
*   **Support gros fichiers** : Gérez des fichiers XML avec des milliers d'éléments.
*   **Traitement 100% privé** : Vos données XML ne quittent jamais votre navigateur.
*   **Préservation de la structure** : La structure hiérarchique est représentée visuellement.
*   **Sans filigrane** : Sortie propre et professionnelle.
*   **Gratuit et illimité** : Convertissez autant de fichiers que nécessaire.`,

            step3Title: "Confidentialité et sécurité",
            step3Content: `Vos données d'entreprise méritent une protection maximale :

**Traitement Local-First**
Notre outil traite tout directement dans votre navigateur. Vos données XML ne quittent jamais votre appareil.

**Zéro rétention de données**
Nous ne stockons aucun de vos contenus XML. Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes en matière de confidentialité.`,

            step4Title: "Cas d'utilisation courants",
            step4Content: `**Visualisation d'e-factures**
Convertissez des factures électroniques UBL/ZUGFeRD en PDF lisibles.

**Documentation de configuration**
Transformez des configs serveur en documentation imprimable.

**Rapports d'export de données**
Convertissez des exports XML en rapports formatés.

**Documentation API**
Créez une documentation lisible à partir de réponses API XML.

**Conformité et archivage**
Archivez des enregistrements XML au format PDF.`,

            step5Title: "Dépannage des problèmes courants",
            step5Content: `**Problème : Erreur de parsing XML**
*Solution* : Assurez-vous que votre fichier XML est bien formé.

**Problème : Caractères spéciaux incorrects**
*Solution* : Notre outil supporte l'encodage UTF-8.

**Problème : Le PDF est trop long**
*Solution* : Pour de très gros fichiers, extrayez uniquement les sections nécessaires.`,

            faqTitle: "Questions fréquemment posées",
            faqContent: `**Quels formats XML sont supportés ?**
Nous supportons tout fichier XML bien formé. Optimisation spéciale pour les e-factures.

**Supportez-vous les transformations XSLT ?**
Actuellement, nous appliquons un formatage standard.

**Puis-je convertir des e-factures européennes ?**
Oui ! Nous supportons Peppol BIS, XRechnung, Factur-X.

**Y a-t-il une limite de taille ?**
Pas de limite stricte, mais les très gros fichiers peuvent être lents.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`
        },
        pt: {
            subtitle: "Converta arquivos de dados XML para documentos PDF legíveis e profissionais instantaneamente",
            intro: `Precisa visualizar ou compartilhar dados XML em formato legível? Nossa ferramenta gratuita **${title}** transforma arquivos XML estruturados em documentos PDF limpos e profissionalmente formatados. Seja trabalhando com notas fiscais eletrônicas, arquivos de configuração ou exportações de dados, o PDF torna seu conteúdo XML acessível para qualquer pessoa.

XML (Extensible Markup Language) é poderoso para armazenamento e troca de dados, mas não é projetado para leitura humana. Converter XML para PDF cria um documento fácil de revisar, imprimir e compartilhar.

### Quem precisa desta ferramenta?

*   **Contadores e equipes financeiras**: Visualize e imprima NFe e outros XMLs fiscais.
*   **Desenvolvedores e profissionais de TI**: Documente arquivos de configuração.
*   **Analistas de dados**: Crie relatórios legíveis de exportações XML.
*   **Responsáveis por conformidade**: Arquive registros XML em formato acessível.
*   **Governo e jurídico**: Converta documentos XML oficiais para PDFs compartilháveis.`,

            step1Title: "Como converter XML para PDF online",
            step1Content: `Siga estes passos simples:

1.  **Envie seu arquivo**: Clique em "Selecionar arquivo" ou arraste e solte seu arquivo .xml.

2.  **Formatação automática**: Nossa ferramenta aplica automaticamente estilo limpo à sua estrutura XML.

3.  **Visualize a saída**: Elementos são corretamente indentados e estruturados.

4.  **Clique em Converter**: A conversão acontece instantaneamente.

5.  **Baixe seu PDF**: Salve seu documento PDF formatado.

**Dica**: Para NFe e XMLs fiscais, nossa ferramenta extrai inteligentemente os campos principais.`,

            step2Title: "Recursos e benefícios",
            step2Content: `Nosso conversor de XML para PDF oferece recursos poderosos:

*   **Formatação inteligente**: Elementos XML são corretamente indentados.
*   **Suporte a NFe**: Tratamento especial para XMLs fiscais brasileiros.
*   **Tipografia limpa**: Fontes monoespaçadas com espaçamento adequado.
*   **Suporte a arquivos grandes**: Processe XMLs com milhares de elementos.
*   **Processamento 100% privado**: Seus dados XML nunca saem do navegador.
*   **Preservação da estrutura**: Estrutura hierárquica representada visualmente.
*   **Sem marcas d'água**: Saída limpa e profissional.
*   **Gratuito e ilimitado**: Converta quantos arquivos precisar.`,

            step3Title: "Privacidade e segurança",
            step3Content: `Seus dados empresariais merecem máxima proteção:

**Processamento Local-First**
Nossa ferramenta processa tudo diretamente no seu navegador. Seus dados XML nunca saem do seu dispositivo.

**Zero retenção de dados**
Não armazenamos nenhum conteúdo XML. Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras de proteção de dados.`,

            step4Title: "Casos de uso comuns",
            step4Content: `**Visualização de NFe**
Converta XMLs de notas fiscais eletrônicas para PDFs legíveis.

**Documentação de configuração**
Transforme configs de servidor em documentação imprimível.

**Relatórios de exportação de dados**
Converta exportações XML em relatórios formatados.

**Documentação de API**
Crie documentação legível de respostas XML de API.

**Conformidade e arquivamento**
Arquive registros XML no formato PDF.`,

            step5Title: "Solução de problemas comuns",
            step5Content: `**Problema: Erro de parsing XML**
*Solução*: Certifique-se de que seu arquivo XML está bem formado.

**Problema: Caracteres especiais incorretos**
*Solução*: Nossa ferramenta suporta codificação UTF-8.

**Problema: O PDF é muito longo**
*Solução*: Para arquivos muito grandes, extraia apenas as seções necessárias.`,

            faqTitle: "Perguntas frequentes",
            faqContent: `**Quais formatos XML são suportados?**
Suportamos qualquer arquivo XML bem formado. Otimização especial para XMLs fiscais.

**Vocês suportam transformações XSLT?**
Atualmente, aplicamos formatação padrão.

**Posso converter XMLs de NFe brasileira?**
Sim! Suportamos XMLs de NFe, NFCe e outros formatos fiscais brasileiros.

**Há limite de tamanho?**
Sem limite rígido, mas arquivos muito grandes podem ser lentos.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileCode className="w-6 h-6 text-canada-red" />}
            content={{
                seoTitle: `${title} | Free XML to PDF Converter Online | pdfcanada.ca`,
                seoDesc: t.subtitle,
                title: title,
                subtitle: t.subtitle,
                breadcrumbHome: lang === 'pt' ? 'Início' : (lang === 'fr' ? 'Accueil' : 'Home'),
                breadcrumbGuides: lang === 'pt' ? 'Guias' : 'Guides',
                breadcrumbTool: title,
                intro: t.intro,
                sections: [
                    { id: 'how-to', title: t.step1Title, content: t.step1Content },
                    { id: 'features', title: t.step2Title, content: t.step2Content },
                    { id: 'privacy', title: t.step3Title, content: t.step3Content },
                    { id: 'use-cases', title: t.step4Title, content: t.step4Content },
                    { id: 'troubleshooting', title: t.step5Title, content: t.step5Content },
                    { id: 'faq', title: t.faqTitle, content: t.faqContent }
                ]
            }}
        />
    );
};
