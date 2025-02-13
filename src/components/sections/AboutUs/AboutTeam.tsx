import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES } from '@/theme/styles';
import { team } from './data';

export const AboutTeam = memo(function AboutTeam() {
  return (
    <motion.div
      variants={STAGGER_CHILDREN}
      initial="initial"
      animate="animate"
      className="text-center"
    >
      <motion.h2
        variants={ANIMATION_VARIANTS.fadeInUp}
        className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(2),
          'text-[#187baa] mb-6'
        )}
      >
        Notre Équipe
      </motion.h2>
      <motion.p
        variants={ANIMATION_VARIANTS.fadeInUp}
        className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'text-neutral-600 mb-12'
        )}
      >
        Une équipe passionnée et expérimentée dédiée à votre satisfaction.
      </motion.p>

      <motion.div
        variants={STAGGER_CHILDREN}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              'bg-white rounded-lg p-6',
              'shadow-lg hover:shadow-xl transition-shadow duration-300'
            )}
          >
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(4),
              'text-[#187baa] mb-2'
            )}>
              {member.name}
            </h3>
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('sm'),
              'text-neutral-500 mb-4'
            )}>
              {member.role}
            </p>
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-neutral-600'
            )}>
              {member.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}); 