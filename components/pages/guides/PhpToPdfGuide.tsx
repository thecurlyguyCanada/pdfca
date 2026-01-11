'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Globe, Server, Shield, Zap, Info, ArrowRight, Code } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { RelatedTools } from '../../RelatedTools';
import { AuthorBio } from '../../AuthorBio';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `Convert PHP to PDF | Archive Source Code ${CURRENT_YEAR}`,
            desc: `Convert PHP source code to PDF for documentation. Clean syntax formatting for print and archival. 100% private and secure.`
        },
        h1: "Convert PHP to PDF",
        subtitle: "Create professional documentation from your PHP source code.",
        intro: "Need to print your PHP code for a code review, documentation, or physical backup? Our PHP to PDF converter transforms your raw .php files into clean, readable PDF documents with proper formatting.",
        sections: [
            {
                id: "how-it-works",
                title: "How It Works",
                content: (
                    <div className="space-y-4">
                        <p>This tool reads your PHP source code files and renders them onto PDF pages using a monospaced font. It preserves your line breaks and indentation, making it perfect for reading code offline.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Why convert PHP to PDF?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Code Reviews:</strong> Annotate physical copies of your code.</li>
                            <li><strong>Documentation:</strong> Attach source code appendices to technical reports.</li>
                            <li><strong>Archival:</strong> Create a long-term, unchangeable record of your project state.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "How to Convert PHP to PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Upload PHP File:</strong> Drag and drop your .php file into the tool.</li>
                        <li><strong>Processing:</strong> The tool formats your code text.</li>
                        <li><strong>Download:</strong> Your PDF documentation is ready instantly.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Does this execute the PHP code?",
                a: "No. This tool treats your PHP file as text. It converts the *source code* itself to PDF, it does not run the script or render the output."
            },
            {
                q: "Is my code secure?",
                a: "Yes. The conversion happens entirely in your browser. Your source code is never uploaded to any server."
            },
            {
                q: "What fonts are used?",
                a: "We use a standard monospaced font (like Courier or JetBrains Mono) to ensure code alignment is perfectly preserved."
            }
        ],
        ctaTitle: "Document Your Code",
        ctaBtn: "Convert PHP to PDF",
        quickAnswer: {
            question: "How to convert PHP file to PDF?",
            answer: "Use the PHP to PDF tool on pdfcanada.ca to convert your source code into PDF documentation locally in your browser.",
            tool: "PHP to PDF",
            steps: ["Upload .php", "Process", "Download PDF"]
        }
    },
    fr: {
        seo: {
            title: `Convertir PHP en PDF | Archiver Code Source ${CURRENT_YEAR}`,
            desc: `Convertissez le code source PHP en PDF pour la documentation. Formatage propre pour impression et archivage. 100% privé.`
        },
        h1: "Convertir PHP en PDF",
        subtitle: "Créez une documentation professionnelle à partir de votre code PHP.",
        intro: "Besoin d'imprimer votre code PHP pour une revue ou une documentation ? Notre convertisseur PHP en PDF transforme vos fichiers .php bruts en documents PDF lisibles.",
        sections: [
            {
                id: "how-it-works",
                title: "Comment ça marche",
                content: (
                    <div className="space-y-4">
                        <p>Cet outil lit vos fichiers source PHP et les affiche sur des pages PDF avec une police à chasse fixe. Il préserve vos sauts de ligne et votre indentation.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Pourquoi convertir PHP en PDF ?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Revues de Code :</strong> Annotez des copies physiques.</li>
                            <li><strong>Documentation :</strong> Ajoutez des annexes de code aux rapports.</li>
                            <li><strong>Archivage :</strong> Créez un enregistrement immuable de votre projet.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Comment Convertir PHP en PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Téléverser :</strong> Glissez-déposez votre fichier .php.</li>
                        <li><strong>Traitement :</strong> L'outil formate votre texte.</li>
                        <li><strong>Télécharger :</strong> Votre documentation PDF est prête.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Est-ce que cela exécute le code PHP ?",
                a: "Non. Cet outil traite votre fichier PHP comme du texte. Il convertit le *code source* en PDF, il n'exécute pas le script."
            },
            {
                q: "Mon code est-il sécurisé ?",
                a: "Oui. La conversion se fait entièrement dans votre navigateur. Votre code source n'est jamais envoyé sur un serveur."
            },
            {
                q: "Quelles polices sont utilisées ?",
                a: "Nous utilisons une police à chasse fixe standard pour garantir que l'alignement du code est parfaitement préservé."
            }
        ],
        ctaTitle: "Documenter Votre Code",
        ctaBtn: "Convertir PHP en PDF",
        quickAnswer: {
            question: "Comment convertir un fichier PHP en PDF ?",
            answer: "Utilisez l'outil PHP en PDF de pdfcanada.ca pour convertir votre code source en documentation PDF.",
            tool: "PHP en PDF",
            steps: ["Téléverser PHP", "Traitement", "Télécharger PDF"]
        }
    },
    pt: {
        seo: {
            title: `Converter PHP para PDF | Arquivar Código Fonte ${CURRENT_YEAR}`,
            desc: `Converta código fonte PHP para PDF para documentação. Formatação de sintaxe limpa para impressão e arquivamento. 100% privado e seguro.`
        },
        h1: "Converter PHP para PDF",
        subtitle: "Crie documentação profissional a partir do seu código fonte PHP.",
        intro: "Precisa imprimir seu código PHP para uma revisão de código, documentação ou backup físico? Nosso conversor PHP para PDF transforma seus arquivos .php brutos em documentos PDF limpos e legíveis com formatação adequada.",
        sections: [
            {
                id: "how-it-works",
                title: "Como Funciona",
                content: (
                    <div className="space-y-4">
                        <p>Esta ferramenta lê seus arquivos de código fonte PHP e os renderiza em páginas PDF usando uma fonte monoespaçada. Ela preserva suas quebras de linha e indentação, tornando-o perfeito para ler código offline.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Por que converter PHP para PDF?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Revisões de Código:</strong> Anote cópias físicas do seu código.</li>
                            <li><strong>Documentação:</strong> Anexe apêndices de código fonte a relatórios técnicos.</li>
                            <li><strong>Arquivamento:</strong> Crie um registro de longo prazo e imutável do estado do seu projeto.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Como Converter PHP para PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Enviar Arquivo PHP:</strong> Arraste e solte seu arquivo .php na ferramenta.</li>
                        <li><strong>Processamento:</strong> A ferramenta formata o texto do seu código.</li>
                        <li><strong>Baixar:</strong> Sua documentação em PDF está pronta instantaneamente.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Isso executa o código PHP?",
                a: "Não. Esta ferramenta trata seu arquivo PHP como texto. Ela converte o *código fonte* em si para PDF, não executa o script nem renderiza a saída."
            },
            {
                q: "Meu código está seguro?",
                a: "Sim. A conversão acontece inteiramente no seu navegador. Seu código fonte nunca é enviado para nenhum servidor."
            },
            {
                q: "Quais fontes são usadas?",
                a: "Usamos uma fonte monoespaçada padrão (como Courier ou JetBrains Mono) para garantir que o alinhamento do código seja perfeitamente preservado."
            }
        ],
        ctaTitle: "Documente Seu Código",
        ctaBtn: "Converter PHP para PDF",
        quickAnswer: {
            question: "Como converter arquivo PHP para PDF?",
            answer: "Use a ferramenta PHP para PDF no pdfcanada.ca para converter seu código fonte em documentação PDF localmente no seu navegador.",
            tool: "PHP para PDF",
            steps: ["Enviar .php", "Processar", "Baixar PDF"]
        }
    }
});

export const PhpToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "applicationCategory": "DeveloperTool",
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
            icon={<FileCode size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                { name: lang === 'fr' ? 'Guide PHP vers PDF' : lang === 'pt' ? 'Guia PHP para PDF' : 'PHP to PDF Guide', href: '#' }]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/php-to-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <ToolPromo tool="php-to-pdf" lang={lang} />
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
                        <div className="flex items-center gap-3 mb-8">
                            <Info className="w-8 h-8 text-blue-500" />
                            <h2 className="text-3xl font-bold dark:text-white">FAQ</h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h4 className="font-bold mb-2">{item.q}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <Code size={120} />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 relative z-10">{t.ctaTitle}</h3>
                    <Link href={`/${lang}/php-to-pdf`} className="inline-flex items-center gap-2 bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white relative z-10">
                        {t.ctaBtn} <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/php-to-pdf" category="advanced" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
