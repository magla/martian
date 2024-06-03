import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import Centered from '../components/Centered';
import LoginForm from '../components/LoginForm';
import LogoTitle from '../components/LogoTitle';
import SEO from '../components/SEO';
import AuthContext from '../context/AuthContext';
import useConsoleLog from '../hooks/useConsoleLog';
import useSiteMetadata from '../hooks/useSiteMetadata';

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
