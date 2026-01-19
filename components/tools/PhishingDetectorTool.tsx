'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
import { initPdfWorker } from '@/utils/pdfUtils';
import { Language } from '@/utils/i18n';

const phishingTranslations = {
    en: {
        securityReport: 'Security Report',
        linkInspector: 'Link Inspector',
        safePreview: 'Safe Preview',
        scanning: 'Deep Scanning PDF Structure...',
        scanningDesc: 'Checking object streams, JavaScript catalogs, and action dictionaries.',
        noThreats: 'No Threats Found',
        riskDetected: 'Risk Detected',
        safeSummary: 'This document appears free of common malware vectors and malicious scripts.',
        riskSummary: 'This document contains elements often used in phishing attacks. Proceed with caution.',
        embeddedJs: 'Embedded JavaScript',
        embeddedJsDesc: 'Scripts that execute automatically. Often used for malware.',
        launchActions: 'Launch Actions',
        launchActionsDesc: 'Attempts to launch external programs (e.g., cmd.exe).',
        suspiciousLinks: 'Suspicious Links',
        suspiciousLinksDesc: 'Links to IP addresses or dangerous domains.',
        embeddedFiles: 'Embedded Files',
        embeddedFilesDesc: 'Hidden attachments that may contain viruses.',
        extractedLinks: 'Extracted Hyperlinks',
        noLinks: 'No links found in this document.',
        page: 'Page',
        safeModePreview: 'Safe Mode Preview',
        jsDisabled: 'JavaScript execution is disabled in this preview.'
    },
    fr: {
        securityReport: 'Rapport de Sécurité',
        linkInspector: 'Inspecteur de Liens',
        safePreview: 'Aperçu Sécurisé',
        scanning: 'Analyse approfondie de la structure PDF...',
        scanningDesc: 'Vérification des flux d\'objets, catalogues JavaScript et dictionnaires d\'actions.',
        noThreats: 'Aucune Menace Détectée',
        riskDetected: 'Risque Détecté',
        safeSummary: 'Ce document semble exempt de vecteurs de logiciels malveillants courants et de scripts malveillants.',
        riskSummary: 'Ce document contient des éléments souvent utilisés dans les attaques de phishing. Procédez avec prudence.',
        embeddedJs: 'JavaScript Intégré',
        embeddedJsDesc: 'Scripts qui s\'exécutent automatiquement. Souvent utilisés pour les logiciels malveillants.',
        launchActions: 'Actions de Lancement',
        launchActionsDesc: 'Tentatives de lancer des programmes externes (ex: cmd.exe).',
        suspiciousLinks: 'Liens Suspects',
        suspiciousLinksDesc: 'Liens vers des adresses IP ou des domaines dangereux.',
        embeddedFiles: 'Fichiers Intégrés',
        embeddedFilesDesc: 'Pièces jointes cachées pouvant contenir des virus.',
        extractedLinks: 'Hyperliens Extraits',
        noLinks: 'Aucun lien trouvé dans ce document.',
        page: 'Page',
        safeModePreview: 'Aperçu en Mode Sécurisé',
        jsDisabled: 'L\'exécution JavaScript est désactivée dans cet aperçu.'
    },
    pt: {
        securityReport: 'Relatório de Segurança',
        linkInspector: 'Inspetor de Links',
        safePreview: 'Prévia Segura',
        scanning: 'Analisando Estrutura do PDF...',
        scanningDesc: 'Verificando fluxos de objetos, catálogos JavaScript e dicionários de ações.',
        noThreats: 'Nenhuma Ameaça Encontrada',
        riskDetected: 'Risco Detectado',
        safeSummary: 'Este documento parece estar livre de vetores de malware comuns e scripts maliciosos.',
        riskSummary: 'Este documento contém elementos frequentemente usados em ataques de phishing. Prossiga com cuidado.',
        embeddedJs: 'JavaScript Incorporado',
        embeddedJsDesc: 'Scripts que executam automaticamente. Frequentemente usados para malware.',
        launchActions: 'Ações de Lançamento',
        launchActionsDesc: 'Tentativas de iniciar programas externos (ex: cmd.exe).',
        suspiciousLinks: 'Links Suspeitos',
        suspiciousLinksDesc: 'Links para endereços IP ou domínios perigosos.',
        embeddedFiles: 'Arquivos Incorporados',
        embeddedFilesDesc: 'Anexos ocultos que podem conter vírus.',
        extractedLinks: 'Hyperlinks Extraídos',
        noLinks: 'Nenhum link encontrado neste documento.',
        page: 'Página',
        safeModePreview: 'Prévia em Modo Seguro',
        jsDisabled: 'A execução de JavaScript está desativada nesta prévia.'
    }
};

interface PhishingDetectorToolProps {
    file: File;
    lang?: Language;
}

export const PhishingDetectorTool: React.FC<PhishingDetectorToolProps> = ({ file, lang = 'en' }) => {
    const t = phishingTranslations[lang] || phishingTranslations.en;
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<SecurityAnalysisResult | null>(null);
    const [activeTab, setActiveTab] = useState<'report' | 'links' | 'preview'>('report');
    const [previewPage, setPreviewPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const renderIdRef = useRef(0); // For race condition prevention

    const analyzeFile = useCallback(async (f: File) => {
        setIsAnalyzing(true);
        setResult(null);
        try {
            const analysis = await analyzePdfSecurity(f);
            setResult(analysis);

            // Get num pages for preview - use dynamic import
            await initPdfWorker();
            const pdfjs = await import('pdfjs-dist');
            const arrayBuffer = await f.arrayBuffer();
            const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            try {
                setNumPages(pdf.numPages);
            } finally {
                // Clean up - ensure PDF is always destroyed
                if (pdf) await pdf.destroy();
            }
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.error(error);
            }
        } finally {
            setIsAnalyzing(false);
        }
    }, []);

    useEffect(() => {
        if (file) {
            analyzeFile(file);
        }
    }, [file, analyzeFile]);

    // Render Safe Preview with cancellation
    useEffect(() => {
        if (activeTab !== 'preview' || !file || !canvasRef.current) return;

        const currentRenderId = ++renderIdRef.current;
        let renderTask: any = null;
        let pdfDoc: any = null;

        const renderSafePreview = async () => {
            try {
                await initPdfWorker();
                const pdfjs = await import('pdfjs-dist');
                const arrayBuffer = await file.arrayBuffer();

                if (currentRenderId !== renderIdRef.current) return;

                const loadingTask = pdfjs.getDocument({
                    data: arrayBuffer,
                    enableScripting: false
                } as any);
                pdfDoc = await loadingTask.promise;

                if (currentRenderId !== renderIdRef.current) {
                    await pdfDoc.destroy();
                    return;
                }

                const page = await pdfDoc.getPage(previewPage);
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = canvasRef.current;

                if (!canvas || currentRenderId !== renderIdRef.current) {
                    await pdfDoc.destroy();
                    return;
                }

                const context = canvas.getContext('2d');
                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    renderTask = page.render({
                        canvasContext: context,
                        viewport: viewport
                    });
                    await renderTask.promise;
                }

                // Cleanup after render
                await pdfDoc.destroy();
            } catch (e: any) {
                if (e?.name !== 'RenderingCancelledException') {
                    console.error("Preview render error", e);
                }
            }
        };

        renderSafePreview();

        return () => {
            if (renderTask) {
                renderTask.cancel();
            }
        };
    }, [activeTab, previewPage, file]);

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
                                aria-label={t.securityReport || "Security Report"}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'report' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <Shield size={18} />
                                <span className="font-medium">{t.securityReport}</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('links')}
                                aria-label={t.linkInspector || "Link Inspector"}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'links' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <LinkIcon size={18} />
                                <span className="font-medium">{t.linkInspector}</span>
                                {result && result.details.links.length > 0 && (
                                    <span className="ml-auto bg-gray-700 text-white text-xs py-0.5 px-2 rounded-full">
                                        {result.details.links.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('preview')}
                                aria-label={t.safePreview || "Safe Preview"}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'preview' ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <Eye size={18} />
                                <span className="font-medium">{t.safePreview}</span>
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2">
                    {isAnalyzing ? (
                        <div className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-gray-100 min-h-[400px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-canada-red mb-4"></div>
                            <p className="text-gray-500 font-medium">{t.scanning}</p>
                            <p className="text-xs text-gray-400 mt-2">{t.scanningDesc}</p>
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
                                                    {result.riskLevel === 'SAFE' ? t.noThreats : `${result.riskLevel} ${t.riskDetected}`}
                                                </h2>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getRiskColor(result.riskLevel)}`}>
                                                    SCORE: {result.score}/100
                                                </span>
                                            </div>
                                            <p className="text-gray-500">
                                                {result.riskLevel === 'SAFE'
                                                    ? t.safeSummary
                                                    : t.riskSummary
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <RiskItem
                                            label={t.embeddedJs}
                                            detected={result.details.hasJavascript}
                                            desc={t.embeddedJsDesc}
                                        />
                                        <RiskItem
                                            label={t.launchActions}
                                            detected={result.details.hasLaunchActions}
                                            desc={t.launchActionsDesc}
                                        />
                                        <RiskItem
                                            label={t.suspiciousLinks}
                                            detected={result.details.links.some(l => l.isSuspicious)}
                                            desc={t.suspiciousLinksDesc}
                                        />
                                        <RiskItem
                                            label={t.embeddedFiles}
                                            detected={result.details.embeddedFiles.length > 0}
                                            desc={t.embeddedFilesDesc}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'links' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-xl font-bold mb-6">{t.extractedLinks}</h3>
                                    {result.details.links.length === 0 ? (
                                        <div className="text-center py-12 text-gray-400">
                                            <LinkIcon className="mx-auto mb-4 opacity-50" size={48} />
                                            <p>{t.noLinks}</p>
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
                                                            <span className="text-gray-500">{t.page} {link.page}</span>
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
                                        <h3 className="text-xl font-bold">{t.safeModePreview}</h3>
                                        <div className="flex items-center gap-2">
                                            <button
                                                disabled={previewPage <= 1}
                                                onClick={() => setPreviewPage(p => p - 1)}
                                                aria-label="Previous Page"
                                                className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
                                            >
                                                ←
                                            </button>
                                            <span className="font-mono text-sm">{previewPage} / {numPages}</span>
                                            <button
                                                disabled={previewPage >= numPages}
                                                onClick={() => setPreviewPage(p => p + 1)}
                                                aria-label="Next Page"
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
                                        {t.jsDisabled}
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
