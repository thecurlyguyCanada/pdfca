import type { Metadata } from 'next';

import { HomePageServer } from '@/components/pages/HomePageServer';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structuredData';
import { Language, translations } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { SEO } from '@/components/SEO';

import { constructMetadata } from '@/lib/metadata';

// Static generation with ISR
export const dynamic = 'force-static';

// Pre-generate for both locales
export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

const metadata: Record<string, { title: string; description: string }> = {
    en: {
        title: 'Free PDF Tools Canada | Online & Secure No-Upload Service',
        description: 'The Polite Canadian PDF Tools. 100% free & secure. Merge, compress, split, and convert PDFs directly in your browser. No uploads—your files never leave your device. PIPEDA compliant.',
    },
    fr: {
        title: 'Outils PDF Gratuits Canada | Service en Ligne Sécurisé Sans Téléchargement',
        description: 'Les Outils PDF Canadiens Polis. 100% gratuits et sécurisés. Fusionnez, compressez, divisez et convertissez vos PDF directement dans votre navigateur. Aucun téléchargement—vos fichiers ne quittent jamais votre appareil.',
    },
    pt: {
        title: 'Ferramentas PDF Gratuitas Canadá | Serviço Online Seguro Sem Upload',
        description: 'As Ferramentas PDF Canadenses Educadas. 100% gratuito e seguro. Junte, comprima, divida e converta PDFs diretamente no seu navegador. Sem uploads—seus arquivos nunca saem do seu dispositivo.',
    },
};

import { URLS } from '@/config/urls';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const content = metadata[lang] || metadata.en;

    const getKeywords = (l: Locale) => {
        if (l === 'fr') {
            return [
                'outils PDF gratuits',
                'fusionner PDF en ligne',
                'compresser PDF gratuit',
                'diviser PDF en ligne',
                'convertir PDF en Word',
                'convertir PDF gratuit',
                'PDF Canada',
                'outils PDF sécurisés',
                'sans téléchargement',
                'PIPEDA',
                'outils PDF Québec',
                'outils PDF Ontario',
                'PDF gratuit Canada'
            ];
        } else if (l === 'pt') {
            return [
                'ferramentas pdf gratuitas',
                'juntar pdf online',
                'comprimir pdf',
                'dividir pdf',
                'converter pdf para word',
                'pdf canadá',
                'ferramentas pdf seguras',
                'sem upload',
                'privacidade pdf'
            ];
        }
        return [
            'free PDF tools',
            'free PDF tools Canada',
            'merge PDF online free',
            'compress PDF free',
            'split PDF online',
            'convert PDF to Word free',
            'PDF editor no upload',
            'secure PDF tools',
            'PIPEDA compliant PDF',
            'PDF tools Ontario',
            'PDF tools Toronto',
            'Canadian PDF editor',
            'privacy PDF tools'
        ];
    };

    return constructMetadata({
        title: content.title,
        description: content.description,
        path: '/',
        lang,
        keywords: getKeywords(lang),
    });
}

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;
    const t = translations[currentLang];

    // Prepare FAQs with enhanced schema
    // Prepare FAQs with enhanced schema
    const faqs = t.seo.homeFaq.map((faq: { q: string, a: string }, index: number) => ({
        q: faq.q,
        a: faq.a,
        // Add HowTo steps for process-related FAQs (Merge is index 4, Convert is index 5)
        ...((index === 4) && {
            howTo: [
                { name: t.seo.homeHowToFiles, text: t.seo.homeHowToFilesDesc },
                { name: t.seo.homeHowToOrder, text: t.seo.homeHowToOrderDesc },
                { name: t.seo.homeHowToMergeDl, text: t.seo.homeHowToMergeDlDesc }
            ]
        }),
        ...((index === 5) && {
            howTo: [
                { name: t.seo.homeHowToUpload, text: t.seo.homeHowToUploadDesc },
                { name: t.seo.homeHowToProcess, text: t.seo.homeHowToProcessDesc },
                { name: t.seo.homeHowToWordDl, text: t.seo.homeHowToWordDlDesc }
            ]
        })
    }));

    return (
        <>
            <SEO
                title={t.seo.homeTitle}
                description={t.seo.homeDesc}
                lang={currentLang}
                canonicalPath={`/${lang}`}
                faqs={faqs}
                breadcrumbs={[
                    { name: currentLang === 'fr' ? 'Accueil' : (currentLang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` }
                ]}
            />
            <HomePageServer lang={currentLang} />
        </>
    );
}
