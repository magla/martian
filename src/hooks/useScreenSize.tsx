import { useCallback, useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const useScreenSize = () => {
  const { md, lg } = fullConfig.theme.screens;
  const [windowSize, setWindowSize] = useState<number>(0);

  const listener = useCallback(() => setWindowSize(window.screen.availWidth), []);

  useEffect(() => {
    listener();
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return {
    md: windowSize >= parseInt(md, 10),
    lg: windowSize >= parseInt(lg, 10),
  };
};

export default useScreenSize;
