'use client';

import Link from 'next/link';
import React from 'react';
import { GraduationCap, BookOpen, Upload, Layers, CheckCircle } from 'lucide-react';
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
            title: `How to Use Google Classroom as a Student (PDF Guide) ${CURRENT_YEAR}`,
            desc: `Complete student guide for Google Classroom. Learn how to join classes, submit assignments, and manage PDF homework efficiently.`
        },
        h1: "How to Use Google Classroom as a Student",
        subtitle: "A complete guide to digital learning, assignments, and PDF management.",
        intro: "Google Classroom is the central hub for your digital learning. Whether you're attending school remotely or just managing your homework online, mastering this platform is essential. This guide covers everything from joining a class to submitting your first assignment, with a special focus on handling PDF documents—a common format for worksheets and readings.",
        sections: [
            {
                id: "getting-started",
                title: "1. Getting Started",
                content: (
                    <div className="space-y-4">
                        <p>To access Google Classroom, you need a Google account (usually provided by your school). Here is how to join your first class:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Go to <strong>classroom.google.com</strong> and sign in.</li>
                            <li>Click the <strong>+</strong> icon in the top right corner.</li>
                            <li>Select <strong>Join class</strong>.</li>
                            <li>Enter the <strong>class code</strong> provided by your teacher and click "Join".</li>
                        </ol>
                    </div>
                )
            },
            {
                id: "navigating",
                title: "2. Navigating the Interface",
                content: (
                    <div className="space-y-4">
                        <p>Once you are in a class, you will see three main tabs at the top:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Stream:</strong> The social feed of the class. Here you see announcements and upcoming deadlines.</li>
                            <li><strong>Classwork:</strong> The most important tab. This is where all your assignments, quizzes, and materials are organized by topic.</li>
                            <li><strong>People:</strong> A list of your teachers and classmates.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "submitting",
                title: "3. Submitting Assignments",
                content: (
                    <div className="space-y-4">
                        <p>Submitting work is the core function of Google Classroom. Follow these steps to ensure your teacher receives your work:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Go to the <strong>Classwork</strong> tab and click on an assignment.</li>
                            <li>Click <strong>View Assignment</strong> to see full details.</li>
                            <li>In the "Your work" section on the right, click <strong>+ Add or create</strong>.</li>
                            <li>Select the file source (Google Drive, Link, or File Upload).</li>
                            <li>Once the file is uploaded, click the <strong>Turn in</strong> button. You may need to confirm by clicking "Turn in" again.</li>
                        </ol>
                        <p className="text-sm text-gray-500 italic">Note: If you don't click "Turn in", your teacher will see the assignment as "Missing" or "Assigned" but not completed.</p>
                    </div>
                )
            },
            {
                id: "pdf-canada-help",
                title: "4. How PDF Canada Tools Can Help You",
                content: (
                    <div className="space-y-4">
                        <p>Students often deal with various file formats. PDF Canada offers free tools that can make your homework workflow much smoother:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Layers size={18} /> Merge Assignments</h4>
                                <p className="text-sm">Took 5 photos of your math homework? Don't upload 5 separate files. Use the <Link href="/merge-pdf" className="text-canada-red hover:underline">Merge PDF</Link> tool to combine them into one clean document.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Upload size={18} /> Compress for Upload</h4>
                                <p className="text-sm">Slow internet? Large files take forever to upload. Use <Link href="/compress-pdf" className="text-canada-red hover:underline">Compress PDF</Link> to shrink your file size without losing quality.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle size={18} /> Convert Images</h4>
                                <p className="text-sm">Teachers prefer PDFs over JPEGs. Use <Link href="/image-to-pdf" className="text-canada-red hover:underline">Image to PDF</Link> to turn your phone snapshots into professional documents.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "handling-pdfs",
                title: "5. Working with PDFs in Classroom",
                content: (
                    <div className="space-y-4">
                        <p>Teachers frequently share worksheets as PDFs. To fill them out:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Preview:</strong> Click the file to open a preview.</li>
                            <li><strong>Open in New Window:</strong> Click the three dots in the top right -&gt; "Open in new window" to download or print.</li>
                            <li><strong>Annotate:</strong> If you are on a mobile device, use the pen icon to write directly on the PDF. On a computer, you might need to download the file and use a tool like our <Link href="/make-pdf-fillable" className="text-canada-red hover:underline">Make PDF Fillable</Link> feature.</li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "How do I unsubmit an assignment?",
                a: "If you made a mistake, go back to the assignment page and click 'Unsubmit'. You can then edit your files and turn it in again."
            },
            {
                q: "Can parents see my Google Classroom?",
                a: "Parents cannot join the class directly, but they can sign up for 'Guardian Summaries' to get email updates about your missing work and upcoming grades."
            },
            {
                q: "Why can't I open a PDF my teacher posted?",
                a: "You might need permission. Ask your teacher to check the sharing settings of the file in their Google Drive."
            }
        ],
        cta: "Master Your Documents",
        ctaBtn: "Try Student PDF Tools",
        quickAnswer: {
            question: "How to use Google Classroom as a student?",
            answer: "Join a class with a code, check the 'Classwork' tab for assignments, upload your work (preferably as a PDF), and click 'Turn in'.",
            tool: "Google Classroom Guide",
            steps: ["Join Class", "Check Classwork", "Upload & Turn In"]
        }
    },
    fr: {
        seo: {
            title: `Comment utiliser Google Classroom en tant qu'élève (Guide PDF) ${CURRENT_YEAR}`,
            desc: `Guide complet pour les élèves sur Google Classroom. Apprenez à rejoindre des cours, soumettre des devoirs et gérer vos PDF.`
        },
        h1: "Comment utiliser Google Classroom en tant qu'élève",
        subtitle: "Un guide complet pour l'apprentissage numérique, les devoirs et la gestion des PDF.",
        intro: "Google Classroom est la plateforme centrale de votre apprentissage numérique. Que vous suiviez des cours à distance ou gériez simplement vos devoirs en ligne, maîtriser cet outil est essentiel. Ce guide couvre tout, de l'inscription à un cours à la remise de votre premier devoir, avec un accent particulier sur la gestion des documents PDF.",
        sections: [
            {
                id: "getting-started",
                title: "1. Commencer",
                content: (
                    <div className="space-y-4">
                        <p>Pour accéder à Google Classroom, vous avez besoin d'un compte Google (généralement fourni par votre école). Voici comment rejoindre votre premier cours :</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Allez sur <strong>classroom.google.com</strong> et connectez-vous.</li>
                            <li>Cliquez sur l'icône <strong>+</strong> en haut à droite.</li>
                            <li>Sélectionnez <strong>Rejoindre un cours</strong>.</li>
                            <li>Entrez le <strong>code du cours</strong> fourni par votre enseignant et cliquez sur "Rejoindre".</li>
                        </ol>
                    </div>
                )
            },
            {
                id: "navigating",
                title: "2. Naviguer dans l'interface",
                content: (
                    <div className="space-y-4">
                        <p>Une fois dans un cours, vous verrez trois onglets principaux en haut :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Flux :</strong> Le fil d'actualité du cours. Vous y voyez les annonces et les échéances à venir.</li>
                            <li><strong>Travaux et devoirs :</strong> L'onglet le plus important. C'est ici que tous vos devoirs, quiz et supports sont organisés par thème.</li>
                            <li><strong>Personnes :</strong> La liste de vos enseignants et camarades de classe.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "submitting",
                title: "3. Soumettre des devoirs",
                content: (
                    <div className="space-y-4">
                        <p>La remise des travaux est la fonction principale. Suivez ces étapes :</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Allez dans l'onglet <strong>Travaux et devoirs</strong> et cliquez sur un devoir.</li>
                            <li>Cliquez sur <strong>Afficher le devoir</strong> pour voir tous les détails.</li>
                            <li>Dans la section "Votre devoir" à droite, cliquez sur <strong>+ Ajouter ou créer</strong>.</li>
                            <li>Sélectionnez la source (Google Drive, Lien ou Fichier).</li>
                            <li>Une fois le fichier téléversé, cliquez sur le bouton <strong>Rendre le devoir</strong>. Confirmez si nécessaire.</li>
                        </ol>
                    </div>
                )
            },
            {
                id: "pdf-canada-help",
                title: "4. Comment les outils PDF Canada peuvent vous aider",
                content: (
                    <div className="space-y-4">
                        <p>Les élèves gèrent souvent divers formats de fichiers. PDF Canada offre des outils gratuits pour faciliter vos devoirs :</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Layers size={18} /> Fusionner les devoirs</h4>
                                <p className="text-sm">Vous avez pris 5 photos de vos devoirs de maths ? Ne téléversez pas 5 fichiers. Utilisez l'outil <Link href="/fr/merge-pdf" className="text-canada-red hover:underline">Fusionner PDF</Link> pour en faire un seul document propre.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Upload size={18} /> Compresser pour l'envoi</h4>
                                <p className="text-sm">Connexion lente ? Utilisez <Link href="/fr/compress-pdf" className="text-canada-red hover:underline">Compresser PDF</Link> pour réduire la taille du fichier sans perdre en qualité.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "handling-pdfs",
                title: "5. Travailler avec des PDF",
                content: (
                    <div className="space-y-4">
                        <p>Les enseignants partagent souvent des feuilles de travail en PDF. Pour les remplir :</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Aperçu :</strong> Cliquez sur le fichier pour voir un aperçu.</li>
                            <li><strong>Ouvrir dans une nouvelle fenêtre :</strong> Cliquez sur les trois points -&gt; "Ouvrir dans une nouvelle fenêtre" pour télécharger.</li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Comment annuler la remise d'un devoir ?",
                a: "Retournez sur la page du devoir et cliquez sur 'Annuler la remise'. Vous pourrez ensuite modifier vos fichiers et les rendre à nouveau."
            },
            {
                q: "Les parents peuvent-ils voir mon Google Classroom ?",
                a: "Les parents ne peuvent pas rejoindre le cours, mais ils peuvent recevoir des récapitulatifs par courriel."
            }
        ],
        cta: "Maîtrisez vos documents",
        ctaBtn: "Outils PDF pour Étudiants",
        quickAnswer: {
            question: "Comment utiliser Google Classroom ?",
            answer: "Rejoignez un cours avec un code, consultez l'onglet 'Travaux et devoirs', téléversez votre travail (de préférence en PDF) et cliquez sur 'Rendre le devoir'.",
            tool: "Guide Google Classroom",
            steps: ["Rejoindre", "Devoirs", "Rendre"]
        }
    },
    pt: {
        seo: {
            title: `Como usar o Google Classroom como aluno (Guia PDF) ${CURRENT_YEAR}`,
            desc: `Guia completo para alunos no Google Classroom. Saiba como participar de turmas, enviar trabalhos e gerenciar PDFs.`
        },
        h1: "Como usar o Google Classroom como aluno",
        subtitle: "Um guia completo para aprendizagem digital, tarefas e gerenciamento de PDF.",
        intro: "O Google Classroom é o centro da sua aprendizagem digital. Seja estudando remotamente ou apenas gerenciando suas lições online, dominar esta plataforma é essencial. Este guia cobre tudo, desde entrar em uma turma até enviar sua primeira tarefa, com foco especial no manuseio de documentos PDF.",
        sections: [
            {
                id: "getting-started",
                title: "1. Primeiros Passos",
                content: (
                    <div className="space-y-4">
                        <p>Para acessar o Google Classroom, você precisa de uma conta Google. Veja como entrar na sua primeira turma:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Vá para <strong>classroom.google.com</strong> e faça login.</li>
                            <li>Clique no ícone <strong>+</strong> no canto superior direito.</li>
                            <li>Selecione <strong>Participar da turma</strong>.</li>
                            <li>Digite o <strong>código da turma</strong> fornecido pelo seu professor e clique em "Participar".</li>
                        </ol>
                    </div>
                )
            },
            {
                id: "navigating",
                title: "2. Navegando na Interface",
                content: (
                    <div className="space-y-4">
                        <p>Dentro de uma turma, você verá três abas principais:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Mural:</strong> O feed social da turma. Aqui você vê anúncios e prazos.</li>
                            <li><strong>Atividades:</strong> A aba mais importante. É onde todas as tarefas, provas e materiais estão organizados.</li>
                            <li><strong>Pessoas:</strong> Uma lista dos seus professores e colegas.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "submitting",
                title: "3. Enviando Trabalhos",
                content: (
                    <div className="space-y-4">
                        <p>Enviar trabalhos é a função principal do Google Classroom. Siga estes passos:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Vá para a aba <strong>Atividades</strong> e clique em uma tarefa.</li>
                            <li>Clique em <strong>Ver tarefa</strong> para ver todos os detalhes.</li>
                            <li>Na seção "Seu trabalho" à direita, clique em <strong>+ Adicionar ou criar</strong>.</li>
                            <li>Selecione a origem do arquivo (Google Drive, Link ou Upload).</li>
                            <li>Após o upload, clique no botão <strong>Entregar</strong>. Confirme se necessário.</li>
                        </ol>
                        <p className="text-sm text-gray-500 italic">Nota: Se você não clicar em "Entregar", seu professor verá a tarefa como "Pendente".</p>
                    </div>
                )
            },
            {
                id: "pdf-canada-help",
                title: "4. Como as ferramentas PDF Canada podem ajudar",
                content: (
                    <div className="space-y-4">
                        <p>Estudantes lidam com vários formatos. O PDF Canada oferece ferramentas gratuitas:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Layers size={18} /> Juntar Trabalhos</h4>
                                <p className="text-sm">Tirou 5 fotos da lição? Use a ferramenta <Link href="/pt/merge-pdf" className="text-canada-red hover:underline">Juntar PDF</Link> para combiná-las em um único documento.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><Upload size={18} /> Comprimir para Upload</h4>
                                <p className="text-sm">Internet lenta? Use <Link href="/pt/compress-pdf" className="text-canada-red hover:underline">Comprimir PDF</Link> para reduzir o tamanho sem perder qualidade.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle size={18} /> Converter Imagens</h4>
                                <p className="text-sm">Professores preferem PDFs. Use <Link href="/pt/image-to-pdf" className="text-canada-red hover:underline">Imagem para PDF</Link> para transformar fotos em documentos profissionais.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "handling-pdfs",
                title: "5. Trabalhando com PDFs no Classroom",
                content: (
                    <div className="space-y-4">
                        <p>Professores frequentemente compartilham planilhas como PDF. Para preenchê-las:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Visualizar:</strong> Clique no arquivo para abrir uma prévia.</li>
                            <li><strong>Abrir em nova janela:</strong> Clique nos três pontos -&gt; "Abrir em nova janela" para baixar ou imprimir.</li>
                            <li><strong>Anotar:</strong> No celular, use o ícone de caneta para escrever. No computador, use nossa ferramenta <Link href="/pt/make-pdf-fillable" className="text-canada-red hover:underline">Tornar PDF Preenchível</Link>.</li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Como cancelar o envio de uma tarefa?",
                a: "Volte à página da tarefa e clique em 'Cancelar envio'. Você poderá editar seus arquivos e enviar novamente."
            },
            {
                q: "Os pais podem ver meu Google Classroom?",
                a: "Os pais não podem entrar na turma diretamente, mas podem se inscrever para receber resumos por email sobre tarefas pendentes."
            },
            {
                q: "Por que não consigo abrir um PDF que meu professor postou?",
                a: "Você pode precisar de permissão. Peça ao seu professor para verificar as configurações de compartilhamento do arquivo no Google Drive."
            }
        ],
        cta: "Domine seus documentos",
        ctaBtn: "Ferramentas PDF para Estudantes",
        quickAnswer: {
            question: "Como usar o Google Classroom?",
            answer: "Entre em uma turma com um código, verifique a aba 'Atividades', envie seu trabalho (preferencialmente em PDF) e clique em 'Entregar'.",
            tool: "Guia Google Classroom",
            steps: ["Entrar", "Atividades", "Entregar"]
        }
    }
});

export const GoogleClassroomStudentGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "step": t.sections.slice(0, 3).map((section: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": section.title,
            "text": "Check the guide for detailed instructions."
        }))
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<GraduationCap size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                { name: lang === 'fr' ? 'Google Classroom' : 'Google Classroom', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/google-classroom-student-guide" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <ToolPromo tool="image-to-pdf" lang={lang} />
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
                    <Link href={`/${lang}/image-to-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/google-classroom-student-guide" category="convert" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
