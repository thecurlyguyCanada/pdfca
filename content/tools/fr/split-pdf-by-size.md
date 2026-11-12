---
title: "Diviser un PDF par taille : parties de 4 Mo pour IRCC, gratuit"
h1: "Diviser un PDF par taille de fichier"
lead: "Choisissez une taille maximale, comme 4 Mo pour IRCC ou 20 Mo pour Outlook, et coupez votre PDF en parties qui la respectent. Tout se fait dans votre navigateur; rien n'est téléversé."
description: "Divisez un PDF en parties sous une limite, gratuitement : 4 Mo pour IRCC, 20 Mo Outlook, 25 Mo Gmail ou au choix. Sans perte, chaque partie mesurée."
answer: "Ajoutez le PDF, choisissez une taille maximale par partie (4 Mo, pour IRCC, est présélectionné) et cliquez sur Diviser le PDF. Une numérisation de 200 pages et 46,6 Mo a donné 12 parties de moins de 4 Mo en 1,4 seconde lors de nos essais. Chaque partie est enregistrée et mesurée avant d'être retenue : elle respecte donc vraiment la limite, en comptant 1 Mo comme 1 000 000 d'octets. Les pages sont copiées telles quelles, sans perte. Seule exception : une page plus lourde que la limite forme sa propre partie, avec un avertissement, et doit passer par Compresser un PDF."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait le travail", "Dans l'onglet de votre navigateur, avec pdf-lib, et JSZip pour regrouper les parties. Le PDF n'est jamais envoyé à un serveur."]
  - ["Tailles proposées", "1, 2, 4 (IRCC), 5, 10, 20 (Outlook) et 25 Mo (Gmail), ou Autre, de 0,1 à 2 000 Mo. 1 Mo vaut 1 000 000 d'octets, la lecture la plus stricte."]
  - ["Taille maximale du fichier", "Aucun plafond fixe; la mémoire de votre appareil fait la limite. Une numérisation de 46,6 Mo et 200 pages a été divisée en 1,4 seconde lors de nos essais sur ordinateur. Sur un vieux téléphone, un très gros fichier peut faire recharger l'onglet."]
  - ["Pages", "Aucun maximum fixé. Un rapport de 400 pages a été divisé en 3,4 secondes lors de nos essais."]
  - ["Entrée", "Un seul fichier .pdf. Un PDF protégé par mot de passe doit d'abord être ouvert et réenregistré sans mot de passe."]
  - ["Sortie", "fichier-partie1.pdf, fichier-partie2.pdf… dans un fichier-divise.zip, ou chaque partie séparément. Un fichier qui tient en une partie se télécharge en un seul PDF."]
  - ["Qualité", "Sans perte : pages, polices et images sont copiées octet pour octet. Rien n'est recompressé."]
  - ["Non repris dans les parties", "Signets, champs de formulaire remplissables, pièces jointes, et liens qui mènent à une page d'une autre partie"]
  - ["Ce qui reste sur votre appareil", "L'original, les parties et vos réglages. Le site n'enregistre qu'une visite anonyme de la page."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée et votre fichier ajouté (le moteur PDF se charge avec le premier fichier)."]
  - ["Navigateurs", "Versions actuelles de Chrome, Edge, Firefox et Safari sur ordinateur; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment diviser gratuitement un PDF en fichiers plus petits selon la taille?"
    a: "Ouvrez Diviser un PDF par taille, ajoutez le fichier, choisissez une taille maximale par partie, par exemple 4 Mo, et cliquez sur Diviser le PDF. Téléchargez le ZIP ou chaque partie séparément. C'est gratuit, sans compte ni filigrane, et le PDF ne quitte jamais votre appareil."
  - q: "Chaque partie respecte-t-elle vraiment la limite choisie?"
    a: "Oui, à une exception près. Chaque partie candidate est réellement enregistrée et mesurée, et l'outil garde la plus longue suite de pages qui tient. L'exception : une page qui dépasse à elle seule la limite forme sa propre partie, signalée par un avertissement."
  - q: "Un mégaoctet vaut-il ici 1 000 000 ou 1 048 576 octets?"
    a: "La limite utilise 1 000 000 d'octets, la plus stricte des deux définitions, si bien qu'une partie passe quelle que soit la façon de compter du site où vous la téléversez. La liste affiche les tailles comme votre ordinateur, alors une partie sous 4 Mo apparaît à 3,81 Mo ou moins."
  - q: "La division par taille réduit-elle la qualité?"
    a: "Non. Les pages sont copiées exactement telles quelles, mêmes polices et mêmes images, vérifiées octet pour octet lors de nos essais. La division ne réduit jamais une page; si une page est trop lourde, c'est Compresser un PDF qui échange de la qualité contre de la taille."
  - q: "Pourquoi le total des parties dépasse-t-il la taille de l'original?"
    a: "Les polices et les images communes à plusieurs pages sont stockées une fois dans l'original, mais doivent être incluses dans chaque partie qui les utilise. Le total peut donc grossir. Il peut aussi diminuer, car les données inutiles sont écartées : un rapport de 369 Ko a donné trois parties totalisant 270 Ko."
  - q: "Qu'arrive-t-il aux signets, aux champs et aux liens?"
    a: "Les signets et les champs remplissables ne sont pas repris; les champs montrent encore ce qu'on y a tapé, mais ne sont plus modifiables. Les liens entre pages ne fonctionnent que si les deux pages tombent dans la même partie; les autres sont retirés."
  - q: "Puis-je choisir où commence chaque partie?"
    a: "Non. L'outil fixe les points de coupe selon la limite de taille et garde les pages dans l'ordre. Pour couper aux chapitres ou à des numéros de page précis, utilisez Diviser un PDF, qui coupe par plages de pages plutôt que par taille."
  - q: "Une partie de 25 Mo passera-t-elle dans Gmail?"
    a: "Probablement pas. Les services de courriel comptent les pièces jointes après encodage, ce qui ajoute environ un tiers : un fichier de 25 Mo pèse alors près de 33 Mo dans le message. Pour Gmail, une taille personnalisée d'environ 18 Mo garde chaque pièce jointe encodée sous la limite de 25 Mo."
---
## Comment diviser un PDF par taille gratuitement?

Quatre étapes. La division elle-même prend en général une ou deux secondes, même pour une grosse numérisation.

### Étape 1 : Ajoutez le PDF

Déposez le fichier sur **Déposez votre PDF ici** ou cliquez pour le choisir. La fiche affiche le nom, la taille et le nombre de pages, avec **Choisir un autre fichier** pour en changer. Si le fichier respecte déjà la limite choisie, l'outil le dit, par exemple « Ce PDF fait 24 Ko, soit déjà moins de 1 Mo. Inutile de le diviser. »

### Étape 2 : Choisissez la taille maximale par partie

Sous **Taille maximale par partie**, choisissez **1 Mo**, **2 Mo**, **4 Mo · IRCC** (présélectionné), **5 Mo**, **10 Mo**, **20 Mo · Outlook** ou **25 Mo · Gmail**. Pour une autre valeur, choisissez **Autre** et tapez un nombre entre 0,1 et 2000; « 1,5 » comme « 1.5 » fonctionnent.

C'est l'étape où l'on se trompe pour le courriel. L'astuce sous les boutons l'explique : les services de courriel comptent les pièces jointes après encodage, ce qui ajoute environ un tiers. Une partie pile à la limite sera refusée. Prenez la taille inférieure, ou une taille personnalisée d'environ les trois quarts de la limite.

### Étape 3 : Cliquez sur Diviser le PDF

Le bouton affiche « Division en cours… » et une ligne suit l'avancement, par exemple « 40 pages sur 200 placées · 3 parties jusqu’ici ». Puis « Préparation du téléchargement… » pendant le regroupement des parties.

### Étape 4 : Vérifiez la liste et téléchargez

La fiche de résultat affiche `fichier-divise.zip` (« ZIP de 12 PDF ») avec un bouton **Télécharger**. Dessous, chaque partie est listée avec son nom, ses pages et sa taille, par exemple « p. 1 à 17 · 3,72 Mo », et son propre bouton de téléchargement, pratique quand un portail demande un fichier par envoi. Les parties s'appellent `fichier-partie1.pdf`, `fichier-partie2.pdf`, et ainsi de suite (`partie01` dès qu'il y en a dix ou plus). Si tout tient en une partie après l'enregistrement, vous obtenez un seul PDF, sans ZIP.

## Comment l'outil s'assure-t-il que chaque partie respecte la limite?

On ne respecte pas une limite de taille en devinant d'après le nombre de pages : une page de photo peut peser plus que cinquante pages de texte. L'outil mesure donc. Pour chaque partie, il estime combien de pages devraient tenir, construit cette partie comme un vrai PDF et vérifie sa taille enregistrée, puis ajoute ou retire des pages jusqu'à trouver la plus longue suite qui tient encore. Chaque partie téléchargée est le fichier même qui a été mesuré.

Les pages gardent leur ordre et sont copiées octet pour octet : aucune recompression, aucune perte de qualité. Le titre et l'auteur du document sont copiés dans chaque partie. Voici ce que cela a donné avec nos fichiers d'essai :

| Fichier | Limite | Résultat |
|---|---|---|
| Numérisation de 200 pages, 46,6 Mo | 4 Mo | 12 parties juste sous 4 Mo, en 1,4 seconde |
| Numérisation couleur de 6 pages, 10,6 Mo | 5 Mo | 3 parties de 2 pages, environ 3,5 Mo chacune |
| Rapport de 16 pages, 4,2 Mo | 1 Mo | 8 parties de 2 pages, environ 525 Ko chacune |
| Numérisation à 300 ppp de 14 pages, 45,2 Mo | 4 Mo | 14 parties d'une page, environ 3,2 Mo chacune, en 1,5 seconde |
| PDF de photos de 8 pages, 32,5 Mo | 2 Mo | 8 parties d'une page, toutes au-dessus de 2 Mo, avec un avertissement |

La dernière ligne est l'exception. Quand une page dépasse à elle seule la limite, la division n'y peut rien : cette page forme sa propre partie, la ligne est surlignée en orangé et un avertissement comme « La page 7 dépasse à elle seule 4 Mo » mène à [Compresser un PDF](/fr/compress-pdf). Compressez le fichier, puis divisez de nouveau.

## Comment diviser un PDF pour la limite de 4 Mo d'IRCC?

Le portail de demande en ligne d'IRCC accepte d'ordinaire des fichiers d'environ 4 Mo au plus par document, et des relevés bancaires, un passeport ou des preuves d'emploi numérisés dépassent vite ce seuil.

1. Gardez **4 Mo · IRCC** et cliquez sur **Diviser le PDF**.
2. Vérifiez d'abord la case de téléversement. Si elle accepte plusieurs fichiers, téléversez les parties dans l'ordre; la numérotation les garde en place.
3. Si elle n'accepte qu'un fichier, la division n'est pas le bon outil. Compressez plutôt le document pour qu'un seul fichier tienne.

Comme chaque partie fait moins de 4 000 000 d'octets, elle passe la limite que le portail compte en mégaoctets décimaux ou binaires. Une numérisation de 200 pages et 46,6 Mo a donné 12 parties de 3,73 à 3,98 millions d'octets lors de nos essais.

## Exemples d'utilisation

### Un long PDF au-delà des 20 Mo d'Outlook.com

Choisissez **20 Mo · Outlook**, ou mieux une taille personnalisée de 15 Mo pour tenir compte de l'encodage. Envoyez chaque partie dans un courriel distinct : deux parties dans un même message comptent ensemble.

### Six mois de relevés pour un courtier hypothécaire

Les relevés téléchargés en un seul gros PDF dépassent souvent la limite du portail ou du courriel d'un courtier. Divisez à 10 Mo et envoyez les parties dans l'ordre, numérotées partie1, partie2, etc.

### Un document numérisé pour un portail d'emploi limité à 2 Mo

Bien des portails de candidature plafonnent les envois à 2 Mo. Si les parties sortent en pages seules signalées au-dessus de la limite, c'est la résolution de la numérisation qui pose problème; compressez d'abord.

### Un dépôt au Tribunal administratif du logement ou à une cour

Les systèmes de dépôt électronique fixent souvent un maximum par fichier. Divisez à ce chiffre et vérifiez que chaque partie commence où vous l'attendez, puisque les coupes suivent la taille, pas les sections.

## Quand ne devriez-vous pas utiliser cet outil?

- **Quand le portail n'accepte qu'un fichier.** La division en donne plusieurs. Utilisez [Compresser un PDF](/fr/compress-pdf) pour alléger un seul fichier.
- **Pour couper aux chapitres ou à des pages choisies.** Utilisez [Diviser un PDF](/fr/split-pdf), qui coupe par plages de pages.
- **Quand une seule page dépasse la limite.** L'outil ne réduit jamais une page. Compressez d'abord.
- **Quand les signets ou les champs remplissables comptent.** Ni les uns ni les autres ne passent dans les parties.
- **Pour réunir des parties plus tard.** C'est le rôle de [Fusionner des PDF](/fr/merge-pdf).
- **Pour un PDF protégé par mot de passe.** Ouvrez-le avec son mot de passe dans votre lecteur, enregistrez ou imprimez une copie non protégée, puis divisez cette copie.

## Dépannage

| Problème | Solution | Pourquoi |
|---|---|---|
| Une partie est surlignée en orangé avec un avertissement | Compressez le PDF, puis divisez de nouveau | Cette page dépasse à elle seule la limite; la division ne réduit pas une page |
| Un courriel est refusé alors que la partie respecte la limite | Choisissez une taille plus petite, environ les trois quarts de la limite du courriel | Les pièces jointes grossissent d'environ un tiers à l'encodage |
| Le total des parties dépasse l'original | Rien à corriger; ou compressez l'original avant de diviser | Les polices et images communes sont copiées dans chaque partie qui les utilise |
| Signets ou champs absents des parties | Gardez l'original pour ceux-ci; remplissez et aplatissez les formulaires avant | Signets et champs ne sont pas repris dans les parties |
| « Entrez une taille entre 0,1 et 2000 Mo. » | Tapez un nombre dans cet intervalle | Les tailles hors de 0,1 à 2 000 Mo sont refusées |
| « Ce PDF est protégé par un mot de passe » | Ouvrez-le avec le mot de passe, enregistrez une copie non protégée, puis divisez | Un fichier chiffré ne peut pas être lu avant d'être ouvert |
| Message « déjà moins de » | Téléversez le fichier tel quel | Il respecte déjà la limite choisie |

## En résumé

Diviser un PDF par taille coupe un PDF en parties consécutives qui respectent chacune la limite choisie, mesure chaque partie avant de la garder et copie les pages sans perte, le tout dans votre navigateur. Prévoyez l'encodage du courriel, vérifiez si la case de téléversement accepte plus d'un fichier, et compressez d'abord quand une seule page est trop lourde.
