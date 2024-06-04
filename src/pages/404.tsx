import Centered from 'components/layout/Centered';
import Header from 'components/layout/Header';
import useConsoleLog from 'hooks/useConsoleLog';
import useSiteMetadata from 'hooks/useSiteMetadata';
import React from 'react';

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
