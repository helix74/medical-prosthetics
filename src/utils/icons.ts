import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';

// Icônes communes
export const CommonIcons = {
  Filter: dynamic(() => import('react-icons/fa').then(mod => mod.FaFilter)),
  Close: dynamic(() => import('react-icons/fa').then(mod => mod.FaTimes)),
  Phone: dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone)),
  Email: dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope)),
  Location: dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt)),
  Clock: dynamic(() => import('react-icons/fa').then(mod => mod.FaClock)),
} as const;

// Types pour les icônes
export type IconName = keyof typeof CommonIcons;
export type IconComponent = IconType; 