'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, MousePointer2, ArrowRight } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `How to Convert Word to PDF | Free & Secure ${CURRENT_YEAR} Tutorial | pdfcanada.ca`,
            desc: `Learn how to transform DOCX to PDF instantly. Our secure ${CURRENT_YEAR} guide shows you how to convert Word to PDF locally on your device without uploading sensitive files. No uploads, 100% private Canadian tool.`
        },
        h1: `How to Convert and Save Word as PDF (${CURRENT_YEAR})`,
        subtitle: "The simplest way to transform any Word document into a high-quality PDF file instantly.",
        intro: "Need to **convert a Word to a PDF**? Whether you're sending a resume, an invoice, or a formal report, PDF is the standard for ensuring your formatting stays exactly as intended. **How do you change a word document to a pdf** for free? Our **Word to PDF converter** allows you to **save a Word document as a PDF** effortlessly. Because it runs locally, you can **switch a Word document to PDF** or **turn a word doc into pdf** without worrying about your business or personal data being stored on a random server.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: How to Turn a Word Document into a PDF",
                content: `Follow these simple steps to **transform Word to PDF** securely:
1. **Upload Your .docx File**: Click to browse or drag-and-drop your Word document into our converter. This works to **convert word doc to pdf on mac**, Windows, or Linux.
2. **Automatic Conversion**: Our browser-based engine immediately begins processing your document. It will **save word as pdf** while preserving your fonts, images, and layout.
3. **Preview (Optional)**: While some tools delay you, we focus on speed. Your **word to pdf conversion** happens in milliseconds.
4. **Download Your PDF**: Within seconds, your professional PDF is ready. **Export word to pdf** successfully and share it with confidence.
5. **Verify Formatting**: Open the file to ensure it looks exactly like your original. This is the best way to **make a word document a pdf** without losing quality.`
            },
            {
                id: "mac-mobile",
                title: "How to Convert Word to PDF on Mac, iPhone, and Android",
                content: `Our tool is designed to be cross-platform. You don't need Microsoft Office to **save word document as pdf strength mac**.
- **On Mac**: Simply open Safari or Chrome, visit our site, and drop your file. This is the fastest method to **convert word to pdf on mac** without installing software.
- **On iPhone/iPad**: improved support for **how to convert word to pdf in phone**. Tap "Upload", select from your Files app, and download the PDF back to your device.
- **On Android**: Works directly from Chrome. **Turn word into pdf** from your Google Drive or local downloads folder instantly.`
            },
            {
                id: "why-pdf",
                title: "Why Switch from Word to PDF?",
                content: `When you **change word to pdf**, you gain several advantages over sending a raw .docx file:
- **Universal Viewing**: A PDF looks the same on every device. If you **send a word document**, the formatting often breaks on mobile.
- **Security**: It is harder to accidentally edit a PDF. **Make word in pdf** format to finalize contracts, invoices, and resumes.
- **File Size**: **Exporting word to pdf** often <Link href={`/ ${ lang } / guides / reduce - pdf - size`} className="text-canada-red hover:underline">reduces the file size</Link>, making it easier to email or upload.
- **Professionalism**: Sending a PDF is the industry standard. **Converting word doc to pdf** shows you care about presentation.`
            },
            {
    id: "local-first",
        title: "Private & Secure: Convert Word to PDF Locally",
            content: `Unlike other tools that upload your data, we help you **convert word to pdf document free** and privately.
- **Zero Uploads**: We **process the word document to pdf** purely in your browser.
- **Confidential**: Perfect for legal docs, medical records, and bank statements.
- **Fast**: No network lag. **change word doc into pdf** as fast as your computer can think.`
},
{
    id: "fillable-forms",
        title: "How to Create a Fillable PDF in Word",
            content: `Many users ask **how to convert word to fillable pdf**. While Word has some form features, the best workflow is:
1. **Design in Word**: Lay out your text and lines.
2. **Convert to PDF**: Use this tool to **turn word into pdf**.
3. **Add Fields**: Use our [Make Fillable](/${lang}/make-fillable) tool to auto-detect lines and add writeable boxes. This effectively lets you **make a writable pdf in word** designs.`
},
{
    id: "troubleshooting",
        title: "Troubleshooting: Cannot Convert Word to PDF?",
            content: `**Issue: Images are blurry.**
**Fix**: **Save word doc as pdf** often compresses images. Ensure your source images are high-res before you **export pdf to word document** or vice versa.

**Issue: Links not working.**
**Fix**: When you **change word to pdf**, standard hyperlinks usually survive. Ensure they are active (blue/underlined) in Word before converting.

**Issue: "How do I convert a word document into a pdf" on an old computer?**
**Fix**: Our tool is lightweight. Even on older machines, you can **convert word file to pdf on mac** or PC without freezing your browser.`
}
        ],

faq: [
    {
        q: "Is this conversion tool really free?",
        a: "Yup! No limits, no credit cards, no hidden fees. Just polite Canadian service. Convert as many documents as you need, whenever you need."
    },
    {
        q: "Does it work on mobile devices?",
        a: "Absolutely. You can convert Word to PDF directly from your iPhone or Android browser, picking files from your local storage, iCloud, Google Drive, or OneDrive. The interface adapts to mobile screens for easy use on the go."
    },
    {
        q: "Can I convert older .doc files (not .docx)?",
        a: "Currently, we focus on the modern **.docx** format (Word 2007 and newer). If you have an older .doc file, we recommend opening it in Word, Google Docs, or LibreOffice and saving it as .docx before using our tool. This also ensures better compatibility."
    },
    {
        q: "Will my formatting stay exactly the same?",
        a: "In most cases, yes. Our converter preserves fonts, styles, images, tables, headers, footers, and page layout. However, very complex documents with advanced features (embedded objects, macros, custom fonts) may require minor adjustments. Always review the PDF before sharing."
    },
    {
        q: "Does conversion preserve hyperlinks and bookmarks?",
        a: "Yes! Hyperlinks, table of contents, and cross-references in your Word document are preserved as clickable links in the resulting PDF. Bookmarks and headings also convert to PDF bookmarks for easy navigation."
    },
    {
        q: "What's the maximum file size I can convert?",
        a: "Since conversion happens locally in your browser, the limit depends on your device's RAM. Most modern computers easily handle files up to 50-100MB. Phones may have lower limits. Very large documents may take longer to process."
    },
    {
        q: "Can I convert password-protected Word documents?",
        a: "You'll need to remove the password first. Open the document in Word, enter the password, then save a copy without password protection before converting to PDF. You can re-protect the PDF afterwards if needed."
    },
    {
        q: "How do I convert a Word document to PDF for free?",
        a: "You can use our 100% free online converter. Simply upload your .docx file, and we will transform it into a professional PDF locally in your browser. This is perfect if you are wondering **how to export word to pdf** without paying."
    },
    {
        q: "How to save a Word document as a PDF on Mac or Windows?",
        a: "While both OSs have built-in 'Save As' options, our tool provides a consistent, high-quality output. It answers **how to convert word to pdf on mac** or **how to change word to pdf** on Windows without needing to install Microsoft Office."
    },
    {
        q: "How do you change a word document to a pdf?",
        a: "It's easy! Upload your document to our tool, and it will automatically transform the formatting into a high-quality PDF. This is the fastest way to turn a Word doc into a PDF without specialized software."
    }
],

    ctaTitle: "Convert Your Document Now",
        ctaButton: "Start Word to PDF Conversion",
            ctaSubtext: "100% Free. Secure. Local.",
                faqHeading: "Common Questions",
                    quickAnswer: {
    question: "How do I convert Word to PDF for free?",
        answer: "Use pdfcanada.ca's Word to PDF converter. Upload your .docx file, our engine converts it locally in your browser, then download your professional PDF. Your documents never leave your device - ideal for resumes, invoices, and legal documents.",
            tool: "Word to PDF Converter",
                steps: ["Upload your Word file (.docx)", "Automatic local conversion", "Download your PDF"]
}
    },
fr: {
    seo: {
        title: `Convertir Word en PDF | Guide Sécurisé ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Découvrez comment transformer vos DOCX en PDF instantanément. Notre guide sécurisé ${CURRENT_YEAR} vous montre comment convertir localement sans risque pour vos données. Aucun téléchargement, outil canadien 100 % privé.`
    },
    h1: "Comment Convertir Word en PDF : La Méthode Professionnelle",
        subtitle: "Créez des documents PDF de haute qualité et verrouillés à partir de vos fichiers Word instantanément sans quitter votre navigateur.",
            intro: "Besoin de transformer votre **document Word** en PDF professionnel ? Que vous envoyiez un CV, une facture ou un rapport formel, le PDF est la norme pour garantir que votre formatage reste exactement comme prévu. Notre **convertisseur Word en PDF** gère la transition en douceur, et parce qu'il fonctionne localement, vous n'avez pas à vous soucier que vos données professionnelles ou personnelles soient stockées sur un serveur aléatoire.",

                sections: [
                    {
                        id: "how-to",
                        title: "Étape par Étape : Comment Transformer un Document Word en PDF",
                        content: `Suivez ces étapes simples pour **convertir Word en PDF** en toute sécurité :
1. **Téléchargez votre fichier .docx** : Cliquez pour parcourir ou glissez-déposez votre document Word. Cela fonctionne pour **convertir un fichier word en pdf sur mac**, PC ou Android.
2. **Conversion Automatique** : Notre moteur commence immédiatement le traitement. Il va **enregistrer word en pdf** tout en préservant vos polices et votre mise en page.
3. **Téléchargement** : En quelques secondes, votre PDF est prêt. **Exporter word en pdf** n'a jamais été aussi simple.
4. **Vérification** : Ouvrez le fichier pour vous assurer qu'il ressemble exactement à l'original. C'est la meilleure façon de **faire un pdf avec word** sans perdre en qualité.`
                    },
                    {
                        id: "mac-mobile",
                        title: "Convertir Word en PDF sur Mac, iPhone et Android",
                        content: `Notre outil est multiplateforme. Pas besoin d'Office pour **enregistrer un document word en pdf sur mac**.
- **Sur Mac** : Ouvrez Safari, visitez notre site et déposez votre fichier. Idéal pour **convertir word en pdf mac** sans logiciel.
- **Sur mobile** : Parfait pour savoir **comment mettre un document word en pdf sur téléphone**. Utilisez Chrome ou Safari mobile.
- **Sur Android** : **Transformer un document word en pdf** directement depuis vos téléchargements.`
                    },
                    {
                        id: "why-pdf",
                        title: "Pourquoi Passer de Word à PDF ?",
                        content: `Quand vous **transformez un doc en pdf**, vous gagnez en sécurité et en professionnalisme :
- **Visibilité Universelle** : Un PDF s'affiche de la même manière partout. Si vous envoyiez un Word, la mise en page peut casser.
- **Sécurité** : Plus difficile à modifier accidentellement. **Mettre un word en pdf** fige le contenu.
- **Taille de Fichier** : **Convertir un fichier word en pdf** réduit souvent la taille pour l'envoi par courriel.`
                    },
                    {
                        id: "local-first",
                        title: "Privé et Sécurisé : Conversion Locale",
                        content: `Contrairement aux autres outils, nous vous aidons à **convertir un fichier Word en PDF gratuitement** localement.
- **Zéro Téléversement** : Nous traitons le document dans votre navigateur.
- **Confidentiel** : Vos données ne quittent jamais votre appareil.
- **Rapide** : **Changer word en pdf** instantanément.`
                    },
                    {
                        id: "fillable-forms",
                        title: "Comment Créer un PDF Remplissable dans Word",
                        content: `Beaucoup demandent **comment faire un pdf remplissable avec word**. Voici la méthode :
1. **Design dans Word** : Faites votre mise en page.
2. **Convertir** : Utilisez cet outil pour **convertir le document word en pdf**.
3. **Rendre Remplissable** : Utilisez notre outil [Rendre Remplissable](/${lang}/make-fillable).`
                    },
                    {
                        id: "troubleshooting",
                        title: "Dépannage : Problèmes de Conversion ?",
                        content: `**Problème : Images floues.**
**Solution** : Quand vous **enregistrez word sous pdf**, la compression peut jouer. Utilisez des images haute résolution.

**Problème : Liens inactifs.**
**Solution** : Vérifiez vos liens dans Word avant de **passer de word a pdf**.`
                    }
                ],

                    faq: [
                        {
                            q: "Cet outil de conversion est-il vraiment gratuit ?",
                            a: "Oui ! Aucune limite, aucune carte de crédit, aucuns frais cachés. Juste un service canadien poli et courtois. Convertissez autant de documents que vous le souhaitez, quand vous le souhaitez."
                        },
                        {
                            q: "Cela fonctionne-t-il sur les appareils mobiles ?",
                            a: "Absolument. Vous pouvez convertir Word en PDF directement depuis votre navigateur iPhone ou Android, en sélectionnant des fichiers depuis votre stockage local, iCloud, Google Drive ou OneDrive. L'interface s'adapte aux écrans mobiles pour une utilisation facile en déplacement."
                        },
                        {
                            q: "Puis-je convertir d'anciens fichiers .doc (pas .docx) ?",
                            a: "Actuellement, nous nous concentrons sur le format moderne **.docx** (Word 2007 et plus récent). Si vous avez un ancien fichier .doc, nous recommandons de l'ouvrir dans Word, Google Docs ou LibreOffice et de l'enregistrer en .docx avant d'utiliser notre outil. Cela garantit également une meilleure compatibilité."
                        },
                        {
                            q: "Mon formatage restera-t-il exactement le même ?",
                            a: "Dans la plupart des cas, oui. Notre convertisseur préserve les polices, styles, images, tableaux, en-têtes, pieds de page et mise en page. Cependant, les documents très complexes avec des fonctionnalités avancées (objets intégrés, macros, polices personnalisées) peuvent nécessiter des ajustements mineurs. Examinez toujours le PDF avant de le partager."
                        },
                        {
                            q: "La conversion préserve-t-elle les hyperliens et signets ?",
                            a: "Oui ! Les hyperliens, table des matières et références croisées de votre document Word sont préservés comme liens cliquables dans le PDF résultant. Les signets et titres se convertissent également en signets PDF pour une navigation facile."
                        }
                    ],

                        ctaTitle: "Convertissez Votre Document Maintenant",
                            ctaButton: "Commencer la Conversion Word en PDF",
                                ctaSubtext: "100% Gratuit. Sécurisé. Local.",
                                    faqHeading: "Questions Courantes",
                                        quickAnswer: {
        question: "Comment convertir Word en PDF gratuitement?",
            answer: "Utilisez le convertisseur Word en PDF de pdfcanada.ca. Téléchargez votre fichier .docx, notre moteur le convertit localement dans votre navigateur, puis téléchargez votre PDF professionnel. Vos documents ne quittent jamais votre appareil - idéal pour les CV, factures et documents juridiques.",
                tool: "Convertisseur Word en PDF",
                    steps: ["Téléchargez votre fichier Word (.docx)", "Conversion locale automatique", "Téléchargez votre PDF"]
    }
},
pt: {
    seo: {
        title: `Como Converter Word para PDF | Tutorial Grátis e Seguro ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda a transformar DOCX em PDF instantaneamente. Nosso guia seguro de ${CURRENT_YEAR} mostra como converter Word para PDF localmente no seu dispositivo sem enviar arquivos sensíveis. Sem uploads, ferramenta 100% privada.`
    },
    h1: `Como Converter e Salvar Word como PDF (${CURRENT_YEAR})`,
        subtitle: "A maneira mais simples de transformar qualquer documento Word em um arquivo PDF de alta qualidade instantaneamente.",
            intro: "Precisa **converter um Word para um PDF**? Seja enviando um currículo, uma fatura ou um relatório formal, o PDF é o padrão para garantir que sua formatação permaneça exatamente como pretendido. **Como mudar um documento word para pdf** de graça? Nosso **conversor de Word para PDF** permite que você **salve um documento Word como PDF** sem esforço. Como roda localmente, você pode **trocar um documento Word para PDF** ou **transformar um doc word em pdf** sem se preocupar com seus dados comerciais ou pessoais sendo armazenados em um servidor aleatório.",

                sections: [
                    {
                        id: "how-to",
                        title: "Passo a Passo: Como Transformar um Documento Word em um PDF",
                        content: `Siga estes passos simples para **transformar Word em PDF** com segurança:
1. **Envie Seu Arquivo .docx**: Clique para navegar ou arraste e solte seu documento Word em nosso conversor. Isso funciona para **converter doc word em pdf no mac**, Windows ou Linux.
2. **Conversão Automática**: Nosso motor baseado em navegador começa imediatamente a processar seu documento. Ele vai **salvar word como pdf** preservando suas fontes, imagens e layout.
3. **Pré-visualização (Opcional)**: Enquanto algumas ferramentas te atrasam, nós focamos na velocidade. Sua **conversão de word para pdf** acontece em milissegundos.
4. **Baixe Seu PDF**: Em segundos, seu PDF profissional está pronto. **Exporte word para pdf** com sucesso e compartilhe com confiança.
5. **Verifique a Formatação**: Abra o arquivo para garantir que se parece exatamente com o original. Esta é a melhor maneira de **fazer um pdf com word** sem perder qualidade.`
                    },
                    {
                        id: "mac-mobile",
                        title: "Como Converter Word para PDF no Mac, iPhone e Android",
                        content: `Nossa ferramenta é projetada para ser multiplataforma. Você não precisa do Microsoft Office para **salvar documento word como pdf no mac**.
- **No Mac**: Simplesmente abra o Safari ou Chrome, visite nosso site e solte seu arquivo. Este é o método mais rápido para **converter word para pdf no mac** sem instalar software.
- **No iPhone/iPad**: suporte melhorado para **como converter word para pdf no celular**. Toque em "Upload", selecione do seu aplicativo Arquivos e baixe o PDF de volta para o seu dispositivo.
- **No Android**: Funciona diretamente do Chrome. **Transforme word em pdf** do seu Google Drive ou pasta de downloads local instantaneamente.`
                    },
                    {
                        id: "why-pdf",
                        title: "Por que Mudar de Word para PDF?",
                        content: `Quando você **muda word para pdf**, você ganha várias vantagens sobre enviar um arquivo .docx bruto:
- **Visualização Universal**: Um PDF parece o mesmo em todo dispositivo. Se você **envia um documento word**, a formatação frequentemente quebra no celular.
- **Segurança**: É mais difícil editar acidentalmente um PDF. **Faça word em pdf** para finalizar contratos, faturas e currículos.
- **Tamanho do Arquivo**: **Exportar word para pdf** frequentemente reduz o tamanho do arquivo, tornando mais fácil enviar por email ou upload.
- **Profissionalismo**: Enviar um PDF é o padrão da indústria. **Converter doc word para pdf** mostra que você se importa com a apresentação.`
                    },
                    {
                        id: "local-first",
                        title: "Privado e Seguro: Converta Word para PDF Localmente",
                        content: `Ao contrário de outras ferramentas que enviam seus dados, nós ajudamos você a **converter documento word para pdf grátis** e privadamente.
- **Zero Uploads**: Nós **processamos o documento word para pdf** puramente no seu navegador.
- **Confidencial**: Perfeito para documentos legais, registros médicos e extratos bancários.
- **Rápido**: Sem atraso de rede. **mude doc word em pdf** tão rápido quanto seu computador pode pensar.`
                    },
                    {
                        id: "fillable-forms",
                        title: "Como Criar um PDF Preenchível no Word",
                        content: `Muitos usuários perguntam **como converter word para pdf preenchível**. Embora o Word tenha alguns recursos de formulário, o melhor fluxo de trabalho é:
1. **Design no Word**: Faça o layout do seu texto e linhas.
2. **Converter para PDF**: Use esta ferramenta para **transformar word em pdf**.
3. **Adicionar Campos**: Use nossa ferramenta [Tornar Preenchível](/${lang}/make-fillable) para detectar linhas automaticamente e adicionar caixas de escrita.`
                    },
                    {
                        id: "troubleshooting",
                        title: "Solução de Problemas: Não Consegue Converter Word para PDF?",
                        content: `**Problema: Imagens estarem borradas.**
**Correção**: **Salvar doc word como pdf** frequentemente comprime imagens. Garanta que suas imagens de origem sejam de alta resolução antes de você **exportar pdf para documento word** ou vice-versa.

**Problema: Links não funcionam.**
**Correção**: Quando você **muda word para pdf**, hiperlinks padrão geralmente sobrevivem. Garanta que eles estejam ativos (azul/sublinhado) no Word antes de converter.

**Problema: Computador antigo?**
**Correção**: Nossa ferramenta é leve. Mesmo em máquinas antigas, você pode **converter arquivo word para pdf no mac** ou PC sem travar seu navegador.`
                    }
                ],

                    faq: [
                        {
                            q: "Esta ferramenta de conversão é realmente gratuita?",
                            a: "Sim! Sem limites, sem cartões de crédito, sem taxas ocultas. Apenas serviço canadense educado. Converta quantos documentos precisar, quando precisar."
                        },
                        {
                            q: "Funciona em dispositivos móveis?",
                            a: "Absolutamente. Você pode converter Word para PDF diretamente do seu navegador iPhone ou Android, escolhendo arquivos do seu armazenamento local, iCloud, Google Drive ou OneDrive. A interface se adapta para telas móveis para uso fácil em movimento."
                        },
                        {
                            q: "Posso converter arquivos .doc mais antigos (não .docx)?",
                            a: "Atualmente, focamos no formato moderno **.docx** (Word 2007 e mais recente). Se você tem um arquivo .doc antigo, recomendamos abri-lo no Word, Google Docs ou LibreOffice e salvá-lo como .docx antes de usar nossa ferramenta. Isso também garante melhor compatibilidade."
                        },
                        {
                            q: "Minha formatação ficará exatamente a mesma?",
                            a: "Na maioria dos casos, sim. Nosso conversor preserva fontes, estilos, imagens, tabelas, cabeçalhos, rodapés e layout de página. No entanto, documentos muito complexos com recursos avançados (objetos embutidos, macros, fontes personalizadas) podem exigir pequenos ajustes. Sempre revise o PDF antes de compartilhar."
                        },
                        {
                            q: "A conversão preserva hiperlinks e marcadores?",
                            a: "Sim! Hiperlinks, índice e referências cruzadas no seu documento Word são preservados como links clicáveis no PDF resultante. Marcadores e títulos também se convertem para marcadores PDF para fácil navegação."
                        },
                        {
                            q: "Qual é o tamanho máximo de arquivo que posso converter?",
                            a: "Como a conversão acontece localmente no seu navegador, o limite depende da RAM do seu dispositivo. A maioria dos computadores modernos lida facilmente com arquivos de até 50-100MB. Celulares podem ter limites menores. Documentos muito grandes podem levar mais tempo para processar."
                        },
                        {
                            q: "Posso converter documentos Word protegidos por senha?",
                            a: "Você precisará remover a senha primeiro. Abra o documento no Word, insira a senha, depois salve uma cópia sem proteção por senha antes de converter para PDF."
                        },
                        {
                            q: "Como converter um documento Word para PDF de graça?",
                            a: "Você pode usar nosso conversor online 100% gratuito. Simplesmente envie seu arquivo .docx, e nós o transformaremos em um PDF profissional localmente no seu navegador. Perfeito se você está se perguntando **como exportar word para pdf** sem pagar."
                        },
                        {
                            q: "Como salvar um documento Word como PDF no Mac ou Windows?",
                            a: "Enquanto ambos os SOs têm opções de 'Salvar Como', nossa ferramenta fornece uma saída consistente e de alta qualidade. Ela responde **como converter word para pdf no mac** ou **como mudar word para pdf** no Windows sem precisar instalar o Microsoft Office."
                        }
                    ],

                        ctaTitle: "Converta Seu Documento Agora",
                            ctaButton: "Começar Conversão Word para PDF",
                                ctaSubtext: "100% Grátis. Seguro. Local.",
                                    faqHeading: "Perguntas Comuns",
                                        quickAnswer: {
        question: "Como converter Word para PDF de graça?",
            answer: "Use o conversor Word para PDF do pdfcanada.ca. Envie seu arquivo .docx, nosso motor converte localmente no seu navegador, depois baixe seu PDF profissional. Seus documentos nunca saem do seu dispositivo - ideal para currículos, faturas e documentos legais.",
                tool: "Conversor Word para PDF",
                    steps: ["Envie seu arquivo Word (.docx)", "Conversão local automática", "Baixe seu PDF"]
    }
},

});

export const WordToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/word-to-pdf"
                faqs={t.faq}
                lang={lang}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Word vers PDF' : (lang === 'pt' ? 'Word para PDF' : 'Word to PDF'), path: `/${lang}/guides/word-to-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Guide Word vers PDF' : lang === 'pt' ? 'Guia Word para PDF' : 'Word to PDF Guide', href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="word-to-pdf" lang={lang} />
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro.replace('**Word to PDF converter**', `[Word to PDF converter](/${lang}/word-to-pdf)`)} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? (
                                        <MarkdownContent content={section.content} />
                                    ) : (
                                        section.content
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {t.faqHeading}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/word-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95 whitespace-normal max-w-full"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/word-to-pdf" category="convert" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/pdf-to-word`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Word' : (lang === 'pt' ? 'Guia PDF para Word' : 'PDF to Word Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/reduce-pdf-size`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Réduire la Taille' : (lang === 'pt' ? 'Guia Reduzir Tamanho' : 'Reduce Size Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/excel-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Excel vers PDF' : (lang === 'pt' ? 'Guia Excel para PDF' : 'Excel to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/sign-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Signer PDF' : (lang === 'pt' ? 'Guia Assinar PDF' : 'Sign PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
