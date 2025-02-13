import type { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export const metadata: Metadata = {
  title: 'À Propos | Delta Médical Plus',
  description: 'Delta Medical Plus est leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie. Découvrez notre histoire, notre mission et nos valeurs.',
  openGraph: {
    title: 'À Propos de Delta Médical Plus',
    description: 'Leader dans la distribution de composants orthopédiques en Tunisie. Découvrez notre engagement envers l\'innovation et l\'excellence.',
    images: [
      {
        url: '/images/og/about.jpg',
        width: 1200,
        height: 630,
        alt: 'À propos de Delta Médical Plus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos de Delta Médical Plus',
    description: 'Leader dans la distribution de composants orthopédiques en Tunisie. Découvrez notre engagement envers l\'innovation et l\'excellence.',
    images: ['/images/og/about.jpg'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
