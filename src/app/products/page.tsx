import type { Metadata, Viewport } from 'next';
import ProductsPageClient from '@/components/pages/ProductsPageClient';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Nos Produits | Delta Médical Plus',
  description: 'Découvrez notre gamme complète de solutions orthopédiques innovantes pour les professionnels de santé.',
  openGraph: {
    title: 'Produits Orthopédiques | Delta Médical Plus',
    description: 'Explorez notre catalogue de produits orthopédiques de haute qualité pour les professionnels de santé.',
    images: [
      {
        url: '/images/og/products.jpg',
        width: 1200,
        height: 630,
        alt: 'Produits orthopédiques Delta Médical Plus',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produits Orthopédiques | Delta Médical Plus',
    description: 'Explorez notre catalogue de produits orthopédiques de haute qualité pour les professionnels de santé.',
    images: ['/images/og/products.jpg'],
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
} 