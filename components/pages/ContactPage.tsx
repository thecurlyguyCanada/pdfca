import React from 'react';
import { Mail, MessageSquare, MapPin, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../../utils/i18n';
import { PageLayout } from '../PageLayout';

interface ContactPageProps {
    lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
    const isFr = lang === 'fr';
    const isPt = lang === 'pt';

    return (
        <PageLayout 
            title={isFr ? "Contactez-nous" : (isPt ? "Contate-nos" : "Contact PDF Canada")}
            subtitle={isFr ? "Nous sommes là pour vous aider avec vos besoins PDF" : (isPt ? "Estamos aqui para ajudar com suas necessidades de PDF" : "We're here to help with your PDF document needs")}
            icon={<Mail size={32} />}
        >
            <div className="max-w-5xl mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* Contact Cards */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{isFr ? "Support Email" : "Email Support"}</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                            {isFr ? "Réponse sous 24h" : "Response within 24 hours"}
                        </p>
                        <a href="mailto:support@pdfcanada.ca" className="text-blue-600 font-bold text-lg hover:underline underline-offset-4">
                            support@pdfcanada.ca
                        </a>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                        <div className="w-16 h-16 bg-canada-red/10 rounded-2xl flex items-center justify-center text-canada-red mx-auto mb-6">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{isFr ? "Où nous sommes" : "Where We Are"}</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                            pdfcanada.ca
                        </p>
                        <address className="not-italic text-slate-900 dark:text-white font-medium">
                            Toronto, Ontario<br/>
                            Canada
                        </address>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{isFr ? "Heures d'Ouverture" : "Business Hours"}</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                            {isFr ? "Fuseau horaire de l'Est (Toronto)" : "Eastern Time (Toronto)"}
                        </p>
                        <p className="text-slate-900 dark:text-white font-medium">
                            Mon - Fri: 9:00 AM - 5:00 PM
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Email is the only channel; a form that posts nowhere was removed */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-black mb-6">{isFr ? "Écrivez-nous" : "Send us a Message"}</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            {isFr
                                ? "Le site n'a pas de serveur qui reçoit des formulaires, par choix. Écrivez-nous directement par courriel : une vraie personne répond, en général en un ou deux jours ouvrables."
                                : "The site has no server that receives forms, by design. Email us directly: a real person answers, usually within one or two business days."}
                        </p>
                        <a href="mailto:support@pdfcanada.ca?subject=pdfcanada.ca" className="w-full bg-canada-red hover:bg-canada-darkRed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                            {isFr ? "Envoyer un courriel" : "Email support@pdfcanada.ca"}
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Trust Sidebar */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-black mb-6">{isFr ? "Pourquoi nous contacter?" : "Why Contact Us?"}</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {isFr 
                                    ? "pdfcanada.ca est un projet indépendant basé à Toronto. Vos commentaires et vos rapports de bogues orientent directement ce qui est corrigé en premier."
                                    : "pdfcanada.ca is an independent project based in Toronto. Your feedback and bug reports decide what gets fixed first."}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                                <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold">{isFr ? "Support Sécurisé" : "Secure Support"}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{isFr ? "Nous ne vous demanderons jamais de nous envoyer vos fichiers originaux par email." : "We will never ask you to email us your original documents. Privacy first, always."}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                                <HelpCircle className="text-indigo-600 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold">{isFr ? "Centre d'Aide" : "Help Center"}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{isFr ? "Consultez nos guides pour des réponses instantanées." : "Check our guides for instant answers to common PDF tasks."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
