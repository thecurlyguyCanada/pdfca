import React from 'react';
import { GuideTemplate } from './GuideTemplate';
import { Language } from '@/utils/i18n';
import { WifiOff } from 'lucide-react';

interface Props {
    lang: Language;
}

export const PdfToWordOfflineGuide: React.FC<Props> = ({ lang }) => {
    // We use a custom slug that might not exist in toolConfig, but we provide manual fallbacks
    const slug = 'pdf-to-word-offline';
    // const toolConfig = getLocalizedToolConfig(slug, lang); // Likely undefined for this specific guide
    const title = lang === 'fr' ? 'Convertir PDF en Word Hors Ligne' : (lang === 'pt' ? 'Converter PDF para Word Offline' : 'Convert PDF to Word Offline');

    const content = {
        en: {
            subtitle: "Securely convert documents on your computer without an internet connection",
            intro: `While online converters are convenient, there are times when **offline conversion** is the only safe or practical choice. Maybe you are working with highly confidential legal documents that cannot leave your building, or perhaps you are on a flight with spotty Wi-Fi.

This guide explores the best methods to **convert PDF files to editable Word documents (.docx)** locally on your Windows or Mac computer.

**Why choose offline conversion?**
*   **Maximum Security:** Your data physically never leaves your hard drive.
*   **No File Size Limits:** Convert 500MB+ legal briefs that would choke an online uploader.
*   **Reliability:** Works perfectly whether you have fiber internet or no signal at all.`,

            step1Title: "Method 1: Using Microsoft Word (easiest)",
            step1Content: `Most people don't realize that **Microsoft Word (2013 and later)** has a built-in PDF converter. It's often the best "free" tool you already have installed.

**How to do it:**
1.  **Open Microsoft Word** (not the PDF).
2.  Go to **File > Open**.
3.  Browse and select your PDF file.
4.  Word will show a popup saying: *"Word will now convert your PDF to an editable Word document."* Click **OK**.
5.  Wait for the progress bar to finish.
6.  **Save As:** Go to File > Save As and save your new .docx file.

**Pros:**
*   Free (if you have Word).
*   Great for text-heavy documents like contracts and essays.

**Cons:**
*   Often struggles with complex formatting (tables, floating images).
*   Might shift layouts significantly.`,

            step2Title: "Method 2: Adobe Acrobat Pro (Best Quality)",
            step2Content: `Adobe invented the PDF, so naturally, their paid software, **Acrobat Pro**, offers the most accurate conversion engine available.

**How to do it:**
1.  Open your PDF in **Adobe Acrobat Pro**.
2.  In the right-hand toolbar, click **"Export PDF"**.
3.  Select **"Microsoft Word"** as your export format.
4.  Make sure "Word Document" is checked.
5.  Click **Export**.
6.  Name your file and save.

**Pros:**
*   Extremely accurate formatting preservation.
*   Includes OCR (Optical Character Recognition) for scanned files.

**Cons:**
*   Expensive subscription required.`,

            step3Title: "Method 3: LibreOffice (Free Alternative)",
            step3Content: `If you don't have Microsoft Office and don't want to pay for Adobe, **LibreOffice** is a powerful open-source alternative.

**How to do it:**
1.  Download and install **LibreOffice** (free).
2.  Open the **LibreOffice Draw** application.
3.  **File > Open** your PDF.
4.  You can edit text boxes directly here, though it acts more like a drawing tool.
5.  To get it into Word format: **File > Export As > PDF** (if you just edited) or copy-paste text into LibreOffice Writer.
*Note: LibreOffice is better for minor text edits than full format conversion.*`,

            step4Title: "Comparison: Online vs. Offline Conversion",
            step4Content: `When should you use a desktop app vs. a website?

| Feature | Offline Software (Word/Acrobat) | Online Converter (pdfcanada.ca) |
|---------|--------------------------------|---------------------------------|
| **Setup** | Requires installation | Instant (No install) |
| **Privacy** | 100% Local | **100% Local** (on our site!) |
| **Cost** | $$$ (Office/Adobe) | **Free** |
| **Speed** | Depends on PC speed | Instant |
| **Mobile** | Difficult | Works on iPhone/Android |
| **Scans** | Good (Adobe Only) | Good (w/ OCR tools) |`,

            step5Title: "Troubleshooting Offline Conversions",
            step5Content: `**Problem: The text in Word is inside "Text Boxes" and hard to edit.**
*   *Cause:* Word converts PDF layout by placing text in floating frames to keep positions exact.
*   *Fix:* This is normal. You can try copying the text out into a fresh document to "clean" the formatting, or use "Paste Special > Unformatted Text".

**Problem: My scanned document is just an image in Word.**
*   *Cause:* You tried to convert a scan without OCR. Word (Standard) doesn't always perform OCR.
*   *Fix:* You need a tool with OCR capabilities. Microsoft OneNote has a "Copy Text from Picture" feature, or use our **Scanned PDF to Word** online tool which includes OCR.

**Problem: Missing fonts.**
*   *Cause:* The PDF used a font you don't have installed.
*   *Fix:* Word substitutes it with Calibri or Times. You must purchase and install the original font to maintain the exact look.`,

            faqTitle: "Frequently Asked Questions",
            faqContent: `**Can I convert PDF to Word offline for free?**
Yes, if you already have Microsoft Word installed, it's included. If not, LibreOffice is a free desktop alternative, though conversion quality varies.

**Is offline conversion safer?**
 generally yes, as data never touches the internet. However, our online tool (pdfcanada.ca) uses **WebAssembly** to run offline code inside your browser, offering the same security without installing software.

**How do I convert a batch of files offline?**
Adobe Acrobat Pro has an "Action Wizard" to process hundreds of files. Microsoft Word requires you to open them one by one (or use a macro script).

**Why does my converted Word doc look messy?**
PDFs are "fixed layout" (like a painting), while Word is "reflowable" (like a liquid). Converting between them is difficult. For perfect results with complex layouts, often a professional paid tool like Adobe Acrobat is required.

**Does Google Docs work offline?**
Technically, Google Docs is a cloud tool, but if you enable "Offline Mode" in Chrome, you can sometimes open PDFs. However, the conversion usually happens on Google's servers, so it's not strictly "offline" in terms of data privacy.`
        },
        fr: {
            subtitle: "Convertissez des documents en toute sécurité sur votre ordinateur sans connexion internet",
            intro: `Bien que les convertisseurs en ligne soient pratiques, il y a des moments où la **conversion hors ligne** est le seul choix sûr. Peut-être travaillez-vous avec des documents juridiques confidentiels ou êtes-vous dans un avion sans Wi-Fi.

Ce guide explore les meilleures méthodes pour **convertir des fichiers PDF en Word (.docx)** localement sur votre ordinateur.

**Pourquoi choisir la conversion hors ligne ?**
*   **Sécurité maximale :** Vos données ne quittent jamais physiquement votre disque dur.
*   **Aucune limite de taille :** Convertissez des dossiers de 500 Mo.
*   **Fiabilité :** Fonctionne parfaitement, même sans signal internet.`,

            step1Title: "Méthode 1 : Utiliser Microsoft Word (Le plus simple)",
            step1Content: `La plupart des gens ne réalisent pas que **Microsoft Word (2013+)** intègre un convertisseur PDF.

**Comment faire :**
1.  **Ouvrez Microsoft Word**.
2.  Allez dans **Fichier > Ouvrir**.
3.  Sélectionnez votre fichier PDF.
4.  Word affichera un message : *"Word va maintenant convertir votre PDF..."* Cliquez sur **OK**.
5.  Attendez la fin du chargement.
6.  **Enregistrer sous :** Sauvegardez votre nouveau fichier .docx.

**Avantages :**
*   Gratuit (si vous avez Word).
*   Idéal pour les documents textuels simples.

**Inconvénients :**
*   Lutte souvent avec le formatage complexe (tableaux, images flottantes).
*   Peut décaler la mise en page.`,

            step2Title: "Méthode 2 : Adobe Acrobat Pro (Meilleure Qualité)",
            step2Content: `Adobe a inventé le PDF, donc **Acrobat Pro** offre logiquement le moteur de conversion le plus précis.

**Comment faire :**
1.  Ouvrez votre PDF dans **Adobe Acrobat Pro**.
2.  Dans la barre latérale, cliquez sur **"Exporter PDF"**.
3.  Sélectionnez **"Microsoft Word"**.
4.  Cliquez sur **Exporter**.

**Avantages :**
*   Préservation du formatage extrêmement précise.
*   Inclut l'OCR pour les fichiers scannés.

**Inconvénients :**
*   Abonnement coûteux requis.`,

            step3Title: "Méthode 3 : LibreOffice (Alternative Gratuite)",
            step3Content: `Si vous n'avez pas Office et ne voulez pas payer Adobe, **LibreOffice** est une alternative open-source.

**Comment faire :**
1.  Installez **LibreOffice** (gratuit).
2.  Ouvrez l'application **LibreOffice Draw**.
3.  **Fichier > Ouvrir** votre PDF.
4.  Vous pouvez éditer les zones de texte ici.
*Note : LibreOffice est meilleur pour les petites retouches que pour la conversion complète.*`,

            step4Title: "Comparaison : En ligne vs Hors ligne",
            step4Content: `Quand utiliser une application de bureau ?

| Fonctionnalité | Logiciel Hors ligne | Convertisseur En ligne (pdfcanada.ca) |
|----------------|---------------------|---------------------------------------|
| **Installation** | Requise | Immédiate (Aucune) |
| **Confidentialité** | 100% Local | **100% Local** (sur notre site!) |
| **Coût** | $$$ (Office/Adobe) | **Gratuit** |
| **Vitesse** | Dépend du PC | Instantané |
| **Scans** | Bon (Adobe Uniquement) | Bon (avec outils OCR) |`,

            step5Title: "Dépannage des conversions hors ligne",
            step5Content: `**Problème : Le texte est dans des "Zones de texte".**
*   *Cause :* Word place le texte dans des cadres pour garder la position exacte.
*   *Solution :* C'est normal. Copiez le texte dans un nouveau document pour "nettoyer" le formatage.

**Problème : Mon document scanné est juste une image.**
*   *Cause :* Word (Standard) ne fait pas toujours l'OCR.
*   *Solution :* Utilisez OneNote (Copier le texte de l'image) ou notre outil **PDF en Word Scanné**.

**Problème : Polices manquantes.**
*   *Cause :* Le PDF utilisait une police que vous n'avez pas.
*   *Solution :* Word la remplace par défaut. Vous devez installer la police originale.`,

            faqTitle: "Questions Fréquentes",
            faqContent: `**Est-ce gratuit ?**
Oui, si vous avez déjà Word. Sinon, LibreOffice est gratuit.

**Est-ce plus sûr ?**
Généralement oui, car les données ne touchent pas internet. Cependant, notre outil en ligne utilise aussi une technologie locale sécurisée.

**Comment convertir par lot hors ligne ?**
Adobe Acrobat Pro possède un assistant pour traiter des centaines de fichiers.

**Pourquoi mon Word est-il désordonné ?**
Les PDF sont à "mise en page fixe". Word est à "mise en page fluide". La traduction entre les deux est complexe.`
        },
        pt: {
            subtitle: "Converta documentos com segurança no seu computador sem conexão com a internet",
            intro: `Embora conversores online sejam convenientes, há momentos em que a **conversão offline** é a única escolha segura. Talvez você esteja trabalhando com documentos jurídicos confidenciais ou esteja em um voo sem Wi-Fi.

Este guia explora os melhores métodos para **converter arquivos PDF em Word (.docx)** localmente no seu computador.

**Por que escolher conversão offline?**
*   **Segurança Máxima:** Seus dados nunca saem do seu disco rígido.
*   **Sem Limites de Tamanho:** Converta arquivos de 500MB+.
*   **Confiabilidade:** Funciona perfeitamente, mesmo sem sinal de internet.`,

            step1Title: "Método 1: Usando Microsoft Word (Mais fácil)",
            step1Content: `A maioria das pessoas não sabe que o **Microsoft Word (2013+)** tem um conversor de PDF integrado.

**Como fazer:**
1.  **Abra o Microsoft Word**.
2.  Vá em **Arquivo > Abrir**.
3.  Selecione seu arquivo PDF.
4.  O Word mostrará um aviso: *"O Word converterá seu PDF..."* Clique em **OK**.
5.  Aguarde o carregamento.
6.  **Salvar Como:** Salve seu novo arquivo .docx.

**Prós:**
*   Gratuito (se você tem o Word).
*   Ótimo para documentos de texto simples.

**Contras:**
*   Luta com formatação complexa (tabelas, imagens flutuantes).
*   Pode deslocar o layout.`,

            step2Title: "Método 2: Adobe Acrobat Pro (Melhor Qualidade)",
            step2Content: `A Adobe inventou o PDF, então o **Acrobat Pro** oferece o motor de conversão mais preciso.

**Como fazer:**
1.  Abra seu PDF no **Adobe Acrobat Pro**.
2.  Na barra lateral, clique em **"Exportar PDF"**.
3.  Selecione **"Microsoft Word"**.
4.  Clique em **Exportar**.

**Prós:**
*   Preservação de formatação extremamente precisa.
*   Inclui OCR para arquivos digitalizados.

**Contras:**
*   Assinatura cara necessária.`,

            step3Title: "Método 3: LibreOffice (Alternativa Gratuita)",
            step3Content: `Se você não tem Office e não quer pagar pela Adobe, **LibreOffice** é uma alternativa open-source.

**Como fazer:**
1.  Instale o **LibreOffice** (grátis).
2.  Abra o aplicativo **LibreOffice Draw**.
3.  **Arquivo > Abrir** seu PDF.
4.  Você pode editar caixas de texto aqui.`,

            step4Title: "Comparação: Online vs. Offline",
            step4Content: `Quando usar um aplicativo de desktop?

| Recurso | Software Offline | Conversor Online (pdfcanada.ca) |
|---------|------------------|---------------------------------|
| **Instalação** | Necessária | Imediata (Nenhuma) |
| **Privacidade** | 100% Local | **100% Local** (no nosso site!) |
| **Custo** | $$$ (Office/Adobe) | **Grátis** |
| **Velocidade** | Depende do PC | Instantâneo |
| **Scans** | Bom (só Adobe) | Bom (com ferramentas OCR) |`,

            step5Title: "Solução de Problemas Offline",
            step5Content: `**Problema: O texto está em "Caixas de Texto".**
*   *Causa:* O Word coloca texto em quadros para manter a posição exata.
*   *Solução:* É normal. Copie o texto para um novo documento para "limpar".

**Problema: Meu documento escaneado é apenas uma imagem.**
*   *Causa:* O Word (Padrão) nem sempre faz OCR.
*   *Solução:* Use OneNote ou nossa ferramenta **PDF para Word Escaneado**.

**Problema: Fontes faltando.**
*   *Causa:* O PDF usava uma fonte que você não tem.
*   *Solução:* O Word substitui por padrão. Instale a fonte original.`,

            faqTitle: "Perguntas Frequentes",
            faqContent: `**É gratuito?**
Sim, se você já tem o Word. Caso contrário, LibreOffice é grátis.

**É mais seguro?**
Geralmente sim. Mas nossa ferramenta online também usa tecnologia local segura.

**Como converter em lote offline?**
O Adobe Acrobat Pro tem um assistente para processar centenas de arquivos.

**Por que meu Word ficou bagunçado?**
PDFs têm "layout fixo". Word tem "layout fluido". A tradução entre os dois é complexa.`
        }
    };

    const t = content[lang] || content.en;

    return (
        <GuideTemplate
            lang={lang}
            slug={slug}
            icon={<WifiOff className="w-6 h-6 text-canada-red" />}
            content={{
                seoTitle: `${title} | Guide to Converting PDF to Word Locally`,
                seoDesc: t.subtitle,
                title: title,
                subtitle: t.subtitle,
                breadcrumbHome: lang === 'pt' ? 'Início' : (lang === 'fr' ? 'Accueil' : 'Home'),
                breadcrumbGuides: lang === 'pt' ? 'Guias' : 'Guides',
                breadcrumbTool: title,
                intro: t.intro,
                sections: [
                    { id: 'method-1', title: t.step1Title, content: t.step1Content },
                    { id: 'method-2', title: t.step2Title, content: t.step2Content },
                    { id: 'method-3', title: t.step3Title, content: t.step3Content },
                    { id: 'comparison', title: t.step4Title, content: t.step4Content },
                    { id: 'troubleshooting', title: t.step5Title, content: t.step5Content },
                    { id: 'faq', title: t.faqTitle, content: t.faqContent }
                ]
            }}
        />
    );
};
