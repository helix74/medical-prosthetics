import { Variants } from 'framer-motion';

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
};

export const TRANSITION_PRESETS = {
  fast: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1]
  },
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 30
  },
  slow: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1]
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 10
  }
};

export const STAGGER_CHILDREN = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Commonly used animation variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_PRESETS.fast
  }
};

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_PRESETS.fast
  }
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: TRANSITION_PRESETS.spring
  }
}; 