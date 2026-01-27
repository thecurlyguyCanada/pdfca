'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Eraser, Shield, Zap, HelpCircle, FileText, CheckCircle, Lock, Eye, EyeOff, AlertTriangle, ArrowRight, Layers, FileWarning, Users, Building2, Scale, Heart } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Remove Text from PDF | Whiteout & Redact PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Learn how to remove, cover, or whiteout sensitive text from PDF documents securely. Our ${CURRENT_YEAR} guide shows you how to redact PDFs locally in your browser without uploading files. Free & Private.`
        },
        h1: `How to Remove Text from PDF: The Complete Whiteout Guide (${CURRENT_YEAR})`,
        subtitle: "Master the art of safely redacting and removing sensitive information from PDF documents without breaking formatting.",

        intro: (
            <>
                Have you ever needed to share a PDF but wanted to hide certain information first? Perhaps it's a contract with a confidential salary figure, a tax form with a social insurance number, or a legal document with private addresses. Whatever the case, knowing how to <strong>remove text from PDF</strong> documents is an essential skill in our privacy-conscious world.
                <br /><br />
                The process of covering or removing text from a PDF is often called <strong>"whiteout"</strong> or <strong>"redaction"</strong>. Unlike simply deleting text (which can sometimes be recovered), proper whiteout permanently covers the information so it cannot be seen, copied, or extracted—even by sophisticated forensic tools.
                <br /><br />
                In this comprehensive guide, we'll explore everything you need to know about safely removing text from PDFs, from basic whiteout techniques to professional-grade redaction best practices.
            </>
        ),

        sections: [
            {
                id: "what-is-whiteout",
                title: "What is PDF Whiteout?",
                content: (
                    <div className="space-y-4">
                        <p>
                            <strong>PDF Whiteout</strong> is the digital equivalent of using correction fluid on paper. It involves placing an opaque white (or colored) rectangle over text or images in a PDF document. When done correctly, the covered content becomes permanently invisible and cannot be recovered.
                        </p>
                        <p>
                            This is different from simply changing the text color to white, which can easily be revealed by selecting all text or changing view settings. True whiteout actually draws a solid shape over the content, embedding it into the PDF structure itself.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="p-6 border border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-900/20">
                                <h4 className="font-bold mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
                                    <CheckCircle size={20} />
                                    Proper Whiteout
                                </h4>
                                <ul className="text-sm space-y-1 text-green-800 dark:text-green-300">
                                    <li>• Permanently covers content</li>
                                    <li>• Cannot be copy/pasted</li>
                                    <li>• Text selection skips the area</li>
                                    <li>• Safe for sharing</li>
                                </ul>
                            </div>
                            <div className="p-6 border border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-900/20">
                                <h4 className="font-bold mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
                                    <AlertTriangle size={20} />
                                    Fake "Redaction"
                                </h4>
                                <ul className="text-sm space-y-1 text-red-800 dark:text-red-300">
                                    <li>• Just changes text color</li>
                                    <li>• Still selectable/copyable</li>
                                    <li>• Visible in raw PDF code</li>
                                    <li>• Major privacy risk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "how-to-whiteout",
                title: "Step-by-Step: How to Remove Text from PDF",
                content: (
                    <div className="space-y-6">
                        <p>Using our free PDF Whiteout tool is straightforward. Here's how to safely remove sensitive text from any PDF:</p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Open the Tool</strong>: Navigate to our <Link href={`/${lang}/tools/remove-pdf-text`} className="text-canada-red hover:underline font-medium">PDF Whiteout tool</Link>. It works on Windows, Mac, Linux, iOS, and Android—any device with a modern web browser.
                            </li>
                            <li className="pl-2">
                                <strong>Upload Your PDF</strong>: Click "Select PDF" or drag and drop your document. Remember: your file stays on your device and is never uploaded to any server.
                            </li>
                            <li className="pl-2">
                                <strong>Navigate to the Page</strong>: Use the page navigation arrows to find the page containing the text you want to remove. You can zoom in for precision work.
                            </li>
                            <li className="pl-2">
                                <strong>Draw the Whiteout Box</strong>: Click and drag to draw a rectangle over the text you want to cover. The selection will appear as a highlighted area.
                            </li>
                            <li className="pl-2">
                                <strong>Apply the Whiteout</strong>: Click "Apply Whiteout" to permanently cover the selected areas. The tool draws solid white rectangles over your selections.
                            </li>
                            <li className="pl-2">
                                <strong>Download</strong>: Save your redacted PDF. The original sensitive text is now permanently covered with white boxes.
                            </li>
                        </ol>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                                <strong>Pro Tip:</strong> Always open the downloaded file and verify the whiteout was applied correctly before sharing. Try selecting the text to ensure it cannot be copied.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                id: "privacy-security",
                title: "Privacy-First Redaction: No Cloud Uploads",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Your Documents Never Leave Your Device
                        </h4>
                        <p className="mb-4">
                            Most online "Remove text from PDF" tools require you to upload your sensitive documents to their servers. This creates a significant privacy and security risk—especially for confidential documents like:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Tax returns and financial statements</li>
                            <li>Medical records and health information</li>
                            <li>Legal contracts and court documents</li>
                            <li>Employment records with SIN/SSN numbers</li>
                            <li>Personal identification documents</li>
                        </ul>
                        <p className="mb-4">
                            <strong>pdfcanada.ca is fundamentally different.</strong> We use cutting-edge browser technology to process your PDF entirely on your own computer. The file never touches the internet—it goes directly from your hard drive to our in-browser processing engine and back.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">100% Client-Side Processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">PIPEDA & GDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Works Offline</span>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "When to Use PDF Whiteout",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Building2 className="text-canada-red" size={20} />
                                Business & HR
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Remove salary information from contracts before sharing with third parties. Cover confidential client names in sample work portfolios. Redact proprietary pricing before sending quotes as references.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Scale className="text-canada-red" size={20} />
                                Legal & Compliance
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Redact privileged information in discovery documents. Cover witness addresses and personal details. Remove confidential settlement amounts before filing public records.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Heart className="text-canada-red" size={20} />
                                Healthcare & Medical
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Remove patient names from case studies for research publications. Cover insurance ID numbers when sharing forms. Redact health card numbers from medical records before sharing with specialists.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Users className="text-canada-red" size={20} />
                                Personal & Family
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Cover your SIN when sharing tax documents with accountants. Remove your old address from forms before recycling paperwork. Redact children's names from school forms when sharing examples.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "whiteout-vs-redaction",
                title: "Whiteout vs. Professional Redaction: What's the Difference?",
                content: (
                    <div className="space-y-4">
                        <p>
                            While the terms are often used interchangeably, there are subtle differences between whiteout and professional redaction:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">Feature</th>
                                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">Whiteout</th>
                                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">Professional Redaction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Visual Result</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">White box covering text</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Black box (traditional) or labeled boxes</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Underlying Data</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Covered but may remain in file</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Completely deleted from file</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Security Level</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Good for most uses</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Maximum security (FOIA-grade)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Best For</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Personal use, internal sharing</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Legal requirements, public records</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Cost</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Free with our tool</td>
                                        <td className="border border-gray-200 dark:border-gray-700 p-3">Usually requires Adobe Acrobat Pro</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4">
                            For most everyday uses—hiding a phone number, covering salary details, or obscuring personal addresses—<strong>whiteout is perfectly sufficient</strong>. It's fast, free, and works entirely in your browser.
                        </p>
                        <p>
                            If you need FOIA-compliant government-grade redaction (where data must be forensically unrecoverable), consider our <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline">Flatten PDF tool</Link> after whiteout to ensure the underlying text structure is completely removed.
                        </p>
                    </div>
                )
            },
            {
                id: "redaction-disasters",
                title: "Real-World Redaction Disasters: Why Proper Whiteout Matters",
                content: (
                    <div className="space-y-4">
                        <p>
                            History is full of examples where improper PDF redaction led to embarrassing or even dangerous information leaks. These real-world disasters illustrate why using proper whiteout tools is essential:
                        </p>
                        <div className="space-y-6">
                            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">The Paul Manafort Case (2019)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Lawyers for Paul Manafort filed court documents with "redacted" information about his contacts with Russian intelligence. However, they had simply added black boxes using Adobe Acrobat's annotation features rather than true redaction. Journalists easily recovered the hidden text by copying and pasting, revealing details prosecutors had intended to remain confidential. This mistake made international headlines and became a textbook example of redaction failure.
                                </p>
                            </div>
                            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">AT&T and the NSA (2006)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    When the Electronic Frontier Foundation published court documents about AT&T's alleged cooperation with the NSA, portions were supposed to be confidential. The PDF was shared with black rectangles covering sensitive sections, but the underlying text was fully intact. Anyone could select the "redacted" areas and paste the secret information into another document, completely defeating the purpose of the redaction.
                                </p>
                            </div>
                            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">The Transportation Security Administration (2009)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The TSA accidentally published a document revealing the exact procedures used to screen passengers at airport security checkpoints. While sections were covered with black bars, the document used improper redaction that could be easily bypassed. The exposed details included screening procedures for diplomats, CIA personnel, and law enforcement officers—a serious national security lapse caused by a simple technical error.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 font-medium">
                            The lesson from these disasters is clear: <strong>never assume that visual concealment equals true redaction</strong>. Always use tools specifically designed for proper whiteout or redaction, and always test your results before sharing.
                        </p>
                    </div>
                )
            },
            {
                id: "common-mistakes",
                title: "Common Whiteout Mistakes to Avoid",
                content: (
                    <div className="space-y-4">
                        <p>Many people accidentally expose sensitive information due to improper redaction. Here are the most common mistakes:</p>
                        <div className="space-y-4">
                            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Mistake #1: Using Text Highlighting</h4>
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    Some people use black highlight or "strikethrough" thinking it redacts text. It doesn't—the text underneath is still selectable and copyable. <strong>Always use a drawing tool that creates a solid shape, not a text annotation.</strong>
                                </p>
                            </div>
                            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Mistake #2: Using Preview App on Mac</h4>
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    Apple's Preview app has a "redaction" feature that looks like it works, but in older versions it only created an overlay. The text was recoverable. <strong>Always test by selecting the "redacted" area—if you can copy text, it's not truly redacted.</strong>
                                </p>
                            </div>
                            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Mistake #3: Changing Text Color to Background</h4>
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    Setting text to white on a white background is NOT redaction. The text is invisible but still encoded in the PDF. <strong>Anyone can select it, change colors in a viewer, or extract it programmatically.</strong>
                                </p>
                            </div>
                            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Mistake #4: Not Checking Metadata</h4>
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    PDFs contain hidden metadata including author names, revision history, and sometimes removed content. <strong>Always check "Document Properties" and remove unnecessary metadata before sharing.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "advanced-tips",
                title: "Advanced Tips for Secure Redaction",
                content: (
                    <div className="space-y-4">
                        <p>Follow these expert tips to ensure your redacted PDFs are truly secure:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>
                                <strong>Flatten After Whiteout</strong>: After applying whiteout, run the PDF through a <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline">Flatten PDF tool</Link> to merge all layers into a single image layer, eliminating any recoverable text.
                            </li>
                            <li>
                                <strong>Test Your Redaction</strong>: Before sending, open the PDF in a different viewer and try to select/copy the redacted text. If any text copies, your redaction failed.
                            </li>
                            <li>
                                <strong>Use "Print to PDF" for Maximum Security</strong>: If you're paranoid (rightfully so for sensitive documents), print the PDF to a new PDF. This completely rasterizes the content, making text recovery impossible.
                            </li>
                            <li>
                                <strong>Consider Full Page Redaction</strong>: For pages with mostly confidential info, consider deleting the entire page using our <Link href={`/${lang}/delete-pdf-pages`} className="text-canada-red hover:underline">Delete PDF Pages tool</Link> instead of redacting line by line.
                            </li>
                            <li>
                                <strong>Double-Check Form Fields</strong>: PDFs with fillable forms may have the original data stored in form field values. Flatten the PDF to remove form interactivity and embedded field data.
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "faq-section",
                title: "Frequently Asked Questions",
                content: (
                    <div className="space-y-4">
                        <p><strong>Is the whiteout truly permanent?</strong><br />
                            Yes. Our tool draws solid white rectangles at the PDF page level. The covered content cannot be seen, selected, or copied. For additional security, flatten the PDF afterward.</p>

                        <p><strong>Can I whiteout specific words instead of rectangles?</strong><br />
                            Our tool uses rectangular selection. For word-precise redaction, draw small rectangles around the specific words. For complex text-based redaction, consider our <Link href={`/${lang}/pdf-to-word`} className="text-canada-red hover:underline">PDF to Word conversion</Link> then delete text in Word.</p>

                        <p><strong>Does whiteout work on scanned PDFs?</strong><br />
                            Yes! Scanned PDFs are essentially images, and our whiteout draws on top of them. The covered areas will be invisible regardless of whether the PDF contains text or images.</p>

                        <p><strong>Can I use a color other than white?</strong><br />
                            Our standard tool uses white whiteout to blend with document backgrounds. For black redaction boxes (government-style), you can flatten and print after whiteout, or contact us for enterprise solutions.</p>

                        <p><strong>Will the file size increase?</strong><br />
                            Minimally. Whiteout adds small shape objects to the PDF. If you're adding many redactions, the file might grow by a few kilobytes. Use our <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline">Compress PDF</Link> tool afterward if needed.</p>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "How do I permanently remove text from a PDF?",
                a: "Use the PDF Whiteout tool on pdfcanada.ca. Upload your PDF, draw rectangles over the text you want to remove, and click 'Apply Whiteout'. The text is permanently covered with white boxes and cannot be recovered."
            },
            {
                q: "Is PDF whiteout the same as redaction?",
                a: "They're similar but not identical. Whiteout covers content with a white overlay, while professional redaction (black boxes) also removes the underlying data. For most uses, whiteout is sufficient and free."
            },
            {
                q: "Can someone recover text that's been whited out?",
                a: "When done properly with our tool, no. We draw solid graphic rectangles over the content. For maximum security, also flatten the PDF afterward to merge all layers."
            },
            {
                q: "Does the PDF Whiteout tool work on Mac and Windows?",
                a: "Yes. It works on any device with a modern web browser—Windows, Mac, Linux, Chromebook, iPhone, iPad, and Android devices."
            }
        ],

        quickAnswer: {
            question: "How do I remove text from a PDF for free?",
            answer: "Use the free PDF Whiteout tool on pdfcanada.ca. Upload your PDF, draw rectangles over the text areas you want to remove, click 'Apply Whiteout', and download the redacted file. It's 100% free and works entirely in your browser.",
            tool: "PDF Whiteout Tool",
            steps: ["Upload PDF", "Select text areas", "Apply Whiteout", "Download"]
        },

        ctaTitle: "Start Removing Text Today",
        ctaButton: "Open Whiteout Tool",
        ctaSubtext: "Free forever. No uploads. 100% private.",
    },
    fr: {
        seo: {
            title: `Comment Supprimer du Texte d'un PDF | Outil Whiteout ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Apprenez à supprimer ou masquer le texte sensible des documents PDF en toute sécurité. Notre guide ${CURRENT_YEAR} vous montre comment biffer localement dans votre navigateur. Gratuit et privé.`
        },
        h1: `Comment Supprimer du Texte d'un PDF : Guide Complet (${CURRENT_YEAR})`,
        subtitle: "Maîtrisez l'art de supprimer et masquer les informations sensibles des documents PDF sans altérer le formatage.",

        intro: (
            <>
                Avez-vous déjà eu besoin de partager un PDF tout en cachant certaines informations ? Peut-être s'agit-il d'un contrat avec un salaire confidentiel, d'un formulaire fiscal avec un numéro d'assurance sociale, ou d'un document juridique avec des adresses privées. Quoi qu'il en soit, savoir <strong>supprimer du texte d'un PDF</strong> est une compétence essentielle dans notre monde soucieux de la confidentialité.
                <br /><br />
                Le processus de masquage ou de suppression de texte d'un PDF est souvent appelé <strong>"whiteout"</strong> ou <strong>"biffure"</strong>. Contrairement à la simple suppression de texte (qui peut parfois être récupérée), un whiteout approprié couvre définitivement les informations pour qu'elles ne puissent être vues, copiées ou extraites.
                <br /><br />
                Dans ce guide complet, nous explorerons tout ce que vous devez savoir pour supprimer en toute sécurité du texte des PDF.
            </>
        ),

        sections: [
            {
                id: "what-is-whiteout",
                title: "Qu'est-ce que le Whiteout PDF ?",
                content: (
                    <div className="space-y-4">
                        <p>
                            Le <strong>Whiteout PDF</strong> est l'équivalent numérique du correcteur liquide sur papier. Il consiste à placer un rectangle opaque blanc (ou coloré) sur du texte ou des images dans un document PDF. Lorsqu'il est fait correctement, le contenu couvert devient définitivement invisible et ne peut pas être récupéré.
                        </p>
                        <p>
                            C'est différent de simplement changer la couleur du texte en blanc, ce qui peut facilement être révélé en sélectionnant tout le texte. Le vrai whiteout dessine une forme solide sur le contenu.
                        </p>
                    </div>
                )
            },
            {
                id: "how-to-whiteout",
                title: "Étape par Étape : Comment Supprimer du Texte",
                content: (
                    <div className="space-y-6">
                        <p>Utiliser notre outil gratuit PDF Whiteout est simple :</p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Ouvrez l'outil</strong> : Allez sur notre <Link href={`/${lang}/tools/remove-pdf-text`} className="text-canada-red hover:underline font-medium">outil Whiteout PDF</Link>. Il fonctionne sur Windows, Mac, et mobile.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez votre PDF</strong> : Cliquez ou glissez-déposez votre document. Votre fichier reste sur votre appareil et n'est jamais uploadé.
                            </li>
                            <li className="pl-2">
                                <strong>Naviguez vers la page</strong> : Utilisez les flèches pour trouver la page contenant le texte à supprimer.
                            </li>
                            <li className="pl-2">
                                <strong>Dessinez la boîte</strong> : Cliquez et faites glisser pour dessiner un rectangle sur le texte à masquer.
                            </li>
                            <li className="pl-2">
                                <strong>Appliquez le Whiteout</strong> : Cliquez sur "Appliquer" pour couvrir définitivement les zones sélectionnées.
                            </li>
                            <li className="pl-2">
                                <strong>Téléchargez</strong> : Sauvegardez votre PDF modifié.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "privacy-security",
                title: "Confidentialité d'Abord : Aucun Upload",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Vos Documents Restent sur Votre Appareil
                        </h4>
                        <p className="mb-4">
                            La plupart des outils en ligne exigent que vous téléchargiez vos documents sensibles sur leurs serveurs. <strong>pdfcanada.ca est différent.</strong> Nous traitons votre PDF entièrement sur votre propre ordinateur.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Traitement 100% Local</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Conforme PIPEDA & RGPD</span>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "use-cases",
                title: "Quand Utiliser le Whiteout PDF",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Building2 className="text-canada-red" size={20} />
                                Affaires & RH
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Supprimez les informations salariales des contrats avant de les partager. Masquez les noms de clients confidentiels dans les portfolios.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Scale className="text-canada-red" size={20} />
                                Juridique
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Biffez les informations privilégiées dans les documents de découverte. Couvrez les adresses des témoins et les détails personnels.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Heart className="text-canada-red" size={20} />
                                Santé
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Supprimez les noms des patients des études de cas. Masquez les numéros d'assurance lors du partage de formulaires.</p>
                        </div>
                        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-800">
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                <Users className="text-canada-red" size={20} />
                                Personnel
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Couvrez votre NAS lors du partage de documents fiscaux. Supprimez votre ancienne adresse des formulaires.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Comment supprimer définitivement du texte d'un PDF ?",
                a: "Utilisez l'outil Whiteout PDF sur pdfcanada.ca. Téléchargez votre PDF, dessinez des rectangles sur le texte à supprimer, et cliquez sur 'Appliquer'. Le texte est définitivement couvert."
            },
            {
                q: "Le whiteout est-il permanent ?",
                a: "Oui. Notre outil dessine des rectangles blancs solides sur le contenu. Pour une sécurité maximale, aplatissez aussi le PDF ensuite."
            },
            {
                q: "L'outil fonctionne-t-il sur Mac et Windows ?",
                a: "Oui. Il fonctionne sur tout appareil avec un navigateur web moderne—Windows, Mac, Linux, iPhone, iPad et Android."
            }
        ],

        quickAnswer: {
            question: "Comment supprimer du texte d'un PDF gratuitement ?",
            answer: "Utilisez l'outil Whiteout PDF gratuit sur pdfcanada.ca. Téléchargez votre PDF, dessinez des rectangles sur les zones à supprimer, cliquez sur 'Appliquer', et téléchargez.",
            tool: "Outil Whiteout PDF",
            steps: ["Télécharger PDF", "Sélectionner zones", "Appliquer Whiteout", "Télécharger"]
        },

        ctaTitle: "Commencez à Supprimer du Texte",
        ctaButton: "Ouvrir l'Outil Whiteout",
        ctaSubtext: "Gratuit pour toujours. Pas d'upload. 100% privé.",
    },
    pt: {
        seo: {
            title: `Como Remover Texto de PDF | Ferramenta Whiteout ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Aprenda a remover ou cobrir texto sensível de documentos PDF com segurança. Nosso guia ${CURRENT_YEAR} mostra como redigir PDFs localmente no seu navegador. Grátis e privado.`
        },
        h1: `Como Remover Texto de PDF: Guia Completo (${CURRENT_YEAR})`,
        subtitle: "Domine a arte de remover com segurança informações sensíveis de documentos PDF sem quebrar a formatação.",

        intro: (
            <>
                Você já precisou compartilhar um PDF mas queria esconder certas informações primeiro? Talvez seja um contrato com um salário confidencial, um formulário de impostos com um número de seguro social, ou um documento legal com endereços privados. Seja qual for o caso, saber <strong>remover texto de PDF</strong> é uma habilidade essencial no nosso mundo consciente de privacidade.
                <br /><br />
                O processo de cobrir ou remover texto de um PDF é frequentemente chamado de <strong>"whiteout"</strong> ou <strong>"redação"</strong>. Diferente de simplesmente deletar texto (que às vezes pode ser recuperado), o whiteout adequado cobre permanentemente as informações.
                <br /><br />
                Neste guia completo, exploraremos tudo o que você precisa saber sobre remover texto de PDFs com segurança.
            </>
        ),

        sections: [
            {
                id: "what-is-whiteout",
                title: "O que é PDF Whiteout?",
                content: (
                    <div className="space-y-4">
                        <p>
                            <strong>PDF Whiteout</strong> é o equivalente digital de usar corretor líquido no papel. Envolve colocar um retângulo branco opaco sobre texto ou imagens em um documento PDF. Quando feito corretamente, o conteúdo coberto se torna permanentemente invisível.
                        </p>
                        <p>
                            Isso é diferente de simplesmente mudar a cor do texto para branco, o que pode ser facilmente revelado selecionando todo o texto.
                        </p>
                    </div>
                )
            },
            {
                id: "how-to-whiteout",
                title: "Passo a Passo: Como Remover Texto",
                content: (
                    <div className="space-y-6">
                        <p>Usar nossa ferramenta gratuita PDF Whiteout é simples:</p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Abra a Ferramenta</strong>: Vá para nossa <Link href={`/${lang}/tools/remove-pdf-text`} className="text-canada-red hover:underline font-medium">ferramenta Whiteout PDF</Link>. Funciona no Windows, Mac e mobile.
                            </li>
                            <li className="pl-2">
                                <strong>Carregue seu PDF</strong>: Clique ou arraste seu documento. Seu arquivo permanece no seu dispositivo.
                            </li>
                            <li className="pl-2">
                                <strong>Navegue até a página</strong>: Use as setas para encontrar a página com o texto a remover.
                            </li>
                            <li className="pl-2">
                                <strong>Desenhe a caixa</strong>: Clique e arraste para desenhar um retângulo sobre o texto a cobrir.
                            </li>
                            <li className="pl-2">
                                <strong>Aplique o Whiteout</strong>: Clique em "Aplicar" para cobrir permanentemente as áreas selecionadas.
                            </li>
                            <li className="pl-2">
                                <strong>Baixe</strong>: Salve seu PDF modificado.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "privacy-security",
                title: "Privacidade em Primeiro: Sem Uploads",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl p-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="text-blue-500" size={24} />
                            Seus Documentos Ficam no Seu Dispositivo
                        </h4>
                        <p className="mb-4">
                            A maioria das ferramentas online exige que você carregue seus documentos sensíveis para seus servidores. <strong>pdfcanada.ca é diferente.</strong> Processamos seu PDF inteiramente no seu próprio computador.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Processamento 100% Local</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-sm font-medium">Compatível com LGPD</span>
                            </div>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Como remover texto de um PDF permanentemente?",
                a: "Use a ferramenta Whiteout PDF em pdfcanada.ca. Carregue seu PDF, desenhe retângulos sobre o texto a remover e clique em 'Aplicar'. O texto é permanentemente coberto."
            },
            {
                q: "O whiteout é permanente?",
                a: "Sim. Nossa ferramenta desenha retângulos brancos sólidos sobre o conteúdo. Para segurança máxima, também achate o PDF depois."
            },
            {
                q: "A ferramenta funciona no Mac e Windows?",
                a: "Sim. Funciona em qualquer dispositivo com navegador web moderno—Windows, Mac, Linux, iPhone, iPad e Android."
            }
        ],

        quickAnswer: {
            question: "Como remover texto de um PDF de graça?",
            answer: "Use a ferramenta Whiteout PDF gratuita em pdfcanada.ca. Carregue seu PDF, desenhe retângulos sobre as áreas a remover, clique em 'Aplicar' e baixe.",
            tool: "Ferramenta Whiteout PDF",
            steps: ["Carregar PDF", "Selecionar áreas", "Aplicar Whiteout", "Baixar"]
        },

        ctaTitle: "Comece a Remover Texto Hoje",
        ctaButton: "Abrir Ferramenta Whiteout",
        ctaSubtext: "Grátis para sempre. Sem uploads. 100% privado.",
    }
});

export const PdfWhiteoutGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath={`/${lang}/guides/remove-pdf-text`}
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-27"
                dateModified={new Date().toISOString().split('T')[0]}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Whiteout PDF' : (lang === 'pt' ? 'Whiteout PDF' : 'PDF Whiteout'), path: `/${lang}/guides/remove-pdf-text` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Eraser size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: `/${lang}/guides` },
                    { name: lang === 'fr' ? 'Guide Whiteout PDF' : (lang === 'pt' ? 'Guia Whiteout PDF' : 'PDF Whiteout Guide'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <ToolPromo tool="remove-pdf-text" lang={lang} />
                    <section className="animate-fade-in">
                        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-canada-red/10 text-canada-red font-black text-xl sm:text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section className="text-center py-6 sm:py-8 md:py-12 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/tools/remove-pdf-text`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <Eraser size={20} className="sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <HelpCircle className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                            FAQ
                        </h2>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">{item.q}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/flatten-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Aplatir PDF' : (lang === 'pt' ? 'Guia Aplanar PDF' : 'Flatten PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/private-pdf-tools`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Outils PDF Privés' : (lang === 'pt' ? 'Ferramentas PDF Privadas' : 'Private PDF Tools')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-security`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Sécurité PDF' : (lang === 'pt' ? 'Segurança PDF' : 'PDF Security')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};
