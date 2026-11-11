---
title: "Convertir un PDF en Excel gratuitement : tableaux en XLSX"
h1: "Comment convertir un tableau PDF en Excel"
lead: "Extrayez les lignes et colonnes d'un PDF texte vers un .xlsx que vous pouvez trier et additionner. L'extraction se fait dans votre navigateur; rien n'est téléversé."
description: "Convertissez des tableaux PDF en Excel .xlsx gratuitement, dans votre navigateur. Relevés, factures et rapports en PDF texte; les numérisations ne sont pas lues."
answer: "Sélectionnez le PDF, choisissez Aperçu et modification ou Conversion rapide, puis téléchargez le .xlsx. C'est gratuit, sans compte, et le PDF reste sur votre appareil : la position des textes est lue et la feuille de calcul est écrite dans l'onglet de votre navigateur. Ça fonctionne sur les PDF produits par un logiciel (relevés bancaires, factures, rapports), pas sur les pages numérisées, qui ne contiennent aucun texte à extraire."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans limite de conversions"]
  - ["Où se fait l'extraction", "Dans un Web Worker à l'intérieur de l'onglet de votre navigateur : pdf.js lit la position des textes, SheetJS écrit le .xlsx. Rien n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe; limitée par la mémoire. Un relevé de 60 pages (2 à 5 Mo) passe sans problème sur un portable et sur un téléphone. Restez sous ~40 Mo sur un téléphone."]
  - ["Nombre de pages", "Aucun maximum fixé. De 1 à 20 pages s'extraient en 2 à 6 secondes; 200 pages de tableaux denses peuvent prendre 30 à 60 secondes."]
  - ["Entrée", ".pdf avec texte sélectionnable. Les tableaux numérisés ou photographiés sont des images et ne donnent aucune ligne."]
  - ["Sortie", "Un .xlsx à feuille unique contenant toutes les lignes détectées sur toutes les pages, en-têtes en ligne 1. CSV et QBO aussi offerts. Le PDF n'est pas modifié."]
  - ["Ce qui reste sur votre appareil", "Le PDF, les lignes extraites et le fichier téléchargé. Le site n'enregistre qu'une visite anonyme."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un PDF en Excel gratuitement?"
    a: "Ouvrez l'outil PDF en Excel, sélectionnez le PDF, choisissez Conversion rapide pour un .xlsx immédiat ou Aperçu et modification pour vérifier les lignes d'abord, puis téléchargez. Aucuns frais, aucune inscription, aucun téléversement. Le résultat s'ouvre dans Excel, Google Sheets, Numbers et LibreOffice Calc."
  - q: "Pourquoi mon PDF ne donne-t-il aucune ligne ou « Échec de l'extraction »?"
    a: "Presque toujours parce que le PDF est une numérisation. Essayez de sélectionner du texte dans votre lecteur PDF; si c'est impossible, les pages sont des images et il n'y a aucun texte à extraire. Passez le fichier dans un outil d'OCR pour obtenir un PDF interrogeable, puis convertissez celui-là. Le même message apparaît pour les PDF qui contiennent de la prose mais aucune ligne de type tableau."
  - q: "Les montants seront-ils de vrais nombres dans Excel, ou du texte?"
    a: "Activez la Normalisation financière et les colonnes de montant, de solde et de total perdent leurs symboles de dollar et séparateurs de milliers, les négatifs entre parenthèses comme (45,00) devenant -45.00, de sorte qu'Excel les traite comme des nombres. Les dates des colonnes nommées date sont réécrites en AAAA-MM-JJ. Sans cette option, les valeurs sont écrites telles qu'elles paraissent dans le PDF."
  - q: "Gère-t-il un relevé dont les descriptions tiennent sur deux lignes?"
    a: "Oui, grâce à la Fusion multiligne intelligente, activée par défaut. Quand une ligne ne contient qu'une description, sans date ni montant, elle est considérée comme la suite de la ligne précédente et lui est jointe. Désactivez l'option pour les tableaux où une ligne à cellule unique est légitime, comme une colonne de notes."
  - q: "Chaque page du PDF devient-elle sa propre feuille?"
    a: "Non. Toutes les lignes détectées sur toutes les pages sont empilées dans une seule feuille, de sorte qu'un relevé de 12 pages ressort en un tableau continu que vous pouvez trier et totaliser. Si vous avez besoin de pages séparées, isolez d'abord les plages de pages avec Extraire des pages PDF et convertissez chacune."
  - q: "Est-ce sécuritaire de convertir un relevé bancaire ou un T4 ici?"
    a: "Le PDF est lu dans la mémoire de votre navigateur, dans un Web Worker, et la feuille de calcul est construite dans le même onglet; aucune requête n'envoie votre fichier à un serveur. Vous pouvez le confirmer dans l'onglet Réseau des outils de développement pendant la conversion. Numéros de compte, NAS et soldes restent sur votre appareil."
  - q: "Et si j'ai besoin d'un CSV plutôt que d'un fichier Excel?"
    a: "L'étape de téléchargement offre CSV à côté de XLSX, et tout tableur enregistre aussi le .xlsx en CSV : Fichier → Enregistrer sous dans Excel, Fichier → Télécharger dans Google Sheets, Fichier → Exporter vers dans Numbers. Prenez le CSV pour les importations dans un logiciel comptable, et le XLSX pour continuer à travailler dans un tableur."
  - q: "Peut-il lire un tableau dont les en-têtes sont fusionnés?"
    a: "En partie. L'extracteur travaille à partir de la position des textes sur la page; un en-tête qui couvre deux colonnes est donc attribué à l'une d'elles et l'autre colonne reçoit un nom générique. Les lignes de données en dessous sont généralement correctes. Renommez les en-têtes de la ligne 1 après avoir ouvert le fichier; ça prend quelques secondes."
---
## Comment convertir un tableau PDF en Excel gratuitement?

L'outil comporte un seul choix, Aperçu et modification ou Conversion rapide, et deux options qui comptent pour les tableaux financiers. Voici la séquence complète.

### Étape 1 : Vérifiez que le tableau est du texte, pas une image

Ouvrez le PDF et essayez de sélectionner un chiffre du tableau. S'il se surligne, vous avez un PDF texte (tout ce qui sort des services bancaires en ligne, de QuickBooks, de SAP, d'une caisse enregistreuse ou d'Excel lui-même) et l'extraction fonctionnera. Si rien ne se sélectionne, le tableau est une numérisation et cet outil ne renverra aucune ligne. Faites l'OCR d'abord, ou retapez-le; il n'y a pas de contournement.

### Étape 2 : Sélectionnez le PDF

Cliquez sur **Choisir un fichier** ou glissez le PDF dans la zone de dépôt. Le fichier est lu en mémoire et l'extracteur commence l'analyse de la mise en page : où se trouve chaque fragment de texte, lesquels partagent une même ligne de base (une rangée) et lesquels partagent un même bord gauche (une colonne). Un indicateur de progression tourne pendant le traitement des pages.

### Étape 3 : Choisissez Aperçu et modification ou Conversion rapide

Quand l'analyse se termine, on vous demande comment procéder. **Conversion rapide** télécharge le .xlsx immédiatement avec les options par défaut. **Aperçu et modification** affiche d'abord les lignes détectées dans une grille, avec un indice de confiance et les totaux des crédits et débits, pour que vous voyiez si les colonnes sont tombées au bon endroit avant de télécharger. Prenez l'aperçu la première fois que vous convertissez un nouveau type de document; passez à la conversion rapide une fois que vous savez que ça marche.

### Étape 4 : Réglez les options d'extraction

Deux interrupteurs se trouvent au-dessus de l'aperçu. **Fusion multiligne intelligente** (activée par défaut) recolle une description renvoyée sur une deuxième ligne à sa transaction. **Normalisation financière** retire les symboles de dollar et les virgules des colonnes de montant, transforme (123,45) en -123.45 et réécrit les dates en AAAA-MM-JJ. Activez la normalisation pour tout ce que vous comptez additionner; laissez-la désactivée si vous avez besoin du texte d'origine tel qu'imprimé.

C'est ici que naissent la plupart des mauvais résultats : un tableau avec une ligne à cellule unique légitime (une étiquette de sous-total, un titre de section) se fait fusionner à la ligne précédente quand la fusion multiligne est active. Si une ligne a disparu dans l'aperçu, désactivez l'interrupteur et regardez de nouveau.

### Étape 5 : Téléchargez en XLSX

Cliquez sur **XLSX** pour télécharger la feuille de calcul (CSV et QBO sont juste à côté). Le fichier porte le nom de votre PDF. Ouvrez-le, vérifiez que la ligne 1 contient les en-têtes et que la dernière ligne de la dernière page est présente, puis triez, filtrez ou totalisez comme d'habitude.

> **Astuce :** Supprimez les pages couverture, les pages de conditions et les encarts publicitaires avec [Supprimer des pages PDF](/fr/delete-pdf-pages) avant de convertir un relevé. Les pages sans tableau ajoutent des lignes de prose égarées qu'il faudrait autrement nettoyer dans la feuille.

## Qu'arrive-t-il à mon PDF pendant l'extraction?

Le travail s'exécute dans un Web Worker, un fil d'arrière-plan à l'intérieur de l'onglet, pour que la page reste réactive pendant le traitement d'un long PDF. pdf.js ouvre le fichier et renvoie, pour chaque page, chaque élément de texte avec ses coordonnées x et y, sa largeur et sa taille de police. L'extracteur regroupe les éléments qui partagent une position verticale en rangées et ceux qui s'alignent horizontalement en colonnes, décide quelle rangée est l'en-tête et produit un tableau de chaînes. La fusion multiligne et la normalisation financière sont appliquées à ce tableau dans l'onglet. Enfin SheetJS, une bibliothèque de tableur libre, écrit les lignes dans un classeur à une feuille et remet au navigateur un Blob .xlsx à télécharger.

Rien dans cette chaîne ne parle à un serveur. Le PDF entre dans l'onglet par l'API File du navigateur et le .xlsx en sort par un téléchargement; si vous ouvrez les outils de développement à l'onglet Réseau pendant la conversion, vous verrez les scripts et polices de la page, une requête de visite anonyme, et aucune requête transportant votre fichier.

C'est important parce que les PDF que l'on convertit en Excel sont les documents financiers : une année de relevés de compte chèques pour une demande hypothécaire, des relevés de carte de crédit pour une vérification de dépenses, un sommaire T4 ou un relevé 1, des factures de fournisseur, un historique d'acomptes provisionnels de l'ARC ou de Revenu Québec, un relevé de courtage. Un convertisseur en ligne qui les téléverse en garde une copie sur un serveur que vous ne voyez pas. Ici, quand l'onglet se ferme, les seules copies sont celles de votre dossier Téléchargements.

## Quels tableaux PDF se convertissent proprement, et lesquels non?

La qualité de l'extraction dépend de la façon dont le PDF a été produit et de la régularité du tableau. Le principe est simple : les tableaux générés par logiciel, à une ligne par rangée, se convertissent bien; tout ce qui a été conçu pour l'œil humain plutôt que pour une machine se convertit partiellement.

| Origine du PDF | Résultat typique | Nettoyage requis |
|---|---|---|
| Relevé bancaire ou de carte de crédit téléchargé des services en ligne | Toutes les transactions en ordre; descriptions fusionnées; montants numériques avec la normalisation | Supprimer les lignes d'en-tête et de pied qui se répètent à chaque page; 1 à 2 minutes |
| Facture ou bon de commande d'un logiciel comptable | Articles corrects; le bloc des totaux peut tomber en lignes supplémentaires | Retirer les lignes de totaux; moins d'une minute |
| Tableau exporté d'Excel ou de Google Sheets en PDF | Quasi exact : en-têtes, colonnes et valeurs en place | Régler les formats de nombre |
| Rapport avec un tableau par page et de la prose entre | Lignes du tableau plus quelques phrases en lignes à cellule unique | Filtrer les lignes n'ayant qu'une cellule remplie |
| Tableau avec texte renvoyé dans plusieurs colonnes | Lignes scindées; la fusion ne recolle que les colonnes de type description | Recollage manuel des autres colonnes |
| Tableau à en-têtes fusionnés ou sur deux rangées | Données correctes; en-têtes attribués à une colonne chacun | Renommer la ligne 1 |
| Colonnes séparées seulement par des bandes de couleur, sans espace | Des colonnes voisines peuvent se souder | Utiliser Convertir (texte en colonnes) dans Excel |
| Relevé numérisé ou photographié | Aucune ligne; Échec de l'extraction | OCR d'abord, puis conversion |
| Pages pivotées | Colonnes dans le désordre | Redresser d'abord avec Pivoter PDF |

En règle générale, un relevé bancaire de 12 pages et 300 transactions s'extrait en 4 à 8 secondes et se nettoie en trois minutes environ pour obtenir une feuille prête au tableau croisé. Le même relevé retapé à la main prend une heure et demie, et c'est le taux d'erreur de saisie sur les montants que vous évitez.

Si c'est un CSV que votre logiciel de comptabilité attend plutôt qu'un classeur Excel, vous n'avez pas besoin d'un autre outil : l'étape de téléchargement offre directement le CSV, et Excel, Numbers et Google Sheets enregistrent chacun le .xlsx en CSV depuis leur menu Fichier.

## Comment convertir un PDF en Excel sur iPhone, Android, Mac ou Windows?

L'extracteur est le même sur tous les appareils. Les différences tiennent au choix du fichier et à ce que vous avez déjà d'installé.

**iPhone et iPad.** Ouvrez la page dans Safari, touchez la zone de dépôt et choisissez le relevé dans Fichiers. Le .xlsx arrive dans Fichiers → Téléchargements et s'ouvre dans Numbers (gratuit), Excel pour iOS ou Google Sheets. Un relevé de 60 pages passe bien sur un iPhone récent. iOS n'a aucune extraction de tableaux intégrée; Numbers n'ouvre un PDF qu'en image.

**Android.** Chrome gère le sélecteur; le fichier s'enregistre dans Téléchargements et s'ouvre dans Sheets ou Excel pour Android. Un téléphone de 3 Go de mémoire ou plus traite des relevés de 100 pages.

**Mac.** Aperçu ne peut pas extraire de tableaux et Numbers n'importe pas les PDF. Excel pour Mac n'a pas non plus l'importation PDF de la version Windows. Cette page est l'option pratique sur Mac, à moins de posséder Acrobat Pro, dont l'exportation vers feuille de calcul est bonne sur les tableaux complexes.

**Windows.** Excel pour Microsoft 365 offre Données → Obtenir des données → À partir d'un fichier → À partir d'un PDF, qui détecte les tableaux et vous laisse en choisir un. C'est solide sur les rapports à plusieurs tableaux et ça vaut la peine si vous l'avez. Il ne fusionne pas les descriptions renvoyées et passe par Power Query; pour un relevé à convertir rapidement, l'outil dans le navigateur est plus rapide; pour un rapport annuel à 40 tableaux, l'importateur d'Excel est meilleur.

**Chromebook.** Fonctionne dans Chrome; le .xlsx s'ouvre dans Google Sheets depuis Téléchargements ou Drive. Le Fichier → Importer de Sheets ne lit pas les PDF.

## Quand ne pas utiliser cet outil?

- **Relevés numérisés.** L'échec le plus fréquent. Faites d'abord l'OCR avec Acrobat, le logiciel de votre numériseur ou une application d'OCR, puis convertissez le résultat interrogeable.
- **Tableaux où la mise en page porte le sens.** Sous-comptes en retrait dans une balance de vérification, colonnes entre crochets dans un état financier, ou annexe aux cellules réparties sur plusieurs rangées. Les données sortent; la hiérarchie, non.
- **PDF qui mélangent plusieurs tableaux différents.** Un rapport annuel de 90 pages avec 40 tableaux de formes différentes produit une longue feuille unique dont la rangée d'en-tête ne convient qu'au premier tableau. Isolez les pages voulues avec [Extraire des pages PDF](/fr/extract-pdf-pages) et convertissez chaque plage.
- **Formulaires plutôt que tableaux.** Une déclaration T1 ou TP-1 ou une demande hypothécaire comporte des cases étiquetées, pas des rangées et des colonnes. Convertissez-la avec [PDF en Word](/fr/pdf-to-word) si c'est le texte qu'il vous faut.
- **Relevés protégés par mot de passe.** Certaines banques verrouillent les PDF avec votre date de naissance ou votre numéro de compte. Retirez d'abord le mot de passe avec Déverrouiller PDF.
- **Formules et mise en forme.** La sortie ne contient que des valeurs. Rien dans un PDF n'enregistre comment un total a été calculé; la feuille n'a donc aucune formule; ajoutez-les vous-même.

## Dépannage

| Problème | Solution | Pourquoi ça marche |
|---|---|---|
| Échec de l'extraction, ou zéro transaction trouvée | Vérifiez si le texte se sélectionne dans le PDF; faites l'OCR sinon | Les pages numérisées n'ont aucun élément de texte à positionner |
| Deux colonnes sont soudées dans une cellule | Ouvrez le .xlsx et utilisez Données → Convertir avec un espace ou un délimiteur personnalisé | Des colonnes sans espace horizontal dans le PDF ne peuvent pas être séparées par position |
| Une transaction manque mais sa description est collée à la ligne précédente | Désactivez la Fusion multiligne intelligente et reconvertissez | Une ligne ne contenant qu'une description est traitée comme une suite; sans fusion, elle reste séparée |
| Les montants sont alignés à gauche et SOMME donne 0 | Activez la Normalisation financière, ou dans Excel sélectionnez la colonne et faites Données → Convertir → Terminer | Les valeurs restent du texte tant que les symboles monétaires et les virgules ne sont pas retirés |
| Les dates sortent en texte dans plusieurs formats | Activez la Normalisation financière | Les dates reconnues sont réécrites en AAAA-MM-JJ, que tout tableur lit comme une date |
| Des en-têtes de page comme « Période du relevé » apparaissent toutes les 40 lignes | Triez par la colonne de date, puis supprimez le bloc de lignes sans date | Les éléments répétés de page sont aussi du texte; le tri les regroupe et une seule suppression les élimine |
| Les montants négatifs s'affichent en (45,00) | Activez la Normalisation financière | Les valeurs entre parenthèses sont réécrites avec un signe moins |
| Les lignes sont dans le désordre sur des pages pivotées | Passez le PDF dans Pivoter PDF pour redresser les pages, puis convertissez | La détection des rangées suppose des lignes de texte de gauche à droite sur une page droite |

## Que faire avec la feuille de calcul?

- [Excel en PDF](/fr/excel-to-pdf) une fois les données nettoyées et totalisées, pour les renvoyer sous forme de document fixe.
- [Extraire des pages PDF](/fr/extract-pdf-pages) pour isoler les pages qui contiennent le tableau avant de convertir un long rapport.
- [Supprimer des pages PDF](/fr/delete-pdf-pages) pour retirer d'abord les pages couverture et de conditions d'un relevé.
- [PDF en Word](/fr/pdf-to-word) quand le document est surtout du texte et que le tableau est accessoire.

## En résumé

PDF en Excel transforme la position des textes d'un PDF généré par logiciel en rangées et colonnes, recolle les descriptions renvoyées, nettoie au besoin les montants et les dates en nombres et écrit un .xlsx à une feuille, le tout dans votre navigateur. Sur les relevés bancaires, les factures et les tableaux exportés, il épargne une heure de saisie par quelques centaines de lignes et ne laisse aucune copie de vos données financières ailleurs que dans votre dossier Téléchargements. Il ne lit pas les numérisations et aplatit les mises en page hiérarchiques. Vérifiez que le texte se sélectionne, utilisez l'aperçu la première fois et activez la Normalisation financière avant d'additionner quoi que ce soit.
