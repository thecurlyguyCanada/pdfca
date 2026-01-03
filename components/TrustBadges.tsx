import React from 'react';
import { Shield, Leaf, Lock, CheckCircle2, Zap, Heart } from 'lucide-react';

interface TrustBadgesProps {
    variant?: 'horizontal' | 'grid';
    lang?: 'en' | 'fr';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ variant = 'horizontal', lang = 'en' }) => {
    const badges = [
        {
            icon: Shield,
            label: lang === 'fr' ? 'Confidentialité Prioritaire' : 'Privacy First',
            color: 'text-canada-red',
        },
        {
            icon: Leaf,
            label: lang === 'fr' ? 'Fièrement Canadien' : 'Proudly Canadian',
            color: 'text-canada-red',
        },
        {
            icon: Lock,
            label: lang === 'fr' ? 'Aucun Téléchargement' : 'No Upload Required',
            color: 'text-canada-red',
        },
        {
            icon: CheckCircle2,
            label: lang === 'fr' ? '100% Gratuit' : '100% Free',
            color: 'text-green-600',
        },
        {
            icon: Zap,
            label: lang === 'fr' ? 'Traitement Local' : 'Local Processing',
            color: 'text-amber-500',
        },
        {
            icon: Heart,
            label: lang === 'fr' ? 'Fait avec Amour' : 'Made with Love',
            color: 'text-pink-500',
        },
    ];

    if (variant === 'grid') {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-sm"
                    >
                        <badge.icon className={`w-5 h-5 ${badge.color}`} />
                        <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {badges.slice(0, 4).map((badge, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm"
                >
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-sm font-bold text-gray-700">{badge.label}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustBadges;
