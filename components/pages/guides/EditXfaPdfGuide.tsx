import Link from 'next/link';
import React from 'react';
import { FileWarning } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';

/**
 * "XFA form cannot be edited" — rewritten Nov 2026 around what Search Console shows people typing
 * (edit xfa form in adobe, xfa form cannot be edited, this xfa form cannot be edited using adobe acrobat;
 * 68 impressions at position 48 for this page, Aug 24–Nov 23) and the Canadian case behind most of it:
 * IRCC application forms. IRCC facts come from its help centre (answer 660: Adobe Reader 10 or higher,
 * no browser, no mobile devices, the Validate button). No claim that a pdfcanada.ca tool opens XFA.
 */

interface GuideProps {
    lang: Language;
}

type Row = [string, string];
interface Content {
    h1: string;
    subtitle: string;
    answerLabel: string;
    answer: string;
    updated: string;
    whatTitle: string;
    what: string[];
    viewersTitle: string;
    viewersIntro: string;
    viewersHead: Row;
    viewers: Row[];
    irccTitle: string;
    irccIntro: string;
    irccSteps: string[];
    irccNote: string;
    editTitle: string;
    edit: string[];
    editHead: Row;
    editRows: Row[];
    flattenTitle: string;
    flatten: string[];
    flattenSteps: string[];
    flattenWarn: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    source: string;
}

const EN: Content = {
    h1: 'XFA Form Cannot Be Edited? How to Open and Fill It',
    subtitle: 'Why IRCC and other government PDF forms show “Please wait…” or refuse to edit, and what actually works.',
    answerLabel: 'The short answer',
    answer: 'An XFA form is a PDF whose fields are built by Adobe’s XML Forms Architecture, and only Adobe’s own software runs it fully. Download the form, save it, and open it with the free Adobe Acrobat Reader on a Windows or Mac computer, not in Chrome, Edge, Safari, macOS Preview or a phone. You can fill it there, but neither Reader nor Acrobat Pro lets you edit the page itself: that needs Adobe’s form designer, or printing the form to a normal PDF, which removes the fields.',
    updated: 'Updated November 25, 2026',
    whatTitle: 'What is an XFA form?',
    what: [
        'XFA (XML Forms Architecture) is a way of building PDF forms that Adobe introduced in the early 2000s. Instead of fixed fields drawn on fixed pages, the PDF carries an XML description of the form and its logic, and Adobe’s viewer builds the pages when the file opens: sections that grow, rows that repeat, buttons that check your answers and print a barcode.',
        'That power is also the problem. Most PDF software only understands the ordinary kind of form (AcroForm), where the page and its fields are already in the file. XFA was deprecated in PDF 2.0 (ISO 32000-2, 2017), and browser and phone viewers never implemented it fully. Government departments that built large libraries of XFA forms, including Immigration, Refugees and Citizenship Canada (IRCC), still publish them.',
        'You can usually tell an XFA form by its behaviour: it opens in your browser as a single page saying “Please wait…”, or Acrobat tells you the document cannot be edited, or there is a Validate button and a barcode page.',
    ],
    viewersTitle: 'Why does it say “Please wait…” or show a blank page?',
    viewersIntro: 'Because the viewer you used does not run XFA, so it shows the placeholder page the form’s author put there for exactly that case. The usual text is “Please wait… If this message is not eventually replaced by the proper contents of the document, your PDF viewer may not be able to display this type of document.” It will never be replaced in that viewer. What you get depends on where you open the file:',
    viewersHead: ['Where you open the form', 'What happens'],
    viewers: [
        ['Chrome or Edge (built-in PDF viewer)', 'The “Please wait…” page or a blank form. Clicking a link to the form usually opens it here, which is why so many people see it.'],
        ['macOS Preview, Safari, iPhone and iPad', 'Same placeholder page. Preview cannot run XFA.'],
        ['Firefox', 'Recent versions can display and fill many XFA forms, but forms built for Adobe Reader (validation buttons, barcodes) are not guaranteed to work. IRCC asks for Adobe Reader.'],
        ['Phones and tablets', 'IRCC states that mobile devices such as phones and tablets cannot be used for its forms. Use a computer.'],
        ['Adobe Acrobat Reader (Windows or macOS)', 'The form opens, fields fill, buttons and validation work. This is the viewer the forms are made for, and it is free.'],
        ['Adobe Acrobat Pro', 'Same as Reader for filling. The Edit PDF tool will not change the page content of a dynamic XFA form.'],
    ],
    irccTitle: 'How do I open and fill an IRCC form (IMM 5257, IMM 5645 and others)?',
    irccIntro: 'IRCC’s help centre gives the same procedure for every PDF application form. In short:',
    irccSteps: [
        'Install Adobe Acrobat Reader on a Windows or Mac computer. IRCC asks for Adobe Reader 10 or higher; the current free version qualifies.',
        'Right-click the form’s link and save it (or use the download button), so the PDF lands in a folder you can find, instead of opening in the browser.',
        'Open the saved file from inside Adobe Reader (File, Open), or right-click it and choose Open with, Adobe Acrobat Reader. On Windows you can tick “Always use this program to open these files”; on a Mac, use Get Info, Open with, Change All.',
        'Fill in the fields and save often with File, Save. Reader saves the data inside the form.',
        'If the form has a Validate button, click it when you are done. It checks required fields and generates the barcode page IRCC uses to read your answers.',
        'Upload the saved, validated file itself. If IRCC’s instructions ask for a signature, follow them for that form.',
    ],
    irccNote: 'If the form still will not open in Adobe Reader, IRCC’s help centre asks you to tell them about the technical problem rather than work around it. Do not retype the form into a different PDF: the version IRCC reads is the one with its own fields and barcode.',
    editTitle: '“This XFA form cannot be edited using Adobe Acrobat”: what can I change?',
    edit: [
        'The message comes up when you use Acrobat’s Edit PDF tool on an XFA form. Acrobat will let you type into the fields, but not move, delete or rewrite the text, lines and boxes of the form, because those are generated from the XML each time the file opens. Editing the drawn page would be undone the next time it renders.',
        'Here is what each kind of change actually needs:',
    ],
    editHead: ['What you want to do', 'What works'],
    editRows: [
        ['Fill in the fields, tick boxes, choose from lists', 'Adobe Acrobat Reader (free) or Acrobat Pro'],
        ['Change the form’s design: add a field, move a section, change wording', 'Only Adobe’s form designer (formerly LiveCycle Designer, now AEM Forms Designer). Acrobat Pro’s Edit PDF cannot.'],
        ['Fix a typo in an answer', 'Click the field in Reader and retype it; the answer is data, not page text'],
        ['Get a normal PDF you can annotate, sign or send to someone', 'Print the filled form to PDF (below). The copy has no working fields.'],
        ['Submit a government form', 'Keep the original file, filled and saved in Reader. Do not convert or rebuild it.'],
    ],
    flattenTitle: 'How do I turn an XFA form into a normal PDF?',
    flatten: [
        'Printing to a PDF printer from Adobe Reader writes what is on screen into an ordinary PDF: the pages with your answers on them, without the XML, the scripts or the fields. That copy opens everywhere, including browsers, Preview and phones, and any PDF tool can work with it.',
        'This is the right move for a personal record, for sending someone a readable copy, or for annotating. It is the wrong move for a form you must submit, because the result is no longer a form.',
    ],
    flattenSteps: [
        'Open the form in Adobe Acrobat Reader and fill it in.',
        'Choose File, Print.',
        'Windows: pick “Microsoft Print to PDF” (or “Adobe PDF” if you have Acrobat Pro). Mac: click the PDF menu at the bottom of the print dialog and choose Save as PDF.',
        'Print, name the new file and save it next to the original.',
    ],
    flattenWarn: 'Do not run a fillable government form you still have to submit through a compressor, merger or converter, ours included. Rewriting the file can drop the XFA part, and what is left is the “Please wait…” page. Work on the printed copy instead.',
    faqTitle: 'Frequently asked questions',
    faq: [
        { q: 'How do I edit an XFA form in Adobe Acrobat?', a: 'You can fill an XFA form in Acrobat or the free Acrobat Reader, but the Edit PDF tool will not change its pages, because they are generated from XML each time the file opens. Changing the design takes Adobe’s form designer (AEM Forms Designer, formerly LiveCycle Designer). For a static copy, print the filled form to PDF.' },
        { q: 'Why does my IRCC form say “Please wait…”?', a: 'You opened it in a viewer that does not run XFA, usually the browser’s built-in viewer or macOS Preview. Save the file to your computer and open it with Adobe Acrobat Reader instead. IRCC asks for Adobe Reader 10 or higher and says the forms cannot be completed on phones or tablets.' },
        { q: 'Can I fill an IRCC form on my phone or iPad?', a: 'IRCC states that mobile devices such as iPads, tablets and phones cannot be used for its PDF forms. Use a Windows or Mac computer with Adobe Acrobat Reader installed; a library or a friend’s computer works if you save the file to a USB key.' },
        { q: 'How do I remove XFA from a PDF?', a: 'Print the filled form to PDF from Adobe Reader (Microsoft Print to PDF on Windows, Save as PDF on a Mac). The copy keeps the pages and your answers but no XFA, fields or scripts. Only do this for copies you keep or share, never for a form you still have to submit.' },
        { q: 'Is XFA the same as a fillable PDF?', a: 'Both are fillable, but they are built differently. An ordinary fillable PDF (AcroForm) has its pages and fields stored in the file and works in browsers, Preview and most apps. An XFA form stores an XML description that Adobe’s viewer turns into pages, so it only works fully in Adobe software.' },
        { q: 'Can pdfcanada.ca open or convert an XFA form?', a: 'No. Our tools work on ordinary PDFs and do not run XFA, so an XFA form opened in them shows the same placeholder page. Fill government XFA forms in Adobe Acrobat Reader. Once you have printed a copy to PDF, you can compress, merge or sign that copy here.' },
        { q: 'Why do Canadian government departments still use XFA?', a: 'Many forms were built when XFA was Adobe’s recommended technology for complex forms with validation and barcodes, and replacing a large library of forms takes time. IRCC is moving many applications to online portals, but where a PDF form is still required, it is often XFA.' },
    ],
    source: 'Sources: IRCC Help Centre, “I can’t open my application form in PDF format. What can I do?” (Adobe Reader 10 or higher, no browser, no mobile devices); ISO 32000-2 (PDF 2.0) deprecates XFA.',
};

const FR: Content = {
    h1: 'Formulaire XFA impossible à modifier : comment l’ouvrir et le remplir',
    subtitle: 'Pourquoi les formulaires PDF d’IRCC et d’autres ministères affichent « Please wait… » ou refusent toute modification, et ce qui fonctionne vraiment.',
    answerLabel: 'La réponse courte',
    answer: 'Un formulaire XFA est un PDF dont les champs sont construits par l’architecture XML Forms d’Adobe, et seul un logiciel Adobe l’exécute complètement. Téléchargez le formulaire, enregistrez-le et ouvrez-le avec Adobe Acrobat Reader (gratuit) sur un ordinateur Windows ou Mac, pas dans Chrome, Edge, Safari, Aperçu de macOS ni sur un téléphone. Vous pourrez le remplir, mais ni Reader ni Acrobat Pro ne permettent de modifier la page elle-même : il faut pour cela le concepteur de formulaires d’Adobe, ou imprimer le formulaire en PDF ordinaire, ce qui retire les champs.',
    updated: 'Mis à jour le 25 novembre 2026',
    whatTitle: 'Qu’est-ce qu’un formulaire XFA?',
    what: [
        'XFA (XML Forms Architecture) est une façon de construire des formulaires PDF lancée par Adobe au début des années 2000. Au lieu de champs fixes dessinés sur des pages fixes, le PDF contient une description XML du formulaire et de sa logique, et le lecteur d’Adobe fabrique les pages à l’ouverture : sections qui s’allongent, lignes qui se répètent, boutons qui vérifient vos réponses et produisent un code-barres.',
        'Cette puissance est aussi le problème. La plupart des logiciels PDF ne comprennent que le formulaire ordinaire (AcroForm), dont les pages et les champs sont déjà dans le fichier. XFA a été déclaré obsolète dans PDF 2.0 (ISO 32000-2, 2017), et les lecteurs des navigateurs et des téléphones ne l’ont jamais pris en charge complètement. Les ministères qui ont bâti de grandes collections de formulaires XFA, dont Immigration, Réfugiés et Citoyenneté Canada (IRCC), les publient encore.',
        'On reconnaît habituellement un formulaire XFA à son comportement : il s’ouvre dans le navigateur sur une seule page qui dit « Please wait… », ou Acrobat indique que le document ne peut pas être modifié, ou il y a un bouton Valider et une page de code-barres.',
    ],
    viewersTitle: 'Pourquoi affiche-t-il « Please wait… » ou une page blanche?',
    viewersIntro: 'Parce que le lecteur utilisé n’exécute pas XFA : il montre la page d’attente que l’auteur du formulaire a prévue pour ce cas. Le texte habituel, en anglais même sur les formulaires français, est « Please wait… If this message is not eventually replaced by the proper contents of the document, your PDF viewer may not be able to display this type of document. » Dans ce lecteur, il ne sera jamais remplacé. Le résultat dépend de l’endroit où vous ouvrez le fichier :',
    viewersHead: ['Où vous ouvrez le formulaire', 'Ce qui se passe'],
    viewers: [
        ['Chrome ou Edge (lecteur PDF intégré)', 'La page « Please wait… » ou un formulaire vide. Cliquer sur le lien du formulaire l’ouvre souvent ici, d’où le nombre de gens qui la voient.'],
        ['Aperçu de macOS, Safari, iPhone et iPad', 'La même page d’attente. Aperçu n’exécute pas XFA.'],
        ['Firefox', 'Les versions récentes affichent et remplissent bien des formulaires XFA, mais ceux conçus pour Adobe Reader (boutons de validation, codes-barres) ne sont pas garantis. IRCC demande Adobe Reader.'],
        ['Téléphones et tablettes', 'IRCC précise que les appareils mobiles comme les téléphones et tablettes ne peuvent pas être utilisés pour ses formulaires. Prenez un ordinateur.'],
        ['Adobe Acrobat Reader (Windows ou macOS)', 'Le formulaire s’ouvre, les champs se remplissent, les boutons et la validation fonctionnent. C’est le lecteur pour lequel ces formulaires sont faits, et il est gratuit.'],
        ['Adobe Acrobat Pro', 'Comme Reader pour remplir. L’outil Modifier le PDF ne change pas le contenu des pages d’un formulaire XFA dynamique.'],
    ],
    irccTitle: 'Comment ouvrir et remplir un formulaire d’IRCC (IMM 5257, IMM 5645 et autres)?',
    irccIntro: 'Le centre d’aide d’IRCC donne la même marche à suivre pour tous ses formulaires de demande en PDF. En résumé :',
    irccSteps: [
        'Installez Adobe Acrobat Reader sur un ordinateur Windows ou Mac. IRCC demande Adobe Reader 10 ou plus récent; la version gratuite actuelle convient.',
        'Faites un clic droit sur le lien du formulaire et enregistrez-le (ou utilisez le bouton de téléchargement) pour que le PDF arrive dans un dossier que vous retrouverez, au lieu de s’ouvrir dans le navigateur.',
        'Ouvrez le fichier enregistré depuis Adobe Reader (Fichier, Ouvrir), ou faites un clic droit dessus et choisissez Ouvrir avec, Adobe Acrobat Reader. Sous Windows, cochez « Toujours utiliser cette application »; sur Mac, passez par Lire les informations, Ouvrir avec, Tout modifier.',
        'Remplissez les champs et enregistrez souvent avec Fichier, Enregistrer. Reader conserve les données dans le formulaire.',
        'Si le formulaire a un bouton Valider, cliquez dessus à la fin. Il vérifie les champs obligatoires et produit la page de code-barres qu’IRCC utilise pour lire vos réponses.',
        'Téléversez le fichier enregistré et validé lui-même. Si les instructions d’IRCC demandent une signature, suivez-les pour ce formulaire.',
    ],
    irccNote: 'Si le formulaire refuse toujours de s’ouvrir dans Adobe Reader, le centre d’aide d’IRCC demande de lui signaler le problème technique plutôt que de le contourner. Ne retapez pas le formulaire dans un autre PDF : la version qu’IRCC lit est celle qui a ses propres champs et son code-barres.',
    editTitle: '« Ce formulaire XFA ne peut pas être modifié avec Adobe Acrobat » : que puis-je changer?',
    edit: [
        'Le message apparaît quand on utilise l’outil Modifier le PDF d’Acrobat sur un formulaire XFA. Acrobat vous laisse taper dans les champs, mais pas déplacer, supprimer ou réécrire les textes, lignes et cases du formulaire, parce qu’ils sont générés à partir du XML à chaque ouverture. Une modification du dessin serait annulée au prochain affichage.',
        'Voici ce que demande chaque type de changement :',
    ],
    editHead: ['Ce que vous voulez faire', 'Ce qui fonctionne'],
    editRows: [
        ['Remplir les champs, cocher des cases, choisir dans des listes', 'Adobe Acrobat Reader (gratuit) ou Acrobat Pro'],
        ['Changer la conception : ajouter un champ, déplacer une section, modifier un libellé', 'Seulement le concepteur de formulaires d’Adobe (autrefois LiveCycle Designer, aujourd’hui AEM Forms Designer). L’outil Modifier le PDF d’Acrobat Pro ne le peut pas.'],
        ['Corriger une faute dans une réponse', 'Cliquez sur le champ dans Reader et retapez; la réponse est une donnée, pas du texte de page'],
        ['Obtenir un PDF ordinaire à annoter, signer ou envoyer à quelqu’un', 'Imprimez le formulaire rempli en PDF (ci-dessous). La copie n’a plus de champs actifs.'],
        ['Soumettre un formulaire gouvernemental', 'Gardez le fichier d’origine, rempli et enregistré dans Reader. Ne le convertissez pas et ne le reconstruisez pas.'],
    ],
    flattenTitle: 'Comment transformer un formulaire XFA en PDF ordinaire?',
    flatten: [
        'Imprimer vers une imprimante PDF depuis Adobe Reader écrit ce qui est à l’écran dans un PDF ordinaire : les pages avec vos réponses, sans le XML, les scripts ni les champs. Cette copie s’ouvre partout, y compris dans les navigateurs, Aperçu et les téléphones, et n’importe quel outil PDF peut la traiter.',
        'C’est la bonne façon de faire pour garder une copie, envoyer une version lisible à quelqu’un ou annoter. C’est la mauvaise pour un formulaire à soumettre, puisque le résultat n’est plus un formulaire.',
    ],
    flattenSteps: [
        'Ouvrez le formulaire dans Adobe Acrobat Reader et remplissez-le.',
        'Choisissez Fichier, Imprimer.',
        'Windows : choisissez « Microsoft Print to PDF » (ou « Adobe PDF » si vous avez Acrobat Pro). Mac : cliquez sur le menu PDF au bas de la fenêtre d’impression et choisissez Enregistrer au format PDF.',
        'Imprimez, nommez le nouveau fichier et enregistrez-le à côté de l’original.',
    ],
    flattenWarn: 'Ne passez pas un formulaire gouvernemental à remplir et à soumettre dans un compresseur, un outil de fusion ou un convertisseur, y compris les nôtres. Réécrire le fichier peut faire disparaître la partie XFA, et il ne reste que la page « Please wait… ». Travaillez plutôt sur la copie imprimée.',
    faqTitle: 'Questions fréquentes',
    faq: [
        { q: 'Comment modifier un formulaire XFA dans Adobe Acrobat?', a: 'Vous pouvez remplir un formulaire XFA dans Acrobat ou dans Acrobat Reader (gratuit), mais l’outil Modifier le PDF ne change pas ses pages, générées à partir du XML à chaque ouverture. Changer la conception exige le concepteur de formulaires d’Adobe (AEM Forms Designer, autrefois LiveCycle Designer). Pour une copie fixe, imprimez le formulaire rempli en PDF.' },
        { q: 'Pourquoi mon formulaire d’IRCC affiche-t-il « Please wait… »?', a: 'Vous l’avez ouvert dans un lecteur qui n’exécute pas XFA, d’habitude le lecteur intégré du navigateur ou Aperçu sur Mac. Enregistrez le fichier sur votre ordinateur et ouvrez-le avec Adobe Acrobat Reader. IRCC demande Adobe Reader 10 ou plus récent et précise que ses formulaires ne se remplissent pas sur téléphone ou tablette.' },
        { q: 'Puis-je remplir un formulaire d’IRCC sur mon téléphone ou mon iPad?', a: 'IRCC indique que les appareils mobiles comme les iPad, les tablettes et les téléphones ne peuvent pas être utilisés pour ses formulaires PDF. Prenez un ordinateur Windows ou Mac avec Adobe Acrobat Reader; celui d’une bibliothèque ou d’un proche convient si vous enregistrez le fichier sur une clé USB.' },
        { q: 'Comment enlever le XFA d’un PDF?', a: 'Imprimez le formulaire rempli en PDF depuis Adobe Reader (Microsoft Print to PDF sous Windows, Enregistrer au format PDF sur Mac). La copie garde les pages et vos réponses, sans XFA, champs ni scripts. Faites-le seulement pour une copie à garder ou à partager, jamais pour un formulaire encore à soumettre.' },
        { q: 'Un formulaire XFA est-il la même chose qu’un PDF remplissable?', a: 'Les deux se remplissent, mais ils sont construits différemment. Un PDF remplissable ordinaire (AcroForm) contient ses pages et ses champs et fonctionne dans les navigateurs, Aperçu et la plupart des applications. Un formulaire XFA contient une description XML que le lecteur d’Adobe transforme en pages; il ne fonctionne pleinement que dans un logiciel Adobe.' },
        { q: 'pdfcanada.ca peut-il ouvrir ou convertir un formulaire XFA?', a: 'Non. Nos outils travaillent sur des PDF ordinaires et n’exécutent pas XFA : un formulaire XFA y affiche la même page d’attente. Remplissez les formulaires gouvernementaux XFA dans Adobe Acrobat Reader. Une fois une copie imprimée en PDF, vous pouvez la compresser, la fusionner ou la signer ici.' },
        { q: 'Pourquoi les ministères canadiens utilisent-ils encore XFA?', a: 'Bien des formulaires ont été conçus quand XFA était la technologie recommandée par Adobe pour les formulaires complexes avec validation et code-barres, et remplacer une grande collection de formulaires prend du temps. IRCC déplace de nombreuses demandes vers des portails en ligne, mais quand un formulaire PDF est encore exigé, il est souvent en XFA.' },
    ],
    source: 'Sources : centre d’aide d’IRCC, réponse sur les formulaires de demande PDF qui ne s’ouvrent pas (Adobe Reader 10 ou plus, pas de navigateur, pas d’appareil mobile); la norme ISO 32000-2 (PDF 2.0) rend XFA obsolète.',
};

const Table = ({ head, rows }: { head: Row; rows: Row[] }) => (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 my-4">
        <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                <tr><th className="px-4 py-3 font-bold">{head[0]}</th><th className="px-4 py-3 font-bold">{head[1]}</th></tr>
            </thead>
            <tbody>
                {rows.map(([a, b]) => (
                    <tr key={a} className="border-t border-gray-100 dark:border-gray-800 align-top">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{a}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{b}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2 id={id} className="scroll-mt-24 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">{children}</h2>
);

export const EditXfaPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const l = lang === 'fr' ? 'fr' : 'en';
    const t = l === 'fr' ? FR : EN;
    const home = l === 'fr' ? 'Accueil' : 'Home';
    const crumb = l === 'fr' ? 'Formulaire XFA' : 'XFA forms';
    const p = 'text-gray-700 dark:text-gray-300 leading-relaxed mb-4';

    return (
        <>
            <SEO
                title={t.h1}
                description={t.subtitle}
                canonicalPath={`/${l}/guides/edit-xfa-pdf`}
                faqs={t.faq}
                lang={lang}
                noOrganization
                ogType="article"
                datePublished="2024-04-01"
                dateModified="2026-11-25"
                steps={t.irccSteps.map((s, i) => ({ name: `${i + 1}`, text: s }))}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileWarning size={32} />}
                breadcrumbs={[
                    { name: home, href: `/${l}` },
                    { name: 'Guides', href: `/${l}/guides` },
                    { name: crumb, href: `/${l}/guides/edit-xfa-pdf` },
                ]}
            >
                <article className="max-w-3xl mx-auto">
                    <div className="rounded-3xl border border-canada-red/20 bg-canada-red/5 p-6 md:p-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-canada-red mb-2">{t.answerLabel}</p>
                        <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">{t.answer}</p>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{t.updated}</p>
                    </div>

                    <H2 id="what">{t.whatTitle}</H2>
                    {t.what.map((x) => <p key={x} className={p}>{x}</p>)}

                    <H2 id="please-wait">{t.viewersTitle}</H2>
                    <p className={p}>{t.viewersIntro}</p>
                    <Table head={t.viewersHead} rows={t.viewers} />

                    <H2 id="ircc">{t.irccTitle}</H2>
                    <p className={p}>{t.irccIntro}</p>
                    <ol className="list-decimal pl-6 space-y-3 mb-4 text-gray-700 dark:text-gray-300">
                        {t.irccSteps.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                    <p className={p}>{t.irccNote}</p>

                    <H2 id="cannot-be-edited">{t.editTitle}</H2>
                    {t.edit.map((x) => <p key={x} className={p}>{x}</p>)}
                    <Table head={t.editHead} rows={t.editRows} />

                    <H2 id="normal-pdf">{t.flattenTitle}</H2>
                    {t.flatten.map((x) => <p key={x} className={p}>{x}</p>)}
                    <ol className="list-decimal pl-6 space-y-3 mb-4 text-gray-700 dark:text-gray-300">
                        {t.flattenSteps.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                    <p className="rounded-2xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-4 text-sm text-amber-900 dark:text-amber-100 mb-4">{t.flattenWarn}</p>
                    <p className={p}>
                        {l === 'fr' ? 'Sur la copie imprimée seulement : ' : 'On the printed copy only: '}
                        <Link href={`/${l}/sign-pdf`} className="text-canada-red font-semibold underline underline-offset-2">{l === 'fr' ? 'signer un PDF' : 'sign the PDF'}</Link>
                        {', '}
                        <Link href={`/${l}/compress-pdf`} className="text-canada-red font-semibold underline underline-offset-2">{l === 'fr' ? 'compresser un PDF' : 'compress it'}</Link>
                        {l === 'fr' ? ' ou ' : ' or '}
                        <Link href={`/${l}/merge-pdf`} className="text-canada-red font-semibold underline underline-offset-2">{l === 'fr' ? 'le fusionner avec d’autres pièces' : 'merge it with other documents'}</Link>.
                    </p>

                    <H2 id="faq">{t.faqTitle}</H2>
                    <div className="space-y-4">
                        {t.faq.map((f) => (
                            <div key={f.q} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">{f.q}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">{t.source}</p>
                    <div className="mt-10"><AuthorBio lang={lang} /></div>
                </article>
            </PageLayout>
        </>
    );
};
