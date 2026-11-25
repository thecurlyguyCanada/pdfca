---
title: "PHP en PDF gratuit : ouvrir un fichier .php ou .aspx"
h1: "PHP en PDF : ouvrir un relevé enregistré en .php ou .aspx"
lead: "Votre relevé bancaire, facture ou formulaire s'est téléchargé en releve.php ou GetDocument.aspx au lieu d'un PDF? Déposez-le ici : s'il contient un PDF, vous le récupérez en .pdf en un clic. Du vrai code PHP est plutôt imprimé en PDF."
description: "Relevé ou facture enregistré en .php ou .aspx? C'est souvent un PDF mal nommé. Déposez-le ici pour récupérer le .pdf, ou imprimez du code PHP en PDF. Gratuit."
answer: "Un fichier .php ou .aspx téléchargé d'une banque, d'un fournisseur ou d'un site gouvernemental est le plus souvent déjà un PDF, que le navigateur a nommé d'après la page qui l'a envoyé. Déposez-le ci-dessus : l'outil vérifie les premiers octets et, s'il trouve un PDF, enregistre le même fichier en .pdf, octet pour octet. Si c'est du vrai code PHP ou ASPX, il imprime le code dans un PDF. Rien n'est téléversé."
updated: 2026-11-25
limits:
  - ["Prix", "Gratuit, sans compte, sans limite de fichiers"]
  - ["Où ça se passe", "Dans l'onglet de votre navigateur. Le fichier est lu par l'API File et n'est jamais envoyé à un serveur."]
  - ["Fichiers acceptés", ".php, .aspx, .asp, .ashx, .jsp, .cgi, .do, .txt et fichiers sans extension"]
  - ["Si un PDF est à l'intérieur", "Le PDF est enregistré tel quel à partir de son en-tête %PDF-, sous le même nom terminé par .pdf. Pages, texte, signatures et champs de formulaire sont intacts."]
  - ["Si le fichier est du code source", "Chaque ligne est imprimée en Courier 10 pt sur des pages Lettre avec des marges de 50 pt; les longues lignes passent à la ligne, les tabulations deviennent quatre espaces"]
  - ["Ce qu'il ne fait pas", "Exécuter du code PHP ou ASPX, ni afficher la page qu'un script aurait produite. Les caractères hors de l'alphabet latin s'impriment en ?"]
  - ["Hors ligne?", "Oui, une fois la page chargée"]
faq:
  - q: "Pourquoi mon relevé bancaire s'est-il téléchargé en fichier .php?"
    a: "La page qui envoie le relevé est un script PHP ou ASPX. Quand le serveur n'indique pas au navigateur le nom du fichier, celui-ci reprend la fin de l'adresse, par exemple releve.php, même si le contenu est un PDF tout à fait normal."
  - q: "Puis-je simplement renommer le fichier de .php en .pdf?"
    a: "Oui, si un PDF est à l'intérieur, il suffit de le renommer, et cette page le fait pour vous. Le faire à la main est moins simple sur un téléphone ou sur un ordinateur qui masque les extensions, d'où la recherche d'un convertisseur."
  - q: "Comment savoir si le fichier .php est un PDF?"
    a: "Déposez-le sur cette page. L'outil cherche la signature %PDF- par laquelle commence tout PDF. S'il la trouve dans les 1 024 premiers octets, vous récupérez le PDF; sinon, le fichier est du texte, en général du code ou une page Web."
  - q: "Le PDF obtenu affiche du code ou un message d'erreur. Que s'est-il passé?"
    a: "Le téléchargement n'était pas un PDF. Le plus souvent, la session avait expiré et le site a renvoyé une page de connexion ou d'erreur au lieu du relevé. Reconnectez-vous, téléchargez le document de nouveau et déposez le nouveau fichier ici."
  - q: "L'outil convertit-il aussi les fichiers ASPX?"
    a: "Oui. Les téléchargements .aspx, .asp, .ashx, .jsp et .cgi sont traités comme les .php : s'ils contiennent un PDF, il est enregistré en .pdf; sinon, le texte est imprimé dans un PDF."
  - q: "Est-ce sécuritaire d'ouvrir un relevé bancaire sur cette page?"
    a: "Le fichier ne quitte jamais votre appareil. La page le lit dans l'onglet de votre navigateur, vérifie ses premiers octets et vous rend le résultat en téléchargement. Les outils de développement du navigateur montrent qu'aucune requête ne transporte le fichier."
  - q: "Peut-il exécuter mon code PHP et enregistrer le résultat en PDF?"
    a: "Non. Exécuter du PHP demande un serveur Web avec PHP installé. Pour enregistrer ce qu'affiche une page PHP, ouvrez-la dans votre navigateur, puis Imprimer et Enregistrer en PDF. Cet outil imprime le code source lui-même."
---
## Pourquoi un relevé se télécharge-t-il en .php ou en .aspx?

Beaucoup de portails de banques, de fournisseurs d'électricité, de paie ou de gouvernements envoient les documents par un script : l'adresse se termine par quelque chose comme `releve.php?id=…` ou `GetDocument.aspx`. Le serveur renvoie un PDF normal, mais il doit aussi ajouter un en-tête qui donne le nom du fichier (par exemple `releve-2026-10.pdf`). Quand cet en-tête manque ou est mal formé, le navigateur se rabat sur la fin de l'adresse et enregistre le PDF sous le nom `releve.php`. Certains navigateurs de téléphone et gestionnaires de téléchargement le font plus souvent que les navigateurs d'ordinateur.

Le document lui-même n'a rien. Les octets sont ceux d'un PDF; seul le nom est faux. Votre appareil regarde l'extension, voit `.php` et propose un éditeur de code, ou rien du tout, au lieu de votre lecteur PDF.

| Ce que vous voyez | Ce que c'est en général | Ce que fait cette page |
|---|---|---|
| `releve.php`, `facture.php`, `download.php` d'une banque ou d'un fournisseur | Un PDF avec la mauvaise extension | L'enregistre en `releve.pdf`, sans le modifier |
| `GetDocument.aspx`, `ViewPDF.aspx` d'un portail | Un PDF avec la mauvaise extension | L'enregistre en `GetDocument.pdf`, sans le modifier |
| Un fichier sans extension | Souvent un PDF | L'enregistre en ajoutant `.pdf` |
| Un fichier `.php` écrit par vous ou un développeur | Du code source PHP | Imprime le code dans un PDF, ligne par ligne |
| Un petit `.php` qui s'ouvre comme une page Web | Une page de connexion ou d'erreur envoyée au lieu du document | Imprime le HTML en texte; téléchargez le document de nouveau |

## Comment ouvrir un fichier .php en PDF?

### Étape 1 : déposez le fichier sur cette page

Cliquez sur la zone de dépôt ou glissez-y le fichier téléchargé. Sur un téléphone, choisissez-le dans le dossier Téléchargements. Le fichier est lu dans votre navigateur; il n'est pas téléversé.

### Étape 2 : l'outil vérifie ce qu'il contient

Tout PDF commence par les cinq caractères `%PDF-`. L'outil lit les 1 024 premiers octets, la plage que les lecteurs PDF acceptent eux-mêmes, et cherche cette signature. Si elle s'y trouve, le fichier est un PDF et il n'y a rien à convertir.

### Étape 3 : téléchargez le .pdf

Le résultat garde le nom d'origine avec `.pdf` à la fin : `releve.php` devient `releve.pdf`. Ouvrez-le dans n'importe quel lecteur PDF. Si le fichier était du code source, vous obtenez plutôt un PDF du code. Pour garder une année de relevés ensemble, [fusionnez les PDF](/fr/merge-pdf) en un seul fichier.

## Puis-je régler le problème en renommant le fichier moi-même?

Oui : si le fichier est un PDF à l'intérieur, remplacer `.php` par `.pdf` règle tout. L'outil existe parce que renommer est peu pratique :

- **Windows :** l'Explorateur de fichiers masque les extensions par défaut. Choisissez **Affichage**, puis **Afficher**, puis **Extensions de noms de fichiers**, renommez le fichier et confirmez l'avertissement.
- **Mac :** sélectionnez le fichier, choisissez **Fichier**, puis **Lire les informations**, et modifiez **Nom et extension**; confirmez avec **Utiliser .pdf**.
- **iPhone et Android :** les applications Fichiers permettent de renommer, mais certaines masquent l'extension ou gardent l'ancienne.

Renommer ne convertit rien. Si le fichier n'est pas un PDF à l'intérieur, le renommer en `.pdf` donne un fichier que tous les lecteurs refusent d'ouvrir; vérifier d'abord les premiers octets fait gagner du temps.

## Et si le fichier est du vrai code source PHP?

Développeurs, étudiants et réviseurs ont parfois besoin de code PHP sur papier ou en PDF : pour un travail, une revue de code, une annexe ou des archives. Quand aucune signature PDF n'est trouvée, l'outil imprime le fichier en texte brut :

- Courier 10 pt, qui garde l'indentation et les colonnes alignées
- Pages Lettre avec des marges de 50 pt, une nouvelle page dès qu'une page est pleine
- Longues lignes coupées à la marge, tabulations remplacées par quatre espaces
- Les caractères que Courier ne peut pas afficher, comme les émojis ou les écritures asiatiques, imprimés en `?`

Le code n'est ni exécuté ni coloré. Pour enregistrer la page qu'un script PHP produit, ouvrez cette page dans votre navigateur, puis **Imprimer** et **Enregistrer en PDF**.

## Et si ça ne fonctionne pas?

| Problème | Cause probable | Solution |
|---|---|---|
| Le PDF affiche du code HTML ou « session expirée » | Le site a envoyé une page de connexion ou d'erreur au lieu du document | Reconnectez-vous, téléchargez le document de nouveau, déposez le nouveau fichier |
| Le fichier ne fait que quelques Ko et n'a aucune page | Le téléchargement a été interrompu ou bloqué | Téléchargez de nouveau sur une connexion stable, ou avec un autre navigateur |
| Le PDF demande un mot de passe | La banque protège ses relevés par un mot de passe | Entrez le mot de passe indiqué par la banque (souvent une date de naissance ou des chiffres du compte) |
| Le téléchargement est un .zip, .xlsx ou .csv nommé .php | Le site a envoyé un autre type de fichier | Renommez-le avec sa vraie extension; ouvrez un CSV ou un XLSX directement |
| Les émojis ou caractères non latins du code imprimé deviennent ? | Ils sont hors du jeu de caractères d'Europe de l'Ouest de la police Courier | Gardez le fichier d'origine pour le texte exact; le PDF sert à la lecture |
