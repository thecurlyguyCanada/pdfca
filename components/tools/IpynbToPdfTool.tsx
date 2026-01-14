
'use client';

import React, { useState, useEffect } from 'react';
import { Upload, FileText, Download, CheckCircle2, AlertCircle, Loader2, Sparkles, NotebookIcon } from 'lucide-react';
import { translations, Language } from '../../utils/i18n';
import { triggerHaptic } from '../../utils/haptics';
import { convertIpynbToPdf } from '../../utils/ipynbUtils';

interface IpynbToPdfToolProps {
    lang: Language;
    file?: File;
}

export const IpynbToPdfTool: React.FC<IpynbToPdfToolProps> = ({ lang, file: initialFile }) => {
    const t = translations[lang];
    const [file, setFile] = useState<File | null>(initialFile || null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (initialFile) {
            setFile(initialFile);
            setResult(null);
            setError(null);
            setProgress(0);
        }
    }, [initialFile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && (selectedFile.name.endsWith('.ipynb') || selectedFile.type === 'application/x-ipynb+json')) {
            setFile(selectedFile);
            setResult(null);
            setError(null);
            triggerHaptic('light');
        } else if (selectedFile) {
            setError(lang === 'fr' ? 'Format de fichier non supporté. Veuillez utiliser .ipynb' : (lang === 'pt' ? 'Formato de arquivo não suportado. Use .ipynb' : 'Unsupported file format. Please use .ipynb'));
            triggerHaptic('error');
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);
        setProgress(10);
        triggerHaptic('medium');

        // Simulate progress for better UX
        const progressInterval = setInterval(() => {
            setProgress(prev => Math.min(prev + 5, 90));
        }, 300);

        try {
            const blob = await convertIpynbToPdf(file);

            setProgress(100);
            setResult(blob);
            triggerHaptic('success');
        } catch (err) {
            console.error(err);
            setError(lang === 'fr' ? 'Échec de la conversion. Veuillez vérifier votre fichier.' : (lang === 'pt' ? 'Falha na conversão. Por favor, verifique seu arquivo.' : 'Conversion failed. Please check your file.'));
            triggerHaptic('error');
        } finally {
            clearInterval(progressInterval);
            setIsProcessing(false);
        }
    };

    const handleDownload = () => {
        if (!result || !file) return;

        const url = URL.createObjectURL(result);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name.replace('.ipynb', '.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        triggerHaptic('success');
    };

    const reset = () => {
        setFile(null);
        setResult(null);
        setError(null);
        setProgress(0);
        triggerHaptic('light');
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            {!file ? (
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-canada-red/20 to-orange-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <label className="relative flex flex-col items-center justify-center w-full min-h-[400px] border-2 border-dashed border-modern-neutral-200 dark:border-modern-neutral-800 rounded-3xl bg-white/50 dark:bg-modern-neutral-900/50 hover:bg-white dark:hover:bg-modern-neutral-900 transition-all cursor-pointer overflow-hidden backdrop-blur-sm">
                        <input type="file" className="hidden" accept=".ipynb" onChange={handleFileChange} />
                        <div className="flex flex-col items-center justify-center p-10 text-center">
                            <div className="w-20 h-20 mb-6 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <NotebookIcon className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-modern-neutral-900 dark:text-white mb-3 tracking-tight">
                                {lang === 'fr' ? 'Convertir Jupyter Notebook en PDF' : (lang === 'pt' ? 'Converter Jupyter Notebook para PDF' : 'Convert Jupyter Notebook to PDF')}
                            </h3>
                            <p className="text-modern-neutral-500 dark:text-modern-neutral-400 max-w-md mx-auto leading-relaxed">
                                {lang === 'fr'
                                    ? 'Déposez votre fichier .ipynb ici pour une conversion instantanée et privée.'
                                    : (lang === 'pt' ? 'Solte seu arquivo .ipynb aqui para conversão instantânea e privada.' : 'Drop your .ipynb file here for instant, private conversion.')}
                            </p>
                            <div className="mt-8 flex items-center gap-2 px-6 py-3 bg-modern-neutral-900 dark:bg-white text-white dark:text-modern-neutral-900 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                                <Upload className="w-5 h-5" />
                                <span>{lang === 'fr' ? 'Choisir un Fichier' : (lang === 'pt' ? 'Escolher Arquivo' : 'Choose File')}</span>
                            </div>
                        </div>
                    </label>
                </div>
            ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white dark:bg-modern-neutral-900 rounded-3xl p-6 md:p-8 shadow-2xl shadow-modern-neutral-200/50 dark:shadow-black/50 border border-modern-neutral-100 dark:border-modern-neutral-800">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0">
                                <FileText className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-1 min-w-0 text-center md:text-left">
                                <h4 className="text-xl font-bold text-modern-neutral-900 dark:text-white truncate">
                                    {file.name}
                                </h4>
                                <p className="text-sm text-modern-neutral-500 font-medium">
                                    {(file.size / 1024).toFixed(1)} KB &bull; Jupyter Notebook (v4+)
                                </p>
                            </div>
                            <button
                                onClick={reset}
                                className="text-sm font-bold text-modern-neutral-400 hover:text-canada-red transition-colors whitespace-nowrap"
                            >
                                {lang === 'fr' ? 'Changer de fichier' : (lang === 'pt' ? 'Alterar arquivo' : 'Change file')}
                            </button>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-2xl flex items-center gap-3 animate-in shake duration-500">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}

                        {!result ? (
                            <button
                                onClick={handleConvert}
                                disabled={isProcessing}
                                className="w-full relative group overflow-hidden bg-modern-neutral-900 dark:bg-white text-white dark:text-modern-neutral-900 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
                                        <span>{lang === 'fr' ? 'Conversion de votre Notebook...' : (lang === 'pt' ? 'Convertendo seu Notebook...' : 'Converting Notebook...')}</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-6 h-6 text-orange-400" />
                                        <span>{lang === 'fr' ? 'Générer le PDF' : (lang === 'pt' ? 'Gerar PDF' : 'Generate PDF')}</span>
                                    </>
                                )}
                                {isProcessing && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10 dark:bg-black/10">
                                        <div
                                            className="h-full bg-orange-500 transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </button>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl flex items-center gap-3 mb-4 animate-in slide-in-from-top-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                                        {lang === 'fr' ? 'Conversion réussie ! Votre PDF est prêt.' : (lang === 'pt' ? 'Conversão bem-sucedida! Seu PDF está pronto.' : 'Conversion successful! Your PDF is ready.')}
                                    </p>
                                </div>
                                <button
                                    onClick={handleDownload}
                                    className="w-full bg-canada-red text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-canada-red/20"
                                >
                                    <Download className="w-6 h-6" />
                                    <span>{t.download} PDF</span>
                                </button>
                                <button
                                    onClick={reset}
                                    className="w-full text-sm font-bold text-modern-neutral-500 hover:text-modern-neutral-900 dark:hover:text-white transition-colors py-2"
                                >
                                    {lang === 'fr' ? 'Convertir un autre fichier' : (lang === 'pt' ? 'Converter outro arquivo' : 'Convert another file')}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-500/5 rounded-3xl p-6 md:p-8 border border-orange-100/50 dark:border-orange-500/10">
                        <h5 className="font-bold text-orange-900 dark:text-orange-200 mb-2">
                            {lang === 'fr' ? 'Traitement 100% Local' : (lang === 'pt' ? 'Processamento 100% Local' : '100% Local Processing')}
                        </h5>
                        <p className="text-sm text-orange-800/70 dark:text-orange-300/60 leading-relaxed">
                            {lang === 'fr'
                                ? 'Contrairement aux autres convertisseurs, pdfcanada.ca traite votre Notebook directement dans votre navigateur. Votre code et vos données ne quittent jamais votre ordinateur.'
                                : (lang === 'pt' ? 'Ao contrário de outros conversores, pdfcanada.ca processa seu Notebook diretamente no navegador. Seu código e dados nunca saem do seu computador.' : 'Unlike other converters, pdfcanada.ca processes your Notebook directly in your browser. Your code and data never leave your computer.')}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IpynbToPdfTool;
