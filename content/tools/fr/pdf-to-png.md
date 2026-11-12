---
title: "Convertir un PDF en PNG gratuitement : pages sans perte à 144 ppp"
h1: "Convertir PDF en PNG"
lead: "Rendez chaque page d'un PDF en PNG sans perte et téléchargez l'ensemble dans un ZIP. Les pages sont dessinées dans votre navigateur; le fichier reste sur votre appareil."
description: "Convertissez un PDF en PNG gratuitement dans votre navigateur : chaque page est rendue sans perte à 144 ppp (1224×1584 px en format Lettre) et mise dans un ZIP."
answer: "Cliquez sur Choisir un fichier, sélectionnez le PDF et cliquez sur Convertir le fichier. Chaque page est dessinée au double de sa taille nominale, soit environ 144 ppp, et enregistrée en PNG sans perte, de sorte que les contours du texte, les traits fins et les aplats de couleur restent parfaitement nets. Toutes les pages se téléchargent ensemble dans un ZIP. C'est gratuit, sans filigrane ni compte, et le rendu se fait dans l'onglet de votre navigateur; rien n'est téléversé."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait le rendu", "Dans l'onglet de votre navigateur : pdf.js dessine les pages et JSZip les regroupe. Rien n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Une présentation de 60 diapositives se convertit sur un portable en moins d'une minute; sur un téléphone, restez sous une vingtaine de pages, car les PNG sont plus lourds que les JPG et le ZIP est tenu en mémoire."]
  - ["Pages", "Toutes les pages sont converties, un PNG chacune. Utilisez Extraire des pages PDF d'abord pour n'en convertir qu'une partie."]
  - ["Entrée", ".pdf (application/pdf). Les fichiers chiffrés doivent d'abord être libérés de leur mot de passe."]
  - ["Sortie", "Un ZIP nommé <fichier>_images.zip avec <fichier>_page_1.png, _page_2.png, etc., rendus à 2× (144 ppp pour une page standard), sans perte, fond blanc. Le PDF n'est pas modifié."]
  - ["Résolution", "Fixée au double de la taille en points de la page : Lettre devient 1224×1584 px, A4 1190×1684 px, une diapositive 16:9 1920×1080 px."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un PDF en PNG gratuitement?"
    a: "Ouvrez l'outil PDF en PNG, cliquez sur Choisir un fichier, sélectionnez le PDF et cliquez sur Convertir le fichier. Chaque page est rendue en PNG sans perte et l'ensemble se télécharge en un seul ZIP. Il n'y a ni frais, ni filigrane, ni compte, et le rendu tourne dans votre navigateur plutôt que sur un serveur."
  - q: "La conversion PDF en PNG est-elle sans perte?"
    a: "L'encodage PNG est sans perte : ce qui est dessiné sur le canevas est stocké pixel pour pixel, sans les artefacts de type JPEG autour du texte et des traits. Le rendu lui-même est une rastérisation à 144 ppp, donc les formes vectorielles et les polices sont échantillonnées en pixels à cette résolution. Au-delà de 100 % de zoom, vous voyez des pixels, pas du flou."
  - q: "Le PNG aura-t-il un fond transparent?"
    a: "Non. Le moteur peint la page en blanc avant de dessiner, comme le fait une visionneuse PDF, donc chaque PNG a un fond blanc opaque même là où la page PDF n'avait aucun remplissage. S'il vous faut un logo ou un diagramme détouré, retirez le blanc dans un éditeur d'images ensuite, ou exportez le graphique depuis son application d'origine."
  - q: "Quelle est la résolution des PNG?"
    a: "Le double des dimensions en points de la page, soit 144 pixels par pouce : 1224×1584 pour le format Lettre, 1190×1684 pour le A4, 1920×1080 pour une diapositive 16:9. C'est exactement la densité d'un écran de téléphone ou d'un Retina, donc les diapositives et les diagrammes paraissent natifs une fois insérés dans un document ou publiés en ligne."
  - q: "PDF en PNG ou PDF en JPG, lequel choisir?"
    a: "PNG pour les diapositives, diagrammes, organigrammes, tableaux, captures d'écran et toute page où un texte net et des traits propres comptent, ou que vous retoucherez. JPG pour les pages numérisées et les pages riches en photos, où les PNG gonflent à 3 à 6 Mo par page sans gain visible. Les deux outils rendent à 144 ppp."
  - q: "Quelle taille feront les fichiers PNG?"
    a: "Une page Lettre de texte seul fait environ 300 Ko à 1 Mo, une diapositive avec graphiques 400 Ko à 2 Mo, et une page numérisée ou photographique 2 à 6 Mo. Une présentation de 30 diapositives donne un ZIP d'environ 15 à 40 Mo. Si c'est trop, PDF en JPG produit les mêmes pages au cinquième de la taille."
  - q: "Puis-je convertir une seule page?"
    a: "Passez d'abord le PDF dans Extraire des pages PDF pour isoler la page, puis convertissez ici le résultat d'une page; le ZIP contiendra un seul PNG. Pour quelques pages sur cinquante, il est souvent plus rapide de tout convertir et de garder ce qu'il vous faut."
  - q: "Le PDF est-il téléversé sur un serveur?"
    a: "Non. pdf.js, le moteur de rendu intégré à Firefox, tourne dans l'onglet de votre navigateur, dessine chaque page sur un canevas hors écran et l'exporte en PNG en mémoire; JSZip construit ensuite le ZIP en mémoire. Ouvrez l'onglet Réseau des outils de développement pendant une conversion et vous ne verrez aucune requête transportant le fichier."
---
## Comment convertir un PDF en PNG gratuitement?

Le PNG est le format des pages faites surtout de traits, de texte et d'aplats : présentations, plans d'architecture, organigrammes, tableaux, maquettes, formulaires. Il les stocke sans le flou que le JPEG introduit, et c'est ce que Word, PowerPoint, Google Docs, Notion et tous les systèmes de gestion de contenu attendent quand vous collez une image. Quatre étapes.

### Étape 1 : Sélectionnez le PDF

Cliquez sur **Choisir un fichier** ou glissez le PDF dans la zone de dépôt. L'outil lit le fichier et affiche le nombre de pages. Un PDF qui demande un mot de passe à l'ouverture doit d'abord en être libéré dans l'application qui l'a créé ou dans une visionneuse de bureau; le moteur ne peut pas dessiner ce qu'il ne peut pas ouvrir.

### Étape 2 : Allégez le document si vous n'avez besoin que de certaines pages

Toutes les pages sont converties; il n'y a pas de liste à cocher. Pour trois diapositives sur soixante, sortez-les avec [Extraire des pages PDF](/fr/extract-pdf-pages) et convertissez ce court PDF. Les PNG sont lourds : convertir soixante pages inutiles, c'est un ZIP de 40 Mo et une minute d'attente pour rien.

### Étape 3 : Cliquez sur Convertir le fichier

Appuyez sur **Convertir le fichier**. pdf.js dessine chaque page sur un canevas au double de sa taille en points, sur fond blanc, et le canevas est exporté en PNG. Le rendu est rapide, 0,2 à 0,5 seconde par page sur un portable; l'encodage PNG ajoute un peu plus que le JPEG parce que chaque pixel est conservé. Une présentation de 20 diapositives se termine en 10 à 20 secondes.

### Étape 4 : Téléchargez le ZIP

Un seul fichier arrive, `<nom>_images.zip`, contenant `<nom>_page_1.png`, `<nom>_page_2.png` et ainsi de suite dans l'ordre des pages. Double-cliquez pour l'ouvrir sur Windows ou macOS; sur iPhone, touchez-le dans Fichiers → Téléchargements et iOS le décompresse. Appuyez sur **Process Another** pour un autre PDF.

> **Astuce :** Quand vous collez une diapositive convertie dans PowerPoint ou Google Slides, réglez sa largeur sur celle de la diapositive et elle tombe pile : une diapositive 16:9 rendue ici fait 1920×1080, le même rapport que la diapositive dans laquelle vous la collez.

## Que devient mon PDF quand je le convertis?

La page utilise pdf.js, le moteur de rendu PDF libre de Mozilla, chargé dans votre onglet. Votre fichier est lu en mémoire par l'API File du navigateur. Pour chaque page, pdf.js analyse le flux de contenu et le dessine sur un canevas HTML jamais affiché, exactement comme Firefox le dessinerait dans sa visionneuse. Le canevas est exporté en PNG avec l'encodeur du navigateur, chaque PNG est ajouté à un ZIP que JSZip assemble en mémoire, et le ZIP terminé est remis au navigateur sous forme de Blob à télécharger.

Rien dans cette chaîne ne parle à un serveur. Ouvrez les outils de développement, choisissez l'onglet Réseau et convertissez un fichier : les scripts de la page et une requête anonyme de consultation se chargent, et aucune requête ne transporte le PDF ni une image de page.

Les diagrammes et les présentations sont souvent les documents les moins publics qu'une personne possède : un argumentaire avant financement, des plans soumis pour un permis municipal, l'organigramme d'un processus interne, la figure d'un laboratoire avant publication. Ils sont rendus sur votre appareil, gardés dans votre onglet, et disparaissent quand vous le fermez.

## Le texte restera-t-il net, et le fond sera-t-il transparent?

**Net : oui.** Le PNG stocke chaque pixel exactement tel qu'il a été rendu. Le JPEG, lui, découpe l'image en blocs de 8×8 et jette les détails fins de chacun, ce qui donne au texte noir sur blanc un léger halo gris et adoucit les traits fins. Rien de cela ici : un filet d'un pixel reste d'un pixel, une étiquette en 9 points reste lisible, et une barre bleue unie reste d'un seul bleu.

**Transparent : non.** Le moteur remplit la page de blanc avant de dessiner, exactement comme une visionneuse PDF. Le PNG est opaque. Une page PDF n'a pas de notion de fond transparent à préserver, donc un « PDF en PNG transparent » est en réalité une demande de détourage d'un graphique dans une page, ce qui est une étape de retouche après la conversion.

Ce que vous échangez contre la netteté, c'est la taille, et l'écart dépend entièrement de ce qu'il y a sur la page :

| Contenu de la page | Pixels à 144 ppp | Taille PNG | Même page en JPG (qualité 0,92) | Meilleur choix |
|---|---|---|---|---|
| Page Lettre de texte seul | 1224×1584 | 300 Ko à 1 Mo | 150 à 400 Ko | PNG si le texte doit être parfait; JPG pour la masse |
| Diapositive avec graphique et titre (16:9) | 1920×1080 | 400 Ko à 2 Mo | 250 à 600 Ko | PNG |
| Organigramme ou schéma électrique | 1224×1584 | 200 Ko à 1,2 Mo | 300 à 700 Ko | PNG, souvent plus léger aussi |
| Tableau de chiffres | 1224×1584 | 250 à 900 Ko | 300 à 600 Ko | PNG |
| Lettre numérisée | 1224×1584 | 2 à 4 Mo | 400 à 900 Ko | JPG |
| Photo pleine page | 1224×1584 | 3 à 6 Mo | 600 Ko à 1,5 Mo | JPG |

Les aplats et les bords nets se compressent très bien en PNG, parfois mieux qu'en JPEG. Le bruit, non : une numérisation porte la texture du papier dans chaque pixel, et le PNG la garde fidèlement. Toute la décision tient en une ligne : PNG pour ce qui a été dessiné, JPG pour ce qui a été photographié. Les mêmes pages aux mêmes 144 ppp sont offertes par [PDF en JPG](/fr/pdf-to-jpg).

Côté résolution, le 2× a été choisi parce que c'est la densité de pixels des écrans modernes. Une page rendue à 144 ppp insérée dans un document à sa taille physique paraît native sur un MacBook Retina, un iPad et un moniteur 4K. Pour l'impression, 144 ppp est acceptable à la taille d'origine et visiblement flou une fois agrandi; la presse réclame 300 ppp depuis un logiciel de bureau.

> **Astuce :** Le rendu fige tout ce qui est visible, y compris les champs de formulaire remplis, les tampons et les signatures. S'il vous faut un formulaire non modifiable mais toujours en PDF, repassez les PNG dans JPG en PDF; si une image suffit, vous avez déjà terminé.

## Comment convertir un PDF en PNG sur Mac, Windows, iPhone ou Android?

**Mac.** Aperçu peut exporter la page affichée en PNG avec Fichier → Exporter → Format : PNG et permet de choisir la résolution, mais une page à la fois. Pour un seul diagramme à 300 ppp, Aperçu est le meilleur outil. Pour toutes les diapositives d'une présentation, cette page est largement plus rapide.

**Windows.** Il n'y a pas d'exportation intégrée de PDF en PNG. L'Outil Capture d'écran saisit une page à la résolution de l'écran, généralement 96 ppp et recadrée à la main; ça suffit pour coller vite dans Teams, pas pour un document. Cet outil rend chaque page à 144 ppp constants avec des bords exacts.

**iPhone et iPad.** Ouvrez l'outil dans Safari, touchez **Choisir un fichier** et choisissez le PDF dans Fichiers. Le ZIP s'enregistre dans Fichiers → Téléchargements; touchez-le et iOS extrait un dossier de PNG que vous pouvez enregistrer dans Photos ou glisser dans Keynote. Restez sous une vingtaine de pages sur un téléphone : chaque PNG est gardé en mémoire jusqu'à ce que le ZIP soit construit, et 20 PNG de diapositives font 10 à 30 Mo.

**Android.** Le sélecteur de Chrome ouvre Fichiers; le ZIP atterrit dans Téléchargements et l'application Fichiers l'extrait. Les téléphones de 4 Go de mémoire ou plus traitent 30 à 40 pages.

**Chromebook.** Comme sur Chrome de bureau. Fichiers ouvre les ZIP nativement, et les PNG se collent directement dans Google Slides.

## Quand ne faut-il pas utiliser cet outil?

- **Le PDF est numérisé ou photographique.** Le PNG vous donnera 2 à 6 Mo par page sans avantage visible. Utilisez [PDF en JPG](/fr/pdf-to-jpg).
- **Il vous faut un fond transparent.** La sortie est d'un blanc opaque. Exportez le graphique depuis l'application qui l'a créé, ou détourez-le ensuite.
- **Il vous faut du vectoriel.** Le PNG, ce sont des pixels. Si un graphiste veut le logo ou le graphique en forme redimensionnable, envoyez le PDF lui-même; la plupart des logiciels de conception ouvrent les PDF en vecteurs.
- **Il vous faut un texte ou des tableaux modifiables.** Utilisez plutôt [PDF en Word](/fr/pdf-to-word) ou [PDF en Excel](/fr/pdf-to-excel); un PNG de tableau est une image de chiffres.
- **Le fichier est chiffré.** Retirez d'abord le mot de passe d'ouverture dans une visionneuse de bureau.
- **Vous avez 200 pages sur un téléphone.** Le ZIP est assemblé en mémoire et les PNG sont lourds. Utilisez un portable, ou divisez le document avec [Diviser PDF](/fr/split-pdf) et convertissez 20 pages à la fois.
- **Il vous faut 300 ppp pour l'impression.** Faites le rendu dans Acrobat, Affinity ou un outil en ligne de commande avec un réglage de ppp.

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Le fond est blanc, je m'attendais à du transparent | Retirez le blanc dans un éditeur d'images, ou exportez depuis l'application d'origine | Le moteur peint la page en blanc avant de dessiner, comme les visionneuses |
| Le ZIP fait 60 Mo pour un fichier de 15 pages | Les pages sont des numérisations ou des photos; utilisez plutôt PDF en JPG | Le PNG garde chaque pixel de texture de papier et de bruit photo |
| Convertir le fichier ne fait rien sur un PDF protégé | Retirez le mot de passe d'ouverture dans une visionneuse de bureau, puis convertissez | pdf.js ne peut pas rendre des pages chiffrées |
| Les traits fins d'un diagramme paraissent un peu plus épais ou plus minces que dans le PDF | Normal à 144 ppp; pour l'impression, faites le rendu à 300 ppp dans un logiciel de bureau | Les filets sont arrondis au pixel entier lors de la rastérisation |
| Des pages sont vides ou un formulaire est vide | Vérifiez s'il s'agit de formulaires XFA; imprimez d'abord le PDF en PDF standard | Les couches de formulaire XFA ne sont pas dessinées par le moteur |
| Safari sur iPhone recharge pendant la conversion | Divisez le PDF en parties de 15 à 20 pages | iOS limite la mémoire des onglets et chaque PNG est gardé jusqu'à la fin du ZIP |
| page_10.png se trie avant page_2.png | Triez par date de modification, ou renommez avec des numéros à deux chiffres | Le tri alphabétique ne comprend pas les nombres |

## Que faire d'autre avec un PDF ou ses pages?

- [PDF en JPG](/fr/pdf-to-jpg) pour les mêmes pages en JPEG plus légers, le bon choix pour les numérisations et les photos.
- [Extraire des pages PDF](/fr/extract-pdf-pages) pour ne convertir que les pages voulues.
- [Diviser PDF](/fr/split-pdf) pour couper une longue présentation en parties qu'un téléphone peut traiter.
- [PDF en PPT](/fr/pdf-to-ppt) si le but est de ramener les diapositives dans PowerPoint plutôt qu'en images.
- [JPG en PDF](/fr/jpg-to-pdf) pour renvelopper des images, y compris ces PNG, dans un PDF.

## En résumé

PDF en PNG sert aux pages dessinées plutôt que photographiées : diapositives, diagrammes, tableaux, formulaires. Cet outil rend chacune sans perte à 144 ppp dans votre navigateur avec pdf.js, 1224×1584 pixels pour une page Lettre ou 1920×1080 pour une diapositive, et regroupe l'ensemble dans un ZIP sans rien téléverser. Le fond est blanc, pas transparent, et les fichiers font 300 Ko à 2 Mo par page pour du contenu dessiné. Pour les numérisations et les photos, passez à PDF en JPG; pour une seule page à 300 ppp, Aperçu sur Mac est le chemin le plus court.
