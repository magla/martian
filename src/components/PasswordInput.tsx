import React, { useCallback, useMemo, useState } from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Eye from './Eye';
import TextInput, { TextInputProps, TextInputType } from './TextInput';

const componentName = 'PasswordInput';

const PasswordInput = ({ label, name, autoComplete, ...props }: TextInputProps) => {
  const [hidePassword, setHidePassword] = useState(true);

  useConsoleLog(componentName);

  const handleClick = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const inputType = useMemo(
    () => (hidePassword ? TextInputType.password : TextInputType.text),
    [hidePassword],
  );

  return (
    <TextInput label={label} type={inputType} name={name} autoComplete={autoComplete} {...props}>
      <Eye show={!hidePassword} onClick={handleClick} />
    </TextInput>
  );
};

export default PasswordInput;
