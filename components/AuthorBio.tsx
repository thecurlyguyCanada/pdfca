import React from 'react';
import { MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { Language } from '../utils/i18n';

interface AuthorBioProps {
    lang: Language;
    onNavigate?: (view: any, path?: string) => void;
}

const getContent = () => ({
    en: {
        writtenBy: "Written by",
        authorName: "The PDFCanada.ca Team",
        location: "Canada",
        role: "Canadian PDF Experts",
        bio: "PDFCanada.ca was built with a simple mission: make working with PDFs easy, fast, and private. Our tools are designed from real-world experience, solving frustrations we encountered firsthand. Every feature exists because it solves a real problem — not because it looks good on a feature list.",
        verified: "Verified Canadian Developer",
        learnMore: "Learn more about us"
    },
    fr: {
        writtenBy: "Rédigé par",
        authorName: "L'équipe PDFCanada.ca",
        location: "Canada",
        role: "Experts PDF Canadiens",
        bio: "PDFCanada.ca a été créé avec une mission simple : rendre le travail avec les PDF facile, rapide et privé. Nos outils sont conçus à partir d'expériences réelles, résolvant des frustrations que nous avons rencontrées de première main. Chaque fonctionnalité existe parce qu'elle résout un vrai problème — pas parce qu'elle a l'air bien sur une liste de fonctionnalités.",
        verified: "Développeur Canadien Vérifié",
        learnMore: "En savoir plus sur nous"
    }
});

export const AuthorBio: React.FC<AuthorBioProps> = ({ lang, onNavigate }) => {
    const content = getContent();
    const t = content[lang] || content.en;

    const handleClick = () => {
        if (onNavigate) {
            onNavigate('ABOUT', '/about');
        }
    };

    return (
        <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-10">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    {t.writtenBy}
                </p>

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Avatar/Logo */}
                    <div className="shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-canada-red to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                            <span className="text-white font-black text-2xl">PDF</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {t.authorName}
                            </h3>
                            <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-3 py-1 rounded-full">
                                <MapPin size={14} />
                                {t.location}
                            </span>
                        </div>

                        <p className="text-sm text-canada-red font-medium mb-3">{t.role}</p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {t.bio}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-sm font-bold">
                                <CheckCircle size={16} />
                                {t.verified}
                            </div>

                            {onNavigate && (
                                <button
                                    onClick={handleClick}
                                    className="inline-flex items-center gap-2 text-canada-red hover:text-canada-darkRed font-medium transition-colors group text-sm"
                                >
                                    {t.learnMore}
                                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Author schema data for SEO
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
        "https://www.pdfcanada.ca"
    ],
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA"
    }
});

export default AuthorBio;

