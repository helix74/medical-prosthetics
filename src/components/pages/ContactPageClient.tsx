'use client';

import { memo, useCallback, useState } from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { Hero, Section } from '@/components/ui/layout';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import emailjs from '@emailjs/browser';
import { LogoSpinner } from '@/components/ui/loading-spinner/LogoSpinner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize EmailJS with your public key
emailjs.init("cFv_2Iuq7Oa5vsMZW"); // Replace this with your actual public key from step 4

// Lazy load icons
const Icons = {
  FaMapMarkerAlt: dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt)),
  FaPhone: dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone)),
  FaEnvelope: dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope)),
  FaClock: dynamic(() => import('react-icons/fa').then(mod => mod.FaClock))
};

const contactInfo = [
  {
    title: 'Adresse',
    icon: 'FaMapMarkerAlt',
    content: '9, Avenue habib Bourguiba, Bardo, Tunis',
  },
  {
    title: 'Téléphone',
    icon: 'FaPhone',
    content: '+216 99 221 620',
  },
  {
    title: 'Email',
    icon: 'FaEnvelope',
    content: 'direction@deltamedicalplus.tn',
  },
  {
    title: 'Horaires',
    icon: 'FaClock',
    content: 'Lundi - Vendredi\n9:00 - 18:00',
  },
];

const ContactForm = memo(function ContactForm() {
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = useCallback(async (data: FormData) => {
    try {
      setSubmitStatus('idle');
      await emailjs.send(
        'service_k4t4ygg',
        'template_os10fii',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'direction@deltamedicalplus.tn',
        },
        'cFv_2Iuq7Oa5vsMZW'
      );
      
      setSubmitStatus('success');
      reset();
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={twMerge(
      'space-y-8',
      'bg-gradient-to-b from-white to-[#187baa]/5',
      'rounded-2xl p-8',
      'border border-[#187baa]/10',
      'shadow-lg shadow-[#187baa]/5',
      'backdrop-blur-sm'
    )}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'font-medium text-[#187baa]/90 mb-2 block'
          )}>
            Nom *
          </label>
          <input
            type="text"
            className={twMerge(
              'w-full px-4 py-3 rounded-xl',
              'bg-white/80 backdrop-blur-sm',
              'border border-[#187baa]/10',
              'focus:border-[#187baa]/20 focus:ring-2 focus:ring-[#187baa]/10',
              'outline-none placeholder-neutral-400',
              'shadow-sm shadow-[#187baa]/5',
              'hover:border-[#187baa]/20',
              '!text-neutral-900',
              EFFECTS_STYLES.base.transition.base,
              errors.name && 'border-red-300 focus:border-red-400 focus:ring-red-200'
            )}
            placeholder="Votre nom"
            {...register('name', { 
              required: 'Le nom est requis',
              minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' }
            })}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'font-medium text-[#187baa]/90 mb-2 block'
          )}>
            Email *
          </label>
          <input
            type="email"
            className={twMerge(
              'w-full px-4 py-3 rounded-xl',
              'bg-white/80 backdrop-blur-sm',
              'border border-[#187baa]/10',
              'focus:border-[#187baa]/20 focus:ring-2 focus:ring-[#187baa]/10',
              'outline-none placeholder-neutral-400',
              'shadow-sm shadow-[#187baa]/5',
              'hover:border-[#187baa]/20',
              '!text-neutral-900',
              EFFECTS_STYLES.base.transition.base,
              errors.email && 'border-red-300 focus:border-red-400 focus:ring-red-200'
            )}
            placeholder="votre@email.com"
            {...register('email', { 
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'font-medium text-[#187baa]/90 mb-2 block'
        )}>
          Sujet *
        </label>
        <input
          type="text"
          className={twMerge(
            'w-full px-4 py-3 rounded-xl',
            'bg-white/80 backdrop-blur-sm',
            'border border-[#187baa]/10',
            'focus:border-[#187baa]/20 focus:ring-2 focus:ring-[#187baa]/10',
            'outline-none placeholder-neutral-400',
            'shadow-sm shadow-[#187baa]/5',
            'hover:border-[#187baa]/20',
            '!text-neutral-900',
            EFFECTS_STYLES.base.transition.base,
            errors.subject && 'border-red-300 focus:border-red-400 focus:ring-red-200'
          )}
          placeholder="Sujet de votre message"
          {...register('subject', { 
            required: 'Le sujet est requis',
            minLength: { value: 5, message: 'Le sujet doit contenir au moins 5 caractères' }
          })}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <label className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'font-medium text-[#187baa]/90 mb-2 block'
        )}>
          Message *
        </label>
        <textarea
          rows={5}
          className={twMerge(
            'w-full px-4 py-3 rounded-xl',
            'bg-white/80 backdrop-blur-sm',
            'border border-[#187baa]/10',
            'focus:border-[#187baa]/20 focus:ring-2 focus:ring-[#187baa]/10',
            'outline-none placeholder-neutral-400',
            'shadow-sm shadow-[#187baa]/5',
            'hover:border-[#187baa]/20',
            '!text-neutral-900',
            EFFECTS_STYLES.base.transition.base,
            errors.message && 'border-red-300 focus:border-red-400 focus:ring-red-200'
          )}
          placeholder="Votre message..."
          {...register('message', { 
            required: 'Le message est requis',
            minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' }
          })}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className={twMerge(
          'p-4 rounded-xl',
          'bg-green-50 text-green-700',
          'border border-green-200'
        )}>
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={twMerge(
          'p-4 rounded-xl',
          'bg-red-50 text-red-700',
          'border border-red-200'
        )}>
          Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={twMerge(
          'w-full px-8 py-4 rounded-xl',
          'bg-gradient-to-r from-[#187baa] to-[#156a93]',
          'text-white font-semibold',
          'shadow-lg shadow-[#187baa]/20',
          'hover:shadow-xl hover:shadow-[#187baa]/30',
          'hover:from-[#156a93] hover:to-[#187baa]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
          EFFECTS_STYLES.base.transition.base
        )}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <LogoSpinner size="sm" />
            <span className="ml-2">Envoi en cours...</span>
          </div>
        ) : (
          'Envoyer le message'
        )}
      </button>
    </form>
  );
});

const ContactInfo = memo(function ContactInfo() {
  return (
    <div className={twMerge(
      'grid grid-cols-1 sm:grid-cols-2',
      'gap-4 lg:gap-6'
    )}>
      {contactInfo.map((info) => {
        const Icon = Icons[info.icon as keyof typeof Icons];
        return (
          <motion.div
            key={info.title}
            className={twMerge(
              'bg-white rounded-xl p-6',
              'border border-[#187baa]/10 shadow-sm',
              'hover:shadow-md hover:-translate-y-0.5',
              EFFECTS_STYLES.base.transition.base
            )}
            variants={ANIMATION_VARIANTS.fadeInUp}
            whileHover={{ y: -2 }}
          >
            <div className={twMerge(
              'p-3 bg-[#187baa]/5 rounded-xl text-[#187baa] mb-4 inline-block',
              EFFECTS_STYLES.base.transition.base
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(4),
              'text-[#187baa] mb-2'
            )}>
              {info.title}
            </h3>
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-neutral-600 whitespace-pre-line'
            )}>
              {info.content}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
});

export default memo(function ContactPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        {/* Hero Section */}
        <Hero
          badge={{ icon: "📞", text: "Contactez-nous" }}
          title="À votre service"
          description="Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos projets."
          size="sm"
          variant="centered"
          className="bg-gradient-to-b from-[#187baa]/5 via-[#187baa]/2 to-transparent"
          showLogo={true}
        />

        {/* Main Content */}
        <div className="relative z-0 bg-white">
          {/* Contact Section */}
          <Section className="mb-0">
            <motion.div
              className={twMerge(
                'grid grid-cols-1 lg:grid-cols-2',
                'gap-8 lg:gap-12',
                'bg-white'
              )}
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
            >
              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                variants={ANIMATION_VARIANTS.fadeInUp}
              >
                <div className="mb-8">
                  <h2 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                    'font-bold mb-3'
                  )}>
                    Nos coordonnées
                  </h2>
                  <p className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('lg'),
                    'text-neutral-700/80',
                    'leading-relaxed'
                  )}>
                    Retrouvez toutes nos informations de contact ci-dessous.
                  </p>
                </div>
                <ContactInfo />
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className={twMerge(
                  'bg-white rounded-xl shadow-lg p-8',
                  'border border-[#187baa]/10',
                  EFFECTS_STYLES.base.transition.base
                )}
              >
                <h2 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                  'text-[#187baa] mb-2'
                )}>
                  Envoyez-nous un message
                </h2>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600 mb-8'
                )}>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </motion.div>
            </motion.div>
          </Section>
        </div>
      </main>
    </LazyMotion>
  );
}); 