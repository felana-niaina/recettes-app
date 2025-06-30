# Recipe Galaxy

**Recipe Galaxy** est une application web moderne de présentation de recettes, développée avec **Next.js**, **Tailwind CSS** et **ShadCN/UI**. Elle permet de visualiser des recettes avec filtres dynamiques, affichage détaillé animé, et prise en charge du mode sombre/clair.

---

# Fonctionnalités

- Listing de recettes depuis une API externe
- Filtrage des recettes par niveau de difficulté
- UI moderne avec composants ShadCN et gestion du thème (dark/light)
- Animations fluides grâce à `framer-motion`
- Génération statique (SSG) avec revalidation automatique (ISR)
- Tests unitaires sur les composants de base

---

# Stack technique

- **Framework** : `Next.js`
- **Styles** : `Tailwind CSS`
- **Thème** : `next-themes` (gestion dark/light mode)
- **Animation** : `framer-motion`
- **Tests** : `jest`, `@testing-library/react`

---

# Structure du projet

.
├── components         → Composants UI (RecipeCard, ThemeToggle, DetailsRecipe)
├── pages              → Pages Next.js (/, /recipes, /recipes/[slug])
├── styles             → Fichiers CSS
├── public             → Images
├── tests              → Fichiers de test unitaire
├── README.md



---

# INSTALLATION LOCALE

1. Cloner le projet :
```bash
`git clone https://github.com/felana-niaina/recettes-app.git`
cd recettes-app
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

Accède à l'application sur : [http://localhost:3000]

---

# Tests

Ce projet utilise **Jest** et **React Testing Library** pour les tests unitaires.

### Lancer les tests

Pour exécuter tous les tests, utilisez la commande suivante :

```bash
npm test
```
---

# Choix technique : SSG / ISR

Nous avons utilisé la fonction `getStaticProps` de Next.js avec l’option `revalidate`.
Les avantages  :

- Amélioration des performances grâce à la génération statique
- Données automatiquement rafraîchies sans rebuild manuel (ISR)


---

# UX & UI

- Composants : `Button`, `Card`, `Select` (de ShadCN)
- Thème personnalisable via un toggle visible et accessible
- Interface responsive pour mobiles et desktop
- Animations des titres, cartes et icônes avec `framer-motion`


---

# Auteur

Projet réalisé par `Felaniaina` dans le cadre d'un test technique.

