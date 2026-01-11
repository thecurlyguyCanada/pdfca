'use client';

import Link from 'next/link';
import React from 'react';
import { FileImage, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';
import { ToolPromo } from '../../ToolPromo';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        seo: {
            title: "How to Convert HEIC to PDF | Secure iPhone Photo Guide | pdfcanada.ca",
            desc: `Make your iPhone photos compatible with everything. Our ${CURRENT_YEAR} tutorial shows you how to convert HEIC to PDF securely in your browser without uploading photos.`
        },
        h1: `How to Convert HEIC to PDF: The Ultimate ${CURRENT_YEAR} Guide`,
        subtitle: "The simplest, most secure way to transform your iPhone photos into professional PDF documents without leaving your browser.",

        intro: "Are you struggling with **HEIC files**? High Efficiency Image Coding (HEIC) is the standard format for photos on modern iPhones, but it frequently causes compatibility headaches. Whether you're trying to share photos with Windows users, print receipts at a local shop, or upload proof of identity to Canadian government portals like the **CRA (Canada Revenue Agency)** or **IRCC**, the PDF format is a much safer bet. Our **HEIC to PDF converter** provides a free, secure, and local-first solution to these digital hurdles.",

        sections: [
            {
                id: "what-is-heic",
                title: "What is HEIC and Why Does it Exist?",
                content: `HEIC is Apple's implementation of the HEIF (High Efficiency Image File) standard. It was designed to replace JPEG by offering better image quality at roughly half the file size.

While efficient for storage, HEIC is notorious for lack of support:
- **Windows Limitation**: Most PCs cannot open HEIC files without purchasing a $1.29 extension from the Microsoft Store.
- **Web Standards**: Many websites and upload portals (including insurance and job boards) still do not accept raw HEIC uploads.
- **Legal Stability**: PDF is an ISO-standardized format that ensures your photos look exactly the same across all devices, making it the preferred choice for official documentation.

### Technical Background
HEIC was introduced with iOS 11 in 2017 and uses HEVC (H.265) video compression technology to compress still images. This advanced compression delivers:
- **50% smaller file sizes** compared to JPEG at equivalent quality levels
- **Support for 16-bit color depth** (vs JPEG's 8-bit), capturing more color information
- **Transparency support** like PNG, but with better compression
- **Multiple images in one file** (Live Photos, burst photos, depth maps)

However, these advantages mean nothing if your recipient can't open the file. That's why **converting HEIC to PDF** is often the most pragmatic solution for compatibility.`
            },
            {
                id: "step-by-step",
                title: "How to Convert HEIC to PDF: Step-by-Step",
                content: `Converting **HEIC files to PDF** on pdfcanada.ca is remarkably simple and works on any device:

**Step 1: Access the Converter**
- Open your browser (Safari, Chrome, Firefox, Edge) on iPhone, Android, Mac, PC, or tablet
- Navigate to pdfcanada.ca's HEIC to PDF converter tool
- No account creation, no app download, no email required

**Step 2: Select Your HEIC Photos**
- Click "Choose Files" or drag-and-drop HEIC images directly into the browser
- On iPhone: Tap "Choose Files" and select from your Photo Library
- On Mac: Select from Finder, iCloud Photos, or Desktop
- On Windows: Browse from File Explorer or OneDrive
- **Multi-select supported**: Hold Ctrl (PC) or Cmd (Mac) to select multiple photos at once

**Step 3: Organize & Preview (Optional)**
- Drag thumbnails to reorder pages in your output PDF
- Remove unwanted photos by clicking the X icon on thumbnails
- Preview ensures your pages appear in the correct sequence

**Step 4: Convert & Download**
- Click "Convert to PDF" to process images locally in your browser
- Conversion happens instantly (usually under 2 seconds for 10 photos)
- Click "Download" to save your new PDF to your device
- The PDF is universally compatible with all operating systems and devices

**Bonus: Merge Multiple HEIC into One PDF**
Instead of converting each photo separately, select all HEIC files at once to create a single multi-page PDF document. Perfect for:
- Multi-page receipts from restaurant or retail businesses
- Sequential product photos for insurance claims
- Step-by-step repair documentation for warranty requests
- Real estate property photos organized room-by-room`
            },
            {
                id: "merging",
                title: "Batch Conversion: Merge Multiple HEIC into One PDF",
                content: `One of the most powerful features of our **free HEIC to PDF converter** is the ability to merge multiple photos into a single document. Instead of sending 10 separate photo files of a multi-page contract, you can:
1. **Upload all HEIC files** at once.
2. **Reorder them** using our drag-and-drop interface.
3. **Download one PDF** containing all your images. This significantly simplifies the life of whoever is receiving your documents.

### Why Merge HEIC Photos into PDF?
**Professional Presentation**
- Invoices and receipts: Combine front and back of receipts into one organized PDF
- Contracts: Merge all signed pages with attachments into a single searchable document
- Reports: Create comprehensive documentation with multiple photo evidence pages

**Simplified Sharing**
- Email one attachment instead of 20 individual files
- Upload once to government portals (CRA tax docs, IRCC immigration forms, Service Canada applications)
- Share via messaging apps without flooding the conversation with separate images

**Better Organization**
- Chronological ordering of event photos or project progress
- Logical page flow for instruction manuals or tutorials
- Easier archiving and retrieval from cloud storage or local folders

### Batch Conversion Performance
Our local processing handles large batches efficiently:
- **1-10 photos**: Instant conversion (under 1 second)
- **10-50 photos**: 2-5 seconds typical
- **50-100 photos**: 5-15 seconds on modern devices
- **100+ photos**: Depends on device RAM, but still significantly faster than cloud-based converters with upload/download time`
            },
            {
                id: "use-cases",
                title: "Common Use Cases for HEIC to PDF Conversion",
                content: `### Business & Professional
**Insurance Claims**
- Convert accident or damage photos from iPhone to PDF for insurance submission
- Many insurance portals reject HEIC but accept PDF universally
- Combine multiple claim photos into one organized document

**Real Estate**
- Property listing photos for MLS submissions
- Home inspection documentation with detailed room-by-room photos
- Rental property condition reports for landlords and tenants

**Retail & Service Industries**
- Convert scanned receipts from iPhone to PDF for accounting software
- Product catalog images for wholesale distributors
- Service completion documentation with before/after photos

### Government & Official Documents
**Canadian Government Portals**
- **CRA (Canada Revenue Agency)**: Tax document uploads require PDF or JPG, not HEIC
- **IRCC (Immigration Canada)**: Passport photos, visa applications, citizenship proof
- **Service Canada**: EI claims, CPP applications, birth certificate requests
- **Provincial Services**: Driver's license renewals, health card applications, vehicle registration

**Education**
- Assignment submissions to university portals
- Scholarship applications with ID photos
- Research documentation with field study photos

### Personal & Administrative
**Family Documentation**
- Create photo albums as PDF for easy sharing with relatives
- Preserve family history in a universally readable format
- Scrapbooks combining photos with captions

**Travel & Logistics**
- Boarding passes and travel confirmations from iPhone screenshots
- Passport and visa photos for applications
- Hotel and rental car reservation confirmations

**Medical Records**
- Prescription photos for pharmacy or insurance
- Medical test results photographed at clinics
- Symptom documentation for telemedicine appointments`
            },
            {
                id: "privacy",
                title: "Maximum Privacy for Personal Photos",
                content: `Your photo gallery contains sensitive life moments. When you use a random 'cloud' converter, your photos are uploaded to a remote server. pdfcanada.ca is different. We use **WebAssembly and local processing** to convert your images within your browser's RAM. Your photos NEVER leave your computer or smartphone, ensuring that your private data stays private.

### Why Privacy Matters for Photo Conversion
**Personal Photos Contain Sensitive Data**
- **EXIF Metadata**: Your photos contain hidden GPS coordinates, timestamps, camera details, and sometimes even your name
- **Facial Recognition**: Uploaded photos can be harvested for facial recognition databases
- **Location Privacy**: Photo metadata reveals where you live, work, and travel
- **Biographical Information**: Patterns in photos reveal lifestyle, relationships, and daily routines

**Real Privacy Risks from Cloud Converters**
When you upload HEIC files to typical "free" online converters:
- Photos are stored on their servers (sometimes indefinitely)
- Terms of service often grant them rights to use your images
- Data breaches expose your private photos to hackers
- Third-party analytics track what types of photos you convert
- Your photos may be used to train AI models without your consent

### How Local Processing Protects You
**pdfcanada.ca's Privacy Guarantees**
1. **Zero Server Upload**: Your HEIC files never leave your device—conversion happens entirely in your browser's JavaScript engine
2. **No Logging**: We don't track, log, or record which files you convert
3. **No Analytics on File Content**: We measure page loads, not photo content
4. **Automatic Data Deletion**: Close the browser tab and all file data is immediately purged from RAM
5. **Open Source Components**: Our HEIC decoder uses publicly auditable open-source libraries

**Industry-Specific Privacy Requirements**
- **PIPEDA Compliance (Canada)**: Local processing ensures automatic compliance with Canadian privacy laws
- **GDPR Compliance (EU)**: No data export means no GDPR consent requirements
- **HIPAA Considerations (Healthcare)**: Medical photos converted locally maintain patient privacy
- **Attorney-Client Privilege**: Law firms can convert evidence photos without third-party exposure

### Comparing Privacy: Cloud vs Local
| Feature | Cloud Converter | pdfcanada.ca (Local) |
|---------|----------------|----------------------|
| Photos uploaded to server | Yes | Never |
| Data retention | Days to forever | 0 seconds (RAM only) |
| Third-party access risk | High | None |
| Requires trust in company | Yes | No (verifiable in browser) |
| PIPEDA compliant by default | No | Yes |
| Works offline | No | Yes (after first page load) |`
            },
            {
                id: "quality",
                title: "Image Quality & Resolution Preservation",
                content: `### Will Converting HEIC to PDF Reduce Quality?
**Short answer: No**, if done correctly. pdfcanada.ca preserves your original HEIC image resolution and quality during PDF conversion.

**Technical Details**
- **No Re-Compression**: We decode HEIC and embed the full-resolution image data in PDF format
- **Lossless Conversion**: Original pixel data is preserved without quality degradation
- **Resolution Maintained**: 4032x3024 photo (12 MP iPhone) stays 4032x3024 in PDF
- **Color Accuracy**: Wide color gamut (P3) from iPhone photos is preserved
- **Metadata Retention**: EXIF orientation tags ensure photos display right-side-up

### Understanding PDF Image Embedding
When you **convert HEIC to PDF**, the image is embedded in one of these ways:
- **Full Resolution**: Best for printing, archiving, and professional use (default on pdfcanada.ca)
- **Optimized Resolution**: Slightly compressed to reduce file size while maintaining visual quality
- **Custom DPI**: Specify output resolution (300 DPI for print, 150 DPI for screen)

### File Size Management
HEIC is incredibly space-efficient (often 50% smaller than JPEG). When converted to PDF:
- **Single HEIC (3 MB) → PDF**: Approximately 4-6 MB (slight size increase due to PDF overhead)
- **Ten HEIC (30 MB) → Merged PDF**: Approximately 40-50 MB total

**Reducing PDF File Size After Conversion**
If your PDF is too large for email attachments or upload portals:
1. Use our PDF compression tool after conversion
2. Pre-resize HEIC images before conversion (if you don't need full 12 MP resolution)
3. Convert to JPEG first (lossy compression) then to PDF for smallest files

### Print Quality from HEIC-to-PDF
**Recommended Resolutions**
- **Professional printing** (brochures, posters): Keep full resolution (300 DPI+)
- **Home printing**: 150-200 DPI is sufficient
- **Screen viewing only**: 72-96 DPI works fine, significantly reduces file size

**iPhone Photo Resolutions**
- iPhone 14/15 Pro: 48 MP (8064x6048) - exceptional print quality up to poster size
- iPhone 12/13/14: 12 MP (4032x3024) - excellent up to 11x14 inch prints
- iPhone 11: 12 MP - same print quality as above
- Older iPhones: 8 MP - suitable for 5x7 or 8x10 prints`
            },
            {
                id: "compatibility",
                title: "HEIC Compatibility Issues & PDF as the Solution",
                content: `### Why HEIC Compatibility is Still a Problem in ${CURRENT_YEAR}
Despite being introduced in 2017, HEIC remains poorly supported across platforms:

**Operating System Support**
- **Windows 10/11**: Requires paid HEIF extension ($1.29) OR free "HEVC Video Extensions from Device Manufacturer" (hard to find)
- **Windows 7/8**: No support at all, requires third-party converters
- **macOS**: Full support (since High Sierra 2017)
- **Android**: Limited support (Android 9+ can view, but not edit or share easily)
- **Linux**: Requires command-line tools (not user-friendly)

**Web Browser Support**
- **Safari**: Full support (Apple's browser)
- **Chrome**: No native support (requires conversion)
- **Firefox**: No native support
- **Edge**: No native support on Windows without system extension

**Software Compatibility**
- **Microsoft Office**: Cannot insert HEIC images into Word/PowerPoint/Excel
- **Adobe Photoshop**: Requires plugin or conversion (not included in base subscription)
- **Email Clients**: Outlook, Gmail, Thunderbird display HEIC as unrecognized attachments
- **Social Media**: Instagram, Facebook, Twitter require conversion before upload from desktop
- **Cloud Storage**: Google Drive preview works, Dropbox preview works, but downloading often fails on Windows

### PDF: The Universal Solution
**Why PDF Solves HEIC Compatibility**
- **Universally Readable**: Every device and OS since 1990s can open PDFs
- **Consistent Rendering**: Photos look identical on iPhone, Windows PC, Android, Mac, Linux
- **Professional Standard**: Accepted by all government portals, job applications, and official submissions
- **Print-Ready**: PDF ensures proper sizing and margins for physical printing
- **Archival Stability**: ISO-standardized format ensures accessibility for decades

### Real-World Compatibility Scenarios
**Scenario 1: Sharing with Windows Users**
- ❌ Send HEIC: Recipient can't open, asks you to resend in another format
- ✅ Send PDF: Opens immediately in Edge, Chrome, Adobe Reader—no hassle

**Scenario 2: Government Portal Uploads (CRA, IRCC, Service Canada)**
- ❌ Upload HEIC: "Unsupported file format" error
- ✅ Upload PDF: Accepted instantly, processes without issues

**Scenario 3: Job Applications**
- ❌ Attach resume with HEIC photo: Hiring manager can't see your headshot
- ✅ Attach resume with PDF photo: Displays perfectly on all devices

**Scenario 4: Printing at Staples/Office Depot**
- ❌ Bring HEIC on USB: Store computers can't read the file
- ✅ Bring PDF: Prints immediately without format conversion`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting HEIC to PDF Conversion",
                content: `### Common Issues & Solutions

**Problem: HEIC Files Won't Upload**
- **Check file extension**: Ensure files are actually .heic (not .jpg renamed)
- **Browser compatibility**: Use latest Chrome, Safari, Firefox, or Edge
- **File corruption**: Try opening HEIC in Photos app first to verify it's not corrupted
- **Size limits**: Very large files (50+ MB) may timeout—resize or compress first

**Problem: Converted PDF is Blank or Shows Errors**
- **HEIC codec issue**: Some rare HEIC variants use codecs our decoder doesn't support—try converting to JPG first on iPhone
- **Browser cache**: Clear cache and reload the page
- **Memory limits**: Close other browser tabs if converting many large photos
- **Try different browser**: Switch from Chrome to Safari or vice versa

**Problem: Photos Appear Rotated in PDF**
- **EXIF orientation**: Our tool reads EXIF rotation data, but if it's missing, photos may display sideways
- **Solution**: Rotate photos in iPhone Photos app before conversion, OR use our PDF rotation tool after conversion

**Problem: File Size Too Large**
- **Full resolution embedding**: By default, we preserve 100% quality
- **Solution 1**: Use our PDF compression tool after conversion
- **Solution 2**: Pre-resize photos on iPhone before exporting (use "Medium" or "Small" size in share options)
- **Solution 3**: Convert only the photos you need, not entire camera roll

**Problem: Colors Look Different After Conversion**
- **Color space conversion**: HEIC uses wide P3 color gamut, PDF may convert to sRGB
- **This is normal**: Most devices display sRGB, so colors may appear slightly less vibrant
- **No solution needed**: For professional printing, use original HEIC files

**Problem: Conversion Fails on Mobile**
- **RAM limitations**: Older phones struggle with large batches
- **Solution**: Convert 5-10 photos at a time instead of 50+
- **Battery saver mode**: Disable power-saving modes during conversion
- **Close background apps**: Free up memory by closing other apps`
            }
        ],

        faq: [
            {
                q: "How to convert HEIC to PDF on iPhone without an app?",
                a: "You don't need a dedicated app. Open Safari on your iPhone, go to pdfcanada.ca, select your photos from the library, and we will generate a PDF 'on the fly' that you can save to your Files or send via email."
            },
            {
                q: "Is converting to PDF better than converting to JPG?",
                a: "For sharing multiple photos or official documents, PDF is superior. It allows for multi-page support, smaller collective file sizes for documentation, and better printing control compared to raw JPEGs. PDF also ensures consistent viewing across all devices."
            },
            {
                q: "Does pdfcanada.ca store my photos?",
                a: "No. Unlike other websites, we have zero server-side storage for files. The conversion happens entirely on your device's CPU. As soon as you close the tab, all traces of your images are gone."
            },
            {
                q: "Can I convert large batches of 50+ photos?",
                a: "Yes. Because the processing is local, the only limit is your device's memory. Desktop users can easily convert massive batches in seconds. On mobile, process 10-20 photos at a time for best performance."
            },
            {
                q: "Why can't Windows open my HEIC files?",
                a: "Windows doesn't include HEIC codec support by default. Microsoft requires a paid extension ($1.29) or a free but hard-to-find codec pack. Converting HEIC to PDF eliminates this problem entirely—PDFs open on every Windows version since Windows 95."
            },
            {
                q: "Will converting HEIC to PDF reduce image quality?",
                a: "No. We preserve your original resolution and quality. A 12 megapixel HEIC photo remains 12 megapixels in PDF format. Colors, sharpness, and detail are maintained perfectly."
            },
            {
                q: "Can I merge multiple HEIC files into one PDF?",
                a: "Yes! Select all your HEIC photos at once, and we'll create a single multi-page PDF. Perfect for combining receipt photos, multi-page documents, or sequential product images into one organized file."
            },
            {
                q: "How do I convert HEIC to PDF on Mac?",
                a: "Open any browser on your Mac (Safari, Chrome, Firefox), go to pdfcanada.ca, drag-and-drop your HEIC files, and download the PDF. No software installation required—works directly in your browser."
            },
            {
                q: "Can I use this converter on Android?",
                a: "Absolutely. While HEIC is an Apple format, our converter works on any device with a modern browser. Android users can convert HEIC files received from iPhone users into universally compatible PDFs."
            },
            {
                q: "Are there file size limits for HEIC conversion?",
                a: "No hard limits. Browser memory is the only constraint. Typical HEIC files (2-5 MB each) process instantly. Very large RAW-like HEIC files (20+ MB) may take a few seconds but still work."
            },
            {
                q: "Can I convert Live Photos to PDF?",
                a: "Yes, but only the still image portion. Live Photos are HEIC files with embedded video—our converter extracts and converts the photo frame to PDF. The motion/video component isn't included."
            },
            {
                q: "Why is my converted PDF larger than the original HEIC?",
                a: "HEIC uses advanced H.265 video compression, making it incredibly space-efficient. PDF uses different compression (usually JPEG), which is slightly less efficient. A 3 MB HEIC might become a 5 MB PDF, but it'll be universally compatible."
            },
            {
                q: "Can I password-protect my HEIC-to-PDF conversion?",
                a: "After converting HEIC to PDF, use our separate PDF encryption tool to add password protection. This ensures sensitive photos (ID documents, medical records) remain secure when shared."
            },
            {
                q: "How to convert HEIC to PDF on Windows 10/11?",
                a: "Open Chrome, Edge, or Firefox on your Windows PC, navigate to pdfcanada.ca, upload your HEIC files (from USB, OneDrive, or local folders), and download the converted PDF. No Windows extensions needed."
            },
            {
                q: "Can I convert HEIC photos from iCloud to PDF?",
                a: "Yes. Download HEIC files from iCloud.com to your computer or use iCloud Photos sync on Mac/iPhone, then convert them using our tool. The files remain in HEIC format when downloaded from iCloud."
            },
            {
                q: "Does conversion remove EXIF metadata (GPS location)?",
                a: "Basic conversion preserves EXIF data including GPS coordinates. If you want to remove location data for privacy, use a separate EXIF removal tool before conversion, or use our tool and then strip metadata from the PDF afterward."
            },
            {
                q: "Can I print PDFs converted from HEIC?",
                a: "Yes! Converted PDFs maintain full resolution and print beautifully. 12 MP iPhone photos print excellently up to 11x14 inches. For larger prints, use original HEIC files or newer iPhones with 48 MP cameras."
            },
            {
                q: "Why do my photos appear rotated after conversion?",
                a: "HEIC files store rotation info in EXIF metadata. If this data is missing or corrupted, photos may display sideways. Solution: rotate photos in iPhone Photos app before conversion, or use our PDF rotation tool after."
            },
            {
                q: "Can I convert HEIC to PDF for free permanently?",
                a: "Yes. pdfcanada.ca is completely free forever—no trials, no subscriptions, no hidden fees. Convert unlimited HEIC files to PDF anytime without creating an account or paying anything."
            },
            {
                q: "Does this work offline after the first load?",
                a: "Yes! Once you've loaded our converter page, it works offline thanks to browser caching. Perfect for converting photos on planes, in areas with poor internet, or when privacy is critical."
            },
            {
                q: "Can I convert HEIC screenshots to PDF?",
                a: "Absolutely. iPhone screenshots saved as HEIC convert perfectly to PDF. Common for sharing app screens, error messages, or confirmations that need to be emailed or uploaded to support portals."
            },
            {
                q: "What's the fastest way to convert HEIC to PDF?",
                a: "Drag-and-drop all your HEIC files directly into our converter window (instead of clicking 'Choose Files'). The conversion starts immediately and processes in under 2 seconds for typical batches."
            },
            {
                q: "Can I reorder pages before converting to PDF?",
                a: "Yes! After uploading HEIC files, drag the thumbnails to rearrange page order. This ensures your final PDF has pages in the correct sequence—perfect for multi-page documents or sequential photos."
            },
            {
                q: "Will this work with HEIC files from old iPhones?",
                a: "Yes. All HEIC files from iOS 11+ (iPhone 7 and newer) convert perfectly. Older iPhones used JPEG by default, so you likely don't have HEIC files from pre-2017 devices."
            },
            {
                q: "Can I convert HEIC to searchable PDF (OCR)?",
                a: "Our basic converter creates image-based PDFs. For searchable text, convert HEIC to PDF first, then use a separate OCR tool to add text recognition to the PDF."
            }
        ],

        ctaTitle: "Ready to Fix Your Compatibility Issues?",
        ctaButton: "Start HEIC to PDF Conversion",
        ctaSubtext: "100% Free. No Signup. Proudly Canadian and Local-First.",
        quickAnswer: {
            question: "How do I convert HEIC to PDF on iPhone?",
            answer: "Open Safari on your iPhone, go to pdfcanada.ca, select your HEIC photos from your library, and we'll generate a PDF on the fly. You can save it to Files or send via email. No app needed.",
            tool: "HEIC to PDF Converter",
            steps: ["Select your HEIC photos", "Organize the pages", "Download your PDF"]
        }
    },
    fr: {
        seo: {
            title: `Convertir HEIC en PDF | Guide Photos iPhone ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Rendez vos photos iPhone compatibles partout. Notre tutoriel ${CURRENT_YEAR} vous montre comment convertir HEIC en PDF en toute sécurité sans jamais télécharger vos photos.`
        },
        h1: "Comment Convertir HEIC en PDF : Le Guide Complet",
        subtitle: "Transformez vos photos iPhone en documents PDF universellement compatibles sans téléchargement ni perte de qualité.",

        intro: "Vous avez déjà essayé d'ouvrir une photo de votre iPhone sur un PC Windows pour découvrir qu'elle est dans un format **.heic** étrange que rien ne peut lire ? C'est frustrant. Notre **convertisseur HEIC en PDF** résout ce problème en transformant vos photos Apple en documents PDF universellement compatibles. Le meilleur ? Tout se passe localement dans votre navigateur, donc vos photos de famille ne sont jamais téléchargées sur un serveur aléatoire.",

        sections: [
            {
                id: "what-is-heic",
                title: "Qu'est-ce que HEIC et Pourquoi Apple l'Utilise",
                content: `HEIC (High Efficiency Image Container) est le format d'image par défaut d'Apple depuis iOS 11. Il offre une meilleure compression que JPEG, ce qui signifie que vos photos occupent moins d'espace de stockage tout en conservant une qualité élevée.

Le problème ? Windows, Android et la plupart des navigateurs web ne le supportent pas nativement. C'est pourquoi la conversion en **PDF** (ou JPEG) est souvent nécessaire pour le partage.`
            },
            {
                id: "how-it-works",
                title: "Comment ça Marche : Simple et Rapide",
                content: `Notre convertisseur HEIC en PDF est conçu pour être intuitif et efficace :
1. **Sélectionnez Vos Photos** : Téléchargez un ou plusieurs fichiers .heic depuis votre iPhone, iCloud ou ordinateur.
2. **Conversion Automatique** : Notre outil décode le format HEIC et génère un PDF de haute qualité.
3. **Téléchargez** : Enregistrez votre nouveau PDF, prêt à être partagé avec n'importe qui sur n'importe quel appareil.`
            },
            {
                id: "privacy",
                title: "Pourquoi la Conversion Locale est Importante",
                content: `Les photos contiennent souvent des informations sensibles : visages de famille, documents personnels, captures d'écran de comptes bancaires. Les télécharger sur un site de conversion aléatoire est un risque de confidentialité.
 
**pdfcanada.ca** traite vos fichiers HEIC entièrement dans votre navigateur. Vos photos ne quittent **jamais** votre appareil.`
            }
        ],

        faq: [
            {
                q: "La qualité de l'image sera-t-elle réduite ?",
                a: "Non. Nous conservons la résolution et la qualité d'image d'origine lors de la conversion en PDF."
            },
            {
                q: "Puis-je convertir plusieurs fichiers HEIC à la fois ?",
                a: "Oui ! Vous pouvez sélectionner plusieurs photos et elles seront toutes converties en un seul document PDF multi-pages."
            },
            {
                q: "Cela fonctionne-t-il sur Android ?",
                a: "Absolument. Bien que HEIC soit un format Apple, notre convertisseur fonctionne sur n'importe quel navigateur moderne, y compris Chrome sur Android."
            }
        ],

        ctaTitle: "Prêt à Convertir Vos Photos ?",
        ctaButton: "Convertir HEIC en PDF",
        ctaSubtext: "Gratuit, Rapide et 100% Privé.",
        quickAnswer: {
            question: "Comment convertir HEIC en PDF sur iPhone?",
            answer: "Ouvrez Safari sur votre iPhone, allez sur pdfcanada.ca, sélectionnez vos photos HEIC depuis votre bibliothèque, et nous générerons un PDF automatiquement. Vous pouvez l'enregistrer dans Fichiers ou l'envoyer par email. Pas d'application requise.",
            tool: "HEIC to PDF Converter",
            steps: ["Sélectionnez vos photos HEIC", "Organisez les pages", "Téléchargez votre PDF"]
        }
    },
    pt: {
        seo: {
            title: `Converter HEIC em PDF | Guia de Fotos iPhone ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Torne suas fotos do iPhone compatíveis em qualquer lugar. Nosso tutorial de ${CURRENT_YEAR} mostra como converter HEIC para PDF com segurança no navegador sem enviar fotos.`
        },
        h1: "Como Converter HEIC para PDF: O Guia Completo",
        subtitle: "Transforme suas fotos do iPhone em documentos PDF universalmente compatíveis sem downloads de app ou perda de qualidade.",

        intro: "Você já tentou abrir uma foto do seu iPhone num PC Windows e descobriu que ela está num formato **.heic** estranho que nada consegue ler? É frustrante. Nosso **conversor HEIC para PDF** resolve esse problema transformando suas fotos Apple em documentos PDF compatíveis. O melhor? Tudo acontece localmente no seu navegador, então suas fotos de família nunca são enviadas para um servidor aleatório.",

        sections: [
            {
                id: "what-is-heic",
                title: "O que é HEIC e Por que a Apple o Usa",
                content: `HEIC (High Efficiency Image Container) é o formato de imagem padrão da Apple desde o iOS 11. Ele oferece melhor compressão que o JPEG, o que significa que suas fotos ocupam menos espaço de armazenamento mantendo alta qualidade.

O problema? Windows, Android e a maioria dos navegadores web não o suportam nativamente. É por isso que a conversão para **PDF** (ou JPEG) é frequentemente necessária para compartilhamento.`
            },
            {
                id: "how-it-works",
                title: "Como Funciona: Simples e Rápido",
                content: `Nosso conversor HEIC para PDF foi projetado para ser intuitivo e eficiente:
1. **Selecione Suas Fotos**: Envie um ou vários arquivos .heic do seu iPhone, iCloud ou computador.
2. **Conversão Automática**: Nossa ferramenta decodifica o formato HEIC e gera um PDF de alta qualidade.
3. **Baixe**: Salve seu novo PDF, pronto para ser compartilhado com qualquer pessoa em qualquer dispositivo.`
            },
            {
                id: "privacy",
                title: "Por que a Conversão Local é Importante",
                content: `Fotos contêm frequentemente informações sensíveis: rostos de familiares, documentos pessoais, prints de contas bancárias. Enviá-las para um site de conversão aleatório é um risco de privacidade.
 
**pdfcanada.ca** processa seus arquivos HEIC inteiramente no seu navegador. Suas fotos **nunca** saem do seu dispositivo.`
            }
        ],

        faq: [
            {
                q: "A qualidade da imagem será reduzida?",
                a: "Não. Mantemos a resolução e a qualidade da imagem original durante a conversão para PDF."
            },
            {
                q: "Posso converter vários arquivos HEIC de uma vez?",
                a: "Sim! Você pode selecionar várias fotos e todas serão convertidas em um único documento PDF de várias páginas."
            },
            {
                q: "Funciona no Android?",
                a: "Absolutamente. Embora o HEIC seja um formato Apple, nosso conversor funciona em qualquer navegador moderno, incluindo Chrome no Android."
            }
        ],

        ctaTitle: "Pronto para Converter Suas Fotos?",
        ctaButton: "Converter HEIC para PDF",
        ctaSubtext: "Grátis, Rápido e 100% Privado.",
        quickAnswer: {
            question: "Como converter HEIC para PDF no iPhone?",
            answer: "Abra o Safari no iPhone, vá para pdfcanada.ca, selecione suas fotos HEIC da biblioteca e geraremos um PDF automaticamente. Você pode salvar em Arquivos ou enviar por e-mail. Sem apps.",
            tool: "Conversor HEIC para PDF",
            steps: ["Selecione suas fotos HEIC", "Organize as páginas", "Baixe seu PDF"]
        }
    }

});

export const HeicToPdfGuide: React.FC<GuideProps> = ({ lang }) => {

    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t.h1,
        "description": t.seo.desc,
        "step": [
            { "@type": "HowToStep", "position": 1, "name": "Select HEIC Photos", "text": "Pick your iPhone .heic images from your device or photo library." },
            { "@type": "HowToStep", "position": 2, "name": "Organize Pages", "text": "Arrange the thumbnails in the order you want them to appear in the PDF document." },
            { "@type": "HowToStep", "position": 3, "name": "Generate PDF", "text": "Click the convert button to process the images locally and download your single PDF." }
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/heic-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={t.quickAnswer}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'HEIC en PDF' : (lang === 'pt' ? 'HEIC para PDF' : 'HEIC to PDF'), path: lang === 'fr' ? '/fr/guides/heic-to-pdf' : (lang === 'pt' ? '/pt/guides/heic-to-pdf' : '/guides/heic-to-pdf') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileImage size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'HEIC en PDF' : (lang === 'pt' ? 'HEIC para PDF' : 'HEIC to PDF'), href: '#' }
                ]}
            >
                <div className="w-full space-y-8 sm:space-y-12 md:space-y-16">
                    <ToolPromo tool="heic-to-pdf" lang={lang} />
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 sm:mb-14 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id}>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    {typeof section.content === 'string' ? (
                                        <MarkdownContent content={section.content} />
                                    ) : (
                                        section.content
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Features Tiles */}
                    <div className="grid md:grid-cols-3 gap-8 my-20">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Lock className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">100% Private</h3>
                            <p className="text-gray-500">Local browser processing. Your photos never leave your device.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Zap className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Instant Speed</h3>
                            <p className="text-gray-500">No server wait times. Conversion happens in milliseconds.</p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Smartphone className="text-canada-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                            <p className="text-gray-500">Designed to work perfectly on iPhone and Android browsers.</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="my-16 sm:my-18 md:my-20">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-gray-900 dark:text-white">Common Questions</h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5 text-canada-red" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-18 md:mt-20 bg-canada-red p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/heic-to-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={t.quickAnswer.question}
                        answer={t.quickAnswer.answer}
                        toolName={t.quickAnswer.tool}
                        steps={t.quickAnswer.steps}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/heic-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
