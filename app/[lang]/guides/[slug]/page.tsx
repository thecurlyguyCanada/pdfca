import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_MAP, getAllGuideSlugs } from '@/lib/guideConfig';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// ISR: Revalidate every hour
// Note: Cannot use Edge Runtime with generateStaticParams in Next.js 15
export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = getAllGuideSlugs();
    const params: { lang: Locale; slug: string }[] = [];

    i18n.locales.forEach(lang => {
        slugs.forEach(slug => {
            params.push({ lang, slug });
        });
    });

    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';
    const path = `/guides/${slug}`;

    // Defensive check: ensure slug is a string before splitting
    const safeSlug = typeof slug === 'string' ? slug : '';
    const displayTitle = safeSlug ? safeSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : 'Guide';

    return {
        title: `${displayTitle} | pdfcanada.ca Guide`,
        description: `Learn more about ${slug.replace(/-/g, ' ')} with our comprehensive guide on pdfcanada.ca.`,
        alternates: {
            canonical: `${baseUrl}/${lang}${path}`,
            languages: {
                'en-CA': `${baseUrl}/en${path}`,
                'fr-CA': `${baseUrl}/fr${path}`,
                'x-default': `${baseUrl}/en${path}`,
            },
        },
    };
}

export default async function GuidePage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug } = await params;
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;
    const GuideComponent = GUIDE_MAP[slug];

    if (!GuideComponent) {
        notFound();
    }

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main className="flex-grow">
                    <GuideComponent lang={currentLang} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
