'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { CatalogsHeader, CatalogsList, CatalogsCategories } from './components';
import { CATALOGS } from './data';

const Catalogs = memo(function Catalogs() {
  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={FADE_IN_UP}
    >
      <CatalogsHeader />
      <CatalogsCategories />
      <CatalogsList catalogs={CATALOGS} />
    </m.div>
  );
});

export default Catalogs; 