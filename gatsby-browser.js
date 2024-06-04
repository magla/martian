import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import { MartianProvider } from './src/contexts/MarianContext';
import { SearchProvider } from '/src/contexts/SearchContext';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <MartianProvider>
    <AuthProvider>
      <SearchProvider>{element}</SearchProvider>
    </AuthProvider>
  </MartianProvider>
);
