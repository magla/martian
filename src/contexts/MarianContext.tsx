import React, { ReactElement, createContext } from 'react';

const MartianContext = createContext('');

type ContextProps = {
  children: ReactElement;
};

const value = 'Hello from';

const MartianProvider = ({ children }: ContextProps) => {
  return <MartianContext.Provider value={value}>{children}</MartianContext.Provider>;
};

export default MartianContext;

export { MartianProvider };
