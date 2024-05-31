import React, { ReactElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CommonProps } from '../types';
import TextInput, { TextInputProps, TextInputType } from './TextInput';
import Eye from './Eye';

const componentName = 'PasswordInput';

const PasswordInput = ({ label, name, autoComplete }: TextInputProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  // const message = useContext();

  // useEffect(() => {
  //   console.log(`${message} ${componentName}`);
  // }, []);

  const handleClick = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const inputType = useMemo(
    () => (hidePassword ? TextInputType.password : TextInputType.text),
    [hidePassword],
  );

  return (
    <TextInput label={label} type={inputType} name={name} autoComplete={autoComplete}>
      <Eye show={!hidePassword} onClick={handleClick} />
    </TextInput>
  );
};

export default PasswordInput;
