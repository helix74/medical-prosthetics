import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { FADE_IN_UP } from '@/utils/animations';

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState = ({
  title,
  message,
  icon = '🔍',
  className
}: EmptyStateProps) => {
  return (
    <motion.div
      variants={FADE_IN_UP}
      initial="hidden"
      animate="visible"
      className={twMerge(
        'flex flex-col items-center justify-center py-12',
        className
      )}
    >
      <div className={twMerge(
        'bg-neutral-50 rounded-full p-4 mb-4',
        EFFECTS_STYLES.utils.getTransition('base')
      )}>
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className={twMerge(
        TYPOGRAPHY_STYLES.utils.getHeading(3),
        'mb-2'
      )}>
        {title}
      </h3>
      <p className={twMerge(
        TYPOGRAPHY_STYLES.utils.getBody('base'),
        'text-neutral-600 text-center max-w-md'
      )}>
        {message}
      </p>
    </motion.div>
  );
}; 