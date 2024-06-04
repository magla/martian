import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import useConsoleLog from '../hooks/useConsoleLog';

const fullConfig = resolveConfig(tailwindConfig);
const componentName = 'PostList';

const useScreenSize = () => {
  useConsoleLog(componentName);

  const { md, lg } = fullConfig.theme.screens;
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);

  useEffect(() => {
    const listener = () => setWindowSize(window.screen.availWidth);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return {
    md: windowSize >= parseInt(md, 10),
    lg: windowSize >= parseInt(lg, 10),
  };
};

export default useScreenSize;
