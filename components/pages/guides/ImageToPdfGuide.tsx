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
                subtitle: `Convert ${formatName} images to professional PDF documents instantly (Local Processing)`,
                intro: `Need to combine multiple ${formatName} images into a single, shareable PDF file? Our **${toolTitle}** tool transforms your scattered photos, screenshots, and scans into a polished digital document.

Why convert images to PDF?
1.  **Consolidation:** Send one file instead of 20 separate email attachments.
2.  **Standardization:** Ensure your resume or portfolio looks exactly the same on every screen.
3.  **Printing:** Lock in the print layout (A4/Letter) so your printer doesn't crop your photos awkwardly.

Unlike most free tools, we process your images **locally in your browser**. This means your private photos (family memories, ID cards, receipts) never leave your computer.`,

                step1Title: `How to Convert ${formatName} to PDF Online`,
                step1Content: `Follow these simple steps to build your custom PDF:

1.  **Select Images**: Click "Select Files" or drag your images (JPG, PNG, WEBP, GIF) into the drop zone. You can select hundreds of images at once.
2.  **Reorder Pages**: Drag and drop the thumbnails to arrange the sequence. The order you see is exactly how the pages will appear in the PDF.
3.  **Customize Layout**:
    *   *Orientation*: Choose **Portrait** (vertical) for documents or **Landscape** (horizontal) for wide photos.
    *   *Margin*: Add "Small" or "Big" margins if you plan to print and bind the document.
    *   *Fit*: Use "Fit to Page" to stretch images to the edge, or "Center" to keep original size.
4.  **Click Convert**: The tool stitches your images together instantly.
5.  **Download**: Save your combined PDF file to your device.

**Pro Tip**: For the highest quality "Photo Book" feel, use **Landscape** orientation and select "Fit to Page" with "No Margins".`,

                step2Title: "Advanced Features for Professionals",
                step2Content: `This isn't just a basic converter. It includes features for power users:

**1. Intelligent Auto-Rotation**
The tool detects if an image is wider than it is tall and can suggest the best orientation to minimize whitespace.

**2. Transparency Handling (PNG)**
If you convert transparent PNG icons, our tool automatically flattens them against a clean white background, ensuring they look perfect in PDF viewers that struggle with transparency.

**3. Mixed Format Support**
You don't need to convert everything to JPG first. Throw in a mix of PNG screenshots, JPG photos, and WebP downloads—we handle them all in one batch.

**4. High-DPI Preservation**
We respect the resolution of your source images. If you upload a 4K photo, it remains crisp in the PDF, making it suitable for professional printing.`,

                step3Title: "Privacy & Security: Your Photos Stay Yours",
                step3Content: `We understand that images can be personal.

*   **No Server Uploads:** Unlike other sites that store your photos for 1-24 hours, our tool uses pure JavaScript to generate the PDF *inside* your browser tab.
*   **Zero Visibility:** We cannot see, view, or mine your images.
*   **Ideal for Sensitive Docs:** Perfect for scanning passports, driver's licenses, or medical records where privacy is critical.`,

                step4Title: "Common Use Cases",
                step4Content: `**Digital Portfolios**
Photographers and designers can combine their best shots into a single, sleek PDF portfolio to email to clients.

**Expense Reporting**
Freelancers can snap photos of 50 receipts and merge them into one "Expenses.pdf" file for tax season in seconds.

**Legal & Real Estate**
Agents can compile property photos into a listing packet, or combine scanned contract pages into a signed agreement.

**Classroom Submissions**
Students can take photos of handwritten homework pages and convert them into a single file for submission on Blackboard or Canvas.`,

                step5Title: "Troubleshooting & Tips",
                step5Content: `**Problem: My images are cut off at the edges.**
*   *Cause:* The aspect ratio of your photo doesn't match the PDF page (A4/Letter).
*   *Fix:* Choose "Fit to Page" (adds white bars) instead of "Fill Page" (crops image).

**Problem: The PDF file size is massive.**
*   *Cause:* You uploaded raw 20MP photos.
*   *Fix:* Use our **Compress PDF** tool immediately after conversion to optimize the file for email without noticeable quality loss.

**Problem: Colors look slightly different.**
*   *Cause:* Screen images are RGB, but some PDF viewers simulate CMYK print colors.
*   *Fix:* This is usually a viewer setting. The image data itself usually remains RGB.

**Problem: I can't upload HEIC files (iPhone).**
*   *Cause:* Browsers don't natively support Apple's HEIC format yet.
*   *Fix:* Convert your HEIC photos to JPG on your phone before uploading, or take screenshots of them.`,

                faqTitle: "Frequently Asked Questions",
                faqContent: `**What is the maximum number of images?**
There is no hard limit. We've optimized the tool to handle 100+ images in a single batch, relying on your computer's RAM.

**Can I add text captions to the photos?**
This tool is strictly for conversion. To add text, page numbers, or captions, convert to PDF first, then use our **Edit PDF** tool.

**Does this support CMYK images for print?**
We recommend converting images to RGB before uploading for the most consistent color results, as browser support for CMYK rendering varies.

**Can I convert back to images later?**
Yes! Use our **PDF to JPG** tool to extract the original images from the PDF if you lose the source files.

**Will GIF animations play in the PDF?**
No. PDF is a static format. Only the first frame of the GIF will be captured as a still image.`
            },
            fr: {
                subtitle: `Convertissez des images ${formatName} en documents PDF professionnels instantanément (Traitement Local)`,
                intro: `Besoin de combiner plusieurs images ${formatName} en un seul fichier PDF partageable ? Notre outil **${toolTitle}** transforme vos photos, captures d'écran et numérisations en un document numérique soigné.

Pourquoi convertir des images en PDF ?
1.  **Consolidation :** Envoyez un seul fichier au lieu de 20 pièces jointes.
2.  **Standardisation :** Assurez que votre CV ou portfolio apparaît identique sur chaque écran.
3.  **Impression :** Verrouillez la mise en page (A4/Lettre) pour éviter les coupures imprévues.

Contrairement à la plupart des outils gratuits, nous traitons vos images **localement dans votre navigateur**. Vos photos privées ne quittent jamais votre ordinateur.`,

                step1Title: `Comment convertir ${formatName} en PDF en ligne`,
                step1Content: `Suivez ces étapes simples pour créer votre PDF personnalisé :

1.  **Sélectionnez les images** : Cliquez sur "Sélectionner des fichiers" ou glissez vos images (JPG, PNG, WEBP, GIF).
2.  **Réorganisez les pages** : Glissez-déposez les vignettes pour définir l'ordre d'apparition.
3.  **Personnalisez la mise en page** :
    *   *Orientation* : **Portrait** (vertical) ou **Paysage** (horizontal).
    *   *Marges* : Ajoutez des marges si vous prévoyez d'imprimer et relier.
    *   *Ajustement* : Utilisez "Ajuster à la page" pour tout voir, ou "Remplir" pour éliminer le blanc.
4.  **Cliquez sur Convertir** : L'outil assemble vos images instantanément.
5.  **Télécharger** : Enregistrez votre fichier PDF combiné.

**Astuce Pro** : Pour un effet "Album Photo", utilisez l'orientation **Paysage** et l'option "Sans marges".`,

                step2Title: "Fonctionnalités avancées pour les professionnels",
                step2Content: `Cet outil va au-delà de la conversion basique :

**1. Rotation automatique intelligente**
L'outil détecte si une image est large et suggère la meilleure orientation.

**2. Gestion de la transparence (PNG)**
Si vous convertissez des PNG transparents, nous les aplatissons sur un fond blanc propre pour une compatibilité maximale.

**3. Support de formats mixtes**
Mélangez PNG, JPG et WebP dans le même lot - nous gérons tout.

**4. Préservation Haute-DPI**
Nous respectons la résolution de vos images sources pour une clareté d'impression optimale.`,

                step3Title: "Confidentialité et Sécurité",
                step3Content: `Nous comprenons que les images peuvent être personnelles.

*   **Pas de téléversement serveur :** Contrairement à d'autres sites, notre outil utilise Javascript pour générer le PDF *dans* votre onglet.
*   **Zéro Visibilité :** Nous ne pouvons pas voir vos images.
*   **Idéal pour documents sensibles :** Parfait pour les passeports, permis ou dossiers médicaux.`,

                step4Title: "Cas d'utilisation courants",
                step4Content: `**Portfolios numériques**
Photographes et designers peuvent combiner leurs meilleures photos en un portfolio PDF élégant.

**Notes de frais**
Les pigistes peuvent photographier 50 reçus et les fusionner en un fichier "Depenses.pdf".

**Immobilier**
Les agents peuvent compiler des photos de propriété en un dossier de présentation.

**Devoirs scolaires**
Les étudiants peuvent prendre en photo leurs pages de devoirs et les convertir en un seul fichier pour soumission.`,

                step5Title: "Dépannage et conseils",
                step5Content: `**Problème : Mes images sont coupées.**
*   *Cause :* Le ratio de la photo ne correspond pas à la page PDF.
*   *Solution :* Choisissez "Ajuster à la page" au lieu de "Remplir la page".

**Problème : Le PDF est énorme.**
*   *Cause :* Photos brutes 20MP.
*   *Solution :* Utilisez notre outil **Compresser PDF** après la conversion.

**Problème : Je ne peux pas envoyer de fichiers HEIC.**
*   *Cause :* Les navigateurs ne supportent pas encore nativement le format iPhone.
*   *Solution :* Convertissez vos HEIC en JPG sur votre téléphone avant.`,

                faqTitle: "Questions fréquemment posées",
                faqContent: `**Quel est le nombre maximum d'images ?**
Pas de limite stricte. Nous avons optimisé l'outil pour gérer 100+ images selon votre RAM.

**Puis-je ajouter du texte ?**
Cet outil est strictment pour la conversion. Pour le texte, utilisez **Modifier PDF** après conversion.

**Supportez-vous le CMJN (CMYK) ?**
Nous recommandons le RVB (RGB) pour les résultats les plus cohérents sur écran.

**Puis-je reconvertir en images plus tard ?**
Oui ! Utilisez notre outil **PDF vers JPG** pour extraire les images originales.

**Les GIF animés joueront-ils ?**
Non. Le PDF est statique. Seule la première image sera capturée.`
            },
            pt: {
                subtitle: `Converta imagens ${formatName} para documentos PDF profissionais instantaneamente (Processamento Local)`,
                intro: `Precisa combinar várias imagens ${formatName} em um único arquivo PDF compartilhável? Nossa ferramenta **${toolTitle}** transforma suas fotos, capturas de tela e digitalizações em um documento digital polido.

Por que converter imagens para PDF?
1.  **Consolidação:** Envie um arquivo em vez de 20 anexos de e-mail.
2.  **Padronização:** Garanta que seu currículo ou portfólio pareça idêntico em todas as telas.
3.  **Impressão:** Tranque o layout (A4/Carta) para evitar cortes imprevistos na impressora.

Diferente da maioria das ferramentas gratuitas, processamos suas imagens **localmente no seu navegador**. Suas fotos privadas (memórias de família, documentos, recibos) nunca saem do seu computador.`,

                step1Title: `Como converter ${formatName} para PDF online`,
                step1Content: `Siga estes passos simples para criar seu PDF personalizado:

1.  **Selecione Imagens**: Clique em "Selecionar Arquivos" ou arraste suas imagens (JPG, PNG, WEBP, GIF).
2.  **Reorganize Páginas**: Arraste e solte as miniaturas para definir a ordem.
3.  **Personalize o Layout**:
    *   *Orientação*: **Retrato** (vertical) ou **Paisagem** (horizontal).
    *   *Margens*: Adicione margens se planeja imprimir e encadernar.
    *   *Ajuste*: Use "Ajustar à Página" para ver tudo, ou "Preencher" para eliminar bordas brancas.
4.  **Clique em Converter**: A ferramenta costura suas imagens instantaneamente.
5.  **Baixar**: Salve seu arquivo PDF combinado.

**Dica Pro**: Para um efeito de "Álbum de Fotos", use orientação **Paisagem** e a opção "Sem Margens".`,

                step2Title: "Recursos Avançados para Profissionais",
                step2Content: `Esta ferramenta vai além da conversão básica:

**1. Rotação Automática Inteligente**
A ferramenta detecta se uma imagem é larga e sugere a melhor orientação.

**2. Tratamento de Transparência (PNG)**
Se converter ícones PNG transparentes, nós os achatamos em um fundo branco limpo para máxima compatibilidade.

**3. Suporte a Formatos Mistos**
Misture PNG, JPG e WebP no mesmo lote - nós lidamos com tudo.

**4. Preservação de Alta DPI**
Respeitamos a resolução de suas imagens originais para clareza de impressão ideal.`,

                step3Title: "Privacidade e Segurança",
                step3Content: `Entendemos que imagens podem ser pessoais.

*   **Sem Upload em Servidor:** Diferente de outros sites, nossa ferramenta usa Javascript para gerar o PDF *dentro* da sua aba.
*   **Zero Visibilidade:** Nós não podemos ver suas imagens.
*   **Ideal para Documentos Sensíveis:** Perfeito para passaportes, CNH ou registros médicos.`,

                step4Title: "Casos de Uso Comuns",
                step4Content: `**Portfólios Digitais**
Fotógrafos e designers podem combinar suas melhores fotos em um portfólio PDF elegante.

**Relatórios de Despesas**
Freelancers podem fotografar 50 recibos e fundi-los em um arquivo "Despesas.pdf".

**Imobiliário**
Corretores podem compilar fotos de propriedades em um pacote de listagem.

**Submissões Escolares**
Estudantes podem fotografar páginas de dever de casa e converter em um único arquivo.`,

                step5Title: "Solução de Problemas e Dicas",
                step5Content: `**Problema: Minhas imagens estão cortadas.**
*   *Causa:* A proporção da foto não corresponde à página PDF.
*   *Solução:* Escolha "Ajustar à Página" em vez de "Preencher Página".

**Problema: O PDF ficou enorme.**
*   *Causa:* Fotos brutas de 20MP.
*   *Solution:* Use nossa ferramenta **Comprimir PDF** após a conversão.

**Problema: Cores parecem diferentes.**
*   *Causa:* Imagens de tela são RGB, mas alguns leitores simulam CMYK.
*   *Solução:* Geralmente é uma configuração do visualizador.

**Problema: Não consigo enviar arquivos HEIC (iPhone).**
*   *Causa:* Navegadores ainda não suportam nativamente o formato.
*   *Solução:* Converta seus HEIC para JPG no celular antes.`,

                faqTitle: "Perguntas Frequentes",
                faqContent: `**Qual o número máximo de imagens?**
Sem limite rígido. Otimizamos para lidar com 100+ imagens dependendo da sua RAM.

**Posso adicionar legendas de texto?**
Esta ferramenta é estritamente para conversão. Para texto, use **Editar PDF** após converter.

**Suportam CMYK para impressão?**
Recomendamos converter imagens para RGB antes do upload para resultados consistentes em tela.

**Posso converter de volta para imagens depois?**
Sim! Use nossa ferramenta **PDF para JPG** para extrair as imagens originais.

**GIFs animados vão tocar?**
Não. PDF é estático. Apenas o primeiro quadro será capturado.`
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: `${toolTitle} | Free ${formatName} to PDF Converter Online | pdfcanada.ca`,
            seoDesc: content.subtitle,
            title: toolTitle,
            subtitle: content.subtitle,
            breadcrumbHome: l === 'pt' ? 'Início' : (l === 'fr' ? 'Accueil' : 'Home'),
            breadcrumbGuides: l === 'pt' ? 'Guias' : 'Guides',
            breadcrumbTool: toolTitle,
            intro: content.intro,
            sections: [
                { id: 'how-to', title: content.step1Title, content: content.step1Content },
                { id: 'features', title: content.step2Title, content: content.step2Content },
                { id: 'privacy', title: content.step3Title, content: content.step3Content },
                { id: 'use-cases', title: content.step4Title, content: content.step4Content },
                { id: 'troubleshooting', title: content.step5Title, content: content.step5Content },
                { id: 'faq', title: content.faqTitle, content: content.faqContent }
            ],
            relatedGuides: [
                { slug: 'pdf-to-image', labelEn: 'PDF to Image Guide', labelFr: 'Guide PDF vers Image', labelPt: 'Guia PDF para Imagem' },
                { slug: 'compress-pdf', labelEn: 'Compress PDF Guide', labelFr: 'Guide Compresser PDF', labelPt: 'Guia Comprimir PDF' },
                { slug: 'merge-pdf', labelEn: 'Merge PDF Guide', labelFr: 'Guide Fusionner PDF', labelPt: 'Guia Juntar PDF' },
                { slug: 'heic-to-pdf', labelEn: 'HEIC to PDF Guide', labelFr: 'Guide HEIC vers PDF', labelPt: 'Guia HEIC para PDF' }
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
