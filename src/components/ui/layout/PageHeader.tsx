'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES } from '@/theme/styles';

export interface PageHeaderProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string;
  description?: string;
  className?: string;
}

export const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <motion.header
      variants={FADE_IN_UP}
      initial="hidden"
      animate="visible"
      className={twMerge(
        'min-h-[60vh] flex items-center',
        'py-32 md:py-40',
        className
      )}
    >
      <div className={CONTAINER_STYLES.utils.getContainer()}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={TYPOGRAPHY_STYLES.utils.getHeading(1)}>{title}</h1>
          {description && (
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('lg'),
              'mt-6 text-neutral-600'
            )}>
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default PageHeader; 