import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { MartianProvider } from './src/context/MarianContext';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <MartianProvider>
    <AuthProvider>{element}</AuthProvider>
  </MartianProvider>
);
