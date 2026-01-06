'use client';

import React from 'react';
import { PenTool, ShieldCheck, Feather } from 'lucide-react';
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
Printing, signing, scanning, and emailing contracts is a thing of the past. **Electronic signatures (e-Signatures)** are faster, easier, and legally binding in most jurisdictions (including Canada and the US).

This guide explains how to add a secure signature to your PDF document.
        `,
        sections: [
            {
                id: 'types',
                title: 'Electronic vs. Digital Signatures',
                content: `
*   **Electronic Signature (Standard):** An image of your signature placed on the document. Valid for most business contracts, leases, and agreements.
*   **Digital Signature (Advanced):** Uses cryptographic certificates to prove identity and ensure the document hasn't been tampered with. Required for government forms and high-security contracts.
                `
            },
            {
                id: 'how-to',
                title: 'How to Sign Online',
                content: `
1.  **Draw:** Use your mouse or trackpad to draw your signature.
2.  **Type:** Type your name and choose a "handwriting" font style.
3.  **Upload:** Upload a photo of your wet-ink signature.
Once you create your signature, you can drag and drop it onto the signature line of any PDF.
                `
            }
        ]
    },
    fr: {
        intro: `
Imprimer, signer, scanner et envoyer des contrats par email appartient au passé. Les **signatures électroniques (e-Signatures)** sont plus rapides, plus faciles et juridiquement contraignantes dans la plupart des juridictions (y compris le Canada et les États-Unis).

Ce guide explique comment ajouter une signature sécurisée à votre document PDF.
        `,
        sections: [
            {
                id: 'types',
                title: 'Signatures Électroniques vs Numériques',
                content: `
*   **Signature Électronique (Standard) :** Une image de votre signature placée sur le document. Valide pour la plupart des contrats commerciaux, baux et accords.
*   **Signature Numérique (Avancée) :** Utilise des certificats cryptographiques pour prouver l'identité et garantir que le document n'a pas été altéré. Requis pour les formulaires gouvernementaux et contrats haute sécurité.
                `
            },
            {
                id: 'how-to',
                title: 'Comment Signer en Ligne',
                content: `
1.  **Dessiner :** Utilisez votre souris ou pavé tactile pour dessiner votre signature.
2.  **Taper :** Tapez votre nom et choisissez un style de police "manuscrit".
3.  **Téléverser :** Téléversez une photo de votre signature à l'encre.
Une fois votre signature créée, vous pouvez la glisser-déposer sur la ligne de signature de n'importe quel PDF.
                `
            }
        ]
    }
});

export const SignPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={lang === 'en' ? 'Sign PDF Online Guide' : 'Guide Signer PDF en Ligne'}
                description={lang === 'en' ? 'How to add electronic signatures to PDF documents.' : 'Comment ajouter des signatures électroniques aux documents PDF.'}
                canonicalPath="/guides/sign-pdf"
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'fr' ? 'Signer PDF' : 'Sign PDF', path: lang === 'fr' ? '/fr/guides/sign-pdf' : '/guides/sign-pdf' }
                ]}
            />
            <PageLayout
                title={lang === 'en' ? 'Sign PDF Online' : 'Signer PDF en Ligne'}
                subtitle={lang === 'en' ? 'Add legally binding electronic signatures.' : 'Ajoutez des signatures électroniques juridiquement contraignantes.'}
                icon={<PenTool size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides' : '/guides' },
                    { name: lang === 'en' ? 'Sign Online' : 'Signer en Ligne', href: lang === 'fr' ? '/fr/guides/sign-pdf' : '/guides/sign-pdf' }
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
