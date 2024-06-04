import Search from 'components/svgs/Search';
import useConsoleLog from 'hooks/useConsoleLog';
import React from 'react';

interface SearchButtonProps {
  onClick: () => void;
}

const componentName = 'SearchButton';

const SearchButton = ({ onClick }: SearchButtonProps) => {
  useConsoleLog(componentName);

  return (
    <button type="button" onClick={onClick}>
      <Search />
    </button>
  );
};

export default SearchButton;
