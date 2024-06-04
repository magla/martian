import LoginForm from 'components/forms/LoginForm';
import Centered from 'components/layout/Centered';
import LogoTitle from 'components/layout/LogoTitle';
import SEO from 'components/layout/SEO';
import AuthContext from 'contexts/AuthContext';
import { navigate } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import useSiteMetadata from 'hooks/useSiteMetadata';
import React, { useContext } from 'react';

const componentName = 'Login';

const Login = () => {
  const { authenticated } = useContext(AuthContext);
  const { title } = useSiteMetadata();

  useConsoleLog(componentName);

  if (authenticated) {
    navigate('/app');

    return null;
  }

  return (
    <Centered>
      <div className="my-6">
        <LogoTitle text={title} />
        <LoginForm />
      </div>
    </Centered>
  );
};

export const Head = () => <SEO title="Welcome to Martian" />;

export default Login;
