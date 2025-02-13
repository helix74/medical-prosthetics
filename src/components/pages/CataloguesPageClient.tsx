'use client';

import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES, SPACING } from '@/theme/styles';
import { FaDownload, FaFilePdf, FaBook, FaWheelchair } from 'react-icons/fa';
import { Hero, Section } from '@/components/ui/layout';
import { SmartCTA } from '@/components/ui/cta';
import { CATALOGS } from '@/components/sections/Catalogs/data';
import { Catalog } from '@/components/sections/Catalogs/types';

const getIconForCategory = (category: string) => {
  return <FaBook className="w-8 h-8" />;
};

const CatalogueCard = memo(function CatalogueCard({ catalog }: { catalog: Catalog }) {
  return (
    <div className={twMerge(
      'flex flex-col h-full bg-white rounded-lg shadow-lg p-6',
      'hover:shadow-xl',
      EFFECTS_STYLES.base.transition.base,
      'group'
    )}>
      <div className="flex flex-col flex-grow items-center">
        <div className={twMerge(
          'flex items-center justify-center w-16 h-16 mb-4',
          'rounded-xl bg-[#187baa]/10 text-[#187baa]'
        )}>
          {getIconForCategory(catalog.category)}
        </div>

        <h2 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(3),
          'text-[#187baa] text-center mb-2'
        )}>
          {catalog.title}
        </h2>

        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'text-neutral-700 text-center mb-4 flex-grow'
        )}>
          {catalog.description}
        </p>

        <div className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('sm'),
          'text-neutral-600 text-center mb-4'
        )}>
          Catégorie: {catalog.category === 'orthopedic' ? 'Orthopédique' : 'Prothétique'}
        </div>

        <a
          href={catalog.pdfUrl}
          download
          className={twMerge(
            'inline-flex items-center justify-center px-6 py-3 w-full',
            'bg-[#187baa] text-white font-semibold rounded-lg',
            'hover:bg-[#156a93]',
            EFFECTS_STYLES.base.transition.base,
            'group'
          )}
        >
          <FaDownload className={twMerge(
            'w-4 h-4 mr-2',
            'group-hover:-translate-y-0.5',
            EFFECTS_STYLES.base.transition.base
          )} />
          Télécharger le catalogue
        </a>
      </div>
    </div>
  );
});

export default memo(function CataloguesPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        <Hero
          badge={{ 
            icon: "📚", 
            text: "Documentation technique complète"
          }}
          title="Nos Catalogues"
          description="Téléchargez nos catalogues détaillés pour découvrir notre gamme complète de produits et solutions prothétiques."
          variant="centered"
          size="sm"
          className="bg-white mb-16"
        />

        <div className="relative z-0 bg-white pb-16">
          <Section className="mb-16">
            <m.div
              className={twMerge(
                CONTAINER_STYLES.variants.default,
                'relative z-10'
              )}
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
            >
              <div className={twMerge(
                'grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto',
                SPACING.gap.lg
              )}>
                {CATALOGS.map((catalog) => (
                  <m.div key={catalog.id} variants={ANIMATION_VARIANTS.fadeInUp}>
                    <CatalogueCard catalog={catalog} />
                  </m.div>
                ))}
              </div>
            </m.div>
          </Section>

          <Section className="last:mb-0">
            <SmartCTA
              title="Découvrez nos produits"
              description="Explorez notre gamme complète de solutions orthopédiques innovantes et trouvez les produits adaptés à vos besoins."
              primaryAction={{
                text: "Voir tous nos produits",
                href: "/produits"
              }}
              secondaryAction={{
                text: "Demander conseil",
                href: "/contact?subject=conseil"
              }}
            />
          </Section>
        </div>
      </main>
    </LazyMotion>
  );
}); 