'use client';

import { type FC } from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { Hero, Section } from '@/components/ui/layout';
import ProductFilters from '@/components/ui/products/ProductFilters';
import ProductList from '@/components/ui/products/ProductList';
import { MOCK_PRODUCTS, MOCK_SUPPLIERS } from '@/data/mock';
import { SmartCTA } from '@/components/ui/cta';

const ProductsPageClient: FC = () => {
  const suppliersRecord = MOCK_SUPPLIERS.reduce((acc, supplier) => {
    acc[supplier.id] = supplier;
    return acc;
  }, {} as Record<string, any>);

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        <Hero
          badge={{ icon: "🛍️", text: "Nos Produits" }}
          title="Nos Produits"
          description="Découvrez notre gamme complète de solutions orthopédiques innovantes"
          size="sm"
          variant="centered"
          className="bg-white mb-16"
        />
        <div className="relative z-0 bg-white pb-16">
          <Section className="mb-16">
            <div className={twMerge(
              'space-y-8',
              CONTAINER_STYLES.variants.default
            )}>
              <ProductFilters
                suppliers={MOCK_SUPPLIERS}
                selectedCategory={null}
                selectedSupplier={null}
                onCategoryChangeAction={() => {}}
                onSupplierChangeAction={() => {}}
                onSearchChangeAction={() => {}}
              />
              <ProductList
                products={MOCK_PRODUCTS}
                suppliers={suppliersRecord}
                isLoading={false}
                hasMore={false}
              />
            </div>
          </Section>

          {/* Technical Documentation CTA */}
          <Section className="last:mb-0">
            <SmartCTA
              title="Besoin de documentation technique ?"
              description="Accédez à nos catalogues détaillés et fiches techniques pour tout savoir sur nos produits."
              primaryAction={{
                text: "Voir les catalogues",
                href: "/catalogues"
              }}
              secondaryAction={{
                text: "Contacter le support",
                href: "/contact?subject=documentation"
              }}
            />
          </Section>
        </div>
      </main>
    </LazyMotion>
  );
};

export default ProductsPageClient; 