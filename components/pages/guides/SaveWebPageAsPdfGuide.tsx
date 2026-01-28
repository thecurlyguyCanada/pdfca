'use client';

import Link from 'next/link';
import React from 'react';
import { Globe, CheckCircle, Shield, Zap, ArrowRight, FileText, Monitor, MousePointer2, Printer, Chrome, Download, Smartphone } from 'lucide-react';
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
            title: `How to Save a Web Page as PDF | Print to PDF Guide ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Learn how to save any website or internet page as a PDF on Chrome, Firefox, Safari, Edge, iPhone, and Android. Complete ${CURRENT_YEAR} guide with tips for perfect formatting.`
        },
        h1: `How to Save a Web Page as PDF: The Complete ${CURRENT_YEAR} Guide`,
        subtitle: "Convert any website to a PDF document in seconds using your browser's built-in print function—no extensions or software required.",

        intro: "Found an important article, receipt, or confirmation page online that you need to save? Screenshots work, but they're hard to read and search. The best solution is to **save the web page as a PDF**—a format that preserves the layout, is searchable, and can be easily shared or printed. The good news? Every modern browser has this feature built-in, and it works on both desktop and mobile. This guide covers every method to **convert any internet page to PDF**, from the simplest keyboard shortcut to advanced formatting tricks.",

        sections: [
            {
                id: "windows-chrome",
                title: "Method 1: Google Chrome (Windows & Mac)",
                content: `Chrome is the most popular browser, and saving web pages as PDFs couldn't be easier.

### Keyboard Shortcut Method (Fastest)
**Windows**: Press **Ctrl + P**
**Mac**: Press **Cmd + P**

This opens the print dialog immediately.

### Step-by-Step Instructions

**Step 1: Open the Print Dialog**
- Press **Ctrl + P** (Windows) or **Cmd + P** (Mac)
- Or click the three-dot menu → Print
- Or right-click anywhere on the page → Print

**Step 2: Change Destination to "Save as PDF"**
- In the print dialog, look for "Destination"
- Click the dropdown and select **"Save as PDF"**
- NOT "Microsoft Print to PDF" (that's different and lower quality)

**Step 3: Adjust Settings (Optional)**
- **Layout**: Portrait or Landscape
- **Pages**: All, or specify a page range
- **Margins**: Default, None, Minimum, or Custom
- **Scale**: 100% default, reduce if content is cut off
- Click **"More settings"** for additional options:
  - Background graphics (enable for colored backgrounds)
  - Headers and footers (page URL and date)

**Step 4: Save the PDF**
- Click **"Save"**
- Choose a location and filename
- Click **"Save"** again

### Pro Tips for Chrome
- **Remove ads first**: Use Reader Mode (if available) or an ad blocker
- **Full page capture**: Some pages load more content as you scroll—scroll to the bottom first
- **Login-protected pages**: You can print while logged in—the PDF captures what you see
- **Enable background graphics**: Essential for pages with colored backgrounds or images in CSS`
            },
            {
                id: "firefox",
                title: "Method 2: Mozilla Firefox",
                content: `Firefox has excellent print-to-PDF functionality with a clean interface.

### Keyboard Shortcut
**Windows**: **Ctrl + P**
**Mac**: **Cmd + P**

### Step-by-Step Instructions

**Step 1: Open Print Preview**
- Press **Ctrl + P** or **Cmd + P**
- Firefox opens its print preview interface

**Step 2: Select PDF Destination**
- Click the destination dropdown
- Select **"Save to PDF"** (built-in Firefox option)
- On Windows, you can also choose "Microsoft Print to PDF"

**Step 3: Configure Options**
- **Pages**: All or custom range
- **Orientation**: Portrait/Landscape
- **Scale**: Fit to width or custom percentage
- **Options**:
  - Print backgrounds (colors and images)
  - Print headers and footers

**Step 4: Save**
- Click **"Save"**
- Choose location and filename
- Done!

### Firefox Reader View Trick
For cleaner PDFs without ads and clutter:
1. Click the **Reader View** icon in the address bar (looks like a document)
2. Now press **Ctrl + P** to print
3. You'll get a clean, article-only PDF

This works great for news articles, blog posts, and recipes!`
            },
            {
                id: "safari-mac",
                title: "Method 3: Safari on Mac",
                content: `Safari offers multiple ways to save web pages as PDFs, including a unique "Export as PDF" option.

### Method A: Export as PDF (Best Quality)

**Step 1: Go to File Menu**
- Click **File** in the menu bar
- Select **"Export as PDF..."**

**Step 2: Save the File**
- Choose location and filename
- Click **Save**

This method preserves the page exactly as displayed—often better quality than print-to-PDF.

### Method B: Print to PDF (More Options)

**Step 1: Open Print Dialog**
- Press **Cmd + P**
- Or go to File → Print

**Step 2: Access PDF Options**
- Look at the bottom-left of the print dialog
- Click the **"PDF"** dropdown button
- Select **"Save as PDF"**

**Step 3: Additional PDF Options**
The PDF dropdown offers several useful options:
- **Save as PDF**: Standard save
- **Save as PDF-X**: Print-ready format
- **Open PDF in Preview**: Save and immediately view
- **Send PDF via Mail**: Create and attach to new email
- **Save to iCloud Drive**: Direct cloud save

### Safari Reader Mode
1. Click **View → Show Reader** (or the reader icon in address bar)
2. Export or print from clean, ad-free view
3. Perfect for articles and blog posts`
            },
            {
                id: "edge",
                title: "Method 4: Microsoft Edge",
                content: `Edge is now based on Chromium, so the process is similar to Chrome with a few Microsoft-specific additions.

### Keyboard Shortcut
**Ctrl + P** opens the print dialog

### Step-by-Step Instructions

**Step 1: Open Print Dialog**
- Press **Ctrl + P**
- Or click three-dot menu → Print
- Or right-click → Print

**Step 2: Select "Save as PDF"**
- Under "Printer", click the dropdown
- Select **"Save as PDF"** (Edge's built-in option)
- Alternative: "Microsoft Print to PDF" (creates lower-quality file)

**Step 3: Configure Settings**
- **Layout**: Portrait/Landscape
- **Pages**: All or range
- **Scale**: Adjust if content is cut off
- Click **"More settings"** for:
  - Paper size
  - Headers and footers
  - Background graphics
  - Margins

**Step 4: Save**
- Click **Save**
- Choose location and name
- Click **Save**

### Edge-Specific Features
- **Web Capture**: Right-click → "Web capture" for scrolling screenshot (saves as image, not PDF)
- **Immersive Reader**: Click the book icon for clean reading view before printing
- **Collections**: Save pages to collections, then print entire collection`
            },
            {
                id: "iphone-ipad",
                title: "Method 5: iPhone and iPad (iOS/iPadOS)",
                content: `Saving web pages as PDFs on iPhone is easy once you know where to look—it's hidden in the Share menu.

### Method A: Share Sheet Method (Easiest)

**Step 1: Open the Page in Safari**
- Navigate to the web page you want to save

**Step 2: Open Share Sheet**
- Tap the **Share button** (square with up arrow) at the bottom of Safari

**Step 3: Select "Options" (Important!)**
- At the TOP of the share sheet, you'll see **"Options"** with the page format
- Tap it and select **"PDF"** instead of "Automatic"
- Tap **Done**

**Step 4: Save the PDF**
- Now tap **"Save to Files"**
- Choose a folder location
- Tap **Save**

### Method B: Full Page Screenshot (iOS 13+)

**Step 1: Take a Screenshot**
- Press **Side button + Volume Up** simultaneously
- The screenshot preview appears in the corner

**Step 2: Select Full Page**
- Tap the screenshot preview
- At the top, tap **"Full Page"** tab
- This captures the ENTIRE scrolling web page

**Step 3: Save as PDF**
- Tap **"Done"** in the top-left
- Select **"Save PDF to Files"**
- Choose location and save

This method is great for capturing very long pages!

### Method C: Using the Print Trick

**Step 1: Open Share Sheet**
- Tap the Share button in Safari

**Step 2: Select Print**
- Scroll and tap **"Print"**

**Step 3: Zoom on Preview**
- On the print preview, use two fingers to **pinch-zoom OUT** on the page preview
- This opens the page as a PDF!

**Step 4: Share or Save**
- Tap the Share button on the PDF preview
- Save to Files or share directly`
            },
            {
                id: "android",
                title: "Method 6: Android Phones and Tablets",
                content: `Android devices can save web pages as PDFs through Chrome or any Chromium-based browser.

### Chrome on Android

**Step 1: Open the Page**
- Navigate to the web page in Chrome

**Step 2: Open Menu**
- Tap the **three-dot menu** in the top-right corner

**Step 3: Select Share**
- Tap **"Share..."**
- Or tap **"Print..."** directly

**Step 4: Print to PDF**
- If you tapped Share: Select **"Print"**
- In the print dialog, tap the printer dropdown
- Select **"Save as PDF"**

**Step 5: Configure and Save**
- Adjust pages, orientation if needed
- Tap the **PDF icon** (download button)
- Choose save location
- Tap **Save**

### Samsung Internet Browser
1. Tap three-line menu
2. Tap **"Print"**
3. Select **"Save as PDF"** as destination
4. Tap **Save**

### Firefox on Android
1. Tap three-dot menu
2. Tap **"Page"** → **"Save as PDF"**
3. PDF is saved directly to Downloads

### Tips for Android
- **Long scrolling pages**: Scroll to load all content before printing
- **Desktop mode**: Request desktop site for full content capture
- **Reader mode**: Enable in Chrome flags for cleaner output`
            },
            {
                id: "formatting-tips",
                title: "Pro Tips for Perfect Web-to-PDF Formatting",
                content: `### Before You Print

**1. Scroll Through the Entire Page First**
Many websites load content dynamically as you scroll. To capture everything:
- Scroll slowly from top to bottom
- Wait for images and videos to load
- Check that all sections have expanded

**2. Use Reader Mode When Available**
Reader mode strips away:
- Advertisements and pop-ups
- Navigation menus and sidebars
- Social media widgets
- Comment sections

What remains is clean, readable content perfect for PDFs.

**3. Consider Printing Specific Elements**
Need just one section? Some options:
- Select text, right-click → Print Selection (Firefox)
- Copy content to a document, then print that
- Use browser DevTools (delete unwanted elements before printing)

### Print Settings to Adjust

**Background Graphics**
- **Enable** for: Colored backgrounds, decorative images, styled tables
- **Disable** for: Faster printing, less ink, smaller files

**Headers and Footers**
- **Enable** for: Documentation (shows URL and date)
- **Disable** for: Cleaner appearance, presentations

**Margins**
- **Default**: Safe spacing, may cut off some content
- **Minimum**: More content per page, may look cramped
- **None**: Maximum content, risk of edge cropping

**Scale**
- **100%**: Default, may cut off wide content
- **Shrink to fit**: Automatically resize to fit page width
- **Custom (70-90%)**: Balance between readability and fit

### Common Problems and Solutions

| Problem | Solution |
|---------|----------|
| Content cut off on right side | Reduce scale to 80-90%, or use landscape mode |
| Blank pages in output | Adjust margins to "None" or "Minimum" |
| Missing images | Enable "Background graphics" in settings |
| Ads appearing in PDF | Use Reader Mode before printing |
| PDF too large | Disable images or reduce quality |
| Text too small | Increase browser zoom before printing |`
            },
            {
                id: "alternatives",
                title: "Alternative Methods and Tools",
                content: `### Browser Extensions

**1. Save as PDF (Chrome/Firefox)**
- One-click conversion
- Often better formatting than built-in
- May include watermarks in free versions

**2. Print Friendly & PDF**
- Removes ads and clutter automatically
- Lets you delete elements before saving
- Free browser extension

**3. SingleFile**
- Saves page as single HTML file
- Preserves interactive elements
- Can convert to PDF later

### Online Tools

**Web Page to PDF Websites**
Enter a URL and get a PDF:
- Works when you can't print (like work computers)
- May not capture login-protected content
- Privacy consideration: Your URL is sent to their servers

### Command Line Tools (Advanced)

**wkhtmltopdf**
\`\`\`bash
wkhtmltopdf https://example.com output.pdf
\`\`\`

**Puppeteer (Node.js)**
\`\`\`javascript
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
await page.pdf({path: 'output.pdf', format: 'A4'});
\`\`\`

These programmatic tools offer:
- Batch processing of multiple URLs
- Custom viewport and paper sizes
- Automation for regular captures`
            }
        ],

        faq: [
            {
                q: "What's the easiest way to save a web page as PDF?",
                a: "Press Ctrl+P (Windows) or Cmd+P (Mac) in any browser, select 'Save as PDF' as the destination, and click Save. This works in Chrome, Firefox, Safari, and Edge without any extensions."
            },
            {
                q: "How do I save a web page as PDF on iPhone?",
                a: "In Safari, tap the Share button, tap 'Options' at the top, select 'PDF', tap Done, then choose 'Save to Files'. Alternatively, take a screenshot and tap 'Full Page' to capture the entire scrolling page as a PDF."
            },
            {
                q: "How do I save a website as PDF on Android?",
                a: "In Chrome, tap the three-dot menu, select 'Share' or 'Print', choose 'Save as PDF' as the printer, and tap the download button. The PDF saves to your Downloads folder."
            },
            {
                q: "Why is my PDF cutting off content on the right side?",
                a: "The page is wider than the PDF page width. Fix this by: reducing the scale to 80-90%, switching to landscape orientation, or adjusting margins to 'Minimum' or 'None'."
            },
            {
                q: "How do I save a web page without ads?",
                a: "Use Reader Mode before printing—click the reader icon in the address bar (available in Safari, Firefox, and Edge). This strips out ads, menus, and other clutter for a clean PDF."
            },
            {
                q: "Can I save a password-protected page as PDF?",
                a: "Yes! Log into the page first, then use Ctrl+P to print. The PDF captures exactly what you see on screen, including content behind the login."
            },
            {
                q: "Why are images missing from my PDF?",
                a: "You probably have 'Background graphics' disabled. In the print dialog, click 'More settings' and enable 'Background graphics' to include images and colored backgrounds."
            },
            {
                q: "How do I save a very long scrolling page as PDF?",
                a: "First, scroll through the entire page to load all content. Then use the standard print method. On iPhone, use the Full Page Screenshot feature for the best results on long pages."
            },
            {
                q: "Which browser creates the best quality PDFs?",
                a: "Safari's 'Export as PDF' typically produces the highest quality. Chrome and Edge are tied for second. All are adequate for most uses—choose based on convenience."
            },
            {
                q: "Can I save multiple web pages into one PDF?",
                a: "Not directly from the browser. Save each page as a separate PDF, then use a PDF merge tool (like pdfcanada.ca) to combine them into a single document."
            }
        ],

        ctaTitle: "Need to Work With Your PDFs?",
        ctaButton: "Try Our Free PDF Tools",
        ctaSubtext: "Merge, compress, edit, and convert your saved web pages—100% free.",
        quickAnswer: {
            question: "How do I save a web page as a PDF?",
            answer: "Press Ctrl+P (Windows) or Cmd+P (Mac), select 'Save as PDF' as the printer destination, and click Save. This works in Chrome, Firefox, Safari, and Edge. On iPhone, use the Share menu and select 'PDF' in Options.",
            tool: "PDF Tools",
            steps: ["Press Ctrl+P or Cmd+P", "Select 'Save as PDF'", "Click Save"]
        }
    },
    fr: {
        seo: {
            title: `Comment Enregistrer une Page Web en PDF | Guide ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à enregistrer n'importe quelle page internet en PDF sur Chrome, Firefox, Safari, Edge, iPhone et Android. Guide complet ${CURRENT_YEAR}.`
        },
        h1: "Comment Enregistrer une Page Web en PDF : Guide Complet",
        subtitle: "Convertissez n'importe quel site web en document PDF en quelques secondes grâce à la fonction d'impression intégrée de votre navigateur.",

        intro: "Vous avez trouvé un article important, un reçu ou une page de confirmation en ligne que vous devez sauvegarder ? La meilleure solution est d'**enregistrer la page web en PDF**—un format qui préserve la mise en page, est consultable et peut être facilement partagé ou imprimé. Ce guide couvre toutes les méthodes pour **convertir une page internet en PDF**.",

        sections: [
            {
                id: "windows-chrome",
                title: "Méthode 1 : Google Chrome",
                content: `### Raccourci Clavier
**Windows** : **Ctrl + P**
**Mac** : **Cmd + P**

### Instructions
1. Appuyez sur **Ctrl + P** pour ouvrir le dialogue d'impression
2. Dans "Destination", sélectionnez **"Enregistrer au format PDF"**
3. Ajustez les paramètres (orientation, marges, graphiques d'arrière-plan)
4. Cliquez sur **Enregistrer**

**Astuce** : Activez "Graphiques d'arrière-plan" pour inclure les images et couleurs.`
            },
            {
                id: "iphone",
                title: "Méthode 2 : iPhone et iPad",
                content: `### Via le Menu Partage
1. Ouvrez la page dans Safari
2. Appuyez sur le bouton **Partager** (carré avec flèche)
3. Appuyez sur **"Options"** en haut
4. Sélectionnez **"PDF"** au lieu de "Automatique"
5. Appuyez sur **"Enregistrer dans Fichiers"**

### Via Capture d'Écran Page Entière
1. Prenez une capture d'écran (Bouton latéral + Volume haut)
2. Appuyez sur l'aperçu, puis sur **"Page entière"**
3. Appuyez sur **"Terminé"** → **"Enregistrer le PDF dans Fichiers"**`
            },
            {
                id: "android",
                title: "Méthode 3 : Android",
                content: `### Chrome sur Android
1. Appuyez sur le menu à trois points
2. Appuyez sur **"Partager"** ou **"Imprimer"**
3. Sélectionnez **"Enregistrer au format PDF"**
4. Appuyez sur l'icône de téléchargement
5. Choisissez l'emplacement et enregistrez`
            }
        ],

        faq: [
            {
                q: "Comment enregistrer une page web en PDF facilement ?",
                a: "Appuyez sur Ctrl+P (Windows) ou Cmd+P (Mac), sélectionnez 'Enregistrer au format PDF' comme destination, et cliquez sur Enregistrer."
            },
            {
                q: "Comment sauvegarder une page en PDF sur iPhone ?",
                a: "Dans Safari, appuyez sur Partager, puis 'Options' en haut, sélectionnez 'PDF', et choisissez 'Enregistrer dans Fichiers'."
            },
            {
                q: "Pourquoi le contenu est coupé sur le côté droit ?",
                a: "Réduisez l'échelle à 80-90% ou passez en mode paysage dans les paramètres d'impression."
            }
        ],

        ctaTitle: "Besoin de Travailler Vos PDF ?",
        ctaButton: "Essayer Nos Outils PDF Gratuits",
        ctaSubtext: "Fusionnez, compressez, éditez vos pages web sauvegardées—gratuit.",
        quickAnswer: {
            question: "Comment enregistrer une page web en PDF ?",
            answer: "Appuyez sur Ctrl+P (Windows) ou Cmd+P (Mac), sélectionnez 'Enregistrer au format PDF', et cliquez sur Enregistrer. Sur iPhone, utilisez le menu Partager et sélectionnez 'PDF' dans Options.",
            tool: "Outils PDF",
            steps: ["Appuyez sur Ctrl+P ou Cmd+P", "Sélectionnez 'Enregistrer au format PDF'", "Enregistrer"]
        }
    },
    pt: {
        seo: {
            title: `Como Salvar Página Web como PDF | Guia ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda a salvar qualquer página da internet como PDF no Chrome, Firefox, Safari, Edge, iPhone e Android. Guia completo de ${CURRENT_YEAR}.`
        },
        h1: "Como Salvar uma Página Web como PDF: Guia Completo",
        subtitle: "Converta qualquer site em documento PDF em segundos usando a função de impressão do navegador.",

        intro: "Encontrou um artigo importante, recibo ou página de confirmação online que precisa salvar? A melhor solução é **salvar a página web como PDF**—um formato que preserva o layout, é pesquisável e pode ser facilmente compartilhado ou impresso. Este guia cobre todos os métodos para **converter uma página da internet em PDF**.",

        sections: [
            {
                id: "windows-chrome",
                title: "Método 1: Google Chrome",
                content: `### Atalho de Teclado
**Windows**: **Ctrl + P**
**Mac**: **Cmd + P**

### Instruções
1. Pressione **Ctrl + P** para abrir o diálogo de impressão
2. Em "Destino", selecione **"Salvar como PDF"**
3. Ajuste as configurações (orientação, margens, gráficos de fundo)
4. Clique em **Salvar**

**Dica**: Ative "Gráficos de fundo" para incluir imagens e cores.`
            },
            {
                id: "iphone",
                title: "Método 2: iPhone e iPad",
                content: `### Pelo Menu Compartilhar
1. Abra a página no Safari
2. Toque no botão **Compartilhar** (quadrado com seta)
3. Toque em **"Opções"** no topo
4. Selecione **"PDF"** em vez de "Automático"
5. Toque em **"Salvar em Arquivos"**

### Captura de Tela Página Inteira
1. Tire uma captura de tela (Botão lateral + Volume cima)
2. Toque na prévia, depois em **"Página Inteira"**
3. Toque em **"OK"** → **"Salvar PDF em Arquivos"**`
            },
            {
                id: "android",
                title: "Método 3: Android",
                content: `### Chrome no Android
1. Toque no menu de três pontos
2. Toque em **"Compartilhar"** ou **"Imprimir"**
3. Selecione **"Salvar como PDF"**
4. Toque no ícone de download
5. Escolha o local e salve`
            }
        ],

        faq: [
            {
                q: "Como salvar uma página web como PDF facilmente?",
                a: "Pressione Ctrl+P (Windows) ou Cmd+P (Mac), selecione 'Salvar como PDF' como destino, e clique em Salvar."
            },
            {
                q: "Como salvar uma página como PDF no iPhone?",
                a: "No Safari, toque em Compartilhar, depois 'Opções' no topo, selecione 'PDF', e escolha 'Salvar em Arquivos'."
            },
            {
                q: "Por que o conteúdo está cortado na lateral direita?",
                a: "Reduza a escala para 80-90% ou mude para modo paisagem nas configurações de impressão."
            }
        ],

        ctaTitle: "Precisa Trabalhar Seus PDFs?",
        ctaButton: "Experimente Nossas Ferramentas PDF",
        ctaSubtext: "Junte, comprima, edite suas páginas salvas—grátis.",
        quickAnswer: {
            question: "Como salvar uma página web como PDF?",
            answer: "Pressione Ctrl+P (Windows) ou Cmd+P (Mac), selecione 'Salvar como PDF', e clique em Salvar. No iPhone, use o menu Compartilhar e selecione 'PDF' em Opções.",
            tool: "Ferramentas PDF",
            steps: ["Pressione Ctrl+P ou Cmd+P", "Selecione 'Salvar como PDF'", "Salvar"]
        }
    }

});

export const SaveWebPageAsPdfGuide: React.FC<GuideProps> = ({ lang }) => {

    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Open Print Dialog", "text": "Press Ctrl+P (Windows) or Cmd+P (Mac) in your browser to open the print dialog." },
            { "@type": "HowToStep", "position": 2, "name": "Select Save as PDF", "text": "In the destination/printer dropdown, select 'Save as PDF' instead of a physical printer." },
            { "@type": "HowToStep", "position": 3, "name": "Save the PDF", "text": "Choose a location and filename, then click Save to create your PDF." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/save-web-page-as-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Enregistrer Page Web en PDF' : (lang === 'pt' ? 'Salvar Página Web como PDF' : 'Save Web Page as PDF'), path: lang === 'fr' ? '/fr/guides/save-web-page-as-pdf' : (lang === 'pt' ? '/pt/guides/save-web-page-as-pdf' : '/guides/save-web-page-as-pdf') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Globe size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Enregistrer Page Web en PDF' : (lang === 'pt' ? 'Salvar Página Web como PDF' : 'Save Web Page as PDF'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="html-to-pdf" lang={lang} />
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
                            <Printer className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Built Into Browsers</h3>
                            <p className="text-gray-500">Ctrl+P works in every browser—no extensions or software needed.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Smartphone className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Works on Mobile</h3>
                            <p className="text-gray-500">Save pages as PDF on iPhone, iPad, and Android devices.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <FileText className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Searchable Output</h3>
                            <p className="text-gray-500">PDFs preserve text, letting you search and copy content.</p>
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
                        <Link href={`/${lang}`}
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

                    <RelatedTools lang={lang} currentPath="/guides/save-web-page-as-pdf" category="convert" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/html-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide HTML vers PDF' : (lang === 'pt' ? 'Guia HTML para PDF' : 'HTML to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/merge-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
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
