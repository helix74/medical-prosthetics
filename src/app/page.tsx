import type { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';

export const metadata: Metadata = {
  title: 'Delta Médical Plus - Solutions de Prothèses Médicales',
  description: 'Leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie. Solutions innovantes et support technique expert.',
  openGraph: {
    title: 'Delta Médical Plus - Solutions de Prothèses Médicales',
    description: 'Leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie. Solutions innovantes et support technique expert.',
    images: [
      {
        url: '/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Delta Médical Plus - Solutions de Prothèses Médicales',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delta Médical Plus - Solutions de Prothèses Médicales',
    description: 'Leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie.',
    images: ['/images/og/home.jpg'],
  },
  alternates: {
    canonical: 'https://deltamed.com.tn',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
