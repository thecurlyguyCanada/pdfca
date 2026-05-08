import React from 'react';
import { Accessibility, CheckCircle2, Eye, FileText, Heart, ShieldCheck } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';

interface AccessibilityPageProps {
    lang: Language;
}

export const AccessibilityPage: React.FC<AccessibilityPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    return (
        <PageLayout 
            title={isFr ? "Déclaration d'Accessibilité" : (isPt ? "Declaração de Acessibilidade" : "Accessibility Statement")}
            subtitle={isFr ? "Notre engagement pour un web inclusif pour tous" : (isPt ? "Nosso compromisso com uma web inclusiva para todos" : "Our commitment to making PDF tools accessible to everyone")}
            icon={<Accessibility size={32} />}
        >
            <div className="max-w-4xl mx-auto py-12 px-4">
                <section className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-12">
                        {isFr 
                            ? "Chez PDF Canada, nous croyons que l'accès à l'information est un droit fondamental. Nous nous efforçons de rendre notre site web et nos outils accessibles à tous, y compris aux personnes handicapées."
                            : "At PDF Canada, we believe that access to information is a fundamental right. We are committed to ensuring our website and tools are accessible to everyone, including people with disabilities."}
                    </p>

                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">{isFr ? "Nos Standards" : "Our Standards"}</h2>
                    <p>
                        {isFr 
                            ? "Nous visons la conformité avec les Web Content Accessibility Guidelines (WCAG) 2.1 au niveau AA. Ces directives expliquent comment rendre le contenu web plus accessible pour les personnes ayant une gamme variée de handicaps."
                            : "We aim for compliance with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with a wide array of disabilities."}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold flex items-center gap-2 mb-3">
                                <Eye className="text-blue-500" size={20} />
                                {isFr ? "Visuel" : "Visual"}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {isFr ? "Nous utilisons des contrastes de couleurs élevés et supportons le zoom du navigateur jusqu'à 200% sans perte de fonctionnalité." : "We maintain high color contrast ratios and support browser zooming up to 200% without loss of functionality."}
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold flex items-center gap-2 mb-3">
                                <FileText className="text-emerald-500" size={20} />
                                {isFr ? "Navigation" : "Navigation"}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {isFr ? "Notre site est entièrement navigable au clavier et utilise des étiquettes ARIA appropriées pour les lecteurs d'écran." : "Our site is fully keyboard-navigable and uses proper ARIA labels and semantic HTML for screen readers."}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">{isFr ? "Outils de PDF Accessibles" : "Accessible PDF Tools"}</h2>
                    <p>
                        {isFr 
                            ? "Au-delà de notre site web, nous développons activement des outils pour aider les utilisateurs à créer des documents PDF conformes aux normes d'accessibilité (PDF/UA)."
                            : "Beyond our website, we are actively developing tools to help users create PDF documents that comply with accessibility standards (PDF/UA)."}
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-8 my-12 rounded-r-2xl">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mt-0">{isFr ? "Besoin d'aide?" : "Need Assistance?"}</h3>
                        <p className="mb-4">
                            {isFr 
                                ? "Si vous rencontrez des difficultés d'accessibilité sur notre site, veuillez nous contacter. Nous ferons tout notre possible pour résoudre le problème."
                                : "If you encounter any accessibility barriers on our site, please contact us. We will make every effort to resolve the issue and provide the information you need."}
                        </p>
                        <p className="m-0 font-bold">
                            Email: <a href="mailto:accessibility@pdfcanada.ca" className="text-blue-600">accessibility@pdfcanada.ca</a>
                        </p>
                    </div>

                    <p className="text-sm text-slate-500 italic mt-20">
                        {isFr ? "Dernière mise à jour : Mai 2026" : "Last Updated: May 2026"}
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};
