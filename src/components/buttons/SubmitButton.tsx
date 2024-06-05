import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'SubmitButton';

type SubmitButtonProps = {
  text: string;
  onClick: (e: React.SyntheticEvent) => any;
  disabled?: boolean;
};

const SubmitButton = ({ text, onClick, disabled = false }: SubmitButtonProps) => {
  useConsoleLog(componentName);

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className="
        w-full flex justify-between items-center bg-white relative mb-6 px-5 py-2.5 cursor-pointer
        text-black font-bold text-sm text-left uppercase
        disabled:text-opacity-50 disabled:hover:text-black disabled:hover:text-opacity-50 disabled:hover:before:w-full
        before:top-0 before:left-0 before:border before:h-full before:w-full before:absolute before:transition-all before:duration-300
        hover:text-red hover:before:w-[calc(100%-2rem)] 
      "
    >
      {text}
      <div className="z-10 bg-white">
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
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default SubmitButton;
