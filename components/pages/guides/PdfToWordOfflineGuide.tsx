'use client';

import React from 'react';
import { Laptop, WifiOff, Shield, RefreshCw } from 'lucide-react';
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
There are times when **online conversion isn't an option**. Maybe you have restricted data, no internet connection, or strict company policies. In these cases, you need a reliable **offline PDF to Word converter**.

This guide covers the best methods to convert your documents locally on Windows and Mac.
        `,
        sections: [
            {
                id: 'why-offline',
                title: 'Why Convert Offline?',
                content: `
While online tools are convenient, offline conversion offers unique benefits:
*   **Security:** Your files never leave your device.
*   **Speed:** No need to upload or download large files.
*   **Independence:** Work without an internet connection.
                `
            },
            {
                id: 'method-1-word',
                title: 'Method 1: Using Microsoft Word (Best for Text)',
                content: `
Did you know Microsoft Word has a built-in PDF converter?
1.  Open Microsoft Word.
2.  Go to **File > Open**.
3.  Select your PDF file.
4.  Word will prompt you to convert the PDF. Click **OK**.
5.  Review and save the document as a \`.docx\`.

*Note: This works best for simple text documents. Complex layouts might shift.*
                `
            },
            {
                id: 'method-2-adobe',
                title: 'Method 2: Adobe Acrobat Pro (Best for Layout)',
                content: `
If you have a customized or complex layout, Adobe Acrobat Pro is the industry standard:
1.  Open the file in Acrobat.
2.  Click on the **Export PDF** tool in the right pane.
3.  Choose **Microsoft Word** as your export format.
4.  Click **Export**.
                `
            }
        ]
    },
    fr: {
        intro: `
Il y a des moments où **la conversion en ligne n'est pas une option**. Peut-être avez-vous des données restreintes, pas de connexion internet ou des politiques d'entreprise strictes. Dans ces cas, vous avez besoin d'un **convertisseur PDF en Word hors ligne** fiable.

Ce guide couvre les meilleures méthodes pour convertir vos documents localement sur Windows et Mac.
        `,
        sections: [
            {
                id: 'why-offline',
                title: 'Pourquoi Convertir Hors Ligne ?',
                content: `
Bien que les outils en ligne soient pratiques, la conversion hors ligne offre des avantages uniques :
*   **Sécurité :** Vos fichiers ne quittent jamais votre appareil.
*   **Vitesse :** Pas besoin de télécharger de gros fichiers.
*   **Indépendance :** Travaillez sans connexion internet.
                `
            },
            {
                id: 'method-1-word',
                title: 'Méthode 1 : Utiliser Microsoft Word (Idéal pour le Texte)',
                content: `
Saviez-vous que Microsoft Word possède un convertisseur PDF intégré ?
1.  Ouvrez Microsoft Word.
2.  Allez dans **Fichier > Ouvrir**.
3.  Sélectionnez votre fichier PDF.
4.  Word vous demandera de convertir le PDF. Cliquez sur **OK**.
5.  Révisez et enregistrez le document en \`.docx\`.

*Note : Cela fonctionne mieux pour les documents texte simples. Les mises en page complexes peuvent bouger.*
                `
            },
            {
                id: 'method-2-adobe',
                title: 'Méthode 2 : Adobe Acrobat Pro (Idéal pour la Mise en Page)',
                content: `
Si vous avez une mise en page personnalisée ou complexe, Adobe Acrobat Pro est la norme de l'industrie :
1.  Ouvrez le fichier dans Acrobat.
2.  Cliquez sur l'outil **Exporter PDF** dans le volet de droite.
3.  Choisissez **Microsoft Word** comme format d'exportation.
4.  Cliquez sur **Exporter**.
                `
            }
        ]
    }
});

export const PdfToWordOfflineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang); // Fallback for shared content
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'PDF to Word Offline Converter Guide' : 'Guide Convertisseur PDF en Word Hors Ligne'}
                description={lang === 'en' ? 'Convert PDF to Word locally without internet. Secure, private.' : 'Convertir PDF en Word localement sans internet. Sécurisé, privé.'}
                canonicalPath="/guides/pdf-to-word-offline"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'PDF en Word Hors Ligne' : 'PDF to Word Offline', path: lang === 'fr' ? '/fr/guides/pdf-to-word-offline' : '/guides/pdf-to-word-offline' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'PDF to Word Offline' : 'PDF en Word Hors Ligne'}
                subtitle={lang === 'en' ? 'Secure local conversion without internet access.' : 'Conversion locale sécurisée sans accès internet.'}
                icon={<WifiOff size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'How to Convert' : 'Comment Convertir', href: lang === 'fr' ? '/fr/guides/pdf-to-word-offline' : '/guides/pdf-to-word-offline' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <MarkdownContent content={t.intro} />

                    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <WifiOff className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'No Internet?' : 'Pas d\'Internet ?'}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {lang === 'en' ? 'Works completely offline.' : 'Fonctionne complètement hors ligne.'}
                            </p>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                            <Shield className="w-8 h-8 text-green-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">{lang === 'en' ? '100% Secure' : '100% Sécurisé'}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {lang === 'en' ? 'Data stays on your PC.' : 'Les données restent sur votre PC.'}
                            </p>
                        </div>
                        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                            <Laptop className="w-8 h-8 text-purple-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Native Speed' : 'Vitesse Native'}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {lang === 'en' ? 'No upload/download wait.' : 'Pas d\'attente de téléchargement.'}
                            </p>
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

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold mb-4">{lang === 'en' ? 'Need a quick online fix?' : 'Besoin d\'une solution rapide en ligne ?'}</h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-400">
                            {lang === 'en'
                                ? 'If you don\'t have Word installed, try our secure online converter. It processes files locally in your browser.'
                                : 'Si vous n\'avez pas Word installé, essayez notre convertisseur en ligne sécurisé. Il traite les fichiers localement dans votre navigateur.'}
                        </p>
                        <Link
                            href={`/${lang}/guides/pdf-to-word-online`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-canada-red text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                        >
                            <RefreshCw size={20} />
                            {lang === 'en' ? 'Try Online Converter' : 'Essayer le convertisseur en ligne'}
                        </Link>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
