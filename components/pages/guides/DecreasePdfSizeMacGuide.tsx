'use client';

import Link from 'next/link';
import React from 'react';
import { FileDown, CheckCircle, Shield, Zap, ArrowRight, FileText, Monitor, MousePointer2, Apple, HardDrive, Image, Settings, Laptop } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `How to Decrease PDF Size on Mac | Compress PDF Free ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Learn how to reduce PDF file size on Mac using Preview, Quartz filters, and online tools. Complete ${CURRENT_YEAR} guide for compressing PDFs without losing quality.`
        },
        h1: `How to Decrease PDF Size on Mac: The Complete ${CURRENT_YEAR} Guide`,
        subtitle: "Compress your PDF files on macOS using built-in tools, custom filters, and free online options—no software installation required.",

        intro: "Your Mac is asking you to send a 50MB PDF via email, but the attachment limit is 25MB. Sound familiar? Large PDF files are a common headache, especially when you need to share documents via email, upload them to websites, or free up storage space. The good news is that **macOS has powerful built-in tools** to compress PDFs, and there are also free online options that work directly in your browser. This comprehensive guide covers every method to **decrease PDF size on Mac**, from the simplest Preview trick to advanced custom Quartz filters.",

        sections: [
            {
                id: "preview-method",
                title: "Method 1: Using Preview (Built-in, Fastest)",
                content: `The easiest way to compress a PDF on Mac is using **Preview**, the free PDF viewer that comes with every Mac. No downloads, no installations—just a few clicks.

### Step-by-Step Instructions

**Step 1: Open Your PDF in Preview**
- Double-click your PDF file (Preview is the default PDF viewer)
- Or right-click → Open With → Preview
- Or drag the PDF onto the Preview icon in your Dock

**Step 2: Export with Reduced Size**
- Go to **File → Export** (not "Save" or "Export as PDF")
- In the Quartz Filter dropdown, select **"Reduce File Size"**
- Choose your destination and click **Save**

**Step 3: Check the Result**
- Compare the new file size with the original
- Open the compressed PDF to verify quality is acceptable

### What to Expect
- **Typical compression**: 50-80% size reduction
- **Processing time**: Instant for most PDFs
- **Quality trade-off**: Noticeable reduction in image quality

### Limitations of the Default "Reduce File Size" Filter
The built-in filter is aggressive—it prioritizes small file size over image quality. This is fine for:
- ✅ Text-heavy documents with few images
- ✅ Quick shares that don't need to look perfect
- ✅ Drafts and internal documents

But it may be too aggressive for:
- ❌ Photo-heavy documents
- ❌ Professional presentations
- ❌ Print-quality documents

**Don't worry**—we'll cover how to create custom filters with better quality later in this guide.`
            },
            {
                id: "custom-filters",
                title: "Method 2: Custom Quartz Filters (Best Quality Control)",
                content: `macOS's built-in "Reduce File Size" filter often compresses images too aggressively, resulting in blurry photos. The solution? **Create your own Quartz filter** with custom quality settings.

### Creating a Custom Compression Filter

**Step 1: Open ColorSync Utility**
- Press **Cmd + Space** to open Spotlight
- Type **"ColorSync Utility"** and press Enter
- Click the **"Filters"** tab at the top

**Step 2: Duplicate the Existing Filter**
- Find **"Reduce File Size"** in the left sidebar
- Click the dropdown arrow next to it
- Click the **gear icon** → **"Duplicate Filter"**
- Name your new filter (e.g., "Medium Compression" or "High Quality Reduce")

**Step 3: Customize Compression Settings**
Click the arrow next to your new filter to expand settings, then adjust:

**Image Compression Settings:**
- **Mode**: Set to "JPEG" for photos or "Automatic" for mixed content
- **Quality**: Slider from 0-100
  - **80-90**: Minimal quality loss, good file reduction
  - **60-80**: Noticeable reduction, still acceptable for most uses
  - **40-60**: Significant compression, visible artifacts
  - **Below 40**: Maximum compression, poor quality

**Image Scaling (Resolution):**
- **Max Pixels**: Limits maximum dimension of images
  - 1024 pixels: Good for email/web viewing
  - 1536 pixels: Balanced for screens and small prints
  - 2048 pixels: Higher quality, larger files
- Uncheck "Constrain to" to keep original resolution

**Recommended Settings for Common Uses:**

| Use Case | Quality | Max Pixels | Expected Reduction |
|----------|---------|------------|-------------------|
| Email attachments | 70 | 1024 | 70-85% smaller |
| Web uploads | 75 | 1536 | 60-75% smaller |
| Print (standard) | 85 | 2048 | 40-60% smaller |
| Archive (high quality) | 90 | Unconstrained | 20-40% smaller |

**Step 4: Save and Use Your Filter**
- Your filter automatically saves
- Close ColorSync Utility
- Open PDF in Preview → File → Export → Select your new filter

### Finding Your Filters Again
Your custom filters appear in Preview's Quartz Filter dropdown alongside the built-in options. They're also stored at:
\`~/Library/Filters/\``
            },
            {
                id: "automator-method",
                title: "Method 3: Automator for Batch Compression",
                content: `Need to compress dozens of PDFs at once? **Automator** lets you create a workflow that compresses multiple files automatically.

### Creating a PDF Compression Workflow

**Step 1: Open Automator**
- Press **Cmd + Space**, type **"Automator"**
- Select **"Quick Action"** (or "Folder Action" for automatic processing)

**Step 2: Configure the Workflow**
- Set "Workflow receives current" to **"PDF files"**
- Set "in" to **"Finder"**

**Step 3: Add the Compression Action**
- In the left sidebar, search for **"Apply Quartz Filter to PDF Documents"**
- Drag it to the workflow area on the right
- Select your preferred filter (built-in or custom)

**Step 4: Add a Rename Action (Optional but Recommended)**
- Search for **"Rename Finder Items"**
- Drag it above the Quartz Filter action
- Set it to add a suffix like "-compressed" so you don't overwrite originals

**Step 5: Save the Quick Action**
- Press **Cmd + S**
- Name it something like "Compress PDFs"

### Using Your Quick Action
1. Select one or multiple PDF files in Finder
2. Right-click → Quick Actions → "Compress PDFs"
3. The compressed versions appear alongside the originals

### Pro Tip: Folder Action for Automatic Compression
Create a "Folder Action" instead of "Quick Action" to automatically compress any PDF dropped into a specific folder—perfect for standardized workflows.`
            },
            {
                id: "terminal-method",
                title: "Method 4: Terminal Commands for Power Users",
                content: `If you're comfortable with the command line, you can compress PDFs using Ghostscript or macOS's built-in tools.

### Using Ghostscript (Most Powerful)

**Step 1: Install Ghostscript via Homebrew**
\`\`\`bash
brew install ghostscript
\`\`\`

**Step 2: Compress with Custom Settings**
\`\`\`bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
\`\`\`

**Compression Presets:**
- \`/screen\` — 72 DPI, smallest file, lowest quality (for screen viewing only)
- \`/ebook\` — 150 DPI, good balance for most uses
- \`/printer\` — 300 DPI, high quality for printing
- \`/prepress\` — 300 DPI, color-preserving for professional printing

**Example: High-Quality Compression**
\`\`\`bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile=compressed.pdf original.pdf
\`\`\`

### Using sips (Built-in macOS Tool)
For image-heavy PDFs, you can extract images, compress them, and reassemble:
\`\`\`bash
sips -s format jpeg -s formatOptions 70 image.png --out image.jpg
\`\`\`

### Batch Processing with a Script
\`\`\`bash
for file in *.pdf; do
  gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="compressed_$file" "$file"
done
\`\`\``
            },
            {
                id: "online-tools",
                title: "Method 5: Online PDF Compression (No Installation)",
                content: `Sometimes you just want to compress a PDF quickly without configuring anything. Online tools offer instant compression with no software to install.

### pdfcanada.ca Compress PDF
Our compression tool offers several advantages over alternatives:

**Privacy-First Approach**
- **100% local processing**: Your PDF never leaves your Mac
- Files are processed entirely in your browser using WebAssembly
- No upload to remote servers = no privacy risk

**How to Use:**
1. Open Safari or Chrome on your Mac
2. Navigate to pdfcanada.ca/compress-pdf
3. Drag-and-drop your PDF or click to select
4. Choose compression level
5. Download your compressed file

**Compression Options:**
- **Light**: Minimal quality loss, moderate size reduction
- **Medium**: Balanced compression for most uses
- **Maximum**: Smallest file, some quality loss

### Why Local Processing Matters on Mac
Macs are known for privacy and security. When you use a traditional online compressor:
- Your document is uploaded to unknown servers
- Data may be stored or analyzed
- Sensitive information could be exposed

With local browser-based compression:
- Everything happens in your browser's memory
- Close the tab and data is gone
- Works offline after initial page load

### Other Online Options
If you prefer other tools, consider:
- **Smallpdf**: Popular, but uploads to servers
- **iLovePDF**: Good compression, server-based
- **Adobe Acrobat Online**: Requires Adobe account

⚠️ **Privacy Warning**: These tools upload your files to external servers. Avoid for sensitive documents.`
            },
            {
                id: "understanding-compression",
                title: "Understanding PDF Compression: Why Files Get Big",
                content: `To compress PDFs effectively, it helps to understand what makes them large in the first place.

### What Makes PDFs Large?

**1. High-Resolution Images**
- The #1 cause of bloated PDFs
- A single 12MP photo can add 5-10MB
- Multiple images compound the problem

**2. Embedded Fonts**
- PDFs embed fonts to ensure consistent display
- Each font family adds hundreds of KB
- Unnecessary font subsets waste space

**3. Metadata and Hidden Content**
- Editing history and deleted content
- Thumbnails and preview images
- Application-specific data

**4. Uncompressed Content**
- Some PDF creators don't compress streams
- Raw image data instead of JPEG/FLATE compression
- Redundant object definitions

### How Compression Works

**Image Resampling**
- Reduces image resolution (DPI)
- 300 DPI → 150 DPI = roughly 75% size reduction
- Trade-off: Less sharp when printed at large sizes

**JPEG Compression**
- Applies lossy compression to images
- Quality slider: higher = better quality, larger file
- Already-compressed JPEGs compress less

**Font Subsetting**
- Removes unused characters from embedded fonts
- "Hello" only needs H, e, l, o—not entire alphabet
- Can reduce font data by 90%

**Stream Compression**
- Applies FLATE (ZIP) compression to PDF streams
- Lossless—no quality reduction
- Typically 30-50% reduction in text-heavy PDFs

### Choosing the Right Compression Level

| Scenario | Recommended Approach |
|----------|---------------------|
| Email attachment | Medium compression, 150 DPI images |
| Website upload | Light-medium compression, 96-150 DPI |
| Print document | Light compression only, preserve 300 DPI |
| Archive storage | Maximum compression acceptable |
| Legal/official docs | Light or no compression, preserve original |`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting PDF Compression on Mac",
                content: `### Common Issues and Solutions

**Problem: "Reduce File Size" Makes Images Too Blurry**
- **Cause**: Default Quartz filter uses aggressive compression
- **Solution**: Create a custom Quartz filter with higher quality settings (see Method 2)

**Problem: File Isn't Getting Smaller**
- **Cause**: PDF may already be compressed, or contains mostly text
- **Solution**: Check if images are the problem—text-only PDFs are already small
- **Try**: Ghostscript with different presets

**Problem: Preview Crashes with Large PDFs**
- **Cause**: Insufficient RAM for processing
- **Solution**: Close other apps, restart Mac, or use Ghostscript instead

**Problem: Colors Look Different After Compression**
- **Cause**: Color space conversion during compression
- **Solution**: Use custom filter with "Preserve Original Intent" color setting

**Problem: PDF Won't Open After Compression**
- **Cause**: Corruption during save
- **Solution**: Keep the original file, try compressing again with different settings

**Problem: Text is No Longer Searchable**
- **Cause**: Some aggressive compression flattens PDFs
- **Solution**: Use lighter compression or ensure "Preserve Text" is enabled

### Best Practices for Mac PDF Compression

1. **Always keep the original** — Compress to a new file, not the original
2. **Test before sending** — Open compressed PDF to verify quality
3. **Match method to use case** — Don't over-compress print documents
4. **Consider recipient** — What device will they view on?
5. **Batch similar documents** — Use consistent settings for document sets`
            }
        ],

        faq: [
            {
                q: "How do I reduce PDF file size on Mac for free?",
                a: "Open your PDF in Preview (built-in on all Macs), go to File → Export, select 'Reduce File Size' from the Quartz Filter dropdown, and save. This is completely free and requires no additional software."
            },
            {
                q: "Why is Preview making my images blurry?",
                a: "The built-in 'Reduce File Size' filter uses aggressive compression. Create a custom Quartz filter using ColorSync Utility with higher quality settings (quality slider at 75-85) for better results."
            },
            {
                q: "Can I compress multiple PDFs at once on Mac?",
                a: "Yes! Use Automator to create a Quick Action that applies compression to multiple selected files. You can also use Ghostscript via Terminal for batch processing."
            },
            {
                q: "How much can I reduce my PDF file size?",
                a: "Typical compression reduces PDFs by 50-80%. Image-heavy PDFs see the biggest reductions. Text-only PDFs may only shrink 10-20% since text is already efficient."
            },
            {
                q: "Is there a way to compress PDFs without losing quality?",
                a: "Lossless compression (removing metadata, optimizing fonts) provides modest reduction without quality loss. For significant size reduction, some image quality trade-off is unavoidable, but you can minimize it with custom Quartz filters."
            },
            {
                q: "What's the best compression level for email attachments?",
                a: "For email, use medium compression with images at 150 DPI. This typically achieves 60-75% size reduction while maintaining readable quality. Most email providers limit attachments to 25MB."
            },
            {
                q: "Does compressing a PDF affect text searchability?",
                a: "Standard compression preserves text searchability. However, some extreme compression methods may flatten the PDF, removing text layers. Always test that Ctrl+F still works after compression."
            },
            {
                q: "How do I compress a PDF on Mac without using Preview?",
                a: "Use online tools like pdfcanada.ca (processes locally in browser), Ghostscript via Terminal, or third-party apps like PDF Expert. Each offers different levels of control and convenience."
            },
            {
                q: "Why won't my PDF get any smaller when I compress it?",
                a: "The PDF may already be compressed, or it's mostly text (which is very efficient). Check if images are the issue—if there are few images, there's less to compress. Try Ghostscript for better results."
            },
            {
                q: "Can I compress password-protected PDFs on Mac?",
                a: "You'll need to enter the password first or remove protection before compression. Some tools can compress protected PDFs if you have the password, but results vary."
            }
        ],

        ctaTitle: "Ready to Compress Your PDFs?",
        ctaButton: "Try Our Free PDF Compressor",
        ctaSubtext: "100% local processing—your files never leave your Mac.",
        quickAnswer: {
            question: "How do I decrease PDF size on Mac?",
            answer: "Open your PDF in Preview, go to File → Export, select 'Reduce File Size' from the Quartz Filter dropdown, and save. For better quality control, create a custom filter in ColorSync Utility or use an online tool like pdfcanada.ca.",
            tool: "PDF Compressor",
            steps: ["Open PDF in Preview", "File → Export", "Select 'Reduce File Size' filter", "Save"]
        }
    },
    fr: {
        seo: {
            title: `Comment Réduire la Taille d'un PDF sur Mac | Compresser PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à réduire la taille des fichiers PDF sur Mac avec Aperçu, filtres Quartz et outils en ligne. Guide complet ${CURRENT_YEAR} pour compresser sans perte de qualité.`
        },
        h1: "Comment Réduire la Taille d'un PDF sur Mac : Guide Complet",
        subtitle: "Compressez vos fichiers PDF sur macOS avec les outils intégrés, filtres personnalisés et options en ligne gratuites.",

        intro: "Votre Mac vous demande d'envoyer un PDF de 50 Mo par email, mais la limite est de 25 Mo. Ça vous dit quelque chose ? Les gros fichiers PDF sont un casse-tête courant. La bonne nouvelle est que **macOS dispose d'outils puissants intégrés** pour compresser les PDF. Ce guide couvre chaque méthode pour **réduire la taille des PDF sur Mac**.",

        sections: [
            {
                id: "preview-method",
                title: "Méthode 1 : Utiliser Aperçu (Intégré, Plus Rapide)",
                content: `La façon la plus simple de compresser un PDF sur Mac est d'utiliser **Aperçu**, le visualiseur PDF gratuit inclus avec chaque Mac.

**Étapes :**
1. Ouvrez votre PDF dans Aperçu (double-clic)
2. Allez dans **Fichier → Exporter**
3. Dans le menu Filtre Quartz, sélectionnez **"Réduire la taille du fichier"**
4. Choisissez la destination et cliquez sur **Enregistrer**

**Note :** Le filtre par défaut est agressif. Pour une meilleure qualité, créez un filtre personnalisé avec l'Utilitaire ColorSync.`
            },
            {
                id: "custom-filters",
                title: "Méthode 2 : Filtres Quartz Personnalisés",
                content: `Pour un meilleur contrôle de qualité, créez votre propre filtre :

1. Ouvrez **Utilitaire ColorSync** (Spotlight → ColorSync)
2. Allez dans l'onglet **Filtres**
3. Dupliquez le filtre "Réduire la taille du fichier"
4. Ajustez la qualité JPEG (75-85 recommandé)
5. Utilisez votre nouveau filtre dans Aperçu`
            },
            {
                id: "online-tools",
                title: "Méthode 3 : Outils en Ligne",
                content: `pdfcanada.ca offre une compression 100% locale dans votre navigateur :

1. Ouvrez Safari ou Chrome
2. Allez sur pdfcanada.ca/compress-pdf
3. Glissez-déposez votre PDF
4. Choisissez le niveau de compression
5. Téléchargez le fichier compressé

**Confidentialité :** Votre PDF ne quitte jamais votre Mac—tout est traité localement.`
            }
        ],

        faq: [
            {
                q: "Comment réduire la taille d'un PDF sur Mac gratuitement ?",
                a: "Ouvrez votre PDF dans Aperçu, allez dans Fichier → Exporter, sélectionnez 'Réduire la taille du fichier' et enregistrez. C'est gratuit et intégré à macOS."
            },
            {
                q: "Pourquoi mes images deviennent floues ?",
                a: "Le filtre par défaut utilise une compression agressive. Créez un filtre personnalisé avec l'Utilitaire ColorSync et augmentez le curseur de qualité à 75-85."
            },
            {
                q: "Puis-je compresser plusieurs PDF à la fois ?",
                a: "Oui ! Utilisez Automator pour créer une action rapide qui compresse plusieurs fichiers sélectionnés."
            }
        ],

        ctaTitle: "Prêt à Compresser Vos PDF ?",
        ctaButton: "Essayer le Compresseur Gratuit",
        ctaSubtext: "Traitement 100% local—vos fichiers ne quittent jamais votre Mac.",
        quickAnswer: {
            question: "Comment réduire la taille d'un PDF sur Mac ?",
            answer: "Ouvrez le PDF dans Aperçu, Fichier → Exporter, sélectionnez 'Réduire la taille du fichier' et enregistrez. Pour plus de contrôle, créez un filtre personnalisé dans l'Utilitaire ColorSync.",
            tool: "Compresseur PDF",
            steps: ["Ouvrir dans Aperçu", "Fichier → Exporter", "Sélectionner le filtre", "Enregistrer"]
        }
    },
    pt: {
        seo: {
            title: `Como Diminuir Tamanho de PDF no Mac | Comprimir PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda a reduzir o tamanho de arquivos PDF no Mac usando Pré-visualização, filtros Quartz e ferramentas online. Guia completo de ${CURRENT_YEAR}.`
        },
        h1: "Como Diminuir o Tamanho de um PDF no Mac: Guia Completo",
        subtitle: "Comprima seus arquivos PDF no macOS usando ferramentas integradas, filtros personalizados e opções online gratuitas.",

        intro: "Seu Mac pede para enviar um PDF de 50 MB por email, mas o limite é 25 MB. Parece familiar? Arquivos PDF grandes são uma dor de cabeça comum. A boa notícia é que **o macOS tem ferramentas poderosas integradas** para comprimir PDFs. Este guia cobre todos os métodos para **diminuir o tamanho de PDF no Mac**.",

        sections: [
            {
                id: "preview-method",
                title: "Método 1: Usando Pré-visualização (Integrado, Mais Rápido)",
                content: `A forma mais fácil de comprimir um PDF no Mac é usar o **Pré-visualização**, o visualizador de PDF gratuito que vem com todo Mac.

**Passos:**
1. Abra seu PDF no Pré-visualização (duplo clique)
2. Vá em **Arquivo → Exportar**
3. No menu Filtro Quartz, selecione **"Reduzir Tamanho do Arquivo"**
4. Escolha o destino e clique em **Salvar**

**Nota:** O filtro padrão é agressivo. Para melhor qualidade, crie um filtro personalizado no Utilitário ColorSync.`
            },
            {
                id: "custom-filters",
                title: "Método 2: Filtros Quartz Personalizados",
                content: `Para melhor controle de qualidade, crie seu próprio filtro:

1. Abra **Utilitário ColorSync** (Spotlight → ColorSync)
2. Vá para a aba **Filtros**
3. Duplique o filtro "Reduzir Tamanho do Arquivo"
4. Ajuste a qualidade JPEG (75-85 recomendado)
5. Use seu novo filtro no Pré-visualização`
            },
            {
                id: "online-tools",
                title: "Método 3: Ferramentas Online",
                content: `pdfcanada.ca oferece compressão 100% local no navegador:

1. Abra Safari ou Chrome
2. Vá para pdfcanada.ca/compress-pdf
3. Arraste e solte seu PDF
4. Escolha o nível de compressão
5. Baixe o arquivo comprimido

**Privacidade:** Seu PDF nunca sai do seu Mac—tudo é processado localmente.`
            }
        ],

        faq: [
            {
                q: "Como reduzir o tamanho de um PDF no Mac gratuitamente?",
                a: "Abra seu PDF no Pré-visualização, vá em Arquivo → Exportar, selecione 'Reduzir Tamanho do Arquivo' e salve. É gratuito e integrado ao macOS."
            },
            {
                q: "Por que minhas imagens ficam borradas?",
                a: "O filtro padrão usa compressão agressiva. Crie um filtro personalizado no Utilitário ColorSync e aumente o controle de qualidade para 75-85."
            },
            {
                q: "Posso comprimir vários PDFs de uma vez?",
                a: "Sim! Use o Automator para criar uma ação rápida que comprime múltiplos arquivos selecionados."
            }
        ],

        ctaTitle: "Pronto para Comprimir Seus PDFs?",
        ctaButton: "Experimente o Compressor Gratuito",
        ctaSubtext: "Processamento 100% local—seus arquivos nunca saem do seu Mac.",
        quickAnswer: {
            question: "Como diminuir o tamanho de um PDF no Mac?",
            answer: "Abra o PDF no Pré-visualização, Arquivo → Exportar, selecione 'Reduzir Tamanho do Arquivo' e salve. Para mais controle, crie um filtro personalizado no Utilitário ColorSync.",
            tool: "Compressor de PDF",
            steps: ["Abrir no Pré-visualização", "Arquivo → Exportar", "Selecionar filtro", "Salvar"]
        }
    }

});

export const DecreasePdfSizeMacGuide: React.FC<GuideProps> = ({ lang }) => {

    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Open PDF in Preview", "text": "Double-click your PDF file to open it in Preview, the built-in macOS PDF viewer." },
            { "@type": "HowToStep", "position": 2, "name": "Export with Compression", "text": "Go to File → Export and select 'Reduce File Size' from the Quartz Filter dropdown menu." },
            { "@type": "HowToStep", "position": 3, "name": "Save Compressed PDF", "text": "Choose a destination, optionally rename the file, and click Save to create your smaller PDF." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/decrease-pdf-size-mac"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Réduire PDF Mac' : (lang === 'pt' ? 'Diminuir PDF Mac' : 'Decrease PDF Size Mac'), path: lang === 'fr' ? '/fr/guides/decrease-pdf-size-mac' : (lang === 'pt' ? '/pt/guides/decrease-pdf-size-mac' : '/guides/decrease-pdf-size-mac') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileDown size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Réduire PDF Mac' : (lang === 'pt' ? 'Diminuir PDF Mac' : 'Decrease PDF Size Mac'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="compress-pdf" lang={lang} />
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 sm:mb-14 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? (
                                        <MarkdownContent content={section.content} />
                                    ) : (
                                        section.content
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Features Tiles */}
                    <div className="grid md:grid-cols-3 gap-8 my-20">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Apple className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Built Into macOS</h3>
                            <p className="text-gray-500">Preview and ColorSync come free with every Mac—no downloads needed.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Settings className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Custom Control</h3>
                            <p className="text-gray-500">Create Quartz filters with exact quality and size settings for your needs.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Shield className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">100% Private</h3>
                            <p className="text-gray-500">All methods process locally on your Mac—files never uploaded.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5 text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/compress-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/decrease-pdf-size-mac" category="convert" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/reduce-pdf-size`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Réduire Taille PDF' : (lang === 'pt' ? 'Guia Reduzir Tamanho PDF' : 'Reduce PDF Size Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/merge-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-image`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Image' : (lang === 'pt' ? 'Guia PDF para Imagem' : 'PDF to Image Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
