import type { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact | Delta Médical Plus',
  description: 'Contactez Delta Medical Plus pour toute question sur nos solutions orthopédiques. Notre équipe est à votre disposition pour vous accompagner.',
  openGraph: {
    title: 'Contactez Delta Médical Plus',
    description: 'Besoin d\'information ? Notre équipe d\'experts est à votre disposition pour répondre à toutes vos questions.',
    images: [
      {
        url: '/images/og/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contactez Delta Médical Plus',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez Delta Médical Plus',
    description: 'Besoin d\'information ? Notre équipe d\'experts est à votre disposition pour répondre à toutes vos questions.',
    images: ['/images/og/contact.jpg'],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
