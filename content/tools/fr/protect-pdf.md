---
title: "Protéger un PDF par mot de passe gratuitement (AES-256)"
h1: "Protéger un PDF par mot de passe"
lead: "Ajoutez un mot de passe que toute personne devra entrer pour ouvrir votre PDF. Le chiffrement se fait dans votre navigateur; ni le fichier ni le mot de passe ne quittent votre appareil."
description: "Protégez un PDF par mot de passe gratuitement, avec un chiffrement AES-256. Impression et copie au choix, champs conservés, rien n'est téléversé."
answer: "Ajoutez le PDF, tapez le mot de passe deux fois, choisissez d'autoriser ou non l'impression et la copie, puis cliquez sur Protéger le PDF. Un fichier courant est chiffré en moins de deux secondes avec AES-256, la méthode la plus forte de la norme PDF, et vous téléchargez une copie nommée fichier-protege.pdf. Les pages, les champs et les liens restent intacts. Le mot de passe n'est ni envoyé ni conservé : si vous l'oubliez, personne ne pourra le récupérer ni ouvrir le fichier pour vous."
updated: 2026-11-12
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane, sans plafond quotidien"]
  - ["Où se fait le travail", "Dans l'onglet de votre navigateur, avec une version de la bibliothèque libre pdf-lib qui ajoute le chiffrement. Ni le PDF ni le mot de passe ne sont envoyés à un serveur."]
  - ["Chiffrement", "AES-256, clé de 256 bits, gestionnaire de sécurité standard de PDF 2.0 (révision 6). Les lecteurs PDF actuels l'ouvrent; ceux d'avant 2010 environ, peut-être pas."]
  - ["Taille maximale du fichier", "Aucun plafond fixe; la mémoire de votre appareil fait la limite. Une numérisation de 45 Mo et 14 pages a été chiffrée en 3,9 secondes lors de nos essais sur ordinateur. Sur un vieux téléphone, un très gros fichier peut faire recharger l'onglet."]
  - ["Pages", "Aucun maximum fixé. Un document de 400 pages a été chiffré en moins d'une seconde lors de nos essais."]
  - ["Entrée", "Un seul fichier .pdf, qui n'est pas déjà protégé par un mot de passe ou des restrictions"]
  - ["Sortie", "fichier-protege.pdf, d'une taille presque identique à l'original (un formulaire de 209 Ko est passé à 229 Ko). Vous cliquez sur Télécharger; l'original n'est pas modifié."]
  - ["Autorisations", "Autoriser l'impression et Autoriser la copie du texte, cochées par défaut. La modification, les commentaires et le remplissage des champs restent permis."]
  - ["Ce qui reste sur votre appareil", "Le PDF, la copie chiffrée et le mot de passe. Le site n'enregistre qu'une visite anonyme de la page."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée et votre fichier ajouté (le moteur de chiffrement se charge avec le premier fichier)."]
  - ["Navigateurs", "Versions actuelles de Chrome, Edge, Firefox et Safari sur ordinateur; Safari sur iOS et Chrome sur Android"]
faq:
  - q: "Comment protéger un PDF par mot de passe gratuitement?"
    a: "Ouvrez Protéger un PDF, ajoutez le fichier, tapez le mot de passe dans Mot de passe puis dans Confirmez le mot de passe, et cliquez sur Protéger le PDF. Cliquez ensuite sur Télécharger. C'est gratuit, sans compte ni filigrane, et le fichier comme le mot de passe restent sur votre appareil."
  - q: "Le chiffrement est-il solide?"
    a: "Il s'agit d'AES-256, le chiffrement le plus fort que prévoit la norme PDF, le même qu'Acrobat utilise à son réglage le plus élevé. Le point faible, c'est le mot de passe : un mot court ou courant peut être deviné par un logiciel. Visez 12 caractères ou plus, idéalement une phrase de quelques mots sans lien."
  - q: "Que se passe-t-il si j'oublie le mot de passe?"
    a: "Rien ne peut être fait pour la copie protégée. Nous ne voyons jamais le mot de passe et ne le conservons pas, alors nous ne pouvons ni le récupérer ni ouvrir le fichier. Gardez l'original non protégé en lieu sûr : l'outil ne le modifie jamais, et vous pourrez le protéger de nouveau."
  - q: "Les options sans impression et sans copie empêchent-elles vraiment ces actions?"
    a: "En partie seulement. Acrobat, les lecteurs intégrés aux navigateurs et la plupart des lecteurs PDF les respectent, mais certains logiciels les ignorent une fois le fichier ouvert. Voyez-les comme une consigne; c'est le mot de passe d'ouverture qui protège vraiment le fichier."
  - q: "Puis-je changer le mot de passe ou les autorisations plus tard?"
    a: "Pas sur la copie protégée. L'outil fixe un mot de passe de propriétaire aléatoire que personne ne voit, vous compris, pour que les choix d'impression et de copie ne puissent pas être contournés. Pour changer quoi que ce soit, repassez l'original non protégé dans l'outil avec les nouveaux réglages."
  - q: "Mon destinataire a-t-il besoin d'un logiciel particulier?"
    a: "Non. Tout lecteur PDF actuel demande le mot de passe et ouvre le fichier : Acrobat Reader, les lecteurs de Chrome, Edge, Firefox et Safari, et les applications intégrées des téléphones. Seuls les lecteurs antérieurs à 2010 environ peuvent refuser un fichier AES-256."
  - q: "Pourquoi l'outil dit-il que mon PDF est déjà protégé?"
    a: "Le fichier a déjà un mot de passe ou des restrictions, et l'outil n'ajoute pas une seconde couche par-dessus. Ouvrez-le avec son mot de passe dans votre lecteur PDF, enregistrez ou imprimez une copie non protégée, puis ajoutez votre nouveau mot de passe à cette copie."
  - q: "Mon mot de passe est-il envoyé quelque part?"
    a: "Non. Le chiffrement s'exécute dans l'onglet de votre navigateur, en JavaScript, alors le mot de passe et le fichier restent dans la mémoire de votre appareil. Ouvrez l'onglet Réseau des outils de développement pendant l'opération : aucune requête ne transporte l'un ou l'autre."
---
## Comment protéger un PDF par mot de passe gratuitement?

Cinq étapes. Pour un document ordinaire, le chiffrement lui-même prend environ une seconde.

### Étape 1 : Ajoutez le PDF

Déposez le fichier sur **Déposez votre PDF ici** ou cliquez pour le choisir. La fiche affiche le nom, la taille et le nombre de pages, avec **Choisir un autre fichier** en cas d'erreur. Si le PDF a déjà un mot de passe ou des restrictions, un message vous le dit; voyez le tableau de dépannage plus bas.

### Étape 2 : Tapez le mot de passe deux fois

Entrez-le dans **Mot de passe**, puis dans **Confirmez le mot de passe**. Le bouton en forme d'œil (**Afficher le mot de passe**) révèle les deux champs pour repérer une faute de frappe. Sous la case, une ligne indique la longueur : moins de 8 caractères est jugé très court, de 8 à 11 acceptable, 12 ou plus une bonne longueur. C'est une mesure de longueur, pas une garantie de solidité. Si les deux entrées diffèrent, le message « Les deux mots de passe ne correspondent pas. » s'affiche et le bouton reste grisé.

Une phrase de trois ou quatre mots sans lien, comme *érable bouilloire orbite sept*, est longue, difficile à deviner et facile à dicter au téléphone. Les accents fonctionnent, mais si votre destinataire tape le mot de passe sur un téléphone, des lettres simples et des chiffres évitent des ennuis.

### Étape 3 : Décidez pour l'impression et la copie

Sous **Autorisations après l’ouverture**, **Autoriser l’impression** et **Autoriser la copie du texte** sont cochées. Décochez-en une pour demander aux lecteurs de bloquer l'impression ou la copie. Laissez-les cochées si la personne doit imprimer le document pour le signer ou coller des montants dans un chiffrier.

### Étape 4 : Notez le mot de passe

C'est l'étape que l'on saute. L'outil affiche l'avertissement avant et après la protection, et pour cause : le mot de passe n'est conservé nulle part, alors un oubli donne un fichier que personne ne peut ouvrir. Inscrivez-le dans votre gestionnaire de mots de passe avant de cliquer, et gardez l'original non protégé.

### Étape 5 : Cliquez sur Protéger le PDF, puis sur Télécharger

Le bouton affiche « Chiffrement en cours… » un instant, puis la fiche de résultat montre le nom du fichier, sa taille et **Protégé avec AES-256**. Rien ne se télécharge tant que vous ne cliquez pas sur **Télécharger**. La copie s'appelle `fichier-protege.pdf`.

Ouvrez le fichier téléchargé avant de l'envoyer : votre lecteur doit demander le mot de passe, puis afficher les pages.

## Que protège vraiment le mot de passe?

Le mot de passe que vous tapez est le mot de passe d'ouverture. Sans lui, le fichier est illisible : le contenu est chiffré en AES-256 selon le gestionnaire de sécurité standard de PDF 2.0, et aucun lecteur ne peut afficher une seule page sans le bon mot de passe.

Les choix d'impression et de copie fonctionnent autrement. Dans un PDF, les autorisations sont appliquées par le lecteur, pas par le chiffrement. C'est pourquoi l'outil crée un second mot de passe, de propriétaire, aléatoire, jamais affiché ni enregistré. S'il était identique à celui que vous tapez, la plupart des lecteurs accorderaient tous les droits à quiconque ouvre le fichier, et vos choix ne vaudraient rien.

| Réglage | Effet | Fermeté |
|---|---|---|
| Mot de passe d'ouverture | Chiffre le contenu; rien ne s'affiche sans lui | Aussi ferme que le mot de passe est long |
| Autoriser l'impression (décochée) | Demande aux lecteurs de désactiver l'impression | Respecté par Acrobat et les navigateurs; certains logiciels l'ignorent |
| Autoriser la copie du texte (décochée) | Demande de bloquer la sélection et la copie | Comme pour l'impression |
| Modification, commentaires, champs | Toujours permis | Non réglable ici |

Tout le reste demeure : texte, images, liens, signets, champs de formulaire (les 54 champs d'un formulaire fiscal ont survécu lors de nos essais) et propriétés du document. Rien n'est recompressé, donc la taille bouge à peine. Le fichier est réenregistré; il n'est donc pas identique octet pour octet.

## Comment transmettre le mot de passe sans risque?

Envoyez le fichier et le mot de passe par deux chemins différents. Si le PDF part par courriel, donnez le mot de passe par texto, au téléphone ou en personne. Un mot de passe placé dans le même courriel que la pièce jointe ne protège rien si cette boîte est lue par la mauvaise personne.

Ne mettez pas le mot de passe dans le nom du fichier ni dans l'objet du courriel. Avec une personne à qui vous envoyez souvent des documents, comme votre comptable, convenez d'une phrase une fois et réservez-la à cette relation.

## Exemples d'utilisation

### Vos feuillets T4 et relevés 1 pour votre comptable

Au printemps, un dossier d'impôt circule souvent par courriel : feuillets T4 et T5, relevés 1, reçus de REER, frais de garde, avis de cotisation de l'ARC. Chacun porte votre NAS. Réunissez les pages avec [Fusionner des PDF](/fr/merge-pdf), protégez le résultat et donnez le mot de passe par téléphone.

### Un dossier de location pour un propriétaire

Les propriétaires demandent des talons de paie, une lettre d'emploi, parfois une enquête de crédit. Un dossier protégé ne sera pas exposé par un courriel transféré ou une boîte partagée. Si vous joignez une pièce d'identité, ajoutez d'abord « COPIE POUR DEMANDE DE LOGEMENT » avec [Filigrane PDF](/fr/watermark-pdf), puis protégez le tout.

### Un bail signé rangé sur un ordinateur partagé

L'ordinateur familial, une clé USB ou un lecteur partagé : c'est là que les documents sont vus par accident. Une copie protégée peut rester dans un dossier commun sans être lue par mégarde. Gardez l'original non protégé dans un endroit à vous seul.

### Un formulaire rempli qui ne doit plus bouger

Pour figer les réponses d'un formulaire avant de le protéger, passez-le d'abord dans [Aplatir un PDF](/fr/flatten-pdf), puis protégez la copie aplatie. Décochez l'impression si la personne doit seulement le lire à l'écran.

## Quand ne devriez-vous pas utiliser cet outil?

- **Pour un téléversement sur un portail gouvernemental.** IRCC, Mon dossier de l'ARC et les portails semblables sont déjà des canaux sécurisés, et l'agent qui reçoit le fichier n'a pas le mot de passe. Téléversez le fichier non protégé.
- **Pour cacher une partie du document.** Le mot de passe, c'est tout ou rien : qui l'a voit toutes les pages. Retirez d'abord les pages à ne pas montrer avec [Supprimer des pages PDF](/fr/delete-pdf-pages).
- **Quand l'interdiction d'imprimer ou de copier doit tenir.** Ce sont des consignes au lecteur. Si c'est vraiment crucial, n'envoyez pas le fichier.
- **Pour un fichier d'archivage PDF/A.** La norme PDF/A interdit le chiffrement; l'outil le refuse avec un message.
- **Pour un chiffrement par certificat ou un mot de passe modifiable plus tard.** Il n'y a ni mot de passe de propriétaire au choix ni option par certificat; un logiciel PDF de bureau s'en charge.

## Dépannage

| Problème | Solution | Pourquoi |
|---|---|---|
| « Ce PDF est déjà protégé par un mot de passe ou des restrictions » | Ouvrez-le avec son mot de passe dans votre lecteur PDF, enregistrez ou imprimez une copie non protégée, puis protégez cette copie | L'outil n'ajoute pas une seconde protection à un fichier chiffré |
| Le bouton Protéger le PDF reste grisé | Vérifiez que les deux champs sont identiques; utilisez Afficher le mot de passe | Le bouton reste inactif tant que les deux entrées ne correspondent pas |
| Le lecteur du destinataire n'ouvre pas le fichier | Demandez-lui de l'ouvrir dans un navigateur à jour ou dans Acrobat Reader | Les lecteurs d'avant 2010 environ ne gèrent pas AES-256 |
| Le destinataire peut quand même imprimer | Son logiciel ignore les autorisations; le mot de passe reste la vraie protection | Les autorisations sont appliquées par le lecteur, pas par le chiffrement |
| « Ce fichier est marqué PDF/A (archivage) » | Envoyez-le sans mot de passe par un canal sécurisé, ou enregistrez d'abord une copie non PDF/A | Un fichier PDF/A ne peut pas être chiffré |
| Vous avez oublié le mot de passe | Protégez de nouveau l'original non protégé avec un nouveau mot de passe | Le mot de passe n'est conservé nulle part; la copie protégée reste fermée |

## En résumé

Protéger un PDF ajoute un vrai mot de passe d'ouverture AES-256 en une seconde environ, dans votre navigateur, sans téléversement ni compte. Choisissez un mot de passe long, notez-le, transmettez-le à part du fichier, et voyez les options sans impression ni copie comme une courtoisie plutôt qu'un verrou.
