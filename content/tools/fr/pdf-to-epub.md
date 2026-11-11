---
title: "Convertir un PDF en EPUB gratuitement : livre numérique recomposable"
h1: "Comment convertir un PDF en EPUB"
lead: "Transformez un PDF texte en EPUB 3 recomposable avec chapitres, notes contextuelles et couverture, le tout construit dans votre navigateur. Rien n'est téléversé."
description: "Convertissez un PDF en EPUB recomposable pour Kobo ou Kindle, gratuitement et dans votre navigateur. Titres et notes détectés; 300 pages en 20 à 60 secondes."
answer: "Choisissez votre PDF, laissez EPUB Reflowable sélectionné et cliquez sur Convertir le fichier. L'outil lit la couche texte avec pdf.js, repère les titres et les notes de bas de page, retire les en-têtes courants et les numéros de page, puis assemble un EPUB 3 lisible sur Kobo, Kindle ou téléphone. Gratuit, sans compte, sans téléversement. Il faut un PDF avec du vrai texte : les numérisations, les articles sur deux colonnes et les tableaux se convertissent mal."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane"]
  - ["Où se fait la conversion", "Dans l'onglet de votre navigateur. pdf.js lit le PDF, JSZip construit l'EPUB; aucun serveur n'intervient."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Un PDF texte de 300 pages se convertit sans peine sur un portable; les fichiers riches en images de plus de 100 Mo sont lents sur téléphone, car chaque image est réencodée."]
  - ["Nombre de pages", "Aucune limite fixe. 300 pages prennent 20 à 60 secondes sur un portable; un ouvrage de référence de 1 000 pages fonctionne, mais peut demander plusieurs minutes."]
  - ["Entrée", ".pdf avec couche texte. Les PDF numérisés (images de pages) donnent un EPUB avec la couverture et les images, mais peu ou pas de texte."]
  - ["Sortie", "Un .epub (EPUB 3.0) avec un seul fichier de chapitre, une table des matières, les images incorporées en PNG et une couverture tirée de la page 1. Le PDF n'est pas modifié."]
  - ["Sortie de rechange", "Passez en mode PDF Visuel pour obtenir, au lieu d'un EPUB, un PDF recadré et repaginé pour un écran de liseuse de 6 à 10 pouces."]
  - ["Ce qui reste sur votre appareil", "Le PDF et l'EPUB. Le site n'enregistre qu'une visite anonyme."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée."]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents sur ordinateur; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un PDF en EPUB pour Kobo ou Kindle?"
    a: "Sélectionnez le PDF, gardez EPUB Reflowable sélectionné et cliquez sur Convertir le fichier; le .epub se télécharge en moins d'une minute pour la plupart des livres. Copiez-le sur une Kobo par USB ou avec l'application Kobo, ou envoyez-le à un Kindle par l'adresse courriel Envoyer vers Kindle d'Amazon ou son application, qui acceptent l'EPUB directement."
  - q: "Les chapitres et les titres seront-ils détectés?"
    a: "En général, oui. Une ligne est traitée comme un titre quand sa police dépasse d'au moins 15 % celle du corps du texte ou qu'elle est surtout en gras et compte moins de 120 caractères, et chaque titre devient une entrée de la table des matières de l'EPUB. Les livres qui marquent leurs chapitres seulement par un espace blanc, dans la même taille de police, ressortent en un seul long chapitre."
  - q: "Puis-je convertir un PDF numérisé en EPUB?"
    a: "Pas de façon utile. Une numérisation n'a pas de couche texte : le convertisseur ne trouve aucun mot et vous obtenez une couverture et les images des pages, sans texte recomposable. Il faut d'abord passer le PDF à la reconnaissance de caractères (ROC) dans Acrobat, ABBYY ou le logiciel du numériseur, après quoi il se convertit normalement."
  - q: "Les images sont-elles conservées?"
    a: "La plupart. Chaque image incorporée est extraite, réencodée en PNG et placée dans le texte à l'endroit où elle figurait sur la page. Les dessins vectoriels, les graphiques tracés en lignes plutôt qu'en pixels et certains encodages d'image inhabituels sont ignorés. La première page est aussi rendue en JPEG et sert de couverture."
  - q: "Que deviennent les numéros de page, en-têtes et pieds de page?"
    a: "Ils sont retirés. Toute ligne qui se répète sur plus de 40 % des pages, et toute ligne qui n'est qu'un nombre ou « Page 12 », est éliminée pour que le livre ne se remplisse pas d'en-têtes parasites. Un titre de chapitre repris en en-tête courant sur chaque page de ce chapitre peut disparaître aussi; c'est un compromis connu."
  - q: "Pourquoi mon PDF sur deux colonnes ressort-il mélangé?"
    a: "Le convertisseur lit le texte de haut en bas et de gauche à droite sur toute la largeur de la page, si bien que les deux colonnes d'un article savant s'entrelacent ligne par ligne. Pour les articles sur deux colonnes, utilisez plutôt le mode PDF Visuel de cette page, qui détecte la gouttière et lit chaque colonne à son tour sous forme d'images recadrées."
  - q: "Les notes de bas de page sont-elles prises en charge?"
    a: "Oui, sous forme de notes contextuelles EPUB 3. Le petit texte près du bas d'une page qui commence par un chiffre ou un symbole comme * ou † est traité comme une note, déplacé en fin de livre et relié à l'appel de note en exposant dans le texte. Kobo, Apple Livres et les Kindle récents les affichent en fenêtre contextuelle; les liseuses plus anciennes les montrent en notes de fin."
  - q: "L'EPUB porte-t-il la bonne étiquette de langue?"
    a: "L'étiquette de langue de l'EPUB est réglée sur l'anglais, quelle que soit la langue du livre. Le texte lui-même n'est pas touché, donc un PDF en français se lit très bien, mais le dictionnaire et la césure de la liseuse peuvent se régler par défaut sur l'anglais. Vous pouvez changer l'étiquette dans l'éditeur de métadonnées de Calibre si cela compte."
---
## Comment convertir un PDF en EPUB gratuitement?

Cinq gestes. Pour un roman de 250 pages doté d'une vraie couche texte, comptez 15 à 40 secondes sur un portable.

### Étape 1 : sélectionnez votre PDF

Cliquez sur **Choisir un fichier** ou déposez le PDF sur la page. L'outil n'accepte que le `.pdf`. Si le document demande un mot de passe à l'ouverture, retirez d'abord le mot de passe dans Acrobat Reader ou Aperçu (Fichier → Exporter, sans mot de passe); un fichier chiffré ne peut pas être lu.

### Étape 2 : choisissez EPUB Reflowable

Une carte d'options apparaît avec deux modes. **EPUB Reflowable** est sélectionné par défaut et c'est celui dont traite cette page : il produit un `.epub` dont le texte se recompose selon l'écran et la taille de caractères. **PDF Visuel** est la solution de rechange pour les mises en page qui ne peuvent pas être recomposées; on y revient plus bas.

### Étape 3 : cliquez sur Convertir le fichier

Appuyez sur **Convertir le fichier**. L'outil lit le texte de chaque page, mesure les tailles de police, décide quelles lignes sont des titres, du corps, des notes ou des éléments de page, extrait les images, rend la première page en couverture et compresse le tout en EPUB. L'indicateur d'avancement tourne pendant toute l'opération; sur téléphone, ne changez pas d'onglet, car le navigateur pourrait suspendre la page.

### Étape 4 : téléchargez le .epub

Le fichier se télécharge sous le nom du PDF avec l'extension `.epub`. Le titre et l'auteur inscrits dans les métadonnées du PDF, s'il y en a, deviennent ceux du livre; sinon, c'est le nom de fichier qui sert.

### Étape 5 : chargez-le sur votre liseuse

C'est l'étape qu'on saute, avant de s'étonner que le fichier ait l'air étrange dans un lecteur PDF. Un EPUB n'est pas un PDF. Ouvrez-le dans Apple Livres, Kobo, Calibre, Thorium ou l'application Kindle, ou envoyez-le à un Kindle, puis feuilletez le premier chapitre pour vérifier les titres et les fins de paragraphe.

> **Astuce :** Convertissez d'abord un extrait de 20 pages tiré avec [Extraire des pages PDF](/fr/extract-pdf-pages). Si les titres et les paragraphes sont bons, le livre entier le sera aussi; sinon, vous vous êtes épargné une longue attente.

## Qu'arrive-t-il à mon PDF pendant la conversion?

Tout se passe dans l'onglet. pdf.js, le moteur que Firefox utilise pour afficher les PDF, ouvre le fichier depuis la mémoire et renvoie chaque fragment de texte avec sa position, son nom de police et sa taille. L'outil regroupe les fragments en lignes, les lignes en paragraphes et les paragraphes en un seul chapitre XHTML. Les images sont dessinées sur un canevas caché et enregistrées en PNG. JSZip écrit ensuite les fichiers `mimetype`, `container.xml`, `content.opf`, `nav.xhtml` et `content.xhtml` qui forment un paquet EPUB 3 et vous remet le ZIP en téléchargement.

Il n'y a pas d'étape serveur parce qu'un serveur n'ajouterait rien. Si vous surveillez l'onglet Réseau des outils de développement pendant la conversion, vous voyez les scripts de la page et une requête de visite anonyme, et aucun transfert de la taille de votre PDF.

C'est ce qui importe à qui convertit un manuscrit sous contrat, une thèse avant la soutenance, un dossier judiciaire à lire sur une Kobo ou un livre épuisé numérisé et océrisé soi-même. Le texte n'existe nulle part ailleurs que sur l'appareil que vous tenez.

## Ma mise en forme survivra-t-elle à la conversion?

En partie, et de façon prévisible. Le convertisseur travaille à partir de la couche texte : ce qui s'exprime par la taille, la graisse ou la position du texte a une chance; ce qui relève de la mise en page, non.

| Dans le PDF | Dans l'EPUB | Comment c'est décidé |
|---|---|---|
| Paragraphes du corps | Conservés, recomposés | Les lignes sont jointes jusqu'à un écart de 1,8 interligne, ou une fin de phrase suivie d'un écart plus grand |
| Mots coupés en fin de ligne | Recollés | Une ligne finissant par « - » est soudée à la suivante sans le trait |
| Ligatures (fi, fl, ffi) | Développées en lettres simples | Évite les carrés sur les liseuses dont la police manque de glyphes |
| Titres de chapitres et de sections | h1/h2/h3 avec entrées de table des matières | Police ≥ 1,15 × le corps, ou surtout en gras, et moins de 120 caractères |
| Mots en gras et en italique | Conservés | Lus dans le nom de la police (Bold, Black, Italic, Oblique) |
| En-têtes et pieds de page courants | Retirés | Toute ligne répétée sur plus de 40 % des pages |
| Numéros de page | Retirés | Nombres seuls et lignes « Page N » |
| Notes de bas de page | Déplacées en fin de livre, en notes contextuelles | Petit texte dans les 40 % inférieurs de la page, commençant par un chiffre ou un symbole |
| Images matricielles incorporées | Conservées en PNG, à leur place | Dessinées sur canevas; certains encodages ignorés |
| Graphiques vectoriels, filets, cadres | Perdus | Ils ne font partie ni du texte ni des images |
| Tableaux | Aplatis en lignes | Les cellules sont lues de gauche à droite en texte simple |
| Deux colonnes ou plus | Entrelacées | Le texte est trié par position verticale sur toute la page |
| Couverture | Page 1 rendue en JPEG | Définie comme image de couverture de l'EPUB |

Concrètement, selon le type de document :

| Document | Résultat | Recommandation |
|---|---|---|
| Roman ou récit exporté de Word ou d'InDesign | Très bon; chapitres, italiques et paragraphes survivent | Convertir tel quel |
| Essai avec notes et intertitres | Bon; table des matières et notes contextuelles fonctionnent | Vérifier que de courtes phrases en gras n'ont pas été prises pour des titres |
| Rapport d'entreprise avec tableaux et graphiques | Mitigé; la prose est bonne, les tableaux s'aplatissent, les graphiques disparaissent | Lire en PDF, ou utiliser le mode PDF Visuel |
| Article savant sur deux colonnes | Mauvais en mode Reflowable | Utiliser le mode PDF Visuel |
| Livre numérisé sans ROC | Couverture et images seulement | Faire la ROC d'abord |
| Formulaire ou feuillet (Relevé 1, T4, bail) | Sans intérêt | Garder le PDF |

## Dois-je choisir EPUB Reflowable ou PDF Visuel?

La seconde option de la carte de modes existe parce que certains documents ne peuvent pas être recomposés sans être détruits. **PDF Visuel** n'extrait aucun texte. Il rend chaque page à double résolution, repère les bords de la zone imprimée, rogne les marges, cherche une gouttière entre deux colonnes et découpe le contenu en bandes à la taille d'un écran de liseuse. Vous choisissez l'écran cible avec un curseur de 6 à 10 pouces : 6 convient à un Kindle de base ou à une Kobo Clara, 7 à une Paperwhite ou à une Libra, 10 à une Scribe ou à une Kobo Elipsa. Le résultat est un PDF de pages JPEG, en général plus lourd que l'original, sans texte sélectionnable.

Choisissez EPUB Reflowable pour la prose : romans, essais, rapports, thèses, tout ce que vous liriez volontiers sur une colonne avec votre propre taille de caractères. Choisissez PDF Visuel pour les articles de revues, les partitions, les manuels avec équations et schémas, et tout ce dont la disposition sur la page est le contenu même. Pour envoyer un PDF Visuel à un Kindle, expédiez-le par courriel à votre adresse @kindle.com ou utilisez l'application Envoyer vers Kindle d'Amazon; Amazon accepte le PDF et l'EPUB et n'accepte plus le MOBI.

## Comment convertir un PDF en EPUB sur Mac, Windows, iPhone ou Android?

**Mac.** La page fonctionne dans Safari, Chrome et Firefox. Apple Livres ouvre l'EPUB obtenu d'un double-clic. Calibre est la solution de bureau et offre beaucoup plus de réglages (traitement heuristique, CSS personnalisée, étiquettes de langue), au prix d'une installation et d'un apprentissage. Pour une conversion rapide et privée d'un PDF texte propre, cette page est plus rapide; pour une bibliothèque de centaines de livres, Calibre.

**Windows.** Même page dans Edge, Chrome ou Firefox. Windows n'a pas de lecteur EPUB intégré : installez Calibre, Thorium ou l'application Kindle pour lire le résultat. Convertir ici, puis lire dans l'application Kindle via Envoyer vers Kindle, est la façon de faire la plus courante.

**iPhone et iPad.** Safari gère la conversion; un PDF texte de 200 pages prend 30 à 90 secondes sur un iPhone récent. Touchez le fichier téléchargé dans Fichiers et choisissez Livres pour l'ouvrir. Gardez les PDF riches en images sous environ 50 Mo sur téléphone.

**Android.** Chrome convertit, et Google Play Livres, Moon+ Reader ou l'application Kobo ouvrent l'EPUB. Les téléphones de 3 Go de mémoire ou moins devraient s'en tenir aux PDF texte de moins de 50 Mo environ.

**Chromebook.** Convertit comme un ordinateur; Google Play Livres lit le résultat.

## Quand ne pas utiliser cet outil?

- **PDF numérisés sans ROC.** Pas de couche texte, donc pas de texte dans l'EPUB. Faites d'abord la reconnaissance de caractères.
- **Mises en page sur deux colonnes ou plus** en mode Reflowable. Passez en PDF Visuel.
- **Documents où les tableaux portent le sens** : états financiers, horaires, fiches techniques. Un tableau aplati est pire que pas de tableau.
- **Formulaires, feuillets et tout ce que vous devez produire.** Un Relevé 1, un T4, un bail du Tribunal administratif du logement ou un formulaire d'IRCC est un document figé : gardez-le en PDF.
- **Livres très maquettés** : livres de cuisine, beaux livres, bandes dessinées. Utilisez le mode PDF Visuel de cette page ou gardez le PDF.
- **PDF avec formulaires XFA.** Ils ne contiennent presque aucun texte de page lisible; voyez [comment modifier un PDF XFA](/fr/guides/edit-xfa-pdf) pour comprendre ce qu'ils sont.
- **Fichiers protégés par mot de passe.** Déverrouillez-les d'abord.

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| L'EPUB s'ouvre mais est presque vide | Le PDF est une numérisation; faites la ROC et reconvertissez | Le convertisseur lit la couche texte, et une numérisation n'en a pas |
| Les colonnes sont entrelacées ligne par ligne | Utilisez le mode PDF Visuel | Le texte est trié par hauteur sur toute la largeur de la page |
| De courtes phrases en gras sont devenues des titres | Acceptez-le, ou modifiez l'EPUB dans Calibre | Toute ligne surtout en gras de moins de 120 caractères est traitée comme un titre |
| Les titres de chapitres manquent | Ils se répétaient en en-tête courant sur plus de 40 % des pages et ont été retirés | Le retrait des en-têtes se fonde sur la fréquence |
| Un paragraphe est coupé en deux ou deux sont fusionnés | Attendu sur les PDF à l'espacement irrégulier | Les fins de paragraphe sont déduites des écarts entre lignes |
| Des images manquent | Les graphiques vectoriels et certains encodages ne sont pas extraits | Seules les images matricielles accessibles par les objets de la page sont copiées |
| Les liens de notes pointent vers la mauvaise note | Arrive quand deux chapitres recommencent la numérotation à 1 | Les notes sont appariées par leur numéro d'appel |
| La liseuse applique la césure anglaise à un livre en français | Changez l'étiquette de langue dans Calibre | La langue de l'EPUB est réglée sur « en » |
| Safari sur iPhone recharge la page | Utilisez un portable ou un PDF plus petit | iOS limite la mémoire d'un onglet et le réencodage des images est lourd |

## Que faire d'autre avec l'EPUB ou le PDF?

- [EPUB en PDF](/fr/epub-to-pdf) fait le chemin inverse et produit un PDF texte simple à partir d'un EPUB.
- [Extraire des pages PDF](/fr/extract-pdf-pages) permet de tester un chapitre avant de convertir tout le livre.
- [Supprimer des pages PDF](/fr/delete-pdf-pages) retire les pages liminaires, les pages blanches ou l'index avant la conversion.
- [Rogner un PDF](/fr/crop-pdf) coupe les marges fixes à la main quand vous préférez garder le PDF, mais le rendre lisible sur un petit écran.
- [Pivoter un PDF](/fr/rotate-pdf) redresse les numérisations de travers avant la ROC et la conversion.

## En résumé

Un PDF doté d'une vraie couche texte et d'une seule colonne devient ici un EPUB utilisable en moins d'une minute : les titres deviennent des chapitres, les notes deviennent des fenêtres contextuelles, les images suivent, et tout se passe dans votre navigateur sans téléversement. Les numérisations, les tableaux et les mises en page sur deux colonnes se recomposent mal; pour ceux-là, le mode PDF Visuel ou le PDF d'origine est la meilleure réponse. Essayez d'abord un court extrait, puis convertissez le livre.
