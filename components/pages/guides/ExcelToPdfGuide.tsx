import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { FileSpreadsheet } from 'lucide-react';
import { getLocalizedToolConfig } from '@/lib/toolConfig';

interface Props {
    lang: Language;
}

export const ExcelToPdfGuide: React.FC<Props> = ({ lang }) => {
    const slug = 'excel-to-pdf';
    const toolConfig = getLocalizedToolConfig(slug, lang);
    const title = toolConfig?.title || 'Excel to PDF';

    const content = {
        en: {
            subtitle: "Convert Excel spreadsheets to professional, secure PDF documents instantly",
            intro: `Need to share an Excel spreadsheet but worried about formatting changes, unauthorized edits, or cross-device compatibility? Converting **Excel to PDF** is the industry-standard solution.

Our free **${title}** tool transforms your .xlsx and .xls workbooks into polished, print-ready PDF documents. Unlike simple "Save As" functions, our tool ensures your data looks exactly the same on an iPhone, tablet, or desktop computer.

**Why professionals prefer PDF over Excel for sharing:**
*   **Security:** Prevents accidental modification of cells and formulas.
*   **Consistency:** Fonts and column widths stay fixed, regardless of the viewer's screen size.
*   **Professionalism:** Presents data in a clean, report-style format rather than an infinite grid.

Best of all, our tool allows you to convert files **locally in your browser**. This means your sensitive financial data (balance sheets, payroll, tax forms) never leaves your computer.`,

            step1Title: "Pre-Conversion Checklist (Critical)",
            step1Content: `Before you convert, take 30 seconds to optimize your Excel file for the best PDF results. This prevents issues like cut-off columns or weird page breaks.

1.  **Set the Print Area**: Highlight exactly what you want to show. Go to *Page Layout > Print Area > Set Print Area*. This ignores any scratch notes outside your main table.
2.  **Check Page Breaks**: View your sheet in "Page Break Preview" mode. If a blue line cuts through a column, drag it to the edge to force it onto one page.
3.  **Scale to Fit**: In the Page Layout tab, set "Width" to "1 page" if you want to prevent horizontal scrolling overflow.
4.  **Unhide Importance**: Ensure all the rows and columns you want visible are unhidden. Hidden content will *not* appear in the PDF.`,

            step2Title: "How to Convert Excel to PDF Online",
            step2Content: `Follow these simple steps to transform your spreadsheet into a contract-ready document:

1.  **Upload Your File**: Click the "Select File" button or drag and drop your Excel file (.xlsx, .xls, .xlsm) into the upload area.
2.  **Preview Your Workbook**: Our tool renders a preview. Verify that your columns fit the width of the page.
3.  **Adjust Layout**:
    *   *Orientation:* Switch to **Landscape** for financial statements with many columns.
    *   *Selection:* Choose "Entire Workbook" or specific "Active Sheets".
4.  **Click Convert**: Press the "Convert to PDF" button. The conversion happens instantly using WebAssembly technology.
5.  **Download**: Click "Download" to save your secure PDF file.

**Pro Tip**: If your table is extremely long (e.g., 500+ rows), enable "Repeat Header Rows" in Excel (*Page Setup > Sheet > Rows to repeat at top*) before converting. This ensures your column titles appear on every PDF page.`,

            step3Title: "Feature Comparison: Excel 'Save As' vs. Our Tool",
            step3Content: `Why use an online converter instead of just saving as PDF in Excel?

| Feature | Excel "Save As PDF" | pdfcanada.ca Converter |
|---------|---------------------|------------------------|
| **Device Compatibility** | Requires Excel installed | Works on any device (Phone, Chromebook) |
| **Speed** | Slow to open app | Instant drag-and-drop |
| **Privacy** | Local processing | **Local processing** (Same security!) |
| **Metadata Removal** | Manually remove properties | **Auto-strips** hidden sensitive metadata |
| **Batch Processing** | One by one | Convert multiple files efficiently |
| **Accessibility** | Creates standard PDF | Creates web-optimized PDF |`,

            step4Title: "Troubleshooting Guide",
            step4Content: `**Problem: My columns are chopped off / split onto two pages.**
*   *Cause:* The spreadsheet is wider than a standard A4/Letter page.
*   *Fix:* In Excel, go to Page Layout > Scale to Fit > Width: 1 Page. Alternatively, convert using **Landscape** orientation on our tool.

**Problem: Cell values show as "#####" in the PDF.**
*   *Cause:* The column width in Excel is too narrow to display the number.
*   *Fix:* Double-click the right border of the column header in Excel to "AutoFit" the width before converting.

**Problem: Gridlines are missing (or I want them gone).**
*   *Cause:* PDF conversion respects your Excel print settings.
*   *Fix:* In Excel, go to Page Layout > Sheet Options > Gridlines. Check or Uncheck "Print" depending on your preference.

**Problem: The PDF is huge (file size).**
*   *Cause:* High-resolution charts or embedded images.
*   *Fix:* Use our **Compress PDF** tool after conversion to reduce the file size without losing quality.`,

            step5Title: "Privacy & Security",
            step5Content: `Your financial data deserves maximum protection. We use a **Local-First** architecture.

*   **No Cloud Uploads:** Unlike other free tools, we don't send your Excel files to a cloud server to be processed. The conversion code runs strictly inside your web browser.
*   **Zero Retention:** Since the file never leaves your device, there is nothing for us to delete. It literally never touches our database.
*   **Compliance:** Ideal for handling data subject to PIPEDA (Canada), GDPR (Europe), or HIPAA (USA) regulations.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**Will my formulas be preserved?**
No. PDF is a "read-only" format. All formulas (=SUM, =VLOOKUP) are converted into their calculated static values. This protects your logic from being altered or stolen.

**Can I convert macro-enabled (.xlsm) files?**
Yes. The tool will convert the visible sheets of an .xlsm file to PDF, but the macros (VBA code) will effectively be removed, making the document safe to share.

**How do I convert just one specific tab?**
In the tool settings (after upload), look for "Selection" and choose "Active Sheets Only" or select the specific tab name you wish to convert.

**Will hyperlinks in my cells work in the PDF?**
Yes. Standard hyperlinks (website URLs, email addresses) usually remain clickable in the final PDF document.

**Can I convert PDF back to Excel later?**
Yes! If you lose the original file, use our **PDF to Excel** tool to extract the tables back into an editable spreadsheet.`
        },
        fr: {
            subtitle: "Convertissez des tableurs Excel en documents PDF professionnels et sécurisés instantanément",
            intro: `Besoin de partager une feuille de calcul Excel mais inquiet des changements de formatage ou des modifications non autorisées ? Convertir **Excel en PDF** est la solution standard de l'industrie.

Notre outil gratuit **${title}** transforme vos classeurs .xlsx et .xls en documents PDF soignés. Contrairement à la simple fonction « Enregistrer sous », notre outil garantit que vos données apparaissent exactement de la même manière sur iPhone, tablette ou ordinateur.

**Pourquoi les professionnels préfèrent le PDF :**
*   **Sécurité :** Empêche la modification accidentelle des cellules et formules.
*   **Cohérence :** Les polices et largeurs de colonnes restent fixes.
*   **Professionnalisme :** Présente les données dans un format de rapport propre.

Mieux encore, notre outil permet de convertir les fichiers **localement dans votre navigateur**. Vos données financières sensibles ne quittent jamais votre ordinateur.`,

            step1Title: "Liste de contrôle avant conversion (Critique)",
            step1Content: `Avant de convertir, prenez 30 secondes pour optimiser votre fichier Excel.

1.  **Définir la zone d'impression** : Allez dans *Mise en page > Zone d'impression > Définir*. Cela ignore les notes brouillon.
2.  **Vérifier les sauts de page** : Utilisez le mode "Aperçu des sauts de page". Si une ligne bleue coupe une colonne, déplacez-la.
3.  **Mise à l'échelle** : Dans l'onglet Mise en page, réglez "Largeur" sur "1 page" pour éviter le défilement horizontal.
4.  **Afficher l'important** : Assurez-vous que les colonnes masquées importantes sont révélées.`,

            step2Title: "Comment convertir Excel en PDF en ligne",
            step2Content: `Suivez ces étapes simples pour transformer votre feuille de calcul :

1.  **Téléchargez votre fichier** : Cliquez sur "Sélectionner un fichier" ou glissez-déposez votre Excel (.xlsx, .xls).
2.  **Prévisualisez** : Notre outil affiche un aperçu. Vérifiez que vos colonnes tiennent sur la page.
3.  **Ajustez la mise en page** :
    *   *Orientation :* Passez en **Paysage** pour les tableaux larges.
    *   *Sélection :* Choisissez "Classeur entier" ou des feuilles spécifiques.
4.  **Convertir** : Appuyez sur "Convertir en PDF". La conversion est instantanée.
5.  **Télécharger** : Sauvegardez votre fichier PDF sécurisé.

**Astuce Pro** : Pour les longs tableaux, activez "Répéter les lignes en haut" dans Excel (*Mise en page > Titres*) pour que les titres de colonnes apparaissent sur chaque page PDF.`,

            step3Title: "Comparaison : Excel 'Enregistrer sous' vs Notre Outil",
            step3Content: `Pourquoi utiliser un convertisseur en ligne ?

| Fonctionnalité | Excel "Enregistrer sous" | Convertisseur pdfcanada.ca |
|----------------|--------------------------|----------------------------|
| **Compatibilité** | Nécessite Excel installé | Fonctionne partout (Mobile, Web) |
| **Vitesse** | Lent à ouvrir l'app | Glisser-déposer instantané |
| **Confidentialité** | Traitement local | **Traitement local** (Même sécurité !) |
| **Métadonnées** | Suppression manuelle | **Nettoyage auto** des métadonnées |
| **Traitement par lots** | Un par un | Conversion efficace |`,

            step4Title: "Guide de dépannage",
            step4Content: `**Problème : Mes colonnes sont coupées.**
*   *Cause :* Le tableur est plus large qu'une page A4.
*   *Solution :* Dans Excel, Mise en page > Mettre à l'échelle > Largeur : 1 page. Ou utilisez l'orientation **Paysage**.

**Problème : Les cellules affichent "#####".**
*   *Cause :* La colonne est trop étroite pour le chiffre.
*   *Solution :* Double-cliquez sur la bordure de l'en-tête de colonne pour ajuster la largeur.

**Problème : Les quadrillages manquent.**
*   *Cause :* La conversion respecte vos paramètres d'impression.
*   *Solution :* Dans Excel, Mise en page > Quadrillage > Cochez "Imprimer".

**Problème : Le PDF est énorme.**
*   *Cause :* Graphiques haute résolution.
*   *Solution :* Utilisez notre outil **Compresser PDF** après la conversion.`,

            step5Title: "Confidentialité et sécurité",
            step5Content: `Vos données méritent une protection maximale. Nous utilisons une architecture **Local-First**.

*   **Pas de téléversement Cloud :** Contrairement aux autres outils gratuits, nous n'envoyons pas vos fichiers sur un serveur. Le code s'exécute dans votre navigateur.
*   **Zéro Rétention :** Le fichier ne quitte jamais votre appareil, il n'y a donc rien à supprimer de notre côté.
*   **Conformité :** Idéal pour les données soumises à la LPRPDE (Canada) ou au RGPD (Europe).`,

            faqTitle: "Questions fréquemment posées",
            faqContent: `**Mes formules seront-elles préservées ?**
Non. Le PDF est un format "lecture seule". Les formules (=SOMME) sont converties en leurs valeurs calculées statiques. Cela protège votre logique.

**Puis-je convertir des fichiers avec macros (.xlsm) ?**
Oui. L'outil convertira les feuilles visibles, mais les macros (code VBA) seront supprimées, rendant le document sûr à partager.

**Comment convertir un seul onglet ?**
Dans les paramètres de l'outil, choisissez "Feuilles actives uniquement" ou sélectionnez le nom de l'onglet spécifique.

**Les hyperliens fonctionneront-ils ?**
Oui. Les liens standards (sites web, emails) restent généralement cliquables dans le PDF final.

**Puis-je reconvertir le PDF en Excel ?**
Oui ! Utilisez notre outil **PDF vers Excel** pour extraire les tableaux dans un tableur modifiable.`
        },
        pt: {
            subtitle: "Converta planilhas Excel em documentos PDF profissionais e seguros instantaneamente",
            intro: `Precisa compartilhar uma planilha Excel mas está preocupado com mudanças de formatação ou edições não autorizadas? Converter **Excel para PDF** é a solução padrão da indústria.

Nossa ferramenta gratuita **${title}** transforma suas pastas de trabalho .xlsx e .xls em documentos PDF polidos. Diferente da função "Salvar como" simples, nossa ferramenta garante que seus dados pareçam exatamente iguais no iPhone, tablet ou computador.

**Por que profissionais preferem PDF:**
*   **Segurança:** Previne modificação acidental de células e fórmulas.
*   **Consistência:** Fontes e larguras de colunas permanecem fixas.
*   **Profissionalismo:** Apresenta dados em formato de relatório limpo.

O melhor de tudo, nossa ferramenta converte arquivos **localmente no seu navegador**. Seus dados financeiros sensíveis nunca saem do seu computador.`,

            step1Title: "Lista de Verificação (Crítico)",
            step1Content: `Antes de converter, leve 30 segundos para otimizar seu arquivo Excel.

1.  **Definir Área de Impressão**: Destaque o que deseja mostrar. Vá em *Layout da Página > Área de Impressão > Definir*.
2.  **Verificar Quebras de Página**: Use o modo "Visualização de Quebra de Página". Se uma linha azul cortar uma coluna, arraste-a.
3.  **Escalar para Caber**: Na aba Layout, defina "Largura" para "1 página" para evitar rolagem horizontal.
4.  **Reexibir Importantes**: Garanta que colunas ocultas importantes estejam visíveis.`,

            step2Title: "Como converter Excel para PDF online",
            step2Content: `Siga estes passos simples para transformar sua planilha:

1.  **Envie seu Arquivo**: Clique em "Selecionar Arquivo" ou arraste seu Excel (.xlsx, .xls).
2.  **Visualize**: Nossa ferramenta exibe uma prévia. Verifique se as colunas cabem na página.
3.  **Ajuste o Layout**:
    *   *Orientação:* Mude para **Paisagem** para tabelas largas.
    *   *Seleção:* Escolha "Pasta Inteira" ou planilhas específicas.
4.  **Converter**: Pressione "Converter para PDF". A conversão é instantânea.
5.  **Baixar**: Salve seu arquivo PDF seguro.

**Dica Pro**: Para tabelas longas, ative "Repetir linhas no topo" no Excel (*Configurar Página > Planilha*) para manter os cabeçalhos em todas as páginas.`,

            step3Title: "Comparação: Excel 'Salvar como' vs Nossa Ferramenta",
            step3Content: `Por que usar um conversor online?

| Recurso | Excel "Salvar como" | Conversor pdfcanada.ca |
|---------|---------------------|------------------------|
| **Compatibilidade** | Requer Excel instalado | Funciona em qualquer lugar |
| **Velocidade** | Lento para abrir app | Arrastar e soltar instantâneo |
| **Privacidade** | Processamento local | **Processamento local** (Mesma segurança!) |
| **Metadados** | Remoção manual | **Limpeza automática** |
| **Processamento em lote** | Um por um | Conversão eficiente |`,

            step4Title: "Guia de Solução de Problemas",
            step4Content: `**Problema: Minhas colunas estão cortadas.**
*   *Causa:* A planilha é mais larga que uma página A4.
*   *Solução:* No Excel, Layout da Página > Reduzir para Caber > Largura: 1 página. Ou use orientação **Paisagem**.

**Problema: Células mostram "#####".**
*   *Causa:* A coluna é muito estreita para o número.
*   *Solução:* Clique duas vezes na borda do cabeçalho da coluna para ajustar a largura.

**Problema: Linhas de grade sumiram.**
*   *Causa:* A conversão respeita configurações de impressão.
*   *Solução:* No Excel, Layout > Linhas de Grade > Marque "Imprimir".

**Problema: O PDF ficou enorme.**
*   *Causa:* Gráficos de alta resolução.
*   *Solução:* Use nossa ferramenta **Comprimir PDF** após a conversão.`,

            step5Title: "Privacidade e Segurança",
            step5Content: `Seus dados merecem proteção máxima. Usamos arquitetura **Local-First**.

*   **Sem Upload na Nuvem:** Diferente de outras ferramentas, não enviamos seus arquivos para servidores. O código roda no seu navegador.
*   **Zero Retenção:** O arquivo nunca sai do seu dispositivo.
*   **Conformidade:** Ideal para dados sujeitos à LGPD (Brasil) ou outras leis de privacidade.`,

            faqTitle: "Perguntas Frequentes",
            faqContent: `**Minhas fórmulas serão preservadas?**
Não. PDF é "somente leitura". Fórmulas (=SOMA) tornam-se valores estáticos. Isso protege sua lógica.

**Posso converter arquivos com macros (.xlsm)?**
Sim. A ferramenta converterá as planilhas visíveis, mas as macros serão removidas, tornando o documento seguro.

**Como converter apenas uma aba?**
Nas configurações, escolha "Apenas Planilhas Ativas" ou selecione o nome da aba específica.

**Os hyperlinks funcionarão?**
Sim. Links padrão (sites, emails) geralmente permanecem clicáveis no PDF final.

**Posso converter PDF de volta para Excel?**
Sim! Use nossa ferramenta **PDF para Excel** para extrair as tabelas de volta para uma planilha editável.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<FileSpreadsheet className="w-6 h-6 text-canada-red" />}
            content={{
                seoTitle: `${title} | Free Excel to PDF Converter Online | pdfcanada.ca`,
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
