'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { catalogsData } from '../data';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Catalog } from '../types';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/base/Badge';
import { FaBook } from 'react-icons/fa';

interface CatalogListProps {
  catalogs: Catalog[];
}

const CatalogsList = memo(function CatalogsList({ catalogs }: CatalogListProps) {
  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-20')}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog) => (
            <motion.div
              key={catalog.id}
              variants={FADE_IN_UP}
              className={twMerge(
                'flex-none w-full',
                'bg-white rounded-2xl overflow-hidden',
                'border border-[#187baa]/10',
                'shadow-lg shadow-[#187baa]/5',
                'hover:shadow-xl hover:shadow-[#187baa]/10',
                'hover:border-[#187baa]/20',
                'transform hover:-translate-y-1',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={catalog.imageUrl}
                  alt={catalog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 border-t border-[#187baa]/10">
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                  'text-[#187baa] mb-3',
                  'line-clamp-2'
                )}>
                  {catalog.title}
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600 mb-6',
                  'line-clamp-2'
                )}>
                  {catalog.description}
                </p>
                <a
                  href={catalog.pdfUrl}
                  download
                  className={twMerge(
                    'inline-flex items-center justify-center w-full px-5 py-2.5',
                    'bg-[#187baa] text-white rounded-xl',
                    'hover:bg-[#156a93]',
                    'shadow-md shadow-[#187baa]/10',
                    'hover:shadow-lg hover:shadow-[#187baa]/20',
                    EFFECTS_STYLES.base.transition.base
                  )}
                >
                  <FaBook className="w-5 h-5 mr-2" />
                  Télécharger le catalogue
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </m.div>
    </div>
  );
});

export default CatalogsList; 