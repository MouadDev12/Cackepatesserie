# SweetCake E-Commerce React

Application e-commerce professionnelle en React pour la pâtisserie SweetCake.

## 🚀 Fonctionnalités

- ✅ Interface moderne et responsive
- ✅ Gestion du panier avec Context API
- ✅ Ajout/suppression de produits
- ✅ Calcul automatique du total
- ✅ Formulaire de commande intégré
- ✅ Slider d'images automatique
- ✅ Navigation fluide
- ✅ Design professionnel avec glassmorphism

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── Header.jsx          # En-tête avec navigation et badge panier
│   ├── Hero.jsx            # Section hero avec slider
│   ├── ProductCard.jsx     # Carte produit
│   ├── Cart.jsx            # Panier d'achat
│   ├── About.jsx           # Section à propos
│   ├── Contact.jsx         # Formulaire de contact/commande
│   └── Footer.jsx          # Pied de page
├── context/
│   └── CartContext.jsx     # Gestion globale du panier
├── data/
│   └── products.js         # Données des produits
├── App.jsx                 # Composant principal
├── App.css                 # Styles globaux
└── main.jsx               # Point d'entrée
```

## 🎨 Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool rapide
- **Context API** - Gestion d'état
- **CSS3** - Styles modernes (glassmorphism, animations)
- **Font Awesome** - Icônes

## 🛠️ Fonctionnalités du panier

- Ajout de produits au panier
- Modification des quantités (+/-)
- Suppression de produits
- Calcul automatique du total
- Badge de notification sur l'icône panier
- Panier sticky qui suit le scroll

## 📱 Responsive Design

L'application est entièrement responsive :
- Desktop (> 900px)
- Tablet (520px - 900px)
- Mobile (< 520px)

## 🎯 Prochaines améliorations possibles

- Intégration d'une API backend
- Système de paiement en ligne
- Authentification utilisateur
- Historique des commandes
- Filtres et recherche de produits
- Mode sombre
- Multi-langues

## 📄 Licence

© 2024 SweetCake - Tous droits réservés
