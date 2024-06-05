import * as React from 'react';
import TextInput, { TextInputType } from '../inputs/TextInput';

import AuthContext from 'contexts/AuthContext';
import useConsoleLog from 'hooks/useConsoleLog';
import useForm, { ValidatorType } from 'hooks/useForm';
import { useContext } from 'react';
import SubmitButton from '../buttons/SubmitButton';
import PasswordInput from '../inputs/PasswordInput';

const componentName = 'LoginForm';

const fields = {
  email: {
    type: TextInputType.email,
    defaultValue: process.env.GATSBY_USERNAME,
    validators: [ValidatorType.required, ValidatorType.email],
  },
  password: {
    type: TextInputType.password,
    defaultValue: process.env.GATSBY_PASSWORD,
    validators: [ValidatorType.required],
  },
};

const LoginForm = () => {
  const { setAuthenticated } = useContext(AuthContext);

  useConsoleLog(componentName);

  const { submitted, handleInput, handleSubmitForm, inputState } = useForm(fields);

  return (
    <form className="flex flex-col mt-6">
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
