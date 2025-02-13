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
      'h-full bg-white rounded-2xl overflow-hidden',
      'border border-[#187baa]/10',
      'shadow-lg shadow-[#187baa]/5',
      'hover:shadow-xl hover:shadow-[#187baa]/10',
      'hover:border-[#187baa]/20',
      'transform hover:-translate-y-1',
      EFFECTS_STYLES.base.transition.base
    )}>
      <div className="relative h-48 w-full bg-white p-6">
        <img
          src={catalog.imageUrl}
          alt={catalog.title}
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className={twMerge(
            'inline-flex items-center px-3 py-1 rounded-full',
            'bg-white/90 backdrop-blur-sm text-[#187baa]',
            'text-sm font-medium',
            'border border-[#187baa]/10',
            'shadow-sm shadow-[#187baa]/5'
          )}>
            {catalog.category === 'orthopedic' ? 'Orthopédique' : 'Prothétique'}
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-[#187baa]/10">
        <h3 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(3),
          'text-[#187baa] mb-3',
          'line-clamp-2 h-[3.5rem]'
        )}>
          {catalog.title}
        </h3>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'text-neutral-600 mb-6',
          'line-clamp-2 h-[3rem]'
        )}>
          {catalog.description}
        </p>
        <a
          href={catalog.pdfUrl}
          download
          className={twMerge(
            'inline-flex items-center justify-center w-full px-5 py-2.5',
            'bg-[#187baa] text-white rounded-xl',
            'hover:bg-[#156a93]',
            'shadow-md shadow-[#187baa]/10',
            'hover:shadow-lg hover:shadow-[#187baa]/20',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          <FaBook className="w-5 h-5 mr-2" />
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