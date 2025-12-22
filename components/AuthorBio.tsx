import React from 'react';
import { Leaf } from 'lucide-react';

interface AuthorBioProps {
    lang?: 'en' | 'fr';
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ lang = 'en' }) => {
    const content = {
        en: {
            writtenBy: 'Written by',
            name: 'The pdfcanada.ca Team',
            role: 'Canadian PDF Experts',
            bio: 'A team of software developers based in Toronto, ON, dedicated to building free, privacy-focused PDF tools. We believe your documents should stay on your device.',
            verified: 'Verified Canadian Developer',
        },
        fr: {
            writtenBy: 'Rédigé par',
            name: "L'équipe pdfcanada.ca",
            role: 'Experts PDF Canadiens',
            bio: "Une équipe de développeurs basée à Toronto, ON, dédiée à la création d'outils PDF gratuits axés sur la confidentialité. Nous croyons que vos documents doivent rester sur votre appareil.",
            verified: 'Développeur Canadien Vérifié',
        },
    };

    const t = content[lang];

    return (
        <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">{t.writtenBy}</p>
            <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-canada-red to-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Leaf className="w-8 h-8" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-canada-red font-medium mb-2">{t.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{t.bio}</p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {t.verified}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
