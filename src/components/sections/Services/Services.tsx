'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { 
  ServicesHeader,
  ServicesWhyUs
} from './components';

const Services = memo(function Services() {
  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={FADE_IN_UP}
    >
      <ServicesHeader />
      <ServicesWhyUs />
    </m.div>
  );
});

export default Services; 