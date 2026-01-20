import React from 'react';
import { GuideTemplate, GuideContent } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileCode } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
    slug?: string;
}

export const PdfToSvgGuide: React.FC<Props> = ({ lang, slug = 'pdf-to-svg' }) => {
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const toolTitle = toolConfig?.title || 'PDF to SVG';

    const getLocalContent = (l: Language): GuideContent => {
        const t = {
            en: {
                subtitle: 'Convert PDF pages to scalable SVG vector graphics for web and design',
                intro: `Need to use PDF content on the web or in design software? Our free **${toolTitle}** tool transforms PDF pages into SVG (Scalable Vector Graphics) format—the gold standard for web graphics that look perfect at any size.

SVG files scale infinitely without losing quality, making them ideal for responsive web design, logos, icons, and any graphics that need to display crisply on both mobile screens and large displays.

### Who Needs This Tool?

*   **Web Developers**: Convert PDF graphics to web-ready SVG format.
*   **Graphic Designers**: Use PDF content in vector editing software like Illustrator or Figma.
*   **UI/UX Designers**: Extract icons or illustrations from PDFs for app interfaces.
*   **Marketing Teams**: Repurpose PDF brochure graphics for websites.
*   **Print Designers**: Convert PDF proofs to SVG for client web presentations.

### Why SVG?

*   **Infinite Scalability**: Vector graphics scale without pixelation—perfect for retina displays.
*   **Web-Native**: SVG is supported by all modern browsers without plugins.
*   **Small File Sizes**: Often smaller than equivalent raster images.
*   **CSS & JavaScript Ready**: SVG elements can be styled and animated.`,

                step1Title: 'How to Convert PDF to SVG Online',
                step1Content: `Follow these simple steps to transform your PDF pages into SVG files:

1.  **Upload Your PDF**: Click "Select PDF file" or drag and drop your PDF document.

2.  **Select Pages (Optional)**: Choose specific pages to convert, or convert the entire document.

3.  **Click Convert**: Press the "Convert" button. Processing happens instantly in your browser.

4.  **Download**: Get your SVG files packaged in a ZIP archive. Each PDF page becomes a separate SVG file.

**Pro Tip**: For multi-page PDFs, all pages are converted and delivered in a single ZIP download for convenience.`,

                step2Title: 'Features & Quality',
                step2Content: `Our PDF to SVG converter offers professional-grade features:

*   **High Resolution Rendering**: Pages are rendered at 2x scale for maximum clarity.
*   **Multi-Page Support**: Convert entire PDFs with all pages in one operation.
*   **Embedded Images**: PDF pages are converted with all content visible.
*   **100% Private Processing**: Files never leave your browser—no upload needed.
*   **Batch Download**: All pages packaged in a convenient ZIP archive.
*   **No Watermarks**: Output is completely clean and professional.
*   **Free & Unlimited**: No signup, no daily limits, no restrictions.

**Output Characteristics:**
| Feature | Value |
|---------|-------|
| Scale | 2x (high resolution) |
| Format | SVG with embedded high-quality image |
| Packaging | ZIP archive for multi-page |
| File Naming | page-1.svg, page-2.svg, etc. |`,

                step3Title: 'Privacy & Security',
                step3Content: `Your documents deserve maximum protection:

**Local-First Processing**
Unlike cloud converters, our tool processes everything in your web browser. Your PDF files never leave your device.

**Zero Data Retention**
We don't store or log any documents. When you close the browser tab, all data is cleared.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Ideal for Converting:**
*   Confidential business graphics
*   Proprietary design assets
*   Client project files
*   Sensitive document illustrations`,

                step4Title: 'Common Use Cases',
                step4Content: `**Web Graphics**
Convert PDF graphics, charts, or illustrations for use on responsive websites.

**Design Software Import**
Bring PDF content into Figma, Sketch, Illustrator, or other vector tools.

**Icon Libraries**
Extract icons from PDF design systems for web or app development.

**Infographic Repurposing**
Transform PDF infographics into web-ready SVG format.

**Logo Conversion**
Convert PDF logos to SVG for web use with perfect scaling.

**Technical Documentation**
Use PDF diagrams on wikis or documentation sites.`,

                step5Title: 'Troubleshooting Common Issues',
                step5Content: `**Problem: SVG file is very large**
*Solution*: Large or complex PDFs create larger SVGs. For web use, consider optimizing with SVGO or similar tools.

**Problem: Text appears as image, not editable**
*Solution*: Our tool creates SVG with embedded high-quality images. For editable vector paths, use specialized PDF-to-vector software.

**Problem: Some elements look different**
*Solution*: Complex PDF effects may render slightly differently. Compare with the original and adjust if needed.

**Problem: Conversion seems slow**
*Solution*: Large PDFs with many pages take longer. Close other browser tabs to free memory.

**Problem: ZIP file won't open**
*Solution*: Ensure your ZIP extractor supports the format, or try a different extraction tool.`,

                faqTitle: 'Frequently Asked Questions',
                faqContent: `**Is the SVG output fully editable vector graphics?**
The SVG contains a high-quality embedded image of the PDF page. This maintains perfect visual fidelity. For fully editable vector paths from PDFs, specialized software is needed.

**What resolution is the SVG output?**
Pages are rendered at 2x scale for crisp display on retina/high-DPI screens.

**Can I use the SVG on websites?**
Yes! SVG is natively supported by all modern browsers and is ideal for web use.

**Is there a page limit?**
No hard limit. We've tested with 100+ page documents.

**Can I convert password-protected PDFs?**
You'll need to enter the password or remove protection first.

**What's the maximum PDF file size?**
No strict limit, but very large files (100+ MB) may be slow in the browser.

**Are my files uploaded to a server?**
No! All processing happens locally in your browser. Files never leave your device.

**Can I edit the SVG in Illustrator?**
Yes, you can open and edit the SVG. The embedded content displays as an image element.

**Do you preserve fonts?**
Fonts are rendered as part of the embedded image, so they display correctly regardless of installed fonts.

**Is this tool really free?**
Yes, 100% free with no watermarks or limits.

**What's the difference between SVG and PNG?**
SVG is vector (scales infinitely), PNG is raster (fixed pixel resolution).`,
                breadGuides: 'Guides',
                breadHome: 'Home'
            },
            fr: {
                subtitle: 'Convertissez des pages PDF en graphiques vectoriels SVG pour le web et le design',
                intro: `Besoin d'utiliser du contenu PDF sur le web ou dans des logiciels de design ? Notre outil gratuit **${toolTitle}** transforme les pages PDF en format SVG (Scalable Vector Graphics)—le standard pour les graphiques web qui apparaissent parfaitement à n'importe quelle taille.

Les fichiers SVG s'adaptent infiniment sans perte de qualité, les rendant idéaux pour le design web responsive, les logos, les icônes et tout graphique devant s'afficher nettement.

### Qui a besoin de cet outil ?

*   **Développeurs Web** : Convertissez des graphiques PDF en format SVG.
*   **Designers Graphiques** : Utilisez du contenu PDF dans des logiciels comme Illustrator ou Figma.
*   **Designers UI/UX** : Extrayez des icônes de PDFs.
*   **Équipes Marketing** : Réutilisez des graphiques de brochures PDF pour des sites.

### Pourquoi SVG ?

*   **Évolutivité Infinie** : Les graphiques vectoriels s'adaptent sans pixelisation.
*   **Natif Web** : SVG est supporté par tous les navigateurs modernes.
*   **Fichiers Légers** : Souvent plus petits que des images raster équivalentes.`,

                step1Title: 'Comment convertir PDF en SVG en ligne',
                step1Content: `Suivez ces étapes simples :

1.  **Téléchargez votre PDF** : Cliquez sur « Sélectionner fichier PDF » ou glissez-déposez.

2.  **Sélectionnez les pages** : Choisissez des pages spécifiques ou convertissez tout.

3.  **Cliquez sur Convertir** : Le traitement se fait instantanément.

4.  **Téléchargez** : Obtenez vos fichiers SVG dans une archive ZIP.

**Conseil** : Pour les PDFs multi-pages, toutes les pages sont converties et livrées dans un seul téléchargement ZIP.`,

                step2Title: 'Fonctionnalités et qualité',
                step2Content: `Notre convertisseur PDF vers SVG offre :

*   **Rendu haute résolution** : Pages rendues à échelle 2x pour une clarté maximale.
*   **Support multi-pages** : Convertissez des PDFs entiers en une opération.
*   **Traitement 100% privé** : Les fichiers ne quittent jamais votre navigateur.
*   **Téléchargement par lot** : Toutes les pages dans une archive ZIP.
*   **Sans filigrane** : Sortie propre et professionnelle.
*   **Gratuit et illimité** : Pas d'inscription, pas de limites.`,

                step3Title: 'Confidentialité et sécurité',
                step3Content: `Vos documents méritent une protection maximale :

**Traitement Local-First**
Notre outil traite tout dans votre navigateur. Vos fichiers PDF ne quittent jamais votre appareil.

**Zéro rétention**
Nous ne stockons aucun document. Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes.`,

                step4Title: 'Cas d\'utilisation courants',
                step4Content: `**Graphiques Web**
Convertissez des graphiques PDF pour des sites web responsive.

**Import logiciels de design**
Importez du contenu PDF dans Figma, Illustrator, ou autres outils vectoriels.

**Bibliothèques d'icônes**
Extrayez des icônes de systèmes de design PDF.

**Réutilisation d'infographies**
Transformez des infographies PDF en format SVG.`,

                step5Title: 'Dépannage des problèmes courants',
                step5Content: `**Problème : Fichier SVG très volumineux**
*Solution* : Les PDFs complexes créent des SVGs plus gros. Optimisez avec SVGO si nécessaire.

**Problème : Le texte apparaît comme image**
*Solution* : Notre outil crée des SVG avec images intégrées haute qualité.

**Problème : La conversion semble lente**
*Solution* : Les grands PDFs prennent plus de temps. Fermez d'autres onglets.`,

                faqTitle: 'Questions fréquentes',
                faqContent: `**Le SVG est-il un graphique vectoriel éditable ?**
Le SVG contient une image haute qualité de la page PDF. Pour des vecteurs éditables, un logiciel spécialisé est nécessaire.

**Quelle résolution pour le SVG ?**
Les pages sont rendues à échelle 2x pour les écrans retina.

**Y a-t-il une limite de pages ?**
Pas de limite stricte. Testé avec plus de 100 pages.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`,
                breadGuides: 'Guides',
                breadHome: 'Accueil'
            },
            pt: {
                subtitle: 'Converta páginas PDF para gráficos vetoriais SVG para web e design',
                intro: `Precisa usar conteúdo PDF na web ou em software de design? Nossa ferramenta gratuita **${toolTitle}** transforma páginas PDF em formato SVG (Scalable Vector Graphics)—o padrão ouro para gráficos web que ficam perfeitos em qualquer tamanho.

Arquivos SVG escalam infinitamente sem perder qualidade, tornando-os ideais para design web responsivo, logos, ícones e qualquer gráfico que precisa ser exibido nitidamente.

### Quem precisa desta ferramenta?

*   **Desenvolvedores Web**: Converta gráficos PDF para formato SVG.
*   **Designers Gráficos**: Use conteúdo PDF em software como Illustrator ou Figma.
*   **Designers UI/UX**: Extraia ícones de PDFs.
*   **Equipes de Marketing**: Reutilize gráficos de brochuras PDF para sites.

### Por que SVG?

*   **Escalabilidade Infinita**: Gráficos vetoriais escalam sem pixelização.
*   **Nativo Web**: SVG é suportado por todos os navegadores modernos.
*   **Arquivos Leves**: Frequentemente menores que imagens raster equivalentes.`,

                step1Title: 'Como converter PDF para SVG online',
                step1Content: `Siga estes passos simples:

1.  **Envie seu PDF**: Clique em "Selecionar arquivo PDF" ou arraste e solte.

2.  **Selecione páginas**: Escolha páginas específicas ou converta tudo.

3.  **Clique em Converter**: O processamento é instantâneo.

4.  **Baixe**: Obtenha seus arquivos SVG em um arquivo ZIP.

**Dica**: Para PDFs com várias páginas, todas são convertidas e entregues em um único download ZIP.`,

                step2Title: 'Recursos e qualidade',
                step2Content: `Nosso conversor PDF para SVG oferece:

*   **Renderização alta resolução**: Páginas renderizadas em escala 2x para máxima clareza.
*   **Suporte multi-páginas**: Converta PDFs inteiros em uma operação.
*   **Processamento 100% privado**: Arquivos nunca saem do navegador.
*   **Download em lote**: Todas as páginas em um arquivo ZIP.
*   **Sem marcas d'água**: Saída limpa e profissional.
*   **Gratuito e ilimitado**: Sem cadastro, sem limites.`,

                step3Title: 'Privacidade e segurança',
                step3Content: `Seus documentos merecem máxima proteção:

**Processamento Local-First**
Nossa ferramenta processa tudo no navegador. Seus arquivos PDF nunca saem do dispositivo.

**Zero retenção**
Não armazenamos documentos. Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras.`,

                step4Title: 'Casos de uso comuns',
                step4Content: `**Gráficos Web**
Converta gráficos PDF para sites web responsivos.

**Importação em software de design**
Importe conteúdo PDF no Figma, Illustrator, ou outras ferramentas vetoriais.

**Bibliotecas de ícones**
Extraia ícones de sistemas de design PDF.

**Reutilização de infográficos**
Transforme infográficos PDF em formato SVG.`,

                step5Title: 'Solução de problemas comuns',
                step5Content: `**Problema: Arquivo SVG muito grande**
*Solução*: PDFs complexos criam SVGs maiores. Otimize com SVGO se necessário.

**Problema: Texto aparece como imagem**
*Solução*: Nossa ferramenta cria SVGs com imagens incorporadas de alta qualidade.

**Problema: Conversão parece lenta**
*Solução*: PDFs grandes levam mais tempo. Feche outras abas.`,

                faqTitle: 'Perguntas frequentes',
                faqContent: `**O SVG é um gráfico vetorial editável?**
O SVG contém uma imagem de alta qualidade da página PDF. Para vetores editáveis, software especializado é necessário.

**Qual a resolução do SVG?**
Páginas são renderizadas em escala 2x para telas retina.

**Há limite de páginas?**
Sem limite rígido. Testado com mais de 100 páginas.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`,
                breadGuides: 'Guias',
                breadHome: 'Início'
            }
        };

        const content = t[l] || t.en;

        return {
            seoTitle: `${toolTitle} | Free PDF to SVG Converter Online | pdfcanada.ca`,
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

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileCode className="w-6 h-6 text-canada-red" />}
            content={guideContent}
        />
    );
};
