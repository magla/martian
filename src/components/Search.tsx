import Fuse from 'fuse.js';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useCallback, useContext, useMemo, useRef, useState } from 'react';
import SearchContext from '../context/SearchContext';
import useConsoleLog from '../hooks/useConsoleLog';
import TextInput from './TextInput';

const componentName = 'Search';
const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  shouldSort: true,
  threshold: 0.2,
};

const Search = ({
  searchData = [],
  searchKeys = [],
  onSearch,
}: {
  searchData: any[];
  searchKeys?: string[];
  onSearch?: (values: string[]) => void;
}) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setResults } = useContext(SearchContext);

  const fuseSearch = useMemo(
    () =>
      new Fuse(searchData, {
        ...fuseOptions,
        keys: searchKeys,
      }),
    [searchData, searchKeys],
  );

  useConsoleLog(componentName);

  const handleClickSearch = useCallback(() => {
    inputRef.current && inputRef.current.focus();

    setSearchClicked(!searchClicked);
  }, [inputRef, searchClicked]);

  const search = useCallback(
    debounce((searchQuery) => {
      if (searchQuery.trim() === '') {
        setResults && setResults(searchData);
        onSearch && onSearch(searchData);
      } else {
        const newValues = fuseSearch.search(searchQuery).map((result) => {
          return result.item;
        });

        setResults && setResults(newValues);
        onSearch && onSearch(newValues);
      }
    }, 100),
    [fuseSearch, searchData, onSearch],
  );

  const handleClickClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
    search('');
  }, [inputRef, search]);

  return (
    <div className="flex items-center justify-between mx-12 grow">
      <div className={`${searchClicked ? 'w-full' : 'w-0'} duration-300 overflow-hidden`}>
        <TextInput
          ref={inputRef}
          name="search"
          placeholder="Search by user"
          onChange={(e: ChangeEvent<HTMLInputElement>) => search(e.target.value)}
        >
          <button onClick={handleClickClear}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </TextInput>
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
