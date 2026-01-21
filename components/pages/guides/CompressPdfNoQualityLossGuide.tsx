'use client';

import React from 'react';
import { Minimize2, Image, FileCheck, Zap, Shield } from 'lucide-react';
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
        seo_title: 'Compress PDF Without Losing Quality | Lossless PDF Compression Guide',
        seo_desc: 'Learn how to reduce PDF file size without sacrificing quality. Lossless compression techniques for print-ready documents, archival PDFs, and professional use.',
        intro: `Compressing a PDF usually means sacrificing quality—images get blurry, text becomes jagged, and print quality suffers. But it doesn't have to be that way.

**Lossless compression** allows you to reduce file size while keeping the document looking **exactly the same**. No pixelation, no quality degradation, no compromise.

This guide explains how to shrink PDF files intelligently without ruining them—perfect for print-ready documents, archival storage, and professional presentations.

### Who Needs Lossless Compression?

*   **Graphic Designers**: Reduce portfolio file sizes without degrading artwork quality.
*   **Photographers**: Compress photo books and portfolios while preserving image fidelity.
*   **Architects**: Shrink technical drawings without losing line precision.
*   **Publishers**: Optimize manuscripts and layouts for faster distribution.
*   **Legal Professionals**: Compress case files while maintaining document integrity.
*   **Archivists**: Reduce storage needs without compromising historical document quality.`,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Lossy vs. Lossless Compression Explained',
                content: `Understanding the difference is crucial for choosing the right compression method:

**Lossy Compression (Standard/Aggressive):**
*   **How it works**: Permanently deletes data to save space
*   **Image impact**: Reduces resolution (e.g., 300 DPI → 72 DPI), increases JPEG compression
*   **Text impact**: Can rasterize vector text, making it blurry when zoomed
*   **File size**: 50-90% reduction possible
*   **Best for**: Email attachments, web viewing, temporary documents
*   **Avoid for**: Printing, archival, legal documents, professional portfolios

**Lossless Compression (High Quality):**
*   **How it works**: Reorganizes data more efficiently without deleting information
*   **Image impact**: Zero quality loss—pixels remain identical
*   **Text impact**: Vector text stays crisp at any zoom level
*   **File size**: 10-40% reduction typical
*   **Best for**: Print-ready files, archival storage, professional work
*   **Techniques**: Metadata removal, font subsetting, structure optimization

**Comparison Table:**
| Aspect | Lossy | Lossless |
|--------|-------|----------|
| Quality Loss | ✅ Yes | ❌ No |
| File Size Reduction | 50-90% | 10-40% |
| Print Quality | ⚠️ Degraded | ✅ Perfect |
| Reversible | ❌ No | ✅ Yes* |
| Speed | Fast | Moderate |

*Lossless compression is reversible in the sense that quality is never lost, though the original file structure may be optimized.`
            },
            {
                id: 'how-it-works',
                title: 'How Lossless Compression Works',
                content: `Lossless compression reduces file size by removing waste, not content:

**1. Metadata Removal**
PDFs contain hidden data that bloats file size:
*   Edit history and revision tracking
*   Thumbnail previews for each page
*   Author information and timestamps
*   Software version details
*   Color profiles and ICC data (if unused)

**Savings**: 5-15% reduction

**2. Font Subsetting**
Full fonts embed every character (A-Z, a-z, 0-9, symbols). Font subsetting includes only characters actually used:
*   Document uses "Hello World" → Embed only H, e, l, o, W, r, d
*   Reduces font data by 80-95%

**Savings**: 10-30% reduction for text-heavy documents

**3. Object Deduplication**
PDFs often contain duplicate resources:
*   Same logo appears on every page → Store once, reference 50 times
*   Repeated images → Deduplicate identical image data
*   Shared color spaces → Consolidate definitions

**Savings**: 5-20% reduction

**4. Stream Compression**
Optimize how data is encoded:
*   Use Flate compression (ZIP-like) for text streams
*   Optimize JPEG encoding parameters
*   Compress object streams

**Savings**: 5-15% reduction

**5. Structure Optimization**
Clean up the PDF's internal architecture:
*   Remove unused objects (orphaned resources)
*   Linearize for fast web viewing
*   Optimize cross-reference tables

**Savings**: 2-10% reduction`
            },
            {
                id: 'how-to',
                title: 'How to Compress PDFs Losslessly',
                content: `**Step 1: Upload Your PDF**
Select the PDF you want to compress. Our tool processes everything locally—your file never leaves your device.

**Step 2: Choose Lossless/High Quality Mode**
Select "Lossless" or "High Quality" compression (not "Aggressive" or "Maximum").

**Step 3: Review Compression Options**
*   ✅ Remove metadata
*   ✅ Subset fonts
*   ✅ Optimize structure
*   ❌ Reduce image quality (keep this OFF for lossless)
*   ❌ Downsample images (keep this OFF)

**Step 4: Compress**
Click "Compress PDF" and wait for processing. Large files may take 1-2 minutes.

**Step 5: Verify Quality**
*   Compare file sizes (before/after)
*   Zoom in to 200-400% and check text sharpness
*   Review images for any quality degradation
*   If printing, check a test print

**Step 6: Download**
Save your compressed PDF with zero quality loss.

**Pro Tips:**
*   For maximum lossless reduction, run compression twice
*   Remove unused pages before compressing
*   Convert color images to grayscale if color isn't needed (still lossless)
*   Flatten layers and annotations if no longer needed`
            },
            {
                id: 'use-cases',
                title: 'Common Use Cases',
                content: `**Print-Ready Portfolios**
Graphic designers and photographers need to share portfolios via email without sacrificing print quality. Lossless compression reduces file size while maintaining 300 DPI image resolution.

**Architectural Drawings**
Technical drawings require precision. Lossy compression can blur fine lines and dimensions. Lossless keeps every line crisp.

**Legal Documents**
Court filings and contracts must be identical to originals. Lossless compression reduces file size without altering document integrity.

**Archival Storage**
Museums and libraries need to preserve documents long-term. Lossless compression saves storage space without degrading historical materials.

**Publishing & Manuscripts**
Authors and publishers need to distribute book manuscripts efficiently while maintaining formatting and image quality for print.

**Medical Imaging**
Diagnostic images (X-rays, MRIs in PDF reports) must retain full quality. Lossless compression reduces storage needs without compromising medical accuracy.`
            },
            {
                id: 'when-to-use',
                title: 'When to Use Lossless vs. Lossy',
                content: `**Use Lossless When:**
*   ✅ Document will be printed
*   ✅ Archiving for long-term storage
*   ✅ Legal or compliance requirements
*   ✅ Professional portfolios
*   ✅ Technical drawings or diagrams
*   ✅ Medical or scientific documents
*   ✅ High-quality photography
*   ✅ File size is acceptable (under 25 MB)

**Use Lossy When:**
*   ✅ Email attachments (size limits)
*   ✅ Web viewing only (not printing)
*   ✅ Temporary documents
*   ✅ File must be under 10 MB
*   ✅ Quality degradation is acceptable
*   ✅ Fast loading is priority

**Hybrid Approach:**
For very large files, use lossless compression first, then apply minimal lossy compression only if needed.`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `**100% Local Processing**
Your PDF is compressed entirely in your browser using WebAssembly. The file never leaves your device—ever.

**Zero Data Retention**
We don't store your files, metadata, or any information about your documents. When you close the tab, everything is cleared from memory.

**No Upload Required**
Unlike cloud compression services, we don't need your file uploaded to a server. A 50 MB PDF compresses on your computer, not ours.

**Metadata Removal**
Lossless compression removes hidden metadata that can expose:
*   Author names and email addresses
*   Edit timestamps and revision history
*   Software versions used
*   File paths from the original computer

**Ideal for Sensitive Documents:**
*   Client files (legal, accounting)
*   Medical records
*   Confidential business documents
*   Personal financial statements
*   Proprietary designs or patents`
            },
            {
                id: 'troubleshooting',
                title: 'Troubleshooting',
                content: `**Problem: Compression only saved 5%**
*Solution*: The PDF may already be optimized. Try removing unused pages or converting to grayscale if color isn't needed.

**Problem: File size increased after compression**
*Solution*: Rare, but can happen if the PDF was highly optimized already. Use the original file.

**Problem: Fonts look different after compression**
*Solution*: Font subsetting can cause issues if fonts aren't embedded properly. Ensure "Embed all fonts" is enabled before compressing.

**Problem: Compression is very slow**
*Solution*: Large files (50+ MB) take time. Close other browser tabs to free memory. For very large files, use desktop software.

**Problem: Can't tell if quality was preserved**
*Solution*: Zoom to 400% and compare text sharpness. Check image details. If identical, quality is preserved.

**Problem: Need more compression**
*Solution*: Lossless has limits. If you need smaller files, consider lossy compression or splitting the PDF into multiple files.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Is lossless compression really lossless?**
Yes. Lossless compression reorganizes data without deleting any visual information. The document looks identical before and after.

**How much can I compress without losing quality?**
Typically 10-40% reduction. Results depend on the PDF's content—text-heavy documents compress more than image-heavy ones.

**Will lossless compression affect print quality?**
No. Print quality remains identical because image resolution and text vectors are unchanged.

**Can I compress a PDF multiple times?**
Yes, but diminishing returns. The first compression removes most waste. Subsequent compressions yield minimal additional savings.

**What's the difference between this and "Optimize PDF"?**
They're similar. "Optimize" usually means lossless compression plus structure improvements for faster loading.

**Does compression remove password protection?**
No. Password protection is independent of compression. You can compress encrypted PDFs.

**Will compression break form fields or annotations?**
No, if you use lossless compression. Lossy compression may flatten interactive elements.

**Can I compress scanned PDFs losslessly?**
Scanned PDFs are images, so lossless compression has limited effect. Consider OCR to convert to text first.

**What file size is too large for browser compression?**
Most browsers handle up to 100-200 MB. For larger files, use desktop software like Adobe Acrobat or PDFsam.

**Is this tool really free?**
Yes, 100% free with no watermarks, file limits, or hidden costs.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'Lossless Compression'
        }
    },
    fr: {
        seo_title: 'Compresser PDF Sans Perdre de Qualité | Guide Compression Sans Perte',
        seo_desc: 'Apprenez à réduire la taille des fichiers PDF sans sacrifier la qualité. Techniques de compression sans perte pour documents professionnels.',
        intro: `Compresser un PDF signifie généralement sacrifier la qualité—les images deviennent floues, le texte devient crénelé. Mais ce n'est pas une fatalité.

La **compression sans perte** permet de réduire la taille du fichier tout en gardant le document **exactement identique**. Aucune pixellisation, aucune dégradation.

Ce guide explique comment réduire intelligemment les fichiers PDF sans les ruiner.

### Qui a besoin de compression sans perte ?

*   **Graphistes** : Réduisez les portfolios sans dégrader les œuvres.
*   **Photographes** : Compressez les livres photo en préservant la fidélité.
*   **Architectes** : Réduisez les dessins techniques sans perdre la précision.
*   **Éditeurs** : Optimisez les manuscrits pour une distribution plus rapide.
*   **Professionnels juridiques** : Compressez les dossiers en maintenant l'intégrité.`,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Compression Avec Perte vs Sans Perte',
                content: `**Avec Perte (Standard) :**
*   Supprime définitivement des données
*   Réduit la résolution (300 DPI → 72 DPI)
*   Réduction : 50-90%
*   Bon pour : Email, web
*   Éviter pour : Impression, archives

**Sans Perte (Haute Qualité) :**
*   Réorganise les données sans supprimer d'information
*   Zéro perte de qualité
*   Réduction : 10-40%
*   Bon pour : Impression, archives, travail professionnel`
            },
            {
                id: 'how-it-works',
                title: 'Comment Fonctionne la Compression Sans Perte',
                content: `**1. Suppression des métadonnées**
*   Historique d'édition
*   Miniatures de pages
*   Informations d'auteur

**2. Sous-ensemble de polices**
*   N'inclut que les caractères utilisés
*   Réduit les données de police de 80-95%

**3. Déduplication d'objets**
*   Logos répétés → Stockés une fois
*   Images identiques → Dédupliquées

**4. Optimisation de structure**
*   Supprime les objets inutilisés
*   Linéarisation pour affichage web rapide`
            },
            {
                id: 'how-to',
                title: 'Comment Compresser Sans Perte',
                content: `**Étape 1** : Téléchargez votre PDF
**Étape 2** : Choisissez le mode "Sans Perte"
**Étape 3** : Options de compression
*   ✅ Supprimer les métadonnées
*   ✅ Sous-ensemble de polices
*   ❌ Réduire la qualité d'image (DÉSACTIVÉ)

**Étape 4** : Compressez
**Étape 5** : Vérifiez la qualité
**Étape 6** : Téléchargez`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Traitement 100% Local**
Votre PDF est compressé dans votre navigateur. Le fichier ne quitte jamais votre appareil.

**Zéro rétention de données**
Nous ne stockons pas vos fichiers ou métadonnées.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**La compression sans perte est-elle vraiment sans perte ?**
Oui. Aucune information visuelle n'est supprimée.

**Combien puis-je compresser sans perdre de qualité ?**
Typiquement 10-40% de réduction.

**Cela affectera-t-il la qualité d'impression ?**
Non. La qualité d'impression reste identique.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'Compression Sans Perte'
        }
    },
    pt: {
        seo_title: 'Comprimir PDF Sem Perder Qualidade | Guia Compressão Sem Perdas',
        seo_desc: 'Aprenda a reduzir o tamanho de arquivos PDF sem sacrificar a qualidade. Técnicas de compressão sem perdas para documentos profissionais.',
        intro: `Comprimir um PDF geralmente significa sacrificar a qualidade—as imagens ficam borradas, o texto fica serrilhado. Mas não precisa ser assim.

A **compressão sem perdas** permite reduzir o tamanho do arquivo mantendo o documento **exatamente igual**. Sem pixelização, sem degradação.

Este guia explica como reduzir arquivos PDF de forma inteligente sem arruiná-los.

### Quem precisa de compressão sem perdas?

*   **Designers gráficos**: Reduza portfólios sem degradar obras.
*   **Fotógrafos**: Comprima livros de fotos preservando fidelidade.
*   **Arquitetos**: Reduza desenhos técnicos sem perder precisão.
*   **Editoras**: Otimize manuscritos para distribuição mais rápida.
*   **Profissionais jurídicos**: Comprima processos mantendo integridade.`,
        sections: [
            {
                id: 'lossy-vs-lossless',
                title: 'Compressão Com Perda vs. Sem Perdas',
                content: `**Com Perda (Padrão):**
*   Exclui dados permanentemente
*   Reduz resolução (300 DPI → 72 DPI)
*   Redução: 50-90%
*   Bom para: Email, web
*   Evitar para: Impressão, arquivos

**Sem Perdas (Alta Qualidade):**
*   Reorganiza dados sem excluir informação
*   Zero perda de qualidade
*   Redução: 10-40%
*   Bom para: Impressão, arquivos, trabalho profissional`
            },
            {
                id: 'how-it-works',
                title: 'Como Funciona a Compressão Sem Perdas',
                content: `**1. Remoção de metadados**
*   Histórico de edição
*   Miniaturas de páginas
*   Informações do autor

**2. Subconjunto de fontes**
*   Inclui apenas caracteres usados
*   Reduz dados de fonte em 80-95%

**3. Deduplicação de objetos**
*   Logos repetidos → Armazenados uma vez
*   Imagens idênticas → Deduplicadas

**4. Otimização de estrutura**
*   Remove objetos não utilizados
*   Linearização para visualização web rápida`
            },
            {
                id: 'how-to',
                title: 'Como Comprimir Sem Perdas',
                content: `**Passo 1**: Envie seu PDF
**Passo 2**: Escolha o modo "Sem Perdas"
**Passo 3**: Opções de compressão
*   ✅ Remover metadados
*   ✅ Subconjunto de fontes
*   ❌ Reduzir qualidade de imagem (DESLIGADO)

**Passo 4**: Comprima
**Passo 5**: Verifique a qualidade
**Passo 6**: Baixe`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**Processamento 100% Local**
Seu PDF é comprimido no navegador. O arquivo nunca sai do seu dispositivo.

**Zero retenção de dados**
Não armazenamos seus arquivos ou metadados.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**A compressão sem perdas é realmente sem perdas?**
Sim. Nenhuma informação visual é excluída.

**Quanto posso comprimir sem perder qualidade?**
Tipicamente 10-40% de redução.

**Isso afetará a qualidade de impressão?**
Não. A qualidade de impressão permanece idêntica.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'Compressão Sem Perdas'
        }
    }
});

export const CompressPdfNoQualityLossGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/compress-pdf-no-quality-loss`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/compress-pdf-no-quality-loss' : `/${lang}/guides/compress-pdf-no-quality-loss` }
                ]}
            />
            <PageLayout
                title={lang === 'fr' ? 'Compresser PDF Sans Perte' : (lang === 'pt' ? 'Comprimir PDF Sem Perdas' : 'Compress PDF No Quality Loss')}
                subtitle={lang === 'fr' ? 'Réduisez les fichiers tout en les gardant nets pour l\'impression.' : (lang === 'pt' ? 'Reduza arquivos mantendo-os nítidos para impressão.' : 'Shrink files while keeping them sharp for printing.')}
                icon={<Minimize2 size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/compress-pdf-no-quality-loss' : `/${lang}/guides/compress-pdf-no-quality-loss` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="compress-pdf" lang={lang} />
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
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/compress-pdf-no-quality-loss`} category="edit" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
