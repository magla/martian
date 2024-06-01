import { useContext, useEffect } from 'react';
import MartianContext from '../context/MarianContext';

export const useConsoleLog = (componentName: string) => {
  const text = useContext(MartianContext);

  useEffect(() => {
    console.log(`${text} ${componentName}`);
  }, [text]);
};
