'use client';

import React from 'react';
import { Layers, Combine, HardDrive } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        intro: `
Merging small PDFs is easy, but what if you have **hundreds of files** or **gigabytes of data**? Merging large PDFs usually crashes standard browser tools because they run out of memory.

This guide explains how to handle massive merge jobs without crashing your browser.
        `,
        sections: [
            {
                id: 'why-crashes',
                title: 'Why Do Tools Crash?',
                content: `
Most online tools try to load the entire PDF into your browser's RAM. If you merge ten 500MB files, that's 5GB of RAM—more than most tabs are allowed to use.
                `
            },
            {
                id: 'solution',
                title: 'The Solution: Stream Merging',
                content: `
To merge large files, you need a tool that processes **streams**. It reads page 1 of File A, writes it to the new file, then forgets it. Then it reads Page 2. It never holds the whole file in memory at once.
*   **Our Tool:** We use efficient local processing that can handle significantly larger files than typical cloud uploaders because we don't need to upload the 5GB file first!
*   **Desktop Software:** For truly massive jobs (e.g., 20,000 pages), desktop software like Adobe Acrobat or PDFsam is still the king.
                `
            }
        ]
    },
    fr: {
        intro: `
Fusionner de petits PDF est facile, mais et si vous avez **des centaines de fichiers** ou **des gigaoctets de données** ? Fusionner de gros PDF fait généralement planter les outils de navigateur standards car ils manquent de mémoire.

Ce guide explique comment gérer des tâches de fusion massives sans faire planter votre navigateur.
        `,
        sections: [
            {
                id: 'why-crashes',
                title: 'Pourquoi les Outils Plantent-ils ?',
                content: `
La plupart des outils en ligne essaient de charger tout le PDF dans la RAM de votre navigateur. Si vous fusionnez dix fichiers de 500MB, c'est 5GB de RAM—plus que ce que la plupart des onglets sont autorisés à utiliser.
                `
            },
            {
                id: 'solution',
                title: 'La Solution : Fusion par Flux',
                content: `
Pour fusionner de gros fichiers, vous avez besoin d'un outil qui traite des **flux**. Il lit la page 1 du Fichier A, l'écrit dans le nouveau fichier, puis l'oublie. Ensuite il lit la Page 2. Il ne garde jamais tout le fichier en mémoire à la fois.
*   **Notre Outil :** Nous utilisons un traitement local efficace qui peut gérer des fichiers significativement plus gros que les téléverseurs cloud typiques car nous n'avons pas besoin de téléverser le fichier de 5GB d'abord !
*   **Logiciel de Bureau :** Pour des tâches vraiment massives (ex: 20 000 pages), les logiciels de bureau comme Adobe Acrobat ou PDFsam restent rois.
                `
            }
        ]
    },
    pt: {
        intro: `
Juntar pequenos PDFs é fácil, mas e se você tiver **centenas de arquivos** ou **gigabytes de dados**? Juntar PDFs grandes geralmente trava as ferramentas padrão do navegador porque elas ficam sem memória.

Este guia explica como lidar com trabalhos de fusão massivos sem travar seu navegador.
        `,
        sections: [
            {
                id: 'why-crashes',
                title: 'Por Que as Ferramentas Travam?',
                content: `
A maioria das ferramentas online tenta carregar todo o PDF na RAM do seu navegador. Se você juntar dez arquivos de 500MB, são 5GB de RAM—mais do que a maioria das abas tem permissão para usar.
                `
            },
            {
                id: 'solution',
                title: 'A Solução: Fusão por Fluxo',
                content: `
Para juntar arquivos grandes, você precisa de uma ferramenta que processe **fluxos**. Ela lê a página 1 do Arquivo A, grava no novo arquivo e depois a esquece. Em seguida, lê a Página 2. Nunca mantém o arquivo inteiro na memória de uma só vez.
*   **Nossa Ferramenta:** Usamos processamento local eficiente que pode lidar com arquivos significativamente maiores do que os uploaders de nuvem típicos, porque não precisamos fazer o upload do arquivo de 5GB primeiro!
*   **Software de Desktop:** Para trabalhos realmente massivos (ex: 20.000 páginas), softwares de desktop como Adobe Acrobat ou PDFsam ainda são os reis.
                `
            }
        ]
    }
});

export const MergeLargePdfsGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title || (lang === 'en' ? 'Merge Large PDF Files Guide' : lang === 'fr' ? 'Guide Fusionner Gros Fichiers PDF' : 'Guia Mesclar Arquivos PDF Grandes')}
                description={t.seo_desc || (lang === 'en' ? 'How to combine massive PDF files without crashing your browser.' : lang === 'fr' ? 'Comment combiner des fichiers PDF massifs sans faire planter votre navigateur.' : 'Como combinar arquivos PDF massivos sem travar seu navegador.')}
                canonicalPath="/guides/merge-large-pdfs"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'Merge Large PDFs' : lang === 'fr' ? 'Fusionner Gros PDF' : 'Mesclar PDFs Grandes', path: lang === 'en' ? '/guides/merge-large-pdfs' : `/${lang}/guides/merge-large-pdfs` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Merge Large PDFs' : lang === 'fr' ? 'Fusionner Gros PDF' : 'Mesclar PDFs Grandes'}
                subtitle={lang === 'en' ? 'Combine massive documents securely and efficiently.' : lang === 'fr' ? 'Combinez des documents massifs de manière sécurisée et efficace.' : 'Combine documentos massivos com segurança e eficiência.'}
                icon={<Combine size={32} />}
                breadcrumbs={[
                    { name: lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : 'Início', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'en' ? 'Guides' : lang === 'fr' ? 'Guides' : 'Guias', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: lang === 'en' ? 'Merge Large' : lang === 'fr' ? 'Fusionner Gros' : 'Mesclar Grandes', href: lang === 'en' ? '/guides/merge-large-pdfs' : `/${lang}/guides/merge-large-pdfs` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <MarkdownContent content={t.intro} />

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
