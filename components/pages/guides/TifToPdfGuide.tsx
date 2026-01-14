'use client';

import Link from 'next/link';
import React from 'react';
import { FileImage, Shield, Zap } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `TIF to PDF Converter Online | Free TIFF Conversion ${CURRENT_YEAR}`,
            desc: `Convert TIF/TIFF images to PDF online for free. Preserve image quality. Secure, browser-based conversion that keeps your files private.`
        },
        h1: "TIF to PDF Converter: Convert TIFF Images Free",
        subtitle: "Transform your TIF/TIFF images into PDF documents directly in your browser. Perfect for archiving, sharing, and printing.",
        intro: "Need to **convert TIF to PDF** for easier sharing or archiving? TIFF (Tagged Image File Format) is widely used for high-quality scans and professional images, but PDF is more universally compatible. Our [TIF to PDF Converter](/${lang}/tif-to-pdf) runs entirely in your browser, ensuring your images remain private.",

        sections: [
            {
                id: "why-convert",
                title: "Why Convert TIF to PDF?",
                content: `TIFF files are excellent for quality but can be difficult to share:
- **Universal Compatibility**: PDF opens on any device without special software.
- **Smaller File Size**: PDF compression reduces file size while preserving quality.
- **Easy Sharing**: Email, upload, and share PDFs with anyone.
- **Print Ready**: PDFs maintain consistent layout across all printers.
- **Archiving**: PDF/A format is the standard for long-term document archiving.`
            },
            {
                id: "how-to-convert",
                title: "How to Convert TIF to PDF",
                content: `1. **Open the Tool**: Navigate to our [TIF to PDF Converter](/${lang}/tif-to-pdf).
2. **Upload TIF**: Drag and drop your TIF/TIFF file or click to select.
3. **Convert**: Click the Convert button to process.
4. **Download PDF**: Get your converted PDF file instantly.

*Your file never leaves your browser - all processing happens locally on your device.*`
            },
            {
                id: "privacy-security",
                title: "100% Private & Secure",
                content: `Your images never leave your device:
- **Local Processing**: Conversion happens entirely in your web browser.
- **No Server Upload**: We never receive or store your files.
- **No Registration**: No account needed - just convert and download.
- **Perfect for Sensitive Images**: Ideal for medical scans, legal documents, and personal photos.`
            }
        ],

        faq: [
            {
                q: "Is this TIF to PDF converter free?",
                a: "Yes, completely free with no limits. Convert as many TIF files as you need."
            },
            {
                q: "Does it support multi-page TIFF files?",
                a: "Browser support for multi-page TIFF varies. For best results, each TIFF should be a single image."
            },
            {
                q: "What's the output quality?",
                a: "We preserve the original image quality while optimizing for PDF compatibility."
            },
            {
                q: "Can I convert multiple TIF files at once?",
                a: "Currently, you can convert one file at a time. Each conversion takes just seconds."
            }
        ],

        ctaTitle: "Convert Your TIF to PDF Now",
        ctaButton: "TIF to PDF Converter",
        ctaSubtext: "Free • Private • Instant",
    },
    fr: {
        seo: {
            title: `Convertisseur TIF en PDF En Ligne | Conversion TIFF Gratuite ${CURRENT_YEAR}`,
            desc: `Convertissez les images TIF/TIFF en PDF en ligne gratuitement. Préservez la qualité d'image. Conversion sécurisée par navigateur.`
        },
        h1: "Convertisseur TIF en PDF : Convertir Images TIFF Gratuitement",
        subtitle: "Transformez vos images TIF/TIFF en documents PDF directement dans votre navigateur. Parfait pour l'archivage, le partage et l'impression.",
        intro: "Besoin de **convertir TIF en PDF** pour un partage ou archivage plus facile ? TIFF est largement utilisé pour les scans de haute qualité, mais PDF est plus universellement compatible. Notre [Convertisseur TIF en PDF](/${lang}/tif-to-pdf) fonctionne entièrement dans votre navigateur.",

        sections: [
            {
                id: "why-convert",
                title: "Pourquoi Convertir TIF en PDF ?",
                content: `Les fichiers TIFF sont excellents pour la qualité mais difficiles à partager :
- **Compatibilité Universelle** : PDF s'ouvre sur n'importe quel appareil.
- **Taille de Fichier Réduite** : La compression PDF réduit la taille.
- **Partage Facile** : Envoyez et partagez des PDF avec n'importe qui.
- **Prêt à Imprimer** : Les PDF maintiennent une mise en page cohérente.`
            },
            {
                id: "how-to-convert",
                title: "Comment Convertir TIF en PDF",
                content: `1. **Ouvrez l'Outil** : Allez sur notre [Convertisseur TIF en PDF](/${lang}/tif-to-pdf).
2. **Téléchargez le TIF** : Glissez-déposez votre fichier TIF/TIFF.
3. **Convertissez** : Cliquez sur le bouton Convertir.
4. **Téléchargez le PDF** : Obtenez votre fichier PDF instantanément.`
            },
            {
                id: "privacy-security",
                title: "100% Privé & Sécurisé",
                content: `Vos images ne quittent jamais votre appareil :
- **Traitement Local** : La conversion se fait dans votre navigateur.
- **Aucun Téléchargement Serveur** : Nous n'avons jamais accès à vos fichiers.
- **Pas d'Inscription** : Pas de compte nécessaire.`
            }
        ],

        faq: [
            {
                q: "Ce convertisseur TIF en PDF est-il gratuit ?",
                a: "Oui, complètement gratuit sans limite."
            },
            {
                q: "Supporte-t-il les fichiers TIFF multi-pages ?",
                a: "Le support navigateur pour TIFF multi-pages varie. Pour de meilleurs résultats, chaque TIFF devrait être une seule image."
            },
            {
                q: "Quelle est la qualité de sortie ?",
                a: "Nous préservons la qualité d'image originale tout en optimisant pour PDF."
            }
        ],

        ctaTitle: "Convertissez Votre TIF en PDF Maintenant",
        ctaButton: "Convertisseur TIF en PDF",
        ctaSubtext: "Gratuit • Privé • Instantané",
    },
    pt: {
        seo: {
            title: `Conversor TIF para PDF Online | Conversão TIFF Grátis ${CURRENT_YEAR}`,
            desc: `Converta imagens TIF/TIFF para PDF online gratuitamente. Preserve a qualidade da imagem. Conversão segura baseada em navegador.`
        },
        h1: "Conversor TIF para PDF: Converter Imagens TIFF Grátis",
        subtitle: "Transforme suas imagens TIF/TIFF em documentos PDF diretamente no seu navegador. Perfeito para arquivar, compartilhar e imprimir.",
        intro: "Precisa **converter TIF para PDF** para compartilhar ou arquivar mais facilmente? TIFF é amplamente usado para scans de alta qualidade, mas PDF é mais universalmente compatível. Nosso [Conversor TIF para PDF](/${lang}/tif-to-pdf) roda inteiramente no seu navegador.",

        sections: [
            {
                id: "why-convert",
                title: "Por que Converter TIF para PDF?",
                content: `Arquivos TIFF são excelentes para qualidade mas difíceis de compartilhar:
- **Compatibilidade Universal**: PDF abre em qualquer dispositivo.
- **Tamanho de Arquivo Menor**: Compressão PDF reduz o tamanho.
- **Compartilhamento Fácil**: Envie PDFs para qualquer pessoa.
- **Pronto para Imprimir**: PDFs mantêm layout consistente.`
            },
            {
                id: "how-to-convert",
                title: "Como Converter TIF para PDF",
                content: `1. **Abra a Ferramenta**: Navegue até nosso [Conversor TIF para PDF](/${lang}/tif-to-pdf).
2. **Envie o TIF**: Arraste e solte seu arquivo TIF/TIFF.
3. **Converta**: Clique no botão Converter.
4. **Baixe o PDF**: Obtenha seu arquivo PDF instantaneamente.`
            },
            {
                id: "privacy-security",
                title: "100% Privado e Seguro",
                content: `Suas imagens nunca saem do seu dispositivo:
- **Processamento Local**: Conversão acontece no navegador.
- **Sem Upload para Servidor**: Nunca recebemos seus arquivos.
- **Sem Cadastro**: Nenhuma conta necessária.`
            }
        ],

        faq: [
            {
                q: "Este conversor TIF para PDF é gratuito?",
                a: "Sim, completamente grátis sem limites."
            },
            {
                q: "Suporta arquivos TIFF multi-páginas?",
                a: "O suporte do navegador para TIFF multi-páginas varia. Para melhores resultados, cada TIFF deve ser uma única imagem."
            },
            {
                q: "Qual é a qualidade de saída?",
                a: "Preservamos a qualidade original da imagem enquanto otimizamos para PDF."
            }
        ],

        ctaTitle: "Converta Seu TIF para PDF Agora",
        ctaButton: "Conversor TIF para PDF",
        ctaSubtext: "Grátis • Privado • Instantâneo",
    }
});

export const TifToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/tif-to-pdf"
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-14"
                dateModified="2026-01-14"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir TIF en PDF gratuitement ?" : (lang === 'pt' ? "Como converter TIF para PDF grátis?" : "How to convert TIF to PDF for free?"),
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur sécurisé de pdfcanada.ca. Il convertit directement dans votre navigateur."
                        : (lang === 'pt' ? "Use o conversor seguro do pdfcanada.ca. Converte diretamente no navegador." : "Use pdfcanada.ca's secure converter. It converts directly in your browser."),
                    tool: "TIF to PDF Converter",
                    steps: lang === 'fr'
                        ? ["Ouvrez l'outil", "Téléchargez le TIF", "Téléchargez le PDF"]
                        : (lang === 'pt' ? ["Abra a ferramenta", "Envie o TIF", "Baixe o PDF"] : ["Open tool", "Upload TIF", "Download PDF"])
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'TIF to PDF', path: lang === 'fr' ? '/fr/guides/tif-to-pdf' : (lang === 'pt' ? '/pt/guides/tif-to-pdf' : '/guides/tif-to-pdf') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileImage size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'TIF to PDF', href: lang === 'fr' ? '/fr/guides/tif-to-pdf' : (lang === 'pt' ? '/pt/guides/tif-to-pdf' : '/guides/tif-to-pdf') }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? "Questions Fréquentes" : (lang === 'pt' ? "Perguntas Frequentes" : "Common Questions")}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <Shield size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
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
                        <Link href={`/${lang}/tif-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95 whitespace-normal max-w-full"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir un fichier TIF en PDF sans logiciel ?" : (lang === 'pt' ? "Como converter arquivo TIF para PDF sem software?" : "How to convert TIF file to PDF without software?")}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur en ligne de pdfcanada.ca. Il convertit le TIF en PDF directement dans le navigateur, sans installation."
                            : (lang === 'pt' ? "Use o conversor online do pdfcanada.ca. Converte TIF para PDF diretamente no navegador, sem instalação." : "Use pdfcanada.ca's online converter. It converts TIF to PDF directly in your browser, with no installation required.")}
                        toolName="TIF to PDF Converter"
                        steps={lang === 'fr'
                            ? ["Allez sur pdfcanada.ca/tif-to-pdf", "Téléchargez le TIF", "Téléchargez le PDF"]
                            : (lang === 'pt' ? ["Vá para pdfcanada.ca/tif-to-pdf", "Envie o TIF", "Baixe o PDF"] : ["Go to pdfcanada.ca/tif-to-pdf", "Upload TIF", "Download PDF"])}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/tif-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
