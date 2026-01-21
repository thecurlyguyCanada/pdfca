'use client';

import React from 'react';
import { Layers, Combine, HardDrive, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
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
        seo_title: 'Merge Large PDF Files Guide | Combine Huge PDFs Without Crashes',
        seo_desc: 'Learn how to merge massive PDF files (500MB+) without crashing your browser. Stream-based processing for hundreds of files and gigabytes of data.',
        intro: `Merging small PDFs is easy, but what happens when you have **hundreds of files** or **gigabytes of data**? Standard browser-based tools crash because they run out of memory.

This guide explains how to successfully merge massive PDF documents—whether you're combining financial archives, legal discovery documents, or multi-chapter book manuscripts.

### Who Needs This Guide?

*   **Law Firms**: Merge case files with thousands of pages for e-discovery.
*   **Accountants**: Combine years of financial statements and tax returns.
*   **Publishers**: Merge book chapters, illustrations, and appendices.
*   **Medical Records**: Combine patient histories and imaging reports.
*   **Construction**: Merge architectural plans, permits, and inspection reports.
*   **Government**: Combine FOIA request documents for public release.`,
        sections: [
            {
                id: 'why-crashes',
                title: 'Why Do Tools Crash on Large Files?',
                content: `Most online PDF tools try to load **entire files into browser memory (RAM)**. Here's why this causes problems:

**The Math of Memory:**
| Files | Size Each | Total RAM Needed |
|-------|-----------|------------------|
| 10 | 50 MB | 500 MB |
| 10 | 200 MB | 2 GB |
| 10 | 500 MB | 5 GB |
| 50 | 100 MB | 5 GB |

Most browser tabs are limited to **2-4 GB of RAM**. Even if your computer has 16 GB of RAM, individual tabs can't use it all.

**Common Error Messages:**
*   "Out of memory" or "Aw, Snap!" (Chrome)
*   "This page is using too much memory"
*   Browser becomes unresponsive
*   Upload times out before completion

**Cloud Upload Problems:**
Even "cloud-based" tools require you to **upload gigabytes of data** over your internet connection. A 5 GB upload on a typical connection can take hours—if it doesn't time out first.`
            },
            {
                id: 'solution',
                title: 'The Solution: Stream-Based Merging',
                content: `For large files, you need a tool that processes **streams** instead of loading entire files into memory:

**How Stream Processing Works:**
1.  Read page 1 of File A → Write to output → Clear from memory
2.  Read page 2 of File A → Write to output → Clear from memory
3.  Continue until all pages processed
4.  Never hold more than one page in memory at a time

**Our Approach:**
*   **Local Processing**: Files never leave your device, eliminating upload time
*   **Efficient Memory Use**: Stream-based architecture handles large files
*   **No Upload Required**: Process a 5 GB file without internet bandwidth issues
*   **Progressive Loading**: Files load as they're processed, not all at once

**Desktop Software (For Extreme Cases):**
For truly massive jobs (20,000+ pages or 50 GB+), desktop software remains the best option:
*   **Adobe Acrobat Pro**: Industry standard, excellent large file support
*   **PDFsam**: Open-source, handles massive merges
*   **PDF-XChange Editor**: Efficient memory handling
*   **QPDF**: Command-line tool, extremely efficient for automation`
            },
            {
                id: 'how-to',
                title: 'How to Merge Large PDFs',
                content: `**Step 1: Prepare Your Files**
*   Organize files in the order you want them merged
*   Check total file count and combined size
*   Close unnecessary browser tabs to free memory

**Step 2: Choose the Right Tool**
| Combined Size | Recommended Approach |
|--------------|---------------------|
| Under 500 MB | Standard browser merge |
| 500 MB - 2 GB | Our optimized merge tool |
| 2 GB - 10 GB | Our tool or desktop software |
| Over 10 GB | Desktop software (PDFsam, Acrobat) |

**Step 3: Merge in Batches (If Needed)**
For very large jobs:
1.  Merge files in groups of 10-20
2.  Then merge the resulting PDFs together
3.  This reduces peak memory usage

**Step 4: Verify the Result**
*   Check page count matches expected total
*   Spot-check pages from different source files
*   Verify bookmarks and links (if present)`
            },
            {
                id: 'optimization',
                title: 'Optimizing Large PDF Merges',
                content: `**Before Merging:**
*   **Compress First**: Reduce individual file sizes before merging
*   **Remove Unused Pages**: Delete blank or unnecessary pages
*   **Optimize Images**: Resample high-resolution images to reasonable DPI

**Reduce Memory Usage:**
*   Close other browser tabs
*   Close memory-intensive applications (Photoshop, video editors)
*   Use incognito/private mode (cleaner memory state)

**Large Merge Strategies:**
*   **Sequential Batching**: Merge 10 files → Result + 10 more → Continue
*   **Hierarchical**: Merge pairs → Merge pairs of results → One final file
*   **By Size**: Start with largest files first, add smaller ones

**File Organization Tips:**
*   Use consistent naming (001_, 002_, 003_)
*   Keep source files even after merging (in case of errors)
*   Document the merge order for future reference`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `Large files often contain sensitive information. Here's how we protect your data:

**100% Local Processing**
Your files are processed entirely in your browser. Nothing is uploaded to any server—ever.

**Zero Data Retention**
When you close the tab, all file data is cleared from memory. We never store your documents.

**No Upload Required**
Unlike cloud services, we don't need your files uploaded. A 5 GB merge happens on your computer.

**Ideal for Sensitive Documents:**
*   Legal discovery files
*   Medical records
*   Financial statements
*   Confidential business documents
*   Government records`
            },
            {
                id: 'troubleshooting',
                title: 'Troubleshooting Large Merges',
                content: `**Problem: Browser crashes during merge**
*Solution*: Merge in smaller batches (10-20 files at a time), then combine the results.

**Problem: Merge takes extremely long**
*Solution*: Large files take time. For 1 GB+, expect several minutes. Don't interact with the tab while processing.

**Problem: Output file is corrupted**
*Solution*: One of your source files may be damaged. Try removing files one by one to identify the culprit.

**Problem: Some pages are missing**
*Solution*: Check that all source files fully loaded before merging. Very large files may need extra loading time.

**Problem: Output file is larger than expected**
*Solution*: Merged PDFs often include duplicate resources. Use PDF compression after merging to reduce size.

**Problem: Bookmarks or links are broken**
*Solution*: Internal links may break when combining files. Consider using our PDF editor to rebuild navigation.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**What's the maximum file size you can handle?**
We've tested successfully with individual files up to 500 MB and combined totals over 2 GB. Results depend on your device's available RAM.

**How long does merging large files take?**
Rough estimates: 100 MB = 30 seconds, 500 MB = 2-3 minutes, 1 GB = 5+ minutes. Times vary based on your CPU and file complexity.

**Why is my merged file larger than the combined originals?**
PDFs have shared resources (fonts, images). When separate, each file has its own copy. Merging can deduplicate—or sometimes duplicate—these resources.

**Can I merge password-protected PDFs?**
You'll need to remove password protection first, or enter the password for each file.

**What file order will the merged PDF have?**
Files are merged in the order you select or arrange them. Most tools allow drag-and-drop reordering.

**Will my bookmarks be preserved?**
Bookmarks from individual files are usually preserved, but may need restructuring in the final document.

**Can I merge files from different sources (scans, Word exports, etc.)?**
Yes! As long as they're all valid PDF files, they can be merged regardless of origin.

**What if one of my files is corrupted?**
A corrupted file can cause the entire merge to fail. Try opening each file individually to identify the problem file.

**Is there a page limit?**
No hard limit. We've tested with documents exceeding 5,000 pages.

**Can I split a large PDF after merging?**
Yes! Use our PDF splitter tool to extract pages or divide by page count.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'Merge Large PDFs'
        }
    },
    fr: {
        seo_title: 'Guide Fusionner Gros Fichiers PDF | Combiner des PDF Massifs Sans Plantage',
        seo_desc: 'Apprenez à fusionner des fichiers PDF massifs (500 Mo+) sans planter votre navigateur. Traitement basé sur les flux.',
        intro: `Fusionner de petits PDF est facile, mais que se passe-t-il quand vous avez **des centaines de fichiers** ou **des gigaoctets de données** ? Les outils standards plantent par manque de mémoire.

Ce guide explique comment fusionner avec succès des documents PDF massifs.

### Qui a besoin de ce guide ?

*   **Cabinets d'avocats** : Fusionnez des dossiers avec des milliers de pages.
*   **Comptables** : Combinez des années de relevés financiers.
*   **Éditeurs** : Fusionnez chapitres de livres et annexes.
*   **Dossiers médicaux** : Combinez historiques patients et rapports.
*   **Construction** : Fusionnez plans architecturaux et permis.`,
        sections: [
            {
                id: 'why-crashes',
                title: 'Pourquoi les Outils Plantent-ils ?',
                content: `La plupart des outils PDF essaient de charger **tout le fichier en mémoire (RAM)**. 

**Le calcul de la mémoire :**
| Fichiers | Taille chacun | RAM Totale Nécessaire |
|----------|---------------|----------------------|
| 10 | 50 Mo | 500 Mo |
| 10 | 500 Mo | 5 Go |

La plupart des onglets de navigateur sont limités à **2-4 Go de RAM**.

**Messages d'erreur courants :**
*   "Mémoire insuffisante" ou "Aïe !" (Chrome)
*   Le navigateur ne répond plus`
            },
            {
                id: 'solution',
                title: 'La Solution : Fusion par Flux',
                content: `Pour les gros fichiers, vous avez besoin d'un outil qui traite des **flux** :

**Comment fonctionne le traitement par flux :**
1.  Lit la page 1 → Écrit dans la sortie → Efface de la mémoire
2.  Lit la page 2 → Continue
3.  Ne garde jamais plus d'une page en mémoire

**Notre approche :**
*   **Traitement local** : Les fichiers ne quittent jamais votre appareil
*   **Utilisation efficace de la mémoire** : Architecture basée sur les flux
*   **Pas de téléversement** : Traitez un fichier de 5 Go sans problème de bande passante`
            },
            {
                id: 'how-to',
                title: 'Comment Fusionner de Gros PDF',
                content: `**Étape 1 : Préparez vos fichiers**
*   Organisez les fichiers dans l'ordre souhaité
*   Fermez les onglets inutiles pour libérer de la mémoire

**Étape 2 : Choisissez le bon outil**
| Taille combinée | Approche recommandée |
|----------------|---------------------|
| Moins de 500 Mo | Fusion standard |
| 500 Mo - 2 Go | Notre outil optimisé |
| Plus de 10 Go | Logiciel de bureau |

**Étape 3 : Fusionnez par lots (si nécessaire)**`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Traitement 100% Local**
Vos fichiers sont traités entièrement dans votre navigateur. Rien n'est téléversé.

**Zéro rétention de données**
Quand vous fermez l'onglet, toutes les données sont effacées.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Quelle est la taille maximale de fichier ?**
Nous avons testé avec succès des fichiers jusqu'à 500 Mo et des totaux combinés de plus de 2 Go.

**Combien de temps prend la fusion de gros fichiers ?**
Estimations : 100 Mo = 30 secondes, 500 Mo = 2-3 minutes, 1 Go = 5+ minutes.

**Puis-je fusionner des fichiers protégés par mot de passe ?**
Vous devrez d'abord supprimer la protection.

**Y a-t-il une limite de pages ?**
Pas de limite stricte. Testé avec plus de 5 000 pages.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'Fusionner Gros PDF'
        }
    },
    pt: {
        seo_title: 'Guia Mesclar Arquivos PDF Grandes | Combinar PDFs Enormes Sem Travar',
        seo_desc: 'Aprenda a mesclar arquivos PDF massivos (500 MB+) sem travar seu navegador. Processamento baseado em fluxo.',
        intro: `Juntar pequenos PDFs é fácil, mas o que acontece quando você tem **centenas de arquivos** ou **gigabytes de dados**? Ferramentas padrão travam por falta de memória.

Este guia explica como mesclar com sucesso documentos PDF massivos.

### Quem precisa deste guia?

*   **Escritórios de advocacia**: Mescle processos com milhares de páginas.
*   **Contadores**: Combine anos de demonstrativos financeiros.
*   **Editoras**: Mescle capítulos de livros e anexos.
*   **Registros médicos**: Combine históricos de pacientes e relatórios.
*   **Construção**: Mescle plantas arquitetônicas e alvarás.`,
        sections: [
            {
                id: 'why-crashes',
                title: 'Por Que as Ferramentas Travam?',
                content: `A maioria das ferramentas PDF tenta carregar **todo o arquivo na memória (RAM)**.

**A matemática da memória:**
| Arquivos | Tamanho cada | RAM Total Necessária |
|----------|--------------|---------------------|
| 10 | 50 MB | 500 MB |
| 10 | 500 MB | 5 GB |

A maioria das abas do navegador é limitada a **2-4 GB de RAM**.

**Mensagens de erro comuns:**
*   "Sem memória" ou "Ops!" (Chrome)
*   O navegador para de responder`
            },
            {
                id: 'solution',
                title: 'A Solução: Fusão por Fluxo',
                content: `Para arquivos grandes, você precisa de uma ferramenta que processe **fluxos**:

**Como funciona o processamento por fluxo:**
1.  Lê página 1 → Escreve na saída → Limpa da memória
2.  Lê página 2 → Continua
3.  Nunca mantém mais de uma página na memória

**Nossa abordagem:**
*   **Processamento local**: Os arquivos nunca saem do seu dispositivo
*   **Uso eficiente de memória**: Arquitetura baseada em fluxo
*   **Sem upload**: Processe um arquivo de 5 GB sem problemas de banda`
            },
            {
                id: 'how-to',
                title: 'Como Mesclar PDFs Grandes',
                content: `**Passo 1: Prepare seus arquivos**
*   Organize os arquivos na ordem desejada
*   Feche abas desnecessárias para liberar memória

**Passo 2: Escolha a ferramenta certa**
| Tamanho combinado | Abordagem recomendada |
|------------------|----------------------|
| Menos de 500 MB | Fusão padrão |
| 500 MB - 2 GB | Nossa ferramenta otimizada |
| Mais de 10 GB | Software desktop |

**Passo 3: Mescle em lotes (se necessário)**`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**Processamento 100% Local**
Seus arquivos são processados inteiramente no navegador. Nada é enviado.

**Zero retenção de dados**
Quando você fecha a aba, todos os dados são limpos.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Qual o tamanho máximo de arquivo?**
Testamos com sucesso arquivos de até 500 MB e totais combinados de mais de 2 GB.

**Quanto tempo leva para mesclar arquivos grandes?**
Estimativas: 100 MB = 30 segundos, 500 MB = 2-3 minutos, 1 GB = 5+ minutos.

**Posso mesclar arquivos protegidos por senha?**
Você precisará remover a proteção primeiro.

**Há limite de páginas?**
Sem limite rígido. Testado com mais de 5.000 páginas.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'Mesclar PDFs Grandes'
        }
    }
});

export const MergeLargePdfsGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/merge-large-pdfs`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/merge-large-pdfs' : `/${lang}/guides/merge-large-pdfs` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Merge Large PDFs' : lang === 'fr' ? 'Fusionner Gros PDF' : 'Mesclar PDFs Grandes'}
                subtitle={lang === 'en' ? 'Combine massive documents securely and efficiently.' : lang === 'fr' ? 'Combinez des documents massifs de manière sécurisée et efficace.' : 'Combine documentos massivos com segurança e eficiência.'}
                icon={<Combine size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/merge-large-pdfs' : `/${lang}/guides/merge-large-pdfs` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="merge-pdf" lang={lang} />
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

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/merge-large-pdfs`} category="organize" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
