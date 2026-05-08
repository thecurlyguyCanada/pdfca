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
                        <h3 className="text-xl font-bold mb-2">{isFr ? "Siège Social" : "Headquarters"}</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                            PDF Canada Technologies Inc.
                        </p>
                        <address className="not-italic text-slate-900 dark:text-white font-medium">
                            100 King St W, Suite 5700<br/>
                            Toronto, ON M5X 1C7<br/>
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
                    {/* Contact Form Mock */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-black mb-6">{isFr ? "Envoyez un message" : "Send us a Message"}</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{isFr ? "Nom" : "Name"}</label>
                                    <input type="text" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Email</label>
                                    <input type="email" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{isFr ? "Sujet" : "Subject"}</label>
                                <select className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>{isFr ? "Support Technique" : "Technical Support"}</option>
                                    <option>{isFr ? "Partenariats Business" : "Business Partnerships"}</option>
                                    <option>{isFr ? "Question Confidentialité" : "Privacy Inquiry"}</option>
                                    <option>{isFr ? "Autre" : "Other"}</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Message</label>
                                <textarea rows={4} className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
                            </div>
                            <button className="w-full bg-canada-red hover:bg-canada-darkRed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                {isFr ? "Envoyer le Message" : "Send Message"}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Trust Sidebar */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-black mb-6">{isFr ? "Pourquoi nous contacter?" : "Why Contact Us?"}</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {isFr 
                                    ? "Nous sommes une petite équipe basée à Toronto dédiée à construire les meilleurs outils PDF au Canada. Votre feedback nous aide à nous améliorer."
                                    : "We're a small, dedicated team based in Toronto building the best PDF tools in Canada. Your feedback helps us build better, more private tools for everyone."}
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
