import { Feature } from './types';

export const features: Feature[] = [
  {
    title: 'Haute Precision',
    description: 'Protheses concues avec une precision millimetrique pour un ajustement parfait et un confort optimal.',
    icon: '/icons/precision.svg',
    specs: [
      { label: 'Précision', value: '0.01mm' },
      { label: 'Matériau', value: 'Titane' }
    ],
    color: 'bg-[#187baa]/10',
    iconColor: 'text-[#187baa]',
    link: '/technologies'
  },
  {
    title: 'Confort Optimal',
    description: 'Materiaux innovants et ergonomiques selectionnes pour un confort quotidien maximal.',
    icon: '/icons/comfort.svg',
    specs: [
      { label: 'Satisfaction', value: '98%' },
      { label: 'Poids', value: '250g' }
    ],
    color: 'bg-[#187baa]/10',
    iconColor: 'text-[#187baa]',
    link: '/materiaux'
  },
  {
    title: 'Personnalisation',
    description: 'Solutions sur mesure adaptees aux besoins specifiques et au mode de vie de chaque patient.',
    icon: '/icons/custom.svg',
    specs: [
      { label: 'Sur mesure', value: '100%' },
      { label: 'Options', value: '50+' }
    ],
    color: 'bg-[#187baa]/10',
    iconColor: 'text-[#187baa]',
    link: '/personnalisation'
  },
  {
    title: 'Support Expert',
    description: 'Accompagnement complet par notre equipe d\'experts medicaux tout au long du processus.',
    icon: '/icons/support.svg',
    specs: [
      { label: 'Disponibilité', value: '24/7' },
      { label: 'Experts', value: '15+' }
    ],
    color: 'bg-[#187baa]/10',
    iconColor: 'text-[#187baa]',
    link: '/support'
  }
];

export const headerContent = {
  title: 'Nos Solutions Innovantes',
  description: 'Découvrez nos solutions de prothèses médicales de pointe, conçues pour offrir une expérience optimale à chaque patient.'
}; 