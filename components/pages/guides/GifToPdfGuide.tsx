'use client';

import Link from 'next/link';
import React from 'react';
import { Globe, FileImage, Layers, Zap, CheckCircle, Shield } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { RelatedTools } from '../../RelatedTools';
import { AuthorBio } from '../../AuthorBio';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `GIF to PDF Converter | Convert Animated & Static GIFs ${CURRENT_YEAR}`,
            desc: `Free online tool to convert GIF images to PDF. Supports static and animated GIFs (converts frames). fast, secure, and client-side.`
        },
        h1: "Convert GIF to PDF",
        subtitle: "Turn your GIF images into professional PDF documents instantly.",
        intro: "Need to include a GIF in a report or presentation document? Our GIF to PDF converter transforms your animated or static GIF files into high-quality PDF documents. It captures the image data while preserving clarity.",
        sections: [
            {
                id: "how-it-works",
                title: "How It Works",
                content: (
                    <div className="space-y-4">
                        <p>Our tool runs directly in your browser. Whether you have a static GIF or an animated one, we convert the image data into a standard PDF page.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Instant Conversion:</strong> No waiting for uploads.</li>
                            <li><strong>Private Processing:</strong> Your files never leave your device.</li>
                            <li><strong>Universal Compatibility:</strong> Works on all devices.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "How to Convert GIF to PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Upload GIF:</strong> Drag and drop your .gif file into the tool.</li>
                        <li><strong>Processing:</strong> The tool automatically reads the image data.</li>
                        <li><strong>Download:</strong> Your PDF is ready instantly.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Does it support animated GIFs?",
                a: "Yes, it captures the primary frame of the GIF. Since PDFs are static documents, it creates a static representation of your GIF."
            },
            {
                q: "Is it free?",
                a: "Yes, this tool is completely free and unlimited."
            },
            {
                q: "Is my data secure?",
                a: "Absolutely. The conversion happens entirely in your browser. No image data is ever sent to a server."
            }
        ],
        cta: "Start Converting",
        ctaBtn: "Convert GIF to PDF",
        quickAnswer: {
            question: "How to convert GIF to PDF?",
            answer: "Use the GIF to PDF tool on pdfcanada.ca. It securely converts your animated or static GIFs into PDF documents directly in your browser.",
            tool: "GIF to PDF",
            steps: ["Upload GIF", "Process", "Download PDF"]
        }
    },
    fr: {
        seo: {
            title: `Convertisseur GIF en PDF | Convertir GIFs Animés et Statiques ${CURRENT_YEAR}`,
            desc: `Outil gratuit pour convertir des images GIF en PDF. Supporte les GIFs statiques et animés. Rapide, sécurisé et local.`
        },
        h1: "Convertir GIF en PDF",
        subtitle: "Transformez vos images GIF en documents PDF professionnels instantanément.",
        intro: "Besoin d'inclure un GIF dans un rapport ? Notre convertisseur GIF en PDF transforme vos fichiers GIF en documents PDF de haute qualité.",
        sections: [
            {
                id: "how-it-works",
                title: "Comment ça marche",
                content: (
                    <div className="space-y-4">
                        <p>Notre outil fonctionne directement dans votre navigateur. Que vous ayez un GIF statique ou animé, nous convertissons les données d'image en une page PDF standard.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Fonctionnalités Clés :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Conversion Instantanée :</strong> Pas d'attente.</li>
                            <li><strong>Traitement Privé :</strong> Vos fichiers ne quittent jamais votre appareil.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Comment Convertir GIF en PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Téléverser GIF :</strong> Glissez-déposez votre fichier .gif.</li>
                        <li><strong>Traitement :</strong> L'outil lit automatiquement les données de l'image.</li>
                        <li><strong>Télécharger :</strong> Votre PDF est prêt instantanément.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Supporte-t-il les GIFs animés ?",
                a: "Oui, il capture l'image principale du GIF. Comme les PDF sont statiques, il crée une représentation statique."
            },
            {
                q: "Est-ce gratuit ?",
                a: "Oui, cet outil est complètement gratuit et illimité."
            },
            {
                q: "Mes données sont-elles sécurisées ?",
                a: "Absolument. La conversion se fait entièrement dans votre navigateur. Aucune donnée d'image n'est jamais envoyée à un serveur."
            }
        ],
        cta: "Commencer la Conversion",
        ctaBtn: "Convertir GIF scan en PDF",
        quickAnswer: {
            question: "Comment convertir un GIF en PDF ?",
            answer: "Utilisez l'outil GIF en PDF de pdfcanada.ca. Il convertit en toute sécurité vos GIFs animés ou statiques en documents PDF directement dans votre navigateur.",
            tool: "GIF en PDF",
            steps: ["Téléverser GIF", "Traitement", "Télécharger PDF"]
        }
    },
    pt: {
        seo: {
            title: `Conversor GIF para PDF | Converter GIFs Animados e Estáticos ${CURRENT_YEAR}`,
            desc: `Ferramenta online gratuita para converter imagens GIF para PDF. Suporta GIFs estáticos e animados. Rápido, seguro e local.`
        },
        h1: "Converter GIF para PDF",
        subtitle: "Transforme suas imagens GIF em documentos PDF profissionais instantaneamente.",
        intro: "Precisa incluir um GIF em um relatório ou apresentação? Nosso conversor GIF para PDF transforma seus arquivos GIF animados ou estáticos em documentos PDF de alta qualidade. Ele captura os dados da imagem preservando a clareza.",
        sections: [
            {
                id: "how-it-works",
                title: "Como Funciona",
                content: (
                    <div className="space-y-4">
                        <p>Nossa ferramenta roda diretamente no seu navegador. Se você tem um GIF estático ou animado, convertemos os dados da imagem em uma página PDF padrão.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Principais Recursos:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Conversão Instantânea:</strong> Sem espera por uploads.</li>
                            <li><strong>Processamento Privado:</strong> Seus arquivos nunca saem do seu dispositivo.</li>
                            <li><strong>Compatibilidade Universal:</strong> Funciona em todos os dispositivos.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Como Converter GIF para PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Enviar GIF:</strong> Arraste e solte seu arquivo .gif na ferramenta.</li>
                        <li><strong>Processamento:</strong> A ferramenta lê automaticamente os dados da imagem.</li>
                        <li><strong>Baixar:</strong> Seu PDF está pronto instantaneamente.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Suporta GIFs animados?",
                a: "Sim, ele captura o quadro principal do GIF. Como os PDFs são documentos estáticos, ele cria uma representação estática do seu GIF."
            },
            {
                q: "É gratuito?",
                a: "Sim, esta ferramenta é completamente gratuita e ilimitada."
            },
            {
                q: "Meus dados estão seguros?",
                a: "Absolutamente. A conversão acontece inteiramente no seu navegador. Nenhuma imagem é enviada para um servidor."
            }
        ],
        cta: "Começar a Converter",
        ctaBtn: "Converter GIF para PDF",
        quickAnswer: {
            question: "Como converter GIF para PDF?",
            answer: "Use a ferramenta GIF para PDF no pdfcanada.ca. Ela converte com segurança seus GIFs animados ou estáticos em documentos PDF diretamente no seu navegador.",
            tool: "GIF para PDF",
            steps: ["Enviar GIF", "Processar", "Baixar PDF"]
        }
    }
});

export const GifToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "applicationCategory": "MultimediaApplication",
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
            icon={<FileImage size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'en' ? '/' : "/${lang}" },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'GIF em PDF' : 'GIF to PDF', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/gif-to-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl mb-12 border border-slate-200 dark:border-slate-800">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                        <div className="space-y-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-bold mb-2">{item.q}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}/gif-to-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/gif-to-pdf" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
