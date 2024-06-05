import { useContext, useEffect } from 'react';
import MartianContext from '../context/MarianContext';

const useConsoleLog = (componentName: string) => {
  const text = useContext(MartianContext);

  useEffect(() => {
    console.log(`${text} ${componentName}`);
  }, [text]);
};

export default useConsoleLog;
