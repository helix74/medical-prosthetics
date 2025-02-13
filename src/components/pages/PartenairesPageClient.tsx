'use client';

import { memo } from 'react';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import { Hero, Section } from '@/components/ui/layout';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import Image from 'next/image';
import { IMAGE_SIZES } from '@/theme/responsive';
import { LAYOUT_PATTERNS } from '@/theme';
import { partners, partnersData } from '@/components/sections/Partners/data';

// Background Pattern Component
const BackgroundPattern = memo(function BackgroundPattern() {
  return (
    <div className={twMerge(
      'absolute inset-0',
      'bg-gradient-to-b from-[#187baa]/5 to-white'
    )}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
    </div>
  );
});

// Section Wrapper Component
const SectionWrapper = memo(function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={twMerge(
      'relative',
      'bg-gradient-to-b from-[#187baa]/5 to-white',
      CONTAINER_STYLES.variants.default,
      'py-16 lg:py-24',
      'backdrop-blur-sm',
      className
    )}>
      {/* Decorative gradient overlay */}
      <div className={twMerge(
        'absolute inset-0',
        'bg-gradient-to-b from-white/80 via-transparent to-white/40',
        'pointer-events-none'
      )} />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
});

export default memo(function PartenairesPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        {/* Hero Section */}
        <Hero
          badge={{ icon: "🤝", text: "Nos Collaborations" }}
          title="Nos Partenaires"
          description="Découvrez les fabricants de renom avec lesquels nous collaborons pour vous offrir les meilleures solutions orthopédiques."
          variant="centered"
          size="sm"
          className="bg-white mb-16"
        />

        {/* Main Content */}
        <div className="relative z-0 bg-white pb-16">
          {/* Presentation Section */}
          <Section className="mb-16">
            <motion.div
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.span
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className={twMerge(
                    'inline-flex items-center px-4 py-2 rounded-full',
                    'bg-[#187baa]/10 text-[#187baa]',
                    'border border-[#187baa]/20',
                    'mb-6',
                    EFFECTS_STYLES.base.transition.base,
                    'hover:bg-[#187baa]/20'
                  )}
                >
                  <span className="mr-2">💫</span>
                  {partnersData.vision.badge}
                </motion.span>

                <motion.h2
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(2),
                    'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                    'font-bold'
                  )}
                >
                  {partnersData.vision.title}
                </motion.h2>
              </div>

              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="space-y-8"
              >
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('lg'),
                  'text-[#187baa]/80 leading-relaxed',
                  'bg-white/50 p-6 rounded-xl backdrop-blur-sm',
                  'border border-[#187baa]/10',
                  'shadow-lg shadow-[#187baa]/5'
                )}>
                  {partnersData.vision.description}
                </p>

                {partnersData.vision.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('lg'),
                      'text-neutral-700/90 leading-relaxed',
                      'bg-white/30 p-6 rounded-xl backdrop-blur-sm',
                      'hover:bg-white/50 transition-colors duration-300'
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </Section>

          {/* Partners Grid */}
          <Section className="last:mb-0">
            <motion.div
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
              className={twMerge(
                LAYOUT_PATTERNS.grid.threeColumn,
                'gap-8'
              )}
            >
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={TRANSITION_PRESETS.spring}
                  className={twMerge(
                    'group relative overflow-hidden',
                    'bg-gradient-to-b from-white to-[#187baa]/5',
                    'rounded-2xl p-8',
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

                  <div className={twMerge(
                    'aspect-video relative mb-6',
                    'rounded-xl overflow-hidden'
                  )}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={640}
                      height={360}
                      className={twMerge(
                        'object-contain w-full h-full',
                        'group-hover:scale-105',
                        EFFECTS_STYLES.base.transition.base
                      )}
                      sizes={IMAGE_SIZES.threeColumn}
                      quality={90}
                    />
                  </div>

                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'text-[#187baa]/90 mb-3',
                    'group-hover:text-[#187baa]',
                    EFFECTS_STYLES.base.transition.base
                  )}>
                    {partner.name}
                  </h3>

                  {partner.description && (
                    <p className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('base'),
                      'text-neutral-700/80 mb-6',
                      'group-hover:text-neutral-700/90',
                      'leading-relaxed',
                      EFFECTS_STYLES.base.transition.base
                    )}>
                      {partner.description}
                    </p>
                  )}

                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={twMerge(
                        'inline-flex items-center justify-center w-full',
                        'px-6 py-2 rounded-lg',
                        'border border-[#187baa] text-[#187baa]',
                        EFFECTS_STYLES.base.transition.base,
                        'hover:bg-[#187baa]/10'
                      )}
                    >
                      Visiter le site
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </main>
    </LazyMotion>
  );
}); 