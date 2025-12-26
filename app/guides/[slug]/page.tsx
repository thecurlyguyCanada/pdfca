import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_MAP, getAllGuideSlugs } from '@/lib/guideConfig';

import { Language } from '@/utils/i18n';

// ISR: Revalidate every hour
// Note: Cannot use Edge Runtime with generateStaticParams in Next.js 15
export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = getAllGuideSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    // Basic metadata - specific guides should ideally provide their own
    // but for now we fallback to the slug
    return {
        title: `${slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')} | pdfcanada.ca Guide`,
        description: `Learn more about ${slug.replace(/-/g, ' ')} with our comprehensive guide on pdfcanada.ca.`,
    };
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default async function GuidePage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}) {
    const [{ slug }, { lang = 'en' }] = await Promise.all([params, searchParams]);
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;
    const GuideComponent = GUIDE_MAP[slug];

    if (!GuideComponent) {
        notFound();
    }

    // Handle navigation in a way that works for both Client and Server
    // Since we are in App Router, we just let the component handle its own links
    const handleNavigate = () => {
        // Navigation should ideally be handled by Next.js Link
    };

    return (
        <>
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main className="flex-grow">
                    <GuideComponent lang={currentLang} onNavigate={handleNavigate} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
