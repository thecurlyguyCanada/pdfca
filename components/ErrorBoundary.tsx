'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { logError } from '@/utils/errorLogger';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logError(error, { errorInfo });
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                        <AlertTriangle className="text-red-600 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
                    <p className="text-gray-600 max-w-md mb-8">
                        We&apos;ve encountered an unexpected error. Don&apos;t worry, your files are safe as everything runs locally on your device.
                    </p>
                    <button
                        onClick={this.handleReset}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-canada-red text-white rounded-full font-bold hover:bg-canada-red-dark transition-colors shadow-lg"
                    >
                        <RefreshCcw size={20} />
                        Try Again
                    </button>
                    {process.env.NODE_ENV === 'development' && (
                        <div className="mt-8 p-4 bg-gray-900 rounded-xl text-left overflow-auto max-w-full">
                            <pre className="text-xs text-red-400 font-mono">
                                {this.state.error?.stack}
                            </pre>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
