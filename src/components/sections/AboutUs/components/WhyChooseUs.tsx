'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES, GRID_STYLES } from '@/theme/styles';

const reasons = [
  {
    title: "Approvisionnement rapide & à moindre cout",
    description: "Garantir une livraison efficace des produits afin de réduire les délais d'importation au maximum et offrir des solutions compétitives grâce à une gestion optimisée des prix.",
    icon: "⚡"
  },
  {
    title: "L'expertise",
    description: "Les fondateurs de Delta Med plus sont bien positionnés pour mettre en oeuvre des stratégies d'amélioration continue des produits et des services, ayant un engagement pour l'excellence menant à une meilleure satisfaction double centre-patient.",
    icon: "🎯"
  },
  {
    title: "L'accès à l'international",
    description: "Fournir des articles issus de fournisseurs internationaux directement disponibles en Tunisie.",
    icon: "🌍"
  }
];

export default memo(function WhyChooseUs() {
  return (
    <div className="relative">
      {/* Base Layer - Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#187baa]/5 to-white rounded-3xl" />
      
      {/* Middle Layer - Decorative Elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Gradient Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#187baa_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.1]" />
        
        {/* Top Right Blob */}
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-gradient-to-bl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-40" />
        
        {/* Bottom Left Blob */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            variants={ANIMATION_VARIANTS.fadeInUp}
            transition={TRANSITION_PRESETS.spring}
            className={twMerge(
              'bg-white rounded-2xl p-8',
              'border border-neutral-100',
              EFFECTS_STYLES.base.shadow.sm,
              EFFECTS_STYLES.base.transition.base,
              'hover:shadow-xl hover:-translate-y-1'
            )}
            custom={index}
          >
            {/* Icon Container */}
            <div className={twMerge(
              'w-12 h-12 rounded-xl mb-6',
              'bg-[#187baa]/10 text-2xl',
              'flex items-center justify-center',
              'group-hover:bg-[#187baa]/20',
              EFFECTS_STYLES.base.transition.base
            )}>
              {reason.icon}
            </div>

            {/* Content Container */}
            <div className="space-y-3">
              <h3 className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(4),
                'text-[#187baa] leading-tight'
              )}>
                {reason.title}
              </h3>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-600 leading-relaxed'
              )}>
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}); 