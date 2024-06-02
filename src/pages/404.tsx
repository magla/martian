import React from 'react';
import Centered from '../components/Centered';
import Layout from '../components/Layout';
import useConsoleLog from '../hooks/useConsoleLog';

const componentName = 'NotFoundPage';

const NotFoundPage = () => {
  useConsoleLog(componentName);

  return (
    <Layout>
      <Centered>
        <div className="text-center">
          <h1>Page Not Found</h1>
          <p className="mt-4">Sorry, the requested page does not exist.</p>
        </div>
      </Centered>
    </Layout>
  );
};

export default NotFoundPage;
