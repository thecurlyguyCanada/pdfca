'use client';

import Link from 'next/link';
import React from 'react';
import {
    Shield,
    Lock,
    Search,
    Eye,
    AlertTriangle,
    FileText,
    CheckCircle2
} from 'lucide-react';
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

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Analyze PDF Security & Detect Phishing | Free & Local ${CURRENT_YEAR}`,
            desc: `Safely analyze suspicious PDF attachments for phishing links, malware, and hidden scripts. 100% local processing protects your privacy.`
        },
        h1: `How to Safely Check PDF Security (${CURRENT_YEAR} Guide)`,
        subtitle: "The complete guide to detecting malicious PDFs, phishing attempts, and hidden scripts without risking your device.",

        intro: (
            <>
                <div className="flex items-center gap-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                    <Shield className="text-blue-600 shrink-0" size={32} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        &quot;Opening a PDF attachment can trigger malware instantly. Our tool analyzes the file structure safely inside your browser, so you never have to execute the code.&quot;
                    </p>
                </div>
                Cybercriminals often use <strong>PDF attachments</strong> to deliver malware or trick users into clicking phishing links. A seemingly innocent invoice or receipt can contain embedded <strong>JavaScript</strong> or auto-launch actions that compromise your computer.
                <br /><br />
                At <strong>pdfcanada.ca</strong>, we’ve developed a <strong>Local Security Analyzer</strong>. In this guide, we'll explain how to inspect suspicious PDFs for threats like hidden scripts, external IP connections, and malicious launch actions without ever opening them in Adobe Reader.
            </>
        ),

        sections: [
            {
                id: "how-to-scan",
                title: "How to Scan a PDF for Malware (Safely)",
                content: (
                    <div className="space-y-4">
                        <p>Follow these steps to analyze a suspicious file without executing its payload:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Open the Analyzer:</strong> Go to the <Link href={`/${lang}/analyze-pdf`} className="text-canada-red hover:underline font-bold">PDF Security Analyzer</Link>.
                            </li>
                            <li>
                                <strong>Drop the File:</strong> Drag and drop the suspicious PDF. Because we use <strong>WebAssembly</strong>, the file is parsed locally. It is NEVER uploaded to any server.
                            </li>
                            <li>
                                <strong>Review the Report:</strong> Look at the <strong>Risk Score</strong>. We flag high-risk elements like <code>/JS</code> (JavaScript), <code>/Launch</code> (External Programs), and <code>/URI</code> (Links).
                            </li>
                            <li>
                                <strong>Use Safe Preview:</strong> Switch to the &quot;Safe Preview&quot; tab to read the document content. This renders the PDF as a static image, effectively neutralizing any click-jacking or auto-execution scripts.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "risk-factors",
                title: "Common PDF Threats We Detect",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2"><AlertTriangle size={18} /> Embedded JavaScript</h4>
                            <p className="text-sm text-red-800">Attackers embed scripts that run as soon as the PDF opens. These can download viruses or steal cookies.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                            <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2"><Lock size={18} /> Launch Actions</h4>
                            <p className="text-sm text-orange-800">Commands that try to open external programs like PowerShell or Command Prompt to hijack your system.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-100">
                            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2"><Eye size={18} /> Phishing Links</h4>
                            <p className="text-sm text-yellow-800">Links that look like legitimate login pages but send your credentials to hackers. We inspect the actual URL destination.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><FileText size={18} /> Hidden Objects</h4>
                            <p className="text-sm text-gray-800">Malicious payloads hidden in non-standard PDF objects or streams to evade antivirus signatures.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "privacy-guarantee",
                title: "Why Local Analysis is Safer",
                content: (
                    <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 border-l-8 border-green-500">
                        <p className="text-gray-300 leading-relaxed">
                            Uploading a suspicious file to an online scanner can be risky if the file contains sensitive corporate data. Our tool runs strictly in your browser sandbox. <strong>The PDF never leaves your computer.</strong> This allows you to inspect potential threats in confidential documents without violating data privacy policies.
                        </p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Can this tool simplify a PDF to remove viruses?",
                a: "You can use our 'Flatten PDF' tool after inspection to convert the document into pure images, effectively stripping out any active scripts or malware code."
            },
            {
                q: "Does this replace my antivirus?",
                a: "No. This tool is for behavioral analysis and inspection. It helps you decide if a file is safe to open. You should always keep your system antivirus updated."
            },
            {
                q: "What does 'Safe Preview' mean?",
                a: "Safe Preview renders the PDF pages as static canvas images using strict settings that disable all script execution. It allows you to read the text without triggering any hidden code."
            }
        ],

        ctaTitle: "Unsure about that attachment?",
        ctaButton: "Scan PDF Now",
        ctaSubtext: "Free, Private, and Secure. 🛡️"
    },
    fr: {
        seo: {
            title: `Analyser la Sécurité PDF et Détecter l'Hameçonnage | Gratuit ${CURRENT_YEAR}`,
            desc: `Analysez en toute sécurité les pièces jointes PDF suspectes pour détecter les liens d'hameçonnage et les scripts cachés. Traitement 100% local.`
        },
        h1: `Comment Vérifier la Sécurité d'un PDF (Guide ${CURRENT_YEAR})`,
        subtitle: "Le guide complet pour détecter les PDF malveillants et les tentatives d'hameçonnage sans risquer votre appareil.",

        intro: (
            <>
                <div className="flex items-center gap-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                    <Shield className="text-blue-600 shrink-0" size={32} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        &quot;Ouvrir une pièce jointe PDF peut déclencher un malware instantanément. Notre outil analyse le fichier en toute sécurité dans votre navigateur.&quot;
                    </p>
                </div>
                Les cybercriminels utilisent souvent des <strong>pièces jointes PDF</strong> pour diffuser des malwares. Une facture ou un reçu apparemment innocent peut contenir du <strong>JavaScript</strong> intégré qui compromet votre ordinateur.
                <br /><br />
                Chez <strong>pdfcanada.ca</strong>, nous avons développé un <strong>Analyseur de Sécurité Local</strong>. Ce guide explique comment inspecter les PDF suspects sans jamais les ouvrir dans Adobe Reader.
            </>
        ),

        sections: [
            {
                id: "how-to-scan",
                title: "Comment scanner un PDF pour détecter les malwares",
                content: (
                    <div className="space-y-4">
                        <p>Suivez ces étapes pour analyser un fichier suspect sans exécuter sa charge utile :</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Ouvrez l'Analyseur :</strong> Allez sur l'<Link href={`/${lang}/analyze-pdf`} className="text-canada-red hover:underline font-bold">Analyseur de Sécurité PDF</Link>.
                            </li>
                            <li>
                                <strong>Déposez le fichier :</strong> Glissez et déposez le PDF suspect. Grâce à <strong>WebAssembly</strong>, le fichier est analysé localement. Il n'est JAMAIS téléversé.
                            </li>
                            <li>
                                <strong>Examinez le rapport :</strong> Regardez le <strong>Score de Risque</strong>. Nous signalons les éléments à haut risque comme <code>/JS</code> (JavaScript) et <code>/Launch</code>.
                            </li>
                            <li>
                                <strong>Utilisez l'Aperçu Sécurisé :</strong> Basculez sur l'onglet "Aperçu Sécurisé" pour lire le contenu. Cela rend le PDF comme une image statique, neutralisant tout script d'auto-exécution.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "risk-factors",
                title: "Menaces PDF courantes que nous détectons",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2"><AlertTriangle size={18} /> JavaScript Intégré</h4>
                            <p className="text-sm text-red-800">Les attaquants intègrent des scripts qui s'exécutent dès l'ouverture du PDF pour télécharger des virus.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                            <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2"><Lock size={18} /> Actions de Lancement</h4>
                            <p className="text-sm text-orange-800">Commandes qui tentent d'ouvrir des programmes externes comme PowerShell pour pirater votre système.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "privacy-guarantee",
                title: "Pourquoi l'analyse locale est plus sûre",
                content: (
                    <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 border-l-8 border-green-500">
                        <p className="text-gray-300 leading-relaxed">
                            Téléverser un fichier suspect sur un scanner en ligne peut être risqué si le fichier contient des données confidentielles. Notre outil fonctionne strictement dans votre navigateur. <strong>Le PDF ne quitte jamais votre ordinateur.</strong>
                        </p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Cet outil remplace-t-il mon antivirus ?",
                a: "Non. Cet outil est destiné à l'analyse comportementale et à l'inspection. Vous devez toujours garder votre antivirus système à jour."
            },
            {
                q: "Qu'est-ce que l'Aperçu Sécurisé ?",
                a: "L'Aperçu Sécurisé rend les pages PDF sous forme d'images statiques en désactivant toute exécution de script. Cela vous permet de lire le texte sans danger."
            }
        ],

        ctaTitle: "Doute sur une pièce jointe ?",
        ctaButton: "Scanner le PDF",
        ctaSubtext: "Gratuit, Privé et Sécurisé. 🛡️"
    }
});

export const PhishingPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": t.h1,
        "operatingSystem": "All",
        "applicationCategory": "SecurityApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CAD"
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/analyze-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment vérifier si un PDF est sûr ?" : lang === 'pt' ? "Como verificar se um PDF é seguro?" : "How to check if a PDF is safe?",
                    answer: lang === 'fr'
                        ? "Utilisez l'analyseur local de pdfcanada.ca. Il scanne la structure du fichier pour détecter les scripts malveillants sans les exécuter."
                        : lang === 'pt'
                            ? "Use o analisador local da pdfcanada.ca. Ele escaneia a estrutura do arquivo em busca de scripts maliciosos sem executá-los."
                            : "Use pdfcanada.ca's local analyzer. It scans the file structure for malicious scripts without executing them.",
                    tool: lang === 'pt' ? "Analisador de Segurança PDF" : "PDF Security Analyzer",
                    steps: lang === 'fr'
                        ? ["Importez le PDF", "Vérifiez le score", "Utilisez l'Aperçu Sécurisé"]
                        : lang === 'pt'
                            ? ["Envie o PDF", "Verifique a Pontuação", "Use Visualização Segura"]
                            : ["Upload PDF", "Check Score", "Use Safe Preview"],
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', path: lang === 'fr' ? '/fr' : '/pt' },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Analyse Sécurité' : lang === 'pt' ? 'Análise Segurança' : 'Security Analysis', path: lang === 'fr' ? '/fr/guides/analyze-pdf' : lang === 'pt' ? '/pt/guides/analyze-pdf' : '/guides/analyze-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Shield size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'fr' ? '/fr' : '/pt' },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Analyse PDF' : lang === 'pt' ? 'Analisar PDF' : 'Analyze PDF', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 sm:mb-14 md:mb-16">
                        {typeof t.intro === 'string' ? <MarkdownContent content={t.intro} /> : t.intro}
                    </div>

                    {/* Stats/Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-18 md:mb-20">
                        <div className="p-6 sm:p-8 bg-green-50 dark:bg-green-900/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-green-100 dark:border-green-800 shadow-sm">
                            <CheckCircle2 className="text-green-600 mb-3 sm:mb-4" size={28} />
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{lang === 'fr' ? "Sans Exécution" : lang === 'pt' ? "Sem Execução" : "No Execution"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Analyse statique de la structure du fichier." : lang === 'pt' ? "Análise estática da estrutura do arquivo." : "Static analysis of file structure."}</p>
                        </div>
                        <div className="p-6 sm:p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-blue-100 dark:border-blue-800 shadow-sm">
                            <Lock className="text-blue-600 mb-3 sm:mb-4" size={28} />
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{lang === 'fr' ? "Vie Privée" : lang === 'pt' ? "Privacidade Total" : "Total Privacy"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Le fichier ne quitte jamais votre appareil." : lang === 'pt' ? "O arquivo nunca sai do seu dispositivo." : "File never leaves your device."}</p>
                        </div>
                        <div className="p-6 sm:p-8 bg-red-50 dark:bg-red-900/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-red-100 dark:border-red-800 shadow-sm">
                            <Eye className="text-canada-red mb-3 sm:mb-4" size={28} />
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{lang === 'fr' ? "Aperçu Sécurisé" : lang === 'pt' ? "Visualização Segura" : "Safe Preview"}</h3>
                            <p className="text-sm text-gray-500">{lang === 'fr' ? "Visualisez le contenu sans scripts." : lang === 'pt' ? "Visualize conteúdo sem scripts." : "View content with scripts disabled."}</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
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

                    {/* Interactive Snapshot */}
                    <AISnapshot
                        question={lang === 'fr' ? "Comment scanner un fichier PDF ?" : lang === 'pt' ? "Como escanear um arquivo PDF?" : "How to scan a PDF file?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'analyseur sur pdfcanada.ca. Il décompose la structure interne du PDF pour trouver les menaces cachées."
                            : lang === 'pt'
                                ? "Use o analisador em pdfcanada.ca. Ele decompõe a estrutura interna do PDF para encontrar ameaças ocultas."
                                : "Use the analyzer on pdfcanada.ca. It parses the internal PDF structure to find hidden threats."}
                        toolName="Security Analyzer"
                        steps={lang === 'fr'
                            ? ["Ouvrez l'outil", "Importez le PDF", "Vérifiez les liens"]
                            : lang === 'pt'
                                ? ["Abra a Ferramenta", "Importe PDF", "Verifique Links"]
                                : ["Open Tool", "Import PDF", "Check Links"]}
                        lang={lang}
                    />

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                            <Search className="text-canada-red" size={28} />
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">FAQ</h2>
                        </div>
                        <div className="grid gap-4 sm:gap-5 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-canada-red/30 transition-colors">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white group-hover:text-canada-red transition-colors">
                                        {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/analyze-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <RelatedTools lang={lang} currentPath="/guides/analyze-pdf" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
