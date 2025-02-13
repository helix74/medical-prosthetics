'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES, GRID_STYLES } from '../../../theme/styles';

const FEATURES = [
  {
    icon: "🌟",
    title: "Expertise",
    description: "Plus de 20 ans d'expérience dans le domaine orthopédique"
  },
  {
    icon: "🤝",
    title: "Service Client",
    description: "Accompagnement personnalisé et support technique spécialisé"
  },
  {
    icon: "📦",
    title: "Qualité",
    description: "Produits certifiés répondant aux normes internationales"
  }
];

const AboutUs = memo(function AboutUs() {
  return (
    <Section variant="blue">
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="text-center max-w-4xl mx-auto mb-16 px-4 sm:px-6 lg:px-0"
      >
        <motion.span
          variants={FADE_IN_UP}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-white/10 text-white border-white/20',
            'mb-6 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-white/20'
          )}
        >
          <span className="mr-2">🏢</span>
          Notre Histoire
        </motion.span>

        <motion.h2 
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-6'
          )}
        >
          À Propos de Nous
        </motion.h2>
        <motion.p 
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-white/90'
          )}
        >
          Delta Medical Plus est leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={STAGGER_CHILDREN}
        className={twMerge(
          GRID_STYLES.responsive.threeColumn,
          'gap-6 md:gap-8',
          'px-4 sm:px-6 lg:px-0'
        )}
      >
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={FADE_IN_UP}
            className={twMerge(
              'bg-white rounded-2xl p-6 lg:p-8',
              'text-center h-full',
              'group transition-all duration-300',
              'hover:shadow-xl hover:-translate-y-1'
            )}
            custom={index}
          >
            <span className="text-4xl mb-4 inline-block transform transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </span>
            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(3),
              'text-[#187baa] mb-4',
              'group-hover:text-[#156a93] transition-colors duration-200'
            )}>
              {feature.title}
            </h3>
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-neutral-600'
            )}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={FADE_IN_UP}
        className="text-center mt-12 px-4 sm:px-6 lg:px-0"
      >
        <Link
          href="/a-propos"
          className={twMerge(
            'inline-flex items-center px-6 py-3 rounded-lg',
            'bg-white text-[#187baa]',
            'hover:bg-white/90 hover:text-[#156a93]',
            'group',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          En savoir plus
          <svg
            className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </motion.div>
    </Section>
  );
});

export default AboutUs; 