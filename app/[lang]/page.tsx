import type { Metadata } from 'next';

import { HomePageServer } from '@/components/pages/HomePageServer';
import { generateWebsiteSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structuredData';
import { Language, translations } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { SEO } from '@/components/SEO';
import { HOME_FAQ } from '@/lib/homeFaq';
import { TOOL_GROUPS } from '@/lib/toolGroups';
import { isToolLive } from '@/lib/retired';

import { constructMetadata } from '@/lib/metadata';

// Static generation with ISR
export const dynamic = 'force-static';

// Pre-generate for both locales
export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

const metadata: Record<string, { title: string; description: string }> = {
    en: {
        title: 'PDF Canada: Free PDF Tools in English and French, No Upload',
        description: 'Free Canadian PDF tools in English and French that run in your browser: compress for IRCC, merge, OCR, sign, OFX to Excel. No upload, no sign-up, no watermark.',
    },
    fr: {
        title: 'PDF Canada : outils PDF gratuits en français, sans envoi',
        description: 'Outils PDF canadiens gratuits, en français et en anglais, dans votre navigateur : compresser pour IRCC, fusionner, OCR, signer, OFX en Excel. Sans envoi ni inscription.',
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
            'PDF tools Ontario',
            'PDF tools Toronto',
            'Canadian PDF editor',
            'privacy PDF tools',
            'local PDF processing',
            'offline PDF tools',
            'browser-based PDF editor'
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

    const l = currentLang === 'fr' ? 'fr' : 'en';
    const faqs = HOME_FAQ[l].map((f) => ({ q: f.q, a: f.a }));
    // Homepage adds an ItemList of every live tool (playbook "Schema on every tool page").
    const itemList = {
        '@type': 'ItemList',
        '@id': `${URLS.DOMAIN}/${l}#tools`,
        name: l === 'fr' ? 'Outils PDF' : 'PDF tools',
        itemListElement: TOOL_GROUPS.flatMap((g) => g.tools).filter((x) => isToolLive(x.slug)).map((x, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: x.name[l],
            description: x.short[l],
            url: `${URLS.DOMAIN}/${l}/${x.slug}`,
        })),
    };

    return (
        <>
            <SEO
                title={t.seo.homeTitle}
                description={t.seo.homeDesc}
                lang={currentLang}
                canonicalPath={`/${lang}`}
                faqs={faqs}
                schema={itemList}
                breadcrumbs={[
                    { name: currentLang === 'fr' ? 'Accueil' : (currentLang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` }
                ]}
            />
            <HomePageServer lang={currentLang} />
        </>
    );
}
