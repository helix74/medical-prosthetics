'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { contactData } from '../data';
import { twMerge } from 'tailwind-merge';

const ContactForm = memo(function ContactForm() {
  const { form } = contactData;

  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-20')}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <m.div variants={FADE_IN_UP} className="text-center mb-12">
          <h2 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-4'
          )}>
            {form.title}
          </h2>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-700'
          )}>
            {form.description}
          </p>
        </m.div>

        <m.form
          variants={FADE_IN_UP}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className={twMerge(
              'font-medium text-[#187baa] mb-1 block'
            )}>
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={twMerge(
                'w-full px-4 py-2 rounded-lg',
                'border border-neutral-200',
                'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa]/20',
                'text-neutral-900 placeholder-neutral-500',
                'outline-none',
                EFFECTS_STYLES.base.transition.base
              )}
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={twMerge(
                'w-full rounded-lg border border-neutral-300',
                'px-4 py-2 text-neutral-900 placeholder-neutral-500',
                'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa] focus:ring-opacity-50',
                'transition duration-200'
              )}
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={twMerge(
                'w-full rounded-lg border border-neutral-300',
                'px-4 py-2 text-neutral-900 placeholder-neutral-500',
                'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa] focus:ring-opacity-50',
                'transition duration-200'
              )}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={twMerge(
                'w-full rounded-lg border border-neutral-300',
                'px-4 py-2 text-neutral-900 placeholder-neutral-500',
                'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa] focus:ring-opacity-50',
                'transition duration-200'
              )}
              required
            />
          </div>

          <button
            type="submit"
            className={twMerge(
              'w-full px-8 py-4 rounded-lg',
              'bg-[#187baa] text-white font-medium',
              'hover:bg-[#187baa]/90',
              'focus:outline-none focus:ring-2 focus:ring-[#187baa] focus:ring-opacity-50',
              'transition duration-200'
            )}
          >
            Envoyer le message
          </button>
        </m.form>
      </m.div>
    </div>
  );
});

export default ContactForm; 