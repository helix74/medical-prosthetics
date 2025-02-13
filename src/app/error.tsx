'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import Image from 'next/image';
import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default memo(function Error({ error, reset }: ErrorProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className={twMerge(
        CONTAINER_STYLES.variants.default,
        'flex flex-col items-center justify-center min-h-screen py-16'
      )}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/images/logo/logo.svg"
            alt="Delta Med Plus"
            width={80}
            height={80}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'text-[#187baa] mb-4'
          )}>
            Une erreur est survenue
          </h1>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600 mb-8 max-w-md mx-auto'
          )}>
            Nous nous excusons pour ce désagrément. Notre équipe a été notifiée et travaille à résoudre le problème.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className={twMerge(
                'inline-flex items-center justify-center',
                'px-6 py-3 rounded-xl',
                'bg-gradient-to-r from-[#187baa] to-[#156a93]',
                'text-white font-semibold',
                'shadow-lg shadow-[#187baa]/20',
                'hover:shadow-xl hover:shadow-[#187baa]/30',
                'hover:from-[#156a93] hover:to-[#187baa]',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              Réessayer
            </button>
            <Link
              href="/"
              className={twMerge(
                'inline-flex items-center justify-center',
                'px-6 py-3 rounded-xl',
                'bg-white',
                'text-[#187baa] font-semibold',
                'border border-[#187baa]/20',
                'shadow-lg shadow-[#187baa]/10',
                'hover:bg-[#187baa]/5',
                'hover:border-[#187baa]/30',
                'hover:shadow-xl hover:shadow-[#187baa]/20',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}); 