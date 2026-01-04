'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw, Home } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
                <div className="w-16 h-16 bg-red-100 text-canada-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold">!</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
                <p className="text-gray-600 mb-8 text-sm">
                    A client-side exception has occurred.
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 bg-canada-red text-white px-6 py-3 rounded-xl font-bold hover:bg-canada-darkRed transition-colors"
                    >
                        <RotateCw size={20} />
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
