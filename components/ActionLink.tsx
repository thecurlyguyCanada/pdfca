'use client';

import React from 'react';
import Link from 'next/link';

interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    ariaLabel?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({ href, children, ariaLabel, className, ...props }) => {
    return (
        <Link
            href={href}
            className={className}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </Link>
    );
};
