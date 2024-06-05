import Eye from 'components/svgs/Eye';
import useConsoleLog from 'hooks/useConsoleLog';
import React from 'react';

interface EyeButtonProps {
  show: boolean;
  onClick: () => void;
}

const componentName = 'EyeButton';

const EyeButton = ({ show, onClick }: EyeButtonProps) => {
  useConsoleLog(componentName);

  return (
    <button type="button" onClick={onClick} className="text-black">
      <Eye show={show} />
    </button>
  );
};

export default EyeButton;
