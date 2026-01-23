'use client';

import React from 'react';
import { Scissors, Layers, File, Shield, Zap, Copy, Trash2 } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';
import { RelatedTools } from '../../RelatedTools';
import Link from 'next/link';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo_title: 'Split PDF Online | Extract Pages & Separate PDF Files Free',
        seo_desc: 'How to split a large PDF into multiple files. Extract specific pages, divide by range, or separate every page into a standalone document.',
        intro: `One massive PDF file is often more of a burden than a convenience.

Maybe you scanned a 50-page contract but only need to email the last 2 pages. Or perhaps you have a [merged report](/${lang}/guides/merge-pdf) and need to extract Chapter 3 for a client.

**Splitting** is the process of breaking a single document into smaller, more manageable parts.

This guide explores how to extract pages, separate documents, and delete unwanted sections instantly.`,
        sections: [
            {
                id: 'use-cases',
                title: 'Why Split a PDF?',
                content: `**1. Email Attachment Limits**
Email services like Gmail cap attachments at 25MB. Splitting a large report into Part 1 and Part 2 solves this instantly. You can also re-combine them later with our [Merge Tool](/${lang}/guides/merge-pdf).

**2. Legal Extraction**
Lawyers often need to share specific exhibits from a larger case file without revealing unrelated confidential information.

**3. Receipt Management**
If you scanned 50 receipts into one long PDF, splitting them into individual files makes it easier to upload them to expense management software.`
            },
            {
                id: 'methods',
                title: '3 Ways to Split',
                content: `**Mode 1: Extract Specific Pages**
*Goal:* "I just want pages 5, 10, and 12-15."
*Result:* One new PDF containing only those selected pages.

**Mode 2: Split by Range**
*Goal:* "Break this 100-page book into 5 chapters of 20 pages each."
*Result:* 5 separate PDF files (Pages 1-20, 21-40, etc.).

**Mode 3: Burst (Separate All)**
*Goal:* "Turn this 10-page document into 10 separate files."
*Result:* A ZIP file containing 10 individual PDFs.`
            },
            {
                id: 'how-to',
                title: 'How to Split Online (Step-by-Step)',
                content: `**Step 1: Upload to pdfcanada.ca**
Drag and drop your file into the "Split PDF" tool. We accept files up to 100MB.

**Step 2: Visual Selection**
You'll see a thumbnail view of every page.
*   **Click** pages to select them.
*   **Click the scissors** icon between pages to create a split point.

**Step 3: Organize**
You can also drag pages to reorder them before extracting.

**Step 4: Download**
Click "Split" to get your new document(s). If multiple files are created, we'll zip them up for you. You can also [merge them back](/${lang}/guides/merge-pdf) in a different order if needed.`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `**Is it safe to split contracts online?**

Yes, if you use a secure tool.
*   **Encrypted connection (HTTPS):** Ensures no one can intercept your upload.
*   **Automatic Deletion:** We delete all files from our servers after 15 minutes.
*   **No Looking:** No human ever sees your document. The splitting is fully automated.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Can I remove a page without splitting?**
Yes. In our visual editor, just select the pages you want to *keep* and extract them. The unselected pages are effectively deleted.

**Does splitting reduce quality?**
No. Splitting is a "lossless" operation. It simply copies the page data to a new container without re-compressing images or text.

**Can I split a password-protected PDF?**
You must unlock it first. Use our "Unlock PDF" tool to remove the password, then you can split it normally.`
            }
        ],
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            tool: 'Split PDF'
        }
    },
    fr: {
        seo_title: 'Diviser PDF en Ligne | Extraire des Pages Gratuitement',
        seo_desc: 'Comment diviser un gros PDF en plusieurs fichiers. Extrayez des pages spécifiques, divisez par plage ou séparez chaque page.',
        intro: `Un fichier PDF massif est souvent plus un fardeau qu'une commodité.

Peut-être avez-vous scanné un contrat de 50 pages mais n'avez besoin que des 2 dernières. Ou vous avez un rapport fusionné et devez extraire le chapitre 3.

**Diviser** est le processus de casser un document unique en parties plus petites.

Ce guide explore comment extraire des pages et séparer des documents instantanément.`,
        sections: [
            {
                id: 'use-cases',
                title: 'Pourquoi Diviser un PDF ?',
                content: `**1. Limites Email**
Gmail limite les pièces jointes à 25Mo. Diviser un rapport résout cela.

**2. Extraction Légale**
Partagez des pièces spécifiques sans révéler d'informations confidentielles non liées.

**3. Gestion de Reçus**
Si vous avez scanné 50 reçus en un seul PDF, les diviser facilite la gestion des notes de frais.`
            },
            {
                id: 'methods',
                title: '3 Façons de Diviser',
                content: `**Mode 1 : Extraire des Pages**
*But:* "Je veux juste les pages 5 et 10."
*Résultat:* Un nouveau PDF.

**Mode 2 : Diviser par Plage**
*But:* "Casser ce livre de 100 pages en chapitres de 20 pages."
*Résultat:* 5 fichiers PDF séparés.

**Mode 3 : Éclater (Tout Séparer)**
*But:* "Transformer ce doc de 10 pages en 10 fichiers."
*Résultat:* Un fichier ZIP contenant 10 PDF.`
            },
            {
                id: 'how-to',
                title: 'Comment Diviser en Ligne',
                content: `**Étape 1 : Téléversez**
Glissez votre fichier dans l'outil "Diviser PDF".

**Étape 2 : Sélection Visuelle**
*   **Cliquez** pour sélectionner.
*   **Cliquez sur les ciseaux** pour créer un point de coupure.

**Étape 3 : Organiser**
Réorganisez les pages si nécessaire.

**Étape 4 : Télécharger**
Obtenez vos nouveaux documents.`
            },
            {
                id: 'privacy',
                title: 'Confidentialité',
                content: `**Est-ce sûr ?**
Oui. Connexion chiffrée (HTTPS) et suppression automatique après 15 minutes. Personne ne voit vos fichiers.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Puis-je supprimer une page ?**
Oui. Sélectionnez simplement les pages à *garder*.

**Est-ce que cela réduit la qualité ?**
Non. C'est une opération sans perte.

**Puis-je diviser un PDF protégé ?**
Vous devez d'abord le déverrouiller avec notre outil "Déverrouiller PDF".`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            tool: 'Diviser PDF'
        }
    },
    pt: {
        seo_title: 'Dividir PDF Online | Extrair Páginas Gratuitamente',
        seo_desc: 'Como dividir um PDF grande em vários arquivos. Extraia páginas específicas, divida por intervalo ou separe cada página.',
        intro: `Um arquivo PDF massivo é frequentemente mais um fardo do que uma conveniência.

Talvez você tenha digitalizado um contrato de 50 páginas, mas só precisa das 2 últimas. Ou tem um relatório mesclado e precisa extrair o Capítulo 3.

**Dividir** é o processo de quebrar um documento único em partes menores.

Este guia explora como extrair páginas e separar documentos instantaneamente.`,
        sections: [
            {
                id: 'use-cases',
                title: 'Por Que Dividir um PDF?',
                content: `**1. Limites de Email**
Gmail limita anexos a 25MB. Dividir um relatório resolve isso.

**2. Extração Legal**
Compartilhe peças específicas sem revelar informações confidenciais não relacionadas.

**3. Gestão de Recibos**
Se você digitalizou 50 recibos em um único PDF, dividi-los facilita a gestão de despesas.`
            },
            {
                id: 'methods',
                title: '3 Maneiras de Dividir',
                content: `**Modo 1: Extrair Páginas**
*Meta:* "Quero apenas as páginas 5 e 10."
*Resultado:* Um novo PDF.

**Modo 2: Dividir por Intervalo**
*Meta:* "Quebrar este livro de 100 páginas em capítulos de 20 páginas."
*Resultado:* 5 arquivos PDF separados.

**Modo 3: Estourar (Separar Tudo)**
*Meta:* "Transformar este doc de 10 páginas em 10 arquivos."
*Resultado:* Um arquivo ZIP contendo 10 PDFs.`
            },
            {
                id: 'how-to',
                title: 'Como Dividir Online',
                content: `**Passo 1: Envie**
Arraste seu arquivo para a ferramenta "Dividir PDF".

**Passo 2: Seleção Visual**
*   **Clique** para selecionar.
*   **Clique na tesoura** para criar um ponto de corte.

**Passo 3: Organizar**
Reordene as páginas se necessário.

**Passo 4: Baixar**
Obtenha seus novos documentos.`
            },
            {
                id: 'privacy',
                title: 'Privacidade',
                content: `**É seguro?**
Sim. Conexão criptografada (HTTPS) e exclusão automática após 15 minutos. Ninguém vê seus arquivos.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Posso excluir uma página?**
Sim. Selecione apenas as páginas para *manter*.

**Isso reduz a qualidade?**
Não. É uma operação sem perdas.

**Posso dividir um PDF protegido?**
Você deve primeiro desbloqueá-lo com nossa ferramenta "Desbloquear PDF".`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            tool: 'Dividir PDF'
        }
    }
});

export const SplitPdfOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo_title}
                description={t.seo_desc}
                canonicalPath={`/${lang}/guides/split-pdf-online`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, path: lang === 'en' ? '/guides/split-pdf-online' : `/${lang}/guides/split-pdf-online` }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Split PDF Online' : lang === 'fr' ? 'Diviser PDF en Ligne' : 'Dividir PDF Online'}
                subtitle={lang === 'en' ? 'Extract specific pages or separate documents.' : lang === 'fr' ? 'Extrayez des pages spécifiques ou séparez des documents.' : 'Extraia páginas específicas ou separe documentos.'}
                icon={<Scissors size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.tool, href: lang === 'en' ? '/guides/split-pdf-online' : `/${lang}/guides/split-pdf-online` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="split-pdf" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="flex-1 p-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl relative bg-white dark:bg-gray-900">
                            <Layers className="mx-auto md:mx-0 w-12 h-12 text-gray-400 mb-4" />
                            <p className="font-bold text-gray-900 dark:text-white mb-2">
                                {lang === 'en' ? '1 Large File' : lang === 'fr' ? '1 Gros Fichier' : '1 Arquivo Grande'}
                            </p>
                            <p className="font-mono text-sm text-gray-500">Report_Full.pdf (50MB)</p>
                        </div>
                        <div className="text-canada-red font-bold text-xl flex flex-col items-center gap-1">
                            <Scissors size={24} />
                            <span>Split</span>
                        </div>
                        <div className="flex-1 p-6 border-2 border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                            <div className="flex justify-center gap-2 mb-4">
                                <File className="w-8 h-8 text-blue-600" />
                                <File className="w-8 h-8 text-blue-600" />
                                <File className="w-8 h-8 text-blue-600" />
                            </div>
                            <p className="font-bold text-gray-900 dark:text-white mb-2">
                                {lang === 'en' ? 'Multiple Small Files' : lang === 'fr' ? 'Plusieurs Petits Fichiers' : 'Vários Arquivos Pequenos'}
                            </p>
                            <p className="font-mono text-xs text-blue-500">Part_1.pdf, Part_2.pdf...</p>
                        </div>
                    </div>

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

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/split-pdf-online`} category="organize" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
