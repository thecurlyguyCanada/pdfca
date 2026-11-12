---
title: "Compresser un PDF gratuit : jusqu'à 98 % plus léger"
h1: "Compresser un PDF"
lead: "Choisissez un niveau, cliquez sur Compresser PDF et voyez la taille avant et après. Les numérisations maigrissent le plus; les PDF texte gardent leur texte. Tout se passe dans votre navigateur."
description: "Compressez un PDF gratuitement dans votre navigateur. Sur nos numérisations de test : 55 à 93 % (Équilibré), 71 à 98 % (Extrême). Niveaux de gris, sans envoi."
answer: "Ajoutez votre PDF, choisissez Bon, Équilibré ou Extrême et cliquez sur Compresser PDF. Bon est sans perte et a retiré 7 à 17 % à la plupart de nos PDF numériques de test. Équilibré et Extrême redessinent chaque page en JPEG : sur nos numérisations de test à 200–300 ppp, ils ont retiré 55 à 93 % et 87 à 98 %. Si le résultat n'est pas plus léger, l'outil garde votre original et vous le dit. Rien n'est téléversé."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où ça se passe", "Dans l'onglet de votre navigateur. pdf-lib réécrit le fichier; pour Équilibré et Extrême, pdf.js dessine d'abord chaque page sur un canevas. Rien n'est téléversé."]
  - ["Niveaux", "Bon : réenregistrement sans perte, le texte reste sélectionnable. Équilibré : chaque page devient un JPEG à 150 ppp (qualité 0,7). Extrême : JPEG à 100 ppp (qualité 0,45)."]
  - ["Niveaux de gris", "Case à cocher facultative pour Équilibré et Extrême. A retiré encore 6 à 20 % sur des photos et des graphiques en couleur dans nos tests; aucun gain sur les pages en noir et blanc ou en gris."]
  - ["Si le résultat est plus lourd", "Votre original est conservé, rien n'est téléchargé, et l'outil vous le dit en suggérant un autre niveau."]
  - ["Taille maximale du fichier", "Aucun plafond fixe; la mémoire de votre appareil est la limite. Notre plus gros test, une numérisation de 14 pages de 43,1 Mo, a pris 3 secondes en Équilibré dans Chromium sur ordinateur. Un téléphone a moins de mémoire : divisez d'abord les très gros fichiers."]
  - ["Vitesse", "Bon a pris moins de 2 secondes sur chaque fichier de test. Équilibré a pris 7 secondes pour un rapport texte de 120 pages et 13 secondes pour une numérisation de 66 pages sur notre machine de test."]
  - ["Entrée", ".pdf seulement. Un fichier protégé par mot de passe ne peut pas être lu; ouvrez-le avec son mot de passe et enregistrez d'abord une copie sans protection."]
  - ["Sortie", "Un PDF nommé compressed_<votre fichier>.pdf, même nombre de pages et mêmes dimensions. Votre original n'est pas modifié."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée"]
faq:
  - q: "De combien mon PDF va-t-il maigrir?"
    a: "Cela dépend de son contenu. Sur nos fichiers de test, les numérisations faites à 200–300 ppp ont perdu 55 à 93 % en Équilibré et 71 à 98 % en Extrême, et les PDF de photos ou de captures d'écran 92 à 98 %. Les PDF texte numériques ont perdu 7 à 17 % avec Bon, et une exportation de bureautique 70 %. L'écran de résultat affiche la taille exacte avant et après."
  - q: "Pourquoi l'outil dit-il que mon PDF est déjà compact?"
    a: "Parce que la copie compressée était plus lourde que votre fichier, alors l'outil a gardé votre original. Cela arrive avec Équilibré et Extrême sur les PDF texte : le JPEG d'une page de texte pèse bien plus que le texte. Notre rapport texte de 120 pages est passé de 241 Ko à 28 Mo en Équilibré. Utilisez Bon pour les documents texte."
  - q: "La compression va-t-elle rendre mon PDF flou?"
    a: "Bon ne change rien de visible. Équilibré redessine les pages à 150 ppp, ce qui se lit proprement à l'écran et s'imprime bien en format lettre. Extrême utilise 100 ppp et une qualité JPEG basse : le texte courant reste lisible à l'écran, mais les petits caractères, les traits fins et les signatures s'adoucissent. Vérifiez une page avec de petits caractères avant d'envoyer le fichier."
  - q: "Puis-je encore sélectionner et chercher du texte après la compression?"
    a: "Seulement avec Bon. Équilibré et Extrême transforment chaque page en image : le texte ne peut plus être sélectionné, cherché ni lu par un lecteur d'écran, et les liens, signets et champs de formulaire disparaissent. Pour un fichier léger qui reste consultable, compressez avec Bon, puis divisez-le ou retirez des pages."
  - q: "L'option Niveaux de gris fait-elle une grosse différence?"
    a: "Seulement sur les pages en couleur. Dans nos tests, elle a retiré encore 20 % à un PDF de photos (de 1,73 Mo à 1,38 Mo en Équilibré) et 9 à 14 % à des rapports et des captures d'écran avec des graphiques en couleur. Sur des numérisations déjà en gris ou en noir et blanc, elle n'a rien changé, puisqu'il n'y avait pas de couleur à retirer."
  - q: "Puis-je compresser un PDF deux fois pour l'alléger encore?"
    a: "Cela aide rarement. Un second passage en Équilibré réencode des JPEG qui sont déjà des JPEG : la qualité baisse alors que la taille bouge à peine. Compressez plutôt l'original une seule fois à un niveau plus bas, et si Extrême sur l'original est encore trop lourd, divisez le fichier par taille ou retirez des pages."
  - q: "Est-ce sécuritaire de compresser ici des documents fiscaux, d'immigration ou médicaux?"
    a: "Oui, le fichier ne quitte jamais votre appareil. Il est lu dans la mémoire de votre navigateur, réécrit là, puis proposé en téléchargement depuis le même onglet. Vous pouvez le vérifier dans les outils de développement du navigateur, onglet Réseau, pendant la compression : aucune requête ne transporte le fichier. Fermer l'onglet libère la mémoire."
---
## Quel niveau de compression choisir?

Choisissez selon le contenu du PDF, pas selon la taille visée. Les trois niveaux font des choses différentes, et le mauvais peut alourdir le fichier.

| Niveau | Ce qu'il fait | Idéal pour | Mesuré sur nos fichiers de test | Texte sélectionnable? |
|---|---|---|---|---|
| **Bon** | Réenregistrement sans perte : regroupe les objets dans des flux compressés, efface les métadonnées | PDF de Word, de Google Docs ou de banque, formulaires, tout ce qui contient du vrai texte | 7 à 17 % plus léger sur la plupart des PDF numériques; 0 à 0,5 % sur les numérisations | Oui |
| **Équilibré** | Redessine chaque page en JPEG à 150 ppp, qualité 0,7 | Numérisations, photos de téléphone, rapports illustrés que vous imprimerez peut-être | 55 à 93 % plus léger sur les numérisations à 200–300 ppp; 92 à 94 % sur les pages de photos | Non |
| **Extrême** | Redessine chaque page en JPEG à 100 ppp, qualité 0,45 | Limites de téléversement où chaque kilooctet compte et où le fichier sera lu à l'écran | 71 à 98 % plus léger sur les numérisations; 97 à 98 % sur les pages de photos | Non |

Équilibré est sélectionné à l'ouverture de la page. Deux cas surprennent. D'abord, une numérisation déjà faite à 150 ppp maigrit à peine en Équilibré (notre exemple de 10 pages est passé de 4,2 Mo à 4,1 Mo), parce que la page est redessinée à la même résolution; Extrême l'a amenée à 1,2 Mo. Ensuite, Équilibré et Extrême alourdissent beaucoup les PDF texte. L'outil s'en rend compte : quand le résultat n'est pas plus léger, vous voyez « Votre original est conservé » avec les deux tailles, et rien n'est téléchargé.

## De combien nos fichiers de test ont-ils maigri?

Nous avons passé 25 PDF de test dans cette page, dans Chromium sur ordinateur, le 12 novembre 2026 : numérisations, pages de photos, exportations de bureautique, un vrai formulaire de l'IRS et de longs rapports texte. Voici les résultats pour les principaux types de documents. « Plus lourd » signifie que l'outil a gardé l'original.

| Fichier de test | Original | Bon | Équilibré | Extrême |
|---|---|---|---|---|
| Rapport texte de 12 pages | 24 Ko | 21 Ko (−13 %) | Plus lourd (2,7 Mo) | Plus lourd (1,1 Mo) |
| Rapport texte de 120 pages | 241 Ko | 214 Ko (−12 %) | Plus lourd (28 Mo) | Plus lourd (12 Mo) |
| Exportation LibreOffice de 27 pages | 480 Ko | 144 Ko (−70 %) | Plus lourd (8 Mo) | Plus lourd (3,4 Mo) |
| Formulaire W-4 de l'IRS, 5 pages | 204 Ko | Plus lourd (208 Ko) | Plus lourd (1,8 Mo) | Plus lourd (744 Ko) |
| Numérisation de 3 pages, 200 ppp | 746 Ko | 745 Ko (0 %) | 329 Ko (−56 %) | 97 Ko (−87 %) |
| Numérisation de 10 pages, 200 ppp | 2,5 Mo | 2,5 Mo (0 %) | 1,1 Mo (−55 %) | 342 Ko (−87 %) |
| Numérisation en gris de 10 pages, 200 ppp | 7,0 Mo | 7,0 Mo (0 %) | 2,4 Mo (−66 %) | 812 Ko (−89 %) |
| Numérisation couleur de 6 pages, 300 ppp | 10,1 Mo | 10,1 Mo (0 %) | 1,3 Mo (−87 %) | 454 Ko (−96 %) |
| Numérisation couleur de 14 pages, 300 ppp | 43,1 Mo | 43,1 Mo (0 %) | 3,0 Mo (−93 %) | 1,0 Mo (−98 %) |
| Numérisation en gris de 10 pages, 150 ppp | 4,2 Mo | 4,2 Mo (0 %) | 4,1 Mo (−2 %) | 1,2 Mo (−71 %) |
| Numérisation noir et blanc de 66 pages | 3,4 Mo | 3,4 Mo (−0,5 %) | Plus lourd (17,7 Mo) | Plus lourd (7,4 Mo) |
| 8 photos pleine page | 31,0 Mo | 31,0 Mo (0 %) | 1,7 Mo (−94 %) | 640 Ko (−98 %) |
| Rapport de 16 pages avec photos et graphiques | 4,0 Mo | 4,0 Mo (0 %) | 2,2 Mo (−45 %) | 916 Ko (−78 %) |

Temps sur notre machine de test : Bon a terminé chaque fichier en moins de 2 secondes. Équilibré a pris 3 secondes pour la numérisation de 43,1 Mo, 7 secondes pour le rapport de 120 pages et 13 secondes pour la numérisation de 66 pages. Un téléphone est plus lent; nous ne l'avons pas chronométré.

## Comment les PDF numérisés, consultables et numériques se compressent-ils différemment?

**Les PDF numérisés** contiennent une image par page. Si le numériseur a enregistré ces images en couleur ou en gris à 200–300 ppp, Équilibré et Extrême les allègent énormément, car l'outil les redessine à une résolution plus basse. Bon n'y peut rien : il ne touche pas aux images. L'exception est la numérisation en noir et blanc (1 bit), celle que les photocopieurs de bureau produisent en mode « texte » : elle est déjà stockée très efficacement, et notre exemple de 66 pages est devenu cinq fois plus lourd en Équilibré. Gardez-la telle quelle, ou divisez-la.

**Les PDF consultables** sont des numérisations auxquelles la reconnaissance de caractères a ajouté une couche de texte invisible. Ils se compressent comme des numérisations en Équilibré et Extrême, mais la couche de texte est perdue, donc le résultat n'est plus consultable. Si la recherche compte, compressez d'abord en Équilibré, puis passez le fichier allégé dans [OCR PDF](/fr/ocr-pdf) pour rajouter la couche de texte.

**Les PDF numériques** sortent directement de Word, de Google Docs, de LibreOffice, d'une banque ou d'un formulaire gouvernemental. Leur texte est stocké comme du texte, déjà compact. Bon est le seul niveau utile, habituellement 7 à 17 %, parfois bien plus sur les exportations de vieux logiciels (70 % sur notre fichier LibreOffice). Équilibré a alourdi chaque fichier texte de nos tests, de 2 à 360 fois; Extrême n'en a allégé qu'un seul, une lettre de 2 pages presque vide, de 7 %.

## Comment compresser un PDF à une taille précise?

L'outil fonctionne par niveaux, pas avec une case de taille cible; servez-vous donc de ces chiffres par page, tirés de nos numérisations, pour prévoir le résultat. En Équilibré, une page numérisée a donné 110 à 410 Ko; en Extrême, 30 à 125 Ko. Multipliez par votre nombre de pages, puis vérifiez la vraie taille sur l'écran de résultat.

### Moins de 2 Mo

Équilibré suffit généralement jusqu'à environ 5 pages numérisées. Dans nos tests, il a fait passer une numérisation couleur de 6 pages à 300 ppp de 10,1 Mo à 1,3 Mo, alors que les numérisations de 10 à 14 pages ont atterri entre 1,1 et 3,0 Mo. Pour celles-là, Extrême les a toutes ramenées sous 1,3 Mo.

### Moins de 1 Mo

Utilisez Extrême pour les numérisations d'au plus 10 pages environ : 6 de nos 8 numérisations de test sont passées sous 1 Mo. Les deux autres étaient la numérisation de 14 pages à 300 ppp (1,0 Mo, à peine au-dessus) et une numérisation de 10 pages déjà à 150 ppp (1,2 Mo).

### Moins de 500 Ko

Extrême sur de courtes numérisations : chaque numérisation de test de 6 pages ou moins est passée sous 500 Ko (97 Ko pour 3 pages, 454 Ko pour 6 pages couleur à 300 ppp), tout comme une numérisation légère de 10 pages (342 Ko). Pour un fichier plus long, divisez-le.

### Moins de 200 Ko

Réaliste pour 1 à 3 pages numérisées en Extrême : notre numérisation d'une page a donné 33 Ko et celle de 3 pages, 97 Ko. Un court document texte numérique est souvent déjà aussi léger; utilisez Bon, qui le garde net.

Si même Extrême est trop lourd, ne recompressez pas. [Diviser un PDF par taille](/fr/split-pdf-by-size) coupe le fichier en parties qui respectent chacune une limite, et [Supprimer des pages PDF](/fr/delete-pdf-pages) retire les versos blancs et les pages de garde.

## Faut-il cocher l'option Niveaux de gris?

Cochez **Niveaux de gris** quand la couleur n'a pas d'importance et que les pages contiennent des photos, des graphiques ou du surlignage en couleur. L'option retire la couleur de chaque page redessinée avant de créer le JPEG. Dans nos tests, elle a fait passer le PDF de photos de 1,73 Mo à 1,38 Mo en Équilibré (encore 20 %), le rapport avec graphiques en couleur de 9 % de moins, et les captures d'écran de 14 % de moins. Sur des numérisations déjà en gris ou en noir et blanc, elle n'a rien changé. Elle est grisée avec Bon, qui ne modifie jamais les images. Laissez-la décochée quand la couleur a un sens : un tampon, une signature à l'encre bleue, un graphique à code de couleurs.

## Quelles sont les limites de téléversement, et quel niveau convient à chacune?

### Gmail (25 Mo)

Gmail joint des fichiers jusqu'à 25 Mo; au-delà, la pièce jointe devient un lien Google Drive. La plupart des PDF passent déjà. Une grosse numérisation de téléphone ou de bureau, peut-être pas : notre numérisation de 14 pages de 43,1 Mo est descendue à 3,0 Mo en Équilibré, ce qui laisse de la place pour d'autres pièces jointes.

### Outlook.com (20 Mo)

Outlook.com plafonne les pièces jointes à 20 Mo. Même conseil que pour Gmail : Équilibré pour les numérisations et les PDF de photos, Bon pour tout le reste.

### Portails d'emploi et LinkedIn Candidature simplifiée (2 Mo)

La Candidature simplifiée de LinkedIn accepte des CV jusqu'à 2 Mo, et bien des systèmes de suivi des candidatures plafonnent les téléversements entre 2 et 5 Mo. Un CV exporté de Word ou de Google Docs est presque toujours bien en dessous; utilisez Bon pour que le logiciel des recruteurs puisse encore lire le texte. Si vous avez numérisé une lettre de référence signée ou un relevé de notes, Équilibré ramène quelques pages sous 2 Mo.

### Demandes à IRCC (environ 4 Mo par document)

Les portails en ligne d'IRCC acceptent environ 4 Mo par document; vérifiez la limite affichée à côté de chaque emplacement de téléversement. Les passeports, certificats de police et preuves de fonds numérisés sont le problème habituel. Équilibré a gardé chaque numérisation de test à 200–300 ppp de 10 pages ou moins sous 2,5 Mo, et Extrême a gardé chaque numérisation de test de 10 pages ou moins sous 1,3 Mo. Ouvrez le résultat et vérifiez que les petits caractères, les tampons et les signatures sont lisibles avant de téléverser.

### Dépôt en ligne à l'USCIS (moins de 6 Mo par fichier)

Le dépôt en ligne de l'USCIS exige que chaque fichier fasse moins de 6 Mo. Équilibré est le premier choix sûr pour des preuves numérisées; si une longue numérisation dépasse encore, utilisez [Diviser un PDF par taille](/fr/split-pdf-by-size) et téléversez les parties.

### WhatsApp (documents jusqu'à 2 Go)

WhatsApp envoie des documents jusqu'à 2 Go, donc la taille bloque rarement un PDF. Les données, oui : une numérisation de 43 Mo coûte 43 Mo de données mobiles à la personne qui la reçoit. Équilibré en fait un téléchargement de 3 Mo.

## Qu'arrive-t-il à mon fichier quand je le compresse?

Avec Bon, pdf-lib charge le PDF dans la mémoire de votre navigateur, efface le titre, l'auteur, le sujet, les mots-clés, le créateur, le producteur et les métadonnées XMP, puis le réenregistre avec des flux d'objets. Le texte, les liens, les signets et les champs de formulaire sont conservés. Avec Équilibré ou Extrême, pdf.js, le moteur que Firefox utilise pour afficher les PDF, dessine chaque page sur un canevas invisible; le canevas devient un JPEG, et pdf-lib construit un nouveau PDF avec un JPEG par page, aux dimensions d'origine.

Le fichier ne quitte jamais votre appareil. C'est important pour ce que les Canadiens compressent le plus : feuillets T4 et reçus pour l'ARC, passeports numérisés pour IRCC, demandes de consultation médicale. Vous pouvez le vérifier dans les outils de développement du navigateur, onglet Réseau, pendant la compression.

## Quand ne devriez-vous pas utiliser cet outil?

- **Formulaires remplissables à remplir ou à signer.** Équilibré et Extrême suppriment les champs de formulaire et les signatures numériques. Utilisez Bon, ou remplissez et signez d'abord.
- **Accessibilité.** Un PDF redessiné ne contient plus de texte; les lecteurs d'écran ne peuvent pas le lire. Gardez une copie en Bon pour qui en a besoin.
- **Qualité d'impression.** 150 ppp convient à une page lettre, pas à une affiche ni à un plan. Gardez l'original pour l'impression.
- **PDF protégés par mot de passe.** L'outil ne peut pas les lire. Ouvrez le fichier avec son mot de passe et enregistrez d'abord une copie sans protection (dans Chrome : Imprimer, puis Enregistrer au format PDF).

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Encore trop lourd après Extrême | Divisez-le avec Diviser un PDF par taille, ou supprimez des pages | Moins de pages par fichier est le seul levier qui reste quand la qualité est au plus bas |
| Encore trop lourd après Équilibré | Relancez l'original en Extrême | Le résultat d'Extrême faisait environ le tiers de celui d'Équilibré sur nos numérisations |
| « Votre original est conservé » | Utilisez Bon pour les PDF texte; laissez les numérisations noir et blanc telles quelles | Le texte et les numérisations 1 bit pèsent moins que n'importe quel JPEG de leurs pages |
| Équilibré a à peine allégé une numérisation | Utilisez Extrême | La numérisation était déjà près de 150 ppp, donc Équilibré l'a redessinée à la même résolution |
| Le texte n'est plus sélectionnable | Recompressez l'original avec Bon, ou passez le résultat dans OCR PDF | Équilibré et Extrême transforment les pages en images |
| Les petits caractères ou une signature sont flous | Utilisez Équilibré plutôt qu'Extrême | 150 ppp garde des détails fins que 100 ppp adoucit |
| Les champs de formulaire ont disparu | Utilisez Bon, ou remplissez et signez avant de compresser | Les niveaux avec perte reconstruisent le PDF à partir d'images des pages |
| « Ce PDF est protégé par un mot de passe » | Ouvrez-le avec le mot de passe, enregistrez une copie sans protection, compressez-la | Un fichier chiffré ne peut pas être lu sans son mot de passe |
