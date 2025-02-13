'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MAIN_NAVIGATION, TOP_BAR_LINKS } from './config';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';

export default memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  return (
    <>
      <div className="h-[88px]" />
      
      <header className={twMerge(
        'fixed top-0 left-0 right-0 z-[100]',
        'bg-white w-full',
        EFFECTS_STYLES.base.transition.base,
        isScrolled && [EFFECTS_STYLES.base.shadow.lg, 'bg-white/95 backdrop-blur-lg']
      )}>
        {/* Top Bar */}
        <div className="bg-[#187baa] text-white py-2">
          <div className={CONTAINER_STYLES.variants.default}>
            <div className="flex justify-center sm:justify-start items-center">
              <div className="flex items-center gap-6">
                {TOP_BAR_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={twMerge(
                      'flex items-center gap-2 text-sm text-white/80',
                      EFFECTS_STYLES.base.transition.base,
                      'hover:text-white'
                    )}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="text-white/70">
                      <link.icon className="w-4 h-4" />
                    </span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={twMerge(
          'bg-white relative',
          EFFECTS_STYLES.base.transition.base,
          isScrolled && 'bg-white/95 backdrop-blur-lg border-b border-[#187baa]/10'
        )}>
          <div className={CONTAINER_STYLES.variants.default}>
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Delta Med Plus"
                  width={50}
                  height={50}
                  className="object-contain w-auto h-10"
                  priority
                />
                <span className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(4),
                  'text-[#187baa]'
                )}>
                  Delta Med Plus
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {MAIN_NAVIGATION.map((item) => (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setActiveSubmenu(item.path)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={item.path}
                      className={twMerge(
                        TYPOGRAPHY_STYLES.utils.getBody('sm'),
                        'font-medium py-6',
                        EFFECTS_STYLES.base.transition.base,
                        'hover:text-[#187baa]',
                        pathname === item.path ? 'text-[#187baa]' : 'text-neutral-600'
                      )}
                    >
                      {item.label}
                      {item.submenu && (
                        <span className="inline-block ml-1">
                          <svg className="w-4 h-4 inline-block transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      )}
                    </Link>

                    {/* Submenu */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === item.path && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={twMerge(
                              'absolute top-full left-0 w-64 bg-white',
                              'rounded-xl',
                              EFFECTS_STYLES.base.shadow.lg,
                              'border border-[#187baa]/10 py-2 mt-1'
                            )}
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className={twMerge(
                                  'block px-4 py-2',
                                  TYPOGRAPHY_STYLES.utils.getBody('sm'),
                                  'text-neutral-600 hover:bg-[#187baa]/5 hover:text-[#187baa]',
                                  EFFECTS_STYLES.base.transition.base
                                )}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className={twMerge(
                    'px-4 py-2 rounded-lg',
                    'bg-[#187baa] text-white',
                    'hover:bg-[#156a93]',
                    EFFECTS_STYLES.base.transition.base,
                    'shadow-sm hover:shadow-md'
                  )}
                >
                  Demander un devis
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={twMerge(
                  'lg:hidden p-2 text-[#187baa] hover:text-[#156a93]',
                  EFFECTS_STYLES.base.transition.base
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Menu</span>
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-b border-[#187baa]/10"
              >
                <div className={CONTAINER_STYLES.variants.default}>
                  <nav className="py-4">
                    {MAIN_NAVIGATION.map((item) => (
                      <div key={item.path}>
                        <Link
                          href={item.path}
                          className={twMerge(
                            'block px-4 py-2',
                            TYPOGRAPHY_STYLES.utils.getBody('sm'),
                            'font-medium rounded-lg',
                            EFFECTS_STYLES.base.transition.base,
                            pathname === item.path 
                              ? 'text-[#187baa] bg-[#187baa]/5' 
                              : 'text-neutral-600 hover:bg-[#187baa]/5 hover:text-[#187baa]'
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className={twMerge(
                                  'block px-4 py-2',
                                  TYPOGRAPHY_STYLES.utils.getBody('sm'),
                                  'text-[#187baa] hover:text-[#156a93]',
                                  EFFECTS_STYLES.base.transition.base
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="px-4 pt-4 mt-4 border-t border-[#187baa]/10">
                      <Link
                        href="/contact"
                        className={twMerge(
                          'block px-4 py-2 rounded-lg',
                          'bg-[#187baa] text-white',
                          'hover:bg-[#156a93]',
                          EFFECTS_STYLES.base.transition.base,
                          'text-center'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}); 