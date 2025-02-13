# Sections Components

Ce dossier contient les différentes sections de l'application, chacune suivant une structure modulaire cohérente.

## Structure

```
sections/
├── common/                 # Composants partagés entre les sections
│   ├── SectionBadge.tsx   # Badge réutilisable
│   ├── SectionBackground.tsx # Arrière-plans communs
│   └── SectionContainer.tsx # Conteneur standard
├── AboutUs/               # Section À propos
├── Hero/                  # Section Hero
├── Products/             # Section Produits
├── Features/             # Section Fonctionnalités
├── config.ts             # Configuration partagée
└── README.md             # Cette documentation
```

## Conventions

1. **Structure des Sections**
   - Chaque section doit suivre une structure modulaire
   - Séparer les données, types et composants
   - Utiliser les composants communs du dossier `common`

2. **Organisation des Fichiers**
   ```
   SectionName/
   ├── index.tsx           # Point d'entrée
   ├── types.ts           # Types TypeScript
   ├── data.ts            # Données statiques
   └── components/        # Sous-composants
   ```

3. **Bonnes Pratiques**
   - Utiliser les configurations de `config.ts`
   - Implémenter des animations optimisées
   - Assurer la responsivité
   - Maintenir l'accessibilité
   - Optimiser les performances

4. **Composants Communs**
   - `SectionBadge`: Pour les badges en haut des sections
   - `SectionBackground`: Pour les arrière-plans décoratifs
   - `SectionContainer`: Pour la structure de base des sections

## Utilisation

```tsx
import { SectionContainer, SectionBackground, SectionBadge } from './common';
import { SECTION_CONFIG, SECTION_VARIANTS } from './config';

export default function MySection() {
  return (
    <SectionContainer className={SECTION_VARIANTS.primary.background}>
      <SectionBackground variant="primary" />
      <SectionBadge icon="🚀" text="Mon Badge" />
      {/* Contenu de la section */}
    </SectionContainer>
  );
}
```

## Points de Vérification

- ✅ Structure modulaire
- ✅ Types TypeScript
- ✅ Données externalisées
- ✅ Composants réutilisables
- ✅ Animations optimisées
- ✅ Design responsive
- ✅ Accessibilité
- ✅ Performance 

# Organisation des Sections

## Structure par Page

### 1. Page d'Accueil (/)
```
Home/
├── Hero/
├── FeaturedProducts/
├── MainFeatures/
└── WhyChooseUs/
```

### 2. À Propos (/a-propos)
```
AboutUs/
├── Header/
├── History/
├── Team/
├── Values/
└── Features/
```

### 3. Produits (/produits)
```
Products/
├── Header/
├── Categories/
├── Filters/
├── ProductGrid/
└── FeaturedProducts/
```

### 4. Services (/services)
```
Services/
├── Header/
├── ServiceList/
├── Process/
├── Advantages/
└── Testimonials/
```

### 5. Partenaires (/partenaires)
```
Partners/
├── Header/
├── PartnerList/
├── Testimonials/
├── Collaboration/
└── PartnershipForm/
```

### 6. Contact (/contact)
```
Contact/
├── Header/
├── ContactForm/
├── ContactInfo/
├── Map/
└── FAQ/
```

### 7. Catalogues (/catalogues)
```
Catalogues/
├── Header/
├── CatalogueList/
├── Filters/
├── Download/
└── RequestForm/
```

## Convention de Nommage

1. **Composants de Section**
   - Utiliser le format PascalCase
   - Suffixer avec "Section" pour les composants principaux
   - Exemple: `HeroSection`, `FeaturedProductsSection`

2. **Sous-composants**
   - Grouper dans un dossier `components`
   - Nommer clairement avec leur fonction
   - Exemple: `ProductCard`, `ServiceItem`

3. **Types et Interfaces**
   - Définir dans un fichier `types.ts`
   - Suffixer les props avec "Props"
   - Exemple: `HeroSectionProps`, `ProductCardProps`

4. **Données Statiques**
   - Placer dans un fichier `data.ts`
   - Utiliser des constantes en SCREAMING_SNAKE_CASE
   - Exemple: `FEATURED_PRODUCTS`, `SERVICE_LIST`

## Organisation des Fichiers

Chaque section doit suivre cette structure :
```
SectionName/
├── index.tsx           # Point d'entrée
├── types.ts           # Types et interfaces
├── data.ts            # Données statiques
├── styles.ts          # Styles spécifiques (si nécessaire)
└── components/        # Sous-composants
    ├── SectionHeader.tsx
    ├── SectionContent.tsx
    └── SectionFooter.tsx
```

## Bonnes Pratiques

1. **Performance**
   - Utiliser React.memo pour les composants statiques
   - Lazy loading pour les sections non critiques
   - Optimisation des images et assets

2. **Accessibilité**
   - Utiliser des landmarks ARIA appropriés
   - Maintenir une hiérarchie de titres cohérente
   - Assurer un contraste suffisant

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints cohérents
   - Flexbox/Grid pour les layouts

4. **Maintenance**
   - Documentation claire
   - Tests unitaires
   - Props typing strict 