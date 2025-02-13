import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';

export default function ContactForm() {
  const inputStyles = twMerge(
    'w-full px-4 py-3 rounded-xl',
    'bg-white/80 backdrop-blur-sm',
    'border border-[#187baa]/20',
    'text-[#187baa] placeholder-[#187baa]/50',
    'focus:outline-none focus:ring-2 focus:ring-[#187baa]/30',
    'hover:border-[#187baa]/30',
    EFFECTS_STYLES.base.transition.base
  );

  const labelStyles = twMerge(
    TYPOGRAPHY_STYLES.utils.getBody('base'),
    'font-medium text-[#187baa] mb-2 block'
  );

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>
            Nom *
          </label>
          <input
            type="text"
            className={inputStyles}
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label className={labelStyles}>
            Email *
          </label>
          <input
            type="email"
            className={inputStyles}
            placeholder="votre@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className={labelStyles}>
          Sujet *
        </label>
        <input
          type="text"
          className={inputStyles}
          placeholder="Sujet de votre message"
          required
        />
      </div>

      <div>
        <label className={labelStyles}>
          Message *
        </label>
        <textarea
          rows={5}
          className={twMerge(
            inputStyles,
            'resize-none'
          )}
          placeholder="Votre message..."
          required
        />
      </div>

      <button
        type="submit"
        className={twMerge(
          'w-full px-8 py-4 rounded-xl',
          'bg-gradient-to-r from-[#187baa] to-[#156a93]',
          'text-white font-semibold',
          'shadow-lg shadow-[#187baa]/20',
          'hover:shadow-xl hover:shadow-[#187baa]/30',
          'hover:from-[#156a93] hover:to-[#187baa]',
          EFFECTS_STYLES.base.transition.base
        )}
      >
        Envoyer le message
      </button>
    </form>
  );
} 