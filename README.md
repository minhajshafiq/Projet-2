# Booki – React + Vite + TypeScript + Tailwind

Refonte du projet Booki (maquette OpenClassrooms) avec une stack moderne : React 19, Vite, TypeScript et Tailwind. L’application affiche des hébergements et activités filtrables, avec une interface responsive et localisée (FR/EN).

## 🚀 Prérequis
- Node.js ≥ 18
- npm (fourni avec Node)

## 🛠 Installation & commandes
```bash
npm install
npm run dev        # serveur de dev (http://localhost:5173)
npm run lint       # ESLint
npm run typecheck  # vérification TypeScript
npm run build      # build de production
npm run preview    # prévisualisation du build
```

## 📂 Structure rapide
- `src/main.tsx` : point d’entrée Vite/React
- `src/App.tsx` : composition des sections
- `src/features/` : sections (search, hosting, activities, layout)
- `src/components/ui/` : composants UI réutilisables
- `src/app/i18n/` : clés et traductions FR/EN
- `public/` : assets statiques

## ✨ Fonctionnalités
- Recherche et filtres (éco, familial, romantique, animaux)
- Liste des hébergements et des populaires avec modale détail
- Activités mises en avant
- Responsive (flex/grid + Tailwind)
- Localisation FR/EN via dictionnaire simple

## 🌐 Démo
Démo locale : `npm run dev`.  
Lien hébergé : à compléter.

## 🛠 Support
Questions ou suggestions : ouvrir une issue ou me contacter.

---
Licence MIT.

