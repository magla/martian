import React from 'react';
import { MartianProvider } from './src/contexts/MarianContext';
import { SearchProvider } from './src/contexts/SearchContext';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <MartianProvider>
    <SearchProvider>{element}</SearchProvider>
  </MartianProvider>
);
