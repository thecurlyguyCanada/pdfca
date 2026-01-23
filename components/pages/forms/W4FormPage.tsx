'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FileText, Download, Edit, Shield, CheckCircle, Zap, Star, Calendar, CreditCard } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';

interface FormPageProps {
    lang: Language;
}

const getContent = (lang: string) => ({
    en: {
        seo: {
            title: `IRS W-4 Form ${CURRENT_YEAR} | Free Fillable Template | pdfcanada.ca`,
            desc: `Fill out IRS W-4 Employee's Withholding Certificate online. Free ${CURRENT_YEAR} printable template. Edit, sign, and download instantly. No installation required.`
        },
        badge: `${CURRENT_YEAR} UPDATED`,
        formTitle: "IRS",
        formName: "W-4",
        formType: "Form",
        formSubtitle: `${CURRENT_YEAR} Printable Template`,
        formDesc: "Employee's Withholding Certificate",
        formInstructions: "Complete Form W-4 so that your employer can withhold the correct federal income tax from your pay.",
        ctaButton: "GET FORM",
        ctaSubtext: "Fill, edit & download instantly",

        features: [
            "Fill in all fields online",
            "Add your signature",
            "Download as PDF, Word, or Excel",
            "Print-ready format",
            "100% secure - files stay on your device"
        ],

        steps: [
            { title: "Open Form", desc: "Click GET FORM to open the W-4 template" },
            { title: "Fill Fields", desc: "Complete all required fields with your information" },
            { title: "Sign", desc: "Add your electronic signature" },
            { title: "Download", desc: "Save as PDF, Word, Excel, or print directly" }
        ],

        aboutTitle: `About IRS Form W-4 (${CURRENT_YEAR})`,
        aboutDesc: `The IRS Form W-4, Employee's Withholding Certificate, is used by employees to inform their employer how much federal income tax to withhold from their paycheck. The ${CURRENT_YEAR} version includes updated tax brackets and withholding tables.`,

        whoNeeds: "Who Needs to Fill Out Form W-4?",
        whoNeedsList: [
            "New employees starting a job",
            "Employees with life changes (marriage, divorce, new child)",
            "Those who want to adjust their tax withholding",
            "Employees with multiple jobs",
            "Anyone claiming exemptions from withholding"
        ],

        formSections: "Form W-4 Sections",
        sections: [
            { step: "Step 1", title: "Personal Information", desc: "Name, address, Social Security number, and filing status" },
            { step: "Step 2", title: "Multiple Jobs", desc: "If you have more than one job or are married filing jointly with a working spouse" },
            { step: "Step 3", title: "Dependents", desc: "Claim credits for qualifying children and other dependents" },
            { step: "Step 4", title: "Other Adjustments", desc: "Other income, deductions, and extra withholding" },
            { step: "Step 5", title: "Sign Here", desc: "Your signature confirms the information is accurate" }
        ],

        pricingTitle: "Choose Your Plan",
        pricingSubtitle: "50% less than competitors",
        plans: [
            {
                name: "7-Day Limited Access",
                price: "$0.49",
                period: "",
                popular: false,
                features: [
                    { text: "Unlimited edits", included: true },
                    { text: "Unlimited downloads", included: true },
                    { text: "Multi-format conversion", included: true },
                    { text: "No installation required", included: false },
                    { text: "Edit text and images", included: false },
                    { text: "Organize PDF pages", included: false },
                    { text: "Password protection", included: false },
                    { text: "Mobile access", included: false }
                ],
                note: "After 7 days: $24.99/month unless cancelled"
            },
            {
                name: "7-Day Full Access",
                price: "$0.99",
                period: "",
                popular: true,
                features: [
                    { text: "Unlimited edits", included: true },
                    { text: "Unlimited downloads", included: true },
                    { text: "Multi-format conversion", included: true },
                    { text: "No installation required", included: true },
                    { text: "Edit text and images", included: true },
                    { text: "Organize PDF pages", included: true },
                    { text: "Password protection", included: true },
                    { text: "Mobile access", included: true }
                ],
                note: "After 7 days: $24.99/month unless cancelled"
            },
            {
                name: "Annual Plan",
                price: "$12.49",
                period: "/month",
                popular: false,
                features: [
                    { text: "Unlimited edits", included: true },
                    { text: "Unlimited downloads", included: true },
                    { text: "Multi-format conversion", included: true },
                    { text: "No installation required", included: true },
                    { text: "Edit text and images", included: true },
                    { text: "Organize PDF pages", included: true },
                    { text: "Password protection", included: true },
                    { text: "Mobile access", included: true }
                ],
                note: "Billed $149.99 annually. Cancel anytime."
            }
        ],

        freeNote: "Or use our FREE basic tools with no account required",
        freeTools: [
            { name: "Merge PDF", href: "/merge-pdf" },
            { name: "Split PDF", href: "/split-pdf" },
            { name: "Compress PDF", href: "/compress-pdf" },
            { name: "Convert Images", href: "/jpg-to-pdf" }
        ],

        disclaimer: `This website is not affiliated with any government agency. Form updated ${CURRENT_YEAR}. Please verify this is the current version.`,

        faq: [
            { q: "Is this the official IRS W-4 form?", a: "Yes, this is the official IRS Form W-4 for the current tax year, formatted for easy online completion." },
            { q: "Can I fill out the W-4 form online?", a: "Yes! Use our editor to fill in all fields, add your signature, and download instantly." },
            { q: "What formats can I download?", a: "Download as PDF, Word (.docx), Excel (.xlsx), PNG, or PPTX." },
            { q: "Is my information secure?", a: "Yes. With our free tools, files are processed in your browser and never uploaded. Premium features use encrypted connections." },
            { q: "Do I need to create an account?", a: "No account needed for basic editing. Premium features require a subscription." }
        ]
    },
    fr: {
        seo: {
            title: `Formulaire IRS W-4 ${CURRENT_YEAR} | Modèle Remplissable Gratuit | pdfcanada.ca`,
            desc: `Remplissez le formulaire IRS W-4 en ligne. Modèle imprimable ${CURRENT_YEAR}. Éditez, signez et téléchargez instantanément.`
        },
        badge: `MISE À JOUR ${CURRENT_YEAR}`,
        formTitle: "IRS",
        formName: "W-4",
        formType: "Formulaire",
        formSubtitle: `Modèle Imprimable ${CURRENT_YEAR}`,
        formDesc: "Certificat de Retenue de l'Employé",
        formInstructions: "Remplissez le formulaire W-4 pour que votre employeur puisse retenir le bon montant d'impôt fédéral.",
        ctaButton: "OBTENIR LE FORMULAIRE",
        ctaSubtext: "Remplir, modifier et télécharger",
        features: ["Remplir tous les champs en ligne", "Ajouter votre signature", "Télécharger en PDF, Word ou Excel", "Format prêt à imprimer", "100% sécurisé"],
        steps: [
            { title: "Ouvrir", desc: "Cliquez pour ouvrir le modèle W-4" },
            { title: "Remplir", desc: "Complétez tous les champs requis" },
            { title: "Signer", desc: "Ajoutez votre signature électronique" },
            { title: "Télécharger", desc: "Enregistrez en PDF, Word ou Excel" }
        ],
        aboutTitle: `À propos du formulaire IRS W-4 (${CURRENT_YEAR})`,
        aboutDesc: `Le formulaire IRS W-4 est utilisé par les employés pour informer leur employeur du montant d'impôt fédéral à retenir.`,
        whoNeeds: "Qui doit remplir le formulaire W-4?",
        whoNeedsList: ["Nouveaux employés", "Employés avec changements de vie", "Ceux qui veulent ajuster leur retenue", "Employés avec plusieurs emplois", "Réclamant des exemptions"],
        formSections: "Sections du formulaire W-4",
        sections: [
            { step: "Étape 1", title: "Informations Personnelles", desc: "Nom, adresse, numéro de sécurité sociale" },
            { step: "Étape 2", title: "Emplois Multiples", desc: "Si vous avez plus d'un emploi" },
            { step: "Étape 3", title: "Personnes à Charge", desc: "Crédits pour les enfants qualifiants" },
            { step: "Étape 4", title: "Autres Ajustements", desc: "Autres revenus et déductions" },
            { step: "Étape 5", title: "Signer Ici", desc: "Votre signature confirme les informations" }
        ],
        pricingTitle: "Choisissez Votre Plan",
        pricingSubtitle: "50% moins cher que les concurrents",
        plans: [
            { name: "Accès Limité 7 Jours", price: "$0.49", period: "", popular: false, features: [{ text: "Modifications illimitées", included: true }, { text: "Téléchargements illimités", included: true }, { text: "Conversion multi-format", included: true }], note: "Après 7 jours: $24.99/mois" },
            { name: "Accès Complet 7 Jours", price: "$0.99", period: "", popular: true, features: [{ text: "Toutes les fonctionnalités", included: true }], note: "Après 7 jours: $24.99/mois" },
            { name: "Plan Annuel", price: "$12.49", period: "/mois", popular: false, features: [{ text: "Toutes les fonctionnalités", included: true }], note: "Facturé $149.99/an" }
        ],
        freeNote: "Ou utilisez nos outils GRATUITS sans compte",
        freeTools: [{ name: "Fusionner PDF", href: "/fr/merge-pdf" }, { name: "Diviser PDF", href: "/fr/split-pdf" }, { name: "Compresser PDF", href: "/fr/compress-pdf" }],
        disclaimer: `Ce site n'est pas affilié à une agence gouvernementale. Mis à jour ${CURRENT_YEAR}.`,
        faq: [{ q: "Est-ce le formulaire officiel?", a: "Oui, c'est le formulaire IRS W-4 officiel pour l'année fiscale en cours." }]
    },
    pt: {
        seo: {
            title: `Formulário IRS W-4 ${CURRENT_YEAR} | Modelo Preenchível Grátis | pdfcanada.ca`,
            desc: `Preencha o formulário IRS W-4 online. Modelo ${CURRENT_YEAR} para impressão. Edite, assine e baixe instantaneamente.`
        },
        badge: `ATUALIZADO ${CURRENT_YEAR}`,
        formTitle: "IRS",
        formName: "W-4",
        formType: "Formulário",
        formSubtitle: `Modelo ${CURRENT_YEAR} para Impressão`,
        formDesc: "Certificado de Retenção do Funcionário",
        formInstructions: "Preencha o formulário W-4 para que seu empregador possa reter o imposto federal correto.",
        ctaButton: "OBTER FORMULÁRIO",
        ctaSubtext: "Preencher, editar e baixar",
        features: ["Preencher todos os campos online", "Adicionar sua assinatura", "Baixar em PDF, Word ou Excel", "Formato pronto para impressão", "100% seguro"],
        steps: [
            { title: "Abrir", desc: "Clique para abrir o modelo W-4" },
            { title: "Preencher", desc: "Complete todos os campos" },
            { title: "Assinar", desc: "Adicione sua assinatura eletrônica" },
            { title: "Baixar", desc: "Salve como PDF, Word ou Excel" }
        ],
        aboutTitle: `Sobre o Formulário IRS W-4 (${CURRENT_YEAR})`,
        aboutDesc: `O formulário IRS W-4 é usado por funcionários para informar ao empregador quanto imposto federal reter.`,
        whoNeeds: "Quem Precisa Preencher o W-4?",
        whoNeedsList: ["Novos funcionários", "Funcionários com mudanças de vida", "Quem quer ajustar retenção", "Funcionários com múltiplos empregos"],
        formSections: "Seções do Formulário W-4",
        sections: [
            { step: "Passo 1", title: "Informações Pessoais", desc: "Nome, endereço, SSN" },
            { step: "Passo 2", title: "Múltiplos Empregos", desc: "Se tiver mais de um emprego" },
            { step: "Passo 3", title: "Dependentes", desc: "Créditos para filhos" },
            { step: "Passo 4", title: "Outros Ajustes", desc: "Outras rendas e deduções" },
            { step: "Passo 5", title: "Assine Aqui", desc: "Confirme as informações" }
        ],
        pricingTitle: "Escolha Seu Plano",
        pricingSubtitle: "50% mais barato que concorrentes",
        plans: [
            { name: "Acesso Limitado 7 Dias", price: "$0.49", period: "", popular: false, features: [{ text: "Edições ilimitadas", included: true }], note: "Após 7 dias: $24.99/mês" },
            { name: "Acesso Completo 7 Dias", price: "$0.99", period: "", popular: true, features: [{ text: "Todos os recursos", included: true }], note: "Após 7 dias: $24.99/mês" },
            { name: "Plano Anual", price: "$12.49", period: "/mês", popular: false, features: [{ text: "Todos os recursos", included: true }], note: "Cobrado $149.99/ano" }
        ],
        freeNote: "Ou use nossas ferramentas GRÁTIS sem conta",
        freeTools: [{ name: "Juntar PDF", href: "/pt/merge-pdf" }, { name: "Dividir PDF", href: "/pt/split-pdf" }],
        disclaimer: `Este site não é afiliado a agências governamentais. Atualizado ${CURRENT_YEAR}.`,
        faq: [{ q: "É o formulário oficial?", a: "Sim, é o formulário IRS W-4 oficial para o ano fiscal atual." }]
    }
});

export const W4FormPage: React.FC<FormPageProps> = ({ lang }) => {
    const content = getContent(lang);
    const t = (content as any)[lang] || (content as any).en;
    const [selectedPlan, setSelectedPlan] = useState(1);

    return (
        <div className="min-h-screen bg-gray-900">
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/forms/irs-w4" lang={lang} faqs={t.faq} />

            {/* Hero Section */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="relative max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Form Preview */}
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 relative">
                            <div className="absolute -top-3 left-4 bg-canada-red text-white text-xs font-bold px-3 py-1 rounded-full">
                                {t.badge}
                            </div>

                            {/* Fake Form Header */}
                            <div className="border-2 border-gray-300 rounded-lg p-4 mb-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-xs text-gray-500">Form</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-900">{t.formName}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{t.formDesc}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">OMB No. 1545-0074</p>
                                        <div className="bg-gray-100 px-4 py-2 rounded mt-1">
                                            <span className="text-2xl font-bold text-gray-900">{CURRENT_YEAR}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Fake Form Fields */}
                                <div className="space-y-3 text-sm">
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="col-span-2">
                                            <p className="text-xs text-gray-500 mb-1">First name and middle initial</p>
                                            <div className="h-8 bg-blue-50 border border-blue-200 rounded"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Last name</p>
                                            <div className="h-8 bg-blue-50 border border-blue-200 rounded"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Social security number</p>
                                        <div className="h-8 bg-blue-50 border border-blue-200 rounded w-1/3"></div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">{t.formInstructions}</p>

                            <Link
                                href={`/${lang}/sign-pdf?form=${encodeURIComponent('https://raw.githubusercontent.com/thecurlyguyCanada/pdfca/main/public/forms/irs-w4-2025.pdf')}`}
                                className="block w-full bg-canada-red hover:bg-red-700 text-white text-center py-4 rounded-lg font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
                            >
                                {t.ctaButton}
                            </Link>
                            <p className="text-center text-sm text-gray-500 mt-2">{t.ctaSubtext}</p>
                            <a
                                href="https://raw.githubusercontent.com/thecurlyguyCanada/pdfca/main/public/forms/irs-w4-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center text-sm text-canada-red hover:underline mt-2"
                            >
                                {lang === 'fr' ? 'Télécharger le formulaire vierge →' : lang === 'pt' ? 'Baixar formulário em branco →' : 'Download blank form →'}
                            </a>
                        </div>

                        {/* Title Section */}
                        <div className="text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-5xl md:text-6xl font-black">{t.formTitle}</span>
                                <span className="bg-canada-red text-white text-4xl md:text-5xl font-black px-4 py-2 rounded-lg">{t.formName}</span>
                                <span className="text-5xl md:text-6xl font-black">{t.formType}</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">{t.formSubtitle}</h1>

                            <ul className="space-y-3">
                                {t.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 shrink-0" size={20} />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {t.steps.map((step: any, i: number) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-canada-red text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
                    <p className="text-gray-600 mb-8">{t.aboutDesc}</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t.whoNeeds}</h3>
                    <ul className="grid md:grid-cols-2 gap-3 mb-8">
                        {t.whoNeedsList.map((item: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="text-green-500 shrink-0" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t.formSections}</h3>
                    <div className="space-y-4">
                        {t.sections.map((section: any, i: number) => (
                            <div key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                <div className="bg-canada-red text-white text-sm font-bold px-3 py-1 rounded h-fit">
                                    {section.step}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{section.title}</h4>
                                    <p className="text-sm text-gray-600">{section.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.pricingTitle}</h2>
                        <p className="text-green-600 font-medium">{t.pricingSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.plans.map((plan: any, i: number) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl p-6 transition-all cursor-pointer ${selectedPlan === i
                                    ? 'border-2 border-canada-red shadow-xl bg-white'
                                    : 'border border-gray-200 bg-gray-50 hover:border-gray-300'
                                    }`}
                                onClick={() => setSelectedPlan(i)}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                                        <Star size={12} fill="currentColor" /> Most Popular
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === i ? 'border-canada-red bg-canada-red' : 'border-gray-300'
                                        }`}>
                                        {selectedPlan === i && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                    </div>
                                    <span className="font-bold text-gray-900">{plan.name}</span>
                                </div>

                                <div className="mb-4">
                                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {plan.features.slice(0, 8).map((feature: any, j: number) => (
                                        <li key={j} className="flex items-center gap-2 text-sm">
                                            {feature.included ? (
                                                <CheckCircle className="text-green-500 shrink-0" size={16} />
                                            ) : (
                                                <div className="w-4 h-4 rounded-full border border-gray-300 shrink-0"></div>
                                            )}
                                            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-xs text-gray-500 pt-4 border-t border-gray-200">{plan.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-canada-red hover:bg-red-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg">
                            Continue →
                        </button>
                    </div>

                    {/* Free Tools Note */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                        <p className="font-medium text-gray-700 mb-4">{t.freeNote}</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {t.freeTools.map((tool: any, i: number) => (
                                <Link key={i} href={tool.href} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-canada-red hover:text-canada-red transition-colors">
                                    {tool.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">FAQ</h2>
                    <div className="space-y-4">
                        {t.faq.map((item: any, i: number) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                                <p className="text-gray-600 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-6 bg-gray-100 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-xs text-gray-500">{t.disclaimer}</p>
                </div>
            </section>
        </div>
    );
};
