---
title: "Convertir un PDF en PowerPoint gratuitement : une diapositive par page"
h1: "Convertir PDF en PowerPoint"
lead: "Transformez un PDF en fichier .pptx, une diapositive par page, pour le présenter dans PowerPoint, Keynote ou Google Slides. Tout se passe dans votre navigateur."
description: "Convertissez un PDF en PowerPoint .pptx gratuitement dans votre navigateur : chaque page devient une diapositive sous forme d'image nette. Rien n'est téléversé."
answer: "Choisissez le PDF, cliquez sur Convertir le fichier, et un .pptx se télécharge avec une diapositive par page. Chaque diapositive contient une image haute résolution de la page, pas de zones de texte modifiables : l'outil sert à présenter un PDF, pas à le réécrire. C'est gratuit, sans compte ni filigrane, et le rendu se fait dans l'onglet de votre navigateur plutôt que sur un serveur."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans limite de conversions"]
  - ["Où se fait la conversion", "Dans l'onglet de votre navigateur : pdf.js dessine chaque page, JSZip assemble le .pptx. Aucun fichier n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Le résultat est plus lourd que la source, car chaque page devient un PNG : un PDF texte de 40 pages et 2 Mo donne une présentation de 10 à 25 Mo. Restez sous 60 pages environ sur un téléphone."]
  - ["Pages", "Toutes les pages sont converties, une diapositive chacune. Il n'y a pas de sélecteur de pages : extrayez d'abord celles qui vous intéressent."]
  - ["Entrée", ".pdf seulement. Les PDF protégés par mot de passe doivent d'abord être déverrouillés."]
  - ["Sortie", "Un .pptx (PowerPoint 2007 et plus, Keynote, Google Slides, LibreOffice). Diapositives 4:3 remplies chacune par un PNG rendu à l'échelle 2×. Le texte n'est pas modifiable. Votre PDF n'est pas modifié."]
  - ["Ce qui reste sur votre appareil", "Le PDF, les images des pages et la présentation finie. Le site n'enregistre qu'une page vue anonyme."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page et le moteur PDF chargés."]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un PDF en PowerPoint gratuitement?"
    a: "Ouvrez l'outil, choisissez le PDF avec Choisir un fichier ou glissez-le dans la zone, puis cliquez sur Convertir le fichier. Un .pptx avec une diapositive par page se télécharge en quelques secondes. Aucun compte, aucun filigrane, et les pages sont rendues dans votre propre navigateur plutôt qu'envoyées à un serveur."
  - q: "Puis-je modifier le texte après la conversion?"
    a: "Non. Chaque diapositive contient une seule image de la page PDF; les mots sont des pixels, pas des zones de texte. Vous pouvez ajouter des zones de texte, des flèches et des notes par-dessus, réordonner ou supprimer des diapositives, mais pas retaper une phrase. Pour obtenir du texte modifiable, passez par PDF en Word et copiez à partir de là."
  - q: "Pourquoi mes diapositives sont-elles écrasées ou étirées?"
    a: "L'outil crée des diapositives 4:3 (10 po sur 7,5 po) et étire l'image de chaque page pour remplir la diapositive. Un PDF exporté d'une présentation 4:3 tombe pile; une page lettre en portrait ou une présentation 16:9 est déformée. Dans PowerPoint, sélectionnez l'image et utilisez Rétablir l'image et la taille, puis redimensionnez-la par une poignée de coin."
  - q: "L'outil fonctionne-t-il avec un PDF numérisé?"
    a: "Oui, et le résultat est le même que pour tout autre PDF : une image de chaque page numérisée sur sa propre diapositive. Comme une numérisation est déjà une image, rien ne se perd au passage, sauf l'échelle de rendu fixe de 2×."
  - q: "Puis-je convertir seulement certaines pages?"
    a: "Pas dans cet outil, qui convertit tout le document. Passez d'abord le PDF dans Extraire des pages PDF ou Diviser un PDF, puis convertissez le fichier raccourci. Vous pouvez aussi tout convertir et supprimer les diapositives en trop dans PowerPoint."
  - q: "Le .pptx s'ouvrira-t-il dans Google Slides et Keynote?"
    a: "Oui. Le fichier est un paquet Office Open XML standard avec une image par diapositive et une mise en page vide, que toutes les applications de présentation récentes lisent. Téléversez-le dans Google Drive et ouvrez-le avec Slides, ou double-cliquez dessus sur un Mac pour l'ouvrir dans Keynote."
  - q: "Pourquoi le PowerPoint est-il tellement plus lourd que le PDF?"
    a: "Un PDF stocke le texte sous forme d'instructions de police compactes; la présentation stocke chaque page comme un PNG sans perte d'environ 1 224 sur 1 584 pixels. Une page texte qui pesait 40 Ko dans le PDF devient 200 à 600 Ko en image. Compressez les images dans PowerPoint (Fichier → Compresser les images) si la présentation doit partir par courriel."
  - q: "Est-ce sécuritaire de convertir un PDF confidentiel ici?"
    a: "Le PDF est lu dans la mémoire de votre navigateur, rendu en images sur place et empaqueté dans le .pptx sur place. Aucune requête ne transporte le document vers un serveur, ce que vous pouvez vérifier dans le panneau Réseau des outils de développement. Fermez l'onglet et la mémoire est libérée."
---
## Comment convertir un PDF en PowerPoint gratuitement?

Un téléversement local et un clic. Avant de commencer, sachez ce que vous obtiendrez : une présentation faite d'images, une par page, que vous pouvez projeter et annoter, mais pas retaper.

### Étape 1 : choisir le PDF

Cliquez sur **Choisir un fichier** ou glissez le PDF dans la zone de dépôt. Le fichier est lu en mémoire; aucune diapositive n'est construite avant que vous appuyiez sur le bouton.

### Étape 2 : raccourcir le PDF si vous n'en voulez qu'une partie

L'outil convertit toutes les pages. Un rapport annuel de 120 pages donne 120 diapositives et un fichier très lourd. Si vous avez besoin des dix pages avec les graphiques, passez d'abord le fichier dans [Extraire des pages PDF](/fr/extract-pdf-pages). C'est l'étape que la plupart des gens sautent, avant de le regretter en ouvrant un .pptx de 60 Mo.

### Étape 3 : cliquer sur Convertir le fichier

Appuyez sur **Convertir le fichier**. Le moteur dessine la page 1 au double de sa taille nominale sur un canevas invisible, l'enregistre en PNG, place ce PNG sur une diapositive vide, puis recommence pour chaque page. Sur un portable, un PDF texte de 20 pages prend 3 à 6 secondes; une numérisation de 20 pages pleines d'images prend 10 à 20 secondes.

### Étape 4 : ouvrir la présentation et corriger les proportions au besoin

Le .pptx se télécharge sous le même nom que votre PDF. Ouvrez-le dans PowerPoint, Keynote ou Google Slides. Les diapositives sont en 4:3 et l'image de la page est étirée pour les remplir, de sorte qu'une page en portrait paraît comprimée. Sélectionnez l'image, choisissez **Rétablir l'image et la taille** (PowerPoint) ou tirez une poignée de coin en maintenant Maj, et la page reprend sa vraie forme.

### Étape 5 : construire par-dessus

Ajoutez une diapositive titre, tracez des cadres et des flèches sur les figures à mettre en évidence, rédigez des notes du présentateur. Tout ce que vous ajoutez est du contenu PowerPoint normal et modifiable; seule l'image de la page en dessous est figée.

> **Astuce :** Si la présentation sera projetée sur un écran 16:9, changez d'abord la taille des diapositives dans PowerPoint (Création → Taille des diapositives → Grand écran), puis rétablissez les proportions de l'image : la page se placera centrée avec des marges sombres au lieu d'être rognée.

## Qu'arrive-t-il à mon PDF pendant la conversion?

Deux bibliothèques libres font le travail, toutes deux chargées dans la page et exécutées dans votre onglet. pdf.js, le moteur que Firefox utilise pour afficher les PDF, rend chaque page sur un canevas invisible. JSZip écrit ensuite à la main les composantes d'un fichier PowerPoint : la liste des types de contenu, le manifeste de la présentation, un fichier XML par diapositive et un dossier `media` contenant les PNG. Un .pptx est une archive ZIP à la structure fixe; c'est littéralement tout ce qu'est un fichier PowerPoint.

Rien dans cette chaîne ne parle à un serveur. Les requêtes visibles dans le panneau Réseau de votre navigateur sont les ressources de la page, le script pdf.js et ses tables de caractères, et une page vue anonyme. Le PDF, les images des pages et la présentation finie n'existent que dans la mémoire de votre navigateur et dans le téléchargement.

Pour un lecteur canadien, c'est la différence entre présenter les états financiers d'un client, un rapport interne d'hôpital ou un dossier d'IRCC à partir d'un PDF, et remettre une copie de ce document à un service de conversion dont vous n'avez pas lu la politique de conservation. Le fichier ne quitte jamais votre ordinateur; il n'y a donc rien qu'une loi sur la protection des renseignements personnels ait à encadrer.

## Le texte sera-t-il modifiable dans PowerPoint?

Non, et il vaut la peine de comprendre pourquoi plutôt que d'espérer qu'un autre réglage change les choses.

Un PDF ne stocke pas de paragraphes. Il stocke des instructions de dessin : placer tel glyphe à telle coordonnée, dans telle police, à telle taille. Reconstituer des paragraphes, des puces et des zones de texte à partir de ces coordonnées est un exercice de devinette difficile, et les outils qui s'y essaient (l'exportation d'Acrobat, l'importation des versions récentes de Word) produisent encore des présentations qui exigent une heure de nettoyage. Cet outil ne s'y essaie pas, volontairement. Il rend la page fidèlement en image et s'en tient là, ce qui veut dire que ce que vous voyez dans PowerPoint est exactement ce que vous voyiez dans le PDF.

| Ce que vous voulez faire avec la présentation | L'approche « une image par diapositive » convient-elle? | Quoi faire sinon |
|---|---|---|
| Présenter un rapport PDF en réunion | Oui, c'est fait pour ça | Rien; ajoutez une diapositive titre et lancez-vous |
| Annoter des figures avec des flèches et des légendes | Oui; dessinez par-dessus l'image | Rien |
| Réordonner, retirer ou dupliquer des pages comme diapositives | Oui; les diapositives sont indépendantes | Rien |
| Corriger une coquille dans le corps du texte | Non; le texte est en pixels | Couvrez la coquille d'un rectangle blanc et d'une zone de texte, ou corrigez la source et reconvertissez |
| Réutiliser les puces du PDF comme texte de vos diapositives | Non | Passez par [PDF en Word](/fr/pdf-to-word), copiez le texte, collez dans PowerPoint |
| Modifier les chiffres d'un graphique | Non; les graphiques d'un PDF sont déjà aplatis | Refaites le graphique avec Insertion → Graphique à partir des données source |
| Changer les polices ou la palette de couleurs | Non | Recréez les diapositives, ou servez-vous de l'image comme calque de référence |

En résumé honnête : c'est le bon outil quand le PDF est le produit fini et que vous devez le montrer diapositive par diapositive. C'est le mauvais outil quand le PDF est la matière première d'une nouvelle présentation.

## Quelle taille aura le PowerPoint, et combien de temps faut-il?

Chaque page devient un PNG sans perte d'environ 1 224 × 1 584 pixels pour une page lettre, ce qui explique que la présentation soit toujours plus lourde que le PDF.

| PDF source | Pages | Taille du PDF | Taille approximative du .pptx | Temps sur un portable de 2022 | Temps sur un téléphone de 2020 |
|---|---|---|---|---|---|
| Rapport texte seulement, fond blanc | 20 | 0,5–1 Mo | 5–10 Mo | 3–6 s | 8–15 s |
| Présentation exportée, fonds colorés | 30 | 3–8 Mo | 15–30 Mo | 6–12 s | 20–40 s |
| Contrat numérisé, grain de page gris | 40 | 20–40 Mo | 30–50 Mo | 15–30 s | peut recharger l'onglet |
| Brochure avec photos pleine page | 12 | 10–20 Mo | 12–25 Mo | 5–10 s | 15–30 s |

Le PNG compresse très bien les aplats de couleur et mal la texture photographique : les pages de texte blanc coûtent peu, les numérisations coûtent cher. Si la présentation doit partir par courriel, ouvrez-la dans PowerPoint et utilisez **Fichier → Compresser les images** au réglage 150 ppp, ce qui divise généralement la taille par deux sans changement visible au projecteur.

## Comment convertir un PDF en PowerPoint sur iPhone, Android, Mac ou Windows?

**iPhone et iPad.** Safari gère sans mal des présentations de 30 à 40 pages. Le .pptx arrive dans Fichiers → Téléchargements; touchez-le pour l'aperçu, ou ouvrez-le dans Keynote ou l'application PowerPoint. L'importation de Keynote n'a pas d'option PDF, alors l'outil comble un vrai manque sur iOS.

**Android.** Chrome enregistre la présentation dans Téléchargements. Google Slides, Microsoft PowerPoint et WPS Office l'ouvrent tous. Les téléphones à 3 Go de mémoire devraient rester sous 40 pages environ.

**Mac.** Keynote ne peut pas ouvrir un PDF directement, mais vous pouvez glisser une page PDF sur une diapositive Keynote comme image, une page à la fois. Pour trois pages, faites ça; pour trente, utilisez cet outil et ouvrez le résultat dans Keynote ou PowerPoint.

**Windows.** PowerPoint pour Microsoft 365 offre **Insertion → Images** pour l'image d'une seule page, sans importation PDF en lot. Acrobat Pro exporte vers PowerPoint avec reconstruction du texte si vous avez un abonnement; prévoyez du nettoyage de mise en page ensuite.

**Google Slides.** Slides ne peut pas importer un PDF. Convertissez ici, téléversez le .pptx dans Drive et ouvrez-le avec Slides; il garde une image par diapositive, exactement comme construit.

## Quand ne faut-il pas utiliser cet outil?

- **Vous avez besoin de texte modifiable.** Utilisez [PDF en Word](/fr/pdf-to-word) et copiez à partir du document, ou l'exportation d'Acrobat si vous l'avez.
- **Le PDF est verrouillé par un mot de passe.** pdf.js ne peut pas le rendre. Retirez d'abord le mot de passe que vous connaissez avec Déverrouiller un PDF.
- **Le PDF compte des centaines de pages.** Une présentation de 300 diapositives est inutilisable et le .pptx pèserait plusieurs centaines de mégaoctets. Extrayez les pages que vous présenterez vraiment.
- **Les proportions exactes comptent et vous ne pourrez pas les corriger après.** Les diapositives sont en 4:3 et l'image est étirée. Google Slides et Keynote permettent tous deux de rétablir les proportions d'une image, mais si la présentation va directement à quelqu'un qui n'appuiera que sur Lecture, convertissez plutôt avec [PDF en JPG](/fr/pdf-to-jpg) et placez vous-même les images sur des diapositives au bon format.
- **La présentation doit rester légère.** Chaque page est un PNG sans perte. Compressez les images dans PowerPoint après la conversion, ou acceptez la taille.
- **Le PDF contient des formulaires XFA.** Les formulaires dynamiques s'affichent comme une page vide dans les moteurs de navigateur; voyez [comment modifier un PDF XFA](/fr/guides/edit-xfa-pdf).

## Dépannage

| Problème | Solution | Pourquoi ça marche |
|---|---|---|
| Les diapositives semblent étirées ou écrasées | Sélectionnez l'image → Rétablir l'image et la taille, puis redimensionnez par un coin | L'outil remplit une diapositive 4:3 quelle que soit la forme de la page |
| La présentation est énorme | Fichier → Compresser les images à 150 ppp dans PowerPoint | Chaque diapositive est un PNG sans perte; la compression les réencode en JPEG |
| Impossible de cliquer dans le texte | Normal; ajoutez une zone de texte par-dessus | La diapositive contient une image, pas du texte |
| Certaines pages sont vides | Vérifiez s'il y a une couche de formulaire XFA ou un mot de passe | Les deux empêchent le moteur de dessiner la page |
| Safari recharge pendant la conversion | Convertissez moins de pages ou passez sur un portable | iOS limite la mémoire d'un onglet et le redémarre quand elle est dépassée |
| PowerPoint signale que le fichier doit être réparé | Reconvertissez; si ça persiste, ouvrez dans Google Slides et réexportez | Un téléchargement interrompu laisse un ZIP tronqué |

## Que faire d'autre avec un PDF à présenter?

- [PDF en JPG](/fr/pdf-to-jpg) quand vous voulez les images des pages elles-mêmes, à glisser dans une présentation existante.
- [PDF en Word](/fr/pdf-to-word) quand il vous faut les mots, pas l'apparence.
- [Extraire des pages PDF](/fr/extract-pdf-pages) pour réduire le document avant de le convertir.
- [Compresser un PDF](/fr/compress-pdf) pour alléger une source numérisée avant de la rendre.

## En résumé

Ce convertisseur transforme un PDF en .pptx avec une image haute résolution par page, dans votre navigateur, gratuitement et sans rien téléverser. C'est le bon choix pour présenter ou annoter un PDF fini dans PowerPoint, Keynote ou Google Slides, et il fonctionne sur un téléphone où aucune option native n'existe. C'est le mauvais choix si vous devez modifier les mots; passez alors par PDF en Word. Raccourcissez le PDF d'abord, cliquez sur Convertir le fichier, et rétablissez les proportions de l'image à l'ouverture de la présentation.
