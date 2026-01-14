import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Download } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface SuccessOverlayProps {
    onReset: () => void; // Trigger "Start Over"
    message?: string;
    subMessage?: string;
}

export const SuccessOverlay: React.FC<SuccessOverlayProps> = ({ onReset, message = "Success!", subMessage = "Your file is ready." }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        const timer = setTimeout(() => setIsVisible(true), 10);
        triggerHaptic('success');
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/90 dark:bg-black/90 backdrop-blur-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`flex flex-col items-center max-w-sm w-full text-center transform transition-all duration-700 ${isVisible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>

                {/* Animated Checkmark Circle */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Ring */}
                    <div className="absolute inset-0 border-4 border-green-100 rounded-full" />
                    <div className={`absolute inset-0 border-4 border-green-500 rounded-full transition-all duration-[1.5s] ease-out ${isVisible ? 'clip-circle-full' : 'clip-circle-empty'}`}
                        style={{ clipPath: isVisible ? 'circle(100%)' : 'circle(0%)' }} />

                    {/* Check Icon */}
                    <div className={`absolute inset-0 flex items-center justify-center text-green-600 transform transition-all duration-500 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                        <Check size={64} strokeWidth={4} />
                    </div>
                </div>

                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{message}</h2>
                <p className="text-gray-500 font-medium text-lg mb-10">{subMessage}</p>

                <div className="flex flex-col w-full gap-3">
                    <button
                        onClick={() => { triggerHaptic('medium'); onReset(); }}
                        className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                        <ArrowRight size={24} />
                        Process Another
                    </button>
                    {/* Note: The file download usually happens automatically before this screen appears, or via a separate trigger. 
                        This screen is mostly for confirmation and next steps. 
                    */}
                </div>
            </div>

            {/* Confetti-like particles (CSS only simple implementation) can be added here if needed */}
        </div>
    );
};

export default SuccessOverlay;
