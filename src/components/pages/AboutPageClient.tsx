'use client';

import { memo, type FC } from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { Hero, Section } from '@/components/ui/layout';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { 
  AboutHistory,
  AboutTeam,
  AboutValues,
  AboutMissionVision,
  AboutWhoWeAre,
  AboutWhyChooseUs
} from '@/components/sections/AboutUs';
import { aboutUsData, values } from '@/components/sections/AboutUs/data';
import dynamic from 'next/dynamic';

const SmartCTA = dynamic(() => import('@/components/ui/cta/SmartCTA'), {
  ssr: false
});

// Background Pattern Component
const BackgroundPattern = memo(function BackgroundPattern() {
  return (
    <div className={twMerge(
      'absolute inset-0 -z-10',
      'bg-white'
    )} />
  );
});

// Section Wrapper Component
const SectionWrapper = memo(function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={twMerge(
      'relative z-10',
      'bg-white',
      CONTAINER_STYLES.variants.default,
      'py-12',
      'mb-12',
      'last:mb-0',
      className
    )}>
      <BackgroundPattern />
      <div className="relative">
        {children}
      </div>
    </section>
  );
});

export default memo(function AboutPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-visible bg-white">
        {/* Hero Section */}
        <Hero
          badge={{ icon: "🏢", text: aboutUsData.header.badge }}
          title={aboutUsData.header.title}
          description={aboutUsData.header.description}
          variant="centered"
          size="sm"
          className="bg-white mb-16"
        />

        {/* Main Content */}
        <div className="relative z-0 bg-white pb-16">
          {/* Mission & Vision and Values Section */}
          <SectionWrapper>
            <motion.div
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
              className={twMerge(
                'grid grid-cols-1 lg:grid-cols-2',
                'gap-8 lg:gap-12'
              )}
            >
              {/* Mission & Vision */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className={twMerge(
                  'group relative overflow-hidden',
                  'bg-gradient-to-b from-white to-[#187baa]/5',
                  'rounded-2xl p-8 lg:p-10',
                  'border border-[#187baa]/10',
                  'shadow-lg shadow-[#187baa]/5',
                  'hover:shadow-xl hover:shadow-[#187baa]/10',
                  'hover:border-[#187baa]/20',
                  'backdrop-blur-sm',
                  EFFECTS_STYLES.base.transition.base
                )}
              >
                {/* Decorative gradient blob */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl" />
                </div>

                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                  'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                  'font-bold mb-4',
                  'group-hover:from-[#156a93] group-hover:to-[#187baa]',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  Notre Mission
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('lg'),
                  'text-neutral-700/80 mb-8',
                  'group-hover:text-neutral-700/90',
                  'leading-relaxed',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  Fournir des solutions orthopédiques innovantes et de haute qualité pour améliorer la vie de nos patients, tout en offrant un support technique expert à nos partenaires de santé.
                </p>
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                  'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                  'font-bold mb-4',
                  'group-hover:from-[#156a93] group-hover:to-[#187baa]',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  Notre Vision
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('lg'),
                  'text-neutral-700/80',
                  'group-hover:text-neutral-700/90',
                  'leading-relaxed',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  Devenir la référence en matière de solutions orthopédiques en Tunisie et en Afrique du Nord, en combinant innovation technologique et excellence du service.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className={twMerge(
                  'group relative overflow-hidden',
                  'bg-gradient-to-b from-white to-[#187baa]/5',
                  'rounded-2xl p-8 lg:p-10',
                  'border border-[#187baa]/10',
                  'shadow-lg shadow-[#187baa]/5',
                  'hover:shadow-xl hover:shadow-[#187baa]/10',
                  'hover:border-[#187baa]/20',
                  'backdrop-blur-sm',
                  EFFECTS_STYLES.base.transition.base
                )}
              >
                {/* Decorative gradient blob */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl" />
                </div>

                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                  'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                  'font-bold mb-6',
                  'group-hover:from-[#156a93] group-hover:to-[#187baa]',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  Nos Valeurs
                </h3>
                <div className="space-y-8">
                  {values.map((value) => (
                    <div key={value.title} className="flex items-start gap-6">
                      <div className={twMerge(
                        'w-14 h-14 flex items-center justify-center flex-shrink-0',
                        'bg-gradient-to-br from-[#187baa]/10 to-[#187baa]/5',
                        'text-[#187baa] rounded-xl',
                        'border border-[#187baa]/10',
                        'group-hover:from-[#187baa]/15 group-hover:to-[#187baa]/10',
                        'group-hover:border-[#187baa]/20',
                        'shadow-lg shadow-[#187baa]/5',
                        'backdrop-blur-sm',
                        EFFECTS_STYLES.base.transition.base
                      )}>
                        <span className="text-2xl">{value.icon}</span>
                      </div>
                      <div>
                        <h4 className={twMerge(
                          TYPOGRAPHY_STYLES.utils.getHeading(4),
                          'text-[#187baa]/90 mb-2',
                          'group-hover:text-[#187baa]',
                          EFFECTS_STYLES.base.transition.base
                        )}>
                          {value.title}
                        </h4>
                        <p className={twMerge(
                          TYPOGRAPHY_STYLES.utils.getBody('lg'),
                          'text-neutral-700/80',
                          'group-hover:text-neutral-700/90',
                          'leading-relaxed',
                          EFFECTS_STYLES.base.transition.base
                        )}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </SectionWrapper>

          {/* Section Qui sommes-nous */}
          <SectionWrapper className="hover:shadow-lg transition-shadow duration-300">
            <AboutWhoWeAre />
          </SectionWrapper>

          {/* Section Histoire */}
          <SectionWrapper className="hover:shadow-lg transition-shadow duration-300">
            <AboutHistory />
          </SectionWrapper>

          {/* Section Pourquoi nous choisir */}
          <SectionWrapper className="hover:shadow-lg transition-shadow duration-300">
            <AboutWhyChooseUs />
          </SectionWrapper>

          {/* Section Équipe */}
          <SectionWrapper className="hover:shadow-lg transition-shadow duration-300">
            <AboutTeam />
          </SectionWrapper>

          {/* Partnership CTA */}
          <SectionWrapper>
            <SmartCTA
              title="Collaborons Ensemble"
              description="Découvrez comment notre expertise et nos solutions orthopédiques innovantes peuvent répondre à vos besoins spécifiques."
              primaryAction={{
                text: "Parlons de votre projet",
                href: "/contact"
              }}
              secondaryAction={{
                text: "Voir nos produits",
                href: "/produits"
              }}
            />
          </SectionWrapper>
        </div>
      </main>
    </LazyMotion>
  );
}); 