---
title: "Aplatir un PDF gratuitement : figer champs et annotations"
h1: "Aplatir les formulaires et annotations d'un PDF"
lead: "Intégrez à la page les champs remplis, les commentaires et les tampons, ou transformez chaque page en image. Tout se fait dans votre navigateur; rien n'est téléversé."
description: "Aplatissez un PDF gratuitement : champs remplis, commentaires et tampons intégrés à la page, texte sélectionnable, ou pages en images. Aucun téléversement."
answer: "Ajoutez le PDF, gardez Aplatir les formulaires et les annotations, puis cliquez sur Aplatir le PDF. Un formulaire fiscal de 5 pages rempli a été aplati en moins d'une seconde lors de nos essais : les réponses, commentaires et tampons font désormais partie de la page, les champs ne sont plus modifiables, le texte reste sélectionnable et la taille change à peine. Aplatir en images va plus loin : chaque page devient une image à 150 PPP, ce qui retire tout élément interactif, mais le texte n'est plus consultable et le fichier est généralement bien plus lourd."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait le travail", "Dans l'onglet de votre navigateur, avec pdf-lib et pdf.js. Le PDF n'est jamais envoyé à un serveur."]
  - ["Méthodes", "Aplatir les formulaires et les annotations (texte sélectionnable, taille presque identique) ou Aplatir en images (pages JPEG à 150 PPP, texte non sélectionnable)"]
  - ["Taille maximale du fichier", "Aucun plafond fixe; la mémoire de votre appareil fait la limite. La première méthode a traité 400 pages en 0,9 seconde lors de nos essais. Les images sont plus exigeantes : un rapport texte de 400 pages a pris 19 secondes et donné 165 Mo, trop pour la plupart des téléphones."]
  - ["Entrée", "Un seul fichier .pdf. Un PDF protégé par mot de passe doit d'abord être ouvert et réenregistré sans mot de passe."]
  - ["Sortie", "fichier-aplati.pdf, quelle que soit la méthode. Vous cliquez sur Télécharger; l'original n'est pas modifié."]
  - ["Conservé (formulaires)", "Contenu des pages, texte sélectionnable y compris les valeurs saisies, liens, signets, propriétés du document, taille et rotation des pages"]
  - ["Retiré (formulaires)", "Champs de formulaire, données XFA, annotations aplaties et leurs notes contextuelles. Une signature numérique n'est plus valide."]
  - ["Ce qui reste sur votre appareil", "L'original, le fichier aplati et vos choix. Le site n'enregistre qu'une visite anonyme de la page."]
  - ["Fonctionne hors ligne?", "En grande partie. Le moteur PDF se charge quand vous ajoutez le fichier; le moteur de rendu d'Aplatir en images se charge la première fois que vous utilisez cette méthode, alors faites-le une fois en ligne."]
  - ["Navigateurs", "Versions actuelles de Chrome, Edge, Firefox et Safari sur ordinateur; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment aplatir gratuitement un formulaire PDF rempli?"
    a: "Ouvrez Aplatir un PDF, ajoutez le formulaire rempli, gardez Aplatir les formulaires et les annotations et cliquez sur Aplatir le PDF, puis sur Télécharger. Les réponses font désormais partie de la page : elles s'affichent partout et ne peuvent plus être changées. C'est gratuit et le formulaire ne quitte jamais votre appareil."
  - q: "Pourrai-je encore sélectionner et rechercher le texte?"
    a: "Oui, avec Aplatir les formulaires et les annotations. Les valeurs saisies sont dessinées comme du vrai texte, alors vous pouvez toujours chercher un nom ou copier un montant. Aplatir en images est différent : chaque page devient une image et le texte ne peut plus être sélectionné ni recherché."
  - q: "Pourquoi le fichier est-il beaucoup plus lourd après Aplatir en images?"
    a: "Parce que chaque page devient une image JPEG à 150 PPP, plus lourde que du texte. Lors de nos essais, une page lettre de texte pesait de 170 à 410 Ko environ, si bien qu'un rapport de 120 pages et 247 Ko est passé à 36,5 Mo. Une numérisation, déjà faite d'images, peut au contraire maigrir."
  - q: "L'aplatissement supprime-t-il les commentaires et les surlignages?"
    a: "Il garde leur apparence et les retire en tant que commentaires. Surlignages, tampons, formes et zones de commentaire sont dessinés dans la page puis supprimés comme annotations. Les notes autocollantes sans apparence dessinée et les pièces jointes restent telles quelles; l'outil indique combien."
  - q: "Qu'arrive-t-il aux liens et aux signets?"
    a: "Les deux restent avec Aplatir les formulaires et les annotations : les liens demeurent cliquables et les signets fonctionnent. Aplatir en images crée un tout nouveau fichier à partir d'images des pages, alors liens, signets et propriétés du document disparaissent avec cette méthode."
  - q: "Puis-je aplatir un PDF signé numériquement?"
    a: "Oui, mais la signature numérique ne sera plus valide, puisque le fichier a changé. L'apparence visible de la signature est dessinée dans la page. Si la signature doit rester vérifiable, aplatissez d'abord le formulaire et faites-le signer ensuite."
  - q: "Les accents français survivent-ils à l'aplatissement?"
    a: "Oui. Des valeurs comme Jean-François Côté ou Québec sont redessinées correctement. Les caractères absents de la police intégrée, comme les caractères chinois ou les émojis, gardent l'apparence que le formulaire avait déjà, et l'outil nomme ces champs pour que vous les vérifiiez."
  - q: "Aplatir, est-ce la même chose que rendre un PDF en lecture seule?"
    a: "Pas tout à fait. L'aplatissement retire les champs, donc personne ne peut retaper les réponses dans un lecteur ordinaire, mais un éditeur PDF complet peut encore modifier n'importe quelle page. Pour empêcher l'ouverture du fichier, protégez la copie aplatie par mot de passe."
---
## Comment aplatir un PDF gratuitement?

Quatre étapes; avec la méthode des formulaires, le travail prend d'ordinaire moins d'une seconde.

### Étape 1 : Ajoutez le PDF

Déposez le fichier sur **Déposez votre PDF ici** ou cliquez pour le choisir. La fiche affiche le nom, le nombre de pages et ce que l'outil a trouvé, par exemple « 48 champs de formulaire · 2 annotations (commentaires, surlignages, tampons…) ». **Choisir un autre fichier** permet d'en changer. Si rien d'interactif n'est trouvé, la fiche le dit et présélectionne la méthode en images.

### Étape 2 : Choisissez la méthode

Sous **Méthode d’aplatissement**, choisissez :

- **Aplatir les formulaires et les annotations** : les valeurs saisies, les commentaires et les tampons font partie de la page. Le texte reste sélectionnable et la taille change à peine. C'est le choix par défaut quand le fichier a des champs ou des annotations.
- **Aplatir en images** : chaque page devient une image à 150 PPP. Tout élément interactif disparaît, mais le texte ne peut plus être sélectionné ni recherché, et le fichier est généralement plus lourd.

C'est l'étape où l'on se trompe. Les images semblent plus radicales, alors on les choisit pour un formulaire qui n'avait besoin que de la première méthode, et l'on obtient un fichier bien plus lourd (un rapport de 247 Ko est passé à 36,5 Mo lors de nos essais), sans texte consultable. Réservez les images aux cas où tout texte modifiable doit disparaître.

### Étape 3 : Cliquez sur Aplatir le PDF

Le bouton affiche « Aplatissement en cours… », avec « Page 4 sur 12 » pour les images, puis « Enregistrement… ». La fiche de résultat résume l'opération, par exemple « 48 champs et 2 annotations aplatis » ou « 12 pages converties en images », et ajoute une ligne si les liens ont été conservés, si des notes ont été laissées telles quelles ou si un champ doit être vérifié.

### Étape 4 : Téléchargez et vérifiez

Rien ne se télécharge avant que vous cliquiez sur **Télécharger**. Le fichier s'appelle `fichier-aplati.pdf`. Ouvrez-le et cliquez dans un ancien champ : rien ne doit se passer, et la réponse doit toujours s'afficher.

## Quelle différence entre les deux méthodes?

| | Formulaires et annotations | En images |
|---|---|---|
| Valeurs saisies | Dessinées dans la page comme du texte | Intégrées à une image |
| Sélection, recherche, copie | Oui | Non (passez ensuite par OCR PDF au besoin) |
| Liens et signets | Conservés | Retirés |
| Taille du fichier | Presque identique | Souvent bien plus lourde pour du texte; une numérisation peut maigrir |
| Vitesse, 400 pages | 0,9 seconde lors de nos essais | 19 secondes lors de nos essais |
| Qualité | Inchangée, rien n'est redessiné en image | JPEG à 150 PPP, avec perte |
| Notes sans apparence | Laissées telles quelles | Non dessinées |

Avec la méthode des formulaires, l'outil régénère au besoin l'apparence de chaque champ, peint chaque champ et chaque annotation visible sur sa page, exactement à sa place, puis supprime le formulaire et ces annotations. Les pages pivotées à 90 ou 180 degrés et les pages recadrées ressortent identiques; nous l'avons vérifié en comparant les rendus.

La méthode en images rend chaque page telle qu'elle s'affiche, recadrage et rotation compris, et bâtit un nouveau PDF avec ces images. Seule l'apparence survit. Pour retrouver un texte consultable, passez le résultat dans [OCR PDF](/fr/ocr-pdf).

## Comment aplatir un formulaire rempli de l'ARC ou de Service Canada?

Bien des formulaires fédéraux et provinciaux sont des PDF à remplir. Une fois rempli, l'aplatissement aide dans deux cas : le lecteur du destinataire affiche des cases vides là où étaient vos réponses, ou vous ne voulez pas qu'on modifie les réponses après l'envoi.

1. Remplissez le formulaire dans un lecteur PDF et enregistrez-le.
2. Ajoutez la copie enregistrée ici, gardez **Aplatir les formulaires et les annotations** et cliquez sur **Aplatir le PDF**.
3. Ouvrez le résultat et parcourez chaque page : les réponses doivent être dans les cases.

Regardez le nombre de champs sur la fiche avant d'aplatir. S'il indique 0 champ pour un formulaire que vous avez bel et bien rempli, il s'agit probablement d'un formulaire XFA pur, un format qu'emploient certains anciens formulaires gouvernementaux, où les champs vivent hors de la page. La méthode des formulaires n'a alors rien à dessiner et abandonne les données XFA. Lisez [comment modifier un PDF XFA](/fr/guides/edit-xfa-pdf) pour contourner le problème. Les formulaires qui combinent les deux formats, comme beaucoup de formulaires fiscaux, s'aplatissent normalement : un formulaire fiscal américain de 5 pages et 48 champs est ressorti correct lors de nos essais.

## Exemples d'utilisation

### Un formulaire gouvernemental rempli, envoyé par courriel

Un formulaire envoyé à un bureau peut arriver avec des cases vides si le lecteur du destinataire ne dessine pas les valeurs des champs. Aplati, il montre les réponses de la même façon partout : téléphone, navigateur ou papier.

### Un contrat annoté après une révision

Après une révision dans Acrobat ou Aperçu, un contrat porte des surlignages, des zones de commentaire et un tampon APPROUVÉ. L'aplatissement les intègre à la page : ils s'impriment de façon fiable et ne peuvent plus être supprimés un à un comme des commentaires.

### Une signature ajoutée comme annotation

Si une signature a été posée comme annotation dans une autre application, l'aplatissement l'intègre à la page. Pour signer d'abord, utilisez [Signer un PDF](/fr/sign-pdf), puis aplatissez si la copie signée contient encore des champs remplissables.

### Une copie filigranée qui doit le rester

Un filigrane texte peut être retiré avec un éditeur. Passez un fichier marqué avec [Filigrane PDF](/fr/watermark-pdf) dans **Aplatir en images** : le filigrane fait alors partie de chaque image de page.

## Quand ne devriez-vous pas utiliser cet outil?

- **Quand le destinataire doit continuer à remplir le formulaire.** L'aplatissement retire les champs. Gardez une copie non aplatie; pour créer un nouveau formulaire, utilisez [Rendre un PDF remplissable](/fr/make-pdf-fillable).
- **Quand une signature numérique doit rester valide.** Toute modification d'un fichier signé invalide la signature.
- **Pour alléger un fichier.** La première méthode garde la taille; les images alourdissent souvent les fichiers texte. Utilisez [Compresser un PDF](/fr/compress-pdf).
- **Pour cacher de l'information.** L'aplatissement ne retire rien de ce qui est imprimé sur la page; il fige ce qui s'y trouve.
- **Pour un formulaire XFA pur.** Voyez la section ci-dessus.
- **Pour un PDF protégé par mot de passe.** Ouvrez-le avec son mot de passe dans votre lecteur, enregistrez ou imprimez une copie non protégée, puis aplatissez-la. Reprotégez le résultat avec [Protéger un PDF](/fr/protect-pdf) au besoin.

## Dépannage

| Problème | Solution | Pourquoi |
|---|---|---|
| Un champ affiche « ? » ou des caractères étranges | Vérifiez les champs nommés dans la note de résultat et retapez-les en caractères latins si possible | Les caractères absents de la police intégrée ne peuvent pas être redessinés; l'ancienne apparence est gardée |
| La valeur d'un champ a disparu | Remplissez-le de nouveau dans un lecteur PDF, enregistrez et aplatissez encore | La note de résultat liste les champs qui avaient une valeur sans apparence visible |
| Des notes autocollantes restent cliquables | Utilisez Aplatir en images si elles doivent disparaître | Les notes sans apparence dessinée sont laissées telles quelles par la première méthode |
| Le fichier aplati est énorme | Utilisez plutôt Aplatir les formulaires et les annotations | La méthode en images stocke chaque page comme une image à 150 PPP |
| « 0 champ de formulaire » sur un formulaire rempli | Voyez la section sur les formulaires XFA | Un formulaire XFA pur garde ses champs hors de la page |
| « Ce PDF est protégé par un mot de passe » | Ouvrez-le avec le mot de passe, enregistrez une copie non protégée, puis aplatissez | Un fichier chiffré ne peut pas être lu avant d'être ouvert |
| Le texte n'est plus consultable | Utilisez la première méthode, ou passez le résultat en images dans OCR PDF | La méthode en images transforme le texte en images |

## En résumé

Aplatir un PDF intègre à la page les réponses, commentaires et tampons en une seconde environ, garde le texte sélectionnable et la taille presque identique, le tout dans votre navigateur. Réservez Aplatir en images aux cas où tout texte modifiable doit disparaître, en sachant que le fichier sera plus lourd et non consultable.
