import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';
import { SocialShare } from '@/components/SocialShare';
import { Language } from '@/utils/i18n';
import { Locale, i18n } from '@/lib/i18n-config';
import { SurahBaqarahContent } from './SurahBaqarahContent';

// Static generation
export const revalidate = 86400; // Revalidate daily

export function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

// SEO Metadata - Targeting high-volume keywords
export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = 'https://www.pdfcanada.ca';

    const content = {
        en: {
            title: 'Surah Baqarah PDF - Full Surah Al-Baqarah Download Free',
            description: 'Download Surah Baqarah PDF free. Full Surah Al-Baqarah with Arabic text. Read online or download the complete Chapter 2 of the Holy Quran. Last 2 ayat included.',
        },
        fr: {
            title: 'Sourate Baqarah PDF - Télécharger Sourate Al-Baqarah Gratuit',
            description: 'Téléchargez Sourate Baqarah PDF gratuitement. Sourate Al-Baqarah complète avec texte arabe. Lisez en ligne ou téléchargez le chapitre 2 du Saint Coran.',
        },
        pt: {
            title: 'Surah Baqarah PDF - Baixar Surah Al-Baqarah Completa Grátis',
            description: 'Baixe Surah Baqarah PDF gratuitamente. Surah Al-Baqarah completa com texto em árabe. Leia online ou baixe o capítulo 2 do Alcorão Sagrado.',
        }
    };

    const meta = content[lang] || content.en;

    const getKeywords = (l: Locale) => {
        if (l === 'fr') {
            return [
                'sourate baqarah pdf',
                'sourate al baqarah pdf',
                'sourate baqarah télécharger',
                'coran chapitre 2 pdf',
                'sourate baqarah arabe',
                'sourate baqarah français'
            ];
        } else if (l === 'pt') {
            return [
                'surah baqarah pdf',
                'surah al baqarah pdf',
                'baixar surah baqarah',
                'alcorão capítulo 2 pdf',
                'surah baqarah árabe',
                'surah baqarah tradução'
            ];
        }
        return [
            // Primary keywords (18,100+ monthly searches combined)
            'surah baqarah pdf',
            'surah baqarah full pdf',
            'surah al baqarah pdf',
            'surah baqarah pdf download',
            'surah baqarah last 2 ayat pdf',
            'surah baqarah last 3 ayat pdf',
            'surah baqarah with urdu translation pdf',
            'surah baqarah in english pdf',
            'surah baqarah in hindi pdf',
            'surah baqarah english translation pdf',
            'baqarah surah pdf',
            'quran surah baqarah pdf',
            'surah baqarah pdf download free',
            'surah baqarah full pdf download',
            'last 2 ayats of surah baqarah pdf',
            'last two ayat of surah baqarah pdf',
            'surah baqarah last ruku pdf',
            'surah baqarah with tajweed pdf'
        ];
    };

    return {
        title: meta.title,
        description: meta.description,
        keywords: getKeywords(lang),
        alternates: {
            canonical: `${baseUrl}/${lang}/surah-baqarah-pdf`,
            languages: {
                'en-CA': `${baseUrl}/en/surah-baqarah-pdf`,
                'fr-CA': `${baseUrl}/fr/surah-baqarah-pdf`,
                'pt-BR': `${baseUrl}/pt/surah-baqarah-pdf`,
                'x-default': `${baseUrl}/en/surah-baqarah-pdf`,
            },
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${baseUrl}/${lang}/surah-baqarah-pdf`,
            type: 'article',
            locale: lang === 'fr' ? 'fr_CA' : (lang === 'pt' ? 'pt_BR' : 'en_CA'),
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: 'Surah Baqarah PDF Download',
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

export default async function SurahBaqarahPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const currentLang = lang as Language;

    const content = {
        en: {
            title: 'Surah Baqarah PDF',
            subtitle: 'The Cow - Chapter 2 of the Holy Quran',
            description: 'Download or read Surah Al-Baqarah online. The longest chapter of the Quran with 286 verses.',
            features: [
                'Complete Surah Al-Baqarah (286 Ayat)',
                'Clear Arabic text',
                'High-quality PDF format',
                'Free download - no signup required',
                'Includes last 2 ayat (verses 285-286)',
                'Privacy-first - processed locally'
            ],
            aboutTitle: 'About Surah Al-Baqarah',
            aboutText: 'Surah Al-Baqarah (The Cow) is the second and longest chapter of the Holy Quran, containing 286 verses. It was revealed in Madinah and covers many aspects of Islamic law, guidance, and stories of previous prophets. The last two verses (Ayat 285-286) are particularly significant and are often recited for protection.',
            lastAyatTitle: 'Last 2 Ayat of Surah Baqarah',
            lastAyatText: 'The final two verses of Surah Al-Baqarah are among the most powerful verses in the Quran. The Prophet Muhammad (PBUH) said: "Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him."',
            faqTitle: 'Frequently Asked Questions',
        },
        fr: {
            title: 'Sourate Baqarah PDF',
            subtitle: 'La Vache - Chapitre 2 du Saint Coran',
            description: 'Téléchargez ou lisez Sourate Al-Baqarah en ligne. Le plus long chapitre du Coran avec 286 versets.',
            features: [
                'Sourate Al-Baqarah complète (286 Ayat)',
                'Texte arabe clair',
                'Format PDF haute qualité',
                'Téléchargement gratuit - sans inscription',
                'Inclut les 2 derniers ayat (versets 285-286)',
                'Respect de la vie privée - traitement local'
            ],
            aboutTitle: 'À propos de Sourate Al-Baqarah',
            aboutText: 'Sourate Al-Baqarah (La Vache) est le deuxième et le plus long chapitre du Saint Coran, contenant 286 versets. Elle a été révélée à Médine et couvre de nombreux aspects de la loi islamique, des conseils et des histoires des prophètes précédents.',
            lastAyatTitle: 'Les 2 derniers Ayat de Sourate Baqarah',
            lastAyatText: 'Les deux derniers versets de Sourate Al-Baqarah sont parmi les plus puissants du Coran. Le Prophète Muhammad (PSL) a dit: "Celui qui récite les deux derniers versets de Sourate Al-Baqarah la nuit, ils lui suffiront."',
            faqTitle: 'Questions Fréquentes',
        },
        pt: {
            title: 'Surah Baqarah PDF',
            subtitle: 'A Vaca - Capítulo 2 do Alcorão Sagrado',
            description: 'Baixe ou leia Surah Al-Baqarah online. O capítulo mais longo do Alcorão com 286 versos.',
            features: [
                'Surah Al-Baqarah completa (286 Ayat)',
                'Texto em árabe claro',
                'Formato PDF de alta qualidade',
                'Download gratuito - sem cadastro',
                'Inclui os 2 últimos ayat (versos 285-286)',
                'Privacidade respeitada - processamento local'
            ],
            aboutTitle: 'Sobre Surah Al-Baqarah',
            aboutText: 'Surah Al-Baqarah (A Vaca) é o segundo e mais longo capítulo do Sagrado Alcorão, contendo 286 versos. Foi revelado em Medina e abrange muitos aspectos da lei islâmica, conselhos e histórias de profetas anteriores.',
            lastAyatTitle: 'Os 2 Últimos Ayat da Surah Baqarah',
            lastAyatText: 'Os dois últimos versos da Surah Al-Baqarah estão entre os mais poderosos do Alcorão. O Profeta Muhammad (que a paz esteja com ele) disse: "Quem recitar os dois últimos versos da Surah Al-Baqarah à noite, eles lhe bastarão."',
            faqTitle: 'Perguntas Frequentes',
        }
    };

    const t = content[currentLang] || content.en;

    const getFaqs = (l: string) => {
        if (l === 'fr') {
            return [
                {
                    q: 'Comment télécharger Sourate Baqarah en PDF?',
                    a: 'Cliquez sur le bouton "Télécharger PDF" ci-dessus pour enregistrer Sourate Al-Baqarah complète sur votre appareil. Le téléchargement est instantané et gratuit.'
                },
                {
                    q: 'Ce PDF inclut-il les 2 derniers ayat?',
                    a: 'Oui, ce PDF inclut la Sourate Al-Baqarah complète avec les 286 versets, y compris les deux derniers ayat puissants (versets 285-286).'
                },
                {
                    q: 'Ce PDF de Sourate Baqarah est-il gratuit?',
                    a: 'Oui, absolument gratuit. Pas d\'inscription, pas de paiement, pas de restrictions.'
                }
            ];
        } else if (l === 'pt') {
            return [
                {
                    q: 'Como baixar Surah Baqarah em PDF?',
                    a: 'Clique no botão "Baixar PDF" acima para salvar a Surah Al-Baqarah completa no seu dispositivo. O download é instantâneo e gratuito.'
                },
                {
                    q: 'Este PDF inclui os 2 últimos ayat?',
                    a: 'Sim, este PDF inclui a Surah Al-Baqarah completa com todos os 286 versos, incluindo os poderosos dois últimos ayat.'
                },
                {
                    q: 'Este PDF da Surah Baqarah é grátis?',
                    a: 'Sim, absolutamente grátis. Sem cadastro, sem pagamento, sem restrições.'
                }
            ];
        }
        return [
            {
                q: 'How do I download Surah Baqarah PDF?',
                a: 'Click the "Download PDF" button above to save the complete Surah Al-Baqarah to your device. The download is instant and free.'
            },
            {
                q: 'Does this include the last 2 ayat of Surah Baqarah?',
                a: 'Yes, this PDF includes the complete Surah Al-Baqarah with all 286 verses, including the powerful last two ayat (verses 285-286).'
            },
            {
                q: 'Is this Surah Baqarah PDF free to download?',
                a: 'Yes, absolutely free. No signup, no payment, no restrictions. Download and share as many times as you like.'
            },
            {
                q: 'Can I read Surah Baqarah online without downloading?',
                a: 'Yes! Use the "View PDF Online" button to read directly in your browser. You can zoom, navigate pages, and even listen to audio.'
            },
            {
                q: 'Is this available in Urdu, Hindi, or English translation?',
                a: 'This PDF contains the original Arabic text. For translations, we recommend using a separate translation guide alongside this PDF.'
            }
        ];
    };

    const faqs = getFaqs(currentLang);

    const breadcrumbs = [
        { name: currentLang === 'fr' ? 'Accueil' : (currentLang === 'pt' ? 'Início' : 'Home'), path: `/${lang}` },
        { name: t.title, path: `/${lang}/surah-baqarah-pdf` },
    ];

    return (
        <>
            <SEO
                title={t.title}
                description={t.description}
                lang={currentLang}
                canonicalPath={`/${lang}/surah-baqarah-pdf`}
                breadcrumbs={breadcrumbs}
                faqs={faqs.map(f => ({ q: f.q, a: f.a }))}
                datePublished="2026-01-08"
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
                        <SurahBaqarahContent lang={currentLang} />

                        {/* Social Share */}
                        <div className="mt-8 flex justify-center">
                            <SocialShare
                                url={`https://www.pdfcanada.ca/${lang}/surah-baqarah-pdf`}
                                title={t.title}
                                lang={currentLang}
                            />
                        </div>

                        {/* Features */}
                        <div className="mt-16 grid md:grid-cols-2 gap-6">
                            {t.features.map((feature: string, i: number) => (
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

                        {/* Last 2 Ayat Section */}
                        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.lastAyatTitle}</h2>
                            <p className="text-gray-600 leading-relaxed">{t.lastAyatText}</p>
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
