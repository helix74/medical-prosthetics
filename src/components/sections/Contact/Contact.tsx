'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { ContactHeader, ContactForm, ContactInfo } from './components';

const Contact = memo(function Contact() {
  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={FADE_IN_UP}
    >
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
    </m.div>
  );
});

export default Contact; 