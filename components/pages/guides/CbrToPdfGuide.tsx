'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, FileText, Download, Shield, Zap, CheckCircle, Info, ArrowRight, MousePointer2 } from 'lucide-react';
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
            title: "How to Convert CBR to PDF | Free Comic Book Conversion Guide | pdfcanada.ca",
            desc: `Read your comics on any device. Our ${CURRENT_YEAR} guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device.`
        },
        h1: "How to Convert CBR/CBZ to PDF",
        subtitle: "The definitive guide to taking your digital comics anywhere.",
        intro: (
            <>
                If you are a digital comic enthusiast, you have likely encountered <strong>CBR</strong> and <strong>CBZ</strong> files. While these formats are perfect for dedicated comic readers, they can be difficult to open on standard devices like tablets or work computers.
                <br /><br />
                The solution? <strong>Convert CBR to PDF</strong>. This guide will show you how to transform your comic archives into universal PDF documents without compromising your privacy or downloading bulky software.
            </>
        ),
        sections: [
            {
                id: "what-is-cbr",
                title: "What are CBR and CBZ files?",
                content: (
                    <>
                        <p className="mb-4">
                            Before converting, it is helpful to understand what these files actually are. They are essentially collections of images (usually JPG or PNG) bundled into an archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">These are .RAR archives renamed to .CBR. They require specific software to unpack.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">These are .ZIP archives renamed to .CBZ. They are more common and easier to handle natively.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Why convert Comics to PDF?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Universal Compatibility:</strong> PDFs open on any device—Phone, Kindle, Mac, or PC—without extra apps.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Easier Sharing:</strong> Sending a PDF is simpler than explaining how to install a CBR reader to your friends.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Searchable Library:</strong> PDFs are easier to organize and index in standard document management systems.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Step-by-Step: Converting to PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Using our local tool is safer than &quot;cloud&quot; converters because your comics never leave your computer. This is important as comic files are often quite large.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Select Your Comic</h4>
                                    <p>Go to our <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">CBR to PDF Tool</Link> and choose your file.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Wait for Extraction</h4>
                                    <p>Our tool will unpack the images (JPG/PNG) directly in your browser memory. This usually takes just a few seconds.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Download the PDF</h4>
                                    <p>Once compiled, click the download button. You now have a high-quality PDF version of your comic!</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "optimization",
                title: "Optimization Tips",
                content: (
                    <>
                        <p className="mb-4">
                            Comic files can result in very large PDFs. Here is how to keep them manageable:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Resolution:</strong> If your original CBR images are 4K, your PDF will be massive. Standard 1080p width is usually plenty for reading.</li>
                            <li><strong>Local Security:</strong> Always use a tool that processes locally (like <strong>pdfcanada.ca</strong>) to avoid data harvesting and long upload queues.</li>
                        </ul>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Is there a file size limit?",
                a: "Since the conversion happens on your own hardware, we do not enforce arbitrary server limits. If your browser can handle the memory, we can convert it. Typical comic archives (50-200 MB) convert instantly. For very large archives (500+ MB), your browser's available RAM is the only constraint. Unlike cloud converters that limit uploads to 10-100 MB, our local processing handles files as large as your system allows."
            },
            {
                q: "Will the image quality drop?",
                a: "No. Our tool embeds the original images from the archive directly into the PDF without re-compressing them, preserving the original artwork quality. If your CBR contains high-resolution JPEGs scanned at 300 DPI, your PDF will maintain that exact quality. We don't apply lossy compression or downscale images — what goes in is what comes out."
            },
            {
                q: "Does this work for manga?",
                a: "Yes! The tool extracts images in the order they appear in the archive, so whether it's a Western comic (left-to-right) or Manga (right-to-left), the page flow is preserved. The resulting PDF will maintain the same reading order as the original CBR/CBZ. For right-to-left manga, you may want to enable right-to-left reading mode in your PDF reader (Adobe Acrobat, macOS Preview support this)."
            },
            {
                q: "Can I convert CBR to PDF on a Mac?",
                a: "Absolutely! Our web-based converter works perfectly on macOS (Safari, Chrome, Firefox, Edge). Since it's browser-based via WebAssembly, it runs identically on Mac, Windows, Linux, and even Chromebooks. No need to download The Unarchiver or install separate software — just open the page and convert. Your files never leave your Mac."
            },
            {
                q: "What's the difference between CBR and CBZ?",
                a: "CBR files are RAR archives (compressed with the RAR algorithm) renamed with .cbr extension. CBZ files are ZIP archives renamed with .cbz extension. CBZ is more common because ZIP is an open standard supported natively by all operating systems. CBR requires RAR extraction libraries. Both contain the same thing: a folder of comic page images (JPG/PNG) in reading order. Our converter handles both formats seamlessly."
            },
            {
                q: "Can I convert multiple CBR files at once?",
                a: "Currently, our web converter processes one file at a time to ensure optimal performance and avoid browser memory issues. For batch conversion of 10+ comics, consider using command-line tools like Calibre's ebook-convert or creating a simple script with ImageMagick. However, most users find our single-file approach fast enough (5-30 seconds per comic) for typical collections."
            },
            {
                q: "Why convert to PDF instead of keeping CBR/CBZ?",
                a: "PDFs open universally — on Kindle, iPad, Android tablets, work computers — without installing dedicated comic readers like CDisplayEx, YACReader, or Chunky. PDFs integrate with standard document managers (DEVONthink, Zotero, Calibre). They're easier to share (everyone knows how to open a PDF). PDFs work offline without specialized apps. And for archival/backup, PDFs are more future-proof than CBR/CBZ."
            },
            {
                q: "Are my comics private? Do they get uploaded?",
                a: "Your comics are 100% private. Unlike cloud converters (CloudConvert, Zamzar, Convertio) that upload your files to servers, pdfcanada.ca processes everything locally in your browser via WebAssembly. Your comic files never leave your device. No data transmission. No server access. This is crucial for privacy — many comics are copyrighted, and uploading them to third-party servers may violate terms of use. With local processing, your collection stays yours."
            },
            {
                q: "Can I convert CB7 or CBT files?",
                a: "Our current tool supports CBR (RAR) and CBZ (ZIP), which account for 95%+ of digital comics. CB7 (7-Zip archives) and CBT (TAR archives) are less common. If you have CB7 files, first extract them with 7-Zip and re-archive as CBZ (ZIP format), then convert. For CBT, extract with any TAR-compatible tool and re-package as CBZ. Most comic distribution sites use CBZ/CBR exclusively."
            },
            {
                q: "Will the PDF be larger than the original CBR/CBZ?",
                a: "Generally, yes, but only slightly (5-15% larger). CBR/CBZ files use RAR/ZIP compression on the image files. PDFs also compress embedded images, but add overhead for PDF structure (page objects, metadata, cross-reference tables). A 150 MB CBZ might become a 165 MB PDF. However, PDFs are often more efficient for sharing (single file vs archive extraction) and display faster on most readers."
            },
            {
                q: "Can I edit the PDF after conversion (add bookmarks, metadata)?",
                a: "Yes! After conversion, you can edit the PDF with tools like Adobe Acrobat Pro, PDF Expert (Mac), or Foxit. Add bookmarks for chapters/issues, embed metadata (title, author, publisher, issue number), optimize for web viewing, or add security settings. Our converter creates a standard, unprotected PDF that's fully editable."
            },
            {
                q: "Does this work for webcomics downloaded as ZIP files?",
                a: "Absolutely! If you've downloaded a webcomic as a ZIP archive (collection of PNG/JPG images), just rename the .zip file to .cbz and convert. The converter will extract images in alphabetical/numerical order and compile them into a PDF. Make sure the images are named sequentially (page001.jpg, page002.jpg, etc.) for correct reading order."
            },
            {
                q: "Can I convert scanlations or fan translations?",
                a: "Technically, yes — our converter doesn't distinguish between official releases and fan-made content. However, be aware of legal and ethical considerations. Scanlations of copyrighted manga may violate copyright law (even in Canada). Converting and sharing them could infringe on publishers' rights. Support official releases when possible (Viz, Kodansha, Yen Press offer legal digital manga)."
            },
            {
                q: "What resolution should my images be for best quality?",
                a: "For reading on tablets/e-readers: 1200-1600px width is ideal (balances quality and file size). For printing: 2400-3000px width at 300 DPI. For smartphones: 800-1000px width suffices. Most commercially scanned comics are 1400-2000px width. Higher resolution (4K+) results in massive PDFs with minimal visual improvement on screens. Our converter preserves whatever resolution is in your CBR/CBZ — we don't upscale or downscale."
            },
            {
                q: "Can I password-protect the PDF?",
                a: "Our converter creates unprotected PDFs. To add password protection, use a PDF security tool after conversion: Adobe Acrobat (Protect → Encrypt with Password), PDF Expert (macOS), or online tools like Smallpdf (though uploading comics to third-party sites defeats the privacy benefit). Alternatively, encrypt the PDF file itself with system-level encryption (FileVault on Mac, BitLocker on Windows)."
            },
            {
                q: "Does the PDF maintain double-page spreads?",
                a: "If your CBR/CBZ contains double-page spreads as single wide images (common in manga volumes), those will be preserved as-is in the PDF. Each image becomes one PDF page. However, if your spreads are split into two separate images (left half, right half), they'll appear as sequential single pages in the PDF. To fix this, pre-process images with tools like ComicRack or manually combine spreads before archiving."
            },
            {
                q: "Can I convert Marvel/DC comics CBR files?",
                a: "Yes, our tool converts any CBR/CBZ file regardless of content. However, be mindful of copyright. Officially purchased digital comics (from Comixology, Marvel Unlimited) are usually DRM-protected and not distributed as CBR/CBZ. If you have legally purchased CBR files or are converting personal scans for backup, you're within fair use. Sharing or distributing copyrighted comics violates copyright law in Canada and most countries."
            },
            {
                q: "What's the maximum number of pages I can convert?",
                a: "There's no hard page limit. We've successfully tested conversions with 1000+ page archives (entire manga volumes, comic compendiums). The limiting factor is your browser's memory. A typical comic (20-30 pages) uses ~50-100 MB RAM during conversion. A 200-page graphic novel might use 500 MB. Modern computers (8+ GB RAM) can handle almost any comic archive. If you encounter crashes, close other browser tabs/apps to free memory."
            },
            {
                q: "Can I use this on my iPhone or iPad?",
                a: "Yes! Our converter works in Safari on iOS/iPadOS. However, mobile browsers have stricter memory limits than desktops. For typical comics (50-150 MB, 20-40 pages), it works fine on recent iPads/iPhones (iOS 14+). Very large archives (500+ MB) may crash due to memory constraints. For heavy usage, we recommend converting on a computer, then transferring PDFs to your iPad via AirDrop, Files app, or cloud storage."
            },
            {
                q: "Do the images stay in the correct order?",
                a: "Yes. Comic archives store images with sequential filenames (001.jpg, 002.jpg, etc.). Our converter extracts and sorts them alphanumerically, ensuring correct reading order. If your archive has non-sequential names (IMG_5432.jpg, IMG_5439.jpg), the order may be incorrect. In that case, use comic management software (Calibre, ComicRack) to reorder pages before conversion."
            },
            {
                q: "Can I convert protected RAR files (password-protected CBR)?",
                a: "If your CBR file is password-protected, you'll need to extract and re-archive it without a password first. Use WinRAR, 7-Zip, or The Unarchiver (Mac), enter the password to extract images, then re-package as an unprotected CBZ (ZIP archive). Our converter cannot decrypt password-protected archives — the decryption happens at the browser level, which doesn't support RAR passwords."
            },
            {
                q: "Will this work with Dark Horse, Image, or indie comics?",
                a: "Yes! The format is universal. Whether it's Marvel, DC, Dark Horse (Hellboy, BPRD), Image (The Walking Dead, Saga), or indie webcomics, if it's distributed as CBR/CBZ, our converter handles it. The publisher doesn't matter — only the archive format. We've tested with comics from ComiXology backups, scan repositories, and fan-translated manga."
            },
            {
                q: "Can I reduce the PDF file size after conversion?",
                a: "Yes. If your resulting PDF is too large, use compression tools: Adobe Acrobat (Save As Optimized PDF), Smallpdf, or our Compress PDF tool (pdfcanada.ca/compress-pdf). These re-compress JPEG images at lower quality (80-90% is usually imperceptible), remove unnecessary metadata, and optimize structure. You can typically reduce file size by 30-50% with minimal quality loss."
            },
            {
                q: "How long does conversion take?",
                a: "For typical comics (50-200 MB, 20-40 pages): 5-30 seconds on modern computers. For large graphic novels (500+ MB, 200+ pages): 1-3 minutes. Time depends on file size, page count, and your computer's CPU/RAM. Conversion happens locally in your browser, so a 2023 MacBook Pro M2 will be faster than a 2015 Chromebook. No network delays — it's all local processing."
            },
            {
                q: "Can I open the PDF on a Kindle e-reader?",
                a: "Yes, but with caveats. Kindle Paperwhite and other e-ink Kindles support PDFs, but the grayscale screen and small size (6-7 inches) aren't ideal for color comics. PDFs don't reflow, so you'll need to zoom and pan. For better experience, use a Kindle Fire (color LCD tablet), iPad, or Android tablet. Alternatively, convert to optimized formats like Kindle's KFX (requires Calibre + KFX plugin)."
            },
            {
                q: "Are there any legal issues with converting CBR to PDF?",
                a: "Converting CBR to PDF for personal use (format shifting) is generally legal in Canada under fair dealing provisions. However, distributing converted PDFs of copyrighted comics violates copyright (Copyright Act of Canada). If you legally purchased or own the comics, converting for personal backup/convenience is acceptable. Downloading pirated CBR files and converting them is still piracy. Support creators by buying official releases."
            }
        ],
        ctaTitle: "Ready to convert your comics?",
        ctaButton: "Start CBR to PDF",
        ctaSubtext: "Free, Fast, and Locally Processed."
    },
    fr: {
        seo: {
            title: `Convertir CBR en PDF | Guide BD ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Lisez vos bandes dessinées partout. Notre guide ${CURRENT_YEAR} vous montre comment convertir CBR/CBZ en PDF en toute sécurité localement sans jamais les télécharger.`
        },
        h1: "Comment Convertir CBR/CBZ en PDF",
        subtitle: "Le guide définitif pour emporter vos bandes dessinées partout.",
        intro: (
            <>
                Si vous êtes un amateur de bandes dessinées numériques, vous avez probablement rencontré les fichiers <strong>CBR</strong> et <strong>CBZ</strong>. Bien que ces formats soient parfaits pour les lecteurs de BD dédiés, ils peuvent être difficiles à ouvrir sur des appareils standards comme les tablettes ou les ordinateurs de travail.
                <br /><br />
                La solution ? <strong>Convertir CBR en PDF</strong>. Ce guide vous montrera comment transformer vos archives de BD en documents PDF universels sans compromettre votre vie privée ni télécharger de logiciels encombrants.
            </>
        ),
        sections: [
            {
                id: "what-is-cbr",
                title: "Qu'est-ce que les fichiers CBR et CBZ ?",
                content: (
                    <>
                        <p className="mb-4">
                            Avant de convertir, il est utile de comprendre ce que sont réellement ces fichiers. Ce sont essentiellement des collections d'images (généralement JPG ou PNG) regroupées dans une archive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBR (Comic Book RAR)</h4>
                                <p className="text-sm">Ce sont des archives .RAR renommées en .CBR. Elles nécessitent un logiciel spécifique pour être décompressées.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-canada-red mb-2">CBZ (Comic Book ZIP)</h4>
                                <p className="text-sm">Ce sont des archives .ZIP renommées en .CBZ. Elles sont plus courantes et plus faciles à manipuler nativement.</p>
                            </div>
                        </div>
                    </>
                )
            },
            {
                id: "why-pdf",
                title: "Pourquoi convertir des BD en PDF ?",
                content: (
                    <>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Compatibilité Universelle :</strong> Les PDF s'ouvrent sur n'importe quel appareil sans applications supplémentaires.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Partage Simplifié :</strong> Envoyer un PDF est plus simple que d'expliquer comment installer un lecteur CBR à vos amis.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span><strong>Bibliothèque Recherchable :</strong> Les PDF sont plus faciles à organiser et à indexer dans les systèmes de gestion de documents.</span>
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: "how-to",
                title: "Étape par étape : Conversion en PDF",
                content: (
                    <>
                        <p className="mb-6">
                            Utiliser notre outil local est plus sûr que les convertisseurs « cloud » car vos BD ne quittent jamais votre ordinateur. C'est important car les fichiers BD sont souvent volumineux.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Sélectionnez votre BD</h4>
                                    <p>Allez sur notre <Link href={`/${lang}/cbr-to-pdf`} className="text-canada-red hover:underline font-medium">Outil CBR en PDF</Link> et choisissez votre fichier.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Attendez l'extraction</h4>
                                    <p>Notre outil décompressera les images (JPG/PNG) directement dans la mémoire de votre navigateur.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-canada-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Téléchargez le PDF</h4>
                                    <p>Une fois compilé, cliquez sur le bouton de téléchargement. Vous avez maintenant une version PDF haute qualité de votre BD !</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        ],
        faq: [
            {
                q: "Y a-t-il une limite de taille ?",
                a: "Comme la conversion se fait sur votre matériel, nous n'imposons pas de limites de serveur arbitraires. Si votre navigateur peut gérer la mémoire, nous pouvons convertir. Les archives de BD typiques (50-200 Mo) se convertissent instantanément. Pour les très grandes archives (500+ Mo), la RAM disponible de votre navigateur est la seule contrainte. Contrairement aux convertisseurs cloud qui limitent les téléchargements à 10-100 Mo, notre traitement local gère des fichiers aussi volumineux que votre système le permet."
            },
            {
                q: "La qualité va-t-elle baisser ?",
                a: "Non. Notre outil intègre les images originales de l'archive directement dans le PDF sans les recompresser, préservant la qualité artistique originale. Si votre CBR contient des JPEG haute résolution numérisés à 300 DPI, votre PDF maintiendra exactement cette qualité. Nous n'appliquons pas de compression avec perte ni de réduction d'échelle — ce qui entre ressort tel quel."
            },
            {
                q: "Est-ce que ça marche pour les mangas ?",
                a: "Oui ! L'outil extrait les images dans l'ordre où elles apparaissent dans l'archive, donc qu'il s'agisse d'une BD occidentale (de gauche à droite) ou d'un Manga (de droite à gauche), le flux de lecture est préservé. Le PDF résultant maintiendra le même ordre de lecture que le CBR/CBZ original. Pour les mangas de droite à gauche, vous pouvez activer le mode de lecture de droite à gauche dans votre lecteur PDF (Adobe Acrobat, Aperçu macOS le supportent)."
            },
            {
                q: "Puis-je convertir CBR en PDF sur Mac ?",
                a: "Absolument ! Notre convertisseur web fonctionne parfaitement sur macOS (Safari, Chrome, Firefox, Edge). Comme il est basé sur le navigateur via WebAssembly, il fonctionne de manière identique sur Mac, Windows, Linux et même les Chromebooks. Pas besoin de télécharger The Unarchiver ou d'installer un logiciel séparé — ouvrez simplement la page et convertissez. Vos fichiers ne quittent jamais votre Mac."
            },
            {
                q: "Quelle est la différence entre CBR et CBZ ?",
                a: "Les fichiers CBR sont des archives RAR (compressées avec l'algorithme RAR) renommées avec l'extension .cbr. Les fichiers CBZ sont des archives ZIP renommées avec l'extension .cbz. CBZ est plus courant car ZIP est un standard ouvert supporté nativement par tous les systèmes d'exploitation. CBR nécessite des bibliothèques d'extraction RAR. Les deux contiennent la même chose : un dossier d'images de pages de BD (JPG/PNG) dans l'ordre de lecture. Notre convertisseur gère les deux formats de manière transparente."
            },
            {
                q: "Puis-je convertir plusieurs fichiers CBR à la fois ?",
                a: "Actuellement, notre convertisseur web traite un fichier à la fois pour garantir des performances optimales et éviter les problèmes de mémoire du navigateur. Pour la conversion en lot de 10+ BD, considérez utiliser des outils en ligne de commande comme ebook-convert de Calibre ou créer un script simple avec ImageMagick. Cependant, la plupart des utilisateurs trouvent notre approche fichier par fichier assez rapide (5-30 secondes par BD) pour les collections typiques."
            },
            {
                q: "Pourquoi convertir en PDF au lieu de garder CBR/CBZ ?",
                a: "Les PDF s'ouvrent universellement — sur Kindle, iPad, tablettes Android, ordinateurs de travail — sans installer de lecteurs de BD dédiés comme CDisplayEx, YACReader ou Chunky. Les PDF s'intègrent avec les gestionnaires de documents standards (DEVONthink, Zotero, Calibre). Ils sont plus faciles à partager (tout le monde sait comment ouvrir un PDF). Les PDF fonctionnent hors ligne sans applications spécialisées. Et pour l'archivage/sauvegarde, les PDF sont plus pérennes que CBR/CBZ."
            },
            {
                q: "Mes BD sont-elles privées ? Sont-elles téléchargées ?",
                a: "Vos BD sont 100% privées. Contrairement aux convertisseurs cloud (CloudConvert, Zamzar, Convertio) qui téléchargent vos fichiers sur leurs serveurs, pdfcanada.ca traite tout localement dans votre navigateur via WebAssembly. Vos fichiers de BD ne quittent jamais votre appareil. Aucune transmission de données. Aucun accès serveur. C'est crucial pour la confidentialité — beaucoup de BD sont protégées par des droits d'auteur, et les télécharger sur des serveurs tiers peut violer les conditions d'utilisation. Avec le traitement local, votre collection reste vôtre."
            },
            {
                q: "Puis-je convertir des fichiers CB7 ou CBT ?",
                a: "Notre outil actuel supporte CBR (RAR) et CBZ (ZIP), qui représentent 95%+ des BD numériques. CB7 (archives 7-Zip) et CBT (archives TAR) sont moins courants. Si vous avez des fichiers CB7, extrayez-les d'abord avec 7-Zip et re-archivez en CBZ (format ZIP), puis convertissez. Pour CBT, extrayez avec n'importe quel outil compatible TAR et re-empaquetez en CBZ. La plupart des sites de distribution de BD utilisent exclusivement CBZ/CBR."
            },
            {
                q: "Le PDF sera-t-il plus gros que le CBR/CBZ original ?",
                a: "Généralement oui, mais seulement légèrement (5-15% plus gros). Les fichiers CBR/CBZ utilisent la compression RAR/ZIP sur les fichiers image. Les PDF compressent aussi les images intégrées, mais ajoutent une surcharge pour la structure PDF (objets de page, métadonnées, tables de références croisées). Un CBZ de 150 Mo pourrait devenir un PDF de 165 Mo. Cependant, les PDF sont souvent plus efficaces pour le partage (fichier unique vs extraction d'archive) et s'affichent plus rapidement sur la plupart des lecteurs."
            },
            {
                q: "Puis-je éditer le PDF après conversion (ajouter des signets, métadonnées) ?",
                a: "Oui ! Après conversion, vous pouvez éditer le PDF avec des outils comme Adobe Acrobat Pro, PDF Expert (Mac) ou Foxit. Ajoutez des signets pour les chapitres/numéros, intégrez des métadonnées (titre, auteur, éditeur, numéro), optimisez pour la visualisation web, ou ajoutez des paramètres de sécurité. Notre convertisseur crée un PDF standard non protégé qui est entièrement éditable."
            },
            {
                q: "Ça marche pour les webcomics téléchargés en fichiers ZIP ?",
                a: "Absolument ! Si vous avez téléchargé un webcomic en archive ZIP (collection d'images PNG/JPG), renommez simplement le fichier .zip en .cbz et convertissez. Le convertisseur extraira les images par ordre alphabétique/numérique et les compilera en PDF. Assurez-vous que les images sont nommées séquentiellement (page001.jpg, page002.jpg, etc.) pour un ordre de lecture correct."
            },
            {
                q: "Puis-je convertir des scanlations ou traductions de fans ?",
                a: "Techniquement oui — notre convertisseur ne fait pas de distinction entre les sorties officielles et le contenu fait par des fans. Cependant, soyez conscient des considérations légales et éthiques. Les scanlations de mangas protégés par des droits d'auteur peuvent violer la loi sur le droit d'auteur (même au Canada). Convertir et partager pourrait enfreindre les droits des éditeurs. Soutenez les sorties officielles quand possible (Viz, Kodansha, Yen Press offrent des mangas numériques légaux)."
            },
            {
                q: "Quelle résolution devraient avoir mes images pour la meilleure qualité ?",
                a: "Pour la lecture sur tablettes/liseuses : 1200-1600px de largeur est idéal (équilibre qualité et taille de fichier). Pour l'impression : 2400-3000px de largeur à 300 DPI. Pour les smartphones : 800-1000px de largeur suffisent. La plupart des BD commerciales scannées font 1400-2000px de largeur. Une résolution plus élevée (4K+) résulte en PDF massifs avec une amélioration visuelle minimale sur écrans. Notre convertisseur préserve quelle que soit la résolution dans votre CBR/CBZ — nous ne faisons pas de mise à l'échelle."
            },
            {
                q: "Puis-je protéger le PDF par mot de passe ?",
                a: "Notre convertisseur crée des PDF non protégés. Pour ajouter une protection par mot de passe, utilisez un outil de sécurité PDF après conversion : Adobe Acrobat (Protéger → Chiffrer avec mot de passe), PDF Expert (macOS), ou des outils en ligne comme Smallpdf (bien que télécharger des BD sur des sites tiers annule l'avantage de confidentialité). Alternativement, chiffrez le fichier PDF lui-même avec le chiffrement au niveau système (FileVault sur Mac, BitLocker sur Windows)."
            },
            {
                q: "Le PDF maintient-il les doubles pages ?",
                a: "Si votre CBR/CBZ contient des doubles pages en tant qu'images larges uniques (courant dans les volumes de manga), celles-ci seront préservées telles quelles dans le PDF. Chaque image devient une page PDF. Cependant, si vos doubles pages sont divisées en deux images séparées (moitié gauche, moitié droite), elles apparaîtront comme des pages simples séquentielles dans le PDF. Pour corriger cela, pré-traitez les images avec des outils comme ComicRack ou combinez manuellement les doubles pages avant archivage."
            },
            {
                q: "Puis-je convertir des fichiers CBR de BD Marvel/DC ?",
                a: "Oui, notre outil convertit n'importe quel fichier CBR/CBZ quel que soit le contenu. Cependant, soyez conscient des droits d'auteur. Les BD numériques officiellement achetées (de Comixology, Marvel Unlimited) sont généralement protégées par DRM et ne sont pas distribuées en CBR/CBZ. Si vous avez des fichiers CBR légalement achetés ou convertissez des scans personnels pour sauvegarde, vous êtes dans l'usage équitable. Partager ou distribuer des BD protégées viole la loi sur le droit d'auteur au Canada et dans la plupart des pays."
            },
            {
                q: "Quel est le nombre maximum de pages que je peux convertir ?",
                a: "Il n'y a pas de limite stricte de pages. Nous avons testé avec succès des conversions avec des archives de 1000+ pages (volumes de manga entiers, compendiums de BD). Le facteur limitant est la mémoire de votre navigateur. Une BD typique (20-30 pages) utilise ~50-100 Mo de RAM pendant la conversion. Un roman graphique de 200 pages pourrait utiliser 500 Mo. Les ordinateurs modernes (8+ Go de RAM) peuvent gérer presque n'importe quelle archive de BD. Si vous rencontrez des plantages, fermez d'autres onglets/applications pour libérer de la mémoire."
            },
            {
                q: "Puis-je utiliser ça sur mon iPhone ou iPad ?",
                a: "Oui ! Notre convertisseur fonctionne dans Safari sur iOS/iPadOS. Cependant, les navigateurs mobiles ont des limites de mémoire plus strictes que les ordinateurs de bureau. Pour les BD typiques (50-150 Mo, 20-40 pages), ça fonctionne bien sur les iPads/iPhones récents (iOS 14+). Les très grandes archives (500+ Mo) peuvent planter en raison de contraintes de mémoire. Pour une utilisation intensive, nous recommandons de convertir sur un ordinateur, puis de transférer les PDF sur votre iPad via AirDrop, l'app Fichiers, ou le stockage cloud."
            },
            {
                q: "Les images restent-elles dans le bon ordre ?",
                a: "Oui. Les archives de BD stockent les images avec des noms de fichiers séquentiels (001.jpg, 002.jpg, etc.). Notre convertisseur extrait et trie alphanumériquement, assurant un ordre de lecture correct. Si votre archive a des noms non séquentiels (IMG_5432.jpg, IMG_5439.jpg), l'ordre peut être incorrect. Dans ce cas, utilisez un logiciel de gestion de BD (Calibre, ComicRack) pour réorganiser les pages avant conversion."
            },
            {
                q: "Puis-je convertir des fichiers RAR protégés (CBR protégés par mot de passe) ?",
                a: "Si votre fichier CBR est protégé par mot de passe, vous devrez d'abord l'extraire et le re-archiver sans mot de passe. Utilisez WinRAR, 7-Zip ou The Unarchiver (Mac), entrez le mot de passe pour extraire les images, puis re-empaquetez en CBZ non protégé (archive ZIP). Notre convertisseur ne peut pas déchiffrer les archives protégées par mot de passe — le déchiffrement se fait au niveau du navigateur, qui ne supporte pas les mots de passe RAR."
            },
            {
                q: "Ça marche avec les BD Dark Horse, Image ou indépendantes ?",
                a: "Oui ! Le format est universel. Que ce soit Marvel, DC, Dark Horse (Hellboy, BPRD), Image (The Walking Dead, Saga) ou des webcomics indépendants, si c'est distribué en CBR/CBZ, notre convertisseur le gère. L'éditeur n'a pas d'importance — seulement le format d'archive. Nous avons testé avec des BD de sauvegardes ComiXology, dépôts de scans et mangas traduits par des fans."
            },
            {
                q: "Puis-je réduire la taille du fichier PDF après conversion ?",
                a: "Oui. Si votre PDF résultant est trop volumineux, utilisez des outils de compression : Adobe Acrobat (Enregistrer sous PDF optimisé), Smallpdf, ou notre outil Compresser PDF (pdfcanada.ca/compress-pdf). Ceux-ci recompressent les images JPEG à une qualité inférieure (80-90% est généralement imperceptible), suppriment les métadonnées inutiles et optimisent la structure. Vous pouvez généralement réduire la taille du fichier de 30-50% avec une perte de qualité minimale."
            },
            {
                q: "Combien de temps prend la conversion ?",
                a: "Pour les BD typiques (50-200 Mo, 20-40 pages) : 5-30 secondes sur les ordinateurs modernes. Pour les grands romans graphiques (500+ Mo, 200+ pages) : 1-3 minutes. Le temps dépend de la taille du fichier, du nombre de pages et du CPU/RAM de votre ordinateur. La conversion se fait localement dans votre navigateur, donc un MacBook Pro M2 2023 sera plus rapide qu'un Chromebook 2015. Aucun délai réseau — c'est tout du traitement local."
            },
            {
                q: "Puis-je ouvrir le PDF sur une liseuse Kindle ?",
                a: "Oui, mais avec des réserves. Kindle Paperwhite et autres Kindles e-ink supportent les PDF, mais l'écran en niveaux de gris et la petite taille (6-7 pouces) ne sont pas idéaux pour les BD en couleur. Les PDF ne se reformatent pas, donc vous devrez zoomer et faire défiler. Pour une meilleure expérience, utilisez une Kindle Fire (tablette LCD couleur), iPad ou tablette Android. Alternativement, convertissez en formats optimisés comme le KFX de Kindle (nécessite Calibre + plugin KFX)."
            },
            {
                q: "Y a-t-il des problèmes légaux à convertir CBR en PDF ?",
                a: "Convertir CBR en PDF pour usage personnel (changement de format) est généralement légal au Canada sous les dispositions d'utilisation équitable. Cependant, distribuer des PDF convertis de BD protégées viole le droit d'auteur (Loi sur le droit d'auteur du Canada). Si vous avez légalement acheté ou possédez les BD, convertir pour sauvegarde/commodité personnelle est acceptable. Télécharger des fichiers CBR piratés et les convertir reste du piratage. Soutenez les créateurs en achetant des sorties officielles."
            }
        ],
        ctaTitle: "Prêt à convertir vos BD ?",
        ctaButton: "Démarrer CBR en PDF",
        ctaSubtext: "Gratuit, Rapide et Traité Localement."
    }
});

export const CbrToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang] || guideContent.en;

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t.h1,
            "description": t.seo.desc,
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Select Comic", "text": "Select your CBR or CBZ file." },
                { "@type": "HowToStep", "position": 2, "name": "Wait for Extraction", "text": "Wait for image extraction in browser memory." },
                { "@type": "HowToStep", "position": 3, "name": "Download PDF", "text": "Download your compiled PDF." }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.h1,
            "description": t.seo.desc,
            "datePublished": "2024-06-15",
            "dateModified": "2025-12-24",
            "author": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "url": "https://www.pdfcanada.ca"
            },
            "publisher": {
                "@type": "Organization",
                "name": "pdfcanada.ca",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.pdfcanada.ca/android-chrome-512x512.png"
                }
            }
        }
    ];

    return (
        <div className="bg-white dark:bg-black">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/cbr-to-pdf"
                faqs={t.faq}
                lang={lang}
                schema={schema}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir CBR en PDF gratuitement?" : "How do I convert CBR to PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil gratuit CBR en PDF de pdfcanada.ca. Sélectionnez votre fichier CBR/CBZ, attendez l'extraction des images dans votre navigateur, puis téléchargez le PDF. Tout le traitement se fait localement - aucun téléchargement vers des serveurs requis."
                        : "Use pdfcanada.ca's free CBR to PDF tool. Select your CBR/CBZ file, wait for image extraction in your browser, then download the PDF. All processing happens locally - no server uploads required.",
                    tool: "CBR to PDF Converter",
                    steps: lang === 'fr'
                        ? ["Sélectionnez votre fichier CBR ou CBZ", "Attendez l'extraction des images", "Téléchargez votre PDF compilé"]
                        : ["Select your CBR or CBZ file", "Wait for image extraction", "Download your compiled PDF"]
                }}
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
                    { name: 'CBR to PDF', path: '/guides/cbr-to-pdf' }
                ]}
            />

            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
                    { name: 'CBR to PDF', href: '#' }
                ]}
            >
                <div className="max-w-4xl mx-auto py-12 px-6">
                    {/* Intro */}
                    <div className="prose prose-lg dark:prose-invert mb-16 max-w-none text-gray-600 dark:text-gray-400">
                        {t.intro}
                    </div>

                    {/* Sections */}
                    <div className="space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24">
                                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-canada-red rounded-full" />
                                    {section.title}
                                </h2>
                                <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="mt-24 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
                            <Info className="text-canada-red" size={36} />
                            FAQ
                        </h2>
                        <div className="grid gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                                        <span className="text-canada-red font-black">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className="text-gray-600 dark:text-gray-400 pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 bg-canada-red p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl shadow-red-500/20">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform hidden md:block">
                            <Zap size={120} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10 leading-tight">{t.ctaTitle}</h2>
                        <p className="text-red-100 mb-8 text-lg md:text-xl relative z-10">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/cbr-to-pdf`}
                            className="inline-block bg-white text-canada-red px-10 md:px-12 py-4 rounded-full font-black text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 relative z-10"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    {/* Navigation to other guides */}
                    <div className="mt-24 text-center">
                        <Link href={`/${lang}/guides/ultimate-pdf-guide`}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-canada-red font-bold transition-colors group"
                        >
                            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Back to Ultimate PDF Guide
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir CBR en PDF gratuitement?" : "How do I convert CBR to PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil gratuit CBR en PDF de pdfcanada.ca. Sélectionnez votre fichier CBR/CBZ, attendez l'extraction des images dans votre navigateur, puis téléchargez le PDF. Tout le traitement se fait localement - aucun téléchargement vers des serveurs requis."
                            : "Use pdfcanada.ca's free CBR to PDF tool. Select your CBR/CBZ file, wait for image extraction in your browser, then download the PDF. All processing happens locally - no server uploads required."}
                        toolName="CBR to PDF Converter"
                        steps={lang === 'fr'
                            ? ["Sélectionnez votre fichier CBR ou CBZ", "Attendez l'extraction des images", "Téléchargez votre PDF compilé"]
                            : ["Select your CBR or CBZ file", "Wait for image extraction", "Download your compiled PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/cbr-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};


