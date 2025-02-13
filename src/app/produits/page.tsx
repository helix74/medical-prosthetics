import type { Metadata } from 'next';
import ProductsPageClient from '@/components/pages/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Nos Produits | Delta Médical Plus',
  description: 'Découvrez notre gamme complète de solutions prothétiques innovantes pour améliorer la qualité de vie de vos patients.',
  openGraph: {
    title: 'Catalogue de Produits | Delta Médical Plus',
    description: 'Explorez notre gamme complète de prothèses, orthèses et composants médicaux de haute qualité.',
    images: [
      {
        url: '/images/og/products.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalogue de produits Delta Médical Plus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogue de Produits | Delta Médical Plus',
    description: 'Explorez notre gamme complète de prothèses, orthèses et composants médicaux de haute qualité.',
    images: ['/images/og/products.jpg'],
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
