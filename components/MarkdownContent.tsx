'use client';

import React from 'react';
import Link from 'next/link';

interface MarkdownContentProps {
    content: string;
    className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = '' }) => {
    // Simple markdown parser for basic formatting
    // Supports:
    // - **Bold**
    // - *Italic*
    // - [Link Text](URL)
    // - - List item
    // - 1. Ordered list item
    // - New lines for paragraphs
    // - Tables (simple pipe-based)

    const parseMarkdown = (text: string) => {
        // Process line by line
        // Defensive check: ensure text is a string
        if (typeof text !== 'string') return [];

        const lines = text.split('\n');
        const result: React.ReactNode[] = [];

        let currentList: React.ReactNode[] = [];
        let listType: 'ul' | 'ol' | null = null;
        let currentTable: string[] = [];

        const flushList = () => {
            if (listType === 'ul') {
                result.push(<ul key={`ul-${result.length}`} className="list-disc pl-5 mb-4 space-y-1">{currentList}</ul>);
            } else if (listType === 'ol') {
                result.push(<ol key={`ol-${result.length}`} className="list-decimal pl-5 mb-4 space-y-1">{currentList}</ol>);
            }
            currentList = [];
            listType = null;
        };

        const flushTable = () => {
            if (currentTable.length === 0) return;

            // Basic table parsing
            // Row 0 is header
            // Row 1 is separator (skip)
            // Row 2+ are body

            const rows = currentTable.map(row => {
                // Remove leading/trailing pipes if present
                const cleanRow = row.trim().replace(/^\||\|$/g, '');
                return cleanRow.split('|').map(cell => cell.trim());
            });

            if (rows.length < 2) {
                // Not a valid table, dump as text
                currentTable.forEach((row, i) => {
                    result.push(<p key={`p-table-fallback-${result.length}-${i}`} className="mb-0">{formatInline(row)}</p>);
                });
                currentTable = [];
                return;
            }

            const headerRow = rows[0];
            const bodyRows = rows.slice(2); // Skip separator row at index 1

            result.push(
                <div key={`table-${result.length}`} className="overflow-x-auto mb-6">
                    <table className="min-w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800">
                                {headerRow.map((cell, i) => (
                                    <th key={i} className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-sm">
                                        {formatInline(cell)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                                            {formatInline(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            currentTable = [];
        };

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();

            // Table detection
            if (trimmedLine.startsWith('|')) {
                if (listType !== null) flushList();
                currentTable.push(trimmedLine);
                return;
            }

            // If we hit a non-table line but have a table pending
            if (currentTable.length > 0) {
                flushTable();
            }

            // Unordered list
            if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
                if (listType !== 'ul' && listType !== null) flushList();
                listType = 'ul';
                currentList.push(<li key={`li-${index}`}>{formatInline(trimmedLine.substring(2))}</li>);
                return;
            }

            // Ordered list
            const olMatch = trimmedLine.match(/^\d+\.\s/);
            if (olMatch) {
                if (listType !== 'ol' && listType !== null) flushList();
                listType = 'ol';
                currentList.push(<li key={`li-${index}`}>{formatInline(trimmedLine.substring(olMatch[0].length))}</li>);
                return;
            }

            // Empty line
            if (!trimmedLine) {
                flushList();
                // If we had a table, it was already flushed above because it didn't start with |
                // But if we had consecutive empty lines, or just ended a block, safe to flush list.
                // Table is already flushed by the checks above.
                return;
            }

            // Heading (basic support)
            if (trimmedLine.startsWith('### ')) {
                flushList();
                result.push(<h3 key={`h3-${index}`} className="text-xl font-bold mt-6 mb-3">{formatInline(trimmedLine.substring(4))}</h3>);
                return;
            }
            if (trimmedLine.startsWith('## ')) {
                flushList();
                result.push(<h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4">{formatInline(trimmedLine.substring(3))}</h2>);
                return;
            }

            // Normal paragraph
            flushList();
            result.push(<p key={`p-${index}`} className="mb-4">{formatInline(line)}</p>);
        });

        flushList();
        flushTable(); // Ensure any trailing table is flushed
        return result;
    };

    const formatInline = (text: string) => {
        // Basic inline formatting
        const parts: (string | React.ReactNode)[] = [text];
        let keyCounter = 0;

        // Code: `text`
        processPattern(parts, /`(.*?)`/g, (match) => <code key={`code-${keyCounter++}`} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-canada-red">{match}</code>);

        // Bold: **text**
        processPattern(parts, /\*\*(.*?)\*\*/g, (match) => <strong key={`bold-${keyCounter++}`}>{match}</strong>);

        // Italic: *text*
        processPattern(parts, /\*(.*?)\*/g, (match) => <em key={`italic-${keyCounter++}`}>{match}</em>);

        // Link: [text](url)
        processPattern(parts, /\[(.*?)\]\((.*?)\)/g, (match, url) => {
            const safeUrl = url || '';
            const isInternal = safeUrl.startsWith('/') || safeUrl.includes('pdfcanada.ca');
            if (isInternal) {
                return (
                    <Link
                        key={`link-${keyCounter++}`}
                        href={safeUrl}
                        className="text-canada-red hover:underline"
                    >
                        {match}
                    </Link>
                );
            }
            return (
                <a
                    key={`ext-${keyCounter++}`}
                    href={safeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-canada-red hover:underline"
                >
                    {match}
                </a>
            );
        }, true);

        // Image: ![alt](url)
        // Note: The regex for link above might consume images if not careful.
        // Generally images start with ! so we should handle them separately or before links.
        // But since this is a simple parser, let's add basic support if needed, or rely on the user using <img /> if they want complex stuff.
        // Actually, looking at the regex, ![alt](url) would match the link regex `\[(.*?)\]\((.*?)\)` but include the !.
        // Ideally we should fix the regex order or logic, but for now let's leave it as is to minimize regression, 
        // as the user only complained about tables.

        // Wait, I should add code block support if they have inline code like `cbc:ID`.
        // I added it above as the first pattern.

        return parts;
    };

    const processPattern = (
        parts: (string | React.ReactNode)[],
        regex: RegExp,
        renderer: (match: string, extra?: string) => React.ReactNode,
        twoCaptureGroups: boolean = false
    ) => {
        for (let i = 0; i < parts.length; i++) {
            if (typeof parts[i] !== 'string') continue;

            const text = parts[i] as string;
            const newParts: (string | React.ReactNode)[] = [];
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(text)) !== null) {
                if (match.index > lastIndex) {
                    newParts.push(text.substring(lastIndex, match.index));
                }
                if (twoCaptureGroups) {
                    newParts.push(renderer(match[1], match[2]));
                } else {
                    newParts.push(renderer(match[1]));
                }
                lastIndex = regex.lastIndex;
            }

            if (lastIndex < text.length) {
                newParts.push(text.substring(lastIndex));
            }

            if (newParts.length > 0) {
                parts.splice(i, 1, ...newParts);
                i += newParts.length - 1;
            }
        }
    };

    if (typeof content !== 'string') {
        return <div className={className}>{content}</div>;
    }

    return (
        <div className={`markdown-content ${className}`}>
            {parseMarkdown(content)}
        </div>
    );
};

