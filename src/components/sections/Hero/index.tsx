'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import { Badge } from '@/components/ui/base/Badge';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';

const stats = [
  { label: "Années d'expérience", value: '10+' },
  { label: 'Centres partenaires', value: '10+' },
  { label: 'Composants prothétiques', value: '10000+' },
  { label: 'Fournisseurs internationaux', value: '20+' }
];

const Hero = memo(function Hero() {
  return (
    <BackgroundLayers variant="frost" className="min-h-[90vh] flex items-center py-8 md:py-12 lg:py-16">
      <div className={CONTAINER_STYLES.variants.default}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="initial"
            animate="animate"
            className="lg:col-span-6"
          >
            {/* Badge */}
            <motion.div
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-6 py-3 rounded-full mb-6',
                'bg-[#187baa]/10 text-[#187baa]',
                'border border-[#187baa]/20',
                'backdrop-blur-sm',
                'hover:bg-[#187baa]/20',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              <span className="mr-2">🏥</span>
              <span className="font-medium">Solutions Orthopédiques Innovantes</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(1),
                'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                'font-bold mb-8 text-justify'
              )}
            >
              Des produits de qualité pour les spécialistes de la mobilité
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 mt-6 mb-12',
                'leading-relaxed',
                'max-w-2xl mx-auto text-justify'
              )}
            >
              Delta Med Plus s'engage à fournir des solutions orthopédiques de haute qualité, 
              adaptées aux besoins spécifiques de chaque patient, tout en offrant un support 
              technique expert à nos partenaires de santé.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={FADE_IN_UP}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <Link href="/produits">
                <button className={twMerge(
                  'px-8 py-4 rounded-xl',
                  'bg-[#187baa] text-white',
                  'shadow-lg shadow-[#187baa]/20',
                  'hover:bg-[#156a93]',
                  'transition duration-200',
                  'flex items-center gap-2'
                )}>
                  Découvrir nos produits
                  <span>→</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className={twMerge(
                  'px-8 py-4 rounded-xl',
                  'bg-white text-[#187baa]',
                  'border border-[#187baa]/20',
                  'shadow-lg shadow-[#187baa]/10',
                  'hover:bg-[#187baa]/10',
                  'transition duration-200'
                )}>
                  Nous contacter
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={FADE_IN_UP}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={twMerge(
                    'text-2xl font-bold text-[#187baa] mb-1',
                    'bg-white rounded-lg p-3',
                    'shadow-lg shadow-[#187baa]/10',
                    'border border-[#187baa]/10'
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={FADE_IN_UP}
            initial="initial"
            animate="animate"
            className="lg:col-span-6 relative w-full max-w-2xl mx-auto lg:max-w-none"
          >
            <div className={twMerge(
              'relative w-full overflow-hidden rounded-2xl',
              'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]',
              'bg-white shadow-xl shadow-[#187baa]/15',
              'border border-[#187baa]/10',
              'transform lg:translate-x-4 lg:scale-105 transition-transform duration-300'
            )}>
              <Image
                src="/images/hero/hero-image.jpg"
                alt="Medical Prosthetics"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundLayers>
  );
});

export default Hero; 