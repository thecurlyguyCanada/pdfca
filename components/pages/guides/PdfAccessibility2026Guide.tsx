'use client';

import Link from 'next/link';
import React from 'react';
import {
    ShieldCheck,
    Accessibility,
    Scale,
    FileCheck,
    Tags,
    Eye,
    FileText,
    AlertCircle,
    ArrowRight,
    Info,
    CheckCircle2,
    Lock,
    Search,
    Zap,
    HelpCircle
} from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
}

const PdfAccessibility2026Guide: React.FC<GuideProps> = ({ lang }) => {
    return (
        <PageLayout title="PDF Accessibility 2026" icon={<Accessibility size={32} />}>
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-800">
                        <Zap size={16} />
                        <span>2026 Compliance Update</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        The Comprehensive 2026 Guide to <span className="text-blue-600">PDF Accessibility</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A deep dive into WCAG 2.1/2.2 compliance, ADA Title II mandates, and the technical roadmap for accessible digital documents in 2026.
                    </p>
                </div>

                {/* Quick Snapshot / AI Summary */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 mb-16 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200">
                        <Info className="text-blue-500" size={20} />
                        Executive Summary
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">The Deadline</span>
                            <p className="font-medium">April 2026 (ADA Title II)</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">The Standard</span>
                            <p className="font-medium">WCAG 2.1 Level AA</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Focus</span>
                            <p className="font-medium">Tag Tree & Reading Order</p>
                        </div>
                    </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-strong:text-slate-900 dark:prose-strong:text-white">

                    <p className="lead text-lg italic text-slate-500 mb-12 border-l-4 border-blue-500 pl-6 py-2">
                        For years, digital accessibility was treated as a "best practice" or a moral obligation—something for organizations to strive toward, but rarely a legal emergency. In 2026, that landscape has fundamentally shifted.
                    </p>

                    <h2 id="mandate">1. The 2026 Accessibility Mandate: Why Now?</h2>
                    <p>
                        Driven by the 2026 deadlines of the Americans with Disabilities Act (ADA) Title II and the final implementation phases of the European Accessibility Act (EAA), PDF accessibility has moved from the back of the queue to the top of the priority list for every serious organization.
                    </p>
                    <p>
                        By <strong>April 2026</strong>, many US public entities—including state and local governments, school districts, and public transit systems—must ensure that all their digital services, including the thousands of PDFs buried in their archives, meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard.
                    </p>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8">
                        <h4 className="flex items-center gap-2 text-amber-800 dark:text-amber-400 m-0 mb-3 font-bold">
                            <AlertCircle size={20} />
                            The Business Case for Accessibility
                        </h4>
                        <ul className="m-0 space-y-2 list-none p-0 text-amber-900/80 dark:text-amber-300/80 prose-li:m-0">
                            <li className="flex gap-2"><strong>SEO Optimization:</strong> Search engines rank accessible content higher.</li>
                            <li className="flex gap-2"><strong>User Reach:</strong> Over 1.3 billion people require accessibility features.</li>
                            <li className="flex gap-2"><strong>Modern UX:</strong> Accessible docs are mobile-friendly and search-ready.</li>
                        </ul>
                    </div>

                    <h2 id="legal">2. Understanding the Legal Landscape</h2>
                    <p>
                        To navigate 2026, you need to understand the four "pillars" of digital document law:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                            <h3 className="mt-0 text-xl font-bold flex items-center gap-2">
                                <Scale size={20} className="text-blue-500" />
                                ADA Title II (USA)
                            </h3>
                            <p className="text-sm">The DOJ has officially adopted WCAG 2.1 Level AA as the technical standard. Most public entities must comply by April 2026.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                            <h3 className="mt-0 text-xl font-bold flex items-center gap-2">
                                <ShieldCheck size={20} className="text-green-500" />
                                European Accessibility Act
                            </h3>
                            <p className="text-sm">Unlike previous regulations that targeted the public sector, the EAA brings private sector banking and e-commerce into the fold.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                            <h3 className="mt-0 text-xl font-bold flex items-center gap-2">
                                <FileCheck size={20} className="text-purple-500" />
                                AODA & ACA (Canada)
                            </h3>
                            <p className="text-sm">AODA reaching 2026 milestones, requiring organizations with 50+ employees to make web content accessible.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                            <h3 className="mt-0 text-xl font-bold flex items-center gap-2">
                                <Lock size={20} className="text-red-500" />
                                Section 508
                            </h3>
                            <p className="text-sm">Federal agencies are moving from WCAG 2.0 to 2.1/2.2 standards to maintain compliance parity with the ADA.</p>
                        </div>
                    </div>

                    <h2 id="standards">3. Technical Standards: WCAG 2.1 vs 2.2</h2>
                    <p>
                        While WCAG is general for web content, <strong>PDF/UA (ISO 14289)</strong> is specific to the "guts" of a PDF file. It ensures that the file is technically robust enough for any assistive technology to parse.
                    </p>

                    <h2 id="anatomy">4. The Anatomy of an Accessible PDF</h2>
                    <p>
                        An accessible PDF is built on five critical components:
                    </p>

                    <div className="space-y-6 my-10">
                        <div className="flex gap-6 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                            <div className="bg-blue-600 text-white p-3 rounded-lg h-fit shrink-0">
                                <Eye size={24} />
                            </div>
                            <div>
                                <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white mb-2">1. Logical Reading Order</h3>
                                <p className="m-0 text-slate-600 dark:text-slate-400">Screen readers read underlying code, not visual layouts. Tags must follow a sequential path regardless of visual placement.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                            <div className="bg-indigo-600 text-white p-3 rounded-lg h-fit shrink-0">
                                <Tags size={24} />
                            </div>
                            <div>
                                <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white mb-2">2. Semantic Tagging Hierarchy</h3>
                                <p className="m-0 text-slate-600 dark:text-slate-400">Uses H1-H6, P, L (List), and Table tags to create a structured hierarchy that assistive tech can navigate.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                            <div className="bg-emerald-600 text-white p-3 rounded-lg h-fit shrink-0">
                                <Accessibility size={24} />
                            </div>
                            <div>
                                <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white mb-2">3. Alternative Text (Alt Text)</h3>
                                <p className="m-0 text-slate-600 dark:text-slate-400">Quality Alt text must convey specific data for charts and "Contact Us" functionality, not just "Blue Icon."</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="roadmap">5. The 2026 Roadmap: 5 Steps to Remediation</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Fix the Source:</strong> Set accessibility styles in Word or InDesign before exporting.</li>
                        <li><strong>Optimal Export:</strong> Always choose "Save As" or "Export" with "Document structure tags" enabled.</li>
                        <li><strong>Automated Audit:</strong> Use PAC (PDF Accessibility Checker) to find technical formatting errors.</li>
                        <li><strong>Manual Remediation:</strong> A human must verify table headers and image context accuracy.</li>
                        <li><strong>Assistive Tech Testing:</strong> The final "smoke test" using screen readers like NVDA or VoiceOver.</li>
                    </ol>

                    <h2 id="forms">6. Accessible PDF Forms</h2>
                    <p>
                        Forms are the most complex type of PDF. In 2026, "fillable" is not enough. To be accessible, a PDF form requires tooltips for every field and a logical tab order for keyboard navigation.
                    </p>

                    <h2 id="ai">7. AI and the Future of Accessibility</h2>
                    <p>
                        In 2026, AI can auto-tag documents and generate initial Alt text, but "human-in-the-loop" review is still legally required to ensure context and nuance are captured.
                    </p>

                    <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 my-16 text-white text-center shadow-xl not-prose">
                        <CheckCircle2 size={48} className="text-green-400 mx-auto mb-6" />
                        <h2 className="text-white text-3xl font-bold mt-0 mb-4 tracking-tight">The 2026 Compliance Checklist</h2>
                        <ul className="text-left text-slate-300 space-y-3 max-w-md mx-auto list-none p-0 mt-8">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                Descriptive Document Title (Set to display)
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                Primary Language Tag (e.g., "en-CA")
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                Logical H1-H6 Heading Hierarchy
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                Accurate Alt Text for all Visuals
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                Verified Reading Order & Table Headers
                            </li>
                        </ul>
                        <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 mx-auto">
                            Audit Your PDF Library Today
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <h2 id="conclusion">8. Conclusion: A Marathon, Not a Sprint</h2>
                    <p>
                        As we move through 2026, the organizations that will thrive are those that embed accessibility into their "Definition of Done." Don't let your "Dark Data" become a legal liability.
                    </p>
                </div>

                {/* Author Section */}
                <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-10">
                    <AuthorBio lang={lang} />
                </div>

                {/* Related Tools */}
                <div className="mt-16">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl mb-8">
                        <Search className="text-blue-500" size={24} />
                        <h2>Recommended Accessibility Tools</h2>
                    </div>
                    <RelatedTools
                        lang={lang}
                        currentPath={`/${lang}/guides/pdf-accessibility-2026`}
                        category="advanced"
                    />
                </div>
            </article>
        </PageLayout>
    );
};

export default PdfAccessibility2026Guide;
