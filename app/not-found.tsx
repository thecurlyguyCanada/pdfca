import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
                <h1 className="text-6xl font-black text-canada-red mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-canada-red text-white px-6 py-3 rounded-xl font-bold hover:bg-canada-darkRed transition-colors"
                >
                    <Home size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
