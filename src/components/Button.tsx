import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';

const componentName = 'Button';

type ButtonProps = {
  text: string;
  onClick: (e: React.SyntheticEvent) => any;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  useConsoleLog(componentName);

  return (
    <button type="button" disabled={disabled} onClick={onClick} className="">
      {text}
    </button>
  );
};

export default Button;
