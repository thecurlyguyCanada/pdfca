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
                subtitle: `Convert PDF pages to high-quality ${formatName} images instantly and for free`,
                intro: `Need to extract images from a PDF or convert entire pages to ${formatName} format? Our free **${toolTitle}** tool transforms your PDF documents into high-quality image files that are perfect for sharing, editing, or archiving.

Whether you're extracting slides for a presentation, saving document pages for social media, or creating images from PDF content for your website, our converter delivers crisp, clear results—all processed locally in your browser for maximum privacy.

### Who Needs This Tool?

*   **Social Media Managers**: Convert PDF content into shareable images for Instagram, Twitter, or LinkedIn.
*   **Presenters & Educators**: Extract slides or diagrams for use in presentations.
*   **Web Designers**: Create images from PDF designs for websites and portfolios.
*   **Content Creators**: Turn PDF infographics into separate image files.
*   **Archivists**: Save documents as universal image formats for long-term storage.
*   **Researchers**: Extract figures and charts from academic papers.`,

                step1Title: `How to Convert PDF to ${formatName} Online`,
                step1Content: `Follow these simple steps to transform your PDF pages into ${formatName} images:

1.  **Upload Your PDF**: Click "Select PDF file" or drag and drop your PDF document into the upload area.

2.  **Choose Conversion Mode**: Select either:
    - **"Convert Pages"**: Transforms each PDF page into a separate image
    - **"Extract Images"**: Finds and extracts embedded images from the PDF

3.  **Select Pages (Optional)**: Choose specific pages to convert, or convert the entire document.

4.  **Adjust Quality Settings**: Select your preferred resolution (72-300 DPI) and image format (JPG or PNG).

5.  **Click Convert**: Press the "Convert" button. Processing happens instantly in your browser.

6.  **Download**: Get your images as individual files or as a ZIP archive for bulk downloads.

**Pro Tip**: Use PNG format for documents with text or line art (sharper edges), and JPG for photos or pages with many colors (smaller file size).`,

                step2Title: "Features & Quality Options",
                step2Content: `Our PDF to ${formatName} converter offers powerful features:

*   **High Resolution Output**: Choose from 72 DPI (web) to 300 DPI (print quality) resolution.
*   **Multiple Format Options**: Export as JPG (smaller files) or PNG (higher quality, transparency support).
*   **Page Selection**: Convert all pages or choose specific page ranges.
*   **Batch Processing**: Convert multi-page PDFs into separate images in seconds.
*   **Extract Embedded Images**: Find and save images already inside your PDF.
*   **100% Private**: Files never leave your browser—ideal for sensitive documents.
*   **No Watermarks**: Output is completely clean and professional.
*   **Free & Unlimited**: No signup, no daily limits.

**JPG vs PNG:**
| Feature | JPG | PNG |
|---------|-----|-----|
| File Size | Smaller | Larger |
| Quality | Good (lossy) | Excellent (lossless) |
| Best For | Photos, colorful pages | Text, diagrams, screenshots |
| Transparency | ❌ No | ✅ Yes |`,

                step3Title: "Privacy & Security",
                step3Content: `Your documents deserve maximum protection:

**Local-First Processing**
Unlike cloud converters that upload files to remote servers, our tool processes everything in your web browser. Your PDF files never leave your device.

**Zero Data Retention**
We don't store or log any of your documents. When you close the browser tab, all data is cleared.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Ideal for Converting:**
*   Confidential business documents
*   Financial statements
*   Medical records
*   Legal contracts`,

                step4Title: "Common Use Cases",
                step4Content: `**Social Media Content**
Convert PDF infographics, reports, or presentations into images optimized for social platforms.

**Website Images**
Extract high-quality images from PDF portfolios or brochures for your website.

**Presentation Slides**
Turn PDF pages into images to insert into PowerPoint, Google Slides, or Keynote.

**Thumbnail Generation**
Create preview images for PDF documents in document management systems.

**E-commerce Product Images**
Extract product images from PDF catalogs.

**Academic Figures**
Save charts, graphs, and figures from research papers for presentations or reports.`,

                step5Title: "Troubleshooting Common Issues",
                step5Content: `**Problem: Images look blurry**
*Solution*: Increase the DPI setting. Use 150-300 DPI for print quality, 72-96 DPI for web use only.

**Problem: Text edges look jagged**
*Solution*: Use PNG format instead of JPG for documents with text. PNG preserves sharp edges.

**Problem: File sizes are too large**
*Solution*: Use JPG format with lower quality settings for smaller files. Reduce DPI for web use.

**Problem: Some pages aren't converting**
*Solution*: Check for password protection on the PDF. Remove protection before converting.

**Problem: Conversion is slow**
*Solution*: Large PDFs with many high-resolution images take longer. Close other tabs to free memory.`,

                faqTitle: "Frequently Asked Questions",
                faqContent: `**What is the difference between JPG and PNG?**
JPG uses lossy compression (smaller files, slight quality loss), best for photos. PNG is lossless (larger files, perfect quality), best for text and graphics.

**What DPI should I use?**
72-96 DPI for web viewing, 150 DPI for general use, 300 DPI for printing.

**Can I convert password-protected PDFs?**
Yes, but you'll need to enter the password first.

**Is there a page limit?**
No hard limit. We've tested with 500+ page documents.

**Can I extract just the images inside a PDF?**
Yes! Use "Extract Images" mode to find and save embedded pictures.

**Will the quality match the original PDF?**
Yes, at 300 DPI. Higher resolution than the original PDF won't add quality.

**Can I convert multiple PDFs at once?**
Currently one file at a time, but multi-page PDFs are processed in batch.

**What's the maximum file size?**
No strict limit, but very large files (100+ MB) may be slow in the browser.

**Do you preserve transparency?**
PNG format supports transparency. JPG fills transparent areas with white.

**Is this tool really free?**
Yes, 100% free with no watermarks or limits.

**Can I edit the images after conversion?**
Yes! Import them into any image editor like Photoshop, GIMP, or Canva.

**Do you support PDF/A (archival format)?**
Yes, PDF/A files convert just like regular PDFs.`,
                breadGuides: "Guides",
                breadHome: "Home"
            },
            fr: {
                subtitle: `Convertissez des pages PDF en images ${formatName} de haute qualité instantanément et gratuitement`,
                intro: `Besoin d'extraire des images d'un PDF ou de convertir des pages entières au format ${formatName} ? Notre outil gratuit **${toolTitle}** transforme vos documents PDF en fichiers image de haute qualité.

Que vous extrayiez des diapositives pour une présentation, sauvegardiez des pages de documents pour les réseaux sociaux, ou créiez des images à partir de contenu PDF, notre convertisseur livre des résultats nets—tout est traité localement dans votre navigateur.

### Qui a besoin de cet outil ?

*   **Community Managers** : Convertissez du contenu PDF en images partageables.
*   **Présentateurs et éducateurs** : Extrayez des diapositives pour vos présentations.
*   **Designers Web** : Créez des images à partir de designs PDF.
*   **Créateurs de contenu** : Transformez des infographies PDF en fichiers image séparés.
*   **Archivistes** : Sauvegardez des documents dans des formats d'image universels.`,

                step1Title: `Comment convertir PDF en ${formatName} en ligne`,
                step1Content: `Suivez ces étapes simples :

1.  **Téléchargez votre PDF** : Cliquez sur « Sélectionner fichier PDF » ou glissez-déposez votre document.

2.  **Choisissez le mode** : 
    - **« Convertir les pages »** : Transforme chaque page en image séparée
    - **« Extraire les images »** : Trouve et extrait les images intégrées

3.  **Sélectionnez les pages** : Choisissez des pages spécifiques ou convertissez tout.

4.  **Ajustez la qualité** : Sélectionnez la résolution (72-300 DPI) et le format.

5.  **Cliquez sur Convertir** : Le traitement se fait instantanément.

6.  **Téléchargez** : Obtenez vos images individuellement ou en archive ZIP.

**Conseil** : Utilisez PNG pour le texte (bords nets), JPG pour les photos (taille réduite).`,

                step2Title: "Fonctionnalités et options de qualité",
                step2Content: `Notre convertisseur PDF vers ${formatName} offre :

*   **Haute résolution** : De 72 DPI (web) à 300 DPI (qualité impression).
*   **Plusieurs formats** : Exportez en JPG ou PNG.
*   **Sélection de pages** : Toutes les pages ou plages spécifiques.
*   **Traitement par lot** : Convertissez des PDF multi-pages en secondes.
*   **Extraction d'images** : Trouvez et sauvegardez les images intégrées.
*   **100% privé** : Les fichiers ne quittent jamais votre navigateur.
*   **Sans filigrane** : Sortie propre et professionnelle.
*   **Gratuit et illimité** : Pas d'inscription, pas de limites.`,

                step3Title: "Confidentialité et sécurité",
                step3Content: `Vos documents méritent une protection maximale :

**Traitement Local-First**
Notre outil traite tout dans votre navigateur. Vos fichiers PDF ne quittent jamais votre appareil.

**Zéro rétention**
Nous ne stockons aucun document. Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes.`,

                step4Title: "Cas d'utilisation courants",
                step4Content: `**Contenu réseaux sociaux**
Convertissez des infographies PDF en images pour les plateformes sociales.

**Images pour sites web**
Extrayez des images de portfolios PDF pour votre site.

**Diapositives de présentation**
Transformez des pages PDF en images pour PowerPoint.

**Génération de vignettes**
Créez des aperçus pour vos systèmes de gestion documentaire.`,

                step5Title: "Dépannage des problèmes courants",
                step5Content: `**Problème : Images floues**
*Solution* : Augmentez le réglage DPI. 150-300 DPI pour l'impression.

**Problème : Texte dentelé**
*Solution* : Utilisez le format PNG au lieu de JPG.

**Problème : Fichiers trop volumineux**
*Solution* : Utilisez JPG avec des réglages de qualité plus bas.`,

                faqTitle: "Questions fréquentes",
                faqContent: `**Quelle différence entre JPG et PNG ?**
JPG = compression avec perte, fichiers plus petits. PNG = sans perte, qualité parfaite.

**Quel DPI utiliser ?**
72-96 pour le web, 150 pour usage général, 300 pour l'impression.

**Y a-t-il une limite de pages ?**
Pas de limite stricte. Testé avec plus de 500 pages.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`,
                breadGuides: "Guides",
                breadHome: "Accueil"
            },
            pt: {
                subtitle: `Converta páginas PDF para imagens ${formatName} de alta qualidade instantaneamente e de graça`,
                intro: `Precisa extrair imagens de um PDF ou converter páginas inteiras para formato ${formatName}? Nossa ferramenta gratuita **${toolTitle}** transforma seus documentos PDF em arquivos de imagem de alta qualidade.

Seja extraindo slides para uma apresentação, salvando páginas para redes sociais, ou criando imagens de conteúdo PDF, nosso conversor entrega resultados nítidos—tudo processado localmente no seu navegador.

### Quem precisa desta ferramenta?

*   **Gerentes de redes sociais**: Converta conteúdo PDF em imagens compartilháveis.
*   **Apresentadores e educadores**: Extraia slides para apresentações.
*   **Web designers**: Crie imagens de designs PDF para sites.
*   **Criadores de conteúdo**: Transforme infográficos PDF em arquivos de imagem.
*   **Arquivistas**: Salve documentos em formatos de imagem universais.`,

                step1Title: `Como converter PDF para ${formatName} online`,
                step1Content: `Siga estes passos simples:

1.  **Envie seu PDF**: Clique em "Selecionar arquivo PDF" ou arraste e solte seu documento.

2.  **Escolha o modo**:
    - **"Converter páginas"**: Transforma cada página em imagem separada
    - **"Extrair imagens"**: Encontra e extrai imagens incorporadas

3.  **Selecione páginas**: Escolha páginas específicas ou converta todo o documento.

4.  **Ajuste a qualidade**: Selecione a resolução (72-300 DPI) e formato.

5.  **Clique em Converter**: O processamento é instantâneo.

6.  **Baixe**: Obtenha suas imagens individualmente ou em arquivo ZIP.

**Dica**: Use PNG para texto (bordas nítidas), JPG para fotos (menor tamanho).`,

                step2Title: "Recursos e opções de qualidade",
                step2Content: `Nosso conversor PDF para ${formatName} oferece:

*   **Alta resolução**: De 72 DPI (web) a 300 DPI (qualidade de impressão).
*   **Múltiplos formatos**: Exporte como JPG ou PNG.
*   **Seleção de páginas**: Todas as páginas ou intervalos específicos.
*   **Processamento em lote**: Converta PDFs com várias páginas em segundos.
*   **Extração de imagens**: Encontre e salve imagens incorporadas.
*   **100% privado**: Arquivos nunca saem do navegador.
*   **Sem marcas d'água**: Saída limpa e profissional.
*   **Gratuito e ilimitado**: Sem cadastro, sem limites.`,

                step3Title: "Privacidade e segurança",
                step3Content: `Seus documentos merecem máxima proteção:

**Processamento Local-First**
Nossa ferramenta processa tudo no navegador. Seus arquivos PDF nunca saem do dispositivo.

**Zero retenção**
Não armazenamos documentos. Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras.`,

                step4Title: "Casos de uso comuns",
                step4Content: `**Conteúdo para redes sociais**
Converta infográficos PDF em imagens para plataformas sociais.

**Imagens para sites**
Extraia imagens de portfólios PDF para seu site.

**Slides de apresentação**
Transforme páginas PDF em imagens para PowerPoint.

**Geração de miniaturas**
Crie prévias para sistemas de gestão documental.`,

                step5Title: "Solução de problemas comuns",
                step5Content: `**Problema: Imagens borradas**
*Solução*: Aumente a configuração de DPI. 150-300 DPI para impressão.

**Problema: Texto serrilhado**
*Solução*: Use formato PNG em vez de JPG.

**Problema: Arquivos muito grandes**
*Solução*: Use JPG com configurações de qualidade mais baixas.`,

                faqTitle: "Perguntas frequentes",
                faqContent: `**Qual a diferença entre JPG e PNG?**
JPG = compressão com perda, arquivos menores. PNG = sem perda, qualidade perfeita.

**Qual DPI usar?**
72-96 para web, 150 para uso geral, 300 para impressão.

**Há limite de páginas?**
Sem limite rígido. Testado com mais de 500 páginas.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`,
                breadGuides: "Guias",
                breadHome: "Início"
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: `${toolTitle} | Free PDF to ${formatName} Converter Online | pdfcanada.ca`,
            seoDesc: content.subtitle,
            title: toolTitle,
            subtitle: content.subtitle,
            breadcrumbHome: content.breadHome,
            breadcrumbGuides: content.breadGuides,
            breadcrumbTool: toolTitle,
            intro: content.intro,
            sections: [
                { id: 'how-to', title: content.step1Title, content: content.step1Content },
                { id: 'features', title: content.step2Title, content: content.step2Content },
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
