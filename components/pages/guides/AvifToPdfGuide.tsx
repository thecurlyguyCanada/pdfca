'use client';

import Link from 'next/link';
import React from 'react';
import { FileImage, Shield, Zap, Lock, Monitor, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { MarkdownContent } from '../../MarkdownContent';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: "How to Convert AVIF to PDF & PDF to AVIF | Secure Modern Image Guide | pdfcanada.ca",
            desc: `Convert modern AVIF images to PDF or PDF to AVIF for maximum compatibility. Our ${CURRENT_YEAR} guide shows you how to convert securely in your browser without uploads. Perfect for CRA and Canadian portals.`
        },
        h1: `How to Print AVIF Files & Convert to PDF: The ${CURRENT_YEAR} Guide`,
        subtitle: "The most secure way to transform modern AVIF photos and PDF documents back and forth without leaving your browser.",

        intro: "The **AVIF (AV1 Image File Format)** is a revolutionary image format that provides superior compression compared to JPEG and WebP. However, because it's so new, many legacy applications and document portals in Canada don't yet support it. Conversely, sometimes you need to extract high-quality images from a PDF for use in modern web presentations. Whether you're converting **AVIF to PDF** or **PDF to AVIF**, our local-first tools ensure your files are processed securely and privately.",

        sections: [
            {
                id: "what-is-avif",
                title: "What is AVIF and Why Should You Care?",
                content: `AVIF is based on the open-source AV1 video codec and represents the next generation of image compression. It offers significantly better quality at smaller file sizes than JPEG, PNG, or even WebP.

**Technical Advantages of AVIF:**
- **Superior Compression**: Up to 50% smaller metadata than JPEG for the same visual quality.
- **HDR Support**: Supports 10-bit and 12-bit color depth for high dynamic range.
- **Wide Color Gamut**: Preserves vibrant colors from high-end smartphone displays.
- **Transparency**: Supports alpha channels like PNG but with dramatically better compression.

Despite these benefits, **compatibility remains the biggest hurdle**. Most Canadian government agencies (like the CRA) and professional PDF viewers do not support raw AVIF image embedding. Converting **AVIF to PDF** is the pragmatic solution to ensure your documents look perfect on every device.`
            },
            {
                id: "how-to-print-avif",
                title: "How to Print an AVIF File",
                content: `![How to Print AVIF Workflow](/images/guides/print-avif-guide.png)

Printing an AVIF file directly is often frustrating. Most operating systems (Windows, macOS) and printers **do not support printing AVIF files natively** yet. If you try to print, you might see blank pages or errors.

**The Solution:**
1.  **Convert to PDF**: Use our tool above to change your AVIF into a standardized PDF.
2.  **Print the PDF**: Once converted, your image will print perfectly on any home or office printer.

This method ensures your colors and layout are preserved exactly as you see them.`
            },
            {
                id: "pdf-to-avif-guide",
                title: "How to Convert PDF to AVIF",
                content: `Sometimes you have a PDF document and you need to extract its pages as high-quality, modern AVIF images. This is common for web developers, graphic designers, and those looking to archive documents with the best possible compression.

**Steps to Convert PDF to AVIF:**
1. Navigate to our [PDF to AVIF Tool](https://www.pdfcanada.ca/en/pdf-to-avif).
2. Upload your PDF file.
3. Our tool renders each page of your PDF into an AVIF image locally in your browser.
4. Download the resulting **ZIP file** containing all your pages as individual AVIF images.

This process preserves the high-definition quality of your PDF text and graphics while utilizing the ultra-efficient AVIF compression.`
            },
            {
                id: "compatibility-canadian",
                title: "Universal Compatibility for Canadian Portals",
                content: `When submitting documentation to Canadian institutions, format matters. Systems like **My Account for Individuals (CRA)**, **IRCC (Immigration, Refugees and Citizenship Canada)**, and **Service Canada** typically accept PDF, JPG, or PNG.

AVIF is often rejected by these legacy systems. By converting your AVIF screenshots or photos into a single PDF, you:
- **Avoid Upload Errors**: Ensure your file is accepted on the first try.
- **Merge Multiple Pages**: Combine ID cards, receipts, and forms into one document.
- **Maintain File Size Limits**: AVIF-to-PDF conversion yields clean, efficient documents that usually stay well within the 2MB or 5MB limits imposed by many portals.`
            },
            {
                id: "step-by-step",
                title: "How to Convert AVIF to PDF (All Devices)",
                content: `Our tool works locally on any device with a modern web browser (Chrome, Safari, Edge, Firefox).

### On Windows 10/11
1. Navigate to [pdfcanada.ca/en/image-to-pdf](https://www.pdfcanada.ca/en/image-to-pdf).
2. Drag your .avif files from File Explorer to the browser window.
3. Click "Image to PDF" to generate your file instantly.

### On macOS (MacBook/iMac)
1. Select your AVIF files in Finder.
2. Drag them into the pdfcanada.ca conversion area.
3. Your Mac's M1/M2/Intel processor handles the conversion locally in milliseconds.

### On iPhone & iPad
1. Open Safari and go to pdfcanada.ca.
2. Tap "Choose Files" and select your AVIF images from the Files app or Photo Library.
3. Tap the conversion button and save the resulting PDF to your "Downloads" folder.

### On Android
1. Use Chrome to access our tool.
2. Select your modern AVIF images.
3. Download the PDF directly to your device storage.`
            },
            {
                id: "privacy-deep-dive",
                title: "Maximum Privacy: Why Local Processing Matters",
                content: `Traditional online converters upload your sensitive images to a server. This is a massive privacy risk for Canadians. At pdfcanada.ca, we use **WebAssembly and Canvas-based decoding** to process your files entirely in your browser's RAM.

**What this means for you:**
- **No data breach risk**: We never see your files, so we can't lose them.
- **No storage limits**: Process 100MB of images without worrying about upload speeds.
- **PIPEDA Compliance**: Our local-first approach automatically aligns with Canadian privacy laws because no personal data is ever collected or transmitted.`
            },
            {
                id: "avif-vs-others",
                title: "AVIF vs. JPEG vs. WebP: The Comparison",
                content: `| Feature | JPEG | WebP | AVIF |
| :--- | :--- | :--- | :--- |
| **Release Year** | 1992 | 2010 | 2019 |
| **Compression** | Standard | High | Ultra High |
| **HDR Support** | No | No | Yes |
| **Transparency** | No | Yes | Yes |
| **Compatibility** | 100% | 95% | 75% |

While AVIF wins on technology, PDF wins on **standardization**. By converting AVIF to PDF, you get the best of both worlds: modern compression efficiency delivered in a format that has been the global standard for 30 years.`
            }
        ],

        faq: [
            {
                q: "What is the fastest way to convert AVIF to PDF?",
                a: "The fastest way is using pdfcanada.ca. Since all processing happens locally on your computer, there is zero upload time. You can convert 20+ images in less than 2 seconds."
            },
            {
                q: "Does your tool support converting PDF back to AVIF?",
                a: "Yes! Use our [PDF to AVIF tool](https://www.pdfcanada.ca/en/pdf-to-avif) to render your PDF pages as modern AVIF images. The output is provided as a convenient ZIP file."
            },
            {
                q: "Will the PDF be larger than the AVIF file?",
                a: "Typically, yes. AVIF is the world's most efficient format. PDF adds some document overhead and uses standard image embedding (like JPEG or PNG) to ensure compatibility. However, the difference is usually negligible for most document submissions."
            },
            {
                q: "Is it safe to convert sensitive ID photos from AVIF to PDF?",
                a: "Absolutely. Because we process everything in your browser's memory and never upload your files to a server, this is the safest way to convert sensitive documents like passports, licenses, or medical records."
            }
        ],

        ctaTitle: "Ready to Master Your Modern Documents?",
        ctaButton: "Start AVIF & PDF Conversion",
        ctaSubtext: "100% Free. Secure Local Processing. Proudly Canadian.",
        quickAnswer: {
            question: "How to convert AVIF to PDF?",
            answer: "Use pdfcanada.ca to convert AVIF images to PDF locally in your browser. It's fast, free, and secure.",
            tool: "AVIF to PDF",
            steps: ["Upload AVIF", "Convert", "Download PDF"]
        }
    },
    fr: {
        seo: {
            title: `Comment Convertir AVIF en PDF et PDF en AVIF | Guide Complet | pdfcanada.ca`,
            desc: `Convertissez des images AVIF modernes en PDF ou des PDF en AVIF. Notre guide ${CURRENT_YEAR} vous montre comment faire en toute sécurité localement. Idéal pour l'ARC et Revenu Québec.`
        },
        h1: `Comment Imprimer un Fichier AVIF et Convertir en PDF : Le Guide ${CURRENT_YEAR}`,
        subtitle: "La solution la plus sécurisée pour transformer vos photos AVIF et documents PDF d'avant en arrière sans quitter votre navigateur.",

        intro: "Le format **AVIF** offre une compression exceptionnelle, mais il n'est pas encore accepté partout. Que ce soit pour soumettre des documents à l'**ARC**, à **Revenu Québec** ou pour extraire des images de haute qualité d'un PDF, le format PDF et l'AVIF sont désormais interchangeables grâce à nos outils. Tout se passe localement sur votre appareil pour une confidentialité totale.",

        sections: [
            {
                id: "pourquoi-convertir",
                title: "Pourquoi Convertir entre AVIF et PDF ?",
                content: `L'AVIF est techniquement supérieur au JPEG, mais sa compatibilité reste limitée au Canada. Le PDF est universel.
- **Administration** : Les sites gouvernementaux (ARC, IRCC) exigent du PDF.
- **Extraction** : Convertissez des PDF en AVIF pour obtenir des images ultra-légères pour votre site web ou vos présentations.
- **Impression** : Le PDF garantit que vos images AVIF s'impriment exactement comme prévu.`
            },
            {
                id: "imprimer-avif",
                title: "Comment Imprimer un Fichier AVIF",
                content: `![Flux de travail d'impression AVIF](/images/guides/print-avif-guide.png)

Imprimer directement un fichier AVIF est souvent impossible. La plupart des imprimantes et systèmes ne supportent pas encore ce format.

**La Solution :**
1. **Convertissez en PDF** : Utilisez notre outil pour transformer votre AVIF en PDF standard.
2. **Imprimez le PDF** : Une fois converti, votre image s'imprimera parfaitement.`
            },
            {
                id: "guide-pdf-to-avif",
                title: "Comment Convertir un PDF en AVIF ?",
                content: `1. Allez sur notre outil [PDF vers AVIF](https://www.pdfcanada.ca/fr/pdf-to-avif).
2. Téléchargez votre document PDF.
3. Chaque page sera rendue en image AVIF de haute qualité.
4. Téléchargez le fichier **ZIP** contenant toutes vos images.`
            },
            {
                id: "confidentialite",
                title: "Confidentialité totale au Canada",
                content: `Vos photos et documents ne quittent jamais votre appareil. Le traitement local garantit le respect de la **LPRPDE (PIPEDA)**. C'est la méthode la plus sûre au pays.`
            }
        ],

        faq: [
            {
                q: "Puis-je convertir un PDF multi-pages en AVIF ?",
                a: "Oui, chaque page du PDF deviendra une image AVIF distincte, regroupée dans un fichier ZIP pour un téléchargement facile."
            },
            {
                q: "La qualité sera-t-elle conservée ?",
                a: "Absolument. Nous utilisons des canevas haute définition pour garantir que le texte et les graphiques de votre PDF restent nets en format AVIF."
            }
        ],

        ctaTitle: "Prêt à maîtriser vos documents ?",
        ctaButton: "Démarrer la Conversion",
        ctaSubtext: "Gratuit. Sécurisé. Fièrement Canadien.",
        quickAnswer: {
            question: "Comment convertir AVIF en PDF ?",
            answer: "Utilisez pdfcanada.ca pour convertir vos images AVIF en PDF localement. Rapide, gratuit et sécurisé.",
            tool: "AVIF en PDF",
            steps: ["Téléverser AVIF", "Convertir", "Télécharger PDF"]
        }
    },
    pt: {
        seo: {
            title: `Como Converter AVIF para PDF e PDF para AVIF | Guia Seguro | pdfcanada.ca`,
            desc: `Converta imagens AVIF modernas para PDF ou PDF para AVIF. Nosso guia de ${CURRENT_YEAR} mostra como converter com segurança no seu navegador sem uploads. Ideal para portais oficiais.`
        },
        h1: `Como Imprimir Arquivos AVIF e Converter para PDF: Guia ${CURRENT_YEAR}`,
        subtitle: "A maneira mais segura de transformar fotos AVIF e documentos PDF sem sair do seu navegador.",

        intro: "O **AVIF (AV1 Image File Format)** é um formato de imagem revolucionário que oferece compressão superior ao JPEG e WebP. No entanto, por ser tão novo, muitos aplicativos legados e portais de documentos ainda não o suportam. Por outro lado, às vezes você precisa extrair imagens de alta qualidade de um PDF para uso na web. Seja convertendo **AVIF para PDF** ou **PDF para AVIF**, nossas ferramentas locais garantem que seus arquivos sejam processados com segurança e privacidade.",

        sections: [
            {
                id: "what-is-avif",
                title: "O que é AVIF e Por Que Você Deve Se Importar?",
                content: `O AVIF é baseado no codec de vídeo AV1 de código aberto e representa a próxima geração de compressão de imagem. Ele oferece qualidade significativamente melhor em tamanhos de arquivo menores do que JPEG, PNG ou mesmo WebP.

**Vantagens Técnicas do AVIF:**
- **Compressão Superior**: Até 50% menor que o JPEG para a mesma qualidade visual.
- **Suporte HDR**: Suporta profundidade de cor de 10 bits e 12 bits para alto alcance dinâmico.
- **Ampla Gama de Cores**: Preserva cores vibrantes de telas de smartphones de última geração.
- **Transparência**: Suporta canais alfa como PNG, mas com compressão drasticamente melhor.

Apesar desses benefícios, a **compatibilidade continua sendo o maior obstáculo**. A maioria das agências governamentais e visualizadores de PDF profissionais não suporta a incorporação de imagens AVIF brutas. Converter **AVIF para PDF** é a solução pragmática para garantir que seus documentos pareçam perfeitos em todos os dispositivos.`
            },
            {
                id: "imprimir-avif",
                title: "Como Imprimir Arquivos AVIF",
                content: `![Fluxo de impressão AVIF](/images/guides/print-avif-guide.png)

Imprimir um arquivo AVIF diretamente geralmente não funciona. A maioria das impressoras não suporta este formato nativamente.

**A Solução:**
1. **Converta para PDF**: Use nossa ferramenta acima para transformar seu AVIF em um PDF padrão.
2. **Imprima o PDF**: Uma vez convertido, sua imagem será impressa perfeitamente.`
            },
            {
                id: "pdf-to-avif-guide",
                title: "Como Converter PDF para AVIF",
                content: `Às vezes você tem um documento PDF e precisa extrair suas páginas como imagens AVIF modernas de alta qualidade. Isso é comum para desenvolvedores web, designers gráficos e aqueles que procuram arquivar documentos com a melhor compressão possível.

**Passos para Converter PDF para AVIF:**
1. Navegue até nossa [Ferramenta PDF para AVIF](https://www.pdfcanada.ca/pt/pdf-to-avif).
2. Envie seu arquivo PDF.
3. Nossa ferramenta renderiza cada página do seu PDF em uma imagem AVIF localmente no seu navegador.
4. Baixe o arquivo **ZIP** resultante contendo todas as suas páginas como imagens AVIF individuais.

Este processo preserva a qualidade de alta definição do texto e gráficos do seu PDF enquanto utiliza a compressão AVIF ultra eficiente.`
            },
            {
                id: "compatibility",
                title: "Compatibilidade Universal para Portais",
                content: `Ao enviar documentação para instituições oficiais, o formato importa. Sistemas governamentais geralmente aceitam PDF, JPG ou PNG, mas rejeitam AVIF.

Ao converter suas capturas de tela ou fotos AVIF em um único PDF, você:
- **Evita Erros de Envio**: Garante que seu arquivo seja aceito na primeira tentativa.
- **Mescla Várias Páginas**: Combina cartões de identificação, recibos e formulários em um único documento.
- **Mantém Limites de Tamanho**: A conversão de AVIF para PDF produz documentos limpos e eficientes.`
            },
            {
                id: "privacy-deep-dive",
                title: "Privacidade Máxima: Por Que o Processamento Local Importa",
                content: `Conversores online tradicionais enviam suas imagens confidenciais para um servidor. Isso é um risco de privacidade. No pdfcanada.ca, usamos **WebAssembly** para processar seus arquivos inteiramente na RAM do seu navegador.

**O que isso significa para você:**
- **Sem risco de vazamento de dados**: Nunca vemos seus arquivos, então não podemos perdê-los.
- **Sem limites de armazenamento**: Processe grandes quantidades de imagens sem se preocupar com velocidades de upload.
- **Conformidade**: Nossa abordagem local alinha-se automaticamente com as leis de privacidade, pois nenhum dado pessoal é coletado.`
            }
        ],

        faq: [
            {
                q: "Qual é a maneira mais rápida de converter AVIF para PDF?",
                a: "A maneira mais rápida é usar o pdfcanada.ca. Como todo o processamento acontece localmente no seu computador, não há tempo de upload. Você pode converter mais de 20 imagens em menos de 2 segundos."
            },
            {
                q: "Sua ferramenta suporta converter PDF de volta para AVIF?",
                a: "Sim! Use nossa [ferramenta PDF para AVIF](https://www.pdfcanada.ca/pt/pdf-to-avif) para renderizar suas páginas PDF como imagens AVIF modernas."
            },
            {
                q: "O PDF será maior que o arquivo AVIF?",
                a: "Tipicamente, sim. O AVIF é o formato mais eficiente do mundo. O PDF adiciona alguma sobrecarga de documento e usa incorporação de imagem padrão para garantir compatibilidade."
            },
            {
                q: "É seguro converter fotos de identificação sensíveis de AVIF para PDF?",
                a: "Absolutamente. Porque processamos tudo na memória do seu navegador e nunca enviamos seus arquivos para um servidor, esta é a maneira mais segura de converter documentos confidenciais."
            }
        ],

        ctaTitle: "Pronto para Dominar Seus Documentos?",
        ctaButton: "Começar Conversão",
        ctaSubtext: "100% Grátis. Processamento Local Seguro.",
        quickAnswer: {
            question: "Como converter AVIF para PDF?",
            answer: "Use o pdfcanada.ca para converter imagens AVIF em PDF localmente no seu navegador. É rápido, gratuito e seguro.",
            tool: "AVIF para PDF",
            steps: ["Enviar AVIF", "Converter", "Baixar PDF"]
        }
    }
});

export const AvifToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Upload", "text": "Select your AVIF or PDF files." },
            { "@type": "HowToStep", "position": 2, "name": "Process", "text": "Our tool converts files in-browser." },
            { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Save your professional documents." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/avif-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: 'AVIF & PDF', path: `/${lang}/guides/avif-to-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileImage size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: 'AVIF & PDF', href: '#' }
                ]}
            >
                <div className="max-w-4xl mx-auto py-8">
                    <ToolPromo tool="image-to-pdf" lang={lang} />
                    <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <div className="grid md:grid-cols-3 gap-8 my-20">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Lock className="text-canada-red mx-auto mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Private</h3>
                            <p className="text-gray-500">Local conversion.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Zap className="text-canada-red mx-auto mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Fast</h3>
                            <p className="text-gray-500">Near-instant processing.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                            <Monitor className="text-canada-red mx-auto mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Universal</h3>
                            <p className="text-gray-500">Works everywhere.</p>
                        </div>
                    </div>

                    <div className="my-20">
                        <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">FAQ</h3>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 size={20} className="text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 bg-canada-red p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-lg md:text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/image-to-pdf`}
                            className="inline-block bg-white text-canada-red px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/image-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Image vers PDF' : (lang === 'pt' ? 'Guia Imagem para PDF' : 'Image to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/heic-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide HEIC vers PDF' : (lang === 'pt' ? 'Guia HEIC para PDF' : 'HEIC to PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-image`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Image' : (lang === 'pt' ? 'Guia PDF para Imagem' : 'PDF to Image Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
