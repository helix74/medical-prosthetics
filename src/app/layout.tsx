import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/styles/safe-area.css';
import '@/styles/containment.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer/index';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#187baa',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'Delta Med Plus',
  description: 'Votre partenaire de confiance en solutions orthopédiques et prothétiques en Tunisie.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://medical-prosthetics.vercel.app'),
  openGraph: {
    title: 'Delta Médical Plus - Solutions de Prothèses Médicales',
    description: 'Solutions innovantes de prothèses médicales pour professionnels de santé',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delta Médical Plus - Solutions de Prothèses Médicales',
    description: 'Solutions innovantes de prothèses médicales pour professionnels de santé',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        
        <div className="contain-layout-paint">
          <main className="content-visibility-auto">
            {children}
          </main>
        </div>

        <div className="contain-layout-paint">
          <Footer />
        </div>
      </body>
    </html>
  );
}
