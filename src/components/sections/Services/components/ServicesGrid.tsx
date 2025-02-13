'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';

const services = [
  {
    title: "Consultation Technique",
    description: "Expertise personnalisée pour vos besoins spécifiques",
    icon: "🔍",
    features: [
      "Analyse des besoins",
      "Recommandations sur mesure",
      "Suivi personnalisé"
    ]
  },
  {
    title: "Support Technique",
    description: "Assistance continue pour vos équipements",
    icon: "🛠️",
    features: [
      "Maintenance préventive",
      "Réparations rapides",
      "Conseils d'utilisation"
    ]
  },
  {
    title: "Formation",
    description: "Programmes de formation adaptés",
    icon: "📚",
    features: [
      "Ateliers pratiques",
      "Documentation détaillée",
      "Certification professionnelle"
    ]
  },
  {
    title: "Service Après-Vente",
    description: "Suivi et maintenance de qualité",
    icon: "🤝",
    features: [
      "Garantie étendue",
      "Pièces de rechange",
      "Support prioritaire"
    ]
  }
];

const ServicesGrid = memo(function ServicesGrid() {
  return (
    <BackgroundLayers variant="minimal" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={ANIMATION_VARIANTS.fadeInUp}
            custom={index}
            className={twMerge(
              'group relative rounded-2xl p-8',
              'bg-gradient-to-b from-white to-[#187baa]/5',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5',
              'hover:shadow-xl hover:shadow-[#187baa]/10',
              'hover:border-[#187baa]/20',
              'backdrop-blur-sm',
              EFFECTS_STYLES.base.transition.base
            )}
          >
            {/* Decorative gradient blob */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="flex items-start gap-6 mb-8">
              <span className={twMerge(
                'text-4xl p-4 rounded-xl',
                'bg-[#187baa]/10',
                'group-hover:bg-[#187baa]/20',
                'transition-colors duration-300'
              )}>
                {service.icon}
              </span>
              <div>
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(4),
                  'text-[#187baa] mb-3',
                  'group-hover:text-[#187baa]/90',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  {service.title}
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600',
                  'group-hover:text-neutral-700',
                  EFFECTS_STYLES.base.transition.base
                )}>
                  {service.description}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <svg
                    className={twMerge(
                      'w-5 h-5 flex-shrink-0',
                      'text-[#187baa]',
                      'group-hover:text-[#187baa]/90',
                      EFFECTS_STYLES.base.transition.base
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('base'),
                    'text-neutral-600',
                    'group-hover:text-neutral-700',
                    EFFECTS_STYLES.base.transition.base
                  )}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </BackgroundLayers>
  );
});

export default ServicesGrid; 