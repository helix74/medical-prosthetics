'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES, GRID_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { IMAGE_SIZES } from '@/theme/responsive';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default memo(function Team() {
  const { team } = aboutUsData;

  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.span
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              'inline-flex items-center px-4 py-2 rounded-full',
              'bg-[#187baa]/10 text-[#187baa]',
              'border border-[#187baa]/20',
              'mb-6 mx-auto',
              EFFECTS_STYLES.base.transition.base,
              'hover:bg-[#187baa]/20'
            )}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-2 text-[#187baa]" />
            {team.badge}
          </motion.span>
          
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6'
            )}
          >
            {team.title}
          </motion.h2>

          <motion.p 
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('lg'),
              'text-neutral-600'
            )}
          >
            {team.description}
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <motion.div 
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center"
        >
          {team.members.map((member, index) => (
            <motion.div
              key={member.name}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              className={twMerge(
                'text-center w-full max-w-md',
                'flex flex-col items-center'
              )}
              custom={index}
            >
              <div className={twMerge(
                'relative w-48 h-48 mx-auto mb-6',
                'rounded-full overflow-hidden',
                EFFECTS_STYLES.base.shadow.lg
              )}>
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className={twMerge(
                    'object-cover w-full h-full',
                    EFFECTS_STYLES.base.transition.base,
                    'group-hover:scale-110'
                  )}
                  sizes={IMAGE_SIZES.threeColumn}
                  lazyLoadOptions={{
                    threshold: 0.1,
                    rootMargin: '50px'
                  }}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <h3 className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(4),
                'text-[#187baa] mb-2'
              )}>
                {member.name}
              </h3>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-[#187baa] mb-4'
              )}>
                {member.role}
              </p>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-700 max-w-sm mx-auto text-center'
              )}>
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}); 