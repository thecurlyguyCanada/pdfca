'use client';

import Link from 'next/link';
import React from 'react';
import { Image as ImageIcon, Shield, Zap, HelpCircle, FileText, CheckCircle, Upload } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { AISnapshot } from '../../AISnapshot';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `How to Insert Picture in PDF | Free ${CURRENT_YEAR} Guide | pdfcanada.ca`,
            desc: `Add images to your PDFs for free. Our ${CURRENT_YEAR} guide shows you how to insert pictures securely in your browser without uploads. Fast, private, and Canadian.`
        },
        h1: `How to Insert a Picture in a PDF: The ${CURRENT_YEAR} Guide`,
        subtitle: "Enhance your documents by adding photos, logos, and illustrations securely.",

        intro: (
            <>
                Need to add a logo to an invoice, a photo to a report, or an illustration to a brochure? <strong>Inserting a picture into a PDF</strong> shouldn't be complicated or expensive.
                <br /><br />
                Our interactive tools allow you to place images exactly where you need them, all while ensuring your documents never leave your device.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Step-by-Step: Adding Pictures to Your PDF",
                content: (
                    <>
                        <p className="mb-4">
                            <strong>Inserting a picture into a PDF</strong> is simple with our browser-based editor. Whether you're adding a company logo to an invoice, product photos to a catalog, or illustrations to a presentation, the process takes just minutes.
                        </p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li className="pl-2">
                                <strong>Open Your File</strong>: Upload your document to our <Link href={`/${lang}/sign-pdf`} className="text-canada-red hover:underline font-medium">PDF Sign & Edit tool</Link>. Files load instantly and process locally in your browser.
                            </li>
                            <li className="pl-2">
                                <strong>Select 'Image'</strong>: Choose the option to add an image or signature from your device. You can select JPG, PNG, HEIC, or other common image formats.
                            </li>
                            <li className="pl-2">
                                <strong>Place & Resize</strong>: Click on the page to place your picture, then drag the corners to resize it or move it to the perfect spot. Maintain aspect ratio by holding Shift while resizing.
                            </li>
                            <li className="pl-2">
                                <strong>Save & Download</strong>: Once you're happy with the placement, click 'Sign/Apply' and download your updated PDF. Your image is now permanently embedded in the document.
                            </li>
                        </ol>
                        <p className="mb-4">
                            This approach to <strong>adding images to PDF</strong> documents works across all devices—desktop, laptop, tablet, or smartphone. No software installation required.
                        </p>
                    </>
                )
            },
            {
                id: "use-cases",
                title: "Common Scenarios for Inserting Pictures in PDFs",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Business & Professional</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Company logos on invoices</strong>: Add your branding to billing documents for professional presentation</li>
                            <li><strong>Product photos in catalogs</strong>: Insert high-resolution images into product sheets and sales materials</li>
                            <li><strong>Headshots on resumes</strong>: Add professional photos to CVs for international job applications</li>
                            <li><strong>Signature images on contracts</strong>: Place scanned signatures on legal documents for remote signing</li>
                            <li><strong>Floor plans in proposals</strong>: Embed architectural drawings or site photos in project proposals</li>
                            <li><strong>Charts in reports</strong>: Add data visualizations and graphs to executive summaries</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Creative & Publishing</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Illustrations in ebooks</strong>: Insert chapter artwork and decorative elements into digital books</li>
                            <li><strong>Screenshots in tutorials</strong>: Add instructional images to how-to guides and manuals</li>
                            <li><strong>Cover art on portfolios</strong>: Place hero images on the first page of design portfolios</li>
                            <li><strong>Diagrams in educational materials</strong>: Embed technical illustrations in training documents</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Personal & Administrative</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Photos in scrapbooks</strong>: Create PDF photo albums with captions and layouts</li>
                            <li><strong>Passport photos on forms</strong>: Add identification photos to visa and citizenship applications</li>
                            <li><strong>Property photos in rental agreements</strong>: Document property condition with images in lease contracts</li>
                            <li><strong>Receipts in expense reports</strong>: Embed scanned receipts into reimbursement forms</li>
                            <li><strong>Event photos in newsletters</strong>: Add celebration photos to community bulletins</li>
                        </ul>
                    </>
                )
            },
            {
                id: "image-quality",
                title: "Maintaining Image Quality in PDFs",
                content: (
                    <>
                        <p className="mb-4">
                            When you <strong>insert a picture into a PDF</strong>, maintaining image quality is crucial for professional results. Our tool preserves your original image resolution while optimizing for PDF compatibility.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Resolution Best Practices</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Print documents</strong>: Use images with at least 300 DPI for sharp printed output</li>
                            <li><strong>Digital viewing</strong>: 72-150 DPI is sufficient for screen-only PDFs, reducing file size</li>
                            <li><strong>Logos and text images</strong>: Use PNG format for crisp edges and transparent backgrounds</li>
                            <li><strong>Photos</strong>: JPG format provides good quality with smaller file sizes</li>
                            <li><strong>iPhone photos (HEIC)</strong>: Automatically converted to JPG during insertion for maximum compatibility</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Compression & File Size</h3>
                        <p className="mb-4">
                            Large images can bloat PDF file size, making them difficult to email or upload. Here's how to manage it:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Pre-resize images</strong>: If your image is 5000x5000 pixels but only displays at 500x500, resize it before insertion</li>
                            <li><strong>Choose appropriate format</strong>: Use JPG for photos (smaller) and PNG for graphics with text (sharper)</li>
                            <li><strong>Post-compression</strong>: After inserting images, use our <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline">PDF compression tool</Link> to reduce overall file size</li>
                            <li><strong>Optimize for use case</strong>: Email attachments should ideally be under 10 MB—compress images accordingly</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Color Management</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>RGB for digital</strong>: Use RGB color space for PDFs viewed on screens</li>
                            <li><strong>CMYK for print</strong>: Convert images to CMYK before insertion if the PDF will be professionally printed</li>
                            <li><strong>Color profiles</strong>: Embedded ICC color profiles are preserved to ensure accurate color reproduction</li>
                        </ul>
                    </>
                )
            },
            {
                id: "positioning",
                title: "Precise Image Positioning & Alignment",
                content: (
                    <>
                        <p className="mb-4">
                            Professional documents require pixel-perfect image placement. Our editor provides intuitive controls for positioning images exactly where you need them.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Placement Techniques</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>Click to place</strong>: Click anywhere on the page to drop your image at that location</li>
                            <li><strong>Drag to reposition</strong>: Click and drag the image to move it after placement</li>
                            <li><strong>Corner handles for resizing</strong>: Drag corner handles to scale images proportionally</li>
                            <li><strong>Maintain aspect ratio</strong>: Hold Shift while resizing to prevent distortion</li>
                            <li><strong>Layer management</strong>: Images can be layered over text or placed behind existing content</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Common Layout Patterns</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Top-left logo</strong>: Standard placement for company branding on invoices and letterhead</li>
                            <li><strong>Centered header image</strong>: Common for event flyers and announcements</li>
                            <li><strong>Inline with text</strong>: Place images adjacent to paragraphs for illustrated guides</li>
                            <li><strong>Full-page background</strong>: Resize images to fill entire pages for certificates or posters</li>
                            <li><strong>Footer watermark</strong>: Add small branding or copyright images at bottom margins</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Multi-Page Image Insertion</h3>
                        <p className="mb-4">
                            To <strong>add the same image to multiple pages</strong>:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mb-4">
                            <li>Insert the image on the first page and position it perfectly</li>
                            <li>Navigate to the next page in the editor</li>
                            <li>Re-insert the same image file—it will remember your last position</li>
                            <li>Repeat for all pages that need the image (e.g., logo on every page header)</li>
                        </ol>
                    </>
                )
            },
            {
                id: "benefits",
                title: "Why Use pdfcanada.ca for Image Insertion?",
                content: (
                    <>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-xl">
                                <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 text-lg">100% Private & Secure</h3>
                                <p className="text-sm text-red-700 dark:text-red-300">Your pictures and PDFs are processed locally in your browser. No uploads to cloud servers means zero risk of data breaches, unauthorized access, or privacy violations. Perfect for confidential business documents, personal photos, and sensitive contracts.</p>
                            </div>
                            <div className="p-6 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-xl">
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">High-Resolution Output</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">We maintain the full quality of your original images. Unlike tools that compress or downscale automatically, our editor preserves resolution, ensuring sharp, professional results whether you're viewing on screen or printing.</p>
                            </div>
                            <div className="p-6 border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-3 text-lg">No Software Installation</h3>
                                <p className="text-sm text-blue-700 dark:text-blue-300">Works directly in your browser on Windows, Mac, Linux, iOS, and Android. No downloads, no installations, no admin permissions needed. Perfect for shared computers, work environments, or quick edits on the go.</p>
                            </div>
                            <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-400 mb-3 text-lg">Completely Free</h3>
                                <p className="text-sm text-green-700 dark:text-green-300">No subscriptions, no watermarks, no feature limitations. Unlimited PDFs, unlimited images, unlimited file sizes. Forever free for Canadian users and everyone worldwide who values privacy.</p>
                            </div>
                        </div>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Format Support</h3>
                        <p className="mb-4">
                            Our tool supports all major image formats when you <strong>insert a picture in a PDF</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>JPG/JPEG</strong>: Best for photographs and complex images with gradients</li>
                            <li><strong>PNG</strong>: Ideal for logos, screenshots, and images requiring transparency</li>
                            <li><strong>HEIC</strong>: Native iPhone photo format—automatically converted for compatibility</li>
                            <li><strong>WebP</strong>: Modern format with excellent compression (converted to JPG for PDF compatibility)</li>
                            <li><strong>GIF</strong>: Supported for simple graphics (note: animations become static in PDFs)</li>
                        </ul>
                    </>
                )
            },
            {
                id: "security",
                title: "Security & Privacy for Image Insertion",
                content: (
                    <>
                        <p className="mb-4">
                            When you <strong>add an image to a PDF</strong>, especially for business or personal documents, security is paramount. Most online PDF editors upload your files to cloud servers, creating serious privacy risks.
                        </p>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Local Processing Advantages</h3>
                        <ul className="list-disc pl-5 space-y-3 mb-6">
                            <li><strong>No data retention</strong>: Since files never leave your device, there's nothing stored on remote servers to hack or leak</li>
                            <li><strong>PIPEDA compliance</strong>: Canadian privacy laws require strict data handling—local processing automatically ensures compliance</li>
                            <li><strong>Trade secret protection</strong>: Product photos, proprietary designs, and confidential images stay completely private</li>
                            <li><strong>Medical privacy</strong>: Patient photos, x-rays, and diagnostic images for medical reports remain HIPAA/PIPEDA compliant</li>
                            <li><strong>No metadata exposure</strong>: Image EXIF data (camera info, GPS location, timestamps) isn't uploaded to third-party servers</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Industry-Specific Privacy</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Legal firms</strong>: Insert evidence photos or property images in case files without cloud exposure</li>
                            <li><strong>Real estate</strong>: Add property photos to listings and contracts while maintaining client privacy</li>
                            <li><strong>Healthcare</strong>: Embed patient photos or medical imaging in reports without HIPAA violations</li>
                            <li><strong>Financial services</strong>: Insert charts and logos in client reports without data sovereignty concerns</li>
                            <li><strong>Government agencies</strong>: Add images to official documents while maintaining security clearance requirements</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Removing Image Metadata</h3>
                        <p className="mb-4">
                            Images often contain hidden EXIF metadata including GPS coordinates, camera details, and edit history. When inserting images into PDFs:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Consider stripping EXIF data from photos before insertion if privacy is critical</li>
                            <li>Screenshots and graphics created digitally typically have minimal metadata</li>
                            <li>Our local processing ensures metadata isn't harvested by third-party servers</li>
                        </ul>
                    </>
                )
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Image Insertion Issues",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Image Won't Upload</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>File size too large</strong>: Very large images (50+ MB) may timeout—resize before insertion</li>
                            <li><strong>Unsupported format</strong>: Convert RAW camera files (.CR2, .NEF) to JPG first</li>
                            <li><strong>Corrupted image</strong>: Try opening and re-saving the image in a photo editor</li>
                            <li><strong>Browser compatibility</strong>: Use latest Chrome, Firefox, Safari, or Edge</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Image Quality Issues</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Blurry output</strong>: Use higher resolution source images (300 DPI minimum for print)</li>
                            <li><strong>Colors look wrong</strong>: Check color space—convert to RGB for digital viewing</li>
                            <li><strong>Image appears pixelated</strong>: Source image resolution is too low—use a higher quality original</li>
                            <li><strong>Transparency lost</strong>: Ensure you're using PNG format, not JPG (which doesn't support transparency)</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Positioning Problems</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Can't move image</strong>: Click directly on the image to select it first</li>
                            <li><strong>Image distorted</strong>: Hold Shift while resizing to maintain aspect ratio</li>
                            <li><strong>Image too large for page</strong>: Use corner handles to shrink before positioning</li>
                            <li><strong>Can't see image after placing</strong>: It may be positioned off the visible page area—zoom out to locate</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">File Size After Insertion</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>PDF too large to email</strong>: Use <Link href={`/${lang}/compress-pdf`} className="text-canada-red hover:underline">PDF compression</Link> after inserting images</li>
                            <li><strong>Slow download</strong>: Large images increase file size—pre-resize images before insertion</li>
                            <li><strong>Upload limits</strong>: If submitting to a portal with size limits, compress images before insertion</li>
                        </ul>
                    </>
                )
            },
            {
                id: "advanced",
                title: "Advanced Image Insertion Techniques",
                content: (
                    <>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Creating Watermarks</h3>
                        <p className="mb-4">
                            To <strong>add a watermark image to a PDF</strong>:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mb-6">
                            <li>Create a semi-transparent watermark image (PNG with 30-50% opacity)</li>
                            <li>Insert the image on the first page</li>
                            <li>Resize to cover the page or position diagonally across the content</li>
                            <li>Repeat on subsequent pages if needed</li>
                            <li>Common watermarks: "DRAFT", "CONFIDENTIAL", "COPY", company logos</li>
                        </ol>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Image-Based Signatures</h3>
                        <p className="mb-4">
                            For <strong>inserting signature images in PDFs</strong>:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Scan or photograph your handwritten signature on white paper</li>
                            <li>Use photo editing software to remove the background (make it transparent)</li>
                            <li>Save as PNG to preserve transparency</li>
                            <li>Insert into PDF signature fields or over signature lines</li>
                            <li>Resize appropriately (typically 1-2 inches wide)</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Creating Image-Based Forms</h3>
                        <p className="mb-4">
                            To add checkboxes, stamps, or graphic elements:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Create PNG graphics of checkmarks, stamps, or approval seals</li>
                            <li>Insert them over fillable form fields</li>
                            <li>Resize to match form field dimensions</li>
                            <li>Useful for "APPROVED", "PAID", or "RECEIVED" stamps on documents</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Batch Image Insertion</h3>
                        <p className="mb-4">
                            When adding multiple images to one PDF:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Insert images one at a time, positioning each before adding the next</li>
                            <li>For product catalogs, create a consistent layout template</li>
                            <li>Number your image files (product-1.jpg, product-2.jpg) for organized insertion</li>
                            <li>Use copy-paste if your image editor supports it for repeated elements like logos</li>
                        </ul>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "What image formats are supported for PDF insertion?",
                a: "You can insert JPG, PNG, HEIC (iPhone photos), WebP, and GIF. All formats are automatically optimized for PDF compatibility while maintaining maximum quality."
            },
            {
                q: "Can I move the image after placing it in the PDF?",
                a: "Yes! Our editor allows you to drag, resize, rotate, and delete images before saving. Click on any placed image to select it, then drag to reposition or use corner handles to resize."
            },
            {
                q: "How do I insert a picture into a PDF for free?",
                a: "Use pdfcanada.ca's Sign PDF tool. Upload your PDF, click 'Add Image', select your picture file (JPG, PNG, HEIC), place and resize it, then download. Completely free with no watermarks or limits."
            },
            {
                q: "Will inserting images reduce PDF quality?",
                a: "No. We preserve your original image resolution and quality. Unlike some tools that automatically compress images, our editor maintains the full quality of both your original PDF and inserted images."
            },
            {
                q: "Can I add multiple images to one PDF?",
                a: "Yes! Insert as many images as you need, on as many pages as required. Each image can be positioned, sized, and placed independently across your document."
            },
            {
                q: "How do I add a logo to every page of a PDF?",
                a: "Insert your logo on the first page and position it where you want it. Then navigate to page 2, re-insert the same logo file (it will maintain position), and repeat for all pages."
            },
            {
                q: "Can I insert transparent PNG images?",
                a: "Yes! PNG transparency is fully supported. This is perfect for logos with transparent backgrounds or watermarks that need to overlay existing content."
            },
            {
                q: "What happens to image file size when inserted in PDF?",
                a: "Images are embedded at their original resolution. Large images (5+ MB) will increase PDF file size proportionally. Pre-resize images or use our PDF compression tool afterward to reduce file size."
            },
            {
                q: "How do I maintain image aspect ratio when resizing?",
                a: "Hold the Shift key while dragging corner handles to resize. This locks the aspect ratio, preventing distortion of your images during resizing."
            },
            {
                q: "Can I insert HEIC photos from my iPhone?",
                a: "Yes! HEIC files (iPhone's default photo format) are automatically converted to JPG during insertion for universal PDF compatibility."
            },
            {
                q: "Is it safe to insert confidential images in PDFs?",
                a: "Absolutely. All processing happens locally in your browser. Your images never upload to our servers, ensuring complete privacy for product photos, signatures, personal photos, or proprietary designs."
            },
            {
                q: "Can I insert images into password-protected PDFs?",
                a: "You'll need to remove the password first using our PDF unlock tool. After inserting images, you can re-protect the PDF if needed."
            },
            {
                q: "How do I add a signature image to a PDF?",
                a: "Create a PNG image of your signature (transparent background recommended). Use our Sign PDF tool, click 'Add Image', select your signature file, place it over the signature line, and resize appropriately."
            },
            {
                q: "What resolution should images be for printing?",
                a: "Use at least 300 DPI for images in PDFs destined for printing. For screen-only PDFs (email, web viewing), 72-150 DPI is sufficient and keeps file sizes smaller."
            },
            {
                q: "Can I layer images over existing PDF text?",
                a: "Yes! Images can be placed over or under existing content. This is useful for adding watermarks, stamps, or highlighting specific areas with graphics."
            },
            {
                q: "How do I create a watermark using an image?",
                a: "Create a semi-transparent PNG watermark image (30-50% opacity), insert it into your PDF, resize to cover the page or position diagonally, then repeat on other pages if needed."
            },
            {
                q: "Will my PDF still be searchable after inserting images?",
                a: "Yes. Inserting images doesn't affect existing text layers or searchability. Any OCR text in the original PDF remains intact and searchable."
            },
            {
                q: "Can I insert images on mobile devices?",
                a: "Yes! Our tool works on iPhone, iPad, and Android devices. Tap to upload your PDF, select 'Add Image', choose from your photo library, then place and resize with touch gestures."
            },
            {
                q: "How do I delete an image after placing it in a PDF?",
                a: "Click on the image to select it, then press Delete or Backspace on your keyboard. On mobile, tap the image and use the delete option that appears."
            },
            {
                q: "Can I insert scanned images into PDFs?",
                a: "Yes! Scan your document or photo, save it as JPG or PNG, then insert it using our editor. Perfect for adding scanned receipts, signatures, or physical photos to digital PDFs."
            },
            {
                q: "What's the maximum image size I can insert?",
                a: "There's no hard limit, but very large images (50+ MB) may slow processing. For best performance, keep individual images under 20 MB and resize before insertion if they're excessively large."
            },
            {
                q: "Can I rotate images after inserting them?",
                a: "Our current editor supports resizing and repositioning. To rotate an image, use image editing software to rotate before insertion, or re-upload the rotated version."
            },
            {
                q: "How do I add product photos to a PDF catalog?",
                a: "Open your catalog PDF, use 'Add Image' to insert each product photo, position and resize appropriately, then repeat for all products. Number your image files (product-1.jpg, product-2.jpg) for organized insertion."
            },
            {
                q: "Can I insert images into fillable PDF forms?",
                a: "Yes! You can add images to any PDF, including forms. This is useful for adding ID photos, signature images, or supporting documents to application forms."
            },
            {
                q: "Will inserting images break PDF/A compliance?",
                a: "Inserting images may affect PDF/A compliance depending on the image format and color profile. If archival compliance is critical, validate the output PDF against PDF/A standards after insertion."
            }
        ],

        ctaTitle: "Enhance Your PDF Today",
        ctaButton: "Add Image to PDF Now",
        ctaSubtext: "Free, Secure, and Proudly Canadian.",
        whyTitle: "Privacy First Image Insertion",
        whyDesc: "Don't upload personal photos to cloud servers. Use pdfcanada.ca to keep your data local and secure.",
        faqHeading: "Frequently Asked Questions",
        quickAnswer: {
            question: "How do I insert a picture into a PDF for free?",
            answer: "Use pdfcanada.ca's Sign PDF tool. Upload your PDF, click 'Add Image', place and resize your picture, then download. Supports JPG, PNG, and HEIC. All processing happens locally.",
            tool: "PDF Sign & Edit Tool",
            steps: ["Upload your PDF", "Select 'Add Image'", "Place and resize", "Download updated PDF"]
        }
    },
    fr: {
        seo: {
            title: `Comment Insérer une Image dans un PDF | Guide Gratuit ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Ajoutez des images à vos PDF gratuitement. Notre guide ${CURRENT_YEAR} vous montre comment insérer des photos en toute sécurité sans téléchargement. Rapide, privé et canadien.`
        },
        h1: `Comment Insérer une Image dans un PDF : Le Guide ${CURRENT_YEAR}`,
        subtitle: "Améliorez vos documents en ajoutant des photos, logos et illustrations en toute sécurité.",

        intro: (
            <>
                Besoin d'ajouter un logo à une facture, une photo à un rapport ou une illustration à une brochure ? <strong>Insérer une image dans un PDF</strong> ne devrait pas être compliqué ou coûteux.
                <br /><br />
                Nos outils interactifs vous permettent de placer des images exactement là où vous en avez besoin, tout en garantissant que vos documents ne quittent jamais votre appareil.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Étape par Étape : Comment Ajouter des Images",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Ouvrez votre fichier</strong> : Téléchargez votre document dans notre <Link href={`/${lang}/sign-pdf`} className="text-canada-red hover:underline font-medium">outil de signature et d'édition</Link>.</li>
                        <li className="pl-2"><strong>Sélectionnez 'Image'</strong> : Choisissez l'option pour ajouter une image ou une signature depuis votre appareil.</li>
                        <li className="pl-2"><strong>Placez et Redimensionnez</strong> : Cliquez sur la page pour placer votre image, puis faites glisser les coins pour la redimensionner ou déplacez-la au bon endroit.</li>
                        <li className="pl-2"><strong>Enregistrez et Téléchargez</strong> : Une fois satisfait, cliquez sur 'Signer/Appliquer' et téléchargez votre PDF mis à jour.</li>
                    </ol>
                )
            },
            {
                id: "benefits",
                title: "Pourquoi utiliser pdfcanada.ca ?",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">100 % Privé</h3>
                            <p className="text-sm text-red-700">Vos images et PDF sont traités localement. Personne d'autre ne voit jamais vos clichés sensibles.</p>
                        </div>
                        <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-gray-800 mb-2">Haute Résolution</h3>
                            <p className="text-sm text-gray-700">Nous maintenons la qualité de vos images pour qu'elles restent nettes et professionnelles.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Quels formats d'image sont supportés ?",
                a: "Vous pouvez insérer des formats d'image standards comme JPG, PNG et HEIC (photos iPhone)."
            },
            {
                q: "Puis-je déplacer l'image après l'avoir placée ?",
                a: "Oui ! Notre éditeur vous permet de faire glisser, redimensionner et même supprimer des images avant d'enregistrer le document final."
            }
        ],

        ctaTitle: "Améliorez votre PDF aujourd'hui",
        ctaButton: "Ajouter une Image Maintenant",
        ctaSubtext: "Gratuit, Sécurisé et Fièrement Canadien.",
        whyTitle: "Insertion d'Images Privée",
        whyDesc: "Ne téléchargez pas de photos personnelles sur des serveurs cloud. Utilisez pdfcanada.ca pour garder vos données locales et sécurisées.",
        faqHeading: "Questions Fréquentes",
        quickAnswer: {
            question: "Comment insérer une image dans un PDF gratuitement?",
            answer: "Utilisez l'outil Signer PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur 'Ajouter une image', placez et redimensionnez votre photo, puis téléchargez. Supporte JPG, PNG et HEIC. Tout se fait localement.",
            tool: "Outil Signer et Éditer PDF",
            steps: ["Téléchargez votre PDF", "Sélectionnez 'Ajouter une image'", "Placez et redimensionnez", "Téléchargez le PDF modifié"]
        }
    },
    pt: {
        seo: {
            title: `Como Inserir Imagem em PDF | Guia Grátis ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Adicione imagens aos seus PDFs gratuitamente. Nosso guia de ${CURRENT_YEAR} mostra como inserir fotos com segurança no seu navegador sem uploads. Rápido, privado e canadense.`
        },
        h1: `Como Inserir uma Imagem em um PDF: O Guia de ${CURRENT_YEAR}`,
        subtitle: "Melhore seus documentos adicionando fotos, logos e ilustrações com segurança.",

        intro: (
            <>
                Precisa adicionar um logotipo a uma fatura, uma foto a um relatório ou uma ilustração a uma brochura? <strong>Inserir uma imagem em um PDF</strong> não deve ser complicado ou caro.
                <br /><br />
                Nossas ferramentas interativas permitem que você coloque imagens exatamente onde precisa, garantindo que seus documentos nunca saiam do seu dispositivo.
            </>
        ),

        sections: [
            {
                id: "how-to",
                title: "Passo a Passo: Como Adicionar Imagens",
                content: (
                    <ol className="list-decimal pl-5 space-y-4 mb-6">
                        <li className="pl-2"><strong>Abra Seu Arquivo</strong>: Envie seu documento para nossa <Link href={`/${lang}/sign-pdf`} className="text-canada-red hover:underline font-medium">ferramenta de Assinar e Editar</Link>.</li>
                        <li className="pl-2"><strong>Selecione 'Imagem'</strong>: Escolha a opção para adicionar uma imagem ou assinatura do seu dispositivo.</li>
                        <li className="pl-2"><strong>Posicione e Redimensione</strong>: Clique na página para colocar sua imagem, depois arraste os cantos para redimensionar ou mova para o local perfeito.</li>
                        <li className="pl-2"><strong>Salve e Baixe</strong>: Quando estiver satisfeito, clique em 'Assinar/Aplicar' e baixe seu PDF atualizado.</li>
                    </ol>
                )
            },
            {
                id: "benefits",
                title: "Por que usar o pdfcanada.ca?",
                content: (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <h3 className="font-bold text-red-800 mb-2">100% Privado</h3>
                            <p className="text-sm text-red-700">Suas imagens e PDFs são processados localmente. Ninguém mais vê seus arquivos sensíveis.</p>
                        </div>
                        <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-gray-800 mb-2">Alta Resolução</h3>
                            <p className="text-sm text-gray-700">Mantemos a qualidade de suas imagens para que permaneçam nítidas e profissionais.</p>
                        </div>
                    </div>
                )
            }
        ],

        faq: [
            {
                q: "Quais formatos de imagem são suportados?",
                a: "Você pode inserir formatos de imagem padrão como JPG, PNG e HEIC (fotos do iPhone)."
            },
            {
                q: "Posso mover a imagem depois de colocá-la?",
                a: "Sim! Nosso editor permite arrastar, redimensionar e até excluir imagens antes de salvar o documento final."
            },
            {
                q: "Como insiro uma imagem em um PDF de graça?",
                a: "Use a ferramenta Assinar PDF do pdfcanada.ca. Envie seu PDF, clique em 'Adicionar Imagem', selecione seu arquivo, posicione e baixe. Totalmente grátis."
            },
            {
                q: "Inserir imagens reduz a qualidade do PDF?",
                a: "Não. Preservamos a resolução original da sua imagem e qualidade do PDF."
            }
        ],

        ctaTitle: "Melhore seu PDF hoje",
        ctaButton: "Adicionar Imagem Agora",
        ctaSubtext: "Grátis, Seguro e Orgulhosamente Canadense.",
        whyTitle: "Inserção de Imagem com Privacidade",
        whyDesc: "Não envie fotos pessoais para servidores na nuvem. Use pdfcanada.ca para manter seus dados locais e seguros.",
        faqHeading: "Perguntas Frequentes",
        quickAnswer: {
            question: "Como inserir imagem em PDF grátis?",
            answer: "Use a ferramenta Assinar PDF do pdfcanada.ca. Envie o PDF, clique em 'Adicionar Imagem', posicione a foto e baixe. Suporta JPG, PNG, HEIC. Processamento 100% local.",
            tool: "Ferramenta Assinar e Editar PDF",
            steps: ["Envie seu PDF", "Selecione 'Adicionar Imagem'", "Posicione e redimensione", "Baixe o PDF atualizado"]
        }
    }
});

export const InsertPictureGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/insert-picture-in-pdf"
                faqs={t.faq}
                lang={lang}
                quickAnswer={{
                    question: t.quickAnswer.question,
                    answer: t.quickAnswer.answer,
                    tool: t.quickAnswer.tool,
                    steps: t.quickAnswer.steps
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Insérer une Image' : 'Insert Picture in PDF', path: lang === 'fr' ? '/fr/guides/insert-picture-in-pdf' : '/guides/insert-picture-in-pdf' }
                ]}
            />

            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<ImageIcon size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Insérer une Image' : 'Insert Picture in PDF', href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16 text-gray-700 dark:text-gray-300">
                    <section className="animate-fade-in">
                        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-4 sm:pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24 animate-fade-in">
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

                    <section className="bg-gray-900 text-white rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-canada-red opacity-10 blur-[80px] -mr-24 sm:-mr-32 -mt-24 sm:-mt-32 rounded-full"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <Shield className="text-canada-red w-6 h-6 sm:w-8 sm:h-8" />
                                    {t.whyTitle}
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                    {t.whyDesc}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>No file uploads</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Drag &amp; drop images</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>High-res output</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-8 sm:py-10 md:py-12 animate-fade-in">
                        <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/sign-pdf`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                        >
                            <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                            {t.ctaButton}
                        </Link>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 font-medium">{t.ctaSubtext}</p>
                    </section>

                    <AISnapshot
                        lang={lang}
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        steps={t.quickAnswer.steps}
                        toolName={t.quickAnswer.tool}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/insert-picture-in-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


