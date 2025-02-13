import { Stat, Certification } from './types';

export const stats: Stat[] = [
  { 
    value: '+ de 10000',
    highlight: 'références',
    icon: '/icons/stats/references.svg',
    description: 'de composants prothétiques prêts à commander'
  },
  { 
    value: '+10',
    highlight: 'partenariats',
    icon: '/icons/stats/partnerships.svg',
    description: 'avec 20 fournisseurs internationaux'
  },
  { 
    value: '21',
    highlight: 'jours maximum',
    icon: '/icons/stats/delivery.svg',
    description: 'sur tout le territoire tunisien'
  }
];

export const certifications: Certification[] = [
  {
    src: '/certifications/ce-mark.svg',
    alt: 'Certification CE'
  },
  {
    src: '/certifications/iso-13485.svg',
    alt: 'Certification ISO 13485'
  },
  {
    src: '/certifications/iso-9001.svg',
    alt: 'Certification ISO 9001'
  }
];

export const heroContent = {
  title: 'Des produits de qualité pour les spécialistes de la mobilité',
  subtitle: 'Leader en prothèses médicales innovantes',
  description: 'Nous développons des prothèses médicales de pointe, alliant technologie et confort pour améliorer la qualité de vie de vos patients. Notre expertise unique nous permet de créer des solutions personnalisées et durables, conformes aux normes médicales les plus strictes.'
}; 