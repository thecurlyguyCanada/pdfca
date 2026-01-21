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
            intro: `Need to share a PowerPoint presentation but worried about font issues, version incompatibility, or unauthorized edits? Converting **PowerPoint to PDF** is the professional standard for distribution.

Our free **${title}** tool transforms your .pptx and .ppt presentations into polished, print-ready PDF documents. Unlike sending the raw presentation file, a PDF ensures your slides look exactly the same on an iPhone, an Android tablet, or a desktop computer running Linux.

**Why professionals convert to PDF before sharing:**
*   **Font Security:** No more "missing font" errors that turn your beautiful typography into default Arial.
*   **Version Independence:** Works perfectly whether the receiver has PowerPoint 2007, 2021, or no PowerPoint at all.
*   **Print Readiness:** Creates perfect handouts with consistent margins and colors.

Our tool processes your files **locally in your browser**, ensuring your confidential business strategies and internal data never leave your device.`,

            step1Title: "Pre-Conversion Checklist (Best Practices)",
            step1Content: `To get the absolute best results, check these 3 things in your PowerPoint file before converting:

1.  **Check for "Off-Stage" Content**: Items hanging off the edge of the slide might partially print or cause layout issues. Move them fully onto the slide or delete them.
2.  **Embed Fonts**: In PowerPoint settings (*File > Options > Save*), check "Embed fonts in the file". This helps our converter render unusual fonts correctly.
3.  **Unhide Slides**: If you have "Hidden Slides" (often used for Q&A backup), they will normally be skipped. Unhide them if you want them in the PDF.
4.  **Compress Images**: If your file is over 50MB, use PowerPoint's "Compress Pictures" feature first to speed up processing without noticeable quality loss.`,

            step2Title: "How to Convert PowerPoint to PDF Online",
            step2Content: `Follow these simple steps to transform your slides into a universal document:

1.  **Upload Your File**: Click the "Select File" button or drag and drop your PowerPoint presentation (.pptx, .ppt, .potx).
2.  **Preview Slides**: Our tool will quickly render a preview. You can verify that all charts and diagrams are visible.
3.  **Select Pages (Optional)**: If you only need to share a specific section (e.g., the "Q1 Results" section), you can select just those slides.
4.  **Click Convert**: Press "Convert to PDF". The tool captures each slide as a high-quality page.
5.  **Download**: Save your PDF file. It's now ready to be emailed or uploaded to a company portal.

**Pro Tip**: PDF files do not play videos or run animations. This conversion captures the "final state" of your slide layout, which is perfect for reading.`,

            step3Title: "Feature Comparison: PowerPoint 'Save As' vs. Our Tool",
            step3Content: `Why use a browser-based tool?

| Feature | PowerPoint "Save As PDF" | pdfcanada.ca Converter |
|---------|--------------------------|------------------------|
| **Accessibility** | Requires expensive software | Works on any device (Phone, Tablet) |
| **Speed** | Slow to open app | Instant drag-and-drop |
| **Privacy** | Local processing | **Local processing** (Same security!) |
| **Metadata** | Keeps author name/edit time | **Strips** hidden metadata for privacy |
| **Legacy Files** | Struggles with old .ppt | Handles old formats smoothly |
| **Portability** | N/A | No software installation needed |`,

            step4Title: "Troubleshooting Presentation Issues",
            step4Content: `**Problem: My animations disappeared.**
*   *Reason:* PDF is a static format like a piece of paper. It cannot move.
*   *Fix:* This is expected behavior. If you have "build" slides (text appearing one line at a time), ensure all text is visible in the final state before converting.

**Problem: The file size is too big to email.**
*   *Reason:* PowerPoint files contain high-res images that get written into the PDF.
*   *Fix:* After converting, use our **Compress PDF** tool to shrink the file size by 50-80% for email attachments.

**Problem: Hyperlinks aren't working.**
*   *Reason:* Complex links on shapes sometimes get lost.
*   *Fix:* Ensure your hyperlinks are attached to text or simple images, not grouped "SmartArt" objects.

**Problem: Excel charts look weird.**
*   *Reason:* Linked Excel charts might not update if the source file isn't found.
*   *Fix:* In PowerPoint, "Break Links" to Excel files ensures the chart is saved as a static picture inside the presentation before conversion.`,

            step5Title: "Privacy & Security",
            step5Content: `For internal docs, investor decks, and legal presentations, security is non-negotiable.

*   **Client-Side Conversion:** The magic happens in your browser's memory. We do not (and cannot) see your slides.
*   **Instant Wipe:** As soon as you refresh the page or close the tab, the data footprint is gone.
*   **No "Cloud" Storage:** We are not a cloud storage provider. We don't keep backups of your files.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**Can I convert speaker notes to PDF?**
Our standard tool converts the **slides only** (the visual presentation). To include speaker notes, you would typically need to use the specialized "Print to PDF" function in PowerPoint itself with the "Notes Pages" layout selected.

**Will my custom fonts be preserved?**
We try our best to use the embedded fonts. If a highly custom encoded font cannot be read, we substitute it with a visually similar standard font (e.g., Helvetica or Times) to ensure the text remains readable.

**What happens to embedded audio/video?**
They are removed. The first frame of the video (the thumbnail) is usually kept as a static image so the slide doesn't look empty, but the media itself will not play.

**Can I convert Keynote (Mac) files?**
Not directly. You should export your Keynote file to PowerPoint (.pptx) first, then use our tool for the final PDF conversion if you need our specific compression or privacy features.

**Is there a limit on slide count?**
We regularly test with 500+ slide decks. Performance depends on your computer's RAM, but most standard business presentations convert in under 5 seconds.`
        },
        fr: {
            subtitle: "Convertissez des présentations PowerPoint en PDF instantanément avec un formatage parfait",
            intro: `Besoin de partager une présentation PowerPoint mais inquiet des problèmes de polices, d'incompatibilité de version ou de modifications non autorisées ? Convertir **PowerPoint en PDF** est la norme professionnelle.

Notre outil gratuit **${title}** transforme vos présentations .pptx et .ppt en documents PDF soignés. Contrairement à l'envoi du fichier brut, un PDF garantit que vos diapositives sont identiques sur un iPhone, une tablette ou un PC.

**Pourquoi les professionnels convertissent en PDF :**
*   **Sécurité des polices :** Fini les erreurs de polices manquantes qui détruisent votre mise en page.
*   **Indépendance de version :** Fonctionne parfaitement, que le destinataire ait PowerPoint 2021 ou aucun logiciel.
*   **Prêt à imprimer :** Crée des documents parfaits avec des marges cohérentes.

Notre outil traite vos fichiers **localement dans votre navigateur**, garantissant que vos stratégies confidentielles ne quittent jamais votre appareil.`,

            step1Title: "Liste de contrôle avant conversion",
            step1Content: `Pour obtenir les meilleurs résultats, vérifiez ces 3 points :

1.  **Contenu hors-diapositive** : Les éléments qui dépassent du bord peuvent causer des problèmes. Déplacez-les ou supprimez-les.
2.  **Incorporer les polices** : Dans les options PowerPoint, cochez "Incorporer les polices". Cela aide notre convertisseur.
3.  **Diapositives masquées** : Si vous avez des diapositives "cachées", elles seront ignorées. Affichez-les si nécessaire.
4.  **Compresser les images** : Si le fichier dépasse 50 Mo, utilisez la fonction "Compresser les images" de PowerPoint.`,

            step2Title: "Comment convertir PowerPoint en PDF en ligne",
            step2Content: `Suivez ces étapes simples pour transformer vos diapositives :

1.  **Téléchargez votre fichier** : Cliquez sur "Sélectionner un fichier" ou glissez-déposez votre présentation (.pptx, .ppt).
2.  **Prévisualisez** : Notre outil affiche un aperçu. Vérifiez que les graphiques sont visibles.
3.  **Sélectionnez les pages (Optionnel)** : Si vous n'avez besoin que d'une section spécifique, sélectionnez ces diapositives.
4.  **Cliquez sur Convertir** : L'outil capture chaque diapositive comme une page haute qualité.
5.  **Télécharger** : Sauvegardez votre fichier PDF, prêt à être envoyé.

**Astuce Pro** : Les fichiers PDF ne jouent pas les vidéos. Cette conversion capture "l'état final" de votre mise en page.`,

            step3Title: "Comparaison : PowerPoint 'Enregistrer sous' vs Notre Outil",
            step3Content: `Pourquoi utiliser un outil en ligne ?

| Fonctionnalité | PowerPoint "Enregistrer sous" | Convertisseur pdfcanada.ca |
|----------------|-------------------------------|----------------------------|
| **Accessibilité** | Nécessite un logiciel coûteux | Fonctionne partout (Mobile, Tablette) |
| **Vitesse** | Lent à ouvrir l'app | Glisser-déposer instantané |
| **Confidentialité** | Traitement local | **Traitement local** (Même sécurité !) |
| **Métadonnées** | Garde le nom de l'auteur | **Supprime** les métadonnées cachées |
| **Vieux Fichiers** | Difficile avec les vieux .ppt | Gère bien les formats anciens |`,

            step4Title: "Dépannage des problèmes de présentation",
            step4Content: `**Problème : Mes animations ont disparu.**
*   *Raison :* Le PDF est un format statique. Il ne bouge pas.
*   *Solution :* C'est normal. Assurez-vous que tout le texte est visible dans l'état final avant de convertir.

**Problème : Le fichier est trop gros pour l'email.**
*   *Raison :* Le PowerPoint contient des images haute résolution.
*   *Solution :* Après conversion, utilisez notre outil **Compresser PDF** pour réduire la taille de 50-80%.

**Problème : Les hyperliens ne fonctionnent pas.**
*   *Raison :* Les liens complexes sur des formes se perdent parfois.
*   *Solution :* Attachez vos liens au texte ou à des images simples, pas à des objets "SmartArt" groupés.

**Problème : Les graphiques Excel sont bizarres.**
*   *Raison :* Les graphiques liés peuvent ne pas se mettre à jour.
*   *Solution :* Dans PowerPoint, "Rompre les liaisons" assure que le graphique est sauvegardé comme une image statique.`,

            step5Title: "Confidentialité et sécurité",
            step5Content: `Pour les documents internes et légaux, la sécurité est non négociable.

*   **Conversion côté client :** La magie opère dans la mémoire de votre navigateur. Nous ne voyons pas vos diapositives.
*   **Nettoyage instantané :** Dès que vous fermez l'onglet, les données disparaissent.
*   **Pas de Cloud :** Nous ne sommes pas un fournisseur de stockage cloud. Nous ne gardons aucune copie.`,

            faqTitle: "Questions fréquemment posées",
            faqContent: `**Puis-je convertir les notes du présentateur ?**
Notre outil convertit **uniquement les diapositives**. Pour inclure les notes, utilisez la fonction "Imprimer en PDF" de PowerPoint avec la mise en page "Pages de notes".

**Mes polices personnalisées seront-elles préservées ?**
Nous essayons d'utiliser les polices intégrées. Si une police très spécifique ne peut être lue, nous la remplaçons par une police standard similaire (ex: Arial) pour garder le texte lisible.

**Qu'arrive-t-il aux vidéos intégrées ?**
Elles sont supprimées. La première image de la vidéo est généralement conservée comme image statique, mais la vidéo ne jouera pas.

**Puis-je convertir des fichiers Keynote (Mac) ?**
Pas directement. Exportez d'abord votre fichier Keynote en PowerPoint (.pptx), puis utilisez notre outil.

**Y a-t-il une limite de diapositives ?**
Nous testons avec des présentations de 500+ diapositives. La performance dépend de votre RAM.`
        },
        pt: {
            subtitle: "Converta apresentações PowerPoint para PDF instantaneamente com formatação perfeita",
            intro: `Precisa compartilhar uma apresentação PowerPoint mas está preocupado com problemas de fontes, incompatibilidade de versão ou edições não autorizadas? Converter **PowerPoint para PDF** é o padrão profissional.

Nossa ferramenta gratuita **${title}** transforma suas apresentações .pptx e .ppt em documentos PDF polidos. Diferente de enviar o arquivo bruto, um PDF garante que seus slides pareçam idênticos em um iPhone, tablet ou PC.

**Por que profissionais convertem para PDF:**
*   **Segurança de Fontes:** Sem erros de "fonte faltando" que destroem seu layout.
*   **Independência de Versão:** Funciona perfeitamente, tenha o receptor PowerPoint 2021 ou nenhum software.
*   **Pronto para Impressão:** Cria documentos perfeitos com margens consistentes.

Nossa ferramenta processa seus arquivos **localmente no seu navegador**, garantindo que suas estratégias confidenciais nunca saiam do seu dispositivo.`,

            step1Title: "Lista de Verificação (Melhores Práticas)",
            step1Content: `Para obter os melhores resultados, verifique estes 3 pontos:

1.  **Conteúdo fora do slide**: Itens que saem da borda podem causar problemas. Mova-os ou apague-os.
2.  **Incorporar fontes**: Nas opções do PowerPoint, marque "Incorporar fontes". Isso ajuda nosso conversor.
3.  **Slides Ocultos**: Se você tem slides "ocultos", eles serão ignorados. Reexiba-os se necessário.
4.  **Comprimir Imagens**: Se o arquivo passar de 50MB, use a função "Comprimir Imagens" do PowerPoint.`,

            step2Title: "Como converter PowerPoint para PDF online",
            step2Content: `Siga estes passos simples para transformar seus slides:

1.  **Envie seu Arquivo**: Clique em "Selecionar Arquivo" ou arraste sua apresentação (.pptx, .ppt).
2.  **Visualize**: Nossa ferramenta exibe uma prévia. Verifique se os gráficos estão visíveis.
3.  **Selecione Páginas (Opcional)**: Se precisar apenas de uma seção específica, selecione esses slides.
4.  **Clique em Converter**: A ferramenta captura cada slide como uma página de alta qualidade.
5.  **Baixar**: Salve seu arquivo PDF, pronto para ser enviado.

**Dica Pro**: Arquivos PDF não tocam vídeos. Esta conversão captura o "estado final" do seu layout.`,

            step3Title: "Comparação: PowerPoint 'Salvar como' vs Nossa Ferramenta",
            step3Content: `Por que usar uma ferramenta online?

| Recurso | PowerPoint "Salvar como" | Conversor pdfcanada.ca |
|---------|--------------------------|------------------------|
| **Acessibilidade** | Requer software caro | Funciona em qualquer lugar |
| **Velocidade** | Lento para abrir app | Arrastar e soltar instantâneo |
| **Privacidade** | Processamento local | **Processamento local** (Mesma segurança!) |
| **Metadados** | Mantém nome do autor | **Remove** metadados ocultos |
| **Arquivos Antigos** | Difícil com .ppt antigo | Lida bem com formatos antigos |`,

            step4Title: "Solução de Problemas de Apresentação",
            step4Content: `**Problema: Minhas animações sumiram.**
*   *Razão:* O PDF é um formato estático. Ele não se move.
*   *Solução:* Isso é normal. Garanta que todo o texto esteja visível no estado final antes de converter.

**Problema: O arquivo é muito grande para email.**
*   *Razão:* O PowerPoint contém imagens de alta resolução.
*   *Solução:* Após converter, use nossa ferramenta **Comprimir PDF** para reduzir o tamanho em 50-80%.

**Problema: Hyperlinks não funcionam.**
*   *Razão:* Links complexos em formas às vezes se perdem.
*   *Solução:* Anexe seus links a texto ou imagens simples, não a objetos "SmartArt" agrupados.

**Problema: Gráficos Excel parecem estranhos.**
*   *Razão:* Gráficos vinculados podem não atualizar.
*   *Solução:* No PowerPoint, "Quebrar Vínculos" garante que o gráfico seja salvo como uma imagem estática.`,

            step5Title: "Privacidade e Segurança",
            step5Content: `Para documentos internos e legais, segurança é inegociável.

*   **Conversão Client-Side:** A mágica acontece na memória do seu navegador. Não vemos seus slides.
*   **Limpeza Instantânea:** Assim que você fecha a aba, os dados somem.
*   **Sem Cloud:** Não somos um provedor de armazenamento nuvem. Não mantemos cópias.`,

            faqTitle: "Perguntas Frequentes",
            faqContent: `**Posso converter anotações do apresentador?**
Nossa ferramenta converte **apenas os slides**. Para incluir notas, use a função "Imprimir para PDF" do PowerPoint com o layout "Páginas de Anotações".

**Minhas fontes personalizadas serão preservadas?**
Tentamos usar fontes incorporadas. Se uma fonte muito específica não puder ser lida, a substituímos por uma fonte padrão similar (ex: Arial) para manter o texto legível.

**O que acontece com vídeos incorporados?**
Eles são removidos. O primeiro quadro do vídeo geralmente é mantido como imagem estática, mas o vídeo não tocará.

**Posso converter arquivos Keynote (Mac)?**
Não diretamente. Exporte seu arquivo Keynote para PowerPoint (.pptx) primeiro, depois use nossa ferramenta.

**Há limite de slides?**
Testamos com apresentações de 500+ slides. O desempenho depende da sua memória RAM.`
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
                    { id: 'checklist', title: t.step1Title, content: t.step1Content },
                    { id: 'how-to', title: t.step2Title, content: t.step2Content },
                    { id: 'comparison', title: t.step3Title, content: t.step3Content },
                    { id: 'troubleshooting', title: t.step4Title, content: t.step4Content },
                    { id: 'privacy', title: t.step5Title, content: t.step5Content },
                    { id: 'faq', title: t.faqTitle, content: t.faqContent }
                ]
            }}
        />
    );
};
