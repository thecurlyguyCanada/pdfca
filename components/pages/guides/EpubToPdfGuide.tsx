'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, CheckCircle, Shield, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: "How to Convert EPUB to PDF | Free & Secure Ebook Guide | pdfcanada.ca",
            desc: `Turn your ebooks into PDFs for easy reading and printing. Our ${CURRENT_YEAR} guide shows you how to convert EPUB locally in your browser. Secure, fast, and 100% private.`
        },
        h1: "The Definitive Guide: Converting EPUB to PDF",
        subtitle: "Transform your digital library into a stable, printable, and universally accessible format.",
        intro: "Need to convert an **EPUB to PDF** for professional use or printing? While EPUB is fantastic for e-readers, the PDF format remains king for formal submissions, high-quality printing, and corporate documentation. Whether you are a student preparing materials for a Canadian university or a self-published author proofreading your latest manuscript, our **free online EPUB to PDF converter** provides a professional-grade result without the security risks of cloud-based competitors. We process everything locally in your browser memory.",
        whyTitle: "The Case for PDF over EPUB",
        whyReasons: [
            "Fixed Layout: Ensure every table, image, and page number stays exactly where you intended (ideal for textbooks).",
            "Universal Printing: PDFs are natively supported by every print shop and local printer across Canada.",
            "Cross-Platform Stability: A PDF looks the same on an iPhone, a Windows PC, and a Linux workstation.",
            "Advanced Annotation: Use industry-standard tools to sign, mark up, and highlight documents.",
            "Accessibility (WCAG): Properly structured PDFs are easier to optimize for screen readers in professional settings."
        ],
        howTitle: "The Science of High-Fidelity Conversion",
        howDescription: "EPUB files are essentially simplified websites (HTML/CSS) zipped into a container. To convert **EPUB to PDF** accurately, our engine performs a full layout calculation, determines appropriate page breaks, and embeds fonts to ensure the resulting document is a stable snapshot of your ebook.",

        sections: [
            {
                id: "what-is-epub",
                title: "Understanding EPUB vs PDF Formats",
                content: `Before converting EPUB to PDF, it helps to understand what makes these formats different:

**EPUB (Electronic Publication)**:
- **Reflowable format**: Text adapts to screen size and orientation
- **Ideal for**: E-readers like Kindle, Kobo, Apple Books
- **Structure**: Essentially a zipped package of HTML, CSS, and images
- **Font control**: Reader can adjust font size, typeface, and spacing
- **Page numbers**: Dynamic—change based on device and font settings

**PDF (Portable Document Format)**:
- **Fixed layout**: Every page looks identical on all devices
- **Ideal for**: Printing, professional submissions, archival, annotation
- **Structure**: Self-contained document with embedded fonts and images
- **Font control**: Locked—designed by the creator
- **Page numbers**: Fixed—'page 42' is always the same across all viewers

**When to convert EPUB to PDF**:
- Academic submissions requiring page citations (APA, MLA, Chicago style)
- Printing physical copies or creating bound manuscripts
- Professional proofreading with fixed page references
- Government or institutional portals that only accept PDF
- Annotating with highlighting and comments for book clubs or research
- Creating archival copies that won't reflow if software updates change rendering`
            },
            {
                id: "layout-logic",
                title: "How EPUB to PDF Conversion Works (Technical Deep Dive)",
                content: `Our converter doesn't just 'scrape' text—it performs a sophisticated multi-stage transformation:

**Stage 1: EPUB Parsing**
- Unzips the .epub container file
- Reads the OEBPS Container File (OPF) to determine reading order
- Extracts HTML/XHTML content files, CSS stylesheets, and media assets
- Identifies spine order (the sequence chapters should appear)
- Parses metadata (title, author, publisher, ISBN)

**Stage 2: Layout Calculation**
- Renders each HTML chapter using the browser's layout engine
- Calculates optimal page breaks (avoiding orphaned headers, splitting images)
- Converts reflowable CSS into fixed-width page dimensions
- Applies pagination logic to determine where each chapter starts
- Generates page numbers if configured

**Stage 3: Font Handling**
- **Embedded fonts**: Directly included in the PDF for perfect fidelity
- **Non-embedded fonts**: Substituted with high-quality open-source alternatives (e.g., Libertinus for Times New Roman, Inter for Arial)
- **Special characters**: Ensures Unicode support for multilingual text (French accents, Chinese characters, mathematical symbols)

**Stage 4: Asset Integration**
- **Images**: Re-encoded at appropriate resolution for print (300 DPI for photos, vector for diagrams)
- **SVG graphics**: Converted to PDF vector paths to maintain scalability
- **Tables**: Reformatted to fit page width, with smart wrapping for long rows
- **Hyperlinks**: Internal links (Table of Contents, footnotes) converted to PDF bookmarks; external URLs preserved as clickable links

**Stage 5: PDF Assembly**
- Combines all rendered pages into a single PDF document
- Adds document metadata (title, author, keywords for search)
- Creates **PDF Bookmarks** (navigation sidebar) from EPUB Table of Contents
- Embeds fonts to ensure cross-platform consistency
- Optimizes file size (compression of images, removal of redundant data)

**Result**: A professional-quality PDF that preserves the visual intent of the original ebook while providing the stability and printability PDF is known for.`
            },
            {
                id: "privacy-security",
                title: "Privacy & Security: Why Local Processing Matters",
                content: `When converting ebooks to PDF, privacy is paramount:

**Why Online Converters Are Risky**:
1. **Upload = Loss of Control**: Your manuscript or purchased ebook is transmitted over the internet
2. **Server Storage**: Many services keep copies of uploads (sometimes permanently)
3. **Data Mining**: Reading habits and book content can be analyzed and sold to marketers
4. **Copyright Exposure**: Uploading copyrighted works could expose you legally
5. **Insider Access**: Employees at the service can access your files

**How pdfcanada.ca Protects Your Privacy**:
- **Zero uploads**: Your EPUB file never leaves your browser
- **Local processing**: Conversion happens in your computer's RAM using WebAssembly
- **Instant deletion**: When you close the browser tab, all traces are gone
- **No logging**: We don't track what you convert, when you convert it, or any file contents
- **Open architecture**: Technically savvy users can inspect our code to verify these claims

**PIPEDA Compliance** (Canada):
- Local-first processing means there's no personal data collected
- No consent forms needed—we can't access what we never receive
- Perfect for authors, researchers, lawyers handling confidential manuscripts

**Comparison**:
| **Feature** | **Cloud Converters** | **pdfcanada.ca** |
|-------------|----------------------|------------------|
| Files uploaded to server | ✗ Yes | ✓ Never |
| Data retention | ✗ Days to forever | ✓ 0 seconds |
| Third-party access risk | ✗ High | ✓ None |
| Works offline | ✗ No | ✓ Yes (after initial load) |
| PIPEDA compliant | ✗ Requires trust | ✓ Guaranteed |`
            }
        ],

        faq: [
            {
                q: "How to convert EPUB to PDF for free?",
                a: "Use pdfcanada.ca's EPUB to PDF converter. Simply select your .epub file, and our WebAssembly engine will convert it locally in your browser without any upload. The process is 100% free, unlimited, and requires no account."
            },
            {
                q: "Can I convert DRM-protected ebooks?",
                a: "No. DRM (Digital Rights Management) encrypts the ebook file. Digital locks must be removed (if legal in your jurisdiction) before conversion. Our tool works with DRM-free EPUBs from sources like Project Gutenberg, Tor Books, or self-created manuscripts."
            },
            {
                q: "Will the PDF look exactly like the ebook?",
                a: "We aim for 'better than original'. EPUBs flow like websites; PDFs are fixed like printed pages. We render the EPUB content onto standard page sizes (Letter/A4) with proper margins, headers, and page numbers, creating a book-like layout ideal for reading and printing."
            },
            {
                q: "Does this work on mobile devices?",
                a: "Yes, modern smartphones can handle the conversion, but EPUB file complexity matters. Large textbooks (50MB+) are best converted on a desktop/laptop due to RAM requirements. Standard novels convert instantly on phones."
            },
            {
                q: "How do I print the converted PDF?",
                a: "Once downloaded, the PDF is formatted for standard paper sizes. Open it in any PDF viewer (Adobe, Chrome, Preview) and select Print. Use 'Fit to Page' to ensure margins are preserved."
            }
        ],
        ctaTitle: "Ready to transform your book?",
        ctaButton: "Convert to PDF Now",
        quickAnswer: {
            question: "How do I convert EPUB to PDF?",
            answer: "Select your .epub file on pdfcanada.ca. Our browser-based tool will instantly render it into a high-quality, printable PDF document without uploading your file to any server.",
            tool: "EPUB to PDF Converter",
            steps: ["Upload EPUB file", "Wait for local processing", "Download PDF"]
        },
        securityTitle: "Secure Local Processing (No Uploads)",
        securityText: "Your literary works are precious. By using pdfcanada.ca, your book never leaves your device. It is the safest solution for authors and researchers concerned about data protection in Canada.",
        relatedTitle: "Recommended Reading Tools",
        // Note: relatedTools array is handled via separate component prop or could be mapped here if strictly needed, 
        // but existing RelatedTools component handles logic based on category usually. 
        // We'll keep the text keys here for completeness if passed down.
        steps: [ // Keeping for AISnapshot if needed
            {
                title: "Select your EPUB file",
                desc: "Choose your .epub file. We support both EPUB 2 and EPUB 3 standards, including those with complex embedded media."
            },
            {
                title: "Privacy-Protected Rendering",
                desc: "Our WebAssembly engine processes the conversion in a sandboxed environment on your device. Your intellectual property never touches our servers."
            },
            {
                title: "Finalize and Download",
                desc: "Click download to save your new PDF. It is optimized for standard 8.5x11 inch paper by default."
            }
        ]
    },
    fr: {
        seo: {
            title: `Convertir EPUB en PDF | Guide Ebook ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Transformez vos ebooks en PDF pour une lecture facile. Notre guide ${CURRENT_YEAR} vous montre comment convertir EPUB localement. Sécurisé, rapide et 100% privé.`
        },
        h1: "Le Guide Ultime : Convertir un EPUB en PDF",
        subtitle: "Transformez vos livres numériques en documents universels, sécurisés et prêts pour l'impression.",
        intro: "Vous cherchez comment convertir un fichier **EPUB en PDF**? Notre outil gratuit vous permet de transformer vos livres numériques en format PDF universel en quelques clics. Que vous soyez un étudiant devant imprimer un manuel numérique pour ses cours ou un professionnel ayant besoin de partager un rapport au format ebook avec des collègues, nous avons la solution. Contrairement aux services basés sur le cloud, notre **convertisseur EPUB vers PDF** traite tout localement, garantissant une confidentialité totale.",
        whyTitle: "Pourquoi convertir un ebook en PDF ?",
        whyReasons: [
            "Compatibilité universelle : Les PDF s'ouvrent sur tous les appareils sans application spéciale.",
            "Impression parfaite : Contrairement aux EPUB, les PDF conservent une mise en page fixe adaptée au papier (Lettre ou A4).",
            "Annotation facilitée : Les outils de commentaires sont plus robustes sur PDF pour le travail collaboratif.",
            "Conservation de la mise en page : Vos polices, images et tableaux resteront exactement là où vous les avez placés.",
            "Partage sécurisé : Idéal pour les soumissions académiques ou gouvernementales au Canada."
        ],
        howTitle: "Anatomie de la Conversion : Du Reflowable au Fixe",
        howDescription: "Le format EPUB est « reflowable », ce qui signifie que le texte s'ajuste à la taille de l'écran. Le PDF est un format « fixe ». Notre moteur de conversion effectue un rendu virtuel de votre livre pour créer une mise en page élégante et lisible sur n'importe quel support.",

        sections: [
            {
                id: "what-is-epub",
                title: "Comprendre les Formats EPUB vs PDF",
                content: `Avant de convertir EPUB en PDF, il est utile de comprendre ce qui rend ces formats différents :

**EPUB (Publication Électronique)** :
- **Format reflowable** : Le texte s'adapte à la taille et l'orientation de l'écran
- **Idéal pour** : Liseuses comme Kindle, Kobo, Apple Books
- **Structure** : Essentiellement un package zippé de HTML, CSS et images
- **Contrôle des polices** : Le lecteur peut ajuster la taille, le type et l'espacement
- **Numéros de page** : Dynamiques—changent selon l'appareil et les paramètres de police

**PDF (Format de Document Portable)** :
- **Mise en page fixe** : Chaque page est identique sur tous les appareils
- **Idéal pour** : Impression, soumissions professionnelles, archivage, annotation
- **Structure** : Document autonome avec polices et images intégrées
- **Contrôle des polices** : Verrouillé—conçu par le créateur
- **Numéros de page** : Fixes—'page 42' est toujours la même sur tous les lecteurs

**Quand convertir EPUB en PDF** :
- Soumissions académiques nécessitant des citations de page (APA, MLA, Chicago)
- Impression de copies physiques ou création de manuscrits reliés
- Révision professionnelle avec références de page fixes
- Portails gouvernementaux ou institutionnels n'acceptant que les PDF
- Annotation avec surlignage pour clubs de lecture ou recherche
- Création de copies d'archivage qui ne se reformateront pas`
            },
            {
                id: "fonctionnement-technique",
                title: "Comment Fonctionne la Conversion EPUB vers PDF (Analyse Technique)",
                content: `Notre convertisseur ne se contente pas d'extraire du texte—il effectue une transformation sophistiquée en plusieurs étapes :

**Étape 1 : Analyse de l'EPUB**
- Décompresse le fichier conteneur .epub
- Lit le fichier OEBPS Container (OPF) pour déterminer l'ordre de lecture
- Extrait les fichiers de contenu HTML/XHTML, feuilles de style CSS et ressources médias
- Identifie l'ordre de la colonne vertébrale (séquence des chapitres)

**Étape 2 : Calcul de Mise en Page**
- Rend chaque chapitre HTML à l'aide du moteur de mise en page du navigateur
- Calcule les sauts de page optimaux (évite les en-têtes orphelins, division d'images)
- Convertit le CSS reflowable en dimensions de page fixes
- Applique la logique de pagination

**Étape 3 : Gestion des Polices**
- **Polices intégrées** : Directement incluses dans le PDF
- **Polices non intégrées** : Substituées par des alternatives open-source de haute qualité
- **Caractères spéciaux** : Support Unicode complet

**Étape 4 : Intégration des Ressources**
- **Images** : Ré-encodées à la résolution appropriée pour l'impression (300 DPI)
- **Graphiques SVG** : Convertis en chemins vectoriels PDF
- **Tableaux** : Reformatés pour s'adapter à la largeur de page
- **Hyperliens** : Liens internes convertis en signets PDF

**Résultat** : Un PDF de qualité professionnelle qui préserve l'intention visuelle de l'ebook tout en offrant la stabilité et l'imprimabilité du format PDF.`
            },
            {
                id: "confidentialite",
                title: "Confidentialité et Sécurité : Pourquoi le Traitement Local Est Important",
                content: `Lors de la conversion d'ebooks en PDF, la confidentialité est primordiale :

**Pourquoi les Convertisseurs en Ligne Sont Risqués** :
1. **Téléversement = Perte de Contrôle** : Votre manuscrit est transmis sur Internet
2. **Stockage sur serveur** : De nombreuses services conservent des copies
3. **Exploration de données** : Les habitudes de lecture peuvent être analysées et vendues
4. **Exposition des droits d'auteur** : Le téléversement d'œuvres protégées pourrait vous exposer légalement
5. **Accès interne** : Les employés du service peuvent accéder à vos fichiers

**Comment pdfcanada.ca Protège Votre Vie Privée** :
- **Zéro téléversement** : Votre fichier EPUB ne quitte jamais votre navigateur
- **Traitement local** : La conversion se fait dans la RAM de votre ordinateur
- **Suppression instantanée** : Lorsque vous fermez l'onglet, toutes les traces disparaissent
- **Aucune journalisation** : Nous ne suivons pas ce que vous convertissez
- **Architecture ouverte** : Les utilisateurs techniquement avertis peuvent inspecter notre code

**Conformité LPRPDE** (Canada) :
- Le traitement local signifie qu'il n'y a pas de collecte de données personnelles
- Aucun formulaire de consentement nécessaire
- Parfait pour les auteurs, chercheurs, avocats gérant des manuscrits confidentiels

**Comparaison** :
| **Fonctionnalité** | **Convertisseurs Cloud** | **pdfcanada.ca** |
|-------------|----------------------|------------------|
| Fichiers téléversés sur serveur | ✗ Oui | ✓ Jamais |
| Rétention de données | ✗ Jours à toujours | ✓ 0 secondes |
| Risque d'accès tiers | ✗ Élevé | ✓ Aucun |
| Fonctionne hors ligne | ✗ Non | ✓ Oui |
| Conforme LPRPDE | ✗ Nécessite confiance | ✓ Garanti |`
            }
        ],

        faq: [
            {
                q: "Comment convertir un fichier EPUB en PDF gratuitement ?",
                a: "Utilisez le convertisseur EPUB en PDF de pdfcanada.ca. Sélectionnez simplement votre fichier .epub, et notre moteur WebAssembly le convertira localement dans votre navigateur sans aucun téléversement. Le processus est 100% gratuit, illimité et ne nécessite pas de compte."
            },
            {
                q: "Puis-je convertir des ebooks protégés par DRM ?",
                a: "Non. Le DRM (Digital Rights Management) est un cryptage qui empêche la copie. Notre convertisseur fonctionne uniquement avec les EPUB sans DRM, tels que : livres achetés sans DRM, livres du domaine public, ou vos propres manuscrits."
            },
            {
                q: "Le PDF ressemblera-t-il exactement à l'ebook ?",
                a: "Nous visons une qualité professionnelle. Nous rendons le contenu EPUB sur des tailles de page standard (Lettre/A4) avec des marges et des numéros de page appropriés, créant une mise en page de type livre idéale pour la lecture et l'impression."
            },
            {
                q: "Est-ce compatible avec les mobiles ?",
                a: "Oui, mais attention à la taille des fichiers. Les gros manuels (>50Mo) sont mieux convertis sur ordinateur en raison de la RAM nécessaire. Les romans standard se convertissent instantanément sur mobile."
            },
            {
                q: "Comment imprimer le PDF converti ?",
                a: "Une fois téléchargé, ouvrez le PDF dans n'importe quel lecteur et sélectionnez Imprimer. Utilisez l'option 'Ajuster à la page' pour préserver les marges."
            }
        ],
        ctaTitle: "Prêt à transformer votre livre ?",
        ctaButton: "Convertir en PDF maintenant",
        quickAnswer: {
            question: "Comment convertir EPUB en PDF ?",
            answer: "Sélectionnez votre fichier .epub sur pdfcanada.ca. Notre outil basé sur navigateur le rendra instantanément en un document PDF imprimable de haute qualité sans téléverser votre fichier sur aucun serveur.",
            tool: "Convertisseur EPUB vers PDF",
            steps: ["Téléversez le fichier EPUB", "Attendez le traitement local", "Téléchargez le PDF"]
        },
        securityTitle: "Traitement Local Sécurisé (Sans Téléversement)",
        securityText: "Vos œuvres littéraires sont précieuses. En utilisant pdfcanada.ca, votre livre ne quitte jamais votre appareil. C'est la solution la plus sûre pour les auteurs et chercheurs soucieux de la protection de leurs données personnelles au Canada.",
        relatedTitle: "Outils de lecture recommandés",
        steps: [
            {
                title: "Sélectionnez votre fichier EPUB",
                desc: "Glissez-déposez votre fichier .epub. Nous supportons les fichiers jusqu'à 100 Mo pour vos manuscrits les plus volumineux."
            },
            {
                title: "Transformation locale",
                desc: "Notre technologie WebAssembly analyse le code HTML interne de l'EPUB et génère un PDF haute-fidélité directement dans votre navigateur."
            },
            {
                title: "Téléchargez votre PDF",
                desc: "Récupérez votre document instantanément. Il est prêt pour le partage, l'archivage ou l'impression."
            }
        ]
    },
    pt: {
        seo: {
            title: `Converter EPUB em PDF | Guia de Ebook Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Transforme seus ebooks em PDFs para leitura fácil. Nosso guia de ${CURRENT_YEAR} mostra como converter EPUB localmente. Seguro, rápido e 100% privado.`
        },
        h1: "O Guia Definitivo: Converter EPUB para PDF",
        subtitle: "Transforme sua biblioteca digital em um formato estável, imprimível e universalmente acessível.",
        intro: "Precisa converter um **EPUB para PDF** para uso profissional ou impressão? Embora o EPUB seja fantástico para e-readers, o formato PDF continua sendo rei para submissões formais, impressão de alta qualidade e documentação corporativa. Seja você um estudante preparando materiais para uma universidade ou um autor independente revisando seu manuscrito, nosso **conversor EPUB para PDF gratuito** oferece um resultado profissional sem os riscos de segurança de concorrentes baseados em nuvem.",
        whyTitle: "Por que PDF em vez de EPUB?",
        whyReasons: [
            "Layout Fixo: Garante que cada tabela, imagem e número de página fique exatamente onde você pretendia.",
            "Impressão Universal: PDFs são suportados nativamente por todas as gráficas e impressoras locais.",
            "Estabilidade Multiplataforma: Um PDF parece o mesmo num iPhone, PC Windows e Linux.",
            "Anotação Avançada: Use ferramentas padrão da indústria para assinar, marcar e destacar documentos.",
            "Acessibilidade: PDFs bem estruturados são mais fáceis de otimizar para leitores de tela."
        ],
        howTitle: "A Ciência da Conversão de Alta Fidelidade",
        howDescription: "Arquivos EPUB são essencialmente sites simplificados (HTML/CSS) compactados. Para converter **EPUB para PDF** com precisão, nosso mecanismo executa um cálculo de layout completo, determina quebras de página apropriadas e incorpora fontes para garantir que o documento resultante seja um retrato estável do seu ebook.",

        sections: [
            {
                id: "what-is-epub",
                title: "Entendendo os Formatos EPUB vs PDF",
                content: `Antes de converter EPUB para PDF, ajuda entender o que torna esses formatos diferentes:

**EPUB (Publicação Eletrônica)**:
- **Formato fluido**: O texto se adapta ao tamanho e orientação da tela
- **Ideal para**: Leitores digitais como Kindle, Kobo, Apple Books
- **Estrutura**: Essencialmente um pacote compactado de HTML, CSS e imagens
- **Controle de fonte**: O leitor pode ajustar tamanho, tipo e espaçamento
- **Números de página**: Dinâmicos—mudam com base no dispositivo e configurações

**PDF (Formato de Documento Portátil)**:
- **Layout fixo**: Cada página parece idêntica em todos os dispositivos
- **Ideal para**: Impressão, submissões profissionais, arquivamento, anotação
- **Estrutura**: Documento independente com fontes e imagens incorporadas
- **Controle de fonte**: Bloqueado—projetado pelo criador
- **Números de página**: Fixos—'página 42' é sempre a mesma em todos os visualizadores

**Quando converter EPUB para PDF**:
- Submissões acadêmicas que exigem citações de página (APA, ABNT)
- Impressão de cópias físicas ou criação de manuscritos encadernados
- Revisão profissional com referências de página fixas
- Portais governamentais ou institucionais que aceitam apenas PDF
- Anotação com destaque e comentários para clubes do livro ou pesquisa`
            },
            {
                id: "privacy-security",
                title: "Privacidade e Segurança: Por que o Processamento Local Importa",
                content: `Ao converter ebooks para PDF, a privacidade é fundamental:

**Por que Conversores Online São Arriscados**:
1. **Upload = Perda de Controle**: Seu manuscrito ou ebook comprado é transmitido pela internet
2. **Armazenamento em Servidor**: Muitos serviços mantêm cópias de uploads
3. **Mineração de Dados**: Hábitos de leitura e conteúdo podem ser analisados
4. **Exposição de Direitos Autorais**: Enviar obras protegidas pode expô-lo legalmente

**Como o pdfcanada.ca Protege Sua Privacidade**:
- **Zero uploads**: Seu arquivo EPUB nunca sai do seu navegador
- **Processamento local**: A conversão acontece na RAM do seu computador usando WebAssembly
- **Exclusão instantânea**: Quando você fecha a aba, todos os vestígios desaparecem
- **Sem registros**: Não rastreamos o que você converte

**Comparação**:
| **Recurso** | **Conversores na Nuvem** | **pdfcanada.ca** |
|-------------|----------------------|------------------|
| Arquivos enviados para servidor | ✗ Sim | ✓ Nunca |
| Retenção de dados | ✗ Dias a sempre | ✓ 0 segundos |
| Risco de acesso de terceiros | ✗ Alto | ✓ Nenhum |
| Funciona offline | ✗ Não | ✓ Sim (após carregar) |`
            }
        ],

        faq: [
            {
                q: "Como converter EPUB para PDF de graça?",
                a: "Use o conversor EPUB para PDF do pdfcanada.ca. Basta selecionar seu arquivo .epub e nosso mecanismo WebAssembly converterá localmente no seu navegador sem nenhum upload. O processo é 100% gratuito e ilimitado."
            },
            {
                q: "Posso converter ebooks protegidos por DRM?",
                a: "Não. O DRM (Gestão de Direitos Digitais) criptografa o arquivo. Travas digitais devem ser removidas (se legal na sua jurisdição) antes da conversão. Nossa ferramenta funciona com EPUBs sem DRM de fontes como Project Gutenberg ou manuscritos próprios."
            },
            {
                q: "O PDF ficará exatamente igual ao ebook?",
                a: "Visamos 'melhor que o original'. Renderizamos o conteúdo EPUB em tamanhos de página padrão (Carta/A4) com margens e números de página adequados, criando um layout de livro ideal para leitura e impressão."
            },
            {
                q: "Isso funciona em dispositivos móveis?",
                a: "Sim, smartphones modernos lidam com a conversão. Manuais grandes (>50MB) são melhor convertidos em desktop devido à RAM necessária. Romances padrão convertem instantaneamente em celulares."
            },
            {
                q: "Como imprimo o PDF convertido?",
                a: "Uma vez baixado, abra o PDF em qualquer visualizador e selecione Imprimir. Use a opção 'Ajustar à Página' para preservar as margens."
            }
        ],
        ctaTitle: "Pronto para transformar seu livro?",
        ctaButton: "Converter para PDF Agora",
        quickAnswer: {
            question: "Como converter EPUB para PDF?",
            answer: "Selecione seu arquivo .epub no pdfcanada.ca. Nossa ferramenta baseada em navegador renderizará instantaneamente um documento PDF imprimível de alta qualidade sem enviar seu arquivo para nenhum servidor.",
            tool: "Conversor EPUB para PDF",
            steps: ["Envie o arquivo EPUB", "Aguarde processamento local", "Baixe o PDF"]
        },
        securityTitle: "Processamento Local Seguro (Sem Uploads)",
        securityText: "Suas obras literárias são preciosas. Ao usar pdfcanada.ca, seu livro nunca sai do seu dispositivo. É a solução mais segura para autores e pesquisadores preocupados com proteção de dados.",
        relatedTitle: "Ferramentas de Leitura Recomendadas",
        steps: [
            {
                title: "Selecione seu arquivo EPUB",
                desc: "Escolha seu arquivo .epub. Suportamos padrões EPUB 2 e EPUB 3, incluindo aqueles com mídia incorporada complexa."
            },
            {
                title: "Renderização Protegida por Privacidade",
                desc: "Nosso mecanismo WebAssembly processa a conversão em um ambiente seguro no seu dispositivo. Sua propriedade intelectual nunca toca nossos servidores."
            },
            {
                title: "Finalize e Baixe",
                desc: "Clique em baixar para salvar seu novo PDF. Ele é otimizado para papel padrão carta por padrão."
            }
        ]
    }
});

export const EpubToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": t.steps.map((step: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.desc
        }))
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/epub-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'en' ? '/' : "/${lang}" },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'EPUB en PDF' : 'EPUB to PDF', path: lang === 'fr' ? '/fr/guides/epub-to-pdf' : '/guides/epub-to-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'en' ? '/' : "/${lang}" },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'EPUB en PDF' : 'EPUB to PDF', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 sm:mb-14 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* How Steps */}
                    <div className="grid md:grid-cols-3 gap-8 my-16">
                        {t.steps.map((step: any, i: number) => (
                            <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-canada-red/5 rounded-full -mr-16 -mt-16 group-hover:bg-canada-red/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700 font-black text-xl text-canada-red">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
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

                    {/* Security Banner */}
                    <div className="my-16 sm:my-20 bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-canada-red opacity-10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
                        <div className="relative z-10 max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Shield className="w-12 h-12 text-canada-red" />
                                <h2 className="text-2xl sm:text-3xl font-black text-white">{t.securityTitle}</h2>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                {t.securityText}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <CheckCircle size={16} className="text-green-500" />
                                    <span className="text-sm font-medium">WebAssembly</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <CheckCircle size={16} className="text-green-500" />
                                    <span className="text-sm font-medium">Local RAM</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <CheckCircle size={16} className="text-green-500" />
                                    <span className="text-sm font-medium">No Uploads</span>
                                </div>
                            </div>
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
                        <Link href={`/${lang}/epub-to-pdf`}
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

                    <RelatedTools lang={lang} currentPath="/guides/epub-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
