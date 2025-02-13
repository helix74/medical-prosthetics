'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { theme } from '@/theme';
import { SECTION_STYLES } from '@/theme/styles';
import ProductsHeader from './components/ProductsHeader';
import CategoryGrid from './components/CategoryGrid';
import QuickFeatures from './components/QuickFeatures';

const FEATURES = [
  {
    icon: "🌟",
    title: "Qualité Premium",
    description: "Produits certifiés aux normes internationales"
  },
  {
    icon: "🚚",
    title: "Livraison Rapide",
    description: "Service de livraison express disponible"
  },
  {
    icon: "💬",
    title: "Support Expert",
    description: "Assistance technique spécialisée"
  }
];

const CATEGORIES = [
  {
    id: 'protheses',
    name: 'Prothèses',
    description: 'Solutions prothétiques innovantes pour membres supérieurs et inférieurs',
    icon: '🦿',
    image: '/images/products/protheses.jpg',
    slug: 'protheses'
  },
  {
    id: 'ortheses',
    name: 'Orthèses',
    description: 'Appareillages orthopédiques sur mesure pour un soutien optimal',
    icon: '🦾',
    image: '/images/products/ortheses.jpg',
    slug: 'ortheses'
  },
  {
    id: 'composants',
    name: 'Composants',
    description: 'Pièces et accessoires de haute qualité pour vos appareillages',
    icon: '⚙️',
    image: '/images/products/composants.jpg',
    slug: 'composants'
  }
];

export default memo(function Products() {
  return (
    <section className="relative bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <ProductsHeader />

        {/* Features */}
        <QuickFeatures features={FEATURES} />

        {/* Categories */}
        <CategoryGrid categories={CATEGORIES} />
      </div>
    </section>
  );
}); 