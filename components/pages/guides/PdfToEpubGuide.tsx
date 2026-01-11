'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, CheckCircle, Shield, Zap, ArrowRight, Tablet } from 'lucide-react';
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
    fr: {
        seo: {
            title: `Convertir PDF en EPUB | Guide E-Reader ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Rendez vos PDF fluides et faciles à lire sur Kindle ou Kobo. Notre guide ${CURRENT_YEAR} vous montre comment convertir PDF en EPUB sans jamais télécharger vos fichiers. Conversion gratuite et sécurisée.`
        },
        h1: "Convertir PDF en EPUB",
        subtitle: "Transformez vos PDF en ebooks pour liseuses",
        intro: (
            <>
                Vous souhaitez lire vos documents PDF sur votre liseuse Kindle ou Kobo? Notre convertisseur gratuit transforme vos fichiers PDF en format EPUB, le standard des livres numériques. Profitez d'une meilleure expérience de lecture avec un texte qui s'adapte automatiquement à la taille de votre écran.
            </>
        ),
        whyTitle: "Pourquoi convertir PDF en EPUB?",
        whyReasons: [
            "Lecture confortable sur liseuses (Kindle, Kobo, etc.)",
            "Texte redimensionnable selon vos préférences",
            "Navigation facile entre les chapitres",
            "Moins fatigant pour les yeux",
            "Synchronisation des signets entre appareils"
        ],
        howTitle: "Comment convertir un PDF en EPUB?",
        steps: [
            {
                title: "Choisissez votre fichier PDF",
                desc: (
                    <>
                        Sélectionnez le document PDF que vous souhaitez transformer en ebook. Notre outil accepte tous les types de PDF textuels.
                    </>
                )
            },
            {
                title: "Analyse intelligente du contenu",
                desc: (
                    <>
                        Notre système analyse la structure de votre document: paragraphes, titres, images. La conversion se fait entièrement dans votre navigateur.
                    </>
                )
            },
            {
                title: "Obtenez votre EPUB",
                desc: (
                    <>
                        Téléchargez votre fichier EPUB et transférez-le sur votre liseuse via USB ou par courriel. Bonne lecture!
                    </>
                )
            }
        ],
        securityTitle: "Vos documents restent privés",
        securityText: (
            <>
                La confidentialité de vos documents est notre priorité. Tout le traitement s'effectue localement sur votre appareil. Aucun fichier n'est envoyé sur nos serveurs. Vos PDF personnels, professionnels ou confidentiels restent entre vos mains.
            </>
        ),
        compatTitle: "Compatible avec toutes les liseuses",
        compatText: (
            <>
                Le format EPUB est le standard universel des ebooks. Votre fichier converti fonctionnera sur:
            </>
        ),
        compatList: ["Amazon Kindle (avec conversion Calibre)", "Kobo", "Apple Books", "Google Play Books", "Tablettes Android", "Tous les lecteurs EPUB"],
        sections: [
            {
                id: "pdf-vs-epub",
                title: "PDF vs EPUB : Comprendre les différences fondamentales",
                content: `Avant de convertir vos documents, il est essentiel de comprendre les différences entre ces deux formats omniprésents.

**PDF (Portable Document Format)** :
- **Mise en page fixe** : Chaque page est figée comme une photo. Le texte, les images et les marges restent identiques peu importe l'appareil.
- **Idéal pour** : Documents professionnels (factures, contrats), formulaires gouvernementaux CRA/IRCC, rapports avec graphiques, livres avec mise en page complexe.
- **Problème sur liseuses** : Sur un petit écran (Kindle Paperwhite 6 pouces), vous devez constamment zoomer/dézoomer, faire défiler horizontalement. Lecture pénible pour les longs textes.
- **Taille de fichier** : Souvent plus volumineuse, surtout avec images haute résolution.

**EPUB (Electronic Publication)** :
- **Format fluide (reflowable)** : Le texte s'adapte automatiquement à la taille de l'écran. Changez la police, la taille des caractères, les marges — le contenu s'ajuste.
- **Idéal pour** : Romans, essais, documentation technique, manuels scolaires, tout contenu textuel linéaire.
- **Avantages liseuses** : Lecture confortable sans zoom. Ajustez la taille du texte selon votre vue. Navigation par chapitres via table des matières.
- **Accessibilité** : Compatible avec les lecteurs d'écran (NVDA, JAWS) pour utilisateurs malvoyants.
- **Versions** : EPUB 2.0 (ancien, largement supporté), EPUB 3.0 (support multimédia, MathML pour formules mathématiques).

**Quand convertir PDF en EPUB?**
- Vous lisez souvent des ebooks sur Kindle/Kobo/Nook
- Vous avez des PDF de livres ou rapports sans mise en page complexe
- Vous voulez ajuster la taille du texte (presbytie, fatigue oculaire)
- Vous cherchez une meilleure autonomie de batterie (e-ink consomme moins que LCD pour afficher du texte)
- Vous voulez réduire la taille de fichier pour économiser l'espace de stockage

**Quand garder le PDF?**
- Documents avec tableaux complexes, graphiques, diagrammes
- Formulaires gouvernementaux à remplir (T4, IMM 5645, etc.)
- Contrats nécessitant signatures numériques
- Magazines, bandes dessinées avec mise en page artistique
- Tout document où la présentation visuelle exacte est cruciale

**Cas d'usage canadien** : Beaucoup de Canadiens convertissent des PDF de bibliothèques publiques (prêt numérique Pretnumerique.ca, OverDrive) protégés par Adobe DRM en EPUB pour lecture sur Kobo (compagnie canadienne Rakuten Kobo basée à Toronto). Notez que contourner les DRM viole souvent les conditions d'utilisation.`
            },
            {
                id: "conversion-process",
                title: "Comment fonctionne la conversion PDF vers EPUB (Analyse technique)",
                content: `Notre convertisseur effectue une transformation sophistiquée en plusieurs étapes, entièrement dans votre navigateur via WebAssembly.

**Étape 1 : Extraction du contenu PDF**
- **Parsing du PDF** : Lecture de la structure du fichier PDF (objets, flux compressés, dictionnaires).
- **Extraction de texte** : Récupération du texte sélectionnable. Pour les PDF natifs (créés depuis Word/LaTeX), le texte est directement accessible. Pour les PDF scannés, l'OCR est nécessaire (voir notre outil OCR PDF séparé).
- **Détection de structure** : Analyse des styles de police pour identifier les titres (H1, H2, H3), paragraphes, listes, citations.
- **Extraction d'images** : Récupération des images intégrées (JPEG, PNG) avec métadonnées (résolution, espace colorimétrique).

**Étape 2 : Analyse de la mise en page**
- **Détection de colonnes** : Identification des mises en page multi-colonnes (difficile à convertir en EPUB fluide).
- **Ordre de lecture** : Détermination de l'ordre logique du contenu (parfois les PDF ont du texte dans un ordre visuel différent de l'ordre de lecture naturel).
- **En-têtes et pieds de page** : Suppression des numéros de page répétitifs, en-têtes et pieds de page qui n'ont plus de sens dans un format fluide.

**Étape 3 : Création de la structure EPUB**
- **Génération de HTML** : Conversion du contenu en XHTML 1.1 (EPUB 2) ou HTML5 (EPUB 3).
- **Hiérarchie sémantique** : Transformation des styles en balises HTML sémantiques (\`<h1>\`, \`<h2>\`, \`<p>\`, \`<blockquote>\`, \`<ol>\`, \`<ul>\`).
- **CSS intégré** : Création de feuilles de style CSS pour préserver les styles de base (gras, italique, taille relative).
- **Table des matières (TOC)** : Génération automatique du fichier \`toc.ncx\` (EPUB 2) ou \`nav.xhtml\` (EPUB 3) basée sur les titres détectés.

**Étape 4 : Optimisation des images**
- **Redimensionnement** : Réduction des images à une résolution appropriée pour liseuses (max 1200x1600px pour la plupart des appareils).
- **Compression** : Réduction de la taille de fichier tout en préservant la qualité visuelle (JPEG qualité 85, PNG avec optimisation).
- **Conversion de format** : Transformation des formats exotiques en JPEG/PNG standards.

**Étape 5 : Assemblage du conteneur EPUB**
- **Structure de dossiers** : Création de \`META-INF/\`, \`OEBPS/\` avec fichiers HTML, CSS, images.
- **Fichier OPF (Package)** : Génération du manifeste listant tous les fichiers, spine (ordre de lecture), métadonnées (titre, auteur, langue, date).
- **Compression ZIP** : L'EPUB est essentiellement un fichier ZIP avec extension \`.epub\`. Le fichier \`mimetype\` doit être non compressé et en premier.

**Étape 6 : Validation et correction**
- **Validation EPUB** : Vérification de la conformité avec les spécifications IDPF (International Digital Publishing Forum).
- **Correction d'erreurs courantes** : Réparation des liens brisés, balises HTML mal fermées, références d'images manquantes.
- **Optimisation finale** : Réduction de la taille du fichier final.

**Défis techniques spécifiques** :
- **PDF avec colonnes multiples** : Les journaux, magazines, documents académiques en 2-3 colonnes sont difficiles à linéariser. Notre algorithme détecte les colonnes et essaie de reconstruire l'ordre de lecture naturel.
- **Formules mathématiques** : Les équations rendues en images dans le PDF peuvent être converties en images dans l'EPUB, mais pas en MathML éditable (sauf pour EPUB 3 avec reconnaissance avancée).
- **Notes de bas de page** : Transformation des notes de bas de page PDF en liens hypertexte EPUB vers les notes de fin ou en popups.
- **PDF numérisés (scans)** : Nécessitent OCR préalable. Les résultats dépendent de la qualité du scan (résolution, contraste, inclinaison).

**Traitement local via WebAssembly** :
Contrairement aux convertisseurs en ligne traditionnels (comme Zamzar, Online-Convert, Convertio) qui téléchargent vos fichiers sur leurs serveurs, pdfcanada.ca utilise WebAssembly (Wasm) compilé depuis des bibliothèques open-source (pdf.js de Mozilla, epub-gen). Tout le traitement se déroule dans votre navigateur Chrome/Firefox/Safari/Edge. Aucune transmission de données. Conforme à PIPEDA (loi canadienne sur la protection des renseignements personnels).`
            },
            {
                id: "ereader-compatibility",
                title: "Guide de compatibilité des liseuses et applications de lecture",
                content: `Votre fichier EPUB fonctionnera-t-il sur votre appareil? Voici un guide complet des liseuses et applications populaires au Canada.

**Amazon Kindle (É-U/Canada)** :
- **Format natif** : MOBI, AZW3, KFX (formats propriétaires Amazon).
- **Support EPUB** : ❌ Les Kindle ne lisent PAS directement les EPUB. Vous devez convertir EPUB → MOBI/AZW3 via Calibre (logiciel gratuit).
- **Méthode** : Convertissez votre PDF en EPUB avec pdfcanada.ca, puis utilisez Calibre pour convertir EPUB → AZW3. Transférez via USB ou envoyez par courriel à votre adresse Kindle (@kindle.com).
- **Modèles populaires au Canada** : Kindle Paperwhite, Kindle Oasis, Kindle Scribe.
- **Alternative** : Envoyez le PDF original par courriel à Amazon (conversions@kindle.com) — Amazon convertira automatiquement, mais avec moins de contrôle sur la qualité.

**Kobo (Canada - compagnie basée à Toronto)** :
- **Format natif** : ✅ EPUB, PDF.
- **Support EPUB** : Excellent. Kobo est l'une des meilleures liseuses pour EPUB (support EPUB 3, lecture fluide, ajustement avancé des polices).
- **Transfert** : USB (glisser-déposer), Kobo Desktop, Adobe Digital Editions pour livres protégés par DRM.
- **Modèles populaires** : Kobo Clara 2E, Kobo Libra 2, Kobo Sage, Kobo Elipsa 2E.
- **Avantage canadien** : Intégration avec bibliothèques publiques canadiennes (Pretnumerique.ca). Support du français excellent.

**Apple Books (iOS/macOS)** :
- **Format natif** : ✅ EPUB, PDF.
- **Support EPUB** : Excellent (EPUB 2 et 3, support audio/vidéo dans EPUB 3).
- **Transfert** : Glisser-déposer dans Apple Books (macOS), AirDrop, ou via iCloud Drive.
- **Synchronisation** : Signets, annotations synchronisées entre iPhone, iPad, Mac via iCloud.
- **Accessibilité** : VoiceOver (lecteur d'écran) intégré pour utilisateurs malvoyants.

**Google Play Books (Android/iOS/Web)** :
- **Format natif** : ✅ EPUB, PDF.
- **Support EPUB** : Très bon. Lecture dans navigateur ou applications mobiles.
- **Transfert** : Téléchargement dans la bibliothèque Play Books via interface web (play.google.com/books/uploads).
- **Limite** : 100 MB par fichier, 1000 livres dans votre bibliothèque.
- **Synchronisation** : Multi-appareils (Android phone, tablette, Chromebook, ordinateur).

**Barnes & Noble Nook (É-U, peu commun au Canada)** :
- **Format natif** : ✅ EPUB, PDF.
- **Support EPUB** : Bon (Nook GlowLight, Nook Tablet).
- **Transfert** : USB, application Nook pour Android/iOS.

**PocketBook (Europe/Canada)** :
- **Format natif** : ✅ EPUB, PDF, MOBI, AZW3, FB2, et 17 autres formats (!).
- **Support EPUB** : Excellent. PocketBook supporte presque tous les formats sans conversion.
- **Modèles** : PocketBook Touch HD 3, PocketBook InkPad.

**Onyx Boox (E-ink Android)** :
- **Format natif** : ✅ EPUB, PDF, MOBI, AZW3, CBR, CBZ, et plus.
- **Support EPUB** : Excellent. Appareils Android complets, installable Google Play Store (Kindle, Kobo, Libby apps).
- **Modèles** : Boox Nova Air, Boox Note Air, Boox Tab Ultra.
- **Avantage** : Flexibilité maximale (peut lire n'importe quel format + installer n'importe quelle app Android).

**Applications de lecture (smartphones/tablettes)** :

| Application | Plateformes | Support EPUB | Notes |
|-------------|-------------|--------------|-------|
| **Calibre** | Windows, macOS, Linux | ✅ Excellent | Bibliothèque complète + conversion formats. Indispensable pour gérer votre collection. |
| **Adobe Digital Editions** | Windows, macOS, iOS, Android | ✅ Excellent | Nécessaire pour livres Adobe DRM (bibliothèques publiques). |
| **Libby** | iOS, Android | ✅ (bibliothèques) | Emprunt de livres depuis bibliothèques canadiennes. EPUB et audiolivres. |
| **Moon+ Reader** | Android | ✅ Excellent | Très personnalisable. Thèmes, polices, suivi de lecture. |
| **FBReader** | Android, iOS, Linux | ✅ Bon | Open-source. Support réseau (lectures depuis cloud). |
| **Aldiko** | Android, iOS | ✅ Bon | Interface simple. Support Adobe DRM. |
| **ReadEra** | Android | ✅ Très bon | Gratuit sans pub. Support multi-formats (EPUB, PDF, MOBI, DOC). |

**Recommandations pour Canadiens** :
- **Budget limité** : Kobo Clara 2E (~150 CAD). Excellente liseuse EPUB, compagnie canadienne, intégration bibliothèques publiques.
- **Écosystème Apple** : Apple Books sur iPad/iPhone. Gratuit si vous avez déjà un appareil iOS.
- **Flexibilité maximale** : Onyx Boox (250-500 CAD). Appareil Android complet, tous les formats, toutes les apps.
- **Déjà utilisateur Amazon** : Gardez votre Kindle, utilisez Calibre pour convertir EPUB → AZW3.
- **Lecture sur ordinateur** : Calibre (gratuit, toutes plateformes). Bibliothèque complète + lecteur intégré.

**DRM et livres protégés** :
Beaucoup de livres empruntés depuis bibliothèques publiques (Pretnumerique.ca, OverDrive) sont protégés par **Adobe DRM** ou **LCP (Lightweight Content Protection)**. Ces fichiers EPUB ne peuvent être ouverts que dans des applications autorisées (Adobe Digital Editions, Kobo, etc.) et ne peuvent pas être convertis. Respectez les droits d'auteur et les conditions d'utilisation — la Loi sur le droit d'auteur du Canada (C-11) protège les œuvres numériques.`
            },
            {
                id: "scanned-pdfs-ocr",
                title: "Convertir des PDF scannés : Guide OCR et bonnes pratiques",
                content: `Les PDF scannés (images de pages) nécessitent une étape supplémentaire : la reconnaissance optique de caractères (OCR).

**Qu'est-ce qu'un PDF scanné?**
- Document papier numérisé avec un scanner ou appareil photo
- Chaque page est une image (JPEG/PNG) sans texte sélectionnable
- Exemples : vieux livres, documents d'archives, formulaires papier, notes manuscrites (si scan)
- **Test simple** : Essayez de sélectionner du texte avec votre souris. Si impossible → PDF scanné.

**Pourquoi l'OCR est nécessaire?**
Sans OCR, votre EPUB contiendra seulement des images de pages — exactement le problème que vous essayez de résoudre! L'OCR transforme les images de texte en texte réel sélectionnable, cherchable, redimensionnable.

**Notre processus OCR (disponible séparément)** :
1. **Prétraitement d'image** : Amélioration du contraste, correction de l'inclinaison, suppression du bruit, binarisation (conversion en noir et blanc).
2. **Détection de mise en page** : Identification des zones de texte, images, tableaux.
3. **Reconnaissance de caractères** : Utilisation de Tesseract OCR (open-source de Google) avec modèles de langue français/anglais.
4. **Post-traitement** : Correction d'erreurs courantes (l vs I, 0 vs O), vérification orthographique.
5. **Génération de PDF texte** : Création d'un PDF avec couche de texte invisible superposée aux images (searchable PDF).

**Qualité OCR : facteurs importants** :
- **Résolution du scan** : Minimum 300 DPI (dots per inch) recommandé. 600 DPI pour textes petits. Les scans à 150 DPI donnent de mauvais résultats.
- **Contraste** : Texte noir sur fond blanc propre. Jaunissement, taches, ombres réduisent la précision.
- **Inclinaison** : Pages droites. Une inclinaison de >5° dégrade sérieusement la reconnaissance.
- **Police de caractères** : Polices standard (Times New Roman, Arial) fonctionnent mieux que les polices manuscrites ou décoratives.
- **Langue** : Configurez la langue correcte (français canadien pour documents du Québec, anglais pour autres provinces).

**Précision attendue** :
- **Livre imprimé propre (300+ DPI)** : 95-99% de précision. Quelques erreurs mineures.
- **Document dactylographié ancien** : 85-95%. Erreurs fréquentes sur caractères usés.
- **Photocopie de photocopie** : 70-85%. Beaucoup d'erreurs, révision manuelle nécessaire.
- **Notes manuscrites** : 30-60% (très variable). OCR standard fonctionne mal. Nécessite OCR manuscrit spécialisé (Google Cloud Vision API, Microsoft Azure OCR).

**Workflow recommandé pour PDF scannés** :
1. **Scannez ou obtenez votre PDF scanné**
2. **Utilisez notre outil OCR PDF** (pdfcanada.ca/ocr-pdf) pour créer un PDF avec texte sélectionnable
3. **Vérifiez la qualité OCR** : Ouvrez le PDF, sélectionnez du texte, vérifiez les erreurs
4. **Corrections manuelles** (optionnel) : Utilisez Adobe Acrobat ou un éditeur de texte pour corriger les erreurs majeures
5. **Convertissez en EPUB** avec notre outil PDF vers EPUB

**Alternatives pour livres scannés** :
- **Bibliothèque et Archives Canada** (bac-lac.gc.ca) : Beaucoup de livres canadiens patrimoniaux déjà numérisés et OCRisés.
- **Internet Archive** (archive.org) : Millions de livres scannés avec OCR. Cherchez votre livre avant de scanner.
- **Google Books** : Prévisualisation de livres, certains disponibles en texte complet.
- **Project Gutenberg** (gutenberg.org) : 70,000+ livres du domaine public en EPUB/MOBI/TXT gratuits (œuvres publiées avant 1928 généralement).

**Considérations légales canadiennes** :
- **Livres sous droit d'auteur** : Scanner un livre pour usage personnel est généralement accepté (exception d'utilisation équitable), mais distribuer les scans viole le droit d'auteur.
- **Documents gouvernementaux** : Documents du gouvernement canadien (fédéral) ne sont généralement pas protégés par droit d'auteur et peuvent être librement reproduits (Loi sur le droit d'auteur, article 12).
- **Thèses et mémoires** : Consultez les politiques de votre université. Beaucoup de thèses canadiennes sont disponibles via Thèses Canada (collectionscanada.gc.ca).

**Outils OCR alternatifs (si vous préférez)** :
- **Adobe Acrobat Pro** (payant, ~240 CAD/an) : OCR excellent, correction de scans, édition avancée.
- **ABBYY FineReader** (payant, ~120 CAD) : Probablement le meilleur OCR commercial. Support 190+ langues.
- **Tesseract (ligne de commande)** (gratuit, open-source) : Moteur OCR que nous utilisons, mais interface technique.
- **Google Drive** (gratuit avec compte Google) : Téléchargez un PDF scanné, ouvrez avec Google Docs → OCR automatique. Fonctionne étonnamment bien pour documents simples.

**Conseil pour étudiants canadiens** :
Beaucoup d'étudiants scannent leurs manuels scolaires pour lecture sur tablette/liseuse. Vérifiez d'abord si votre bibliothèque universitaire offre des versions numériques (beaucoup ont des licences ebook). Respectez les politiques de propriété intellectuelle de votre institution.`
            },
            {
                id: "use-cases",
                title: "Cas d'usage réels : Quand et pourquoi convertir PDF en EPUB",
                content: `Découvrez comment différents utilisateurs canadiens bénéficient de la conversion PDF vers EPUB.

**Lecture de loisir et ebooks** :
- **Romans et essais téléchargés en PDF** : Vous avez téléchargé un livre du domaine public (Project Gutenberg, Internet Archive) en PDF. Convertissez en EPUB pour lecture confortable sur Kobo ou Kindle.
- **Livres achetés en PDF** : Certains éditeurs indépendants vendent des livres en PDF (moins courant). Conversion en EPUB pour intégration dans votre bibliothèque Apple Books/Google Play Books.
- **Fanfiction et écrits amateurs** : Beaucoup d'auteurs amateurs partagent leurs écrits en PDF. Convertissez en EPUB pour lecture sur liseuse avec éclairage e-ink (moins de fatigue oculaire que smartphone).

**Étudiants et académiques** :
- **Articles de recherche et papers** : Articles scientifiques téléchargés depuis PubMed, arXiv, JSTOR en PDF. Convertissez en EPUB pour lecture annotée sur tablette (iPad + Apple Pencil).
- **Thèses et mémoires** : Thèses de 200-300 pages difficiles à lire en PDF sur écran. EPUB permet ajustement de taille de texte, lecture confortable sur liseuse.
- **Notes de cours** : Professeurs qui partagent des notes en PDF. Convertissez en EPUB pour révisions sur liseuse (batterie de 6 semaines vs 8 heures pour tablette).
- **Manuels scolaires** : Manuels en PDF peuvent être lourds (100+ MB). EPUB optimisé réduit la taille, accélère le chargement.

**Professionnels et entreprises** :
- **Rapports et documentation** : Rapports annuels, white papers, guides techniques en PDF. Conversion en EPUB pour lecture en déplacement (train, avion).
- **Formations et e-learning** : Matériel de formation d'entreprise distribué en PDF. EPUB permet lecture sur tout appareil, meilleure accessibilité.
- **Livres professionnels** : Livres de développement professionnel achetés en PDF (O'Reilly, Manning parfois). EPUB pour bibliothèque unifiée.

**Accessibilité et besoins spéciaux** :
- **Utilisateurs malvoyants** : EPUB se couple mieux avec les lecteurs d'écran (NVDA, JAWS, VoiceOver) que les PDF. Texte fluide permet grossissement important sans scroll horizontal.
- **Dyslexie** : Polices spécialisées (OpenDyslexic) facilement appliquées aux EPUB. Ajustement espacement lettres/lignes.
- **Personnes âgées** : Texte très grand (24-30pt) lisible sur liseuse EPUB. PDF nécessite zoom constant.

**Voyageurs et mobilité** :
- **Guides de voyage et documentation** : Guides Lonely Planet, Routard parfois en PDF. EPUB pour lecture sur smartphone hors-ligne (mode avion).
- **Manuels d'utilisation** : Manuels d'appareils (caméras, drones) en PDF. EPUB pour consultation rapide sur téléphone.

**Bibliophiles et collectionneurs** :
- **Gestion de bibliothèque numérique** : Uniformisation de votre collection en EPUB. Calibre permet gestion centralisée, métadonnées, synchronisation multi-appareils.
- **Archivage familial** : Numérisation de livres de recettes familiaux, journaux personnels scannés. Conversion en EPUB pour partage avec membres de famille sur leurs liseuses préférées.

**Cas d'usage canadien spécifique** :
- **Livres français du Québec** : Œuvres québécoises en PDF (éditions numériques indépendantes). Conversion en EPUB pour lecture sur Kobo (excellent support français).
- **Documents gouvernementaux** : Rapports de Statistique Canada, documentation de Service Canada en PDF. Conversion en EPUB pour lecture extensive (rapports de 400+ pages).
- **Littérature autochtone** : Récits et histoires des Premières Nations parfois distribués en PDF. EPUB pour préservation et accessibilité.
- **Prêt numérique bibliothèques** : Certains livres de Pretnumerique.ca en PDF. Conversion en EPUB pour meilleure expérience (si permis par DRM).

**Réduction de taille de fichier** :
- **PDF volumineux (50-200 MB)** : Livres avec images haute résolution. Conversion en EPUB avec optimisation d'images peut réduire à 10-30 MB.
- **Stockage limité** : Liseuses avec 4-8 GB de stockage. EPUB permet stocker 2-3x plus de livres que PDF.

**Synchronisation multi-appareils** :
- **Lecture sur plusieurs appareils** : Commencez lecture sur Kobo le soir, continuez sur iPhone le lendemain dans le métro. EPUB permet synchronisation de position (via Kobo Cloud, Apple iCloud).
- **Annotations et signets** : Notes synchronisées entre appareils (Apple Books, Google Play Books).

**Avantages environnementaux** :
- **Liseuses e-ink basse consommation** : Kindle/Kobo avec EPUB durent 4-6 semaines par charge vs 1-2 jours pour tablette LCD lisant des PDF.
- **Réduction d'impression** : PDF lisibles sur liseuse = moins d'impression papier. Économies d'encre, papier, impact environnemental.

**Ce qui NE fonctionne PAS bien en EPUB** :
- ❌ Magazines avec mise en page complexe → Gardez en PDF ou utilisez applications dédiées (Magzter, PressReader)
- ❌ Bandes dessinées / comics → Utilisez CBR/CBZ ou applications comic (Comixology, YACReader)
- ❌ Livres de photographie → Layout fixe crucial, gardez en PDF
- ❌ Partitions musicales → PDF indispensable pour mise en page précise
- ❌ Documents techniques avec diagrammes complexes → Souvent mieux en PDF`
            },
            {
                id: "best-practices",
                title: "Meilleures pratiques pour une conversion PDF vers EPUB de haute qualité",
                content: `Optimisez vos conversions avec ces conseils d'experts pour obtenir des EPUB parfaits.

**Avant la conversion : Préparez votre PDF**

1. **Vérifiez la sélectabilité du texte** :
   - Ouvrez le PDF dans Adobe Acrobat Reader ou navigateur
   - Essayez de sélectionner du texte avec la souris
   - Si impossible → PDF scanné, utilisez OCR d'abord

2. **Inspectez la structure du document** :
   - Les PDF avec titres de section bien marqués donnent de meilleurs résultats
   - Vérifiez les signets (bookmarks) du PDF — ils deviennent la table des matières EPUB
   - Documents bien structurés (créés depuis Word/LaTeX avec styles de titre) convertissent mieux

3. **Simplifiez les mises en page complexes** :
   - Les colonnes multiples, encadrés, sidebars peuvent causer des problèmes d'ordre de lecture
   - Si possible, obtenez une version "single column" du document original

4. **Vérifiez les images** :
   - Images haute résolution (>2000px) augmentent la taille de fichier
   - Considérez compresser le PDF avant conversion (notre outil Compress PDF)

**Pendant la conversion : Configuration optimale**

5. **Choisissez les bonnes options** (si disponibles dans l'outil) :
   - **Détection de TOC** : Activez pour génération automatique de table des matières
   - **Préservation d'images** : Oui pour livres illustrés, non pour texte pur (réduit taille)
   - **Optimisation de police** : Utilise polices système de la liseuse (plus rapide, moins d'espace)

6. **Taille de fichier cible** :
   - Visez <10 MB pour la plupart des liseuses (compatibilité maximale)
   - Romans textuels : généralement 500 KB - 2 MB
   - Livres techniques avec images : 5-15 MB
   - Au-delà de 50 MB : certaines liseuses peuvent avoir des problèmes de performance

**Après la conversion : Validation et correction**

7. **Testez le fichier EPUB** :
   - Ouvrez dans Calibre (ebook viewer intégré) avant transfert vers liseuse
   - Vérifiez table des matières : Fonctionne-t-elle? Chapitres corrects?
   - Parcourez quelques pages : Ordre de texte logique? Images bien placées?
   - Vérifiez les caractères spéciaux : Accents français (é, è, ê, à, ù), guillemets («»), œ, æ

8. **Validez avec EPUBCheck** :
   - Outil officiel IDPF pour vérifier conformité aux standards
   - Intégré dans Calibre : Clic droit sur livre → Edit book → Check book
   - Corrige erreurs courantes (balises mal fermées, liens brisés)

9. **Éditez les métadonnées** :
   - Utilisez Calibre pour ajouter/corriger : Titre, Auteur, Date de publication, Éditeur, ISBN
   - Ajoutez une couverture : Clic droit → Edit metadata → Download cover
   - Étiquettes (tags) pour organisation : Fiction, Non-fiction, Technique, Roman, Essai

10. **Optimisez pour votre liseuse spécifique** :

**Pour Kindle (après conversion EPUB → AZW3 via Calibre)** :
- Utilisez le profil "Kindle" dans Calibre lors de la conversion
- Activez "Remove spacing between paragraphs" si votre livre a trop d'espaces
- Désactivez "Insert page breaks before" si vous voulez un flux continu

**Pour Kobo** :
- Kobo supporte EPUB 3, CSS avancé, polices personnalisées
- Ajoutez des métadonnées Kobo (série, numéro dans série) pour meilleure organisation
- Utilisez Kobo Utilities (plugin Calibre) pour optimisations spécifiques

**Pour Apple Books** :
- Apple supporte EPUB Fixed Layout pour livres illustrés (alternative à EPUB fluide)
- Ajoutez métadonnées iBooks Author si créé dans iBooks Author
- Testez sur iPhone ET iPad (rendu parfois différent)

**Résolution des problèmes courants**

11. **Images manquantes ou mal placées** :
   - Ouvrez l'EPUB avec Calibre Edit Book (Edit book)
   - Vérifiez le dossier "Images" — toutes présentes?
   - Inspectez le HTML pour liens d'images cassés : \`<img src="images/fig1.jpg">\`

12. **Ordre de lecture chaotique** :
   - Problème fréquent avec PDF multi-colonnes ou mises en page complexes
   - Solution : Repartir du document source (Word, LaTeX) si possible
   - Ou éditer manuellement l'EPUB dans Calibre (déplacer paragraphes dans le HTML)

13. **Table des matières manquante ou incorrecte** :
   - Calibre → Edit book → Tools → Table of Contents → Edit Table of Contents
   - Ajoutez manuellement les entrées en pointant vers les balises de titre appropriées

14. **Caractères bizarres (?, □, �)** :
   - Problème d'encodage. Le PDF utilisait une police personnalisée avec caractères non-standard
   - Solution : Correction manuelle dans Calibre ou retour au document source

15. **Fichier EPUB trop volumineux** :
   - Calibre → Edit book → Tools → Compress Images
   - Réduisez qualité JPEG à 75-80 (peu de perte visuelle)
   - Redimensionnez images >1200px à 1200px max

**Conseils avancés pour utilisateurs techniques**

16. **Édition directe de l'EPUB** :
   - EPUB = fichier ZIP. Renommez \`.epub\` en \`.zip\`, décompressez
   - Éditez les fichiers XHTML/HTML avec éditeur de code (VS Code, Notepad++)
   - Modifiez CSS pour styles personnalisés
   - Re-zippez (mimetype d'abord, non compressé!) et renommez en \`.epub\`

17. **Utilisez Sigil (éditeur EPUB open-source)** :
   - Alternative à Calibre pour édition EPUB
   - Interface WYSIWYG + code source
   - Plugins pour validation, optimisation, ajout de métadonnées

18. **Scripts de conversion en lot** :
   - Calibre supporte conversion en ligne de commande : \`ebook-convert input.pdf output.epub\`
   - Pour convertir 100 PDF en EPUB : script bash/Python avec boucle

**Qualité vs Vitesse : Compromis**

19. **Conversion rapide (1-5 secondes)** :
   - Texte extrait directement, minimal reflow, images non optimisées
   - Bon pour : Lecture rapide, documents temporaires

20. **Conversion haute qualité (30-60 secondes)** :
   - Analyse approfondie de structure, détection de TOC, optimisation d'images, validation
   - Bon pour : Livres à conserver, partage, archivage

**Conseil pour perfectionnistes** :
Si vous voulez un EPUB parfait pour un livre favori, considérez :
- Partir du document source (Word, LaTeX, Markdown) plutôt que PDF
- Utiliser Pandoc (outil ligne de commande) pour conversion Markdown → EPUB (contrôle maximal)
- Ou services professionnels de conversion (Reedsy, Vellum) si vous êtes auteur/éditeur

**Alternatives à la conversion automatique** :
Pour des livres importants (publication, archivage à long terme), la conversion manuelle donne de meilleurs résultats :
1. Extraire le texte du PDF (copier-coller dans un éditeur)
2. Formater en Markdown ou HTML
3. Convertir en EPUB avec Pandoc ou Calibre depuis HTML
4. Éditer finement dans Sigil ou Calibre

Mais pour 95% des cas d'usage (lecture personnelle), notre convertisseur automatique suffit largement!`
            },
            {
                id: "privacy-security",
                title: "Confidentialité et sécurité : Pourquoi le traitement local est crucial",
                content: `La conversion PDF vers EPUB implique souvent des documents personnels, professionnels ou sensibles. Comprenez pourquoi notre approche locale protège votre vie privée.

**Le problème avec les convertisseurs en ligne traditionnels**

La plupart des convertisseurs PDF en ligne (Zamzar, Online-Convert, PDF2Go, CloudConvert, Convertio, etc.) fonctionnent selon ce modèle :
1. **Vous téléchargez votre fichier** sur leurs serveurs (Amazon AWS, Google Cloud, Microsoft Azure)
2. **Leurs serveurs effectuent la conversion** (souvent dans un datacenter aux États-Unis ou en Europe)
3. **Vous téléchargez le fichier converti** depuis leurs serveurs
4. **Ils "promettent" de supprimer vos fichiers** après quelques heures (1h, 24h, 7 jours)

**Risques de ce modèle** :
- ❌ **Interception durant le transfert** : Même avec HTTPS, métadonnées exposées (taille de fichier, heure, adresse IP)
- ❌ **Accès par employés** : Administrateurs système peuvent techniquement accéder à tous les fichiers téléchargés
- ❌ **Violations de données** : Historique de breaches : Dropbox (2012, 68M comptes), Adobe (2013, 38M utilisateurs), Equifax (2017, 147M personnes)
- ❌ **Mandats gouvernementaux** : Serveurs aux É-U soumis au CLOUD Act (accès par agences fédérales US)
- ❌ **Analyse de contenu** : Certains services scannent les fichiers pour publicité ciblée, formation d'IA, détection de contenu illégal
- ❌ **Conservation non divulguée** : Malgré les promesses, aucune garantie de suppression réelle

**Exemples de documents sensibles souvent convertis** :
- **Contrats commerciaux** : Accords de confidentialité (NDA), contrats d'emploi, accords de vente
- **Documents médicaux** : Résultats de tests, dossiers médicaux personnels (violation potentielle de PHIPA en Ontario, LPRPSP au Québec)
- **Déclarations fiscales** : T4, T5, NR4, déclarations de revenus CRA (numéro d'assurance sociale, revenus)
- **Documents juridiques** : Testaments, procurations, documents de divorce
- **Propriété intellectuelle** : Manuscrits non publiés, recherches scientifiques pré-publication, brevets en cours
- **Documents d'immigration** : IMM 5645, preuves de citoyenneté, passeports scannés
- **Livres et ebooks achetés** : Potentiellement protégés par droit d'auteur

**Notre approche : 100% traitement local**

**Comment ça fonctionne** :
1. **Vous sélectionnez votre fichier PDF** : Le fichier reste dans votre système de fichiers local
2. **Le fichier est chargé dans votre navigateur** : RAM de votre ordinateur/tablette/téléphone
3. **WebAssembly (Wasm) effectue la conversion** : Code compilé s'exécute dans le "sandbox" sécurisé de votre navigateur (Chrome, Firefox, Safari, Edge)
4. **Le fichier EPUB est généré localement** : Dans la mémoire de votre appareil
5. **Vous téléchargez le résultat** : Directement depuis votre navigateur vers votre système de fichiers

**Aucune transmission réseau. Aucun serveur impliqué. Zéro téléchargement.**

**Avantages de sécurité** :
- ✅ **Confidentialité totale** : Vos fichiers ne quittent jamais votre appareil. Impossible d'intercepter ce qui n'est jamais transmis.
- ✅ **Conformité PIPEDA** : Loi canadienne sur la protection des renseignements personnels (2000). Aucune collecte de données personnelles.
- ✅ **Conformité RGPD** : Règlement européen (applicable si vous traitez des données de citoyens UE).
- ✅ **HIPAA-friendly** : Pour professionnels de santé canadiens traitant des données médicales (bien que HIPAA soit américain, principes similaires à PHIPA/LPRPSP).
- ✅ **Aucun risque de breach** : Impossible de violer des données qui n'existent pas sur des serveurs.
- ✅ **Fonctionne hors-ligne** : Une fois la page chargée, vous pouvez déconnecter WiFi/Ethernet — la conversion fonctionne toujours (!).

**Vérification technique (pour sceptiques)** :
Vous pouvez vérifier que rien n'est envoyé vers nos serveurs :
1. Ouvrez pdfcanada.ca/pdf-to-epub dans Chrome/Firefox
2. Appuyez F12 pour ouvrir DevTools (Outils de développement)
3. Allez à l'onglet "Network" (Réseau)
4. Convertissez un fichier PDF en EPUB
5. Observez : Aucune requête POST/PUT vers des serveurs avec votre fichier. Seulement requêtes GET pour charger les ressources du site (HTML, CSS, JS, Wasm)

**Technologies utilisées pour le traitement local** :

- **WebAssembly (Wasm)** : Bytecode compilé depuis C/C++/Rust s'exécutant à vitesse quasi-native dans le navigateur. Nous utilisons des bibliothèques open-source compilées en Wasm :
  - **pdf.js** (Mozilla) : Parsing et rendering de PDF
  - **epub-gen** : Génération de fichiers EPUB conformes

- **File API** : API JavaScript standard permettant au navigateur d'accéder à des fichiers locaux sans les envoyer ailleurs

- **Blob / ArrayBuffer** : Structures de données JavaScript pour manipuler des fichiers binaires en mémoire

**Limitations du traitement local** :

- **Puissance de calcul** : Dépend de votre appareil. Un MacBook Pro 2023 convertira plus vite qu'un Chromebook 2015. Mais pour la plupart des PDF (<50 MB), c'est transparent.
- **Mémoire (RAM)** : Très gros fichiers (>500 MB) peuvent causer des ralentissements ou crashes sur appareils avec peu de RAM (4 GB ou moins).
- **Compatibilité navigateur** : Nécessite navigateur moderne supportant WebAssembly (Chrome 57+, Firefox 52+, Safari 11+, Edge 16+). Tous les navigateurs depuis ~2018.

**Comparaison : pdfcanada.ca vs Convertisseurs cloud**

| Critère | pdfcanada.ca (Local) | Zamzar, Online-Convert, etc. (Cloud) |
|---------|---------------------|--------------------------------------|
| **Confidentialité** | ✅ 100% privé | ❌ Fichiers sur serveurs tiers |
| **Conformité PIPEDA** | ✅ Conforme | ⚠️ Dépend de leur politique |
| **Vitesse (10 MB PDF)** | ✅ 5-15 sec | ⚠️ 30-120 sec (upload + queue + download) |
| **Fonctionne hors-ligne** | ✅ Oui | ❌ Non (nécessite connexion) |
| **Limite de taille** | ⚠️ ~500 MB (RAM dépendante) | ⚠️ 50-100 MB (limite serveur) |
| **Coût** | ✅ Gratuit illimité | ⚠️ Gratuit avec limites (2-5 fichiers/jour) ou payant |
| **Aucune inscription** | ✅ Aucune | ⚠️ Souvent requis pour plus de 2 conversions |
| **Qualité de conversion** | ✅ Excellente | ✅ Variable (généralement bonne) |

**Cas d'usage où le traitement local est ESSENTIEL** :
- **Avocats / cabinets juridiques** : Confidentialité client (privilège avocat-client). Transmission de documents à tiers viole les règles déontologiques (Barreau du Québec, Law Society of Ontario).
- **Professionnels de santé** : Données médicales (PHIPA Ontario, LPRPSP Québec). Amendes jusqu'à 500,000 CAD pour violations.
- **Comptables / CPA** : Déclarations fiscales de clients. CPA Canada exige protection des données clients.
- **Chercheurs** : Données de recherche sensibles, manuscrits pré-publication (éviter le vol intellectuel).
- **Journalistes** : Documents de sources confidentielles. Protection des sources (Association canadienne des journalistes).
- **Gouvernement** : Documents "Protégé A/B/C". Transmission sur serveurs non-gouvernementaux interdite (Directive sur la sécurité du GC).
- **Entreprises** : Secrets commerciaux, données financières non publiques (obligations SOX pour compagnies publiques).

**Recommandations pour maximiser la sécurité** :

1. **Utilisez HTTPS** : Vérifiez le cadenas 🔒 dans la barre d'adresse (https://www.pdfcanada.ca). Empêche l'interception durant le chargement initial du site.

2. **Effacez les fichiers après conversion** : Supprimez le PDF original et l'EPUB converti de vos Téléchargements si vous n'en avez plus besoin (évite accès non autorisé à votre ordinateur).

3. **Utilisez un navigateur à jour** : Mises à jour de sécurité récentes. Chrome, Firefox, Safari, Edge mettent automatiquement à jour.

4. **Évitez les réseaux publics pour documents sensibles** : Même avec traitement local, charger le site pdfcanada.ca sur WiFi public peut exposer des métadonnées. Utilisez VPN ou données cellulaires pour documents très sensibles.

5. **Vérifiez les extensions de navigateur** : Certaines extensions (capture d'écran, gestionnaires de téléchargement) peuvent accéder aux fichiers traités. Désactivez pour documents ultra-sensibles.

6. **Pour paranoia maximale** : Téléchargez notre code source (GitHub : pdfcanada-tools, si disponible), hébergez localement, utilisez hors-ligne. Ou utilisez outils ligne de commande (Calibre \`ebook-convert\`) sur machine air-gapped.

**Transparence et confiance** :
Contrairement aux services cloud fermés, notre approche vous donne le contrôle complet. Vous n'avez pas à nous "faire confiance" de supprimer vos fichiers — ils ne nous parviennent jamais en premier lieu.

**Et la monétisation?**
Question légitime : Si le service est gratuit et nous n'avons pas accès aux fichiers (donc pas de vente de données), comment pdfcanada.ca se finance-t-il?
- Publicités non-intrusives (désactivez avec bloqueur si vous préférez)
- Modèle freemium possible à l'avenir (fonctionnalités avancées payantes, conversion de base toujours gratuite)
- Notre mission : Offrir des outils PDF accessibles aux Canadiens tout en respectant leur vie privée`
            },
            {
                id: "troubleshooting",
                title: "Dépannage : Résoudre les problèmes courants de conversion",
                content: `Rencontrez-vous des problèmes lors de la conversion de vos PDF en EPUB? Voici les solutions aux erreurs les plus fréquentes.

**Problème 1 : "La conversion a échoué" ou erreur générique**

**Causes possibles** :
- PDF corrompu ou mal formé
- PDF protégé par mot de passe
- Fichier trop volumineux pour votre RAM disponible
- PDF avec structure complexe non-standard

**Solutions** :
1. **Vérifiez que le PDF s'ouvre correctement** dans Adobe Acrobat Reader. S'il ne s'ouvre pas, le fichier est corrompu.
2. **Supprimez le mot de passe** : Utilisez notre outil "Déverrouiller PDF" ou \`qpdf --decrypt\` en ligne de commande
3. **Réduisez la taille du fichier** : Utilisez notre outil "Compresser PDF" ou divisez en sections plus petites
4. **Essayez une alternative** : Calibre (ebook-convert) peut traiter certains PDF que les convertisseurs web ne peuvent pas

**Problème 2 : Texte manquant ou pages blanches dans l'EPUB**

**Cause** : PDF scanné sans couche de texte (images seulement)

**Solution** :
1. **Utilisez notre outil OCR PDF** (pdfcanada.ca/ocr-pdf) pour ajouter une couche de texte
2. **Vérifiez si le texte est sélectionnable** dans le PDF original (Ctrl+A ou Cmd+A)
3. Si le PDF a des polices embarquées propriétaires, essayez d'imprimer le PDF en "nouveau PDF" depuis Adobe Reader (aplatit les polices)

**Problème 3 : Ordre de texte chaotique / paragraphes mélangés**

**Cause** : PDF avec mise en page multi-colonnes, encadrés ou structure complexe

**Solutions** :
1. **Simplifiez le PDF source** si possible (obtenez version single-column)
2. **Édition manuelle** : Calibre → Edit Book → Réorganiser manuellement les sections dans le HTML
3. **Alternative** : Si c'est un livre publié, cherchez une version EPUB officielle (souvent disponible sur Amazon, Kobo, Google Books)

**Problème 4 : Images manquantes, pixelisées ou déformées**

**Causes** :
- Images avec formats exotiques (JBIG2, JPEG2000) non supportés
- Images vectorielles (SVG dans PDF) mal converties
- Compression trop agressive

**Solutions** :
1. **Ouvrez le PDF dans Adobe Acrobat** → Fichier → Exporter vers → Images → PNG (exporte toutes les images)
2. **Convertissez le PDF** en gardant les images originales si option disponible
3. **Édition manuelle** : Remplacez les images dans l'EPUB (Calibre Edit Book) par versions haute qualité

**Problème 5 : Table des matières (TOC) manquante**

**Cause** : PDF sans signets (bookmarks) intégrés

**Solutions** :
1. **Créez la TOC manuellement** dans Calibre :
   - Clic droit sur le livre → Edit Book
   - Tools → Table of Contents → Edit Table of Contents
   - Ajoutez les entrées en cliquant sur les titres dans le texte
2. **Alternative** : Sigil (éditeur EPUB) → Tools → Generate TOC

**Problème 6 : Fichier EPUB refusé par la liseuse**

**Erreur** : "Format non supporté" ou "Fichier corrompu"

**Causes** :
- EPUB mal formé (erreurs de validation)
- Format EPUB 3 sur liseuse ne supportant que EPUB 2
- Fichier trop volumineux

**Solutions** :
1. **Validez l'EPUB** avec EPUBCheck :
   - Calibre → Edit Book → Tools → Check Book
   - Corrigez les erreurs signalées
2. **Convertissez en EPUB 2** si votre liseuse est ancienne :
   - Calibre → Convert Books → EPUB Output → EPUB Version → 2
3. **Réduisez la taille** : Compressez les images (Calibre Edit Book → Tools → Compress Images)
4. **Testez sur un autre appareil** pour isoler si c'est un problème de liseuse ou de fichier

**Problème 7 : Caractères spéciaux affichés incorrectement (é → Ã©)**

**Cause** : Problème d'encodage (UTF-8 vs Latin-1)

**Solutions** :
1. **Réencodez en UTF-8** :
   - Calibre → Edit Book
   - Ouvrez les fichiers HTML dans l'éditeur
   - File → Save → Assurez-vous que UTF-8 est sélectionné
2. **Vérifiez la déclaration d'encodage** : Le fichier XHTML doit avoir \`<?xml version="1.0" encoding="UTF-8"?>\`

**Problème 8 : Conversion extrêmement lente (>5 minutes)**

**Causes** :
- Fichier très volumineux (>100 MB)
- PDF avec des milliers de pages
- Ordinateur ancien avec peu de RAM

**Solutions** :
1. **Fermez les autres applications** pour libérer la RAM
2. **Divisez le PDF en sections** (chapitres) et convertissez séparément, puis fusionnez les EPUB résultants
3. **Utilisez Calibre** (application desktop) plutôt que convertisseur web — souvent plus rapide pour gros fichiers
4. **Patientez** : Certains PDF complexes nécessitent vraiment 5-10 minutes

**Problème 9 : "Not enough memory" ou crash du navigateur**

**Cause** : Fichier PDF trop volumineux pour la RAM disponible

**Solutions** :
1. **Fermez tous les autres onglets** du navigateur
2. **Augmentez la mémoire allouée** : Redémarrez le navigateur (libère la RAM)
3. **Divisez le PDF** en fichiers plus petits (<50 MB chacun)
4. **Utilisez un ordinateur plus puissant** ou
5. **Utilisez Calibre desktop** (mieux optimisé pour gros fichiers)

**Problème 10 : Métadonnées manquantes (auteur, titre incorrect)**

**Cause** : PDF sans métadonnées embarquées

**Solution** :
1. **Éditez manuellement dans Calibre** :
   - Clic droit sur le livre → Edit Metadata
   - Ajoutez Titre, Auteur, Date de publication, Éditeur, ISBN, etc.
   - Download cover (télécharge couverture depuis Google/Amazon)

**Problème 11 : Liseuse Kindle ne reconnaît pas l'EPUB**

**Cause** : Kindle ne supporte PAS EPUB nativement

**Solution** :
1. **Convertissez EPUB → AZW3** avec Calibre :
   - Ajoutez l'EPUB à Calibre
   - Convert Books → Output format → AZW3
   - Transférez l'AZW3 sur Kindle via USB
2. **Alternative** : Envoyez l'EPUB par courriel à votre adresse Kindle — Amazon convertira automatiquement (mais moins de contrôle)

**Problème 12 : Notes de bas de page devenues inaccessibles**

**Cause** : Liens hypertexte de notes mal formés

**Solution** :
1. **Vérifiez les liens** dans Calibre Edit Book :
   - Cherchez les balises \`<a href="#note1">\` (liens vers notes)
   - Assurez-vous que les ancres \`<a id="note1">\` existent
2. **Reformatez les notes** comme notes de fin de chapitre plutôt que bas de page

**Problème 13 : Polices personnalisées manquantes**

**Cause** : EPUB ne contient pas les polices embarquées du PDF

**Solutions** :
1. **Embarquez les polices** dans l'EPUB :
   - Calibre Edit Book → Ajoutez les fichiers .ttf ou .otf dans le dossier Fonts
   - Modifiez le CSS pour référencer : \`@font-face { font-family: 'MaPolice'; src: url('fonts/mapolice.ttf'); }\`
2. **Utilisez des polices système** : La plupart des liseuses permettent à l'utilisateur de choisir la police

**Problème 14 : EPUB trop volumineux pour courriel**

**Cause** : Limite de pièce jointe courriel (généralement 25 MB pour Gmail)

**Solutions** :
1. **Compressez les images** dans Calibre (Tools → Compress Images → 75% quality)
2. **Utilisez un service de partage** : Google Drive, Dropbox, WeTransfer
3. **Transférez via USB** : Connectez la liseuse à l'ordinateur, glissez-déposez

**Problème 15 : Conversion réussie mais texte illisible (gibberish)**

**Cause** : PDF avec polices personnalisées utilisant encodages non-standard

**Solution** :
- Malheureusement, peu de solutions automatiques
- **Alternative 1** : OCR (même si le PDF est "textuel") — Tesseract lira visuellement le texte
- **Alternative 2** : Repartir du document source (Word, LaTeX) si disponible

**Ressources supplémentaires pour dépannage** :

- **Forum MobileRead** (mobileread.com/forums) : Communauté d'experts EPUB/ebook, très actifs, réponses en 24h
- **r/ebooks sur Reddit** : Questions sur formats, conversion, liseuses
- **Documentation Calibre** (manual.calibre-ebook.com) : Guide complet sur conversions, édition, dépannage
- **EPUBCheck** (github.com/w3c/epubcheck) : Outil officiel de validation

**Quand abandonner la conversion automatique** :

Certains PDF sont tout simplement trop complexes pour conversion automatique de qualité :
- Manuels scientifiques avec des centaines d'équations mathématiques
- Livres d'art avec mise en page artistique complexe
- Partitions musicales
- Documents juridiques avec annotations et surlignages critiques
- Bandes dessinées (utilisez CBR/CBZ plutôt qu'EPUB)

Pour ces cas, considérez :
- **Garder le PDF** et utiliser une tablette (iPad, Android) avec bonne app de lecture PDF (PDF Expert, Foxit)
- **Conversion manuelle professionnelle** (services Reedsy, Fiverr freelancers spécialisés)
- **Recréer le livre** dans un outil EPUB dédié (Sigil, Vellum, Scrivener)

**Besoin d'aide supplémentaire?**

Si vous rencontrez un problème non listé ici :
1. Vérifiez notre FAQ ci-dessous
2. Consultez les forums MobileRead ou r/ebooks
3. Essayez Calibre (solution à 80% des problèmes de conversion)
4. Pour les professionnels : envisagez des outils payants (Adobe InDesign + plugin EPUB, Vellum pour auteurs macOS)`
            },
            {
                id: "advanced-features",
                title: "Fonctionnalités avancées et optimisations EPUB",
                content: `Pour les utilisateurs qui veulent aller plus loin et créer des EPUB de qualité professionnelle.

**Table des matières (TOC) avancée**

**TOC hiérarchique** :
Les meilleurs EPUB ont une table des matières multi-niveaux :
- Partie I : Introduction
  - Chapitre 1 : Contexte
  - Chapitre 2 : Méthodologie
- Partie II : Résultats
  - Chapitre 3 : Analyse quantitative
    - Section 3.1 : Statistiques descriptives
    - Section 3.2 : Régression

**Créer une TOC hiérarchique dans Calibre** :
1. Edit Book → Tools → Table of Contents
2. Détectez automatiquement basé sur balises HTML (h1, h2, h3)
3. Ajustez manuellement l'indentation (Indent / Unindent)

**Métadonnées Dublin Core**

EPUB utilise le standard Dublin Core pour métadonnées :
- **dc:title** : Titre du livre
- **dc:creator** : Auteur (peut être multiple)
- **dc:subject** : Mots-clés / sujets (Fiction, Science-Fiction, Romans canadiens)
- **dc:description** : Résumé du livre
- **dc:publisher** : Éditeur
- **dc:date** : Date de publication (format ISO 8601 : 2024-03-15)
- **dc:identifier** : ISBN (978-1234567890) ou autre identifiant unique
- **dc:language** : Langue (fr-CA pour français canadien, en-CA pour anglais canadien)

**Ajout dans Calibre** :
- Edit Metadata → Remplissez tous les champs
- Tags : Utilisez virgules (Science-Fiction, Space Opera, Hugo Award Winner)

**Métadonnées personnalisées** :
Calibre permet d'ajouter des champs personnalisés :
- Série et numéro (#2 dans "The Expanse")
- Classement personnel (5 étoiles)
- Statut de lecture (Lu, En cours, À lire)

**Polices personnalisées**

Embarquez des polices pour typographie spéciale :

1. **Ajoutez les fichiers de police** (.ttf, .otf) dans Calibre Edit Book → Dossier Fonts
2. **Modifiez le CSS** :
\`\`\`css
@font-face {
    font-family: 'Crimson Text';
    src: url('../fonts/CrimsonText-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'Crimson Text', Georgia, serif;
}
\`\`\`

**Polices recommandées pour ebooks** :
- **Serif** : Crimson Text, EB Garamond, Merriweather (lecture longue)
- **Sans-serif** : Open Sans, Lato, Roboto (textes techniques)
- **Monospace** : Fira Code, Source Code Pro (exemples de code)

**Attention** : Polices embarquées augmentent la taille du fichier (500 KB - 2 MB par police). Beaucoup de lecteurs préfèrent utiliser les polices système de leur liseuse.

**CSS avancé pour EPUB**

**Styles de paragraphe** :
\`\`\`css
/* Premiers paragraphes sans indentation */
p.first {
    text-indent: 0;
    margin-top: 1em;
}

/* Paragraphes standards avec indentation */
p {
    text-indent: 1.5em;
    margin: 0;
    text-align: justify;
}

/* Citations */
blockquote {
    margin: 1em 2em;
    font-style: italic;
    border-left: 3px solid #666;
    padding-left: 1em;
}
\`\`\`

**Styles de titres** :
\`\`\`css
h1 {
    font-size: 2em;
    margin: 2em 0 1em 0;
    text-align: center;
    page-break-before: always; /* Nouveau chapitre = nouvelle page */
}

h2 {
    font-size: 1.5em;
    margin: 1.5em 0 0.75em 0;
}
\`\`\`

**Sauts de page** :
\`\`\`css
.new-chapter {
    page-break-before: always; /* Force une nouvelle page avant */
}

.keep-together {
    page-break-inside: avoid; /* Évite de couper cet élément */
}
\`\`\`

**Images responsives**

Pour que les images s'adaptent à toutes les tailles d'écran :

\`\`\`css
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em auto; /* Centre l'image */
}
\`\`\`

**Couverture (Cover Image)**

Une couverture professionnelle améliore la présentation :

**Dimensions recommandées** :
- **Taille** : 1600 x 2400 px (ratio 2:3)
- **Format** : JPEG ou PNG
- **Poids** : <500 KB
- **Résolution** : 72 DPI (suffisant pour écrans, 300 DPI inutile)

**Ajout dans Calibre** :
1. Edit Metadata → Download cover (télécharge depuis Amazon/Google)
2. Ou : Browse → Sélectionnez une image locale

**Liens hypertexte et références croisées**

**Liens internes** (vers une autre section du livre) :
\`\`\`html
<p>Voir le <a href="#chapter5">Chapitre 5</a> pour plus de détails.</p>
...
<h2 id="chapter5">Chapitre 5</h2>
\`\`\`

**Liens externes** (vers sites web) :
\`\`\`html
<p>Plus d'infos sur <a href="https://www.example.com">notre site</a>.</p>
\`\`\`

**Notes de bas de page interactives** :
\`\`\`html
<p>Texte principal<a href="#note1" id="ref1"><sup>1</sup></a>.</p>
...
<aside id="note1">
    <p><a href="#ref1">1.</a> Texte de la note de bas de page.</p>
</aside>
\`\`\`

**EPUB 3 : Fonctionnalités multimédia**

EPUB 3 supporte des fonctionnalités avancées :

**Audio embarqué** :
\`\`\`html
<audio controls>
    <source src="audio/chapter1.mp3" type="audio/mpeg">
    Votre liseuse ne supporte pas l'audio.
</audio>
\`\`\`

**Vidéo** :
\`\`\`html
<video controls width="100%">
    <source src="video/demo.mp4" type="video/mp4">
</video>
\`\`\`

**MathML** (formules mathématiques) :
\`\`\`html
<math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
        <mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup>
    </mrow>
</math>
\`\`\`

**Attention** : Support variable selon liseuses. Kindle ne supporte pas EPUB 3 complet. Apple Books et Kobo ont bon support.

**EPUB Fixed Layout (FXL)**

Pour livres nécessitant mise en page fixe (livres illustrés pour enfants, BD, livres de photos) :

**Métadonnées FXL** (fichier OPF) :
\`\`\`xml
<meta property="rendition:layout">pre-paginated</meta>
<meta property="rendition:spread">landscape</meta>
\`\`\`

**Création** : Utilisez outils spécialisés (Adobe InDesign, Affinity Publisher, Book Creator)

**Accessibilité (WCAG / ARIA)**

Rendre votre EPUB accessible aux utilisateurs malvoyants :

**Texte alternatif pour images** :
\`\`\`html
<img src="images/graph1.png" alt="Graphique montrant la croissance exponentielle de 2010 à 2024">
\`\`\`

**Structure sémantique** :
\`\`\`html
<nav role="doc-toc">
    <ol>
        <li><a href="#ch1">Chapitre 1</a></li>
    </ol>
</nav>

<section role="doc-chapter">
    <h1>Chapitre 1</h1>
    ...
</section>
\`\`\`

**Langue du document** :
\`\`\`html
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
\`\`\`

**Validation avec Ace** :
DAISY Consortium offre "Ace" (Accessibility Checker for EPUB) : daisy.org/activities/software/ace/

**Optimisation de taille de fichier**

**Compresser images** :
- JPEG : 75-85% qualité (balance qualité/taille)
- PNG : Utilisez outils comme OptiPNG, PNGGauntlet
- Convertissez PNG → JPEG pour photos (PNG pour graphiques, texte)

**Nettoyer le code HTML** :
- Supprimez espaces/tabs inutiles
- Combinez fichiers CSS (un seul style.css au lieu de 10)

**Supprimer métadonnées d'images** (EXIF) :
Utilise exiftool ou outils d'édition d'image pour retirer données GPS, caméra, etc.

**Outils avancés pour créateurs de contenu**

**Sigil** (éditeur EPUB open-source) :
- Interface visuelle + code
- Plugins : FlightCrew (validation), PageEdit (WYSIWYG)
- Meilleur que Calibre Edit Book pour édition intensive

**Pandoc** (convertisseur universel ligne de commande) :
\`\`\`bash
pandoc livre.md -o livre.epub --toc --epub-cover-image=cover.jpg --metadata title="Mon Livre"
\`\`\`
Convertit Markdown → EPUB avec TOC automatique

**Vellum** (macOS, payant ~250 USD) :
- Interface WYSIWYG magnifique
- Export EPUB, MOBI, print-ready PDF
- Préféré des auteurs indépendants

**Adobe InDesign** (professionnel, payant ~30 CAD/mois) :
- Contrôle total sur typographie, mise en page
- Export EPUB 2/3, EPUB FXL
- Courbe d'apprentissage élevée

**Calibre CLI (ligne de commande)** :
Conversion en lot :
\`\`\`bash
ebook-convert livre.pdf livre.epub --enable-heuristics --chapter "//*[@class='chapter']" --pretty-print
\`\`\`

**DRM et protection de contenu**

Si vous êtes auteur/éditeur voulant protéger votre EPUB :

**Adobe Content Server** : Applique Adobe DRM (nécessite serveur, coûteux)
**Watermarking** : Tatouage numérique (visible ou invisible) identifiant l'acheteur
**LCP (Lightweight Content Protection)** : DRM moderne (Readium Foundation), moins restrictif qu'Adobe DRM

**Notre opinion** : DRM frustre les lecteurs légitimes et est facilement contourné. Préférez vendre sans DRM (comme Tor Books, O'Reilly) avec watermarking social ("Acheté par Jean Tremblay, jean@example.com").

**Conversion en lot et automatisation**

Pour convertir 100 PDF en EPUB :

**Script Bash** :
\`\`\`bash
#!/bin/bash
for pdf in *.pdf; do
    ebook-convert "$pdf" "\${pdf%.pdf}.epub" --enable-heuristics
done
\`\`\`

**Python avec subprocess** :
\`\`\`python
import subprocess
import glob

for pdf in glob.glob("*.pdf"):
    epub = pdf.replace(".pdf", ".epub")
    subprocess.run(["ebook-convert", pdf, epub, "--enable-heuristics"])
\`\`\`

**Tests multi-appareils**

Testez votre EPUB sur :
- **Calibre ebook viewer** (desktop)
- **Apple Books** (iOS simulator ou appareil réel)
- **Kobo desktop** ou Kobo Forma/Libra
- **Adobe Digital Editions** (Windows/Mac)
- **Google Play Books** (upload dans bibliothèque)
- **Kindle Previewer** (après conversion EPUB → AZW3)

**Rendu différent selon liseuses** — Ne visez pas la perfection pixel-perfect. Visez la lisibilité et structure logique.

**Ressources pour approfondir** :

- **IDPF EPUB 3 Specs** (idpf.org/epub/31) : Spécifications officielles complètes
- **Practical EPUB Metadata** (blog.threepress.org) : Guide métadonnées détaillé
- **EbookArchitects.com** : Tutoriels avancés (EPUB 3, accessibilité, FXL)
- **The Book Designer** (thebookdesigner.com) : Conseils typographie, design de couverture
- **r/selfpublish** sur Reddit : Communauté auteurs indépendants, conseils EPUB/Kindle

L'optimisation EPUB est un art ET une science. Ces techniques vous permettront de créer des ebooks de qualité professionnelle!`
            }
        ],
        faq: [
            {
                q: "Comment convertir un PDF en EPUB pour Kindle?",
                a: "Utilisez notre outil pour convertir votre PDF en EPUB, puis utilisez le logiciel gratuit Calibre pour le convertir en format MOBI/AZW3 compatible Kindle. Vous pouvez aussi envoyer l'EPUB par courriel à votre Kindle (@kindle.com) et Amazon le convertira automatiquement."
            },
            {
                q: "La conversion PDF vers EPUB est-elle gratuite?",
                a: "Oui, notre service est entièrement gratuit, sans inscription, sans limite de fichiers, et sans frais cachés. La conversion se fait dans votre navigateur (traitement local), donc aucun serveur n'est impliqué. C'est notre engagement envers les Canadiens — des outils PDF accessibles et respectueux de la vie privée."
            },
            {
                q: "Puis-je convertir des PDF numérisés (scannés)?",
                a: "Notre outil fonctionne mieux avec les PDF contenant du texte sélectionnable. Pour les PDF scannés (images de pages), utilisez d'abord notre outil OCR PDF (pdfcanada.ca/ocr-pdf) pour ajouter une couche de texte, puis convertissez en EPUB. Les scans de 300 DPI ou plus donnent les meilleurs résultats OCR."
            },
            {
                q: "Comment garder la mise en page lors de la conversion?",
                a: "Le format EPUB est 'fluide' (reflowable) par nature, ce qui signifie que le texte s'adapte à la taille de l'écran — c'est son avantage! Nous préservons la structure (titres, paragraphes, listes, images) mais la mise en page exacte peut varier. Pour des documents nécessitant une mise en page fixe (magazines, BD), gardez le PDF ou utilisez EPUB Fixed Layout (FXL)."
            },
            {
                q: "Combien de temps prend la conversion?",
                a: "La plupart des conversions prennent 5-15 secondes pour un PDF typique de 10-20 MB. Les documents très longs (500+ pages) ou volumineux (100+ MB) peuvent prendre 1-3 minutes. Le temps dépend de la puissance de votre ordinateur puisque le traitement est entièrement local dans votre navigateur."
            },
            {
                q: "Mes images sont-elles conservées?",
                a: "Oui, nous incluons toutes les images de votre PDF dans le fichier EPUB. Les images sont automatiquement redimensionnées et optimisées pour les liseuses (max 1200x1600px, compression JPEG 85%). Si vous rencontrez des images manquantes ou pixelisées, vérifiez que le PDF source n'utilise pas de formats exotiques (JBIG2, JPEG2000)."
            },
            {
                q: "L'EPUB fonctionnera-t-il sur mon Kobo?",
                a: "Absolument! Kobo (compagnie canadienne basée à Toronto) supporte parfaitement EPUB — c'est son format natif. Transférez simplement votre EPUB converti via USB (glisser-déposer dans le dossier de votre Kobo) ou utilisez Kobo Desktop. Les Kobo supportent EPUB 2 et EPUB 3, avec excellent support du français."
            },
            {
                q: "Quelle est la différence entre EPUB 2 et EPUB 3?",
                a: "EPUB 2 (2007) est le standard classique, largement supporté par toutes les liseuses. EPUB 3 (2011) ajoute support multimédia (audio, vidéo), MathML (formules mathématiques), accessibilité améliorée (ARIA), et HTML5. Notre convertisseur génère EPUB 3 par défaut, mais compatible EPUB 2. Kobo et Apple Books supportent bien EPUB 3; Kindle nécessite conversion en MOBI/AZW3."
            },
            {
                q: "Puis-je convertir des livres protégés par DRM?",
                a: "Non. Les PDF protégés par Adobe DRM, mot de passe, ou autres protections ne peuvent pas être convertis sans d'abord retirer la protection. Pour les PDF protégés par mot de passe que vous possédez légalement, utilisez notre outil Déverrouiller PDF. Attention : Contourner les DRM sur des livres achetés viole souvent les conditions d'utilisation et peut enfreindre la Loi sur le droit d'auteur du Canada."
            },
            {
                q: "La table des matières est-elle générée automatiquement?",
                a: "Oui, si votre PDF contient des signets (bookmarks) ou une structure de titres claire. Notre convertisseur détecte les styles de police et les signets pour générer la TOC EPUB (fichier nav.xhtml). Si la TOC est manquante ou incorrecte, vous pouvez la créer manuellement dans Calibre (Edit Book → Tools → Table of Contents)."
            },
            {
                q: "Comment transférer mon EPUB sur ma liseuse?",
                a: "Plusieurs méthodes : **USB** : Connectez votre liseuse à l'ordinateur, glissez-déposez l'EPUB dans le dossier approprié. **Courriel** : Envoyez l'EPUB par courriel à votre adresse Kindle/Kobo. **Applications** : Utilisez Kobo Desktop, Adobe Digital Editions, Calibre pour synchroniser. **Cloud** : Téléchargez dans Google Play Books ou Apple Books pour synchronisation multi-appareils."
            },
            {
                q: "Mes métadonnées (auteur, titre) sont-elles préservées?",
                a: "Oui, nous extrayons les métadonnées du PDF (titre, auteur, sujet, mots-clés) et les incluons dans l'EPUB (standard Dublin Core). Si votre PDF n'a pas de métadonnées ou si elles sont incorrectes, vous pouvez les éditer dans Calibre (clic droit → Edit Metadata). Ajoutez titre, auteur, éditeur, ISBN, couverture, tags, etc."
            },
            {
                q: "Puis-je convertir plusieurs PDF en EPUB simultanément?",
                a: "Actuellement, notre convertisseur web traite un fichier à la fois pour garantir la meilleure performance. Pour conversion en lot (10, 100+ fichiers), utilisez Calibre en ligne de commande : `ebook-convert fichier.pdf fichier.epub --enable-heuristics`. Créez un script bash/Python pour automatiser le traitement de dossiers entiers."
            },
            {
                q: "L'EPUB sera-t-il plus petit que le PDF?",
                a: "Généralement oui. Les EPUB sont souvent 30-60% plus petits que les PDF équivalents grâce à : texte non pixelisé (rendu vectoriel vs images), images optimisées, polices système (pas d'embarquement de polices lourdes), compression ZIP efficace. Un PDF de 50 MB peut devenir un EPUB de 15-25 MB. Exception : PDF très compressés ou texte pur peuvent être comparables."
            },
            {
                q: "Puis-je lire l'EPUB sur mon iPhone/iPad?",
                a: "Absolument! Apple Books (préinstallé sur iOS/iPadOS) lit parfaitement les EPUB. Méthodes de transfert : **AirDrop** depuis votre Mac, **iCloud Drive** (sauvegardez l'EPUB dans iCloud, ouvrez depuis Fichiers), **Courriel** (envoyez-vous l'EPUB, ouvrez la pièce jointe, choisissez 'Copier vers Books'), **iTunes** (connexion USB, glissez-déposez dans Apple Books)."
            },
            {
                q: "Les notes de bas de page sont-elles conservées?",
                a: "Oui, mais leur format peut changer. Les notes de bas de page PDF sont converties en liens hypertexte EPUB pointant vers les notes (généralement en fin de chapitre ou de livre). Sur liseuses modernes (Kobo, Apple Books), cliquer sur le numéro de note affiche un popup. La navigation est souvent plus pratique qu'en PDF."
            },
            {
                q: "Puis-je convertir des manuels scolaires ou livres techniques?",
                a: "Oui, mais avec nuances. Les manuels avec texte linéaire, images simples, équations rendues en images convertissent bien. Les manuels avec tableaux complexes, diagrammes multi-colonnes, formules mathématiques interactives peuvent perdre de la mise en page. Pour équations complexes, vérifiez que les images sont préservées. Considérez garder le PDF pour référence si la mise en page est critique."
            },
            {
                q: "Comment éditer l'EPUB après conversion?",
                a: "Utilisez **Calibre Edit Book** (clic droit sur livre dans Calibre → Edit book) pour éditer HTML, CSS, images, métadonnées, TOC. Ou **Sigil** (éditeur EPUB open-source) pour interface plus visuelle. Pour changements rapides (métadonnées, couverture), Calibre Edit Metadata suffit. Les EPUB sont des fichiers ZIP : vous pouvez aussi renommer .epub en .zip, décompresser, éditer avec éditeur de texte, re-zipper."
            },
            {
                q: "Mon EPUB affiche des caractères bizarres (Ã©, Ã , etc). Comment corriger?",
                a: "C'est un problème d'encodage (UTF-8 vs Latin-1). Dans Calibre Edit Book, ouvrez les fichiers HTML, File → Save, assurez-vous que UTF-8 est sélectionné. Vérifiez aussi la déclaration XML : `<?xml version='1.0' encoding='UTF-8'?>`. Pour caractères français (é, è, à, ç, œ), UTF-8 est essentiel. Si le problème persiste, le PDF source utilisait une police avec encodage non-standard."
            },
            {
                q: "Puis-je convertir des bandes dessinées PDF en EPUB?",
                a: "Techniquement oui, mais ce n'est pas recommandé. Les BD nécessitent une mise en page fixe (chaque page = une image). Utilisez plutôt le format **CBZ/CBR** (Comic Book Archive) ou **EPUB Fixed Layout** (EPUB FXL). Pour BD, convertissez PDF → CBZ (renommez .pdf en .cbz et ajustez la structure) ou utilisez des apps de lecture BD (Comixology, YACReader, Chunky Comic Reader)."
            },
            {
                q: "La conversion fonctionne-t-elle hors ligne?",
                a: "Oui! Une fois que vous avez chargé la page pdfcanada.ca/pdf-to-epub dans votre navigateur, la conversion fonctionne entièrement hors ligne. Vous pouvez déconnecter le WiFi/Ethernet et continuer à convertir des fichiers. Tout le traitement se fait localement via WebAssembly (Wasm) dans votre navigateur. Aucune connexion Internet nécessaire après le chargement initial."
            },
            {
                q: "Puis-je utiliser Calibre pour convertir PDF en EPUB?",
                a: "Absolument! Calibre est l'outil de référence pour gestion d'ebooks. Pour convertir : Ajoutez votre PDF à Calibre → Clic droit → Convert Books → Output format EPUB → Activez 'Enable heuristic processing' → Convert. Calibre offre plus d'options avancées (détection de chapitres, manipulation de TOC, styles CSS personnalisés) mais a une courbe d'apprentissage. Notre convertisseur web est plus simple et rapide pour conversions basiques."
            },
            {
                q: "L'EPUB fonctionnera-t-il sur Google Play Books?",
                a: "Oui! Google Play Books supporte parfaitement EPUB. Téléchargez votre EPUB dans votre bibliothèque Google Play Books via play.google.com/books/uploads. Limites : 100 MB par fichier, 1000 livres maximum dans votre bibliothèque. Une fois téléchargé, vous pouvez lire sur Android, iOS, ou navigateur web avec synchronisation automatique de position de lecture et annotations."
            },
            {
                q: "Puis-je convertir des thèses ou mémoires universitaires?",
                a: "Oui, c'est un usage idéal! Les thèses de 200-300 pages sont pénibles à lire en PDF sur écran. Convertir en EPUB permet lecture confortable sur liseuse avec ajustement de taille de texte. Vérifiez que votre thèse a une TOC claire (chapitres bien marqués) pour meilleure navigation. Les thèses avec nombreux tableaux/graphiques peuvent nécessiter vérification post-conversion. Beaucoup de thèses canadiennes sont disponibles via Thèses Canada (collectionscanada.gc.ca)."
            },
            {
                q: "Mes PDF sont confidentiels. Est-ce sécuritaire?",
                a: "Absolument. Contrairement aux convertisseurs en ligne (Zamzar, Online-Convert, etc.) qui téléchargent vos fichiers sur leurs serveurs, pdfcanada.ca effectue 100% du traitement localement dans votre navigateur via WebAssembly. Vos fichiers ne quittent JAMAIS votre appareil. Aucune transmission réseau. Conforme à PIPEDA (loi canadienne sur la vie privée). Idéal pour documents sensibles : contrats, déclarations fiscales, dossiers médicaux, manuscrits, documents juridiques."
            }
        ],
        ctaTitle: "Convertissez votre PDF en EPUB maintenant",
        ctaButton: "Commencer la conversion",
        tipsTitle: "Conseils pour une meilleure conversion",
        tips: [
            "Utilisez des PDF avec du texte sélectionnable (pas des scans)",
            "Les PDF bien structurés avec des titres donnent de meilleurs résultats",
            "Évitez les PDF avec des mises en page complexes (colonnes multiples)",
            "Vérifiez le résultat sur votre liseuse avant de supprimer l'original"
        ],
        relatedTitle: "Outils connexes",
        relatedTools: [
            { name: "EPUB vers PDF", desc: "Convertissez vos ebooks en PDF", path: "/epub-to-pdf" },
            { name: "OCR PDF", desc: "Rendez vos scans cherchables", path: "/ocr-pdf" },
            { name: "Organiser PDF", desc: "Réorganisez les pages", path: "/organize-pdf" }
        ]
    },
    en: {
        seo: {
            title: "How to Convert PDF to EPUB | Free E-Reader Optimization Guide | pdfcanada.ca",
            desc: `Make your PDFs fluid and easy to read on Kindle or Kobo. Our ${CURRENT_YEAR} guide shows you how to convert PDF to EPUB without ever uploading your files. Free and secure conversion.`
        },
        h1: "Convert PDF to EPUB",
        subtitle: "Transform your PDFs into ebooks for e-readers",
        intro: (
            <>
                Want to read your PDF documents on your Kindle or Kobo e-reader? Our free converter transforms your PDF files into EPUB format, the standard for digital books. Enjoy a better reading experience with text that automatically adapts to your screen size.
            </>
        ),
        whyTitle: "Why convert PDF to EPUB?",
        whyReasons: [
            "Comfortable reading on e-readers (Kindle, Kobo, etc.)",
            "Resizable text according to your preferences",
            "Easy navigation between chapters",
            "Less tiring for your eyes",
            "Bookmark synchronization across devices"
        ],
        howTitle: "How to convert PDF to EPUB?",
        steps: [
            {
                title: "Choose your PDF file",
                desc: (
                    <>
                        Select the PDF document you want to transform into an ebook. Our tool accepts all types of text-based PDFs.
                    </>
                )
            },
            {
                title: "Intelligent content analysis",
                desc: (
                    <>
                        Our system analyzes your document's structure: paragraphs, headings, images. Conversion happens entirely in your browser.
                    </>
                )
            },
            {
                title: "Get your EPUB",
                desc: (
                    <>
                        Download your EPUB file and transfer it to your e-reader via USB or email. Happy reading!
                    </>
                )
            }
        ],
        securityTitle: "Your documents stay private",
        securityText: (
            <>
                The privacy of your documents is our priority. All processing happens locally on your device. No files are sent to our servers. Your personal, professional, or confidential PDFs stay in your hands.
            </>
        ),
        compatTitle: "Compatible with all e-readers",
        compatText: (
            <>
                EPUB format is the universal ebook standard. Your converted file will work on:
            </>
        ),
        compatList: ["Amazon Kindle (with Calibre conversion)", "Kobo", "Apple Books", "Google Play Books", "Android tablets", "All EPUB readers"],
        sections: [
            {
                id: "pdf-vs-epub",
                title: "PDF vs EPUB: Understanding the fundamental differences",
                content: `Before converting your documents, it's essential to understand the differences between these two ubiquitous formats.

**PDF (Portable Document Format)**:
- **Fixed layout**: Every page is frozen like a photograph. Text, images, and margins remain identical regardless of the device.
- **Ideal for**: Professional documents (invoices, contracts), government forms (CRA/IRCC), reports with graphics, books with complex layouts.
- **Problem on e-readers**: On a small screen (Kindle Paperwhite 6 inches), you constantly zoom in/out, scroll horizontally. Painful reading for long texts.
- **File size**: Often larger, especially with high-resolution images.

**EPUB (Electronic Publication)**:
- **Reflowable format**: Text automatically adapts to screen size. Change font, character size, margins — content adjusts.
- **Ideal for**: Novels, essays, technical documentation, textbooks, any linear textual content.
- **E-reader advantages**: Comfortable reading without zoom. Adjust text size according to your vision. Navigate by chapters via table of contents.
- **Accessibility**: Compatible with screen readers (NVDA, JAWS) for visually impaired users.
- **Versions**: EPUB 2.0 (older, widely supported), EPUB 3.0 (multimedia support, MathML for mathematical formulas).

**When to convert PDF to EPUB?**
- You often read ebooks on Kindle/Kobo/Nook
- You have PDFs of books or reports without complex layouts
- You want to adjust text size (presbyopia, eye strain)
- You seek better battery life (e-ink consumes less than LCD for displaying text)
- You want to reduce file size to save storage space

**When to keep PDF?**
- Documents with complex tables, charts, diagrams
- Government forms to fill out (T4, IMM 5645, etc.)
- Contracts requiring digital signatures
- Magazines, comics with artistic layout
- Any document where exact visual presentation is crucial

**Canadian use case**: Many Canadians convert PDFs from public libraries (digital lending Pretnumerique.ca, OverDrive) protected by Adobe DRM to EPUB for reading on Kobo (Canadian company Rakuten Kobo based in Toronto). Note that circumventing DRM often violates terms of use.`
            },
            {
                id: "conversion-process",
                title: "How PDF to EPUB conversion works (Technical deep dive)",
                content: `Our converter performs a sophisticated multi-stage transformation, entirely in your browser via WebAssembly.

**Stage 1: PDF content extraction**
- **PDF parsing**: Reading PDF file structure (objects, compressed streams, dictionaries).
- **Text extraction**: Retrieving selectable text. For native PDFs (created from Word/LaTeX), text is directly accessible. For scanned PDFs, OCR is necessary (see our separate OCR PDF tool).
- **Structure detection**: Analyzing font styles to identify headings (H1, H2, H3), paragraphs, lists, quotes.
- **Image extraction**: Retrieving embedded images (JPEG, PNG) with metadata (resolution, color space).

**Stage 2: Layout analysis**
- **Column detection**: Identifying multi-column layouts (difficult to convert to reflowable EPUB).
- **Reading order**: Determining logical content order (sometimes PDFs have text in a different visual order than natural reading order).
- **Headers and footers**: Removing repetitive page numbers, headers and footers that no longer make sense in a reflowable format.

**Stage 3: EPUB structure creation**
- **HTML generation**: Converting content to XHTML 1.1 (EPUB 2) or HTML5 (EPUB 3).
- **Semantic hierarchy**: Transforming styles into semantic HTML tags (\`<h1>\`, \`<h2>\`, \`<p>\`, \`<blockquote>\`, \`<ol>\`, \`<ul>\`).
- **Embedded CSS**: Creating CSS stylesheets to preserve basic styles (bold, italic, relative size).
- **Table of contents (TOC)**: Automatically generating \`toc.ncx\` file (EPUB 2) or \`nav.xhtml\` (EPUB 3) based on detected headings.

**Stage 4: Image optimization**
- **Resizing**: Reducing images to appropriate resolution for e-readers (max 1200x1600px for most devices).
- **Compression**: Reducing file size while preserving visual quality (JPEG quality 85, PNG with optimization).
- **Format conversion**: Transforming exotic formats into standard JPEG/PNG.

**Stage 5: EPUB container assembly**
- **Folder structure**: Creating \`META-INF/\`, \`OEBPS/\` with HTML, CSS, image files.
- **OPF (Package) file**: Generating manifest listing all files, spine (reading order), metadata (title, author, language, date).
- **ZIP compression**: EPUB is essentially a ZIP file with \`.epub\` extension. The \`mimetype\` file must be uncompressed and first.

**Stage 6: Validation and correction**
- **EPUB validation**: Verifying compliance with IDPF (International Digital Publishing Forum) specifications.
- **Common error correction**: Repairing broken links, improperly closed HTML tags, missing image references.
- **Final optimization**: Reducing final file size.

**Specific technical challenges**:
- **PDFs with multiple columns**: Newspapers, magazines, academic documents in 2-3 columns are difficult to linearize. Our algorithm detects columns and tries to reconstruct natural reading order.
- **Mathematical formulas**: Equations rendered as images in PDF can be converted to images in EPUB, but not to editable MathML (except for EPUB 3 with advanced recognition).
- **Footnotes**: Transforming PDF footnotes into EPUB hyperlinks to endnotes or popups.
- **Scanned PDFs (scans)**: Require prior OCR. Results depend on scan quality (resolution, contrast, skew).

**Local processing via WebAssembly**:
Unlike traditional online converters (like Zamzar, Online-Convert, Convertio) that upload your files to their servers, pdfcanada.ca uses WebAssembly (Wasm) compiled from open-source libraries (Mozilla's pdf.js, epub-gen). All processing happens in your Chrome/Firefox/Safari/Edge browser. No data transmission. PIPEDA compliant (Canadian privacy law).`
            },
            {
                id: "ereader-compatibility",
                title: "E-reader and reading app compatibility guide",
                content: `Will your EPUB file work on your device? Here's a complete guide to popular e-readers and apps in Canada.

**Amazon Kindle (US/Canada)**:
- **Native format**: MOBI, AZW3, KFX (Amazon proprietary formats).
- **EPUB support**: ❌ Kindles do NOT read EPUB directly. You must convert EPUB → MOBI/AZW3 via Calibre (free software).
- **Method**: Convert your PDF to EPUB with pdfcanada.ca, then use Calibre to convert EPUB → AZW3. Transfer via USB or email to your Kindle address (@kindle.com).
- **Popular models in Canada**: Kindle Paperwhite, Kindle Oasis, Kindle Scribe.
- **Alternative**: Email the original PDF to Amazon (conversions@kindle.com) — Amazon will automatically convert, but with less control over quality.

**Kobo (Canada - company based in Toronto)**:
- **Native format**: ✅ EPUB, PDF.
- **EPUB support**: Excellent. Kobo is one of the best e-readers for EPUB (EPUB 3 support, smooth reading, advanced font adjustment).
- **Transfer**: USB (drag-and-drop), Kobo Desktop, Adobe Digital Editions for DRM-protected books.
- **Popular models**: Kobo Clara 2E, Kobo Libra 2, Kobo Sage, Kobo Elipsa 2E.
- **Canadian advantage**: Integration with Canadian public libraries (Pretnumerique.ca). Excellent French support.

**Apple Books (iOS/macOS)**:
- **Native format**: ✅ EPUB, PDF.
- **EPUB support**: Excellent (EPUB 2 and 3, audio/video support in EPUB 3).
- **Transfer**: Drag-and-drop into Apple Books (macOS), AirDrop, or via iCloud Drive.
- **Synchronization**: Bookmarks, annotations synced between iPhone, iPad, Mac via iCloud.
- **Accessibility**: Integrated VoiceOver (screen reader) for visually impaired users.

**Google Play Books (Android/iOS/Web)**:
- **Native format**: ✅ EPUB, PDF.
- **EPUB support**: Very good. Reading in browser or mobile apps.
- **Transfer**: Upload to Play Books library via web interface (play.google.com/books/uploads).
- **Limits**: 100 MB per file, 1000 books in your library.
- **Synchronization**: Multi-device (Android phone, tablet, Chromebook, computer).

**Barnes & Noble Nook (US, uncommon in Canada)**:
- **Native format**: ✅ EPUB, PDF.
- **EPUB support**: Good (Nook GlowLight, Nook Tablet).
- **Transfer**: USB, Nook app for Android/iOS.

**PocketBook (Europe/Canada)**:
- **Native format**: ✅ EPUB, PDF, MOBI, AZW3, FB2, and 17 other formats (!).
- **EPUB support**: Excellent. PocketBook supports almost all formats without conversion.
- **Models**: PocketBook Touch HD 3, PocketBook InkPad.

**Onyx Boox (E-ink Android)**:
- **Native format**: ✅ EPUB, PDF, MOBI, AZW3, CBR, CBZ, and more.
- **EPUB support**: Excellent. Full Android devices, installable Google Play Store (Kindle, Kobo, Libby apps).
- **Models**: Boox Nova Air, Boox Note Air, Boox Tab Ultra.
- **Advantage**: Maximum flexibility (can read any format + install any Android app).

**Reading applications (smartphones/tablets)**:

| Application | Platforms | EPUB Support | Notes |
|-------------|-----------|--------------|-------|
| **Calibre** | Windows, macOS, Linux | ✅ Excellent | Complete library + format conversion. Essential for managing your collection. |
| **Adobe Digital Editions** | Windows, macOS, iOS, Android | ✅ Excellent | Necessary for Adobe DRM books (public libraries). |
| **Libby** | iOS, Android | ✅ (libraries) | Borrowing books from Canadian libraries. EPUB and audiobooks. |
| **Moon+ Reader** | Android | ✅ Excellent | Highly customizable. Themes, fonts, reading tracking. |
| **FBReader** | Android, iOS, Linux | ✅ Good | Open-source. Network support (reading from cloud). |
| **Aldiko** | Android, iOS | ✅ Good | Simple interface. Adobe DRM support. |
| **ReadEra** | Android | ✅ Very good | Free without ads. Multi-format support (EPUB, PDF, MOBI, DOC). |

**Recommendations for Canadians**:
- **Limited budget**: Kobo Clara 2E (~150 CAD). Excellent EPUB e-reader, Canadian company, public library integration.
- **Apple ecosystem**: Apple Books on iPad/iPhone. Free if you already have an iOS device.
- **Maximum flexibility**: Onyx Boox (250-500 CAD). Full Android device, all formats, all apps.
- **Already Amazon user**: Keep your Kindle, use Calibre to convert EPUB → AZW3.
- **Computer reading**: Calibre (free, all platforms). Complete library + integrated reader.

**DRM and protected books**:
Many books borrowed from public libraries (Pretnumerique.ca, OverDrive) are protected by **Adobe DRM** or **LCP (Lightweight Content Protection)**. These EPUB files can only be opened in authorized applications (Adobe Digital Editions, Kobo, etc.) and cannot be converted. Respect copyright and terms of use — Canada's Copyright Act (C-11) protects digital works.`
            },
            {
                id: "scanned-pdfs-ocr",
                title: "Converting scanned PDFs: OCR guide and best practices",
                content: `Scanned PDFs (page images) require an additional step: optical character recognition (OCR).

**What is a scanned PDF?**
- Paper document digitized with a scanner or camera
- Each page is an image (JPEG/PNG) without selectable text
- Examples: old books, archival documents, paper forms, handwritten notes (if scanned)
- **Simple test**: Try to select text with your mouse. If impossible → scanned PDF.

**Why is OCR necessary?**
Without OCR, your EPUB will only contain page images — exactly the problem you're trying to solve! OCR transforms text images into real selectable, searchable, resizable text.

**Our OCR process (available separately)**:
1. **Image preprocessing**: Contrast enhancement, skew correction, noise removal, binarization (conversion to black and white).
2. **Layout detection**: Identifying text zones, images, tables.
3. **Character recognition**: Using Tesseract OCR (Google open-source) with French/English language models.
4. **Post-processing**: Correcting common errors (l vs I, 0 vs O), spell checking.
5. **Text PDF generation**: Creating PDF with invisible text layer superimposed on images (searchable PDF).

**OCR quality: important factors**:
- **Scan resolution**: Minimum 300 DPI (dots per inch) recommended. 600 DPI for small text. 150 DPI scans give poor results.
- **Contrast**: Black text on clean white background. Yellowing, stains, shadows reduce accuracy.
- **Skew**: Straight pages. Skew >5° seriously degrades recognition.
- **Font**: Standard fonts (Times New Roman, Arial) work better than handwritten or decorative fonts.
- **Language**: Configure correct language (Canadian French for Quebec documents, English for other provinces).

**Expected accuracy**:
- **Clean printed book (300+ DPI)**: 95-99% accuracy. Few minor errors.
- **Old typewritten document**: 85-95%. Frequent errors on worn characters.
- **Photocopy of photocopy**: 70-85%. Many errors, manual review necessary.
- **Handwritten notes**: 30-60% (highly variable). Standard OCR works poorly. Requires specialized handwriting OCR (Google Cloud Vision API, Microsoft Azure OCR).

**Recommended workflow for scanned PDFs**:
1. **Scan or obtain your scanned PDF**
2. **Use our OCR PDF tool** (pdfcanada.ca/ocr-pdf) to create a PDF with selectable text
3. **Check OCR quality**: Open the PDF, select text, check for errors
4. **Manual corrections** (optional): Use Adobe Acrobat or text editor to correct major errors
5. **Convert to EPUB** with our PDF to EPUB tool

**Alternatives for scanned books**:
- **Library and Archives Canada** (bac-lac.gc.ca): Many Canadian heritage books already digitized and OCRed.
- **Internet Archive** (archive.org): Millions of scanned books with OCR. Search for your book before scanning.
- **Google Books**: Book previews, some available in full text.
- **Project Gutenberg** (gutenberg.org): 70,000+ public domain books in free EPUB/MOBI/TXT (works published before 1928 generally).

**Canadian legal considerations**:
- **Copyrighted books**: Scanning a book for personal use is generally accepted (fair dealing exception), but distributing scans violates copyright.
- **Government documents**: Canadian government documents (federal) are generally not copyrighted and can be freely reproduced (Copyright Act, section 12).
- **Theses and dissertations**: Check your university's policies. Many Canadian theses are available via Theses Canada (collectionscanada.gc.ca).

**Alternative OCR tools (if you prefer)**:
- **Adobe Acrobat Pro** (paid, ~240 CAD/year): Excellent OCR, scan correction, advanced editing.
- **ABBYY FineReader** (paid, ~120 CAD): Probably the best commercial OCR. Support for 190+ languages.
- **Tesseract (command line)** (free, open-source): OCR engine we use, but technical interface.
- **Google Drive** (free with Google account): Upload a scanned PDF, open with Google Docs → automatic OCR. Works surprisingly well for simple documents.

**Advice for Canadian students**:
Many students scan their textbooks for reading on tablet/e-reader. Check first if your university library offers digital versions (many have ebook licenses). Respect your institution's intellectual property policies.`
            },
            {
                id: "use-cases",
                title: "Real-world use cases: When and why convert PDF to EPUB",
                content: `Discover how different Canadian users benefit from PDF to EPUB conversion.

**Leisure reading and ebooks**:
- **Novels and essays downloaded as PDF**: You downloaded a public domain book (Project Gutenberg, Internet Archive) as PDF. Convert to EPUB for comfortable reading on Kobo or Kindle.
- **Books purchased as PDF**: Some independent publishers sell books as PDF (less common). Convert to EPUB for integration into your Apple Books/Google Play Books library.
- **Fanfiction and amateur writing**: Many amateur authors share their writings as PDF. Convert to EPUB for reading on e-reader with e-ink lighting (less eye strain than smartphone).

**Students and academics**:
- **Research articles and papers**: Scientific articles downloaded from PubMed, arXiv, JSTOR as PDF. Convert to EPUB for annotated reading on tablet (iPad + Apple Pencil).
- **Theses and dissertations**: 200-300 page theses difficult to read as PDF on screen. EPUB allows text size adjustment, comfortable reading on e-reader.
- **Course notes**: Professors who share notes as PDF. Convert to EPUB for e-reader review (6-week battery vs 8 hours for tablet).
- **Textbooks**: PDF textbooks can be heavy (100+ MB). Optimized EPUB reduces size, speeds loading.

**Professionals and businesses**:
- **Reports and documentation**: Annual reports, white papers, technical guides as PDF. Convert to EPUB for mobile reading (train, plane).
- **Training and e-learning**: Company training materials distributed as PDF. EPUB allows reading on any device, better accessibility.
- **Professional books**: Professional development books purchased as PDF (O'Reilly, Manning sometimes). EPUB for unified library.

**Accessibility and special needs**:
- **Visually impaired users**: EPUB couples better with screen readers (NVDA, JAWS, VoiceOver) than PDFs. Reflowable text allows significant magnification without horizontal scrolling.
- **Dyslexia**: Specialized fonts (OpenDyslexic) easily applied to EPUB. Adjust letter/line spacing.
- **Elderly people**: Very large text (24-30pt) readable on EPUB e-reader. PDF requires constant zooming.

**Travelers and mobility**:
- **Travel guides and documentation**: Lonely Planet, Routard guides sometimes as PDF. EPUB for offline smartphone reading (airplane mode).
- **User manuals**: Device manuals (cameras, drones) as PDF. EPUB for quick phone consultation.

**Book lovers and collectors**:
- **Digital library management**: Standardizing your collection to EPUB. Calibre allows centralized management, metadata, multi-device synchronization.
- **Family archiving**: Digitizing family recipe books, scanned personal journals. Convert to EPUB for sharing with family members on their preferred e-readers.

**Specific Canadian use case**:
- **French books from Quebec**: Quebec works as PDF (independent digital editions). Convert to EPUB for reading on Kobo (excellent French support).
- **Government documents**: Statistics Canada reports, Service Canada documentation as PDF. Convert to EPUB for extensive reading (400+ page reports).
- **Indigenous literature**: First Nations stories and narratives sometimes distributed as PDF. EPUB for preservation and accessibility.
- **Library digital lending**: Some Pretnumerique.ca books as PDF. Convert to EPUB for better experience (if permitted by DRM).

**File size reduction**:
- **Large PDFs (50-200 MB)**: Books with high-resolution images. Convert to EPUB with image optimization can reduce to 10-30 MB.
- **Limited storage**: E-readers with 4-8 GB storage. EPUB allows storing 2-3x more books than PDF.

**Multi-device synchronization**:
- **Reading on multiple devices**: Start reading on Kobo in the evening, continue on iPhone the next day on the subway. EPUB allows position synchronization (via Kobo Cloud, Apple iCloud).
- **Annotations and bookmarks**: Notes synced between devices (Apple Books, Google Play Books).

**Environmental benefits**:
- **Low-power e-ink e-readers**: Kindle/Kobo with EPUB last 4-6 weeks per charge vs 1-2 days for LCD tablet reading PDFs.
- **Reduced printing**: PDFs readable on e-reader = less paper printing. Ink, paper savings, environmental impact.

**What does NOT work well in EPUB**:
- ❌ Magazines with complex layout → Keep as PDF or use dedicated apps (Magzter, PressReader)
- ❌ Comics → Use CBR/CBZ or comic apps (Comixology, YACReader)
- ❌ Photography books → Fixed layout crucial, keep as PDF
- ❌ Musical scores → PDF essential for precise layout
- ❌ Technical documents with complex diagrams → Often better as PDF`
            },
            {
                id: "best-practices",
                title: "Best practices for high-quality PDF to EPUB conversion",
                content: `Optimize your conversions with expert tips to obtain perfect EPUBs.

**Before conversion: Prepare your PDF**

1. **Check text selectability**:
   - Open the PDF in Adobe Acrobat Reader or browser
   - Try to select text with mouse
   - If impossible → scanned PDF, use OCR first

2. **Inspect document structure**:
   - PDFs with well-marked section headings give better results
   - Check PDF bookmarks — they become EPUB table of contents
   - Well-structured documents (created from Word/LaTeX with heading styles) convert better

3. **Simplify complex layouts**:
   - Multiple columns, boxes, sidebars can cause reading order problems
   - If possible, obtain a "single column" version of the original document

4. **Check images**:
   - High-resolution images (>2000px) increase file size
   - Consider compressing the PDF before conversion (our Compress PDF tool)

**During conversion: Optimal configuration**

5. **Choose the right options** (if available in tool):
   - **TOC detection**: Enable for automatic table of contents generation
   - **Image preservation**: Yes for illustrated books, no for pure text (reduces size)
   - **Font optimization**: Uses e-reader system fonts (faster, less space)

6. **Target file size**:
   - Aim for <10 MB for most e-readers (maximum compatibility)
   - Text novels: generally 500 KB - 2 MB
   - Technical books with images: 5-15 MB
   - Beyond 50 MB: some e-readers may have performance issues

**After conversion: Validation and correction**

7. **Test the EPUB file**:
   - Open in Calibre (integrated ebook viewer) before transferring to e-reader
   - Check table of contents: Does it work? Correct chapters?
   - Browse a few pages: Logical text order? Well-placed images?
   - Check special characters: French accents (é, è, ê, à, ù), quotes («»), œ, æ

8. **Validate with EPUBCheck**:
   - Official IDPF tool to verify standards compliance
   - Integrated in Calibre: Right-click on book → Edit book → Check book
   - Corrects common errors (improperly closed tags, broken links)

9. **Edit metadata**:
   - Use Calibre to add/correct: Title, Author, Publication Date, Publisher, ISBN
   - Add a cover: Right-click → Edit metadata → Download cover
   - Tags for organization: Fiction, Non-fiction, Technical, Novel, Essay

10. **Optimize for your specific e-reader**:

**For Kindle (after EPUB → AZW3 conversion via Calibre)**:
- Use "Kindle" profile in Calibre during conversion
- Enable "Remove spacing between paragraphs" if your book has too many spaces
- Disable "Insert page breaks before" if you want continuous flow

**For Kobo**:
- Kobo supports EPUB 3, advanced CSS, custom fonts
- Add Kobo metadata (series, number in series) for better organization
- Use Kobo Utilities (Calibre plugin) for specific optimizations

**For Apple Books**:
- Apple supports EPUB Fixed Layout for illustrated books (alternative to reflowable EPUB)
- Add iBooks Author metadata if created in iBooks Author
- Test on iPhone AND iPad (rendering sometimes different)

**Resolving common problems**

11. **Missing or misplaced images**:
   - Open EPUB with Calibre Edit Book (Edit book)
   - Check "Images" folder — all present?
   - Inspect HTML for broken image links: \`<img src="images/fig1.jpg">\`

12. **Chaotic reading order**:
   - Common problem with multi-column PDFs or complex layouts
   - Solution: Start from source document (Word, LaTeX) if possible
   - Or manually edit EPUB in Calibre (move paragraphs in HTML)

13. **Missing or incorrect table of contents**:
   - Calibre → Edit book → Tools → Table of Contents → Edit Table of Contents
   - Manually add entries by pointing to appropriate heading tags

14. **Strange characters (?, □, �)**:
   - Encoding problem. The PDF used a custom font with non-standard characters
   - Solution: Manual correction in Calibre or return to source document

15. **EPUB file too large**:
   - Calibre → Edit book → Tools → Compress Images
   - Reduce JPEG quality to 75-80 (little visual loss)
   - Resize images >1200px to 1200px max

**Advanced tips for technical users**

16. **Direct EPUB editing**:
   - EPUB = ZIP file. Rename \`.epub\` to \`.zip\`, decompress
   - Edit XHTML/HTML files with code editor (VS Code, Notepad++)
   - Modify CSS for custom styles
   - Re-zip (mimetype first, uncompressed!) and rename to \`.epub\`

17. **Use Sigil (open-source EPUB editor)**:
   - Alternative to Calibre for EPUB editing
   - WYSIWYG interface + source code
   - Plugins for validation, optimization, metadata addition

18. **Batch conversion scripts**:
   - Calibre supports command-line conversion: \`ebook-convert input.pdf output.epub\`
   - To convert 100 PDFs to EPUB: bash/Python script with loop

**Quality vs Speed: Trade-offs**

19. **Fast conversion (1-5 seconds)**:
   - Text directly extracted, minimal reflow, non-optimized images
   - Good for: Quick reading, temporary documents

20. **High-quality conversion (30-60 seconds)**:
   - Deep structure analysis, TOC detection, image optimization, validation
   - Good for: Books to keep, sharing, archiving

**Advice for perfectionists**:
If you want a perfect EPUB for a favorite book, consider:
- Start from source document (Word, LaTeX, Markdown) rather than PDF
- Use Pandoc (command-line tool) for Markdown → EPUB conversion (maximum control)
- Or professional conversion services (Reedsy, Vellum) if you're an author/publisher

**Alternatives to automatic conversion**:
For important books (publication, long-term archiving), manual conversion gives better results:
1. Extract text from PDF (copy-paste into editor)
2. Format in Markdown or HTML
3. Convert to EPUB with Pandoc or Calibre from HTML
4. Finely edit in Sigil or Calibre

But for 95% of use cases (personal reading), our automatic converter is largely sufficient!`
            },
            {
                id: "privacy-security",
                title: "Privacy and security: Why local processing is crucial",
                content: `PDF to EPUB conversion often involves personal, professional, or sensitive documents. Understand why our local approach protects your privacy.

**The problem with traditional online converters**

Most online PDF converters (Zamzar, Online-Convert, PDF2Go, CloudConvert, Convertio, etc.) work according to this model:
1. **You upload your file** to their servers (Amazon AWS, Google Cloud, Microsoft Azure)
2. **Their servers perform conversion** (often in a datacenter in the US or Europe)
3. **You download the converted file** from their servers
4. **They "promise" to delete your files** after a few hours (1h, 24h, 7 days)

**Risks of this model**:
- ❌ **Interception during transfer**: Even with HTTPS, metadata exposed (file size, time, IP address)
- ❌ **Employee access**: System administrators can technically access all uploaded files
- ❌ **Data breaches**: Breach history: Dropbox (2012, 68M accounts), Adobe (2013, 38M users), Equifax (2017, 147M people)
- ❌ **Government warrants**: US servers subject to CLOUD Act (access by US federal agencies)
- ❌ **Content analysis**: Some services scan files for targeted advertising, AI training, illegal content detection
- ❌ **Undisclosed retention**: Despite promises, no guarantee of actual deletion

**Examples of sensitive documents often converted**:
- **Business contracts**: Non-disclosure agreements (NDA), employment contracts, sales agreements
- **Medical documents**: Test results, personal medical records (potential PHIPA violation in Ontario, LPRPSP in Quebec)
- **Tax returns**: T4, T5, NR4, CRA tax returns (social insurance number, income)
- **Legal documents**: Wills, powers of attorney, divorce documents
- **Intellectual property**: Unpublished manuscripts, pre-publication scientific research, pending patents
- **Immigration documents**: IMM 5645, citizenship evidence, scanned passports
- **Purchased books and ebooks**: Potentially copyright protected

**Our approach: 100% local processing**

**How it works**:
1. **You select your PDF file**: File remains in your local file system
2. **File is loaded into your browser**: RAM of your computer/tablet/phone
3. **WebAssembly (Wasm) performs conversion**: Compiled code executes in the secure "sandbox" of your browser (Chrome, Firefox, Safari, Edge)
4. **EPUB file is generated locally**: In your device's memory
5. **You download the result**: Directly from your browser to your file system

**No network transmission. No server involved. Zero upload.**

**Security advantages**:
- ✅ **Total confidentiality**: Your files never leave your device. Impossible to intercept what is never transmitted.
- ✅ **PIPEDA compliance**: Canadian Personal Information Protection and Electronic Documents Act (2000). No personal data collection.
- ✅ **GDPR compliance**: European regulation (applicable if you process data of EU citizens).
- ✅ **HIPAA-friendly**: For Canadian healthcare professionals handling medical data (though HIPAA is American, similar principles to PHIPA/LPRPSP).
- ✅ **No breach risk**: Impossible to breach data that doesn't exist on servers.
- ✅ **Works offline**: Once the page is loaded, you can disconnect WiFi/Ethernet — conversion still works (!).

**Technical verification (for skeptics)**:
You can verify that nothing is sent to our servers:
1. Open pdfcanada.ca/pdf-to-epub in Chrome/Firefox
2. Press F12 to open DevTools
3. Go to "Network" tab
4. Convert a PDF file to EPUB
5. Observe: No POST/PUT requests to servers with your file. Only GET requests to load site resources (HTML, CSS, JS, Wasm)

**Technologies used for local processing**:

- **WebAssembly (Wasm)**: Bytecode compiled from C/C++/Rust executing at near-native speed in browser. We use open-source libraries compiled to Wasm:
  - **pdf.js** (Mozilla): PDF parsing and rendering
  - **epub-gen**: EPUB file generation

- **File API**: Standard JavaScript API allowing browser to access local files without sending them elsewhere

- **Blob / ArrayBuffer**: JavaScript data structures for manipulating binary files in memory

**Local processing limitations**:

- **Computing power**: Depends on your device. A 2023 MacBook Pro will convert faster than a 2015 Chromebook. But for most PDFs (<50 MB), it's transparent.
- **Memory (RAM)**: Very large files (>500 MB) can cause slowdowns or crashes on devices with little RAM (4 GB or less).
- **Browser compatibility**: Requires modern browser supporting WebAssembly (Chrome 57+, Firefox 52+, Safari 11+, Edge 16+). All browsers since ~2018.

**Comparison: pdfcanada.ca vs Cloud converters**

| Criterion | pdfcanada.ca (Local) | Zamzar, Online-Convert, etc. (Cloud) |
|-----------|---------------------|--------------------------------------|
| **Privacy** | ✅ 100% private | ❌ Files on third-party servers |
| **PIPEDA compliance** | ✅ Compliant | ⚠️ Depends on their policy |
| **Speed (10 MB PDF)** | ✅ 5-15 sec | ⚠️ 30-120 sec (upload + queue + download) |
| **Works offline** | ✅ Yes | ❌ No (requires connection) |
| **Size limit** | ⚠️ ~500 MB (RAM dependent) | ⚠️ 50-100 MB (server limit) |
| **Cost** | ✅ Free unlimited | ⚠️ Free with limits (2-5 files/day) or paid |
| **No signup** | ✅ None | ⚠️ Often required for more than 2 conversions |
| **Conversion quality** | ✅ Excellent | ✅ Variable (generally good) |

**Use cases where local processing is ESSENTIAL**:
- **Lawyers / law firms**: Client confidentiality (attorney-client privilege). Transmitting documents to third parties violates professional ethics rules (Barreau du Québec, Law Society of Ontario).
- **Healthcare professionals**: Medical data (PHIPA Ontario, LPRPSP Quebec). Fines up to 500,000 CAD for violations.
- **Accountants / CPAs**: Client tax returns. CPA Canada requires client data protection.
- **Researchers**: Sensitive research data, pre-publication manuscripts (avoid intellectual theft).
- **Journalists**: Confidential source documents. Source protection (Canadian Association of Journalists).
- **Government**: "Protected A/B/C" documents. Transmission on non-government servers prohibited (GC Security Directive).
- **Businesses**: Trade secrets, non-public financial data (SOX obligations for public companies).

**Recommendations to maximize security**:

1. **Use HTTPS**: Check the padlock 🔒 in the address bar (https://www.pdfcanada.ca). Prevents interception during initial site loading.

2. **Delete files after conversion**: Delete the original PDF and converted EPUB from your Downloads if you no longer need them (avoid unauthorized access to your computer).

3. **Use an up-to-date browser**: Recent security updates. Chrome, Firefox, Safari, Edge update automatically.

4. **Avoid public networks for sensitive documents**: Even with local processing, loading the pdfcanada.ca site on public WiFi can expose metadata. Use VPN or cellular data for very sensitive documents.

5. **Check browser extensions**: Some extensions (screenshot, download managers) can access processed files. Disable for ultra-sensitive documents.

6. **For maximum paranoia**: Download our source code (GitHub: pdfcanada-tools, if available), host locally, use offline. Or use command-line tools (Calibre \`ebook-convert\`) on air-gapped machine.

**Transparency and trust**:
Unlike closed cloud services, our approach gives you complete control. You don't have to "trust us" to delete your files — they never reach us in the first place.

**And monetization?**
Legitimate question: If the service is free and we don't have access to files (so no data selling), how does pdfcanada.ca finance itself?
- Non-intrusive ads (disable with blocker if you prefer)
- Possible future freemium model (paid advanced features, basic conversion always free)
- Our mission: Offer accessible PDF tools to Canadians while respecting their privacy`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting: Solving common conversion problems",
                content: `Encountering problems when converting your PDFs to EPUB? Here are solutions to the most common errors.

**Problem 1: "Conversion failed" or generic error**

**Possible causes**:
- Corrupted or malformed PDF
- Password-protected PDF
- File too large for your available RAM
- PDF with non-standard complex structure

**Solutions**:
1. **Verify the PDF opens correctly** in Adobe Acrobat Reader. If it doesn't open, the file is corrupted.
2. **Remove the password**: Use our "Unlock PDF" tool or \`qpdf --decrypt\` command line
3. **Reduce file size**: Use our "Compress PDF" tool or split into smaller sections
4. **Try an alternative**: Calibre (ebook-convert) can process some PDFs that web converters cannot

**Problem 2: Missing text or blank pages in EPUB**

**Cause**: Scanned PDF without text layer (images only)

**Solution**:
1. **Use our OCR PDF tool** (pdfcanada.ca/ocr-pdf) to add a text layer
2. **Check if text is selectable** in the original PDF (Ctrl+A or Cmd+A)
3. If the PDF has proprietary embedded fonts, try printing the PDF to "new PDF" from Adobe Reader (flattens fonts)

**Problem 3: Chaotic text order / mixed paragraphs**

**Cause**: PDF with multi-column layout, boxes, or complex structure

**Solutions**:
1. **Simplify source PDF** if possible (obtain single-column version)
2. **Manual editing**: Calibre → Edit Book → Manually reorganize sections in HTML
3. **Alternative**: If it's a published book, look for an official EPUB version (often available on Amazon, Kobo, Google Books)

**Problem 4: Missing, pixelated, or distorted images**

**Causes**:
- Images with exotic formats (JBIG2, JPEG2000) not supported
- Vector images (SVG in PDF) poorly converted
- Too aggressive compression

**Solutions**:
1. **Open PDF in Adobe Acrobat** → File → Export to → Images → PNG (exports all images)
2. **Convert PDF** keeping original images if option available
3. **Manual editing**: Replace images in EPUB (Calibre Edit Book) with high-quality versions

**Problem 5: Missing table of contents (TOC)**

**Cause**: PDF without integrated bookmarks

**Solutions**:
1. **Create TOC manually** in Calibre:
   - Right-click on book → Edit Book
   - Tools → Table of Contents → Edit Table of Contents
   - Add entries by clicking on headings in text
2. **Alternative**: Sigil (EPUB editor) → Tools → Generate TOC

**Problem 6: EPUB file rejected by e-reader**

**Error**: "Unsupported format" or "Corrupted file"

**Causes**:
- Malformed EPUB (validation errors)
- EPUB 3 format on e-reader only supporting EPUB 2
- File too large

**Solutions**:
1. **Validate EPUB** with EPUBCheck:
   - Calibre → Edit Book → Tools → Check Book
   - Correct reported errors
2. **Convert to EPUB 2** if your e-reader is old:
   - Calibre → Convert Books → EPUB Output → EPUB Version → 2
3. **Reduce size**: Compress images (Calibre Edit Book → Tools → Compress Images)
4. **Test on another device** to isolate whether it's an e-reader or file problem

**Problem 7: Special characters displayed incorrectly (é → Ã©)**

**Cause**: Encoding problem (UTF-8 vs Latin-1)

**Solutions**:
1. **Re-encode to UTF-8**:
   - Calibre → Edit Book
   - Open HTML files in editor
   - File → Save → Ensure UTF-8 is selected
2. **Check encoding declaration**: XHTML file must have \`<?xml version="1.0" encoding="UTF-8"?>\`

**Problem 8: Extremely slow conversion (>5 minutes)**

**Causes**:
- Very large file (>100 MB)
- PDF with thousands of pages
- Old computer with little RAM

**Solutions**:
1. **Close other applications** to free RAM
2. **Split PDF into sections** (chapters) and convert separately, then merge resulting EPUBs
3. **Use Calibre** (desktop application) rather than web converter — often faster for large files
4. **Be patient**: Some complex PDFs really require 5-10 minutes

**Problem 9: "Not enough memory" or browser crash**

**Cause**: PDF file too large for available RAM

**Solutions**:
1. **Close all other browser tabs**
2. **Increase allocated memory**: Restart browser (frees RAM)
3. **Split the PDF** into smaller files (<50 MB each)
4. **Use a more powerful computer** or
5. **Use Calibre desktop** (better optimized for large files)

**Problem 10: Missing metadata (author, incorrect title)**

**Cause**: PDF without embedded metadata

**Solution**:
1. **Edit manually in Calibre**:
   - Right-click on book → Edit Metadata
   - Add Title, Author, Publication Date, Publisher, ISBN, etc.
   - Download cover (downloads cover from Google/Amazon)

**Problem 11: Kindle e-reader doesn't recognize EPUB**

**Cause**: Kindle does NOT support EPUB natively

**Solution**:
1. **Convert EPUB → AZW3** with Calibre:
   - Add EPUB to Calibre
   - Convert Books → Output format → AZW3
   - Transfer AZW3 to Kindle via USB
2. **Alternative**: Email EPUB to your Kindle address — Amazon will automatically convert (but less control)

**Problem 12: Footnotes became inaccessible**

**Cause**: Malformed hyperlink footnote links

**Solution**:
1. **Check links** in Calibre Edit Book:
   - Search for \`<a href="#note1">\` tags (links to notes)
   - Ensure anchors \`<a id="note1">\` exist
2. **Reformat notes** as end-of-chapter notes rather than footnotes

**Problem 13: Custom fonts missing**

**Cause**: EPUB doesn't contain embedded PDF fonts

**Solutions**:
1. **Embed fonts** in EPUB:
   - Calibre Edit Book → Add .ttf or .otf files to Fonts folder
   - Modify CSS to reference: \`@font-face { font-family: 'MyFont'; src: url('fonts/myfont.ttf'); }\`
2. **Use system fonts**: Most e-readers allow user to choose font

**Problem 14: EPUB too large for email**

**Cause**: Email attachment limit (generally 25 MB for Gmail)

**Solutions**:
1. **Compress images** in Calibre (Tools → Compress Images → 75% quality)
2. **Use a sharing service**: Google Drive, Dropbox, WeTransfer
3. **Transfer via USB**: Connect e-reader to computer, drag-and-drop

**Problem 15: Conversion successful but text unreadable (gibberish)**

**Cause**: PDF with custom fonts using non-standard encodings

**Solution**:
- Unfortunately, few automatic solutions
- **Alternative 1**: OCR (even if PDF is "textual") — Tesseract will visually read text
- **Alternative 2**: Return to source document (Word, LaTeX) if available

**Additional troubleshooting resources**:

- **MobileRead Forum** (mobileread.com/forums): EPUB/ebook expert community, very active, 24h responses
- **r/ebooks on Reddit**: Questions on formats, conversion, e-readers
- **Calibre Documentation** (manual.calibre-ebook.com): Complete guide on conversions, editing, troubleshooting
- **EPUBCheck** (github.com/w3c/epubcheck): Official validation tool

**When to abandon automatic conversion**:

Some PDFs are simply too complex for quality automatic conversion:
- Scientific manuals with hundreds of mathematical equations
- Art books with complex artistic layout
- Musical scores
- Legal documents with critical annotations and highlights
- Comics (use CBR/CBZ rather than EPUB)

For these cases, consider:
- **Keep PDF** and use a tablet (iPad, Android) with good PDF reading app (PDF Expert, Foxit)
- **Professional manual conversion** (Reedsy services, specialized Fiverr freelancers)
- **Recreate the book** in dedicated EPUB tool (Sigil, Vellum, Scrivener)

**Need additional help?**

If you encounter a problem not listed here:
1. Check our FAQ below
2. Consult MobileRead forums or r/ebooks
3. Try Calibre (solves 80% of conversion problems)
4. For professionals: consider paid tools (Adobe InDesign + EPUB plugin, Vellum for macOS authors)`
            },
            {
                id: "advanced-features",
                title: "Advanced features and EPUB optimizations",
                content: `For users who want to go further and create professional-quality EPUBs.

**Advanced table of contents (TOC)**

**Hierarchical TOC**:
The best EPUBs have a multi-level table of contents:
- Part I: Introduction
  - Chapter 1: Context
  - Chapter 2: Methodology
- Part II: Results
  - Chapter 3: Quantitative analysis
    - Section 3.1: Descriptive statistics
    - Section 3.2: Regression

**Create hierarchical TOC in Calibre**:
1. Edit Book → Tools → Table of Contents
2. Automatically detect based on HTML tags (h1, h2, h3)
3. Manually adjust indentation (Indent / Unindent)

**Dublin Core metadata**

EPUB uses the Dublin Core standard for metadata:
- **dc:title**: Book title
- **dc:creator**: Author (can be multiple)
- **dc:subject**: Keywords / subjects (Fiction, Science-Fiction, Canadian Novels)
- **dc:description**: Book summary
- **dc:publisher**: Publisher
- **dc:date**: Publication date (ISO 8601 format: 2024-03-15)
- **dc:identifier**: ISBN (978-1234567890) or other unique identifier
- **dc:language**: Language (en-CA for Canadian English, fr-CA for Canadian French)

**Adding in Calibre**:
- Edit Metadata → Fill all fields
- Tags: Use commas (Science-Fiction, Space Opera, Hugo Award Winner)

**Custom metadata**:
Calibre allows adding custom fields:
- Series and number (#2 in "The Expanse")
- Personal rating (5 stars)
- Reading status (Read, In Progress, To Read)

**Custom fonts**

Embed fonts for special typography:

1. **Add font files** (.ttf, .otf) in Calibre Edit Book → Fonts folder
2. **Modify CSS**:
\`\`\`css
@font-face {
    font-family: 'Crimson Text';
    src: url('../fonts/CrimsonText-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'Crimson Text', Georgia, serif;
}
\`\`\`

**Recommended fonts for ebooks**:
- **Serif**: Crimson Text, EB Garamond, Merriweather (long reading)
- **Sans-serif**: Open Sans, Lato, Roboto (technical texts)
- **Monospace**: Fira Code, Source Code Pro (code examples)

**Warning**: Embedded fonts increase file size (500 KB - 2 MB per font). Many readers prefer to use their e-reader's system fonts.

**Advanced CSS for EPUB**

**Paragraph styles**:
\`\`\`css
/* First paragraphs without indentation */
p.first {
    text-indent: 0;
    margin-top: 1em;
}

/* Standard paragraphs with indentation */
p {
    text-indent: 1.5em;
    margin: 0;
    text-align: justify;
}

/* Quotes */
blockquote {
    margin: 1em 2em;
    font-style: italic;
    border-left: 3px solid #666;
    padding-left: 1em;
}
\`\`\`

**Heading styles**:
\`\`\`css
h1 {
    font-size: 2em;
    margin: 2em 0 1em 0;
    text-align: center;
    page-break-before: always; /* New chapter = new page */
}

h2 {
    font-size: 1.5em;
    margin: 1.5em 0 0.75em 0;
}
\`\`\`

**Page breaks**:
\`\`\`css
.new-chapter {
    page-break-before: always; /* Force new page before */
}

.keep-together {
    page-break-inside: avoid; /* Avoid cutting this element */
}
\`\`\`

**Responsive images**

For images to adapt to all screen sizes:

\`\`\`css
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em auto; /* Center image */
}
\`\`\`

**Cover image**

A professional cover improves presentation:

**Recommended dimensions**:
- **Size**: 1600 x 2400 px (2:3 ratio)
- **Format**: JPEG or PNG
- **Weight**: <500 KB
- **Resolution**: 72 DPI (sufficient for screens, 300 DPI unnecessary)

**Adding in Calibre**:
1. Edit Metadata → Download cover (downloads from Amazon/Google)
2. Or: Browse → Select local image

**Hyperlinks and cross-references**

**Internal links** (to another section of the book):
\`\`\`html
<p>See <a href="#chapter5">Chapter 5</a> for more details.</p>
...
<h2 id="chapter5">Chapter 5</h2>
\`\`\`

**External links** (to websites):
\`\`\`html
<p>More info on <a href="https://www.example.com">our site</a>.</p>
\`\`\`

**Interactive footnotes**:
\`\`\`html
<p>Main text<a href="#note1" id="ref1"><sup>1</sup></a>.</p>
...
<aside id="note1">
    <p><a href="#ref1">1.</a> Footnote text.</p>
</aside>
\`\`\`

**EPUB 3: Multimedia features**

EPUB 3 supports advanced features:

**Embedded audio**:
\`\`\`html
<audio controls>
    <source src="audio/chapter1.mp3" type="audio/mpeg">
    Your e-reader doesn't support audio.
</audio>
\`\`\`

**Video**:
\`\`\`html
<video controls width="100%">
    <source src="video/demo.mp4" type="video/mp4">
</video>
\`\`\`

**MathML** (mathematical formulas):
\`\`\`html
<math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
        <mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup>
    </mrow>
</math>
\`\`\`

**Warning**: Variable support depending on e-readers. Kindle doesn't support full EPUB 3. Apple Books and Kobo have good support.

**EPUB Fixed Layout (FXL)**

For books requiring fixed layout (children's illustrated books, comics, photo books):

**FXL metadata** (OPF file):
\`\`\`xml
<meta property="rendition:layout">pre-paginated</meta>
<meta property="rendition:spread">landscape</meta>
\`\`\`

**Creation**: Use specialized tools (Adobe InDesign, Affinity Publisher, Book Creator)

**Accessibility (WCAG / ARIA)**

Make your EPUB accessible to visually impaired users:

**Alt text for images**:
\`\`\`html
<img src="images/graph1.png" alt="Graph showing exponential growth from 2010 to 2024">
\`\`\`

**Semantic structure**:
\`\`\`html
<nav role="doc-toc">
    <ol>
        <li><a href="#ch1">Chapter 1</a></li>
    </ol>
</nav>

<section role="doc-chapter">
    <h1>Chapter 1</h1>
    ...
</section>
\`\`\`

**Document language**:
\`\`\`html
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-CA" xml:lang="en-CA">
\`\`\`

**Validation with Ace**:
DAISY Consortium offers "Ace" (Accessibility Checker for EPUB): daisy.org/activities/software/ace/

**File size optimization**

**Compress images**:
- JPEG: 75-85% quality (balance quality/size)
- PNG: Use tools like OptiPNG, PNGGauntlet
- Convert PNG → JPEG for photos (PNG for graphics, text)

**Clean HTML code**:
- Remove unnecessary spaces/tabs
- Combine CSS files (single style.css instead of 10)

**Remove image metadata** (EXIF):
Use exiftool or image editing tools to remove GPS data, camera, etc.

**Advanced tools for content creators**

**Sigil** (open-source EPUB editor):
- Visual interface + code
- Plugins: FlightCrew (validation), PageEdit (WYSIWYG)
- Better than Calibre Edit Book for intensive editing

**Pandoc** (universal command-line converter):
\`\`\`bash
pandoc book.md -o book.epub --toc --epub-cover-image=cover.jpg --metadata title="My Book"
\`\`\`
Converts Markdown → EPUB with automatic TOC

**Vellum** (macOS, paid ~250 USD):
- Beautiful WYSIWYG interface
- Export EPUB, MOBI, print-ready PDF
- Preferred by independent authors

**Adobe InDesign** (professional, paid ~30 CAD/month):
- Total control over typography, layout
- Export EPUB 2/3, EPUB FXL
- High learning curve

**Calibre CLI (command line)**:
Batch conversion:
\`\`\`bash
ebook-convert book.pdf book.epub --enable-heuristics --chapter "//*[@class='chapter']" --pretty-print
\`\`\`

**DRM and content protection**

If you're an author/publisher wanting to protect your EPUB:

**Adobe Content Server**: Applies Adobe DRM (requires server, expensive)
**Watermarking**: Digital watermark (visible or invisible) identifying the buyer
**LCP (Lightweight Content Protection)**: Modern DRM (Readium Foundation), less restrictive than Adobe DRM

**Our opinion**: DRM frustrates legitimate readers and is easily circumvented. Prefer selling without DRM (like Tor Books, O'Reilly) with social watermarking ("Purchased by Jean Tremblay, jean@example.com").

**Batch conversion and automation**

To convert 100 PDFs to EPUB:

**Bash script**:
\`\`\`bash
#!/bin/bash
for pdf in *.pdf; do
    ebook-convert "$pdf" "\${pdf%.pdf}.epub" --enable-heuristics
done
\`\`\`

**Python with subprocess**:
\`\`\`python
import subprocess
import glob

for pdf in glob.glob("*.pdf"):
    epub = pdf.replace(".pdf", ".epub")
    subprocess.run(["ebook-convert", pdf, epub, "--enable-heuristics"])
\`\`\`

**Multi-device testing**

Test your EPUB on:
- **Calibre ebook viewer** (desktop)
- **Apple Books** (iOS simulator or real device)
- **Kobo desktop** or Kobo Forma/Libra
- **Adobe Digital Editions** (Windows/Mac)
- **Google Play Books** (upload to library)
- **Kindle Previewer** (after EPUB → AZW3 conversion)

**Different rendering depending on e-readers** — Don't aim for pixel-perfect perfection. Aim for readability and logical structure.

**Resources to go deeper**:

- **IDPF EPUB 3 Specs** (idpf.org/epub/31): Complete official specifications
- **Practical EPUB Metadata** (blog.threepress.org): Detailed metadata guide
- **EbookArchitects.com**: Advanced tutorials (EPUB 3, accessibility, FXL)
- **The Book Designer** (thebookdesigner.com): Typography advice, cover design
- **r/selfpublish** on Reddit: Independent author community, EPUB/Kindle advice

EPUB optimization is an art AND a science. These techniques will allow you to create professional-quality ebooks!`
            }
        ],
        faq: [
            {
                q: "How to convert PDF to EPUB for Kindle?",
                a: "Use our tool to convert your PDF to EPUB, then use the free Calibre software to convert it to MOBI/AZW3 Kindle-compatible format. You can also email the EPUB to your Kindle (@kindle.com) and Amazon will automatically convert it."
            },
            {
                q: "Is PDF to EPUB conversion free?",
                a: "Yes, our service is completely free, with no signup, no file limits, and no hidden fees. Conversion happens in your browser (local processing), so no server is involved. That's our commitment to Canadians — accessible and privacy-respecting PDF tools."
            },
            {
                q: "Can I convert scanned PDFs?",
                a: "Our tool works best with PDFs containing selectable text. For scanned PDFs (page images), first use our OCR PDF tool (pdfcanada.ca/ocr-pdf) to add a text layer, then convert to EPUB. Scans of 300 DPI or higher give the best OCR results."
            },
            {
                q: "How to keep the layout during conversion?",
                a: "EPUB format is 'reflowable' by nature, meaning text adapts to screen size — that's its advantage! We preserve structure (headings, paragraphs, lists, images) but exact layout may vary. For documents requiring fixed layout (magazines, comics), keep PDF or use EPUB Fixed Layout (FXL)."
            },
            {
                q: "How long does conversion take?",
                a: "Most conversions take 5-15 seconds for a typical 10-20 MB PDF. Very long documents (500+ pages) or large files (100+ MB) can take 1-3 minutes. Time depends on your computer's power since processing is entirely local in your browser."
            },
            {
                q: "Are my images preserved?",
                a: "Yes, we include all images from your PDF in the EPUB file. Images are automatically resized and optimized for e-readers (max 1200x1600px, JPEG compression 85%). If you encounter missing or pixelated images, check that the source PDF doesn't use exotic formats (JBIG2, JPEG2000)."
            },
            {
                q: "Will the EPUB work on my Kobo?",
                a: "Absolutely! Kobo (Canadian company based in Toronto) perfectly supports EPUB — it's its native format. Simply transfer your converted EPUB via USB (drag-and-drop to your Kobo folder) or use Kobo Desktop. Kobos support EPUB 2 and EPUB 3, with excellent French support."
            },
            {
                q: "What's the difference between EPUB 2 and EPUB 3?",
                a: "EPUB 2 (2007) is the classic standard, widely supported by all e-readers. EPUB 3 (2011) adds multimedia support (audio, video), MathML (mathematical formulas), improved accessibility (ARIA), and HTML5. Our converter generates EPUB 3 by default, but compatible with EPUB 2. Kobo and Apple Books support EPUB 3 well; Kindle requires conversion to MOBI/AZW3."
            },
            {
                q: "Can I convert DRM-protected books?",
                a: "No. PDFs protected by Adobe DRM, password, or other protections cannot be converted without first removing the protection. For password-protected PDFs you legally own, use our Unlock PDF tool. Warning: Circumventing DRM on purchased books often violates terms of use and may infringe Canada's Copyright Act."
            },
            {
                q: "Is the table of contents automatically generated?",
                a: "Yes, if your PDF contains bookmarks or clear heading structure. Our converter detects font styles and bookmarks to generate EPUB TOC (nav.xhtml file). If TOC is missing or incorrect, you can create it manually in Calibre (Edit Book → Tools → Table of Contents)."
            },
            {
                q: "How do I transfer my EPUB to my e-reader?",
                a: "Several methods: **USB**: Connect your e-reader to computer, drag-and-drop EPUB to appropriate folder. **Email**: Email EPUB to your Kindle/Kobo address. **Applications**: Use Kobo Desktop, Adobe Digital Editions, Calibre to sync. **Cloud**: Upload to Google Play Books or Apple Books for multi-device sync."
            },
            {
                q: "Is my metadata (author, title) preserved?",
                a: "Yes, we extract metadata from the PDF (title, author, subject, keywords) and include them in the EPUB (Dublin Core standard). If your PDF has no metadata or it's incorrect, you can edit it in Calibre (right-click → Edit Metadata). Add title, author, publisher, ISBN, cover, tags, etc."
            },
            {
                q: "Can I convert multiple PDFs to EPUB simultaneously?",
                a: "Currently, our web converter processes one file at a time to ensure best performance. For batch conversion (10, 100+ files), use Calibre command line: `ebook-convert file.pdf file.epub --enable-heuristics`. Create a bash/Python script to automate processing of entire folders."
            },
            {
                q: "Will the EPUB be smaller than the PDF?",
                a: "Generally yes. EPUBs are often 30-60% smaller than equivalent PDFs thanks to: non-pixelated text (vector rendering vs images), optimized images, system fonts (no heavy font embedding), efficient ZIP compression. A 50 MB PDF can become a 15-25 MB EPUB. Exception: Very compressed PDFs or pure text can be comparable."
            },
            {
                q: "Can I read the EPUB on my iPhone/iPad?",
                a: "Absolutely! Apple Books (pre-installed on iOS/iPadOS) reads EPUB perfectly. Transfer methods: **AirDrop** from your Mac, **iCloud Drive** (save EPUB to iCloud, open from Files), **Email** (email yourself the EPUB, open attachment, choose 'Copy to Books'), **iTunes** (USB connection, drag-and-drop to Apple Books)."
            },
            {
                q: "Are footnotes preserved?",
                a: "Yes, but their format may change. PDF footnotes are converted to EPUB hyperlinks pointing to notes (usually at end of chapter or book). On modern e-readers (Kobo, Apple Books), clicking note number displays a popup. Navigation is often more convenient than in PDF."
            },
            {
                q: "Can I convert textbooks or technical books?",
                a: "Yes, but with nuances. Textbooks with linear text, simple images, equations rendered as images convert well. Textbooks with complex tables, multi-column diagrams, interactive mathematical formulas can lose layout. For complex equations, verify images are preserved. Consider keeping PDF for reference if layout is critical."
            },
            {
                q: "How do I edit the EPUB after conversion?",
                a: "Use **Calibre Edit Book** (right-click on book in Calibre → Edit book) to edit HTML, CSS, images, metadata, TOC. Or **Sigil** (open-source EPUB editor) for more visual interface. For quick changes (metadata, cover), Calibre Edit Metadata suffices. EPUBs are ZIP files: you can also rename .epub to .zip, decompress, edit with text editor, re-zip."
            },
            {
                q: "My EPUB displays strange characters (Ã©, Ã , etc). How to fix?",
                a: "It's an encoding problem (UTF-8 vs Latin-1). In Calibre Edit Book, open HTML files, File → Save, ensure UTF-8 is selected. Also check XML declaration: `<?xml version='1.0' encoding='UTF-8'?>`. For French characters (é, è, à, ç, œ), UTF-8 is essential. If problem persists, source PDF used a font with non-standard encoding."
            },
            {
                q: "Can I convert PDF comics to EPUB?",
                a: "Technically yes, but not recommended. Comics require fixed layout (each page = one image). Use **CBZ/CBR** (Comic Book Archive) format instead or **EPUB Fixed Layout** (EPUB FXL). For comics, convert PDF → CBZ (rename .pdf to .cbz and adjust structure) or use comic reading apps (Comixology, YACReader, Chunky Comic Reader)."
            },
            {
                q: "Does conversion work offline?",
                a: "Yes! Once you've loaded the pdfcanada.ca/pdf-to-epub page in your browser, conversion works entirely offline. You can disconnect WiFi/Ethernet and continue converting files. All processing happens locally via WebAssembly (Wasm) in your browser. No internet connection needed after initial loading."
            },
            {
                q: "Can I use Calibre to convert PDF to EPUB?",
                a: "Absolutely! Calibre is the reference tool for ebook management. To convert: Add your PDF to Calibre → Right-click → Convert Books → Output format EPUB → Enable 'Enable heuristic processing' → Convert. Calibre offers more advanced options (chapter detection, TOC manipulation, custom CSS styles) but has a learning curve. Our web converter is simpler and faster for basic conversions."
            },
            {
                q: "Will the EPUB work on Google Play Books?",
                a: "Yes! Google Play Books perfectly supports EPUB. Upload your EPUB to your Google Play Books library via play.google.com/books/uploads. Limits: 100 MB per file, 1000 books maximum in your library. Once uploaded, you can read on Android, iOS, or web browser with automatic synchronization of reading position and annotations."
            },
            {
                q: "Can I convert university theses or dissertations?",
                a: "Yes, it's an ideal use! 200-300 page theses are painful to read as PDF on screen. Converting to EPUB allows comfortable reading on e-reader with text size adjustment. Verify your thesis has a clear TOC (well-marked chapters) for better navigation. Theses with many tables/graphs may require post-conversion verification. Many Canadian theses are available via Theses Canada (collectionscanada.gc.ca)."
            },
            {
                q: "My PDFs are confidential. Is it safe?",
                a: "Absolutely. Unlike online converters (Zamzar, Online-Convert, etc.) that upload your files to their servers, pdfcanada.ca performs 100% of processing locally in your browser via WebAssembly. Your files NEVER leave your device. No network transmission. PIPEDA compliant (Canadian privacy law). Ideal for sensitive documents: contracts, tax returns, medical records, manuscripts, legal documents."
            }
        ],
        ctaTitle: "Convert your PDF to EPUB now",
        ctaButton: "Start conversion",
        tipsTitle: "Tips for better conversion",
        tips: [
            "Use PDFs with selectable text (not scans)",
            "Well-structured PDFs with headings give better results",
            "Avoid PDFs with complex layouts (multiple columns)",
            "Check the result on your e-reader before deleting the original"
        ],
        relatedTitle: "Related Tools",
        relatedTools: [
            { name: "EPUB to PDF", desc: "Convert your ebooks to PDF", path: "/epub-to-pdf" },
            { name: "OCR PDF", desc: "Make your scans searchable", path: "/ocr-pdf" },
            { name: "Organize PDF", desc: "Rearrange pages", path: "/organize-pdf" }
        ]
    },
    pt: {
        seo: {
            title: `Converter PDF em EPUB | Guia E-Reader ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Torne seus PDFs fluidos e fáceis de ler no Kindle ou Kobo. Nosso guia de ${CURRENT_YEAR} mostra como converter PDF em EPUB sem nunca enviar seus arquivos. Conversão gratuita e segura.`
        },
        h1: "Converter PDF em EPUB",
        subtitle: "Transforme seus PDFs em ebooks para e-readers",
        intro: (
            <>
                Você quer ler seus documentos PDF no seu e-reader Kindle ou Kobo? Nosso conversor gratuito transforma seus arquivos PDF no formato EPUB, o padrão para livros digitais. Desfrute de uma melhor experiência de leitura com texto que se adapta automaticamente ao tamanho da sua tela.
            </>
        ),
        whyTitle: "Por que converter PDF em EPUB?",
        whyReasons: [
            "Leitura confortável em e-readers (Kindle, Kobo, etc.)",
            "Texto redimensionável de acordo com suas preferências",
            "Navegação fácil entre capítulos",
            "Menos cansativo para os olhos",
            "Sincronização de marcadores entre dispositivos"
        ],
        howTitle: "Como converter PDF em EPUB?",
        steps: [
            {
                title: "Escolha seu arquivo PDF",
                desc: (
                    <>
                        Selecione o documento PDF que você deseja transformar em ebook. Nossa ferramenta aceita todos os tipos de PDFs baseados em texto.
                    </>
                )
            },
            {
                title: "Análise inteligente de conteúdo",
                desc: (
                    <>
                        Nosso sistema analisa a estrutura do seu documento: parágrafos, títulos, imagens. A conversão acontece inteiramente no seu navegador.
                    </>
                )
            },
            {
                title: "Obtenha seu EPUB",
                desc: (
                    <>
                        Baixe seu arquivo EPUB e transfira-o para seu e-reader via USB ou e-mail. Boa leitura!
                    </>
                )
            }
        ],
        securityTitle: "Seus documentos permanecem privados",
        securityText: (
            <>
                A privacidade dos seus documentos é nossa prioridade. Todo o processamento acontece localmente no seu dispositivo. Nenhum arquivo é enviado para nossos servidores. Seus PDFs pessoais, profissionais ou confidenciais permanecem em suas mãos.
            </>
        ),
        compatTitle: "Compatível com todos os e-readers",
        compatText: (
            <>
                O formato EPUB é o padrão universal de ebooks. Seu arquivo convertido funcionará em:
            </>
        ),
        compatList: ["Amazon Kindle (com conversão Calibre)", "Kobo", "Apple Books", "Google Play Books", "Tablets Android", "Todos os leitores EPUB"],
        sections: [
            {
                id: "pdf-vs-epub",
                title: "PDF vs EPUB: Entendendo as diferenças fundamentais",
                content: `Antes de converter seus documentos, é essencial entender as diferenças entre esses dois formatos onipresentes.

**PDF (Portable Document Format)**:
- **Layout fixo**: Cada página é congelada como uma fotografia. Texto, imagens e margens permanecem idênticos independentemente do dispositivo.
- **Ideal para**: Documentos profissionais (faturas, contratos), formulários governamentais (CRA/IRCC), relatórios com gráficos, livros com layouts complexos.
- **Problema em e-readers**: Em uma tela pequena (Kindle Paperwhite de 6 polegadas), você precisa constantemente dar zoom e rolar horizontalmente. Leitura dolorosa para textos longos.
- **Tamanho do arquivo**: Frequentemente maior, especialmente com imagens de alta resolução.

**EPUB (Electronic Publication)**:
- **Formato fluido (reflowable)**: O texto se adapta automaticamente ao tamanho da tela. Mude a fonte, o tamanho dos caracteres, as margens — o conteúdo se ajusta.
- **Ideal para**: Romances, ensaios, documentação técnica, livros didáticos, qualquer conteúdo textual linear.
- **Vantagens em e-readers**: Leitura confortável sem zoom. Ajuste o tamanho do texto de acordo com sua visão. Navegue por capítulos via tabela de conteúdos.
- **Acessibilidade**: Compatível com leitores de tela (NVDA, JAWS) para usuários com deficiência visual.
- **Versões**: EPUB 2.0 (mais antigo, amplamente suportado), EPUB 3.0 (suporte multimídia, MathML para fórmulas matemáticas).

**Quando converter PDF para EPUB?**
- Você lê ebooks frequentemente no Kindle/Kobo/Nook
- Você tem PDFs de livros ou relatórios sem layouts complexos
- Você quer ajustar o tamanho do texto (presbiopia, cansaço visual)
- Você busca melhor duração da bateria (e-ink consome menos que LCD para exibir texto)
- Você quer reduzir o tamanho do arquivo para economizar espaço de armazenamento

**Quando manter o PDF?**
- Documentos com tabelas complexas, gráficos, diagramas
- Formulários governamentais para preencher (T4, IMM 5645, etc.)
- Contratos que exigem assinaturas digitais
- Revistas, quadrinhos com layout artístico
- Qualquer documento onde a apresentação visual exata é crucial

**Caso de uso canadense**: Muitos canadenses convertem PDFs de bibliotecas públicas (empréstimo digital Pretnumerique.ca, OverDrive) protegidos por Adobe DRM para EPUB para leitura no Kobo (empresa canadense Rakuten Kobo sediada em Toronto). Note que contornar o DRM muitas vezes viola os termos de uso.`
            },
            {
                id: "conversion-process",
                title: "Como funciona a conversão de PDF para EPUB (Análise técnica)",
                content: `Nosso conversor executa uma transformação sofisticada em vários estágios, inteiramente no seu navegador via WebAssembly.

**Estágio 1: Extração de conteúdo PDF**
- **Parsing do PDF**: Leitura da estrutura do arquivo PDF (objetos, fluxos comprimidos, dicionários).
- **Extração de texto**: Recuperação de texto selecionável. Para PDFs nativos (criados a partir do Word/LaTeX), o texto é diretamente acessível. Para PDFs digitalizados, o OCR é necessário (veja nossa ferramenta separada de OCR PDF).
- **Detecção de estrutura**: Análise de estilos de fonte para identificar títulos (H1, H2, H3), parágrafos, listas, citações.
- **Extração de imagem**: Recuperação de imagens incorporadas (JPEG, PNG) com metadados (resolução, espaço de cor).

**Estágio 2: Análise de layout**
- **Detecção de colunas**: Identificação de layouts de várias colunas (difícil de converter para EPUB fluido).
- **Ordem de leitura**: Determinação da ordem lógica do conteúdo (às vezes os PDFs têm texto em uma ordem visual diferente da ordem de leitura natural).
- **Cabeçalhos e rodapés**: Remoção de números de página repetitivos, cabeçalhos e rodapés que não fazem mais sentido em um formato fluido.

**Estágio 3: Criação da estrutura EPUB**
- **Geração de HTML**: Conversão de conteúdo para XHTML 1.1 (EPUB 2) ou HTML5 (EPUB 3).
- **Hierarquia semântica**: Transformação de estilos em tags HTML semânticas (\`<h1>\`, \`<h2>\`, \`<p>\`, \`<blockquote>\`, \`<ol>\`, \`<ul>\`).
- **CSS incorporado**: Criação de folhas de estilo CSS para preservar estilos básicos (negrito, itálico, tamanho relativo).
- **Tabela de Conteúdos (TOC)**: Geração automática do arquivo \`toc.ncx\` (EPUB 2) ou \`nav.xhtml\` (EPUB 3) com base nos títulos detectados.

**Estágio 4: Otimização de imagem**
- **Redimensionamento**: Redução de imagens para resolução apropriada para e-readers (max 1200x1600px para a maioria dos dispositivos).
- **Compressão**: Redução do tamanho do arquivo preservando a qualidade visual (qualidade JPEG 85, PNG com otimização).
- **Conversão de formato**: Transformação de formatos exóticos em JPEG/PNG padrão.

**Estágio 5: Montagem do contêiner EPUB**
- **Estrutura de pastas**: Criação de \`META-INF/\`, \`OEBPS/\` com arquivos HTML, CSS, imagens.
- **Arquivo OPF (Package)**: Geração do manifesto listando todos os arquivos, spine (ordem de leitura), metadados (título, autor, idioma, data).
- **Compressão ZIP**: EPUB é essencialmente um arquivo ZIP com extensão \`.epub\`. O arquivo \`mimetype\` deve ser não comprimido e o primeiro.

**Estágio 6: Validação e correção**
- **Validação EPUB**: Verificação de conformidade com as especificações IDPF (International Digital Publishing Forum).
- **Correção de erros comuns**: Reparação de links quebrados, tags HTML mal fechadas, referências de imagem ausentes.
- **Otimização final**: Redução do tamanho final do arquivo.

**Desafios técnicos específicos**:
- **PDFs com múltiplas colunas**: Jornais, revistas, documentos acadêmicos em 2-3 colunas são difíceis de linearizar. Nosso algoritmo detecta colunas e tenta reconstruir a ordem de leitura natural.
- **Fórmulas matemáticas**: Equações renderizadas como imagens em PDF podem ser convertidas em imagens em EPUB, mas não em MathML editável (exceto para EPUB 3 com reconhecimento avançado).
- **Notas de rodapé**: Transformação de notas de rodapé PDF em links EPUB para notas de fim ou popups.
- **PDFs digitalizados (scans)**: Requerem OCR prévio. Os resultados dependem da qualidade da digitalização (resolução, contraste, inclinação).

**Processamento local via WebAssembly**:
Ao contrário dos conversores online tradicionais (como Zamzar, Online-Convert, Convertio) que enviam seus arquivos para seus servidores, o pdfcanada.ca usa WebAssembly (Wasm) compilado de bibliotecas de código aberto (pdf.js da Mozilla, epub-gen). Todo o processamento acontece no seu navegador Chrome/Firefox/Safari/Edge. Nenhuma transmissão de dados. Compatível com PIPEDA (lei de privacidade canadense).`
            },
            {
                id: "ereader-compatibility",
                title: "Guia de compatibilidade de e-readers e aplicativos de leitura",
                content: `Seu arquivo EPUB funcionará no seu dispositivo? Aqui está um guia completo para e-readers e aplicativos populares no Canadá.

**Amazon Kindle (EUA/Canadá)**:
- **Formato nativo**: MOBI, AZW3, KFX (formatos proprietários da Amazon).
- **Suporte EPUB**: ❌ Kindles NÃO leem EPUB diretamente. Você deve converter EPUB → MOBI/AZW3 via Calibre (software gratuito).
- **Método**: Converta seu PDF para EPUB com o pdfcanada.ca, depois use o Calibre para converter EPUB → AZW3. Transfira via USB ou e-mail para seu endereço Kindle (@kindle.com).
- **Modelos populares no Canadá**: Kindle Paperwhite, Kindle Oasis, Kindle Scribe.
- **Alternativa**: Envie o PDF original por e-mail para a Amazon (conversions@kindle.com) — a Amazon converterá automaticamente, mas com menos controle sobre a qualidade.

**Kobo (Canadá - empresa sediada em Toronto)**:
- **Formato nativo**: ✅ EPUB, PDF.
- **Suporte EPUB**: Excelente. Kobo é um dos melhores e-readers para EPUB (suporte EPUB 3, leitura fluida, ajuste avançado de fontes).
- **Transferência**: USB (arrastar e soltar), Kobo Desktop, Adobe Digital Editions para livros protegidos por DRM.
- **Modelos populares**: Kobo Clara 2E, Kobo Libra 2, Kobo Sage, Kobo Elipsa 2E.
- **Vantagem canadense**: Integração com bibliotecas públicas canadenses (Pretnumerique.ca). Excelente suporte ao francês.

**Apple Books (iOS/macOS)**:
- **Formato nativo**: ✅ EPUB, PDF.
- **Suporte EPUB**: Excelente (EPUB 2 e 3, suporte a áudio/vídeo no EPUB 3).
- **Transferência**: Arrastar e soltar no Apple Books (macOS), AirDrop ou via iCloud Drive.
- **Sincronização**: Marcadores, anotações sincronizadas entre iPhone, iPad, Mac via iCloud.
- **Acessibilidade**: VoiceOver integrado (leitor de tela) para usuários com deficiência visual.

**Google Play Books (Android/iOS/Web)**:
- **Formato nativo**: ✅ EPUB, PDF.
- **Suporte EPUB**: Muito bom. Leitura no navegador ou aplicativos móveis.
- **Transferência**: Upload para a biblioteca Play Books via interface web (play.google.com/books/uploads).
- **Limites**: 100 MB por arquivo, 1000 livros em sua biblioteca.
- **Sincronização**: Multi-dispositivo (telefone Android, tablet, Chromebook, computador).

**Barnes & Noble Nook (EUA, incomum no Canadá)**:
- **Formato nativo**: ✅ EPUB, PDF.
- **Suporte EPUB**: Bom (Nook GlowLight, Nook Tablet).
- **Transferência**: USB, aplicativo Nook para Android/iOS.

**PocketBook (Europa/Canadá)**:
- **Formato nativo**: ✅ EPUB, PDF, MOBI, AZW3, FB2 e 17 outros formatos (!).
- **Suporte EPUB**: Excelente. PocketBook suporta quase todos os formatos sem conversão.
- **Modelos**: PocketBook Touch HD 3, PocketBook InkPad.

**Onyx Boox (E-ink Android)**:
- **Formato nativo**: ✅ EPUB, PDF, MOBI, AZW3, CBR, CBZ e mais.
- **Suporte EPUB**: Excelente. Dispositivos Android completos, Google Play Store instalável (apps Kindle, Kobo, Libby).
- **Modelos**: Boox Nova Air, Boox Note Air, Boox Tab Ultra.
- **Vantagem**: Flexibilidade máxima (pode ler qualquer formato + instalar qualquer app Android).

**Aplicativos de leitura (smartphones/tablets)**:

| Aplicativo | Plataformas | Suporte EPUB | Notas |
|-------------|-----------|--------------|-------|
| **Calibre** | Windows, macOS, Linux | ✅ Excelente | Biblioteca completa + conversão de formatos. Essencial para gerenciar sua coleção. |
| **Adobe Digital Editions** | Windows, macOS, iOS, Android | ✅ Excelente | Necessário para livros Adobe DRM (bibliotecas públicas). |
| **Libby** | iOS, Android | ✅ (bibliotecas) | Empréstimo de livros de bibliotecas canadenses. EPUB e audiolivros. |
| **Moon+ Reader** | Android | ✅ Excelente | Altamente personalizável. Temas, fontes, rastreamento de leitura. |
| **FBReader** | Android, iOS, Linux | ✅ Bom | Código aberto. Suporte a rede (leitura da nuvem). |
| **Aldiko** | Android, iOS | ✅ Bom | Interface simples. Suporte Adobe DRM. |
| **ReadEra** | Android | ✅ Muito bom | Gratuito sem anúncios. Suporte multi-formato (EPUB, PDF, MOBI, DOC). |

**Recomendações para Canadenses**:
- **Orçamento limitado**: Kobo Clara 2E (~150 CAD). Excelente e-reader EPUB, empresa canadense, integração com biblioteca pública.
- **Ecossistema Apple**: Apple Books no iPad/iPhone. Grátis se você já tem um dispositivo iOS.
- **Flexibilidade máxima**: Onyx Boox (250-500 CAD). Dispositivo Android completo, todos os formatos, todos os apps.
- **Já usuário Amazon**: Mantenha seu Kindle, use Calibre para converter EPUB → AZW3.
- **Leitura no computador**: Calibre (grátis, todas as plataformas). Biblioteca completa + leitor integrado.

**DRM e livros protegidos**:
Muitos livros emprestados de bibliotecas públicas (Pretnumerique.ca, OverDrive) são protegidos por **Adobe DRM** ou **LCP (Lightweight Content Protection)**. Esses arquivos EPUB só podem ser abertos em aplicativos autorizados (Adobe Digital Editions, Kobo, etc.) e não podem ser convertidos. Respeite os direitos autorais e os termos de uso — a Lei de Direitos Autorais do Canadá (C-11) protege obras digitais.`
            },
            {
                id: "scanned-pdfs-ocr",
                title: "Convertendo PDFs digitalizados: Guia OCR e melhores práticas",
                content: `PDFs digitalizados (imagens de página) requerem uma etapa adicional: reconhecimento óptico de caracteres (OCR).

**O que é um PDF digitalizado?**
- Documento em papel digitalizado com um scanner ou câmera
- Cada página é uma imagem (JPEG/PNG) sem texto selecionável
- Exemplos: livros antigos, documentos de arquivo, formulários em papel, notas manuscritas (se digitalizadas)
- **Teste simples**: Tente selecionar texto com o mouse. Se impossível → PDF digitalizado.

**Por que o OCR é necessário?**
Sem OCR, seu EPUB conterá apenas imagens de páginas — exatamente o problema que você está tentando resolver! O OCR transforma imagens de texto em texto real selecionável, pesquisável e redimensionável.

**Nosso processo OCR (disponível separadamente)**:
1. **Pré-processamento de imagem**: Aprimoramento de contraste, correção de inclinação, remoção de ruído, binarização (conversão para preto e branco).
2. **Detecção de layout**: Identificação de zonas de texto, imagens, tabelas.
3. **Reconhecimento de caracteres**: Usando Tesseract OCR (Google open-source) com modelos de linguagem francês/inglês.
4. **Pós-processamento**: Correção de erros comuns (l vs I, 0 vs O), verificação ortográfica.
5. **Geração de PDF de texto**: Criação de um PDF com camada de texto invisível sobreposta às imagens (PDF pesquisável).

**Qualidade OCR: fatores importantes**:
- **Resolução de digitalização**: Recomendado mínimo de 300 DPI (pontos por polegada). 600 DPI para texto pequeno. Digitalizações de 150 DPI dão maus resultados.
- **Contraste**: Texto preto em fundo branco limpo. Amarelecimento, manchas, sombras reduzem a precisão.
- **Inclinação**: Páginas retas. Inclinação >5° degrada seriamente o reconhecimento.
- **Fonte**: Fontes padrão (Times New Roman, Arial) funcionam melhor que fontes manuscritas ou decorativas.
- **Idioma**: Configure o idioma correto (Francês Canadense para documentos de Quebec, Inglês para outras províncias).

**Precisão esperada**:
- **Livro impresso limpo (300+ DPI)**: 95-99% de precisão. Poucos erros menores.
- **Documento datilografado antigo**: 85-95%. Erros frequentes em caracteres gastos.
- **Fotocópia de fotocópia**: 70-85%. Muitos erros, revisão manual necessária.
- **Notas manuscritas**: 30-60% (muito variável). OCR padrão funciona mal. Requer OCR de caligrafia especializado (Google Cloud Vision API, Microsoft Azure OCR).

**Fluxo de trabalho recomendado para PDFs digitalizados**:
1. **Digitalize ou obtenha seu PDF digitalizado**
2. **Use nossa ferramenta OCR PDF** (pdfcanada.ca/ocr-pdf) para criar um PDF com texto selecionável
3. **Verifique a qualidade do OCR**: Abra o PDF, selecione o texto, verifique se há erros
4. **Correções manuais** (opcional): Use o Adobe Acrobat ou editor de texto para corrigir erros maiores
5. **Converta para EPUB** com nossa ferramenta PDF para EPUB

**Alternativas para livros digitalizados**:
- **Biblioteca e Arquivos do Canadá** (bac-lac.gc.ca): Muitos livros do patrimônio canadense já digitalizados e com OCR.
- **Internet Archive** (archive.org): Milhões de livros digitalizados com OCR. Pesquise seu livro antes de digitalizar.
- **Google Books**: Pré-visualizações de livros, alguns disponíveis em texto completo.
- **Project Gutenberg** (gutenberg.org): 70.000+ livros de domínio público em EPUB/MOBI/TXT gratuitos (obras publicadas antes de 1928 geralmente).

**Considerações legais canadenses**:
- **Livros com direitos autorais**: Digitalizar um livro para uso pessoal é geralmente aceito (exceção de uso justo), mas distribuir digitalizações viola direitos autorais.
- **Documentos governamentais**: Documentos do governo canadense (federal) geralmente não são protegidos por direitos autorais e podem ser reproduzidos livremente (Lei de Direitos Autorais, seção 12).
- **Teses e dissertações**: Verifique as políticas da sua universidade. Muitas teses canadenses estão disponíveis via Theses Canada (collectionscanada.gc.ca).

**Ferramentas OCR alternativas (se preferir)**:
- **Adobe Acrobat Pro** (pago, ~240 CAD/ano): Excelente OCR, correção de digitalização, edição avançada.
- **ABBYY FineReader** (pago, ~120 CAD): Provavelmente o melhor OCR comercial. Suporte para 190+ idiomas.
- **Tesseract (linha de comando)** (gratuito, código aberto): Motor OCR que usamos, mas interface técnica.
- **Google Drive** (grátis com conta Google): Faça upload de um PDF digitalizado, abra com o Google Docs → OCR automático. Funciona surpreendentemente bem para documentos simples.

**Conselho para estudantes canadenses**:
Muitos estudantes digitalizam seus livros didáticos para leitura em tablet/e-reader. Verifique primeiro se a biblioteca da sua universidade oferece versões digitais (muitas têm licenças de ebook). Respeite as políticas de propriedade intelectual da sua instituição.`
            },
            {
                id: "use-cases",
                title: "Casos de uso reais: Quando e por que converter PDF em EPUB",
                content: `Descubra como diferentes usuários canadenses se beneficiam da conversão de PDF para EPUB.

**Leitura de lazer e ebooks**:
- **Romances e ensaios baixados como PDF**: Você baixou um livro de domínio público (Project Gutenberg, Internet Archive) como PDF. Converta para EPUB para leitura confortável no Kobo ou Kindle.
- **Livros comprados como PDF**: Alguns editores independentes vendem livros como PDF (menos comum). Converta para EPUB para integração em sua biblioteca Apple Books/Google Play Books.
- **Fanfiction e escrita amadora**: Muitos autores amadores compartilham seus escritos como PDF. Converta para EPUB para leitura em e-reader com iluminação e-ink (menos cansaço visual que smartphone).

**Estudantes e acadêmicos**:
- **Artigos de pesquisa e papers**: Artigos científicos baixados do PubMed, arXiv, JSTOR como PDF. Converta para EPUB para leitura anotada em tablet (iPad + Apple Pencil).
- **Teses e dissertações**: Teses de 200-300 páginas difíceis de ler como PDF na tela. EPUB permite ajuste de tamanho de texto, leitura confortável em e-reader.
- **Notas de aula**: Professores que compartilham notas como PDF. Converta para EPUB para revisão em e-reader (bateria de 6 semanas vs 8 horas para tablet).
- **Livros didáticos**: Livros didáticos em PDF podem ser pesados (100+ MB). EPUB otimizado reduz tamanho, acelera carregamento.

**Profissionais e empresas**:
- **Relatórios e documentação**: Relatórios anuais, white papers, guias técnicos como PDF. Converta para EPUB para leitura móvel (trem, avião).
- **Treinamento e e-learning**: Materiais de treinamento da empresa distribuídos como PDF. EPUB permite leitura em qualquer dispositivo, melhor acessibilidade.
- **Livros profissionais**: Livros de desenvolvimento profissional comprados como PDF (O'Reilly, Manning às vezes). EPUB para biblioteca unificada.

**Acessibilidade e necessidades especiais**:
- **Usuários com deficiência visual**: EPUB se acopla melhor com leitores de tela (NVDA, JAWS, VoiceOver) do que PDFs. Texto fluido permite ampliação significativa sem rolagem horizontal.
- **Dislexia**: Fontes especializadas (OpenDyslexic) facilmente aplicadas ao EPUB. Ajuste o espaçamento de letras/linhas.
- **Idosos**: Texto muito grande (24-30pt) legível em e-reader EPUB. PDF requer zoom constante.

**Viajantes e mobilidade**:
- **Guias de viagem e documentação**: Guias Lonely Planet, Routard às vezes como PDF. EPUB para leitura offline no smartphone (modo avião).
- **Manuais do usuário**: Manuais de dispositivos (câmeras, drones) como PDF. EPUB para consulta rápida no telefone.

**Bibliófilos e colecionadores**:
- **Gestão de biblioteca digital**: Padronização de sua coleção em EPUB. Calibre permite gerenciamento centralizado, metadados, sincronização multi-dispositivo.
- **Arquivamento familiar**: Digitalização de livros de receitas da família, diários pessoais digitalizados. Converta para EPUB para compartilhar com membros da família em seus e-readers preferidos.

**Caso de uso canadense específico**:
- **Livros franceses de Quebec**: Obras de Quebec como PDF (edições digitais independentes). Converta para EPUB para leitura no Kobo (excelente suporte ao francês).
- **Documentos governamentais**: Relatórios da Statistics Canada, documentação da Service Canada como PDF. Converta para EPUB para leitura extensiva (relatórios de 400+ páginas).
- **Literatura indígena**: Histórias e narrativas das Primeiras Nações, às vezes distribuídas como PDF. EPUB para preservação e acessibilidade.
- **Empréstimo digital de bibliotecas**: Alguns livros do Pretnumerique.ca como PDF. Converta para EPUB para melhor experiência (se permitido por DRM).

**Redução de tamanho de arquivo**:
- **PDFs grandes (50-200 MB)**: Livros com imagens de alta resolução. Converter para EPUB com otimização de imagem pode reduzir para 10-30 MB.
- **Armazenamento limitado**: E-readers com 4-8 GB de armazenamento. EPUB permite armazenar 2-3x mais livros que PDF.

**Sincronização multi-dispositivo**:
- **Leitura em vários dispositivos**: Comece a ler no Kobo à noite, continue no iPhone no dia seguinte no metrô. EPUB permite sincronização de posição (via Kobo Cloud, Apple iCloud).
- **Anotações e marcadores**: Notas sincronizadas entre dispositivos (Apple Books, Google Play Books).

**Benefícios ambientais**:
- **E-readers e-ink de baixa potência**: Kindle/Kobo com EPUB duram 4-6 semanas por carga vs 1-2 dias para tablet LCD lendo PDFs.
- **Redução de impressão**: PDFs legíveis em e-reader = menos impressão em papel. Economia de tinta, papel, impacto ambiental.

**O que NÃO funciona bem em EPUB**:
- ❌ Revistas com layout complexo → Mantenha como PDF ou use aplicativos dedicados (Magzter, PressReader)
- ❌ Quadrinhos → Use CBR/CBZ ou aplicativos de quadrinhos (Comixology, YACReader)
- ❌ Livros de fotografia → Layout fixo crucial, mantenha como PDF
- ❌ Partituras musicais → PDF essencial para layout preciso
- ❌ Documentos técnicos com diagramas complexos → Frequentemente melhor em PDF`
            },
            {
                id: "best-practices",
                title: "Melhores práticas para conversão de PDF para EPUB de alta qualidade",
                content: `Otimize suas conversões com estas dicas de especialistas para obter EPUBs perfeitos.

**Antes da conversão: Prepare seu PDF**

1. **Verifique a seleção de texto**:
   - Abra o PDF no Adobe Acrobat Reader ou navegador
   - Tente selecionar texto com o mouse
   - Se impossível → PDF digitalizado, use OCR primeiro

2. **Inspecione a estrutura do documento**:
   - PDFs com títulos de seção bem marcados dão melhores resultados
   - Verifique os marcadores (bookmarks) do PDF — eles se tornam a tabela de conteúdos EPUB
   - Documentos bem estruturados (criados a partir do Word/LaTeX com estilos de título) convertem melhor

3. **Simplifique layouts complexos**:
   - Colunas múltiplas, caixas, barras laterais podem causar problemas de ordem de leitura
   - Se possível, obtenha uma versão "single column" do documento original

4. **Verifique as imagens**:
   - Imagens de alta resolução (>2000px) aumentam o tamanho do arquivo
   - Considere comprimir o PDF antes da conversão (nossa ferramenta Compress PDF)

**Durante a conversão: Configuração ideal**

5. **Escolha as opções certas** (se disponíveis na ferramenta):
   - **Detecção de TOC**: Ative para geração automática de tabela de conteúdos
   - **Preservação de imagens**: Sim para livros ilustrados, não para texto puro (reduz tamanho)
   - **Otimização de fonte**: Usa fontes de sistema do e-reader (mais rápido, menos espaço)

6. **Tamanho do arquivo alvo**:
   - Aponte para <10 MB para a maioria dos e-readers (compatibilidade máxima)
   - Romances textuais: geralmente 500 KB - 2 MB
   - Livros técnicos com imagens: 5-15 MB
   - Acima de 50 MB: alguns e-readers podem ter problemas de desempenho

**Após a conversão: Validação e correção**

7. **Teste o arquivo EPUB**:
   - Abra no Calibre (visualizador de ebook integrado) antes de transferir para o e-reader
   - Verifique a tabela de conteúdos: Funciona? Capítulos corretos?
   - Folheie algumas páginas: Ordem de texto lógica? Imagens bem colocadas?
   - Verifique caracteres especiais: Acentos (é, è, ê, ã, ç), aspas («»), hífens

8. **Valide com EPUBCheck**:
   - Ferramenta oficial IDPF para verificar conformidade com padrões
   - Integrado no Calibre: Clique direito no livro → Edit book → Check book
   - Corrige erros comuns (tags mal fechadas, links quebrados)

9. **Edite os metadados**:
   - Use o Calibre para adicionar/corrigir: Título, Autor, Data de publicação, Editora, ISBN
   - Adicione uma capa: Clique direito → Edit metadata → Download cover
   - Etiquetas (tags) para organização: Ficção, Não-ficção, Técnico, Romance

10. **Otimize para seu e-reader específico**:

**Para Kindle (após conversão EPUB → AZW3 via Calibre)**:
- Use o perfil "Kindle" no Calibre durante a conversão
- Ative "Remove spacing between paragraphs" se seu livro tiver muitos espaços
- Desative "Insert page breaks before" se quiser um fluxo contínuo

**Para Kobo**:
- Kobo suporta EPUB 3, CSS avançado, fontes personalizadas
- Adicione metadados Kobo (série, número na série) para melhor organização
- Use Kobo Utilities (plugin Calibre) para otimizações específicas

**Para Apple Books**:
- Apple suporta EPUB Fixed Layout para livros ilustrados
- Teste no iPhone E no iPad (renderização às vezes diferente)

**Resolução de problemas comuns**

11. **Imagens ausentes ou mal colocadas**:
   - Abra o EPUB com Calibre Edit Book
   - Verifique a pasta "Images" — todas presentes?
   - Inspecione o HTML para links de imagem quebrados: \`<img src="images/fig1.jpg">\`

12. **Ordem de leitura caótica**:
   - Problema comum com PDFs de várias colunas ou layouts complexos
   - Solução: Voltar ao documento fonte (Word, LaTeX) se possível
   - Ou editar manualmente o EPUB no Calibre (mover parágrafos no HTML)

13. **Tabela de conteúdos ausente ou incorreta**:
   - Calibre → Edit book → Tools → Table of Contents → Edit Table of Contents
   - Adicione manualmente as entradas apontando para as tags de título apropriadas

14. **Caracteres estranhos (?, □, )**:
   - Problema de codificação. O PDF usava uma fonte personalizada com caracteres não padrão
   - Solução: Correção manual no Calibre ou retorno ao documento fonte

15. **Arquivo EPUB muito volumoso**:
   - Calibre → Edit book → Tools → Compress Images
   - Reduza a qualidade JPEG para 75-80 (pouca perda visual)
   - Redimensione imagens >1200px para 1200px máx

**Dicas avançadas para usuários técnicos**

16. **Edição direta do EPUB**:
   - EPUB = arquivo ZIP. Renomeie \`.epub\` para \`.zip\`, descompacte
   - Edite arquivos XHTML/HTML com editor de código (VS Code, Notepad++)
   - Modifique CSS para estilos personalizados
   - Compacte novamente (mimetype primeiro, não compactado!) e renomeie para \`.epub\`

17. **Use Sigil (editor EPUB open-source)**:
   - Alternativa ao Calibre para edição EPUB
   - Interface WYSIWYG + código fonte
   - Plugins para validação, otimização, adição de metadados

18. **Scripts de conversão em lote**:
   - Calibre suporta conversão em linha de comando: \`ebook-convert input.pdf output.epub\`
   - Para converter 100 PDFs em EPUB: script bash/Python com loop

**Qualidade vs Velocidade: Compromisso**

19. **Conversão rápida (1-5 segundos)**:
   - Texto extraído diretamente, refluxo mínimo, imagens não otimizadas
   - Bom para: Leitura rápida, documentos temporários

20. **Conversão de alta qualidade (30-60 segundos)**:
   - Análise aprofundada de estrutura, detecção de TOC, otimização de imagem, validação
   - Bom para: Livros para manter, compartilhar, arquivar

**Conselho para perfeccionistas**:
Se você quer um EPUB perfeito para um livro favorito, considere:
- Partir do documento fonte (Word, LaTeX, Markdown) em vez de PDF
- Usar Pandoc (ferramenta de linha de comando) para conversão Markdown → EPUB (controle máximo)
- Ou serviços profissionais de conversão (Reedsy, Vellum) se você for autor/editor

**Alternativas à conversão automática**:
Para livros importantes (publicação, arquivamento de longo prazo), a conversão manual dá melhores resultados:
1. Extrair o texto do PDF (copiar-colar em um editor)
2. Formatar em Markdown ou HTML
3. Converter para EPUB com Pandoc ou Calibre a partir de HTML
4. Editar finamente no Sigil ou Calibre

Mas para 95% dos casos de uso (leitura pessoal), nosso conversor automático é mais do que suficiente!`
            },
            {
                id: "privacy-security",
                title: "Privacidade e segurança: Por que o processamento local é crucial",
                content: `A conversão de PDF para EPUB envolve frequentemente documentos pessoais, profissionais ou sensíveis. Entenda por que nossa abordagem local protege sua privacidade.

**O problema com conversores online tradicionais**

A maioria dos conversores PDF online (Zamzar, Online-Convert, PDF2Go, CloudConvert, Convertio, etc.) opera neste modelo:
1. **Você faz upload do seu arquivo** para os servidores deles (Amazon AWS, Google Cloud, Microsoft Azure)
2. **Os servidores deles realizam a conversão** (frequentemente em um data center nos EUA ou Europa)
3. **Você faz download do arquivo convertido** dos servidores deles
4. **Eles "prometem" excluir seus arquivos** após algumas horas (1h, 24h, 7 dias)

**Riscos deste modelo**:
- ❌ **Interceptação durante a transferência**: Mesmo com HTTPS, metadados expostos (tamanho do arquivo, hora, endereço IP)
- ❌ **Acesso por funcionários**: Administradores de sistema podem tecnicamente acessar todos os arquivos enviados
- ❌ **Violações de dados**: Histórico de vazamentos: Dropbox (2012, 68M contas), Adobe (2013, 38M usuários), Equifax (2017, 147M pessoas)
- ❌ **Mandados governamentais**: Servidores nos EUA sujeitos ao CLOUD Act (acesso por agências federais dos EUA)
- ❌ **Análise de conteúdo**: Alguns serviços verificam arquivos para publicidade direcionada, treinamento de IA, detecção de conteúdo ilegal
- ❌ **Retenção não divulgada**: Apesar das promessas, nenhuma garantia de exclusão real

**Exemplos de documentos sensíveis frequentemente convertidos**:
- **Contratos comerciais**: Acordos de não divulgação (NDA), contratos de trabalho, acordos de venda
- **Documentos médicos**: Resultados de testes, registros médicos pessoais (potencial violação de PHIPA em Ontário, LPRPSP em Quebec)
- **Declarações fiscais**: T4, T5, NR4, declarações de imposto CRA (número de seguro social, renda)
- **Documentos legais**: Testamentos, procurações, documentos de divórcio
- **Propriedade intelectual**: Manuscritos não publicados, pesquisas científicas pré-publicação, patentes pendentes
- **Documentos de imigração**: IMM 5645, provas de cidadania, passaportes digitalizados
- **Livros e ebooks comprados**: Potencialmente protegidos por direitos autorais

**Nossa abordagem: 100% processamento local**

**Como funciona**:
1. **Você seleciona seu arquivo PDF**: O arquivo permanece no seu sistema de arquivos local
2. **O arquivo é carregado no seu navegador**: RAM do seu computador/tablet/telefone
3. **WebAssembly (Wasm) realiza a conversão**: Código compilado é executado no "sandbox" seguro do seu navegador (Chrome, Firefox, Safari, Edge)
4. **O arquivo EPUB é gerado localmente**: Na memória do seu dispositivo
5. **Você baixa o resultado**: Diretamente do seu navegador para o seu sistema de arquivos

**Nenhuma transmissão de rede. Nenhum servidor envolvido. Zero uploads.**

**Vantagens de segurança**:
- ✅ **Privacidade total**: Seus arquivos nunca saem do seu dispositivo. Impossível interceptar o que nunca é transmitido.
- ✅ **Conformidade PIPEDA**: Lei canadense de proteção de informações pessoais (2000). Nenhuma coleta de dados pessoais.
- ✅ **Conformidade GDPR**: Regulamento europeu (aplicável se você processar dados de cidadãos da UE).
- ✅ **Compatível com HIPAA**: Para profissionais de saúde canadenses que lidam com dados médicos (embora HIPAA seja americano, princípios semelhantes ao PHIPA/LPRPSP).
- ✅ **Sem risco de vazamento**: Impossível vazar dados que não existem em servidores.
- ✅ **Funciona offline**: Uma vez carregada a página, você pode desconectar WiFi/Ethernet — a conversão ainda funciona (!).

**Verificação técnica (para céticos)**:
Você pode verificar que nada é enviado para nossos servidores:
1. Abra pdfcanada.ca/pdf-to-epub no Chrome/Firefox
2. Pressione F12 para abrir o DevTools (Ferramentas de Desenvolvedor)
3. Vá para a guia "Network" (Rede)
4. Converta um arquivo PDF para EPUB
5. Observe: Nenhuma solicitação POST/PUT para servidores com seu arquivo. Apenas solicitações GET para carregar recursos do site (HTML, CSS, JS, Wasm)

**Tecnologias usadas para processamento local**:

- **WebAssembly (Wasm)**: Bytecode compilado de C/C++/Rust executando em velocidade quase nativa no navegador. Usamos bibliotecas de código aberto compiladas em Wasm:
  - **pdf.js** (Mozilla): Análise e renderização de PDF
  - **epub-gen**: Geração de arquivos EPUB compatíveis

- **File API**: API JavaScript padrão permitindo que o navegador acesse arquivos locais sem enviá-los para outro lugar

- **Blob / ArrayBuffer**: Estruturas de dados JavaScript para manipular arquivos binários na memória

**Limitações do processamento local**:

- **Poder de processamento**: Depende do seu dispositivo. Um MacBook Pro 2023 converterá mais rápido que um Chromebook 2015. Mas para a maioria dos PDFs (<50 MB), é transparente.
- **Memória (RAM)**: Arquivos muito grandes (>500 MB) podem causar lentidão ou falhas em dispositivos com pouca RAM (4 GB ou menos).
- **Compatibilidade do navegador**: Requer navegador moderno com suporte a WebAssembly (Chrome 57+, Firefox 52+, Safari 11+, Edge 16+). Todos os navegadores desde ~2018.

**Comparação: pdfcanada.ca vs Conversores em nuvem**

| Critério | pdfcanada.ca (Local) | Zamzar, Online-Convert, etc. (Nuvem) |
|---------|---------------------|--------------------------------------|
| **Privacidade** | ✅ 100% privado | ❌ Arquivos em servidores de terceiros |
| **Conformidade PIPEDA** | ✅ Conforme | ⚠️ Depende da política deles |
| **Velocidade (10 MB PDF)** | ✅ 5-15 seg | ⚠️ 30-120 seg (upload + fila + download) |
| **Funciona offline** | ✅ Sim | ❌ Não (requer conexão) |
| **Limite de tamanho** | ⚠️ ~500 MB (dependente de RAM) | ⚠️ 50-100 MB (limite do servidor) |
| **Custo** | ✅ Grátis ilimitado | ⚠️ Grátis com limites (2-5 arquivos/dia) ou pago |
| **Sem inscrição** | ✅ Nenhuma | ⚠️ Frequentemente necessário para mais de 2 conversões |
| **Qualidade da conversão** | ✅ Excelente | ✅ Variável (geralmente boa) |

**Casos de uso onde o processamento local é ESSENCIAL**:
- **Advogados / escritórios de advocacia**: Sigilo do cliente (privilégio advogado-cliente). A transmissão de documentos a terceiros viola regras éticas.
- **Profissionais de saúde**: Dados médicos (PHIPA Ontario, LPRPSP Quebec). Multas de até 500.000 CAD por violações.
- **Contadores / CPAs**: Declarações fiscais de clientes. CPA Canada exige proteção de dados do cliente.
- **Pesquisadores**: Dados de pesquisa sensíveis, manuscritos pré-publicação (evitar roubo intelectual).
- **Jornalistas**: Documentos de fontes confidenciais. Proteção de fontes (Associação Canadense de Jornalistas).
- **Governo**: Documentos "Protegido A/B/C". Transmissão para servidores não governamentais proibida.
- **Empresas**: Segredos comerciais, dados financeiros não públicos.

**Recomendações para maximizar a segurança**:

1. **Use HTTPS**: Verifique o cadeado 🔒 na barra de endereços (https://www.pdfcanada.ca). Impede interceptação durante o carregamento inicial do site.

2. **Apague arquivos após a conversão**: Exclua o PDF original e o EPUB convertido de seus Downloads se não precisar mais deles (evita acesso não autorizado ao seu computador).

3. **Use um navegador atualizado**: Atualizações de segurança recentes. Chrome, Firefox, Safari, Edge atualizam automaticamente.

4. **Evite redes públicas para documentos sensíveis**: Mesmo com processamento local, carregar o site pdfcanada.ca em WiFi público pode expor metadados. Use VPN ou dados de celular para documentos muito sensíveis.

5. **Verifique extensões do navegador**: Algumas extensões (captura de tela, gerenciadores de download) podem acessar arquivos processados. Desative para documentos ultrassensíveis.

**Transparência e confiança**:
Ao contrário dos serviços de nuvem fechados, nossa abordagem lhe dá controle total. Você não precisa "confiar" em nós para excluir seus arquivos — eles nunca nos alcançam em primeiro lugar.`
            },
            {
                id: "troubleshooting",
                title: "Solução de problemas: Resolvendo problemas comuns de conversão",
                content: `Encontrando problemas ao converter seus PDFs em EPUB? Aqui estão as soluções para os erros mais frequentes.

**Problema 1: "A conversão falhou" ou erro genérico**

**Causas possíveis**:
- PDF corrompido ou mal formado
- PDF protegido por senha
- Arquivo muito grande para sua RAM disponível
- PDF com estrutura complexa não padrão

**Soluções**:
1. **Verifique se o PDF abre corretamente** no Adobe Acrobat Reader. Se não abrir, o arquivo está corrompido.
2. **Remova a senha**: Use nossa ferramenta "Desbloquear PDF" ou \`qpdf --decrypt\` na linha de comando
3. **Reduza o tamanho do arquivo**: Use nossa ferramenta "Comprimir PDF" ou divida em seções menores
4. **Tente uma alternativa**: Calibre (ebook-convert) pode processar alguns PDFs que conversores web não conseguem

**Problema 2: Texto ausente ou páginas em branco no EPUB**

**Causa**: PDF digitalizado sem camada de texto (apenas imagens)

**Solução**:
1. **Use nossa ferramenta OCR PDF** (pdfcanada.ca/ocr-pdf) para adicionar uma camada de texto
2. **Verifique se o texto é selecionável** no PDF original (Ctrl+A ou Cmd+A)
3. Se o PDF tiver fontes incorporadas proprietárias, tente imprimir o PDF como "novo PDF" no Adobe Reader (achata as fontes)

**Problema 3: Ordem de texto caótica / parágrafos misturados**

**Causa**: PDF com layout de várias colunas, caixas ou estrutura complexa

**Soluções**:
1. **Simplifique o PDF fonte** se possível (obtenha versão de coluna única)
2. **Edição manual**: Calibre → Edit Book → Reorganize manualmente as seções no HTML
3. **Alternativa**: Se for um livro publicado, procure uma versão EPUB oficial (frequentemente disponível na Amazon, Kobo, Google Books)

**Problema 4: Imagens ausentes, pixeladas ou distorcidas**

**Causas**:
- Imagens com formatos exóticos (JBIG2, JPEG2000) não suportados
- Imagens vetoriais (SVG em PDF) mal convertidas
- Compressão muito agressiva

**Soluções**:
1. **Abra o PDF no Adobe Acrobat** → Arquivo → Exportar para → Imagens → PNG (exporta todas as imagens)
2. **Converta o PDF** mantendo as imagens originais se a opção estiver disponível
3. **Edição manual**: Substitua as imagens no EPUB (Calibre Edit Book) por versões de alta qualidade

**Problema 5: Tabela de conteúdos (TOC) ausente**

**Causa**: PDF sem marcadores (bookmarks) integrados

**Soluções**:
1. **Crie a TOC manualmente** no Calibre:
   - Clique direito no livro → Edit Book
   - Tools → Table of Contents → Edit Table of Contents
   - Adicione as entradas clicando nos títulos no texto
2. **Alternativa**: Sigil (editor EPUB) → Tools → Generate TOC

**Problema 6: Arquivo EPUB recusado pelo e-reader**

**Erro**: "Formato não suportado" ou "Arquivo corrompido"

**Causas**:
- EPUB mal formado (erros de validação)
- Formato EPUB 3 em e-reader que suporta apenas EPUB 2
- Arquivo muito volumoso

**Soluções**:
1. **Valide o EPUB** com EPUBCheck:
   - Calibre → Edit Book → Tools → Check Book
   - Corrija os erros relatados
2. **Converta para EPUB 2** se seu e-reader for antigo:
   - Calibre → Convert Books → EPUB Output → EPUB Version → 2
3. **Reduza o tamanho**: Comprima as imagens (Calibre Edit Book → Tools → Compress Images)
4. **Teste em outro dispositivo** para isolar se é um problema do e-reader ou do arquivo

**Problema 7: Caracteres especiais exibidos incorretamente (é → Ã©)**

**Causa**: Problema de codificação (UTF-8 vs Latin-1)

**Soluções**:
1. **Recodifique em UTF-8**:
   - Calibre → Edit Book
   - Abra os arquivos HTML no editor
   - File → Save → Certifique-se de que UTF-8 está selecionado
2. **Verifique a declaração de codificação**: O arquivo XHTML deve ter \`<?xml version="1.0" encoding="UTF-8"?>\`

**Problema 8: Conversão extremamente lenta (>5 minutos)**

**Causas**:
- Arquivo muito volumoso (>100 MB)
- PDF com milhares de páginas
- Computador antigo com pouca RAM

**Soluções**:
1. **Feche outros aplicativos** para liberar RAM
2. **Divida o PDF em seções** (capítulos) e converta separadamente, depois funda os EPUBs resultantes
3. **Use o Calibre** (aplicativo desktop) em vez do conversor web — frequentemente mais rápido para arquivos grandes
4. **Aguarde**: Alguns PDFs complexos realmente requerem 5-10 minutos

**Problema 9: "Not enough memory" ou falha do navegador**

**Causa**: Arquivo PDF muito grande para a RAM disponível

**Soluções**:
1. **Feche todas as outras abas** do navegador
2. **Aumente a memória alocada**: Reinicie o navegador (libera RAM)
3. **Divida o PDF** em arquivos menores (<50 MB cada)
4. **Use um computador mais poderoso** ou
5. **Use Calibre desktop** (melhor otimizado para arquivos grandes)

**Problema 10: Metadados ausentes (autor, título incorreto)**

**Causa**: PDF sem metadados incorporados

**Solução**:
1. **Edite manualmente no Calibre**:
   - Clique direito no livro → Edit Metadata
   - Adicione Título, Autor, Data de publicação, Editora, ISBN, etc.
   - Download cover (baixa capa do Google/Amazon)

**Problema 11: E-reader Kindle não reconhece o EPUB**

**Causa**: Kindle NÃO suporta EPUB nativamente

**Solução**:
1. **Converta EPUB → AZW3** com Calibre:
   - Adicione o EPUB ao Calibre
   - Convert Books → Output format → AZW3
   - Transfira o AZW3 para o Kindle via USB
2. **Alternativa**: Envie o EPUB por e-mail para seu endereço Kindle — Amazon converterá automaticamente (mas menos controle)

**Problema 12: Notas de rodapé tornaram-se inacessíveis**

**Causa**: Links de hipertexto de notas mal formados

**Solução**:
1. **Verifique os links** no Calibre Edit Book:
   - Procure as tags \`<a href="#note1">\` (links para notas)
   - Certifique-se de que as âncoras \`<a id="note1">\` existem
2. **Reformatar notas** como notas de fim de capítulo em vez de notas de rodapé

**Recursos adicionais para solução de problemas**:

- **Fórum MobileRead** (mobileread.com/forums): Comunidade de especialistas em EPUB/ebook, muito ativa
- **r/ebooks no Reddit**: Perguntas sobre formatos, conversão, e-readers
- **Documentação do Calibre** (manual.calibre-ebook.com): Guia completo sobre conversões, edição
- **EPUBCheck** (github.com/w3c/epubcheck): Ferramenta oficial de validação

**Quando desistir da conversão automática**:

Alguns PDFs são simplesmente complexos demais para conversão automática de qualidade:
- Manuais científicos com centenas de equações matemáticas
- Livros de arte com layout artístico complexo
- Partituras musicais
- Documentos legais com anotações críticas
- Quadrinhos (use CBR/CBZ em vez de EPUB)

Para esses casos, considere:
- **Manter o PDF** e usar um tablet com bom app de leitura PDF
- **Conversão manual profissional**
- **Recriar o livro** em ferramenta EPUB dedicada`
            },
            {
                id: "advanced-features",
                title: "Recursos avançados e otimizações EPUB",
                content: `Para usuários que desejam ir além e criar EPUBs de qualidade profissional.

**Tabela de conteúdos (TOC) avançada**

**TOC hierárquica**:
Os melhores EPUBs têm uma tabela de conteúdos multinível:
- Parte I: Introdução
  - Capítulo 1: Contexto
  - Capítulo 2: Metodologia
- Parte II: Resultados
  - Capítulo 3: Análise quantitativa

**Criar TOC hierárquica no Calibre**:
1. Edit Book → Tools → Table of Contents
2. Detectar automaticamente com base em tags HTML (h1, h2, h3)
3. Ajustar manualmente a indentação

**Metadados Dublin Core**

EPUB usa o padrão Dublin Core para metadados:
- **dc:title**: Título do livro
- **dc:creator**: Autor
- **dc:date**: Data de publicação
- **dc:language**: Idioma (pt-BR ou pt-PT)

**Fontes personalizadas**

Incorpore fontes para tipografia especial:
1. Adicione arquivos de fonte (.ttf) no Calibre Edit Book
2. Modifique o CSS: \`@font-face { ... }\`

**Aviso**: Fontes incorporadas aumentam o tamanho do arquivo.

**CSS avançado para EPUB**

- **Estilos de parágrafo**: Indentação, justificação
- **Títulos**: Quebras de página antes de capítulos (\`page-break-before: always\`)
- **Imagens responsivas**: \`max-width: 100%\`

**EPUB 3: Recursos multimídia**
Suporte para áudio, vídeo e MathML (fórmulas matemáticas). Suporte variável entre e-readers.

**EPUB Fixed Layout (FXL)**
Para livros ilustrados ou infantis onde o layout exato importa.

**Acessibilidade (WCAG)**
Use texto alternativo para imagens (\`alt="Descrição"\`) e estrutura semântica (\`<nav>\`, \`<section>\`) para leitores de tela.`
            }
        ],
        faq: [
            {
                q: "Como converter PDF para EPUB para Kindle?",
                a: "Use nossa ferramenta para converter seu PDF para EPUB, depois use o software gratuito Calibre para convertê-lo em formato MOBI/AZW3 compatível com Kindle. Você também pode enviar o EPUB por e-mail para seu Kindle (@kindle.com) e a Amazon o converterá automaticamente."
            },
            {
                q: "A conversão de PDF para EPUB é gratuita?",
                a: "Sim, nosso serviço é totalmente gratuito, sem inscrição, sem limites de arquivos e sem taxas ocultas. A conversão é feita no seu navegador (processamento local), portanto nenhum servidor está envolvido."
            },
            {
                q: "Posso converter PDFs digitalizados (scans)?",
                a: "Nossa ferramenta funciona melhor com PDFs contendo texto selecionável. Para PDFs digitalizados (imagens de página), use primeiro nossa ferramenta OCR PDF (pdfcanada.ca/ocr-pdf) para adicionar uma camada de texto, depois converta para EPUB. Digitalizações de 300 DPI ou mais dão os melhores resultados."
            },
            {
                q: "Como manter o layout durante a conversão?",
                a: "O formato EPUB é 'fluido' por natureza, o que significa que o texto se adapta ao tamanho da tela — essa é sua vantagem! Preservamos a estrutura (títulos, parágrafos, imagens), mas o layout exato pode variar. Para documentos que exigem layout fixo, mantenha o PDF ou use EPUB Fixed Layout."
            },
            {
                q: "Quanto tempo leva a conversão?",
                a: "A maioria das conversões leva 5-15 segundos para um PDF típico de 10-20 MB. Documentos muito longos (500+ páginas) ou grandes (100+ MB) podem levar 1-3 minutos."
            },
            {
                q: "Minhas imagens são preservadas?",
                a: "Sim, incluímos todas as imagens do seu PDF no arquivo EPUB. As imagens são redimensionadas e otimizadas automaticamente para e-readers."
            },
            {
                q: "O EPUB funcionará no meu Kobo?",
                a: "Absolutamente! Kobo suporta perfeitamente EPUB — é seu formato nativo. Basta transferir seu EPUB convertido via USB ou usar o Kobo Desktop."
            },
            {
                q: "Qual a diferença entre EPUB 2 e EPUB 3?",
                a: "EPUB 2 é o padrão clássico. EPUB 3 adiciona suporte multimídia, acessibilidade melhorada e HTML5. Nosso conversor gera EPUB 3 por padrão, compatível com EPUB 2."
            },
            {
                q: "Posso converter livros protegidos por DRM?",
                a: "Não. PDFs protegidos por Adobe DRM ou senha não podem ser convertidos sem remover a proteção primeiro."
            },
            {
                q: "A tabela de conteúdos é gerada automaticamente?",
                a: "Sim, se o seu PDF contiver marcadores ou estrutura de títulos clara."
            },
            {
                q: "Como transfiro meu EPUB para meu e-reader?",
                a: "USB (arrastar e soltar), E-mail (Kindle/Kobo), Aplicativos de desktop (Calibre, Adobe Digital Editions), Nuvem (Google Play Books, Apple Books)."
            },
            {
                q: "Meus metadados são preservados?",
                a: "Sim, extraímos metadados do PDF (título, autor) e os incluímos no EPUB. Você pode editá-los no Calibre se necessário."
            },
            {
                q: "Posso converter vários PDFs simultaneamente?",
                a: "Atualmente processamos um arquivo por vez para melhor desempenho. Para lotes, use Calibre."
            },
            {
                q: "O EPUB será menor que o PDF?",
                a: "Geralmente sim, 30-60% menor devido à otimização e natureza textual."
            },
            {
                q: "Posso ler o EPUB no meu iPhone/iPad?",
                a: "Absolutamente! O Apple Books lê EPUB perfeitamente."
            },
            {
                q: "As notas de rodapé são preservadas?",
                a: "Sim, mas convertidas em links de hipertexto para o final do capítulo/livro."
            },
            {
                q: "Posso converter livros técnicos?",
                a: "Sim, mas layouts complexos podem sofrer alterações. Mantenha o PDF para referência se o layout for crítico."
            },
            {
                q: "Como editar o EPUB após a conversão?",
                a: "Use Calibre Edit Book ou Sigil."
            },
            {
                q: "Caracteres estranhos no EPUB?",
                a: "Problema de codificação. Converta para UTF-8 no Calibre."
            },
            {
                q: "Posso converter quadrinhos?",
                a: "Não recomendado. Use CBZ/CBR ou EPUB Fixed Layout."
            },
            {
                q: "A conversão funciona offline?",
                a: "Sim! Uma vez carregada a página, todo o processamento é local."
            },
            {
                q: "O EPUB funcionará no Google Play Books?",
                a: "Sim, suporte perfeito."
            },
            {
                q: "Meus PDFs são confidenciais. É seguro?",
                a: "Absolutamente. Processamento 100% local. Seus arquivos nunca saem do seu dispositivo."
            }
        ],
        ctaTitle: "Converta seu PDF em EPUB agora",
        ctaButton: "Começar conversão",
        tipsTitle: "Dicas para uma melhor conversão",
        tips: [
            "Use PDFs com texto selecionável (não digitalizações)",
            "PDFs bem estruturados com títulos dão melhores resultados",
            "Evite PDFs com layouts complexos (múltiplas colunas)",
            "Verifique o resultado no seu e-reader antes de excluir o original"
        ],
        relatedTitle: "Ferramentas Relacionadas",
        relatedTools: [
            { name: "EPUB para PDF", desc: "Converta seus ebooks em PDF", path: "/epub-to-pdf" },
            { name: "OCR PDF", desc: "Torne suas digitalizações pesquisáveis", path: "/ocr-pdf" },
            { name: "Organizar PDF", desc: "Reorganize as páginas", path: "/organize-pdf" }
        ]
    }
});

export const PdfToEpubGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent];

    const schema = {
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "datePublished": "2024-04-15",
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
    };

    return (
        <>
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/pdf-to-epub"
                lang={lang}
                schema={schema}
                faqs={t.faq}
                steps={t.steps.map(s => ({ name: s.title, text: typeof s.desc === 'string' ? s.desc : s.title }))}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir un PDF en EPUB pour Kindle?" : "How do I convert PDF to EPUB for Kindle?",
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur PDF vers EPUB de pdfcanada.ca pour créer un fichier EPUB, puis utilisez le logiciel gratuit Calibre pour le convertir en format MOBI/AZW3 compatible Kindle. Vous pouvez aussi envoyer l'EPUB par courriel à votre Kindle. Tout le traitement initial se fait localement."
                        : "Use pdfcanada.ca's PDF to EPUB converter to create an EPUB file, then use the free Calibre software to convert it to Kindle-compatible MOBI/AZW3 format. You can also email the EPUB to your Kindle. All initial processing happens locally.",
                    tool: "PDF to EPUB Converter",
                    steps: lang === 'fr'
                        ? ["Choisissez votre fichier PDF", "Conversion locale automatique", "Téléchargez votre EPUB"]
                        : ["Choose your PDF file", "Automatic local conversion", "Download your EPUB"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'PDF en EPUB' : (lang === 'pt' ? 'PDF para EPUB' : 'PDF to EPUB'), path: lang === 'fr' ? '/fr/guides/pdf-to-epub' : (lang === 'pt' ? '/pt/guides/pdf-to-epub' : '/guides/pdf-to-epub') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<FileText size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides/ultimate-pdf-guide' : `/${lang}/guides/ultimate-pdf-guide` },
                    { name: lang === 'fr' ? 'Guide PDF en EPUB' : lang === 'pt' ? 'Guia PDF para EPUB' : 'PDF to EPUB Guide', href: '#' }
                ]}
            >
                <div className="space-y-12 text-gray-700 dark:text-gray-300">
                    {/* Intro */}
                    <p className="text-lg leading-relaxed">{t.intro}</p>

                    {/* Why Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.whyTitle}</h2>
                        <ul className="space-y-3">
                            {t.whyReasons.map((reason, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* How To Steps */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.howTitle}</h2>
                        <div className="space-y-4">
                            {t.steps.map((step, i) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-4">
                                    <div className="bg-canada-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{step.title}</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Compatibility Section */}
                    <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                            <Tablet className="text-blue-600 shrink-0" size={28} />
                            <div>
                                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">{t.compatTitle}</h2>
                                <p className="text-blue-800 dark:text-blue-400 mb-3">{t.compatText}</p>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-blue-700 dark:text-blue-400">
                                    {t.compatList.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                            <Shield className="text-green-600 shrink-0" size={28} />
                            <div>
                                <h2 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">{t.securityTitle}</h2>
                                <p className="text-green-800 dark:text-green-400">{t.securityText}</p>
                            </div>
                        </div>
                    </section>

                    {/* Tips Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.tipsTitle}</h2>
                        <ul className="space-y-2">
                            {t.tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                                    <span className="text-amber-600 font-bold">{i + 1}.</span>
                                    <span className="text-amber-800 dark:text-amber-300">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="bg-canada-red/5 dark:bg-canada-red/10 border border-canada-red/20 p-8 rounded-xl text-center">
                        <Zap className="text-canada-red mx-auto mb-4" size={40} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/pdf-to-epub`}
                            className="inline-flex items-center gap-2 bg-canada-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-canada-red focus:ring-offset-2"
                        >
                            {t.ctaButton} <ArrowRight size={20} />
                        </Link>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">FAQ</h2>
                        <div className="space-y-4">
                            {t.faq.map((item, i) => (
                                <details key={i} className="group bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <summary className="p-4 font-bold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center hover:text-canada-red transition-colors">
                                        {item.q}
                                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Related Tools */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.relatedTitle}</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {t.relatedTools.map((tool, i) => (
                                <Link
                                    key={i}
                                    href={`/${lang}${tool.path}`}
                                    className="text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-canada-red transition-colors focus:outline-none focus:ring-2 focus:ring-canada-red"
                                >
                                    <h3 className="font-bold text-gray-900 dark:text-white">{tool.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{tool.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment convertir un PDF en EPUB pour Kindle?" : "How do I convert PDF to EPUB for Kindle?"}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur PDF vers EPUB de pdfcanada.ca pour créer un fichier EPUB, puis utilisez le logiciel gratuit Calibre pour le convertir en format MOBI/AZW3 compatible Kindle. Vous pouvez aussi envoyer l'EPUB par courriel à votre Kindle. Tout le traitement initial se fait localement."
                            : "Use pdfcanada.ca's PDF to EPUB converter to create an EPUB file, then use the free Calibre software to convert it to Kindle-compatible MOBI/AZW3 format. You can also email the EPUB to your Kindle. All initial processing happens locally."}
                        toolName="PDF to EPUB Converter"
                        steps={lang === 'fr'
                            ? ["Choisissez votre fichier PDF", "Conversion locale automatique", "Téléchargez votre EPUB"]
                            : ["Choose your PDF file", "Automatic local conversion", "Download your EPUB"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/pdf-to-epub" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


