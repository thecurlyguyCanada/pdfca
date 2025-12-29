'use client';

import Link from 'next/link';
import React from 'react';
import { BookOpen, CheckCircle, Shield, Zap, ArrowRight } from 'lucide-react';
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
    fr: {
        seo: {
            title: `Convertir EPUB en PDF | Guide Ebook ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Transformez vos ebooks en PDF pour une lecture facile. Notre guide ${CURRENT_YEAR} vous montre comment convertir EPUB localement. Sécurisé, rapide et 100% privé.`
        },
        h1: "Le Guide Ultime : Convertir un EPUB en PDF",
        subtitle: "Transformez vos livres numériques en documents universels, sécurisés et prêts pour l'impression.",
        intro: "Vous cherchez comment convertir un fichier **EPUB en PDF**? Notre outil gratuit vous permet de transformer vos livres numériques en format PDF universel en quelques clics. Que vous soyez un étudiant devant imprimer un manuel numérique pour ses cours ou un professionnel ayant besoin de partager un rapport au format ebook avec des collègues, nous avons la solution. Contrairement aux services basés sur le cloud, notre **convertisseur EPUB vers PDF** traite tout localement, garantissant une confidentialité totale.",
        whyTitle: "Pourquoi convertir un ebook en PDF ?",
        whyReasons: [
            "Compatibilité universelle : Les PDF s'ouvrent sur tous les appareils sans application spéciale.",
            "Impression parfaite : Contrairement aux EPUB, les PDF conservent une mise en page fixe adaptée au papier (Lettre ou A4).",
            "Annotation facilitée : Les outils de commentaires sont plus robustes sur PDF pour le travail collaboratif.",
            "Conservation de la mise en page : Vos polices, images et tableaux resteront exactement là où vous les avez placés.",
            "Partage sécurisé : Idéal pour les soumissions académiques ou gouvernementales au Canada."
        ],
        howTitle: "Anatomie de la Conversion : Du Reflowable au Fixe",
        howDescription: "Le format EPUB est « reflowable », ce qui signifie que le texte s'ajuste à la taille de l'écran. Le PDF est un format « fixe ». Notre moteur de conversion effectue un rendu virtuel de votre livre pour créer une mise en page élégante et lisible sur n'importe quel support.",
        sections: [
            {
                id: "comprendre-epub",
                title: "Comprendre les Formats EPUB vs PDF",
                content: `Avant de convertir EPUB en PDF, il est utile de comprendre ce qui rend ces formats différents :

**EPUB (Publication Électronique)** :
- **Format reflowable** : Le texte s'adapte à la taille et l'orientation de l'écran
- **Idéal pour** : Liseuses comme Kindle, Kobo, Apple Books
- **Structure** : Essentiellement un package zippé de HTML, CSS et images
- **Contrôle des polices** : Le lecteur peut ajuster la taille, le type et l'espacement
- **Numéros de page** : Dynamiques—changent selon l'appareil et les paramètres de police

**PDF (Format de Document Portable)** :
- **Mise en page fixe** : Chaque page est identique sur tous les appareils
- **Idéal pour** : Impression, soumissions professionnelles, archivage, annotation
- **Structure** : Document autonome avec polices et images intégrées
- **Contrôle des polices** : Verrouillé—conçu par le créateur
- **Numéros de page** : Fixes—'page 42' est toujours la même sur tous les lecteurs

**Quand convertir EPUB en PDF** :
- Soumissions académiques nécessitant des citations de page (APA, MLA, Chicago)
- Impression de copies physiques ou création de manuscrits reliés
- Révision professionnelle avec références de page fixes
- Portails gouvernementaux ou institutionnels n'acceptant que les PDF
- Annotation avec surlignage pour clubs de lecture ou recherche
- Création de copies d'archivage qui ne se reformateront pas`
            },
            {
                id: "fonctionnement-technique",
                title: "Comment Fonctionne la Conversion EPUB vers PDF (Analyse Technique)",
                content: `Notre convertisseur ne se contente pas d'extraire du texte—il effectue une transformation sophistiquée en plusieurs étapes :

**Étape 1 : Analyse de l'EPUB**
- Décompresse le fichier conteneur .epub
- Lit le fichier OEBPS Container (OPF) pour déterminer l'ordre de lecture
- Extrait les fichiers de contenu HTML/XHTML, feuilles de style CSS et ressources médias
- Identifie l'ordre de la colonne vertébrale (séquence des chapitres)

**Étape 2 : Calcul de Mise en Page**
- Rend chaque chapitre HTML à l'aide du moteur de mise en page du navigateur
- Calcule les sauts de page optimaux (évite les en-têtes orphelins, division d'images)
- Convertit le CSS reflowable en dimensions de page fixes
- Applique la logique de pagination

**Étape 3 : Gestion des Polices**
- **Polices intégrées** : Directement incluses dans le PDF
- **Polices non intégrées** : Substituées par des alternatives open-source de haute qualité
- **Caractères spéciaux** : Support Unicode complet

**Étape 4 : Intégration des Ressources**
- **Images** : Ré-encodées à la résolution appropriée pour l'impression (300 DPI)
- **Graphiques SVG** : Convertis en chemins vectoriels PDF
- **Tableaux** : Reformatés pour s'adapter à la largeur de page
- **Hyperliens** : Liens internes convertis en signets PDF

**Résultat** : Un PDF de qualité professionnelle qui préserve l'intention visuelle de l'ebook tout en offrant la stabilité et l'imprimabilité du format PDF.`
            },
            {
                id: "utilisation-professionnelle",
                title: "Cas d'Utilisation Professionnels et Académiques",
                content: `La conversion EPUB vers PDF est essentielle dans de nombreux contextes professionnels et académiques canadiens :

**Académique et Recherche** :
- **Soumissions universitaires** : De nombreuses universités canadiennes (U de T, UBC, McGill) exigent des thèses en format PDF
- **Citations** : Les numéros de page fixes sont requis pour les citations APA, MLA, Chicago
- **Révision par les pairs** : Les chercheurs annotent les PDF pour les soumissions de revues
- **Subventions de recherche** : Les subventions gouvernementales (CRSNG, CRSH, IRSC) requièrent des annexes PDF

**Juridique et Gouvernemental** :
- **Dépôts judiciaires** : Tous les tribunaux canadiens exigent des dépôts en PDF (CanLII, systèmes provinciaux)
- **Documentation de preuves** : Les équipes juridiques convertissent les manuels ebook en PDF pour les pièces à conviction
- **Conformité réglementaire** : De nombreux organismes canadiens (ARC, IRCC, Santé Canada) n'acceptent que les téléversements PDF

**Édition et Rédaction** :
- **Révision de manuscrits** : Les auteurs convertissent leurs ébauches EPUB en PDF pour révision éditoriale
- **Impression à la demande** : Services comme Lulu, IngramSpark nécessitent des fichiers PDF
- **Enregistrement ISBN** : Bibliothèque et Archives Canada requiert des copies de dépôt en PDF

**Entreprise** :
- **Manuels de formation** : Conversion de matériels ebook en PDF pour impression
- **Documentation de politiques** : Les départements RH nécessitent des versions à mise en page fixe
- **Archivage** : Préservation de documents à long terme`
            },
            {
                id: "contenu-complexe",
                title: "Gestion du Contenu Complexe : Images, Tableaux et Mathématiques",
                content: `Toutes les conversions EPUB vers PDF ne sont pas du simple texte. Voici comment nous gérons le contenu avancé :

**Gestion des Images** :
- **Photos JPEG/PNG** : Préservées à la résolution originale (ou augmentées à 300 DPI pour l'impression)
- **Graphiques vectoriels SVG** : Convertis en chemins vectoriels PDF
- **Images de couverture** : Positionnées sur la première page
- **Positionnement des images** : Ancré aux paragraphes pour éviter l'orphelinage

**Tableaux et Données** :
- **Tableaux simples** : Convertis directement avec bordures, ombrage et alignement préservés
- **Tableaux larges** : Auto-dimensionnés pour s'adapter à la largeur de page
- **Tableaux multi-pages** : Divisés intelligemment avec en-têtes répétés

**Contenu Mathématique** :
- **MathML** : Rendu en graphiques vectoriels PDF de haute qualité
- **Équations LaTeX** : Converties en images ou chemins vectoriels PDF
- **Symboles spéciaux** : Support Unicode complet

**Hyperliens et Navigation** :
- **Liens internes** : Convertis en signets PDF et références de page cliquables
- **URL externes** : Préservées comme liens bleus soulignés
- **Notes de bas de page** : Converties en sauts cliquables
- **Table des matières** : Convertie en signets PDF`
            },
            {
                id: "drm-considerations",
                title: "Protection DRM et Considérations Juridiques",
                content: `La Gestion des Droits Numériques (DRM) est un sujet critique lors de la conversion d'ebooks :

**Qu'est-ce que le DRM ?**
Le DRM est une technologie de protection contre la copie utilisée par les éditeurs. Les schémas DRM courants incluent :
- **Adobe DRM** : Utilisé par Kobo, Google Play Livres, nombreux systèmes de bibliothèques
- **Apple FairPlay** : Utilisé par Apple Books
- **Amazon Kindle DRM** : Protection propriétaire pour les ebooks Kindle

**pdfcanada.ca peut-il convertir des fichiers EPUB protégés par DRM ?**
**Non.** Les ebooks protégés par DRM sont cryptés. Notre outil fonctionne uniquement avec :
- **Ebooks sans DRM** : Achetés auprès de détaillants sans DRM (Tor Books, auteurs indépendants)
- **Créations personnelles** : Fichiers EPUB que vous avez créés vous-même
- **Livres du domaine public** : Littérature classique de Project Gutenberg
- **Prêts de bibliothèque** (après suppression DRM par logiciel de bibliothèque autorisé)

**Considérations Juridiques au Canada** :
- **Loi sur le droit d'auteur (Canada)** : Il est légal de supprimer le DRM des ebooks que vous possédez légalement pour un usage personnel
- **Utilisation équitable** : La loi canadienne permet la copie limitée pour la recherche, l'étude privée
- **Ressources financées publiquement** : De nombreuses bibliothèques académiques canadiennes fournissent des ebooks sans DRM

**Où Trouver des EPUB sans DRM** :
- **Project Gutenberg** (gutenberg.org) : 70 000+ livres du domaine public
- **Standard Ebooks** (standardebooks.org) : Beaux ebooks du domaine public
- **Tor/Forge Books** : Éditeur majeur publiant des ebooks sans DRM
- **Smashwords** : Plateforme d'auteurs indépendants avec options sans DRM
- **Vos propres manuscrits** : Exportés depuis Word, Scrivener, Vellum`
            },
            {
                id: "optimisation",
                title: "Conseils d'Optimisation pour Meilleure Qualité PDF",
                content: `Pour obtenir la meilleure qualité PDF de votre conversion EPUB, suivez ces meilleures pratiques :

**Avant la Conversion** :
1. **Nettoyer l'EPUB** : Utilisez Calibre pour éditer les métadonnées, supprimer les fichiers corrompus
2. **Vérifier les images** : Assurez-vous que les images sont haute résolution (au moins 1200px de largeur)
3. **Revoir la TDM** : Assurez-vous que la Table des Matières est correctement structurée
4. **Tester sur liseuse** : Vérifiez que l'EPUB s'affiche correctement avant conversion

**Pendant la Conversion** :
1. **Choisir la taille de page appropriée** :
   - **Lettre (8,5" × 11")** : Standard au Canada/États-Unis
   - **A4 (210mm × 297mm)** : Standard international, Europe
   - **6" × 9"** : Taille standard pour livres de poche
2. **Définir les marges** : 0,5–1 pouce pour lecture et impression confortables
3. **Activer les numéros de page** : Pour documents académiques ou professionnels

**Après la Conversion** :
1. **Réviser l'ensemble du PDF** : Vérifier :
   - Sauts de page cassés (lignes orphelines, images divisées)
   - Images manquantes ou graphiques corrompus
   - Problèmes de rendu des polices
   - Texte qui se chevauche ou tableaux mal alignés
2. **Tester les signets** : Vérifier que les liens de la Table des Matières fonctionnent
3. **Vérifier la taille du fichier** : Si > 50 Mo, compresser les images
4. **Valider les métadonnées** : Assurer que titre, auteur et mots-clés sont corrects

**Problèmes Courants et Solutions** :
| **Problème** | **Cause** | **Solution** |
|-------------|-----------|--------------|
| Images floues | Images basse résolution dans EPUB | Ré-exporter EPUB avec images haute qualité |
| Caractères cassés | Polices manquantes | Notre convertisseur substitue automatiquement |
| Taille énorme | Images non compressées | Utiliser outil compression PDF |
| Tableaux mal alignés | Imbrication complexe | Simplifier structure avant conversion |`
            },
            {
                id: "impression",
                title: "Guide d'Impression de Votre Ebook Converti",
                content: `Une fois converti EPUB en PDF, vous pouvez imprimer une copie physique :

**Impression Maison** (Papier Lettre/A4) :
1. **Sélection du papier** : Utilisez du papier blanc brillant 24 lb (90 gsm)
2. **Paramètres d'impression** :
   - **Recto-verso (duplex)** : Économise le papier
   - **Ajuster à la page** : Assure qu'aucun contenu n'est coupé
   - **Plage de pages** : Imprimer chapitres spécifiques pour économiser l'encre
3. **Options de reliure** :
   - **Agrafé** : Fonctionne pour < 20 pages
   - **Reliure spirale** : Apportez à l'imprimerie pour reliure professionnelle (5–15 $ CAD)
   - **Reliure trois anneaux** : Perforez pour organisation facile

**Impression Professionnelle** (Livret/Livre de poche) :
1. **Exporter PDF avec taille de rognage appropriée** : 6" × 9" ou 5,5" × 8,5"
2. **Ajouter fond perdu** : 0,125" sur tous les côtés
3. **Imprimeries canadiennes** :
   - **Bureau en Gros** : Reliure et impression en magasin
   - **FedEx Office** : Impression couleur haute qualité
   - **Imprimeries locales** : Souvent moins cher pour commandes en gros
4. **Impression à la demande en ligne** :
   - **Lulu.com** : Téléversez PDF, commandez copies uniques
   - **IngramSpark** : Impression de qualité professionnelle
   - **Amazon KDP** : Impression à la demande avec option redevances

**Estimations de Coûts** (Canada) :
- **Impression maison** : 0,05–0,10 $ par page (noir & blanc)
- **Reliure spirale Bureau en Gros** : 10–20 $ pour livre de 100 pages
- **Livre de poche professionnel** : 5–15 $ par livre
- **Impression en gros** (100 copies) : 2–5 $ par livre`
            },
            {
                id: "confidentialite",
                title: "Confidentialité et Sécurité : Pourquoi le Traitement Local Est Important",
                content: `Lors de la conversion d'ebooks en PDF, la confidentialité est primordiale :

**Pourquoi les Convertisseurs en Ligne Sont Risqués** :
1. **Téléversement = Perte de Contrôle** : Votre manuscrit est transmis sur Internet
2. **Stockage sur serveur** : De nombreux services conservent des copies
3. **Exploration de données** : Les habitudes de lecture peuvent être analysées et vendues
4. **Exposition des droits d'auteur** : Le téléversement d'œuvres protégées pourrait vous exposer légalement
5. **Accès interne** : Les employés du service peuvent accéder à vos fichiers

**Comment pdfcanada.ca Protège Votre Vie Privée** :
- **Zéro téléversement** : Votre fichier EPUB ne quitte jamais votre navigateur
- **Traitement local** : La conversion se fait dans la RAM de votre ordinateur
- **Suppression instantanée** : Lorsque vous fermez l'onglet, toutes les traces disparaissent
- **Aucune journalisation** : Nous ne suivons pas ce que vous convertissez
- **Architecture ouverte** : Les utilisateurs techniquement avertis peuvent inspecter notre code

**Conformité LPRPDE** (Canada) :
- Le traitement local signifie qu'il n'y a pas de collecte de données personnelles
- Aucun formulaire de consentement nécessaire
- Parfait pour les auteurs, chercheurs, avocats gérant des manuscrits confidentiels

**Comparaison** :
| **Fonctionnalité** | **Convertisseurs Cloud** | **pdfcanada.ca** |
|-------------|----------------------|------------------|
| Fichiers téléversés sur serveur | ✗ Oui | ✓ Jamais |
| Rétention de données | ✗ Jours à toujours | ✓ 0 secondes |
| Risque d'accès tiers | ✗ Élevé | ✓ Aucun |
| Fonctionne hors ligne | ✗ Non | ✓ Oui |
| Conforme LPRPDE | ✗ Nécessite confiance | ✓ Garanti |`
            },
            {
                id: "depannage",
                title: "Dépannage des Problèmes de Conversion Courants",
                content: `**Problème 1 : La conversion échoue avec "Erreur de lecture EPUB"**
- **Cause** : Fichier EPUB corrompu ou structure invalide
- **Solution** : Ouvrez l'EPUB dans Calibre, utilisez "Modifier le livre" → "Vérifier le livre" pour valider et réparer

**Problème 2 : Les images sont floues ou pixelisées**
- **Cause** : Images basse résolution dans l'EPUB original
- **Solution** : Si vous contrôlez la source, ré-exportez l'EPUB avec images haute résolution (1200+ px)

**Problème 3 : Le PDF n'a pas de signets/Table des matières**
- **Cause** : L'EPUB manque de TDM structurée
- **Solution** : Utilisez Calibre pour créer une TDM appropriée à partir des balises de titre (h1, h2)

**Problème 4 : Le texte déborde des marges de page**
- **Cause** : Le CSS EPUB a des éléments à largeur fixe plus larges que la page PDF
- **Solution** : Augmentez la taille de page PDF ou éditez le CSS EPUB

**Problème 5 : Les caractères spéciaux s'affichent comme des boîtes**
- **Cause** : Polices manquantes pour caractères Unicode
- **Solution** : Notre convertisseur substitue automatiquement les polices

**Problème 6 : La taille du fichier est extrêmement grande (> 100 Mo)**
- **Cause** : Images non compressées
- **Solution** : Utilisez notre outil de compression PDF après conversion

**Problème 7 : Les notes de bas de page sont manquantes**
- **Cause** : L'EPUB utilise une implémentation non standard
- **Solution** : Révisez manuellement le PDF

**Problème 8 : La conversion prend très longtemps (> 5 minutes)**
- **Cause** : EPUB volumineux (> 500 pages) ou appareil lent
- **Solution** : Soyez patient—fermez les autres onglets pour libérer de la RAM`
            },
            {
                id: "mots-cles-seo",
                title: "Mots-clés SEO et Recherche",
                content: `Ce guide couvre : **convertisseur EPUB en PDF**, **convertir EPUB en PDF gratuit**, **conversion EPUB PDF**, **ebook en PDF**, **convertisseur EPUB vers PDF en ligne gratuit**, **EPUB en PDF sans téléversement**, **comment convertir EPUB en PDF**, **conversion de livre numérique**, **reflowable vers mise en page fixe**, **convertisseur EPUB PDF Canada**, **conversion EPUB sans DRM**, **convertir ebooks pour impression**, **EPUB en PDF pour Kindle**, **conversion ebook académique**, **conversion manuscrit PDF**, **EPUB en PDF avec signets**, **convertir EPUB en PDF imprimable**, **convertisseur EPUB local**, **conversion ebook axée confidentialité**, **EPUB en PDF pour soumission**, **conversion EPUB domaine public**, **EPUB en PDF haute qualité**.`
            }
        ],
        steps: [
            {
                title: "Sélectionnez votre fichier EPUB",
                desc: "Glissez-déposez votre fichier .epub. Nous supportons les fichiers jusqu'à 100 Mo pour vos manuscrits les plus volumineux."
            },
            {
                title: "Transformation locale",
                desc: "Notre technologie WebAssembly analyse le code HTML interne de l'EPUB et génère un PDF haute-fidélité directement dans votre navigateur."
            },
            {
                title: "Téléchargez votre PDF",
                desc: "Récupérez votre document instantanément. Il est prêt pour le partage, l'archivage ou l'impression."
            }
        ],
        securityTitle: "Confidentialité et Propriété Intellectuelle",
        securityText: "Vos œuvres littéraires sont précieuses. En utilisant pdfcanada.ca, votre livre ne quitte jamais votre appareil. C'est la solution la plus sûre pour les auteurs et chercheurs soucieux de la protection de leurs données personnelles au Canada.",
        faq: [
            {
                q: "Comment convertir un fichier EPUB en PDF gratuitement ?",
                a: "Utilisez le convertisseur EPUB en PDF de pdfcanada.ca. Sélectionnez simplement votre fichier .epub, et notre moteur WebAssembly le convertira localement dans votre navigateur sans aucun téléversement. Le processus est 100% gratuit, illimité et ne nécessite pas de compte. Votre ebook ne quitte jamais votre appareil, garantissant une confidentialité totale."
            },
            {
                q: "Pourquoi certaines images semblent floues après la conversion ?",
                a: "Si l'EPUB original contient des images basse résolution optimisées pour les petits écrans de liseuse (typiquement 600-800px de largeur), elles peuvent sembler douces lorsqu'elles sont agrandies à une page PDF complète (2550px pour Lettre à 300 DPI). Notre outil préserve la résolution d'image originale—nous ne pouvons pas ajouter des détails qui n'étaient pas là. Pour de meilleurs résultats, utilisez des EPUB avec images haute résolution (1200+ px de largeur)."
            },
            {
                q: "Mes signets et surlignages seront-ils convertis ?",
                a: "Les signets EPUB internes standard (entrées de Table des matières) sont convertis en Signets PDF (barre latérale de navigation). Cependant, les surlignages personnels, notes et annotations créés dans des applications de lecture spécifiques (comme iBooks, Kindle, Kobo) sont stockés séparément dans la base de données de l'application, pas dans le fichier EPUB lui-même, et ne peuvent pas être convertis. Seul le contenu intégré dans la structure du fichier EPUB est préservé."
            },
            {
                q: "Y a-t-il une limite de taille de fichier ?",
                a: "Nous prenons en charge les fichiers EPUB jusqu'à 100 Mo. La plupart des romans font 1-5 Mo, mais les manuels techniques avec de nombreuses images peuvent atteindre 50-100 Mo. Les fichiers plus volumineux prennent plus de temps à traiter (3-5 minutes pour 100 Mo) car ils nécessitent plus de CPU et RAM. Si votre appareil a une mémoire limitée, essayez de convertir sur un ordinateur de bureau plutôt que sur un téléphone ou une tablette."
            },
            {
                q: "Puis-je convertir des ebooks protégés par DRM ?",
                a: "Non. Le DRM (Digital Rights Management) est un cryptage qui empêche la copie non autorisée. Notre convertisseur fonctionne uniquement avec les EPUB sans DRM, tels que : livres achetés auprès de détaillants sans DRM (Tor Books, Smashwords), livres du domaine public (Project Gutenberg), vos propres manuscrits, ou ebooks de bibliothèque sans DRM. Pour vérifier si un EPUB a un DRM, essayez de l'ouvrir dans Calibre—s'il demande une clé de décryptage, il est protégé."
            },
            {
                q: "Est-ce que cela fonctionne avec reMarkable, Kindle Scribe ou autres tablettes e-ink ?",
                a: "Oui ! Convertir EPUB en PDF est essentiel pour les tablettes e-ink de prise de notes. Ces appareils (reMarkable, Kindle Scribe, Supernote, Boox) fonctionnent mieux avec des PDF à mise en page fixe car ils permettent une annotation précise à des emplacements de page spécifiques. La mise en page reflowable de l'EPUB rend difficile de localiser où vous avez écrit une note si la taille de police change. Convertissez d'abord en PDF pour la meilleure expérience d'annotation."
            },
            {
                q: "Mes fichiers sont-ils téléversés sur vos serveurs ?",
                a: "Non. Toute la conversion EPUB vers PDF se fait localement dans votre navigateur en utilisant WebAssembly. Votre fichier ebook ne quitte jamais votre appareil—il n'est pas téléversé, pas stocké sur nos serveurs, et n'est pas accessible pour nous. Lorsque vous fermez l'onglet du navigateur, toutes les traces sont supprimées de la RAM. C'est la façon la plus sécurisée de convertir des ebooks au Canada, garantissant une confidentialité totale pour les manuscrits, livres achetés ou documents sensibles."
            },
            {
                q: "Quelle taille de page dois-je utiliser pour l'impression ?",
                a: "Cela dépend de votre méthode d'impression : **Lettre (8,5\" × 11\")** : Standard au Canada/États-Unis pour impression maison et reliure spirale. **A4 (210mm × 297mm)** : Standard international, courant en Europe. **6\" × 9\"** : Idéal pour livres de poche impression à la demande (Lulu, IngramSpark, Amazon KDP). **5,5\" × 8,5\"** : Taille digest pour livres de poche commerciaux. Pour la plupart des utilisateurs, Lettre est le choix le plus sûr sauf si vous créez un livre professionnel."
            },
            {
                q: "Le PDF préservera-t-il la Table des matières ?",
                a: "Oui. Si votre EPUB a une Table des Matières (TDM) correctement structurée, elle sera convertie en Signets PDF, qui apparaissent dans la barre latérale de navigation des lecteurs PDF comme Adobe Acrobat, Preview (Mac) ou Chrome. Si la TDM est manquante ou cassée dans le PDF, l'EPUB original avait probablement une TDM mal formée. Vous pouvez corriger cela avant de convertir en utilisant Calibre pour éditer l'EPUB et générer une TDM à partir des balises de titre (h1, h2, etc.)."
            },
            {
                q: "Puis-je convertir des fichiers EPUB 3 (avec audio/vidéo) ?",
                a: "Nous prenons en charge le format EPUB 3, mais seul le contenu statique (texte, images, SVG) est préservé. Les médias interactifs comme l'audio intégré, la vidéo ou les animations JavaScript ne peuvent pas être inclus dans le PDF (qui est un format de document statique). Si votre EPUB 3 contient du multimédia, seuls les éléments visuels et le texte seront convertis."
            },
            {
                q: "Comment corriger les polices cassées ou manquantes dans le PDF converti ?",
                a: "Si les caractères s'affichent comme des boîtes (☐) ou utilisent la mauvaise police, l'EPUB original a probablement des polices non intégrées qui ne sont pas installées sur votre système. Notre convertisseur substitue automatiquement les polices manquantes par des alternatives de haute qualité (Libertinus pour Times New Roman, Inter pour Arial). Si les problèmes persistent, utilisez Calibre pour éditer l'EPUB et intégrer les polices avant de convertir : Modifier le livre → Outils → Intégrer les polices."
            },
            {
                q: "Pourquoi mon PDF converti est énorme (100+ Mo) ?",
                a: "Les grandes tailles de fichiers PDF résultent généralement d'images non compressées dans l'EPUB original. De nombreux ebooks contiennent des photos pleine résolution inutilement volumineuses pour la lecture numérique. Après conversion, utilisez notre outil de Compression PDF pour réduire la taille du fichier de 50-80% sans perte de qualité notable. Alternativement, éditez l'EPUB dans Calibre pour redimensionner les images avant de convertir."
            },
            {
                q: "Puis-je convertir des fichiers Kindle (AZW/KFX) en PDF ?",
                a: "Non, pas directement. Les fichiers Kindle (AZW, AZW3, KFX) sont des formats propriétaires d'Amazon et souvent protégés par DRM. Vous devez d'abord convertir les fichiers Kindle en EPUB en utilisant Calibre (avec des plugins de suppression DRM si nécessaire), puis utiliser notre outil pour convertir EPUB en PDF. Note : La suppression DRM peut violer les conditions de service d'Amazon, donc faites-le uniquement avec des livres que vous possédez légalement pour un usage personnel."
            },
            {
                q: "Les hyperliens fonctionneront-ils dans le PDF converti ?",
                a: "Oui. Les hyperliens internes (Table des Matières, références de notes de bas de page, renvois) sont convertis en liens internes PDF (sauts de page cliquables). Les hyperliens externes (URL vers des sites Web) sont préservés comme liens bleus soulignés qui s'ouvrent dans un navigateur lorsqu'on clique dessus. Cela rend le PDF entièrement interactif pour la lecture numérique."
            },
            {
                q: "Combien de temps prend la conversion ?",
                a: "Le temps de conversion dépend de la complexité de l'EPUB et de votre appareil : **Petit roman** (1-3 Mo, 200 pages) : 10-30 secondes. **Ebook moyen** (5-10 Mo, 500 pages) : 1-2 minutes. **Grand manuel technique** (20-50 Mo, 1000+ pages avec images) : 3-5 minutes. Les EPUB complexes avec de nombreuses images, tableaux ou graphiques SVG prennent plus de temps. Fermez les autres onglets du navigateur pour accélérer le traitement."
            },
            {
                q: "Puis-je convertir plusieurs EPUB à la fois (conversion par lots) ?",
                a: "Actuellement, notre outil web traite un fichier à la fois pour des performances optimales du navigateur. Pour la conversion par lots, utilisez un logiciel de bureau comme Calibre, qui peut mettre en file d'attente plusieurs fichiers. Cependant, l'avantage de notre outil est la confidentialité (traitement local) et la commodité zéro-configuration—aucune installation de logiciel requise."
            },
            {
                q: "Pourquoi mes numéros de page sont manquants ou incorrects ?",
                a: "Les EPUB n'ont pas de numéros de page fixes (ils sont reflowables). Lors de la conversion en PDF, les numéros de page sont générés en fonction du calcul de mise en page. Si vous avez besoin d'une numérotation de page spécifique (par exemple, commençant à la page 1 pour le Chapitre 1), vous devrez peut-être éditer la structure EPUB ou ajouter manuellement des numéros de page au PDF après conversion en utilisant Adobe Acrobat ou des outils similaires."
            },
            {
                q: "La conversion est-elle conforme WCAG/accessibilité ?",
                a: "Notre convertisseur préserve la structure HTML sémantique de l'EPUB (titres, paragraphes, listes), qui est la base des PDF accessibles. Cependant, la conformité WCAG complète (PDF balisé, texte alternatif, ordre de lecture) nécessite un post-traitement supplémentaire dans Adobe Acrobat Pro ou des outils similaires. Si l'accessibilité est critique, utilisez Calibre pour vous assurer que l'EPUB a des balises sémantiques appropriées avant de convertir."
            },
            {
                q: "Puis-je utiliser ceci à des fins commerciales (vente de PDF convertis) ?",
                a: "Vous pouvez utiliser notre outil à des fins commerciales (par exemple, convertir votre manuscrit en PDF pour la vente), mais assurez-vous d'avoir le droit légal de distribuer le contenu. Convertir l'EPUB protégé par droits d'auteur de quelqu'un d'autre et vendre le PDF violerait la loi sur le droit d'auteur. Pour vos propres créations, manuscrits ou œuvres du domaine public, il n'y a pas de restrictions."
            },
            {
                q: "Que se passe-t-il si mon EPUB a des polices personnalisées ?",
                a: "Si l'EPUB inclut des polices personnalisées intégrées (woff, otf, ttf), elles sont préservées dans le PDF pour une fidélité pixel-parfaite. Si les polices ne sont pas intégrées mais référencées par nom (par exemple, 'Garamond'), notre convertisseur les substitue par des polices open-source similaires. Pour de meilleurs résultats, intégrez les polices dans l'EPUB en utilisant Calibre avant de convertir."
            },
            {
                q: "Est-ce que cela fonctionne sur les appareils mobiles (iPhone/Android) ?",
                a: "Oui, mais avec des limitations. La conversion EPUB vers PDF nécessite un CPU et une RAM significatifs, dont les navigateurs mobiles ont moins que les ordinateurs de bureau. Les petits EPUB (< 5 Mo) fonctionnent bien sur les téléphones modernes. Les fichiers plus gros (> 20 Mo) peuvent être lents ou planter sur les appareils plus anciens. Pour de meilleurs résultats, utilisez un ordinateur de bureau ou portable."
            },
            {
                q: "Puis-je convertir des EPUB avec des équations mathématiques ?",
                a: "Oui. Les EPUB avec MathML (notation mathématique basée sur XML) sont rendus en utilisant le moteur de mise en page mathématique du navigateur et intégrés comme graphiques de haute qualité dans le PDF. Les équations LaTeX (si présentes dans l'EPUB sous forme d'images) sont préservées telles quelles. Pour de meilleurs résultats, assurez-vous que l'EPUB utilise MathML ou des images d'équations pré-rendues plutôt que de l'art ASCII."
            },
            {
                q: "Pourquoi mon PDF a-t-il l'air différent de l'EPUB sur ma liseuse ?",
                a: "Les liseuses appliquent leurs propres styles de rendu (polices, marges, espacement des lignes) aux EPUB. Lors de la conversion en PDF, nous utilisons un rendu web standardisé pour créer une mise en page fixe. Le PDF ressemblera à l'EPUB rendu dans un navigateur web, pas à votre vue de liseuse personnalisée. C'est intentionnel—les PDF sont destinés à avoir la même apparence pour tout le monde."
            },
            {
                q: "Puis-je protéger par mot de passe le PDF converti ?",
                a: "Pas pendant la conversion, mais après. Une fois que vous avez téléchargé le PDF, utilisez notre outil de Protection par Mot de Passe PDF (ou Adobe Acrobat) pour ajouter un cryptage par mot de passe. Ceci est utile pour protéger les manuscrits sensibles, rapports confidentiels ou documents personnels."
            },
            {
                q: "Qu'advient-il des notes de bas de page et des notes de fin ?",
                a: "Les notes de bas de page et notes de fin sont préservées dans le PDF. Si l'EPUB utilise un HTML sémantique approprié pour les notes de bas de page (<aside epub:type=\"footnote\">), elles sont converties avec des liens cliquables (sauter à la note de bas de page, retourner au texte). Si l'EPUB utilise un formatage de note de bas de page non standard, elles apparaîtront comme du texte régulier à l'emplacement désigné (généralement fin de chapitre ou fin de livre)."
            }
        ],
        ctaTitle: "Prêt à transformer votre livre ?",
        ctaButton: "Convertir en PDF maintenant",
        relatedTitle: "Outils de lecture recommandés",
        relatedTools: [
            { name: "PDF vers EPUB", desc: "Créez des ebooks à partir de documents", path: "/pdf-to-epub" },
            { name: "OCR PDF", desc: "Rendez vos scans consultables", path: "/ocr-pdf" },
            { name: "Supprimer des pages", desc: "Nettoyez vos documents PDF", path: "/delete-pdf-pages" }
        ]
    },
    en: {
        seo: {
            title: "How to Convert EPUB to PDF | Free & Secure Ebook Guide | pdfcanada.ca",
            desc: `Turn your ebooks into PDFs for easy reading and printing. Our ${CURRENT_YEAR} guide shows you how to convert EPUB locally in your browser. Secure, fast, and 100% private.`
        },
        h1: "The Definitive Guide: Converting EPUB to PDF",
        subtitle: "Transform your digital library into a stable, printable, and universally accessible format.",
        intro: "Need to convert an **EPUB to PDF** for professional use or printing? While EPUB is fantastic for e-readers, the PDF format remains king for formal submissions, high-quality printing, and corporate documentation. Whether you are a student preparing materials for a Canadian university or a self-published author proofreading your latest manuscript, our **free online EPUB to PDF converter** provides a professional-grade result without the security risks of cloud-based competitors. We process everything locally in your browser memory.",
        whyTitle: "The Case for PDF over EPUB",
        whyReasons: [
            "Fixed Layout: Ensure every table, image, and page number stays exactly where you intended (ideal for textbooks).",
            "Universal Printing: PDFs are natively supported by every print shop and local printer across Canada.",
            "Cross-Platform Stability: A PDF looks the same on an iPhone, a Windows PC, and a Linux workstation.",
            "Advanced Annotation: Use industry-standard tools to sign, mark up, and highlight documents.",
            "Accessibility (WCAG): Properly structured PDFs are easier to optimize for screen readers in professional settings."
        ],
        howTitle: "The Science of High-Fidelity Conversion",
        howDescription: "EPUB files are essentially simplified websites (HTML/CSS) zipped into a container. To convert **EPUB to PDF** accurately, our engine performs a full layout calculation, determines appropriate page breaks, and embeds fonts to ensure the resulting document is a stable snapshot of your ebook.",
        sections: [
            {
                id: "what-is-epub",
                title: "Understanding EPUB vs PDF Formats",
                content: `Before converting EPUB to PDF, it helps to understand what makes these formats different:

**EPUB (Electronic Publication)**:
- **Reflowable format**: Text adapts to screen size and orientation
- **Ideal for**: E-readers like Kindle, Kobo, Apple Books
- **Structure**: Essentially a zipped package of HTML, CSS, and images
- **Font control**: Reader can adjust font size, typeface, and spacing
- **Page numbers**: Dynamic—change based on device and font settings

**PDF (Portable Document Format)**:
- **Fixed layout**: Every page looks identical on all devices
- **Ideal for**: Printing, professional submissions, archival, annotation
- **Structure**: Self-contained document with embedded fonts and images
- **Font control**: Locked—designed by the creator
- **Page numbers**: Fixed—'page 42' is always the same across all viewers

**When to convert EPUB to PDF**:
- Academic submissions requiring page citations (APA, MLA, Chicago style)
- Printing physical copies or creating bound manuscripts
- Professional proofreading with fixed page references
- Government or institutional portals that only accept PDF
- Annotating with highlighting and comments for book clubs or research
- Creating archival copies that won't reflow if software updates change rendering`
            },
            {
                id: "layout-logic",
                title: "How EPUB to PDF Conversion Works (Technical Deep Dive)",
                content: `Our converter doesn't just 'scrape' text—it performs a sophisticated multi-stage transformation:

**Stage 1: EPUB Parsing**
- Unzips the .epub container file
- Reads the OEBPS Container File (OPF) to determine reading order
- Extracts HTML/XHTML content files, CSS stylesheets, and media assets
- Identifies spine order (the sequence chapters should appear)
- Parses metadata (title, author, publisher, ISBN)

**Stage 2: Layout Calculation**
- Renders each HTML chapter using the browser's layout engine
- Calculates optimal page breaks (avoiding orphaned headers, splitting images)
- Converts reflowable CSS into fixed-width page dimensions
- Applies pagination logic to determine where each chapter starts
- Generates page numbers if configured

**Stage 3: Font Handling**
- **Embedded fonts**: Directly included in the PDF for perfect fidelity
- **Non-embedded fonts**: Substituted with high-quality open-source alternatives (e.g., Libertinus for Times New Roman, Inter for Arial)
- **Special characters**: Ensures Unicode support for multilingual text (French accents, Chinese characters, mathematical symbols)

**Stage 4: Asset Integration**
- **Images**: Re-encoded at appropriate resolution for print (300 DPI for photos, vector for diagrams)
- **SVG graphics**: Converted to PDF vector paths to maintain scalability
- **Tables**: Reformatted to fit page width, with smart wrapping for long rows
- **Hyperlinks**: Internal links (Table of Contents, footnotes) converted to PDF bookmarks; external URLs preserved as clickable links

**Stage 5: PDF Assembly**
- Combines all rendered pages into a single PDF document
- Adds document metadata (title, author, keywords for search)
- Creates **PDF Bookmarks** (navigation sidebar) from EPUB Table of Contents
- Embeds fonts to ensure cross-platform consistency
- Optimizes file size (compression of images, removal of redundant data)

**Result**: A professional-quality PDF that preserves the visual intent of the original ebook while providing the stability and printability PDF is known for.`
            },
            {
                id: "professional-use",
                title: "Professional & Academic Use Cases",
                content: `EPUB to PDF conversion is essential in many Canadian professional and academic contexts:

**Academic & Research**:
- **University submissions**: Many Canadian universities (U of T, UBC, McGill) require theses and dissertations in PDF format for institutional repositories
- **Citations**: Fixed page numbers are required for proper APA, MLA, Chicago citations. EPUB's dynamic pages make this impossible
- **Peer review**: Researchers annotate PDFs with comments for journal submissions
- **Course materials**: Professors convert ebooks to PDF for LMS (Learning Management System) uploads where EPUB isn't supported
- **Grant applications**: Government research grants (NSERC, SSHRC, CIHR) require PDF appendices

**Legal & Government**:
- **Court submissions**: All Canadian courts require PDF filings (CanLII, provincial court systems)
- **Evidence documentation**: Legal teams convert ebook contracts or manuals to PDF for court exhibits
- **Regulatory compliance**: Many Canadian regulatory bodies (CRA, IRCC, Health Canada) only accept PDF uploads
- **FOI requests**: Freedom of Information requests often require PDF documentation

**Publishing & Authoring**:
- **Manuscript proofreading**: Authors convert their EPUB drafts to PDF for final editorial review with page-specific comments
- **Print-on-demand**: Services like Lulu, IngramSpark, Amazon KDP require PDF files for physical book printing
- **ISBN registration**: Library and Archives Canada requires PDF deposit copies
- **Book previews**: Publishers create PDF samples for media kits and promotional materials

**Corporate & Business**:
- **Training manuals**: Convert ebook training materials to PDF for printing or SharePoint distribution
- **Policy documentation**: HR departments need fixed-layout versions of employee handbooks
- **Reports**: Convert market research ebooks to PDF for stakeholder presentations
- **Archival**: Long-term document preservation (PDFs are more stable than EPUB over decades)`
            },
            {
                id: "media-handling",
                title: "Handling Complex Content: Images, Tables, and Math",
                content: `Not all EPUB to PDF conversions are simple text. Here's how we handle advanced content:

**Image Handling**:
- **JPEG/PNG photographs**: Preserved at original resolution (or upscaled to 300 DPI for print if lower)
- **SVG vector graphics**: Converted to PDF vector paths—infinitely scalable without pixelation
- **GIF animations**: Only the first frame is preserved (PDFs don't support animation)
- **Cover images**: Positioned on the first page or as PDF metadata (visible in file properties)
- **Image positioning**: Anchored to paragraphs to prevent orphaning across page breaks

**Tables and Data**:
- **Simple tables**: Converted directly with preserved cell borders, shading, and alignment
- **Wide tables**: Auto-scaled to fit PDF page width, or rotated to landscape orientation if necessary
- **Multi-page tables**: Split intelligently across pages with repeated headers for readability
- **Nested tables**: Flattened or reformatted if nesting breaks PDF layout engine

**Mathematical Content**:
- **MathML (XML-based math)**: Rendered using MathJax or similar engine, then embedded as PDF vector graphics
- **LaTeX equations**: If present in EPUB (rare), converted to images or PDF vector paths
- **Special symbols**: Unicode math symbols (∑, ∫, π, ∞) embedded with font support
- **Equation numbering**: Preserved from EPUB structure

**Hyperlinks and Navigation**:
- **Internal links**: Converted to PDF bookmarks and clickable page references
- **External URLs**: Preserved as blue underlined links (clickable in PDF viewers)
- **Footnotes**: Linked footnotes become clickable jumps to end-of-page or end-of-chapter notes
- **Table of Contents**: Converted to PDF Outline/Bookmarks (navigation sidebar in Adobe Acrobat, Preview, etc.)

**Specialized Content**:
- **Code snippets**: Syntax highlighting preserved (if styled in EPUB CSS), monospace fonts maintained
- **Poetry/verse**: Line breaks and indentation respected for proper formatting
- **Foreign languages**: Full Unicode support for Arabic (right-to-left), Chinese/Japanese (vertical text if configured), Cyrillic, etc.`
            },
            {
                id: "drm-limitations",
                title: "DRM Protection and Legal Considerations",
                content: `Digital Rights Management (DRM) is a critical topic when converting ebooks:

**What is DRM?**
DRM is copy-protection technology used by publishers and distributors to prevent unauthorized copying of ebooks. Common DRM schemes include:
- **Adobe DRM**: Used by Kobo, Google Play Books, many library systems
- **Apple FairPlay**: Used by Apple Books
- **Amazon Kindle DRM**: Proprietary protection for Kindle ebooks

**Can pdfcanada.ca convert DRM-protected EPUB files?**
**No.** DRM-protected ebooks are encrypted and cannot be converted without authorization. Our tool only works with:
- **DRM-free ebooks**: Purchased from DRM-free retailers (e.g., Tor Books, some indie authors)
- **Personal creations**: EPUB files you created yourself (manuscripts, self-published works)
- **Public domain books**: Classic literature from Project Gutenberg, Internet Archive
- **Library loans** (after DRM removal by authorized library software)

**Legal Considerations in Canada**:
- **Copyright Act (Canada)**: It is legal to remove DRM from ebooks you legally own for personal format-shifting (backup, accessibility). However, distributing or sharing DRM-removed files is illegal
- **Fair dealing**: Canadian law allows limited copying for research, private study, criticism, and review
- **Publicly funded resources**: Many Canadian academic libraries provide DRM-free ebooks through institutional subscriptions

**How to Check if Your EPUB Has DRM**:
1. **Try opening in Calibre**: If Calibre asks for a decryption key, it's DRM-protected
2. **Check the file size**: Extremely small EPUBs (< 100 KB) with no readable content when unzipped are likely encrypted
3. **Look for .acsm files**: Adobe Content Server Message files indicate DRM (not actual ebooks)

**Where to Find DRM-Free EPUBs**:
- **Project Gutenberg** (gutenberg.org): 70,000+ public domain books
- **Standard Ebooks** (standardebooks.org): Beautiful public domain ebooks
- **Tor/Forge Books**: Major publisher that releases DRM-free ebooks
- **Smashwords**: Indie author platform with many DRM-free options
- **Your own manuscripts**: Export from Word, Scrivener, Vellum, etc.`
            },
            {
                id: "formatting-best-practices",
                title: "Optimization Tips for Best PDF Output",
                content: `To get the best PDF quality from your EPUB conversion, follow these best practices:

**Before Conversion**:
1. **Clean up the EPUB**: Use Calibre to edit metadata, remove corrupt files, validate EPUB structure
2. **Check images**: Ensure images are high-resolution (at least 1200px width for full-page images)
3. **Review TOC**: Make sure the Table of Contents is properly structured (will become PDF bookmarks)
4. **Test on e-reader**: Verify the EPUB displays correctly before converting

**During Conversion**:
1. **Choose appropriate page size**:
   - **Letter (8.5" × 11")**: Standard in Canada/US, best for most uses
   - **A4 (210mm × 297mm)**: International standard, used in Europe
   - **6" × 9"**: Standard book trim size for printing paperbacks
   - **Custom sizes**: For specialized printing needs
2. **Set margins**: 0.5–1 inch margins for comfortable reading and printing
3. **Enable page numbers**: For academic or professional documents
4. **Preserve hyperlinks**: Keep clickable links for digital reading

**After Conversion**:
1. **Review the entire PDF**: Check for:
   - Broken page breaks (orphaned lines, split images)
   - Missing images or corrupted graphics
   - Font rendering issues (missing characters)
   - Overlapping text or misaligned tables
2. **Test bookmarks**: Verify Table of Contents links work in Adobe Acrobat or Preview
3. **Check file size**: If > 50 MB, consider compressing images using our PDF compression tool
4. **Validate metadata**: Ensure title, author, and keywords are correct (visible in file properties)
5. **Test printing**: Print one page to verify margins and scaling are correct

**Common Issues and Fixes**:
| **Problem** | **Cause** | **Solution** |
|-------------|-----------|--------------|
| Blurry images | Low-res images in original EPUB | Re-export EPUB with higher quality images |
| Broken characters | Missing fonts | Our converter auto-substitutes fonts; if still broken, check EPUB validity |
| Huge file size | Uncompressed images | Use PDF compression tool after conversion |
| Misaligned tables | Complex table nesting | Simplify table structure in EPUB before converting |
| No bookmarks | EPUB missing TOC | Add Table of Contents to EPUB using Calibre before converting |`
            },
            {
                id: "printing-guide",
                title: "Printing Your Converted Ebook",
                content: `Once you've converted EPUB to PDF, you may want to print a physical copy. Here's how:

**Home Printing** (Letter/A4 Paper):
1. **Paper selection**: Use 24 lb (90 gsm) bright white paper for best readability
2. **Print settings**:
   - **Two-sided (duplex)**: Saves paper, creates book-like reading experience
   - **Fit to page**: Ensures no content is cut off at margins
   - **Page range**: Print specific chapters to save ink
3. **Binding options**:
   - **Stapled**: Works for < 20 pages
   - **Spiral bound**: Take to print shop for professional coil binding ($5–15 CAD)
   - **Three-ring binder**: Punch holes for easy organization

**Professional Printing** (Booklet/Paperback):
1. **Export PDF with proper trim size**: 6" × 9" or 5.5" × 8.5" (standard book sizes)
2. **Add bleed**: 0.125" bleed on all sides if images extend to page edges
3. **Canadian print shops**:
   - **Staples Canada**: In-store binding and printing
   - **FedEx Office**: High-quality color printing
   - **Local print shops**: Often cheaper for bulk orders
4. **Online print-on-demand**:
   - **Lulu.com**: Upload PDF, order single copies or sell online
   - **IngramSpark**: Professional-grade printing, library distribution
   - **Amazon KDP**: Print on demand with royalties option

**Cost Estimates** (Canada):
- **Home printing**: $0.05–0.10 per page (black & white)
- **Staples spiral binding**: $10–20 for 100-page book
- **Professional paperback**: $5–15 per book (print-on-demand)
- **Bulk printing** (100 copies): $2–5 per book

**Legal Reminder**: Only print ebooks you have the right to print (DRM-free books you purchased, public domain works, or your own creations). Printing pirated ebooks violates copyright law.`
            },
            {
                id: "privacy-security",
                title: "Privacy & Security: Why Local Processing Matters",
                content: `When converting ebooks to PDF, privacy is paramount:

**Why Online Converters Are Risky**:
1. **Upload = Loss of Control**: Your manuscript or purchased ebook is transmitted over the internet
2. **Server Storage**: Many services keep copies of uploads (sometimes permanently)
3. **Data Mining**: Reading habits and book content can be analyzed and sold to marketers
4. **Copyright Exposure**: Uploading copyrighted works could expose you legally
5. **Insider Access**: Employees at the service can access your files

**How pdfcanada.ca Protects Your Privacy**:
- **Zero uploads**: Your EPUB file never leaves your browser
- **Local processing**: Conversion happens in your computer's RAM using WebAssembly
- **Instant deletion**: When you close the browser tab, all traces are gone
- **No logging**: We don't track what you convert, when you convert it, or any file contents
- **Open architecture**: Technically savvy users can inspect our code to verify these claims

**PIPEDA Compliance** (Canada):
- Local-first processing means there's no personal data collected
- No consent forms needed—we can't access what we never receive
- Perfect for authors, researchers, lawyers handling confidential manuscripts

**Comparison**:
| **Feature** | **Cloud Converters** | **pdfcanada.ca** |
|-------------|----------------------|------------------|
| Files uploaded to server | ✗ Yes | ✓ Never |
| Data retention | ✗ Days to forever | ✓ 0 seconds |
| Third-party access risk | ✗ High | ✓ None |
| Works offline | ✗ No | ✓ Yes (after initial load) |
| PIPEDA compliant | ✗ Requires trust | ✓ Guaranteed |`
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting Common Conversion Issues",
                content: `**Problem 1: Conversion Fails with "Error Reading EPUB"**
- **Cause**: Corrupted EPUB file or invalid structure
- **Solution**: Open EPUB in Calibre, use "Edit Book" → "Check Book" to validate and repair, then try converting again

**Problem 2: Images Are Blurry or Pixelated**
- **Cause**: Low-resolution images in original EPUB (optimized for small e-reader screens)
- **Solution**: If you control the source, re-export EPUB with higher resolution images (1200+ px width). For purchased books, this is a limitation of the original file

**Problem 3: PDF Has No Bookmarks/Table of Contents**
- **Cause**: EPUB is missing structured TOC or uses HTML-only navigation
- **Solution**: Before converting, use Calibre to edit EPUB and create a proper TOC from heading tags (h1, h2, etc.)

**Problem 4: Text Overflows Page Margins**
- **Cause**: EPUB CSS has fixed-width elements wider than PDF page
- **Solution**: Increase PDF page size (use A4 instead of Letter) or edit EPUB CSS to remove fixed widths

**Problem 5: Special Characters Display as Boxes**
- **Cause**: Missing fonts for Unicode characters (e.g., Chinese, Arabic, mathematical symbols)
- **Solution**: Our converter auto-substitutes fonts, but if issue persists, ensure the EPUB includes embedded fonts or use Calibre to embed fonts before converting

**Problem 6: File Size is Extremely Large (> 100 MB)**
- **Cause**: Uncompressed images or embedded media files
- **Solution**: After conversion, use our PDF Compression tool to reduce size without quality loss

**Problem 7: Footnotes Missing or Broken**
- **Cause**: EPUB uses non-standard footnote implementation
- **Solution**: If footnotes are critical, manually review PDF and add them back using PDF annotation tools

**Problem 8: Conversion Takes Very Long (> 5 Minutes)**
- **Cause**: Large EPUB (> 500 pages) or slow device
- **Solution**: Be patient—complex books with many images require significant CPU. Close other browser tabs to free up RAM`
            },
            {
                id: "seo-keywords",
                title: "SEO & Search Keywords",
                content: `This guide covers: **EPUB to PDF converter**, **convert EPUB to PDF free**, **EPUB PDF conversion**, **ebook to PDF**, **free EPUB to PDF converter online**, **EPUB to PDF no upload**, **how to convert EPUB to PDF**, **digital book conversion**, **reflowable to fixed layout**, **EPUB PDF converter Canada**, **DRM-free EPUB conversion**, **convert ebooks for printing**, **EPUB to PDF for Kindle**, **academic ebook conversion**, **manuscript PDF conversion**, **EPUB to PDF with bookmarks**, **convert EPUB to printable PDF**, **local EPUB converter**, **privacy-focused ebook conversion**, **EPUB to PDF for submission**, **public domain EPUB conversion**, **EPUB to PDF high quality**, **professional ebook conversion**.`
            }
        ],
        steps: [
            {
                title: "Select your EPUB file",
                desc: "Choose your .epub file. We support both EPUB 2 and EPUB 3 standards, including those with complex embedded media."
            },
            {
                title: "Privacy-Protected Rendering",
                desc: "Our WebAssembly engine processes the conversion in a sandboxed environment on your device. Your intellectual property never touches our servers."
            },
            {
                title: "Finalize and Download",
                desc: "Click download to save your new PDF. It is optimized for standard 8.5x11 inch paper by default."
            }
        ],
        securityTitle: "Secure Local Processing (No Uploads)",
        securityText: "At pdfcanada.ca, we believe in 'Data Sovereignty'. Most online converters sell your reading data or keep copies of your manuscripts. Our tool runs strictly in your computer's RAM. When you close the tab, your file is gone. This is the **most secure way to convert EPUB to PDF** in Canada.",
        faq: [
            {
                q: "How do I convert EPUB to PDF for free?",
                a: "Use pdfcanada.ca's EPUB to PDF converter. Simply select your .epub file, and our WebAssembly engine will convert it locally in your browser without any uploads. The process is 100% free, unlimited, and doesn't require an account. Your ebook never leaves your device, ensuring complete privacy."
            },
            {
                q: "Why do some images look blurry after conversion?",
                a: "If the original EPUB contains low-resolution images optimized for small e-reader screens (typically 600-800px wide), they may appear soft when scaled to a full PDF page (2550px for Letter at 300 DPI). Our tool preserves the original image resolution—we can't add detail that wasn't there. For best results, use EPUBs with high-resolution images (1200+ px width)."
            },
            {
                q: "Will my bookmarks and highlights be converted?",
                a: "Standard internal EPUB bookmarks (Table of Contents entries) are converted to PDF Bookmarks (navigation sidebar). However, personal highlights, notes, and annotations made within specific e-reader apps (like iBooks, Kindle, Kobo) are stored separately in the app's database, not in the EPUB file itself, and cannot be converted. Only content embedded in the EPUB file structure is preserved."
            },
            {
                q: "Is there a file size limit?",
                a: "We support EPUB files up to 100 MB. Most novels are 1-5 MB, but technical manuals with many images can reach 50-100 MB. Larger files take longer to process (3-5 minutes for 100 MB files) as they require more CPU and RAM. If your device has limited memory, try converting on a desktop computer rather than a phone or tablet."
            },
            {
                q: "Can I convert DRM-protected ebooks?",
                a: "No. DRM (Digital Rights Management) encryption prevents unauthorized copying. Our converter only works with DRM-free EPUBs, such as: books purchased from DRM-free retailers (Tor Books, Smashwords), public domain books (Project Gutenberg), your own manuscripts, or DRM-free library ebooks. To check if an EPUB has DRM, try opening it in Calibre—if it asks for a decryption key, it's protected."
            },
            {
                q: "Does it work with reMarkable, Kindle Scribe, or other e-ink tablets?",
                a: "Yes! Converting EPUB to PDF is essential for e-ink note-taking tablets. These devices (reMarkable, Kindle Scribe, Supernote, Boox) work best with fixed-layout PDFs because they allow precise annotation at specific page locations. EPUB's reflowable layout makes it hard to pinpoint where you wrote a note if the font size changes. Convert to PDF first for the best annotation experience."
            },
            {
                q: "Are my files uploaded to your servers?",
                a: "No. All EPUB to PDF conversion happens locally in your browser using WebAssembly. Your ebook file never leaves your device—it's not uploaded, not stored on our servers, and not accessible to us. When you close the browser tab, all traces are deleted from RAM. This is the most secure way to convert ebooks in Canada, ensuring complete privacy for manuscripts, purchased books, or sensitive documents."
            },
            {
                q: "What page size should I use for printing?",
                a: "It depends on your printing method: **Letter (8.5\" × 11\")**: Standard in Canada/US for home printing and spiral binding. **A4 (210mm × 297mm)**: International standard, common in Europe. **6\" × 9\"**: Best for print-on-demand paperbacks (Lulu, IngramSpark, Amazon KDP). **5.5\" × 8.5\"**: Digest size for trade paperbacks. For most users, Letter is the safest choice unless you're creating a professional book."
            },
            {
                q: "Will the PDF preserve the Table of Contents?",
                a: "Yes. If your EPUB has a properly structured Table of Contents (TOC), it will be converted to PDF Bookmarks, which appear in the navigation sidebar of PDF viewers like Adobe Acrobat, Preview (Mac), or Chrome. If the TOC is missing or broken in the PDF, the original EPUB likely had a malformed TOC. You can fix this before converting by using Calibre to edit the EPUB and generate a TOC from heading tags (h1, h2, etc.)."
            },
            {
                q: "Can I convert EPUB 3 files (with audio/video)?",
                a: "We support EPUB 3 format, but only static content (text, images, SVG) is preserved. Interactive media like embedded audio, video, or JavaScript animations cannot be included in PDF (which is a static document format). If your EPUB 3 contains multimedia, only the visual elements and text will be converted."
            },
            {
                q: "How do I fix broken or missing fonts in the converted PDF?",
                a: "If characters display as boxes (☐) or use the wrong font, the original EPUB likely has un-embedded fonts that aren't installed on your system. Our converter auto-substitutes missing fonts with high-quality alternatives (Libertinus for Times New Roman, Inter for Arial). If problems persist, use Calibre to edit the EPUB and embed fonts before converting: Edit Book → Tools → Embed Fonts."
            },
            {
                q: "Why is my converted PDF huge (100+ MB)?",
                a: "Large PDF file sizes usually result from uncompressed images in the original EPUB. Many ebooks contain full-resolution photos that are unnecessarily large for digital reading. After conversion, use our PDF Compression tool to reduce file size by 50-80% without noticeable quality loss. Alternatively, edit the EPUB in Calibre to resize images before converting."
            },
            {
                q: "Can I convert Kindle (AZW/KFX) files to PDF?",
                a: "No, not directly. Kindle files (AZW, AZW3, KFX) are Amazon's proprietary formats and often DRM-protected. You must first convert Kindle files to EPUB using Calibre (with DRM removal plugins if needed), then use our tool to convert EPUB to PDF. Note: DRM removal may violate Amazon's terms of service, so only do this with books you legally own for personal use."
            },
            {
                q: "Will hyperlinks work in the converted PDF?",
                a: "Yes. Internal hyperlinks (Table of Contents, footnote references, cross-references) are converted to PDF internal links (clickable page jumps). External hyperlinks (URLs to websites) are preserved as blue underlined links that open in a browser when clicked. This makes the PDF fully interactive for digital reading."
            },
            {
                q: "How long does conversion take?",
                a: "Conversion time depends on EPUB complexity and your device: **Small novel** (1-3 MB, 200 pages): 10-30 seconds. **Medium ebook** (5-10 MB, 500 pages): 1-2 minutes. **Large technical manual** (20-50 MB, 1000+ pages with images): 3-5 minutes. Complex EPUBs with many images, tables, or SVG graphics take longer. Close other browser tabs to speed up processing."
            },
            {
                q: "Can I convert multiple EPUBs at once (batch conversion)?",
                a: "Currently, our web-based tool processes one file at a time for optimal browser performance. For batch conversion, use desktop software like Calibre, which can queue multiple files. However, our tool's advantage is privacy (local processing) and zero-setup convenience—no software installation required."
            },
            {
                q: "Why are my page numbers missing or incorrect?",
                a: "EPUBs don't have fixed page numbers (they're reflowable). When converting to PDF, page numbers are generated based on the layout calculation. If you need specific page numbering (e.g., starting at page 1 for Chapter 1), you may need to edit the EPUB structure or add page numbers manually to the PDF after conversion using Adobe Acrobat or similar tools."
            },
            {
                q: "Is the conversion WCAG/accessibility compliant?",
                a: "Our converter preserves semantic HTML structure from the EPUB (headings, paragraphs, lists), which is the foundation for accessible PDFs. However, full WCAG compliance (tagged PDF, alt-text, reading order) requires additional post-processing in Adobe Acrobat Pro or similar tools. If accessibility is critical, use Calibre to ensure the EPUB has proper semantic tags before converting."
            },
            {
                q: "Can I use this for commercial purposes (selling converted PDFs)?",
                a: "You can use our tool for commercial purposes (e.g., converting your manuscript to PDF for sale), but ensure you have the legal right to distribute the content. Converting someone else's copyrighted EPUB and selling the PDF would violate copyright law. For your own creations, manuscripts, or public domain works, there are no restrictions."
            },
            {
                q: "What if my EPUB has custom fonts?",
                a: "If the EPUB includes embedded custom fonts (woff, otf, ttf), they are preserved in the PDF for pixel-perfect fidelity. If fonts are not embedded but referenced by name (e.g., 'Garamond'), our converter substitutes with similar open-source fonts. For best results, embed fonts in the EPUB using Calibre before converting."
            },
            {
                q: "Does this work on mobile devices (iPhone/Android)?",
                a: "Yes, but with limitations. EPUB to PDF conversion requires significant CPU and RAM, which mobile browsers have less of than desktop computers. Small EPUBs (< 5 MB) work fine on modern phones. Larger files (> 20 MB) may be slow or crash on older devices. For best results, use a desktop or laptop computer."
            },
            {
                q: "Can I convert EPUBs with mathematical equations?",
                a: "Yes. EPUBs with MathML (XML-based math notation) are rendered using the browser's math layout engine and embedded as high-quality graphics in the PDF. LaTeX equations (if present in the EPUB as images) are preserved as-is. For best results, ensure the EPUB uses MathML or pre-rendered equation images rather than ASCII art."
            },
            {
                q: "Why does my PDF look different from the EPUB on my e-reader?",
                a: "E-readers apply their own rendering styles (fonts, margins, line spacing) to EPUBs. When converting to PDF, we use standardized web rendering to create a fixed layout. The PDF will look like the EPUB rendered in a web browser, not like your customized e-reader view. This is intentional—PDFs are meant to look the same for everyone."
            },
            {
                q: "Can I password-protect the converted PDF?",
                a: "Not during conversion, but you can after. Once you've downloaded the PDF, use our PDF Password Protection tool (or Adobe Acrobat) to add password encryption. This is useful for protecting sensitive manuscripts, confidential reports, or personal documents."
            },
            {
                q: "What happens to footnotes and endnotes?",
                a: "Footnotes and endnotes are preserved in the PDF. If the EPUB uses proper semantic HTML for footnotes (<aside epub:type=\"footnote\">), they're converted with clickable links (jump to footnote, return to text). If the EPUB uses non-standard footnote formatting, they'll appear as regular text at the designated location (usually end of chapter or end of book)."
            }
        ],
        ctaTitle: "Upgrade Your Library Today",
        ctaButton: "Convert EPUB to PDF",
        relatedTitle: "Complementary Document Tools",
        relatedTools: [
            { name: "PDF to EPUB", desc: "Turn fixed documents into reflowable ebooks", path: "/pdf-to-epub" },
            { name: "OCR PDF", desc: "Extract text from image-based scans", path: "/ocr-pdf" },
            { name: "Organize PDF", desc: "Rearrange your book's page order", path: "/organize-pdf" }
        ]
    }
});

export const EpubToPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang];

    const schema = {
        "@type": "Article",
        "headline": t.h1,
        "description": t.seo.desc,
        "datePublished": "2024-04-01",
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
                canonicalPath="/guides/epub-to-pdf"
                lang={lang}
                schema={schema}
                faqs={t.faq}
                steps={t.steps.map(s => ({ name: s.title, text: typeof s.desc === 'string' ? s.desc : s.title }))}
                quickAnswer={{
                    question: lang === 'fr' ? "Comment convertir un EPUB en PDF gratuitement?" : "How do I convert EPUB to PDF for free?",
                    answer: lang === 'fr'
                        ? "Utilisez le convertisseur EPUB en PDF de pdfcanada.ca. Sélectionnez votre fichier .epub, notre moteur WebAssembly le convertira localement dans votre navigateur, puis téléchargez le PDF. Vos livres ne quittent jamais votre appareil."
                        : "Use pdfcanada.ca's EPUB to PDF converter. Select your .epub file, our WebAssembly engine converts it locally in your browser, then download the PDF. Your books never leave your device.",
                    tool: "EPUB to PDF Converter",
                    steps: lang === 'fr'
                        ? ["Sélectionnez votre fichier EPUB", "Attendez le rendu local", "Téléchargez votre PDF"]
                        : ["Select your EPUB file", "Wait for local rendering", "Download your PDF"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', path: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'EPUB en PDF' : 'EPUB to PDF', path: lang === 'fr' ? '/fr/guides/epub-to-pdf' : '/guides/epub-to-pdf' }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<BookOpen size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                    { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                    { name: lang === 'fr' ? 'EPUB en PDF' : 'EPUB to PDF', href: '#' }
                ]}
            >
                <div className="space-y-12 text-gray-700 dark:text-gray-300">
                    {/* Intro */}
                    <div className="text-xl leading-relaxed">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Why Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.whyTitle}</h2>
                        <ul className="space-y-4 mb-8">
                            {t.whyReasons.map((reason, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-canada-red shrink-0 mt-0.5" size={20} />
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* New Detailed Sections */}
                    <div className="grid md:grid-cols-2 gap-12 border-t border-gray-100 dark:border-gray-800 pt-12">
                        {t.sections.map((section) => (
                            <div key={section.id} className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                {typeof section.content === 'string' ? (
                                    <MarkdownContent content={section.content} className="text-gray-600 dark:text-gray-400" />
                                ) : (
                                    section.content
                                )}
                            </div>
                        ))}
                    </div>

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

                    {/* CTA */}
                    <section className="bg-canada-red/5 dark:bg-canada-red/10 border border-canada-red/20 p-8 rounded-xl text-center">
                        <Zap className="text-canada-red mx-auto mb-4" size={40} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.ctaTitle}</h2>
                        <Link href={`/${lang}/epub-to-pdf`}
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
                        <div className="grid md:grid-cols-2 gap-4">
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
                        question={lang === 'fr' ? "Comment convertir un EPUB en PDF gratuitement?" : "How do I convert EPUB to PDF for free?"}
                        answer={lang === 'fr'
                            ? "Utilisez le convertisseur EPUB en PDF de pdfcanada.ca. Sélectionnez votre fichier .epub, notre moteur WebAssembly le convertira localement dans votre navigateur, puis téléchargez le PDF. Vos livres ne quittent jamais votre appareil."
                            : "Use pdfcanada.ca's EPUB to PDF converter. Select your .epub file, our WebAssembly engine converts it locally in your browser, then download the PDF. Your books never leave your device."}
                        toolName="EPUB to PDF Converter"
                        steps={lang === 'fr'
                            ? ["Sélectionnez votre fichier EPUB", "Attendez le rendu local", "Téléchargez votre PDF"]
                            : ["Select your EPUB file", "Wait for local rendering", "Download your PDF"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/epub-to-pdf" category="convert" />

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </>
    );
};


