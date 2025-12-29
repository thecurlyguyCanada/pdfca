'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, Shield, Zap, HelpCircle, Printer, Edit3, Trash2, ArrowRight } from 'lucide-react';
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
            title: `How to Edit XFA PDFs | Free ${CURRENT_YEAR} Technical Guide | pdfcanada.ca`,
            desc: "Unlock and edit XFA-based PDF forms securely. Our technical guide shows you how to manage dynamic forms locally on your device without uploading private data."
        },
        h1: "How to Edit an XFA PDF: The Adobe PDF Printer Guide",
        subtitle: "Flatten dynamic forms into standard, editable PDFs using the officially recommended workaround.",

        intro: (
            <>
                XFA (XML Forms Architecture) PDFs are a specialized format designed for Adobe's proprietary engine. Because they are dynamic and XML-driven, they often cannot be edited or even opened by standard PDF tools.
                <br /><br />
                The most reliable way to <strong>edit an XFA PDF</strong> is to &quot;flatten&quot; it by printing it to a virtual PDF printer. This converts the dynamic structure into a standard, static PDF that can be modified like any other document.
            </>
        ),

        sections: [
            {
                id: "concept",
                title: "What is Flattening?",
                content: (
                    <>
                        <p className="mb-4">
                            When you print an XFA form to a PDF printer, you are essentially &quot;baking&quot; the visual layer. The dynamic XML is rendered, and that appearance is captured as static content.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-4">
                            <div>
                                <h4 className="font-bold text-canada-red mb-2 uppercase text-xs tracking-widest">Flattening Removes</h4>
                                <ul className="text-sm space-y-1 list-disc pl-4 opacity-80">
                                    <li>Interactive form fields</li>
                                    <li>Calculations & validations</li>
                                    <li>JavaScript actions</li>
                                    <li>Dynamic subforms</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">Flattening Preserves</h4>
                                <ul className="text-sm space-y-1 list-disc pl-4 opacity-80">
                                    <li>Visual layout & text</li>
                                    <li>Filled-in values</li>
                                    <li>Images & borders</li>
                                    <li>Tables & lines</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm italic">
                            👉 Looking for a quick way to flatten standard PDFs? Try our <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline font-bold">PDF Flattening Tool</Link>.
                        </p>
                    </>
                )
            },
            {
                id: "windows-steps",
                title: "Step-by-Step Instructions (Windows)",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Open in Acrobat</strong>: Launch your XFA PDF in Adobe Acrobat Desktop. You may see a message saying &quot;Editing is not supported&quot;—this is normal.
                            </li>
                            <li>
                                <strong>Open Print Dialog</strong>: Press <code>Ctrl + P</code> or go to <code>File → Print</code>.
                            </li>
                            <li>
                                <strong>Select Printer</strong>: In the dropdown, choose <strong>Adobe PDF</strong>.
                            </li>
                            <li>
                                <strong>Review Settings</strong>: Ensure &quot;Pages to Print&quot; is set to &quot;All&quot; and &quot;Sizing&quot; is set to &quot;Size&quot;. Avoid &quot;Print as Image&quot; unless you have rendering issues.
                            </li>
                            <li>
                                <strong>Save the File</strong>: Click <strong>Print</strong>. Choose a new filename (e.g., <code>flattened_editable.pdf</code>) and save it.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "macos-steps",
                title: "Step-by-Step Instructions (macOS)",
                content: (
                    <>
                        <p className="mb-4">macOS uses the system's built-in PDF engine instead of a dedicated &quot;Adobe PDF&quot; printer entry.</p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Open the PDF</strong> as usual in your viewer.</li>
                            <li>Press <code>Command + P</code> to open the Print dialog.</li>
                            <li>Look for the <strong>PDF dropdown</strong> at the bottom-left of the dialog.</li>
                            <li>Select <strong>Save as PDF</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "post-flattening",
                title: "What to Do After Flattening",
                content: (
                    <>
                        <p className="mb-4">Once your file is flattened, it behaves like a standard PDF. You can now use various tools to refine it:</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href={`/${lang}/ocr-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Zap size={14} className="text-canada-red" /> Run OCR to make text editable
                            </Link>
                            <Link href={`/${lang}/sign-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Edit3 size={14} className="text-canada-red" /> Add a secure signature
                            </Link>
                            <Link href={`/${lang}/compress-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Trash2 size={14} className="text-canada-red" /> Compress for smaller size
                            </Link>
                        </div>
                    </>
                )
            }
        ],

        faq: [
            {
                q: "Why can't I just use 'Edit PDF' directly?",
                a: "XFA forms are dynamic XML structures, fundamentally different from standard PDFs. Standard PDF editors (Adobe Acrobat, PDF Expert, Foxit) are built for the static 'AcroForm' standard, which uses fixed form fields. XFA forms use XML-based templates that generate form elements dynamically. The printer/flattening workaround bypasses this incompatibility by rendering the XFA form visually and capturing that rendered state as a static PDF that any editor can handle."
            },
            {
                q: "Will the text be editable immediately after flattening?",
                a: "Sometimes yes, sometimes no. It depends on how the original XFA form was created. If the form creator embedded actual text (selectable text layer), that text will remain editable after flattening. However, some XFA forms render text as vector graphics (outlines) or rasterized images. In those cases, you won't be able to select or edit text directly. Solution: Use our OCR PDF tool (pdfcanada.ca/ocr-pdf) to add a searchable text layer to the flattened PDF."
            },
            {
                q: "What if some fields appear blank after flattening?",
                a: "This happens when the XFA form contains dynamic fields that only appear when certain conditions are met (e.g., checkboxes that trigger additional fields, calculated fields that depend on other inputs). Before flattening, ensure: (1) The form is fully filled out, (2) All conditional fields are visible (click/fill any checkboxes or dropdowns that reveal hidden sections), (3) The form is fully rendered in Acrobat (wait for all calculations to complete). If fields are still blank, the XFA form may have JavaScript errors preventing proper rendering."
            },
            {
                q: "What's the difference between XFA and AcroForm PDFs?",
                a: "**AcroForm** is the standard PDF form format (PDF 1.2, introduced 1996). It uses PDF form field objects (text fields, checkboxes, radio buttons) embedded directly in the PDF structure. AcroForms are widely compatible — they work in Adobe Reader, browsers (Chrome, Firefox, Safari), and third-party PDF tools (Foxit, PDF Expert, Preview on Mac). **XFA (XML Forms Architecture)** is Adobe's proprietary format (introduced 2003) based on XML templates. XFA forms are dynamic — they can expand, collapse, and change based on user input or data. However, XFA only works in Adobe Reader/Acrobat (not even all Adobe products!). Many tools can't open XFA at all. Adobe officially deprecated XFA in 2021, recommending migration to AcroForm or HTML forms."
            },
            {
                q: "Can I flatten XFA PDFs without Adobe Acrobat?",
                a: "Difficult, but possible in some cases. Adobe Acrobat (full version, not just Reader) is the most reliable tool because it has the XFA rendering engine. Alternatives: (1) **Adobe Reader DC** (free) can open and print XFA forms — use it to print to a PDF printer (Microsoft Print to PDF on Windows, Save as PDF on Mac). (2) **LibreOffice Draw** can sometimes open XFA forms if they're simple, but often fails with complex forms. (3) **Online converters** (not recommended for sensitive forms due to privacy) like Zamzar, CloudConvert may work, but upload your data to third-party servers. (4) **Command-line tools** like qpdf, PDFtk don't support XFA at all. Bottom line: For reliable XFA flattening, Adobe Acrobat or Adobe Reader is your best bet."
            },
            {
                q: "Is flattening the same as 'making PDF non-editable'?",
                a: "Similar, but not identical. **Flattening an XFA form** specifically converts the dynamic XML structure to a static PDF, removing form fields in the process. **Making a standard PDF non-editable** (also called flattening) removes form fields from AcroForm PDFs, converting them to static text and graphics. Both processes result in a PDF where the content is 'baked in' and can't be changed via form fields. However, in both cases, the resulting PDF can still be edited with PDF editing tools (Adobe Acrobat, PDF Expert) — they're not 'locked'. To truly lock a PDF, you need to apply security settings (password protection, restrict editing permissions)."
            },
            {
                q: "Will JavaScript and calculations still work after flattening?",
                a: "No. Flattening captures the visual state of the form at a specific moment. All interactivity is lost: JavaScript functions, auto-calculations, validation scripts, dynamic field visibility, submit buttons — all gone. The flattened PDF is a static snapshot. If you need calculations to update, you must re-fill the original XFA form, recalculate, and flatten again. Think of it like taking a screenshot vs. using the live application."
            },
            {
                q: "Can I convert an XFA PDF back to AcroForm?",
                a: "Not directly, and not automatically. XFA and AcroForm are architecturally different. Converting would require: (1) Flattening the XFA form to static PDF, (2) Manually recreating form fields with a PDF form editor (Adobe Acrobat: Tools → Prepare Form, or third-party tools like PDFEscape, Foxit). This is tedious for complex forms with 50+ fields. Alternative: If you have access to the original form template (Adobe LiveCycle Designer .xdp file), you can redesign it as an AcroForm in Adobe Acrobat or other form builders. For government forms (CRA, IRCC), check if an AcroForm version exists on the official website."
            },
            {
                q: "Why do some government forms use XFA (like CRA T1)?",
                a: "Historical reasons. Adobe promoted XFA in the mid-2000s as the 'future of forms' with advanced features: dynamic sections (add/remove rows), complex calculations, data binding to XML databases, digital signatures with encryption. The Canada Revenue Agency (CRA) adopted XFA for tax forms (T1, T2, GST/HST returns) because of these capabilities. However, XFA's poor compatibility became a problem — people on Macs, Linux, or non-Adobe PDF readers couldn't file taxes. CRA has been transitioning to web-based forms (HTML) and simpler AcroForm PDFs. As of 2024, most CRA forms are available in both XFA and AcroForm versions, or as fillable web forms."
            },
            {
                q: "How do I know if my PDF is XFA or AcroForm?",
                a: "Several ways to check: **Method 1 (Adobe Acrobat/Reader):** Open the PDF. If you see a purple/yellow banner saying 'Please wait... If this message is not eventually replaced by the proper contents of the document, your PDF viewer may not be able to display this type of document,' it's XFA. **Method 2 (File properties):** In Acrobat, File → Properties → Description tab. If 'PDF Version' says 'PDF with XML Forms Architecture (XFA)', it's XFA. **Method 3 (Open with text editor):** Open the PDF in a text editor (Notepad++, VS Code, TextEdit). Search for '<xdp:xdp' or '<xfa:' — if found, it's XFA. **Method 4 (Compatibility):** If the PDF opens in Chrome/Firefox/Safari browsers, it's probably AcroForm. If it only opens in Adobe Reader, likely XFA."
            },
            {
                q: "Can I fill out an XFA form online (in a browser)?",
                a: "No, not reliably. Modern browsers (Chrome, Firefox, Safari, Edge) don't support XFA. They can render standard PDF forms (AcroForm) using built-in PDF viewers, but XFA forms either won't display at all, or will show a blank page with an error message. You must download the XFA form and open it in Adobe Reader or Acrobat desktop application. This is a major usability problem, which is why Adobe deprecated XFA and governments/organizations are moving away from it."
            },
            {
                q: "What happens to digital signatures when I flatten an XFA form?",
                a: "Digital signatures are invalidated. Flattening modifies the document structure, which breaks the cryptographic signature. After flattening: (1) Any existing signatures will show as 'Invalid' or 'Document has been altered', (2) The signature fields themselves may be removed or rendered as static images (depending on how you flatten). If you need a signed XFA form, sign it first (before flattening) and keep the original XFA version with valid signatures. The flattened version is for editing/archiving only, not for legal/official use. For Canadian legal/tax purposes, submit the original signed XFA PDF, not a flattened copy."
            },
            {
                q: "Can I flatten XFA forms on a Mac?",
                a: "Yes, but with limitations. **Adobe Acrobat DC (Mac)** works identically to Windows — open the XFA form, File → Print, choose 'Save as PDF' or a PDF printer, done. **Adobe Reader DC (Mac, free)** can also print XFA forms to PDF via File → Print → Save as PDF. **macOS Preview** cannot open XFA forms at all (it doesn't have the XFA rendering engine). **Third-party Mac PDF tools** (PDF Expert, PDFpen, Skim) also don't support XFA. Bottom line: Install Adobe Reader DC (free) to handle XFA forms on Mac."
            },
            {
                q: "Will images and logos be preserved when flattening?",
                a: "Yes. Flattening preserves all visual content — text, images, logos, borders, background colors, checkboxes (checked/unchecked state), radio buttons, table grids, etc. Everything visible in the XFA form will appear in the flattened PDF. However, image quality depends on print settings: If you select 'Print as Image' in the print dialog, images may be slightly degraded (rasterized). For best quality, avoid 'Print as Image' and use normal print mode. Images will be embedded at their original resolution."
            },
            {
                q: "Can I flatten only part of an XFA form (some pages, not all)?",
                a: "Yes, but awkwardly. In the print dialog, select 'Pages' instead of 'All' and specify the page range (e.g., pages 1-5). This will flatten only those pages. However, this may break the document structure if the XFA form has dependencies between pages (e.g., page 5 calculations depend on page 2 data). Better approach: Flatten the entire form, then use a PDF splitter/editor to extract the pages you need."
            },
            {
                q: "Why is my flattened PDF much larger than the original?",
                a: "Flattening can increase file size, especially if the XFA form uses vector graphics or embedded fonts. Reasons: (1) **Vector to raster conversion:** If the XFA form uses vector shapes (lines, circles, borders), printing may rasterize them (convert to images), increasing file size. (2) **Font embedding:** The flattened PDF may embed all fonts used in the form, even if the original XFA used font subsetting. (3) **Image compression:** Print settings may use lossless compression or high-quality JPEG, increasing size. Solutions: (1) Use Adobe Acrobat's 'Optimize PDF' tool (File → Save As Other → Optimized PDF) to compress the flattened file. (2) Adjust print quality settings (lower DPI if acceptable). (3) Use our Compress PDF tool (pdfcanada.ca/compress-pdf) to reduce size after flattening."
            },
            {
                q: "Can I edit text in the flattened PDF with Adobe Acrobat?",
                a: "Usually, yes. After flattening, open the PDF in Adobe Acrobat (full version, not Reader). Use Tools → Edit PDF to modify text. Acrobat's text recognition works well if the text was rendered properly during flattening. However, limitations: (1) If text was converted to outlines/curves during flattening, Acrobat can't edit it (you'll need OCR). (2) Complex layouts (tables, multi-column text) may be difficult to edit without breaking formatting. (3) For extensive edits, consider exporting to Word (File → Export To → Word Document), editing there, then converting back to PDF."
            },
            {
                q: "What about IRCC immigration forms (IMM 5XXX series)?",
                a: "IRCC (Immigration, Refugees and Citizenship Canada) uses both XFA and AcroForm PDFs. Many older forms (IMM 5257, IMM 5406, IMM 5490) were XFA, causing problems for applicants without Adobe Reader. As of 2023-2024, IRCC has been updating forms to AcroForm or web-based versions. Check the IRCC website (canada.ca/en/immigration-refugees-citizenship) for the latest version of your form. If you have an old XFA version: (1) Download the newest version (may be AcroForm now), or (2) Use Adobe Reader DC to fill and flatten, or (3) Use IRCC's online portal (if available for your application type) to submit electronically."
            },
            {
                q: "Can I batch-flatten multiple XFA PDFs at once?",
                a: "Not with standard tools. Adobe Acrobat's batch processing (Action Wizard) doesn't support XFA flattening directly. Workarounds: (1) **Manual loop:** Open each XFA form, print to PDF, save, repeat (tedious for 10+ files). (2) **Scripting with Adobe Acrobat JavaScript:** Advanced users can write JavaScript actions to automate printing, but this is complex and unreliable. (3) **Third-party tools:** Some document automation software (Adobe LiveCycle, commercial form processors) can batch-convert XFA to static PDF, but these are enterprise-level solutions ($$$$). For small batches (<10 files), manual processing is fastest. For large batches, consider hiring a document processing service."
            },
            {
                q: "Is there any way to make XFA forms work in browsers?",
                a: "Not natively, but some workarounds exist: (1) **Browser extensions:** Adobe has deprecated its PDF Reader browser extension, but some third-party extensions claim XFA support (unreliable). (2) **Server-side rendering:** Some organizations use server-side PDF rendering (Adobe AEM Forms, LiveCycle) to convert XFA to HTML dynamically when the form is accessed via web browser. The user fills an HTML form, and the server generates the XFA PDF on the backend. (3) **PDF.js (Mozilla):** Doesn't support XFA at all. (4) **Chromium/Firefox native PDF viewers:** No XFA support. Bottom line: If you need browser compatibility, migrate away from XFA to AcroForm or HTML forms."
            },
            {
                q: "Can I convert XFA to Word/Excel for editing?",
                a: "Possible, but lossy. Workflow: (1) Flatten the XFA PDF (print to static PDF). (2) Use Adobe Acrobat: File → Export To → Microsoft Word or Microsoft Excel. Acrobat will attempt OCR and layout recognition to reconstruct the document. (3) Edit in Word/Excel. (4) Convert back to PDF if needed (File → Save As → PDF in Word/Excel, or Print to PDF). Caveats: (1) Complex layouts, tables, or forms may not convert cleanly. (2) Formatting will likely be imperfect (fonts, spacing, alignment). (3) Form fields will be lost (they become static text/tables). (4) For forms with 50+ fields, manual reformatting may be needed. Alternative: Extract data from the XFA form and manually rebuild the document in Word/Excel from scratch."
            },
            {
                q: "How do I extract data from filled XFA forms?",
                a: "Several methods: **Method 1 (Manual copy-paste):** Open the filled XFA form in Adobe Reader/Acrobat. Select and copy text from each field. Paste into Excel/database. Tedious for forms with many fields. **Method 2 (Export data):** In Acrobat, File → Save As Other → XML (.xml). This exports form data in XML format. Import the XML into Excel, Access, or a database. **Method 3 (Adobe FormsCentral / AEM Forms):** If the form was created with Adobe's enterprise form systems, data can be exported to CSV, XML, or integrated with databases. **Method 4 (Third-party tools):** PDF data extraction software (PDFTables, Tabula, ABBYY FineReader) can extract table data from PDFs, including flattened XFA forms. For Canadian tax forms (CRA): The .tax file generated by tax software (like UFile, TurboTax) contains extracted data and can be imported for analysis."
            },
            {
                q: "What if Adobe Reader shows 'Extended Features are no longer available'?",
                a: "This warning appears on XFA forms that were 'Reader-enabled' (a feature allowing form-saving and digital signatures in free Adobe Reader). Adobe deprecated Reader Extensions in 2017. Solutions: (1) Ignore the warning if you just need to view/print the form. (2) Fill out the form and print to PDF (flattening) — this still works. (3) For signing: Use full Adobe Acrobat (paid version) which doesn't require Reader Extensions. (4) For CRA tax forms: Use certified tax software (UFile, TurboTax, StudioTax) instead of filling PDFs manually. The warning doesn't prevent you from using the form, but you can't save a filled copy in Reader anymore (unless you print it to PDF)."
            },
            {
                q: "Can I use pdfcanada.ca to flatten XFA forms?",
                a: "Not directly for XFA-specific flattening. Our 'Make PDF Non-Editable' tool flattens standard AcroForm PDFs (removes editable form fields). It won't open XFA forms because the browser (where our tools run via WebAssembly) doesn't have the XFA rendering engine. Workflow for XFA: (1) Use Adobe Reader/Acrobat to flatten the XFA form (print to PDF as described in this guide). (2) Once you have a static PDF, you can use our other tools (Compress PDF, OCR PDF, Edit PDF) to further process it. We recommend this two-step approach: Flatten XFA with Adobe → Edit/optimize with pdfcanada.ca."
            },
            {
                q: "Are there any open-source alternatives to Adobe for XFA?",
                a: "Very limited. Adobe XFA is a proprietary format, and most open-source PDF libraries (PDFtk, qpdf, PyPDF2, PDF.js, Poppler, MuPDF) explicitly don't support it. Partial support: **LibreOffice Draw** can sometimes open simple XFA forms, but often fails. **Apache FOP (XSL-FO processor)** can generate PDFs from XML, but isn't designed for XFA form rendering. **PDFBox (Apache)** has experimental XFA reading capabilities (very limited). Bottom line: For reliable XFA handling, you need Adobe Reader DC (free) or full Acrobat. Open-source solutions are not viable for XFA as of 2024."
            },
            {
                q: "Why is Adobe deprecating XFA? What should I use instead?",
                a: "Adobe officially deprecated XFA in PDF 2.0 specification (ISO 32000-2:2020) because: (1) **Poor compatibility:** XFA only works in Adobe products, limiting accessibility. (2) **Security concerns:** Dynamic XML-based forms are harder to sandbox/secure than static PDFs. (3) **Maintenance burden:** Adobe had to maintain XFA rendering engine separately from standard PDF. (4) **Better alternatives exist:** HTML5 forms (web-based), AcroForm PDFs (widely compatible), or modern form platforms (Google Forms, Microsoft Forms, Typeform). **Adobe's recommendations:** (1) For new forms: Use AcroForm (PDF 1.7 standard forms) or HTML forms. (2) For existing XFA forms: Migrate to AcroForm or web forms. (3) For data collection: Use Adobe Experience Manager (AEM) Forms or third-party form platforms. For Canadians: Government agencies (CRA, IRCC, Service Canada) are phasing out XFA in favor of web forms and AcroForm PDFs."
            }
        ],

        whyTitle: "Why This Works",
        whyDesc: "Printing to PDF captures the 'visual state' of the XFA form, converting complex XML logic into simple PDF geometric instructions that any editor can understand.",
        ctaTitle: "Need to flatten your PDF right now?",
        ctaButton: "Use Our Flattening Tool",
        ctaSubtext: "Free, Secure, and Canadian."
    },
    fr: {
        seo: {
            title: `Comment Éditer un PDF XFA | Guide Technique ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: "Déverrouillez et modifiez les formulaires PDF basés sur XFA en toute sécurité. Notre guide technique vous montre comment gérer les formulaires dynamiques localement."
        },
        h1: "Éditer un PDF XFA : Guide de l'imprimante Adobe PDF",
        subtitle: "Aplatissez les formulaires dynamiques en PDF standard modifiables.",
        intro: (
            <>
                Les PDF XFA (XML Forms Architecture) sont un format spécialisé conçu pour le moteur propriétaire d'Adobe. Parce qu'ils sont dynamiques et pilotés par XML, ils ne peuvent souvent pas être modifiés ou même ouverts par des outils PDF standards.
                <br /><br />
                La méthode la plus fiable pour <strong>éditer un PDF XFA</strong> est de l'« aplatir » en l'imprimant vers une imprimante virtuelle PDF. Cela convertit la structure dynamique en un PDF statique standard qui peut être modifié comme n'importe quel autre document.
            </>
        ),
        sections: [
            {
                id: "concept",
                title: "Qu'est-ce que l'aplatissement ?",
                content: (
                    <>
                        <p className="mb-4">
                            Lorsque vous imprimez un formulaire XFA vers une imprimante PDF, vous « figez » essentiellement la couche visuelle. Le XML dynamique est rendu, et cette apparence est capturée comme un contenu statique.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-4">
                            <div>
                                <h4 className="font-bold text-canada-red mb-2 uppercase text-xs tracking-widest">L'aplatissement supprime</h4>
                                <ul className="text-sm space-y-1 list-disc pl-4 opacity-80">
                                    <li>Les champs de formulaire interactifs</li>
                                    <li>Les calculs et validations</li>
                                    <li>Les actions JavaScript</li>
                                    <li>Les sous-formulaires dynamiques</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">L'aplatissement préserve</h4>
                                <ul className="text-sm space-y-1 list-disc pl-4 opacity-80">
                                    <li>La mise en page visuelle et le texte</li>
                                    <li>Les valeurs saisies</li>
                                    <li>Les images et bordures</li>
                                    <li>Les tableaux et lignes</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm italic text-gray-700 dark:text-gray-300">
                            👉 Vous cherchez un moyen rapide d'aplatir des PDF standards ? Essayez notre <Link href={`/${lang}/make-pdf-non-editable`} className="text-canada-red hover:underline font-bold">outil d'aplatissement PDF</Link>.
                        </p>
                    </>
                )
            },
            {
                id: "windows-steps",
                title: "Instructions étape par étape (Windows)",
                content: (
                    <>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>
                                <strong>Ouvrir dans Acrobat</strong> : Lancez votre PDF XFA dans Adobe Acrobat Desktop. Vous pourriez voir un message indiquant « L'édition n'est pas prise en charge » — c'est normal.
                            </li>
                            <li>
                                <strong>Ouvrir le dialogue d'impression</strong> : Appuyez sur <code>Ctrl + P</code> ou allez dans <code>Fichier → Imprimer</code>.
                            </li>
                            <li>
                                <strong>Sélectionner l'imprimante</strong> : Dans le menu déroulant, choisissez <strong>Adobe PDF</strong>.
                            </li>
                            <li>
                                <strong>Vérifier les réglages</strong> : Assurez-vous que « Pages à imprimer » est sur « Tout » et « Taille » sur « Taille réelle ». Évitez « Imprimer comme image » sauf en cas de problème de rendu.
                            </li>
                            <li>
                                <strong>Enregistrer le fichier</strong> : Cliquez sur <strong>Imprimer</strong>. Choisissez un nouveau nom de fichier (ex: <code>aplati_modifiable.pdf</code>) et enregistrez-le.
                            </li>
                        </ol>
                    </>
                )
            },
            {
                id: "macos-steps",
                title: "Instructions étape par étape (macOS)",
                content: (
                    <>
                        <p className="mb-4">macOS utilise le moteur PDF intégré au système plutôt qu'une entrée d'imprimante « Adobe PDF » dédiée.</p>
                        <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li><strong>Ouvrez le PDF</strong> comme d'habitude dans votre visionneuse.</li>
                            <li>Appuyez sur <code>Command + P</code> pour ouvrir le dialogue d'impression.</li>
                            <li>Cherchez le <strong>menu déroulant PDF</strong> en bas à gauche du dialogue.</li>
                            <li>Sélectionnez <strong>Enregistrer au format PDF</strong>.</li>
                        </ol>
                    </>
                )
            },
            {
                id: "post-flattening",
                title: "Que faire après l'aplatissement",
                content: (
                    <>
                        <p className="mb-4">Une fois votre fichier aplati, il se comporte comme un PDF standard. Vous pouvez maintenant utiliser divers outils pour le perfectionner :</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href={`/${lang}/ocr-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Zap size={14} className="text-canada-red" /> Exécuter l'OCR pour rendre le texte modifiable
                            </Link>
                            <Link href={`/${lang}/sign-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Edit3 size={14} className="text-canada-red" /> Ajouter une signature sécurisée
                            </Link>
                            <Link href={`/${lang}/compress-pdf`} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-canada-red transition-colors">
                                <Trash2 size={14} className="text-canada-red" /> Compresser pour une taille réduite
                            </Link>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Pourquoi ne puis-je pas simplement utiliser 'Modifier le PDF' directement ?",
                a: "Les formulaires XFA sont des structures XML dynamiques, fondamentalement différentes des PDF standards. Les éditeurs PDF standards (Adobe Acrobat, PDF Expert, Foxit) sont conçus pour la norme statique 'AcroForm', qui utilise des champs de formulaire fixes. Les formulaires XFA utilisent des modèles XML qui génèrent des éléments de formulaire dynamiquement. Le contournement par impression/aplatissement contourne cette incompatibilité en rendant le formulaire XFA visuellement et en capturant cet état rendu en PDF statique que tout éditeur peut gérer."
            },
            {
                q: "Le texte sera-t-il modifiable immédiatement après l'aplatissement ?",
                a: "Parfois oui, parfois non. Cela dépend de la façon dont le formulaire XFA original a été créé. Si le créateur du formulaire a intégré du texte réel (couche de texte sélectionnable), ce texte restera modifiable après l'aplatissement. Cependant, certains formulaires XFA rendent le texte sous forme de graphiques vectoriels (contours) ou d'images rastérisées. Dans ces cas, vous ne pourrez pas sélectionner ou modifier le texte directement. Solution : Utilisez notre outil OCR PDF (pdfcanada.ca/ocr-pdf) pour ajouter une couche de texte interrogeable au PDF aplati."
            },
            {
                q: "Et si certains champs apparaissent vides après l'aplatissement ?",
                a: "Cela se produit lorsque le formulaire XFA contient des champs dynamiques qui n'apparaissent que lorsque certaines conditions sont remplies (ex: cases à cocher qui déclenchent des champs supplémentaires, champs calculés qui dépendent d'autres entrées). Avant d'aplatir, assurez-vous : (1) Le formulaire est entièrement rempli, (2) Tous les champs conditionnels sont visibles (cochez/remplissez toutes les cases ou menus déroulants qui révèlent des sections cachées), (3) Le formulaire est entièrement rendu dans Acrobat (attendez que tous les calculs soient terminés). Si les champs sont toujours vides, le formulaire XFA peut avoir des erreurs JavaScript empêchant le rendu approprié."
            },
            {
                q: "Quelle est la différence entre les PDF XFA et AcroForm ?",
                a: "**AcroForm** est le format de formulaire PDF standard (PDF 1.2, introduit en 1996). Il utilise des objets de champ de formulaire PDF (champs de texte, cases à cocher, boutons radio) intégrés directement dans la structure PDF. Les AcroForm sont largement compatibles — ils fonctionnent dans Adobe Reader, les navigateurs (Chrome, Firefox, Safari) et les outils PDF tiers (Foxit, PDF Expert, Aperçu sur Mac). **XFA (XML Forms Architecture)** est le format propriétaire d'Adobe (introduit en 2003) basé sur des modèles XML. Les formulaires XFA sont dynamiques — ils peuvent s'étendre, se réduire et changer en fonction des entrées utilisateur ou des données. Cependant, XFA ne fonctionne que dans Adobe Reader/Acrobat (même pas tous les produits Adobe !). Beaucoup d'outils ne peuvent pas ouvrir XFA du tout. Adobe a officiellement déprécié XFA en 2021, recommandant la migration vers AcroForm ou formulaires HTML."
            },
            {
                q: "Puis-je aplatir des PDF XFA sans Adobe Acrobat ?",
                a: "Difficile, mais possible dans certains cas. Adobe Acrobat (version complète, pas seulement Reader) est l'outil le plus fiable car il possède le moteur de rendu XFA. Alternatives : (1) **Adobe Reader DC** (gratuit) peut ouvrir et imprimer des formulaires XFA — utilisez-le pour imprimer vers une imprimante PDF (Microsoft Print to PDF sur Windows, Enregistrer en PDF sur Mac). (2) **LibreOffice Draw** peut parfois ouvrir des formulaires XFA s'ils sont simples, mais échoue souvent avec les formulaires complexes. (3) **Convertisseurs en ligne** (non recommandés pour les formulaires sensibles en raison de la confidentialité) comme Zamzar, CloudConvert peuvent fonctionner, mais téléchargent vos données sur des serveurs tiers. (4) **Outils en ligne de commande** comme qpdf, PDFtk ne supportent pas du tout XFA. Conclusion : Pour un aplatissement XFA fiable, Adobe Acrobat ou Adobe Reader est votre meilleur choix."
            },
            {
                q: "L'aplatissement est-il identique à 'rendre le PDF non modifiable' ?",
                a: "Similaire, mais pas identique. **Aplatir un formulaire XFA** convertit spécifiquement la structure XML dynamique en PDF statique, supprimant les champs de formulaire dans le processus. **Rendre un PDF standard non modifiable** (aussi appelé aplatissement) supprime les champs de formulaire des PDF AcroForm, les convertissant en texte et graphiques statiques. Les deux processus résultent en un PDF où le contenu est 'figé' et ne peut être modifié via des champs de formulaire. Cependant, dans les deux cas, le PDF résultant peut toujours être édité avec des outils d'édition PDF (Adobe Acrobat, PDF Expert) — ils ne sont pas 'verrouillés'. Pour verrouiller vraiment un PDF, vous devez appliquer des paramètres de sécurité (protection par mot de passe, restreindre les permissions d'édition)."
            },
            {
                q: "JavaScript et les calculs fonctionneront-ils toujours après l'aplatissement ?",
                a: "Non. L'aplatissement capture l'état visuel du formulaire à un moment spécifique. Toute interactivité est perdue : fonctions JavaScript, calculs automatiques, scripts de validation, visibilité dynamique des champs, boutons de soumission — tout disparu. Le PDF aplati est un instantané statique. Si vous avez besoin que les calculs se mettent à jour, vous devez re-remplir le formulaire XFA original, recalculer et aplatir à nouveau. Pensez-y comme prendre une capture d'écran vs utiliser l'application en direct."
            },
            {
                q: "Puis-je convertir un PDF XFA en AcroForm ?",
                a: "Pas directement, et pas automatiquement. XFA et AcroForm sont architecturalement différents. La conversion nécessiterait : (1) Aplatir le formulaire XFA en PDF statique, (2) Recréer manuellement les champs de formulaire avec un éditeur de formulaire PDF (Adobe Acrobat : Outils → Préparer le formulaire, ou outils tiers comme PDFEscape, Foxit). C'est fastidieux pour les formulaires complexes avec 50+ champs. Alternative : Si vous avez accès au modèle de formulaire original (fichier Adobe LiveCycle Designer .xdp), vous pouvez le reconcevoir en AcroForm dans Adobe Acrobat ou d'autres créateurs de formulaires. Pour les formulaires gouvernementaux (ARC, IRCC), vérifiez si une version AcroForm existe sur le site officiel."
            },
            {
                q: "Pourquoi certains formulaires gouvernementaux utilisent XFA (comme ARC T1) ?",
                a: "Raisons historiques. Adobe a promu XFA au milieu des années 2000 comme 'l'avenir des formulaires' avec des fonctionnalités avancées : sections dynamiques (ajouter/supprimer des lignes), calculs complexes, liaison de données aux bases XML, signatures numériques avec chiffrement. L'Agence du revenu du Canada (ARC) a adopté XFA pour les formulaires fiscaux (T1, T2, déclarations TPS/TVH) en raison de ces capacités. Cependant, la mauvaise compatibilité de XFA est devenue un problème — les gens sur Mac, Linux ou lecteurs PDF non-Adobe ne pouvaient pas déclarer leurs impôts. L'ARC a été en transition vers des formulaires web (HTML) et des PDF AcroForm plus simples. En 2024, la plupart des formulaires ARC sont disponibles en versions XFA et AcroForm, ou en formulaires web remplissables."
            },
            {
                q: "Comment savoir si mon PDF est XFA ou AcroForm ?",
                a: "Plusieurs façons de vérifier : **Méthode 1 (Adobe Acrobat/Reader) :** Ouvrez le PDF. Si vous voyez une bannière violette/jaune disant 'Veuillez patienter... Si ce message n'est pas éventuellement remplacé par le contenu approprié du document, votre visualiseur PDF pourrait ne pas être capable d'afficher ce type de document', c'est XFA. **Méthode 2 (Propriétés du fichier) :** Dans Acrobat, Fichier → Propriétés → onglet Description. Si 'Version PDF' dit 'PDF avec Architecture de Formulaires XML (XFA)', c'est XFA. **Méthode 3 (Ouvrir avec éditeur de texte) :** Ouvrez le PDF dans un éditeur de texte (Notepad++, VS Code, TextEdit). Recherchez '<xdp:xdp' ou '<xfa:' — si trouvé, c'est XFA. **Méthode 4 (Compatibilité) :** Si le PDF s'ouvre dans les navigateurs Chrome/Firefox/Safari, c'est probablement AcroForm. Si il s'ouvre seulement dans Adobe Reader, probablement XFA."
            },
            {
                q: "Puis-je remplir un formulaire XFA en ligne (dans un navigateur) ?",
                a: "Non, pas de manière fiable. Les navigateurs modernes (Chrome, Firefox, Safari, Edge) ne supportent pas XFA. Ils peuvent rendre les formulaires PDF standards (AcroForm) en utilisant des visualiseurs PDF intégrés, mais les formulaires XFA soit ne s'afficheront pas du tout, soit montreront une page vierge avec un message d'erreur. Vous devez télécharger le formulaire XFA et l'ouvrir dans l'application de bureau Adobe Reader ou Acrobat. C'est un problème majeur d'utilisabilité, c'est pourquoi Adobe a déprécié XFA et les gouvernements/organisations s'en éloignent."
            },
            {
                q: "Qu'arrive-t-il aux signatures numériques lorsque j'aplatis un formulaire XFA ?",
                a: "Les signatures numériques sont invalidées. L'aplatissement modifie la structure du document, ce qui brise la signature cryptographique. Après l'aplatissement : (1) Toutes les signatures existantes montreront 'Non valide' ou 'Le document a été altéré', (2) Les champs de signature eux-mêmes peuvent être supprimés ou rendus en images statiques (selon comment vous aplatissez). Si vous avez besoin d'un formulaire XFA signé, signez-le d'abord (avant l'aplatissement) et conservez la version XFA originale avec signatures valides. La version aplatie est pour édition/archivage seulement, pas pour usage légal/officiel. Pour les fins légales/fiscales canadiennes, soumettez le PDF XFA original signé, pas une copie aplatie."
            },
            {
                q: "Puis-je aplatir des formulaires XFA sur Mac ?",
                a: "Oui, mais avec des limitations. **Adobe Acrobat DC (Mac)** fonctionne de manière identique à Windows — ouvrez le formulaire XFA, Fichier → Imprimer, choisissez 'Enregistrer en PDF' ou une imprimante PDF, terminé. **Adobe Reader DC (Mac, gratuit)** peut aussi imprimer des formulaires XFA en PDF via Fichier → Imprimer → Enregistrer en PDF. **Aperçu macOS** ne peut pas ouvrir les formulaires XFA du tout (il n'a pas le moteur de rendu XFA). **Outils PDF tiers Mac** (PDF Expert, PDFpen, Skim) ne supportent pas non plus XFA. Conclusion : Installez Adobe Reader DC (gratuit) pour gérer les formulaires XFA sur Mac."
            },
            {
                q: "Les images et logos seront-ils préservés lors de l'aplatissement ?",
                a: "Oui. L'aplatissement préserve tout le contenu visuel — texte, images, logos, bordures, couleurs de fond, cases à cocher (état coché/non coché), boutons radio, grilles de tableau, etc. Tout ce qui est visible dans le formulaire XFA apparaîtra dans le PDF aplati. Cependant, la qualité d'image dépend des paramètres d'impression : Si vous sélectionnez 'Imprimer en tant qu'image' dans la boîte de dialogue d'impression, les images peuvent être légèrement dégradées (rastérisées). Pour la meilleure qualité, évitez 'Imprimer en tant qu'image' et utilisez le mode d'impression normal. Les images seront intégrées à leur résolution originale."
            },
            {
                q: "Puis-je aplatir seulement une partie d'un formulaire XFA (certaines pages, pas toutes) ?",
                a: "Oui, mais maladroitement. Dans la boîte de dialogue d'impression, sélectionnez 'Pages' au lieu de 'Tout' et spécifiez la plage de pages (ex: pages 1-5). Cela aplatira seulement ces pages. Cependant, cela peut briser la structure du document si le formulaire XFA a des dépendances entre les pages (ex: les calculs de la page 5 dépendent des données de la page 2). Meilleure approche : Aplatissez le formulaire entier, puis utilisez un diviseur/éditeur PDF pour extraire les pages dont vous avez besoin."
            },
            {
                q: "Pourquoi mon PDF aplati est-il beaucoup plus gros que l'original ?",
                a: "L'aplatissement peut augmenter la taille de fichier, surtout si le formulaire XFA utilise des graphiques vectoriels ou des polices intégrées. Raisons : (1) **Conversion vecteur vers raster :** Si le formulaire XFA utilise des formes vectorielles (lignes, cercles, bordures), l'impression peut les rastériser (convertir en images), augmentant la taille de fichier. (2) **Intégration de polices :** Le PDF aplati peut intégrer toutes les polices utilisées dans le formulaire, même si le XFA original utilisait le sous-ensemble de polices. (3) **Compression d'image :** Les paramètres d'impression peuvent utiliser la compression sans perte ou JPEG haute qualité, augmentant la taille. Solutions : (1) Utilisez l'outil 'Optimiser le PDF' d'Adobe Acrobat (Fichier → Enregistrer sous autre → PDF optimisé) pour compresser le fichier aplati. (2) Ajustez les paramètres de qualité d'impression (DPI plus faible si acceptable). (3) Utilisez notre outil Compresser PDF (pdfcanada.ca/compress-pdf) pour réduire la taille après l'aplatissement."
            },
            {
                q: "Puis-je éditer du texte dans le PDF aplati avec Adobe Acrobat ?",
                a: "Généralement, oui. Après l'aplatissement, ouvrez le PDF dans Adobe Acrobat (version complète, pas Reader). Utilisez Outils → Modifier le PDF pour modifier le texte. La reconnaissance de texte d'Acrobat fonctionne bien si le texte a été rendu correctement lors de l'aplatissement. Cependant, limitations : (1) Si le texte a été converti en contours/courbes lors de l'aplatissement, Acrobat ne peut pas l'éditer (vous aurez besoin d'OCR). (2) Les mises en page complexes (tableaux, texte multi-colonnes) peuvent être difficiles à éditer sans briser le formatage. (3) Pour des modifications étendues, considérez exporter vers Word (Fichier → Exporter vers → Document Word), éditer là, puis reconvertir en PDF."
            },
            {
                q: "Qu'en est-il des formulaires d'immigration IRCC (série IMM 5XXX) ?",
                a: "IRCC (Immigration, Réfugiés et Citoyenneté Canada) utilise à la fois des PDF XFA et AcroForm. Beaucoup de formulaires plus anciens (IMM 5257, IMM 5406, IMM 5490) étaient XFA, causant des problèmes aux demandeurs sans Adobe Reader. En 2023-2024, IRCC a mis à jour les formulaires vers AcroForm ou versions web. Vérifiez le site web IRCC (canada.ca/fr/immigration-refugies-citoyennete) pour la dernière version de votre formulaire. Si vous avez une ancienne version XFA : (1) Téléchargez la version la plus récente (peut être AcroForm maintenant), ou (2) Utilisez Adobe Reader DC pour remplir et aplatir, ou (3) Utilisez le portail en ligne d'IRCC (si disponible pour votre type de demande) pour soumettre électroniquement."
            },
            {
                q: "Puis-je aplatir plusieurs PDF XFA à la fois en lot ?",
                a: "Pas avec les outils standards. Le traitement par lots d'Adobe Acrobat (Action Wizard) ne supporte pas directement l'aplatissement XFA. Solutions de contournement : (1) **Boucle manuelle :** Ouvrez chaque formulaire XFA, imprimez en PDF, enregistrez, répétez (fastidieux pour 10+ fichiers). (2) **Script avec JavaScript Adobe Acrobat :** Les utilisateurs avancés peuvent écrire des actions JavaScript pour automatiser l'impression, mais c'est complexe et peu fiable. (3) **Outils tiers :** Certains logiciels d'automatisation de documents (Adobe LiveCycle, processeurs de formulaires commerciaux) peuvent convertir en lot XFA vers PDF statique, mais ce sont des solutions d'entreprise ($$$$). Pour petits lots (<10 fichiers), le traitement manuel est le plus rapide. Pour gros lots, considérez embaucher un service de traitement de documents."
            },
            {
                q: "Y a-t-il un moyen de faire fonctionner les formulaires XFA dans les navigateurs ?",
                a: "Pas nativement, mais quelques solutions de contournement existent : (1) **Extensions de navigateur :** Adobe a déprécié son extension PDF Reader pour navigateur, mais certaines extensions tierces prétendent supporter XFA (peu fiable). (2) **Rendu côté serveur :** Certaines organisations utilisent le rendu PDF côté serveur (Adobe AEM Forms, LiveCycle) pour convertir XFA en HTML dynamiquement lorsque le formulaire est accédé via navigateur web. L'utilisateur remplit un formulaire HTML, et le serveur génère le PDF XFA en arrière-plan. (3) **PDF.js (Mozilla) :** Ne supporte pas XFA du tout. (4) **Visionneuses PDF natives Chromium/Firefox :** Aucun support XFA. Conclusion : Si vous avez besoin de compatibilité navigateur, migrez de XFA vers AcroForm ou formulaires HTML."
            },
            {
                q: "Puis-je convertir XFA en Word/Excel pour édition ?",
                a: "Possible, mais avec perte. Flux de travail : (1) Aplatissez le PDF XFA (imprimez en PDF statique). (2) Utilisez Adobe Acrobat : Fichier → Exporter vers → Microsoft Word ou Microsoft Excel. Acrobat tentera l'OCR et la reconnaissance de mise en page pour reconstruire le document. (3) Éditez dans Word/Excel. (4) Reconvertissez en PDF si nécessaire (Fichier → Enregistrer sous → PDF dans Word/Excel, ou Imprimer en PDF). Mises en garde : (1) Les mises en page complexes, tableaux ou formulaires peuvent ne pas se convertir proprement. (2) Le formatage sera probablement imparfait (polices, espacement, alignement). (3) Les champs de formulaire seront perdus (ils deviennent du texte/tableaux statiques). (4) Pour les formulaires avec 50+ champs, un reformatage manuel peut être nécessaire. Alternative : Extrayez les données du formulaire XFA et reconstruisez manuellement le document dans Word/Excel depuis zéro."
            },
            {
                q: "Comment extraire les données des formulaires XFA remplis ?",
                a: "Plusieurs méthodes : **Méthode 1 (Copier-coller manuel) :** Ouvrez le formulaire XFA rempli dans Adobe Reader/Acrobat. Sélectionnez et copiez le texte de chaque champ. Collez dans Excel/base de données. Fastidieux pour les formulaires avec beaucoup de champs. **Méthode 2 (Exporter les données) :** Dans Acrobat, Fichier → Enregistrer sous autre → XML (.xml). Cela exporte les données du formulaire en format XML. Importez le XML dans Excel, Access ou une base de données. **Méthode 3 (Adobe FormsCentral / AEM Forms) :** Si le formulaire a été créé avec les systèmes de formulaires d'entreprise d'Adobe, les données peuvent être exportées en CSV, XML, ou intégrées avec des bases de données. **Méthode 4 (Outils tiers) :** Logiciels d'extraction de données PDF (PDFTables, Tabula, ABBYY FineReader) peuvent extraire les données de tableau des PDF, y compris les formulaires XFA aplatis. Pour les formulaires fiscaux canadiens (ARC) : Le fichier .tax généré par le logiciel d'impôt (comme UFile, TurboTax) contient les données extraites et peut être importé pour analyse."
            },
            {
                q: "Que faire si Adobe Reader affiche 'Les fonctionnalités étendues ne sont plus disponibles' ?",
                a: "Cet avertissement apparaît sur les formulaires XFA qui étaient 'activés pour Reader' (une fonctionnalité permettant l'enregistrement de formulaires et les signatures numériques dans Adobe Reader gratuit). Adobe a déprécié Reader Extensions en 2017. Solutions : (1) Ignorez l'avertissement si vous avez juste besoin de visualiser/imprimer le formulaire. (2) Remplissez le formulaire et imprimez en PDF (aplatissement) — cela fonctionne toujours. (3) Pour signer : Utilisez Adobe Acrobat complet (version payante) qui ne nécessite pas Reader Extensions. (4) Pour les formulaires fiscaux ARC : Utilisez un logiciel d'impôt certifié (UFile, TurboTax, StudioTax) au lieu de remplir des PDF manuellement. L'avertissement n'empêche pas d'utiliser le formulaire, mais vous ne pouvez plus enregistrer une copie remplie dans Reader (sauf si vous l'imprimez en PDF)."
            },
            {
                q: "Puis-je utiliser pdfcanada.ca pour aplatir les formulaires XFA ?",
                a: "Pas directement pour l'aplatissement spécifique XFA. Notre outil 'Rendre le PDF non modifiable' aplatit les PDF AcroForm standards (supprime les champs de formulaire modifiables). Il n'ouvrira pas les formulaires XFA car le navigateur (où nos outils fonctionnent via WebAssembly) n'a pas le moteur de rendu XFA. Flux de travail pour XFA : (1) Utilisez Adobe Reader/Acrobat pour aplatir le formulaire XFA (imprimer en PDF comme décrit dans ce guide). (2) Une fois que vous avez un PDF statique, vous pouvez utiliser nos autres outils (Compresser PDF, OCR PDF, Modifier PDF) pour le traiter davantage. Nous recommandons cette approche en deux étapes : Aplatir XFA avec Adobe → Éditer/optimiser avec pdfcanada.ca."
            },
            {
                q: "Y a-t-il des alternatives open-source à Adobe pour XFA ?",
                a: "Très limitées. Adobe XFA est un format propriétaire, et la plupart des bibliothèques PDF open-source (PDFtk, qpdf, PyPDF2, PDF.js, Poppler, MuPDF) ne le supportent explicitement pas. Support partiel : **LibreOffice Draw** peut parfois ouvrir des formulaires XFA simples, mais échoue souvent. **Apache FOP (processeur XSL-FO)** peut générer des PDF depuis XML, mais n'est pas conçu pour le rendu de formulaires XFA. **PDFBox (Apache)** a des capacités de lecture XFA expérimentales (très limitées). Conclusion : Pour une gestion XFA fiable, vous avez besoin d'Adobe Reader DC (gratuit) ou Acrobat complet. Les solutions open-source ne sont pas viables pour XFA en 2024."
            },
            {
                q: "Pourquoi Adobe déprécie XFA ? Que devrais-je utiliser à la place ?",
                a: "Adobe a officiellement déprécié XFA dans la spécification PDF 2.0 (ISO 32000-2:2020) car : (1) **Mauvaise compatibilité :** XFA ne fonctionne que dans les produits Adobe, limitant l'accessibilité. (2) **Préoccupations de sécurité :** Les formulaires basés sur XML dynamique sont plus difficiles à mettre en bac à sable/sécuriser que les PDF statiques. (3) **Charge de maintenance :** Adobe devait maintenir le moteur de rendu XFA séparément du PDF standard. (4) **De meilleures alternatives existent :** Formulaires HTML5 (basés sur le web), PDF AcroForm (largement compatibles), ou plateformes de formulaires modernes (Google Forms, Microsoft Forms, Typeform). **Recommandations d'Adobe :** (1) Pour nouveaux formulaires : Utilisez AcroForm (formulaires standards PDF 1.7) ou formulaires HTML. (2) Pour formulaires XFA existants : Migrez vers AcroForm ou formulaires web. (3) Pour collecte de données : Utilisez Adobe Experience Manager (AEM) Forms ou plateformes de formulaires tierces. Pour les Canadiens : Les agences gouvernementales (ARC, IRCC, Service Canada) éliminent progressivement XFA en faveur de formulaires web et PDF AcroForm."
            }
        ],
        whyTitle: "Pourquoi ça marche ?",
        whyDesc: "L'impression vers PDF capture l'« état visuel » du formulaire XFA, convertissant la logique XML complexe en instructions géométriques PDF simples que n'importe quel éditeur peut comprendre.",
        ctaTitle: "Besoin d'aplatir votre PDF maintenant ?",
        ctaButton: "Utiliser notre outil d'aplatissement",
        ctaSubtext: "Gratuit, sécurisé et canadien."
    }
});

export const EditXfaPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/edit-xfa-pdf"
                faqs={t.faq}
                lang={lang}
                datePublished="2024-04-01"
                dateModified="2025-12-24"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment éditer un PDF XFA?" : "How do I edit an XFA PDF?",
                    answer: lang === 'fr'
                        ? "Les PDF XFA sont des formulaires dynamiques qui ne peuvent pas être édités directement. La solution: ouvrez le PDF dans Adobe Acrobat, faites Ctrl+P, sélectionnez 'Adobe PDF' comme imprimante, et imprimez. Cela 'aplatit' le formulaire en un PDF standard éditable."
                        : "XFA PDFs are dynamic forms that can't be edited directly. The solution: open the PDF in Adobe Acrobat, press Ctrl+P, select 'Adobe PDF' as the printer, and print. This 'flattens' the form into a standard editable PDF.",
                    tool: "PDF Flattening Tool",
                    steps: lang === 'fr'
                        ? ["Ouvrez dans Adobe Acrobat", "Faites Ctrl+P pour imprimer", "Sélectionnez 'Adobe PDF' comme imprimante", "Enregistrez le nouveau fichier aplati"]
                        : ["Open in Adobe Acrobat", "Press Ctrl+P to print", "Select 'Adobe PDF' as printer", "Save the new flattened file"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Éditer PDF XFA' : 'Edit XFA PDF', path: lang === 'fr' ? '/fr/guides/edit-xfa-pdf' : '/guides/edit-xfa-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Printer size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'Éditer PDF XFA' : 'Edit XFA PDF', href: lang === 'fr' ? '/fr/guides/edit-xfa-pdf' : '/guides/edit-xfa-pdf' }
                ]}
            >
                <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
                    {/* Introduction */}
                    <section className="animate-fade-in">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
                            {t.intro}
                        </div>
                    </section>

                    {/* Sections */}
                    {t.sections.map((section: any, idx: number) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-canada-red/10 text-canada-red font-black text-2xl">
                                    {idx + 1}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm text-gray-700 dark:text-gray-300">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    {/* Explanation */}
                    <section className="bg-gray-900 text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red opacity-10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <Shield className="text-canada-red" size={32} />
                                    {t.whyTitle}
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {t.whyDesc}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Official Adobe Workaround</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Maintains perfect visual accuracy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="text-canada-red mt-1 shrink-0" size={20} />
                                        <span>Universal compatibility</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="scroll-mt-24 animate-fade-in">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
                                <HelpCircle size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">F.A.Q.</h2>
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
                        question={lang === 'fr' ? "Comment éditer un PDF XFA?" : "How do I edit an XFA PDF?"}
                        answer={lang === 'fr'
                            ? "Les PDF XFA sont des formulaires dynamiques qui ne peuvent pas être édités directement. La solution: ouvrez le PDF dans Adobe Acrobat, faites Ctrl+P, sélectionnez 'Adobe PDF' comme imprimante, et imprimez. Cela 'aplatit' le formulaire en un PDF standard éditable."
                            : "XFA PDFs are dynamic forms that can't be edited directly. The solution: open the PDF in Adobe Acrobat, press Ctrl+P, select 'Adobe PDF' as the printer, and print. This 'flattens' the form into a standard editable PDF."}
                        toolName="PDF Flattening Tool"
                        steps={lang === 'fr'
                            ? ["Ouvrez dans Adobe Acrobat", "Faites Ctrl+P pour imprimer", "Sélectionnez 'Adobe PDF' comme imprimante", "Enregistrez le nouveau fichier aplati"]
                            : ["Open in Adobe Acrobat", "Press Ctrl+P to print", "Select 'Adobe PDF' as printer", "Save the new flattened file"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/edit-xfa-pdf" category="edit" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


