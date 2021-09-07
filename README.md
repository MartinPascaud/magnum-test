# Préambule

## Le stage

Le sujet de l'entreprise est assez complexe et demande des efforts intellectuels au jour le jour pour comprendre le modèle de données et l'architecture du code, afin de pouvoir faire des développements pertinents et développer un produit exceptionnel, c'est l'objectif qu'on s'est fixé.
Je cherche donc des candidats volontaires, compétents, capable d'apprendre rapidement, et ayant envie de faire de leur stage un véritable tremplin pour la suite de leur carrière. En échange de votre motivation, ma mission durant votre stage est de vous accompagner au mieux pour booster vos connaissances et votre compréhension afin de vous ouvrir de belles portes pour la suite, que ce soit en interne chez nous ou dans une autre entreprise.
Ayant beaucoup de travail et peu de temps pour parcourir toutes les candidatures, je suis obligé de trier les candidats de manière en partie "automatique", à travers ce test. En l'échange des efforts que vous devrez certainement fournir pour réussir ce test, sachez que votre réussite sera très appréciée et sera pour moi un très bon indicateur concernant votre candidature.
Dans un deuxième temps, nous débrieferons votre test ensemble lors d'un entretien et je vous poserai également des questions techniques d'ordre général concernant Javascript, l'orienté objet, React. Nous ferons également connaissances durant cet entretien et parlerons de l'entreprise, de votre parcours et du mien.

Vous pouvez m'envoyer des questions concernant le test en cas de blocage.

Réussir ce test vous demandera un travail non négligeable, mais aura des contreparties qui vous seront profitables :

- Cela prouvera votre forte motivation et votre envie d'apprendre durant ce stage, qui sera exigeant mais vous amènera à un très bon niveau !
- Vous aurez d'hors et déjà mis un pied dans le fonctionnement de notre solution, puisque ce test en est inspiré.
- Vous aurez relevé un défi difficile, qui vous aura certainement appris des choses.
- Vous aurez appris à travers les différentes lectures de documentation comment fonctionnent certains éléments clés de l'environnement React actuel.

## Pourquoi ce test ?

Ce test a pour objectif de tester la capacité à élaborer une solution abstraite à un problème complexe donné et à l'implémenter. Il vous demandera également d'avoir des connaissances de base solides avec React. Je vous invite à bien lire la documentation de React puisque c'est notre outil de travail au quotidien.
Ce test vous mettra en situation puisque l'entreprise Magasin Numérique développe une solution de création de site adossée à un CMS (Content Management System). Toutes ces solutions sont développées en interne et ont été construites de zéro.

A Magasin Numérique, nous administrons les sites de plusieurs clients comment Secrets d'histoire (https://secretsdhistoire.tv), Front Populaire (https://frontpopulaire.fr) et AfterFoot (https://afterfoot.media).

Ces sites sont créés à partir d'un backoffice qui permet à la fois

- la création de modèle de données (édition de schéma de données dynamiques)
- la manipulation des données (création, édition, suppression)
- la connexion à des services externes
- la création du site à proprement parlé, constitué d'un squelette commun (pages login, signup, etc), de pages statiques de présentation (home, contacts, etc) et enfin de page dynamique (pages contenus, vidéos, etc). Ces pages recoivent du CSS commun à l'ensemble des clients et du CSS spécifique afin d'arriver à un résultat conforme.

## Objectifs concrets du test

En utilisant et en comprenant le code déjà implémenté, vous allez devoir compléter la solution afin de la rendre fonctionnelle et ainsi créer un micro générateur de site (Builder) associé à un visualisateur (Preview).
Dans ce test nous ne nous intéressons pas à la partie Schéma de données dynamiques mais seulement à la création de pages dynamiques.

## Les librairies utilisées dans ce test

On utilise

- `flow` pour typer statiquement notre application, voir https://flow.org/en/docs/getting-started/. Vous n'aurez pas à typer vous-même durant ce test. Flow vous aidera à suivre les données que vous manipulez.
- `create-react-app` pour générer et lancer notre application react => https://reactjs.org/docs/create-a-new-react-app.html (lancer l'application avec `yarn start`)
- `react-bulma-components` pour les composants de base, implémentation React des composants CSS de Bulma qui est un framework css => https://bulma.io/. Vous pouvez utiliser tous les composants de Bulma. Vous pouvez consulter la liste des composants utilisable / utilisés ici https://couds.github.io/react-bulma-components/. Si vous préférez ne pas utiliser la librairie, vous pouvez aussi utiliser les bannières HTML classiques et ajouter votre propre CSS.
- `react-router` pour le routing. Vous n'avez pas à vous intéresser au fonctionnement de react-router pour le test, mais nous l'utilisons à Magasin Numérique dans notre solution.
- `nanoid` librairie très légère permettant de générer des ids uniques
- `lodash` librairie fournissant des fonctions utilitaires de manipulation de données. Dans ce test seule la fonction `fromPairs` est utilisée https://lodash.com/docs/4.17.15#fromPairs.
- `react-dnd` pour le drag and drop https://react-dnd.github.io/react-dnd/docs/overview, vous n'avez pas à comprendre comment cela marche pour le test.

## Les connaissances qui vous aideront pendant ce test

- Les hooks react => https://reactjs.org/docs/hooks-intro.html, et tout particulièrement le hook `useState` https://reactjs.org/docs/hooks-state.html, le hook `useEffect` https://reactjs.org/docs/hooks-effect.html et le hook `useCallback` https://reactjs.org/docs/hooks-reference.html#usecallback. Prenez le temps de lire la documentation
- Immutability: dans ce test vous devrez toujours modifié les valeurs de manière "immutable", c'est-à-dire que vous devrez toujours reconstruire les objets et non les modifier. Exemple: `const newArray = [...previousArray, newElement]` (bien), `array.push(newElement)` (pas bien). Cela permet à React de "voir" facilement ce qui a changé dans les données et de correctement mettre à jour le DOM. Un bon article sur le sujet => https://blog.logrocket.com/immutability-in-react-ebe55253a1cc/. Cette page vous apprendra aussi à utiliser l'opérateur spread de ES6 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax.

## Les outils qui vous aideront

- react-developer-tools -> https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

# Le test

## Présentation du repository

### La structure de données

Dans ce test nous construisons une simple page. Notre page est constitué de rows qui peuvent accueillir des composants, mais aussi être subdivisée en colonnes qui elles aussi peuvent recevoir des composants.
La variable contenant le modèle de données permettant de créer et de render la page s'appelle `layout`

Explication des différents types de données au sein de notre modèle de données `layout` :

- Le `layout` d'une page est constituée d'une liste de `rows`.

- Une `row` peut

  - avoir des composants (`components`) qui prennent toutes la largeur de la row.
  - **OU** être subdivisée en colonnes (`columns`).
    **Note: Les deux cas ne sont pas possibles en même temps !**

- Une colonne (`column`)

  - appartient à une `row`
  - a une `size` (taille) allant de 1 à 12. La somme des sizes des colonnes est toujours égale à 12.
  - contient une liste de composants (`components`).

- Un composant (`component`)
  - a un `componentId` qui permettra de l'identifier et de render le bon composant dans la preview
  - des options qui permettront de "nourrir" ce composant, c'est-à-dire afficher des données lors de la prévisualisation.

Un exemple de layout

```javascript
const layout = [
  {
    id: "row-1-id",
    components: [],
    columns: [
      // Column of size 6 (half width) with two components
      {
        id: "col-1-id",
        size: 6,
        components: [
          {
            id: "comp-1-id",
            componentId: "paragraph",
            options: {
              content: "Lorem ipsum",
            },
          },
          {
            id: "comp-2-id",
            componentId: "image",
            options: {
              src: "data:image/jpeg;base64...",
            },
          },
        ],
      },
      { id: "col-2-id", size: 6, components: [] }, // Empty column of size 6
    ],
  },
  {
    id: "row-2-id",
    // Row with two components but no columns
    components: [
      {
        id: "comp-3-id",
        type: "COMPONENT",
        componentId: "Title",
        options: {
          content: "Lorem ipsum",
        },
      },
      {
        id: "comp-4-id",
        componentId: "paragraph",
        options: {
          content: "Lorem ipsum",
        },
      },
    ],
    columns: [],
  },
];
```

### La structure des fichiers

```
.
+-- index.js // Entry point of our code, mounts our App component on div#root
+-- App.js // App component, highest component in the React tree
+-- AppLayout.js // Small component that adds basic CSS rules to nicely display our app content
+-- Builder/ // The component responsible for holding the layout data, display two tabs to a builder and a preview that will read from the layout data.
|
|   +-- Builder // The component responsible for editing the layout data
|   |   +-- index.js // Entry point, renders the sidebar and the page editor
|   |   +-- Sidebar/ // Renders the elements (basic components and page layout options) that can be dragged and dropped inside rows or columns to build the page
|   |   |   +-- index.js
|   |   |   +-- Component.js // Component that can be dragged and added to the page
|   |   |   +-- Layout.js // Layout option for a row in the page (like split the row in two columns of 6 each)
|   |   +-- Page/
|   |   |   +-- index.js // Renders the list of rows and two buttons, one to add row and one to reset the layout
|   |   |   +-- Row.js // A row is the main container, that either renders columns or components
|   |   |   +-- Column.js // A column holds components
|   |   |   +-- Component.js // A component is held by rows or components.
|
|   +-- Preview // The component responsible for visualizing the built layout, with data !
|   |   +-- index.js
|   |   +-- Column.js
|   |   +-- Component.js
|   |   +-- Row.js
|
|   +-- components // The components that will be rendered in the end on the page
|   |   +-- index.js // Exports all components
|   |   +-- Image.js
|   |   +-- Paragraph.js
|   |   +-- Title.js
```

## Setup

1. Commencez par forker le répository sur un repository public. Pour le rendu du test, vous devez m'envoyer le lien à lucas.lbonnet.pro@gmail.com lorsque vous avez fini.

2. Installer les node_modules en lançant la commande `yarn`

3. Lancer l'application en lançant la commande `yarn start`

4. Vous devez avoir pour le builder ce résultat ![résultat](/screenshots/setup-builder.png?raw=true "Builder initial view") et pour la preview ce résultat ![résultat](/screenshots/setup-preview.png?raw=true "Preview initial view"). Si vous n'avez pas ces résultats, envoyer moi un mail à lucas.lbonnet.pro@gmail.com .

5. Commencez à répondre aux questions. Créez un commit par question, de sorte que je puisse facilement suivre le chemin de votre test.

## Questions

1. **Afficher le contenu des composants dans la preview**
   Comme vous pouvez le remarquer dans la preview, les composants qui devraient s'afficher sont manquants.
   A partir des propriétés reçues par le composant `Component` dans la Preview et de la COMPONENT_MAP, récupérer le composant correspondant. Une fois le composant récupéré, transmettez via les propriétés ses options de manière à afficher les contenus qui ont été paramétrés dans le builder.
   Voilà le résultat auquel vous devez arriver ![Q1 result](/screenshots/q1-result.png?raw=true "Q1 result")

2. **Implémentation de la fonctionnalité "reset" du layout**

   Implémenter la fonctionnalité de reset du layout de la page (dans src/Builder/Builder/index.js), bonus si vous utilisez `React.useCallback` avec les bonnes dépendances. Actuellement le bouton ne fait rien. Résultat attendu: cliquer sur le bouton reset efface l'ensemble du contenu du builder (et de la preview). Vous pouvez rafraîchir la page pour réavoir le DEFAULT_LAYOUT (const déclaré dans Builder/index.js). Après avoir cliqué sur le bouton reset vous devez observer cela ![Q2 result](/screenshots/q2-result.png?raw=true "Q2 result")

3. **Ajout d'une row dans le layout**

   Implémenter la fonctionnalité d'ajout d'une row dans le layout de la page (dans src/Builder/Builder/index.js), bonus si vous utilisez `React.useCallback` avec les bonnes dépendances. La nouvelle row ajoutée doit être fidèle au modèle de données. Résultat attendu: une row est ajoutée à la fin. ![Q3 result](/screenshots/q3-result.png?raw=true "Q3 result")

   Bonus: Si vous utilisez `React.useCallback`, essayez de faire en sorte que le `layout` courant ne fasse pas partie de la liste des dépendances en utilisant la version édition fonctionnelle de mise à jour d'un state. Exemple `setCount(previousCount => previousCount + 1)`. Vous pouvez prendre exemple sur les fonctions `deleteRow` et `updateRow`

4. **Suppression d'un composant dans une colonne**

   Implémenter la fonctionnalité de suppression d'un composant d'une colonne (dans src/Builder/Builder/Page/Column.js), actuellement cliquer sur le bouton de suppression d'un composant **dans une colonne** ne fait rien. Bonus si vous utilisez `React.useCallback` avec les bonnes dépendances. Résultat attendu: supprimer un composant d'une colonne supprime effectivement ce composant.

5. **Edition du contenu d'un composant**

   Nous voulons maintenant pouvoir éditer le contenu des composants dans le builder.

   - Pour commencer, ajouter un state dans le composant de manière à pouvoir ouvrir la modal d'édition (le composant `Modal` reçoit les propriétés show qui doit être un boolean et onClose qui doit être une fonction).
   - Maintenant que la modal s'ouvre, il nous faut ajouter un formulaire (voir https://couds.github.io/react-bulma-components/?path=/docs/form-basics--default, possible aussi de faire votre propre formulaire si vous ne comprenez pas comment utiliser la librairie) qui affiche une input pour chacune des options du composant (voir le type `ComponentType` pour trouver les options). Créer un state permettant d'éditer les options. Les options du composant ne doivent être écrite que lorsque l'utilisateur valide les changements dans la modal en cliquant sur le bouton "Enregistrer".
     Résultat attendu :
     ![Q5 result](/screenshots/q5-result.png?raw=true "Q5 result")

6. (Optionnel, bonus) Sauriez-vous ajouté une fonctionnalité permettant à l'utilisateur de changer l'alignement du texte pour les composants textuels. Vous pouvez implémenter cette fonctionnalité comme bon vous semble. Vous pouvez aussi simplement y réfléchir, et nous en parlerons pendant le débrief !

**Félicitations, vous avez terminé le test !**

# Le debrief du test

Nous reverrons ensemble ce que vous avez fait, et je vous poserai des questions concernant les détails d'implémentation.
Je vous poserai également des questions d'ordre général concernant javascript, l'orienté objet, React.
A très bientôt j'espère !
