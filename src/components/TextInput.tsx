import React, { ChangeEventHandler, ReactElement } from 'react';
import { useConsoleLog } from '../hooks/useConsoleLog';

export enum TextInputType {
  text = 'text',
  email = 'email',
  password = 'password',
}

export interface TextInputProps {
  type?: TextInputType;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  showError?: boolean;
  errorText?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  children?: ReactElement;
}

const componentName = 'TextInput';

const TextInput = ({
  type,
  name,
  onChange,
  label,
  placeholder,
  autoComplete,
  children,
  showError,
  errorText,
}: TextInputProps) => {
  useConsoleLog(componentName);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium text-black">
          {label}
        </label>
      )}
      <div className="relative text-gray">
        <input
          onChange={onChange}
          type={type}
          name={name}
          className="block w-full py-3 mb-2 text-gray-600 border-b border-black bg-gray-50 sm:text-sm ring-transparent focus:border-red focus:outline-none focus:ring-gray-400"
          placeholder={placeholder}
          autoComplete={autoComplete}
          defaultValue={undefined}
        />
        {children && (
          <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">{children}</span>
        )}
      </div>
      {showError && <div className="text-red">{errorText}</div>}
    </div>
  );
};

export default TextInput;
