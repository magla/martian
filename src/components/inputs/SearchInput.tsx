import ClearButton from 'components/buttons/ClearButton';
import SearchButton from 'components/buttons/SearchButton';
import SearchContext from 'contexts/SearchContext';
import Fuse from 'fuse.js';
import useConsoleLog from 'hooks/useConsoleLog';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useCallback, useContext, useMemo, useRef, useState } from 'react';
import TextInput from './TextInput';

const componentName = 'SearchInput';
const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  shouldSort: true,
  threshold: 0.2,
};

const SearchInput = ({
  searchData = [],
  searchKeys = [],
  onSearch,
}: {
  searchData: any[];
  searchKeys?: string[];
  onSearch?: (values: string[]) => void;
}) => {
  useConsoleLog(componentName);

  const [query, setQuery] = useState('');
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

  const handleClickSearch = useCallback(() => {
    inputRef.current && inputRef.current.focus();

    setSearchClicked(!searchClicked);
  }, [inputRef, searchClicked]);

  const search = useCallback(
    debounce((searchQuery) => {
      setQuery(searchQuery.trim());

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

  const showClear = useMemo(() => !!query, [query]);

  return (
    <div className="items-center justify-between hidden mx-12 sm:flex grow">
      <div className={`${searchClicked ? 'w-full' : 'w-0'} duration-300 overflow-hidden`}>
        <TextInput
          ref={inputRef}
          name="search"
          placeholder="Search by user"
          onChange={(e: ChangeEvent<HTMLInputElement>) => search(e.target.value)}
        >
          {showClear ? <ClearButton onClick={handleClickClear} /> : undefined}
        </TextInput>
      </div>
      <SearchButton onClick={handleClickSearch} />
    </div>
  );
};

export default SearchInput;
