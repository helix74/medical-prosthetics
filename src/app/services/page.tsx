import type { Metadata, Viewport } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Nos Services | Delta Médical Plus',
  description: 'Services orthopédiques spécialisés : consultation technique, support, formation et service après-vente pour les professionnels de santé.',
  openGraph: {
    title: 'Services Orthopédiques | Delta Médical Plus',
    description: 'Découvrez nos services spécialisés en orthopédie : consultation, support technique, formation et service après-vente.',
    images: [
      {
        url: '/images/og/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Services orthopédiques Delta Médical Plus',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Orthopédiques | Delta Médical Plus',
    description: 'Découvrez nos services spécialisés en orthopédie : consultation, support technique, formation et service après-vente.',
    images: ['/images/og/services.jpg'],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
} 