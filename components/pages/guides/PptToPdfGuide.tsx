import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { Presentation } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const PptToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'ppt-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'PowerPoint to PDF';

    const content = {
        en: {
            subtitle: "Convert PowerPoint presentations to PDF handouts instantly with perfect formatting",
            intro: `Need to share a PowerPoint presentation but worried about font issues or unauthorized edits? Converting **PowerPoint to PDF** is the professional solution. Our free **${title}** tool transforms your .pptx and .ppt presentations into polished PDF documents that look identical on every device.

Whether you're a business professional sharing quarterly presentations, a student submitting assignments, or a speaker distributing handouts, PDF ensures your slides maintain their exact layout, fonts, and visual impact. Best of all, our tool processes everything locally in your browser—your confidential business presentations never leave your device.

### Who Needs This Tool?

*   **Business Professionals**: Share board presentations and sales decks securely.
*   **Sales Teams**: Distribute pitch decks to prospects without font compatibility issues.
*   **Students & Educators**: Submit assignments and share lecture materials.
*   **Conference Speakers**: Create professional handouts for attendees.
*   **Marketing Teams**: Share branded presentations with consistent formatting.`,

            step1Title: "How to Convert PowerPoint to PDF Online",
            step1Content: `Follow these simple steps to transform your PowerPoint presentation into a PDF document:

1.  **Upload Your File**: Click the "Select File" button or drag and drop your PowerPoint file (.pptx or .ppt) into the upload area.

2.  **Preview Your Slides**: Our tool displays a preview of your presentation. Verify that slides appear correctly.

3.  **Choose Settings (Optional)**: Select specific slides to include, or convert the entire presentation.

4.  **Click Convert**: Press the "Convert to PDF" button. The conversion happens instantly in your browser.

5.  **Download Your PDF**: Once complete, click "Download" to save your new PDF file. Each slide becomes a separate page.

**Pro Tip**: For presentations with embedded videos, note that only the poster frame (thumbnail) will appear in the PDF, as PDF doesn't support video playback.`,

            step2Title: "Features & Benefits",
            step2Content: `Our PowerPoint to PDF converter offers powerful features for professional results:

*   **Font Embedding**: All fonts are embedded, so your text looks perfect even on devices without your fonts installed.
*   **Layout Preservation**: Slides maintain their exact appearance—no squished images or shifted text boxes.
*   **Image Quality**: High-resolution images and graphics are preserved with excellent quality.
*   **Animation Flattening**: Animated elements are converted to their final state, ensuring clean output.
*   **100% Private Processing**: Your presentations never leave your browser—ideal for confidential business content.
*   **Multi-Slide Support**: Convert presentations with hundreds of slides in seconds.
*   **No File Size Limits**: Process large presentations without restrictions.
*   **No Watermarks**: Your output is completely clean and professional.
*   **Free & Unlimited**: Convert as many presentations as you need, no signup required.`,

            step3Title: "Privacy & Security",
            step3Content: `Your business presentations deserve maximum protection. Here's how we keep your content secure:

**Local-First Processing**
Unlike cloud-based converters that upload your files to remote servers, our tool processes everything directly in your web browser. Your PowerPoint files never leave your device.

**Zero Data Retention**
We don't store, cache, or log any of your presentation data. When you close the browser tab, all data is immediately cleared from memory.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Comparison with Cloud Converters:**

| Feature | pdfcanada.ca (Local) | Cloud Converters |
|---------|---------------------|------------------|
| Data Upload | ❌ Never uploaded | ✅ Uploaded to servers |
| Privacy Risk | ✅ Minimal | ⚠️ Data exposure risk |
| Speed | ✅ Instant | ⚠️ Depends on connection |
| Works Offline | ✅ After page load | ❌ Requires internet |`,

            step4Title: "Common Use Cases",
            step4Content: `**Board Presentations**
Convert confidential board decks to PDF for secure distribution to stakeholders.

**Sales Decks**
Transform sales presentations into professional PDFs that prospects can view without PowerPoint.

**Academic Submissions**
Submit presentation-based assignments in PDF format, ensuring professors see exactly what you created.

**Conference Handouts**
Create printable handouts from your presentation slides for conference attendees.

**Email Attachments**
PDF files are universally compatible and often smaller than PowerPoint files.

**Archival & Compliance**
Create permanent PDF records of important presentations for legal and compliance purposes.`,

            step5Title: "Troubleshooting Common Issues",
            step5Content: `**Problem: Fonts look different in the PDF**
*Solution*: Our tool embeds fonts, but if a font isn't available, a similar substitute is used. For critical presentations, use widely available fonts like Arial or Calibri.

**Problem: Animations aren't showing**
*Solution*: PDF is a static format. Animated elements are captured in their final state. Build slides with the understanding that animation sequences won't transfer.

**Problem: Videos aren't playing in the PDF**
*Solution*: PDF doesn't support video playback. Only the video poster frame (thumbnail) appears. Consider linking to videos separately.

**Problem: Some slides are missing from the PDF**
*Solution*: Ensure all desired slides are unhidden in PowerPoint. Hidden slides are not included in the conversion.

**Problem: The conversion seems slow**
*Solution*: Large presentations with many high-resolution images may take longer. Close other browser tabs to free up memory.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**Will my animations work in the PDF?**
No, PDF is a static document format. Animations are flattened to their final state, but all visual elements are preserved.

**Are speaker notes included?**
By default, only the slides themselves are converted. Speaker notes are not included in standard PDF output.

**Can I convert password-protected PowerPoint files?**
You'll need to remove password protection first, then convert the file.

**What PowerPoint formats are supported?**
We support .pptx (PowerPoint 2007+), .ppt (PowerPoint 97-2003), and .ppsx (slideshow format).

**Will my transitions be preserved?**
No, transitions between slides don't transfer to PDF. Each slide becomes a static page.

**Can I convert multiple presentations at once?**
Currently, you convert files one at a time.

**How do I convert only specific slides?**
Hide the slides you don't want in PowerPoint, then convert. Only visible slides are included.

**Is there a slide limit?**
No hard limit. We've tested with presentations containing 500+ slides.

**Will embedded videos work?**
No, PDF doesn't support video. Only the video thumbnail appears. Consider uploading videos separately.

**Can I edit the PDF after conversion?**
PDF is a final format. To make changes, edit the original PowerPoint file and reconvert.

**Is this tool really free?**
Yes, 100% free with no hidden costs, watermarks, or usage limits.

**Will my PowerPoint template/theme be preserved?**
Yes! All design elements, colors, and branding from your template are preserved in the PDF.`
        },
        fr: {
            subtitle: "Convertissez des présentations PowerPoint en PDF instantanément avec un formatage parfait",
            intro: `Besoin de partager une présentation PowerPoint mais inquiet des problèmes de polices ou des modifications non autorisées ? Convertir **PowerPoint en PDF** est la solution professionnelle. Notre outil gratuit **${title}** transforme vos présentations .pptx et .ppt en documents PDF soignés qui apparaissent identiques sur tous les appareils.

Que vous soyez un professionnel partageant des présentations trimestrielles, un étudiant soumettant des travaux, ou un conférencier distribuant des documents, le PDF garantit que vos diapositives maintiennent leur mise en page exacte. Mieux encore, notre outil traite tout localement dans votre navigateur—vos présentations confidentielles ne quittent jamais votre appareil.

### Qui a besoin de cet outil ?

*   **Professionnels d'affaires** : Partagez des présentations au conseil en toute sécurité.
*   **Équipes commerciales** : Distribuez des pitch decks sans problèmes de compatibilité.
*   **Étudiants et éducateurs** : Soumettez des travaux et partagez du matériel de cours.
*   **Conférenciers** : Créez des documents professionnels pour les participants.
*   **Équipes marketing** : Partagez des présentations avec un formatage cohérent.`,

            step1Title: "Comment convertir PowerPoint en PDF en ligne",
            step1Content: `Suivez ces étapes simples pour transformer votre présentation en document PDF :

1.  **Téléchargez votre fichier** : Cliquez sur « Sélectionner un fichier » ou glissez-déposez votre fichier PowerPoint.

2.  **Prévisualisez vos diapositives** : Notre outil affiche un aperçu de votre présentation.

3.  **Choisissez les paramètres** : Sélectionnez des diapositives spécifiques ou convertissez toute la présentation.

4.  **Cliquez sur Convertir** : La conversion se fait instantanément.

5.  **Téléchargez votre PDF** : Chaque diapositive devient une page séparée.

**Conseil** : Pour les présentations avec des vidéos intégrées, seule la vignette apparaîtra dans le PDF.`,

            step2Title: "Fonctionnalités et avantages",
            step2Content: `Notre convertisseur PowerPoint vers PDF offre des fonctionnalités puissantes :

*   **Intégration des polices** : Toutes les polices sont intégrées pour un texte parfait partout.
*   **Préservation de la mise en page** : Les diapositives maintiennent leur apparence exacte.
*   **Qualité d'image** : Images haute résolution préservées avec excellente qualité.
*   **Aplatissement des animations** : Les éléments animés sont convertis à leur état final.
*   **Traitement 100% privé** : Vos présentations ne quittent jamais votre navigateur.
*   **Support multi-diapositives** : Convertissez des centaines de diapositives en secondes.
*   **Sans filigrane** : Sortie complètement propre et professionnelle.
*   **Gratuit et illimité** : Convertissez autant de présentations que nécessaire.`,

            step3Title: "Confidentialité et sécurité",
            step3Content: `Vos présentations d'affaires méritent une protection maximale :

**Traitement Local-First**
Notre outil traite tout directement dans votre navigateur. Vos fichiers PowerPoint ne quittent jamais votre appareil.

**Zéro rétention de données**
Nous ne stockons aucune donnée. Quand vous fermez l'onglet, tout est effacé.

**Conforme LPRPDE**
Notre approche dépasse les exigences canadiennes en matière de confidentialité.`,

            step4Title: "Cas d'utilisation courants",
            step4Content: `**Présentations au conseil**
Convertissez des présentations confidentielles en PDF pour une distribution sécurisée.

**Pitch decks commerciaux**
Transformez vos présentations de vente en PDF professionnels.

**Soumissions académiques**
Soumettez vos présentations au format PDF.

**Documents de conférence**
Créez des documents imprimables pour les participants.

**Archivage**
Créez des enregistrements PDF permanents pour la conformité.`,

            step5Title: "Dépannage des problèmes courants",
            step5Content: `**Problème : Les polices semblent différentes**
*Solution* : Utilisez des polices largement disponibles comme Arial ou Calibri.

**Problème : Les animations ne s'affichent pas**
*Solution* : Le PDF est statique. Les animations sont capturées à leur état final.

**Problème : Les vidéos ne jouent pas**
*Solution* : Le PDF ne supporte pas la lecture vidéo. Seule la vignette apparaît.

**Problème : Certaines diapositives manquent**
*Solution* : Assurez-vous que toutes les diapositives souhaitées sont visibles dans PowerPoint.`,

            faqTitle: "Questions fréquemment posées",
            faqContent: `**Mes animations fonctionneront-elles dans le PDF ?**
Non, le PDF est statique. Les animations sont aplaties à leur état final.

**Les notes du présentateur sont-elles incluses ?**
Par défaut, seules les diapositives sont converties.

**Puis-je convertir des fichiers protégés par mot de passe ?**
Vous devrez d'abord supprimer la protection.

**Quels formats PowerPoint sont supportés ?**
Nous supportons .pptx, .ppt et .ppsx.

**Y a-t-il une limite de diapositives ?**
Pas de limite stricte. Testé avec plus de 500 diapositives.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans filigranes ou limites.`
        },
        pt: {
            subtitle: "Converta apresentações PowerPoint para PDF instantaneamente com formatação perfeita",
            intro: `Precisa compartilhar uma apresentação PowerPoint mas está preocupado com problemas de fontes ou edições não autorizadas? Converter **PowerPoint para PDF** é a solução profissional. Nossa ferramenta gratuita **${title}** transforma suas apresentações .pptx e .ppt em documentos PDF polidos que aparecem idênticos em qualquer dispositivo.

Seja você um profissional de negócios compartilhando apresentações trimestrais, um estudante submetendo trabalhos, ou um palestrante distribuindo materiais, o PDF garante que seus slides mantenham seu layout exato. O melhor é que nossa ferramenta processa tudo localmente no seu navegador—suas apresentações confidenciais nunca saem do seu dispositivo.

### Quem precisa desta ferramenta?

*   **Profissionais de negócios**: Compartilhe apresentações de diretoria com segurança.
*   **Equipes de vendas**: Distribua pitch decks sem problemas de compatibilidade.
*   **Estudantes e educadores**: Submeta trabalhos e compartilhe materiais de aula.
*   **Palestrantes**: Crie materiais profissionais para participantes.
*   **Equipes de marketing**: Compartilhe apresentações com formatação consistente.`,

            step1Title: "Como converter PowerPoint para PDF online",
            step1Content: `Siga estes passos simples:

1.  **Envie seu arquivo**: Clique em "Selecionar arquivo" ou arraste e solte seu arquivo PowerPoint.

2.  **Visualize seus slides**: Nossa ferramenta exibe uma prévia da sua apresentação.

3.  **Escolha as configurações**: Selecione slides específicos ou converta toda a apresentação.

4.  **Clique em Converter**: A conversão acontece instantaneamente.

5.  **Baixe seu PDF**: Cada slide se torna uma página separada.

**Dica**: Para apresentações com vídeos, apenas a miniatura aparecerá no PDF.`,

            step2Title: "Recursos e benefícios",
            step2Content: `Nosso conversor de PowerPoint para PDF oferece recursos poderosos:

*   **Incorporação de fontes**: Todas as fontes são incorporadas para texto perfeito em qualquer lugar.
*   **Preservação do layout**: Slides mantêm sua aparência exata.
*   **Qualidade de imagem**: Imagens de alta resolução preservadas com excelente qualidade.
*   **Achatamento de animações**: Elementos animados são convertidos para seu estado final.
*   **Processamento 100% privado**: Suas apresentações nunca saem do navegador.
*   **Suporte multi-slides**: Converta centenas de slides em segundos.
*   **Sem marcas d'água**: Saída completamente limpa e profissional.
*   **Gratuito e ilimitado**: Converta quantas apresentações precisar.`,

            step3Title: "Privacidade e segurança",
            step3Content: `Suas apresentações de negócios merecem máxima proteção:

**Processamento Local-First**
Nossa ferramenta processa tudo diretamente no seu navegador. Seus arquivos PowerPoint nunca saem do seu dispositivo.

**Zero retenção de dados**
Não armazenamos nenhum dado. Quando você fecha a aba, tudo é limpo.

**Conformidade com LGPD**
Nossa abordagem atende às exigências brasileiras de proteção de dados.`,

            step4Title: "Casos de uso comuns",
            step4Content: `**Apresentações de diretoria**
Converta apresentações confidenciais para distribuição segura.

**Pitch decks de vendas**
Transforme suas apresentações de vendas em PDFs profissionais.

**Submissões acadêmicas**
Submeta suas apresentações no formato PDF.

**Materiais de conferência**
Crie materiais imprimíveis para participantes.

**Arquivamento**
Crie registros PDF permanentes para conformidade.`,

            step5Title: "Solução de problemas comuns",
            step5Content: `**Problema: Fontes parecem diferentes**
*Solução*: Use fontes amplamente disponíveis como Arial ou Calibri.

**Problema: Animações não aparecem**
*Solução*: PDF é estático. Animações são capturadas em seu estado final.

**Problema: Vídeos não tocam**
*Solução*: PDF não suporta reprodução de vídeo. Apenas a miniatura aparece.

**Problema: Alguns slides estão faltando**
*Solução*: Certifique-se de que todos os slides desejados estão visíveis no PowerPoint.`,

            faqTitle: "Perguntas frequentes",
            faqContent: `**Minhas animações funcionarão no PDF?**
Não, PDF é estático. Animações são achatadas para seu estado final.

**As notas do apresentador são incluídas?**
Por padrão, apenas os slides são convertidos.

**Posso converter arquivos protegidos por senha?**
Você precisará remover a proteção primeiro.

**Quais formatos PowerPoint são suportados?**
Suportamos .pptx, .ppt e .ppsx.

**Há limite de slides?**
Sem limite rígido. Testado com mais de 500 slides.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem marcas d'água ou limites.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<Presentation className="w-6 h-6 text-canada-red" />}
            content={{
                seoTitle: `${title} | Free PowerPoint to PDF Converter Online | pdfcanada.ca`,
                seoDesc: t.subtitle,
                title: title,
                subtitle: t.subtitle,
                breadcrumbHome: lang === 'pt' ? 'Início' : (lang === 'fr' ? 'Accueil' : 'Home'),
                breadcrumbGuides: lang === 'pt' ? 'Guias' : 'Guides',
                breadcrumbTool: title,
                intro: t.intro,
                sections: [
                    { id: 'how-to', title: t.step1Title, content: t.step1Content },
                    { id: 'features', title: t.step2Title, content: t.step2Content },
                    { id: 'privacy', title: t.step3Title, content: t.step3Content },
                    { id: 'use-cases', title: t.step4Title, content: t.step4Content },
                    { id: 'troubleshooting', title: t.step5Title, content: t.step5Content },
                    { id: 'faq', title: t.faqTitle, content: t.faqContent }
                ]
            }}
        />
    );
};
