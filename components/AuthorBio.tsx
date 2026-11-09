import Link from 'next/link';
import { MapPin, ExternalLink, CheckCircle, Award, Shield, Zap, Heart } from 'lucide-react';
import { Language } from '../utils/i18n';
import { AUTHOR } from '../config/author';

interface AuthorBioProps {
    lang: Language;
}

const getContent = () => ({
    en: {
        writtenBy: "Written by",
        authorName: AUTHOR.name,
        location: "Toronto, Canada",
        role: AUTHOR.role.en,
        bio: "pdfcanada.ca is a one-person project. I build the tools, write each guide against the live tool and re-check it when the tool changes. Files stay on your device because the site has no server that receives them.",
        verified: "Independent, Toronto-based",
        expertiseAreas: ["Browser-side PDF processing", "pdf-lib and pdf.js", "Canadian document workflows", "Plain-language guides"],
        philosophyTitle: "How the site works",
        philosophy: [
            { title: "Nothing uploaded", desc: "Files are processed in your browser tab", icon: Shield },
            { title: "No account", desc: "Free, no sign-up, no watermark", icon: Zap },
            { title: "Checked dates", desc: "Every guide shows when it was last verified", icon: Heart }
        ]
    },
    fr: {
        writtenBy: "Rédigé par",
        authorName: AUTHOR.name,
        location: "Toronto, Canada",
        role: AUTHOR.role.fr,
        bio: "pdfcanada.ca est un projet d'une seule personne. Je conçois les outils, je rédige chaque guide à partir de l'outil en ligne et je le revérifie quand l'outil change. Vos fichiers restent sur votre appareil parce que le site n'a aucun serveur qui les reçoit.",
        verified: "Indépendant, basé à Toronto",
        expertiseAreas: ["Traitement PDF dans le navigateur", "pdf-lib et pdf.js", "Documents canadiens", "Guides en langage clair"],
        philosophyTitle: "Comment fonctionne le site",
        philosophy: [
            { title: "Rien n'est téléversé", desc: "Les fichiers sont traités dans votre onglet", icon: Shield },
            { title: "Sans compte", desc: "Gratuit, sans inscription, sans filigrane", icon: Zap },
            { title: "Dates vérifiées", desc: "Chaque guide indique sa dernière vérification", icon: Heart }
        ]
    },
    pt: {
        writtenBy: "Escrito por",
        authorName: AUTHOR.name,
        location: "Toronto, Canadá",
        role: AUTHOR.role.pt,
        bio: "pdfcanada.ca é um projeto de uma pessoa. Eu crio as ferramentas e escrevo cada guia com base na ferramenta real.",
        verified: "Independente, Toronto",
        expertiseAreas: ["Processamento de PDF no navegador", "pdf-lib e pdf.js"],
        philosophyTitle: "Como o site funciona",
        philosophy: [
            { title: "Nada é enviado", desc: "Os arquivos são processados no seu navegador", icon: Shield },
            { title: "Sem conta", desc: "Grátis, sem cadastro, sem marca d'água", icon: Zap },
            { title: "Datas verificadas", desc: "Cada guia mostra quando foi verificado", icon: Heart }
        ]
    }
});

export const AuthorBio: React.FC<AuthorBioProps> = ({ lang }) => {
    const content = getContent();
    const t = content[lang] || content.en;

    return (
        <section className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800">
            <div className="relative overflow-hidden bg-white dark:bg-gray-950 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
                {/* Subtle Mesh Gradient Background */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-canada-red/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-[80px]" />

                <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-12 h-[2px] bg-canada-red/30" />
                        <p className="text-xs font-black text-canada-red uppercase tracking-[0.2em]">
                            {t.writtenBy}
                        </p>
                    </div>

                    {/* Main Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                        {/* Left: Identity (4 cols) */}
                        <div className="lg:col-span-4 flex flex-col items-start gap-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-br from-canada-red to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <div className="relative w-24 h-24 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-canada-red/10 to-transparent" />
                                    <span className="text-canada-red font-black text-3xl tracking-tighter select-none">{AUTHOR.initials}</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-4 border-white dark:border-gray-950 shadow-lg">
                                    <CheckCircle size={16} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-2">
                                    {t.authorName}
                                </h3>
                                <p className="text-sm text-canada-red font-black uppercase tracking-widest mb-3">{t.role}</p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800">
                                    <MapPin size={12} className="text-canada-red" />
                                    {t.location}
                                </span>
                            </div>
                        </div>

                        {/* Right: Bio & Expertise (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                            <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium italic opacity-90 mb-8 border-l-4 border-gray-100 dark:border-gray-800 pl-6 py-2">
                                &quot;{t.bio}&quot;
                            </blockquote>

                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 bg-green-500/5 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg text-xs font-black border border-green-500/10">
                                    <Award size={14} />
                                    {t.verified}
                                </div>
                                {t.expertiseAreas.slice(0, 4).map((area, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Philosophy Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-gray-800">
                        {t.philosophy.map((item: any, i: number) => (
                            <div key={i} className="group p-6 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-canada-red/20 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
                                        <item.icon size={16} className="text-canada-red" />
                                    </div>
                                    <span className="font-black text-sm text-gray-900 dark:text-white tracking-tight">{item.title}</span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center md:justify-end">
                        <Link
                            href={`/${lang}/about`}
                            className="inline-flex items-center gap-2 text-canada-red hover:text-canada-darkRed font-black text-sm uppercase tracking-wider group transition-colors"
                        >
                            {lang === 'fr' ? 'À propos' : 'About the author'}
                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Author schema data for SEO - Enhanced with E-A-T signals
export const getAuthorSchema = () => ({
    "@type": "Organization",
    "name": "PDFCanada.ca",
    "url": "https://www.pdfcanada.ca",
    "logo": {
        "@type": "ImageObject",
        "url": "https://www.pdfcanada.ca/android-chrome-512x512.png",
        "width": 512,
        "height": 512
    },
    "sameAs": [
        "https://www.pdfcanada.ca",
        "https://twitter.com/pdfcanada"
    ],
    "knowsAbout": [
        "PDF Processing",
        "Document Security",
        "PIPEDA Compliance",
        "Browser-Based Technology",
        "Data Privacy",
        "Optical Character Recognition"
    ],
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA"
    }
});

export default AuthorBio;

