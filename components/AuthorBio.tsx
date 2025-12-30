import Link from 'next/link';
import { MapPin, ExternalLink, CheckCircle, Award, Shield, Zap, Heart } from 'lucide-react';
import { Language } from '../utils/i18n';

interface AuthorBioProps {
    lang: Language;
}

const getContent = () => ({
    en: {
        writtenBy: "Article Authored By",
        authorName: "The PDFCanada.ca Engineering Team",
        location: "Toronto, Canada",
        role: "Senior PDF & Security Specialists",
        bio: "PDFCanada.ca was established in 2024 to disrupt the exploitative 'upload-and-harvest' model of modern PDF tools. Our engineering team, based in Ontario, specializes in high-performance WebAssembly (WASM) implementations that bring server-grade PDF manipulation directly to the user's browser, ensuring absolute data sovereignty.",
        verified: "Verified Canadian Entity",
        learnMore: "Full Mission Statement",
        expertise: "Core Expertise",
        expertiseAreas: ["WASM PDF Engines", "Client-Side Encryption", "PIPEDA / HIPAA Compliance", "OCR Neural Networks", "Web Standards Mastery"],
        credentials: ["Certified Software Architects", "Cybersecurity Advocacy", "Legacy System Harmonization"],
        philosophyTitle: "Our Engineering Oath",
        philosophy: [
            { title: "Privacy First", desc: "No data ever reaches a server", icon: Shield },
            { title: "Zero Lag", desc: "Instant local processing", icon: Zap },
            { title: "Accessibility", desc: "Free tools for every Canadian", icon: Heart }
        ]
    },
    fr: {
        writtenBy: "Article Rédigé Par",
        authorName: "L'Équipe d'Ingénierie PDFCanada.ca",
        location: "Toronto, Canada",
        role: "Spécialistes Seniors PDF et Sécurité",
        bio: "PDFCanada.ca a été établi en 2024 pour perturber le modèle exploiteur de 'téléchargement et récolte' des outils PDF modernes. Notre équipe d'ingénierie, basée en Ontario, se spécialise dans les implémentations WebAssembly (WASM) de haute performance qui apportent la manipulation PDF de qualité serveur directement dans le navigateur de l'utilisateur.",
        verified: "Entité Canadienne Vérifiée",
        learnMore: "Énoncé de Mission Complet",
        expertise: "Expertise Fondamentale",
        expertiseAreas: ["Moteurs PDF WASM", "Chiffrement Côté Client", "Conformité LPRPDE / HIPAA", "Réseaux Neuronaux OCR", "Maîtrise des Normes Web"],
        credentials: ["Architectes Logiciels Certifiés", "Plaidoyer Cybersécurité", "Harmonisation des Systèmes Hérités"],
        philosophyTitle: "Notre Serment d'Ingénierie",
        philosophy: [
            { title: "Priorité Privée", desc: "Aucune donnée n'atteint un serveur", icon: Shield },
            { title: "Zéro Latence", desc: "Traitement local instantané", icon: Zap },
            { title: "Accessibilité", desc: "Outils gratuits pour tous", icon: Heart }
        ]
    }
});

export const AuthorBio: React.FC<AuthorBioProps> = ({ lang }) => {
    const content = getContent();
    const t = content[lang] || content.en;

    return (
        <section className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800">
            <div className="relative overflow-hidden bg-white dark:bg-gray-950 rounded-[2.5rem] p-1 md:p-1 border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
                {/* Subtle Mesh Gradient Background */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-canada-red/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-[80px]" />

                <div className="relative flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-800">

                    {/* Main Bio Section */}
                    <div className="flex-1 p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-8 h-[2px] bg-canada-red/30" />
                            <p className="text-xs font-black text-canada-red uppercase tracking-[0.2em]">
                                {t.writtenBy}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-8">
                            <div className="shrink-0 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-br from-canada-red to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <div className="relative w-24 h-24 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-canada-red/10 to-transparent" />
                                    <span className="text-canada-red font-black text-3xl tracking-tighter select-none">CDN</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-4 border-white dark:border-gray-950 shadow-lg">
                                    <CheckCircle size={14} />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1">
                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                                        {t.authorName}
                                    </h3>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800">
                                        <MapPin size={12} className="text-canada-red" />
                                        {t.location}
                                    </span>
                                </div>
                                <p className="text-sm text-canada-red font-black mb-4 uppercase tracking-widest">{t.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium italic opacity-90">
                                    &quot;{t.bio}&quot;
                                </p>
                            </div>
                        </div>

                        {/* Badges and Expertise */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3">
                                <div className="inline-flex items-center gap-2 bg-green-500/5 text-green-700 dark:text-green-400 px-4 py-2 rounded-xl text-sm font-black border border-green-500/10 backdrop-blur-sm">
                                    <Award size={16} />
                                    {t.verified}
                                </div>
                                {t.credentials.map((cred, i) => (
                                    <div key={i} className="inline-flex items-center gap-2 bg-blue-500/5 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-xl text-sm font-black border border-blue-500/10 backdrop-blur-sm">
                                        <Shield size={16} />
                                        {cred}
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800/50">
                                <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-canada-red" />
                                    {t.expertise}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {t.expertiseAreas.map((area, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 shadow-sm">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Sidebar - Philosophy */}
                    <div className="lg:w-80 p-8 md:p-10 bg-gray-50/30 dark:bg-gray-900/20 backdrop-blur-md">
                        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                            {t.philosophyTitle}
                        </h4>
                        <div className="space-y-8">
                            {t.philosophy.map((item: any, i: number) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-canada-red group-hover:scale-110 transition-all duration-300">
                                            <item.icon size={20} className="text-canada-red" />
                                        </div>
                                        <span className="font-black text-sm text-gray-900 dark:text-white tracking-tight">{item.title}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium pl-14">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
                            <Link
                                href={`/${lang}/about`}
                                className="flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gray-200 dark:shadow-none"
                            >
                                {t.learnMore}
                                <ExternalLink size={16} />
                            </Link>
                        </div>
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

