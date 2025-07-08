import { Product, Supplier } from '@/types/products';

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: '1', name: 'Alps', logo: '/images/partners/alps.png', country: 'Unknown' },
  { id: '2', name: 'Flexor', logo: '/images/partners/flexor.jpg', country: 'Unknown' },
  { id: '3', name: 'IB-ER Prosthetic', logo: '/images/partners/iber.jpg', country: 'Unknown' },
  { id: '4', name: 'Janton', logo: '/images/partners/janton.png', country: 'Unknown' },
  { id: '5', name: 'Okm', logo: '/images/partners/okm.jpg', country: 'Unknown' },
  { id: '6', name: 'Ortho Europe', logo: '/images/partners/ortho-europe.png', country: 'Unknown' },
  { id: '7', name: 'Orthoplast', logo: '/images/partners/orthoplast.jpg', country: 'Unknown' },
  { id: '8', name: 'Ossur', logo: '/images/partners/ossur.png', country: 'Iceland' },
  { id: '9', name: 'Ottobock', logo: '/images/partners/ottobock.png', country: 'Germany' },
  { id: '10', name: 'Ethnocare', logo: '/images/partners/ethnocare.jpg', country: 'Canada' }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p9',
    name: 'Maverick Comfort AT',
    description: 'Le pied prothétique Maverick Comfort AT combine un adaptateur de torsion intégré avec une construction en fibre de carbone, offrant une sensation naturelle lors de la marche sur tout terrain et une excellente absorption des chocs.',
    image: '/images/products/maverick-comfort-at1.png',
    images: [
      '/images/products/maverick-comfort-at1.png',
      '/images/products/maverick-comfort-at2.png',
      '/images/products/maverick-comfort-at3.png',
      '/images/products/maverick-comfort-at4.png',
      '/images/products/maverick-comfort-at5.png',
      '/images/products/maverick-comfort-at6.png',
      '/images/products/maverick-comfort-at7.png',
      '/images/products/maverick-comfort-at8.png',
    ],
    price: 4200,
    supplierId: '9',
    categoryId: 'protheses',
    slug: 'pied-prothetique-maverick-comfort-at',
    createdAt: '2024-06-10',
    updatedAt: '2024-06-10',
    specifications: [
      { label: 'Poids max utilisateur', value: '150 kg' },
      { label: 'Poids du produit', value: '720 g (taille 26)' },
      { label: 'Hauteur du système', value: '176 mm (taille 26)' },
      { label: 'Hauteur du talon', value: '10 mm' },
      { label: 'Tailles disponibles', value: '22 - 30 cm' },
      { label: 'Absorption de torsion', value: 'Jusqu\'à 9°' },
      { label: 'Niveau d\'activité', value: 'K3-K4' },
      { label: 'Certification', value: 'CE selon 93/42/CEE' }
    ],
    badge: 'Bestseller'
  },
  {
    id: 'p10',
    name: 'Empower 1B1-2',
    description: 'Prothèse de pied motorisée avec propulsion active pour une marche plus efficace et naturelle, réduisant l\'asymétrie et la fatigue. Grâce à son microprocesseur intégré, elle s\'adapte automatiquement à différentes vitesses et terrains.',
    image: '/images/products/empower1.png',
    images: [
      '/images/products/empower1.png',
      '/images/products/empower2.png',
      '/images/products/empower3.png',
      '/images/products/empower4.png',
      '/images/products/empower5.png',
      '/images/products/empower6.png',
      '/images/products/empower7.png',
      '/images/products/empower8.png',
    ],
    price: 18500,
    supplierId: '9',
    categoryId: 'protheses',
    slug: 'pied-prothetique-empower-1b1-2',
    createdAt: '2024-06-15',
    updatedAt: '2024-06-15',
    specifications: [
      { label: 'Poids max utilisateur', value: '130 kg' },
      { label: 'Poids du produit', value: '1,847 g (taille 27)' },
      { label: 'Autonomie batterie', value: 'Variable selon l\'activité' },
      { label: 'Amplitude de mouvement', value: '22°' },
      { label: 'Hauteur système', value: '21,5 - 23,5 cm' },
      { label: 'Hauteur talon', value: 'Jusqu\'à 10 mm' },
      { label: 'Tailles disponibles', value: '24 - 30 cm' },
      { label: 'Niveau d\'activité', value: 'K3' },
      { label: 'Certification', value: 'CE selon 93/42/CEE' }
    ],
    badge: 'Premium'
  },
  {
    id: 'p11',
    name: '3R80',
    description: 'Genou prothétique hydraulique rotatif avec contrôle de phase pendulaire, offrant une démarche naturelle et fluide même à différentes vitesses de marche. Sa conception robuste en titane garantit stabilité et fiabilité.',
    image: '/images/products/3R80.png',
    images: [
      '/images/products/3R80.png'
    ],
    price: 9800,
    supplierId: '9',
    categoryId: 'protheses',
    slug: 'genou-prothetique-3r80',
    createdAt: '2024-06-18',
    updatedAt: '2024-06-18',
    specifications: [
      { label: 'Poids max utilisateur', value: '100 kg / 150 kg (selon version)' },
      { label: 'Poids du produit', value: '1290 g' },
      { label: 'Angle de flexion', value: '150° (max)' },
      { label: 'Matériau', value: 'Titane' },
      { label: 'Mécanisme', value: 'Hydraulique rotatif' },
      { label: 'Hauteur de construction', value: '163 mm' },
      { label: 'Niveau d\'activité', value: 'K3-K4' },
      { label: 'Classification', value: 'IP22' }
    ],
    badge: 'Classique'
  },
  {
    id: 'p12',
    name: 'WalkOn',
    description: 'L\'orthèse WalkOn est une aide dynamique à la marche conçue pour les patients souffrant d\'insuffisance du releveur du pied. Fabriquée en fibre de carbone légère et ultrafine, elle améliore la mobilité et le schéma de marche naturel.',
    image: '/images/products/walcon1.png',
    images: [
      '/images/products/walcon1.png',
      '/images/products/walcon2.png',
      '/images/products/walcon3.png',
      '/images/products/walcon4.png'
    ],
    price: 1200,
    supplierId: '9',
    categoryId: 'ortheses',
    slug: 'orthese-walkon',
    createdAt: '2024-07-05',
    updatedAt: '2024-07-05',
    specifications: [
      { label: 'Poids max utilisateur', value: '120 kg' },
      { label: 'Poids du produit', value: '140 g (taille M)' },
      { label: 'Matériau', value: 'Fibre de carbone préimprégnée' },
      { label: 'Indications', value: 'Insuffisance du releveur du pied' },
      { label: 'Options', value: 'Gauche ou droite' },
      { label: 'Tailles disponibles', value: 'XS, S, M, L, XL' },
      { label: 'Hauteur', value: '27 cm (taille M)' },
      { label: 'Classification', value: 'Orthèse de type AFO' }
    ],
    badge: 'Confort'
  },
  {
    id: 'p13',
    name: 'Overlay Transtibial',
    description: "L'Overlay d'Ethnocare est un dispositif prothétique révolutionnaire qui utilise l'air pour gérer les changements de volume des membres résiduels.",
    image: '/images/products/overlay-transtibial.jpg',
    images: [
      '/images/products/overlay-transtibial.jpg',
      '/images/products/overlay-transtibial2.jpg',
      '/images/products/overlay-transtibial3.jpg',
      '/images/products/overlay-transtibial4.jpg'
    ],
    price: 899,
    supplierId: '10',
    categoryId: 'protheses',
    slug: 'overlay-transtibial',
    createdAt: '2024-07-10',
    updatedAt: '2024-07-10',
    specifications: [
      { label: 'Matériaux', value: 'Nylon, Élasthanne, TPU, Acier ressort, Silicone' },
      { label: 'Méthode de suspension', value: 'Attache distale, Gaine de suspension, Sous vide actif ou passif' },
      { label: "Niveau d'activité", value: 'Bas, Modéré et Élevé (K1 à K4)' },
      { label: "Niveau d'amputation", value: 'Transtibial (sous le genou)' },
      { label: 'Circonférence', value: 'OV23: 23,5 à 28,5 cm / OV28: 28,5 à 35,5 cm / OV35: 35,5 à 43,5 cm' },
      { label: 'Longueur', value: 'SH: 14 à 19 cm / LG: 20+ cm' },
      { label: 'Orientation', value: 'D Pompe à droite / G Pompe à gauche' }
    ],
    badge: 'Nouveau'
  },
  {
    id: 'p14',
    name: 'Overlay Transfemoral',
    description: "Système d'expansion à air pour améliorer l'ajustement, la stabilité et le confort de l'emboîture, et pour compenser les variations de volume chez les personnes amputées fémorales.",
    image: '/images/products/overlay-transfemoral.jpg',
    images: [
      '/images/products/overlay-transfemoral.jpg',
      '/images/products/overlay-transfemoral2.jpg',
      '/images/products/overlay-transfemoral3.jpg',
      '/images/products/overlay-transfemoral4.jpg'
    ],
    price: 999,
    supplierId: '10',
    categoryId: 'protheses',
    slug: 'overlay-transfemoral',
    createdAt: '2024-07-10',
    updatedAt: '2024-07-10',
    specifications: [
      { label: 'Matériaux', value: 'Nylon, Élasthanne, TPU, Acier ressort, Silicone' },
      { label: 'Méthode de suspension', value: "Attache distale, auto suspension, Sous vide actif ou passif, anneau d'étanchéités." },
      { label: "Niveau d'activité", value: 'Bas, Moyen, Élevé (K1 à K4)' },
      { label: "Niveau d'amputation", value: 'Transfémoral (au dessus du genou)' },
      { label: 'Type de suspension', value: "PIN Verrou à goupille, sangle, manchons coussinés / VAC Anneaux d'étanchéité positionnés distalement" },
      { label: 'Longueur', value: 'SH: 19 à 24 cm / LG: 24 à 32 cm / XL: 32+ cm (seulement disponible pour PIN)' },
      { label: 'Circonférence', value: '32: 32 à 36 cm / 38: 36 à 40 cm / 40: 40 à 44,5 cm / 44: 44,5 à 48 cm / 48: 48 à 52 cm / 52: 52 à 62 cm' }
    ],
    badge: 'Nouveau'
  }
]; 