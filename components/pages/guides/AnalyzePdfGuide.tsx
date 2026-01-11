import React from 'react';
import { Microscope } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { GuideTemplate, GuideContent } from './GuideTemplate';

const contentMap: Record<string, GuideContent> = {
    en: {
        seoTitle: 'Analyze PDF Structure Guide',
        seoDesc: 'Inspect PDF internals, metadata, and fonts.',
        title: 'Analyze PDF Structure',
        subtitle: 'Deep dive into PDF internals and metadata.',
        breadcrumbHome: 'Home',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'Analyze PDF',
        intro: `
A PDF is complex file format containing a tree of objects, dictionaries, streams, and cross-reference tables. **Analyzing** a PDF's internal structure is essential for debugging, forensics, or understanding why a file is corrupted.
        `,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecting Metadata',
                content: `
Every PDF contains metadata: Title, Author, Creator, CreationDate, and ModDate.
*   **Privacy Warning:** Metadata often reveals the software used (e.g., "Microsoft Word 2016") or the full path of the original file on the author's computer. Analyzing this can reveal provenance.
                `
            },
            {
                id: 'structure',
                title: 'Internal Structure',
                content: `
*   **Fonts:** Check which fonts are embedded vs. referenced.
*   **Images:** Inspect image compression methods (JPEG, Flate) and resolution.
*   **Security:** Verify encryption levels (AES-128, AES-256) and permission flags.
                `
            }
        ]
    },
    fr: {
        seoTitle: 'Guide Analyser Structure PDF',
        seoDesc: 'Inspectez les internes PDF, métadonnées et polices.',
        title: 'Analyser Structure PDF',
        subtitle: 'Plongée profonde dans les internes et métadonnées PDF.',
        breadcrumbHome: 'Accueil',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'Analyser PDF',
        intro: `
Un PDF est un format de fichier complexe contenant un arbre d'objets, des dictionnaires, des flux et des tables de références croisées. **Analyser** la structure interne d'un PDF est essentiel pour le débogage, la criminalistique ou comprendre pourquoi un fichier est corrompu.
        `,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecter les Métadonnées',
                content: `
Chaque PDF contient des métadonnées : Titre, Auteur, Créateur, Date de Création et Date de Mod.
*   **Avertissement Confidentialité :** Les métadonnées révèlent souvent le logiciel utilisé (ex: "Microsoft Word 2016") ou le chemin complet du fichier original sur l'ordinateur de l'auteur. Analyser cela peut révéler la provenance.
                `
            },
            {
                id: 'structure',
                title: 'Structure Interne',
                content: `
*   **Polices :** Vérifiez quelles polices sont intégrées ou référencées.
*   **Images :** Inspectez les méthodes de compression d'image (JPEG, Flate) et la résolution.
*   **Sécurité :** Vérifiez les niveaux de chiffrement (AES-128, AES-256) et les indicateurs de permission.
                `
            }
        ]
    },
    pt: {
        seoTitle: 'Guia Analisar Estrutura PDF',
        seoDesc: 'Inspecione internos PDF, metadados e fontes.',
        title: 'Analisar Estrutura PDF',
        subtitle: 'Mergulho profundo nos internos e metadados do PDF.',
        breadcrumbHome: 'Início',
        breadcrumbGuides: 'Guias',
        breadcrumbTool: 'Analisar PDF',
        intro: `
Um PDF é um formato de arquivo complexo contendo uma árvore de objetos, dicionários, fluxos e tabelas de referência cruzada. **Analisar** a estrutura interna de um PDF é essencial para depuração, perícia ou para entender por que um arquivo está corrompido.
        `,
        sections: [
            {
                id: 'metadata',
                title: 'Inspecionar Metadados',
                content: `
Todo PDF contém metadados: Título, Autor, Criador, Data de Criação e Data de Modificação.
*   **Aviso de Privacidade:** Metadados frequentemente revelam o software usado (ex: "Microsoft Word 2016") ou o caminho completo do arquivo original no computador do autor. Analisar isso pode revelar a proveniência.
                `
            },
            {
                id: 'structure',
                title: 'Estrutura Interna',
                content: `
*   **Fontes:** Verifique quais fontes estão incorporadas vs. referenciadas.
*   **Imagens:** Inspecione métodos de compressão de imagem (JPEG, Flate) e resolução.
*   **Segurança:** Verifique níveis de criptografia (AES-128, AES-256) e sinalizadores de permissão.
                `
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
