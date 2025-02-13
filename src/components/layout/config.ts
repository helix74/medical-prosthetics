import { IconType } from 'react-icons';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { type FC } from 'react';

interface NavigationItem {
  label: string;
  path: string;
}

interface ContactLink {
  icon: IconType;
  label: string;
  href: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  { 
    label: 'Accueil', 
    path: '/' 
  },
  { 
    label: 'Produits', 
    path: '/produits'
  },
  { 
    label: 'Catalogues', 
    path: '/catalogues' 
  },
  { 
    label: 'Services', 
    path: '/services'
  },
  { 
    label: 'À Propos', 
    path: '/a-propos'
  },
  { 
    label: 'Partenaires', 
    path: '/partenaires' 
  },
  { 
    label: 'Contact', 
    path: '/contact' 
  },
];

export const TOP_BAR_LINKS: ContactLink[] = [
  { 
    icon: FaPhone,
    label: '+216 99 221 620', 
    href: 'tel:+21699221620' 
  },
  { 
    icon: FaEnvelope,
    label: 'direction@deltamedicalplus.tn', 
    href: 'mailto:direction@deltamedicalplus.tn' 
  },
  { 
    icon: FaLinkedin,
    label: 'LinkedIn', 
    href: 'https://linkedin.com/company/deltamed' 
  },
]; 