'use client';

import Link from 'next/link';
import React from 'react';
import { Scale, Shield, Leaf, DollarSign, Globe, Lock, Zap, CheckCircle, XCircle, MapPin, Heart } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: `Smallpdf vs pdfcanada.ca | ${CURRENT_YEAR} Comparison for Canadians`,
            desc: `Compare Smallpdf vs pdfcanada.ca for PDF tools. Discover why Canadians choose pdfcanada.ca for privacy, local processing, and free tools without uploads. Supporting Canadian users.`
        },
        h1: `Smallpdf vs pdfcanada.ca: The Best PDF Tool for Canadians in ${CURRENT_YEAR}`,
        subtitle: "A detailed comparison for Canadian users who value privacy, local data processing, and supporting Canadian alternatives.",

        intro: (
            <>
                Looking for the best PDF tools? While <strong>Smallpdf</strong> is a popular international option, <strong>pdfcanada.ca</strong> offers something unique: a privacy-first approach built with Canadian values in mind.
                <br /><br />
                This comparison will help you understand the key differences and why thousands of Canadians are choosing pdfcanada.ca for their PDF needs.
            </>
        ),

        sections: [
            {
                id: "quick-comparison",
                title: "Quick Comparison: Smallpdf vs pdfcanada.ca",
                content: (
                    <>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                        <th className="py-3 px-4 font-bold">Feature</th>
                                        <th className="py-3 px-4 font-bold text-center">pdfcanada.ca</th>
                                        <th className="py-3 px-4 font-bold text-center">Smallpdf</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Price</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">100% Free</span></td>
                                        <td className="py-3 px-4 text-center">Freemium ($12/mo Pro)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">File Upload to Server</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Never</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Required</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Local Browser Processing</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Yes</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> No</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Works Offline</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Yes</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> No</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">PIPEDA Compliance</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Automatic</td>
                                        <td className="py-3 px-4 text-center">Server-dependent</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Data Stored on Servers</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Never</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Temporarily</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Daily Limits (Free)</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">Unlimited</span></td>
                                        <td className="py-3 px-4 text-center">2 tasks/day</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Account Required</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> No</td>
                                        <td className="py-3 px-4 text-center">Optional (limits apply)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Watermarks</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Never</td>
                                        <td className="py-3 px-4 text-center">None (free tier)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Canadian-Made</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> <strong>Yes 🍁</strong></td>
                                        <td className="py-3 px-4 text-center">No (Switzerland)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">French Language Support</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Full</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacy: The Fundamental Difference",
                content: (
                    <>
                        <p className="mb-4">
                            The biggest difference between <strong>Smallpdf and pdfcanada.ca</strong> is how they handle your files:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border-2 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-xl">
                                <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 text-lg flex items-center gap-2">
                                    <Shield size={20} /> pdfcanada.ca Approach
                                </h3>
                                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Files NEVER leave your device</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Processing happens in your browser</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> No server storage, ever</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Works offline once page loads</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" /> Automatic PIPEDA compliance</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-xl">
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center gap-2">
                                    <Globe size={20} /> Smallpdf Approach
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Files uploaded to cloud servers</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Processing on remote servers</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Files stored temporarily (1-14 days)</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Requires internet connection</li>
                                    <li className="flex items-start gap-2"><XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> Data leaves Canada</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Why This Matters for Canadians</h3>
                        <p className="mb-4">
                            Under Canada's <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>, organizations must protect personal information. When you upload documents containing personal data (tax forms, contracts, medical records) to servers outside Canada, you face:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Foreign jurisdiction risks</strong>: Your data may be subject to foreign laws (like the US PATRIOT Act)</li>
                            <li><strong>Data breach exposure</strong>: Server-stored files can be hacked</li>
                            <li><strong>Retention concerns</strong>: Files may persist on servers longer than claimed</li>
                            <li><strong>Third-party access</strong>: Cloud providers may access data for various reasons</li>
                        </ul>
                        <p className="text-canada-red font-medium">
                            With pdfcanada.ca, your files never leave your computer. There's nothing to breach, nothing to comply with—your data stays yours.
                        </p>
                    </>
                )
            },
            {
                id: "canadian",
                title: "Supporting Canadian: Why It Matters 🍁",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is proudly Canadian-made, designed with Canadian values of privacy, accessibility, and community support at its core.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border-2 border-canada-red bg-red-50 dark:bg-red-900/20 rounded-xl">
                                <h3 className="font-bold text-canada-red mb-3 text-lg flex items-center gap-2">
                                    <MapPin size={20} /> Built in Canada
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    When you use pdfcanada.ca, you're supporting Canadian technology and innovation. We understand Canadian needs—from bilingual support to PIPEDA compliance.
                                </p>
                                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                    <li>• Full English and French interfaces</li>
                                    <li>• Designed for Canadian privacy laws</li>
                                    <li>• Supporting local tech community</li>
                                    <li>• Understanding of Canadian document needs (CRA, IRCC)</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center gap-2">
                                    <Heart size={20} className="text-canada-red" /> Why Support Canadian?
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2"><Leaf size={16} className="mt-0.5 shrink-0 text-green-600" /> Keeps tech jobs in Canada</li>
                                    <li className="flex items-start gap-2"><Shield size={16} className="mt-0.5 shrink-0 text-canada-red" /> Data stays under Canadian jurisdiction</li>
                                    <li className="flex items-start gap-2"><DollarSign size={16} className="mt-0.5 shrink-0 text-green-600" /> Strengthens Canadian digital economy</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-canada-red" /> Built by people who understand your needs</li>
                                    <li className="flex items-start gap-2"><Globe size={16} className="mt-0.5 shrink-0 text-blue-600" /> Bilingual service as standard</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-2">🍁 Canada's Own PDF Tool</h3>
                            <p className="opacity-90">
                                Just like supporting local businesses strengthens our communities, using Canadian software keeps innovation and privacy protection close to home. pdfcanada.ca isn't just a PDF tool—it's a statement that Canadians deserve world-class technology that respects their privacy and values.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "price",
                title: "Price Comparison: Free vs Freemium",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">pdfcanada.ca: Always Free</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>$0 forever</strong>: No premium tier, no upsells</li>
                            <li><strong>Unlimited usage</strong>: No daily/monthly limits</li>
                            <li><strong>All features included</strong>: Every tool available for free</li>
                            <li><strong>No account required</strong>: Just use it</li>
                            <li><strong>No watermarks</strong>: Clean, professional output</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Smallpdf Pricing (as of 2025)</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Free tier</strong>: 2 tasks per day, limited features</li>
                            <li><strong>Pro ($12 USD/month)</strong>: Unlimited tasks, desktop app</li>
                            <li><strong>Team ($10 USD/user/month)</strong>: Collaboration features</li>
                            <li><strong>Business (custom pricing)</strong>: Enterprise features</li>
                        </ul>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                            <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2">
                                <DollarSign size={20} /> Annual Savings with pdfcanada.ca
                            </h3>
                            <p className="text-green-700 dark:text-green-300">
                                If you'd otherwise pay for Smallpdf Pro at $12 USD/month ($16+ CAD), that's <strong>$192+ CAD per year</strong> saved by using pdfcanada.ca—with better privacy too.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "features",
                title: "Feature Comparison",
                content: (
                    <>
                        <p className="mb-4">
                            Both platforms offer core PDF functionality. Here's how they compare:
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Available on Both</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Merge PDFs</li>
                                <li>Split PDFs</li>
                                <li>Compress PDFs</li>
                                <li>Convert images to PDF</li>
                                <li>Rotate PDF pages</li>
                            </ul>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>PDF to image conversion</li>
                                <li>Sign PDFs</li>
                                <li>Unlock PDFs</li>
                                <li>Protect/encrypt PDFs</li>
                                <li>Organize pages</li>
                            </ul>
                        </div>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">pdfcanada.ca Advantages</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>HEIC support</strong>: Native iPhone photo format conversion</li>
                            <li><strong>Offline capability</strong>: Works without internet after loading</li>
                            <li><strong>No limits</strong>: Process as many files as you want</li>
                            <li><strong>Instant processing</strong>: No upload/download wait times</li>
                            <li><strong>Better for large files</strong>: No upload bandwidth concerns</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Smallpdf Advantages</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>OCR text recognition</strong>: Extract text from scanned documents (Pro)</li>
                            <li><strong>eSign workflows</strong>: Request signatures from others (Pro)</li>
                            <li><strong>Desktop app</strong>: Native application for Windows/Mac (Pro)</li>
                            <li><strong>Cloud storage integration</strong>: Direct Dropbox/Google Drive access</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Which Should Canadians Choose?",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Choose pdfcanada.ca If You:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Value privacy and want files to never leave your device</li>
                            <li>Work with sensitive documents (tax, legal, medical, HR)</li>
                            <li>Want truly free tools without daily limits</li>
                            <li>Prefer not to create accounts or share email</li>
                            <li>Need to work offline sometimes</li>
                            <li>Want to support Canadian technology</li>
                            <li>Need PIPEDA-compliant document handling</li>
                            <li>Work with large files and don't want slow uploads</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Consider Smallpdf If You:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Need advanced OCR text recognition</li>
                            <li>Require eSign workflows with multiple signers</li>
                            <li>Prefer a native desktop application</li>
                            <li>Need direct cloud storage integration</li>
                            <li>Have budget for premium features</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-3">🍁 The Canadian Choice</h3>
                            <p className="opacity-90">
                                For most everyday PDF tasks—merging, splitting, compressing, converting, and signing—<strong>pdfcanada.ca offers everything you need for free</strong>, with the added benefits of total privacy and supporting Canadian innovation. Your documents, your device, your control.
                            </p>
                        </div>
                    </>
                )
            },
            {
                id: "trust",
                title: "Trust and Transparency",
                content: (
                    <>
                        <p className="mb-4">
                            When choosing a PDF tool, trust matters. Here's how pdfcanada.ca earns yours:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                                <Lock className="mx-auto text-canada-red mb-2" size={32} />
                                <h4 className="font-bold mb-1">Open Processing</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">All processing happens visibly in your browser. Nothing hidden.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                                <Shield className="mx-auto text-canada-red mb-2" size={32} />
                                <h4 className="font-bold mb-1">No Tracking</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">We don't track your documents or create profiles from your usage.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                                <Zap className="mx-auto text-canada-red mb-2" size={32} />
                                <h4 className="font-bold mb-1">Instant Results</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">No waiting for uploads. Your computer does the work instantly.</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400">
                            While Smallpdf is a reputable company with proper security measures, the fundamental difference remains: they process your files on their servers, while pdfcanada.ca processes everything locally. For Canadians handling sensitive documents, that difference is everything.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Is pdfcanada.ca really free?",
                a: "Yes! 100% free with no limits, no watermarks, and no premium tier. All features are available to everyone."
            },
            {
                q: "How is pdfcanada.ca more private than Smallpdf?",
                a: "pdfcanada.ca processes files entirely in your browser using WebAssembly. Your documents never upload to any server. Smallpdf requires uploading files to their cloud servers for processing."
            },
            {
                q: "Is pdfcanada.ca actually Canadian?",
                a: "Yes! pdfcanada.ca is built in Canada, designed with Canadian privacy laws in mind, and supports both official languages."
            },
            {
                q: "Why should I choose a Canadian PDF tool?",
                a: "Using Canadian software means your data stays under Canadian jurisdiction, you support local tech innovation, and you use a tool designed with Canadian needs (CRA forms, IRCC documents, bilingual support) in mind."
            },
            {
                q: "Does pdfcanada.ca have all the features I need?",
                a: "For everyday PDF tasks—merge, split, compress, convert, sign, protect—yes. Advanced features like OCR or multi-signer workflows are available through specialized tools."
            },
            {
                q: "Is Smallpdf safe to use?",
                a: "Smallpdf is a reputable company with security measures in place. However, using any tool that uploads files creates inherent risks that local processing eliminates entirely."
            },
            {
                q: "Can I use pdfcanada.ca offline?",
                a: "Yes! Once the page loads, you can process files without an internet connection. This is impossible with Smallpdf since it requires server processing."
            },
            {
                q: "How much would I save compared to Smallpdf Pro?",
                a: "Smallpdf Pro costs ~$12 USD/month (~$16+ CAD). Using pdfcanada.ca saves you over $192 CAD annually while providing better privacy."
            }
        ],

        ctaTitle: "Try pdfcanada.ca Today",
        ctaButton: "Start Using Free PDF Tools",
        ctaSubtext: "Free Forever. No Uploads. Proudly Canadian. 🍁",
        quickAnswer: {
            question: "Should I use Smallpdf or pdfcanada.ca?",
            answer: "For most Canadians, pdfcanada.ca is the better choice: 100% free, completely private (files never upload), and Canadian-made. Choose Smallpdf only if you need advanced OCR or multi-signer eSign workflows.",
            tool: "PDF Tools Comparison",
            steps: ["Consider privacy needs", "Evaluate feature requirements", "Compare pricing (free vs $12+/mo)", "Support Canadian innovation"]
        }
    },
    fr: {
        seo: {
            title: `Smallpdf vs pdfcanada.ca | Comparaison ${CURRENT_YEAR} pour les Canadiens`,
            desc: `Comparez Smallpdf et pdfcanada.ca pour les outils PDF. Découvrez pourquoi les Canadiens choisissent pdfcanada.ca pour la confidentialité et le traitement local. Soutenir le Canada.`
        },
        h1: `Smallpdf vs pdfcanada.ca : Le Meilleur Outil PDF pour les Canadiens en ${CURRENT_YEAR}`,
        subtitle: "Une comparaison détaillée pour les utilisateurs canadiens qui valorisent la confidentialité et le soutien aux alternatives canadiennes.",

        intro: (
            <>
                Vous cherchez les meilleurs outils PDF? Bien que <strong>Smallpdf</strong> soit une option internationale populaire, <strong>pdfcanada.ca</strong> offre quelque chose d'unique : une approche axée sur la confidentialité, construite avec les valeurs canadiennes à l'esprit.
                <br /><br />
                Cette comparaison vous aidera à comprendre les différences clés et pourquoi des milliers de Canadiens choisissent pdfcanada.ca.
            </>
        ),

        sections: [
            {
                id: "quick-comparison",
                title: "Comparaison Rapide : Smallpdf vs pdfcanada.ca",
                content: (
                    <>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                        <th className="py-3 px-4 font-bold">Caractéristique</th>
                                        <th className="py-3 px-4 font-bold text-center">pdfcanada.ca</th>
                                        <th className="py-3 px-4 font-bold text-center">Smallpdf</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Prix</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">100% Gratuit</span></td>
                                        <td className="py-3 px-4 text-center">Freemium (12$/mois Pro)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Téléchargement sur serveur</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Jamais</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Requis</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Traitement local</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Oui</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Non</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Conforme à LPRPDE</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Automatique</td>
                                        <td className="py-3 px-4 text-center">Dépend du serveur</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Limites quotidiennes</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">Illimitées</span></td>
                                        <td className="py-3 px-4 text-center">2 tâches/jour</td>
                                    </tr>
                                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Fait au Canada</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> <strong>Oui 🍁</strong></td>
                                        <td className="py-3 px-4 text-center">Non (Suisse)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "canadian",
                title: "Soutenir le Canada : Pourquoi C'est Important 🍁",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> est fièrement canadien, conçu avec les valeurs canadiennes de confidentialité, d'accessibilité et de soutien communautaire.
                        </p>

                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl mb-6">
                            <h3 className="font-bold text-xl mb-2">🍁 L'Outil PDF du Canada</h3>
                            <p className="opacity-90">
                                Tout comme soutenir les entreprises locales renforce nos communautés, utiliser un logiciel canadien garde l'innovation et la protection de la vie privée près de chez nous. pdfcanada.ca n'est pas qu'un outil PDF — c'est une affirmation que les Canadiens méritent une technologie de classe mondiale qui respecte leur vie privée.
                            </p>
                        </div>

                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Interfaces complètes en anglais et français</strong></li>
                            <li><strong>Conçu pour les lois canadiennes sur la vie privée</strong></li>
                            <li><strong>Soutien à la communauté technologique locale</strong></li>
                            <li><strong>Compréhension des besoins documentaires canadiens</strong> (ARC, IRCC)</li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Confidentialité : La Différence Fondamentale",
                content: (
                    <>
                        <p className="mb-4">
                            La plus grande différence entre <strong>Smallpdf et pdfcanada.ca</strong> est la façon dont ils traitent vos fichiers :
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>pdfcanada.ca</strong> : Vos fichiers ne quittent JAMAIS votre appareil. Tout le traitement se fait dans votre navigateur.</li>
                            <li><strong>Smallpdf</strong> : Les fichiers sont téléchargés sur des serveurs cloud pour traitement et stockés temporairement.</li>
                        </ul>

                        <p className="text-canada-red font-medium">
                            Avec pdfcanada.ca, vos fichiers ne quittent jamais votre ordinateur. Il n'y a rien à pirater, rien à gérer — vos données restent les vôtres.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "pdfcanada.ca est-il vraiment gratuit?",
                a: "Oui ! 100% gratuit sans limites, sans filigrane et sans niveau premium. Toutes les fonctionnalités sont disponibles pour tous."
            },
            {
                q: "Comment pdfcanada.ca est-il plus privé que Smallpdf?",
                a: "pdfcanada.ca traite les fichiers entièrement dans votre navigateur. Vos documents ne sont jamais téléchargés sur un serveur. Smallpdf nécessite de télécharger les fichiers sur leurs serveurs cloud."
            },
            {
                q: "pdfcanada.ca est-il vraiment canadien?",
                a: "Oui ! pdfcanada.ca est construit au Canada, conçu en tenant compte des lois canadiennes sur la vie privée, et prend en charge les deux langues officielles."
            },
            {
                q: "Pourquoi devrais-je choisir un outil PDF canadien?",
                a: "Utiliser un logiciel canadien signifie que vos données restent sous juridiction canadienne, vous soutenez l'innovation technologique locale, et vous utilisez un outil conçu pour les besoins canadiens."
            }
        ],

        ctaTitle: "Essayez pdfcanada.ca Aujourd'hui",
        ctaButton: "Commencer à Utiliser les Outils PDF Gratuits",
        ctaSubtext: "Gratuit pour Toujours. Sans Téléchargement. Fièrement Canadien. 🍁",
        quickAnswer: {
            question: "Devrais-je utiliser Smallpdf ou pdfcanada.ca?",
            answer: "Pour la plupart des Canadiens, pdfcanada.ca est le meilleur choix : 100% gratuit, complètement privé (les fichiers ne sont jamais téléchargés) et fait au Canada.",
            tool: "Comparaison d'Outils PDF",
            steps: ["Considérer les besoins de confidentialité", "Évaluer les fonctionnalités requises", "Comparer les prix", "Soutenir l'innovation canadienne"]
        }
    },
    pt: {
        seo: {
            title: `Smallpdf vs pdfcanada.ca | Comparação ${CURRENT_YEAR} para Canadenses`,
            desc: `Compare Smallpdf vs pdfcanada.ca para ferramentas PDF. Descubra por que os canadenses escolhem pdfcanada.ca para privacidade e processamento local. Apoiando o Canadá.`
        },
        h1: `Smallpdf vs pdfcanada.ca: A Melhor Ferramenta PDF para Canadenses em ${CURRENT_YEAR}`,
        subtitle: "Uma comparação detalhada para usuários canadenses que valorizam privacidade e apoio a alternativas canadenses.",

        intro: (
            <>
                Procurando as melhores ferramentas PDF? Embora <strong>Smallpdf</strong> seja uma opção internacional popular, <strong>pdfcanada.ca</strong> oferece algo único: uma abordagem focada em privacidade construída com valores canadenses em mente.
                <br /><br />
                Esta comparação ajudará você a entender as principais diferenças e por que milhares de canadenses estão escolhendo pdfcanada.ca.
            </>
        ),

        sections: [
            {
                id: "quick-comparison",
                title: "Comparação Rápida: Smallpdf vs pdfcanada.ca",
                content: (
                    <>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                        <th className="py-3 px-4 font-bold">Característica</th>
                                        <th className="py-3 px-4 font-bold text-center">pdfcanada.ca</th>
                                        <th className="py-3 px-4 font-bold text-center">Smallpdf</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Preço</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">100% Grátis</span></td>
                                        <td className="py-3 px-4 text-center">Freemium ($12/mês Pro)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Upload para servidor</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Nunca</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Requerido</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-medium">Processamento local</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> Sim</td>
                                        <td className="py-3 px-4 text-center"><XCircle className="inline text-red-500" size={20} /> Não</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Limites diários</td>
                                        <td className="py-3 px-4 text-center"><span className="text-green-600 font-bold">Ilimitado</span></td>
                                        <td className="py-3 px-4 text-center">2 tarefas/dia</td>
                                    </tr>
                                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                                        <td className="py-3 px-4 font-medium">Feito no Canadá</td>
                                        <td className="py-3 px-4 text-center"><CheckCircle className="inline text-green-600" size={20} /> <strong>Sim 🍁</strong></td>
                                        <td className="py-3 px-4 text-center">Não (Suíça)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                id: "canadian",
                title: "Apoiando o Canadá: Por Que Importa 🍁",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> é orgulhosamente canadense, projetado com valores canadenses de privacidade, acessibilidade e apoio à comunidade.
                        </p>

                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl mb-6">
                            <h3 className="font-bold text-xl mb-2">🍁 A Ferramenta PDF do Canadá</h3>
                            <p className="opacity-90">
                                Assim como apoiar empresas locais fortalece nossas comunidades, usar software canadense mantém a inovação e proteção de privacidade perto de casa. pdfcanada.ca não é apenas uma ferramenta PDF — é uma declaração de que os canadenses merecem tecnologia de classe mundial que respeita sua privacidade.
                            </p>
                        </div>

                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Interfaces completas em inglês e francês</strong></li>
                            <li><strong>Projetado para leis canadenses de privacidade</strong></li>
                            <li><strong>Apoio à comunidade tecnológica local</strong></li>
                            <li><strong>Compreensão das necessidades documentais canadenses</strong></li>
                        </ul>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Privacidade: A Diferença Fundamental",
                content: (
                    <>
                        <p className="mb-4">
                            A maior diferença entre <strong>Smallpdf e pdfcanada.ca</strong> é como eles lidam com seus arquivos:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>pdfcanada.ca</strong>: Seus arquivos NUNCA saem do seu dispositivo. Todo o processamento acontece no seu navegador.</li>
                            <li><strong>Smallpdf</strong>: Os arquivos são enviados para servidores cloud para processamento e armazenados temporariamente.</li>
                        </ul>

                        <p className="text-canada-red font-medium">
                            Com pdfcanada.ca, seus arquivos nunca saem do seu computador. Não há nada para hackear, nada para gerenciar — seus dados permanecem seus.
                        </p>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "pdfcanada.ca é realmente grátis?",
                a: "Sim! 100% grátis sem limites, sem marca d'água e sem nível premium. Todas as funcionalidades estão disponíveis para todos."
            },
            {
                q: "Como pdfcanada.ca é mais privado que Smallpdf?",
                a: "pdfcanada.ca processa arquivos inteiramente no seu navegador. Seus documentos nunca são enviados para um servidor. Smallpdf requer envio de arquivos para seus servidores cloud."
            },
            {
                q: "pdfcanada.ca é realmente canadense?",
                a: "Sim! pdfcanada.ca é construído no Canadá, projetado com as leis canadenses de privacidade em mente, e suporta ambas as línguas oficiais."
            },
            {
                q: "Por que devo escolher uma ferramenta PDF canadense?",
                a: "Usar software canadense significa que seus dados permanecem sob jurisdição canadense, você apoia a inovação tecnológica local, e usa uma ferramenta projetada para necessidades canadenses."
            }
        ],

        ctaTitle: "Experimente pdfcanada.ca Hoje",
        ctaButton: "Começar a Usar Ferramentas PDF Grátis",
        ctaSubtext: "Grátis para Sempre. Sem Uploads. Orgulhosamente Canadense. 🍁",
        quickAnswer: {
            question: "Devo usar Smallpdf ou pdfcanada.ca?",
            answer: "Para a maioria dos canadenses, pdfcanada.ca é a melhor escolha: 100% grátis, completamente privado (arquivos nunca são enviados) e feito no Canadá.",
            tool: "Comparação de Ferramentas PDF",
            steps: ["Considerar necessidades de privacidade", "Avaliar funcionalidades necessárias", "Comparar preços", "Apoiar inovação canadense"]
        }
    }
});

export const SmallpdfVsPdfcanadaGuide: React.FC<GuideProps> = ({ lang }) => {
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/smallpdf-vs-pdfcanada"
                faqs={t.faq}
                lang={lang}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'Smallpdf vs pdfcanada.ca', path: lang === 'fr' ? '/fr/guides/smallpdf-vs-pdfcanada' : (lang === 'pt' ? '/pt/guides/smallpdf-vs-pdfcanada' : '/guides/smallpdf-vs-pdfcanada') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Scale size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: 'Smallpdf vs pdfcanada.ca', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    {/* Intro */}
                    <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                        {t.intro}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any, idx: number) => (
                            <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-canada-red/10 text-canada-red font-black text-xl sm:text-2xl">
                                        {idx + 1}
                                    </span>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                                </div>
                                <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? 'Questions Fréquentes' : (lang === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions')}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang === 'en' ? '' : lang}`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/smallpdf-vs-pdfcanada" category="other" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
