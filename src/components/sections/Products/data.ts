import { Category, Feature, HeaderContent } from './types';

export const categories: Category[] = [
  { id: 'protheses', name: 'Prothèses', count: 24 },
  { id: 'ortheses', name: 'Orthèses', count: 18 },
  { id: 'equipements', name: 'Équipements', count: 12 },
  { id: 'accessoires', name: 'Accessoires', count: 30 },
];

export const features: Feature[] = [
  { icon: '🔬', label: 'Précision millimétrique' },
  { icon: '🛡️', label: 'Certifié CE Médical' },
  { icon: '⚡', label: 'Technologie avancée' },
  { icon: '🔧', label: 'SAV Premium' },
];

export const headerContent: HeaderContent = {
  title: 'Solutions Prothétiques Innovantes',
  subtitle: 'Solutions Médicales Premium',
  description: 'Découvrez notre gamme complète de solutions orthopédiques de haute précision, conçues pour répondre aux exigences les plus strictes des professionnels de santé.',
  badge: {
    text: 'Solutions Médicales Premium',
    certification: 'CE Class IIa'
  }
}; 