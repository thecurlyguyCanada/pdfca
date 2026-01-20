import React from 'react';
import { Microscope } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { GuideTemplate, GuideContent } from './GuideTemplate';

const contentMap: Record<string, GuideContent> = {
    en: {
        seoTitle: 'Analyze PDF Structure Guide | Free PDF Inspector Tool',
        seoDesc: 'Deep dive into PDF internals, metadata, fonts, images, and security. Inspect any PDF file structure for free.',
        title: 'Analyze PDF Structure',
        subtitle: 'Deep dive into PDF internals, metadata, and security settings.',
        breadcrumbHome: 'Home',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'Analyze PDF',
        intro: `Need to understand what's inside a PDF file? Our free **Analyze PDF Structure** tool reveals everything hidden beneath the surface—metadata, fonts, images, security settings, and the complete internal structure.

A PDF is a complex file format containing trees of objects, dictionaries, streams, and cross-reference tables. **Analyzing** a PDF's internal structure is essential for debugging layout issues, forensic investigation, understanding why a file is corrupted, or simply learning what makes a PDF tick.

### Who Needs This Tool?

*   **Developers & IT Professionals**: Debug PDF generation issues and understand file structure.
*   **Legal & Compliance Teams**: Verify document authenticity and check metadata.
*   **Security Analysts**: Inspect PDFs for embedded scripts or suspicious content.
*   **Print Professionals**: Check font embedding and image resolution.
*   **Archivists**: Verify PDF/A compliance and preservation metadata.`,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecting Metadata',
                content: `Every PDF contains metadata that reveals its history and origin:

**Standard Metadata Fields:**
*   **Title**: The document's title (often blank)
*   **Author**: Who created the document
*   **Creator**: The software used to create the original (e.g., "Microsoft Word 2019")
*   **Producer**: The PDF library used (e.g., "Adobe PDF Library 15.0")
*   **CreationDate**: When the PDF was created
*   **ModDate**: When it was last modified
*   **Keywords**: SEO keywords embedded in the document

**Privacy Warning:** Metadata often reveals sensitive information:
*   The full path of the original file on the author's computer
*   Software versions and operating system details
*   Editing history and revision counts

Our tool helps you inspect this metadata before sharing documents externally.`
            },
            {
                id: 'structure',
                title: 'Internal Structure Analysis',
                content: `**Font Analysis:**
*   See which fonts are embedded vs. referenced
*   Check for font subsetting (partial embedding)
*   Identify missing fonts that may cause display issues

**Image Inspection:**
*   View image compression methods (JPEG, Flate, JBIG2)
*   Check image resolution and color space
*   Identify oversized images bloating file size

**Security Settings:**
*   Encryption level (AES-128, AES-256, RC4)
*   Permission flags (print, copy, edit restrictions)
*   Digital signature information
*   JavaScript and form field presence`
            },
            {
                id: 'use-cases',
                title: 'Common Use Cases',
                content: `**Troubleshooting PDF Issues**
When a PDF doesn't display correctly, analyzing its structure helps identify:
*   Missing or corrupted fonts
*   Malformed object references
*   Incompatible encryption settings

**Pre-Print Quality Check**
Before sending documents to print:
*   Verify all fonts are embedded
*   Check image resolution (300 DPI for print)
*   Ensure color spaces are print-compatible

**Legal Discovery & Forensics**
For legal and compliance purposes:
*   Extract hidden metadata for evidence
*   Verify document creation timestamps
*   Check for modifications or tampering

**File Size Optimization**
Identify what's making your PDF large:
*   Find oversized embedded images
*   Spot duplicate resources
*   Detect unnecessary font embedding`
            },
            {
                id: 'how-to',
                title: 'How to Analyze a PDF',
                content: `1.  **Upload Your PDF**: Click "Select PDF" or drag and drop your file.

2.  **View Overview**: See basic document info, page count, and file size.

3.  **Explore Metadata**: Review all metadata fields and their values.

4.  **Check Fonts**: See a complete list of fonts and their embedding status.

5.  **Inspect Images**: View all embedded images with their properties.

6.  **Review Security**: Check encryption and permission settings.

**Pro Tip**: All analysis happens locally in your browser. Your PDF is never uploaded to any server, making this safe for confidential documents.`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `**Local Processing Only**
Your PDF files are analyzed entirely in your browser. We never upload documents to our servers.

**Zero Data Retention**
When you close the browser tab, all data is cleared. We don't log or store any document information.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Safe for Sensitive Documents:**
*   Legal contracts
*   Financial statements
*   Medical records
*   Confidential business documents`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Can this tool edit PDF metadata?**
This tool is for analysis only. To edit metadata, use our dedicated PDF metadata editor.

**What does "font subsetting" mean?**
Subsetting embeds only the characters used in the document, not the entire font. This saves file size but may cause issues if you edit the PDF later.

**How can I tell if a PDF has been modified?**
Check the CreationDate vs. ModDate, review the Producer field, and look for incremental updates in the structure.

**What encryption levels are most secure?**
AES-256 is currently the strongest. Avoid PDFs using RC4 encryption, which is considered weak.

**Why does my PDF show a different author than me?**
The Author field is set by the software that created the original document. It may reflect the software license holder.

**Is this tool really free?**
Yes, 100% free with no watermarks or limits.

**Can I analyze password-protected PDFs?**
You'll need to enter the password first for full analysis.

**What's the maximum file size?**
No strict limit, but very large files (100+ MB) may be slow to process in the browser.`
            }
        ]
    },
    fr: {
        seoTitle: 'Guide Analyser Structure PDF | Outil Inspecteur PDF Gratuit',
        seoDesc: 'Plongez dans les internes PDF, métadonnées, polices, images et sécurité. Inspectez gratuitement la structure de n\'importe quel fichier PDF.',
        title: 'Analyser Structure PDF',
        subtitle: 'Plongée profonde dans les internes, métadonnées et paramètres de sécurité PDF.',
        breadcrumbHome: 'Accueil',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'Analyser PDF',
        intro: `Besoin de comprendre ce qu'il y a dans un fichier PDF ? Notre outil gratuit **Analyser Structure PDF** révèle tout ce qui est caché sous la surface—métadonnées, polices, images, paramètres de sécurité et structure interne complète.

Un PDF est un format de fichier complexe contenant des arbres d'objets, des dictionnaires, des flux et des tables de références croisées. **Analyser** la structure interne d'un PDF est essentiel pour déboguer, pour les enquêtes forensiques, ou pour comprendre pourquoi un fichier est corrompu.

### Qui a besoin de cet outil ?

*   **Développeurs et professionnels IT** : Déboguez les problèmes de génération PDF.
*   **Équipes juridiques et conformité** : Vérifiez l'authenticité des documents.
*   **Analystes sécurité** : Inspectez les PDFs pour des scripts suspects.
*   **Professionnels de l'impression** : Vérifiez l'intégration des polices.
*   **Archivistes** : Vérifiez la conformité PDF/A.`,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecter les Métadonnées',
                content: `Chaque PDF contient des métadonnées qui révèlent son historique et son origine :

**Champs de métadonnées standard :**
*   **Titre** : Le titre du document
*   **Auteur** : Qui a créé le document
*   **Créateur** : Le logiciel utilisé pour créer l'original
*   **Producteur** : La bibliothèque PDF utilisée
*   **Date de création** : Quand le PDF a été créé
*   **Date de modification** : Quand il a été modifié

**Avertissement confidentialité :** Les métadonnées révèlent souvent des informations sensibles comme le chemin complet du fichier original.`
            },
            {
                id: 'structure',
                title: 'Analyse de la Structure Interne',
                content: `**Analyse des polices :**
*   Voyez quelles polices sont intégrées vs référencées
*   Vérifiez le sous-ensemble de polices
*   Identifiez les polices manquantes

**Inspection des images :**
*   Visualisez les méthodes de compression (JPEG, Flate, JBIG2)
*   Vérifiez la résolution et l'espace colorimétrique
*   Identifiez les images surdimensionnées

**Paramètres de sécurité :**
*   Niveau de chiffrement (AES-128, AES-256, RC4)
*   Indicateurs de permission
*   Informations de signature numérique`
            },
            {
                id: 'how-to',
                title: 'Comment analyser un PDF',
                content: `1.  **Téléchargez votre PDF** : Cliquez sur « Sélectionner PDF » ou glissez-déposez.

2.  **Visualisez l'aperçu** : Voyez les infos de base, nombre de pages, taille.

3.  **Explorez les métadonnées** : Examinez tous les champs et valeurs.

4.  **Vérifiez les polices** : Liste complète des polices et leur statut.

5.  **Inspectez les images** : Toutes les images avec leurs propriétés.

6.  **Examinez la sécurité** : Paramètres de chiffrement et permissions.`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Traitement local uniquement**
Vos fichiers PDF sont analysés entièrement dans votre navigateur. Nous ne téléchargeons jamais de documents sur nos serveurs.

**Zéro rétention de données**
Quand vous fermez l'onglet, toutes les données sont effacées.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Cet outil peut-il modifier les métadonnées ?**
Cet outil est pour l'analyse uniquement. Pour modifier, utilisez notre éditeur de métadonnées.

**Qu'est-ce que le sous-ensemble de polices ?**
Le sous-ensemble n'intègre que les caractères utilisés, économisant de l'espace.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`
            }
        ]
    },
    pt: {
        seoTitle: 'Guia Analisar Estrutura PDF | Ferramenta Inspetor PDF Grátis',
        seoDesc: 'Mergulhe nos internos do PDF, metadados, fontes, imagens e segurança. Inspecione qualquer estrutura de arquivo PDF gratuitamente.',
        title: 'Analisar Estrutura PDF',
        subtitle: 'Mergulho profundo nos internos, metadados e configurações de segurança do PDF.',
        breadcrumbHome: 'Início',
        breadcrumbGuides: 'Guias',
        breadcrumbTool: 'Analisar PDF',
        intro: `Precisa entender o que há dentro de um arquivo PDF? Nossa ferramenta gratuita **Analisar Estrutura PDF** revela tudo que está escondido sob a superfície—metadados, fontes, imagens, configurações de segurança e estrutura interna completa.

Um PDF é um formato de arquivo complexo contendo árvores de objetos, dicionários, fluxos e tabelas de referência cruzada. **Analisar** a estrutura interna de um PDF é essencial para depurar problemas de layout, investigação forense, ou entender por que um arquivo está corrompido.

### Quem precisa desta ferramenta?

*   **Desenvolvedores e profissionais de TI**: Depure problemas de geração de PDF.
*   **Equipes jurídicas e de conformidade**: Verifique autenticidade de documentos.
*   **Analistas de segurança**: Inspecione PDFs para scripts suspeitos.
*   **Profissionais de impressão**: Verifique incorporação de fontes.
*   **Arquivistas**: Verifique conformidade PDF/A.`,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecionar Metadados',
                content: `Todo PDF contém metadados que revelam seu histórico e origem:

**Campos de metadados padrão:**
*   **Título**: O título do documento
*   **Autor**: Quem criou o documento
*   **Criador**: O software usado para criar o original
*   **Produtor**: A biblioteca PDF usada
*   **Data de criação**: Quando o PDF foi criado
*   **Data de modificação**: Quando foi modificado

**Aviso de privacidade:** Metadados frequentemente revelam informações sensíveis como o caminho completo do arquivo original.`
            },
            {
                id: 'structure',
                title: 'Análise da Estrutura Interna',
                content: `**Análise de fontes:**
*   Veja quais fontes estão incorporadas vs. referenciadas
*   Verifique o subconjunto de fontes
*   Identifique fontes ausentes

**Inspeção de imagens:**
*   Visualize métodos de compressão (JPEG, Flate, JBIG2)
*   Verifique resolução e espaço de cores
*   Identifique imagens superdimensionadas

**Configurações de segurança:**
*   Nível de criptografia (AES-128, AES-256, RC4)
*   Sinalizadores de permissão
*   Informações de assinatura digital`
            },
            {
                id: 'how-to',
                title: 'Como analisar um PDF',
                content: `1.  **Envie seu PDF**: Clique em "Selecionar PDF" ou arraste e solte.

2.  **Visualize a visão geral**: Veja informações básicas, contagem de páginas, tamanho.

3.  **Explore metadados**: Revise todos os campos e valores.

4.  **Verifique fontes**: Lista completa de fontes e seu status.

5.  **Inspecione imagens**: Todas as imagens com suas propriedades.

6.  **Revise segurança**: Configurações de criptografia e permissões.`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**Processamento apenas local**
Seus arquivos PDF são analisados inteiramente no navegador. Nunca enviamos documentos para servidores.

**Zero retenção de dados**
Quando você fecha a aba, todos os dados são limpos.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Esta ferramenta pode editar metadados?**
Esta ferramenta é apenas para análise. Para editar, use nosso editor de metadados.

**O que é subconjunto de fontes?**
Subconjunto incorpora apenas os caracteres usados, economizando espaço.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`
            }
        ]
    }
};

export const AnalyzePdfGuide: React.FC<{ lang: Language }> = ({ lang }) => {
    const content = contentMap[lang] || contentMap.en;

    return (
        <GuideTemplate
            lang={lang}
            slug="analyze-pdf"
            icon={<Microscope size={32} />}
            content={content}
        />
    );
};
