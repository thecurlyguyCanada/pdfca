---
title: "Comparer deux PDF gratuitement : chaque mot, sans envoi"
h1: "Comparer deux PDF et voir ce qui a changé"
lead: "Déposez la version d'origine et la version modifiée, cliquez sur Comparer et lisez chaque mot ajouté, supprimé ou remplacé. Les deux fichiers restent dans votre navigateur."
description: "Comparez deux PDF mot à mot gratuitement : ajouts, suppressions, montants, dates et négations signalés, rapport HTML à télécharger. Aucun fichier envoyé."
answer: "Placez le PDF d'origine dans la case Original, la nouvelle version dans la case Version modifiée, puis cliquez sur Comparer. Deux documents de 50 pages ont été comparés en environ 1,2 seconde dans nos tests. Vous voyez chaque mot ajouté, supprimé ou remplacé; les montants, les dates et les négations (pas, sans, jamais, not) qui changent sont signalés, et un rapport HTML peut être téléchargé. Seul le texte est comparé : la mise en page, les images et la mise en forme ne le sont pas, et un PDF numérisé doit d'abord passer par l'OCR."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans limite quotidienne"]
  - ["Où se fait la comparaison", "Dans l'onglet de votre navigateur : pdf.js lit le texte et la comparaison tourne dans un Web Worker. Aucun fichier n'est envoyé à un serveur."]
  - ["Ce qui est comparé", "Les mots des pages. La mise en page, les images, les polices, les couleurs, les positions, les commentaires et les valeurs des champs de formulaire ne le sont pas."]
  - ["Taille maximale", "Aucune limite fixe; la mémoire de l'appareil fait office de plafond. Un rapport de 400 pages comparé à une version de 150 pages a pris 3,3 secondes sur un ordinateur portable dans nos tests. Les téléphones n'ont pas été mesurés; un très gros fichier peut faire recharger l'onglet sur un appareil ancien."]
  - ["Pages", "Le nombre de pages peut différer. Les pages entières ajoutées ou retirées sont repérées d'abord et comptent comme un seul changement."]
  - ["Entrée", "Deux fichiers .pdf avec du texte sélectionnable. Un scan doit passer par OCR PDF; un fichier protégé par mot de passe doit d'abord être déverrouillé."]
  - ["Sortie", "Les résultats à l'écran et, au besoin, un rapport nommé comparaison-original-vs-modifie.html. Vos PDF ne sont pas modifiés."]
  - ["Signalements", "Nombres et montants, dates, négations ajoutées ou retirées, en français et en anglais"]
  - ["Ce qui reste sur votre appareil", "Les deux PDF, le texte extrait et le rapport. Le site n'enregistre qu'une visite anonyme."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée et un premier fichier ajouté (le moteur PDF se charge avec lui)."]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents sur ordinateur; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment comparer deux fichiers PDF gratuitement ?"
    a: "Ouvrez l'outil, déposez l'ancien fichier dans la case Original et le nouveau dans la case Version modifiée, puis cliquez sur Comparer. Les mots supprimés s'affichent en rouge et barrés, les mots ajoutés en vert. C'est gratuit, sans compte, et aucun fichier ne quitte votre appareil."
  - q: "L'outil détecte-t-il les changements de mise en page, d'images ou de mise en forme ?"
    a: "Non. Seul le texte est comparé : un logo déplacé, une nouvelle photo, du gras, une autre police ou couleur, ou un paragraphe décalé plus bas sur la page ne sont pas signalés. Si les mots sont identiques, l'outil l'indique et précise que la mise en page et les images n'ont pas été comparées."
  - q: "Puis-je comparer un PDF numérisé ?"
    a: "Pas directement. Un scan est une image du texte : il n'y a aucun mot à comparer, et l'outil vous le dit. Passez d'abord le scan dans OCR PDF pour ajouter une couche de texte, puis comparez le fichier obtenu. Vérifiez quelques mots, car chaque erreur de l'OCR apparaîtra comme un changement."
  - q: "Que signifient les étiquettes Nombre, Date et Négation ?"
    a: "Elles marquent les changements qui comptent le plus dans un contrat. Nombre : un montant, un pourcentage, une quantité ou un numéro d'article modifié. Date : une date modifiée, comme 12 novembre 2026 ou March 31. Négation : un pas, ne, sans, jamais, aucun ou not ajouté ou retiré."
  - q: "Combien de temps prend une comparaison ?"
    a: "Environ une seconde pour un document courant. Dans nos tests, un contrat de 2 pages a pris 0,5 seconde, deux documents de 50 pages environ 1,2 seconde, et un rapport de 400 pages contre une version de 150 pages 3,3 secondes, lecture du texte des deux fichiers comprise."
  - q: "Mes contrats sont-ils téléversés quelque part ?"
    a: "Non. Les deux PDF sont lus dans l'onglet de votre navigateur et la comparaison tourne dans un processus d'arrière-plan de ce même onglet. Aucune requête réseau ne transporte les fichiers ni leur texte, et le rapport est créé sur place. L'onglet Réseau des outils de développement permet de le vérifier."
  - q: "L'outil repère-t-il un paragraphe déplacé ?"
    a: "Non. Un paragraphe déplacé de la page 2 à la page 5 apparaît comme supprimé à un endroit et ajouté à l'autre. Le texte lui-même n'a pas changé : lisez les deux blocs côte à côte avant de conclure qu'une clause a disparu."
  - q: "Puis-je transmettre le résultat à mon avocat ou à un collègue ?"
    a: "Oui. Télécharger le rapport enregistre un seul fichier HTML qui contient chaque changement dans un tableau, avec la vue intégrée et son contexte. Il n'a ni script ni ressource externe : il s'ouvre dans n'importe quel navigateur, se joint à un courriel et s'imprime proprement."
---
## Comment comparer deux PDF gratuitement ?

Cinq étapes. Pour un bail ou un contrat ordinaire, le résultat s'affiche en une seconde environ.

### Étape 1 : déposez l'ancienne version dans la case Original

L'outil présente deux zones de dépôt côte à côte : **Original** et **Version modifiée**. Déposez la version antérieure, celle que vous avez déjà lue ou signée, sur **Original**, ou cliquez sur la zone pour la choisir. Le nom et la taille du fichier s'affichent; touchez de nouveau la zone pour choisir un autre fichier.

Raccourci : déposez les deux PDF ensemble sur la zone **Original**. Le premier remplit Original, le second remplit Version modifiée.

### Étape 2 : déposez la nouvelle version dans la case Version modifiée

C'est ici qu'on se trompe le plus souvent. Le sens compte : les mots présents seulement dans l'original sont donnés comme supprimés (rouge, barrés), ceux présents seulement dans la version modifiée comme ajoutés (vert). Inversez les fichiers et une nouvelle clause aura l'air d'avoir été retirée. Si le propriétaire ou l'employeur vous a envoyé la révision, ce fichier va dans **Version modifiée**.

### Étape 3 : cliquez sur Comparer

La ligne d'état indique la lecture de chaque fichier, par exemple « Lecture de « bail-2027.pdf » : page 12 sur 50 », puis « Comparaison des mots… ». La carte **Résumé** affiche ensuite les mots ajoutés et supprimés, le nombre de changements et de signalements, les pages comparées et la durée de la comparaison elle-même.

### Étape 4 : lisez d'abord les changements signalés

Activez **Changements signalés seulement** pour ne voir que les changements marqués **Nombre**, **Date** ou **Négation**. Dans un contrat, ce sont eux qui changent ce que vous devez, à quel moment, et ce que vous pouvez ou ne pouvez pas faire. Désactivez ensuite le filtre et lisez le reste.

Deux vues sont offertes. La **Vue intégrée** (par défaut) montre chaque changement avec 12 mots de contexte de part et d'autre, les passages inchangés étant repliés. La **Liste des changements** présente une ligne par changement, avec la page, le type (Ajout, Suppression ou Remplacement) et le texte avant et après. **Afficher tout le texte** déroule le document modifié en entier, changements surlignés, si vous préférez le lire d'un bout à l'autre.

### Étape 5 : téléchargez le rapport

**Télécharger le rapport** enregistre un seul fichier `.html` qui porte le nom des deux documents, par exemple `comparaison-bail-2026-vs-bail-2027.html`. Il contient le résumé, un tableau numéroté de tous les changements avec leur page et leurs signalements, et la vue intégrée. Les lignes signalées ont une bordure rouge à gauche, bien visible à l'impression.

> **Conseil :** à l'écran, la liste s'arrête à 500 changements et la vue intégrée à 300 blocs, pour que la page reste fluide. Le rapport, lui, contient toujours tous les changements.

## Qu'est-ce que l'outil détecte, et qu'est-ce qui lui échappe ?

L'outil lit les mots de chaque page, comme la recherche de votre lecteur PDF, et compare les deux suites de mots. Tout ce qui n'est pas du texte lui est invisible. La note sous les zones de dépôt le dit, et il faut la prendre au pied de la lettre :

| Changement entre les deux versions | Détecté? |
|---|---|
| Un mot, une phrase ou une clause ajouté, retiré ou reformulé | Oui, mot à mot |
| Un montant, un pourcentage ou une date modifié | Oui, avec l'étiquette Nombre ou Date |
| « pas », « sans », « jamais », « not » ajouté ou retiré | Oui, avec l'étiquette Négation |
| Une page entière ajoutée ou retirée | Oui, comme un seul changement |
| Ponctuation modifiée (« avis. » devenu « avis, ») | Oui; la ponctuation reste collée au mot |
| Guillemets droits, courbes ou « », ligatures (ﬁ et fi) | Ignorés, considérés comme identiques |
| Un paragraphe déplacé | Affiché comme supprimé à un endroit et ajouté à un autre |
| Gras, italique, police, taille ou couleur | Non |
| Logo, photo, graphique ou image de signature | Non |
| Texte décalé sur la page, nouvelles marges | Non |
| Valeurs saisies dans les champs, commentaires, notes | Non |

Servez-vous-en pour répondre à « le libellé a-t-il changé? », la question à se poser avant de signer, et non à « la brochure a-t-elle toujours la bonne allure? ».

Certains PDF enregistrent le texte dans un ordre différent de l'ordre de lecture, surtout les mises en page à colonnes, les tableaux et les en-têtes répétés. La comparaison suit l'ordre stocké dans le fichier : un tableau reconstruit peut donc afficher plus de changements qu'une personne n'en compterait, même si le contenu visible semble pareil.

## Comment les nombres, les dates et les négations sont-ils signalés ?

Chaque changement est examiné, avec les quatre mots qui l'entourent, pour trois types de contenu.

**Nombre.** Tout mot modifié qui contient un chiffre et ne fait pas partie d'une date : montants comme 1 250,00 $ ou $4,500.00, pourcentages, quantités, numéros d'article. Une hausse de loyer, un délai qui passe de 30 à 45 jours ou un taux qui passe de 1,5 % à 2 % portent cette étiquette.

**Date.** Dates ISO (2026-11-12), dates numériques (12/11/2026), dates françaises (12 novembre 2026, 1er janvier 2028, avec ou sans accents, et les abréviations comme janv. ou déc.) et dates anglaises (November 12, 2026). Un nom de mois seul n'est pas considéré comme une date, pour éviter les fausses alertes.

**Négation.** Les mots qui inversent le sens d'une phrase, ajoutés ou retirés : ne, n', pas, non, jamais, aucun, aucune et sans en français; not, no, never, without, cannot et les formes en n't en anglais. « Le locataire peut sous-louer » devenu « Le locataire ne peut pas sous-louer » tient en deux mots, et c'est cette étiquette qui l'empêche de se perdre parmi des dizaines de phrases reformulées.

Dans notre paire de contrats de test en français, les 9 changements ont tous été signalés : 12 novembre devenu 19 novembre 2026, 1 250,00 $ devenu 1 450,00 $, 1,5 % devenu 2 %, « est » devenu « n'est pas », « avec » devenu « sans », et « 60 jours » remplacé par « avant le 1er janvier 2028 » (Nombre et Date à la fois). La paire anglaise a donné 8 changements, dont 7 signalés.

## Comment vérifier un bail, une offre ou un avenant avant de signer ?

La méthode ne change pas : la version acceptée va dans Original, celle qu'on vous demande de signer va dans Version modifiée, et vous lisez d'abord les changements signalés.

### Le renouvellement de bail envoyé par le propriétaire

Votre propriétaire vous envoie par courriel un bail « identique à l'an dernier » pour la nouvelle période. Comparez-le avec la copie signée de l'an dernier. Le loyer, les dates de début et de fin et le dépôt ressortent avec les étiquettes Nombre et Date; une nouvelle clause sur les animaux, le tabac ou la sous-location apparaît comme un ajout, avec une étiquette Négation si elle dit ce qui est interdit. Si l'ancien bail n'existe que sur papier, numérisez-le avec [Numériser en PDF](/fr/scan-to-pdf), puis rendez-le interrogeable avec [OCR PDF](/fr/ocr-pdf).

### Une offre d'emploi révisée

Après une négociation sur le salaire ou les vacances, l'employeur envoie une nouvelle lettre d'offre. Comparez-la avec la première pour confirmer que le salaire et la date d'entrée ont changé comme convenu, et que rien d'autre n'a bougé : durée de la période d'essai, préavis, clause de non-sollicitation ou de non-concurrence, semaines de vacances.

### Un avenant de contrat d'un fournisseur ou d'un client

L'avenant est souvent une nouvelle version complète du contrat « avec les modifications discutées ». La comparer avec l'original signé montre toutes les différences, y compris celles dont personne n'a parlé. Téléchargez le rapport et joignez-le à votre réponse : l'autre partie verra exactement quelles lignes vous questionnez.

### Les versions successives d'un document en français

L'outil traite le français comme l'anglais : les dates comme « 1er janvier 2028 », les montants comme « 1 250,00 $ » et les négations comme « ne… pas » sont tous signalés. Il compare deux versions dans la même langue; il ne compare pas un document français avec sa traduction anglaise.

## Comment comparer un PDF numérisé ?

Il faut d'abord y ajouter du texte. Une page numérisée est une image : il n'y a aucun mot à comparer. Quand un fichier compte moins de trois mots par page environ, l'outil s'arrête, indique qu'il ne contient pas de texte sélectionnable et propose le bouton **Ouvrir OCR PDF**.

1. Ouvrez [OCR PDF](/fr/ocr-pdf) et passez-y le scan. Le résultat a la même apparence, avec une couche de texte invisible.
2. Cherchez dans ce fichier deux ou trois mots visibles sur la page, un nom ou un montant, pour confirmer qu'ils ont été bien lus.
3. Comparez le fichier interrogeable avec l'autre version.

Attendez-vous à plus de bruit qu'avec deux fichiers numériques. Chaque mot mal lu par l'OCR, un « 8 » lu comme un « B » ou une virgule tachée, apparaît comme un changement. Vérifiez les changements signalés sur l'original papier avant de vous y fier.

## Quelle est la vitesse, et quelle taille de fichier est acceptée ?

Assez rapide pour que la taille compte rarement sur un ordinateur. L'outil apparie d'abord les pages identiques, si bien que les pages inchangées ne coûtent presque rien, puis compare le texte restant mot à mot avec un algorithme de Myers, de la même famille que ceux qu'utilisent les outils de gestion de versions des programmeurs.

Mesures sur un ordinateur portable, dans Chromium, lecture du texte des deux fichiers comprise :

| Fichiers comparés | Résultat | Durée |
|---|---|---|
| Contrat de 2 pages, deux versions | 8 changements, 7 signalés | 0,5 s |
| Deux documents de 50 pages, environ 27 000 mots chacun | 20 changements, tous signalés | 1,1 à 1,4 s |
| Rapport de 120 pages et le même sans la page 61 | 1 changement, page 61 | 1,7 s |
| Rapport de 400 pages et une version de 150 pages | 2 changements | 3,3 s |
| Deux documents sans lien (120 et 27 pages) | Comparaison page par page, 2 378 changements | 4,5 s |

La mention « Comparé en » de la carte Résumé ne compte que la comparaison des mots, souvent quelques centièmes de seconde; c'est la lecture des PDF qui prend le plus de temps.

Quand deux documents sont trop différents pour être alignés, l'outil les compare page par page et affiche un avis. Le résultat vous apprend surtout qu'il ne s'agit pas de deux versions du même document.

Les téléphones n'ont pas fait partie de ces mesures. Le travail est le même; attendez-vous à ce qu'il soit plus lent et gardez les très gros fichiers pour l'ordinateur.

## Quand ne pas utiliser cet outil ?

- **Vous cherchez des changements visuels.** Une brochure refaite, un bloc de signature déplacé, un logo remplacé, un nouveau graphique : rien de cela n'est détecté. Ouvrez les deux fichiers côte à côte, ou exportez les pages en images avec [PDF en JPG](/fr/pdf-to-jpg) pour les regarder.
- **Les documents sont des scans sans OCR.** Il n'y a rien à comparer tant que la couche de texte n'existe pas.
- **Vous voulez comparer des réponses de formulaire.** Les valeurs saisies dans les champs, les commentaires et les notes ne font pas partie du texte de la page lu par l'outil.
- **Il vous faut des modifications suivies à accepter ou refuser.** L'outil signale les différences sans modifier les fichiers. Pour un document que vous continuerez à modifier, convertissez-le avec [PDF en Word](/fr/pdf-to-word) et utilisez la fonction de comparaison de votre traitement de texte.
- **Vous avez plus de deux versions.** Comparez-les deux à deux : la version 1 avec la 2, puis la 2 avec la 3.
- **Le texte est en chinois, en japonais ou dans une autre langue écrite sans espaces.** Les mots sont séparés aux espaces : ce texte est comparé par longs blocs et le résultat est grossier.
- **Le fichier est protégé par un mot de passe.** Retirez le mot de passe dans l'application qui l'a créé, puis comparez.

## Dépannage

| Problème | Solution | Pourquoi |
|---|---|---|
| « ne contient pas de texte sélectionnable » | Passez le fichier dans OCR PDF, puis comparez le résultat | Un scan ou une photo contient des images de mots, pas des mots |
| « Ce PDF est protégé par un mot de passe » | Retirez le mot de passe dans l'application d'origine, puis réessayez | Le texte est illisible tant que le fichier est verrouillé |
| Les ajouts apparaissent comme des suppressions | Inversez les fichiers : l'ancien dans Original, le nouveau dans Version modifiée | Le sens détermine ce qui est ajouté ou supprimé |
| « Aucune différence de texte » alors que les fichiers diffèrent à l'œil | Le changement touche la mise en page, les images ou la mise en forme | Seuls les mots sont comparés |
| Une section entière apparaît supprimée puis ajoutée | Vérifiez si le paragraphe a été déplacé plutôt que modifié | Un déplacement n'est pas reconnu comme tel |
| Avis « comparés page par page » | Confirmez qu'il s'agit bien de deux versions du même document | Des fichiers très différents ne s'alignent pas mot à mot |
| Beaucoup de petits changements dans un tableau | Relisez le tableau dans les deux PDF; l'ordre interne du texte a changé | Tableaux et colonnes sont comparés dans l'ordre stocké dans le fichier |
| La liste s'arrête à 500 changements | Téléchargez le rapport | L'écran est plafonné; le rapport contient tout |

## En résumé

Comparer des PDF répond bien à une question : les mots ont-ils changé, et où? L'outil trouve chaque mot ajouté, supprimé ou remplacé, signale les montants, les dates et les négations qui comptent dans un bail, une offre ou un avenant, et produit un rapport à transmettre, le tout en une seconde environ et sans téléverser les fichiers. Il ne voit ni la mise en page, ni les images, ni la mise en forme, et un scan doit d'abord passer par [OCR PDF](/fr/ocr-pdf). Ancienne version dans Original, nouvelle dans Version modifiée, et lisez les changements signalés avant de signer.
