import MartianContext from 'contexts/MarianContext';
import { useContext, useEffect } from 'react';

const useConsoleLog = (componentName: string) => {
  const text = useContext(MartianContext);

  useEffect(() => {
    console.log(`${text} ${componentName}`);
  }, [text]);
};

export default useConsoleLog;
