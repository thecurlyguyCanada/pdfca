'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, FileText, Download, Shield, Zap, CheckCircle, Info, ArrowRight, MousePointer2, AlertTriangle, Tablet, Share2, Library, Printer } from 'lucide-react';
import { Language, CURRENT_YEAR, translations } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: "How to Convert CBR to PDF | Free Comic Book Conversion Guide | pdfcanada.ca",
            desc: `Read your comics on any device. Our ${CURRENT_YEAR} guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device.`
        },
        h1: "How to Convert CBR/CBZ to PDF",
        subtitle: "The definitive guide to taking your digital comics anywhere.",
        intro: (
            <>
                If you are a digital comic enthusiast, you have likely encountered <strong>CBR</strong> and <strong>CBZ</strong> files. While these formats are perfect for dedicated comic readers, they can be difficult to open on standard devices like tablets or work computers.
                <br /><br />
                The solution? <strong>Convert CBR to PDF</strong>. This guide will show you how to transform your comic archives into universal PDF documents without compromising your privacy or downloading bulky software.
            </>
        ),
        quickAnswer: {
            question: "How do I convert CBR to PDF?",
            answer: "To convert CBR to PDF: 1) Open pdfcanada.ca/cbr-to-pdf, 2) Select your CBR or CBZ file, 3) Wait for automatic extraction (2-5 seconds), 4) Download your PDF. The conversion happens entirely in your browser—no file uploads, no software installation required.",
            time: "10-30 seconds",
            cost: "Free",
            privacy: "100% local processing",
            tool: "CBR to PDF",
            steps: ["Open Tool", "Select CBR", "Download PDF"]
        },
        sections: [
            {
                id: "what-is-cbr",
                title: "What are CBR and CBZ files?",
                content: (
                    <>
                        <p className="mb-4">
                            Before converting, it is helpful to understand what these files actually are. They are essentially collections of images (usually JPG or PNG) bundled into an archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">These are .RAR archives renamed to .CBR. They require specific software to unpack.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">These are .ZIP archives renamed to .CBZ. They are more common and easier to handle natively.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Why convert Comics to PDF?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Universal Compatibility:</strong> PDFs open on any device—Phone, Kindle, Mac, or PC—without extra apps.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Easier Sharing:</strong> Sending a PDF is simpler than explaining how to install a CBR reader to your friends.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Searchable Library:</strong> PDFs are easier to organize and index in standard document management systems.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Converting to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Using our local tool is safer than "cloud" converters because your comics never leave your computer. This is important as comic files are often quite large.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Select Your Comic</h4>
                                    <p>Go to our <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">CBR to PDF Tool</Link> and choose your file.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Wait for Extraction</h4>
                                    <p>Our tool will unpack the images (JPG/PNG) directly in your browser memory. This usually takes just a few seconds.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Download the PDF</h4>
                                    <p>Once compiled, click the download button. You now have a high-quality PDF version of your comic!</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Is there a file size limit for CBR to PDF conversion?",
                a: "Since the conversion happens on your own hardware, we do not enforce arbitrary server limits. If your browser can handle the memory (typically up to 500MB-1GB depending on your device), we can convert it."
            },
            {
                q: "Will the image quality drop during conversion?",
                a: "No. Our tool embeds the original images from the archive directly into the PDF without re-compressing them, preserving 100% of the original artwork quality."
            },
            {
                q: "Does this work for manga and right-to-left reading?",
                a: "Yes! The tool extracts images in the order they appear in the archive, preserving the original page sequence."
            },
            {
                q: "How do I fix pages that are in the wrong order?",
                a: "This happens when images inside the archive aren't named correctly (e.g., 1.jpg, 10.jpg, 2.jpg sorts as 1, 10, 2). Extract the CBR, rename all images with leading zeros (001.jpg, 002.jpg, etc.), re-zip as CBZ, and convert again."
            }
        ],
        ctaTitle: "Ready to convert your comics?",
        ctaButton: "Start CBR to PDF",
        ctaSubtext: "Free, Fast, and Locally Processed."
    },
    fr: {
        seo: {
            title: `Convertir CBR en PDF | Guide BD ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Lisez vos bandes dessinées partout. Notre guide ${CURRENT_YEAR} vous montre comment convertir CBR/CBZ en PDF en toute sécurité localement sans jamais les télécharger.`
        },
        h1: "Comment Convertir CBR/CBZ en PDF",
        subtitle: "Le guide définitif pour emporter vos bandes dessinées partout.",
        intro: (
            <>
                Si vous êtes un amateur de bandes dessinées numériques, vous avez probablement rencontré les fichiers <strong>CBR</strong> et <strong>CBZ</strong>. Bien que ces formats soient parfaits pour les lecteurs de BD dédiés, ils peuvent être difficiles à ouvrir sur des appareils standards comme les tablettes ou les ordinateurs de travail.
                <br /><br />
                La solution ? <strong>Convertir CBR en PDF</strong>. Ce guide vous montrera comment transformer vos archives de BD en documents PDF universels sans compromettre votre vie privée ni télécharger de logiciels encombrants.
            </>
        ),
        quickAnswer: {
            question: "Comment convertir CBR en PDF ?",
            answer: "Pour convertir CBR en PDF : 1) Ouvrez pdfcanada.ca/fr/cbr-to-pdf, 2) Sélectionnez votre fichier CBR ou CBZ, 3) Attendez l'extraction automatique, 4) Téléchargez votre PDF. La conversion se fait entièrement dans votre navigateur.",
            time: "10-30 secondes",
            cost: "Gratuit",
            privacy: "Traitement 100% local",
            tool: "Guide CBR",
            steps: ["Ouvrir l'outil", "Sélectionner CBR", "Télécharger PDF"]
        },
        sections: [
            {
                id: "what-is-cbr",
                title: "Qu'est-ce que les fichiers CBR et CBZ ?",
                content: (
                    <>
                        <p className="mb-4">
                            Avant de convertir, il est utile de comprendre ce que sont réellement ces fichiers. Ce sont essentiellement des collections d'images (généralement JPG ou PNG) regroupées dans une archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">Ce sont des archives .RAR renommées en .CBR. Elles nécessitent un logiciel spécifique pour être décompressées.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">Ce sont des archives .ZIP renommées en .CBZ. Elles sont plus courantes et plus faciles à manipuler nativement.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Pourquoi convertir des BD en PDF ?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Compatibilité Universelle :</strong> Les PDF s'ouvrent sur n'importe quel appareil sans applications supplémentaires.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Partage Simplifié :</strong> Envoyer un PDF est plus simple que d'expliquer comment installer un lecteur CBR à vos amis.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Bibliothèque Recherchable :</strong> Les PDF sont plus faciles à organiser et à indexer dans les systèmes de gestion de documents.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape : Conversion en PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Utiliser notre outil local est plus sûr que les convertisseurs « cloud » car vos BD ne quittent jamais votre ordinateur. C'est important car les fichiers BD sont souvent volumineux.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Sélectionnez votre BD</h4>
                                    <p>Allez sur notre <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">Outil CBR en PDF</Link> et choisissez votre fichier.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Attendez l'extraction</h4>
                                    <p>Notre outil décompressera les images (JPG/PNG) directement dans la mémoire de votre navigateur.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Téléchargez le PDF</h4>
                                    <p>Une fois compilé, cliquez sur le bouton de téléchargement. Vous avez maintenant une version PDF haute qualité de votre BD !</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Y a-t-il une limite de taille ?",
                a: "Comme la conversion se fait sur votre matériel, nous n'imposons pas de limites de serveur. Si votre navigateur peut gérer la mémoire, nous pouvons convertir."
            },
            {
                q: "La qualité va-t-elle baisser ?",
                a: "Non. Notre outil intègre les images originales de l'archive directement dans le PDF sans les compresser à nouveau."
            },
            {
                q: "Cela fonctionne-t-il pour les mangas ?",
                a: "Oui ! L'outil respecte l'ordre des pages dans l'archive. Le sens de lecture original est préservé."
            },
            {
                q: "Comment corriger les pages dans le mauvais ordre ?",
                a: "Cela arrive quand les images ne sont pas nommées correctement (ex: 1.jpg, 10.jpg au lieu de 01.jpg, 10.jpg). Renommez les images avec des zéros non significatifs et re-compressez."
            }
        ],
        ctaTitle: "Prêt à convertir vos BD ?",
        ctaButton: "Démarrer CBR en PDF",
        ctaSubtext: "Gratuit, Rapide et Traité Localement."
    },
    pt: {
        seo: {
            title: `Converter CBR para PDF | Guia de HQs ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Leia seus quadrinhos em qualquer dispositivo. Nosso guia de ${CURRENT_YEAR} mostra como converter CBR/CBZ para PDF de forma segura no seu navegador. Sem uploads, processado inteiramente no seu dispositivo.`
        },
        h1: "Como Converter CBR/CBZ para PDF",
        subtitle: "O guia definitivo para levar seus quadrinhos digitais para qualquer lugar.",
        intro: (
            <>
                Se você é um entusiasta de quadrinhos digitais, provavelmente já encontrou arquivos <strong>CBR</strong> e <strong>CBZ</strong>. Embora esses formatos sejam perfeitos para leitores de HQs dedicados, eles podem ser difíceis de abrir em dispositivos padrão como tablets ou computadores de trabalho.
                <br /><br />
                A solução? <strong>Converter CBR para PDF</strong>. Este guia mostrará como transformar seus arquivos de quadrinhos em documentos PDF universais sem comprometer sua privacidade ou baixar softwares pesados.
            </>
        ),
        quickAnswer: {
            question: "Como converto CBR para PDF?",
            answer: "Para converter CBR para PDF: 1) Abra pdfcanada.ca/cbr-to-pdf, 2) Selecione seu arquivo CBR ou CBZ, 3) Aguarde a extração automática (2-5 segundos), 4) Baixe seu PDF. A conversão acontece inteiramente no seu navegador.",
            time: "10-30 segundos",
            cost: "Grátis",
            privacy: "Processamento 100% local",
            tool: "CBR para PDF",
            steps: ["Abrir Ferramenta", "Selecionar CBR", "Baixar PDF"]
        },
        sections: [
            {
                id: "what-is-cbr",
                title: "O que são arquivos CBR e CBZ?",
                content: (
                    <>
                        <p className="mb-4">
                            Antes de converter, é útil entender o que esses arquivos realmente são. Eles são essencialmente coleções de imagens (geralmente JPG ou PNG) agrupadas em um arquivo.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">São arquivos .RAR renomeados para .CBR. Eles requerem software específico para descompactar.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">São arquivos .ZIP renomeados para .CBZ. Eles são mais comuns e fáceis de manusear nativamente.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Por que converter HQs para PDF?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Compatibilidade Universal:</strong> PDFs abrem em qualquer dispositivo — Celular, Kindle, Mac ou PC — sem aplicativos extras.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Compartilhamento Fácil:</strong> Enviar um PDF é mais simples do que explicar como instalar um leitor CBR para seus amigos.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Biblioteca Pesquisável:</strong> PDFs são mais fáceis de organizar e indexar em sistemas de gerenciamento de documentos.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Passo a Passo: Convertendo para PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Usar nossa ferramenta local é mais seguro do que conversores "na nuvem" porque seus quadrinhos nunca saem do seu computador. Isso é importante, pois arquivos de quadrinhos costumam ser grandes.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Selecione seu Quadrinho</h4>
                                    <p>Vá para nossa <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">Ferramenta CBR para PDF</Link> e escolha seu arquivo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Aguarde a Extração</h4>
                                    <p>Nossa ferramenta descompactará as imagens (JPG/PNG) diretamente na memória do seu navegador. Isso geralmente leva apenas alguns segundos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Baixe o PDF</h4>
                                    <p>Uma vez compilado, clique no botão de download. Você agora tem uma versão em PDF de alta qualidade da sua HQ!</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Existe limite de tamanho para conversão de CBR para PDF?",
                a: "Como a conversão acontece no seu próprio hardware, não impomos limites arbitrários de servidor. Se o seu navegador puder lidar com a memória (normalmente até 500MB-1GB), podemos convertê-lo."
            },
            {
                q: "A qualidade da imagem cairá durante a conversão?",
                a: "Não. Nossa ferramenta incorpora as imagens originais do arquivo diretamente no PDF sem recompactá-las, preservando 100% da qualidade da arte original."
            },
            {
                q: "Isso funciona para mangás e leitura da direita para a esquerda?",
                a: "Sim! A ferramenta extrai as imagens na ordem em que aparecem no arquivo, preservando a sequência original das páginas."
            },
            {
                q: "Como corrijo páginas que estão na ordem errada?",
                a: "Isso acontece quando as imagens dentro do arquivo não estão nomeadas corretamente (ex: 1.jpg, 10.jpg em vez de 01.jpg, 10.jpg). Extraia o CBR, renomeie todas as imagens com zeros à esquerda e converta novamente."
            }
        ],
        ctaTitle: "Pronto para converter seus quadrinhos?",
        ctaButton: "Iniciar CBR para PDF",
        ctaSubtext: "Grátis, Rápido e Processado Localmente."
    }
});

export const CbrToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Select Comic", "text": "Select your CBR or CBZ file." },
            { "@type": "HowToStep", "position": 2, "name": "Wait for Extraction", "text": "Wait for image extraction in browser memory." },
            { "@type": "HowToStep", "position": 3, "name": "Download PDF", "text": "Download your compiled PDF." }
        ]
    };

    return (
        <div className="bg-white dark:bg-black">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/cbr-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'CBR en PDF' : (lang === 'pt' ? 'CBR para PDF' : 'CBR to PDF'), path: `/${lang}/guides/cbr-to-pdf` }
                ]}
            />

            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'CBR en PDF' : (lang === 'pt' ? 'CBR para PDF' : 'CBR to PDF'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="cbr-to-pdf" lang={lang} />
                    {/* Intro */}
                    <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert mb-12 sm:mb-14 md:mb-16 max-w-none text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {/* Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                                    {section.content}
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

                    {/* FAQ */}
                    <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-14 md:pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-3xl sm:text-4xl font-black mb-8 sm:mb-10 md:mb-12 flex items-center gap-3 sm:gap-4">
                            <Info className="text-canada-red" size={28} />
                            FAQ
                        </h2>
                        <div className="grid gap-4 sm:gap-5 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                                        <span className="text-canada-red font-black">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl shadow-red-500/20">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform hidden md:block">
                            <Zap size={120} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 relative z-10 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-red-100 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl relative z-10">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/cbr-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 rounded-full font-black text-base sm:text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 relative z-10"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    {/* Navigation to other guides */}
                    <div className="mt-24 text-center">
                        <Link href={`/${lang}/guides/ultimate-pdf-guide`}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-canada-red font-bold transition-colors group"
                        >
                            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            {lang === 'fr' ? 'Retour au Guide Ultime' : 'Back to Ultimate PDF Guide'}
                        </Link>
                    </div>

                    <RelatedTools lang={lang} currentPath="/guides/cbr-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
