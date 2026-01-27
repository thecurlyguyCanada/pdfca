'use client';

import Link from 'next/link';
import React from 'react';
import { FileCode, Shield, Zap, CheckCircle } from 'lucide-react';
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
            title: `ASPX to PDF Converter | Print Source Code ${CURRENT_YEAR}`,
            desc: `Convert ASP.NET (ASPX) source files to printable PDF documentation. Clean code formatting, 100% private and secure.`
        },
        h1: "Convert ASPX to PDF",
        subtitle: "Create readable documentation from your source code files.",
        intro: "Need to document your ASP.NET project or print your code for review? Our ASPX to PDF tool converts code files into clean, monospace-formatted PDF documents perfect for reading and archiving.",
        sections: [
            {
                id: "how-it-works",
                title: "How It Works",
                content: (
                    <div className="space-y-4">
                        <p>The tool reads your text-based .aspx source files and formats them onto PDF pages using a code-friendly font (Courier). It wraps long lines and paginates your code automatically.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Clean Formatting:</strong> Preserves indentation and structure.</li>
                            <li><strong>Secure:</strong> Code is processed locally, never sent to a server.</li>
                            <li><strong>Fast Documentation:</strong> Turn codebases into PDFs in seconds.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "How to Convert ASPX to PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Select File:</strong> Choose your .aspx file.</li>
                        <li><strong>Convert:</strong> The tool generates a PDF version of your code.</li>
                        <li><strong>Save:</strong> Download the documentation.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Does this execute the ASPX code?",
                a: "No. This tool converts the *source code text* into a PDF document. It does not run or render the web application."
            },
            {
                q: "Can I convert other code files?",
                a: "Yes, you can upload other text-based code files if they are supported by the file picker, or rename them."
            },
            {
                q: "Is my code secure?",
                a: "Absolutely. The conversion happens entirely in your browser using WebAssembly. Your proprietary code never leaves your computer."
            }
        ],
        cta: "Archive Your Code",
        ctaBtn: "Convert ASPX to PDF",
        quickAnswer: {
            question: "How to convert ASPX code to PDF?",
            answer: "Use the secure ASPX to PDF tool on pdfcanada.ca. It formats your source code into a printable PDF locally in your browser.",
            tool: "ASPX to PDF",
            steps: ["Upload ASPX", "Process Locally", "Download PDF"]
        }
    },
    fr: {
        seo: {
            title: `Convertisseur ASPX en PDF | Imprimer Code Source ${CURRENT_YEAR}`,
            desc: `Convertissez des fichiers sources ASP.NET (ASPX) en documentation PDF imprimable. Formatage de code propre, 100% privé.`
        },
        h1: "Convertir ASPX en PDF",
        subtitle: "Créez une documentation lisible à partir de vos fichiers source.",
        intro: "Besoin de documenter votre projet ASP.NET ? Notre outil ASPX en PDF convertit vos fichiers de code en documents PDF propres et formatés avec une police à chasse fixe, parfaits pour l'archivage.",
        sections: [
            {
                id: "how-it-works",
                title: "Comment ça marche",
                content: (
                    <div className="space-y-4">
                        <p>L'outil lit vos fichiers source .aspx et les formate sur des pages PDF en utilisant une police adaptée au code. Il gère les sauts de ligne et la pagination automatiquement.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Avantages :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Formatage Propre :</strong> Préserve l'indentation et la structure.</li>
                            <li><strong>Sécurisé :</strong> Le code est traité localement, jamais envoyé à un serveur.</li>
                            <li><strong>Documentation Rapide :</strong> Transformez des bases de code en PDF en quelques secondes.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Comment Convertir ASPX en PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Sélectionner :</strong> Choisissez votre fichier .aspx.</li>
                        <li><strong>Convertir :</strong> L'outil génère une version PDF de votre code.</li>
                        <li><strong>Sauvegarder :</strong> Téléchargez la documentation.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Est-ce que cela exécute le code ASPX ?",
                a: "Non. Cet outil convertit le *texte du code source* en document PDF. Il n'exécute pas l'application web."
            },
            {
                q: "Puis-je convertir d'autres fichiers ?",
                a: "Oui, la plupart des fichiers de code texte fonctionnent correctement."
            },
            {
                q: "Mon code est-il sécurisé ?",
                a: "Absolument. La conversion se fait entièrement dans votre navigateur via WebAssembly. Votre code propriétaire ne quitte jamais votre ordinateur."
            }
        ],
        cta: "Archiver Votre Code",
        ctaBtn: "Convertir ASPX en PDF",
        quickAnswer: {
            question: "Comment convertir du code ASPX en PDF ?",
            answer: "Utilisez l'outil sécurisé ASPX en PDF de pdfcanada.ca. Il formate votre code source en un PDF imprimable localement dans votre navigateur.",
            tool: "ASPX en PDF",
            steps: ["Téléverser ASPX", "Traitement Local", "Télécharger PDF"]
        }
    },
    pt: {
        seo: {
            title: `Conversor ASPX para PDF | Imprimir Código Fonte ${CURRENT_YEAR}`,
            desc: `Converta arquivos fonte ASP.NET (ASPX) em documentação PDF imprimível. Formatação de código limpa, 100% privado e seguro.`
        },
        h1: "Converter ASPX para PDF",
        subtitle: "Crie documentação legível a partir de seus arquivos de código.",
        intro: "Precisa documentar seu projeto ASP.NET ou imprimir seu código para revisão? Nossa ferramenta ASPX para PDF converte arquivos de código em documentos PDF limpos e formatados em monoespaço, perfeitos para leitura e arquivamento.",
        sections: [
            {
                id: "how-it-works",
                title: "Como Funciona",
                content: (
                    <div className="space-y-4">
                        <p>A ferramenta lê seus arquivos fonte .aspx baseados em texto e os formata em páginas PDF usando uma fonte amigável para código (Courier). Ela quebra linhas longas e pagina seu código automaticamente.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Benefícios:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Formatação Limpa:</strong> Preserva indentação e estrutura.</li>
                            <li><strong>Seguro:</strong> O código é processado localmente, nunca enviado a um servidor.</li>
                            <li><strong>Documentação Rápida:</strong> Transforme bases de código em PDFs em segundos.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "steps",
                title: "Como Converter ASPX para PDF",
                content: (
                    <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Selecionar Arquivo:</strong> Escolha seu arquivo .aspx.</li>
                        <li><strong>Converter:</strong> A ferramenta gera uma versão PDF do seu código.</li>
                        <li><strong>Salvar:</strong> Baixe a documentação.</li>
                    </ol>
                )
            }
        ],
        faq: [
            {
                q: "Isso executa o código ASPX?",
                a: "Não. Esta ferramenta converte o *texto do código fonte* em um documento PDF. Ela não executa nem renderiza a aplicação web."
            },
            {
                q: "Posso converter outros arquivos de código?",
                a: "Sim, você pode enviar outros arquivos de código baseados em texto se forem suportados, ou renomeá-los."
            },
            {
                q: "Meu código está seguro?",
                a: "Absolutamente. A conversão acontece inteiramente no seu navegador usando WebAssembly. Seu código proprietário nunca sai do seu computador."
            }
        ],
        cta: "Arquivar Seu Código",
        ctaBtn: "Converter ASPX para PDF",
        quickAnswer: {
            question: "Como converter código ASPX para PDF?",
            answer: "Use a ferramenta segura ASPX para PDF no pdfcanada.ca. Ela formata seu código fonte em um PDF imprimível localmente no seu navegador.",
            tool: "ASPX para PDF",
            steps: ["Enviar ASPX", "Processamento Local", "Baixar PDF"]
        }
    }
});

export const AspxToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
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
                { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides/ultimate-pdf-guide` },
                { name: lang === 'fr' ? 'ASPX en PDF' : (lang === 'pt' ? 'ASPX para PDF' : 'ASPX to PDF'), href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/aspx-to-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <ToolPromo tool="aspx-to-pdf" lang={lang} />
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
                    <Link href={`/${lang}/aspx-to-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/aspx-to-pdf" category="convert" />
                </div>

                <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href={`/${lang}/html-to-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Zap size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'Guide HTML vers PDF' : (lang === 'pt' ? 'Guia HTML para PDF' : 'HTML to PDF Guide')}
                        </Link>
                        <Link href={`/${lang}/xml-to-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <FileCode size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'Guide XML vers PDF' : (lang === 'pt' ? 'Guia XML para PDF' : 'XML to PDF Guide')}
                        </Link>
                        <Link href={`/${lang}/compress-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Zap size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'Guide Compresser PDF' : (lang === 'pt' ? 'Guia Comprimir PDF' : 'Compress PDF Guide')}
                        </Link>
                        <Link href={`/${lang}/merge-pdf-guide`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Zap size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Mesclar PDF' : 'Merge PDF Guide')}
                        </Link>
                    </div>
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
