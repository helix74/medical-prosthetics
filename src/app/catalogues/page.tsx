import type { Metadata } from 'next';
import CataloguesPageClient from '@/components/pages/CataloguesPageClient';

export const metadata: Metadata = {
  title: 'Catalogues | Delta Médical Plus',
  description: 'Téléchargez nos catalogues détaillés pour découvrir notre gamme complète de produits et solutions prothétiques. Documentation technique complète disponible.',
  openGraph: {
    title: 'Catalogues de Produits | Delta Médical Plus',
    description: 'Accédez à notre documentation technique complète. Téléchargez nos catalogues détaillés de prothèses et solutions orthopédiques.',
    images: [
      {
        url: '/images/og/catalogues.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalogues Delta Médical Plus',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogues de Produits | Delta Médical Plus',
    description: 'Accédez à notre documentation technique complète. Téléchargez nos catalogues détaillés de prothèses et solutions orthopédiques.',
    images: ['/images/og/catalogues.jpg'],
  },
};

export default function CataloguesPage() {
  return <CataloguesPageClient />;
} 