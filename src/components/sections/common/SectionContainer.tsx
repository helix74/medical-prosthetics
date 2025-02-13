import { motion } from 'framer-motion';
import { STAGGER_CHILDREN } from '@/utils/animations';
import { SECTION_STYLES } from '@/theme/styles';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  withAnimation?: boolean;
  spacing?: 'default' | 'compact' | 'spacious';
  variant?: 'light' | 'blue' | 'dark' | 'gradient' | 'transparent';
}

export const SectionContainer = ({ 
  children, 
  className = '',
  withAnimation = true,
  spacing = 'default',
  variant = 'light'
}: SectionContainerProps) => {
  const Container = withAnimation ? motion.div : 'div';
  
  return (
    <section 
      className={twMerge(
        SECTION_STYLES.utils.container(spacing),
        SECTION_STYLES.utils.variant(variant),
        className
      )}
    >
      <Container
        className="relative z-10"
        {...(withAnimation && {
          variants: STAGGER_CHILDREN,
          initial: "initial",
          whileInView: "animate",
          viewport: { once: true }
        })}
      >
        {children}
      </Container>
    </section>
  );
}; 