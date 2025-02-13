import { motion } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import Button from '@/components/ui/base/Button';
import Link from 'next/link';
import { HeroContentProps } from '../types';

export const HeroContent = ({ title, subtitle, description }: HeroContentProps) => {
  return (
    <motion.div 
      className="text-left lg:col-span-7 w-full max-w-none mx-auto lg:mx-0 pr-4"
      variants={FADE_IN_UP}
    >
      {/* Badge supérieur */}
      <div className="inline-flex items-center px-8 py-4 mb-12 rounded-full bg-[#187baa]/10 text-[#187baa] font-medium text-base border border-[#187baa]/20">
        <span className="mr-3">🔬</span>
        {subtitle}
        <span className="ml-3 px-3 py-1 bg-[#187baa]/20 rounded-full text-sm">Certifié ISO</span>
      </div>
      
      {/* Titre et description */}
      <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl md:text-6xl leading-relaxed text-justify mb-8">
        <span className="block text-[#187baa] bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent mb-3 w-full">
          {title}
        </span>
      </h1>
      
      <p className="mt-8 text-lg leading-8 text-neutral-600 text-justify mb-12">
        {description}
      </p>
      
      {/* Boutons d'action */}
      <div className="mt-12 flex flex-wrap gap-6">
        <Link href="/catalogue">
          <Button size="lg" className="shadow-lg shadow-[#187baa]/20 px-8">
            Catalogue produits
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg" className="px-8">
            Demander un devis
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}; 