'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, Wifi, Shield, Zap } from 'lucide-react';
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

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `PDF to Word Online | Free Converter No Sign-up ${CURRENT_YEAR}`,
            desc: `Convert PDF to Word online for free. No software to install, no email required. Secure browser-based conversion that keeps your files private.`
        },
        h1: "PDF to Word Online: Free & Secure",
        subtitle: "The safest way to convert documents directly in your browser without installing software.",
        intro: "Looking for a **PDF to Word online** converter that doesn't ask for your email address? You've found it. Unlike other \"free\" tools that make you sign up or watermark your documents, our [Online PDF to Word Tool](/${lang}/pdf-to-word) works instantly in your web browser. We use advanced WebAssembly technology to process your files **right on your device**, meaning you get the convenience of an online tool with the security of offline software.",

        sections: [
            {
                id: "online-vs-software",
                title: "Online Converter vs. Installed Software",
                content: `Why clutter your computer with heavy software like Adobe Acrobat when you can convert **PDF to Word online**?
- **No Installation**: Save disk space and avoid suspicious software installers.
- **Instant Access**: Works on Chrome, Edge, Safari, and Firefox.
- **Always Updated**: You always use the latest version of our conversion engine.
- **Mobile Friendly**: Convert files on your iPad, Android tablet, or phone just as easily as on a desktop.

Most importantly, our specific implementation gives you the best of both worlds: **online accessibility** with **local security**.`
            },
            {
                id: "how-to-online",
                title: "How to Convert PDF to Word Online (Step-by-Step)",
                content: `1. **Go to the Tool**: Visit our [PDF to Word Converter](/${lang}/pdf-to-word).
2. **Select Your File**: Drag your PDF file directly onto the browser window.
3. **Wait for Logic**: You'll see a "Processing" bar. This is our engine reading the PDF structure locally.
4. **Download**: Click the download button to save your new .DOCX file.

*Pro Tip: You can even turn off your Wi-Fi after the page loads. The tool will still work! That's how "online" yet "local" it is.*`
            },
            {
                id: "security",
                title: "Is It Safe to Convert PDFs Online?",
                content: `This is the #1 question we get. For most websites, the answer is "maybe." For us, the answer is **YES**.
                
Most online converters work by uploading your file to a cloud server. This is risky because:
- You don't know who has access to that server.
- Your file could be hacked during the upload.
- The company might sell your data or email address.

**We are different.** We built a custom engine that runs **inside your web browser**. When you use our PDF to Word online tool, your document is never sent to us. It stays in your computer's RAM. It is mathematically impossible for us to see your files.`
            },
            {
                id: "formatting",
                title: "Preserving Formatting Online",
                content: "One of the biggest challenges with online conversion is keeping the layout intact. Our engine is tuned to recognize:\n- **Paragraphs**: It distinguishes between body text and headers.\n- **Tables**: It attempts to reconstruct rows and columns in Word.\n- **Lists**: Bullet points and numbered lists are detected and formatted correctly.\n\nWhile no converter is perfect, our online tool rivals paid desktop software for accuracy."
            }
        ],

        faq: [
            {
                q: "Is this PDF to Word online converter really free?",
                a: "Yes! It is 100% free. We don't limit the number of files you can convert, and we don't watermark your Word documents."
            },
            {
                q: "Do I need fast internet to use this?",
                a: "Nope. Since the processing happens on your computer (not a server), your internet speed doesn't matter much. Once the tool is loaded, it's lightning fast."
            },
            {
                q: "Can I use this on a public computer?",
                a: "Yes, and it's safer than installing software. Just make sure to clear your 'Downloads' folder when you're done."
            },
            {
                q: "What browsers are supported?",
                a: "We support all modern browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari."
            }
        ],

        ctaTitle: "Convert Your PDF Online Now",
        ctaButton: "Go to Converter",
        ctaSubtext: "No Email • No Install • No Waiting",
    },
    fr: {
        seo: {
            title: `PDF en Word En Ligne | Convertisseur Gratuit Sans Inscription ${CURRENT_YEAR}`,
            desc: `Convertissez PDF en Word en ligne gratuitement. Aucun logiciel à installer, aucun email requis. Conversion sécurisée par navigateur qui garde vos fichiers privés.`
        },
        h1: "PDF en Word En Ligne : Gratuit & Sécurisé",
        subtitle: "Le moyen le plus sûr de convertir des documents directement dans votre navigateur sans installer de logiciel.",
        intro: "Vous cherchez un convertisseur **PDF en Word en ligne** qui ne demande pas votre adresse email ? Vous l'avez trouvé. Contrairement aux autres outils \"gratuits\" qui vous obligent à vous inscrire ou ajoutent des filigranes, notre [Outil PDF vers Word en Ligne](/${lang}/pdf-to-word) fonctionne instantanément dans votre navigateur web. Nous utilisons une technologie WebAssembly avancée pour traiter vos fichiers **directement sur votre appareil**, ce qui signifie que vous bénéficiez de la commodité d'un outil en ligne avec la sécurité d'un logiciel hors ligne.",

        sections: [
            {
                id: "online-vs-software",
                title: "Convertisseur En Ligne vs Logiciel Installé",
                content: `Pourquoi encombrer votre ordinateur avec des logiciels lourds comme Adobe Acrobat quand vous pouvez convertir **PDF en Word en ligne** ?
- **Aucune Installation** : Économisez de l'espace disque et évitez les installateurs de logiciels suspects.
- **Accès Instantané** : Fonctionne sur Chrome, Edge, Safari et Firefox.
- **Toujours à Jour** : Vous utilisez toujours la dernière version de notre moteur de conversion.
- **Compatible Mobile** : Convertissez des fichiers sur votre iPad, tablette Android ou téléphone aussi facilement que sur un bureau.

Plus important encore, notre mise en œuvre spécifique vous offre le meilleur des deux mondes : **accessibilité en ligne** avec **sécurité locale**.`
            },
            {
                id: "how-to-online",
                title: "Comment Convertir PDF en Word En Ligne (Étape par Étape)",
                content: `1. **Allez à l'Outil** : Visitez notre [Convertisseur PDF en Word](/${lang}/pdf-to-word).
2. **Sélectionnez Votre Fichier** : Glissez votre fichier PDF directement sur la fenêtre du navigateur.
3. **Attendez le Traitement** : Vous verrez une barre de "Traitement". C'est notre moteur qui lit la structure du PDF localement.
4. **Téléchargez** : Cliquez sur le bouton de téléchargement pour enregistrer votre nouveau fichier .DOCX.

*Astuce Pro : Vous pouvez même désactiver votre Wi-Fi une fois la page chargée. L'outil fonctionnera toujours ! C'est à quel point il est "en ligne" mais "local".*`
            },
            {
                id: "security",
                title: "Est-ce Sûr de Convertir des PDF En Ligne ?",
                content: `C'est la question n°1 que nous recevons. Pour la plupart des sites web, la réponse est "peut-être". Pour nous, la réponse est **OUI**.
                
La plupart des convertisseurs en ligne fonctionnent en téléchargeant votre fichier sur un serveur cloud. C'est risqué car :
- Vous ne savez pas qui a accès à ce serveur.
- Votre fichier pourrait être piraté pendant le transfert.
- L'entreprise pourrait vendre vos données ou votre adresse email.

**Nous sommes différents.** Nous avons construit un moteur personnalisé qui s'exécute **à l'intérieur de votre navigateur web**. Lorsque vous utilisez notre outil PDF en Word en ligne, votre document ne nous est jamais envoyé. Il reste dans la mémoire vive de votre ordinateur. Il est mathématiquement impossible pour nous de voir vos fichiers.`
            },
            {
                id: "formatting",
                title: "Préserver le Formatage En Ligne",
                content: "L'un des plus grands défis de la conversion en ligne est de garder la mise en page intacte. Notre moteur est réglé pour reconnaître :\n- **Paragraphes** : Il distingue le corps du texte des en-têtes.\n- **Tableaux** : Il tente de reconstruire les lignes et les colonnes dans Word.\n- **Listes** : Les puces et les listes numérotées sont détectées et formatées correctement.\n\nBien qu'aucun convertisseur ne soit parfait, notre outil en ligne rivalise avec les logiciels de bureau payants en termes de précision."
            }
        ],

        faq: [
            {
                q: "Ce convertisseur PDF vers Word en ligne est-il vraiment gratuit ?",
                a: "Oui ! Il est 100% gratuit. Nous ne limitons pas le nombre de fichiers que vous pouvez convertir, et nous n'ajoutons pas de filigranes à vos documents Word."
            },
            {
                q: "Ai-je besoin d'un internet rapide pour utiliser ceci ?",
                a: "Non. Puisque le traitement se fait sur votre ordinateur (pas sur un serveur), votre vitesse internet importe peu. Une fois l'outil chargé, c'est ultra-rapide."
            },
            {
                q: "Puis-je utiliser ceci sur un ordinateur public ?",
                a: "Oui, et c'est plus sûr que d'installer un logiciel. Assurez-vous simplement de vider votre dossier 'Téléchargements' quand vous avez terminé."
            },
            {
                q: "Quels navigateurs sont supportés ?",
                a: "Nous supportons tous les navigateurs modernes incluant Google Chrome, Mozilla Firefox, Microsoft Edge et Apple Safari."
            }
        ],

        ctaTitle: "Convertissez Votre PDF En Ligne Maintenant",
        ctaButton: "Aller au Convertisseur",
        ctaSubtext: "Sans Email • Sans Install • Sans Attente",
    }
});

export const PdfToWordOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-word-online"
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-05"
                dateModified="2026-01-05"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir PDF en Word en ligne gratuitement?" : "How do I convert PDF to Word online for free?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil en ligne de pdfcanada.ca. Il fonctionne directement dans votre navigateur, sans téléchargement de logiciel ni inscription."
                        : "Use pdfcanada.ca's online tool. It runs directly in your browser, no software download or sign-up required.",
                    tool: "Online PDF Converter",
                    steps: lang === 'fr'
                        ? ["Ouvrez l'outil en ligne", "Glissez votre PDF", "Sauvegardez le Word"]
                        : ["Open online tool", "Drag PDF file", "Save Word doc"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF vers Word' : 'PDF to Word', path: lang === 'fr' ? '/fr/guides/pdf-to-word' : '/guides/pdf-to-word' },
                    { name: lang === 'fr' ? 'En Ligne' : 'Online', path: lang === 'fr' ? '/fr/guides/pdf-to-word-online' : '/guides/pdf-to-word-online' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Wifi size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'PDF vers Word' : 'PDF to Word', href: lang === 'fr' ? '/fr/guides/pdf-to-word' : '/guides/pdf-to-word' },
                    { name: lang === 'fr' ? 'En Ligne' : 'Online', href: lang === 'fr' ? '/fr/guides/pdf-to-word-online' : '/guides/pdf-to-word-online' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? "Questions Fréquentes" : "Common Questions"}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <Shield size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/pdf-to-word`}
                            className="bg-white text-canada-red px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-base sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir un PDF en Word en ligne?" : "How do I convert PDF to Word online?"}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur en ligne de pdfcanada.ca. Il fonctionne directement dans votre navigateur pour une sécurité maximale."
                            : "Use pdfcanada.ca's online converter. It runs directly in your browser for maximum security."}
                        toolName="Online PDF to Word"
                        steps={lang === 'fr'
                            ? ["Allez sur le site", "Glissez le fichier", "Téléchargez"]
                            : ["Go to site", "Drag file", "Download"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-word-online" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
