import type { Metadata } from 'next';
import { getAllGuideSlugs } from '@/lib/guideConfig';
import { getAllToolSlugs } from '@/lib/toolConfig';
import { getToolArticle } from '@/lib/toolArticles';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GuidesIndexPage } from '@/components/pages/GuidesIndexPage';
import { SEO } from '@/components/SEO';

// ISR: Revalidate every hour
// Static generation
export const dynamic = 'force-static';

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';

    const metadata: Record<string, { title: string; description: string }> = {
        en: {
            title: 'All PDF Guides & Tutorials | pdfcanada.ca',
            description: 'Browse our complete collection of PDF guides. Learn how to merge, split, compress, convert, and secure PDFs with expert tutorials.',
        },
        fr: {
            title: 'Tous les Guides & Tutoriels PDF | pdfcanada.ca',
            description: 'Parcourez notre collection complète de guides PDF. Apprenez à fusionner, diviser, compresser, convertir et sécuriser des PDF avec des tutoriels experts.',
        },
        de: {
            title: 'Alle PDF-Anleitungen & Tutorials | pdfcanada.ca',
            description: 'Durchstöbern Sie unsere komplette Sammlung von PDF-Anleitungen. Lernen Sie, wie Sie PDFs zusammenführen, teilen, komprimieren, konvertieren und sichern.',
        },
        pt: {
            title: 'Todos os Guias & Tutoriais PDF | pdfcanada.ca',
            description: 'Navegue por nossa coleção completa de guias PDF. Aprenda a juntar, dividir, comprimir, converter e proteger PDFs com tutoriais especializados.',
        },
    };

    const content = metadata[lang] || metadata.en;

    return {
        title: content.title,
        description: content.description,
        alternates: {
            canonical: `${baseUrl}/${lang}/guides`,
            languages: {
                'en-CA': `${baseUrl}/en/guides`,
                'fr-CA': `${baseUrl}/fr/guides`,
                'pt-BR': `${baseUrl}/pt/guides`,
                'x-default': `${baseUrl}/en/guides`,
            },
        },
    };
}

export default async function GuidesPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    const seoData: Record<string, { title: string; desc: string }> = {
        en: {
            title: 'All PDF Guides & Tutorials',
            desc: 'Browse our complete collection of PDF guides. Learn how to merge, split, compress, convert, and secure PDFs with expert tutorials.',
        },
        fr: {
            title: 'Tous les Guides & Tutoriels PDF',
            desc: 'Parcourez notre collection complète de guides PDF. Apprenez à fusionner, diviser, compresser, convertir et sécuriser des PDF.',
        },
        de: {
            title: 'Alle PDF-Anleitungen & Tutorials',
            desc: 'Durchstöbern Sie unsere komplette Sammlung von PDF-Anleitungen. Lernen Sie, wie Sie PDFs verarbeiten.',
        },
        pt: {
            title: 'Todos os Guias & Tutoriais PDF',
            desc: 'Navegue por nossa coleção completa de guias PDF. Aprenda a juntar, dividir, comprimir, converter e proteger PDFs.',
        },
    };

    const t = seoData[currentLang] || seoData.en;

    // Course schema - positions the guide collection as an educational series
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": currentLang === 'fr' ? "Maîtrise PDF Complète" : (currentLang === 'pt' ? "Dominío Completo de PDF" : "Complete PDF Mastery Course"),
        "description": t.desc,
        "provider": {
            "@type": "Organization",
            "name": "pdfcanada.ca",
            "url": "https://www.pdfcanada.ca"
        },
        "educationalLevel": "Beginner to Advanced",
        "isAccessibleForFree": true,
        "inLanguage": currentLang === 'fr' ? "fr-CA" : (currentLang === 'pt' ? "pt-BR" : "en-CA"),
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT3H"
        },
        "about": [
            { "@type": "Thing", "name": "PDF Processing" },
            { "@type": "Thing", "name": "Document Security" },
            { "@type": "Thing", "name": "File Conversion" }
        ]
    };

    // ItemList schema for the guide collection  
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t.title,
        "description": t.desc,
        "numberOfItems": getAllToolSlugs().filter((s) => getToolArticle(s, lang)).length + getAllGuideSlugs().length,
        "itemListElement": [
            ...getAllToolSlugs().filter((s) => getToolArticle(s, lang)).map((slug) => `https://www.pdfcanada.ca/${lang}/${slug}`),
            ...getAllGuideSlugs().map((slug) => `https://www.pdfcanada.ca/${lang}/guides/${slug}`),
        ].map((url, i) => ({ "@type": "ListItem", "position": i + 1, url }))
    };

    return (
        <>
            <SEO
                title={t.title}
                description={t.desc}
                lang={currentLang}
                canonicalPath="/guides"
                breadcrumbs={[
                    { name: currentLang === 'fr' ? 'Accueil' : (currentLang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
                    { name: currentLang === 'fr' ? 'Guides' : (currentLang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides` }
                ]}
                schema={[courseSchema, itemListSchema]}
            />
            <div className="mesh-bg" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />
                <main className="flex-grow">
                    <GuidesIndexPage lang={currentLang} toolGuides={getAllToolSlugs().map((slug) => {
                        const a = getToolArticle(slug, lang);
                        if (!a) return null;
                        return { slug, href: `/${lang}/${slug}`, titleEn: a.meta.h1, titleFr: a.meta.h1, descEn: a.meta.lead, descFr: a.meta.lead, category: /-to-/.test(slug) ? 'Conversion' as const : /unlock|sign|fillable/.test(slug) ? 'Privacy & Security' as const : 'Editing' as const, icon: /-to-/.test(slug) ? '🔄' : /unlock|sign|fillable/.test(slug) ? '🔏' : '✂️' };
                    }).filter((g): g is NonNullable<typeof g> => g !== null)} />
                </main>
                <Footer lang={currentLang} />
            </div>
        </>
    );
}
