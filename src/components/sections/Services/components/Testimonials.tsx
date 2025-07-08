'use client';

import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { components } from '@/theme';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { servicesData } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const TESTIMONIALS = [
  {
    content: "L'expertise technique et le service client de Delta Medical Plus sont exceptionnels. Leur équipe nous accompagne à chaque étape.",
    author: "Dr. Sarah Benali",
    role: "Chirurgien Orthopédiste",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "Grâce à leur formation approfondie, notre équipe est maintenant plus compétente dans l'utilisation des prothèses modernes.",
    author: "Dr. Mohamed Karray",
    role: "Directeur Centre de Rééducation",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    content: "Un service rapide et professionnel. Les solutions proposées sont toujours adaptées aux besoins spécifiques de nos patients.",
    author: "Dr. Leila Mansouri",
    role: "Spécialiste en Orthopédie",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = memo(function Testimonials() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="relative px-4 sm:px-6 lg:px-0"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#187baa]/5 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#187baa]/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <m.span
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-[#187baa]/10 text-[#187baa]',
                'border border-[#187baa]/20',
                'hover:bg-[#187baa]/20',
                'mb-6 mx-auto',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-[#187baa]" />
              Témoignages Clients
            </m.span>

            <m.h3
              variants={FADE_IN_UP} 
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(3),
                'text-[#187baa] mb-4'
              )}
            >
              Ce que disent nos clients
            </m.h3>
            <m.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-600 mb-6'
              )}
            >
              Découvrez les retours d'expérience de nos clients sur nos services et notre accompagnement.
            </m.p>
          </div>

          {/* Testimonials Grid */}
          <m.div
            variants={STAGGER_CHILDREN}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <m.div
                key={testimonial.author}
                variants={FADE_IN_UP}
                custom={index}
                className={twMerge(
                  'bg-white rounded-2xl p-6',
                  EFFECTS_STYLES.base.shadow.sm,
                  EFFECTS_STYLES.base.transition.base,
                  'group hover:shadow-xl hover:-translate-y-1'
                )}
              >
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-[#187baa]/20 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Content */}
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600 mb-6'
                )}>
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#187baa]/10">
                    {/* You might want to use next/image here in production */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getHeading(4),
                      'text-[#187baa]'
                    )}>
                      {testimonial.author}
                    </div>
                    <div className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('sm'),
                      'text-neutral-600'
                    )}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </m.div>
    </LazyMotion>
  );
});

export default Testimonials; 