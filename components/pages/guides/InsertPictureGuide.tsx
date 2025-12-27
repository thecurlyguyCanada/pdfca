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
 h1: "How to Insert a Picture in a PDF: The ${CURRENT_YEAR} Guide",
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
 <ol className="list-decimal pl-5 space-y-4 mb-6">
 <li className="pl-2">
 <strong>Open Your File</strong>: Upload your document to our <Link href="/${lang}/sign-pdf" className="text-canada-red hover:underline font-medium">PDF Sign & Edit tool</Link>.
 </li>
 <li className="pl-2">
 <strong>Select 'Image'</strong>: Choose the option to add an image or signature from your device.
 </li>
 <li className="pl-2">
 <strong>Place & Resize</strong>: Click on the page to place your picture, then drag the corners to resize it or move it to the perfect spot.
 </li>
 <li className="pl-2">
 <strong>Save & Download</strong>: Once you're happy with the placement, click 'Sign/Apply' and download your updated PDF.
 </li>
 </ol>
 )
 },
 {
 id: "benefits",
 title: "Why Use pdfcanada.ca for Images?",
 content: (
 <div className="grid md:grid-cols-2 gap-4 mt-4">
 <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
 <h3 className="font-bold text-red-800 mb-2">100% Private</h3>
 <p className="text-sm text-red-700">Your pictures and PDFs are processed locally. No one else ever sees your sensitive images.</p>
 </div>
 <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
 <h3 className="font-bold text-gray-800 mb-2">High Resolution</h3>
 <p className="text-sm text-gray-700">We maintain the quality of your images so they look sharp and professional after insertion.</p>
 </div>
 </div>
 )
 }
 ],

 faq: [
 {
 q: "What image formats are supported?",
 a: "You can insert standard image formats like JPG, PNG, and HEIC (iPhone photos)."
 },
 {
 q: "Can I move the image after placing it?",
 a: "Yes! Our editor allows you to drag, resize, and even delete images before you save the final document."
 }
 ],

 ctaTitle: "Enhance Your PDF Today",
 ctaButton: "Add Image to PDF Now",
 ctaSubtext: "Free, Secure, and Proudly Canadian.",
 whyTitle: "Privacy First Image Insertion",
 whyDesc: "Don't upload personal photos to cloud servers. Use pdfcanada.ca to keep your data local and secure."
 },
 fr: {
 seo: {
 title: `Comment Insérer une Image dans un PDF | Guide Gratuit ${CURRENT_YEAR} | pdfcanada.ca`,
 desc: `Ajoutez des images à vos PDF gratuitement. Notre guide ${CURRENT_YEAR} vous montre comment insérer des photos en toute sécurité sans téléchargement. Rapide, privé et canadien.`
 },
 h1: "Comment Insérer une Image dans un PDF : Le Guide ${CURRENT_YEAR}",
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
 <li className="pl-2"><strong>Ouvrez votre fichier</strong> : Téléchargez votre document dans notre <Link href="/${lang}/sign-pdf" className="text-canada-red hover:underline font-medium">outil de signature et d'édition</Link>.</li>
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

 ctaTitle: "Améliorez votre PDF Aujourd'hui",
 ctaButton: "Ajouter une Image Maintenant",
 ctaSubtext: "Gratuit, Sécurisé et Fièrement Canadien.",
 whyTitle: "Insertion d'Images Privée",
 whyDesc: "Ne téléchargez pas de photos personnelles sur des serveurs cloud. Utilisez pdfcanada.ca pour garder vos données locales et sécurisées."
 }
});

export const InsertPictureGuide: React.FC<GuideProps> = ({ lang }) => {
 const guideContent = getGuideContent(lang);
 const t = guideContent[lang] || guideContent.en;

 const quickAnswerData = {
 question: lang === 'fr' ? "Comment insérer une image dans un PDF gratuitement?" : "How do I insert a picture into a PDF for free?",
 answer: lang === 'fr'
 ? "Utilisez l'outil Signer PDF de pdfcanada.ca. Téléchargez votre PDF, cliquez sur 'Ajouter une image', placez et redimensionnez votre photo, puis téléchargez. Supporte JPG, PNG et HEIC. Tout se fait localement."
 : "Use pdfcanada.ca's Sign PDF tool. Upload your PDF, click 'Add Image', place and resize your picture, then download. Supports JPG, PNG, and HEIC. All processing happens locally.",
 tool: "PDF Sign & Edit Tool",
 steps: lang === 'fr'
 ? ["Téléchargez votre PDF", "Sélectionnez 'Ajouter une image'", "Placez et redimensionnez", "Téléchargez le PDF modifié"]
 : ["Upload your PDF", "Select 'Add Image'", "Place and resize", "Download updated PDF"]
 };

 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": t.h1,
 "description": t.seo.desc,
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Open Tool", "text": "Upload PDF to the Sign & Edit tool." },
 { "@type": "HowToStep", "position": 2, "name": "Select Image", "text": "Choose 'Add Image' from the options." },
 { "@type": "HowToStep", "position": 3, "name": "Place Image", "text": "Click on the page to place and drag to resize." },
 { "@type": "HowToStep", "position": 4, "name": "Download", "text": "Apply changes and download your updated PDF." }
 ]
 },
 {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": t.h1,
 "description": t.seo.desc,
 "datePublished": "2024-03-01",
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
 <>
 <SEO
 title={t.seo.title}
 description={t.seo.desc}
 canonicalPath="/guides/insert-picture-in-pdf"
 faqs={t.faq}
 lang={lang}
 schema={schema}
 quickAnswer={quickAnswerData}
 breadcrumbs={[
 { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
 { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
 { name: lang === 'fr' ? 'Insérer une Image' : 'Insert Picture in PDF', path: lang === 'fr' ? '/fr/guides/insert-picture-in-pdf' : '/guides/insert-picture-in-pdf' }
 ]}
 />

 <PageLayout title={t.h1} subtitle={t.subtitle} icon={<ImageIcon size={32} />}>
 <div className="max-w-4xl mx-auto space-y-16 text-gray-700 dark:text-gray-300">
 <section className="animate-fade-in">
 <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-canada-red pl-6 py-2">
 {t.intro}
 </div>
 </section>

 {t.sections.map((section: any, idx: number) => (
 <section key={section.id} id={section.id} className="scroll-mt-24 animate-fade-in">
 <div className="flex items-center gap-4 mb-6">
 <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-canada-red/10 text-canada-red font-black text-2xl">
 {idx + 1}
 </span>
 <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
 </div>
 <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
 {section.content}
 </div>
 </section>
 ))}

 <section className="bg-gray-900 text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl animate-fade-in shadow-gray-400">
 <div className="absolute top-0 right-0 w-64 h-64 bg-canada-red opacity-10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
 <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
 <Shield className="text-canada-red" size={32} />
 {t.whyTitle}
 </h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-6">
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
 <span>Drag & drop images</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="text-canada-red mt-1 shrink-0" size={20} />
 <span>High-res output</span>
 </li>
 </ul>
 </div>
 </div>
 </section>

 <section className="text-center py-12 animate-fade-in">
 <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">{t.ctaTitle}</h2>
 <Link href="/${lang}/sign-pdf"
 className="inline-flex items-center gap-3 bg-canada-red hover:bg-canada-darkRed text-white px-10 py-4 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
 >
 <ImageIcon size={24} />
 {t.ctaButton}
 </Link>
 <p className="mt-4 text-gray-500 font-medium">{t.ctaSubtext}</p>
 </section>

 <AISnapshot
 lang={lang}
 question={quickAnswerData.question}
 answer={quickAnswerData.answer}
 steps={quickAnswerData.steps}
 toolName={quickAnswerData.tool}
 />

 <RelatedTools lang={lang} currentPath="/guides/insert-picture-in-pdf" category="edit" />

 <AuthorBio lang={lang} />
 </div>
 </PageLayout>
 </>
 );
};


