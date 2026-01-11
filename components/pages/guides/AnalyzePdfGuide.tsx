import React from 'react';
import { Microscope } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
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
});

export const AnalyzePdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seoTitle}
                description={t.seoDesc}
                canonicalPath="/guides/analyze-pdf"
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbHome, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbGuides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbTool, path: lang === 'en' ? '/guides/analyze-pdf' : `/${lang}/guides/analyze-pdf` }
                ]}
            />
            <PageLayout
                title={t.title}
                subtitle={t.subtitle}
                icon={<Microscope size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbHome, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbGuides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbTool, href: lang === 'en' ? '/guides/analyze-pdf' : `/${lang}/guides/analyze-pdf` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="analyze-pdf" lang={lang} />
                    <MarkdownContent content={t.intro} />

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

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
