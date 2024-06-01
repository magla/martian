import React, { ReactElement, createContext } from 'react';

const MartianContext = createContext('');

type ContextProps = {
  children: ReactElement;
};

const MartianProvider = ({ children }: ContextProps) => {
  return <MartianContext.Provider value="Hello from">{children}</MartianContext.Provider>;
};

export default MartianContext;

export { MartianProvider };
