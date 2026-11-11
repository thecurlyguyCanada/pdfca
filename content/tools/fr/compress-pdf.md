---
title: "Compresser un PDF gratuitement : jusqu'à 90 % plus léger, sans envoi"
h1: "Compresser un PDF à moins de 2 Mo"
lead: "Choisissez un niveau de qualité, cliquez sur Compresser PDF et téléchargez un fichier plus léger. Les numérisations perdent 40 à 90 %; tout se passe dans votre navigateur."
description: "Compressez un PDF à moins de 2 Mo gratuitement dans votre navigateur. Trois niveaux; les numérisations perdent 40 à 90 %, le texte 5 à 15 %. Sans téléversement."
answer: "Ajoutez votre PDF, choisissez Bon, Équilibré ou Extrême, cliquez sur Compresser PDF et téléchargez le résultat. Bon garde le texte sélectionnable et retire 5 à 15 %; Équilibré et Extrême redessinent chaque page en JPEG et allègent les fichiers numérisés ou remplis de photos de 40 à 90 %, ce qui fait passer une numérisation de 10 Mo sous 2 Mo. C'est gratuit, rien n'est téléversé, et l'outil propose des niveaux de qualité plutôt qu'une taille cible : vérifiez le résultat et essayez le niveau suivant s'il est encore trop lourd."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait la compression", "Dans l'onglet de votre navigateur. pdf-lib réécrit le fichier; en mode Équilibré et Extrême, pdf.js dessine d'abord chaque page sur un canevas. Rien n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Un fichier de 100 à 150 Mo se compresse sur un portable avec 8 Go de mémoire; sur un téléphone, restez sous 30 à 40 Mo, car chaque page est rendue en image dans la mémoire."]
  - ["Nombre maximal de pages", "Aucun maximum fixé. Équilibré et Extrême prennent environ 0,1 à 0,3 seconde par page sur un portable; une numérisation de 200 pages demande 30 à 60 secondes."]
  - ["Niveaux de qualité", "Bon (réécriture sans perte, texte sélectionnable), Équilibré (pages redessinées au niveau indiqué 150 ppp, JPEG qualité 0,7), Extrême (96 ppp, JPEG qualité 0,4). Il n'y a pas de champ de taille cible."]
  - ["Entrée", ".pdf seulement. Un fichier protégé par mot de passe doit d'abord passer par Déverrouiller PDF."]
  - ["Sortie", "Un PDF nommé compressed_<votre fichier>.pdf, mêmes dimensions et même nombre de pages. En mode Équilibré et Extrême, le texte n'est plus sélectionnable. Votre original n'est pas modifié."]
  - ["Ce qui reste sur votre appareil", "Le PDF source, le PDF compressé et le niveau choisi. Le site n'enregistre qu'une visite anonyme de la page."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
faq:
  - q: "Comment compresser un PDF à moins de 2 Mo gratuitement?"
    a: "Ajoutez le fichier, choisissez Équilibré, cliquez sur Compresser PDF et regardez la taille du téléchargement. Un document numérisé de 5 à 15 Mo atterrit généralement entre 1 et 2 Mo. S'il dépasse encore, relancez l'original en mode Extrême, qui divise à peu près par deux le résultat d'Équilibré. Les PDF texte sont un autre cas : ils sont déjà légers, et Bon est le bon niveau."
  - q: "La compression va-t-elle rendre mon PDF flou?"
    a: "Bon ne touche ni aux images ni au texte, donc aucun changement visible. Équilibré redessine les pages au niveau que l'outil indique comme 150 ppp avec une qualité JPEG de 0,7, ce qui se lit proprement à l'écran et s'imprime correctement en format lettre. Extrême descend à 96 ppp et à une qualité de 0,4; le texte reste lisible, mais les petits caractères et les traits fins s'adoucissent, alors réservez-le aux fichiers qui ne seront consultés qu'à l'écran."
  - q: "Pourquoi mon PDF texte n'a-t-il presque pas rétréci, ou a-t-il même grossi?"
    a: "Le texte et les graphiques vectoriels sont déjà compacts, alors Bon ne peut retirer que quelques pour cent de surcharge. Équilibré et Extrême transforment chaque page en photographie JPEG d'elle-même, et un JPEG d'une pleine page de texte pèse souvent plus que le texte. Pour les PDF texte, utilisez Bon; si le fichier est encore trop lourd, le poids se trouve sans doute dans quelques images intégrées ou une annexe inutile."
  - q: "Puis-je encore sélectionner et chercher du texte après la compression?"
    a: "Seulement avec Bon. Équilibré et Extrême aplatissent chaque page en image : le texte devient des pixels et ne peut plus être sélectionné, cherché ni lu par un lecteur d'écran. Si vous avez besoin d'un fichier léger qui reste consultable, compressez avec Bon, puis retirez des pages ou divisez le document au lieu de le pixelliser."
  - q: "La compression retire-t-elle les métadonnées de mon PDF?"
    a: "Bon efface les champs titre, auteur, sujet, mots-clés, créateur et producteur pendant la réécriture. Équilibré et Extrême construisent un document entièrement nouveau à partir d'images de pages, donc aucune métadonnée, aucun signet, lien ou champ de formulaire d'origine n'est conservé. Les calques cachés et les commentaires disparaissent aussi, ce qui est parfois exactement ce que l'on veut avant d'envoyer un fichier."
  - q: "Puis-je compresser un PDF plusieurs fois pour le rendre encore plus petit?"
    a: "Vous le pouvez, mais un second passage en Équilibré ou Extrême réencode des JPEG qui sont déjà des JPEG : la qualité baisse encore alors que la taille bouge à peine. Compressez l'original une seule fois au niveau nécessaire. Si Extrême sur l'original est encore trop lourd, la solution est moins de pages, pas un autre passage."
  - q: "Est-ce sécuritaire de compresser des documents fiscaux ou médicaux ici?"
    a: "Le fichier est lu dans la mémoire de votre navigateur, réécrit ou redessiné là, puis proposé en téléchargement depuis le même onglet. Aucune requête réseau ne le transporte, ce que vous pouvez vérifier dans les outils de développement, onglet Réseau, pendant la compression. Fermez l'onglet et la mémoire est libérée."
  - q: "Quelle est la taille maximale de PDF que je peux compresser?"
    a: "Il n'y a pas de limite serveur parce qu'il n'y a pas de serveur. Sur un portable, des fichiers de 100 à 150 Mo se compressent sans problème; le plafond est la mémoire de votre appareil, puisque Équilibré et Extrême gardent une image rendue de chaque page pendant le travail. Sur un téléphone, 30 à 40 Mo est une limite plus sûre, ou divisez d'abord le fichier et compressez les moitiés."
---
## Comment compresser un PDF à moins de 2 Mo gratuitement?

La plupart des messageries plafonnent les pièces jointes à 20 ou 25 Mo, mais les limites qui font vraiment mal sont plus basses : 2 Mo sur bien des portails d'emploi, 4 Mo par fichier dans les demandes en ligne d'IRCC, 1 Mo pour certains téléversements d'assurance ou de prestations, 500 Ko pour quelques formulaires de bourses. Cet outil fait passer un PDF numérisé ou rempli de photos sous ces limites en cinq étapes.

### Étape 1 : Ajoutez le PDF

Cliquez sur **Choisir un fichier** ou glissez le fichier sur la zone de dépôt. L'outil affiche le nom du fichier et sa taille actuelle, c'est-à-dire le chiffre à battre.

### Étape 2 : Choisissez un niveau

Trois options apparaissent sous **Choisir le niveau de compression** :

- **Bon** réécrit le fichier sans perte : il regroupe les objets internes dans des flux compressés et vide les champs de métadonnées. Le texte reste sélectionnable. Attendez-vous à 5 à 15 % de moins sur la plupart des fichiers, parfois davantage sur des PDF produits par de vieux logiciels.
- **Équilibré** dessine chaque page en image au niveau que l'outil indique comme 150 ppp et l'enregistre en JPEG à une qualité de 0,7. C'est le niveau qui transforme une numérisation de 10 Mo en 1 ou 2 Mo. Le texte fait désormais partie de l'image et n'est plus sélectionnable.
- **Extrême** fait la même chose à 96 ppp et à une qualité JPEG de 0,4. Environ la moitié de la taille d'Équilibré, avec des petits caractères visiblement plus doux.

C'est ici que les gens se trompent. Si votre fichier est une exportation Word ou un relevé bancaire avec du vrai texte, Équilibré et Extrême peuvent le rendre plus gros, pas plus petit, parce qu'un JPEG d'une page de texte pèse plus que le texte lui-même. Commencez par Bon pour les documents texte et par Équilibré pour tout ce qui est numérisé ou photographié.

### Étape 3 : Cliquez sur Compresser PDF

Bon termine en une ou deux secondes, peu importe le nombre de pages. Équilibré et Extrême travaillent page par page, environ 0,1 à 0,3 seconde chacune sur un portable de 2022; une numérisation de 40 pages prend 5 à 12 secondes et une de 200 pages, 30 à 60 secondes. La page reprend son souffle entre chaque page, donc l'onglet ne fige pas.

### Étape 4 : Vérifiez la taille

Le téléchargement s'appelle `compressed_<votre fichier>.pdf`. Comparez sa taille à la limite visée. S'il dépasse encore, repartez du fichier original (pas du fichier compressé) et essayez le niveau suivant.

### Étape 5 : Ouvrez-le avant de l'envoyer

Allez à une page avec de petits caractères ou une signature. Si Extrême a rendu quelque chose illisible, revenez à Équilibré et retirez des pages à la place; voir la section suivante.

> **Astuce :** Compressez toujours l'original. Passer Équilibré sur un fichier déjà passé en Équilibré réencode des JPEG qui sont déjà des JPEG : la qualité baisse, la taille bouge à peine.

## Qu'arrive-t-il à mon fichier quand je le compresse?

Deux choses différentes, selon le niveau. Avec Bon, pdf-lib charge le PDF dans la mémoire de votre navigateur, vide les champs d'information du document et le réenregistre avec des flux d'objets activés, ce qui est un remballage sans perte de la structure interne du fichier. Avec Équilibré ou Extrême, pdf.js, le moteur que Firefox utilise pour afficher les PDF, dessine chaque page sur un canevas invisible dans l'onglet; le canevas est encodé en JPEG à la qualité choisie, et pdf-lib construit un nouveau document avec un JPEG par page, aux dimensions d'origine. Le résultat vous est remis en téléchargement depuis le même onglet.

Dans aucun des deux cas le fichier ne quitte votre appareil. Il n'y a pas d'étape de téléversement parce qu'aucun serveur ne fait le travail. Vous pouvez le vérifier vous-même : ouvrez les outils de développement du navigateur, choisissez Réseau et compressez un fichier. Vous verrez se charger les scripts de la page et les bibliothèques PDF, une requête anonyme de visite de page, et rien d'autre pendant la compression.

C'est ce qui compte pour les documents que les Canadiens compressent le plus : des T4 et des relevés 1 numérisés pour la déclaration de revenus, des preuves de fonds et des numérisations de passeport pour une demande d'IRCC, un bail photographié de 30 Mo pour un dossier au Tribunal administratif du logement, ou une demande de consultation avec imagerie jointe. Un fichier qui n'est jamais téléversé ne peut être ni conservé, ni analysé, ni divulgué par quelqu'un d'autre; il n'y a donc rien qu'une loi sur la protection des renseignements personnels aurait à encadrer.

## Comment obtenir un PDF de moins de 2 Mo (ou 1 Mo, ou 500 Ko)?

L'outil propose des niveaux de qualité, pas une case de taille cible; pour atteindre une limite précise, il faut donc savoir à peu près ce que chaque niveau fait à chaque type de fichier et choisir en conséquence. Le tableau ci-dessous indique à quoi s'attendre; votre fichier variera selon le nombre de pages et la densité des numérisations.

| Type de document | Taille de départ | Bon | Équilibré | Extrême |
|---|---|---|---|---|
| Exportation Word ou Google Docs, 10 pages de texte | 300 Ko | 250 à 290 Ko | 1 à 2 Mo (plus gros) | 500 Ko à 1 Mo (plus gros) |
| Relevé bancaire PDF, 6 pages, vrai texte | 800 Ko | 650 à 760 Ko | 1 à 1,5 Mo (plus gros) | 400 à 700 Ko |
| Lettre numérisée au téléphone, 4 pages | 8 Mo | 7 à 7,5 Mo | 600 Ko à 1,2 Mo | 300 à 600 Ko |
| PDF de numériseur de bureau à 300 ppp, 20 pages | 25 Mo | 22 à 24 Mo | 2,5 à 4 Mo | 1,2 à 2 Mo |
| Présentation avec photos, 40 diapositives | 15 Mo | 12 à 14 Mo | 2 à 3,5 Mo | 1 à 1,8 Mo |
| Fiche immobilière pleine de photos, 12 pages | 40 Mo | 35 à 38 Mo | 2 à 3 Mo | 1 à 1,5 Mo |

Lecture du tableau pour les trois cibles courantes :

**Moins de 2 Mo.** Équilibré y amène toute numérisation d'au plus 10 à 15 pages. Une numérisation plus longue demande Extrême, ou Équilibré avec moins de pages.

**Moins de 1 Mo.** Extrême sur des numérisations d'au plus une dizaine de pages. Pour les PDF texte, Bon plus le retrait de pages est la seule voie qui les garde lisibles.

**Moins de 500 Ko.** Réaliste pour une numérisation de une à trois pages en Extrême, ou un court document texte en Bon. Au-delà, vous échangez de la lisibilité contre des kilooctets.

Quand le niveau le plus bas ne suffit toujours pas, changez l'entrée au lieu de recompresser :

1. **Retirez les pages inutiles.** Pages de garde, versos blancs d'une numérisation recto verso et copies en double sont les coupables habituels. [Supprimer des pages PDF](/fr/delete-pdf-pages) prend quelques secondes et fait souvent gagner plus qu'un niveau de compression.
2. **Divisez le document.** Un portail qui accepte 2 Mo par fichier accepte généralement plusieurs fichiers. [Diviser PDF](/fr/split-pdf) ou [Extraire des pages PDF](/fr/extract-pdf-pages) transforme un fichier de 6 Mo en trois téléversements qui passent chacun.
3. **Renumérisez à un réglage plus bas.** Un numériseur réglé à 600 ppp couleur produit 4 à 6 Mo par page; à 200 ppp en niveaux de gris, 200 à 400 Ko par page, encore parfaitement lisibles pour des formulaires. Si vous avez encore le papier, cela bat n'importe quel compresseur.
4. **Photographiez plus léger.** Les numérisations au téléphone en pleine résolution font 3 à 5 Mo chacune. La plupart des applications de numérisation ont une option « petit » ou « moyen » qui ramène une page sous 1 Mo avant même qu'elle devienne un PDF.

## Comment compresser un PDF sur iPhone, Android, Mac ou Windows?

L'outil est la même page sur tous les appareils, mais les solutions intégrées diffèrent beaucoup.

**iPhone et iPad.** Ouvrez la page dans Safari, touchez la zone de dépôt et choisissez le fichier dans Fichiers. Équilibré sur une numérisation de 20 pages prend 15 à 40 secondes sur un iPhone récent. Restez sous 30 à 40 Mo; iOS recharge un onglet qui consomme trop de mémoire, et chaque page rendue est conservée pendant le travail. Le téléchargement apparaît dans Fichiers → Téléchargements. iOS n'a pas d'option de compression, mais les numériseurs de Notes et de Fichiers permettent de choisir une taille de sortie plus petite au moment de numériser.

**Android.** Chrome gère le sélecteur et enregistre dans Téléchargements. Les téléphones avec 3 ou 4 Go de mémoire devraient rester sous 30 Mo par fichier ou diviser d'abord. Le numériseur de Google Drive offre un curseur de qualité à la numérisation, et c'est là qu'il vaut mieux économiser.

**Mac.** Aperçu peut exporter avec le filtre Quartz « Réduire la taille du fichier » (Fichier → Exporter → Filtre Quartz). Il est déjà installé et gratuit; sa faiblesse est un réglage unique et assez agressif, qui peut transformer une numérisation propre à 300 ppp en bouillie. Cette page vous donne deux niveaux avec perte et un sans perte, et vous laisse comparer.

**Windows.** Windows n'a pas de compresseur PDF intégré. Imprimer vers Microsoft Print to PDF redessine le document, mais réduit rarement la taille de façon notable. Il faut un outil comme celui-ci ou une application de bureau.

**Chromebook.** Fonctionne comme sur Chrome de bureau. Les fichiers vont dans Téléchargements ou Google Drive selon votre réglage.

## Quand ne devriez-vous pas utiliser cet outil?

- **Le texte doit rester sélectionnable ou consultable et Bon ne suffit pas.** Équilibré et Extrême pixellisent les pages. Utilisez Bon, puis retirez des pages ou divisez; ou, si le poids vient de quelques grandes images, un éditeur de bureau capable de sous-échantillonner des images individuelles sans aplatir le texte est le bon outil.
- **L'accessibilité compte.** Un PDF pixellisé n'a pas de couche de texte, alors les lecteurs d'écran ne peuvent pas le lire. Gardez une copie non compressée ou au niveau Bon pour qui en a besoin.
- **Formulaires remplissables, signatures et liens.** Équilibré et Extrême construisent un nouveau document à partir d'images de pages; les champs de formulaire, les signatures numériques, les signets et les hyperliens disparaissent. Compressez avec Bon, ou compressez avant de signer et de remplir.
- **Le PDF demande un mot de passe.** Il ne peut pas être lu. Retirez d'abord le mot de passe avec Déverrouiller PDF.
- **Qualité d'impression.** 150 ppp convient à une page lettre lue à bout de bras; pas à une affiche, un plan ou tout ce qui sera agrandi. Gardez l'original pour l'impression.
- **Un fichier de 150 Mo sur un téléphone.** Rendre chaque page en image demande une mémoire que le téléphone n'a pas. Utilisez un portable, ou divisez d'abord le fichier.

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Le fichier a grossi | Utilisez Bon au lieu d'Équilibré ou Extrême | Les pages de texte pèsent moins en texte qu'en JPEG |
| Encore plus de 2 Mo après Extrême | Supprimez des pages inutiles ou divisez en deux fichiers | Moins de pages est le seul levier qui reste quand la qualité est au plus bas |
| Je ne peux plus sélectionner ni chercher le texte | Recompressez l'original avec Bon | Bon est le seul niveau qui garde la couche de texte |
| Les petits caractères sont flous | Utilisez Équilibré plutôt qu'Extrême | 150 ppp tient les caractères de 8 points; 96 ppp, non |
| Les champs de formulaire ou la signature ont disparu | Utilisez Bon, ou signez et remplissez après la compression | Les niveaux avec perte bâtissent un nouveau document d'images, sans la couche de formulaire |
| Safari sur iPhone recharge l'onglet | Divisez le fichier ou utilisez un portable | iOS limite la mémoire d'un onglet et le rendu des pages la dépasse |
| La page semble figée sur une longue numérisation | Patientez; 200 pages prennent 30 à 60 secondes | Chaque page est rendue à son tour et l'outil fait une pause entre les pages |

## Quoi d'autre peut alléger un PDF?

- [Supprimer des pages PDF](/fr/delete-pdf-pages) retire les pages qui alourdissent le fichier, sans aucune perte sur celles que vous gardez.
- [Diviser PDF](/fr/split-pdf) transforme un fichier trop lourd en plusieurs qui passent chacun une limite par fichier.
- [Extraire des pages PDF](/fr/extract-pdf-pages) ne garde que les pages qu'un formulaire demande vraiment.
- [Recadrer PDF](/fr/crop-pdf) coupe les marges, ce qui ne réduit pas la taille du fichier, mais rend une page plus lisible à une résolution plus basse.
- [Fusionner PDF](/fr/merge-pdf) pour combiner les fichiers après compression, de sorte qu'une limite de 2 Mo par téléversement devienne un seul lot conforme.

## En résumé

La compression PDF, ce sont en réalité deux travaux différents. Bon est un remballage sans perte qui garde le texte sélectionnable et retire 5 à 15 %; Équilibré et Extrême transforment chaque page en JPEG et retirent 40 à 90 % aux numérisations et aux fichiers remplis de photos, ce qui fait passer un document de 10 Mo sous une limite de portail de 2 Mo. Choisissez Bon pour le texte, Équilibré pour les numérisations, Extrême seulement quand Équilibré reste trop lourd, et compressez l'original plutôt que de compresser deux fois. Quand même Extrême ne suffit pas, retirez des pages ou divisez le fichier au lieu de sacrifier la lisibilité.
