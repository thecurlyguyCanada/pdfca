'use client';

import React from 'react';
import { Scan, FileText, Camera, Zap, Shield, Search } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';
import { RelatedTools } from '../../RelatedTools';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo_title: 'Convert Scanned PDF to Word with OCR | Edit Scanned Documents',
        seo_desc: 'Turn scanned images and non-selectable PDFs into editable Word documents using free OCR technology. Accurate text recognition for English, French, and more.',
        intro: `Converting a standard PDF is easy. But converting a **scanned PDF**? That's a different beast.

When you scan a document, the computer sees a **picture**, not text. If you try to select the text, you can't. If you convert it normally, you just get a Word document with a picture glued to it.

To make it editable, you need **OCR (Optical Character Recognition)**.

This guide explores how to turn stubborn scanned images into fully editable text using free, high-accuracy OCR tools.`,
        sections: [
            {
                id: 'what-is-ocr',
                title: 'What is OCR and Why Do You Need It?',
                content: `**Optical Character Recognition (OCR)** is technology that "reads" shapes in an image and translates them into digital letters.

**Visualizing the Difference:**
*   **Standard PDF**: Contains digital text codes (e.g., "Code 65 = A"). Searchable and selectable.
*   **Scanned PDF**: Contains a grid of pixels (dots). The computer sees a shape that *looks* like an 'A' but doesn't know what it is.

**Without OCR:**
Conversion = Image pasted into Word.
*   ❌ Can't correct typos
*   ❌ Can't copy text
*   ❌ Can't search keywords

**With OCR:**
Conversion = Real text in Word.
*   ✅ Fully editable
*   ✅ Searchable (Ctrl+F)
*   ✅ Resizable text`
            },
            {
                id: 'how-to-convert',
                title: 'How to Convert Scanned PDF to Word',
                content: `**Step 1: Upload to pdfcanada.ca**
Our tool automatically detects if your PDF is scanned. Drag and drop your file to get started.

**Step 2: Enable OCR**
If prompted, select "OCR" or "Recognize Text". Our system supports multiple languages including English, French, and Spanish.

**Step 3: Processing**
The OCR engine scans line by line. It identifies:
*   Letters and fonts
*   Paragraph blocks
*   Tables and columns
*   Images (which are kept as images)

**Step 4: Download Word Doc**
Get a standard .docx file where you can click, type, and edit just like any other document.

---

**Tips for Best OCR Results:**
1.  **High-Quality Scans**: 300 DPI is ideal. Blurry text leads to errors (e.g., reading "rn" as "m").
2.  **Good Lighting**: Avoid shadows if scanning with a phone.
3.  **Straight Pages**: Skewed text is harder to read. Our tool auto-rotates, but straight scans are better.`
            },
            {
                id: 'common-errors',
                title: 'Common OCR Errors to Watch For',
                content: `Even the best AI isn't perfect. After converting, always proofread for these common "hallucinations":

*   **Similar Letters**: l (L) vs 1 (one) vs I (eye).
*   **Broken Words**: "Conn ection" instead of "Connection".
*   **Speckles**: Dust on the scanner can be read as periods or commas.
*   **Headers/Footers**: Sometimes repeated on every page in the editable text.

**Pro Tip:** Use the "Find and Replace" tool in Word to fix repeated errors quickly.`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `**Is it safe to upload passports or legal docs?**

Yes, if you use a local-first tool like ours.
*   **Local Processing**: The OCR happens in your browser.
*   **No Cloud Upload**: Your sensitive documents don't travel to a remote server.
*   **Instant Deletion**: Data is cleared from memory as soon as you close the tab.

Avoid using generic cloud services for sensitive personal data (SIN, banking info) unless they guarantee encryption and deletion.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Can I convert handwritten text?**
It depends. Neat block letters usually work. Cursive handwriting is very difficult for OCR and often yields poor results.

**Does this work with phone photos?**
Yes. If you take a picture of a document with your phone, save it as PDF or JPG, and our tool will extract the text.

**What languages are supported?**
Our OCR engine supports English, French, Spanish, Portuguese, German, and Italian.

**Is the formatting preserved?**
Yes. We reconstruct the layout, keeping paragraphs, bold text, and lists in their relative positions.

**Is it free?**
Yes. Our OCR usage is free for standard documents. No credit card required.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'Scan to Word'
        }
    },
    fr: {
        seo_title: 'Convertir PDF Scanné en Word avec OCR | Modifier des Scans',
        seo_desc: 'Transformez des images scannées et PDF non sélectionnables en documents Word modifiables avec la technologie OCR gratuite.',
        intro: `Convertir un PDF standard est facile. Mais convertir un **PDF scanné** ? C'est une autre histoire.

Quand vous scannez un document, l'ordinateur voit une **image**, pas du texte. Si vous essayez de sélectionner le texte, vous ne pouvez pas.

Pour le rendre modifiable, vous avez besoin de l'**OCR (Reconnaissance Optique de Caractères)**.

Ce guide explore comment transformer des images tenaces en texte entièrement modifiable en utilisant des outils OCR gratuits.`,
        sections: [
            {
                id: 'what-is-ocr',
                title: 'Qu\'est-ce que l\'OCR ?',
                content: `La **Reconnaissance Optique de Caractères (OCR)** est une technologie qui "lit" les formes dans une image et les traduit en lettres numériques.

**Visualiser la différence :**
*   **PDF Standard** : Contient des codes texte. Recherchable.
*   **PDF Scanné** : Contient une grille de pixels. L'ordinateur voit une forme mais ne la comprend pas.

**Sans OCR :** Image collée dans Word. ❌ Pas d'édition.
**Avec OCR :** Vrai texte dans Word. ✅ Entièrement modifiable.`
            },
            {
                id: 'how-to-convert',
                title: 'Comment Convertir un PDF Scanné',
                content: `**Étape 1 : Téléversez sur pdfcanada.ca**
Notre outil détecte automatiquement les scans.

**Étape 2 : Activer l'OCR**
Sélectionnez "OCR" ou "Reconnaître le texte".

**Étape 3 : Traitement**
Le moteur OCR identifie les lettres, polices et blocs de paragraphes.

**Étape 4 : Télécharger Word**
Obtenez un fichier .docx standard modifiable.

---

**Conseils :**
1.  **Haute Qualité** : 300 DPI est idéal.
2.  **Bon Éclairage** : Évitez les ombres.
3.  **Pages Droites** : Le texte incliné est plus difficile à lire.`
            },
            {
                id: 'common-errors',
                title: 'Erreurs OCR Courantes',
                content: `Même la meilleure IA n'est pas parfaite. Relisez pour :
*   **Lettres Similaires** : l (L) vs 1 (un).
*   **Mots Cassés** : "Conn exion".
*   **Poussière** : Peut être lue comme de la ponctuation.

**Astuce Pro :** Utilisez "Rechercher et Remplacer" dans Word pour corriger rapidement.`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Est-ce sûr pour les documents légaux ?**
Oui, avec notre outil local.
*   **Traitement Local** : L'OCR se fait dans votre navigateur.
*   **Pas de Cloud** : Vos documents ne quittent pas votre appareil.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Puis-je convertir de l'écriture manuscrite ?**
Difficilement. Les lettres bâton fonctionnent, mais pas la cursive.

**Cela fonctionne-t-il avec les photos de téléphone ?**
Oui. Prenez une photo, nous en extrayons le texte.

**Est-ce gratuit ?**
Oui. Notre usage OCR est gratuit pour les documents standards.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'Scan vers Word'
        }
    },
    pt: {
        seo_title: 'Converter PDF Digitalizado para Word com OCR | Editar Scans',
        seo_desc: 'Transforme imagens digitalizadas e PDFs não selecionáveis em documentos Word editáveis usando tecnologia OCR gratuita.',
        intro: `Converter um PDF padrão é fácil. Mas converter um **PDF digitalizado**? É outra história.

Quando você digitaliza um documento, o computador vê uma **imagem**, não texto. Se você tentar selecionar o texto, não consegue.

Para torná-lo editável, você precisa de **OCR (Reconhecimento Óptico de Caracteres)**.

Este guia explora como transformar imagens teimosas em texto totalmente editável usando ferramentas OCR gratuitas.`,
        sections: [
            {
                id: 'what-is-ocr',
                title: 'O que é OCR?',
                content: `O **Reconhecimento Óptico de Caracteres (OCR)** é uma tecnologia que "lê" formas em uma imagem e as traduz em letras digitais.

**Visualizando a diferença:**
*   **PDF Padrão**: Contém códigos de texto. Pesquisável.
*   **PDF Digitalizado**: Contém uma grade de pixels. O computador vê uma forma, mas não a entende.

**Sem OCR**: Imagem colada no Word. ❌ Sem edição.
**Com OCR**: Texto real no Word. ✅ Totalmente editável.`
            },
            {
                id: 'how-to-convert',
                title: 'Como Converter PDF Digitalizado',
                content: `**Passo 1: Envie para pdfcanada.ca**
Nossa ferramenta detecta digitalizações automaticamente.

**Passo 2: Ativar OCR**
Selecione "OCR" ou "Reconhecer Texto".

**Passo 3: Processamento**
O motor OCR identifica letras, fontes e blocos de parágrafos.

**Passo 4: Baixar Word**
Obtenha um arquivo .docx padrão editável.

---

**Dicas:**
1.  **Alta Qualidade**: 300 DPI é o ideal.
2.  **Boa Iluminação**: Evite sombras.
3.  **Páginas Retas**: Texto inclinado é mais difícil de ler.`
            },
            {
                id: 'common-errors',
                title: 'Erros Comuns de OCR',
                content: `Mesmo a melhor IA não é perfeita. Revise para:
*   **Letras Semelhantes**: l (L) vs 1 (um).
*   **Palavras Quebradas**: "Con exão".
*   **Poeira**: Pode ser lida como pontuação.

**Dica Pro:** Use "Localizar e Substituir" no Word para corrigir rapidamente.`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**É seguro para documentos legais?**
Sim, com nossa ferramenta local.
*   **Processamento Local**: O OCR acontece no seu navegador.
*   **Sem Nuvem**: Seus documentos não saem do seu dispositivo.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Posso converter escrita à mão?**
Dificilmente. Letras de forma funcionam, mas cursiva não.

**Funciona com fotos de celular?**
Sim. Tire uma foto, nós extraímos o texto.

**É gratuito?**
Sim. Nosso uso de OCR é gratuito para documentos padrão.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'Scan para Word'
        }
    }
});

export const PdfToWordScannedGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/pdf-to-word-scanned`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/pdf-to-word-scanned' : `/${lang}/guides/pdf-to-word-scanned` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Convert Scanned PDF to Word' : lang === 'fr' ? 'Convertir PDF Scanné en Word' : 'Converter PDF Digitalizado para Word'}
                subtitle={lang === 'en' ? 'Turn pictures of text into editable documents with free OCR.' : lang === 'fr' ? 'Transformez des images de texte en documents modifiables avec OCR gratuit.' : 'Transforme imagens de texto em documentos editáveis com OCR grátis.'}
                icon={<Scan size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/pdf-to-word-scanned' : `/${lang}/guides/pdf-to-word-scanned` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-word" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="flex-1 p-6 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl relative bg-white dark:bg-gray-900">
                            <Camera className="mx-auto md:mx-0 w-12 h-12 text-gray-400 mb-4" />
                            <p className="font-mono text-sm text-gray-500">IMG_001.jpg</p>
                            <p className="font-bold text-gray-900 dark:text-white">
                                {lang === 'en' ? '"Picture of Text"' : lang === 'fr' ? '"Image de Texte"' : '"Imagem de Texto"'}
                            </p>
                        </div>
                        <div className="text-canada-red font-bold text-xl flex flex-col items-center gap-1">
                            <Zap size={24} />
                            <span>OCR</span>
                        </div>
                        <div className="flex-1 p-6 border-2 border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                            <FileText className="mx-auto md:mx-0 w-12 h-12 text-blue-600 mb-4" />
                            <p className="font-mono text-sm text-blue-500">Document.docx</p>
                            <p className="font-bold text-gray-900 dark:text-white">
                                {lang === 'en' ? '"Editable Text"' : lang === 'fr' ? '"Texte Modifiable"' : '"Texto Editável"'}
                            </p>
                        </div>
                    </div>

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/pdf-to-word-scanned`} category="convert" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

