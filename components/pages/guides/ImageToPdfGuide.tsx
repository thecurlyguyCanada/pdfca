import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Image, FileImage, Layers, Camera } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string;
}

export const ImageToPdfGuide: React.FC<Props> = ({ lang, slug = 'image-to-pdf' }) => {
    const isJpg = slug.includes('jpg') || slug.includes('jpeg');
    const isPng = slug.includes('png');
    const formatName = isJpg ? 'JPG' : (isPng ? 'PNG' : 'Image');

    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || `${formatName} to PDF`;

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: `Convert ${formatName} images to professional PDF documents instantly and for free`,
                intro: `Need to combine multiple images into a single PDF document? Our free **${toolTitle}** tool transforms your ${formatName} files into polished, professional PDFs perfect for sharing, printing, or archiving.

Whether you're creating a photo album, compiling scanned documents, or preparing a visual presentation, converting images to PDF ensures they're displayed consistently on any device and can be easily shared as a single file.

### Who Needs This Tool?

*   **Photographers**: Create PDF portfolios or client galleries from photo collections.
*   **Students**: Combine assignment pages, notes, or research images into submittal PDFs.
*   **Business Professionals**: Convert receipts, scanned documents, or whiteboard captures to PDF.
*   **Real Estate Agents**: Compile property photos into professional listing documents.
*   **Designers**: Create PDF lookbooks or mood boards from image collections.
*   **Job Seekers**: Combine certificate images or work samples into a single PDF portfolio.`,

                step1Title: `How to Convert ${formatName} to PDF Online`,
                step1Content: `Follow these simple steps to transform your images into a PDF document:

1.  **Select Your Images**: Click the "Select Files" button or drag and drop your ${formatName} images. You can select multiple files at once.

2.  **Arrange Order (Optional)**: Drag images to reorder them. The order you set here determines the page order in your PDF.

3.  **Adjust Settings (Optional)**: Choose page size (Letter, A4, etc.) and orientation (Portrait or Landscape). Select whether images should fill the page or maintain original proportions.

4.  **Click Convert**: Press the "Convert to PDF" button. Processing happens instantly in your browser.

5.  **Download Your PDF**: Once complete, click "Download" to save your new PDF document.

**Pro Tip**: For best results with mixed image sizes, choose "Fit to Page" to ensure all images display cleanly without cropping.`,

                step2Title: "Features & Options",
                step2Content: `Our ${formatName} to PDF converter offers powerful features:

*   **Batch Conversion**: Combine multiple images into a single PDF in one click.
*   **Drag-and-Drop Ordering**: Easily rearrange image order before conversion.
*   **Page Size Options**: Choose from standard sizes (Letter, A4, Legal) or custom dimensions.
*   **Orientation Control**: Select Portrait or Landscape orientation.
*   **Quality Preservation**: Images maintain their original resolution and quality.
*   **100% Private Processing**: Files never leave your browser—perfect for personal photos.
*   **No File Limits**: Convert as many images as you need.
*   **No Watermarks**: Output is completely clean and professional.
*   **Free & Unlimited**: No signup, no daily limits.

**Supported Formats:**
| Format | Extensions | Best For |
|--------|------------|----------|
| JPEG | .jpg, .jpeg | Photos, colorful images |
| PNG | .png | Graphics, screenshots, transparency |
| WebP | .webp | Modern web images |
| GIF | .gif | Simple graphics (first frame) |`,

                step3Title: "Privacy & Security",
                step3Content: `Your personal photos deserve maximum protection:

**Local-First Processing**
Unlike cloud converters that upload files to remote servers, our tool processes everything in your web browser. Your images never leave your device.

**Zero Data Retention**
We don't store or log any of your photos. When you close the browser tab, all data is cleared.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Ideal for Converting:**
*   Personal photos and albums
*   Scanned identity documents
*   Medical images
*   Confidential business documents`,

                step4Title: "Common Use Cases",
                step4Content: `**Photo Albums**
Compile vacation photos, family pictures, or event images into a shareable PDF album.

**Document Scanning**
Combine scanned pages of contracts, receipts, or forms into a single organized PDF.

**Portfolios**
Create professional portfolios of artwork, photography, or design work for clients.

**Assignment Submissions**
Combine handwritten assignment pages or research images into a submission-ready PDF.

**Real Estate Listings**
Create professional property documents with multiple photos.

**Insurance Claims**
Document and compile damage photos into a single PDF for claims.

**Travel Documents**
Combine passport copies, itineraries, and confirmation screenshots into one travel PDF.`,

                step5Title: "Troubleshooting Common Issues",
                step5Content: `**Problem: Images appear stretched or cropped**
*Solution*: Use "Maintain Proportions" option instead of "Fill Page" to preserve original aspect ratios.

**Problem: PDF file is very large**
*Solution*: Large high-resolution images create larger PDFs. Consider using smaller images for web sharing.

**Problem: Image quality looks degraded**
*Solution*: Start with high-resolution source images. Our tool preserves quality but can't enhance low-resolution originals.

**Problem: Images are in wrong order**
*Solution*: Drag and drop images in the preview to rearrange before converting.

**Problem: Some images won't upload**
*Solution*: Ensure images are in supported formats (JPG, PNG, WebP, GIF). Corrupted files may fail.`,

                faqTitle: "Frequently Asked Questions",
                faqContent: `**What image formats are supported?**
We support JPEG (.jpg/.jpeg), PNG, WebP, and GIF formats.

**Can I combine different image sizes?**
Yes! Our tool handles mixed sizes automatically. Choose "Fit to Page" for consistent display.

**Is there a limit on number of images?**
No hard limit, but very large collections (100+ high-resolution images) may be slow.

**Will my images be compressed?**
We preserve original quality. Minimal compression may be applied for optimal PDF size.

**Can I change the page size?**
Yes, choose from Letter, A4, Legal, or other standard sizes.

**Are my photos safe?**
Absolutely. All processing happens locally in your browser. Nothing is uploaded to servers.

**Can I add text or captions?**
This tool focuses on image-to-PDF conversion. For adding text, use our PDF editor.

**What's the maximum file size per image?**
No strict limit, but images over 20MB may slow processing.

**Can I convert images from my phone?**
Yes! Our tool works on mobile browsers. Just tap to select photos.

**Is this tool really free?**
Yes, 100% free with no watermarks or limits.

**Can I password protect the PDF?**
Not directly. After conversion, use our PDF security tool to add password protection.

**Do you support HEIC/HEIF format?**
Currently not directly. Convert HEIC to JPG first using your phone's settings or another tool.`,
                breadGuides: "Guides",
                breadHome: "Home"
            },
            fr: {
                subtitle: `Convertissez des images ${formatName} en documents PDF professionnels instantanément et gratuitement`,
                intro: `Besoin de combiner plusieurs images en un seul document PDF ? Notre outil gratuit **${toolTitle}** transforme vos fichiers ${formatName} en PDF professionnels parfaits pour le partage, l'impression ou l'archivage.

Que vous créiez un album photo, compiliez des documents numérisés ou prépariez une présentation visuelle, convertir des images en PDF garantit qu'elles s'affichent de manière cohérente.

### Qui a besoin de cet outil ?

*   **Photographes** : Créez des portfolios PDF ou des galeries clients.
*   **Étudiants** : Combinez des pages de travaux ou des images de recherche.
*   **Professionnels** : Convertissez des reçus ou des documents numérisés en PDF.
*   **Agents immobiliers** : Compilez des photos de propriétés.
*   **Designers** : Créez des lookbooks ou des moodboards PDF.`,

                step1Title: `Comment convertir ${formatName} en PDF en ligne`,
                step1Content: `Suivez ces étapes simples :

1.  **Sélectionnez vos images** : Cliquez sur « Sélectionner fichiers » ou glissez-déposez vos images.

2.  **Organisez l'ordre** : Glissez les images pour les réorganiser.

3.  **Ajustez les paramètres** : Choisissez la taille de page et l'orientation.

4.  **Cliquez sur Convertir** : Le traitement se fait instantanément.

5.  **Téléchargez votre PDF** : Enregistrez votre nouveau document PDF.

**Conseil** : Utilisez « Ajuster à la page » pour un affichage cohérent.`,

                step2Title: "Fonctionnalités et options",
                step2Content: `Notre convertisseur ${formatName} vers PDF offre :

*   **Conversion par lot** : Combinez plusieurs images en un clic.
*   **Tri par glisser-déposer** : Réorganisez facilement l'ordre.
*   **Options de taille** : Choisissez Lettre, A4, Legal, etc.
*   **Contrôle d'orientation** : Portrait ou Paysage.
*   **Préservation de la qualité** : Les images gardent leur résolution.
*   **Traitement 100% privé** : Les fichiers ne quittent jamais votre navigateur.
*   **Sans filigrane** : Sortie propre et professionnelle.
*   **Gratuit et illimité** : Pas d'inscription, pas de limites.`,

                step3Title: "Confidentialité et sécurité",
                step3Content: `Vos photos personnelles méritent une protection maximale :

**Traitement Local-First**
Notre outil traite tout dans votre navigateur. Vos images ne quittent jamais votre appareil.

**Zéro rétention**
Nous ne stockons aucune photo. Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes.`,

                step4Title: "Cas d'utilisation courants",
                step4Content: `**Albums photo**
Compilez des photos de vacances ou d'événements en album PDF.

**Numérisation de documents**
Combinez des pages numérisées en un seul PDF organisé.

**Portfolios**
Créez des portfolios professionnels de travaux artistiques.

**Soumissions de travaux**
Combinez des pages de travaux manuscrits en PDF.`,

                step5Title: "Dépannage des problèmes courants",
                step5Content: `**Problème : Images étirées ou recadrées**
*Solution* : Utilisez l'option « Maintenir les proportions ».

**Problème : PDF très volumineux**
*Solution* : Les images haute résolution créent des PDF plus gros.

**Problème : Qualité d'image dégradée**
*Solution* : Commencez avec des images source haute résolution.`,

                faqTitle: "Questions fréquentes",
                faqContent: `**Quels formats d'image sont supportés ?**
Nous supportons JPEG, PNG, WebP et GIF.

**Puis-je combiner des images de tailles différentes ?**
Oui ! Notre outil gère automatiquement les tailles mixtes.

**Y a-t-il une limite au nombre d'images ?**
Pas de limite stricte.

**Mes photos sont-elles en sécurité ?**
Absolument. Tout le traitement se fait localement dans votre navigateur.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`,
                breadGuides: "Guides",
                breadHome: "Accueil"
            },
            pt: {
                subtitle: `Converta imagens ${formatName} para documentos PDF profissionais instantaneamente e de graça`,
                intro: `Precisa combinar várias imagens em um único documento PDF? Nossa ferramenta gratuita **${toolTitle}** transforma seus arquivos ${formatName} em PDFs profissionais perfeitos para compartilhamento, impressão ou arquivamento.

Seja criando um álbum de fotos, compilando documentos digitalizados ou preparando uma apresentação visual, converter imagens para PDF garante exibição consistente.

### Quem precisa desta ferramenta?

*   **Fotógrafos**: Crie portfólios PDF ou galerias para clientes.
*   **Estudantes**: Combine páginas de trabalhos ou imagens de pesquisa.
*   **Profissionais de negócios**: Converta recibos ou documentos digitalizados.
*   **Corretores de imóveis**: Compile fotos de propriedades.
*   **Designers**: Crie lookbooks ou moodboards em PDF.`,

                step1Title: `Como converter ${formatName} para PDF online`,
                step1Content: `Siga estes passos simples:

1.  **Selecione suas imagens**: Clique em "Selecionar arquivos" ou arraste e solte suas imagens.

2.  **Organize a ordem**: Arraste as imagens para reorganizar.

3.  **Ajuste as configurações**: Escolha o tamanho da página e orientação.

4.  **Clique em Converter**: O processamento é instantâneo.

5.  **Baixe seu PDF**: Salve seu novo documento PDF.

**Dica**: Use "Ajustar à página" para exibição consistente.`,

                step2Title: "Recursos e opções",
                step2Content: `Nosso conversor ${formatName} para PDF oferece:

*   **Conversão em lote**: Combine várias imagens em um clique.
*   **Ordenação por arrastar e soltar**: Reorganize facilmente a ordem.
*   **Opções de tamanho**: Escolha Carta, A4, Ofício, etc.
*   **Controle de orientação**: Retrato ou Paisagem.
*   **Preservação de qualidade**: Imagens mantêm sua resolução.
*   **Processamento 100% privado**: Arquivos nunca saem do navegador.
*   **Sem marcas d'água**: Saída limpa e profissional.
*   **Gratuito e ilimitado**: Sem cadastro, sem limites.`,

                step3Title: "Privacidade e segurança",
                step3Content: `Suas fotos pessoais merecem máxima proteção:

**Processamento Local-First**
Nossa ferramenta processa tudo no navegador. Suas imagens nunca saem do dispositivo.

**Zero retenção**
Não armazenamos fotos. Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras.`,

                step4Title: "Casos de uso comuns",
                step4Content: `**Álbuns de fotos**
Compile fotos de férias ou eventos em álbum PDF.

**Digitalização de documentos**
Combine páginas digitalizadas em um único PDF organizado.

**Portfólios**
Crie portfólios profissionais de trabalhos artísticos.

**Submissões de trabalhos**
Combine páginas de trabalhos manuscritos em PDF.`,

                step5Title: "Solução de problemas comuns",
                step5Content: `**Problema: Imagens esticadas ou cortadas**
*Solução*: Use a opção "Manter proporções".

**Problema: PDF muito grande**
*Solução*: Imagens de alta resolução criam PDFs maiores.

**Problema: Qualidade de imagem degradada**
*Solução*: Comece com imagens fonte de alta resolução.`,

                faqTitle: "Perguntas frequentes",
                faqContent: `**Quais formatos de imagem são suportados?**
Suportamos JPEG, PNG, WebP e GIF.

**Posso combinar imagens de tamanhos diferentes?**
Sim! Nossa ferramenta lida automaticamente com tamanhos mistos.

**Há limite no número de imagens?**
Sem limite rígido.

**Minhas fotos estão seguras?**
Absolutamente. Todo processamento acontece localmente no navegador.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`,
                breadGuides: "Guias",
                breadHome: "Início"
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: `${toolTitle} | Free ${formatName} to PDF Converter Online | pdfcanada.ca`,
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
    const Icon = isJpg ? Image : (isPng ? Layers : Camera);

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Icon className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
