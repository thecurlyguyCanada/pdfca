---
title: "Convertir un PDF en JPG gratuitement : chaque page en image (ZIP)"
h1: "Convertir PDF en JPG"
lead: "Transformez chaque page d'un PDF en image JPG et téléchargez le tout dans un ZIP. Le rendu se fait dans votre navigateur; le PDF ne quitte jamais votre appareil."
description: "Convertissez un PDF en JPG gratuitement dans votre navigateur : chaque page devient un JPEG à 144 ppp (1224×1584 px en format Lettre), le tout dans un ZIP."
answer: "Cliquez sur Choisir un fichier, sélectionnez le PDF et cliquez sur Convertir le fichier. L'outil dessine chaque page au double de sa taille nominale, soit environ 144 ppp, l'enregistre en JPEG à la qualité 0,92 et range toutes les pages dans un ZIP qui se télécharge automatiquement. C'est gratuit, sans filigrane ni compte, et le PDF est rendu dans l'onglet de votre navigateur plutôt que téléversé quelque part."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait le rendu", "Dans l'onglet de votre navigateur : pdf.js dessine les pages et JSZip les regroupe. Rien n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Un PDF de 100 pages et 50 Mo se convertit sur un portable en une minute environ; sur un téléphone, restez sous une trentaine de pages ou divisez d'abord le PDF."]
  - ["Pages", "Toutes les pages sont converties, un JPG chacune. Il n'y a pas de sélecteur de pages; utilisez Extraire des pages PDF d'abord pour n'en convertir que certaines."]
  - ["Entrée", ".pdf (application/pdf). Les fichiers protégés par mot de passe doivent d'abord être déverrouillés."]
  - ["Sortie", "Un ZIP nommé <fichier>_images.zip contenant <fichier>_page_1.jpg, _page_2.jpg, etc., rendus à 2× (144 ppp pour une page standard), qualité JPEG 0,92. Le PDF n'est pas modifié."]
  - ["Résolution", "Fixée au double de la taille en points de la page : une page Lettre devient 1224×1584 px, une page A4 1190×1684 px."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un PDF en JPG gratuitement?"
    a: "Ouvrez l'outil PDF en JPG, cliquez sur Choisir un fichier, sélectionnez le PDF et cliquez sur Convertir le fichier. Chaque page est rendue en JPEG et l'ensemble se télécharge en un seul ZIP, en quelques secondes pour un document court. Il n'y a ni frais, ni filigrane, ni compte, et le PDF est traité dans votre navigateur."
  - q: "Quelle est la résolution des JPG?"
    a: "Chaque page est dessinée au double de sa taille nominale, ce qui donne 144 ppp pour une page standard : 1224×1584 pixels pour le format Lettre et 1190×1684 pour le A4. C'est net sur n'importe quel écran, parfait pour une diapositive ou une publication, et suffisant pour imprimer à la taille d'origine. Pour de l'impression à 300 ppp, un logiciel de bureau convient mieux."
  - q: "Puis-je convertir une seule page?"
    a: "L'outil convertit toutes les pages; pour une seule, passez d'abord par Extraire des pages PDF afin d'isoler cette page dans son propre PDF, puis convertissez-la ici. Le ZIP ne contiendra alors qu'un JPG. Vous pouvez aussi convertir tout le fichier et ne garder que la page voulue dans le ZIP."
  - q: "Pourquoi est-ce que je reçois un ZIP plutôt qu'une image?"
    a: "Parce qu'un PDF a généralement plusieurs pages et qu'un navigateur ne peut déclencher qu'un téléchargement par action, l'outil range tous les JPG dans un ZIP construit avec JSZip. Même un PDF d'une page arrive dans un ZIP contenant un seul fichier. Double-cliquez dessus sur Windows ou macOS; sur iPhone, touchez-le dans Fichiers."
  - q: "Dois-je choisir PDF en JPG ou PDF en PNG?"
    a: "JPG pour les pages contenant des photos ou des numérisations, et pour tout ce qui part par courriel, sur les réseaux sociaux ou sur un site web, parce que les fichiers sont cinq à dix fois plus légers. PNG pour les diapositives, les diagrammes, les captures d'écran et les pages où les contours du texte doivent rester parfaits ou que vous retoucherez ensuite. Les deux outils rendent à 144 ppp."
  - q: "Le texte du JPG est-il sélectionnable?"
    a: "Non. Un JPG est une image de la page : le texte devient des pixels et ne peut être ni sélectionné, ni cherché, ni copié. Pour un texte modifiable, utilisez plutôt PDF en Word. La conversion en JPG est le bon choix quand vous voulez que la page ait la même apparence partout et ne soit pas modifiée."
  - q: "Mon PDF est-il téléversé quelque part?"
    a: "Non. pdf.js, le moteur que Firefox utilise pour afficher les PDF, tourne dans l'onglet de votre navigateur, dessine chaque page sur un canevas invisible, et ce canevas est enregistré en JPEG en mémoire. Vous pouvez observer l'onglet Réseau des outils de développement pendant une conversion et constater qu'aucune requête ne transporte le fichier."
  - q: "Quelle taille feront les JPG?"
    a: "À 144 ppp et qualité 0,92, une page Lettre de texte seul fait environ 150 à 400 Ko, une page avec graphiques 300 à 700 Ko, et une page numérisée ou photo 600 Ko à 1,5 Mo. Un rapport texte de 20 pages donne un ZIP d'environ 4 à 8 Mo. Le ZIP lui-même n'ajoute presque rien, les JPEG ne se compressant pas davantage."
---
## Comment convertir un PDF en JPG gratuitement?

Vous voulez des pages sous forme d'images : publier une page de rapport sur LinkedIn, glisser un formulaire dans PowerPoint, envoyer une page à quelqu'un qui n'ouvre pas les PDF, ou téléverser un seul feuillet sur un portail qui exige une image. L'outil rend chaque page et vous remet un ZIP. Quatre étapes.

### Étape 1 : Sélectionnez le PDF

Cliquez sur **Choisir un fichier** ou glissez le PDF dans la zone de dépôt. L'outil lit le fichier et affiche le nombre de pages. Si le PDF demande un mot de passe à l'ouverture, arrêtez-vous ici : le moteur de rendu ne peut pas dessiner des pages chiffrées. Retirez le mot de passe dans l'application qui a créé le fichier, ou réenregistrez-le depuis une visionneuse de bureau, puis revenez.

### Étape 2 : Décidez si vous avez besoin de toutes les pages

Il n'y a pas de sélecteur de pages : tout est converti. Pour une seule page d'un manuel de 300 pages, passez d'abord le PDF dans [Extraire des pages PDF](/fr/extract-pdf-pages) et convertissez le résultat d'une page. Pour 5 à 50 pages, convertissez tout et supprimez le surplus dans le ZIP; c'est plus rapide.

C'est l'étape que les gens sautent, avant d'attendre deux minutes pour 200 pages dont ils ne voulaient pas.

### Étape 3 : Cliquez sur Convertir le fichier

Appuyez sur **Convertir le fichier**. pdf.js ouvre le document, dessine chaque page sur un canevas au double de sa taille en points et enregistre le canevas en JPEG à la qualité 0,92. Une page de texte prend 0,2 à 0,5 seconde sur un portable; une page avec une photo pleine page, environ une seconde. L'indicateur de progression tourne pendant tout ce temps.

### Étape 4 : Ouvrez le ZIP

Le téléchargement est un seul fichier, `<nom>_images.zip`, contenant `<nom>_page_1.jpg`, `<nom>_page_2.jpg` et ainsi de suite, numérotés dans l'ordre des pages. Windows et macOS ouvrent les ZIP d'un double-clic; sur iPhone, touchez-le dans Fichiers → Téléchargements et iOS le décompresse dans un dossier. Appuyez sur **Process Another** pour le PDF suivant.

> **Astuce :** Les noms des JPG ne se trient correctement que jusqu'à la page 9 dans certains gestionnaires de fichiers (page_10 passe avant page_2). Triez par date de modification, ou renommez en lot si l'ordre compte pour un téléversement.

## Que devient mon PDF quand je le convertis?

Le moteur de rendu est pdf.js, la bibliothèque libre que Mozilla a conçue pour afficher les PDF dans Firefox. Cette page la charge dans votre onglet. Quand vous choisissez un fichier, l'API File du navigateur lit le PDF en mémoire; pdf.js l'analyse et, pour chaque page, dessine le contenu sur un canevas HTML hors écran, comme une visionneuse le ferait à l'écran. Le canevas est exporté en JPEG, le JPEG est ajouté à un ZIP que JSZip assemble en mémoire, et le ZIP terminé est offert en téléchargement par un Blob.

Chaque étape est locale. Pour le constater, ouvrez les outils de développement de votre navigateur, l'onglet Réseau, et convertissez. Les scripts de la page et une requête anonyme de consultation se chargent; aucune requête ne transporte le PDF ni les images.

Ça compte pour ce que les gens transforment en images : une page d'avis de cotisation pour prouver ses revenus à un propriétaire, une page de bail, une ordonnance pour une pharmacie qui n'accepte que des photos, un formulaire de consentement signé pour l'école. Le document est dessiné sur votre appareil et les images y sont construites; fermez l'onglet et il ne reste rien.

## Quelle résolution et quelle taille auront les JPG?

L'outil rend à une échelle fixe de 2× : chaque point PDF devient deux pixels. Les pages PDF se mesurent à 72 points par pouce, donc 2× équivaut à 144 pixels par pouce. Il n'y a pas de sélecteur de ppp; la valeur a été choisie comme le point où le texte est net sur tous les écrans, y compris un téléphone tenu près des yeux, tout en gardant une page sous un mégaoctet.

| Page | Points | Pixels JPG à 2× (144 ppp) | Page de texte | Page de graphique ou diapositive | Page numérisée ou photo |
|---|---|---|---|---|---|
| Lettre (8,5×11 po) | 612×792 | 1224×1584 | 150 à 400 Ko | 300 à 700 Ko | 600 Ko à 1,5 Mo |
| A4 | 595×842 | 1190×1684 | 150 à 400 Ko | 300 à 700 Ko | 600 Ko à 1,5 Mo |
| Légal (8,5×14 po) | 612×1008 | 1224×2016 | 200 à 500 Ko | 400 à 900 Ko | 800 Ko à 2 Mo |
| Diapositive 16:9 (13,33×7,5 po) | 960×540 | 1920×1080 | 100 à 300 Ko | 250 à 600 Ko | 500 Ko à 1,2 Mo |
| Tabloïd (11×17 po) | 792×1224 | 1584×2448 | 300 à 700 Ko | 600 Ko à 1,2 Mo | 1,2 à 2,5 Mo |

Comment 144 ppp se compare aux options habituelles :

- **72 ppp (1×)**, c'est ce qu'une visionneuse dessine à 100 % sur un vieux moniteur. Le texte paraît flou sur un téléphone et pixélisé au zoom. Trop peu pour autre chose qu'une vignette.
- **144 ppp (2×, cet outil)** correspond exactement à un écran Retina ou à un téléphone haute densité. Publications sur les réseaux sociaux, diapositives, insertions dans Word et PowerPoint, aperçus de courriel et la plupart des téléversements sur des portails sont bien servis. Imprimé à la taille d'origine, c'est acceptable; les notes de bas de page en 8 points sont lisibles sans être parfaitement nettes.
- **300 ppp** est la norme d'impression. Une page Lettre devient 2550×3300 pixels et 1 à 4 Mo en JPEG. Si vous envoyez des pages à un imprimeur, faites le rendu à 300 ppp depuis un logiciel de bureau.

La qualité JPEG 0,92 se situe près du haut de l'échelle : les artefacts de compression sont invisibles sur les photos et à peine décelables sur du texte noir net à 200 % de zoom. S'il vous faut un texte parfait au pixel près ou de la transparence, utilisez [PDF en PNG](/fr/pdf-to-png), qui rend les mêmes pages sans perte à la même taille; les fichiers sont deux à cinq fois plus gros.

Estimation pour un document complet : un rapport texte de 20 pages donne un ZIP de 4 à 8 Mo; un contrat numérisé de 20 pages, 12 à 30 Mo; une présentation de 40 diapositives, 10 à 25 Mo.

> **Astuce :** Le rendu aplatit tout. Champs de formulaire, commentaires, tampons et signatures sont figés dans l'image exactement comme ils apparaissent à l'écran, ce qui fait de PDF en JPG un moyen rapide de produire une copie non modifiable d'un formulaire rempli.

## Comment convertir un PDF en JPG sur iPhone, Android, Mac ou Windows?

**iPhone et iPad.** Ouvrez l'outil dans Safari, touchez **Choisir un fichier** et choisissez le PDF dans Fichiers. Le ZIP s'enregistre dans Fichiers → Téléchargements; touchez-le une fois et iOS extrait un dossier de JPG que vous pouvez enregistrer dans Photos. iOS n'a pas d'exportation intégrée de PDF en image, mais une capture d'écran d'une page dans Livres ou Fichiers dépanne pour une fois, à la résolution de l'écran. Restez sous une trentaine de pages sur un téléphone; chaque page rendue occupe brièvement 6 à 8 Mo de mémoire de canevas.

**Android.** Le sélecteur de Chrome ouvre Fichiers; le ZIP va dans Téléchargements et l'application Fichiers l'extrait. Les téléphones de 3 à 4 Go de mémoire traitent 30 à 50 pages sans difficulté.

**Mac.** Aperçu peut exporter un PDF en JPEG avec Fichier → Exporter → Format : JPEG, mais une page à la fois; il n'exporte que la page affichée. Pour une seule page, Aperçu est le plus rapide et permet de régler les ppp. Pour un document entier, cet outil est bien plus rapide.

**Windows.** Il n'y a pas d'exportation intégrée de PDF en JPG. L'Outil Capture d'écran saisit une page à la résolution de l'écran, ce qui suffit pour un partage rapide. Pour un document complet à 144 ppp constants, utilisez cette page.

**Chromebook.** Comme sur Chrome de bureau. L'application Fichiers ouvre les ZIP nativement.

## Quand ne faut-il pas utiliser cet outil?

- **Il vous faut un texte modifiable.** Un JPG, ce sont des pixels. Utilisez [PDF en Word](/fr/pdf-to-word) pour obtenir un texte que vous pouvez changer, ou copiez le texte directement dans le PDF.
- **Il vous faut 300 ppp pour l'impression commerciale.** Les 144 ppp fixes sont conçus pour les écrans. Faites le rendu dans Acrobat, Affinity ou un outil en ligne de commande pour la presse.
- **Vous voulez extraire les photos d'origine intégrées** à leur résolution native. Cet outil dessine la page, pas la photo qu'elle contient; une photo de 20 mégapixels placée sur une page Lettre ressort à 1224×1584. Les logiciels de bureau peuvent extraire l'objet image d'origine.
- **Le PDF est chiffré.** Retirez d'abord le mot de passe d'ouverture dans une visionneuse de bureau; le moteur ne peut pas dessiner des pages qu'il ne peut pas lire.
- **Vous avez 500 pages sur un téléphone.** La mémoire et le temps deviennent tous deux un problème. Utilisez un portable, ou divisez le fichier avec [Diviser PDF](/fr/split-pdf) et convertissez par sections.
- **Il vous faut de la transparence ou un détail sans perte.** Le JPEG n'offre ni l'un ni l'autre. Utilisez [PDF en PNG](/fr/pdf-to-png).

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Le téléchargement est un ZIP, pas une image | Ouvrez le ZIP; les JPG sont dedans, un par page | Un navigateur ne peut déclencher qu'un téléchargement par clic, alors les pages sont regroupées |
| Le texte du JPG paraît flou à l'impression | Imprimez à la taille d'origine, pas agrandi; pour une qualité d'impression, faites le rendu à 300 ppp dans un logiciel de bureau | Les 144 ppp sont réglés pour les écrans |
| Convertir le fichier échoue sur un PDF protégé | Retirez le mot de passe d'ouverture dans une visionneuse de bureau, puis convertissez | pdf.js ne peut pas rendre des pages chiffrées sans le mot de passe |
| Des pages sont vides ou il manque du contenu | Vérifiez si le PDF utilise des formulaires XFA; imprimez-le d'abord en PDF standard | Les couches de formulaire XFA ne sont pas dessinées par le moteur de rendu |
| Safari recharge l'onglet sur un long PDF | Divisez le PDF en parties de 20 à 30 pages et convertissez chacune | iOS limite la mémoire des onglets, et chaque page exige quelques Mo de canevas pendant le rendu |
| Les pages se trient dans le mauvais ordre sur mon ordinateur | Triez par date de modification ou renommez page_1 en page_01 | Le tri alphabétique place page_10 avant page_2 |
| Les couleurs paraissent un peu plus ternes que dans le PDF | Normal pour les PDF d'impression riches en CMJN | Le rendu sur canevas convertit les couleurs en RVB d'écran |

## Que faire d'autre avec un PDF ou ses pages?

- [PDF en PNG](/fr/pdf-to-png) pour des images de pages sans perte au texte net, mieux adaptées aux diapositives et aux diagrammes.
- [Extraire des pages PDF](/fr/extract-pdf-pages) pour ne retirer que les pages voulues avant de convertir.
- [Diviser PDF](/fr/split-pdf) pour couper un long fichier en parties qu'un téléphone peut traiter.
- [JPG en PDF](/fr/jpg-to-pdf) pour faire l'inverse et renvelopper des images dans un PDF.
- [Compresser PDF](/fr/compress-pdf) quand vous voulez un PDF plus léger plutôt que des images.

## En résumé

PDF en JPG est un travail de rendu : dessiner chaque page, enregistrer l'image. Cet outil le fait dans votre navigateur avec pdf.js à 144 ppp et une qualité JPEG de 0,92, range toutes les pages dans un ZIP et ne téléverse jamais le fichier. Pour un rapport de 20 pages, comptez 4 à 8 Mo, 1224×1584 pixels par page, en moins de 20 secondes sur un portable. Tournez-vous vers PDF en PNG quand les contours du texte ou la transparence comptent, vers Extraire des pages PDF quand une seule page vous intéresse, et vers un logiciel de bureau seulement quand un imprimeur réclame 300 ppp.
