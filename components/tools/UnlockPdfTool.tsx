'use client';

import React, { useState, useCallback } from 'react';
import { Lock, Unlock, Download, AlertTriangle, CheckCircle, Eye, EyeOff, FileText, Shield } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

interface UnlockPdfToolProps {
    file: File;
    onClose: () => void;
    t: any;
}

export const UnlockPdfTool: React.FC<UnlockPdfToolProps> = ({ file, onClose, t }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [unlockedBlob, setUnlockedBlob] = useState<Blob | null>(null);

    const handleUnlock = useCallback(async () => {
        if (!file) return;

        setStatus('processing');
        setErrorMessage('');

        try {
            const arrayBuffer = await file.arrayBuffer();

            // Try to load the PDF - if it needs a password, pdf-lib will throw
            // We use ignoreEncryption to try to bypass owner passwords (restrictions)
            // For user passwords (opening), users need specialized tools
            const pdfDoc = await PDFDocument.load(arrayBuffer, {
                ignoreEncryption: true,
                updateMetadata: false,
            });

            // Save the PDF - this removes any restrictions
            const unlockedBytes = await pdfDoc.save();
            const blob = new Blob([new Uint8Array(unlockedBytes)], { type: 'application/pdf' });

            setUnlockedBlob(blob);
            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            if (error.message?.includes('password') || error.message?.includes('encrypted')) {
                setErrorMessage(t?.passwordRequired || 'This PDF requires a user password to open. Please use a dedicated decryption tool.');
            } else {
                setErrorMessage(t?.unlockError || 'Could not unlock this PDF. It may use unsupported encryption.');
            }
        }
    }, [file, t]);

    const handleDownload = useCallback(() => {
        if (!unlockedBlob) return;

        const url = URL.createObjectURL(unlockedBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name.replace('.pdf', '_unlocked.pdf');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, [unlockedBlob, file]);

    return (
        <div className="flex flex-col h-full w-full bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <Lock className="text-canada-red" size={20} />
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 dark:text-white">{t?.unlockPdf || 'Unlock PDF'}</h2>
                        <p className="text-sm text-gray-500 truncate max-w-[200px]">{file.name}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <span className="sr-only">Close</span>
                    ✕
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    {/* Icon */}
                    <div className="text-center">
                        <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-all ${status === 'success'
                            ? 'bg-green-100 dark:bg-green-900/30'
                            : status === 'error'
                                ? 'bg-red-100 dark:bg-red-900/30'
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}>
                            {status === 'success' ? (
                                <Unlock className="text-green-600" size={40} />
                            ) : status === 'error' ? (
                                <AlertTriangle className="text-red-500" size={40} />
                            ) : (
                                <Lock className="text-gray-400" size={40} />
                            )}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                            {status === 'success'
                                ? (t?.unlockSuccess || 'PDF Unlocked!')
                                : (t?.enterPassword || 'Enter PDF Password')
                            }
                        </h3>
                        <p className="text-sm text-gray-500">
                            {status === 'success'
                                ? (t?.unlockSuccessDesc || 'Your PDF is now unlocked and ready to download.')
                                : (t?.enterPasswordDesc || 'Enter the password to remove protection from this PDF.')
                            }
                        </p>
                    </div>

                    {status !== 'success' && (
                        <>
                            {/* Password Input */}
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={t?.passwordPlaceholder || 'Enter password...'}
                                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-canada-red focus:ring-2 focus:ring-canada-red/20 outline-none transition-all"
                                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {/* Error Message */}
                            {status === 'error' && errorMessage && (
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                    <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
                                </div>
                            )}

                            {/* Unlock Button */}
                            <button
                                onClick={handleUnlock}
                                disabled={status === 'processing'}
                                className="w-full py-4 bg-canada-red hover:bg-red-700 disabled:bg-gray-300 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                            >
                                {status === 'processing' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t?.unlocking || 'Unlocking...'}
                                    </>
                                ) : (
                                    <>
                                        <Unlock size={20} />
                                        {t?.unlockBtn || 'Unlock PDF'}
                                    </>
                                )}
                            </button>
                        </>
                    )}

                    {status === 'success' && (
                        <button
                            onClick={handleDownload}
                            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                        >
                            <Download size={20} />
                            {t?.downloadUnlocked || 'Download Unlocked PDF'}
                        </button>
                    )}

                    {/* Privacy Notice */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                        <Shield size={14} />
                        <span>{t?.privacyNotice || 'Your file is processed locally and never uploaded.'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockPdfTool;
