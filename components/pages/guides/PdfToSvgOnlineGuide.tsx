'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Shield, Zap, Layers } from 'lucide-react';
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
            title: `PDF to SVG Converter Online | Free Vector Graphics ${CURRENT_YEAR}`,
            desc: `Convert PDF to SVG vector graphics online for free. Preserve scalability and quality at any size. Secure, browser-based conversion that keeps your documents private.`
        },
        h1: "PDF to SVG Converter: Create Scalable Vector Graphics",
        subtitle: "Transform your PDF pages into SVG format directly in your browser. Perfect for web graphics, print design, and responsive layouts.",
        intro: "Need to **convert PDF to SVG** for use on the web or in design software? SVG (Scalable Vector Graphics) is the gold standard for scalable images. Our [PDF to SVG Converter](/${lang}/pdf-to-svg) runs entirely in your browser, ensuring your documents remain private while delivering high-quality vector output.",

        sections: [
            {
                id: "why-svg",
                title: "Why Convert PDF to SVG?",
                content: `SVG files offer unique advantages that make them essential for modern design:
- **Infinite Scalability**: Unlike PNG or JPG, SVG graphics never pixelate when enlarged.
- **Small File Size**: SVG uses efficient XML markup that compresses well.
- **Web Native**: All modern browsers render SVG natively without plugins.
- **Editable**: SVG files can be modified in Illustrator, Figma, Inkscape, or even code editors.
- **Responsive Design**: SVG adapts perfectly to any screen size or resolution.`
            },
            {
                id: "how-to-convert",
                title: "How to Convert PDF to SVG Online",
                content: `1. **Open the Tool**: Navigate to our [PDF to SVG Converter](/${lang}/pdf-to-svg).
2. **Upload PDF**: Drag and drop your PDF file or click to select.
3. **Convert**: Click the Convert button to start processing.
4. **Download ZIP**: Get all your SVG files packaged in a single ZIP archive.

*Each page of your PDF becomes a separate SVG file, making it easy to use individual pages in your projects.*`
            },
            {
                id: "privacy-security",
                title: "100% Private & Secure",
                content: `Your documents never leave your device:
- **Local Processing**: All conversion happens in your web browser using JavaScript.
- **No Server Upload**: We never receive, store, or have access to your files.
- **No Registration**: No account needed - just convert and download.
- **Perfect for Sensitive Documents**: Ideal for contracts, financial documents, and proprietary designs.`
            },
            {
                id: "use-cases",
                title: "Common Use Cases",
                content: `**Web Development**: Use SVG pages as responsive images on websites.

**Graphic Design**: Import PDF content into Illustrator, Figma, or Canva.

**Presentations**: Embed crisp vector graphics in PowerPoint or Google Slides.

**Print Design**: Get scalable assets for posters, banners, and signage.

**Documentation**: Convert technical PDFs to SVG for interactive documentation.`
            }
        ],

        faq: [
            {
                q: "Is this PDF to SVG converter free?",
                a: "Yes, completely free with no limits. Convert as many PDFs as you need."
            },
            {
                q: "Are the SVG files truly vector graphics?",
                a: "The SVG contains a high-resolution embedded image of each PDF page wrapped in SVG markup, allowing it to scale cleanly. For fully editable vector paths, you would need specialized vectorization software."
            },
            {
                q: "What's the output quality?",
                a: "We render each page at 2x scale (high resolution) before embedding in SVG, ensuring crisp output even at large sizes."
            },
            {
                q: "Can I convert password-protected PDFs?",
                a: "Yes, you'll need to enter the password when prompted, and conversion proceeds locally."
            }
        ],

        ctaTitle: "Convert Your PDF to SVG Now",
        ctaButton: "PDF to SVG Converter",
        ctaSubtext: "Free • Private • Unlimited",
    },
    fr: {
        seo: {
            title: `Convertir PDF en SVG En Ligne | Graphiques Vectoriels Gratuit ${CURRENT_YEAR}`,
            desc: `Convertissez PDF en SVG graphiques vectoriels en ligne gratuitement. Préservez l'évolutivité et la qualité à toute taille. Conversion sécurisée par navigateur.`
        },
        h1: "Convertisseur PDF en SVG : Créer des Graphiques Vectoriels",
        subtitle: "Transformez vos pages PDF en format SVG directement dans votre navigateur. Parfait pour le web, le design d'impression et les mises en page responsive.",
        intro: "Besoin de **convertir PDF en SVG** pour l'utiliser sur le web ou dans un logiciel de design ? SVG (Scalable Vector Graphics) est la référence pour les images évolutives. Notre [Convertisseur PDF en SVG](/${lang}/pdf-to-svg) fonctionne entièrement dans votre navigateur, garantissant la confidentialité de vos documents tout en offrant une sortie vectorielle de haute qualité.",

        sections: [
            {
                id: "why-svg",
                title: "Pourquoi Convertir PDF en SVG ?",
                content: `Les fichiers SVG offrent des avantages uniques essentiels pour le design moderne :
- **Évolutivité Infinie** : Contrairement aux PNG ou JPG, les graphiques SVG ne pixelisent jamais.
- **Taille de Fichier Réduite** : SVG utilise un balisage XML efficace.
- **Natif pour le Web** : Tous les navigateurs modernes affichent SVG nativement.
- **Éditable** : Les fichiers SVG peuvent être modifiés dans Illustrator, Figma, Inkscape.
- **Design Responsive** : SVG s'adapte parfaitement à toute taille d'écran.`
            },
            {
                id: "how-to-convert",
                title: "Comment Convertir PDF en SVG En Ligne",
                content: `1. **Ouvrez l'Outil** : Allez sur notre [Convertisseur PDF en SVG](/${lang}/pdf-to-svg).
2. **Téléchargez le PDF** : Glissez-déposez votre fichier PDF.
3. **Convertissez** : Cliquez sur le bouton Convertir.
4. **Téléchargez le ZIP** : Obtenez tous vos fichiers SVG dans une archive ZIP.

*Chaque page de votre PDF devient un fichier SVG séparé.*`
            },
            {
                id: "privacy-security",
                title: "100% Privé & Sécurisé",
                content: `Vos documents ne quittent jamais votre appareil :
- **Traitement Local** : Toute la conversion se fait dans votre navigateur.
- **Aucun Téléchargement Serveur** : Nous n'avons jamais accès à vos fichiers.
- **Pas d'Inscription** : Pas de compte nécessaire - convertissez et téléchargez.
- **Parfait pour Documents Sensibles** : Idéal pour contrats et documents financiers.`
            },
            {
                id: "use-cases",
                title: "Cas d'Utilisation Courants",
                content: `**Développement Web** : Utilisez les pages SVG comme images responsive.

**Design Graphique** : Importez le contenu PDF dans Illustrator, Figma ou Canva.

**Présentations** : Intégrez des graphiques vectoriels nets dans PowerPoint.

**Design d'Impression** : Obtenez des assets évolutifs pour affiches et bannières.`
            }
        ],

        faq: [
            {
                q: "Ce convertisseur PDF en SVG est-il gratuit ?",
                a: "Oui, complètement gratuit sans limite. Convertissez autant de PDF que nécessaire."
            },
            {
                q: "Les fichiers SVG sont-ils de vrais graphiques vectoriels ?",
                a: "Le SVG contient une image haute résolution de chaque page PDF intégrée dans un balisage SVG. Pour des chemins vectoriels entièrement éditables, un logiciel de vectorisation spécialisé serait nécessaire."
            },
            {
                q: "Quelle est la qualité de sortie ?",
                a: "Nous rendons chaque page à échelle 2x (haute résolution) avant l'intégration en SVG."
            },
            {
                q: "Puis-je convertir des PDF protégés par mot de passe ?",
                a: "Oui, vous devrez entrer le mot de passe et la conversion se poursuit localement."
            }
        ],

        ctaTitle: "Convertissez Votre PDF en SVG Maintenant",
        ctaButton: "Convertisseur PDF en SVG",
        ctaSubtext: "Gratuit • Privé • Illimité",
    },
    pt: {
        seo: {
            title: `Converter PDF para SVG Online | Gráficos Vetoriais Grátis ${CURRENT_YEAR}`,
            desc: `Converta PDF para SVG gráficos vetoriais online gratuitamente. Preserve escalabilidade e qualidade em qualquer tamanho. Conversão segura baseada em navegador.`
        },
        h1: "Conversor PDF para SVG: Crie Gráficos Vetoriais",
        subtitle: "Transforme suas páginas PDF em formato SVG diretamente no seu navegador. Perfeito para gráficos web, design de impressão e layouts responsivos.",
        intro: "Precisa **converter PDF para SVG** para usar na web ou em software de design? SVG (Scalable Vector Graphics) é o padrão ouro para imagens escaláveis. Nosso [Conversor PDF para SVG](/${lang}/pdf-to-svg) roda inteiramente no seu navegador, garantindo que seus documentos permaneçam privados enquanto entrega saída vetorial de alta qualidade.",

        sections: [
            {
                id: "why-svg",
                title: "Por que Converter PDF para SVG?",
                content: `Arquivos SVG oferecem vantagens únicas essenciais para design moderno:
- **Escalabilidade Infinita**: Diferente de PNG ou JPG, gráficos SVG nunca pixelizam.
- **Tamanho de Arquivo Pequeno**: SVG usa marcação XML eficiente.
- **Nativo para Web**: Todos os navegadores modernos renderizam SVG nativamente.
- **Editável**: Arquivos SVG podem ser modificados no Illustrator, Figma, Inkscape.
- **Design Responsivo**: SVG se adapta perfeitamente a qualquer tamanho de tela.`
            },
            {
                id: "how-to-convert",
                title: "Como Converter PDF para SVG Online",
                content: `1. **Abra a Ferramenta**: Navegue até nosso [Conversor PDF para SVG](/${lang}/pdf-to-svg).
2. **Envie o PDF**: Arraste e solte seu arquivo PDF.
3. **Converta**: Clique no botão Converter.
4. **Baixe o ZIP**: Obtenha todos os seus arquivos SVG em um arquivo ZIP.

*Cada página do seu PDF se torna um arquivo SVG separado.*`
            },
            {
                id: "privacy-security",
                title: "100% Privado e Seguro",
                content: `Seus documentos nunca saem do seu dispositivo:
- **Processamento Local**: Toda conversão acontece no seu navegador.
- **Sem Upload para Servidor**: Nunca recebemos ou temos acesso aos seus arquivos.
- **Sem Cadastro**: Nenhuma conta necessária - basta converter e baixar.
- **Perfeito para Documentos Sensíveis**: Ideal para contratos e documentos financeiros.`
            },
            {
                id: "use-cases",
                title: "Casos de Uso Comuns",
                content: `**Desenvolvimento Web**: Use páginas SVG como imagens responsivas.

**Design Gráfico**: Importe conteúdo PDF para Illustrator, Figma ou Canva.

**Apresentações**: Incorpore gráficos vetoriais nítidos no PowerPoint.

**Design de Impressão**: Obtenha assets escaláveis para pôsteres e banners.`
            }
        ],

        faq: [
            {
                q: "Este conversor PDF para SVG é gratuito?",
                a: "Sim, completamente grátis sem limites. Converta quantos PDFs precisar."
            },
            {
                q: "Os arquivos SVG são verdadeiros gráficos vetoriais?",
                a: "O SVG contém uma imagem de alta resolução de cada página PDF incorporada em marcação SVG. Para caminhos vetoriais totalmente editáveis, software de vetorização especializado seria necessário."
            },
            {
                q: "Qual é a qualidade de saída?",
                a: "Renderizamos cada página em escala 2x (alta resolução) antes de incorporar no SVG."
            },
            {
                q: "Posso converter PDFs protegidos por senha?",
                a: "Sim, você precisará inserir a senha e a conversão continua localmente."
            }
        ],

        ctaTitle: "Converta Seu PDF para SVG Agora",
        ctaButton: "Conversor PDF para SVG",
        ctaSubtext: "Grátis • Privado • Ilimitado",
    }
});

export const PdfToSvgOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-svg"
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-14"
                dateModified="2026-01-14"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir PDF en SVG gratuitement ?" : (lang === 'pt' ? "Como converter PDF para SVG grátis?" : "How to convert PDF to SVG for free?"),
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur sécurisé de pdfcanada.ca. Il convertit directement dans votre navigateur, préservant la qualité et la confidentialité."
                        : (lang === 'pt' ? "Use o conversor seguro do pdfcanada.ca. Converte diretamente no navegador, preservando qualidade e privacidade." : "Use pdfcanada.ca's secure converter. It converts directly in your browser, preserving quality and privacy."),
                    tool: "PDF to SVG Converter",
                    steps: lang === 'fr'
                        ? ["Ouvrez l'outil", "Téléchargez le PDF", "Téléchargez le ZIP"]
                        : (lang === 'pt' ? ["Abra a ferramenta", "Envie o PDF", "Baixe o ZIP"] : ["Open tool", "Upload PDF", "Download ZIP"])
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'PDF to SVG', path: lang === 'fr' ? '/fr/guides/pdf-to-svg' : (lang === 'pt' ? '/pt/guides/pdf-to-svg' : '/guides/pdf-to-svg') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileCode size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'PDF to SVG', href: lang === 'fr' ? '/fr/guides/pdf-to-svg' : (lang === 'pt' ? '/pt/guides/pdf-to-svg' : '/guides/pdf-to-svg') }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="pdf-to-svg" lang={lang} />
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
                        <Link href={`/${lang}/pdf-to-svg`}
                            className="inline-block bg-white text-canada-red px-6 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95 whitespace-normal max-w-full"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir un PDF en SVG sans logiciel ?" : (lang === 'pt' ? "Como converter PDF para SVG sem software?" : "How to convert PDF to SVG without software?")}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur en ligne de pdfcanada.ca. Il convertit le PDF en SVG directement dans le navigateur, sans installation ni upload sur un serveur."
                            : (lang === 'pt' ? "Use o conversor online do pdfcanada.ca. Converte PDF para SVG diretamente no navegador, sem instalação ou upload para servidor." : "Use pdfcanada.ca's online converter. It converts PDF to SVG directly in your browser, with no installation or server upload required.")}
                        toolName="PDF to SVG Converter"
                        steps={lang === 'fr'
                            ? ["Allez sur pdfcanada.ca/pdf-to-svg", "Téléchargez le PDF", "Téléchargez le ZIP SVG"]
                            : (lang === 'pt' ? ["Vá para pdfcanada.ca/pdf-to-svg", "Envie o PDF", "Baixe o ZIP SVG"] : ["Go to pdfcanada.ca/pdf-to-svg", "Upload PDF", "Download SVG ZIP"])}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-svg" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
