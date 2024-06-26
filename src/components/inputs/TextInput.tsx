import useConsoleLog from 'hooks/useConsoleLog';
import React, { ChangeEventHandler, ReactElement, forwardRef } from 'react';

export enum TextInputType {
  text = 'text',
  email = 'email',
  password = 'password',
}

export interface TextInputProps {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: TextInputType;
  errors?: string[];
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
  children?: ReactElement;
}

const componentName = 'TextInput';

const TextInput = forwardRef(
  (
    {
      type,
      name,
      onChange,
      label,
      placeholder,
      autoComplete,
      children,
      defaultValue,
      errors,
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
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
            ref={ref}
            onChange={onChange}
            type={type}
            id={name}
            name={name}
            className="block w-full py-2 mb-2 text-black border-b border-black sm:text-sm ring-transparent focus:border-red focus:outline-none"
            placeholder={placeholder}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
          />
          {children && (
            <span className="absolute inset-y-0 right-0 flex items-center p-1">{children}</span>
          )}
        </div>
        {errors && <div className="text-red first-letter:uppercase">{errors[0]}</div>}
      </div>
    );
  },
);

export default TextInput;
