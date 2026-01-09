'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2, Info } from 'lucide-react';
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

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `How to Convert RTF to PDF | Free & Secure ${CURRENT_YEAR}`,
            desc: `Learn how to transform RTF to PDF instantly. Our secure ${CURRENT_YEAR} guide shows you how to convert RTF to PDF locally on your device. 100% private.`
        },
        h1: `How to Convert RTF to PDF`,
        subtitle: "Create high-quality PDF documents from your RTF files instantly without leaving your browser.",

        intro: "Need to turn your **RTF file** into a professional-looking PDF? Rich Text Format (RTF) files are widely used for cross-platform document compatibility, but PDFs are the modern standard for ensuring your formatting stays exactly as intended. Our **RTF to PDF converter** handles the transition smoothly, and because it runs locally, you don't have to worry about your business or personal data being stored on a random server.",

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Converting RTF to PDF",
                content: `Follow these simple steps to convert your RTF document to PDF:
1. **Upload Your .rtf File**: Click to browse or drag-and-drop your RTF document into our converter. The file stays on your device—never uploaded to our servers.
2. **Automatic Conversion**: Our browser-based engine immediately begins processing your document, preserving formatting, fonts, and layout.
3. **Download Your PDF**: Within seconds, your professional PDF is ready. Save it and share with confidence.`
            },
            {
                id: "what-is-rtf",
                title: "What is RTF and Why Convert to PDF?",
                content: `RTF (Rich Text Format) was created by Microsoft in 1987 as a universal document format. While RTF is great for compatibility, PDFs offer significant advantages:
- **Format Locking**: PDFs lock your document's appearance across all devices.
- **Universal Access**: Everyone can open a PDF on any device without needing specific software.
- **Security & Integrity**: It's much harder for someone to accidentally change your content in a PDF.
- **Professional Appearance**: PDFs are the standard for business communications.
- **Print Consistency**: PDFs ensure what you see on screen is exactly what prints.`
            },
            {
                id: "local-first",
                title: "Local Conversion: Better for Your Privacy & Speed",
                content: `Most converters on the web are "Cloud Based," meaning your document is uploaded to their servers. Our tool works fundamentally differently. It uses **in-browser processing** to transform your .rtf file into a PDF right on your device.

**Why This Matters:**
- **Privacy Protection**: Your confidential documents never leave your computer.
- **Faster Processing**: No upload/download wait times.
- **Offline Capable**: Once loaded, our tool can work without an internet connection.
- **No File Size Limits**: Only limited by your device's memory.`
            }
        ],

        faq: [
            {
                q: "Is this RTF to PDF converter really free?",
                a: "Yes! No limits, no credit cards, no hidden fees. Convert as many RTF documents as you need."
            },
            {
                q: "Does it work on mobile devices?",
                a: "Absolutely. You can convert RTF to PDF directly from your iPhone or Android browser."
            },
            {
                q: "What's the difference between RTF and PDF?",
                a: "RTF is an editable document format that can look different on different systems. PDF is a locked format that looks identical everywhere."
            },
            {
                q: "Will my formatting stay exactly the same?",
                a: "In most cases, yes. Our converter preserves fonts, styles, bold, italic, underline, and basic layout."
            }
        ],

        quickAnswer: {
            question: "How do I convert RTF to PDF for free?",
            answer: "Use pdfcanada.ca's RTF to PDF converter. Upload your .rtf file, our engine converts it locally in your browser, then download your professional PDF.",
            tool: "RTF to PDF Converter",
            steps: ["Upload RTF file", "Automatic local conversion", "Download PDF"]
        },

        ctaTitle: "Convert Your RTF File Now",
        ctaButton: "Start RTF to PDF Conversion",
        ctaSubtext: "100% Free. Secure. Local."
    },
    fr: {
        seo: {
            title: `Convertir RTF en PDF | Guide Sécurisé ${CURRENT_YEAR}`,
            desc: `Découvrez comment transformer vos fichiers RTF en PDF instantanément. Guide sécurisé ${CURRENT_YEAR} pour convertir localement sans risque pour vos données. 100% privé.`
        },
        h1: "Comment Convertir RTF en PDF",
        subtitle: "Créez des documents PDF de haute qualité à partir de vos fichiers RTF instantanément sans quitter votre navigateur.",

        intro: "Besoin de transformer votre **fichier RTF** en PDF professionnel ? Les fichiers Rich Text Format (RTF) sont largement utilisés pour la compatibilité inter-plateformes, mais les PDF sont la norme moderne pour garantir que votre formatage reste exactement comme prévu. Notre **convertisseur RTF en PDF** gère la transition en douceur, et parce qu'il fonctionne localement, vous n'avez pas à vous soucier de vos données.",

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Conversion de RTF en PDF",
                content: `Suivez ces étapes simples pour convertir votre document RTF en PDF :
1. **Téléchargez votre fichier .rtf** : Cliquez pour parcourir ou glissez-déposez votre document RTF dans notre convertisseur.
2. **Conversion automatique** : Notre moteur basé sur le navigateur commence immédiatement à traiter votre document.
3. **Téléchargez votre PDF** : En quelques secondes, votre PDF professionnel est prêt.`
            },
            {
                id: "what-is-rtf",
                title: "Qu'est-ce que RTF et Pourquoi Convertir en PDF ?",
                content: `RTF (Rich Text Format) a été créé par Microsoft en 1987 comme format de document universel. Les PDF offrent des avantages significatifs :
- **Verrouillage du Format** : Les PDF verrouillent l'apparence de votre document sur tous les appareils.
- **Accès Universel** : Tout le monde peut ouvrir un PDF sans logiciel spécifique.
- **Sécurité et Intégrité** : Il est difficile de modifier accidentellement un PDF.
- **Apparence Professionnelle** : Les PDF sont la norme pour les communications d'affaires.`
            },
            {
                id: "local-first",
                title: "Conversion Locale : Meilleure pour Votre Confidentialité",
                content: `La plupart des convertisseurs sont "basés sur le cloud". Notre outil utilise le **traitement dans le navigateur** pour transformer votre fichier .rtf en PDF directement sur votre appareil.

**Pourquoi C'est Important :**
- **Protection de la Confidentialité** : Vos documents ne quittent jamais votre ordinateur.
- **Traitement Plus Rapide** : Aucun temps d'attente de téléchargement.
- **Capable Hors Ligne** : Fonctionne sans connexion Internet.`
            }
        ],

        faq: [
            {
                q: "Ce convertisseur RTF en PDF est-il vraiment gratuit ?",
                a: "Oui ! Aucune limite, aucune carte de crédit, aucuns frais cachés."
            },
            {
                q: "Cela fonctionne-t-il sur les appareils mobiles ?",
                a: "Absolument. Vous pouvez convertir RTF en PDF directement depuis votre navigateur iPhone ou Android."
            },
            {
                q: "Mon formatage restera-t-il exactement le même ?",
                a: "Dans la plupart des cas, oui. Notre convertisseur préserve les polices, styles, gras, italique, souligné."
            }
        ],

        quickAnswer: {
            question: "Comment convertir RTF en PDF gratuitement ?",
            answer: "Utilisez le convertisseur RTF en PDF de pdfcanada.ca. Téléchargez votre fichier .rtf, notre moteur le convertit localement dans votre navigateur, puis téléchargez votre PDF.",
            tool: "Convertisseur RTF en PDF",
            steps: ["Téléchargez fichier RTF", "Conversion locale automatique", "Téléchargez PDF"]
        },

        ctaTitle: "Convertissez Votre Fichier RTF Maintenant",
        ctaButton: "Commencer la Conversion RTF en PDF",
        ctaSubtext: "100% Gratuit. Sécurisé. Local."
    },
    pt: {
        seo: {
            title: `Como Converter RTF para PDF | Gratuito e Seguro ${CURRENT_YEAR}`,
            desc: `Aprenda como transformar RTF para PDF instantaneamente. Nosso guia seguro ${CURRENT_YEAR} mostra como converter RTF para PDF localmente no seu dispositivo. 100% privado.`
        },
        h1: `Como Converter RTF para PDF`,
        subtitle: "Crie documentos PDF de alta qualidade a partir de seus arquivos RTF instantaneamente sem sair do navegador.",

        intro: "Precisa transformar seu **arquivo RTF** em um PDF profissional? Arquivos Rich Text Format (RTF) são amplamente usados para compatibilidade entre plataformas, mas PDFs são o padrão moderno para garantir que sua formatação permaneça exatamente como pretendido. Nosso **conversor RTF para PDF** lida com a transição suavemente, e como funciona localmente, você não precisa se preocupar com seus dados sendo armazenados em um servidor aleatório.",

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Convertendo RTF para PDF",
                content: `Siga estes passos simples para converter seu documento RTF para PDF:
1. **Envie Seu Arquivo .rtf**: Clique para navegar ou arraste e solte seu documento RTF no nosso conversor. O arquivo permanece no seu dispositivo—nunca enviado para nossos servidores.
2. **Conversão Automática**: Nosso motor baseado em navegador imediatamente começa a processar seu documento, preservando formatação, fontes e layout.
3. **Baixe Seu PDF**: Em segundos, seu PDF profissional está pronto. Salve e compartilhe com confiança.`
            },
            {
                id: "what-is-rtf",
                title: "O que é RTF e Por Que Converter para PDF?",
                content: `RTF (Rich Text Format) foi criado pela Microsoft em 1987 como um formato de documento universal. Embora o RTF seja ótimo para compatibilidade, PDFs oferecem vantagens significativas:
- **Bloqueio de Formato**: PDFs bloqueiam a aparência do seu documento em todos os dispositivos.
- **Acesso Universal**: Todos podem abrir um PDF em qualquer dispositivo sem precisar de software específico.
- **Segurança e Integridade**: É muito mais difícil alguém alterar acidentalmente seu conteúdo em um PDF.
- **Aparência Profissional**: PDFs são o padrão para comunicações comerciais.
- **Consistência de Impressão**: PDFs garantem que o que você vê na tela é exatamente o que imprime.`
            },
            {
                id: "local-first",
                title: "Conversão Local: Melhor para Sua Privacidade e Velocidade",
                content: `A maioria dos conversores na web são "baseados em nuvem", o que significa que seu documento é enviado para seus servidores. Nossa ferramenta funciona de forma diferente. Ela usa **processamento no navegador** para transformar seu arquivo .rtf em PDF diretamente no seu dispositivo.

**Por Que Isso Importa:**
- **Proteção de Privacidade**: Seus documentos confidenciais nunca saem do seu computador.
- **Processamento Mais Rápido**: Sem tempos de espera de upload/download.
- **Funciona Offline**: Uma vez carregada, nossa ferramenta pode funcionar sem conexão à internet.
- **Sem Limites de Tamanho**: Apenas limitado pela memória do seu dispositivo.`
            }
        ],

        faq: [
            {
                q: "Este conversor RTF para PDF é realmente gratuito?",
                a: "Sim! Sem limites, sem cartões de crédito, sem taxas ocultas. Converta quantos documentos RTF precisar."
            },
            {
                q: "Funciona em dispositivos móveis?",
                a: "Absolutamente. Você pode converter RTF para PDF diretamente do navegador do seu iPhone ou Android."
            },
            {
                q: "Qual a diferença entre RTF e PDF?",
                a: "RTF é um formato de documento editável que pode parecer diferente em sistemas diferentes. PDF é um formato bloqueado que parece idêntico em qualquer lugar."
            },
            {
                q: "Minha formatação permanecerá exatamente a mesma?",
                a: "Na maioria dos casos, sim. Nosso conversor preserva fontes, estilos, negrito, itálico, sublinhado e layout básico."
            }
        ],

        quickAnswer: {
            question: "Como converter RTF para PDF gratuitamente?",
            answer: "Use o conversor RTF para PDF do pdfcanada.ca. Envie seu arquivo .rtf, nosso motor o converte localmente no seu navegador, depois baixe seu PDF profissional.",
            tool: "Conversor RTF para PDF",
            steps: ["Enviar arquivo RTF", "Conversão local automática", "Baixar PDF"]
        },

        ctaTitle: "Converta Seu Arquivo RTF Agora",
        ctaButton: "Iniciar Conversão RTF para PDF",
        ctaSubtext: "100% Gratuito. Seguro. Local."
    }
});

export const RtfToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<FileText size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'RTF en PDF' : 'RTF to PDF', href: '#' }
            ]}
        >
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/rtf-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
            />

            <div className="w-full py-12 space-y-16">
                <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <MarkdownContent content={t.intro} />
                </div>

                <div className="space-y-16">
                    {t.sections.map((section: any) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
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

                <div className="mt-20">
                    <div className="flex items-center gap-3 mb-10">
                        <Info className="text-canada-red" size={32} />
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                    </div>
                    <div className="grid gap-6">
                        {t.faq.map((item: any, i: number) => (
                            <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                    <MousePointer2 className="w-5 h-5 text-canada-red" /> {item.q}
                                </h4>
                                <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-canada-red rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">{t.ctaTitle}</h2>
                    <p className="text-lg md:text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
                    <Link href={`/${lang}/rtf-to-pdf`}
                        className="inline-block bg-white text-canada-red px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                    >
                        {t.ctaButton}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/rtf-to-pdf" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
