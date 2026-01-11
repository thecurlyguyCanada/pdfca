import React from 'react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { ToolPromo } from '../../ToolPromo';

export interface GuideSection {
    id: string;
    title: string;
    content: string;
}

export interface GuideContent {
    seoTitle: string;
    seoDesc: string;
    title: string;
    subtitle: string;
    breadcrumbHome: string;
    breadcrumbGuides: string;
    breadcrumbTool: string;
    intro: string;
    sections: GuideSection[];
}

interface GuideTemplateProps {
    lang: Language;
    slug: string; // e.g., 'analyze-pdf'
    icon: React.ReactNode;
    content: GuideContent;
}

export const GuideTemplate: React.FC<GuideTemplateProps> = ({ lang, slug, icon, content }) => {
    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={content.seoTitle}
                description={content.seoDesc}
                canonicalPath={`/guides/${slug}`}
                lang={lang}
                breadcrumbs={[
                    { name: content.breadcrumbHome, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: content.breadcrumbGuides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: content.breadcrumbTool, path: lang === 'en' ? `/guides/${slug}` : `/${lang}/guides/${slug}` }
                ]}
            />
            <PageLayout
                title={content.title}
                subtitle={content.subtitle}
                icon={icon}
                breadcrumbs={[
                    { name: content.breadcrumbHome, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: content.breadcrumbGuides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: content.breadcrumbTool, href: lang === 'en' ? `/guides/${slug}` : `/${lang}/guides/${slug}` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool={slug} lang={lang} />
                    <MarkdownContent content={content.intro} />

                    {content.sections.map((section) => (
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
