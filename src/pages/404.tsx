import Centered from 'components/layout/Centered';
import Layout from 'components/layout/Layout';
import LogoTitle from 'components/layout/LogoTitle';
import { Link } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import useSiteMetadata from 'hooks/useSiteMetadata';
import React from 'react';

const componentName = 'NotFoundPage';

const NotFoundPage = (_: { default: boolean }) => {
  const { title } = useSiteMetadata();

  useConsoleLog(componentName);

  return (
    <>
      <Layout>
        <div className="flex items-center justify-between my-6 bg-white">
          <Link to="/app">
            <LogoTitle text={title} />
          </Link>
        </div>
      </Layout>
      <Centered>
        <div className="text-center">
          <h1>Page Not Found</h1>
          <p className="mt-4">Sorry, the requested page does not exist.</p>
        </div>
      </Centered>
    </>
  );
};

export default NotFoundPage;
