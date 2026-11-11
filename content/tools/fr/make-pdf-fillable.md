---
title: "Rendre un PDF remplissable gratuitement : champs détectés pour vous"
h1: "Comment rendre un PDF remplissable"
lead: "Transformez les lignes vides et les cases d'un PDF figé en vrais champs de formulaire où n'importe qui peut écrire. Détection et enregistrement se font dans votre navigateur; rien n'est téléversé."
description: "Rendez un PDF figé remplissable gratuitement dans votre navigateur : les lignes (____) deviennent des champs texte et les [ ] des cases à cocher en 2 secondes."
answer: "Téléversez le PDF dans la page, cochez les pages qui contiennent des blancs et cliquez sur Détecter et Remplir. Chaque suite de trois traits de soulignement ou plus devient un champ texte et chaque [ ] ou ☐ une case à cocher; la copie remplissable se télécharge aussitôt et s'ouvre dans Acrobat Reader, Aperçu, Chrome ou Edge. Gratuit, sans compte, sans téléversement. Fonctionne sur les PDF avec couche texte, pas sur les numérisations."
updated: 2026-11-09
limits:
  - ["Prix", "Gratuit, sans compte, sans filigrane"]
  - ["Où les champs sont ajoutés", "Dans l'onglet de votre navigateur. pdf.js repère les blancs; pdf-lib écrit des champs AcroForm standard. Aucun téléversement."]
  - ["Taille maximale du fichier", "Aucun plafond fixe. Les formulaires sont généralement petits (moins de 5 Mo); un document de 60 pages et 40 Mo avec images fonctionne sur un portable et ralentit un téléphone."]
  - ["Nombre de pages", "Aucune limite fixe. La détection ne s'exécute que sur les pages cochées : un formulaire de 2 pages dans un dossier de 50 pages prend une ou deux secondes."]
  - ["Entrée", ".pdf avec couche texte. Les formulaires numérisés et les formulaires XFA ne sont pas détectés (voir plus bas). Les fichiers protégés par mot de passe doivent d'abord être déverrouillés."]
  - ["Ce qui est détecté", "Les suites de 3 traits de soulignement ou plus (____) deviennent des champs texte; [ ], [  ] et ☐ deviennent des cases à cocher. Les pointillés, les lignes tracées et les cellules de tableau ne sont pas détectés."]
  - ["Sortie", "Un nouveau PDF nommé fillable_<nom>.pdf avec des champs AcroForm. Les champs existants sont conservés; l'original n'est pas modifié."]
  - ["Ce qui reste sur votre appareil", "Le PDF, la copie remplissable et votre sélection de pages. Le site n'enregistre qu'une visite anonyme."]
  - ["Fonctionne hors ligne?", "Oui, une fois la page chargée."]
faq:
  - q: "Comment rendre un PDF remplissable gratuitement?"
    a: "Ouvrez l'outil, téléversez le PDF, cochez les pages qui ont des lignes vides ou des cases, puis cliquez sur Détecter et Remplir. La copie remplissable se télécharge en quelques secondes; ouvrez-la dans Acrobat Reader, Aperçu ou Chrome et cliquez sur une ligne pour écrire. Sans compte, sans filigrane, et le fichier ne quitte jamais votre appareil."
  - q: "Puis-je dessiner mes propres champs où je veux?"
    a: "Pas avec cet outil. Il place des champs uniquement là où il trouve des traits de soulignement ou des marques de case dans le texte du PDF. Si votre formulaire utilise des lignes tracées ou des cellules de tableau vides, le plus rapide est d'ouvrir le document d'origine, de remplacer les lignes par des traits de soulignement, de réexporter en PDF et de relancer l'outil. Pour placer des champs à la main, il vous faut Acrobat Pro, PDFescape, LibreOffice Draw ou un éditeur semblable."
  - q: "Pourquoi une énorme zone de texte couvre-t-elle toute la page?"
    a: "C'est le comportement de repli. Quand une page cochée ne contient ni traits de soulignement ni marques de case, l'outil ajoute un seul champ de notes multiligne couvrant la page à l'intérieur des marges, pour qu'elle serve au moins aux annotations. Si vous n'en vouliez pas, relancez l'outil en ne cochant que les pages qui contiennent vraiment des blancs."
  - q: "Est-ce que ça fonctionne sur un formulaire numérisé?"
    a: "Non. Une numérisation est une image : il n'y a aucun texte à lire pour le détecteur, et chaque page cochée reçoit la zone de notes de repli. Passez d'abord la numérisation dans un logiciel de reconnaissance de caractères pour que les traits de soulignement existent comme texte, ou recréez le formulaire dans Word avec des traits de soulignement et exportez-le en PDF."
  - q: "Les champs fonctionneront-ils dans Adobe Acrobat Reader, Aperçu et Chrome?"
    a: "Oui. Ce sont des champs texte et des cases à cocher AcroForm standard, du même type que ceux créés par Acrobat; ils fonctionnent dans Acrobat Reader, Aperçu sur Mac, Chrome, Edge, Firefox et la plupart des applications PDF de téléphone. Les valeurs saisies sont enregistrées dans le PDF quand la personne sauvegarde le fichier."
  - q: "Puis-je rendre remplissable un formulaire de l'ARC ou de Revenu Québec?"
    a: "S'il a été imprimé ou aplati en PDF avec une couche texte et qu'il marque ses blancs par des traits de soulignement, oui. Beaucoup de formulaires officiels sont déjà remplissables, et certains (surtout les plus anciens) utilisent le format XFA, que cet outil ne peut pas lire; si le PDF affiche une page « Please wait... » dans Chrome, c'est du XFA. Remplissez ceux-là dans Acrobat Reader."
  - q: "L'outil conserve-t-il les champs déjà présents dans le PDF?"
    a: "Oui. Le formulaire existant du document est chargé et les nouveaux champs s'y ajoutent, si bien qu'un formulaire partiellement remplissable gagne des champs sur les pages cochées et garde ceux qu'il avait. Les noms de champs sont générés automatiquement (txt_0_1, chk_0_2), ce qui ne compte que si vous traitez les données par script."
---
## Comment rendre un PDF remplissable gratuitement?

Quatre gestes, et la détection elle-même prend environ une seconde par page.

### Étape 1 : téléversez le PDF figé

Cliquez sur **Choisir un fichier** ou glissez le PDF dans la zone de dépôt. L'outil affiche une vignette de chaque page. Un PDF « figé », ici, est un document dont les blancs ne sont que du texte : un bail avec `Nom du locataire : ____________`, un formulaire de consentement avec `[ ] J'accepte`, une fiche d'inscription exportée de Word.

### Étape 2 : sélectionnez les pages à analyser

Sous l'en-tête **Sélectionnez les pages à scanner**, cochez les pages qui contiennent des blancs, ou utilisez **Tout sélectionner**. C'est ici que les gens se trompent : ne cochez que les pages qui ont vraiment des traits de soulignement ou des cases. Une page cochée qui n'en a pas reçoit un grand champ de notes de repli, pratique sur une page de commentaires et agaçant sur une lettre de présentation.

### Étape 3 : cliquez sur Détecter et Remplir

Appuyez sur **Détecter et Remplir**. Pour chaque page cochée, l'outil lit la couche texte, trouve chaque suite de trois traits de soulignement ou plus et chaque `[ ]` ou `☐`, puis place un champ texte ou une case à cocher exactement à cette position et à cette largeur. Les champs déjà présents dans le PDF sont conservés.

### Étape 4 : téléchargez et testez

Le fichier se télécharge sous le nom `fillable_<nom d'origine>.pdf`. Ouvrez-le dans Acrobat Reader, Aperçu ou Chrome, cliquez sur le premier blanc et écrivez. La touche Tab passe d'un champ à l'autre dans l'ordre où ils ont été trouvés sur la page. Votre original n'a pas changé.

> **Astuce :** Les champs texte prennent la largeur de la suite de traits de soulignement : une ligne de 30 traits donne un champ d'environ 6 cm en 11 points. Faites les blancs du document source aussi longs que les réponses attendues.

## Qu'arrive-t-il à mon document quand il devient remplissable?

Deux bibliothèques font le travail, toutes deux dans l'onglet. pdf.js lit le texte de chaque page sélectionnée et rapporte chaque chaîne avec sa position, sa largeur et sa hauteur. pdf-lib ouvre les mêmes octets comme document modifiable, demande son formulaire (en le créant si le PDF n'en a pas) et, pour chaque correspondance, crée un champ et le fixe à la page aux coordonnées rapportées. Les champs texte reçoivent une bordure presque invisible pour que la page garde son apparence; les cases à cocher reçoivent un carré gris fin, 20 % plus grand que la hauteur du texte, pour être faciles à toucher sur un téléphone.

Le document est ensuite sérialisé et proposé en téléchargement. Aucune requête ne transporte votre fichier : l'onglet Réseau des outils de développement de votre navigateur ne montre que les ressources de la page et une visite anonyme.

Les formulaires sont, presque par définition, les documents qui recueillent des renseignements personnels : un bail résidentiel avec NAS et coordonnées d'employeur, un consentement médical, une fiche d'inscription à la garderie, une autorisation de l'ARC ou de Revenu Québec imprimée en PDF. Les rendre remplissables sur votre propre machine signifie que ces renseignements ne se retrouvent jamais chez un tiers, et qu'il n'y a rien à quoi la LPRPDE ou la Loi 25 du Québec pourrait s'appliquer.

## Quels blancs seront détectés et lesquels ne le seront pas?

La détection est fondée sur des règles et elle est littérale. Les connaître vous permet de préparer un document qui se convertit parfaitement du premier coup.

| Dans le texte du PDF | Détecté comme | Taille du champ | Remarques |
|---|---|---|---|
| `___` (3 traits de soulignement ou plus) | Champ texte | Largeur de la suite; hauteur du texte plus 4 points | Fonctionne pour `Nom : ________` et pour les lignes pleine largeur |
| `[ ]`, `[  ]` | Case à cocher | 1,2 × la hauteur du texte, carrée | Les espaces entre les crochets sont acceptés |
| `☐` (case U+2610) | Case à cocher | 1,2 × la hauteur du texte | Fréquent dans les documents Word |
| `.......` points de conduite | Non détecté | — | Remplacez-les par des traits de soulignement dans le source |
| Une ligne tracée (bordure de tableau, filet) | Non détecté | — | Les lignes sont des graphiques, pas du texte |
| Une cellule de tableau vide | Non détecté | — | Ajoutez des traits de soulignement dans la cellule |
| `( )` ou `O` pour des choix de type bouton radio | Non détecté | — | Utilisez `[ ]`; chaque case devient indépendante |
| Traits de soulignement dans une image numérisée | Non détecté | — | Faites d'abord la reconnaissance de caractères |
| Une page sans correspondance | Un champ de notes multiligne pleine page | La page moins des marges de 50 points | Texte d'invite « Enter your notes here... » |

La durée de la détection dépend de la quantité de texte sur les pages cochées, pas de la taille du fichier :

| Document | Pages cochées | Champs trouvés | Durée (portable de 2022) |
|---|---|---|---|
| Feuille d'inscription de bénévoles d'une page | 1 | 8 à 15 | moins d'une seconde |
| Bail résidentiel de 4 pages imprimé depuis Word | 4 | 25 à 40 | 1 à 2 secondes |
| Dossier d'accueil de 12 pages | 12 | 60 à 120 | 3 à 5 secondes |
| Rapport de 30 pages avec un formulaire d'évaluation de 2 pages à la fin | 2 | 10 à 20 | 1 seconde |

## Comment rendre remplissable un bail numérisé ou un formulaire imprimé?

Réponse honnête : pas directement; voici le chemin qui fonctionne.

**Une numérisation d'un formulaire papier.** Le numériseur a produit une image. Passez-la à la reconnaissance de caractères (ROC) (Reconnaître le texte d'Acrobat, ABBYY FineReader ou la ROC intégrée à bien des pilotes de numériseur) pour que les traits de soulignement imprimés deviennent des caractères de texte, puis utilisez cet outil. La ROC lit souvent une longue ligne vide comme une série de traits ou comme rien du tout; vérifiez le résultat et attendez-vous à corriger quelques champs.

**Un formulaire que vous avez en Word, Pages ou Google Docs.** Ne le numérisez pas. Remplacez les lignes tracées et les points de conduite par des traits de soulignement, mettez `[ ]` à chaque case, exportez en PDF et lancez cet outil. C'est le résultat le plus propre, car chaque blanc est du vrai texte à une position connue.

**Un formulaire de l'ARC, de Service Canada, de Revenu Québec ou du Tribunal administratif du logement.** Vérifiez d'abord s'il est déjà remplissable; la plupart des formulaires actuels le sont. S'il s'ouvre dans Chrome sur une page qui dit « Please wait... If this message is not eventually replaced », c'est un formulaire XFA, que cet outil ne peut pas lire et que la plupart des navigateurs n'affichent pas. Le [guide XFA](/fr/guides/edit-xfa-pdf) explique comment les remplir dans Acrobat Reader. Si vous avez imprimé un formulaire officiel en PDF et perdu ses champs, la copie imprimée garde habituellement ses traits de soulignement comme texte et se convertit bien ici.

**Un formulaire reçu par courriel en PDF figé.** Lancez-le simplement. Si une page revient avec une seule grande zone de notes, ses blancs sont des lignes tracées plutôt que du texte; demandez l'original à l'expéditeur ou tapez vos réponses dans la zone de notes.

## Comment rendre un PDF remplissable sur Mac, Windows, iPhone ou Android?

**Mac.** L'outil fonctionne dans Safari, Chrome ou Firefox. Aperçu peut remplir des champs, mais pas en créer : la démarche habituelle sur Mac est cette page, puis Aperçu pour remplir. La fonction Préparer un formulaire d'Acrobat Pro fait aussi de la détection automatique, avec placement manuel, moyennant un abonnement.

**Windows.** Edge, Chrome ou Firefox. Windows n'a pas de concepteur de formulaires intégré. LibreOffice Writer peut créer des contrôles de formulaire et les exporter en PDF remplissable si vous reconstruisez le formulaire de zéro, ce qui demande plus de travail que de convertir ici un formulaire existant.

**iPhone et iPad.** Fonctionne dans Safari; touchez les vignettes pour sélectionner les pages. Le PDF remplissable s'enregistre dans Fichiers → Téléchargements et s'ouvre dans Fichiers, Livres ou Acrobat Reader, où vous touchez un champ pour écrire. Les téléphones traitent facilement les formulaires courants, puisque la détection ne touche que le texte, pas les images.

**Android.** Chrome s'en charge; le lecteur PDF de Google et Acrobat Reader remplissent les champs. Gardez les fichiers riches en images sous environ 50 Mo sur les téléphones à mémoire limitée.

**Chromebook.** Comme sur Chrome de bureau, et le lecteur intégré de Chrome remplit le résultat.

## Quand ne pas utiliser cet outil?

- **Les blancs sont des lignes tracées, pas des traits de soulignement.** Rien ne sera détecté. Corrigez le document source ou utilisez un éditeur manuel.
- **Le formulaire est une numérisation sans ROC.** Vous obtiendrez une zone de notes par page et aucun vrai champ.
- **Le PDF utilise le format XFA.** Il s'affiche comme une page d'avertissement dans la plupart des lecteurs et n'a pas de couche texte lisible pour le détecteur. Voyez [comment modifier un PDF XFA](/fr/guides/edit-xfa-pdf).
- **Il vous faut des types de champs précis** : listes déroulantes, groupes de boutons radio, sélecteurs de date, totaux calculés, champs de signature numérique ou validation de champs obligatoires. Cet outil crée uniquement des champs texte et des cases à cocher.
- **Il vous faut des champs nommés pour traiter les données.** Les noms sont générés (`txt_0_3`), pas tirés des libellés.
- **Le fichier est protégé par mot de passe.** Réenregistrez d'abord le fichier sans mot de passe dans Acrobat Reader ou Aperçu.
- **Le formulaire doit être signé.** Rendez-le remplissable, remplissez-le, puis ajoutez la signature avec [Signer un PDF](/fr/sign-pdf); la signature aplatit son image dans la page.

## Dépannage

| Problème | Solution | Pourquoi ça fonctionne |
|---|---|---|
| Une page a reçu une zone de texte géante au lieu de champs | Relancez en ne cochant que les pages contenant des traits de soulignement ou des [ ] | La zone de notes pleine page est le repli pour les pages sans correspondance |
| Aucun champ sur un formulaire numérisé | Faites la ROC, ou reconstruisez le formulaire avec des traits de soulignement dans Word | La détection lit la couche texte, et une numérisation n'en a pas |
| Le champ est plus court que la ligne imprimée | Allongez la suite de traits dans le source et réexportez | La largeur du champ égale celle des traits de soulignement |
| Le texte paraît minuscule ou coupé dans un champ | Écrivez moins, ou élargissez le blanc dans le source | La hauteur du champ suit celle du texte de la ligne d'origine |
| La case est légèrement décalée par rapport au carré | Attendu à un point ou deux près; ignorez-le | Le champ est ancré à la position du crochet dans le texte |
| Chrome affiche « Please wait... » au lieu du formulaire | C'est un formulaire XFA; ouvrez-le dans Acrobat Reader | Les formulaires XFA ne sont pas rendus par les moteurs PDF des navigateurs |
| Le bouton est grisé | Cochez au moins une page | La détection ne s'exécute que sur les pages sélectionnées |
| Les champs disparaissent après remplissage et sauvegarde sur iPhone | Demandez d'utiliser Acrobat Reader ou Fichiers plutôt que l'aperçu d'une messagerie | Certains aperçus affichent les valeurs sans les enregistrer |

## Que faire du PDF remplissable?

- [Signer un PDF](/fr/sign-pdf) ajoute une signature dessinée, tapée ou téléversée une fois le formulaire rempli.
- [Fusionner des PDF](/fr/merge-pdf) réunit le formulaire avec une lettre de présentation ou des pièces justificatives en un seul dossier.
- [Supprimer des pages PDF](/fr/delete-pdf-pages) retire les pages d'instructions avant l'envoi.
- [Compresser un PDF](/fr/compress-pdf) allège un formulaire avec logos ou photos pour qu'il passe la limite d'un courriel.
- [Organiser un PDF](/fr/organize-pdf) remet les pages du formulaire dans le bon ordre avant l'envoi du dossier.

## En résumé

Si un PDF marque ses blancs par des traits de soulignement et des cases `[ ]`, cet outil les transforme en vrais champs de formulaire standard en une ou deux secondes, dans votre navigateur, sans téléversement ni compte. Il ne détecte ni les lignes tracées, ni les numérisations, ni le XFA, et il ne permet pas de placer des champs à la main; pour ces cas, corrigez le document source ou utilisez un éditeur de bureau. Cochez les bonnes pages, cliquez sur Détecter et Remplir, et testez le premier champ avant d'envoyer.
