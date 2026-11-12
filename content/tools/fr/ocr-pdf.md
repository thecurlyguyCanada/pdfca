---
title: "OCR PDF gratuit : rendre un PDF numérisé consultable"
h1: "OCR PDF"
lead: "Transformez un PDF numérisé en document où l'on peut chercher, sélectionner et copier le texte, en français et en anglais. Le scan reste identique ; l'OCR se fait dans votre navigateur et le fichier n'est jamais envoyé."
description: "Faites l'OCR d'un PDF numérisé gratuitement dans votre navigateur : le texte français et anglais devient consultable et copiable, sans envoi du fichier."
answer: "Ajoutez le PDF numérisé et cliquez sur Rendre consultable (OCR). Chaque page sans texte est lue par un moteur OCR qui tourne dans votre navigateur, en français et en anglais, puis une couche de texte invisible est posée sur l'image d'origine. Le fichier téléchargé a exactement la même apparence que votre scan, mais Ctrl+F, le copier-coller et les lecteurs d'écran fonctionnent. Les pages qui contiennent déjà du texte ne sont pas touchées et le fichier ne quitte jamais votre appareil."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans limite quotidienne"]
  - ["Où se fait l'OCR", "Dans l'onglet de votre navigateur, avec Tesseract (le moteur OCR libre) compilé en WebAssembly. Le PDF n'est jamais envoyé à un serveur."]
  - ["Ce qui est téléchargé", "À la première utilisation, le navigateur récupère le moteur OCR et les données de langue française et anglaise (environ 4 Mo de fichiers de langue) sur le CDN jsDelivr. Votre document ne fait pas partie de cette requête. Ensuite, ces fichiers restent en cache."]
  - ["Langues", "Français et anglais sur chaque page : les documents bilingues de l'ARC, de Service Canada ou de Revenu Québec sont lus en une seule passe"]
  - ["Vitesse", "Environ 1 à 5 secondes par page sur un ordinateur portable récent pour une page lettre dactylographiée ; plus long pour une page dense ou sur téléphone. Une ligne indique la page en cours."]
  - ["Taille maximale", "Aucune limite fixe. Un scan de 50 pages passe bien sur un ordinateur ; sur téléphone, restez sous une vingtaine de pages par passe."]
  - ["Entrée", "Fichiers .pdf seulement. Les pages qui contiennent déjà du texte sont copiées telles quelles et ignorées par l'OCR."]
  - ["Sortie", "Le même PDF avec une couche de texte invisible sur chaque page numérisée, enregistré sous nomdufichier_searchable.pdf. Les images ne sont pas recompressées."]
  - ["Non pris en charge", "L'écriture manuscrite et les PDF protégés par mot de passe (retirez le mot de passe dans l'application qui a créé le fichier)"]
faq:
  - q: "Comment rendre un PDF numérisé consultable gratuitement ?"
    a: "Ouvrez l'outil OCR PDF, ajoutez le scan et cliquez sur Rendre consultable (OCR). Chaque page numérisée est lue dans votre navigateur et une couche de texte cachée est ajoutée sous la même image : le fichier est identique, mais Ctrl+F et le copier-coller fonctionnent. C'est gratuit, sans filigrane et rien n'est envoyé."
  - q: "Mon document est-il envoyé quelque part ?"
    a: "Non. Le moteur OCR tourne dans l'onglet de votre navigateur. À la première utilisation, le navigateur télécharge le moteur et les fichiers de langue française et anglaise depuis un CDN public, mais votre PDF ne fait pas partie de ce téléchargement et n'est jamais transmis. L'onglet Réseau des outils de développement de votre navigateur permet de le vérifier."
  - q: "L'OCR modifie-t-il l'apparence de mon PDF ?"
    a: "Non. L'image d'origine de chaque page reste telle quelle, sans nouveau rendu ni recompression. Le texte reconnu est ajouté sous forme de couche invisible placée sur chaque mot, comme le font les photocopieurs de bureau qui produisent des PDF consultables. Une impression donne exactement le même résultat qu'avant."
  - q: "L'outil lit-il les documents en français et les documents bilingues ?"
    a: "Oui. Chaque page est lue avec les modèles français et anglais à la fois, donc les accents comme é, è, à et ç sortent correctement et un formulaire gouvernemental bilingue est traité en une seule passe. Sur la version française de la page, le français est essayé en premier."
  - q: "Pourquoi l'outil indique-t-il que mon PDF contient déjà du texte ?"
    a: "L'outil vérifie d'abord si chaque page a déjà une couche de texte et ignore celles qui en ont une, car l'OCR d'un PDF numérique ajouterait seulement une deuxième copie, moins fiable, du texte. Si toutes les pages ont déjà du texte, il n'y a rien à faire et ce message remplace le téléchargement. Essayez de sélectionner un mot dans votre lecteur PDF."
  - q: "Quelle est la précision de l'OCR ?"
    a: "Sur un scan net et droit de texte imprimé à 200 ppp ou plus, presque tous les mots sont reconnus. La précision baisse avec les télécopies, les photos prises en biais, les petits caractères pâles, les tableaux quadrillés et les fonds colorés. L'écriture manuscrite n'est pas prise en charge. Cherchez quelques mots clés dans le résultat avant de vous y fier."
  - q: "Puis-je faire l'OCR d'une photo de document prise au téléphone ?"
    a: "Convertissez d'abord la photo en PDF avec JPG en PDF, puis passez le fichier dans OCR PDF. Tenez le téléphone bien à plat au-dessus de la feuille, dans une pièce éclairée ; une photo inclinée ou ombragée est la principale cause de mots manqués. Pour plusieurs photos, convertissez chacune et réunissez-les avec Fusionner des PDF avant l'OCR."
  - q: "Le PDF consultable sera-t-il accepté par l'ARC ou IRCC ?"
    a: "Oui, c'est un PDF ordinaire. La couche de texte n'ajoute que quelques kilo-octets par page : le fichier reste proche de sa taille d'origine et sous les limites habituelles de téléversement. Un fichier consultable permet aussi de vérifier qu'un scan est lisible avant de l'envoyer, puisque les mots que vous pouvez chercher sont ceux que l'OCR a lus."
---
## Comment rendre un PDF numérisé consultable ?

Trois étapes. Pour un scan typique de 10 pages format lettre, l'opération prend moins d'une minute sur un ordinateur portable.

### Étape 1 : ajoutez le PDF numérisé

Cliquez sur **Sélectionner un fichier** ou glissez le PDF dans la zone de dépôt. Les vignettes des pages s'affichent pour confirmer que c'est le bon fichier. À ce stade, rien n'a encore été lu : le fichier est seulement chargé dans l'onglet.

### Étape 2 : cliquez sur Rendre consultable (OCR)

La première fois, le navigateur télécharge le moteur OCR et les données de langue française et anglaise, soit environ 4 Mo de fichiers de langue plus le moteur lui-même ; comptez quelques secondes de plus. Ensuite, ces fichiers restent en cache.

L'outil traite ensuite le document page par page, et l'écran indique la page en cours, par exemple « Lecture de la page 4 sur 12 ». Pour chaque page, il :

1. vérifie si la page contient déjà du texte ; si oui, la page est copiée telle quelle ;
2. effectue le rendu de la page numérisée à environ 250 ppp, assez pour un texte imprimé normal sans épuiser la mémoire d'un téléphone ;
3. la lit avec Tesseract, en français et en anglais à la fois ;
4. pose les mots reconnus sur la page d'origine sous forme de texte invisible, chaque mot à l'endroit où il apparaît sur l'image.

### Étape 3 : ouvrez le résultat

Le fichier téléchargé s'appelle `<votre fichier>_searchable.pdf`. Ouvrez-le, appuyez sur Ctrl+F (Cmd+F sur Mac) et cherchez un mot visible sur la page. S'il est surligné, l'OCR l'a trouvé. Vous pouvez aussi sélectionner un paragraphe et le coller dans un courriel ou un document Word.

> **Conseil :** l'étape que l'on saute le plus souvent, c'est la vérification. Cherchez deux ou trois mots importants, comme un nom, un montant ou un numéro de dossier, avant d'envoyer ou d'archiver le fichier. Si un mot manque, la qualité du scan est presque toujours en cause ; voyez le tableau de dépannage plus bas.

## Que fait l'OCR à mon PDF, concrètement ?

Un PDF numérisé est une suite d'images. Votre lecteur affiche l'image de chaque page, mais le fichier ne contient aucune lettre : c'est pourquoi la recherche ne trouve rien et que la sélection prend toute la page comme une image.

L'OCR (reconnaissance optique de caractères) lit les lettres de l'image et les rajoute au fichier sous forme de texte. Cet outil les ajoute comme le font les numériseurs de bureau : dans une couche invisible placée exactement sur les mots imprimés. Vous voyez le scan d'origine ; votre lecteur, la recherche et les lecteurs d'écran voient le texte.

En pratique, cela signifie trois choses :

- **Le scan n'est pas modifié.** L'image n'est ni redessinée ni recompressée : signatures, tampons et photos gardent leur qualité.
- **Le fichier grossit à peine.** La couche de texte pèse quelques kilo-octets par page.
- **Les erreurs sont invisibles.** Si l'OCR lit « 8 » au lieu de « B », rien ne le montre à l'écran ; vous le verrez seulement quand une recherche échoue. D'où l'importance de la vérification à l'étape 3.

| Ce que vous voulez faire | PDF numérisé avant l'OCR | Après OCR PDF |
|---|---|---|
| Trouver un mot avec Ctrl+F | Ne trouve rien | Trouve le mot sur la page |
| Copier un paragraphe | Copie une image ou rien | Copie le texte |
| Lecteur d'écran | Ne lit rien, ou « image » | Lit le texte |
| Recherche Windows ou macOS | Contenu non indexé | Contenu indexé |
| Apparence et impression | Scan d'origine | Identiques |
| Taille du fichier | D'origine | D'origine plus quelques Ko par page |

## Quels documents fonctionnent bien, et lesquels non ?

La qualité de l'OCR dépend beaucoup plus du scan que du logiciel. Voici les cas les plus fréquents.

**Fonctionne bien**

- Les scans de bureau de lettres, factures, relevés et formulaires imprimés, à 200 ppp ou plus.
- Les documents gouvernementaux bilingues : avis de l'ARC, lettres de Service Canada, formulaires de Revenu Québec. Le français et l'anglais sont lus dans la même passe.
- Les pages de livres et d'articles numérisées à plat.

**Fonctionne, mais vérifiez les erreurs**

- Les télécopies et vieilles photocopies, où les lettres sont brisées ou empâtées.
- Les tableaux à lignes épaisses, où une ligne peut être lue comme un l ou un I.
- Le texte sur fond coloré ou à motifs.
- Les très petits caractères, sous environ 8 points à 200 ppp.

**Ne fonctionne pas**

- L'écriture manuscrite, y compris les formulaires remplis à la main : les libellés imprimés sont lus, l'écriture non.
- Les PDF protégés par mot de passe. Retirez le mot de passe dans l'application qui a créé le fichier, puis réessayez.

## Comment faire l'OCR d'une photo ou d'une série d'images ?

L'outil lit des PDF : les photos demandent une étape de plus.

1. Convertissez chaque photo avec [JPG en PDF](/fr/jpg-to-pdf). Les photos iPhone au format HEIC passent par [HEIC en PDF](/fr/heic-to-pdf).
2. S'il y a plusieurs pages, réunissez-les dans le bon ordre avec [Fusionner des PDF](/fr/merge-pdf).
3. Passez le fichier combiné dans OCR PDF.

Pour la photo elle-même : tenez le téléphone bien au-dessus de la feuille plutôt qu'en biais, utilisez la lumière du jour ou une pièce éclairée sans votre ombre sur le papier, et remplissez le cadre avec la page. Une photo droite et uniformément éclairée donne un résultat proche d'un scan à plat. Si une photo est sortie de côté, corrigez-la avec [Faire pivoter un PDF](/fr/rotate-pdf) avant l'OCR, car un texte tourné de 90° est en grande partie manqué.

## L'OCR dans le navigateur est-il confidentiel ?

Oui, et il vaut la peine de savoir exactement ce qui circule sur le réseau.

- **Votre PDF :** reste dans l'onglet. Il est lu depuis votre disque, traité en mémoire et enregistré comme téléchargement.
- **Le moteur OCR et les données de langue :** téléchargés depuis le CDN public jsDelivr à la première utilisation, puis mis en cache. La requête demande un fichier fixe, par exemple le modèle de langue française ; elle ne contient rien de votre document.
- **Ce site :** enregistre une visite anonyme, sans nom ni contenu de fichier.

L'outil convient donc aux documents qu'on préfère ne pas téléverser dans un convertisseur : feuillets d'impôt, relevés bancaires, lettres médicales, papiers d'immigration. Pour le vérifier, ouvrez les outils de développement du navigateur, passez à l'onglet Réseau et lancez l'OCR : vous verrez les fichiers du moteur se charger une fois, et aucun envoi.

## Dépannage

| Problème | Solution | Pourquoi ça marche |
|---|---|---|
| « Ce PDF contient déjà du texte sélectionnable » | Rien à faire ; essayez de sélectionner un mot dans votre lecteur | L'outil ignore les pages qui ont déjà du texte |
| La recherche trouve certains mots, pas d'autres | Numérisez à nouveau à 300 ppp, ou reprenez la photo bien droite | Les mots manqués sont presque toujours flous, inclinés ou pâles |
| Les accents sortent mal (e au lieu de é) | Vérifiez la netteté du scan ; les accents sont le premier détail perdu dans le flou | Les modèles français et anglais tournent sur chaque page |
| Une page de côté ne donne rien | Faites pivoter la page, puis relancez l'OCR | Le moteur lit le texte à l'endroit |
| C'est lent sur mon téléphone | Divisez le fichier et traitez 10 à 20 pages à la fois | Chaque page est rendue et lue dans la mémoire du téléphone |
| Rien ne se passe à la première utilisation | Attendez le téléchargement du moteur ou vérifiez la connexion | Le moteur et les langues se chargent une fois, puis restent en cache |

## Quand ne pas utiliser cet outil ?

- **Le PDF est déjà numérique.** Si vous pouvez y sélectionner du texte, l'OCR n'apporte rien. Pour modifier le texte, convertissez-le plutôt avec [PDF en Word](/fr/pdf-to-word).
- **Vous voulez du texte modifiable, pas un scan consultable.** OCR PDF garde le scan et ajoute une couche cachée. Pour réécrire le contenu, copiez le texte du résultat ou convertissez le résultat avec PDF en Word.
- **Le document est manuscrit.** L'OCR dans le navigateur lit l'imprimé, pas l'écriture à la main.
- **Il vous faut une transcription certifiée.** Le texte OCR est une couche pratique ; pour un tribunal ou une traduction officielle, l'image numérisée reste le document de référence.

## En résumé

OCR PDF transforme un scan en PDF consultable, où l'on peut copier le texte et le faire lire à voix haute, en français et en anglais, sans téléverser le fichier ni changer son apparence. Ajoutez le fichier, cliquez sur **Rendre consultable (OCR)**, puis cherchez deux ou trois mots clés pour vérifier le résultat.

Pour des photos, convertissez-les d'abord avec [JPG en PDF](/fr/jpg-to-pdf). Si le scan est trop lourd pour un courriel, passez-le dans [Compresser un PDF](/fr/compress-pdf) **avant** l'OCR, pas après : les niveaux de compression les plus forts redessinent chaque page comme une nouvelle image, ce qui ferait disparaître la couche de texte.
