import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { MartianProvider } from './src/context/MarianContext';
import { SearchProvider } from '/src/context/SearchContext';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <MartianProvider>
    <AuthProvider>
      <SearchProvider>{element}</SearchProvider>
    </AuthProvider>
  </MartianProvider>
);
