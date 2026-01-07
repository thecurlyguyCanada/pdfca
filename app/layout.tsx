import React from 'react';
import './globals.css';

export const metadata = {
    title: 'PDF Tools',
    description: 'Free PDF Tools',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
