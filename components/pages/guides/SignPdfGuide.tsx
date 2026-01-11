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
import { ToolPromo } from '../../ToolPromo';

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
        ],
        seo: {
            title: 'Sign PDF Online Guide',
            desc: 'How to add electronic signatures to PDF documents.'
        },
        h1: 'Sign PDF Online',
        subtitle: 'Add legally binding electronic signatures.',
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            sign: 'Sign PDF'
        }
    },
    fr: {
        seo: {
            title: 'Guide Signer PDF en Ligne',
            desc: 'Comment ajouter des signatures électroniques aux documents PDF.'
        },
        h1: 'Signer PDF en Ligne',
        subtitle: 'Ajoutez des signatures électroniques juridiquement contraignantes.',
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
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            sign: 'Signer PDF'
        }
    },
    pt: {
        seo: {
            title: 'Guia Assinar PDF Online | Adicionar Assinaturas Eletrônicas',
            desc: 'Como adicionar assinaturas eletrônicas seguras a documentos PDF. Grátis e juridicamente vinculativo.'
        },
        h1: 'Assinar PDF Online',
        subtitle: 'Adicione assinaturas eletrônicas juridicamente vinculativas.',
        intro: `
Imprimir, assinar, digitalizar e enviar contratos por e-mail é coisa do passado. **Assinaturas eletrônicas (e-Signatures)** são mais rápidas, mais fáceis e juridicamente vinculativas na maioria das jurisdições (incluindo Brasil, Portugal, Canadá e EUA).

Este guia explica como adicionar uma assinatura segura ao seu documento PDF.
        `,
        sections: [
            {
                id: 'types',
                title: 'Assinaturas Eletrônicas vs. Digitais',
                content: `
*   **Assinatura Eletrônica (Padrão):** Uma imagem da sua assinatura colocada no documento. Válida para a maioria dos contratos comerciais, locações e acordos.
*   **Assinatura Digital (Avançada):** Usa certificados criptográficos para provar identidade e garantir que o documento não foi alterado. Necessária para formulários governamentais e contratos de alta segurança.
                `
            },
            {
                id: 'how-to',
                title: 'Como Assinar Online',
                content: `
1.  **Desenhar:** Use seu mouse ou trackpad para desenhar sua assinatura.
2.  **Digitar:** Digite seu nome e escolha um estilo de fonte "manuscrita".
3.  **Enviar:** Envie uma foto da sua assinatura em papel.
Uma vez criada sua assinatura, você pode arrastá-la e soltá-la na linha de assinatura de qualquer PDF.
                `
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            sign: 'Assinar PDF'
        }
    }
});

export const SignPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/sign-pdf"
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.sign, path: lang === 'en' ? '/guides/sign-pdf' : `/${lang}/guides/sign-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<PenTool size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.sign, href: lang === 'en' ? '/guides/sign-pdf' : `/${lang}/guides/sign-pdf` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="sign-pdf" lang={lang} />
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
