import Clear from 'components/svgs/Search';
import useConsoleLog from 'hooks/useConsoleLog';
import React from 'react';

interface ClearButtonProps {
  onClick: () => void;
}

const componentName = 'ClearButton';

const ClearButton = ({ onClick }: ClearButtonProps) => {
  useConsoleLog(componentName);

  return (
    <button type="button" onClick={onClick}>
      <Clear />
    </button>
  );
};

export default ClearButton;
