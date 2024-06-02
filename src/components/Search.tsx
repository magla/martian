import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import TextInput from './TextInput';

const componentName = 'Search';

const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searched, setSearched] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  useConsoleLog(componentName);

  const handleClickSearch = useCallback(() => {
    inputRef.current && inputRef.current.focus();

    setSearchClicked(!searchClicked);
  }, [inputRef, searchClicked]);

  return (
    <div className="flex items-center justify-between mx-12 grow">
      <div className={`${searchClicked ? 'w-full' : 'w-0'} duration-300 overflow-hidden`}>
        <TextInput
          ref={inputRef}
          name="search"
          placeholder="Search by user"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearched(e.target.value)}
        />
      </div>
      <button onClick={handleClickSearch} className="ml-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
