import EyeButton from 'components/buttons/EyeButton';
import useConsoleLog from 'hooks/useConsoleLog';
import React, { useCallback, useMemo, useState } from 'react';
import TextInput, { TextInputProps, TextInputType } from './TextInput';

const componentName = 'PasswordInput';

const PasswordInput = ({ label, name, autoComplete, ...props }: TextInputProps) => {
  useConsoleLog(componentName);

  const [hidePassword, setHidePassword] = useState(true);

  const handleClick = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const inputType = useMemo(
    () => (hidePassword ? TextInputType.password : TextInputType.text),
    [hidePassword],
  );

  return (
    <TextInput label={label} type={inputType} name={name} autoComplete={autoComplete} {...props}>
      <EyeButton show={!hidePassword} onClick={handleClick} />
    </TextInput>
  );
};

export default PasswordInput;
