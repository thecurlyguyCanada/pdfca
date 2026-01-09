import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';
import { SocialShare } from '@/components/SocialShare';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { SurahYasinContent } from '@/components/pages/surah-yasin/SurahYasinContent';

// Static generation
export const revalidate = 86400; // Revalidate daily

export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

// SEO Metadata - Targeting high-volume keywords for Surah Yasin
export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';

    const content = {
        en: {
            title: 'Surah Yasin PDF - Full Surah Ya-Sin Download Free',
            description: 'Download Surah Yasin PDF free. Read Surah Ya-Sin full text online or download. The Heart of the Quran (Chapter 36). Clear Arabic text.',
        },
        fr: {
            title: 'Sourate Yasin PDF - Télécharger Sourate Ya-Sin Gratuit',
            description: 'Téléchargez Sourate Yasin PDF gratuitement. Lisez Sourate Ya-Sin (Le Cœur du Coran) en ligne. Texte arabe clair et complet.',
        }
    };

    const meta = content[lang] || content.en;

    // Comprehensive keywords targeting all search variations
    const keywords = lang === 'fr'
        ? [
            'sourate yasin pdf',
            'sourate ya-sin pdf',
            'sourate yasin télécharger',
            'sourate yasin complet pdf',
            'sourate 36 pdf',
            'sourate yasin arabe pdf',
            'télécharger sourate yasin',
            'lire sourate yasin pdf'
        ]
        : [
            // High volume keywords based on research
            'surah yasin pdf',
            'surah yasin full pdf',
            'yasin surah full pdf',
            'full surah yasin download pdf',
            'quran surah yasin pdf',
            'surah al yasin pdf',
            'surah e yasin pdf',
            'surah yasin arabic pdf',
            'surah yasin download pdf',
            'yasin surah pdf',
            'pdf surah yasin',
            'surah yasin full pdf download',
            'surah yasin pdf free download',
            'surah yasin pdf english',
            'surah yasin read online pdf',
            'heart of quran surah yasin pdf'
        ];

    return {
        title: meta.title,
        description: meta.description,
        keywords: keywords,
        alternates: {
            canonical: `${baseUrl}/${lang}/surah-yasin-pdf`,
            languages: {
                'en-CA': `${baseUrl}/en/surah-yasin-pdf`,
                'fr-CA': `${baseUrl}/fr/surah-yasin-pdf`,
                'x-default': `${baseUrl}/en/surah-yasin-pdf`,
            },
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${baseUrl}/${lang}/surah-yasin-pdf`,
            type: 'article',
            locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: 'Surah Yasin PDF Download',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function SurahYasinPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = (lang === 'fr' ? 'fr' : 'en') as Language;

    const content = {
        en: {
            title: 'Surah Yasin PDF',
            subtitle: 'The Heart of the Quran - Chapter 36',
            description: 'Download or read Surah Yasin (Ya-Sin) online. Known as the "Heart of the Quran", this chapter contains 83 verses and brings immense blessings.',
            features: [
                'Complete Surah Yasin (83 Ayat)',
                'Clear Arabic text',
                'High-quality PDF format',
                'Free download - no signup required',
                'Mobile optimized reading',
                'Privacy-first - processed locally'
            ],
            aboutTitle: 'About Surah Yasin',
            aboutText: 'Surah Yasin (Ya-Sin) is the 36th chapter of the Quran. It is often referred to as the "Heart of the Quran" (Qalb al-Quran) due to its profound message about the sovereignty of Allah, the revelation of the Quran, and the reality of the Afterlife. It is a Meccan Surah consisting of 83 verses.',
            benefitsTitle: 'Benefits of Reciting Surah Yasin',
            benefitsText: 'Prophet Muhammad (PBUH) said: "Everything has a heart, and the heart of the Quran is Yasin. I would love that it be in the heart of every person of my people." It is often recited for forgiveness, ease in difficult times, and for the deceased.',
            faqTitle: 'Frequently Asked Questions',
        },
        fr: {
            title: 'Sourate Yasin PDF',
            subtitle: 'Le Cœur du Coran - Chapitre 36',
            description: 'Téléchargez ou lisez la Sourate Yasin (Ya-Sin) en ligne. Connue comme le "Cœur du Coran", ce chapitre contient 83 versets et apporte d\'immenses bénédictions.',
            features: [
                'Sourate Yasin complète (83 Ayat)',
                'Texte arabe clair',
                'Format PDF haute qualité',
                'Téléchargement gratuit - sans inscription',
                'Lecture optimisée pour mobile',
                'Respect de la vie privée'
            ],
            aboutTitle: 'À propos de Sourate Yasin',
            aboutText: 'La Sourate Yasin (Ya-Sin) est le 36ème chapitre du Coran. Elle est souvent appelée le "Cœur du Coran" (Qalb al-Quran) en raison de son message profond sur la souveraineté d\'Allah, la révélation du Coran et la réalité de l\'Au-delà. C\'est une sourate mecquoise composée de 83 versets.',
            benefitsTitle: 'Bienfaits de la récitation de Sourate Yasin',
            benefitsText: 'Le Prophète Muhammad (PSL) a dit : "Toute chose a un cœur, et le cœur du Coran est Yasin. J\'aimerais qu\'elle soit dans le cœur de chaque personne de mon peuple." Elle est souvent récitée pour le pardon, le soulagement dans les moments difficiles et pour les défunts.',
            faqTitle: 'Questions Fréquentes',
        }
    };

    const t = content[currentLang];

    const faqs = currentLang === 'en' ? [
        {
            q: 'How do I download Surah Yasin PDF?',
            a: 'Click the "Download PDF" button above to save the complete Surah Yasin to your device. The download is instant and free.'
        },
        {
            q: 'Is this the full Surah Yasin?',
            a: 'Yes, this PDF includes the complete Surah Yasin with all 83 verses in clear Arabic text.'
        },
        {
            q: 'Why is Surah Yasin called the Heart of the Quran?',
            a: 'It is called the Heart of the Quran because it eloquently summarizes the core beliefs of Islam: Tawhid (Oneness of God), Risalah (Prophethood), and Akhirah (Afterlife).'
        },
        {
            q: 'Can I read on my mobile phone?',
            a: 'Yes! The PDF viewer is optimized for all devices, including mobile phones and tablets. You can pinch to zoom for easier reading.'
        },
        {
            q: 'Is it free?',
            a: 'Yes, absolutely free. We believe in making Quranic resources accessible to everyone without cost.'
        }
    ] : [
        {
            q: 'Comment télécharger Sourate Yasin en PDF?',
            a: 'Cliquez sur le bouton "Télécharger PDF" ci-dessus pour enregistrer la Sourate Yasin complète sur votre appareil. Le téléchargement est instantané et gratuit.'
        },
        {
            q: 'Est-ce la Sourate Yasin complète?',
            a: 'Oui, ce PDF inclut la Sourate Yasin complète avec les 83 versets en texte arabe clair.'
        },
        {
            q: 'Pourquoi la Sourate Yasin est-elle appelée le Cœur du Coran?',
            a: 'Elle est appelée le Cœur du Coran car elle résume avec éloquence les croyances fondamentales de l\'Islam : le Tawhid (l\'Unicité de Dieu), la Risalah (la Prophétie) et l\'Akhirah (l\'Au-delà).'
        },
        {
            q: 'Est-ce gratuit?',
            a: 'Oui, absolument gratuit. Nous croyons qu\'il est important de rendre les ressources coraniques accessibles à tous sans frais.'
        }
    ];

    const breadcrumbs = [
        { name: currentLang === 'fr' ? 'Accueil' : 'Home', path: `/${lang}` },
        { name: t.title, path: `/${lang}/surah-yasin-pdf` },
    ];

    return (
        <>
            <SEO
                title={t.title}
                description={t.description}
                lang={currentLang}
                canonicalPath={`/${lang}/surah-yasin-pdf`}
                breadcrumbs={breadcrumbs}
                faqs={faqs.map(f => ({ q: f.q, a: f.a }))}
                datePublished="2026-01-09"
            />

            <div className="mesh-bg" aria-hidden="true" />
            <div className="min-h-screen flex flex-col">
                <Header lang={currentLang} />

                <main id="main-content" className="flex-grow">
                    <Breadcrumb
                        lang={currentLang}
                        items={[{ name: t.title }]}
                    />

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                {t.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-2">
                                {t.subtitle}
                            </p>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                {t.description}
                            </p>
                        </div>

                        {/* PDF Viewer */}
                        <SurahYasinContent lang={currentLang} />

                        {/* Social Share */}
                        <div className="mt-8 flex justify-center">
                            <SocialShare
                                url={`https://www.pdfcanada.ca/${lang}/surah-yasin-pdf`}
                                title={t.title}
                                lang={currentLang}
                            />
                        </div>

                        {/* Features */}
                        <div className="mt-16 grid md:grid-cols-2 gap-6">
                            {t.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* About Section */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
                            <p className="text-gray-600 leading-relaxed">{t.aboutText}</p>
                        </div>

                        {/* Benefits Section - Specific to Yasin */}
                        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.benefitsTitle}</h2>
                            <p className="text-gray-600 leading-relaxed italic">"{t.benefitsText}"</p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.faqTitle}</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                        <p className="text-gray-600">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                <Footer lang={currentLang} />
            </div>
        </>
    );
}
