import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import Centered from '../components/Centered';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
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
      <>
        <Header text={title} showLogout={authenticated} />
        <LoginForm />
      </>
    </Centered>
  );
};

export const Head = () => <SEO />;

export default Login;
