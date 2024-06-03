import React from 'react';
import Centered from '../components/Centered';
import Header from '../components/Header';
import useConsoleLog from '../hooks/useConsoleLog';
import useSiteMetadata from '../hooks/useSiteMetadata';

const componentName = 'NotFoundPage';

const NotFoundPage = () => {
  const { title } = useSiteMetadata();

  useConsoleLog(componentName);

  return (
    <>
      <Header text={title} />
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
