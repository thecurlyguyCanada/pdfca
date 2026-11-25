'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, Key, Shield, AlertTriangle, Download, Unlock } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { RelatedTools } from '../../RelatedTools';
import { AuthorBio } from '../../AuthorBio';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `Convert ACSM to PDF | Detailed Guide ${CURRENT_YEAR}`,
            desc: `How to convert .acsm files to PDF. Step-by-step guide to unlocking your eBooks using Adobe Digital Editions. Free and easy tutorial.`
        },
        h1: "ACSM to PDF: How to Get the Book Out of an .acsm File",
        subtitle: "An .acsm file is a download ticket from Adobe's content server. Here is how to turn it into the PDF or EPUB it stands for.",
        intro: "Downloaded an eBook and got a strange .acsm file instead of a PDF? Don't worry. An .acsm file is just a license key, not the book itself. This guide explains exactly how to turn it into a readable PDF using the official Adobe method.",
        sections: [
            {
                id: "what-is-acsm",
                title: "What is an ACSM file?",
                content: (
                    <div className="space-y-4">
                        <p>An <strong>ACSM (Adobe Content Server Message)</strong> file is a tiny file that manages the download of your eBook. It tells a program authorized by Adobe (like Adobe Digital Editions) which book to download and ensures you have the rights to read it.</p>
                        <p>You cannot "convert" it directly with a generic online tool because it requires your personal Adobe ID to unlock the content.</p>
                    </div>
                )
            },
            {
                id: "how-to-convert",
                title: "How to Convert ACSM to PDF",
                content: (
                    <div className="space-y-4">
                        <p>To turn your ACSM file into a real PDF, follow these official steps:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Install Adobe Digital Editions (ADE):</strong> Download and install the free ADE software from Adobe's website.
                            </li>
                            <li>
                                <strong>Authorize Your Computer:</strong> Open ADE, go to <em>Help &gt; Authorize Computer</em>, and sign in with your Adobe ID. This links the book to you.
                            </li>
                            <li>
                                <strong>Open the ACSM File:</strong> Double-click your .acsm file. It should open automatically in ADE.
                            </li>
                            <li>
                                <strong>Download Completes:</strong> ADE will verify your license and download the actual PDF (or EPUB) eBook.
                            </li>
                            <li>
                                <strong>Find Your PDF:</strong> The standard PDF file is usually saved in:
                                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                    <li><strong>Windows:</strong> Documents\My Digital Editions</li>
                                    <li><strong>Mac:</strong> Documents/Digital Editions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "remove-drm",
                title: "Can I remove the DRM?",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <h4 className="flex items-center gap-2 font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                            <Unlock size={20} /> About Digital Rights Management
                        </h4>
                        <p>The PDF or EPUB that Adobe Digital Editions downloads is usually still DRM-protected: it opens only in software authorized with the same Adobe ID. In Canada, the Copyright Act prohibits circumventing technological protection measures such as this DRM (section 41.1), even for a book you bought, so this guide does not cover removal tools. Read the book in Adobe Digital Editions, or in another reading app that supports Adobe DRM and is authorized with your Adobe ID; for a book you want as an unrestricted file, ask the seller for a DRM-free edition.</p>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Why can't I use an online converter?",
                a: "Because the ACSM file is locked to your specific user account. An online server doesn't have your Adobe ID credentials to authorize the download."
            },
            {
                q: "Is Adobe Digital Editions free?",
                a: "Yes, it is free software provided by Adobe."
            },
            {
                q: "Can I read ACSM files on Kindle?",
                a: "No. Kindle devices and apps do not support Adobe DRM, so a book delivered as .acsm cannot be read on a Kindle. Use Adobe Digital Editions on a computer, or an e-reader or app that supports Adobe DRM, such as Kobo and many library reading apps."
            },
            {
                q: "My library e-book came as an .acsm file. Is that normal?",
                a: "Yes. Many public libraries, in Canada as elsewhere, lend downloadable e-books with Adobe DRM, and the download link gives you an .acsm file. Open it in Adobe Digital Editions authorized with your Adobe ID; the book stops opening when the loan ends, with no late fees."
            },
            {
                q: "Can I convert the downloaded EPUB to PDF with your EPUB to PDF tool?",
                a: "Only if the EPUB is DRM-free. A book that came through an .acsm file is normally still protected, and our EPUB to PDF tool cannot open protected files. DRM-free EPUBs, such as many public-domain or author-direct books, convert normally."
            }
        ],
        cta: "Need to Edit Your New PDF?",
        ctaBtn: "Explore PDF Tools",
        quickAnswer: {
            question: "How to convert ACSM file to PDF?",
            answer: "You don't convert an .acsm file: it is a download ticket, not the book. Install the free Adobe Digital Editions, authorize it with your Adobe ID (Help, Authorize Computer), then double-click the .acsm. Digital Editions downloads the real book, as a PDF or EPUB depending on what the seller or library issued, into Documents\\My Digital Editions (Windows) or Documents/Digital Editions (Mac). Online converters can't do this because they don't have your Adobe ID.",
            tool: "Adobe Digital Editions",
            steps: ["Install ADE", "Open ACSM", "Get PDF"]
        }
    },
    fr: {
        seo: {
            title: `Convertir ACSM en PDF | Guide Détaillé ${CURRENT_YEAR}`,
            desc: `Comment convertir les fichiers .acsm en PDF. Guide étape par étape pour débloquer vos eBooks avec Adobe Digital Editions. Tutoriel gratuit.`
        },
        h1: "ACSM en PDF : obtenir le livre à partir d'un fichier .acsm",
        subtitle: "Un fichier .acsm est un bon de téléchargement du serveur d'Adobe. Voici comment obtenir le PDF ou l'EPUB qu'il représente.",
        intro: "Vous avez téléchargé un eBook et obtenu un fichier .acsm étrange au lieu d'un PDF ? Ne vous inquiétez pas. Un fichier .acsm est juste une clé de licence, pas le livre lui-même. Ce guide vous explique exactement comment le transformer en un PDF lisible utilisant la méthode officielle d'Adobe.",
        sections: [
            {
                id: "what-is-acsm",
                title: "Qu'est-ce qu'un fichier ACSM ?",
                content: (
                    <div className="space-y-4">
                        <p>Un fichier <strong>ACSM (Adobe Content Server Message)</strong> est un petit fichier qui gère le téléchargement de votre eBook. Il indique à un programme autorisé par Adobe (comme Adobe Digital Editions) quel livre télécharger et vérifie que vous avez le droit de le lire.</p>
                        <p>Vous ne pouvez pas le "convertir" directement avec un outil en ligne générique car il nécessite votre identifiant Adobe personnel pour déverrouiller le contenu.</p>
                    </div>
                )
            },
            {
                id: "how-to-convert",
                title: "Comment Convertir ACSM en PDF",
                content: (
                    <div className="space-y-4">
                        <p>Pour transformer votre fichier ACSM en un vrai PDF, suivez ces étapes officielles :</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Installez Adobe Digital Editions (ADE) :</strong> Téléchargez et installez le logiciel gratuit ADE depuis le site d'Adobe.
                            </li>
                            <li>
                                <strong>Autorisez votre ordinateur :</strong> Ouvrez ADE, allez dans <em>Aide &gt; Autoriser l'ordinateur</em>, et connectez-vous avec votre identifiant Adobe.
                            </li>
                            <li>
                                <strong>Ouvrez le fichier ACSM :</strong> Double-cliquez sur votre fichier .acsm. Il devrait s'ouvrir automatiquement dans ADE.
                            </li>
                            <li>
                                <strong>Téléchargement terminé :</strong> ADE vérifiera votre licence et téléchargera le véritable eBook PDF (ou EPUB).
                            </li>
                            <li>
                                <strong>Trouvez votre PDF :</strong> Le fichier PDF standard est généralement enregistré dans :
                                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                    <li><strong>Windows :</strong> Documents\My Digital Editions</li>
                                    <li><strong>Mac :</strong> Documents/Digital Editions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "remove-drm",
                title: "Puis-je supprimer les DRM ?",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <h4 className="flex items-center gap-2 font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                            <Unlock size={20} /> À propos de la Gestion des Droits Numériques
                        </h4>
                        <p>Le PDF ou l'EPUB téléchargé par Adobe Digital Editions reste en général protégé par DRM : il ne s'ouvre que dans un logiciel autorisé avec le même identifiant Adobe. Au Canada, la Loi sur le droit d'auteur interdit de contourner une mesure technique de protection comme ce DRM (article 41.1), même pour un livre acheté; ce guide ne traite donc pas des outils de suppression. Lisez le livre dans Adobe Digital Editions ou dans une autre application de lecture compatible avec le DRM d'Adobe et autorisée avec votre identifiant; si vous voulez un fichier sans restriction, demandez une édition sans DRM au vendeur.</p>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Pourquoi ne puis-je pas utiliser un convertisseur en ligne ?",
                a: "Parce que le fichier ACSM est verrouillé à votre compte utilisateur. Un serveur en ligne n'a pas vos identifiants Adobe pour autoriser le téléchargement."
            },
            {
                q: "Adobe Digital Editions est-il gratuit ?",
                a: "Oui, c'est un logiciel gratuit fourni par Adobe."
            },
            {
                q: "Puis-je lire un ACSM sur Kindle ?",
                a: "Non. Les liseuses et applications Kindle ne prennent pas en charge le DRM d'Adobe : un livre livré en .acsm ne se lit pas sur Kindle. Utilisez Adobe Digital Editions sur un ordinateur, ou une liseuse ou application compatible avec le DRM d'Adobe, comme Kobo et bien des applications de bibliothèques."
            },
            {
                q: "Mon livre numérique de bibliothèque est arrivé en fichier .acsm. Est-ce normal?",
                a: "Oui. Bien des bibliothèques publiques, au Canada comme ailleurs, prêtent des livres numériques téléchargeables protégés par le DRM d'Adobe, et le lien de téléchargement vous donne un fichier .acsm. Ouvrez-le dans Adobe Digital Editions autorisé avec votre identifiant Adobe; le livre cesse de s'ouvrir à la fin du prêt, sans frais de retard."
            },
            {
                q: "Puis-je convertir l'EPUB téléchargé en PDF avec votre outil EPUB vers PDF?",
                a: "Seulement si l'EPUB est sans DRM. Un livre obtenu par un fichier .acsm est normalement encore protégé, et notre outil EPUB vers PDF ne peut pas ouvrir les fichiers protégés. Les EPUB sans DRM, comme bien des livres du domaine public, se convertissent normalement."
            }
        ],
        cta: "Besoin d'éditer votre nouveau PDF ?",
        ctaBtn: "Explorer les Outils PDF",
        quickAnswer: {
            question: "Comment convertir un fichier ACSM en PDF ?",
            answer: "On ne convertit pas un fichier .acsm : c'est un bon de téléchargement, pas le livre. Installez Adobe Digital Editions (gratuit), autorisez-le avec votre identifiant Adobe (Aide, Autoriser l'ordinateur), puis double-cliquez sur le .acsm. Digital Editions télécharge le vrai livre, en PDF ou en EPUB selon ce qu'a émis le vendeur ou la bibliothèque, dans Documents\\My Digital Editions (Windows) ou Documents/Digital Editions (Mac). Un convertisseur en ligne ne peut pas le faire : il n'a pas votre identifiant Adobe.",
            tool: "Guide ACSM",
            steps: ["Installer ADE", "Ouvrir ACSM", "Obtenir PDF"]
        }
    },
    pt: {
        seo: {
            title: `Converter ACSM para PDF | Guia Detalhado ${CURRENT_YEAR}`,
            desc: `Como converter arquivos .acsm em PDF. Guia passo a passo para desbloquear seus eBooks usando Adobe Digital Editions. Tutorial gratuito e fácil.`
        },
        h1: "Converter ACSM para PDF",
        subtitle: "Um guia rápido para desbloquear seus eBooks protegidos.",
        intro: "Baixou um eBook e obteve um arquivo .acsm estranho em vez de um PDF? Não se preocupe. Um arquivo .acsm é apenas uma chave de licença, não o livro em si. Este guia explica exatamente como transformá-lo em um PDF legível usando o método oficial da Adobe.",
        sections: [
            {
                id: "what-is-acsm",
                title: "O que é um arquivo ACSM?",
                content: (
                    <div className="space-y-4">
                        <p>Um arquivo <strong>ACSM (Adobe Content Server Message)</strong> é um pequeno arquivo que gerencia o download do seu eBook. Ele diz a um programa autorizado pela Adobe (como Adobe Digital Editions) qual livro baixar e garante que você tenha os direitos para lê-lo.</p>
                        <p>Você não pode convertê-lo diretamente com uma ferramenta online genérica porque ele requer seu Adobe ID pessoal para desbloquear o conteúdo.</p>
                    </div>
                )
            },
            {
                id: "how-to-convert",
                title: "Como Converter ACSM para PDF",
                content: (
                    <div className="space-y-4">
                        <p>Para transformar seu arquivo ACSM em um PDF real, siga estes passos oficiais:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Instale o Adobe Digital Editions (ADE):</strong> Baixe e instale o software gratuito ADE do site da Adobe.
                            </li>
                            <li>
                                <strong>Autorize Seu Computador:</strong> Abra o ADE, vá em <em>Ajuda &gt; Autorizar Computador</em>, e faça login com seu Adobe ID. Isso vincula o livro a você.
                            </li>
                            <li>
                                <strong>Abra o Arquivo ACSM:</strong> Clique duas vezes no seu arquivo .acsm. Ele deve abrir automaticamente no ADE.
                            </li>
                            <li>
                                <strong>Download Completo:</strong> O ADE verificará sua licença e baixará o eBook em PDF (ou EPUB) real.
                            </li>
                            <li>
                                <strong>Encontre Seu PDF:</strong> O arquivo PDF padrão geralmente é salvo em:
                                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                    <li><strong>Windows:</strong> Documentos\My Digital Editions</li>
                                    <li><strong>Mac:</strong> Documentos/Digital Editions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "remove-drm",
                title: "Posso remover o DRM?",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <h4 className="flex items-center gap-2 font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                            <Unlock size={20} /> Sobre Gestão de Direitos Digitais (DRM)
                        </h4>
                        <p>O PDF que você obtém do Adobe Digital Editions é frequentemente protegido por DRM, o que significa que só pode ser aberto em dispositivos autorizados. Remover esse DRM para ler em outros dispositivos (como um Kindle) geralmente requer ferramentas de terceiros como o Calibre, mas esteja ciente das leis de direitos autorais em sua jurisdição.</p>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Por que não posso usar um conversor online?",
                a: "Porque o arquivo ACSM está bloqueado para sua conta de usuário específica. Um servidor online não tem suas credenciais Adobe ID para autorizar o download."
            },
            {
                q: "O Adobe Digital Editions é gratuito?",
                a: "Sim, é um software gratuito fornecido pela Adobe."
            },
            {
                q: "Posso ler arquivos ACSM no Kindle?",
                a: "Não diretamente. O Kindle não suporta Adobe DRM. Você deve obter o PDF via ADE e, em seguida, transferir esse PDF para o seu Kindle (se o DRM permitir) ou remover o DRM primeiro."
            }
        ],
        cta: "Precisa Editar Seu Novo PDF?",
        ctaBtn: "Explorar Ferramentas PDF",
        quickAnswer: {
            question: "Como converter arquivo ACSM para PDF?",
            answer: "Instale o Adobe Digital Editions, autorize seu computador e abra o arquivo ACSM. O software baixará o verdadeiro eBook em PDF.",
            tool: "Guia Adobe",
            steps: ["Instalar ADE", "Abrir ACSM", "Obter PDF"]
        }
    }
});

export const AcsmToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": t.h1,
        "description": t.seo.desc,
        "image": "https://www.pdfcanada.ca/og-image.png",
        "datePublished": "2024-01-05",
        "dateModified": "2026-11-25",
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Key size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: `/${lang}` },
                { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides` },
                { name: lang === 'fr' ? 'ACSM en PDF' : (lang === 'pt' ? 'ACSM para PDF' : 'ACSM to PDF'), href: `/${lang}/guides/acsm-to-pdf` }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath={`/${lang}/guides/acsm-to-pdf`} lang={lang} schema={schema} faqs={t.faq} noOrganization ogType="article" />

            <div className="w-full py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="rounded-3xl border border-canada-red/20 bg-canada-red/5 p-6 md:p-8 mb-10 not-prose">
                        <p className="text-xs font-bold uppercase tracking-widest text-canada-red mb-2">{lang === 'fr' ? 'La réponse courte' : 'The short answer'}</p>
                        <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">{t.quickAnswer.answer}</p>
                    </div>
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
                    <Link href={`/${lang}/guides`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/acsm-to-pdf" category="convert" />
                </div>

                <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href={`/${lang}/epub-to-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <BookOpen size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'EPUB vers PDF' : 'EPUB to PDF'}
                        </Link>
                        <Link href={`/${lang}/pdf-to-epub`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <BookOpen size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'PDF vers EPUB' : 'PDF to EPUB'}
                        </Link>
                        <Link href={`/${lang}/ocr-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Unlock size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'OCR PDF' : 'OCR PDF'}
                        </Link>
                        <Link href={`/${lang}/compress-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Download size={16} className="text-canada-red" />
                            {lang === 'fr' ? 'Compresser un PDF' : 'Compress PDF'}
                        </Link>
                    </div>
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
