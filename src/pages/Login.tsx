import LoginForm from 'components/forms/LoginForm';
import Centered from 'components/layout/Centered';
import Footer from 'components/layout/Footer';
import LogoTitle from 'components/layout/LogoTitle';
import SEO from 'components/layout/SEO';
import { PageProps, navigate } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import useSiteMetadata from 'hooks/useSiteMetadata';
import React from 'react';
import { isLoggedIn } from 'services/auth';

const componentName = 'Login';

const Login = (props: PageProps) => {
  const { title } = useSiteMetadata();

  useConsoleLog(componentName);

  if (isLoggedIn()) {
    navigate('/app');
    return null;
  }

  return (
    <>
      <Centered>
        <div className="my-6">
          <LogoTitle text={title} />
          <LoginForm />
        </div>
      </Centered>
      <Footer />
    </>
  );
};

export const Head = () => <SEO title="Welcome to Martian" />;

export default Login;
