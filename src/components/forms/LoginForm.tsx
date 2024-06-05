import SubmitButton from 'components/buttons/SubmitButton';
import PasswordInput from 'components/inputs/PasswordInput';
import TextInput, { TextInputType } from 'components/inputs/TextInput';
import { navigate } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import useForm, { ValidatorType } from 'hooks/useForm';
import * as React from 'react';
import { handleLogin } from 'services/auth';

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
  useConsoleLog(componentName);

  const { submitted, handleInput, handleSubmitForm, inputState } = useForm(fields);

  const handleLoginSuccess = React.useCallback(() => {
    handleLogin(inputState.email.value);
    navigate('/app');
  }, [inputState]);

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
        onClick={(e: React.FormEvent) => handleSubmitForm(e, handleLoginSuccess)}
      />
    </form>
  );
};

export default LoginForm;
