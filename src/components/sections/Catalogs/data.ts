import type { CatalogsData, Catalog } from './types';

export const catalogsData: CatalogsData = {
  header: {
    badge: "Catalogues",
    title: "Nos Catalogues Produits",
    description: "Découvrez notre gamme complète de produits orthopédiques et prothétiques à travers nos catalogues détaillés."
  },
  categories: {
    title: "Catégories",
    description: "Parcourez nos catalogues par catégorie",
    items: ["Orthopédique", "Prothétique"]
  },
  catalogs: [
    {
      id: 'janton-protheses',
      title: 'Catalogue Janton Prothèses',
      description: 'Découvrez notre gamme complète de solutions prothétiques Janton',
      imageUrl: '/images/partners/janton.jpg',
      pdfUrl: '/catalogs/Janton-Protheses-catalog.pdf',
      category: 'prosthetic'
    },
    {
      id: 'janton-cfab',
      title: 'Catalogue Janton CFAB',
      description: 'Solutions spécialisées CFAB par Janton',
      imageUrl: '/images/partners/janton.jpg',
      pdfUrl: '/catalogs/Janton-CFAB-catalog.pdf',
      category: 'prosthetic'
    },
    {
      id: 'janton-ortheses',
      title: 'Catalogue Janton Orthèses',
      description: 'Explorez notre gamme d\'orthèses Janton',
      imageUrl: '/images/partners/janton.jpg',
      pdfUrl: '/catalogs/Janton-ortheses-catalog.pdf',
      category: 'orthopedic'
    },
    {
      id: 'okm-leckko',
      title: 'Catalogue OKM Leckko',
      description: 'Découvrez les solutions innovantes OKM Leckko',
      imageUrl: '/images/partners/okm.jpg',
      pdfUrl: '/catalogs/Okm-Leckko-catalog.pdf',
      category: 'orthopedic'
    },
    {
      id: 'orthoplast',
      title: 'Catalogue Orthoplast',
      description: 'Solutions orthopédiques complètes par Orthoplast',
      imageUrl: '/images/partners/orthoplast.jpg',
      pdfUrl: '/catalogs/Orthoplast-catalog.pdf',
      category: 'orthopedic'
    },
    {
      id: 'flexor',
      title: 'Catalogue Flexor',
      description: 'Gamme de produits Flexor pour une mobilité optimale',
      imageUrl: '/images/partners/flexor.jpg',
      pdfUrl: '/catalogs/Flexor-catalog.pdf',
      category: 'orthopedic'
    },
    {
      id: 'alps',
      title: 'Catalogue Alps',
      description: 'Solutions prothétiques avancées par Alps',
      imageUrl: '/images/partners/alps.jpg',
      pdfUrl: '/catalogs/Alps-catalog.pdf',
      category: 'prosthetic'
    },
    {
      id: 'ossur-protheses',
      title: 'Catalogue Össur Prothèses',
      description: 'Solutions prothétiques innovantes par Össur',
      imageUrl: '/images/partners/ossur.png',
      pdfUrl: '/catalogs/Ossur-protheses-catalog.pdf',
      category: 'prosthetic'
    },
    {
      id: 'ossur-ortheses',
      title: 'Catalogue Össur Orthèses',
      description: 'Solutions orthopédiques complètes par Össur',
      imageUrl: '/images/partners/ossur.png',
      pdfUrl: '/catalogs/Ossur-ortheses-catalog.pdf',
      category: 'orthopedic'
    },
    {
      id: 'orthoeurope',
      title: 'Catalogue Orthoeurope',
      description: 'Solutions orthopédiques européennes de qualité',
      imageUrl: '/images/partners/ortho-europe.jpg',
      pdfUrl: '/catalogs/Orthoeurope-catalog.pdf',
      category: 'orthopedic'
    }
  ]
};

export const CATALOGS = catalogsData.catalogs; 