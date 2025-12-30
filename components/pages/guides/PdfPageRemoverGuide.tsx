'use client';

import Link from 'next/link';
import React from 'react';
import { Trash2, Shield, Zap, HelpCircle } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Delete PDF Pages | Free & Private ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Learn how to remove pages from PDF securely. Our definitive ${CURRENT_YEAR} guide shows you how to delete pages locally on any device without uploads. Free and private.`
        },
        h1: `How to Remove PDF Pages: The ${CURRENT_YEAR} Guide`,
        subtitle: "A complete walkthrough on how to remove pages from a PDF—unwanted, blank, or sensitive—securely and for free.",

        intro: (
            <>
                Searching for a reliable <strong>PDF page remover</strong>? We've all been there: you scan a contract and realize page 3 is upside down, or you need to remove pages from a PDF to share only the executive summary with your team.
                <br /><br />
                In the past, knowing <strong>how to remove pages from a PDF</strong> required expensive software. Today, you can use our local-first tool to delete pages in seconds without risky uploads.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "How to Remove Pages from a PDF in Seconds",
                content: (
                    <>
                        <p className="mb-4">
                            Using a <strong>PDF page remover</strong> doesn't need to be complicated. Our tool is designed to be intuitive, letting you see all your pages and remove them with a single click.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Open the Remover</strong>: Use our <Link href={`/${lang}/pdf-page-remover`} className="text-canada-red hover:underline font-medium">PDF Page Remover tool</Link>. Since it's local-first, it loads your document without uploading it to any server.
                            </li>
                            <li className="pl-2">
                                <strong>Select Pages</strong>: Click on the thumbnails representing the pages you want to remove. A trash icon will appear over the selected pages.
                            </li>
                            <li className="pl-2">
                                <strong>Download result</strong>: Click 'Remove Pages' and your updated PDF will be saved to your device immediately.
                            </li>
                        </ol>
                        <p className="mb-4">
                            This process works for <strong>removing pages from PDF</strong> files of any size, whether you need to <strong>delete PDF pages</strong> from a 3-page memo or a 300-page report. The interface provides visual thumbnails, making it easy to identify exactly which pages to remove.
                        </p>
                    </>
                )
            },
            {
                id: "privacy",
                title: "Safe & Secure PDF Page Removal",
                content: (
                    <>
                        <p className="mb-4">
                            When you search for <strong>how do I remove pages from a PDF</strong>, most results require you to upload your document to a cloud server. This is a massive privacy risk for sensitive documents.
                        </p>
                        <p className="mb-4">
                            <strong>pdfcanada.ca</strong> is different. We process everything locally in your browser. Your files never leave your computer, ensuring 100% privacy and security.
                        </p>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Why Local Processing Matters</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>No data breaches</strong>: Your files never touch our servers, eliminating the risk of third-party access</li>
                            <li><strong>PIPEDA compliance</strong>: Canadian privacy laws require strict data handling—local processing ensures automatic compliance</li>
                            <li><strong>Confidential documents</strong>: Contracts, NDAs, financial records, and medical documents stay 100% private</li>
                            <li><strong>Instant deletion</strong>: Sensitive pages are removed immediately without server logs or cloud storage</li>
                        </ul>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Common Scenarios for Removing PDF Pages",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Business & Professional Use</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Contract redaction</strong>: Remove confidential pricing pages before sharing proposals with partners</li>
                            <li><strong>Report summaries</strong>: Extract executive summaries by removing detailed appendices</li>
                            <li><strong>Presentation cleanup</strong>: Delete draft slides or outdated content before final distribution</li>
                            <li><strong>Invoice management</strong>: Remove internal notes or sensitive payment details from client-facing invoices</li>
                            <li><strong>Tender documents</strong>: Clean up bid submissions by removing internal review pages</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Academic & Research</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Thesis editing</strong>: Remove draft chapters or outdated research sections</li>
                            <li><strong>Journal submissions</strong>: Delete supplementary materials to meet page limits</li>
                            <li><strong>Student assignments</strong>: Remove instructor feedback pages before archiving</li>
                            <li><strong>Research papers</strong>: Extract specific sections for collaboration or citation</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Personal & Administrative</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Tax documents</strong>: Remove unnecessary forms from CRA submissions</li>
                            <li><strong>Medical records</strong>: Delete outdated prescriptions or redundant test results</li>
                            <li><strong>Legal documents</strong>: Remove witness lists or internal notes from court filings</li>
                            <li><strong>Scanned documents</strong>: Delete blank pages created during bulk scanning</li>
                            <li><strong>eBook customization</strong>: Remove unwanted chapters or promotional pages from purchased PDFs</li>
                        </ul>
                    </>
                )
            },
            {
                id: "technical",
                title: "Understanding PDF Page Structure",
                content: (
                    <>
                        <p className="mb-4">
                            When you <strong>remove a page from a PDF</strong>, you're not just deleting an image—you're modifying the PDF's internal structure. Understanding this helps ensure clean, error-free results.
                        </p>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">What Happens During Page Removal</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Page object deletion</strong>: The PDF page dictionary and associated content streams are removed</li>
                            <li><strong>Reference updates</strong>: Page tree structures and cross-reference tables are rebuilt</li>
                            <li><strong>Bookmark preservation</strong>: Internal links and bookmarks are automatically updated to point to correct pages</li>
                            <li><strong>Metadata adjustment</strong>: Page count and document properties are recalculated</li>
                            <li><strong>Form field handling</strong>: Interactive elements on deleted pages are removed from the form dictionary</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Quality Preservation</h3>
                        <p className="mb-4">
                            Our <strong>PDF page remover</strong> ensures that removing pages doesn't degrade the quality of your remaining content. Unlike some tools that re-render PDFs (causing quality loss), we manipulate the PDF structure directly:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Original fonts and vector graphics remain pristine</li>
                            <li>Image compression settings are preserved</li>
                            <li>Color profiles and embedded resources stay intact</li>
                            <li>PDF/A compliance is maintained (if present in the original)</li>
                        </ul>
                    </>
                )
            },
            {
                id: "best-practices",
                title: "Best Practices for PDF Page Removal",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Before You Remove Pages</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Create a backup</strong>: Always keep an original copy before <strong>deleting pages from PDF</strong> files</li>
                            <li><strong>Review page numbers</strong>: PDFs may have custom numbering (i, ii, iii vs 1, 2, 3)—verify you're removing the correct pages</li>
                            <li><strong>Check bookmarks</strong>: Review the table of contents to ensure removed pages won't break document navigation</li>
                            <li><strong>Consider file size</strong>: Removing pages reduces file size, but orphaned resources may remain—use compression tools afterward if needed</li>
                            <li><strong>Verify permissions</strong>: Some PDFs have editing restrictions—remove password protection first if necessary</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">After Removal</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Test functionality</strong>: Open the new PDF and verify all links, forms, and interactive elements work</li>
                            <li><strong>Check page flow</strong>: Ensure the remaining pages maintain logical continuity</li>
                            <li><strong>Validate compliance</strong>: If the document has regulatory requirements (PDF/A, accessibility), re-validate</li>
                            <li><strong>Update metadata</strong>: Modify title, author, and description fields if page removal changes the document scope</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Batch Operations</h3>
                        <p className="mb-4">
                            When you need to <strong>remove pages from multiple PDFs</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Process files one at a time to avoid browser memory issues</li>
                            <li>Use consistent naming conventions (e.g., "contract_v2_cleaned.pdf")</li>
                            <li>Keep a spreadsheet tracking which pages were removed from each file</li>
                            <li>Verify the first few files thoroughly before processing the entire batch</li>
                        </ul>
                    </>
                )
            },
            {
                id: "comparison",
                title: "Comparison: Free vs Paid PDF Page Removers",
                content: (
                    <>
                        <p className="mb-4">
                            Many users wonder whether they need expensive software like <strong>Adobe Acrobat</strong> to <strong>delete pages from PDF</strong> files. Here's an honest comparison:
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-700">
                                        <th className="px-4 py-3 text-left font-bold">Feature</th>
                                        <th className="px-4 py-3 text-left font-bold">pdfcanada.ca (Free)</th>
                                        <th className="px-4 py-3 text-left font-bold">Adobe Acrobat DC ($240/yr)</th>
                                        <th className="px-4 py-3 text-left font-bold">Online Tools (Ads)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t dark:border-gray-700">
                                        <td className="px-4 py-3">Page removal</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Unlimited</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Unlimited</td>
                                        <td className="px-4 py-3 text-yellow-600">Limited</td>
                                    </tr>
                                    <tr className="border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                                        <td className="px-4 py-3">Privacy (local processing)</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ 100% local</td>
                                        <td className="px-4 py-3 text-yellow-600">Desktop only</td>
                                        <td className="px-4 py-3 text-red-600 font-bold">✗ Cloud upload</td>
                                    </tr>
                                    <tr className="border-t dark:border-gray-700">
                                        <td className="px-4 py-3">Cost</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Free</td>
                                        <td className="px-4 py-3 text-red-600">$240/year</td>
                                        <td className="px-4 py-3 text-yellow-600">Free with ads</td>
                                    </tr>
                                    <tr className="border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                                        <td className="px-4 py-3">File size limit</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ No limit</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ No limit</td>
                                        <td className="px-4 py-3 text-red-600">50 MB typical</td>
                                    </tr>
                                    <tr className="border-t dark:border-gray-700">
                                        <td className="px-4 py-3">Installation required</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Browser only</td>
                                        <td className="px-4 py-3 text-red-600">✗ Desktop app</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Browser only</td>
                                    </tr>
                                    <tr className="border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                                        <td className="px-4 py-3">Works offline</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ After first load</td>
                                        <td className="px-4 py-3 text-green-600 font-bold">✓ Desktop mode</td>
                                        <td className="px-4 py-3 text-red-600">✗ Requires connection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-4">
                            <strong>Bottom line</strong>: For page removal alone, expensive software is unnecessary. However, Adobe Acrobat offers advanced features like OCR, form creation, and professional PDF editing that justify the cost for heavy users.
                        </p>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Issues",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">File Won't Load</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Password protection</strong>: Remove the password using our decryption tool first</li>
                            <li><strong>Corrupted PDF</strong>: Try repairing the file with <Link href={`/${lang}/flatten-pdf`} className="text-canada-red hover:underline">PDF flattening</Link></li>
                            <li><strong>Very large files</strong>: Files over 500 MB may require more RAM—close other browser tabs</li>
                            <li><strong>Unsupported format</strong>: Ensure the file is actually a PDF (some scans are saved as images)</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Pages Not Deleting</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Browser compatibility</strong>: Use Chrome, Firefox, or Safari (latest versions)</li>
                            <li><strong>JavaScript disabled</strong>: Enable JavaScript in browser settings</li>
                            <li><strong>Editing restrictions</strong>: Some PDFs have permissions that block modifications</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Output Issues</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Links broken</strong>: Internal hyperlinks may need manual adjustment if they pointed to removed pages</li>
                            <li><strong>File size unchanged</strong>: Orphaned resources remain—use <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline">PDF compression</Link> to optimize</li>
                            <li><strong>Bookmarks incorrect</strong>: Manually update table of contents after major page removals</li>
                        </ul>
                    </>
                )
            },
            {
                id: "alternatives",
                title: "Alternative Methods & When to Use Them",
                content: (
                    <>
                        <p className="mb-4">
                            While our <strong>PDF page remover</strong> is optimized for quick page deletion, other approaches may be better for specific scenarios:
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Extract Instead of Delete</h3>
                        <p className="mb-4">
                            If you want to <strong>keep only specific pages</strong> from a large PDF, consider using our <Link href={`/${lang}/split-pdf`} className="text-canada-red hover:underline font-medium">PDF Splitter</Link> to extract desired pages into a new document. This is more efficient than removing hundreds of pages individually.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Reorganize Complex Documents</h3>
                        <p className="mb-4">
                            For documents that need both page removal and reordering, use our <Link href={`/${lang}/organize-pdf`} className="text-canada-red hover:underline font-medium">Organize PDF tool</Link>, which lets you drag-and-drop pages into any order while removing unwanted ones.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Redact Content on Pages</h3>
                        <p className="mb-4">
                            If you need to <strong>hide specific content</strong> without removing entire pages, redaction is more appropriate. This permanently removes text or images while keeping the page structure intact.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Merge After Removal</h3>
                        <p className="mb-4">
                            To create a new document from pages spread across multiple PDFs, first remove unwanted pages from each file, then use <Link href={`/${lang}/merge-pdf`} className="text-canada-red hover:underline font-medium">PDF Merge</Link> to combine the cleaned documents.
                        </p>
                    </>
                )
            },
            {
                id: "seo-keywords",
                title: "Advanced Page Removal Techniques",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Removing Blank Pages Automatically</h3>
                        <p className="mb-4">
                            Bulk scanning often creates <strong>blank PDF pages</strong> between documents. While our tool shows thumbnails to manually identify blank pages, you can speed up the process by:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Scrolling through thumbnails quickly—blank pages are easy to spot visually</li>
                            <li>Using browser zoom (Cmd/Ctrl + scroll) to see more pages at once</li>
                            <li>Selecting multiple blank pages by holding Shift and clicking</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Deleting Range of Pages</h3>
                        <p className="mb-4">
                            To <strong>delete multiple PDF pages</strong> at once:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mb-6">
                            <li>Click the first page in the range you want to remove</li>
                            <li>Hold Shift and click the last page in the range</li>
                            <li>All pages in between will be selected automatically</li>
                            <li>Click "Remove Pages" to delete them all simultaneously</li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Preserving Page Numbers After Removal</h3>
                        <p className="mb-4">
                            When you <strong>remove a page from a PDF</strong>, subsequent pages automatically renumber. If you need to maintain original page numbers for citations or references:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Insert blank pages as placeholders instead of deleting</li>
                            <li>Use PDF editing tools to adjust the page numbering scheme</li>
                            <li>Add footnotes explaining missing page numbers in official documents</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "How to remove pages from a PDF for free?",
                a: "Simply use our PDF Page Remover tool! Upload your document, select the pages you want to delete, and download the new version. It's 100% free and happens locally in your browser—no subscriptions, no hidden fees, no trial limitations."
            },
            {
                q: "How do I remove pages from a PDF on a Mac or PC?",
                a: "Our tool works in any modern browser. Whether you are on Windows or macOS, you can remove pages from a PDF without installing any software. Just open your browser, load the tool, and start removing pages immediately."
            },
            {
                q: "Can I delete multiple pages from a PDF at once?",
                a: "Yes! Click on multiple page thumbnails to select them, or use Shift+Click to select a range of pages. All selected pages will be removed simultaneously when you click 'Remove Pages'."
            },
            {
                q: "How do I remove a single page from a PDF?",
                a: "Click on the thumbnail of the page you want to remove, then click the 'Remove Pages' button. The page will be deleted and the remaining pages will be renumbered automatically."
            },
            {
                q: "Will removing pages reduce my PDF file size?",
                a: "Yes, removing pages reduces file size proportionally. However, if embedded fonts or images are shared across pages, some resources may remain. For maximum size reduction, use our PDF compression tool after page removal."
            },
            {
                q: "Is it safe to remove pages from confidential PDFs?",
                a: "Absolutely. Our tool processes everything locally in your browser. Your files never upload to any server, ensuring complete privacy for contracts, medical records, financial documents, and other sensitive files."
            },
            {
                q: "Can I remove pages from a password-protected PDF?",
                a: "You'll need to remove the password first using our PDF unlock tool. Once the password is removed, you can delete pages freely. The output PDF will also be password-free unless you re-encrypt it."
            },
            {
                q: "How to delete blank pages from a scanned PDF?",
                a: "Our tool displays visual thumbnails of all pages. Blank pages appear as empty white boxes, making them easy to identify. Click on all blank page thumbnails, then remove them all at once."
            },
            {
                q: "Will page numbers update after removing pages?",
                a: "Yes, the PDF's internal page numbering updates automatically. However, if pages have printed numbers (like in a scanned book), those will remain as part of the page content. Only the PDF's structural page count changes."
            },
            {
                q: "Can I undo page removal after downloading?",
                a: "No—once you download the modified PDF, the removed pages are permanently deleted from that file. Always keep a backup of your original PDF before removing pages if you might need those pages later."
            },
            {
                q: "How to remove specific pages from a large PDF (100+ pages)?",
                a: "Use our thumbnail view to quickly scroll through pages. Click on each page you want to remove, or use Shift+Click to select ranges. For very large PDFs, consider splitting the document first if you only need a small section."
            },
            {
                q: "Does removing pages affect PDF quality?",
                a: "No. Our tool manipulates the PDF structure directly without re-rendering. Fonts, images, and vector graphics on remaining pages maintain their original quality and resolution."
            },
            {
                q: "Can I remove pages from a PDF on my iPhone or Android?",
                a: "Yes! Our web-based tool works on mobile browsers. The interface adapts to smaller screens, letting you tap thumbnails to select pages for removal. Processing happens locally on your device."
            },
            {
                q: "How to remove pages from a PDF and save as a new file?",
                a: "After selecting pages to remove and clicking 'Remove Pages', your browser will automatically download the modified PDF. You can then rename it or save it to a specific folder. The original file remains unchanged."
            },
            {
                q: "Will removing pages break internal links or bookmarks?",
                a: "Bookmarks and links are automatically updated to reflect the new page structure. However, if a bookmark pointed to a deleted page, it will be removed or adjusted to the nearest remaining page."
            },
            {
                q: "Can I remove pages from PDF/A archival documents?",
                a: "Yes, but removing pages may break PDF/A compliance if you delete essential metadata or structure elements. After removal, validate the PDF against PDF/A standards if compliance is required."
            },
            {
                q: "How to remove pages from a scanned PDF without losing OCR text?",
                a: "If your PDF has an OCR text layer, removing pages will preserve the OCR text on remaining pages. The searchable text layer stays intact for all pages you keep."
            },
            {
                q: "What's the difference between deleting pages and splitting a PDF?",
                a: "Deleting pages removes them permanently and keeps the remaining pages in one file. Splitting creates separate PDF files from different page ranges. Use page removal when you want to discard content; use splitting when you want to keep everything but organize it differently."
            },
            {
                q: "Can I remove pages from a digitally signed PDF?",
                a: "Removing pages from a signed PDF will invalidate the digital signature, since the signature covers the entire document. After page removal, you'll need to re-sign the PDF if a valid signature is required."
            },
            {
                q: "How to remove the first or last page from a PDF?",
                a: "Click on the thumbnail of the first or last page, then click 'Remove Pages'. This is commonly needed to remove cover pages, legal disclaimers, or advertising pages from downloaded PDFs."
            },
            {
                q: "Does your tool work offline after the first load?",
                a: "Yes! Once the page loads, our tool caches the necessary code. You can process PDFs offline as long as you don't close the browser tab or clear your cache."
            },
            {
                q: "Can I remove pages from form PDFs (fillable forms)?",
                a: "Yes, but be aware that form fields on deleted pages will also be removed. If form logic references deleted pages, you may need to adjust form calculations or validation rules afterward."
            },
            {
                q: "How to remove pages containing sensitive information before sharing?",
                a: "Identify pages with confidential data using the thumbnail preview, select them, and remove. For extra security, verify the output PDF doesn't contain hidden metadata by checking document properties."
            },
            {
                q: "What's the maximum PDF size I can process?",
                a: "There's no hard limit, but browser memory constraints apply. Most modern computers can handle PDFs up to 500 MB easily. For extremely large files (1 GB+), close other applications to free up RAM."
            },
            {
                q: "Can I remove every other page (odd or even pages)?",
                a: "Yes, though you'll need to manually select pages. Click the first odd/even page, then Shift+Click through the document, selecting every other page. This is useful for separating duplex scans."
            }
        ],

        ctaTitle: "Ready to Use the PDF Page Remover?",
        ctaButton: "Start Removing Pages",
        ctaSubtext: "No account needed. 100% Free & Private."
    },
    fr: {
        seo: {
            title: `Comment Supprimer des Pages PDF | Guide Local ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à supprimer des pages de vos PDF en toute sécurité. Notre guide ${CURRENT_YEAR} vous montre comment retirer des pages localement sans téléchargement. Gratuit et privé.`
        },
        h1: "Suppresseur de Pages PDF : Le Guide Ultime",
        subtitle: "La méthode la plus simple pour retirer des pages d'un PDF, en toute sécurité.",

        intro: (
            <>
                Vous cherchez un <strong>suppresseur de pages PDF</strong> fiable ? Nous sommes tous passés par là : vous scannez un contrat et réalisez que la page 3 est à l'envers.
                <br /><br />
                Auparavant, savoir <strong>comment supprimer des pages d'un PDF</strong> nécessitait des logiciels coûteux. Aujourd'hui, vous pouvez le faire en quelques secondes.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Comment supprimer des pages d'un PDF en quelques secondes",
                content: (
                    <>
                        <p className="mb-4">
                            Utiliser un <strong>suppresseur de pages PDF</strong> ne devrait pas être compliqué. Notre outil est conçu pour être intuitif.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2"><strong>Ouvrez l'outil</strong></li>
                            <li className="pl-2"><strong>Sélectionnez les pages</strong></li>
                            <li className="pl-2"><strong>Téléchargez</strong></li>
                        </ol>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Comment supprimer des pages d'un PDF gratuitement ?",
                a: "Utilisez simplement notre suppresseur de pages PDF ! C'est 100% gratuit et sécurisé."
            }
        ],

        ctaTitle: "Prêt à utiliser le suppresseur de pages PDF ?",
        ctaButton: "Supprimer les pages",
        ctaSubtext: "Gratuit, rapide et sécurisé."
    }
});

export const PdfPageRemoverGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-page-remover"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-01-20"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I remove pages from a PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez le suppresseur de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les miniatures des pages à supprimer, puis cliquez 'Supprimer les pages'. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                        : "Use pdfcanada.ca's PDF Page Remover. Upload your PDF, click on the thumbnails of pages to remove, then click 'Remove Pages'. All processing happens locally in your browser - your files never leave your device.",
                    tool: "PDF Page Remover",
                    steps: lang === 'fr'
                        ? ["Téléchargez votre fichier PDF", "Sélectionnez les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                        : ["Upload your PDF file", "Select pages to remove", "Download your cleaned PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Suppresseur de Pages PDF' : 'PDF Page Remover', path: lang === 'fr' ? '/fr/guides/pdf-page-remover' : '/guides/pdf-page-remover' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Trash2 size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Guide Suppresseur de Pages' : 'Page Remover Guide', href: lang === 'fr' ? '/fr/guides/pdf-page-remover' : '/guides/pdf-page-remover' }
                ]}
            >
                <div className="w-full space-y-16 text-gray-700 dark:text-gray-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none italic border-l-4 border-canada-red pl-6 py-2 text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-4">
                                <span className="text-canada-red opacity-20 text-5xl font-black">0{idx + 1}</span>
                                {section.title}
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="bg-canada-red rounded-3xl p-12 text-center text-white shadow-xl">
                        <Zap className="mx-auto mb-6 opacity-50" size={48} />
                        <h2 className="text-3xl font-black mb-4">{t.ctaTitle}</h2>
                        <p className="text-white/80 mb-8 font-medium">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/pdf-page-remover`}
                            className="bg-white text-canada-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            {t.ctaButton}
                        </Link>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="text-canada-red" size={32} />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {lang === 'fr' ? "Questions Fréquentes" : "Common Questions"}
                            </h2>
                        </div>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
                                    <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment supprimer des pages d'un PDF gratuitement?" : "How do I remove pages from a PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez le suppresseur de pages PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur les miniatures des pages à supprimer, puis cliquez 'Supprimer les pages'. Tout se fait localement dans votre navigateur - vos fichiers ne quittent jamais votre appareil."
                            : "Use pdfcanada.ca's PDF Page Remover. Upload your PDF, click on the thumbnails of pages to remove, then click 'Remove Pages'. All processing happens locally in your browser - your files never leave your device."}
                        toolName="PDF Page Remover"
                        steps={lang === 'fr'
                            ? ["Téléchargez votre fichier PDF", "Sélectionnez les pages à supprimer", "Téléchargez votre PDF nettoyé"]
                            : ["Upload your PDF file", "Select pages to remove", "Download your cleaned PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-page-remover" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};

export default PdfPageRemoverGuide;


