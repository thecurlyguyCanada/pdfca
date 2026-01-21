import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Image, FileImage, Layers } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string;
}

export const PdfToImageGuide: React.FC<Props> = ({ lang, slug = 'pdf-to-image' }) => {
    const isJpg = slug.includes('jpg') || slug.includes('jpeg');
    const isPng = slug.includes('png');
    const formatName = isJpg ? 'JPG' : (isPng ? 'PNG' : 'Image');

    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || `PDF to ${formatName}`;

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: `Convert PDF pages to high-quality ${formatName} images instantly (Local Processing)`,
                intro: `Need to turn a PDF document into a set of images? Whether you want to share a single slide on Instagram, extract a photo from a report, or just view a document without a PDF reader, our **${toolTitle}** tool is the perfect solution.

We offer two powerful modes:
1.  **Convert Pages:** Renders every single page of your PDF into a standalone image (like taking a high-res screenshot of every page).
2.  **Extract Images:** Digs inside the PDF file to find and save the original embedded photos, ignoring the text and layout.

Best of all, this happens **locally in your browser**. Your confidential documents never travel to a server, ensuring maximum security for legal contracts, medical records, and financial statements.`,

                step1Title: `How to Convert PDF to ${formatName} Online`,
                step1Content: `Follow these steps to get crisp, clear images from your document:

1.  **Upload PDF**: Click "Select PDF file" or drag your document into the box.
2.  **Choose Mode**:
    *   *Convert Pages*: Best if you want the whole page layout (text + images).
    *   *Extract Images*: Best if you just want the photos inside the document.
3.  **Adjust Settings**:
    *   *Format*: **JPG** for photos (smaller size), **PNG** for text/diagrams (sharper quality).
    *   *Quality/DPI*: Use **72 DPI** for web/email, **150 DPI** for screens, or **300 DPI** for printing.
4.  **Click Convert**: The tool processes your file instantly.
5.  **Download**: Get a single image (if 1 page) or a ZIP file containing all your images.

**Pro Tip**: For social media (Instagram/LinkedIn), choose "Convert Pages" and set the quality to at least **150 DPI** to avoid blurriness.`,

                step2Title: "Which Format Should You Choose?",
                step2Content: `Not sure between JPG and PNG? Here is the breakdown:

**Choose JPG (JPEG) if:**
*   Your PDF contains mostly photographs or realistic scenes.
*   You need small file sizes for email or websites.
*   You are okay with tiny amounts of quality loss ("compression artifacts") in exchange for speed.

**Choose PNG if:**
*   Your PDF contains text, line drawings, blueprints, or excel tables.
*   You need **transparent backgrounds** (if extracting images).
*   You need "lossless" quality where every pixel is perfect.
*   You plan to edit the image later in Photoshop or Canva.`,

                step3Title: "Privacy & Security: Local Processing",
                step3Content: `When you use online converters, you often unknowingly upload your private files to a stranger's cloud server. We do it differently.

*   **Local-First Engine**: We use WebAssembly to run the conversion code *inside* your web browser.
*   **Zero Uploads**: Your PDF never leaves your device. It is physically impossible for us to see, read, or steal your data.
*   **Instant Wipe**: As soon as you refresh the page, the data is gone from your memory.`,

                step4Title: "Common Use Cases",
                step4Content: `**Social Media Marketing**
Turn that 10-page "Industry Report" PDF into a 10-image carousel for LinkedIn or Instagram.

**Presentation Design**
Extract charts and graphs from a competitor's PDF report to use in your own internal PowerPoint (referencing them, of course!).

**Website Content**
Convert PDF brochures into JPGs so they can be displayed directly on your website without requiring users to download a viewer.

**Archiving**
Convert legacy documents to standard image formats (TIFF/PNG) for long-term archival where PDF compatibility might be a concern.`,

                step5Title: "Troubleshooting Guide",
                step5Content: `**Problem: The text looks fuzzy/blurry.**
*   *Cause:* Low DPI setting.
*   *Fix:* Re-convert and choose **150 DPI** or **300 DPI**.

**Problem: The file size is huge.**
*   *Cause:* High DPI + PNG format.
*   *Fix:* Switch to **JPG** format and lower the DPI to 72 or 96 if it's just for the web.

**Problem: "Extract Images" gave me weird fragmented pictures.**
*   *Cause:* PDFs often slice large images into small grid tiles to save load time.
*   *Fix:* Use **Convert Pages** mode instead, then crop the image you need from the full page.

**Problem: Colors look slightly washed out.**
*   *Cause:* The PDF was likely in CMYK (print colors).
*   *Fix:* Our tool converts to sRGB for screen compatibility, which can cause slight shifts. This is normal for web browsers.`,

                faqTitle: "Frequently Asked Questions",
                faqContent: `**Can I convert all pages at once?**
Yes. Our tool automatically processes every page in the document and zips them up for you.

**Is there a limit on file size?**
No hard limit, but extremely large files (200MB+) might crash your browser tab since we process locally.

**Can I extract images from a password-protected PDF?**
Yes, but you must enter the password first to unlock the file for processing.

**Do you support vector (SVG) export?**
Currently, we export to raster formats (JPG/PNG). For vector export, you would need a specialized editor like Illustrator.

**Will the converted images have watermarks?**
Never. Your images are yours. We do not add any branding or watermarks.

**How do I save just one page?**
After uploading, you can deselect the pages you don't want, or just download the specific image file from the result list.`
            },
            fr: {
                subtitle: `Convertissez des pages PDF en images ${formatName} haute qualité instantanément (Traitement Local)`,
                intro: `Besoin de transformer un PDF en une série d'images ? Que vous souhaitiez partager une diapositive sur Instagram ou extraire une photo d'un rapport, notre outil **${toolTitle}** est la solution idéale.

Nous offrons deux modes puissants :
1.  **Convertir les Pages :** Transforme chaque page du PDF en une image autonome (comme une capture d'écran haute définition).
2.  **Extraire les Images :** Fouille dans le fichier pour trouver et sauvegarder les photos originales intégrées.

Le tout se fait **localement dans votre navigateur**. Vos documents confidentiels ne voyagent jamais vers un serveur.`,

                step1Title: `Comment convertir PDF en ${formatName} en ligne`,
                step1Content: `Suivez ces étapes pour obtenir des images nettes :

1.  **Télécharger** : Cliquez sur "Sélectionner fichier PDF" ou glissez votre document.
2.  **Choisir le Mode** :
    *   *Convertir les Pages* : Pour garder la mise en page (texte + images).
    *   *Extraire les Images* : Pour récupérer juste les photos.
3.  **Réglages** :
    *   *Format* : **JPG** pour photos, **PNG** pour texte/graphiques.
    *   *Qualité* : **72 DPI** (Web), **150 DPI** (Écran), **300 DPI** (Impression).
4.  **Convertir** : L'outil traite votre fichier instantanément.
5.  **Télécharger** : Obtenez une image unique ou un fichier ZIP.

**Astuce Pro** : Pour les réseaux sociaux, utilisez "Convertir les Pages" à **150 DPI** minimum.`,

                step2Title: "Quel format choisir ?",
                step2Content: `JPG ou PNG ? Voici le guide :

**Choisissez JPG (JPEG) si :**
*   Votre PDF contient surtout des photos.
*   Vous voulez des fichiers légers pour le web.
*   Une perte de qualité minime est acceptable.

**Choisissez PNG si :**
*   Votre PDF contient du texte, des plans ou des tableaux.
*   Vous avez besoin de **fonds transparents**.
*   Vous voulez une qualité "sans perte" parfaite.`,

                step3Title: "Confidentialité : Traitement Local",
                step3Content: `La plupart des convertisseurs envoient vos fichiers sur le cloud. Pas nous.

*   **Moteur Local** : Nous utilisons WebAssembly pour exécuter le code *dans* votre navigateur.
*   **Zéro Upload** : Votre PDF ne quitte jamais votre appareil.
*   **Effacement Instantané** : Rafraîchissez la page, et les données disparaissent.`,

                step4Title: "Cas d'utilisation courants",
                step4Content: `**Marketing social**
Transformez un rapport de 10 pages en un carrousel de 10 images pour LinkedIn.

**Design de présentation**
Extrayez des graphiques d'un rapport concurrent pour vos propres présentations PowerPoint.

**Contenu Web**
Convertissez des brochures PDF en JPG pour les afficher directement sur votre site sans téléchargement.

**Archivage**
Convertissez des vieux documents en formats d'image standard (PNG) pour la pérennité.`,

                step5Title: "Guide de dépannage",
                step5Content: `**Problème : Le texte est flou.**
*   *Cause :* Réglage DPI trop bas.
*   *Solution :* Reconvertissez en **150 DPI** ou plus.

**Problème : Le fichier est énorme.**
*   *Cause :* DPI élevé + format PNG.
*   *Solution :* Passez en **JPG** et réduisez le DPI.

**Problème : "Extraire Images" donne des images coupées.**
*   *Cause :* Les PDF découpent souvent les grandes images en tuiles.
*   *Solution :* Utilisez le mode **Convertir les Pages** et recadrez ensuite.

**Problème : Couleurs ternes.**
*   *Cause :* Conversion CMJN vers RVB.
*   *Solution :* C'est normal pour l'affichage web.`,

                faqTitle: "Questions fréquemment posées",
                faqContent: `**Puis-je convertir tout le document ?**
Oui. L'outil traite toutes les pages et crée un ZIP.

**Y a-t-il une limite de taille ?**
Pas de limite stricte, mais les fichiers de 200Mo+ peuvent ralentir votre navigateur.

**Puis-je convertir un PDF protégé ?**
Oui, si vous avez le mot de passe pour le déverrouiller.

**Supportez-vous le vectoriel (SVG) ?**
Non, nous exportons en raster (JPG/PNG).

**Y a-t-il des filigranes ?**
Jamais. Vos images restent propres.`
            },
            pt: {
                subtitle: `Converta páginas PDF para imagens ${formatName} de alta qualidade instantaneamente (Processamento Local)`,
                intro: `Precisa transformar um PDF em um conjunto de imagens? Seja para compartilhar um slide no Instagram, extrair uma foto de um relatório ou apenas visualizar um documento, nossa ferramenta **${toolTitle}** é a solução perfeita.

Oferecemos dois modos poderosos:
1.  **Converter Páginas:** Renderiza cada página do PDF em uma imagem (como um print de alta qualidade).
2.  **Extraire Imagens:** Garimpa o arquivo para encontrar e salvar as fotos originais incorporadas.

Tudo acontece **localmente no seu navegador**. Seus documentos confidenciais nunca viajam para um servidor, garantindo segurança máxima.`,

                step1Title: `Como converter PDF para ${formatName} online`,
                step1Content: `Siga estes passos para obter imagens nítidas:

1.  **Enviar PDF**: Clique em "Selecionar arquivo PDF" ou arraste seu documento.
2.  **Escolher Modo**:
    *   *Converter Páginas*: Para manter o layout (texto + imagens).
    *   *Extrair Imagens*: Para pegar apenas as fotos.
3.  **Configurações**:
    *   *Formato*: **JPG** para fotos, **PNG** para texto/gráficos.
    *   *Qualidade*: **72 DPI** (Web), **150 DPI** (Tela), **300 DPI** (Impressão).
4.  **Converter**: A ferramenta processa seu arquivo instantaneamente.
5.  **Baixar**: Obtenha uma imagem única ou um arquivo ZIP.

**Dica Pro**: Para redes sociais, escolha "Converter Páginas" com qualidade de pelo menos **150 DPI**.`,

                step2Title: "Qual formato escolher?",
                step2Content: `JPG ou PNG? Eis o guia:

**Escolha JPG (JPEG) se:**
*   Seu PDF contém principalmente fotos.
*   Você precisa de arquivos pequenos para web.
*   Aceita uma perda mínima de qualidade.

**Escolha PNG se:**
*   Seu PDF contém texto, plantas ou tabelas.
*   Precisa de **fundo transparente**.
*   Precisa de qualidade "lossless" perfeita.`,

                step3Title: "Privacidade: Processamento Local",
                step3Content: `A maioria dos conversores envia seus arquivos para a nuvem. Nós não.

*   **Motor Local**: Usamos WebAssembly para rodar a conversão *dentro* do seu navegador.
*   **Zero Upload**: Seu PDF nunca sai do seu dispositivo.
*   **Limpeza Instantânea**: Atualize a página e os dados somem.`,

                step4Title: "Casos de Uso Comuns",
                step4Content: `**Marketing Social**
Transforme um relatório de 10 páginas em um carrossel de 10 imagens para LinkedIn.

**Design de Apresentação**
Extraia gráficos de um relatório concorrente para seu PowerPoint.

**Conteúdo Web**
Converta brochuras PDF em JPG para exibir no seu site sem downloads.

**Arquivamento**
Converta documentos antigos para formatos de imagem padrão (PNG) para preservação.`,

                step5Title: "Guia de Solução de Problemas",
                step5Content: `**Problema: Texto borrado.**
*   *Causa:* Configuração de DPI baixa.
*   *Solução:* Reconverta em **150 DPI** ou mais.

**Problema: Arquivo enorme.**
*   *Causa:* DPI alto + formato PNG.
*   *Solução:* Mude para **JPG** e reduza o DPI.

**Problema: "Extrair Imagens" gerou pedaços cortados.**
*   *Causa:* PDFs cortam imagens grandes em pedaços para carregar rápido.
*   *Solução:* Use o modo **Converter Páginas** e corte a imagem depois.

**Problema: Cores lavadas.**
*   *Causa:* Conversão CMYK para RGB.
*   *Solução:* Normal para navegadores web.`,

                faqTitle: "Perguntas Frequentes",
                faqContent: `**Posso converter todas as páginas?**
Sim. A ferramenta processa todas e cria um ZIP.

**Há limite de tamanho?**
Sem limite rígido, mas arquivos de 200MB+ podem pesar no navegador.

**Posso converter PDF protegido?**
Sim, se tiver a senha para desbloquear.

**Suportam vetorial (SVG)?**
Não, exportamos em raster (JPG/PNG).

**Haverá marcas d'água?**
Nunca. Suas imagens ficam limpas.`
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: `${toolTitle} | Free PDF to ${formatName} Converter Online | pdfcanada.ca`,
            seoDesc: content.subtitle,
            title: toolTitle,
            subtitle: content.subtitle,
            breadcrumbHome: l === 'pt' ? 'Início' : (l === 'fr' ? 'Accueil' : 'Home'),
            breadcrumbGuides: l === 'pt' ? 'Guias' : 'Guides',
            breadcrumbTool: toolTitle,
            intro: content.intro,
            sections: [
                { id: 'how-to', title: content.step1Title, content: content.step1Content },
                { id: 'mode-select', title: content.step2Title, content: content.step2Content },
                { id: 'privacy', title: content.step3Title, content: content.step3Content },
                { id: 'use-cases', title: content.step4Title, content: content.step4Content },
                { id: 'troubleshooting', title: content.step5Title, content: content.step5Content },
                { id: 'faq', title: content.faqTitle, content: content.faqContent }
            ]
        };
    };

    const guideContent = getLocalContent(lang);
    const Icon = isJpg ? Image : (isPng ? Layers : FileImage);

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Icon className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
