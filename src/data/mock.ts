import { Product, Supplier } from '@/types/products';

export const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: 'ottobock',
    name: 'Ottobock',
    logo: '/images/suppliers/ottobock.png',
    country: 'Allemagne'
  },
  {
    id: 'ossur',
    name: 'Össur',
    logo: '/images/suppliers/ossur.png',
    country: 'Islande'
  },
  {
    id: 'proteor',
    name: 'Proteor',
    logo: '/images/suppliers/proteor.png',
    country: 'France'
  },
  {
    id: 'fillauer',
    name: 'Fillauer',
    logo: '/images/suppliers/fillauer.png',
    country: 'États-Unis'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Prothèse de Genou C-Leg',
    description: 'Prothèse de genou intelligente avec contrôle hydraulique et adaptation automatique aux différentes situations de marche.',
    image: '/images/products/c-leg.png',
    price: 25000,
    supplierId: 'ottobock',
    categoryId: 'protheses',
    slug: 'prothese-genou-c-leg',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Poids', value: '1.2 kg' },
      { label: 'Autonomie', value: '48h' },
      { label: 'Matériau', value: 'Titane' }
    ]
  },
  {
    id: 'p2',
    name: 'Orthèse Unloader One',
    description: 'Orthèse de genou pour arthrose avec système de décharge innovant pour un soulagement optimal de la douleur.',
    image: '/images/products/unloader-one.png',
    price: 1200,
    supplierId: 'ossur',
    categoryId: 'ortheses',
    slug: 'orthese-unloader-one',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Matériau', value: 'Aluminium léger' },
      { label: 'Poids', value: '0.7 kg' },
      { label: 'Ajustement', value: 'Personnalisable' }
    ]
  },
  {
    id: 'p3',
    name: 'Pied Prothétique Pro-Flex',
    description: 'Pied prothétique dynamique offrant un retour d\'énergie exceptionnel et une transition fluide pendant la marche.',
    image: '/images/products/pro-flex.png',
    price: 3500,
    supplierId: 'ossur',
    categoryId: 'protheses',
    slug: 'pied-prothetique-pro-flex',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Poids max', value: '125 kg' },
      { label: 'Hauteur', value: '15 cm' },
      { label: 'Matériau', value: 'Composite carbone' }
    ]
  },
  {
    id: 'p4',
    name: 'Main Myoélectrique Bebionic',
    description: 'Main prothétique multi-articulée avec contrôle myoélectrique avancé pour une préhension naturelle.',
    image: '/images/products/bebionic.png',
    price: 35000,
    supplierId: 'ottobock',
    categoryId: 'protheses',
    slug: 'main-myoelectrique-bebionic',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Poids', value: '0.5 kg' },
      { label: 'Autonomie', value: '24h' },
      { label: 'Prises', value: '14 patterns' }
    ]
  },
  {
    id: 'p5',
    name: 'Orthèse Lombaire Dynamic',
    description: 'Orthèse lombaire avec système de compression dynamique pour un maintien optimal du dos.',
    image: '/images/products/dynamic-back.png',
    price: 800,
    supplierId: 'proteor',
    categoryId: 'ortheses',
    slug: 'orthese-lombaire-dynamic',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Tailles', value: 'S à XXL' },
      { label: 'Type', value: 'Semi-rigide' },
      { label: 'Hauteur', value: '32 cm' }
    ]
  },
  {
    id: 'p6',
    name: 'Manchon en Silicone Alpha',
    description: 'Manchon haute performance en silicone médical pour un confort optimal et une excellente suspension.',
    image: '/images/products/alpha-liner.png',
    price: 450,
    supplierId: 'fillauer',
    categoryId: 'composants',
    slug: 'manchon-silicone-alpha',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Matériau', value: 'Silicone médical' },
      { label: 'Épaisseur', value: '6mm' },
      { label: 'Durabilité', value: '12 mois' }
    ]
  },
  {
    id: 'p7',
    name: 'Genou Hydraulique Safety',
    description: 'Genou prothétique avec système de sécurité hydraulique pour une stabilité accrue.',
    image: '/images/products/safety-knee.png',
    price: 15000,
    supplierId: 'proteor',
    categoryId: 'protheses',
    slug: 'genou-hydraulique-safety',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Poids max', value: '150 kg' },
      { label: 'Angle flexion', value: '150°' },
      { label: 'Matériau', value: 'Acier/Titane' }
    ]
  },
  {
    id: 'p8',
    name: 'Kit d\'Alignement Laser',
    description: 'Kit professionnel pour l\'alignement précis des prothèses avec système laser intégré.',
    image: '/images/products/alignment-kit.png',
    price: 2800,
    supplierId: 'fillauer',
    categoryId: 'composants',
    slug: 'kit-alignement-laser',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specifications: [
      { label: 'Précision', value: '0.1 mm' },
      { label: 'Autonomie', value: '8h' },
      { label: 'Poids', value: '1.5 kg' }
    ]
  }
]; 