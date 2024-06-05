import React from 'react';
import { MartianProvider } from './src/context/MarianContext';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => <MartianProvider>{element}</MartianProvider>;
