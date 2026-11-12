---
title: "Convertir une photo HEIC (iPhone) en PDF gratuitement, sans envoi"
h1: "Convertir HEIC en PDF"
lead: "Convertissez une photo HEIC d'iPhone en un PDF que Windows, l'ARC et n'importe quel formulaire de téléversement accepteront. Le décodage se fait dans votre navigateur."
description: "Convertissez un HEIC en PDF gratuitement dans votre navigateur, en 1 à 3 secondes par photo. L'image iPhone est décodée sur place, jamais téléversée."
answer: "Cliquez sur Choisir un fichier, sélectionnez la photo .heic et cliquez sur Convertir le fichier. Le navigateur décode lui-même le format HEIC d'Apple, ce qui prend une à trois secondes par photo, puis enveloppe l'image dans un PDF d'une page qui se télécharge automatiquement. C'est gratuit, sans filigrane ni compte, et la photo ne quitte jamais votre appareil. Pour plusieurs photos, convertissez-les une à une puis réunissez-les avec Fusionner PDF."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait la conversion", "Dans l'onglet de votre navigateur. heic2any décode la photo et pdf-lib écrit le PDF; rien n'est téléversé."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Les HEIC d'iPhone habituels de 2 à 5 Mo passent sans problème; les HEIC de 48 mégapixels de 8 à 12 Mo fonctionnent sur un portable et prennent 5 à 10 secondes sur un téléphone."]
  - ["Photos par conversion", "Un fichier HEIC par passage. Une rafale ou un HEIC à plusieurs images donne une page par image. Réunissez plusieurs PDF avec Fusionner PDF."]
  - ["Entrée", ".heic et .heif (image/heic, image/heif) provenant d'iPhone, d'iPad et de téléphones Android récents."]
  - ["Sortie", "Un PDF avec une page par image, aux dimensions en pixels de la photo. La photo est réencodée en JPEG à la qualité 0,8 pendant le décodage; le HEIC d'origine n'est pas modifié."]
  - ["Vitesse", "1 à 3 secondes par photo de 12 mégapixels sur un portable, 3 à 8 secondes sur un téléphone. La première conversion charge aussi le décodeur, environ 1 Mo."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page et le décodeur chargés"]
  - ["Navigateurs", "Chrome, Edge, Firefox et Safari récents; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment convertir un HEIC en PDF gratuitement?"
    a: "Ouvrez l'outil HEIC en PDF, cliquez sur Choisir un fichier, sélectionnez la photo et cliquez sur Convertir le fichier. Après une à trois secondes de décodage, le PDF se télécharge automatiquement, gratuitement, sans filigrane ni inscription. Le décodage se fait dans votre navigateur, donc la photo n'est jamais téléversée."
  - q: "Pourquoi Windows n'ouvre-t-il pas mes fichiers HEIC?"
    a: "Windows 10 et 11 n'incluent pas les codecs HEIF et HEVC par défaut; Microsoft vend l'extension HEVC dans son Store, et sans elle, Photos affiche une vignette vide ou une erreur. Un PDF n'a besoin d'aucun codec : une seule conversion permet à n'importe quel PC Windows, et à n'importe quel collègue, d'ouvrir l'image."
  - q: "L'ARC ou IRCC acceptent-ils le HEIC?"
    a: "Les formulaires de téléversement gouvernementaux énumèrent généralement PDF, JPG et PNG et refusent les autres extensions, HEIC compris. Mon dossier de l'ARC accepte PDF, JPG et PNG, avec une taille maximale affichée sur l'écran de téléversement; IRCC privilégie le PDF. Convertir en PDF la photo HEIC d'un feuillet ou d'une page de passeport est le remède habituel."
  - q: "La conversion HEIC en PDF réduit-elle la qualité?"
    a: "Légèrement, et de façon invisible pour des documents. Le décodeur produit un JPEG à la qualité 0,8 avant de le placer sur la page; une photo de 12 mégapixels reste à 12 mégapixels avec une faible compression JPEG dans les zones unies. Le texte d'un reçu, d'un feuillet ou d'une carte d'identité reste net. Pour des tirages de qualité galerie, gardez le HEIC d'origine."
  - q: "Puis-je mettre plusieurs photos HEIC dans un seul PDF?"
    a: "Pas en un seul passage; l'outil convertit un fichier à la fois. Convertissez chaque photo, puis ouvrez Fusionner PDF, ajoutez les PDF, glissez-les dans l'ordre et fusionnez. Huit photos prennent environ trois minutes, décodage compris. Un seul HEIC contenant une rafale produit bien une page par image automatiquement."
  - q: "Comment empêcher mon iPhone de photographier en HEIC?"
    a: "Allez dans Réglages → Appareil photo → Formats et choisissez Le plus compatible; les nouvelles photos sont alors enregistrées en JPEG. Les photos existantes restent en HEIC. Autrement, Réglages → Photos → Transférer vers un Mac ou un PC → Automatique convertit en JPEG lors d'une copie par câble. Aucun des deux réglages ne touche aux photos déjà dans la photothèque."
  - q: "Pourquoi le PDF est-il plus gros que le HEIC?"
    a: "Le HEIC utilise le codec vidéo HEVC, qui compresse les photos à environ la moitié de la taille d'un JPEG de qualité équivalente. Le PDF contient un JPEG, donc un HEIC de 2,5 Mo devient typiquement un PDF de 3 à 5 Mo. Si un portail plafonne la taille, passez le résultat dans Compresser PDF."
  - q: "Est-ce sécuritaire de convertir ici des photos de passeport ou de pièce d'identité?"
    a: "Le HEIC est lu dans la mémoire de votre navigateur, décodé là et écrit en PDF là; aucune requête ne transporte la photo. Vous pouvez le vérifier dans l'onglet Réseau des outils de développement pendant la conversion : seuls les scripts de la page, le décodeur et une consultation anonyme sont chargés. Fermez l'onglet et les données disparaissent."
---
## Comment convertir un HEIC en PDF gratuitement?

Le HEIC est le format que tous les iPhone utilisent par défaut depuis 2017. Il est excellent pour le stockage et pénible pour le partage : Windows exige un codec payant, bien des sites refusent l'extension et la plupart des formulaires gouvernementaux n'acceptent que PDF, JPG et PNG. Cet outil règle le problème en quatre étapes.

### Étape 1 : Sélectionnez la photo HEIC

Cliquez sur **Choisir un fichier** ou glissez la photo dans la zone de dépôt. Le sélecteur accepte les `.heic` et `.heif`. Sur un iPhone, touchez la zone de dépôt et choisissez Photothèque; Safari remet à l'outil le HEIC d'origine. Sur Windows, le fichier peut afficher une vignette vide dans l'Explorateur parce que le système ne sait pas le dessiner; c'est normal, et il se convertit quand même.

### Étape 2 : Cliquez sur Convertir le fichier

Le fichier apparaît dans l'outil, mais il n'est pas encore décodé; les navigateurs autres que Safari ne peuvent même pas dessiner une vignette HEIC, alors ne vous inquiétez pas si l'aperçu est vide. Appuyez sur **Convertir le fichier** pour lancer le travail.

### Étape 3 : Laissez le décodeur travailler

À la première conversion, la page charge le décodeur HEIC, une version WebAssembly de libheif emballée dans heic2any, environ 1 Mo. Il est mis en cache ensuite. Le décodage tourne alors sur votre appareil : une à trois secondes pour une photo de 12 mégapixels sur un portable, trois à huit sur un téléphone. L'indicateur de progression reste affiché tout ce temps; rien n'est bloqué.

C'est l'étape que les gens comprennent mal. La pause, c'est le décodage, pas un téléversement. Regardez l'onglet Réseau et vous ne verrez aucun trafic pendant qu'il tourne. Une fois décodée, l'image est enregistrée en JPEG à la qualité 0,8, puis pdf-lib crée une page exactement aux dimensions en pixels de la photo et l'y place. Si le HEIC contient plus d'une image, comme une rafale, chacune devient sa propre page.

### Étape 4 : Téléchargez et recommencez

Le PDF se télécharge automatiquement, nommé comme la photo avec l'extension `.pdf`. Sur iPhone, il apparaît dans Fichiers → Téléchargements. Cliquez sur **Process Another** pour la photo suivante.

### Étape 5 : Réunissez les photos s'il vous faut un seul document

Pour une réclamation de plusieurs pages ou un lot de reçus, convertissez chaque photo puis utilisez [Fusionner PDF](/fr/merge-pdf) : ajoutez les PDF, glissez-les dans l'ordre, fusionnez. Vous obtenez un fichier avec une photo par page.

> **Astuce :** Sur un iPhone, marquez d'abord comme favorites les photos dont vous avez besoin. Le sélecteur de Photos dans Safari montre la photothèque par date, et retrouver le bon reçu parmi 8 000 photos est la partie la plus longue.

## Que devient ma photo quand je la convertis?

Rien ne quitte votre appareil, ce qui est moins évident pour le HEIC que pour d'autres formats, parce que les navigateurs ne savent pas lire le HEIC seuls. Plutôt que d'envoyer le fichier à un serveur qui le peut, cette page apporte le décodeur au navigateur. heic2any enveloppe libheif, la bibliothèque HEIF libre, compilée en WebAssembly pour tourner dans l'onglet. Elle lit le HEIC depuis la mémoire, produit un JPEG en mémoire, et pdf-lib construit le PDF à partir de là, toujours en mémoire. L'API File du navigateur s'occupe de la lecture et un Blob du téléchargement.

Pour vérifier : ouvrez les outils de développement, l'onglet Réseau, et convertissez une photo. Vous verrez les scripts de la page, le décodeur qui se charge une fois, et une requête anonyme de consultation. Aucune requête ne transporte votre image.

Les photos qu'on convertit ici sont les plus sensibles : des pages de passeport pour une demande à IRCC, un permis de conduire pour une location, des feuillets T4 et des relevés 1 photographiés sur la table de cuisine, un pare-chocs enfoncé pour une réclamation à la SAAQ ou à l'assureur, l'ordonnance d'un enfant pour un formulaire de prestations. Un HEIC décodé sur votre appareil et effacé avec l'onglet ne peut être ni conservé, ni analysé, ni divulgué par quelqu'un d'autre.

## Pourquoi Windows et les portails refusent-ils le HEIC, et le PDF règle-t-il le problème?

Le HEIC enregistre chaque photo comme une image unique de vidéo HEVC (H.265) dans un contenant HEIF. C'est pourquoi une photo d'iPhone de 12 mégapixels fait 1,5 à 3 Mo au lieu des 3 à 5 Mo d'un JPEG. C'est aussi pourquoi tant de logiciels ne l'ouvrent pas : le HEVC est couvert par des licences de brevets, alors Microsoft livre Windows sans le décodeur et le vend à part, Chrome n'a pas lu le HEIC pendant des années, et les développeurs de formulaires de téléversement valident contre la liste qu'ils connaissent, soit PDF, JPG et PNG.

Un PDF contourne tout cela. L'image qu'il contient est un simple JPEG, et il y a un lecteur PDF sur toutes les machines. Ce qu'on perd, c'est la compression HEVC, donc le fichier grossit :

| Photo | Taille HEIC | Taille du PDF après conversion | Décodage, portable 2022 | Décodage, téléphone 2020 |
|---|---|---|---|---|
| Photo iPhone 12 Mpx (4032×3024) | 1,5 à 3 Mo | 3 à 5 Mo | 1 à 2 s | 3 à 6 s |
| Photo 12 Mpx en faible lumière (plus de bruit) | 2,5 à 4 Mo | 4 à 6 Mo | 1 à 2 s | 3 à 6 s |
| 24 Mpx par défaut sur iPhone 15/16 | 2,5 à 4,5 Mo | 5 à 8 Mo | 2 à 3 s | 5 à 8 s |
| HEIC Max de 48 Mpx | 8 à 12 Mo | 12 à 20 Mo | 3 à 5 s | 8 à 15 s, peut échouer avec 3 Go de mémoire |
| Rafale de 10 images dans un HEIC | 10 à 20 Mo | 10 pages, 25 à 40 Mo | 10 à 20 s | Utilisez un portable |
| Capture d'écran enregistrée en HEIC | 0,5 à 1,5 Mo | 1 à 2 Mo | moins de 1 s | 1 à 2 s |

Où en sont les portails aujourd'hui :

- **Mon dossier de l'ARC.** Accepte PDF, JPG et PNG pour les documents soumis. Le HEIC n'est pas sur la liste. Vérifiez la taille maximale en vigueur sur l'écran de téléversement; elle varie selon le formulaire.
- **IRCC.** Les demandes en ligne privilégient le PDF et précisent les types acceptés pour chaque document. Un PDF de la page photo du passeport est le choix sûr.
- **Revenu Québec et Service Canada.** Les services en ligne acceptent les PDF partout; la prise en charge des images varie d'un formulaire à l'autre.
- **Réclamations d'assurance.** La plupart des portails des assureurs canadiens acceptent JPG, PNG et PDF. Un PDF permet d'envoyer plusieurs photos de dommages en un seul fichier.
- **Employeurs et écoles.** Brightspace, Moodle et la plupart des systèmes RH acceptent le PDF sans exception; la prise en charge du HEIC est imprévisible.

Si le résultat dépasse un plafond, passez-le dans [Compresser PDF](/fr/compress-pdf). Une page de 5 Mo se compresse à environ 500 Ko à 1 Mo, le texte d'un feuillet restant lisible.

> **Astuce :** Si vous ne voulez que des JPEG, Réglages → Appareil photo → Formats → Le plus compatible fait photographier l'iPhone en JPEG désormais. Ça coûte environ la moitié de plus en stockage par photo, et ça ne change rien aux photos déjà prises; celles-là doivent encore être converties.

## Comment convertir un HEIC en PDF sur iPhone, Windows, Mac ou Android?

**iPhone et iPad.** Ouvrez l'outil dans Safari, touchez **Choisir un fichier**, choisissez Photothèque et sélectionnez la photo. Safari transmet le HEIC d'origine, le décodage prend trois à huit secondes, et le PDF atterrit dans Fichiers → Téléchargements. Le chemin d'Apple est Photos → Partager → Imprimer → écarter deux doigts sur l'aperçu → Partager → Enregistrer dans Fichiers; il produit un PDF ajusté au format Lettre sans site web, mais en six touchers par photo. Autre astuce native : AirDrop et Mail convertissent automatiquement le HEIC en JPEG quand l'appareil destinataire en a besoin, raison pour laquelle les utilisateurs de Mac remarquent rarement le format.

**Windows 10 et 11.** C'est là que le HEIC cause le plus d'ennuis. Photos affiche une tuile vide et propose d'acheter l'extension HEVC. Passez outre : ouvrez Chrome, Edge ou Firefox, allez sur cette page et convertissez. Glissez les fichiers directement de l'Explorateur vers la zone de dépôt; la vignette vide n'a aucune importance. Il n'existe aucun chemin intégré de Windows vers le PDF pour un HEIC sans le codec.

**Mac.** Aperçu ouvre le HEIC nativement et Fichier → Exporter au format PDF donne un PDF d'une page à la taille de la photo. Servez-vous-en si vous êtes devant un Mac. L'outil web est utile sur un Mac qui n'est pas le vôtre, ou quand vous voulez les mêmes étapes que sur votre téléphone.

**Android.** Les Samsung et Pixel récents peuvent aussi photographier en HEIC, et les photos reçues d'amis sur iPhone arrivent souvent en HEIC. Chrome sur Android fait tourner l'outil; le téléchargement va dans Téléchargements. Restez sous 10 Mo environ par photo sur les téléphones de 3 à 4 Go de mémoire, parce que le décodage exige l'image décompressée complète de 48 Mo pour un cadre de 12 mégapixels, plus de la mémoire de travail.

**Chromebook.** Comme sur Chrome de bureau. ChromeOS affiche le HEIC dans l'application Galerie mais n'a pas d'exportation directe en PDF.

## Quand ne faut-il pas utiliser cet outil?

- **Vous voulez la photo au mieux de sa qualité pour l'impression.** L'étape de décodage écrit un JPEG à la qualité 0,8. C'est invisible sur des documents et correct pour des tirages 4×6, mais pour un grand tirage de galerie, exportez l'original depuis Photos en pleine qualité.
- **Vous avez une Live Photo et voulez le mouvement.** Seule l'image fixe est convertie. Le PDF n'a aucun moyen de contenir la partie vidéo.
- **Vous avez 50 photos sur un téléphone.** À trois à huit secondes chacune plus une fusion, c'est une longue séance sur un petit écran. Transférez-les sur un portable, ou photographiez en mode Le plus compatible la prochaine fois.
- **Le fichier est un paquet Live Photo exporté par une application tierce.** Certaines applications écrivent des contenants HEIF inhabituels que le décodeur ne reconnaît pas; l'outil signale que le fichier n'a pas pu être traité. Exportez en JPEG depuis l'application et utilisez [JPG en PDF](/fr/jpg-to-pdf).
- **Il vous faut un texte interrogeable.** Un formulaire photographié reste une image; la conversion n'ajoute aucune couche de texte.
- **L'image est un HEIC HDR 10 bits et les tons comptent.** Elle se convertit, mais la plage de couleurs étendue est aplatie en couleurs JPEG standard et les ciels lumineux paraissent un peu plus ternes.

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Rien ne se passe pendant plusieurs secondes après Convertir le fichier | Attendez; l'indicateur montre le décodeur au travail, pas un téléversement | Décoder du HEVC en WebAssembly prend 1 à 3 s par photo sur un portable et plus sur un téléphone |
| « Could not process HEIC file » | Ouvrez la photo dans Photos ou Aperçu, exportez-la en JPEG, puis utilisez JPG en PDF | Certaines applications tierces écrivent des contenants HEIF que le décodeur ne prend pas en charge |
| La photo est de côté dans le PDF | Passez le PDF dans Pivoter PDF | Quelques HEIC portent un indicateur de rotation que la page PDF n'applique pas |
| Safari sur iPhone recharge la page pendant la conversion | Convertissez une photo à la fois, ou une photo de 24 Mpx plutôt que de 48 Mpx | iOS limite la mémoire d'un onglet, et décoder un cadre de 48 Mpx exige plus de 190 Mo |
| L'Explorateur Windows montre une vignette vide et je ne sais pas si c'est la bonne photo | Vérifiez la date et le nom du fichier, glissez-le, puis ouvrez le PDF pour confirmer | Windows n'a pas le codec; le décodeur du navigateur, oui |
| Le PDF fait le double du HEIC | C'est normal; utilisez Compresser PDF si un portail plafonne la taille | Le HEVC compresse environ deux fois mieux que le JPEG que le PDF doit contenir |
| Une rafale a produit un PDF de 10 pages | Ouvrez-le dans Supprimer des pages PDF et gardez l'image voulue | Les HEIC à plusieurs images donnent une page par image |

## Que faire de la photo convertie?

- [Fusionner PDF](/fr/merge-pdf) pour réunir plusieurs photos converties en un document, dans l'ordre où vous les glissez.
- [Compresser PDF](/fr/compress-pdf) quand le résultat dépasse le plafond d'un portail.
- [Pivoter PDF](/fr/rotate-pdf) si une photo est sortie de côté.
- [Supprimer des pages PDF](/fr/delete-pdf-pages) pour retirer les images inutiles d'une rafale.
- [JPG en PDF](/fr/jpg-to-pdf) pour les photos déjà en JPEG, y compris tout ce qui a été pris en mode Le plus compatible.

## En résumé

Le HEIC est un format de stockage, pas de partage, et la solution consiste à le décoder une fois et à envelopper le résultat dans un PDF qui s'ouvre partout. Cet outil fait le décodage dans votre navigateur avec une version WebAssembly de libheif, prend une à trois secondes par photo sur un portable et ne téléverse jamais l'image. Les compromis sont francs : le PDF fait à peu près le double du HEIC et contient un JPEG à la qualité 0,8, ce qui est invisible sur des feuillets, des pièces d'identité et des photos de réclamation. Utilisez Aperçu si vous êtes sur un Mac; utilisez cette page sur Windows, sur un téléphone, ou chaque fois qu'un formulaire de l'ARC, d'IRCC ou d'un assureur refuse le fichier.
