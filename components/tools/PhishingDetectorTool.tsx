'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    Shield,
    ShieldAlert,
    ShieldCheck,
    AlertTriangle,
    FileText,
    Link as LinkIcon,
    Eye,
    XCircle,
    CheckCircle2
} from 'lucide-react';
import { analyzePdfSecurity, SecurityAnalysisResult } from '@/utils/securityAnalyzer';
import * as pdfjs from 'pdfjs-dist';

// Ensure worker is set for preview rendering
if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
}

interface PhishingDetectorToolProps {
    file: File;
}

export const PhishingDetectorTool: React.FC<PhishingDetectorToolProps> = ({ file }) => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<SecurityAnalysisResult | null>(null);
    const [activeTab, setActiveTab] = useState<'report' | 'links' | 'preview'>('report');
    const [previewPage, setPreviewPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (file) {
            analyzeFile(file);
        }
    }, [file]);

    const analyzeFile = async (f: File) => {
        setIsAnalyzing(true);
        setResult(null); // Reset result on new file
        try {
            const analysis = await analyzePdfSecurity(f);
            setResult(analysis);

            // Get num pages for preview
            const arrayBuffer = await f.arrayBuffer();
            const loadingTask = pdfjs.getDocument({
                data: arrayBuffer
                // EnableScripting is handled in analyzePdfSecurity logic or default false. 
            } as any);
            const pdf = await loadingTask.promise;
            setNumPages(pdf.numPages);

        } catch (error) {
            console.error(error);
            // Error handling can be managed by parent or local state if needed
        } finally {
            setIsAnalyzing(false);
        }
    };

    // Render Safe Preview
    useEffect(() => {
        if (activeTab === 'preview' && file && canvasRef.current) {
            renderSafePreview();
        }
    }, [activeTab, previewPage, file]);

    const renderSafePreview = async () => {
        if (!file || !canvasRef.current) return;

        try {
            const arrayBuffer = await file.arrayBuffer();
            const loadingTask = pdfjs.getDocument({
                data: arrayBuffer,
                enableScripting: false
            } as any);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(previewPage);

            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (context) {
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;
            }
        } catch (e) {
            console.error("Preview render error", e);
        }
    };

    const getRiskColor = (level: string) => {
        switch (level) {
            case 'SAFE': return 'text-green-500 bg-green-50 border-green-200';
            case 'LOW': return 'text-blue-500 bg-blue-50 border-blue-200';
            case 'MEDIUM': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'HIGH':
            case 'CRITICAL': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-500';
        }
    };

    const getRiskIcon = (level: string) => {
        switch (level) {
            case 'SAFE': return <ShieldCheck size={48} className="text-green-500" />;
            case 'LOW': return <Shield size={48} className="text-blue-500" />;
            case 'MEDIUM': return <AlertTriangle size={48} className="text-yellow-500" />;
            case 'HIGH':
            case 'CRITICAL': return <ShieldAlert size={48} className="text-red-600" />;
            default: return <Shield size={48} />;
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Sidebar / File Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-red-50 rounded-xl">
                                <FileText className="text-canada-red" size={24} />
                            </div>
                        </div>
                        <h3 className="font-bold text-gray-900 truncate mb-1">{file.name}</h3>
                        <p className="text-sm text-gray-500 mb-6 font-mono">{(file.size / 1024).toFixed(1)} KB</p>

                        {/* Tabs */}
                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('report')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'report' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <Shield size={18} />
                                <span className="font-medium">Security Report</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('links')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'links' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <LinkIcon size={18} />
                                <span className="font-medium">Link Inspector</span>
                                {result && result.details.links.length > 0 && (
                                    <span className="ml-auto bg-gray-700 text-white text-xs py-0.5 px-2 rounded-full">
                                        {result.details.links.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('preview')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'preview' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <Eye size={18} />
                                <span className="font-medium">Safe Preview</span>
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2">
                    {isAnalyzing ? (
                        <div className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-gray-100 min-h-[400px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-canada-red mb-4"></div>
                            <p className="text-gray-500 font-medium">Deep Scanning PDF Structure...</p>
                            <p className="text-xs text-gray-400 mt-2">Checking object streams, JavaScript catalogs, and action dictionaries.</p>
                        </div>
                    ) : result ? (
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 min-h-[500px]">
                            {activeTab === 'report' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            {getRiskIcon(result.riskLevel)}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h2 className="text-3xl font-black text-gray-900">
                                                    {result.riskLevel === 'SAFE' ? 'No Threats Found' : `${result.riskLevel} Risk Detected`}
                                                </h2>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getRiskColor(result.riskLevel)}`}>
                                                    SCORE: {result.score}/100
                                                </span>
                                            </div>
                                            <p className="text-gray-500">
                                                {result.riskLevel === 'SAFE'
                                                    ? "This document appears free of common malware vectors and malicious scripts."
                                                    : "This document contains elements often used in phishing attacks. Proceed with caution."
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <RiskItem
                                            label="Embedded JavaScript"
                                            detected={result.details.hasJavascript}
                                            desc="Scripts that execute automatically. Often used for malware."
                                        />
                                        <RiskItem
                                            label="Launch Actions"
                                            detected={result.details.hasLaunchActions}
                                            desc="Attempts to launch external programs (e.g., cmd.exe)."
                                        />
                                        <RiskItem
                                            label="Suspicious Links"
                                            detected={result.details.links.some(l => l.isSuspicious)}
                                            desc="Links to IP addresses or dangerous domains."
                                        />
                                        <RiskItem
                                            label="Embedded Files"
                                            detected={result.details.embeddedFiles.length > 0}
                                            desc="Hidden attachments that may contain viruses."
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'links' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-xl font-bold mb-6">Extracted Hyperlinks</h3>
                                    {result.details.links.length === 0 ? (
                                        <div className="text-center py-12 text-gray-400">
                                            <LinkIcon className="mx-auto mb-4 opacity-50" size={48} />
                                            <p>No links found in this document.</p>
                                        </div>
                                    ) : (
                                        result.details.links.map((link, i) => (
                                            <div key={i} className={`p-4 rounded-xl border ${link.isSuspicious ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-100'} break-all`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`mt-1 p-2 rounded-lg ${link.isSuspicious ? 'bg-red-200 text-red-700' : 'bg-gray-200 text-gray-600'}`}>
                                                        {link.isSuspicious ? <AlertTriangle size={16} /> : <LinkIcon size={16} />}
                                                    </div>
                                                    <div>
                                                        <div className="font-mono text-sm font-medium text-gray-800 mb-1">{link.url}</div>
                                                        <div className="flex items-center gap-4 text-xs">
                                                            <span className="text-gray-500">Page {link.page}</span>
                                                            {link.isSuspicious && (
                                                                <span className="text-red-600 font-bold">{link.reason}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            {activeTab === 'preview' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold">Safe Mode Preview</h3>
                                        <div className="flex items-center gap-2">
                                            <button
                                                disabled={previewPage <= 1}
                                                onClick={() => setPreviewPage(p => p - 1)}
                                                className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
                                            >
                                                ←
                                            </button>
                                            <span className="font-mono text-sm">{previewPage} / {numPages}</span>
                                            <button
                                                disabled={previewPage >= numPages}
                                                onClick={() => setPreviewPage(p => p + 1)}
                                                className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
                                            >
                                                →
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative bg-gray-500 rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                                        {/* Overlay to prevent clicking */}
                                        <div className="absolute inset-0 z-10 bg-transparent cursor-not-allowed" title="Interaction disabled for safety"></div>
                                        <canvas ref={canvasRef} className="max-w-full shadow-2xl" />
                                    </div>
                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        <ShieldCheck size={12} className="inline mr-1" />
                                        JavaScript execution is disabled in this preview.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const RiskItem = ({ label, detected, desc }: { label: string, detected: boolean, desc: string }) => (
    <div className={`p-4 rounded-xl border ${detected ? 'border-red-200 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'}`}>
        <div className="flex items-center justify-between mb-2">
            <h4 className={`font-bold ${detected ? 'text-red-700' : 'text-gray-700'}`}>{label}</h4>
            {detected ? <XCircle size={20} className="text-red-500" /> : <CheckCircle2 size={20} className="text-green-500" />}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
);

export default PhishingDetectorTool;
