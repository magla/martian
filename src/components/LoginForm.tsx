import * as React from 'react';
import TextInput, { TextInputType } from './TextInput';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import useConsoleLog from '../hooks/useConsoleLog';
import useForm, { ValidatorType } from '../hooks/useForm';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const componentName = 'LoginForm';

const fields = {
  email: {
    type: TextInputType.email,
    defaultValue: 'your@email.com',
    validators: [ValidatorType.required, ValidatorType.email],
  },
  password: {
    type: TextInputType.password,
    defaultValue: '123456',
    validators: [ValidatorType.required],
  },
};

const LoginForm = () => {
  const { setAuthenticated } = useContext(AuthContext);

  useConsoleLog(componentName);

  const { submitted, handleInput, handleSubmitForm, inputState } = useForm(fields);

  return (
    <form className="flex flex-col px-4">
      <div className="mb-6">
        <TextInput
          label="Email"
          name="email"
          type={fields.email.type}
          defaultValue={fields.email.defaultValue}
          autoComplete="on"
          onChange={handleInput}
          {...(submitted && { errors: inputState.email.errors })}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          label="Password"
          name="password"
          onChange={handleInput}
          defaultValue={fields.password.defaultValue}
          {...(submitted && { errors: inputState.password.errors })}
        />
      </div>
      <SubmitButton
        text="Login"
        onClick={(e: React.FormEvent) =>
          handleSubmitForm(e, () => setAuthenticated && setAuthenticated(true))
        }
      />
    </form>
  );
};

export default LoginForm;
