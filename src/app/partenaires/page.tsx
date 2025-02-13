import type { Metadata } from 'next';
import PartenairesPageClient from '@/components/pages/PartenairesPageClient';

export const metadata: Metadata = {
  title: 'Nos Partenaires | Delta Médical Plus',
  description: 'Découvrez nos partenaires de renom dans le domaine des solutions orthopédiques. Collaboration avec les meilleurs fabricants pour votre satisfaction.',
  openGraph: {
    title: 'Partenaires | Delta Médical Plus',
    description: 'Découvrez les fabricants de renom avec lesquels nous collaborons pour vous offrir les meilleures solutions orthopédiques.',
    images: [
      {
        url: '/images/og/partners.jpg',
        width: 1200,
        height: 630,
        alt: 'Partenaires de Delta Médical Plus',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partenaires | Delta Médical Plus',
    description: 'Découvrez les fabricants de renom avec lesquels nous collaborons pour vous offrir les meilleures solutions orthopédiques.',
    images: ['/images/og/partners.jpg'],
  },
};

export default function PartenairesPage() {
  return <PartenairesPageClient />;
} 