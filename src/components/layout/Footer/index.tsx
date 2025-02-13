'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { FOOTER_STYLES } from './styles';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

const contactInfo = [
  {
    icon: <MapPinIcon className="w-5 h-5" />,
    text: '9, Avenue Habib Borguiba, Bardo, Tunis',
    color: 'text-[#187baa]'
  },
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    text: '+216 99 221 620',
    color: 'text-[#187baa]'
  },
  {
    icon: <EnvelopeIcon className="w-5 h-5" />,
    text: 'direction@deltamedicalplus.tn',
    color: 'text-[#187baa]'
  },
  {
    icon: <ClockIcon className="w-5 h-5" />,
    text: 'Lun-Ven: 9h-18h',
    color: 'text-[#187baa]'
  }
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Produits', href: '/produits' },
      { label: 'Services', href: '/services' },
      { label: 'Catalogues', href: '/catalogues' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Partenaires', href: '/partenaires' },
      { label: 'Contact', href: '/contact' },
      { label: 'Carrières', href: '/carrieres' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Support technique', href: '/services#support' },
      { label: 'Formation', href: '/services#formation' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

const socialLinks = [
  { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/deltamedplus', label: 'LinkedIn', color: 'hover:bg-[#187baa]' },
  { icon: <FaFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/deltamedplus', label: 'Facebook', color: 'hover:bg-[#187baa]' },
  { icon: <FaInstagram className="w-5 h-5" />, href: 'https://www.instagram.com/deltamedplus', label: 'Instagram', color: 'hover:bg-[#187baa]' },
];

interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={twMerge('bg-[#187baa] py-12', className)} role="contentinfo" aria-label="Site footer" {...props}>
      <div className={CONTAINER_STYLES.variants.default}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Description */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-xl font-semibold mb-2">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="Delta Med Plus"
                    width={40}
                    height={40}
                    className="w-auto h-10"
                  />
                  <span>Delta Med Plus</span>
                </div>
              </h2>
              <p className="text-white/90 text-sm mb-3">Solutions Orthopédiques</p>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('sm'),
                'text-white/80 max-w-md'
              )}>
                Leader dans la distribution de composants pour prothèses et orthèses orthopédiques en Tunisie.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <nav className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8" aria-label="Footer navigation">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3" aria-label={`${section.title} links`}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-white/80 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#187baa] rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <motion.div
              className="contact-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-4" aria-label="Contact information">
                {contactInfo.map((info) => (
                  <li key={info.text} className="flex items-start gap-3">
                    <div className="text-white/80 mt-1" aria-hidden="true">
                      {info.icon}
                    </div>
                    <div>
                      <span className={`text-${info.color} text-sm`} aria-label={info.text}>
                        {info.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#187baa]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="text-white/60 text-sm">
                © {new Date().getFullYear()} Delta Med Plus
              </span>
              <nav className="flex items-center gap-6" aria-label="Legal links">
                {[
                  { label: 'Mentions légales', href: '/mentions-legales' },
                  { label: 'Confidentialité', href: '/confidentialite' },
                  { label: 'CGV', href: '/cgv' }
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#187baa] rounded"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 