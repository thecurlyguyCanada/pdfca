import React from 'react';

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

    const parseMarkdown = (text: string) => {
        // Process line by line
        const lines = text.split('\n');
        const result: React.ReactNode[] = [];

        let currentList: React.ReactNode[] = [];
        let listType: 'ul' | 'ol' | null = null;

        const flushList = () => {
            if (listType === 'ul') {
                result.push(<ul key={`ul-${result.length}`} className="list-disc pl-5 mb-4 space-y-1">{currentList}</ul>);
            } else if (listType === 'ol') {
                result.push(<ol key={`ol-${result.length}`} className="list-decimal pl-5 mb-4 space-y-1">{currentList}</ol>);
            }
            currentList = [];
            listType = null;
        };

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();

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
        return result;
    };

    const formatInline = (text: string) => {
        // Basic inline formatting
        const parts: (string | React.ReactNode)[] = [text];

        // Bold: **text**
        processPattern(parts, /\*\*(.*?)\*\*/g, (match) => <strong key={Math.random()}>{match}</strong>);

        // Italic: *text*
        processPattern(parts, /\*(.*?)\*/g, (match) => <em key={Math.random()}>{match}</em>);

        // Link: [text](url)
        processPattern(parts, /\[(.*?)\]\((.*?)\)/g, (match, url) => {
            const safeUrl = url || '';
            const isInternal = safeUrl.startsWith('/') || safeUrl.startsWith(window.location.origin);
            return (
                <a
                    key={Math.random()}
                    href={safeUrl}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    className="text-canada-red hover:underline"
                >
                    {match}
                </a>
            );
        }, true);

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

    return (
        <div className={`markdown-content ${className}`}>
            {parseMarkdown(content)}
        </div>
    );
};
