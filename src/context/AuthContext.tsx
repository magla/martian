import React, { ReactElement, createContext, useEffect, useState } from 'react';

type AuthProviderValue = {
  authenticated?: boolean;
  setAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthProviderValue>({});

type ContextProps = {
  children: ReactElement;
};

const AuthProvider = ({ children }: ContextProps) => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('authenticated'));
  const value = { authenticated, setAuthenticated };

  useEffect(() => {
    if (!authenticated) {
      localStorage.removeItem('authenticated');
    } else {
      localStorage.setItem('authenticated', JSON.stringify(authenticated));
    }
  }, [authenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export { AuthProvider };
