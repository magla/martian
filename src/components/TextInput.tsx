import React, { ReactElement, useContext, useEffect } from 'react';
import { CommonProps } from '../types';

export enum TextInputType {
  text = 'text',
  email = 'email',
  password = 'password',
}

export interface TextInputProps {
  type?: TextInputType;
  name: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  children?: ReactElement;
}

const componentName = 'TextInput';

const TextInput = ({ type, name, label, placeholder, autoComplete, children }: TextInputProps) => {
  // const message = useContext();

  // useEffect(() => {
  //   console.log(`${message} ${componentName}`);
  // }, []);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium text-black">
          {label}
        </label>
      )}
      <div className="relative text-gray">
        <input
          type={type}
          name={name}
          className="block w-full py-3 mb-2 text-gray-600 border-b border-black bg-gray-50 sm:text-sm ring-transparent focus:border-red focus:outline-none focus:ring-gray-400"
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {children && (
          <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">{children}</span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
