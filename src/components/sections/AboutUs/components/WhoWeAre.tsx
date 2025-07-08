import { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const WhoWeAre = memo(function WhoWeAre() {
  const { whoWeAre } = aboutUsData;

  return (
    <section className="py-16 md:py-24">
      <div className={CONTAINER_STYLES.variants.default}>
        <div className="max-w-4xl mx-auto">
          {/* Centered Header Section */}
          <div className="text-center mb-16">
            {/* Logo */}
            <motion.div
              variants={FADE_IN_UP}
              className="mb-8"
            >
              <Image
                src="/images/logo/logo.svg"
                alt="Delta Med Plus"
                width={100}
                height={100}
                className="mx-auto"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.span
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-[#187baa]/10 text-[#187baa]',
                'border border-[#187baa]/20',
                'mb-8 mx-auto',
                'shadow-sm shadow-[#187baa]/5',
                'backdrop-blur-sm',
                EFFECTS_STYLES.base.transition.base,
                'hover:bg-[#187baa]/15'
              )}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-[#187baa]" />
              <span className="font-medium text-sm">{whoWeAre.badge}</span>
            </motion.span>

            {/* Title */}
            <motion.h2
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(1),
                'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                'font-bold mb-8',
                'leading-tight'
              )}
            >
              {whoWeAre.title}
            </motion.h2>
          </div>

          {/* Content Section */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Main Description */}
            <motion.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-[#187baa]/90 mb-10',
                'leading-relaxed',
                'font-medium',
                'text-lg md:text-xl'
              )}
            >
              {whoWeAre.description}
            </motion.p>

            {/* Additional Info */}
            <div className="space-y-8">
              {whoWeAre.additionalInfo.map((info, index) => (
                <motion.p
                  key={index}
                  variants={FADE_IN_UP}
                  className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('lg'),
                    'text-neutral-700/90',
                    'leading-relaxed'
                  )}
                >
                  {info}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WhoWeAre; 