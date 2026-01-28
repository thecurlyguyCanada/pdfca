'use client';

import Link from 'next/link';
import React from 'react';
import { Search, CheckCircle, Shield, Zap, ArrowRight, FileText, Keyboard, Monitor, Smartphone, MousePointer2, ScanText, Eye, Command } from 'lucide-react';
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
            title: `How to Search a PDF | Find Text in PDF Documents ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Learn how to search for text in PDF documents using Ctrl+F, browser tools, and OCR for scanned PDFs. Complete ${CURRENT_YEAR} guide with tips for Windows, Mac, iPhone, and Android.`
        },
        h1: `How to Search a PDF: The Complete ${CURRENT_YEAR} Guide`,
        subtitle: "Find any word or phrase in your PDF documents instantly—whether they're text-based or scanned images.",

        intro: "You've received a 200-page PDF report and need to find one specific piece of information. Scrolling through every page manually? That's a waste of your time. The good news is that **searching a PDF** is incredibly simple—if you know the right techniques. This comprehensive guide covers everything from basic keyboard shortcuts to advanced search features, plus what to do when your PDF contains scanned images instead of searchable text. Whether you're on Windows, Mac, iPhone, or Android, you'll learn how to find exactly what you need in seconds.",

        sections: [
            {
                id: "basic-search",
                title: "The Basics: Ctrl+F (or Cmd+F) to Search Any PDF",
                content: `The fastest way to search any PDF is the universal keyboard shortcut that works in virtually every PDF viewer:

### Windows & Linux
- **Ctrl + F** — Opens the search/find dialog
- Type your search term and press Enter
- Use **Ctrl + G** or **F3** to jump to the next match
- Use **Shift + Ctrl + G** or **Shift + F3** for previous match

### Mac
- **Cmd + F** — Opens the search/find dialog
- Type your search term and press Return
- Use **Cmd + G** to find next occurrence
- Use **Shift + Cmd + G** for previous match

### Why This Works Everywhere
The **Ctrl+F / Cmd+F** shortcut is universally implemented across:
- **Web Browsers**: Chrome, Firefox, Safari, Edge (when viewing PDFs in-browser)
- **Adobe Acrobat Reader**: The most popular dedicated PDF viewer
- **Preview (Mac)**: Apple's built-in PDF viewer
- **Microsoft Edge**: Windows' default PDF handler
- **Third-party viewers**: Foxit, SumatraPDF, PDF-XChange, etc.

This shortcut has been standard since the early days of computing, so it works reliably across all platforms and applications. When in doubt, try Ctrl+F first!`
            },
            {
                id: "browser-search",
                title: "Searching PDFs in Your Web Browser",
                content: `Many people open PDFs directly in their web browser rather than downloading them. Here's how to search effectively in each major browser:

### Google Chrome
1. Open the PDF in Chrome (drag-and-drop or click a PDF link)
2. Press **Ctrl+F** (Windows) or **Cmd+F** (Mac)
3. A search bar appears in the top-right corner
4. Type your search term—Chrome highlights all matches in yellow
5. Use the up/down arrows or Enter to navigate between matches
6. The counter shows "X of Y matches" so you know how many results exist

**Pro Tip**: Chrome's search is case-insensitive by default, so "invoice" matches "Invoice" and "INVOICE".

### Mozilla Firefox
1. Open the PDF in Firefox's built-in viewer (PDF.js)
2. Press **Ctrl+F** or **Cmd+F**
3. The search bar appears at the bottom of the screen
4. Options include:
   - **Match Case**: Toggle case sensitivity
   - **Whole Words**: Only match complete words, not partial matches
   - **Highlight All**: Show all matches at once

### Microsoft Edge
1. Edge uses its own PDF viewer with excellent search
2. Press **Ctrl+F** or **Cmd+F**
3. Additional features:
   - **Read Aloud**: Have the PDF read to you while searching
   - **Draw/Highlight**: Mark up search results

### Safari (Mac)
1. Safari opens PDFs natively
2. Press **Cmd+F** to search
3. Matches appear highlighted throughout the document
4. Use the sidebar to see search results in context

### Tip: When Browser Search Fails
If searching in your browser returns zero results on a PDF that clearly contains text, the PDF may be:
- **Scanned/image-based**: Requires OCR (covered below)
- **Protected**: Some PDFs disable text selection
- **Using embedded fonts**: Rare encoding issues can affect search`
            },
            {
                id: "adobe-search",
                title: "Advanced Search in Adobe Acrobat Reader",
                content: `Adobe Acrobat Reader (the free version) offers more powerful search features than browser-based viewing:

### Basic Search (Ctrl+F / Cmd+F)
Same as browser search—type and find. But Acrobat adds:
- **Match Whole Word Only**: Prevents "work" from matching "worker"
- **Case-Sensitive**: Distinguish between "PDF" and "pdf"
- **Include Bookmarks**: Search bookmark names, not just page content
- **Include Comments**: Search annotation text

### Advanced Search (Ctrl+Shift+F / Cmd+Shift+F)
The **Advanced Search** panel provides professional-grade searching:

**Search Multiple PDFs at Once**
- Select "All PDF Documents in" and choose a folder
- Acrobat searches every PDF in that folder simultaneously
- Results show which document contains each match

**Search Criteria Options**
- **Proximity**: Find words that appear near each other
- **Stemming**: "run" matches "running", "runs", "ran"
- **Boolean operators**: AND, OR, NOT for complex queries

**Search by Document Properties**
- Author, title, subject, keywords
- Creation date or modification date
- File name patterns

### How to Access Advanced Search
1. Open Adobe Acrobat Reader
2. Press **Ctrl+Shift+F** (Windows) or **Cmd+Shift+F** (Mac)
3. Or go to **Edit → Advanced Search**
4. The search panel opens as a sidebar

### Search Results Navigation
- Results display with surrounding context
- Click any result to jump directly to that page
- Sort by relevance, date, or location
- Save searches for repeated use`
            },
            {
                id: "mobile-search",
                title: "How to Search a PDF on iPhone and Android",
                content: `Searching PDFs on mobile devices is just as easy once you know where to look:

### iPhone & iPad (iOS)

**Using the Files App**
1. Open the PDF in the Files app
2. Tap the **search icon** (magnifying glass) in the top-right
3. Type your search term
4. Swipe through results with the arrows

**Using Safari**
1. Open a PDF link in Safari
2. Tap the **Share button** → **Find on Page**
3. Type your search term
4. Use arrows to navigate matches

**Using Adobe Acrobat Reader (Free App)**
1. Install Adobe Acrobat Reader from the App Store
2. Open your PDF in the app
3. Tap the **magnifying glass icon** in the toolbar
4. Type and search—includes advanced options

### Android

**Using Google Drive**
1. Open the PDF in Google Drive
2. Tap the **three dots menu** → **Find**
3. Type your search term
4. Navigate with up/down arrows

**Using Chrome**
1. Open the PDF in Chrome browser
2. Tap the **three dots menu** → **Find in page**
3. Type your search term

**Using Adobe Acrobat Reader (Free App)**
1. Install from Google Play Store
2. Open your PDF
3. Tap the **magnifying glass** in the top toolbar
4. Search with full match/case options

### Mobile Search Limitations
- Large PDFs may load slowly on older devices
- Some budget phones struggle with 100+ page documents
- Image-based/scanned PDFs require desktop OCR tools`
            },
            {
                id: "scanned-pdf-search",
                title: "Searching Scanned PDFs: The OCR Solution",
                content: `Here's a frustrating scenario: you press Ctrl+F, type your search term, and get **zero results**—even though you can clearly see the text on the page. What's going on?

### Why Some PDFs Aren't Searchable
When a document is **scanned** (using a scanner, phone camera, or copy machine), the resulting PDF contains **images** of text, not actual text characters. To your eyes, it looks like text. To a computer, it's just pixels in an image.

**Common sources of non-searchable PDFs:**
- Scanned paper documents
- Photos of documents taken with a phone
- Faxes converted to PDF
- Old PDFs created from legacy scanning software
- PDFs with special fonts that weren't embedded correctly

### The Solution: OCR (Optical Character Recognition)
**OCR technology** analyzes images and converts them into searchable, selectable text. After OCR processing, your PDF becomes fully searchable.

**Free OCR Options:**

**1. Adobe Acrobat Reader (Limited)**
- The free Reader can't perform OCR
- You need **Acrobat Pro** (paid) for built-in OCR
- 7-day free trial available

**2. Online OCR Tools**
- Many free websites offer OCR conversion
- Upload your PDF, receive a searchable version
- **Privacy concern**: Your document is uploaded to their servers

**3. pdfcanada.ca OCR Tool**
- **100% local processing**—your document never leaves your device
- Free, no signup required
- Processes PDFs using WebAssembly in your browser
- Maintains original formatting while adding text layer

**4. Google Drive (Free)**
- Upload a scanned PDF to Google Drive
- Right-click → **Open with → Google Docs**
- Google automatically runs OCR
- Searchable text appears in a new Google Doc

**5. Microsoft OneNote (Free)**
- Paste or insert a scanned image/PDF
- Right-click → **Copy Text from Picture**
- OneNote extracts searchable text

### After OCR: Search Normally
Once your PDF has been OCR-processed, searching works exactly like any other PDF:
1. Open the OCR'd PDF
2. Press **Ctrl+F** or **Cmd+F**
3. Search for any word or phrase
4. Results appear highlighted on the page`
            },
            {
                id: "search-tips",
                title: "Pro Tips for Effective PDF Searching",
                content: `### Use Partial Words for Better Results
If you're not finding what you expect, try searching for:
- **Part of a word**: "invoic" instead of "invoice" (catches "invoices", "invoiced")
- **Root words**: "pay" instead of "payment" or "payable"
- **Common abbreviations**: "govt" or "gov" for government documents

### Search for Numbers and Special Characters
- Search for **phone numbers**: "555-1234" or just "5551234"
- Search for **dates**: "January 15" or "01/15/2024" (try multiple formats)
- Search for **dollar amounts**: "$1,500" or "1500" (comma handling varies)
- Search for **email addresses**: "@company.com" to find all company emails

### Use Boolean Thinking (Even Without Boolean Support)
If your viewer doesn't support AND/OR searching:
- Search for the **rarer term first**: "amortization" is more specific than "payment"
- Use **unique numbers**: Invoice #45892 is faster to find than "total"
- Search for **proper nouns**: Company names, person names, product names

### When Search Doesn't Work: Troubleshooting
**Problem: "0 of 0 matches" on visible text**
- The PDF is likely scanned/image-based → Use OCR

**Problem: Search finds too many results**
- Use more specific terms
- Enable "Whole Words Only" option
- Add context words

**Problem: Can't select or copy found text**
- The PDF has copy protection enabled
- Use a PDF unlock tool to remove restrictions

**Problem: Search is very slow**
- Large PDF with thousands of pages
- Your device has limited RAM
- Try searching smaller page ranges in Adobe Acrobat

### Keyboard Shortcuts Quick Reference

| Action | Windows | Mac |
|--------|---------|-----|
| Open Search | Ctrl+F | Cmd+F |
| Find Next | F3 or Ctrl+G | Cmd+G |
| Find Previous | Shift+F3 | Shift+Cmd+G |
| Advanced Search | Ctrl+Shift+F | Cmd+Shift+F |
| Close Search | Esc | Esc |`
            },
            {
                id: "search-across-files",
                title: "Searching Across Multiple PDF Files",
                content: `Sometimes you need to find a term across your entire PDF library—not just one document.

### Adobe Acrobat Pro / Reader
1. Press **Ctrl+Shift+F** (Advanced Search)
2. Select **"All PDF Documents in"**
3. Choose your folder location
4. Enter your search term
5. Results show file name + page number for each match

### Windows File Explorer
1. Navigate to your PDF folder
2. Type in the search box: **content:"your search term"**
3. Windows indexes PDF content and shows matching files
4. Requires Windows Search Indexing to be enabled for PDFs

### macOS Spotlight
1. Press **Cmd+Space** to open Spotlight
2. Type your search term
3. Spotlight searches PDF contents automatically
4. Shows which documents contain matches

### Third-Party Tools
- **DocFetcher** (free, open-source): Indexes and searches PDF libraries
- **Everything** + **IFilter** (Windows): Lightning-fast file search with PDF content
- **DEVONthink** (Mac): Professional document management with AI-powered search

### Cloud Storage Search
- **Google Drive**: Automatically OCRs and indexes uploaded PDFs
- **Dropbox**: Full-text search across all stored PDFs
- **OneDrive**: Searches PDF content in Microsoft 365 accounts`
            }
        ],

        faq: [
            {
                q: "How do I search for a word in a PDF?",
                a: "Press Ctrl+F (Windows/Linux) or Cmd+F (Mac) to open the search dialog. Type your word and press Enter. The PDF viewer will highlight all matches and let you navigate between them using the arrow buttons or F3/Cmd+G."
            },
            {
                q: "Why can't I search my PDF?",
                a: "Your PDF is likely scanned or image-based, meaning it contains pictures of text rather than actual searchable characters. You need to run OCR (Optical Character Recognition) to convert the images to searchable text. Try pdfcanada.ca's free OCR tool."
            },
            {
                q: "How do I search a PDF on my phone?",
                a: "On iPhone, open the PDF in Files or Safari and tap the search icon (magnifying glass). On Android, open in Chrome or Google Drive and use the menu → Find option. Adobe Acrobat Reader (free app) works on both platforms."
            },
            {
                q: "Can I search multiple PDFs at once?",
                a: "Yes! Adobe Acrobat's Advanced Search (Ctrl+Shift+F) lets you search all PDFs in a folder. Windows File Explorer can also search PDF contents if indexing is enabled. On Mac, Spotlight searches PDF content automatically."
            },
            {
                q: "How do I make a scanned PDF searchable?",
                a: "Use OCR (Optical Character Recognition) software. Free options include Google Drive (open PDF with Google Docs), pdfcanada.ca's local OCR tool, or Microsoft OneNote. Adobe Acrobat Pro also has built-in OCR."
            },
            {
                q: "Does Ctrl+F work in all PDF viewers?",
                a: "Yes, Ctrl+F (or Cmd+F on Mac) is a universal shortcut that works in web browsers, Adobe Reader, Preview, and virtually all PDF viewing software. It's been a computing standard for decades."
            },
            {
                q: "How do I search for exact phrases in a PDF?",
                a: "Simply type the entire phrase in the search box. Most PDF viewers search for consecutive words automatically. For advanced phrase searching with quotes, use Adobe Acrobat's Advanced Search feature."
            },
            {
                q: "Can I search PDF comments and annotations?",
                a: "In Adobe Acrobat Reader, open the search dialog and check 'Include Comments' option. This searches through all annotation text, sticky notes, and comment content in addition to the main document."
            },
            {
                q: "Why is PDF search so slow on my computer?",
                a: "Large PDFs with hundreds of pages or complex graphics take longer to search. Try closing other applications to free up memory, or use Adobe Acrobat's page range feature to search specific sections rather than the entire document."
            },
            {
                q: "How do I search a protected/locked PDF?",
                a: "If the PDF allows viewing but blocks text selection, Ctrl+F may still work for searching even if you can't copy text. If search doesn't work, you may need to unlock the PDF first using a PDF unlock tool."
            }
        ],

        ctaTitle: "Need to Make Your PDF Searchable?",
        ctaButton: "Try Our Free OCR Tool",
        ctaSubtext: "Convert scanned documents to searchable PDFs—100% free, 100% private.",
        quickAnswer: {
            question: "How do I search for text in a PDF?",
            answer: "Press Ctrl+F (Windows) or Cmd+F (Mac) to open the search dialog, type your search term, and press Enter. Use F3 or Cmd+G to jump between matches. If search doesn't work, your PDF may be scanned—use OCR to make it searchable.",
            tool: "PDF OCR Tool",
            steps: ["Press Ctrl+F or Cmd+F", "Type your search term", "Navigate results with F3/arrows"]
        }
    },
    fr: {
        seo: {
            title: `Comment Rechercher dans un PDF | Trouver du Texte ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à rechercher du texte dans les documents PDF avec Ctrl+F, les navigateurs et l'OCR. Guide complet ${CURRENT_YEAR} pour Windows, Mac, iPhone et Android.`
        },
        h1: "Comment Rechercher dans un PDF : Le Guide Complet",
        subtitle: "Trouvez n'importe quel mot ou phrase dans vos documents PDF instantanément.",

        intro: "Vous avez reçu un rapport PDF de 200 pages et devez trouver une information spécifique. Faire défiler chaque page manuellement ? C'est une perte de temps. La bonne nouvelle est que **rechercher dans un PDF** est incroyablement simple—si vous connaissez les bonnes techniques. Ce guide couvre tout, des raccourcis clavier de base aux fonctionnalités de recherche avancées.",

        sections: [
            {
                id: "basic-search",
                title: "Les Bases : Ctrl+F pour Rechercher",
                content: `La façon la plus rapide de rechercher dans n'importe quel PDF est le raccourci clavier universel :

### Windows & Linux
- **Ctrl + F** — Ouvre la boîte de recherche
- Tapez votre terme et appuyez sur Entrée
- **F3** pour le résultat suivant

### Mac
- **Cmd + F** — Ouvre la boîte de recherche
- **Cmd + G** pour le résultat suivant

Ce raccourci fonctionne dans tous les navigateurs, Adobe Reader, et pratiquement tous les lecteurs PDF.`
            },
            {
                id: "scanned-pdf",
                title: "PDF Numérisés : La Solution OCR",
                content: `Si Ctrl+F ne trouve rien alors que vous voyez clairement du texte, votre PDF est probablement numérisé (image). Utilisez l'**OCR (Reconnaissance Optique de Caractères)** pour le rendre recherchable.

**Options gratuites :**
- pdfcanada.ca — Traitement 100% local, gratuit
- Google Drive — Ouvrez avec Google Docs
- Microsoft OneNote — Extraire le texte d'image`
            },
            {
                id: "mobile",
                title: "Rechercher sur iPhone et Android",
                content: `**iPhone** : Ouvrez le PDF dans Fichiers ou Safari, appuyez sur l'icône loupe.

**Android** : Ouvrez dans Chrome ou Google Drive, menu → Rechercher.

L'application Adobe Acrobat Reader (gratuite) fonctionne sur les deux plateformes.`
            }
        ],

        faq: [
            {
                q: "Comment rechercher un mot dans un PDF ?",
                a: "Appuyez sur Ctrl+F (Windows) ou Cmd+F (Mac) pour ouvrir la recherche. Tapez votre mot et appuyez sur Entrée."
            },
            {
                q: "Pourquoi je ne peux pas rechercher dans mon PDF ?",
                a: "Votre PDF est probablement numérisé/basé sur des images. Utilisez l'OCR pour le convertir en texte recherchable."
            },
            {
                q: "Comment rechercher sur mon téléphone ?",
                a: "Sur iPhone, utilisez l'icône loupe dans Fichiers ou Safari. Sur Android, utilisez le menu Rechercher dans Chrome ou Google Drive."
            }
        ],

        ctaTitle: "Besoin de Rendre Votre PDF Recherchable ?",
        ctaButton: "Essayer l'Outil OCR Gratuit",
        ctaSubtext: "Convertissez les documents numérisés en PDF recherchables—gratuit et privé.",
        quickAnswer: {
            question: "Comment rechercher du texte dans un PDF ?",
            answer: "Appuyez sur Ctrl+F (Windows) ou Cmd+F (Mac), tapez votre terme de recherche et appuyez sur Entrée. Utilisez F3 pour naviguer entre les résultats.",
            tool: "Outil OCR PDF",
            steps: ["Appuyez sur Ctrl+F ou Cmd+F", "Tapez votre recherche", "Naviguez avec F3"]
        }
    },
    pt: {
        seo: {
            title: `Como Pesquisar em um PDF | Encontrar Texto em PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda a pesquisar texto em documentos PDF usando Ctrl+F, navegadores e OCR. Guia completo de ${CURRENT_YEAR} para Windows, Mac, iPhone e Android.`
        },
        h1: "Como Pesquisar em um PDF: O Guia Completo",
        subtitle: "Encontre qualquer palavra ou frase em seus documentos PDF instantaneamente.",

        intro: "Você recebeu um relatório PDF de 200 páginas e precisa encontrar uma informação específica. Rolar por cada página manualmente? Isso é perda de tempo. A boa notícia é que **pesquisar em um PDF** é incrivelmente simples—se você conhecer as técnicas certas. Este guia cobre tudo, desde atalhos básicos até recursos avançados de busca.",

        sections: [
            {
                id: "basic-search",
                title: "O Básico: Ctrl+F para Pesquisar",
                content: `A forma mais rápida de pesquisar em qualquer PDF é o atalho universal:

### Windows & Linux
- **Ctrl + F** — Abre a caixa de pesquisa
- Digite seu termo e pressione Enter
- **F3** para o próximo resultado

### Mac
- **Cmd + F** — Abre a caixa de pesquisa
- **Cmd + G** para o próximo resultado

Este atalho funciona em todos os navegadores, Adobe Reader e praticamente todos os leitores de PDF.`
            },
            {
                id: "scanned-pdf",
                title: "PDFs Digitalizados: A Solução OCR",
                content: `Se Ctrl+F não encontra nada mesmo vendo texto claramente, seu PDF provavelmente é digitalizado (imagem). Use **OCR (Reconhecimento Óptico de Caracteres)** para torná-lo pesquisável.

**Opções gratuitas:**
- pdfcanada.ca — Processamento 100% local, grátis
- Google Drive — Abra com Google Docs
- Microsoft OneNote — Extrair texto de imagem`
            },
            {
                id: "mobile",
                title: "Pesquisar no iPhone e Android",
                content: `**iPhone**: Abra o PDF em Arquivos ou Safari, toque no ícone de lupa.

**Android**: Abra no Chrome ou Google Drive, menu → Pesquisar.

O aplicativo Adobe Acrobat Reader (grátis) funciona em ambas as plataformas.`
            }
        ],

        faq: [
            {
                q: "Como pesquisar uma palavra em um PDF?",
                a: "Pressione Ctrl+F (Windows) ou Cmd+F (Mac) para abrir a pesquisa. Digite sua palavra e pressione Enter."
            },
            {
                q: "Por que não consigo pesquisar no meu PDF?",
                a: "Seu PDF provavelmente é digitalizado/baseado em imagens. Use OCR para convertê-lo em texto pesquisável."
            },
            {
                q: "Como pesquisar no celular?",
                a: "No iPhone, use o ícone de lupa em Arquivos ou Safari. No Android, use o menu Pesquisar no Chrome ou Google Drive."
            }
        ],

        ctaTitle: "Precisa Tornar Seu PDF Pesquisável?",
        ctaButton: "Experimente a Ferramenta OCR Grátis",
        ctaSubtext: "Converta documentos digitalizados em PDFs pesquisáveis—grátis e privado.",
        quickAnswer: {
            question: "Como pesquisar texto em um PDF?",
            answer: "Pressione Ctrl+F (Windows) ou Cmd+F (Mac), digite seu termo de busca e pressione Enter. Use F3 para navegar entre os resultados.",
            tool: "Ferramenta OCR PDF",
            steps: ["Pressione Ctrl+F ou Cmd+F", "Digite sua busca", "Navegue com F3"]
        }
    }

});

export const SearchPdfGuide: React.FC<GuideProps> = ({ lang }) => {

    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Open Search Dialog", "text": "Press Ctrl+F (Windows/Linux) or Cmd+F (Mac) to open the search box in your PDF viewer." },
            { "@type": "HowToStep", "position": 2, "name": "Enter Search Term", "text": "Type the word or phrase you want to find in the search box." },
            { "@type": "HowToStep", "position": 3, "name": "Navigate Results", "text": "Press Enter to find matches. Use F3, Cmd+G, or arrow buttons to jump between results highlighted in the document." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/search-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Rechercher PDF' : (lang === 'pt' ? 'Pesquisar PDF' : 'Search PDF'), path: lang === 'fr' ? '/fr/guides/search-pdf' : (lang === 'pt' ? '/pt/guides/search-pdf' : '/guides/search-pdf') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Search size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Rechercher PDF' : (lang === 'pt' ? 'Pesquisar PDF' : 'Search PDF'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="ocr-pdf" lang={lang} />
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
                            <Keyboard className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Universal Shortcut</h3>
                            <p className="text-gray-500">Ctrl+F works in every browser and PDF viewer on any operating system.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <ScanText className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">OCR for Scanned PDFs</h3>
                            <p className="text-gray-500">Convert image-based PDFs to searchable text with our free local OCR tool.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Smartphone className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Works Everywhere</h3>
                            <p className="text-gray-500">Search PDFs on Windows, Mac, iPhone, Android, and in any browser.</p>
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
                        <Link href={`/${lang}/ocr-pdf`}
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

                    <RelatedTools lang={lang} currentPath="/guides/search-pdf" category="edit" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/ocr-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide OCR PDF' : (lang === 'pt' ? 'Guia OCR PDF' : 'OCR PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-text`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Texte' : (lang === 'pt' ? 'Guia PDF para Texto' : 'PDF to Text Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/unlock-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Déverrouiller PDF' : (lang === 'pt' ? 'Guia Desbloquear PDF' : 'Unlock PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
