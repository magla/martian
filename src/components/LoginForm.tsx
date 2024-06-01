import * as React from 'react';
import TextInput, { TextInputType } from './TextInput';

import { useConsoleLog } from '../hooks/useConsoleLog';
import useForm from '../hooks/useForm';
import Button from './Button';
import PasswordInput from './PasswordInput';

const componentName = 'LoginForm';

const LoginForm = () => {
  useConsoleLog(componentName);

  const { formState, handleInput, handleSubmit } = useForm({
    email: {
      type: 'email',
    },
    password: {
      type: 'password',
    },
  });

  return (
    <form className="flex flex-col">
      <div className="mb-6">
        <TextInput
          label="Email"
          name="email"
          type={TextInputType.email}
          placeholder="your@email.com"
          autoComplete="on"
          onChange={handleInput}
          errorText={formState.errors.email}
          showError={!formState.valid && !!formState.errors.email}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          label="Password"
          name="password"
          autoComplete="new-password"
          onChange={handleInput}
          errorText={formState.errors.password}
          showError={!formState.valid && !!formState.errors.password}
        />
      </div>
      <Button text="Login" type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;
