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
            intro: `Need to share an Excel spreadsheet but worried about formatting changes or unauthorized edits? Converting **Excel to PDF** is the perfect solution. Our free **${title}** tool transforms your .xlsx and .xls workbooks into polished, print-ready PDF documents that look exactly the same on every device.

Whether you're a financial analyst sending quarterly reports, a teacher distributing grade sheets, or a business owner sharing invoices, PDF ensures your carefully crafted spreadsheets maintain their layout, formulas (as values), and professional appearance. Best of all, our tool processes everything locally in your browser—your sensitive financial data never leaves your device.

### Who Needs This Tool?

*   **Accountants & Financial Professionals**: Share balance sheets, income statements, and budgets securely.
*   **HR Departments**: Distribute payroll summaries and employee schedules.
*   **Students & Educators**: Submit assignments and share grade reports.
*   **Small Business Owners**: Send professional invoices and quotes to clients.
*   **Project Managers**: Share Gantt charts and resource allocation tables.`,

            step1Title: "How to Convert Excel to PDF Online",
            step1Content: `Follow these simple steps to transform your Excel spreadsheet into a PDF document:

1.  **Upload Your File**: Click the "Select File" button or drag and drop your Excel file (.xlsx or .xls) into the upload area.

2.  **Preview Your Spreadsheet**: Our tool displays a preview of your workbook. Check that all sheets you want to convert are visible.

3.  **Adjust Settings (Optional)**: Select specific sheets to include, or convert the entire workbook. Choose page orientation (portrait or landscape) based on your column count.

4.  **Click Convert**: Press the "Convert to PDF" button. The conversion happens instantly in your browser.

5.  **Download Your PDF**: Once complete, click "Download" to save your new PDF file. The original formatting, column widths, and cell styles are preserved.

**Pro Tip**: For wide spreadsheets with many columns, landscape orientation often produces better results. For financial statements, portrait orientation is typically preferred.`,

            step2Title: "Features & Benefits",
            step2Content: `Our Excel to PDF converter offers powerful features for professional results:

*   **Perfect Layout Preservation**: Column widths, row heights, merged cells, and borders remain exactly as you designed them.
*   **Gridline Control**: Preserves or hides gridlines based on your Excel print settings.
*   **Multi-Sheet Support**: Convert all worksheets in a workbook to a single PDF document.
*   **100% Private Processing**: Your files never leave your browser—ideal for financial and confidential data.
*   **Formula Results**: While formulas don't transfer to PDF, all calculated values are displayed correctly.
*   **Chart & Graphics Support**: Embedded charts and images convert with high fidelity.
*   **No File Size Limits**: Process large workbooks without restrictions.
*   **No Watermarks**: Your output is completely clean and professional.
*   **Free & Unlimited**: Convert as many files as you need, no signup required.`,

            step3Title: "Privacy & Security",
            step3Content: `Your financial data deserves maximum protection. Here's how we keep your spreadsheets secure:

**Local-First Processing**
Unlike cloud-based converters that upload your files to remote servers, our tool processes everything directly in your web browser using WebAssembly technology. Your Excel files never leave your device.

**Zero Data Retention**
We don't store, cache, or log any of your spreadsheet data. When you close the browser tab, all data is immediately cleared from memory.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements under PIPEDA (Personal Information Protection and Electronic Documents Act).

**Comparison with Cloud Converters:**

| Feature | pdfcanada.ca (Local) | Cloud Converters |
|---------|---------------------|------------------|
| Data Upload | ❌ Never uploaded | ✅ Uploaded to servers |
| Server Storage | ❌ No server storage | ⚠️ Often stored temporarily |
| Privacy Risk | ✅ Minimal | ⚠️ Data exposure risk |
| Speed | ✅ Instant | ⚠️ Depends on connection |
| Works Offline | ✅ After page load | ❌ Requires internet |`,

            step4Title: "Common Use Cases",
            step4Content: `**Financial Reporting**
Convert quarterly reports, annual budgets, and financial statements to PDF for board meetings and stakeholder presentations.

**Invoice Generation**
Transform Excel invoices into professional PDFs that can't be accidentally edited by clients.

**Academic Submissions**
Submit spreadsheet-based assignments in PDF format, ensuring professors see exactly what you intended.

**Data Archival**
Create permanent PDF records of important spreadsheets for compliance and record-keeping.

**Email Attachments**
PDF files are universally compatible and typically smaller than Excel files, making them ideal for email.

**Print-Ready Documents**
PDFs print exactly as displayed, eliminating "what you see is what you get" issues common with Excel printing.`,

            step5Title: "Troubleshooting Common Issues",
            step5Content: `**Problem: Columns are cut off in the PDF**
*Solution*: Switch to landscape orientation, or adjust column widths in Excel before converting. Very wide spreadsheets may need to be split or scaled.

**Problem: Gridlines aren't showing/hiding as expected**
*Solution*: Our tool respects your Excel print settings. Go to Page Layout → Sheet Options in Excel and toggle "Print" under Gridlines.

**Problem: Some sheets are missing from the PDF**
*Solution*: Ensure all desired sheets are unhidden in Excel. Hidden sheets are not included in the conversion.

**Problem: Charts look different in the PDF**
*Solution*: Complex charts with 3D effects may render slightly differently. For best results, use simpler chart styles.

**Problem: The conversion seems slow**
*Solution*: Very large workbooks (50+ MB) may take longer as all processing happens in your browser. Close other tabs to free up memory.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**Will my formulas be editable in the PDF?**
No, PDF is a static format. Your formula results (calculated values) are displayed, but the formulas themselves are not included. This is actually a benefit—it prevents others from seeing or modifying your calculations.

**Can I convert password-protected Excel files?**
You'll need to remove password protection first, or enter the password when opening the file in Excel, then save an unprotected copy.

**What Excel formats are supported?**
We support .xlsx (Excel 2007+), .xls (Excel 97-2003), and .xlsm (macro-enabled workbooks, though macros won't function in PDF).

**Will my conditional formatting be preserved?**
Yes! Conditional formatting colors and styles are captured in the PDF output.

**Can I convert multiple Excel files at once?**
Currently, you convert files one at a time. For batch processing, convert each file separately.

**How do I control which sheets are converted?**
By default, all visible sheets are converted. To convert specific sheets, hide the ones you don't want before converting.

**Is there a file size limit?**
There's no hard limit, but very large files (100+ MB) may be slow to process. For optimal performance, keep files under 50 MB.

**Will my print area settings be respected?**
Yes, if you've defined a print area in Excel, only that range will be converted to PDF.

**Can I convert Excel files created on Mac?**
Yes, Excel files from any platform (Windows, Mac, iOS, Android, web) are fully supported.

**Why does my PDF look different from Excel's Print Preview?**
Minor differences may occur with complex formatting. For critical documents, compare the PDF output to your Excel file and adjust settings as needed.

**Is this tool really free?**
Yes, 100% free with no hidden costs, watermarks, or usage limits.

**Do you support Excel Online files?**
Download your Excel Online file as .xlsx first, then convert it here.`
        },
        fr: {
            subtitle: "Convertissez des feuilles de calcul Excel en documents PDF professionnels et sécurisés instantanément",
            intro: `Besoin de partager une feuille de calcul Excel mais inquiet des changements de formatage ou des modifications non autorisées ? Convertir **Excel en PDF** est la solution parfaite. Notre outil gratuit **${title}** transforme vos classeurs .xlsx et .xls en documents PDF soignés et prêts à imprimer qui apparaissent exactement de la même façon sur tous les appareils.

Que vous soyez un analyste financier envoyant des rapports trimestriels, un enseignant distribuant des bulletins de notes, ou un propriétaire d'entreprise partageant des factures, le PDF garantit que vos feuilles de calcul maintiennent leur mise en page et leur apparence professionnelle. Mieux encore, notre outil traite tout localement dans votre navigateur—vos données financières sensibles ne quittent jamais votre appareil.

### Qui a besoin de cet outil ?

*   **Comptables et professionnels financiers** : Partagez des bilans et budgets en toute sécurité.
*   **Départements RH** : Distribuez des résumés de paie et des horaires d'employés.
*   **Étudiants et éducateurs** : Soumettez des travaux et partagez des bulletins.
*   **Propriétaires de petites entreprises** : Envoyez des factures professionnelles aux clients.
*   **Gestionnaires de projets** : Partagez des diagrammes de Gantt et des tableaux d'allocation.`,

            step1Title: "Comment convertir Excel en PDF en ligne",
            step1Content: `Suivez ces étapes simples pour transformer votre feuille de calcul Excel en document PDF :

1.  **Téléchargez votre fichier** : Cliquez sur le bouton « Sélectionner un fichier » ou glissez-déposez votre fichier Excel (.xlsx ou .xls).

2.  **Prévisualisez votre feuille** : Notre outil affiche un aperçu de votre classeur. Vérifiez que toutes les feuilles souhaitées sont visibles.

3.  **Ajustez les paramètres (optionnel)** : Sélectionnez des feuilles spécifiques ou convertissez tout le classeur.

4.  **Cliquez sur Convertir** : Appuyez sur le bouton « Convertir en PDF ». La conversion se fait instantanément.

5.  **Téléchargez votre PDF** : Une fois terminé, cliquez sur « Télécharger » pour sauvegarder votre nouveau fichier PDF.

**Conseil** : Pour les feuilles larges avec beaucoup de colonnes, l'orientation paysage produit souvent de meilleurs résultats.`,

            step2Title: "Fonctionnalités et avantages",
            step2Content: `Notre convertisseur Excel vers PDF offre des fonctionnalités puissantes :

*   **Préservation parfaite de la mise en page** : Largeurs de colonnes, hauteurs de lignes et bordures restent exactement comme vous les avez conçues.
*   **Contrôle des quadrillages** : Préserve ou masque les quadrillages selon vos paramètres Excel.
*   **Support multi-feuilles** : Convertissez toutes les feuilles de calcul en un seul document PDF.
*   **Traitement 100% privé** : Vos fichiers ne quittent jamais votre navigateur—idéal pour les données confidentielles.
*   **Résultats des formules** : Toutes les valeurs calculées sont affichées correctement.
*   **Support des graphiques** : Graphiques et images intégrés se convertissent avec haute fidélité.
*   **Aucune limite de taille** : Traitez de grands classeurs sans restrictions.
*   **Sans filigrane** : Votre sortie est complètement propre et professionnelle.
*   **Gratuit et illimité** : Convertissez autant de fichiers que nécessaire.`,

            step3Title: "Confidentialité et sécurité",
            step3Content: `Vos données financières méritent une protection maximale. Voici comment nous sécurisons vos feuilles de calcul :

**Traitement Local-First**
Contrairement aux convertisseurs cloud qui téléchargent vos fichiers sur des serveurs distants, notre outil traite tout directement dans votre navigateur. Vos fichiers Excel ne quittent jamais votre appareil.

**Zéro rétention de données**
Nous ne stockons, ne mettons pas en cache et n'enregistrons aucune de vos données. Quand vous fermez l'onglet, toutes les données sont immédiatement effacées.

**Conforme LPRPDE**
Notre approche « vie privée d'abord » dépasse les exigences canadiennes en matière de confidentialité.`,

            step4Title: "Cas d'utilisation courants",
            step4Content: `**Rapports financiers**
Convertissez des rapports trimestriels et des budgets annuels en PDF pour les réunions du conseil.

**Génération de factures**
Transformez vos factures Excel en PDF professionnels qui ne peuvent pas être accidentellement modifiés.

**Soumissions académiques**
Soumettez vos travaux basés sur des feuilles de calcul au format PDF.

**Archivage de données**
Créez des enregistrements PDF permanents pour la conformité.

**Pièces jointes par courriel**
Les PDF sont universellement compatibles et généralement plus petits que les fichiers Excel.`,

            step5Title: "Dépannage des problèmes courants",
            step5Content: `**Problème : Les colonnes sont coupées dans le PDF**
*Solution* : Passez en orientation paysage, ou ajustez les largeurs de colonnes dans Excel avant la conversion.

**Problème : Les quadrillages ne s'affichent pas comme prévu**
*Solution* : Notre outil respecte vos paramètres d'impression Excel. Allez dans Mise en page → Options de feuille.

**Problème : Certaines feuilles manquent dans le PDF**
*Solution* : Assurez-vous que toutes les feuilles souhaitées sont visibles dans Excel.

**Problème : La conversion semble lente**
*Solution* : Les très grands classeurs peuvent prendre plus de temps. Fermez d'autres onglets pour libérer de la mémoire.`,

            faqTitle: "Questions fréquemment posées",
            faqContent: `**Mes formules seront-elles modifiables dans le PDF ?**
Non, le PDF est un format statique. Les résultats de vos formules sont affichés, mais les formules elles-mêmes ne sont pas incluses.

**Puis-je convertir des fichiers Excel protégés par mot de passe ?**
Vous devrez d'abord supprimer la protection par mot de passe ou enregistrer une copie non protégée.

**Quels formats Excel sont supportés ?**
Nous supportons .xlsx (Excel 2007+), .xls (Excel 97-2003), et .xlsm.

**Ma mise en forme conditionnelle sera-t-elle préservée ?**
Oui ! Les couleurs et styles de mise en forme conditionnelle sont capturés.

**Puis-je convertir plusieurs fichiers Excel à la fois ?**
Actuellement, vous convertissez les fichiers un à la fois.

**Y a-t-il une limite de taille de fichier ?**
Pas de limite stricte, mais les très gros fichiers (100+ Mo) peuvent être lents à traiter.

**Cet outil est-il vraiment gratuit ?**
Oui, 100% gratuit sans coûts cachés, filigranes ou limites d'utilisation.

**Supportez-vous les fichiers Excel Online ?**
Téléchargez d'abord votre fichier Excel Online en .xlsx, puis convertissez-le ici.`
        },
        pt: {
            subtitle: "Converta planilhas Excel para documentos PDF profissionais e seguros instantaneamente",
            intro: `Precisa compartilhar uma planilha Excel mas está preocupado com mudanças de formatação ou edições não autorizadas? Converter **Excel para PDF** é a solução perfeita. Nossa ferramenta gratuita **${title}** transforma suas pastas de trabalho .xlsx e .xls em documentos PDF polidos e prontos para impressão que aparecem exatamente iguais em qualquer dispositivo.

Seja você um analista financeiro enviando relatórios trimestrais, um professor distribuindo boletins, ou um empresário compartilhando faturas, o PDF garante que suas planilhas cuidadosamente elaboradas mantenham seu layout e aparência profissional. O melhor de tudo é que nossa ferramenta processa tudo localmente no seu navegador—seus dados financeiros sensíveis nunca saem do seu dispositivo.

### Quem precisa desta ferramenta?

*   **Contadores e profissionais financeiros**: Compartilhe balanços e orçamentos com segurança.
*   **Departamentos de RH**: Distribua resumos de folha de pagamento e cronogramas.
*   **Estudantes e educadores**: Submeta trabalhos e compartilhe boletins.
*   **Proprietários de pequenas empresas**: Envie faturas profissionais para clientes.
*   **Gerentes de projeto**: Compartilhe gráficos de Gantt e tabelas de alocação.`,

            step1Title: "Como converter Excel para PDF online",
            step1Content: `Siga estes passos simples para transformar sua planilha Excel em documento PDF:

1.  **Envie seu arquivo**: Clique no botão "Selecionar arquivo" ou arraste e solte seu arquivo Excel (.xlsx ou .xls).

2.  **Visualize sua planilha**: Nossa ferramenta exibe uma prévia da sua pasta de trabalho.

3.  **Ajuste as configurações (opcional)**: Selecione planilhas específicas ou converta toda a pasta de trabalho.

4.  **Clique em Converter**: Pressione o botão "Converter para PDF". A conversão acontece instantaneamente.

5.  **Baixe seu PDF**: Após concluir, clique em "Download" para salvar seu novo arquivo PDF.

**Dica**: Para planilhas largas com muitas colunas, a orientação paisagem geralmente produz melhores resultados.`,

            step2Title: "Recursos e benefícios",
            step2Content: `Nosso conversor de Excel para PDF oferece recursos poderosos:

*   **Preservação perfeita do layout**: Larguras de colunas, alturas de linhas e bordas permanecem exatamente como você as projetou.
*   **Controle de linhas de grade**: Preserva ou oculta linhas de grade conforme suas configurações do Excel.
*   **Suporte multi-planilhas**: Converta todas as planilhas em um único documento PDF.
*   **Processamento 100% privado**: Seus arquivos nunca saem do navegador—ideal para dados financeiros.
*   **Resultados de fórmulas**: Todos os valores calculados são exibidos corretamente.
*   **Suporte a gráficos**: Gráficos e imagens incorporados são convertidos com alta fidelidade.
*   **Sem limites de tamanho**: Processe grandes pastas de trabalho sem restrições.
*   **Sem marcas d'água**: Sua saída é completamente limpa e profissional.
*   **Gratuito e ilimitado**: Converta quantos arquivos precisar.`,

            step3Title: "Privacidade e segurança",
            step3Content: `Seus dados financeiros merecem máxima proteção. Veja como mantemos suas planilhas seguras:

**Processamento Local-First**
Diferente de conversores em nuvem que enviam seus arquivos para servidores remotos, nossa ferramenta processa tudo diretamente no seu navegador. Seus arquivos Excel nunca saem do seu dispositivo.

**Zero retenção de dados**
Não armazenamos, não fazemos cache e não registramos nenhum dos seus dados. Quando você fecha a aba, todos os dados são imediatamente limpos.

**Conformidade com LGPD**
Nossa abordagem "privacidade primeiro" atende às exigências brasileiras de proteção de dados.`,

            step4Title: "Casos de uso comuns",
            step4Content: `**Relatórios financeiros**
Converta relatórios trimestrais e orçamentos anuais para PDF para reuniões de diretoria.

**Geração de faturas**
Transforme faturas Excel em PDFs profissionais que não podem ser acidentalmente editados.

**Submissões acadêmicas**
Submeta trabalhos baseados em planilhas no formato PDF.

**Arquivamento de dados**
Crie registros PDF permanentes para conformidade e manutenção de registros.

**Anexos de e-mail**
PDFs são universalmente compatíveis e geralmente menores que arquivos Excel.`,

            step5Title: "Solução de problemas comuns",
            step5Content: `**Problema: Colunas estão cortadas no PDF**
*Solução*: Mude para orientação paisagem, ou ajuste as larguras das colunas no Excel antes de converter.

**Problema: Linhas de grade não aparecem como esperado**
*Solução*: Nossa ferramenta respeita suas configurações de impressão do Excel.

**Problema: Algumas planilhas estão faltando no PDF**
*Solução*: Certifique-se de que todas as planilhas desejadas estão visíveis no Excel.

**Problema: A conversão parece lenta**
*Solução*: Pastas de trabalho muito grandes podem levar mais tempo. Feche outras abas para liberar memória.`,

            faqTitle: "Perguntas frequentes",
            faqContent: `**Minhas fórmulas serão editáveis no PDF?**
Não, PDF é um formato estático. Os resultados das suas fórmulas são exibidos, mas as fórmulas em si não são incluídas.

**Posso converter arquivos Excel protegidos por senha?**
Você precisará remover a proteção por senha primeiro ou salvar uma cópia desprotegida.

**Quais formatos Excel são suportados?**
Suportamos .xlsx (Excel 2007+), .xls (Excel 97-2003) e .xlsm.

**Minha formatação condicional será preservada?**
Sim! Cores e estilos de formatação condicional são capturados.

**Posso converter vários arquivos Excel de uma vez?**
Atualmente, você converte arquivos um de cada vez.

**Há limite de tamanho de arquivo?**
Sem limite rígido, mas arquivos muito grandes (100+ MB) podem ser lentos para processar.

**Esta ferramenta é realmente gratuita?**
Sim, 100% gratuita sem custos ocultos, marcas d'água ou limites de uso.

**Vocês suportam arquivos Excel Online?**
Baixe primeiro seu arquivo Excel Online como .xlsx, depois converta aqui.`
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
