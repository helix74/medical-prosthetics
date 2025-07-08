'use client';

import { type FC, useState, useMemo } from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { Hero, Section } from '@/components/ui/layout';
import ProductFilters from '@/components/ui/products/ProductFilters';
import ProductList from '@/components/ui/products/ProductList';
import { MOCK_PRODUCTS, MOCK_SUPPLIERS } from '@/data/mock';
import { SmartCTA } from '@/components/ui/cta';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';

const ProductsPageClient: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const suppliersRecord = MOCK_SUPPLIERS.reduce((acc, supplier) => {
    acc[supplier.id] = supplier;
    return acc;
  }, {} as Record<string, any>);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      // Filter by category
      if (selectedCategory && product.categoryId !== selectedCategory) {
        return false;
      }
      
      // Filter by supplier
      if (selectedSupplier && product.supplierId !== selectedSupplier) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }, [selectedCategory, selectedSupplier, searchTerm]);

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        <Hero
          badge={{ icon: faBoxes, text: "Nos Produits" }}
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
                selectedCategory={selectedCategory}
                selectedSupplier={selectedSupplier}
                onCategoryChangeAction={setSelectedCategory}
                onSupplierChangeAction={setSelectedSupplier}
                onSearchChangeAction={setSearchTerm}
              />
              <ProductList
                products={filteredProducts}
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