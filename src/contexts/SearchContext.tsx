import React, { ReactElement, createContext, useState } from 'react';

type SearchProviderValue = {
  results?: any[];
  setResults?: React.Dispatch<React.SetStateAction<any[]>>;
};

const SearchContext = createContext<SearchProviderValue>({});

type ContextProps = {
  children: ReactElement;
};

const SearchProvider = ({ children }: ContextProps) => {
  const [results, setResults] = useState<any[]>([]);
  const value = { results, setResults };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchContext;

export { SearchProvider };
