---
title: "Convertir OFX en Excel gratuitement : Desjardins, QFX, CSV"
h1: "Convertir OFX en Excel (ou en CSV)"
lead: "Ouvrez le fichier .ofx ou .qfx de votre banque dans Excel ou en CSV : une ligne par transaction, de vraies dates, des montants numériques. Le fichier est lu dans votre navigateur et n'est jamais téléversé."
description: "Convertissez un fichier OFX ou QFX de votre banque en Excel ou CSV, gratuitement et dans votre navigateur. Compatible Desjardins et Tangerine. Aucun envoi."
answer: "Sélectionnez votre fichier .ofx ou .qfx, vérifiez les transactions dans l'aperçu, puis cliquez sur Excel (ou CSV, QBO, QIF). Vous obtenez une ligne par transaction avec les colonnes Date, Description, Memo, Amount, Type et Reference; les dates sont de vraies dates Excel et les montants, des nombres que vous pouvez additionner. C'est gratuit, sans compte, et le fichier bancaire est lu dans l'onglet de votre navigateur, jamais téléversé."
updated: 2026-11-25
limits:
  - ["Prix", "Gratuit, sans compte, sans limite de fichiers"]
  - ["Où se fait la conversion", "Dans l'onglet de votre navigateur. Le texte OFX est analysé en JavaScript et le .xlsx est écrit par ExcelJS sur votre appareil. Rien n'est envoyé à un serveur."]
  - ["Fichiers acceptés", ".ofx, .qfx et .qbo; OFX 1.x (SGML, les fichiers « OFXHEADER:100 ») et OFX 2.x (XML). Comptes bancaires (chèques, épargne) et relevés de carte de crédit."]
  - ["Fichiers non acceptés", "Relevés de placement et de courtage (blocs INVSTMTRS), relevés PDF, fichiers CSV (ouvrez-les directement dans Excel)"]
  - ["Fichier Excel produit", "Une feuille Transactions : Date, Description, Memo, Amount, Type, Reference. Dates Excel (aaaa-mm-jj), montants numériques, ligne d'en-tête figée."]
  - ["Autres sorties", "CSV (UTF-8 avec BOM pour garder les accents), QBO pour QuickBooks (accents ramenés aux lettres simples, car son en-tête est en ASCII), QIF pour les logiciels de type Quicken"]
  - ["Plusieurs comptes dans un fichier", "Un sélecteur affiche chaque compte (type et quatre derniers chiffres); chaque export porte sur le compte choisi"]
  - ["Taille du fichier", "Aucun plafond fixe. L'OFX est du texte : même des milliers de transactions donnent un petit fichier converti en moins d'une seconde."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
faq:
  - q: "Comment convertir un fichier OFX en Excel?"
    a: "Téléchargez vos transactions depuis vos services bancaires en ligne au format OFX (souvent appelé Microsoft Money) ou QFX (Quicken), ouvrez cette page, sélectionnez le fichier et cliquez sur Excel. Le classeur se télécharge avec une ligne par transaction, la date en première colonne et des montants numériques. Rien à installer, rien de téléversé."
  - q: "Comment ouvrir un relevé OFX de Desjardins dans Excel?"
    a: "Dans AccèsD, depuis un navigateur, ouvrez l'onglet de recherche des transactions, choisissez de télécharger l'historique des transactions, sélectionnez la période, les comptes et le format OFX. Déposez ensuite le fichier sur cette page et cliquez sur Excel. Si vous choisissez CSV chez Desjardins, le fichier s'ouvre déjà dans Excel sans conversion."
  - q: "Le convertisseur lit-il aussi les fichiers QFX?"
    a: "Oui. Un fichier QFX est un fichier OFX auquel Intuit ajoute quelques balises et une autre extension; le convertisseur le lit de la même façon. Les fichiers QBO pour QuickBooks sont aussi de l'OFX et s'ouvrent également. Les balises propres à Intuit sont ignorées."
  - q: "Excel peut-il ouvrir un fichier OFX sans conversion?"
    a: "Pas de façon utile. Excel n'a aucun importateur OFX. Les fichiers OFX 2.x sont du XML, donc Power Query peut les charger, mais il faut déplier des tableaux imbriqués à la main. Les fichiers OFX 1.x, encore produits par bien des banques, sont du SGML à balises non fermées et échouent comme XML."
  - q: "Les accents des noms de commerçants sont-ils conservés?"
    a: "Oui. Les anciens fichiers OFX sont souvent écrits en Windows-1252; le convertisseur le détecte et décode correctement é, è, à et ç. L'export CSV commence par une marque d'ordre d'octets (BOM) pour qu'Excel affiche ces accents quand vous double-cliquez sur le fichier."
  - q: "Est-ce sécuritaire de convertir mon fichier bancaire sur un site Web?"
    a: "Sur cette page, le fichier est lu par JavaScript dans l'onglet de votre navigateur et la feuille de calcul y est générée. Aucune requête ne transporte vos transactions; vous pouvez le vérifier dans l'onglet Réseau des outils de développement pendant la conversion. Numéros de compte et soldes restent sur votre appareil."
  - q: "Pourquoi mes achats par carte de crédit sont-ils négatifs?"
    a: "Le convertisseur reprend chaque montant avec le signe écrit par votre banque. En OFX, les achats sur une carte de crédit sont normalement négatifs et les paiements positifs, du point de vue du titulaire. Multipliez la colonne par -1 dans Excel si vous préférez des achats positifs."
---
## Comment convertir un fichier OFX en Excel?

L'opération prend environ une minute, surtout passée dans vos services bancaires en ligne. Le convertisseur lui-même se résume à une sélection de fichier et un clic.

### Étape 1 : Téléchargez vos transactions en OFX ou QFX

Dans vos services bancaires en ligne, trouvez la page qui télécharge l'historique des transactions (elle est d'habitude distincte de celle des relevés PDF). Choisissez le compte, la période et le format. Les banques écrivent rarement « OFX »; elles nomment le logiciel visé. **Microsoft Money** veut dire OFX, **Quicken** veut dire QFX, **QuickBooks** veut dire QBO. Les trois fonctionnent ici. Si on ne vous offre que PDF et CSV, prenez le CSV : il s'ouvre déjà dans Excel sans conversion.

### Étape 2 : Sélectionnez le fichier sur cette page

Cliquez sur **Sélectionner fichier OFX** ou glissez le fichier dans la zone de dépôt. Le fichier est lu comme du texte dans votre navigateur. Le convertisseur détecte s'il s'agit de l'ancienne forme SGML (qui commence par `OFXHEADER:100`) ou de la forme XML récente (qui commence par `<?xml` ou `<?OFX`), détermine le jeu de caractères pour que les accents restent lisibles et repère chaque compte bancaire et chaque carte de crédit du fichier.

### Étape 3 : Vérifiez l'aperçu

Un tableau affiche chaque transaction avec sa date, sa description, son montant et une étiquette Crédit ou Débit. Au-dessus, quatre cases donnent le total des crédits, le total des débits, la variation nette et la période couverte. Comparez la période avec celle demandée à la banque : si elle est plus courte, c'est l'export de la banque qui était limité, pas la conversion. Si le fichier contient plusieurs comptes, un sélecteur apparaît; choisissez celui que vous voulez.

### Étape 4 : Téléchargez en Excel, CSV, QBO ou QIF

Cliquez sur **Excel** pour un classeur .xlsx, sur **CSV** pour un fichier texte accepté par n'importe quel tableur ou logiciel comptable, sur **QBO** pour QuickBooks ou sur **QIF** pour les anciens logiciels de finances personnelles. Le téléchargement porte le nom de votre fichier : `releve.ofx` devient `releve.xlsx`. Cliquez sur **Nouveau fichier** pour convertir un autre compte.

> **Astuce :** Téléchargez si possible chaque compte séparément. Un fichier par compte garde les feuilles propres, et la colonne Reference permet de repérer une transaction présente dans deux téléchargements dont les périodes se chevauchent.

## Quelles banques canadiennes offrent l'OFX, le QFX ou le CSV?

Les options changent quand une banque refait ses services en ligne. Ce tableau ne reprend donc que ce que les pages d'aide des banques indiquaient lors de notre vérification en novembre 2026. Quand nous n'avons pas pu confirmer un format auprès de la banque elle-même, le tableau le dit plutôt que de deviner.

| Banque | Formats indiqués par la banque | Où le trouver (termes de la banque) |
|---|---|---|
| Desjardins (AccèsD, particuliers) | OFX, CSV | Connectez-vous depuis un navigateur Web, ouvrez l'onglet de recherche des transactions, choisissez le lien de téléchargement de l'historique des transactions, puis la période, les comptes ou cartes et le format. Non offert dans l'application mobile. |
| Tangerine | QFX (Quicken), Microsoft Money (OFX), CSV pour Excel | Sur le site tangerine.ca (pas l'application) : la section des transactions, puis le bouton de téléchargement (**Transactions**, **Download Transactions** dans l'aide en anglais) |
| CIBC | Le téléchargement est offert selon le logiciel de gestion financière; la page de la CIBC ne nomme pas les formats | Depuis l'accueil des services bancaires en ligne, menu **More**, option **Download Transactions** (libellés de l'aide en anglais), puis le compte, la période et le logiciel |
| Banque Nationale (services en ligne pour entreprises) | PDF, CSV, QBO/OFX/QFX | Sélectionnez le compte, filtrez au besoin, cliquez sur le bouton d'exportation et choisissez le format |
| Banque Nationale (particuliers), RBC, TD, BMO, Banque Scotia et autres | Non confirmé par les pages d'aide de la banque | Cherchez une option de téléchargement des transactions dans vos services en ligne et une option Quicken, Microsoft Money ou tableur |

Deux constantes d'une banque à l'autre. D'abord, le téléchargement de transactions couvre en général une période limitée, souvent les derniers mois plutôt que des années : archivez vos fichiers au fur et à mesure si vous avez besoin d'une année d'imposition complète. Ensuite, le relevé mensuel PDF et le téléchargement de transactions sont deux documents différents : le relevé est le document officiel, le téléchargement, ce sont les données. Si vous n'avez que des relevés PDF, utilisez plutôt [Convertir PDF en Excel](/fr/pdf-to-excel).

## À quoi ressemble le fichier Excel?

Voici ce que le convertisseur écrit, colonne par colonne. Les lignes ci-dessous sont un exemple, pas de vraies données; votre fichier aura les descriptions de votre banque. Les en-têtes sont en anglais, comme dans la plupart des logiciels comptables qui importent ces colonnes.

| Date | Description | Memo | Amount | Type | Reference |
|---|---|---|---|---|---|
| 2026-11-03 | Hydro-Québec | | -45.67 | DEBIT | 202611030001 |
| 2026-11-04 | Paie employeur | Dépôt direct | 1500.00 | CREDIT | 202611040002 |
| 2026-11-06 | Épicerie | Paiement par carte | -82.14 | DEBIT | 202611060003 |

- **Date** provient de la date de comptabilisation de la transaction (`DTPOSTED`) et est enregistrée comme une vraie date Excel affichée en aaaa-mm-jj : vous pouvez trier, filtrer par mois et bâtir des tableaux croisés dynamiques. L'heure et le fuseau horaire ajoutés par la banque sont retirés.
- **Description** est le nom du bénéficiaire (`NAME`, ou `PAYEE` si la banque utilise ce champ; à défaut, le mémo).
- **Memo** est le détail supplémentaire de la banque, quand il y en a un.
- **Amount** est un nombre, négatif pour l'argent qui sort et positif pour l'argent qui entre, tel qu'écrit par la banque. Une virgule décimale comme `-45,67`, utilisée par certains exports en français, est lue comme -45,67 et non -45.
- **Type** vaut CREDIT ou DEBIT, selon le type de transaction de la banque et le signe du montant.
- **Reference** est l'identifiant unique de la transaction (`FITID`). C'est lui qui permet aux logiciels comptables de ne pas importer deux fois la même opération.

L'export CSV contient les mêmes informations dans un ordre un peu différent : Date, Description, Amount, Type, Memo, Reference. Selon les réglages régionaux de votre Excel (virgule décimale en français), ouvrez le CSV par Données, À partir d'un fichier texte/CSV pour choisir le séparateur; le fichier .xlsx, lui, s'ouvre toujours correctement.

## OFX, QFX, QBO, QIF ou CSV : lequel choisir?

Ces formats se ressemblent dans un menu de téléchargement, mais chacun vise un logiciel différent.

| Format | Ce que c'est | À choisir quand |
|---|---|---|
| OFX | Open Financial Exchange, la norme du secteur pour les données bancaires; appelé « Microsoft Money » par bien des banques | Vous voulez le fichier que ce convertisseur lit le mieux |
| QFX | De l'OFX avec des balises Intuit, appelé « Quicken » | Votre banque n'offre pas d'OFX simple |
| QBO | De l'OFX avec des balises Intuit pour QuickBooks | Vous importez dans QuickBooks |
| QIF | Un ancien format texte de Quicken | Votre logiciel importe le QIF mais pas l'OFX |
| CSV | Du texte séparé par des virgules, une ligne par transaction | Vous travaillez dans un tableur ou votre logiciel de tenue de livres importe le CSV |
| XLSX | Un classeur Excel | Vous allez trier, totaliser, faire un graphique ou envoyer le fichier |

Si votre banque offre le CSV et que vous voulez seulement une feuille de calcul, le CSV de la banque suffit. Les raisons de prendre l'OFX quand même : il transporte l'identifiant unique de chaque transaction, sa structure est la même d'une banque à l'autre, et vous pouvez le transformer ici dans tous les autres formats.

## Pourquoi Excel n'ouvre-t-il pas directement un fichier OFX?

Excel n'a pas d'importateur OFX. Un double-clic sur un fichier .ofx l'ouvre comme une longue colonne de balises ou ne donne rien d'utilisable. Les fichiers OFX 2.x récents sont du XML, donc Power Query peut les charger, mais vous obtenez une arborescence de tableaux imbriqués (connexion, relevé, liste de transactions, transaction) à déplier un à un. Les fichiers OFX 1.x, encore produits par plusieurs banques canadiennes, sont du SGML : des balises comme `<TRNAMT>-45.67` ne sont pas fermées, et tout importateur XML les rejette.

Le convertisseur lit les deux formes de la même manière et les aplatit en une ligne par transaction, la forme qu'on veut réellement dans un tableur.

## Qu'arrive-t-il à mes données bancaires pendant la conversion?

Le fichier ne quitte jamais votre appareil. Le navigateur remet le fichier à la page par l'API File, le JavaScript de la page le lit comme du texte et l'analyseur en extrait les comptes et les transactions par simple reconnaissance de texte. Quand vous cliquez sur Excel, ExcelJS, une bibliothèque libre chargée dans la page, construit le classeur en mémoire et le navigateur l'enregistre dans votre dossier Téléchargements.

Il n'y a aucune étape de téléversement, et vous pouvez le vérifier : ouvrez les outils de développement (F12), choisissez l'onglet Réseau, convertissez un fichier et cherchez une requête qui le transporte. Il n'y en a pas. Le site enregistre une visite anonyme, pas le contenu des fichiers.

C'est plus important ici que pour la plupart des outils. Un téléchargement de transactions contient votre numéro de compte, votre solde, chaque bénéficiaire et chaque montant sur plusieurs mois. Certains convertisseurs en ligne traitent les fichiers sur un serveur; celui-ci, non.

## À quoi sert la feuille de calcul?

### Travail autonome et revenus de location, au moment des impôts

Travailleurs autonomes et propriétaires trient une année de transactions pour remplir le formulaire TP-80 de Revenu Québec, ou le T2125 (revenus d'entreprise) et le T776 (revenus de location) de l'ARC. Filtrez la colonne Description par bénéficiaire, totalisez la colonne Amount, et vous avez chaque catégorie de dépenses. Gardez vos reçus : la feuille est votre fichier de travail, pas une pièce justificative.

### Budget mensuel

Ajoutez une colonne Catégorie à côté de Description, remplissez-la une fois par bénéficiaire, et un tableau croisé dynamique par mois et par catégorie montre où va l'argent. Avec de vraies dates Excel, le regroupement par mois se fait en un clic.

### Envoyer ses transactions à un comptable

Bien des comptables préfèrent une feuille de calcul ou un fichier QBO à douze relevés PDF. Exportez en CSV pour un logiciel de tenue de livres qui importe le CSV, ou en QBO pour QuickBooks. Si vous envoyez le fichier par courriel, pensez à [protéger une version PDF par mot de passe](/fr/protect-pdf) ou à passer par un portail sécurisé.

### Preuve de revenus ou de dépenses

Pour une demande de location ou un dossier hypothécaire, exportez les mois demandés, supprimez les lignes sans rapport et transformez la feuille en PDF avec [Convertir Excel en PDF](/fr/excel-to-pdf). Le prêteur peut tout de même exiger les relevés PDF officiels de la banque; la feuille est un sommaire.

## Que faire si le fichier ne se convertit pas?

| Problème | Cause probable | Solution |
|---|---|---|
| « Ce fichier n'est pas un relevé OFX/QFX » | Le fichier est un CSV, un relevé PDF ou une page HTML enregistrée par erreur | Ouvrez un CSV directement dans Excel; convertissez un relevé PDF avec PDF en Excel; retéléchargez en choisissant OFX, Microsoft Money ou Quicken |
| « Aucun compte bancaire ni carte de crédit » | Un fichier de placement ou de courtage (titres et opérations) | Non pris en charge : l'outil lit seulement les comptes bancaires et les cartes de crédit. Demandez un CSV à votre courtier. |
| Les accents s'affichent comme Ã© dans le CSV | Un ancien Excel a ouvert le CSV en ANSI | Prenez le téléchargement Excel, ou dans Excel choisissez Données, À partir d'un fichier texte/CSV, puis UTF-8 (65001) |
| La colonne Date affiche ##### | La colonne est trop étroite | Double-cliquez sur la bordure entre les lettres de colonnes pour l'élargir |
| Moins de transactions que prévu | Le téléchargement de la banque couvre une période limitée | Vérifiez la case Période dans l'aperçu; téléchargez les périodes plus anciennes séparément |
| Une transaction apparaît deux fois après avoir combiné des fichiers | Deux téléchargements aux périodes qui se chevauchent | Sélectionnez les données, puis Données, Supprimer les doublons sur la colonne Reference |
| Un seul compte dans l'export | Le fichier contient plusieurs comptes et un seul est sélectionné | Choisissez l'autre compte dans le sélecteur et exportez de nouveau |
