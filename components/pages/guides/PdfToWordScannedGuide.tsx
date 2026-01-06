'use client';

import React from 'react';
import { Scan, FileText, Camera } from 'lucide-react';
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
Converting a **scanned PDF** is harder than a regular PDF because the computer sees it as a **picture**, not text. To convert it into an editable Word document, you need technology called **OCR (Optical Character Recognition)**.

This guide explores the best ways to turn scanned images into editable text.
        `,
        sections: [
            {
                id: 'what-is-ocr',
                title: 'What is OCR?',
                content: `
Optical Character Recognition (OCR) scans the image of your document, recognizes the shapes of letters, and rebuilds them as editable digital text.
*   **Without OCR:** You get a Word doc containing a picture of text.
*   **With OCR:** You get actual text you can delete, type over, and search.
                `
            },
            {
                id: 'how-to-convert',
                title: 'How to Convert Scanned PDF',
                content: `
1.  **Use an OCR-enabled tool:** Not all converters support scans. Look for "OCR" features.
2.  **Check Image Quality:** Blurry or dark scans produce errors. Ensure good lighting and contrast.
3.  **Proofread:** OCR is rarely 100% perfect. Always check numbers and proper nouns.
                `
            }
        ]
    },
    fr: {
        intro: `
Convertir un **PDF scanné** est plus difficile qu'un PDF ordinaire car l'ordinateur le voit comme une **image**, pas du texte. Pour le convertir en document Word modifiable, vous avez besoin d'une technologie appelée **OCR (Reconnaissance Optique de Caractères)**.

Ce guide explore les meilleurs moyens de transformer des images scannés en texte modifiable.
        `,
        sections: [
            {
                id: 'what-is-ocr',
                title: 'Qu\'est-ce que l\'OCR ?',
                content: `
La Reconnaissance Optique de Caractères (OCR) scanne l'image de votre document, reconnaît les formes des lettres et les reconstruit en texte numérique modifiable.
*   **Sans OCR :** Vous obtenez un doc Word contenant une image de texte.
*   **Avec OCR :** Vous obtenez du vrai texte que vous pouvez effacer, modifier et rechercher.
                `
            },
            {
                id: 'how-to-convert',
                title: 'Comment Convertir un PDF Scanné',
                content: `
1.  **Utilisez un outil compatible OCR :** Tous les convertisseurs ne supportent pas les scans. Cherchez les fonctionnalités "OCR".
2.  **Vérifiez la qualité de l'image :** Les scans flous ou sombres produisent des erreurs. Assurez un bon éclairage et contraste.
3.  **Relisez :** L'OCR est rarement parfait à 100%. Vérifiez toujours les chiffres et les noms propres.
                `
            }
        ]
    }
});

export const PdfToWordScannedGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Convert Scanned PDF to Word with OCR' : 'Convertir PDF Scanné en Word avec OCR'}
                description={lang === 'en' ? 'How to edit scanned PDF documents by converting them to Word using OCR technology.' : 'Comment éditer des documents PDF scannés en les convertissant en Word avec la technologie OCR.'}
                canonicalPath="/guides/pdf-to-word-scanned"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Scan vers Word' : 'Scan to Word', path: lang === 'fr' ? '/fr/guides/pdf-to-word-scanned' : '/guides/pdf-to-word-scanned' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Convert Scanned PDF to Word' : 'Convertir PDF Scanné en Word'}
                subtitle={lang === 'en' ? 'Turn pictures of text into editable documents.' : 'Transformez des images de texte en documents modifiables.'}
                icon={<Scan size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'Scanned PDF' : 'PDF Scanné', href: lang === 'fr' ? '/fr/guides/pdf-to-word-scanned' : '/guides/pdf-to-word-scanned' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <MarkdownContent content={t.intro} />

                    <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="flex-1 p-6 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl relative">
                            <Camera className="mx-auto md:mx-0 w-12 h-12 text-gray-400 mb-4" />
                            <p className="font-mono text-sm text-gray-500">IMG_001.jpg</p>
                            <p className="font-bold text-gray-900 dark:text-white">"Picture of Text"</p>
                        </div>
                        <div className="text-canada-red font-bold text-xl">→ OCR →</div>
                        <div className="flex-1 p-6 border-2 border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                            <FileText className="mx-auto md:mx-0 w-12 h-12 text-blue-600 mb-4" />
                            <p className="font-mono text-sm text-blue-500">Document.docx</p>
                            <p className="font-bold text-gray-900 dark:text-white">"Editable Text"</p>
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

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
