import { Variants } from 'framer-motion';

export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 44,
      damping: 18,
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};
