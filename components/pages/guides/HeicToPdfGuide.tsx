import Link from 'next/link';
import React from 'react';
import { Image, CheckCircle, Shield, Zap, ArrowRight, Globe, Lock, Clock, Smartphone, Monitor, MousePointer2 } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
 lang: Language;
}

const getGuideContent = (lang: Language) => ({
 en: {
 seo: {
 title: "How to Convert HEIC to PDF | Secure iPhone Photo Guide | pdfcanada.ca",
 desc: `Make your iPhone photos compatible with everything. Our ${CURRENT_YEAR} tutorial shows you how to convert HEIC to PDF securely in your browser without uploading photos.`
 },
 h1: "How to Convert HEIC to PDF: The Ultimate ${CURRENT_YEAR} Guide",
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
- **Legal Stability**: PDF is an ISO-standardized format that ensures your photos look exactly the same across all devices, making it the preferred choice for official documentation.`
 },
 {
 id: "merging",
 title: "Batch Conversion: Merge Multiple HEIC into One PDF",
 content: `One of the most powerful features of our **free HEIC to PDF converter** is the ability to merge multiple photos into a single document. Instead of sending 10 separate photo files of a multi-page contract, you can:
1. **Upload all HEIC files** at once.
2. **Reorder them** using our drag-and-drop interface.
3. **Download one PDF** containing all your images. This significantly simplifies the life of whoever is receiving your documents.`
 },
 {
 id: "privacy",
 title: "Maximum Privacy for Personal Photos",
 content: `Your photo gallery contains sensitive life moments. When you use a random 'cloud' converter, your photos are uploaded to a remote server. pdfcanada.ca is different. We use **WebAssembly and local processing** to convert your images within your browser's RAM. Your photos NEVER leave your computer or smartphone, ensuring that your private data stays private.`
 }
 ],

 faq: [
 {
 q: "How to convert HEIC to PDF on iPhone without an app?",
 a: "You don't need a dedicated app. Open Safari on your iPhone, go to pdfcanada.ca, select your photos from the library, and we will generate a PDF 'on the fly' that you can save to your Files or send via email."
 },
 {
 q: "Is converting to PDF better than converting to JPG?",
 a: "For sharing multiple photos or official documents, **PDF is superior**. It allows for multi-page support, smaller collective file sizes for documentation, and better printing control compared to raw JPEGs."
 },
 {
 q: "Does pdfcanada.ca store my photos?",
 a: "No. Unlike other websites, we have zero server-side storage for files. The conversion happens entirely on your device's CPU. As soon as you close the tab, all traces of your images are gone."
 },
 {
 q: "Can I convert large batches of 50+ photos?",
 a: "Yes. Because the processing is local, the only limit is your device's memory. Desktop users can easily convert massive batches in seconds."
 }
 ],

 ctaTitle: "Ready to Fix Your Compatibility Issues?",
 ctaButton: "Start HEIC to PDF Conversion",
 ctaSubtext: "100% Free. No Signup. Proudly Canadian and Local-First."
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
 "dateModified": "2025-12-24",
 id: "how-to",
 title: "Étapes pour Convertir HEIC en PDF",
 content: `1. **Sélectionnez Vos Photos** : Téléchargez un ou plusieurs fichiers .heic depuis votre iPhone, iCloud ou ordinateur.
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
 ctaSubtext: "Gratuit, Rapide et 100% Privé."
 }

});

export const HeicToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
 const guideContent = getGuideContent(lang);
 const t = guideContent[lang] || guideContent.en;

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
 quickAnswer={{
 question: lang === 'fr' ? "Comment convertir HEIC en PDF sur iPhone?" : "How do I convert HEIC to PDF on iPhone?",
 answer: lang === 'fr'
 ? "Ouvrez Safari sur votre iPhone, allez sur pdfcanada.ca, sélectionnez vos photos HEIC depuis votre bibliothèque, et nous générerons un PDF automatiquement. Vous pouvez l'enregistrer dans Fichiers ou l'envoyer par email. Pas d'application requise."
 : "Open Safari on your iPhone, go to pdfcanada.ca, select your HEIC photos from your library, and we'll generate a PDF on the fly. You can save it to Files or send via email. No app needed.",
 tool: "HEIC to PDF Converter",
 steps: lang === 'fr'
 ? ["Sélectionnez vos photos HEIC", "Organisez les pages", "Téléchargez votre PDF"]
 : ["Select your HEIC photos", "Organize the pages", "Download your PDF"]
 }}
 breadcrumbs={[
 { name: 'Home', path: '/' },
 { name: 'Guides', path: '/guides/ultimate-pdf-guide' },
 { name: 'HEIC to PDF', path: '/guides/heic-to-pdf' }
 ]}
 />
 <PageLayout
 title={t.h1}
 subtitle={t.subtitle}
 icon={<Image size={32} />}
 breadcrumbs={[
 { name: 'Home', href: '/' },
 { name: 'Guides', href: '/guides/ultimate-pdf-guide' },
 { name: 'HEIC to PDF Guide', href: '#' }
 ]}
 >
 <div className="max-w-4xl mx-auto py-8">
 <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-16">
 <MarkdownContent content={t.intro} />
 </div>

 {/* Content Sections */}
 <div className="space-y-16">
 {t.sections.map((section: any) => (
 <section key={section.id}>
 <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h3>
 <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
 <MarkdownContent content={section.content} />
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
 <div className="my-20">
 <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Common Questions</h3>
 <div className="grid gap-6">
 {t.faq.map((item: any, i: number) => (
 <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
 <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
 <MousePointer2 size={20} className="text-canada-red" /> {item.q}
 </h4>
 <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
 {item.a}
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* CTA */}
 <div className="mt-20 bg-canada-red rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
 <h2 className="text-4xl font-black mb-6">{t.ctaTitle}</h2>
 <p className="text-xl mb-10 opacity-90">{t.ctaSubtext}</p>
 <Link href="/${lang}/heic-to-pdf"
 className="bg-white text-canada-red px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
 >
 {t.ctaButton}
 </Link>
 </div>

 <AISnapshot
 question={lang === 'fr' ? "Comment convertir HEIC en PDF sur iPhone?" : "How do I convert HEIC to PDF on iPhone?"}
 answer={lang === 'fr'
 ? "Ouvrez Safari sur votre iPhone, allez sur pdfcanada.ca, sélectionnez vos photos HEIC depuis votre bibliothèque, et nous générerons un PDF automatiquement. Vous pouvez l'enregistrer dans Fichiers ou l'envoyer par email. Pas d'application requise."
 : "Open Safari on your iPhone, go to pdfcanada.ca, select your HEIC photos from your library, and we'll generate a PDF on the fly. You can save it to Files or send via email. No app needed."}
 toolName="HEIC to PDF Converter"
 steps={lang === 'fr'
 ? ["Sélectionnez vos photos HEIC", "Organisez les pages", "Téléchargez votre PDF"]
 : ["Select your HEIC photos", "Organize the pages", "Download your PDF"]}
 lang={lang}
 />

 <RelatedTools lang={lang} currentPath="/guides/heic-to-pdf" category="convert" />

 <AuthorBio lang={lang} />
 </div>
 </PageLayout>
 </div>
 );
};


