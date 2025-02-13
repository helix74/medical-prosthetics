'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Produits', href: '/produits' },
  { label: 'Catalogues', href: '/catalogues' },
  { label: 'Services', href: '/services' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ className, ...props }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-[#187baa] text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a 
                  href="tel:+21699221620" 
                  className="flex items-center gap-2 text-sm hover:text-white/90 transition-colors"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>+216 99 221 620</span>
                </a>
                <a 
                  href="mailto:direction@deltamedicalplus.tn" 
                  className="flex items-center gap-2 text-sm hover:text-white/90 transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>direction@deltamedicalplus.tn</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/deltamedplus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm hover:text-white/90 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  <span className="hidden lg:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header 
          className={twMerge(
            'bg-white',
            isScrolled ? 'shadow-md' : 'shadow-sm',
            className
          )} 
          {...props}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Delta Med Plus"
                  width={40}
                  height={40}
                  className="w-auto h-10"
                  priority
                />
                <span className="text-[#187baa] font-semibold text-xl">
                  Delta Med Plus
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                <nav className="flex items-center gap-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={twMerge(
                        'relative h-20 flex items-center justify-center',
                        'text-sm font-medium',
                        'transition-colors duration-200',
                        pathname === item.href 
                          ? 'text-[#187baa]' 
                          : 'text-neutral-600 hover:text-[#187baa]'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className={twMerge(
                    'px-6 py-2.5 rounded-xl',
                    'bg-[#187baa] text-white',
                    'text-sm font-medium',
                    'transition-all duration-200',
                    'hover:bg-[#156a93]',
                    'shadow-sm hover:shadow-md'
                  )}
                >
                  Demander un devis
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 text-[#187baa]"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span 
                    className={twMerge(
                      'w-full h-0.5 bg-current transform transition-all duration-300',
                      isOpen && 'rotate-45 translate-y-2'
                    )} 
                  />
                  <span 
                    className={twMerge(
                      'w-full h-0.5 bg-current transition-all duration-300',
                      isOpen && 'opacity-0'
                    )} 
                  />
                  <span 
                    className={twMerge(
                      'w-full h-0.5 bg-current transform transition-all duration-300',
                      isOpen && '-rotate-45 -translate-y-2'
                    )} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-[#187baa]/10"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={twMerge(
                          'px-4 py-2 rounded-lg',
                          'text-sm font-medium',
                          'transition-colors duration-200',
                          pathname === item.href
                            ? 'bg-[#187baa]/10 text-[#187baa]'
                            : 'text-neutral-600 hover:bg-[#187baa]/5 hover:text-[#187baa]'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className={twMerge(
                        'px-4 py-2 rounded-lg mt-4',
                        'bg-[#187baa] text-white',
                        'text-sm font-medium',
                        'transition-colors duration-200',
                        'hover:bg-[#156a93]'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Demander un devis
                    </Link>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20 md:h-[calc(theme('spacing.20')_+_theme('spacing.8'))]" />
    </>
  );
} 