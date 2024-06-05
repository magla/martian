import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';
import SEO from './SEO';

const componentName = 'Layout';

const Layout = ({
  children,
  showLogout = false,
}: {
  children: React.ReactElement;
  showLogout?: boolean;
}) => {
  const { title } = useSiteMetadata();

  useConsoleLog(componentName);

  return (
    <div className="flex flex-col w-full mx-auto bg-white lg:max-w-screen-xl">
      <Header text={title} showLogout={showLogout} />
      <div className="p-4">{children}</div>
    </div>
  );
};
export const Head = () => <SEO />;

export default Layout;
